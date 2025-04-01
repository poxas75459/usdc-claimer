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
    "5PCKCt3uZtWzuBBKffH45g3HKMx4kaa3eMg6DBrqG4pnmFve8ND1caCrMY7k2rMeaCuB43Lj8Fm7fzcmEe6jmF72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zBbXhBq9Fz6Sm6CBDP5LQXt2mLizaC7Sr3jyv8ZsT3WyZqRAeHzwQSWGbpp1T4u7cXg3htvuFKvyAuzk8K2a5WF",
  "key1": "434g7FXSJLWDnRxCbuRgBRWn9r6G2ZY8xpnvQAnqx97Cm6qi5DhDNDGC5Y1CgJZS9wjoHiT8uffCHAvPkotcrVgd",
  "key2": "5FfGQ9ZX7WvHGqtuqUEUFxNg4JkuihHLhETdFK2W7rkQY4S4V2qQPrGxHoqzFtCmYRqkiVrogutcNNLX2bb8hweD",
  "key3": "4EqY2HWGvkBaqxRu8E8b2KBQyuEhKaMLranWqkdvBLXzJSeKQgzLUKPyoXH3unuiR4Ts8e7c84mrUd9ve1i2mCXS",
  "key4": "5V7MxN7WG1Y7Eg2MDQmV6ppeRD74PAjjZTsBoRDXiWDjBDoKdWD2gPGZQiEoMEEmenn2zDucCYUhMrWKx66fV4tA",
  "key5": "XgfqLP1qiCvgsZmL9sy8M8enZpX5YxAFU46humXwTzT2GHAtpq84CEbJ3ieJGEdCJtunjqo2EnhkUXKveTY61uE",
  "key6": "2685656r4qoxzjqwoC82TUEQhy9mVMugNiv6QZtXq7kqmME22ET5382wzhiYw8ZHR6svN9cHUQG54fkssnhQHdXv",
  "key7": "7EBKWiPPnVi6hBbfzmGoxEUULNrdSAVPayF8yJ48XB1ewqYP2f9e8J5EPRspgCY4Mebm5ddKVihDGjv7gwL8PDs",
  "key8": "4AZrGdN4svmrffyxYAwgMm5iMbdY6Qk91masoGZhnh5WdHy32WGE8JnvXsLXNLaE7hWLfALU8jQiwAcs7JZZbVeo",
  "key9": "2mWyw4PsHh9S6kgpS1Lq6LFN81PXJEz996fB7y8taCRcRMjit9bSSsxos4MsMW7ukBHufCv5YacnqYsCvpPLZZMU",
  "key10": "3jaB5b8qt9sD9eMrAsS1qsryM1NMVLuoNvEdX3zmuLB1by8Aia1wqsWp1aPaoZNvF4JH1TuWDEYQvwLHad4UeC44",
  "key11": "5HekLw8RJ8JWT5De7DwJ1xEZHkCifq4JqCd2so9SGK8cA1o2t6anc8vYVbQjb2GcsV1mYHA2NwA8HDnorCnSooDM",
  "key12": "5HMexJxakDGwoRX6Vn21es6w32oZ7MrcSTs2iGoPPfXg4hyfLaTebVrAcERqECPwbKshbtvgG2JsHLgUUBFg2YUR",
  "key13": "2YEKDZUkydRyq6A4DwwHUD4iem5cUREw2psoxhqgC9fGUfHjSyPt2VG48GsZEg654AscjrKvGdFnZyR7vhwYxcKN",
  "key14": "4doSJJ5jCoTMCK2SBXAtEKMfeiFyVYY5ErTdEu5edEQ8baemR4poVkMAJQcpXGnnLhVWonE9KjX6PNNGsTdnacnT",
  "key15": "3kV6TLtF7jBQPfgXnYa9egd4bV74ceAAzAAXp5mo5Aczc2kdxDGv18bzFyuvytPNfwFCM9jpcgPGKFNUPYnmgHKc",
  "key16": "42oihYkfDZUHYQuFBHC47sfUBBTdNA4zmnPwjd2E2MysndixneE16U7FoXxit3vWPHurm3TgZ2TKBrw2dwTY28kU",
  "key17": "5PeR28vLPFyReQrF2PDDatyyUXALxxscTGFaagiMRFXrVY91sGA8KDWLW8X1su35Sqs3nbaU5JCsCZMKgvmU9G93",
  "key18": "33mU1mcxacWdFGeifBG4u4zurHREfr5xqU46ZGjc19WPnKgJW5n3teAStT2tNrAW6wRtDG8pmyoSx8VHbhz8HyHg",
  "key19": "3Pe1Bagsjw4CFsjjBZ5UPZGkfLxeLuWWjxdGEAG1CeNBSjkd8oc8VVBzKddxPyUJhh4iEsKqxhUyThsZUDuXNrAe",
  "key20": "3kpB5ZYbvAVP8tt17nYx4m6P1pLhu2f839mqmiEoXLA4WNBp3on8D7wr7kc1AHrMegeejDtqSn7SdUNDVAfvxW1k",
  "key21": "2Bq4qSNTxK2DRbtBt3AKuGhoRNH1eVP92CqUqsdqYTtrGXn99Sx82VnUBkNzaJX8rbGY5bKGWvh6NvGr9RRc6Eke",
  "key22": "5a6ytF5ph2rQAbR5qN6cgJ1bh4f7gX6zgGxdLSVzx8WoRNUAUsTec2fKWTBST5Ra7tto4dShmKyxmbXx6ABAMovs",
  "key23": "5fLFZeHLvPPNvRk93F2e4GHWJxFrnLVG2cyWUusqc2EXX7tVeJX5cuyjGHQaPrpRFThLDxQvn6mDPmmW6xsp9bMc",
  "key24": "5BYs6w1mvSsxH4qupbE4kC4bufpd3j4d9kLKNzzTbrweww1qsRhcpX3HLw8N8PDTbtFJXosh5Ekbu3FVrpiDMGag",
  "key25": "54XMYZcfVLiYYCqymsy6SP5YQzjuQMXGyJB25iF7T3Tai5bYfqMpt7xLFHGve8JczifatnmRd4xgJBfikQPmiCUu",
  "key26": "MdsVKYc415QEY5TCc1wW9aNzFhFNbUJb4AhCqTHZf1bftwB9mfZKYWseLakUcjNdsMx3DkLgMY2x7Sd5KtHcZyU"
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
