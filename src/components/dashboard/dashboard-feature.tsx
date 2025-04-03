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
    "4zEeYjkxTmgw5XYgWjev9bBZzaMzHv9uncYRwTX4XZ2bE2pef4Gae2sgeVGvwHQhs6MmWpRg4VHJ5DNET6D1Jpkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P2zAAZFr9p6gQGU3syUgjd64YfpWJqgRGniPiqv7cs4NWWFWkqMFrjXH1R9poP9rstDvTSVvuuqjyYp26JgLxJ8",
  "key1": "2HVso8cn8jst8v5VhF4tr4Kpbexo1SeWACBkiKiX93MRDJUG4namYbGGP8cG91syzKePTquEoHkFUTtcHdaV3UCU",
  "key2": "5FGhKvZVmR6iMkrvuVVh7eLEgBXH3B7PhSq9TqgNiGxbQaGumHEUcJAbt7sv4Unut4GmZ8iEV9kSutLKKCAjZER1",
  "key3": "3x1YerNoRwiMbiCvyAmZZ61oh5fQ1NkreXcPaJpoAWxySnLu3waqLxLH68Nx1pLtpRAiRgZxBw6FgWKtTorzb1fy",
  "key4": "2y9JuEDWkRPegWfixjckLz8W6pnguXEobx4Fy9fRgZ5LbxCaXZp8pmW5fa6yNmxyQsGJeLPwQ2jFts7LCMBBoP57",
  "key5": "4j8uzBEmP7hM5EcvBSpinMNjs2jVLrevnKeQgUgR5JpYLuC2Jyv9mVzWe4sVq9gi89MnPonydkyzuCs3M8TvGZrz",
  "key6": "3VKLpJJaT1qL6WFpHkRK64GzvxBVaAGg43KnUoCQGmr6yAJVQdz7YAJwZcVXEuAck4TBXq9nVx64sdMRMvjh1RiK",
  "key7": "J9cEzwQohdzsd87iNWkCXNwpFts1er6fRx4arDQd6Pk2SfrPodBmgG5c5qGpK8rZcU3gpRH5FngupMUFPnXNSaG",
  "key8": "5LRewkuummx92aDbwWqP6EFrRboWH8bzMKBPVx8PrGmnYuVnSeTfwnYFiJW24PYodnTnKvWMHN7PGLicMgNEjqgD",
  "key9": "66oMQWo9YCRuFnhZXGEwo3qqo8ByRWHVR7zLgAM2yFLYwdYK1tuon3HWNgkoP2EjzYe1U8n6UpVf4XEBgnTzgq2q",
  "key10": "4btRHfLGrTCyDR4fmqPAbFNsw5TwbwpHiwkMk8qpWJHiFMztiY6EHxyDFP3u2bsZfCV1crJWt1ZQ6GtGYebti7wh",
  "key11": "kCbdY4aGHVmtceK1YMGrsiKKtRqQ9gdtEY3fGeVmN69mNwMv8xgWVcVMn9NhjKupkyZzxGb9qdRmfCQUKWdYq4h",
  "key12": "21twvyWkpgGhfFiAkkcKmXrcNf4t4oZEoUiDTiPoN7KvXWKEbhHTpnCk2asL9tzocjprFp7uSkTtcV3YfdMvNVUw",
  "key13": "2yTcphx8cn9RFXjKxWemmaySxZAgEA2PKVmKekr5jTqXwxga6MSFG9RC313SQEF2vga2xebiN2VsSyjBECWg9SPR",
  "key14": "5oTeW6Bm3wpKSRV2PBBuqwpVrMxYhanvRLANi5w42rCZRTrkC4ZqsZYLEcXiBsV3PQWsi8vTqvxL8ybER2zmADT2",
  "key15": "2EZaYGqM9jbALNBgyoNaeWTHcH6T9T9cXEKZev9gpEyS6iyRV5HczVoortxURqhbJxcCFTprQb1BKAD6cpTtwTez",
  "key16": "3yATGPPhSPYJaSSHjeqAE1rTTkgqmiwVjsJZ1kNjvD3ofVB9oLJHzyYdZEjGQSyNLEUKitWnJMvazy6hTT1kN1Ue",
  "key17": "65Ziy6Rjz4FqvwMfAX4iaro38jigAVYaXTF1ecbo9iZY7oGjDc7CzaqrkBXAqtVRW6CoZyUSM4F4Mxm3mvj3KiK",
  "key18": "5supNVL53YEzDTn9sNcB7dxr1GcGqTuKSydS2xhiFXqLhwMHPwEpwAvjYSBad6c4Tc1HYntrcuGoNwBe7nAVbpCK",
  "key19": "25XEj4rSJtfSJuVJRq8JMMqj54NyopzXdq9XYPcdHLEkpha5Yjgzyf8gx9e4E1tDMbKzoYn7Kk5onQ8d4LQAA5pJ",
  "key20": "T5myhjLhdJGA1rp645zqpszkTepMKpcH4YKs22iy1RuYUTySFo1xYmZdpnZdfQjd5nZaTq8nkpz1pVmEYtREUQy",
  "key21": "581QB8tECB4nH85nbWrgSV2pArQE9dsvZbfxhkepZi98bpK6cN4mL399pAuJ29dyrvwnUR4og2myFvHssJjcbbF1",
  "key22": "33neMP8X7KZcrTFMEvLz3974rfBbBTM3EvBVxYNx1T2ytBoZHpCM7GmuaoECc5venQGBJomBEiu2dE4WFJ8X6pct",
  "key23": "2MZtCTMxuMMbF3WxRwLH4nzVjhzAjYb3UyBBPoboGwswtQr9xcFpqVG5bUyn6KV1J2bkYfaCdLgL8owMgjLK9tH4",
  "key24": "4vam5f13TaradnVVhQeQ5rnYnDa2FYGirqSgki8365LARzkcWcjKfDqtMKrhj81ZGVg28xru9n42R1r7hVsoBy1g",
  "key25": "5LubVcRem4nfr8mw53vAqzEBDTs5StNZ84z9jTNNPY8n1uBXTnyiLRwpWoFbNrSaV42KiuYtt3oua2eBA9Bk2SEk",
  "key26": "3AAHVL4d4ErA2KwEXr8oot1Yk23K8xqQf32N6JsKNnPaRBVS4xWfhPtfMTRMQgoR9pQx2PKuM3wUiW33he8XCy3C",
  "key27": "4479e2DMM9tdxQH9HE2jXr25JE4vQDGHLcKdfhqHZDoPbcK93VUY1ExygNFCjXgghbSMq5S3rtvBHgcXn3pK7fQn",
  "key28": "2422Ev14Pu9f7gJDLuQ9BcDTRbmvodXwqkeRzDGEfWfmSghjiVLZqfpaJqnmy12RFb89M1Q51DpMAGqjAGGtS119",
  "key29": "2MBqG8YUUnxUb8HpVY8ZWcFvqAazE3RC9CbfnFGLfJsHDgHLaxn9zMa4FHs6HgveXpdP6p5XaxderMrYxpazLh7x",
  "key30": "G761GTWFCYEkhGXS2RnQX8ha6r7ATkY1ak8YXqqEwPHgsx7Zd39bioHWAgrgVeet5vXNMMKLN3CTLq5Ewn9Kbs9",
  "key31": "e1iHzVsdi2zT1qNeq93ZnkLhzsHeuem8W72rJBo6syKfkrdXvzSeSceru7brPEo7EKzeZZkxn3iE8GsNt9Z5sKP",
  "key32": "xAcTZyPs6EB3NqKrN3n9fH3W4TmjMqRenpmRP1sW9R995Cwww3jVbqmTRHcBUCLf6Zwnf35hLuUGPgVgNPHiekt",
  "key33": "3TZw9XLmHuDCPsrYkVvWjoWcm5WRnLGhigWSfMTX3Z6b6fErMUmVERQfAyAqshHzqegofM44Y86z2RuXLRo6uh96",
  "key34": "CcvrD2NcAoLLaUnFcjDrx4MdGd9hQ6a5ABiJ6q5g45ADWS6H7wrBWKLXzpCwkpAyTMZ1xrRNEeL7CKsAuzfUwcX",
  "key35": "617fkTsfriGLFaHDp1YQYkBKPVu1KpAgkqA4E3rrQi6tnJTxJfQroihEcYj8gZ44SnPLYjYuHKwF61TuNk7wqk5H",
  "key36": "2xHC4WmdkWka9yANXHrccNkVwcHNBWb39KFKq4DQcGfYA5ga85DExHdvaYZyCBKCxyXeviBfNhK3jrUF3sygv6MU",
  "key37": "2EA6pN9GDckNdqUEm4yf3ztWhi3hAB6pgR2FQqwQKFZUXjchdsapFtH6qvrwzqUJPdpdZwJGAcocBKAcFrR2bM2u",
  "key38": "an7aX2DiwbZsPXgTMUYvK7CD7eVTrYy4WGJyHGCexi6tzgAZcE7MrLfDpHrNtuJwkDj8TNMhAwBdjxoAkB4fiRj",
  "key39": "4gP5jtpt7YT5DuVqdfsN8DUUuBGj3zu6xWcbjDc5q4KRipTNH6TtnzxC591ESKf6CBuWAb95ctdzBWknqTiqEBax",
  "key40": "4Tiw56ea3h9ZecPEw7V6ztXyZQSGCeU9PuAwVPoK2q1AiKMtATMqKpfvQGrWQQUdRJxT5vJKCEu8DugVuV3GWfzw",
  "key41": "47mTTuq2LU354LW2KxSy8T1FPep6ZQdw2h2KpnJoL1mJSwDFWQRwid2XKMCWPuK8kHagUMKx8pXMqW3qSnSJs4ct",
  "key42": "pMxJyA5sULBvmxdhTHekcHiBo9xdUhBpdYxpttQpet3AFtKKNDgqw2cGcYN1jkngr4EbvE51V16bCquzoK3ot61",
  "key43": "4tegkwrs1N72hugZNs1hxfzyPM92JqirdEGNiVd3kWbPtZbyxVWniPD33XQKNcttFLEMwPssd6NLG7EQmzhQNWxM"
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
