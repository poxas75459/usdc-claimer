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
    "218rVoJi3irti1cZ4MMfSBUc5bKjReE8MwwgD8LJ3MXB91zUkL221nps8kVcjE7T4AKooJV5VqygoLZyqbTxdvoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VqSNRyF4u7JLs9UX4huzQXX5SdchAr2DENNrQ67sMTo1T7sqpmWGp1eR9ydSHaEPL6KFtMs4oWMgTn7Jbm5jGM3",
  "key1": "4cUp8ykn2X1sD6SHG8EBMqwgdUSCKd2UioUjw5GB1RghGCFLsoTC2gxNx4Qu5fxWZLtuHmt2ZwW8N1u2eBFxfcWQ",
  "key2": "5Z8aatSV5siSSD9Ak1YwnUNHLwiqMGriLKwD6zCpET3bbja8z7MvqTsuLYvGAaF9AXSwDZkHpjqxYhmc2RGLYeJa",
  "key3": "3puNmXTRob1n9CP33qWr2j7YHskQU6LRmo6MdDK46N634iNjBLGQCHPwBHprtuYRyE4fhH5Yt3eBUStMtJB8kjfD",
  "key4": "2SgaSPXSqwqEEL4RLqUEaoVVoS44hiHVm1Tj9nojQDoyQAqseDRnwJHcaSkm6zCNSxF8EizUbNtAX15ZKgqCsopX",
  "key5": "3JCfytBH6y27K8etUtZi5naj4XyvkY3asmugqwro6TvqbmimyBMCxw9JTaAh9XhTE5ekc1cfwQtxpWGFPnodorF1",
  "key6": "2qx247Wwc8r2fZt4UGEtXpADL4C2bpTh6F9qnNG81F1ZQtzhkvk5K5czfAzaDahinpaSLKptgnw5Fh7dge6B4FQL",
  "key7": "5K93SWd3DftCTejsusN8uu344mYmtuWsDJosy35C9fkqKqGas7fAwRfFwkLbkzFJZKJ5rHTmfx7ctNEcfwrocWAM",
  "key8": "23pN3RNQWJr19yWpCYbcYgXxaHzvoxG6TS9YYh9EtS1aDB76omGcvjEhufu3wo35htTJZnPq2wXzwXydRqRMEkvP",
  "key9": "4NHj1kCdphYKxU1kVDKDRPBjdWw1iyFe61ibZTPD3TjYTUoU7xfmYDoZZcACcdsXwefU4nSna2Lm9atUXzzHkebe",
  "key10": "43KTUztkD8NNhgPJbK1RXoNEdxR6CBVNJ31YoZacfTM2vBuoRB2MHAayYzhy2wsjCVQmaffqvh53f7vAD6pEQRAx",
  "key11": "29vbMYBWfHvYSNBYRUGqxP2Z2CoTh8K2TYCUprFYSb7wFbWozmQuS6Jy3n7MPP3U3QVrKc5sYbvT6Cd87KP4V63W",
  "key12": "5gUfCzHqU2Aivkbmw34MVhzgHMmLeboPYtWcJgwN1K7EuQJ58LQSoP1HPHnnjH4aQtNpaEzP6fmizxGsdhNYDa7v",
  "key13": "47xbFDZB8WFn1hUyfKaDQ6WLwv53Z1dJdjnSNFS4497Sdezv81TGJCYTiDHDbECvWBj36Yf9m4aQB7VbT3StDEnx",
  "key14": "5rpq9CqMwp9Wp8KpcitsFM1k9HuQLzAhDm4jbV56dPGD3fypCyXMvT3zsu1eDDY3w1XSVzut2pmGoCz2XfCTjH1k",
  "key15": "wbgFgUwYYovj5NjPqpBb7JUKt8VxLofcNKa1bcNdUFRdrqeYpdCCtUitJa8QAkUhAhSJ5gCS3qKzoSgUYT2ofm7",
  "key16": "4x5K2eUqDysefQxz3BYmCPMP94TjKfVDehBfUUaqY1288jjHqcbtbybXM4CjKz5ZatwpmfPoVcxXE7fofhxpQS6x",
  "key17": "3cGtM2BasPTSBd2jXQ9fXz7ucniepyGA5tCWRj71qrzYfhPBD4Bq2mCNmASiRbviG8g4USeA894Fck6q6U1DSUJo",
  "key18": "5p4o5QQ1smNzNTzG4bvmWm4rBGtNYuxQUYvm7UbrRKTvqgkYUdL6dQZVvwURCf9P3r4TxX8gYgaKLQFfgTpUCZQV",
  "key19": "2YVFTu5UeCFWkpnzEK6trvo9KjYQeML6kawUDgCfTpuKVbompAFJpppAXi2QktukvY2ofZ8Aj3CoYzruCeDeENaF",
  "key20": "3rQQwiWPvkWVWFj4tKk7gacseiJQVqLfP2DFdpMhm9B9Z9f6MdstVcmATJyKXEgmva6Vdp9o6E36WUXhfqRnFBhU",
  "key21": "PQc6Z3dYdDif29EbDxrtFWDLWkU6yJYKZLUME5k5BBUR5sjAkFk6PihGhCacnc36FjX4aQEzC7uZzBAH1rfAKnt",
  "key22": "4kjAsjvcA2AsG4pcDYC6hHbcmvGXu7p8VtTydT6tkPXs3Gu15kr2vAbJVbkwxXFDEVFPPQsAC2ArVWQ4GqXXPSfd",
  "key23": "4jMBP3PtgT5XZtqrzY3eUP1AvYwTjHbVgMBYQxrZhy5swn2xpQHSJZABNxEViE9nwZmeiTNgdhbBTNtso7txFYgP",
  "key24": "4VJHAThVziqzs3e5cEPFfQZupDrg2g1q6sZJ8HHETHuUByrhVrrL5Ju92fkghSp2dDPJhb6ssH9mAGjaX9M13eZ4",
  "key25": "2vKsWAMxDfXNRn9RBZDLfj2ynCnFnrv77PCHVWwnXg2CB4Uj4nEAUDrVyjLhZEnaqpk6bk3X9REb2wqid1ZBvPTb",
  "key26": "3sxSZvi7CVN3yAZzLycwBLa79VhyZ123PQ384b4qz8Vs3A6E9XWp2bVxrmpW4KgSQJE8vwSfRZA8cV6So1PCCiW8",
  "key27": "65sHW71kRWXLz4JAKcJoEmMPTuU5Z2Rau6XRrdWCqsqZup1Pvkiv7313o343jPtgGejvouoyVviAhx11WrpFJyXj",
  "key28": "2pxwV2uQ7Gpr9TNr2dPsP7TwunMXywGLgi8eyL8zZUKfdxd2onzqwV9GKAuY1A4wwLVdJsdq9CbFWoopRxbgdce4",
  "key29": "3CkCxa3GWEjr1pBeDaYqbtqcyMVFkw2dNcDbDx3iXAhzt51PFSDm5FuJVukYL6K6X9vnf4jANsFT4F8tp7mSnoPj",
  "key30": "5AjBDbKd79g1Asy9UQZ9Lj1xFo2Cx4gz4SuZJmoV3KFLq6JNmDF9i7odRedeRPS6aPuQZvaKurE8dhpBPD5EcZA9",
  "key31": "5ECqisEw1DjtyEvVcXdUsXS8egLnGmr4nrDR6ZrpEiw1iXJNTXdf9EvAxhZmTUELYhx91YRLa2vXS8ySBfsZafbA",
  "key32": "4bfAPWRH1Lw7tUoifT3NqVqfwFqi5rU7uuyQ1KF89q9QXDDvyex5Pcexh8e3PaGYyNYoqpjK7Sz3z2zKmYVgazNG",
  "key33": "3EfF1xa4NmtVCGRv9XpBSdNsaYhv4gGDZm7vgUircBruKrxvd9ZXgAXtHi5zyojQxWvbBMr7aL4r3y77s5BGruQ9",
  "key34": "4WUrKCKsYc7tqs2QsUiyc8N3vtrcxkmujNiHAs48BZwf6ejoDPBaVFEivgpDA1caEob8L3UHmdZTuna9UZDAsDyY",
  "key35": "2ebedxoBhT9JMDRsWXCncQY4Df111cQc5igtX8gJ5tnvf5HbZky1pdazgZbHEFRPA8cjLVdzdAV9ipqA6LvnTMiY",
  "key36": "3BwcvJNBEZJdUxcEfdTERFraUJmQDGr9G65Jrm7TXYco9xTkcD93cGK953UoiWHEwPKiuDaJ8wF3tjVKRBLVqeVx",
  "key37": "5PybhZfc6SVUMGhMszC3S2qCaqbmGnyN6LRZqYZiyT2jeBYwjoKGYAuf59SyS7WfmHZKVWqpsmZzR24c7zu3fBu3",
  "key38": "5V2wLX5iiNx8mTiGpDWVWCd5ZCrCiMEasRExcLt1JNAyRmwyrmydcehPHArBnUM3s9wHcggmN3kc2xtgjUcabZZc",
  "key39": "3q7yr1kZxm9H3h3RUE61jZYpX6JphGVvw7fhpDKsgTmpWTAvEPjR6khYMY46jwBUd2bBwcks6CFCDwjcMnwMA6gP",
  "key40": "2M3XMsFP3uv3LLZs9ctch3cP7aQMWV97WXCTuiio9EkCgspx1z6WfCiewrnGbLDVBxMkFPSsD4KhizFo66wtxQhZ",
  "key41": "t6RzbtWtPPHbEfo9Eysm6j1AMYXvpXhakVJfuKGEYMfvXXV4huWxNP2dgHfGCLeTxqabodwuc8UJSDGcNnYTxK6",
  "key42": "3HUW8HsuucsoHiM1YcjskocsR6V6wVS95ZzP9WwNojXgwowuweueRisZkYRVpkoPfzoWzBmw7e6b51RVvQ7t8vcM"
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
