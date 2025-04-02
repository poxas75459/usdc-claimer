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
    "4qEJmaFeDyUfRDzU7nShMs2ePPdMVsaDT8niGJhwpJ1DBqYz3VwcQG4krERg6pQqy822omzqaL4Bo7SenzY1PpPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDcmBcUBdDvPzX4qbAzmV7B4HKFXVPMrjT7DUAZgQLV4BXvwojfRhCgGaFcjYPFmDDZy4fQdVXGYKaJPqC3Fj2p",
  "key1": "jfjHVkxR8DRxuRghGS4NMDicxhRisUnmrH1Mvzx9rHFevbeH2XL3zdVBtc735Nfwdyc5zxUJMSc7J2W2EaR14Ad",
  "key2": "BZGbKBRiKpbtC3QX9hBqjb87cMgMtiPJVZAE6zcZy46j7njS3WNNTKAvbr3n82vF6KJx68VKnAnPjAhfWZkvxcY",
  "key3": "2VPZFZktWZKTHq24rLUsWf2DUHnUvw3X5YUFZ1nzXZZ3vdp9wDW2dt8uQNo9pLvaZWpHCcY1yKVyyptRkcNcC8Td",
  "key4": "5VFVrxHLizdSUR69j3p6Bd7Qwh8hn4sYSQeRDqgezZpS7hk2DbSDN6MQ5js6B99qo1Tj7VYUZpFuGfsPAoF1ZFRk",
  "key5": "BMP2eLdBFrjd2Dh8QnkyaTzTwqcrDyNKWY4qmHdk98aujuFF7TEpAX8276Ug74iqTMGpxbwjmdv4ZSw67Qq3Nd6",
  "key6": "4Qqj49Ub8hzVNtiBDkzLFgNTPspLyRaWHXvZct4noEUn8PbBSDsRjhJYCiatdCardwuQJ4HyXkggD8zkUcA24pFx",
  "key7": "iejCPRFh5bHNsYEHM4LY7ziioFWUYq5rbDZWHwNJXsCwGxJtHHSiyZcfQmotzKHqMmEDdXN2Sykwipdv9bW4KE3",
  "key8": "2wnXHkKa8FJD4VYycnJjCQH964JaXeE1gqPSKFTGAWzUPoFFjPAR3NvHFe446tnn5pZDsf8Kt33tdB3A6UKYemNX",
  "key9": "4rhsjuayjrS3qG9p3F8L8bYeQzuvuuiyuqSm4ipYoKfYJkAcdm3pjzsfwuVEtiYZs1aA9XrQ9cQFva8VC3tGd542",
  "key10": "2DFxfJCQRLjak2QrEQwbxAwioPjB3WfrA26cq6WAcsdZnasYADyZjKdEQLsWpHicobD4bJwH5bKyAieXLWGDK5BC",
  "key11": "n53heyfZhunpWHZpv1w6WxJSmGpQc5pmozXKPqwXNTsKuBAhNbJMPx76VtwzpcWQ3aBEtxWVwYAzg6vaDsuSgwg",
  "key12": "otsg4Ncax8v7iizjsehpcHaTMML6wCMW54WGB4B2VsxASnCErMJkjTy2F4cp3bX5qcMcKRpjxnSJuyzUwJ6Y5Ks",
  "key13": "51sQMXMdftvH23jRRhtSCb9PuSfCxPR9jgjtNstKHDVLucT7GJZ1rKFg8Bp8FPyoHCWzbd7JSHHTtEostyjq4zqS",
  "key14": "5rTqNmSj33ECraD85NHDwrQ16Wi1t6Cqvbxh6EYNZxtV9E4MUG5B7z43zgdKuBqf11LVYzJKKN23EuwYFt9yjsRs",
  "key15": "4Q5YvZAYEp52FYFSUxakd9NVkBUKPTB4uHzqJzo25fyXUhgd7dLUGFvs6CqvgEYNqtb8Y55jt5faQXfftxaCebMA",
  "key16": "5NLx4BYbjboj3VkBjHsa9HBKbEhQwtYpFPVfV75Xrn9VzxqHuB2wjJTToVmJzrFKBefmQ3NvYNuA9rUXKAVdaVTV",
  "key17": "2qCmzdZYaqrLHGM6igwZrnz3f1g6A96ATRovGi1aBs9p1f8NjrGXxpvi2yxKMtq81sTTRqsixGiSNE2zUireadzk",
  "key18": "499Kfxre8m4VstXF1uQZSLDWtPw1uuUxLoCoqaDLEWeVBcUT4BdeVeoiAtx3zUteAHUJ48M2CzarV4woPoaPMJSu",
  "key19": "3Srgx6862QDN4AxiTkMD6vShYnq1p3hVBHDYvJ4mnpduFAMQ5LwVB1TWCtpYFLBHj7kf5mnwjLhS96BQY5846UCo",
  "key20": "3sNbY4k5gZ9bQXYLG6Fnpq76JBk6WxHQ69KGyi1bFvpezattvnTKE8SckPpPGeuaW5KKx4FTxjhinKjVNTyk7xNc",
  "key21": "3uMHs45sbRsKnqk3ows5XS1vhXFqrAJCLGzGrc5JgNNya1pJZeWsnmV3azLUiRJnch6CoBBX9o6zWeU2hCUfasZa",
  "key22": "sa1mPiLRMH97Y6SnL2AZpyQTcE9yciy9wUwFJ9vvpBN1VbN6qzCWtucAtLmpMDKvdPQV4YMGMWj823txmeHv1tn",
  "key23": "3PZje6aiTVswRW383dfufvb1o8E5wtxrq4Scvuwwt5mFiiBbdcT59rmffSyBd8SdqiUsW2ZVz9KcGBNmdbi4q9EG",
  "key24": "51hEBgpjWT7Qrw5WTTdtK2pMQED7q12iv9qf9hdzrn13B8gdAvNmL2Q24r9H2UWrgJLG7o29F4NKD1EypyvtqJUo",
  "key25": "2gRKdTrcLfE3sQNWUXV9BxM3QyfjzdqPj8jgVXfnjFdoFpnnEKMNAxNwFoqCfe3QoBaK2MDrtDfTmt6igSuiwh9X",
  "key26": "4LRJb2YF7aAvCTvQ8o4ffp2GdVcT5kc3tUE9m8hb5bdgMDo5Gyhi94Z4a2iM1HQkbWpS1u2t5VEsQMXq6qMCaKqh",
  "key27": "2deHwAb8Sa4JJuANxfCdTmRFv5c2bx6RQHe8sayFUqsxUpxdV24HrrPzLQjh11Za88RTr8gbsmUngzFHF1Jp5eaV",
  "key28": "2ibysEy33Ewz6seyHnYuTP4pnqeMWVQtuDfVnh9ZryiQ6vzdLcKEjr64M1szkYm6cUMBtafcmajCofT8yPNs4rR7",
  "key29": "2WD3r7fxrQdy8PSR6MbepaXfUX7fbCbUBXRPAPWCrnn2UnbVhesBJED53p5wizuBpHpWnKMrDTHdDrWVth4ZBomt",
  "key30": "4NCFzeRKaZdaU7VwzakRH3Bvir88YYcAntKGWRh2hCdFZ78op8Z5oXDfFWPzpPF5Bmr61rb9XaKJNZeNJo6Z57Rt",
  "key31": "2Ey5uwMHrJrkuDoXfyzekTPbkFjiMY9nWXePsYwrJMjvjG7nDJomaYfnPo8Kd9gAiYhVHa3cF654XDzzD7iKddvC",
  "key32": "64eE18UkWpVg5u8BMydHQBa6zrojkGCYByj9LHHvRDPYD3jZiMejuh6XB7b89bTLMaY4uoRfwqjHwPQtPxKDgAyx",
  "key33": "2TfvUi4WATbYX33LqZH6Kb1dzFMyc4qUHFhQKqCyGZwDV1VUeiTFvHW79Ykjr1dz66jCrAzuXggvbBmkhsnM6rDH",
  "key34": "4LyNrbdU8z251TgEPbkuxYwbjeQLnY2TQmP6yo7Y1SdG3HNAtsZEXuJChDdPMNVLyVx5tU4uzGkS2b5jXhr7zpGk",
  "key35": "3395Nmf5NoAzduREvcE8Vf9M9h4kyZgzhrVpmt6Br1a3kftGXqpwALkmgoqJJU724UJKgdYfK58soitR9rmxhoGo"
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
