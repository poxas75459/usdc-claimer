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
    "bC7F5Ts2fSjGoCB5Mrun5hWTAY9px4peHBHhG7La6f4CgZqAZdTyJFx4zZA5xrqyww8JzqeEvZURyhbztjqEpU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wyJFjuJuug1jrVX6ZCdoZBDqVVB8Kq1RKeqTKLqS7tZsS3Apnch4PgCyFxqUthHyWmLWuvrr2Bwe5EUHKV3WMTv",
  "key1": "4fToLLFGbDbqmjYaXUgXVXkdo1hpWtiAoU2k1HYEH93aJPpHWiNfkyRacRL4v4Pk7njCUZcZ33cyjXZx2BPcRecT",
  "key2": "35s5FWGJ7U8FbGfAxqqNkC8mCDrD7uj6J4fREMFzXFPZeqrbPDMTHLnEBa1aqg7KgMAoJoYHwirq7TvxLJ8k12L7",
  "key3": "6CQcZe9vwBGouq4GRMtrEXG72dkDLYeANpZjwxBDhmULVfB4PEeiFkG7pcinDrdLK1atGvdcnSy5oN6sjV278SQ",
  "key4": "5idrYUqDEhjyjYzpuL3i3gW8PkK27kPaihd7iAUTgvuFLKEbSpWSeijKR8wtCk9Xw4gsDA7npracYynoLAezFdhg",
  "key5": "58WckhQ9c9EtMzCyTdVQ9YtjRCw5vKEopim9KHUXS7Tg5pRsnBasXLX9s9FBtnQXJvSaJyZkurt5p4gAeDu5Sxs2",
  "key6": "2Fv6JkxpzRxF6MbvmJ3U6dViwWp7dxeLp2zgsp5aYgu9RbmvZSqCVAq86jSsHCUkbMbHWuBx7Dg6MnKpdpa6AaiA",
  "key7": "2U81TveZZWsgXiZ4tSw845TsMCG8J6eZ6vH2nE4UZ91Us2B3GwsHBQK8GEbJGrpxks26sqLTEyoFL3YiWjT5M2iN",
  "key8": "K76TDBzgH2y4SwhrcnssgGDBJjTzXnyecXzUi58xb9BqDiVQ1MwXcpz2UWjooQr1ys14RjasFEAmDonvSWkLrKd",
  "key9": "4JUmQb5cny3tWvuuoH9k4C5VyFzATykYWJyPFjBWF3E7tvRFNL7z24ek7yNBWQvDY7EHeBGZswwwtnUY46ddZ2Xg",
  "key10": "2ubFNHg3VnhafuCfaczGoyCRXuXJekHGoUyiMgzfsQXYg4umBqBkSJ5x7a618B26tgBNR7NZtvGWKr8Eh7onn6Fc",
  "key11": "4JeCZ3voNhoUZoiw7igkjaoYYfAMJkiuAZmqMtjjGmoCLzRYwBAEmykJKe3DddJtiVhemNfsPrfn9N2kFcJCCyHw",
  "key12": "5dduQQKqiS6L5kJ4tXA3jeBSpbikRSoQDq6egVD1vjRqn3LPYx8n3uBxGexHuNhMqR7bQ7LQFqUzKrotjt6X9ArY",
  "key13": "5rAms88VDLZAW1D2ibfHjP5TtaTQpooQEy4rbsKuKJckcnJKjCeNrwcjwgUFe9wuqmmPiJkZniMHMU1u9DeDvsky",
  "key14": "5pmdjrbGNki6x86YdrQRkfUg16hyffyf7xPuEf2dNCYMgKT4MfNqGZd1c4KTK9LEoyyxLxQRhd6QPRt9wtCWJAay",
  "key15": "55DhREQq1zvfwnR63jvvqjG1kEWqFuKBsbnSxVU9aNmNvZaC12RvMR7mLkxrN29xk3JHgmxyHgckHRDiTFwi8QvQ",
  "key16": "3C5WZ8pkvrhiJhSW4TNbnaKqqoNEC4zSXTArDFsYmT4ktqDuFhNrFNWc8FsSeKZrC1rQvAm7XpN9eteHdyrTykkL",
  "key17": "YSYDoSuVY7wBb66sXP847mH1SgzhHpqEhLAFG8NXjq9i9SD6MViUED9MYWDoA7vjwuLv66Tswudr1i3dhqcqCwG",
  "key18": "5mSH1nxnQRBHdcjAkk1pBWyKxbsx2UYrjCmBMrdTNvCY9q8vG2FmaVZZkevw4QNd7wnKuoUoQYACkQ8gFsh8oJmy",
  "key19": "2vPsnrWEexk5yqLEFUSyGboESoq8GMTRGVkWrT7YfNwMwUGLQvTzVHmzRMMnLpqFp67P17DacJTggXfJGfLkxGdH",
  "key20": "UeBe5rxT7TdZ97So3EdsnULP3ghD8YfzkNUrK1h7aUEQifkMvhhvsNJ3mGBMy3BxRSsKHtkhTKAMkiqGPzhQB7D",
  "key21": "a7FcPPUycr6Jf7tctGjVRfvtyPENTGe85s4wqcwgfabupcDyty8JUfMBeS879asCVJXxPnFKp3LJ1gT5gvpYJ27",
  "key22": "3TntEvnx2hbBC7AQqLrmC23LE8MgyVbqTnqySKTunu8DyLRZ8dPV4iNvMJb6HzsCGdwciCUEuAqEEitJ2LARz6ty",
  "key23": "2dLLEmUaPn1Df1cmRJCMzrneiAdAZkNgZmhK711QCFVe1qYK5pbuPSkQQQM5UbM7RkwVmYtKr17QuiG6PvmXgsLq",
  "key24": "56zpazWaBfjvEMX4LGhe9TKrj6M5Yj3uSbxfbQeK2gAYefwv2Qu4ySfx4TXKrZhHUPX49aSiX4q7J9n2knJhFPax",
  "key25": "2CaZNVAXi7sgBa4eTECMWG1fmdLA6pMWNA6D15zhT4qWWrJXX5ryF2dDYxTy7M5W64wUreuXENvZH3wzrVru8645",
  "key26": "4yNhbGzrKnSLEj99WuHTAEUcwr1CYXvEcbp3mZXppuQCHYW6xT3EoAv8tfVPDTBaKJCn4U32LbCabeKewBg49oX",
  "key27": "2qy5cFQ5fGSjKGTyw5z3UEGk3Rw7CUvuRKJ5wnU1rBUkRZQvWfgxef7Y3kpFwhwuF38xbmr4Sk1BQHysef3ZewxB",
  "key28": "3K7CNmBZDAcKiH6cKr9Yj7rU88ajC9sDPjCC2VRJ5s5nmoWj9ajtiwSAKvRwoWGGmzLR4VKdkX5iMpmWFb6qGPEg",
  "key29": "32J5cs9JCrV4wKRAK8hcckiNFYZGiqngTnf1g9Vwyq5i1zoEKBDNdTMqFWPgXCZC6zBbm2oXJ2CBX7cppaTV59sT",
  "key30": "5NVNqGf6Z2ZecFJ6mzuq1ME8wqdandepBv1hesVxNXGACTt2aKMUMPMsf9aFZJfZbF9zE39yU8uaTbEjEYvafjyg",
  "key31": "4V3LgUd7twY2Jvdrsmbcw65GnYXcHyDDiCtb36SPSx9MyMiFYFh4emArLXJt4TaYxrJeDJqw3Qtv5HVpvA4r7LsN"
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
