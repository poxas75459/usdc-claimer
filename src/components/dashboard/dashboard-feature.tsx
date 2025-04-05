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
    "ijhPw3Juh8pTF5xWby7j9SNs5Aiqwd8As5PEYo2sYTXCE7wqS9Eoedc5wDk4kcCiy8xNsuHnqGJi2hvaVDLQEkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oC9h4GX7UV7otjmtKF7yaM2cT1oc1EzEHoJBNBsYinXp8Tt1fjRqBJUqCJiUpEyySu2bWkeJuJbpZigtk8AfLQU",
  "key1": "3SgBDKNDARRV2EJjayC4nvPBy4pi4SkKLiCbzQ9QHbfoRwyJE232XAHcZKsNxe4ZTTL3cEKZrFLhF1YUHc4UnP4H",
  "key2": "5jQgMcJFMcKCdWhvMrpygCTBkwJh3e8L41EfLmHyaaZAXuRKTG2ZfLzmzQ7kf4x3LqSxPMYfvmi9JFGU9DhwknC5",
  "key3": "4Y6gfurjB95tiqWekdZ8LwZQx4wUxHn4wjxRCrFZxdtafemSNGmcewXqHN5J2uGpQ8TzM1dk8iQfCdgHwkWXxT17",
  "key4": "3zNqKq2T7hTuKisq77gAYkyuRE7N5U6WRmJTQFjwLXpNuyCGvAuoW938xBh2naux5GddAKJ2rSM5DkVw6Cfjhxui",
  "key5": "5Hcf3zudN2ppsHXX84tdnU8EWyCbQwB9JKyTcuWUY1JNpNydBc2NnBvxpZWrhw4fEbgk89QRmH2Jo5JfU9wqfEvo",
  "key6": "nu7tajZV9kXhUxMdiet9YmWLNjA5RZRMDqCD2ryr2nCG8P6XZkz2Wz1HPmcLxcfXENQwCNzjiDNCSm3ks4YNWhi",
  "key7": "2PjcYWMRMfUor4zT91jWKejzJvCa49nFx4fS3og2L7SM4kMp1viKuKZG3Mnokqv4Sg5vZgxo8WYonQnfuAQwdhCG",
  "key8": "5skwUkyABTHErsq3B6tMVGaUGKa9vPy8uPSMxDuTqMTNJ7HcM11gTfwTpezYtyLNM48CgQR4k39xNk9AQhraQuqV",
  "key9": "5PFqa19JABTuEFUNsRknX2iDF51pPp5fqJurNy1CMZrFF3Swu3JFckiG1moMN2QStCWER6KZ8VtCDSDbCzCMuJZo",
  "key10": "33nKhvLdMWDdQb1Gm9AMHPMq4Lg2RF98H5xf6hjTKcntPDhUGg6cZRUNNiDk1VEcZw7aMRaCmoiPwUgvgLNjsQ8W",
  "key11": "4czSK5uHic1QPDTh18BKH1Zfz3ktXRsmxuSsX6acfgUuYvmiJrdSExBxy7yn5T4S4hkewXsjwtuDcFBrJDHZHX5R",
  "key12": "3kF3WcmcjYgdPJiRX78vS4gS8GFMVn9QhM2gzuNh7saE48cnd5ofW4EYkdrXXduDmrotWJa76XM2zNKKTof8fqtq",
  "key13": "btUW5wyTc4ffwY1i4usdBW4VoPhZNpX9Tva35Bkfbps2k7LJF6ZQKrH6SkFtMK4gtH9M7LiGJwWtfVjjrYNLDvC",
  "key14": "4vWYbAdaFFdyMhtbT4qE3RSf6Fwd82kcM9oQEhQkXUseezUMGaKHjZVH2ZF6cxwVFJaFQ2sGGqQv3YajDogjp2JH",
  "key15": "5xhQRBsjGrfXTFX9jQBkxtdDZkxKqF8WSc9dq2Zx8tQB5qDEaVqJ55uEq5dFUbAJ7AX9m4pRZFsu9Z9fXCEwdXUy",
  "key16": "5yihTKTvauEuMgwUBsYpyHQrGjdjMrCUaDwMQuMHyx2K5b64Maxr5CF7HBhkGT8nRUDpq8h6BKGr7bn84SqymWu1",
  "key17": "34Sd7ok4UGGU4vR5VeQKU2F2MfLZcEpvNzF5JZ2qkYwtYSfJapsoWAEPPpsyYYwAU287VWatb8giadRoA4rNxudj",
  "key18": "5Uyu1zno2MKVP9uGgmEpvJqrmwVSVubYoeZFhkJGuEYoiRiKDr792t7F1bMHh7KA1yuxiYFb5t53xtdvKVvqFeGr",
  "key19": "rtp3qC8TbeqoMqgNNAgJw677RzJUXHdsR51XkjVtJryF9pstJRcXm59YSoQxbVr2rBjcHDLjR6X37h4dvBY4M8d",
  "key20": "NEAmubGgxeFfvYt8AMsjxu9AEhyRPZfVsbSxAk45pyxrkDZHHVXk5WujtK8rmSWW7vxywJ8Yb5MtGFTDDQJgPyA",
  "key21": "38aqNVR92GAKwszUgHGuQAFtg5nyroiuFR3xyYheEhZEjtoyGjcdLMJwJj7wpzqj9aGdf7LYpRmw4HX3ozgjAnrY",
  "key22": "UqVK41UoSqU7PYvuhKxRHXuMphVGApkQmy1xk9ZVqFrCQXRNM3egUG3JMAWwBQPKDbjrU7JuGgiD6ZFJR9npUxf",
  "key23": "4PUuRok1S8PdyKL6UBc52kPM8b7a7uqYgJGMzbDNwv2W7vxSZfQbQaWd3iGeCidWNNMQFDuzSoevtBnqGegkeMNK",
  "key24": "3gTVfkPLLw4jA6hffJk6AFrc98ycdogZoGgmkfbckwp5xZpCX4ZBuRQAt5gqStFju55bufvUSQiXgRpmw4sxkfv",
  "key25": "s4icJJEkBjm8EWR3LfQY1gxMKZ3uAvt7vDTvDp36g4mWYGrvp353kXuNV7RshEUGyV6Ees3kXuYpgma9sRcQqyf"
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
