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
    "vZMNw19shGHUrocwxQRmHWTg11dKsscv8YwwASBYMmPFrZvUd1Fx7UYKSTNqtsouKWrStAEYL8CDoHiAgYvXjdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32mzFQWSYwmY17g7KPfRXaDFGipQe9yAmRz2M7jvWcRXsDbxyrkkreZt6JoHASZWGCqkWuS1F4iKZ882HxVuyh9x",
  "key1": "2N33ge6fvjqDiGuUZQUJLddzJnmTztwsyyzRNjyZV5SoHo2z8o74TQhp3ABykZpgPLYpXQZrRiveQ78TecCrAaTG",
  "key2": "3J6nLnQBAc1xykGPQAZ1ddjBwwKByTuzXKipWPxkqbLmVudnVNpusXevia7AeEyewEBxFaZLqLZJgCHvonZGurpq",
  "key3": "TXPUdXNnVvwAHogTvThHwEHNWU2qseMdyXZwMwfPJQMsWp6rkRvA6RYwXpu6CzSAPitm2yTC12aXqmxSMPMpW77",
  "key4": "XH5JRLdjfHcLg9wWYDiPZjVjmBJdonRboa3ZYHbEVQKuz5xZugnw86iYfBgCs9Dn1GewYmX8nfEx3Cqyb8QMv4o",
  "key5": "4C5ZqDtQD86kQpnbvsUzvBsQzPPnfFKk44QSpmPevCBFg4i8Tq6DvskG7vULK7hzQo5ip3KcVqxDSKDZc9jXL6Ce",
  "key6": "wb4rGGX7XCu83jSwL5aDqUeGysDejrmLndo2q3jr11s5ybP4xGZtH5c2FmS1Vhwu5w2Ee35FpSY95PNQWuJjr2M",
  "key7": "48UKZsCrXFmYsYbXdcXqT9zeuFQXtFcwTkBDchSEVy1ZGSZ4vJcRiKi3f96MbtVD3khpyUBXRbR1nVUdBGfJT2AU",
  "key8": "3T778chNqhvDEBij6cRAPnwRWAGHuW6hn1f3NgEKNDUSvJHRTAH7uhBwAa7J2xWHhq46bnGEsQHXWBurHuFw2aM6",
  "key9": "3qRs2eydALiDSGNTUg3wSaDPtDoDioEquikjUdov7nkho4oeZriSfUpiNb7Nmop5ktGeEiyF9MBBAJKH5mR1NDjw",
  "key10": "3As5e1DiZhdo9jNHGKB5mn2XbksDMWw5fVG4BQKh9hqvyxmAwkm9iJgMFCePi6dSnYEWZ6z8hZsUftEScPZwQMPW",
  "key11": "2zrASsXStoofTukUyCdCsZo8ore2Zd2AouS8EzPfiUJafNx9znCqQVH3yM8YYtJ8ZHxqP2mMKpr21MFQ6PrNFfVD",
  "key12": "41Ua1PSfujMw2VoVxzk4DMSFKhYGep1QKhFiVLZMMz61BRjFUP5Bgd4FyR9j9A88oGszKPm33J5fKHDFZq9dLbWw",
  "key13": "2j3qoLJWWrCtbzuN3MwFG47XfUBZpn3vm7Jm4qWcdnsVUrAARHFd1YR2jsfn68q9NLWTtCUt6Si6f8LxpV5p1YzG",
  "key14": "78QCBGthmE4bsp9ZUPWjFJgkFq9Xwu4KUtV1hhqNFBa17ufE66UFEXRh3oEQTZsTNRNGujAvfEXSREEaa9Pn3gd",
  "key15": "KiGw52FLnwnHSihmLZrCYzCgLN8t8aaz46L3w7agp1f24QrLCJE2yfEegqnhMF75o6bK3qjRzpqsvyw96mRfsx7",
  "key16": "2awpUvkYBL2kczYfFJbej3mNSLHNDqXTeyMD8UtQs6yGj9Kd7y7FZB95QQqdQTvQpdLsb8xVEN2M2HzfXJovC7E1",
  "key17": "4zWDE4vZXzukRTqEkjHR9kXJD7EFP6KPJEhy35FwsumWg8dC3B63grYLchgMJBSXN4g7wfkxeFfcuB7AbUBqCFWY",
  "key18": "4TixukfJBNZrBN4fjVURXVUkkPAy3DZrRbpp2NdNRtdVoir8V241UkmTd8uweKzwCfkvFa6YsWFmrg5btZz43qA1",
  "key19": "3tLFLYsXYJbTzDtc8CSME4oFHW8i9wTmh4ZLhu52gJwbdqb6oYpxtLpXB6K1EDfWhVzDr48hFKDYywpvQmkENz5v",
  "key20": "4HEytjr3Q8WQ3FJ9gimmB4yyWG9XJFGxPgZ3y5Ah2u2DGtfkxeMRXiGbu8NRcLagRk5UxG8Y3LHNEpzsXLcZDC6a",
  "key21": "5LQKjVEYnBGdPAnE9548stSXj9mhHK298R5AdX8cmGCoFBbzXyGsqKfwcYvtqnmjxdjR6rWNvB95McdYU5w1ohR",
  "key22": "2eJ8uRs6V6NEusv7MQFQThKtBgMwsXbdX7oEevEihbe462eze96xsLS26ZxjprkcFFfaALFM59xsiUAPNLPtXQGN",
  "key23": "4J5LWGjaPJmBndgsMm8i9Aw3MDoy7cMo94jbuRodNY5xcXGYggTKVkLcqSwfcZyRxxyAaSRyYSR1QuT1nvmT5TQM",
  "key24": "26JvR5ZqVwdVxLm2YsvSpKdo9a1CEfuYs5v9JDpfmTiaDohGV3XdEBCX6R2nGm8PgFGXA7vdcDgmRPFCvgTF9cKb",
  "key25": "4fTNmH7TrrfNibBaufdqR8UoUvpSedcSJxnNodsyUjG3HwTBpYyfdwscBFSuK4H5psbGR3g3Q1XtzyBHgkL8W7DR",
  "key26": "4oFEK7nf7935wsjD2tT1T6YXYr9KnASszgW3LTkxUKihjzfXpeYcvZmcmoQizho16TtqvW2CKxRex4v1BFxN514H",
  "key27": "4ekr3UnEMTD2YP7X5S43k3pCf235sEaP9KMSSn9tSw4z2xnZ1CgmMXqkg3gvzbMKWfwmXmC63DFpmHpLafQ9uLRH",
  "key28": "2aixcV5cXeASepzudew1SZvBvakQsQEi7SxRqbnDZn1jKv8KjC1tJSUm2P8b1egXH1Dm1wK5bEtjpVi3XvCesYYz",
  "key29": "478HMVvxJYsFukdpUBY5dgUYgJcD2bRAs7Sru85uQYRkYqSkXMUpgHf38Y4AZefYFFYNHi4EWCWc9ffKFxpnFwGr",
  "key30": "Zj7fM8PjM1VmpJXhkzveY1bWoL11H73HmEMZQkEYYicCToKFoSUFYEP4EUJovJrA9pkZ3NJPm9DA2r3qPQgomyy",
  "key31": "EjYR6SbnMbHZoJcuwXaDukSgJtEgUreXj9joAX3tvnAxraknpLF3JCg1cXQeKPStGsomVShyJVAhjWqWnFeTJf7",
  "key32": "2C3oXgU3x9EfNkKmTQ1tmeH4aqLGWA9uwLgLDqfEDopwcqEciHMYingemKrv6eMSJxkfxu2yjUYs78ozeScjq2ys",
  "key33": "4w2f3Yke59jPFfqKpekWRR8VrrbmY5ARCSSiAx5jVJq5MWs67Z3jU3hTxkMa1XLDitvQZpNpuoaJaKYf6gZnW1FN",
  "key34": "RvP4p2Q8BSFFMt7CZoH1Gx1z2Ugvcxepdks6P3ujzVpav4rybfwDo6uZTgM999gUGwyftHkp4we8C1f8DXDfUpn",
  "key35": "4ZYpZJB1gCCEZbeQHZ5hregx8gUMwKGRQbpFqCDDxnTfuWCAZuvhv8HndCN2r2m5FVorsS4fSg4V65tCbas6M6my",
  "key36": "rcn7ABWknQY6U8qWCmEeAR3vX1EZr7tKGyvxKBKnhL9kzoJgSY6MdWvbVa2N9YWkh4bLXXgs49gU6n7Z5pWfGeW",
  "key37": "4H3siEkcwc2WafxnDUyacvRDg9HViEkeRwf5QFcWGpMqGnzZHhQQePmCwuorwf4GES73FC2XEKGCd4cmdfhkJe1K",
  "key38": "3UTMueCZgNfsZLttuHT38Co1cqa9KBLN9jkHU8QCQxVTQ1wLm9cyZgS8MYZfztqfaCYh23T9VCQ4kFSs46PkFyc3",
  "key39": "5SgLcfDSKg7JCLFbNaRCLNuZhjXRn1ZKReJi1hEy1BaN6bU8EhfqXB5GMWq14CTnTo2RiGJoKQ1B2LazXiYiFzMM",
  "key40": "625Rk24FL4QNCmBbeAtAfinot1uh121oKWeAYQUAYu6zkvbpM1tyk97LTF4XW3876euim37yeyz7Wt8ZsJmH9Ycv",
  "key41": "48nAabD8tdpzyXFDvuYyvoLe2YrWnxqNKJpFgW6mSAAvsqRf4hacB9VB5fHe8aumYzAHvh56GpJtWPShrw13MQ4Z",
  "key42": "2sUjRXbyqm9doYHCRTVkNX1Jav71Ra4DX4pxp66WhhBZgefd3395F3NuJRQi1nRv4N8fedFVPewmsjEEJDxw852D",
  "key43": "4DqBk3p1D5HeRuYZ7UiCeez9CADNyavgsCRSPZNbYA3hKvZWjDLxVSSF9QV4PPZVuvJwDNg5nVHvemEaPJTEsy6m",
  "key44": "3K8Qnh6Zx3CrowJa1duPoKnkWTxBCqFiCv1WvzJVNL6XLhwZGENkvnq5PHbDyp3U65ZTXNsuiND624b6TyfTR2sv",
  "key45": "5yLcGqvSrE4PzaE4gZaCsuJGxMWNFsEowCwTxDmUv6DrL8uJso1C9f8fQdJJfRCbed2bYU5Gwog9PCXRpktKymFQ",
  "key46": "4BK4PaoBC8pwdp9nZJkycrnB1PUUeP2cpoKyWU7pmZYgvdFmr8Ui3i1vPbtJhZ5bwdoVGrSRdA5gaWnAVkYoEypU",
  "key47": "3JMaVuNgjrci87d4jpbvPRBDcvvguHiWa9Nj97gFCetbAsyDCgdvq9x57CVo4rMS34Jr3XkAqjAwfnvw2WtcaTwA",
  "key48": "62TmPjuhsjZUdiLh8JZJE7sZX5KvEmQ27ifbaDwyt4sKMJmWULmwP6EwtGneU7bHpXdLpgwcKM8XsTpHTety53Ua"
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
