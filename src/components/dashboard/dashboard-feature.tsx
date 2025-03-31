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
    "5tUrG8XQNnn2kjzPCFDhrhnqTVxJXdXDPNSSNoVMoVLP52EZrBTDneaj2DRmXg8ddjuAJb71P5i7dty5psR1wpob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtumpCAic5jNDBdDdEeoN5FLmFXrgPhmKJ2saYQaboLLLKNPrSh8Vzn4MK7F9yZs9ZJPJnkaifukraGAP5AxNPL",
  "key1": "cE8ywqEpjKm3yodoaA1kUtxUs3c6mWTTqBBUP92mLzueQgwJSv6Sy4SxZ1q6Lt64MVHPdPj1MVbKJjMootpxCGQ",
  "key2": "5iiKazuoEobBHK6zcXWTEEUBym4Uq9xMoPTL8x9dLFXuTC8EVgWgDFf8Q2iM92odCwjgeRV2LjDNVF6bwQRigJXZ",
  "key3": "4xAqUNL7AJMdNciS1K8aod5hMLeukxvJ7n7dCGoPrLS1hxPioUCPfu34gHSLHXsHWygxv6sdoeCurcudAgGmgDs8",
  "key4": "31CqkRUf54cYPqPMBe38M52j2vNmHsGAJ1zc5zWV7qewcWUHhdHEfMxA5YPFGiMyqCnoMRson4KaFHE5ygjixEnw",
  "key5": "3uKttcCZT6P3n4c1NRuzEASKoUygVo4dMZmi4wiGRUYy7xBhWXSqyniZyKp2zTo8ydP3zaU4gkwunvCMd2MNBoRF",
  "key6": "63mABbkoBMcmLrBb9iW2jebPhp4jMZmRFN9RFNK3WTXTL4n91uC9ukeNF4xQVNYqBDCeg3Mjbbu9g7va8VNU7mUo",
  "key7": "4Q1Efg2QadxCqVGbPELtUeXDHMtb3z1R6ffDYC6xRoYLoVykFs7Fokn6xNwfp2WBstx8ejbEMFgzynMCtxDg1Kpz",
  "key8": "5LGwm36tsrf4wvchKBD7NiuTQUGaFH3zD6qMQKhzpDxSJrabgvzayAKsPyKaLAKBWXyJG5c5f8NFesf1ocVZd7YK",
  "key9": "3Ku5ci4uTNfRnnbsZ6A77SB4oxCoqXFT3AeeGMqx9CAngLLkwKyqrzEqb1YacPP3d3mVg1E6FwhkvERxexiTECbo",
  "key10": "3UZq3aDYKQmbBCLRS5pAXkeRwozTbst7sQ8zG7NszZ5i42ZbcCxa1jVQCDphFA2Z4msxzrw3c8RZkvNtkfepVtPb",
  "key11": "7DNnQzvKcpw1sMAuVXWzqhvSzmAeGsDUPhrE91nKHsT4rmG2JEs5NXiPkzQCoBArFktf4zDeXf4gpQCZj2aLwAS",
  "key12": "2uiNRZ6RPUqcVD4Q9nazytHj4kybJj5sVToteuTqvWWABW71X1nfi4o4gYjgX7Vzqf2Jh2TS3Wm27z9h6RJr4gi3",
  "key13": "3crsot24Dj35pTAoguZqZ7qev5ffD2FnJ5ELWNmz96z7r1BNfBkohW9KzXKyqfZ2N5tHfyfAmZAUGZd4cpM78kWv",
  "key14": "4aoFxDANUq2WVadwAwJdbqRWdKjMAuWQ2bHYaeofuin4QKUji5rbhCGmv5bYBzYfeTD5H2un31K3mj59xBEUfjye",
  "key15": "2DFe1j3Pdqpn14W4jkoAndqr7rQ2r9DBrPYyjBGA5VS1TQKHvivsCc7LdidsYPZ1eXkDnLXHrA3oL1Ywt216SuG2",
  "key16": "3LQBu5oF5T1cVXtXaAGabK3xszgTXgM1cMipoQnj4igSZetL4X3HLwc7tmB2RutgnfJQVnfYyppurPUSetbAK3Ej",
  "key17": "562t64p92kvNHe6nHWcp6tqdLaPbtK4L9eQcA5JaogCg9c6SjfnR9hL5y1gXdHYtkT17qBs8naBnWsbsiqUSHnWf",
  "key18": "5ymGCPUVeUFoPHQ3B5exVmvuMACy63yaDQYZkAMRP75pg7FD4TfeVpJw7S3fCHuwU6NpMm5cWSAhdhuwwW9HbCdf",
  "key19": "4AjUjdrY1cLK5WEo5D5eiZJMEotLDHcoLRQPNDDV46SGgjv4FnCodcJufT9YX3rHiqYjBaGKj8bgjo78L9EMZ5b6",
  "key20": "3Rgx6HcbcYNHPKA2AjgixpDn2z9ixv7PL9KoPXb6EwJBNMiZ4Sh6cmrY2ZbBmgL9YcKF9TfRbkjr9RJT5xuK28iG",
  "key21": "2kPV8wrkrHYJpMJiRPknLGtHA9xUB8dA5AzMT7Hex3o1aDUqk1N2LZwQNq4SatoRL9GbirbvJsbzSyFJPDrcHDFc",
  "key22": "5LoN38oqPBzULqqwNDgGEJzUbgL9YhJR4WVhyQ9r5aHQk1oTzrqqEcWS2uXb2DUFdy5giAqcP58PrUA1FRaQcpVp",
  "key23": "uXFn6N38F4tLPDjjrv216QZwJ4asjhztMQfe1F63ZLJW8hJx37tX2N7ygD7myfYSz8CdNGkw9cqWbaMYAwWzHCo",
  "key24": "iUhp1XVMHwa9si7Hkxy9A18gMv7LeszBwXQaiDu2Ejdc6Tzn8ATmque24sxftnSuL5oLaEHV3ATF7KGwpTQ5f2a",
  "key25": "4yxzi76PuWApNZMwqD9sk6UxEBEequmbZLyuNnqRS3GUTMzWUCDDpgyY2GHs4kuEiuLUuEcfu1r7PBSzEXwUyUSa",
  "key26": "2wfu67hnmRnSAPn4XPLdrCBMviSaQvFfQ1p9RZgneZ9JBhcyisU2V5BTd3J1453JSGttro6jb5zfKUS4EDN1MmYB",
  "key27": "3n6CizgXZqgDUDd9hHd3LTirbBfkERVSCN9qzEEVen5LfDN2kJYscZeDkcVqi3AQUYVULjqLWUkKQbGJoaS5BiE3",
  "key28": "4dJFjLvNcpbrULt1ABYkfRDc1HMMkyaBfX52Cfc532hXrMZWQdC4sqFAeLcLVuz3XS2PnPe5mTSQC3gJDCMwS6dN",
  "key29": "2YW4mYj5yaYhrafjKnzx7sHL5DAcHGA5d9rSCKUxxpFSwfVaKTmvycp5t3ZRKpoeuruWaNNcemK2giytTYgdfp6D",
  "key30": "5TJooNBFieDb72WyrVitdZNgqzCo8b6b4JK73zPKEoinGgGLrU6ZEnLFU3QWNaMtKcgCnat8JVtbUyycAnvwKQd5",
  "key31": "4fKEbwY9A43NBJx1b7ZrQd8DzdupGAB2kTCbkJ4MzavnzHSWRqv9J8VHFsMnE79As5ipmxWQdjx9zKmcCzxGbvSe",
  "key32": "2bfQiGk2wiRCaTRHwqggjQuhy4HQharPcCtJ9HtyXH2s243KiMVQAMAKynBXqtCff3xv6UoE5S4E5Twjuq9F2eiw",
  "key33": "62K3DKSbmuw7AUCmDGoN1EBM8JS1mSd1fVWjRciLhHqbudDQZku1VYKeUjv3yKkump7qKnReVfb36VcNpVeT118",
  "key34": "3wfddxV2eLkrrD1NF4zcybcr9LD27PHREEcdG6KVBymweEXiyNjkBWtSzvFgLpd7Rc7b3fHWk2V4tavarSfHwVcd",
  "key35": "5AG1heQieJBkR7HXskXfpdf4Ka71aHka8wdCQxYrwRAnPd5V1SZt7dpYXgGbT7UNnKK5CJxEthTo2mx795hpGjRo",
  "key36": "3iv7PJvFip8wkBRYYAUrgsq5b5gt6dkfHWnQFUFHRHxQdaDuro6ff9ripsWsUy5KK7RCHzbcLcPUQ2Hfpo3US2AB",
  "key37": "3gE8VGXaqnuumy1cCLXx4mLUosE5yBddKcPbFuS6D2MzBT2uCXxN1b6iePzKXot4tG6G6HSE3oSU81ovgAvwSCFU",
  "key38": "5H2S6ff9bMmdFXGXT8XLMH3FcdgL5AhJssrFe4UUnUboGUR6WP5V8qPFvfWZqUQHgt5HPetMTvuBJKYkgS2vejvB",
  "key39": "4emr5q3Q1ieZLvK3LyGTYbRqjDCfzrJ5RsryDJRgmd2ZRSpFpRocx4QCpA4rzbhazY18XJQqh7ggVVvoJ5wmaME",
  "key40": "3WTK5wvU1xpzrYqLdEdxztHNrotvn38noXcn8dNXpVyouBVQZ5XmzCSecMLcqNJ4CWcoycMQ9Wx4h8kLvsKp92vS",
  "key41": "zEiDs7RimHgmzFXFt1ke8XyzTY5hFEhN1UHA84dsjG5hsocTzTGDVTuErC6mJG7V9s389cZrpwkxvLgrESFHYj8",
  "key42": "5JWNBr6j3QyYwyn5QcBuiELEetpBxw55sDmG2Sgxzc5gCYCe8VbJi3AxpYZJx3NZgxyJSRoapWT28923VumLTvPu",
  "key43": "5LW9bJCqCZ7L2MrngNhLVrnkDvvZ6M7KpB2JHmdpj6mh6axey4naJpg2L15noGYcwhJtmGGH6EKKG7toovHr7RWT",
  "key44": "5e8aBYEKN63e7HMaHAPV4Poj1cEFdBnX7fKjqwzmAJgTE4fJBzvcFuPu3g7W44StdwE4R2JSZjWULM4NsPsz8yo8",
  "key45": "5wGd3NKVLuuTd74L5LfASN4JADhrv8myJ7JqvqR7PVqq1CRWzXt8DLi5JxGrNLcqBkb7DWxxGDsZ8injF12Gosss",
  "key46": "3e5RvBwcGQfeZVSD5njAQ19frJNk7ySGBm9WJtXK5CGyx9R5vuqTVv6PfiCZ3bZfRqNLrz5jCFv9pxGb5AE3wCTP",
  "key47": "2LZ1wzn1x9Zwi7iUUAdXRhJhH3FNVvBEaH22WCsSib7JpR8UCeyn5vgQPkyK9njyQrsmaDHQPVJqg2WAmK9XV4wA"
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
