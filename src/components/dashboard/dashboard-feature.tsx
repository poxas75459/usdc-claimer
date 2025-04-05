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
    "3c2JbP2VpYFmXoZfwJAYwrxLVyxRTbtrjzZeu4jp2m3gHs43UQPnb5x3fsLKw3q7t2L8nhUTyHBtSMpLYfsJWF3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CK34QVX7UwCtVTCbK8Pw78QVppYU7sHuBnVnZ6P32Xq8yzHV1wRG32PW2D53v9kG7VEZAj4sVTQQS91rpHDDcCS",
  "key1": "4NzxFJgS6bFenb36VV97ahXz53B7TBVvz7JmxBWiioS27AJKPGKVVfok5FbLRvnwSjhZtMNV1QFC6HcvNQvJNvtd",
  "key2": "5VJBeHVCoLWnWywsQMgDdo5i3VkkjrkUDgSznA241PYW5KgrQuir4JBtcMh3m4RcWiFUTypRPr15JpoytZgNYpfR",
  "key3": "4ro3i75nhLinVCR3GWqFaAkkDgQMautcft8BBAP3pQTa7PeD1T3T48svLKNWZMswzfee3jYAS6Ubek4Xqwv1nnbJ",
  "key4": "4peTaVpuerED2vfwzx5ML7SXQXKiL354j2YBFZV5UVVkrFCS5rMwDZMk5B1cf8W67zpFPgtKr3YmDyZxGFMcfCbD",
  "key5": "5JrYY4tWfHBoq97krUUaw5o5nkmB2fGkbyhTPTML1UYUgRWpPmBxzWdGQvQoc9h2DEojs7xjj8Q8BeZRGyyLhE3u",
  "key6": "aMJARrCxzRDW7ukQvpfATXpA49C2hVsZJisa6tYHmofPMzsASMXGpApv4ZAFkXaFPq4vVpebQewE5fREyYLR5xy",
  "key7": "46DesE6PmPV7dRhfhZmGJnPfMgZLdcSeefxt3jQ1oRomuHYkfp332vRCHaLZYjmnJVsMx4XViAGKzNZuCKXd7bHq",
  "key8": "3zkvPSojRMJyAeXSopTBE8SHrUMomWDf8hpyrkdgdsbFV5RTWwnQc269JCDsA9G2WHY4WSPdVoUsf5biMusCLjX3",
  "key9": "589aikUgFcyAW2Vr67amUnbUerVKGErS7Yzz4i1FnGDEwwuMB9NM9kqbimYV3q76dsLfj2oqybuAqkAwhGZXUoo1",
  "key10": "3UPuqPSsot4VFDdHDWUwxqSFGi1D5YiqekhxWPcGV5RPmyTPE4Dn8qi9XS19vcpuZGPuyafSZWBAxsprSv6fjdBm",
  "key11": "XxHh2WQyFUF94JXF2cQoca3JvdYGREA66HpqYYwwcZ4cxkeBKUHR6H1K93WqAPWDgWAm4vK9GqVQUkqEZmSmc98",
  "key12": "4n81TWnc9eABXGhF8zW9jFtGoBJJHfetpe95P1spAACgyJ4dEMWuiowC8YGHZGMzdN9uLrSehWmkgJKJfXRBXJjb",
  "key13": "AqRnZ5oTpPaCKHPvrBGpM232NoErSumZqcMtig9kwGo1dh3NMNJ8iFX9HFwsuNNFmXXwmRxPrSmG9JqCsyc8sJr",
  "key14": "4bd7VzK7NB6CsaxJ7yhHQiBvdZwiqLw8ekZKD2FEjgTS64QF7ySXH8sxwwmWTjy8CYAvtRBK1nUWNozktWCPyKDy",
  "key15": "21W9kq1N6DPbVUPGyptvrXtcn5R3fMxqyiA2KnEx7tefARpe2L2WufjEHW71xpQAKbB1kTHJU7VxqD4ynPBh2C1k",
  "key16": "qjMSPLc1QTkDnMS8VtJhbWRm62a2YwARUABWw1qoxgFs2z4PAxZpLDcPTgmrqNcRszZocDdfuhPqvWgp28mfKbp",
  "key17": "4GMJupdSipsbd21h1VX2KBbNAx6HB8bkJbVTuWNGcuR5X8kGcNa1UR8ttkB14qB9bf4XQrEXF1jGxAJK88pek3MB",
  "key18": "5Sd4inZEUst2F7FzrRsB3f8WLgfG2oN8NqRaS7oxg4AVeMH7Hodsg8ZLm9Jxpgtc93bvrckUsg8QV2CfyKZKdU9e",
  "key19": "3p2ZnBgoG7Qg8fRg8CzB7Apos1M4tbKxmXYNuud81j8XrVZnPxydjeUcheaxq9hHnXTRfZadnVciSirCDmBpaMyQ",
  "key20": "EcYkJjFLJhXbdrdacdd7VhJcUvidCUNiwStN2xHuMTjgLnsQStjoLVSY4NhHK4qk48Ymcqihg4aV27WLw4LTTvw",
  "key21": "5gYC7CYXbrppae81fd8AC82ohBc8pLKv3S6abnKebF131v9soT9oWgY37X6Jms45MApxNHGWm3bFGGeyatU2zBr8",
  "key22": "2wJv11qNCen8vQ1y16bzhnK7tPfHK5fqE4NjjywpEmNbN9jryC6PHXgb7ZHWphUG4pVUt9VrComTcsoMB6a2jUHc",
  "key23": "3nzRPKQBMRrFr31owjbFMYdf7esFwMsexN7WR72aKfjgQwDTAWYT6Pg8EH7ogZ9gL55CGAsJXtsudgnQEDpCSnxK",
  "key24": "ACsbcvRrqAy3Tn2XcHFLACGkS6oGXPgpLFBor9DggYWzfkvACqQd7xcHddzuuWR3tCgzvup3kNnS7fNCEghdWCo",
  "key25": "2GWPUfYRnmzPWUR2GrC6vCJ5Wqv1EVUTPmqZdEdwTxTDpWYik2UNozwgvN3ephiark6dDj9LSEm99Lif6ZhdTfKV",
  "key26": "45Rjb2k7Gj5QiwEEtpSjLhM1GBGeUPB3qUnXmhHmQFEFzM7qvjNVUfYxPcXMx8CYwfyZmS7EXSbGgQsJA4u8uuBk",
  "key27": "46ZVoDtCpRLfkgao9rAUhy8hY6XZvp3GxAcMVXfCkPxnn7g2pF9rFDBBjTGGEmYW1idVFPerHprDdv6GdqVRFP6f",
  "key28": "61CtuBfeGV23Ycdw3yL926nEPU7TBCxtAitcthUi5nUE5qHHkvLxnGdfkBa3DFfU3fCtDFGywuP46n73JpyYFYEo",
  "key29": "2bE3zipTeGLEB7JTEA1z9W17KJ6iMwvwB9DD7mVUXFpQHyNVR5UwC9BkFZDUFNTX67xMow1p453E2X8JuVuq3j2y",
  "key30": "2M6AGcgMfUCcAX2MqJDDBikxY9dPXHiffSBkPnu8bykNEuesbbH1v7ertLhgbuFQK9yefZ7QgV37iWA11TsxoZFK",
  "key31": "3vkNfZt4pVNru1TianifAzhGpneHE8bGjFp4PHPTdprDLp4wdJHJMDosFAL41fGKrBA3rmKHprwnZrHrY5h2KtHn",
  "key32": "Yf3bEYpFFf1gzCXFHpeYEMdCSoUNDj4qGi1G8SMNU1BTbRLegfckHS8Wg7VFmpMYzboFYHUSYtTCcKyHEP31yTJ",
  "key33": "35FmmkQR9kXWzhmgrCQHuvwuvC49kcm3fej2h3zSTUunz7BJ6AdCdEPssYhazJiKTmDXdbiTDKzML5wDYK7ymamu",
  "key34": "23f4GprpUeiFVsDkjZ8qjJ3Gg2foqZLYrkFmiLt34Hhiizx6r3bS7FvmnQksuEchJGNd4Ed4ebGr9GsXhStCBGMd",
  "key35": "Wy1isJmv2PgM5T3nf8Ecs8P365ebgaNVjXvdW7axkWP4uYA5Toq8zWuWcsqbrGbzjsqfub7fYcnbFWeMvArfwia",
  "key36": "5GMu88uhDonDt3KejxyijbtzaDWjLXa2vexPYqh6FX8nhFiFu2hHbD5FkdKxEPgXWGeD1DbdshyCq6SGxinXFbbX",
  "key37": "3oB8bVa1cPhL7damSpso63axWEJsJrBq25BEwK4Ns1drvZN1utABZBRZ7tTwhXAWDZSX8pnNNGyckLAdDinkiZBU"
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
