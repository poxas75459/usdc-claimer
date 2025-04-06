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
    "3pyuqj1oV2tQ6n2grjBd1TWhtcYPEme7HR2RjBRoJefCYxHhf1X1NvGjsFqLTfWEtFPBnt5f3wNEjcHRVFjet7vS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3MC2oyZhVm6BCLmcqFZiYuKLmWay2FLnprjK8yCFmRiEYQWGcSHvKm9mgXWUgBDeySRo5gobXFyLM9Mpj12eDW",
  "key1": "RkNjWWqw4qMmuKnqN4EckmDBZfpKVX7jxLhRhyMYaBnJctizQPMD37JKYzJgE1pRUYFh3H3Zrjaaoc8ZzoyDRTJ",
  "key2": "3dK4g9RSjxkimUWQdEZjv4J6yCcKy7ky6UbhyWVGgaV8Pgpvw4hteHXkdpQZQemb1ECxKL4puAStLLorSFqGcYe3",
  "key3": "2jiSBdjtZq2yVRXnW56F4r5J8PeH9ckyFuxpd6ZWMuejmJRKey7beLdCs2hx8Rnu9ACtnGNwuhcvAcaUpmf1UGyA",
  "key4": "47hoVQ3RAshEKb3228CzhdaFXtd9iePXqho3Uvh9NXNxM4jBpdy2sYTBN39mGZM8ojbEDN3bPjuDK4v9NMPjXAc3",
  "key5": "4SYFPFTUCAjcW4DjE2XKh4jc8F48PBfe75sjTKyQBrwvkxy9zZuXQHFdQFVy39pSQH9iz5JJsfmyZXPp5SS9URnC",
  "key6": "5WXBsfgVBp179eWTtB8tRAPQwyEny43cQVHgfd4hWGMhdGGDvX1LwJfUJsgy4cbWXNXwVoHX7LZNrxnXKkyoJ5We",
  "key7": "41E9SnRfr9pdMEvp9T5UYat7yMmdhGFKYnFUWNvfuRu2MdqS6RhaYS1HvJMNrbUpdTzFhmFbJAxwv6cjRSTeVi9V",
  "key8": "5m698szRcAEM4aHAtFym7LtPKTwJ647xYB4Cx18zMZ7HiVQFpi6gRcKiyyCKxPSCni15j9pyGRNuMKPFr99cBgsr",
  "key9": "5fRa9mzJLHZNRYwuQKqFuZR7bxnHH6nfF8Hx9Pb6bDGY9kB12QpfXWtfbGfxuMEQBdeUzuEgw7UPkk6mk3FbqgnC",
  "key10": "kTNeW3PKcRiDUHvksWmd1paUoCzYdnW7ymnHggyB1bVuVQfJLC41jcvyzgJvwcK9vrrtbEVZoWrJfK6RyTXiUbt",
  "key11": "4GvNs8hPq3BsYtGELbq3Kipezw6CxWcPnFM6JrCtBoTGd11szVyHBMvj4WmMmAsr4rY6ThJTebkSBmjDnkt52acg",
  "key12": "5Q8tjn7TyJdd3fYnbuHe7LhDow1ssCvSzN3G9NqiiJzVmXscdiTJ3WCHmw1cGW41XR357hZnZqVhgHA7bx8wVxaw",
  "key13": "64Zw1oXXWZMSpZHnUNkpfBtuP3U1Ax4V2NjQDNnXCecbnBLvS1UBSPZwBGn1N4Fn2oQSWwj3JUZZWZRdDiqKM36e",
  "key14": "2FBB3y7RjXaHQdbsh2sp692a6yvdPnc9h72Jjmg8HZZFVh1GUMa63hUjBFAF5moPDnBzJkNaDaRCmEMEewJ9DmpK",
  "key15": "3hZhhF1bn57mEhyYKYSDQivj6Rx4QTYmJvxQngEmTLKtzcNaqDoR2iXgev54KyJSbWxj8Rji2QM9tjCEK5Nu1hWU",
  "key16": "4nKAcbjinfV6uC2StshWqfzWp99ip5LknyunxSW7ititxKUXDhooPKR5SaAFotdk15UpRLytAozai6P76gkMEZEh",
  "key17": "opNCn9oevxMfNHj1cgT6TC3sCd2XhznLxrtrkuU9jJcvSLtvebh3qmJaBDXzeikrFwBbkpo8QsU6RPqQHyE93fe",
  "key18": "4myySU3LRkrBcsVHWpBBrvSBxdcp19znavmx7N7eosTQgecj8nDerkRx7Zi2aXJJHAURJa5f2rEfpmqD6es735MU",
  "key19": "2V2BpH4AHHzSkmsVdzvjd38NzqaJ7zYkbkZ3AWYTGmqV3pe6LkTQmUeFi67WV1L2QiNoQLt6LNruGkzfXqLZqEGW",
  "key20": "5xqedENS61atq5F7R26CVKNozsVanDebuFNUye2D35xqbGSeRzcjFKJRbTQGVFYZkKj4HT8W1iVzLTGwTVDEfKEK",
  "key21": "5jFHivx6gD2RDiF1x7yBAUpyb5XpJd4kLyC6LRH5gx4ftiXZfeBPNqfTNTUDLuCSHi81rC1WBVfHEr5baa9oeX7e",
  "key22": "2Zd2hnRvf6xBxG5Fqbe2KLicutprxpsncEtWieB1jXEKZfdboCPeSh3sEZovrFsvTFbJKaauq6PKudnrwHhTMe3",
  "key23": "2EdCu2t4fjakmhaM4pcbRjiZbUy8H4XCDR4d9hHkyvR13mG7cjeJZiuuzVjoCJqiNLCXs9g3LLai3RZ27BkPmTTm",
  "key24": "4yhcbmGrTM2tZ4qFEGGEK8eTGU5bspbs8Ck3S5BNYtrk214J7k2fhiEvA7jdQ6Bi3ndVRCJJbavshFQ6mq2GcpoG",
  "key25": "4yZcYUXqj1NRB8GyWUkUgzRKo93PYJvt7SQGGjS5vzukvQEXWL45HkfKnycmKPr9daMqpsfwP1cp9Eo4zJkyVjJj",
  "key26": "4ptiERhfoVL4Ece9v6G8RFSSRRra4K7RD6N1bAwLB5kQ7y7t2zrN8xVwdrr72MMTe3X6rwCBBFkBmbJ1cMhoMc8k",
  "key27": "mgnzEwx4NkNunEjjKnomyT5YUjxf9cNs9E7sfjgBNMuQ9KeWbhUcwLGcQSwKfLycBtKrDMVBCUY1DPLzRozuoEi",
  "key28": "MkygHceL8j6LCscG4UP7CmNVGYDRy4GNB22czk5YpU427WdhzPqJY27mgwzKMFnZngJqbDHiJZ5mjeKjj61pmtd",
  "key29": "3B3QPxWNGhcK5QCASjMzWxNUzA5JzKYxemMQ8TXUwGhJjmTuE2fgnU3aeNmvDjJ8yBz2gbqsCynuNUxVzbpuLPyc"
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
