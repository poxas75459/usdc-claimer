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
    "62ZgGrib72VVzvArRXz33WAhd2QESBTD1LEGRyGbzL5jW9sr8Gj21mESegECJ561dqowdjPb9NUKP9k84WzB9fWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GTwMXjKd3n2JEP7vhQFC9iSskkEwfvpDn3SpnLTMu1tXfr2H7DotK2ypdHvYAqxDWsmBMMpUhy5HSKRuRTWZQZH",
  "key1": "3ZnrfkW94VopsHdaG6YKpKWeXQCrASGvoFZdCMkPLtbGWbtN8XHWz6ak5XXEEZUuQMrxieWmU8zyYHrWMtRHsfYv",
  "key2": "3xQ1i5476fbnBacEb4ZpTNsa2Wh2sqp8aSxNsFsuoGqbj2egUXw8ULdACVryMA67iPbgUxbef9V71RpmrzPaXHJ6",
  "key3": "39FZsYKVYR3ebfHHsgojH1jNQgpJ8VyEHCMgZ4Y6XgCw6fVRpeGsW333U9r18DGJyPmbhBXkGYVfLBTPNRpjdbiN",
  "key4": "2fxsrTGFdym75TEXyqg8r44XGPD4RPNFH4D9a3wJ23XyEMnskEdseiEyxbxMpzAVAHMahEHEL1xpTNqt18EJeJVX",
  "key5": "DbcBA9tFqoiUEWzLJbxJgVm6nHtti9kq5s7p1jn1SeCqv6gw2UfcHBeBAhxRMwk2HuyTLF41xxiFDYRozo5VT87",
  "key6": "pW37UYjHLk7rLS2ooCuG7MP3jKdKxXCUt9EZqY1TDCA2SPZVqQ91Sftm6cewGiGfqX9ARxMV9FMREXbTzoLdFVv",
  "key7": "ZLz6QvoCwU1iZyNnUBK3HY3uDUHGFpHeR6U8GczNvjKbcd4RU6kiLXRFKnCGfWVKFgmvBMK1SSG8LDKPhXxxYA2",
  "key8": "5Xo3e7ZYksBWiMHnfv3HfQBJAW2wKTAhvGiVPJya4vhuQWzVcRqz5JasMTrPEHfZnGXtezgDo9XyT8JFAtGmaDFb",
  "key9": "i4wR9SQbYaEYsoN56tFrfAJE4mu6VwvARdC2WqZyPvsotngSkaybkZgKykzmgL31MjJuzzq3ZqppciiphfTPcmU",
  "key10": "5rKHLMrvYWvRvaDcbAvpLqTV6sUyQdzHcumUurKvda1CLg7FmHWAhfwmYCtHEgMjdkaFzngaqPxgdcahemoP8wjj",
  "key11": "53s41ueP9HgC28dcT4UfuD9m6aNLv7s9eRVuDNfamrQuX4kZnF32WGq3Lw5x529UyFTbG29Hupz55fMg73PGfeCA",
  "key12": "2ZEU96KLXjkGjLTLphQTdfYM1SrB5gfcaKxHSxnCVeL9mYosCQYp4EEfeCVE5Wf5MmzPTtVb36Xw352JqQJr1qMX",
  "key13": "5gtyPHErv7ixLvHvBUyAWjj2j7BNeMtXebcyUzHJ4EZD4d8W4mML3f7QdUiAPoSFJXmuQNiT8zo9VbHPYHBtPqwk",
  "key14": "4rnAHqtTJs6Lz1YpiP15RDTMN3Rjg4jNYWxySbkBwM6Em2X8zfTFkQMacactLRr2RyvXskPpYUxHQLaffBWJ9tMF",
  "key15": "2zKswmMDo1UmrKCN59gWcE9sDgQjFmysT7GYpr5EhxTGgwiNApmnEPkUfqyo2jUeeFvZTCs4dwvabdyStKxPzi8D",
  "key16": "4xxZhZJoK4M4vZtCSxEYy5cgCFtdTcgWZpKPA8eXYmEuPjB6RLupEta5o1d3isuZaSzxNFEP4p8i51hxkqAWidmc",
  "key17": "FiwGvBzoKDyyAFMugJ4xJF4XEsBvrQbzybbMw19rL3tULCUrtPjarKwmUPvb4jMpsd5Uzo8rd7w8cbEwZ5ojBje",
  "key18": "24z8emVVjQYKt4hjEPZaEt6sngteNYcg85Gh8THTLCPoRsqu7Qym8spg6XryCVcUGcs2aTUK2Hv2nhnVKkPJddsZ",
  "key19": "2JDhKD26Abz7UFKeTLyzWX2RnUsz8bvCvP3Bpi5MqNi9CWsZxpTbpLtYC5TQZZLGybcSFS28pEHcTyCpYPByLA91",
  "key20": "2KqwTCv5g63EyJaxxLESrpKGFJeT4DaG5MUXTFNGGLxfVFs5imDbmLivPe3Y9hdXpWdJkQujdiMAy18rrJjiKRg3",
  "key21": "5bJMvYxtzvsjuzousDnrBQewMDPUHSM6UtVtqDX3dRh5QZRPZPTKpKkrPvrt5uM6t5x9CGQrKxrJgE2ptgxB37bM",
  "key22": "4kdRnxBVghWRzqu8De28qFMbXMUQ3sDxwcXwm1w6keNsMhD56USMi8qibrZewqgNxUTKqpxajKf3N8oMTg8Ath6r",
  "key23": "2QkYDUL7uKT5y974VVLXtRsgbXUEYJpeoA8BZgVemJLU5gmVVt7VU9JY26JWnHusM3jL7CbC2HDCH5ykZh86NDyF",
  "key24": "pAnkfs744aumZatoPMLJEHhi4Yqp24kaKr9bdPoRoTM5U9xZtrdDJZ97aazhqnDWHZDsHbBRip8upgqxpkN4WPy",
  "key25": "3fXQmomCkPKpxhBro3StuCB7KCpU7HNLreiJS6nx9ps9NM71gqyYE3oexzskFtZ4vMmeStjCfkjT3oB5kYx3bP3V",
  "key26": "2dzo1dGT36CL4onhGDHyJtGYPxoHKN2rXT2DyrNNt7vq7cPU9enGtjyETG5MTCGhWgWiKQ9ymRvt69sVzKNQSG9f",
  "key27": "27Wggzj2hZDtEiAHPaztSXc8hDRLu1uaVK24CiWFy8b6Spx6a6qZrThTXnk3vdR5tsP3qchjU3yRY2kmvKFymbSi",
  "key28": "3PuW8DA4nnKkw7b7QQ4DWUsjnaBgHUpoVSaQfQoEnBoTKC68ySJ2vLb9fHHdQmAAVJhKZFWGZPbhpN3zo9ikwcSy",
  "key29": "3TRuBbF2zo5XHRJGFG17ii8Bbi52wr5AmLxbDLLZnhei7ZLZVgwtp2GEA6EKkxoC94PKESe9v6UfmFt9J53XXkun",
  "key30": "4LW4ccFdJ2S283qjwgvTHn5e6qvHuuRVNuebg5eySxDhCQrKBTsyyokvjz2WDeAXyHdaXcZqFvbnLyo3cJ5fKft",
  "key31": "3baP3vbr6f8BKsSfxs5GrfpXeEpSZLKvDUtJQUtmoDvTnbTrhWGkYLyFXFR4DzwRHmyrfbecLXqWBq3Axuxz3EMF",
  "key32": "AthVnPUX8j2NZgnPgSFJRbu5Dko2bRpFKpP8on3x6BXMveUwt1sJ2TP8K4npg84BcLbtcvaQ7pFKidKxhxp68bn",
  "key33": "2ar9CvUcWzsrM3ed9AtdHktVAWXgh2TvDHoC3KYri6dgnsHcqLFg2v1unmbXr4vXST8NbGoxgqAagmCFAirYQPBH",
  "key34": "2v1atir6wDkaaoWkZ31dwhb4Nc2csKf7qqejvi3NNQHDs1HojuJGenHDKFKAUTcYEkj5rkEJrX6BPaYHvpc3GxdH"
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
