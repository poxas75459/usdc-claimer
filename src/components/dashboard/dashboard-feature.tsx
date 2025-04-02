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
    "2st8NmjvphUmYJprcG78s66doKJaaX3iPZuTXVeK4EkBqKxN5sgGnu1NyPGYGv5hC5VZedEVXNqYnvCEBGVAoU16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62fjoUNDZPpqdXTvVsRFHbnkBRmW7jWmM7Kr3PtRTi4xCrh4sYB884AEFpLF6yVNh64YS8dqAPbkPXezBd1GdzVf",
  "key1": "4B3yqVNJLCpFuaVoPjoMygRHfLpkKuGGjDNd42TZdDXTWFpfqis2RgqPEPjeazoQZqAQspLyKXBTMDMzviiNzGYC",
  "key2": "4CgKTCVsM6V6rgVymZZvBoD41jaZCTyqoYat3X6k8KMWqBTUyGEzY558Tj2puqJ5EcVJr3QD2xYAxCJdG1uL7rs9",
  "key3": "2MAEem3wtWXbgaCL5YP9uvdom9gpaciicHtsF5odEtts9dVA2Zs3uCMZevq8e28jBW3HGcyXxQKgzx3GpbAsFZ6D",
  "key4": "SxonJ2A87dwNN8efSzWxTdNraW8KxDgppeRZK8MPx5yLnxxVMTMxxQrn1ENLCPCrQEcucYs9bzvP9nhLscPw4ub",
  "key5": "61uSJQ6E7KJd2TFYdA9GL2MuXn9jGzRqSp4y9zvGsZJecfavoCT5qCo5G6BdTMNAhH3PaSHFMSZ1f8BsoptptDLv",
  "key6": "2EwzntyRLczMkq6V8cAh3Di7qpwDsoNUW978AN6b294nRyX7VdY8AXPvwtrWovprQaqP7iU38qoxPdmTmygszENL",
  "key7": "3pBtYThWs2jnF17SCvXfzxueaXzeVeSnpvySWmJdf8oXp3aaoa8bJPLSY6QxAX2hNxBCC4EKnQJzFDBzte7bEvXT",
  "key8": "S6uJd8HtVM9UQLti5h9iciVgP6dQ6kaFJaQ4UF9sAUGtGnmAx8MoqGYsongymxz9ssoWanJbjmtqveWTZRxdNxt",
  "key9": "48rs9j83EmTEQSjMwuVHG6sB5YxYJyrzvVA7refC8D5U35suNTTaUDgncxCn4yGBZHDcVnZWv1iXqR21BAdmqSem",
  "key10": "3ZrgJqoCLRP1EmqrVRwHyfLeRYERUf5YSKk74TipFBZ7rjcqsTFskETXkai4Zht6GKQtonMCaX2DhcxpAQR3yndQ",
  "key11": "2sYHYNDTZKV5gxexSYxXMPh5MGNBvH4hfV1y6khB4dmky7FQThaXUB6rgk4zugSY8SV58FSUMtHncFRWUGmgha8H",
  "key12": "41pR6sWk956E5aq5ViNdnDt531khGVC85DRgjpcJqkimEGnKzqoHXKwEJNBfDLG7qkw6yWyRQGis8pF1Nn7y6min",
  "key13": "54MardCGTc3AQDZ42spZKhu8J6BDBqNbNvVJX95hn1tu1QVjQUhdoh34dn5yCxkUJNwJ3WUVMY3XLs7zhCUNo4v1",
  "key14": "zdpCA9e6gBzeJQFxYtE6LUi7DZv6J7iKMauF1tqZqS4Yi9KKPmBK6iRJwkUNFBgmSZQPaGz4EE9cdULtmwBjCQ2",
  "key15": "hktRmcFDBx4ZrDhT1RxPB8VWmpZsvkXjafnB2J6rW2LSKYrDS2tV6U46XKoRSvs9PiJuBtmxhsuZhuzZH6RF5rF",
  "key16": "2yctAVRp13KxKWtHa9QA4Wumej33aJscbQfXsvYLCERSYvkFYwq2ozYGcVxUmdXP9sEj9UU2BBZkXLMpFmmvktYe",
  "key17": "5qXoRi9vGmq3fj3NRxL4eGTzCqSvu1CkdYXCe7c4F5NP8H2YhbzsV7RzEuimGEV7UuNb5RnkTiqLmEbiCupK9f3u",
  "key18": "5gbgHUqfEjUAdQnasdSqwBSeBdyNEKtLUaTNzAJGhCszDUN8zVeAHqTbn8tzASrKEGdw43Qo6fBCDQyYHQx3u2Hb",
  "key19": "3ouS1c7zmvNSRRqpwQST8qFGAdbbHu9P3VM4mQEodFzAj5hCbtrSftCqoL2Tg2aDTYHSTVFLWTYAX3ZyGWLUfs2D",
  "key20": "3AMRWeRLKC6dueGn8keb5EbzoEgz3ULCruGEkY4bGZLkrZN95GHK7cDFZEeJygvh1JjomZpyUJUv4tuivDGPzMKk",
  "key21": "58YpRp2zL7CpdpXYyAHumtYusQsESQd7qahv9NFCSsYXxgMuWC3x8fZtdsXaMCs3q2iXjZTSkTJVo2gaK9EmwbSx",
  "key22": "MBpx8EzaopZz7ndAqsA4hKFT9pNhi1rxi7Jih3vqGKsvVhXk6XDQKeK1b4osBXXiGij43HNCBbLpFVeJkmkQucp",
  "key23": "2vqygp3fbpZWkB1mbTC1oYgpbePJ57W6XCMntnuQjSwG2Kx4dx2dpyye5kQeRz3yA26MdXEt98LHCjRmSsS18xoh",
  "key24": "3FiMx3PJdH7f9SDFnrrJDtJenb1QPV4txLhNnT5z6AggjaffFuZRd6u2mSj39A9HvnYfMuNkJEfXbQisuFfzk9Sp",
  "key25": "5NvyR82gVwrQ2ixRWHM7aoX7vzZV4CzWF8Dpb1GdGeAJ7mDDXHhR7NQfyJHbJsGVBApid4tyq8JccwnZugXFmzoD",
  "key26": "4ADHvW2FiY3MU29brWQoF2FqibjDasT5k2FarkvAf25QbaenaTGedcbeDxbBdQBgK9cxUjUHXF5zyMbxW1BEoHr9",
  "key27": "2s8doMh6uiHhr5rNfvnPawR3F5EYJgzn4iFywiTbruzV35djYL9YJrwJZcrCCsZGsoLoVAfz76n1fq6HMC9ssgsf",
  "key28": "5q4f3jL6neiXa2azE6S7kpu7bCeRr6fVbsXfWuxKzR6J7Akgckp7uvnQQLd64ZYH9j3f7J8aeERsyF3dzhmayeQq",
  "key29": "37dfP8p1UyiDrGmZWgRjAJLLCz32dqJQhHXrSLGUWXm4Bdqe5HimbuUUEYRabQ9eV39oeYhdAyMk4WgTC2WPjvwC",
  "key30": "91knH2or2wawTTXGJRsvERgcywFUnRvxgtxTchxHJT6EUar8EFRpjzB8NjwLJLYHHBQ3msbiq8yFqkoRW7AbJFf",
  "key31": "3iBsEsiWgBMDUiacL6XG9yM6L4rQRx56eXX6J7Uq3b1zmTMX99RnxrshzMT2Qj3cuY1fQLvRWvGZXd8gMGuLNWxz",
  "key32": "BWbrU7Hvj5nYs1wff2EBDFN3kE1Z8ShoTqbbB1WSU2aPWbAyH59N6eyHdKcnYVunk8qvLL1AaWcsLBBnww3s4Tk",
  "key33": "3PUs8ZRMhbZgkmcQGbsR6VMRwABkahVVKKc7xtJa2VoEmUw5uHkANQKiodnRtRJh6bJ1uAvoi8CrktR11naFRnbj",
  "key34": "4vJbEuLGYN5SdipPquJToAkqWfz8SZL7EhzuFdwSjHqbVx9wjeLmD5tYN4XrNhCZfJkebpRSx8vKxZidK43qLn9J",
  "key35": "5ZcXyD9YUbeJodBGMSsna6xr4ZDgY7YqzQqqR5orwFhmxPy5gKXVmDP4TzW2yTx1mojXHyHSBR95mYWveFjdgYpw",
  "key36": "5y4ZqJGDqErePLMTVNQb8PMiE23spPS1LvjeBeqbNiaafxnxw3cDXxtcKU6PveXsq3vF32gP49XvdfagRn8CkGuo",
  "key37": "4DWWK3TPEFM3ed3NSEEywCP1PRdyLPZzde6DnrXCkzCVH5LuiPDps3jbQptSjp1vXhh4Jqr8ZqYHEZ4pbFwf2XaA",
  "key38": "3LjDEA94Lk9h2DriRvhs9KT7rn3nJfqQHftNmHuJikFyA1DM3UZxkURkXpasMmCCm2rbLgFAC1ouGfw2yyN5hFp7",
  "key39": "2paA1ExN9erEiVBspSBYkWrZxi6kweCgFjb2oojDtXf9FkBbSdidVZW2iJir7kjyqHChWXmufca6pG488cF43HF",
  "key40": "2pYesvV91gsun4zYMv2nqnHkh1zcdWESJWPEfwmgyYg4bgjqrkDXYFrKzr26htHFkB8GVnVwWbH55iLhRtnjaCok",
  "key41": "3LnngvWSLcx8K3VErcDZF5dv29Ntjgm9nt8CPVNprnyCv4BVKUTzbo5uEZfoaUT8E3KsfkK88oTCsTUxBg3pesSQ"
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
