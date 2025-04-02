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
    "4h9g3F8KmBCMJZHrW1bMoSwiN7bWcfVzihADmgLNoagzEHqh1eYvDubs9s3qaWMGcamDtSXYGKgUM4nhCUssj7of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ipnDe9nXYhxEvEM2wSooKsSGJVHMWhmQdQSAem8DQk5eMFc43a3Fcjp5xM7EnssMiy5PTMPL63DMKAUuvo5c8Jf",
  "key1": "29YRbZLz8nUsY2E4JKgd1fQJFfNNsbREFEg9bFzS6K4ccknLkJY8RobFgim5rFvWaERWq6GYnAUjz9VNiWaixg7o",
  "key2": "w9Ri7X93peh1niCXETLnvQTd8satBWneuXGX55fJTZ7k7rXP1UXbGTSbUPBpRRH2EtsSLdd7vwa5WjBDx1KaYX1",
  "key3": "326ZwgRRCPphreZq24MG8Rhq37gDWieYmizvomVSz6v4quLCSiuVeZTsZ3F8VGodEutkZFS7hzisBmrX9TY7uBiA",
  "key4": "J5B6zorRBpEypwpGPkkAfaxP9X5DuXEXPRTpyS7axDZaQrnuxCRRdB11kJggwgSf1RqeADXHsnEuGU3rKYhwjeY",
  "key5": "48W66Vgvi26gPDcHB5fb7aQfTeHcxdy2iPbLR2Xgtf8xSupDSzM5c5DGytuRvhmpxGFVnafW5hVrdAjyQtRLkquD",
  "key6": "3a54XNx4YWS5emexgwR59yHZX87MwyajZdT6rWpKEkxZ8V3NSdb2FEgFebjvbatsMf2e1EqLHyPLi8PoBhaTx4ma",
  "key7": "5FCSMjnnnbuHTQt5pYxHmuYYweUrK4oBXr74QAtpGjjCo1Y2Fh41P9gDRDDHsY4cAsDAqaaPYpsS6DYMHQ2ax7yr",
  "key8": "2sbt6m13YZT9vnVGrPBmtomRnjz6gJz9q66J8d4wSEtBo8vuXgzSm1c8LTyZGNv6NiXAVM3YbPJz3P9P3vQE5rT",
  "key9": "5X9Qh6f8PHNQP87xvov5C5NDat9XM88o9F8xsDhx5ZFpNyZvwwWD5tMJdTy3fJNvF9oAH33wAqPDHa3JVkSBuoML",
  "key10": "Eif1LzV8FnuDAHP1opcWvivpChS6QA7m1wSpukfnFgFMaAisyHKYvfB5HBsigmHSsqxSLpw1t1sq57YrGs7DZQh",
  "key11": "VLmq2MZX8bwPuD6pDsWfc2JUJsSqEXTJfWFUQXCBWcX76AnZUPEVmYe8paMvfZF4BA1AaZAGtZTrY69W7FbHpz7",
  "key12": "DQqqBCXBQW72WV5r4zSguzZ5X1mhGs9M1E5zLEGm1S6tHY4enL8qZkZPhHMeo1WXfDqsQK4gdwbZJPULyJuRagW",
  "key13": "5wQhZYme2Uz7hdXz2zR6EwWs98jJwP5BDsvnuuRkzsAw9fpcrAtjs6pL7FL4C7FPMZgSWugQt2K3rF3DAjz7tLQF",
  "key14": "3ExbPptL9yU5mgs5P19jC4bueJ8Jbt3iU9xUFyWqY5nUA3VX5y7DsdV7pg2a6hCCb1LaSyB73PWbfsg1zJVvUXnk",
  "key15": "4rMqBzWF3zEwWyAvxc5N4kQo92ycMUroxSrMK92uHpKopcN85S4EiT7ddo1V7jbNTY2fN8d17prK4NTbKRkrzxfK",
  "key16": "2zM5zjSDrcoB1trK1Zf53NF7LuPskcNSMy81qGAPLvzF9PZ7JVRX7gzXaPsNPBya93ia17fcL6g7cCmk1XzT2hnp",
  "key17": "3LY2z4ccP5ie6ctij6iMCPEHMjwhJipwxNqRahSWp8CBZSUh317ekAnn6KKP9WC7cExhFCsBteKWrgRXi48a6BBT",
  "key18": "vCWsY1u9xMQGG3Q8PxSP7AMR74RNZo5M6PHeqdTYiEJuMMkPMtLRdAjZy3oqsMkvR9BVKAu6Vu1H9TmJzfW1wp4",
  "key19": "4S8ypoYbeoh7D1ybmyFN3JVWaCJREsjNEt6hLaLwNvvMt6oQAArpqGfUYfvPRz6U5qBh2Mpz9KQeuCk4nXYPzyXm",
  "key20": "33MZsLo1aB6iLsMoZZ5iHSXpKtA7HsTCydgkzQ4DTx2pW2kAvF19tR38HcmUAgw1z3PVaZogr7iV7iruNZJwt7us",
  "key21": "xCh84QALhPc87x5sLmxzwVMPMdZRsL8nt1gc98c1DHQ4d8FG3fjQ3GQi7xv2JYcSZdnSS7FSnaNVg6TwnXp33gj",
  "key22": "2UrJdVSh2JtvrLN7YuXpysoECco5iA1D5xSKsSbnqT24BUa1uh8F9iMatGLe3fsGJ8p1tXYkyQNSBRqMKYAnH1dy",
  "key23": "5TjfxLyEb1BwvBFnBHHNr4M7DnJLHCftM3VMmDJiMAmGhqFZCoyUPhMjVzxs8SdgwrGXqF38w4bAARZBaemHe3TU",
  "key24": "4qHCTSEfcLQXyakXs4Dhsq1gpCHCXnKT4k6yTWPfcpjHvctPe9kA7YCSEJb8oyNJDwjiLYidz4yEKa6cRwiLQ5SL"
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
