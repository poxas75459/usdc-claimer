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
    "5YzPpGgeLUvky8N5BhiMAtYwjxvpvMW1jN1dmGHKwj4SwL6YJpTirjUh2zspGMhRdhUW45YkPottXuKibCsroSiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FeXJQiD1TNxmNHrSPvYJb8iRm2734yMidmCXovHbTY9UPVFgcdQyVXzNrK4iZ2aereFGb1NCNTdg7VZroRb1Uu",
  "key1": "dcS4HqXHyjo6a6mei8qU74UXgM43ZoXnGu2YfQqXUYPgH4B29FU9VZTQgY9571erdU2iRrySf2yBqdZKbJ9rfuG",
  "key2": "3dgPn6KEBttoPkgdZxL26ERiW5jXrXxFWYAsKVzrxoXx8wACnvSEo3J36nkUrtk6Vt2THeaSqKgXzvAFKKmkUWRw",
  "key3": "ETWQBRD65r2wZktWKXfg2XaVfs1KNgbGKEkJG6mUesJomEaRFg2WP4XX99dsNdS6s5Gr6q2Y6f9u1iX6BLwgJUr",
  "key4": "5u45GQxaqDvAZJSkaySBgrtHwR8XQ9JinAe5yGPtYhfTRYFw9v9QSaLLZQMw8uPMDh6xvEQFsZTGKNvptutwL3i1",
  "key5": "2EZ8jX8ERHpurWqdfHE2WVxYgi4pB8L45Uhvs7NiF6Fqw2FGLqPPzz7m4uchWXSr8ATLQ2xVMMJZg1SVdB8KNTcD",
  "key6": "5MiE945ikYmRcK9E1rWvd5bdtTL2WiWx2tyhfF4L9ayY3DoojF4Lw2f63q7QpVgMv1pqpzTLQ1aSRd1Z8n4Thenj",
  "key7": "2bcJRFsq6eEWfeeK8HFcd9Q3w3LtH91Fn8x9UxWdcbvyB9bjrusbJ7BDp6hyEYqGnarKfCSgdMM3MMvk5HDbn7LD",
  "key8": "FLtdqELU3eE1jJkJCgxqN4q7kx19SLGN9RsvRVPsfghEYWsP2Botasmf8iq1qGhnvzMy1uzY9s9ASaFzpvJvVEf",
  "key9": "nsQgHgcLPPtQ5bVYGDRPnHjEdHkc4ntnvwZb7YMpw4NDFGzf67sfXDmNDTiYP8XRukxt1wZumeHkZhndEcEPnqh",
  "key10": "28ofrzYX2hDgFjbN6AM5a5ZJdzZMejUqUu7AK9L7D1ouGZ8iXFyD6Zh7cf1hjsh5wrZzQ1QjzV4d9LXUN83DchDU",
  "key11": "27WcandVr9mQoE7qW6bVd6e2vHTD3Wdz94u85WjVRioqRhpHczptQp3pu9uFDdWVAoA3sT74s6jTtC21uvPnVGxs",
  "key12": "zDZzSiaGw6ZgFU1SztJLWLGVT92NmLowt4fjLuneh9KzWsa1G2eEhg93Y7w8VdvR9hNPXuN254sgDHEzGTF2QS8",
  "key13": "ZBXSpGXWL5L7RXsyjuVgDwk5RgDR9238QbrqEQbwaR8SVenrfjB1w4UgKAai8cuwLRCfg1vN7jKrX68PoXvwHPn",
  "key14": "5erABov9M8wh8Gho5Pbh7zFrDgprcAaaCsfA5h5MHFeQhSUBj4YaNSZS7TV5fteFaVZZbiXNDe2gzNJbBENp8bb6",
  "key15": "41VxWdSiggMYxsNncyw9yeapzoPU1BCuS7dZvrfT5GRhUvGmeeEGUCkToTJsKn6hNC7WWZ6D67VukKte4LK2b8dC",
  "key16": "5tDmnUe95CK4m9EoZm1QyfVwA9WC62FJW2NqnSHYpD8WEDapMWyQSU6oTwVe2YzBVJBcEbZWdHSjX8bfShJhNYnP",
  "key17": "3zc3msFYMPBUEby4GdRY8yMGegWesHxn6aw6bJUnPs4ZMyPpBwUHsadAcHzaBbmk6vCcyMXs9AW9BCXTL77tuuup",
  "key18": "Bk8TSNHYf1ErQe9Si5VRScuyRu9S2KHfUUgGQDqSMURu9CcKrcQNrUfTwrHQmY5WAKXet94QuGrnK6ELJ3b44Xc",
  "key19": "5p32bEwnHxddqgEeSokrE8akqzobfzdGjB1x2ef1BtJioBcgx3wTZJR1eGX9tt9WmMYq63VCNYvAQrjMPAS96ACJ",
  "key20": "bHbYSXvJcHuprJfmpqG8yvjXYzG32kPdD5zpSNJzjPf1ooKMhGV6JaK5CoqzYt3gqWAppbeQTbZTDbnws4XEbqp",
  "key21": "4VkseGD486MRs4G664sHrp68WUAY1FmfFqGhGLnV5uShpja8HaNyheVqLB31e4Ay82TYJ3ArHVZ27gP1dZipA1GE",
  "key22": "2vqB7zJV5jzdphJbKks861xNkERvJ6iAPXjQur7kEqaWVprgAVB7nyPEJUyA6qoS5RxuA21w5mijXH4Pesmts4Kd",
  "key23": "ZdNyNmJnWaXrvDi2Wjk768Z2q4bmoGDzz4BLAquMjPNML2A9DBb4AFzYXTUvGTatX2Eg3VoTWpqTfReEnC3mycd",
  "key24": "3cJnW5tq2Ny8fKfyeWuNRzNkbaGHsjJ2BbSxjyYU5wXsuX2Jdfptwiggn5maFetghN6q3Hj855m3VSiZLge6NBUj",
  "key25": "JwtuUGhqdcD3DnX7Z4u8SwwMAAgfK1ZiMTFNtEhZLfRx4xS7UkUbpAw9fMEXGFmDs8LrJPx4oNSC5JFBWM5SCgL",
  "key26": "5U35bm9UTSWsE9XZzgBKUzcrvJBzQg3bv64pAbuaE6CLkBfxKcDy1dTPipznYJWJzjT15M13SmmDJ6UbzcETPoHC",
  "key27": "2BVKLLprwWz1XMYa5oj6WoXC3Wut7d5tiXLjcjzV8fjW1WvGRQfLrRMkyXNQ8tB9H1LoSZagMsahr84bt4QU8NzG"
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
