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
    "67cRCRqFWg25sxcbX9votcexHEABqCuiERWXv7fDxpQGcURuNwEP3PxZtC8FsUtTTkmix5GTgBmr57DeHNwKFEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o7sBS6T1Vx1ZM2QAFJqNLsU9EGxCqbe9t7dsd2EW8Zjg5cyTDtgtFGQKAZtwdDNNy77bfhmbEn1SmVow2Az8V8i",
  "key1": "c9pdgwceyaovSo28auPDxABE2Ybv2QGQGDF7EfFGsqt3sZSxdNUHRdp48pzYWjwVBiNTsbuHGuZQxUYCXNtoewe",
  "key2": "5L9Xtdpfn5wzjpttX91X6X7iwCxWcs2znaXaewE5m4VBLTeVwv285D4AWcxm5WnvNE622VxXChxCW2XWoFsAvb71",
  "key3": "3KSwx8k7sPp6ctxSV6hDCrjPgxyyUuSorBNm923oMMZ8txRRJdyAbmSnnNBvSPKyKfpQDHPP6b3LMYCqAC5NNN4V",
  "key4": "2Z6d5UqquqiTfEn4QcZ1Jt2JW1cNr6e2Ugduqpz5gSyke2MqADahtugqdqqNegKkUXnuzCiz4hTAcz6MeGBC7tZQ",
  "key5": "4rK9R9mBjEzHVrd8gArvLPVhfJ3ieSvizvafEZ5TPBTL94nD15gHJidyv3Lhf9UeDx1SRx9QHJtq2rTtGSL3dsX2",
  "key6": "62LMpM8eQLdhKV9Lpkqo7vm4tmpwqgCtbKK2Yc8jKmmwuGwN7bJf8jfDTGKNkznTqUVrTCttNtumrNBQnTcKSUW5",
  "key7": "tiVgPs8eFvNWKPbFvMDcGqmmbVPguAviLvS5PZrg1Vm2zZg7NK7KZvyeWKyZhzMV7hNBjC5EDx6rou6QHhQmgiT",
  "key8": "3BtRVPfpnC3YtCuSE8dsAeKLKaKbs1oKa6cvdGvCqoLWAJcfB3Z8S5qqiCUoQ5m7ySV7ANiVRHPsZ4BEPhowiB2x",
  "key9": "2nPFfBLzeukaeQDLCjpyigetm9nq4k9xDSsWJsDWr2NivGa2sExy1ijJicZ7c9QV1mRQnfYxRXZ8uYy2Lm7c9cBF",
  "key10": "3PJrVdDTa4hZ5Zn2ywxZKcE69hbADK19bX9pam87aegmEDaQkT6fpcpGfB2mmjP67KPpnvY22ckvoEDzcEG2XU84",
  "key11": "2UB75Ker5RvN4R6jm78pAQAWPz2zLMhd7UaGdzEJF9ZAatzFxsAoZ3KV9aW7WsqfXzVf9DXJ9ExTxMLFU6HcBNEP",
  "key12": "53SL1a1EA5yiaDg5FgAxbPLjHxAGJiciYaHQ5DGnbY8juVaXusmSn4JqBPPfGtzjJrjHKwxCQ3tcLRomoVUovnXJ",
  "key13": "LgUuroJWBD9iuqcraFy8j2zxbFU6w4pyTbi7bPXRepvGAP3LJSphY2oGsfVbDZXW2VXoFLURbLJ5QhzeHtzYSne",
  "key14": "4AwvfPh5tjJZT1vTxLz9rHS9GgR3eidgLdnk6pNvGS2WvqgToxJhavGt7q9uzFHEiTfXDe1UFtQhNzxXcM9CnpK5",
  "key15": "3MWoruukBMJgC9RJJ4QZvyxHXQNTjDgorWKCH1b91wQKTY2CrSVgAfjgZMWdwCuWGSeon7H4D4dGbaL6uB8bRtai",
  "key16": "42w4CXNc7ELwHbUufuPgFZUxCcc5GjnG5NBAB8saPS8RJScYKZ7LNxE4ZzvavP3NwREr2CHgj7zxWC5tQ4FmzXQw",
  "key17": "4SMKxwwH5GyCupb69ZMorHXBk7NZUHJMDtxr5ZHT6ftCmMv3kDPRqN8puuzxTSMxZrapobzpPhuY9VyzgC3Ci2qd",
  "key18": "428yj8d64BVX8q2A9HZ7W5pKdegAXCb38ErTpwG2S6zHKrNnfsEg9vdzdpxGziegassveRo94qwb7n9pYXdyWpkt",
  "key19": "TNFuUnW4etSmgQcTu76vK7tiiNc9iXb9zrcFDkhiod2vBaNqHXquJvMjiyefySXNATt8cCgVZG8s1DNxBKpPSWp",
  "key20": "4bsRXnjwg4JbSA9HTkAYB63sw4NCBnc8uSt9Gaak9seH3ofWAfPAucFtoYw75Axf7psMa9TH8ffJALtaNXPkbndJ",
  "key21": "4ZZLGg4Ygt11oKJ6kaXxLCdW87Kd5KnPL1nyiyd3UEkF7SkvgEb8hveRznpb9neR6p68Qi6bw2wMXFYMFSf9PYtQ",
  "key22": "X6bMH1kq5221SgTQLP4Xg9bqRCD123XTkC4Z7VeWp8Awc8SnEh7pLnj6X1w1P3sUnKYAGde76DqHJe7MKD5db6S",
  "key23": "4bEMvC3mfuEomd8xcha1jKyuUuigW1LFtSjtggt5fdfKHS96KGw3Us1Zys5MhTDWmBRBMg8NSui9DC8QMJdKu8uW",
  "key24": "2xMoRkvaXNgjhD7R69gWugnvjNEcWcnib9C9HTc5yfRG3KHYEQvy12abSKZdrxpAv3XyHeMWKbt1eAzL5CUWK7CG",
  "key25": "2T1fC4aLeeFLdRfbs3ddF1bJkWV72utByp7DmNpNtMpoQgCm24iCa888rSAqjtNzGPT17CxVnkZ7eZBpgUiHz6cb",
  "key26": "4G9VLmVeFLwCckTTdMMWCdMUajBQPbv4N34hSXX7EXb423CMF7DWNnFuYHxzFcyg6jWCtKYhGv1MF9ks4bqTB56Q",
  "key27": "4xFyHeaEAu5R6DkmGxtd5Fnq5GcmeDZt7vXGrQnDeGwsrthfPP9NCtMMg82gP3CsHRNEeR1YvzYrC1wpFtS9AgNP",
  "key28": "4YYkGeWLMT2J439gHE8rgrjJf64w35ZUvUZma556AbrAgvSAgBCPE5uG2RQdYJeLzvVVPeWZZoYMfeGZpvynzLyJ",
  "key29": "2cjSrdSBBpNDpM4AQaws1hz231r4HnvaGG582oFfvPJuCyuVerBZfg4LrWeWGEsLV1a8WFb8aXqa4JgLGXvidaRo",
  "key30": "5XeJnc9am6tBmvQ8nLY95wK3Uegn51wD6w7tCeRq4xJR83ioNRzjdaseSFx1JL5a6ijz4tRHd72rvvr8L629zHTy",
  "key31": "5Fi5K6Rr1bXUECC82F6FrGmGYSMFRjfKcSa6zogDU2jSqKUaAyxhP73CHARGf67dWmQ5LQ6CkE4Re4X7CXTxYjbG",
  "key32": "3wqKpj6broMvk9QzQFp9Azk9cu9VtcqshgVT63Giv6xiRsqY5uSNHRinmhsfvxuDk6Wk1TF2FqhVJ3M4qJRVJVKM",
  "key33": "53vbWW2TFHSPzfPQvLA3aZiBEPukGyeFhThSSSq2FEfnc1xC9MyTkjXJeUiSNUyJA5gDWWnCSbGHK7sbMwEszdD2",
  "key34": "5rhYvAm7zpAWFf881vWwMGeV277MtBaLhJQ2WCduthCznyudLqgaJYJMzqmoGJ8Mzx35mkNYAsQ4awTyV1rKHozS",
  "key35": "5W7756gRmpd5KuGuyMihREMQiyWB954pee9tqggLHuqez39UoAtWjGbn1itj26eQJMGq7okRAacS6pVMK8qdKATq",
  "key36": "3ASthEjaARwt3cAdtxikLMjc7uTEVC32gqRSt2rj8J2CL9HbcDLr5Rmp75avQqtNwax1iZ5ZcGjiaqkVfGrSYVYS",
  "key37": "4Yyrdz8fshnWg1vTYPnV8nHeeVnRb445aQfahL8ifpaBYGaoMBsrhbzQAtHf5bRUkwZuePYsPcipQsdTzkzXWr2A",
  "key38": "3BZiH4oeXnD7VYtQA52zZ8jkRh5fGUheitMEVRT3pjMTT9jnFUf92tQarHxnJSpmxmKCpCB9J1XXRfXveTwKJTSJ",
  "key39": "3fNDuCSn7EMKqb4VAZECrPmjsHwtLpNXyhQL9g6aygMtBijCr4dRmYBf3yge8kCscG4D9k23NtC4ZUDNDJNdXtza",
  "key40": "2DQbvMotoXMTM69ysqUz8JzpYN4vTxLcdYY6MJywUsc3Zh5sTPXf5J6ApMLcrGsqw6khVSmxuDoDrn8Dd9kz9cff",
  "key41": "4BgoJbQHtBH9ZtkhrZWiDWBM492KM9gp4V98VAvHndccYvnDKmTTV3JJnJb1583Gpwpz3SJvC5XbVbf8APAt2wUN",
  "key42": "4MMvacVbhTgGNZBGgr6oQoixUEpiTva8LAAYoJkk229oZEjxn2GPN445LP1TkotTffpcMoM6yczEV4sFDWjkLSMT",
  "key43": "5qCS72hPsy62Cq4fQFw64bbySH1xEAn2ELFJjVtN5t2JLEEj69ZqE8W9Hryd3eFcxZntMYvZHwaDUwmTMHURAo2c",
  "key44": "3eUs6fjLbJadqBVxm1FtXsXEnwbrSaEbTRMVvQ8HTvg54QYFMUZ9f9cMf9HYknUMVNcYhDJ3huZbRM3WzcsJFUCT",
  "key45": "2DAL4tcCG3JandS8w3thLbyfw9mRz8pN88kTPosLoVVq9HYhxoFNkGoYjKNap19CzuXUjYY1GXDuCtUxpvkxvXts",
  "key46": "5Ee3qCKXEtnkBDMLtz48b7mt14VzS7VvcBhDZhthxQhy5SZBhSYu24E42ayvtxynppkcxaR33HfcSxWxHNFUfQiA",
  "key47": "4k98M6XDgwVadowGUW5334RybHfjiMDPdQWCuLYAadwTZYxJxPZ6Wp5SXYVS27Co5eGjsTMRnhNUCnQZ3ggaNmsw"
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
