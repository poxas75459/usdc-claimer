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
    "5BNw6aLL35EV8fpM9xsAqvj4SXVmRR4eieb9ugXuninbQL8BJWf6ua4qkTfgBzm9WK7xzVof44oXi27WmqG7UoZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cXFZbxFbWGy4zPS5hgd2jDxxUKfm9fdU5nReQ8ayvhQMMHDvt78QzDLmKhnZthkWLkbZtco3zvU5jhaPhDKxRW3",
  "key1": "5ugzyLfb4wfTaaV9cFUvzuoK5RZ5PpGisqA54FMwTAKUZjfH5MCkLK2DkfsRKUUCtYWBjnza8EP453hUKx3aZLbt",
  "key2": "24khxJGDw71K7YSvgTZWVmPAF58mzrKL2jYDsmjb8o1tS9LsiDRcEw3DKg2FPEyNeShZFBrAiZdWibMBnuLXY55x",
  "key3": "3gAJuVgPoPx4pvpCQjLYb6WMZGhBr1BVVDD54p4HBGU58kAzHoLepZQxpiDQQEprByMPteZgfXns1KWWPkVrkc7D",
  "key4": "242Tw1vLADy8Lmdi4gkj4V7EuwuN3zKV1Az9bUPNHEMC4VhosEe7xSR6jZwjmDgCdGJQPj5MxDpT2VjbBUf7mcyi",
  "key5": "2B71mhWLriNZtFGAN8iArT65mUBwMjYvv7KMGUoQGRXDE9EzpYXFSpepVQ4SYrrceiUAGa5M4MZFtye4JZhAhdbw",
  "key6": "4peVzV1ZCpGdpH9W5Tg6ftBxV7DgG5UuEewv2JWZfqqpXZjvD9VKLFbRHeRVULqz8x8dxRFAz2Phob99MaSxv6xN",
  "key7": "3yue3NsXcCz5M9AHPtCWFCc3aeJfmf4DYYyj15YsbJQ3Ys52tuzP18PZWhzgsH6eKQGniapxzg1yPjPYEQkrjSS6",
  "key8": "5w8jxMPH8mnDipNhELLEQx8apaoYnhAnv6dzN3fhuxBcPYuFuvdVxxwTfLSRnBqZmYh6DA4rPkDpCM9n4WosK5tR",
  "key9": "3PSCcGekx3MpfdAcJM3YyDmkPET2s3Xgq2Z71jVcBuNE1t3LMwzjtE6u2oe8HsHJSEgHz6PPMQCFmQzbs43eQ1J1",
  "key10": "5xGhHBU5KkN1cZ99AEwZv5XssixMawdFYDKL6xFzWvex49ZZHrYFbnH9E4jpUW1Do9gPJRfFuo7BoruqhcNv68UQ",
  "key11": "zEYy62z5gQ67LaRTD9tAL5xzYWsqYnsRCuEXJk74iWzGVg376esVf4mNJMJcFwhrJa64CM4epqTeUsvzPbtczV2",
  "key12": "2gnwZCyMYAunVEPLNYbAppxHNFheDN3Amcrwmmy6wCdiZ1eQ5fTCdKUZFgGpSbLaDkM4VQKUVMnvMjsyZRrpRjeu",
  "key13": "4tpoLnRWKRLKeu6MbSWSH5Ai2mFGsATXDQ9cyq71K1tDyF4Ted3yTuzx1NMZsMFXz1XLxAEZYypWGDUtKME3qThx",
  "key14": "4s7fVLNnpdb3CT4juorHTHyvdUNforwCRDs9r1d5aoYcmqS7rB8Nn32nBr5KYNdN6KeLcD9xof5k41w5bERt2AbN",
  "key15": "2zJnXhvqEEZLetjV651u2ZnYaiHdZae36Q9c6P9kZoiw5cK2pCEXngq2VoduYv2mnxESaoVCfpoNGYFk27ATGnB1",
  "key16": "3gLHAYzhtbiT2gGxZZ99wykEdPP2LVvFXTU62UunvRJoNeq6LFgXTut82JpoKtd9aNan6azdt7uNrm11Eq1Xq4w8",
  "key17": "2WxeSjKwKAYbWMNAr2adjYB2ggU5jdRXexrV5JXo3LmKLnFdxB9MmjmrzUCR52ucGvE9tM2nNq3jkUb6P7FvUGaV",
  "key18": "x2nmPw8sF1FjmWSKiYQQ3QzqFt2uhypLED3by15p7wrADBv44mU4e6VvmpSnQjN1CsmHgYC6s56yHA641s1DGuB",
  "key19": "2UDkkCz4ML9yDx7YfL6o66eSrfjDDtPxAorfjSMWPZwxysM6K4ctur91uLeabhgEGmz38ewY7dUdtiWBJs7eg1zr",
  "key20": "4SXD1AqUNRFWDs6U5CQ3pCHoDVPv7qvAM6tuVEvmDRgzpy71T7ikVEHPLh21CppUWAS3jkABtwUH2tDZE18X3y4f",
  "key21": "2voFXue3aXmB9h5ifQetBjUae6wjEpouE1pmkEifASiX82XCVP5UUaxQCJrNe26epYUU36qTZp9tqFRbXjwZMh3G",
  "key22": "3HaZyHU4tsBnh3jKZwtJPHCKwhgXLdZ3xevNL5chziabuub37yNwhpvVErqE5V8ffgtBAHAKEbdg1TFbaQ3hwey8",
  "key23": "2dzby5FrrXUbi5m1vZ6E6fjrqrhBuCHLFAkSsi8rCGcQSfocJD9AyiLL5nUZT5jGAr2fVaEirRV1MQaUbYRbESXE",
  "key24": "5qVH1685atdtqNzr9gUWxYPAQQQvUgDB7DGrZmWbRiBZ76F4wQK8aZAFW8sET7T9LmwCTPn2y1VxpZ3g421JWQVF",
  "key25": "4k42nkFA7q9zEuqGxM1chwJSyvDKCgtg1MjwsPAmMXvmMAnH42LKo5nuyWU2nGEhVytYHZeNRFtYcw61ithWFT4H",
  "key26": "57WYeKiSEeGFNRT2qPcCFRiSz7Sw49VBj5srH97jWRrXL7FBVMNMmDWmbdePWSgx9y9djMJhqPkZoh99EGXxTXJL",
  "key27": "2kC47JVhwA3vERRnzXdReAe8LGZo3PaSZ4aDRBXNXGNAQjNT3nLmnJrarjZpNYyhpM5CC9ytJ6wGQdvtYsfuedJU",
  "key28": "4K7C2JdD8BE72EyiATf75kKwjt1FC4GqGuQyrtubyrDWfWeWyMLthmhtDidbBrL68Dgp2Z4c9ZEMkixnfVSTJbnu",
  "key29": "toni7vut6bBG92EnriSRGhbZ84T41G6DhNHsSb7hDtEJ5Qu8xzc58N489SL557qgELiLtZMxK2K8XLu5EyU9GS6",
  "key30": "4CRav5DHj3ufAzw2WczBxTCv9Q19qiSVXgzvy4eaxm9YQaaLCioLLZDWSs2Hi8GQvgzshjPA4USpqqowLKicrTX5",
  "key31": "4UY95hQV5JCxnjkHgAc6BBvuxH1FSeh7fmMfJeizyZWYt6vUua5xLKxUDYpVRRrEftGknxf9ag5CLUo1Z8zg19gm",
  "key32": "Yykz8EAki5h9MqxvBAvFJyHW6TSaQU6GVf6m6hqMMg8dDFFcQ4KvyFWq9GdQK4PQoXVxnfJwY1sEav5jBgb2MmD",
  "key33": "59jMezHYf1eMbe5QYBNaQbqVE5cwoWksMoxqhWU5wpUPM4aRsTt9qWk2Uh28UbsT3rTQBCRyxALY1jvoEe5LtvwV",
  "key34": "3br7Gw8GwGoYAivQAKb2i3tL4UgrjsZmdLKnE2xuvjs4fX2RQseKpDaHr8LXYvWNDqDNC6ecHE24a6LBV2oii9yE",
  "key35": "4s791TpEfHRdTEAiJoTfAX2fYubbta2uYzSk3RVSvoiV1dCNM563QLH5SHV9xB2kkiRMXgNSEwu8JdVUaFE1DU3Y",
  "key36": "fcpUrdQtb8iMhzTWDi51GRmoX75T3G3XgD6r7AbD6KPz3JGqvHLuw8aVMKYDXLZqTAAiBHMAo6D3nPpqipq9duE",
  "key37": "49mSAu2eTqU9aTKugSPyEn7o2HS1KSFG9DKe5T63UNi6aqyBm1cn1PKJB6MF5NM7vFoTVhE7xARH39MshHMuTNhq",
  "key38": "8GUpZayF2GCX6BgYKczHiHHKxd6yTEEe4Gh7JhZh6SjkTvAqci9Kh61xGyFmFoo8LEa9X9u5o4jMtnNLpfb8UQq",
  "key39": "5a2M9rXrZ2NXPBHiYTSDY5imVosh3L3oFaxGzKugzz7HeUR5iwThbjAfS8PCPzHb68UpkZkn5ftD9YtcEPviLyzt",
  "key40": "3pFdepFTHaRV3Gfw4YyNdvfr2qVVmePPwQbcnRy7LBCK6DpyD5fpu5rENQQSZjSwDVDEvq7SDzKTDPTqyZtrQp71",
  "key41": "353p2EoNfmTuDy9iBbYVZTkZ9EZZMCd2d6g3phAoavevKdVyNq8T9kArC5SBwkxQFaJ3R9QP336N7cGUbhgD5HD4",
  "key42": "4Nijcx32R7Y7PMAn9s3BUdW2KKmbP5aNBKLTUXqkKHdUuLdvhLQwbPJ643nAVqTKAQYM7Gn5tSvTPNt9y2Wi2FVJ",
  "key43": "2zspDSNMmT89FGgZGvwRLKZq2poPt1jCGhQPS1CATre6cd1NzVRs2G1YCFqURKHshcAu1MWvUHjtCPBrW25x4XNc",
  "key44": "2cqJaKiGDLMkDUr9ukzouX1F7YH2MpijaiupqLvA3MAgKjBMpSow8siWoUaccPdaTywosBWw3ocTU1R1therDJ6K",
  "key45": "KAyZAWxMGftdrbL3CQh41izCmuWTGjDMkckybhxTYj1JBAmrJw3i5bffooZvbsyeVZjFCP5kdawEoHtHX4WMG8v"
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
