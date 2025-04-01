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
    "2wZQPEpA1ab8Faa34BQuW7z4kGvtirPKtLxRG4QgNXaSjwCAu9PHkq86HUk7nsEfdFcW7ghZ6GXsQzFiTmJP7YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5veZ9DpD3puEhEibhT7agS8TvEbSpsP28XSvoFuDcKusAzb2vqGwWh2XA889KjuJJSZbe7mp9ezZKJvv7jEqDC",
  "key1": "3Dy1j8ucnJ2L3qLamY8EaSLd3c3EoVG3YQxbnXEWgvtBf29SXVpWW7cP1iS5bPhCARCkJYTYzWbx1qQ9tvAYXgu",
  "key2": "3RcSd77XTiVF39Wafpxp1UvVq4MUeywCVF5BqrQYwEWc1jPAYLM8bfHQrex1btospbtTESMJkPTyUNT2sPxw9Jvx",
  "key3": "4BAMgh8xDk9bTpMZgWQ2DYEkkTHrgnwUGwCn5ycsawoEgBzgdM1oDf2rf8CxcrNFaDp2THQHtussjojxJ3NzXHFc",
  "key4": "2zWiDtJHcXsGDTTxM1zg7sUBxejoY2J1dBLVHJY1QKFSbyDsxe2Rt3KhauBVaTLY4J2X7AKiyjiM1tEfs25CpUyS",
  "key5": "328Pyh7N8eszzxVZUK5xQStJchWrnkRQXhtYszMZ3FDcrqkefXDvQ8XCpa1kRRzByJbwK7EBWLVjKePrMDF3zJ2t",
  "key6": "3vbEybMRG57Jx2mTMeuuHpu3mXBJUQVSmzpTyb6MQ1XXPGErvUqQDBUq1Uc8HDNiBDz4ziXZypGYWMExsgu8GcrM",
  "key7": "5dHQ7QgNSignsBTx7W1VjZ2ZTxVbpg9VSrfCNkeou5SuT3C35GkiqPef5XaExGehJHv5vjSan1z7VdW2GDE928ef",
  "key8": "4qZksBVx8npwY3Xn5v1YDHJYRcjbgLgK3H1HZNwcH22NjkJednUJ4ZfrqRkBWpv7XnBmWsPDrjbCkXp84aDXstyr",
  "key9": "3LQumNbry1qkf7fNLRM8y8eh3qtudubeisCpt13v8suG87kXzFQfHm5JG4KEfxwgtMbaxtje1Nvsdft8e34dxYvV",
  "key10": "5bpV9NH2GrQ2pt24SWpGdZN9HMZcEQ3KAhCVxdscPHjbnPkCYUBF6oVzjKgGeekH3GvfU7o5qq5rvKUubMqLtXCM",
  "key11": "3Nox3tEg1iFxVHQouC54VBeTwvtKSZXJUkkXBWARZDhvgqQrphCWo5Z7fZ6tEeoV66Drdp873x5ZnLWVS11X2ENT",
  "key12": "2pE2d5af475S6Tco6y7MM9oz7LDsDJAGPBLS5xtP4kKwxkZ6z9zB2hRkLGNPfUE14nRtTzdMKH1iQFqRi1LaRGbn",
  "key13": "5Pn2pugWoPxr2v5U4KnjSquNDR4gK5AmUBsK7RFB39txvZ8ZNHVJN3cUL8jjtC6uPc1kpTXLYniDD3ptEf5ncf19",
  "key14": "tbdZMzdq418fAdoyW8iBoM1MJneU4oiqDcFZ1j7bML9QGkJqYNZrE2pjoBikr5MZQLe76EGd4BKJh6gd951Srvy",
  "key15": "4U6YTvRk7QBfMGJsKLQfXy5M8TQS6uQtpGruj2yX2kbCLnwBirAn5TLi8DfSWkWEyvPxRHcQD5X9hmheSGjUNioJ",
  "key16": "5mmoieJPQMhpBsao1gcZgEG5KKxushoaguruz1DoH5jq4zrSZpbWiNJY5n4Ac7WQiUwwqrKhoMqNQyRDhPoxLjsA",
  "key17": "3vZVm26BZegNBJLuiihFxsZkYyQJxGaZCXeLViK9BaTNuNmQEj4rSiqmcCCSQYxVwQkBMffnNhvFq9jrNDVi5Yau",
  "key18": "4m2oVsjumrBtYcoABsE4qGsLrTyDMJBfDwNUy8mn1piNSX8LG967t6bKmp3U2mEG2NNx3vcconWqn6E1C4Pm92p4",
  "key19": "5pSWoPNtugMRuUdfcuCQfTUNdx5eUscHBJKmTCH5Hh5U66mJn3TNUWr3TZS9JTJsqMFZ9kHGDotB5cLG7K9bHBb8",
  "key20": "5ysqSfy1pJK63vjaWYnxaPDie5Sw8NUVAUK6XshUgsTCUAYkEeExV9nRMEcLmB7Ez8usb2YMwAH14tfhAVgMtT4e",
  "key21": "3fnKNvHWjGNJoYt8zAGSzvX45twravnJY71g9J2jkVuWF7qd99SoHKDPAyx2Tm63Hr9P94dfGkXE4acYauQ91SuK",
  "key22": "4wgt4ETCYFmzxF6pfhCvskaMYE4cMZsGzbB2wepMqxdpfaTNV2g4yGNebpfVdhXkbyWBdiGjgf1x3VukRZ8tGhGS",
  "key23": "4U4WpkFD8oWvBMrAxPpZKyQ6M3zndaxqHSfxKZwmEBvSJ6vksVLJYYDKr12ssaZbc98wkTWHNAAdyqR25sCefAYQ",
  "key24": "4sQk4U3zRfQZED6BcbCQNVqhMtfwcwyyXQsGg9Ph9eMD5XvceNnkiX14zFEucWR8LiXpG5YCU2n4RePYaFBg5syH",
  "key25": "GQL99zLJtiW6WGGKR4jmDNd74s5uwnBYgNKFypzqH6ieQ7qSakKcZciuoKAxEVn5siSGjUnonB72Lquimg3ABjW",
  "key26": "P5F2FcsDXrYHhFwmwtrAxAoGX2dKKZ74w97mnGwJfMJmXqWZNWLqtfSWoQg8fDrtDUrfumhB6GWWkuFGFJJMecr",
  "key27": "41dKbWW4sD8UqhqUU15kVg8pzjaKThaUJ1FsMbJmiZWvaYW21CVpagLWNg2k8Jayz188ZHHPLRdASgFkHDpquSHC",
  "key28": "2fJBf3nRTdoZjrZe6LQuKyq54QTLiLhkZjFVMoMsqhAdQndTZjRV7gW1iGg1pL8z5s6kLU1RvUkjTQ9eor8zHTHf",
  "key29": "2uCGEJF6NNDaXmkTQCkTgLTwdhUZc83WxEmMjGoiafgAQ5iQPSSgZbrV8Nz4BFyf5wW45sCBGJ5koYFGiEFZZBXv",
  "key30": "2o8kGbYFy3rjxiUEdij3EjxsStgBxnnG3J1osf5Uq3U4FNg4bpKsY5mJvmthvD8W5CkcXB5o5rdKzqytELFg9kAV",
  "key31": "55JAZWykrTbiPHwrtbuLi6BzuLtbrbuSdZchYt4THPtEsENqL3PUqAr66Ashu67UXDEwUeRuMnEWTTfNCosRdE8M",
  "key32": "3SqBsqKLLJEBM6b4wJbSMSRry4ZpNpWBDbCqwWrdzLSrQd7s3k7zF9JLRWa9zDoGCW2eDWdmrWdPxjAgR89AJLSr",
  "key33": "2VctYZnRw3bP8vB6rT7dU5fdg8kGF3QYQe18ePFctMaDdDkiQU8ioktWdh8mGtU5nbZPggoEiNEjYjykJ4G3gHRe",
  "key34": "5KXfiyyXcS24Py3wK48pXErKqYeFiUt8bzqZW7hv8R87QzKGwQKVzquM1tkYyUcWRRFAwaKumpFye1LdSoDCSvkX",
  "key35": "3wVDNNkW6hDNm2ajRLjxwUfHUKRGADiVCo1sUtT2pzg6QQZUt9rLy97HHcGyRQJKrzpitsEJY5VyUSJ9pebAzzFa"
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
