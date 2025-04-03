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
    "5TD6GVbjtL6gKZqyReTnLuk85Nt4gQHJDC48Hr5SPoA34T4zDdPGCDuwDqHAY7i5Fd8ZraiCcBQDHWqoFeqGgMmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g4MTk9vD6LdgczSu7maEvCvumeeh5mN2ut8VS3ZFEt9FmUojJiV3c3ayVoWSdez9mfuJLzERnwTEMLhrDD3rAL3",
  "key1": "2a2UzKDgyCzXC47xXrQsXdSeqWaq5DiRzGJnMrjL6JVFAUhAkirJaBbvYUiVfkiYTvmoJZCq9oKB9qQgN419VB9f",
  "key2": "4ccECh2WkXqDuB1cvsS6ETdx4AgGsEuTkcgHSfkAgjWjUCuZAUA7K5fPG25m8rkUMPP51hg54yypFDTuvVUDgdPz",
  "key3": "4Hw4Y2ECTwNpg2iAFYCUD8asBjq5hisazrbThSTLkD1d3ukVuQeWUW1ZrD4fR2YQuMyLdRtR2Udb9DAE9opg5C5M",
  "key4": "3sSKdkhQLHvKTTM5Rckk6DFvAEvjJWW6ieSLVdhMMtMgW1i1rPhkUXXkaPqYd2FyH2kipHUoP9DmydZLHGdf458i",
  "key5": "2tFYaNghhikoUEX6TmRbWym4Ravi7Jk36rYiXPZJ7EqLEuxSintZJcAFT8XTyHEGoUCfWTJE9sJ3EcP5dUXuDPhW",
  "key6": "3e9nu2HdxSFxYkA7aVAXnCauqkRX2RpEVLyH74Ef8tDaJwm6iHL6t6R47sH3JnbyRRiprpUCnB9KKZAPaKZLBfHp",
  "key7": "5XVAiuuK8rzmwA5QZWk63FErhvSCpXF6135Q9RuHzzYsTAxMmA2yFxgritEEuyjNAJMfieo8sBxnxSerupV5AYva",
  "key8": "JR5britN42YW8ZbH74AU4gDfTB1ntpj9SuSE4zLZULqLuVNkN3XjmHnkHT1WAxqbx28y4JmJ785jva2C1tQQ1Nd",
  "key9": "NCQC2kB98Wu5fRZAKXkjVAZNGqQNktPhM8Rwoi5euSBBgDLBTuPwdfQBrc11dFq2ZMhVoVhb17Gt3xokZseaUBs",
  "key10": "3sgVNSVCCAtNB77UNsfcCHCBD2aKMt7vR9Xam6hEmxtJXajjmjvnRxTaYFHQUbgwx4Y1wdytvpHgCiJp6fkTpjNt",
  "key11": "4tqBa5ULyLjGzq2YP5j1Zqm2LDjDEqqnweDoNUDP7WsmFm9sW6qwcYxMFsA34z98TEcDNYecvB5dvBpGyzd82qVd",
  "key12": "4v2gAFH5U3kuwEjhj72GSayMw8NYhzndoa3krNKfFUYHw3d9y2xxnaEeQ24XJvuK8qvuyep7J2EiinBMXKEhRKpj",
  "key13": "5tGCusnAh2H7A4fkUsenowaQD2E8JMgmV1rhYBNTMXbrqCKBtvYbcThebH7JsnYkGuTcC8cuFCjRDNPqMPqqSwd4",
  "key14": "BkAfMTgd57nCqsdJWrs8XXMgJjoYvh2FbKCRiVWiNawPaVEptzoutGyAfXURoKBm6jVyMaE6mPeCeFNka1HjHFS",
  "key15": "5DrVai1ntqbozMPJWDcjUAzc6ozM4CKpDmCjpGoGaTmFTow5SLs5osop8cZiYyexM2r5HRgoN2xw4jB7bQJrFFzi",
  "key16": "22ZBs13o1zVvpVWhs3DZ85cWzn4Ean3zwFDrSv14zFUrAKpvp7CngVFkMYxn76N7NDPVvkFkY8dEuW4kyGdF1bzz",
  "key17": "2xyftkWbzwqs9aYUVmSzV7unySUbxKRoqdP2b65kBgRY7YCcNoBazWWYDHt6pkqDxitLztq8p5GtxRCekb6ucSQs",
  "key18": "352vuXJ37prrQhPfQx1Y82spyBAwrPDMhboNsrn7EA2GdF7pWmeoRwTWFgUXveZk2LiS3aFA6gQTZvu5dZaQ6KTp",
  "key19": "xP1nJuVB4yJRQmKKywwpHTdyor8HyAsBm4odDvzayN2Qn5emJ8TSoR6TSamNUCNJYGFeVHVeUNBD9khFSD7z2UR",
  "key20": "4T3bAA7UF7udpPPs5jVic4uMaE2Ed3AP8pgUBZjtQCLQjwSic9Hh4ibvmmoj634ANReSVVRwMNQVbJiJtVsea2jh",
  "key21": "zaGjDk8WcCced5EXpozPEPfp6oXmzCj5xLyxAMm7DnWvNbukPQYftx5gty5F5Hoyfr9Ht5CsbMLrTM3Qq6WJHp2",
  "key22": "3FuLLjAUb4o1wqVJq7BC4odNEP8a9Jn9r1NrnYykFiyJfSytjL2vRxhPv6mZiGC9KowjiZSF8TJYiLoW4ZmkHLwz",
  "key23": "374162J8XeHX5DKmLufxF7NKoMJYyCSJDfpog3Gn3tZEZ5abCCB5CvqeatHyY5xTq8Zv6HEKDp6ryqSHtzm8v1K",
  "key24": "3MSs7KDdyUc7PhTexXffc8tGr8UWc21UG2ipfdTAF2NZ9VMYj5YpkDrvv4ogLzZkYWLQmT8VDZ2acXBTjb5mg38s",
  "key25": "5YZboWznnLwELGumcZwbkJHecWW5TjCicRgR72UjmHPMCWWXgvLRXF2d6q9AiEo5U5KZBQonPEiZDGujuvSrLdGn",
  "key26": "3y9AgeLu479YRqRBynJnPPZNx8N1HJTBpEz1hye66iRYEfJKH5cE4HeSsX6p74jMuxLu6AxpAGLwJocESUBg1c7s",
  "key27": "61bVcD6NUgENvDrrysTJYXNf8VTQ4eUdADNELmJAHRtmvGRBKm8rGAzaBLmagKUyCPRvdgfzVRuSfsQiN1YqXAfD",
  "key28": "24AtjPg38kqKXTCEhzNdaLrnmpiJL4EnQp5XZDk3gpCD1jMcFZDiDbzA2vMP3T8igYHZKsx5WXRLQ9kvirxxpY3a",
  "key29": "5kziQ4ccvZyecbdbTvE26gotjtft7yvnTBEadDELiobr3wLdcFDdvXxSeiKHZhPEssjNEM9uBem5E1xX9mUHuqwC",
  "key30": "4SB12NpEhrp4BAjwEbYvV8Xg2qg8nsEntj2jLgFtqfWazApb4voWN6odhHVdq92TEy1ZN8XdZda6c1o9tdrK9GwS",
  "key31": "73AYeaq7JTGd7qQm63pZu5aCMaqXH2bvgj8iJnqyqE1FPg3DaCir1xh9qqptBqQk3CyXQ28dnMi3feGug9QJ6Yt",
  "key32": "5k6Mtrs5mDgffnizpRcGGiEd6St5R3NAbEwPvhYQtbXxWTbFb5eDx4EEqFg3QQn9W9mSCiMH5QLaCWUcYzZS1xzV",
  "key33": "h3ucxyioqyRmvXrAzyqu2EfegLwbJBf1jvkRbSikYxTvGfaLoP81R6ph2wXzw9qxdCpH4SMG8BtLzNHTtGNxumF",
  "key34": "3UrJpAw1Kt35htP7T1FMXUHGdfCzSs872L2kWLFi4bWAvb74fw5ZU38Nu1GMJzZtqC6MdomMLS3Bp1hWqNbJJzEz",
  "key35": "FN6oJSSUp5rfCCMiYMPYhW7xF4G7UxKoRJ11vxwno8uMHNSt3jF5vp93UYdSUDrUtaKVhWZAeCsV21SPdWgLBr7",
  "key36": "5Qgdm7u52VKpKKkcnNyXJuXH8VC4QRaxg47hYXQRohwQ7AReXe5FUiKCQf25oDpaCt2DM18y8hPufVs6n5ystMr3",
  "key37": "62zxKta9RjRXHbSNoYcHaa3zp8gRxbTTSkvwAMX41ZWt7nWwLvBfhkMr9pDbmXd5ZdQpsnfcj7vMuFDb2tdKHEYf"
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
