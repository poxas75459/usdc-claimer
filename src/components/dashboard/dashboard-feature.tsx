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
    "2upqUSXeoKFGxCGmMUvQV7NRpEMFfRkFhgXXDCRhSVqf61EKNEWbbSckVL9QVwDy27VnJsLzfLdiaBTCKTUwYx4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GtsCxMkJrH4LSp8nXs1f4EWDD6ULMv7cKZEUYRL4czdmsPoNorp2hMVsAnqu77rZNpvMHmT8ipoZVk6QjLvqsEh",
  "key1": "3x46otzfrxemirYcS9i8ZW4ZAAN35v696apittaeHhvaNRR5ofxDJoFkfXxFR5CVvEed4iYm2QEE4TFow5P35C5W",
  "key2": "4kGYVm6BBf4bVwh14DSjALTq9mGuw2Dgg2EkbFwo6GpXgSo3YgQkajzoqJzzYFWowuawRj5K1pjBSn8CWKzjdsQr",
  "key3": "4Fd4eDwzUbEPvfcxBAmy6i4p2HQrUb5MHYCf7BK7VwF76txyy3C1MvwR7tZrrBd1yfaKJihsCzA5vFJJLDqHTaD1",
  "key4": "3jhYihhVS1SNM4n1xeWjb4xbBemsAo5fFbdgqze1r9dF9igVuvtxqUnq3h9QoG4obTHQVViN9bBkxCHh8MDsPSrA",
  "key5": "2Cv1r2P8Hi66DyD1oCQVwTcpL5HeJEH4o6C2q9tv5t7vwkjJ7LVhtqLZyDxoC3V5iKLf9z2UmnB6YLgqqhau3LfP",
  "key6": "33YqZePyViM8TqDt8K17KPN7gwv72BqF9FpJRPemMUaQJ5WypmAap17E9UP95txTuwziQqcT45Hu6i6VQa6Z3G9x",
  "key7": "2RoGkzE5iLBgHxEehMAoeEbxf5oyTVZj5CSRLcMCrw2hkg4iNQbqJdkTKydEzzX4bAnBBrVV3vDiJ4ygb7toN1sV",
  "key8": "5geQn3w8rAfFu1fY51dmUMU79XHz3PCJi4Xtx1gyzufC5q8WRcMtxMMj5PVQ69WoT7QXHxbBjK7YoYDjVAhKZdki",
  "key9": "4uQ4ucjxyeqWXDYtzYqB7xRM12yvp51UcqVGt7Cm1mh4nxEsqpyPnFmsa8G95oWryE7bEeewLV4A8W1AzGwKn7BP",
  "key10": "5a44GWSpcTcaPGjfjeAtweZRYr8DJv1PmPFbMF7QhKxZUkcPkKRtUA6D7z42fhvQTDpi8rbfUeDbQFvVCrWRHg3s",
  "key11": "286FPmTFtuwVdXaLJbRgqMeu8RHzJjUFHbUT3Bi4bVfxfbT3yXTqeVA8qKqQ8453sjZa9TiX9M5qonpckAD4Wjko",
  "key12": "4VqFEEEwEjJZmqZVm3T6YDLhUjGMRWs2bQUgBFCpq8VvJhN9QotQgdj4DTj7jJ6zAS1Hfyq8KoYiFieQVx1KhmJ9",
  "key13": "2Fbkiwdak1J2sAPsbyDa8S7ho6cpPLyj9ZaMZnUH8EJsaTbWUTKSF1xwyE3H1phb8CrfAQ2BCweBakwqRWYTW5rr",
  "key14": "3Q7JtWQ6ojQQ5vvjFfBoFcU45NfmUubiQM469VzKWC5CCoHz5kYL7Lhoyp8zJmejQ3pLii3aRYQXLqERwbNTiuRU",
  "key15": "RjGm5BvTuDt9PRZBCJ1WWzDFhEVKNYBxCMHbY4XFMrgJQBBPNm2D2dafzjAXsyrz4enR44nQ9DziUxqhN7ob6je",
  "key16": "Znq53k1TswkcNdRS7A5aJF4B4Av15RKpeyqiMUoFUFsDsewDfwRSp7eZ9ukPBpGitvVqfsxsvqKdgrgMocUxPp9",
  "key17": "5edWRFSPTNY32cXLbM5e3v3Y3et3MrWKraYoGtYa7QmzA9wa6GjmkFeaYFtZA9ZiE2zLt6qSZEnqBjUBjKt5QBs3",
  "key18": "4dKy9hX5X4UahjvtPoDHi8CycB2jCLp1EUMWnbcz465zFzatiCxwaxPVjNoBYGJ6v83wf6PjJKN14mKnBTnj2rKm",
  "key19": "2Cr8UrQJ3sxXARvU3EPVyX2NUPTi9hGsNWtQWhqyNM6V2J1D22jPfFvH2TZJBaKx3x9gwfGMp7avPYs3nmb6A4vj",
  "key20": "3PBmzxkWR2viaeo1vmfCd2rX3SXEWUFJ2eTDKMqfUDdNAW7uowevXQpToHUvBNMvbfttj6vV3P3NQXKf1i7mBTM7",
  "key21": "3co3JtKvSqgcF11gkasPU626mTTy9LNEZw9ffninrJPdXgY6ad1NmqXxEJavJ6d6hUSBRRrYhaCPit742zDuVHsU",
  "key22": "XmNcFQrowJWTTzJ2oicA675WkpMheQrXfxEVPRnYV2V6yQdUdxcwovPB9YesNrgrF5AeQ2RNpSzv2ZV1U9KJVcd",
  "key23": "UQ1yr58LPZzRs1FDGaaPXg7p7xws1MVxYKidqNEoy8FG2bXhpu7c1VozbwFhcd3kejSoYT8bWFQhuyes8GTHNia",
  "key24": "3eLaMbKcV5cHZiSqyEHGA2481hFwkbnyP2ktfRxyJdypnbYVpSg1nPWUqXjxSxuJKrRkBuZBmSM2BwMa9rDEf9Gp",
  "key25": "4wmoLyjHmcvxC6PjqD1R3K2iPbv1FBv1V4Y4JPsPyaxNSHrT3ZFrkB8BVZGLw2AUjm4eADQic2QrnJGgaXm5gxhB",
  "key26": "kHFoa7VNNQ6DiXFgfKrcPUNdYPfprGnMfJfYWw23uXnVu3qRFUakcaxy9c7eFLuarshj8J31RLmLcQXffyJ8SSN",
  "key27": "3zBnyE1U51VPTq6837BNT6mQxa8wfJHavD7P4tz8n4imAtjVUa7T6yFEPKtpPyMqJBaWnsnevicmvhgQ1rKkA2kr",
  "key28": "2ebcQ4YpARt3vCHbyiEL5GxKYc7ppaAPvsA5DYEDaH26qSY2RCrzMAc92VZD12LzrBWjHi6heopxxJ6xsi2YhFfA",
  "key29": "3ziGx2ryVg4C5Xz49mCXdUL9vh91UEquSNaqzkkiBZqZE3BfHKirMs9U39TPatLtaX8KWTAR9oKRvJYpEFjL8ULi",
  "key30": "5bEcoEi96TwHkmtZJeFV75o2NStuDbPpg411JNF1pxmE1imxUzu5YEgXUS758EQUsc46PWywAJov6acKaWnBBBrD",
  "key31": "3Q8wnDnH5h95CAkqB7oJt3Ri6qUE182vn7wefBy2gXpas6ru6WfMyZKHetBLGHCdxC3ALE8n3FDQp2CCg3VvJNxt",
  "key32": "NymRTef5b6CyEq8ikECPyNMhEQv1pcB5qQPfyuaEvW4CmnhUEVuGgtNnyvG3ExH3GJnjijcJXiigG41jZgMdhTY"
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
