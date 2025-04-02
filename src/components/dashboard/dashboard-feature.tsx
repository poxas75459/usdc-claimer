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
    "5veh3PgvVf66R1CW9qF3DFbk7RzwwVVBnwU6MLPEuVg7PWZ9yL3EncowM3PsrikrVgGgE32ioYth54nXwip2Ny6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HNmWEvR9syPjtKeDjUTrXyqDyaEiKgvRN61ZBLhsZV9Jn1PAu5qwZyZx9vkcU5rQ6dJnBzUEpF6kka6B9uKqE1p",
  "key1": "5sKAfdci1ahTDaZU8apCtrp8e4fHZ6hDaS8sXnynCAz1yzEhVBiEGy5jKtfrB8W2n72e5sxdiJ1xHMjSoRwwdCX4",
  "key2": "2e8v9J4tqQckkuFiUNmrWFJgepVkMeyGqbzSiA8RsDU1kAoeDt8FyXv8ZpFrF5Yj2DQK7wirf2J6vta6A5kEEPkH",
  "key3": "65UPiWvD2MnFfXWgHv9aViTpJGAaLXqwRT2WLzPnrEfrm7siEUbpdLRRbQj2ZX7W5xLs1aVFg5sKHbXhpmCJWQ2A",
  "key4": "4wKHtZEckEwWpY5bD2GvuTXMujckjgKbNDnvgovpSXrzYg6Ncm7Ta4yBFyVqKHYxqvaeXVdfvbZM1rvxFegFu5Rb",
  "key5": "35xqrT8Ft9vzd1dq1DjsXN9qN67UaQehFs7cgNgQmkr1ZHD5ut92gmYCA4UBUYiSjufZJ2LAyRL5579XJkRHKVcN",
  "key6": "5MXHa5DZ6xdSGmLHqEY2V1SBaMeskBhtAgzNy9B4Rh9FLvtgfdbBxUDx53JKH2qTdnWeBfY28NpiKm38zV4i5RUz",
  "key7": "5reBchYKAs6ivXpUVv8BBc9Nj8zsjv2KPkhQ4kcfCdW4aEieuZWv269cpQA3hjyW2Fsgysj37npFPbfutiS5n6u",
  "key8": "2BviMQRPdsx2AjPLP6ZeMbiLSbL7T6PCVond25sUzXNwn4TfpE7pna3w4t6t5nPPXtn6G9r1cvJJp4j3oJP3P21u",
  "key9": "3wKUUfH8JpsZRFdKpVuKA5hNEMFn394mZ3Hv2zZKfuGcWRgHrhp499HHyuurVX7XMEFobDdVdWQKfvTJMaHHBP16",
  "key10": "NVroEbwMrP9jPnNWkq2jGV5ZTf87no8LSu94JH1WmuWB4fgzApoU6ESpAQ61wxBMmd5wAByfR3ynAvY4ughsDqh",
  "key11": "2CB21WSf76eHPUcLqZXZkTcM4n88mfMiEzybbtdkvykFFq262nij4o2YDzzBpxc96Zpu9FFAEk6DNsrQphCtXw14",
  "key12": "34V6ZWmPKQDBo52E9dm1P6eXPjqjrhXPaNarapHcsCvQo2cKCSvydY3JbMCEDUzy6Q1htEA9TAoWbJjKwKvQwAWs",
  "key13": "fKZPjSLFXUDyLLgrBxq7Xx78guZTJxpGahTitiKmdntHFejssecruYx4mzJwYxNDGD3JA3Q1aXDincoMXySq3Rf",
  "key14": "3RW4kjZrVW2SES5RiaK1vUFbKZixB2PAgiB46UBat1MQQb5Ztchy6fbvKCk5QuTjWxRGXmcdXpxn1aDRy4ZBYbmP",
  "key15": "2JjCAywiUY5BysSaTyQKZMvJjb59Gjkp7Y1YMRD39JPfs7SYADHS9AYZJbWsq18yDuCHvgJb47UarLS5a2N5NHFo",
  "key16": "4g5Tn9pggesWMZBhXT8ymQJmtLZH3BTSWGkSwyDs1vRE7bwqXUmEVWkKD6hZhpPsvYQUNKUrXT48r5afuyTuqfr1",
  "key17": "5vXCz4YvbzaQ5m9yaXXryUCV4xTjrjJbAsRoPLca7PjAZdffEqiuqy3zoS4WXpccphYymSntPqRYCqcM6C31LKhD",
  "key18": "2eDRBD1zHk4KkcdLgPSRzXZRL2kY4bsWoUx8BY8uwnS5oWRvFLi6Mj4fRVSb2aJxb6QVuHVSew3tSZTBw59sgHv8",
  "key19": "2Fv11SxwYsthJsEtvWmdEpAKoJMsSS6BHb6DDtbx8Lu7zS7ykRUQSUpjti1T3VEM4CcqU59VMeGfkWpzwo6cWqWC",
  "key20": "2iDkQRm2YZdEYtDgr4deExQVXw86hPHtxRvPNvPGk1KbuZCgCS9CCM4c93GMaMKyt7mB7LNJ3kVCSKHmA6i3xoUM",
  "key21": "539pvJzALpELC7CrEwfawyTGwaKADpUdtGbz79SU2wQSTubc9dMwgdWZRBXiHgw7gcdmA7xvX6FCHEaSnxT2Tesf",
  "key22": "58powfqQzxSNiAUSdYoHHmbkb958T9H9jWbAPFz5ER2dhkRFUKhQzAAGsUKD6hiEfiErn98CKmPDcuiMggZePiZA",
  "key23": "nWMTe822zMv8TiuzdDme4yfTzVUAMKAeAnCX6oFSZHrTiENiuTBNRCegtb8UyMg6B8w5LaUMotsY5iGKUm8DJNp",
  "key24": "2HtQp3kRwWZrTw3Ci8HCn8Y1ZksP6kLGgtxse86QqwCxKZRHmfBS5Y6cgqH9deicqyubfE3JYK3PkE8skSesXHvp",
  "key25": "651yPAMLbFp5vAxAfU8PPvBoopsdv6DjEUmz7Ni6Yahiu1nygNQw7d3RwL5551pR4UeKag2qebCc3RHChFruW1VF",
  "key26": "4jKbiaDYGeEedJp3XXSZwAaEXNNvvkggpQjv9yUJr2X4kDbvgcaFPNLFsh6qcPYmwUtZce3w7UhcPWUwoaztNRsa",
  "key27": "5TUbWPaA5tAY8zANpzSwDxaMX2MyXHKaAvSBggRG7JvaeHEZKd5LXr196QMEXtAXuedcz9SFHVoq4gLwcuRjYpUm",
  "key28": "42t28qVY3eZ2AjX2iKYNXhXtpr3QBSKMfvXhfWTkKDshiKSWyuTu8o9daKKTyPjPXmeceunQVJNSsEEBWxHnb3gj",
  "key29": "36QgmGsXUdUbfyrXu9e3hH5sTpoyrEK7Cn7gLZD598dNQp5Y19XNK4tvn6WacFjn6TZ4vfwHnDHDXo8HEsHjAS63",
  "key30": "4XCrTh4k7ziUtjrQjP5ZuRNTSoVwEtixsWFbechQVwkdGPXVPLKKhCxuyz7s533vepV4PRiRQPJGhwnszVtRtWtW",
  "key31": "9WmjKuTDLGMWpVSypS1paLFNAhKNsEDBnf2y33MGvsMsjvCVF2LBh9sXWpMtDv1g77HvscsZ5RunU3N8bJJCsVu",
  "key32": "4g95ZT5JFqDuqLSJLgyNybQoa99DfLgHQf5ZMpBDtJNX2f9UowRXYsx64VZErfbaZjHS5oX4Vuz5XahvTAxgpe3a"
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
