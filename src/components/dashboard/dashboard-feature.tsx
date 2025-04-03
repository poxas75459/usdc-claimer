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
    "4rEhfNv47iKbafvpMHP1BDyXQuUdwKSYXXA7saUdEPGPpTcR1aHU8eR4Jf2kf8qmSpMALef51nUpZk498NLi1azq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sTq3p1Y7kGRNv3a7VVWimNS7gHURAqMPozYWpyAUXV286urEoavkwjS6KdMqiEsv2z8uyYUP3WrSvcbELWpKxxe",
  "key1": "39N1Ci6eaCotkSW5PXVewf8KC1WSmrkMvfWyq2N5hR33A8AgazDyr2eHDB22js7H2b1DbZRgBdAe6QC2SW2egqKo",
  "key2": "2wFtP7oHxuebTdfHF3bKLBQUTgvCmreDvN4wn7FtjfdjjZX4xHsBB5aX4TANR8hA1UajEEAAz3XR33GFDAS8NbQ9",
  "key3": "3zasEGnw8k3Vq9MNbvwEX28wL1NWxev9mTDBnoKwzW6biUWPQEqAVD3hrLJwkD7xCDDHEsskTEpZH6r4PycjT8W4",
  "key4": "25GZFT3185mUTpiNUhT5TCvcdeocQ3ZsLGoSUa8GdkURLjyw4iqJ8pSJBPptjC5SF5MRZ36DdY7CoTTq52Rqe7DX",
  "key5": "288zHs6pRy1LG72bTkYvFNjR1jiRZmL87A7MQ7Q8NrAzh1dW7XpQFn4wRTcBT9gsUgpD97EniAwNkZKZNYzRk5YB",
  "key6": "4b6P1L28sHYkEUGw6htETkcgvYtKgNyYF4gPgftuXNkZyhfZGvRT2M4KehcHNkVqUGGJc2X7HCy33QGqM4rqVbCk",
  "key7": "2kbNQkPU8ky5GE7zprDScn8iMGCAtFdEKRycTWHWyAENpkMykq1bWYGGhNRCu79jpNw5s2cBzcpoaiSFBzUKW3WR",
  "key8": "2yWTCVtiaiuhFuQkth4Zi7UcZku8iHPW3J2FeDrmSBRTxEEgkat8tbkaKfnPn7K8uEa9Z7sHdxa2QBCFeRu5ZB94",
  "key9": "5U95Mub8yHJU43z5Ha1SedjgADAbSp1TquS2rmLeP7Ab5zAVWgi8kqWKE3SLgRtRa8Mh2rLMVYK26CW7M5dtzjzt",
  "key10": "63fuJzHPjYdeRqRVpftMZAX1L3ALA2QZGa23DLEwFJ7UQme7adopv43TQFEnt1qQD8i5rLHrveZFs3uPyPeKQQQ8",
  "key11": "2v7s8YRLr352tmXW1oBvy9w9X3Zih5ELFcZ27rz8Z2wenjLxKpro74E772LU3jL5LwVVdUvVJpeae5kBfj4D9qc4",
  "key12": "4yQExPyDXPTyHpnhwmp7Dgr9Q4hW8gNAvkhjzYNTtwkgw794HUzNuHRbugUNRWtrTMeFqwdBumr56oAYpndUG893",
  "key13": "5jXqHtPzSCKWc59w3sS4umMW8U2vpd9pqbCaghrw4RskTVVxwisospp2RvRje6Ju2AF41Z1zdRtSpPR4sAjMeEE3",
  "key14": "3x3iSpncZGpfXLuBB54a1U9Z1ozW2oSg4jbrZH8KA8jhjFf5wJafrrXyPGQXXA4UcW5wFFTypTe9zmv1SyER5g1v",
  "key15": "3VZNFwReYCJcsxHGY1dV6YvsMNcywkRGs9WyfBEfBpkm5KPZK2B3SBzjD5JQRbi3bcCeMNG7rfwjqt3vSLEXemkm",
  "key16": "5HbB7czRN56JHhQzgh3cq2DJpbnZzMPRCT2sAP6eCHeNJ633zSxtJMvR2X14Jy487f6uJNKGorMpSxisgQUKKekp",
  "key17": "51iAroMuXfkEqjU65TAMn3cXKBkSaz4Sdi4TUbS7nHGvUj5KYM7qMJykTLH5FaQ4fWNsczmP1UKuvvstx8jow5oH",
  "key18": "4DXBEtnVCWWWH1jaU8K5AeA7udXcVKtNCQU5oR9ek1GhVqLjvybu99imVQpfakZGJdbYqBmqAxmipxhXLWU7t7UF",
  "key19": "4Z15R2GosTTtBhpkDTVW2KCCQne63bMv14j9sw4UggyU2RTERUubRvUkYdU7G72nQf21PqaKG5h2d6vs2HyJCfuW",
  "key20": "AySnA5DyDK5xLLpbDc6MzFYdkMWVLupoRNjnHNjFRAisJ1fevcc2ysdBiWfwFs9nZYwGJPAmuDsdXWViydnmYz7",
  "key21": "25duNcx7JH2vcXxLFiB3SY2i8HjjZT6f2NBvkKzjrPeuGyxuesoqb1q1w2EXQDwA45uqJtvedhUtigqRNJJ6ikRd",
  "key22": "35fCWFYksUs5XauHeexQAWGi3VsutduuQWRuf8bLQMhZhkNSDGQhNVKVCKqA2TxqRarEmVTpxNawv2FbMYjw3P34",
  "key23": "3Bchsu9cqPuf1LyRr1r1o5crPsHZWnKtkfaydtJZ1LNfqbEYv4sjeCUZVA28LPybWtaAwU64u3jmDpfm7hAPWANW",
  "key24": "w8jqqKh1XSKCFqYLYWC9783ngScL1JLJ1RNMaMiZDFrRQkCNj6E9w2AAyUiRWMLmbNtLt8WRtDMDCCMVARN5Uqd",
  "key25": "2DBeKyy3Gg2Hojg2vAv6Y8xTuzQUGCsrvp4Z6p7EZwmMqESAvYE8V9AKUoENzmMML7fSGLx51Fh84xtTLXkotCep",
  "key26": "5heKNKAcYESr29F8jotQbePobuFZ3rqUSEZuy6N6T1K7NjuduPLBzTK6123TaSG2pWBwBKRyVCi8fLwrftV4qmcr",
  "key27": "4gPrLJcXxNafcM8Lf7zcwXMcvkWTz15GHLnXJBCMfrjzX8DHt26n59L2FqAt9y9YpWqsPHUvLbt87p5m7Nq1SopQ",
  "key28": "2E82ndsMaHSVR1wyEWu2LwcJUV3WB2rMutbupDnSbsM5vgNWbA8ysf8s319u9rAy5CD3HzzgZzCuBpAUEHSRYArj",
  "key29": "39TeLMzbN8X2E7qZ27MCpAnytRHiLiWGvUEEtmmw9QQhHeSXGFKEBcAca77H3v62FqL1PLjbU6RQRX7GAet4jaAB",
  "key30": "5YnnCQhaAvSSm81Bkz9sXDVYLxAa6QbUAVjX4CTiWemuiupZwE4LD67xK4rPgCmW4mCnSsfSt5NLiJBbTEGU45C4",
  "key31": "27uEebnbMd6EjK9nFdPfNPWSo4tKhQjoK6EdGZZx7GDKgMKvehpwBuNmmExqv1bTzKke6Lp9zsRtpv3ahNVZz2aW",
  "key32": "5yg1LB4zU32rkqPogNyvRvDVsCvAjRTw8BvHhnTusjdeCopGUBfk7CHE4Qkb9wKKEWzDXGQ9Lf5eAdndHpCEBnSK",
  "key33": "3zh2yUhLcqkkK1jaGFSUv4bVFNCisEiKMNZmDdGugZ8mA4Nk16bAn4WqTPb8VkADXqP7h4ChG765guniUNudFig5",
  "key34": "iJwGoovJE8VF8DNRyAxyLKqeB4vXGh4G8AX9AmDpFGTp3o6uWeLbEN1XoWJiHCtaE5NDjw42HCFyG31jyTGeufu",
  "key35": "JTi1KFXZ9Wpg9nJ7d5aqYSH9DrqQ3C3wh2t9Eb5PrtMWrzcJi8QGWYzitC7Szz12R6iLJXF6JDqQh9AbepVSpdf",
  "key36": "3GZ8CF4N3NUjivUdyKrvwXZA5m8z5FYjU2M3DJ5GKzbR9DTzAcPTqgkWXKmnxWxNmamY8Xh8EY3sYFHhtuvqgBpk",
  "key37": "33bDhQDjztrjyCWJKyLpF3BrBG4W9pGdHdsB1fZpZNnmkq2WhuT5hsifRxsfzvt36kq9toDnRqt6YaUqrV2cJrQf",
  "key38": "L2MvzR6aAdBfw2nK5bzCEK9rjynqrw24ALjgUBDS5eUzp6pYRVbu1Haoabn9s2uMgs5F3MUecY9bcD416NxrFSV",
  "key39": "3rEMZGXwPfRkMmDux6APrKQZXM9UK9RTL5wKQdHCcSqNNSySn2noNv96WXvvdzK38ximmSrvjhjQzswyqEbDqZnM",
  "key40": "gHGVCCvTSyi91VQtwTLfsXeSSfAGzT4v2RVPBFYW5hLG4NGfe7uA6C32oyAaa6kzcvFELqMk7ftHuauSYUrjwzx",
  "key41": "5BRoLX6mnfPzDKhXJ7CMeb8HvrCoASK95usAHzZLeKHH4UVPEeNq5KZo8EBxvr8skaTUnvCdNVXHZ4Z6wPFAZuNd",
  "key42": "4DS1yMisFuXXLmRsQue6xzUEbj2rbUGcSmy2Pw9r9akavrUh9RpXwzzUj8JtJG9uU3AujpijeNXwZM1L92NFUg4t",
  "key43": "3sQctGLvDbxFTetBvUNpyT5atn4Vp13ke1T9g49hwxfCYagwXdnc8Crpao5phLW2yRUD39YMjEwsnwogkd4yfrJr",
  "key44": "4D1S1GC7zVGndkRTe8oSWBSHKGgofucDBcaL1bS4KJzwhjKmXbDRZ4Wj21jprLjNsJTmKwR9GuhwUaVgSR4X4ENa",
  "key45": "DZ9mrkmZaZWQvJC3x9o2uFcdCdgfX3auaHhPTe5TgHiDXXc2ambroVKN5REE6KHkwehQHbSHtsTeY4ExGuG62x9",
  "key46": "L7cYHtDmfsnXfGBvVAbqHYMhui8kvaSHC1DYdN6bSkKu2FA8MMJykeZroxeu6rmHNudrSmdxWhRs8YXyjVmheK9",
  "key47": "tSWKF6ytJQFitHq1eEpzu4KW5ez24eLqfrWiDJu1rZqHfwuBeuqDKdsJnUG9S3xtdgfiPZj75BvWMPMBTHFUKxM",
  "key48": "r5EagoBh6zZvf8fWgSaBX2rNbFBDBbT6ryqDbtH4y9mqvfiYBSjzrjZLvRPaqHtBKxZ6yfWGyMjVTTkKN5nkv1g"
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
