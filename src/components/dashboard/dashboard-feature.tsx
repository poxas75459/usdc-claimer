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
    "5vGCzeu4Zv9tPnbTu1HL2RDBnaCeNEurL9AkWpy58q2zpQgRk8vnkVhbGPmoJCiFsyQxAjr4qYwgTtTrFT5xiYuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QcMTtMqkayVXr7RTCg6iqueB1r3pfyh1ouvV5RiucRbtwnrj2AxBtAu6AB3A3pMdkFGZsEgCv9mVYWW2HkT2AVy",
  "key1": "3VUVjJW8mobDPvNxZdStjJ6B86dQ5Qu3qJdGW7yC7U8bChue3hZ9oMCZ99Ks3rb2dNabQQNTaQ4UgQjw35ph86PZ",
  "key2": "3BfeHNQU88aaaaBgfypkBUHa9yXpQo26FQegBcGybbMwNFL8DfYFmbzwb4Q53wou8wdiKT9i3ptMLrUdkHsBnqcj",
  "key3": "4G1ETWqALzRma5AioQAu26258AxjBBpdufNwngGZXZcaEMCg5LRXs5QCQJQ6FoGhkxDBDtCjxXArYauZGpSi5Ct2",
  "key4": "4xZHwPZeTmyhhu7xvpUKThZtM3dmTRNAXGBYUK2a5NCzenVd8ZmhCQf6D6Jp7RW5ZSDz1yzykikDAsU4i5hLeFzq",
  "key5": "TB67CEnqyKvtb5YjnJFPbxeeisN3QWvxSckgJbt5gbAXSNZCWk8MkAgycoFghxq1hYeF4eKZKCi2n3azAKKRJfF",
  "key6": "2jL6LGsJK2gfSNAs4ebfWegokCFUrqWirF9And8NiPuAXcprmxgdqe5D4wWmNNEV3e57wxFHDCLGvvF6JnSW9ddq",
  "key7": "2P4qgwdJG79VUWaDwMHkzfLGXYc7Xu5oh9yDfDgMZnxRkxEiRQz9EF9LbSn19Hj7XGy5Zp8ooKzW4M4DGbxZBBH8",
  "key8": "DnaLDwGZ55hUEpzNGr61ewh2xnVha3QmH3suvNJSNVHpzCe9Y4paTQY9nKWQoJHKC8dS8yHhMu1KyC3LJ2C1Mc1",
  "key9": "4rKeAHYhDtDxsdpBtdzY9ugN7q7Zbpr3gzPe2X4L15CvkhcjFDL6iaEXw26LbFBEsQoWW3VYMDb2GNaijEWcg4aK",
  "key10": "4Hpr3aTo6zLAr2dXko9PYwAZqUYEJwGBBm7fJmYJb6a4dUNxQrfVuypya83XUgoH22zMYFW6jDibHNUZWwSLSWGH",
  "key11": "uv2jzNYVjjMHA5V9pE5KbvJspziJYQqv6o7c7dfCXcxcj9g7aKVLa5HcN2pss3Ft91j7bapnseRCs7FCdXHDGvK",
  "key12": "2CFdpkLQ48gz1StQaDeA8gTnr7FSUPbsqon5UYAzXitizLEJNshbvpFmJJKPuuK5mmvYAtcLN8hz5B3PP1C73JGL",
  "key13": "4uEEmZLS2JwHsGnbyuUYiRN1mJ6rNoE8Dj5RBw5uBvz85B8HW1C7CqQaz3bbMiJkH4FMbg34q9fquuxAPUHmVMk6",
  "key14": "7i9izuPYqY6qrphpEgu8tTFS6yeUZ4qtp5FK6LuWVmr3QcJmB23xYZnGwk6bDhW687A48aJpDY1FxBTeVSbVRTk",
  "key15": "2MBmozRuVUF6TiqDG2Dfg3HN8W4gMYcTMxCRrWLDu9mDtEHAjvLe8tro6kf67ai7uixkToXBbxFbi9sSBxJ6nqjw",
  "key16": "4zi3Ew4wobycrJY5v6tobwmDFZry4fuBNzFpRKSELoVPzwh5ak5A3CMzAYrGZvykvZC3yT53TwaWVNc4aHobH8ue",
  "key17": "5Ns8xRPZLLDNih8fLPbY8aFS1vpFbdmMzNpWkyDG9kBsvx9jEb8J2PFqd9wEJBRJ6XzSBWeswmiiQRzyL1YNk4Zr",
  "key18": "2yLkvATp7x7xNt74prT3SMYbbtcz8QE4KPduAhEBCQ9VSoMScN3qwwCT6g6ZFYeP8p7NWmw2Suea4XkGtAhYvJby",
  "key19": "GSARKLAyQdtNGpq5TFSHAUz6SzXrFGLwERYDDVzA89ecsDJwK5Fdq8YSieBBSnCRR63bqWmRuBYUVgDXqkCBYL1",
  "key20": "2y7hcn3g1aLP8nLYPbVnaY1F4j9bkZiaxRmNJCnsGzDzw2tu1z3c4qpsaxUPaGUmfsye65d6bv4FCaW2BPbv1f3y",
  "key21": "4KeaHHxD5MTr9ZnWK5e7kE8YmjkMPx5dJjnJpyMjwjbXus51J8Wuwv9v3FACLQv88WNW3RynnmuwBBeV9KjJcg8g",
  "key22": "3izSPS8Y8h5KigzXUpWKZPmUBioiiuJCxLnS9np6MeugFJJbp1aAhxC9rxeWwSorbMFJssvRH8Co9okntZsMxz9",
  "key23": "4BDpq9yqrSjqYa3dGrEARVRLZHJxHV9eboarKGtUmNp1y8N85sa79UEku2spi7bQDCDjcH4oozYMPpV5f2bVNkMP",
  "key24": "3mfHsJiZG2QSH6yWtgnDny6DK4uo74faHFQyM1CKRWERTGx1FSS51DjpvVzyhuRp956jzQT5MHHjg8M9Pt4wdGRB",
  "key25": "53bxVYYuXGUgfWbWsaJpEnBwq6C6twaohH6eN6cDcAkq6HTQNmPcgCfHSuXEfwsJ3xYGnZshRxpDM9NBZTufKkHS",
  "key26": "4TwnmCmg3foxMcDwovZeappsUFEwz6TsFF9vCxB5JJRAi6wRnsno4hpPtv5zheAtEhyf1we1TRcj3GrF1PWwiPyj",
  "key27": "3DXE5ViKh5sgLXfByUeaB6pZJYLTPQUv2ZoCfWQK5wcuW2iD8WJj5vzZM1oXhgaGawPsAqPYHzs8FEqL9Zpdhy1e"
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
