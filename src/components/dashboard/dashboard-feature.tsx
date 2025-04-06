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
    "Mqz9VbqjH7MkmXsCJBMwbGdnqNSE1Q15veHzQtfQUSo96EYLvyrAoouk8kLn7PNTRr5p4N4ezrpTU4sijmKYqDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jXT8ZNtyBNpvDbPY6Yh64EbMvj6tVzWXNRaf3NRfCKLZM1X62fo3YDn6K5RcpGfbwo5u23EZfhGZhFdSwjmaHva",
  "key1": "41kU2d4RSk31Frsuk8gjAYHxJijJT4477J3zR9njuLnwgSV97ZKy54LwH1yBnoHZpH2BDFoHN41y3cuXDDtXBZRn",
  "key2": "4wZXx9sHLNkibaStRgPtYhwhyjaoHwoToLDLiuzTGkmUPkC7dnRZ9pLp9Dfk4UtMfFTD8CmnD5jfSsdFcE6by8tX",
  "key3": "3Sf47hJY2qc2D1cbtPcdeR51sBP5qXZ8RktJwuPi59Vw5BXepmm5TnzScN5sRcQJrWqs9bhTkkdDDSvYbcveiAbC",
  "key4": "5QSb1YAkdwz2BEKzztAwdmgdpYQq1RqsTy1roE43xfrgbcbRZ52J2qBJE2VbQxdXBzjpCwmZEHG9Zq721yzFD4fY",
  "key5": "3u5g7fHDSkDeLVrh5SsiR9ZPUnadjxWeHbCPyJL3ouYLTmSp9Gh7PednQv8L8tp1xCdR1yDLowxuj8o2BTgVGfrP",
  "key6": "271Rz2hkFxBgwXWBypH6VQpH1wo178nqenyU2Xz23Y5shPD4NUUHzQndauJEHmFNi6Y1HG7DZ6ntTDZabitZ7RFL",
  "key7": "4Yq5tEDxvjxrerHeBah8oqxCUMJTHrohq5W8Tet2jxFjyxmRz1KexSvDBpWZK7gokhiy4TnV9Cc9rDYpeB7Yeuxu",
  "key8": "NQSQzEDyz6LMBtNLm8XHurvt3zpyKNE3s8VTE9186VMsFxUNZhtYHNvKyntZaHHcsaXzDqMAaYLeGuSvGaHtKdL",
  "key9": "2nGWKamRquXNRPAUEFpPVNBST9hVx9Zi4j96rDdHjGhb2hWyBgG1Th64jXyJ3BhkZkwE4Dbw78YW5DwpaGikSxxU",
  "key10": "4e8gUufYFBUCiKYjbpjHskEmxMntDkgCGMvxwdtM673gEjeAZ37KUXR326xfUWARkWjrg1nzc5LiQrKkYLBaAei5",
  "key11": "F7wruA7EKqBDfTMciwtekkvuCUDZN522NfduVA37Y325b4Np1PEcTxjoqHj4KSyeQbHQMwGvgRVvyFtcMWMjVAP",
  "key12": "5mYnUx1on7UkRcH7LvGNSKsSSyQVbk4XnX9vd1jTzaWxqbP14XFAHXN4PH393S4XpTSb4atMupPuPeQFFBHZhQaf",
  "key13": "yvdNFTHbDoBscTFkxJt4BbfdNxsFLAgWCG3FcHzcedtnWqv1dAtZ3JDGBfwovcTPTD3974URPjAfRB18cr1cwXj",
  "key14": "2RoqS14d1tGENXdMjJJwLeDsjmDMAEov5mXXHRNawc26M7v9UsHX1F5jjfLtNasTCTSSsxAHddPiLFrU7CofEfrC",
  "key15": "DRQ1aEAXi1zPaAuwmoxnrK9m1PSERsmaNpVUh3RbMc3JKkrY3ZwtFpfxae4wa922YzTDXnN7GVsKyQfua6XcCxa",
  "key16": "or62KW9PtFtXpxkLXR8WZHukAVrgpbfvijPL1tGYnvY3j8nvjZz1Te5iMPsoMXpxnyG5XkmbxDP5NVwUHT3AGAG",
  "key17": "5JPUEKCoUkytkW6zcfF9iFECdpFrPnhBgcdJkUxwjqRneJHJiWhBMeWioWWRf5Y6v9aKDyfKe5VsqiKSuGRhYAvL",
  "key18": "384bSpySYFYShX2QVrfJj4UgVeJSnWoMvMF5HfbUBPUEvuJoQ8yNTNxguxSfeLKy2AAQzWYcnCUq8DbpBeToN16",
  "key19": "51speDATSTsWP9sgiBte9bqr4v5gbZVdaokXNtPYdH9fm7ivPvNjtakBuf96xWDSc5Wwidh29tDfcrD4xkC3CoLM",
  "key20": "3QUdq8F82dU98kh3WXsa3xxeUcfbNuFgsokbXVo225KQRiG1YqHLDWEP3GhnC1AxVqewrDwC3vPGkHr7xLodjHoX",
  "key21": "fqockzM4pvVVct33DTfxZyE7qyZ7bXsJXwkrEHTfV1iHnAsbRZQE63A8u41sPBNhBPULp7xAj22sAXtUap5sGCD",
  "key22": "uVWkRbk9rrjepYyVzag1t3S32vS1LYfbJYSBcAJ14bXduFKckdqMb1Vf8AyhLELY6dyv8rmWr9GN8o31A9ZNSEM",
  "key23": "wkrCWWB6c9HPwv69rF4Q5G7D4MGeMTYUsrL7AFpJvPgLoFQpf3bZwD2dZaG6DQ8MXQXC7DWV8LWQ3F18iZ9Ydmc",
  "key24": "5ofdzzhkCJTNdnMXgBpHoPDDCQtX9q6nE3GrF9Bmn4axf9DqNvvnaNfscsbvXKnnK5jWmYLgbCYzoCfD9QhKWb9s",
  "key25": "cc9Ve8j6a2xsgyJMwz2dzsF9uDj4JKYuZ74hAMgnTQbvQK1yyScmxFLeDz5uuJViCtVb9UxabRBg9R1cTQMA97D",
  "key26": "59UyzccVaodsqqeyecLAaySQWU83RcchEDz57Y5hJtxBso7iBkzQ3btBAvokM3zKh3F1bztFLZc3QVVPqbgfQhkN",
  "key27": "2ad8ZCJF4zQZxE2sJ6sJSbyPexWa8oTRvTGC1dMjC2S8vKUWPchjDMtQzChDuhD2xY4ejUiRzuu6N63jPQWJLdT6",
  "key28": "zBfLCQv3ghtzt3WV6BCVJeLssrMnqvdPw2KS7uGM9LzsJ7vVnAz9bBidRDmhCnkH7u62pfHkhB3upTerdg3buic",
  "key29": "45DFnprro9Tpdi3fTnxZ7KiL3eH6d2j7zu8F2QfXSv83ckAbPRScEP7o2JRGFE3QPVqtSNbDDbdkgzZhXavTJgis",
  "key30": "3mV1vouwocHHY4TBudiMfodG6A2wjEAPco4ZTwXr6e3X9jZi51pj2ibN4zXk25DdCtaiou4DWQBGxE2P1eAQTLwB",
  "key31": "zkQTnWiMStsZZTxgfnuVXyvKjwmdM5rosLNWPoBNfLLXycuRuzhUJf8Me1957meoEKWTzoMkKVsgQM4twZXhjg5",
  "key32": "EgTi3ECTayv5BYzAGDgCKV5AhK9yCPU4ekeAf4C42PxLgcPDF4MrzyLEda6Wacf3JduiBDoJn9n5t3VirLY3zrS",
  "key33": "5ouW3zttvBsEjmhFJnyW8dPKewpy43gvn88gbEf4G9i6ztUoDtaCWqo2QzSDZYJQXEuX5HkjELWbZV1eHYuDivHG",
  "key34": "2ob34gVaRGyxedLJ8Vg9fgpPFJrvbYZQYk1fhm4Wkod84aSSKyFxgRrUwschMAhvr2uo9cXreQKKu95xP18JdP1N",
  "key35": "4zpUeHmM3czw3tsHhGtaTgJTQ6FymJUT9Wd3hj2rf5yuGgnKMchGd4S6qKnMj9Qm2vmiqtz21ke5UeR6PrVHvwYB",
  "key36": "2BnbHm63tY6X2eJqxhMLtVYBm3LoMGmjf1inctUmxczwpaS28it7N1enYUPgYgL85jCeMJwaC69Qi33vuPNx2PbB",
  "key37": "3QQWAhRsMYCFLbYRVJ5ZPS5Vys1zzg9SsMavk8qvrtRTnmPwCsdgbRhNAudaeVHBtq7EVCfyzz5CNTHc1cmB8anM"
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
