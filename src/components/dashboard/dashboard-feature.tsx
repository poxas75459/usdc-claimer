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
    "4bDMCLkA7FzFPPoPPhf35Hzko7Bjqx3EV6gEEqjUrykR9RjiyWg6UXRMYUTUHfAGnLd6zCGtkfwHWKxNmiJSTqAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRsbbJQcA9cBcKrHLm8Kmt6sQUwXA9reE43XPZrJbTxrB7vXGMbZkrhLWdWWosNtHQJWUcN6EqBT7nvfv1h5MnM",
  "key1": "yrp6dZDBCWgL28EWN4Xg9RaqKYDXMqCdWBxvmtajUEhFUoedkUPeLymoTLz1vJN798n1HoYeMehQuzdT3xWV7it",
  "key2": "3cgpfrjN1pnVSHLN1f5RoLpv5jA2MDJfTcieZTjPaFnCWXbXjswXhfRPaWfydYXZFsUQ9gxVh3jXJjmHychcujU6",
  "key3": "JPWjPyLZ1S6FVNLi5dCwHXH45JeSf1NpVmzdmaV2gBWzb6sJhkZ8JR16t6kAiuvjhbCNcPupBUf6YywdeRKEmgc",
  "key4": "4Qu4BkDQGg422ZUPucrP8qsXz9wxCCzowRwVKyPdYU329ji1q7sPjcs2cKPY3yptCLYZR7PfTFYsapQvmdVYiBQv",
  "key5": "4yr4dqodhBiwMUyz8FNc9kMuR9xWQw8rqDKbMnBA6u2Wzg2mrH36kgUEa5XMcDuQ6pNFJS6pqMGTKkLkXnGmuy2M",
  "key6": "uayAWznCjBHFvUXCiD5rUvPhNhdA8YtpE6dtu4d5dus8DVsqRv4msVxfngkVMY3mhPQYL1bnWUcLcFmSv14HvtX",
  "key7": "zF7VrRbhgTiNmvjQPcESXXcffe1dkU79WfDGjNrVmVbvaeURM1QEkPCM1vfkv48MKW5vspadfsMGLfc7Syhy7gp",
  "key8": "5sRzLPaEK6EcSWz2AYE2fpcTrJFintGxQrjvsMeu7BbjxY7Nu6pi1t3EpDZLX49dFubBm4xDp4xYmqg3VVzbWmeE",
  "key9": "4XGekztDUyDiXaczVLvTwgbpLRbq4zCMnrdmmn6bNBfaanjGiypAZPystsbB5i22DbyMjWRLYMwYvCb8rYYYGKXP",
  "key10": "2V8RExYLp3xSWgnxsrAmKDc2fjeZbF4yksaVMEBCnvAdvwSdH9ddS1LV5FHLmYmt4n7b4o8ANNyccPXLEtxpUhfc",
  "key11": "5qS3V6Ernxh5NwyfMLCkrK8sKMdPZrnFdomTwWqgUApuStozZpGRdLwkpeXZTNWgfa9n6teWm8gUsCx3wn1ouAEx",
  "key12": "5tgJNq1wZKxtzgovRNSaKf3XotnAtpPsG9G3ix6dFUKjZzZSDeAwA4Pocx5dDZrriquH6bwWsFd3kCdkHmp374Nx",
  "key13": "4GNLLtNg4saXjeTiqBhnGoFoC6Aw3RZtaiXCCpj6kB5wHaLpDzCgJdaXh1GBKHaYoKivHLep8y1UXrjDxWYuJ6r4",
  "key14": "4SPbb6SiRcgWs3GdvcdUZzxQzHFJLCBCgE46LVDe2jPySmrbXR9qKAMpUcteqw55P95bYgkaeomYYoQSWv2fWfys",
  "key15": "4n3QmyEgX9Na7jQRwSNJ3MYHdG3GyMrAdzpDBBiqnwGyUwqb1dLWiffkJ1zFzKFChtYt2dGdU4NCWFqXFZjmcN9s",
  "key16": "2LXrhWaveKr3LCFcbtTHe41175AFkAZ1agUgW2E9WnZ5gikLfJst48YVh8J1MMJpd8d92Lu2eo6h2mpienkAfGu1",
  "key17": "2Z4i349yKHa1R3cQuJgmZ3qYsNrPHZqAG8JvVWEgWsfsKoTuM9TAuKGLENU6oocd8BbqQEZGMynFz6poydAvP3ud",
  "key18": "3FCfiNjNZMrwLXUFmFuW9W9hxY4TJCbpmVHJuo1wi5Uqi2G16Ria5niPStbBkeqwQr8NQTQEy9FCpsMaADPYxrQv",
  "key19": "3YMZWGUzHC1cP7f82Myuiang7txm74SjN2MEtAnf9mKt8XUfxhj4hoQmkWydLCWa3QneS9s5wL2X78VzJcLRXo6n",
  "key20": "3FQBc9H59yBCSVoyoPPyi2kEse9xuvMz6EzdFcuucSrY8iU3VcFvzFM4dtkJxArYa5hQYJ4NE7EBJ9nHH6rQPGC3",
  "key21": "3HDtUCkAV3kKLALFt9KJBC2rZUzRyrQxAXw52rDf7eQy94faQWBVgoxkdynb5qDTQ2MjcFKhBtrvjmU1miXNv6eJ",
  "key22": "33AsN2CVAKPyL5xiFoBwimtsktqKHxgpiDRK485LhazVQhxZjfLBC8R9vR7HcLrPqyUZXGosvTc5VNWf8dTJqGPe",
  "key23": "WQgFTizK9pLFx2GnisAjBGszTVi3uawCa8sQ2YyVvqZMJd9268ADF5jGs75fiEn9JjXkJoN2TbfXcXFtA97uMfX",
  "key24": "3hPBjBHNoPoZtq9RnykHLXTPagz8NfpCn9id5ZfigG1f5tCHvrsFAqnaF5d5USFHkqXqXvefTZUQP4Ar6JSRBasX",
  "key25": "2f78xE5TNRebbmFqmeuFXahzEnsmBEnyKdbR7178RYsn49rCJ1hre7JP2iZgHU1nZXCMYa9HJ662RUeknxjSradq",
  "key26": "3BFWgZHAKNfxxHDSynhyYLWWULijbsADsCLxrhQcPb64FjworRvcUVbGLMwzjQyHYbAHMr2a7yz1o9iydYsXMCgY",
  "key27": "rFjbzJ1ecjQdLkWMxXaEWPuqS1NKwdwPAJmR1k796vBJ9DFMJUxYzasX3paL3GSdYVEwuVQjnSr8Lvp81K2WJV3",
  "key28": "5UP9yWsrchg1duFvQUhdQWGPwdCemJ3tq2gKoCjZfUEWHKUGABoq4czXB15xerPWLD6Wyps5u35hrRVeiQ7aKcLi",
  "key29": "2NXzYdA3NAoqZKP849B5iegRhBbxDCDpPq5MwgQaoX9pyQGbgtFXjySZfKH2hs58AHuFSFcjNVWwKnMkxviQu5hQ",
  "key30": "95WhmKNtqEqdaK8wBYSmbSxp3wCFfgNpLXiHASRsjZu5C1F7QmZtS4aiGkshBBjwe2qGways3AFmDFWPjcYbMSi",
  "key31": "4AeCHbXei8XxNktpN7FVSwJc8GiqCAzY8HB18Ew3typV5qiE3i1AnPZH1kkD2UXoHCk84ci6F6DsQzy1ZTjkV9fw",
  "key32": "2xRou1PQwu4h2xgHyo4HDRCTNivuTAY1kXtBwNNJzwztEu1MtEXsW6scXQuCY7WARiAjeTFa6MdZoezLNXUkhwNX",
  "key33": "4BCBTsQRovsyADsQHGxAU9pcmVYKMfc1PEisPQKwtTAAQdaPaVnfodC21Utd94fPo5n135uNzK3rf3bigpjhMx7n",
  "key34": "4Nz169h5UQNMCM5m8E4QiHyo1KKkFedwbFbJXUcgcE8TvVa5TDxj19XgSiqMGd2sa3oSqoj1iUKgBYBrBLcbiQqP",
  "key35": "2SSwZ3zYci77R8zPvDem7XqqU9LffqNMzEnDmHLwbpN1cGfBejRyniv3D6SeJMdsdvYVM8PG7B61JkRLWrUrhQu5",
  "key36": "2bib6mT5YZ2xyThZe8BYKfccWDZfaE7gLEssSvpuusoJiMVgHcacxqWNN6rpbtiUqbwYZwoBXpuCidc7bsNTCepn",
  "key37": "UgCLP641g33fb4DMGQh541zi9n8cbTW8Hv23hhz9cY45AEjcsWfarhTtLfCZGqFiSupyAkxKt7cFZ5cNydmuA7h",
  "key38": "5z8GtiNSq2C6WPrNUDZZXhosvYN8EMitrxwaw7ntsuPMLRRG2c4GU9ozviXttxj6gZWmRTWFVipbpM4iEJj6rjWu",
  "key39": "4AxHD3KivjXCejafyEHbTFn8UVt4R9JQNzb4uNwA5zztyGpH4MkCKxHzZfNhHmnHs5nPw2q67cF3e6Xwvi8QdagJ",
  "key40": "3hEgFseeT6gTbhGbxtVSEAc9YFrPjgkzK1dzJ43mo4UhFRWCUAV7V35eLYyeKAYPk4Chp6oHcSCxgzp5QHN9m46u",
  "key41": "7TtyuWmWdyqY8WkVA2jEwiJQcdhTRAmHFoXkuNnPiyz6ftLkc9avDZazz28xHP6tUJmKTsWWhzjKdk2oMh4L2SN"
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
