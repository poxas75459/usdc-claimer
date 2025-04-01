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
    "4oPfK2R4cnqodewLiacrwYDzHnoE8XkT8fcwkA7vhCoQduCAn6vXFhs6hL2ujS3DpZUzrTLYvtx3zR7WVWFWNyZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jibt8SLSYHcnQzbYJfLd8tQFwio6pdYsoMgmQkrpt471JQe2SVRkL57MfpZSRku2DHRXxjHhQUizffLEHpa26NR",
  "key1": "2cPbEqN4GnopmasGBn6bzqgnw7JyqihT1aWUQMFdQBeycgei9i6uYyj9R1q4hAF8gNNDeadZP9ahSRPaY43N5zeG",
  "key2": "4WeVcdWkwnDUx4a5osunKtC43bKNKvJFarBKLUvqiWW4tu6uwpWbPwn8R9QRB1GmXqQ9LjZEAuDCJbQV4CujZ33v",
  "key3": "PCmam1es6zWLzJUnKeXKNaWtYD1kMGPo9ibXQuE1gKU8iMxKTzjrWYEwRnen2QKZSG6rxY4djzWuTSvnYib8Yor",
  "key4": "3p6WSGpc3ouJf8ZCLipS5ViX32VggcReHjeiZxtpk91MFSKBKWB8gNq4ry83EDjJJexStBEbyw3C4PexrTG6bpYA",
  "key5": "3ZferkxeXLGuzq7Yaukg1Wh4T8hEmLqk4XQkoH6TjvogMHAiykyteQvd9CWnBxy9bjGn8tixobHmRM4oBogJZE73",
  "key6": "4saEtG5bQZ6CyjbpLwGbuq5j4nUUSKe3aEaHWDfqHgPBeFiQBU73p9X9sBWntm4YmaSBHqJbA8FABRkqLyLDPE9c",
  "key7": "612BhMwFuAsjnCzewBtPw9Nihf2iwDJamQjuAeNpKXJXNzW3a2dsZsx5tsE6nCG8SyvNcEbsaU9Z2PkKa8WbrvaE",
  "key8": "59FHsP9Y1rRfShsBGw5GBRrTUZaXBZZ4GUToKif9aujHGKHMhB5GuycfMNB7hVypHMLAeEfzZZULM7TfHxsziXSs",
  "key9": "4RVGG4PCzCkrbdzQMp85dhj6MEFChycHneU5Get6ue8TawjwuLfKEJGNEFbwUJ9wihfG4SD35GDLRjpW7L5jk9oH",
  "key10": "2WzVthKGizVyaczkckQnStwzLs3kzX6hg7L7ZSctGF78qnpBBR5Ye2hja1hemdpKHeaREBX3V7YXRxBxrxpmzJGB",
  "key11": "XjYhdxNVXNRxroyzk5THpfCdeifYX86ufCtp585jUkKwdbrsZffzb3LPeopKt4uWtFTA5dmxAB7wntZu2pjzivG",
  "key12": "5vyAi48PrVr4VHZ8e1oXCAMRYcS2rqinvhBx97ca9jZTwQDLPVp6r2aC36Cij78tKtZ76ubHPtUYX7UVtUfYSgc9",
  "key13": "5UaH91AFAiNANQ1sQr2WmQbysdRamiBF6NK6CzfNzpMRSf32R6s8gBVwHMHUAw8sEXxB5FqGVZ78rVr7QyMdFf5Z",
  "key14": "3ZPjSKeMXgqS26ZKNb7AKiAkxdzdM5G6pa9PFN2ozuDhMSP1ymxCZhCopyeHj9jcZMych4P3S6QdebG3qzzv32xH",
  "key15": "4FCWfGWi98dEstiaEVou9ycKt5CjN4yrDfQ1f7pCiTVYjmN8AqemvYqspSHjs1WPGD4Krmzk5KuewbvaZfoi7DN7",
  "key16": "475Q2MfhtjaMkLvHtym7p7W3itiLvydTxc7bpeQ4cm5Ct5Ddj9vFvvwSLTccqAKkdP9A1hPW3b5B6C5hBP7K4Rii",
  "key17": "5pFGwwgKxw2B5jACRrb5u7BazCrRqSWRY5kZBVhPLzwWGstK3YSqkt46BKmhL97ARXVx5JqiN8GF9LieJ8jnxSry",
  "key18": "3xqQ9FFCF9J2WdoCvNUTCYQCiCUJN75LzcXE3xycxX41Yvem3pP1fSHBAuNQuwkvQYrXXaAhZcH6TKDMBxt5Xddy",
  "key19": "5cxuPAzEcudpWae858PWsJUGgXgWiQPWL4LVBAbn5kwdMHZFqMNFvsYVeN6RHAdPkiWA18TgxnYG2mTvh5ZBtMpk",
  "key20": "2LuB6tWwF35GmvWhLQaKUmgqEZXStKcNvP2rcwRukG5gSy57tLqiPCJkiQ16koorPxEdUTthdWxRN5Aebc9AXTYg",
  "key21": "2FLAFhxhfsreVBTAkDcPMFy2dvGFqZ1XVRDr6sY79c1WKot67oYowtQXUc54qPMArsMSbriNo9L4qThKR2EushBd",
  "key22": "3xNuTb8nQ1QaWXrRhsTi3fSEQun6vApuhaKvhvN5T5nYCFFmcCrBwTWpWgY6YhhF8tppypQZinQV2grBayqvxzWU",
  "key23": "5nvasQUSWrzcMhJHKx8BjsC5HzVfUYaWAkgjTpgygbpEwqA1mx6EVd7V3wR61uN9NXrRyDFRWgDscegDiu1Q8r7R",
  "key24": "FdGS7nEJYDDcefJygQ5Pm8Q5WPojsqoDB8HEanDZofbiQ4FWvYmhqpLSxM7YMqwTJLQuxe69MFtah2HA1sCGNrT",
  "key25": "3TQAPcnShrFRV1m1DJWPbVfQYSjr5bsAH4ijVeL4aKaAhRkkydSBx9vxfwvCk3hL9ckQkdLamRshQdQ294ZjJeep",
  "key26": "4547ri9yHHMzvy1rNuxJxvwzVXtRuqQi1dFCbS14dwU9AX5RsCe1533grg47JoKxBDjJG6EK48Ckos4K5JuvkJWg",
  "key27": "3dcRwXDMJRjYP46BDHmZ7JQfB9o73ZvZpA6WsjTfyS3iqh9yghph1RJpgchgKUrKcV8RojpAqxRR2LwoiypVsyNg",
  "key28": "yi9xtBgJx9cUovubNQBzXs8uxtp25C6Eh3Uac4cC6mvCjJwBYsTPKKPezc56YtSjjKiJKG2y1hiLWj4FCFJqjb2",
  "key29": "3sVh41VRqfyBMxzxCnygkCxbRZbmgbdfvns2iXSAAiATJ434kLZ5Czp83SfXcScDx4k1p61ggc8ZTgDGdAstJp7f",
  "key30": "5kY4cEHqWqr6b9EY9SJsHWs6cYVvi1Q1BvcaYyMtkgnhgh4SMknwt1TfRgDgVKot7eWg8b8nhSnCH9QzCNZsFXoc"
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
