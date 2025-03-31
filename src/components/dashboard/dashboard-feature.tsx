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
    "3QEmrygcqnTbakpedtwAGmVDg3miipryomCLtkhKwMWayox5mCpyzAScmhyRXRqWAv75eMSFVjVik6Hdxf5jKnxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GSXt82v3gFcSnhuLmRiUGo1Mqmrz7pcogn3uxj1EQyUNZ65uwHXqjjBK35MmaWGxvJQRLWuCiTuL1DLdSc2b6vd",
  "key1": "5u7V9BtSyva9YGJzHbgRFofsK4cJ2am7AP7RtYt3XBc6e4cqqik1YanjgBSrunx8vWAbq5dZ2avxdJm2pLe8eXX6",
  "key2": "1VE8FLD2DdGfGJVWbepqhTEFES24f13RNVFqj1qFjyfUS7i5FPZ2kTQqGRjnCZcby2L8Uu4Bgd6Jkq6AiAj8akT",
  "key3": "32xKyk8t7P17UMhiwwuraUmvGqTZaV7Jsd1kEX5DaEr49Q5BxxVUTC2zmYgpeEuWPeazCrscuS8QMn8pXbhEPkKD",
  "key4": "2SYvHR3SWgAmVxW56NZggtRUgXTD3hvP4KUQWa7nkb3R7vHn3v9mmUhJdpcXopzL5P71UcsbhH13d34iJNJA2wkE",
  "key5": "vhHpC1rREz2qi6ioTUwMHztx8RiduvUvPnShSjRu4eZTxDQdnVkVmNRajYoSthA2nSQbUEKJ9mmbjQBCwGHM1j4",
  "key6": "4Fsqx9ek3MAsk6CRtkWwLtwFMC1uo4hyiqH5TJcYMX5aWteq1JcZQJLkHb4EXwWAKPbuc1brXHvyDAPj7ed1jAuE",
  "key7": "Mgn1qbqBy3C7Uoe5Jh2m8Y1otHBE1FQjmWqohQNdVmiiKQUacHFZM8rrZC8yHzdSnxg2r6UuypqwoHbqpbiRG4P",
  "key8": "hTTdUdyah7Ref1mfa3PhGDP7XR1PWDG6EUVmuakE8k4kbuPW8tdtcBFCUs5cAeGMig5AheiA7mD4tiGyY12yNXG",
  "key9": "5Q3xEQ6EmG222YqL984ENtM1Vu3mArNj9DxTX88cQ9X7rmicBmRW1i4b4Ufp6Z73oMuNhyuP98UMuFZypEzvSCGJ",
  "key10": "2Fwj7Co5dPkjyyjsnGexNChkN2KEh4ssoub8fFdL9hJRexGzYUqyVq2WXCceXwouWLYfS8BqGUSnbJQsKNjRuzAT",
  "key11": "5ubucQ3tJPDXZysUSuSRG7fnxYtGm1bdSrq4kvBPqbsaKkpbBZH5vpJfjBpoCb13NCPWgqKQiGtsHxX3HkfZAejf",
  "key12": "31qkKMUYnt8xTrD7TsDm2T3t6ZbtZnnXdJa1q6eTKxvGyfgBSJLeC2wtmFbaxN36hEGPMsDo5eakAa9vYa1zwmc",
  "key13": "5xcETz8rWRMrwLDZQ9LRgJ4DiLdr4a5yexoKogpgGy1X1ChBgp7Z4U1JhL2KeLi68cBwcNgLAabHCpjckiqNPjiD",
  "key14": "5PkJz9CzdBSYKmTDyAzvnURYkpH4r6s3tpNziby8pNeSxeEk6zZRWDBKdMmDWsdC22QoC3f7r4ejS9SAx1PoEwNd",
  "key15": "3DZU18KYpZAgQ2ioFXYkURyc4mzBtCrdh7erFCqMJiiwdBf2wFpT7AcnchDkrHCgRbJo1LcA3KXss7umpssoosaN",
  "key16": "3B9pXmWxK9AUNgNygcSYPxyhgVniVUpx59iZvWq2Um7Xgucf4JRt2AccE4WteAbwwJRViTXuGp9tcYKHx5KZLfem",
  "key17": "2Qfw6GYme37xQ6vGYrRCseFYjQbV7CyGUCo2zcumKW989PpkYSGRBRLesjptLiBH7LniC3VNJNVQD6MC7sT2dc1s",
  "key18": "4AduVvxn2wFh3E2iVQcyLJuenGijxJ6H1hDwKUSnfR2t5jGuzBAhfEcM97rL2SpGrtZRzzKTnzP6SFsxQZYXEHb",
  "key19": "34i8aZC9NrCXDMkzx7mvT3e9NYga269cuisnCYAKFAXH4BvCc4zB8brJ3Kdr4CTybMgNMKRfuL9jfJGbSqhTJANV",
  "key20": "4AsWmaQGL5wUaJVdimgneuxZqJFWmmcbJQ1Pzft5KVSefbcyH3oZGY9yUeFhfKydYtAa9xxApGAT52KsrAFTKduE",
  "key21": "42Hhnyp6n6rU3nKPivEZc7zqk3SZ6J5h3AyVzg2Erk2dhwPg1ivAVF2CZLWwZxeAz9X6LETEo949asDndhq7ZSmS",
  "key22": "ajqnsP7HykFjrEtavnHtkghCRgvS8rko5QvFspAarYxZYK4663ShYD6hF73GUEXunBMXrRWAAeUGMvdTDVU8NkR",
  "key23": "53PatArkUHnwSvg1C2ckSBYrD5An6Ceijgq6LdDVE9WyZfSXo16M4mCJab3XC9YVirWhnmddR43cuYv5fDTT7VJB",
  "key24": "xRAHTVCARjmnSQymf1uJnXp22nXrT1nNKaVwP4mPXUPpPtCge7yDPT97fV6bKZPJ1NAJCnLPCmS929ZVpFA5f3j",
  "key25": "4uV9JeH28AzHU1PqPHc999w6q34wgaTrtCrFurbWDsxjA9u3D9M96FJJAnCEuw4yr26YHz4dxS58P41ZUdB7Cxig",
  "key26": "2XePwE4FjZNH9W1YPBaHHCTmnR7XY9erf8N6ZGLxzQWR1T5eUd1UAcjXNPRTgBKVdRKuh99di5JgrxqT1wAqdkEr",
  "key27": "3iCRwnR6LCV3pJpXxiDv4w7Fm5Ydv94FDQs7JhuNCfWWxz9ZoF2bJNP465L7wmToy9ExJte1Tj2Dwz7kcYM55NbK",
  "key28": "3g5J9S2gkaeNMN4adzkJW8XYu9GwMEq2JAybrP86kC7nHrvC5dSYkTxtYezGmU1u2nN7xNcF2PW8dvq2eDgh9jT4"
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
