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
    "59qy3sKVAaai2xVYSZaUeFGKtXbN4Bmr2K9qhoQH14kwSjTjQnfeeYMETzuedYBzCNLN1uF4WcSAmByLBzpqpaSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyjeBsvgDphASDJoZcPwJaDDmKhZENC8KMYTaWNVg9su6Lg6qNMC5wmzvz9AtRTwpzdauDgHUBXrnVCoHfT992J",
  "key1": "4daf3iPp2MLrjrqjciTD3Mw7dMB2YCuZyVDE1ViNHd434b4DorjXhZ1EseRzRbqWzacQZ2WnWzVUWjVd8wd2gE6C",
  "key2": "25QqTua5Hv4VFRJaQPuwmLWUdnJXrAULAao2J9fwNArsPGwBnjroXTTa5Gcwutbwy6xaEV8BBEmmvGEnsP3eQqkW",
  "key3": "51pR51ChAy6gNGUMU55D5PXJddxauYaf9qWhuvv6ig7rrAAXhyafvj9hdfWAi4p6jdaawbLFKE3TtT9LmZDDJ5Cq",
  "key4": "2AZjmN291avHGsvHHg1pj5ZxS1Qno4zZeLdgoenhJPRe1C6Tg6dAhugtx5TKrtb2X8kaUFN4kjev4MCnXRFYqXRc",
  "key5": "3nK7ueSFEF7iZamoVodybNuBNa6z1SUPr8GqiMBrFYVxstLMZPtpqmkgH7s9ua6zKpJFxnAA4fUL9GWiyQrjGttM",
  "key6": "4x5TgzQroj4Bbye3FUHApmH9NAJ2JyuQAzyYTRXPzRgPBvWiZQomz2usWkZ6fu878YktVLifzS1UZ1WUmG3BKkGN",
  "key7": "4KqdpVbgSGduqmRnTbR2N1H7E86WpzwrbCTVjJLiUfgn25N5nkqX11y2nzf2jaZMtgmYRSshdSi285Aaj3Pt1xZ6",
  "key8": "58KMU2SD585Qw1nwCqJyBtJdpTj1C1QEP2TV4ZnpLKT2kRS3jzP4r4CFRprKM8MqmjRYRt3R8Fhd2RL7UYMcp4KF",
  "key9": "2P5fc8TQpgnozfQ5JA2frJwpXvNWELDzooPh1p2JivLTv4A3wmxt3CmzoJc13xCor2pfg8L3FZELXbgTZghNzCc6",
  "key10": "39zv6Ph6nPvJoDAVeSXtk6gPELgaxj2NNgDfEyKzk7bumgpRSkCL7JbG5ukw7T9URUVDBMLfqBJ7dyWfxtbEngmb",
  "key11": "5aJoj1eYJDKftpjipAHMKxFS8dcvhdnC2LWdqHKhGJeYkEgPMg2gNWUyEcYHTtyKugE72kxLTc7kpETW2K7fcNxD",
  "key12": "4Q9FhgixKwV5mCVgsy5kcWrx6xaMWbdB2RbqyCQCf3T8okkq1ifEXEWx7zMBGHJdqRoYHZ9F7MQmLTvViSVRs5KX",
  "key13": "tD5Xy9RxuDgjUR1hPxPrimPZ2iL39TNbw87oE9FK61ALhdQPMjfM3EHTXqBJTNicjfB9dk5bM8BZiEMa4zgUsCW",
  "key14": "uph9LQypRtb8ZpN35hM5oqMo9gayNqjX7dQLDozpRnJQmc3TcmHcv6uwHruCTsqYVkGg7v5Eu3i8aMcGaCo4uxQ",
  "key15": "4wvvgouG1pCSFbhsEUKZG5U8wcv3D8M1SKwhf81XA7BfVjtV7wHp9fnBaBNGupBdBUnkniv6q5SB1S5b16nBcYUC",
  "key16": "2667P7seCJSFwviyu76sMbzaXXBPvTeAnd77epoUChtoQf9qCJyfcFYiDbnHCg6puit1xTWcQQ8kLPNgir5KNNjY",
  "key17": "34sFZqWNunytMDmzbq3T2RiF3ecV57vnoSP6HnRnCL4CMxBqAyYvntMk2qK7oGLeaJ6TjRPDviYctnJQWGyzhPAW",
  "key18": "5Jz8VShh3Fu2rjw7H6ZABcNmijexpUnfUDtNAYAAuq592hFLnokVkq8RetiiZqNUZfu9zJrUd45rJ7KFbGMSbTGT",
  "key19": "2GiUXHevT5VYaA5oXpj1Up63vhMr8dtte2Q1Z47hnZ3R7GvonpkvPyMTgcwiuqjiCDUGTTYytx2axxXMhsG5QDgU",
  "key20": "4Thkfw74RqA3LfDoPLPwh2MCUWnjRQzzAX8a5SKVo7NSGSSF4fiPPxiUgMgS5Pf2txZxwkk4xcFbMGAdefaEDFjc",
  "key21": "3LmUGZMLeTTEqmyuPHwKv6vWPsipZpsak54Bd7KQTyJXuVp2py7VmnrLT5ByGkUcYwQXkDkqwdbxpfJCCtZ3Yw95",
  "key22": "4dMLmWxUGQC2ZirDN3V4eXuuAwf9dyhWHgmZhhqTCJ6jTRVbWbu8EDRytu7XJCMPrwrDkfpPLJksJaArmp2rkvBq",
  "key23": "4LGmSJNEb6TQ1dFHSPFBMUXjnfuHaMiGb6aPxe8c1VHz2ABJTasLv8RBXUsqTCMAiKg7pm9jLC6Hgo4wiV4ghr94",
  "key24": "59anTJbNVYgvYH6jvu7dG8gZFxjYzgPLiBiYr8S6S1C4HYfC7V9py4npRnqzzc2RE1NfnPNX83jLvAFtdwcPFeY1",
  "key25": "5AyCo5RwkQ4KmEde1tgXLY8sPAY2nD5SLTa8yKUh2qCHvcbPhN2kPJw2Bk9pNWisCoTxwismC1VdaRk3ah7Mvp8i",
  "key26": "2dwHjbjNqJZptiDUeKEkEDahidvGkSvhJcCewi2b5z9ktNMALCxvbBeEkQmd4AjN2J6eLvnfV47Wp4E4r1vMvpeD",
  "key27": "5LJMBAXJ6eMUeXTMpP31bzY56P2oU49oJyBHEhozVNGdBbK6kaxxviALPHwYHFSPLaHGHgJrWjZSZvckuPQfLkpE",
  "key28": "2AcpLsE6t1JNEZn9R6W88MZ7uhktoWey6xRKHZqiagfNckTx9vzK8dGLmUT2Dyx3P8zKwWiJi4JatgaDm7auyh7i",
  "key29": "2MU7gwsE88281tJtjwPJzxjUK3B1vywDPGHWYyov1QXAGAKRd98tHwCPTmmeSNJQHmKkpADZs5WVyTmoPUEggtt6",
  "key30": "3TVi4iCR8w3QiLMoa4S3kUSqj3bf7r31YrmLPXFAPf7WT5SoQrHTWmBUtUwzhUwYVJUQr8ZM9zk6iALMjmzW1cXE",
  "key31": "7VezC49AMP7ZbcKpsHWD2Nt3TxPMWaY9DMeij4GV8mKqLVHToCp1J9YWxkWHW5owGE2v9ztBcfbtkLeXf3uM3kv",
  "key32": "3oUtbFxXPhrx9nBhsmN5sK1jGiP6A5jyq5LN9YDSvscqDC6HSUh8u9qS4GJUJxcUBnNShGshYKwbKf3cFQ6aY9Wj",
  "key33": "369547JEAb4aMjHVUrpxNhmBYMHx9E14porxj7dkQyCnuxfnFJAwqusvU5Mp2xEKPrL39T8G8Xf9fMEPNickrvyz",
  "key34": "23EG94fLiprwHnAsqkXdQf4Pj7iLgvJUJRm81amXJa46nrtnvmEnAVDDjGF2iJ4NhESJnmBQXvAoXGiahcWK1TdC",
  "key35": "2LZS4yTyicCJ6dEN3GAcf2sQbeCGyMS9DbnXtRK3Z3WVqFcrXCGutzegZbgrdZJhvuAut2v1dSYtviNkfr3GArWo",
  "key36": "2bxYR419iarSRUa5yKujCrEc9jrGK2YLS4Wj7QNFNrREk6QFqyN2bGzW1gPaF53T7hw1Jb43GFLUEEzKQKcoyZKb"
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
