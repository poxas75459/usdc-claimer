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
    "26tZd9qQ1KW4Twnn2X17DZ2jdaiSZKtA2zg228hHM77zLKc37UW4SDddWEGmy8EqsegC5PpMqESS4TnuZ2dkbp6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DEXJGESi28bVh8EvQasjjsCsKDiMDTYmMqYJttS9isjYHmE7HeuLXrQXgQktFtcspYpwfkcCEjkRAYe5XxciA1i",
  "key1": "8dwFJVT1HpiBPMDNRFTcxvV2HzMUws8nL5CjywtRqw4YXR5psvh1A57hk9WEWtA5CgEX9d1H3R49TLBH4AbyLno",
  "key2": "5k6wAQC7rtGwLcUwvJXAerDXLm71efMEPHcTjo8Vg5aeSW75HXV5iDsZaa6TTEeJP4QjU9Qi4msX7qaRMekq89jA",
  "key3": "4CS7n8zpg1pwRGVHj7j3KT6vsBpKWkypzKUYmD4WkaCuDeG8wUp1Wj9jym8dGzWLAr35gWvXB9ZBbn3KpGWG9rCq",
  "key4": "5d3AMBh7xCHZvxHAUV2rx9qg2ojikPMrK3AB9d65bxoGPBnzTd2JrVr2JiSprdD6fgnoyHYPakSqrsmdnQW54vRA",
  "key5": "2RR9ELpLUKhQuBzVMqBP6N8utk9EshC8U2M2cBqHuc1zrVspR5rDPGiJekvQ2TtbcU2Rp8aPMF4CdiSTEVNBiPXT",
  "key6": "4NUdUQXJ2HEvqZdjgouVFiJQityBvhQVKwWzkQermHng4qa6LVAKfu8pYqPfSNgFHBS32HVsZNYGPopyeaXVx3rK",
  "key7": "RnSz5DoNekQwtPrKykJewDyCeedNCVCEWQkRjuyza5hw4Bo1CquLk1BbDGv7PVxtgeBK648oxxmJQVZVHvc5L1t",
  "key8": "2YyNPp5kpDAwXg6s9qUJuuAuxf2Siy4aVSi9qjyNNWYGDesn1gGfmcibC3HuYsfb7n8925FvizMnzwR3FG7SxHWc",
  "key9": "vr9qCogwDTW2rGP259G9AnRWKFwqnC8VhpnbNV6Dh3mCbBPReMvfwwviPHGovpZws8zG6rbq6R96CEQPtW35fBD",
  "key10": "5UvJUW3uUgjTByw1BTS5t4A81SvsYsy8hwyQmR4r8FW3Q8bMkA7mgHS2pqVpSbdpY9TzyuGSRtiEkpNa4ZTducFN",
  "key11": "5cBZeDifqaFVQmzLA2GPhF4Vu6tXt1oJJuU4FQDtP4Ssji92rQ92iCEvio72KZiAHRXLsyegknsasdzVitbLx2Pg",
  "key12": "5A4YqkbYRzgUpStweqsYYMJg8nFR6X2DibCj5zGkQRTrJT7fPHnhkFs64S35Vz1pD66UbYVAgiZZxsUPRTAit3aA",
  "key13": "3FNduWnwF1gzJEwKGDVEyMjNnAyyg169bGk3FKcRJFUgNcX7XAXouwX3VDRfCVTN2wKCft8StGjxsfLYHZuoGv2E",
  "key14": "dnhGHDfcWcQB4R6ScPSGoCdtfb7n3NqWRKyNck3NPpw5W5H5e8R4nbQQGgnk9KcVWCgJNtB7HDH95esyQkhAcyd",
  "key15": "4qxntXmF1pZHngrQ2bV8d8x6anPdPPXQUMftgKvAqD4wTAL1ghJZGeQ45j1SYVNJEgwpSFCEnFh4WgU5wkLcF2zr",
  "key16": "4xvHg4Sg3KfEgH6RZ9FSHw4udJf5JifMP1a6XpVsAX1UB6nxGEz1DX3p5hBPsmDBYkrhx1mpaWPENeZ2oK8B2gK8",
  "key17": "3StLigP9WNCrNcPbBrzGc815nmtwrEkqnUNsQa4VY8rbRQN4yQKkbvdRGnTn2xJ5fXKMVYkDz6934RPaXHddvpHV",
  "key18": "25TTShtNU9rp12JzfWWjJgU2RxRkjFwAYfwtsQ1hD2kLQaQUc8LubsQBGAdvJbAHS16FdbEZXL9qRKdHHCVXkZb3",
  "key19": "3nztPCSrGpUJL3FFEWfLGshS3r2t67DhukDXyZ2qhLNhgp8dqCiiUB2rzQZKyQuUYtGCYj42cUvThfeAUxiNqtY3",
  "key20": "3C7TZuMVKyM1y1ABCQQdv1MhEFj2XXghs8AMefikrSMtYwdqyPZAT6U2fDUVRprRqQtHQpnpHt7fEbDEodEN5FTb",
  "key21": "4DaGsii6zwxBWbmopBsX5peizXba1xLMiJRR7M2DKkw9ZiBUacmnELPk6U5mTymrRVkgpZdrsUQRfTPhDjXEeAzR",
  "key22": "5vzCeXj5cGpbRmK5Xz7x5iPdo6n8wPt7wx4sVXaAtU1PLQP5jTV2tDAvF6Qkgou3BFgrx43U8RBkZ2yyHXWcxnTS",
  "key23": "2cCvm3TcgbWn9pEqa8UEUbT5bUK9jmRhdJWhgE4ykTn7g4igJoozPMbjXGK2ceaLU3sFNh3VJ32utndaq1E5LCUA",
  "key24": "MMgiPr2x7mCiCfCdwcanB7jufubpV5692xaidWQNy7bRDmShzDFR8SPh6eJPPTVQGA394rTpBriUkRTwQ3HUQJS",
  "key25": "5Kuj9A98BfeXMGUdYMDpvDMuGem1cRHYaxq5pLz2J7ZcUeYxq2tXHc7jDrmZTQAumMH48DWxfsTGLW2oqtnWAvMW",
  "key26": "2GofyumS8rqJgeRGhZo488MCUHfvsK3iToqK1qyuGfrwg3iwP4vbWboHGmrK2DSeQ5LSDuSHR6DsNUcdJK1usdux",
  "key27": "pXwhF41vRUfShHGp26CYv1L86uco5Y37ef2NShPHuyaTp99Dd2ZnFzdWxjze5behx5uWECqhco2VFxXg1tFHiV2",
  "key28": "3orZ11Dba7sF67GTPzAmv9vLswg6zVuAnN39jAeMN75aLMLyZBLZabZ1rg8pdr5rGZB9ap2UhS6A8WVK5PQoPHBf",
  "key29": "2UXnKnwModHXUYQq4vke88AafUNwQ9bZ2XBqeRThgRUJATpvwvPjF5nmHHF52ATvFEQtGokn411gWEZ4zA3aqvqU",
  "key30": "4bGQF3F5rkFpxMMyYHDg2gAsDikZssvSh9B8pKiRoLTAg9mrBon32zPTX44NkeJkMmzvHcRBTxYj4VETgQ7ho2aL",
  "key31": "G9nDv2G8PsxeMQJKCsJRYuJxJ1cSKLPopDkvTGYsaHLsB6yfWBMa5tnZNubrNesXta4AEwvC95cq67bJsRPfokm",
  "key32": "2B7nSmAPofSAQ7HXU3HjWHSyFYQLmK9KQ9wmmVrD245eGKa5psbdpDM7TCMPSqPCwty3sXYZ9EJPYvqM4ZmC7uCR",
  "key33": "2AkoBhkhiMgHHTn5vsc989iXWw9oGMLy8U6hvYpebQCUb6uNAq1qPQNgMWfzUGr1Dy8fciPCK98sb6vXJDzBu5sy",
  "key34": "5fLJBzcheeS7HBGp3sRMex2Vb5N6ULNTcEsLGZQd1YzpYArU4yGBzY4ibHMyaf1iuq5LFjfPjUdvPkHzcgcwgp1T",
  "key35": "BTDjYEj74mEZcc139B7czBkN82CX8YBg5FH69ZG8s7YVjdZyzhfupqUScDRuNMsXwRVMkbY7d5PyiGg6VGkxkJg",
  "key36": "5xMnZqpU9pwFV7rVE6P2St2mDBi6Sr6Pv6JevKTRiV2wVhX4BErRGHaY2JsEQuuEtkmxAVBXtWAWsoZqg2j1f4C2",
  "key37": "3h9AKmsk6VvYxznXttMj7e3acyZHLt5tFW5K5Fre2zxcUKHr7Q4ZgyGhcfZFXVXaotb5ZgfXJHGTf5q8bSgFWcPN",
  "key38": "2NiJRGSTazGfF14JevBy7zNAnDPJyA9D6XLomT8hiBDSmB4GH4MPvStGknBRTUkUisMbREizBEq1RHpx1tC51kY6",
  "key39": "5FfAUfmCDnNcfw8DUgmsgV9K2Mx4TFhEKRLAPAwd7bRADmbzhoSGvgv2RstivwwzVwqQS45R1QqVwz8XtMYz9T52",
  "key40": "4CumHsQ7JyFvxvzV2hiGEHJngSbAduRJHA8FC2N7Va6CVZoi8G35Gb3LEhymVhSnpivVpWkushhfcdacS6K5Gvii",
  "key41": "4ug4oXctxPL38GfkQPSJVY5xYkCYKJZAAeAxjA9Yd8AHaz9YTZjkfuUQsddmujHyerLgQEm4s6akxn55ob3M5Pbt",
  "key42": "64NtRv3T1BgZNKhhwjVRty2x6Tss1pvQEEdCcJW9hGd9j4ewg79TRnEG2EwrxYDBXEVxJ69gGhnNem9uzY1fWVGs",
  "key43": "3gADHNq5XnPo4sKrtCWGT1wksgtQ1sJNuv4tqBoSUiYw4EhiY9eCzNRm7VHNfMuhmSVbvQPusjNDbnHVp9J8qHQz",
  "key44": "5yPFcfLowSe3NueEpbvePh41ZYGxXGFDgj1sWe3x9a9DkbiX3ZYmcdyV2QxQ3oMdgNb1Lgr4nJmNAiQ4fdvfknaV"
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
