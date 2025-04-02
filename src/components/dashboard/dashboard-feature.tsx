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
    "hixRSTTzWDBpgJQciaqm4Une1kSaTicp8qzaDzcYftCKSCqntgwoxPGyoDSxMESFKN4VrTEms6d6zAdg99ZEvso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369pJtD2ajmNoRjBjKHGE44Gr6vjDkTGU3gd4ogzaq4dsEkk9JMPwYhDXuhQiA9sR7MHBEDMX3JPN8snRDd141yp",
  "key1": "3gVhfP3gUs8bL6mJZi4sQYJVagLHyajKhxymGPgMGTHQdTiRmiU1NGfN2pHN2GvMFCT5y43Qxxj5K2Z63Ta6DraX",
  "key2": "3fKq1yPdSTLsfghDp8FovazjGHu5K5ZmrJ5k4b77s9rvfBHZ9WuFVgZiyigzgZu6LykRi6322eRfr9abzLQoA9vm",
  "key3": "67qUVGM3C3KRoYkj2Try26NVyFVUnaQMndizVRwsfYzBX2qYbJXSwqvym4xYqfx9LngV3FoWFSQae5WGW3UZBpMC",
  "key4": "2zH5Y49QN5XZfwjCkHae5dSJcE1ViyPNsWe4WyHibb7JxwkNgpBtp3zPXBgoxhs6yaBZ7mLVV2cbcA9NepWmpyoc",
  "key5": "3QS2nScTkfR62kKCJaZzXc1fpKPt2kAxGXacSqumsHw2AMYJsXsMjgnEaHdzhH9TQjHNdURGR1VcoKHWsBMe3ryL",
  "key6": "2b7GpUoREThzToqS7vyLB6eG27zYXiHDNhWA1WktPn4WGRFh8uhejfkS1MUh3mGwHvVY4nATZk8R1pQyd7xVRMVG",
  "key7": "4zHnPK7vNgMYarZXroJmaL4oBGGvZAoVfYBYtyr5gwxTN4k3wG8LwuycMUaCzsirfv5bat6aWyqsbKxiaeJ3MoEe",
  "key8": "5JLQqRAo8VRd6fE4Ko5TYNuV7XK55Eeu9UJceDtVapQZNoBAW2qrbuLLWXQF3hWg6ftAxVMKdAUF3PEBQ9itR9vf",
  "key9": "5iZ96X9bXgoZTQBsbNbbp8CfP9pErbkHtpsjTRod7nEMpX32bSrSoA9Ez6YnpxaamCuinrW4YNqUcXoa3tASPiiL",
  "key10": "26DiQBMekgN1zcwxh8P2C7B8kaftqWBW8cGvr7QSdPoZbqrBX4GVkfUCvp6kwC9BSc9Row8kiqFx4qbvPg4qwJbA",
  "key11": "5jDEtCjb1kXAHN7AEhgqKMpPo2b8Sa6jBKXBvjcxcfVbpnuXDGSBEAx64jhDT1t3ajSgWTPuZBwn571FLWrJzieV",
  "key12": "46VpTwpbJV5cu66kyTqmudTxYhQu59f65jckM9NLuM6ntidc1EkhV4UC9ZZs6peQNsE7aZ4QrsAv4uwZ38a1Mdh7",
  "key13": "XAautvobQioJem5shNK1D3frtLGK2WT4fQDokRDzJ8EpXLPFaMVDzx9DZxXC8jFTsEsL48VcEkhV5KEwJZdihAw",
  "key14": "48NBYSyCdyWEWerbdt87er8s8FaYhng9eTnKJ2ykGEJxHWrFydnpowPE6v21bzFBTszMMTkgJeWrLYZ8fV1jr3jD",
  "key15": "2Uhj2rKaTtdzgsANYgkfRPiDDvdvx2whn95tHYEvtwckqyCz7k7tDvxnyTVfxE4nA5zv9mzTYfrxCJpcdCqzL5KF",
  "key16": "54fR9ZRw4nkdoiPqofdpdWqE3Hj38eoGNLMVzsiB3Qtzdy12URTPBbsLsNsDgfTVbnG3oWWneVdqzupkRFfL5fGf",
  "key17": "2XFddy2xMhV2RrT5JLEufiM7QkzasBnXyeqf2cFkHScBmd7gRvsi9NHcdsK42mNyQnuFF5hRjb9FUBeBm8ueCNGx",
  "key18": "3xVyVs9nyB7HevjsLgfco5S9wqdPj2REPYkvhumLitfwpwdMHiFGwtrhypNw6dajdQDrTkeqhzCSCN3L2QZqsKA",
  "key19": "34p88im5wt228RMAEVY6i8rY95RkkN7SVZuDb73nWpmRhAPDa7K7bnPW61dXELLNLseAHepHvjRuuHnx8DZct8au",
  "key20": "WrgoBH4djPL6hpNfGanrECkqv9f3bkRX4PbLcti6KEnDRjPWZ8Qzq1xtsFwtXpup5WTQ1rmFxUbvYebzecnL6Rp",
  "key21": "3CZoLTiTk9p5FRhrPqoTyf39eW5EnYFiY2Atg7VY8yohnSFrgXF7oYweAaZK6XsiZbPG1aH2eGFCqrnu7QB1Smzv",
  "key22": "5FDwVUYSkha2d8yLdG6LKdKeVaDceBnbGphtxnn9XJupX1cffRc6WENg28CCZBK1QTbTrmtEDZbHbxHvjHcGYvaG",
  "key23": "5cHZRh8fuykwjdbe1Fmw3ZLhjx9RaJ2we7rygxvW8vNLKs64ZPxS1869TDKo6nrm2zrEr1t6b8obowdJPwtVae9Q",
  "key24": "2b41r7ympZadCukhSgD3dSMvKPZPBeq4P2RxPjUnKd47XcqgWb7xYXXD4zSnJtQMMdUZCApJJZ5DBgqM1NdijnHN",
  "key25": "Fv8ihGwC4nL42LACjXvGahSS1JFpHZx4yA16xx6cpHWTGVRwfnc3RAGpMbBctwHmB8QEsX3k7WETe5wtETRCjLo",
  "key26": "ZJzt62s4FQMhzPhQBxd3K6TeRXogJ2mYNpMQ21udFQLCDUDm4SzLYrFdJ6YDvCCcwEGmzNxi99kvEaih1HwnmWJ",
  "key27": "2WgNHJSzqzaJ2QsgRi5KUqZpjXqwuEgRrnPF93xeLm4CZEXDnpma38MbJRJLEpKA1K9ZThDSLyGUG6xuLJhLiCFz",
  "key28": "26sFmrv81VYSZAJm7LfTaTyUhbKXneAAFC8SLhQ7wVb9KaDwZ7Azv9ysX59ukfEcuZodbcWj7XnGPo5JUhvEi5pC",
  "key29": "2mocPZuqGRQM4xMCh6SHzAetn4mFmRrV4qSkraDfLJkwuSxo3LRd3Z9KGHZoH4ryd454o2WeWmEAfgLJRT8gwj8z",
  "key30": "4B289MngqLYc7f2rbdXQUFpEoLzmGLTmACcVaPybPq3UveEWnMPbCfoJskkfUx3zRsSKUvNHBRpKdVPgeS2ee1ja",
  "key31": "39UJNxnMV8bMw1SZ86gspEteEgqQWhPAL5cFWpyrLvBYGieMLbHJQ8xN4yq4oUimbKMgqN9fy4pXbTJ8EFUaFrTX",
  "key32": "4VVAbKgtWHau8KwpvmoqqpvE8QXxzQ1HeAadpXswC5SZjjS5Y8pRpVzbEKcEnZMWGZbxZMSeTG6e87rj788sJjDU",
  "key33": "4bbXPfzLUtuYtDHYnaZD7PVUsCyQDxuJERz8FdGFQgFsLp2fHedmdDAQ5PdSkKfZjwJhmAMFBjKbamb2ZDKyftY7",
  "key34": "4emWHvioY29or3QZ36eWtijW5fu4Aty622h5Vr9XQukZfbydqYBb9jgQNi8Wo3kTe13ziNPZtYCZjGSqDU9qEt9N",
  "key35": "3sFj2GckwfKyXkPpnPMzPB4wzu4ASDb4rPEorF12o2R7vZwU3oMLTBeePg5az4sECViS6pR7kZdHhsUpo4ecVmjF",
  "key36": "4er2wiWiRbTjvqRht8m6gKgz1C7zKqqkWc4gZh1jXww7AmttwXaJUFqZSBZv9udtcHLKPvYgCL3ifxxgf8q4KbEZ",
  "key37": "457hBEj9R2CV5di52o1CbtKbkLqLAcDutVpCLpvyiM26UkUqSQao9wB86YnRX9mw2GeMn5igoXtEqtHGmFztgVCd",
  "key38": "4TrmUynUswfPQCXYqmuZiwzfDd4Jqmt5aAroddrDwg5WPdBejoSShkzzw64autuzMB7PqvibHkUwXmZU4WCFAdLT",
  "key39": "DU5YhgAKnK8vCctRFQui7uLy21NK4e4W3E4kTngDfZCHNfQ2QssdmDPcBexQ4hQC2jpFTyEF1VP6vuYoLLLUTB6",
  "key40": "2J52Lx7cW8WL3KELuJCfbX27A3SVaNekTkijCDY9qmpnpqymVn2vJRRijGxnm6KAWveXKiUZshjnUBRh1NC9B3wg",
  "key41": "4YnQf46cKWfc7cZB927fjDavcgEpbBzK8qXLrvUPUDKg29iqv14D5rrPQFaSa2XGoqWWCTVb6KATbFdvQ5hiTyaW"
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
