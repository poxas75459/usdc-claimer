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
    "3shejtq757FHV6D4d7UPUcMszA54R5fFAVSZwiwP9pTNDUu8NjhAYrdeJzy1BrDnaBYUeNsUhAfceje9DZ7v187s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5H4bthkAh6HJeHWBenCyTLJajPR4m3h9s5ZSmbQ1YnJprNpe9wzLav6kpCrfZoPtb3tpYPwVn3zGUQLeiAJysp",
  "key1": "37fquiCUX9UN5S4rWYjFRWd2rL9TqPTQS9rYHw9pyg4AqJADRu64Y49YAaE55XswShGXuyRMQtfh2VNNn1J4FrNu",
  "key2": "4BuKUAD3AMdnccGNdZ7AmHBoxe1MUvFoqSe8Y6Wa99xJSYNchuX4EBJDeo9uLib6AZrU2SKGqo5mQcC52AfCdtEt",
  "key3": "5QAsEfuGEfnjomZ4XqZtUCp4rSirVQFkMXtJJvD5STCcRBSZdSnYfPFBEAWgucKbGTP12Y1aJULDodxbqY1ffDXt",
  "key4": "hXd1U9JfVU2x69HWm8KFEd6PJAvF5ybHgwqYzi9WJXdxR1eBPawVgamUQhwmX32TCjgmqPj5XQEH2tZkcm5FAa4",
  "key5": "2MQCY4CrQY2aAuXgLxNSMqPHmYn4UQTQhhxwA49BjCDjPUz3fAmqDhcTT9gjtv5h2281BQFo2WJSiPbDh2XxSTs9",
  "key6": "2xFqXeMQ6n463Qc89WiYexj2LYQjeSifNFLBxinKmXSzBf4ummd9UUeupuTxnoemVpaPuxzvH4jHNLeVrH3qTuNK",
  "key7": "YGb3ZaaVniTvXaTKYkiSARvfqbwSdjULf2g4iXaShDP13vBEYycYvKEjE8Cb6UikyStdZ7krNBpxW6eQF1MUYau",
  "key8": "82nrK35JKKSEqBv3qgVmoPNgoT12nsRKsQHN48HaeP6YoH53j1BfFNPnkzuCQYbQWrGSksCUNgB17fBV1GrTYNS",
  "key9": "4Zw6xQ1xnNY6JVGDncfpvJqbb1iZq9fQkU8ob2okmr5Jz83sHbtCmoaeactsykpChUs3okUWQYk6rqMZaMaC26L2",
  "key10": "2T3uDocw8eDhCvtMmPN6QVF46Gh1xFKjpyNUSymuKyNqzGdC7knXn8JGQKkJ9ZHZJB9bDUzB5MPggKyUYEBYy2VA",
  "key11": "67V8Fw8AG8tjvirnqpoqDGAchrRDtGFCEshEVvKdUh9Qc837AWjdzCaHM9m4T88pL3LnjKk2ix8Q7njtyP31YSHj",
  "key12": "wpnQ8eVGKPtJ9tmTT36AtfuVmxAoeP8gTWbkHKNWp6cA6xzXkW5Pp2tZfPRh3CpUKTps92f1byHNvPLjdgYPcyY",
  "key13": "5ctN6HjgnwP793GjrMSVdfVDjXAMAc5C1JpuKQBAFFVWh97u36xAUh7L5MgjuakUjY2rLT7hRhCFFTLJZ7i1oWSH",
  "key14": "PspH3EfceTJZuqe8aGKYNY9RnthWs6pcyzWuUbminSqJbT1Wt9iUgv7AmYt6aNdNtytFsu6vty8Y7VfXVvmasWR",
  "key15": "2n4Lp1YDamhMaCQqSMCqkVtX7kNzLo6CUt9y3UVp7Vut6pZUxco8NWrLZhf1oD3hRhnWdoMK5t1ebD3ALCsPc7sv",
  "key16": "5cwshLozQtrvPpBL1jxwkSjW4tFJ3sAgKDKHo5xA5qKRMw8FTazwA3sNTyXRbk4KzREDU9YNia5DNUaGYYorgZ8r",
  "key17": "5ZmYkKKhaKVJCbtb8bZ8XvWXMwBUFXKh9TmNRbdKBJvR5Q8RYgAcib14i9NduvXg4NfJqFB912FdnRyaLmEAk2RR",
  "key18": "518royinx2mMaaC4qttnXgSWXvs1zjjPYbFunPNuUC9iBJfuV9sM7ZAupbrcUR7mPPQFcuEUoxUmYDc8QQ3e8Rjn",
  "key19": "3255D7YtKef6Ej1kv1RDM4iqS4EE58Je3nHS5Ma2t1fb6fPQQ3SgXinfcnuDFt5xF2FMhDxuijkhUp6r64RHnxwP",
  "key20": "M6HZ7Fi1YbEstE9PXs4diFCdwuFLHPtfr1drudK5HTqhvZ9vVLApMYqXY1Uqk3bEbeJAays2Qd9FnKRdh16veWw",
  "key21": "3YvCcx3vLDSDNVXsu9qRogWBon5fAcmt7CdCt8aR2Kg43USPAGHEjhH272FsZZtg8y184QvdMM7ntnWTeaPNiQeu",
  "key22": "3bnetvBodgqJ7kKtSbbkSuUTCftqbKAga73xK8CjxDCRv6SfE1cuhZ5z9o4YSx25npswJLyF9sZ27AUwtshWU4UW",
  "key23": "47SJ5sRTeSndodZGfqJQxH46JEoMufoGWZBa3ZJQCHzr8nsKCPsHV7e37jaQ81jCg4h48Hnzj9CWhf8dovXK4kET",
  "key24": "2Fz9DVhVDejnFz56ceYa6u3m7my1f8pajja5VPUkL4NtjEgngqhJtcKC6PvSs51aS26HLbPQT3SHhLxPnSzxug4X",
  "key25": "7xHa3x4cU35Mo7w9ZdSTMSv9TnqZqj9dt53meQJTtYJpEfP1fpVYZvgAJfdB78iTSZ6vtDTyMEHMNe5oKtjuM7s",
  "key26": "vbDyuqU91amu8s6xw1sCGCgCds6HfBGguwkofD4yRT6ZLfftDuSkpVjvkQ8Trnkpnz8kUUrHhSTVWn4QE9Vxme8",
  "key27": "4KFn5wsedP8LteZMgmgCvnsZvN9hsMij1nWZiSURUgpCLZHH31SvAzJrcxmDmG6454eLYwxKKBQTAtLWTjMCHsNU",
  "key28": "5ZNjrNsN1B2JQqL6ugVqTQ5khrdt7kMRktxmdeaPTZDiPVXyZ61oi6VUpvQsCMeiFBCCKwYQKe5ucSckoPY9dkhP",
  "key29": "4GTLUUAQyQU8nEGBcLGpPueiEjh4YdAz8nXJCt6pDWNs311qJ4TMU32Wh7FoV6XVxUzYnD9FPAyZoJgKvhegCX1Z",
  "key30": "66NSetETARExrpQ99eEMZhTm1K1PgZWuZxMCkwm8a7EKooMdGfhwgXjLZsKKJ3yKfS9eNv8vNXH1G4ESyhE86RV6",
  "key31": "aMkMAZftFpqECJJGc49xiWpAfvNGjH7wBiFDjwYwBtD4BUhW38oMZKkq8EiRhF1eFqBw2ZQ215mTLVBkuPvnsg5",
  "key32": "5VDhxnA4UozH4z2D4JRNeXTbe2yZgbNPk6rt3QeUG93FBksGpcKWmMxsT8DtAXoq2BPRA6EJrA9TZRQP5gp7jinL"
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
