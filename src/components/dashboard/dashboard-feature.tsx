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
    "5buCfxgDGJNwMCqV4SEfc7mbRjXN9SwjnaK4wAFLawVZLTjf5JrsGQ8KVLn4uPNqzqSip8XcHbp1Eej2xDcQ1yxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WL3KpYJd2LsM7BgvLuR3eS5hQtVZxMuT9psEjm2VqgMukDG7QFV2G8iSEcAcCrw4TLWdsZa8qtH6hSSe2wfJE4d",
  "key1": "4GbeDGhzMeGcLbUCmvJXNafUu93XU6SpTRaFw1gECDumbpykGfRFLG986RxAHEB3oQ44AzoUSsRAAmJJuNwXo6Qu",
  "key2": "oNEkcmnEpXSLBqVAPvDyC29o6yEZ7A14k3qoJYzHe3v6PrqLc42A5MSj3rQKFi2BZyitJRS3iCf3gmfMRFwCvXt",
  "key3": "4Bhwk84g8VSfjY9QK1G4UXeGySxACYNbk4mRVrU4dgf5D9Juv5FV6KRwq2mqjmLfkUdWkdFRhKvintZJi2NxGdLU",
  "key4": "kfL6wXcKFP46iEimcC8UyrkSYxGr2CLReJXk8oWFEx26nWN2HhnpGZfd6bVVaAZPbKABqPdGGDuXkYxsNcMkJAk",
  "key5": "2cFSkETZz29xBXDtRQT3aSpQeqU3NvMH96jKJjoby9Nr9WdVNbWBcc31nGAKk3Q24Xg1wwTYAeLDkuQeNb4GkmKZ",
  "key6": "37teMHVKwgvA5xncxE7FVyjc9jRKYnFb7K1WYYmzoryHuSTPGeR8zS6hxuaL33qRW3kJpsJvc9DRAfAZUTEh6U83",
  "key7": "mEhadRp9fszZHKDLfM77L4mVXBWt1FQZCwHxpUqYF7giSQhVqnGPjxjyKeKduK8tT5PYHQopMYwUWtN19Lq3vRV",
  "key8": "3rUUPRG7FkuGNZgNWU6vXjNu4q2fxteonEQRgARBV3HwyHRC7Ls7xWyYnVWZrLQfD45vSVcje8UFGpKp4or9MSsB",
  "key9": "4DyV2DRdMXgK7G8YMewQEKzHwMmXQ9JXDqBjwJ3jcgsAbUaL8JtooCZatNCRJUMY5PGWbwt7h8kNtjbVKvpZns6X",
  "key10": "5hLdtEZEbLLamjzxojxFHq1gevCTwvQKgnbeQhry7fczR8SZRZyXEe7T9KLqyAQ9UByzYJo8xS9sNAefp9M813jg",
  "key11": "2VZXp7v7x3qFEsHyJdtJD4ibcRee8Kc35G8N7BqQXJVZmoNeyUN7MfztzwNjFE6bDfGgn8gZ44nhPbKiahZkgQJm",
  "key12": "3J6MpZQcfm9VgqBL4sXBbsyJxH6hJKHVQ3skvxycZ5ESCXEu6VURGXhUphN4nr8zXHGBdxrg9sJ98WNe3geHEj6s",
  "key13": "2F83gTJMN541ukeGCzrMCSJXEc9NQDqXnaSE1YxYPcmbtWjm3y7sWb19KfSfJD6Z2EbPujW2fp4wMmGrnLcsX9L8",
  "key14": "3VkHSUQvnpaUd9yEYYAPKxH3eSnPMj8mGUhMcxHccjL3wHgnQY73rAbPCEfgFZV5pc4CTs1d2Y9ZjcPXLQGA5Dz3",
  "key15": "56YpG5PRrtLBMK4T625saLVEJRnDm3z7QJG5ZFajQHCqdDKZq76SiSU5DW1zYZ5HZUoHuCPjmQ293XWHvwLe255k",
  "key16": "4KjPmcABhYqCrRgm1ckn9ecQm9SLYYyUy5oZYps9QnJK6yGJE7ALRyr3SYX4QkiZZ6ufpM8YqWtxZjRTT4HFDB5U",
  "key17": "3eU9UFDcdBuHJsvSoANedSeaVUBch3LbbB1LYycMwUM4xtDN25Lb5Y8rbztuafPtjQPyZd22LjEWVTwdNdovdXHH",
  "key18": "5a3eb1xBsH1Nc1QgMFgydvEtSAiga5Z8rMgUxyZdJ7dFVLEQU9BseZx2H5fzJouTg9YUWynEERCJEqayToiu7i8e",
  "key19": "3apHsAkZB1f92C9VEaGQyfS33Fy7Rw7KK3okPpeEZMkN4hA1gQ73bDXrCDss9pNWdqFuE9ovesoFXE1yeLhyXNwP",
  "key20": "JLtUjzoukHgr8ACd9f2vSreLMnGbLLLXTEDgZuK7qLR61V9fWUjhn35agQPrZiR8hNxsLSGWmLFhrooR5nQ3nho",
  "key21": "7KG5VuvqB5kzQumsyVwmKfqnKFX5UkyzuNzSA8LmVPKwgtSwQbgL7axiX2CTQ8VNrtiDCTVhpAW78PTgX6S9BDk",
  "key22": "4b6uTooyXbiU2WWXTmhczcY3FXeFWhMB6JeYjL4aRkPG7jns2LG9XCuUsSbJSyTFkTnq6aVjvUzf9qnJLTaGNPwM",
  "key23": "bJS5bbPDTbLDjPEJWLv1TkkhbygZiEw2m6TWuAYSQXs72ezoxafJrXMn2YR2VNbWLrowvS7jmtk8qAqMzdUCpL2",
  "key24": "26eh3qEssug3Ggf7xFNwi8ZeJXaPF3vr5r8dZcGnQ74MhNbiwGncaMEj6CPwNTziZ4cev4U8yhGbhCndPduDMSzG",
  "key25": "4kpVFhvZSoEtWvAEbNP3XGM1AYKA2y5Mv77ygXHARPqF2rpeqt17RYGkGsbZZXL2K7Zw3uRVegYQRy2Z6EPEDqwW",
  "key26": "3AjZHt7Y4VJA3eh4VeqpaD8VL8fkykyVtnWjAcSPPvtY4ZUxdtHJniTvaKPaQfRYsBnWRRHsRBnhNZ4So33L4rXV",
  "key27": "FgWK9EqJiMBHA3j1TzAjs88dzxCNCstSCs5rkD3XaWNS3LPZ3kPzy8mEKx79HYxhkF7k6j2DkE5WCjmoWFjGcBw",
  "key28": "3YepM6Wmq28hx3PYQaqFWozAuYNs4JyH6UVzKuyYTL3YwhdzdFRCg31Lth7kCWyrbRr8w8EDTPJ9HtCWtNrkKVkZ",
  "key29": "3tn8Lr4S18Qs1tGsusvu5ZYgvnWqqRMAvLvsCPVpz3BhCyMZPHaWGohP8VetFQExHrHTvXzbxjQBdB3vmp4NC9AF",
  "key30": "3fGhc94PgHQ7nzaSsd1XQauC1T4Rape8fGf5Pfrn4461cLFkfpE5VEyJ22VTQigXHYUP2jxsGwNG4NZmrZGs7wsA",
  "key31": "4Ke73hoVFLM2e8hhbB677HuQgDsUWEvMandiayceCEKLhU6q4aTjFHhssnSfGqVA9eCY9npy21UF5ErNmxnDzCeo",
  "key32": "2CoUami48pkrS9mS7sDK9RgzNkPba4wDMubjWTfA2BxBodvS8tCoDDDTrD4ubYeUwaMsCkJEoFpqJFQLzTe6Fxkw",
  "key33": "2J7SWjuiuAADxcqiaQVqmrQowhaaiBiEnvhQTCJNmMghX78xmCNtxLkuXrqYdZ5dMK9v8rQ34g6Gi3RT6esnFUsX",
  "key34": "4Xy5ebdFV85akBpLGxLQAHvgCFGQDDoJ3V424U5pPywAW9q38nNAaRHX2biPQu8xBKm3Hdbi4dsMuAhzCENZd2G2",
  "key35": "2z5K6GCdvKicEnXpGE5bpy1DRDLQYwEkjjt8DU2jHhFNoVVVbzjbSrHRczN3VHEuCtgUBwrzeoS1mDfgVEydeEgJ"
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
