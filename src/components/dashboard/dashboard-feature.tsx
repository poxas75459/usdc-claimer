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
    "2CLAH3Es7LXBBv96D8QWGjVSZdNpKkYBsihDmqPzRFQVnT2KAkBEEMDXMFsbw9oNgmjtZYErMu19todobmzZ4ziZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28MXYpq1fCxZkoj6K45fAr9xtLU3euy8VfnTMgPKTpag3y6mZny3BnQ9P1tbzJ8yj4JFiCEZRpXXtNATNJSFBFkz",
  "key1": "4B84SQnshwyqRGZLgbxpsQrZzZvM5BsRNSVCg31ehrsm11PQ2Pc18QpMA77PDa3oAYo8qqfLrJGax4eHUXACizDG",
  "key2": "3cV7pH6duwd4uHgnAbgkGCidG6ookakszB9J8NCBZDksiZPgMmYpB4ofuZ9nhxsRUMqgKsAEuGzzRFtrYaxkvG3K",
  "key3": "56R2BtLPeqYZa9fgBaCJ9kTxUk3RFW85YXkZVbzf2tdyispu5mHp8cgmYKQN9rzcFQusJjUuPPQHQM6uRrHZWt55",
  "key4": "4W6JxiD8DUq4DZ4Zctbj4JUVDMkkF9kFAy3TpDpWHH2h6R4GZRHA6dwpgeggmKCbRYcsZPDKQzjLEuNm1vtcaAg6",
  "key5": "28JvNMrS4xMhACwugmYaX8t9PYGmx2KbeXbj9ayvZQFot4xqx39oTx2ysVkNNyTcfCK5fBQw9eXAARivrkYjUoDq",
  "key6": "3LzdkN4nc82n7FwSXETBn3Bf8AYusVwZ4HkNQGk6nhWCjwSBJd735pnAEczjYBa9Xvf7vZ6qbVdng5DKqLy43K6Q",
  "key7": "MPZcpUK48vveDofX4kJysA36ojtPQPrJNDAutNdq4wvjihMRyy4aGgPRQQhytxNw6Q18ivAWF6T9UNoWGbXUYqa",
  "key8": "5nK7FkMjqdYKhNer9Cj1unrhDcTR15LiLcg5RP7LiyiHYftriNzKNjF7pdFqQjS8cLfzvY7sDVBqSrCXzCRLsiDr",
  "key9": "3vfhryrCGbbe9dgyJcKie7dvd8SevSVng24C3EpGvkBPD2qwzrbqC7Xn7a4jdQXm1jgC72EugSspcioJbpAYAEMB",
  "key10": "2GRQTTKmodFe9asAwv4NduPwKUUL6NhRNbmwn146SqhSM8PgY9LeV8hC6u6S1xEn4i1v7CTa3xQgfvGCLmQ7Hvk5",
  "key11": "43XN8DGMpHpmFrpvxmDn3wN5iwPpHEtAUDyGkBXGUohinDbjqaDwPxxHB39WgUq5mPA3Frop5ZuTzucP3yzXvQwX",
  "key12": "41KswVGwg9vh5j9Stw31oPz5A2VcpbdW1B1jALX3qf1Hn1B3Kf5sVNSdD3TYLgmdfgiDE3F6c5KBUh4R8jCKCMmg",
  "key13": "5X7kocghMjRjXhhuguEcwSJ5FLAJNEQCE5VFGxc7oKtQuwox3v97TXHhRuUaeC4X9KARd9r5bat1ZM9Lz8GcUfCz",
  "key14": "34RUgMgTbTMhxhBDV5JEv6GEuziuG9FbWR2GSDbJob5rdP1giCeP9zn4W3VTs2NaqsdFRtaEu4dio1TqbWetAkwU",
  "key15": "4SKw4RiNZEXFyb7UqgcEobxXHv7hrjPiTXQwudUPNHCErvciha2LMY3ee2AUgQeN168vKHJmYMQj8Q7GT1sguTb8",
  "key16": "43aSETReJLdRR1v8TpVgFxo4rAwhZxy7PJ5xhxtNzXZE917otF8A1JzsjVsipy3NRWiEu7WNYRGF7htTTFaaZza1",
  "key17": "4fVzKRVfpi5ioj8Ux47qg1pqQK1XncKUrVg98MU6j4HQKmJYLfjaFKwqMuCqRHC6Um1mCs1tjDUjh7A5E9mtMsMg",
  "key18": "YMHse6rhuzGEzU7WbQH35yH77xE5hi8qZJSsckEpserHXaffUg98wjh8SiLrqhhQB69CDGcV3Arxh1vAE8yDVnR",
  "key19": "4GSjsrGLT8T6Vzs1T7p2uBfusYzDuGkMD3X85yLyqwJ3ehTKAvfpv3vWFC8dcryLaJy3iVBbFCWVAGadvuZuRgFn",
  "key20": "4M2WqVq8eCujEAyC1mzASj4QzuDtTZvwXDDMbk7xVBvvxAca31rjUJwiic1E46R4GYM4mkzcqN3EkWfiw5CgQ65i",
  "key21": "3dPcvmbt8EZ3nMoM7vfaJeFMT11sp3sLphU9x1MBSLW7JJ9Lgr2e8MGenjjA9uR6odvSNqntpXgjnXCMTtRZeEcE",
  "key22": "5NWuDSiiZy57LjHxcHaGyzTYmX76QBdsJh4GQ7FfD7rurVTN1oku8KncAqqGj4bJDXbKQpf4DVq2r2MnmSLvvkQU",
  "key23": "2rVFVpdWu3FNRxdka3rDbC2v54gSHACRcDtVAMYbVHuD1nKWSUBMzfjnPSjASdC3U3xtYfvsyuTjFGfGfCwLSuub",
  "key24": "2HUghNefYisSvd6N1RM2KZmt7v86STazWJrNs7qSXXz1aw3ym9utaw8niCRpE5UkmQChUSdK71oeXjhgSGUJjN1j",
  "key25": "3a2aKV61sLyJ6tCDbg2U8VxG7uxQwowd9d5sHC4i1T7qdDQYXkMQ6Yz2FApGKBHs6b2qaqVJtMP6bGn6HMQBqqJY",
  "key26": "4ZrSLgBYzKFEkQo19U54veAAKQCLcBCqNeac2Afab4U8rs9vQPctGGCSs6j5R2FCsN79E8tMNuJRYNwgc6pd2SLx",
  "key27": "84M7zuq2c4nUek2iW8PXcvDmgh3kuP3LcfAbq9q3Rdd2VetG2bCp4FTkdDEZ7MoebAer1JS9WCWpwzRFRRCZtEL",
  "key28": "5UaRzF5vSNdWxTLYYAMsKAyegtftz4i2EbUv5mt2xfr5AWp8h1B4ZBeDJzX1C4nTeRbLGEJBe3HcNp9NYWvJx6pe",
  "key29": "22QcxsrBEdLv4kyCC8p5499iX9Cnomn8tRvpXSCNPowjaruPSSZGKSYqPHLGEctbGfaag2tvPBhXQerBUwAQ1Ase",
  "key30": "5HG1wmYyCyLFB2LkFXkKVhioeHkejgYJQcxMFcnTjyBpmqWayZxKqpAsHZmMDWnUQLbCDaakpXsKUEixSD4nM2ax",
  "key31": "3r3oWgxPGicLmdcoWQKR6KmLn2VtskSxTqDadGULmqVdV6jxgVfK5KmbVunLRU4gHWYjZLjLLFnW4Bgvue5B4KDL",
  "key32": "43SFy7WPpmeVqUV5GtkRGcKVgcY1tYTHihrDzvSBTmehHGvNCYJymbvdn6mRsRcGXDtzg6aS2r2RJ5hs1JtMkGys",
  "key33": "2b4vfoQAhwg46NKFt8y9c7zDq2keX7Ang3kyzAQa5RpWgE5bAF3qU1XpJFaXuf3KGzwxKGVB9FziyY2UfJKiv1ru",
  "key34": "3zNY3GnJMp4F9vNpvsLfr7QRAF2MEuDWJPwG1kEqTJQsxN9g1raRrV3ZcH3CwPfRbjwq2oJzZviXMWVtEoLwDpo2",
  "key35": "oVuzRpnNC6phT3VFP5TvfDhvBiBWHshWZRYuUZ8GQAhEmUFHvUmcDyzHRUmkvMhqQmqm6gkU9FwmfTVLsKpixZK",
  "key36": "2sSjC45QHWYPfHw8gD9kHz7usdnHGxLMe7c7Me1VAsVacCNtR5KGCrCYYynxE1SC9V1FoQDC95JB2Q7S1kDNR8YH",
  "key37": "5Up6ShQ5NmQxcnQL7fqLdJ2JPU2qbNXKsQvtB6FkYcNAgjVo8Rnsv6AiCWqN4y1e3xXqXT6pexcH7yDVjLphyMCT"
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
