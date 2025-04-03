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
    "fC5qbeA3BkHLEWuM8Ny15ZM56TpimmrgAYT5RajVmMMJQ37XzatokabJH853hAZ2RAWmU21Nc7VXd8nWeVTF8sX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zscG9jfi8JkFSfH8EorYuBNcTmJwwPo8oqAPJ4A3wCn1b25hR2ZdrZ2gff5DzkxkxMw6R3bD8cELkmcgcXAtZJj",
  "key1": "2BZWjV44jgNrMogiyLaAwobdm9srSW8g7MiHwm9Nr48ucX6Pktr7toiuD9C5mNkvQ3ZWy9Bnqu3rEV3Mri47h7wk",
  "key2": "3kc8uSoTGrSRkSwn4SjUeFNFMMQxboSS3XQs8dFuiUk5qTMr9MUFJ9JrqYTR4FxhWZ8fUyoBxB6NZHpCaKPxGZwT",
  "key3": "5LJQwwvgy1xnXq1t2gSSd9Usyz3JMBHnoQTR5EuKNXM6jBixvT7on4JeBidL9bFzZLZjTWkyBTmJRLxa2ZexSaeJ",
  "key4": "46JR4v4PwHx2y2grjEx3SMyFbu4ddGt3YFjjmAZjFAEczqPga2AxQektoCDq2XaMPXDEiqX9mVwuyjCwabVbJeJo",
  "key5": "iAEMZMHqQEcmw4pARAiEaHXVgQA5hpddAEQZnFBm4rhw3vH5D6tpDEcytLhF31GxEaNyysKjh8d3qmHKvpy5Y5W",
  "key6": "5jkQWGyuwKJscBRY9qxRVo7uHcRn3cymdyx6vH4mjf5VAZMVkaSV3NKXgSMgb3kWz1BBscwvi7Jh4T6W1DVPSumJ",
  "key7": "xTZ5TsUXHw7ojVxMCdW2p27XLkz6ywaNkpH6NuAZomC22kRWkt3FQ35i3LGytD3ex78PcY4QmDAFxDQYGq1PgeL",
  "key8": "4gSWa93iHgqrGXiZa39pBwmvJ8UcuF8uPCC5D1PKQqXvdRb5WQyy5qELodkFV99FFbfFRdNu8wSjddMopTRMpvo9",
  "key9": "4ZMRng8QEr1fmPTH8NmbEdJJptP1NWHvfoXqSJxsmEMSozbpC5D7Pb31ZcWMxLcrjjzB9vL7dkeKZ3MKshAkf9ik",
  "key10": "63iJeCo2e5dNn1wLRiFixFc8MFo7kDdTHbCVnmxiDa4i62ojvKpx32XJg7qjmQNkzkagU738RGZWW23XMsPVNJbD",
  "key11": "4Aw1uqkhMy5gAv9DnunB7mbKZ8iaRXe7WchLRSgZSfFNJ9usXHA3pK4pQE1yGaNv7gKRK9C24VENECyY9qmwXLp1",
  "key12": "2axK182K84b8rUxLPAXzT1oH3E33x5K9xYNHQ4sUybFBS9v62RcFE9n22UjZPeYuvuBZnFsknK8HzptYsb8oCFq9",
  "key13": "581mwoJA8RQatobftYJTJNtqGEijBb4ZPeun4P8WXt54EaB2KkZyCbWB7X9mD79qu4zaB8nGBc9B9G3CMMrRUq6R",
  "key14": "5SztxWmkBVysPvz7AAELY9M9qzLC6xvqddkBwfTyeTDk3iRY5SF5eBpPpf3ZrtZsC9V7Jd9RkiJQ9VBWzAPSMTtC",
  "key15": "Kq8cS3ixevzeLaPVt6wxciwS4Aq8TvvMEnZ7mzX6iV7tqzVydz51ocXgHSE8mvraVhtt4GTD1F4QJVSAYNgN7dL",
  "key16": "5SASocKuVYCEHQa6p6N6PNrK8HrLZmJxNr4ZX3W4xkDj5NYq1qsxLk111TBP9mcQv17dK2kJadJs7HCS7ewLoWdE",
  "key17": "8GA1TLZkEAA77fMnnWuEeKoq5YK9cwqNpJwsmaUeD4c3Zy1pSD5XSz2B6zeKczJZFJDjHK5zaqu39aAEv5HvdHZ",
  "key18": "3SiqnLRwWzimiiaKjQaRZy1xzCwTC9VxtUFYJJmxWX7LNfaru4EH13aE447rcVEDNSb5csc71dDVZR6Vnsitm1o9",
  "key19": "5A4VqjhSsLoF994x6uZBPTXAzeT3cdqJtkiypPN55KHAiWiz5HyvaDKhbZE3ubjGwo2FcoNKaKzWPheRUWGKfGF4",
  "key20": "5AuBBHoP7jpAShTD2oWSUqrqhpz4W84GKJwAWCAQefzsdadaY54o4nYFYGQKY8bvRFTgNHqAvsooSLXVHR5Mvboo",
  "key21": "UCYHpsMzuCBt2to2Czr9CW8CoJR2vEL9uTMyNsAWyhopKmVMys3u64GDb6FkHm17LQnrrqMi8NM4JzaXYNSAEug",
  "key22": "59QYS8ZfYgCNPPi4MeBedWMxuod2smvnHFxULfPoqAHoiad8PGevULW1paBWvEif6kFkrUUJ9bf5w8A56Asd7kAn",
  "key23": "3XC3yk232fznWEHSaKJkfgTsUtSah1TtnK95LhquQBm5WkXkWSziMsdFFRrCXSjCvXZfbr1ez7PyUfk9DL4ocCzr",
  "key24": "2iPMdsLsDduSMMwNUnTAFFFfEspCdkVbrpU4jEiZp9pr25aNDSVu6dU43GQ736xWWbiymupKzV9edEnDwFbs8mqV"
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
