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
    "5KayFd8qo29bu4iDtRTxPMpes5fNTBfMhpjec7cg3WP6UKmoeK19PBizAZs6BCzRiw5yjnzYcX9GZWjBJUdDuwZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zoTkRVcVjXoNVTdRauEbsxk2VfMx768FhnvswuVQnR4ZqSah7WuFqNgvC3gkEAXLXwjxLPyK6fbXBNsrhti9vQ2",
  "key1": "2ooY5c4i5jfvcGpz2xZ76f3e27W6psM1WYe9d6JBPP1xHuDVDdxMz1dGKPte1T7NXh9KokVRNaHihmWPKNRXHmh3",
  "key2": "3vvkbrDiN1PmMuoSzhx6UArJCPxoiPrhFteDY8cfGAsPsqqeCvQZTRGHZErA1aJbskdxj68o3djR95e1csEVruA",
  "key3": "66pYMjkYrVh1QtwRZV3crpLUTojFCeHvQTNiWgAVhsgU3Mq1KNp31rj96kftkSAdFS3p3kqT5FgfeUFfiDqBe8SS",
  "key4": "2s1CSrqfRS5peECJWSoaWL8Q9ZTo7XdFEoNxEkcG4VtVyJk8whR8k8uRAA1peSWqWK5soV9MeaGMdZFDseULm5ZV",
  "key5": "2uf3HDrVM6EnTi7ZttDwfy2a4CNGs3pxSdSmRA7FM7yrZB1gazhQ3EjeCavjHk3cNiWCncT8SkJqKoF6Cpv8r574",
  "key6": "3aUE8swPLpg5j7MbcSUwth4R4u6grsmZs7GFa2poEAwfKKhykPeK4RZSDUpC27V1PQEVAMk4Mjm1wrpUHyg2K3PW",
  "key7": "4htyBgN8iUTsUxGJNgyCkqBaUNS1LKJYPW74h4kKuJTsaQCMKd1Mjz7hoFnqjMAAJA2KT6jT8PSAiAi3hmYjKem7",
  "key8": "2PJYvgq4i5dmu6QbL2nKVdXudpoteaPprFSbD2G75FCrQrrgwobtTKbfzwhNaMVb8i6oyy2g2LJqrSvjPRqrMTsP",
  "key9": "3o8pxrRf8WwBMiUcYm6aXi9rim3816ySFZ7nUdDRFosurbonLgwErSi4gtHvudBJMG8idWtopAJkzotUT2JuJ6bU",
  "key10": "4WXYuhBsLcuZUW2cVPYDa2eEpbA4NeumcmY5o5YYctiAGC41mS8pLcTTXvzi7YkAC5v3mJuSMGm2C6CzF9dxbJBX",
  "key11": "4q3NqpDixR4cRDpKxNkR6sjDAkEQQbHZVrGHHPawyjmxstA7UvtC1i2jg7TdVAQmMirZRy1tWmTPY21otjLdERut",
  "key12": "3mA1cfmeoQ1jr2iHFtjbAweJ76qfq9s5rNnFpWdrVJBfT6iJegUEuSeyPPn61VjniuXqxWDpbcxBHqq8fpXpkZKW",
  "key13": "dRWV4HLxAqNYafFdBHanCTW9vkNKdfjVbKUWuVzPGBLdijyGE689uzvUSQLfj9XEokzut56Hhz8C56DG4qUjVAt",
  "key14": "3k2cPBeKxYqtTbiuGt2Lpjc872yAWHgkXoYjnX6C6sntp13GcaJYqT3bZAxzhKXUC68XWXP5CnZYMjMF8JwxHxQW",
  "key15": "2C4tsDcMVTsyuUq9eupi5keVaAviCx2Qn6F8GmHRSeYPvN1pQ6GPzCfEhAQLV7omfNi3hDB1rJmESPXgzsTXmbmp",
  "key16": "61YzijUHPL2yMQGz8FTX9oRvYA9q62smwc6gwU1CYpsXk63DhByronGHgQY5MbWvpjNjRxri66iwK8shmjyprPBe",
  "key17": "5FDYmXg98EpcdMrzvYWapSUB8kRPGwTMvkXH9UTiFFyKiMzja9uwYkhQ6bBrvL8fdjDY1pkZT3W6eL8Z3E2YkUVQ",
  "key18": "4kJqDa9BvJhC4zJGYZQoiHpLGzo4y5xE3yy2wusteikrv1vDHuYBjjvTp5UgTBMu9Twj5thmcLF65fnCsMdaNdBQ",
  "key19": "27Syq4KGKMj1TfAJ9RRkZcsDPMSMxiR7UiVwS92qct9PHShVJw6bbRqEa4aTpV9RtFfkQsamDLsdnDE3Pe8fAqFj",
  "key20": "Jd699LvovZ9BfgbnGdX4Di15p4SqPQxQ3pFNmwi4fMXM3yvXrzL4aUKsb6cD7qszybtserm9CjCjNDqg2KLHWW7",
  "key21": "5shQaG6owgB3AxLEGW6uWLjSDuz1iLepnpNDwDCGB22KyFH6aKAGBQWe8nTb9QzKY8LqjTPNFUfYWvq4y5YSLQdY",
  "key22": "5wx2fhBnmRcyKxa14WCyK4ZJWcEkRtvJmXspcpsahLufchPWaQM1CfXq8pkSf98scQLBSAbu65zJTZ7HxepP6BE3",
  "key23": "3rNbmW5G7tGoCYiJcdZk4qbLBXDUG4rpkUoAnGSqDaYcAyKuYHj8YUG354qM8axziXydXcVLvRReyW6z3QvJrzKr",
  "key24": "2NxeKPxRrJQDzsLd8s7mdzrap8zCyzmbVMaWzkvwAjnYsxAMKKkmR2LDW2DjykjM5R6SVWwd5usFRZanFJY61Zpu",
  "key25": "21LVchYmZyjH1hFZotqE39zu2jNJVtskQncEESGvLygj36zA2D8mNY3D9nS3m96qb49AkWwo7hFdF4xZ8GqkFeKZ",
  "key26": "TY3ghQhbHPtbSpjZc251XiqQNozWZQfaApd5MCdK2fPuoXvy2JBtp8SLQLmpEWjC3JkyyUDzHQ2au9t6b7Vkhdw",
  "key27": "37RXRsnRqpuD3mTdMgbHmK1Yj3fnVLqheYMr4NAm1zowGdze1GyQydHj6Zb4M2UsedRbLTYUWMdWakd1UoR1CGsp",
  "key28": "5Dbhk6EeJsPTCj2189LmSfdHrYsot1KyaM46mQRiceG3Xn79baCcSA2muKAEzJJjHcYV4WjtgSmpPt33G4uVpK9S",
  "key29": "4qisNKZ59jewmQQhr6GP5MsCNKNoCgZrCRgAuzezcCPeVPkCeq1RDEMHYnw87irXH7AAeBMm5fvghtueZ5ossW1s",
  "key30": "5zuRC5h7VR2edWzCHEwEq4d1JVX4YkXRrjE9n9cNrq27W8P39gFRjUQv3btb7vrNEmB87oSgCgDnst5P3mJCitwi"
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
