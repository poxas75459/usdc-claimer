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
    "2cAoPNrCysrJaN3M2kyUPW4Z7SZA4yKR1HpnoEuoMJceWoqZyar4ryGPQB3983KtQ78Jkk2vHoBzU8oK1SRsjBGq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xxL8wirFcgYS3NG6bV8CrZVN8VW5BfiS896KtXeC3nJe8zuJM2REpH4V21DZcyFds8qisgoSS8PQLndahyjoYnJ",
  "key1": "4iQ85GvJvVmTTyqPKbgWyxBWsy2Dj73Q1PFXK8TctXVZa6rU18rccpTcp8i8rpWVbtTvqQYJuoR76g4y3ZseJWWe",
  "key2": "5SY1LqHWpMR6aFg8U67iRrrmfnNrNrBTgJ6i9RmWMWENfjgydMRLKUWt2NuvecfDKKcoMSzgJatm3bnzdeDi5SZe",
  "key3": "4z7hmYXYzFhigPD6sYAZDKChA9PAohtghA41CPTdujXDxos33n7S9JuBo2syRZTyF7hXntGX9Aw7gNYJWRZ1AcH",
  "key4": "5wp52zzxPkGaSg7fA76Q8wrz2XC9wXvUgb2tQMVbH4vubYVts54hDjWTYGEnUwADLxYSGMAzUWdrwJ9dzVqwWeRh",
  "key5": "3cdCGTgv3UvKvHoWYgGDSJQbR71AwTWd7wEtSVQijbJqCa17M3PzemHNJNmcfxBztezXrHj82b4BYAbqDHvfBszZ",
  "key6": "3W7fqQtSGF7n4Z4yS2rceTihB3bBQoXkPxtZ3KrVThR2asBZwBjxoTEQAPN5jirio6EcV6Z3NWNmvGBKFutmjS47",
  "key7": "2HZDASdiLYY8WFoTNsyJLzq5eFEa4UEjoWBctcW5Xx2Zed3zTfqQnLbxZtvrphWUcwe92BLEjhVBjX36qNRCs3fs",
  "key8": "cYgcdpuNyL8wwwFWzwSJLcbJXm3K6YUaTrzJ9VXXCo5YKBVRNHKM6Pe39Sg7V6PP6PP18W3RdatrRxviqJFZ8bo",
  "key9": "2zMw1MSVmxyoshm7qi6FbJ1ZVuGYnYJ33EsmmbA15Xu7La4rXZG8RUn7YXXvEJCSVLk5BebUymW9Thsy5S9hotrz",
  "key10": "3eGTLAebyRSD231UQfbypjoFHeUiRRQCpzxgq8tE3oVfGj6Kh1fZ57dcuvK5ncryh3HufNFLGNm9EzE6pM8YPvdZ",
  "key11": "3vBdLYsEWWejiifhcU8uAmwmXQX2mi3Ve7yy3RYmohkGv2hX7pJAu9dKTdfMJpCekJXCY9m7UZYm6EbkzvnDrtXC",
  "key12": "5bKtJJXaozLans3ahL51fSWsXH4Gh7wgu78GvPNrSuU4eEinJA6GhD6zHgwPfjQv9w2vD2tYpPHt8NT1YRjAzqJn",
  "key13": "5J6KqX9Xs2NDG7qubxT2Jy15ruHYUGRDWUJyTB5P15xZAXtpGUsSkJL1tpesP9Xh9rR8PqPDYAP8wMtoTdwmCgdo",
  "key14": "5Y4UD8XxJM3YaenHmd1cZQjmWaQor9r2eceJC4xD8cMYsngFqBFMa3rvuEti6745dc1P5pqA8VCPdtsoLiAPLHUe",
  "key15": "3gLY5yhiWqanh6aUSQrZ33CzmkKCVTT5uc4HzunBdjTZJhaqAFByoRSW1cXBuPJMw1auSppK7mJmTgQUGaAvV8qt",
  "key16": "41cASm8Cmu8NTZckfJSVBxHMBqk5gtqk4c8wK9UFFjbzogGvMiRPXmauhGorthuo9vE6ChadUkyoQNVgcSUN9HY8",
  "key17": "4Gm74iNd9h7gDhyJQj6eWfv22A1BbfV4npfZPrJbXYjCAMFsm1a1W1rADt3BU83FgMs2QTn5c4HaFqfHDKreVKWP",
  "key18": "284Kw6cpoeeknByLYyk1LncT5JfZFeKjN6Fb6N3E8t9GFau341Qiw14pjn6abYL1HbZCQZ5KEWGoA5PhP6mxN6ys",
  "key19": "2mHyjmk5tV1b7kt4antX9r6s9WLrqyvjkNG4cfnLwAiPGunfWseeoN62LFmisi7xWLPqBLKYth67edfS4NUHfvra",
  "key20": "25cigwjRQxhoQ6AKohVLtui2KVPRhgsiLSXoCeEMq1ecumgZ9HjTddEtBmhvJTbKj6VYrEnLbkDVdA2Xx22Dt5q7",
  "key21": "4aG3Ft2EEdnyV2zi2zKX5TTRmJp7DvN6SLrKfhjTLAesJ2ypfptoxRyVTNSLC7BJRpP5TgdVWLJFwihgnqsHXQZD",
  "key22": "TvFQyTrXFVRD4tKBtUxL2KGgkGq2Qh14UGLv3XXKKwdSSDWUEKfiCAtB4t2AceBJcrwg6R7T8xt4rjZNcjcQhkj",
  "key23": "5LmyJMc3VHwrb23MAnDHRYNifMEpDnWd1xq6mx5wqzYKvQzw7bC55StA3yujjRgXR1WYB53ariX4xCb6kiogSKZy",
  "key24": "3pa9iZs55MA4YDL5kq5jgaxxehLKqmhNeBGv1Umy1GEBbvSgbxhhNvjDdyimPaVwE9Fgz7X3Fqm43JE6Hc9hUMME",
  "key25": "2nqZyDcDkzZ81Ujqx97P2YTqutZrec7Dqv5oiRDeBWnSroQi1MmPyFmWhn8hCqnUaE5A6VM9ncJV88u1ZZ88HZJ9",
  "key26": "529418ti4vxvnzJLzJDs2PovW7K7nuz8BcaoqBMZqYHqgVdjThqib6r6wshTSYC5Btp7BS1zo4XUZYD6A88Lhc7Y",
  "key27": "3yvEYex2TyvTm2x8WZyDw7naCxnKJx3fZaLV1ka2A3oD7Uv1h41w3rH3Rdghv63rKMxRiecEodTTyjp49ibniiVa",
  "key28": "4UXBdzYh1kvEiJDrzJBkELrMQA19cSjphRX9tW5cth1gqzEy93aRzvtry3r6oQSRAeX1zCkP8yukqpEwvim38T1w",
  "key29": "2rvteWKu6pUD3mAEB8zBUBJuf7AuSRMVrSxHgdiv8pFJ1xCMqJXBYiAy58PR7pwXordifrjpPMTsaP2RENEdjay1"
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
