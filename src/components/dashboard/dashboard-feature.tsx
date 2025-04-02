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
    "2WE2dWwCptF3FLQtPXqWR1RSWVJsnmscbxFmam6xpuGDNjEvAajrfcXjTkEiSsitnv3YYgh861m6jQV8A5JpZFXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FnkDwJrtpEduzDBBzeeXPayTzSWLNwREqHMB216hDJBSuUQGj6uQ9iE4oDBzPQRKr6HQGhvCC3kqVrghZErAPxu",
  "key1": "5mgoGK1X3vmT8xgrLoDZBbhU6WsnHQQED1EcfpQyHV515ShX36PVe7EwaLVXptomNEYN4xbuajpRW6dXbbqngRTy",
  "key2": "2DMUxej8nrGk2uHDnC6Bnui4CafFYWyEBMKtefqGZjV8ooMpWGqPa3KiDZ5brA22c6JxQ66hmZGK4srtoGzE28yV",
  "key3": "2MHewoxmqaXXRGnmmDy1WwuGqwDA1F4P37o3268VFC8LBEDoHFz417Q637vjkUspU7YuoKrDqRZ3GqQsbfFRD6g2",
  "key4": "4PsxnUrGvvdfLt2CwGRTW5EesvmMw4Yi7j3b4ujMhDvAkw1cyrvdgyR4Xgr1Ufob5fgan992xaoFnQJ83o5MQRJi",
  "key5": "61zqzA9QFP2jtjsZZBqw24hEvS9UqWqW8skoXqobKUiMJVH9WNAiuLxd731jFExDwEfozqg4FteGp8bdZjhAEr13",
  "key6": "4AKYbReWFbVbqPdqTbNubZDMYPw7ZPJ8rtmCsy5PkoNRnNZbn5ZqZr8g83rMWSyfmEGqa4AMk7uiKPyeqvGq2hQ7",
  "key7": "2R9YdKcJXERan6DBLD7ahBm47znubJNCV6ZxEB4ezNsonavx1cQATYRRx9xgY6o4aPdNetSDDNVTv44odZ1avSZm",
  "key8": "4uFjf65H6La2pQAxaLvakwoo6Z1dmpbxfeLV56QWWJZY1kdL2G8UQizTmwezQi8hY6ESepapZK5Zf2ye5xhXoFmB",
  "key9": "esETuS2z9y7hiyjxvVmLPcutgjKnLSd4u755VpNoi3ZqN9h7eA14vfxwFHsy3NcSX8CVyGVVTAJcKuyR1jKE4df",
  "key10": "ck24pKte2ixSsDouXoNzmEGYKCLjtqGucohQGePGj2ZnLhSZ6i6P5cfraa32H8vxSg5dZnqzyndUYC9MgtVmXbK",
  "key11": "3miAemn8ACovYEvy9Y3dJjGCBWuJAkSvABCshfziZozaih7iab31Wa5A9RpY5teway9NnxP3HepLhJKAxzw5pYhp",
  "key12": "3cFEi2Z6zAKbDKNGPFkdsKnfr4vyygrGGEC7sXbFqEaUsyC8nMAFVGnmkbmSo6rQusFS1vrhWzsudMoMZfEaTdgt",
  "key13": "2dpknjve9awHWBTGEmorkuxJybjmccufpCJYXwuNSmEeedyBXCWBSYeXpy1bUbzF84WeYDySTtytUtUJcNs9UVyt",
  "key14": "55KXdqn2hVaqN1XdgjtTPXscprV9o21u6cFiEKSyvDMqVEkvkig4YwQQW2ji2XDpZjZ2tXrh55Yoati41SkyjfBv",
  "key15": "7hGBgYmqPMRfKMK5pyQCmhnTcmNrkeNuNQx4Uub1AH8hY6KjBaXsEqsjvmLrEE2FjPaf15UL58SSnu1xgGHWzFV",
  "key16": "5XfQvabKSmxmSopG6PcZz3JRqPDaK7KSoNgrPjFH6QqKkCLfNikLRcQjYdFa2KB2REugLw14crHwPfsJGEN38vdQ",
  "key17": "5dzuHdUKQdu6qcXKRYhLuEyYBCvSf9hBdivFyskrQ4tuWbgLxRspnJWje6Vho3YThsWz9cNNkbWwRZXKD6wfqZwM",
  "key18": "59K1Rxu4iGGCP6zCTMsy3TE71eizxhxE65NZQZtDiSsW7AB9LFkSoBZ4vmmGGcfjsRrNwFuuDhw3gfLB1rv19beN",
  "key19": "ETSgVMaqmaYdtu9XgB2G2vx6XTLBt3z9hnUeH7zvFF1itPjuYem7g7eqGT1bh92Z58exbwC4sNR8ao2CZUk2mdA",
  "key20": "3qxxLd2JkbJNynhuc4Vx3QSfxhMzJsZJCD9ngbvN5crqAWiCjgD1e15QEXGyioedaYYioX84PtVTkpGwbeKCPP6g",
  "key21": "5U3SinE8hkSCw9JR7maddKPgdn8AYTg5HauJvR1VDgEUGWUdzRrzxAvqxuPx4ETGCYGri71jmsmGcE6KMziGU6nt",
  "key22": "4GXRqatuNNELTMbanTvRGfAdcSRYrpgFmUKFicvuWPPUMmrYZuzmyHe8dWjQX93yi9ugPdJje4kTmB3ZVrb9rF5i",
  "key23": "9FbYCvsUfHLqYaN6kLE2ku9HrnXRWH2phKYCSMAEhsqHh17Cbn3gvmbHTEv3wyKqiU663BP1uT3Q61WEXxs9i9U",
  "key24": "nZ74gG4R7QdBHp3gGNRMqg9r7hBQnswRgpzRu2SYxiLTMHNRT2mBGzWKH4FovxdgpkbMXaxFTTAvZXbWbp88mx7",
  "key25": "4NydGGkoY8wNSBSKWDeHR5yKH3YQzwp5veKdDKy9g2y6fZUdNjFuNRhMB5hYpsaC9qmWs2zRZ1ANRXMB8PTHpHgY",
  "key26": "3z4zVMPStMabqssk4xvLMMKFNR9UvLtMEHbqNqzoshfQHawF9BCEPMwcJ8oJ4SNq7jXueWa2EysUyvZ7BWjYLubu",
  "key27": "2xdMYEduaKhpJa1bjuhtQjU5NxJfNHfiZmAWyFkSpSXMtRz52DsRy2nUaoAPWLNUxce2VjRo9Bd1HX5wAatJR8M5"
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
