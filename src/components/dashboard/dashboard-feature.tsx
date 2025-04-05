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
    "2MgL9gbbjaj6vtQqx27pXisFrTuGNjySPP86XTKfRFW1z6yqrC5TF73ymf4qxCbzsGwkVUrJLSCdwY1zJkvY7g5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QK5uHBTEEa8YsQCEQtW7uGSmTKNUg46gBqk9BdEXKpVCkLBQkwzotGK2jSBBLNtux9QjNnQNFbLEiAvov9d2NnA",
  "key1": "3zLQD6Tuxv4wQa1nQm8PLekRgMh4AhNJZ1Y8YXzCCkKXAxdFskf6Q8Q9EaXwjy5rao24yBP55ctprqvVNyetgxsr",
  "key2": "2BJ9PGENc1LWXQbUVgVPuvCtZkaz7jBa2octA3YR85n2Yu3dhbMSamZvXhJj6vVM2cfV2y9Hd35qW2ckKRdLqVek",
  "key3": "2MmqWo49vrqExu2fvGjUznAb6YSnkagne6y7n2CsEWLwMWCf9AvdEyf5FL2vKtML2nWMdsoLSMyTnww8yKd8fgrA",
  "key4": "5nDJhbhNMCBt5aoJ1oVQPQRUCLxUyzRpzSctt5fHySoJa1y8vrvoV23GFt3vqMfuzeZjTJtNNNG6PnkFio54QLjP",
  "key5": "38tKMpDwL6SBm49ucPwdF6NRarGRELJ8LbpST7Naoby6hNCpT2AwHLGB7YjYprFiAMSvLFUswmZyQCBWrGyWWFMw",
  "key6": "DhZmuDEVgVo9CUcgEXikLoZKmVYhbPyyzbDE9Jg3eehK7YcSrLNowLzfuRvgFoAGo5CM7CL8i7e1UYzvnRCLPBQ",
  "key7": "3WcCb6ViNgU9FQPUKX29VhjbfdugqygjBjTQvWBHrxVxXcMU6bjFCNTn1PvgASA4R2vsUe65M91Rdm2zeYfMmLBH",
  "key8": "gFFrTD6umG2PPdgEjNT3yWWWJi1T9tBfBDa79HtJid7ALjPJjCR8D8pJvXiw2Q8p41EYkZ7vBMEArDhkPjMGgLg",
  "key9": "42nZhgtWXkcSEWUGvBXLy2QkVGoMPsynbUA7CWKTLQ7xAvX32XsopRrCSQ3yCjyFZQQHpVu5vqgKibjqRM168hGe",
  "key10": "5Q7wAE2C854JK4Ry8Kiumqmtc16oTuWbww2WNZUF3HS3SkYEBA5oMiAaBurEJsuVZ4oHLBH8HvAfbkXwpUuW9Ktg",
  "key11": "Z6TBr9BK9MqEK2XMw4TuBWVCRgNQJcGNz5KK5uEtv6k47YPnhg1Vo7iR1HXnyfkcT8E5xXAPKoN92xWsvi4F7Rp",
  "key12": "3ekpkETgK8e75XLedJZPB6zfyDRhKMugiEhTP1BVbrjVp39stJrkZmQTcg6mwx3KREjructkBHcMCVqCfG4gAeDv",
  "key13": "uZfVqUviRubTH4vtym25zNGkRa5wETXV83PX7ndgXKkpjNHoTLJWZKhctoRNKpGdJrzeDbH3J5xuCNsQd8mYoNS",
  "key14": "4R17SgE24Yar4hHZCeKqgqAdfFFSW9WApEK3wWdDQT64YEgAoXzZLw1MQPToKdUdHHU6U2PDczhZuDVfmUhtGvBN",
  "key15": "5NctiJMHYuBzxnjZEYQAimW3rhGQQeo7maaVd8ZfbCJpGsfkoKaYRVNXnaNarXDp4t4f6DdNkhJSqTaXoGSff8Qb",
  "key16": "3KCbsnT8DPhcErXxyKSESx24G1xpJRuwkk2xAxiMXFQyY1BAAVG5XABdx5vjZjeRmAf5kLs5JDnxUpzMcAfHoBRz",
  "key17": "5b2oUAXJYrwJi9Ha7jh4TdDfuZt63cVFRS3STCFdVUnpUKWg6q2Q3B9dUPrpDcvt8kMNE52vUDN32k4iqdgCFJSm",
  "key18": "3zmHBdAGEDe1j7fK2KDUyMKQoAnX9LVp9NWv4ixdJErqUdoYDdDt3QSUqfNghUxEaqjLqNWmUYHRF9A2VCWJ3S3A",
  "key19": "5q6ZWHFGZn9UNt2Gzxa8zWTJRPmGG2429GBtBXuhsp1pnWCntqLxfKjzvtd2PofgSekCjU6dK3ePWSDk68iMcD1x",
  "key20": "3qz4rkysBh8FX5TrV8JQvTUHqLfLGZExc1DS9ZSRwhKRa2uaRfd41FFKDER3Dk54XmxGCh4FSwHRKxXcpGwVJDH9",
  "key21": "5tHS3pkxvDS3whMwUVfQ3WyYJhjvyHCyA32y4XvL91QyN1Fc6VnJLVTepTpkdnfzypZPKepDXqyur8NkyMvFYbTi",
  "key22": "T2CdFiur7FEG4AWqGT2AeYCCKvGzxFjDWLgARX6CMxigWu5p49nnvUs2LtR3WVWc1ZrumsJ3qGcCpTCXwaahA6b",
  "key23": "uRbHKvYY5SHRXaZ1DF3yaEHgNB2s17DNbBDwcmUdxLensQvwYSF4Ff1vfcz93CWtW3RJY25Lmm23HWpfunnGPYe",
  "key24": "2y7q5g5bdZFfkGzxJcwBRhUphv556R21LmnRgKaBo9XtGHeM4xygXx6PqNdVQznquvDeVv1tj9Qf7j5WsGpDPtLY",
  "key25": "2Lt3ccQbeAvnqCaw7EJCeVb4VDdfpv7FNh2XuzkscN2UgQUyEawLtU4b9y77TujeuqpB1ufHua9Zu69GKYfZvoMH",
  "key26": "2jvRJrAkLK9ZR5o7eVrLewufPEuYJFESKhPWWPPJnQGYqroe9oB1Pxqa3Vq6Ha8riJtHTE6iRdL2ywbVLFoScBaw",
  "key27": "cY1J8kurA1V1t7MHTjriMRsgoeh2zNE7ctu7mMtaqkuzcHxCojzPxZEWuWFuTLVEUPrvbgvgvoTPuPqLkx5rjs2",
  "key28": "2XwUa4hyXUe8XBBYZnKfZdEs5CgGghhUCy9WbwbFLpFES9Rq6qZkRtbJnYCZyf5M8RU1hMou3SZNPdp4MGkoB8gu",
  "key29": "4Mg2JESVGUoh7zSSFFA2kn7yUkvu5xE7F9KJ8gzpJ5AevKK7KanhD3Gz7XbmUVmLRF8W7JaaX7KKJDEiyUFjCTWq",
  "key30": "38VTtRhpSP2AhCYvzbvjiBdDNAJVroDxTemFWypjLQsbBLkSDGP2zXVdoftVcAMon9tRbyxDFGJDEuj2fM5w66r5",
  "key31": "4QCfYoexP9uaMkARjArFx1ZhQDoQ4gZx7zUBGcU2VvvvVB4h7QdPPRoaoHhF6e1t7pRqa1pqC8dUKbF5woGga2Cu",
  "key32": "aEcFXKSikXi2TQDYdHxthLUSSceGHmVE1qboaryyq1PzdaGCJqqppwAeD6ktSnB6s8z1t2Fxkx9xgbKP2xr8k9a",
  "key33": "2nfZeLxFoGVwjYR4KXkNWj5MZRWQ4VRpbNofmMNxZKMzCQCKXs7JCjbYWdsWVwgDRn9PzhQ436xwBPogz9Wnrhzb",
  "key34": "2G5WuemXH7E9zPnhHbMhqU7GiHJVNCH6Usq4QkBmhEiFcaY51Hgjt7wCdYfL8K9ZFEqeyaqSh2n48obEUQLKo75R",
  "key35": "569ZxePYdXNXseW7GECgjHwPVHXuUMMqN3P52GiurcyxnB9GxWdcvztsESP6gRaWAXNquvgXUHjsvRfJFE9oip8h",
  "key36": "2PNwSmNSKYiv3FhGq5ZUxADFMgzxm9As8YruDpfaULvDVBSa3huALxi2CYwhVmsimnjwWQhLCi7PqCaR7tXmAi2X",
  "key37": "2S9fCQnruchHv5LBcvyjQMs3SwTyvnYn5FShPfPXS2fdCKtHKrZVNSkYCK5rap15qyDcy5Jt5ycuR3ynyF4BenzQ",
  "key38": "EB8DzFgSzQckBuYRqAG2DaC5mq1crC9Wg7D2X2pofj6tPfnpj5xi9PJU9vUCCNqrgwhtTiF4W4eeDgQriHgkAeK",
  "key39": "2NnYtYVTbaWYiTs3b5a4eTkgvKDQd8Xm6q3iJSuMJERC1rFF93GCLg8YoRVzPCpzZ2CSXjp78qy8sBW9jRNfZgRn"
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
