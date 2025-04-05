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
    "4dXoZoLKLfBoRhRSvJ9Qzc6ggtCF5q4aDFeay5injzoDUYEUaKM3xLz8RYF6J9fYizXgEdiqTu8SESMhvgQqnDeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUHWzF9VEJEfC6WegTjyF7MFDSbZmVfx3Yn6t2Z86kgukFhNH8gQ697zZKPVGYbnwjcQHkFnUvEDh55YrDEN2UF",
  "key1": "2iHqRKqEYbjsstdoM3ekQKbHCAXvpV3UHYin2G5owuLancPR2ttasGzcyDP2gz4dZ5nhabT2h3NQXfxv226PZfjj",
  "key2": "3p8eqygynLH4pwWcYKYqTPGAtf1VVKkRbGU21cZRCBnUBxtYfdDJhf9s8bnm9Yv45sH2F27zmdGMh1dYQnht6pfj",
  "key3": "2EZv5xBwNmtMuDUiXUmHZhYhuvdtnRwhzxabQsuThAKGTfibSYm6wkgPJSwHDMJqQhrer59UHoqZtvSLgxz5DoXo",
  "key4": "35dwHdy55hnbs7p3mtx42NJwXosT3sc1TRC4bhSg3aeki1QXzeRw9nqnLzs5vRNXSuRXQpZ5VA8FZEpwHBgbPpjX",
  "key5": "28ykdT8E6HcZvnGSEHgccEkUtxLaGkzV7JPYxWsqS4d9YxqVLHaqPnkGUzHPWW6DXiu64ARWNLDnci5LzmAsc2fx",
  "key6": "NVBxuPfqyrdJJkJvvGbqBW6LMHdz1V4dRcncZMhi1phKA8mwMHCUhpreM4WchjZyDVUdJXBvPFjxEzGJ53DTdui",
  "key7": "TzqkGpkoVvAyyUcXmR1SpCKRgyAmm3NNjLJk1trAruDmzTHpGT5vSpdLXag8w3uATtVF1VXMbMxJZVdpNhM1L4v",
  "key8": "3e1DXssvizfS6s69AYsEedoYGFWuobtppoZz8apyYvckd3gCWQKpRT9EiGuDxbL26F6nT6TrD2k2v8YLckAtRHMC",
  "key9": "3gQD6F3xi1Q55EKyTBsDrRFj4cce9fYsrdwrW5zP1obF9Kh2q5Q3yXpzaph7QfTjMVWxfPZHkUozhRjmeqEiFuwr",
  "key10": "3pzos3gAH6pUtUFy4RhDfMn5HsN2bPo45dXmdu5VDTbDcpAHJRcUJ6eFBZ8JeMsjZsvDeUVZyYeCaHipDVwmkUXr",
  "key11": "31cw1iX5dU3ksmHaNfyagtpg1rhJf4NLTkjjNqtDeM2P6q6RyA8MEZcp5fFS1kX8GM9iyHGN9wp1mkz9kJXWLWKg",
  "key12": "2jnmZ2hKJAMsDriSS5ZhgAHVXbVwBUY8fLjaRVYobBHGwhmbLHoSCsVLxSknWX9kLWcMjPYrqncCZXyLzweYfEwE",
  "key13": "HaAz2aNz1F2M3cJHEmt833fe7tKr3Zfconci6JyYQ3eAAVK8JZBR9iiP8JnyJgSEGgpRdbP9U1nHzdAqac5p4pt",
  "key14": "2xZAhmAT5mzfqjUfEaDoYrczYiV3Scxq7m5btg7iHYs5snTjFZk34Ag2NJQ526fXtcGQkoYYarydChfiZ1fEy9ow",
  "key15": "2PJHGPE1rwMzWTTgi2uvBLYmdp9nFLzR7vkmY6j7JNqfHD4guDgzc6fmn7EVoqkCDo6aX24QdxcPtS6MwqB9iH37",
  "key16": "QiFfMhcx3d6JBqr8Ak7q7BNkM6p4r3SesVgamkEqQFmewJsNAovgVYfWixEWTRZveakZBUpux8sZ7WngCkVSAXp",
  "key17": "3bfaTWKjLFGTSiLcqDusbdgUPmcBZqL4WD9aHajxQ2bCuLaJjHdySbdBroC47G6215NbmE9pmxir3d2p2yFPGDGt",
  "key18": "39eugcEDk38dWA1FC1X3VZakfjtRHMEgyCU3PEzg5gkAS6XrFkafFrcLQ6ycb8NwtTWf4YkdY1kF5g6WZyfGH24W",
  "key19": "L5YrtzZkgDJjLNvC2FSZuSPgNniNCq48L1ZTC8TDX63QNTuBPLfAxFM8j7C8ms2BVFkQ79ruC3bEA9hoy5TWpBX",
  "key20": "3FAbMJofNcV9Eu48Y8mFfZUi1KQpx2hkNRn1ctCoSrJJrR96k9UzZWXptLi8qNqz8A5tb2EEcd59D9jaR119miFB",
  "key21": "3FDfEQK2Dhf4Lye6BYkyccmE6WiULNz4PJnycT4FSgha3ywDx85KvdZkbPvccszA8YnDvPBmygaQasHkFjH3bdHT",
  "key22": "1eWou7XLNjy2i7TLGY72Ar867bgKdh9YsSGpakNaoFu1zXvJptrLTT6qhAG7cX5jpaW2GnU9wNEjMicPNPdhaGT",
  "key23": "4t5cF1rScBvRC4gSy3KXjwryAPpt86VJD4r9n5ofhWFcNAPXG2e4VQYGHXbj9HsBzHEkxHA1mL9aYkPibGEM7sfD",
  "key24": "4gfNRjbfYAiWsU9zBGy5W3QoEL9sTiDBBQFWLhNug6UcKZpV5iMMQJPHNEiHdSx4CzE5PAqjpaoE1jfM78epXtmH",
  "key25": "64u85B1Ud2qJkWPnCZbZ1Wf143VzfuL82NpuUxDWMegtGqJMNh5R6Betv84XxCgYrJyCXqHrwyQvXFKU9cvjH8o2",
  "key26": "NpZS7qys3rzt8YaAigiNhzMmG8apFwNYys6fEzpPQcTzJuWSdiL7VJEht9sd65uz58JHYCtnZxRziYw46nK6Rw4",
  "key27": "4zz1s8qz3fsk8WnLtNPz2RHAB3ZHaFx1PGvFCGdHkg7RoX9D6jJ6wtrAjeFDNfpzGmrcqbAKxSJ6G6Xh87kkFCyQ",
  "key28": "2njJkGdu5j7sSEGQ8f3VsgAXwddMYkyWuPXwK211bEzQm18YXf74RXUdLZgfPPhQYq5c3ddRmn5J6FCn44G4ogDp",
  "key29": "5eyh7keZM7gLNvpkRKdcU1Vttu9acZ4yNF5ANDLEfSFtEFjjCvZ9XRZ21B6DEhxnqRQfB2Jo3PGGaga91mRvZz2y",
  "key30": "m1Pp7xgDav4HnvX16SBS5YAHKt2uvxJE1DQ4i7Jy7RGXE2q6iLyg3HSVuqRnzhjW4NHqCCTepzdgFwSBpALEQWJ",
  "key31": "Jvr7aSsMrnNRBdKygKASCCxYN9M8pBPuAnnBDQSHvEZqbgp4W2W6HwRP4RE8UNGNNy8RG1YzKMyB3aYM39JNyw4",
  "key32": "3wKqdQSFM7MDsq8sb8H8Zob3c2yjV19U8WeVbPDDGVBuuEnb4BiyYSvGFzbAZHbdRz8BoweJYrtD4aaVg6h4EzMA",
  "key33": "mFkKhCbmr7KzMCFZf2yZEE14BRb8DKWYzWMNp2LfUENZbiJ59NTpxty6tdMT6p8ASm5PxKUzDW3B7GNfEN5Ftvd",
  "key34": "StXXicNDy4ZNTvfhK8b4Q2XnAcGnNXXvXp8KiQ2r25mmmqnS69tLz6evXDVkuJuJdUyoqkyeEsKRFXdUVQAecGD",
  "key35": "2vsYraqWfeA8hq8P7DaA6Ltvsjz7AXiPVgpU5btafR7yQ3H8a5gv5qwp2UDhGpj5UoQVUdG3wyovE1nJGktYg9Bi"
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
