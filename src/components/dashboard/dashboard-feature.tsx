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
    "4nhA2TfCCad7jhzyRKaqrqwnqrCq7X6wE4FjDmyyAgUDMjzA6DESXNgce5tp1MeU4XRmqRdVh6xNruEzKKmNDrZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Tb9q5AkErS7khRj23uXJd6SXSnTW1x7CLYFUQk9m486WYtxMVHZMQ1MVfBWKe77WFae5b88TZMLDK6hrbavaGG",
  "key1": "4u5WhsGiES3i89wPDvGu4KyX4AK4xN71kyMVeoHdLr89j2S8diJFSYbz2fKPAhh7tSE5mbUDK21Sj3TiD1a3qbye",
  "key2": "DTM25eRYc443edJP453gqaqj1HeFdS5kHAeLSzpGWJzg26eC1gYc9u8AQ9CjS3qAatiC2cY78ir9rdMYoPMd5um",
  "key3": "5FqLHg1FpmN8STG12BHLJmF3CPbN4onWDd5jsiesPVZgjrSErhMGpqMqZk6uZtxTiG1PeDXeEcTrtGDeekJMreQM",
  "key4": "5ecUk6L4i9MZpYUVAtfJYQESd44cueTRXG3NUsPghJDHpyxUSGNxP6q93d5TqDQ9GQgFoa9tFhjyvFtqDjVU5aFB",
  "key5": "4g2fFGT1keci9qKmgocxw51hLxbXWPuoXhCLRacRyeCXroYgtcy1DxqNKZXuYYs9Yf7oWhCZy7dEu4hyS9xaBj3X",
  "key6": "2ZWTonzhNZ3AxQVL4dvEwqwLKEscYGYnCdApy5wHde8AL1WzcyGBKKpfTC3A7mikaAirX68KA8BWEuzKamvqtKct",
  "key7": "2Rqa9tNifdY3C9GGhd7SdUVeTF4qyj7NJrwxakn2MDExujkNgwk5DfJ4S9K1vXMPxWYkVpttF8jqcrnQqork8LGS",
  "key8": "WdTxk95EYu45a1sKUc4JpCXBhUdHXKVQqWgJ5ntmAfbwRqYCYiWpzyLGehs5uEmhyehn8xg5HT9SLRJr1ysWwgr",
  "key9": "4GpqXeWcGQ3RuZgDU663VVyjTNNmRSk32KUKeZSA3QCE9EaiTJbpF5aE4rZUcCBGRTSEaZR1b4fAmduGRRW5z2iw",
  "key10": "2qQ5Bp4UnY2fGtXUrSJLYcnBk3XkpqU1ehJMDRbeFS7cCWov13tYGV2yxzkUjqb4o7S3wU1ww7hghMHHEeJ8BhoG",
  "key11": "5v2LxWSGUMMLRrkvjXT1VsfneTPGxDkUoNww6JJSkzReyPL4BQR41zkQNEUSFhg4KCbqqFrbE6JKC72nRNCw44XW",
  "key12": "4naTjZBGxCxEdJa4pa1uuypv21EDtDAzfBDCD38MziW7RFDX28aDFU71ffWkMtCjtxrBzCtPbibFrnwSmy9S4H84",
  "key13": "sRW7NM1dB6xfdY6rAidfKQ5B74xQ3EdcurkDihvFUj9DaoT3ZKaDHqunMgHnNmBFpEaZMrFhqbxRmFGxqmz1uRF",
  "key14": "65tRGKDo12xQBL4fipNwJW8K5m9WFaMJerq7LK1KowQzaiQ9ekPqM6oEbWDdVRJgc7Dw7fV73KdWo4QbA3FMj9Aa",
  "key15": "3mRvDjAW7tnFiZt1VShuZBt7bp9znRZbHXQ3XA3KAhUfGEDbU4jEFjCDSSQWrHFvrV8s5FgFTyibhUkPBT2RfiDV",
  "key16": "4SDDQjRDjD9PHHLc1PJieXAFiLyi9UyZBCaPkkHeurshtWx5VMuYSvDephis5iUJEbFoE29PZx6KUGFDm5zkUHQ1",
  "key17": "2aQsMC9jPXoGzZGCcCDzJvBoLq97Rah3c3UfCdHbmm9jptfk5MzJfdHThK6YJpBEWTH8eFSUShQsy7wc6xUNa5PJ",
  "key18": "4i1qwC8tXu2SmobnQfkybP1iQmCUCb8CJuw6BVB1DnWczs7thhVGmXmT3AoRCnQHPATEReperMfqkczPZo4bM8uN",
  "key19": "2mfrJ7LZiuJYQUKDgpxrXrG524547Jzc6vZei7KeawM5VdcqvVFuk1qjQMzo9dbpaKmSUVFyaMZ5S7muqgDUmK1c",
  "key20": "3AmXCE9rn2w7YUgo8roJ3XTQPPrayHdjvP7pJjWWeVnjNXqLfG4LZ5TdRoeD1aVAaEN85bQeM8h9Dhnhv5YUc3Xp",
  "key21": "btShmgoMzeq4gb1DnVRnrbM2sRG2esQrayNstLPBgnYMJPjd5tHPtHbzLLHwAMV8gLC8zYz8fZXqMXa6UNrHtdW",
  "key22": "4fZ4ZppZNXGg5EByWnWvZxzU1CbvP8ATpBJNTA7yVuurGeqcERodkrWDySDVLHLUoLd3nT82MKjBoG9eATYYpRdQ",
  "key23": "2Wn1Vs37t1uiHmjcDEXA7Nj8VciVCkPMzPCZdsorehfbdMa4qmiWg8KP6se8sAMoHeetbvkFVk11w7BZej4hRF1m",
  "key24": "3v8wfXCy2VTy1KnwgbBSW1SJBmB5FsvkXjzYLcrwZ7EACyjE9WK2Ka78hhVGG6Gb9ccfnnUKr3mPumrqojTepkK3",
  "key25": "4R3HUAUrML6WWgH6ZtD4MJNja3KETpyqVYF9NozL5axWf1XGsaRtHHuhuYJZdupFz2yrwrLxiPi4pfc3tJtiyCqh",
  "key26": "3Akx6KBHcJSrK8oUk2oTdqu75Vb6axbEwhpvi43wdEx7LSAwncuC7G9UCQYgh8eeNk1LUJZbA4iUEFtmFWyxoubD",
  "key27": "4uFbqNTA1cr2Rkz7ne8x2Vx3mM2FunUGWi9CK9YH7FgdYWGYWEqGXwWuCCF6GtNchPAi5bFPTLtPMPUz5fAWueoV",
  "key28": "faHt3YP383mcCTtpbEsRjQcCSqUtNiV25SW4TzMoQMtrdh6gufCEmsDXsiJomWykuULpM3y6H2CsR9AcaiGH7xc",
  "key29": "4uSHSoVZcxCATAbymJLqEB7oEyoHtDgceRUYTgTZ8PSQ6sSw966F5SxZTvEMrVBV4djvcifUf5yfqxuzWydYgGN9",
  "key30": "36G9U1mF3y7ePaeyUkfrWKbCiUSF8rkUEvQkKMy3DRCBKEU6z4FFQEtbsRFUbc5ehwNXPkGGChZkHvVfPXCQRxHD",
  "key31": "fPAEKQpRZ75WYvd2yBwzePkWeUjj7b12B161n4Mv4YLfvh2RoLC6iVdN9tt4oRagqp6avzkMB8HqXTC5y25UeYN",
  "key32": "549cxZeya2SGRiTT15aeBpTjyWJn8Ph2ZBTuhZZXyYo5m7LMLHjSCu2jSDtJwnfVCUQWm8iQcVd7QHUK6qM9wFgg",
  "key33": "2pEdiD2z1SKmMFD46NSrRD5fQLJ5PCWzChm5H59zcnMQX7PvUtSujTTbXRkwzZd9K9FRM6at6a2QmmMeeDoeUUbx",
  "key34": "kYYshNJtvHJyhzkAzuQPahcBpjNroBiMSWocMuSiTCxvUEYCStF9tzAPtfP3YUBi76nSwKxQTYqLo5z4bzeG9Ru",
  "key35": "47VcbystsJNFXvH2RguXHn1ezdowprR6Gmy5YpGNopEaZJpA4b1JhR3ptCTaY8ioNibFPgvUvKXWLduM6ju1ntQk"
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
