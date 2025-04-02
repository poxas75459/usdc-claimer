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
    "62PhhprxGiJhp5XoxhCQHuFN2Nu2TCC5wXzLHj5h5hUiZBTygbagcsRgEmR8TKt7Z4wY7FS66AaDS2CtukVfN188"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mC2peWNcxmz4TVfLA51wCH5cb4C314n4z1y3E79QQw5qXBVTSt9JESpgxUyq99xNsnDXeU62ciSUaWBMD9chQY3",
  "key1": "4ytu9hTNqRWdzk7bwKJJrApp1n36foN4pEwh6j6BxCRQGmaT1BreuU4VrZrqJJd6gFMWiJoosBnwzyLfxMeUqYjX",
  "key2": "3sxsaWrRhMHMU5Q9fPiESD4ywqomurnaFvYVjXSZ1Rjikd5YA9qSMGxqjuwwMd5QLy7Tw9JnzEompLn9erJ9Qsvj",
  "key3": "5E6w43wNoSoDnG85cqQAnZrXJYdemynEvdtZcRgSjFCjUxZkRAiBTzCW8wUknLCitA8jdESZipsjb9rvyT4YePvB",
  "key4": "241Wx8h6QVxXGGNPRaGs5ionP5BP9bvPFaQU2Pcuz7QXAtFW4wyqYzF7WiwXJCXQbLWNxqzqw12fKtxtYbHnZSLG",
  "key5": "29yS2gPG4q2vuorYSNWKszfPFCXCkAjBBnDa1CXdFks22A7Mwh6ncxGGtHhGWQXg8nYGQeKNLBTzmLsEpDKifLt6",
  "key6": "3FddjYNJkDw5DRNjEFU8aafvrHcuL2e3NzGbAxvtoH6TBv7sCU1f7moB2msMDTnQoymsu4dZJsS5iNsgaKu3cJow",
  "key7": "3U7k5L7USrUyT91KZt2oRo6Ni6BVYgxpRKLg8BZAidUrrVYdPbmH6CghHpr8hrs8warJbfz9UYCHtCPba2fmacCi",
  "key8": "5azNizkmRU5yGNJsKsBx66mPsXG9NgnHUraVWPXSEM4bSLJDEzacENgjNkKtCPVW67oPYtvFGKu6EfJg8VxFkYjf",
  "key9": "2mmbwMi3Sn8LuLCnKWR4tP4DbH71rfiMSjPPHds2gRo3nsZAde31R5eMrk8DS4TZVLoF5tgYxrrBykCLXV2k3aQ5",
  "key10": "RvQoqzety9EZcA6jYZ2d57wtaUUtiFYpMWbnYUsfWmo3vy9K3GiMXRft8mxnLjJiWjEHNijAQytF9XKZCoiVeuF",
  "key11": "asofNCZsXepk8uzNNmyvW5jCZfQ2dEn7vK98Lt6XTixgv9vZ5DnYFzExqoM5Nq34iGhPWEYu84jPt8kNYnjcbCH",
  "key12": "2BhLREQEfvdBFPuxPDRQD9Eod8YrZYBDZo3sxYyhxcEFa9YyTpc76LvEJSfwpi53K9QvWySZdgo3PhHgKAmGnx1B",
  "key13": "4U3e9CJhxazmdn8YJ4YWNKGCr3TAXw4kaCnh39U1SBr6H7S34V1eBcvXqQnUGUpy3CTMqjr65wyMzdoP53pmx65q",
  "key14": "3XgiDVXjHaNRqLurVS4ib1XHJfzGkdZYGFmTSgXopJiRzTg69pPdfQbyaYfh7UJs2PjGyMbvQ1vcFBii4pu8hU7D",
  "key15": "4EM6kua24o31Y3X6BiCLV9bzc1qgWU8XzafXRE2wB971mxWjJ64uHxqAyYZaK2pY5q3Mm3kmQGA7CTy32AtYpkhz",
  "key16": "57vGzu6q5xNwZ5w6oFkmmLC4tWMZHn1PqWJbcWWp56X3szpVrQetL2AU8fdEEnTVH8UGnPFEVcBqmGRbMNUteFjf",
  "key17": "4pYfUt3udJhGbJoccPKznDoUtfFSnPghXioUUy1igVPwkmRi1izVmc4hpLhjNV9KFHTk3kTVyvydY4XtduQYKQwN",
  "key18": "GAZ3HatojKSVGdtfV6Lag3LcCqg9Yn88SUmoNtmwvMs71h4kibQNCyZuhKYA6QEwg8CVSz4zcfn3i5SSgkwFggP",
  "key19": "3TAbYbh4cdtpVW2TdQKH2tCLY1EiVwDn9eXiP5rJcG2EFtvN4cyFvixhjCXUatgSrMPWCZfRM36SkAFnitYfZNm6",
  "key20": "4i6ee8YK7ef2QqA9hRVA9exeabR3RQJWqtyZa3jA8y6wJQBWYf2dKvM5Rcr4PtGh479swb5ejBkznrQQMXuvJJjm",
  "key21": "4S5mnS8bjA9m7kXebiD3SesqzPBuVoEc6Bv8wCBcTQcg5CpT6NVCtKF9wq3ZYQYcZCf4WQ7brXjsTYvbRTpeg5bp",
  "key22": "5z6Hk4qA1oYFikMawAYYSYJL3eg32Y4MtixDSHEtC2L6hP3JKpiEoxAEbpmC9VNBe8mdt4MZdyqwft5soUd8Vaiy",
  "key23": "3GAeoc3tFwdoE5vXabFCxZRxqXS9fcT6WXC3P1cgEJnT2QcBPVv6VHsrE34vouxaqhXeNYbwqxiEqpJecUovufxt",
  "key24": "tHCqwH9xDACV4NgJuYv4JSqrEjyom9DpvVroqAhox4Xm8zu5j2EobiQv4t3BXgsdYuwoHEqP7wSRd9fGTYjJkJK",
  "key25": "3rE9MUwizzpuVuhWanyWpbp2NEsXh6XKPRY3kVHYjgkbGjS5dzpJjijRgxcYg6Y74JucMoWqk4dNDCMnwgPc4Cdc",
  "key26": "2p4gCfsQb7GdWwW2MEoKQxDdCqzhg9Un5adMpSURaqQjAMEUJSTYCdni6TJSEXbtWNEHbrpvVGGBCsNtbF2qkkeu",
  "key27": "3K9FG9gzEpxitN8CkY2cUxVfYsLpYzdQZjQCM2vhWEG13RLiycy4rABqSgMtA52AdRtiA5xhqzGGJpyLLfwCsfTy",
  "key28": "5uThuupn5jjUvDawK6dBkRvhH89q4oGKqibGo2ThTT93KDfdqq2MHNdUDPNPAio9cVhFfcMn9L65k3JrvjJqb1g5",
  "key29": "2LBGnXCsB2jzu6SxyrTAg6NtvHe7KtBGYoKFSxY7VfAnuj1GxmEN8dxz24zLAYXoWuW1k5D6v9JtLQaMpWpawicE",
  "key30": "3YB2bu5W2VHvdzskctjksiuz4rQkGLjh6SVHS61TjsPK6dNTRyhP5YYyDgnk4p8YKzDWUfKe268xwX3E1pSaZdKC",
  "key31": "2Gn6xpiUt5oKFi8pWNup75bdHNDP5KjEHzoM8JD1LfN8QAzZUmFWHjRXvNABAegswqoRPRSpbKaRYDFiF5dnVpSU",
  "key32": "wXUKo2zo2A2NDE8C55Se7JBbYL49zxjCsesUuzCJ7FrXadCu2vHNaQqitnrPwcQM3LUQetnZ6ut52YbPMJS9Fzv",
  "key33": "4Ny4yE9SBgYdyvLLhwCrxszmrHD4kdAApPLmwA75b4qA5sbKtNM8g91pccpBcDnbjF76wNGWdQiqAJbdxVxfvxsb",
  "key34": "31GbxTCiweVtEWfYpKB8UGXsVDjznm7Uw9q3VQjiHrCCnnBGX8ogsL6PNgs3aH366TThcAY6vdZFFwwdTDtL5gmq",
  "key35": "34rXruaRqtzdQz9SY3gFUcKCjscvk2RkEqgczXBJjqNN96QfSZACNFGHhkXfh1XDd8X71g24Kn7Rui8P4ypCAu8N",
  "key36": "2Jabh2o4TUnmvCbkEM5C8esJe3o3rgVfkCTqNbBtQsxHjNoo2T41AnFgGmk8K69AA8oRD3EuqBKcSbBKCPqf1q9z",
  "key37": "3BCuzXGd8rvW6UWi9fL9rT6szrVf7VbUeAikvc2qZM4SjgtULkLn2aXshsD5uMCsZKeVyJLdC7kNr6pYM6GaRJ9X",
  "key38": "UMSU6sPhVcTqeBDkfh5QyjpNeaEZ1WgXyo44NSHC96KJPq2feEYKwnCvpNNk8jqSosj8CXf6ai2gm8TEDM2GuKX",
  "key39": "4YNkEo4d7BVumBuiyzVfyLBrCN49dfHj341dbD3UfvTz1GxLhcZbb7eBf6R2uBueSXumSVixbhKowh1dEjyESWRk",
  "key40": "5TvnoSuMak8btTZMn8HFeHWXRWz6HjTRc6kVhsDSBM3qkGD4QzAe6LXDdycmHgg5MAqQAqGrZgkxcFkUfrw6xqsM",
  "key41": "2SVhkLs23PNJVa41FUFfGCt7nVdD2aaWGkJKwr4pPeH27Yoj3udWnJJUnuJWjB63t6k8XrWrNkhECWdA54sVywe3",
  "key42": "51fiFjVrHMqm3N99dBRokAgUbrKPyWphK2LidZwGZr4jayztH1qhZbnFpYxbmr8MZm54M8QVa3PKWiqSCtgoCscd",
  "key43": "WJSZ4FLSQJsunwFnuidrbzm8tqgJxFM5Axs6wcaF7B2BbKjfAbntF8z9JddhVjfhZcwz5fsHvJqYGS3EUE7hygQ",
  "key44": "V6tk35zpu3mCVWayfW7V2g9PZCPGewcfei8mPpTGvtv28omsna5ocCP3CXmvsmUT7s81xEz1juL5qTpbRSb7j1t",
  "key45": "2Mr1r4H67g7hi9wuL93ZPc4M1zUjo4JSnr7mJSja9iDhPZPU4d2WgTrcic7Wqny1N1fEw36tyebeKd92JNyumJie",
  "key46": "pAzzSseWvEHXZXcUGuLbNAjyDjW1xrq3e6YJQETUBEYffBgzaMvkvPdugeLh1qvf5Z89U4QB6m7qpi1t6PzWfTc",
  "key47": "3XrjeV4qLr6yDdpp4tE546Vyk2xFD5iHHAR9DTx1jhYTkcyMheafHausyKPEANKKS2KavBY5CTG3t8r5db1yUzVk",
  "key48": "3DNATtZeB54uFssMsmzTFu14AKQxoh8mjpg49tkPjEhGvDP29EgZPATLWBbNDa2UAJE4gk5P5VYa7suYkcMeeQVJ"
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
