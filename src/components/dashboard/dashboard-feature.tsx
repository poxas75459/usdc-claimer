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
    "MjWAujvaNJTLxQ1unGXuhSrGWLGk1HLywAiz2BGkFAuGRKHG7Dtm9Lb18TuMgrd4jtMWjTibsRXvMB9kv41VtAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dfud8PuacQH4XiGgLvmfWcbJtuD7nuTxpiyCQqWbJz7JvNFErjkYtPhbNvr9anb3gcPj7FTm9dX5SrdJTvGcQxw",
  "key1": "3iy55m9EMVvFt4Pk5wA1MS54JADcdJiLdQxBwjEHUPwtUKKPZdqfcpCrXHdSK1V8NwXXM3Ep7R7Aek5TCrB4R46s",
  "key2": "58m9GvFbLrrDyWp7HBm9wXYFgZQHGASYeQkm4ocNDWEMaAYxhswFe7P1RFiPMhzuvjcQexiUV1L9oFFqtCYKTxqK",
  "key3": "o3Eck7659bKhjGRRoyoG5zef67NPrduYwdPhgTFpz5QGyn1dsJML6mrgZbociD9uibgP5NKVcxeaVU2n89FDUcR",
  "key4": "2R2GWvahUgG25hfVv8htjikKRCgeWkf4atc895BcNP4xJiV22WjCEK9JRehq5SoR2iEcwv2fgTh9EgS9agZ4NutS",
  "key5": "4arovENjk8XHxhaVLi8zgdAQm6QKqqBzn218Wvhh3yiA5zuuzeooNDAwao26f2ngiZBHPpGWsgP6QVh6Ni9U8KiW",
  "key6": "62kQBpuFSRxfPdczMeuoSPCwavJXPUCNBvoUMursDAbASuGFnf4BXcRyKEc9fG7E563E2b5eohbpVk2542AdMoLP",
  "key7": "jvetBqpuFbkgxWonLBT5daQvGWg7c7rFiuaCYtL6rgkpBGWciVRW3JxdEmGyvEGbEQW6MSZK8BKFd7cahV1w48S",
  "key8": "4PU9TaxbPJuWyqsKbiZUErco8mKtS4Q25aFW9JsafS6Xi2gNH4WHc5HjrYbH2vR6XV8ETQ5Xw66ozk5wKdShbi7V",
  "key9": "5bZHc1QgEuLG9WaYSm81wJKNRG8n97tqQxerzxBQB6jcqTxaK8S1PJ2m8EVsuPkxsTrBPP7xyuPEU92q571C5mme",
  "key10": "49ia5z2zPZEX4tjCyts4RMraaz3D2HYQdvnY6FfyQpVEKVAyDpoC3RGzGPeTdfZJRVUY9NE7HveKN2vXpCtufVmZ",
  "key11": "2XreyuSUSp5EHwumzAuxmxH8QQEjkt74pmCQMEkziYsTPjfoj2csQBeUd3QoBRUW4V3vF8JZymEykPF8jDaR3czc",
  "key12": "2kQRsYhfBqJ5DpeCDD4GKFPab5NvQzwiAD1ts9VdB46TeUu3Mn7c5viPMqe386CWs7FGzBqNFnhQGZ9w91AZ6PNH",
  "key13": "3FeQ1zBtxUEF3pNKPCCXAU25yr4CHVvjuYzBjvBLBnkmyXQG5cgKXMFLwvE3C4St4EtozPhH1zu4e4WYVMeAi6HP",
  "key14": "3DvLmJqMwPzjghKntNqMJ1nkAebrKYbsQWt3h33HJkjs2jWBKGyoR1LrUqtZv7m4tgKw3tBJ5uUFjnwCnUCoUvZR",
  "key15": "31zqBpiBmYWS1YHxu8m2D9MHLaxGg8fPwPxMYjQGUbkZHEnxdpqU247vVU9qbBWc8xA8hmau3WLcK6C6aSsNQfEV",
  "key16": "4KQkeRfASGtyXpEBz1PF28yKPjchqcVZND5ZQH2c4tCRZV8b3pig2qSCtV56adKE8vPqPuEsEEj5T9f1XRehN252",
  "key17": "4qghNMQQ4Ng9VZfvBAvM6J7HwMqWkWc3b7ncABDHbN4oYzBA7PcJaM6sXMLb247b61dDuH8CEdBCroDiDdCx5yS3",
  "key18": "3JbYvu6pzEubTUjFB6hYMUGu7BBhhJufhzjTrmZR9qBjxifcTKdSyEF2sFbmzxLLyGubQyaR35Yz3VdFRhuwLJEy",
  "key19": "4NDyyDaL6TngZJn1uEPgEY6iqNyX6xzvia6AYt3UevGcg4LMNqTHcuifgdpQ5oVQA9bAgrJkatMZzrFds59UFjFT",
  "key20": "5kEmrLFnCFyeCqZT74pCzr9ETbUm8AyPn9CtBuEgcvegQ2KVfmnRJvUYuWerkWBvdUqevCayQtCuFi4e7igE2zKu",
  "key21": "5KsQfD6mQkiFsRvNGP1VAD6d815iqih9eJBNPztTmCzWdHPTQKzLFnVfd2xS2iBmBFkRWJvVvRZ34zjtPtZLHgHT",
  "key22": "4RZjMAph6n6jAu9T2wRd5YHXa97eP1v9x8WBtkWnGw1oTHRyrijXwmAcb9w3vUgub2HhJe9UxwRSjoAthnxJkBFj",
  "key23": "1VubuSTAC8iDMhmxHCiB8PzF2KbW1No9Yi3kbmmVqJANujz7uHgWnebFNEBqdoAb7AV4y8VNFxdvdcQdajb6THp",
  "key24": "7qne4qhjTC9bmkiBZvNb7PieMXfHhBgwMtCFXXWDugANfcF8X4uixA24i4VjYKG84dMzBTM493tqHvXyfsTyjes",
  "key25": "2gYsUeom6wpStQM5RBwaLSuikZKggh1EBDmVeGnZ1WR1N1xct7q9wUcCLs9pvumEv7bm42URcET2vEgPiX2WnDzg",
  "key26": "2iFGT1CdHrYUhL2T9pzo6iN1Z8BNzJbYGZPMUGLpHj2D5pKxivTxtdAHd3cVAVPUQJWgkHXdetPRo6K48Y8pdD42",
  "key27": "tQAVa3ppFmKXrA3x8AbmyrLweQ1gZgdqRp1qLh4WUTJ4zj2zTjjtC9BCpbv2tvBob3AqzV4j6WbRcLFRQnWCwHG",
  "key28": "366TjarfWDXFRn1P9FFgiPLXMiHu3pACSPygG4E6NG8La39D4PLGeDZTwRf4cppayE74L1M3N7dbEKrwnocwt3KQ",
  "key29": "2L21A8SxuJCq7yVuJgUBbLziEQWhTMcqKkdUyGmKEU1qr1Tx3jhW9BK7X6VWePvGXFoPcR7i4KgUF4WYGmeApBYE",
  "key30": "4JAmHnUec9nuwdmDvWC9UQHjD3czgGZ9Fx7jLDspFWHsfgGyXmGQPzqCrftRoCtksbD7LVPLmiz6hLgfoVQj235f",
  "key31": "64DBrT4kpKcgHwKqd2vo27rGqfnJbETqCreFfYJteapQJ7VTenindbA4oWzcEmGjGDXJgcys4N6Lv6N1rkJDjnFL",
  "key32": "56VDQ84PARaoYFoz6bRFCK6FHB5hDEACq7hUUU56wynUXFajcvLoUh93bVH97mm8nD8ezZfcTJDCgyJaiMW9CiZx",
  "key33": "4VNfRkLxDJZVXowJnTnQ4zmnvNtG7qPq9p4TcHEPpeztAVRdx4MLKPMM1mnmWibJs6syrbkmbtn9sAA2XgQzkFLn",
  "key34": "52VE2wrYqzCs5SL6vDyfTov23v9AnJezpERYuD7LoJ3sHWjLNJZJYcdqxMQ7dHaTkoLXa3QGV86S4cAyZAAHWDKi",
  "key35": "3eHE1euFTyvt7ZmRPC8conGb4EYdPYiiC4DEee8Aj7oLN4c9pqx7eL128EzS1TxQcn3q738ejCHCMJhouQR4KLM2",
  "key36": "3jZzQQehVovNngEtRMFZhrGsZuAwSvYpWFx2Mqvd6QqTHWFbNyrWref3doHD3N5mUaWe6eVnTMAf3Mpvf762T6r1"
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
