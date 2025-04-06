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
    "Nh56uLtG2STZm7NRxFhdweMGJTjVbLizs2VUjuaytq33R2qmWBFwLfcV6zpcJF4jqsyVcjzD25U5brkxJVp18ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mg8CYUdXsEmC1vFToNXd1LkfwRu5RzmwB3fWppEZ7Yk6iCyCknUFVf74ZTRTBpAZpJJ2UyBpMNwpm4j7utXY1LL",
  "key1": "ZsndHjkpGCgbnSD4uHHKSFnp2A2tZhz7Li8F6YSQePH9VczScTUYzeZCMEA4oUnZPWn93VyzuoUZHqiCTGZvjrq",
  "key2": "4RHaUKugbzbjfBYDKPEUEv3jgsDaAxz6B2QhQw447K24C3pC2GBEmvp9tX1taokzN5Le37iSjZKpL7eRydRLoRXA",
  "key3": "2txejmfJM3Qqn7PCCV7nJMgrJ2dATB49Q3Bkdq7Ajdj6qHJTiZwoxAAKSADdgPzAonYqYmw2y2QjtiHQQpKhs8DJ",
  "key4": "3YiKPUEwWJSjpEq1K6Bvo6k6g3fsfEWtD7wMN7GbtQ9mLUDTY5hKGsXNCyvj5kaPU1fJuw4fF7CSr276mrnpX6LM",
  "key5": "5gop1bApCjBwyEv2EvWruapz3CjtCEniC8pd5Tsp396GAPqEpCMAur34nTjUdQXYDsMyMcT9hYc5WPtqAsZMjYfC",
  "key6": "4CjWL4dkLTGeQgA4icC4CvY9NB7XdUMAgbHSQDT31UR9YWmbH9FgrhjrvK2oAeqMJXBkddt4kKrF3Jdbmx66uPFP",
  "key7": "yE8ZXwT6qi47wW8zBTMWQmZVc1pybhWHnHEX3yo2gu4vqJR1S4k7ipbMDvZcKKi5kkbqtFNzYfz168yjVsCLYsC",
  "key8": "4sQBj36m77JvvA3EXYZARZVhwKUrnDcim2xRa7cbN7mjMKurkkyuuMiqdmpUwq6Q4CKC9idAZQrLVjUjqU9xv11S",
  "key9": "3rowx3c96jQUSuHc8abuWAXVuniNtLDEwiZUGhSDcodixL337hp9QreUPVeCmCBBjXTsY3AsojPZfojYWeud172B",
  "key10": "2XhEr5zhaurcDyaoWcCqEeADdjZgtY1fwQbP3AKd9FdEooB1h1bbjMTdxkQ1cDb47HXV689QhKGfxHGixTjUH1HF",
  "key11": "3XT1n552CoYJGuo92vAmjMjfk8eRVuDasbvxj6cKi2y7ggDr3Cbwfe9YFADbk8kg8Vpe2n8esdGKAzbLFtid5qmZ",
  "key12": "4E1W1T7th6MUVv3AUoHydsXgCdYr7ihUT4e5rHkR5YJAS9vUnjKycZXb5mAbNedgjKZXSdoWFoj8sF57jKfmJzEq",
  "key13": "dafajnWTtyxeFpi2HEMLfU7xqhEUnJAT2faH96mj4A2TpA3r6Du5Shg2pKfa3NdxcUzLpigHL5dEswdSaZuSj9Z",
  "key14": "3VimuuHqMnXKCV4WcWTkqqUEj9wCP5Wjip44v2G5KDdnzfUybX9z33WwEeT1H3z4ZoS8d9yTwTuXUZmhFCcP4bqi",
  "key15": "u3xCter8ueu9RKB8SRW7pGB6AXfuDNMhxGtn1bxSXE5vDoWp4Q4zDHjjbQ8ukw1SdrwZFPZB1rTe3rJkb5FdnbG",
  "key16": "3dN3kSZfXAMpyPxGfA728pbahrFv75ZFks4Lb5qiBXhQfDspS7Mta12AkCEcPG6YkA9t9A1tb8ZohiZTjjPZA4iK",
  "key17": "5WsAy1qz6gF5guqL9vsN5SDGcF9ZZHbNNwkVmbHB4vvg7D5KcYt1zfVgLQQq22gjatuwuMmSK7SuhogRNxukVVg5",
  "key18": "66oQU98LxLJrbq5FK4ptMM7JENnSnZd9TMneMY7UJoypiLJBWMvqK44vAHuQ3E2cWiaFKpP1vGwFfX1v3KezLKvT",
  "key19": "xB6qD33X5CW7LYWdK9bfh4ri8CP8ukXBVzwkPByzJWbiTpmg2w7XysvFkHy2yKh6BbiS77GP2iKpdpVMuFZqQXc",
  "key20": "vEMHiCScVyJiBean1NxUoEdy1Ee4wN18ehU1ymthJDu3qJLHwS581WeyudBkZmyijiZyUNJimzEG2Sr3i7C3WW1",
  "key21": "5P4NK5UVJNMyvaHB6BdCGYXMcvDXFuGXLzGFDDgEt6UyoqBVJL9vxnCZJtyfYmetCeVtQPYXcEzAVaV58ebrXmzs",
  "key22": "29VeCcKw5mtVWUXu7wZCthqtdEmSF3SzBmP697PdHCFXMzqeKbZKptxnRUo5NHMsiLPDVbHvQhGZDfmCpaFzEhni",
  "key23": "5bM1AmoJpWtB3bHuiU7jhqMM1qkEkkpR77x3qdXt2e5sbmAeUftmgpuuazLUWYZL6zcNHDsYLvgvMTWtCWfs1xwB",
  "key24": "59kwqaAWuVY55PgEnBjkw7RSaiyzsTQN2TNFVnaZ6bGqJ6P7Hh98iUkr1fG7Kg7VdGQ7S7HrcPBE1TWAFk6xCX3H",
  "key25": "4MSzdZk8f5oeo9BBF1nNwfeJWNVEUqmX6DyioVmv5hTd8mqF2mjtW9BBwBD79sLdrbVaPGqm2haHwMKm6ivfaJfb",
  "key26": "29yD6zJPzmJApbYwbjDHAYfzyU7ucAGC5TM1wmugi8JSw6KL9N255bqUWWxiGSW6RjTjN5KwrWGU8NcKzmjaHaYA",
  "key27": "37yxMMiVCWecZrDEnSz1iXBEPkrZmYGNnrVxXdaVH8uQYGYZFppbVViqGbcUJxgzRwavSz5FTaVevPSAKPMePvaN",
  "key28": "2iHowmjf2xbDAAyubkpBFGsEVsnDp7HSZPFU45x7c5jWky7pR5DhdXXA4pvKeNMo3LSWMVVsu6ZctRFYhwwZaG7L",
  "key29": "DCsuNi67MR2XRey6GdqD7FAjqTzedgsBALJ35LJPiEHqWv3MJkCQ92S13RQRTFoEBu53xU48MvqGwc2rHqqkRr4",
  "key30": "s5cPESsFc3pswDZauFFc1qs5RhnqdEh28WvgwW8HdFCLxLonoHcD5r6AYNZuVK4K4uFaiYdkzkniyLoX8VkrZMj",
  "key31": "5zXJ7dLMMkKSU9QUJuiHJfWARAxktZchVe4aNctM4p4qGpaseJe4dstVkrM3TuwubmTyRKydNeZkfxfQLnGD9Gob",
  "key32": "4PVLeFnkcGu1nNxBz2XCApc1jGMFhe5Qy1ytg6Yk71r5EnDB1nHZn2TZMB5eSt5JAo7FWAgdwtigxis1NxQgxDWU",
  "key33": "3ohqPq78ppimMT3dbPp8kXiQGo8pR4PLkmb5p4xYLGrFMdag6JG1nNhAyjjeaqWU7fkXAczRKKHkgvKcQ2Fx8JYt",
  "key34": "5xHYNzQhDGzp41KBy3SqrgAvLiQQtiNxvn4jM7ZYDhBNuG6rhUULFBc7J2hpMSEQ2CzxoErwYr2bXVdtHd4Cmdif",
  "key35": "5KWpz2s4PZ3zxYtqFixjxKirK6xSS5hmc94wugmPAHMbTAWNVdKTH283B7KpEubZqk4dEn9jyk3ycYuHE5c137Vc"
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
