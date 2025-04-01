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
    "4DveWnJkmDnfCPweffWo9wEJWtYtbFkPnJCD1K9NhMAs47FKGaA9h796iZ7jdCSsgqTmLUWx7LfhWyro6Wjt4Mo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "amFiAzj2dAeo7poAH3yAZMjPW5gpi3huG8EYsxuTXbjX53FZhpXHqJhTgHTPPGVCYixhYS56na9WWC1HMmBhNq9",
  "key1": "5JRDwHLVkhHJXked6uZCDf43X5oSA5qR91nX6gBKXUYXrSYc1B5ACjZDAkTANG9ZtgLNgpcVsW4kKRcPCGoMta5y",
  "key2": "237tcdTawXx9P1rWggFcTbzcoe6323c5hstS5SvTQjTt9eL8U96gY3mhBRs1SkcduZbGbKo9G6jp98ZRNQG962X8",
  "key3": "3Zp1rEA2KHot8KFTrVJZAefJLu5wsPYniwwsHkLtFNu9yg2N4N2Wxc3PNb6Zmzsjz2XwQm4UmFwX8AjJD2ppTTz7",
  "key4": "2eC6TSKVSymzMf7gwojcWSaZ1Wxq76MUbHEC2kr5wXm9XchgvRVdQBdJjdCzRdCJg5wBa1CfH41JUdwoW4kEL8Gn",
  "key5": "3vVw7sEociKgVnvdsZb8gA3iewYTuWbaFfBuwty2JrZfxrLESRDV5YtyQKdUWVPZXN93aGVLzJ7BnPoW4uNpj63K",
  "key6": "2tbxx1tPWh6Wct9xzn9YoUSgLjmSdxP5V8XeXxcYv1NvsbdLswf3o972FZ8R4WGid91zPWp7VSWGNXybLsqdDy1F",
  "key7": "k2uPGzib4oiiTBJv8M83V6SVKT4KJaTnZfawMJ4YgSQzHTReErAMSvktoTzbLa6ESKDXmG4os5Po6PuwS3Uax1o",
  "key8": "stY8wYy6Wh8QrZATXbYWZhHswc3KTuFcZevFKvDWHep7AyNyE4bVuzTQWxhRW9bTbguo7AsSWLsYpf3bpahUvtd",
  "key9": "1je5cnu4srfM4cr5qDW23XETGj6XMijBvuiY6NFjc7WpjECWPSHmnhY5wdiVcXzsWprQVJZze5JJbEN82voESAK",
  "key10": "mkvUZnQkWHv9D1WCLYH7zuf3a7Jchh1eHWk8NaJPhEbC7DZoEuDGuUPrXkaW6jhZLuRCVj3m2cKgCjk9zMbjRyR",
  "key11": "5MDGChfrRXfTHULLABVjwXZqNjmpr7XrBo1euoVM8Nu8qXjwMA3VcgW7dS6iCyWjKNdt41hdguHjj6uB6fUGvtT4",
  "key12": "pE1sbA6E57cLHefDk2KLzaQAZSc5vYKccwJwCDxkGztAaGqmg2XpNTT4Za5Romo5LBMqyiEC2waAdiaLjFPzYx3",
  "key13": "5wxYjQafSKaGHTPMUAPXUZnXJSPJPMStSqE4dWVabJ4YQ5bJ7haUmo1GN7gRVVTpoeFzUcPez1HtmVVMK6YJDnzV",
  "key14": "4As3GJbHHf3y1MtuQ1m4bbe91QQmVgrRmN4XcF3hVoNX386GaZi1S3tSjiSE24XkADW5TVzT5ayBbw3vLedFSyE",
  "key15": "rQsomL92KoTMrXxkXrSGG5SGnYLii8rGdc54oEyLDnFQnEa69UFxCNxzmHYEEBVpPMK8mgCUvtSsWpC5gsvtMat",
  "key16": "4edDQ3TngM1okcbSZJgWRXpaxr3NYXjfEvxatsstrWJz6pa2HupvgxaVn1Gu9pFS23mnTvcimwG3iC5dkYDVKNZe",
  "key17": "47hc6i4pLDCcuQ5btoHkLbYCVnVEC8h7Ri5MQmpQHj2JVB4U1kydHfg2SM52JjiWRPET8pPRaPVDdPZdXfSXGatk",
  "key18": "56q9snkp7HXProy5J551oPRuDY1UBuEdxvxvtzbX3qUTDzfZR5F4goP9SuC5KRg7ErHK8oMCTQizrNavk3eMpTB6",
  "key19": "5zErtkCND3GEw3K5yZcLyVsRZS5WyeqKwuFbKXESoGPeJE6Hwoqas7ccjbok1DN7VQSMEVsANWxm8mxy8ivKUYVr",
  "key20": "ykpSyEbyh6d3qyMEYJKLJtEbGKopnp5Wk6AifebMofyhxfiDdyG68nfYuNndtybTUhvNAnHhuQwtQ731qmA5tms",
  "key21": "57ntBiCQ8mTq83dktGbtKUEQv79s8dCccNfDoAYzH8v4D4A4gcsSn2Yt21JJwytuRG11j6hhdtaDBMcxc3CetSmD",
  "key22": "3ygznSKLBs4oAnWEHaDK6hSMMge21X8YRb6hUaEJtApGdFfeGR9QchvAj4jY54VUTeEqpbD8ZCQt5sJb5UQbyonc",
  "key23": "3AWKAaFgUzTQzyFAYrcNeKq3SbPAEtW31VEGpCKWb7owYWn2oFzTxPccJppwpd3iTZigR81sMQfyUH5PxoNM1LcM",
  "key24": "2QG7YK6zwnND2UgRPtvT7JHDeEwNLXnJvfuaZvEzf2pXhJLyZLP8hDozBxsd4xeCyfANzCGcMbmYv7MWDKG4ySCe",
  "key25": "5skzdP5CKUNNbaRyNbBhmDbYCDpJoLdLESpYzv9yb6teFfyewWfxVq8GoLfE9rGBxrHSetDFPcYtpNTei9RC1DRb",
  "key26": "2U2Zmf5i5PXjfSWfiD5z7AufzbcKsJ5ATCWC85GvsMZrxAerTfVFLkCmUG2Mai5Et4eT8Woj3siTqhhQhAKNKFwT",
  "key27": "2TZ4oiRLtuBQQ4q4zKd6bW69ifYdRYSBSdvCNktMEErMqJD2b14KoCiNBThQskcn71aqdPFad2qKp9FExS3NjtzE",
  "key28": "4Ra9j85vSvJmnzUuzq42DrEAMeU7iPKNkrzpkxpoZfzaeAJGn8pYrVpU9aMeZrW2fHWH9SMadMjD9qM8cjxJkmi5",
  "key29": "4H5U3YZQYTLbnjAcrpitkY55Zzf51naH7vJzVXDs8JnXLMxGvXjYaHw8gqeC9op2tcfsBjtSoS7d1DB4NzV3EDXH",
  "key30": "iQS4ouf5uUsb4wiGfZLZtACKFoTP62vjKRnGCFsWQhzXWYcyiPsYzkJ8r2mJs4M2MN3ZWTXhrArcQvtZEd7iW1u",
  "key31": "41LE2xu472Sqh4uh46krkdye8hU8BAQRZQqVU7SYTekjUYLPgCubP7sbSYRdG5r1ZBMKFbvEKrnwH34PykZ2rqB7",
  "key32": "3U1ykAEH5FTxDyGEJfV6avi8S3UUxjxN4GcVaQBuPo5RQZ6cGwAePVaXiUKttMgRNfkn2Q8edtHGXHpmiNF3Q9F5",
  "key33": "ds9C69yjZh8FRQchnkdvS7prsbdrDGkM1oskqcTeq7wZr7c5kdoAac52DS7dGnHkCip6fgq7ziwzeEFbXYn8LAw",
  "key34": "332apDkuYUuPjZMAzSaEfPVMoCez1CYHsfkvVJLQaFoSTxF4SQ4cbyMVQBqQbgZJNjPtBgHUkKCh8NrWV1pCozXM",
  "key35": "5RoQ1ZA8hWDyTARc7brmYDLuVGwaDnYnvadWtuJRo1qyEmRm2yr2HGagh5bkRNZ5Y9V49qPgTTBkj2qqs8qYvvF4",
  "key36": "5S7ByqtqzQ1JatTb38r4H5t7HCV8awsHH4kZRseZriGkb2oWbqvt7U8BkgZiit6LhueMxDfuE6Jx7g1WVzYgiDW1",
  "key37": "4x3gwDwPsRmspuj4Tc9eLwUFG8cr3R4mweYjeMBUaH2ZgBwTKSEfwzEzY6bzYRJELgKxwdEiigoF6kcuTRCda1dx",
  "key38": "4rG3vopPvzuDJzpWWKJR42UZqWcWc5FAMhDLeTKYW1U7dhLgBSPbMEfJbpGFSTfm3uvevJx82EU73KD6hkJnqAWn",
  "key39": "Vwbb7CJUgb8NgJoTVxMPryYc5PgXTSJ46zqiBaPVBqK2GHhPtbawDYMaeX3YteFNtQURcdi9oif9Jwz9Q5sQcYg",
  "key40": "5fzZLMM18ZeXbPwcRkbRCZt8m6j3a5FizgjrQK9DQjBZa5AHUyQUjA5GU1ec7Q2gRkaGNKQ3iNyL3DtgCPCHSN2m",
  "key41": "3dZZKyPgYNBkFgDsF7sjSk14fQe4sgEgAexU2JZADquRaN5GXDusJTJjZMiT1JEaL6fHj1uz7NSx9DZ4LXLUaqMf",
  "key42": "5EMQxnDMtFAothtFUUoR3RTZJbF2Pcpov34dcLWpc8ZESLqfdbAds5z6ePW7m9KkuLBtSnAQnt79ZHktXaPD3Kig",
  "key43": "KnFbofXjLffcrCSjByMGZ83X8ac5fAxkx8zSjUuhKRJEjyYCsdJPuk3zvRaRtwi1BJm5cVr3U1Eb2hG3Bk49fHL",
  "key44": "64XSzSkYhydoAjKhb9WcFQKCRx4KTBTr7u4h3grybnPvdQXnkXKdUcUg7cf4jJY4o6avKyJQB3ea42VHy8HVf1mC",
  "key45": "2BZeAtD6NGE848c6GXx3LCV6LzzqjKDXnanAAh2BxgVH4QGfaVq7tEFB8ZrYaHxRup3L8s7bFF5B96omxBu1ADjh",
  "key46": "3EBrAa7o3mCQtv9qM4uRe57Dq6RkfswAyXe8zUfPS5e6qFMvG8P189QwM2fqvsb5UL6k4L7LFN4aYMhhn6EYyUwN"
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
