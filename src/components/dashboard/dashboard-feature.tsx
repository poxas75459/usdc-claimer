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
    "5bi5cHm2mj3v4kV99u8pFVU8kbCVNRqWoEcDT7j6h6ZHm7RdVEsyyemnM1F3aD52p41ajg1XdAs6qq3ujPPGSm4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyKaQXBawYUVKPaBAd6KLFHScPvMPTD1Q25rdAvkQm2dS6QXKbimQAmeLRKJsKNDRwLvY76a487KzaVnUbYTxx1",
  "key1": "3dy6kz4rFtzGxoMuFtjCm3RUuhzx1ev2WE2ruiLM8BRXyjq7sczarkW81sCuFA85yrBJLFXVbCnrX4J1qeEmxuP7",
  "key2": "266vhvMtWvHyCkrubpmfSCSD5daUr3ED7wxB8qCPvBHFMrgbNoRheTmYnk9nP2S7V5BiRVjVzU2i8WidLmCFHc9j",
  "key3": "3TPjzp6hQ4xxoN5Ly8av5dGh4VE4bBnMicW85QgosPyL7AxiFVvUA1qx7W5i7DfHqUAzzE2fGZpfzQVkiEjo5vgP",
  "key4": "DEsg6fnSNExwAUorPsdoo8EzWkfFuFJEhUFCVUtKmTQnnnnbkiMqTqVyjrjDotD3LC89m6hpdVcc9eFdbbBM8da",
  "key5": "4GBERavAqLgHnrX8L4VXzgwiEBfArKH248iQHMXNjgTTELMpC2HDd2JZpes3Fbru9wR5zU9zaqnFfgYbMTRBBpUt",
  "key6": "4c64cXZ7AAYksN7Pu2GU3JkyUieAy59rQ9Yheo39wPZX3RnF5Zo3AkmKq4TtTFECA6MgtWHqDgAkLqWC6jx592Ge",
  "key7": "brUeLvmQ4RVkan78K4GEaSY74BUmMmXFhDWGKC6FaEQrHFcUGg7d8iKrErATd1xVTfruQpQ9uVQq8wGbcAhmMQT",
  "key8": "2fLxUg8CQxuGBq3YWNKmfc13zoUPV2Mjq1WMVmuXZJM7XAbYh5nZr9jn6X8PR7qK6SmiuR3wetbzAjYeKprurtYD",
  "key9": "P93MMvvGDWEuuDhSaCucJYEdn6JE2kfdakY2afuNANKYPfYwnfNQUhNxtBetanp6ftEm7XkWDiKz3Nwhxu3ccwL",
  "key10": "4akzecXH6QtwstuW9pNkmi8X9ddUxVDUNkjxHuQbo8pNYbD6UbchVPYAHh5n8YvLac6juU3AYjAZdSCdWMfpuW4T",
  "key11": "n6NDxVrcetteKLkcrcgzYxd3qL5tdMhLbSvtp12vzMxF8Ffd24xxZNdgUbS4aPu644y32Zz9FjkodXAt8QijQzN",
  "key12": "4qkGGUrpoCBUZ18mg8nt2NTcnTGXcXUz9fDW7eXD7uiLabbwKeNpebEnWzArARuscdyBRWrnzE1XDhARrJKw1WZp",
  "key13": "52EHhyWZLqtKVvmmsWQkX7Y4RgmeU4zYMjLNwthtDJjFkA9PvqMNPsFfyzpJTSmDTN2TagUhoFvRPzYehCJPYWrJ",
  "key14": "3iutx8bDxRa1on2BcfiCBaf73sCB9zZDjJT44gAkyVosEjwjRN9J48Gai29xBLsT4gYBeP2ALXXaQoyrJ9tKH5x5",
  "key15": "4AqUZM1MZEuvGFvwxEN3LqiSsHkU8okzeoeiNb3kXgQ9MoUjJtxBpuf9bxiiLA4hddh7pDxizL3fBAg4y7yprGZX",
  "key16": "4Zw3c5B2UdzUfomDw86q5GEAK7gUEKkcZzjnF6iubRJcRyMEgvFUm6SwJvcAb2De46jXZW69S1RKdB115PumGio6",
  "key17": "a6HhoCD3T9ndAj4Kn6H16q3mY1uTM1qEjgC4ShVr91VAVHvSRzr7qnosBLnnXR8oWo9SXNTsb6RwLkVC2cRC4F6",
  "key18": "44izZ2pxRyN91Ap1SX52N4f4Rbr9Yoig69KFci8PVNYNzhsatn9dWiJ8mvTKQDGNFeqvLmc86KNbfmgt5hKvKfmi",
  "key19": "WeinHoT34ujZhR84QcQJj6Rqe7qaSw8agxLTE1aFaorVpBHoMXHgoDLKTrcwmM3pdkuxNHTeJdZBbKTsrxDFmML",
  "key20": "4iEmCGyhQc2ZB8n4JSajV7VGDJhmwMTsJD72WhC998RXGFkvA8WrKj3qy7HTiUfCczmocHEPno48WCFeoJFCBZv6",
  "key21": "5xPp5H8PiGdsfhYsoaD9FzLUNkJ33RJrb3do5W6U7vajb81wySGJHEoafeRCMZhVDAsGwPmntvLwkNH8jrJAaJgc",
  "key22": "fkiMDoNQG26VMA1qGeceMiAuAs3MT3epkgPnGqMyh13M5fJSRAGjNXH7En2Djf2MauoTqqnxcZEq7GZuVUX2TrY",
  "key23": "TZGLjLZycJx3BdFofncm2tLbTjqKTpbQ8SAyRDApkzkyPr9YZCzJygXxTaN9sdHZS6vz57BaKRBAjnskcy4KRsS",
  "key24": "5TFMJq9kCCYhJsLaXJbXRUBMwed8ybJZwf9EMHGfZk5uRPiXeEDjpPBvVX8n992JCRw9sJMLLFvRPaE3rGFZnHV9",
  "key25": "2am1fULSen8A1c8CfkFFA3hAjxSeJ3TKzzuqZYnvK1R48Kkz6W3KoGweFhX1hW9DbKAVVu1XC4KvUF3yj2sty3VU",
  "key26": "4CadrbQFDrMbs9DVcri1kkeSrZg9pqSm8padkAFuymkA2eNFKwQh6MAUFvA4mwgSyqZeAZiy4TMYryJr6GC3qQsN",
  "key27": "4v4BzbYR4prWytPNne8u6Zzq8zSJS6jwdPZX14rzCtpsS7Dch228QLMNtTomcxUteYjQbKuDeaNLWXzhxydsijxc",
  "key28": "4tcqQsCYvFaLmcGhnCcpUz1ecm7ps5Wn5rxXdXb2ymCLpTV9AVmzJqFnDBQVKPGLpw2p61u2KfxbMRsQjFXoMZMp",
  "key29": "jUoXajeNeryMUw7mTmC13jZPsytNgFf55dz6LvGpKzTreNXeh8PuKpyxR1rmfjxVrLra7TFrPUGZrVuExg5f3u8",
  "key30": "4uuVNxiYC16RGKH5MEWUyJgq2HRur1S5xNVX3MUPn9TuMfjfLqZxU52N3q6mvz7aYBKUBUT21zz59JVEXYZatQwm",
  "key31": "BHuLaFGWpJ8rTooLtSce7ytkwTiAuVt9xk3eyfZULxRErdtdFuJMuDxWrEQsQyALoDZpbhESx3PB71K9eXkZiNc",
  "key32": "PCxybhA9YsjTRzHgJszzqq3aMcKUBeVAGxX2KA2iRg66h83rDrWJtVQXEcMH7YXoBjptdte47VzyhYfXLABtYFy",
  "key33": "34wmg6dYHv6cupY4rdr1atyNQ7wHobGLKRttHQh1sLhLJ7QgB4ksoCrna15ejNDxeVqgZaQytBbCenF369jcSaHH",
  "key34": "3S1PsDZ3vgsvKhx2xALxB7GGZnrY5AybPCDz288GBrnCt6fiVHRrMgCFYXagjBxKhp6TSemsLwR8QbNvWkP2Ff8Y",
  "key35": "4uMtkCGdJb2TDCqMjeqoiCE3SqrxFzyn7dtkCrm7mw85jc4WcBevvE5zMyQM9mCcK2DPnsXShpNyoyuWE9jRn6zB"
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
