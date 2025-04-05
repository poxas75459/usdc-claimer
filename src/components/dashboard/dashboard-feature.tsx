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
    "2zpuNgWmPu1d5GJkzmDywTWgjcNDG2WV96v6tnKkQw98vHsNjBy4NVW5XWfSvBtRzSCwyR4unyD18mCkesQiw5uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LGQ8nRkJKjtNEEhqzQor4J2zxJEaZwXLuY6hjVHQxPvvtaR95sPu9RMAMNa4PCjJnKDaxAHNf82crWymXyPZ2Jj",
  "key1": "4EJHKEgTqFywXd4QosdXpcEQU9YhegFDRbRN4U8fUakozqPxPEygLRDcVeEq3X4NAt95YCztNzfqCbwLcENRYtut",
  "key2": "3zaah6BGxewB42s4Sdzi4NekfmmSyVKYzffXFc9tTaYMpPRRA1q7Jw9A6zbMjGS1rrMkj6UgEvHAp8smwytoGSWc",
  "key3": "5rPQzeT8HTV6MPwc1WELayjGVM2et4PLdGHjZuYQovidRXXTYemVJSNgKyGA5bG1fthvmqB7PsisqpEKV6SsWhh8",
  "key4": "4oE4CRQhpbtoaxcxwHprErbUwHu7NuaiZ9o5t2J7qha7BxJm2xPGQ54Cnofcqqc4djenvSqhLnP8VpXinmZmSKaL",
  "key5": "3GKQ2L4sfuuu8CitaGGpQqnrw7r5MXFSD3dFvwvzTfPKY6DRNLYJGwwMpTZWVd9NT7qzoArNf27hn22w1TgA2gT2",
  "key6": "212dsTtrLBqQpv57v9srEhB3RMu4wDznm1QZzZhCnUFTmnJDK4CcLvffHfwCNAdHGT6ix1YGxvh8zkzDktTcCKLU",
  "key7": "wnXfSokmMxSJNgdhHAMZ7ZMMnZ52isjWaxjCaKXBU2Xtty6TaERYCXtTDtijd4Q5boqycoBzMTfTqzVQdwD7jL4",
  "key8": "3b2bETwdoAh8oLQ8cKqshKmUABuC3gD8S7zwT9cKKpNSJRvEXSAgzpRCZmsQg5PtCtcV3ydHRJxyvk5jSfWjoUs",
  "key9": "5woiFv71hmHNUr5FbeyH9LKU8R7m25nnHX1UQqY7JJHmwggMLHhkcQhkMQVKMqf1vyh4M5Cdcbu9BYhJuUeQmssm",
  "key10": "5uVdkzEfuPD23gzrMuviDezXMZpCY1rcD99AfZt4wtmbok1gjqjJcfBf1EmeBytk3aGEuH4i6avWNF4aeCnP3Q4e",
  "key11": "5LKeZHmotD63P62WvQYaseAYtUnfGmQTYuSRsVkh1k92D2gv7Q5NtkWcXggMjQdN9rDmNsMwNj3MXHnkdin9uM9W",
  "key12": "4mSX3RwUYv9jwiHCDdSYgzaKgvp1iRJvCE5My8LpgtA5BXJ7BqbuFDuf4bJ4eC6h1H2qChHqJC4bRGbeLDyjhRgd",
  "key13": "5Zvufrt9TUYvv52mtBwPiYUyqWzG52FDc3E2KPf9BENwq9jWq29T2WLNVq1uhrqvqivsF18aquSgjWrr3zooGH9v",
  "key14": "525mR6p1hHaYevhUH7bmoQkD9sNQK3x4pNPjYEKfszmX7EjQaciakLcAysLsnvebj4QWdd3wYfnseXSERGXAaKxC",
  "key15": "4d3axwxWMfmUAdwZ9GPYMocR2noWbDfGKt2j2J6kzPFc9WGr2urKkhaLyDMYCa9EFNtt5ZKQnMxuKPDEG1yL6ibG",
  "key16": "2KPTbwnKsC71nqba1m6ombWqBTynbX6HKKigW3uhNMzbx2jAZ8SZjUPoaqRau6eqstZ9JefHQ8byk3FT5JnCoktm",
  "key17": "59ymWKCjBpByk3rvYeo2euevX3qjpjKSWZXme7VsACyfoxSfQCbWRvM6gvY9uxH51EsvG47gbysLPKYQujJL94EM",
  "key18": "257R9Tne7zCWRbwaU2RDU9PtfZuwz1aQAn3NmvSC6FCK13PfQntnaXiGZVJ5y6oVuUK6aRYGhXMQzgrv3jDHN9o8",
  "key19": "2MEvg44e3qvQNfr6FeZFYPVqEbB3VHTkzpwGwLyRxTu8m6GFsR9Jz6ZRQvCeQPHG6ySBXwaXD5Gv8S9pRZorB1gF",
  "key20": "1dGy4MVERFs2n6gGvi142i3NbPP4Dibxupz1HBmXygpkXmSP1Wvvs7bt561pit186PuxcTaHeq1Pw9twDM7LTQS",
  "key21": "2WCBQvUgPnum8z7vZB1fAac2qfgBkNtYZdgseCgcZNVzdE4BBuEB3FgXBSK1dkFLy7QpMk5FYagBpvHmiNMspf9",
  "key22": "2U3pUKR8gbsXxP8mZMhFLa1X41VuuoMxSPYR1JqjHd6eVSdRQttMaLLo6aoCV9BezWVY81EnaYGPgDYbiqScERHy",
  "key23": "3jUmXVLvdv5ajdnwmXH4rpNwb9VMQ1j9rCReuxdrAWag89eBVjobCL5joWXLgE5WfUtVAjYteLe9e7t2Nhra4tDj",
  "key24": "5GuM6J9kWeVsapF6tjd1Mdsb8aeDk7rfx3iDQkqcVNqN3QnBX5o1itJVEdaCodQwnFMxQDniLU6JEimyQ9JjG4bN",
  "key25": "3BDPGXcjkAW9RNwagqXF4znRDBb69mEJ4CM2dwWC4oD56D7PTrxFo6SK2yPJR2yrqtpDfWazshZFpzMveCRDKDjm",
  "key26": "3UQNGs7nEEWGqam3iRRnr7CazRyGTz1DFnWDV7sv9WDdZo1CwsxywPkTdjvkvgUJN6ex3ziu4XtuQisPe28omN91",
  "key27": "36CQM6RUehT9mWKomXVPuJZMiLdevLrtVWRC7vdZH8GoJuAPZgWRFCbi3CTeY26YFuYGkSdj78EcizG2XS4erfMJ",
  "key28": "NY8po7UPYqZqpZXzHpi8REaK4rHAEvF8JaUS2drwGr3Mk3qDGfGQUzdR1MCwkBaenPgwkdqFZiZDyWfrvf3svoo",
  "key29": "3Pi1Nwps5vTNJirxSsYhbRFofr1pKrxCQjFJKHsdEQaCP3mYnGYuMYTeimW981DkepFVRUYEy1ALiBZG9yFZVXFf",
  "key30": "Ei8poWrGLQaGNrYuanbWAJPrJfgUDkppsMVNU79Ynpm1mGZHRUzUcRSGqPcx189vHXkYhoEPsj6b1F8uExcDrNM",
  "key31": "62WymuZJz4NQjDRZzNrrBKs5YSst7f4d3ujz2XPKRAEkxtwm4k6exV9MFQJ7rkAN7XGznyxpxGh1P7EkiSxYMoNU",
  "key32": "4Mdsqa6V2cezix87CUDSNCa41SoF5aTzc8BAvHCCwqWxxmUtyM65SsEi5o5a8kYWrzJjUHKT92XZcp3qKyRDEefF",
  "key33": "3jP9YTx3bUDx2QWjWGxA11RHaazQZquGRK2bnyRW2n8Vv4jAvhJby2rLkZEdNVhtqsjqzcadVbgsqWepVm26vajb",
  "key34": "5AFWUAYUoxH4As5K1BAULAnnWcAEULYxwWUaVSQbdrZPnWjdsBSMXpbFhXbxabDn4m23Hrf2SxmaVyCto5LnzNSA",
  "key35": "jWvua4DddDMtXEGZfWa8y9rpt88pCZ7iS6vNRcMpcPvAoUpoi87mYXkZzZh8XP1BRMmZKmygxtpJYDm2aYM3LaW",
  "key36": "5AmE9msVwYkN4MuNDw4yxqQmbd8TXpFDkmwBkmjxRM8125EEDpBdhGy4BbBgdcNF59MS1pG4noztzDmQ27kaV3eY",
  "key37": "3dhkNvu7GFKwnJq76KCQ5f6xWL7oUa2WjhJYxBJw6t3SAiqR3tchPioZ6sU1b8P6BpvLyETyD91rspt74SirMk2V"
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
