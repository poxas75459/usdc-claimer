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
    "235YcV7B22txNXXBdmV2hJzrRTFCvNcT7kgfsQKNW5b2XFuvqnQV5jpTLpr5RmKi9twpXACsoo4pYzPMVbWuXRZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANGa8vrfXSgyziggBgVj9yKDJZLb4JLnBtVxvZQEw7h2N8zcreQqZgBvPtS5eYWDviedD3RdhqoeZmyhpzGep6p",
  "key1": "4k44ivF95xVcra1MqvLazEa5Akx83uN7kzENrGYr1iVZsYNMaYvqSCpX78u1mMVxBJ9pVJSGimEy2LeiGw7Wv6UW",
  "key2": "3SLJpUMG8U5PW6kJDq8c6NsEqtGfassGKaGiX5sK2dYXvTqeRmFheLvw9XpE82rcC3u4NSsDqrFuMLHLht7eAUHh",
  "key3": "2oMyyqjzgrbKdci5ssC4XeDMn8BrRfyDa7vSfLr4KByZqkbQd9NRi7k7819tXnxjPJPWEt7dqpttU4Ps9FWjTLj6",
  "key4": "5Lx4DaFX7eSAr4mw5xpSY96gZqgzS365k5ogUR9fZUz8FhSNCitmnzNcZkaPtkYtrZmpcZ6qSp6H8XnS8Y6G5gK",
  "key5": "5EtvdgeNfQbsP4i6dtBjdfa38AnDR8cnWNC7mmc2FzLqAHLJAGyf47XgGDdoVwTtLp5dVBM9XcGXLiXHEnptjZGQ",
  "key6": "2AdFrgZKoTae6cczxFYqhkSzJaHtL7Urq4fvXYYFc5aqdwTL9gdo4ZLcVsSPpkvVWmKhnyGxVQ5fzg8ASf2GU63F",
  "key7": "7fXgaa94DhPYYFvvJGeVKGvCVasro7tWMrHjgtNqTUJucBxUF58rqBRQnzKRQaniBVJoXsdwPZs51LmLTnLbuJd",
  "key8": "3Q1qDo5SjC5qwxnXtUkrYXWfKwxqCSHcDe7bKh3JUsLqH2z3oH1AdPZ2aYs9dZC1By4Dm3UNXs9hNkr3rRvfPvx3",
  "key9": "VqXaT6xmmy3mWApjeu8np1Zh5iCQcpyrNYRcAGWysBaniZrmsbyg5MN6ugeAzUDWuxQ7PfPJ1y5itvoYzFmcEdX",
  "key10": "25zYXvNY4waxrDi9v5vWdyc8Pk9Z2aGZbc2odopXX7Pkes13xZXZaLXo7t8z9QxfopfBoXGkkNwJKUuKQxHBWCbf",
  "key11": "5ThXhLG23wvSAq1ULBQa9yYBDTE4TNE911WJ5nFSJtJckhzAHfw44MymNZEd4ucpMp9APG7h9b8yctCfjyRUK478",
  "key12": "278NhyrhgLBDMSC2VWNqpr7UPDFK25h5b8oS7Wom8zE44dD1VrUd9aeWTWHtMxGu4EqyU1nRN6hPWib9YPYAiJ8P",
  "key13": "3RBFKGSvjZimeqjiCy9qGqiuwDRBX17rEjgMKZRjFSDXSeyUGnCbm2JnFqJg3FjN5jZoxDYj9keLRhu9WGNgv8pL",
  "key14": "5zX2gL5BWNWy3H4bpL8ygKZBDrFcLFjDRUKQVz9V97PfGYHc2z9QeRx51Z2L4H3QuWq5d76bE9ri51v1BYYsmeaV",
  "key15": "2jRzrXn8k4TatVrPDankwNMR9xyfXFeEzsPHmVufKzvmEdaVqgBPsxPBXbv9uV6JLnQcWGPBNPcYmvyomVr4yBYj",
  "key16": "2qrbcEEUUrXHYwg7LLLxvLoxTPUF25KcwBDqWDMtV4SoF3KMJeMTgJ3r4eC83icYzskSHcUXuVS8Z7NTGYwUBrb1",
  "key17": "5SaMzVc4XpRfkCSKLncYHAVysgjADMnxAbLUrfqYUqPAWpmsGZnkfAyaTQ4rDe2SMMAmWSMGn8jQ1D3NhRTfSHCU",
  "key18": "43jZzDi2Vd1qagBGiJVRVE1ikzo7PkWMpgoTqJwigYn11S66zC1CXVridc4Znbyfc3ai6X4hcnpFNVD2WsmACvFm",
  "key19": "29LehW5oxkhMnC5GhmgLMoBxwgv8gVCCRRViytZATyhQpswvrriNmThq2RmYCdY8p4K3nG82SFddcuE6H3XDnTiy",
  "key20": "2cevxZiDqUnZtyiSZ5dkDHYFKzFWzdynxv1SurrBWkjcYuc19XThMiQ13yNZdxDUAeHskgqcV62rCgUWyVjmWwaB",
  "key21": "51uASUrLfz72wa2twHgkfm8y3nZ6QvpspfAFy4cprAtwT4ipTLY4gn6fwPBEumNHYvkdMmfjZoKuA5Vb2sRhyA33",
  "key22": "VzWiMGyjGqfT1gWPJ3U5EfA221tVJJ9yvCJ96Q4Afu9D25A7xZ87XoEuR4z9WM4UJdQdYpxuQzv1n1VGSipcZxJ",
  "key23": "3AumG5FcDtos6putkimSSckKmRiSAk2JS3aYw25ccWuc2BxH2UzCvr1kWR9eiPzMEiZNvVZwN4WStFWiMjEQwmpV",
  "key24": "64pA2e7PuaxAdawZsUL8mkaeDigQdeXpMrhawrDxeFiDF6c4VYbZ3pCJExGpmyBbjNmiRPcKomUMMbfZivtmxteQ",
  "key25": "rr5qH1MKVdQPaAPKEWZKXZ3KTgtLPznWFVe7rx4U45tFpXHTYGbtGEJozRP8pX4vKky3MhddEbwSWem2AMQU9qg",
  "key26": "5pvErCxU8pptqBGvmeRbsBBtdMrQxSyDTLjXyZj15fPJoDmoG3udzCBWsGZaKwGBjw7kre1sY6NPWfWkymizbpqw",
  "key27": "3P9azufPh4o12BjtTXiJkPWTk8xBiPMp9bbbgLZgcBueLCSKULGRVSLSdjMHqevN49NBWARiH2eP8mdk8eHkhNZp",
  "key28": "2Aas8qUUGfVaLTymQWUCsF7WUNKBLgPdsHj5xkG4HkHWToTNyysk5twhFSSgBLPsje8bP1sdcN4iGHpEtYXZrs1z",
  "key29": "4nXF6rU4u2Qbi6w93K8wsB1kbskVQvLg6wVvEiXzViAWY6YBuK4XXmvhbB5JdKMrZXuwFw5GkC8W6zgwEiErny89",
  "key30": "2xtHVpNHiUjKiuCpxaN5w2uTPLpqqsimkJkn3fAt5BvBPQwrQhnaNSzhoxK851xy5JjU7NtDaV9M4omfaYMXJYyy",
  "key31": "46D8ffg6XDNyEffVBqgoH4nogWAQkqNViKd3mX4j3HJvorJAi136p5hrz37YPXMMVEUyq4MZLSnTjFnSTBm6nrg7",
  "key32": "4BZ7HbTJgrkRkxquDphgqeABDMVaLvGExEVJVWFFvA9EiuC5RyF62jpEUQ1rLUzydMmqVJaLKGp6Vz7Bb8dCeWsX",
  "key33": "5A4r5TAjKR72bMGbPYmcLnHYrDcdq2fqmSj9nLkS3W84GPYwDMWWzX8HSo72RoZvungVfWGwbsJA1Sw3yjsBfqFp",
  "key34": "5WREd1H7wwB7ZGziJdfFuxeTAPizgzfL47TswTfmKYoqBnXhxm34Gr64LUAbCN3JczrYZt8SSLM2nkYfc69PxpD7",
  "key35": "5KfBFGmiMMz7zU88Y7eNwCGbovuktSp5JXzKVeekTevoWn8QVstt3aiC1bSbPuXo3N3ufDBZCBUFtz3SxERaTwgf"
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
