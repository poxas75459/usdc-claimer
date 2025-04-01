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
    "Gu37YgpUEWWF6Gk1LbWHCuwK1E7X5ux7optDDVHMLDsfW9fKdqiUv55L3MCyCPEWMvtrotqQQCX99YvCpM2tJsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3donD9HZDKqFyaRDX1vXMQ6XEpKR9XxzH8tSKtd91vqZqyoK187ZPQhJPFgtHr24yq7qTnohMri6icYb6QgjSW77",
  "key1": "TcDNvEKSASGC9y8VgN3EWQotKBCZV1VsF2xVDU7RrDpyLATKM5VcqWjMqXtZbgHQnZPEmQPhHwgNcmonqUSwB8y",
  "key2": "3jfggBpu6RbdUDoBuxUJDkK59VmDcqB4dJDRwFJUKDd9FpW4ty8TRurj7nJg38dbhWUZuxZCBqsHu5rF64qC1oTR",
  "key3": "bjrK3579Lvgs27sCeV7mN1Bq7meKdsiRdmU6nHHfH4cg4tmevGJdnjTidvSKg2yKWuRmw3fg5Gef3s2Aqq4CpzM",
  "key4": "kQp4Yrin5UpU77T1dQnsLdPzUSAbY2iymXHo5dP8MVguiMPamFX4Kfq5MGtTow5PaSwaX6uDZJBP32ufVfhdjxL",
  "key5": "24TQuUvs9G9JXF3GTiXWKwVts44HXJ2rLoVXYynctqdXERCuQo1Dym9vjPhXdGUzB9se2icJympKdnD2D97WWHhB",
  "key6": "2frXiSVryVcRmYdGazWxGxY7VBELU3GwkWDWw1E6rwAXpAet6fUFJ63CLjG52GM6yHqtUkVDK4TyZFdHHGHcDBCv",
  "key7": "3wKTQVtW1jiy94ZRoqrZoJ34KpBP26TDSg4nzGf695Qw2Znu4KNFUAnchpGM99ABzB4tQnTH52ZvqSFvj5N3sVAo",
  "key8": "3UoE5KqBry4tWRCbJrR9vsSB7F51AoZ2FoiqarZK8yo8WKkq7fPz8royuKADeoGstbH1poL1rtYBCnkyBCCxqZRh",
  "key9": "3G8sRfeV3UAusf7GzbRML3JBKoq71r4YAYXkRDgpg31NozNrheESvSYHHxvkxtCkNVzskZJSJcHAHjh3K5aoVbgY",
  "key10": "4V4b1FDy5Va52UFxQ2ktj9moCo3q8AhQTz3eFGSdGtBpwq6TwiuGqpdoNiy3U3yrRi8RnjPUMrQpKXqGHW8FrmuB",
  "key11": "3VPMxuf79sqQa1sCyihrsVX1rvcLCgPLeVLM4YGo3HuZhFJ95fCJhbKZak7iK8MBEUFEFRRwB61La4E72d3cF4pp",
  "key12": "2UsHFZUfGdTrWMR7tjCTn5hWuDwzGArMng3ZR9oPiMqiP1JKhQM4PJ8joEmR4jnqkzzp9kH7qhAdKpzgQykTq9Hu",
  "key13": "23ttts3Yas5xYhpfirGu6fs4UdXEsy6BEcL4jJKMRuLV76JWX5rw1RPuvNAMWj3YWw4VqaVAiycE5DFkdzuCtqfQ",
  "key14": "4bSqNR9VpxkKdWjTGEEm2rguoShksH6RjHmFxrNeyx4DkJXahWhNjkuAz4z7kBGmdwka1pEyaBcJBZErvFM9TFu5",
  "key15": "66oj8Gfsni8hrUuiDJXYagqdzR1PfxCDBGFg3LW3iBGtRHdKWpDF6fXbTrmy2mCn55QCFgq3P5uPpig5XhvQ9nuJ",
  "key16": "2Z1bGTUMbAoTyRe5hHM5ymYGwoEKG6Gt3oNJc6ncg7UmsX3X1RmdRe5rnMVLEkapFtyNKcw6fhw5Q5EvNZXN97tf",
  "key17": "53ETgpD1Crr4f9h38EcXk9dSAtnEp7RYAg91BznVKU5JJ2wp5J98bxbk2BTobuqPJH3pDLArh6v6eD5Ay5Le67uQ",
  "key18": "2rJX7SLn4gW82T1MEA7XupveV3ufyFzqDu2nJeo9QV2ErKx2rv83PmqogRrjkMb7MJQh1VHrN9MnRhT4amuc4dbv",
  "key19": "4psD5yuj61X5BuUCzFnuXckysGvTzt1omAFpiAMvmkVY8m9idgEigSmEhGjxAMKutCuk2XxdDgp7rWn3L9nxY56s",
  "key20": "3EdLxSYsaoKotJGgT7J29AhvWqM4r8ypmfpYEA9d3YBmZnXymXBN6URe8xbi8A5GVMXChbxgdKpxzkqF265tjksU",
  "key21": "Z5J9w56WHpVUBFtEEJ4RcuULpGnsqSATMJU5tKCMxMucRNu6RQyuMuQVKSEy2k436XCfjCefakA4TL4oVg3Tv6H",
  "key22": "516rqLPfEoBRyuHytCJUXwRsEQ5ZFmHa4vtt6T9F3p4mKHE7bdBTBCuauxtxLNgj3LbJvZe38iP7TwZvk5pGwi9G",
  "key23": "3XT1QWBuGG5xVL5hktPXoy6o7KAywsgb6JK92d6bdvFeo9cqHFpBSnvTTPjQ8Yyvk1sKMihUk1SZitQ36mbh329t",
  "key24": "5J7BSzCKibvPWbCktoYa16ceRyvuM7Uo1nzRb17De1BNx6rPPJpnL9pSLJ51vPmXZTGSwLBaKuwxzuhUau1Sum1q",
  "key25": "Kt2jvT8REusxKGX93GjoENFD1kFdpgmTquFmDLMC2pPwGTH2mnxPs3Kn6LopKpucaq8HEDakKMiQgGVfq7SiedH",
  "key26": "5zRF1tKPbRoxXE3o9jZJoqeB5GyyxeZXPzGCnmEVrqd3FGFTTmC7npSKKPpeeMjpgvnJKkzzpR9ejyZNxQWfAd1e",
  "key27": "oPLrT6vmKUFdqkikeUJDvwxyqMBB5PoKgbghro9hwz2H5z5g2P477YYFfYzCgNHwnvmvEQ188YMAms31Cz2X5yt",
  "key28": "4Hq4KgXUqnBCuKVxN1Y5qMdyPeJGj1QHYwPtin642xNG9qZJNHavGnKABmMq2boE4ok6Eo76YJwZJmwt9yDxzmRo",
  "key29": "3Utx78tvjW9fejwDR7idVCDnmTQ6ydWxLk8hGEWACJwhPzrc9BRByCzCpZyH8c16R2GweyKAoY21AbQLzhwxYgMD",
  "key30": "2UjqsfuhBpoCSXsCqKWGt8rRmag71b6j1quzhZ7pR3iwf14tvQsYkDyXQQQXxdj6TeTynZYo11s1rNFM93moGg6e",
  "key31": "4VPMAnqqMAoEVvfApGmKzaJthMdSgYctvfJmUppNH9fNA7rmLJ72FjEYDvGQgpX4K5eMSbjvgqXtWog9FTiitZYn",
  "key32": "rSsVaqvxbK47VjbonB9dHvGnCFvsLXEEXtJz3XyCybq3zrbS1YWZmpSTcciDm2cz76gaAhvzigfwaYqH11tgFxc"
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
