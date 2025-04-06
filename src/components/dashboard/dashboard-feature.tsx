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
    "4SUZGUJcLXMujtShZyAhhhcHFujbkFcK7NWgVD7ZcQCkQryp1EFnXiK3WxFKqznRo53cRr29tism25xxurSJow33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGvKwyhwajZ1GutJbo3zV5vdKWupMGYtWva71617MQGMunG6mMyz9eA7hxiWBFyqqhSv9BQHTh76s8yj3nwHxob",
  "key1": "4qxQxUyfA7Qv2a1Dm15egqFfW8cZNSpHsc7drHTCae5s2DPFU8ZPJHCrrmonyWtJfTSa5CuvY9MDtwWqToAE5DZS",
  "key2": "4jNsxsK3XsrH86aNqkyK1WAucg5yz2PDGaH6kmyr6sQpkof9p8pUdRutHELX87hNeUn1K64GWm3oamDV6ZoGD8ZV",
  "key3": "5oSxVyd2dG6YiEYfrpXE11HReDUPBKACWzsCCzuDnCazXJRsd8RvwGGo6GAHFXcMMBxhSnBuMwg6hLs2k4Yrshv8",
  "key4": "2nsnh4ZFrthNFeFtehzqjRcLscLzfDCHbeaFUKZxJbkbh9NyBsT5cEw71hCFsx79p3CmQCunFnxcjZ2f5sijXcYk",
  "key5": "2ZLjobjtvbrHaizQLaZnRYktELjgFoXgZwdArdB3qd8C42NaeFfVmyTUCy1nniZ8MoXr8oWCQ4hKXcd4SncgkQQ1",
  "key6": "53zic2Muuvc9KMRY4yeY21Lso7T6TrmFerk6awGwC7r1qk59CG6NhQp6zAKiDNnk9c5woj8uASSm3CBQehgLi2xd",
  "key7": "2wiLoUJETr31ufbaKKXbwGB63Ekzmwn8PC53Jdu3tMCSMuzM1xMWaw3GsKuxihMGs2syZFnSjrgAZofUpPPxsDAy",
  "key8": "2AikakG7w37WxGiiF3LfpBPLLUpmJeBmA9FMVooHicAvgxG4tjJxh9XKF8xippbuHmof7mKW2WB3UMn7BkaxY8Af",
  "key9": "32nFq9UXUiubaCSZJgCupgi7diV1WhRYRcU9H1RgBhLLZiXhz6TSJszcTaHSjEZcpkQhTwGZJi93sWZRDqCGJ1iU",
  "key10": "3rkzgnaxyWAThm8LmUNSFsbmZXvsnhz3acPoYebRea8fg2G2GdcmTLD5BsgJWWTMsBE4L9NFJmPxEPXh667dXv1G",
  "key11": "3bW1WH4DcAYD5pnDYfutsToCXwApQKFcm1ApXrSp9q8ikcomvwy5H96yktCLj9cMNzygjRuQCvrqY1M4jNXmLMPM",
  "key12": "45wAaXfB7g3gLnLJjEABUEfieAcH1f6neftpJdTc14vP1xYsQixxhPpt3J7Xs58Jq3W5tnvrE8v5Ge8MTNr3TkNt",
  "key13": "2nEpeLkcyS6Gptyb377hNRGyXm9vSV1s2GjX3znNu686gRPJJ9E9ySCdhc9FBJCknW7WMt9sG8LgPoNkyn7PJNCX",
  "key14": "ksgJsZitxefkr15mHFFmvoYQ4SxQUf8ZZsCj6bFdJ9u86sSuoyEVJV18AcsQB2QaBmhyDM2PEoLsTTvXT3VgXzf",
  "key15": "2D1kTTywejrE3pavHZN6vdFcnX7mAjpuAijWEvoeLqPVmYe5waTs7cGuYXYYQs4kMSKPQfHc5Q5CaLEqeC1Xr12p",
  "key16": "46G6mNMad4995sN3EpkyLKiCCuDz1ufVejuqXPaZnZModfZgt9QgC2sxr3qZFKAWxEMT4xVim6T3qhLsfU6BLS7E",
  "key17": "4uL7tRWCgV9nTRZTrsHZTDsyMcX1ZYc7BsDpJ4MsNLMnKANZkkG81MVyXFtp1JpQypc1KzW6dViWhBwTpVAGb8Tp",
  "key18": "26C6UR9XgGBG3SVHUDiGr7ECcXvAMP6DgtNJQazymg765tb4KSN9hjiH7qrSRnUNAKnfVLmJd2aCUfS3qNTFKmUk",
  "key19": "2Vjte7QPRVuUVY2TqJJwvUo964Fsrcowxyq3qvVBdATPNK5bHJZYqfQVurCUaHhXWuzSz8Z2gxp3FCWFv75PeR4T",
  "key20": "3rhMusVgFQx1A8nXRR5orVmsJhbXStF4ADzkYsMcL42j4nMNTP8pvFCrWp64mqVosM2qjKKRm6Pij6UZm3YetkYu",
  "key21": "SyjWpQAYMDF4GP4XAM526X9vLwDs5qGbe8NbXjjmNPz9iX3zkAiWXmw5P4xyH3RVGacQAXhYSaFu2tK4Rou6SSZ",
  "key22": "2KfUBjTiwvfvw8qaSESgBbXYRTMskEDXUb1pf1NHLFb3oVWgk3Yg9ronrbUwGpAQmoK444495hf69LgHX7m5GqLd",
  "key23": "aUsDMQxsj8kiwTUYGWyjQJWroHNWzwwEdVb6o3UWBnPkR8ryAdZoXw5VKo2mWx1sKRXqQfV6KDxyUUnxbTtXr87",
  "key24": "2ijhrVJUo31N41pAdqS3T92z4uGuHJ717P8rEKC7CMnKUDK8rxNCFC4P3HnV67ry4RYD7ZbqJmKNwzUSFHHVfmsb",
  "key25": "4gcNk3Cz9mjNu98QmTL3mgCc6N7aQk3vPyHpHr7wBajsqzfGE3xSrSquxrS6Y4NJTLPxvQnkJpZwV85NZ6TayJf4",
  "key26": "3VzF1X4i9wi4r7V61cKaBhPqTsiQqT6k1HdwhUsQQtekw6Hjmo9M1MHwLCyx1Dfd1MExvmkjcJtYgAXispZYnX2k",
  "key27": "345TbWpDoKTLZbDnrc6s1w5txRyn95DPJhh7GG6fjkS9Xj3NkxBSfBDrkzXpohvz2egcSzNsu3LbL4i9PZ7JJhzx",
  "key28": "4wdkhaopyGmRYw8mxwLLR3hnQS2ZV8jc5vNTaFyspKXaii3Vb47YeqEkYhT39bqR5jemkEqgU1qed7pZHr4NQyBr",
  "key29": "2LYWs3jDK5PNkUJaEPx2ViceGcQaVAdhb9vhLrnBFcPfxYSRnxE8NcPQfoCBAc7hX4kTEj2ekgjoHsN1gopQYkRb",
  "key30": "3XrZjDvL9gU8ohBETL5LLXajJknZ2X6vyf2dQ3r5wAPCGRvsk75iWuo2vEF7mtyyBYJjjEdzDT2zUSPnH6WVzefq",
  "key31": "4sMqRq7Vx4VNZvDFmkHRh3XrbpdqRM26FXyKFSKsMsdJYqiQnZ8UgzMBvkZoUcF8Wq9kVH7g2jRATKNNeYfuHKNE",
  "key32": "62uwTGDUfFim6qr5ayRuzap21kh4MRwuCpk3WrJotHJBf3gSmsvpWV776WsZpW25MU6P9DyLMzpEPMQuEWUS3gDm",
  "key33": "4fR3eQZhXKfE7KV2VSpR1ugZeFgLtkXej4NTGMiN5opNKdunw6tqB7WvobNea1M1iNy6MFhb831uKyp7pyzXRaDe"
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
