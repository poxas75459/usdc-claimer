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
    "2ZgLC2d6ktrp4VjKhcunAfSi8k2Es8fqoKCuUnDa1bZLXgz7DiJbAwSgu3apEaYfF4J5TnDnzsthjg2HGKC6tYfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ojrxfUk2qvJvaBQouyRqYNYMivTjPiSTeaLJDJib5A42zoVTrAKGjvgW7FN9kuQdrcedtGmCkpLJSuD2xw6A2wM",
  "key1": "2rujgkTQnkva1f5t8eQeDw7N8sNcSTgZHJHEtmSQ2xUELHsR4YYQmsRryWK5ixtQVYYTCTcHNJZg7WaipJdci6bP",
  "key2": "2je6isnP4HqqpXh7TNXg9VE2zuSKbsJxyJvUq1zModHmNr7AWbYmFyw2azruPUFjRYfPZaNX3px7tYyFmYnkwjYE",
  "key3": "x6cMgpQrdwP8YnUT2BmM5GAmJMDnFXCN88uCCdGMZsZXXjCyWt8zhYkamuFwHPi6MemcmUXZLQC8tasvVSedi8r",
  "key4": "2KLmF8k9ZBRLdzxektPdQzfCCFruVHAtsyqL74iGwKa2Vd2bqyz2uV1xxL6NNd4sFaLf12ivr3du94m7KMibupdv",
  "key5": "3QPoG7chrrXmgAnyd9XjHrXohYyH2SZeGfWCmVDxjpGxfdU8M8zTzgmxeNfJLe3ymxRyT61Lxqs5YoUVCPoWdomH",
  "key6": "2QJHa7HQ23ibBqsodSG4Zrpd9vNjk5tyNCzbgiDuPjTnE8GSKrxgx3YwgCU6FDn9PJeAMWen4f93hHnXYb5s5ju2",
  "key7": "3iiAZJf4gcuUpJ7Fe9zrep7hE8xdgaDi2ayzsWcttCCqtHQwmDDYaq91nTjWqCtzYMQeH9NyLqtyJ5kEjcWfcp7e",
  "key8": "35Xev2PAVsgmHmDj8vhKyaFzVyN4aoo7hT3GyFvcgCHiM22eyoJoFCnAyYUP7cYsxoQES7jEq9JjhpkxxuLBedHa",
  "key9": "5VgBNrkgBErbKakxzZLURz9Ky22Vjz7HakDe23Tt9RRoDpu1ZMuwJ8vrQX23FeAZYpxjCd375z9v6XPtYwY5TuPy",
  "key10": "5ccFZMxf8ahpDQBV96jhhXdK4BtbRPhr9hEXot2hyr4wChUXeHaAHdKgUxDpbDfLLFXUJyL7XGzoPQWxbKHgDzGH",
  "key11": "3R8p6cZudeYHrgyY8YvZt9VuX8GHzCbt6Rde2HzHyNmG8Wj2Q7M73vmJ8qkBUEJ3gozG8xa1XamF3FtBnpD334Nf",
  "key12": "2pTqAXxJrMhBsXjZw5i6bt2begwYqij7fMhzrmVCpbmZ7ynmT6TckzZrHucv7jTBsbJk7Nwp7dQSU6p6TBtVAG8D",
  "key13": "3QHhyvixxiKaDKXKyWKo3xcEB5GVLoChoVNZipFzNNTjNzwLDnmTvRLCBHaJshdjWpFefQr39E2VXUSJe2WvsVMF",
  "key14": "5BZzv8JWrDRxacWGAiU8wDRaGtS9iE29KdUYMdWmUw8MgF6JrRLDwpFCxsTV3MzrEK7UQdtRYaiX35UEjSiZK259",
  "key15": "287382NHpwuzSxtfF1wW2FBN146eYrPsDBz9DXBsBhMtCvXqDr7rp8SnPBq6p4wyT5uzg6iJCU6XDsDunE2DCNix",
  "key16": "2m1W5Vf1nD6AKHd6SiKf8GWRX4A6w53rAjzFbEd4NQBRh4EvbKoNCZLfvLB3xFjpHP4g8NuYZNMeoG5XanGHLUhF",
  "key17": "3wiQCvP5n7srzNRrhysae6g4D3DMVsM5R67PBHAa2QGymW2EfLmUp3SoWMEYZK3n4ZjNnemNvBJGrhAkuNyKRJEm",
  "key18": "31veYRCzggQGV7hXxAhb7wfqUcANuE92xKuE1s3SuEguvdnXohrFB4V1w3TeGnJ4SHBc4DVKwdR2iZqDmkRT4NG",
  "key19": "mVFY9aXK5u9vUyYggHBbbBYKdoc8f5tnFjeDPGNchmXN85Dmmeg8qADewifwMqmbUi3UkNqe6tY8ADPr1XkPAv8",
  "key20": "5RWcFGej7AzbxfnnygsBRAgc6oTPEV9X6zaGLNf4gHPpCdZ3yCmhXdp3oJaJ6sQFipy2ZUVSfkqrR1883pWwTqnd",
  "key21": "2RC3bPR2b9FKeVQ4rSAGJKmJnZEtJheyBHcc1F54Mm8y7RjhCApgCU36naB9rE2FNJ5yvcyw8cXARBahsC32XurM",
  "key22": "4FAt5cverhi1QeCxzXBEmPVpzRCV4ZXBUAmcJUWA1zBt7kB6wMotnHFRn1yCNW28FiCcPmrsfVH4XpAxFqTkMNnR",
  "key23": "79VkAAHQcA2NcdvUX1SSzFefNGwh8N1FH777dzWo4goSyZEhi5R97MoX44e6uFyqRg6eHWHhMhdcuXvqoK6ar2V",
  "key24": "3A2bA6Dsn1fk5aaJ8UT9ndUhE1WMQ9jdZXTngUM4UqZv9s89eQD9fn6tF3iKhogEqQg6ETsn5HHHG2EzUapsoovy",
  "key25": "2h7uF316S218FHDS4MGWkNZvrDXRi3BkuwatgdbsdceAF3Z873vdRyX1orangCKKJzyr2KB2jp7C5uTc5NUkU66Y"
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
