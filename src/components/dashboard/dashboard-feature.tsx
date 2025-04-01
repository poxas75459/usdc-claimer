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
    "59ttbTC1vqkKNysC1cvVY7jQ5dAYPvkTpCgqihim1URbeRZ9SLK41XvwoupoxAkmK78RMbpVbsH3GtJYDzpEffyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECsGXJ8k54aSJBo11o81gMSVzFQvii6kUvQQsXMk5GeZzhpqFCi8cMUsoTzhNCZg57C11iKC3fgdJYtrucFBotp",
  "key1": "5Ge6BVnc2S9w2D958JtZNjQ4HZiuKvVaikeHN8SXdiEWab2zTETkpENpAWYzUBKwBFe1UB5EJkfWVAws88nX71Fm",
  "key2": "51fqWVJKbT2qab9mebN7rVqrQkQjZKXKpeFsQ9r5NLUomnknZBPikvSdNbJj2ezNTnxihWPrSoVdWoNapgiwfuGP",
  "key3": "5qYLGRuxHUHHxprvtwrAt5sLGgRMBywRHQb1ZTqf7Xw2b63nhjLV9HFfUDuW6rP2WxLLERfPsBJgTE37gBM2VQtY",
  "key4": "21eX4gsFmD5Pj4SbNRxf3tZXDTNiNjMsfF7CA4agSPzJL8qLsjYMfaaZLJ7tc2tfL3WdrZpDSGzX7gwMmS4LXHtx",
  "key5": "3RL6tU3wHX1octyevhACbah7sLUi9zeaJMNNAhErnyJiZ4p9Vu1PfF7pbBR9VppVUXQ7P8ZBmk2igXTqjp9zD8pj",
  "key6": "xRdxUCDbTWwkqv1A7qqXVEJ1BSGvFoLcqyfauAJnbediQMYycurdraDkYckZG8U4NZGHPcNkrwba8eabnXmCwGk",
  "key7": "4vaR988RcednBrV5jXG2139JcGwSyU419UkSsBJ7o1Tcyykg8XQ7D99m1g2pLBWc23foCX4Hycbdeywgy2KAPaLj",
  "key8": "2UqEoWrZufpWzLmXG6HYcSV3JxLyudVgT8GVVVdKdzacpQT7x8sspAn4bxH2ipQAvq1yHgjeHTiYBcwrWmq2hRyj",
  "key9": "BmGfHokTVsZmn5WVbVS3Ne7eM89RN6u9u2vYu8Hgr1Vv2sDGLeb4PpTq5mS5k991f7EQG3bSKWpudPbpsZoiAAP",
  "key10": "4qVTS3cEgAn9HhddjqHd4MSJkTLmPh1pXtZEctV6cam4M1EMKRcVaVyuGefr4wophpxVjSfatQqGue3RN6vku8VK",
  "key11": "5Yvo2dGbUgYNmihg4P2Yby6s4MSRpVh94AYDU4Go4dPLakaL1NS6QD1saU2VxkLa8MiqVCbnuMxL1qbd3nRoRPcG",
  "key12": "5XjQRoEx6QX2TgErTuisvEbG4Q2TVuHeXBtAc1A37Mv5qFLT2UXrjsghCAm8k53qpCqheNMKi95zFtb6wHopYygz",
  "key13": "VvUhghyfasPQqW598mK97HBqJK7kQQaGtFoewLFBVjGpCrS3Up2qTiWG4gaPDn5woCUuFq3ycrbq4zZRae2eU9h",
  "key14": "3KmWcQSKhgksWurZv2NE8Kvq25DtHA1wH21i7NzpUMbxrSaDJJRnaAvpxAA63D2tv9dog8pDzMKs3b1Eh6XXqS5Q",
  "key15": "5W6j5LKrFLaxWRgz9GpsybCHp3UB8CiBqtTq7y3oizcH5pmqzFREy3nFe8Trv614dk5embCq3Tbb8kq7Z18cosEu",
  "key16": "5LB8c5iFQYz43fZAEL1Ta1DA2KfqYAX2Jzx4CodRx1VAJs1sQdX7z8e1RF3qAaLgYigYYcxPHqAr7cE4x27RkM21",
  "key17": "4iUDKBUKjMw7X423utKnGnibwwV14Ud1B8gDCgVMXCVD6mqq34c4mT8DjhgBJz461Tnrvi5PCX84otUiJ9JT7VkD",
  "key18": "288oXhPosLFcJTPXqrLfJanyaWXJ5hvybKkVK5A1ppcJcAxdYuqAtH988xEW5HRQpfeDTT47yHUGaqCTiqMG7oyW",
  "key19": "mVS8zKo3KZwtmYpFFVs7urwmdjNngvRsq9PWvYWh8zprMxSxeH6mpYEhUZcd1SxM8MfzTRm5uB1ZMc2X8iao5oR",
  "key20": "3Pj1PZNhVytTUHhvS2wwk3sNXnNBeEQCakkFrJgTY5iF26BuGe7zvSUYuptE7HBtyYqu5EMQXcaYvcxri3kVMroP",
  "key21": "25VqFtU3knWyZw8gtPzToan1t42EVTg3pRYeMQBWUMQSwxmTgJuf74cvP7sfpZVYVA2DPg8khUgDZBJXBNRZzv95",
  "key22": "rUVgtQibAbKRfCgjkmibfMCd79oMRg3kLtyNaNALZiFyvnstPgib9hzFoN6Gqnk9945K1KPAJwGET23qkUwecpZ",
  "key23": "4aV6RuuLggce86nRXcxoSn8GCEP5vngivBSVx1MWUBJ1YJs6aSLQHmANBa1pejDjSfE8FrAmTw1UxtM3LyALDppG",
  "key24": "axvadmmxpSQJGa8vSqDu4kafLdVJhCQrbthEJEgfFYVQ5cWBBsHN4Vfz4Wsfux5r3bMfoWW9Mv3Nnv66qgVCTSx",
  "key25": "4Wtmsj32aSMizKXBeHh8YttF444PwZGmKx5iGsRK2MNCUrkJcsSnxyZhoSjNh3FLyCSyf2tRkG6ttJU7MjB3rsN9",
  "key26": "96xhweip4Zvo7XtAYCa3aeznNKahxtoDX2XEcLn9Ewg7nVanxkazXoH7hjgCg735rbMKc3G3QLz4HtP6VwznViR",
  "key27": "5MA3aa7t5ynpV7XapxamhW2Vx64KhJhLQjFwCQpMEjUQuPPKPM32BopdMTTVkpUws4ouzfdeJLDwKKXmAv6q4Zn2",
  "key28": "4DDkDqWKsj8pvQyKqsQsV6hdWwvuoiK2PU2RkUMQSGtCv3DzBviQnC4VCG3nottLEnrcktG2Tp5TBddRB6yiMSsv",
  "key29": "3NXDMPiyQkuftggGKubrayNWTVnDDDdgnA5WwGcdG8te4jukagAcyZAdXeRRdZboJcstqjuEWpnA9m4qo1hifhdx",
  "key30": "3UZps3k4R1G1ofcoAuYequ2hoDht5WzQG3Mjps1tnGo7s3ZzcMn9RnfSVycWkFHuEX8rYDd328ZHHb55J6kRRmRx",
  "key31": "rctnvvD73PRZJuR8s2nSa3DiMbW6jdZkoYcwMgNT3KrUgoXbFWmzymrJ9bWGEX3fXwbvYKMju69KzoaszFvXog5",
  "key32": "67o5tctdJPCBTxXU4SqRu9qSjXHHg8Quj2RXnA1dRqp6Un9sVQS6nNKjNmh7U5xoNH9VR4zicUnqDDK5Mtdp57Kt",
  "key33": "Jc2YVFfZQBMEkJxngdjGBHhhnNVwbJM4nSNQrMcDnRkDSmexULHxwLXvZ8EhbNSySNpdgARnJVn1sqq3BL9agD5",
  "key34": "3Lqa2shJhYXdE4fkp46SGeTBLamq9VaWbSG8bhk4owJTMjy15x75NC6k2GjV8NdKb11mDac9h3SA7wkN6XKwyy3S",
  "key35": "32xo1PXYiWeyaFMCdhdqDKxXmWLx8eFJNsiNPRwYcmRpC47SB8VrFLPGwYcxTKykGkbxdji8mwUjzvPAPF2mNit1",
  "key36": "2vcq38Rn5Fw7xdvRg9wxeXMowP3S5goLYTdsuqusqcTwdJg4wHUzJ9Cp26bNYoB5kRjbjuanTCXYc6EKEaVTWqQy",
  "key37": "5RZxkwxjsCZcvPHWHucdMRaHoXZdFWm6pYUV4GXCPVbm7eNPnHCnqa3m5tgdjvxBAXkJ6Lxik2YoNBKSZSKcL71J",
  "key38": "5SXtVhpoLQiLxi6v5TrAxZT65Fg2Y5ikTCGU1z1DCCyqkGkbuuEysyvC7SvLJb2VBdaZDbQ1G4FQ8gtu7DqYseRW",
  "key39": "3rBRKXTDDfDv9dPMrFG3oU3jVGnJ9qGpLaQZJ6dPTmSogXRRDQUacUWRTBf5vGdyzoMQ4YttQjM9VbAhHedw2HKS",
  "key40": "2SiMJMuWy3pH5fHYm32yEJYcVoidTMPQjUhz1TYjyJkZJX8YJrS448Qzy36NSn3HWYTji6jbE9443WJ9dCKbt9Xk",
  "key41": "4YFtpUNtazuyBg2bTzTgaaH4M4fmmtegHMdnHpmJZDFq2sQwqws8U83v5eqKLQYEuj9pBJtSPRpojkpFLCe92Jz7",
  "key42": "orfz65jpTxu8E9FDMZwotkKEwk8ALrcujtSEL4brA2LJ2NrJi8jkHSRdgNg9CqVWdW4Q4dfoLaX3Y8CqBJs548n",
  "key43": "4RgKi2CnThF7G5UDyVomPYy2gQdqZRLQqBq9FcAZqG5HSeChpsgRZ95ZqxXi9ajdwkwvdkWBULQTtHcdjmQ9dbo8"
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
