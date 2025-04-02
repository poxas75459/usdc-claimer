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
    "vSSPr1idtrKUmdfZRxUJwUQR8UqBGLuZJUZUZB3XPmHMQpK4gS7sSjHP721epxK9BkbVv5mgJjgDmoFRtUS4XBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDdLS4McSiDHx6DrPJyopnsrAaKkDcTr2XxhDq93cC7n4jF8JVrH5ny1jWigiuL7zxq2e8iKQT4Lf1guky7dz5R",
  "key1": "3d28F75NNVggBPU3DFbZyBUv1VSLXjC14Sc4vHBVKPBPyTh96W3VZNKQoWdGzf6dASRg4uAix8UerqRrkzD5oC2V",
  "key2": "2GAt9ArbABryWzdhLxm671xeyk95H22xYuodjQL1mfAyjdnciRNsd785pGPYwr6UHSMKLa3UhwH6wpuboB9xqPsL",
  "key3": "3KV9KbNzuRBr9zvT5NAw2pCNR7jXHTBcaPTn7aBHxA5YwdxrRmVo2aGTgciKqQCtGBBABwBv5bYQwBo3EXEf8Npd",
  "key4": "4xS9pzHXcb5JQHecdMhRBr6kFXrTN1EHV2cwp23Uih676EsM5v3MdBc4GNukMBVeyAsZFgpETmAhdE4UohRfCiEC",
  "key5": "3euXyrPuMPR7CWnH8FeAJLzyJ8MqmrBrd4Pvbv1ys3CrjEWQnDjL79eHF1vLMXMtGRHw24ycV3Ez3uJqsAdSY5CR",
  "key6": "5ZLr78ybqidy9mtbEXFQF8wCxndnFHEUc31NenXZbJ9Hiat5SUEiGytHH9ssDFXS5oPTkCxBZB2tZWX3dz7mrAUe",
  "key7": "3op8SoKLoDzZAMvKZQFyrK3yNTHhGSApFnD7mAGeZfULmQciTmptNB9nvK4zo4VaFrye1SCkGcgF4x99SFFgCd4t",
  "key8": "5Yz2kEW4nYoWpeSpDZByVDoHcBb9Z1NbwXxNJQUy95HHJUqZGWEeP6bcMqt7o6NpnhkjvYtjUjiadyBH562ksA2A",
  "key9": "21W5aHsCmZQ1NHdxZN1goSR4iUEpKAQbPEDhNDuFekKJsde6BJzosX2jSWKn69g5HKNgvpLR8tVDJTcsTLzCfrDi",
  "key10": "T6JM8RTev51qMSEaGaS5vrRZtdcXG7g6REKHJZ9MbTuYDFguZ6wfsavsukm7HY51RjvbFBhRMbdHLcF4x5sJofY",
  "key11": "2YkEfGpp1EHFUojgodJmzEFr7XN7U2tp3ESqL3CQRQbkWMkawahMFPezN3qNhPrZx4YaJjL4zZ3y8o4mrknwXJdL",
  "key12": "3Wr2JYJmeCyNR6dBci28xTau3g9EMBxZDicXxhGckFCkSMe47pU7q9rYKwarCwpFSrjn5q69ayTz5ES6rrUH55DF",
  "key13": "3NJ7nyBppWqU1bit79nFkr71gNNdghHehmdBS7GYZEVZYGpzKRJ3d7cBxTPfjoeUY6kPZZsrdcQLpD6sCHeQQean",
  "key14": "2ci3Yt7zYpArZetVD1w2LQB4yKQARjddhQ4KdF212jxvKAAp9hGXbGPU1bZDwMMXJgVDEJQ9A5n2cKCukWJZXifb",
  "key15": "24wkXUEsqcc9iM3S2XWmd8m4YYS38WBtTPQ8WVeuDHBDbwiKCSuXTHPb8gJL8fMWudH9f1AaBVvC9159YBauegX6",
  "key16": "5FNzEiTGx4G7BoJ453iQcwja1xkq7PDRRaNNqsn4vrTxwAEkzABGzofBEXsMhCn8GgdbhGtovzXpLDYobaK5PcD7",
  "key17": "63bLptqz2zDMb4sYFkFv1oQUaFZZjt2pG4LWbkkasfJ2rkEjea7VcVzSYpmV3G4nRMtzdDFTt28swxCDSrnrsiwu",
  "key18": "2NeoqcXbtt4mwdSBvvTa8X9SQmW5cRYBtGjx9CZLybbJdtDPHFqB5mLTn4GGiLJAr3xjFMWR5DFF7rJnsZ3Y5a2",
  "key19": "1xPDnqruJD31ZmMD3tcFijbUChpwXnbe88vZBV598AsVDKvVtPapcy67FMMKddNDp4LTfUv33S5PwBob1JoyCLG",
  "key20": "5kRBvn95DVTj1HLvuW77Z7Vk4QEbzBmZeBzCLz2d5CdxytMGsmK4SYH3asiPFqxK9GLGsEYV57TsiUQEjupWA9UT",
  "key21": "AtpB3CQy6VuPdFJyoXjkDpEXFEDMpW6MixWzzSreTa4RvCgsgoBkFrosUak7iUzDkXULqPcBBmMkCVbhvEhN7jv",
  "key22": "UHm86tqTfRcD6UUzRT8pnojGnZsMjxWBV8bmBLcNvPg9D5Bfdtkr9wsWC88rR6sZ2JGeUN7aKVPBMs4RA3vp6M1",
  "key23": "3CS4Wcg1YdBQYaZFJRsbXnL4NZfM368N9oTuwcK6rXybjevnhWpeLNaD2EHUVBktAczrwbce7HXCwrQnWMt8Vok6",
  "key24": "2gyueHfW7G4kRxtfJd1whe5ruvwsZ9mreWEoYHQDQdpcPmwiMdMWr3uQHhScKqzGGrAuY1zX2Si9GWqe4xPTyVQD",
  "key25": "5rdjFoSb8LE2bYqCSAyYwrAd86h9wMXVfxLpviqiyXj5LUB9NzDCKxi2nxC1d7MxCCnYQ1mcgsFjc1dBodvwsY6r",
  "key26": "3WhxfLyHyHjcchqoedo23k2jQ2NTXGEMwatMnN4zYEdhLTNZ6LwWHuKVnfiV9TcPhH6dfYDRoJNF12aYoyeppY1P",
  "key27": "4Pf6gyDf6EtLJFAuZgnS7oq9sC5U59UYPcbFpamZgVZtSXWt3hQ2Fg89qyaG77fq2uLm16QxMyGC17jwDrUCY2qJ",
  "key28": "uyAWgXS7mnaFPFhz78LYrZadVg2m5Ew1xHF9YpSHwpAYb8diaTQ8o5GSbEb4x2Y5Z51DyPixuqbfxBs3a76ah4p",
  "key29": "34EvvXGQV8AuxixX4NHnG3iPqeKoAYL1ZHbTir6AozA8ErBP5nT6PqQSSU9H55LYX8JepmneJDuWcyMnuuAhouQk",
  "key30": "3TNwxea9BaFota4ACi6KHqGMZjzzXgkXirqfApKxmbdFg7GgaaCariM5wQva4zffXfErAGxVrGbSJb7xDbgJnMn1",
  "key31": "4tMKB7fpPPUFF4cAaXkPX6GhT5YqgrvD1yCjD9zRm44U1qeuwaKoA6dwKwvjtX7gxobbz1Ac1BgjiAzjkygfmGJ2",
  "key32": "2uLqRNMUh4AtMSMMqApYgfKRud6v4ewwt9WGzLuvQK84iPD1JX3fshAUA5JRiRdJRW6E3p7mjT8Px85dnqExThdD",
  "key33": "W3vTd8XkXte2SRr2LXwZ2XgcavdEM8pSHwL7riqBE7udedVZoCy9gg9rqjtniurhMvp7qX8WZdJgZf8UE6Fcqj4",
  "key34": "mgZcxo4jZU4SLjns8J9ShtKkvqoJUtsu6kqnAuQtEUC1JbXqZSpiUkbNGRGUiUbbAxfe5wYCvmz9dD6SPpa37Mq",
  "key35": "4nh6JWCUesH4vW7LhfAgHZPMJENc297z8QAiYz6TfdN3v37j45rzoKcWodopBfog5GzBt7TxXumF1FbBrjBRbLmv",
  "key36": "2fBFPuThzz6DaN2QnCXs9kKMwFEfqDXHumGc5bxNNNwhxJDWyuZDwXhRiuRQgRixYpFy58stgPybFM3u392txdKW",
  "key37": "2Tq84MGrzHs8okwFVCFkQfMgPzJFjwrf6YAHm5yBomF1GyPB3eSzTgW6VXubjTLvKvue3tnT8Z49a9ZDAV1hAPCy",
  "key38": "51e5X5DQeNqVasDZQxv7JmqMFfMQzTRNrBytxZetXA1ctSdxubM1z82JsgcoyZ161DT8Jo8TE7c3Ccytgn6pVp9s",
  "key39": "4RgF3hKe6Vh9x9PSgwS6E5Zdp6NjAQ7rjH1j1L4yvtAoAKnuwKMt87rREG9q3U9UnkdEBdZWYyWHpP9xaenbVhH2",
  "key40": "3KLuX5X2WZYTLD9tbDDsSdNJBpcnjq1Lz4c8GVeEBu5mnYRE19ZPdkF6inY2D674714Zoh7AuV9KCbaWF6qYPPFd",
  "key41": "VsJ5aCTPKMM7ugqicYbz1kvuXXzGcJ4u1vf7ceRmvngc6KD26NscmZj44LG2C7YzaBJWE54xVSoKtBKqsxwa6be"
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
