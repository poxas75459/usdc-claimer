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
    "NYi3XkTfjQ4zZKtYmK9yEw8h2NtYgn3t537LxNDuHbuBDPrTcXWDeo6bi6AnjPEz853URYFFiwZ1NqyHU2XavXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iD65noNdxzJHyKsLN9VY5dQRi6Mzgwau575Z3snmUrcwUpdYQpW31D8yMpy5DLqFQHexpw2xQUtad5JmuQQhXwK",
  "key1": "TmYyCGiwxXMBKjkYUXaxfJsNS1qBAVbsRLuUqwS4VFg6EhZg83cKTf9XS3WQhKpKQ1C2iUPqZxWRJPpGecD8u2R",
  "key2": "4VDr4Lvr6EsWsZzViW1VVFjeSWSoDxqJrHwYsgXi3QActWWUrHNUqew4LAwE2WFNky2zByK5hDFsT3JC85NeQBHh",
  "key3": "2HAAZoXXfTxQ46YsE5B2AuJwcWmfBXKTgyfuKHAiBT9JrmkZdjuAcx9FKjEkrVVv7KvJjhrohvZx1Rfunw7CGKaL",
  "key4": "2c1azEKRWwnrAfqnRs7W1YKasRPzqM75eEYbS3Fprqft1matGqqMHUGBaTHdeHtcGDTRXaZ6s8yBCUV7RJ7tFh6S",
  "key5": "2RVUKVHQTQ7JTDFGk5RPsz19Gdwh1Czy7Xb8Lut78gTKbaLSUqHtLsyFcYBicVTRBCB2HNgfqCKnGBzvaTDsmdqN",
  "key6": "3UiX9DZVrcLXGhjUYQuCGS3tgkHJDihowhZ1hWA6tUBSdKyEmzA1xmEDwD6uXPoyS8t7Y75n6stJNxsBsgYPfHYg",
  "key7": "3N2gQAWKGgGfx89ZcztMtKptW9Bme2C6MEQrSey4aFv9j42zkHfKMuUbcneWQmuwKuFAUtPbqnMpBajwsX1HSDxa",
  "key8": "3PKY8VM3yuL2GB62HarTu8C6xTYqtGHtDRqvVoxPwkShvSJSmQL3R3aX4YuuggeybybbTNw2d4ArYQ3myuJRJEhR",
  "key9": "2SFiMwKZq9dY1B6DgtknUMUNWnxZGVh5aZ6kMyotxQAatj5StsxTJQ4CqKphgjkgHk8PeKe56CqTA2PFrYAfVN1T",
  "key10": "4zURruzQDuyYU4N7H8CcfzXpceaHL54AL49gn6FGXRwJWgeqcKcUu2sUtgvGhxBErjBbB3Ax9KS67QPXYCAvNSc5",
  "key11": "4RQasq1mvHnpfWAAhyzLPKncZHvk8omKv5ErpFdWS2fj6mZXWojTCEoktp7GQNdrNkuqkmkbgY4sjnFNG4CVhVq8",
  "key12": "2x8jtzf4gW5Kv35rPR4jKfAy2aWCrH7q6pfBgWiokv5YmGUMwbU3VuJ4cfaZxCvpuW8cVmxBCJtvNFNtqHdiQhHf",
  "key13": "499gG1PhCVkF4hA56HpQmPiCNg4kiCgkFPggJwJTnCyq5KigKobxsPDCFPn1CaKFB8CfpQBXxWP7JgA7pLTC3KQc",
  "key14": "232JY6KnMRY8waC4CV7qaRKRNMiD7fnX4BCf4YZD7SG2CeY45ZK6Uk192gsZ3Vc1twmJGxPQictWuhRo1xFpizD5",
  "key15": "2wzJNcZTH5PWh8okCUTTa3KddsVpjJ6CarvSMC76q3kTKsh53GvRzDGeb7LYMkGH1repzzJpaej7rpKP94yYHYEU",
  "key16": "4EjE2k2WPCxNNvyvPPF4uqZ3oPYLRiELbexPL4LBtWWrf6Jpc9jbNcEx5MSC5yCvUvobfJxEJebwBSu9HuTA8QcG",
  "key17": "2wwZDqidGuFbp5j3eaPTuXRJkKLNXZgBMVPtxd32Zd8vaPRF8DkaumwQbsiFm7y1E1vtF85YSXuEZv9KuaFZMgwS",
  "key18": "GDHkT3y7GKUJS9qXZt5m1ELehPLokiUPdrNbapVWQ9Ju8JG81B8rDYGfEHGaZSK96WpQLbqp36qVEtVJBmJxEad",
  "key19": "2D8enW6VjqdV1vDZTrzGuRPGq9cAivkWZHJ1G8G5xdM3ZZHKMjw3L6MEXor1sC8uTVivJ4kXSuCVoWARyfLZ2bQK",
  "key20": "2eenNdwExHo91Uvz9SFXxUNDq5dqGHxUqjkuBJM19t3PzTEL4FuCxPUCGQ1VZymCD4oWQueCe5n2FyjxAoMyyVtF",
  "key21": "5d4adyyAhM9HPxsaqWQwFtV7Nyp6Kv8BUf9XijevmZqv7mEQdjUnyJXg5mCJbc5aADokRqwzHSHSLaJyvuSWTdHh",
  "key22": "3FNJvnQaHHrKu1cJgPBDm8Ep6f1jnVjVmog3QQyKMzJuFMmiy3uUnpTyMmncs7yhyeMmBWGpn53FkMywvC8mw58x",
  "key23": "2Tt9Pg7coLdQ4ZytMgM3jzPB9jsnVqNYTxjdopsmuVYg3shZ4raeG4xNU3GztggtbwYB7jhgPPSWxUeDtnHJmF1Q",
  "key24": "66VD2U6x1pTYW9B98Nv8RNiWsiCaes9VLWCDc8FC8ssCXU7NexnwtJRHuLyPGCjBFeEAq2TLLnFo9jqHh3wksPFN"
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
