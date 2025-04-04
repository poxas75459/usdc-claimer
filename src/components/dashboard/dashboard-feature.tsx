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
    "5Q4c5WcqhFckPDzhpyVJNKFniC8xJL4AyWFNbWRbYoyZrYyKXhJWZSfRYtr46GS3sFwy19jSEEw6KotpeYrdfpjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VfCdeBTS4afKqpGdatAcds78CVWdct5irFsPfQHv7JjWzYeHjPZ73joN6UysBwgfTQve8trqrDAzGTiNwqTHH7t",
  "key1": "2HaCj2GFUMCE2cjpNUDvqJEBRBuxSFyzbvrVKRPtLBykGUairR9yhH2r4AK3PZvsRAtSfKsjJWaBG4dzVSkoGZL7",
  "key2": "3iHxEM53HuBAGNxLFWyXMZYW8tAxDhYajdbrRGTPvp8wYQgauMrnGazgta9WQ7fSvMQZdpWaKYSMz6qEGTmbuUqt",
  "key3": "35BkCm7mgZf1JGqHstARqscR8zjG4qM9QA8p3kMWx6shewkK2NZvbTWo5AqpuEsreYcfxBXDKQdFzLcruz6PRw7k",
  "key4": "5ipimmjuueJutMyPc7zAfG3QmBx9jEqrMBEsL31r3Ur6bfHmpkwYEDwTuvNQyaoyzeUUoRCBeEJexarRyjns383q",
  "key5": "5B4UfCtTg5vRNZC77q3yghFxjZj55Tz6oH8KQdLxqUKPzMKznk42LXmVYHGQ3L6mZ54vMPQwtX9QcnrEoutjmkAR",
  "key6": "2CDHwxTsRsFLoqBLyNWo1MGUUhwZ3VycDC32WW4yusZa5Fd78WUwZX6BFBAbZRdbmxpSRPmiJJhXqJ5EouBe5oyv",
  "key7": "4D8zD9eFZ8Pgd6gkPusaKL8VM53aYoi3g2zLT5ViLfaFKXvxoKeT1V5i42hL2pMAHh3LgzLuesuEn4s4KkLFy2FL",
  "key8": "4rXBPRdbDbse9K8kDCdcccUn4SuUbg7FKybrjbAhKbs3zJNNia6chQQgFGJnPmDmT5k53HKEGJMRm3vAfvh7jDqU",
  "key9": "5McDTP4bd5vQLPmAy31NsYLoDzkA5GTBxErVTWK6wtDqvggdPEULzYRmnaVWQuHXD9HTexktBN3ynjXj6MfSEEdk",
  "key10": "5fQHATV5Btq5YAfrfhijBjomBxbimj86BagFRKT1iK6eEk9Yfvwsa6fY7aKeF6j7sLscqhXQXU2YeCKrjqehD2C9",
  "key11": "61A8izhWhACZh19MkXQchRESZMN19P6f7cjg1mPoRQwma5bq1x2YeWpLhfi1cJZ9vs3hds1LfPEjwms7pFkNrBjV",
  "key12": "5fc39Exv7uLfitd1zvnf8ye4L1xAndSoB37kxaLx5S4zgXA8EU9r7FJkr59D7JKzaNqc1i3fP8SxfLzgNPBc4LoV",
  "key13": "2iUoYY7z8Zp12qhnnxWHFbvsq1YyC8dExXhi3TA9ENnz89A6v8XjSkqyu6fjUwL2nxUM6fLpuHQ2S6y7x5kh8TTf",
  "key14": "4AJbY9M5kwF1PaPonvdWtTQwkMugz8N5vnTzHdApmEDHPLCc3qF5TSqMGWr6NfNnZtMBBn8NeCoZ3aYT6eT273Mp",
  "key15": "RBiVCGAtVRqcA3DCfKBFVAEA7RR5qeuP4my4gw4y3EbjQpgJBZB8ui4cQRGykwN31qa65DkhMgZxAh2X22WdX7T",
  "key16": "4Hwh4qGMUosZhJwB5vEA1BYgwb1trvQNKCKgmEdFc51XRog7HPLVWyWNVSXFpi2H3YHUriPDtc67mbf4zwQrgxWK",
  "key17": "3nXgLko7z7dCUE8qdQXZqHS6vK4CvhdLDpMBqTSBT1JkCdCNNFFG2jN72dstXXkz85BSkKaBfycMVLJkB8NeNNBG",
  "key18": "2Xcu8H4hYYxzrwo667AQFdv8DrkjWqshfgomGpwMsph6CNo6sFENDy3eXwT7VThHvBtC9awu32WrkRp9MaxjQD4g",
  "key19": "77eNjm3Nwjuk4fwgsJkWKU6Z3rqt6iE8Kk4wD3CNJhuoBoSMjsXhfHG6iiBxTd9zk6DTJnhGcvbjYQ6iibeU6hZ",
  "key20": "4TAQLgMd6RmHRaF2k8yrGDniQ1QdQLhN8DYoAWmknTwUJjVGFnvS6rgTJ3nHnyYuW5W1sQrT6T4DzJVabGmuUDnq",
  "key21": "3QmxnyYSEqsBTYFEmxLVMvdjNTkbHkZvSUSoibz87HDvH9v99Gs95o8rnBNtasMnLvqmMq769TP2xQNuiwXqJKMG",
  "key22": "2HopV73Nw1EvTj2v6naDd5uWFVtUNFnJFg3ZrbSbn4sDk5gYHX6pbW6DDHv4t7azfHy6dV1TZXuMu1uobRSxUdS",
  "key23": "Px68Aq9HuuqfMJt5PdtFRQyfqqabNr22FV3eEkED143g8qR5WzXnS627d4v9h2oLBcachCaBNH9Fuzr9DNPafM7",
  "key24": "4K32DZCG8fdh862gQfuGRfYZnJxbcF5TYf3hbAjJosNWQCPF44QuWGWd6B7pTed2sEk3SWz2uKq9j7WCmfuB3eKG",
  "key25": "3SvxnLsReeBUYJWr1ayHfeJtB4bPmxRiUekdDrXJSgM2fY1FL7iRP3w3Kgc1K6XFmCdM3u39DMqQT9Ena6zR9Ms6",
  "key26": "4MK7LueuHPgtTT32x4pbAVxdrXSEn49Rwq1rLUZpErTYjfEWBv2fBiux6Ltb6CYZ3eUcGARcaFH726wSxoeYu9fG",
  "key27": "DM7bmfQ9CEHCXzarEc5iPUiVrUw1z94rmmbt3chwbSSUNLUbggcqBSvuMH1xBNfwzcczkggZ87drBsXx3U9qord",
  "key28": "Mgr7w5oeLKvpGZxhYCZggmMg3iE5WHKJRiJb5feJTMMEfUAb8Yty1b69VAmyuhWjzZ6HqmyXxwnZP65ubaDcUMw",
  "key29": "3oHBfDR4m2ycowd1rPAvGt6W2Gf5kFMzNNonh15GRyn7Ek6hDq88Qi9k7KzGxjTZmbt2PtXdP3CvQjwojnkniW2N",
  "key30": "3R1edQLDKLbQEvjSasLXa2ieMhH7Mp1ZC7TNfgqZgpn4BJHvg7DkNGt5gQBy71ttHL3w9QpgesxbUTdTKKtBTic",
  "key31": "3uNPWxFUXMaS5yEQpWVj8umKYtTsocvpqa27b21gEc9yJvzZkQzgP8kEVbZfw2v8BLoQttezkMhVVEmHZxYUApB9",
  "key32": "skh2XJSNrJAduvtShcbYP9in1G76A1mVNHHbAjytCgS7R5aVjfCy8fbLCkxf36vYo4DzTt3gsWn5fLtpdUy7WvD",
  "key33": "418nEazh4vVPF69hVd5dMhjN8CRbpik9kKtpbev2tkz9zyBJEvAxCT9f6B3fp237XuaQVB3hgB3jZyE7TqvtXRko",
  "key34": "5RTigwcmc7E7hjdCHBaKMmxWUnBWhrr9sXmHS2CwkZUfnGes7nJwmheGhzazecG1kVqkYFjPSXzdmntSmaiyjjSH",
  "key35": "4h9123HJtNy9p7oWV5PfiPD7RqA6pApypdXP2xUcHoXoJZSW7mmdZ3ejhfocdWwfRRCJEFbfugwm8qhxC3avT79u",
  "key36": "2CTVCUFBHFeqAVQAzZVmtYPG1Gf19kuBh1H1DMmJ7kXCkNVUSwEHrFy2KoN9H5oHqMmiZBTR5GFf9K9sfdKm4er",
  "key37": "2h6ZowkG7od6TKWzz8NWEiqAuP2HrVoJKkzZhrD7DzJZUVAZ6zXjJDdoUWq4Y74zdLKXJNdNrhZ3isKSxuyufxXi",
  "key38": "4BTDUfaunsjGbSpeuWTQgSorFn8EfFA7YNcx1N7zrTRgRu3iaVjryETrirwDPFpGX2cuqkfFdiXNVqZAyEz3a3w5",
  "key39": "3ZbMLZVzBSt1uP69K7j8kKNP2Wc7roQj3gRGeP9hBHSByAYJXYzH4JGYH6jm5yVdHn73jry9uu7xjnDjWE3SQhw",
  "key40": "ncNAkTvZtJ7epSByBvUfz6YhLwn7EQXjNsFF9fMLFynB7WpELUeFDdpp5yt6TfgzkQkV6Sr7cBaSSMJYhtGyGMk",
  "key41": "5GVBD6ekUY1tZecEdfmyx2eYucxD2aoweGQKcXGKYR6fEKbKDRfckG94SNmBc8kutDBXVBiZmUT83eJDb34m5ku5",
  "key42": "2KWqT8JW2g1UTrBNAceaKbFzWDCSwtQbT27uzbA7m8mc7ozFhZTBJtS9h5V371Jh3DYV5S3hSJU9RPZb6HLmD3un",
  "key43": "42JXkT47rv2q1BjTkmcG5h6fQZ1gjDfQBpFAAjK3oE15t7xXCjXLZLravbHQx5me6bUhHNNDqnZv2Ws7uraqqiBi",
  "key44": "3HsDzeLz5as7jwdzdwAycVSRLStXgyB8bwbGUz1pTy1g8YRuA91cztEvoBWvVr5ApV6CPbQvqc3FW2ruWLqgjrq7",
  "key45": "34rSSiPV27jS1QZPQn3YYu6cjqHQB3D2mQG6GE8brZHoXkxhZe8ChQTqSBvt931F59ps4tkzwV6wh5kdkq4DxKeq",
  "key46": "4CQTUwpNLESat3fNSx7L2WPoyasrj19xqzdcR54RBvueNKWPTCfj3tHNdmq7VUgonja8CDCt3qoWaBuXhcA7s5KH",
  "key47": "3eJgjfkzWWRax83D6JtosyctHVuXR8itjVRuPNdmunGPcfypCBsyQwrrhCSkkEHf9Jbp2ttabnY6i9T5WFgAVs7B",
  "key48": "3LtyTT6KK9xGATx2bBUQSbG1qYXwLN45kwvNzVTb2QLbsmFmjbhoQrAt4FCjDrvaeT5pKEv49NRTkswnFFTnwoEc"
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
