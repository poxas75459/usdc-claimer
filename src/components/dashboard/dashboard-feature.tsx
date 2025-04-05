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
    "2kjTvCYZJUztCKoZ4zJyoebpU1P4eXi7KmTWQ15dQDALjJinvNy2BdMXXt6m32A2UcxZLweAj1VUzWAkNmBT4wAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s12QzBjAhZ7wRRGYj9XLMc9L1AGUBvhpoKUS8u5nxAAEEa7eA7kZfayc8KR9k6tcAX8d5btU3btmGgC9ZXaBSAr",
  "key1": "55Ern5v4qh3vnURdUNj3U8Yi1GoRT1cMho88oLJRtkxjV42ayz81Kof4KrcGij3nLWzHSDSY3phkVmXeyQufwz6a",
  "key2": "hRE84Q3c5SPFifPvvkAnLhcEjYw2XWmcVQJf3qcptFMJCbeNMRHx7xG65A8jXweL41fg7yvC94HVQ6t6aDzZDxX",
  "key3": "rtjN6ZeAWBEDXsug35eb1PTo7N7d3MA3K86biyrgPSM19U8V3JxBvukLu3LfSqwtwMKnmWsT5bLVrGGPjG9dbFq",
  "key4": "2EZa8Gd8GcvH7xGtL9HdMdnqumCxgsxqPe61v11nRPCyQ4Q38kkNbzjz79oeD2FJ759qnngbuZxarEV8J9gXVQ9P",
  "key5": "65RRd8qKtTT9JiLWuxonh6hYBEJz1hnp8YNweueiRfJjTZBUw1G44VZCRvtbC6LVenW3BTmu7VWyb5rRbL8cZdZK",
  "key6": "4KiszaBqiCNDT2frXQfDCUFcgoSh6JzJqEpVBoXAovbKeY3gfvY1iv4ELjifDQj8AxFGzJY3CLbSr85fJ2xdd78g",
  "key7": "5LL1b2GT1feFnKCqSSVTt2mZsdHq1BnNxn7BRVZq4qm9NNz7LR22iwxbUqiDkoo8ougxtXGwiatViUN1zkqcRX86",
  "key8": "4f6TUbT7AehwxpzMogqtCqbmfyHHpZPtXbmRzaciwsL9AW32jAKYsZoHa8CikazrT5CAiSuGkZJwHLf2DLcNRAq",
  "key9": "2NfeG1QGpCZ8RSMNP6xWxoBPhUzzT7hcaJPaGdV9chymtT9nVqCw3x2rnqr9fTjdxYhdZVFKbZpqJjMXV84pgGyr",
  "key10": "5nBiJECWWdMrEDwTT4yhxQLMR9zr5iggeNy7R5r4YLJrHcfZQpsSAZn4Qk8JSaVue4jZRJL3sx4zrNbgYra1Bm6U",
  "key11": "48rJEHk4jf5cYuQ2adfhXZNfvqucS3nxwxNir54h1kWVJBzeeSQByBKcuWYq7YQfGAfiJ9JfE6A8k3p4xybFjzcM",
  "key12": "4ZTWCKtpMBpkzH9r4FWdes9KFHbW88Ts55MycvzgisqzZxWtpmheKU44qc36mL3rzziqQAjmEjBghbraMTSBAQj9",
  "key13": "3rDmzrXNDeAZPPTfppu9TRMg8A7aruzmXYu8v5rkVW7uMCbJTwmAkxSX3JJiGtkEqUnLF3e88B6HHSAdkv5QsBzz",
  "key14": "26xg6KxLMzWyXyYGRP2YKSLctM25TpZFgy7SHDNQQTZa5wBqkkLRKenQ6G9joeb5zg6LLzH7VwZ1WcjtqfwWAsG5",
  "key15": "5mFDSZ9SzGjXYqrdBGEf7Ei2Aq2H9f5MzLjFinqNAWYg2GtuoG8xJuS8EGG9LZra8JdTwGLzyPeKKjUJqv1N7bGH",
  "key16": "YdLsNkrRwjhM1G1qm5W77RuM7MscFwCmSGqnWpfYxFqrARB9qTpmiQfzKvGmSxJTGhgsjgFxpQbeZyPEUcKJL89",
  "key17": "5YqsjmahoB2w1ThjHBqR2eQR2YSnHpWbWVjT84NRFdvDSedzRUw1wXDMe7uyuMdGXjZ9W7k9V7jorVgW1kj5t7VD",
  "key18": "PAejWDWEJNjYW8Z8u3TFmhzGQzVzxpreSd8FKLmhxATvp55S62XJcx18b6KUze2KGCfcnMrWTUNBzQxXgKYF1FX",
  "key19": "7VVZ7Ea1yVvYiygy8YMQXYhY1xGMa8B2BnqVWjYHa19jX3UhTxMEnrxNNpTFjeQkcSRuWrKQr7oAD8MhrN8GRje",
  "key20": "28KByGNrdSswvjcfYTcJuNL21r6CK98dwHVxhJKqw4aSvEgzYhRNJWFXnhY9fDTPQCZD4m6sTFgYZ7rL8SQ69EGZ",
  "key21": "34CR4qNXMdaWmPdgjYgLvamNi5phGgPrLkcwN3BYQb9hMAm9m4cWHLeWuRmAPiJf5xdHW6Kk4ViD4cNLzHRwJZr3",
  "key22": "Rws8x19vBUZfEYuKK5WbqLg2eQo7YLPATiaHUyKmpBzxH3PVw7kdncLvFDWYKAeVbbdQvigz7MbhP6xPfoyfV2J",
  "key23": "4J21YXf8TvKrTcErRtGVcrm8fp1arW2MUffPX4r98H8ruZhqrhGVRLehs3vqtUGKSFMEjmNgm2obbnuVQDQvZ4qj",
  "key24": "5yAdNVgZwK1Tff3yZvPBCiqVFHr4qQYjengFYaJcJYgqsPruVHocQ5jiVu2MPHC8XXTtEchHg1xuwrhiM21hC2oz",
  "key25": "24fHxAFFf8KYWirButEDS1T2eANHWQCAfUeGdNkHoexwJNnak3emGH6RWMj9MPPPy64tJ9sxYbNuwrDqJrAtKTRG",
  "key26": "53sN1n3izXUHHehsGLuBLqGh7GLZZMbU7mCipauVuYyMTt2btag4HF61oUuS74ERj2LuBePtQDcCVoH6f54LWpen",
  "key27": "4wqW1GfEVy2RU5BVy71KRLNQy4bbAJmpjdNFtCj5k2GKDNGxa9WiSzJmPZ9YQK1fMUbom96bU514KGdWWNPx85y7",
  "key28": "3NKt4iJx4x2GFYvYstJqLvsYrbEpZy1iWhTJYwNt92v9hLMMpB6WTBncfQ5ftb4rsLdqBwKBC8Ha6XbnH56BF2xn",
  "key29": "2J2MGMxZMSxAVvNzCi7YYPQCXcpwLKw7PUTcBiF7em74AadxTP5piPUnGxAqwHXhZUyjCV3T3C1dsKEgUzTDtMpH",
  "key30": "3tryFseFxWHSGthB37pGSjf2CzgmSN2Daq7Mywp7PJSW7GbguciTSNfFsVB2AnJAC7HTp1MryVUGMcVXZMKtS1ma"
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
