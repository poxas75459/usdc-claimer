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
    "5khHxcA1vwSq8UwcPXFMGURaEs3byf5sebq3ZJEZpKKgFpGNhopihTT9uJd5DovPYBYSKzMEoLtEGyntCVz3PxxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cPvLW69T3x2ttcy1nu835a2SN5onHe55qY4iPqweRmF7eBQuJFGDKTBuAK4oj8zG9aKKiiSLMcqHV5VnxLEy3Ga",
  "key1": "4Ev3F6fNsgMKbnBuzWzwEYLgxCBLD3gHTxkP15rgvSGN28qKZsT1fzveHFC51JwurfSJCN2yDHPTyNERxrKt7iCT",
  "key2": "MMvsn7xV6m6rTz9Av3iTERz6Aj5weqpChTsxcZaHxGVZebJed4FEVkq3Ky1vRU53UbZCJ37sG4iz5QwrhnWDBAn",
  "key3": "45yEwuxFqa3bynttu3MeJbBmGSLysNQEqqWkNdVRdj99ir7njJx1X1G4Hm7kTcR5LV7DAPdZcRc1ru2EXhCittb1",
  "key4": "2NmJiWZtMj26sgiVB5SoipLEAhPGGDUqf4kXWa6TNBA3CbGxaBEC6gDKJsqm2vSxNJB9S5dWVx5buGx6wurBuWXU",
  "key5": "3JL29jpoY3FmauS9WiyYwtQ8Cg8QtKYSMZcav9ZbqCZkvtaf1SbDihSMgzFCfrFmAwiAhVrDnaa68sQVCUUyTznV",
  "key6": "3SeAgmSkwm7KKwrGAoD7Y9atFvEN8iCi3TEPpVi4CJZh9JH7FxqEt6YEMwy68Xgke2zQUfgyVAzX8eBacKBCxJcC",
  "key7": "4NQtJTt62CwxCrpRZBVqidDbXHBC5SwFkymnrkXpTaAngXtMnr9x7ShKxoZCHJPvATZjspC9MgW5mXVxSkGsADwu",
  "key8": "3fhNg7yzg1J61aZ2xZenMoV6kaYM4yKFjURWkEHxKaNKDTnqZqvfkJitRRL9uqjzuBitLWL3hBtFQjaMzBjjCiv4",
  "key9": "2JgCt9NZhdsFCowy37E4KipxvUguUXaJFP4a6sqSPAGEcGyhmAuEbPpL1s2K4TroQQotkSPyEQrrAdL1BBzdRarW",
  "key10": "4PJAa2XiU2qwqt1B94rryB1yjoEKJQrn3oThmDhwySgMdsqw9EgJ6BG9yzpPexuSiXKB8Ck5V81tZjv5m12A6LPD",
  "key11": "qodu9kEWNyUHeooXg1dH2k3mHmTCLy6f3yECqfu7ZxZagcA8CKsXxkh5t5hmbCVVAT3hyEWu7mDAnPVTUHEmokM",
  "key12": "53XFBGZVGqPZqJdZi26hoTcdC3etxkAa79jY27ZJCrXSEJFHveJ82Uwb2sEKBRLiWAecdPdVKTTutCLtPncyxVa3",
  "key13": "3TwgvZacumVdEXfkBXjwQ8sZ2Yd6ZDCUg2PnFK3MtxNMTWv4q3qwL347W4jaFwrkakU3uqzUA4nh9iSExF1okbWN",
  "key14": "22kYjdXXyyGXP5zQhLPJtPBpNzET6pYi3VpHLHALdv6eWvBXtRu1Rym1Rty9p5CSwNR8o3DcFkJv8TAQ9gCz38uR",
  "key15": "5UiDLCiLedhwHecapyLvnst98LYVAEq12jsmXvk3ETLoYkMqMtXBg6WWkNDEJrDScTheqDBUbLBBc1pzv4oTDPA2",
  "key16": "2xiiStrnLGqM2HvHwqNsmFantYBRpGEgXFbCuy1dRPzZnKPmMuBwvX2We6T3GnELsfbFsZ4fouHsd7EABHsNoWY7",
  "key17": "3Rm5Z19Z7yQzAcJjUANKM5UMLBo6BsVs6ZkpT7uTvbqRuq3dvTNN2YGsDRMAEkbEMx55hyJmaMLUp7HoTUxhadC4",
  "key18": "2LWp8mXxR27CB3r78t6iKABUMT557G5ausk9b4PxbMKYUJp1v7aKSN1soCrDfaanmExkQzgjPBNt1pgXi83BwdVp",
  "key19": "4GpCvBFs8EBH1mRvmgWqyiWiMtNgvq2toFsr8HkCkV9SuGK2wVqw9q9TjTjeLD25iqV8V4Np2XaZG8JbjfZad5iP",
  "key20": "3GfGz56h87Fey3pJR9z1HjV57ANwqL2vn3eBKWw7q1QnV6TDCnjcWZzZx8mMJqjaswdzm25AbDzVLTkJKQqTchqv",
  "key21": "55qo5Nqv547hefq5s5sbcW67rX3PWTSii6m1FXUkTDKz3x3xJ2QsE6XB9F2z6ZdBQpMDKXSEKBKajhv4fA7K2XLz",
  "key22": "3Q2Xj29SEVGY68Zk1rbD5cxiMieuuAhYWXLwyAWEFra2Kj4oUp4ynFf7b5Ht3Stj6GRNnuXKe1AeTJB33PZ7w5Aa",
  "key23": "2gBwhnMpjpFdkk7HYAsH9b8hWJ4QjmzjPkARYeLKL4fxdpwHYyEwLwNNagzSqCFSiXacTMfZ8Tenk13VfT7b8t7w",
  "key24": "2YMYgX3We1Vzx7E6Auh2cyK64Tbf2EhDwLdLUvxSaiKkaSEvGbPeGcdxXNmUtCaHaoX31yZMbR94ptbjY2kXNtCc",
  "key25": "2dknQxukY6iVR4MtJ3BkeQMj75nK3mP9rWMYSsxxUeeuD1djJUr6TTRoFz9VaYus3dQEF24n8woUEqRiQfXJqSGT",
  "key26": "45XMPH5fvPdEU7jB7iH7KuboW2u5cPmraaqpqzVTGxhu7xXeHLFoEUSmUjWafP5JNiWcY9gk8DjNb9WcF8LPy417",
  "key27": "5bLLq4ZZzemA7tQm4DDRsgw2cjzA9ipADu42yymvPdJhsZMv3dkjkHwB14aatdDUYaQCU4kKmMjTkcAB6iFxJr67",
  "key28": "3za1ckWe1NHoWbrfE28sabYCVVPRPL5GyqzifTAWptMDdtXefFWABU23rXTbpqSgNC8vbfqNWDdirvTdc97fDJQA",
  "key29": "2QgC65ExZ58s8SJcda5jryu1mcjEZVFpVLq3ZUCpvbXoLmrbay4fSJSsRtmuaunrzDVaycV7CCfhzgqit4eMdaLM",
  "key30": "qauRR4Lzy4o3JspWC6o3jWPCFLP3Y1RC3Sjiy7HxAKQmT7nUTAcDvg69iMKxcbV4QyTwKfQjxQtztYvu2dAaHtc",
  "key31": "27vgFQ3dgTB1emd4xaaB5xoKeWhXPZaPeaCzcLyUdR5j3Lyeai2kMxhzvmh5m9ivgss1iRVKjYuxCB2N7F71Srnk",
  "key32": "4Bhjo48ktC5gLgkcfJUP7qJ4Cc2NbdYoNqmndTrZtMRDCzwVxcu8Nq2S7yCdU6pcPsq1Cj3rfrzDRzCqNdpZkBdQ",
  "key33": "2xzqZAMN9y5wttDfsbuu2LvSR5CJmx8yUCk2YJ7qzw18CXA2pgXQ3qxnVc4aKZnj5MxdmnisZUVrbfCGD4Ti5coM",
  "key34": "5xDwHNadu4YbSxkd1fHLjDTrnDjEET5ex24CWUaduiuHzTBnRbHmRurtp8Q31EY9gQDEaN3UDcUcTkwBUiz4z6x8",
  "key35": "27f5WHMkFBEQKFeo51HAh49WhYb3EFCFTmDB42bhJNZtQ6aD4BbHVQaZvB4AMYY26LgNDxtCyqytELw6BnZiiHyZ",
  "key36": "4KXTmH7b5Awaqjeg64PFqWdNuAwzFYbz3aC15EHsvpBDCUt3qoZPqg3i5nea8ipmKzJw2PvinQzmWDLbdgDif3mC",
  "key37": "4pFCU7gKjdcEhqcf6Gb49V6u1f67FWcmxCZ6ZAohRgkCNtGk2QcCHH4c1sAEtfSK5epWDeKZHPCbpMf1TJ2SCd2z",
  "key38": "4GfB5e9G5agbsJJyJvuP7eFqJ657qkTpVabQtMu6sdL1w8uNs2vTj1JrMYy151BBfBC5Hst6ocPeFNUCq4iCPEsy",
  "key39": "4pLAy2781YUzsezxwASsojK28n3MVCpkNDV3C4vBgxGR8D2UuKsWtCk8NR4BkRJq3bYHnqnFx2CFdVL8Jiqh4WwY",
  "key40": "33PMU8S8KckJ9yEAF2qDgYokUu6xJrk1M2C1yaMzBdcGfytVL9GX7BC2P5q5pa46E68Uhfk9R4g52qVAjXixFkCo",
  "key41": "5L8d8sJuhmWZVaHFnikeD3h7x8V7GSjTb1SjjtmE3oQifzrNah3cRzTVTq8aQUmQC2DCmMMGzjjvQYCqxhqSEBG",
  "key42": "63usZcZzn9vKt2fRh2NBxbH6WYHeor8VVGa58qnsTyvr3YBbTAbKCG9cn77AL67aSDmVMvHqHjRMDukzxBcmZ2Jr",
  "key43": "2vrGFrb4692XtiJ9sA8ZRVTPZdSFtUznQJdtyx2VEoxXc5t2fVMrPn7Rj14hYaGWujMyRDBMu29XHF2p4UeTXyxD",
  "key44": "34xpzavexAedySwRBp3CjVBufDnxXK9Cqgr5bzs5UeZEqZdtTZZTLKrYYAzw9a88VeCJRo6HUrKg8xnq33ZqEv3v",
  "key45": "659tQztuczNR7Nu5DTnkAEw3qSBmRCUVL4FbGSnWL4VgZoonBkybPoxsPmASyJjEu2zBWzWhebGeDZJDhiwBQoVh",
  "key46": "53GQHH371mimeKiDsx6Rfv8YauXJqE2wD6jiJfNHkRRieDPga3Dx3hbKJCmp1XuFRFMxYch47wTpnoHqxBYe96fy",
  "key47": "dUAakasETw6jLpi6HsgfSbEkMh5YDNn7ZKSYyXv5GWfXgTdEEZx1EmNgaCYDF9Aj25ztngucmyv4uceUpmioB6p",
  "key48": "3FCJfimBv7qnaVsgDzKuP61FajtjFZnxTg56riXb5iyixznVuzHZJh7hJc4EgNEBPTfWFhpGC5fkkpy4wGwNXQuU",
  "key49": "446R9VAM33YzmJyVmS6wNjoCLEXzDaD29JXqtgsGgpv4t8U9C45Q5tvwHUrpR7VbfhRFt71LeYrQste2dJUd5gpV"
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
