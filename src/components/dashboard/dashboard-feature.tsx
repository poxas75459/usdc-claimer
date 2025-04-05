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
    "phAcatDGzP7H81wrhLe9fm1kzcF27ScBkqpFFDggunJoXvHzPkeShxvmdwfY4ChAadL741SuoRewBPKWY8izcvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpvN7XJo1qp3aAXMUMzV57EwPqS4xzJWN9hTLYrhp9AhCd6iQDmuCq5FnKQB1QYXtwVsZ1wwEtWsBtWptj8ukp1",
  "key1": "4KDD2gSEMdP7CjzfHYQtr47MQJQen8j4czvehjtZJBintKHPrdopR7rfJNL451RUunh4WNHgC4SFbTfVBZu7ZQL",
  "key2": "4v5CwjeCJ5Yp6Jsr4m9RLUaKrJE6dyrXoEWm6k49AjB22a89QuPrzMu9DdesvC5mDpLdK8mEHj69qkBrgcEtziUZ",
  "key3": "3oaHqjh1qr4sYkDeRaCxWBd1dTpBEqBH6ggHyoRH1F5xiH6JWnobwaWYmGhwD6ZfL7zajbP4AQnDzGi3vhcfewyx",
  "key4": "QMibggQPd4b8D8Q91DPCtcrEU4eAbLzKmDmAXAkuj8dLC73USrRY8e37J1ZxPWzv34Zw2MauQDBjYdqzWSrrSoT",
  "key5": "SbSYiZdrdP4BQM4hDVtPXSqQ468BDxjCNwdwJyVNrTNHZP5f1WmHNF7QKCBGzP56ebTtNeHgcdQSjnXFRfgKFF2",
  "key6": "41RTymNhhcw5Vda1Kqpy53eVcQ4GmT3aXqQcBjkpujtF8hedC6eWiDSYNoXkmqbwDUTS2iYUGr6phcRnGKBCEwdw",
  "key7": "5xir4vJ3PCmdCKFj9W5Ysksa5JpeVq8vKhd5z3kTcdshFPKHQ4YtuwBmqA7HgJXK1L46B6x9rmZERNpPpKTjojn2",
  "key8": "3JGWRDTDp9XDXpWX4voJkGfMqopQ7R1rRvW8Tvmay37xksmkWvq91RVhuzPCn8Md6i4a32f9t16DK88CUHSdXFcw",
  "key9": "dUYp7KRULq6iy4GQWz12VcJJQJLwoBUwSoWHgZi3m2rBEp7oBEW83rzXB2g9RfBy2SZdbuBNE9sUEwcrzqC7uL7",
  "key10": "614kFC5RStBC4iZJAJkuBfimpdTp5HCmkoVLg4HXZQdfEAcGQKhcVBX1pnNFqnJbCHQNqokoKdCjBgJXHb8d8J2V",
  "key11": "S5Jjuo5WdW8htG1zGzDwVpsUfc1NBF6AAMsYLWmxHj49Y4NKR4kJTyk5LFTWieWwzsoYf8q1EEW5fjoiSp36pEd",
  "key12": "5kCxodGFFt7xE9W9EDxbGqMNjAaEmAciGBq6jkXnMvhZHDVzpaKuaGduXW2557z1Z8i6TYxJ84NAZEENU6qRMbpk",
  "key13": "n7bbRvPd32TLjFz6HK5hh8tqTrW6CCqoTzGjKQ73SSo741ZpruPKsMANLrsCc7oq5nzoPcaZbpCYKp9AWQ1oM1f",
  "key14": "5nWA5dH9LD6gwz2cz4vS7mR3E58A7B8oFu9Z8gDhhQunj3KzFSWGYbtSQxzzS7LQtK8LrLjArCcfXdu6jpFVndHz",
  "key15": "32WPxAQpXLNXGRrjWG65XtBrTf3sAwBxXxum4Fhmv9AWPKTMrbKocB5CbcAfEZUTNKdoUBZwchst7x4oGrjJ1dCN",
  "key16": "5oLKd8kXttZym8DbZMB95MmjvkGhguZq1tRsM4PVq6MmXK3z9PR6tRTyzYbCSDvEh7ckLWfcscRbjL2M6UuXnEd7",
  "key17": "KVwbxwz9shBjnYGmQKYfr8DBdnN2eNxjnp5wQzwec4UdYPguugMP7wYd8H9PFkDMC7o4KVZXwWWcFgkBPaiy9PU",
  "key18": "4UoHCgJEVYTkofrXUoEHL9BrnctECRqksmXbvvnzYqSQa9tAKucQfn3tf8kifuzdQ2Kdgb2W5LW1DwQC545C5iR4",
  "key19": "4qag1Lqav75H46Jv4ndxntfRYXkhvn6rVY4GaD6eQHiPzirkQqTwXUamnmYGRJ68BP3sTijjiNBQmxW7Q1rCxnuX",
  "key20": "4QVV6CsCgYsxMJBTbSBWN4ErwDHh2sHknQtQJYJt9McBocdSqtsxtxugykdYjr2yeeNcvUBmALZSs93SSLUpWQzc",
  "key21": "jgfLeYjAAuNJSAZkt3iMimat9JL3yaWkdsFNVqHidfrwcKSU6nr2wapDwvdiz143V1LDJXoWB9h98HvdZxYyY9p",
  "key22": "3FNt2VjUWScTSfUZiDeMCFYTjwN8eLxhXQZg5YdTpBqnJLS2zmDfbEGJ88y51mLa5X4kTPvXTCAuo2D9jtqQcTUb",
  "key23": "2xdqfNYYZLG2C45WFyTypSzafgpuWDsAFunpJ1H33R2dWyeLGgiDHfgwLPG7jB8uhpQrxEjXjKMQSECyJbK1JVaf",
  "key24": "4p5fH2AJaFAz9sXx96CX6HNGnvqQVP2Z2VwrYswYV28mHmaQaGWn5JFjPWJ47Gvgn7voQJAW66YDp9oNSiY4Hx3z",
  "key25": "3dkqkNNjGALVQGpsmNDvqAEhYkB5bvBVMBvNPb2UBwvv4fFfc6HGYf1MfVqDHuzJETR2vE6W2FwMXLS3Aobj5vjY",
  "key26": "uT12jUTMk6jrZXB6A7uzURKrGtXeXKqpEbfRh38bJum4rYqPAyjyZYNBw9y3SQ59cK5Fpji4LaADajAXjvz36Af",
  "key27": "47WhXrVDcNPzbYXGQhvoySY352DNsxwyRw48bBRdQUqvCwZSkLrd1DxBfhHo6FR45Jv814Gdn1pLBRD9GzZNF6yH",
  "key28": "eRqy6GUXknfSeBW7bcEUkQeKpNsM49eS8Jk7v61Bp8PrVg24btH8TvKbpPCXaWsxPK7KAYjLbn3UG1ac7AqGS9t",
  "key29": "pCUYavbwrQrHy3QRyc4tysdNRFdGJARjCptLtwTiAunKSZydQeM6ur2diP98CB9XoyaMeUpRi82Ez6XaDKJyuj2",
  "key30": "5dwWtFygR3beSNXBDpT26e3PzFi8ibHodfmWkcGViYjMp8C41JzfmbYHYuYuDCoKRPj77woZ9yzkD41EmXxJfax",
  "key31": "4ZuzXPjNWLhmDECHMyHmDUeY5JTwP2YwJdemfgAUi6X3BeGqKxE8X8DJ6mFQMnwq7hbmiMGpNgDn4cWhr7BfVzxq"
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
