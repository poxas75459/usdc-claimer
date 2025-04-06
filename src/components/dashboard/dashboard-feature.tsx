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
    "2WoEtTYf7N1fkSAT4eV3kj9gkVm37MakQ8tWkpryuHrSSTaUnrMxBX1BVpN2hu9WUDjA2hbKCCbrRyjNWPCcvPJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JaopoPt1nGfGZPU16w213vXPGioM4RjmuQDV6pRGfxKHLypSxBr1uAcEnH2J2QCAu6B7RcTwYVea2m8y7zkBu94",
  "key1": "4kAGhQrX6FaQ1Bxd3DSmWhDu86MUr1gWoDMApHRrMxgLg9MVWh6zKQTKHXeJPHvU4LW9LrM5WotEge3FC4JqcGk1",
  "key2": "5yGrVZMSCvtimixpVTqMTLP58UuuRP5tGFFoyd2bTFwrtrsSKqJT9cXfQFj2eoiYtoZssB39ywC5Phn2WBoNG3x3",
  "key3": "43EDt9KuwDjiUvDUjrQQJKDpXzBcVS8EbjwnnGgVqkTWsWYu8wRE73bjhiRW3ZBpDAVZxij1CagvxnE7sXVKRdE7",
  "key4": "5PV2DoZ9o9QMtunm4Uun7NSwQrLUNC71jyGGocEDhTz9PyvAEFzeEpetqYSRH5XjL5uWgp41EUuvkZdcoz88yrXN",
  "key5": "4ggGRagih3PchTAsG7xrFEuw8KGvKbtF8BDpcN6rdohLFVnDGzVgLhsXqPfjDfJgcQpgh9wvxFNxbFpSu72JzGaQ",
  "key6": "5XZMZArLATEC7BJHHfsUUXdX9EddvkucTY3Ra2KWkE2JT2y3FgckPKwNYhkji3SdTVhXyz6veCZhkazdY7gMs6re",
  "key7": "3KGEvdoddPNgQokqStV88xrnwPSnumUeKiqU1YGgoxgy4hVuykBuZxbqBnJgukFSvAx3gHpGtiqbziX6cM2AdYC4",
  "key8": "3F4p7JkmYnujqLgyZH7rHdYZ4YZozNYk7DFJXv7jNcm2nkSnRbgmVNd26zhke1JB5tgVGyncxQWaxsjdMQMEfmBw",
  "key9": "Pge4WizTZQ9zwnKpXT3xDbTeLFwot3FS3ZETP5GAwJo2cAHfXtuDv2W1NBMJwBFtDGJwwqvd7bvUX5DfGabfzeZ",
  "key10": "4JWNBbnaBsFSm2hYatatx7LuBeWgaotpbjep53oozpJ4nTwyz1sQ2srFFjJ3xE9VGDAuqf8UfqYzvwbx1K9at5Fn",
  "key11": "2NZ21fUkD5JJHGKEoLi8hdgTUurBgptab6AVrMMjVcsCVKGzGCbY7S8HF1yirjKR7KTjP17Vonh5hGAHg2ABXbP9",
  "key12": "BjWQ7CJzZa9bQX4Q2YhD1ZWtSKBN3ox35yjJyVnwLStQADuTe7Xpr9r7X2D5F1dCkR51vrQ9MCbp5ZGk4AUZRYJ",
  "key13": "4LpHfyg3daD9pMF48abKhzxFiuopkSqvkSHujnnr4aKQz96zF3Tb5uGTyLDtnzqDTJvByCxLvtWyLuKNkT554Qhj",
  "key14": "5Q8BCfBNh5Lg6ta6okfSm4qopVubCgYDHgY5vFd81Czf5xg6eoogPWSQUV2Q5HvvcuCU2pEwsdnj1HKYZLnFqunE",
  "key15": "5Q3M2gnFsuZrWkNYcaLVJ64J8R7hh9Mok9vrnQxsU3wn5UipKxhRT2yXeyTsmwo9Qe7JPqiZKENjw6xyBBnT7mry",
  "key16": "3u8wnVMPS1xAF9depcRzFdCkG5GpGB7h9kUNPrLCtHdM72FRZctzL1Mw38JEXHwuQbJmEhXzHeyxZGoSiKDxakWT",
  "key17": "4qoU3gExg1oZyMNnJLrTbtfGcxCm4ns68vBG1Ln6WKapFrgPD4aWVKpzFtVbaNvBC6afbdMjD6Y42g7S8iqvQE8r",
  "key18": "4ArWhRKtSMjuJNocKdiPvEg4Lz8MLEGdvnPNiPRUEHbbBQxdbRTUwAeanywjSAYW1wccCA3zMtkD9FYUjXQkyygT",
  "key19": "4trjdq8g8jmKNNnSkwspnxGeQzSSJyUyCNufRPvDF1g73G1yCErGu3NV3cuRxFZkU9RjCu4hVPy7myo34gwFUsMq",
  "key20": "4eo5aHsaKJStpE6tGdN3meBm4nWkMbcXBAd7cG43hbk6CkVS1LKv5Ci2QourzeANtDE7NT6g5Esjz7DJTFrSjFpH",
  "key21": "234aMjqDWDCakTJMyXxFFcoAyLjn83fVKDK8mahGKfX7r7vaPjYwrktgCK1KxJiFRqwvmkZo88pja3DyhMSV5cbL",
  "key22": "36N7iVnD3UdoUHmuMpK7xj2ZQQYSH2CQWtbg46j3oXnSx8hDwg3uY34hjacEmY42hodf199wAY2cmWBPR6wyJY3q",
  "key23": "4L54HDb59ShiHKqzeuaKXW64LpGmS5nwTJXWa1GGMYfm3QV8zWN8yp8PGThz4F8H1MYiZP8bik38HTXd2XNPYDL3",
  "key24": "2iMqiyVLiDHMcz9H17MP6B1bBLvfKkDCscKBSRuj2NcGLiZT8JVq9fPEfVWCqcei3huwwsWA9A5pEL89hUYxaCLg",
  "key25": "3FGqEadPV7tdp3MNejCcucZWKA88RrqX7yZyUSJTAdiqFATT7mCra5FG9iE1wLkLZAnab8TYCFwPFSBwhLAMV6ZW",
  "key26": "2KVzWF9CmrBG1NxMr2LX8GaXC3MR6o1E7VmSEZpaCJMHCW4CUNiApNCTpB54cMcp2m4JeoJ5WD4qsVaDqrxyZqSP",
  "key27": "32y8DuadkJRBnL8DzBLhh4mg4Uj1pf7gLuenrmuTFCw8hAiSkHxpb71jwuv7XJQv3KBfr4BEyjwVwWbENkb5dFe4",
  "key28": "5Q43SpPue8dhNhncGoW7JqNz93HzztE3giAsmzxmjFLQw9HwuohBzP9KTzWU73iLy8DzKXH3vE93gzH7jT1gRLRg",
  "key29": "AzkU1x2qXhFEnDj8XCFDBmBGWBY8t4n6M2LBgt2ejVq2uAmKGDgdQmTgps5n6Sa2PT7Fdd2o7oVgDfyP9vkMMED"
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
