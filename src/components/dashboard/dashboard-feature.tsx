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
    "5wSRBxqVTGfSi467HyoYtA6bh5GeV4wYn5XGHeFXaPb6CpyQMJGmHYAM9UjqMCDfyktHumh6yRwHxagbUpMErCfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c52CWmY68Pamhr4uXuvqTXYJZpDzRwywuw9vrwKnj5gcoJx6YXG8ChnoYB2b8bdsmx7ZcnvwA6qrLhkvG62B6h6",
  "key1": "4nqatbq94i8doz11pxCw8Qpxs9ptRceLF7BtK8yZToBYFU8QYSCBdJYMAw9vMV4HzjkMkUX66Wb6uhcdtNZVJzfh",
  "key2": "3kSevBh2ayKGcWrMSkCdxsYyNgiizQe8wCpycrQ3TJa4QkiWvi8w6kaUduvx6M4EyYjrbS45m3rxssi77Uda9GQi",
  "key3": "4zMFduU2MziytHwRmSagiEkjze2Sro2SjcyY4QLRdPDayBY3XskTsnturNShmKR14bpvwrDonG18qiijjdx4vdXN",
  "key4": "3f8AVJk4Vi1FwTza87ALCGVCqApfPZu3QAm9e8D3Yn73GDWFHugUR3wwtu6jF5ptfKCz4GKEAwrFvsggKPZos1kv",
  "key5": "2N9tbqC4v57KbcopmQQJV39CyoL1CxA9ZBE7DACojRgfwdNBtAMkJbvRE3rVhga76WWT6ug1CRGsUusmRGK7td8e",
  "key6": "3Gxfhv57S7GD4ZdFDkYSChuDtJJU94ZBDP1v8qkFcRFV3Hb5HpUJDJE2cu2y2cE7Jn7akTvaBJCLtHnUKiTsuzEj",
  "key7": "4nncPDQqcHhJ1qecFReaEkPyJynTHzHhH7tuVprHhPRdPRk9U8Q9snUewxzf3sA9V2Zsaigy8gifaSxe8V1i7amK",
  "key8": "61ri6iadxCsVgdGLbfyDCd5chAEeLdbCxrhn6LaZbCumqJyXZZgs2qS14RHdUVobAU6QjdWWJKP2DUde8ErWX7yN",
  "key9": "2iReWwCxJa2aVUnCqcStrP4a1HiaUKNsCL9VBnc6GNVBetBoagzJNFa2z9tSKyySv1DAFyPQEgyTs6wbcp7u87fQ",
  "key10": "8RXHR8ddBVgeJow2Lm7NMAww1o9zq6DuwN3ypAfDnHK1k8pgfon6ytMqM5fKLmpCECYYwCQzYwnaxjYN8X9wo62",
  "key11": "MKk9BRcYSK5diF62nDe8FehgEJR7UcHHzBgeQmhTr2EdhxpT2tnw2emE7j7t8kHRU98oEF927yxM3ZwB3QgEtcC",
  "key12": "51QJjBxeQrynpKJMG6jmUbXRsjdj8y6p4eVt4hHEFxTaDAxmuBTXR1T6Hs7XeQiwuvmYh1RbNFNkHxc3FRp8KBH7",
  "key13": "2qFVZzW5Vd6e8jBEPqdCEbyeU6hRJM4PHAsKD53QuUCqzibtEdD9Lt5AhaYGtmXJPSDKM5SB3EoCcLnYQhAxs4GE",
  "key14": "2XagoakvoBbSunA78DM4UpLZ8U4gPd2Ux5c8Tn4vKEJXPVn7HhrCcWoASGPsHQogtPwHhfMrEdBX3VW3uVBXykwC",
  "key15": "4DkzTY54WV1xr48mbDTyR4Tumhp1BtaSx9Wm9wCuZwuJcVC6M1ZkRZj6KDZvXTwKfGn7WC9URZYikDL95KvffGRC",
  "key16": "2CRxQkCbaK5jDK1Xmpqk9qf9xiKob1iQFZvDxW8Ao5ytQchtTp5P5cCHDBWyuF2ka4dkuYQMasoFuUhiGD662fx4",
  "key17": "5axYoS6wDQWAoNYWq4ohZXCC9LDjt9c7FDsEKUWXxwsJzJvQwjNBzk31LXmj1ZYHkNi92fe2PUrfiVMppNh7UjHx",
  "key18": "3TvBW9gamBvrd51LwZV729xdxcfTo7o2w9NNMEafXu8MCWjp9nKxSH2Mudt6DqEnbYxuUM27NnDCs7hVvdUjiSt8",
  "key19": "ucdTsYHr33T5UxtphXvwywuR7B44eSQFq93eWrTyeRrA8Zt8NoPytwRfGLb9rntSPP4BvfuQJqQAe9bBpMCERQk",
  "key20": "2mBp8MKMS9kAf8xxFGrRXpgaWm8jHsDX5nB14qnos4ndiQ4EETwxv4CqZaz9ZRkLr4Cm5xWxpHy7CZkgewmXjC3S",
  "key21": "3WpriXpYfVrVcBf5rxYJ3g4HZB8smh2CAir6VUxCajZkCwAJ1HsTehKnRbXYUkREdTLMipV9QL6nUoni8c8Zar4C",
  "key22": "3q7C48cKePkN9jtJRVjKctXvMb8zQc2VzCKcGpcDYfjqLRLkQW32dJwKnQBrMh9T1wHpUL5zXihJdepcBpPxDyt1",
  "key23": "3RTMKQyXzuQ9dL7T9PZ9j4sxyTxR5WAXK8d3nrmZsXrQ8ko4uh53iN7fEYTTK1wn6ohhGcD8iZEkid6LmxW8sGwR",
  "key24": "4Yi5h2Y7ySkA1iZLSfamsxX4ka3ksGabVyFWLQBCkMm62enryMZPAboWYEDV9Pk6vNVWde5NzxyEAUURUSMC87w9",
  "key25": "5SmbEuhqW6omirsZvgQU8ALTvBXPEaCSW8NEgZZ4VroJFxyVEPxBieVBfdFJ5sWf5SyLBzCGf9evK8yGQhaiQd5V"
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
