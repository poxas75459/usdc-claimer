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
    "ZcMrwDAFz4JNhdJdgF8KEtWgazTuEpMJgWnZhnuwGj53byAUaMnbAEsxw5n41MsxF7LcvTNPRqW8WDXgxgjTB4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVy47rQxesMb8H2dzFLAREqAuFdTWWVQWpYFp58VD2hiz5i9715TLxdU7uczn1g7hY9MMX9n4gMQvkg8sSqeJqS",
  "key1": "3mHtAEdqBwBiQW8fEs86BcTH1BGZSFxyN1msfGWSuVPsphKeo34AFLiruqyn9KaHeYKGZMm7xK7ZggbZcGDdSHKr",
  "key2": "2EiTwsN9KP1Wve87pxshArqD36ADVtVB5ptQWriuQaWkdVRYfxLRTaAyH3AMs7LcrUBftUPoZFfTfRpzm4z6V3Nn",
  "key3": "6KsVkvL6C5srSEivoN9D2DKgVMjvSgSLZ8v5oQV4ysAQnBMHMy1BL4V6TgMxdgMboe6da2qUkuLTySV16qcEELA",
  "key4": "3Syk9WjczXZMmU4AP1AEfTJemZwbYWjnRKr76vvehncuCzP3PPDHRUsANztidFAtxPVq2d5E85xvo1vSSUTHb1To",
  "key5": "pqrLWRqtCw9Vx7ipJcwJEvEjjR5tN8BEhjD3zrTjMQ5LMPC6sjkm4K6VEB2Zbz7BZxtsRWo3RJuG9dEpe5x7Te1",
  "key6": "5gpREB3tvdWZMCxwoNmiEjK8HgpeeJkwg6cNBuZrDHk6nQEEEKoBrr4xnwPUeXvUNwejQqSSCypYPHG9JgBEKJKo",
  "key7": "2o6sL4mW1SJsYkP23h467i2wGtFzKke8PtFU5q3LqUFkzNvd9WFSCgkDyyRE9Aqxv9vcZdtdGxEXsHEYXc866GhR",
  "key8": "2daUETCQ6iZEWPm4hyDPUtPnQrv6Ld7sSARk87SBurEhMwqZKjfeJgdzcsKcKvi16336BvxFZQgEo7FZXszyyjHv",
  "key9": "5RtMZFZALvB73YVb9Mruei1yhXqkVJfYg9R9maAfrfUiBA7b6SCLqA2jCir656dRrYXmy95hSSnXkFGn2YR3UVFK",
  "key10": "3KxksnqdgyM1Jx1NWkRL5Qd4Lbghjm5d3BhWhfJubYCMsBMPzinMmC242vY9nvPKfmuqQNz2o1XRe6V5MtE7B9kP",
  "key11": "4TGoVqsvMKZV7pBSKXDFdUsCZL2NWRgU871Ei6ERGk2ioG3fhAhNrbeW9MgjhLBr1SGi1RoyGmCf73iT8J7x3czD",
  "key12": "2HpQRfsB3kUK1h6hhbuNu6aGXWpdnYP1tWKLDzQjwBt76reRjJiyWjrMy1xQBytSWA4nh5K8dB9nounwptZZivGH",
  "key13": "4f931UjEDW4jC3NqMBzaoyeQzyvwSQ6TVbjvoyrtKJ2yoAeLZCNN2qed6wTupmp8xD1oih3YKmWvG8Ji1eh5wcX8",
  "key14": "35UrKqJMgupToBR3TTko2oSJoePKCrX3EaskuEN1nSPbM8ie8kBqh8CLR5yYgddvyDMZ4mbbsz9YQ4WD1Qj7LeDZ",
  "key15": "4HB5xf2Wo4iwCNKM8tJ1XTp1DQAno7RuXdjooHnnQXiYikrsonL1JioNT8B3SbRYRCrePM3nthcTMhWYPCveGbaj",
  "key16": "5ejMYuwWRetRsPiqBvCD8QbjtkTE5ZQ5PA4hY9teymRk4WywGJ5pbSQA79nGGTTUPBG8GRXGhwLF6SmJqvt3NEoH",
  "key17": "4mS2MtZeUjAG9vda8nTY7NqrC143Sm9GnUozzLWNbCTanQ8QSLwKipabTsdMKHbod4VG62zNQrVEGP9VHzqxmEap",
  "key18": "4s1N9NEAHLgfFA9ZS5zT8ii7Bj57Trodce2cV51kYuT6bxUJgoMyGpiU1f8rU8czEtD9te3YyXE1vz5V5y28ceGj",
  "key19": "3tPJYu9oL2DWKxwNqzD1z1n6N34EH5NTeFkb9hfVB7X5zCA9Q1z7jFagbMaN9R4XnQuCh8kvBSkgzHxNP7ykib5Z",
  "key20": "35x4nBUEiTKeQepcadyH4UoJZ4VvEWATvRxtc2i9gfU3uRiWf3rsrCBHgWabn7vSfVCYEpkSrRoDpNpqPm8VFNCo",
  "key21": "4gYP3UeCbE7A4B3Mz4d3MnNWwZrKrYXZJNYFENL1uW77Sy63y2sk7KcNkK1cEZn1edwHZnVCCJY1G87BiBi4qhb9",
  "key22": "2qAc1Wts3yWahZKhQgAKaUar3tcwaA1Z3BsUfrg2rcFeTrm9ojUEYLsPDkSfUW9sVVhFx9EFjaSc1j3Gp4AYteHJ",
  "key23": "4xUA8rNPYtH4P2JAfu7kdnQaiaBY4AbtPZQBwwJVDrQYpKtP4eYDaeAMbdZy67osYPCuBmkTtqCCduV3acfrNeEg",
  "key24": "2JFMDAUdL4PVCyM2NWgdE5kS4D6rRmQBZMSyZQF73EMspS8vwR6gzrYJdQdhdbFc7mndgGKiG6iMK61v9XaKqxog",
  "key25": "41tnHJySZbcRuXHEx6kvN94eV3eFwrgxwzu1u5mLnSxYiEvgcPyUVyXX2qZmsW4c6d2e6wiuHMxtFmfxjDEtjJXx",
  "key26": "4Y5LbfAQ7UAKSEJkEkpHYT8RPZKxsdZRzCB98gr5irKbBXMziXebSsoiGC4UMfEms8jLRdL2xCBFFzK5oBkuTSB8"
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
