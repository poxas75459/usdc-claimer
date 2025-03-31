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
    "5VUV8saYnaQh2HsioTyEeShDy2PbfHx2ATAm2b1mc5qCLcpSutemJHJ9fXkAxyQPWevYpDmHDsRGoYGBhsn2aHzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bsYBgu3iAif4UvWqdYH4dp383BddZhoCkcuVB91253biUv2AeeyWymNu3deWTwqpQJdN3MbENGBngY8sLQpu86",
  "key1": "4MEcZj7E6nggG3gpQg5ga9tXcBDoJQsEUA4uCjGrrkEEYxpFRKduS7Ln3MVL9CCZgDVaRm9iXYqYSDutdxPrPv3t",
  "key2": "369LDif5vwSJjfJou8EDZmi7JZAdH4yQBDvzfQxPzTLYUYneiZ1UdtB5QKMTtYBN8QXjXTZDCXzYs396tLFcz2aU",
  "key3": "XSCSymeVz943SYGucW1RJG6QRJbpFbyU7q7HWZcDFJs88SJzaTokXowELSnYuSVzR62wDgDrkVmnFW2ne3NJTKp",
  "key4": "2gG5vmC8hg81CAPFfkTWuGNdeAoCSAxpghyFUHjXdxUdVR9qpyDdsfNeiMuQiuhpeSW2vgjms9Hu5RnXqJWF4uMY",
  "key5": "3NMeE97qobUZQxezajswbhPi8jLw7MMco1M8mBiE5LbmvrBQThzDtN2ZirxHbDJAurLvbY998Z5FEH69qTcjvFKx",
  "key6": "V8RHSiNYAtoFRvZKzd51orturtTzgK5WgkAGWFpGRVqr777M5h5mJt66mrs1TgoAnsviW2M7z2HaZt4DVfJGk33",
  "key7": "4ci5y4u89gNBkKVfDVD59KZjRpMW3QS6MJur9SGjXvvnzBsqn8n8KkM3oB2GY9NCWHQtHxdsWjVjzQV4CxkKiFj2",
  "key8": "25smLDmGqFhht1hD7zdx6gFtLdqCZCfAZWRck6e3QXEsxNzsPzohjbGsV1s1bQtw1ftkoqFhDMC9pUdBiWks5JSL",
  "key9": "2ZmedQfh9hR9aKnogv4NA2Kr5fo63rXNVeCvx52UBSFDwkaMMGo4bgx84fwwLvXggeW11vxLXWWgn744ZJP8bu6s",
  "key10": "tXufEpDon3CKWexcUBr4Ekvd5iLnbUme6ftxiFTStRYbPRnuzw9zCw795xR3TKBzRTyVMWZjxxzLA2scRDmtTmz",
  "key11": "3DYqAJG8RnaMWLAeY3FwcukZj8TkN13dAh6FHiboPKyy78L4irbKMiY2iurZVXQkxN6DLCz29rLgqzPT2tNG6Djm",
  "key12": "xYEZZsbxUASp66XTnoqqtyNRUjR1at4ZRCPV7Jr5C4dYqew16LfUeumKvwsU43zo9xiJR3rKGkom7AbTyofXdNd",
  "key13": "LVuyvXL7yQ8KjevhsGUdPK2uBouARckodCAKdGwN1BqDgDeuf1EkbZqF4sfWKTntcgAXeNTryyTsb5WafVwM1UW",
  "key14": "5m1hKxh3iYpN8EEsjTU3djkgqdQnv1S6y5YQFffi9Sw8joGsRCSVq6ERdqjnz7BHiz7A4BfWybJ6vQxsh1g7mr3s",
  "key15": "34fQ9HSXZej3r6c8rxgpJx2WHjoYF97WK1WHY9upiZZ32hpq5JqacTaTvDxesJFz4C5btLfH6RJYXz1LZHQYYCbQ",
  "key16": "uB2vrHcogcofmyh5H1e6BCxuNUih4fzEEU8CGUGEyFATbnR4YgKpbYBMcMhFwyaFbabfjYgGSwZrmRmLCjCGt6q",
  "key17": "22zMdcdwu8M4aW9mHBM7fnh11ATaD4pe4uNMb4BfMnPAB1RE3oi99TVGbJRSZTt8m13YdLLsgHE1qYjrshFVTjPR",
  "key18": "2grsZ4eoYi19T6dSms1wG8WGzeASZaxAdMbGzxxhBEsL9xBoKMySdaT2GNVUCfsUCtEv9KiZX2eA84Z5EEs59NRp",
  "key19": "3a46rE1GFmJ2UWy9A27V4MqK9GhMfJUVgNnvqkLkJ8JcrShXqPr6fsufuwpFgvFA7vHqpNufuGbRv4ZLMVtQzRqn",
  "key20": "j76gJT9FuSsLCFeNq1jDZG3ok5U5tDjV9Um6HfbaRBn3J9fBAB2ExbU6oh6Z6Bu8w3rddFge816574K6UKWD42h",
  "key21": "3rkAp9EPVmg5oJvHzwo1gXris6VzBfKkB8CY1pza8pcXeZtBtJU7CVZ6i2c3MBcWVnYq1Y44yoD3Gm3nLjD6WTdF",
  "key22": "3NP9tNKxqcAPnPZZv47hfxE4qa2qUhoaKUaQsr2jaj3Lzn3bsjCcUkX7UP1ZhD7LohCfRxZhwq3SXwY8NHYihHKb",
  "key23": "25NPicTU36GoqttMW6XW3aobr2bYigRt2iQ7SggucyKLFuByyLtCdJkFJDhAxjkJ6fu9WfkAQ53uaU83W7XZz8Rc",
  "key24": "tZBKgunH2sZeaiTDFwTR9PBbrqufRRYH177i2qM2KUh7XAgBRWJwTeB5csqKzqEHTj5JDbKFTCSxfhJozP7xZBB",
  "key25": "2c4EQjWDn74BzCss3Fug2LKYyUbrFSKPkzVT4DjQpQHdtkzHEWLveXg5MbwWvQhdtxc9vNbUteB7yvDcSh4xQ9FA",
  "key26": "4NMMREH63Eu4CkstfGede2sC1m2cE2oguG7o4sfPjC8yXyY4HkwSca9vyYKaRq1eZCnZoC78dyKXEH85Bx5VdcRB",
  "key27": "5DFRSTVbT5mn8EN4AUEA9e6a1fb76NKPFyDDYz63T2ivycWsD1fjLzjy9mwgktStVN7VEnqs1Z2Hmo3yfvx57euv",
  "key28": "2oUz56Mt4wRTi2h47sc6bhQnu79Addwc8i4caZKBahFywHhb2baz6ULBAnxUTxhF4R3BbybYtjiYo6kPXFYNzLrF",
  "key29": "52BBEPU6r7EYEyTV8jN6rqeWrRSexcm1Ebeo9ir8DQszDpB513SbRUoASVnethVFpGTTgP1i88Zu4d3pd8T1WqVq",
  "key30": "3rC5RFXJbuPou2p4SpDhQ8WJB8hDGTfKHcZxQ2wCHEYJ4d5YzrZpUU394owZihRjPKNq2Wkxi9s42kABXwUML3kH"
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
