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
    "3dANrE7zXkk427EWQXVGFuBRv7MQLkhPRgZ7mXXCvyVz2E95CCuRPWFbp7Sg6ukJtPJtpQTVBMoq2pRaCqEKvjgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tZshH5f1VGNEc35iVYpBj9Lj2rdgD4wMhoe47tMYdDLxxZpW2Th1oXWYBccsMQHGQMbgHRfoqLYjZsNSPzCaNeG",
  "key1": "5NKzkD68iudcJaxuJBPBtvZ3DnUpvMoqTov3gEU9fLMUE5KyCc5DFNxSwin5weUzHirawrW6d4SJWXGrS9ur7sut",
  "key2": "2YFjK7M6xDYkB8eEHEbVTTGyYB4wCaXXWLfDHGrNG1wLKEWGQuKT1wQdsKve1prEycd16p1oJjVCNSaouikErivr",
  "key3": "4nKL1qrtK2bwrdbADjz5JmGSG7ENJUQvqrLVw8TKie95qQBPw3SWGFXRiGLWpLAuiK9eepEx7u8LzE4czW97URRN",
  "key4": "3HP2v6EkdkFbbTHpamtm14kHkTXBkVafBvd1QF5cdUgSzG4f2F6EyxRCyYbvyseG7oMzjUBXqjo6FgFYZzxeLn3D",
  "key5": "5o2x1ntHKB14cvLvUKqs3dzNuvvQcn7fhSpM9PtFwauJ1J8RWRii5ucZ3FyayxkxwDi35T2rDyoPkaGACkc9jGm2",
  "key6": "4ahcJKDvBYUiy7nVeQUPzouyDJ5JpvaM5z6kKXdSRSeHfJMUfGyXdhwPputooYQJA7UD1B179PjTJ2EwgxbFPTrf",
  "key7": "2Sde1JRJz7vW1QVNJzBVWvQycdumZNeRhL8ok3jwmjjQZ56bq6bqBkRTnc2acHjGsZLrveyxhA6LxX4PVRzdnKry",
  "key8": "5w7AJmxiKE3LDztDHDrqCbcPooFuDPK2pz2xqve3ExcfQVTp7qd3ETFXxwwJTsh7T39zCzKzupnRff7FoPj6QQza",
  "key9": "5jAM57dsJSpCUaopyyvtavgxHoCSQdNqfUQVFSfhMDb5c5nsKQbTqPADMubB2ZPQJKYCpLAyHb6cABgDPgiMht8e",
  "key10": "3K96ifQ1MAeFgi2BCMbJKgjuBG2ovmAZTph8Lnh9JubEsU5CRghwBP4kuUhGERNhTSMbzjovhGZbdQvSpdrTP96Y",
  "key11": "5tBxUHZu7XwCbyLTFd8XWxa4vGzJiK5YCSjkVYQ7sGgPe79TXBRb9xUujvWbVqnDdcSBHzewxHwTfC3JFZRBAnPt",
  "key12": "3bB8R7Goe5boN6rmsExeGxcMFLmFSrEAzjSrAKGqXZJPnzvionVUEK1EgMd5bWFG4C12bnEmk73w8nJG17TPXZHx",
  "key13": "563xp6yZyJ2aYEjgeM5Nm2E3voyoLJpD1NxgADpVHfejSuBH7yYwY23kfKPakmgSNagizpn82RYgmjAKNdnU4Wzm",
  "key14": "2udFu3UfhsC69GssJ3iAFSYuMJTy7GPit1yptChSePMbiGRp8scf8jZaGhJviph4XjRe6uAv3sEmYFASX2KRwxG",
  "key15": "hGnqzpxaFvpRqgYTbXN6d4caXxuecJep8nnZC3w85PXXSWA6AbXsamkLXJz8DNtHBxprMcxAV48vgp3tY9rg6MN",
  "key16": "2hG2UfFwHDZLK9M3LAsZiDnAZai16tx7f8R9pDK3oszDm1BF9uTSieAxbkwgZ5Djah8QWR3T6i9WT7u6QWwcyp9T",
  "key17": "3aUUCnGie9keX6r6MgRf4dftP6tuRc7G6wepdcWsqvpeYKmNSTAeyDk1e52eGbiDz21noZjGLBAAri9aQNDf8q9m",
  "key18": "4XuVgwNj5B2c2nUcc2883gJQpR68rJVq8ErHTWiCGtTQtvXb8qkwFbmAtLvKF6gdvvYXvHFTEeZDvEY737c4xQVh",
  "key19": "62P3a3RAK2YgXsJ2pJREYUHNQcFYfA9FqJFBugdCntF3g6kwSEwGVKs9d32frXLML6mzDfELYbLd7kwGae7DYRrz",
  "key20": "2ZWyx7JE6XZyGocki3tEsMAeTMvkiymJD7yUN3b89uWxZ9psS4F3e2zyUeb1BmTUtutSZxY2cXWNV5RryuSg4Zyo",
  "key21": "5PYh3eYZswM1PEzRvLUNKwDczgQdqyECHVhATy88QYm6YmSbTBcmkyw4PPKKR5CwBbSKcbu8jMyqVmJcgMT9FLYP",
  "key22": "64jpKz7YXNaJK4ANj1tDd52VrcmaE2Hm54WzPzUCUtvKZ8mo5JQjJnF1GT65u9Lt9j64A4xFSDnpPrPiZNAy4W6V",
  "key23": "45m5WvEGgsu6a7RWfb6xFz7qnotDecFL5aRc8kH9kKL7Nm713o2BVcsvz8qyGphwKmrSMa5QPTUCM5bMwSXnkSP",
  "key24": "2nceLUujDZX1TkZyLemQdKv4tVuFvbjCN6YJVUJ9Abf6YuYgqgJcG9gr54pL8dCVpncBUntMsWry1CZHqyGz78FJ",
  "key25": "5S7PvTvcZgFkWPBDzeQTZQw4tjwM7e2PmgxM7RNvxNFve3qF5iW6gTKg9Cs5VLy6PwEktETFfc5fu5QAZg4uajvL",
  "key26": "2p5U2hEzgwndhoP1A1mKP5ioppM3ntGzWmTovDXMmCtqsBh3X2xRuVj4GYzfSFSX6EAm39edRMf6R9Yp1reMJUk6",
  "key27": "2U4sAFPr2sFqUEcpctHhzWDCysRZKr3hQMuEbvLEThYFcXuJfjFi9HH2WQjpuQtvYS5bANm3jAKVyoPifu9sGZdM",
  "key28": "3wzbj5bLzf4VyV2XCnqnp1m4C6dstyYQcUCa7XdptFqTRv42wLNK2BM3nx8hKozZu9Xm8Ta2say7XdGWKtNLZDwn"
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
