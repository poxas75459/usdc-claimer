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
    "gkJrgUuPYt9MPiTyJtyXQj3Pb2TtfchQi5uLTgj3D3BnNMgxWozK7j6KMks9k8ZruDNCjnvksidGCPjCzPejGDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLs8c3tcJVLyo3VJbPaVhmhkbAdDrKsfmKmxVJMhgy7rSnnu3Si86tKsNTdSdKTyLP4bT51dGAZpzTMXEhH5HxC",
  "key1": "242sAFX9FiUuGtWWvrEuuW5KceKuNMJVcukbwL9wSyF1dhnEv3d58aGeXpVMRbYNzaXu9TtPoFgBxyY2Naz3bt6e",
  "key2": "3fjpZ9CTFNuPc6BzTBRip8yXfAbuyJjsSAUGACxhhLurdnPY1Nu4ts3JZBgaK7npLUMQHnwg7rtMGuMNbsyscGrS",
  "key3": "pq96JNL2hEuZ7xLV8D1W3EJuaxjwCVzXzNxPRdHtUvTECa3CDsUf3JxnCdi1B7h1auGS26dXUtD12nN6S2GEswf",
  "key4": "3XVVq4fX2ZUe9zGRDZDdiJhA9Mu3eFV3MM1MzbZWLyJa6dqrARNJbAGRkeAuxG7hPtktjdR19a8fW2jgUanZ6rUZ",
  "key5": "2WgLmj7xNUjhLYdJegRoGcopYFq8aJGvhfNC4RqYkJrRCTQrYwSEX2BfBrSmJdi2mp1p7HNXXP3Guf6krFCZBMuj",
  "key6": "4JFgJzywKj3eVqZaypYHeh89okhHD1HGvMXeZjwxTe1H7rkY4h6Hx2KtQwr8zbU3HxALaijusLH4kKQKzGEb7Tig",
  "key7": "2k6sQp3GRMWpZoH39fZVb47MU3hfnd2HrnUbXJQfrihDruaqonhEUAbB7xQ21Ssr3RqwCUdV1dAijrAUUAmm13hM",
  "key8": "2D1yUnycnbsdzFG1jxyeyER9wBrMsRdSAtVN5a1X1wSR5mZgdwJrWnExuvvSjy4LjdSVUmo21vabPZk47xSg79yN",
  "key9": "3K1QzwRwjhtrU6UwLnCxPvzCrDm7PqUJU6MRJJVjbQtx8WdmdRfKT7LbyhZXRfWhpYVXNbn7fcxL1dv8eAnp74z2",
  "key10": "JBq71q6WDJ3CKUNv9jsSiaiS9reBbCquhHBiEMqYuYp6w7sZFuWNrANhuQsGYamChSK8UxfnkW2Jw1NwNLRVHuZ",
  "key11": "fhyHMG7p5RFUer5TJgMVQ8Sn5pzRtCQgUyUmUE4mq9rhfEG74ZfYm1tQp9jnwq3nUAkWW8wBRuxn7cmH3Vrxnms",
  "key12": "3rHihLjj9gVZSayHZR7XypTx4GZ3nFHM48iMtvBnJVq7CeGwS9RBHP4ihJRUfaGmpvUeWufdFaZYTZiSmoWsucG4",
  "key13": "5yfJgonJediDRYnJD4ECSz7TKDcNDf3XBgCDoAryRXc368SAi3mcYWxAPkhj3CeLscpVWEvPTASt2UeojvYrVAvW",
  "key14": "fKkfweesXU2XWxgKHKgPTBRnRyfL5nxyPU5Ly8S4dZT35KyRUL817FZNVdsUemr24m1QdZV5dBrNgCKHxjuGiJU",
  "key15": "4Y2qR94832cFeUEBRhutZf26YXdqz7Mzv8JDi5rzS9GE1hGxXRuVDAaojV52KkGvRKz9qVoJVHpQZqETKRXzh5WB",
  "key16": "DPzxy4eMEr47uuo9AQKea8gcxPBdo57t4VWEb5n5BVbkDBaNQLAey9eWgKvf46uboiLz91x6BzHbJKmPqmqEhJE",
  "key17": "5H3qm3SbCMapf9zzCRXft4i2iykDUbwkstRzZ6CCHipzfEgYPJSH2caB94SFa6pUDwtsY7hozTStj4ByFXHJTjtT",
  "key18": "oP6q2ydfWhA9d7qGfVub6iXFUnhJG5YSxASd3UbDrwD5cHfkcgq6vf54TQLsngf93NYJFeVAKw69CMQKBY4ka2u",
  "key19": "4eAUK6Puuh9RjDad4W9sY3MAJvxsBsvDdYyxSaMicqPFsZaeTPGsboEevEjzfdWhdAD8VNKjzaiE5FxjAU2vkJMq",
  "key20": "4PLFiGGJwaXvB313fEYsV1ogUM6n8mMQma2XZBS8Tb3AoEwrEP52EyHuzBeegcbL2TtGju6zVVAvLX8sxGHGK7Jm",
  "key21": "GV6wXYK1CxMGtPDLrxNLQdrA17psaqNopHGQC95evAzkqTxAcbMsJ6GkEtHqBvMNZ4hxYFYPsUAJ1JB2LfGrUFG",
  "key22": "66i2AReuEkwH5TUqakc3tnurPwKujV5ABvqJ4adtivVRcYw4uyht1xywnwRm3zEY6Xfrq5NU5J7zzwq5NPctmQST",
  "key23": "4dqDF5KWSdSPZ9PadPxiTgzT3gxJXvta1fh2DMdjEf1AQgaPhCCG1CXh3psuyLrgkzU6UpNESLnoEG1E8moF5Pme",
  "key24": "4fgDw3fnyCSzU52Um3qjQPCoM4CBFayTdQNmH4pwTWPifC6HRbMxFqmDa28BN5MSmHPMYVwJtvmjoGVbm5mZYeVs",
  "key25": "5Jdv8YhyZfczNNfkmdD9Qr9wgBVXttg3kHzuUPXDCuSXgZWDoTMhsREr2uWvdB6eH17QsuoKkpEAFmB7XxL1FJBT",
  "key26": "4wJ71yhEEwv5bgGBWgkhuP3RgH9ohN8A6WetKSDuTqTS6VJs8eBpdYrFPn7wZJx5trMV6VGFdCNpRNe5orhLW6cX",
  "key27": "3YKcUnZ5Dcw16n3u5asy9YxtCbNHrgUmeGrAeYk1C5LPFGYE7hsQ9Fx4jSfxQcQ1kNpVfykAvunUevizgdwrq5C8",
  "key28": "3k6f4KExa7dbwhPXoRMri7a7XHbcmXekToZcW5SuXdr68AscgbSbgbtTsKshC1k9HF52so1VyNdakT92epeVeFe4",
  "key29": "PQatKQVkXYhcauFGjscH5pDVtNUpVDKfz6rYVB56JLaNMfkzNQ3KgJkRpgrCCKd5p1ioyYe1bwC2SLwfbF1u229",
  "key30": "cgGpkfN9UutYJQZUaFhK4cenSTuFpfVdjf881r85zgQ7poja26uBHh7vhsV7xouACWd2bvcL7r2SuqD4qhW2D9b",
  "key31": "t5K84kzFZN8rjoxR1Bkf1gHz8tmsYzkZnkEeoDyVcteTWnTN3HVtai3ozTWpaLHg5B7tBDETURm9dz6HkVXuPk1",
  "key32": "51BkaKsMPUzGa2wDVqEqFbs6twXp3e3XPnFkUwV5fw3qL6TwM7rSxrXptyt8hUtpPFrR1Tarhh8GMDHR9iA4qJaL"
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
