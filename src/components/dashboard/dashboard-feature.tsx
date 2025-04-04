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
    "5wKyczsWPToszXUoTa8Uznj6J1UnCq5pSrndm1jZKDV56joca2MzbF7emi6Eb8NroZJ2To56QRce6HgnjnVyNVEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XmVuuQkBJFBeUxGpVdgPxcjHTUhFrKTB2ERidtq4wXcSzgB5qeTizm6X3QXTQWde3FmdmqUz9QVPtt5LashwKmV",
  "key1": "3ppXqQGcdQbHeyNywkHHBLKotBjxhDTfVAkktczxRSYh14AkC3DZEekrmPQmafaYFTRbYbRdFtnDzW5WeidRNUTi",
  "key2": "2zauBVy3yxTZPz2y62QaTt6JvHjiNVdxGVjmb52qPLyLT51n3WWoJH6qhWDywKj2CmfVrQubiccLNfnGNuXZSfo7",
  "key3": "4r2o1wFKLamPg1PuyMt51dqWEQUoZR2vtYHEiFp9DGatFguKYCzpry5uJcPPQdZrFLRr6TGbp8wt4sVAo6t24Kqd",
  "key4": "4B7RXdyPsn969AgoQjcEenkKGEckuGpkNJAj9UU9qPbLaq8ZxhqjEdMuSADVFiA3HdNnJYXHDg65PCyFNtwp2VMu",
  "key5": "49uHCv7A7X3iUDQSHASJDyVhReKBdV8UhLPteKYqeeLa7CPP153kDMb6h8Qbs75iaTGSzw1vZkB49HeDxPwKdZvx",
  "key6": "gmXokah7UQYADH8PFiiBBsc7yk8qYu719XVHhB8QK8oTHiLuwu19XFN9p35jHztbGKigdAMPDiu3tEwkPbexhsV",
  "key7": "5aFeYePFktf3tqErfsyzab17Xyg4Tq7zxGdstDS8S3aDGNKkYgvePxovmAqoWMbNwqfXPgXZ9WE41GCkyKjrEgum",
  "key8": "2KS5hm4321ZuvcRm5r2AZvvmtSHCSfVraEe7hUvWHJ8tKYayxqRwUVDYQjLSbuTAThovW6cLxZJsuvGdxdRiLTDQ",
  "key9": "cD6NJ9neMDGtHEcKNbdsaxQU43PZBc2dGABttqHhUFdEN7TeUkXNHn5exTgnGCCsNbmWSKKUwDKN53pivRAhXh1",
  "key10": "kK5WC3VFgN2pdRtPkMrcGaR3sYRHyFfftKWetGRxhE1zqBbrJPWaUBdFVhXLFm5uaysXJRnSEn5Mtq4joX3KK7U",
  "key11": "2eJWusmtio8ToH3Eb4fqhQuckDa7JUyRbvPHtH9jwnPbRCN7ophzVL6h7giyQPvtSyoqENBDt1ga7WncVbkjqTrv",
  "key12": "3bd9Te8kfKeu1EjnmxX2Zn4j6C9y9EVqF8ZR91Z7p1u4nBo66CDm3rTG8hRWqxDbC94rh5AKQDojusndk9A1onDW",
  "key13": "2Hyb5oZDrShkUjRRdyGJe7bvnR8L6tLv7W9qtzrstq8881m5RUV2TB5NMkjgjwunko18iCsqL8dH8DEADzsYhJm1",
  "key14": "3WfLNY6zmSicaBnEoCH4RRacYTRRz9ZeYjDreYCpLorzG9SLPXNstpZUZ5uH4fCZYSE7XH4rPMJBcCu4nFtG2LRB",
  "key15": "4Q2ejBJFfV4WtAXobyS76wsbStpNHKpzAcb5mAm7qsJmKVyRHLDiDr8UNfjcfQiVbGep3sfZYSWiumyY6vzvyjYM",
  "key16": "26tSzKcRsWM4JReg1M7X3qPf8CTemBzGJghPyEvieC5tt2AvvqsNfFknGFSPSFHjS5DHSpKhDCoH12zR9gUYtvFL",
  "key17": "5vwD43AYQUTYvoWRanp4DurxywH9jXtV4CXfV4DBpouYHB6bSbFfBdQ79S7Z8qVoyWfxvM4vbqujc67VR6FMmNNs",
  "key18": "2U9qyMHRwDNcKqGJ7r16TN86RYGWXezsgJGPMyTCSbJbxAAmeHysvkupzfajrBo1o75e1orkAXTpDqfqKo9ELcnq",
  "key19": "YWkr9MX5VKDqWL4Y8dLehyVXJqyqaVzuVCbXBJMduNWYqfJE5eGCWmn8sa7Dgp9iaYopMZhF26Wqjyimi22SVZJ",
  "key20": "4gMYn7oDQBKZ1vXAm27ykFtD5VrieUFENSuQ7RtTxj3roF6g9K2wFobWHtuugmezYWG3jFKhTQWjXb1igzKM6qZq",
  "key21": "E2NPcoWGC1jz7TVKGFNzKt5PUriwBWNzdTAnvPgR3igV5NHD1SQdNuVR6gC9r2Qr5yzDpDJBoTXPjb5pKzah6vq",
  "key22": "3Kso4hFF32pxLYcSRj14TVf5DRsh8EWh5ZpWPtGXLotpddwm6HwG2N3GjuCNXHJBJitgkMFYHcvzTDr9SuPUhpjQ",
  "key23": "2A1FjGdCAocPRv58vcDTUMLpJYzGyDQWDgUWuP9YhcKUiey6CtHk8ApiYVdEg9bE2xb5K1vDteQuQhqYzknjT2R7",
  "key24": "35nAjTLtVxAZMz4cahNaCkTQyBnpmSSc9xchStBXrAw1H8vunmcADqqJrvN5bQzi3rECJfvEoL8adEFh1ymgmkwo",
  "key25": "2ESLYDzAfkKhGgpg6pimwVNCWPk3KwEzzZjZRa4M8Wh8PJDtmSrRQGEwGYQc8ahCHnvyzEZd91hfvZAon9Nk4raX",
  "key26": "5BZmPyhUhGfBr1C4P2vHRJEJ7CkHu9cELyu4D7bA9CakUnQoBvHtLQyVzZzFiT6YD74USz4fga2Q4vPJ6tQo6276",
  "key27": "2NkxBCPxUhWysms9o4rjb6sd975VVBwxnQ4UhpS19M626ifpfr5Ete3gUTLVsnTUHfzczLdc81kSkcGCz1fPMnm8",
  "key28": "3nXa7EHdARB5S7WraaRLGmNt2xgSCFgQxNYh4H6sE2hsDVQYoeRAtxsGEbuHkEYpEjEfQSrqHP5gk78FDm8c1q1A",
  "key29": "5k9H2V6qv914NUMMJ2WrsiJBKwVTik2FjSu3TfoGzo2gwvSRrEJ1mF6ndHcyJtrmScM1TxSGH1dL9wTMMsKyaGiQ",
  "key30": "39WPVFLzmfyhVpJpbFUpxS6ksq6vYdUvWkAgjYmza1gfohXHRP8eQherXxTeaFqRPtEkmGsfJKcAnWFKK4Vm7sZY",
  "key31": "4ZfgTE7c4a4VSV2vZ7heb8gmtBErXcNpQoX8QU4kN9NwTM2BtXbZdV8XwKw7XPubm8zKwHkhASXVkorv4wqGw763",
  "key32": "YLi32WypyVD3iW9RSdWEU2j79P1n2hihn8ZjPe2QoFDYKeNGDc2yDSg484fDsRETos9zpVn4fVDLpAV6LRytRQF",
  "key33": "uLGixnVjk5KGj71xeLY2xPxkYfhQtxziszJxUPuNtZr4feDjGWnjB48bgpw4u5zGZLpRBHtdxwKrEaYxYsNxB4Q",
  "key34": "3wi3X3FMBvDAgMiUPB1rXdvvjeoiTLFGpwHcKPz8UgRfvkDVxrRSFJZ1eQ2rB3Tzf6koxFvhWG5HgSYR5rgA572U",
  "key35": "5TVmK6n6LnSbWViRmGG9YnmTzCTL8WXSgvA5r39GuY6xrzfuQBZc3MFVGimd9bcH8k59fP6GYx3QZsRvuhK79XgU",
  "key36": "4KWovT1U5R6q3yVgLLCVZVCGwUGF3kkK7r4m4S11Wy5aM5ggkMZLbM2HEK3LaZdYJnjyMVtytMEx2VqkofPvtFxT",
  "key37": "WtjPndbDaEmC2xNPfCJ5xqiSQZQKuC6TkMd9sHFYm4bwiqjT77KZGGTirUBRxrZwGjc9svQEUCWH2Em1eETejcW",
  "key38": "4MjZUxJit2vjyWTwkHhS7woDBA9MjZ578AuYVvEZz2HLo2xRUHkwZ1CAatwBK1sASNrV8eisD1BvRNsKehfC7P7o"
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
