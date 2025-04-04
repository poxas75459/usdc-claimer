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
    "2Ep7pb5qA2nwdChamUYZAbEpWFjgQk8M8NkB6ah6NCTY5ot4GF5Deh8cpZPHpezJSVEBqoTyv1NS5VrwXrBEwFFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyEFtCH2DSv986P5PP5QxMDgEbby9jhjniJSDkQj118mtvMDKZKt6f65rNDQ1318RUHWFu1JUwatD2kmobBE4tc",
  "key1": "5xWSG5fZGqX3BhwfyhVQPRYQxJwrVHRTCoMxY4RzYdyW3SqLF5Am4PpPVrM9BxCovFmJPfbKJJfuebTtNUjAwTns",
  "key2": "62MgSH9wPYaQ9E48mgPWt3onnAgYQJLpSBPJgepY2EnpbmPYJuSppuhPWktveFww9jfbvzMNutCs31a2LiTFVMqP",
  "key3": "4JWApSgeUFHqU1dyYN8E5hzdt4GtvrDz4t94qGmUe31vwS4QW8ZQAWFvWKtXcfV7MLCq5GhxYv22rVgMqQiuUF9N",
  "key4": "2V6QmZ1aKCFhqUomoLteWTsYKdXHgEhEn5XQg1xY4Sn6uUd4RPUEmmnzVvnRiv7wB2gLzGro7BQATPY1pp1jZUqz",
  "key5": "2ySo2LTuRaj6UFXnaWM2TEeAzbN5uy9w8d98AxD56ubzwyPM5jfZsM5kgqgywyTR2NhohbHNdRDdLk1KMztubYxK",
  "key6": "LMVBxFdA6AbvpMcXfboHkW6MDjB56yx7RGgZqP2DG7hChs2S8Ty9oxUv2zyuiyz5A89T2SBdowReWwJLgYkVrmg",
  "key7": "KbCQeceRpfvXRH69GMMc69N4z8jJ2Z5GegWq2iotvFRJFnhFEUG2Hg4tetNjGxxS2ZArWAps3bSECLSVEiw1NUT",
  "key8": "5RDxGthTFBU5qWEtutR86h6fzjhrYbyEhgfcyqJVwwf4bmhG6W4XqhXWDT9Zv3wJBFExXtrYePZnAxSAmfA3SfDX",
  "key9": "4A63DJ6nApdcP2D1MoX8wADBwCv2uHqfBB6pDCwpfzNFKD7AwB18ntxhn4jab7iPBVhHkD36dLeT5n3ufrYAPtKz",
  "key10": "4QXyRFCe5oL179wk7oYySiMRn2ra9S8YwfJ7GWmFypehAkcXWCps3wLTt6zrhBF4fYdD74Ty96ZE6YxVyS1w8oP3",
  "key11": "VV2pmQHy9QnRrUMNXPBqXgGqTPmoHk3ic4m7hRZKnACMPAUjE7GPh1rkNnXSkDBdj82uydVUaGEkJabJN6zWPNg",
  "key12": "2h2JgAejXP778voPWYwnYua2CnSj56WdoWDxYyVGFGNS8SjztdiMdSsJeycGffPiwaXGAE9uPt6cxLF2RjeMUCB1",
  "key13": "2oMwB34KZ87aWPjvarWWHvau7cEBUrMumnn5CEVKpX3RnWsabWYLoPeQ8BukT2xE1H9X8kS21a8b6c1szmiR2b4P",
  "key14": "26nzHn7ZP78CEQDaM6uyTD3UfCvo485b7UJhKvpAQocSn2AYXZcknCdJJpNG8XkyjNhLnpcaYb2fxUH5dVMzMUXi",
  "key15": "5RuWdNkNXkxK4UuCGzXTHRnB51TEDC3LiHCAoKZ3DyeRPfgVeF8iGeRonn3K4J7PaKYkEUweY4RhQ71brS31JrUS",
  "key16": "4DJthGCLULsxSXUdbQ6UPazgfVhkCcAF22dQc8U6ojLynWF26wpM8QqQBdRMGqqiSr2kD9cxD9dTSH8KeDtEEkis",
  "key17": "5E3wobcnoNumKF7xsJbqb7oUGuBT1ZyM7gVa51DEGg1xnvz1YQTSXHACJrHCBz2gPnsiDhTYaEQ7tR44kjG1M6kp",
  "key18": "3xixVehiMUA5iJRn6oxdS55rxLBcwo1LvxGYPR16jYigSh8yptYm4QKgMcmb6xdt597JqWjSmdQm5CGcHh1fnJQ6",
  "key19": "4HDqA7LuDVneeLYnqqgvhwuYqRCXi7MxkkiHNLTMVe5bRAYwCXgKNj8zUVUm87K1eDaZA1qfsLzMvhweYrpaqsiC",
  "key20": "qhMiNNZQjgXqdN9R1eNcDDC1MDfPg6uVQ1SRatB2QVXfaw9A7PKWcX26KvMCCsf8yvcxbUYyGrfVg1RcTKqPwu2",
  "key21": "59LFvcZe3go8FArdkNpd99bpBwQBi5UP3yGiKyU5Ks8739bFntAYAK9i9v7ePZWvP3aDxXF4XgSjJfWMcfB4uKXX",
  "key22": "u26iYekhNLGxKoADp1Rz2uUoK1zw6CKRYrtkDR6TRasjS8JaxD3a72sJGSGXW9EwaAQ1K8hoSgWND2Gqmz6vjw5",
  "key23": "487qNziHsqUGZQEHAvVnnmt75vswfvVSatc9AQJHtapAfCVm7NyJP8zcrJfCCVAgcRiw8GQT5zmZ6xWW4PUNiNGj",
  "key24": "3QtB7gKE4nmgd2Lj9jQYWRjxEtP7Nha7ZerMsLg8GS4hCTDetzEXcTL3FJVZnkf9mfEwjTko8T5SjJm1vi7gFG5q",
  "key25": "42VS3T5hHteBRVC7wUueV2byNS37KKij9KmNwrCgQ8epzvsjMbFxt2USDkiFiCDWreBtxoSSV5X5kevvtqEVhh8K",
  "key26": "3mAi77KJLGEMzdpv1v78KKfH9c9CNSfQCv6s9MMaKL4Gr7Gpe7sn3iYtMQSQC9LLLy3N6SMRvfJ8HGmd56NTfk84",
  "key27": "3TYuvb5SzbbJCtCZrnfLv265iHxFoCApCWQqFkt7wcVuCzzSmPkEok3zFFm336o1PJJAxcprgfubAwanMZb6s6jJ",
  "key28": "545uEyv83qZGe2ABPFHT5khiwA9GpvpGMQWHwrWCWuGwkRUbD2XZmYkMUmkBzXjneiqxh4Sww918Ygsa3YKNqeDT",
  "key29": "5fZ7P2URPtF9td1VgiwAjz6i3rYM3t8GYHpy2CnEWaRgy6ZZSnXph1wAudFjVBCR5mCfJn4Cq8HgAD2bqjx3pXy",
  "key30": "CMAnuWAQ6Uh8WqAD7p8CBeUz5XEPZySYo1zoGYeguMzp658QbhRnPRVifdHfuJs9uZTznZVptTvRQ4DbsStUJLZ",
  "key31": "iX8pB7d2jNLw8pHFefLT2z3QzLbo9cU9w3XuZPs1nUdrA5UaP9yckreMJ2X1ijnu2MmwycSFJoH89GQAJEhwrjA",
  "key32": "rsQLPFXuVNRpiDBZkvfnUgzkMzLmvSf3ZajrjGk4JrMGSYDKLXSUmxRyUzC787d7Uzp71guUjFcQnZF93Ja3rzd",
  "key33": "3DadpRWDwE4KrETkTXUAUHLteF8buuwhpr1EavUW6CUHV8Dra95gCH7PGfAX6kMeqa3gEjFT9PkvbKyvLx2CL8Hw",
  "key34": "2P2DkxuT6DcMJsmkPrHc1bTPyq7iTXkD7raw6DxTz3e63nPhXYkZuFEH86ZaqbMxoA43WJ36oVQV1eTjRDTPW9sT",
  "key35": "5MSMQa2SrFWmFXj2Er7zsoUZbfhH8E6PnoS4uza8BKcqARdzXynPF3urAMVE6EaPfTbDRM4uCokB3ApTc1Vfjnhh",
  "key36": "281uxeZLTfm4Nxo2T3jq1krimRatviXDeXv8Z6a52LzVGJyCvS8aX4M2XrhzgntHfPzJLB22i3B7PKzVTRNoFjcp",
  "key37": "5NnkCn7eWF68WLMSjpDXZH3bYQh4qPv71nju1AsPbeqkkRMdeB5sWEvrByCQUkh7EjCqqJyx4YfsJS6K6nHF1xF6",
  "key38": "5uySCuH6ckuTs9Cs8wWGyKwz1Ab9HRamxjAT1kR821HCiwtGB6md8AZX1Jzs892DY5ZrwjarQKTquEZhZbL3HYbn",
  "key39": "4Vh98HWi4cvpYqdBRXTwVuGLNBU1JPBJSu93VaMR6XR8JgDpYqRK7xt5QPzd8VJBQLXMEegbtJKJRaHGk48WYy2F",
  "key40": "57HmioP5UKjinCK876jdoMUj8vy442uRajbk8wBUnKbYpXmaP7mTwoVvfr4uqPzWFnAJk1q8pW9VT8WmoAJNLXjZ",
  "key41": "4XrpdWcZEUMFcPLgUHdfSGi5nYz45Sg5TCb4YpJQGoVtHN5CN39PvuiwGPb41BxB7KDBKTVrSWiRVVNzFLaU4dWA",
  "key42": "28RCdRhmQcoVin9nAPvzcRKorsqGqHoYcora1aaCSZ27P2tQk5J1f7fpAFo4gMRLX6dpQ1ZJntdMoDmTiD3ak2Fz",
  "key43": "pSarbnGCFgRDqc4UPcrEU2hxgeWo2M1o3SkA3UuT87wVCF5x62rzzdcFsAZsxT6KAnHTtkuFfsqVLoDq5e8bmgR",
  "key44": "3cReBVDM1MWBZe2TbvYuK9RqzjPFm23yUahe2ZLSLwoS7wVjVarPW41ywfXqsLywe6ust9LNriZUtWfD2ksfW15Y",
  "key45": "2HY7EWDThKk9cB9sBXFXWC6eEEmTd5DUTvkZcypHMPzdMJdU9WofUYdEco3XWP7c6rYBWvSqJzbH3pcNwUt9ogfJ",
  "key46": "3T9zKJ1MXZWDLXavywno5aoVRuxVYH9RycZUQn3GAi1Y9dAVJtALMMfHJo3VZWo7xaZKRFe8PFEcHkhmNR7qsegd",
  "key47": "5tsjZt7TRbqFBwXnJj3fNvTFJqw2oQ8w66YWiUcpm7dHxBoPN5Q4zNtdy2AvDzhoJhgEDWsMDsSSDbn2ddeFj1q5"
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
