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
    "3sb6ftcH8ypMcq49a5PKGQrgjQebUBai9ufMXjTiMTw3qNBpB2kXJ3wLu844EKoZ6mZ9gmKYWpq2KXqFLHtCKYQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qGLc8pXZyeEswKLgkytEF26UzNuWv1rV41sZWqyAfUMh1TwR47pJRH9AfUzi8p6gBtiBouiGjmBHvCmyQbGMV3B",
  "key1": "4SySC6KLsm6ZwffQ3yfQKsR23H2funcSQiBqBgEhcF4RtzFn4PecMizQ7LkY9G7T7JkX3c5DRrYrwxRXuLCtdpoJ",
  "key2": "2WqAPJnipvaAXktYc7v2MRek4CNfo975jfbBYNHcAtetczm9xRDNkJqkCiZeycsDKRQkLV9xzbmc7mCwEmZYq8Xk",
  "key3": "u8rdXfzSgvgvbVzqZfcnxnq8hdwLpZfZdu5kYmDmbwUg9KUc8GYDypZts6bMDUGSopib7Fn3xvHwEdE9HuyGpHM",
  "key4": "4RtUnS2q5BiVdRxEa2Cxc8SBfR4nhM2Uy3fhX8fHwRve9Wg6gzVhvqPKjF3SAFwhBrEcTdQ8fBsAGkwpYKG1BWm1",
  "key5": "Vq4GmWYVLgP73etqKef9mkGDxmjMnyHVoe5VeJisZTmbrjC9FhiorC64knC67Da43RFBQ2uVMMd7Hc36Zaqi1fd",
  "key6": "KdGquQSBW76FsKHqBLRCZZNEYYAYdWb8aniQemq7DwjUUTV7vrYVDavfsBRnoombuCKkocByv3rBu1wPsLJDJHH",
  "key7": "MVGM454GurF7suN8xjjYFQM6EBeyvyJ8RS4a2YFFfjkKfMyyDELrWLr6VFJ5dAtg7d92xyzFXRrCSY1qeCy7mHN",
  "key8": "2enoEkwNzYBJyzKQ2BYuKx7TRLH8T9TxV1qwYDh3JLJwCF5wRuN7fdK1FnYSKfHwsUbqLUN4pkkCUxjgaqvXNCSo",
  "key9": "4JmuSY68iMzNekjWRseASSjkCMpsnxmyBFxbAFsCsAdWFcTzQYGK4h4Q8ybqtTpLU2dFr738BUFTeYJ1qEM2AJKu",
  "key10": "4MMpphw5BrR9AGqQQYeQVtssf5jfYPwQKEL3is6QSanEj41K4FZm1EaEvd2wECr2FyZ31hb6NNtnpsWQsX9CC9xe",
  "key11": "5yrJkMykGVWqmWcWu6xk7SM2d8YqD7SNpPTWixDBmswvNjW4z7Frs7fjLJhpNj7AbMzFz5nry11qxtjFVJFK7eiV",
  "key12": "44NGsmaXNaru8tPnn87sUG7WCNdYSEgdEYnUHg7Da4bhD7Zyf4HFabjf4kJWMCcSTKVySexSivYHt9srL937Jd7D",
  "key13": "2PrG8SGZmwjaKGCpGc8MtnYyDCj8dfPsx7XxeHhdJ4qxUP6Pve6Aw7XvEDaCugAeA6hJMJiUAQnWjBPsLwN4navp",
  "key14": "4FT3gmtDtLXA3hrbTxvHAcRGry8bL8mAFLpKewwhS6zvGTS2VjdNpRBZH2MxyCrRWqCWUt7fjzzn26qiHB7ZKBGL",
  "key15": "441sGc8fLSpw13zxu75ofUuhwF6nT5aiGGaDmmUgagks7fHnip9tfJPqey98bqErimHktx9sC6DBRWowsegDSgux",
  "key16": "42GvhnugT6QiGEkUKhvUG1BEGcKFqgRPm6cQXXXe5StJDXGWSRmbv5Htv7rVnYos1JEzkkZC693esA8ybmpkh5yM",
  "key17": "4tpFoRrzkcME9uyxRsYc9pWtScR7Rpo3qxE7dJjCUXUMDsD1SDjFSDSE7EToUWSVsjZ2G1X9YNHMnr1RgT7XKVix",
  "key18": "wxA8n4qfpm8FkwbfLmjWSZuvXHbPoUbZMn8AuEF5vxyYKEo9iLi4iMjHRzHryt7njEQdkzg7tcsWnizSu5SHVQi",
  "key19": "5fkQhzfvn6jZv9cKre8zB6LPJhSHV8SSQo22p59rhmvXXga2kkC39C6Qx1PsNW5jwwFMCXrUCQQex6vqqoxstBUQ",
  "key20": "3MH7NMvHqwBGRzgBnz5zCS2VUNz2y8EQh2of8D9224t4ub78SuDHTSfbfcb9Q5mLVtaABbJFzpmaFhU98UYy9wBD",
  "key21": "3YqdJfFQhxxfEXoK2VxvaFWrZBfLf1RqwVWSaEEabujAq9sYN1x9AGfU5zmXv9nycdBB9qS65zsTDxpW6iNdJcFB",
  "key22": "3E1YKzdQQZFctseVCooJWzK6HWf11Xn1h3Kj9fgeXBJ2vwypjroSgQHcUGYSE7iXRupdnszZrGcrvwsnEr1RvXRt",
  "key23": "4ad8D254fERA1yfSmwGebywjTWPG8rZah8B6XPaEiR7ZAb8Yi41Z8XhEDLXTche8VZ2CLP3R82jmaxEarSLpNR1z",
  "key24": "5ozVepZuxZYYgPaxijKuJMjULtobbWWwKLZtj4qrSFEYfphoXR8zB7DmL53E1gBqXK1XyRW48NuUc3X5aTetBvWf",
  "key25": "4TMRd1zYLppRtY54szX3SWodA2gTCe9qADwvGRDfKCC1gEXCJVvh1SSkCajPGBf6pQyNX44kTtrJ9FRaqxyRTzj2",
  "key26": "5BQcGSZ1A9qrZfuBnULDi2aPgCxhCCbZfpDbDFG3uSE95i76wMWwgkqyQEtfoWHBJHuNCBpzyqjY5B1xjBdzB3kQ",
  "key27": "2X1URLbhx5MxFteuKYBa1hWKLP6yQ3qk94YB61qw7ysKhgrQ7Fg8Fz8b14bx3a6SCjhdJjZPNat2kEW7waP7CQQR",
  "key28": "XoY9QorH2DgLw8EEKmLdhpVw2kX5WwLUG6nEK1VG13ktHvuKk6YvTHfxmVoCRnBQdFPm8oMw1pTdZirMFasgBxz",
  "key29": "4gU2LtAtATvQ1VZVvcRa8CsPdygQ5A3BTQd5YVLHp3rtGBj7rEHkYMsZpMhRVw8mMmgrqS1FZfeDWMEjaLUdxQtC",
  "key30": "3Lpk5HiRqPcUL6Cu3rYjJ5vcKpdC3JFVGiHdT1gJCGiBaumq3rvEhgeHUWnEXA21PaRSLbwCQCBkN78QP6rrkwsw"
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
