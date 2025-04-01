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
    "4Kh8YsDZcN3pkoHMug8EHg8toCerwcVG652nKMgCTMWGk8XhwYdHVSxH8oSCm6cTCBbxcbjSXT91A6eTiJRu5PaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fBXSWFuT9K3j4mgw1GFWak7wgbZwBetPadEDRpyLmDazmrCCYaLnTZsZvxpJXhvEnxpktdu2RJC6E1PhgTSARjY",
  "key1": "4Ho2hTvb8jBxpd87TBWnBsfeRmWHecKAaKXWyDiEzegUnsUvEeP72vKAep2MzoDC5PJph1fDVbhxajfNvdnzu7dY",
  "key2": "3EK5AWRXTfoaCh14YfocFPQ4npTy8Sqqv1xWyYsSj1RJrPxE8rDczpuRjVUoQNibHjxfLeWoxaxzUQwXvQcALG5z",
  "key3": "59GVXmc7bN6ykoxcNJqqwUhHiC5b9r73NfGjz5MqmJGy5CwWdV9b3zvvq2Z8FEtQfqrVsxkf7WKbHTC1tWqYLMva",
  "key4": "oCvxDf14Dm6akjBpWDRA7i4MkjWSXBCdgD2PcSQn1KjoR9cSVzaoPhSWdS1oQVtfoywi8ztTdpe8hJGfBom5Hk5",
  "key5": "dLQ7wLyVYFE2qMbMVgroUdxQyjtbTKCMV83RsdkeAdDhqZ3FVQXpiuH7G2RJM3w581LmpcbSk1dmB8cg3VaCBJL",
  "key6": "5kzNXU2tb9fUEDg24B3mG3ArTmSshCGLejB17xo4EGo5b2xDKkmgyaN98WBN3mmYcmfdL3wPQurBRNeE86PHKA7y",
  "key7": "9TXCGtLDZW4fLZSeVM1ViAR2LhdijjeDAVAqxpoiwRp9VnzsmTqTytbHFgAmjr2JftTB5MWdp1aJeUa8mKVeBYE",
  "key8": "3xKThjPxwiTzJPW3wE7KcawadUY3fCRGoZBxAZVmiNVc4qX6fNN56f8WPe2X1dh5Buyn1PgC4mygFanT2djnsafS",
  "key9": "4ZC24of82mtzS2uhYbQ9QPiGoWxWKJsNgwk97FT47cuGjc17AEjCsvEumJtfH2wBbYL8jAA4nV89BJkTxaDUsmMD",
  "key10": "52js8ZywNUozrwRhg9hApKZaZhdAVDQEynhaedLd7j1JDiVnww2dwdRyemiKySfX3JhQrH3sXRP2CmQmFyHLQ154",
  "key11": "4yRX7HhGsP8DKcvmSH5veNaRcgPc6mVrgmZcjrfqWe9z2zPSEqQo1NDVrfT5bVsw3aKxv4qukT6pCeK6BX92Lg8H",
  "key12": "4kNJRMUAZjBQzVcRKru8t1Wk97J1SrRLzE14wmf4ojbTYXP5aYayJtTMV7t4hYboCQo1Epvd144jZDjdnCBjGkLo",
  "key13": "2CmA7w5L7zRJeR5XS6xH7pg31Y6UnqVipCxTbysSQvRCgYGwPn925RJ2VLFKfDfs2Q34VsDAkBmoKgMSJi3hyzfT",
  "key14": "jRCVnjFsFLzYRopSiYgnkrytLumDerwBrTCD3U9ZeV7c9fKdCERC4fL9jvRbtnb8ckxmY8mh2TVG2LU4HBj2geU",
  "key15": "2g9qcf1aQcE4J3ZKYNSMC91m9VZSBAP9ijsSQQTvdQSc7LfbtjeisfVZw2j3SBmdx7ctdFsS47W3QC55vvFfiuKV",
  "key16": "5b34FCSxLZA3XpPcgJt3b2QGSm7zpmvFj45wNWA6DqSBRmvb2zu7PUT4K1kdABz7jydTcfVsgdq3VMpoQnTQM6Lh",
  "key17": "2tKgjDwNnenwpG2NXVLmr8EFQX35TgMz49G8UkQasxGqEa2YuwkEENHZivyZ79awAHcE9sf87qhmtgkwuPmaTfuq",
  "key18": "4bZJ1QvFdbiLWc2ykhcvaKX5GXDVn3X8a3dQLb2kPpaZhYFjg1r4aLM3a2sW7GYwHVy1pzrq5fND4Nd4EeRBrXJ8",
  "key19": "2b2kx1CWoq8UHj8sPWfvr5Mo2FnBtkUd5Ecyf1ibvv6M5GBgk5ZQyxAtxLr3naRTxnB5iGm5xUcvXX4CesXwpSpo",
  "key20": "2gqaL8T1AywcaiMLubnw9CQ21EHREKzM7ZwoZdiRcFvqRnncbjE7869mZFbPxq95jdYLCCGY3zQcXkr3jfK4bTGK",
  "key21": "3Fgm66EpxaS3hkX5FKVfATg9aoRynQ3UsPF1gKzG9BcehQxCWBsFRWQBiHAUzb3hQp4E71EjUGNrAWJw7uh8xpr3",
  "key22": "3b7d5nq5kne3QRWwoc9npRW9S5JRXRy6BKds994y2A6PV7v83XzY8X5RSDiT8VMzsMiTRpXAZaxwDFV9Ljs5dD27",
  "key23": "4jLqvUmJ8pnP3XeU6Tf56v1DcFmrKUZMPPD2aRChfdSYg94gHfVAFs5qmFnJjRTzVaEgmQk1dYcqreDnefU6rh24",
  "key24": "5xMmBb9pHw1eX58EyWHWS2Dr24HMS2k23sq6oYR6miEGxccQHcaeQeygY7dRT2swMAjhKL5TWeknv63Cmih6qsB5",
  "key25": "vQrY7364kX3GtM7xHqW6KrsQejQjaoLaJkbDL8itCCAjmXKk4gGyXskDfEf7Um2vWxMgMfzLqm4x9MND3J9ZSou",
  "key26": "3BJAf2K5wqZ7s9jrLbKnc14svFRJM6QTWDHc3eshSLhnuD3rcPwk7UorMcxZwYPRCr9BgWxUDFAFtw7w62cjLN2t",
  "key27": "28hWuHSrik4Tko8UEaMddum3B2vWhcRbAvbtgfXxbsmve6ZFpJfWPLEkoP9bJbFnU1n7AJFvQKG2ZuuLFQ64Bbdp",
  "key28": "5yVLrKD9Qzo2FhBNXbW1k8HDPZMMtxAejHHh7LCgrXiWhbEXiyLjoLuQEewcdKMtx2Wqa5MZUnED11oekVQWayRR",
  "key29": "ChLAZRmAwtQuaVLaiLocSkgZVZcM3BMoWtkL6VmHmVooPU5vxLhWNqyMJmNKGQ65BAs2xnak5hVdRBBVkY337kL",
  "key30": "4CESWEA3JAyhDwdgf6TM18ocPtBbTyt6FCTGJtNZaKtK5cZJz6Q9STBiQzAujHETFr9g6thb69sXoSVWxfRdJBT",
  "key31": "4bxzfQnmQ6kUaP6UJCpMRCeBME3XjKhNLcz5EUmgrufWfJ3emt78GzyVZDusbGnmKKYGEwMVhk9QuUcqSH7xJzki",
  "key32": "UfNx1hFkqwFsJUwvbYRT8VGbfpHagkDypr5afCniyVEBPQZFQ7tELeiroJ1wjZuhy7mN2FZF98KoyohsZmKeqbi",
  "key33": "oSWxdTcyuYqDvaTbmDPzLyXj8hQ1ugjpaSWpvJdYJKrmorNNSLUPFvtWuKpTUiMfeGxkYydmRqXVgF2fEJoqDzQ",
  "key34": "5VF6w2rNrHmGUGL6KBTMEyeEePMQ3fEX5z5gAFRnQ3ccT1h7ewPkVifjqP9grghV8qJJ79AQnhQGBkYND64KMHPR",
  "key35": "2Ee3DboguMaE8TWnYTjpJSKAm34cnDxiwXKQXey7gyVwjZ7pddDPA7EQR2vQG5NpQ5fYKb4ijtTxCEvJh51zSLK5",
  "key36": "kFAXzhaCmZASGHugkcZwqU7TqLpyBrrXS7kz6ogfvr7tpYsDQavaXz9xWswT6HANWRnQFGBp8zYwD2FUfovEEWW",
  "key37": "3Xko47w95X9EnBaE24i7u32B59QoDH3SaviTdVsrCEDG31277phJVfnw5Wn8qxtxfn73HG9prbtGKyiXA9LXWcfu",
  "key38": "PJCWY7pJ6HqWmYHz63stXEVEUopcn3cRHvJF3AqDjgcfkmZhnVFcVfJawVC7kjCXYNuN352zBN4EbMn2SDGwmGz",
  "key39": "2wR4ovJvAz54aqnKFxcqq72Wz7FUF8FNgq4qaWszB7Mfs5j8rFwT5BvPtzgBJEjzyxKpYtk4BVvqDSWmokMCJSA6",
  "key40": "2AnYZFfePpaGjcE7FukKUvMxpGEpihxPsDsVoAcTa2AFPAvkdtVdfxZ58th9r67ZCiMsV2FxCthTAFJWPXGNPA4P"
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
