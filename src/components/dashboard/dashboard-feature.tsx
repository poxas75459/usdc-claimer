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
    "2H4fiXWZBopc79pZ6jXkx7XzcswP78AXXN2QVZ7WjWK6mkWhsiooUYmaFUsCWms7iV2ovq2zqcdY8R9mmsrjFbe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oKaGoeNJYANfXW5HWPa2yvTbFBZwqMN4VpBYSAmpdUCjHSEWgnVESX1jKLrcYvHbdGFX3agZvVpmeAQ525u4shY",
  "key1": "2f8zimLmM7h4otHDyryy88AWqMK8nyPeDdXuUtayBmQ7hzUuH8JLXU64zARAkbrvTiAU6rJzkwW5ZcWRn97E73CJ",
  "key2": "2uaB8FuGV3G2cc2JkGgsLYpdHxD1Q7CEEEkWkrgRYdxmDMDAqduKX9pH2oxGKxGvXJ4nK3gD2XtmMQkLeypJWjUJ",
  "key3": "3Jg58L1Bq8XDv25xMMxySMM9YMEVCkMxhahKiVGbkNNmt2EzdRscyaoAwzWSbZjf4JeYjYTNiZjdmZmuZ9YBU8rh",
  "key4": "4ckxvGnkrCACaynPTRx2GVPmW6wf7WXY58hV34pWpcwmxNk6NcmMCN9upsmTkQERge5sQWDSPRuox8mBbSzMHKZN",
  "key5": "GAJoyYXcZxB15SJKmMNHXHYCSZpZsH9sanFMR9Hvc6EvNkbagtNFHN6TB5pqCQDWDVLUnTLRHDfdDm6tyMEecVm",
  "key6": "3iYTpEseonb77b4CVTU8D9Dy5hd5GupxQJhckBMTCdgGtndKCVnJEhJx2NMoTXTZfJ8zE1xCR1VUvcCk5Wf8nmAW",
  "key7": "2d36US2B9R1HjR9GGLNshhZiC9BhBRG2nzeFaAcQ1wXArNdA5eznyXkkw3XVS4PtJXBM1Thw8RBjxR9n7JZXsVBz",
  "key8": "5LUEW5A7uoNMQt1Vn87KGPpqtp2mLY35FFPp7ZEBqGyC7KdsZGKU1KWUwpcoB3Qef6TgUMsHn8mV26T1koJQv29e",
  "key9": "5oZ3YLSdUd2vyCsovGFNKPEw1TkkQAGT4LLERq1dysePbaceYTzBA33F4BYHoRDS57fhsEbrVh2WjWZSAJb8uRdK",
  "key10": "3t7gUkatJJS9ATurYePuTFopPtH4vJrbBJNDL1VFArPdEpEL5fp6KHMCX9QsCCo2xJGiqbEqpUdVoi4nNwbroWzZ",
  "key11": "2L7DSGDN6koURJDr4s2FQX3v4U4Vw5wqrbuKJik79wWyw3oiaC4DkzHsYZmKD99nberncKXwWBvVCRzmEneZQdsq",
  "key12": "38QppEqgX19NhbE1wSur4TxHFW1QwNkFdqLW3NnU6jpnhv9cGMt5rNgWo96SyWNqJaLyeHNEPXg9VLWQmbjmQMKb",
  "key13": "45dgkchg48bi9jsLbeFzmK3SQbPy6geViMNctBN2UdFT588nsXzC6CW7HrZ4FGRgwX4s8hWutHBGDgLDYBQT3E6s",
  "key14": "36QPae33g2yXpqvGdNVTTXhE2enFbDz4yDn3NmSj3dpCnVSHrzAXjcgzUhn1wZKgueQMfS9vQSxVfxto3zdDpD5i",
  "key15": "4GQy6N9jWmUJ97CXm4DCdy6EVx8D5H7ZPgLfTQNm12UzvKP5xbvFaGFCGW9VYN4SgfqbV6JTtWaAnBmQex4mKBAd",
  "key16": "4zyvXDtYBA7nEL6ujnkTkWds8bx7XX3ei1PRCTGqCx8v1brg1ht6SJqYoBjkBgveS5DuGdGUcVeApHkMsAhbkwz6",
  "key17": "4A5Qk1JDR37Wp8hfPYZdkv3L3wdjvuVjzYqeZWnAqaAfRWX32XmbcmtppTNyR7CfnDBJaVf6PBDvWu6m1ewTEKAJ",
  "key18": "4tric1s9nBmpvsBVH6xJokrzQuCjVYmBouedY6sKWZBuLJrPKh6rDheQZzGGU1VxSymu5TQ3yXcFkiuJ1FfNcYTn",
  "key19": "48yh47HZkbQK93LUcfLDXDProxrjou5JRfsAg9dupcemnM4bFxMKMqZZgtjQ2KvpaCsi15BiTbLqgieRTiwgSCg4",
  "key20": "49bs1BPNbeC9yxuCnGGwNvq1bqKaXMHQzMqCwwNs8QViofBuK5SAQjbQamoiRWikNjUM4AjN27pcHTUfP7jHb5RB",
  "key21": "3VcJv5BUq145DBCMszQtKs6trf8Th2NN8RZdfpjZo6niuV4wWXyDJ4dD9RZavPMHUzeEyThoEmKqR6dRmkikpDBY",
  "key22": "4UvQz4ECuRCJ8Mxssiswfu2ghaktcWUDFPtBR1hZ7qT6Zd3xTRWXJq5XAofMaJXPbYQd4vLKiSu2XhMTXyxVsChK",
  "key23": "5A5WDE9vGkDQg1q4APtdTYv1j8NP52BMN1WqRn5Fp3hAU9Tbto242Q21j1Lnm2vyUzHCTcwieC1VD8iNppLVQZrv",
  "key24": "5QrXffPDmcZ1rdD2BU1mdSBjmGM6r4ACJ6ju21fR1JWtw4mhzDE839Jt6LHSLwYNQWxkzNNtyKi3DUnWg9pSNdFM",
  "key25": "4iAyGMFeC1mB2D6j2TUmKDSN7nECGK35CFYfHLBgbAkc5GzGKwSX5WmHj1PhKRRKoyd3t5LZMJ2DTHgsCY5saPe9",
  "key26": "tTdyUD7Xudgqo6bmyaXAGJXcnsPHHMxrwsRpPW744Kcebi8DNesdfQXFBNzKUAeLr4qWsdCUfCUNo4oiWb3EDNa",
  "key27": "4kiG56HYLowmaBXW5sFwBZ8i2K1jHuDzaMALSMv76cmu7HHjy8MzNEjUygJdPEJuDhLNzd4MH7TDEZXw1bFjbKKW",
  "key28": "5YssA2rpLJLY9YuR7arAnSwyZx9yrVqTKAQNDuvmSJN4ZJJEKcWb4mXn22ofshrD3r8qzeaMJgZMHU5DXZUAEXPi",
  "key29": "3mxneg9sUbrh1isWkLF6AkMpZ7KqmtJo2puNZSovj2dLfnnqx3gdjtZQZYyhn83XYDf8QDYMf7tUYdQcn5ZHimaN",
  "key30": "4Yyv1bfqGoLteX9C4PRNhHngvwk4qJbJaTxYSwN2rkok8wFatE61wiGufG5b4P3FHQsju5bLohTzxGFKzuAwrWND",
  "key31": "5bwqxt1utEPt7jGbvsfiXmApRsyF8Fj7v1MhXKDMKP2akgtJxBFScax9jeyfnH7J4j2NncAAu2LRAS5mozo55LjF",
  "key32": "4bt9GBTdJ8UPc6iCGzTJTzQG37mKo1r1JK178mWVQyvhxhTsfSF9T2xukeFLHiGsNdzKKB1a4n7BoxwE2ccsjxsS",
  "key33": "2bD23jBL4GseadewqFcFFuYBwyEUgRhbixQksvHsCmoDZrS6s9qYFUgnwEcYFPjUYinAcvJEq2p6XG81zWdg11uD",
  "key34": "5P7Dpe9xa6BHPz2TJPKSz84MnmVNMzDc1EDwQQJdMeJWmfnsAU9EHQuwxezzEDNQ1hLzXHVkEGwKgr7mdRuGdfoK",
  "key35": "2HveSDAu9Rp7h34hxCHwxNzP79fDbHApg9Tqdh4WLKpQNJU168eXjauTfRJ6Q9QaVqkAzgo3Yn5dANGDoHwqCNyV",
  "key36": "4of7on1rA5WDzkGetXbpWyNsgpAsD7uzyq8iL4QMhWMTUbKFvxF9cTaiFM18vx8RNAg7qLzK8TiJdy9BnFpAdSUs",
  "key37": "3wus6vEyzWYDtdFtGj9VVgzmRBMxURrvVbrnB1PKfztrhBK3pWWFirYVVD7KAaxup4dA6swa8tfoWpXpnjF32S4N",
  "key38": "4rV3PcfAfP9DG1aNiEF66L14iyK8ZEpa4HHh1Fw1ZEYtKSLA4kUYCCRaVEMZBKhWnnXUkdknq8WqZz9v1dnbhTVZ",
  "key39": "cv9vwYKkG6rbxV4P6gdbg84fsBtwji2Dp3xZdYdfpypL5LNRZSpG9SSprqhqnXS7ZPupgMVptSGhQdDpjRwQ8Ls",
  "key40": "5BWtb1XfJovUVFXdD7duvJeedG4ENYr7JcLidizjvARQcMvYb1Lqzgiv2UtuqaMnvwHnSPCweZyXFZMXywpdFQbi",
  "key41": "5RLyJubwGUiFQRn6RYGpHhb1aFMZ6APF9Yt43heTK28pVd4QWpbiL84xXtytzucj1gJ1ECvevtaDoVkJRhTZLmbv",
  "key42": "PHwsQiawVeJTpr6hJPQXkDUEoRq68ucDz4VyELP3BeeVMCvxQ2FvD9KrBRS5XMWTjxPi5mYtEMPjyV7REwVUTZZ",
  "key43": "5DDMmbiNKfti1RtP1huSaJTnYN4aLc8SCYgYcZD4uxmeQ4xax5ojzRR5ufqp4yUZJgPEKDbisbgpR2ZAyMpfJrih",
  "key44": "4B8RwQvSEq6rtuJZnmvGNwRBM5T93cDg91UMUn2swUtzBhSKPn8shUqF15qGBQgpfwHkXysETZt9CrZheLR1F3xv",
  "key45": "4ZuPX4WCs8RpExfgGr8wjUMbFzn8osSYP5arwdBSs9E7iQr7UFW2KjAk71kxhCkHYtnZ8uoNsUFQZ5zSB1t2t9zA",
  "key46": "2Kg7i6KFmBTE7t3i7WYyEYeXoaQgwn2pc7Fk973LTdDQrMvnCQfJaxBGBU1pi6uKPJaaxSNyq8Ype27rFb6Apia2",
  "key47": "4oE4oUQzJbzZjpLiUNh9KQNtdN8hFkjBC8SENBoRdwL4k34ik3ppcLUJc3ZT4zughjwFeQSNbkXmv2aGnf1ncxGQ"
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
