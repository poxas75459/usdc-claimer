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
    "2Fmttx3HdXNuiJw8f7mf9dUWGcpZjMgAH9nr4Y5prhaWPsEudeDsSgZXLHnjgJHWutMmv5duWdgyPGCCAh8g3pJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRpxmQMUYAawsmJnAFZ8Y3cUwEVhLNpXzEoMPg1CV1FfVLkBrd51d8RPhXdunja59CbeMBRJ3pfvBYZ5ixNH39m",
  "key1": "3gdpWXDqB2UvLoTY4HdpyHvF6NvWgMbw4f7jpZtAFcEGiBhrvREwfk4vWWiejvFvFCjdYx6MoL1Py2Umk3AGTxAm",
  "key2": "KtDDJGYXdTxrAg7AyNy3u8VPgtvti8iFNLGDTz8ZygYJini828bMJdUWvGF1hLw9fF5VpG58byT8dXkf4kU9SnF",
  "key3": "3p3DGLtdJXmxDJbydYWtZEEh5i36ZUAYPsspswkBG7fHP8HMB1yT2yPPo1HznYerhH9GEuZmpayzKR3uGqfZc8mr",
  "key4": "616kfC76zJSVavv3rDpLa3YCP2FPP7JfbrLvcfqKAHWGSSzQ2eshzBmPcChcZh5w82rVM8Veb3RRnTQWeaPJYter",
  "key5": "2uUQEVyhkfpUgHCoDzCJuTQzhQRtCrpFgevFgdM2bsEac8LTWtmcrG9g1NLaYjzfR6j5iLe1qSXkGWcsAzqeHk3d",
  "key6": "5RUNoSVrdix1FbqKzPBirAnWcUt2ZZzT9CYyXnnWo3eLnZdTJGLsGaWfoj44Cp3J4NMRxDuTQmADt4bwRosrYRnJ",
  "key7": "45ZSNF3wEi5JR3rGJPApuppdj2k6Decc2Fn5shaF925BLJjU6QHvcMq3f4JwYaUpghoMGmVpEdi6Uh8uUdmjyvyH",
  "key8": "Ph3vQvr7AShFnPXGw5GgNLLQBFiqvwVkUqWdBF5CFpnNFeAjfCp54JeLqTUje3CCipXN876SQZnUHzVTsCajHiQ",
  "key9": "2AtsbxA38ZYFdYZobzsBbQAjKttHUSdAapzG62srhXCzNSSK7sbdesVd418xa9JmG747WkiYqwDBDtsVSAAUcZMV",
  "key10": "3aAAByu47r7kcWYkqnoo2cvojhgSkNZXVNzxodDzbR9VEtZX4ArEASb9wuzMNgMbsDU456eQJL7gyjS3eCyM2w1x",
  "key11": "63GBaGcKqbPi2s2wwuQ6VgYtyEiem9tcwytLnDwwkNpz8bRQifKKBN4uWHu6non4b5UCc2NQPGi7smQiLLa77cYP",
  "key12": "5XPqkQjXjsWrguhPyAkGyE9KUdKs3GMegpVgUWnnXLR9oWMjZKRg2FdF1NC9vGRRkLGc2Loxe9avW8SDYXY4M1vi",
  "key13": "2g5X3VMp3eKRqMsZzPi8pa1VR9wmYnhJSGRGiYuh5x7DZUB6HxpCiJyuFq43s5sFxEtuT5Tpjqpa6bvgCtMwkkKR",
  "key14": "KrnzG4DuzhA1CWmB3zAYmYcKB98BEnGQ5oy6YoXHYpNZDqFpUHDBJfsJFEXAoEHu16YgKBVT5xhpCDrkGSZBUCU",
  "key15": "5gAFceTd9JHz77jNyseLesMhHZGFYAi9aPvAf3dzND4jjAVfvgCjmm6gEzhokzNUkRCJtXKmCCikciRyEN4Ud2Xg",
  "key16": "4KsosCtE3DVjArKkSx8dSk9zroyMU7nmsrST9DXFZdE5xoVv2jKqoGBWXQkprhc87t3CqY4snXe53zjygJANSgPG",
  "key17": "3HQMma2xNsj537LhLxhQa8h7snyVuZxt1sTS57gJDfQH7N9p1nxPfbWKVFbQg594WpTQbvmww7GKQs5JdLckNF9F",
  "key18": "2MhiNShLNgxSQrrSxeVjJZzwKEvf6PywqL5wo5ZeH4TfqvCfRJnb3LAkPKcYDSqG2zr2Q21RvCAWK33Xz3v924aA",
  "key19": "2wrgaYimKv2AKLYUm52c7ELE9VooDN1DZbxnRKuuhzitfZn4HfDpWaSF3efDioFRjQCRk6mgvAgJxcNicVsZjSoy",
  "key20": "3ChRX2t3MfjAtAqe4rXu9PyCGUEc3tybyYGpaz738dCwKftQ2biFeY91oo5ZRfYcTQfZzPvqEqR7RbGPib7TsPA7",
  "key21": "3WybfNxAmUWka65ChKFrd5oaxBk4TkhEN5NL6T29rPBE9ucDfxuhXBoShEB2tbGpA9Z2y6hgGghSYuRTQs1yGUtr",
  "key22": "4qE5rEGNaYwwATVrtT9BLt3AkSeigYJFrC5VPPRQfAE7HM5rKWyHBzjoCr3mcxfZstAYfTqU3R6AtvAiDFDxyXk6",
  "key23": "bTRL8PaZH5cYFjKpgA8LaWVsKvaJVY3BhmpMUzNdhNGx1ubFj4b29axieYB8exrf5TapWSfMKmBR9UL1dA5vRDL",
  "key24": "2KtW2HHWpcdFrifFCp3aP7qPaeEgwKUKBauHWcZCzu66E6WWVVQcSRG6bRTENda4tFuSx4vyStw2CXSxdBp7hUpM",
  "key25": "5wVt7gV7q67eXLQFVHCCXNiiZFBPZtU7CnnSGBiUNUteU8HdYyEGhDgEjDu2TzvHB6KrMVFAb8qSuk3RryKaemro",
  "key26": "4qSqMC9LBE1bivMySKLn7ZfHL2whF2TBy8EGRq9Zxc8Z79vM6Z63LE9mPJ9oAvXNXA83g5EAn8m1rTMAvMb2QwzR",
  "key27": "3ok27PwowkyqDQQCQjGDwz3xj6ECiNm7zDt2xoGT6wZhYrvMM1ZGJfzUekcJQXPPnNXE5oYHQEhCvFGVZuZHTziP",
  "key28": "3837XXLZcRVCUg5DrUFGEnSgeoeeMDLKaj5mVpU3GGzBEsCgzknyruzVADGNu5CkFHVzZFbaSeAcFtpK7HTW2uUB",
  "key29": "M9YM1RxpNgXAXq2R6tu6bnhm64JTZXmXkDRGfNjE9JTeFQcz3LpFdDrY5PB7EQdTKwkCoycx9WLXojFAJ1AfiXU",
  "key30": "3dBJs9W6qsMDsiy4f9UrhKPicFW1GMc1dQiZXDyY31PvpVA7UPSu3sqpYkxuRJ4uTNfiTikktfoZgMzykwLT3byV",
  "key31": "33yTqBLyPAQSJcQADB6hhETa7dT8u3yUW8Jv6rVm8LaNKsFoqVgdVVwwriTafehEreKdUXvNTZ42XrLwaHox9bXm",
  "key32": "4aKM87cDGV1FTgfmiAWoUN2LQEfsG9jmeDDBSPySDPwvpLS18eJNJiGWQXTv83xn6V6XQsVMRTUzfThUChf9rEcw",
  "key33": "LYdQpcowVuXFgn4mVjYBeojAeMzRCQXfDzWshkSmuWk9rM6DpvyKkL6Nd185vWN9AnoJ3kTt6Dknbd7RKoh8etR",
  "key34": "4WMdEf8vAuxTN4CZULjp4jWfdfHdeN7fAy82UatNLGLmHoKVSaHjAZiowt4WRAadXBDgu8XqQD5p9rK8SF5Krt7x",
  "key35": "34UAuBmk99Vs6sp3XD5sRR7VeDqCaVjHM3YMswknWkYGPvFYv3hKACZU7xdtvYdMnfnoYEqwP2G1wrttKLAQN7kr",
  "key36": "4ymLhXa6697J2XKCq8C46h2TBXFjo8XXf5NrQTnevHuMBMxY4BR1E4if614N1G8RGQcSyMJ9kdy5HuB13Gzp8Ev9",
  "key37": "4WotGfNf2w44rDDXC9hmjwYRLnqeQJ2vGdRFpT6ZrgsqgDhF6TvzfKKojbyphgA7Zbn3Wg7buDMAZj5xTnWDwqnn",
  "key38": "5RNo89BHFiv9XLYsgVZBMR6NnCTZNRLSWW6k5VAN2kW7q6ugw7kkpZdhHBM4ucgJ9W5mvQGBRo6YxujEuijpbUDr",
  "key39": "2zG8cuNCmwiYdTuvZFCFVNQ3jG97Pwp3PiFTwUKRWaS55ASx5JRXrvCnM8eebvKXrKyqghMfs2pHBQJJf8UyHaVc",
  "key40": "3VS2PSuhVK5vNzauf9jXqA2w4DJC356V1xkgtg7Ne3YgDEYdUQgAGBrEBM1RQdEcdw9D7QEx4mMXDG5qqTHY53Qm"
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
