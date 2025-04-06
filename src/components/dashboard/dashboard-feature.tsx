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
    "25rqtomi3AFDqGqrsUGwfG3MJ6Pq2xWekV2qq1QHbiHoV1yTGnWVN7zdZpySQr8RiYkojTjDR3i7At5eG2k62WgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eVLK1ma5bQS5YJSf1UfNH1aW7DxNPfbeuX9zcUCm8nrzZ6pVvXdqz4qEZpQsG2rFJbHjJRbtsXaqgd3VDji7Fx2",
  "key1": "2XmkHqenXB4tX9ZdQ9weKVwhSWoGQxa7fvZ97vps9u7ad3AKB9N6DUEuAA5bs2w7K6HajbvUkS7eL38DGFQFJjW",
  "key2": "4c5ckJP3VZUwTqTkytQY39zcM1VzkurCySDbgkg5JZ5X7t8CdnwNwV7QGkd5RFKpdpASoGh533m9pkEmbMBSo6vd",
  "key3": "26WLscQrxND7V9iKrhX4JDmqaBZtnhgSNdAisecog1HL5rKE9w1zgn5SmP9Xg3y2izFF3UEyJk7GpX5WNfg4ynTp",
  "key4": "51GgTo5qoaSJDnyREjH4VDHrvynT8ZaxLQdjRNT6piqNQznYqEh9Lz4G5aHJtr9ZKEJ8kgGsjjMGPeh2gxT4BEGN",
  "key5": "573kxbyi939PmDqRcroGLCkjxidqSjZfwummTuSSscrdmqdqsJ9cGW2JfN4c6t1wdAgHecccDK8xpvLusWDvH8uB",
  "key6": "7ehSgHWqSiQDEjFDgvd2Soq3duUPmKxpW2N2ibNk1Rzasow2rLKRHefd1XCLxwAqYukv9bRhAH6Dz1hCcBGGKJv",
  "key7": "47WXFbh9TuKf69ZnLc1FXgPMZeggbNc4UvhFNLY368v5eQLk76bCAWatuJt9HcZTZFzAtugEZNPdJxwSXHKmb7qM",
  "key8": "5ye7WMHK1AEK425wds6YoSLrdWFSPzKoRnetfqnnHyhD4VYj6W1houFEZJqdJ9SzTHjDZyUHvwJGdEpJ5EMFuSwA",
  "key9": "BVsJY69R3Q2G7epA65W1rQw2sBL1Gw84VQQ6hgdZwwTNM7N6YhqTjSLP3zKS6Yu9qQoQ5A2kXQ1BNt9AoAg5oFB",
  "key10": "4XuUy6w8DjykCrEGh15zXPtqifKz2QdyuafVTTS8ohBgF5FQLzhMzYCGmijxPkUrYx3NR1BQJ8YGkNkBmrR3aSup",
  "key11": "2UJjehECqUi1DXWBjLebXvXyKkjLP6x5y5jTWFftANLRMDF19CochRBE8czguxn6Cciv26UthuJxFoNZPBD5mH4M",
  "key12": "2VD8BzpfbP4x6vZHCcZZHGjcbNYcKUVCkZ5CWDKiXw5PccDtcoDgm8BS74nunXsqf1xw8rkTDbRFAhHzbp1S48DR",
  "key13": "nE5MfWxcVzYSkS4yqiVUMWbLqYEAX4iGWzMAmUqgQWrerzF1BdxSxkVpqxZBbAj1jyLFkCD73psndXoZBDngJRh",
  "key14": "2HC8ed8uJXKxFpyvhJvA18JKV2xTCw5mRSWuAsTFUA3gSfaUgccsB2KdeZYWLZiGvvnmuwL7pgKRWiJpwRv68faV",
  "key15": "5SgYKdzJo8wf8BMSgdbvj7mhsh5EYVniRyqUYtaob47u8Ucd8FLKGkznHrYaNNwRcmRSA5QQezLfBGgKDEitohWm",
  "key16": "5sJ5dqXb6EZhpNj52uNBWDTGFFLFMqfoBzmirZ13Nvk1gyyhUb8ckYoRQN456zy1qKMRSwgYRarneixRjACJ61MC",
  "key17": "5EFMXTGFsQUCqntsA7Bn9q3zZnj5Xq2CfkmSRM6dL4UA5rGhSAZNvhp4DkUuc3e7G6nBUU6DrmGtYjpKR5KEDBCG",
  "key18": "37paH7sPqRrhn3jrFk3HYX1ENWuxMBegJ6idvgefgP673BRRWC7kV72ZT3ATXz3HwqCT9ykBekCuZBdjdEjWQrfX",
  "key19": "5XvS8aca1LwsZ2ZEsKzFv1BzFhsK6ziWkUrRp8S4ZqHyo6iEk2n97p53KAPqYxtZcSYWWtcDUoy811xLqX67BtGZ",
  "key20": "3fgxEYSPcVzfWyMztJ3kb6PiC58MM5cpmrdS7FtxdB2PAswJAGg3F9rmJ5Pb7tShJiATowX5NSL93SAuJYRga9XZ",
  "key21": "EVBg8PvJ5yWhjar8g9TS7qexoScanxneHpfRMdbsPKTRJWm7YkNmfz1gsxsb9bBnaMAkW9vBH1DzW3GRCosncPC",
  "key22": "5BTRS9T9m2z4MkDuaMWHXsVHAeQeN1X3FUvBkGpJohZPoRKG4j7XjTV2vtGobQ5cXDkhZFVEy8MLnNAtqDZGv6Ds",
  "key23": "4sE1j4kjoCUU3JziatA7vZjiu8LkDvzraxTtD6mpwijM3s2Ctp84zVuVQvbfJdbx1izGVSuVqS9HGGTdTjJH7iyq",
  "key24": "fKuUD78vEx8tdXqPkc2sCtVfqACRzfmCRdJ2zCPECyYiDc53D7fqMKu2RsqTzu6EybwBtN9W1mh9JSnmC252qQw",
  "key25": "4oLSwbB1HPRv8MnS7fjwrdhqCgUfFRfHWmAYirZaj3eZLb7bYnjxpc7eeLX2cttkuD6Eo6xThCBEn4BgxPC34iiL",
  "key26": "31v6aWmNzZuvSkKNf9Cak4YdQBcMGdBiTvS1hNR2DVdviEfWJT48PBQ9SwtvHHN5aXfz6FTjgerzUSb9SD4Kohqj",
  "key27": "4APBz8hS1kY1AGrteBdp1o19FubnheyQgoRA8bzwctTryp6VNXVNivSaFkgzgn74rMBP7ztHp3aKsGDt1uSBnYFV",
  "key28": "KiHa7TT2t2ndNPm41pcp2tR87ZB5pnou12YMntcZzVtBoBJdzbTJ4Sf3jzai8rc9BiZosDhG1uYUsBzUN4NfPWs",
  "key29": "2mW3NdendscXUVWvbywxWgsNp88STYTm7Ht45QqtRRTVuzwL47hSEAabTZurUaoDhfuyAvdWhJPX5qA2bkDejV29",
  "key30": "ioMzzFwQ8VPhZh7Fhw1QPWLsY2eFRELBuaHdB3LNj5L7AvyiZj6M1wJvwbP5Ppy7Pfw65TdT6rPqSXmVN4kTp5b"
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
