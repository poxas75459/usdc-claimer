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
    "53rgjsDovCUyKLasXHVLF6PBbdy9SnsEiXChHmeBGTGGwexSKFPaTMduRtyMuUZRvki9sQyP29nBnnbXTxLSbjuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HMTGwqAhr8iuD6zn66PyzpdBVuZpgho6jyqcdnjzC6Zwqu4yizWe9kdHkXEUNsqAPsp796SXKmg4hspK9nHFsNQ",
  "key1": "3sKwUgexfHZk6tnVNU2XdgcQ6fiuKENyiCbGecUo2jvwjtzRmCEjhWo6Lr3WuyUbjMjuajYuZpwkJqJa1exi1kLU",
  "key2": "2YUUJLsfemuYGQPVccynmtmJNZ1thBDqWGVomjUAkTL6DnMBJAQ1wi1rwpgxk9UcZ4bYA7BgBciyM7PidAiWMHsg",
  "key3": "4WgzD8qno5pAheWUcady2kUkv5M5jg37V8HBZMfFbg8DPfzyAPWmTygU4DcLH42yhVgykvgFRQPm2stmjzqs5bf4",
  "key4": "2fL8ypmTuPW12Ln1DRkV2i779inWrBsCKjY4xnvhLkHwZVAjM9aE9Q951xGwGEM6Dc7eAJYNcByWnMKjzaDQ6s1",
  "key5": "3YEf1tYRcDrEramXSMZ69dJyysYD5Lvc9UhgJPuE2FKUcXPzCxeQUs6BdCPPrk93nLUGnwyykJa4c3cGt4Xds5TE",
  "key6": "32sbW8VdYbt4AARtAGdu1mUk9cta45kXkSPjytw65j3ZfEREo8bKDgzuxgjEzhHv5sfEk1USTuzLAq7U8sZXNia7",
  "key7": "2cS5dem4DBuk1SGoeDRRKxT7FH4Ds6EkLAF5ULN3Kje22jE4psfHFmKgJUEbfJs2A5qngBMCmDdFyScoMjU8neg6",
  "key8": "5d3F3vENHrYdKmU9KHrEjEqazNebgxeTe7QYn8gyozYfLXjDwMZmoUkFAGY7geKWw7XiGrXKuSYgYCbZGA8oBAMT",
  "key9": "3Hz9n8o4TjLBHAib5w4ReeJMt2NDfB7wgg9wPWy3Zhp83iv15hQVTZTGLrns1UteUsyQAB95kVrRYCSCEZnKTv5y",
  "key10": "3dfuZ7ukj73uModprbLPeLN55rBRyR1CqSrdoZBU2a3eB6xd4xSTQ5fSmppPucsMiofEfn3hj771T8sQ1ZdH1jXv",
  "key11": "3n4tG5n3nnyFAjsY4Wwrd9YTXposYAjqtRiYsgBCVUgfeVcRs7SHTm2AAMK2HAH3jjm6aey4SovFVrjQYfLbvF4A",
  "key12": "35PsvTLig3A5SF5WGUGFmXz3P5PH6Q5ga9PfiKDy24Q6z5Z97fnnaA26ww8DQpmAFUhcHZ8pKcQyEYEC9AFavU2Q",
  "key13": "5X3xAnEqHWfPS2jVgvK6xgVAoSrJXLMWfVYs9snSfE8VnrLDTqr8qkNPeNaGdYravVDoD65FTJkyWi1ABF7zdtho",
  "key14": "HHeWmkHz7kAoi3RyeJyACjc3ZgwpbmL4YiqQzmJ3gFFptFrhLHnE9juxLnuXpDzbM8Qc2SiqQrrkH33n2dxuJgk",
  "key15": "4h7w2AKMfhGM1Kz8mND81KvnevLLSVaMNY2HFadyHQWjFDCpnCxYwJkjHsogRfacty5UHMqET4pQDcf39tizqSdQ",
  "key16": "WTqUv4MY42CthiUCzGUQWAuMuK7PdQW32sB5GQCRjn4DVczcNWNDLJ8EwbmFzSccXhaZHe5XQ27ZGLgWPPbfAK3",
  "key17": "56tAKiKneAuvtBCez9gKvXPWLQNjPBGbj4Jy2Pt5R4SZwG8s6BdteFgNuUgtfq5fLdXd8Z1MVpqMwHBkDRu5WUk8",
  "key18": "2d3bA3ZijCyvCkGS9R3MzBcb9RcnXZRPzZ9NqytHb8k7x3BW9dvLhKFUuz9qDtfw3LmnZrfig2PkacLwUrrt3ate",
  "key19": "2CkbU6RoNjMJNZvhCvyFDX7qU7Z8JTobunV8VjfpdtUZw7fBQ2KvANbBeQyYMxPaKt4Tg6TYnvUzWnDBsEkpfqme",
  "key20": "5vuT6VvvJKkLMKiML2j58cgQmHREznuJcskmEqPj4mf3Ub2dmGoadHJw3YA8vtwDq9qvfYSskLW6j6ByL68w2rjs",
  "key21": "7VEaY7st4eubLrttZQrwWTy6BPuFaHa9G1Hg3R77DSwScSg4DXig3frYzX9eDyVEPKjVJbu9aMWhxQkUxaimShY",
  "key22": "5cZkJBs36YSxt5pByu6JMSN4G8ask6STfpdBTapZYig8ZxHsWvzLpiAj1xcyZoCCFCPZ5iaZD3zJhc3XMC6qaCXw",
  "key23": "3mpz6x7izo3VcDkvh7qFFZDhbqkzAcxE42BiSyGS7858zw6hVaaUyro7STaEyBmdxWbKkAzbKVFeK9ogGs4YxtBe",
  "key24": "nAXfZvjn7khK4Dw3MauELjty6mNqGH1Q7Ch5X9JMUuv1xq29KRt1axfkSTU4sokQyrPnNvaxjSMonsihY8c4otb",
  "key25": "3GC3RZ8Qsb1N7H9dwsRdXhT5xnfUT9CqjsELbC8XpKoZqGCdFQUB5PGNY9PMrn9psXX3oVr8EwQoEddjfNNWAZ1d",
  "key26": "5qNboAbsQ8xHaE7mqGP1Cfz34Y8yKTDeGZwejHeNwuGwqezUkZmMFJTTwLNduUo8qFUKkv2mT4DQ5Smc21pbXMAh",
  "key27": "YzPDFVqc7U2CPaw8zio4XZp6k8hqrVnbZ6uEvVTRSw7htTZ76v3UTYWFjfLQ1CPvPkCWM8JkzTQrBqxysiWyhNE",
  "key28": "3Jiri6bkjLd1U28TnKFkQBGJpavee1haQaCFfwgBaysdGfpXqsfMghQm8bYrTfSL1Do8DmfHAHnvxpr1yo4rT6wE",
  "key29": "53y1RqJDf8STjg89cb2RWeWiZSND7LcbRC4wavzY141fsGfpuXugdxjRkfbJZSz9nkHx4odrfEemoqSxBzhewZCY",
  "key30": "vLUau6k9mfmEzNX9SUcKfsKLHeMZiruqRZVfUYh5n2djP9Yy3UV7vdyJ5EzVApcBYGkuegYux56qYJcNV9RjZF8",
  "key31": "3884EzekZgSyDvrscNKFvfGPhvjpwumWB72FhwMsW4WmjfuzDfVvuofBRvygxLN1fwWkA15ovrUaJeWPhmpVZ6rF",
  "key32": "2mD6d1gUZjVqyNcRkd5UCJryRirXCHwLuRmD9VSfpnJzgtQLqUgCsrL4qWsQ1NZKsRWLgJbLBV3fh5okMvFmLMJc"
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
