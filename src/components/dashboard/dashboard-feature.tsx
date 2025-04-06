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
    "Rn1ZTfa4PqWeNwQt83B9oRWuuyKaFzTz8xf5pcodUbctfdTXQ955Wf8NaAesRbhxfhP5MCKToieAHexrcZFJE3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKkcK36446CuwqQ3iiegUJp3w8H8Tq8efdhzuhvG6UbPjJTCwuVBqURkzNsE8ScXg7BV7sBRoch3QcBrHrbteoh",
  "key1": "2cyfwXagLtP3YpLb7F4R81xvZCxGZrQASorSP2hPUUm44yraYQW8cXL9ZsXmonjT88MiG2t4BfuGbNk8CW4Nsx4E",
  "key2": "3mR3mKSJUDcyM91oKKojzFyj7DMFxvUu2N18ZWDma483Cy8r351aUbf3RC4dLdx94qhefhHmzggywPe5vHKoNaqA",
  "key3": "4y5RLDHRiJ4nZm1VVX5pP7KybJ9KiXgS5y66i5Uq8SgjWeachjAVXzCEtSm8CdAbWEQfweaLTpa6maD9TUvv7Yon",
  "key4": "4jgdSVz5yWw1Dyf3cQBwFAfdCrm3ryJHz6vhbxbUac9MRQG2Mi6ZFKjtY5Egx9ctZJpLAHywLnRdua2EkhmdfPKB",
  "key5": "5knZh83yFLtrXUJvs2tvUMusvRwJ5Mri6m4f288KCEHY3FhWm7hXFsBW2XiDkguxxKBG3gmx2uLMPq7giDLCwHGa",
  "key6": "44ebeSXZc5UcNkbSMFaWX2gHjwnDXpHWNtY4wwKHh4iiPCZo8JbFZxgMUWrB3Zaya5mVhKUsAJjPnAumHzwgYnh3",
  "key7": "2NwuX3tjJvqXFA5n4CqAPZurLpGyUU1PwtBM8Lgvzkz35t5r2StWBFujvj9RbtEmmZQcBKUwJ1u9VXSamBURSMP5",
  "key8": "5TZVno8GJwrcgAUk34Hzh2ameXnFh5kcBitGwySbpRdFk6kPtPsm2PTD8fmrmrfzZSyaWD7NSSMC12qz3B584Qs8",
  "key9": "4gipFCEnEDCxfM5yyMDohCj3wsZNJrCehwY5SE9sLBvdf83Ns5cAYueL1Tb5bo9ZQUgMosimR6TED8y9Rt62WKtt",
  "key10": "4TJZgHKY1UDA71JfrybDqrjE3zjJufGftkyH2yzE1F4rMcg44Xh5iag5LeZMbcJnuFibYtJrSw3LKzM4ieTU7xAW",
  "key11": "3nHyqM3MMjnG5pxqZmPGCXX2hVBEFdazJT8Qr9k1M29C24r1JpA6dTBPzH6uYscyRyRmUCSjFM1c9GzszUiFqu3a",
  "key12": "4RnSA6f1Y1Y26ZiD6WD9V3eX5KvGiGjiTVXjMFCA6ijF58rRhCrfp1joCV5pFdVFQ5jnLm8rR1TVZ5BwdeyH2jmJ",
  "key13": "gK53qbnBAxYNNXa9kLfDbpj18X5U87MVU7yX2S8SNLmjjudxxqQb4qyamddtM1sVYJxwpyqTWEE9wiDjGtjywmV",
  "key14": "pMsxkHkq9c4ZziR4MiQnsL5RfjTMG3of6jMHieyFs8sYCqK3cEmiw1pBG5yWs42NvkpsM8XcGZp1KkQkdFu5VS8",
  "key15": "5j4wEY8A2jYZKCxNpmY1SCZAPpVRrHYe9JuBiGXxdg1eYDJACjKqBJmfhb9WEUxiZDSLu1oagR8ny9qJLZ8qtfLN",
  "key16": "4Ve2hJw2EpfoRpA79v7jmY3btAfQJie5AJN6ffoWWydHdHkZy83c9A4oaCgixxeoc4MLcALVoyL8moHS2JwJB8co",
  "key17": "sovcoRkBe4MFKecXyc88RW4SXRWhRJg6bpJXz194N6cjza4iRaie9kJ5RayfKxfdznUqsiyWhDrg3QexB8hep3W",
  "key18": "4Vcruf6nEYvLnJQw3ZP7AXgPx8Nw12gBi9HQuQFBA1PHsXFjenR7AwnQi3NuwwYnnNyGhGAz6AKne7HwEzPaUVMM",
  "key19": "25Bx2VjB3mgZc9GYvXdCCUrhLRcXJdBK4tcLwe8ABXvMjDLoDvgyZQw9obHkZc69bQZpW9a7htMybcy2BWQ5cAuJ",
  "key20": "3211e5Z3xKVyVjvj6B5EjwCqEmzkZ8Ea9HtNXMwTmQqnmvGBDHkVoWPKsoS2nyVKj3hNP7zVVXSVcKE1cmJRocy9",
  "key21": "3wVWd8ZvQEfjykgY1XHxcEbjudGPaLb671KtSpvjXiqsLWvTdzjJkdCbd9EFx19evQgXQEqGUnvTgxuh3L5Y8c4H",
  "key22": "2UsZnfX5r46ZmuLGJvCKyH78Fa34c7dxrHjhMGwtSiTnMjAZat3msjkDA6xK7LrkPhaTZPEdw4PCwGHPgL8V75yM",
  "key23": "28YEGMyw7eyBXa7zQX4x54Tbd8s6CmqF1R2o1dhGvEN7iMtWtyhdBw8ViyQXYFJ6yxhjJaagJQ5DDiVURTWsLzy9",
  "key24": "2mLcvDpB7oVSqM8haCtiPt3Np2ST9t7PGaVAhpjVamCpkm7btbYr2H6feZBpqcS2KGHiRedvDKb96DMWAhL4CyCy",
  "key25": "2xt3cNGYNzzPBsKgYn6Nd6tVMdi7fanDwz71Eq2D6b2ARWWS6TTSajEufC6yBMiUn4e2Ah3493vAxqeRKeQ1iF7U",
  "key26": "33onA3DJmZ5oxwSMpt2YFaZyvYBAwHy5Rb6Cgtc4U9zQyvSyFh9CNQDdc5AWucZCizR5PTnbH1Wgij5WMmCvYaf4",
  "key27": "kpQ3WCFUeWTP1R4664W6XehZ9DqpBLyzYbGmJgf4en6zjc8hT9du8voy9V8qvBoqAFjsyBSGZ6e32fBHi5jNjRm",
  "key28": "7WvCNQa9T69sYvRi418v8j1oyxQ3rZxGzRXaSTGYwKmnxBLRiQVhAitH5cUdeLKnrEnDwwjC8tPwB4QuvKie9EY",
  "key29": "4RADva3wJfHiYDcx1eWX15mexR3WuSST7TDNRDX234sys2g8QUNjN9sUPaD2QKQiDX9q37253qDmZiyJjzVWvizo",
  "key30": "2CA5vjYpKHoyDDtKPV8iPdvsjuVpuAtEevvdpFPViPTPnvTDmeRND1hn9kYiycQwHR7rV7vKNxK1Zkrq9KVwXkeu",
  "key31": "38yDC2X8QWXRwqcJSADmNWnTFWg4kCE5MTCpq15MYTPJxKFJWE6N6gkWz26xrxLwd5tMX6Y1L19e3vPQ7wsZjeb9"
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
