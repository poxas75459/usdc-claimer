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
    "3oq2si3PnyAAZgvA9tSDwyu3xny6vcprzLoriSNgcL8Vd7MMsX4GdP3bYkndNSjDgpndY8Z9wAVunF7FqQXTLUCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NGNhqRfuSs4fBb7dwqmjMNwZeyXJxVmSgpy8JTkaxgJ7tsyE1WarKGjeKaoFxmLvzV3dUPiykmmXitq7cKTJi5",
  "key1": "4xu6gMxgUZZG9NmCkM4kR3bSvZ3T8YaDuMyvX4ZFPySkJKaqhdFuXJx9swFtXoFJyt3ni2f8hmhyXHHkiQQtBkBj",
  "key2": "4BARW9uuc52i2Rm7w1cuDZAuJN1WF4d8gde4B9gTPXEvQwW6g8AwremoLpYTm1XJYogBrTkSjjEZKCH4pBAwYVjX",
  "key3": "4oa9AAgUWzudChektdyBBtrsvXdCZ6yYDQGrePZKg4PsB9R7RvLKzhdvL2BJrDWTc3WSsragquRPpcjtVnZUbcPa",
  "key4": "5powLu6DdmAUUiaDCCYyY195mUqgu1n1hnXjF5ZFUvjkzwwuPuRz4bmpTEfdt3LtuSxbuQ1JgvbZDgshMbXJqrEk",
  "key5": "3QnSGDzm4CY5YHZpmoMKhj35DkjbxttPAvSBvt1Tm9ftqbaasckErk2PyURdk6jVXRhYcK8qtDQ8CGWviduaNijA",
  "key6": "267EDiWSqxBJGRx9p8mTtKEj5Js8jdm7moHLyFkp9NF2fH6VwVwNSGGPgpXbFRRZNWkuLGZdBLqfWG76Gad2YYZv",
  "key7": "2MxvyVHiSwQLuV6dK4R2WHZCTWd8zyMp3r4khMKq7vJqxSLQ8Fq8qCsGLu6fmFKsan1RdmfoNA4YUznxTa9gcTsv",
  "key8": "4uDAeibqXHV33XYecozEpqBNDaJnRPPg8UfRafHPdX2sJiS9c3mEmmaWTuhFSczRizXsYeqdUxZTWyaj83SRQZW6",
  "key9": "4LNneBHGJNp6K8a3xxgHjR1QdetmUozxBWpgsr5DAccaWGbgcom6o2FRLBnazSMSZcjwAhXnqoYaojQu9xA2LPCW",
  "key10": "41TDFTGsABK1rpVs4zeiQt2CqpXZWcDHEghpUCkHosXq5Wj5YdmRFoZYDkD8bq1sL5vDJVinLCUjX8TM1J2rbhKY",
  "key11": "3AnByPyEDcEtFSXTK1e2iAPyui4gV2R4mcJznK5MWwCCQSDX3gEw7kGrwMzpbUqCM82rBvgoFdYkV5ApZq1zkU1p",
  "key12": "2Hzk2qB9iTAdAsZHcoZ9GvGCSdRiMnvX2t4uH1cSXZZvfKe9afuNbatab64EDaan9Cs1t1M7DdobwPafdiR2o5Ws",
  "key13": "39ozK7aNjibEm4SyUwxd59Y3Rq7gqmM6eRnSgmoE1KL7fWkRTJYWxfH5YsgxqetWhAgsRM6s1xGy3U12PrKqfz9w",
  "key14": "3MiKYXq1mg8RXQJkkhGoMwyN9nWD1RRcx2eezXLDcTY1iKyURygV274BvegmNKQeGdG82WnUxtqaKioAYxEmWrhJ",
  "key15": "6ugxEwbSeZoCmXvDh3urrcTPZRKK1xqzxGKy3QBG7NQqmAK92E8BYgXw2g1iHWzUaK56f6gdQyzE1bmPmnLuEZ6",
  "key16": "NsDQQbvKxdnGrAw3TBoDMwRkdZ4VwndmSd7GhAfiu13ZFvN9QVUuT2MjbxoRq66uYxA63uesuFtinhPSib1bPfg",
  "key17": "3hyprdrgsyFhFpfCKwMHrairJjsLZ457do3n4S12RHYG8BfU4qnMiCaWUYPrYdjuvUfzW9xroqgAQYHtfpPSG9Gm",
  "key18": "59vcww9THykXQnHXU2j9pSty3hvjz46TpZyHg2mSo8UHGfmFS1RQA4X5so7zGe9qxHKmtB49EumejpZCqyHzDf96",
  "key19": "36dfa2AwauK4KHS8zTWPmg6FT8ksYQk7nfqgQN6aWPnyZZqgqG6jixBSGukRoMKKfBLAa5D6H5aWR1wVH5da1VAm",
  "key20": "27GMMt8vU4sGZ3aXF3AWqXC149Mzk28BUDgkkAFx4hfd9TnE3GuoPdDDZvRE4MD25HStG16iqLCL6sCsuY4FYZQt",
  "key21": "YbnQCj9w1upbvBTH4nkZmR8UA9zmyWMkkWGaBuWtAN6XJMhGvtixVXGToWsjujUZaKkjjD5m7AykxmezwHDXAXx",
  "key22": "5RMZvUXakExjxMw1vgkuHNWZTKX19BBrHdinQaCZv6fDbacBxQVJndBvqf9KMA4J4B3qMC3gHFBtioAg7u88Sqt7",
  "key23": "4645LX2PiA7LXzmLkEjT3PkT9VSAZduqGC3PmyiRsxPpuuYfpgqPSzJZXKtNYdCzoyBsnt94wJb3mUaQpBJk4tbx",
  "key24": "4tGHUY8xKb8doFfuZmXmQnxFPbtWPzfJkhbPt1bVUgzfxKmuCeeiQvC5iTJummGtvTudkJLH5yvLWYJXm16z3HDW",
  "key25": "4CHnEnf2L7vDTMPWACAD3fDD1bzm43dSWychMvrrwZN1EWwGhTEghu88VXiuchDc7VS8fexKupejv16PsLrTwmwH",
  "key26": "5rLYmHF5dXXeWxiWA7jMoHemxsdQoE238rU4YeayyMr8Cy1Nfftpg54CazFoQ8pPuSS47irbUF59Eo7kbFqKE8xw",
  "key27": "4jYTnfJv7V4wGNsyepaUtL7AJAy9DHawuW2rMqQztmTbkGwf494gaFdDJp1xjLD9Cb5vPQa521jVVT9mxLyaf9tG",
  "key28": "3bLWTUTsZzxHfvLjCY8veWNVhx81F9MtYyYmaJzsaMqyBm5ropyV8fY2PTWfTm88oDAa6or1dpKmakzD2GscKWF2",
  "key29": "3cMAWgyrLP3xvmkdHyYLfYFmavJShMHdErsVx8DhCsay2T8gF4qLNmJwhMeA5UEqS3vT5UcaDrkoKExzEVMsi8Vp",
  "key30": "2YWagjjhcMcocXnUeCKFsxpXmD1LoXJLf69DqEXc151TrXLnpT2XzoVhZHzXt33uDBibpM8vvA8ABduruJBm5JfT",
  "key31": "3DTcWRp9GKy1sxM5yuLxatQwXMPTXXiGEch3j6Jxz13v9ccSM7vtro2zPpbwDDxZkvjS9gnrMAYd4Nm2ZMgVV3Fz",
  "key32": "3VaNMPK3dBeaqy9ocU7iPeBjni1G2zMHJi2V5RT8JzJ1hkpkXnXpghQ4zpC7yhuYEvmevG4LyDLjDjjgSvuTbsDN",
  "key33": "5U3psPs2k7cpL3eKQ4RxCvAcKiuxCjgGawRDFc76VGyR59xsiN9h1DPbCLWDqqM3SPM8BGTqKP6HSbXyJKifrUS9",
  "key34": "5u4wyu3ntmChUa5cCB93BSdhGZJ9SD4MDJfHG554XYjtGnSakd3Hh6SN8JGAWTFyCMYhLphYrrYKt755wjWAHvBD",
  "key35": "2hoFXwpruwzFiw8z864tE2gTxJoQMbi4ZcLDgVxP4B8QemWuGvN7LdGtmJRVnDyTEHaddrN41AVowepEHWFiPGyu",
  "key36": "4Yp6kZZJmfZk7uZLa9s2d6728iJDvagNM3T1ogaS4vEv7oUuhy2axmwCBECWfaEVFK3StpnAZqNz9tvtA4U4eHXJ",
  "key37": "hNXEPPXauACP4nFzCH6dWLJc3fMwRiuwgNbdsVv9VvMRbxX1T21KyhcWCw3C2w2yp2j5fGbuCzzexBXoVDk71A9",
  "key38": "54VJvr3hwCxGiDpvZ3SED4xpxAZAF8s2S3Wk3wStkcNMUpYL6XxFiy9KM9456nuSaSiYeBZQssG9Fx2CG4dqHrrs",
  "key39": "6dSu58B1RQBGubj7wzuTNGiSrAQAseBPTpmgCSubx4esWM4GjGKWELq7VFVtXKdnYEFJrvoZ31DbZY51peLJsHo",
  "key40": "5Zn6ibzTayNzqpS6EGbcRQqGedT7RTAdVZYM2YM6AAMhmyBA2xyPv8zpZbd4AV81bPWyG9ufdztXzmju8tymiCq"
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
