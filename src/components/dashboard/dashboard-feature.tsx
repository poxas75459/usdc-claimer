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
    "242PjPgewpoa6nZ75wnriJ1Y7tPdTbK33ytHtMzLxMrb9Jn8gGk7CC7Tk9zZL7zSSRSy3XQCuZjCYF3vz9jmV5St"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDommCKPEnrxy3Aqm43HmG642Q6jt5JYw4K9aUiQxuKCqo9vDHEY3iXP5UC7mbCx8KzxSeJys3mUSdHQJ1Lf9CZ",
  "key1": "5pGzV1EhZcvqGJjBP9sqmkPXDiyZ6FLgxbhwiYPeUM99w4v8yZzNqYrsLWucyCPzjtrjysoUdG5vWETwovNuSVkp",
  "key2": "2LaUSTmPWxREpYJAwQu38tDX6u6pWf3ckUHarA1qQiwDT5qM9iaPXMzcSwXiuUnHXhuxGB6y5e33vggTQ4MBmieq",
  "key3": "4K9hgGwkUVnEhb7jzJm4Ksgi6Mk9nAihSqG938E84y16HoMb959yZEA3jzjYersr6XeWiaPxcqfUa4pe7dThGyHs",
  "key4": "2SYydjTRMZfZQiTx4dsChGn2m1AwZbiHhfHb5WV1nbcxtnWJLtoQukyP7xX2JNvV4HLfsoHiVTy3imttejgnqy3D",
  "key5": "2wvb4D4vaZSkCkafuT46CP2Brf5yAyUqa3XbHQqzfKoD8Qrf3EJgRt3SmmEm2GJUFJyLsMpACq67KpfLS3VSZg5K",
  "key6": "vPZwahw62T8VzKzmQ8Vzh9MQSxGaZKDaNsUyYKSSY4P5s4aURqVFLdEJ3SBonmNw4MRx7ZGEYZSdXYoLnCWjtuW",
  "key7": "3JFE1BZ5EBfcyVne3bmKGe1MFP67hgSiZqv2UcTJhVKGHiRfMjd5agA1kvyVAK42tEqq4jRpJXiAUwRMmn5xt9Yi",
  "key8": "4BcMrTXxTSDfruexgjz4WL6SGamtPs99yrnf2AFkZFJPyd9XFQpJPC6bdEda2mDmzmZGuPM9pLvBrA6HW1Hw36Hk",
  "key9": "5ykaE1aEzYzzPabqucyMPkwu4bD4z6gCkAG1xApMzRhdJfKwC7EK4bFK7fVVbFkWQnhkzmEiLt5jqJPxosLm2XUu",
  "key10": "59dhQ8zFux8sFVLMzEb2JrFfRCEN1sBHNmFwDgbxuPEDbeBGabSiW1H85kLe9PP1CgRmSjxnPehEDeyPqqmuQVSC",
  "key11": "cjEcr37dgioWJCPYwz8zNmAE423QLBVa2WP8Um8Y78MJPeutzs77VegRQLBZ7UPTeafNWvENjmodxbARLgX5GCM",
  "key12": "3MdV8vR55TwwgHntafkwjcCQtoXJQZrpxqSdpegN6BTJNuQ4y3CWB2bz7XDbEZ3CRdbyMaonm5HBFR4njn8oXNkL",
  "key13": "4WYNcQZnRaqmrRo1ZpuT42BJPikhKQrLxzV5A3nLYe6R3fFJmWgi83DJVWmyWPyToFh9iwqSsbziXDVkpTphHUDd",
  "key14": "258XwVwPXpCdqUqu2CwNCB9hRHCQyASXP229TQ4TnhiEtbERu2Vd5YfxiEkUwTVk1jKGk6U6hmQZGHzeJyQT2wD2",
  "key15": "2b4F75EWgEFyhrbwWX95S8AQCqFiJ2pFNReUvFLrXk3uRiYxf5r8RYoT8YVfPq4W4G3P2CEGeB7T6z9NJe6kq9fQ",
  "key16": "61MwuBpDYpU7oJXp4fpMS6bLgZYGXmgEyp9QzqHGfu2Ug4QaTZbEoPpMXyRgLKSUuLxc97bY6h42QpUqNxQCYj8L",
  "key17": "3DjG88TzfPzkiJbjnQQwzVP6H3pjuX5dFzdGu5QUjvzepm3u3srDXqTtXKvrCqBMvLNW7boQKEqAxFiaUxXnj9sb",
  "key18": "3EnvWpZCGdkGWtCXXWzQxMH7LMno2AWySfxYizp3cyBPba3B8nKFGLkmLHLbvAPneeUdCHy2S6qfmwjjaJNA3Rqs",
  "key19": "5unSByaKcuwFa3nJcoaPooWsN3Cv229aU46UB8KGcMrsppj5cJ3hKHNE63qtHqY8KKc9JcKk7rVedPF9KGZQ2tKN",
  "key20": "2Z3UxuqocovabKZTE8pqFX74dAiDRLd2eTqRngSYjN6M6MUtcK1Z6h2tdoGEwdkQGVZdxxLS3oVVwq1CLJPZ2GGA",
  "key21": "7nnSLHKbmF4czgZhs4uxynpSLbsWC6xjJHXCCm8bjgoVpsFJEFC52SYHWGNkUFFqS9fcRzM3sS2j3Vuuy2moaiG",
  "key22": "2JcX8J54bXfBHrQi8rVMZuoC3qq9c5CKhXwnEZJ67DVxehuwLRtMgFsgrT8MuMBtQL1C6V3oKkZdP3CQ7w7JJWDy",
  "key23": "4fMrMXXzMwNNzNLefjBzAWekEC2vzxTWtU4htWKrtGGYjk595QbNguKfd4CzdPm1mocUVuQ3CLVRr5A9GG4yxVxG",
  "key24": "5bCbbRkPzAbBGo2ycwjzcJjoeZnEYK6LzDCoxrRiKvhGbQhQtH6Ley8RhTzdXduJwQufQn6x3YiAiXzfGHsrspaa",
  "key25": "2krieLZpaL8HXeDbuxPXtQLVjdQnwQv6o5QjQRS9TsjNrk2T5wdmEGTcPtAzSLD5jnj9t1g7ZZZxoZbHomzB8rLZ",
  "key26": "4j95tzwGSSahinprAkyvNhxKP9HMeJFBYMcjQMWfuhgiMKuaApFRGGvvMzdCrV53KviS9NxYyrEP9bHHSYQWGjJa",
  "key27": "9Wndf4UWhv6v2GUCt3f7RpSwQwc8rwDoofCwSqGcWSg6P5ntY4MTJcDuMaJpa73R3KekuEkYFGEJnZrL3c2oiD2",
  "key28": "NrhFJg4u5xE7v4oJGCS3wGHvdJioMhHjxaDsgGVi6czbTrhzDFGiLomwo2EC36G4tbaiRt3SNt62DUQCwvPn8UT",
  "key29": "5VskDZ2nnTZritjt6AYttB5wPteawUGByT3mjjrQKQbUvtVyv5WiZMeccTrtYhbDUuP4ev8EoYeigEoQEmNtH91w",
  "key30": "oLxH7g1C3SBxtbyGyU9HM7hCfoJoGfE9EuYvZBf6x2PRqSGJV8iWwYfwaYbqwYoqnSoBSMDm8ZSVmDw7iJ486h1",
  "key31": "CXvBzHTbhEVztSmnyWp5fbDfmUbyQYu3kTWyJubkSJTE3cPxLSWXpNEiVsGzKXu1cuk8PE5nu31u4RpYBkmaZpd",
  "key32": "phy5iTADUbMk472SUffo4voDt4VDK1k4mTDpc6ZMvSkey5r37tMBGWEfmMbdrb1xrMypXoyvPn1d7uw8zNq2tWQ",
  "key33": "3r2WX9TAjoR7zrqYiHd8nB6c7KuX7wovpwziSaotLszFCJmQJcWVRbqHV8CmcRneB3ZHLn5senNTprJnjd3PjwsU",
  "key34": "3QTV1LC9SCByvEg2VMgBj5GZTXDfvvUAH8uZVFtSSwrbfxJUs8SGEVNxpEPxtGLrBrAPc182Q9dicNw31Ko68nV2",
  "key35": "2PhbqAgwM7wa1hnyJJXLvZVvVRYsHxkVuV7WU3cGh6H7YTzUyk8Y2u9srwhxczamuWZYkkaxzaNYgCUavbH4Pfry",
  "key36": "55WkbEZHJgSyWcN2gE3ftoBAcJnJ6ZXHx2pYxFT3cbVfgomfWxgfFr4HYetvWYPKahRzGJg9SUU5HMPSUaUjcXGD",
  "key37": "58Cxt8oxat6UfF2cHUBKuRoH7o5HfsrGTqndV4jjf2CFUu4TLgspy8Wnp2XNe8WZRM2Z9GssRA3gfhpZeyCpwtU5",
  "key38": "5u1v7uRoYXqnPncs9rNCsukFNBcf62dK1y2W8vNf5FsLWBFiUScQiZsq1bf6UVVc8JnYB2i1G1xXes1Gg5mvqkAZ",
  "key39": "4RZw3sqVM3gLy1wTganBZ8tpFj7YxawXfa5WemMhea1gM5jmUYL3uXk6oTHFmUDZqxHQebin98aUL4ooXq9aW2DS",
  "key40": "2kV4q6V8UX5X5PJ2jxu1F8JP7sBCgAW3eny7F1HXHLLTHyN7qKDDKaHZzrmWa7hmSknQiLkpbkHWePR6WVfgrrPh",
  "key41": "4wK9q5nYJKTaCFKPToLYWmPfT47eqPMRmULfo8guSnbN7Pzv2t2fEWbtbaHnuug8aTe1tsjYDzv9DKXQSwXaZVsW",
  "key42": "64oDZWgpEpXUksgJWhUVSkavujx4AnDnEDiiekf64DxKQbHPQJEoJfYKaNsN676hQNY5ixGfbXQqL3uMrAmJrAxZ",
  "key43": "2aqbxGbEvQutWni1fufgHXB3tZjT7uaAPwsgkTk57oXXw9mdfPfuq4DUWeVEmCA1GqQgmKpkbAZQkdRJsTBFD7DG",
  "key44": "2C7qBLU4vM5QTWzCsqCyA9nB9zwvfvBVPFoomAswZzrWz4iMnYDhMHc8P9Xc2z7YEF1CCYEUegcKLV8m19SdGQ1V",
  "key45": "3We1kqEHG7gb2HtavELTLEnNAgdaVEoZ8Fug31uWDMFCNffgLkTCNPD1d9PRCAurvsApJf3Z7uMQudrsic54PTQa"
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
