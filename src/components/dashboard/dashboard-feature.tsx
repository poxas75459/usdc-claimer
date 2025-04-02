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
    "U68C7eUPojYNjaNbFZ19Bh2yEhoVcFEopTCY7zkoegiqtjFky1MFVxEKBXRxZe6adFuP9ZX9M82mhcfDRKawRHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxGkoWU3tBUbCyByjCyxBwmm8vnr2pK6SoQrF8NQRxFZfN2q2KA2V6BtUjWt96gSoycfU19HbBhztEpwg4Pf4yK",
  "key1": "43KAsD1C1ehtfBALrcT6gqBYw5y8BhaAH71YgGfjAABnNrnuzjuJ4pwYbViJp9JdCMBi9Tn7JpBwPkYsEtHmm1wX",
  "key2": "L3NJa2KobePnQ3qfBiLS2RTDgpescnxhYkwiPtFYnwkdEtdtspVk6EKgm19t7xCzECc4JMFHHeyKSYoYpfhAsdM",
  "key3": "2Xsna7KwPTMGR71U8CkJedaLkHvv2CNKSnp2xNd4MWjgggvt93WnfCmwKhPqBtnvb4S6AJFnvV52Re9ygKUxZQJq",
  "key4": "31J6P6fWxb6RXmY9vKi8NUmKMHQWCyrZugjUJSR8rPwHcUBN4Gszye1v2w76ogc6mLaabdLbsmqCuynAbRxzQCmW",
  "key5": "4WVoEictpxzBtceJsMWs5cUMg3X4ZKfdmLbJsFJomZDmS32gsAQNTJP8uBGbq2F1FbnxYTnP1P6XZT6CNpD1LyCs",
  "key6": "2tGRhwPqzLTUDuQHq41CGJU23N2zYt6HDqF7PtmBRyusuYWJYeEeSsRWyUqfQ8zBmKQMg7owuV7peF73SNA1QWMC",
  "key7": "3u3mhpwxGttNmxnHEaSLK28qfYZK9DHXa1XGyAnBRsXkZP7AR35QZ2Lv3hybkPcUWVxrKd5zHnv2dG7PGKx2E5UG",
  "key8": "5P96J1BGTEiBuMhZqjj1urGQ8Axv87ZoDrBfLmmka5JRESuPQtH938WdjdAmP2RYcZfo5kGwqWWuXhGHBPnAErXY",
  "key9": "66j6tFqVk7hJnpFyfsz1ZtGWTD1V6xFwi3HWs954FQaz85RMm9D2FpJNYmHbrpznsMnMfN82LZgYqtj6tdFdRQ8D",
  "key10": "2wYosJj1WoEfSJiryoXekvbAsgrLJc7HaLqbx3tN6JHzGoa8M7b95rnnsWeeueeyijcymqckSWXzfJm22SejfGYf",
  "key11": "3RndZTMJCiqkoSmaXM6gkq9hs7TYZizdwAY75Pes2oGvWLfdzzbpeZy3HF3v2spZAcAzuBKyb7btxYWN3vLqtLWS",
  "key12": "3k8N8NJdj7vzu2H7rqwTio3brsCXsE4AEVGD71Rg9oFDjoY8oND4GabSBhCc2nTYnQxBQFD8FRsLiyN5CfYTCKX",
  "key13": "4L9TitinJc5xKktohYsz82ah5wTsLpBjAa89BMmMcp6GgK4jqhoCPkTHDDxco4mFboYzfvvTZbmhMSXyeWVAtV8i",
  "key14": "4xefu2SvEsyzbwzPeEAMzfbnf38rWfkvnpCXntVZuEcWHtwGQJDqVmJRTyKbrbgfvu4XQ4mqFNUZojAyZC8dZkPS",
  "key15": "35LTiQar1jA7ygCGmBeDjY8BLPo4PrLzbixU6YNPMawmtDsqtfMZAfamFiSQFpwN6y4Ci7BjAVVGQyQFbPmMZzaL",
  "key16": "4YJ855b5PZcvHPUpJLWANXSubxWXp4GhvNpKxeg8pT7k5oHCbNcQi5HaXbfLPK3YcCsZbwG8zFLBwdFMqLKyRzxf",
  "key17": "5fpJhKj2Dt9B9t3WpJNhx6Vyeo7i6mSWumjq1C16Vj235Hcz1hw9PwTnuG5w3t1goGjWdSZEXDSAbvL1E2qQ3yv9",
  "key18": "5fpXp5Mtf1XCspdatuMusWTz14No4JuXdo3vAkCEA8zdbQ6RC2mGZhD1nPTEd8eg9YAAAias5Mm8qUqPHYuhBomx",
  "key19": "516BDbFeEStwgrzWkL6tCC71s8hPwpUc8Jtj8tgnpzV4UGoGS32Aw3PYDfbJygBhJXPPc3C2mHLmCGhVLJ84p5KU",
  "key20": "4pyMTUhX7Q5VeKZJ2Lj4Cjrk1Uhd6tCa8h9KwyhFVSsHeWqLMmAUaAtazQ94f8Ng6LgFRX6F8QEpNdrt57Bqjcdt",
  "key21": "5f1SkPNeT3yk3bCg4Mm1e1gtsbH6oMXbbWnnwne2BqCCa7AtprW2SGhCaXC7UFdApD6jX3gp7XG6gscXgTf9VzGt",
  "key22": "LHsbuxBmaNejBFkAb2kuQpDxFzA2Yg93KvWpzS6DNERk7QshTv7jvnncDe754cEZsjPAX9iL8aNcj7LvseBSKLd",
  "key23": "5o5uXLYUzKfRzYhuLnTgafmy41dRGdT1ZZHNTXrJfNJFUQE6dQ2txMVmtKcQ9UjpAafBnMfjN6wU8UL8WMdQ3EN1",
  "key24": "wA76GqLPN5NEpxYLVKeGBgsTBt4ysfiVJ9LqYjrwSPrzrCVzLXexNzVQcDMwLaL9fZKyDcF1faY53ShRrsFQ5Yn",
  "key25": "4k1qB7xuk73vdj6Xj2CJLccaN5gvBYqjPjSDrxfYgRXsr3m54cir9euKVKRtxJgNr7FmsCbJN58jXPpNvC4JT52c",
  "key26": "33thHKzmji8jsQJz1kKtUGpC4ZMEFEondd82tXB2x3WZueM4tupL1eSwwVyjLKsrr7cA2gLihgyEkHL58uaiCQQ2",
  "key27": "4dVBC95fKvmDoqAXzuwTruHEHkXXC7u5WHBRt7ADP4ftqEQg7G5rXCb755m63nqUcRTvarWX7f6yznsE14d6vREu",
  "key28": "28Q46g2HiMpg9GaJd32oCiBAF7N77Xk4zq36P4L6CKzZDJsxguXNDJxrQRoFucjRFnsjjXr7ePrQqW61ApSjtL8Z",
  "key29": "3ueyyfK86h25bYrmzGQFpt1bCVL1n91YNubVBWEz7MEd4rhzWQapPfdTD4wgQjow1ZkBzfJJgJdGHzbF1KS3aSUZ",
  "key30": "26o7bukZ1HyvLadsRGk8jv1AgV6qhHSEgnp4qG9HnzGz9D1tWVRVghffA8DWP9UD5pVTyv2BXRDa54CbmPHF96J6",
  "key31": "23QpspNK7KdErZTVaDeRi51zHXL78z2bKtuNfifEQDJK5Ty8mSGxvMkxxoeYDs4GVMCnncqv39BKMrQC11d1YMgV",
  "key32": "FxkKphnHTbXiJU15yPUNmboD7ZxRieU58VshvDhfNQfPtNaScdUra8U9VR49Gf8uU4PeRyc6uCoJX7mAL7JBoTq",
  "key33": "2Jc7TJgQU2mUojxQNmuu5iwrcSV4oppTjBGzm5fqt9gE86ymJUV7oc7hxie8CZA3XjrVvuzQYiXFVB3pmsPaEbqJ",
  "key34": "qJGKKDCHm8hTP7V9x87wBpEcajy6EGHzqRg2gkySrLCYrarhfAH2k7PRCnWGftapatCUyUocZrEKDNVNB7nuJ8X",
  "key35": "3Dmgnaz8jhB3DTsJa95vEuJmMirgfLDwhPVo6vLQmUBnPX5V3tWcm9GA1Ap9U15s6oBGvhaGZC6K9gxR78FQys6s",
  "key36": "3MpoojSFqcrgCtamzgeHZnEPqR4YZdsFsY1167a6u2W9RPt5iQYSBjGQGUHVQLbUrJyELf3SFX4m9pPduyXQHV4J",
  "key37": "2jCNDpYWanb3nqg2yjePoUY4GipxTGbZ6BLCS9d7Jfw42AeQEoKPAqXn4FWNj6aJUeCq9MmT5PVp8NxSfESqfcAT",
  "key38": "49Yy6EDoyo9DZqrQ3xTi429gknxRhnRTUAD5Yhd7MHuPTq7xvBiFP4G5P1qPmjEGi1H2FVKdUkrA9oCQcJh4qHEm",
  "key39": "4MPUKDJHyQLCxn5ftmTHn4oxf6DjtkNoH43aPnboCs4whH6cLe5BFUFhf3BetF3bQCDyeAncU1WdQZN2Wumwi837",
  "key40": "5WPQmCaisarwqPCC8CuccHfUY8nN4SKnueYg2ycjP73EPm1ThUWLbSWmKa3mqHiYdK6t15gNVo6LhMtuEPpbA4nF"
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
