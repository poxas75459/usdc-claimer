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
    "2Bu6iKpNynUWuHaDm4t9m72e8TqWawkrp8uA7XTbPr8xXTCDXMF3kEWyXMPNDWY97phyFWFggis6xMgWHsR363be"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "etpR2tBYKjEvAcauyRg7PbJKethJXvefpeLrmDfDszhP7a4hdSkNYDpTHhw7GcoweHEZxdjMTv6PQ2UC9Qy49ps",
  "key1": "36MEVynM5W5vyNMnQn2UEnzGJfod3EYzzfhgx7zxzzHKhdFRzrvLgzptBLBHSniCmba3codRiVh5ZcNmxB9jThdp",
  "key2": "2oHYUDLrPqTCTS6mpEqS6d7tULy9GccrT1YMb5PhaJqcK9V5kLAEsCjgfcE2BdcM4fGPmv5qiwm8ZJa2CxU8cUDu",
  "key3": "3gbna9Cn4CPBmoazWZtQY4tAJjUGRAhGp6wvLikpCvyqbcmNgDGEg53ykcWRpcyLRdcTMCykp5Rp8CoppfftqQDX",
  "key4": "3JHTYRezvJfxJT5MufyWtcVcwjKepHizi7TwNciBBjhb6crk1ahoDYntmmWypCsbiR851QWhZmtQXqSSKS95wK7c",
  "key5": "4nydG8fx3wNc6xHn2a2YfupwiBa2ZSUfyCJWdfXYZcNNRNirGH57kKCYDpMRwrhh3Ew5XBP3scmEyBbLfy74DCgC",
  "key6": "3TJdoiFx9xHpwsZqkvuSvPCSV8QnVzz2qjoxDBiRGSXWcmgTPYmyUxCBMeGybe3WYD1jdQRV2uiNv4PUxCSqJXym",
  "key7": "5B5diX4rGhVKpTvP13qm1k3PESW1jYQ6jSj91aBvESt4Z43DH9nfGzY9SLjGvQPctAXUXB2kWtezVGzQSPRxAxmz",
  "key8": "fYjYmXnyvG7hXP9qYd4gSxzPpUvhmBc1CQdRSdToAJrUnxsDrTULpMM2b1NZ5ErjQtY1piFYzr7aa4xdkqiC9Ny",
  "key9": "4zC8fuxHHLeVLLxfD9aQx5T5EWBLAZ6PmZF67BVHLsXBavCeYmiKonVEfXwMDepwFGzE8jz3mYaMid1ffZbKRuau",
  "key10": "5nJRs4FBAg54XNcaUsKuMgBaHoU3ux71RJaE4Hej5m6n9C8QHBiGfRgtEmn5SCRmHyACNE8X4Bqvr7UR2qpLyRPo",
  "key11": "55zjogARaV4ZUR22TJs11UkUboeJZgrJgzuRqBF6cPhxg9T5Nphs6TiCjjmdd5SYsVYFrwjH37Fm9wsQpA7rnw7n",
  "key12": "4KCMVWSUbnPPVVqT8h5ov3wowYx5jSyCi7aarEcrfN9hrwDAiZD51neJdYeFUb1rBCTayodp6TJeDurMRktjpDXt",
  "key13": "2F3v6x5A6F4GCqa6AJ2PRGpgNNgJjLQzVjqNozLLzh1YA2N7DegmLJ7PLWy7UMZxGPMi58KPvS87YUxfKMRhLoj7",
  "key14": "565wJF8rxiJrpzeDmmAFkFfdbgNHBiN7vpJzT5rSiwn84HREtRyUkbjpwtwcuf78HNwUm2XuzrCCLMfkZPAACyYE",
  "key15": "5Kb2QmncFXzok1JX3oEX1yRkGsbBmg4HQeU12Am2uSkJSxceUMXvgj2RgAD7t98CMNYfWSoaTBTqFWJDXXgQRN4S",
  "key16": "gad5Xrwmz6biMiWmzj71un1rUu41CgCGHB2abEpLA4scGbJoPB323eDnwaeqHYv4Mtp24x8snry9hXtgQLcyy5A",
  "key17": "23pM8yh5JXYahuDn5y1cBhrs55oVJAmGTrPubLNxLTVTQvZ5Sh8wrCmPoKXiUNLnRfwxz73XoHe4viK2CN74XVh5",
  "key18": "3wRYoxDsUSkFdDjWBBHkHrc7rttzG494bqNF9uJUZjRkM7ftUZrkHqmQ8M2jcXuxnTM6fmgLST1mMFLtnYyQQFub",
  "key19": "5zSrqRv13VtDYiSoHjh2XUFKNMf879DkmmW2uPyZukCFNSVqnkm4xYC1ELMLYmr7yqyF4pjGHVciunubwFyQfhaj",
  "key20": "2cgxxyCdVV6jWPM8QcLTzMKGMeTHDWLpjBBPpdndKMnrdsb4GEGDpXzGyvrGgZzFHTjXxvM1zWfunre57VEZxW9n",
  "key21": "4s3DrXeZEg5eySCw1Ditt5ga7M7D17xkSe1dNhn9WhzVBzfcjmFLDWt9KxJiGofgE3PjSvNdffXp7WDL4ACsu7bZ",
  "key22": "61cpjQDuWwuus4nqSPUUXxvLGK2eaYt6JLiF6sEUeqrNymEQ6oadapYSi2uHZumr6FLJDHVBJKSBzLdiWjexd66j",
  "key23": "2VDzqvWnGsTSqJe1vyf1M4PPA7GrCnoi2aTasUyvBqAmbktiuqnGMPDdKKoVf62QrgQmwWXWwfAn4CHeuex9x1t9",
  "key24": "39eybgjdbcCwhRDyvkrmXSdci6pSHqhDzRypy4vFxV9so5665KDMAAhWDZN8GBzvTiCfHXvasHrPNMTV8kge8vCB",
  "key25": "5o9QP1em2GcEVawsELbe2BdWj1K776vpVRiN3kpkDuB5LoV71x5vGE7Cu9uAtnGG2TWEKTeZPYWUpzeJCs4gEPmK",
  "key26": "3x7k2hsWVnhZp5C94pxqJ299pYQfW8Qz2ggC9xoGitxWoLVK5SbJPTeBtBVc1Dq1eyj9fjAPTuHPbZFoi5XWK598",
  "key27": "4VMxzPRL7s8h31EdNsbgBBGXixQDtvn61ucbAnocvs52pS1uLQWiMxsa46VBeWP5y7j5nv1c9gSxM2QqK7LiECeW",
  "key28": "3eQZBY1nnbwjvpjPRztp6NqejQvTYCAsXqsnga92kJbdmHRqQNLRQbCmT7sQz5ypfYXkP8x12ebvGx7Lb71EzFbV",
  "key29": "5B4dMtAdQe9WksnmqeyTrWy5LD7m9szYoVq6P988t6hpqHyD1Ja5Pjc2i7AwN8EeiV9J9Vop6inBca9B3HYwx2NP",
  "key30": "2gzyjPMehVZcWGjZnoQfBVz9LZhz3stxerbnpoiuPd5ib39a9JZMq4PBoT424cgwWuB7suVSFg5jVHos4UEzrfZE",
  "key31": "3JqrTHSqSi711s4VWfy5osFQjFK9uh31HXPi62gaFfqeUsXkGrNUutH4pjiuwKvipRnyTRUrdJLuoA7txWVt3oiJ",
  "key32": "3tzeUX7LPx6kZKGyfKGhMjciziaJJLvG5wToWMKXEY4ooH5fehZbco6EenYkH4Hjmm7tmAD7Zw7JXeLwxVVi7SX7",
  "key33": "5FTyeVwAYNsL9QySE71VXmRxHUmGxxv86m987zzCAHdz7rTdBDomfX3UZSqoYRjseTzrVwvXe7zbMs2s5cfAvypB",
  "key34": "2a1Cf6tvJVzrRA4nzM47RE6n1ogGWR95wkkZ5jY5NzjwWaBRned3PeiefrTHHyfBmqVZ8XJ9GsTtFsmC8eZXS2Dj",
  "key35": "tW333mr24xMe3wq4TWSZs8c7bDNmgpAyjgRB6dEZqKdZaA6ncPjg1CMyTKyxZFyZPvaqrtn1G3iyX9u9JbV64BE",
  "key36": "22Aes1CgRTSREUD3KEt8UBuVNvu3N3BXCTPzBfCbsLNtc8yMK1SaxFdLgg6UzcbkVqxt2ZmLi7khpUaaAoefLx9C",
  "key37": "5GUiDvaKgNRz1pYz6pfguXwzHjxuedwEGzEWLjcnc1cyLvVLWgHXeLvGW8vnpLTMPXABMUtwCKuuiVCvmnNHwSQs",
  "key38": "SvVof44151Z2auL7wLKSCVYqTEB1NabP32yuQtxBjxMMeuLqZvjqSYhkvHcui791SXKpzsUBJMVkfmkwvieuRrY",
  "key39": "3dU1oKRBx1cxgn49K67jWLAY2oSDFjW3cyNAKNBm8VTHTozVvRYK4UKMcNWyX29utFFQBwdEcYjk11fAjiVeycvq",
  "key40": "3epb7SzaRESnH3EEhvHfu51FxoPQwUaGdcYU4REovUJfUecASDN5ye1uAf9mTVyyCWFeiibiRECV2NLhw765wYh7"
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
