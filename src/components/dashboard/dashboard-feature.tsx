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
    "3WUpfkthHaWqJTM4rvpAoocyFy5nvHUCxeJ5fikRzqRxUQQEtm6KT8jW3bg2xn5YAy5anrhQC7RWj6EPjCSKobbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfHqjABgsK2Bvvpz4ubTSRkd1ssBForWKif13tAGgQXX99zTc9ezVKUzJPsiaAhYKcMC3urFNpVBPHveroY4Kdt",
  "key1": "4cGdvWsfb97v5xvHiahU5jaJ7iRT7Qam1jvB1TtWcoVEYcxa5ThcJXybgUb3vXHwHLZaMeUTA12zQNibicg1d488",
  "key2": "2qxZTRHUU9NmWfTm2nMRgpyePcPPxLKEjAG3yX4McNWvrCmCqAcvvuo3sE97UfStJfi9tN9114hetFW6PCxxyx4y",
  "key3": "2W5koXAjfpsb9uzkjGh6pJvF9Rn2JeuH3X6Z3aRKUVJiy96TjMKmrKGyBcyoAKvVqH8mr6U93Ri4TVCAru7RRS26",
  "key4": "3iNpArVhxzDGNUC66T97ktVBqEor497pDeBRiUxCASVFJjSQVDzUFyPjVcuPtqZ7zvjpuHGc135ZUbPrC7AQukdo",
  "key5": "2KMgvLPHnYeMLqDb2htJDGa3x9yY4eyh7dU27XNiPUEJC3LWWLCKLni33UCRBpWEdiMkbiZ5kETxhMpba3f4gHBe",
  "key6": "3kLrL9CV8sdVrLY9qRuuGT4HFqXMhDEmFiA8qYKDys2dwmUFHHtpYQe9D8CJ6NSMcGQFMmimVjEweUfs54GPSMhT",
  "key7": "34Ahkbb5v6NuL3aqjK72ikPjQYrwoW6GCepM4z1iiBv9ShCe5mz96xpuyXdPNRTisesfh1mkezFP9g18WqWesUJh",
  "key8": "4akBdFZw3FFcaT2Ha6zdiAsAbUKLeXLAWHnh5arPPR9JrVzwHTwYo72k63WgvLZ31ZQ25ucgcYE12DQiZyLWFUhp",
  "key9": "4k7gWqVyEvX5ncRgToeeramkFvQfmSf1EcbSGbMHNx3CAfApHozCziwkSddLHF9V5oWKmaQSZmquasitBXZRrXnY",
  "key10": "kTh8LNyFa8J9U4wgX2SXC7rKBLCFNQwqThFzno6d6K9WKH4kaHnJmYa4nEBUJxPJkrSf9nbCMz7vENxLbUBYUph",
  "key11": "J22sV4AsuS3GHFwaBtCThVMVP1ZZQktmiArBBUMi4zKL2y3dFNrwzToDNVn71htuCkyo5JNDRvUXBCk59tZL3Cp",
  "key12": "YmRjX1ARzRywqd3MBU1W8ASk2fKUvpCei5jvamjnTEN2YxDsgXwC5BLdXbT1xqkT8tBY4s1JNR5oaXYLCmkBDmd",
  "key13": "bBnqV4bnr8DcKZ2wiuWQGzXb7qBFdjNYo8ULXnEAeyWuaCFfHuDM1WMW5ce7vG4Umtg3d5npz2KazTvK6zvxhKx",
  "key14": "3AG4iYXxxQZWqgpcaRAzZk5miPhsAoDW5TRT9ihinGxiHvLcyhfLfbFnsRiGaSJGkkqcgXBHVDSqEPA2xBGBJm89",
  "key15": "wEr1rrXFLccpPjGCX96LvwZZpVHmG3PGhYQXWwZaUt8qmKaJbf9wTGKXtpQCGW7VWwRmyiqkq5R7ERZvvMQVVFZ",
  "key16": "MVPVdCZZoNw7tQVZPoMmJc5pYF4LgmVkBw68KhhT5RNXHmWhoTwgeo9MFvpJQGbKpn9FkrPQ9JLCLQHGkcLg72R",
  "key17": "53DWTzcu4SMA1RjsW5MZZSgsUKPBP47HRq6fxEaZssXZunUHhZZfzB6e5TxuhC5jHkwwyrbxtsinWYUwA4Lsh4KW",
  "key18": "U6LP3e9UYsqJzZrwpmSghn2c79q9GhYtvBm73fz4WKce6n7arghgKgcyQZ9RYuZxXhYrsDAwbDn721UqoRbQnfF",
  "key19": "56tfLUgrFTs1mJQYCM2ck4hqx6PxJ7RHRzApfnN19dyuoVdrpYSuY8scFQ4vwRWDpat3zzQBrF9i59YzdL48pdU",
  "key20": "2DJmicWMctnLzaGUu3sH7fKM44Q1vCjEDZe1owg7Wzhiy6P3JvaCoRdCNfXeddXGF1qEPcExJo3o2A5qNV5rD23k",
  "key21": "3HEcDSTp6UbAmXyRW9imxUL5yTjR8bZXVKFVvgeTSoviUjn9RfZRzPyQrHBWXhPwuBWrivnZ5EY3LyMVL5kGQe1d",
  "key22": "2CkNTgycmDxD1r2cEgMhKhpvQMEboabMvJz7N8gYy3HWSQBs41yeFqmX7nQYY4td8i7b2WjrWBEYGSwLdQg9pMLL",
  "key23": "46q7fHtU39b1GaasRSKGKSdqxhHDFnwa2bJvjg6BWFopTWBjqSGaDS1sMDEmC8vm4KoavDQNN29UnbiErpjHGFWR",
  "key24": "4XQsRPosYwetYp3Vw5YWkyu12FK8fUB3fe7ULnQ8wy9EEindc8SxDQjjcgfGSxdHBxNzv7nC87SHqSQ5Nm9YjiTW",
  "key25": "45xcLUezbe625wCLRWqpdPfikyzpZdWYHsyZfZemgqxEhF5HSbWFNvbVUo8Znd5toUwKWqfUcXZsLZZTCpRAS9aj",
  "key26": "46UFK5USprLS8GTRCD1Q1MoCWehHEtRNPYX2p6eHC8Gme7jPmnZcp287mV8czd7xBjJCeZfNQzrqTqf5HKf4iTC2"
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
