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
    "4mws2Wuqi5hwGUpQzTbVTN2HRTpu3kTpFVBLRjBmCVx3p6FzExT95vuH2kBw7wAzvXVJri75TwyVG8Ujf6L5tzEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nBGc1hJM7P8SdmAeQxbxTYCmZR9C5uD2M4paRfR8AnpYJo1Yg24kEqqudJcZCJTvB7nabcxCRaG3SeRZaFcHZHN",
  "key1": "2vrhaDtBH2cduttS4vPLMB23tqrWui8GhSgEgNse7BzYokjdtbnQAM3KzrsBveZ9u7Cs84wdpqK6dnBrx2GnYJjK",
  "key2": "5xboyWkemvEwgo4buGQ5KfgjZdSmaEgdiyywH1dhx764ETksKfujHKjnbn25YzGiKMK6thyqEbwoWmzWZUmkRDdG",
  "key3": "3a2JggshoXaZTfKxiErU8T6Bw8xauVcPjTL6W8uoyT8vLg9UiYVE5C2MAqTYPqzztPPttS4fQycmPy9yVBJNDqFF",
  "key4": "2aaNJ4DMht3rEx84FFsxe48VMJnPv3aroVqv3JuLxadaZo3W4UPHztQX6DLKpFcC1aydjDPbX7kgePH168aB8UDn",
  "key5": "t3Wdpxr3SPXZHSohjVsjUKTsVSQ8TG8VL1mPFvTSiz68ospzY33WKqA6jrwtRS7qyntGQdoVq7Q9CZu3hN1J1KA",
  "key6": "7bKsirsVDNkyDY78gbCvtfeX1t11QP1rjUZMpJVvP7qvsqjCRoqommugWjWmPMUBj2f27CezseKhAe5sA6Xcf4h",
  "key7": "XpHKYU7PARerxb1GaEGE2ZA2Pchx8NtCmAy9mz8tYUhUpcPGnVnWV3ZDeSXXbBeSxTMHPsbXyahYvSz4VdvtqeD",
  "key8": "5GcsweRad4LSrtXoV7hGpgAoKFmSeNjcUQbTujBnhgLNGEUsjUKkavKSM43pnVrXaf3uZRqjDgez8gXEoJysNu1Q",
  "key9": "3PYp41x4hd4Ykww7Pqp39rTNpVpyqDbfAHyYXDroz2UjrVEJ4FGewRGnAxtupemzKkWXQnWee7QAPKSfBamExinz",
  "key10": "4aQXcsvyNsf8EMiLgCfSwyeVYzXQ32RCRaYTnMG2WgmotpBuEd8LBUAfny9voqPkGo3tDep3yw7VFvk3XhMbHqQ3",
  "key11": "3o2995iZrUL9U2zthxwqdvaRy8p4jGLH7sLDQJqabqSonNzbmkvtApRGXxLt9MRpsufDSRUG8CqhakushvcqVri4",
  "key12": "4u8P6EBGaFs4cx4M8w3N9Pv2bJDb5EmYu7C9HLB2mh4JvzsPcS6CKoU7EyjRjSUcXj3CUVg5QgmHG4CRjTqAdCQt",
  "key13": "JQwELdyCsdToXvqrbFs2Dk4JAwAKwqFMFS7zuFoVvjwCUNrtaNeoqE8ockj86nzDDBjUncZtNknzRa1xHSR4W5A",
  "key14": "3jQ4s8dKaGN9QWdMNgCz1VbadwgZRpsa3ezBsruWkLcyoyUoDcM42vTSq5ZL1PFUEBWsDrsCsEmhedT4uUunNpHQ",
  "key15": "2VH3rRYW4EA2HD6szvYt7CaCi2B3mn8XjB9DK3yvufTCB1ddZtMg5zDxb6GZJ7BMCFpsofKbPg4vEoVEjekhrC4m",
  "key16": "2bRJW4QRTGrap14nWUZWsAkdB4zfZ47z4HBJAnd29KUh8Di14EywmGUHkvHDsbjQZdbpdWuBsK4y5Ub3yigfg3GV",
  "key17": "5xj4KtQoE6pRxKALEdw6ymoUbLxsCy7wqJ3dbqEhYbTHKiHD8oadqa3SsB22PZ52sXE5By83boDZfiMMsZ9JRj9G",
  "key18": "m3fLRG2chMkAK7pnVD1sbpXHAkHa3sv3aZfB6cPFgCtueq4x89LWMQnFsM2PDitdWS9io8ktP9QbxteWf1HrBZf",
  "key19": "UbkWRbEh5XqT74idEGDfF9WcKP3fn2kGGAg2mXizXx6VzdKeP2kUwyTTroXZ1t4q5VpzrJjehVzmdReQgBSaDig",
  "key20": "bDAXTrr7LacHMsx9GxZXkLHML6N6WTPaYwPywKKnA9eDwmmGLp8RAG6zzr6g2sQLMw5wreMCZPVaU6Et5mEe1gi",
  "key21": "4tMeVgvgBXtWKnV3Pi3H4a1H1479NRiFRpe1mTi8fW8hujjMd7iAGkEGBn8qtxcQWMAZ6owTrG645CfMmPCeSogW",
  "key22": "5Xea9gTDJtGu6WGXhYr2yCMChVZKSdBqbAB4Fo8wZ8XZAA7J4uEWtnxKDEBJ6R7Co629YXtTgRruLW12EBVmZdUZ",
  "key23": "2T3dfarwtJ5JRyAC8A4F2vk4kRCDHbRZaXwUNhyGqqxFLNHwNwU3uYnHtAfqxNFLGWt1cDFuyPn6rhnJsCn4cWhn",
  "key24": "2tWowvF4mB2UV78uYcD7UG2M8aK1YxvcSJAMqCagJipPCkuQazrz5Gu39EoUJhyrsKUrERRTyFUeypDosjtsgFGW",
  "key25": "W6EsqH3mfd6oHMJFN8sh5p9enX6NMgaaxyGJHs7F5EKy1oY3uvmP5Fxmh94zCgUrXoTThDVQofEjriZXe838tx4",
  "key26": "4dgw2gavixWahrMMbfZAP3jhNdJ71isrcaK5mmPtjyZN67k2iufwwyKZD3x2ZeFRmJm9aMh1au3iU2EMns37a6DA",
  "key27": "5NxbqJzay6NMsypGiQzHA9zVHpvBggBJHh5rd59akDidmcv4mwmdYLL3gE59bwKGtnis1oEuds9EK9EtmhpSL4TQ",
  "key28": "ouKvByafNNU1qwF1zPCwbJpQreWH4MAEx2BBhX7pESG2gusUf4phxoDU7w8Jch97gib1Xj3ghooPj8GynG6tt9E",
  "key29": "2jFD5sWMB2iseELuERQtvRio48jiaaQcRheGNLx8hSosey7UTQqNWZZ5LK3fg8HL8eG8zNQFSMvC1D1gHS9X36Kh",
  "key30": "3FNEnvTQ3Cg9v7juZ9vb6d6wj3ZUUwhcJkHr8zb3MQm5zRMZ3CTpqoke3nNCUPC2D3zAYUjyi22iFwA4Edx79s2C",
  "key31": "2U59QH4oA8zeBBSPZFqNcCyHjJb6GdpN8TbcS4mzzZGojrqvTV38mZhEDdUGpToKCRUAa2ZxUSJvGNZJcFCJsG7",
  "key32": "3hGfCDAP9NXoYN4ozPUiVS7j1BAvHvwaW385AuSfVs1kvBMwWSVYahbULmFHKgvHQS2ha3ft1zx84RmKpzCQbgG6",
  "key33": "988y64VDQoP873ycxx2uv3DhLTfNXry4PMdTjfiQp3qaHXrjxewZutpU9MwKqndoyaVUfwdVWUrcT2nSaoXoUMV",
  "key34": "3hvDfjBPRX64N4LkgjqEScgZqNpuzKTcHFQzZNb44uDSfp17MYAak4bCkQ9iytM95ivoxRjvPj2xdUae91wvCH5h",
  "key35": "4mfYGHLpuFAa3GpSFA1Ukcb7fc6GXtHaqRR3g63bvE5NhgUYxkgQqhBx1jh9Pzt1ieUPpNpoEr2eSbPXJQFGdrAR",
  "key36": "2b4jeWj4PZg4QWn5af9iEf3nArdgLznJPFBa1PJeWzSHDBDP3BWnUbaYYkPqKjjMEzJZHfBP3qE8CQEjPBtrmJRi",
  "key37": "4qvAGW2Akjx5nKsZ5857bqA9QPSy7dsMWPA52Qi3Ecah9tRDQ3tCFLcaoZpqYAqx4DtieLjy3zwXD7vrD5Vxk2vu",
  "key38": "4SEcY8pgjpqUo5otanKRSqvGQkAaLHcGt4qEMSbQwXUc6s8YoQnJivVPtxtyE4x7jq2jeNjzwnZesjnkSpxNQ1Cj",
  "key39": "64JYfTYCBJtHJACbN57FKPozEFFCFgs1T5nWqF84iwB1k3uBacxYaxiZBZ7HMffA9acxxq5xCogJdkQuwDbyC9Xn",
  "key40": "5BBjpBZHLAXmkWkjwR4ecGA12Akei5PGd9BBuAeRz7wr1ekjRJ1e34P9BisC4BvHM3BDBgLE7eDCb1j9LvdZPeH3",
  "key41": "2wE8bWJnwne1YEDVYpN7WJzFqNVZqJ84ED1wTfdRzjw9yuA6XWnDAbbsJxt7UeTrERFjoEVBGPNqYmvdScD6pAkD",
  "key42": "63GdRkEsh9N3e2EssE1YCKEiA1q3vgvTZGpz95pi5o2dB8PQGC9nDtTs7PWhusaaK2ddVSLsrejyoZNjSJ3w61Hs"
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
