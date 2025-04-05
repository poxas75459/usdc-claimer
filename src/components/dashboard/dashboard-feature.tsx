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
    "69xJxnSfgrNXDt4pEtTj8e4PqopH1DRfwQKyKrXDURZswTYR27UAvGCZZq1DNN84CidJrXLZJPcjyAWDBcSMdEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cdC6r7vuxVpxp3Mu1V9rxykVZWF4ePs2ERcbUyWZyKUxwB7eq6jpPBxoJTMi6hYPTTPqVwF15bApor9bS4ZTWXv",
  "key1": "35YERAYWgMjtxhQsWhy5FDhfe4MHaKBRVB6TLuErtsx2cENbEfX45oXWGB2r35J1p2d5TQVgUDbe4Aao1Cc21hwG",
  "key2": "4cFL3gtN66LM433eL3vsWMWQtz1ZVcNeqFqHSTS491xm23gTi49CkGf7Qb94tKnUXh3eVd259otX46BpHDbKvc97",
  "key3": "5MGysCb7fLSvGSYC4dGmsuzsdRADYXvobXt3eUb1RAEmhKK2Yi4zuhJkFSKj2yLznEizLofYyD4sxbNWhXq5aGzS",
  "key4": "4te9B4kTwMVYLqkaLSQ7qDvqQbaPNhvoza4xSArQjPDszSxpWsphArBvkhuf15daLm6z1rXRvECDcm1WotzCf72",
  "key5": "4ZsrQTfRHvxUVMCVQA1c8KFdGFgVgSeTDcGVqHNz1sA2rtDxawzbLWyutFTBTFcNpSW279BbQ7mAWA5oHjuCcmjy",
  "key6": "67nZ5hLYiLG6nW8eiAcd5QuYxFqQnKjo5bqn8KRKNV2aLG8UKHtiJqiRKsDk465wjQLy7PA6t8uiao9peBJ8swFP",
  "key7": "5HMUYej1R3ZtS36oYnZkUDtgNu6tDa7c8itV9cfdsSjsZd3jkFUcvB5fZN8gcBh76tkEfAgB1tadbQtiA6z9PqAS",
  "key8": "Qe3PA7VKZsUQ8GgLgdLCz8o6TTb6xn67vEw5aL8WPpEynk8e8sUMmaDiB6WDTe6YzBv1NHdoXTyRVqKcx7ohvRE",
  "key9": "5Cxmp6PyNjSL2WAkUutcU1m8q75z3LDJ2Z9xEkFt58SUkFSEpbvtEL15XBeUhukVhmjJ7xq9keCYXTNQ4VsZUKiC",
  "key10": "qPh3TZZqcbcPbYRX5DVEfXPAxymKhamZU6FA2sRkC5n81zb5JvMfLB9HPy2VTQMk45ER3DrBogyj4VUjWPLkgn4",
  "key11": "4R3e4kGLSP9EuADmxm1Uj4eEJGWMjMjKpe8ZPhFsVr5KWQ4Y6iXkg2WW6gwRj5WR4fXsNrvRgoMp2U9ffqdYhv8F",
  "key12": "2R9gchvRFo4B4ggYhdnPMBoV6LBRn2FVPtsuLbGTC65HstvNGuNkvKR6ivJG9m55kc71ojhXCiLnXEx2og9dgzqh",
  "key13": "qQyVZwGVuR6daP1Lp6mVhfjCUvfJRvubCkipJQkqtkVaGaq7haBFXG24RjEQoNW3JQqFJf2P6Fg3GJ3hmoaofvV",
  "key14": "5QhHYQiGKmsJB8LGw3oxyXTcyf9dMevoyUF8dd79xTY8QLXrryWgbqRv8k6vvtHjhX2J8HbNgvPzzW4j3rt8BDzk",
  "key15": "5meadn6HFYdZSSVzj2KiXmuuhK4x3Z4g753xML7GAdGguaQHT8rytinMqSQxNpijG9xqL3g6GHgYwCHwuZxj77ZD",
  "key16": "VYjBPos8HzaKvxXYEi49hbsBHRdzkpz9se5GhQULHcG2kPmsQZ7jLVBjjYX5iCZMQYgZLX6f2iHjLTM1p13igcx",
  "key17": "39LLyCSmfrKwoYgNR5K7XK34jdeqseR6HasUw8BDfAMgdJ18PJeQwv76Xc3Wx7Zhnj7BdAzCDaxXqoNkjvnwgwPy",
  "key18": "217tTocBXHEExrBQ2mTrfErLinmPqtZRutwt7n6ntikZhJMrLsjhvG4wjeMTD9sC1kTpjDoBtmJqMghdvMvzoceR",
  "key19": "5kiS9SKfUw3A66zuzzULgiVZ8sLRZCXDQsBBghx7B9Qd9QSsE9b7seJYekpDVhQ7CYkuXpZeHxEWkTscGBu6bkxQ",
  "key20": "4sHNNkfPu6DgGNtFXYdoFU4DC8QPW12vSXm8tufdqJaEDNJ2ciFVvKU1TQ6DCNex69fKPoUGVYeo8HWAa17TuEG8",
  "key21": "28DrX9i7CqF5Vzfh9nzNyFg3Ve6PZf9UpthbkgRRxxDd5MCPwsMzNsWPT96otZ4TWfsGcYVTtYfJhTme9zHKUuVS",
  "key22": "2bfNiZUtzrCEdtJsrB6k2y1V3zdPJofp9DN5AEy7EUKgMQ77UkgLmPbiKxdnCLpdQMSFgduGX24oHUt8f7WvK4Zk",
  "key23": "4s9PqAzUtFN2QRy9TQsGhAa6dXZzNtNeins481JQbXchBT8TxVamJELdcKUW34DLoHGDf66HWBYT3LP6APzQSBQr",
  "key24": "3UAc4PC4UKtPvALAMzcFrhDXzyWRc1DQCmu2d9zbfKKryzm8BXYJHoFTiNYcttNKJn1NszLikAGzhsWkw7X4B7U3"
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
