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
    "4s7gE2Kj7aFsjx1A1sTt25BXQJYav2HnJmUxCtRCu3GcrmV9ryg29fz8WDmdDwnV7CdLpfX7SGKn9FLRb1KSCX4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyjWbCJB5NxfHbfFH2A75f64hNPGpmZCiYX5w9PTpmo7TCoacSJdTrxWhVNKn6X9FyHmQjotm82PVP9MT2WnpNP",
  "key1": "5qEcoPmV9zcGM6a7F4vq9GRXiUR82VHr828UgyGFfc3hwp3pKFwJJTZN3XyEwremTahmpCyXwrAJvNzpeTnGXtQv",
  "key2": "cftE3xX6AoNbEQnJMPHzivDTR5WFkPDkyYm8uH6ZRE4yJQRfyTQS3ugkee5mqFeaqfFbz9SbPMQ6eof5zzn7ry9",
  "key3": "5TgvYZc1suJUHX7ZHQN4kwEZvXTRTJZZUGYYuYTi5jQfzCB1TmdfNh34ikuytjDZoNs3Q4zLP8WZjenkXyaaaS9k",
  "key4": "3wMTeMzfUT1fAPVX7urkix4snTKfDqPbZ8QQsyMF8dPZPqujn5tsKUMLWG85yWuif47EipKTrDvTzaZtq495NU1b",
  "key5": "5z1U1FGXp4pYrhZWFDDfLQYz6BU9d57fCcQRt9kYSR6vmCjhvpKemwueyawXUkCZT6cVwMcpiinLHaRTzPjv2zU2",
  "key6": "5vGRTRTX1fNhjhJoWAGJ2sEFnX2D3AUjMnhgkvrMj6cm5YuFiCfkcuVAbRWgAQFhxfarAfF11zFNEwHup2E6PF9S",
  "key7": "J7us47L9k35TBdd6DHT8ZwvuDCzUbzXdaKu4yWH7HEkDKcLQTZLSDB9c41ZFu4VjvHt16bK94HepGEhLPwUHWcD",
  "key8": "g24WuEtQ7Vzc45dM7Q6VW8Zjht3WynZnRGPAzvsvm1iVfXHv2QoMD95N8wGmVBtfoyAzod5UYAz1VaoR391RhUk",
  "key9": "26sy7zBo4FAggf3dXVVTz8kKvobHw3wesLxL5mWYBnrw3vXnLeZc83YLJu9DvTPpHp4weG9XYZWfD6hvJKRCrJ3f",
  "key10": "3PMQARvxT3WcWLUXzHgYBhum54o2vnqUN3b79VxhRqdMN9TgocHhQJMfyAtjZnPrDQyykF15GjGM4idTjoDueyaq",
  "key11": "62QpivMg5NxuBWModXyVya4XXLDoz5YP83ATyyft2JAhgunJ3jmTREFciSmoskjHBtMs5Xpe9SzguZ7mLJwB53PQ",
  "key12": "5X2WGD8KheAcgTAjEVd3zTkQM6D1Aci9NaoJ7BLEQCPVHKB5iaRFXBXKjcMAm3Ba42oPZKvpP9PN2AyFQyLbJVmt",
  "key13": "kvihwDfgJRLTs8VUR7Fe3dApTDiPK1JhPU3wB6yybRCvQa6FQLSCwNBd8HoDimuAuSPzyAaMPwGcCFDXXMi55HR",
  "key14": "2ficnx6Z9LRxxuWBwCevdVTsW6gqsSB8raDAeFPfQJB4MxZzT9cYKuiy5fhYX81wSm4Kp9QSrsA8winQ6uYfaJF",
  "key15": "7mSndKgxyq7GFuGZL4uP7WU4DxkCo5DJvyxU62oP1AJHb2nuaWXVyzXAi6ZAQ3YjKmeEwwwGhQZ7FhqYaVLy8yX",
  "key16": "3T5Bn1auCNmMMK3jBdHZ7WeDwNH9o7Y9khPu9r5A5xx7TdLBhr8PY56XcpNtZ3RHGk8C7qwB4xiWNg3GUPH1uLds",
  "key17": "4cp9uuAMB4tb5wTJQvHyzXTCnHzr8uZF2YrYVAftBJCPgYcs5khy96Q3aGKSPTDLrdWMiTxuouYfCQPPKCwKPpRe",
  "key18": "2Wxxskx2LpXN2TZZEnQ6UjYtvryPxXAWDYHQpinBcS6hhKny3qFnPEvLkTESPGsnn9kAALPm5hkkBNoaNeP4Zujx",
  "key19": "5TV7cBLqXAJR3jMRuE15vA5xTCYnUMbmsAbh2iFnUJhvVAKqmPJ4hG9YsB8ouoG3WZJBEdPGwHj6g2tyMihAhWHX",
  "key20": "59tfxhwtqBuuQ7s7AmLvTDoYGza64a1kioyZj4RGvg8msM6nCkP8VstbxxjgbNk3TY6Y1KPC7UKD9V737n3YMULz",
  "key21": "5jfCq1Pda4JbJjYi5fbY5EzQkpGv3esdWQhasom5y5hDLEwSp1LRJUfikoyZxDKjtMhCQUiuWtZxoJrDzczWcFKi",
  "key22": "5LW7BYXD1VsGUETZYMCzRq5bcQ4diAa71QNsxFafcNjWg6JKaXjoNth8SDvrhjyg9BD3y3BKsKw2e9kciPSxGqvu",
  "key23": "n1iQy9TQPhxvW2CcG8ySYDV5dJzcWyDbztcfk5pUQm7nYv6y5gKSkwUMLkXUYLZZhjGx6M37jNRgy8rADa1fWAo",
  "key24": "1uib33uQnFoVF6YqjaxnvXm8rKTBw2JTSV22U1i37Y42WtHKwnbiQqkLbQKh25G3hH8HiZrovS4zSuQLdTyBCtv",
  "key25": "d9fC2z4nobSnD2x3K2836o6G3BXPmzbi6vPpRHRXFd6AobcJoLYANPi71655BmkMNoeqMj6UDWa5LPVzSiVoHbu",
  "key26": "34Lb8dNFE1Ukn89fTxWdUCUomjizzwC36kwY7gPTC7FbLYf5PWf4QoUiufGvAUZmz3hkufFW5owXP77dpwxQHrZ4",
  "key27": "3AUUY5YFdpYXHxh7SrfRnbchGdbFhprPKryy77cYuXR5eASbZA9ZkbMRjVpxfjoE5MyBD3ASDDSCeSSuXoqJj2MW",
  "key28": "45p1S569LGHTrZZwWvAgF5CHsuXo2ynnQooMSYAXBSmhcYT6rgjndj7qdphmzstQmTbGn8YQqz2UEcSmGdkmD71q",
  "key29": "CawMVygggUedJz2DqacWoYWxNejruaBPoA8c1S4JYP97y3dE2j79ZvPAggF35pdnLeQRUrivmGeaAx1nUdJ8Lkj",
  "key30": "4dQBdSww13zNshEwHGjsRo9JNr2gU5EmsBA2sELj7CKhbudVErybpUxwTWt1VsFtAcN3BmDtbSDtMw6RCwPHFZXM",
  "key31": "2FQkvbhvwmpsfMCrsmnoSnrfcPQy7FtzywLEsVDmFQs9CqqVEpZDZHWoGrwq9PBk7xcDvkTiDo7ThtfhYH9M5gru",
  "key32": "2McHdGcWwRuoExoDEbFk7TG2xb2EpUMtoKgLdE7WCjaAVZrstb4APM5ekgQcXixVXYDqQytYD7j6MnTVLaN6BZRG",
  "key33": "39WnCZZJtZUHpDMGUrMbDQKF6Mhr5YQQAXGV4fPpZYwYx7E7qSFyy8MQdHZ1W1G8TCmJBDWt2frtPPHJtH4PxCUk",
  "key34": "Y2ffWVvssxZGV7TZbAoriSZqhw2hgvu8L8cJbdzwP6o5YXbmNoygus3p6E4i1KqnX9HTrySd4sgQ58pNG6xKG7b",
  "key35": "3nAia3dQPhojzBM1UgDo9Pwjfi5QLTKWPwFzWT8SB2ehCaBPFaANSPbcXJyj6VXgZ6yFD24kSsY7z5zBFPpyPe3H",
  "key36": "38XAummVmHiJK4iKKxtRhcQpVyPgkVU3n5UsSnDKvNPH2jZA4NwLstyzeiTCv75FgFm1QdzCMwo6C5gZB1soF4SE",
  "key37": "2W4uC3PB53GTnPvcm3q2pKRAtFCE9RZdCwxKG2RAKmLnZ8ndsFTiNU3cASjK1MN45xEoQrD9ZPzdZp6eafqxScND",
  "key38": "4n3cadjHw5F967XUfRLBHc2enfmY4DhNSgErxLGGAVRN157UHodxt7Pxg81tBoCnoqMhzM25mhcZAFDDccpxshRx",
  "key39": "3ZHyW4MN2cco2kFSiCCpAFt63j5CpnLuVfvhPQs22i8LQZudHruXHEXFRDhwKGxyzH9yFdqGhwkxWcHKgomWCB8q"
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
