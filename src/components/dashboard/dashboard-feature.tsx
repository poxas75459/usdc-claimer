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
    "5anuLwvRC64KVS34y8tduYX2mv37mnfFFXPLx8T9JdrusAdjtFdwP8fdiGhkx8qVF9JtUZoMt9492W24LtabjUcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gA3iRY4EBQpSM1z13Sdx4sf63aBLmHS7BhHqNghvXWMmdNWVW9edi8MzrqDeL864BcVyQneVVshcCggd91BFY9v",
  "key1": "4Jrf8LJiUSdgudWzSpLJJX9TWk2WdWqtDd2kapuND7kexLemzGmeysGjuSiP8kb9YnQXwrLnWAGhA8AXat2wvEuF",
  "key2": "MPLH8JttxYWC79zAdNe5pMPzmAtd5WEw3gufFMRHfXWmUBxDR2uDAgamJ3FS7wRbvkq8SZioi2RmS4yFXNsDnCR",
  "key3": "2ofQPt9K64Bta44WDtap2pJbmobdMynFu7LLjkQRzv5ZPnDnM43dCLj5L4gH4twdnZ5iAihn2Fru8NH6QUaLpU65",
  "key4": "6o5FuT6TNSzfuUxV7B8ynU54dszznWgxyLXtR5N24HN5uFgTLAsSLWZCtybwzPW8b4rAMUTGDRUCQL2pyNb5Mvs",
  "key5": "5hJHTL1psoeb9pPQHbUTTgkXg3DA3e1xwiTmp5XStYVpBZNZqsyi3qTBYownP8YQ5u7p99uNTRvuAqyNB5RvmWnn",
  "key6": "3jw1nKMu9uKFBCRLMZ9RKRuwie5TmfwB7qBZAsopASmThqZcs6DWzieut3Up3gRGtcthocQW9y6VJLQG5gCUNFHv",
  "key7": "TjdyGTjYZA12yKD5kJPN6N6TThFXthMPKt8sucPt7jn85ZF9DBTQmiJn8L3dETRTT7k3FkfC9PBBHWgZJHMEwhT",
  "key8": "3yuyFRrkBeoZ5cJY5tHsuQaiwYex2WQmbPN2s2gqnJRctxRJuCxuqvgeG1iaQF3EdFgnzbgfU6hemPd9JdK4wGYT",
  "key9": "4gjchzn2V4CXqrGRZNFBg1L3B3mV2y56neh1zafq7Kfx1VqCv3zJxidwYfJ7zEvkYtMwMTvM7iDA6e1R22yMJXi8",
  "key10": "5eAfDwPsANZmYmwpGjwvqXnt28JW6XZsnUuXnsRnU3GPdjARsyHLvNDEhuLEvLVFh7854ETDData6iZEjDSvERJi",
  "key11": "5VenCAD77eLeFSWjuu4sj4DmRh6XpcGSU3fz6qrV3EawCqZa9LnKDKu7m6dyjNvJW8DJQWnXdAPEQ39gt1gxvqXY",
  "key12": "4iyiFQGRB3qfx6cfpy9PbNZ16kP2nTBerwmUGxiHdRF7i1eNTZvfr8pDuAxU8veqFpyESReawEHCRUCPDFRMXZDg",
  "key13": "5DMLHf3dot3dW4W3ndbWcCiiXdmZSHuvaPkvJbqmHE3i5vzDrwrvXYpMddGUoEZAHuQYd1Xy46AjcaRCjcVtmK6B",
  "key14": "3QUXPRgBeaFbp31A23HNCcRie22wwdeRetv5ds62q222n8PteMyNaXRHVDGZcCNx3sDqLU5vuUMFE594QR1UD4tm",
  "key15": "3947MJLjajgDGw69wpL2BnhQbesm1WcPkJDGbcAZgcoz7cimwjggBUmrAyaJfM31fmJQvUwYPDmyLKrHzf81ro7S",
  "key16": "t14sb2pueiTqEWx2GtPAfU8nykDXdSC769so59BznoDHgcaDaU74W35zjPswRhgbebinAt3STjuZXvS4gqXe1Fi",
  "key17": "2pTcjsQcHAh334iMFGbKaPxv73fY8XLy42ArBpCXYCBBxc2Lsasm5GZMc79dmLmuGA6cS4DJikkUy2KXCN8ZTht4",
  "key18": "5ZBndWq3xSzEzRt6eiLgVj4rWYWbNhjNK44zMwtVo33TKfFHDB5exsVbHhzPeP2PB1pa44tmNUcgemE5d8P1Wbts",
  "key19": "66CGDizpQQiPUBL5CkzZAkyfVTkzFA8YmbpeAoSnjxyYXmRQusbYrG4GYBZWXZv77MxhR8UQYSFzyuGVaVoSFyHu",
  "key20": "4MwbgACvvCZKV9iFNR7GimK8S2qMUm638tCcFHnQ6CeVxLYBV1dq38gnnyPVJmi4zMbpVzYdvVPxA7MkAV4KxDzR",
  "key21": "5s1sEPGVaN9UVPgAMeyqFLpcBYSsoK7iYVkL6a6UW7u7E113Dfh1itpXdQztZSg9YXddm7hfnYeGveHkvtbUSQJd",
  "key22": "4M9QqHWacXL2d6ii4ozQqhhZfkiuzPgfzUUNrGnWUyVWMDGzMYgQRwPDWTSVDFPrgsx3YfG9baDbHjAEdwaEhuFT",
  "key23": "4hiYt6SEXXGsufSs4dxjuTrwv6Q1Dso6Q5jLgfDgCoQLTnLkuzNGT6rwYS4q3oVGgKMAQpkeueeVi1eRSKBr67nM",
  "key24": "2Vez9zeiGHeNFB7LXLkP9P2857YNiqmkxoNxVAEyLkkSENzydS9BAc3JKUPa6tyS2kk8rvNCgrMbdJCMtAANKamc",
  "key25": "4pAH2EZwWF8Ae4tf7s3Pe2wPsV5p9HCZi3AQypiacTuhk1vyQrBFHWndXkq3gh44vNn3cVbKgPTvPtmsDCveXm2r",
  "key26": "33g7HF9VQ9HXNGSBNqKe5qB4Lp2rQENFfS8CcHc6vMLVWaWio1jSsGoXD8pwMpVVQw8BjDs2BtCUC93UMaXeGJdP",
  "key27": "3843YR2TEFxhMJRTpn6LT6uRU88Kr4KAm6bQSUHvhT6B1gk32XReXHb8jZhbtmNcBgeJc1fiQwkseonrrbLNVkhk",
  "key28": "WXWAKZPPEiWK7n8d2Yuog2qPBxnygPz4TWQjhET5A13hu1UN3jX7LVB9Gyg39bCuATT9NP58awi5tbMKJQApjww",
  "key29": "43ACU8FryoGhyCdmTHTgpFyVhWYZwCqCLjzJ6Pr11JbpUEGqNPik8r2BrciRL9pYPvJLcyeNrqg7wSujQEzfU9h9",
  "key30": "5d2de2igRDHUZxhcrLAVnL4xJ1LxuyYHKbULj9FKjx92YXgTRkeE6yoSFDJG1R9yuAH8BSF4vkpJNr6hgSoCrpzW",
  "key31": "2b8REiccskowjGdJUeg5Y5tRdu3cukPpZRmih3kC66GutFPxSCmVJstyF8jWY5R65i1BE4oB7zawZ2LkfdphbFkM",
  "key32": "5xFEMKLmFcvr1zeMZPMbHKucU6gEmJJp3YoZ34XiGopgRuegeXtVwqkLVPsLjoT9h258KrKMRuvPFLTNpwfUwAMX",
  "key33": "4JAfSDYMV7MXL2LZuMhr8jKf5MGVsdgXBNEMHjYRg56o431v795FseJkCJNvGCHFMzUjTDNsjaRLqPezAUtFHmk2",
  "key34": "V3NTkeZ4nKLA6b6XiWibNMTo1rBvsEvSy5fJbEWczpJmqE5g53oNHaXTLVQb3RQK72deUBBDRhYKTWD6v8T8tGb",
  "key35": "3RhfQtCEAqgNJm7LupP9huVXV2adSnpta8n2Vo7mTsxyc2zxBQyNMUgVG11KVP61ZdzVjs4FcxdSoWHzLDdqi6pp",
  "key36": "36VPLwRDdgkjMpijEtSCXNt1wDs34Agknx8HpxSniziiFteYefDKLJdei9Bfhodj6NgpQhfUhriZLE8uazFdqcGY",
  "key37": "2NTirnb4tkjE7xUo6K1d9PbAVafbPvpAa9qVu3f2J66ETh4GhHU25Rvp6ZVTegoz6ZV7UGezHFZAAR1jA9pxPj7k",
  "key38": "53SQkH2qtfPSpc8vbo6N2RrebinPrBQrWbAYD49dgXYCizZJRDEB6Yo3ige8NvPEEEsksyAvkoLwxoGmuc5xYsvM",
  "key39": "4T92QRPh5d1q2nafAu4W6HdGbYQnBkVbhpa5CkMfBqL3Wu4B9RNxqXW1th1QYrpuNKjjWumHXTccZiCucbAS9t8s",
  "key40": "2G8NEseuTFG2cGkKVGx5t5M1qHi8dza4wyPLHb3QmSfsBWCkPP3gy9oD5N67uVDtiai7LFnx5s4SV1ixTqX9Bz5e",
  "key41": "3gUyCwkFcjbXg9mtB3jvvXBrmyBoWMAF895hLzYoV9b5pUCQ8YcBU6PZmzuWTVAZnidBK9XS4pEUZTnEqHB1Emc6",
  "key42": "3yLsHzviAZQuYSWhTLwvKzJpRMo2t5GiFwJj8xHr8cAafMbVvZEH4ycSLBLSHKotz3jJZEwkEc9botMsAt98trNd",
  "key43": "4zJvrmnjP9XcFQPt2dFo1718RmVFU5ApDjdxgQti99AFRfuKMQyCUTfuXWXpiURMQCnyu4idHa7aNByx9uTSibXd",
  "key44": "3HALjPnFnGBeL7akMeARiHbxSK7uF15bwMNBjvCLZGdE1jz2CDvDF8UisZ1Kzx79nqdYP97w8hkyLDPLevGw8wGK"
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
