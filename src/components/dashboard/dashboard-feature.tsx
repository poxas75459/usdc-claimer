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
    "2e3dWSfEP45gB4aVcgLxLStHd9kQ2oJatC9FhXBd92ZaCnr36WPcsz55djPXiTnr7ivBjJhs9WEKt9VAqgtdEkDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDUsuGieA3EVmHnHZEMY9MP7WPwLDaWJkhjd51yZ7tvsXju9WXCKVbs8D25XEaeVF6u926KvdhmVA3C5m2QvZwc",
  "key1": "54ZVb1iG7BtcbJJieueG5SHAnZj8ovh23Aua8fFE6z1CZzgA3G8ZGgiVrLiudAVHhNAy9yQdUSLALZarPSH94gCd",
  "key2": "23W2fNDSJy7pJVzveMfgVG91aGz5FsVYUjVtoKRbqTBbvcjMZkFVzWae9AQB8dLPU1xP7gHoQ4eH6oK2Qdqponm7",
  "key3": "4BoVqG3XofSGz6muxKn5iAYVepiQkVw7wvBPWdrwpiQZ4m3KYdZkTtXgw4vWFKMz89SWX6XbBjrMPqrfihfQttxk",
  "key4": "3HtbANvz33F1fwSjzuw7sKvRBVnnFaJksfBQVssGNU6j6Fgwq8TFGMtMinZNLNernCsusE7LcxB9GAcehDF4j6Pi",
  "key5": "6Z8QN6QgCs8ARozsfxBoYqpYzVLPDVDtcDyqLnisFFrxkUoU9nA3jv6UzptCaLLAoyHmU59yE2op4ajBukeBgDf",
  "key6": "3kZK3oU3Ti1hqjGBwrn2dg2wrgep5rjmsSF6LKijWjxtg22XSsn2x6LoRMX9UeS45sT5Ya3afKeN6cDo7LXcoHSu",
  "key7": "fPBYQVkj88q6VKXg5ViGXnTp1yA8rKcE47J1xCpaGvZ4dAsiwoTKV9oZcEUVpCkzfdqjKTAgQqftG5PLazRbroz",
  "key8": "65deb6uYdpGKt5kZyHeid3NXo2pj2fqfkhsVqKrfprrQKqK6agjN17T7gzuup9UqubndZNpVEX53KVuEfcufG3Zt",
  "key9": "2zNqaWPGv5LLgh1WeGjpMynsQT71VMx8ttNUXJi1fbz5zxFXZXhvKe3exhjKaDtA4yhg2TrkYzjHDUsvD4u4YM61",
  "key10": "5fEPAdFpPVBuNoqKyJnjRwLAkWpjmnpRfo2bVAbzHnkp79uj14p3seZNVB9id9jWyaPRh7QxDnXWoaVDbbabNJGj",
  "key11": "5pJDKtLUqhTs1GykA6q7UJm6AY6n2g42m43wbWaKeLccopSyFn72bP6Sqr5Tfvcjm2bhM6wKzY7K31bdwwAUGmYi",
  "key12": "3Fi6x5wDX1uSqqesbJLyufSpWjsj7Kgqcn9KQzKtHnufBh4MUuTfwFbzTCXPcrqX3VFqLxfc8dVFcGQrjbhpMkTJ",
  "key13": "2xuQu5NkfXy9QErxKC5fyZuCEd7wKB5boumjzMXvfTwZBdDEJ9V1b8eyw9Pk29xsTcS7gztNvCPad97wHDo5F4R2",
  "key14": "2SVqSTzNLgzwj7Hb4SHBEvppWd11sx8Q78ungGM52R5iYVSqc5cp6Px72mCHTSE8P8naddkqmRGvKZKpS9rQqWF",
  "key15": "5ZZgRV9kpdAafGhdrJ73xvHTrfsHvLszhw8t33MtSr1jwsdfvJtZ82ENi7Jb4AgAQ7zriKHLYve7hYwHNBgC4T6e",
  "key16": "83VJxLtTw4jLJAZfhyVDWvp9UcBTkxBP6mPdhjzbYWbschzoGacwvMwedsCHYLBEJ8XLRgqRu5B6Upp8ujqb9Qh",
  "key17": "4nr9GRFkKXo755tya8dXU2TPXVScUtM7jBJTsxF1YW6s4XGd5qP4TZx4SWkL623GrBTFJxTuVGS2dK4VAzpnskJo",
  "key18": "4WqG3BS3TzHNBSiU1aCP2BnqnL8MPdTWvvwpucmRfjYb9wegLoExaZvDCpBtT8WBDgQZh5PwqwdX96FpaxSj4Tgm",
  "key19": "5VZBzA9T69sAiC6UL6n1Xr1dqj77xFNKkGhJrYPQsNPjzYGVXryPvHUqN4Nkd4ut5eYvRfBUg3K5Py5HkCEbiySz",
  "key20": "RscLPaf4G4sL8yzzpZe3guqGiFrT2c7EVoM95aQtvcdU8nz6i2uchQB6JipWk95qWJaeHNLfPEfh32XxQLKJMSd",
  "key21": "55oCXjw9yPNhB7idhxYvbxWNiPspL59MVVbEmsxjH5o2hUAWd5Xw5qtAuxzXFWjviz7eGrwZTjBNHXFfH49RzV2e",
  "key22": "2W9QpTBkx9yArdwYK12R1FM6k2sh9PfmGcy1ra2enceepZUicWEWcTKzcn1rkrnvoJ3cinc7bGRUyEzknk1uzBe9",
  "key23": "HRAnNE9TeVwBtoV2CrgQ3Xwm7bFshBwYCkqis6smpWCrsE9T69LmcJgiQVpzWjyVSzL2MjsvvBFwRUf25YvYuNi",
  "key24": "4gLJsB3xFmKgkx4Jg8EUBLxTzZrXj6to2xhbDMEz7tHfffoyk6bs5obXGERiri8bEYtkFcFdouXrBSio6R4SJEA1",
  "key25": "5d1CPJKoKtpbf1VF3cTiwfTaHpofpr2kiWUo76osDXjiC541tF3gYuviV2NQtZ7YLbGWGyDsngfD7Ricu3bNn8BC",
  "key26": "5kj6w58ZdPUyvAC1XuuXbvs2LB3EdwwLo9ZPpfXmGmxBtTxu3VqqG4Z2HVd37STLeFwS32NN2oWK5Nz7Rq9FoJdS",
  "key27": "59qyBhhik2E49TGZLpjeaZuCPWrmtRbT3jyHZkYkr4GH1RfBfSMLiJqcdAfGWxgTA5FkHv3nuFhAQNXgX7b79YnZ",
  "key28": "3kW54YuYq2PqBj4JeBUEzD8wXKgB29gZey5qBrDpLmrFzBzQBP37Do7411XuVkKL1kQSUSkw4Pfde4m2z7nr26s8",
  "key29": "hvms21myR9yjXW5TVeT4QbRbErQgMv4NDEn4sHyYq7HTuYUtNtoDcSJkwbD1hzRMWfs5rmF6tMYvNDw8EmKJEtr",
  "key30": "3LXX3TVhXkveaUgDmikyyXewNok1TbkxauCDRDofNDtYPXA1QJ4Uz6nUatb1tL6fFL5XtYWx7Ge9Pqm3rHWBpJ2Z",
  "key31": "2KXm7TLYJVysi8sHSWYoDrzCTzG2xoYEVCKyw5NjuqKPkt7F7wZPhTWxMbt9V78PpDZUkVNDKqQptWuRrPjxmiGy",
  "key32": "4CFkhQLgb3ua7jjkBxzRhp5KETQ26cjM1wY2DUSCxGKqxouiHjQiuMbMYqB7fZMSam87QPSvKDDeXoPVJ11ojwCG"
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
