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
    "5kPg3i2FHixBb4voU1isdfprsbKxXtRUG1EDDfTzy5cwRBgoDBySxuAV2PrioPpTk2u8oVjZfdSjqqVEXyiKbpe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9kPsYz7XSywi8yKrsnD5p58xLpGy5eu5RspKffJbvKXVzVEw2YwKswBs325y5mwo7xsKM76YxckF3tX42ppmEG",
  "key1": "XPKBMPMzviWQUDoUCrnEGdCs3AsUtHZ9MdHdVhVzhfPr2ixbkmHWZdymMWJPpAYYDSFbw94gY6CxhKNLPms869j",
  "key2": "5CnjEc9vgjKLjYeVbf7NCPRgPSou1QtA88dw93iDDZGtPtwqbKF5T43h3qFtJFCwgAtduLTFivKjsYva6PT8Pbi1",
  "key3": "4bqyCeoqGxxKyawVSR3VRswBa4WJ5aryYwYJzsxWRj7kfcy7bW8PUcsr8nWqhLscPJLZqe6jBY7i3xtiNLgNQXrQ",
  "key4": "21hytBYnmPkjqWaFWba5Kci6VK76j1nCqv4Q83CfYt4eTnzpnbguTkMQczPazUFEGhMJmdTy1sD7TFMTKP9yxu7w",
  "key5": "8UysQUsNp5BXhhVgzj13yMe3zRfJz2miQvjq4iSZAbtUqAvSRuj3sKG3YvWxNppgUAEgFjmHQnAFLpjq9HSNk9r",
  "key6": "4qauWFen1CjUxz1nKh23KyQwkmonxDGNPLhk76jwBZrxH936Qr7HfNHbLB2Go3ZJK3MhmXPSxtHwkNJUQL2FcUBh",
  "key7": "4ySz2PkvErk38wmBeP3u2HKfQAa7bznYbguBAafEsDWnGDnkxdCT8LUv4pfJ6y5XqKPvRpwtorYKSBcVaGM7NBGQ",
  "key8": "43NW3j3fnhtqu7B59xWFemqtExPAKUV7dC8pgkHpwSYW55ojSumLLL3b25NtzU7iwWqetrEeKHqXpK9YtSLdnAN5",
  "key9": "3dT3DDcdP4cwKUZkWKV5JGTcQd3Qrp9sXEjNBq3HzkNK1VTkiqehNAMQkPEuJBUBpspoGfcenT844DLaWr3QMoUi",
  "key10": "2dDD6ZGchKKwd1sJKK9tAYXnZvPrJv6uEEVzqQaTU83KXrV8UdCViqQWyjDJP5ps8jMY5nC1KyUsX3zYSE5BJ8yu",
  "key11": "5tdzjG4nxZyhW3iM3zqYVkruvmAoTideYx2P3r1qD4JppSLKQwGcoZXQLMgz2hGhz2LMZTTQ3wFDQ33BmDu62xrd",
  "key12": "5oCjqDmx4qUynDHtTDbEzHaRCY45JRuQjCGJjstmB9F2MmEDpEVoTonX3CDHLGAbSUrCA5UbqBWRE9sEHCcsfit1",
  "key13": "5ERSwwbpvqHusaMSKc9iMDK2L8RV2KNBsJTSnpA7WuwVMy7fA5QjgL3oaXGSp8BGbR5e82noBjEtaLYKiaayHiKe",
  "key14": "3HxNVeuBzHGkoFi5KVk6q48ni9TavhPrV5gkNGr5agdTtS3xqZEU77VQmvew5eSRfZ6AhADuurKYE85d8NHeuSU3",
  "key15": "5RbMX1JGnJcqwWVga2eiikLAr7f6WKsASJbozVnrA6AqfzVUAyeY9PpzCe3kYdkN1xxicXDKBqL3K2NzJpQyrpZC",
  "key16": "6695CN9gMcmvg7NiDJnd9Bx2u5mTukiCQDE1unvVRBGqbBsHiTaH4DfSstkTfEE4ruh7ZejW39yUNAChGvypUETX",
  "key17": "4ivyTdpBuxDxBWYtSdZVGc4Xf65kHxAWcAHajLwbBJF82MQggN6aZVoVTR8sZCQpgYM86DqCEVtqhcS5pMMLmmUv",
  "key18": "5eriXYGVpEGuYNKz718Cz4x21ReT8dv6rxbcTREn6vH4DpT7cpa4ybwAkRRCnPxk6G6SEHjciCTW6gh5dymATdfs",
  "key19": "62ypAG84apBFMsjSXe3nQbr1qWxNA6YrTeCwPcXJVuxKjNPnxxMdDvzEASawLUC2FNrPymmGPTf65NLcyLDJ6Ced",
  "key20": "24zVzQtRv5oSLUbAb8ppUnCpJkKJtfRkqpHu4k9y4W87XCCPmJBPBAemEm5oDyfKpa3pMdDzpNMB4KnsVWYsZsHZ",
  "key21": "35KjqPhFEJsUZrEbLWHeYE6vT3YMiGKEUGH9LvwGnSQ6A4u2vdcKq1dUhvq8maBMW6GWuDvxCeGActjy7VukjGiM",
  "key22": "43Eadi3EufWa9HLh1ti1AwRjpGiQtsLzFmTbZxAnrBeWPgzUaeXtUBpQ3wUMZ885SMaCrLHbg5eKpbTMpyc8BrWh",
  "key23": "4FRzFZVmbc7L7iDoKQdMNLizgKg8biQCzpYqWGbsq5eqx4WUoVrFGemnNUV6Bi4WDjPbwfn2im2ZcV91HriijJ2G",
  "key24": "3sZvPuhz9vpw7bBWiWueTGpEp5jDqSnKqTpMgdNgndH3Ybbi5ifQ6SrGrSkwWimjngPYNDEZsd34E5xdiHwCQYZV",
  "key25": "ESyoif4pcDq1axsB2BGxVS5wjXVXVSYUo7CSjpeVuDE9Rx3M4NWbqHu6jwtgiEpKTm13zPEbo4GEr4vi2upaAnL",
  "key26": "gfBdcoJXYUbscPuqCSaLzHNBtZdPpsZsCyt8bVUqo8Ra5ebsvfR54YR6UbUuVnds3E47GKFsX1x1b8CLYgjcmXR",
  "key27": "t9TW3ewmHbZX82J1g4BFq1gnUg6iWkvrn7GnRoBcHQMd5WNdM7cVtiRQQpSFJttyFyoT3Smaceni72fJpBQzBSR",
  "key28": "DMNNgasmqHBkSzCBKfEbWVecg6vuvXbTadxYxJRjw4gXMjRD3Mv417xjzMuiFTRndfM8YuHMNo5VEKtojGhVq1S",
  "key29": "22DBcp1dz6MAftbXK2MYUdTKcLgz9n5Bhpdjh7iLbr1HqXkJRadWsn19Mfj9BVtykVcxTKcneJ4FemSg45KXASxw",
  "key30": "5TSCbG5rGVMH54wzdAgYdKmaBCNGdFFtBVJk7Mf8gp6NmCcWpJmjBY7qSKwU6NVPaFKxq87ztyLE5rUEwiAPCTQj",
  "key31": "5ZF1x27jGhosePPuf4zyPNe1Rw2PGgUPusUFhtvi1agVTGg3Cc6LMpepwoDtHRt2mDPjRGBgXxEspcsqgwCcWd1m",
  "key32": "2XebyRcSzyTBnBgaEnEQQ5Gkf2Wy66qYhpKTdc5wkLucJuE7FWc6G1Th9zR36MGX2eCxJNLGcQNcrdPYDhAC4BPy",
  "key33": "4GaWbdNVmfq7d5sjWrWte1gF3CTibSAcV5eDdrbThq4xF6oQR3QCLEuuijUdp7kGhHNmTEMmuA3UUTrRcL7vku6f",
  "key34": "3tqzvWUfEsj14wEUcW6dyXA21gVX1GSuMV6ka2Sx6J7Wt4hRGAU9V1wZEFs2DwCnJFzCBKHA2bC8CnDA2HyWyXhK",
  "key35": "5Wt3U8RZEpShaU5QMsuUtFrFZiRW7K96dbv1kGKvq5eFea3TpqwoDmxBXAqFg3j2Zk39qGDCRHs1ByhnnfqNRsyr",
  "key36": "64TBYYnxpCd7NXTC29sfbQsfw4h5B2h3rQ1H3YJXSL4gQJoWfgRTVmUiYvgK9eAUfMZdHHkhrKTi58SbQrkFkrSx",
  "key37": "2HcBbctJZvLAwP2L5yXnRHYZ3V731ae3cDvZdnkycpCh6sjhsWDTVsHzuZrtyRSFt4cnvGMZngpX1mNrCpkPPyA5",
  "key38": "4eGBx3U66RaANfuNzEfGqNETm7SgJU7x1v4NdvsqKFryrxLxynyQaquWxAoFJt22qH69jKSkmqqxrmAygN7LLUDa",
  "key39": "37ZU6kVxeAYvDNxowWVkYApzwNyRbZ61sLgnNEKhq3DAc4H3o9bs6oeoSiof6AVHnmvg6BzKsdsDvaWnoJWRPsYX",
  "key40": "3tDyxfauAausUuqSZtN44AEcCVbPGyYgPLB3UbL6iUvY1dEpXXaFUUdS7cVd4J21V166jZzRj9yhUwanTGDHZHS9",
  "key41": "25RVPfDiAdjsyP1ztLamaX3w9GEU1at7dU2yM59T6UKgucFQkAWUsTECbTnLNkQ4CCEqLyw7J5WrzpGShFJZgHuF",
  "key42": "2WSBoVVVuEqS5jYAX7x7cGBwZkiqKfXijWhALd27Mfp65xgVqZTZsbsH1nQihEB1qtKrNZsmT5CdsWBEyZDF34km",
  "key43": "2z9iX2knL41hn6qkideoufuBiKR8f3kok7DQ8HMCdWtNK4U1PYn25FTDTLL674dorSyKNSik4Tzxr14eJ8gJC5Ei",
  "key44": "4gk3tWcb6DmFoqLBixEvdbhWAvJfa92Wyec5N67aVQz6NE7Bh8xm3YRS9biFe2WStPYK8Rq8aYHZ467rx7T1z6A6",
  "key45": "4epFwbjB3a5wc4DPtgS8J4NtwdbFj3ktvVw6PE9BtFdvJdQzVdQoM1FPX3AFTxruCuQw5oqAifLhea2Vi3nZepFG",
  "key46": "48fnDAJ4CqrVKPo4JjRCooiXAy6G5yjqwZtp5YJkwJC15qoYz8t1jPV88MVR6fHsF492aJxhWeGkHiDKy291EpWm",
  "key47": "3Js9V3Dx6uaD14699f3BswW8RJJ5AwY5HJyFcqsqv2RCmuK7Q9nxGN2tU4Bx7QyAyQhhruzNTzPkapsZuXXJDAq3"
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
