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
    "bt1gkUqKiSGfZGMXEq7yoa15oGFLtu6dmt8QuFaQdhrGKYfE15z4pdmhXYcdUjrxHWmM6HbDn7TJmQiiqrT8wup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQaZ4KNyagFRpmaoeysZ6MaNUyov8xzTK2m5bziSFL9baWE3aD2Pymo85XfuVLiFzKoAo6tKeXW3B7PLbEWFPAx",
  "key1": "5fNzmKrUm5AMZYSjNiVTG7viH58Ci4r9zLzdH2me7aCx5nMHTXZTttLCSqxj6SFwn66Hxj1X8YeBtpXtsmV1P45R",
  "key2": "2dKBpSqfeVSBEcUqVQzTRF89pYEJLWCigiEseWfy3mPP1HidGbW2x6cx9o4wcp5uxz8RQoUEW5Tbv8suF2kSB2hr",
  "key3": "5MC6nUuSLyJ759zCTmPPg1ZDUoVSNsEYZ28kPnqwAqWBoqmGuPbJZ4au3XR1sX5ETRtT7WmnZdBshz1KrfiFoQ8H",
  "key4": "2vfP8T4pp9EX8nyPJmFfAF2yubgwKyN9CjwhsM89V3twsCrpP59qDrCYiS9jCadxpmafwU1A1sdMLU7KYWiXe5wy",
  "key5": "2wu545R2cjRKYL6YhdRzDM1AkP1iwRrwXwKJTxY2YZzKJ6G2KYN9bqNG6x8WxGSS13Qari27xDT4X5HG62nULoR8",
  "key6": "676H1prCLCHPCAahTTBLpKJBdVtVb7UaKkyVMpvkmoy8moJ7wpTkGLz3DrpT2L5PZC2zozryBW7d1UhbPMKM1Ws",
  "key7": "3JVFK1E8s2S3H4H47yvozqC9Lr88zWVupepcXhhNPeWruk1Tzdq2V1pyNvi2sgLXB3rfm1ETYCMMQPCdFXStTPFP",
  "key8": "4Neupi1H6LFpjmcUAfVxeYLUUAVJTHJkBVUXqCwhHV6TKo4sxAnRqGkQTpHWETnYw5Z51bZYm6NhL2BgUT9NWhMC",
  "key9": "2MtRoq8K28Y9GFxpAT3HexxoxcLBtrfmXfRGev8tkBzhu5ksiedr3HWLgeKsRs8J25YpuKEu2qkmyVpA8wAmbQy7",
  "key10": "yih7PaSGj2qLfcMSJE5iVJkkamKxoLo9HCJKzA3YPxqyFU5MuJcecqCjnLQRpZmxLzLgiR17TevFSUp6HuLNLRw",
  "key11": "2LPj3eTNFnJmn9nx9YHgW7DE43Vv1NEwohg2NFLHxrzKuVfhkW2j2mR87VWYHz4Sa35nHhDryXhCVyQMJGwqKxyM",
  "key12": "YfXo3cg5D16NqM17YmboTnFUjoSPj61WXia5W3AGTshQqW3H4qneMNSizm6L9D8cPw3SzrUL2pyPejNDMGZ1f8L",
  "key13": "xSfKXXsz4HtLi34513tCiv73pX66EnAh4zPykgfUCCzHrM2hf5Pd97QkjuYY6tXPZ1gZXCvRkpHkb8R1fR6AREj",
  "key14": "5oLGEooXVNE2ZKAP9ByAtPVd49io5tDxeqeu1PXtd7udqpowWNs1RZc88VHNM2eB9ZkSqLFW6nAS4T6VaMZMPsDk",
  "key15": "3NQDcBLuNusgAPiCACEJCprj7f43xixzrzB3ZKV4Lh1dXgQt53ES6hd3RFcCrPD7c1DiZMwch7hRm6E4zPUcMiLz",
  "key16": "3JFaR2uZkQ5Wrw6KjpFbmdSq8SNei2NfdwZb1YYJWxUuUQXkjZGvKFW8hyg7vLkAjQWuzEuNMLqUffCB7rHDCBji",
  "key17": "dMkZKdLd8QpCX19KDfV9gSKM1VVNoepyJX7RTyonNm3Qjm7RBKj1mU73NNu2TLwtCGS2jEzi4ggmSpydwyDXSUQ",
  "key18": "2rirYhxkH7UG6j3E48Zr3F5t4HRZZFw34jeeYh2E9HTsZshKHcvKnDZkV3swNmrsqZGGNrx5cCiMnBJG78pYuJr7",
  "key19": "3J8yGPvtnSo3FnsNsv5bLrrTJTizsyC96EF8MAZ4vnHeRCeHXMYdY9SaAswvceE5mshiH4mUoxJXZMx4S4GuCh9G",
  "key20": "4sm1GeXQcvAwPnW2d9GvT6VutinavgnadrViDG5rkMbJXsfoicNejNet3RSYUG8tBwq4eimhwfm8s2HY3eXGaihu",
  "key21": "4Jgs9GPwmun6tmwPzfwYR68ddsg7LxHCCrSYmu2D5LXf9ppp7Li5nu5R2d2bss7r1nCQ2P9shiDZQqrr7Wi2BGG5",
  "key22": "4YQYhLsPCoanoEzWeZ43hq9BuXnin2A6e1GTomisjenZArryx4JPbvhm5xu4qZdwupJBxUr3TnLEgJQCnJdKq5oe",
  "key23": "7hLXqwQgoWf6cVGjoW2bWoHguzrewFbwTwiYi8BTT5cjJ66QG2LN1Kd8x3HoC1tVwZW7irYirmpTFVSYvsuqLLw",
  "key24": "4gZhUwkPfoyJLs2UxDkGAnGsiDQEemjkMz1znbhkyb3zVrNdGn6Kw1xiGV5FX3435opCWPD2RaA4rKuYZb6DP72w",
  "key25": "KMb3JSuTf8UFq3yGTW2cG9TphTGCxGLWGQv59F9gHbF68YSAgrU5C1iRvkUjWJkzxXSCHSZGcj5qNr5Q31GBh57",
  "key26": "vSz5wwBAAUfYbLvMLwB5ZjYc3yaorCKHdPhKaLyz6MHjE4ji46hZJnWcXvNDScUVjm3gsnr375Logu8JdiQdmtC",
  "key27": "4RsTHady7244uqHP9zWYYMi1yc9nLy8ZojDvyegCgnhRQgFmXHZFtxZgGcoKe4wFAE3wqCDSjNdZVqdpen4MSf8y",
  "key28": "2Uqyjhw8fYXzhtzX1dzb5wGyxKPbazaiwCQPEHb5Fs7737rqaSuQNVj5nafv6FaJDDMPtKkDxHquUB3Vi3DeA3a6",
  "key29": "5fP8PYhN3jXWxGuDHzXxVRJcpaZNdSqiKwUyr6KiSenNWM3MxCGQjPhaVshze6PKEvRoLp6PRLvW4nLfPjLyqhpC",
  "key30": "B14MV6f5pgMxv8n5bPUAuuvz4RQnmbLWLKoWB2q6x77hbBvAJTGFHuH4MfLodmtHCDJmDpb9fN9HZjDBPGQGTS9",
  "key31": "2rZG8MSGR9yhTV1PY6oo6Tjn5B6J3jVTr2BSU9xCivKwfne2DboecziyLfrMNWXXUX1TbnuvkH5oTcvPzPqWgBRd",
  "key32": "HvdEgoaKu9AU6GDtSt9P9Ew9XyZWpyDb9crSGW4twvqXPF1fdkp1LxWqpCqG6bZTQmESrUWFK9a8Mu9hSxmTzyc",
  "key33": "R9jkjXi4Z4Ud2bz3Y7NLZ7cbeaLYNBFHghoVPdFVVs3rqk9rpDpNogVi6MGcFytxw4P2hvAJ3gaPWtDDgF1CgbU",
  "key34": "DZ45MoW5WYWMW8kSu2tvPqj9KQxJsTV4oboYHt1y1X2uEVzPdmpieF63vRfHVPpCwNrYyXBJpjLi7iFQG4BHQv1",
  "key35": "3Cgk1QburMftd7vcX2nYAH7HfeXKRWPHmBMEpgtmRvHdKcTDcYmr6Sgtk1Cm2DCue36qDMbJNcBXw2n9qjYw1Gdr",
  "key36": "3jq2d3S2yTfuk1YaP9KC5jmTWdTcNKQSTNaqoFPBUGL5EQAi9k6D8MJxkyBuubrJhUGu13Ftnmu6D6QC5cXTBSpj",
  "key37": "2DEd3u2zJKHTZ1b1tzvJvrEv9Qg5jQkdoFcKKKwYQ33LoeHyDvpSMXyVyFrXYSTFx8NyHeTfzs2GJJaNkEkA6YjY",
  "key38": "ddaV7YH3rXqicMMv1gZB1wtfs2UqgcARZKLCCtRVeD49LNrd728kzyAViaxkR1Ye949ENTX7uPNQwwp5cTwt5jx",
  "key39": "4rJyxEEDRskmQDLSJeyJHjy3xoSdaGd6wRdVifHyJL9nUJ3NsfBPWLVQs2UHREZxC55WQEs95wEAyDcLH5EtM6x5",
  "key40": "64E1cJkkTBpB2tDQuc4dVu4pmCEVE53dXuyoGaFpFnVuZo8ZxySpNuwerwjK47dSjpRsvFtNWjDDvLkcVhgbmcpg",
  "key41": "3QCjYsUmMYtkd8KW8SGjeamBcPWwqkXoHN9QMKotBZhPZi6JayDYM37tGMCXcDtdT9JTdiUnRPGxaqxvQyQ5PzvX",
  "key42": "2R9XS1LTH35qfs1mHWnHjvqT8KZmpa8ajQgto7rRU3vRHMcJjENPvqUitjPaz2yTZrC7pS3QJpzVfF8CjzKraNZH",
  "key43": "2oywDE7QxmNKnd8U84AFjBxgfBUoqv5eLJXswiNVS3m4y5raejrgEwedSxjRWpD29wJ5QF2VC3EazYcqsT7tAnRi",
  "key44": "5QySkcjxniTCbKAuZeEiebQULc52Wtjy8Gv61wfmoagQioj6GCvXpztQxTkRPpURfs39pjJmDTpnnJngUZb5Mty7",
  "key45": "5Z57QUThjTvP2wyA9vWQxLDbraEGVFvxMjV5LB5ouTPU3Uixi6fKMXXAi25vfvn24ZGhYY72TbWqWygbcrp9zwLZ",
  "key46": "KTkQ9sFYiHUzA2DvnQo2y7siokcdBHXu2d5VUieQy951vqBy6ws6KmAy664V4WMnTDPN5cMyHNqC79MiGqm7FqC"
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
