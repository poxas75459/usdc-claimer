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
    "64vZStMDvm1thBytGfSdPhQkD5YK8Xv7DGkDNzZdqBTg4sQCcPRKKYaLmrhZcHFVbhxcVdbE5Zvk79C4xibwitud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kp1y2Qk6LVwJW7LzMb9VqUjUs2DJs3z9d3Rf9yFRe5KQjr8j43vn24dxB8z28bqG92UXCAwFrMrnk9vDyQ17R21",
  "key1": "4iW8A1SdRQJci3HYxadY1Br4xcj7fzuZFAatqRYHE6WnJNWtKxudnxBZjoejwxfYxiXREU2Qs9G6mZu2PvWPYkKg",
  "key2": "3s2R5uCnLag3igYo9mRA3pBq1enMUA1GLFugDRJZfxERo1FHi6PKLFQRrXU85ZduGWGQ1WPvuLFWzgvNrC6fNJ6c",
  "key3": "2QW9dDinwH4DSCTqCis6hWKaf6st8i7TwWbR3TyHw2eB3duCtQZdR52ZvMbidscu931NExg6uWFThoRGghNbe3w7",
  "key4": "592a9RRjJ3gyR6rp1xtK1Fe1NcCzLXUcS6nr7naDtvuJEqmBb2beTqkLQmkng4tTaBgnD9pjNjp56ShPZkjqJ3Gy",
  "key5": "mQyGKQ1aDZtMmvgQkLJHphX1HSq3BdKpw2kfQ2oCKWyPKAznjQ8pPwYaCkiWnb7KKfUtoiYoeCUKj4gpZTgr6b2",
  "key6": "5ypNCZHJJAHSb2fzZiGkFfEadPfSoVXEGvKByTQEuJuUFsqv3nPLdkawTrsSXcEtBZAhtLWHuvJQGgYn3ZAF8fKU",
  "key7": "2EFjgc8cs6kaBULXDKnLopXzV9jWjwEZGnPrCsfQScMcQFgJFz6HEAyGoNBqs4Zy9JRkGMdi2HqQakoc2kewxTNp",
  "key8": "4x4JAWfgKiMo2hKqXVPnW6RUroNUfhTTJKcTRrP3T6ReqFxEfaWGxRK1Beud82434HU4MNA2jWLzPz7zXvczHyTW",
  "key9": "QYLzBWRGtHgX62X4TA5ax6PbymzP9HBYEbyKH5kREbstsXJR7yrgUiDQRgRcdqsU5Pyd8o3z2e9ici2qYPPYjZr",
  "key10": "4mEnDYo5z2TTtkLix2RAQBtbkn1iGXqcNAtu37YMJt78yh62KWRMAGERrLYu2wotBWTVmty2yJR99FzxqUQamAXC",
  "key11": "3SKoe1vnT19qDiNpauCbiwJZbu3XcgsWpB5TCTyTnP8wA2MzCKNqXY9SLHKz1icjBmMEuLkuPR5D6qtLMVwwNTHT",
  "key12": "5S5PMs3wmjafZ2vyZSkEUKvDBe8KwGqVrbwujPfnyu9o7NbL6BviF5oREVnccNvXvFuVLYcrG88ZTf6qhZt8tA86",
  "key13": "5bucx5Pp4DLqHE8BiE7eczC8Tk1JDYNYouLDoUjSiaWV2n4x21DLuhZ6jxvfxay1AqqzfbrLy7ihxuMJZaRGYVZQ",
  "key14": "3KD8XJKUYW7jYqupjE4bZx2GibXH7qix1DS9eA7Uj8kSZQj4KDRHvqrTL7uhSFUsZXM83jUCDTo8CYeMzWXGoVYM",
  "key15": "5a2YQ6LX4zXyFvy6vUHHmzWPBz9uzn6KaC5aNbkFnSnJw1JzSDthtG21aPB9T171TKxSQgdhipjNkWaqfwjQMZsT",
  "key16": "2kTnkqJ1Ltirdv1m8zCPv41AJDGGDyKCPqdQJBGLkyw3Mnt5yVX7vGhWjXiemBJY8VYGopHiKmcu5qR4pqCELHFa",
  "key17": "5bHfNAUsJDsy5w6gkDCM24TCSvoGX3KPUK4WjNyWNy4dXwjidz3X5SbujaPgmRr18Rr8XfXoAZXGTs3zU8c5bB19",
  "key18": "EMguSN3HYQK1WcsQKrNn9CFUdDGuUUThHt5iGwqhajb4pSDrMbPpSd6GJVJ3B9zbskQXVzytdVS3jE5YUTeAwrf",
  "key19": "cgXQRjq21P8oDPXMtNVavD4rzEdiBB387yGWvkZEpJZYtcRjwxHHTV1BFUWC3mNJ95oMcBJFAXGQmsF5EzCzqan",
  "key20": "4orKAPaJbrR1fMSM284wruzVmHYYXv4bwnHZcfG7jJVrVr4ewA3gQEkU89njk5ZNAguBT6TYebf18E9rdNombeom",
  "key21": "5SfCuF5yaRMpvAJ28PFJq6R2cfENswwcYsBbiA1J5T73zEx8BWAyFzz3sKWFpyPmygSv9ccqnjEr4x5gk8kF1Qx9",
  "key22": "3jx47xgsHC2chWL37G9EHSpbCghZVKDz2bMqiyWV2PQQa5NSDAXNcyFF8YU9nHNYfWVZTppTECqg3UirbjYdQF1B",
  "key23": "3ZCvsPgscEoB44AjLKXfy8MvUAzh4vwJZRmFrA6Hd1MELYKQCJAiVU3CaMcrA4atQdkA4TNfgQsfoSyas9NHNBHi",
  "key24": "34QrjWu3VFCW7fQBAJ2hFBeDffWeuTjKMdrMt9MmN2GV7FA9uwDXuyJdGHb6ixdN3BqomgERhLaTLF3QmZwNZYHi",
  "key25": "ru2eJkv9mqsyNjWpfkHNMeUUMJJRVHrr1HZMxJagG6ghjvu62ZJSq97EUYQfCLhBNyp4GbiXrzA6qNyQiof93he",
  "key26": "66yjpAe3idLgHWVR91kDe2dvn1ZvByitJbsubaMmjkwr4kUBUz8nqbmAZXXWuBJn7zryNam4XuLnHUFjv2MnVpq6",
  "key27": "5kABeYR2Gj4HR5HLfyfMPptkB1fEGHo6hD5fEBigj9R9DU86tN5K6puuNXmroFJwUDcwx6P3Taus1EYgm3XrNYrD",
  "key28": "3b2ANqM8BpKoMhZTnb8N7kbkxTrrXUu7or4JboKqf1cyFxpc5EkFzbPGJ9QUEP2rvzZkipdnNoFKSMdMTCtP7G15",
  "key29": "5BULHtrBPJSExBP8gXJWzHw496SnHwAPkENrBv8dGbZJ9fEs4y1Wtau9Bie5MDRBbt5QwRZggrCNZ4RPzeHek2M5",
  "key30": "5k3jrg3FYV2cYW8PRk3U9E69u2kLPVGvCPgUmDqNF3XhkbrjGgNkaXG4QK2gZQADiwdKUqbv6L1wwzJb774KtCyS",
  "key31": "zZBYJavS12g4ks6awh7R3s3YrnwsqaYfAwQrFE8CLZRUApmDxNqcxJ8786UDpqARUizjr3LEhqfrus6t72TExbV",
  "key32": "4bnRGsGsYnivsaHEP1BUtkKiNoamvgUoU2DrUAt71hGK234X3i6VySBATQZXt8eUaiKH61rLmq9qnav2YdDWPrwp",
  "key33": "4ShsvFJihRJ2N8p9J59ishwPRkwS1g2vJx22Uyy7qztQmPvEcjsxGZ17opdb62SqR8gVbiEz8SPzV7YWXxqXmAVJ"
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
