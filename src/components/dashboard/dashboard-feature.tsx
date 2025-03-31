/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2xm7xDsz2Hc6VQ4HULNRdyfRh7qeRYPdhUdcmDysuowihi8gf4fLzBGex8cJgBzYyfJk6nV91L6d7nfpTBxejB2n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TAVNVFpfrZc4WJFeVpbdTM4Zvx385rhDToZjje7H8gpuNQZHsvMWR8QjDyRsB4GYV3aYktfqCeJap9qVJfokr6",
  "key1": "366uHsn8kNpFcFZH4DUzwv7RqLKeN7QqxyTxZ5o6RPAEFF1zuftKC7yXowXZqcLKmoeKR5UuYEzhAkjLScWCRb6E",
  "key2": "4ggbJ4uUjZXZAQrW5SJzLSMN8QZRjyYUwRKtqYDmPMPi2oR6WELyVyfEs4zE3B2P1ZgE1ssBUfzocLtYyNpnnWK4",
  "key3": "3XqSQLqX9xHeHJHVYvzKApTkVrCe8EzkmwFa4ziEoJcH1vtbaqe6PzaajZYG8HpaCSMw6d8KCZM2cakbU6UzNi5k",
  "key4": "4gU3dCUUrCbCQCM2kEcU3TGMFLwmDeujfKBZh5XT9QDohFMymnBUfo6KN9n8wEDPrnFCpv5NETMaswip7P5s6YPw",
  "key5": "qYEhpqA7FkGWBNZeJxZr2R9QXRrZupQGQn4PMeUkgGVeezN9X6GJPNn6GC1r3mBnvnQxvD3mqjRj4mUfMmatVbS",
  "key6": "UZ6MsQR9muKzmwNbpRZt9eq2pQUXv17bDCRkYdMLST2peNEwZmk7umqxZxSGMXa33J2MfA7hdGjkNqyi66PQs1U",
  "key7": "aUHp8uLRf2DZKPjcHtJtu3eTcfyjCPDrr1HsnWxaFjmgYthz8RHVU2GHU7owDYSoHENPbtMupKcaF2czYU7MRzi",
  "key8": "6Y5pMbNj4LVvGosBrb1uteyCGWRN7J4ougrAMJ9uiJWv2XVc1GqhehhiRTwWptPb5DARJs3p5emJEf374AHbYJb",
  "key9": "39nLgg39e9usNnbK3DyYCjqQob7reDym15TCMso7pZYQzS3tMPkLm8jYkZRQabZjTx1bTrcqqW3TuEyWdhqX2oJh",
  "key10": "oFsnqbfUzmPb98Q7VYBJhc7svC44k3fcr1tATE2bMeWqkpgN2jw1fYfB2sr3Wad5VNuiGzLMVSSX6uvzE6CoUWX",
  "key11": "3pVKNcfsUMZM2BGJMF8aTrWip8LJLdKgD1BPQMnfbVvUgidQbENHy97sjNobGaTrAaTHrvfEZArkVYsdZt8DXHmJ",
  "key12": "2VXQq3ZULrR9Bq5bH8SpaznLwUTD1D1Zs3ADbyqKxo8cRDeXdHddXixLb3jJN4bgbx9JJTLTQxYw5grutFk8dyA9",
  "key13": "2wpmRRDaWYMpVem7ax4j6FXPAmr3hDqa8pSQYCzQFHwFqu7zfyhyg6p3cQbZZGqg3etG2kok86T6GeSkgLFHwQsY",
  "key14": "5Feksyr5XQwJnqTN8LxSrd4zXYByur8J9ucACXdG27WC3E8KfKUHhk2ByFPW9nN3Do1wosjdLQJrAcza1MtGNKGi",
  "key15": "5TYkfyQFmRLgPodeg2oAx7xFtevQbdJY7c9YU7xiMd1ywBrL2M8UnbBkE6BRtd39Kkb7ig9uL5EpZBp6p87osAyV",
  "key16": "4qiZPLicjB6EMTGiUVTBGVmqMuodJbLPUbdhz1g53mvLvMKURrT468ddh6t9WHU7F6GhGC4Q1cUAyMLsx8Hyfn3W",
  "key17": "29uz7kpZgDVfSdt5Ny6uP831hAsP5uayrFpsDykkoBSJPxiV6UXgzAFUSVbf9aT8oLemxraZmTFtA91tz3g5HK7r",
  "key18": "5H88PJZbZTGrPBwhQop8cvvLSbo3LBhk67SKEvFx39p6aXJX5TXRLqRsfo3f1kr6kbHt9dCFKEK1WV18ipLhWxjU",
  "key19": "5CJnm3zeeZHkCAWbo1dT9gjYyPcqMYcrgsdk5UhCQcqfyWWcZeiHTSQMUZhFBw7m96fG9ai3nKKWkc2NAGwfBZ54",
  "key20": "4TFbCmci1pSgiQzHN7EUN1oSGdXBbNYGWxSD54LZpu8PQmytTFAq5qL4SWtvTJmzSgcVmpSFvjwJgwdoDesiGBDk",
  "key21": "5mZXu5EwvGBKqCv1aukS4C8YcQC4YhMqZYYhbPycBM3eFDZphMwyaCZzRf9JL5RQX8TQoNv8F7aBVNY5dopV3Fs4",
  "key22": "X6KifFEDwV2iobb4U2gfXrE9MnvSQh26xuRzwnt6yJgJYJn7Y3hsVUq2ASigkSrVeHry8AqRfM8wytkmgqoLWVf",
  "key23": "QzSNyy4rzK3BdVJNh7zHdr2rMdZx5tkBr2dBo1ubUKdqGiYh55N53tRtpN6AnommR2bVw9WsRf2KKJQ26ctgcoL",
  "key24": "59HjUoWJUTVBv5iNpNy4pw7HJ1NLaMkPSRVu8Zt3x4dJpKPzqCpvfv8zzcyRtd8SoV7KMLWEzz5XC7gEbH6Qucp1",
  "key25": "3SfkBfs4DP4mZzSmHukugiNfTar2kYL2NajwD7sxbZeTPb5qXQFbJt7nWfPZrNmbmcRD1x6EF3tJom5MHe1JDiXo",
  "key26": "3J8ogE3D3yiryMQTgTR32Bj2hAUAe3tDyui9F4Jatxv8ScPRUnyN7DYZ2qvfyyZCQuT8VNKJ8KSKpd7rcnPvYBSR",
  "key27": "5GRdzsxGHPnC9eLmK6wsEkSjS5n9pPXkgVfqmWFxd7o3b4R3Ur5Gm7jFF29L4jzjYZEocz2K1DSDhoUuWHGYCMpV",
  "key28": "5tnvVNY7g1eayATuqrvLSW5xoXdwjauSGvXgLfnXd42N2vJrjMuFTWEioaK3scKMFa1R41EDtLKN9K16zPxsDtAw",
  "key29": "1MwoMSTuDAdAfc8xj2huqxzWcZpyB12jjFRcg4RS8MEUGJzVAHT5ga7YLKDUw9WmDFvumgUyeysw9VYU7vzR3k1",
  "key30": "5i72n9k7TRf3h3gFndg8rCmVM4v8q72CDmujw3CrqUpCK4u8tYeNwDmifGdb259RSTKYk5JtooEZvujDKhhshwCg",
  "key31": "36My5ALAxpJG8Ur8gRhPTfRjJt3hS67nKaZVryBBy7NikAYgSwNTR5UfRJG7phXHtask9yJ2wxdhmA4t9Zy37Gpw",
  "key32": "2kgRCQmQW6NLKHkE5uHTHMX1aVmfLMBYeznCoWxDwWw4NNUBUVss4YswfmsCz4RKWF8sbAz8Q9beBYt3j6jZ45aS",
  "key33": "tc5fU7mkUZQJ8P8y5bRbLMgFRGQe58fbHdyDGJjusWZqZMFarKiWHgx6da2irChkQZe9qf6RYp92FVeBdq2hspc",
  "key34": "3Ahsc5xVbn177DoffWeVrG3GDHLyFhhfTyC98L5svZ7jm3yjwpU32Dgoo4xPN5ucMNUgDiMLja889bSiPE1N6D8P",
  "key35": "5cgmNs5SG9ovvMJLvPcTkaza8JoBtfXKshjoTKkv5iMa7Y9e7DyXZgHMMzJNnWuDZvKGqxjTXUDqoqgGLgqKkoPD",
  "key36": "GqBKFZafscLMTwuu9MfcTZWxgbS6LDJJjzFgwSRjuhBjp92JmRVXewBRx7JGzEQU76AeiERUJjphKU8fzoPVmyn",
  "key37": "5vTy2LBbY6LHsQau8kswdcYgqy4Pizjy69NZVJGdGxAyifhfs3e4cfJbKEYzeYy9m7JMAGy4qFovcxrTMvybiGXG",
  "key38": "33rrgv9Ei7znLxb7CG1AgA9zsKP9zk6LfQp6HbvL57rGPdjgwF6t3X7ssmv8GgwtsGjtrMVmwhZfBSENnEWyTqrd",
  "key39": "23LvSWhSwFXqFWDC8T7CS1FmcwnyM5i5g6FJKtPZZ8A65N84P6RqkpA9LnAngGzEan1Mm7MTrY4DqeBoGb3q74BQ",
  "key40": "3Eh6KiaJTTLGzJvzRrwvbhvuoAh5EqbhBegG5G2diAxoSUcC7vWirrKQaHUyPBbR7uf9yJacjfdmgif4tH8UuiBn",
  "key41": "1vnJqfjS6XK4afdqE25fVB41hcfa4NiKVY6Zr27Qa58t6GiSJKZVBfSTchnRssr7NQsu4ywgTjxYd7s64iAZFuH",
  "key42": "2mSyBYKG4ensdPNRmwydke6hRR4FsjNmMtzxQotoGqGKbX1nVk67rsdwK17ymhykSHn2DXAe7gPQPqoAyFCPASSL",
  "key43": "21cfPmsuNqpA47r8ApN2EnfGuZZ7vSBgzzfMp6HgGe5X1qiHAxZhxF76ar2qABgj4LpLvbPAGQH3GbgiWbiB7NwA"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
