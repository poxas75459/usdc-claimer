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
    "ntCAyaGkinHmw7qTibC1fjBVo6ETimQZt2dPLbBA6wDeY1FUQDUkGPkP34LoTN2boFm2n33pjahZt1JrgbTYVp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dK1csX5hTTLDq8jBpGKxRem66Arx7b9YpSmMcU1ZVAYsTuP8ngNTvCyP4N4Ap2qgFTVBh9hxsrWn4KN2BkS3Wzt",
  "key1": "4okvjJWW49HbR3d4GfWqAEtPemZQ7QPsD6nArxuEJx5PLvRGZ4VkaFFiKZ6iCyCmWekoTZ7R1GwTb32jACJhoWDm",
  "key2": "3wPJ2qaBnnKjs7smmxTZSeTPyGBtHTfSX2kqdGCod8FjC5JpiwT62uwJDGQaP8SfECjBGBFT2XEZJe7uWXmZHRWN",
  "key3": "2vynQ66ouvUnue1pnPTidHAaFn3V6wYP7wL311qNA6ssBvTHT2gBxzWNoaLvipvVxcdqE5iyyTG5azuRytNUF4Fp",
  "key4": "3MuRRoWbWQZsJTSyUhd8kX3QxYG5bP9xWAhhcBYmTwwEjXBbSuAtyzZxVHaSXRf9wepMUuMnq3ftvZtQ1hG3CuBR",
  "key5": "H7yWbGvks5tt3Jm3fz5JXxeK7iMaCG6bKUjkzMACZeqoop22BCa2XLWRHnk7KUsaMfS5kGZNJG8tCSdKvQvCG5p",
  "key6": "4Pr7AirTe59u8KpVtAKSEdm5HkpDi1ndYEk6xeNtdw82q1EWkv8ZH8H5RqbXP75za1ubUEcLtGCDNPWdRtAdi4x8",
  "key7": "3zGLcJUWdcPishrFExohe1r4nhqUFwzJCa2Ha6Lb11yUgS38vCKcXgm5gbGC1tUjjdXuVMv2YKN6iQjQ8wiGu8Jw",
  "key8": "T9PnpM1qKoob66irHo2ST8Vtpy1r63CfC2QACsoc7PtJ3cLWPpzENyyh12UaodCsHfKaiwzzif8JW81JwrZRhuu",
  "key9": "5WncoLdc6hbXGBfX835agu255bJ5uDMT5oJnf1viPxxoCYWvfkPdksLT8MCCccUofqdXDRGqvD8NJtDcd6KME9ej",
  "key10": "459aCXVTL3CY9z4cUifrF6gyhyA9SJeHrFQowSQ7N41wWp7AdjSsDHJsRqnrm9oY4mCMAegbHakFdM7wyvDRS6on",
  "key11": "XJJMayDftaLcaQ5owa4agCQvtKXJd9DyNAUY7xYxKwNkA5gvhbpm7BSemLAmrsHUuLKAv8kuRWdyWH87bKdgh9R",
  "key12": "fwK42EUK2sGKMjpKC77Xy2WRtszkBxWRX7nWjVisuRzqcbGGGW4DuVDVwdd2Gpam1k9CyiK9PKCJne8XLTmPE13",
  "key13": "dJZibo1yBUz6gdaZZHjfJ6G1vAroXDDEegcYT2Jr2T3CRjxPxghG1LFe8wY1Q1VfZFmf4HE2GP8fWi4uJv4hpjf",
  "key14": "3P44dpq1CLSLFQFSaQga9D7Jt6ehYnh8fju8Pf1roQfFq48wPvW26t7JoBY3hiUziA4bumeLvF6v2CAP2XriTdzz",
  "key15": "3a6bGPGnZJoQfRcerABTRNvxezamX63G647oqXLN9xG6QDGnBwPxW5ST4ztHnt74jmpjJUDqNyxzfnEFXrGsykTK",
  "key16": "4HSDSDWfVFMbS74wkGSKmQrThncpWqezeuryaDygQDUSQNPBT839UNW7dAj2jAhocWLrrKetKQjFg1mjCQFevQ4G",
  "key17": "3TJBoFvy4bnvVNjndp9evD5mcVtsgMhRLaGbVazaWi25Guj79uXjzJR5pNRYp3VFA3UxPkc4RzvoLRNoPvf6ts6i",
  "key18": "4aRGMRVM4xKPrM3NTYNWL75WM6GYtwnVFJLeSMxYUXHrP1bz3uDPBzguQ7M6VfQzWojjNuHhY72b9coxQ2C3sHPh",
  "key19": "4Q9eXqvBjKYV2HqZCzT614ACGPSeBoarggw1TyXhYX3Jwt7kk6W9ysDgWhpZT43heYbvSQeXFYPYQXggBgP63CJb",
  "key20": "Mv947St3JiKytcD568xAyhtxcB6darTYtvFnQQ34GKgmSeZDcL8dFVgeWoYwsEBmSyxLL9Hdr2iZ8N6mZnXjQ36",
  "key21": "ZV2CbehfA77zAW7LCsrNosVhxDVx3Ze5PjRTXMxb4euJsBTJxhFFdxvD6KtvFMuyzzxjvvJfXrD4oWKmqi3bAMh",
  "key22": "4sqp3XaCwxrJtkKYyJWQfbYNprUArRacRkomYN7dJzmJ3BLfnM4Ftn3V6t44iAjceUrjgAsFSUTVFqBV7eXmBzZK",
  "key23": "UU9wrm6vMNfXnwY8pkMQJDLJY7e1CtB9A23ANmV5kwPEPBMc1pJ1fr7nQZSAcSuguuVFPAtuuMB8gNVUrvGJHA4",
  "key24": "a4yenkPYebywsarWGQatKfhcKyfYid41DMycp2qU2VHGorsdD8Whfiq1svM5LB1HJarboXBjtFZt3hepsLuVnMt",
  "key25": "5YEzE7pnw4yjenRjteeQb77edL85y8HsoqXTVLj3wWesducpwKTuTJTuwt8rMbxyDG3egmecDCsAe3FbDUSt4DM2",
  "key26": "4kmcKV2TrprBKdsRHeWvToMBZrXVZoAR8udAC3zYcwZxEYrjQwzftjd28dDCCeoFs6rRshKuxaLRMRS2HG6AGWWj",
  "key27": "1mteoQQ7Wc7yt9uEYbRMFx22Jg19YvRQf1kT574gciGPJLTThW27fdFLfiJw3nGoDVWQc9vaDMS3WWVZXffZ4qT",
  "key28": "TX7BDYmyAQqCaQjpA54EvkU6wwQmJZnxniCDZzGtWRD4wKpint8BGphBpqxucxDNV63VbPEnwA6H5nLKJtGwSBY",
  "key29": "4DUzcw6LMCyZvUtXRsTpqZuNDrXx9hX4Pde6Zhqxrfja7VfF96PhCeZ3FvBbakjoWXFUVGx7J9zzYpYWoc6MoHu3",
  "key30": "4Xs4HwbsqkEKi1VfakYP6MfUgukEWRv8TJTdxuZzLnsTEC8DmWZoZidTC4jxcri7XJ78FgXyBdVUJfPm5atDtbLo",
  "key31": "3WABsQmAqxVEQXLb3h12VszdZVgu6wQderoMKKAMe78zP72WGhA9Eb1aZH4UxASShgNDW1J1m2xVJiCxna6TeSS8",
  "key32": "4XWUbUckVSR8rpNzH5nXXRZfwQKkt26bgQyah7NK6CgVActyHw9B31itRZXsermYoShnWgcCB1ZTuo2XVAuXLBH4",
  "key33": "3Hsi7QJyHoPeTL1JvEFXPnqzBeTzNZwGeQKr19ve5CkgCrHNDbiJkqWBvCDbf5Q65eDXm4jXfGdfgxo41u4gELqr",
  "key34": "3wbwbE4euVuPoJ7easHEUrGH6ugtBpHamTzXxqUW6MiNYNye9iMKmwEXshe8SVeCyKpWQvN8Gdm2uAV9chj3GQZ2",
  "key35": "5L9AqKSTmDpB3Pn5oNurWw54mhQ7XYqewu5hkpeYq3cEaNkXhwfQRQUQjhudCCCpF86Jw7PGQNh8Gqfbuxy7B6G7",
  "key36": "4tK6fig1oL6HWFFQj4zKV59vW982Pu8HscxjXr1Nc1VYUM5fdBAV3BQkXKSYQGVjTunR3kqEeaCcgC3Tn1Kmny5k",
  "key37": "3rdkH9ioWNqrJBcxN47Leg5jqKPbqLh5xhXiGRLStY1e1niH426sg1hdkfgo69Pn1HMhgHq9WrT3sW7cJKpTnX8e",
  "key38": "P4m9q27q7rRmGQ3b5AA3kyo7pSyucYVUwYkgJTcD1HDMgauK72F8KKaBRQTmcHXfwWBLW9ZdmrmZmyURYCXSs22",
  "key39": "TcSWF5YUeW1Mmfykvc2n4f7WxTLaAxeWK8dtXQiizuYmnajTbJMgSzu6bjxSzA8E9dPMN4cW5jCBaiHjFBGgnw2",
  "key40": "zhJgDShiyUkRpYtmwB9WKTSMsvSJv3Sm5CaDGHW5LT4gL4Nr81KGCZiW4uFpcd1GQTYLJ7FZvM5omr5UWsBHxpi",
  "key41": "3CqqmA4tXZFAs3fKX1xrKXSg7GotnqDXyPMm9znDP9RWyRpoytNs6a538ekcg5ksw94DUNEAiQHNaqXXSMZCoGPv",
  "key42": "3Qq1bQdUo6jywE2wW9SPDUqQEzFrkBRMKHo76EtEtbsz3CUsiK1SsX94yJ21UXFnk4MhZy9vo2dLkPu1GPC4PDci"
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
