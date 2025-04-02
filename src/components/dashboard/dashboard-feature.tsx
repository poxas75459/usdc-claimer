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
    "63wX4u5ZyoZdak9T9QU8qhJH2e3UtbJL1R2erqnWQgNaY31dCWWQgA9QSLQebwVz7ZaS7GpXAMfNtdDKhrz15WTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9GYsgmkBLT14hdsMMX2VZqENcjrhn6aWV7U3soo6djFDU5P1tuvC6L7XSEbuodUEDyM1UMWysvrU3vs7bUgDQ9",
  "key1": "4v4Cxhzo6jmXCXvWgPLMBpPZMKTpViEBLqMJBMDwMogatu6x3RLNs24BGY1xn1agvDgybY75nfJGUX4iucGpxa7h",
  "key2": "49UaXtAzRisECb4YBZ1sRJfhF6BmmfkeZ4Yj9EBvQHPoH5SXhsfLQgRaSy2AfWHfxWTGipzAJgjSZuEBr6e8pU8e",
  "key3": "38qbg3mKYAxqJ4bkvGuafhgVNA3Pae87kMPTC5j1qYhEbrsyt9c4ZmfMjLbNJZnPzXbCp5ACUh59WG9pKxoUmZ4N",
  "key4": "4fNvx33nTgXHhao3Wo8cSLymP3QUGjZgumpCXyP6e968FJ4RixtmJbnzfygoL2wJwmkSXXZCP2V76h3VSgm2HLdy",
  "key5": "3YQ3DsF2vJ4CstnBSzXjgvnRjnpKoGfUJvJ6oRH9R5QQ2E7GyFDhC4tBpqUcoDuwF5nSEW8xyWtffcSLpdRGVPG8",
  "key6": "4yRwz3vKcW5YjLMYYbTGDPWs1obhMtKGJweGrHKUaycB91DTPbNc2mmXd4wjvaFJhcEAob1mY8MR7PDd7X6QHcc7",
  "key7": "KfMDPvtYaYHsmpFuaHt394AEP75c7TbZPtnkQDt6iFiycVZCPowHCko8Ymym8YMAxedYpdAJuXL5nieigix4q16",
  "key8": "vFznDH58q519sfq84D1cgB25z2kMsqRDNV712qaBLqvwYWybCbd6b2SYajEiuhPYtZhbNB2GM9Cndf6ZR65Tz58",
  "key9": "4T3hxcMmbKQsuTJ7ssDPBUaoMJHzNb9f9s7kGzTNFG8J6KF841zSWa7n4xjcXsYqDfvxDLPR8NTu2FbFadKgAHUy",
  "key10": "56NKPDsMgxXHEQcVwBKVFNzywVL6hVepxJYFwFvh2Eus2h1Xgs2YKjeAUFsoJLowaHAPGNnzX95X1UzmQRBnrWrr",
  "key11": "5uz8tTsUzeY9PGQkBgw7SCdk9zz5FURmuSdB83riXvFq8JubvYgnQPsyyfBn4hFUj8drKsuofhs7osjt1HMpCjTS",
  "key12": "5abA6DdkANHYhmCth2hRfurhdUpfDEtTLbY2F8LTyBPtugtfZfG6sMhMj9XAf6LNfDggd3oCqZT9s7RLxRQdEJ36",
  "key13": "5ZT7o6hWwaR7msBPPwzvzmLK3MdH4fYgFY7zKTPsk8hFZHPJFYwyFTHdhC3qqsQ3wdci2nRefXqyAfiUzViHqWMB",
  "key14": "5dWURfgPy3K743rSHqf5AWiK7WK2ynDWB8gPfC7bQaNiePPLVhqt8UGeypeXN5qdpNDNnhav9cxUwmytN5SToDv1",
  "key15": "xog3tAAMWBqnT929GrxbT1Wzi6118DyeR4y3ENfkfpYukrz9AXiN5m9mFS8ZGYZE1hHyuSwLe3ea1Mtq36wt7oD",
  "key16": "4BSjcShqPBeFPJRC8GxeWo7LRXstJtTyXdfogyQfE612wrxt245KmRAjGTKLFs9ByJrZJe43Sw9doQCigNyV3cNU",
  "key17": "cesontM331gK3zPF4HuwajdLMncxpT7CGjX2tvpaxEYereixJmC35A6YbcvLStGGi188ufP3cGdaH42URSqunCM",
  "key18": "4vNUSjfiRWHJPMsp2RZUffhhhHQPQ69VENckh9VVpiVE6J97JgbSL2EWuq7uuUvGmrhRbHTkg7xXDHzhHAFyUmdB",
  "key19": "Je92iWXzR5k6S9Y3KpSkBpBnkxQHzebwJkHi7Ecqdq5LthLghW3EbiFFMaHiAGboEghGEWvMsuzsbqtN7SzMA3L",
  "key20": "4zkUhGayJtfVjdqNzVnUmFe6Bv8VUiQGFaKX8nWxSmkQzEoaLRrsfVoWeburVBmmpomU7ydDSECNiWeX2AjGu7e2",
  "key21": "2PrUKiEUUDWRcyAdyTx4iLHy8DE3t44Y4PUCLaoVN779vDdKYRggNmb8eJj1WeWrC3dSqdd9Dn9ewtm2jrypKzJr",
  "key22": "62eDbMm9icyKnVgAALpXwYUp5we3D3Pku8Kr5QvE5QqgrXwMvoHU8Y5Chk3PmWZMm4fR8MbL8HjLg7H6WDFAKWHH",
  "key23": "5Y1L5y6whHUzv3KaSiDyyWaTYYB9fa8TCexeCEY5XHrw2Md5tYgJM4SVHmKFaLdcyEHBD8iFp4eUDE9CkubfZ7rs",
  "key24": "5QFW6YRUAMmkAMRnxStmmbrw9qqBDz2PYehf1ij5CEecSVFpLidCUKXzkHyysc7ETcSRtvSfZyK3qeRYtrbtePRc",
  "key25": "EVFqhEo6WjemgQRYZZs5n81Ke7PBX7NdH1o3pRHCiXAihPsut6NovN6x3KEpWnbjM79D2vAGzNx8tTwewDQ7CRn",
  "key26": "52oDiXg95yDZpyk4H5gybuNe9ptSqBhuuWAGnVUZmZ5gxW8mfMbBhfMizDZ3hu6qE32z2HuMXQy6qB19rdEdWh8f",
  "key27": "2LNdKBFtxTxPhSs9FnF54wqKsCXXTEK97MwZwErCfpeyDV1iUDCRP1eUnTBjixepW3ZrPkrWn7RcPFEGXNSsMJfa",
  "key28": "3WCbA2kcSNFkNxbSfNjNQVzDe77oHJCTriSYgDmYt1gNPKGXGB73zkGMZzDyVU4KnL1azCYHqTdG6iAgznWcyEVc",
  "key29": "2FyndT3cN2ALrWpa5ahnHvktrqsxnxkf51Xw9WmBegAqiAXcZmy3ZprGJjD5Xro1KDtNHS2aBK3vGeZKxpX7poDj",
  "key30": "4bxquArjd2gBEMAn2syPKYpZFm8emC5R7vwUsUbwff7DVXgWzNYNwhmEjTZYhMXhb2QG7Wsdr2StMUDKxqAU3Dom",
  "key31": "3JKjoqRGT5uJW9nC9EAcUo2RuovYpgBmKAfh1Z4WRuVqXsnwhAgrc7rgMoQRz3fYpYPWQCtW7UaapKMnfBC34Z82",
  "key32": "5xPRiVEoJ9CbF9i3KBRNQV7YpV3NrAJRkxCneaMQsCG76BC1XygGJKCuPNx3dmgiQutQBJ4Z3yBawNVMCZJd2SYs",
  "key33": "567yyoeGi3VSSHn4c6bRumJsUd8GcVxtBekG2ddaTREVmhGJYLGzr5h6pQV6TuLdQQnsq3SZQ8eWXoYWJUyQ6PMT",
  "key34": "3dk4QjLfCpTLWNaG2ertCRw4wogNCqxp61c31LahBEsxuyK6BAzXs1nTdrypbWM8Ns6MigU3QyQvCsuEHyHHi8ad",
  "key35": "vY5FsupubwjucdeJMUwCYC7wap68BVwxHUsY8GNJkLcf8n1ba4MfGZex4WxpdNfpnivx8aDGfVTqes2JwM2joEa",
  "key36": "4HYVMzxxiSjFGqdAE6m4Tt5983uDLqWT6u2JARbhH51DjMzjsRVDHPeiZ5ruHJz9vj4RAG8mkA7NVkMFkGzkUzSs",
  "key37": "5EbSoRKmbij3rztoD52qGP1nUgyCUe6YRYWugs1DXP7Exaamwtnpga7xD8WvDBnou48abBsYxkdzvY7fe5HTnU5J",
  "key38": "y25CjJtBkWam4ZsH3paLoe3x2cV7bFR5uLhzLCrgPUhNB5bvT5binjpa5dDhRzZegYu6fiuN1HsQx6zcLRT5Hhd"
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
