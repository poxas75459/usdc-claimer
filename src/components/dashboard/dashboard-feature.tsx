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
    "5GAo7z9nq6HvtPfjz9fJM4E6YYsdgQ6qPzkEdaGaUfTW21GVMzsMW4G2kVadXUG3E8wE7jm4NensGnqtR294nfvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYDnQ23NHiZKDoAqqEaAJ5ycyMfmmXhFkoV9Y7KB7GZcREdno339cv4nGKiq6H6SvvRgvywPXiGSP43r8cb1bpS",
  "key1": "HratevWqV3QZDByrx3ooY9QukhURgV32YQH987hDxLeoJ3URZKN3Uv2a7gisoFXzuTBPiqKXr9U5SmB71MDwVSy",
  "key2": "2s27WT2VZSH87TxbGFSwfbg7ufq3k56HWQYgwXEkmeqKRFhbzxWptC72aJpz3GkW7t3AqPRJZt3e9JVwoPwQo7J3",
  "key3": "5HZxutacHb3AWcWfpHM22NvC2wufjEgbXhAg9U8mAG95xsDn8YGyYpPFrrqLPzdqfgTvJVhQXvriFibn2C7u1xxf",
  "key4": "56a6YwYA4aw9g4uNu5oJBRRnptsFkFEvgWdpEFVHriapRixkWg2UCPcfqkLk9kt5G18dVUMhNcmF49f1msTQU2er",
  "key5": "5cYAFxer4WP7wEjiusaiLkXkiZBuGshd9oS86XWt5JRREjW4mafNhPCrHb18hDHXQCetQFaBtcM7EE69EL7Wuws6",
  "key6": "2LA5dqXZ1jgXTxMrcXLdAQUrhKLHnz8R2srvuEpG4aqsE1QtQFmt2cAfDpHidbY3Ar2FEnoidAJpseB1RN18jW1v",
  "key7": "2qL5buohFDFqeP6yshiwr4PBD4VWFdQGw9bz4REAypLFA9xcK8ybiDe7mZHSHWPCyNSMKo1i9JQe6EfX23ccHf3X",
  "key8": "4FezyzLr9mYJrhBafSeUVzjEac8jxXEQNPDDF5EYRx5URs89tD8my4qAX1vqejzYDhkNNxyb3uv1cyQWnKUw6nhv",
  "key9": "kJ4vJ6khBYYCxfTv4TenZEnwmEoXj9zQ84LvrkbjEVFJ2wFq9bL71EY6G42eUCw8jmy7niLqBEU8UkrXqmYaA8i",
  "key10": "2zrXbMLDHauZN8Dw4DGVYXAaKodmhzyAKDs2nEn5Hr5nfrZBscJE9L7d3W6JMTLwEiV6W1DE5CnJq7MrAzZo7urB",
  "key11": "5riZDjEP6u3pM6CJJqrcxCK5eY2cVzJ3sVXqkhofGy1vmEyHFBTiQAibngDSL2pMpuynCWyBauzRneGo8C55t4Q3",
  "key12": "3VGf5N7CRnyZ9Qc8PizeHBfrKgoQidZfYMoYnBDJAbfefZq6rv57RuHk1SmKgpqwHepguByEP6THduH72URUCTFZ",
  "key13": "28oHgoFeTW56kemrEqdhW4SWCrWDrHqpXqxY6LwGtZEYEtdG5EeqX3ZMi75nvDbyJrUzZZK7tVcySkodx3Fm5m9p",
  "key14": "4TDr7CttynV6nvZ8ZsLKKomwx7zauMzzEqmjT1VQUhhmFftQTT8bKdbtpTTFWPKv1a4te4ffChJ43VTU6FGWueVB",
  "key15": "3YR1oYLsKsrNMtChzb17PBrPQcshFeDn8PJtwb7KncixeYFTAb9U7AL4dkk1987pmuWpdpcaasQ3GDGyYKvzYJVC",
  "key16": "5H4aTK5WTfSNsrA8No6G34kVpy8DVNkso18AggFHLECX1yhiaw9jxXnC2rQ8vuM5nQf4AHghX5UPqx7hGRmp2c6G",
  "key17": "39Waqp3ZHy88HSopZMFPoex59FRAL8yx1ToE97F28aKQFKZot2EbTQoRcpok6jge92okCja33Hr3cVfwX9BFTBUV",
  "key18": "3ae2t4YxAmfu63nopXRZkgFvHEn3z7v2mk87t5pXGQBCKrAWEcSjQsk9sZGR7haYaqNHAArYRVRzNeETVMoCufUN",
  "key19": "4C7Wt1EKmhWWnDiVFX11mzrkZPi1MjKQ9GZ9KzYpLnbuajLmViVm62VThCC92etDsmg2cEhmshHhXMxxudGYLF4e",
  "key20": "4LnGiw3sjzRvcCN1uxBdcaeYQXMJ8VZHyNSMG2dgv8hJgnDMfNPuJmyCNTgm1MqnWGEA7Vh8SVyYChfyhma8K93f",
  "key21": "4XdJEH1BkhGMzPFvryr2KB5ymRxWGzM5eAzjx7yRtHiWr94pb26jq88Mki6cPQ8dMNehvUpNL3eDe77QGHTkPUwx",
  "key22": "4BKYCWJsqfETttG4Bz4NEnnNDjna7vmcYYdFPmgFz163b3mr8Z5io2hGjEJD72PRMFLk8aUdsQMZsAAmwwtGFyZN",
  "key23": "3a2bMByot1yXVBAqw2WNxrroF7BachezUJsreunCV1tJ4V3En6phnphVksUman1azBraJRp4dp3ZomFzwUYiTmtb",
  "key24": "4QdCd59GRPuTHwPZpopr4km9wmVmnhQkZbjDYjbCqhBWMdAE99vrLxjSogeFbbut3rPuQrGpkrF3WxVjmi1bWrz",
  "key25": "2qn9xCDqPHn6mN8YjNvsmHoL5q6UpWcexG4iLWpfg2qcDvrVtmErLLTvgQdCEP3QWXc7gtC1AUBCr5TU6NEHXfjq",
  "key26": "3fmXA2QEVKEGDn7wWetYPAJeQyNDr9ncbZXMFvYsg4Jjc9jRRQANN6vomhdz3S7NAYtxG6WSeKyBk48E469FKhnY",
  "key27": "3eCaYNVtKENW1uNZK9wWQN65YMtSKBfz5WYr1icmNXCC3uSQJ7FNVApPgcvNpVikmJ2C3CHywEbQxgmPMdURdc4r",
  "key28": "2Yrp3gahZtRE3oJcQViV3HmSpXAFCbKn6zccTG8xDGoMHdDEL7YSYfGF8ZiJkoNiHiWSFrEfLcdoq3R6XnSwLcJQ",
  "key29": "4Kqdrj5oJemjERcGAKjHfbzfRmtErqxWQPCnoepjTHnqk63MDRdQ4JxXV4XkakPqJAFf645ASZzjmN9B6Cgia1LG",
  "key30": "3wVkceRoGXUMxGPStFC2VY5iiYJg5CbZqfyCSDuvH18C8Yswun5uZHb6Y85vRebvVCYawY9aGjWmXoxPgbiHKdbT",
  "key31": "2qm2JqUeV22XvdqFjcEaNV9TrWFTGRykySmZ9QrTDjhKxWLmQFbBXDKdBsCDqvmH1ymhmp5g2HRJbcm3HtWnruaL",
  "key32": "3VNbz6PQkt45hfa3j38HD8YeT45YYUM83YnC926pwbFBUARMdW66HvkrZbGtbsh7UZQKwB482EVPKuPXUhyrZtt",
  "key33": "3gU95rSG1JmYnvhAhwaTcCBUKx1Gsxab3ai8PmPPdcvEBgp3pRZqgw6Ew9pym7Ae1prvCV4cF39655wvUwWXvc8s",
  "key34": "sAkUwaZdgH1Z6mMwiBgRWT5uwRysyqWq5LPnqw4jP7MHZxpwdRoKCCMpqmDd381mGjKhdJ4ZVJSa1Z8t6zfhh7P",
  "key35": "5YuYMMwR4oDWWfDQxbPdxmRHQSZvCfbqLZWS2zrXfybNyyiM2mUwGXN4Hw5gAN1KRKnfoNpJs1vH5St6VKddyd7Q",
  "key36": "5sqJz73CRVZNENhErDLc8zCx9UF1zRtE5AdWDn8fDEcHMv44cgZk2Nb6woHTMAh3f6bfmvTiC1WMaqrMxeGrDNKs",
  "key37": "57vtH4AGBHkwhEjg2sqUdhK6JJRBM4ABWKiFk5Q9J6QNR8QwLcx2wCERaeouGjXYNAQCLpuBSpBad5JnESQp3NJ6",
  "key38": "22hKEDkJLtgTP7AMovro1CvPvHiHzmuVuSzL5yFqcF2Ni3X2nn7rn8gvm9NuKABMKa68NA26pyHDJFzMrQpT6tzf",
  "key39": "2R1HDYyP8J74DBYNpazmk3uaurFcuqjL8cbTPnK3bVCorCJQjVWXvaBe4hhSMnZFHFgLrwfMf6yChRZALPvp1axR",
  "key40": "4WX6kAK6H3eNVpsPeskJTokKV3jAZ5pdJ2xPwDmDRn2epWwou6pBRD8UVkW3S5xY8joQNWbKj2KH6P7swBRVjWGR",
  "key41": "5nyopr3weckMajXmE59Yy27MVyywx2TX3j4VqAjhhwBDdS764a2tqEkoybt4uM18NCy9uB8LA97L5CDpjJXe2esd",
  "key42": "4APyZ4VgfRnkbMy2aNYXQjy3CU84drTEEbD2T87osDEt42fusMqZ82Zu4x9dZ5pdxfn1wh6E3xYAsQmPUszZvRwQ",
  "key43": "5REM6767Cf4iUtyNGUXnVQ7Bj8CPSca1pbNdi9DN5CFoaZ5BVyA8qG6EcEZXyuXZUQMiv987rnxUSL4Q7w6M2Hpz"
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
