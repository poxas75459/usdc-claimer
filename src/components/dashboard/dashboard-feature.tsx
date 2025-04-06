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
    "Ut38V5XvpQHrZrnuGBaTmkBcn8dXwtzoKWSdPg5oWjcQx6FjJfzr5aRMHFPVnePv7C2uvRsG3zEqvzKTBj4P3ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JTsB5PCXUw3VRo1bWrY6edRPPsrsgXaodKXJNcnnzHhLPjuNSLfqWGPo45dHT58Yf6r2swSJHwUF9iXmbSZXF5f",
  "key1": "2in8KAf1Vo2fwv83cdQJv2RyrxFVFQYN72ZsU3DrAap7DUxieYnSsyt3qLoLzqiu8HwsWBq6p1Pq5fAxgp4XwHK",
  "key2": "2jkzDH2CgB9WMVvP9AShczEVw2HprwFiSUo4vEPP2QAovigQ1Kf3cCvM4E6VzRkkKfxoChtm2BCHJhS7Ahq2anre",
  "key3": "tg7rwtZ6xY95PHoXxB7a6w9ZAUTxX4Jcm5Qww65E3CGWtsFJWtVKDz5WBgrRSCUbChsTnTxTbRXLmC7tWWCMjpi",
  "key4": "2kFbWB4A4AaagDKFAuhxQqd8XVrYjav9EVJ9Ng8MAAeaX1S68Dt2kvn4B9v3QT2sYiPkQ9fFTNzypSpFVzJ5fE1w",
  "key5": "5q5wMMPsYNc8pA5JnMcM1mdHvGd24cujovkrw2xUAQmgxh2MLYf9DdrfJYWsYjkt32XBd2pR3Wga4yk84kwHRyWc",
  "key6": "2GdXMtPUZut5hsRRrCXQf7aAi9bs87aE1RLiJcrdbuMX12tJGASJvSpfWgdLsM7Z7bZDpsf8HBy9nqcJ1WSRP4bd",
  "key7": "5qjXoca8eRRsvq8VKMH3R4abMFXdvEi5pJtBtP7aP2mr6V4xaFo937fhuUps9hnvLcYwq3C5XxSDP1PzuwXysMGH",
  "key8": "24JkReQFX9zNgda2ew89DcMCAbCRzNbxNbftMSz1oq9mx9TtdccsZT3dnHyiHJbAcmCjuLcKEJCoKmVFf1zCGh45",
  "key9": "AuWsEtLg9QZvPWjiavjNJQJqeURhGy82FjRvhG713xcZmugmPPEqbya8Yg3ZVMhgxuzMNLUe5mGa7ZvcpuVoZVM",
  "key10": "5nidVSZ7y6FwoiqAmvLDiQm9RyDBVMcZJPLKyHVpzMmRWDNk8eQexkwMc4N3i6oTMppPQ297i1BaLRthzrqPahen",
  "key11": "2ANeSUC9JHsnhQBrnS9v9JYw3qnf5LQG6j5JW1yqAFeUTV8BcPZxw4Rs2v6DQvqoBM62zsKSuYurMwzamMmQtuhS",
  "key12": "26ySyF3E88TjLzXTXEDgxjAE2RDshZMCWjom7jr6w7wiXZXom1cZPHYSksp6ahUGDHJrsDLj1JJNQEUpzRqg4oMJ",
  "key13": "2p5aVjhNe9LiWdNnFJ8wdy1gw4URyCCuEtTq9M6KpFTPaM2c1STr9B1ZrsYSF1MqsTJpjDNA1G5MbgsXNGQSWobW",
  "key14": "WNWCq6Y45yHBp2fS9cFLToansmvkW4PMRZNZaDaEM3CDJLHjTi97CrAebDhTnt2UKkckDQ2fV4MSjYjzzVXMYVJ",
  "key15": "37EkLzG752gr5CRSiyYT3yvAxAJXPV5hGQBGZ5DuvEsfy1EUqwUYysqmcBkzuqa61da21PUGFA713WDwoXc2QLm8",
  "key16": "3YH5yuyijN3L7gYJbXKgh5DZ9yysoArmHCxPcMJEe4hRuBCP3mHMpfPfjPg7XBSYGhEeug3fpLNXaAbssubiBJiQ",
  "key17": "4otWHQm1uBg7sWey9z84PRSR415UfiaVU2RGtqLWNmuPgG8UwLE7buUBPUqY4fsMFXJ96asDMKRjQsKNPWoMQoh5",
  "key18": "3rh3dV6p7PNVzBgX6D4XwiVFaZMpUUcCrFQxd4QUdTirFHeVZHsJ9cfyNHtLqqYqKkQee8RKDmFSu4m2w9nRgGn1",
  "key19": "5fHbVTqtCyPD1e7Nux4UVeSjEvdGdw2CZs8VfqyhVZvEYrbRsoHf6bqnDd2Pxbxd8o4ViEerFzeYMmJHuCWqrFeh",
  "key20": "3x56Zr62qU6rYnk1E3Xw2Pwy1U6A8oTrTAKSYP5eYubA2fBpYfmqcd5LvWyFupEexPVL9UApgqKtxeNLKi4USZU1",
  "key21": "nUSn3wwDiH4zqN4wKaWXbyhAcPTkatvwDgAJJyWq9qvVa3G33fLapP84azZoHT3LkYohP5isPX8cXBFhJKrZtjF",
  "key22": "DCLou3eewqC6aJhtqa928xY7AuKBYpb92UU3gB7Kw9wTV23PityTz2vbJt18crs23pybXbUSS1uzpNFkgC5v9QP",
  "key23": "3bH8Z5n7qzqR1XLZcXQZhkCoaTpUD6CKEetJC93UpdcNcAyX5rZo2BzWVmDMnTyZhPAgH6SpApBoW8QxBN4tRKVy",
  "key24": "3cUDTRTZk8LmJNQ7WL9c4BQrnSXSMYo2CAM4KMCebrdZSF1E557jyVW91wC6ZMX9darVYKyVm2DYJeLEad6EPnor",
  "key25": "2YbUhUzujpK1kxGrMhTZY3dqJH2NKkPfCrX8oPexPKJMUyVAun6D9pqqb39sFYHuvD9C9MRvP9jYS1bcWMehBvq6",
  "key26": "4pYtDDWffZPsuh7DsMW6y7WqtyCieYXDNYyf5tP3wjWqzF7NXL4QNtTrfQJ5JQRZTzCCGWjFe7Pd8LgcyZCv7PpM",
  "key27": "2MAXVNoTd2cpqAx4U5xPHJDeexPsP1sFFhPbd4yLTVBo2873B4muw7Mqpwr2MaAALo5Ei2pX8ozu6aWY4pZstLRe",
  "key28": "51Jy5HBDkJh19mdAXPnKNWwYg9xmauxzv3sFweNQFJaQB84wrKfzDSpsk9quhTBmxW9nNQni5u9M2gd9rVs1QyEf",
  "key29": "4HYg2WTqVXWpU37cCUWYQbF3dVcbPvJ94B6zVW9iHeCxe6FJR72AXf2zhUWD1bbfZJPaVzNU5xaPPApNiaJP6ZpW",
  "key30": "5w65GooyjvPs1RTYL7qbC4xGpYx8QfCj2uY6RmJrvacX13jHXD5B6RZ5yWESfsXfX1KXSXDUNZHnrRcH9qAKyZDn",
  "key31": "iDw17dLpPiqv2iivhfgRKywjiKtkBrmZ2Zb7hF2xzttRoG4cLTqgFeJuGCTwT4crdFma5P6oVZQLSUS53sya8bt",
  "key32": "63ehMrPboga9MhC5oCmTWjsvHZygj3M6axdU7CDYPqoH98Lg4RT55ncPj8sFaMkMmfm9UxaZYDMKJYwFhgyS2dLi",
  "key33": "3BLbLBPzbUwS7uMENAvvui4wswvCtP2x8fQ52eiqTfR9aHVfB6qMguM7BKXpCs9We52wsJZ7P2Lz8NADSeaq5MLf",
  "key34": "3eQVLeFy8yjpKu9s7G6s5fsgkxUYzbLUjrRWs1Fpnb14wJrHtn747TinoSrFYfNu8mAECXfWfgkPR4EcJmD7rQbb"
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
