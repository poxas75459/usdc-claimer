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
    "2XKgCpTdyBYBToVGEuz5Z5o8J1itFz531KVkvtC54e2bsNUDRoEpQvxcH6g9gEHCfWn6g2m8yPvGxd1bMCj6UJvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6CfV6P7odcXkfv2anEjdLv8eGAo5cE3MuLppGG1EhybAuGbaXTjq8BAqfvvczqjdEcZxqoTgQxBUkripUmTXTfr",
  "key1": "5jCaERbtM9dpoAWqvUsbube4oPwZsWxxxvdZ3pJBQvoK1FPDGvwhjfspHx9TE6pq51ZWx1iQzewa98gh1hdaHLMK",
  "key2": "3Qjsm5LYiLCC8cxo9Fv9g1zG76cNLmnDk3NVYFXsb9BV5CQWhQKkaG8AEvJuebgCN39AEcYPNBCPsj1hQXV6RHjG",
  "key3": "4bTAHB3h9afGVLDU9Wr8ChNNqjzdsscCQrcYkrhc887Qh5jWFEsNGzTeTN4m4Wwrrt8KExpMhieeoceNzcf4x7KY",
  "key4": "n3Wv1o66NTc3N9LYJc2shYwEXCHLTabB7F3APYMqs5cSGNLA7JxQDyNdwQeoDiKJnvwFrgdsHZr1EY9swyZrN1A",
  "key5": "2LpGCqCaYFa11v5jWev4P8BYD363iBbCnYZ6JPKbe1qnKXDAovcedEPaGNW5H9CCByt8fDrN41pJFLP1PNY6Fc2",
  "key6": "2kKcqZrutEss5JuJceDHQdwiqVrFrkmzcsJfgXo8bAYM6ajU5gp97k3DFKcVoqpHnZSCyrbxpxEu4jNyLYwyQG4n",
  "key7": "cuBXshvUthiAQhgPKYGu91BhqCi2XYqSz3f9ZoVZp4kL7T5NNb9siE74sKojQs3CwAvLpMNvgJy2Zt9me88V9dD",
  "key8": "4h1vbSx8Qx6fAg9nfLjEx2ySoxhazBqmNiT5nCwB2fJTvGWmtTNcKyJwSxcEiAJZUdFhurMbq4R2sxfWZAS8a1uM",
  "key9": "319WGvy7uFZ51ecszxmLiUrwXid1Lsrqynq4AnTGUeWs1S5kJaA633twjN7qGdyT6p96d5hvaKv64ezK3rRNwcnk",
  "key10": "29F9G3igXefQv8jKusuQWjZs2G86AZnvdMQAk9G2CTmASs4dFa2b81N7jWuTNcQLeeddAtk43jWzPY2UjTQVRirW",
  "key11": "3nENLiXspAYufu9PUawRpTHH4GuBT2Dj2Cdcyea4H4aHw3afnTMioj7hcDJ6nUQAkakhvd5D1BK8Z9kFxZGc7YJ8",
  "key12": "2uGJgdizKxomRqQdnvfQ9xDRYkW77JyBYpyZpLJVc1goBto6T1xMF8mUxnW7hMzgDRoHEk5d5ReytFXFWdYvtVn2",
  "key13": "4chD1WdpB6NF71hPM4jy2qEPA8B6EfMV81zcRX7qHA9HrJJKrctmmMY1SCB5b7cuNPJ9MU5jJMEABtiKsn6AcbKX",
  "key14": "3hUemxAgvSBkDV9G8KFidZ8c3MkQ9zAmJxCE9rh5ZAvcRKqPrXYekEadjzKxPGPbTiT7WkDg8LvoYxAMZ4spHNJw",
  "key15": "SGWzHNw5ZmmJGMKdLnfogusAqVX7oJkypt67sCE4akcRwE6cMjm23Et8Y3pRmS7q2CqyANAQ13zvLFUWMUYC4Yh",
  "key16": "3yeN54AehYZPuBMtynUHY93zWbJ8qXpwRsPUQTVYwYGPZVkw3543CrHuPNGVAgtULSTjkHZJf4VMu1viujTGEbt9",
  "key17": "61Mg4ZrZHctWZBtt4E6ZRHzTv3bmA2MbR43wbRM4s9pE8Fx1HfjUpi4jU6GTmHinQbYA6NDL7FiyKJKxdTrBgj3x",
  "key18": "3yZixfQM5v74KDGBbCu7cVbz1YAt5zTYjv4ZWe7yBy9YEH5TN4176Md1yc8Qz6sKPETfFqEV4emu7xUFp6ZMB5xy",
  "key19": "44vDzNhVZMuuC5hzQCMuQXjXaWUXbLaoNDd2kashWABCnvqwJseu4HMZdUC5ENuFFkWffjDraYDsWp3tLcF3oMQh",
  "key20": "2ZJbeJ2JRz66dD8Z6e9Q6vi45KCG5Uy5nbne5aHnzNcF67QHbEC74QwAvXNUW2zZHJJrZ8gF5C1DM5bu7fCBqBhV",
  "key21": "2Zye83wMGPCqcr21SMvtJqBG325Y7Xx5oijeQQT9zZKBDytcLpc5mg87NeednBKvvP9LWYCy1AbtZDH6mjbzLPYy",
  "key22": "4ToXnQAV9pK3iQo5XE4aCWMkRKra6eh3rhY7QdjqqNG5Jrm5DJturZk7rMbvVYxDVon5HChPbnTShoFoABR2viM4",
  "key23": "d5woVuGoNTzWL13bJeqeNMqR9WFKtN3hwqqvz2C39StAEj6tpmgSERfLNiDNgHNmyKxoDL7cbBJshndDwiqz1bn",
  "key24": "5HUECCo4zLmvDV66vKJMspnPGnovhhc15FJxdLgtitEG5XFMpde9kfmhC9WX4XmYrxDAGvPp26LpfPR3YvJVd6dW",
  "key25": "5xccy7uPUm4Gt2KsMi9JgYMhVj2E48aPnzozyhZfUtvDvxSpcgj2yp1T8bm7QzpwVZzZZJZKYiwGVAA3c568qu9T",
  "key26": "3ZWcW7AAcifhcocBa4neJ52hJ5vcM9BLzgufv9Bm9UXpaWFU4WKcpHyBGe5gMGgFBigAmzUejey7odnhpAjFV7nT",
  "key27": "3XS16oXeksaXWsSHvns48zjR3in9FveedYANrHxXkvk52yLRUCRDMQ2ATHiCRBWGt12kZmWmZcUNL6QTwf7N8my5",
  "key28": "3MkVdfJCraKZwowLYDDzXXr1Gew3d5WQpkq9pUzQ8Nv2tm9zj8tkoqPbGZwtHwfWMy2owuSudGEfHLDZf2uGzym5"
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
