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
    "aBgrt8wyqGSX5npSFWtMt3d2NmmTKWyUaJ48wKqQHbvNvdhxdjgsnhigkPPwPAPTMEPcnsRmg8vQk2AFDtwqeBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WH5D7GQu3et1oZqZLmbwvzSpH1N8GvgC3FLU6gjjU7yPQWUKWta2uT3Hqzy64KhDndM5pT2bzYb9G4U8kSSBrLu",
  "key1": "eg7c67Ymn39sS9kjF6LaUhjtJMSrHvrVcSQX4e9ZQ1HcxHrMdBzawVWPexvxBwZF13Q2ALCT5P8zYJuagRYwpgk",
  "key2": "2LTgqL8zWYc6tYBdcxyPhu7Uarbqiq7SeEKgiCJt7DomdJ24FvvFVLMpLa1YZjohPE5GDt1pQnjZTWTnxpfaVAXq",
  "key3": "662ZnKUGacuu7MTDcrzP1W84piqzJx8tAzbgMyhiMJDBm9in5A1c79PRHpNbZgrhcXtjT6uAhWoaGiVngrVPERbC",
  "key4": "P9S4zumReaF59dbanRePUAheTXDzcLc3ru4QpSKMXa5UK5UU5hXtMcsPDBGQT6u3veEWyynPENYZU5pbgWJxuuf",
  "key5": "B5dgUm67CieRBmRPRauwLT2uxhd1S9RhgvJWGneY4MM92LUkRZEfYNB1Q8tjjf5ML1vyLQ4X5JGzbFpVworgEe6",
  "key6": "243vDVwQcFYv3ZghddbMtQtCPT2koDBf9g6qoBqU5GKsYSyhzTSPw7wHatThEoUQEhYkNw8khqssuTzyYRYN32o6",
  "key7": "2uQ4bkmq3p1LYEDNovF9dwSkpoeuPiVGAVRsaK87mBdgSX94X2AJxsj95j4Xe5FAcevYknYsP36uGUmBz2gnCcj3",
  "key8": "4DAdrp5wmwN7dnXgTukPcD8fv6bKw8UeRw4r9aiPS1sAwiJHvsUtEKpWzikFGtd7HGAJG3Rq1DNfRMWyFKxbqTXg",
  "key9": "5MgC3U16gRtVosHmJ2q25dFhZxny9b5DKAuEZ4big7f5NSBykndq7A6J69nTxR66dBFJx8rhxCWYndKDeuKoJ7ZG",
  "key10": "5eVKdtBmLcAu6cRAMvD4YUYu8WtmbTXyvPiUi2U77CEt6J2VvCtyyrJCWMekxHxssuADPcXDKsguwAdH4hfrfxCX",
  "key11": "v2Do6Aj4bXj3XbRM9vdrSDK9xPgzpM7ie3Un8aPkHU7fqR82dUW5DFvtkgBRcJaPNT25VcrxyeJ6rnAygPxForv",
  "key12": "5jFmUB71wbgq7pXKuGucr1KDXXCHZ3deExeo9BfGtcxXP5qRNAUyD8aTWpNkTwZnTyhT28QB4E74byUNG31w6CK4",
  "key13": "5B3wS5hZRcBDmGa1HjbmoAmn2YYTw25CHszc6M3YeALAH6pPAiuDnvRQ5Y75RddFjJHsd3noLbpCUSMvMcxMYyed",
  "key14": "SnRs3ehbVwy96nSKMXtFhFoGq76XYTqCoonkP8NNQqJoMGYURmsra3oaHmBti2e6AbybMDDpr9DjBNKf7epJQGX",
  "key15": "4spEWc6ozoCFEfoi88x7ZyHDhm6GiJckKpFxpsMQkuY2vbXd2snUwQYb19FeRk6gShRh2h6DJw6kJWCBS7hKL4Bo",
  "key16": "2ZE86FPeu4uKsRwNvZw3VUZW5Nm79RYDiY1j81T2V1c7gBJdiQiTDyL2zWTHtw8ZkvxvvUMuCRNGi1S3WAxd9GcP",
  "key17": "2FJHesCfm85RJdSPa4Fiksch9v9C3xLJMznSm3NuQcRGRSzEfK4xZFddwfqkjXGQZCXWCjJDs8SRFXajGtAKkpwC",
  "key18": "XensyJXULXk5v85A1wQ6G3ZFB1QTCdQzkH7CZo3F7rKRbGZ8dcvUHDMSUiPzuobpxEpWm82Qvi1EwV6BTc6dsEu",
  "key19": "UwiaHkKsaF4QFg1Rc2jHE5a4qewchygVmQFyKYnuiWYum1nr2uQp9uXkoxqk4jxCgfMnTUvH9vvXhxoa4ST9GjV",
  "key20": "2kn5giqNNoWps6xTLxdAF6cYW2grMWhPKMHF1tSde2Hg5LVoyWoFeQx4w8Zx7YL5NhdNyHAcZ1N4nYF46wCi2hRW",
  "key21": "4tWCs5ntami6AhywBA224gYNk8hmhQSXLmXBCsDdd4bfW6mzmZ6dhWivnsSgJSD2cQ1TC7PFyAvHozzm8RxFXGCN",
  "key22": "534QkvM1jNa6S6ukKo2dHVV5C2zJhrNPLoCrSnQgZdopps9UYY1r8BqUCXHAHYK5fC8gZvwyrH2nnhxiSQfe6v2j",
  "key23": "2Dghwsrz3o4PjuaKppEDNEg9UXcydV7vdNXKrZx4ZEAS6hBi2sNTwmaHG1cspGeCZ6kejbZ4ubsYvCuVBFe5AS12",
  "key24": "cb1YKUjT6LYeHqwDYfULBoP5kd7LV79zurZuoXix6V6LZfZGC6pUj4ukAzBAoPLeKoqwzwmK1hVFBG6sWbwUEHF",
  "key25": "3mzTg1oxkbVMD1ixhAKm1PZeBBouVGouDSmNH8GpnLHKvqVKf9bBwf7DqWhfkqjVdg8FQYrp3Nn4XJ4YniH44UuP",
  "key26": "4wwt59bsjw4QzkVE3EuwbSaWgvPU613dPvo2JZ2Xb76kDbhVhewrKsLE8DBrKMSGr8raGxHmX5cadEiajZtgTDRU",
  "key27": "2KeQdAnnpYSAHi3jVBhK136N8FDdiziah5cNPbMuMgLTK1DNingc5wzuU1K6tPFjAp1T17kKY7KPhiW9DNgy4Tqx"
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
