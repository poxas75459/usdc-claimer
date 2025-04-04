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
    "2UbaFbtu1HpCkTRG314G2YcR7ha4GwvE3piNVJ1Fvb4sP9BR6ujNXV22h5wsnHk2mQE2YF7an5Y1fpzPBYWoaTnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zVUmMLMq6dnKqfreMRZFsKwj2YCZqHQy2Z3GX96ULq6ZKqSReoZFfXL73bNHaMCRA21EABq9BjxLp55Gz34L6AX",
  "key1": "5anCBX94P6WwF99wi6dSthNxAqrvtrLnjiE5Sa6c31dhtP97TgjXQhF5BEcgLWYKBHBXugNQB3PVtbRjHUiGPxbn",
  "key2": "2Uma7dxubjMLjew8sHX4pYt1xUYbaF1eM8xHRm8QWiJCxdKgSgrjdnqPnwvdent8mS9hXb5zFDi2V1jmLkrcesGD",
  "key3": "4r51dbovbenzhC618yTGXKGm1KgK828Utz3XDTXm1MtX1XTEJDW9rWFciYuEQtWEgTR1tLMQqVfS2nokkWtf7xXk",
  "key4": "NNRS7yHVdEzEpJy62ExXQDw9U5EbboATxmyc7WiiwNbzFrGz7SeiNaRMbhD6BjDe2fBAQiwbSQFow2iPwcvW3vB",
  "key5": "2eUcUCJJpoxyghJfQCBPuPdntk1ZjZc6Zj1fQQVciGcHzJ6ZLRQpzVbRkMsNHBtW3BAavCWCQyacUbjXNWap9qy",
  "key6": "2paGxw2fFd2RhuaFv389Y3eLuLZ2aufVS1pgXwT3Bdkv2psSGNGNJB1XHfEfHXyt3QkMaE4JW2ZdzdhWStAvWPWK",
  "key7": "5SrZMPq4GsrbUH5X5ZuoXVmVMgLiLjNqJNbHFL2mgBFnT1ArUZYvEnua7RasavuXfWDCFbYDENgmKBUQBBgfSVbC",
  "key8": "5o5tBJmbpqzDC6ETrgusxifMff9g6rLbZVPu9jouMSZBWcQvBhL3SQtuVALY7EGu6RmR5nZxZF2TzsjUuYYrDEnS",
  "key9": "4Wyop5XmirdX52jgV13kbC3fCFBHCNQ7XWjP28bnBzx6f7FiMVexG1V8qhhkXwrDTwr1Qs8jkJaRR7e6X25bKB35",
  "key10": "4JLcXjm1qRAEKiPHZ26Vdekmqb36wfhVVUxL1ic8FkJxkNjoA3AmPZBkHMmdZyTZJZHjnUa8vWUHyNZdU6Dqbnei",
  "key11": "3y4JgetT3AdSAUQQtZe9Bk7vC5chyJJ39G7W6o7zptePQ5QLrWPHAUFR3sySh33i6Q4RbmvyqdKbHMdM16moFvFj",
  "key12": "3oWpCNSchWMiWxvAkgPnmSVzRUy6CWdUtHPyxYDxSJ73DuKdG4DpqDwwhPqcDyCVzRfQ7ijEonQT3JYZWZiwwJja",
  "key13": "91wLJK9YX1Ze77Edx14MfjhaaGBmTszwbDPHUKyPhpRKxcEBaHCABEZ1hNRD9J7tpup6nio1ktN5PQrVZ1beM1x",
  "key14": "2nczMbU4Zm25UazhGqKieHA2dypL3iASnsCU1Uyg38sDiru5c8stJGrpxL1FH4t39ZgU9myNFyAeiiWSMqtkQf2W",
  "key15": "4Kyqw4synY51tFPATSt639Aoo4U1urCZuuUsJ7eELMCbjNDBEj1DqRFp5GHgeAAd5eDr2mgmRd6o5mMZo4dqE4g5",
  "key16": "2g2sLAoCop7mB8kNDykVRteNxcEapHTFuQ3kGme3LQ7Mi7PdJXX4yFi9FtPaqoH1xzGpciQDN4CwZT8pBH5ZrPDx",
  "key17": "5oWJdgueFFKeVooc5TBLBtfM7LDUQyBqVVKgq6mD22yoB45n3fzntHd8DP8GeSm32F52i2F3DGkb5sABimBtr1ne",
  "key18": "CUVLxFubthwLGkpXiVrrwGH5YxDjA9WUGVjFeKDFxwQuC19WVo4ceMEdvshxoPQoVnC9xMd6CnXtstv7aLn5suM",
  "key19": "3L6295yX35WavfRS2RuZkvcjGsXcn9GUxvnLHfE1W29UuE8mZ8D4FM2KLqxgsPUZq8p7XLSputFTFwJqqkKr1qz1",
  "key20": "4YS8fsVKbo2aYE9KryCDeL9yib35fHWtZELcGbSrJbmFvohtakvcd8WQQ8gWhdPDN3oyDGy97HdmH8BqNn33EM5E",
  "key21": "64vurZpNEmLPy4FCiegKC2WPPtVsmm5yMocjsmWEmNAntm3ifv2ag45aiHEyzF51cTNfffDQFBVgfV8EbM2KPgwx",
  "key22": "2pUpPTvkTbKeDsztcPjsz68FFLfy72iM3ZbjYtSWeJb83fkeHB9bdSZKrHpRA5QWDdfovpcQKTSH8N8og99nR5H1",
  "key23": "4Xk2mYGZNz4BqANC8Xv8Pta16vXzXUupcVbRxKosphVo3GrkKxVoVPDrkpnkRdCNUJWEW75DggGsANFKCX4sjHb8",
  "key24": "TvFjTRhPCXi1RS6vuYJmXHMaYVthShuoqfTn4SYGuHK74yZVb3ev5YoJ45bgJHAqhd2Xd1fcuGBf9VYAdh9SVYN",
  "key25": "2R323JZHv9WK7TWABL6PoSyzqd8ankVP37w9Lr7aSQdKvwnnsfd3ASZZE4bULXZEqHGcX7EC2FzkiEphmNMGbazS",
  "key26": "3TU3rj4Kwh1fJ3uBQVAkJkMd4sifDJ16i2N8PMHCnri2UEfKwRF4ZnegjmvvXB49Ui1BWVQMSAJZXCXp1sBctaw2",
  "key27": "4JPJ1UhquimMFERUf22TLLQq8x2JZt3aXMge98aehxzma3tkQwj9XyU31NZyDJ3h83esnj1qpBA7duoYPTb8R9MA",
  "key28": "4LUrCM1ZwrvqfCjf5uiXS66SYQd9x1gL9u9bJfgeqFAbNspVMzmDh1x62XnijwdYPycBLUp7kFGqGq2ytVVgd5Ak",
  "key29": "qThicys7fkApEgHRJxKRFDZFrxCQw6AxryCnDVemuWg1gefkaXzBKWNUDAXJGrC4LNdjyZvvuoxoPKkiAch6owH",
  "key30": "27pg4azCtjP944P82GmZUPDsuRVnAwh27sobUfhMkiGza7L7wMGfhwramdRKT7WGcetZky5YSwh3UbYFHEjnD4d5",
  "key31": "3Mh4oTK2YBCgCKmEjTD1KQ6qESVFUuVs37xgx1eQmLfnSPUVfpBZZnNnSxfwUHiFhLLsR2m4toVTGdYV5RgxY45B",
  "key32": "3JVxEYvzUxUmYjBTFpEjZC1oAwaXUQo6agVKrHgJxrq9NGQH4H6ee1zTRqPxuUMsKmcM7HiXVvE5b6vwZNbKahur",
  "key33": "PJieg9DtUNrotPg3i9RPMggv1qSyALFiYwaHf2Dv2S52wLRVGe2iyka4UTGuTvkeSL6BCMRSShTvCyW5ufe27hi",
  "key34": "2NcENLz2kfc7fYiDbj1Ysv8g9KSMgxrE8tpozCh51e4C6GjmQGXxb6nh7VWqh2geTpwvtQbMwsoBcNyoGBAhLfvt",
  "key35": "2af9MwmVEkBBfWqs54VVb7qhhtMtW4ggeu2jfjDfCDFqbjjq84MkP1YDEYssBhenLE5Gc4uYT4b9xkQJd5vZncaZ",
  "key36": "535C3Jdq2EvXgd8hALLUjt54u3ga1qxQsAiAX9KMe4sAjUV6JA7gveVNrDDXiw6kpqBQeVcQzsGQnkFzEpverRuH",
  "key37": "552hErF3FUSqbWs2N6YSur8BDsUqMELYi6eHTtxnCT9kBqNycGEBPf4BAsoJmuJrK3fd3NELK1Fz8t1s1ZMnvprb",
  "key38": "ioaiYyWTC7hUcjbpEYvPF9YKUYPE6wavzx39rvSuUsis1T5zt1k1ptpu9Sfb8SaJTK5BEC5CV5FYQjR5wGXzsQg",
  "key39": "2gSsMEjdzNLgt51rBw38nBBs15QZx6tzz6TvdgoMYzwHUBaiBeE9rmYx93YYSHkAYZxZACVjyxdd8mfiaZ9PNybG",
  "key40": "2uxuPgiYn78XYuyXZCQWggAGnThck9kL41YXyaLA8SaBcbga9B3tjDizkSAbMSLRqzkk7GJhmSKYS6Y6FfMhs6kL",
  "key41": "3b7StQnewkXsxkjrSV7oR65uCkW8Zww6vw5a7sNwLjeiHCMacPgwFYpJXddDJ15VnVzpW6rfykiBLshVoxTA1BV4",
  "key42": "EWx1WhSg7iSGebWqNsQmF4eyJhjzg9NfEhR9yW574XqzdHcFFgTGaLFGAZaPQGsri4dNj8yDJANEtrYf49vLVtq",
  "key43": "4KvQoKbY4w4qvNdmmikdtfRcGUYCdvWgyfNWg7XoLosW4q3Eyj2BW4QFpVPC5QfjQ8cQmg22um6kpfKQF7tAwZB7",
  "key44": "4yLM4Q6pPELxRMMmpXDdyL5yZgne7ckZgrnovRGa2GKe8hjE2Gsrdx2ursoZ2Kia6rPZUiDrCRo5wkeNrPzfEPG1",
  "key45": "3ZeKaDHiXEes19MXZvDJCM4qyeP9wEjxUcGyKJsAihQ4Jrv5vMeHvHNSUfv7yuQbaoWPQ7KMwoEFrnJy9ZuVR1yP",
  "key46": "4H1tnS2e8KUhEGHZGwgEFpy6xZPtKQWCVNXmh2b13eXz2u3gr7yknwfPAzZThHFzov6z6Z6FvozuqH73tumBpxCa",
  "key47": "EtRWzJL8XHSuhREWCVEUQUwoV49t4Mn6cpLFtfHDH1Ar96yjZXRmwYyFis6Cxe4zpzuYZD88peenhBrFDYiRUWL"
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
