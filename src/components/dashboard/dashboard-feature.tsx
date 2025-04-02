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
    "4Ugo4M3WuJDjSU3Y2iLoEVojUsjPTdgX7CEiEXdRA1vhUVtwsS7pzca1vWnGy9MVeYLVioizTYJj2GriuqcbEuqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJHu111xwAiPbdxE3wq9J5TuZ5aHEV1xZshsbS4jkenoA7c6J5FBTgUXhqWsdCBCx3Fnsy1H2hjL9BWVxNRm3jR",
  "key1": "snd6PgFHTYA59qym1uFWvTodXjafgNvK3VbARzrvDNBcU4NAxMv3m6G99vfx6BggBLmt6KKuS7oANbq7chSqKB5",
  "key2": "5JgX3pV21y2qMjZPbKZG3uzuvzXJLHfdZCYPC5cJbKtLKs5WctKqwJRhf48gTEi1dLsCP4m6ZhwnhyC45ricUwd3",
  "key3": "24tCYzKB5ynFTDMqxwN6mcXvLm7DbmK5fZuHETY48dCPZhsNLVUZwZwr9oQkf56vX7DC64qnpoqtyfsUnuj7e1q9",
  "key4": "dVySkFm9cZLepVtesztWJxzg8B37qqadPac3YjktWvWbS6aQnne37q4beMiTx2rNNVm4BKxRZoEQ6p5EV2Qf4m4",
  "key5": "2NNzVxJAScHWcqbBSqFTprcjDrGbpStjTrR1b1DBaN6Wr7tpzPLYHPnq6ApUfcGRgAgvZat7tM8FMiJYbH37WsnY",
  "key6": "2Q4rJMVHSdTq8EWi27GiWwHydHVEHxbEyZLLTrfyh2eWfpB7Jd5mgCxyPqr49FeJRraYhHzK9MiQMsff8qieLgDj",
  "key7": "V2uBTctSsr9QYBjnqpGFJ8Jppoy6s1md3jrooaYJe4pHCUT3hfHxhgDPQUPaVQFkk5MnFDt1pqwszE9CbZGGq9N",
  "key8": "3HAwV4zauNHCmFQEJLeuzZztSXAJ2X2mWUrejZS1SPMNaBbKkwMFAWCtsf7geWLDpuZ9favkbmGntCKu3tyv55hB",
  "key9": "4s1esk4Dfc6QcSB7YF75NGKRXAhmhyCoeqmqzvXf5xRoNnEatGR5kf24ZpScpqyPBJhSeeuTtmCL6fY6jY1xowvp",
  "key10": "x41EHF5jeMCgKYUZNTvQminAuEVx616y4BZEK5jV8Ygr8vGkMFgQ8trbviYF2h1iJyAV3U2DFxbthjTrtwrXFat",
  "key11": "3YaEeAKDzdLUJZzCa2tK2HWa71ppa9oQCDyYpSEpURMxTtTKhfydpWGG3ajfzQpJou4rv4VcHBiQvrKr8289RwbA",
  "key12": "3s3FEabSdrxatgyCJVMiz7ratvow96QjcHqozzGSZBGfN8yep5PYujWijdbDdUfjfGxvkcsFnK9uqaNYHmD8esc1",
  "key13": "4T1bRVxyLvY9svpYofstHu7uWLakSihb4DhxfyKma3SGQXduqcE1Xs6z8fy3qu3VhWAUoQpyfvVfCzUiNziVbPZb",
  "key14": "4YGbtHVR25k2dztaukYGL3FbEXRpZhTsFgtgSacnZpEA5b9PmPkbcmDUcCttNAv7ZXYSRXQTGmv1uj4oTaBrXb88",
  "key15": "45XW74RQomkmq3ySt7PoA2m7vJbjT7JUgnuQb8mR15QrqfBMxRkB4Hm3PUmZWST4ZPNdvYLdT76pFeGuKjWHo4dA",
  "key16": "3d5pE9EeBgpyhEPT6MBjw57Eg3Cx2eutEoMWYE8ZXFx4eCH5iBcAz8cYRirGxmu2C5rcmR5MjpXSi5E3Poup8SrJ",
  "key17": "j19gABbSCthohVdWc5wsbewq2yZ5pphShBDo5VscfpY23VsYYQrcCHU8Wps6fFM1g8aCHa46zJHAmx5LR6bmW8X",
  "key18": "5pbSqxnojAjvbGM9z19v1RQFpJy8ef9ZFc7bUGyTfdfotdFwFDCkDQ644CNskjEYjzJ5XE44QSfEusb8aSH2HCq",
  "key19": "4rPAXUzT1wZaKUGcPdnr5vdkaWmubAB2ZksUvtRgDRGcDZSZh85yQ6qmmbug5zbcF1qW6ZAePByNQ2qAWE4BPoLM",
  "key20": "GVM23ZaScoQ7qsbNYnYKYbagbg4sYZWMQj7Cr4GKDihSvsNby7RGqn1Q6WFBhsvqp91Wztnt2wZw9HyBVQDuEfz",
  "key21": "3Rkuyt66hsjH7gtjb3WDiLfsuAMpv6W7VskwQ931uJK3Eb7oSPYbR57wYiX3Uzw8bSed2bLvko57F6KQRF4fm7bE",
  "key22": "2HigGUpWsZpBKMVkqP8YsDeucwHuUBskuCXzEKCTjn49FULengrHgVBxidAw1hEwzx42FJjKneUKp72B3FJBDQJ8",
  "key23": "4RxT8qZydowQiYTgT9sLvT2WtFyWHJrRHNtJJwfVxDcdLr4UXCBioigL2yytMRVWSZ1jNTKiWV948PuJRHZyLDFm",
  "key24": "3M52xmRj5pbVnZuDRh4K9goyogiQZnfwvCd4jYVBad6zrVZPTWQV5vizXXtaLcR8GF8Cxm2A4gNfMG8d2tSWcgRU",
  "key25": "59piquoi6mkequCPCLoompgSiFhDc7FVStN59pfrur7yp7wHtzjJb87GwsEbvSJ1KkSkp9oRSVVSfgfb2JNitbkE"
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
