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
    "3zb8DoBFLGcCFtaJBDt2WnudDdG4CiHfTDPQUwd5hKBsbYpfLCpCtTF6iYXAETgtQbxs9E9XLHQ1rpafE4PpGRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YmooXzfHZ9EbbJkgMgwkLh4s142bM3DB4Q9tktMV2Ja5KuuSdSHGXg1wXaMZWwnDsXpVRtLDDthNUkRicvLihq7",
  "key1": "5S3a2sTbR9QGgXQst7nDYQjcJGVWG8WoCX39Ehb514kKiYrmB8Kqgm8ZAY8Fxa71aPVyTHsp5ExrgNWYGbgsrPkY",
  "key2": "26cQrJFyUS3FSf63VaNpb6LYibiorrnXVTEDbHeBihxdpoTKHvP6ijD865DF62QcN9GttfrPua1PkN3YSkQa2uLs",
  "key3": "5cBhtWqu7cyjFvpmQURE7c6Q9GcpAM64AexuxUczgWbYJVmMbjD48rG12fYMniTpUbJb7NPhybe9SV8xpysatT1q",
  "key4": "3hc4ExWYNDvDpBupPhedVLgq3yMncFCmcZhvLyak7orQ44CXKgttSRwNtngPKDj5eJrTcywE84HX5AtXmJC3678r",
  "key5": "27CFxbh4VAKHbvpn8qo9W5t6s6Etr1QfdqyjyVnrwmnewUKwApuKqZ1uoPmxtm8uwtUjeXcGt24H8KJhvvuxs2Ea",
  "key6": "5PvMmewVofLs7nhb2XobyMnG7Dsi3wwaQwF5u7XM6tTnQB6L8hRqpwovV2th4hNNsyJa5A1TkhR4pUBfZK9DFx8M",
  "key7": "3W3bxMckxNTfMiEs3eTF34ErQxRRHLgPkUHYWkK2fHxnkjs29MscpJ4gwn7BRy5jjoAnj1WxbCbCD4DCSpr5HuXo",
  "key8": "d8xQc9Jwxg25xTfoGWFTvvMZd2kwKcENzXgMHLsLTNZuNNQjrH1U6HXxVzZCt44J7HJjHnB63KLu7ExpMA86HKt",
  "key9": "3NBDymTd6K7JfyrvaXLJJ1BRio7HLxzuo6bec3o7oy3WSwPTXrZqxckuCzkC4vXa3cGjGAixvngYi3TjtPfheMWK",
  "key10": "5tFjkdAxFhfMnCWR9D74Ntpa6c4AFig4atoquuGxqHqBYH6ke9RjAVHYwEnTSAmeNdg9E5GiuLmNYH32hb78XWwe",
  "key11": "xGStRs5cDPxeEbzNMXSfYGhmXMSnyiToKxbD3MkD3YEoJ7QUZBQkWqffLJB9NjKkYDpRh2jgqSL96NHDafJTxJt",
  "key12": "rp4ofHS54XhySY3ADyL3EZ4p7M4FoRpB26SWzvBakDWndkQRBmvDmyFvFuRTu9Adz6hwbffbDpeE9rfHXE1aLND",
  "key13": "43AK7EauQgWPzcyyVGyJYDzNMMDPbyuRxJsXcuHQUA8kY5RRwp3wF8cjmyht7Lh3BaVBVDfYBWKNkFKixZ1bAMSX",
  "key14": "ftprzrqmLTUu777FKGP7KUkgyBbqDDuGA6e7AfcjZbX6VvAdWUhw2bf53rCn8HqBsPcz6peDKcxjSvJHyAN8cTS",
  "key15": "3QXJdxxB5v22L3LHi7ZL1gDai39kbAswAe6nhiKYLJP3bCv8NdbzFwKf8rFJ6odMpazBigctSe5wRCB2CHyPwUid",
  "key16": "UdJr67NiPesrpfbbcQUK9ve6G5aituQbi21jk4LuEugS34ADWu9fQXKkERNtyQFFL8JuaDEaiNLFE8TzoBgVyM2",
  "key17": "kVmQ6M5v8vQRLFCvzRgXoMN7hQyXUsD3mmVhDPsF99h53Ncb7uYCcSoRTW6KYaVFxEABhZ8Nz8ST1Lzti3JMzVi",
  "key18": "4g8aCMKCxD5zUb2CkP5ZKqjEPJgx929YdwnGwm2CxKmoEGMupdSTv8tijuC3jrbnV69n1u12NBeMpnHN95HByZmn",
  "key19": "4AsyDwXWMpDkToVweJYLnwHumcYmZfYGYELwx3XJt7peo7BG4xJ4ZDT8mvEeoxSiw9gogAmbmTah3tvPmrTxzdZ3",
  "key20": "4HYJMYxoeEjHtHnJXyR4HnzmnDa3Fv8UNvwyoG2n8XYcHPsG9R2zA8kK5MEb4d1W2dGAcMSk44YSjd4YNe3QM7u8",
  "key21": "jUTZaCgifrXL7gAe5RZsTdDp1cQ8kBoGLnHZfvf7UT3kAV3gsX6oGi5uTb3JoJFCqLGxkvjuKi1NVu6F9KhYyTV",
  "key22": "4ESmWUUy9ouEWYa4NjQHYrBMkiaSqxUfHELwf1h1gJafyn6j8v6ABHxyQEB4beLz2fLsCiUjQUB8jT2gz5LVuPV8",
  "key23": "27EfqyytEtkm9WNxPfn8nwyAf5dr3wRhkcYb54KZG5WAym7wrv6WXJRpBk5jzQ85gkvvCtr1pvrw9vUxdUjkVxUN",
  "key24": "3LaV9ZYdHsBouUhpVhtzjBsXvVtwND9TGPDSN6C2ayq7HTMiFETp6fzmTwxFbWBonB2ZJXnW39DUS5D2nR3Zetow",
  "key25": "5caNhraRcKg6XASJqRnuJeeTNssWmzisubheC5UJVqMyBCLXaCY6jkaR6UPRVexLnwnWCJp37ctLJY4sZQqwmMnF",
  "key26": "3cGq1bw88qxq7gLi4MhQ3fXZHpYnTgkNKdEXvZqPYGkW8nQPEiTxGorAPHAwZDpyMHsB8BesTYrdhuYRBAhHcdw",
  "key27": "5gka4mhUmUzbrRvp353ettKgDN7drHZkjE1dUVSohE223UwU41i48QLfzSgNCnMtRN9wN4vNpbTw5f5uAEMXdH1S",
  "key28": "4ZEskqnsMHGSyegxXtjRvtAEWzHh4SQzTooVCnHwDkSApyGu7nyjH73KCBABHfneaENWZXRptUdJ3qZjaDYWRQEV",
  "key29": "5UGYH7f35xcHswjxo6mN5f6rowYnWSDm1MQXt6MGhVXDuP1Zx3ttCcHT6zSdUMDh3jxfZB7jQ4MfjrRJpFChifCs",
  "key30": "5bma94dEhLCfPh6j5sL5bnDXWNyN5sfQyP9dkXKAT6RCRcpTuaDqfhdcwGY55Yjeh8Cipfe8txB5mudMQCrJFq9S",
  "key31": "3g9b7EXn458kQdxhuEj9r27jg72Vxqkur9eFVdYChzjLvGkgjsrr2Tyh3xzeMQKPcKJJXe86qC61wUK8Skk83xCc"
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
