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
    "C4pUy9zuhq2PY8C76KbsY6rHJxvLrYLTDepteEWSfM3FU1tn8biLF62ULdSo5mwVNW7QpoYPZLLLEFQCmTPaeVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MD552AwwRqjKUd2AKqyFfDEgtnLPgQhyLRjKh3Qn3hqvhX9HQGb6JserMZCxVvdmsjY7UjFZqwKZraTuiJ83uvq",
  "key1": "3bm8CXLbz96gHgWfHAKrEhLT6E5qBJLu2rNq83VNnSjgvtc6nhnJebc7fQN5FHCnVWF4drPq7fo1Mf8shZ7XEFzY",
  "key2": "4JAEUMTu2ZBENrckqvTWFo29yJo4gd6sMASDSegQQxZoREYbnMrYoGuLBmntmuGEmsrA4VpQwhPh5PCRUF7J3JNf",
  "key3": "5fSUS9MCZ7tpWFgkRQcaSNGCWaYmDFmLazeBNxwnfZJ74cUxcX2zqDjnBPxc7hv4619Zj3C3C89SCG8cnLHL6vV6",
  "key4": "3pJW7YoC6ozuhrc2AzdPt5yUYwkB1xrTkProGfNcmCSgN2tMbfhcw9a6QczjULfWd9Ts6BfshWz2vnqDohBhcyem",
  "key5": "4MR1RuRgXA2vkXxxyqo5GSwr2kPugosqggag1nptEQ6vnfUeL9iQJVoqZCVEk1tStvk6GWc4RAC441oD1bzHN4sN",
  "key6": "3MURXYHRhdRPMTtJrx9YzQTwffAyD4pBTuGCcPywHg4wGcyHwBmNzhSpru3YaKitvHMT1a2yrEtnSVMjfA7JRnDH",
  "key7": "2rfdZ5W4GRhrV5WH4F7RA4d3TJeqXEbuJ8XbDKcPUZpRfrSXBa66dWnWz28mL22s1JnUoUTMPKMP9a6zh2byfKMS",
  "key8": "2XxXkGBUpc6whXetKeXmrg6TfZEWEfuaAdLmTk8hrocbvikF39AVtgA1iuCEkAEDFztfnpwAhVJYAQnPZEMq3EiB",
  "key9": "2zYZtjVH2BngitEgVT2wWVZXqQiMcRybe9ehC5uz9PH4YtAMEZmgJ6P2ZhPQ62FBNunnU8dWcrerB4fFc3bLbYZ9",
  "key10": "3u5GoMXfn7weS5836zirq3uS1yLQoKycCLE4uDVcxn29vLYRLV6BA5VdgxswQZZ8qdBwQJaG3GRoCFo8rDD6v3Di",
  "key11": "NNf62SnNeof6vVu3ya48AwxhE29dGmcrxjeXRBsvvymDt6BAivCtgmRBz35zUwSKqv8kSna1UzGxvxH7ducKiNX",
  "key12": "2dmLneJ1aZ2Hu4w8AcZ3aastNdBZCM9SCcQn7TR7BAaPGuZsVkWte7CcbJQrCuK1Wnm6WrufQvSqo6waNUtuWjdg",
  "key13": "zMZAtZCnhRS9J8Hbc5a4f1S8vE3iCZP4SHW7X57g9fwSJp2bXUxyDojBcag2KS3UZuuT8nY6qn15A2yMba5ZbK2",
  "key14": "5ktMQs5WBHcUpdi89YM34AnVxC5LgFS6BGujPGPSkP88XvNw71BVHTC5Z35kYXdxk4Nx2DXZuXhAiH4BP5GD1Lc5",
  "key15": "2zoNxYrsXjYo4Gz3Ce4JsSyDy9MdhxNj9aq6q7EUAD9UnR8oB67bot8Xwtf9rhZbbKD2spWf4bzN7p6gcJ28tHoX",
  "key16": "3s2cN8o1w3PRpuwHfzkx1TaWDSohZckK3YsFUmZD3cCdvdSxxGD3iK4JN8fDz2oaWhAqPiMqes8uigpraD71dLNz",
  "key17": "5dhvGo3QNgn82NX8X7jGiDLnjhDiXEHAsWXUQ9Hj7Xj9un9ZFrjdE9CYN6nBH2GU76GvBGGQyLWa7R8HKMiMsVBN",
  "key18": "2DL3sF1tgHPXXYiqjetpL79rCEfNGwSU5G1bGQSXr1QyqBbxMJnsyoUhEwynWHVCuZzBqBBx2ZrBGioZ8fCeGem9",
  "key19": "2tzS4N2WVH5hBGycyfNpMRSmo7udKcMYnL8dQpDmqN5ozkivgXbmxQfFeRumaMWNhZZvShiBHPUF7x5T4CQEHnc1",
  "key20": "5sdeG47ixKr52AERETneSS43rRnTXgHGvV5s7Zxboghxjhazh7b8aC28SBMMpKiQowrd91K1EvD3nfR2sdZuzPHB",
  "key21": "4YTARNg64ji4CUkKuWFaXAhNn8dLu9rpyHbnoTDKWnUoxyEgkwdreAVmVUZAE16JNoQDQT9DgLkiiMhwCMFf6vGG",
  "key22": "59W2uvG6tjWeTAsbfg3dutTzNhQBqrJXjzmYZGy2bzUmz3npRfyGkx3oZ4CksfNYGU5Mghi8VoJPxKHVypyiiWwh",
  "key23": "4PsyhTNQn9yN8EgJUCya19JFvh5NZuQxssAtHvYhKYFaNhFMqZnHtKRrAPVKdTBjdyQ33oQ97zCU7NKZFzKfiDGP",
  "key24": "66EW7zqnprwcNZAqVu1UwuRLrHH2rzhdX86jWHRic6aBSgnEUD4PYUQbVsbEeL1a6XomYkKUtnWb7xYgfcyuxAoW",
  "key25": "4MUsYyS6jmm4kj2u7bELahi89z2FFr3Ai2Eay31EWSfvCSaLqGhvRfDrCh5drERdfVjcHXbfe1egPreU6pdt5dEU",
  "key26": "61JmFJ3tiJmzLiC7fKi7nBNVPekZZDvoF77zVq2rC8C66ZoK6jvHC1oma3qzM6G5rqmz2rt6egBJoudcfKLApf7P",
  "key27": "uAyaTN4j5HoVjWfC1PX4aF3onSCFUetXaAxqmMZGnnXey6kPyMUcs6HWnSVXi1g36DCnz6i7vhBh6PvqQ9Z5gt3",
  "key28": "2etHexZYKXjmzVBFDMjah6Gy6W1ox4SEd8szZNLNoWDecUZfLeCiQsAmPPJ3YSzHc3hDkJB7bFemGHm7hFRXpwJp",
  "key29": "4wdVuoee7PWA8TCtxSM2K8Dr1YbzX8FFkASVtjuvpxoyobAodKwQUVsY1UDT4rMTgswKTHcs8fYbMfmGmN3NzNwa",
  "key30": "3w97ZxGbUeVeTK7pZD4Nj8fCTXVFi39cDfaFGuDpyY8vJRwbDBUuBk4CMkx3mMxqUC3eo7fWn8fSEDn38vDXknVF",
  "key31": "4wJNDpGdGNJeimn547BAHXXSRAAeHhoC3rKWxfXeSwfkPR8oa5facTHpCmGkjPWc2s9trSvFfmfWTDdroqeX1j8C"
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
