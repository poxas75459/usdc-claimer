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
    "3J48VYqgVqhDM5R35yosi1NSMpYK9egFAs35z4M1baMvh4TcpmNUA5pCuQWozgKbXpAyhydE8Qvrgq4CTfBN5cDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQ18sQzLKW4d3dhaC6uwLdYQAWfC1AaBYAyZAtphDqv2XQA9bA33TxwFpJ4umm9WoGsqU6eT5D61aTgDidkj5Te",
  "key1": "3m2g8dfxQ4DbSLB8En4shy8P2jNdxT7cqZ1r5Jt86auH2QgFYSUGCQNuuwFX5DgwvhMkRm5zbZAraApnBkJfkWrR",
  "key2": "Zoa6CbqQF6gY8YSLefE4ycsxbiE4i97x9FtuWmRK5nc12y6QqhmNVMTKuRYM9amLNEJimPJ1nXxNXqPi7nfbYWm",
  "key3": "4Z8RUGLcubkSjALu4TFdQCYbhSgct5v4Zi6tXt9L2ME1DhKdnJjd2uJS9bCsKF7QndpWKoK9v7vXWNYuTnmrzhBR",
  "key4": "xKpsCGHmPSwtpN4jjkuYDwxv4ifoPNDP5cmhLUdXeLwuWtN4U8FEeCnDc4DnXuZqjUcpGor6fx7nBZptx4vzW87",
  "key5": "3AYwwetZKLhdHnXTmroxdxd6p5DaauTcHMpFiMqkJNhmPbHBTMwZPqySrnsduQpA1D2MkeMHmH7sBXqLWSctNe1y",
  "key6": "gbGDknW4rR2KUDw47YXEXNqngAKiShYy6hXKFK136whH5jGU4gPUuh5ETr6mbLdbL156sugtXbkvcHVkJRXgQPP",
  "key7": "2xX4UEaTiKu68XAxAyPLcw3dcH9FCR7Ko3jZQXCkiUX9WupDpQsSDNRVAJqWSPLzu8vs7usgJd83qcmwaPtFM2ah",
  "key8": "31dDshQgwGM5LotSxFPYwe8g1UTsVgZvCVQ5ZVZgWVf6Aq2EVp1RBHfvtH9iQnqBjXCpMNdPMqdqCZYSFLRnmbFR",
  "key9": "2P2ja4anLQtd1Tz7QdGZVmHDimVd35XhN4F9iT5pGP2js8pdUHCG16FE4ob858iojaNyNDRDVeVcniwvQKXcjA6a",
  "key10": "2Y2rC4fw5YvC11KesoC3eQ8f4MDNDMNoZWDhD2b94SDjXdwwi5pfhqVFKAtXAQv5rd8Pr4eeNbpgCFQWSq5djdcT",
  "key11": "mdMnShet16w8bDF1RcAYDszPyGApdT8Au4QZg17jTjLRTUA5XNYFvieoh7mK79C93wy6t9aN6BbMf55BszizDrq",
  "key12": "Berjg4dxv9nweRFYQPeMjqEEryUrRUgKh6bPfTHYiyg1KtWxmHV22BGaDMC8kVe9a5xUwzskVWLEkY7xqnYnE7s",
  "key13": "3zqat4354beJy8UQ8d2TYd6uMzctA9euLrWsKQ8nEESz1pqezvsLTtEBpdCmAGCUjdyBAuBYJon81zVdV2F86eXd",
  "key14": "2Ubw7m4t7NGWANJChRzmFmbYoKXS9RkXLJNAck2B86M3q4ipbogB99emUMiH4YPycBRQMHXijcY2j3jHdTs8EZ4u",
  "key15": "4qjJ1WZUUFrKtUPHEMHDmoiVu4xWwHZqpU5fLd9n5NwbeCc9K5fYBs4JmXUx8h4gz7btf1b4sB9SxdJUd5tPYTad",
  "key16": "9UFw4LGMrJUyUw92LEgb26WiRLTyfRic8ZLc2hEwme363ZQKC4WbndX1spnmrRYfCMqo148UFZsDZT5UUfGGoWs",
  "key17": "3fhxxhs8woYNuaGKjQHZcSeKRz9VnJiCvnAH27cWyS94ozSF4ew2veVNw3xPFyhQ9vxFZ1SeQmdkiyQjyzgWjfBu",
  "key18": "4cC6Q8mAZ4v8imUdMmQNPjvHtp58EpkKanacfnmNQ89nGh3kZDeVSpTa2rkuQMpjc1iwb8pEhMPP3iM8S3rmY22B",
  "key19": "5QjYceXrznoe9GSrH2URZcSbhefWTyCQ2StDERZb8L7etvBQEyfx1BQb8sba8WW73BKoYpFxioGLNuGrR1qhP2XQ",
  "key20": "2E63ZGA4wb9qtwJigT6TXYhrwQo7xMiiAQcRo7P9Xux6qmYgfrBqDNbQ6YEaA5VkYQ3yR7vvkuD86bpQ4zSeq1F6",
  "key21": "2q7ideDXJ2Rm1TpJr4ndqptoq3ndm9jBr1b5EiiqoVpvmtd1hCncu1inbFvGDopmpJUcXYe8UU2E5v498kXw63bF",
  "key22": "679kjexg9XdWMXdyjWPcKoCWb3NXeNfzGZc9Ub3AW1SWq6dDJ91yPN87GVvByDN2TzGAUhkDpwbrL7TPMEJgvxbf",
  "key23": "Gc8TcnjKWdbJZCochgqPgETisxDzT3Wd6gkZQuaqcYSwxuAz2zLHouLLv3ooLVquRgWqxXS9RPdEqtqF4BaJsHG",
  "key24": "3rwBhj9pjYZEG5he1MQbVkuUMFzoBMa4m6hBxdcS9EgajrfLUsKXYjfnrpRqwfW9Ywg256mBrA5iLeJb58Lmuwy8",
  "key25": "4EAk6zW7QweXPYu5wDk9VNpVecNKg3cYTM9qTweWreVwAR65MZhbDinaRaH6QTATDJZ1TQBBeoALPG1z9Shcr2gE",
  "key26": "4u9B5v6pHQPoiY6EPMjUVWArZxrZcdvnJrfQAgHckQsgWcopkgzeriwX4JEoQg4bq8izXH882b8kmMk7JfdF5C3h"
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
