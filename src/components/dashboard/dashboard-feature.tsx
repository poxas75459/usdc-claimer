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
    "2KvhHrgqqFzugurgF259wXK9gvUXbn19Vfeht6WqcR3C6GKNoSPTA3ZAFt27icFE2FduyDL6wCDoRMHYo8jKhYJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36xUDcW2eAdAQi9WbxZsKQZJ4tKYLf6MSjVCcvPz6fzMQ9XTTMvyG5R11oDUZWj3AJDV5HmcZ8RMeGNnzAeaoFpk",
  "key1": "2Gqxy97TxkrA7XTJkHkDavKf9bUeD9DXSsKqaqiP7yD2tqYusHzmTMFqHDExR3ACk8z7Sgqdc7P1x6KL486o8ZCb",
  "key2": "3hmjDVQED7XD48JUvx7B3KtXu9sPLcJuyVasdtZzyFwALDmSVGFpk8d1AXHawzda7c7HaYtPa2shcyc4XdKyaaYp",
  "key3": "37qvH7JFAGayFxz2nnJ6oRUXpbeiRctBGqUjDboB3UKuQ4NPgEcVcfooHgFYrP87ZTVh5q3kJ247MxDCXyGRYssM",
  "key4": "4TBP5Bk4nqCAYRGtPmn8L5LCRr9AFyzCc6X65ahxDdjWpvw13oAor6kpPueApPJZYya8Y1BsNy8sbQNjmtKY5Kw3",
  "key5": "2rUG7wZ3amDwEsqMvMJMa1M2CTkkUpGbuTZuFh8LJd2ARr2EXAPuvAf5TwvX8LSLAFFMA1LXyMqQzUPm8CBehdsV",
  "key6": "5KnQEnsdeuwNpDCFYAFJwZjtTvtUDinB1pJwwhZsaDMLkqZDuAdNbexmofBf6FjQUcDLzcgtMgJxj9jNNLmrYEad",
  "key7": "PbwgUBTikYAubcBvStte7MHuaSDUrnwiuWXcZkX6rRW3rKzRB1qD2EeGGh8DrYMGm2UQ3vSyjjYvUx24TNKot9G",
  "key8": "28L88VRdRU2WZRoytuTfNkrxh3AqYzP2efa5YNxXaX59MhN57hnXeMxYsSe2EdmYBQ5g1HeiKm6TFobwxFNPvwNt",
  "key9": "5Z5qHFvTWDAQmavaodApQ1o4qhaWr1yyVKPXBNDuj4JF9A2Ne6JiSfR5yVmTMobtbSVMdLzt8A3kvGk3P6tnYdDS",
  "key10": "2Vc17Ja7mUYdVzpN3TgiEfbfQSo5WSAasddLeR4K215GfTc6GLAK8EXjwAD2dc4rUiPeu7vvRa8aeKa4p7irRPJH",
  "key11": "29gQ4MgiDiDbL66U6ubZiUmkptoQ9dUfcrUf1moEfAdu6JR8VxNV3yPvJHzoqiN1zhpDsZVcp4riXamXPvifYfag",
  "key12": "2ZRNu6WB1gk8Cm4y8Ghs1dRt7aCshYyQv4YXFR2FgR4bJBKHABKYXCxrinGgv4nKsRSvwq5g3dkiCNupsbEmsLjh",
  "key13": "581sD6TW1AJHqSJnTyXvFE5Ln8v9kHoJXUjyv3UeRCXeRiVmUiKEo8sPVeFtRVvmRoN2wAAGbRirB6u4appV82xz",
  "key14": "TGDRHDXcX7GLTdphPgxy4EH9kEhP5phq7YEz95prKkb3c8NEC1irc44ZKoHYn9zRz7g9DNTmLV1gEz7aCm58tKt",
  "key15": "3wirMq3R7vhgwnV8B9dos1gK6V7oxss365psFotaHzhEsriaUvcsJqaEXnTjMiZNT5WdScEiniTwWCznPnVnngeq",
  "key16": "2jVcj8Z7i5WerNGGTYGuUZgbaHPB5UVutbPfnS3y9TFthanoqeBf412f2N24EvAfwRgd5DzRXBp5J5VGY2sQT6xt",
  "key17": "5m6YTt78uPxRmbp7pnkc8qwQNBKwjqVHvB9Qu8xLxgtoAPepjkZ8Rv9Q8393oJJzWRPS4d8HXNFhmviVNCdVtsx7",
  "key18": "3wqJYcuB5RNbhU4CYNqKEjCxWWVAdARh9brsnz9eSpQmsw6yZiMa971bvTdz6jez7aXQmmEbx82stpr5c7B4q9gA",
  "key19": "5fFakFMvrCXDhZKwbMpBjom6cFPjKfViFBbdKcNPzPiU98nQJxsndNmBFeYfUKjLnNVmParVbE49NQnrAF3HWaPm",
  "key20": "5SLPxfyrEJjuP3TR4CBkNXNTRoX5nvasG559LxiWpNUdgijHLYfKpKAJdXG78JzqzuQx8FQkEmphrM8WKz9iAWx3",
  "key21": "5CDkZi9gWwZhHeCpiH7HzVeBaqbb8VBeKmou55x1z7DpZCuLCdSgTr86HzjdckSA6pzWFTnY74cxfJC8WeFC4W4G",
  "key22": "9MqdW3uHZvYtjNHFF6yTn6cFw4tc2FzWfGymWJ2RmYVavrhEKnwwUYvR7U7bS3G59siJBYFBF74qXbdriQzKRQe",
  "key23": "3vS3XyExnXRmDJKiNdH5Kj3HVNw9mFgvrZsfWpjj1PR4TTTYcgaaFsQJp9mJSy8PoLz5xJ6KjXcmu9QR4vSknXeS",
  "key24": "5oRiVbnMqiuUE5D5gyBdizArMsQLM3VDX9tNNYvqHe8NopDTc5cfB8tZ8ueATurYDPYkMTzgptCWkJNGDvwrXhF2",
  "key25": "5mFs7MzvT4vHZGf7Up6KWJkd2Dp7ezcLne1k5kdzyNVPPMCVKpatuRiV8J6qbY9QqiFLi8RXnzEKnmSEjphLjibR",
  "key26": "4ZAMxEfocHZRN1EByindyxuDqd6YVByt8ypmofqYVPCcmqgJZLXodia1cdQ9atkr6LgCXQWdR4qP2j6CbxWGnaJb",
  "key27": "5WyVMgFnZqEqxvhSmqcAqL159bJEurec4SGuawqRj4BHs6gXVBVsPtaRfvWs4R8sBMsTEcHnz8GW8qBqXkYNYQMi",
  "key28": "4fJZdJXRwVAeE21NrEYJcKVbJcucUYVXjhATDTkNEMrRwNVyxsQTqaQ4EfXugQFPaK8srxGmp46m4mc51Lb94ytU",
  "key29": "4gqAuzwefiWwaF9p2xJEWnkGWmtzpvvCibBkXUY6VLaFvn5zzZiKULCzEVkyKToxagEC59oMGxdCBLpR3pRJ4i9P",
  "key30": "3CWuA6WDojdbcd9aeStMvDUxiX2gGQ4o3NKjNitn5MpxQMDbmnGVCe5qBDcw3TJzjSnEoKPDd4uxxsfqmZ9By7Jv",
  "key31": "2yGCPHLiPpYZW5Ag4sZ68hcGF7WaLgr35dVKTCCYxh6q5DgstsiyaA4K59qQc2wewRVDeFx7yJRWrPipNhibGhcs",
  "key32": "63VNGhah1vTuXosAGE81JLPv158zJirfi7JD3AwmdrEkHeG594roNXGo6cJxUws7QTAbKMPvmvQDMGkthaBfzkie",
  "key33": "31vtex6XbzFgzwAThypDdfbfKxRmaatdMsKbQNiuYfGYnbComVFDPupoMfPyHk8byEEwLtxfmPqMp1Tgo9MVwCjj",
  "key34": "3cvh8T1YL7PveEKugZimxrazkToibYjepGzjcm74XuYWHLHUAnLgX3zWwRnCMgMeZ5xQD7c6DnM7oAdnmjzdxn5j",
  "key35": "2YLuSUWvXBNpRmgfg3QobMiAzHdmkpuJvkkV1dsUEoFjJVedjWG1AT8YrxcQY8Ztwg3iMi2FTUHDwvsTSZ4NmfKK",
  "key36": "weAusKMB6NAycxwbfr2csZDAay5Vwh67Rfr7SBnYUVDdLEupUYQUCeRUd7cHqkRCYHrWwx5PWgMyMRvJrZJJwTo",
  "key37": "4V8y3ToFcsawX2CyDdXqjerkFJtVFwKR3fPRjyjrLMUsEggTiUvsZ1QkWi3We1AQegSn374nqkAcZBtQjoTdtSfr",
  "key38": "2ooPoxibqNtniyrpUy5SrqF2fnYTsJiZeE1Y4ocCjKknCUCRnNTpvmWDtYX7r5HGmEhLDfC9Wyc7LyFm7hEWqSus",
  "key39": "3NDftREGuGGFF1ikDbBCLq7H9kDGLEh6RPnNgpaHyswRoVa78eLnRsvA7kbZJ3SMwYA6Wj8oMLGZawe4KfHBAZZb",
  "key40": "sQz4czek127oyCw5iMmW5BR7vuiZun9kJVrhAyZ2aqBZSqoNtrwmfqcSpmvNoYdueM3ZYfTv8HDP1xojC2mFMqh",
  "key41": "3UTpssAmCfUyN9tvTLvXLsWwhjXTSgSwun6HzAtechoiF8uubaFLSczbCGB1JNsG1DbLWV2gERm2KA6kLaXyPckv",
  "key42": "2XZ8Erbp6TLeoWQgEziXM9YnzFtSmZSPZRMecmXju4rkwAyyiiidznwrDERn5MpCwspT8QihBESxYvGFSZF22NAi",
  "key43": "L3Lv8ijz7zDpSCize3qj6BiKDq3ARtGvWDnbzKAgc38k5PwXCsY5AwPfz2mvx6DwEx2biGE8qd92q7y5fHRPKbE",
  "key44": "64HhnJbX1pQXAgFieWKUbss9MMPFKQQjTsM5DsAG7g41vjR4PHwc53SW6ta9bYBHAHhVWdnQdiHdf34s5TNpABWn",
  "key45": "2fGqPNMVaTzxSJ7ryEUxadak6wq7TyzV5dpWF8BBsZmpPG4SnxsNnrUWLZfdEsBeq8W8raBErBu22RxSa51ViatL",
  "key46": "PqPHuYvV5yyiKXtAuj9XmhUvR5Rceif1ZnsvYBK3GSjN7vgiqjrdH5SPtMT9z8UM9DqU4gZHJsjj6y1ovAViYEj"
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
