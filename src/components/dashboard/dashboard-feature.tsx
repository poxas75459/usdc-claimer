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
    "2yJSY2rraeMCaut59VadJ81LzUVSQhudvrdCw8igpZZcF3ptsb1WgcRH6zkviCE7btsafiAd5HjAifmtf54J976S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrVBrq9eYxbyjRaEL1kBQ1AUSKLwj3H8QPQA3AvggF5TZDpJ85NfqVNGX2PhSgFHQFsRnV7rF4Up71jvbkKgvGX",
  "key1": "VnmQoesHSQev1ZBfJSzgWJGCfsC1bRi62pGKgVHhiSEScBijHtY9UkYBBtoJmxjGJRQvkNTm2rqbybZhYj6B92E",
  "key2": "5TdLDfUDqbKMuwNqsEfUgXREXN8HkCxDHShEhhRqMnbmXRUGmFoiwF1Rx84D149Mjgcio5R1Eg2HnjdshAbvGF8o",
  "key3": "2dSDsytMfFtapFDN23wUgFH7t9auemYdGdoK1ELz2RxJVNCepxV8B8zehmjgqf6NMzXqVpPfyHVSJevZQB1FY6j9",
  "key4": "5xfRmyofi5yTsFVz652jT2EquVvjgLjb5URDyo6AkKiFnWjztn6HFdMJXFX5od3ZakwFRBZzMtjH3x3sxA3ZCz2x",
  "key5": "3ueYRjrEcVDLobeomxkFzNkUWKHo8nxpJyTZZMc4BirFNr6dQSn7tR8amPZxrWQb7hRHx3md7pBmdHU6j8QyfHYv",
  "key6": "5wnANRJj9UcMakyht1Uqbm83vCGtNsJRQ3XcYU7dfaeyB84c5Xsq8owbLbGnW1h3RLEUduFhws3CaNFLw9t8cKqn",
  "key7": "mdoDXq4yCayLnZBjsoydhQMeCBSWnnnk23V9FVKhYtgdzYTuZQcNEUKwtDrF1hqaGAL8z7qbgEDQY2VHLbjJnnS",
  "key8": "4oz63Q4afAJxy7Y54nPRAXSu2bbA3i2LT1oyDdjKnZgQKVjQ7PwVGcDd7QTc6xrcqJoA3MqQwkqWu8UmmzskZVhn",
  "key9": "C9QHJB666u18qGXLr4CwqmiWWa4Zfq53kwyYG1AViBezuqzCDyHqzFyf1zm3nmro8AKevuSqKmkuxUS4WhyaUcJ",
  "key10": "4mSYiR6eTHfJwR8rQsV5qccCLw1bUYyW6NGB3Q2bVwdpGaW4zVy1TJjPmMh7HKW99gTrs8VqAXc5J6b8E3jLpYEJ",
  "key11": "59Qq3HfpMAAdnLrjP8Sa4i4kPiiPcxmivqWcxZNgu3VcsvYeLYEJ5LL3g8SE3R7s9S1Lz3kHxhWF5C65mDDiUoVe",
  "key12": "4tP2LZHKqhBV6frSH1LbPRZYuwiVagAE2ZkwvFxRKhda9BrLLBUqG3qExVaYydioupC7sevm397y5HWsAxxh5J19",
  "key13": "5fBYJ4i7pyboC1AwKG1mWPgTNeSv5LkdGwfy7F5WHjHzoiewAhAJvRkJnHRdWCAVBHyjRhSmykpsE8sNjBNc6dT9",
  "key14": "2pq6EGmo85nmoB1Bgxh2QdNtcpf8brUqv3xovdT266iBferroWjHBsruJ3yNtm4cmRb7bbCnho6gnXakwfosKDZN",
  "key15": "QYvtGMzBnRjVJvXLspT6tQKha7rW9GdD8frmPsiaXDgbkGn68aGUuKhEFQVerfjnvkTEdFBWuZmRkkzaCVqWhAZ",
  "key16": "2eUXH1VMUgNgutGCyWcPTB5TtiiwJeLCnfoaEVSc6QwakfNgXg6PwBPBjMRrPHp9JX2SQu2ues7MU65GDTDSizNz",
  "key17": "2QzjQWgvrtC1jXF6MygwQ6f2KAvjnD6Kmv3JuHR6EAHJzGijoDHMKaPNasdpE91Cr4S2Xn8SBcsuPFQmCrawTRX9",
  "key18": "4RCj9fcvCigcv1RtBa3y6peh4bGJJYW99MPLMYG3S8k1uSGwAtwQDxNNj9c5pEVVN9fFYRrw4KnHAfxZvmp2rDs5",
  "key19": "3pyeXo9LT8HfyxH9en1rbjQnPKK5nWw6i7A4KBeiLMVo85RE76eK5EyDLFDf2LMatyEbunErHPhgqu6UBxxiWEQ7",
  "key20": "4ujVCXYBQ6Z9SzeQV8QW9oacdyacNegxXGsZCqgLpZ3Edihfa4pFqpYLj2ScXSpir2ozYNJZXtVfntpQN73WfKf9",
  "key21": "35cFf3FjJ9moAJQQ3kntFrznVPkGiMx76d2zMNQgNVhuxj76pzyXhDnwZcpuMBb4h8k3J5RXtPzgkvDBLuqAb4VT",
  "key22": "pRZM1FDwr2YPS78t3gsbodgbDNtTkZ3PB4bZjcgrmL5r3idPg43sFEvizJF9L6zseFMmRrJqY49JsPuPPbsUWTi",
  "key23": "58hsiWyYjHEExxeNXmGJB6aidomifd4RfTrXrjjhQ6Qs4XYnC3BAVCBkY5Rd8tgxeK91yyBSfyGfRyXKxjy5BWbh",
  "key24": "5Trsi7UpGyZm781Hwq3PUWdeUufdE6qEJi8Ei8UybMneY576XhSTNPvoGUgoQLDYiHq4EEBM73auHrmB4TNDLfs",
  "key25": "2m5ExMDvsi5BR2832YTwSjFCQHgqbab4AmR4ipGxnZAhwiRAH8xe9QfrfC5jthBeFwb4vkKZDs7aNCDyu9eJ4LR4",
  "key26": "2ja3vLxNkuPydufQMFuKGUhhj5x2ZJYagWCWPykmVjhh3PiobKfAKEnw7UyjeaLKno2R2y6UHY14AWxVD4Y9RUpE",
  "key27": "53uLHafP9ZqNy5Vvgdnr6RdpXqbGANs5BQ4smAsszbMUhuiLJVXLrXXaCPAorxHSvUQLuqt1czsM9MzhThdkebn2",
  "key28": "2nN2cLbZAgFW5ssNnteMAJWJBtnKzNbumVuQ2p18o6AjCSZbV5b8T1GPMDRtJpHKSBdtn5sHesijHczfLQJH2zDg",
  "key29": "4ZJykuNj2ca6JQTrdxmF5aqWJriq9ma7itpgaFHvia7Hj2BEjnq6GbG9s8EiscRhNTSrSji5RJ2m2EpofZB6kPK9",
  "key30": "4W9apPECSaKyezsph47fWH2cdLzfavj7AgkrL2dpefRqVhhkqihNoHLuuMX7TCqrt6PFszSFGCJ2LGYvZo2Yngb8",
  "key31": "4mBvPH2LXhx2oTJzNPEuVyPeqUagQZm5SVp7whxr8u9zr9wupuHsJvD3XFGYqza5ZBdwY3qnWv4tWHEnvQKyWABJ",
  "key32": "a5EFjPw8ezwD6A6opGoskEKZg8emusL95A6XAcp4N6WsviCsdZyiaH1rmMFhimH3Z1oHtenb5qrGPzcXQgvmLg1",
  "key33": "5wWUp8dsV3PqicyEePZnANm8aP1Y3P2m4SMTEwYbZ4ZbwxVDaPz3yevUTc3GFMsRxnef2nKmdPPggNLDUyzYjTxQ"
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
