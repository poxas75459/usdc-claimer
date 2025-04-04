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
    "4JDt5M2MsCBEUyF5JxCNqbNLnyRrCdTThCPck6x6LeJySDuqWmGejbW1UakXP96DsKEYntdUXYYofi8RqzoQFjHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uHWgELnvZF9QgQ3x4pHSHx3frfuaADpSTjTzCUt56WwcUXiPdXoLTvxjk9hTrhgEtGUNkPvXMh1y5vwaNukyLFj",
  "key1": "48sZS233oACkjwULEdSJ2HfC2bKQkojpMYKcuEN8NLJ3mirNwh1qGsgeecyokBY8T8Pcgx52QsujxrJ4hkT8F8dD",
  "key2": "XDSQmMonqyuJCYm1gbZQEawxjucdKBxzZwWMPA4iJMHyQvcRX4GiMQvk6MXH8e2gt5TbvYZ4kacdvzbtgpW3UvH",
  "key3": "2AzmgKNJrewtgNHR5TRvQDpNSnj3SYecNBhRKPo5hUiZk5ZoLLezPeuRppL2fgzHiusQ3Y3CsodsmB9Q775tzqPS",
  "key4": "2ntaZmknxMKeLcsfVZTpNEs9hTPLbRnh5fmSZaYYDDsG8SZSP8Zff6W5FVuPGiCCHxEsKwx5nktoHDiJ8BvXtjiC",
  "key5": "47BWafYfJcLvwNaxa28im76CZ9SAHqzwQk7BUrKM3HhVHCqsycrvNnanG1DYihGCmzB4ATfxmQq2ZxhiWeevj6wZ",
  "key6": "kkaUHGnKQM8amaALvyDWjMnoVFEoM9To93nPRakKsMaBowdG4tUzZpeMeXZJHtU8y8NAvsitjm5XffcevZPpw1Y",
  "key7": "4DUQrfWKEh8iYZUJAaVgJ5whbPmeqPLCxgVeeCUi1Prt1ukCm6VNjkTS1is7DBotESpEiekCqUAJ7g6LfAct1fjk",
  "key8": "5GDHyfBm6LyoDoXkJsXDbZ5VYNb1UfmmHu2cT9N13THaqLR6XrbTEyhZViQcES6dXmMXKTmZb6f2rTV6e5aB7b19",
  "key9": "4Kd55g6MCKvn7GA9NvD2tUVCnCbZda8cKWtqG8hh5mqgC1bL9hKMWwR33wUMfvZ9Jx7om73yWCvipsRhQedguixZ",
  "key10": "2xAHLHyvbSVQAQmTiUUjW31TGnZ4gwTF5zfBGEGVeFR6MFuNiqbdEwVgNroYj24PoxWoNGQ5q1t2NumYSfTtEYJH",
  "key11": "4B4C9yZhrk4CvCySiYtFfKAcBQvL95QNpMn8rguP2rwZUaUfk9gpHrmk9jjJYQqZBTNc799tLRY785z4iju49hnh",
  "key12": "2C6kmqZ1iC6nZjBV1urxNDUJDyPRbUuEatg2DzvFFs8TGp9v4Jder3v386iYgT4Goed34Z62AAbzbEVpDwhR29af",
  "key13": "2TnbodLpczWn1NtUQYxVxJM15FHgtTRqLnCAbqhZe1zMdqV74eWFVfGDfZJU7zEcVYgtHv26KuG5h3oVHaCjN8KQ",
  "key14": "5APQW4P5n7VdU5uHFJ2W3xW7dBT5ncEkd9MPSZRdgkbLKv1Yt8vauAPkzX7F5bKBWMvsZ7ZgWdJwtgWqCXtb1tt",
  "key15": "4bWGkwd3E7V1gznKQWCUq8f5BV1nrZbQgQYtdNBbHptgZEiG3wGD8ELvUNTHnqGRHdQDUT1gRThV7r5vewbPAptu",
  "key16": "kiCzWw7fBcaw8emrWpDRwL8tbooHBinLcptQTzLFuqd4JrnowvcAvZmrgSq35Avu14wrFwiGcBdCCELG7i54TWp",
  "key17": "4Q8EpdBVXF23FV54SeZyt698M9j1ycbFdNz2wHm2FfCMkqMnHJjixjN8AaeqAnWXU2tJLJJQiVUFimXw8xCuAZgs",
  "key18": "2gK5NoAqoUMwkJKSyj5LspDpum8wDa4cJgUQarhBBRtp8GFSbjGJFb4XcE9eTtn5SwtTpdF7aSKTXePFtvDNGKkQ",
  "key19": "3LDQcdpAT6KF6CghJyqusHZUZhZuEjz2Ch9SaaBrVav5CNNJYGsq5ekGPgYGWAgecdxveGbfJ3S9D1GPxKZKeGYK",
  "key20": "4XRsvRHPBaWcoFrkhgineKmiApfrLeeLspWTNqdnmL4xcMjb9BtLeUkUhxScXKZehiRaSQmCZEcX4q2kBRMbpLAD",
  "key21": "42tckVWsWfDbpqbAYBzteBZuQJJUKBzff9oECsUZ7kJx4rb7aMTUTRSege7WNgccbEujZnszFBcS1VcgxVV8qYpM",
  "key22": "5Jx1fr1db89P9er6uP48UKzdb6o6F2B2fBfLJcVrXtAhcheDfbhtkxkUZqG4GX925ePfj1PobsBruQqDM4bVRQtF",
  "key23": "4VJKqKXUQUgVUkg2gtoKETQnL3YKcv3NjwWMVqCGBkEkysFUDAngEa4LgxYMCf3yAE9eYfN58T19VKP6YJuQgdnt",
  "key24": "4pNTh5b4bsE5ANQnrvs7hErXutka75WEnYkQZFABxG7LhQebpFd8HsA4RMzvAVKWPixYjNrmAfrnh2KxiQP1KzBj",
  "key25": "3QDiWA5syAZN2FjDYQ72bTEWb5dwviKEBJPx9RumbmUexVsxtoxtjwuD7M1eBDFNPYWJBHF161upqPaWWHnU689a",
  "key26": "hfnorgXetpEpZ6ie4nmP9AC8MNSUuT6cYP6ScL13EFH7Kq1sftEMkN5FE3HLwKTzp1wDwbpusrKs2DcXST64MQb",
  "key27": "5NpSfXVdqY5kpzEL4jsymTAJkmWjR3iNUNYAAzWJ5xxj2869f2GNE9WxKghv3oTqsfD5R9YeUH5jq33SdrmpAGyc",
  "key28": "3JYQKNGRxsJ7CBhPc7qD6JkcVfqk6JDiYRbSVNZoNWoSZ95fNtyTnKosyJr5CEQ3mXYApyG99q1zucbTZiGS4isc",
  "key29": "3SozLrxdXc1vUzqUWaeUjbyTf5jozQmkoU7TgnSfXmuxUKH6H8QJqQGtowAtKNtdUCUNjyC7mUZESL6Pni9hMpF",
  "key30": "4vmcAdMmNXdEuUkkr8sjiEGsbgCQPBDRXDFdLAdDqgpNfBumih2rRtwQnPfCFCLziZDZUhRZmrngQ92qRcEG9fAg",
  "key31": "4xCXdtveo6xyrA5RRjzhYpxQAvnBbQeB7cmmYavWzWnhixr14x7j1TwhH3zkViuqnHsibjTLEFGtULDUq5AFFQRQ",
  "key32": "2EpuVRoBEP1WsiwDLJMrLG6S1c3NY8Fou2i9EqZYNJcHmn3og9kXyepZ9ogprh4hSnGCb8pVqerPXfKfNNoAUPxy",
  "key33": "RwGjH1bToHthbjpQSV7a96Pf8kJ11DK1cVn7u9PYh6v13xG2QVdkp3ryqH9xcZSemYnw56Nhfydi9nKb1NQ4hiB",
  "key34": "pYTN8jNnLHvnUnA1mdjU9kuYLWYAoh3o3KGdXoVej3B2WsbqQDMtW7qCRuiLyq6oZbard6oRa7crVKNgJpsrGXf",
  "key35": "47Hozj4HX3UgyZsvsJu5kBkafuH5MQjTHwBs7u3eEcXwg9ho9Gr6xw7X3MmJMbzk68X5zx8si5LEFYsCo9D6WZGC",
  "key36": "dHSQqYQAcXTqfzhRVVox8gZgNUFzfjqUFmwKZPimrRVtKCi75stp8WUZ5VWy83M5euA745WkfD7WgUUJ81naeX5",
  "key37": "2G5Lxsyg2GRXZRAqfHSKU2daTE3MpXkCSb5fkvkrMmaXqY52aUEwsyTiBQ5me7a4Azo7Sm9iKnbxtf5Xamhtguu9"
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
