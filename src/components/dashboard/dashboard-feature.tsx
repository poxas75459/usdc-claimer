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
    "5c9K7R2dNScygNkZvSf9SNo7iT2Xc1Yn7rtfHT5hzTgVu9WbvXAjUX4v1Nwj1NEbGNf3qtRza9iahLvoFtd5vqkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ra9pBaNwuhGAKD6eXARCvaNHPUhi7sYtMXgth2ArLedTWcyJ9R6zPN8Kqb2mzPxBTwhXKAdqf8W1MUVnux1An6d",
  "key1": "5hZv6548c3M6Xc7L4oaMqCJ7svsDT8Hbjnge1hPSNr3AiEM82nkSjdgoVJAaNf7uc2f9SD49X5jpCF8ctHMt4Gaf",
  "key2": "2QTcbagSBtNpFMJiSLmCM4tz6mnxazx9YVwdGLwDe8XDRQrZNpcnVkdx66xZyGM8VsL95MzB3E8k5WygL2XBQbdK",
  "key3": "54LLXSu231mbbETwyWC3pX8gMVGjbgEyw8yqUUskbQ61yjjAvXiks4VmQMfy61yKBAiTvUUHGQUtBNyekJfvQ1LN",
  "key4": "45yeeZPCoKF8rXFzYJup7yfAJKYwNrx2gDnqYE89ihT3BsfSB9UsCoooQMi2uMjcXUo6YyHFYmnLhTGifVteWXri",
  "key5": "5gzkrZtyQ8TuKaz3bPr1bq4emHzNHDq1vpV219Q6TEa1kaucBAMwQyZ5f8GBDT52AM5wrZiQiUCop5oNc1oaQmWq",
  "key6": "38cJxortx39jdybQdFJ479T1zfr8GNp3aDhBHrcPhdZXWtr9Dn7jKmXvgGQatDMsR8nEL2vnPgu4edxquuZZEmTv",
  "key7": "dVRaBFznXTJ9Yrht3u82iexAVY6NyYWheYmd8L6sKey38YWHsKcP3gYBbnxCqRAk3CtG32zPnmD48fxP8HMsGUR",
  "key8": "5Th2VYx7E4w9ScVnRudvrmMMCxhD9cfgC5EpDTpCSbQLs87P6jU47gPNGVVKjVcV5sNTPZ1PsfB2veU9dNdbkST9",
  "key9": "5LZmRT1UNxhyXE3eJPGUpi7hinV54eUU5ZdiNiqfjfTtARZr8yXhoii1xjpJnThhSkESjco5qGRAWKPDuHvqKHHz",
  "key10": "4Au7Vv8FZ8KLASiQNBLLqMV43sCaBWY4rfFBxGFA1iLZxpjufwK2ESt8s5DjMWVzXJCUpdTStzDFStdNv8TyC4T7",
  "key11": "4YkRTTJJecUW1kdgM4wfDk6hwFfPTuoHeVKqRu47DUzaUCax4jMHQV85KZqkZZHUibBUPm9XmfXYJZS1XM6zCq6G",
  "key12": "adhuim1oVC6QoBhnouTBRBisscwdw7TAFjEr7714PjEbAhW1BXKHtdiE9ZDMkuXJ6ZbpJkaJ6cCxZcq2x7nKRm3",
  "key13": "2mSF9ESzVuiBVFrcsoop2xYBkDD2L4djXZiMSxawrnV6QCnhq357z5DZGmvPwMECEU1NRr36xCoqcD8pKFDsaxFn",
  "key14": "4d2mKB5ZF1uC98em99QZYaMx9hZErXwsfCZdm5PqGamtpzSbWKA4uT4uwAWPJ5H6jA7uwZvg5ur87742cA8zWWZs",
  "key15": "3vd2fUAo5NTXN3NVDfgmxS5Jpubej3f2ob2GnZo7kX9Q9G37VED1nExHyHYdffCvif9AfAu8iJiJT96sJLhreHLQ",
  "key16": "phBWSnu8y6Sqw1kTbYgKJV4kDFZ2ESLD8cBjHr3X36TfdATHz1EvAkrTUutwpfp1zrsV5HhkaSCtDF2KdN5aL1e",
  "key17": "3tzhv4pNs5gsjWQyNgMWN4zB4N1vYBWR6BSEyZSTCqFaRtTURHw3Ve1jrfy16nvbqriZZt8GpvA3T28CazbBy1dr",
  "key18": "5UvhVWz2p7Q1j2c2dxMVRTLfBjmXy83dxdaJvsaogkqnGmCHBqebXvM9fqQVgqzq4iLTDaXzCUt1rpakV3UJdC7d",
  "key19": "2G1gaRaP12ifkzGrARhRaE1FXnsJdgoxuXJagJRvZ8JxXZbGWP4zJy4nvMieMzs3sV2LTFtQ8QzDYvnQ8ehBHy4b",
  "key20": "646nTcmSvA4Ttxkwy5pQJkZErRHxNmMArJp4HMFTmKPdH697eFnXMKFvLheyeqRM7PBvPquEY4sXoC87hCrhhgs9",
  "key21": "3HqrXGjHcmtVy4miBEwDxMbgBwnGDa1ADXZZj5r5tysA7TpzTorENCLwnW7uA4s3LbpAHKywR4E3mttzU5tbHb37",
  "key22": "2C6XsETAFqVA11ri1Ece1NHKDsuLk2iCc2B1g2B4v7SdTV9nwJnkK8BG1q52cW3RZF5tm4KxavBkwJ1qXziV4U3T",
  "key23": "44XHRQkjrVJZsVCKSY537pq6iQYd555AkmBtSog2A5PiXUC7mwhAeR4rk4EmF432VJAjHG5VhPTsJyoi6GgDX8Qy",
  "key24": "5PBkRX3NEW9aP2iqiRU5iRF6wWRunT7rAvAbvf9gezoVFUpiShEHC8tJQxcQ3QhLM6V2X6QcvbWzBuWDytTXZjGk",
  "key25": "3agrFsgwULgKbpRA1upYCQLGixhT9oamUZyZhFYkL3xc4tegEE1g7uXTYTxHDoyFHWXgAsgFGY1SmN2mLnpPygML",
  "key26": "3GFxzix9KV8exBevz9s6VQ6PbH8NUKcsRC1j9qRqRnUkz5BFv6zqn8uYkksGQpZAB6MFevG7ctY7suZrLebPYWAq",
  "key27": "3ythpYKozn3p8izpBaUnM2Xy9mFLRH5xkzRZxg8vrrGniPDfSv6epahXNA8EveJodAo2kxzdaavhfLBBSqb45cyi",
  "key28": "2qwT1WMCykXjcvV7wFeww3PtdC2DVkTPwSj21G9N9zzzvVfEKDEmG7KfTrnaZnGHjyRxs8nAzM1m88XtjD2TGUGx",
  "key29": "2ZaE7zSQzu1YcaFecRgVUGG5v7PwnCGrSLKTKynpLhzAyMsemePxoTEdncK5uiWfs91Cfy4dpzwKpwZgRieX3Vtq",
  "key30": "2BVjrFgm4vL9FjbQKCogCKXcpo5zfHHDtjdsKCVfVzUAf61YcbGGt6k4hwS5T1j28ZEULJqzctVeuLYUmcoeXnFX",
  "key31": "3mkcYgRG7UMetysSeMUBUBLLmGq74tiGg4TkWzemPprpXq9GCqaJREH3NcS7bbfA8md4Tpyw2UeHyUJNXDN7KWs6",
  "key32": "5DNvouDCgH59xkBWNRrzTVtTmyVyPw3EXMn4hnHuXttuLqW8W8PYJRfog8KsjTrp34FfPEkMbCB4FjxnVq2ckp5K",
  "key33": "4M6byhzDEwonot6ge6aUHCYyVuFYH1KdAhpymVXRBWdVmuJ41R5BEayfUzTW7JAzeu9vDefx3HgUbBTrNF49DdSx",
  "key34": "3RrjBdPAWkLB5vtJYv1vuFJP1xdU4HnDbexc78CLWC9UfmJRxTeQjGAwRhv9CZXoZctLaqPgCrU135GQDULoNE7k",
  "key35": "3gyvqrXjxQxW9JxXtLJ6fYRhwSFSRC9PS2CckRCgST12pkSYwaaupmpXj5QGBSjZADLosny9ycCTxsM3eLTzeu7g",
  "key36": "2ySL8v9gQYUyeRQvRsBVoYZ8WXDM4wtrDWo9pVndVb4XTYtkZdZnD8bVPswe9YpYPAsrpLoM71U7NVd7pfgxxHC1",
  "key37": "39eZffiE19qWqJBn4WR6H7UwUn6TkUbNVeeLAotBdy9uaeSKv625uLbsj91joeocm9EQXEgR7AhCSHAej2S3xRsR",
  "key38": "3QUrbHxqCZ6VBjgSZuFZagpqM3Q5G6ydTzuTkBGYAJkmJm8DSHUCWX8wd8AuE6cCPwcxBxGuF3vwwNXhJNbmTysR",
  "key39": "65p86rm4mq9Js1iEp57YEE5JcKgk3E756Jzx6B4nfm5ZekuEqWQYhGVHQRggp6Nd41VVEDeTUiZxYHWaUVVPUu7d",
  "key40": "5UU3rUcJcdc8UVwZTEs2iEzFHYH7K4VQZ42VupV1LQBjHasoj2RVdXc1JasZNrUvtX2BjUoJzwKSafCCx2STTSK6",
  "key41": "4d6W9kgk6yvUApsLBDcSKbWkZMdhRLzxgirz3223M77DwUaZ1B2bYMZZerx7vwLDejoqQYNMPCKbk2jiUqtT1Thz",
  "key42": "4yU7Poo3GeFXivdXxnW6LrUC1KvmrPC99GKghwoAUmSiz2Ztur7rJ8Q7qaD8fLDCtqmqZ1pJNxMa11t5PLs6p6vZ",
  "key43": "2VWBvg4Ubpwx2eyw6KDEqRPBR4Z6cn5bocR8snE2EtSFNWGcvR1dgPtCNTKJf7KH9rLpbcG43siniKy2w3AS5Wff"
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
