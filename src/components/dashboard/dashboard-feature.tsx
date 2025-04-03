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
    "4vyqeZx2W68wU4HBLgSrvU4DPtiMXteiCRisxhTEzoXafVoXH8M9AkkoiYRqZKfhs8Hecxzs9Q4qAmtzE2khAVQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645mAqsQjAUDwZxzYENg5Qb4i7t3KfY4YynEvUYG7eApjU2K5bL4LStGkQW4ZWoyDChoKXzLEoaG7tdasCHz9cz5",
  "key1": "4hJDWHQGWx3LRmMUGDhGg3ns2xRCaNVwinxewbcZZHp79XwA4JLn9hajdWtQM8zdKpJ3uiQGZAoStYp7fi6sngmq",
  "key2": "2nogdfgmDjyX36xtFu35wEmwFf2mRz4MonkmB2wrA2wCMVxRNXY4eeqF5Mr9AU4f8Q2vrTSGD2tzQS1wS3YZJW2g",
  "key3": "27248KLR4pz3k6P7zTfAja61KUfKjs3aqtwfbfxeCCtMZBNPRfH7ZYEbKKbqiXxapNxyddivAPP3HMRsXGXnYs9b",
  "key4": "3jN4JdencdQHUJim6K52TUm7tbHk1UGpUZ7yphEZP8vviWbxCvkbfb9eMUXKVc5zCfL2y8VnpsVE9BfR4guCLSZt",
  "key5": "5CTT7x7e34GMNigyuZCbTDXy5ft26aDTcmsZzG79Keu9cNF14iKKvi55rBGoxBboduAmKoCnBMaK2uUrBa9jkR2e",
  "key6": "2bz9YdkZCk3jrYzpfZ3BphKd4HFnWmUzJxGSpmvJT9zqtaao9XEKCgcnCd5F6uB2GZNtuEcqV4hbhPtnyEphvvt5",
  "key7": "4XH7sEioctqq8wUb6uuXZCnxQ2nadv4AZ8JK5KusCSXMVZVT8EqnDFa5dpVsc9ceG2QZ3vjUTX5vfuSsikSm3QS8",
  "key8": "UDSUFe5oqDkh4PoPQ3qCp34yPSCz42FGstTtPFSQK5oct3zPSDERfEpXv7MrEWRsbQzq6cSadULQ7yye9DyExsi",
  "key9": "2X3k13EnA3YsCe86HWRV6Wr6JZsFjCsLqDx1SdQ9q8HJKbUP7Y6P1dGrMB6hig4WLrX3zXeXfBxWrmfFN4UpRRnd",
  "key10": "3GY1ThZedsKRpr7JLjABxhho2rJdWJ84ggFP4YFBFhmmvbGxpx29yEWQQyjjQMbG1zv11WBXHaEtxRQquqqWKvm6",
  "key11": "3dj6wdWBuof4deGRQv8mW86tUTrSkWbkpKM6KAzs2JmaVLyWQCvBoewUUQw46gRfm1aFar9ipedH2V3tWzYXxMP4",
  "key12": "2jR9ss84MWqvMadKBJcaAto2yVDAdszroZ7wSnb7mUYpW1dcqRWK39dDmzzcZ1SeA7e8pNXuYWDEnixk4WzDB64h",
  "key13": "4AKjbMvQqudmSGMdCytxTwaoRmAE9ae9HLYVLrPgNVpdho4Xopzm88Yei2ns3Qy7CHoeLyvXRUZPQEVeKHx89CWd",
  "key14": "428bfQ2YXmtK1FRLvyoqPQVkH7rEntEBFCMoe9Bv1AZ7pNjgG8AsuABBoyik1wGRVNNwsxVi22tL8V4scndo5LbD",
  "key15": "5cmzESLouMacqZYPtPPvC4eoLnbKMmK78eCGSXpX2SMqtfb2cbk8dgwuRsAWJJAFb63pvgPnJ5S1HKgddRVXBP54",
  "key16": "5a497YYbMZKsJ2KaoroCKfyVE7aBijTsfETgbTjCuwVy3RQnCgY7xgC931L4nPasHctdKmVNN5s77sbdCDQkY4Ga",
  "key17": "MZEcvU8p75SKkyjpuWdtR8hrWg33tBJM1pk1pAdK5GRj24g55SuqAcnLwH9DEVNSGQvxXikmxKtS8W62XxK5BBt",
  "key18": "2qs8mg1X37rJ5gyzGigcFDsH5b6WZeP1vymcbMHriKS8N8PjLYau8inMYMpuJF1zYKkNj9sGx4ECq5y3sxaqvckU",
  "key19": "b3mKVvxRR9vyPTtWdKm9xHuaBF2UnKURnRkLyNcyDqxoMzXk5euM5PCBnYb1B42qnBxgXecCEQFPAqte67yhvMB",
  "key20": "5aMo9xtdnwaE4ggc99u37yuRTjp6uCq6GX2yqRpZo4pD88Rb2j6cfvCf4vZRyVTLZJCvYSJ3DBWmKWKr9mDFQ3nW",
  "key21": "4J3Wnyi4CuScUUecyv5sEQSZL7bV4K1zhXnCavM66RCr4mqtoTydAQeYia3BNWNqwp9SSvzSJJUbH5RcfFzBpSuL",
  "key22": "27xEj3t3sBiCwraMwsEwZVVEGVbYRAZFwrr4zoHULEvNPrgPonBRDVHGaqpB3eKMRAnU2fTrsmxNQzrLLestA3tP",
  "key23": "4VvXWWUMhcPT7okS74xPcEbCrUwDjcToXwrJgYLYpSNbjK1rX1E9ZSFC9BG5Xm9wSMYYcptdxrszpK8ihs96t5V8",
  "key24": "4YSc4HgJQXRuiHUu3Kibw1WG5wEQ9D5yyySDWobEDXYq3i9oJLZd8SsTDhKxBg4nx2spazS7jnpETwGWG8AVz7Vd",
  "key25": "31vyFoJgHowup7fJcdZJQVazKcxALSkwqNTfkTE15WK8tF7cdPnGDukEBm1246tETV8D3rv5vyavyiD5hCx6Lpd7",
  "key26": "BAUyMNRouTVPsXhNzfPbSFJmj8JNER1fcDWcnWuGyAW2uF6ZPQzjRQgcpFCbkAGM1FjqbepAQEjTaQBdSH1SQWY",
  "key27": "cWXx48Ko1F9RgGgQs2ESaD7u1ibTkjbcG7Kk2X6idy1norxdkSosCDzFV9Dv8cTriWbXcszhhRtBgrs8TxAMxx4",
  "key28": "2fUTDs9dJ3Suf47GeH3cPxaQYRAVgxgLe9NXtJLxDmhfM6HNtvQnyG8a9vWeWsAqrF65jUa8FyKy6RFfHJRJ1bKx",
  "key29": "5vdHaEh84v4ovp5ZBqwviYD6Yj4uQTzXeagACjbd96XXTz3b2hwLoV3JFvKa8nmPqSu8h67B9KHmkd6RchgSG4eB",
  "key30": "5QDJMbNixmrHZJrnbG5AVQ5Fa2wfT92AYQMAhLa1aPjXmRrLnjGJmprPTDHcPt1szt6Eq3sswbucfPfKL1VNDYCG",
  "key31": "5PozQ5k5ys7EAqaEyNzdB9C3KYr6LYAD5tgoHzbqKvZpRg6afX9MdrsBJFF4SnMYa4MdDarBwK1CbLAwPgbuMfKp",
  "key32": "4cvWqbtznrLAfBpJwqKFWXvGguGTdcGGXQnzf4YY79guQCmCEWZdEQ9RjbhCwDS55w34mh4ryDdaDe8KPVPN41aK",
  "key33": "2csQqA1rhspafHTMTjG2kYbhQraUEUeA317ZDRp3WrS2y2Pj8KjQFqZp9n7Nnh2qp48KyJsRv75jJmGGX71gRcPv",
  "key34": "4hHjygpHpEa782fwh1fPfueXM5rXjvWFGRWXuw6eSvB2SBVodG3Cf9axmqU9jqzYqyq5r5YU4LZfyx3iwA7wpcGF",
  "key35": "62TStJp9UBy1mTkuUsJAjbUyv8bjQnosxSAtitZF8yG4ofoggwYR4UpJAZZRED3MBByruDrq2Y96gKWy8tQXEUJK",
  "key36": "3R5hDA8DD2V7oGkSz5mVRixVWcbtXgfPPj8f5qdGAvaMuSPDzPFcntJgtzLZwSHpajYsvtPvT5ZDyzvZzSmAVgPN"
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
