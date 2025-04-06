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
    "2zUauiMvkoJrqJRYpS5fzK3zpXXNzVVjNcUS6zAZmToru9tv8GJFkRN74QaLc815tRjdYQouaP3EqJWQnQMuVJs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ReedhnBTJCppbuGbVWw1izvfuEWhdZ4ha8qM653FKLqpDuScnTtEdr3Rsx3pfAA5vUmH6VzPLbmfnjjzMHnrLBm",
  "key1": "3EKM9m8BXcqHshPWWR6mnCAJMETV4F7nKVhgMLai7Qhuc7h3A8XwDZJgCSwPuiWDngmqNACH7vXrSXtFAvNxrRk3",
  "key2": "5xgR4tFTk8iwX38er7zfTp9rcJWk7q7x1GUCZMiitLQSMBgKvYPRv9iRjHgeVtbbAv1aiFePsBDiRtJKc2JMMGyp",
  "key3": "3CD6zCXgkctcrg4L2ikf6bQtigpzTnqPD2aHnFFZ4W8bGetFyDoT5dxYU1JiGoW9sX35pSiZPx7J1QQWMDRYbD42",
  "key4": "5q1gLxFA7rczJkUwQhdHdRXUb5bgcKRLhZEabz2jQH4jskXeay5iXZURDRK91YtELgaEC9m6qEfGd2uiDqpNZafJ",
  "key5": "5eD8PrTnnaNLRu7598fHhpvgCCyn1D4fYgQToZVyS1ojcU5f94QMwfYoZCYi6zmTZzAeRPn1j36MzLm4T1CNLtaR",
  "key6": "5fdnEyKXmWK8QY8xYxmhKSe2uv63yif9jctZNiiynNaBK1bpxgTnKA8nGXijspenitXHz9NTYw3id2qvx31uphFD",
  "key7": "QzHMwwHrZEojtBL6kUqNgt3n7exGvJz2mafcf4aFCGEpqKTJ9u42nnvUwd9FxWDJ7hARCXcbYqywYhZCZCYizQT",
  "key8": "3mvitRD1EYoVsdKLogT8Y964JQDuFKEbagiDN46NhPE1Am3pF2woaRd93pU8RcBj2gARhVQ98ffVuNoLZWr1PTsk",
  "key9": "5Cp22sisNPhypQ6GeFoSdWWazbAdHQsk2yWTTPUz6e2SJeA5eYzv1ke2awXJn6skrQyqWJFfq88CnVhKV4JDUTNn",
  "key10": "3Fi5gbj2RxgsYZnWpgjVaDYh1vwjTXfD3KVZTJqpYgUhyyUYFKNMNugfkviQ23MrzKY3cQEriZK5wJEoSm2Es2H8",
  "key11": "2iNLqC6npFnaquS1ayZNh2HPPTpcseHfGFJw8K4UjRDhVoqRsGeKhiLbp3eg7q1eDmvGPyuwG5X7VVhbiQhMgy1T",
  "key12": "ySJU4TZTdF7FVg1tanccXQ1Qpi3njsqVfyWKomQ7mfd1EeYvgV4jghRGNZDdDx6ibVbjyFpW3DmxCYqtUTCVTDi",
  "key13": "33UmKCGzbpM1x1oH5M1qPjgZfjznPfyCKgHcGEk1EJsoH3xogJsSADs4T9VApzGaiF3i96pWMsWfzGEWcSQRzB9t",
  "key14": "j8zy4gHWSBQNif5vZNN4ktzadGubiTetVCNwfZAjD9kw4dieFXCFQEWU1je4gHjgfxXY243uMmmSs99PNLyfTD3",
  "key15": "3Z3qk8e8ZecJXL7UzKgSHsu7JX6rGzSHjkaE1p1CpAHyCMZCo4WxbR6SBSEyLdEKfLrY8v3hYsaKKiFbdfEuJg6A",
  "key16": "2pjkBkc2y56HyvBWDVUbuJAm74hniV4rotu7cgjCAsJ1putiUpSZ6VRQDqF51JRTEJPj7MApgpita7d6kNfK7CMU",
  "key17": "TaNkgYSjAcLcKWJU6RuEvShuuKYfiSMVT2o5MPL6N7NDvVooDVPGf3hAF3CQCzBY71T2cEeDEae3WAqGEp5Z5LL",
  "key18": "fDE1L4E1YbrHej6FKLrZTa5feZYvLtQf1P17hx95GbyeZeD7phA5mKXPCfkLWnnME4FUcaztwkCkm2eGpdLNMH8",
  "key19": "21NYVpwbTDRFsttgs9yBYMgJiAxSdswdu8CRAVvJHSfLjQgXF9eTNTSQQV5qCkdTXrgJLWgStgU8LNDK48jTmgM4",
  "key20": "61BYzZ8GsG7oJHdnqZSMa1owD3HfB57RsQa1CRB8mtr3KQRUDd4Q4f226c3VWQgEfaLJttPkynWf1RPrnD2hjLLk",
  "key21": "2J9kzok8MA311y73QouoH6jomZy7aRxBzjbvkynVmqEtywJkxrWvLP6ni4DymN2VQW7rqRbbPi3a7zvcAH1ZgfmR",
  "key22": "6aeLqSJCa8mL6A5MbMMr6cssnTbqfUttD3PzUJny8Axswp7nAXMd9MYN7KkTsBTRP9X7PZEjKQLbGKsk4FvjS6y",
  "key23": "291r3tkmms4qekzjbZAhocJX4bXBxeorhjHhyr88EjFiKRPPGguhKvke917fD1pLbU4dKEBdXjEwmTtuAgLmgysA",
  "key24": "64XgBdMnuAf4w3DSw2Z5TyPjZaenwfxpyN3KotuVfDrrufeq5kWnwMUSTiWAj2hXFQf3QXDGH2aR63jun2C1C26E",
  "key25": "3DN8EUS9JBjbQu1d2eW7cz5LWLGHYBFD3oXKmkCSaVv2beZLEYMkEBQ7c7FRdsQcyyjuC3rRMgYG1mkEtZ1aCvTx",
  "key26": "spoz4iSnM8gpmhL9V6q9JLDrM7QZbdFNXCPTCQfCuy2Ze3qAMjUum4F2tQAW9VAMAw36dKSor2G4NBUjNtkcBzg",
  "key27": "3nsJ7ZDypTjzm3b8kGzYuPfUjS9rRGbpFQYZogZ7wCcVk65X4M5dr8GSDkfQNteLFck53ALWGDNm7FjrwstZTz8F"
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
