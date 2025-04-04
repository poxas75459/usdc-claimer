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
    "3dPkXjHKHq5Tct1mnxyo3YtLDpWaTy8rtPKYqjYhv3AdttZEnQMbnQiyVMd859a4cH51YiUt8WXF4Fc9NAHPFCQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oKMjJyKvnKvyT9VXdxK3cGGjPdJo5tZowk4CZKjbLqtLSAJs6Wu2HsnFh6TeAL6oLVVA7F8E9QYhiy3KisVhXdU",
  "key1": "hjtfuXK1pXvEXnVMwWdwNzDg1nKf8BkSfWGhyhVhK4kHrtSvzd6vh8km2PQ1cbx11AomEZ5rEkvWQWZcUGDH6tw",
  "key2": "anUhHMhALAYM5zXNcnV4MRVVd6bnxPWRurk4HuvivCum8Td3gtdesiL6bUcfVDpSaeazzdnfTZWrBmfRVBKiWVz",
  "key3": "3Fc6UsSnVTiNcd8mSrwGuAHq6Qs1dqdZE7TVx8zxiZTT4G5ANRnm6yGPgqCoiCqUE7Bnf3zg7xH6bGGs9LXyk8rG",
  "key4": "3VUX2wVWfybQUhC82EvMk3kAa8UdpFQcjoGNeLyLgabYwCnqTBt5YrhiNvJ7cCZvYmbjDar1XBrFHLXQZFEMwDjy",
  "key5": "2BrFKbXB8WFTYmNusugpT7sxcZ7nzoduU2eHEGUAQPRrzXzgteUvBCWQ7qgFRfRSTSYigRYxgxG6iBXBvEnc6wXD",
  "key6": "EP32WHyAUXhX3vYbeLcvQ176KN2HyxBC1mUU42hnVRoWC8Vuuk6pCXAsb9zZXWnStwXUkrw3gS28SU4DUbjnPJb",
  "key7": "5oGASqEfEk5L7WN7zvfs2bvSmwuj8fbGCjQeuCXUZ91oCUp9PE5rUc9DbyWtY6BV7qV4HA3hFar2bFLfK8kXAfTo",
  "key8": "5zRowLCmMtbmpsVJhMzbYRJoTYZNfMuciLqUdi2d5CWtYYNTV1SuqHStYYKagVC7kncvnnFdgRbHMrThY4eEc2x6",
  "key9": "121eCWPa5JTMb6HmitTDHJmdNAmeMoq1KK6ADXVzpyNeHVAJcnyS5q6we1PR7QJY9WT2mmTztiaa4R4wPveD6HMn",
  "key10": "f97WCLqsrxKfevKgrhWrUUP8kPzc1eG4bPZ59ruNjGKXsNzKrS1SemY5QXMz3FmeX5DBQ6bFKsoi68YG4Cu6LXo",
  "key11": "3ui3QvQxDfCZJgkYUK39bvDJt5RR1uj5kzSgqmG2FnRb3C9n95CuSVX4BhCz8jYaB5t29rLDsxkeK11aAJL8rDdE",
  "key12": "4FeTJu87RCXANyDELJyi8dqUXoSEbrZ2jz1wJKVjJWoXTi7apL8h3mtGgwyjvga5gLitM5pJfJ3VcyaVimwPiTNH",
  "key13": "2e9dYU9fEWb8GfLLEhAcEek78M81izBX4sXSX51kksxwHdzkf8D4QXNVkh4YpbPZz7o7rEcX7qywvu3oi8YB6y2y",
  "key14": "4xxVhfew7AEzbrCZuk1jLYpAJvXQ3hnyf1XFjaHu68PX5PQknP6kdjHS3GrJ9RWdWyp9TzD748hAX6apD55pw5t",
  "key15": "2dtDguvMoV7bt44CCBRAGfohYBFtyxhtDVKBxEZpQ79KHiZfNeBmicBxYMQepHgxmfeWuZ5ykT4iGjSWsrdqZkhF",
  "key16": "5tidDzwRH9Pfpp9nSZ8aotxGtGfUNx5VxyVTGuhVppiH1NobZXnzMpCBxnefFXegWoEMAAGWhzhemYPE89jduJ7C",
  "key17": "2dG4JLV4hnugntrXauSd85RTpkGFea7pB73mJAZrW1pjhneGt44rjxexhTu4vRhw7RQs3uQ3vshngPFtHg9XqRJH",
  "key18": "3TwC8fm2RAemf8wSxGsfUfBiQjwUfFx4thRGdtTwGVk654GP3mLBVTS97pfcq3gRpv3Ad5A7EDUtPjE3GUaBVVcn",
  "key19": "25seari88prYWRfJ86ZiQTVfwZk3WedvyEUNMbXzvRPgLF6bKhbA3uNjFUpmWJUCfyZUbfcEtstJv9XmDJKCfmMH",
  "key20": "2K4Po8SgkZWfhh1HgH6JorGiUyNBBijSneHG71jtjG9TqnXkthdsXUXaz9kNoPNjwWpFNR22er8LcigpPcGNLm6m",
  "key21": "4xjVA9u46Kg6nZpAhy2tAe4VM8H1fKWqL3FDorBYf5hQbBXpV6pcCmgaEeZFfjSN64x18MZTS8i5mVosPSdsphRw",
  "key22": "kH19D1nyiaZVMCGWwgBWv1JhT6fvucWtjMR9UpaMzMW2TqHsn7hfm3GTPP2AC8RvDgqgmkAWz1m1VMbaPVSixdz",
  "key23": "3Gf94xjd6vTWPLHNDRBPcAP56YhuBTP9ReupzNzn5cPqVQK9xXKY6iTYrx9qfXGsdW1ycBUPaebi96BnUyUfEjnH",
  "key24": "KBr3RQMKmeyCiCG9dZcwwUmkQ7vg9byLHUzUGqDPTcyd6djMmFPNqi5AqfFoWAZQoqooR3jhNGFLjqxk1GeeUoh",
  "key25": "SSKxKbSchiToaKGWELWjoVjqiDbAihFkBxfm4rT1bxYAfVDkJWdzBEiEDPwcYoaF1KiQWhVqxXhvtm26e3wP3GK",
  "key26": "5soCaPm9oyHktKuMzLVP2CBSY6exE5V89r91adAQZugfaUKwLNcTZ1DcTr4AEHGnMyVCzkY2z8a3E6QBHz4GHhC5",
  "key27": "5oQcc6ksQd8A8RrftER1hWHCRpk5bqp7JriDBaNUJzqNJUEZNLRoMhNsZExAPrAFWXmDBGG1HqAodJiqbLtYSA5D",
  "key28": "2XRbr98dd2eXzGGEewnTguKp1FMEWHeDwZtqtPwTCYE3jwVzZC2ayUWPUn8FmcafRKpNQ6PV3C2WMzoDDptXDkEK",
  "key29": "wWg5VNkHwaL6aWyyma8tCZCpByVaxNoLCXPvqvg6BR8axd7UAMhgh87xDddvrQ96VHxEEshCondvEPuidnPPjAf",
  "key30": "4nWAJDsfj5SNZTWPWrUXXmds36oYtEhC438QbtVTduDvdZP8strTcnFm9RDR1ZiqTHrusgFvZg9qhvtcY1aEYTWW",
  "key31": "4A7xZEkf49jX23GLoSjazRiBKZJEEFaNmAsynZ84QoAdCMAvjJsNhM7iJekpqAq4ExKwAnKVZtFnU1UFvv1Uwjno",
  "key32": "5cXh2BC6mWHGouJYr1zfCVTzjqYLMHCvzkRW5GJrjbn7Q5tLETFCccriMR19bxj1i2wTA9BPfojBgj4awagw1wJ9",
  "key33": "Abpsb8wdrBuuBstDedj6es1Dtc1rYUQxmTHgRDLUUJRAg1kzHnevmyqVNATzokLPwYEd4hwbqdvnbBAbEhDctpN",
  "key34": "2QFmVkzHV6k1AJaG4RMhxV799QvKExPMbWUq25jXVxU9DaUiTsuXprjLC7yyQR1AKmMr8zFABPitp296seBkigZu",
  "key35": "4R61ZmBomUFS9pqaES5S5bDC1kfMbGYsRAhTG5Du8vfftaAS6WWb7wdYkomgYn73tJGPm67Zec4JXgLXxGrce9Nx",
  "key36": "3qULDQpeCQQdazN4jAFgdiWAkWwRJoNbPE1Eyg8rjpmK7ZTHAr3JzU4mpsvF6YPruUyGqxXy95g3v6NmPsLjaoaq",
  "key37": "4LHU3yF9HAaFaMTvF5sp38zc7vrdxtegwVcNVVnQzg3K7vetxnS8RdomptJUBc8Pq6KGUoe565Tccqx5SZxJnERK",
  "key38": "2wc8esQUipYkQEfutCaAJU9vp2eScrdp2ig7qPWgHs1xQct86zjAs2kQcW9TGTmzUAAZyvVHtvAUgAN7HnWs3JS6",
  "key39": "5NiPG6nEBpVTEESmp7uE66J2kPKWyqZAMeEfhaGxpTyyqg3JNEFdVZrbY77ixHHamt3djKKiYnPamACHLhzyWz8k",
  "key40": "5sKsrtTSxf92zDg5P5xZKgVJN5PZGRXZuGD8fKK7u3D3USeucUiaooF4eYYmhBq9gL4iQnQcFMXU6oDpokKFU2y"
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
