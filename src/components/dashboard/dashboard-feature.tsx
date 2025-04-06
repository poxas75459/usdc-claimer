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
    "3dhF5nu9FaevvmAhbUSQwm3XPEYzeCdtvMqmLCSGNomRkavTaafwgJBhDFiT4q2hxPjaE3ZaHiNhX21rCEdSQaEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pZScrk9tTRsnY7J9DGP7JsMLYSUdRtdYPaWYNkKNb3rsUUVeXtPL9MUPPnjxCnijAjCzrRPxaBjRXFD3VkxyA9S",
  "key1": "29EPg3u3krikqm1hK1u4GhyyoWofWH8mCwaNmQPGXANNzcyeHBu3MBuv2W5Sq2jHtouvC834hcyJZG6eYmznxLg2",
  "key2": "5uapgHtBraiBR4oBmQuzHYK8jB6BedYE2uZSAzKKPRwyTsdYVbg34TDvr2w4ZssAaGp2S8gpy6zv8gVAh73kBox",
  "key3": "4HTA6soTkg6xRzrNARnJahbftusfAxZ5hVmMp8SsVpbL3jsMUfqgLfuMVZRvK3P3vkbtGQ3F9NkCCVo9PSAN4Qga",
  "key4": "3u89S3UPRuFde2J8f7tgmVZEfFrmyZdXufKZKWp5Zn1s8ce4A3meGg7EpvF465jNDYoKdEcuNRbXGeAve7jcbmQz",
  "key5": "22MABJ7asqh1M6oaqB4qb3qfUZsznhsMbiWDKqP4cyfpEdjw2f61BD4AzKavYJhJf3hQFjWrupzVbDSZcpigUqzU",
  "key6": "3Ggg5t4amyKL65Ryd6xK1NfqMsyHKhfuWUXSRMEcpcnpabb6DRnmKjeV7qRF7cxCqRZVQuUb8mvsm1rNkRHvCc8u",
  "key7": "28iAcbCohSnFTMv6CZLu8WbZV2mX6LBskRwbrjCh533qtjCcf4qeatouZAMEZ5NtCTpjd7na3yGLmGig1WSXvY71",
  "key8": "5LwJi5rjMptHsUkQ2MMtWMAteAqqZthyLnVkbaxnwcMzL9yF7ovU4y2ozKSDGNKSVJmUj4QXBRsw7Y5eGNYbsond",
  "key9": "63CSaPD6TZFVeQMob1LTyorYJTDKTKoDYjXNaPuYddAta2mtUDhPREPQ33ogv2YrbRHnuArmTrC5npZSUhzwtV7C",
  "key10": "3MzbPiKPe2yWhkZ5ss2ZpeUgq2GNMxoPFhsi1Bz2uLRCqjcHdd5735q9SyHo7CYSR5vQP3V9SC5tg2tSfDartEWJ",
  "key11": "4oucfh8x7sMrZ4EQA1tBcNeamF5PucUsS2ARMRrXfWPT5TJq46wJjCSEjEn9s3UVLaMzj6nUgE2xA7MN4ntcG2RV",
  "key12": "x2o6Zw9GbmCzpoQU14RjnRY7UkGjpHLg3NE5KNh44zaB6u76XzmK5o6jUtfJK7HSjRmB3eWhcUdkGDXpFK89DeR",
  "key13": "2VbSA5b6AWqwfnzRQjPAbumStiJZNHt4hHwGubB7WvsRehKG1fKgz6y8w5bidzcSuXRDNLGkSKqNh9NYGrb9m4vj",
  "key14": "4hAaKHXzX7FfRc8fG89eoPebGWstLB2rVbHj3C1y1nMo5AcyV5UcGzaqA2oyFisfW3RbacRc9j3n6NxQyqLaeoqB",
  "key15": "63GX2ibUtUq1x42AA52PAx9LTf2CkJLrHEiPhEoCTPwcNaLXBf4do6KczWQmEXUSN9UNdznospNcL9tgSqZqdamg",
  "key16": "4oQ8b6rMwQrD1KnJvVsL81wPyJLF2g4cKEpqDibomXcsN5PH99qU2c1kELxYQuEhUL68W4uPrRXUozFkHRSwvpJW",
  "key17": "4U1vAdGXBFhNuNXwUtE8VgUZ6PHhLHoPSetm2HB75ZWe61iPs7699FDJGauMFWgy2ZNG6okbe5UJWYArKA6S7qhH",
  "key18": "5Z9iYWTQZKLpKxXg2NggxYeuKkWGXwar6WnwPTPektvA9hL55Mwxg15Hv1rZycckaoLFXHK7THn8SmJuwy8zH7Ca",
  "key19": "4WxyMuDgxDck7SfXh5B7MErUjtoNVBmyfRakFG4PC91pa1BLyNzUiojuQ2GHdqRXfYQKN9mUKtUkQJFSKXnniztZ",
  "key20": "2SESnMJsuqWkzFdVTeruBEaYUcnVekuFcYGsRYW6SJs5K4kYh57jqk9UAKwz4ThxxmtwP7wLjkgsXRjExSFVb2Yt",
  "key21": "851wvVcjjSq7MBKBYaVXXE7LYJVPWqo6bQmPeVcZEUmrMwXT8ySQAijhApyjqBu3tMsbww9sUsZYVzAUXrs6NGr",
  "key22": "4LzRzQ5ucoJYaw3mtzr75X6vW5KEmQB6axehQ8EZQ4xqXdYzQQyezX6p3TnAA6gst9nukP55uaAL8GPBPUfkJrMK",
  "key23": "4mFr4UV4QGznkUtdPpqM4CejgjSkQW8bLEosmwhHQzE5EUaSbVVtrni4Rpy7ANTUnZcojaF5Yu3DLmWCbiZDp3Zr",
  "key24": "54jhN1dvTxoA3xVpkFFBb14Cbj2x4Eo2dPLmvzJBXkuVguKB3CoxhpcQStm9VMBoCjGQ18bK6AJGXNBfc4xQ2A5x",
  "key25": "YCrK5aW6TLKppYqd8NtL5rS118h2wxTnz3prDV94VVZAAd51kxf58kpJSknw9ybAMEpREPTo4rga9P1scMHKiy3",
  "key26": "4xjvaQsigsvqTZhzUkUG4xFdD9F9Hzo1omHXC4gskYJEnMpa4kjcE5c8gyVAJhrhQydV4HtUGr5HWEfF5aEN9DxH",
  "key27": "7zSfg4Ui8tHiZQfCNvR69VY1YcYsxygWfMVfT1BBoHeY6u2rJDuYH9YaX5tXVTtSadrk963shiaXSVeA7tnLvmM",
  "key28": "5cdmMvUPsbrfz59u87jonbAuU1sWtMUrbYQ59BHRVs6rAkhZFjeLtcqtHjW4cvWAf3t617VUHXdHazYsaoEZVMTd",
  "key29": "5ANmdPQx49PDia3y9tXXojCcyGGnx5kNSAanNn592UgauDHvPJwjC6CH5v6H3QYHJg3H9euGqQ2PPCHn8cDcXrJF",
  "key30": "4z2mSJ2PXfsHUSB8oqDcyqXDpmNTWtNJ9tyD7tsJp4rQBpScjLDthaxovdCXEfMp9Lcajkva9zbotwTaCU66iu6Z",
  "key31": "2Q8rtj4bXV6NmTRWFLLeffj9E1uFxt5xfXx1WAAc9E1gTN4Gwtv9NcZJm8z5uypbqQXWU1yf6hDwK1HBY1kwBDZT"
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
