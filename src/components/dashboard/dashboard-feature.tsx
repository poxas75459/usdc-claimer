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
    "ypdwVp1dHrZSMBseg7j6JH4NNrQ6SisRejuZwpQyvUYXSNSmMnjy6YoFqpjjGY4atLQ1tjKTRhb7qxL2cuoeSGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQdvQEYkfkxfJ8dUrAk2NWdDnxRCca5VH9E4iqkh6oeWezZiKXdSPp1J1jGXocuEQ4zNZuG2ZBaMha6aGfEXSmX",
  "key1": "12y5RGTVtDBqNUZcU9ohG5fLVirEuscjc3PPV12VhiMoPHs8Sj8YrPdJUok14z9pWUhhpbqoSAAsK1B9fo6UqF1",
  "key2": "4WNgzQCRmxn6gSJcQ5Ne7iQSwCCmyqkUCVy2sYsZKBpemhZ3QEhBSZQjHzQ2PgJyZovVnS2LBkiGhUBarL2fyRLN",
  "key3": "2KiNYuPyYpgFwLNCfLgGPvtS4t1SHGcFvo6gCHLxug3tasghvqCJBYd3AsCryDfDUoAXo2JxVPod55Ho5cXCffae",
  "key4": "3BNmaJC8GcgCVHk318onaXsL2zmEFEPRQdf9qCDN5JwnxeqQ51NaC4X6T4BasjG9V1ojh7E3GhcPRewiR9ir6H9h",
  "key5": "5YRqaZCyJKD8J7hhwbUoUMj4tfkYaNs7TWytUHRDBmRJrNh9oieMAb1NMxTvAJgXcAewTELF5XkDcQsq5oMQpQbL",
  "key6": "khoReDVhnSCsHoTosCMKXRGZDfaierTntQBXWkicvtRFj997QTYTD7M7EMUiiB2PrbMCmYn5RcRvau1MWsvXgqZ",
  "key7": "2i6WSZsKoaobXRRQeBw6Ccs6wUoNNZiT1uZasSZDPpd4kxo3N42pb5BRwQtSMKwCXmNtXb61TEwHg28kyBPK22wL",
  "key8": "2vCdtni2y8zbhpJxDB9agiogVmxSpj7nD3EEt6vMR6nmuyGLrUhXhqB9URWDrFWEAXPNTxxykp3kZxTf8UtCXry4",
  "key9": "nbsiPVV8bybfJyKq8LDomomEQt9e2GdUJhtcikS2BLmkUhnqyaa2VNCSBBXsG3QYs3bwCP6rFaiAss5P2aHKL93",
  "key10": "5bXqECwnCScDTUgRLKdgeAPEneLRVokn38jG45j18jY1eEZVoYSyKb5Wvk663eQhACTAEYA15iS4eS5LMLLtQL3B",
  "key11": "mGQo8NHEFkCGwVyh6ktqbKQRKRMRJ1ss1bURLZQ4VvWL6rJCDG2wfK7BNWon1Ju6v5jY64Y9k8881aieeBdEhNv",
  "key12": "3VLq9zYMqtQvB1fUpu85eQpZm2Rcuc2Uqvy6khVd1kx93WijT4fT2o7eTW8ZfAbRFDeAp7i2Bzo49iipGtHaVfv7",
  "key13": "5xp9bHAqLA4vnWdTHiQnHtc8DnW4TSbYUmGCH6nEKf9xtFJtptwaGqX9KhaKP71pJ64dnzQpcF9CnkSA4qy6qk19",
  "key14": "2C5yK4kG2QknFebiDzTXcbwHWCFwPZ8pqLr3YNqynR11VX8tAaiM1yLibXmZAPqcGPQDW8YdyRDvhiuuQbtn1YiG",
  "key15": "3ZX7G5tAMLsvc2Wuz9Joeb4BSmejKBmT3HMUy68hwRWfQ2TqzxqWkYjGFAXh9CidrSXri75RqVtkZGoNJDXATpYa",
  "key16": "4YJYcn9WbUwHWBSs2bbpjfixkazn833XvhjNS9ef5SYtwdKnDuzFHj1FF48QxB7WG2ydmJUXMoEnXkxP3TTwgSPM",
  "key17": "4hQUofy6UTPUqtCmemQrwpkvhfgHnyujVnrFfcpd6qEtWhHWk39Cf9nRPUoyCLYKFfekRnkEt76o8jdHtMztMy3A",
  "key18": "5e7X46uuzBfiHYK6GsYJrH1cu8x2nFaL4CDciBNHnJhK75tcb4j7St5fA5N7gtnWkzCBhbMGbc6hcgR2EFrb3HnK",
  "key19": "EK5nW6H9Gk1ZPfRMwZoStQpm1XRihxScfEoudirMFjS4nPHoc1MSVMLrsh4rXn8NLj4Hu27mtxsLwrhDGsaWh8y",
  "key20": "5KJLtJrFi7YuxUX6Ni5wnFwAjSasjfiLYTj3rv1xLYWoVpe1cAAETScDQT2Yi3GZ8w6oawsSdgBh1ruQVDLaRUa9",
  "key21": "oXiP65BgLj37UKPLkpGzbkZceVRiBUYDXX6FYbBpQixJafQug7yytBjjtCpfjc92ruB7PeVUddDtHJPU5koABCn",
  "key22": "4isEYMnaSJxP5c8yyLvMmutJAk9AsbfabvSiowqHNppz3rvecBL444xaRM3x6xe5yVK29yFpSF8r7EAMdwU53zym",
  "key23": "646XCvg1Q5BewBF39cvwEgaHU3m2jdd6R4AzZun9ZmCmeBLicBUH2Fhp9VCwdzJn5ANkSbnTo2sbY4mGbhwcnJu4",
  "key24": "3rj22c1jTki1XF5y1t5px2TNoSApoFWPHE2z3dgNvXPNav3hCz25VUxpWdT7DZwcvLqzyAyfrJ7KUKgoosvi3y8w",
  "key25": "63xYfftrvxcPwkvUJWtuH1XkLt2ayf6kGN4vpCv1NJTEh4JpEdnhQxmk55tYo3XALBdNYnXfR5CirU2jgsjTPncZ",
  "key26": "4DcsKqVGAKPsscSvKBhnuuGF2gtJMMJTfpA8aYxvpMKUJwFzGKFC8a17Pfx2T6trQyUTgArD47ptcrN49HzWmcGC",
  "key27": "5jkXyRM3KoyZmWVJXyhUgrYTpQQsc63ZgMS7KyTxocwYMQ4zQs91hXWsC7M5afCyg27xu4p9JXBoFJwLFR3Ej6Sd",
  "key28": "4EyPwwUXgrK8BxYb1DHn359A32T9bhF2nR4JnSViJ1xS858YiVKyS6EcHGtvFdECtJgh2rwvS4EU6izVrNEdtQia",
  "key29": "2uQwcrUWXJEDTyvioV593KNQezZqgmCsfnpL4gbdvUyDgFhBZ65hermNbMnrAcFSQYrL4q33u8iwEG59NL29NEm2",
  "key30": "M9BqnSmdJUQcP9GadLu3Xtj2spo4p78cXqCNkUUmbVrby7gW1sANfnZpZccnuZSTu4VpKDJBLKw2wvNvZPMdbmU",
  "key31": "2HXmgetUJPda9D32ceSX9dzrS3E3F1KchfUqgA7HiFw85CsGfY12CBYJkGdpZfzMYzWZJZp2rB8rsFn8gSkUsTSL"
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
