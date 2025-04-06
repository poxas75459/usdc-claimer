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
    "4MBtTxiy4GPT51FvgdMvLujFZQP99NiWSYfFJBx1exTeYVUx4Jzgvr8pBNEe76vMyC8uhLPPRZ45iDHZPpURhX6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJGfjVov25Xt3KTJGBXRgyuY3KPHKFjnWPEYZLDp8WJVES27oK2jTtm5DDVHKdi8Qz8vgnPKW3PXhYXh5Zmqaiz",
  "key1": "4dqc8Ppoq6AhS33mJLT24bgvBpXwHc3L3KtuLVuVXSHffF4uLuuYkpoBDdiASJmAmzhhrwX9B3FXXHJ37SmQy37r",
  "key2": "2nBPvw5jrxP468uhX9seEWAYrcPX8c6S7NTRCLJkADkHpRKcXVnhzZbMd7RnrHxDmdbhWsJ3gpkWJjy1e2PCU8B9",
  "key3": "2WLPuHBK4H1vZPeApimZCR7e735zPHbx8mnsaHhko2k3i2pufKbsSdNChyU71s6YXeaTJkLPqjGfCbnBngLbxmq1",
  "key4": "3APqFAacwfYARx8dnZDpPVYM9cqH8o8EVpDPoqJPPRCpRMW3REMFg32swTvwqEY4qkxjzUV2xxVstXcJqKS7sXVe",
  "key5": "63GYCdMGSjtnCxSgZ3MhTbJPUZJ6YXcAMedHeqMBVG33hzYkA41E5pikEh7cT3gecWGu9KpJXXHZjiWFWkkAFUDa",
  "key6": "2GqZvqQKFdjQQyWkTW9aKnQW1eTreSfPsqoCps3xsifUpYAjzgTeSqkahWn4dMn5V9Q1xiVTfuqqWvV2tgoJohi2",
  "key7": "P6nMmE26rpZutNbyeNGymvqwYPmoHKQofcXUNcedhbcam1Yx8gDWkjhEuUwJUZSovDveAhm7rAW86zkYFDf2412",
  "key8": "5naZ7gCx9waSsLgk5XXMjiW1CFXmqG8JKQBWYCUKibswLihAS7tVVAnMAay2NaAi4VUKsJ8BgFTrUu5SaETa1UBR",
  "key9": "4ruaqzRq41kNhkBy3B2zyz33wqTN1a9giMjR4Fsdhm45pwqa5SmfnpDEUrTTkUYY857pHu9WiiP2tsEaSANhUhhU",
  "key10": "SK4KRMYa7VapXLpxVC9MvHWNEwjgJHY61XF8SMkYTqA4xZMPFgPApcGMHptrgTRKxbYWcYW37ebyPVRSdcVncyx",
  "key11": "54iZvSYEXTis5Hdfgbv7tKP91PgBzpaB6vQMppNBYkFUS2iingmeKdkS7cP4e5Fty54i1Ei3bdStAKSt4WfYqMFQ",
  "key12": "63KL3Ns5JW4GS7Pm8zWPChMrJs4iJU4cGLEssd7aYdyypuRHRF5GYrVZfuGz4tTkbcCkZzs8Vtejank51jrzcHAJ",
  "key13": "3vaLU5AgubuwtTgRRDpYgaT8jGKBg5kB6vzaonEC1WC6vemoXMAhWY5KMB1nJK4f8gASvaj2NsA14dkkAxHrwVD",
  "key14": "Q4tu1jMWsf4Snw7hEZQZmmbUaK9aniQM324GcQXvSGCVfTp5vuim6jJjWJzbdQtYasCXnikfhFeBPbe9VaEMuSG",
  "key15": "3nR8X4TUpAFxW9PfxGvnNmHuXbaEE7U53npu4GbozjnENnp2zNsHu3txgtKDhWpbURUtLjhvLgn1iusFfqc4TffC",
  "key16": "4utb1r2TBvHJvtHaXakUcBJLHywyEF6Lt9Nk9qKXvLadstDNNkAPZnWdQ8TANA3XG9dQV9NUo5y6gh8J5ikfnHNA",
  "key17": "SManSTwfFTSdMBp6KuKqcjf1u65Y3GgBDVekkPdntFuFv4C4peDBMovyXx4GttvxJZQ2teFT9RiZ1bQwWbsjL64",
  "key18": "KW4GcPTPACDazEeaJDoJR5tnD3xpNpdB7L5ZNZULoLpM8VabRTTUMQTuTEzBDxZctuAhUedDAMJyQnR2qNMAqjB",
  "key19": "5k9f9USFARQLTX6ekiPNKU1bduxLUDV535eL2k6B45Tznm5bphXGdy2bzXkbCQM7fqia5V6BtSfBR9PPZhZiiJjS",
  "key20": "12xYRHPw3V2rsxmnQvp5ReTxat3wtTt1k4kwDDJSvFVR5YoNXAGni8B6c3mFEhXCxLY2d2wqtrfoB935wTmTjZK",
  "key21": "3jVXsA1CzivZ4ZDga3q1Cc5UxZhvh22wv1ehyiL6dtC6KFukvUUAgJGnMRqAxFqchN9tHtofLPFAzmEfdKtkvRVq",
  "key22": "3mu5Lu478rDiqjQG3Fi5eVGjsTKbZayaSwEZGZkicZX2VqtqXMU9nkSAmyr1fBhiou6tHQnH9fcGwjEJeXXVVur2",
  "key23": "4ZbPo7rv892Nz8Mc35aaqUBmZSXnBtVQDTBt4kcnFvdydkdbKGEye47W6hY2jpTfkUZCJCLpRAU5zX7mvXaeDxHh",
  "key24": "3n9XJ6pfp8vRPTHdfmDjZvYDaSQAwDkZAzWJmk3oYBYuosjmRv84G5bq88yvcrRWhfx69dT4fKjqsPPfPXtsgXvK",
  "key25": "3n6NhhtXqLM7788by3ABV28dBkiboskwDeBdwZKpwGDvUS36WB1vLug5RxBLyhp6MiETVouiaTypjpsVDMpQEvqJ",
  "key26": "AHpsQUAzgbQ7Mv5zaqgZfuCnMoDQNjs4bJ6pNXTpRwMPsgYaDrBqhpDwaxiBGiYg7Pxn6KS4SPMFfmopFQYmVRh",
  "key27": "NvTr9nFjPgXqdqQPf12kqsQEhMG3ePjKeraRmQrRWG1nWjEc72XQkfteGiMZFxFo3ePWL5jaTB39gsFYH1MrQnN",
  "key28": "4tKvNxT6kRaBfSFWgrQ6tD8C4iFVccaSt9wXmkckNge7kfwnTgy9bf9pbj2Agj3DAeDexGeV1RqnEPKx9p6FMWsB"
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
