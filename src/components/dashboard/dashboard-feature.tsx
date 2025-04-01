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
    "3CZLbepmLLtkgBufAgfa68sntnxqchNJgVaK6Swp2chy9VNvfDEeBYS3jDcukK3dKbuBXNCdqiD9eusvjHaeQsmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLHrFvpUWXCWtaXBjSM1jGQ8VjpQDWV9VGW5d9z1froaULvBye6TsBkJ1ARwDPhKwkjVDXw7Nzy3SCCVoqKiDZY",
  "key1": "5MMyHzk6qDxy2VhQMarDmmZTjq1u41Xv3M3qjfr4qXP4wd4fnAXC4dME9eQsjYvtAiRjmTqmv3gfeNwsGUK7UfzG",
  "key2": "xEeEoK4nCmi9wNVLnXgiAmhudkDwybP5tuE97ZDWaW8DsvSVL2zWYL9PF6HRcUTmMt4HZjJKYnV1Vd1T8fxg63J",
  "key3": "3yt4GFUjuAjGyEcHcQ7ppTKb3d9HTQRpy21DSRfEAqUovcAADyPCnVETus8AvVGrpt4zpL3j6owhh76Yr6aLJ463",
  "key4": "ZpLT6iQNs6XSA5iFHAyWMjcCUPDLKtbQqenVPpbBVtYMw31EBmgVbkUU6jV3nmAGKvzqvq8ewLet34PDVSBiDRF",
  "key5": "4GVtBPNZ5TZRZyypyM2e8MJztSQ4GnRfmJ9Dnkd7HemwDiFYq89retNmRSdqgUayXtGhaVpBh7rg4uRxNFHKwRyv",
  "key6": "NZ3YbudLszVJa39AAx5QKHCje2gaLFN2PYKdQcuQpXpjB1rEcT7mCvZtca3EsjrZfeCRrkgv36fGnKZ11tvgAQa",
  "key7": "32HczbSm8g9rephH4xtnAYRPeU5Tp6QnyxyskHHxRqJQm8D2jdH4asAXattR3TfmEeXVPdiCYAn9vPkPMJ5BLxtR",
  "key8": "31PusteaqUH41QNC8t1p813bG7xEDx3FP8KHfHvJQ3h2DX1bVezs9xouiRf6819dwhQNrgEsNGfj8qUH4jqFtdSV",
  "key9": "4fUcFH3HVPEXamboCGe44r3zds6Xq8eiMzPe3MN1hjp7hoz5U1dksJanLSRXT3ctobjfbyB7vAmzUruqChEor1db",
  "key10": "2Ucnb95VedZrSjt9nYfAb4XumN7woeP15mrchYindxqP3yjEkCbWGBLh845HbHmpaFq4bVFxSZ2bxaFFTSACNnWc",
  "key11": "63TYfnVEDTAt8qDGGJA3j5VAZEPWwq8HseeuMs8XvYbxED7GDwP6Be6WiQEmwdToSx7Ahg6yeriiDpn3KZWqNjmk",
  "key12": "4tVxWGVrfPNFJKUNfjk7tCr5Uc9sZFUbLDxX95CQumf9DqaFt9q4ksSdQNNz8KQHCJnmtnssApfz7XaHnZSW572H",
  "key13": "4jXezWf8dZYthuLaxk2eo8iS5e7esVN6XQtLQcxoonxHQsoL6ZM8MKnDWr96S8wvGNzzXnF4DShszEeu2fYTcjwX",
  "key14": "6e93GgK7mV8mJYhb75tHgh8szH5kzMuHtewkSaAjz53eeuRtTcLHRPURdVaNncTmC5n6bS2i5hwN3L8EFXxJa1s",
  "key15": "3mLBaWrG47g7Lzuv6EvdfPnVhC2A58fMSyH3kHERHbcBKSbECrk2yPfgUtvqRQEjMpS7HoL4zRMjv2fDCAEjyanK",
  "key16": "5P7j8VKJjqymCnvxAvUATmrKGm71CbfPvX3RNz7HC4s1gKeYWcQUWB5wJcqTfY5RPcbPJZJ21HNd3TzAKrU74Ka",
  "key17": "5qfCiTwyjrAGvq3kQeoVw2BYHjBiFC9JAGpCvvkfDS8ViQALzvMkVRbbq3V65G3KQc2zS9SqCuLe5hDZcuwGZxZm",
  "key18": "34nihetKGWoBNJtErJw9HRDE7saJU2br59d4h4yJr9wjsLAHbGNLY6cVag2sNL2PYMmRZL8t5raB2zsVPqTgsDpf",
  "key19": "5kF8GbZDffqYLQajtw2ahQj1MBCPu4KzNP7yojkMC59GK2X88vLgrg3CYBzhaBMpUotqRPsos3By3xq2Na5UQVBS",
  "key20": "3CTuvf5uBZhngTJKfjvTKt8wGKq4wCjYp74whsQEynaqt8MD3rCFVWFZ6WrEgVNKhx9P5nQAgvkfYWMP1aE8Arwx",
  "key21": "2mdVmodnxdPYpKSPrATrcgbSP8HDSXVgsmnMJKfwYydDvUogzdJX5UaHz8M7dHvs7HB32SFKX9kNhmNkNUt32Gj9",
  "key22": "6M5SqqzR57icVzGtVzNrLyGAF3Umr9t136tq5w7iptBYG4uCHYRa5fzswe52CvErrVh6rxCUY8LLUoSQkZmDWf1",
  "key23": "2aU3cwYa3N6VrM7BPTSYyun7bbzC9tMupfG14Mxe2K9vNXpaSSaCSrKanrVQqqS4ZQdjjgd2RQVsMaD6rKg3R5rW",
  "key24": "5xq1sHobYAgRQbjozWdvwFe8iFqvc2HPLGYJ4CdWMfm3TKrzG1UxovUAkcSNTEGrHAm2UyATEULDDpfn1rFsdvdS"
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
