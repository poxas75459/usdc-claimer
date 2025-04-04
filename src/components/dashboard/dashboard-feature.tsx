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
    "52o9oWbW3N3EJfHMgDrBok99G5qUgQKhR69snSavCXWu4bEd32LW8dxqALeYJWMKLKarkyUukPNHhHU1FnF2iaQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66TbJYVgngSgEXETCreHQ2Rsk1rgHg9s9B45f1oFNeBdHBdrDCZFT4hpcP7kP1iTd6QPeDrPCC4R42gQ2VSr2a2H",
  "key1": "4oq4VENspwCngpgPLLFpGXNhySXh4tkQac4CVcsw8VrttwjQmnxhm4TGHZmfaZNNg4sRBn6nhS3kLv3KyJD1QNXR",
  "key2": "SpPhcVpZupRUQMGhg8y1abStkQckYy5BpEF32WHZXF5phUwqU6sUzamVHFT6FF1czMfCMmmXtY4wZYQP4wpNNqp",
  "key3": "2GexKXjJexexf6Mkr6yEctKiCq8hS8sGcvt31eMw47oDsB5NL3GbiKs6W6sZams29AHv16aC2rXaixAVF3bnrJEE",
  "key4": "bJZtVG9FMAHyWohqxDLSpdnUNwe3YQgTvWLSfb5foh8uu5saUNArkx277RpYf9Vk8wUbNjnbq8ufrbUh4TwsxwD",
  "key5": "4fexdwFyWgvvrAwaFKp9MAYAjKD4DcBNXodNdGCQzdZujG6vEBTGrH4yacd3tKQQxh9Cgk53PffVaJ2y61DSYYxM",
  "key6": "4XSe9pPwMJqFKDE4gXCqhqy9Gr8zLV2KfdFwrUTmB6HyjtfWqZ4BgrGM1Nnyt838NceTUBbrN9rD1AqiEx2AcAzY",
  "key7": "3XPBB1S4BAeoeMGHHeE5GW4LoCn5w63dtWea8UWFZYBXq4paeszVRRDYr3vwHLDCPpAbdAnHu1zVfK4kjMjHpseZ",
  "key8": "2twtdK6kXxUMvHXaKV5iFWGhYUhqX7iJhybFMo81sb5ZE6qWjrP981gyGEyyqDWrnfwFqZW4fWDDuBu4eJZGw57U",
  "key9": "3HJzdpzMDH5mrixorhMaDmXWXaa1MsXthps2B9fSL2jLq7SGcMTFFtJ5vC62qBpuG2u7SP4w7p2UN5z8ZiKFEcxy",
  "key10": "5Lki6gJkkR1UyEi7Cf9fWCv14iNXAkcqQGJuBE6vQyf8G2DN3obPTQPLWkEkjEmGNRjXYwoebmKeSTKGJgXVdLXF",
  "key11": "3xy3TP2uH4ThcyLktsUUcT5ybWdXaFJe1EV8tpGV5aKg1CokTxBDDifWYafEX7QfDYD8K73qVLrSJibs7pmYxisq",
  "key12": "P4mP9pu3fTr4BgwccfLy1LTunSywSgELJktCr5r88iuYF1RxT4ey8y5hWXAXpUJQ5K1RL7cS2gKzcGTdW7SoEo5",
  "key13": "XQDD4qKDzRq696K2stRiJ4UWCBtLkx69KfkA5JRjYXBFxCrcs3eRJj4s1P3cyqEkZSZR283iFGK18nrYJqwNYUf",
  "key14": "2F3LKexEGRvDLULDwKXtSmqtfaqfGurEc8uFXgfnjRP2EeeZKgnSNwWcBg7WJ6gbUBBgk138ZMCUtVUdmizCnZ9Q",
  "key15": "dpmhejBgrpGZd2QoKy8MFaSp6LyEuuGvzwK8H9ToH7GTQgyDHRzuTp7iNubFq5ywHxkfHdVPELEf5LHBDJ8ho7C",
  "key16": "X17iWer3Ei7RrBmVnmrYrtbTYDDUn7Cvj7N76D1fVxg6E6CFZy5eTDoRgW9zLe5JP8oXG27Ke4KKc2BU86sXSjb",
  "key17": "2Zo35uvrsHm9FgGEkJ5RLiQEGg4SjKGWtvdbvQAprbyD7r7VYGcJvie9W2c7ThuGXYDAo9Gd9bp2jkfwVkwf49w4",
  "key18": "3dyp2fwNKCnEw4ATCAi4CrKAV9Ey41JXwo8JDjqvAHMMBYR5SFtLzhQVKVL1BMakR3q3hiUBvFdrJpGU2qE5iSxL",
  "key19": "64KCNnvurroNNj8aWcs6ppXMgQCZdDdWMEddLq4Mi5BFZFokYQxxhKBmFmtVGzd1TM8p5BD7s5Y2XpqXFE8XxATJ",
  "key20": "2mtNau3qrPhbcUwmFd24toscrD8uetfzPwtKNWAT2sNLs8q6LxdCBBRvMprfWR2S2fMkEKcMpWW35QjC59ZxCZHu",
  "key21": "3HVdCHZaPUHkQzC1bqTZQRNrXnA28Em8EneoFPXHbzQjQcWBYuE1kD2vzVtbNqRxk93De1cQxQzZjX1nbTyBbG6n",
  "key22": "3CmTZSZs3cvuLhXMbpT9RmSJSPXcWg5FE3Y1UfzcHt7ZfHgadMZ32LFtu4MDqPEUd7DWQrGMbx2RmnuV7k4jyMJ4",
  "key23": "2jZhqDWChUgvmjDrTQG8ppWipnk2p6tRnizc1h9riT3PULi2vqrk43yYit9et9bxvwroYSKkFqSsVZHiQjZESBvd",
  "key24": "5S5BoUQogZ5TZJfmkyeiQ8rns7hDqGWC2WhVVxBbVoU9ncvpmeX1zoKs7oQsE3YTTkvCni2SLJLVSvzPYXiWR62U",
  "key25": "42VeNCkatAr6DhS2WieCeswvgRVhSR387Gx5bt5z8UWaze55rVM2XCFnWKQNirdMFkQ3a3r8USE6qwXWATZ6sHRm",
  "key26": "5wJVkpwiQ9njJ9hMHXWFsLHAonJGr9KpZ9hBLGhkpqzc4we6KcoK5Qwqkmk4WHQe4PM8auPWPNUkX8WX3KEyXX1G"
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
