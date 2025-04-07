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
    "29T5y64tiWQMgtyjABSWskGyeinYWPzBdDZKUgwotd8zheVqosZzxg42dhsRcdmHAY1ggDKWj3U7WeprxWivevRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YA91MKf3fFxGYiQW1UnjzrNqneYBJcTDX8VhJtkQQv7Pk8dVM8kC4rjEmkWZDAKEgKRTVEvFVns5k41AJT6gUo8",
  "key1": "HJ9SLeMd6JiiTsKiaMKU7hRJUvCsmYwK2q8Sn7Hnp6pUu1wyUzSaDDS4n6wvtHUNFLpn6hLmvhgB9zYLJttAnow",
  "key2": "5eC31FyQKyWa1dNCSUa54KP5D8B9y6hKo4aUcsrjEcW1EtTVJggMVwPbDphG9bHbmQdT1rPBRbWLJYh6NgikNSFW",
  "key3": "t3xEKMeA2zWkAZQEHUCV6PshhLGHmMUm2W86zBmWocDp5cZcvx13cwoLKkKXfVsmswBGJvsQcfbSd6obVrLFzVz",
  "key4": "4up9TY68v5ZZAw2x5Ccb4WAo5WJn3ZaEyTopS6pMxPFG16WhjAvXM7KJqsNtPbAnw5qQcQMHkKHhb9LhS7WsbnMZ",
  "key5": "ueKTBE6VZmBS1GJPc6Npbwn8qTQLzhp4x84qgMBh7ArSqgA4es39R9Vn2gX7BEbeWhPdB967A2LfY1RcGjqRosC",
  "key6": "3hSPS1rABxyjgCiwXhs3DojfeMZxR42TapyqvtdB7nPKtPqwzoUCQA4CeoVz88VyJceN5D41rWgF6ZRw1G2b4k9D",
  "key7": "2Vpti8wCaJJ5ckAwDEwJP6fcA8DDxNZhkisr1q9NDSp9mLzyYohQ1GsA7HfDcoo8qjmNWGyA5Gm1LfCy8DbTv7NU",
  "key8": "Y2fFCQeF2yFEumUBRpUxmysNkc5SWnUqJo9yjtvrA1gZRxkyXsCWZ9rYrBawYtotTSedimG6yARPCyWPfqTEbte",
  "key9": "2S9Ecr9BEBw6BucVUys4BC8uSgc7y95MXPuV5UWXUqQvXG7MpZEyJWA5p4xP17g1JzyaVWoXqn5AvrW5dSAZH9Qs",
  "key10": "3nYtf4iiB3vqUkNBpZzUuLQ5HiuHKLoDupzGnaqSN6kbuy7QJ7a3KL8RWfQVi54HbDkEZjp4hvMVV3h7kHmVNFBm",
  "key11": "MDtLDgGN4fD2LcmVJXKi1QTBi7fH65ENe3g9FXVACrknBAkzmw3JbBpUaiuSpwsA9PGmRrayjtKhghJakghZ4pT",
  "key12": "5J8yPDw8fihp4yiJ7NgDeNf1H8eW5Vc8EYASHvqxHkQFmnfgcTLwS38YxFsRJsgn1rCFDoFEbBWCpi5p6whYefQb",
  "key13": "c3MRwnKZfzCE8z43Kwyqh9j9V4iwp3dPjgwh4BDrFnGdHVzdsKYukscpvyfSRmfTwAmDBpjyxMGCPnsCdWjaeFE",
  "key14": "5Mb2yDeRA1CCU6yEPixATMYcagKFQdT8C6jkmGb1eMDkmHcr659CKqb8XECvT6KyXH9asZ9iK8ZeUJzUsZiKH7S3",
  "key15": "2ewvKBxHm54oHaLkhXEQB35PJTQpEejGuojAfV1aNzD4uJKCisxdhDAUVf3ZMNDfaRwb7C6HwPJ8bcNeCQ6z1MtB",
  "key16": "5DfTarxkujnwFFzvdErN5Wyb9B6aR1qykpa9ZgnNrndN3vdarMPmF4JktCKHaDkaXjrwNHye3dVn7UNZgd2U8zsV",
  "key17": "59bE2UcRSnRQUQRTGCvP6hpcoH6ynysT77UfmonTC73hQdcKZe9Rg1qhuKsCGCSSR35CoLMdNjey13SjWM7vgDsM",
  "key18": "4TmT6RsUor5ohFygxBczKgeTqRLvAUhEiQ3zaTSNcMzWkHKLgZUtotDxSTS2LhEQtaSXaFoYHGXwzAJmLA2fDH8H",
  "key19": "fD8UCEMqUTqid6nSZnF8HA8W6KQ5PsTPyCzw7pKo5e5kjJeTMedLBNVLMYPrBRYFBk4nyKnDhSmeq7uuLrAW7F7",
  "key20": "44bWpbXoKxiFgTfPrXDd6X51kWoeA7Xv3wz7UVBv2DmiQ2rp5W5t5H3YZj6bU9iFN12MWyQQg8p64RAtwu5BbAoR",
  "key21": "4YPs6NR9PbcQg4BCQSoDocddTkmqYUohwFaYUiLeaCeWokCr3iqkeAdizbdHQwoP7fbqJrrNwGmKwsUw8Chwbm8e",
  "key22": "2AH8aUkXfUUuEd3WEJiDEEqjobEnW6X3urQwyZcUJ6Ha9V7vdqKfqEBP2wW6Fh964psgM17uzk9nkGs3uTXwHwDq",
  "key23": "65RnF6FY5mJXG513Stg6QddM2kvKrPpEfcY7diV65ykahq8CU6Vesxrg92ZmzJhhnuKipTH5pmeNqkNbWUBJb5Ko",
  "key24": "62B7gBTFfK7MAjv2LNiMyqMmzqDcVnzuwY3gyA5DBP2F6bbUMarnRgesKqpkswJjkCyg2t5PyC9TqV39XkQidpat",
  "key25": "4oAVbLBeBn4NeQyrVqkFkuJJ8BRVu528iuz3ZJc8KNRLrCir9kDkBfhD9iA3QYHHmtB3kFS2HWvn9e314JZx7C6U",
  "key26": "5WNkTdNzb3H62CFSw2La6VPecwp72LkfAAcGJhgia4zvLavYcYpWUSgMk1AMHwyNLrVMVK5Z3Dj6QXMVyyc5r7to",
  "key27": "3Cy16EJNsgSH6kwucMAqq6XkxRkX9sAwYpCmjQbJbeqAoycR1Zont6WY7PFi3PJJfSHVCHuksW45svhXffdzCvKT",
  "key28": "4QcyBUgU2juRbUxzU77MwWKwSV9naYx6F3KHrzLDmkJKtN8PZPmnQxkVLTvD23FzTh4nGTZmdieBRWxJNLFypYPM",
  "key29": "4a4Mr6tXjyr2afPHRX78ViMPJMYWkRBA1PaZL6HumebbbbuLUKajin5zi1SbjZKAXNRu51x3K5wX52qh4vroQwHc",
  "key30": "44o8dbMsFjJpMJALSauobB1UEcgDdy13u4nuNuyn5PEYNXqeoAQ5DWmJdADQdxYxKkFAD8JTCv3scm7hrmJJnrBB",
  "key31": "TmSBqDt3FLNTqmt4rXC2GMDVW694p3togL1qZPJgyWt6Em7aWGXAWkaYee3ZwLS2UvW7G7vUvRjr5mzqk2ryDpA",
  "key32": "5qdkmyNuVUVpAof58NMAtgri2e8jDsqqrxCcD74EgGppg1ie3TizFWNpWaZ6quUGDwHTTKRThNoBpHyRwfCuDX47",
  "key33": "4oQCThsf2uXoaPZyEwLmcBS7RaRxUxbFqtpxguK9h5X4325M7NeET6TqWDf4dPtT62NYSxkTSfuTgLKs8PPvk1FH",
  "key34": "5MtiVAfkSzCQ1mbYRzMC3YXJ9vtbs6cRnRPD5L66BnLFjE1Eb3k6LKVmUSLXSJiVHQi6i7gzirFN5pVkYPKfSCaH",
  "key35": "2HQdUNLW44JyDXqr89EbipVA9oH8JnPwSbBW8BDT4HY7ttDNdWxE9WX95ypcaeQyBdzxjT5EFjMfL6UEw3Mnj88B",
  "key36": "2HGQvmAnwJVoAb4b9BcDJw2tinjF8Cy8DNec1yKaKn5yQYMjZmxN2YKrgNyXHeJiX7s78BJJQQTZPJbMJUofxYct",
  "key37": "3zFjCfWqKGBFqQa6o3ycaE6XbUDJomjAdYFMMBg9Yn7c1FQn57C8haewwk4vYTAkH8coNFX5eu7NBiTtnrvuQgin",
  "key38": "5G4nfprkZG4R7ZAHiVtCxrf7npeWBHvjK5P7uVH32QTDkgE9VMvYBnG78Qr9nNZwQ5bNmckYwSpKmZ4M3D2Rcrei",
  "key39": "hmkFuqFgaiqs38DBWT9SFFng4FMRHZMghh7Gij9M8gPiyKQe5MEEdf29nq48M41CHRGtd7YrWgrMVHicFUpAgXL",
  "key40": "3M1MzVwyMDbfpcEfYvn3CQPR8wmnforFYpZQK8ZstTXL23k5TtHo7kXdZwbNVr2rmXygnk79kikEegrMXcqzpKTv"
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
