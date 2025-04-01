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
    "wC978Nv9qCvZoxVbomwViYhs2ReTDcE7xbynziK3kDzHxj9Z3s3Ru7rQPsWhtopJjtYNRugtT8z1sP9kGXrobmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpbVnnxVZf6NwQAeXXwsqmMqdmKjwymeTy2TkQy785b5FqJgMkdCaVnfs3UQ7rPM1q1jsUqcgs3uwgQKVrh8L7X",
  "key1": "2iDRkJz3FmrbSiPwBs7c6To5bkjhqiddPxgUKWZWzw31WBBrHWitXiwiVDTpnBo39GYvcqvRAo3kMGdf7DcmZJ6T",
  "key2": "23XgoebgqjauZ8k5nMKY1BzrGJZvp7FEzSTFj3MKdX22N9o7TPuKz8tJyakYUCDNEgsd2irUF8MqSxa6wQ2TML51",
  "key3": "41XuPj7Nx2C4P2syW9wSazNQZtKqXoN52fqVqhpB2ttVegABgB61kDAMrrabaXDCWNB2arrL5vDqH8A4WZ8uNvja",
  "key4": "AuZAAcki24d3XCQN3aCGW3jifuwqz8yNxeVpVMo3GS9U8e2SZCAstea3yaezhrd6VTBKKoUJrKnNAXS4XuhrukB",
  "key5": "2A6U6HxN4HYrR5FreKUa6JJ9HH1ZLgTn5doCQsAervzQ4AoqBiYEsYMUSPtu1AE9hSBfDAaFf4Xj92XRqsd338Bt",
  "key6": "T1ioRkWyXGdcmFAzaAn731cR1U2nsoDsCs9HFFzF6qyssFktAZTv7V7JebfK1s9RJsbA57WEEJhYs2Levh3zqFr",
  "key7": "NQmTbTegudSvRn12PFX8Ri1ZCHHpPpxLMZa68Qjj2s7eQxE1fXL5GPzLEgbguehSDWyruvqCoY1511TPqVJbFpm",
  "key8": "2yj3CgsJjHfHRyzwygdka24wP7BkWsCTdC3uhuZhRogchFoX8wGFhMoMBusB7e6o2bN5tvzLd5Yq4rX2tRXV7ydx",
  "key9": "3PzK9zcDzsBhSm18dC1jwcHbA8LetCiDhUXV7aD5VuHAHUBbkQxLZW12hoF4LNV2aCUaofLAPGEx8JXMBmCoD1YQ",
  "key10": "275FGLdMpztVg9XVJ2HNCFmZerCuvhA3wv2RhZX7aTgdqg1R1iis72LTF27Gg2vboXMbiZVffHftGC5eQfFZMC5A",
  "key11": "3tS3HtpxYo6Rksk63JrVPa623dNRoqqizkavaQWA4WQZjSoxdtuVPgBVnML3Z7DkNN99fChZTGn75EEkfETeiTUR",
  "key12": "2J3UDHbJpBugu6qYqacAHi8yt7DMt4juq5dThnpsFfvN6LPqrQvzg1afCYsnPxBn7Ff31AGA1zb4GeUxgtsndNUt",
  "key13": "5EHC3j6KFCNsEWs948C6PJB87DGAsBshpV81f1oCp7e2iiiLcrtp4bQK9H7CQL3SELwYir7s1aqzgE4UvLLD4ang",
  "key14": "34XbSJ7JyPqpEae1Gjz1tF3A6kasBnpndRy97yFRnvy2HVJ8MPjTm4FmqcwfQQNs546rZw9Uxf3Vv1g57GDni73F",
  "key15": "4XCxFuzJ2UCDpqYqVWF3uvyoKrwjGUGW8zSLXBnoytW5RxQHhkAFDQCC22BzViNEutQaM43GFWHiSqcBxE2BAV3N",
  "key16": "2ZkSPhDPZzY9cs52ftmkpWopbvdU3FSdzNBp4WojhyBprLLyLwrHXZ5ibLefYAc94bX5Siwiti65AjCQSM29Wck3",
  "key17": "5T7AQXVAnVAKXZmHMx82ncmRxeLbGvPsSjMPTmNwCh1RZ3HAkB1Sx32Yk4FihRb74N1mpqrhPa1mP1Tf2REfTPSV",
  "key18": "37VL6TD8yk6e1uKLGwAvAf3AL6uoe7fFLUUHx7Fnp2vDuyaSrVhXmQhbZbJyWPZB7KQHYdeVSCvMeEz44dpvMqBd",
  "key19": "3NHyqkYTZCwWiKdQL742GSSbV5AEcSEL38wrCMJLvyZyRWZxCQfpgxX8KpJUX9ih8vfeDffaxPEtivNksXdhNiHx",
  "key20": "2UwezCwp4sbEkgArsZJ59rLMtHBvsdzzu8iVpSABngboMKRgAugt4Eubkj9SuyYRUfbUJaX9aT4y8V1kxYYHjcaB",
  "key21": "575xAJK2dFhMiQpiUipXHKDbFuRxms3XWKkqRGFydKdMnGbmULdPpid6No29955h2Dz4zCYFeRuFAuWqdCvXQ9tJ",
  "key22": "2obznNXDvzAPjj8zYRTwokddYn5EGoBTu31LjEYMxgq8EKW7LVVfgctivoGWbFkxnFZRJE2atcuV3JxHUy4vPJxA",
  "key23": "36kanwMZcggurujyuTpc1P68Fc95Aov4RAqLe2npyt4VyxbsVY2WJ6fEZ5pqADirGsNUwNt9QVkCuxTBZDkPTeAG",
  "key24": "5N4sU2ga2VqxYuisvMdK1Wu8HfZqyRwx2cQ3BmLQZAzWymQHCokTXwAmRUEJ2jGDy8q53ea77HNiw24eZAp6CDYM",
  "key25": "51p2JNxQxsd4m3f4P6TR29hYPCvd7rR2HHP3Geb5wmSREsY8ZXRFqjTvoqYTSV5HsbwWQE3EutqVTKemBRQRP2Pm",
  "key26": "9xPWG2qJNAKSA5pzR2XFZLcgoFvyZxJAKVWuCX1SD4YGpNEYddqYCfJnDV3WaxepmZPAkA5vHJk25xMjt8huCTp",
  "key27": "34Sm6xjuz7DEJbxLU9ivQDT8v3mqtgKhEMf1fmcnKEUMPY1QGPi9vZ9kgPTpdJJ9XQFhLuP7cf62v28S5s6EVAWQ",
  "key28": "sVioUGM4nuW358vd665g68ZGtdjKffzii3GNDeTP43UwRvsihFqCLXeZsNn3frT8fLrtdHS28AunakzwWWTpP5c",
  "key29": "5gSzdi89PdAc3k5xmohDRjvL1iVbpagetLvDoon587VkxnAseBibAuYsdqGLwRdrxii6Mw1Sr1A7sCmcGrfLcseR",
  "key30": "2wkvMkpHJgu6iKrjVvuzjqqkcp1mmpCNqv5CNXXV9x1r2HSYDURMb4gyDEnVSATDrtzgrQbDLvLEWxoZFibxnoKz",
  "key31": "31sUBu14Z2pkDmTpNjKR6zTQfoiSznLG6usCB1uKJg3r2H3y35Hi7vU4cuzpg7CMoHVhLiKiijTXnqEZk5bPgrHs",
  "key32": "Bpb5JFDJG2MFbrezGuz8215oLB3oMzK3GgSZmM5AyKBXQHjZVAHKUuZHEQ7mkAneoSgeNsVzTu82q2MYf22ALsK",
  "key33": "5J6QfTGLju9SGiiYPbERCKGzSqHG6TRz1FBHrAU7Cts8NQgCfiqyG2G5XjS8CBjF7VMzYdu47rrBdvtH5ctPNrYS"
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
