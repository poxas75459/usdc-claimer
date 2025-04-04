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
    "5uYdTvzuQeuQeCGwWURzEitj2as8UuAytmNiEq2149e3bTmRECo6iQxoeQA6i69ZgLzu7ACtGnGTD7LkLFviMLjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkdZfcz9Epbv8MHig8LHU2MdJr1xhdDMCgTLeXuXQNowiXFV6QABb3n9UUW1ryygDSUpzgtGLotk7MTJNpDfVWb",
  "key1": "2kbF9xpV3tHiTLMAscL8vnSxo7VXtAp1ioe6dmVPkvPALtFs3t2XG5TfPcqMJFurVfwXW7XrqzppjCDreNHafTny",
  "key2": "5iiHgEjnckiqN5wt1YeP1gcEafDfDZZ18YgsNsSupGeFAGHmBXiLPnaj8EZCWtan3khMnMB7XhTS99B9MwFNQrgx",
  "key3": "5oyRJgdnfVEie1AZvcmmwSRAsR8qwRpM2JDuS3LTS6AEw7B4ok1C4XwEs6YHtSQbhsXWKaHGKTnYoRyx47GCaVtJ",
  "key4": "47siapkqRWa6GQN7kBMNQiUyxaGdxaqY9LiC8fa1ax6PQ1kp31qka9i17K2bYWBP3naNetj5jVCTLfZyfxTuTdqx",
  "key5": "5qEPGF4QUXE4yLueQfJtHbJtpE4zoBRjWpffjoZafLknPRDwYeVqXLZ2Q4nBDpsQYiC73GG4jowDDPcq69RJkgDE",
  "key6": "2DwiL8uXSQhnc1jVcJKBbBrq1yazrigBdnbBCHhXngKsHjiyb3yUCmSFSLxe91wdmXiEbmKCDgkbE4mdKfVANEiv",
  "key7": "3CFoMhu7tU5KtvNt3Lnp5CdmSnzYw1DpfrtPb1vBfTQt7qPZUNfzAeYnjBsVSExYMYQqCJVyLj4mAZiWJN3AAStB",
  "key8": "5MtxBE7HcgU6H2n4cf7jrnLmRqpnjiskPphMoqVuwx4g96zaXQ3wVhfHHjkhpKcnMp7RmPXWvENkbDDJxPMUYNgi",
  "key9": "2g3vmbR92d79MakE5aEWsVzXVEj88gMtD914z3yTDfXRJRYCJpW32GT51RWUQsyqPvW4GnTUkv6gRmnjQi5r7VWj",
  "key10": "4s72V1xQW5pS43Rb3NfaDDnsJWJ3azvxzkcQPKD7MuktoeLxbwpmFung4AeYqrB2K1Yk7AUjtxUb6gtoAmaURGBs",
  "key11": "uUZgDKwSA4yk8K5ktC697pSJ9sBR9RE1C6v1iXUVHiTdTY1V1V3DC3oQe9dmHxxnRXDzzsACe2oi5y48B4N1mS3",
  "key12": "5ozttHUxTmXmemLdKuJfNzuEF39sp9ZJNeCTVdg3z4FsvpmYKqCb91CVcZTurorLEuBCw8kzCcJ1YeizteNuqh6t",
  "key13": "2211zcJwfyvesNfsCixRY1cew6bsMKCegzboxpV4hfnNNKBALFAHJxvb9MPqSAaLMPoWMAACEM9UhHFxj9Lb82y4",
  "key14": "3CKi1SFat1VX5uPxSmwS8L995Bd3cmUijcoVQV5RghKgUBUnUY2FMxNJ9Yjbmg8a9LgFHKwtDs7Kx6QMegrr3J7z",
  "key15": "4h72BKTJYXg9kVnvtwqmBWG39XwDDWShwZ3sPeqtbWAQwy3YzeuVKS67HWsRZCc72d3ErZBfoBywSivwvMtHL7Zx",
  "key16": "5rTTfaKWW7ydyWpdwJF9g68MfgpXU6u7d1CKE5XfGqEXgGGzCKcvJgAmqnjYvEQTgVXvkzjkFS77W7ZtKanS3iJB",
  "key17": "3WTpMycbKf39UtEUeoqxp62ps11mkHRmqBZLPRD7ZsSh7TBKVwUdTESSjoLMw3GBKHVFUXnFWTC1Dk7Suzi6WPLP",
  "key18": "64ewHCEJq4XSM1v5jPNev26JLMRgW5d8AtgqRExGMUxwcG9TG6WcnDBNKgBnsVAnDeYbLX95PifPEq4Ma65JNygp",
  "key19": "56BWxUWZ3KMRmutBNxmvhi6VvwRBPep9xm7pgKkTMy8FWpzAV3Q9QnvdidKFCYPZDBvLucsKLZKS2mTfvDq1Wsak",
  "key20": "3ctkXUTs2mG4ntNEtvnd6E37RtJQcwBVKJadyMLLfYgtSBcf7P7g1YytsRr54PFrDZ9UoxAU8gTaLncZfoumuCrT",
  "key21": "p7sfCgZKzEfAxKphCHvUiYvDrWbzrYNny91t1MQibENnc9n5zTEwm44FiieEuWJHyJTgzydeBWuuPWRmgdN458r",
  "key22": "2vhbFazDw3Na2QcL5t99CA8hosYp9oxPq41EAwS9b8QYqAR6vC2QE2f4yRowdqP9pCHyAHKZTXTpwMdjnQ6ARkon",
  "key23": "4e7zdVmnQfp6y1tB19Gqa1L7gFscgyBjCPtaXHfa7ygkm996wXE893dH1T8ETxWkAeYj72munQX6qUDRDHnY3YPD",
  "key24": "3Syu1kQcrPJCKx3Vhh4mTK3y9f4xChm85rk2kP6uUPY3E8vkrDUS3vMnmsnDun4nGH7uSSECtdCCqtVzL6mVZKPv",
  "key25": "3ZcPPCGFoeKQ3WQ34gUxvkFZTph1FbaBxbxaDKZKdaasTb6wh8VSEPSr5QvzVz67oJ2NRN5tMRUHxz9o8i7USWqg",
  "key26": "5TiEBo3XYvVprx7Eii7CkS6JrPnw2H7jHiU5LLKFLFJiCGCtCv8uXQaNAm28q9ocVwzzxaUfnuYuSPxs6LuDgHjx",
  "key27": "48os1tmzyEy9HhDETmpswt7LEPMroBjcw9Me8jyjyZkjZywzLzQkCxFQPRCrFrnHW4PxNvrLfrwVCAMyauBY4Cu7",
  "key28": "Nr65igCN4km21pRUoA6xn8aG8s637zYpdZ4GJ7fbZcGgU54QgKLqejAdJod4mk2oDKpMuVtC3ASaUhtXroaRDgh",
  "key29": "2H5x7CZ2crVpL3DQ7ZHDmBnqndoJo4oEnL6ZnmVuwQqgUpXgJ6DyDHr5zHwMkBfq82eknNjJxU5sHFBfoWdXS3Nb",
  "key30": "i8nWMTiRy56xMkUMvDJSLJk4zjoFJhmhbJ8FW3dgpV1gxHPCyJpYBSwEoRY7XtDDhPDMEu7nS63GPZEMdzLoWjo",
  "key31": "uvRMEHb8DQcay4iKW5TeK4urvHHzimc7a1YA42gcDY3VkaDCwBqhmuuxroyqJF6MBgMUV3fcYgtM1RYdJqvzes4",
  "key32": "3R9FJGRQtYhnMibZ5WcxYNZzefe7H19gP3sZsWaVc2fHyKQ3Q8LUt9pLGYLYpBXqgxGmGLR5YPYU6JZz42yPcPU2",
  "key33": "3zjYnonA86sYs1QoRraWxDJzcaNgtk3fecZ7aNdWjxHuLrG2jzH8yBaoUyQFmrSbBGgTVABCjjE1rh4mkmqnLyg8",
  "key34": "2uFbRixPccZQ62YzCLghYPA99MNMD6t7A8Px8uN3dm3X3aHvdph5V8hohYi5vaY8pyDhwc276GnRyS9PsnMj3hCY",
  "key35": "2FWrwYT18Jg9atPs1mahqK7WD7RAEEt3yUyCPX4RuPgQLWQbq8zvPwmJUJaXKQdidpDb661DwFnhMvFYYW5N3Bqx",
  "key36": "4JDXh7GUkd6KFvJ8wD6JRhZCRMNz2ArYqPrUA1hTCjkZqDLvJJrmWx1VJjzLLSFUE6LZbgsKQMbv3kyJZ9cHtUmU",
  "key37": "4GkgHvvfq9Hi2KUbHfvcBGM8rWJdZHviMUAaHEjE6uqnEUoXCGS1RGDu3WsZ7wAuRAgpnVQhXyCwPDvFDuMmym2B",
  "key38": "5vXUVZNf1Jp98kR3kgPPfA5pQ71iYPpmLbs3F55me2RppZ6R9jYSkN71JSwUU3HiwGNZ61w25gFNdoU6kogcdo9u",
  "key39": "4yKtFvRpVEyS7LTEdZGfFX5DxinUgiDAfmhsdfq2cCjvJVxFcP37fnnMXziM2oQ2pvX5cGJFBvg37XhoQYTTVwG3",
  "key40": "2Qob6VMgahMQxkWHSa8wAoqN1jfhzwcfJMkVtqedC2XyGff7V4xWQuQsvj24EoNHxvnvedssZ2fWKqiQhU4vhjZ6",
  "key41": "2oacpw9RG7DMuRx19KXva2cGKevdnXvYMk1efdnDzVS1TM5iSq43JCJ4hqebPDsjGs5hrUx5tgtaZdnX3zhhkZh6",
  "key42": "4bHRXG7nJRMRKwBe4uBTfAK4H8pDHGJKqpkiKSKrYED9xANJtF2MpDWgoaoUGFGPY8S62meQxduEzUUYHcX5rt5H",
  "key43": "3kot9TBQM9W8uT7ecpWR93dQ4Gjmuq12Uh4TP8Sog1e7ChcUyEsrLSiWQmPUHF5fdUK7pmZ9FJToS92zAH9buTfq",
  "key44": "4ehcjSjnmCajjxgeZ7SMtVCLgSkd3avYVG5fckE6S5phy9KbrUHJFSzP58D4BgXF7MPDRyTy37586mh9YPfw29XW",
  "key45": "9BbKWDgr3FP3nHqHG4u3oEWgFuS7V8weGPHpNHZxsYbX4Lyp8FDUAnSZDnQSThpTDc4UGsTe94FkquC8CExy9gd",
  "key46": "2sUdqcFsigidBSW2gY9KEFnRMJx51Xsfzb11CV2B98DD2y2mQqLPGGTVdWLXEHmHjG7PUbhJ7tsoKmo9g8rCCPkG",
  "key47": "4GE9UhqJdZmeev4RPTZUn1y5N7c4vZpV5uonMdM5fRAHVLXCVmN1rCnonSnAUdqEFxMJHCcUCKcKH9BPh8aZNokK"
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
