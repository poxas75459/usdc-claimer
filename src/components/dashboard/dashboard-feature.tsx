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
    "2qvyBZkdenGGibuknmyahFXBHhyTncbjVm9prNFZzVbn7nDzQRJNe5UvoSFvzjyDJgCvu5Ks24iMJQzrBkVcRp23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tx97qfz9eb1T51st9Dvs8py7nZgiUGh3PVfYJCiP4ezrusiZtWTHjgDHLH8ZAPi54psbVQb2EzxEEePTvgcPqZS",
  "key1": "tbavfvrAEm8UxnzhkxHpNzDbLc8zZcvjat18Sxxe5hmYoF8R2UnPzHWtvQ19G9vD5oVq4pGMHJKZmA1GGTZjDJA",
  "key2": "45aDZm5BjeqZv7igB7zzuqUhLDnFbeRjnjsE6w5aWWXa8ap7SDLzzE9TpjEbBVcfxgkUcWuGJuc4ZRFPoNLiXn4k",
  "key3": "C2vr99C71u9Xu3sRriY8veCrawjob5T6KytYCbyTagsx5SbCvJ5S7BqRPdE5BEhfymiL9Y8sgz61Jio2CwfjMra",
  "key4": "2hbYs6Z96qwVYKB85TR4useuRtW7hLVLcstnQv5TVhfCFCCER1xZs9gqoSeVNHL6kwhpMWB5DMqKnSsBMEjUfdi4",
  "key5": "5UED9PorHG3DRPxXWc635HBu6iKVBPar1z1ZPQcd2R9eCMDhyMf9eWqhR1wBjL3cNj8cigTs2o5iWG3KR9YNXq6",
  "key6": "3J2B3LNVWipUyfAKYVx6Erb7MdxCwAMyXqWtUfvwUx9bhby6ZYam6jMW8ysAynHqR3suuhVUTBgmo7T3ZvR69Zq8",
  "key7": "rbk8bTYvdCmZzAxnwjysTDvm4WcvcHd9N3kzMybNgBKYZYdYznTWf9kkmwP2y1TWprSPX6hCXHnmwAJKzkZPnwN",
  "key8": "6NN4hHtJ7UvHiRh3Gzs2nu4oNrLhJb6uBgJwxgfmMPiRJ74BvyWejGKSqKgdFXj9RLxePDtTn9nGTi8oZCxHJPt",
  "key9": "5KVXritFAVq6bBzLjMmZAYFsS6fMxhGsN6U6XmxCtnUoFgmX2F3ng4ZoZAmeryxMHy7JzjGcQagSDMBFQsDNuZcq",
  "key10": "2CqzpBVJtj3thR36yiS7DmmkEKbEwDr5tHF2WHBurbjEPnaxjiApePxjtPX8QbWxcevV1WPpBmbgzhHG466bvubM",
  "key11": "2qA6EZNESYe3kvC1cHb5v1vZQHdukoL1mvQhLMWhr7H7vAiU3b17QBc7UddaLGzhWcssfcBCqusXSnJLVxTDZdns",
  "key12": "v4tGKe6wBa87HVqWuLshVqnVoNyVy2zAy1LhWL1x2YWwELmgRNTM2BXJ1thPP4H1AHq81DcEJM1AGWBXZahHs21",
  "key13": "4QDtuZfus3xaSuCWYwMeuWFknkcXwVtgrxQWnwgmxVJiShCAFxiUqRXJHvjY1sedbNrXCBA7kUASrw1Yk1kAdBqU",
  "key14": "2rnyn88S48UkZAF49eiJdGjBB5Qi8de7sAqN6633mEoipvyLaWLhDq7AUgL76W633FyMA5mY1ochtwwSHG9nprLz",
  "key15": "zJ5fnmcudSxiieKj9kxFjcTouy6T9e4KZTL12W7p8APJqNtJy75c415NyAoYuRB7ftG8xuVZDUfcLXbXjPoKMky",
  "key16": "B779zXb4nU6kSfh3YmNCiiCvSDA23KU21yMrXgoeywaT98fgZRntATu99Tffw5DcLNJmbwpj84Nm6cn9ZmxUudi",
  "key17": "vWA7pPAYy8HBmB4uCNxPz3JNGTshqdJhv8voxunCfLsH2cfpgQ5f5Z6f6V1haJ5tDqvzLwobL6eQvDQnSC1gFzM",
  "key18": "2xHE3hXUCmEEPZjTGRRU6ovgx6s2s6z7gV1g8onvJT18jNC5srbS6tvrbq8nxipPbezsVoFf9Tx8xf8Kkbg5jU6m",
  "key19": "4WZSsAjdsdzj1o1Y39zwc1iWn8fopuXVBvobG4ggpowXgWLsi5nj9ZYF959pAGzuNoNRUnMRksxgJvs2AnoHauRf",
  "key20": "2S41WGdBNN4z14wvXRzwkzwu9E5LDJCwSSH5L8VddsyvjYkaaFgY5RLqATd1QapmTB2ytVZdsKhLvwPVaM8jaBHm",
  "key21": "33WQpPvdjiN8ntk48ynXtr4fTeV9eMQa7urWrsbT48kA1wxMej5f1hTZcK6bmzKy6FNbkHYTBzR7x2y6jqNEkTGo",
  "key22": "3xn8TAFrSzquYu4m2ZeCkcTk1VR5y2qMwu152pwtrNjduZyhkUi9j7vLwk5xWqfPbJ5gEHur3KAM7QnCwcesN8Kk",
  "key23": "4vE41CU5biTfLLccCa8wpv9eAitsh9PWENJEeFypdzdJy1DrXG8cx8pd3vZS3vhW7PTi5pJPG4WuC17Q7wrfjLgC",
  "key24": "yjXWzPjrbwzqJt5EK9BeDVo65s1LmVv2sxwueVNrVi6HJmWKCFjBNwSJcVr2txMxpz4hvYUBzzanhNLZQAYXmiR",
  "key25": "52RhJB2RNoEGnQJSWHCGXydHYohZ84usW1vwppekLMauZMESmubKw6mu9JWofavJYJCdRjrQ7iknSGSAYKk4m7YD",
  "key26": "4PKjJMZsPiaBR22rmAfsZhbkwbUwsUbFdKsh3QaGtryo3rKg4A4DzHpyDMMN35u614Ke6ND6vW89mK5VzJrqzqdg",
  "key27": "3GGb8UABrZPLbgcFEJRYRq2xTUBPGkBxfWNveySzb7iVKfTfge7tLp3jhzwDETvMUo2CmEUGuiUiuqURZQux8Hp5",
  "key28": "ZHen1gWLpUqw7e4GhGQoqWrCS74vaC4JCXrnAjPVZqUGRFbr3ZbnBcVqSp4Xe7Kmh7cCbWXfazpDV2V5dZkqgSj",
  "key29": "4LHaZg3qtTuRbpqJjqVmZqcBr9gKJaRhTZzmsteQ43AXvenKpH2cmWjLcBKjFtYmvE7Yyo2EaQRKezN3VPHjXLVo",
  "key30": "2q3u1godRyfLpAANunAHiZEKeL3NSdSpqmHKxeDR56Yt1hKmpYdPoJj8B7RRpB75B2UAzNWW15eEskHbJsVefVvw",
  "key31": "2ykmnmqA3VqZtaJ3WQdVDHR3NhYaDc4RutwXECEQaZVPMzmC6NBAx7e2yqmXJfyAJUrTXpAQvLPUrH89wqT8Rgt5",
  "key32": "1uRaEjYW426PMAoTkvmmxkiCuwTfgqotRWMftVH4K2VFqcTFnNkR54qkHR1mjmBj1Cthm6BuBvcc5MFZW44bCfr",
  "key33": "5BN5ahFFaVnY18CRiPYuqiwYdmYQLfoWBgzSCBTMajjkPq1QWjdTpPqwdhv2Zd46pk25gyydDbdDrY9LNwDfNknq",
  "key34": "65WcXeLDWwY3iuLLFUWeKud5t7YK6MZXPzvdASA4QBZUs5XvVeNdyHz7vjyP16spqujwAyyx43YRPGNYmoWgLe5a",
  "key35": "4JJfFQKkK7GiPS8AYhbVEahtKj9yzztz4k9NzAQbR92TfdVW6aDpBbD1nVFFjeYy3FvbVMDixWpuUXoRhvHZpt7z",
  "key36": "5dJnMDKijVPchbP8AYHU9LosTxtHmTdFuWYHj1CgXQLeCwpRWfo19kb9gP6cXvK6NcVkVWeyFiimATaxnnoTEyAK",
  "key37": "hd99AKFFQDBLAsScTuMzaqJ2CmCDvP2V4pXxSyXz9f5iT6oZdMxAgmLKerSPykLkk74577HtWca97QpYPtT7fNx",
  "key38": "5PLB6jRkomVR6Np5TAyBFt6M3C1P6tq2ZUkgMbraEA9QqMP4NjBTPmNekyhBwL51kM67yXzdthBDqS48RxEADBha",
  "key39": "2LR1ZJ2Txf1ot2mPJBzPTr3soWHiWkUrPEfUXYsxpTx1x4Gi49MJb8kZnSQH72TFfmyYUf4HpetjNGfGN4z2Ryif",
  "key40": "44fdjxY4CYBj7cagbt3NKGXiaA9SaAAi55JJTubgffmksaxApAkmwjgzacTvsoZnQVfxvUanuB7sDAWs4QR3ynbE",
  "key41": "5TxdiCVMZv8HrJQz8UrHXebuRz7EnynxkBWeQagrnisoy1UUVg6SziQPEvT9YcZXmPbJGvL16EkDiVovBXThdSSY",
  "key42": "2irCqaz4FRR3C73BSbD3Yony8QQhJJACeX5ZXTTJ9T4w8tG6jisvFpZyNa7Pdgpz4QFQpV1J1HKR6mt2kJ8zU6Pv",
  "key43": "5aGE1CdEHbuYjKZ9dNWgNS5dc2pYkHvAzka893LA2ufXnxKRSzRptM8K1AGMMKcYS2DFeSiK6aLoAizqDLAF1447"
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
