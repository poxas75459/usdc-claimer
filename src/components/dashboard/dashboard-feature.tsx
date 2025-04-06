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
    "2X7Vs1GXJ7dL7DyFDmkW2oJ5oJYz5rgcD8wtHNpAf8ivTWotT7uzP78KXPmkMoeWAc94d8tDYVCZ3RtnSAWFmjZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j85bext7Ws1ypkt1ReGJZBXS5bMckw1TsnPkuk7rz29SV9KWtkJPBe1vFfqhgo2kMgCb8x851YqXZJSPRT3Zk35",
  "key1": "U2ePmF6BniWGfp2WWLcUZeTEyav59yTKr24RNqdzzhjve2MTJRLzJigBkzrQhRp8wJp97Xmt7cB4YYYTdx7T9Bm",
  "key2": "4j3tqcy7LpMUHERgRcBQBz1Y3VSfe5V6963TwEXDquoUV9wypRVVtED2kSZmYVwxhUFyTUtaPmSicESFU6JqDkZW",
  "key3": "LiERTbCoDu8anLGVxMAbrxdJTErVSbabn1aJoVXo7RuvYcLEF5wmwvFCDpP3CQnBhwi1yr9w8ZX1gMp15oPyVM5",
  "key4": "59fWUcZRLSpigawYgjX7e52byBnR1R3nmBrcMQ9ZsbuNT5Ku7aFwLKCxgKVQ3iqYzz6wL8XLpXh2tD2YpfJYfdSG",
  "key5": "3BfGzE34wzHMfQNnGWpdbAZey3iYAZpypjRGduuS4znrdFRDYUQpjcAbcToQprRMEtGUBngaawr8M8NqLeWA1owh",
  "key6": "5CGJbDBnn5CF3HQvjSqoWxWT4W7vSG1HNdHWyMNGZ2mnC2iH4Ydj9BhgZ47d8UScBhbSQHtS9TeZuyhc2kXKarJU",
  "key7": "3TfaLph5opAq7ahw4JfwWD4dacWfH8VudFm88i1dyftndevP2AmqpiqQqwDk9oHsxdCGoHkDxWs3Vp6cwngof5rH",
  "key8": "5tJ3QSam46USBjPW93VvJHsytJpdt3CUXRWiRzSnd5r2ikzkRg9CaC1cLrx79K1kpu8EfbQ7NE2JgSM2KQqQ7au2",
  "key9": "5C5F7XNyYnE87i127pmaVaWoHs9tcGkb34XipBzZkVK1z4jetLH3MNCsFb6nZ8Pg5pCxciH42uYY7eb5BgyQXLZ8",
  "key10": "2wacmJjFCaJgcJsg1UBnTDuLbxnK4DnYmtsTSV5utuUHUKVBbBnWmv5VUfCkWTzMSaRBMBXrH5a6wXizaqaBNs66",
  "key11": "mAuRx43qr5GGmjo9723LvxuKEsKAq7XapNxGQbGwHS6vQuQdWeaXy74foUkcwfa1DwjuoWWffGpcry9euXpASh6",
  "key12": "1kk7zHDHTrhQ5pFNvF8ne4WdxHLugjrVbStRBUcnX97yyh6RawsJha7fP84kVm52Sv4gyhpneomWBPAtxf2bVXf",
  "key13": "34siXspV9Lp1UgHUvFMawuNzG5cxt1ZeQLKts75Wc4Rrsq2o1wJzpZvdNgrL3XV7K2iENt6MPKhcCdsq6zimRLXD",
  "key14": "3a6ygp82aQQNJrUfHLsL893z2QpoYZy9AvRZvqfNEPB4FCLYwgmEmc3q4pUDvGjAj8W7XtzGRRecgBX8Eevmkxci",
  "key15": "3qnRbbY9HLiFHdtrriHn1nkueJkVZwAhKDwqCAWd3yzQwi59Z7ht6VDj2nKuSHp8rCP5GSVU5ZoeLeUD3y9iVi4t",
  "key16": "3EyGhKUfFLk1Yx9RdT1pCmjxHCwK9MapC83R1VwNJuUeiUYCPk4ZBSMas29aFQC8fgYn9y5uxQ325WvSWGfcaKCm",
  "key17": "eeMq5EnjgN9gwD7jnfxaL2ir1paVau2FqKfGZUmvArQMMPsww9VsE89C1KUG5bFAHSZ9NGC2MvoRzNnoJKmM8qD",
  "key18": "Bh5hA8LxUbrB9vCbTScF3JWwPTZG3rQcj4B536HtU3Q1NRJ6rqgBNfhThHLAwUcEeV1jYUGmjPL4NmS15PA8LGm",
  "key19": "1wzuwCxkX9z77kayAPYLu1Q4Psy6xLk2BJq3ps83ZXiUfrxpH9i4cmePc6eDEgiWLyWQLrEZ1tVc45H1Zk7YxCF",
  "key20": "2UheMPWAGUQBwK1VKeDd6S6mfR3Kq21VymKybzSeN8ddcG1T8aBmx2P35ijNXY7GVtT6esUT4QNsn9YsW2JvCALc",
  "key21": "2M5Bhw21C9c8cHAvxQvRzRcchNKddNHgCXncKNRvGXumCR37EbzcrksjcsgD2iSEdXAMqo4mxeYuUmDKN9nJYqgw",
  "key22": "T3EpkdBE2BiVyadCceHBWbs39vAFo1hmXEHPi3tUTdD86tLZM8tp7ijMLJ9X53eAxyEyQsr3oKHRnwNhHdiTM7Z",
  "key23": "3e5teJvXFWSBeCUhBS9pzgphDctAsbeSoXeSTd6jenxweLDXzSuN7Mx2SiWd5URpGfAFG1iDBqvDj7NhdRp84fMz",
  "key24": "4S8DVzLkEgNs1h37HgaXTUsw8ZyLmLUCmWEjGMN1X279QhLY89n9uzNQMK3HwRtntdkmVj6wQBNbSbHR4DGKDoRo",
  "key25": "2dA8SQmMSKFJJ2H24TrrWyAbz6qk15WBzVkyEdx8V5ctC9KLXJ59EiZqrq9U8itcQMsB4rANDgudMosQjsv6YKJC",
  "key26": "3gwAgf7N3zyZYHLgjocVptE6xPp7Xk2zjhXCtWFrphsMykPJnqTqzS4yJXM6FGWEsMe63HFTdxMFrU33jG9g3kXm",
  "key27": "5u3CZC3tFHwa8uPKUKyDNAMUGJDzUczK77d7bupo2j3ZqnjGsmxCziSAkryxynjh3kwRNUXuFYKxmwTxsr3W5QRw",
  "key28": "CLV4CxMb4QEUpWaw3hwmRVpoawNXyowttz358ZEjPstPfS38WLV88XLywa8H2UxCWdM7FyfvAUR4fhFc6eQ7pzd",
  "key29": "oSnqAfpurHABzesqFdSKEc6aGM9caTkSj9Conh9Kx4UhumZRgn5NNWdEw7ZBZFcqCd4CckaLYHSXA1LY4o1H1tX",
  "key30": "1VE2idqF4bsHvsiHCmzmZLJKFW1uqAyPE12pZNLqM4NAy7xJwhpAnfsniRA4XF9L6bHaHg3BK3dY3e7QnZHNBGy",
  "key31": "2oUNj32tuP9nreqwvht6y1XT2QgXyH5AJLRz1utp7Y8j9x8sqeShseu5XF43YfKMqqRE6MEGKZ5cbADCRKy491rV",
  "key32": "412sQbK9VbkkovcuStssyeHRgimEjvXkk9VqqhGqDPaSR4Hfkw8uY8LgXxgYMhgLNUaxyCuv3MZSQnyKfuiqAkf",
  "key33": "4DrucnYb2y946skEgqB4NQ8eyBV34HZoBvfTzBiZfgBQG7qmR34vF5CJ8mZ7tMKra9kuPWU8tSrk98Cy4UZszQz6",
  "key34": "49GkefsNCkrobUW5i1UFADhqW2J4b7nxpn83AfVMWKNHRaHDpfiwGBsVm6zMKgHYRA3NSmFMHSgzV1ZG5AY9GBYU",
  "key35": "4wm1b2rgrdpMQ4iKmPaj7ZX5TUmgySoMYib5Go16CxousDU3xyBcaJ7WG8ddBU4uDvS8iaoSBaTMZhTE6ytWALr4",
  "key36": "4XNrriSY7zSsdKifEHwvPfRofPiJf4ykRBdamqZGFH4oDZ1f1ucyg9ioMWsBaGhWdACS1yV4e7tg3AAZx9p2caBP"
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
