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
    "2mPUMjezwK8XcSuJZhDAeHd8nwAWMTKgAcv1TKp8reHf2EeXwNXeDvemXBh9xDjuCwpH7T3SA9NZuAH6BUHL5Y4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p7nHXFcn9orEp3t5YR16Ho36WN2emuup3Scc1Bs1BjrzWgadCGvZDDYZdfrFmHfRrkMdbRXjk9UrGkTGN2bPK5t",
  "key1": "3hyuUDP4G2xA19mgsEPYcgEeFFyn6a7a8yXP6XkfNr789xcrYuRBrYwbeL5j7QJGsDRwvuqkAbdicvBTwNhA3Xjm",
  "key2": "RX1PbeqLkuLJ2NTMQDH7LBBveY13urqjbUQE9MHcTmVvB6LgJ2Qpxa9MxuVLkAGvQMKyGu9VEyw8NeJYQxSFcuS",
  "key3": "2fouzc8VxZ41xPMpqTcdupSGbhHo7MNTfU3hPMcnKvY6wBAEsnSAmW93gM2ZNMqaxoXn8d9RHfcbpPjkzAUV5efu",
  "key4": "2ECqF67y5PhP7iSyGaKsvkMQFnPKk7CuHA9Py4yc8CX1UxPsSdEnHsADSP1EW1A9XefuHE92sN8HZFpTtmUjJ2ep",
  "key5": "61HAkdxuWxwNSfWnEyAZsbLZNB37KFxgdT2ddNRdK3FSY2RD7Wt4Fc7y7EfKqvEWtQw1C7x61ZZLe4miyAF7yUKb",
  "key6": "3BUDcZcqQoX6SLNh7MUCpZCxyDwUT9bGR2iMiVNUA8xMS28EybDa6VeyQ9CvBuPfYh5mzPJNeu8wEEQ2WoXnD7mu",
  "key7": "2hmrPs8fC4sb6hVx76e7t2EWvcfbrNHaz3FNk6FMzyK64szE5FeQmqkGb9jdFhV5wqhanhSs88EhFtG2meZwV9yh",
  "key8": "5G59hAbcw2JUYmBbnFPdcZ6adWApoM5ft34Vyi5g3hEqKXY6uwMeCRohTEoucPRpkPeegVya7HgpW2Y7s4wEWcxk",
  "key9": "3vTzoGCYiUwayDJ8B3LJJu9oJAUHGntA7A9gefDz4Q2epVvsV384AuVsGkwdYo69kuMtCzfyv3Fu21JVBvBNzFCe",
  "key10": "2wZB2nm5pB4FBp3CfUQxeYtdoDZP2VFrgM1u1Yc7xgtAsKX5R2ymRdWZykrwpbWKuHmFrM4MJFc9i739e8PmpSQ2",
  "key11": "1tHj6YxBTCvfs8XbtXKBseP8VeDGrjtchDTwzCUCXS83nCZwu1Q3se4Hya5KTnV6mkcnG5vWRbAnNj7vEke8Czr",
  "key12": "mpFW24YSsqtP1pvYAsmNPSTwec4GqYx4ErWbkEv9rHbZ6LK1vHoFjWF3hiynAai1dwsZ8VTs4tKobj3mJa6n8qe",
  "key13": "2tq6eo3DaPUuPfgkSXkiyWLnXfKhbBB2G7J6oKvjoMUbCWaspwJFwAnsWjL6KQdu1wdgvdZ4mXn3nGZNiG5ByGML",
  "key14": "fuZf92zYeNDqWibRgVVZeJmM7ZcGz6zwnf1rQxodut6f3WHvk2smSS2i47ZjFkBXTpRE34Wm8EG9fQsKA5rynom",
  "key15": "3iWb7skGcrsaypxADrNz9mvjFmQ7n8gHiwr5wEp48xtr4vkPWKWT7bE3Ys2HLQGAmUwsmHMqp9yA2tRRvuziwQDn",
  "key16": "4qCdzr5bxSn2NY4CMmg8kJahuU2j5z3gvDcP61DJ9MXQUNWKvtmaMpqoZRAzsXmD2wNxpv7N6nBimLGFtBLnRDh2",
  "key17": "4chGr4BJsBk1629neBZ8Vk2KwfpF2UEcgAU8tmsdjXKvuFLEa34SUQxPaLywJ5RHyjS8iEqC3Vt6B8qZ5HicfHjo",
  "key18": "4ERy8MBmWsHP3tjgJu2qQDRydfyMqitttJ5JNvxJScNy2DxYAcKRsPrwcdvfaL26kvCEiVWxnZf7v1S7xE14epTF",
  "key19": "4y3VzUg33QdWMPdCHG3JpjGsGPnXobL6Tp8Ye4rXGpwvtdF2kbELhxWfQ4gyqfJ7m4Wjg81GJydvL5D21wyeK4m5",
  "key20": "2g3SaPgAWhPkVPLKqFQES4ugAHSoGH7chKNiYgriWmxgx2y8Bx9r3tYaSoiPXcRWhWBRsL1mKsSJJe73Lc5JaLiX",
  "key21": "T1cikXfifL7q6uE9ELidyPUoG5pw4CyfxAEyBVcfj8WeZwNYypuZtvXUqyXbEn95DKM2pJK6dPxpUQchTgvyNk9",
  "key22": "3iMNifvPHtBuAeGLDhpjn6S8gq6FwaYXTb6zN5abUYhgvHhgspV3QzFMviWUurKnGP9aUS5D7MMa4dwihL7xsbzv",
  "key23": "36SxcxqMsb4yzsrEpnryP2iXT3ri35oheMpBDjDHczMXvum1aQiQNvShNf9owumCvD9xAwHDpihYgiM84roETn86",
  "key24": "5nthMvKEbKaBfq2iYfnTe5Uh7eC9oawhxvUSaPARu7Qg17MZC8hrTTEsiJjxrKZFA2gqLCGcxWf3m6aYHJcuzryq",
  "key25": "3zAiYSnWUsCXEASipui3LLzxVvjrq9yMpShSdcedTvhYpNVRRSJJAdCd4nGMD8vZasxRV2YDpTKECweSyKkgZnhF",
  "key26": "2WibaPzrS47qnMyjFARCFCuu7jKvSiHymMyChA5hCRWhKRRWY9zTEjKnYcKwx65svtALMoRdQkxXuZ7UEtVSGe1p",
  "key27": "VvDpuZGdR34ZUhqhQUrPmeeEqAy3YrzXka68enkEH8q1gPiCLEgdeamnqhTJZx4pD36jYYX68Wr5mhvzakccoNa",
  "key28": "3zw22c7u3qVyXGZ68MELPMR8yN28R5zNgHFKxCoCHtWVUPK4puhACTAdzQfmykbiY64DSK112sKuZbKhWpMdDL8G",
  "key29": "41u5hq6tepYZqE9DgJj4VsxsNf6fV4DJVWgcuB2YL1QcHc5DUKhLKgHCDaiLEj8VSeEY7Eb4p27CCHGiZNR7d2Uu",
  "key30": "36oFd7QKupVNvMSRGxKBFn4CMpCuYxMhcdnaw7b4tUfVmiocsgKp6M9GgAdpuEHuM4Rb4cxFGeBYSy8wU8KVPQxN",
  "key31": "bGukq4Mfv5SXY2ViXWim5voQkNMJ9ozx8rtrzx4YyBxrGxVUufcAzkTKjDESCT53vkEM9Tc9L5acvA5DkYNZvdq",
  "key32": "3c51JfTdRK4SQTcaR2Lqqy4sGdYzVmwRKQqEQcvAphdbuZtFz6AiRadLghKJ1YyFxJq8zyntLvZbYx47KRobnuCo"
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
