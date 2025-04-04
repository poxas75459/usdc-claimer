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
    "44h1t6ZGdjRFJpKMo5x2yJhdrNUJG9jVrLQqHge61zG4EMi1QEjBRBfVcLudhkrjBXjJFAHkF4qwetrU4USy8qse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EgWkMXShA7PpsnquGct4QfQsmcuSMdw7ZkA2LTaCiaNJBPvwJZZZ1u38wT49pSeMwAKnh9YVfRnf2V9cPkbLgiR",
  "key1": "5F3pgvcAeqnJmtmCzXSjbtjoSAQA7XMkd9gtgGvy8JCAHqrg8gMn7BuxMYpmvEMVXqrPmL5TigqPveBuiLh6XF7v",
  "key2": "5qWkhB5LAtoQgpc36UFoMQFzcsNPwW4G7kgk1XoaHmfKvvjqVV75S5SjtJNKqb6bDeJDwmRfJ8TrWYCYwqSmsHYw",
  "key3": "Q3pwgKfKXYiZEmZg36KefW5ApJ27BH4s6cZeyhcfTYtJJJkDS1ayYiybp2reaUaofy4FwGg6C6os6vxebHKTjwT",
  "key4": "3wnVuxfwtYKDD8Gn8C2mZP33haVVnM2M6WD4k7bqDZ48LZ7PPnH4gUKHCxY66wyNfunGFUjUgtPGVoqgQ96srhG1",
  "key5": "62g9oGjntS5FyT4y2FmoZrWXqURh8qepego5s7L3onqTNqVXze1hsWMwHzJ2eymE8j8es4ZBbKQtk5c2aEBxanR6",
  "key6": "4CfnQcHLnRBpc4tNWyamdGshWhWrUnxvkShSp6zpHJezmeB2mVaw3Dtoe5ZuTxfyGZGWuNiZvkaYuv75hQGde4Ja",
  "key7": "2uwqqHYeze8mcuuEBGjb5g6xmwoc6zsHJYuzedpyrN44TTpEhFxotwu3K8KwYmuw25Nh7A6oxS4EibgGMLTw957m",
  "key8": "62LEk1vpWjE2Z9rQLpmhZJBPs5gh9gtZm4hPJ15frpZmhURaykFhQJ55dfzTpoLdnUfCYamAmFpocKDijaSMw8PL",
  "key9": "5izRQhFVqAAXvkq2yxfFcT9HUuUaAzzpqp4ghXPpMF6ofjXs2sAeFjo4rLhLbujvoeH9qmA8CWxD26Tbpf7kiciv",
  "key10": "5UvsjuXcTTDbmt44GJEraD3yGfryA8kGxtinrtU9kQJCiHoYnVQfooecSf2tXAaKAJrK7EXBDQCbV423FKv6wAtF",
  "key11": "2VA6eaZRey1WqDemBRGRqDfKS9iDnEsgHEVesi74ozQYFBfcZdhy7YhCdgf7CsyzEQiuwArVXYpjgpje3RMCqJt1",
  "key12": "3bUocS4aNX6Q3JGgB1BBX5iJrc73EByS7NHzzfE48e8FZ9mPVY9V9Q6VFK7zzWQLHDFSUNnyTuKYdQbwGUY5yJjb",
  "key13": "3Fv558oyNN15EM4bekcwtN4ogwQXwC3AUwLpfmhr2bHNWpRtZazja1oPhvho4MixTPJWSfQpvWsDLcd23BGDupah",
  "key14": "2fSpd2irNvWLVhsga5RGBxGMhb82FEP3kK5aZXrDfYND5Vp9Rsfk2AmBRNADbVaJKWCUC8G8htCgK7Wz9btw5CoY",
  "key15": "5oHD4pMoBQ4fEcCrH4rdAam1RDVxMPa7jPuSzdiJPC7AEo5GYpJrYkEQ8jDvxRgDkWJinUojSzczCQxWsK4MjKzJ",
  "key16": "2YuvMKzH63eAnYN5b4Egk4mWMX4uvSqmiU2vteaxReVHZGoc1kEoZgBpfZyjbeqVk7362SV9J5WveVGdMtxUQNAS",
  "key17": "4hDng8Vrxv8L2pip4hTJWj2v84rVZDyt7ysPh2JuQsxRKxmLq2AhtA3KvNy22YmoXMa8Ts5D6MwCNKZiSs7GfNLd",
  "key18": "3aGAQ2aSKhvWLTPbAMUHnPrZwr5dLWyuujT3CsEj2QZd6TePRkUXfwNrjsG1gaf6QXvaNjy7mv4XtR2x65ppURvb",
  "key19": "5HwDp2Q66AJU1hjYv5S6HH2gR5J4MyXQn5oQ6wD99pVgnJBesRZxvVBFVQfTvigENxUEML2DjPUrLvNGNPfLpMPe",
  "key20": "2fd8xYLXtsmiLEimcDBU54eWJLfxPG1uccoF4W171aHAURawQG8M88ESyXvb8jqqw5PC2G8WGePTdQAM2KwNR1YS",
  "key21": "29Umuk6mnMTQdKevsg1KZaFhnLah96kbA57u2rHHvAThxUdq7BAxWfx9ZwTXxgDU6RoBpHqeBeHiiLLQkhhSJ8jW",
  "key22": "4wQCFWUtXJP2XPJs7smMCS4HTz8G5yQz64hrMhQ5YJ2RHXf4gubFC7UYnucDArRdZ5LaT3FC7edMeng5sEQeW1bA",
  "key23": "5wji54qD7gHJSj1Z6UE3JxG4jXC6P6pkUdpXSP7eBzi8iytUKeg9e2jNJvifAA4gfG9dfT4vXyuAkrmheHa5Vmck",
  "key24": "ycWojdsFpNM4FhfegzHmJm42KnCkrVRS47EX2BKxN5gVK6RbFG9aJt6UzZK7HG3m9yttt34fSrGb3iqxdaGxSoY",
  "key25": "eANLF1WfFSWqZDGWTSTFH5PpnStJvS4SrkqhfzcUq94ogCbp7PaNrdT37JVBoetT87XFDNkeqsSqLAM8YiHFqvZ",
  "key26": "46w6jdCFor7MXb1PoNqPBqCpiWLf6izdF3kfXjLaCsrcMPQhP5dSdiKn3H2Z54gAR9Hxou1PdmSLsBY6yjCX4X2U",
  "key27": "4jahUcxwYyrs2TMY1z8oydbCjkWwZt15G4kGRqs94UW3hgpt5UEvk5QXUrQejD93c9EmsML7brrhctR6eWWx4B4k",
  "key28": "4rSVpzt4Zsrr7P7WrTtsSBhBNZtEwDKA7YdcRgEtVMyQ2Nx5UyV9XbrQxaJdcAoUyMG5axCwFFbF4NeKs13EDRRH",
  "key29": "2bJjXhPHB94Hmq5GPvh558yeEVeSSAABJjb1VTHyPhTB5c3JKQNdSTVnWEYCnSTijdgDJt2uiw1TMP1Fih2BJ6Re",
  "key30": "5tR1p4sRWmrqpnXdEtt72gCZPvA9s3DqoBZyKN7QGBihBUFDJ7LBgeGNz3BiwBRivxFbyMhCAqhX5adrUR4vVqA2",
  "key31": "59oDgSbTzBEYUzVDRqq8W1Yr1g7Er8Kt5MVd7MA9zFRmyZH8xWE3XPi328Hg65T3L9bezj4XHDtV2UctcpBtS5Gc",
  "key32": "4N7nEnb2nY8aGeztQmZVMNYYh3RBkc7iXmgk2XYdPvYM8u99K5BA8W8Z8aKTxhNTPbK7Y4ZbMHY2PShUmA7zG5nV",
  "key33": "38RReMDgp6mVAxDzBLBd841u7BoANUKpmXwocRjBGKiUqdxDbbkqa6m5AX3ZZJNKitVY64xDHYfR1DTZ7KXwghqJ",
  "key34": "5hcabec5JUpjgrx8g9dqpth9KfDin1nxCc4wRrgbFGY5uh2gCPdLvVCuMoWk6oBzgB9GjmsudByv18ZykDHzxRgS",
  "key35": "5ZaAk3rhXTux6HrDzbr7n2q3jzSFr9ZKgKSBXmgYpdhwpiD868Nwu1M88tQ8LHNw6Tq2ZisJx7ZJcsLLAEVLLYgh",
  "key36": "6WqEARixTXNoYAXCwKsmbdKr8NUtiGRYBDNoX97SRUitVfDemay5nSJpemVjAKPdrBRw6bsuhsyR9icaiyExcaC",
  "key37": "5eypddvA7WwStW9MvYDNfxsGhstkB54ohuuiGGfzavFe37jvMyNgCZDxyYUhMZLsTKJZpUgVK5FgeLQHuB6MQfUK",
  "key38": "2tcM5UcJA8Cz9TJBaw9kY9QcspH931PV9ncgpA2r1zMATVyU8h3KpXC9GAcgRVUzpZFN94dbrkzWG96QFFm9C4hi",
  "key39": "5zgGDxSPfqdHAz3CJVFnCapCm5o8KZPgVHNfB2sC273Aq8no3x2iTRVgr6ZM5nEP3YvZ78byXNhyJ3Hm5G2JFhbK",
  "key40": "4MC2zrJLVztW7vLPFkoURhMq6Gh15g18iZvJnEUdRGsoSQtvbfLtL3AMMqEPa1PMp8Fci96Ne7bjGyBdCLctmt7k",
  "key41": "3fYK8VSgLTqiL8WGh4iLYFx8oKy5Bj6wiQ1fAHKEUwrP91Xv3iWSMfP6g26wvMnYeAtx7pWpWnvTQsg5JuetCzUt",
  "key42": "SNbEiiNEWyqiifgdkHFnrV6DkfTNMQi7DAF5vtVDDop6cs3rJUoJ4f42YSo4y9n4qL7BhTfV2j2yDXBjrFiYfFp"
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
