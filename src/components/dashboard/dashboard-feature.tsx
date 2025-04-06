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
    "5yMNaazokboW5qzadcbzpM8v1dBeaQSPZ3BkQ9DZUCXZ3TJWxmGNgm3gFkYyJgmALV2pkcpqTA6DpxAYog1X6rRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDMJTYyv4wXo43WeyhuWtNGMLJGDNdd9y4T17ohkPSUDocP5d3SxsdaGeJ9ZXwBAP5KM8diPefMvLoMffEVqedN",
  "key1": "5isC7V5tQL2ktK8qmnNPTtCZvbGusP22daDivCF5WcDVRmD6G9KXvZsfARA5B7m7duF9sgKSjnTryDHs4W7xh1CW",
  "key2": "UrrU7huuBHc52jUVMitYAMjNm443kX4MzfUXiqTKHQdPSDaCgruTPtgbyRU8vATZHwRN7JaphFEJgsEwPKHApN4",
  "key3": "4DKfuen9Xf17LazA8qKrUhdoXCizEonHDik4fg32SrReqtB6CMaBD6szNFni4LiyMfmAQgheM6ZpuuM8MAy12yQV",
  "key4": "QtXLWwhzWzLTLnaNWmyteTypZmzrDB4BBYVxw7VqmMoV79ReViftg5FLCRCkyp3Sf3CBwjiCft4KrmqcRwSCw1E",
  "key5": "a2Te9hhspDSaRvw8VeVEjHVkokKsQ92CTyzBf9B2yUw33mDeut32D2q9nv8V6R7fuAAjXSz4iPkr8i1W1nZyRjf",
  "key6": "3dZyUnKJUtLX7nKVg6zgsrqARoUQV7xu5QcpVko3i34SdidSYXEYgTF3XYGK7CqTYsVcnjQUUy391X1H5taRVkh3",
  "key7": "4WKcukTzcxZtQbroVZKzvwr5V3SP5TTd3HB3SMQPnVGoVoPMHEjY4HhuZzudPPhW2gNLm9P4oNq7VfYXwvi1Sjjk",
  "key8": "39yJjwMV3faqoe45QarEXeaAM1sgbn4X8JPsdNdzDh5VfUxinmxkQXjAivGvQmtzRp9po9WRhGqggzp7fgauiSgm",
  "key9": "4kwix7AwmiT5pBxtqJC8k5E6tmMuDH4GZiDYKcwfxihbLytqKPyDTjS9eNVH4EWpXhBzgcT51UyL5bikAA431HP2",
  "key10": "5eziNyf2iR7vnLCEdNPHokyacj862TA7GLy3KXzZ9yNxHqZfD6aqR5DV2cmDAxGhtu16Zkby4veACTCt5jHgXPn1",
  "key11": "3xcrEUMGAD6LabodpNEbUNQ2XMbkZyJ5jvTP2AoDV7B21Xm3eJSxAzyaVYTqdzLQWWQtXB5JCF22jLYiZ2TWoN65",
  "key12": "266J62UHemAXbUSvtMP26GutXQWj2pGtoHLttBPRwK5Yt1ix31KJZDfkFCZbGi2yxPbXGX2ys4kFFFWADa1Sa31B",
  "key13": "4Jwsi4UtqW6m82LFhwMGPHrqPGNMst2xnqL9HsrQNAdnYWmmnmE36aiV1pKFR1CUyzsQ2qK55qTS7B955sjbqWQv",
  "key14": "3sdUZzBy61SQGuN3A2pCM4HPhjB9VSPqEFSdbiwvRDZuADePsuwZrSqFLCM7H6aMGUL1MRAcW9sjY9UN276j9nD2",
  "key15": "4YFqvaNJheGUJRhe6W9qE8F33m5rcjZJL5oq44SmaeykmjpcW431ySk7AiBukFjRC7ZXSioN9WExxjs1hwxVJ4sB",
  "key16": "Q1jEK6LcF6mVbSQ3BSEADw5NG2CiWxBKJghm6BgDMFWHVi8iKtCyfx4SZoCsuV9tVhLqPfZon9CLrrAG5Fb41xb",
  "key17": "4dFTiKK43PGfkejiSgfSFgoHK7ADTWriCPgBzmTYXavvLURXRLcwVR73WsB597wNsTFL8nKniwbDnMqDXWFRS4qY",
  "key18": "4XjB6po5s4Bwup1CANLRjhG217h7bKrnXKGBBG2SqwTdnzmgHF79FoVChWNBtBxyFL9RnwquvdFioBGN2WjW2hb2",
  "key19": "5WRfV4FmY71xAmwERtwLmzGoohFhaAg69Y74fGKjxtnL8RMgdkC9cWcpTLYwAjJoRHuNh2oXvrrAA6AiFqML871G",
  "key20": "piBxVykHbmzChHTBDA6WTsVZSJYizUrnBkMtjQzdV9mJVynHpVGwoEPmRxbTtVzEZjn2bqc7URYdMSf1PgGBguf",
  "key21": "pQ3iiZx94h7xAPuRq4goSqrP6MQQ9MZ4ZRbDHZaa1eUuocZxG9DrAyaN758hM1H5ecUFymZYZs3FuEGDBYpbS1f",
  "key22": "5koiTNyY3XFbpwUZYnn2y67XuVicAfnnDwzGKAykLyEFDFLVQKR3JBaQeEdztvLtgaPK7PVHqj9T3ErHX3xDj1vd",
  "key23": "3LAbQtiiPdUtyeazUn5MuZKNJUyq2Th7guWZDwFq4iYcc2g1v8pjzHisfjUxeMxHZq3WeuHJxay9r81JKdvWLpX1",
  "key24": "2XkXZWLjKjo2WjfwbzQZFqLig6X8K1Hex2JdQD4V1RbMjPmxbkQTT2iroY7xu6cwmNCkBzg6iLKH8n9wuCgFPC13",
  "key25": "3d6GuZZQf3Gf4jerZnfgXz3EMcGeu8SSHrunN5Yjj8TeiyMJnsgZbeFfYCZ5Zk1AzJmbbYULj9zHRsQeAHYuNhuy",
  "key26": "Vu2q9gzJSgBF32sq5uZ9ingNkA63xRjn44FqGP39kLT5ceEYy3bGsrbuMeTTrd9g6nGf3vxh5wBzkCqUhFHSrZD",
  "key27": "2eyFFnBPKxcpEujAMrqrTxkDJkNmrSwD6K6Vw33YWMxv9wjk663uznCT7taGXcVF2sKRAxr658xGd1oTSfQNkW4X",
  "key28": "2mSfWTjN9xM7hvQD69wtSKFyHsJFM2vhAydVoUHa3rVkazWdEq2gzi1SgnHpG6s6NmUXt1xL2nZh1S76pkhkfSNQ",
  "key29": "56E16T2M3RTudXxdgVwJFu3fyoF7EhGoBC8Z6R3sxTJzxRoGgDg44FvGXY7pxY6fBoqHhoxeAbfmu1xabvsgfEic",
  "key30": "66yzifBR67VipsBPTJBiUCkhSfqKJcMmiMHQhQsKg1Bpun6bpPhqH4oc3a8R1B38P9sCYdAYg5y1672brPuAfgk8",
  "key31": "5A8qbfVqovm1yGv8ABuq9CVMvFkZqsrdBXzFaAsS73d2XnD735dLRhSA3ozMNLVVSnWrPEwhdCCFsY9p6Dzwu7K4"
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
