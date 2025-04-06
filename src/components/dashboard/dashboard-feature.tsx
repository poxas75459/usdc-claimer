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
    "3WfBciEiPW5Qvcx9xb3ytStawvfpLTS4jAr9dV5p6CsaBjS8cpxfy9iufn9FqWgJ2PUfBTi8HhDuvns5i2J5Lzjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ATuh1PxM67BbapYnM8mSft5rCADGffJkrFnF1T4RkHcinYELk31Fa5AxVRQBWz3NJeD7jkbRdqxqAkU6q5dZJSp",
  "key1": "anA5jo37fzdHzw5atBvGg5GeCNQj63zox9ubmuYVr1zkRpgjioRFXvgW6BRVZHNdmmC1m4Bv1k56PG5Tp8FR6MQ",
  "key2": "24ugv9UVh9S5yoXGCdGWFSuWtv9aooGL29x2UDPSnzWeJoxGFBqRA9AuzM75qTqvG58hCRGTcfvFnopFU942aHSw",
  "key3": "4pBsocZKCHhPQQ4nSQYqzJT4yB3FxCtTgSjNn8hK1A2nHitshYjujB8Db8ygvEbNhMT6wmXCn2rTojsg4DAgLPzj",
  "key4": "46tf9pHh17rGBvPGBJFWJptzusoYunRfxojurzzxrcbKx83J8JSbcEwvThv97xLrFpTuCqiibBucCkf2aHtDHZQV",
  "key5": "3nLnpgRLcL7y9co6FwHFFcbPyRJwdXPM1vT29NHiAViFZMkTce6D5e7Wnom59Y9ni7oPgKyeiuZAcfieTP7S3Rfq",
  "key6": "64GewVg1Sw28szVxf92EXNZkfLYcGU94hsDHFcUzyMJ3ErwEKon7K4vE3bLLQjoxCTjE5j6PfBo6kV2wXHaXfT7s",
  "key7": "5rqHpw4hTQvuiQ7EUp1XQNaViNVN5zpaP7SLP3nBFTTZQHnh1M22hjEmismZ6k9qPck8MrNw78zSat9Mkd4J3iPJ",
  "key8": "4CKbE58pVMokHmjBxM5efK2zphaGQSxSckCRefwFw7FPFvMZisUtDvCURHrhKTpstuFJJdbzEWjdm6Y2B14sGYqy",
  "key9": "3eYFkGv4P4JaHUqbXBKcmEzwuqH1SqE4AxrwPXrTApJGhrwEnGue1QtnxQMT8on18EvyS3dv5Zqd4PZs8KNP1fM5",
  "key10": "5XAJoxsHxbAwQEg6BihrAgYYyRrk6po5F9p6sFscvxY2nWQLrtkRheM6swTbyVdcsCvk51dVu5F6d1zfhRXxs1Lu",
  "key11": "4HChRXiFKNx7uyb3crypy4FH6CsTbJbSJDubRRobEYfmFptGRMVPwVUwiENQbwsUq6iVTVCjr3MmeGnqpybEUwms",
  "key12": "3s6YxJnxKcEUFiQ4vmwK6vNu9d4VDK6uypvy9JFQSJW5qpxLnFAcgjWb3mWNqf82ZdWArHc3YrH2fYHkmF5mGg3e",
  "key13": "4wZGUDbfhwui631zKwu1GSWqJBPYjitDWcS5A7s5TjdEru9Rgkn7E9eFwtYDe1aGuyd96M3pTagDjubrQETPx3gG",
  "key14": "3TEPbNmNoXBM4fiF8zMFPH8d5j37g8v3rc9ALeJX9iXcwjHdqL9s4FQzxEAppdfm6jMtS2PUJmynUqbhoqPX9bgz",
  "key15": "MgiJYquTyjdgGEC8NkLb9fczzgFk3tqYWeVYAMDHpFJhXVGeWFGfigrqNPVk2bV3HYb4s2tdhuRGh1fDEdDQLBr",
  "key16": "3pfTb1etH4AAe9v7f8RZJjsuJrn6RCzkTuCc7BY5b8ZxMFCvidL71P5TKzmby8sXLNMqNp4Wv3v68famxGoMGbcL",
  "key17": "5a67y5zo4uLHZWGwLsHe1Cg7nRqhGnFP1MDtMhbZApHnLCYAq3cXahz5DvGobTcjJbYaK5NFsoGqEJjuQLyp2QdM",
  "key18": "EThrR79J4izzRsMTMw59hdyixTDZEZehHx89hoqtxFrdurzBVmRXssz6FxxyiMCgFzQ7567bP9mh665Qxq7LQjA",
  "key19": "yNwBgL6TGQPCbfMjHxFohTi1FtjXs1SQR97s7YTq58d6jSwiCqVzoMuhT7uUrCtQU1Yu4dHxpRy4MEn6nEiV6zu",
  "key20": "YdKy2pocAYf7aLkyEqLBthvCRWaeUBHjM1q2YVcpqNiCsiqoAWdEALrn42b6c2Pwto6qAoFkbavzhLXDzu7zePY",
  "key21": "5wD43fpra11Jb21YGXedSQsRXH8XB5efTvwxrGoRwCoAA36fpcs3WfkUZkZYfxG7kTAvFbxGHaHT6Q1hG87YCzpm",
  "key22": "2hesGz46AqGeqb5XYbsKwFPVGK413aMDECe8P48tMutwHeZxMDFEApQWb3wFZdECmKpHpVZ2ahbdUSg5WSWFhnAh",
  "key23": "5not7TtbS37JGGZFeWqpiGQEAaW2wuhpm3SXgUARa1gmcPeUptudTnmjSs45WgLTn1ZXtAxU1zZJsVhRkin7cByN",
  "key24": "4otpdeD6ZfP1mv9kjbz2eSLU7ukdwSJY9ddJR9YseerKoGmLpdEC9deBi4TpRry657AsQ61bWvWNJhXnVM5i2NUo",
  "key25": "275ys4i15oDHwGKze4bWbUsAP3y9KFAyd12uyni8fpQAsGi7JCVYdK7azNbooL7N3iHnSMSmjzYU7uAHjdrhmTLL",
  "key26": "3WBno6nu1kpw7UR8qAHmfcu3N1dj1zm7mReifDxKGfTZ1HS6C4UzEB7KGr9Nh9jnBztbZAiY8JfcGUhUU6tqpngS",
  "key27": "62npP25sXhMTZQdeUEGBarzAJYiCadCeJjQjVjGkUNiUqmSuwuwEy16AL1zvpCUrJE95uvqgyKhjMZ1fYzqTZKBW",
  "key28": "3cRRCpE2qJgbYAZSXtwhs7MZEekgeBnkxsXFMy9zycw7LCA4Jxktb13SAJEt7jqNmuNe4iumz5pnVB9G4pges4Qf",
  "key29": "4YaxrPyUaWmTpf81HqDfLqCfAuWpYHqQ8GDidXGGPMDH1ri69LWjWGGHEEqHp1udfp1ppoS5rSJfzdguqCnXNjMR",
  "key30": "3xAWWXmhKo97QkhceSfLKRRsG8i7P48jCR3rj6FdznN8mH7pz6NgiKSFG5q9h5Z2ko3sf2uCb8WxMBnfrU9DCPvz",
  "key31": "zZdmewMuwiE1HobUQ6cqR1ApN5W5tGwJZKMGVThwYVTS3hA94bnFDw911DoQCCdDSqeDoU7oDd41LoATvDZYDLH",
  "key32": "5uRVU2xteGzv95WJquSrXX7RkCnVWbhjrw4gVYyrpwBSjCeeX6DrbJELPTw3bSSrmPTm9uLUreZuKMBKMjMz6Ry4",
  "key33": "4UzeyXt1SVjzT9oDFxANCxLAgKF7vv28EPA5ae2ucFQ9xg77kxGVwrGRy7UUFiBpcESzLiaArLAjtqeYRLJPo7e6",
  "key34": "2pvKho4BiraAZC2LBEKkvJvM7GRWbMxWESkkAK23wbXmBANY3ZSxrdyvdoEJQFAPA7WfrZcyLhmTmBH5FGhUPsWV",
  "key35": "5vxfhGneGGi2GxyU2GRV4K35Sgsg249jUNM44nCvhngv2MkTV5xunMTfoorrpHfpmx8QFBhoiHVbyJw37WttGted",
  "key36": "nJoS6De2MunuQRGgBUqqTAvrN4YKvcK83rimg4pTV2UrMyzNGVQUowtU4yhX7XMGJikDCqnsiDYqzgLo7nVdSH4",
  "key37": "2b84wt8m2TCYECmmTGpxVoSSUEooaH5bTp7vUWYnvd2NUSaqFYnCXPbejNjRHFVZm9kH5DmAQUjo598M9AmR5N5V",
  "key38": "4SwNUsMSPGHf79qvNwS9dW5QkoWxvW3FdWePUS57CmfKmdWzWHc4gGjgb2zEuBCBCoh3VLRrS37n2mkwx2a3HsZL",
  "key39": "5fBt29nsypSc9H9DPiPcj5dKu3APYrn5y6EfEB8ithjMudsnHXdU4VeNsHjpxqDn76km5dsjBZvLjfKEGmYK7fcv",
  "key40": "4F83mGcB8yjxJpgNqe5VgDjyBpMhG3RxeA8KMhWMJFLfZgdRr65WBvqnZ7xX3dMNc9K4SXtbZXW62NLbWbfngX8F",
  "key41": "4Mge8E1N4wjrR6vNpRaD2NRYVYxvV9EePQLR3CmkwgUUQXTNbSP8tkdmVcYWzH2xvQHMUpjirQre9vS5fYMUPD2F",
  "key42": "5LZhu9J6X5aJCkPvrKMWVRoWhvkduinYsiWJwMtyqvGGK7ytjTSHFE7ph7M67pe4RfejoWB92RPo8ENp2qFmE92f",
  "key43": "226mPha5apcbWMaPbTqtCRjjxAs7N62tu4k8hevfPcfLzb4cqW6GfMszXiGCKsztwGXxKkjN7kw5FeAtyqFTxrMQ",
  "key44": "5UV74KsZbTpWoNx6kURZPaSVngwCaPwnkp97tiqak3Hr2AYt5dDDBFq8oXUErmSAFGkMH6kUr81waGajoiyJHrz1",
  "key45": "4CUuYvVUMcSeNy7eXWF35JKPrDA17sTZxzoBEahA7wbieMWUGAL4xw3ZuPS5GuBTpJa7dV58rJPd7Fh2GN49vieR",
  "key46": "4U1nJB4PK6HiTgXFMvE4Dy5BXZgfKZ4Uz6EcTB9PvZzUCDniomeyS24sWNvgFu9yLKKZKaEkZ7LkPjiiXkEFwfKD",
  "key47": "3Mr8H9vRho2SZRoMPQbgneT5GvPJHjqdJv3ChH9sHMHsTuMLacffVgNtjWMHs6g8ZkLCjdTzNNG4qLsLjAxZciQd"
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
