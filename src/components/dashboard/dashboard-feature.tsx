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
    "5tZKzX9vUfZcZFEidUEN5Grxt5xmr5CaW5xqoGWquN1jBYFi86zn2GfN3JB5oNuuzELmeaX5nY1gD67cwHLMRQgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M8KNXEEzRqLYynzntbEHqatHwzYKkR6fBbatp5wtvb1nEGwinXhT3RN7mBuFacYkY4uhn3j7EkxuXQM7Z9GH6mj",
  "key1": "5Ch157mLvDGg3XBCDh3Yv9xTgQ74UzSxQtDth27VwWVcpSRGEpYPu6j47LACEN6d4DqaLux6ugszrtkUBUnRHhqs",
  "key2": "3Ye9RaMf3z9Ndx5LFM3wNA9nvq7SeghuiNyWNZTJKxsPpJU9U4QMBLYUDcs6DvBVK7orgEKvuMvFhHzbKdqGCtiv",
  "key3": "2bn8Pv1xqTyFm1dbYuwUCjBxXG11hkArPTqA3yHhtvokLnqXA7qHoHfqZR2euWxL8bmVXUirrQkacFWkK8u8Mu8n",
  "key4": "5MnQShoMWKAMoiSnB6DTZmRXAUVCNTrnLLpBVayLgENa37TbP6scK2wg8twTKxGUg9UBeeTwSp3aLYguX61Bz7eY",
  "key5": "4AANAGKdnmxq4pjHACpHVxgDo6jn6YWx9YE6KHHjgCA3iN1eW2TVQUhS9jGH3ehB6Wo7QCWURpj5tkgRCgEAA3VE",
  "key6": "2tNi3EdLj3sEsCi4BuLz5nVbAt73RZqwqsHZhDkevn2cZK7wrm9NBbQo3vRK7Bjx7riNVzVFgQw7mKi1aDmJPJYa",
  "key7": "3pfx2Nb4BBVPcHKtW5dHMv415kJ1NawEUVJudL1iMrYEBav75ph4v1WQCS3s2cLmprRLXtHQ8b749S9F48GSzcT2",
  "key8": "3Gxh2jQZmN8aJs7HJ1CtfqtwvCSD7fAUfrnN8vFy68svwTgnkRmYFcUBy3zPFFZ4kF9v64WASNXTYTyJRo2dgjSS",
  "key9": "4ZHKHmRjVPEe9yHcxqntuELASf96WhNRzCHH9JQgcid164B7mtG4XeQqhzyW9NJrwG7gSfyp1HyUNAYcYxA2HrUG",
  "key10": "31gt9BnLbgJ7XebaK7MeKLkK3LsuPm8VueFeUogp1s6owizKZeKyGHFYWQz1UsC7qNBEpzK2gDtUngvXTs62guwA",
  "key11": "56Yb6zhmqJFHmjKsRZzQYuz2LaBuxBE5qYM13fqchHG3D3BbJg4F1rsk1BnG9n6hqJPbmLwYwRzrH7Qhv8xhdcHm",
  "key12": "23bv3TJuYekDSQYzpZG956xefpLAcupkrSdmWfkU2fbAkqGKpuKKGDiiT1E3Srg7Bv8FAm2EM2KgAWAQ7AuJJvJk",
  "key13": "2asVpsZBGE1LNDUMset6814bTcVKVNpJFfrAxk8RVZXHudHFtbbTmaJytspP5tZRKmZwH3L6EpfcyVpqKnRUe5Dj",
  "key14": "4qwaPNVW2oR3zm7J1SXue2fkErBzfS7KkcDqZsYfvU1azqZ4gwaMJ1FTxRKriTqB1Gi81yzvwyuEnsqyKrfb3ci8",
  "key15": "5y2AdtEatSSeny1KGaMZ2AAUC4sGaDXWjKCc2rWrhqYiNWW4SPUht2Le8se8FmSqfSFH7FbXL5i7FnT6Bv96KwW8",
  "key16": "P1xZZLnz65nko5PeLJ1241KS5WwL6xt9jX2DfJrW3z2bSZcqrAiWQZQD6qmdWyQwqtctb7UMYt3SqpedrfijXtw",
  "key17": "3mUZGVmuLnDcxkkKQw6afw7ff6nPinUJtYHYjedZm7pTyyPpamMuhzTeMzsBotQQvxjpiRndViMTeHojLhwq4G8q",
  "key18": "5MX3GCiMrBgCfALC9Pdf6j8yyigHLahfw5ExRKGddoVWbLwaGWrXQZ2Y4TfUByXGUW6eFmJURgXQnJcKuVbxjXc5",
  "key19": "5FWGqdV1MBHBNYyKP9cD9TnF5uFw9Uvo6iBAvwQhK3kiqg4od8kjxW3Uacumdf1jez93h89eijLh6shs17NcKfMS",
  "key20": "WRGJUxh8QRZGmxvZRBt6MQWuPs8rCh9NHRmd8bp1oqgWttNdyboqeXYdvSGivEWwETDZkEXfnZsd5uy7UWWXtBW",
  "key21": "YpUHj8mmR3z7CXFqi78grQAkx7dPR2ycZXUMiS3eCnzvXc2YnNhaonHiTbm5n4kyFR6ddFrgaSrcSzsS2wCTGgi",
  "key22": "2KupYVtbBugHEqDyHg2uqoSSyrmuh6RzhXoKtFtTXKvUWqkcCFjR6WBP5aL7yz7UCmBEDPw2kF6V2augdixohHEL",
  "key23": "3TJgZsJir6cLSvWvZmw2truGk6vGQof6nLx7fzgKtUm5t7EZ8nUkfMAc7m88NNhernNrgiX9r1jhkKTpsLvuRiVr",
  "key24": "mDHZP4nGvi4xXeUfLceMmbuktdt4MLajyuxoB3BhNUiik7eJS5NSvBDkjwDYMb2XcT2eNnjwSwMNiDdcBwi1wT9",
  "key25": "35M8eDiVitcY4zR4kyWHa16UGvTTgWa1nixqfxj9kVQWTS4KHryAtg3b3SbbEKuaCF8yBUuE9e4Xr6YQKjFEhUkE",
  "key26": "4dqeJzon1fQKR5PgKeyZjxKNMHYo7L9fuF78Sgn3Y1Mh37qb8H65MvKAgkRhfwafhC3DEqDhBBSPqudCzqSsnUiE",
  "key27": "2o8GA6qr6itUQ1KogMLXPPee3UE7EmKrWUtUeu6367cVy5mY4gg2S4rNgMsxghYmcE7TS3yrjiDAz146SZ77t2kk",
  "key28": "3TstozzV5VY63sqJnTzLd4e4g4uJimB93eC1EgGW56mH89jemH6WqcNNH7MiuoZeKEwRo95wjjK7mcjVq4vAPiiM",
  "key29": "3KL2qzHBxZJP7faWipRtaFGWXSFcZh7TK59XhA31HH2jVFHwPS1ijSsRVczKzkscpHNa9zmh1C73kpd5YtfR6xzf",
  "key30": "3pTiH4HuPsXNBLFVdqZdYf4SeoJMSK5gKqzyEhEoL6AHXKKjE26d2VbXo97aPWWiAVjWSwMsnsZ96jHdEGPRgxS6",
  "key31": "29guX4fR3bpfpwsBiS37PkkrVrX6c5Dc2x2zwqV89huW3fLTJe3mMrmcoeEfxnhFsH8ZCN3kC514Tg61hk9ACbhe",
  "key32": "5T92MeaFiKGfUrw8rwX8XEjGvFXVmkiSUkabYTAfaU7c7VavtV6UYDgLfawqDuAzF6vqYENGEy8HpxYMASNMokqt",
  "key33": "WVKWW3mzCJKuyRU4vmnJGQb5kF5EpZ5cczbo8hMnW5q4TX1Wb4yCx2FDVcHwWS36nZiYjtGPKZf11H5Les68MjC",
  "key34": "4K3Ff93cwmN3Wbc4NjtfJaib7L62iwbRtzYPZaq5X7oXpKb4fYCJEnz8kLKXmtKeuACHHNuAnrSA3mLdXKK8zhPm",
  "key35": "4pYC3AAPKNAeyiyiyr6tnqEaYZnCnB1pXkPdRAoayMzn7JkgaK7xHh6ANt1PezYAeBsqGdUs6D4Z5nnuf4puvP12",
  "key36": "5tPx88kXizqWUfvpn8YVTdtmAHdiU1PdWg58Amtu3BCiBf81UiP2i64pk8oW7ZFikMHnvysmju4DHBFR4Ayx5hFf",
  "key37": "2hhMXvFnwuJFeUmqCjz96VKqgQVw7s3y7tedjNY9Bt9APzViLvftdf6RT1RFu3ZeQv51VwJ1SMy9mvWKdUPnrw2m",
  "key38": "fjbnrTZC92sKCFDYU2MuHhUp15uAFfdH9tVZH8y1neUscWzLXLKubEbxBB1RU2wCgmGPjTnAarV4zEsXCLwMxX4",
  "key39": "29hVj5i4BVRdpJE95R5VL8ErbxLVmw36uqs9TF4nUm8Xdfejzka9FC4GhKje4UTd3Y1X9t4i2AXp4FRSqtGxVnAK"
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
