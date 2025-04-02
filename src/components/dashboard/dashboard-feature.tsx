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
    "5cZtCKXD8ege68ef9UVjj7yATBdorkh3TWtGZ9fmSKkT6isyRWBqgEhve1LDEeyXKE5uuDzKxQc7Yhd2kgLXwaUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWcpWBRUzxwUMouhM5k3R4NPjqM9Q1xJDaQeYb6wLkss2ZHWCiYjwxz4wdSAVGyPFLHJzx1K2PVsUoXUeMidj3f",
  "key1": "3nygQ9txZo2GGe9FejFWPwpqY8GvmqyKdUZt8hKaNTZF9JJMVWaKFzFovxgRmgqv19fwekey6uxwXc2JDUMbfR31",
  "key2": "v1H4KxM7FBbXVwrpKrZtpuPHiMFitwvF6CqtqhobU6S69P4hWTGnvYJeTppXQgfK4ZUne5mayiz5schwx4fFGb9",
  "key3": "Svky1HpjJFjRF5pUnRmNaZPzGrnvJVVZaz9BV8rwkecafMgGVbXG7tUctPNZLpVrFMVerBYgjD2jAmLhFgR3N83",
  "key4": "67mDo9bDnNrn8Y8TUTRwemG5qnVj9gFV6jCUDR6a98HDznwyVeRmFv2SWqUfE9Uc88MvhzxrJhW42TtV7yNzzy4u",
  "key5": "3Ugy5sJoTuEZ4Hxjd7CgPTw8gVYjNDkBQwE5monAYyhu9xBS9Muzpbwd7mWy6KPvAEmExwBFDuyfa2oomz214rfi",
  "key6": "ud4V1PNvxV33FKkSrVDeovX2JgmbmeFHkW9s4v4oXgg1gfB1RP9gk6THhX2XyrvddZj8rYRrTQ848wxMX5mhWsw",
  "key7": "26Cc9Jf2EmVemF9sYJ9eJGooVrhKWrAdkSDfU9n3TfVRNj4SgjnTL45AYTYDXTzoZarV1AGtK3KC4RiQZLFXTcMj",
  "key8": "3Zczr2KRGEcUbDjMpP5K9QMY757sMJT1yTqp2FdhGBoJLPqZ8PXvJX4JrWo7DuGxtX9tA1joBLRfYdeYEz7eRy8X",
  "key9": "2KnQRLiXbzz2cvkhaMG5qSbLEdkmdWgc5gaNEP5KbBBD14a2Qp1pG9RHVmFAWphqDyY5EN5Cq3xMoujMg7rz66de",
  "key10": "3bkg8bMub9tigoFss8sHpFmyA9obtPPkzPAi58iwsEie8sPspwDtrntVMgtpHVo6kWXFokj5zjbxgkDsnR9Q47nf",
  "key11": "4TSRC2qb3pjyLDkjMoy8meq8G5SM61xKtGtZyKmBCGRyzU6cdET97DsKxHYXEpP43x2mxkZ75hptrj8LXbFcfNG2",
  "key12": "djeHbzY56wkcbx5oJ8GogMFzB358XmhcMJpZJu4QjchA5QLxj5BQK97JgjYcpnkce359XcYJJRAeDiaj1rFHzaw",
  "key13": "497X1DE2eHtk6Lr5QkjTdZ4Bx844nWJseu1VbDtcmxor6rGH2vnZzQM5gwDgdoWss7b8Nq7YNA5VWnNw2EQDLzrz",
  "key14": "2EU8H6bTHtU84wiky5ZeGVJNoyaGCVeRJcmkPY2YKjHbXTqHwGkzCJPvBaLaembVcBmD41P7RpRU1CRL4N14ZmSz",
  "key15": "3S6gpNXFcn2wMATbDRXyku9fxUNEreCNPDa4t4QjA5VxZbZgvU75xnYgqQpn7PBXZd5g6CP6U9CCFV9zVn8c1LrN",
  "key16": "4GVGidT4WuN2cYazBQci4CK8xD5JsQ8wv5UnCWBkuMdBchYNUaPPy79cnA7KLr52J9zTAKNLbWZ7C3nhQA5PCRg6",
  "key17": "Qn5NN2BQcZpibKz6DVMJ787kEhsHVWy6RvZie1zhP87tbiFy37PFUGhghJ8EvinxhLaDaaUSEUfrNvuEi5mFY4U",
  "key18": "14MtDDkhHtkm17KBQGxisKDe9CtkBxwdbymMUseQ9bCPYdEiwaVLRYCKbBryVUnFJYdQ5wTTYyuvWqpPH2aR4ap",
  "key19": "UbRoRoo4T9uKrXVkCSpX6ingS61KQBeXeBroEVpNR3fn96LF22hQ8VCNV2BvNfwdF5NgJf7ivT75S6V6giaieKd",
  "key20": "3fA1boNrENsZGE2hAiiboRnLg1FjdYqy7ZRPaZKt3BViQa8uxMzULm5ceMVUd177Rtp3eYv2eDGQ76hm9YN14nfM",
  "key21": "4z6kqqAZgn7SRJtpkzEbi4DcsLYyaZm22yZEiyMq4SyCzwbSRmHNZkVVT21E2i3oBv4r6qLPxvhPFyJoJgADtDtk",
  "key22": "3d64cG7AG5dc1PDECUHNDEz9RzVoHfsL4NbCCTH1EohxCnW2uc4kBoAUFvcXCTpJPfLwpqfZb62ESZKJpz76V5Em",
  "key23": "23J3sktey4e2Fm1KKoJ9sfWmPrbmEbAikzM5NWejhcuofsV86JckPc3uzBUqygmoPGJzoTMYzAqCS6bFBsCZpHvW",
  "key24": "2NpkBWTV75F3Ktv9hL44QeVJ951dGpZrc5hMDVMv6EQbMkKcS5g7hRDPrdLs65fTDnNTzsa5YrjZsChR1JKeZVpH",
  "key25": "5YQP5rcJpXQCEJ3wUMNtHz2Wqzp6W9DnyDbQXB6LnoRRshKpCU8LmcFBEKBq78dc7wn7TPLWozDiVtZhxZy8bE9y",
  "key26": "28SQEU3uNx96jyGXY7cVtBzDzidAeVYf5Satwe6STDpxniWrRfvr4rueN4U1izHqdkdU6GqPSAVtoCQFS7vReUoK",
  "key27": "QkCgib12ZfZYRPpfUFVBFrR1o67LDXPQZkcRta88oDWoxgJHXheHkxKmgo4GSiA1dH46GnwTHz4f5vVGssoqJpv",
  "key28": "3aL2w12B2Q7dpyBVuv4THu93MLNFdTbEewDJr918hQNsBF8jfKiYbmC8zCwWcjGeXWGFSYUhePQAgCR2yTX4MoTd",
  "key29": "3h62RQnXMWD1MXdsXTxkVPmzzwYvXwQFrWzEiEWN7j7ifG39ePHS8MtEoDEt9JdaFiQcT7XcJKDiH5JN9pZwzqac",
  "key30": "4qsDdbqvFcrpxYhRJL9nREK5n9jAjpst9bJUTt9hZwonoCdU1HFg7Dm2Qi1sbwFmZr6rJJvkhhZc86xeiC2cR17f",
  "key31": "4EQGnAmRp4e6WknGJvZYxJboWvrfq9DrZmE2cSoi9BkuGYjVCcssHcm4HVyz4pgk2WqW2x1KMo3hCrWnmyZPgGWK",
  "key32": "SbCwRKepd7XnGeHz9BeGQBQqYiEPqdGTbeSmzKRQXjyW8RGuhNKYgb3RQoVZPg2FVStQ6PLdBuNCshbdPkDcvSH",
  "key33": "nMDyWP5xKb43RULLEd9qoyMs6GFAfDsaEn9LpfnsMvWbEACUGgDeH9hA2BAwRKv825SNoM9JdashyQn6vdi9srs",
  "key34": "2zVZaLjVpQDVXtc1EnK1F59xWxY6bnXgtxySHFaWPzoQyHwdXz9YYLTq7nM6jS4dMDuBu7Ec9zyNx9CnQL8SH3em",
  "key35": "3ibox6qoyVi5W8Hwgs1vsm1DRkwwKk375Ji1yrBxJV84ppzXoqjfK2M32kEJqqRT6QwgX37JCLbgSCrJkL2ak4sa",
  "key36": "xg37XewRi6RUf6ZgwGtZpjf95hDU4u3EF28iQqgxeE7oDVgDSvC2WLacLBgsanV7w6Uqd3uPPKhTHGvXUWHsV9s",
  "key37": "z38q8ZvsZHmrRy9eXvikRTZREsk7sYHey4KHhS7LDJ7zJyxq4EWTHe5jHA8ET3twmeDuJiVVBBjg7L7hNhuVFPS",
  "key38": "GmiDmTRQLhSb5snZSka5n1rHnDkQUUVRoqt7PHZgnXw3BLRe6AcBpD29Jspg9QH7kzq7WY9NoWNvt5CV6YEy9VX",
  "key39": "iR5zGsrvMPsWgCq3cwaouYE6GKKvSVxbYZy5i1n47igXA1LGJX6MTwGmKjYEUBewCggKnCGNfZu1VbU7MRnW56s",
  "key40": "28LnhdZbqRXq6RufJE9fV7MrxV2PF3XvhrefSdxqtwbnzgwsUQN4XWkK2VQi1ua1A4EEqkaFm1RYtCBjwenzfuTV",
  "key41": "wZi3ar3B7F9aoAe4jWjGdEunEJ3CrMtDeHzLi6MMfY7uXDQ62SyJvo9Pti48ggahx4XLPh6mmcQEtR4igCyjSu8",
  "key42": "4yG116kooXm8MMHffMZcy1XsiKTBRAbb5qwJtTUn1S89j7Jy3J6eqvmfFeGEmu7E2DmXUVfmiKZ9vnezxmgAXp3o",
  "key43": "25EncvDrnyGseGy5yJYP3CgJuwy7sZwcJ5GS6itvTBBrAhFjdaAtBo344aZohxQ674peFnRMwGUBHSbobFM1QSVx",
  "key44": "tAi4DjHLGR2zmUQx7DN1kBmwG5aYkoHXwd2KX1erGMspvTMtVpFpQq1iXDGT6KFTmGWYfk1CrcGmK6jdR32Apik",
  "key45": "iL9Boch6TYuTtwTndAQ4WyogZ4xtipLmC5PG3xkL1zNBreGn78Xa2AbSH83ugcXWEcVyYejjwQZg4pX9bnHCtqm"
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
