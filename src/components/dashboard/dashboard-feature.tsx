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
    "5UQgvvKxavmNgU42uKunsRNRUqxYqqxfj711AFoKcVuQ5dpKn2KuRgFif8mKxafQAFq6ei6Cz97WVGHnhibrCbmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7sMzUAk5ihkFSa8ogja8fEynNYHxRvR4sctffGEvgS7stVvLwHe7KGhQtgMngQnhYt9bwy4JECV2GnsC9WSqXB",
  "key1": "62nDPYLQwnwdPiBigkfeWVN2BLu7Ww6GhttwL9RBnbYxSFk99AoZ1o2NicUGJfGXA2eUJdVPZwxn6JCBQyc86Jzx",
  "key2": "d6Q9tXZy7sykinmU9c7fVPiKamseidmhTVxoci31Dit54UozfpwPZh8CVnaTS5KJPatmRqmN6d5g85o4YBD6JA8",
  "key3": "5HXbAFs7pwCqEULiBMrdQwftXpbouKjqb8Dcq9KmuKqnZLSVf9hNCYiQWq9n3PuAcngAz5wkuuNXZYNgriauJcca",
  "key4": "4fbFXaNymq5KmDVeewqcfd7gvWVmqasozpzT4H1KpNR8gMFpsphRQaDuxVW9Qnf7QW1cEdNAVNzkns8k8YDszgpY",
  "key5": "f9pT4jBz29A1rd3wiAaYobtb1qyff2Wa7yTsqnHPXwmQv1D7SNk6iEY5mPSX1zF9Gumth4CbLvdxz5r7YBXBpBA",
  "key6": "3XW4YDkrEUswop5LPvz2ZDLB77XjCFetykmvH9CcKtFmC7mdEBceqLNR6AxcAjbxGBVd5dszULtUxRuWghT7YX77",
  "key7": "xgRkEa4wZxLCUj6LTGw9YbnYrqnwmQ93embaHm69tV24NicKQge1pbRV6oLAgzK4qMfTHz4dk94RNbCUAtdymob",
  "key8": "3G1wHVr3UzSb1UVvQjcFnnv6ztzrhjRX12xQF2dtVXrsttpGKLPnVsC4n5TLXrM1pdeoyGxBG6uGmwF3EXVaqHMg",
  "key9": "39b2YNmsfe7KeKDL9YMtJXUkyNiR4s5bwYNqGVW1jKTQK2bph4YbnoC6AtqhbjL25g62FEMjPRA12gb4SpC7PeBT",
  "key10": "4JbEZ4QkJQPoigXFVAewt59cRTHgau3sBA5gvfHp7h1BXTE6sr3pnBqoNby9ci7jc3pTRYLG6kTtVbVYAQvVWYP9",
  "key11": "3n29Ms9Z6UZvnnc4REvKEew4iNXgMHTqESAbMbnESbD6pq1pvDSLRnwUgFqJ5DeuJfTLtPkX9WUMcVwyvWkAxatj",
  "key12": "QHNVT6cdhzmMiTNg3LWMMamsREHKuqr47FysMm2ZDCNQ8rzAeoP8CcutCe6gDAz24nULuYwpxjf4hQhxUXeZBeU",
  "key13": "fKVEKJMUDfvHRdBWynqGBYUtTaSngEHScw9yBQykMiXVWj5AhqaZocL1kEd1HqfYph7opJM4WP9BUY6ScXmbo8x",
  "key14": "5EycFKRNwUmA9a3Hch18nUS9TWMmNzPQu5dxniudt6qTYjNZAsgnjywfFvdsEALeF1af7PPYhtaVKAaqBD58m9ez",
  "key15": "sabuqh92ZpBahsqVmDcHSYF9gb5YGNeevnhrCSYHz21hbva8aq52fJNPZad9DbnDLVdGBjKkNSDyWPRYEZvtsXo",
  "key16": "2f9YgjW41CAZaqAJYnRM3mVDDTVaqLEdmJz2ndLqZ4vYFRvUE4ZfPCPUoME3bZS5hV3EM6ZEa6uhcymyXTjNJfop",
  "key17": "5mco5BnKTQAUbLQsZ241JxWioB8sZ9GW1vvTtVeN5cMxcgtcNgN9biTRDRcinPss8TNdSBp7yVuS8T7qYox6N286",
  "key18": "pzsLj8qug6Rm15MNXvcxc85pFV81gYFnzDQC79PC7KyorxvwhNVV5J7bpFBpF7A7Kib6G9AbFAFvk7PiPAucn37",
  "key19": "42b4Djs7HUPnDvK4qij6L2UwMX4zZQJhtMmRnRmcpAr71fdNQ2X3ZCEgPe1121XH8Jkj4KQX3oV7RXsyMXZqu6sH",
  "key20": "429R6cSwv9z8DFK5fKW97yisaEak7dutH8dBkzzD78cw16ExK9VuvNM22jvC5CgJAQk14GVZ9HeHqDF4twn8W8QR",
  "key21": "Xz3ujhJSm4mu4oSqLjy12RcjSPjS4U9fuLRG7pNTvSvryTJubcMTeH5Syr1nofZ3R3GGSganu17ckowDafwssag",
  "key22": "41AzD7trdH6opopnKKyiYWXgvZe9gEssTghEEKS4NetJ3QxrYtxMnkhr95LEhKW3eZEz5fZcdW5NctUrYabzufNM",
  "key23": "4XF4PS85RNDBWeE6P9kkYRF8R7CUFXnAJWWk1dDpHVk3eG2NPGB1ZxcJ3Y7cUyMXoVraGLQqSysiZhMogQ5BbtQi",
  "key24": "3EPu92voMmZtaJyKsh1ZSECKiG2YM6Ku4SWJNYtwRFswPjXtUttFVEkGwuMWMjFDnDc6XGC6UnQw3g58uJDqvj7e",
  "key25": "63eKqQPXbt4M7Aa7Cx4jwK3GiV2tF7kYc1Fy6RpoUt8tB7UoSe8v7BjdMYntHR3AeHSNZBNZZxrBYZccYPcu1Ckt",
  "key26": "vKmmQoeHyR1K4NzZLmAoLvfWLhtPHLJU5DjYoscTcpN7EzzV5GY2t6X41ecVoWjdeVj9GT6YmzrVsT7HmMKbGy7",
  "key27": "LSakdE1jJyQrXs2CSEf83soxK9qZ4QX9rURN2jrmAsF7FbZBn4d3sB8o2Xut8nsn7grcdejkv2FSnd6pYWj2Tbb"
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
