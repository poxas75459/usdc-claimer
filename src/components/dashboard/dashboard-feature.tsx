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
    "2cAcLJ8Y78qVZ9AmGABaYAGYdfLyhHXdz89qvAjnopCgWQiCTEx7tWLTBfkmnBn2VyjVmsLcW2XYuH9ESPZqhRFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WGPEG2xKHrGurPNWDQdKQBXVCUwXrGgCz4ahf3S3KNLsGRkgmGt5vQesZJjqx9vR2FRV4obg5oF2vZxwW13mvs",
  "key1": "vTxhruNVEuUFZ26APS9uzoTJuSSqkJsZbTZEUUpVzPHvUnP92TJEKiuGPKng9xYGFrmXa8zLuM4w3Y8kqeqRJfZ",
  "key2": "5Rf2T9zD21MiRETzy4FLJBCa7RLv3v7PExPy4CbqwUaEC62S32pNCdNyBDLDDfXYzroJ2y4D1ozXmtGLi9TgGFuJ",
  "key3": "5L3TztPPSrTgcZXcsz8VFroxeCAN1RuC4kWDTTj2fJzzbZzHF6ravLk5EykpRDRSgnFpWsswh1wdg41EP19Ni5zs",
  "key4": "38QHh2aE4dMzh74WBiLJdM4amLz7ZvXL7vxUfqcUAAXiZ8zkinp5xfy9ZL47e2uUXQSKUgUQCsREnpZRyYo8nCdJ",
  "key5": "2Qrqdf9akMZNYZTLRnAAZnaixy1wBhThHhyumhAE6MBeNmQWgzraTc4YwyF7h2HuuXoVn3pHa3BJDWCUGB4Ns33r",
  "key6": "g8RC1vZwYLmmSjEzdGKnhAGsb3DCwZDcndoGEmH5gN5XBvNWfYgc5JfvFzPEHQmHp6Rhr3mtcksxmaxxU2y7mAR",
  "key7": "4YSeHWL2KPECFZQ9aCiZJeVV8bGKxu8jhEV1hnbPqCFHBKHGBzgV9e69LQ3X1WTtHCWu5ts9EGAwXgeJiWAWrQAC",
  "key8": "2CzgPubMg6tnP5EQEYxTDPinANnjjmRoV6NyYzuMub4nMgJ5WzS9uQG9U97Z6NEY4ewNpejUocAz2qnwXhWNjWye",
  "key9": "hvgAYT19Y9mbnM5evs8uGRA8KQfYVgTQodwuDLLw5idHSodaZjBWCdWWvhE5poAf3uRMyjEzaqvpBYsRxpthZZc",
  "key10": "5Q5bsqqSNujSeDcKoQDFv8G4oRBJ8pzMBnXkiDgvRQAiQGaMfowK5gxp6YHNrBrZXBe4GNXcfaThhixFr8MWFqh5",
  "key11": "5auutBXmP36FNsxzCYLLPbEU8ZpL5WFeUgvdFp7QBc4Xq3k2DK1Hz3UGAYkALcNVmUDhmBdkA9QTpkk9uNDqSwgw",
  "key12": "3PPTSQTKRiv5XuwioTaxPiacQQJHi48baNcgNJrWJZ3wbktjZM7ysxXPQrnrcE6cFXfVLE7xkfYJW1LpJbnEwfH7",
  "key13": "6RcXAsivkdgovuZR69HHKX5Fcz4BBn23JdNqq9Xnc2vDqzSsH9rUcJQRnV4nqarJqQhq8YLsG7PXLnuENFgDZr7",
  "key14": "4BktQzfy1rZwykyjBsvW7KBeCddoFMEhWsFjpTAcBLeFxcZiXDBpo3wAEEF4Z3K2kX6mdksrMUCRnbNxHs1SEwVA",
  "key15": "3RNYyre57qySmnu9uZtGr2ksXcvBn8Cq5ugnLEkM9DVeNH4tYxmDb5S6obYxeYKVXu3411vCbWqFh5CjALYd4i3F",
  "key16": "2qrj53zKU2u4Yfw2vHLXxTWseBk7J3nS15LqcpV96eCv9727ztsZkJsEZswVFztQHjyGNvRK7C8kMYA1TNeDRMWr",
  "key17": "5NBqPq3cJe5BHxJfrdqN5YNupyGW7Ak7J7rAvtcynFbq1aNSL6fXiyV9fcMDxK5TNcZZaoZaPSqCQabtZbeEBJyN",
  "key18": "5mVAZ6a2Eq2sTcLW9ay1jRsrDNKnM7TMhGwoaRVdAJc6H8gtcsq2KURfMY2wmkQudDHZknLPD4DAovmEFeuvB4ho",
  "key19": "3FHJewJEeNk7RtxXfXjLqSShhUA7CNSCVgTLQmb1hceDD9pPaJ1FLfTBncyLuShe436FHka5r8pTy5PMtS7MHZBX",
  "key20": "3Hr1T2q6H6YsWi5hmMVJNGEQK8kMQa51ocfgq6MejC3RpyH712uP56pvPaUY72gEuTfM298cDvPGXyxpDpozfSVY",
  "key21": "2SLHGeQmdVFMG72oaTN8RyauHPoSw8jG2FWPsTfoi91xDiA9X7QZb6mEch65eUmgpD7GSW9SGredF1SXcUKdqWEx",
  "key22": "49Nh2iZZJFTSsUh4NuPNmksjJVg7AR774dGEPr5NCUEdavnma9Pn4CsYkgxfz97mXzKgfLiZ56BbHpZNtTTFft5b",
  "key23": "4turDuCgrMPqqTm5CQKbzhpCRA2iJ3VT3LzkktJQQEcYp3o29uP8v1UyfAMduD5CuT6wY9VBsj65sAP3eJ83yfwm",
  "key24": "2jgocoDiqgP7mkPC2yxVAKzb4VBVGN4HJju7KHacxVjgkTGx1kvR4778v3ehB5HaUXb5CghCTu15tiNkpCfgdrgn",
  "key25": "5nTNM2JFATpTXaysDzH3qs3wGSCSExq5n766fHXkbp1hekn1hzM5AzPVCcVwbmQSC31pXxPdzMXryRhhnysBFk1C",
  "key26": "56xFr7UN5tGLt38ahjiUzJUQ1xs2xoGAFb5VdFFy4VgPETZsw2uA6cgK29mTdmV1PfjBrvAtCYwAGQZfbb5jkj5x",
  "key27": "5hNVjMCkLxt2xSsuzaa9J4qgCVEXJtd9y9XnAaP16WCmC1mZZWg594VVRdeoWt4o4r9uzb7NvUah3JgrdpH6gzLg",
  "key28": "5aqXtzrft8C3smaE5ncB4uCsa1qun231J28YM18xcYbj9p1w1cY3DkCunX2Rt7vpDgyVTAevJtLQCUh1Nxb91u2e",
  "key29": "4zHuBRkZkJSHtQiPxiQuqZtZNBBAaPo7Cvm2iLSsCPoQim3QRDGgMrwc9QbC3cgaL4SSbfRLNpVok9gKzgcSXBMr",
  "key30": "3LNzYd2Rq869M78UB5tENwkCivio93pRxaDMDbcQQvKensMRor419HUqB5yzVJnYLUxcKa9nLF2V3BL8BFinDhHZ",
  "key31": "BwvunDKH612bNojBD12sPevi4N9R2EBuUUtxyaVRoTrJSBg9R1n5LMDUMLaCyVFtY4P5seXp7zprHeKUY5FHufy",
  "key32": "4tHzaNkUAu3hdy35cWN2gjgo73VNtHYwgVcG6nPX5oXYUvJCXomB1Qb3h6n3w9nmGDCKcDwspQCHvWu8ckbLeTLK",
  "key33": "4AgxDHnEgEmSiTuqQK51jGTeXBEfbiLUgcS2zaQLxRCyhSACXe4t6WJ8CU64D2t8KWq8mV5KrcTzAVxbm9msQRAU"
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
