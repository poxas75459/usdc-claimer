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
    "37MJqnnuMsS2eFYykAugVqhEDx6EeUHEjSVwcfhSMGCUbNGVpBjykK1y6MH6ecMirvgweA71sqUGjnRXZrc3UArJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NRahtkSS9oj38aUn8hEkuer2xgwWDbM9SdMwSv2Knp9QCxoopZUFBBWgyZEpJvgFNe2vH5ed2sz8Czhnd9Lc288",
  "key1": "5ei14utYgE9qenTduhrZPABSV9wNXX1MQrkbf9FxNbTqf7MprkgyTLcz2EMghv3LERuhhFrSFgX4g7wBpu4AaETQ",
  "key2": "3ZVfMu5p154edbKmB8JG16Sc58wAQxi7E4GZxCVsDttPooxEuDQsdczyK28LA91GXwdHzszK5D7YSPfJRxBNDWMD",
  "key3": "v8QetesDxB4o2tSB3BHWJbshpCowm8gfNJL5u3ioaHYQ2A96CscCbpNNRq1pPNd4VDrGRQp3iGr6sjSMBENTRQW",
  "key4": "VnJmCi1vuzpMWaHYWzjgTqusc8sV3CxxZWtTBvv6d9cUvWkHAh1mjkHjj991KtgTE9pgDVUPd8oeporZQpVBLc3",
  "key5": "58mji34i9SNGddHZ5dxKnsXAHVdYK7VmryZZtBTb26Wich55WNGPPG5sQmARvPsyVvtJwzWVStwteg7wGR1K8gvc",
  "key6": "4y4hxMFN7TqJexkxfuuN8nGXm7QM4BUKGgg8RBrA4myL5gHoiQm9mntVZgfaWTjR9Qwbf7ZN6VEkA4e6UFzHvVw5",
  "key7": "4GRiuhEVr3Z62j5DcGMVqt1c9oEdAgbTVRpWLNKz37KTpfuQtTbN4kEEKQwY9enEHkwqyAW5wNBGkWgVk3QBkPbb",
  "key8": "3cN6c3AqaqsNdxQthujQH8hFWMLRuLbotkqbMMrutPy6hi2peBEQ9j1RdjfXVBH88wWh9LjaNsPK5GkBf3zu69aE",
  "key9": "2QNvdj2btGxwJfpW5rRhvyQ16uyxf2evR517oSbYwDqb3pbE9sBK6TzG4hQ5PorqaHdn3jH7JAFYtXtyiTHwgiYg",
  "key10": "3EY5J71HYZNgbu1qW1a9CTAgpNG7w9GTZzjohKy4S5FPWn8uor8tEAKQN6D3vLSDJaKwG77Tm9S3zSKBnai158Go",
  "key11": "54kpxpAzjRCBgoCqhn4V1rq68awQjzSnb3tVojAM2XNZ6NnZChjcWQhDzwLzyxsq7RnPsr7FjtLLqofWNSDziGsm",
  "key12": "2Fjx34wNTFJwqPrWogTZ9Yd9ES82YQuujbdUd7sPNuQFqkMCks4wVQePbrdzXyuo9MiSo1Vje68HvsMJy2VVZX2H",
  "key13": "K3CuZ2s8sUbEnSMrs8gKdi785JBLM5ZddYdipTEiqn5kpyik1n3XSD3ZdJkXcufDnYXQQWP58NpV8G67vVqUUX9",
  "key14": "2auFLnUQ87oz5G2q9LpiHxVbcwvAjHi7EaCmge34AKpmfybZdgccLSp5PH3j3vw3ugASpPsLKkA3s24U78z4MLqn",
  "key15": "41qNP6A7nsbNuL8VrwN5emsRgLG9Zmqb6GDeQ6wAG5RvNySNqZk5LFHmnXeobhEaiFrgKNSQKpGSJRq4ySHQhXn4",
  "key16": "2FFqs7zvV4jgdsoSM4nsjTz6ncjKEjSuPDY9H7gAtRyc8yzg65NW1SZS6rkDrJHABDRs71bHKSznFcM8VLQDMJqW",
  "key17": "39jz12sP7tSpQZRKW8sBn5FtuQyGvY1eJpn4bDwMTFZvC1jFQ7w47E5uH1qw6SivPYKd1e6mVpt1fvRSJ8mBkQ9j",
  "key18": "47VSXfQuUdR2UZnBkpg4UPtRz5PSXNx3rTvt1Yd8VLeHqhQCBtKGXXvXVTtCPkdJCcDHK8XW5PLi6EmKGGV8sN67",
  "key19": "6563AnpkCsfYcViNPTDQUCRc4VPUEkSGzYn3tUgHHyV26Xzrkv9nVRBMoDah7ZMLeCfREpk2YJzp14u2w9q6CYtc",
  "key20": "5hdEBAfJvMLmtssZk4kXzspjJwZEqjWZa5d2uJrvMyA27mitArF38WFLfmq78zg3zSq8XXJZzSzVGZ8cJNPvpiNp",
  "key21": "5gU6t427wBPT5UhJJHPigTyKT4TnkmENFnKS6NYRvvbJzYCunaa9g3AW1djBSkgAjjGd43eoYTgYLrXTtAZ83DR3",
  "key22": "gNL1xBi8wFouRvRqL1kGuHbgatuHyzV5n1FLfvZnR2XjqvtXZz9618BHGxMbMddJHyAGkbJKYPUB6PZMenmZGLi",
  "key23": "63cvez2haEhGPgZyPcSVZccWfMY2KiLay24UGqMf7LyFF3SmQ26gqju4L2GNXNECWAky84KAK4SVdRxE2AYtenwa",
  "key24": "wRcf4YJnshJjGpF7JQtWLyJohAAF5ykRFZEvJFqx1WXVeQDyfq9Kq9xocbc9Vxp9FVWvxUCfu3tjhH43oNj9om5",
  "key25": "K4sV5Yxnp9AYdpQiBirdRLyka9sbY41RxAbqC9dyZMUAbyLnSCpzfDKmRZTUG575FL4eKiD1EaxrTLuXGvb2F2H",
  "key26": "5bpo9USwqDFTbAcxcfpg4NRpprad8agqf5sPVd5fJQ4HknxXApmfVPQZ5ZxdNaSSnmvuF1Zwb6YzAVZToHjDM7vS",
  "key27": "4bqj8eBxiudGrWcN5gTbkwf18cNVBuTTc82nmgHzqPJkFPQKwo1XMwqWb8hGeZS5nkjxxBY4UsU2htVu4LHRMRas"
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
