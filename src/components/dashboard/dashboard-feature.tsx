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
    "5Ppg32Gytc4EWHcEUiPNq8X2s14yyR9auY3jzPnEp3gGYyXYT7npPb8Sp63Y3AmCqE1huUH9CFsXfdcj6Nk6MXJV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c95DCRXbt8hfh9RpZSkb4ubMe75UuhFNM5D2K3geWAeUukcM1CvmJzjEWuQdEN1X2uV811Keapcds6anMAEGmAZ",
  "key1": "22AhgzkBZKRaSUhXjgiwXjA4mvqHdq8L7AtXLRjoLHsQJ7kQ4FJXtXE3WhywqRdFf8yokcmNvzFqH5vvK8LEFjKo",
  "key2": "23AzjyJRNXzCykCVk6YuNnKFyreMwUQsBGBbACzGcM5YZvH2qfezKzt66HA1V4b8qtXQSQfTdX8k9xbczy92zYrK",
  "key3": "21DE1xqE9UNCyqn3C1jJsqntBvteisi43CTdxyxWtDn25Dc7teu5sSeQKbmeFKx1xHhVKA5VaujrnoHDqboBJ4LN",
  "key4": "2j4ScYYGXALwrzP8KKrZsVXZbVHC9hypSXRzNbmiRhB8pNsvwqn2ZEWEpvDK9GfaEgYHxL1Ywk8k52hVCRGRXzuX",
  "key5": "3w9X8tL1ao4pCFs5h4HjGBaJMWxLhyZpwDeZjghzQtmVS91k4joV24WTrT83VRnoS3eEYqjpAQrouCxrqwaRHZCJ",
  "key6": "3pKKhbsUrgGYBGCx1MBifFiAZQYiSMYGHa3W3qgeNANkBRgroqTNbcRHWMKS43hfhuuH4wRkpTVuJzGhuR87KP9",
  "key7": "4yg4tPFXjFbmLRSGemsexmUDgBuQmfKCszcag98MVqQoKhUEWZyX8i48jzXpjq6eeANK8JRqqJ9zknWNwNS6hQSH",
  "key8": "3b5bvLZY2pDhwjkJyz9KJW8bWn6DA4PgSJ6Nj68cFo6nzcuVs3pxScAEgMmP9SuZJHYpdEogtXRmAqo8q4kUDtrU",
  "key9": "63KLjCVDCYXiVVY9mav1YVm5wicfuUa5t9AaVmPPosey3WdwYjLUM28WAiQ3LG4ZqGceLG3D8bxKKdcin4b7MG8o",
  "key10": "4YTtmqFpGzgKjm3X4jAXkCkCEL2y1XfimT5fZQFE4vJnsskLNqQQUK87ETsJ9SuET6j1iJN3wdAU1nCVyE6b6mJN",
  "key11": "WKUsswNFd3sdXGXjTw8u7VTLwBwz9wBaihDMFZ3W6TXfnU9NJvrE2JxkZinLRmjgp3s96TjZH6tn4kBptafas7g",
  "key12": "3G22wQS9iY2RMvPeGwhaGHH9BkGAUBfixoH7X8fWykqU1eDt7V99DUxKES8RGeQmEF3oBkMy38ZZVthWHVA5SYYf",
  "key13": "3kGwe41A3Ej3YkcLW6174VRfwfsQab2tLFgAEnGeTchvyaHKoigKu2tMC1XnNqVmRrQ2i7jisC2nsE8PmfRJo5rD",
  "key14": "4YX18wUiXnVnanXPC2tAVvhrJ8y9AbiyyWLivd6V9d7YSkKi1ckfuGPkD5UYWZqabvx1FJvS9iHAapPMScGdnU3A",
  "key15": "5UQp2GHFHY8NhcvAWSMhNcbEoPybESwdQjR1ph2ozaEwA7L5gg8a4v9YPsFer1iqgvd1VtQLmqFFZxPTLdDgSvwT",
  "key16": "5g7bQjMP8tJj1s3U2u8kyRb7YSRd8226Vi9mpiTBJ7ofa61NDynmtRMMqXD9jJaoYtaCsZpRU5kRTNrUmp6uAxCh",
  "key17": "5F1mZpGrLBkmBiVNRLnDJbD2vW3pbypBPy72YTM1dKMgxsVQaCqqxEwn2JXNs1qk2eWDhjZfCaM7H6sVCN1a38RU",
  "key18": "5nBG9AkCFRVe5TS28zzp2WwiRovC435Qo6PxQFTdDoyZ1FXxy9Fhdtn2QrwdE1ttWbtaxemoQcgCyk3L3WkUg2SM",
  "key19": "3XF8m4Ntbu2SGhq8JzU42XKLc87MiP4d2suodU3VLBeXsYJ9bo7uxiBr2UoDChDAa1VWXKyhE9ztfUzePGcd2tSi",
  "key20": "5QW7nycw8MhXe2jwhs7X9TwmdzQ2CE7BGYkYDzP8EVCJyPrc1tpq7hLPz8hyeSoYiRJvFxxBie65LrppyAHXfE8",
  "key21": "3VVNCnJjkYJ36fmGCLPdcMSaTZSgp8z5D1YhY2gc7D4j13zyqAiwtvJyjxW2G9H3bEWNKnBDht2jNNL3rYh78Z9T",
  "key22": "42nEB1cCkAuFgUR6fS4SiGe1bKnyohzYyod5x6zBh4dU6VeNBQNsDgxuUZVvYPX63bkLEwwamccLfdG4GbabdWX3",
  "key23": "UCXVkjeanQYkuZxZegBLSTGKMsSXEFWGiMwy7pqFwfS3vZVMh2XiLF1zSik6hDmGkvmWpzWCcqHg6YHneqQQAgu",
  "key24": "3uJALhmvKSUXDyvj91FrN3v8Ah9vqZJC9XdHmR4Vnb3XZwEvSkvhNm9ec3xNbkBxst5NQqKYyCdxbgn6go4Pmnd8",
  "key25": "5mrGi8vpdqAqB5aAq6Mq7C9cEGzfH2CfRS4c1nFYq15M74oVLnu9B7HjCYjvXHzYgineCvSEMx9SNZG6nMDr3eXo",
  "key26": "5L2BHsdF5wTsaqMwT1B6GePG21ia8MjbX2XfSo9e1ZVEkaATSA9PHWr1xaArzNaBFdZ8jFV48DWQXbgGpGBrGc7b"
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
