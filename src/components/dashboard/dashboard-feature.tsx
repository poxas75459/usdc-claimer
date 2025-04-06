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
    "49hDbzgHFQBj8zJLqQdQzVndfxzenpXyUA58zJvTGuyJrnRQYZGprNRoQizNg8PvdWmohkyhTQUU9871iwWrixxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YaaxTjaSDUF8i7UvC6ezHV4f1aoqJ6yPjhksVjCPiwbZEmPcvsCChbLsUWUWXV4svHWBpGcUTVcvaSQZsjJ6QKC",
  "key1": "4ygkQhKBwrsd3EuWomySKHTRn36e83VjPWV9kx4WA1F8JpZaokkTsEpqN3TUxVe5AaWZcSJotwsS49SqjAv7xzTS",
  "key2": "55HjqBM8imuHbd4vrJCUKcwq2wEUqscHMVhCtCcJRfza92rbpLW9JKaT5zEZ3mFUW8QLfnt3R5LR9ziKtBXHpWjc",
  "key3": "KgTAXC5JJR3uUFLRpuQn4UCqQDWGR9dxcN9bF4S6MdGKsBXwAkBhwC6XbGbqRo413Xof91aky8oPpHMR29zZq7Y",
  "key4": "64Z5bhtK1ScEesbhHxvqrMH5mGnHNmCDFqQiRQ4EkXGGSTMX6LqhnMJMZGt6nZcWssGpraFAtPdkrizbx1ntFLiF",
  "key5": "LeeXuvrbK2Q4UBBDP45gMTDpbBbYzbr8tDnqNuBAwdrMHeDd1vKi4sDTi7EpJBNUDnkf8VhBxDpjxPJQaLm5vaE",
  "key6": "4ZBLnWrDvM8XMRrhrf1Lrmj5cbqPtfDwtYiBZLBqv46trzLzfTvRUataHHSAinCyHxNJ6VFeqvPihZhAcnHqXDpf",
  "key7": "2Es37MyC6xQkBxR5ueK4FsjCkrj2pCqesSQR9bdBG1iTx98opuVTZFch4xVknj1pwqwWoj2ZQ883nfvdG2QokTea",
  "key8": "3DxoejLRFUkdrVQuhYbY56YePbrB1V22ahv1WbadqhhgjhemjJA7Lr5mR3tj8ndo5bpFLJu2X49fyT3MGDKhwExD",
  "key9": "4Bb6DHo32i2oKLH83cdCwaUqngQgZzETERJDDXqEp85t6dxW9MYvi1NFeZ2Gg7nMRMXkxLWTZQYHhfwEkft3aCV3",
  "key10": "4LYpwehoDNyZDqJFg35DQpikfZ7i1e1RJV6emGJfZvpDTyJpY7EYKbG4Rq5SVHF8Kzu4TiTxhkmMe7441yE2GY2M",
  "key11": "4juaSgLw9nbkY93EcfcAjTNbRdte7j6BnWtP6TJ6pd7Jdy697W9pp3G5UcU24JdE97ia3uQj8WZ9T64spRBWWeQQ",
  "key12": "5mzgqgzKT25a3iTMpDZu9hsM48v7nDEFEd1coeb6wumXzjXndjQ1D9YR9FfgPRu5SA8Sbyy4s8f8t1Po24chhrU8",
  "key13": "5qdrTeCZ7ge9jGpv7kheoSr4UeCTHw2XihcuWgWE6nW4wvCemGhbQHDiQ8DH41uwcr2q1maDZV5eXSsfoxZ5SHsF",
  "key14": "2t2LscB9ZSvs1EkkePZ3PSrF3cZYhP1PZaCukP1jsi3W2yYURTKqcmRBdXPFP2PEq6TxJVWofe8yYFdUDYnm1uee",
  "key15": "4EixPUtWz21pXwQUXyyW4ADXpxwW48eCUNTevmp57msLUfTWPaHWFUyMWgSxyGuoYeYxg54oXsEZLvS5xNxD2oEX",
  "key16": "4RJ1eGHSW2GofWo6T2Csukhe52xkqX6NNpMyAyTMaQQECM8xEcBWFTkYRNyziN9sD3KNV9XCpfXJXHDQK2aMdcWb",
  "key17": "HGtQWYpGZbE8WKuUFszAm7fPVB37BBmvG8LgMsdycuPTNPz7DpMH46E8nT8RqbyBHC4pfctN2hxtnma3dpgEu2p",
  "key18": "3neJWzcStGtt66YTdHBYJrhu2pfdBEh9Yxa5JtJirnJkJu7KxSqMY8aiQkj9CbFX49q13Rb25uHchJmzxwJMuKaJ",
  "key19": "2ZZ8PHSAt34B888vf8S4rdJTCnZ14EHLdcR6aKFkskpHGuD5QkMh9H9ZtguPovGmVuhdTc9MJQvuYTYTqLBkb9xY",
  "key20": "4DX7JxHbB7FVxhdW9mSfLSM4nTjJdSgAEFvUCHQkHTZPHhmCtFmZX9jikcu8eX2DJQAXYurjdX6G46YXXhY7miun",
  "key21": "2SkyC2A9v3BUudvAEWqAbD8RBvWx5T18G8vWXMKtyoq3fXLawUCUVTGvnaAuC6yb2WJQQtUJMM1iboCZzQi5dGyY",
  "key22": "3cTzMSeSDi1HLoMEG6d4gipvzjHwy71qXKMTjSfZMFW7Dp4teP8DKVankVuTjojyu565oHnS2m4RoGtHWiYQzvPE",
  "key23": "5XyGo21uqYa7GgJmzXpXxThnE2AbngXGmCwsejJRdmYxjyijenBKWxBeKq4FggkqA4yGJPX3PVELHHzLJjdmb9eH",
  "key24": "CH1AhqKeQ8ckbkpBpuEecfMwJcbHhJQyLy7dZYmtGbujg6ksP3yCRUFQbof3c7374tBRRxCrDqg4sYVakkKWLnN",
  "key25": "4zwcqNssSN15CpvZHnTfcMCNVADQoPp5M5hPb1CTnAAKVf9AhasHyDgQC1aP4E2uafKqSr4G5WYGBdpoEka95b8w",
  "key26": "3Xo2J2WmnX8SyY4uhxC8Sf5UAmAWHrCJRpGZvzHmwJyqtqrs3aCjoVWt4eaXmctUr4RWN1PRXn3fUzqrtguQZAWY"
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
