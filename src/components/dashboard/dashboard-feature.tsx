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
    "676nGj3LhBR4YXKCVHi5mPhQnC8yrFQvDzhDRHoYBFzbaMv9mbt92y3qrSfE32rbmK5h5FSe7cCkwf9UvAXJgRnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hKRHsoXVFVUiT7gqRM3JQcPKo46TkxDyE8gm19JuPrUnXYR8Kx8sGzpz9haGUGc5wySfgisRwFUnkqRs9JYxg7U",
  "key1": "222nYizjQRJBUTw4M6wx9eafMdrDn5zsDjnv3yH19B7XVNfNH2taVhCCPAuthMkycs2tN6vqSqJBxtrqUWj2KnyT",
  "key2": "2NyqgKSjAJ4DE4aFRLQErxuKtnMxwtLMHoV6htTuzPVqk3sayDenseyjQzD9BEAMz8wKJeFy7sPsTg9ZPCpfVLGG",
  "key3": "259eg3rjizuemSBXRd11eJUDgo5JuFATbpZeQc4GpwEEokxjhhqT3fbNipxkQJmxnjEGn5x82CLWcY49DiZ8gJ7K",
  "key4": "4oTdtvN914zY1edf7h32EkjmTX1UMbkyJogGyRRt9ZspR8ia6XocbsTPt3KEYTLQhV8fwtXS9kMoSTa8Fd16c3MT",
  "key5": "32KLkmKP5EFq1Esp5sF5WS5ynAEtFrGgZzf1j3BVpGVSFbtmZZZt6CQuptV8Wp9XSSxhs5kaVdvHf4caXLLZAodX",
  "key6": "5Q4rYrNNFNGQGiRBemR5EmLy8hJiZxyzzfikQAd9jcEGvL7GREb19gRuQrcrRDQbMSDRDmA1rPhrrQotTcF2ZhXm",
  "key7": "2dJtC17Y1ZfTGC9cYtoUid4B9o3gdAWqJpPzMbcaMxCFecAb1TJTwy4RoobwdrMh7gQea5pb65mLqs62EyZA9jB2",
  "key8": "2oVytWBLkDWwxfnH9eyu5uBxgKcNys2qaZe8eCeydyVJqmSkyYDHNL3h9kP8teimPqwSTdkaRXfXNUASKXnakMgs",
  "key9": "495NCMoNKnzMKnT4VfFhKMz1aeAcCMbRGSQJ7Q3RxGuVvKQQFaMNhybbvj4rJ5fPTRBxgRuvTYY3dzPrpbsPA3xw",
  "key10": "2uuVMLPZzuEZ27Czpd5y9CRhd8vgMMGDkLvm5Dew6K8Q3bVUP1Svq6qHsPXKWdKZPGmWtu7qnBgyUCrwYNGj5xzB",
  "key11": "33nR4U87HcnZsUHTbaevVLjcJBMzPvbFj7WxFvw4X5n8qL8bPrg3qHnwveM8KhC4puxZV1qYZZZ79vh5zsDUn1MG",
  "key12": "zDWRz1LqYTLHoGVgSKhBSBnaHZQyT2tw5jxrm7Ubj8mrAsXmkJWwYYvaYDdbJwrQXdxKdoEWYSpWV19v8eNzUU4",
  "key13": "5SrHc5Cc9L38bTu1khbSNNwBcDeYUNnKr21uPZVPEXPSJVhEe2QRACZ5octeUx1SJU36ETB5Bi34NgSGx7KaPJHz",
  "key14": "3x7qZhqkx8VMbkB4JUqgBcprepAvCJBe5r9fH7dqfduTnAtVosSAasgh7TFmRYZFVXFyn6gtPaJKRr7WDBo2fd1q",
  "key15": "4LjELLNvMFdnh7JhipHsHq4JcvRfpnr74scHLHZoUWEzxwytaaTniqtwgAT5CkCjdzLNtQNRJg8LxstzqwnevDMy",
  "key16": "5Dvp7MuRsxnZoPYt32wXYpKqo1Y1rjivgiEZj1cftPtkLxjNCKejUkL1LMKwnADH9wjBSU2dx7YbyBPn8uTowK3D",
  "key17": "TPXGWFzTtg8pgdmQvhtuB2AXC4mfVjywcHvYN2R65bCE2Z9vL1WsRi8cb8DofNhSYbjqHb5cJKzTh2vsZQYh2iE",
  "key18": "5g4V8aCH92wysfmKfy7MgHHE9A6aXFxi8AoDTxKXQhibqbfTY6NtCiNrP9NxTnbd58dQMXMfuqz88Km4GniSPJbA",
  "key19": "4fELf1aCmPgGK5bKgBy2NsdF3RUk8ykK6ciXXvLwBWnq33bBzeoSmVq1hivvK3UESsTTN1FKxXzWWqJSR7uF4zXZ",
  "key20": "57v7jvkmSJRSy2Mt6JaocxGMnYWJJPSfUTKRuziaKwSLt7vYYVW9jvWngnvVS6Nt3JGMHpzEhM6M4jJJn4EkLCBk",
  "key21": "BaQ7ZBptQXEAhJGRtpMmJS1vAPJUmM3KzwTbmY7qEsDs7JN8ic7avKq6h4FkXcNJg38MUb4D67hEbcHFAT6C2ve",
  "key22": "4AMArFGyP1YGa3v9ejat5sjS3eFLP4HGcx8T3EHPU6BcX7dH67DEAYRhVCDzf4f1R12hrZvAWS77BvjKJEmZr4d3",
  "key23": "3fKUuB7ksgFzh3mQrfbJaSNL6GCYTiPFQu4veznkuAQ8eEhPG7R3gAtKmyMei4L7jPCH26vtDyVokahcqZRMGEHc",
  "key24": "62bEyw1cE2CWTV4UmMBsNYQbHy64dhCrDaHKrmYPusXVNEGmArAoYUQmKPTSNJKw2QNmBVLrVmq8ua745egMX2h9",
  "key25": "3WHDi7nR1KV6b1K2tYpKa3qWnQfdTDVZNqb9eKEY9BczpbVRXMjARbfLUvCauoFVDk9ibELJR1XepctkgsEFJRA1",
  "key26": "5L5K7d4suzsvZGzz3THfhVjxUFbyhA4K7AjMJVBnLeVoQbA9TEhqrn6VmNKhmCa2hCAtgeLcr4ZoACNMEhkXvNYK",
  "key27": "2vRepzFznAkgY3GwK6viaBPE7YRcUCAMBoTtMo6xTcQG6Zdj9CzBVfh5JtHAGgozyyrV4TZPY5J5MyrwoiUC8Ck7",
  "key28": "4FjdtozUrc4EDM25YbyauEwDz7WkTxFPdvPSzCdDvXNgiwwsJyoiHi4T39u1kt4z6FEBTrcXDKajjRbvsjXLmHDE",
  "key29": "5YaXzBewdSwCLVSZq7ayXuHhdLGpjvWXBzELNWTttPL1WtGJ7huGkLPtLCnTpaBTj564jHEGAV7E4oYhZdv3pRPC",
  "key30": "5PJxUJEqiqwgjKghWvCPj4bq6gvaNsX2fHTYngV9GmZjEk3bjW2gxSLkgFGkqisrRPTCTZdXigQCn3RwtyXsLRt3"
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
