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
    "2S5XsFNRZ2bMgxAUNAF1nmjdJ2LVvR37t14byayVKFPsCNqZcpqBXgKMGcW5kP9Z14Lhk643A9uH1rLYH3nGaUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LYdLNpbC95bhSZjNFjkiy4UzoqT9ejrTche6Wwg5epajem7cctg95vaqU9QHeaVtouL2k86zr17Ev2QxCk6J4WG",
  "key1": "2WGUaNtFWC2NCqzdLvWW8VzM9JK8LUd1ujW7q4Z5HHfotmYBZ4Fant3XeSv7Hsq6XQwYuCWqd1w5oyHGk1m2bEi4",
  "key2": "57k2sJF9KsKVepMgx8tAw9RJyxjFPNFWYmrGBqVZPrkiADUWheR2dCtMg5LMxH1p1H4U32bxaoYaggJgciyc6qfQ",
  "key3": "37jpFKZqQ4Q1DXinWBisVtA23rnWneusCWecWXGyePDusxBKt5VoGfZNBU75MPeVTjzP7UZFZk2b6QWjkvtfQ18n",
  "key4": "5b69ygkua3xSnGMaoAsnSteLq4TDPB9fCPvxg4fREjA4TX12NFNxdHNm9jRPLzicwq81YRV6ynNsXtszr6KjmVC9",
  "key5": "3dWGU7vy273gcvPFGmw1zG7tcEdcvB2JLFRVCNS4bvyiqAKnd5iV1mgxvnV1QjhJSmpgedVrfkPi18aW7v9uAiB4",
  "key6": "4qqpkZks5WQYXPedq9eVpuzFGyVxHRHzBJyHruSAscdgLFWZcP9zRosw2xsBhHvP58r23Ndhu7Ru5PLQma9mweTY",
  "key7": "3QdLUoWXB67vJ4bmAzJAkkZfXvPYm8x22VZrr9ZotTy8t2dHreZKTzbXHPxmQRYvMrieY5UwLbbUGnhTP7d6xhCy",
  "key8": "a8afYMHgFjZj4CWBEaeD1HHFgiXPsQyAqdmtFapB4pNfbLQcCJMVJMf4T7XfvhhUCPU9H1v13bJofoVjRDkKyGd",
  "key9": "4cbjqqH5hSNzY56BonB98Vrjx32tuWK8ivzfvWqmkwaFZSexDJniX93f22H7Y7ZFw84kGUC7sDyDvrRrFuxwVFdP",
  "key10": "V5bDmDnXATe7199WWAf8QFy8oM5H3tRu1Fa8UruvBc9w3ThswtePPeQVLG5equzH6KQMqfBzGzkNQAciWzpNsWn",
  "key11": "pJ6d7GYoYFZW1mg7MJqBzgye2jn287t1pGRu1CvH9xF6f942FkhVY4ijzytTyetZUWZjL2DPNcejW1jzqVCNPSL",
  "key12": "64DHXeqFonxvbG3wjPYqhimALJsRWwieFFakubS81c7FwHaq3S1X9Ad1Cc5ZnRc5Aa5n5qvutB5Mwavpzky6dTms",
  "key13": "5e5xruQtCFg7tAicg9EHyfCzeJn4qGCCfKD3puR3K1nYUpSQjEp3Azwf5ebjW8AGTqtM5U8E478CmtGaE64ydmkJ",
  "key14": "3QDSmDXotqg3NWEVtG9Cu9TvqpaxRMZMi3mJCZc42fqNaAn1LcHFF9BrtjAc75kDczsXwbmKi9RmDRX8B2Sv3Rsd",
  "key15": "2MvowwxsnGJaWtJnawshEpsL2yoYdAwfhYb4Sxk8aKaEFLMSCqYxgadUTETj2jgXhyzriz7QUugpt3ypUFVN82ci",
  "key16": "cgxYFL5DUNnRBFnHZZnZesWexfACmLuK9Xb8MbMNA7gcyc6GF9hWh6TqP6Q5hoPVDqnb3y817fLKpPK9p7tFuc4",
  "key17": "5ETnFWM77wMBTnTChqFKgtMdDXXHJ1CzvCGEGopeE3cRc7SwUGk3BxkmcGLMJxXf5SAHcCFMxxeyPcVni8bJhS4C",
  "key18": "4LD7ztFdKnz21eXzbygg9FEBDNzWqjjeLrB14v6DqZffZYwEocoyiTx5Tuk5pwLtH4coc7JG2e9Uy6XmMzMffqA2",
  "key19": "5nAhEjbLYq7VsqNQpGvApdKzwsuko6mXd83K4RCuJej177XoqjMYkUPdnFgCgT7z21Z4pcPf411dbjufSYjKC1rZ",
  "key20": "XbxtLCbiUq5z8i37VkdKyHD8Zk8nJ1QCV478zzfquEb9ko93sVyZcWmtGudUVk4Z5B85xgfbj7QzxvBmydwu5Kd",
  "key21": "5hzehjMJxNgLxDpicG6W8uTa3cix8HQvPMtUUK8GPk8wacw9RytrFgghVLGUUev3pyeTnzSCAUmVJueT2LYa24en",
  "key22": "3FmhL2zMZSLjYyJNpHBpBTQqZG9f39U9EjoJjs9taPccXXeBLhK7vggYuZgQTTDaBX9mFYEJQrFSjwPPgkPQfw6u",
  "key23": "3ZUmHEaKb9wZUd7odkgVvjYmanD6qhWFbUfgoQWqFFsspPfihgbySMZADARHNzQ7qMqWv9ikc3DPeK9U8xr89qAg",
  "key24": "4RxmSTbDPWhrZSseRCBzqnH2HaVrW7xAmagB5VoxjhzuuJmMMu2AgEKtZZgB95sERSzKUM7pJ4F7gLX8ACCww9Es",
  "key25": "62tf7BXAaD457bgqQ8kuGxqnxJVMW8AZVCQ2hJnsh3FKHagU5K1fxz9dYWiXiSYWpZyYULG19Wfqvq773GVUcubM",
  "key26": "5H9HZVra7VAD1se1XFw1rFwHMeeRo2fZ3uGr2XdzXRV2jEB4pn59qeApVzTCUbhh7N83DN19s3ApebjW8MucQPfq",
  "key27": "5y1BHn7p1RsWoxLJ4BSqz8uNLswuqLku18nX2CUeaau7fEEca2EnE2GXF2nULBaQSD8p6bGWVKb6bYgNtjKC7zpa",
  "key28": "4RP1QN7FQhBgq7X858PMkyhQjzuivch88PCYNPdsWQUnjXFxyAVCtjyaPWeL4QJvqnpT3GqadYS2M8WCHXLoutht",
  "key29": "2ovENySYjw69VYx8dzrjuEcq8JiVz9VYGW4WhAcD1DCRkiqGh2pAy5kY9H4n4svECXicT6ZJ6h2LpeVi6YfK6mcB",
  "key30": "54GqT1DNKw6A1ADDHkpbrU4woSwG5nBAjZPpv2TPkkYcV9Geh32i2YtggZeXzWYyvbMiVgNi57czif8FFbBMDxpn",
  "key31": "4EuRHj1sa93aBq4bqD7bE9GHSDP52EWhTVnXbqisaw6ap7NH48fBhiM1C5VorqvtWpDrJURtUsLZCyBK4Jtrq5X3",
  "key32": "3bPXki5zRqYV4J78zk2bXminCdiQKVNPaS5MyHEDJHNBrii4oVogCJDNLXmf68fNKvhSsHpfBia6zzwk9Y6WXFs6"
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
