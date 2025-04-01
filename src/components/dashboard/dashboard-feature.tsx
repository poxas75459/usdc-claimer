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
    "5G7yasp4mktXLMg6fU2tfG6aNkejYgpiKpM24gENhxNyTQ9J2KvgfQUDsLJkFrqjbgvgotSJTnJXfQPfyV5ApARr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q9KAQWkm6UMoLkEdZ7ssRd3HFTsmnwrgZF9AXCMnZwTZpzWE5HTTkmk3WRcrYEMoguaKpdSRa66zpu5DkHx6r7a",
  "key1": "4xyAQpx4iUTrnyziQVgLBWs5PTd6GrLAymLAF6sAVvc7ZTuQBWWasu8Lo96BRWnKaez2deVHcJfT8hZ1wsojChWs",
  "key2": "5pG7xWgXwgY11KQUXWo5mkbQTXLEk3J3Q2hXk26Tv8KUjodNeCREdUWUR5YPSNxXC2yuJCJXTHZxEBdMr4fBht1n",
  "key3": "2HfbHxwwApoYyvcunaRBpWTotT8oDZ98ETAFp1vavCPJsv7Li8UfBPjAVnFLRRBs89qidp77wGA7sjXrnSbZRNGR",
  "key4": "2HSQaMoApiGkJyfkq4T9Zg64hrhamrsEy4m5q947qh7CLMcjr8HxsUvj7Gd4Mzn1nauLh2fvMJ3aE7MRGZDyGpcb",
  "key5": "3gNPGrYNbLUjL5A9pFwvVnJz4sSP77fD3BvdTMsgRM1hoM2w5QvL8nVEAv2qC9rFVcERMxDT636PYjqrFwx5L79j",
  "key6": "4eaEAqDnUcic6BjAAnfAt6qfQgRQKRvgrWXEMezGJBpedrdZiUCmAGmy1EitVZT67U1xXFGbFf4bMS7iQRsDKpA3",
  "key7": "3xztGbFzCuzprJKUnCDnpoyEg7ur8UBQm96EfzQBLHthcbNKQzDWPXHH3gfycwD3u47JYRaBZBwHjvPuruHiiiAh",
  "key8": "2zg2oob8C5MrbiqbbQPB5hshoRhvVSkxeNYNbmtGx6MXQfFJxuYdLECSGsMRVXgictCwhM2vw6cwwtC5aYPXAJo",
  "key9": "x5g1QkbkkCExD1BNvjS4BFatL28sgPNK8vRuymuQSwbY9fSf2BPwfTgjL4hre5ZgqoQ4QoXRRUTuKfvrwBTuCYs",
  "key10": "4Pss1kjgo9GBnm2j3djNRp6VqjuUycpLaPYy5KHyYjxqDC581jP4jau7pm2EuksBpxoReRJtP9ZiS4iULsF5QdGr",
  "key11": "4Az2agbffaMZCnTGz51cdhybCs6nELmohjRUGx5wrWwDQZBiY4msVrQZVA5zymiCLr3nsRjQkHv2EVhwAAWBx6Fq",
  "key12": "3CsP49CYTSrdMN2uD5Qa5DXwm1PaMHQyrqwKubKUFvoEMKNHz2g8EWVRBYeGJEjmqNyykN2PdcUvDsV1haB5aRrF",
  "key13": "44vuXfXjoCWcm7VmdtnuxmheGXSMHrSUbRUwVeVap7UVJvn25BYPBavKgvR8fccg5N8eJY93HyGTdfQAAVuJRgrX",
  "key14": "bzEpp2oxrkPCTo5Yg3UpF8jLHxQdBArk9iCqzs2HtYSY8csD6toez4nNTmZrp9Wr98YjoyKFbKUrqx5x3ogc9Yn",
  "key15": "2TeT12b86FK8bSz3zdxfYfTTjqAdPkGTLbVAcTdnu7rfsghFwABsxp5yApb5721fiErYTXihUceX7x4MQB5DtgWb",
  "key16": "2FTQ4EShhyiCR7eJ9vfRUp4a2uKpBFrYrBZfDDobU9ZfuNkWL45FjSBuiYMXSd5GjmrHAPjNFVy1bPCXRjUz1dzS",
  "key17": "dBiMzJqg14FQufUFAymXotcDaXfHm2WJZTyEcfRmH5rLV6185zwCrsVRBJBzH2pcquVTL9gVvYc9LTVTVegTFpW",
  "key18": "2sYRaBU5DqKxYE5da2jtMThkKoKZY3hrjHjkmiS9S82qtH6FjgzQENEh5Y6th3k6H38uvMn8rNpx6giQ9awa7tHx",
  "key19": "5ZLjVHhi1U2MFqeGCRdWx8amWcDsy9UwxuZiea6zjqTLkRXya9f5b8sJH8hn7isiqjMAggk3bVv11XPB6d4WYp2k",
  "key20": "63YyHLYK3Q1KPKaNnv1Yz7arw8o6n1dKkGnAwmrW7cxyDYz4pvKRy8Uz3s73scJsjcKBGaeAwNBVZbnqkJoqt1Jz",
  "key21": "4ndUozwDB7CgPsPGtYvxwWTTf23p1DH1ZnHEfHRL55KEKbmTxASQu2PBXV6gGtFUERSnDX6Y64kYemsBU6LAmqRt",
  "key22": "AiGZD4ffdVGMZS8nbAMcXCKEAQBU9YS7N7Uctt8FvU2bYuAgax4LG1EMjL2QtPpZNA5kvwABPS2jEsQYGD8H2TE",
  "key23": "5wmyvXSduwrubkpxn982B5sZEUqtnCD6LsdjBq5CzejVZwCAf9uur2D9wANaSM8gE6QAUwNPLb32H9pGHaTWYnte",
  "key24": "2MTXh1GiNd8RgZDuQT5Bz1FaSWMWi6xgPiHy4QCWG26kwKAX7Nrze7sfNQGJ3SJ1jy32avETTy9cq3aN2snWQQ3E",
  "key25": "642Cyn9tMZmrocsKZrXARt4r2aG7F4rshPrTGqer9a8e2FiTzFZxMQQG1x1aqh2DUmJw5R69ffzjvJfdJs2tK3RV",
  "key26": "381BshgaxBwcNJ27V7By6ZhaZw3LBTYhjNQVYsndpjvX1jYXt8ABiQHKXMsYjVstVgmaiP98R6XQJkFjMrsGNvwH",
  "key27": "4b8dSjh5dAhogVzZkCPuKHLnSSAkmXcZf1dQp5jmZ19NT4rbrdQSJxpjoHuypACVi5955YH3Lp18qPZ2V4GPNQev",
  "key28": "56VvaXM9AzHcdavGbhv9WJ5UbZbSkURD2yQUxzM18utQ37Kou3dtXSPyxYpqJhwkJaRyLhxJm5oqL3eu1DNwxShD",
  "key29": "2M9ghqdQdbyqQyTKqcYTG9h5Y8ExdwCLVYSRWUCEWMSc3ndx8rrkgQoRH7UR6ym3fmsjmyNMMNwJFSPaXVgAcsny",
  "key30": "4YaTbWnPXLVMQBduwaHiQtqx4Noz7VJAE2BDcGKGH9WVucjCPWG9PEUUJh7XF3nxBjfxA49znaGttSTJsmqVFGWt",
  "key31": "Rq5bnaLK9RiCGVPSoXTvWgP1cJAzmo7rmHdTLHVk7TFvVFywws3qVs4Pt8rkqRZfhhdwiWBGfyqoF98ZUGUGLLq",
  "key32": "5wwfFTZ9giPtkW2RnbHqk4XcPPkGB76Jem7kfxr4gpsgwdLJWdAXgswU4BgaUCAGqFkhPQLQJAQZZuALdhRDjvUa",
  "key33": "3N1U2n3C4cXxGE9GcUW9BECMcMo5JHtRdA9jHEZPPqYQKYwfpmg66zhyF4i7cVtfkm3ky6thM58Verpq7HBfFsPx",
  "key34": "34BRbaeXGz9xUZwSrq5yd4y2s5dbP3yPMwwZJYYy4rEXd1jq9379veQngdWdtUvA9EaN4tcrcvaxHNXXRwcUGdnr",
  "key35": "2HxBXdrpFrkz7Q7jJALjx3rFYPHBZpS6edqZQViYXQe8GRp8TUL4ZC3LamUf1NAm5CLgw9ghadBqpRZmdrH7Jvxi",
  "key36": "5VrpS2wb5WZPh8aivZSeVgQ42EuRzsjo1qfpbepreD2utDd5c6TQ3C2PVJRrS4JuQjAGGbtf965MpuW6iwTWTRGU",
  "key37": "3j1QcB6jRktX3B2uTMvJ5Yx2EhtoVHLpc932AUEqPRzpKqQxsBbJ2rpeL8a9VNKE9zXutaZhwS4A1huiwPJ6m6LG",
  "key38": "2M8bs4tg3eXYLzC2Vpq68H1NVTUsCwjAaYLsVwr5hUqBKTcc4Sn8RhsnZLJN4bpLDdkpoK3ZxM98Wi4oRE5Uw8KW",
  "key39": "2E5U2RQjhfpkowYYKwRySnHWiP2MaNCm5gyTiMm4xNxcW9AfVm3Gpf2c2BrGx86hJnNdK4yFjnqWukvU31EAwrBP",
  "key40": "47e2R6RuxzdSDr4ErznjUYwJxtJtdAzkHQjTF8HP6DFz4EQ3RruRWtFq2uHMPjm9ojRbo2h33XHiFm2p1jK7msHR",
  "key41": "8d8RgdtsaJDo53BLj3pag4BmgbJJewK2eQ3eP4QKWkZix6szNNK5NjguA6QdgNX5MXvywkgeYuVrGFJLA9Z5L8v",
  "key42": "29Jvx3DUMgzXaLMP5YmqsrRHtKrio324imJxG2Vxy6u3beHRpG9sw8p8XUdS2bp4Pm6VkLoAXXmuSEoYgg4mi6uJ",
  "key43": "5NYLT13D2baQr56DDqyH3vYnYnWuQxhvGuDmU8jyFX8TZLQ4DLzLaqJsQeTZsouRFNthQfciuNpVidHReRQ47NSf",
  "key44": "NvsfpbMkRyVeMNiyragS7Y7Gc9WyVMUKLKCkfeor6FDUYd8pDMsfLPRCmuCXLD19KDodw2t1krEq7bC3p8mhuoc"
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
