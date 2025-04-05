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
    "rtZUP1GoxxWraQfAwfNfriRpesY69pNnhe6gtehfA7p7ydf3DbYtYx1v3QJMVWEUz8nKJufAkNwBGej2a3iZrsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3To4dU7cTsMvVp44t4DwM3oDxDHuNwZDA2ya1Qmj4zgCAzuu16GnNyuwwfQ4UyKG29zEaENrwyycUGeE83taPSvU",
  "key1": "2oL26PHLUaHUVSYEkkUQ88fpLzefSCk6aSxLif9Mu2dzhCLup11XMcaKQ9m9cxqPsNeJe9ggu5QCsSbPQttzKYxM",
  "key2": "g37G7yNwPCjU4u2Mh7Uh4twxtG3pM6sbAp4dNxZq2aDJs9nNHkFQGL2TKyR9BKugM7a8SiqtXBYVEeNJHk94arV",
  "key3": "5LCpF8iX7nzpSHBrvwhueiaQyAAy1c5eiKmG4HwWeCF4xgzHBsFtYcCfMmokWvWwirXeyDSKWoHESfXKXdSzK8xc",
  "key4": "359FPoBu3N5ATooYwUSs8ikY4Cw4CUzyuNAGR7eW5VznhfrczGrdXDwRJvDV6KrmFNrc4G6EH54dtCf9tY1JMoZg",
  "key5": "37K7ZixD5ywsL1AYyas87Zys9BTY3KwXHKissxZhYksrY4QVfD7ZYNkYB6uEhVSFfTCQX6TJZoxFUCLn8XX1b1FA",
  "key6": "47D2aWjRTQnCeQpa9WNrUoh1rSr4E4METk4ZbbW3bbJamLukeme9dbBx8PtV7GYBjEoT7ffcpvfLMjHrdkQZiByL",
  "key7": "3BzKmxr1VUEqzMNxwDzWzGhUWpT3Qqa3y8wCvfE3DUy5TFuphXwBYxaoauwNusHMq3uJfaKFKpkfo4uRXeitHFG4",
  "key8": "5rDw1uYckxkYnMFkH3vJurQ4sF5BDQJWLXURCzAjrZNrQV4Q6n6XvupLBuYoWcNcvT3GVEBT36QPHMgJEya4Ujvi",
  "key9": "2L3FpsQinCAN19atbv6vdWjni8Ywy5hXDt8JvFfBu5knwr5WYh7ufPo15vjPQDJdd3medAfJiWuZpM7nkhmA2x17",
  "key10": "2F2kkTKXg8xCmerrCdU81euwZEj7yXYBG8N9VhBxVmXRgk5nJ8t9raFXy8UCMK1f2LjSWRb2uDw4zf7P1uxgLVPU",
  "key11": "48rZbjsPRPaFwZda8bD5P144Nt36pf5BmdzLVv2cWbWopXG3EohgopFTcr8BKX1UoNmqHcKRuWXyCzFDuBrfGdtN",
  "key12": "24cGFy4qrpHs8w7RBN7z4GxpfCURQzs9qfoZSrsv8ekf9xreYo17JAtExi2xTKEBxgAVZdjSzWQjeKXcB3VhCR2D",
  "key13": "5444TUzMf9BZhrpm3DZbARFNTbxDuXuUGieCMotbJcUsSz7MmS2j2NaHSzXPNM6xLbETY1cK55bDASTyVd2N6yii",
  "key14": "2MUkPcd9grTCFhiXt95uX5w3C8zCWAmZYRZyYM6PuABbfhKBrKQGqKvztXkJgTKia8ZPyhtfatND6YSMcsxxLiFP",
  "key15": "59S5YcfVXLWrDBbKiuS29i1rqAQzPTrestx7gWfqG721J6okUnrkM2sd5cA4nvKZs3QwkjayZmzrCMFePRf33WCZ",
  "key16": "2J68x2Ucw2xYmm71ae6tHmVe1tnJGiWmkzTFWUCyjF7h6o9B1LKjPhK5vTt2D2UzLSkCaJkQtA4dJfZGUM8nXbX1",
  "key17": "2NvtJNF665j9ub3LPFidK7Wt2V4JHMbSi5suFdaZn4gpPcGsKPNPbaRnt2MXv4f4SRvMjoX8V1JYWLNbun4eLDFe",
  "key18": "3CVDbcjweDXKYAgj15r3RYzKtb4TPsJUi4FZQ47M5Gw5XfPAxZ5dmrJFoVU5mdpYAnHnmRGrPrRcoh4DhEeJX3oZ",
  "key19": "44JHX2CS8W9QCVYQZQbzGEqvNxNtwYALvKuEbQMJUaaQxHqdNmwShKKGvTiacHiafFjJaPsShHwh7ra3PCBZ7J76",
  "key20": "2mikzibG47DSt9QcRa4cRNq9HbLPB1qBeUSTBtNxbzFTyZxiXnFPJdjmTzpe5FqXWVmkh1fe4vYTSd58rWzxuLBq",
  "key21": "4MkL584mggucGFugm7usvA3aQC3oY4YmoHcnfBSFoM2bQQmC6ixwDU9fzaQpNATU1nZa1KiAe2V4WTUnn3ndA9ZT",
  "key22": "eZ9dD1oLfu9sNxEChx8vK7Dc4b8a4oVpr1EKXJpa2yFpmi5pJAVY2JmGEoKj69V2HUcy9DhSyjx78uGJEPn93P8",
  "key23": "Ldv1ueiPrKyDH1RPaoLwc5x1vrHDBuFJpYF9AUs9WQVr4251YaV7Emrf4uP17iizVvR4SbR7N4GUMiauhkBbWuF",
  "key24": "5ush6JoK24t9dr735WphfbdGDLDsQxforKdZ6YQcVsekphZ75pJ1XqwPDhAJnz3Gs1UA8dMiwMBbRWUqs5eQab3u"
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
