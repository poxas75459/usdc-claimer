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
    "36NgKbV3UAdZcTwRBszqxrMDJsdPCGhAEKa8sd5cW4ippaHh52puaZF2Tm3tVq7gjgAdskb5gr9octenary8uKct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uBsznhA84vrSF9QdynYYHh9Xo1vKWxYHiZm3RWtXtj1X3BU6MEoQu15WCxLKEcjVnvUcNYFUJtw1ZbTb4rQD2F1",
  "key1": "2JW74AsPtFSkVGiv9m1ya6oKm8Xe4ZvqRHbA4gC7XJgiGNCJxAkxQMZB3ovsGCTP92osu3WC848WBsVXViMeZc63",
  "key2": "xsiUZwNhD3tDmb6SF8GipBr1uDbLmkssGuEiizBySTR5DATkeqWoM4SkVfZa5w5z4knNF6s4HRvvtUVCW4zXQxF",
  "key3": "2yYREyA3tCaZLzjMQ84CFTSWWgHrmFoBp3pTPKkF9tZ61zQCdbPzh3ScTAgjwaGPz1SYAyfEtQMt64gDUFTcZgC8",
  "key4": "2i3JWV1BdcPZWKvP4ePNssz1tKLQbsJ483JrEVjtn5wzrNShs4FiUKYjCuaYaZuTtkmVcysdRBrPnG1VXZQyG7aE",
  "key5": "3X3BUNsyhuHWkUp9dBqjzazsv98i8DezfGp9rnqjabZfYDTqA8GUXDsbzDXwyfaQBSjj2Bn4wd8ovg2Z4M8nruHM",
  "key6": "5NAhrAKoupz8brjhBgZG6EHRXMetWULnhhjeTFM4WQn91GLF7qvH5UrpyTRRCkq3TAjYdnjBChnSzvN4x2MK1dSj",
  "key7": "gcaVQsDfpJiosXPXptSsbFe4KKkkoptUrkJVggWiUSeU3XLNHBeLXdv4TUARYfqcgvt89vYVYgVRw17JTLgvSE6",
  "key8": "2PkskkRgh6qNjY6jbiPrPe6PdVVJFNnTog69YMWScdHrNL5raXw449rsM2k5qi7wFxC37qok9eq3M3UTeU4aachu",
  "key9": "GhGo8hKdqXnxtzfM7JCqXBrxQRPL1oZiTR2UuULHH1oUaEYLFEMc76e1KNogK1HrTtuvP9ojsbvPV4HywuVCfEL",
  "key10": "FULWzvnyaD3i8rQrrK8UvVJujXroJLABByhC3VPpEjNGtjTmVRR4pr9uUEfMKACeatNM82EyQ3i5Q8JfmDhSWFB",
  "key11": "24bVB5xkAfkCdGAUyZGmLj1idMYg3ogs5WAw49tVM2utgWwHF5M4k6h9qEzk5CZMrUZGHk48JpDgoZymnvzJjkmv",
  "key12": "56pV3mJdPrsrux5Brp1fXs2YgHN24b2Q7g3nLK6P3R63QM8tDmu7Z9JMU8g1mbDv4RDSZZxjjHzjV4rPdGruFzuJ",
  "key13": "3tQT9AK4psdDAp8FA8t8fBJhZoB4xdvRgWNyb5DEg4AfcnxCaQbnofkETPwHiW6zmop4sJMHtE7PuyqjT1mtcZCi",
  "key14": "2uzkGo79K7b144afHDbkPyWB6KQ3ECvPVeQiwUJnHTHA6Mj6MxHgnzwqgB2D6TcrC8eNTRKqBuFDrCiGEyVraGnH",
  "key15": "3sQhmsuYTyGowqmZ8vyexrDHdsCYHFonGpfrcVZNQaQQ6EZY91ScUHPAQNNZ7eQ7TmjWC4vrEE5h9USCkBNdjVj4",
  "key16": "2SkZR8ruVPRhCCoLkzwKGM6ax7cSC8FDdC3PEEVZLEEG3rCCNFgyyxhfWk7EpASS1RmpRiNbHkFzFTenPsUpD8Dt",
  "key17": "3wW6L4g5CtJCkVysRNJ6wTgQwiVFtbCYj4dqV5VNiNRvgz248RugWJmeU8ZtGk57yqGHWZGbA2bUjqUNcSir67pJ",
  "key18": "61Y8FEtpSwkWzVH8UPoKTGNLMr6GsiksBfbtBrMqRxiajaLkNcvjjxWgWADbLviN2PinPewjDfguLHro5YG6r2fr",
  "key19": "c5nQxq4jMqrKdu4WG6W1CGwhKavujhiL9mp4koYnQjYon2AhEe2Xm6hgJnYgYLxGUEm5zi9nBKvo8nDZLP6j95Q",
  "key20": "2Fs3aCQuWoD7C5F2iHUuE52dmEfATcKdm94j9PdTTiGee1tjWj1zq96oj23byFoxXkRjYH5RpXz48M3pHfyn7N7Y",
  "key21": "5CuJphu5bnQUm7ibdBd7HcmkDMEfpfbJhCVnuz1oKeyCAQi1Vs31xBY7GSzwoo1SxBy3Ei8ZG9QG5r4Pnnjfe88i",
  "key22": "4v3yKQEk4w9DGSeBNcE21pNCXXrtgcNqMuGJJk4PvUVxJWVVpVwPLBreYNZf5NQ5j2reRn5wedKm486h2qUS6fKW",
  "key23": "cRuUXXMAJuyePZ2rVWzLWacMWBD8jJqJDtRjy1jKDUSGTnb8vR3Ew4eAnXzTrtJhCsJ6cQ2Q4CnG8UNHA3Cy731",
  "key24": "3SNzxVq3GKJoFEGaSybZb1sVxnNJpRER6RQjUfiUjpmY4SoDNaZ7J5C6yqUki49hfRhkpXavfgsxsg9erY3vK7ch",
  "key25": "2pG247WyUexQWcUfYeeQFeWUcRFyKpWgkyfd9Yh378mU4mqZyuTgqg6afd37MhsWVted6vzeUX8FbqBvTZiPqgNp",
  "key26": "2uHVXneMAa32vYzdt9txxnFjy88LKLk8V6KKGxgMLxTpAGefDFY6KTmpoSSDe9FUB1RzwVEGd1f1R4z5PvGaJnGB",
  "key27": "BXPyGznG4HHd8FmvnZNTixsAN8Pi1BZiVYwga67L9whoRgqCrgBCyRVCk2scL9HoZwC5nHHsM6jXqve8tk5x8Br",
  "key28": "4c9sHWFvsc6NRDBreVpFVmDCrtKCCzDNQT4X8MtFyd56zs5qNQ4dErewKEmmwCnSksyj4kwkrVLjwd7VNZo4Jfyn",
  "key29": "4FHaR6wL2PvLVZ5bpPvkoHtbTN2NoX2F7trpmU2LvLGwD7Skrsrhu729vm1TcEA64utyJNS4nDrQ25SgVMBfaKRx",
  "key30": "2ofGpcvvLK9hEqfzyFo35PffWXLPFN71MgKKBCT3aacsrdpqyEjvJwwBo4vRj9fPhLuozQh7boCjnJcAHQTLbpYt",
  "key31": "4B1P3SjvycmooxwNb4WotLiKfFh8U6jwsyTv98G7bfeFG26mnoDALPvnxrPTBz4FJCFww57EPtHE6SSMKhuUvhcu",
  "key32": "26iGZmiZaJsXnFZPAhW2fPxHEKuxxF9sWjutNUYnDJcRTDVTXopzskbghzGYNR1a892mh85Ycr1vD23E3ZYHRTSd",
  "key33": "5c2UBZUiCV1UYDZkRCuxRNnkMnn42MUSyvS2UdDgpKuNeh9CmN9jdSSkfsUUZVFfkFg3bpivELoAFJ9Umy9LdQWz",
  "key34": "bSpSR3miJf6YY1Mp2Mp4Cw5nv6qkSSFY6xJhf5gGYG4sPMGtxawLYAymhPo3ZxMMmC5gAGsWUY2zAKRBbHjMPfL",
  "key35": "2XzzuUCoaZQJEb5yozHGQbG2ovstBjDuo63wkg2rNySSZkmWenDBq3914jbR8iZrmJFSELdy7LdiN8AtC8RKyWxu",
  "key36": "4YCh2UPUWR1DMSaRsYXJ8vpsfXu2QJVJpCR3faL3MAzoPvQBNnBWzjURtUH3kjKmSEQbCxSzPDsEuM5EAwiwYcZ",
  "key37": "53SgKWhaJgyJn7PaX3zvzGUpBMCV4YG29UeRXwymD4oTsjkdwnwBGBC8E9mVdBp3Ud9vwJuoMShpVWvfKWs8Qr8E",
  "key38": "hc3aG8oGz1dixtVoHLXPWaaWj1Ab3Qg9RZZG99ikZ95jLHXJkzxbPaeaeVr1FvuxS8P2zEEpYYjUPeJFpWT6U3M",
  "key39": "49ZHgGzXorKNJZ1uMu8TczprBo9jg5ywumd2HbXYR2v1kVZ9AoLbdmCKDR4FUQKVQ3JxExx4P4GYgkhu6rSr4j9k",
  "key40": "5Ha6VDD138ZsamrAP42uPzhSzfFPLjGzxvRrwqqLWmb9ytEhqkjd4uGbgWiuL6AFdHas4p6hcLd659kwnwmeW4CB",
  "key41": "4nFYyt2noLZKMGyuvyuRJNL6FYBQ2YGnefXzeQqEXNbCD9o3dxJvpPmFCqjvr4UT6WMdRFFo1QJak43G2E6KL1cx",
  "key42": "3FB5x8yY2usEor8qEwZirWoVvh2kTf4svRVmrJHTnXi1zBXAHf1HB4wSmjcfqua6yAokYnkxjh3K8gLnyW6z2LWw",
  "key43": "4Txyr6QsLudXHE8DerDc2jGp1qszRyGampuBgna1edyNGFwToDVU9XtwnkLnfCqZx6R7YNvaovhtASooqHXn37ZU",
  "key44": "4xQg8svbUuuARybTxn3uTRagtDJDBhqKJM4EuNdtAAX6FeW5ztRXEqVVByPcb5u1KBJYm8Ty4yA3JHGaStToQjpN",
  "key45": "42E9xrRLXN8J2Cm57aVoQkqso8cS82oswadbhYsWw19EcDK2RLScRES4tGByXtcGYM42MF7D8Zpp3b3NLiiCLjjH"
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
