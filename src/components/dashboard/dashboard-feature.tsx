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
    "4ZNRmxDofTYYsDLXHqSy7J3GZ5gaawKevK5V85ZVqcHWkuwjEZ4vrjaTW8hdqSCJ2C2y6F3GoEfpFf6KRcaYHHFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHViTWi6TDNqhHX3hfNGmqkrt2GRfwwAccUFSdk31NUhyKBLtpbf7FsLmYua9hpUghEiAi8MbSYwxLYeg7t1LT7",
  "key1": "49UB8XfdpWi5P72nTZcG1iaD99LFjxFWW9GDEEJCAEHfGuEzgVish9v65sLwp2RYa9cQsT8DyEKU7bYEgtjpnFxV",
  "key2": "4vrmp8PFexQ7ffZtgFE3Ndj3DoAa5jTmZWZPDXjw7q2HtDMcdjxv7S4Eq8CQkgu1LZcfG89YmKiLybmu9PN6bH2n",
  "key3": "5hUeLrFMQ6MtBt5SEUDsVZZVojjUoiQArhAZZVdtSieYBXBhocjMaat8d3vUt1TKhZyG4ydYLZ9qphDpe8RWHoyz",
  "key4": "5UkpzeXrYRozskS3QNcNCRq8WYkXC8NWeWxoim2YWj8qAWVwxK1Ay2PfBgzWHWzyKov9YVgsTYQYrySURd2MDfuD",
  "key5": "5oYVTjSvWxZHo97xRz2Rjs9gzENGzcRugrWqtn37mfvijq2adhk1W95woSfCfKPBPfUhqkqBaTirn7zXtCjW6G8K",
  "key6": "5MnqdMzSXXxRYyqSY2pttWKXxY6NG5D1Re6FgPn5FqQcBMv5Nf4SBJzubcsSDDueTzVkhfNMexDwEqjv3JypACRw",
  "key7": "3ypM377Cdcui7ETvQMjCPyBfN3Gk6Ab968mqnW8691hkRsnFqTruqizuTT3pmbXBFssiq4jExSEFocRdnfVtHFWn",
  "key8": "5q73TvnJpQVGZL3ZjHbetqtBpA5AdCanpNRks6cgH5w74RFjBWGFSuPeJHEEiYhKrptwvvKJnGchnuFyVwyrBA1a",
  "key9": "3DQUeVXd2yiMyzQruVvSJKKSsPF11RpLEjs8zKv4PsyHiLWLrfLDUEqVTfKAeXUWEsNw6an9tepdYTt3WMxZo3uL",
  "key10": "ncVthMutcqbwmFQ1iKkT8Zj1E6jpEwbpH9rZ9ue8G82dAhrP9nBnJ7zDVcFsexRpcHr6YcfzRVzGujcJecvkBeD",
  "key11": "2AF5sf4axfjv7jmt8NDCUXKYhp9P1T269ZwMXHoc2vWUPTtoM8gUeWFqhjGubengTUvErLi5NPCRGkLYfZAbvZrM",
  "key12": "4Swp3ZGMf4wpLAAkWeTc7WrTMQsToZCJhBMVTnhZo64A5erR85ENZa7oqi4dHjgNH4QJckDKxcGYkBFF4VEpfbXh",
  "key13": "5BDMz1Ues4XDr9uDfzBje4fX5WXyxRtF7j25EmnQ4N4aqsyjMRqtUiojU7wzr2CWVj7LduZbsHvcqA7V4NB3j1zb",
  "key14": "491LHxtbZZY1KfkFbvMp7KmWBz5424asnLuPxjDZ2faHzLAzF36HAhSSLLpWXFw6dbLg9y8RVBwZTWPc6PmF91oN",
  "key15": "aQRP5RyaeAogmPASEw89aKH4rSbabes82dxUZ286X3LUHr7UH2vPfqx77AaFXMics3CCDTC3dqonERSGjLk7Jfu",
  "key16": "2z3tbpEDywCphSgM4rYwUsEMtVujbKqoBWpVyrJ3zV6X6gTuiDg2kjQjX21o4in9qaeHTcKY4mqcRrPLnwQnJMw5",
  "key17": "64LjEJAqy7dCp5eL3yGiTUsvnpk4HhDi4moxdGPRqF4Ygjur5Uf32iuCFwp8CfJTHz37zKo7Z824PtvGn3fo8RPa",
  "key18": "x1ZPMFkfgFhZAtAHCuT8pHpNqjRKjert7DXLr6Bqw9duF8P381JU7R7Wx2AcEpXVvfSwcTtrybBLBArMZLhxSkt",
  "key19": "5jk9WYBQ3Ldw7dAqdVS1h3FTxCrrEAUFJrAVWrz3zQojjJcmY1hsfkXe31BxEgFpUvLsKRBsLhJngtMjQg4AZVSR",
  "key20": "2dbxZ7h1cw6QSxpgADijjRdauzg1hnUm5A6vWn9EAEKeSRsEpRGEydSqCqpnWv72EhMVpZiMbRvhVjVSbjLjEbcq",
  "key21": "46t8vM63dUaWdbTu7oY8fJmkvtYc9KjAwG9YHFv1EZqjvcj7W6vU5Pd2YNJ1f2am8YBiK4VaAXxXh9Y3CsHjxFFN",
  "key22": "3ZEDr23bNKj1cPm2CswzVF8pB5ppMhtCfokeknD66LTP373wHcNsZYgrKEiZwipq3HLFJFqwsrzA6aLog1AmRWbT",
  "key23": "2kTBd4kfSsHyVX5NJ7Xxew2dq7DTEfCYRUCjgtjoVNTqFdgvBMAeLg98Ly9JNvieisvktGv9P75gZ47QkMFbHcN6",
  "key24": "1CLzJHYMabhvm3oPSwVmxWMpN7cqKdQtXqBZfp9D8K4CdH7d8tkBPK1eXTkcC4gKdaVab8oEyu5qBXSJsjgC5aU",
  "key25": "3zvg7vWESzXMWxCra3AtKKZfBf2DS188x4SUA91CmE8Bxmtn9Bz88Narft8QmyvB6BgY8v15AGeAdivTrgSxbFYz",
  "key26": "RcVRnGZrsSLQqPcjtfzDoXeZN9cuP8E7PRi92hgo2SAuSN4ab1KCCKuZHVoiZBctjc43JcgoJ28AxrjS2SxcLAw",
  "key27": "4o6DpMo99nKP6ZEa4ZBTz9vxHFjVRDqdNxq5q486htkDmKqiZXeaST8DKxwgj18ipBNrq4WHksKaak71nNjp86Uw",
  "key28": "3sgX9FZDLYkpzw9DmwNAkCYUCRjMcMSrAvefYLHu2PvA4owt8GdmCb5Vs1Dq5S3SnjNVTP6nESsywv2VBGjxstU2",
  "key29": "4i5CCrZ4B7VCqpyq1aEbposcTsru4TdmraN9ugYSPtvBcV3wdfzb4cJhYWUnkPgr5YVrYxJQsGJQt9P9PqSnX8QY",
  "key30": "5XuNCGrCxkAq523VC3exGT5q4GTjEFCifRLm5b7MGrzayp2oXbAGP4k9U545vH9jJASMpzMd3ycVY6GCLGm15RRU",
  "key31": "DXZFJWueo8g5VSJFHsWJLDrQZQvGVgB6sFv2tN26rHxG34Uw9EfZhsKwFz65MWFJMaHiVAZjQ1DYaqoQtWwCMnF",
  "key32": "4Vj5PVia56ibfzGxUjVtckGDvrKm6RPxZ31xieVzfnGDoehYBHgqPDz9BCDDUk27mgdArB4crbLBXksWzzAbNpQg",
  "key33": "3kUFoFeNnF7Zhh4E8gYiFEE1PU2rGBah6RMRETdr2NYcuWk8dg54hEBV48Sh53iYE4Mo5oTGx8syEGJs1ogQcwn5",
  "key34": "3g2CvXb1o65EaMwQPytE1ZVZ2vejQjZ7ZGD75cJpbvc2YpLsGWj3kBi7AhcrRkC8gL51Ezq2pv8kX6ydeE3oSS1F",
  "key35": "2zLz7TKCPqK9b8gEUeFScsYSJyBuhfXNKSuQGhL3vR7tLhWyDLSRci8PivvFLJFuPekiynmLi2kWJ7Pr1CXikneX",
  "key36": "V1yhLBKKkBi2wrBhASYX5PV8LRpfjDYnxJ1j9CgwESF6cLBTqnjoqRYfhTCb8nJwV9sLMhGpVXcVFdEUgsXYGMx"
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
