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
    "5Q2UrgkmtJjtidRoma8EAoR1oGvdYBnsY8oS2VZpGkp4tvuqb9Zo2xoiLaDSC1b2rDGJoZfKcVZApDMY5bejMyYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XaJx9HhhZ8jZw9tY4SDDEoZj76bj2DGp6dbeADFEWKjvcgdHZW8Gz1ax6VLLX9t4NPz9cKUryozNVeFy1JEkunc",
  "key1": "2b68k7Cf2KpTpGSnveXFtwNitjHxgfYt3nkdPeFbgY44LkcwV3e32bMXYy6YD1sgK2dgbpCFDFdicxAFgLFHwURS",
  "key2": "4b635Cj6Mw8fCW3ZvPz3tfvuqr1ZdqZaWiSHUyX222idLzDmFvq96nSYx8GSDFdx4fVCY4TyhdT4YGSUMbGj4zvq",
  "key3": "21898ufpSik2QcKKP8p5TATLpPkXnA82BaSrWkyuqKM5UMYQwCSDu6RoLoxtcUvcsXds2jXLGyeEh2QhNSoh94cb",
  "key4": "3aQzs5Q8YmWVEFeV3x3rPgoRuZJ7m2zeuDb14bGZuBp1TL5tzK7ZxPERShWavyhgmF2SszwsUocKkwiHFovTczrW",
  "key5": "jD6EaEdJjdfysxpkSqMgYYiJqBqNAhKwtJiLH3nd7i3Gute58SyVrrrj28xbcYKXeRuQScFwYeQeLhPzXKfK7E8",
  "key6": "2hJ8exevQyw2fi4saQc3Kr9i4rhnrCYe5xYgQrCRx1uuQci6R4fBcv1WftKRgNCKiMqtCzFcPY3TBrUovSgSSaq",
  "key7": "3zsh1AZTHRXWdzcqL1y1gAGRzDa3i6uzSK2x1h3YDpgoDUT8Ax6gvyicudWPVH8PXRHEYp4bkXGe6eDnfmPHK3X6",
  "key8": "4D4CzRoT8zypBPt4CM3X9UMsy5a6mmHTCxux2uZobk1Np5ShvjA2yb1CPdgHn23qzJCDhhWQvGEA32kZ9fS2dHNR",
  "key9": "2QF1h13JzQKw2DKFsg1zWnqREHsUNgVGehptcYf1PqdhfYjvsmKxsdn57pX9DRRLWhtZz8qL54NJKefopYkoAQin",
  "key10": "7GpCsQdWTYyaiH57ktZSBMTwCmCotqF2R4yCi8TY449cimh2XqxphgP2ZJeAz8kNd6xQEK7HMV6aBuamvD9asem",
  "key11": "5ZnsHWV5mtsaZaLuDJu2nvg2FfzU3WU7yFUCpQiuk4BpKJmNAC1JJvYXTv986VcKisWZQm3r3GSBGSkdHwX5VHWw",
  "key12": "2fehnkXJZFtPMR8t7aShdpDnS6VnpnS1fQXe9Q6v8knd3UNMWX4FShnQg11eU5u3rYL79sFMmGeXqg3nmrcsrLFV",
  "key13": "62RRQqo8msVREE86ZVRFv1m2me1JeLVNEBB1cEmNhdp1ANr8pb4zkqKgANR66dQ9G3vGqmPtshu6KwSV5in5BTkF",
  "key14": "2CsxNNtCVbF4ce1iWJi8CMJGJQSYgDyHiSTGiXjcBSACVYa9mrRYasB9uVszhmRKXpzb3py1wAcsaHFBwJ77ZcRs",
  "key15": "2f5D89a3L8JpexKHh5igYoMHCq25MsuHiT6edePDXYeGP4ZRLC99XaTRSCYM6CJ9Jj8kz2yiUBWpFVtxWrvgEzeU",
  "key16": "2o2xZq82qZBjpuwkZAJnNw7iBT6x9ykEjcBjqtCfgNMbnQAW1S9kJJpUdDrwaoM6qBG5ZXjxx6BQDKUhXQbiS2Pa",
  "key17": "2rRMYW1d43aaf8wxs2P8UMmFxa5geiBLmE8XpYW3gq6b3h4qnKbgem9jafZ29PeKyGRoezLb6Bi8eiXNW5ETybk1",
  "key18": "FdeMRjmxkWe7u43sYpGbrPfBAoufcSCbWjGoSivdTDT46ePCkcjAtgJK2dZN79zAamhqLsjiQXxTwAmRtNQi7HY",
  "key19": "22RYUyJpQPg6GBdSDLviYs8kQP89oFy6DARETSikgsP6cJNMhDWTUEvfGmHu18TcPVCeeRmnrWmez45Z3WsntWmE",
  "key20": "4D2w15f8h8dHVpjvG35YVh8xSnnD13HKHzcgMBr7k3G7r5aHWD85D5DBfX8tTwwPANXJMVqh9DjETPPXS5dWzweP",
  "key21": "2JBcdHx28JkEcord3ZDNK8GtE6kGW6W4nnJnqBnCB9bZR6KHhnW7EBsP8Ak6xRXphtDd2BkWrNaGYsQaZk6UHTWm",
  "key22": "LnBwNVz5veVtKejmtoWn26CVuJNzmsa97kpnaFCAjeU3br31Vqmghwp9HD64v7uRQJ7XjrJukXd69HMU6XMQGTN",
  "key23": "3cSxkG8GoGQ1Hdk7o59JfpG5WNaaq7kSqJftNoJwqrwmN4wUpTmA52irViRwV9WFSY8TVjCidniR1bJA2kHS9Bay",
  "key24": "5TjJjepiHyYbZ8Krbivx56iAPXV6Dg5YcYBxxHVtSVdQhuwx2uQBPafKggq7osUbDX8YE2W8WNgk8wQGEqQExxtm",
  "key25": "4D721wtwJMVAkso3wARNoV1zU1uEqTE4qBNEAYNQtGhxRfPJjgj2jARvEmEWhvYjxoiXEkWtAakBbkBABSSVYiMF",
  "key26": "2Wm6Zk1RmohigVCusVHKvd2cmruko9YD1qgshVMASYFRL1E9nLa6JTQdDP9NEbRcAchuwCVVuvfY2Dsa4n1DFuoi",
  "key27": "jpwWyvN7ULJWfq1KefLqLsxyqVdfp9eLuUFx4ufn4X5VMotGtNAhZ2m39M4SCqNKNeS9wAwUmVhqGfeYgRPXag7",
  "key28": "2XFHNW3fd36fhMxLFxqoxxsgxa9pm2z5oRYPmPNPA5u5XhuJjWM69Gun5to5JaHFSyPL3J5VZtfsnCeSHMiDSabn",
  "key29": "57FKYL9fYBSeJ65LtnQQbev5vGHBEdmxnsmjRXU8hUSikgSzvd7fzUAmZ3QasUcwE5pNUGL56puFSMEK1JKsVH6m",
  "key30": "4yh3nXU7eauZ1YbgefRYc3a1qkMjTXzVe4aTZusgqG6h8Qy63N4crJpnXPj2ktAu7nJfXqWk6BuYePGR6LUj6vkF",
  "key31": "NTuk8Pm1z9ksniJJ2KBBzH1JJaHfiPwShoyzCzu7oDVGwNrzbgWJ7ZzMK9wBM9F5gUMv5nrx6cefNz6v8kD1w5x",
  "key32": "5tc18eEC1GtLVUxsf4h2xDhLX9MH9YhjcLmYj8qV3jjgbySXMq6DoNRjJS4jkuzSBFXM4kovvdcQembWRkqUBLkZ",
  "key33": "28w5aTLVd7oXzmpZh41EQ3zvAwnyfxVz2RiCh67QTXqdYdgNP34vQNKTPgwMLNRfkZ72RiFajvVpmHWKfEyUrBMJ",
  "key34": "EEJF3rH6s1cmfuWgvBC2drwWCaMRuWURLkuejSRGvJXMkkFx4kAkZ1C5SMkzVDwPduNCzeLx9FPgDKp7gzt9DzB",
  "key35": "4iVxtWZWTBqnGfV1Yj4kNQk2bjx9EpsQjWjecpgRUpWNmMSLYqqXxtMNiSyKwdX9qwWEwPKWhykVaz3ZVc7pWLD9",
  "key36": "3QfsSQC4BCvnsnwW8e4jaN2oA29LNYhKECDYW6PtzDyRGuJj2NsgNzEzKd73gvzEZY9j5dXMWP1Xsu8zyVNZ4eBA",
  "key37": "26vWdZRwet45ZA97tp4atmo7TviPyu8gFixDsv1FBkWCBcLJ2KaoJYowyvAKso3E2u2eYzsLcv7fjjdSKYqkbkyZ",
  "key38": "4BXjg8RA4o1f9YgcZ7msxjcoVv6ybbTtb9kTTTvkWEXvGNMncygaSdeg4XFmvc4TUC8wczUqBFf92P1ffceoPcVP",
  "key39": "XkTjG23BmHpx2G1FjQaGUzpNzxEtyWaYwSkrJgygK1TtVxErt7gfjTxbY7W8mnfubCkqxMJ8R8KkwnCUauJHbCW",
  "key40": "2dtr2v3nj3CWGEJEdsYWUEvxnHty7H3yCZ5soRvEmtKT9VyJdfoBR6yRqYoSzNENSL7eYD67xzt6j3YxZvZjFKGq"
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
