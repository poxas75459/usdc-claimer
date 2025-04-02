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
    "5cKhuzpYPoGu6vLV5XPdFAhjj2bZAXVf38ttDrfxFvHgU8keyb23ckRYfcMU9s8tjiU7C5hvwmLkoayYhGkTf78y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41w7sVGCsnYV9o4kXWuT5uJgbGfS7ic3GjSrCkCzaLL8NnSm1wAk8b8tTnBtDZjzRJ3B1rDCTTjoBXMQZGrBt2NW",
  "key1": "3eWYDYFJTe11LyXSFZ27ktoQVU7JwvJMvBqTL7XUcRawSZYrBHdSfRPrxP3376cZpYyk6p2ennPEhWUGfY5zbdoQ",
  "key2": "EwKGiDDJPevR7zs4w1pwtQaaB9hsSzWTyQLnf2ewAJWB8o8w3u87VbyLsEGo9z3QiPUufZtiLtxD621VrfT8jRe",
  "key3": "4AT5jdD76EySHgekMkzp9D68rYepgg5oAXiViLoRbtmwURZTpnMjbYDi6JsAtng4dXkJahPXu7VDctv6qTkNUvmW",
  "key4": "2AJUt4bw4EjGDUA8o8trKEA3fgyWssSEWFmRisF5wXnSoB9vX16d4DSjtKpaGbA5DFws21rLQgZGgFTFg9dgNFXd",
  "key5": "2iU59ckJnoTAww42SNJ6zUR1Cn8uGGJH6WipH5eYZwq2jvxHafCXGmaoTmHvZd9n3zNCcGv9gZXxK7fa28RAwgyj",
  "key6": "5Zd9dvRpSAFASt33CLzTQsgkeYXsMNYUzmvxi6qqyYxQt7oz9pXSYFsg5QmP9KQZRHPysfexvP4M3jxjQAHBokr8",
  "key7": "2xf5eBuwqDBQ2jLZ2mmP6NSHqYbkR7FtcPDQj9ZzpSHnGAj2LnezTdhkBBDwrGHiWYdZgi3BNB45WQfdYJa1XE4x",
  "key8": "5wo8Gj1WfwTn9xoEj9vReMv3rUQMRVD14V8UALDTfbM8F4JcT5ncRqjG4xYbh3CrxPBzvqw6hRbe5P87Kd4n9dmx",
  "key9": "5BSKbg8SyPHwPGpraFViAqjFkVTMtWKdZKCXMETKrnFQYHPjpBnfAYyJMu5tRqcraqdVVXbisoZ2g82pasy8Cz6j",
  "key10": "3YqJJJrW8bcDHD29LJ8cetqdXhUdZLwZ22FP52WD5vqvUshkwWscpQs7tVexTi1u9dKwdvuTJVD6TfFjnZkYmbZY",
  "key11": "4jY6gNHkPi8GaaGMBE2xzn2ZNMJ2xbbhgj61b28PZA3en2bCmXrm7A4oV644pxAgz7wvYnAUBMvYVoNxm1nLM5Sa",
  "key12": "2vM2U9rPDA6T6WfjXMoyXCvUVSb4Th9T7gTDCaLFtJQbytkS9ZZNXNYKcGoSiqYdoUjwTBRc24sq2mDPqRkERto",
  "key13": "4owiFQrB3QJYyjFYKivaMctBHmwcmdovnKotTdwnutUN8FHfmbjTVNPmbdcBchQpCjhMxdEpE5ETnsQcs9hr4Fb",
  "key14": "5ncPwp7BxHKs5TFzJwBSeDMLKTcbbzMXS7bAXDmcNC32cAYE7MBckijXuknew5mU8nr694TJQHB9U3ptM2WAKmZQ",
  "key15": "4ZtwbwjotnVURaBJRbSkmaiebc23WubPvkem8hkaWdCo6vmZFu8JywkxYQTFBzyTZJ6bGfX7qGaUobYokR6AhYPT",
  "key16": "5FiHxBbDep4jYWGQCFEBiZGcDnpKphNRhYpJAQHvoikExm5eMjPZCu2YZSgK1tipaECqBQ2pDBBgTqKJ18WnktWr",
  "key17": "5r7893Zxh8qN55cGH3cK7ydU39XEQZyVq5Mwfpt89Grah4FjJEwNBB3aUdJWvxSMdwbmkCbtFda7QbmGaLU3jWrH",
  "key18": "3qP21tT5iuCbFyfEzUFMRgbRgJky1gpGWaJ95TbhdgFhiZpDND5CDQuTonroTMhyuraCDdScVCLdj5Hnh2Zp2kMi",
  "key19": "1kXcvv9G4SaJ1te69rG8DJqjX8PK5rFXVfCBHK33RL4gRWCne5ecDwZyGmhqWHiJuxaUUR4rRNjC9tCVJ3txaR7",
  "key20": "24atoTrUz9o9PmANK7r4moahLyYe3BSvmTxbpPPyW2gtLBdbH8U3Kq1h3cLXKK9GjgqtYmTeuUbfB1CWnQBDPC7p",
  "key21": "5cXYT9aWAtrrMcGyEKwSScCRuKFvJ9SkjcUZp5afVR8XQj3MZ2n16abJ4dBgvMdHEmeGWdTxu7P9JRQsMi1EaLKH",
  "key22": "258fVKBq3JibNUoy88D7ZXo9CQgXn8NKEaUdJ6Fz5rYQAJqYxpbZNbk1ySb6DP3tswoVVFEUvqBdrESxZKgaVbJS",
  "key23": "42sXsQfvjMvuL1SFh9XqA8iWEuTkbdAnfy2Auy8tXRGqcnHu5zD1r4SwPePUAkuLoBY6HxfrRGEa7JaTzbHPgJpT",
  "key24": "4r82gRWb4FcYdkVgvQqzrBk8G6aRNc6uywDJWivS3rWeeaM2QqioDNWYhgaZrHybn356mstGmuedDmu312gds38q",
  "key25": "24DP5f4mcG7MbeLB5NPFqXs6Emn7gS2pNR7ULDmVLFvcD33XnHQ67vkeEQ6YFCECW4BAs7k39vTnbXZPZafb1tEo",
  "key26": "5UY9CM83qFsXaBT5mn1f9JwitisbsxbXvZkW3UMCnv6piLwPMyPprpUT2PYpcCLNoYasd9aHSV6yTUCv6isDWxZD",
  "key27": "9J5LDvoMNco9tevyn7mBDRy3PuR515QFv1n61Gi3sxKFHZFoGvj9BvAcoxX3eYL1NDTNojJkgvmmwjxp5GfLUAY",
  "key28": "jY3YmAQ4zyzxnAC1WcYzBPcZisChooxeMQHpfcra22kfGRxNusirviotVd2nhzA3KfYqTpcKRiiVq75SCyfbHGJ",
  "key29": "4Z8LEPgjavnDaefcecLC3TC8oePkjLzNDvEn686L8PwzCSDmZFqTs16eQxoGBNZLQ8QSepdt6NEoP9NxNpUMnUEJ",
  "key30": "58tHFTQjzuA1M4cZuZPdKzoJw4vYxGiZz2yTytAFAKRecokK4q9az1dp3wJFAheoK4yGkTy6KF6iKvEKCSSE8F6U",
  "key31": "G3nThtRRwfFRG2x2bKshjSh6qL9B9JZNAEa9bexeXsxAiyibJSkWbybVhs8RP1y3KpzdYWMxvEvJA5AK2kCBJyk",
  "key32": "3PeQoigQKufFzYRApVq6ASBhkrYiB1z1DCkKA6ELXpB8XBb6Sdxq54g3EZ1ajh8RMfP6rZVXPCRSDacx2QNCCR9z",
  "key33": "4QthDmWjxmoNKre6PWeY5kqFWxXhjKzakcvUeZZi8m256PsX4SufmR3wyj2ndrumw6ugFTe3yrcL9CqXYwZwxFKr",
  "key34": "3uB3kyq1j1jz6PBF5otQbLfVnZpkLt6j4QnXpBdLT9i1nvR3k5dfpWnr1hYvNqcj2E91JRL1PWiYH5GghkvkJFyF",
  "key35": "4U5sVRD95SrtjPYuUkCRoSsV35dkobtfxVsamxnTs1iUSStWAT4YJza5RdkKPu8h6Z3YyEVpzqeTthcVqqgtYWYX",
  "key36": "57272A5b6A9LKogY8Tkuxq5PWurZdgbKfZnLeGTbP1Etzg6TafAeFEvTa8utT8A8sCqqEshNuChtazjAijzp55TT",
  "key37": "58piWZx32Pbu1uCx7sVC365cW6knZ4mBd8ezGg9QFM3fotXiB6MrJgyc9G5wr8AjJP75mkQigYQifVUbKw5CvDt7",
  "key38": "4uK5UcFo1HiakbA2Tbeg1GD69LBBk5DewmNPoo29fm6ACzZrJcGabjpHTwabdkbnQh3E4NZ17Nvevr1cTcEjzNdR",
  "key39": "hLW8hC5JLtrTVv8NCJHN37XnCAVD8LSKUhhvR5fr1Na4MGnDQv4DWPLEfPn8C78iSqwdSBmDy6LdeMcdfPZ3kvi",
  "key40": "2SuMxxLuRPAuHpViCfdEyEpMqGYhbcmsAwdxe6UMqbgQUc7EUNXN2T7baqCAYwGGYEFVB9LEBQ3rBf2dv2A4ZaJm",
  "key41": "54yiJbyYEnL1wAAsExWjQTVgVxDbgcyg1eAwsm8eNhgJciGrXVqwSE188Pkoam2V1arwBuVaDMCHtJKzUjNqTBjP",
  "key42": "52vJMN5fCs8sv72dAQJPgaL1axA8LVtYeSJtteXgtRcbFwfUsoT7yUcSbsezUe2tYEPLrepcNHyodBm7norwh9qN",
  "key43": "mhgSb3eV57Lpj8WZJPRhjQLnTKhgR8Vqjboroa3DBp1Kst4iLsRiz5WnSJYVopNFwaTUU1izdRuS8sgCJ1uMDdw",
  "key44": "3YqEK3XiMffkCgaWMNaCzNd9UHoEjGUaXodfq2EAQBW3rttthwAgSiZJobVQKTDQCnjercbT5hri76BZQvNdf4MZ",
  "key45": "3WSQTCgR9sKmtD5wCU7vgsjFQKFvuup38JtUUvepg5dVECr65owHMtZuYHZT2m5WW3Rqmemu6B2i9AiNsu8A7Tfd",
  "key46": "5uJ9gK6FwHdFmA1Gd9CQuXJZhDLzmLXjLBFeayL6K9GTQAT5Q4iKtAhwP3BR79emQCmEkYMssERJPsgQo3VeZ4ug",
  "key47": "HzhGZLSY5PRxH2u34J1fM3tWNr5H4QA4nKAzrFwxXuamweqYotTyK7zC2W668xshHCsuDZ51mQUsM8KyW6iQnxT",
  "key48": "2Etq94ehj1NYhEce6JKsdmAd5fsqNphYNbk78hPK1ap45XopYZw84jVLiybBmuJ5LCcmmKqepebGnPwKk996rd9T"
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
