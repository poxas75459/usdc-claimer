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
    "5HKV2LpcA1BaaGkEnCPqLqQ4B6i6AnsYZHP732e4RGDciXbWARNfyKdcAD5aMerJrJ3WHHdCDrRiB5CwaQuVh2Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428kiFTmc5NhrshKMVSuxVYbiBr12UQPY6c2irExVsDjdUbB5KujzNHZRJ3R1qfpzRAR37k89Hbbm7Fq3o4dNp6q",
  "key1": "45gEMXUwC7mLnZumeER6dbCQdtNjXCpASTEEz6XxkN9CAwj9bCPgs5XXvYsZo5Tya5MQmuyrmPoXSWqh6WwoxGcm",
  "key2": "4tpwAQmYVyP5KqaR4cdNXPfJMM7UBrUhCSiSewnm7QHEbrzJDGB1AnEYxxJeQEa9cqdQ1WY4Cje5fd8Hcj941nRe",
  "key3": "jXXdQDge9t7cNXW6qQcptKoVPZ8ukS1rMdT5Bs2LxnYzzvmUZbU9RqfeCKFUaV13cvy9juDaWhPJ6LWbp9DrR2R",
  "key4": "2PnpNebtGw1AL7EUdpypN6SNGi4jxsr26V34fTZ3gfmxPDPT6X9Fcuf9s1VXDh7qWgrJaaMTbjRN74rU7vFuw5vg",
  "key5": "wYNeTWNiU6A7YVVbURRCGWbdEYEZB3J7B8JR4Lbk9miVN2Wdn2PEA9RNSe6zLFy1fpY6BJG5W9YKe1NEyYf5UsG",
  "key6": "2azKddGicL9c5XRMtwnnhLrzLnBxNmbZvGcWuByGtSnkoYH9N8mB9Pd8Hxy6HhzQ6qovwAmqkuCDyLdRFpQbQwVQ",
  "key7": "2Wc3wXgTEjEfdp8D4xkikxjJc5Upd6fmtfw2NMpBpS4z9oTAWBHLQLrJfZyzAUV1UAAo2JjGfk3N2rat9Gx8DNXv",
  "key8": "3srBinvA1Hj3MbCzbFzcqdpQuPpKjSyE3ZB2Gs19RYMfxiPRJnJz5GpdP1Mo7zoZLDTGPp31G5cWgGWugcUZFAAa",
  "key9": "32sNwV7iCsWGEg2ApSyfz7ztZ8ZotgdhVrTamxvjGxQgZeMrdYW4YR5g3ar9jjnguMkhnm9YvayrD9JRp8gd5XaS",
  "key10": "gVhYPdY1vZNxcte8K1VawMa93aJvNrvH43tvAEymuMXmSGkihoZKJACHWxrfazpBVPeS9MQc22q7Wxsi3KYW386",
  "key11": "zgDNh5YGG3ysmFWZPEJfJsncNk8Et663JhndX2qppdW8RGqDKKviPoLQN9UfsWbUvRQfj96AeiFHpuJhp6AnDgv",
  "key12": "2Xw1bx5DMRVBQMYdQDEyX7r4rKN1yvqizpE7QCvvuMi66LahWCD5GCkpkLWxaKdr1hSRjamx3h1y8wnTVzm2veVY",
  "key13": "2KYaZMy2wWoASbwQoWTTcphPzLCvppMLSGkjwSmeJSpTatMBar8sJHEPhLFA8X5Kg6AvEZkQM7Z9XKVqNbk6q1Lx",
  "key14": "2zSyKimMZuBtZmmFxL72wCVq2xtYncQw3rd3yDkt6ifKqM4K71h3E1wePp9BNYZo5w7KCsWwdEUasiBDdjMsph9D",
  "key15": "5QXax6DRY8oqrk16rFs5fXvCiJkYHuuU6ckqsrJbM1nupWxgQDdo8LepeE7WmzPfH9tKSaNFgyMSAniwJjENXG3R",
  "key16": "4dPoysn9LP8kMCXbxoDHrSZXtpEUhLJ2dUvqYyqQVUF7bT4z49D7VecnDhpphCPyz9bZR1EjD7WhtBgPyCai3tuY",
  "key17": "niHYAm2gY7heGSRxXJV7qrUk3xw4KpFx8rUT6fUyUYhRSrz9Xv3BEABKS8pcitg76rFPDWUD4JP7rWGsp4t8SK3",
  "key18": "2ea6gEGrdVn7uWMGoWZX8M3bYeAg2SbXzRppqDE5ETjTEbLpNnNf8eL1G2QEERniv1t9jSuJWUXMqGZEyG6gdgvu",
  "key19": "5YgMwjztzMaG22TmUqrusamQi3nNqLhYAhz7nHVMTUvMUSi1BQ5Rf9ZsHfZmho1m6ubQXr8LgTH4VjQqcAPeud69",
  "key20": "4xeJWxX5tAm2pi39XyBMrXQx3F3RywCaNxu6gjdvoLQJceRjbqpwhfLWXgaea8xiNAPm49P9wh4qgCrwBqb5jdyV",
  "key21": "2vwkD6s1CvkQEJjWJuxAokgRFP9xp6iJKFU3fyBqteRALyJ6DXpcmpfUZRpzwiQrQmQc2Va3xhwKF2vR4xJxMRiw",
  "key22": "5MqSChiPg9NeyhP5TsZrvNySUox7iQKFWacKfUYkoq12sRdqsp6WgejkkvSbWXpCTj5vidKgc9Co2LRE5kTVUXVa",
  "key23": "3EjAM7hQJyZi94fEDHne46rxTPu1ULVpGMnGgTL6ZGBRpDRrTdjmjwCiv3MS2SnyuHbvRTNvvgmbR9JSzcM8Umhg",
  "key24": "4vYqntp7UrMNetjgos7rctsXKp8AcHmXVaCtSmSBPdVomcjG7Pm7XMgPBJuvSU7LrrqHpMtj4KsLPAbkQg3aVrZ7",
  "key25": "2Zsqgk6fhy2r5EMNcfsrdv8rWo4dy2Bo8YbNWrPd52r28nEuKKbbThwNuXS9HniQLBPjwPndL5HSLcpaQKkwHx1N",
  "key26": "2peAbuc7HEixxcDAxefLQRkTkMkRzQbdP4NqwLDL7Kb55kg2Mw5YiYWkB7ms73zM7zAnthciZq6hfToAqvW8c3oB",
  "key27": "3vKeXsuT5yjNUoBaZYqmm7bnF3fEZYe1xvQW3rEJt6vvqye5sPcmd5pnAfa36b72SE8Qcbio3T8Z3WuwfzsWQ5Y1",
  "key28": "2RjTvSTWNWBxz4VtTkpmomQzGrsf4wXna8vRMmbq2A2uhUtM75vNuSAeTaavTKT9wYNKxxNH6YFVRgYww3VP3S6u",
  "key29": "5mNruQkW7WKoj2p8sRfFrKjYpTdLh7WrEaFtDRxmJVYsKyPZqxA7LoYpujehvsqJzkxMMok7r69odwMyQKcQjaNU"
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
