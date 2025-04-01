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
    "4SDMMQghq3SEmhHFQ5rxr95WCGzzgeowYkjXPpi6p9rt9kpmuKydAgbYZFKMLg4vtwajy4j66u26YQjGYvZ6mJxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gp7uJNMMukMB6CUWVtoYJGwsg7v77oyJ1LiEFzEJNa3ibt357ZqXMJUNyE2xfhXauvcK8iprphdqWYLpqeWgjAX",
  "key1": "3tRaiH3SMN45uQUPz3P8ky1rbkn6m2WDqcs6tKSVMqR6VGicbWSC5EdRvvUKWRFcPoGAcYYxvLuQ6AC7FwzNKc8i",
  "key2": "3xPHxvcBrk2AqxLLLjq2W8bQ7TYQoSEpxauts14qcmFxAaevPznD42PhhZWehy1Fyqo7XFXj7JQ5qTKVMrsqSwU6",
  "key3": "ZEE5EBeqWG4PbNZNbWkZGM3Ncx3FzQmoR9XPwWCvcnx3PRArneh27JzbJKpQGVNLCahNMXpDtvfNAxRwmAPPvqb",
  "key4": "4Jf9cwMbhQtNHRh6y53C2TygZdmYSDTSg4yNFxLWsyd1aih8rSDrFoRzmXAy9n31o4SD7vxLUHo3REPNqx4339vr",
  "key5": "9Ud1d3X2y5Rt7HqTr2hbsNmKESVa8BgJYD7JsCKAZ24E6EqfVis9D2bE2NhUwoXRLEDgBotgEuah8a8MtT4zkTL",
  "key6": "5N2X6ByNqUVAeq8FMoFxaYzoSUxeQoHj7VZFoJVsrxpfaNhKoeQhm3LZ2z85jcyMqoRYrWeAChjq7bhn6R1dNXeU",
  "key7": "UpMGjYh51gvnVpeFJjspoEu45roNWfDxGDUkJP2TfXjL8K1zDuPHRSybDaJdMetVwQ1AAG8xyfzLv7ArzucFoD9",
  "key8": "3t7f9VHLX9JEU46Hx7975LjezR8a6QfTiREt2SwCevLAB4jGXTyjgCHMehCx96qowCaqMJhWZjwY8WMCMezXEQzQ",
  "key9": "48i2DF6DQVZUVjS9Lr9xxNCky7aCkNANuAVLJWbGzyuTEhcgsPtKUhy9HBxBTvmrRGXwHp4i3fLe65dVE41zjYr8",
  "key10": "5zbaAdXysh7mq95g48SLM63aoKovw2osdVz2SY2XNDXNAk93gowxSUjuowEXE3UigcgS1iBsVnUq8g6TjmYTWdXo",
  "key11": "5XB8xf7QhqBp9DUx4RGpaSBzdgM637DiWGUKojEzuaUX5MQ7fWpXkuYL18y1koSYLszYamKWEnZQKQ4EhYgKz63D",
  "key12": "5VdbybzGKjKzxAzUz3gWbG6N2N8CyRfN6iNkLzoWa43TnFvfVMyvbwC6AEwsvbAnUJBzrZh3YSNtDonJtLr6t8jt",
  "key13": "3317AoCuECZSuEvruXP8Kx2TYyQR14TwavtezbSoa55KkhhLFKMVRPVj8b556dt2vgK4xVZRiS6S6EdJ15qRjNj",
  "key14": "2hNKSWgNEncZnWRHGFXGHMdo56rukiFa9Wj4yKxmgE3oZCV6rL1AefUMWGMyNRGCdyuh1SoaAXnxtEzhSUecT31g",
  "key15": "417P9XzPwgmoB2H3YAbsYdJWC6sVSoCTgHtDUkd9kq2EmVLj7prpJ1mdRRPrKg75FzdN6pnVERiPdVBMHTHyJbJe",
  "key16": "21v2XjezFFGYEn7CrYo9tk8aT91UD4WNN1FF345aCLMiS3KTgtXj8cvfVKNzKGpqhhH2MdQRZkfLQbBUZyqeVbdX",
  "key17": "2MrVwUvdfEm7j1LMmxN39noECiBpPT7ZcgtxHhMgcMn1KxJ2H246Q9nsBeMkJf2nZJrskhqHm6WyxjW1dEoGDThP",
  "key18": "2Ehg2ZR7cANCLVKUTbKSVjVV8EVeKfX9aiZfxuzCTWVizPP8VN8BjjmRXq2LLVCT2opwc7R2nY1RFoH8PiHsURvF",
  "key19": "2NDz9mvVAsDSWGkrC59uriiRzpq6VLpRW7oe9GBumFaJEtCk4usZ37mrEZKSpxkEca7y18uxNGmFaNm1ethqgAnj",
  "key20": "25SVsPFucXQj4vBotLUkiTChQBqiqDNCHJHbY8XrN1akHcYKJ2sremZPWFcpCWcVw1n8BKWbqRq8uWrY6qyzixoV",
  "key21": "5xjc4AJ8RvnSvJFseQJEmYiCUC6NX5wkaCqs2eHUY4TVSS2UBYhfGbpKoHmyFY9JKXVCYTkTPfecVZBDeeZsMfLT",
  "key22": "239HpLAW2AZWdtgMuyhkRyRjzGU4FFX8ZPUXdQfAhCGsCzYoAAscKYTSg8MBj5Bjc8Hy3SkXLzjj2D9ed42HAwMi",
  "key23": "38jpin56SjzpFSVp96JgXR8fYW2s4b7iX4U9PKmRaYXdtQRvfoAHMQzNMwzXTPCcVrKQgiyhBZVb416bwSSzqB7h",
  "key24": "4iqRezq35SwVNQnafj1JJQSFESDn5MNekGVk9ZD8k3RoZmeDtsyTa8cDhXytnjXqaTLyVooHMyUFBa1K1LPKqAZv",
  "key25": "3HuHp21W8xrdbwFgTjKDiQHeUF2xfEHwP9CMhhBn2WaP78292hm9WExfRy5SEJeJsme8qz35UP9VodQ9px1k1U1Y"
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
