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
    "3eKAEM6PaE1ponmjENYgrHopGd498cQnzYBpCHpNXLaMru6YdsNAfe13TS3gKtoy4ug2HEMXF9yzEr5tdBJLr5sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vvVjNvaD9QoP3UjBAYWLRKf2uz83nwbDnchhi5894VPnLtTHRgpgB9PQwRgAevnoYq9QdX6RzNZNCmDv8Ad1eUj",
  "key1": "4SRhY2iXaWLx4463XoM32PjBMUBvzUeaCQoRxaSkAXTHhmVNDxzg1M1hfcKPcXDAtZQsLK9jP72DecMtZvc2rFXa",
  "key2": "5hBCKEb9Gspz8kZAkARuozyMQ3HEMY5qp8PkBNGDrujXSH3nbrpW4C4h8Wtw3TmeTpDDZfJ3qZX3ZL4poekwzg8q",
  "key3": "zbj3xmrBTXTvDJe5rwwqXjrdCB9mpqs2FpJdmdEre9ozHTrnbWjAaX1UJShhvh4ceSQM6YMyjR2FZ6cU6QYWZDi",
  "key4": "2Y6TtNH4QWpX4wXTa5PmkJxH8ZHeEv9F5Y9bcW6UrdoMJCZYoWbJvyvVyGTuCAWvKGuaRE8iaBs9wnuuAyqWaxtJ",
  "key5": "2vnuKajCNktjjmkPJnAcZJEFh5C5k25uF83f3HmcsHEonTR1krk8NxHGAa2NWvqiWvXNa8Q1JFeNCgEx6HP6aZ2y",
  "key6": "f9PT6cjSMLGYKvFR3qJkg7hxQrdMaWjzBK7t3NWA9XSgJyWefqig3j3gqcuWfQfcJjTwgGTetxgXu1pCdjcaexF",
  "key7": "4bCaZ5ahwaHzTQTRi1XaGtK9rqvujzi1pe9joZfytstetTVmNGHZbJe48QHY6H3FSFA6aeadBB2EhZxBS3RsAmBz",
  "key8": "2nFhvED7DgiP91wUXkF8uzGf1TRJBByuNELZXm9nAav1aFHP49X5LEyoFBZ7GPvtqRMKjpaL85zdK7YutYDkTJqg",
  "key9": "44CpEEfTRaK8aiUyFcMqq1FVJeS7zBdpcMnw4kiB9Lr9VQzf1ADx7SpHJhbwT8cHJw6YuSmZduKYorQysSZ5g9kT",
  "key10": "K9ogqo3V2gsA4RmkdGiM9YAUXFQ8hMcUowNQxvFM9BHFjdgj1XxREfFtVLpkPWg6imYDdpFEZFHtzqc8TdfftH2",
  "key11": "3qkqnxfH2N7Cm2pykj8RYJSLXez15YqZcnUmVPVMYdpSUuyPYsN3Y2yVMAeh8b2NGtA5Poa2ER1xZaT25iik1iPt",
  "key12": "5qjajRgkj1Ko7aSyg4H8vh7t4zZ6LRHtCf8HsZmJCzqLaWaRi9HfqbPweLVHQ65wkKD2CrVL4mbR2UZQkpDfK7No",
  "key13": "2vcqZRi77Hh3pQFSkfpa4W6XKqWf9tJriM6mpgW6znZ1DdmrPYLCdWe1eNrqfy47avvWTSCnf5Ddi5kabagb2Q3f",
  "key14": "2zGDF3cj97GmFVFcQ9MVHdTk9WVbW7YJ1NY5KAGRNz34q8RdfkrwkxgjJ8EXExiqFgmdS46QgBwxxv4KiGEr8mJ",
  "key15": "JkjPCTjKARuMQYW9zhSAu8rJt6WZvuQ9hiMghXjSR5mRUYk1wS2qvkhtzyHAtRAfpbfDp6sKAcANWfvDfSQweX3",
  "key16": "KrQk2zGej6U3EjqnsxTdmLqf8VT6Q3GXyBvzGb6TUUN2omU1avstDwPMkx4HQRwXWPTKknj6ni5kSmaXp2DjzmG",
  "key17": "2LxxVbrz59oprzFZehV7mQxevesbdvkMHWpVwybyxMk4EUNFApRtco1c7yawpkjjPUrGupyffZ3pUM1jeyEH6y3F",
  "key18": "26uY2LhC4nwa3Pkm1Arc4edrabci8Je9sGzNiffRn5o5X4rk3BM65V5gfQsrzMXQvMQkxPSbJiAGZ9hFGUerAXiw",
  "key19": "3GuwMUWsDabXXkXPTYRKDjAghkC3WpX4cVgjPcnQUuifKsaeSq2vz9scwxCgX1kDYh7Neu9E2knzSVsVFPz6w2kn",
  "key20": "QG5N5U43JYkXu1NyxDh9BYUgCAXvaLTX9EzJSY4L9spsGaDkjw7dDBpH7nUoupz7Q9YULjm1MaDRHvSSkJHuq6K",
  "key21": "3B1aG2BbDRCPGyCau1ww4CirbY4oWmi4orR4hnqgeMc3BHZKteaRPSJCHMEVYsmjxqgYz88m225VML1okWgTA3a6",
  "key22": "335FxCunw76xmtFsEMdqkTXtzgPhQEXHBwPEZR1MF6L5rVqhWDVtF5NpYDqAyZkksteMU44kSx7PbBCocfdaazXr",
  "key23": "5cybJiCjG96nC1BESxNoV8DKY99eHLQBKHUmwupSA6iBDCQN8qpFDAaZb98B5L74bgbJyBKVxb6jCh88sFk77NHy",
  "key24": "3MAzHGV1b1MEW2Q8u2YxD4cCWBebexKTkCvgNYYqUo88Wm12P9aGdoBzRgrXzKYsa76WEb7ntZHZnp4A6aKsx6dC",
  "key25": "25Ji7LCMCMnFpZJ1ofJoe2VPR3XdLkZ7krqG2uE9L17Kognb9BGdbjk1rpFQUpfbGiQeEzjUJ7RB2ibDKabkQwUz",
  "key26": "5wHLAEHQ8x2JspkN58FJkAyxjovdYSomEamMrgWaxfgH3PtEHMjz2PehJAtW4Mt9zZUDfwuFv9iGbZ1EQWvkqcRZ",
  "key27": "4tiqL5919161mMmftE5LAQD9FjX8ij8WFGUGK6yLexy3nwDrQmiVYVfptMksFDPUV9qk541qK6JFkbjTwGs47Sdv",
  "key28": "2sFxwdCzGbXphMmKpx6G8MHpicJf2wB1bwx4xfBgeyvL4btthqx3Pg1oP1CEoFhnbU9AAELmrPabv3hpzVnV7w1w",
  "key29": "3RZKLZU8pSkbKn9ZHt69CnsMofpdz7JnK1DzQWR5QW6xiTWqip4BCo4YnGm43QRYpgMrE8zxGoi1GJ8AGd7p8zZ9",
  "key30": "2xjtV8GuayTUcW6Ne6o9o2upibWgRDGcVhNxQNLihnwG42h2DrShiWSbEEXUK1eEikCndq5pVpe7NRpgVxpngkH4",
  "key31": "CXgZ3cUUbV5gdML152yHrGfWh4jQqe6yYf6fzuSDxASoSUzboDJ25AGApiDokQAUJPnhxWaZsAznG5AowiKybWw",
  "key32": "sAZ62c5dKVbiAmE8ULTFq54fjyU1kEDz6qUrNS4yYffaAnYbHCJikTaxzwWPVCWqkut6zWfxSxW95aCPtD66XK3"
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
