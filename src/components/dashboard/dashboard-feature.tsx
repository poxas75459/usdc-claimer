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
    "29TAy3Skiyh9nxAP2kN7EsDUrrTxN3cbDVPHqF7jrViLWJZQs9fBQmLXs5oMYJAFo4tWVRNmsgy3FtfiP8a7DqDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2vog1SFxT4BhwLMN1ynymBw4NkKo4UNUvaAeP2anrHM2hUCgXsgjrRi3SAYSYCnKBcfdzHmu2WvACYwMGbdF22",
  "key1": "34KgrmWRoZExqRKDuKsaBRLzja6Mcbk7uuhENJW7uwqNBzLoqvoB3UXdxBZ5JEo4iqoX91mCkZNVGDQecc5jV5AM",
  "key2": "67nPpv9pVxKMcv4MZvDwR2c5TBCG6ipjCo9LFh9EkCStAzdbCJRTkk3UXHyTPtDBKLSUUfsdJCEsEwZgfsGNopUb",
  "key3": "2SbdnFAwixzsnHfTnAemTKkGRLgJsSh34NdeDd4DSnzS2T2y3iZxyEyTNaFA8mrQqcd5GCxuY6D8ef9hFHBthJKt",
  "key4": "3s3crs6b7HGyinvoAsq5sXmESPLasMmfq84HGizQFB52nAZsrPrkkBdpsehGnMCZaWJAWQqqDxMotN6vxTqPKzfb",
  "key5": "4LT9sN2CDK7egBbvzS95LKyDZYgZpo6Y8uvb6R7RXzwZcAi33LpDWTqfqqrzpB5e9Vs1GvbdPDVX92Hmry8Ub2Kd",
  "key6": "KAeqLfJGnwKDTfTQoTR8QyBokCzEKnZfk9fdiptnfvr9mSapmHjHXKceJ73Xdu8okdAjcQUbTW91DffcprBhpwR",
  "key7": "4yaEphQcMMSjQgpMReQTAiqQ3szQwH8reFQS9KxCHkubJiwyLYVm1GumT34QptUc63zj8va8RkrBtpNCtnZ7ApnB",
  "key8": "4aEAUsXAao6EgKqxt7h7x4SXfUnh2iTNb8P4WnnmxU2SkkdQ4ZyHsThC96KYbnqCmzHVAwjBL16cB6Djw7ZND2k4",
  "key9": "4vsHSqMV93G1neJLRweJvntAysETn8dnFUhKWatKnuBaG4BJgnD5UEEx7sPeB7r8yuY2hdYLdQkN45cgFTKnAnPH",
  "key10": "2z9nWu9Ptkw58fdvX1q1SiUCCLepdbDnacrKF5yvog6oZoHTBAJQNNMJdQWBj2Zf7Qv2bMNLoi6oriLB2XxJEXH",
  "key11": "3AMo7vZqm6weiPboWn15KNKhsyXyBM75SFEgQLgxb5aS1ZzcCVwGuQcnix15KKMt7ds8W57gquP2wq5T38eHHPgf",
  "key12": "xDVfqsRtw6vxouYRuwPbYucVi7z1r4FTq7WdysE4M4uqC4r2cojNhLxeprSSqza9zYBSD1md4DpKigM9CLx3v4U",
  "key13": "4jDA9mHa7ytMk6cVLwCN1aQZaEU14nivMT9HxZFQPVoDut4eXxzbR98QC7vKRyg9L5KrziYYPTyoMBTy9tc3JSFB",
  "key14": "65gN5kBeGygsUvJJssZSuzXcDxm1EsafFPM3XK2dRfnBXZnYVknxbhBhNn6unnzKJbosXGvR3fcLdeVoUXHByUuj",
  "key15": "4HacqLo3KH8oeZVrqBG4FrLLCW61oeh6vGbnFsMHMwVJXbwLz8j7a2Fznq8922t5iJPmVCckZsi3exeTvz3qwyYj",
  "key16": "2ekwDjMpVQHyoySDiz83j1VJ7ag7owx4Kss5Eqt4aeNaG3BysKjcagni9e7eFUkwQ5qhwgm4r3QqKWQFeGSpnfnU",
  "key17": "5LjrwTsELHU8W49NxMBunsDoUDif33qGHx1x1BYrzgNr2aJMxttSiWA1VVdXLL6RgcAs1KMeHwEMvuKaodLXAUtM",
  "key18": "3kGeDv2pfp414ssEm3zbFyZ6Mju5P7D3HoaH5YuzsVkuzS5S6owbyPxgWLDRFuB7WvVk1aStanYi6CAJMpH98EFd",
  "key19": "5o7b6kTUU8bSbzKbHsE1gUUzgZehB7k8yEkcGYwGXw2H4ZTxYSQ2HgRMdRYJQ3bpxpCULfrh3B1m8digWwEtaLbi",
  "key20": "5aMKpeycjYRyjWo7MGjeGRX9LEAWUDHVXfPJgsgQtEv3Jsbd15bmn21hVRzAXZ9kpWLVRVN1LKU19TshahPY35SK",
  "key21": "41wnWZHGrm6Va6wJs1JvV88gwUsUBeW1X5anPxvFN4RmZji4Wt9NNWoHGGfLB1vunZX1vDFbfmvRRMthQzRgCQKn",
  "key22": "2Ku1xfFCjzgA8oF2TXb4hCAwDCkLRhQpgfNnsiGzEhxcxtsJdfjqfmQkmEDXotvpdqwr3VBiRyWwUHdJgSYvGNaB",
  "key23": "KdiDXDrMtMhQW4EtyfboTMxeMLWeWTxdi6sB6K9fC7rpzg4RTExuyGAmcGk2WHYTLHuNSWUoG6zC5vUcrqKNDWr",
  "key24": "3awtsZFikBDyxQuVK3LCYANnn76XeviL4BjzUZLyKo5tfk8yaoYUnMgC9vCTBynFM7jKdk9TJHNjobGbTx7zZ3zm",
  "key25": "voZa6BrfKM8LgCKNbiNVNJewupLBv3K9vXHu9mNmsXmvWBY1DwkADKYX9VqQt5qgyjPmYrq83kea99oVg25nZs6",
  "key26": "3jkCauu2TGfV1Rr2JtwidsddRMQCViFBExrvNFWmyiSzFHojcgtWMxgaEvEPv9QB8TAAKorNB9Yrymq6j5RGPYr5",
  "key27": "43KW2V3ZowALRkwjWz7oG9ke87QQsbNJFRxBnkTtiQvoxrXG6KN4F7oohrXwxj7M6d7AWxbtGTVuPYxpkAzCGA2R",
  "key28": "5jKWzNK1kJ8ykaaGctQGfF7Nk9XYLnesMs7u2p8vhdXcyu2bZt62Ga37uejZEAmnbA7FRB2Za9rB5bRhG2u7LKjz",
  "key29": "2H6FzJohLUTtNbkziz7xp7YyCKJ2tvhBJhMFngE6UoNqxEgy5CCFj6mP7tytQabvvbH5eN42rJs21ARukLaBrMjM",
  "key30": "3Uh2fB1546TnDTUgvfA78Jab9vKfsXi6Sa19NViKa8MaCXhCxqzYmsUYcR2EzkSv9S1y51ZNmNUjXb3F12Vfk13R",
  "key31": "31F6KE2b6iwYxvAuhyPjXKC72cVDKgSfE8Zg6FWgVkNhy2XVByiV81RzSau12W3qjxcHECC3nSbxwHFTVLjx6tqd",
  "key32": "4coaTbEPZYXtzQi7xh7VLjT6c7HZdxzHp7RKLfcqEwUeLNXQtQJuvKrV85GSfLhqYLJunv7B2cpatB4zkr3ugert",
  "key33": "5PeDCeyRPHkQHMvB6dcV9Qi7TNxm5rRmysjphtHQZ6JAstvxc4CEJp7ZxmPbi1C3cp4G9xjaoewqbTZHMdN3R1AD",
  "key34": "5wqT2Gx9BpmrmECwhmBCUkQSPQ43mEHRxdFs3AMBDrCwip3G8WTsexbwg9f3d1Up8ePFwewmA2fMdBdsvL6LM4Cc",
  "key35": "JVP8JLyUVSm7Qcs2f8Tu37HRcfSRA2U4n5Xg3qngesMyNsP2mwsv56pxn2jsojX67rmwt2HbdPrnjmixmpALYJk",
  "key36": "4DnWYRQRRckhBmQm8e1iLXsVTJSR2CZwQ26Bbeucc5D7neS6r74Su59B4XvFmgMkNTc7HTef6D5VwADYxBTzeYUa",
  "key37": "4dgA6apZDDzQPiPepZ3yKF32Hnyy6hwSsXGXQnPuq4Uede2zGNdo7heeqLMRTARGJ4gUg6zUxv158WAfr13FLti1",
  "key38": "KuKdZWo6QsaMmmH7Wfk7egzALanQNrVyTEEMtFSQPDAyMTcRqjmwCnmXB7uoX5nR4PGFvjUoq8x8F7bySrgWJaZ",
  "key39": "5oCucnZZdqTEJKuVCTrp7JjygfLDoTJ7fb8Nwn1h7wYDDxoDtbgLcxsnyoWKhwB3ipnoc7mxvv4LDTTeWJZGLrPs",
  "key40": "22yV1igDiotwZpHQBdFx5seJxH1ZoKaRQYgrFqynVfteJca4ENKbNFYP7xArVCJ49Ns5tey5XzkMBonwUU5gU4tv",
  "key41": "5w8W3bKhQp1oA3di3fpm1TbPS8HFZUTtQr5wNUdc54E8APQXwqeyzPqwQ5uKxD5QffKyjPm4sR5Wu33D4YdwGeux",
  "key42": "2pTqoGLmBk9vHKzaJK72HLTYTYoVdpHn8z6ZecZaNF2xLvYviLPrT64vWXYb1pCAmBygSjbnao7W1evVDEtD6G54",
  "key43": "2fjK9PxLLMnfgePrGNWG1bCjCwRQBZXNktxN6ZZcYVsVSFwPiHnPW4C2wCRHGfPU7nbd3taiG2S649QwppiRDaMv",
  "key44": "2Nnayw9EXwmXCZAe7LUuAj8GqXCBf6CWwDnJ4KqxE9UTLtTdTBGj9RWX8R3RWyiedKUkCAgAs9StCWhK87gXumBj",
  "key45": "423ZE419o55ApywRdCyfwfEUQWXXfjFqaAB2vW4zVkpJ1SZMLjh5N5mREhZa5SFcbm9Vx6KKNNJ5aja9eQ4GU3Vf"
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
