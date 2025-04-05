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
    "3iHMTf3djE3P6FPMTzSZo89jjQnidUPZKeqnHJaRKUFoHsu89CQFjTu5vP2NQLkfaGpUPys1SywsYgjkf5WM759N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Upc8XUcckrKLKLF6ZLhZwf4b5yD8ekv86enn6UsWux19GMjmKfVDExjRN5o8vdkMWtG7ewVph1tvYE5GG7t1pNp",
  "key1": "3H4Fqpz4VrBkBqY91HV9Bn8Hd7gr7RE8eNFU36St7R6pXGhuvf4GToaUzFQZeWwKW2JkHEacWZJz2CXpuUAScrhA",
  "key2": "3kt8VAqQy7PJsbhKvUWxZbdtLr5svnvjGdCrCmP9sJfDLUFJBNZpUAiuThJnLjiMVc5EAVv8i4F5xvDQRNmPt92F",
  "key3": "67TygkxUjuQ6TSYKojhbWi231R2BrNrhP3uAxupt9PbuSoqiqJSTJRkTx1mk1SP4cnc2rTkVRVkYRS6zd9zNxQSQ",
  "key4": "2sMwmfPXvMhEPDdSZLgi9VuHHqwYAhKQqbJ9DiauCxEQHW3jwvABK1oo2ctvNzAm6FiTSWd6f2eWesk2tAdzdS3E",
  "key5": "5y1wrvZ5A9rzA1XfUMpA8kgsh3SwwTTh9UEbLK25g8183xtedXcoLQdLUVjj7CedtFMVcjxUZ7uorrcCZj41aBQ7",
  "key6": "5mDCLzPp11LM3hjg7htPaWniyyFf2ExNf96WoKLPFobWaPRPRjDCrfWsTdJGV3h3A9kABn5avCHyRPT85xq7Lwku",
  "key7": "2JE6HGGUheibbz7Agd9scqeXmNsywbbaM9gTHH7K4NfeqpoG95uSAsMTvg3Z3o4TDPY8MrbcUGF5Lpn2C6RGq1P1",
  "key8": "251gPvsXgZE2mrFnGjegi27kHz8MEBzkagsjExsVxkzJdi9FKYVgGb6G9FfjW2P9Ykfzu2SBVypH16SG5iqrz4ND",
  "key9": "3Fug17LuYU5KEboSfRVRFmLzND3G3NqaBqTfiRn73uR9KKwASMG4RkfQFn58WBT4enFxF4VwhJN1QwzaBc5yfMKo",
  "key10": "5B7VqjJMPsjAjUydkHQZghUCooeM3XFdJzP6vzP8Cn2AMaspzxjSGkDuPueTodQprrqhtoUBTScVhNeCms4NyJxR",
  "key11": "66mCCyZB1Pk9fyvBmv669t8U32iuoh8gD7ygBtX5aQvBC5tGKPR1LZiCSjwE3ceUa2VZegqVZjFm98fMGGHeVmGU",
  "key12": "LmZzqphEowRnGMb9HX8Gbs51fsR1Gm9HCBazo1rkaR5EPKFavZU3FMiGj5bnHuxT7ZU7WvmkpodnNR27o5ZxxzD",
  "key13": "4vBdqxKDE2hxnUrA6bV7aEyWi4NTxPJvqCtfDVa5uQhC3XoExg7SuXYJFnxdK8w4uHrZnssjAYoNHH6CdzLjELFN",
  "key14": "3qFfc2XgmxfzSQtdXsxboqv3cFQNpGcSgx74wyt3wAC6Md3TTzWDQUgiosCCcem96WTzfrj7aUTPg5oohmV3cnPq",
  "key15": "2P71woBzfMM6vCrkX7PXcy7qxaAYc8bnXKivsFteq7SM287FzaSTd2D1SiGYoa2gkTRRTrxrGNW1rrESWiy5tPaE",
  "key16": "38JbJS4fo4zLrq8jvZDwUPNNPmZFvMeTx2dzs6zskvgN5YxiL8a681iu6BArnvNT7Q5LxwZrtdYxfLEzqNdrHFwx",
  "key17": "4iV5jWRm2p3qLDQzV8snpRndKN9QiZzTXQEusoP3XNeKMgWtb6Y7iPxYkPJXJob9Q8oexYxEBY2EQ4sVF66PC666",
  "key18": "4s4cTbJRGwFjC2Z9UD6yaZCe9mJh4XRBS6T5pq5jYuqRwdYHCrmLzERAUVp7Y7z9on1291vSbvoasXDmgWaECd8q",
  "key19": "iDktFdybRhYSFFUUfgcC5RRbzTsDAt49wPw6SEc9wA5Y2TQaaYH8BUukbtcFggKPJNtjkph4V345hDfaNa7QdAb",
  "key20": "5S1imTpkMEJ1H6tq7kQKQ58dabPjwEfrjFya96LxHUfnVwFrdD9Zzvf49EgnU8GxU6WoSsG215fGGgawRvgqKzNp",
  "key21": "S31fBkSng4JWfc7Jo7QMmZM9VppWqzwEFEAcETyPV5wRuxjPknS3ZAKHooRmE7RMAeFoBF4uTDURdpy9ve6bfSw",
  "key22": "5LZArqGaWQsG8FPQ8P3kH7nmuDyyvYaMSezGQLEMJWBkQn9VfaFSFnJ2sd94RPXgcJgQe2oDu77b16Yrdidw83kb",
  "key23": "4dUYyJXdRPn49cxH45omjRknGx9U6CEckBHZJkUkQ9cEWdo1dzoXURmTosPyb3ud2AfXoBc5VxeeDxCAGy2zqiD6",
  "key24": "2ZwTe6yKJbx7BKQXi9EJxbikzUi4DzuiYbXBe1b4CHZBhVhtu9ZCD4E1KC6a3QUj7L7VDhEMhJbSjPUptupAwNhP",
  "key25": "3EDsNGw97X66wUexmvk122i4NffH7xWGSzrRSXNvQTYSSuKqsRAwtQGe31p8Pb6PSCf488BMVz6SW74W8t9ZvPHZ",
  "key26": "3U6VKyrAWt1jRhF85uzcbwYUs4tBe4wAr3Wd6tzYb9dVAMARFAqKDZFJN7zUz7w4nNQ9scKtC3yBe7TkTMPjNkmy",
  "key27": "2BpPByuss9ZTvGTfKUYWj11ecDaATetV4RGsJee2Hr2Z69zbAq2XNgh9R8vanCiyvJhZ9pnCyYvtUTihXaxio5JL",
  "key28": "58aCNMjn3yivU1fKP6uZAoec9tHZWY4zUGcVMVenktXvrcrC8MmBtF5omjxNg5Uk6XMkG365EYyorowdGcM751UQ",
  "key29": "2BgGQDHnuEyFrA1t1JSRsnoHKZRvuCWFjZC8MEq2nGkwPHVXUUsm3Z3y12o26bozL884gjQMtPTU83X8uLzjhhHY",
  "key30": "a3rqYB51FDttco4cQHySMtR5GmzME7PvNKZzrBuS7JiVtC9jjJLF2HV4JnmxWEzrrWgWm7EjvwesgkLKDZqAX3E",
  "key31": "5fGqqiZdXs54tMdqQWQrakh2nxVi9MSRkJR7tmdhz7odzAREy5xmv6JJqDVHxgS7LP41Ttw88RPFMXYjtCEGR2x7",
  "key32": "3BCBfe1ex5q1DqwiWv7LkphtJyai8ms9yzk1ozDtprDZEZXNUfbpjzLs5NjQCrMgrmAiMLShcsZG43cFC3hrazhY",
  "key33": "4gT6ArkGrABQmLco99RJ2Wbj2gPfGRJwKKzxUnYiQzYPKCrEc4NQMVQfSCuM3t4uaTVfSvwvNGtzM5VBCSipUia1",
  "key34": "5avD7pq9GKcdC8N7bNZgjfSkVaLiA3JUL14DsmzyVf9puhKJ8mVKq94Rft1HpLop7VwYNjABxPhNrDhwHDJTV3T2",
  "key35": "23p6iwgGVNGgZ2NGduNq1BxvHJguxJxLiYcXMuTRAaAr1ADtUxqNM3LvYGfhBjfNkS7B7AtfRfYyymtkhsr6KJJC",
  "key36": "3CDc9CtU9GsPQ2Sr7tAdJznhNcDoJhYpaubWpxexcpRobaYgWh9yRU98M1XF6zwd3f6kARb22aQvnfEUycxTRu6g",
  "key37": "4WgVvJi11prGk6zKHkni5hd9GmC9o9jrpYwHq24aFEDtzu3XVcoKYPXMz3VVQx4ZNAUKBUYaR4udNyX9qgyPd4rG",
  "key38": "3EdkfUzAZLg94Ks1hDfhn7JMaB1b4rWBsKNrsHkrjSQLhvqDHqunitMrSe9di7rJGBfwdkpK66x4iEjUXCKJtKdp",
  "key39": "3jMeZv6Mg1iX8xYUTqn8vgRY4TE33AmXfC5D2ud74by11uw2qLGRiq6yquwtcpY68nsqGTqzvMmDjDsRC2yHPptW",
  "key40": "4ZCcKPkejvAW298MbHtDcqWsHZdrA2F4cCbihxpp86RQpuAQ8nhmEM1k9Wx6n4u2eHvLKiW9s4jqsD1e63Nci9RG",
  "key41": "QWibJgQVyF33nHPfNmqv78z9uye2wWpA6xyzmbXtwjF1UwWMpcehtHjs3gsNB9cCcVgfrG9DocBKhRgK6E7K2nc",
  "key42": "5ysPqJYQ7HT3sTRiTDzJne5foSrA1SCFkGkPNy6c9LEpNHU2FBsVodrG76Pu4wduJKGak5wnvcwQorG1zJsq8WFg",
  "key43": "67X7juLcweya6Tf4rbAR9GUNb9ynXwBa3CMoBNMykKAZDSmS2hgT6S5XNTpUJzkSrs5zNkJdtRnn5qUWTENttPFC",
  "key44": "57BmuYmWAkCuX6snBBXkNYDzEfZHuiGgj1hXktHu8GwiCZtauN2kitjLWHh3XsnsTzRpLieMPUKvH2vKBgq7X5c5",
  "key45": "4jC6CzsFSXRzebaqu5rPCWP9DxSvMrrvLbQeLwFz4LwuCjyZtSaK88VMCpAXpA9fP9jd2BkA5QX7rYeDuaV3sBvF",
  "key46": "5xwSHXSp1J7wRWuJeXp5d9dnbHpaNMWsnBxvHw4XqUNoP9woeJrDeixR18jNrLPeEMhKhyDStyoiCJNbbn5BxFAn"
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
