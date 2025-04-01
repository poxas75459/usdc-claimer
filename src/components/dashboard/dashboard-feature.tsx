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
    "2UVrBHFRVgkNU2qb376vvL3QQHLUBr8tbVFDzzfX5Q9AdHSrFJ3jxYiy7B96eYthzExNJBzkoTVbPdq9nXtK9mLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yb98FDLDtHAeuJvVre5BCRAt2UJwVBZqJod17yVuNnj9i14WLjDaMf6VvHzjsCNPjrnWmZujpz9KUtKiQLWkhaa",
  "key1": "5tzYambJH1uGVNzmoQcsX8M4fPKCNkpDzYUBCwY9Pct1FndGwP4QEj5v7Po3AgLRi2DXam7t3C2rCQJnUgisicuD",
  "key2": "4JSPAS5M2Zu5ryqoBjfPzFZ7LccjX7WJh9LYiAiGmkitnJwgpin3at96ySrtWEq3DRMFk1L6fPfeU8fwZh3HVpu5",
  "key3": "2vEHPNrFAuANYKYvaUppPid7hG5Vfyi6XGQRViteCUet3yVKh8wcDcjA7fvdt2JwNeg44vvGiBWJF2PZnnAqFNaM",
  "key4": "2pCmdpEDP9zFJp5gfT6AdsjS3g7xt1WahnhJgopjM4xAcM2DZj32w9tADs4QQW6Tpeg6GfiLNCWpK35WCRqyfXhV",
  "key5": "3CToTPUPHhtYuUtkuuCTMrhbFYntCzNS9mpYBxbB1FXWVnW5N11ttxUSyKu8KZ7oiCHC4feac1dTExpSWZTV13vz",
  "key6": "2xduSnCqy27m2qpAMhLo8ryHd12N5fJ2wYjox15WiCrBAL7yvzg7zYvjZwZ2m7G1hASqiq7PzCqV6K6VQfXjBzny",
  "key7": "4qQqfpiNKAkh1m6qSyNVpxYcFieQRJnfod3WGVGVcToGvX7NbZuxikvwJTQQRqoz7moxYZCj4qHuwVBvKTHpuEnn",
  "key8": "41bFux7nrQXeW8enzfM2prnDTfn29X9GFTQveko566a8eBqdqPWbmjeFjCSHBomKEFuUQJvPsh4yJuVjUZ3Ro3xj",
  "key9": "3khvGzsxqHJ9QjSw49EnsjTRr3XndETgU9FkAax6hyG1A9Yh9F1fDdoHCKpQbDPJ2uSgcgMSEPovEptaF4jsdoRY",
  "key10": "gUcGgXZABzorune3vetmPVWxcZuVk14Qk4NziSLtXUSbEn5HnQe7yMnPeTDUMGNcxwtNktxrAGifVRpLcpLYp9k",
  "key11": "4FSSZsu1QPMG4QZhfGM49XRxGHWg2VQhk3XF27jVumwr39ySQeHAL5ERYj2tzLEgwqNaDDKwQv73mt5we4imDCYk",
  "key12": "5wx2DJKFzGbMxVJJqWhPUXaNdyfoD1XVShBmj1Y5cUsqBCuWvLhUktB41qe7Gd9TupWM76htnTg9Fx1P5jf2Q98t",
  "key13": "2XGfANg3YFEJzwQdBJP7ZWDinB7JwZo4hZLDLYxaabwyXzibMQ7YCfJRhA1y5cKxt5BXdTYbQPUwMcvc6f8XQa11",
  "key14": "3bPZGmBZMqvdGLhKSqq1QMAzJ55fjJHRVqtSdNWrMbWKjaKChg4X4biK2iF74698Hf8wTPRPhuZjqBQGiJh1bs8w",
  "key15": "64Waird8CGhRdMSxqxwmGBJJ5hnCrPBS7G9fxaLwghsB2qH3XPMdeAd3RgjXCX9rU1ajEDfqYzumBsLAZCtdHdyi",
  "key16": "3GBQW1uQanoXyeiR35PNSicqaoFPjjA8F6CLa9bqDmqP4TPjzp5Rze965KR5u3id2P4etfg8KPgHPtU6Lf8N8URa",
  "key17": "4wxFgQeLAozfPpx7kMpyBavsVVbC91dPeL8ndtYncH22q4Ywor7H8pEWRLuPmuWLxr2Gg7fJCH9wwZnkqWRtwnVo",
  "key18": "3RRcHnsEsEuQyYKJA9Ar8x334xcD8Ngur7qM1kQxheWN8To6JmQMMC5uXnWqmmWSmz33bUQXQyJjHifpfGVjGZmV",
  "key19": "21KAjXGK3PR7WNEihSQGcUeGH5sWGwoYZf4ABAbDJzwXNMobWjY9Cug6UcGujX88ChU3e8T2JwuDf44pe3ZbTmqr",
  "key20": "5XbcRTVTRgD4rHcB1DY41w1KhM65ukgpkBCvrCmsgkEZE1C5e3eWPjNzGFWUZQKW6FGc6PcPeVEF9hezZYvyoYh",
  "key21": "3MKR2YLUMWBiQSXM68mZxQ5uGj379qm6mM4iK6e3teiRTsLaLyt9zEpWePNFuhEjDMZZx54iw6UdZu8pgz8pGAM6",
  "key22": "22tCtvoEMjj5YJZmHNrTZixjccuaCa1X9tcfwRNSr6FY77D4C5BTzEJBkx7W2ssHjYDaPCcTEV4jqaqyU35d7RkC",
  "key23": "3NZXWDirmxZTq7rJNcC5BahFSMgdaWXSvc9ucfCwuS19S7wL81f7myiPcqCDUbGzTFUWvNjLCbAYrKRZRCNsvUzJ",
  "key24": "3BPcvSRerpvmH48fLYgoqYe5knwonESWQ1XnJ1XjkZj7JfVrKjN4qBMJ4LnHXD8GcZssVJEB4wJH1w2CYaQHjo5A",
  "key25": "5sAzd19TDiwy6B65ZMWpubCELSj6FzpWX2nnbPkcSLoJv3yfsHrwZwgoK8pDcLp8Hez7SgXMotXe3CkQVd6RLabx",
  "key26": "k1NyKhuCmWCZ3RA8H4qCf2TwGBFX8yvoXDeAuzuFYfoLqGbxaDcgaiNcpwHPuSuSCYFWCWnBENJwegtKAfDuWSs",
  "key27": "2z42vKHb6jQDZCEDSHnwsuHHqXwyGUfEaa6hSyAB6YbaMSoMH1QVKJV7DGJwHa2GFq95GX61H6CJbXQVYZXM5GBi",
  "key28": "4cPiaeyEM9MjXeb6HK6vdNT1GCHXoyZZQxk4kH8dKqPsodAnZpAu1aWgbiZPN8PUrMptd6ykg3z8fdK2ivPCUENx",
  "key29": "5YEATfAAuA2WcoDMDkV1EW7StdBzSwyFTfk1KUiahom7TnFTP58S6mntA6X4SkAjqprZdwVKXsFh5Eba7n91snA1",
  "key30": "3BcgwCwJEUzFRmL1tBWnJYZWSpK2oRubG57Btm5mfZE9VNtjdr9V7W5s8WfzZCV6sErdsfUefatxm5JXDRzYPf6d",
  "key31": "5cfwVDJjQWDcfj2EaCCHjxnhrpsfySf5MVkJnB7npNPr9jFbC5tbEa6wk7nKZ4E5tTncCDRr5EQm6qEC7PdudU5C",
  "key32": "3ufGHDdcc1pdptUU9w6TPttviQBc78vNirtSwHXE4fmfkr7mJE3b39wcVhYQVCR3th2bsFxB1to6m2LWxqLKbGKr",
  "key33": "uLeUJM3NKyVw6rzeKdBWLufxTibyNHAvPVnnT3xgkPn8K9JsE9EPQJZRbjWRkX5xu7BdoFRFVtcpSfnb6A9R88Q",
  "key34": "zgcfi1mbX9f7Q411YvGT1xbsf5NGgU1g5ZwBRseU7VnLXEx8uUS69UyQyXEVHxcn2x1FyM6Puh7gjN43GdeMBVu",
  "key35": "3C1AeJj1xSiVcHPCzXRsxeoWLYu6Uw2itRCbXu371opJLq4KcntbsWroP6VrmTDEhbwxvHBLS6BPFJbXsvdRVUWY",
  "key36": "5LwzystFr1nTpHpz2vync2bZd2eE9G26zChqPKbxjNgxYHYqwtSarmP3zH1nKuSpgHdjzzoiVAhakLP1BtsDPbtX",
  "key37": "54Sp5FJEk4PM9k6L8DQHUfo862Q4L2koXukTb22C6DfWGSNzk4agbMXyCaoGMaYUVV8q8do6TwdibaZ7VRd6mKML",
  "key38": "4zRv9UCbpGb7F5FVmkLkY4PUxY4NUTzGkKZ1159f8wkFS2Wqj4MYAnwiWpuVqsmgEZ6NceDug2WbYsKnBzn31qmH",
  "key39": "4TcwfR3zgDEv4uxZ3x6wRYNKAWsxWqGVSNTiWZmq8c3Kuov8fvvsKGiaAQ1YqFvTmU3rwCePShor6uNAAN7DGAhT",
  "key40": "45FpKWyhbEYJuv4S9NK8mW9urswkPo75aMunJnr8KTC4YgjMjDip6urYaVuHQdSDgiTpeQay4tRegGQTk2qSWJbY",
  "key41": "53qs1Wu3TaKBkRzF8mDead8Z3drayZJauhoBepj2xAY2gjCmrM84fa8Gwt7PYzzSBQQgsXzgLXfczPLKeJUR17q4"
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
