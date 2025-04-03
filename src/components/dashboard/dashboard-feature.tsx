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
    "GVfgvzurWghWvPmNTDzzwacUuN5jgub3MgdCpA1m71eoMSLBai9fRZS1FAY1PNSSizUzfpu3Fo9JJ8xfuZsJcuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BUVu9SuQFmfAC6dthiXxwjeJu3L33vWT7Y46teV3kZVa8zmpbZNBC8BCZ2kXFLX4tFtjme3Zy3mBA6jW5oUNu1",
  "key1": "4t8S9CDUo4ankifDNAThQkbU35uS7yYASVr44bpLhMnRKhvz9X4a22DXc3jayuRuvCK8Wde29dzFe7vjCe2eGho1",
  "key2": "4CPdQhSduJ47Q1Ww2xzZtKyKSaML6uoMhrZcE66GviwQwUsxCbfNGquszjeUT8cxN2LbEXnC8vMckWU4dKai3xfD",
  "key3": "BCUCxTDVHb3HJshMpnsQpNx53Zv2MgXTcfAFfo1VdVWLD6rRgduTxTxkMnT89ktuJZn5dZC2mFx76hqyAcxK6q4",
  "key4": "59AomcoJwBxj7YmG8CFcZm36attqXCnEoLuWhrM9PfmvcAdobzk5ihZ8xDRxk1x5BNRujbzVFe8Qv3HLgQNxPeR5",
  "key5": "5gFUaGhkhtgKtDR1AUuTmJEf9RxPQCyhid11CMyissXgiCYeK2saozQXrDNswofA7QH6RPeKSdMkxX1AF3AEyBjC",
  "key6": "2224oU8LDXfE55W6QMXtKRwixnP84xK3EfSCs1T5Dc158NFEUx88SsgFt4awG6WbNBXG7vW6ND8a8vYAPvcRXrYn",
  "key7": "5ogRTv6fbEijoMVFMfCERTVi6vi36NCx1yJj77xVgr6D5xbcEqDepBV6K5D1GqwVk7my7VJ8odsVMH7VLZWEeBEW",
  "key8": "23zuRbKAeSdw1AfUeRtqhNWhzVFTJVMrU41GXu9o5bfUAnDQuF9yNEQcNy5XqjVTXZQagjxDjpT4WLegcW7RdCN2",
  "key9": "4Pivh9E73VC6pWGr4CGVdZwwhTxeu8yna9LjCTskeggu24BhAG9FYJM2s5FVBL7HPYAJULHUKPb4AErvvzStg1oN",
  "key10": "3kSPL4nWAqNigMkLTmKUhFqV4wAmEfNptcrRaQL1mpnia3Qqia5WYEb6YKYTY82ckeqZC9BLnePDMkU2DHnShqzz",
  "key11": "5Y8dv9Tjih1eqYSfVSDfMG71ndWp3Xk4Cc28E4kg55pS6qos3qRsaAR8y4Z2Rkrou5nkE5a66oW7d41s8VXuFG3d",
  "key12": "5GpyuKpbCRXqpHv6qo6GuM4JdpEcmXA6GfHS1JaVzer5cvYMTsxEHqF5m7fSj9uz3MAgju8cxfuvNBVW1NsPd3tK",
  "key13": "2yVauFpL1VgJs6AGLDFCVorGqfVze482WSGQdVsH1xdtarR8Ka3mK5Q1iXbSLeQ94GaUddyVrRjH9otp1onF6SUY",
  "key14": "28LPUErN3kvwoLXR2bQH8aJBKLRyeNWY2ubY9iAzyb5AfVhiPWS6v5HPgVSWezt9zNACgg7PreEWFwE5wtSzfY5u",
  "key15": "WMsCNmvPzxo8GHxXEjvk9JcmnA1u7qUQ6WbpsWniCCS2CsaBNan4U3LYTaUCv8cNxGWQv1ZfFow67pnHyvxwNDY",
  "key16": "bw3GW67HBaBVWR37CSgs9Jy5tFGTx8geS6H8EBkpcxNv4YRxq92VMLctx4epThywp6VmSLvfz3SPsVtVFG6HhaF",
  "key17": "4dYZy8zZH1gY1seCofxszQqpnnJQbkSY5oX2gwYLYKwJycgACCRVZfvnz7iCJhhrsauYNLa9Af3njkrZ5Q8rYCrH",
  "key18": "4drifBkFpWrMqJdBfCf7AKq8T9jgmpNwa22Rs82ZmWEFTT6Ccd9HMnKWMWE1UU4dV4t6uZySPGXCZ49h944CF6yx",
  "key19": "2UcHTuv5B8UxCeDFmeG1VzwXChUMZbutaZ7eRwD7WddAiHU66YihZLhiRKUvFRGM3byQTomJxpXf1M18HHvg5M7K",
  "key20": "5Q2ZqYrqKwYhPSTgjqoSuJe24mqujV6YSksJFbg8hy7YKZ3SecDxMqx87FzZsuLA1u1urgXuGFo3FsWjYXotb3q2",
  "key21": "4JMcaTk53YNm3UXzmKeU4GM9uaQsUhLomL1wSc3vYmAcmpa7uF4s5LDTteom3QhiPgocE2VSGsm5BMP9eCWr64JC",
  "key22": "5tGdUcYCCWmWmvg11AfJFBuGBjYVhkcrJ1LGmjLgUJcobBcudamv96fCyPhyXs7f8i6evtbunLXRvgVnVypwzktQ",
  "key23": "4idUXcij3vpuzHvXqiE1HfEP2meHRZ4HrNLo2tjZAL337voDdoCTfJhdw3d74rAysjztPQz4tkhFXNiGh599SGyo",
  "key24": "5Y4UCez3KHPKTuw9ANpgF64xwyuDPAEZziNUR35HgpyXxXV9bBQWQTxFuEeiug1pMXwRznmr7WqLqRKkCp6Lt7Za",
  "key25": "fzyToNG9kQyo1aRbiamRsvAwcNuos6BLambEwArQuXojJBRYN683NeQVB8bRsJEtiJLFLWSyafZky34veKoyW5W",
  "key26": "2Z7kWF9kcn147Rk5apAUTL4adoY4Eoki4E3Gh1WvZbT1cuXNQQFdV7SjXo7wTrGiWaYw6uDaRXJWbec5wUPYdaMs",
  "key27": "64mTr5YWqRQBwzxSLVAEycatDwAhyHRKSxBjfxkBCf7iKgUzcPbit1tyzGZQq61vNrk8Fc5Mted6i7vBPXN88xAF",
  "key28": "3rREvAYNrBZ5nVzWjmPQ4z1wmauCPP4SM6iESxBAQHbkDyHUtU9UJbEcxPej8McjFXEXScSEhJN5ZPa8W37tme5x",
  "key29": "2YqyavUD7GY61ySkPYaeDe8JjLkFu1SrB7dNxPaEuoHWwuP74Jajx38rPb9BwKi7wznZy64fEkmwMEApUHAW9Hz7",
  "key30": "5taDgQpupDwQTBrT81a1ng2VMiFTcnMTmAPSUCPGYuBvwg3SoBs2qGXZXpgMyimmpovyZKDbh6zVFiC3yraxeE1C",
  "key31": "5CcA9ezbfF12QgUnwgPqf6T4C3vrHyAWiJAmt4XB4LBmmBEaDaC5ziTFmfzr5UfcoKrnxCQkaBwgvh8Yx6dDhmpP",
  "key32": "33PUGBRUE98EQ5UNQChuu2niMG7SUCgSa4vUgpaJJiGmFkYR8HCGjvbU7h9sRsyvEpvfLAKsFUGdxgdWPJbWxkbG"
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
