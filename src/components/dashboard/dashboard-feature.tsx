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
    "47NytsQNZZLyEtXP6DCioAfRBoJpCKrx41rpMU5f1wtjFVy2c4rme6DTa6rqdeuXCo8jkHEXcZPY16TRSsYdFvRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4uLTtEcUxSdgaGsjTeaU7kPMTbHJ5yJbYk8uJPJx2Ugi43EQY9mUhj6QQRgX71aJ8cecGMNq73KkDa4DucpfgU",
  "key1": "2yBXyqeSKjajEwAez3NPfitHT349taVVjz2eQLpDzVyEhDWyQYaxdZudakxYqQiSaPGcrcbtK4jgxdyrM4mLWTYM",
  "key2": "3bh47SdMqgDDtwvsrW588Do1De9y7n3QUQSm7SLLz3heGG8AY9dWUf4jppxp2NZpbCDVvxDMNyBLBb3cRqk897vf",
  "key3": "4i9TLuo9zCHMaKyxV4Ko7szkGCQM9uixtSQMTgjyGuVpRNAZeZC8fe6UFL6QAHQZsuMH4T429u4rtspmGwkUL9D4",
  "key4": "4LQRmUN9yAz2xsznMcWQCbPSPVFU3SAhX5fvk5nevuTDbA1qUDeVhyRCAqaAATr9sSRVXYoxzRbJu36wsxVzp3da",
  "key5": "37Vu9DLfq9rF7XyiCxDvbYjKqN2mJFk2hn3WHg77tBcmYMj5UD7qmBBJFsPagGkLAKAngj7KpXMW7wcUUPNBALhb",
  "key6": "52Cotw82BkqS8CDT7uBP383LATvA8BGkcqiqXsKeoHM48H4Xi7csLSYNDNTc82yYDrTNLBkD5V4ZSKLgheAarfHP",
  "key7": "29os7fi7iY8QWjQk3f6uo5Nt4gWHxXAnxbTXYBy9YMb57UQfkex3GW65A7nA2WhuPv3d9njCB1AjdFPdU3T74UvR",
  "key8": "2ZbFcXDXFN9yx1m7dSeaDkM4jmQBqmEJwDcqWL2gncr5VbyMRNivxnmkFcNEsydtpDVhcaZefZpvTrRkHUyBT716",
  "key9": "3vfx5XXoBRsZN54iJ27mWvm95n4xtAnSfxHXW8kjmekcd5sxHfmpfmEfR1CMhWMdcDcUCpGND1zxR635wcf8okSr",
  "key10": "4T4G8grettZwV6c4Nv6Zad9jAxdSDPS2gAMNSg2xVbDMfpoGaBtgDQ5AT67MkJeeZmtM6KQshVP5uPwgLVKzChtT",
  "key11": "3THQ4YrRY1emGe5o5LGTxWZohcS7tEvSULPS5bWfxRvfuFBZs1ou5HpYRkLv5gBrtH79NdtgsSQje7ju2zdrcvbP",
  "key12": "2NsyqRwjSYFxs5eGxb1E6dftSc8MiM8XQ68dGTHnMTVCpXABUUtZnjtNcqR631NH7Ksya5UFDERQNW3AR4JADHHS",
  "key13": "5iZTyvvRB5iPLcrNzD8btVSKfoHVVeCi9nYnMHototq4WxRj7PsStHiqhWttAP9sL5d3aYy8c8gsAv5rVtrnKEU9",
  "key14": "4pMmoVGdbEgwGSLhEh1v1RbussWvYHLqGenfN5dhrrcCj454N3BfZvzJfrPvu7e4DhWCSoJm11F2woFHFAcMJ58v",
  "key15": "cBLJCaLQaq7dwhkthqSVYv9oyTBMqRbGSn8ZPQqyex4mevUiUZfdxcnHJq5L8pyqcbihxNFwESkcCxQcV2Vrce6",
  "key16": "3RVtQdxxNjm2pitGvYcAHQdNBohSfiTBAiq6LyrpCuPJ5JWGqbvME9iGdVWHaCS2aBS7YepHZd7razmvQyihKwyi",
  "key17": "5mwHmVC4oH2zXghuPyW48u3EvdFypfMHxaKduncezWo7Nf1VvLWuAp5F1kF5v62DDtK4YwTShiRbNPSpkQVLSPkz",
  "key18": "4TLd8JGQQhjNJ4TfeE6CZt2kdvFYr77iSNFKv4PXNWdr6kLkKUUKLsbeXvoAeJcZVQcNwbpw4SG2dys2DhZ5rUe7",
  "key19": "3jVP2RPH4r9PiYWo7cChqEhByBJPmj1x35Rxpks6m8yzDz6zRHg9dYG9scymTDY4L3tBdeLio6qyrzyCpWtpFVm",
  "key20": "25pCs8oaYZt2QUmrCCpb9uq2NQZo8t1DD5itmqjVu6vxAPi6qXgMGm6pMcTNUKELeshaoXAfgp1Yiv1XVmz63byk",
  "key21": "3bD5LTfUiPx3qTqApvp3yxUE2Fm8qHnrcLKdRLSMwDJfJ8fuLK3FsxNi8RDjcSD7gNMH4R2AYy7SuHtSgU8hdt3L",
  "key22": "2zqZRo8Zj1iH9Qm4HtMx3SQ9WesfRoS8eEMtXtMH3Tj7WfFLTPiJ31z2fHw2n4KzwznxPrD9JyMr9hH9BEuve5Ej",
  "key23": "5wQe5xFwk5m6vfefC5dFbZxr3gfmwHXddYe8YnsPCFEFFNX1ATtDYLkisjo1Qz4kqEfhfsPD8tRLpZcnBWz1BoCB",
  "key24": "4S9rV7HJN3qdXqBpGxLVn8FcPwQbWCwR6oDZwRc6Ce49Q83mTXXufp6dxBDGZsQ24JHbRkRGLPpbZX6sp3Jkzq3s",
  "key25": "569Rycs7rCZskVmoz1b3agyNMMxmqWC2ws7L9TiMWy8b82Hxas8vFoVWYRAqTQqmWaQMNuaRFHeEUicnZ6dQp1p8",
  "key26": "nG9AKdrj8kw33wj4sgVKGVYPmT7yeKRUyjFBuqcCjYgNPtsruFaLqrtJ3bk9HNcasDM1ToZUEqJuLvqEK8KX7Un",
  "key27": "59e77TsVRqNui92TX8HiMSZ8tAG8BKF2dWT3wFevHPyJbZEWEKzhFXgRiRpCSbAYU1Wo3cac9mmW8S8ewEtvcTez",
  "key28": "2u4DW5NzTvmnUtbxpdSJLjzGN5KxCKD6CoHimRQeqgfd8ZPJH7hJL1EBnoiEoef6by2NPw4cbQELriVYyFw7Hz5E",
  "key29": "64dAG7TBiburBsFGGuM5JB4nJyeqzJhCKHCVSBCZbhiriu4sjC4yp89o1WQcNBRLq9FrUvWWjZSWwBQ434iJTYxs",
  "key30": "3XSVULpkmMRmgbLEptbRGuHGGi77vDmxEZuLC7cuNL6JqxVubhz2V2RhWsoXLaFxYH4Di4EFeCL9Sz8cToJZJDqP",
  "key31": "pGdxroAoWCUegBuDKKd1tcqgcyxkatc4iSMssQNaXaqWj2yccUzoFVuzCFx96SSPQGauZPwjLnx2kYedroirjo6",
  "key32": "2ajdT4ZovmDTcP6Yu5gzf2xktGSvZGnfMdNKeAJuGDgwqNKkhQyWjiDiwz2Qawq2rmys8faV4z5ZGqUhGWv2EmAP",
  "key33": "2DEEFSusDfeYa4yDaHRytSecd1n6dpHsJyYitgvNRD3QMtm68msyWp626jMsRnFTsHQkCCfcXsxBVEimWBdapTyF",
  "key34": "jxtjh7jV9ftN6WvheoG871xFNB3uRqy55KSTDxTy8NQ5DSdvr1a7jAdNaXWbGDjmqKh9ioPTHpAeJfPyhzwH3tA",
  "key35": "5tvhKJhB6KAeLUBP2GGV91xcgc7ZuzzevbS9Rd7F1G6oTjoBMXmBNcUYAxf1UD1JE4RZfkApPeYmZsZoTYqPYs5m",
  "key36": "4EwwQyvScTYNsojrYK6S5SfwT4uM82Q5HL2kykWnRFDt4Lh9Q3dB6K1txTaiMYVrxjZK8PMhYgFw9UgNPr46TXRZ",
  "key37": "4oZN19UDonVpEMwyGkWurfpCByxHxxt457RTNcFVozi9JJpVxxVtjQx7mnMYDMLWVH8aD4ef3oYyUuL1NHano9Ss",
  "key38": "5kt1P91er2HfgMTNFPyXiCYvnDwPvk8KfmMGCcQYQak3cp8YW7xD8u2Zqo7aDdriP4SFgQPEGQ9QNUTKZvgxWin",
  "key39": "5rXeBQMGq6CRcDAwFkzRto7v2xaWASLVhHvAt4SENrmaYvWk1h7qXgBNXyoP2b6sNd4ymRPiRBfh7k9BMpUXFUAz",
  "key40": "4C8jAC5tvuqnATcofSQkd4APwgHyhJycKML4ZJiUWiXL3MGvwfQywHgrYAGpiyTeoW6LRtqPB4H3ns5cSBbrt3pr",
  "key41": "YEy1sRw5UyvV8oXmFsfvNxHtxUtVrmBQNkJy2V19wans62tdW6EJ5cYGzGyTm2M1s9YwhC49Q4n4hAk6KFGyef3",
  "key42": "42aRfAjBUrf4X2NtXQPmFD4mmkAB8QHh5KcV1odUwPn27mcxpQia8uk5zjGTKKp2fdddqBCqSfXnsej3HLpiFWfC",
  "key43": "5ixWjJZxUVgozJ1eFArE1X45XsPe9Nq3HaLW48MbkWXs3GdttD98qYQoALKEg9L46gYUxNgxByTbijiodw1WCn38",
  "key44": "CJbhFP5J1rknsfGV39gQr6QZ1HbSxbRucx9nmhhsP3GoreWNbdXdy7WDz5MfaB3tJKtPVPzAVjFd2e4E4gVY9eL",
  "key45": "5fY2T3HqrDrjPre7j1rWrYofo9J2NAMeEruGkw7Ji4Eeycj7YAmrz378NK3Jsf2MNGdZSc8YuUwdc2nj6JtdVrj6",
  "key46": "48DKMtqrPHGYNVqz92ptoiFU7V7k42NBLskNjagKEpXKkvgifhTtc9V119ARjtcXHpwgdoBQDqRvr3xg51bzP8rL",
  "key47": "5szHMYtsyED9UNDvJ3P3tCA9MYRwjQHdmR8uuuyb16ZRWexmx8TsYmqJPPrkNqeKJC7takDNx9vgK7hVb3DacRQ4",
  "key48": "5NpT2Swi5WNz8FTrpcC4Ari5gxEnVWh6rDMZyyqd1nGsxRqT1wGBpaonNj9UUmgBzbJk5m72LxuY5VhUtPQNBUXj",
  "key49": "3n1cxMgL6v2UqaHrAdEsxckyMWBxD1pC1uThqgVepw8och5LgEUS3XY449pJnZhKLN3TV5d7FJbFKGPWw6uuHoba"
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
