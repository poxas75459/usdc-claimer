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
    "5XG3jSCEhBJzcdUGcJ2YfriDRsioGV3bbBHpNPafZF5richxdWnFE7vKbrCBVKbfr4YrPVZXZRf7o5jQyJDBtnW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55CQ6GXuFcCJzmsaJyr1q5pRmBw9TYjN1HA7sN2reRigJcgY5nPaz8dm65okNFbBkAL5XeeMeC6e9WsUpjTMsXET",
  "key1": "2wnc5pMjsB5mSjcXLdu9TJLCav4eMWJw8inFtwgyD8WZf2e2ZUzvgBPJuUwz1YWpS6TyN7wW42r211mKvzxGDWPS",
  "key2": "3896Py6uTAPcAGAAQCyqNU4s93cyX8XWYzCShSdG9jtXndKqtyaRwamh2MK41h3SqjovipazQNXtdqRsdfG6u1PG",
  "key3": "53MGGp2DWy2geq2M6gN8iECNqsur8MhVLkEtGJoFDqYVGAaKp8XSc1Qyw1FEsYGfVYrHggFnEzxD3Z6Unv6W1HXS",
  "key4": "29e96YuhSm9CC8eRuWhQE33jua3uPduBrNeiFmCBi74RC38D8FsA8NDqQ7aepZWa7PUCJxtoabb9TkKydYrWwDFU",
  "key5": "4sYx16UjSErHHadaLgkcDmKhnsx4jJ1Lr7PXzeRxra41mzbih9rZAiYEDPWFMGXpaiDakkHpyiUEWSenS1JVZSen",
  "key6": "2J2zRp38c43RKiwRReTSaGJomJdrRX89gawTJHHWrULSviNZ5AowSyiYns7nYt1JCaWybPdtEjiudk85nUEvqCUn",
  "key7": "35HLtLxxkDHcXRu98gNBkdzeu9gWpo6ME7Q5Sfw7jnxfv9xAUQtZETQss69pY2WwVyuEV9C2vEbEQffk3spYuiX9",
  "key8": "5b92qxKZy665RhDxKRcffnx7PQXWmSRs6XxG92w6vk8K3qqqU6A6RqYM78X73ykW9oUuDASVfxYyxmqGejrpwbDo",
  "key9": "a35cCircdSuGPV2rbJpZisGy8jdVZwjCAjDKmpmnuYDMc6XMjce16yLwFkRu9aucbNikZag1QaxJLPjTbPqQQJJ",
  "key10": "UAiMSkiwXVTkgZj7GzqmETu3bkqxwb8sxRTeNsyHXsxStBMyPCfuV6E31UwgJ1yV6CyXYeeQHWYvNck3aEq9d8x",
  "key11": "4GXyWPbgKJrCqSTSkLRvrehXEWF6uAy3yFincM9kg8UVRHKgGMVqFoutwmG4JM8VHPsTn1LUCkf3Go2vzjYFakzP",
  "key12": "5uQjCzWhj3Laoo71E486U8SzEJn5GDgG1VjDEVZcJJveNYthgcsqXAqyPVs65pZwEWzgXz1NpUdD72sbJ7XpZs3F",
  "key13": "4FTv4ft7xrWCMdRDMQVtfMsRm6ESVv1FNHTYpLskr1iao4fAn8HshuUKqMx9ZuGPxKWLAGhgGWzf9bmocwkpb7YB",
  "key14": "5pvMF4NHVWLZTr9CzTb44SFScfT1RnBHMH28fMp6gzqJDDZvdMvitxbXyLbqRUHZJ77BL6HjZbLJQTkJ3r7F4ZXs",
  "key15": "4UzT6f1zTqab7fkYbSSFnTrA5SG9VBGR5ruph3SqUvJHuAF8Fv5WsxXJgMXEMVVeWT3PGcxFy3Kp87mV9mKhEJVL",
  "key16": "5PakYfBvHoiibvbqFTc6Quo1vRACckbaSEBSKZtohpKcVc3BkB5nctgCHYwwcB2XycoZETdWLCrmBZk13FfhU2GF",
  "key17": "3h8Bh8hWMgk5qP2vjSgLdu7suMYoXgSw1vg9H9opkcK2e5UXRWF3ozUSWceq74VPFHgjzhGJ7iise8vPKHk7gq8",
  "key18": "4EVqT7r1to3HT76oLWtHBfhPpePWXgCoLSF42Bu75up25fy7NrJ5k5vP5DN43kdMvJ3xshhp1WCELLwdjh26SF3n",
  "key19": "chEg3z9LPrxyhQHHQWZqR9fUpg2r5VkdPdFPVqLz4VePdKRdxMXYkmPfBVYXx51FzCGfRvPKGU9K6iLCyuAnke4",
  "key20": "3ynKbtHiQhkvRcLBDEZzXmGgEESkTJpbC4ktb7yYVmmHsLNkoTMVvmbCvxGQRPfnwLcg51FfbtuusqcASLzhcj8S",
  "key21": "4aCY2Cwj34A6so8qCWeH7MZ93jLAZcd6wJMSCNcnmmz6KAZjAAXWwZbZQewdpdTHggFi6JPMvKMtt4gfaxyLSAPW",
  "key22": "25wH8k5NeWTnP3yx6i2hb1aqLpQFMLcYwYAh8PcZD92eggEPxQNnwUMm1fxdyxCfF3XwtgoXQKYFTn4dBJAE96mC",
  "key23": "HAD9WrWAPCxvC4q5V1tSNM6QKAxgtkSSe97uQDniToLnG93KAKN7nk32JDWLQjTeaTKPnYEP6RGvgtovMbHEUXC",
  "key24": "3VhYsDetV2H5CRQx5av2FLgpMNUSUtcCpdNFqbvL2jKTiZ8FzySvDa2m3QjUXsHwUYbD4RTDL5seXReb38wDK4TE",
  "key25": "38Ur1EtpXd5gqJxuVFpC9ZAhN8VWFDQ9RxV2xtyVmnMj14k5K2gRqmGs3MoWv2be3qUfvoZ6wCj9kDcwa3t4L3N1",
  "key26": "4QeSXmKSPoJTsTufiGH6aZ4uPCeVqEYVxnm6eiJhUMre3BbeYZHWtGmdH9tnDwoLDm6x6rjT6Wppm4sFq3J1QBKj",
  "key27": "2Nr39gNXphfG39pM4oMWfmPd6BANzVFAv1hXPBF7bJoGUYgNziPYxk3aayJMTnnsXcwiBYGLm3KToUd6XW3fZdfg",
  "key28": "3KMpg5e26NTGK4Euv8j3eYVaB5Q1coskq5vDeG6YVrWLCoxd1t7QbAdA6rgrqcawnjTb3EArNrHvNQ9wHXSgUcYt",
  "key29": "2YD9BQg1gKwQGVobUzdbPZuBfmrYCvsDtbavANQEUdCNHTAugyeztGC4ktT7wXWggyifxhv2QQ2X4wtVrZcKfoDm",
  "key30": "eVqXDWLaMFFp7QN7T3Eq9hCXRhRAxcPTBM8TyqPKFBbZGqHw23PECRjGavxABfJuBW5bfmsZXaUK6oShiTZ6miF",
  "key31": "G6PkRkv5Cm2bYQDAKNbtB2yi1pw8pryhguDoqUyQxyrCKynv5bxEqhAu752onpAMm8DcfrBopjHx9nMFf13uFFh",
  "key32": "2DNqbXA54NRuYPqaXVTHAiHpJ8cu9yvUqeytU8Z98WtxDHMvjkt4Xu1uYdbWv26RpDLLnZz6PRonk96xtwsYe1fC",
  "key33": "2TbRocyHrcawrPGokatrLMWTWYMewDPgis4ndKvMxoK5jH8rLwth9gryohqbvdYoDu5uNeNav2qiWv7dePQyMK7k",
  "key34": "3uhiRugkjSr6XxtBaBgqKWPdZ9jQ7W2oDX41YeeKa8PKv4wo2f1BBv8vwN2GjVgAi59fKqrbQWbaFwf9eCt3zTSz",
  "key35": "3vv2CD22mCdAUaV41TyBCjppHgGJcif3RfkGj4yzA6vCj6tAZ3m2X4874g11DyEvBk3pvY97qjGCuA1nh9AdLqNv",
  "key36": "3rvUXbyiQ7V3GCgM2g4iUpCFtds2pTk3FBfjzfte2KM6AC8SHiU7shpjCynvtWcAevA1icWSNocVRDj5GRVRcQbp",
  "key37": "2gVjxWmqByoSBZCwFpD2K47PoiPh2zwaeAMBw5LPnK2XBX9TFqQbCvjLtUhQaxVc7VXM35YBp7PTcuYYgsyAY6z5",
  "key38": "5CKQhWwxZhypCZ5nCDMMzPKuP7rShUQcStLFkkm7ps9BHRBwADRPDs2UdiusVNtyBwgnoDMzi8RQaHx7imT67Nqd",
  "key39": "65JkAbmUCK79mPkAbFmTf9EAqS8xc3654NXzmSesemvFMzkXAwXTC9nhPCLiRQpsiAJXdtyDyw8xRSV1MjZ4mkj9",
  "key40": "58uvTLcbKZG9ubz5oRKFKqGYN9EbwZgc5aqCGqT9XEFmL5cvtou8cYSGMFGjqJJJBGRm185LA1VVfom2Pveoviun",
  "key41": "3wkhZj6PZK7P9KW4Vf1wbq33yiSyGQ6c9baosw2NcdSUCBVWTAb32Dm3HAk1nKeseH3eA2snkQvUUs5X6pd9c9JU",
  "key42": "23ga7K7MhXS6Zc9WGMLC4mYgjwpWpz2AjDuVGbusLJYCTUzGZsHbrcNQeNXFakhS4wvLi6mPUTgUJKh8Rx2RPw7r",
  "key43": "mtrutMszRo5kfA4FACnfWjYZJUdHwP9ykSxJgw4xH9aQJdDq1GewTpMk2FTy122L3yNccsJb1nPCHTzv6Br9h2M",
  "key44": "5y78GFHr1PgRopheKj5evHKEu53tSsnyMCjnggsPAsamrWbMJCHqWNmdwwdKPk4MqdmgLEBDjvzgTCHcGcEAAHV5",
  "key45": "5V8UFB8cL4FtohWzCR9MeMKrT3ZS57HvwLZ6AS83dC7ht3Xfx8PE867GMKpTJEoUDAfW2wzg7R1t2DPcc5EqjHNq",
  "key46": "4B5SXp3qiPiBex9ue2JjbXgv5rK7mWgVkePeHjNrroD57uNKYaUmtHzKYXKajENC6Y1hatWZDKSCen6jwYVgKNev",
  "key47": "5kA2GNrnyZKuEUzhtsP5SGVkncC6LK4T8EkVwHRJHr7ra51AjMLMfLfiCXxyz3GVt3GDULhVAQmZgW7jofFSwHMa"
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
