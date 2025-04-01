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
    "2yT8ZHbqcs36M6e31i3dhGTDVsH28A1oXMdtdU3ShN2QkSc23jCzq6A89ZphJNPK6zGYcWauZmCqUwVHyMYg1TyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21SX8WkRCJaowWBwNosHPq1d6sczWe87v9ScQXajWpWqrKXA8qYkUXPRqtXdeDA5Tcd53KNJ74PNE9NA2wqv6AQ4",
  "key1": "4QFLZ7kimMPZp6JE8mXz8HEPV4do7mzLnVXt9oQXfqpdeWMfE6kopwkivAEAgYbXVZW1o3269GVuSzctcU5QVyzT",
  "key2": "YFNDtJiSo4Usin1yUnyeXDAvWsStwyPXKphahRLWVKjyGEmC2um7L8AWXYBc7MTiRFrY3de2UiioHs3TMcZDPjm",
  "key3": "3j8eCiejMbfkkSjBTotQ2tpuPRvF9DNfsXRrahLQ9SaFNxGrdv9mnL8syhfSdS1uXSSz4jdub1QEk7RbsEubf8nK",
  "key4": "2FNZNboBYAFJ7YtToMwtAUsuJN7FGPG3zUs5nx8DKNMPEatKFgqEDtiouFSoz2hkoaLqwycEMWqYRdzSGuxZ59Xm",
  "key5": "4YL3EtLrFNUpwV8ush5hufQXRWXco9Jx2EZJdkmWYZKNUaFicRYwy9RtLKgJAaFVhJoFs3DEMX7zx4yiAKb1jLe9",
  "key6": "MkQg9M165Bar2rSS3fULy5kr4otus5dqU7jJVrNjy3mqpBQKnB6HrUBrp5d3ekXU4oy93z54dweLnRKPTsLZAnu",
  "key7": "2M9Y4eYerPUf9vJx7goYZyy8FNHzfhqMBwJGXh6WqxN2GKbEntM7Nb5HHQRKyHzsqbvnsE2TeHTVzthp3kv73TLY",
  "key8": "2X25VCzcb4FxrRDo8iJkHBuQ53VSe4p4dYFkeFFiTHqGvvwZwRJmxQGJzBA3ZuYVjYjXxD3nVi31cNz6S4RgmuQ6",
  "key9": "3tzpoX5yd3E6qPLTFUx2QHiP5PoqYeza2VUZhJMjwG4jTrj9LxyXPDeoiiKnY8x1EZoWptQB5ipjMjNQmfCfQ36E",
  "key10": "5ksYniKcbLvXT3t68weBJhne71ETaw1ZWp9MVTts1r6UWJF8kcKeqspmXbiYQv1C5PRyerMYx14pgh5GrjKPrZzc",
  "key11": "25F1op1B2pfVkXbupi41QQZ6dqmBiUbiWRWNCruWN7sUQBfiKiDdvWtEQhFwPQuRdyw7s46sh6NPpjQvw8n9GZpD",
  "key12": "2X1PYHzZvH611y3jqrorDq3CzdPnLtxQP9bckonsAzdD5kdcJtzDDpxza3mbB4cgwjMzHYF9cMPyFuhKAoti2eBF",
  "key13": "4JNfHKbePwvvy1n3ekXNYgcDVo5KBJW6aTpdSRF7U3C4hMzFCb6Q64fB5hZANKWT14gzSDpjuqLwP3chRZGdDGq3",
  "key14": "2JXFW41az7znDSk7UspFhazFEyB7T1MiMgohRrHofHdA6oM6KjPXddLSzYmoJAdGiWpLeprGVmVMZTHLHsXgXEZH",
  "key15": "42gbLVcU8tyXRgzpNpu2DkFDX18V6hKKdiUMbVrqozAZpaSXoCNg6gHyNX7dHEFxpLXeCZckjcyruzGfhpsR4BbJ",
  "key16": "2y3kBY8a15msRScoy7j4FvJRkcoZkSFXstxUFikh1kQsCBVFZp68kKYwyBvmFVzYhpYwpaCR5VBkhaerSuT51WED",
  "key17": "2JkL9DnKh9mdr5xKSoSGZT5xdpYx82NvqrCbkuvGJAtWHaVDSpxAJCHgWpjurKDY6MBcofx3pAij9jeG7fA5hwz8",
  "key18": "2Zaj1Rrxzie9T9CJGiVFLgsXcGikjXc2Smaq6uD8Lb6newmtiUvfagnSxqAJQEUGQwQPLMNqWuzUuZWYdtKNWoyL",
  "key19": "3M8xi35KXFHmqc7CvNZsC5pfLRSE2sXQrfDAyNHRyQJvw78w9wqkBSK7HqNXMCtmAhtfTX4AL9e35rxEB3sDq7ej",
  "key20": "42gzCo2PEGJ57uQqrP1qpLywhmfYRse3FdibUTewv1SLRjQV2oHbP5f6i9uYocbUCoedrXEMZKMhYtTjiZkywMxd",
  "key21": "5ZAhoeFVf3u9aajZuHyxxQJ569UFx45rFQ5YCZ58uoCWtCPC5pWYbf8atwQDY5YXT1bG8mrcixy1i5PaU8WzHn93",
  "key22": "28kqScC584uaa8fP7MwbTsPjyaNCqPuoNbPupuRd7Vebxgb5LZTQxvz6WDAQNo9cDpqM9qhM9EzcZk5rA6qX5foi",
  "key23": "2MCuoe7C6mRxho2uBU7TfWQfD5R2TiduJJUZewX33Lvos7qup2hsZ5SLhBzLHToDbfEeUbWHC9v3zWP7wyKw5SU7",
  "key24": "9c36JWnPCFZWbvVV5KZSoWYg1vmjniP8dBoqKAugSWrHY9WaqADxLkqAUi9y5KumCNSsfEE7djF4LqKGRovL2V2",
  "key25": "5769XrNaK8J4RfSq5Y4sxjZYJ1X3qrKNdZYBoTkunQpQ4Bjvj6tvXxe7PCH5GGiSb8qDpUxE6DW9tmHZfwevwh57",
  "key26": "4UF9ehUkfoSytSM9fGv4wuFR8hSTuthN6eTTRaiJ7ZHbWa6GPfXg3WfYyxr43s9Fj7C2YvTDbLMf25jmKXqBjuaV",
  "key27": "3Rs8KdYAmq18VADsv5Z5eXHQVEW4FXAFNnhGnV5KwfCk3zXfWa2Dx3dHSvcqndK1Q2ziy92ypUPAYkyxP85GZue6",
  "key28": "4qAVweWdN3e5s1XxLo9yXeGinJ8uHTNBduoTAnNhihrryZKxUAys5RSK5cKxpw3YUQ5W8QFyzoWg6GogydN7frLA",
  "key29": "4eAwedLkjvnJeiU1xMKKZs6RB5FuySTW6ASZ7ZxHBRv5JWLYWp5FWrcSRArjLGZgxyehGDLSUTFrbCtPLukbF8w6",
  "key30": "3ZT7bviNFvq2nNM3x9vjeCQpRD7u4TzrkuFrQ46j4KA58yL3Kq7jrzMUt35tr1eELBUkK2FqDB7fZXcuXVGTWBFE",
  "key31": "3KkXmHPZ1Y3pxAFGqp3RLmS89FSnCh6mA7kbo6QBvbF14NKdud3ni4tiiiFWc3qb1CgAnY3L3t2jQtdrUUgFXqDH",
  "key32": "31aLhZgyCY9FznsbsQr7qwVuikFpqamorHKgGyTjj2JHTxhtfo7wRmYCoNUP5jgGzBTDPu4YqnjQ71rFGmgzaKo4",
  "key33": "bVYchr9vDY2vqKUg3UUKUcxsG1WGRfxiNdQMtaHJHBEiMXfCqtvDdfWtyNda3GBDJYNuUN7KGDJ4ditjFAVXQ4j"
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
