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
    "2tBeWCo7M8wDxnayyMHQqnw8XeD3y31VrpaLX7XgEuM1hKPE8sMUgrJKi89q9EQvnHmWzxRGagmH6LVMyC8tJtiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1zeoanTjo9jFbSG7QpKTZpXH9whLy9M2Lp76SbmofhYWDjogJNLCFuff4TWUC5Hsi4yhCSDsZMWbQT5MX2jgovP",
  "key1": "3F6PpvG9gJsvSsekjji1vsGbhQ6X2NdGaSKFZ3ogJrvrKn4TYsgNwLLZo3ujv6QCzxegTtC5MgBrp4GaEdinEcYy",
  "key2": "3VXZV3rdm2AZP4BN84q1h4p2JgZrEPJuseju5FCT8NXvFAeivzvncZzZ7x7a3en6vg2KHAjRTTBFb6Q5PNE5YeG4",
  "key3": "5V5skQdEdCC2DskWW6Gok7JNnEC9RzJMHgYjBYPWcLrbzWfWtkbxLRYEy3dx3QyPKqYLPtV6mQPgPWEMUSDnZ1ZD",
  "key4": "3eJdzvDFDQv7AH6PyyLaxqQmfxvQSY91UjiwD2613ZuZea9VDKfJoeBjC1aFcfh7up75gHcuyB13AKjteTkFt9K3",
  "key5": "5CENDEJ5MWmpPTLgLZ6dyJqG3HWXJSpS1PbwYaJZok8qpLHMqbzbrgSJsMtRLAb9v3NLtEcvWVfKBb8PxPDV4itb",
  "key6": "5gw6eipCLnUuTUriKfh8RA1qbTHpaccK2DLjafafrJNmtxJanddvxt2udXdp5KiSC2nvX2bjiSUfGrwZ7rzUAJW1",
  "key7": "v2DvUvfPK756tiF9nPT1QzUHqukVKrwtv56QtfHV26DBMWyxpwKyp5sBH1swDSoRixGCKVUcgJbDtSMrLBKamKi",
  "key8": "tztrt4zk2qeP8cyJakc2zmDzsWxCuzDy7bVKYGuVhzLoaKVEKbhaF7mSMD91Dsm5sT7zRN75tsbkqgS6PT8PVuo",
  "key9": "3Ej8ca32X57TjKEhQ7E1dPknXYrgMDMqmx6eywAXNWde9qJrvF17NMTLdwQ55AYNGd9g1zk4mkv2Dp7TZPB3taBY",
  "key10": "2XBmtknHV1PYVQEktjy2xM2z5EPxjPhSSmexWd7R6t7HqFxNfq98ndL1U1LF8qhxR2t8U4EmfyT2Sv1RhYzQh2f",
  "key11": "2CnGRtbQhym1ih3j3DrbYHUBCtKnRPt4ynKxC2uy9EMioNH3LrwEKRbV5DpAQKTk85LgYjcRb12iWAfx2PwzQtvR",
  "key12": "51L1dXFz3LTEtkcSCn4bRN1rcYBs52qA6MuEQCfrDW95AgwtT9ryU7AMrLA6FiST4odd2YnbEfvYkf4uRRhWCAfU",
  "key13": "42HPhakhqoz95U2sisRZViSerXbDCoAhK2iN1ynSJCWcNJhSfZHpwrrLfoLvUvLVTdQYCGbKYaE3MFFUN7a8kJG8",
  "key14": "5YzA9Ln9u7u54b7ZwE91tvaLW2o5SaK9czWpDNasjL9mMKm1ihSSY9qswBqsEtGmRvxW1ojzVtihCpmwGkBfjEho",
  "key15": "3XnYipuCWL85uoiPRSuUz6njEaGEo9vPzp3hj1p1y1do43uJxwXKAu7wd4HCqW4HJMMvpydLBmv8gHZJcGB1D1H4",
  "key16": "2UbJj8nmEDEkYUFbjkTzujmUZbZDxXfnR6WxzmAHwYhtWX2DKyQXvvSWZ8MieaWQg8mQZyH72n58KWQYJhu9Ak8s",
  "key17": "5Xrij2JEeRr3AdwSqHKgW46wcFedNExmpoCzXUqvmwS7ZqQMcXqaXgXWNS8E2FfcixqcDzhmV61ye582JSrd28xg",
  "key18": "5wSvSdAGPecvAQzeZD1j8a7Y3QAPGhofMN7FgbtVXRKQMikDPW4e6qCpoMZgFbe62LsGyx5Lp8XP4JwVJEhvqyTq",
  "key19": "4m4k7Ai9E958vGNsbmCgdmQUmEK2PAfhCkuo3Tb3iju6NbvX84LdBqFLd2wcH1Vtb37MrpYE6GmnMNvcdp9z6pkR",
  "key20": "37zUeGUbM3g8tkgnbj9QtWn65z7mDu3aipKSeen1sJwWNnPW3MuwQJD2aikbWmBKC72tjhPSFMmvYBM6LwkmyJtZ",
  "key21": "5DPc7pF8t6bvNYowiC4MTjfZXPFDthomKTMpVgnsBrTr2v3h3s4gjWqkSCBWkedAdQ51f9PSSAD7bjTXbsN6w1Pj",
  "key22": "2YhcVZDffeMhs3ZVMs8h3GMtdd5Gfq8oq9Fd7TFSK1874Ahmyfzt5AK6N35GTFZQwT8v1AETD69WY1eq9aKDbfCG",
  "key23": "5Q2gij9MJDBv8gnDmFpoEefWrFbLKCnfS9brBnjnEyHdZM44ySgKCWEaYDE5G8YNTAY5Sm73kXDcAqT8gEqPRzuE",
  "key24": "TM2k9a5obTfKSggyjG79gTR8WnsAc7SYTu1QWV5C1SUf6uryZ3riuGnn7EM3aDWnLn65nb7A2dyVdSnqMi3QLXR",
  "key25": "24KMAdTyHaVEtsR7fLUkxHXr4jTD5NAXfwQ7T2yz73ejFdSqoQ8fSZgZ3d1HefWbYhxabYBnpQBg7ktYtXdWgdLH",
  "key26": "2ZYjN2Bd9ek5mV5HEf7LzZB9BizLRxV1isqS2bzQS9NxzC3kUyCaLnLroHF27YV39u8j39Bo8hqYHjESuAZ4S9vD",
  "key27": "4JrCnmH1CH7yPhfVbSVUfmFPAQk7oN2zTzrzyxS8GoqXBHnPtpTwixBC82GFw6nbBF9rhUkGzxHzFvPWkWHqFK2s",
  "key28": "3E6d5PeeFDWQfDvb8vmbALN9wpvbM3QmZee7pieiMooTdrWdtJEY2Az1juQruu6akZxmCrcBh9qLzbhHPfd2rJA2",
  "key29": "2LPwG8kBreeKY1BmnvUzoCTeZsDCLdDbgnNwHUCJUvBJoxSHqbUxLGpFafvMviGHAAZZiHFpLu3rnTJ5Sz3Rdkup",
  "key30": "4zJvx1EcDF5ss26iCFbKarAS3P5WCeEdfGD8e82GLiUgfSfLrfP7wyHmz3t1A59NRSviX1sLuYxLq12tTLXXFMES",
  "key31": "zBcvQ5j3tzdrR2HvwtDMXiR5RxHmuZw56TRYUAukBsAxAJUfXk5Xmmbeodtfebu3QR29VnDcTdvuzAbF7XhY3GX",
  "key32": "4qhAPfzvqPnJ2saWTKpuHG7uGDtnQjTsS6Jy4n78irJqNXiaUbSGg4bXHL7TXpfrFWbBZNrL8dYqJkhRgdweCxoo",
  "key33": "398NA72eYK6uD2RPh4p2kvKHhQxXnV6sWGeWGHfip8N8gktyxyBGPi5gqv9qbDejEtjrsZqYBewcn7k96DdNVbP7",
  "key34": "2f3Rbiy3HCPGFbxudoBDzt5xTDWcAqVu2Z1RBA93rZptpX2Yj4R5SfcPP8uHcyGE77o8TV68YW8uFYTTnqwcxCRJ",
  "key35": "3CFWGvjHLunCD4TBYDSjVHn1hPqsYoScWA8p42hLrf2TxcciK1ZEaEBUdgBzgKGjNpYv83KCJMNi777bN8BRWCdL",
  "key36": "3frb3C3uzCZqAHe5R5TLnQEJR4KSJno4oJ3YVvUb72v1Akkky8MSUfb9zZmwjEEDz9hbecdFgExqgHz7bQYyBbcs",
  "key37": "NNNtL79k2y4hedVJbhGmvFAopNtMdxQu4XALihUy4MdUmjcXeufbknEy7p8Q3L21is3fBsQiDqYwwXXVmQKTykf",
  "key38": "4yyVRBP4TdMrV5HUUVsFWKf5W815mmhEehF32tjftXgzfcvSGzcebV2QFiGtG4hjXNxeAE8NpPR9iNwxEQoh8BLb",
  "key39": "3zuv8M5Kd7CRGF2c22ZqY5sc5dijkvzD7WW8NzVGeeDS9fX6WpzZguFifd8WQvmEG8HYGNksjHswTa6BGBzAMpjw",
  "key40": "46ATRB2FLbwXfbEjratXn3qNJ2Ps1BB373pktgjRhwNXLtsi9X8PS6rcXvoFxTZXxNZjvwigDds8ShQjdmAxCF43",
  "key41": "LenrGH1zUPyk5bKg7778G7KRvireLkHFMvRD5ZecN2YywGniRLuye1dMg7C7VZodLXo86kDTfY3Gba524ijfCjk",
  "key42": "TKd9rtFEBbiCfteCPXcU1QvKHK1g2oad4sXZSUCWTWNEVtxrV7YH1ptorU5AxhVK7WN69qHFr4FQ3F5bWJsBbkz",
  "key43": "4Z8o5ifvYedJmBzZvoDiKg8i7UeBuEQXNjbgQNUagZka1BFRnddrHCBsT2fozwmN6Gsy9pJpgJ46xVbC7hpTT26N",
  "key44": "4vQ9aPSH3ug7pXPwCgFoSu1ENc6DKaM65YNKv4JfU6T6Ndfd6zejMRGDJAcUH21aA39SJEQBrKyGAtBu6dPDRNer"
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
