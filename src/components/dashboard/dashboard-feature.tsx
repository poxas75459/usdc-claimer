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
    "29BczrsGJA1msAacceCYTF2DWs8tncTifj314nEkRysBRKt61JY24QB2gGrfgTAmtqZSfqMH51Cz56dRHKorKhme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scmfvYAfE9Sp9663gddh7fTR4NzMNNgbBTjSQQdxtwbDrkqwv62NdNJUHfc3Uw2nNvYwVXQhvMPnnPHLkT5HC4s",
  "key1": "5nAk56VZEDgEkUfm81qwF7HRjQUAZDcEbWiwQ3qKhvRPSz3usCcAGDREp6u3USgcwzNQpzys4SbSZ5UmpJw9C2tK",
  "key2": "MvLLqRHtHn7BYLQ6eoMfyPpqzYK4n78sgd9dnMHcVRo7fAhM1Y8LE6LdTPckAg5HUt2CmiDJTebmk7DUGPJRTVk",
  "key3": "4TAMCgyeoMAjvs4PTAkno4zVnAxQa4B6LqMsDozeiXfi8dkbY3VGerD71UL6WzhrtUMzDdaA13EtiRFcGQbp1e5a",
  "key4": "4jrprnkrm6NvMhKnByn4ZmZaBP5Jix5qST1Ww38i8c7cWc3B4p1xuahqZNSo28ELiysrbqACAHrgaVYqPesyXtmt",
  "key5": "QXP4oDWeCM5onnB4jRruks9w2m4g7iYEFf9uM48gtxhS8CVDguU2U3VkufngRcepxgMdQkgTiX2Dk3Kyku4DGTz",
  "key6": "5HW1TSwSrpZ7MRTEtRufEcVukw3gZkU8FX5HToQAeNANmq4hpsGgGyjRN3p3W1bomdP2r62GFV7zfse5ygTV943u",
  "key7": "4w8KKQD5dtQt73ha3gwoq84WjegbtTTWx9Mm62z1NPyRUXdh27QsTbX6wCaebEG2uJyQ3njCuzS2hiN2qphBqM57",
  "key8": "2YEsE2Af67oRD9oHtxnHg2P5pbqbDTfGY4NiKao1vrCiomZtQ7AC6KAKyjGxzM7Z1648oT4KNj5MVcz2jL6y4KcZ",
  "key9": "5FNTD9Ltq7fRXNLHSNNNwgZCH2iDBdWngNNnUKzJhN9HF5whHFruKRXcUk3ErCUmkkdQWhHSRZYiCSeH6jVSJpTc",
  "key10": "4nVbK12wNxT7pHcM1dXiChsm7khyHAgmdGWVrTNmAtnGKPUA6WFq6zZ4NapG21iHuPjxg3DSNw19qahAjZbXMJGN",
  "key11": "xMw5ow9ekcUuEV8wyjAtYT3fVchp8HCirHzPdqTwPqvbFTiVcubCrh5Q3zafLiAmYZJftk74vQEgxpRJYPk2DKF",
  "key12": "5bimsJzDZ5pioRhQTZDV3VCnee2oXfaxibk3pgigm5tMcjJYWXdKuXS66cWozQqtMzwGkJUqqyq1mWMCrtMCf6ss",
  "key13": "5XQy7Hf3RM88GC8dr7QGsHTkw67cqn3wDNSz38642WZX4DjLTf6sJbPRaaP3Yvgc9KB6Je3ep2q1NoVjTZMfD5Xx",
  "key14": "5WCfYy5n9LrMgwhUvf5XQkS6PtZxKemNTtDw6yifpj9f6GNp2SRw45f1qyDxyhawFjgT7Rn7hVm3dBNopLkdcbaU",
  "key15": "2SD1wCmoN6YxNdP2EYruDtaGcm55DbR8ygehiNqUnmRTg5m882BCTTuVK5m6BeNJtPvwGoMXocipZ95aehP6Neug",
  "key16": "4PY4eJFpvd88xdqAG8N5ntcfXSDq3nqC1BNMLY9JHnZgCbzM8cu5WYfmt1PMhCNd5DJayiBR1YhDttZPrfowP8mE",
  "key17": "4QtQxozwHBDaCrBY9mJqCLymdkgh8JUgCWuZi6uqbJ1TEwRZXs3nyhzaYNDXWWL8eVJsfxqwjeXtmzNeAyo8JGui",
  "key18": "67MrVixJpGZm7aiyXYVo2y2DxiQwos4gcFcPu8j89gPvwvRtgTpu1wsdvMFkW7kgbrJGAyWUC4ppDvaYA3TviSTr",
  "key19": "5tP31Mn2VYky1hgo1DYvvfQmXM3izRrsiAW8CdvX1z7USu2SR8dhooLjC4GHH4gHuzTaAgciMw4Wfw1D4fgPpaDV",
  "key20": "2pSMkk2HBFgGQaEckk2KHrYAJc8WoNJKmAUfQYbrvQdBn7tnuxTFsewBxcXXDbte72Gre3YFqEUAQcXcAA3L8ixU",
  "key21": "2Ct64qy4QQLHk2YPdc8kGufELUXoMeVEPdT12WBiW2szXY6jzfxUHaisuBLps3VHSGkvPbFpi7E2baNurFRbC6yn",
  "key22": "3HT6tQ8yryShtgqbicqxapsg4fiukk6y1QbQmDGjfUET58Kzeh1LtQvzWLnbne3kf8g3W22CSXwqMmYcp39HyJSq",
  "key23": "42vm69LCLSpFfajVstfWWpVkam61s5nbZE3uPNqKhaSgkA8HXK6nhCaeRrLov2mx2Wj2DdXYwZdRnWepfNTVcNUc",
  "key24": "2M1dbF5vsvnAE56FGQpUB5za8zgQrdCReQF1cEJN5rqxBTVU9oA3xv84CcLZx9zChWsHG2LszxJAXWNKX54kCZ8K",
  "key25": "imEcZ9wz1spJDs9huYfDqhqRcTgUDwLY7oebXKWTx2zvLKB9ek1PH53yntThKjJc4W5AL2C1KUTGsrSzyyaJ9j9",
  "key26": "4YrLoNwwAkbmuxnxHesxV3xTm5aUWSLHAQbY6bSFz5WRTkjQXnzpSWykF7mK7s3QJq42Yp391CsnrKt1EVkbEdj3",
  "key27": "4NpnXgHcWpCxf3mVtHJSakJzaUwu4rGrmP3BpVKkc51vWxinK1qSUxDc4syqopK6rdvwtZQfWtdTUqx6X6gACK31",
  "key28": "4MPGYEKRKYWra2aRQHbvc7PxgVTQJkVyZDza6fJtsYYzhueZDwEBuSeiehySrb292Z9HU2NsVuxMdHMLpPRLwfeX",
  "key29": "9Ltys2HjjCfV7YBpC3UtDfrhTpKNFMB4Td54tLgUkH9dAi9uAQncUhGrnkE94DyKpMBS7E3gpBvR5JPgnQQgGxW",
  "key30": "5qCCbAhiip4tNtk46yU4aWAVVGtPaXuK7xf2RaZhxkzrzPcBFNujZjtSvSYAL1LPwiwWMqEGHrqikUP7obmiu4KB",
  "key31": "3kCbkARtxtkzG6GPQzU9eaXYw5RA1yDn9FE2q8ejR4RoXaLfWr77Wiov8Jh9YeY6WbCKnAiTWBHS43FsdH2TYPHV",
  "key32": "3jnwgnaBSkoC5p713nTY5PKDGD6T2AAEKihhrDbHwzFC8jjRM3xQQ5c7Wqab1FCaozmEiaiwQkJt2oJJffJZGMPv",
  "key33": "oxtD5gbbZQf1QMnqEWTZ2vuWqtHNG8B46kqYv6tcGFahFATz6XUfhLs9Tok4j1EF1yTBpZ8EQdPW6X4cx1ypJpT",
  "key34": "3ZZYF4X41Smv5TELSPpKbDh96STBLCqMST8S4YwAWHZKQWp3ngqtaRNn5j4gAVwZAv66YRRhtf4jnYXekwhKHrGq",
  "key35": "3F124sn5m6p6zaw6gZcDM9mF9Yz9oMMGN7pCnamUxXfjWa97gjECPTCx8iQbkzECXof7aakjVoEjWH1nXZrejymd",
  "key36": "4RCwL3hhUT6Wj4FWmDk5FG5siECxhEaz7GCPbas3AwsCVmP18xRnUecaCwq4QyJobjGRzS29LGTV4ub2p6Yhm1yh",
  "key37": "4Ske5PcUakbzKPgLq1faK4VXJ9UNPUrYLcT7wS2FQS3eG21wZU5fRuZibt1juDtZb2ydoxAg6q2BfytwV1bDCJ3H",
  "key38": "3WoecwC9HSfajwpuWKEsL6CFvCwt6P7MBsEo4WYHwHHzC6uizVZFF1A2imGrVhpbBRMtCXaLoXBNZQyo9TRW3BAM",
  "key39": "TgcrR4ZU6pLhpgaSiEWZvRR1ZEnE1BA38ocpuneWdxsgo681xMTx8YM9YnJxbziULszwXR1Fa8AtWtF9KmPqaNX",
  "key40": "NM7BKefPmUtKdvyEqWcUzAHjKfBVgMMKdD1X2MMNgBHdsott76F5fMNKYNXu24d4Jh9gAYw5uoZKEniQf2ynFaV",
  "key41": "5CLRjWtBWCnqBBGXQ8PCtDCVGga3tRAGHXMoR9LkL6HynwD1AFux5RviJd2SbtQdnnvZutyqoEhkU24i5M1FuveR",
  "key42": "5HHCoFPzWcGLL8Y5x6abpPZvGqJepB3CyfY4kqsErEJY5B12r2QXfvRVZRUXBazkha5dx6YKGCf2a4zTUMFmXQ9C",
  "key43": "5Aw1xJyATWYBZat7wDB4LJzQs3pSVwenAF8tsVb1nfmG2mFL2c5qdhqEpVwDjAxfQrHRLnYHP6eU25c3TLCE3rxX",
  "key44": "hjkAPLAgGmQEyGu821QFNXFYsbcVq6RgUHaskKG4TUtgfG8Uvn2GXccb8jr4bi3rsPyLvicbL2TBP3BpCUQWoPm",
  "key45": "22Kq832YheupGqLESQcn1zBspkaBGL9uaYsjoGajVn6cbJ2FYPyufTbqfdvXsMq6obhMv6RVXQVar7UotfKXbf8b"
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
