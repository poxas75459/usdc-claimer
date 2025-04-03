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
    "HRihE186BNa2wRLDFxWHqKFPavKzXCQ2SHiRmGGSfxMxCC3Z1WSP4Qy7PkJpLnCNr8g8G8pWfrmV1fvEpR1Kf5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v358cxKT687XNzVJXgjQvqttHPYchSLqVkHwNabMZnhqvWs9ftui9VHMwUKecehpV31d2tmzm2m33nUEKBdQ8tn",
  "key1": "5ye5STqubqAXTJueAnML14bpiELVBaBhBM6nQHSQSvS3yzKW8wtvbGzAeHTVCEGJ3NTuPv3Fd1uEaqgEz73aByJt",
  "key2": "uh9GGMqCdbPrG6PgNnEpsaoAyyiMH5TsQBt8wzabT7y7b24brutWXExsdGaf91L5PkhkJXnyiDCVXyEeXJJYaqp",
  "key3": "KN1LFDe4tjYnDhB4eQxztcwHh6NzYiUu66Z2T9zWZqAEXFxSc7opCDBT9aex46dSBjGf973mmVhLMAY8JKBk5CV",
  "key4": "USd5L8CwXWrMK8JN551ES1REgKWJXsxBSR6E5cX1nJg596WdkyrwP1fkhncrMwrqYGFwMQ5RWTDqmmLWpskfnjD",
  "key5": "2RKSw26XqVjC4eG1vUeJPrPhkP8jxDQ74PByMYgWqVEEDUEJcY7iHEmF6wrF4YSzZzucytkWRBWuAy6TQQ1tfdFK",
  "key6": "5JYxSZN1WWAFsXRUMa7KAJaseZx1Vka8Chhzqc9VT51wsgyrVotXmYgHNe7upSQ11bCtWcuiqvoRaLGSYEY7aLyw",
  "key7": "qWGRVs3Qf48JKrRjptybZVSH121RjYcHz2XnSUu1WHXf39HscLbmmxG9RTtbLrUe9QyhCaueENmM1MmfJdZNS7v",
  "key8": "5RjgnaLJADuiyYfCiTsaLSgjCbp5XmanaNYpK9z5dDk2ikYcrXT5pSDK8gg3isQtD3u69ZmyqkgDSJwYwZrtAEgq",
  "key9": "5Z25q2ARgPA1UkiKSLz9jX4iZZX5qUTUBP3967rvBAuosqSnL2fb3Pmf7tuAoGRdBRmT6QcLxMMzWLFtJwtMg45a",
  "key10": "3TsqN339hcE1s5KcUemmKaFpDKHZaa3a2t4pKGayWyLd6PbpPUWr83MaAkUdCRvRRScGkfLZQxEqLKAT5CD5sYsE",
  "key11": "8eyCroj5RVDE44ixyhcZiebMbq9UudXvXSkAZ1JduKBN3QVQrocRmT27vfLg7N6YWk73ybUYpip74VCi565yY8A",
  "key12": "2zkku5M8RmSzuCVxLxXJRzdMDKfAuM5ZgVwB14xEusjdAZYmL7CmbvAWbFjYVXQytpvY5jmmTrw4VuirH4kvMf47",
  "key13": "4QTCJudzbibLHAoAeneFVm57aumMm9tm1kZCKGoLGDXwUrujv3ckH89dpkqEp5yp9J7piANkrJJkcWhqyPHAgrnM",
  "key14": "3nmkTMt5METbGoAHyZWyXRbYM2zTXjuu1zoQY4canNBakvtMgtUhuhB6b614kGQ9fY3i6aT1GCvNtEYLGacok8fK",
  "key15": "EtPxCtGi1keNZiR9bijkRxF4kQTihsgx77LxTD1gpe2PeMwoACs83bw3hnmHAcEUuVHSzScwMfDAPYNvsqDyk1V",
  "key16": "2LgvZq3FY9UbVeR4jGCKv4GnYadK3yKfb2QcRFpnxdRGxJNMsvYRK54tiuKFzn9t2ZYQgr51CAa9t5T17cHfhHBg",
  "key17": "56XZvpvVbs5Wye6D7KWWRAtvDeX6zhXqvDQn8AQj3pvYeJEQ8fRU4MBCSn1D2c7Af6hPsANyNSMiYSc5HzardC1d",
  "key18": "5wU768SxZQBnMBAuFzZ8Ge7Dwsa7CKn4VD3YPyuhNK8DncnhhUe1GU3DMnYKMYfNXV1MDXbx1EtvH5dq9kACtJL2",
  "key19": "4gyvzbm9WUMWMUgUNznuRra3TJenLiYqQHU9pQE4WonC8fu4hA5qVtucDuPGL5tcyinbMxdihbQvzf4JnM99H4Wf",
  "key20": "5vKcy7mk5dmzSk4UvjxyTN5yAyWLShP11EZS1UH8mZJnwHm2GTgJUh6rpQQB19Vitnnfmf6esrwfPZBgapfcrvvQ",
  "key21": "47gnJCfZWvB9tWBjDxfVhjgmoZGy3NaT27B3eGv4c7RwH99X764ePSgt5ZZVvTokXgzyG8W2QgYDU39KEUYki4CE",
  "key22": "5wkxYHLPVZMbriw7JfrfJLZ8H65rYGNwkMcSsmUWbfbDBvaJBFiCBvGEq8zWN7GHndy4m63rWHeathRjmAbS1399",
  "key23": "2uZAeyp7jT3Enj52cTF3Kj7hBt33hhStsX9tnhcm2TTyZy7bC5Tr5j6dhJRedtQekd4WAwL3cKjarH9DoGrMSfyx",
  "key24": "3FzJrUvg1zXYcZVyynTPuFniCL9gqmcejBrupQiKQaGSj3eWzRpFuFS4Zhtdx8L9KACf5DLruXZuX2xRpToBkui7",
  "key25": "2wVMqvumkmiSBrfZtnANtRiyz9QdhFVMsrrnhR8SJmhbPfXKsYMXYS9e5bkMWcLB9Xtxn9tfXLcRV2oqLojHiXgP",
  "key26": "2DFZLFWpYfG8S4egB7EGh8mTcBJuZVm2BMXeNXH9iLsHCJ8vwrRa3vmQSgNsZmiYxk5ZztEMbT59iCTrpkpvH5sf",
  "key27": "4kdAArt8y3ujaatF8vykxJJmHZcmqcLTehLTJnzvoWjCvDixp7cjmHiydiWUbxcvruHwiRgxtK3pvvd4EugGMkaz",
  "key28": "2Wxbe2uVV6p5BeuZrFZXRTdTz3u9nZYxsmKwbbgwkUT8UcUdQouvdmmikGKWoXzPUnafUdaiEc3r8rZmHGMTjP1D",
  "key29": "NQ8Jfv869mZbqxs6jrL5pKdvSDnudbk4cpeLNsxMN5WevBBcH59S8ZUCAjvgzSSbSaeBqmcqstSoLkGxCPvaV3j",
  "key30": "3tyDXRJ95z7kbxFdfxQhjs7qpGmwA24sREaZg9LdbcWNUhy82eGz5T5wsE2YRZ6DTLW6EbWQtJUF5s8JQMVRae2C",
  "key31": "2mH5TQcJXWM9iKEmCFJ2HoiwkYLLsCcd9kq51rDkq8tMTSMMGGrariTeuEf5nMLXGxLmcvYEBzPs3QpMWUwe2ukS",
  "key32": "kVPH3uZ8b676WfCocbH7wJMwnmShd7ggkofzXPhXrLFJAGX4KT1npA55W9FCvCVwxCgPW9PgYeCxwQaGN1YZju6",
  "key33": "4nD16W6Gm1h6sCkumyatG3Du8mDe7beZ4SH6xtbjo6NgMmQa8GTBK5XVUvb2h3SrZd5PXvMNW3NzW9vcRUZCRY1U",
  "key34": "3gB549vheL7BPC7S64mGEE7Mxs8zjbeBTvkxGpCPzSRFkmrhEm7n6Z7dGtZ4UHJMeBVsViGNavx276C7ofQx2QNj",
  "key35": "mVBXFacHLa13VFJh6uwBPZw4KUwtWzjyZV6b429AFbr9LraW9waunLaB5KUmLM9C6nzRZ8zU4RawnLzCpbJwJ5s",
  "key36": "4zz65j9AoGTgNnTaWZoqU3D4Qq9E1VJJbMtn1hG1RT7kqBzzmZEmocU1NYKDfFvwJE4EFdVBWddtDGqJEBdQhnKx",
  "key37": "4pT9YQPAaC3NWJeidkfwtk6GUqQbF8Jt1AGvpZbMWwHZAGnj8iA5CKvctY6Bnc9yoLLLJPWr8BzFxzkGESTSRxoa",
  "key38": "3RQSKg6sX4311Q6j9zhwwT6Y75bDNcUjzQ4b2U9epFG5k6k7qa8mc5zrGWxdkunoDuz4YRoe84LZ3ax4pjfCF1dt",
  "key39": "63cXGQgsRfrB9kXJZ7if7ZWGciE9cktA1vnpD7Jf26ZE6nLrtbxAwNR7EuFQkJnKGmKpams8G2HWyvWtExixpgJH",
  "key40": "3z5aYDYRvJHucg1UEuE8ryPEKEdQ5gKZZ1EJspYxKA99s9TK4uGT8j9XSE8vC9gEjRYBNfe6NkHysvtuuRKMo9cz",
  "key41": "WLafvMtLxxGxAnPen7eoBeZ3Jm8FpjrvXRJrbh6FT32bGnEa12vQi79AmuSpunK2MJ6cCr7WgpsFw4pFW9WkuC9",
  "key42": "2YCDWBYocmddQDtp3bvXctQbitEkWqPqhynskWtMmMF98t6PnmiwTA6nXyX3NWVfEcZQCmJf2wMNotHBaqYPQovs",
  "key43": "6A3tbuQ8AZZfKHyrMTen7eDaXHx9i8Z7rP7ujyrZZpgQQovdjxNn868L7GoyMXSbjtMXf9EV9t6S7fzxeRy61xP",
  "key44": "2tSrpfnGRjamrQBJVztJGez6StjPNKHp74DJEaqPVyT2cswPuBfGiZyHgayHTwmZbnrViZNiAu2z1GEjDxHbNUFz",
  "key45": "2ReGwtesaRyBQxHPFiaVs2ZpDJbrdUXyZ8pyDA6uAea4CH7op5CDP7wD43tRmwNac2Bc1kh1oibwtDyZtBEon8dA",
  "key46": "64p4TmmHJEGb6fa9tNkSPJaBnEv6fCvT2FioEa9xzU3tqz4xx3vjcNbpeDWGRiA2nNBiZtan8UPrU78qRFdVkX5a"
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
