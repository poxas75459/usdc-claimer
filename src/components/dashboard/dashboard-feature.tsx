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
    "2RmiohJt3iPx3DBjzVgvWTRstsNpXGU7JARvqe8nzn31cd6xX3NV6Cg8A6PZJ5rLH1X7oAKNgm5xH37PUomkAgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WUwLRcGV4NihjB1WYWa7gB9kzH2RtTXN1YTU3yxryJFXR9CPjiZEuSU2tBDoowjoyG5KafbUCriq3DjczRgY6Tf",
  "key1": "2taXMYCUfcz56CWLLwbtXrWz5USVhbuSvgzhLKQhmQCgucV9GQHxAPSz5N8u8jHPpEGhNnGQVT3NNcEsb3LrDTxx",
  "key2": "4GW8eer3bWuEgJVLwM7YV5fo33SkfPt6iQXexVYsgeieFTsMjRXGYvWaod92wXwzjEXg8yV788RUoeU1cWv2QNgS",
  "key3": "2UGqPNt9Xn6s61LzZQdcWJeA5DfbHW14W6pSRnRsdEF6Gc4KZsMnQLTxw1xLZqioK9MNeE3Jromwt6kpUQ3Hx2r6",
  "key4": "onA3A8hPbkZnDfNLvWbCpcMTT5bYKNqb5815LQ6BJ7eJ8YFguQUTXLkWfQZLidUeBSqLRFoi6yaEKBUBM9Ea5Zo",
  "key5": "CkBcsREH36t4w7rKivC8XZqKqb2AFw5yeSG3Yxh48hPj17qdt2Z2xVEUTULTbMJBsZKottsgdA1SsqnrjSJMMtc",
  "key6": "4PcTZxXYRb52MuweYDJqp25ZDh4cRsm9EVjuNB7Zn6DYjCgVoGaurBC2u2cJnA6WoauhzWD7ZEhBVJxJkZToUDc5",
  "key7": "5S9V7GVobyDxho16qu7wDYvSNRNP95xMc8hAFkULBYZo4Lf3XNWfC6xMHXaFVwCkwDueU9zCLcoocZNeKdcYtBN",
  "key8": "3aeE1rZmBW5eNz8jKWjceDdZsaUUHxjraToVXigJ1zTezxFEiS58fCDDHmQeAQYomBpHt3mSihYV2bmwCLUuGX6",
  "key9": "5BtDFBADmpoSD62Qeb86WnVeCkJSpS6jfhMJqRjy3rNN9d3nHaEvdgisUCN5UHc9YKFSQX2B431e7s1Z6xzPR1Nt",
  "key10": "42pjDi3Vf3pdie2a5eML367SMVbBjAE1iQCCsMdcGw736tqYPCxPpe7mtmrbJ2ZzWvqmUL4pvY23VgHDtr1C1BwH",
  "key11": "4cQJYd8RvNtxSqi1MQRqiTXvbcMtALtboaXwGnV7gioHhgVeTZNDYmWZTdmFYdzte67m1aAexCKUKaPG8oPAQMgK",
  "key12": "2syPPVGz4XTo2YP6CUKmjERZgwxH9knSP5eByqT9j6Yc2DUFD4jcaQj8hY6P1xich4r7x87PRAiQmCotZQa5N6U6",
  "key13": "4GJ5xpGq8UaYmZwEXscpX8X5vWWPgcgg4UoZwCk5R1XQwc4kBHjmdN2TQsN1vd38StD65Ums5dwPcnmQZYctbQgB",
  "key14": "5uDABi27gmubWwfNokXSp4eEqWXVv5ygjGZPpygnPNgSrA9h1q7XScFbbFvpQvMEQhqpHVkwJjdNEpDijrmqEwk4",
  "key15": "3y7EzpG3BafJWbskTBCV1UPfFoi91dfP716XbCS99rXmTCVKXJyWbZT7k3BLEfeKNP2bXwiC7oVZud5Jg1AmTRWr",
  "key16": "624mjxV3WxhAZ8TjmQeqP6CfSr1YcDdxns7vQb4ZBKoyEesafgiioJLMrbKrrAQBFGod5bqT6qTBFqFRbdud8rRi",
  "key17": "5SiGLzEL5nDzkjXc7RAF44rHGUmgMJYbTi1DRW6KQodr5fqc4eMabYgrAiRsaBF5FZBZ5Ah8N7kPmRP4QxKSr2U5",
  "key18": "2ZYLfwisyPdAFysSvoh84CCfkiyeL12q7aK153aEAWwvHeoDnpcMDdLVRo8NHuexpwr7EQAd7LhMrZcweav36TJV",
  "key19": "HeHK4V2RNNPKcCzA6zqWqXBHrZZmkhFnyfzJNxopbdAPK3fPGXPo33LKER9WP3cJpxrfqLZxC2Di61XJcVzmhSJ",
  "key20": "4UYMrZdJ5wAHPZzSpGZDP7H9shKjPNsLvPrLsep6GSPnkfwYc7p4GwdiwHjuxLpMV9utZPvKuczWd5S7mkuGi64Q",
  "key21": "3kkP3npRYRVSCSS5uag57fEAHHvemRrkqzBamUpsrU7vojYv3rm3wBBN1TNtjERkZ5uiu8jFBVHwUxXQ4n4rvJRv",
  "key22": "33J2DyC9ivyrGTbFrAHShshZ8YMZxVxJpwMHaXd8mWCMkHDaLx3WsuxgPhtZFizUY8EppBA8mPoYqg3DUAHYmBPn",
  "key23": "QywjHdFvu5EXakQXyMpj6XQdRSxv3oo3QqiBS6TxzaiSJkdtuMBUADNqeVLBj2AKYEDVonr6g7DTbq5AJbqsjEt",
  "key24": "2uHW1wNbTTb8pQJdc6oUpB8aLVTR5S1ThjvmLqaGLC7ZG2LytFSkhXycFNK62meLQuDpczkWXqJRLsV3np4HyTmB",
  "key25": "5VRg58ng2F1qF3typoqG7FgShBbPpXadaFfQ7zkjmpHrqcXxUDRkKxjmJ3tvy9ToSGTiN6n5u9PQqdwCCZpdLNRw",
  "key26": "6anLpEbRFPwYjAcoZzxWohr4h17oRF5VEKzAWonZukchxEWghV7Hk5zWVU5A99Gf85PEkory3ahkwuKs4TVi1vJ",
  "key27": "5XDY3GjERkibjbZj6kmQA92c5eAG3nekKms5TVaPHsTXCtib2mSqh4jjkmMNLif44tjjJeqKBBMZFn6Z2JrLksvt",
  "key28": "dsMbZ2QdaQpFs4KaCb6KHMBKkNFYkxBcQwxRSVwyqYhr5LsSuggoYxRzHCxG6JYmjnjAtuNh8cszT9UM9enVrNN",
  "key29": "44Si5vtiBv14UtoN5YbMmTb5M6UA6jqPGN6iHTPiZQ9ujLxEUDvxgdESeL1dN3s4kQmeJJ7QaK3jWeSXQyCNz7Cq",
  "key30": "mKDoDoC3CmudegsUAnNdt3hkRYNc99hZQqTdLBGK5F8KWjLhoRLZ1Yfu4nuDWEbbjbQbvwgmPJLzpVsy3LUphZX",
  "key31": "qRgoAwoRCKuSJkcfJtrfeFVjhg4Fphh8LX1xF7RPcHq82xHBU2QKHY1w2JvuJvvxtqAuepEZPb4tZCCu9prgoHY",
  "key32": "2cieoNds1xB43o3Hh7pwUj2MuUyAGRZboeXxrXPwGbK21sRRg4Bkfc85M2iEt1dENNE9McPZuiAgFkARZtFskpWm",
  "key33": "4xNkKV6yeYgNuBr3o8fCr3kfe3DBUjZytcbxMCSyszUWkbsapmJbNCj9PbajQAbaJeZbHL7UBLJHraHyL6tPAvdP",
  "key34": "128MsmMKVnf7xmgmxmhr8FdRn5qwzYKaW6Mypjwr2cqoqdbGMLNnTPTvrgUBsEWN26ksLS4pkq99hub2puk5PFfy",
  "key35": "3Qwsz5TSHtEL8xLPKMiSMhLNs8i2455B8TMwTHYHoBfto4oij2xpe4XQXXch9yNVUyMzEDEXdLyQy4tESDL4b1oa",
  "key36": "63zvdGaH1HAYHNCRZDt4Xo4gnJ7yVLdGEiX66Ge4QfADGisnJSUKYXxzfWRhDb5tR1wFMpzBNmG232pY1cPgkz33",
  "key37": "aUtDzUukbDTWDLGavEto7pvh2Xa82V69Liu5tnSqcgMjJFTkzGy6DZEbWa72mJqcHpsNHtnuSpxHC6EPbSLtkjj",
  "key38": "2t6WaQ2HPjHoa5uipxJBCrYTtLWJt1y2KhVqRQWT6ZYghnS2SvcE1ny2Jp7PEPuJYJbtpdDhfWdgdhRV8HsyKmnE",
  "key39": "29EwGp7SaKLfTft8zrhw9bd6m4orJSPPoEdZHKgXZXfFkgg5t862ix16f842q62RGqyGS9sgeEbVFmrHVCb54zCF",
  "key40": "39CHQZBfxMyAeQEPX13xL5YymPQGBpmg8qG4EcqEQaHf7AFjygG8jobhxXEtHpcNSR5egQ8nQFXnbMtM1tzmssJV"
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
