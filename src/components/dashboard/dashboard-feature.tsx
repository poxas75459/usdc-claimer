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
    "4zY1ggtuRqvvGBYXP5eWLubaVQ5urR4CVvy5BTaivXDdvcXD5cdPfEsG5VJmog5Voqq2e7Rk3UFnZ8SCqcYtBzRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6M8F8jQYiczv73Ud8gVZC7ZTrdKr8nCFUuRv474U2ykGc6JVYWwhRecFvV4tT2mxatnco2PtYU4K9WCpRMdXTr",
  "key1": "2gB3Aewx3BkCFUsNA1zM3MDR4MmhPwEbCxRpfF1ZPigSiimGfpdfo9BRMkJiHh6wS5H1BZDJfAqKKegqnpXvjCwp",
  "key2": "4SBnzB5ZkobEjY4jCcUkUZHtjPZbCPEi2HAFqrxPEhGcaAw7tdB1CqZGn5EUFs5LXZmJkWzwXa3w59AY1uWX3Pky",
  "key3": "411upK5v9LxmTs6whwU2BN2aXJdschmnYMyaLVwVKVk8tgH5EkXmuF423fncpsSuQcHQKGxEftBnLt42qVcaLpNu",
  "key4": "3pkrk2hEP11eFuwXAz69wxMwJ6kHmeYgXGQ2FU5RbA5AwfJnBz734nqh1xoPR5UJPbR8K9EsRjicsw2cQeGNL1UU",
  "key5": "2f1nR7pwzmvuvaMKe8VVWeydi7UCCxTkA35sqrwVoar8S4dnUjcBgvr2GJEBt1sYHm8A86eiQcQJqMhKLWBZMNtc",
  "key6": "4zveDH22R6mvZcTdPmJiRfbzBNTR3S8urpKbyygtB63vd6eVCa7m7oFip3XVHJDENLqnzcWnTF2TK8eeGe2iqoJa",
  "key7": "53DYS3yWp9oQCfkLrf4QrAGGeFDKatX74M89X6H6kVHNE8JDuWtQpHRqtSByfRaQc58wK4v1k35N1hAavwn6Bsxu",
  "key8": "37f2Hn1CnsHPwcJKcuHJjcUL1oDTByEuvtJ81nN6ypvz2PdUhBjtDVXT4ghqWmjSaCQE1cHMzJauirwBX6ZN2vqh",
  "key9": "5McoyPJaWbLqBPnQDf5isADm6FyZDYe763uq13V9MCQdv6x2L4mBfoRSeuF8KGhKMFzwzkvYN5n2Md55xZHpGQRA",
  "key10": "44w1paL4ZVc86AnrDHuCAMeQeEPYcM3fQ3spQXnSuxMYwPshELeZ5aUdJsvkT8eTWt47zEQ73QBPVGbhN5rxzRh5",
  "key11": "5PaTNRTV8YRXNTNAoW8KhmrHvcyjQpJRZPgf8ftLhsWEbdRyC7F67uyz7T1B3LQdyBfaq1hCzCeDYD2wU5r2Ssx",
  "key12": "3pQwecmFqinTnC632QrYTUs8oxRUN1Kp5wWwNSw7ioWaEJvh1kMgdwxbMBYAmeJA7DeJJQxHDyaWpRpMfowwE5vF",
  "key13": "67K7SJ993CRQVmq6XjVBEZsuWy2sK2EGzKb7TyQbdUTujNd4woG5yZ8pkmqLXU6WsMW41vjsX7VfwVMP2gE1sYGB",
  "key14": "2PhLeYbNDTkhwK9qxT63FviusmYoJTHrrrDGuPPASLbeNnowpNWE7LG5eYVNwFvCJBhzM9fVdnNU5HnsHzJYtG78",
  "key15": "24RxMRZtBwMwfL7pHyh9Hk8N7KJLjRnW4Qq6dHmsXyXpnnEuwMzcg5A85vLeZaKTxFDEXhFqn9QdVmE1Y6DdXM8C",
  "key16": "3NwXGUEsbZtWGtCKaL9B5L7pp4Xf5NKgNRHcbPe7H28HcmmztfvcTkS6rDvufJnT6QHARxcsjq64ohGpM3f8nXUo",
  "key17": "5C6kPgeX5RJ2j6LvbWcwC2tDZ5VqNENTDDArngKQf8E1STzxxp9x74Tk5nzckVZ6HMxue2Jzsk1TZx2jxPKB8LFp",
  "key18": "3c8hseRZKBXe3eFoS2LFLagmUDSNmGAvNWbK2sRzCLb8AKvwY584W8NuaHKT9cDgH8GHLUqDNHF9bUJsAi2rHTAa",
  "key19": "3h47HCpQbTNkjxWYHvpsdrVHy7g8SvcRxaXY19e5UC518ze117UfqRkoBSqHawZFwuTuL1Xn7Fmkn5pSSNTqf85h",
  "key20": "4994WVsaQBUaNCR5KinWde3sgwG8tLACjbRTLhj5RHAHkPgxVvhAPZ6p33ZdSfHfgBVaeND7ryt3SGSg8tmyhyFA",
  "key21": "C6MVwF9qf117s62nBA5qh1LX3JNUEMSezkXWt5kg6DFvsSdR1UB6vNsjF3Bd4HgnDkRNzwesMKVB1VUFFvZuMjM",
  "key22": "5Me5bWmFYQQS7ptZK1aYBPvrW6G7K9XNZTvmuGXRxhty7smHM628gCN46fjw85STwXtXCxmdDVzjdh1YcPMp5WQR",
  "key23": "4UAHjscdjTjqhVm1anYCrDZ5x7CaTJdUYMnwv2zeZDcurk8vTSNGk8t3tiLYPMweMtUt1VEZDVZArsBJStJjg31f",
  "key24": "3KNEiTDcuJtheH1wHMvqw25HvXZzcb33hDRz5iiLTm7br4TNujK55ChfnSFJZhMz15xSsJyJFoz5zZV5g3jPwX2H",
  "key25": "2gnkXWgT2ZReiitCX8rK2RScsTEjgQ7uBHsfftcjqYyJyeVhzs8uHqvttdAhSCvRjWC8axsDKuX7PnWWvFMmKEAw",
  "key26": "5RRYbLy6iKgZ5h24BRKrht6hQe68J5DkzXjUJiGuUai29qiRpWwnoqxtVrNnGDhqWL4n6mKckqPShpbp9TAw3i3f",
  "key27": "4TkGEitkCWmZov8XUvSSVM9eB5z6z33AK557ER64sLhxVwQgv68LTHfhLmykaZdwwzHB8RKEwGyvzYcRvyXTP5g9",
  "key28": "BwCkf69P4oTgBcooDuzkBJiJ1aX8jvKfHha1aEEHK3UtxTVrhwsxSM1LX55dZQGycFX4TvGF85nRkac7a6EF7DX",
  "key29": "4Ahuzss7ZFyY3rqvNhyaWWxCZGhy6d5Qn8dA1rvzcAk6wu467vPv6QiPJQQ6bgiHyTAx6Q1DMigWyRPubiBWtzKC",
  "key30": "Xvmgomxqek73yK5aWv58BfwURV7Ch1ZrrViSNPhKaB2QmHx7572CdAXrmp9C7PKykKt6izGRqwSMLoS56N5CDYk",
  "key31": "nG4uhSheL1Rxi5HnVwGftiAmPmdcn9c3nUCjTZisn5xfqe4KfhVnmiPfeKgCevpnkKDtqo7apDkAi3scZ1Wcpxf",
  "key32": "299kmbq3VeCq9jWXfPArPjRAwhQTwGKfmCmGzSovC4pGwVJTiMG1C785YNV4soED72KLFfzBo3PoifyU9kQM7BXo",
  "key33": "3ZLpioamkSDvqoi25vyjU3iCowCtafLbTgqasZSKhcL2U1SZb9coJFW3SjySA5vXRoioRMDxdwEMm71HJ9R1WALu",
  "key34": "41FUiSNGadFEkU7abnXcGc6q9oAsnWN2AfyUp5Hm5Xgrjz1sL5ddEBM4iobMmFojARW7nKgXBGs1sUcCJurAsG7w",
  "key35": "3DDotcL9wV6DiT18wxYNERvKPQxnbWcv9LMxKjG1ZgqTk4fi6YSBRLNfaTwDVpKmLKtHSANXx94rJpemnYHKf5Jf",
  "key36": "uLsKzLvxLJ2mfEK7tnSCrRNczPWvNpF2jUmbXN9HqcsSfW7KtrC5S8KLB2fWPXHYio1WzjThd3TJY1iCaVQYRc3",
  "key37": "32zarLPXaYfc8fitcaSNFPuD4npT2icMnqQEDjwUqTve5NLYq2v7ipNt1JvyJd5DudNVDLEqBpoH5ruLz2BAoniY",
  "key38": "2U13TUofWVs14EdLaBkhEr12J5ShE526kAiFmZh8HdSQLCJ3vaMDdZ2NyutcpaotpYVYBprSAUP2G8gWQnVSCUDs",
  "key39": "45gHJsho1suXvE2VK9GyGUFvahAGhEwVyiNZzCGYrHKsSKdELMvfBTh2nfqz4GZZWEXfTki5WgKpwUttbpwnK8yT",
  "key40": "cNwAipN6DgajaNmWm3ghRt7QXFGLW7fQZL5CBXkrBKmBagPgsk3xRqk5f6cBU7i7hWWmuFqLccoF134Vi7wTFrF",
  "key41": "2FM5S97ahZfT8uJuCPxGYwdAyTjcqQ1PFRJvaeXT4FYhF7ewfgy9PquoSUba69dywabPXrmHeKgZcfrQtj4v2Cx",
  "key42": "2XrePNWgZBxcTq1e6wELwyXczGhmCK5KgUQt1Cx6DSWq91TruSTLVixVsbibNEPfpQ26kb9xdLYbPqSSytN7RgUA",
  "key43": "3J2HRDgtHUPmeD7vR9B4bfKsLQE6TjbKaGVV52pEyzCA3Ery7n7A9NS2YyUYUqhUmaEe7CsswiD148deSVsf3mWx",
  "key44": "2jUdmWZxbNcJCHPyPFAX2f9rCjjryVq85u9TgQCLgMc7WKUR1bft8YsNaWTHo7dnx3X5VsyC4ykCp1dpeuT13dBi",
  "key45": "4mfSvUjT1bBbaqizPa29VvrAecg9HUuiMutGFPs9m4WLbGpHfnFd9G6vMXh653cddVH7fvEP3wp36YjMDK6Bexmi",
  "key46": "2gX1FdtGFxPmskGD9fPyhExxc1UrbevwdNX5LjYGiWi8ZzhmPRrQWVpDSt8U4GtxutTZjjm6BtfvLJNJxh16mmuk"
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
