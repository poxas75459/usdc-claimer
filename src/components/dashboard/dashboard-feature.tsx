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
    "4qoMpDKPJKaMheRWSSG9dBF3WvdPBicDyaRcPMbxZSTdNxAQ9BBVyBnRXcffKzAYnL4ookGs6gBwevz2VQywXLaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZgYfjU6Hn7czHum5fazXarTQ6vzLwQ4Wvvd2qQuDzSAijeFYiz4UXpHGEWQg951Rhgsj1WjmrofD9XmDQVnLU7b",
  "key1": "4xxGtfWWWQpR1T1bWu5M3qDdDZiwxBU5gdD3TaaWiW3ydVwQYrRkQpmAXW56dSUz55AUmCPvLyQmzwtntSzPU1JU",
  "key2": "3pFCaRNE9jBZoW38oqHXf6chh4eRUBLvHqDf3MXryGHFUVqBkchD1ERHdXk1cMeKrDgR8KRMMvufL54wmAzZxMeK",
  "key3": "5FetMnGywqZH1caziMU2841gmKJkmorqqf48vW2ztE43MphTj2ZjetwyWV6sXbEpU4cKJTkx2aTX6rMsE22z2qXD",
  "key4": "2MLdgKABSv2vVWf47dgszL4C8reAn7GmnbN2GTCZspfSwMTqdVJcMQZRm53ed8JkSQTNvqTHsTdk2SJ27WwD42iR",
  "key5": "2mZ6EpwJzsTKrxxry6PLeXYQWud4v36wtncaDngpZmR8ds95KkFMZPeNnDNT6iY9gNWyRvYtKaoZtU63VdGFEefE",
  "key6": "3ZNfJCfYfNq7zer4BZMrFU5X1qE1mw5xd5qJ6zncsAJV3fE8r27rvLfDky4PR9xsPuatoMeRZANCPFEynY6tKZWY",
  "key7": "3GsCsW8xRpRmhkv8UhhBbte6gJ7MJPwGFz1TCEXiA7Cw1h1Za4LnJFhTxTadxPgr1F9oQKRmGVm7CQTV9mH1RQ36",
  "key8": "3udedZHh3YNHehdvY5sV6iKqpftZ4Jz3wd22A1aTi1SUp8CG8AvbQHtqZPTVyfn4RPVgw7P1NH17MaiaA3WR7TSn",
  "key9": "2t82vVrmZXpVAi7FhMZZExLSNY87qteKPabjjApFv4JpYe22SechtWYCWV6JvkmMgeSvRYS4yoRPf92cUDB7ZYDD",
  "key10": "491dCgeAAhjt4auRxi39SnuiA1DLBN7M6pNAyyfTePvWnsTr8PCCe8JCagREkh5vfGdXQRw23L8WJ23vxBxAm5wy",
  "key11": "3fUPGaVmSRRAEnmM2Ba52MSG8n4Su83uApQ4wSQTgekkfUr5ctUunubBun3PjGxnXYkFgWoxzRpH2iXhXxJWEYHR",
  "key12": "3o5vTkADphVhKyAK6oiJiXZsQEyakmJAeLxzWxo4NK7eCx3xqKtBre1TapFKkexcQ69VowE765zpnTwzjDv8R6B8",
  "key13": "4Uwp7NhAhvFGCnqjm5ATDemCiGvYvhJUkTYiQsvN5n7t4eLyhr62yx4YDyiJvW56L2FQQWhgLrwTscQr6t345se4",
  "key14": "3ixZTJxwvxRbon7xoWvcnUqYA9Mjcxa4mwe76BQMRsMLqYzupygRC2Pg535nY9zpe1vZXwJjcS5eCJ7ytCWXm7UR",
  "key15": "8RC8BA7oLbKd7gvgmmqBcLNWbYuNHfbG6UC1Sb7eLZ5Qhkz5A51U8LZ9PhJtFFqD1ZEeBGgsp7QxKEgGTpVVfKM",
  "key16": "5rVXxkabu4wCspqCeBHonJoZmUheaYJ4YzyJjSauvPfsRTEZQiGP8LxyssMgo1XnCX3tNE94D6fJx6j8dsy45GQh",
  "key17": "3bFL3S5JHHqmQtm66gY6JoKAJqUKJCZzG1KGdZmACgF7qKbJCfWBokt41WSgzW54TvbF8cHHQN4yvRRs6gJr7JX3",
  "key18": "2w2QKurwL6Q3Xv9yLfE4mZeFjp55i4i5WGmDZZ5nHsswgqDS6pXcENszfKzoKgNZ79swdUfUR84QAXd4x4Uogc9s",
  "key19": "oKwwdSybDHhhujTR5TBymupP8hEia8XCFAsWPBXh43bL2ziSUbVsR956zfAChSdZexXySjZTUzuaLmfZ9fspt2P",
  "key20": "4hFA69Z12TfzpWQmUqwf42ffGLmQgJHC8oNvddGxe1gQmTECMJsphxZyArsWiQzferZXynLB5xLSzMaeZn49xH7Q",
  "key21": "3GgE8i7Zbo6BXYCj7jAX8xzeQyBGaNFtiurNH19k2JSS4b4gRDgw8PqXJ2B9u6ohUsgCjyiruE3GghK2thF1jmV2",
  "key22": "2tUZdqYAyW6NjP7mtd4mKFTkMxJzLn4zG784m5oN9SE9g2WsEeDCtQzmMVyUf5gPd8RGTJDXoW4FtmZ4KJ5Seba3",
  "key23": "2JGr3zFor5G5YJBpKFN1viJmnR1U2syXPdXPpPUkLyWTBYHfmW66Qr5ryNiWyy2gUt18DKVZ8TpUcpBL2s2U5Q3i",
  "key24": "4EY2M1KUmzqS3SFLpMXuKqUApAX4wJgqBfH45av6bNmYBk44dBxHq1MYNZPcFdaLdB44tw1K5pPDjb2pM1zeRQFG",
  "key25": "4QSsjJnyFRMFFvfomt9PXpdArzBTNCmFWMxBckgZcYhxYFekySwxaCueq6A9QPccKu5RojGyVEriS9biss3cGL6r",
  "key26": "2GsUaUaLZUUMvNanoLxysSiZrUZrR9JyfdXpasi6KyeRXidbS6JfxgBHxiEjeCGo1hLjwVk3feFZJfZMXfhYFCc",
  "key27": "2M9aY8UpA6uWrJjxied8PkebYcZp6m5jGyFEfrKfCkuKzjpcdHpTarrApFWobWgdM4utpS6eHZSUEzpmzDT4sE54",
  "key28": "44S61xgrGks84iAvNTKogKUfknXz9DK6q9QHCXF6tpbdNMA4299Z8WZY3QZUGS1GDTFk3GVfP78VsvtnBgVHo64S",
  "key29": "3zMjT4xN5dcbaKQZv6EMT1Zj5HS6RMkLtr5maxMVpMnB7b8wqfLvAiFKoCztnu9QksE6Ek2ziM6fxNmesPTS7XeS",
  "key30": "3dzztNDmWYwpuyrnfkWifyYHB2cfyY7NvB1uJyZCn5NhQkuSp6wqf84ffB5eQgZUfw1F6imGx2njST587C6dcpSE",
  "key31": "XsH5bG1Qm1xPdkf6x7NPgQkW71ddZnBTusqeDqaTPyiFBPUUiNHfc2pP9QTtZVHMikUPWj3t25aCjWcQj2gkh5Q",
  "key32": "4uFJFAEmNWLk2hfBuZrTWtLYQSXCBqpEkgUSVZ8xfmGxPyFcSSmw6SYjV4LjDyLLjvXL2NXnJikykhXA8WMA4p6",
  "key33": "4bLuRSW1MYkvbPYjwn24MXTnCyjf4zesQDkNesdrwmrSAUsbvCh1hCG1JAVVUtM6vqkRci5k43MjQb9jBK2GYhTU",
  "key34": "484X7KZG6Hb43jznLPWPALq4Do4Pa5uLumnq3UwAmRDKQckEY8SdoSuR6a9ouTd6vg4kACr7uBV6YszoX5oMgdDF",
  "key35": "2xDa6k3hJFXRVk9Hh6TzzcSmedXHFH7PYND6RaLHMUf1tBASdQpxWor8kfqsyVbMp8TyjFS14ZgMW4QMGGps89ig",
  "key36": "2FX8wQ5r32yJSXRSVFj9SKyfS5ekeEQJiNkg4cTpZQVFWacvR2Xdm7Ee9q2i6uqkjUBdSQivxDZamYDFWYDMvGns",
  "key37": "6vCtm2kJsUgdnNXmaPMQkm67mwZEN2AL4nHY1Atf7xhTxJbE5axUo8pbbjFmQVoo8akiKnqhbh3zRDnHCAcNnL8",
  "key38": "2NXrr7ZKDzjXJQXBKknMdag9nxzuRYxvW5qH6GfPme4xMMywSWSA7iE59whs9GrgVcJQxjakTETNdBmSzqq7KYwo",
  "key39": "rVP3SKdvTauSNTWnMJjtUVnj81iUHhp71ESkwRh1QvtR6zdpinX4B7eRKd2VMp53iUnKqcdGmp7o6qQE6NDVxgh",
  "key40": "3iqXBt9mftx4KWUf2tpbTngk7G6BaK75osiq3LL7UBDe5zxVwqZ1WYaJjjxNXYowxx7ai97Ye77kvXQdb7yb8pZ8",
  "key41": "5rbd3cWi91gcRLNSqhZd4Gy7ykvpfi7WyqotSQFNjbS5NehMRf2QLcdz7sWQXrKAv6zDcJhAs9a2HupDLdzywbkp",
  "key42": "u4qcARPUwGkrwpvRNmRQo7Zk4QhfoihbSUEEyyE35cCkQCknHuTjFcxD6uqPLYgyN3YyPtSbNtZ9fTceuNzJiut",
  "key43": "6TjPGyCippXishWuzskEAN3UtsTrbmBXcu7ZgTHT38k2G3RNAhPg4JXbD6ZQQBLWEpND1PnqJeCFTyz4kr6btCF",
  "key44": "5WDLCcD5ABf3zrv7fPzxN5RwxLaoGLN5kGaAyRDE7HTHsekeWQeJ2f3AMy6eEw9PDBKHJx212bpcoCsfWzydt3AW",
  "key45": "4Dbd6g8uBNHYAfok4jr98LkkK9otDSCndMX1pqGCuHRWKpXgB7kEUiKasSuo7cBqgtHsErAH3BN3XKCefoj5TUyj",
  "key46": "3rGEQFgzASbTN38fXfF6zxb9MGkywGejm7HP98pVnYdiFdVjkFArFfRiXGfUqdsbE2hwtFpsLvjqwB4V4DRmhdWQ",
  "key47": "sdGYXCZNEbqP23sBVDdHMdfqytNBk2hWhB9KBYS4zLbfEqU4BikhCPNur8bpvLzAqb1gVgY3uA9ZPWWafn2duLS"
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
