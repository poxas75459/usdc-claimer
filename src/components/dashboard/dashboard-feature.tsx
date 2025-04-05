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
    "23498jxdRrq9PA4K6kd6ZHP6rtPLit8nZZVbn7qF9qbhhx8SzTv2WKW3XD6tZHVrUZHLErfjweudgYiZmqoqeNV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnqTS4Hc9wu5XHU4CpvsbmfG3bi5Una45cHrTk1A76vxCxCWMHwiR6gt75TSSiHrX9RynrK1unbaorMgXMCtpt2",
  "key1": "5rmTfH2FNL8mXNjioYvd3wew1DnWBkhtdBVYXREqNkhudgvkELuWUqAxMvJ2GaGvthwLvj49MXR16d2DgLz4VmNa",
  "key2": "PsWPH5hGnCNbfEx21XeKw3ut3ocGvaB1auiF67Q2nYAau7JW25Qhcobs7SuuLKBudNHtPdjS5iv6qVU8nKrdoGd",
  "key3": "4yQiyziT2Z5n79AEmAZwZWHtQtYu1khTGNmWFuGsUrM89kgo7Wk35qe5cepUeaMLYdE9zS65UXTsS4zZzByJX3PY",
  "key4": "gDBqPKVhJuq5FBcMEDmBvzbX749FuGYNBk9NhsRNB78h2LFz7DvrpQib4isT8od4CKbzAmosMcWRRu7n8HoxUiR",
  "key5": "5MKcmLJguRc3GNZGEuXUvwdBJW1cdArBPBo8qDpjvEzkJHEbgDazzGUGmy52muiueckx5S2JRAw9qAZpA8eaXaq9",
  "key6": "5LsuySP2dybPLFZUJX1dAHJHMBy6uvyofBNh5qH2LioQc4yNDxCMP2KEmiQegPmj3rVE7UctJhZ9QugZ9rQtD5s9",
  "key7": "2FJEMYs3GEAu1jLWxhMebuh4VRW1RuTyqtJR4sd8BtATRx3mwgyVhpcFsJLqeSFunuRDhVWFdR8L2cV1d55WKM5z",
  "key8": "5rXXrqSXxmv48XyHnVvTfBSeXEf6E2fMEVcLzVHS1N77MGiHhBuiDaGJnAQ2Vzr75D6QkEAhUNZgHP3wGGCHN3wM",
  "key9": "voZydSjqxtTTufduo5y3JWqjMceLmWV7EexogzDFQGxrA9Z3wnvSq8rFbsMTmSccJtLzxixvYyStnUHSTH8a5Hm",
  "key10": "5GKvaM1grRiFpmidPuZANJRPzsPkYpH4z3m6unPXnyar7EjsNhjPjrPUeVjHjr5HNWCh11b9kPyfZ33BoV8P7CJz",
  "key11": "3L16Gub8iHs2AsP9BUcqNSVELSMs1XZMWyyXtCZL9mr5jEgzvVVi44P21EUMTjLfA3VBiQgfth6caije4Y8kxCmb",
  "key12": "48j7mT9QmJd4Ugkrp5traAFazE1THBKpYcNXrwQJTphCrrGV28iyTgbBr19y5GA8CYCES2C66uB5gHSiF3aV2vyY",
  "key13": "29qUWHs5unbFwtYuHSL2XhUyUaetqiZEGn9KdwyDdjVWiPqL3iDpxJkh3PV7ypZ4qihKLQJyGgJUtnqGHbsRmpyw",
  "key14": "FaX83dTFmfHfi7jg5me9BpvB25MFhxjbeUghaqr5MvnLneWJXszW5JG9TJ4B493FNiC6N9YeNhg3wz7AZvuh9mZ",
  "key15": "5TNquMkboJWKqsfM4MaNpjf8R9EGcpWHdhM4oqXx8JHTdYS8WDrx8cPqvAoni9Bph7VS1KqSaRCfhg5hgrF91Jhv",
  "key16": "SNHyHDzjBrEoS9N2DyVF4vXhL1TvmN3bint8AXZ8Fq2S4t2z9SgZixE1767WBCJrPrrEM9X73KyJNbmxWhZWr1y",
  "key17": "5TDCaDrUwvxfVNvJCZ71ze17R9eR2sDVVkuB8rk9UsFUrThos1n4NtoJFHzUasQku3xSW9G82iqkV2Mfmv2VkJrP",
  "key18": "4bZqH7vRM9cRDYJ1Sv2Mzug2d3cYRHFGP6vsCD31293o3FncKTPMxdD3Wz2eapBNMcmjTdBKMk9xwxgFfHG2f3Rm",
  "key19": "56dT8MKdmGj9ZQJHTge5JbGrpZMjoeS4xjzJksobNWiRm8hTWTZeni3hn2V3pTZbBocr9SWEnRh2NXNxKRvS7vLZ",
  "key20": "SpTWLQEsnWeWuNrT5EN1p9bfbDmsmtBaiv2zL2JHr5jL84cHUcvX6ev8zjp5acqgAHnaTbv7PLpMPehVMVyUqCF",
  "key21": "65z2CHG2r7z4pAJJ2tYt9sQJPRHx66ghH2oqTB3fWJ85mYiQRArNK5DJZ6PeGrHAuHgL2xtbQLtYpVr1anyhz6FR",
  "key22": "9iEH1ZcV79W7oAPMbPFiNpAkGJgqVxY9MUNjHhrqiqBMJL1WMr3V9cwsGfznSKjHzRMmixTFcvbYzN5fgAqzGiU",
  "key23": "RanZeguMeMuGfQdDD1ogXPA2MWQa1d5imoBTCEpeYFC6DnwFEDTD4sBMrWWHE6LBnu6c6PSTuXyeZ3WErGURByi",
  "key24": "5oU52ooVUzhAkzwYTHkyVSdQRxg5wiukPx2b1EhJkLmWHjXrRKANQBYgehCTr6H9Mqdd4f9h6BQvx6Leig5FR65W",
  "key25": "5GqqCtwsVqUNAC5AggQenD5JzEqCQXDZE99dvJFToGWgZ7NeXXraHzTXt91QSXFJzdmZ732pBH5sBsu2sZkyPQt6",
  "key26": "5G6RBNzPk2yBhmvnHsEB9Mxsp86T1SSbqqdPdtZuy6JqWWqP8Hu2v521MTWu1zYg5YeAiLvSJ7EnP8aQDymu2hEo",
  "key27": "2aJFH7h38ZsK9MeH8zg8MtmwkuZDM5MWhm8XyuKPBuaSv2M1izNQew2V8R5WZV7ykDFgxbkBRLeiGkZoMNRX5pgn",
  "key28": "NhXvz8dpdLfjcsCpNXVioX13o2FvLRqfqV73k8JVUH2byhLnsi2BatUcTzJmR66e9NTbpNKNxncrGkHKxoc3pPG",
  "key29": "FiRhyQHnt7JUusryeavWNSfQizVQZZvEqUPCtRyMHY4R8SJZS1nvn1oYxmgwv27RR94aGtcbfZgtQZN3Y6Nabxb",
  "key30": "3paaFuxjWdvXs1deJUu4JafWfyMR3XnUW5PxVhEfEx2oyi1W92S9cTHQDJy7LM5Nq9JKkBpjtjeR5xupLtSgq756",
  "key31": "RfMsfM9HSz6rrexiWQ8hvCbkT743tKWQD1bvAzzBz5gHAFCZT72yQZ4SDQQgjHyp2Zs5peMmS3YCSrnpwUBMVsq",
  "key32": "2D4aWrWMib8REndq6xdkrSjdvd8TzfLYrXbhqpbwEKTDEfyu31y9NmApQiSygTKjs962xcEnpQjNivHZCMsAR9hh",
  "key33": "5rE2bbygzYV2N1e8VR2DTTfzToFwHbQJMYL2HuvF2uP3WvhyJu8cGaw2se1QZnghj8w889DdmJP4NZbhbiBqMezh",
  "key34": "3xCMUcXYTMqY7DUkWJ2QBEyH3mmQp967ackZg2LmNnoZZg7bAnB6Hw7ZSvz2xqFVkCNQauKBrdpuRMJ87YknKwoE",
  "key35": "2d3ih3LUKjWAWrgeavvnS9ySoGuhey7ijQykJhAmt4iNxwx8wFAL9wEF7n5SP8o3eFdR5r673tXcb7taMMc7TihE",
  "key36": "55g9RmvQWz1B1QbvjiAXFW2DhQ7CbfQMWChQ1YdWM21ShGg7hrE2bEEo1Ex689Jgo3uhztbCajajrZd4diKjczRP",
  "key37": "4sFUSU4FX1jiTLT9K32SRqGdHy5bg37V7o4FfQweGptHEi4qvaFeGPMvgwF3XQDVMP4gPKYVu7ztRHvTqV9C6MGG",
  "key38": "49Q3QATwraaraBSgRkdaBqCSjDaMfH49bTaSmt1WJsqqjwGVAxdWRKMrdm53hbooYBSmtTEF9pbRmw1aRizQhUKz",
  "key39": "5MHySFHdA1YGhSNMY4bbvXTrjDf4DfCd3HjL3KAW3QjbYrKivQLL5iCKKht5cySqQKkYSz6yB8ifE9cGxpY5u31Y",
  "key40": "4nMDjRjMzAwFUEBoJ37poMPQ5Wv5VyfeEBPf7hUXQ9aYRxXQDCGXKFR6gwgugUc3qTifhKYhY4BhvhKjG3jK5cmX",
  "key41": "2sx5CFQ51SavwBhuxUFs5YoNEmSRLBD6bSAygMGFdc2uK9Vem3s4KS6WSSijp26HTFeif1kjzWu5g9Tuy2Cp3Tnk",
  "key42": "632i8zUUFp9CPH63dfY4VmMBZMDrDZCvM7JFzC4VddzGNdHkGSm394mnE3brtWUUoQHyTfSkeB3DtohZWXocsWii"
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
