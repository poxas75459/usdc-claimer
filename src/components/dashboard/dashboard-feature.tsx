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
    "3Wxwv9C2hr9azXJdjdKVZEAxKbE3sgP2Vpu2TrSh3hkDLP6WtysdxqTGCyL9GY4yLaBnxHXf3cS2DwAbn1QJhEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rrETaefQgcUhbBbXU6PA79seP7Csy9RtNyU3pX3kmCAEYEhLXffrJS7YZd8Qf8rXz6tvzucehacLz9uB9i4pxoX",
  "key1": "3hvMAcfUULDxdVGgSB8mu18w8TF9kodWTyV42G3BnRL6mcE1kNKwpQBYWtnBmxTzrJvHS8J6X5ZXvQuxPY6Z99kr",
  "key2": "eVTiNjEij5L1tF2RfNe8hneyxXh2kmSUQZ2KrTp2WXr6cKF5DkHGzq9Js1o6E7yfdniFoGbWZkXCj37wPXGgXpP",
  "key3": "215FmM8q1Ykja7tT15yihPZkWFPDnFLBijqGsSL3j2Lj7gYXpy4pMyBGVpfaNZtu9wHEBQennpJ9rVQMW6eDdFH8",
  "key4": "5EiQzeGBEZgVGCWT3CArX7YUFaRnbYz8BGfMFzsRqpmrK1eEGCtYAo5gmW2Rkh8daDQ8hibxJe5Yz8u6KiUTztp1",
  "key5": "5saBqiMm3vkvjDPRcJyCzntzsY7W9qGieGFPdk5ufc8NaB4yHZLRKxkr364yjeGygDFy29gfWLDvuRkVyCG9ku42",
  "key6": "3ch9brb8PAphZUWcuKdun36qnWmWUQ1EnjVP2erUoUzqoEhwMWm6XvG3deuRJznwmkGs5DJCL7iEAxhxqSCukjKj",
  "key7": "2cgsSjCFjaNFHyUqYajzB4x5hWoAUStJKQUdwjkwzMuV7iteaJMUiAzXmnruimXB3M2DVKPvru6CSMPwgF2x1ngM",
  "key8": "2wMWvbTeaxRFQa2WwotovA3MbJUZMhaU5PRRgTyp7bpjygzozShsQB8v9gDPRjrcSxUqRVzn73TaRnjqZGysDsjL",
  "key9": "5RPvhBGJRk4Uh4WMbFuozy9VDhcemih3NG9hVJDFoVHpEKAS3Deq24dFqmusqiwsbFJZDXpdscWg9vwAoNLGMvpU",
  "key10": "2tJBf35S9tyrJFW14EfUh6XzYoqSREosf6Y7HcKNdNe76paBUur8i9gLT3wPx9225NvnpYMFWWoerDRSG4UorQNQ",
  "key11": "3p8Au1JS74rkfduc7bFJQhPRYtvsQ5ZYgdqMc6QHXKU5SeHa4LmeJdjySocyueoixi8wsm929ex4w6LUXkH7tcY3",
  "key12": "4iPu9rCiqxZSBBa8vi3QbbzTb4PD3KbYM7ZrG5WPnMeB3EciBGHpSgY5zyQSXPwANWGH7r3YTiR8TePq4c8aFK2K",
  "key13": "212d1nGtTJK9SHweSJ3m2koWH5ftJL4ZJXiJsjC2Y4ijF6Kh2yNjMiwjJpLCJqHDXzV8XB3CtcSF6FrumfcqNCW3",
  "key14": "AArrd5jcRAUbv99hR57yWziPcFpZXMjfsa8kQUhKjkGMYX73Rs1F7DVvXM4Q73RPSuAR6B7HphcQNvbxB5W1R2C",
  "key15": "2nN5v8ykYKk8m42duLf4k3sdrV6aLh72S7UkkrfkkJsx1KqiuhJ7RhQg6rnnc7iDM2rgJxehQQURYRpP4DVubhki",
  "key16": "5V42zuLPUgvxPVcUaNu5Bb6feEGCxdj4dEdp5nw2Xsc6j1qNYsZu5NuTxGx1XoGeWZGXXh5D3xSacb4nXxWVHaq9",
  "key17": "4o58Zp3YqGHovs3eznecUdksvX5NXsNqsGrfXNTq6H9Ca8huJ5b5bnqcctXDi4Q63aywEpeFj7BqgLSmub4R5xeY",
  "key18": "2caVw6FejAYAVUP4g761Guex7FmWJVKD3xq18fqVbNeZpfgZBpg72jyoRbEMWB6bMYAd342uCN3BrUEdKsxDCjSb",
  "key19": "3ywfBnK2yGnsN4Hm1oz921dCxsUdzJ9VTarn4rMu9bFWZV8G4kBi9uh6N2eJAvDzBvfa2i22H6qQdK2QkvMmTDp",
  "key20": "39w46Gv1dgzMGcAx9ve7dXbob1GaTLWX7ykQuFdFn41K1nQgB2dS5BhMm3tBanTrRYH8GMJ3QZjdvo2MN6Fv3mac",
  "key21": "6zEiTTWru7r5bycRGYunNE2SgGGBxGSQi64bDmchKWDhNqdJFpCnxjsRia4pr3kRAszhesHZPNJX2bb4gs7rybt",
  "key22": "5a9wXkGq2VR4sMp7KovY2AB8Q8UfYjxXp9UZivbdrbhomkGnhXGezEQ3KBNWWUP9UAkZrmybJE7zUrJqHykp97Po",
  "key23": "5v198hKhR5cYnSKwytFCT5SMkSTZmLC9G6w4HeyMpoo9mt8Ct18XKgRGGkwJavnRdFG7FPFopP15drkTHYPjtLXb",
  "key24": "2yh49cuWyYvBTMmT2vR4mz646hovZTWCS7tamJj3C2uPEpyQhZ9LyNvtvWca4XNEKGUjuTyEUPUiR85UwjDYM85o",
  "key25": "g1xTnD7A89KdA2J3HZBREw3Eoth9MKDKZGEiwfztJTtcGTQ4tNvxipKXStVWL4Eu7KuKzyqMoiSNvKWZerP8bzH",
  "key26": "4zEqbERyqFJgxqvPhp5t8mikgzQT3pbyAdVgo5sxNJ87Z2RPNyZ4xoznqBHZBpd59SSZQH8rWaC6V5Yon7Q7VmQ8",
  "key27": "38Gx9xPkpxMqebeVtVUepPj8z4rTsejHvyo2CXnnANXGAQHVzeYK5Ekz6ucrEPAH9sYL8SkbRHzz4CsFgbxouwLB",
  "key28": "2FCia2EshTmxF5be2MPcxhWSzYBFh14NykMivZ3T8na7te69eENzeeVNPZjoZyCRotTwLbGZ5ASEurH7sgQnvkNo",
  "key29": "3RTt4i9EKCX7zoCGkyE1K5D5ZXyq12BGkX2quwADh12n8xCbQ3Pjik8DA32uYWbMGMTZVEAWT3LHPDW5bDXnWYoi",
  "key30": "3yrQv7g4JpDGX9qFEinDvhNJb9AGyMbwR2NXtkBwbLeU6W7eCDpKqixToJSKeQont1YBjA8LzsPHiy9Uv4tMaj44",
  "key31": "Ht54CE8a1f2RtFchv9TwTyf43TGMUHpZvrFW7tV2qJ6xRfB76UMTiyiJEdC5M7wJD8DenLS5haR4bH4KfRR9L9Y",
  "key32": "ifiquSHxsJVupty8ZS6gCQQr8c34VaNtPJADVrijcDqKjREQj86AQDFSHcBYkGhj1p3n3kn6Dne35KW1RknCVDR"
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
