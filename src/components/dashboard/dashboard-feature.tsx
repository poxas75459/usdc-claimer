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
    "5SpDsyAcbvHrsS3gZvsPZBHBGiSpe1ifkhw7UtYwLNLhqWNghZNzghvnTnDQCm2vjusBx5aSCDvVNFmLZA9XqZTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JVmGWFudWhV24Se3Jjz2aTN52L4KCfvgaiXB6U5tk3hPEyS6FGRdbr7Bav4dLD25dRLbs61TGYhKwn5KKA8oy8v",
  "key1": "2A5GQ7MyQdh1MSt5gQsQhdB381iessdwm74cvyBbkKnDLtLgJVnGT2B4dpNFFGiTqa9tfv3xAzCuRXY77RzBDUkk",
  "key2": "4xdSMsWUeH2uh8iATTEjXPWdCNCjk6QnzbnUnJFBmu1Z2j8RpWnxCNuyJ8iCvaUCHWGEjhLsVhP3dqRS5VsEhQCW",
  "key3": "2ZUfPyLPf8QGWNc3h8DFAE95fMbeT6eHJ7VQKbJ6r4JFAmSN4WVzHhZ1yd5UofWgkwFvYfvRhPxqwNhYv5MYVtdc",
  "key4": "wj8o3rmyPak3LCdEnGp2yhrP4CpFLp2bmB8LRApjdq4E4Z9nzNQZmvNdZawNeZ7ScwMRLZa1Cxjxc3MPK4wLbkQ",
  "key5": "38wZ2F5kTKc5uS5c8VR8oWLdP4L741q6BN769g76m6BYgtpAnm7uNraznqsGZEDjEc3VoUf1KuQxvHgfqGqXxpaH",
  "key6": "3bidTCByHgJi3i8obc2Y3v8HBXm1Ps7DxXDiVX83hw1KddhctgZbhJ47BqzxDDtYzr12H5ifGmZKn6UGLRbUrRJq",
  "key7": "3dFig4rSrVZaK7b9piSTfL9A3hfgM9PLQQ12Ffsj8tm5Zqoc9byg8LkVFa3iApdB6Zh5tKH6Ku83mTufNVE2XovA",
  "key8": "3hvcwj9dLwuMwUYkYL2XP1xTCSvuzibiT7UPfdQfYj8W4pGkQWikgBLswBVa4s2J25nSKzWHxfLkB21ST6suGy4C",
  "key9": "w6wPzJBj1KpduusrC83V14fGEkiYKQ12dqrjE7KxzRV2ppi6gopXWydL3Vgs98MskaoV6166oSfK5g3mP5Gy95H",
  "key10": "2538W5qF3tdy2Gf6Ch37kSuwrFgWXdqt1JQZqSXtCVmJUNvpMhGb3nXbhRsUZaLGqPYgE37tTWKxXks2i4PtV1EN",
  "key11": "5oovTjNZf2PMDKJTuvQegj9dV3Ac9Z934Ja8QAVLuHk3gSghgxVwxowaqHGntQYnVrGxcTFXxNfaymay2qBcq9NS",
  "key12": "3BfqtCznU2kevQf69Zn8oJaegi4TmvMYmB7qQzXxD8uBoGDcd2DPiC4w8kAC4JiAZroavtB2KwSXbReQGyoZqJPp",
  "key13": "2BJMGBPz8dMi6G2GzteHbuPAbAE7JZJL1x7HijJXLgaJXA6hfT1L9HqYzqUwdWwnCtMJaoUdk7TfAsXVqUaiKYan",
  "key14": "5LJ3zSZTgmHs74xobdQ33iKP3YT82ZQqsAJ2G2HLRN1fMTonh4cnVTDMZp6cRnzPG8mZTwgxijGXQ3t9YpJNyK9K",
  "key15": "5vUZan5e2fjZ6j3mMMeDB3vsiQWeVL9otmhZWD3wZdnQ5Fa5Qapat8aF1WTzYLyCXFcceHV7boqwWDSvYJ5CgUMv",
  "key16": "2Nf46o9nZFSXHtf5oqxi3Paif2Kv55UaAkMyAqyNJ1tTU1er12RvAth5fZBKGuwToH7vBmZ7inuzpqggL4r52heW",
  "key17": "5pads5FAiW6dTTyq6NEsf6eufiotkUA5wSpY1m2DujfCVn1RcqQ6tKgN7ve2CXBuqRM9tvkaZDfVoz9L9HzzGSds",
  "key18": "2y1XD3Ltk8Z3Y5coxUEfPKNFmzUGdve4itSskFz6Tvkt3xFRUnZnqUvDFTujsUVmrZXC6t1Bmec84nfBKL3HEZjY",
  "key19": "4JzUCBTwtc1172CZfgK1r2t2aJab6SdRqyvPD3eoJejDqqCrESTR68LVScTbchT7717JjgC8cCmDmsGMjBXzDYDD",
  "key20": "2vVpuP7BWYPfYFKM8EkJXnHKizwnNqZp62hJ7LpqRFUCH6g18yCK76EuKzSC8JxdeJbX6fWdFw3Gk2uCsG94v4LZ",
  "key21": "2asuT4fLPqFxXh8asRuiR1yTKo22nBscmHnxQgnaf7UTncJyvEDRVHcy2rTdUbh5ryx3HB7F7ZQiojVMot7vFggE",
  "key22": "2hxy4n3TnE72FGA3ojgMNE5AGdMwTmkgxNEPqBpvVuBo2rqNzoV2t8roPn6WawuBpnYNK6iwhJ28qohKEx1X81k6",
  "key23": "42W4Z6TdgSWi8Cm9aqpoL8i8gt7ZxR6zvWQ8P2ixacT7dPV3yqAyX3X9tNQ2XYLtmVKtw8T95Mgq3ZaQYtqGU17B",
  "key24": "5uLxoRvfSuAp7mHkC6XaoKXjWfToMi5665LmtiNh6fSG1JB7MCmM1EiTmYLTCgdDmDoMquNnzbSC9fRU3RtJJfMF",
  "key25": "VST6UWkXGwyMD6Xe3rZ3YK221QyrrSocJRyXyBG3B6Xe2R7daqSWkMHgpL9oaBWa9A1LTvHKKSDZiKjQsCLjUFP",
  "key26": "4TgwjPqGbCJZz9ddjVwTKsp2WxFs4nnbJSBpg81wV3Qbr2naXQehfKEKHtYbaFGYAK9yDNn5b46eF93kbt6NFhXD",
  "key27": "5Wwx8pwYH6nHr4d7SY1cXCmkhKwAKBxnrRNbCVcdZ9MLjgCgtf7dwQJLTsyo5MFkbcULGpwpkDUV2TsCtdgpuRrB",
  "key28": "4DQzChNfvayTHshfFEkJ7yqQKsRT7xoPtE2yS471PGZE7jCwhZeXFJeQhueGfTYauSmMjL4jHgwESBncyQtowAkQ",
  "key29": "3YZQ5thDnCwF3pMVv81PK3EiwGmKf4vnqvWeWUrCWGxz61MAwF9gcoHJvwae1rrCB4AGXrSTNCNjmGRd18Ezi5vr",
  "key30": "hWj3wfH76bkMgj4zz4FyzG1XxWBi9uWNxEAF71uHFP9Hgu3F2ntZZ2xgDBzh5TLEFsWqmo5g3tsUUpRLZimTv98",
  "key31": "2iSWaqzmNKyvVKSpFB2ksDRyjopeUvyWrJiyes2DKkJJK74sbUoaCbvNZ1hhxiqVc8Dt68T2Yu3cWj3prW6pdBn2",
  "key32": "3J4CFpSSQdyhrAvpod7b2aVmaCPeQ7RwBgrZFR18vnkot1nFbKYhPfgLDLDMv13MnKJX6Yj9ReSGCFhfZmAq6qSU",
  "key33": "NzCiqcCKpsXHByBCJBd8brKopJAGGzc1Ags9dnBZfVLp3HmMPdKwvkfWW8kXdUf1QFPjqWRaFxrEQkqroziPbMW",
  "key34": "2v3EaspPNZVayRNEDu18GvcWCZbnYMew4T2TKarLcAyYDozPLh9f9v3zM1H6nfSYxG6RkMjCZJY8nEsNFV9VgEwZ",
  "key35": "ggxCR3nG29ADvAFDnqDqmBVoRnJpDYdRvrkPEax8VA93BkVCbREGwTZaXn4nhMu8c4wcQtUdhv79vv3iyUtYWHV"
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
