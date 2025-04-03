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
    "4c3uf7qTmSTe5xkqk2vsrDnLE1VJPMLbMcfFnora2bmkDqzfyhoCir1Z9mSEcYdqYqkpP4SJuzFr2DfTbTpMtVBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gmxfwUqDk42iTa1BW4Ki5pxJTamBCu1dCFdB55UUfH8rXanuQaYoi2Dkqa6ij941HFuQ6V5zp9xcZuvAR1tNhQ3",
  "key1": "pdcdkdpYzm7gkbCt6jUxtPgmUAJQmx8Jc9WddbcvCbkAGnC8EXYtGL6BGL5R66dhQ2heL3cRX35gSDuf23hRi9E",
  "key2": "5UUbJfnjyRrdjWVom9FhAnXnsnUVX4Q5eUcg3JjhamPHqLJaLUfh142Gf729TcmV3t5c1BwhFgmKYywpZczf6PAz",
  "key3": "329quNg23awXazP2o5DRG13x1CFdsZruMkEhAtVDkg4yhD2Jn6VTjd6VcMbKeDRQg9s9oNrmZWMpP4nAyYXLAPmn",
  "key4": "5Ea9oNEwnghsZ1RjYiEJKneYSf2MPfQy23jUCDGuWmuNVWv7qsvn1tyZu4sVmG3NwUHiMhd5Z9FHi4NvFwESwKTf",
  "key5": "39sGKmRhA2ExWqdSib5ux3DQmrUbBTwLxP1ZHSTDXwDPnEHCCHs6Mie1wio5ZTbeQZRqGne9aUzHkpYH2VVv2n1d",
  "key6": "5D9u9RRMZFDgKFj1qtfsZnRZuh4YKGTWDZjsgvbAHaPAwMrKbTfYLfGUH9mZpV2xNvNRcu8qTtai95nqLU7biEzX",
  "key7": "YyganxcSnPWbGLbEZqyn6tVfduJACUP9FeT2veYGYbgyaoqbvorePmLAVjvteAxQtzufeiigxSTfZkt9cH7QDfz",
  "key8": "cg16tLPnnmZdjqdJ42hmsZeq2PnWJ7U7cFEK5RxV9RR6GxTT2tED87JyrsZEkyTGJ22EsnfdWYws2VM2hqjWfBk",
  "key9": "48rfuCpXoGatQ1p9qXMLM8MWWA82HizhFQWkhywKw9Nd1esA9dWnYqfohk7PNnafquAX6SNqgBpFBhhi5ttGPvdR",
  "key10": "4dkgZLBZAbfcDowfcAHnMM1pUJJtpwGvACgXGhAQ4Z8F3MN3wS8dBy5UA8Z5DbGFDn9nkjYiiafrWwV89DxGZnpX",
  "key11": "3257vQt8TDkWPaZxUEx79fkbc8sQSj8PtbmqQdN1C2z7uw8voBhzDtHFYgpbv37Ai5T8ww9v2Q7sCtJCCoexDzYY",
  "key12": "5ifZes2w4Yh84nUkC3pDuwjZrVHGaqJxAUvzYbBnRBNE63xAUivqb5A4ZCHimBXfhBFdX8ojQ96oAQcHvBzCpT4K",
  "key13": "49TEwpoQ3o4sJLvGpu3S2R8kSQRdC62xou6By2Z3VZGtGAKskfyJ7vqy4Ty6u6P2xDJ7mi7Qin2dWoyYtmdzgzeP",
  "key14": "67SyAp9kX3PVeFB384qCHTJmYx83bS9ErBsZD4Cs74uDZGaZSWoZzGWmNmVuajiozhbg5J6z7vzYWJeyP6hrebZF",
  "key15": "4oFBJnnreNKWKou3ENdvTHtEizUBZBjFEVD7zermvUrqY2KZKspfCzq4sMKJCXboUEx4kbB8bRBi8DYLRxpX8Ruc",
  "key16": "528YVAeFr6YCgGmsYZVp9ZrVjS9n7xP1gPaYeCnMKPpPJwY2gojM472Ss2GsYLpQtVEr8Rgc3a3mpsDbXFJS4Kub",
  "key17": "5C7Kp9bm6XYAxhMNnpiZiAqm1o1JDRqsu386u1rW71NT6gQ1Hy2YHq6qZmpVboG6hYUN2trxkGPyDsohuhmcAfyf",
  "key18": "pEqWYEzVuGCGV6haKZ7CQZjCQbXw2GS7Xd9yVzYChKk5uxhTkBhaUKCwz49SD3F3ZgbhHUgLCLJK8mApCPWo8eF",
  "key19": "5HYKy8A7HSqhzHJvA4nz3BHZ4gqukBeDt1oWNeJmDvasq9XyBjPjwKDdD2aC5QatJDXxKwGT17MKth41YTVmvXUZ",
  "key20": "4ChuYm2yghP1tF1M5BK75uiEKEMxKWsNbcYTAEDspb11hhRsNASnuFxcLMjzGLFYWMWdBVR9GbHpYYPQyhjVU4Ck",
  "key21": "328pr7oEipNxR99z4B1RvcjfJAUb5qQgPkUtujMA22oaCQiANammX8adaAcB1FUGSRWfNpFourvFLYFKcMAXXWqp",
  "key22": "4AHzGSUUXFqYyydQWrQTT3i8FGSFppNDcvmAdNtN3ai3YJgDVhzpW4zas5b8Q53JJCiLeqsNUDaxg6k94tfx2xCG",
  "key23": "2LtuFpHs2gVGhw8E3iRgizTrv9ooQTuXGYcst5Xirb4roBYm288trNsLgWo6XbKXHNxHAFf9aq4Dz45txwDXJVJ8",
  "key24": "4CEqcG3xmitXwjBLC3VgDGZSydoSJF4r53Xk8z6XikTamCu2upCMCNToUatTXZnM9kA3XxcLGqaeH3u22YjYXJUi",
  "key25": "3YknyKoLrHWMGgnLYGgVfLDTYsWMf6GmszZKaWWbNhuuewqUfqNeNKjsvrxo8Ny6NmyY7o2VWABVm3hFwR1gtfCB",
  "key26": "3A8N9ohp84dmC7LqAS2Vn6gCGrPAaL1ibLk7Eg8vudpc8M6kwqjSELJZUmwLeKQEi5X71cS3YoxErmoi6rsEiwhV",
  "key27": "3gGtuacE2wrKiKc3nYN7sTBFLGF16ju4M9AkhxxheJjvJfJVvCGqxEUCQc8gDgnzXeJzzD1xzej6T7hMjwkoe6di",
  "key28": "3vh2dry5kfXAn7xWzVey2SvSL7TQJ4EH6xJF2R7dAyumE8V9GByCgWAEUXFZFangEjvAFZBq3abs6Ckh9NpEA58n",
  "key29": "sXhF1W2iVwfuevbJRCNmBH44HzZ1Nqw3KoxijAf1JcmSHXCc5j6UvViXxa6YgAsb86XDarj2SkzZvxawZZA9yUr",
  "key30": "ovbC7LWqNpREiMH6sTr1wnaoT7E1mN7TYBnbmbLaK5hp49MY7AhQMAWy2gxNCteGCy2DPMbVZ3avvWMAuQrTfn1",
  "key31": "67atK3F8bSTyMzu86XJooj8eh15morKNh1EpgpDvUFJwqWDCjnLrSrv5Qecnw2qQj6Rz34JH7f2NUDoRJrZeab7",
  "key32": "52DX8i7xdGcJGdvNihy3gZ3H8bva9ACnvvoJGS6qXqihydBJt14EAgYZi1vr5ELHAK4FDAh7NeC2owKHA4QfnvCb",
  "key33": "51fS7UvwdeJzedqt6QWuCVa5Rpn9MaEJaiJfuuMybM4L7keiRSXw8EeTSckTDaijuxej2tVxnFHX9SeJUAETMRvL",
  "key34": "3BKdcGSCJofpuA3PgtrNfeEFVVV5DRpyFC3UH4iUciGuLM3QvXnRzoEEYrfZPtW5YsqLcB9b48EMeDJZocJ13vn4",
  "key35": "4oC61LM4QiGBzrhcCbRQVxTGpv3LTEUrZNp2s9CxiiGfBW16qUdLhAD1QeKCe47PT83on61k2YTkMCPvuW7BN9mw",
  "key36": "5Xt8PBotq4x6JpWrvB2L2kQ4YaojiJsscktHPVLbs6era7i2ya8KpANeRd99Pck1EXSyGKxcWc4M44ZjmbUj2TTY",
  "key37": "4bTsxyoeXoAeEAyfrurnqfVuNAiF2VSzPKbf5whFNBkrW6v6yzL9P9qWgDkjdVjw34T8ZKicmZ51aC8Vrqp1DjX3",
  "key38": "4MPBiTGua8fBZm2Mkvb9Nca9RaDdD94XYbNCaLMy2bZSka15b7xUDnYcMhtUvU2LdmZMgyY5jjburdyPPLeiVFiz",
  "key39": "5fksEQSjf4MGEfDLAoB1t4fXxYBeJx4zMD3ZuyA76p4JoQRTvjm2c5o7P3GtZcjcZ162wHBgFmHYLV7vvyqQAVZv",
  "key40": "2BoawV735iF1kEk3VKhTdhjwuuGm6rLathhik2XkomYqP3iYf2zAtPkQFPLMCqPxdNDCPpEuNG1EdoDapJahNTGA",
  "key41": "5ayjcvn8LbkRg6AwYYGFYQx7y9obettTh9k6Xbj1y84KWdUzDsaWAJ6W6ZipdMUAjqSfGoMwwKwhTkjvT2masJYS",
  "key42": "EQvyVMtdVFeWcqD3XGXJxnNoKaj2YcdtQKgicX53kKxjZPL8jbnxaP3xrMZcT2X5bXBaJoD4LN1m3tifuxJQhX9",
  "key43": "3PKQh6EsirUfADfyKsYtzaPzVegvCmVF9f9xkcyRniBNPKuTxfTjfXoJ6GWv9Fkd4p8PBFXwwDH6XacWcdyEW3tW",
  "key44": "Vm6Mke7SzFBRr6wRCr4czR5733R6KBbSAzyRzS5EWfQUQ34RLyahakDwa76KZbDEc3B8Cv82Vn6PCsMLP7kFQDY",
  "key45": "28PPKM3899yCa7UdnpaiT2rdzE9aDjfDtrTjZeuFZ2Ek2nXHbDjSJpu7RKtmeHRUaZsQZFVaXH84thRPofwUUDjo"
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
