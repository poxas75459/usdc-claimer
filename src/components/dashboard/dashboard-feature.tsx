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
    "2U4anjiWBMchNSZo28aaNyWr7nZmYHUq2wcR9ENKmpZNK5oFEYJAKYHUz1citwrTbzSLEg3JLdpGA5B7hAAjMK2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9T9ZdvRxHrZAAJX4SMv9n9tXFBTwGR2d38423LjmzjyxgKMjv8JhuuXwesmYTXyrAQKBKEp8iqSrBXHLmexW9J5",
  "key1": "5rywXQZZTUmcCm5AtB8vBmnuu6fbUJt9EL5V9bwtREYgaH2rLxcuxUYqHx4YHiNe8yHr9pnCKaM9qzvQkKbxy4v4",
  "key2": "2LuQCmXcMGGmNT9z8iQyb3BcdAxpPcj5NjBLqj6SJss8KdbqsGcvmLRyrDiPYNhA1kVTc9jdGZrFBq8yetupXLMH",
  "key3": "42my2ax457HgiSPPJwewJB9NfL6H5wYNqhMrVPSkQtYx7KFkU1TzahSBTtsQvwUJsMG9k7XueYHJRnvQ9yaq1Tph",
  "key4": "24beXURVVfiefdG4Jd3Wbop9dDsQc3r2J2ch21DoJRN3ZRFViWE16SiCUQsw56xhexqVwu9igravPvouishGYcTL",
  "key5": "2XDGcgajkp4UVyUSFxLJBLvKhSZBPACjatHias3b8e2ckT15PLvk7ojVxjMsd3MtzkFnbuPoEVgep2LPaczsJZoW",
  "key6": "uHNYNUkgkuR5bbn8qp6uWS7VB2juCC7DQJpGmJBcqeYiPuC6MqEwrbMfVN2nJGg8ja3Fe69UXf9b4T9SP7rnqtK",
  "key7": "3zsRDkNwAwcbn5ja9ZXCWd7L2hPZeTHGUkVMwouGsj6mQrkMKD1KLLrJL6uSc7vJfUF7mbbBafEGfDt8mDdFYNn4",
  "key8": "5q6JYGzcE18C2d2tuKGz9fKKDSvyke1vxDLqeGv5NRPFwCCjGmpJQPF37X1M7hYdf6wyhGhTEDYZaf7v9oAXY1BL",
  "key9": "3Q6XrTd3AirgZDKm3i3hmgkRT6siA8foUZcgGmeMKcPWH25pEFBF49W19F7CQkFFc8nudrWjqLLHVaASu1s1iTrC",
  "key10": "3WqsTN3FpZNjUBxCBEC3oppCYikg6KAbrLvAZRt5BdQqtw6XfWMwCmF8Ej5ArhRA3M33YVMpL4VBKRPEahcHGuHY",
  "key11": "2W7VbTWm4AWJCYtguskqG8dbVomqFCEZqQfwx7biKUpj7ar4NivbsvcdCfZcsJtLF4dkPmbWAmhvWa8oKnmpbz4Z",
  "key12": "5yQBaywTprUGD6RJ7CyWBCRCdVXnSnwAyaCstu1tUW2Evn5iFaNdLaYWSeT4cg1KF3AKDbPYmkCi2xzbXag8QDne",
  "key13": "4JcKkQLX7v3PqF6A9QS8c9nwHYKbZbYm8eT1PJRvKkHkpHvPKiis6hakNcYThQS959UoeCEAgRLgZrDvRLcN1TZ6",
  "key14": "2wqkXDSEBcyoPrGuCis7wv7fGTgAKC5VgvirT4aNReU3DrAMXGeKfrLuSXWYvbXmeUgtpajACa3hmRiyvr7iZZRZ",
  "key15": "3daT2JqJFwv1Vcbdn1EMAfGqQ2z7DgYmqURTSLoME4R1A7pH1um87dnGW57cGxjzZKdgggQaW1eZz767nkJyFyGm",
  "key16": "QnRhV4PgDBMxA6iHcLPYphd37Z8oovqyfpB6kzA6jbAooS1rvPCgaFnRJsKyonDeehzmpEb36jGs9raLEvKhVFj",
  "key17": "KC92vgGxyXGLJ3AkPzsFMgeqmZ3yW6HiNLKdbXcoaVhdnVnHAY1Gforp7hH6ixiXm7mEuSKvVUeK6K9BkxqsGdN",
  "key18": "3BgRYhqefNZgR8mZkYJzd7McFq9tXmxVbnkkaUo81a43Mtd8SuWRLaGKHnoieXwXJufEyQ5KV9b4X6qu5LwoEXwJ",
  "key19": "3mERkQR5WCt1poWr2UzB8gbLKojVngXi4soHaJSQQ788cCn9LZsFgxoP5hmRuxU1ED7F4KipgyFRa7WUo9xDKx8W",
  "key20": "ZwgzQnNFH8gxEggkrL7avGixeabCRZLjZhU17CLxC3ipdqxGvdkPmEfseMdGN2XeF7Ebi9r4dRtt1e4bkZWCM6Z",
  "key21": "cS1vnfg14vqg7jUtA1TrGtHDBGfUqURD8aQv4YTEBnhybsfNDYGbMyDugKoTmRNRp9m5zbiR48Hq8CeYD5T77BB",
  "key22": "2nygfvndNKDPx5GMHLqttpXTKAG9WP7DirmQxQJfVUupamFKBrLzNin6KPTNG5g6AQMGRndVCkYaJademCYVS6xT",
  "key23": "3XwFuetWsvBKiPKrh7raaiDHxNtbAub6smRRQxBKwAjy7ZT1thPEa45ArDkv5Xqiffjo5WfT98vBuJgTMD2kYuor",
  "key24": "3UBqs45Bw2vu43qJHwAoYGPqv8irKDpaHZdPRh6CLzHy8u4aNh8TX3E6oXLGsgzD5eR6B9vC3UdXbdspZ6GavmeQ",
  "key25": "4aMM6FRiMXU1XC8ZrTfNRz4MPE3caQieBrtcbvnHuLDUUbXGkSE7YEEiGifLP6xPF6zn93mfZR3fR5g4V9Cnw2cz",
  "key26": "4C2Kvkf8SCyzGPXywXLYM6JdJQgDcFEeWsxurzHbdHvNuNGszMPp6SQCAe1D5ocnXyJcp5bPKha7iBhoZEZCX5yf",
  "key27": "56yzpqgW9o8C5ytALmiecFbNESruNd2MC8PmHtnP3zGZeLhn3Z7Apn9XwafSWv9J373iQVJXX4YE1tmYXQhEenST",
  "key28": "5fwgmv8D51WwMbihaNDR2tsncgfTuJd3qAv7wcsEk2jNzgxMxea1Y5VaQMN9xp8wtKHQZAm3QFB2L1rTM6Skfizf",
  "key29": "4FgtNQpT5Fv28DTt1RK7R3xHSNHZnvqM4ro5qw18fpzLKNmqas5oWmoFK4iM1hiTdHBKVUe8ues85YLJVPtq6btQ",
  "key30": "46wCGQiRxqA4rXmmKzFdRkANmPhjRptvEiEjT7TRZZ8jis7pVeqjRDdTKtkfPro85JLm6s26vzLKjnEVYKDdWfeV",
  "key31": "323bAM4TnvXSSwN7GsQwDxmo96AwbiXfKf7gwFGpSozJZMns2pvuUodPyfkvXxYBTMpxs5ukuZdYzemQH9mHpFAm",
  "key32": "5tk3Zw2SApgvLFq6h4UKLDS48TNiC2K5EYTjRhVYUpfqyHu69PKkXLNBR81cYg2x1gnS7iDFQr5qmNacG84kgit2"
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
