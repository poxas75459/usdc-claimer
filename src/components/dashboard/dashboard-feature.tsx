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
    "i4QjU1kjbnVT73iNWY17i3muCxQFZHtrNEqWCUCaGhB2agQHvhwCpJnUqmpu7EYrPiidT2k3bVF5F3X94npaqcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DEZnMLwxj3WYGQpMj2HmZREAyVGLj8B6qEJ9mhGqJxa4t3u8Vwa1JYFknuT7RoVkbsBjUEyDyKvMihqe9WhjERG",
  "key1": "2LEFHuw1z5uMXciRBvtgQr9ZTZx4yNw5mD1JsAAoKnjvheee5wVitDPsbxpf4LzBGEoFN6hvKeStR9c2g8YfpTkd",
  "key2": "3mHEfphtALg3diwH153YXh2cvZium5hMgLYCbgTzWLGscNZToh7aK1yoHNUihuHmf4BfUNTY4yWgbBg7vDG99XP4",
  "key3": "2SRcg21688EbRT8Qw1BRVWmwrAxDqUrxmBsA5HDpeqDVrxJNTBkg73LZvq4sZz2V6V6VFh5yB4rRHfUhWDBxPTK8",
  "key4": "61HyTkQ465V1vzyukP1KDsjGGnKCmVk6ieEqMVYW3RHH98czZZGfazvxHuaFJReGAoRY8BDdujS1F5Yd3TaRv4Qw",
  "key5": "j7Rp3nbcqXxzSt1euGmip1ngs83ym5Q4hACx4rXx1z9DuxHrqcEgRXozamJRKfsWKkejB29EHyFtoPG827SikGS",
  "key6": "4R76xUssJBkrKsgFTbHwkb8iQ5gRunRHzBrBU6ig96EUxES3JLGrEuoGa6oTNqy3gbFfjtNHXXqFoG1LboWSJbee",
  "key7": "5KshiEWR94uv1KdA1udwoFD9fvzJCPwxJczQstqYKJSv87b467LtekBREMADSsLhE7won8jANQKgZYj11p8qKSue",
  "key8": "3ytqeLZM2cBq1NQWwZUjd1Nm84PLxubu47QtKxbMH18jBvWBbZRJCKCCzAaajUkcjbUr6VXnAuUm3ePeX4AVGUWn",
  "key9": "oYz4bD9dWsVG9QrxFHaH2STGkeqw9SYpnHJPLPgjdnn7UjK6kfjfyCYu3ThvqGahN9KGUK3hjw8MqqFpdb2is2m",
  "key10": "4JK84HSAFsP8RwCndTqDfVzCePRjSBTsfKPMw5cvQN23gF4CWbHzWW33N4VQzh7kcDSnqKn5hwo79YcW3fx4T3J2",
  "key11": "4FUgYajo6o4qb1HU8MBgyCmva3Y4XgXUXN9TWjskfC17BpahjbL7TDn2gM6KJ1kWZyYHo2YvtcRabNuSPKbkChYg",
  "key12": "4wqyRiAWeh83obN43UNyJWpBWt2Eb5oHonfkKt9UNKtJkKSR6Dix1uuPsDcZd2oNCWVdcQTNr9E1eXCTgvdNpZUj",
  "key13": "39kQgGRwqJeydvRvF1sufBwhVSqko8BzTct3KYQgm65MhFq6pE4BK3Nhthx3NZFjYaPJqtQrMkTzsokNfL6JG6b1",
  "key14": "3BphG537TswcrFUiBcK4x6XWJZaf7HYRQmPzsCjrWUoAd451CMzsGauAnDyUcg6vBkV3aJW3N6LLjoP5t35qbXfX",
  "key15": "3zeeezauAkdHonw4czLJTxGxJaNMR5XJx8XccnntimmrpELoFHRN1gcezV4pxoqSofm2aL1RcjmabFyDeT24jX7T",
  "key16": "3vmqFvEZBqX8AeqcEA9Zuj49fpnzZ58MqJp16ngiLsH7fnRCtryPbZ1TaFyF48atLicQ7wKye7aj4A368uBcpPKQ",
  "key17": "2YzHWKDYwhHyUCDBS2Sbb8DTcimSi52nEAFnFzwsByYLpxZxxJ47dgGqNhB29LAy424DBEJjVry5XAUebvNQJY6C",
  "key18": "5oyjCZk4XTR86DnkBBnWjHJxDFywR2ARVtBii3CbJWufKbL1vxU7LStA7voz9g1LQU1UmptngwdSsVU73PdA2o5L",
  "key19": "3cFwtAVi4hT7bus9bXVhK5nXp7qa8QKnLYeN8PtpHVy2R4zzkSao45YPpfiWV38z7uxYDQokU4AWTXTRHr4Lz3qf",
  "key20": "27C55w7Go7PmJkquiGYnYanfuNXALnnoSS17LYdZyKLpPjphRu46bPsApPuwNc3B9kgqM15eMj7baY8J973RicQe",
  "key21": "2uBVcpJiHnkYdnYyPSuFAoEVscNDQxcBXsmHKcX1DxaScbdAHEYpBPnYbvx7iWHLq55pMBFPtqdV7qXVc5FRL76s",
  "key22": "fzPhJbvDQC8CWuAkT6Gm2ahAVrF1h3AVrRJ5ErHFfvRSSFkp96UBMB4tFamh1emuNJmrhxMM6BiMSBb3BUxAFfo",
  "key23": "3ALBUow2mdfXSgD35tPiZ3yXVsR4frh1BdHETTY6DTUhtdSfmsKg4bwoGBwDovByXU2fsaTPs3RZ241zLUZGtAkG",
  "key24": "4fZ4u3t134MrQLwYwwhxBR9xyXNvzJVacv4NURgrTSXRZCiuxLkjuhAdXeduCd67uUuAqq3CGp7SRX6Wu1yrPzx2",
  "key25": "5D6SwixHBmSrz1fBuDAFBwSWcLu41TszCZsXYkEJRqjasCkuFfkDLthwnoBdo8bE9jNGZJPT7p87JpYBLRh3RN9E",
  "key26": "4SeskmzjaNmMHiK85XSzhC2R3DaynZ6pJNDKv39329h7oTXjMRNkWhLMrJZREqvZVYa7UXemjbKDNNoRSLa88LDv",
  "key27": "57FfFkkDFGtsRKnDjqWmEF8KjQvku6M9zC7G7Axsvz6Mmwdmxck9mHYTV1oh4TkXF4aDM5yxzLptmUBPuzBuN7ZA",
  "key28": "3NPvoudpkJaMn88XfdpgGPn4oWm1mSoh25M6HsiqRR1EkzCroDaFWCA4Y4Gvfz6BHvDeiFMdeMri9ncrzT7z87WK",
  "key29": "3Pn5zXRj4jg7gLZTgAVQUgJ2RM5d8g8qYPaEnyMcsh2JvqwnABvrYWtNMpuHXX3dzJrqtXefvKYfvwkmzPbM97E4",
  "key30": "Ey5zjTCq98D9yR6We24x9dLUghX71Yhq5Y3e2Vb46Q7WRNZajbCFWwiUafuceQWnhhUkb387LCWAKyuw3okzkss",
  "key31": "4VZE2PNoDsQTcQjTxgokgNfStwQRtNHNwTD7WJFjVMJsDiDSzYHgtFGFPTQFpDX9K41ZxzVKgQQ5rN6p4vKU48U9",
  "key32": "5W4Wv1zw8sXWgoARCocSZRFTsNqcd1GdJfiERY5QfLVHuoFVjmJcseAAB9unng3iW8K3aSVYAHsRvYMJCifuWX4",
  "key33": "1ZXMMi3Uzz7ic64ha9Bu1AfFYySMtJsu5jKUg7oc33txGav3jS4VJT1VnGrdwteLSfvh3adgnmVSut3Ar9dN7bU",
  "key34": "59uwFrxN3Wd2jEkdUXzUEVkzmBzQfdNFTn8tJ3HMZJtja7A8dWfBdgjSgG6rqypHZYGiXUT1mFCc5EWgDnLAEyvf",
  "key35": "5UQDr7JdNirirGephMiRD2C9VFGW51G6SoS3sjnb8TQwasaAU2TqwrpxA6yQBx4zr422DZVDYWPeANhpSiRBrpT2",
  "key36": "2UqvNckqvw1bGVXQ2WMEjtWs8ogVpFVTg5g25CJLnSYP5huJDrTNhSPkUdGLoUQz5sj7SDJAnGfZLwqNrk7th7gC",
  "key37": "48oZH4s692f9FYh8ZUMbBYE4NMUcLoFEgCyujvXHpi7iqpJKq4GsYuGau221QcK6PD7QEQpcgSXA1fSUhKURiag1",
  "key38": "23BkDzFqGmEbe5tYkK6Q8LCDBkVywGhh9mF4Ufbxkqg2H4Bb2wJqHBe4WvBqCCZ1mQGRK5vkJUAkqnJFyfZ4uawF"
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
