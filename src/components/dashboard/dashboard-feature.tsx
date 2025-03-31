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
    "3JBvizPupEBksTN7627m52PCg8eRfn8hLtM8Jmm2y9vCBaGvZxU5sTuqdYbQknH7v57VswidVpGTZaFo3iVW6Zu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54U6x5MvfRSKLBTD23mSCD2uMovZmDvJtgsm47HCqdN9bSXTPyXygTN27Qj4ckoXBsHvmPqZfFkhdRoYt9xmNBHn",
  "key1": "36vwMYqgLiMP2QdajcvQWSTYs8P5h9wyh2i5nYo7HZwNDFNhdzqRACJ6yaM3ZLU5S4BeY413wXVz1WVQgvhAhh6n",
  "key2": "41v7pdTwz2RpRn38sAmPpFX4FohK68mKWR2m4jiqavJGNwPT3NGyHNnctDRg2VpahKb83ynSFRKxvSP7458oBcGD",
  "key3": "3ZEtZtorsd5fS9j1LcN1wKD5i1srQnQeC3Py1Cu4cZJSVuYfAZnZ5J4dpX4N59YumyVqrHYnW1HggGnYVbVXDPns",
  "key4": "3hhWF33A8WcCtEZ3hQojGHuymBnWv6rpZfhRvrJ6RQtWL6D99S4PpKCNkFwd3MDyY6x2zWDiEwWquDkVvtXsViyo",
  "key5": "hFCdafxJHPWh9uBcy2s6LpgjELwr9DJbAtM8bT6W7a6Kyb7k1ce67R7b6nBPxk8K28yMCQnEWiPES3ybTfRcq5J",
  "key6": "4TbDN43wTmPsVz9ckkfMLwrAas6GcmJEbPqRH949zU63PqP4QHpwvBi1XW86Vg6m4NDcRsXEKw5E4q5zmBm7tUFy",
  "key7": "5NE6aBbbwYFPUJizApPF655uTQVrPSVX7mmF5L7XvrdPD6ZrJkFSdVSZMy5NAoULqeLtMSz8KJwvB1CyiSZDPxsg",
  "key8": "5wsDgfvMdadomV1BxPg9ycNw9zgL5qh2kjKdQneLz9CacxyKyyifQNUgei7ay3cMzSTUakbYFr99FfpC7igDDBby",
  "key9": "2EXTe8B2vUncMPqn5RSpY5WQS4RUGQaki1E9m3hKtTvibwuCQ2dFVk9n4pTeicqfuC53wfHbZUGuoACFJ6Vyt9yy",
  "key10": "2BvarCbhhKsubsPKSa6qBHehnPinLi8ZsUVZD19MKw13N7M3JXuoou7ju1E2kkJL3gzAc6nKGdkN5FX29ZjVys6y",
  "key11": "5tFg1Ykr6PM7ghSN73MskQv2owDAUAS19AqKwmsPPGP9M9qspcncHbf8h4JvGMYpTr87wZQrAhXD47fgUqqAVAKP",
  "key12": "5UQ2Q4xJVrpedibQuhSfQg4QtUfVaEdU5sS84U1WHDU6ob1H6Mm9JBs96The7miLGwU4J34FsggnF6EDAGMbXv1R",
  "key13": "3ZXo6PQt4oPevX3qvwFnSUENHdRewEKcxo45BpqxyC6XdTxSxdY5GHDw77AcMVoZ8rXMMmuZNwpf62siVf8gJaWQ",
  "key14": "2Vs9hgQRhf5XVKxdmLJujVXV9PxmFgkB6nkuz5d8Fw51fspjSpnx1bcwBBSWzsZjVbiHRuSY3VSfa6MBmigsRchG",
  "key15": "3rZxouTPvY5XvHUbWkm15Dkwd8pZayzRbbi6BvXjWfoKfWWsNcKn82pQsguSYn1bFd8AZFg1Tw2z2V5ebjDdikrZ",
  "key16": "3xJ1FTZrzusLavruVX1VHTDWA3eJJyTNgDMq2tTs1r7kLow7E5bcfMqSsxZGcEhP9HoxTFkKLsoF3Kbrdf1QB5k3",
  "key17": "LwxmRurbTiPtMAha6b1PxVtZxaBqqYQvLw1K3M3yVH9jVJAHPnZsWVSmC3fdmBg23bUDp5hRgZKexrPqNZfo7zF",
  "key18": "3XFv2a53GGKyXmCwFiWKNH4kZK2R7e2zSDm8qFXSTVrpgZXRvSrMyEGGyZzU4ieAGxmThj14sgu5J3JP7HywZsop",
  "key19": "3TW6tALv2qXmHZjvuCWXWhAD3Mn8B9rEcPLuScSTWqqz6JwSjU3D9Fj94YQg12TQGMLTePB4EiH6J6wjD9DQnEDD",
  "key20": "4tH56M1xApJ4Jv77hSEEaQdanBhX9BeNGowBuGBBwbRzTGZznjY9uYGbMKoCXWo9Snk4LYekG6fz8CtWLMHXhiWA",
  "key21": "huaq4h2LQMaEqsFuxvSNvUudiijEVVJPpEoMPfNJkpJRxxveFVzFQqwwUGWpJAPeLz5mGaZdj8yMnhFEwCP8rb4",
  "key22": "26RWRPD5D2tVAuwxuqa6LNdWVBa2RG4gKn3njXcVKQCVYLwpecUbWQMXc5EydRmj8Sr9LYdkgaoCsAeo2JNu6oWS",
  "key23": "3qNzQcsX7MHYHo6RtEDCPyVK1HwjgVJhuZ6GURotM3Do7m6aTatcpJVrYBWuTvjtir78WYmaottER6SECSth88RW",
  "key24": "4QyfTsCcAwnYWkqqTX2WymUerHcbYsPEj37BZGKW3TkwKfTt7mcJhMN5n4rknmzwmXxTtHoxiL2s8qgL4JBTXvn8",
  "key25": "4bac97h6mud4SmcudfETX7GQARBBmGBFjJ8xTCA7c4YV69ZbFtbz2yGMNQuHkP7VRjCGPRB2Mgny4RttmnLKa6yw",
  "key26": "5ziwci7uE71UzrGSJSzscRUyWb4ZwTFPCGWoEcX52Ge8YPg3aggLV2G1nZ1pdZKqnPGndvnCZAVR848wwpZZDqHh",
  "key27": "51AuuKg1KNy77mr6YpKv6TL2ZfvdGCJZPDqsNfwXJjxF5DA4pfVabryPBV6cey9uTtXhDQPsDgzo6hGQg5cqKyhH",
  "key28": "4s2fK2k1EMt3Nv7nvxKtFgCCvoTSE8HCHJKkEL3bYdMpi8pQE9s1YD8tMSSRhbFa97o3WFeCmRytc1kUUUyTap8B",
  "key29": "MayMMY6KCb1CYUm5mByymZ4S2QVoxrM6YcAdtaxBPZQBHRJZLoJpaCHjA6UfqLv9ha3zZiQK7ZAiPLzsZzEgn6H",
  "key30": "25E1t4aa8XUZrTnBV7QwncyAjZ4r6dvZi14mNURCMuUEMEQyDFzvESskXzVjNUeX6fqWJtmDxsrQKBbL6xBtA4s6",
  "key31": "5YYu9FkeCiwDNCdpRvbp6Pa6J2vFTYt5tFv3iGyhdUibb3fb5bY9cRn2cVa2T6pJucKhJHdTRZgf1skwQDC4ehMZ",
  "key32": "QR7fVf4F8emY1fd98y5jLbBTZ9y8eXn5wGTNnLH1TuhiHuCtc9qoDzC2e2MLV2gkCWfE965VHYHzaY646JABuJ5",
  "key33": "3b7oEWh8aW1RBPpS1wrpQXgqes9jfNebH28wXeYQnJnDNReVGC7Wb6BFsJeMTn9P86vBPzj2YA9FbNCRGnh3mH6J",
  "key34": "3YzbpaVuWznYsYWCVhrJE1wdQWoTniCRy2ESDDmySzXiWTQng1pEWcK4ArytbptdLjwuHzw7qZ7Ty1MS3DoSrmxe",
  "key35": "289YGXawtDf4Nt4oEg4rBSoUrvt2MAnZSHH71LFLEWQUXdCpMRjg53b95P2zEhXJ3jpbv2MyeX9a3KLoEsmb1UWD",
  "key36": "39bPj5H4N4ZeL52Vx82srcpk2vwhLv9Dth9tPtC5hmrhVyU7eiXj7stpN7PKBfDDhaECtFzcJT3sYggkJaeL61jw",
  "key37": "2DCBAJEXjUqd8F7GLEZs8iPEhTED63k5k7MtrA5y4TgRzKCfaw2846HrUXzKKo9NRxFeMmQTzXmJVrWPJDJEoGPk",
  "key38": "33W18XC9K93vJNy3wZKi9itubMTUhrmtDuqTAXJ9k8NuwhCoZCA8vgRLB5QdwdLJZapPgdF3hUZvPTf3E1HkV5du",
  "key39": "2K1C1eyiWAszzqQct9JQRxuaEeEmL9BgZmSS7Npi58LB9wBFpR6sN9RzgW9i32qPjw3WzXz8j29hSVeWUyaCXWXV",
  "key40": "cMuDWzS5Y4kNNaM3LP53xmoYTU6KawwYLAoEBbh4vFAXbUNkfBQysJa785rG9pwA68yiSGDJuyrqRwkMgzriihb",
  "key41": "4jSiH1U9pqXu7sJd7Ly5ojkPowCWqftsP7Lwsngmtn7WwAtdrxGB8Upbutya3iTtNQW9GAF5NRuUhLLLjcmBNZx4",
  "key42": "v4sn17uk2ZTxq6JD6vwtPfvEsxK87twbJVU3qied9SosSHs8bM3xNyTeiDvELABRa2bEVExoyR7NoJLbK8BkbwE",
  "key43": "2YcW9Z3hNxmtFRGtuH22EBBupyBa6BA47pXL5AqcQoFjfaCNAqpzSY2te5DumuKjSiHCD6uKXa8HsSNSz8N7UNhr",
  "key44": "3oR6ZfjfgnKxmozk4QenivFvfkDDwwwev7TLQwWc8n9BapAUcbi4gDi5QSYBgqhGirH1sY2pFNUvefvA82M8Kq81",
  "key45": "5oWAEtf6DJup5E9UnQfzoGSpDfVACTNQHsHiJXBoVwEDWhgXKRyeAEsrRHTxVKJvv45JpavvVHdBsyGK3io4tT7e",
  "key46": "42JdfY5F57jx9qdALuj8PwaaUfSJQ8KWUAno66oSZ1ewRdqK1YaXWBrmezfRTBWMkSo8gutJsyBqYzE15Svxx2Uj",
  "key47": "4Zqq1EUgp3Pckf1s1hKjmK3RDwpzwgauxQTPs2sfjiXjy8wZiwCrKL82JwNaMeTMRJdT7yFqRMnSun6ogGyqmfcY",
  "key48": "4fp9UgGfLALGmCiX4byfzUAFKU2sJ7nwjKrdGDuGRN5V5LCaPJKU97yoS3dDMTxNH29zobFHWuM114eHT2f1Qs1f",
  "key49": "5kRqjDmfS9izG9qe9yKfYpjQwbjTJP7TxQPSyC4tkwZ5hXUP7SHPSL9mkT641zFBGJ1fkx4iW41qR4oXbGnRjhhd"
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
