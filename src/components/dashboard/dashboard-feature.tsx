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
    "3iid9cZBnhJtGnpuuCpsFWs99ZSDt4XAo4tbmtTnqwW5vjJWuYkNTkezJcwaXi73CwbuWirNvG693Tt6US6yeK5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkzQVeqsD1AKkuHhGAsck257hcwjuWGpY5NV9iuMCUzKkbQ4YW6wmyJR7gSKQ32kz8otr4nzzwBweFw7xiXsc3x",
  "key1": "4koxMezU8TYxG9xLAKB9eWWEjchbAuwiuBfnGoB8jrQdU78kLhuBAnCk9midXMsRb1tFHLg6vdfu6nRw5BESMpeT",
  "key2": "2JFKrpDrbVZWURw1xGd8EuKMwbves2XLxJS5Pr5kHQ31yFqezpTgTED1y4j7w83eQKpakYrAdgMBN1tHy2RH9R3W",
  "key3": "674rNupp95pWFz7hHEPewLC2apbRQPMZV4WrbK3NVRqaWaS4nJNQYA5JgnwbcgQaH1qsWh6TaL5RXWstNq2rM7yX",
  "key4": "2UgnMfLZotgY5yUPfgB7QiT6VduJPTwG4VGzJ22tTdvyA8XKQMq9tavyELdh6tUEdmpdJee64UEFQcbr4J7oBHwp",
  "key5": "3JQL2TxsYxzQrKH4kimwwL75gLYRXCcA1TqkZQjh1NyAGBiR2NqF7Z5auCn2FwzSccvfgAmsAyJr7Wougy5eRaFC",
  "key6": "5S9cVWhYnreCwoRAs6Lyj2EFc4ReATnunK9fXTFjnPJNuQw4sZXWgrfDGKX2pxTgNEWU719zs6pPs4qmuBT8fosq",
  "key7": "4XqJya7XqNKPuRun2ueusaavFZpGCa85GuKXMLbEXv3vRrprPs2a6VKCCii1R9vwFprdutG449PASvga7sHFjUmR",
  "key8": "583R1tK8Lh1G4DTUwKcSWto5ihZAyqtFjCJW8LqgHk8it1s9ZrmaZ3A81YH55fj5uTq8gknXBBBsLeuNeqrcJjec",
  "key9": "sdHpdngErpyxWz9S5ZZ7jS1abvC4VJfhQb17ZB48fBExunJzpokX5BwBvmtREYTwK26Th4Z3jCSm7548JUeiDrC",
  "key10": "4ULXqpWroRn2uZXS8gDv689zfuZrkaJ5E5eW6veBaoohgSiBFGrdCz52uvqJ6xbTtPSn6xRmztBu3N9zcMuawhhT",
  "key11": "3rvAyRSmgRm9kApwkk935VmQLCwYoWVj1CSHqM8xBhvqud45yG6q1Rmo33ksTiDaS9zVVqLxpjyVRUEzXXcpVZBS",
  "key12": "LFtovphmPaRJwXo2TobNawqDZx5e7tNoZAqTTiDefxfHcbmUKuYTgCvHd9tXD1SXbA46nR31ZYy67yfR592E1X7",
  "key13": "41uh2hGNh51kfqTyLhxUYFAV7MRjpdzLtwMePHXZ3EWikkczqVq94iaFV7CFvutFwB7geUhZbe4Htr2rVoJSUJhN",
  "key14": "65oBy6sDaBCbnpxxbUkB669MfJciVPfcpZGfr77xwDK5q2SvUXWaGsW7sdn4xUd8zftA1o4PsHGKvaNYLCboX1Rw",
  "key15": "43Gdw8FXmXcBkARV7TiiiS5z77u5yjMNdk5bUUNmXwcDRQ7yN3N41z2pxBuKnBgqY4T2eGGccC5VkYCb4tYFVBrr",
  "key16": "E7fcp89yRGcFD99o11xUZxH8m2H3nq5FD3WfDCJx85ovFb8tvbJnAepBdnBc4FWj4NSrLM2eXkEqEUFCEoAJBFr",
  "key17": "65a5EzUXAU8o21h9i2moRLZZ7sHefEczk2HAX7xyWdZAf868VDJr9KzetqQGmxS4T5yRp3xoX4c5ELrSWk1oVLFq",
  "key18": "5nP9TS3GdXRR5W3bpPZ3oBxtF9F1rxPjAvisMSTyegSeb7QAZ89t8VZKDBYKKMuuZNHx9VzC6bVzN1tfnuzDPU4m",
  "key19": "22QcqshA9hfi9epkWDHjj7sFBZB8SCsZpvoMMcFB1Y95UPabB2qfMrKu9uJce2AY2awEjcw8FrFj167trUghKTN8",
  "key20": "UALP5vvSCYGkcUPtef1m7z5XLJjVRFHg9XF1K1CfZmSSrmKSAJGv2KxrrRrQFCbQCa32KCvMmfdCz7BXQgvxP7x",
  "key21": "2PfM8p289fLRuz1oGhmkK2mZLHtjoPySgUu35wozn3zq4WnjrH7PPy1V4XysAvZcwLpNvcr7NzvzoSUf1bBBhWny",
  "key22": "2fL6P87PiNozzQrMb6bgeqWf4oSLhgJxqCikfz8ZSThLNewcsoVAX8KfBa1Dj2WSSjRREikeqr1BVmPNJiZEhhc4",
  "key23": "2uJ4LysCDTEZ1o28WJs74g96YveA7LUfyBZmPnexT786BSsLLXZ2caPyuAkQYcCR2td6rhW1Xs9cbvnADkYkhYM",
  "key24": "5BWp5P3SNTohDrShgQgQBYdNqrvs4i8JMuHdVtYvrwrjwWyGabNnMAtpwi3t871VDBSXba8uwNY4ASebdeZiChGC",
  "key25": "5yQh4bwkWMoXMW27m7TD5z2PM2dUJkWgBhqbnNw3QnR8xxqemYM16C7YcvnzBQFLWw412p5CSgT1ToexPVMdiu9z"
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
