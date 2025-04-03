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
    "2y5ENV8JLpjTUprA5Pk3WRo6cvmqVdFgKf6Xm2hQTGiiVe9fzYPgqRMxZRomhq8WEKpoCn3n4786btVGtccSGQ3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wF86XG2U9KqFnsj2eqSLgg3T6pgeWjcFJ3MbHryJin8pkgUEdWebs5K2rMHZfvfzrPoJdQv6a5MwbpjX8UhHvoM",
  "key1": "2xx31QEQEseM2g4Ja1KChViRgsQGKrvydwmetVR2uygyPscRRWpezveov9QTY4kZCdhvu4r7YqujsBUH5jd8afS2",
  "key2": "3V1fYhCCmWk5d94wQcdqT1chr7MPTzvYfgPNgT3BJLF6Bv2qoW94SDWoLjBHVP6URTVhVCWaCNRRJdbaQo5PWx8",
  "key3": "2smZBBMtGn1mJcPoqFh7acDTiT95fZmwuYmnqEPVyaWdDiChYGoGNyGjwn2CcuFSsWExPp7NMY4RYQ8btDkvSwzj",
  "key4": "2ADtiBam4YoGiBDQF66ABHDiob2YQPAUEA3y5RnUd9MLhZYvssgpEed8dU7Lnp9RbyJ3pG2RPszULZPKb7aR9RPk",
  "key5": "3rXAEzr58dgf32h9vAfJcVuoS4VChQbYug8Y6fPDCyHPmsNS7yDLZYFnkkdgJnemhmJtyN3oKotW3iuUsrxpojwc",
  "key6": "2tZafJcxFcpRDmX1HPdZ8h5VLd6uFVnwVi2QDaQexoWiJh43xJ2aoW5df3WCXPennk5EkpscZNjqfpiLbbWYhuXc",
  "key7": "8jDQFAJjo9G6pmy5nBYwyGTVgsJ99vQRxX529qCs7UAjUgN23o1DVd6S3sqdH3b2cRCytiHeFCUZz5an7K8wW76",
  "key8": "2k6PGc24VqH2tHmbVzX3zSaEFpxAFvrxdcwfKqqZ1SpU7o3ujZBB33ydi9Y7Jm5fvvBTHcxUvujkKAfdFTaUEabE",
  "key9": "Zan7T13YkiXy52o49dePVsPY3FQTPWtfywA3y89WBBcpbqKVU4d3bcC9nmfrgD4JWWBnSakzpiCcxBrZdpzpvCU",
  "key10": "23LiTnSTuJPGsDn1pn5ceXLmHgFbe98URtNhezASQq1HuoKxZAumErt8i6uUzNpzqVQBMcRzU8fdhoDr8WVgpwG2",
  "key11": "2XgraZC63stspWNa5sphepydZYWoohJWqpKNnsKGcVBG4esxUjvihamf8xhAaKhJAcCD5m8KJQXQmDDgJf8QbiLB",
  "key12": "5FunyC2KjvyCLFShoLqWKkTkUGrRiiyE9yTZ6QpT8uP5wcgYdjbzwPWegyrD2wo1xwG1nHf3NqJywH6frQuhTnSb",
  "key13": "3ACY3zepsuA22cKRvLmnYjwMFT7cxLsvwy3WH24ziEVDw788jsBZeJRzSJ82Y6EQUcACRwqtFakeyXY6W8y6PzrX",
  "key14": "3BBxrhzBTSD84z42QZVimU7V3y4KF4pFRUUnyEmmoccuMh7xFYgXg1HyReQyZiBhm9f7o9GiHgV6A6iRPYGHrmBV",
  "key15": "39fHCD7rVY7ifo5QHvE3xQ2ZF5PixonxdBnyT6kViNcaqHRnR78f6qFwB2KWjEgKoPREEDyeFZVv3ac7Vsj7GsJM",
  "key16": "38rbAScktmoi8GoRoso62QNnNJsU27TerTXMSR2AmJQizpxpSYDNmuMZ7SNugUhBq6dNDCkBEZWiEgwZ26LQLpci",
  "key17": "S4cJrKAACxs2v5FmycsmNakXAJAzMWZW4q1MHwRXb1r6GVQhqjLgAdv2EGZENvkvWCNUntSjtu2Hky3fHwbfznv",
  "key18": "6J9HYfhVwakL65A3qxv9vcWSen7564nEabYHCqN6d7abhGqi977DMAvvQoxtnVx8v6GA1CNyHKJRvBUybvnpLMR",
  "key19": "5QvQL9RDjK39H647Hkin7TCQ2AZrSsWe4B6qPzyMmqkXUbthSQWTkvycv9icEWqaRU5QXzQEgeDyQSXyKEEWGN63",
  "key20": "2N89NSUbu9qfNk4jjrCdRBu2g7XFR3j8anA8Lyt7c5S3KMLncbwRuHe6cjtbb2odYWQ29vfzfWPzdbBH9DGzgxZh",
  "key21": "5cf6LoZxAZyq4Kns8hGMhQ9wGVan53Fm62orAjtVDykP5PTJrJXWwqJ96bX8waGXipEPwTUrrx9HPRfDDUvd55pz",
  "key22": "2VG76Dc2H4nrpRqbCoWKmnPjpKwYbLbjfjav2k9RdGR3yd1ro9iCBHz5LcMNYThY98ZGXj4Hbvn19trGAD5sn5DB",
  "key23": "RwFKsJ6jNxpejUwDucGUdtcVEHeCsPapTdnSfdbVtqsvc6sn1946QCua2gDbCqNwSWYiwxPLLpsPnoLYvrmGV4S",
  "key24": "54aw4z9VWUJyv1eFAncerG61aEF7qtTLVn3frrnr6GptYfXWWoE626FQkZBePXU1PUWa3cNM3ucHUHHdew5zTdp7",
  "key25": "3wvQ7Emnxx41wpvfaoGVcLtZ36oevzY6R2zomik6GPVVJMTAJv5aN4KQkaE8CKPjHCPcuyvU6Yf2tQoUde6HGVWB",
  "key26": "MLwq1VP9a7bHjPZLe1RNzVKzyxCMRSdiLp1azgGxwHNZhq3LBCPDfGzmGktwmJqmDuCP4Ry7fuB6eBCbcxRvuKU",
  "key27": "ZpPWkxymTgg9v7m6fhsie7uxVedRmGFU3TLCFKDF1f7fiPNF8kBdu6UYrBkJegnokmh6hDXRZKdGUTR6R9wbCZS",
  "key28": "4YKq1MU5Ejg2DHkv9y9uFEPhp2T68Jkh4raSwPdWszsZRzuUsH2y3YcMUdTCApA4meuvXHhbREkYPw6A7aYMCjxr",
  "key29": "66cXHXNDf6Di4VBP3bsxaFN6XDZnAMWxifxgPm84EhKKGbw7TGwS5nzWn9ebenT5RgUnNcZHxh8J8hPHi5qdJmbW"
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
