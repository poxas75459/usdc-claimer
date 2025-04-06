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
    "22Tx7xEx5so5hAwhtm6LpeiuGLLUndaX9sbXZTsVkfmmGWEb9q3Y47SBF8tT4X7kTxjtzaSsVrAAoUkmyqVnPrCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yN52qVd1WEbRgDSMJTsrkgwnVgMqoUVsPcoyf9HV5bUvCtHurPrJVWky7e3N5Y8fd39U2YhtNTGCkSHR1nSETyx",
  "key1": "2A2qGsYA3qxgeF18ktW1LmK4Ay5pMMgPDfDHDjvie5LdtowjqP7RLeeXn4HwJrdckYeydFiiWLaJnrfTVFH8ZbJL",
  "key2": "4dSyXe9b2xL5BTWpaNCs43nZJdjNXqkNpJTxH66XAjx8qKmErUmKM6NRTBoTQW93uxq7qaRcog2SA8THNya8XGm8",
  "key3": "25LAoRa4nGDUgHC1RQDuSSHcdWASQx3cGKRTxEfVNbr3XC4Q6QngK1JBZoKUXJz7UqmJTCQU4BpR5B5hSCu1Rn8W",
  "key4": "ozPdAmzp3fhJVjsZAkXMrexuh2EYVchojvMXPLDntpwqSc3UPUW8XLvo4Gh2Eg6swCau9MSKMpPZwqfrs9oQR6A",
  "key5": "2psyoMTMD321YeWCh6Lxpqb3UzJvgWUa9zMpsPq3ojosoPpp5ZA7Ez5YhCpnvMRGmjYN8PVMy9JkTFta3yvTb9Me",
  "key6": "5CmXPhf8he6zq7fkjtZ5iazkABJmGu9PSfUdMnBhmm18MCNbe4xcYyrF5Ss5oZNaQ63g2XVreKDwL7KS9R3EMTrd",
  "key7": "3vmpHQEGPrAEoZ9LuCkVJ7q9JBcjcnkAyKNg86jTSaor1bRTfL3c1VstDW2ErPpJC8TiE2VAip4csy4jt7CWr27h",
  "key8": "2BBWraJjVjgFd76eqJ9T2yQ7VoVBjencgWxVFNDbE4fTqsrq7s8mujkS3HLHW38CdKEs48doSiUB7ceVgBGE18Tj",
  "key9": "41Q8JtmWodyikQqeyw5AWSssBeFarPkP5kayEUgo1RXi8aZ7soJ2q3FfwACerUUJiVtjqqGAxdWm5knYx682PPTA",
  "key10": "2dcdPhTxSSRUKi6nMB8QFfxsW8jhQLsaVVpjXdeTA7kmiSNimWP8kBZ5tyehbWkedR7syxu9j6ATXjsPjqE58Lf5",
  "key11": "xCURoDCZRGi7rMv8nR67iAHHRsGqj1joJZvZ3V69tCyyL3umWvMUkiTdBDjoMag6DgFLzpURcsTytntobaVYCcJ",
  "key12": "4RZXNAhcYbVU7XoUDamyByNATQKLQNpSLmvFxg1DmS2PRxCa3KFFp44gBo9jauoz2FZYjt9GYtsv8VrYYZkMiA5i",
  "key13": "3DhwL4ADmpKspqoFAnnhDzsir1ujoemX3xcDYzbw67ZLSzApLh5TpvPYPAfrph2KC53nEUovRVGzrNh5aUFuF5uX",
  "key14": "4XsV9LoEQNCcRQLYzFd976yisMHAaUBRuEJpANKgUKWg4mqhbvBiMqwjd1WUfvtwRfy8MGTqVJBbWiNUD72NQtiT",
  "key15": "5ShWyXtbEZncPcRsbLkFFepUiGwB95yDcsAexgQCEkXEWZDNbjomESWRhbuvT5kf3yXLvEVC4ZhsjuAuRZwoUGVG",
  "key16": "eBfywEEkJA6nQ5LbTXgJJpZuQ4eqsQkDdLshwPuMSRbw2Yzi8C2Qvb7WG8DkPVk74Exa8hRTKcyx8JWGXREchGJ",
  "key17": "5C56dJU96fRPMpMnRYnptJ5hLf5JQGwXmG5jHrTuiWPxZQ8DyjpHKsmU5VLTXJBctizkqtD3MPpKSVvzKp5THQ4w",
  "key18": "53jFeyn6zpyNThBNxk5pdyUKh7gza23wtu5HEcoGZR5V9dzVLXjy8fXJ3rxdHzj2wNB6YmbayoYJCm9SSUxbpTeD",
  "key19": "2eS7AEthqFJdCqfX2ptdJ4ktewZDX6oF2wNrjgojuR8LxzHeqqyuVvz9WjwQKahucJeo2cTAoA89tHPsZSD1GLoo",
  "key20": "37fndwZe63ZfVnAhJH41WuBJYmEXPRx3DReqWyGT69MHd4DQCL4RDCkqyAqf36g4yAiMwY9gmF5cTBq81qF3ZsAf",
  "key21": "2rQp24WCHaSPJtaG2hn8PE2yqCaeXPx2adtvth2H42WTzUtfAcLAeBZvCu1JBjD3k1TFeHpuhUY4BUSCJHJ3TfvT",
  "key22": "3Gpf9zxpCHeH85eVFFQktzpjCZudwAQTJes9hRgyUJtrinF1CLysFrCMxJSsuetrSQjzxDMMPZgXrfYT6rAUbBC1",
  "key23": "59qnNZNxV5uic7qSLim4oQwUqsX3xdCJuQ7n2AtDmZHcvSoV1jgdDCmZCxisqhycY5ZHBznrrdjNLBvcwvgo3rPP",
  "key24": "21sNyRnaQwe6iPCnqRLQcGWQ1B62eE9nwtSczQ9dfkb6KnWcw1aGaomJrQi99YdS2YkBWaYVztk8Ehs4Xa8zMAxe",
  "key25": "3VaxNgSruDHFfyAAnCaTniae6q55W2qzfCLNSrBiDotEZB9RTftQ6ZZ27DbLyWMWTZvnekiDfWJC1BoQpHJueA65",
  "key26": "3TiHjyeyUEBSqa7mmr4iZuyLqSJfc3NQYBhegCnCLtnbaKQk1geyZH6kpfM3J2G9z7DqUTZeBxPS7pA3E27BsijE",
  "key27": "3zPTjKgw9Hf3qtV7s9incjEC6fmEU63i6icTsDoiAHQ26evJVTrwC5YLdD81FiAFdCN9z5TMKM4vKhFx5EBM88Wh",
  "key28": "5YZrVdJiqf3fg8kwQDNLPD8KDAY2nNRxWeDasNWnKWMycj4mUwRhR3bHJQzUsmmnq2XE3XjcK7wQRaTt6fjn6zPv",
  "key29": "2uAztsAKTgXEVoJSK5yC6fatWyikZq1nMjPyYaKcBXcoLZi8v3meT3qcqNvhfBv1qEAdBpoEVXCTzCyeeJw9NVyH",
  "key30": "2ehTA531qmFbYYH3tDPewH9swLgs9qAigfQ6RMYRUarjHiaBNb6PAnGVW7zYPQbhLT8PxzCEYaPjzkY6b1h6q1d",
  "key31": "59bt17rPm3V3v4cWy2rfQJy9PFBsTXH9iHF6dsx4W5QbZjMUcqFvdqrzDLFebst4L9VnsxjaBs19e11enpDhZ9CQ",
  "key32": "5KBYNyJT1cd1GF9L4JC1Ck6ZH2RHxjNmZf7MwJYijxHUj3gn7VYyrWtGdiaiCNyPnMhk26QT4rNB2wscWDRr9roD",
  "key33": "2ESgMWLWBy6qtdhcrAS3cLntrVm6USrHM7LXiKjhzmgkDVaVunMjdTWYpwh9ogJGuVamJcnqBJPpHM7H6AFDfzoB",
  "key34": "2iz1J3ugo4arRE3MHm3Zcfuxzc9MH6V1RDyfj8GBNeJmG1XbrKpoVpSsR34eHAUzycv2PKE6mu5zZqKbiytcCzQF",
  "key35": "4ywyGub1UJeAavTymUuibJPcewx8Nar2HC4EJpDrfgAXBsPpKMTvdUXb7wvEjXtCbzFHxsLUntAFA6xKy3ADCgs4",
  "key36": "3pPUwThN2koFDVadQWxnzfbyu3222JjL4RZz3FfuMnUK3AXLXz9wSiWC4AS85ngzCP4HDNajZuwTVuBY2Mg5W562",
  "key37": "NPMuWPDMNYRAcu87tXfXthJdBeKin1wUmTDQygmFAG7sj3LAFLa9zJFAaupv7o4MoeJS1jfntEwJUfvf3JJjLRD",
  "key38": "5kNF3Jh8E47hrK4JzJw7w1XxRCgwZeGFDMLjnuciE3W2LgNcUrFRtdwYh1esiDiAm1XAant5EUHkk9nTKDcw7iHm",
  "key39": "5Fe8oAGzV55XMC2w3izfqC1dbRqHKop9UC1utvfVoaU1fHSHnwKDqj63mdaqy1c8PjrX9SxZmaUX1xrr9U4eKWXm",
  "key40": "341eVoQ98quwvad585i13gxpbY4WT1syDDESgRrbThyF4FQezPNmrtehXZPSgzTy9wwUcG6xVbinBFFgLb3A7E6J",
  "key41": "RW2A1UvPDzwDEm5cMtTyJ9P4bn3EJ92mwFj6R4JsdCDirYUH78iswAMaJjJwNr8fFuCvyPTdyA1S7qMdSdVFTVk",
  "key42": "5kYkdBfdWpyNiPnTCQdYua7zHuNhr8xJKQdBkof8yzDTWL3HvvyHXmB1tT4Z6pnVzwuB1Gedf1BpAAoboLoBEJoq",
  "key43": "5VNX8X9pzVibaDsSsFksTqVGQiZkN4QmifLUVuehCZBZTCoxPNnZSiKqy8TCE68yRm9Lh6wgDkGMXKymJxZzfw7h",
  "key44": "5S3osA8ptMFxPDyh6MmvVK7TaWdim8y2jnunM8NRyM6B8Svvv32ff1WRrQ8X6nzKx7nsL4m5yj9AZESEg9csMBgA",
  "key45": "SVYrue6ZTAp6LXL5YWJfdroPQXmapXwFBWmBtFEQR2QF8GZJE72YpBnHirQy5eQJvyay1Z5KG9HtCZG7H6EarS9",
  "key46": "4nm8N1CUhtpQhSt6L5NmV2ZCib6b8ZR7s4J3qW5mWjosU59PyzNYFYd5fpNRm6LTH4WnBG1THbDa65amBhBMJovW",
  "key47": "2fL4tHiF8TdLQXNgoEFAEcqN9mvWNygiLErWzZzqhRUrb3i75xE14aRH1qBctbsQ71pFA9cHiSwvd67EGXrL17yY",
  "key48": "2iV1WoErNoV32jYf8ppBgCqAY6qEqEFjEFDgyrgdzeomLgoyoUdXXM3zMwRZ2KsfYGK5oBBBefCmKPQjTJzcYrhm"
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
