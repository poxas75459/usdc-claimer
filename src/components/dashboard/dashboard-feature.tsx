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
    "DgskEzAB9be5eo4q4HDaHGmL8QmmCbAZ2jUUdzYTijH5i8tqCrbM9hNyauvGWCjho66PJjzXCj4HV6KZh7TRuLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RYW5MzBLLzz8wPTEDcGZsWi3EBji4DAZy5wenfjTBxFNda9WV2fcBFYRpvt5prHCLX7HAHGVLNMRUS8hBvrga8T",
  "key1": "41hgTmFeFfHB4ZsN9amepyf2uP55QrjHCecKhFQJV7VhYcqUCTras5q26N3pXguffnR9fWWZTf5WWZgTDY53pGdR",
  "key2": "2fW8am5PdZzfuLBZJeJVhNamHNesphGiPdRs9RLDVAXRNrcEJERk1cuf1rTWhizddsxguVoBzEeC76YxqUZLUEdd",
  "key3": "2yBtYhD9Y5U3kbp4knGsxYzLMw318SyZry9aXNxjWai2kdhx85ZJyWB794YuJv8gNEKzWLc6ub83WjFy6zezVBpa",
  "key4": "64AsHFokZaXQrr4U3EEaPsASVNBibESdGp7VJJWt5P5xfNNMCEUamYBH7dCJrSJ7hTsB4JgKK9Qx8WGQ4EHDTLZv",
  "key5": "27aMsJCWMtxhqvn3MXnGW9ceUivWu1vPbtCULjafGqD1ETtQgWP31LiUM23QuQLw2hCtuqTUFXC6zRSz1S3L5kHg",
  "key6": "2XFVtMixEHHdSXnN7N7bbBbMdAG3s3gChYFUQC3wFkeEHxQaXvpb56b7r2VwdSwpshVwzvoKGL3kLkADo8euRupW",
  "key7": "3n97CCAohaJpfqqVgrXcTX7Ysfntf6PSkEqy1GNWSnMCj4zMp1sB1JkuihiQjvTbL15UTSZe5yDG6G3uLCV4npfE",
  "key8": "2vWn4b51cLe1fATA6jJ7zQ89gLvccVLYennuFye5g8rEpKF46PpaHqyVCAJinwBEhUmzaD1Qdm4jDZAUznJGn4oP",
  "key9": "5f1kspQ9pqPo5tnzGGqCby3wVL4NVsN6jCd9ZMvNJekmEb4kJViz9T9C1thiw1C9F5D5QJRBbCdDuaQGKUzHZMzv",
  "key10": "5empszuJcquEp8aJ1i1m9tx1ZvkFVuwVaHZeEW64FrXS7m75RprkxQgF9Hst8fhggxqjEsuqwfxEpo79UX8QYTqb",
  "key11": "NZuCAqj6d6qddegy5FPPPpGcHAqLgBcJwjiUG4Q4dfcqG6AivGavQsQUJcerVLc1MTA2HsEfQ396rUkRLEBrutr",
  "key12": "5KKLa7pVKvcivn2WPBacm9uMudrFoWpw6RsQQU9KfewtRtbvmBi3QG2JL6Ncuy9UuRLbscX9H2V5xYRxRt1eLZPz",
  "key13": "Bo5NDCB4EW68uyz5WkQ5uqntf4ATev4XoqTjxcnzKN2xnF4QcA72y2KNUNbPadyCJ6N9Z5APYhXndfvLrmWT9z6",
  "key14": "23EQTEtz4L52TG49AzSYsYA2yg17yxuDtzqrNCp4CZALEiNty4MXwzwjaTatXCg33KC82MMje476mjLgc3QojjFD",
  "key15": "CnWH8dMbETFWtuVCQx85sJhHCiP1UHZS2ovV7z5rhQ6pVGtXkpbUbhLM4gZK6fvcCQDGsbuevZLHAXxfatMDuLa",
  "key16": "2iu6HdEhjxZQXrtHkL2brMp6yX9jwvKAqCS3C1wgEYQS4LRk7eDx4Q5fP7ftfiqhAq2tWqMv4TKoeHF2VXyBs2dV",
  "key17": "2a1cTfkiBBJzLPP3C7Aks2YJWxhK5Qrsr5amWP9DDtQxr6cxaH8oBgfjMkTSSt8J7u9ye8ErwiJz9kw9swt1FuEH",
  "key18": "2fLAFC1EQmRZA8eBMW4BceDNxr4PUFuHSxnRZJT2iaZi5gMNQwTfxUYbgXmLFohJeAFFmLmNLB4feAN47sHim8F5",
  "key19": "2QPY5vLhp277HaaV1SmMSVzaMePQcQ6tCSWTusxiNPwCchibwia2LL9qo9cYeicWZhtKc9bjLa8u3HR599BXaTPR",
  "key20": "58164ucHB92Kfz6YzVwcQut9VeRZsK9ZH5pCxozWocqvT28uwQ7AHqVUD3ZSyF22V7qZRgWQkjXTgpxs8nQwZCQq",
  "key21": "3KiDR4dHU5f398MixL23bvesgvdVJGcVe1cGKEAtvPAGtDmRPRoPvwJGo9M8Siaazx3shwHNv9RaC9wDek2JGwsT",
  "key22": "2dbE4vi5KmENYoBjqu9XyBpYE7oQEVQtm1HTECBsFvEaGdPvo2FXR7B8SHhSfdHbiwKxogSKeXGV9A41nbxgGvpr",
  "key23": "2zFcb7zonUfk3nZvGx434puF4YA6QaxUV8g35nBraNA5MbByfiVswEoE6Lp7nxaJb7GKSAKDeZEPMixTkAh1R72t",
  "key24": "3TytnKkA6MWocbmvF5LEyLWLRDCFYBUJrhScUScyL6t7rpxLWKeL34mDfWadouW5MtZqJiMPowf5GmwJDtPUsnFw",
  "key25": "2M3CctXQs6uEV623jjxhwFvAuk8PeREhSKAPZFtNcK1UB5ryGMsMWsY2N6PPahvUBv8fKUBhhmTsdxxkBdk6FzWc",
  "key26": "5xDFjbmHSESRuXYTGgFwBmAQnij6HVXpfPK4Uh6XnKjQo7AugrFtYWiNrvTiba1oPuxEG7LbJdHbfXrAgFQMGfXK",
  "key27": "4ek3MJpVdQA9TgBpWy3DfEFJNJCjGTFzGKBqBAWna2AUdbUaE9Wt1ZxAgiYyXxVAx3VV572txoy4UfjqV5TknUms",
  "key28": "44gRwj7tZxrV5kc2YLJqhXWQJSBJMzuMZVDVtwhJaPNd8i1nYeTrXup3cyTDnoqzA15uq8LRhDZs8CzYdaZ7aB8J",
  "key29": "3Vp2PUf4pM1n8d1Pht8QHuDgWaq8QGZtnFrxd9Y1ufEwCJfMsimsn85AoVxQqFNFQUNbiuFHhJexE1TBpCCvaJXS",
  "key30": "38LoCMKjEfzuymeSDbGvJ261jXhGXcg5wYB2sSLgVqp8dAgmNT2Tatpvw9N8pKNZ5WMaH85uSZNZB93JRJxEB361",
  "key31": "3jnApFmMtBu8EJH5uym5XbZbmqeMezk8nqgZ15utmLHN6jP71eiNoQkt7SdCR4hB1fGhwmF7mGPoHwXYzwQswVcj",
  "key32": "3qT6Smge74GbQwiy5MLmbnaVrqss4H3E1SU3Bj9dpLCKg8L7tXJYL835NXTQjpXAhyXCE6KoExBVYsGNLXmNp9AQ"
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
