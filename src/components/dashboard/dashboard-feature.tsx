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
    "6E25jAi4oruYTszPmnVo2Xkhx2CFff6T7JmXbmYcbuFGznPdd4B3WPj3Dc27r9FzeKGmWsYy1mtQ5RuXhgFA5Wz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xdifyU456tgWaWsdhDPikqBBMByPSjKFS18NJ5EQ67rPy6EpMXHW5aKkSgQHb3mVsUZrdBNVyzcVJ97E2YAZgei",
  "key1": "CEBBFA5Uy8T2kL4c4J34FDRxu8gmvnbuR6ToSHJiz7oLC4K4Miw23zMEZGJmaigZojg2offYpnqEf3qWScA8C3t",
  "key2": "5saZdXXoWWPUg2pSK9oEwprWHgLjNxbWzcFRHCh5iaGV6vg9FtDhS1xeAFfCWseegr8TXW5gboP427rkx8qyhDuN",
  "key3": "3RdPUX4VgB79YyZcD4mTAx3s564hxKrWT2aDACXtQ5Bt21yEu58956iC986tR5ni4geGvbuGafutZYgSKmtFYU9p",
  "key4": "3V6HV6VbdruEFpFfmv1F4Am8HEZLKwEPvmPpdXt3eTXqLj8qHuZHKn4RZtFhzZM4XZwFCe6UUcVTcLczA1iXy6wn",
  "key5": "3YwvPHhpPmujxVh8Qq68YcAe6ds8ftvg6r74HbjYqZb7QMM9sSqFeRNTrvSKPQvvL1ZY3av3ud5J1cH317hJNUE4",
  "key6": "66WMBc6gZvLmW9Tqnh4TWHGugtchTiuFC3Yn7UsfF9m4nWqQ8YRgvV1syJL6DnVqEJnquNucLQVYUZJxod4tLjLF",
  "key7": "53hDSYyWi2aCJ8gkiFm2kboCtG6tsid3cKbMPuXoBWDudDsQyrHjfHtN528uLZgBZ7ztvMB79eXsAKGiLBB8vk1i",
  "key8": "4FcjSygyvcprxM9HPCNkWQmQE3BqZZES6env6VPHTvhbtG7tGmswT9xnEe6GmXGkPfnP2RwJmMPwDPu8xTBkmvFw",
  "key9": "2FMQAu44unEqsz1YwAZ81oggeJ9Rqs63tVvxLSXyi582RHr6x4NJMfvSHaWSPkNtkatDKYdxCWAWeTeuzNVPXU34",
  "key10": "2s8VaWmDcvdrc9K4n6FJkrojfEJt1jRQrN2PaytvrzLyUEHYYD9DbJLfXVWLkQWTMzuyJYcRUV6WAxQ8yZPudMqn",
  "key11": "Bk3kRDPzTKPWCgNLgs1So2422JHyFp8rqiDkDa4QNBNPyqTn81sqBaKjbTgmxwiMqcUKmY2d5mqyrBndBngsdfU",
  "key12": "55JMCZzQCKpwgjqWG7m58ZEuCGCsm1L8Wj1cxRRXramWm3r6Mj4dbXy5qizjG6XpSG8Jii914dr2xEz4WPq6QnZj",
  "key13": "5d5yfnCXbqbfXpXE6jUUJPcNjRGeqo35Qa9saQBVVdBQ7meJKL8m25V9fsxuZy4Q6BN39BmKGBfh75XcefKbHD5a",
  "key14": "WqKhEKEVkNF7ahJWcLjZVTJzGDF4ZoCsF8iqr8dxMhpYkv5QWy2gxUE22mZY8JcNmMUEUG226rwxXUz9baWtuwp",
  "key15": "4A2Dxb2gUgdVNgMdxxqaKVVDppFT2qgxp6iRAGendM7epbwfp3uYVQ1WWAMkCFg9cxCN7w61BtLnbFMYsKpC2hS1",
  "key16": "39tbdyimeyc6S1KYzMSd55yBgo8Z57zUSr9kj5MSHudUP4y3jTU4osn4KW8XMPMmnQcTJSobq51xaFZ3kQnEa8XQ",
  "key17": "2aiM9zvwJ1E3eBwkfY985Hz8hUdkBfcNGMKjrQSPNYLhBgysMAEZHoh7hWfBKcNuKHWKCZ4Ya2wtr56SXBPvj6uc",
  "key18": "4ALMn59QkBp33kgA2FKZVPhany6S9f3qqk3knp5xLtsyxCfJ3Zx2HB676EXp1MPFfvcTbwJF8s4LwBFiTrTeuxRV",
  "key19": "4FHbtHVDmYuhKYEeMhY4Gi66FvXP22UsytbQBYQNpmCyFc6cynPN8hco5nL12Lf8RMrHafbswdBmh8BHGjimJ9d3",
  "key20": "r5xqsP7whMJ3AT7k7JaXUfxs1ixv5Nyq6RPTf9WHUXbxBa647EeACHhoc6h4sFF8tMRQbPDocpQJYuoxzYpmR7X",
  "key21": "4mKL2s9n1orq82VJYim966cp2hhqfyYYXYLsKwquEKjDVw5XvJNp7uxmuTAiG3iwhEFWJhcS484WDin7Rr59nsW8",
  "key22": "3d2VoeVWBQSKbYttUatvedrSxvKzzTgce84zQzCabvC9Am1yjXp2T2nAQkrsCwYzeu6xPqA2Ay3wPB6y8Z2HkjBL",
  "key23": "2HyYdRFBaFdSi3u21M1EmqDt4nwTv8rfHJWVReijzuJ26Sw5yFz8tSibCy1Wv67iTUKwxXHwH6jaoZ6CREAeSsam",
  "key24": "5nPb7NX8Xjr4FDEd8CyqmVUreCfj3stEjCwdoQhCg5QRchH6RDkjqVgHtRp7P4kCq3EiMVfh16uZyetfvZ1jbDQg",
  "key25": "2cUgLkU7kHE17QVJXazzQC4vho7p7tWTehKq5L1iemLmeSfSXcrqYfticUtA41fpHQQ44h72RGA6my52jYiPiA77",
  "key26": "4ijnwhEyH1JZaEwJah1gnuLkazpcVnf2HZTv1xWr9FUUFnyWgXjzWi4ZpQmArJi74ZuHZwsEDisbgLS2DU4zWLtp",
  "key27": "5eBVDwZRbxQiVnKMALuSEBRdfG5So9mELbasZVstZ6c8mtnmJa4k7t2gWTeGEjVxTuEMjbHsXChHmCbtu67GQtP8",
  "key28": "3t7Ud9AfzLeHmJ7bx7n4GBRJEkhTQJXzf7pxwegYwJ9HpCyqvRsUkitKvUdAXx3YUjQjYHuwHx6JiwkQA7HuZiBT",
  "key29": "2frzXcZh16vFh6z5f6GHb2wNTXmuNcG5X5EdyYAf6gZZSbqXTdBErbaYUEfAFF9Bd2VcZPUkZAxtqFvcmueQh1oQ",
  "key30": "5KgE55NWvtp9QRxdPhukJMtdiqai4gWYcfRETxrZfYfd2qztAku3yLim17MKFyNfEf8S7UWdWLzyApyg92C97p6Y",
  "key31": "4AMWVp5aZTo4J4RkhZ5sDw6TJbMEtaedJmBaaV1W4VwtKqkLdVcN5Mp1LfeJiCangeDL3G5AGbYJdyXPRjMcQidS",
  "key32": "BtWvkpcXcEujDqRYUY6YFHCxDGz9Yfow8SmAe3Ad1HP57x5xMwFTcxh24cwxeNNGH3RxeXEGv5hpjRbs4qtigun",
  "key33": "3MgK8soEiDoF56QJu2H5gd57y5KxdrwNbqAkMKEzx1pq63TsaDPu9J3hwPKiYEybGYiKUgMz6dDDMp39tHxb1FSu",
  "key34": "2e1Szs7UgNKPoup26diKYrapg9AdC5aSsLRou4hEnXCcti7XHdowavmw3sDcL4etxbzp73MNBvpWphiUSb5iGqcA",
  "key35": "5hLVe19Sa8frDWdf83aFUzaGYkmKi9zrS6DQRkdVJm9LwzP8Krg3RUPntDED6ZEpNcJwGnEdmwi9YAgfCDE5nXzK",
  "key36": "3LVPbRKmU4hx9EDSsZfZP66u1r9F7EpXNvadNCf8cTrGitgZ5Y68oVpm9JrQgaPkkB8GbyQirtuFazjd4Mdo6nLR",
  "key37": "wZeHQJceAUnBXArsr4e68o5Bth8Jq6tL2Bzq2XSy5L5K79wHy77a6RbCypAQmdYGXhF6ZLBwduViyAWuMpm6h5n",
  "key38": "4f35ABbmZ6kLj6AQo7tPwHPJkktmqMik723Kyv2U26UVsB174ApgQQFKsAC4dvsaC8S1VKQzAU78hJartgs7krqy",
  "key39": "44cdeMbVDDXXoPe87RVzZPa5UALgxSwApsYTWTaaDYcoXEkkvrXBuQm5Hfvbj6oQALAcNhbAwURtaQaaNeZR8pgb",
  "key40": "3bw2sw49Z1nfSs4fzqVnTq1aLBCyWoVDsxd6tdCECcUY9uzgqFgyJTfRNnHMpWwiFoUibAbTKfb4SBBDNJmasCcL"
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
