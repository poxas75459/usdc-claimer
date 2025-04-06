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
    "4ykfCijvBzM6e2omZSxTuAwH2cWy4Ps2RgvUhtuaNY6xfcmSkeVAgztyn96NJQYMXDkLdoWgwSijVTWwdkYvrTb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hXErjn5ah18qJnY5cob8mNmijAHSibDatMv5H7qRLjBUghfepMRP8sqn5WxJXx8assZ4uTX6vkace8mqfGJ6tdN",
  "key1": "5EtvmdaRRvXibt6PrQwvZQcgtvFtKisjA6SCbt16ii5m4VJ6sZCXRv2XJ3eZjEB5QQtZnhnL61LS7rwNJAH3dYsn",
  "key2": "ssd5sCMbHpaEC9od9kV53czq4hiNTYgvoc51rLrXkF6rTjbWZBaqAcwj5DmGV9RJA9fSyZjj8DuMaKZjVsBGjVi",
  "key3": "4xgbqzVPL76JLEhSYLMpLm1MoxgsyM6CvB93V3b2xAd4Xcs5w3Vj8HscJDHHb9Ek7AjLgUraQ7mbjtfmx4skLtKi",
  "key4": "561rUNDggczNh4Mz9B4C3wXxuYvaZQVeSanh3UKRRnRsvvy4kyyaCGphhhGWsgqXi2n9B5AqccCMVTYmoGsFoEvm",
  "key5": "292dqGqGm36MWZvnuM82wf7z5Y8amKRDJTueB5Qhb5ieNTR9QuzUeP7SHTDZmCWWvR847hu6uTRv4JqiZy6g66yG",
  "key6": "2qta8RLnrBRiAn2CcUtMuuEcApJoo4XMi8d4ngGTQRVsnpfjgxKJhSgef7Kh9BPgMGyJSSLkndbaH3zgRkwyzMsX",
  "key7": "mXyudL2jUuCXZA4wUsfNwgLAipxR1TUhsowWxefGF55SgochDA1BAycJEr6F3FkWZRKtXLRZqjbPY3qCB9X2vRj",
  "key8": "JUiHeMdTUrH76kzsXVAgeZvJzvFRZkLbVqAir7Ut8ez5uT8N8jgviau58o6P7gaV5w3v5cgMwrta8HWj2LJPhzD",
  "key9": "5RQZ2zrvwouGsBQZivaG8E8grS7djwxRHN4j7s5cLdUkLovZmFD1ECxgt5YNgpPoKA3edrPUdqNztxoHFmNmuocC",
  "key10": "ziikpdfZi8SvCYRxGfa8Vk9brRmTxQanCjftPoXGUzSMi566LjAG1F8CDmvnuYrk49MfzrJPo6ELSw7LTY7rixZ",
  "key11": "2zmJyYWdDrbRxHJW5VpGzFhXM4HHcbQqSaVGT6RRJBCnhJXp3pyAKNmGtB7BJHyftmBUGQwPzFosAnQ5htg66ans",
  "key12": "yTXdbitmKNbsWPCF7QM41KYFp3KfyxPVbnmkG616emfAe3mMFed2bJDGtqWBuDPNUAXMVQuD95iybzYdcVFTnAb",
  "key13": "3mYYm5Ut2bVH5QAaFsvrKVV6pUkA2ffZnMhNfevndUJYctyPsLojjJ4x9YuKPKSn2gsRdef49zRJf5GbAL8fGBei",
  "key14": "uYZPamU5RLVKs5MozAoR29xkcS7ubcEq9VEhdMaBuCejgzrsmAg5eSiLxx7LTUafS2ymxWjsX1JWEs3xtZR6mRa",
  "key15": "43XEm7te4DZg7UdCkhmS7B1aTnN4EQEkP55zXs8wo5bDRpotWvdwp9ua91v4y46pbfpSKuGBbRgi2YLHvmJBSdZb",
  "key16": "2BqiVPQVYacPmCMkFZnjJVcGyyABPDQzGR3R3DipaMQgupd8WmU4X2kAv5apjeCWT3S6AYErVHa55VxrPvTthk2H",
  "key17": "UYkvuqemtpLLAwfPBzrxsBQZ5tLgUgWZhjeyPscBcGEYyqvyjbZcjjDrGVyiitKSBqCgZTdFSb2zyGaoJUJUESX",
  "key18": "4ewVD6Hgx3jnEA5aQAqdXKrywG9RyRnEufu2t5HDNoWUf8YxMUio7sqNSLVLzHtwkioNV6BeGhc9qqgsmTU9wBgj",
  "key19": "43yi5W5TwnWVrHa42ATB5ySwHPmXXUCjs44nG4axtBZwWkChZpNEnTREmZGjYzykzBAyAeH6PgM8oVnQDVWnixDt",
  "key20": "2wJ4mLsLpT9xkXyCfFiaoRBcpYxmYtEQ58Tfnftue971nZkXPEDdF9ek3sEYbK7nu3EG1dikJ3wi76ErLLsEpzey",
  "key21": "2rnQskSvAg2cqatNgwg4afbZPES39snahPaWNtymU1XJJu21MDoPMzkS6PW6deYh6ccmHtBqzyHZSYWBG7BGsEvt",
  "key22": "5SBzDzpKtZVYBTjAEPc22vusaSn7p4yf49HdajfLeCMcYUkYcBFe4y6hpWrF8NrEQy69cBpBMzgYxqGWRa2B2ea5",
  "key23": "h7Va31ysdjsJrsfn8eRgDT5ccuYTh69W6szkEffRVFgTYsyEMFdkxy2v17S1q6r5T75iRkc1VGgysxWbdfWtVe3",
  "key24": "5W1HhX6uJFgyTps8zqcaifoiF1xrhiPMS8dBtxRhKEav584v6oqs3ipWUyn4w5hTi8ky9oQificemfK4VaGZeEoT",
  "key25": "4ouDH68d2cVbgbcz9kciFLzFHvUx84sottUnanf6riuL5fTLHkz6q13MC4fQmA9MVooRsv8g7r44DND1UXFNXaXM",
  "key26": "3bhvmGMMC6tEidBZm4zPP2fXqAxcszLfxnj2AKcgXmLaJKQUE1GZaqqgPguBDr8FkKsXJXRzJ5Yf3UYiWJvrFm8X",
  "key27": "3NgNNT3WR1Tf68VQktXctoGcW4bCuqrGF3zoEKbqCkqBVEDjNvJqkQzeU4fjd8DdrYhT3XCkrQ4xNj4pVCugewc7",
  "key28": "3iQbVvGXegWgXhXjhZ4ZxYgYMZkZNQWRmajVPTBz7NEdjCaQW31GHVcKKZmn9HEfFrZZks1wqU318MDxV6BLL8MR",
  "key29": "jiJrbVdWCBoW8mK5cAD8H7X6uECsELe1yrTXGbW2HwKSvSE25tLjcKTuufEeSQNL8CkCYrZLjv5wYFYWh16JbR2",
  "key30": "5Ly1FBNt5veU5Dv7FjP7okuw1k2KrJeGLAMZupBv9rmDaYjEW7eydFCh4Zp6ojD4Ebr94yarQHAzSSki5Eitu4gQ",
  "key31": "5yumqPKz39ALFfkyiPXADHdVeQi6Nufd4F1V1Myu8Bmn79mJWxJBXpLWHdypiLouUn8aSNRfTAVkNtMA1S1U4QgM",
  "key32": "5nv31sJf8TPYwTfJor8FCA4DbbxBrgppof3LsK4sn5HDEtQ96aZRdWKsHZBrmzp6VEPTsp2NsC4TKz4onfkfGAii",
  "key33": "4R4b7Y7Dd6obxfz3wogrGrVY9uVCbYrxtmuNUPJ7bUH4pFKBHWo9wmXPuAa69V4Xz9uXXNuYs2s9RDWC5RvYNpZ6",
  "key34": "2V2S2Rq6E4q56YUFHm3SQciFPo21LG2e3jkpLJhGki51mNj6pVJWF2yZ9HNVmEEQ4nsWNs6QSvJGHH5UoJmbG1pK",
  "key35": "vwRXWgaAjy6gV1Dz2ohvkXoCJS2uoboda9YHWk9d4i4XARD65mX5PDkm62YjRUPc3ZfsEr7VgqroU3bxyrTpKnn",
  "key36": "SjC3sSnXwzt73CdMLJY7D4kcee7133wqEbMes7VsXLqfXsbkwrQoUhZMkgq2Y4tPv2VBSvE9YH6c5rPG5abj86k",
  "key37": "3BYw59cup43ob9jYbHPtQQvR4Uv2baJ2iGsPEjZRo6nUbkhZmqfjCAV6VvCms6ES6mrbfW8m6hiojV4KFok2yz9w",
  "key38": "4sLkmYPp9xYD65NRXMYy5rbXpHzogyZ5rxHBUWW2Spkt7mEmraB2c6VhgDcr4icW5FGjsV2pNDNJvQUvTFfPaHJo",
  "key39": "44UYDgxu2Q27qhgArf7Uoz5gY42cwWSj8fJabM8Xkzwt8SvD2xjUgX5XWpM2ALgjrZ9F8k5jGduX4BMGWbZJKtxq",
  "key40": "d1qHmtRb1pdgdXHadhTaMCkxgZPLBrG9fRpJJy7YvAuQvZsyaReDPKrMthAv7P88CRxeZDe3xFMeZ2yQRjMsvPK",
  "key41": "5tYjXTsJuPo9F1Hbwsi2maXNVd4MrwcrSHaRe1RvpLDpMoDeV4vu8wxrhcs8qpMeCARuqtS2WaMqg4Qf7iqqo9Ch",
  "key42": "moj84nakhnALDotBguU4yvjwURAcy65Cmv7v33iLwYYzMDrabGkNn3Mtfn3HeTX1RUb1TJtKx8m5GEfdPy9xFtV",
  "key43": "2CPNfJ846pp7TMFp7GRRrVdFNUKy9B2Yt3ZuqdSj7m3KdYLA87ukr4tXJ5k7ryKFKhCRPa8HmkB7hbZCMsswqwBu",
  "key44": "4g7gWmjAnsfncFPwLQwpM9HaUc77XSWzNUSLxJ8HEnHTgCEcJdjPpaT7cYbvaNhF4tHnY3dYzx52xsWiwazYtyKn",
  "key45": "5YpFWpR8Rx8uhh1fGzNGFoF49CVfKyJyN2uK8wZh5B1Dhev2Vd8CW6t9yhPy63Yc48RHrXJqEc19L3EyAfrevNc8"
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
