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
    "fTGETMuBkKfWUyqZ16jTXmga51DDSTzyT5dgDpcGD69NjqZzGepd7s2ece5B1V7o7x74AskW9Xy4dTUUfC4t4EU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmM1CsD6wENx9SLvZ62Edbk4E6vxPdUZfxDYEGacw29xeqZJdNFpjtaZPai5XfphTPaP51Lon1kn4dTtNpf31vD",
  "key1": "3B4BHefNe7KdWZ6hsRTkMCyk5q2ygeN5FyupGo3JGt6g2u14Qtjvq3uf5rxUHwLWv9KhEEhnvduvoRZeLF6gGLRL",
  "key2": "2AjT6VfjDHirkoPTbSbqDg4uhMQ4nhwxEYSK8BvbxDNB2fvpHMhNuUt4b5LNboBZVExVyKZTb8UYbmxwzLYWi9Fz",
  "key3": "vZGpBJvL8FQKWiCjN76xCP8RVp8jnoKz28YHZjnZoG5jwdjdhW1WGLHgUqMrfpdLZXUZG5bfduZLPpg7vfCWhfn",
  "key4": "2DDRHmEtqbSBEAk99uQAwKszr9hFzpSe18cd6edsx9jXfdmXCiBBLkz5kpAUXbwZJhzeN2gX5eh1KfF8gotyD1Zt",
  "key5": "2Ygak12MUjeMhsiRWpa1VDsCAxYSApwf9PxJZAiAtZwP99WUPEKvdKw9cHq3tUem4qMagaiUTFpDd8dF61HUywEQ",
  "key6": "4bGBEbzutZRRgqRRKxFQhtmZ6yWmdba5EEuLquYNjtXzXV4tqFUcTPp9Zo3jvFQ45qTEuB3o5jL5f8ZVbzDv8dyw",
  "key7": "5bX4VtCJw19bQV74A7Q2awWERbmTiYgm4sqaMrV4CXz7LGHASw8vR4x39g5xfoWE9HCiSXsJMXrz9fZiczuCn7y6",
  "key8": "5KfyM2rEzSUphCQyGuZxiz8dvbFwCvshvcY8Gy372pw4cBh2HhWHmqYraAFMq19QCCrJ4aZwGcgxZ9jFwB3Fphib",
  "key9": "4YTYooqFQe4eRWX3q23LC7DwWy27oCsSSwct5RoRm41kZcDraB17VLeJJ4kB7aV7chKmi1whptBdNB8TfF6CjwKt",
  "key10": "5L96FQUq6THpzJFFm4vFpndVE1HaBagXvHDhutxHdQpowTSWT8hVRT8pcRT7YBNBvtnAgEcD2cbgGi3aXMoBFP7v",
  "key11": "pamzUYjt8MfmFWk4SM6B3eUFrbzssNKpKXQD9nmjCaAdBpjNeRQZr35anqSYMGPeD2iuffvBYGWVbQ7abqWWkAS",
  "key12": "4ciEeeoncdQ663ZiVq8H94JUBHTcNUwWL7RBCxJBQVgSTLvARPveCTJejVwjcJJ8Py4L2oJJRx13Q14EshaFovyj",
  "key13": "5pGCs1Dx2DEsCkTLgqyZfcbuDav5n1Ycm2vaLuv9hHdzM6UsBHLgdaQSQrkeVt7Q7KkvycWaG5oaDNfy561NBoZt",
  "key14": "5CyuPkRZhGMWA2fMGT32rbp9HCRNEmQgjyP11F24vicD8LEtXxYLAYtSyFn6BFNnM2hPvHQpKsVRHX2B2aQyqEjn",
  "key15": "5oyeNqWA6bMJzmhGmjgCSMYdxzUz7w8mcDDr7LYWa81mwDeK79R79U6bXqaYhukQxS9WQZZbyn87QEfqSHnDrE1o",
  "key16": "NijNBdJK1BLdadFrsLvM6Qmbm3mNKgQWpSF39fiKWCUagRVExpUivZKcrvKePXtWkbq8EgYve1usaF5sgGvTG1r",
  "key17": "4LdXx2ZhXj2Jxg8jgkjVRFfM73XTbaJWbMe2M6n1C5if5qhiDjMXq7DuDRMrsLHHDNvue4s7iCHLtKVQfSyHFrrM",
  "key18": "4tzsKLAhC5dg5L7wcWkq2FkeExhm9dXwLyoDEjqdDj3uNV37MJ7qeYr6L1Vx2hhW6HvkBeeRxKa5FcNPt4haZm94",
  "key19": "2AJwD1RVy4qCNJbkdbbX7B23MrrJisYpGDUv7QJNaJRK5wDkRFQK9bzF3qyg5gP2Ta3Hooo5QKEjgMQuY5hqrWhD",
  "key20": "4uK7LqTfGAjmXwKjjTS7jhBnAKLPEV7GMpM2vhJSAuouHJ4srsPVrkTtttH8VEK2goaS14gx1ZwixR2hXFRs9uB",
  "key21": "zK6yACKivLGR32ncJR1UdbeJjyvpktvBHN9hJRUP7Ui9yFxRZiwsQz6dkL2opUXz9TDr6Um9nknC7AvZuCSx5R7",
  "key22": "5NqnNpvxvGMFgsoMHAzMH1sceKjR29mg2H8o8EgKvdFqyfQaHPZxq3xhLjYEGqUE5wqeMYP6BSeooVAKCwhdKfR8",
  "key23": "3V7kbgWEBUdJkpf29rj2wZSyPXsH4n2y2BvaDkcMMWDHJQDP9Aww7JMDisu8LUjrQzNyjzS5jw2DzP1LjFKojjGw",
  "key24": "4xN6g3kNKWfq5SFtqs9Mp8kg5EYtamzt6XpFjuiZAVhiwSJLX6WbQeUQtsbXdescRDYGiekswaxWLiqPdbSvGaSm",
  "key25": "2LAYvL18Q8tQPD1fVxHQFDoP6LzLgPZrgt4TtxHBsweWvieKcWiegzJjg51ke9sigoDSzAimNc9tG5UG8mZ4wrMZ",
  "key26": "ohduUXsBEntb26u4KA5ypXhnnBrDcMPPZUemTZt4ySxwoDwTQhPCSL4asCDJNsCg2EpcSacAvdYQu6hSmfjCfYU",
  "key27": "2DaR9btWnubM7X6nR8ev8c8wZ9gRsS4uZrpJcz7q7Lw766nTy2qQQCJQFKSdZQpap8Hyd5b4CxA2keSvATSz7c2m"
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
