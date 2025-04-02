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
    "3rSz1nu4UEvGkiioPQSaGw2M5h4ZCtPYYaV4oZHGZehjr6pudyqvvmt3tyrwpNCzYCDmbykFyixLFvDmzWSrER98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QRV9GmfzfRSth7N1KjqNa75YPN96DYDZSrSQyYvimrLoPMGUSt6MNxCkVqGezUBv13ttD8fFZUNsQekq2mFnxpW",
  "key1": "4FasotHnT9NPm6sxZgwLRAz54DfDhPZr2Dooj1EpMRkVLXGCSpELuAjVVCeqsCBr8uHHCXMXti5hYtoiMUbhayPp",
  "key2": "2riDMRK6DwNUpTvXHHVt7UqHug55X6N2pkFQGhrAMCtCd7C34pLivAYPPDpRGjvYynYhFjzVSanQbmGpC2J1bmyL",
  "key3": "3Rrt9p6BRTXHUdwkGL2JRoX3gojcdsgZtivXoeGyFu9hhur7kGfZUGFnDZyEcB6qLHWoUy4DWgpGzmHComWzUFtF",
  "key4": "g1Th7RrXVCGG4Ppt3ud2Dmk7d55Kjn6RgKAoC3qM8Xa6PX6xmJCNi2ix6Coauoj64K61Wweop8nQz3Y258sQstB",
  "key5": "62QWHWnJ71qBzuNp7SpYjBSdw6Aarnik9ongxX6uttoMvjDGxKN7qhzK1yKhXqRePSRLCZSdEWCxdvv232pcj7ct",
  "key6": "25y6TCSnsEejLu9jfkxttTmVJxs3xh6bSwRsxcvdBhkeTSvpeMXmfSzbnuWMfcxzKS3Ut7kNyL9cNFyttV5STEF1",
  "key7": "4v79AK3f7BLjAeuktbd3ivEEAnbENDwcoM6daP8W9F5V4tcX83ebqfdTvvAmthyq6LtU1hFcntGjNk8DqJL3T7Zy",
  "key8": "3k6nqUxFr6Lx6iU8wo7mYCJquyrbjgHVzgwRgZWgHDX2DUw6CVCcUXzVV5cqqufem5LaHbenTKTntqMfBEzofhs9",
  "key9": "48YxaScRkguMMhnyMmxdhkikrDHgdw4wBZhwNgT6hLaxw2SEk9wCLQYrHiKKuxiXnnMSeTm2aB5BBJU1wThqYztT",
  "key10": "28TtLUD6S8uXwSyQ6d7QfyfgtsiibTVKfbmKicLxeAa3y2YXDssZKqy9sPcuHsVad5utpshrbc5xa78iDZQhUSqL",
  "key11": "3G9iXBbP5dEq5fGHKQAUJ8owHL9tujyYbw8CgkURiZK6UYAuqRAxY8Y5TjMHUwJGrnNiu1ESbCr8TD49LY3qAJJ9",
  "key12": "61mJHrVjgD1142jNsQBdp2UXAraZCRtyZDyvHt8y4FbNCJj8tQ8Wb13TAju6mAAo3AvjVn3s4recEtCeT8dmPAf4",
  "key13": "19sqeHJm8aeU2PNRKMnqhYB9uQTp3tYJVPBFCseoxj4FWJFP5a1DZtvU1XytByt4DuFYMKbmRcYWeAQkBFnqVFR",
  "key14": "27iZ8X3er9Q4xW99ozN5hPLYD51vWQam8ieJ47vJkeaN5hfDBMnrgki2b9zvSpAM9vayjAXGUNyX1romWHWqf5wf",
  "key15": "XwahqbDYC15oJhKmNNc29xLB8gDMogohG1cB1aE2ERQQazw6PfoGy1jSVNKauuzBuaftvoyyteSEJ68iqf1CzZk",
  "key16": "5QL6MJm5wLyuvCUWGtas6gznthQaUNZm93ysm3uhDUjsitgfBr99Ki6t3T1Y9xtGhwxAA7gyyKCUZDr9ceVUX7TN",
  "key17": "3D8oNG6P67JP9GyeTCd8XtGyikzRt1dXN9cQhsRQjiUMNGFwaVQwwDYjh1jWQ4eBqVZ3sRy5NxdHZumSirCoacuu",
  "key18": "t1eUoBD7uaG392ApETaMEAnWiZos1F1cZ9Pgn49iM2Qx2uTSus1eGR282nRbkE66344wv2ZwiEsiE1zvS8kQYh2",
  "key19": "Yasg1bm1kWZxCVTR2HdCdiTqi6k24viLgLBG5d9SubhKPrktTKqQUpMCXvHoD9qR8ERdbYi1E1ZRpxQmmGZZgEb",
  "key20": "5t5MJuQSyi9fQmhUnggZ6Bm53gGHntPv7662Ae7FffKUngf8ivpt2VbZKhvcEmFkFHFFL65AkcU5rMtgHpHRCxYY",
  "key21": "4yg22E3qhvcELK3GBg4YiVraoNNwoCs97rDuhHW46n93iQbtLe97QQyHKyqpzaELwkdCbDWq65gzWRhsx2RM3Ymp",
  "key22": "3nvVZjdU6oTCigWBPXywTM8cd7gUNq5N9mjM7BzsZ6F9EGnP6LysAnLYSrRvWfPwt7gNgMZ7CQacKCedvi3G3Vny",
  "key23": "4XaJwAiBUaJuGxTQDJM7UvzkJhz6TiTt1BX9XCH6WwbbmygLuR4e8R4rJfbyVRPAZ71oGzj7N4eYTTxmWkv6wUUy",
  "key24": "5hJVX6teZw3upaeKJYHcbg9fo1x9opaKm8Ykkd5z82wFobFkrmJPEiteXD6ADhfpH4Jv63yCQVPtF4MtqUeDpoFY",
  "key25": "4WjJnaHSEgVsqV7QPq6XzHi7J2qGk2ZccvDzrd1Ud1PtVrjyT5QzLjqbjLoq46rjoQKn7ywatH4CvoohXySRV752",
  "key26": "VtBKGXH5yqt5FHyAMxHVmNFBd8vXm3CPaqRCb4fi14YkxVTSqGKNeFvJtKTZJXPRgUfRFr6CTRK9StxdzZr9Ahq",
  "key27": "2Sug6YQ97kWkiftGoePgUmxtC7ZG4t3RHhL1QcyadjnJJFDtkTLUs28XsVxpSffk29LEtZBRsuw5Qfzm2GpxAoRp",
  "key28": "2b2oBdvJ4v4btgN2BkHnrHzCa7G8Ua74RcgPQx6x55iihv3r7RPEjKxZQkSjYqGwHGwHB8zpp1sDBMPHHpfyymHk"
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
