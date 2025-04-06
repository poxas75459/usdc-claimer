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
    "2kWJ5vSKDsJyXUkC9Hmd3m5v2RTtGq9cPEKFPiQvBRiusushGAP9JYVkLD8yH6VhbNeneToZikmS48BS4yRCxmcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rk8eznXbWwKKZaG9qSw2x7D8iQZ95K9MyDJRTc1Sygk7izwRum73TXxpQ7XMYDRwXt35xyPdTQ7ud4hUTzA3dmo",
  "key1": "5QECr5G4j5PD38wsifw7GXEyGsosk9tRTouC4YGrBQBkXR1UQhdpfwC1b8skPaELejzbFq3iazaX8Ge7RibgHA24",
  "key2": "63J1ubhmYZcsoSzuEkLG6Pjic9Mt7AuC1VwJKbcpX2k3DxwPzoe6rsyziFaiELZqzUTCDvH8PtSLJqNr2GdJZVDk",
  "key3": "4KrACKjud984E6e7AjC2zxCtUwc1JqeBYxbfPgHufABHXZkuACEEJXnuFTVyMgBwCRraREDBVsQrVEpYxNvijq72",
  "key4": "4JrV13p6kGJ4tRyi4P8azrUeux4EHj8dMngUoqgrb2SKKE3kq5sHRqDzB1YxLMGwEQFSDLuycmA3g9SjzKDkq8Wv",
  "key5": "4DPzWdJvMCqdz8XzuTTct9Y4Loc7a3ZnP7rz7pR4YpKGuxWomdKx1Kxnj1ZjdbcE7uQhjznoN3YDEaNWmSDmraDM",
  "key6": "4mn6uwuwCLJjFH3z9hEi14uT7vajNAP91Aj9csA6Be2bMeoADcMAYNuwmWP5LpV5kZ24QgFfxYM7TSgiZ1naRkMN",
  "key7": "sbY5HvV9pRT3jyuCvna3GeBf8y66cVBfQznRfKfLTNgRi9fKG2vXTi85SiUDbjpw9ZUcvRDaNXQVbjuX96hbKwt",
  "key8": "c3DKoJU8zzr5q2AUTRxGNeh92wFRGwEorDE8PnTf6kNf7cSAyYtcfW7vBAxL5qBurqk8LHz5GSGBpA8bhf2iyaJ",
  "key9": "4fwKyaUVQKbcH9psL43YMqAFUv7Q7DoBZH7WNfTL9U99dptKLBbHk5oNUTryttAMTuQxC1kMf3rNSao71gCogg54",
  "key10": "2AAEcyp4AMfgKqJSnW8FC1uCmhJE9nmGnkbPajNiWM4VzDR66PpBJ61LEg8Cs9ajcVzTRiA2Vy1ykxHpUXtMTCN2",
  "key11": "45tDPD2GV8gizEpcjwbpWeJKL9seURJSpWigqn6Gv46g9LuhtRsULNJmFh6MaSwZWJ6bU7ZJ7sWPT3AGeCUZkkju",
  "key12": "4iMHgr7kAFDh8twqq1RzrcgwhBScxB2paGrAm2WmHZ3pARaJnzDoXvvHNU9zVp7HvL7bjGT7zGtcJJ8C6NNYyevh",
  "key13": "3suycsDfQVnXEFrRxcYPfDv4nbecMMQPyx66n6dAbkWjbhvuWm1BmRiEnmfCibjWdB3nGq9sc3f6aVScRnRFbSqR",
  "key14": "TqemrpP3WuHDixNGYsKRxRpCWAcxvt8vXDjLPe5E2xJWejuFcNj8enUJCY7hBogUJu3U9p13wiASnZkaXsKXqEP",
  "key15": "5UqT8MuBAkxbKSjJHPMKAYEnhvckS2BVbRYLgtsDUC9ANgUoKdXaJnQQCFZvCaadFKqX6T3cG6dd32NNoE7Sw1wf",
  "key16": "5pScPUQepGpoBhZRLaHTLaCvxYsDe5qRZQqxNvca5YkxnW7hqXp9ofPYuKAgdX5jsZfBfPyPpchCg5AWYS6sfcjY",
  "key17": "4pAGvsvYgLKa6m2nmhoPSnoGzCiWLjd8G6UzikkZqBPiYeTFwZyPVV8UXfQ9Zy9WS1z8YjpEForrW2bh3geCTaUj",
  "key18": "59mYEvC5PgTpQbsYm6et9yzDvtYF4hCuS2Hp1wfaXCZs4HkaakgM55skpmLZu6tbsjGpcnP8bFBxkAMdvx4LME9s",
  "key19": "4pEFL3jCbYVVVsaSMZtQadsQdFcBWe4b1712vMWzPYgnZS3BxYCE3eTdoG6ZoXDE3Hb89wbQKGc52B734sfqfH36",
  "key20": "QUicxSsiWhN5ssYzSoWWFe6g76Pqox7Y3YuBxWTjytkBBZvrqiszH1WrnirEvtHAU2wyhUwi4frshpuEkM4rVDL",
  "key21": "66CveB9vRuiuFysyiwgpVButuFX5oivUKNHgENgHDAWNUNJgXpVcQgxn4L4vA7h9rWhHJVL8pHzNt3jZ43ansrAw",
  "key22": "5GsaYXy9FzYJJNFvPTNDE1WzBAW59hQK31Qpw2cg3Gz5FMJXxzDGSz6WUGevHfnk2skg4SZWkfuMkH4of9DuC6QB",
  "key23": "4SAJGjp8EoJMqRNsUm2vhsnfrgDuTfDXeKp4kaDKhTk334LSJJf3Jfp7C4A8jWRVXFqxqhPiJFWcu7KSeXyc2HoB",
  "key24": "49ijEXaXJTFpj2xcuGdzBbTyaE9riy4GfhFLZYv8j92bQEGBuygDVVRvHaUi6UK94HNWhjgTYqnZJPEHnoYqLLYE",
  "key25": "54xTocm229LM6nqoSxQNXxrPmSvo8FPCnvumJP4wPedNYs6U2QCw8VJkeFLT22EuNznq3QTC2mNY4XhNmqfE3y26",
  "key26": "ze4CMguN17B8LNeuZfUSvMsWJH56nrx8fkL88kRrMctBY7k46guJY8PnhHF5NtSTWLy5smvsqg8idy4agLaJfDQ",
  "key27": "4ZdpG55yAQrdLebAtGvWDZu4UQP4LXa3QsXxeCgLdMg3Jdur7fvUq2gPb62CdjtQXdsGDMrJR1sbEq1tQr9yHgMf",
  "key28": "igo9GFhivgEXWngPY2p5sxQ25p7gZinrFpyUsn4pobQhUNEtwou54QpeFp3VcFKNh4ZEppenNopEdBDkoRxYnzN",
  "key29": "64Y1wsnxmhquADJu4gzJhrwJPr83S2XnG9CJZp6gmyJaCm29VMKSuGHjxJCbZe4yCzZLtiLTjmCbHYh9mhcSoFe8",
  "key30": "5tPuHaDWCvUVpALfyxVyzGz4Ptb5kfno1CB1DUe6mfwvDHRreswJ3626tSyCs4wreKR7TKnCS7utVwQ3vS658fM1",
  "key31": "3WUAeGSh9X4U3XPBW9E2FqvcJFkV8YuSqfqdoRG3r3C6MYXxJawbL44nAdRsa473Rdbo76uxBoQXd5WjwgV6bUZ7",
  "key32": "3Vkq9Hd7e2WRRT457B2xKBuwkJCCAFvZup8ACZTNyTYfG95vQte5zMnHUWydAvqZGv9ncjGVCEMjx5snhC4JZgFb",
  "key33": "5D48BUgoVL11PXT92W6ohZWanCJAEeDUi1LDUK7jTKH4HMCMbXiVPsAZds2cfrYeN5cnx2br34FEBy1QzkuvWHvp",
  "key34": "3EahddE2cHYC77fknWNBckKJ6QCn19Jn6ZgdDAHZvJSDkHeG3cSNXT5FdaJTZKw2R1idPK9d8JEauKkfnqe6mJqE",
  "key35": "5aE8p4cERikhPHYejAYMV9eWngVzSkPrnyJwqVW64JLSVbPi5kmcghytv5LtX9p3fFaeGXCBgJGy34cvA9EkqSML",
  "key36": "4cm6VadS9tdRFuGQpxywtgUYbtppSbyUHsLHBdqxaUcQ5UkzStdqVe1QQu1sGKqg8BiEAktUTFfCYW9AZKmtLvAi",
  "key37": "5DuWbT1PcESjhm26goqfVDyNYZGFgY4fkHuAeuE5feGr7iHFWQxdpSbrZyW5tK85ALzEmc4wPU9fem5idjCU1XJc",
  "key38": "Y1iPQixKxvAeg5wFYr6ZY9nihFJepbj6HucbvrPbZzDHVEB8hG5tNDLR3txoEFD4xWVfrcSpkniex2MqRiM5JCf",
  "key39": "LpaetPxM9iY4BfQcWe4SjARzbRSf9tdw3LW1ycxX1E4x1Fhc6Kt9XHcqABaih3qQW7dQJ7RQPD4oo1t5VkU5fL9",
  "key40": "2HJSfF5uxuJb3VfepctDPdqwRWEpvCesZ61ACG68q4kUU3UMf8Hd7WUKbzmxhcL8Mm1TU3s3MjxRpr8oJKaCpH55",
  "key41": "5NESq4hPBRENqDRFfwPFGpVgpSU7BpaMFvwZyYyxxrpzLZR81Trnhmo27T9WA5tmUWBafas645fDeHDanubYH99a",
  "key42": "2DyvQHou6mRiKjoHT3srk5T6Y84pZNFKFriXbcRD1X7x8nE5cSLHy4cEshEhKUd8bT3Vf4Vkk1gUChvTFFSc16vn",
  "key43": "5zyZ4e9NV9ZUJFCDAwv9oiMEv1zsWcV5ywNH2Hh2SbdDARAt8PDxVodNY9nZaHsevjaoyu7GBcLM5WWZDz8Ar7zk",
  "key44": "552MANiw376kJzwYP3hsoyRvQwbJQw94cunoJCXzTuqYiwGkzDPqJpdbsHf9BHfkzJ57bB8bU917USDCqfkVY3UU",
  "key45": "35e3maZazyWuSo8hcpDLWwQKPywrZAkqevDpbaiFyeMCmwCmtGvFpwuiFmWWuWnGrv6SyAJKMENYQM3ZS1ThnoTc",
  "key46": "3iPiSLNTzc1WodunC75HAPNRoTgmKSygq29mGKe3fUjUX4WgQ7uSGh9wC1igcnBM6agSV8po8KpfwcsLZCzUTBfn",
  "key47": "2AK9DmSK9Xos7nghh2VAbWqjUdWbELJDtvyscaUUifDNYNsLt1Cduqkt1APtYD1tmAUnJTKYDxb7KrZMyMW1kxYD"
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
