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
    "q6a56w5SEYMd51neHGAWGRfCbAzrGqT6K3n5HVrpuYgcDAQEwEefXmejocNBoDcNGPH33uoV21DncDwH1Dn4Qtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AWw5tVKCPNdWPLTJgK1VgmjuRPZ6yxEmeU2quLTMcwmfGShAkKvZkRhJrMXb7XaNsvCacBiGYjM3bJi3DsMKHDL",
  "key1": "9bXNkK2asMRG6XbLav4BgEtWkrarVuGpc8Cm6t36sWVoqZtGBK1mKY4FL9bvQGjSvSczSoj3StsGehEnQNeu6pv",
  "key2": "2UoCMXADUWzEfXtvFB5RY5na75RTLuBQWzmjj5NWT8xEqtvVi1Gj9Px5JWBjunmcDdkAnZL3Yt8C4FNPykDMjwqE",
  "key3": "2xmmE59Z2XuaC9mHnnooMNnJFrVRZVpaqFMfiJZPs7aNYTcmfw2BK4Cv2SJhuLxSi3XRNeaXpPwyrwGqsAQTUPWc",
  "key4": "Hk3kXdVL3apHDa5VA74zrJWF4cSCfpyt2UimL2kz6sANwAeDHoTYKyQ7uqbqKfgyPFAB2MUDvQFx6nh2Jo5yh9e",
  "key5": "3sPvryaATgyfzsLuFuyWrN7u5FcgXjWbtWxB482kXKpthyYxAab1UVeDYCBXfaYs9YTfAXTjMoPbvm87AuUEAqWn",
  "key6": "5YFtHYFjDJLzN1zdiGGPEhDXDcbfRAq9k7gHDSQVeE1gb863jmgXt2dSQmLGuo7vWFBtUondUQQxjHKBhPrHqV29",
  "key7": "3RqFnrY7Vw5tFxopaQAq3YynPgW5FCVct3pmyewknEpQe3oiZQjmTLCVidJiMkVyTyACooJRcf3RE2ZG6UCnNUdw",
  "key8": "5xHsbyefjAtPfhuJuMLH7DxNvXsnwSBWBzpwxvgnJRnDuRX7KG78DtZYmLDuxnPKxJYg2dCfXfPaBhiSCuYLYDdR",
  "key9": "2PK7fnT6zoPCpzM1452TU7cAFCYWWAjMFX3zAAadRdQPXtwPZLC4n7QqWEGviRXVPD16x1TH1UHSRiHAA52DeRXt",
  "key10": "FfAgYjNWDEpeymKSvTJb8kZjhqh1fDvb8n1EB5dEuZxbCJ3uEFTgELUuTKpMRoeKnbXXWZDRZm9QnQkUyifcaLR",
  "key11": "679yVjpM4oJ2NZUVdVecpprLry1YCsvyXsJ8qcUQrqfi39R47FUMrURp9HmHnkQKWWun6n7ayoAoe8ZFpaY1gsid",
  "key12": "4pTR856QkMtbMoWmEMwJSKbGnKuPDSN4m7mc3RJb45ZdsNGYMRQp8cqkD11Zg5am2iwpFdNB7qScHdWJyLAUwAwi",
  "key13": "4P9UG245bEJGGXkofRPZBuTvSekfzpnsLKjxNmdy48aKzPGq447pb7WexBfuvJeM6b8d72Yr6tcu4UVn1rY3XeB8",
  "key14": "4TeEfFbCk4tcCEeMEDXgYJ8hHioyzqMVfjc1iEMRrnHsnAwDdn4CGNhYD8sE5Ya98JG7GB4WDmHnwRsnaVtpAwrk",
  "key15": "3A16m3mEKnTmgoyb594x82ZjgpSuVjP2goX4xJ5sLJ1VpG27aj1JQkdAXixaUHgVvGtwe99dfTB9nwvTcbd4GKu3",
  "key16": "3QFXFuNE54FdhcLxpJ2rPdw9qw2Z683jZ2ZNu2Z7H5a1BbaAdpLkSDtrXwvvj1Wqrb1PKnp7orZZ87SmMgyGN578",
  "key17": "2YosAThmGVGmmWR5Fohud1FL7FEB4jMr4hxwXbUEWYJXCg7LRdVegi6ERmYPofTdcje84deaNL86dWYACRCpaBGa",
  "key18": "3a9z5jW2kVXn9o4wzLjxvtK5tqGergFFBDvNFuDdZMzTymmcmqirxVGKjTHHUcxKpZgvuJrSppRe7HBo6i9fLjaF",
  "key19": "3quZTYo1wt2n6MsJzsSFGaZhBA6VZjyH9Jj5sRe8dETRJYnuQQBkZkWKxqsGLVJHRX55nv5Qtd95ofZ1BQ2c5zef",
  "key20": "3BzwyRPw6rAh9b3fap3a9XJgxqqrjdj6sVbSegS8bxGp9BcdRgmQJfkG4Gt7gVBTHH4nnRbnUCNwpR5epMjKTNm3",
  "key21": "361dzbygdffmeFSc8f3i7tUYgNf1zMWg25QTy1Jks44Fm6Fbm9xYs4hom1YUP3U9uYCjfGcKkfD3cExRGiJ3iyfq",
  "key22": "2FVPuuvrScPH6t6v5A7VMSbwZBA1bcW3nvM9zRmRaxb9QeWB8h1fc1L2eAbG1A6N7r7EJerkvv2RNz9BsuJYdrq2",
  "key23": "5eiSbhUHSbkQ4Domh7s2gXrU7S8HWyg8W5bYgp51fLeXgeHNpj7tYEGZTa2Uf4GNmGsopWnFi5KAjWbY2oqRbcyN",
  "key24": "3VduuWSeq2Y8GL5utTbcs8r2w19sWdcG1NZt88UZbu4tF337BCEymnJyA86jojQaC29VyzybFHopVQVSbq3pbKaQ",
  "key25": "5UTAt2KRZuyj5zfJp35UhpWZ4excLeyaRmMkh7KfJmgbVzdEdBkSLxSppQrFv7nwrM2fsBN2aBRnhK1vxoMW8BXc",
  "key26": "cHVxVQZY3pp6dAt4tE6zeQFZWAHSatC4wrnxqTxWPSgtLCsSEsDRTWGo4Bym8tP7xDbdWYnRajnMQvRwNwzi3FR",
  "key27": "5rf6p13Uz4L1zgsBXpXfmZrbbhWGMJdt6dLbQbDCHz4DqrkmQwsRgCXeVSyqFNbGZxJReEbpWGvjbnkGFo3cwYRp",
  "key28": "2QBBtebUxFbbSjUUgWK2PJEJY4jXphzgi459WGwiZkwWtFR21xtVqLBKnQvxAShn3Dgr64HPGdPGqdjyk7M2WFcs",
  "key29": "5HdChr15hT5QWFyjyn7pUgmChb4Zy9wgf2ffSUBHjr4LxFJPL3YoPiXADR9q5WSe9tF5hFbafBW7gxVcw862yd8H",
  "key30": "59s9RZKWsZn7EeogzyAWPcVpMiuamhzXo5L7VyxupBi8LL8AJVFMJhvnrthx8ueVioL33syKdsVa4Bp5AjWZknba",
  "key31": "3ivNLajCZDiMEUEUyBA4C2VDGrL5MTq8uoQjpRfQZUwhDDn1qr4xriCjdyZMf88NdhU9B8D9Ke1qfYTAUGxHsgB3",
  "key32": "4UUGPu2bWVg1NBd3fua5UeVbpvUhaZS9TCeFxhbtBkZStboMNNqXJZZDFLH2JasPxWHGvK7HWiruuXfLL8YdmVEX",
  "key33": "4Um9VNzgu3sDvZgRpUGZiti1tDMVFwVm4aMDAQC4MTetT3P1UWJHdaE5sV5yN4VYWfEeEE4bhZ6PxanGnVyXYAWG",
  "key34": "4uNbEDifbkbjpKbJhLE2U9vqgc9h5tX6JFNmYm91SFCN1f6DNRFeBZcxfA2W2bdKXrpMNiEYde8ifEyKFUNgAvJu",
  "key35": "63ZQ2hpTTW2hmcuFuutijzgN1RzUVTiMUH9WrxNt9e9nFYgyisgjGusU7Q1qZ93H6XebgPP5n4e3fE5i8dWTV6As",
  "key36": "5kTbSgdUt5fTJNEea5nb6wg4t5LSikeYuvWrcqWnPoXXX8MMdtouRpqVm8KZ8wJQ5Gf4c729Zw9qpMWQv3CcqiVB",
  "key37": "4JFnZ28nhTKvZH5RR3SL7S4LLsvi3WEPs7ES6q1y8zNwxsotAtC1i2YP5Q6jzv9rkhGmodirRUAovELEZJ1t27iQ",
  "key38": "2Phyba2U38uxw4xNG4UyU8MAvzbdL5QGLGNRSQWnDVXLF6ZH7W7JjvFhW1Kxmtb6zBFb6oeG4N8LShn3yH2Sxgaw",
  "key39": "ppV6wKT68XvKpvHZzKykn166hC3fFgwKcoPjqBxaE4dACLfKydcnEaHhZSPy7XiYpYcCG2frqoqhEq5WDgFw85m",
  "key40": "4JXxkuahnhTJMeZVQJPsUeRn6ufzR1evpdFmt352WerRu8ZbZ23VmvoXakabv8NXhMyWVSZYy4gHua7wE1fn9y1a",
  "key41": "5N7rfAaZjttXe9fPSqu3qzFsFB8CXWBEaYXzn9WVjB6gUw5rDwirBgWN2B4BKctBWDSXCH5gTY9EdpTw8Dej474A",
  "key42": "tHz5aYUwb2eShgHU6sSwRkE6QycGsoBq5y7A8RUmqQcLp7fMYA9u1Nnzv7aELFRwP4SCcr2L7KEEUMFykTF2K6S",
  "key43": "NXvyWu4hss3cP6kiD9PsTBvJCKKrVNnYYRGCTqzVSKiN6GiwFXw3ixGvqaXEDrfVY5uq7nMqvmCVPMmet5DXw4M",
  "key44": "33XRvikvC4HJtRSt5JQER7RTEyWZkRHkkMABMKW14Vwzn9AZs6W8hZW2JmDkZdKSUYUf7h9qiE8QQNauVmCGLWV8",
  "key45": "28TQTQuzNQxNJxJHtxocDUHBeueGwsqFavasqVU4oDsrd4pGxTabCCSsDUMX6eKyVGcGF5EWTKF7Z4uVE5zBvNDM"
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
