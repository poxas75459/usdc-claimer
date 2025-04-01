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
    "fqS3qZexRtEyK7fSza7efhGh27GPkRgYNvfH74bvpG6bnyGJiQbHLVbq3f99FyLJWzXvLDpuAFJo4xtvy2WqjzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RbmE91pLmtXzqG3LZqeNMvCaiEWTNJb4QVzeb5QCEhUZov8qHCfY5xTum5ev2WWr32jqLxrJNwbcNQmdSffeSoH",
  "key1": "272mzRQUUZjJQXJNjE3sRmWkGWMjyzyxpvo8YZEfWhsKCmYYwwfPZwiM8dHU5avWXwFYxTa7v5BaHE6DU36zZvsK",
  "key2": "5Dwd1ZkT3MLZCKGXzo1wrKwqnLaS4YfDdgSLiaVLQv2p7a5qUWoEb5fPXrk9KBewu7K88ogurKDbDRUoWZByY1V2",
  "key3": "LriAZNxQyztpeXp3mx9ADdiUCULZVcjrnQ97rMMjnskVCME5o8KxaMjHuvuTmSH6NtjtUaHskhapL4ppx2mem5L",
  "key4": "BnNmeAGoXhkdrCVooqsQFQKdAa5sz7A5kn6DgTtuK4XnNLT4csJ1SVf4GsUWJ6VbKEZzcUAGzG7gwQNNbHdf47u",
  "key5": "5uK3gGq5Ws31WzwGwZhJbaAGfJoHmuwtLDiBKhEB5MoRwGBA5PhBWjiLXXWT8dxoqbT1r1cRFs8PuPWnu7rb8wDD",
  "key6": "yGc1qBck9LtgLwRnRL38ThzHg2a7VZKpueY6XzVPF66AoZYhQUW8tJLg993XcS2nz83pkKHmQ151276PdxGJbFh",
  "key7": "64wkWntCFRUj4UAzDn6ScBMVQX6j3viY5SHn66jWCbwdNUFSN2aVipqjGWG6NgfkkTYMneU5WfWgbQTToQcD1f9S",
  "key8": "MLUjUnJ1qqJxcnkU3z2eSPvFsxkM4kHgygtkw5bCVVAZJSzr4KqEFJki9LHgAetMTBcB5PowfetZb9zjJ3ZdV3F",
  "key9": "2idAmQwxcU9t79eSJbXC4t1fxTjkoTExVkgVaK2PM5DT2wundcodreCk47CpgTSgkyV18wFFen17Ha5LDG3yF2ct",
  "key10": "5wtdvUUJxXbAu69PCYHLjSvBjMZTiWXpWgnYD6JgW3Kx9nHFA6MGiarfRgSDs2CERJ7pqZCLHMFiaR4GUhRb5qAf",
  "key11": "Fo4aiDgMKtSNz6Ud3MwDrEkMnVV13PSfWzWuonRwUBza82RMx46RvJcHD625QjzCHhKAr76jpHAqfR4D592e445",
  "key12": "3ffXL2bfiL1WziPrnAyz4hgdYnqjM7Yq2wqDQ5n1mQ6JdjCCxGgMiCkhFeNobYNiZo5cahc7qJmYBzBAG61d6L2b",
  "key13": "4Tsm3UBz1poj7oFrdyFHndpJVpb9qjTVs6M2B7HpY7LdfPNsj8MY3eWkX1VfNRfP8sJzDD3T5sRJJDJkgDYg1uwH",
  "key14": "4Fxt1rqEBBSU3gZcn3in1eiLmX3si9nSaDdQkUYwxTKUc2YYpvjxLET3Hw88NgL1NF5ikbDWbqu6XVEMmBg8k3hV",
  "key15": "3caBoaWPrVC2rYeFxfvmF4Z59LuVkYgRD5AKaGRv1GvY17zvsJoN5URMLkV4Gf344jaYKhKiffW58G4SSAZo23ZH",
  "key16": "43vP1h8ctSY6ZkwGxPRAPVsqoc3kdmRnJDrjS8dFMxRADDLKs4VXSFTGoEAphr1in89iLGJCiukh65uYeMd4nSzL",
  "key17": "52DN2iiXYGZ8n6H2du3Jzrpce1xYu8sqFyr7xjUnxfG3EusrPAEAPMc6gQN8QHBYYPhna6Px7eVf2FhTvJH6cYur",
  "key18": "28hkSzBJHdzphmeyb1cHzNWWcZq5EeJBoYejo1JMd3FeD6Ko9NtyV3t2aqQPTR7tTEvk3QJ3o2SwC5XAFDbvN1on",
  "key19": "4C6QScuJYFueVHCS85uy6XMgcsZwmCyoUnJ76LayQpNrndGQZvcTJyF7Zrar7jWay7oU8WFCMkZo8LMYgXucdyZF",
  "key20": "3afHFqBKmXDVrokFrGwohRQPoyS4993xLjxzk2L1Zywq7HnyDwqK7GgU5LoFnPZ5obhJW8wKDZLhZxH4A3wzHYSL",
  "key21": "35K6iwfqFYuNVqbmU2ZrDJpfQ5D5x216KbErmkFkw1jmF6mkif8qHdHHMoFGZMtx3z5bPNaXxQAVdtu21P9uSvzt",
  "key22": "3JFL54D3X8aiGpNd72Pa8yMBsEMTiwoNnna1UeboHyBVAYLqDCsCGqPJxQ9jg3tN4LHSE11CA42imdDeAregxzPD",
  "key23": "4WQM7p5T2NzMsqLUpiakZLrHpDf1nQGLs6hmh7Gjsv4fE9Uc5N6TSrhivc8cvjyWnxAptcFKKM3V8JY4e69ienNA",
  "key24": "29FdPufWdcDMc9giMBtaiNeEBMyRPn39fvpRbXz12U6Muh1KkWRH8i96DDd2aryxG8aRyfzQpFcZgywm2PtqKXuJ",
  "key25": "62tqsLd6oeZZrC9hp4JYDu199eNi3D5P1L5TTCzu3hYjQ9dbkt75F5bfRfYQEA9P7Zndyj5MCnRUd4D53vAiSHV6",
  "key26": "3Vzvp52PAxjZ4VZ4GFuUCwaQ4kLFfq6mSUDUakx1gY7x1xJALHpaLfLeGvdYwJmn2NS5agwJF7sRgSWDC1Zfx3Rg",
  "key27": "5oFGZPUCAa7tQTd9Fa1fQZFR9orecMvxUD9UMQv7ycDAQLDrkJraVkYKY93sHy6V1xB6MLkpca5Pu6FGzgT5qrpg",
  "key28": "ZHAvs1y3pHzaHVZDQb2gU8PepvdwG1Zk6jYhLnNSrAvLRZM7mZDEZbkjzLABnLmzysDprsVxQH3YzJGiVY3TWEP",
  "key29": "mzopFBB74TXxg9UbsySnFESMwt1gzPLJRzjgWwKJxxLt2avEgcmjNMXF1shefr42yhM9oZUeQ6BDiGWFRLgQRac",
  "key30": "5xMMtRKfhNgRTqHKoc5agcEH83yAhExNiPJga1iQQFzdDCXzN25QkgNGfwDMamYr7DWgBsyoBEf3BxqV5JVjMvBB",
  "key31": "2knHExWSxTv9KtCz7rrK574kbHTn4jNYU5UEHqpdBcCC5gtx6xWGimxrW57cwZuFD7jWoZKeeRn6eebcctCccoTq",
  "key32": "4A1oPvpRazH7UtUUK4GxWBZ6FrZ8BCjaRB9sFMxzitNtmCRnXPYMNBBV5tMYWpE9YfezdQjcnebVAJow8WBekN8Y",
  "key33": "4UbQfz5RcyhVHzEE89emLMCsJyEwVMbkrZAjEaeFVX6dUcNDWDXLawb7wMP5fzdAHYoH4PwdyWYbrtBdGB4GtM5e",
  "key34": "2q1f5ZDRuZN69XNk7kuZJA29hqwbsJubLyeEB9GdKkB5hyiXoiCbobuVpFtnMQtVDdBcse3mZHNaSsU4beNZrWTi",
  "key35": "3VCkE3ETTYjPXJ3stnp2EcwLjhxJmYccwVMeAokfP1N2amWjK9vyVPcvcz7rmdBoPmRHDYZShJJEDfpqaqAvLSah",
  "key36": "GVmJkXiT2Aa7QVYMDgwKdjycENM9WCa1LPtANa7g9bYnFCeaRWW5iQUXJuBffyePKvZ7sMUxQvr3rY1xj6WxyoS",
  "key37": "4CRnirMwkRBA6FBKPh41GZfbHgtNbR5fKXTTwsjUuG95BDJd1tB7zKkkW3CsEC9nLraQ3ScpyPPSoMRDGmowZiUy",
  "key38": "3TjcidR1VAr6JFvf45GXP2U3RZmGJv6q9ZRKJk1YNQyoXHXVnUsNGK2YSinbHyJGRenw9PKwnjbwnd8RSac3gw5s",
  "key39": "3AfrGfTxo77qkP9kyPL4VU7z9FPGikwYSuos5ScGYBrJt7GP6xg6j3VbvqyxaTQtAwMvEZowywjgT2hyyDnJ8t3f",
  "key40": "5CX6eT69MLww5wrjF6b5xkWzNZoeMkq1S8FfwRT4gPyXdf9fYTWtVdaEb749RRkoM8369c462DJz1oCZ1VrFBFQj",
  "key41": "4L4wJY2UMXQCiA1UTdKYvabXFHb3a2cgwLYYA95SH2YdkmWC35BbgsFTRtXJiNKFVBdVbSnK5LrVe4TGjiRAyb83",
  "key42": "2wjoCZ6jMXyz4V3hbddDMA3RewSfGnQwx79mmwhjJa7kcvDxZzqgWYJ7V7qx4fy5mucAQcdpDByaock3tKFkC37X",
  "key43": "5RPnCZzdcXXPuEDkemVgrTeDxXVAxneLBWVSiWkDjA9PeRVpH4JGsCEMSXsgvsJ4P3TeMakUUu4ViQ7P6YzHorVJ",
  "key44": "2E45cjFboFv4mKzErjLP8kihPo8GiCmp9CoHyHvBVKbu1D7kkmBaq6kpouFyrsPnvcUZkJjzg71uWuXWi6uRuCg9"
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
