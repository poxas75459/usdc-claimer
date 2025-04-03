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
    "4QczCRvJd3NgUefVY6AusFRiT8emupywM3VgC1FGZvuhigAcVSHsXGqS8M63ENqxKEwDFNaVSgCk8gGA1NsBJNYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwQtRthCiruZuDLH1nmjHeGXEcVe1ZcFDr5WdVAM4x3GyhwsbZDhbgbR6BJJkYrsUeLQDRsWmui3meyf86hrn3V",
  "key1": "en9eyaNwWG6ZtX77LTZA3np8ERxUFMrC2FHqEzW4HB9DmwopavVvCZ4UbG4heJmqPQ8jDx823WSCGPWtPTyn7QC",
  "key2": "36VP7Kp23vYe4XMuw9Vq6HVbbVWwNRLSzCawMA5vJ25DNWLrBnqQ3ynYEf9W9UuA4wEHikvx13Xi2uqhSSaoi7KL",
  "key3": "2694haPoBD53LuP5Fxbcya6uVCyFiwpZaC91fKFYLpuZTYurzq3rEyLof5Skcya1f7mvUmNhTkJ7pESW9JHbk7Gt",
  "key4": "3o3ZdCYaeJodaRm5J3t7UaDtYsgdXAFiKMU7gVkBhjuzRkRohNt8kTaaXUNkz2H6VQBFHLQYLmYp14xFYiWCbGKS",
  "key5": "5zQusyVhBT12goXZjAZA8vejYHmSNWvmGqm8kiHNEwNMGZzgqE9aeRVkxvcoQzK7ycRf3WGcmGuZnTEvNYFbQE5w",
  "key6": "4FYMNcZt9tdMy87xxQFpQbNHitEK6SiWib3yFqhuMw8chk6n9c8Fewj6bRdBBvvYfw4zmtnf9hpSntP5BhKYF8G3",
  "key7": "3bJyYnN3Tvo3K7FKxAqBu4xbfXjNhN6WF3VuqrhBqboDEuuSwrQVzmTt8KRuvsowKVarnSDmV9Xd8Yb65qkVwP56",
  "key8": "5sNf54YNcE81wdjvxhwutabfwtW5w9JKaC5pbnVHaGGoenRDxqSEj5fhR7ueH5tMw382fQBtJJ4fsbSHcoCWovxN",
  "key9": "5QhQSc6cNdjC4RTrdwVDqHfWhXHCjmLVYQUPPMJrLZ7AMTMfBH3xmotejBkksvrMfxY3oX12zBhPryAcU91cRZKV",
  "key10": "5tCry7BN46jgncBThS2jjrbHvfn1vWBGXHTW2ZmLVR6zQfYnMeVUB1aQJqQWnUKt4Nby57otP4zSNgrBt6nWH2tq",
  "key11": "3iPFtYJbmhGksRhaFU9GafahazwRXPF8kCcQ1j61jKutQx3nZ4bnXdV6CygSo8AAZRGRBvkZSd7xrzdLEMKTLeqo",
  "key12": "3eLwrScS3idZjUrCx7JSFPos4U6nea7ecfMZQo4qjNbYbLfcAztB2Px6ECrWDD5Vat21a4ifnQQjGzabxL1uK2kH",
  "key13": "3rhGabgaQxe9dQtBy3kuCU1jcB5eB9ra9N9TyxsydNJfuxijFZSJ6uzQ6pjRQcVQV7QEKATnUopcxSrG4g6ZNozf",
  "key14": "3xatEzFA6thA4opVwmuMXcn5mA4Nq9q2K4UsasVZgMLPxyDdwzMTYzuLTbnYwn9rcBFTXUHFidHZJmS1UEk2cWQ5",
  "key15": "jjcjNLYZFddT9DSoLY9KeJuVqh3SYMcTRnEkqZ1BCLrdCWdt17dv7FVbtgRZCiy189JLGGmWfhKuNZ22f3zDY54",
  "key16": "LkuDNQrsQUcyyX2gapErHa1N1hX6yEbv6mKg8ujBET3CFs9Dxjgi1ePAQvZ9eTkyp2fcLQd3bSkuHRvNwDAqVE3",
  "key17": "Rv63EtfPfDGkgEWvbPh5FFJJhy16YSnryd1PLDjDZfrxkupL87Wp8ormYDaFvRU1nCCyiQ67rSQurv8Z6qZZPiU",
  "key18": "5VASGtWzypwbTpPkj5iYVzeW2p7NweMqfCKxUyuNhakvJA7ve1wZw1VLzPmTL6Jt24tyAbnajrR1KTLVy1rBMY5n",
  "key19": "ft1Qkhr5FpjPTzJv2cA7NCWzWAe8qjnSQ6ZKTV1jHVr3p2JncZN74bppQB6SeWkDtLiNsJqnqQUFraVZX7Y55LH",
  "key20": "4h547XKDdRbCyaN2itEFczasEsUgda8cUwLz52AzVCkHQZhGfyfEgK9f7ySErKVwBMQAaZHxcwMpDyygjbVwdG9y",
  "key21": "4xVmzCmHGLhx5WPKZwnFVxAZhi1x6n42LCtUsWRsWdeYCxYB2fREnRkrgqvonpC6wYwoSxmhreU5dJRV8NZDn9b1",
  "key22": "2qYt99TJ9pNsh5ujWPoCnUGcLjzvTJqLoQcZFCqxZoycVac62EbitEnU3GwzHBMYBkMiPgdwHCorqpb78bgCo9rR",
  "key23": "2tr1qHh2V9waWuE1aUfadabU3YB6gCUKQ5pTCXFwxXdixdVRdqJrxNDtNRhL4DgD4UQFpGRbu2Tz7r7jWMubguWX",
  "key24": "SPM6Ybmz8iTCd1qoPTXmaxwQ52t1YZTpXKGEvYYascxzgeFi3euwrmRAAYLf7NtLLwAagjHYAzvRzzGCqkN3fAf",
  "key25": "3nnhHwtFjNqvuh4MLL43nVTJy6F4iFoBZcyhinthqBmcUb8CHoBqy69mHegFdiEVyRzcv7JJrcMKnmHoQtqeffNg",
  "key26": "FDE63sBRYnsz6RxWJP9GuH6F5zWsutiFQZ2KxhnRejGzbaSUrWLvpciQ66PRUgRQPFvoc2yvkQ9FkiBWM7gZCwv"
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
