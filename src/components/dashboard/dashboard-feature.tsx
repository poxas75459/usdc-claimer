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
    "5c3dV16nMyiezL8qY9kdVGzvgdFQfWbB4YEV1R9esg82cVvsjmsmoWeFGdVQSFmsjxjWvx8nywtboKLoxtm5g9YW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zacZF26Wbe75qP2qk1HtpyymKQtGa8icuX7y3ceuWH3YXqfdR4U5kpTVmzyKxKN7rhV6bqJeXK3TyReAXu1ik91",
  "key1": "2BehQWwV6WCLyAnqdbTj5t3pJfwKDz989Fw1SmFxxtvTNruatsg8945agksD5fCNECcRmTkvoKnBSFT6UyHNd3cv",
  "key2": "2MFSzhTo2yRkeCydwep6GDiLu2Uo8Uzm8Wjg5sFFQfkugoj12FJTeE9hHyTvZuRiY2AySXsxS8Sh2YA8Bo5XKhxz",
  "key3": "yh7YPvZs7JKvVKr84iivS2QWo8dntGLZiRV8gGAHnMQpRvqXh4dwCNKMQfgMGRQei7DEq3FvXvLvaCsL12kfhQ3",
  "key4": "5DktKLQZY1yHtGhcHTnHSQzKqFTav9v51g6gCuUNcCMHsAERTAaEMfgw6FVfEfhVLuXR2Mnrs48FUCoH4wnMaM2g",
  "key5": "3Sh8Y2xeLJMLmCoJxSEoSJ5ATzvRcVaBGmX8KpW3mx9sSuNPnhNRAJVDKS5hT6guzdziLpXSHM87Beh6jsPwgf8L",
  "key6": "3bJAf3FzCq34eFBm7ZXxuEBVtSRjhTL1CuQth275jCprEeMCWKDDuy2ecqQfKkLgbZoMst1nazXpUqRKrBtT8qm7",
  "key7": "27mBPVw92z3Q2gwUjjta9pNdQ5z5WSU2SYtmepUUnroGQwoSNwpYtCqgF71HvH4eag6dFD4B7sqMpKrc3MV3NHxY",
  "key8": "25Tt4fsUG86uggSzCkpZenC4zjJysnfpPbB1967dFuDjHNtxGomiUB7zqnLkiPyjbqTv7HzUL6jd5tAB6CfcmU8n",
  "key9": "2WePgHYbXt5FFXg1tACgYPKm42dn7orreYHwvHQKzkZ2KGnc37srSseLPPp3DvV6aGpAS1w2h1NDVH4fY1DiUejS",
  "key10": "2feLikw2HRyFn2531xqy6oChm9mFmU7SJmfyRSqshrxWCd4X79KhvFfHTqtL1wAhSi3cX3FsuUpWUUrRkinhtZCs",
  "key11": "3Xm9qVdFi8bQojL3Bb2ZGgMvSsL3wWwLuorPYze2wYV4GMbAdJDnrv2F8JLBC5hjpETcGWqfDWg4JXTFPVna816R",
  "key12": "y2639Vt4efGrNjJEihS1nKzy9a6gjSwzeWFRusHZd3Ud6vQ64wbHXcJ2B6MyhV3k2ktT1MUA7BoCBMgywxT3sya",
  "key13": "kHZUgBeTcAx3zZVcXWPfCSXLgmCbY5vdd6ZB5CDJ8VUQjKx4Gb79Pea36tTmdt9MEW8zizpFHwXAU9bqaUJaut9",
  "key14": "4vZvBQorvdMMNpG3cCLQiFf6ixct7JPZPggRb6CYeXVamvEEtEpL44GEgpDqamKiSSG9VFqrRfgunvJVnHAE4UDY",
  "key15": "4rPzTFcM2uTG9bgXLhJSu6YkBzeMSwH2muLG8cyTcN6LvY8y3v3J5B1r5K89p8YSepyes7HXz2Gn1qAzFByU4XNn",
  "key16": "5ZC7cArqaUeFpL1V89jVXqhGFnpYxZYAWf1WdQKjSzsx9fXycrdFx96BXFGubNZBo6i7d2cfy1cYY61ZjDNdy9pU",
  "key17": "45JeXWdtGiDjBp5rtPx8rdvJd8hDGtb5ztV4mbPzYAfredhHVLNy7foYQza8TCgmnaeAhDtbF9UXftfhHPRsvaEi",
  "key18": "43GZN6QSjw1P31Hdy6zMQxhYXrN3m1Qx1SmpeiXHH4th5dQg6TaQxNVuHTJWGoBtaYM7SN25yV8DTdgDkkHknqAS",
  "key19": "3u698rGxLDHSFN4x2haqYqw7K1reyRMY3cVJzdEQNSoJiKgXbQQruDo43r9qdVUaC5g9GL7rW1fs4qftewfNpoVt",
  "key20": "5eCzMWKsPLtD6rFC8iUA4J6fcqV2GdAMXatfaJWMbMmoMr2uAMGciXbSyH59pnapBxxWE37SAncJPAwUNgVhoWrh",
  "key21": "gkfzP4XoHay1Lp4korDrmLC9cHCveiuB6DSDqS31ZsHWg4kQwcE1vcJur6Ba8u6hnRPEbyFBjSuk4ewjXR7UytR",
  "key22": "5BT4TLTnppQa6nfXxj6UQE9p9fxZnEPFP37n6XwRGbpfJDagTaMeGYURuQ8pauMEAYiFSA98CXNF4k4XgqLo7rMh",
  "key23": "yezzc8Diy5iu3f7w6fjShVbpUcaAG4oRR33NVN13Z6LSvqomkMRV7uPMUoV4FLU3STAhN4W6yydeHtev6Lgfgxb",
  "key24": "4sQ8sYpPvv2touDYm8TTcnxosEkdtejPu7ss8SgPgyY3M8hjS4iW8XcEFRS4Hg4BgQUsnHpC83ETtqaeT2KqHNSC",
  "key25": "3cFmDC4kgGymnfL7ionmFQfgpqsZrDKaa5w2WaDKPjnz8Bn3CDCiBFeHyC3gYEbqhkbPjLmooLc4N8ujJMrxSBSz",
  "key26": "4DWgZowH895miCTaLgX73QbwdvbENXw7XW3kGQq3L1rfsuegVrXvNCSV4gcb3ifmp1QG8dXrgMUGy1H3oFHKYuLU",
  "key27": "5HhdbmKJhBsy8HawnzupdkgaK5pLHrwa3A1rmddKJWkzaUcTcDgxsiLUY2zhTjKp9Wr4eeZrfoNP6kNoWPviSL11",
  "key28": "3WkMc4syGPVdBvYQ1zNhkLQRSd99V1CsdwfrUeheYWZhMsVKS82eqrFhN4oVt4FQkPPFawMiPLvL4WGRbrcjjwBr",
  "key29": "5RCCkapodZpPnQgiEokvq5dJGTFxs1RJD75qc8f7B9tAgfm9BpqD6a2b7LzgW4UE995vCpULcUKJ3y9KREfmg1CZ",
  "key30": "5w3YoXNDjwkCVrc16rAEQ8d3JzujzVWu1JfYZMayhkABna7ZusCAWLaakwXy5zkhBdD5yyPEvMmHJgBdBkBBty5K",
  "key31": "3U48MmjyFMLTduqigTsz1WLi3gW9fzMvtTMEJb2nxV8pox3iaHsDWxipGYcDpmocVL1FDcwEFjWCNqVkfTzjFxD2",
  "key32": "USZQu8Epa8cL6yHwKW47Y8RoEB3tjjSd8zWLKtzW4KHjpQJViJdUFvASP5DDP3QekcLZNhKPyBmKbuAD6Cw2juw",
  "key33": "4XvaDY6JFo2eeAQ9X1Z9uyzETWJycp1xqTQ1urFAQdwFT1sBfXL7oa3fkqC5wSAfvJBsGbWP8o2j5cj5y4LCCQey",
  "key34": "52kDzLaXaeay6fL4AiXMw614fi5s6fN5JL71XqC6RfzkpfPaDUekBoFmjPP4zALMFRK3H9HaTw8TitpwWhirCTLB",
  "key35": "cB6d1m5cbtb2opvjXKKXn1iEwJXid42AeP7EzovNYnkGUh7LcJv7YAXppoyS75kkSJHFpiBsg44rYx3DUp5D9Uf",
  "key36": "3zgDEyRKRFYN6XUgL7cvuhqtrstufNdqyc1aBbyjwac8XywDE4mSnzEVp7fJd9ZbzrPAXffx35YLdiAQUVFN5jrH",
  "key37": "5JvGp4F5mBVM3MyAtM1sMiybpuEY3MPBvhWfdX5zsPYzEGi5i3dSBDBKrjQKhWc7QyWZWvfALB5RMM1xeUDwCRJ4",
  "key38": "5fUtgTis7bnAx6y7W5XewpCHtnUCGF2iLJMd1TGxtKhk5irJnjeJ1D5VCWSS2DjRiFgZqs3s1HAX1zm17qcJ4RhG"
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
