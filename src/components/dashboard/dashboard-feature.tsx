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
    "4g3cT4Syj4DdPWS7yLB9RERkdTwwfwu4DNsoEabjSQ8nrNSVVi5HKqCaiwyBvtbWhjCfYPma3GLYYvXkX8RRS1v6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNt3vx7ZogQV23YAR1jXgjokyCCWyxcri29oNqUVe41EZWhxcdoUXuXH9r9AiutYW6J4ckcYgkiEiPAsPmXqGr1",
  "key1": "4Q3SMGa7BuiwiguVH5c2Vfz6UVrLBKSFVPaCSn6WXAG8pmDzCuLzJtcqrhPdiCsmLZLcUvg8QHJAg7teVCmdYjHJ",
  "key2": "hE7egehtpXKueSWU5njDGEK9hmanv9XkT1ft5MJw3LwtXn8AuyinHCDdAatXXXe4Gzst4fE4YLw1bVvr7Rd7xyX",
  "key3": "3aoj1QLiYAz1ketdNX7ddi5V3eFekczCjh4SohVm5E6kEVu8WcVmgQT2zWkc7w84n9rq5MSQXb6S5A8G4G5qRmHN",
  "key4": "3XhFH1uC954HkN789tH8VdoYgKBJnomNXBF9Z6LiAMkPN5yTJrYggY7gtweqSB6KsgoVbKtgTuvNXtE1DmPMzubv",
  "key5": "3AWWuNdg52avWU2nLgMExYNa2oujdr2f7yfNdQ9E3MgRnQjCUeSwdUUk5VxD43R7qrqoJhj8RwCrpjtJSNtgqJVH",
  "key6": "5Y4mUFRj3txdqheuGdiMYwiMz5GisNFugRo2rW3fNu7QGFdsbfPUQgML8NB3rJYYCPpYno6oLJ2Q81ZodJZqKyMz",
  "key7": "26x4kjRSHgPjCNtbkii1u3TFRnG1B8oWcAJQVLRMsvf8dYdzDRCf9YcRerf3BYqypGH6399X2NJQKnNg9DWQgDnU",
  "key8": "2e5TYB6pMmwGH9FyiKaBRQHS4zF4rEuSkRzEgWq9pQns99iWnzcWv6kh6JiijvgP7YdNUDeDgeVFd9toiJQwoJAX",
  "key9": "5kwDnT7U14G35QC4g5xS6kQFs7LRaWhM9BNDhJwiyZX6LbJER6h53zWZ6gP4r99qU2igGCJYMe76ANCkkWpEzXQt",
  "key10": "wPyyiq8pLrdVmcvMkzqfgp3s366WF9sdFJqMRb1cir6PkvzuuiQ5mW8F5XXLQHX6yLBFnGfLHyVbDxPbhzKxuA7",
  "key11": "5QWxF1pFdbhbrBrZXTuRQxNphVETwWDJe3AY9XD1GdaLa93CV5XN571iX97Dv5ox1zo15kSfwsYbkt7hSiRGsLes",
  "key12": "5GLrVNsEyKTkVwg36xqqYjqiydMvDLAqz3cyFY4pjw1qzbn3y1kjY4vcquXZSpPEPd5XxAjD77Fa4HhMKYTU76QQ",
  "key13": "4PqDy6eefdZgErE8ELy5vPo8MBuzpo1Uj88EMSqdCL6NuqaPDGLmdEWM9kAXJB8Hj2iKAQNik9cNtYeHMTJqruCM",
  "key14": "5qNsC84zVjTWWYmRBuuzrQYH9FgD8mBDk8JquN8RpabxQTHLfHsVkd9XrwSGZv5a1H2icUkMXiMDpSroRuXZhYGs",
  "key15": "4M5vAZquSJDCQbaMYcz3BuhrqypGaE24qefso1mGeNt3o4wC45dkYMT8tGUMHtHe5t9DZezpmoYjmHzfAWBCi7q4",
  "key16": "53ytREfU1TmRGeUHHpF3eTDbSZ81KNj2cEXQ3QocokNTcAYEDw45VJg82SivrVMkq73M948y4JdVKB9HM4Go2LbQ",
  "key17": "5F4AqrX682jmtuiFYG4xNb8mWArGKmSGcx5idyHTh5Z4mqGT7tmRe3ed4uFxXb1BNmvo1qKUYwPtTSzJgXXXb7gv",
  "key18": "4qxCVZiRHX1XBscfVKssA8H5pwNkBCJNZSA8kXu1zf1R7BRr94hHqjQkX9U6GvnfL3G9qqTcrwsAvBCEjKgvPTW7",
  "key19": "4QaxYEK6AFubymj2rGYLuaA1yEntRvVE4DyhprLgSsJZyrDZxYhNNVbpybjUw8HnFgAUKiHaxq71EvUnj24cwDkr",
  "key20": "23EqLuaHXs8CAHsz5Lo2aNUKEdQ7FwAZmHjjDXdR1dcwB7nHWPGyfX6givfkAiHPkeFwZeSB1FZcNMK1bhBP9Gus",
  "key21": "3RxSC7dG688KmN5H7VC6Y29jwNSAaDEQKeJvLNArai7C66c8cYVTTacyr7nxy519aUR9CQdrcEjbHnpScaoxqBnw",
  "key22": "2STLue2E5k4wncYAiGTjoYiEGuk6y8WRFxuMVR2HsZ6t9xsNxsfbJEnhXB7NLfB4RTu9VGMXXsBmuvwqzedSFDjp",
  "key23": "3dHvZvCSMdpm8QjDeE863CmALqy8SfeRFwq2rJ8zoWckPvD68QV11a3JCLJpZ6fGhspX1G7vzVu9fwS8zzsNZWCj",
  "key24": "nWXGyMJiwFATkUAbpSn2ck2WtkTVjmpdvA57CKLdSfzaLAwDUeMzNiJywsv2HRY6KeykAseiwSMVyKs1EMxa4Pw",
  "key25": "5c3o7GaCbyCch9p94F9hbi4hCG9nSQYvzFSUjJAqbAs7aUBnHMkokUMcBMQ6412aZWefcuxjuRqikDhMtCtcVP3F",
  "key26": "55GkC6C5JfT6tpnYmzRUoNdw3LRisYQrnAcwr3tujtj2xvtiWU9VXe6kwVYzR4YASu6c1Z8EuoNht9skSCtSK8xq",
  "key27": "3QZfxFuSHRv4Udn1CmgUdARfCiSFgpi9nQ1D4gy4ThVh2SmGKSehvPsAJaf1rQKhVrVTCHcDQS6vL9hPrkhaeHqo",
  "key28": "2dVKQHtFLq8UmGW4a9aSqXUSCmqeehzVEu35vcdwGmSgovYDVZUGVQoEjqFNrroZAmHVVtnUT51cZh6hWDYWBxEe",
  "key29": "3kYHoqN642JPm8APAw5n53DvMmcE7CcQTBk92ezNbubY7yXq5bQ43U9whdLRTyjnsiFHBb9oZL34E5vkN9i9wS8g",
  "key30": "2qerTYCj9BefSwrHNKNuDUz3gPym6qivF4tV8hwYCvCBE7oeLWGEFQjum5RtnHWx4GTW9r6MkrkbKge493ZW7G9X",
  "key31": "3UA2xYSPK6mQycJffH3nnm6cvAsbLAzqPa2zdFxApcLHQADFbsbo6v2SPLKkpUUWpfBAaYuMBHWk34aKSoCSRbmh",
  "key32": "59Bee5BZJnn61zYqifctAVpy2VJ3S3yDvBAmmkHJo1krAEWHRfhdxStP3v5omkTrq3uXvYxq9o6NyRuMuS7oP4dV",
  "key33": "zsgxUywS4QXtro7uJZXK5Bcazdt4d218scZ9fQXY1j8Nh6BibrDC5RBusZ8tRMwtZYNsqWnC247GhsUrwGSzSEY",
  "key34": "23dAywDLnx5Un8V5iPu1YrSRUrbiaQydtUZpFD6tpFSfaLhzpAoypgPWzweEoH9Qi8eCCmJxuAjoMxu6irfyTcdf",
  "key35": "7ziuE7VVcksmV4LvdQVbGtVBBMNREccDQifzHFPDRd9oPE6me8BF1oQnQkg9zBV7Ch5zj7ZmfMUg5tmUMPYuAv3",
  "key36": "2gr5mDy6aPijiR3WN5a8aHsVUCbMrH3NVFYM9Hz9xEN2rCZFXzjoV6tsbxQScv34dVXKg6bQ23gbkyHrL7ivf17m",
  "key37": "2w6h3j7vh75jaqsmTLjFGLMrH7qut55FysYf4SbpqDruDokGMGvKw7Pq9AH2EsuUThCcbNTzpBVYoxd1485gxaYo",
  "key38": "2FzuaogUt5jJr6bgWPud5YfuQ1NyiyoXFGymb6jBbEF7p8ruGwS5draTkt1hKMXuo8Ha6ihhLM7Ucoxs3MtiXnAb",
  "key39": "5wgJ6hsGmrCdcV4HTTqJtRDaPKeRK4K1jCC8bLPowwY6jMs9sm5wJsZu4449ZCzW1w6DQkDbxRzknjTzBNYz2z4F",
  "key40": "3w5JNJrBBznvq9Xt6vh775paEKDEzoktDsZGKYjNuEhoKgzCE1b35efqaDXYaq5P5yT6KeoxjTgJ3SFwVkf5wCPd",
  "key41": "5k6jTSo64M8VKCyBTS3ERbvFV1Fftw9DnS9Nix1RY7F2YsyLY547qHNWywMYFzBrB5DFMFRuCk7puHAg32jAvfnw",
  "key42": "4rT9cTjXu6sZnNop2CMQa8GYDDcy2Gbt5j3yzhtHan6HER6qjYYfEp3q6Hqq8Cz49dxZTVLH1k6fPzf5Fjf62G9",
  "key43": "3x6YffodErGG8kxNoSeiNiJ49tX1WHyqx1xQtG12Zh5ox3tiYgKwZasLPbBLWRjq6tVzMckXMjUS8T7unESy842Y",
  "key44": "3Bp5bCXj2FxyNEjCbN2RaU4zqzjDPihjf8dck58wgYe6u38dmKSoovAVnJHTAPEE2rRqhZqM3rDHFwWuMQe39faM",
  "key45": "4ksSjpuJn8nRdnfAC5RVQKQ9JGMX5y7anygF9kXCfViMBvrQ2KSJNEPy6xPdqj6qPZHQ8RRsckDqj882iKWVSgMy",
  "key46": "2eukTPEEZDQxrgkUGRqNTG6TkUZ6z631dA7MvVCPAFaV9FTRL8nAnoNJJUUbkqBNcx5PvqVtsmxUHjjog3Yh9wJF",
  "key47": "29XPBCgcqH5yChsU6e7zAefSo29GHN7PYHnuTnEXtecWqvaoKunC7sfsyFRQkFNEGQFMKUb4YUYB9nrwtS3b32B4",
  "key48": "28Bwz6WfDJzQFye4aTKi3dzVVaXKR6mXPzGuvKCoBs43xMWJ1cpTCATfiFuXoxTyxsHKarNKsyQ1965wiQLkMXww",
  "key49": "3Q1q2xaovGSnJcjVW52W3ojPursWscgMUP6o1uSXrK8u5YVaDzVNQKb1iXnb4gnmYDPLcHP6oJaxutPBrSRiFtXg"
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
