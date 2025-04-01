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
    "3j4gUSxMCF4dVxCVWT7Zt4HenSWiAJXScix15sQp4SRuUNyk6gUyyhXcCdgCAGU9pHwUBmzYY3covvWMHkvm8FLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uxQ8jb3z1JPtrUXqs4PGfr1ZS5RZLWJuunsmU1kgUpGMmyiZmj5U8bgnH9HBKXSqB9KYqbYLrQ5ubtwYQU31PLW",
  "key1": "2S8AofvjLF7GqHU99mBchAfM48H18wKWRUyJeCERZ4ke6h1yv32S6wHQBA2nr98UbDUNayMv3YMGpqQtsa5bsAa6",
  "key2": "3CiBgrgJKb8qt6t5iQmGgiiDS1ECnxYTz515PrD3HPGt4dw6t69aKkCLNCeBdHqDDoVJ2MmuVKEVhHkC68cSTQmA",
  "key3": "4dM64JTu7JcMkbHwKrCEaioLMXQ6Es4NL4mj4724VjGF3ot5WgDDVApVscE51VN4ue4RDeN1SEwb6TRFvKeqThfA",
  "key4": "5iEdVAPvYvRv3HmuMcM2PDyUivg2LmBgLdrGMSxKR1HV8Sqw6V6qYjCxfdxJT49aTiJwHFwBsYr5eqhhzCcHFxXN",
  "key5": "3Bgi4QBNbhE64QVsN26868PjwuzvXw1AEQofnZtiyMTV4g33um9yqFreebiquN6TYKD3b4A3CkgxKgGG5xms97EY",
  "key6": "XY11RaomTTtDf7dnJnxymS3MN5HEL7DfRAcXwtVMpQuLvjHdH8wo5PvKUxL4R4ADmxpZEiJXe5mQpDDGreS711y",
  "key7": "3iQpuXtzhzRZrLFewMbLWD8CWbZ3GSYKsn63HgpVkCgwytedmuiLnPZp82vSjovf4bShKyrpnxTmJ4c2Dr9AnXi2",
  "key8": "jNJhCooRiAxTAuDjByEiL6AKK2qDknahtGRceu36BjD73Bvy3DkqTahmJkVagBzKtGLUYkBe8edRZ92CA3Yz9Jx",
  "key9": "2tgHTm2xvwkkDVPujyRGT2cakiqeycpqHpdbfjcodHyMYQvNA3VmTjN1tx66cvfdJTYkaqc4LBAzsxmhr12aZEr4",
  "key10": "tdq4auitJMCvMggxCBkPehXknN5zgTscz6ByGzq2k73E3tViJMc64nhpYQEHttyYbz51NizJHGg4tGn9BVf3cLn",
  "key11": "4C35PpB9iSqbunJdNv2FmzryxYQqabzbQaD2YaqCE8DXiu1StoyprzUu7Zgo6VdvG6mmYGTXrmdoAiD9sKEpsPn6",
  "key12": "64CPxQjCJWn5VEWftsE7DHX76taPa4V1ciJUe3WwWP75hE9aRHb59fEHN2cEU43aAR4kGdYhpSdL9S9q9rUf1mVu",
  "key13": "32ZZJY9TXLPKkFX64UW4LS8F48TN5FLRUW37ZhLQqYw8j2Fbac9gkWWBNEKK3P6r6XnqmMKUJQxrnfrdRAfM8F4t",
  "key14": "4ivVobXXre1kJKBGPheYXn3Re2AQxqjrHGqML487iKx37U5QMLzn11RAx84pxezAZBPDucTq8x3XVJ6To8hfp44T",
  "key15": "36zVe5p6y2Wc5MggU9wcdfCPQ77pBCgdZdNt4A2ZSyRFSmxP3AuiKJYi5PXaaAjRgdgt5tjjkTzFGemJTARo6dDh",
  "key16": "4ApUkXHCwrHAndQKX9THSCPEM3q6YjKQuCebqCWRyMwQGr9Zeh9MLZJoATZfo8CtkB8xhHHewhNtKM4gqfATdsXx",
  "key17": "28An9K8fxk5ddiQYirGaSe7T3L7Zd8qAuCWCZpT2Kmc9KPnZGt6LkSqSzVgG7pTLh9defGW4KNY8qQUAJZYuJy54",
  "key18": "3rtdBoWNvLGCnAcqnwPa5Dz1bCGiN5SqjAsZBVbMMqMfgC49Rn9kwqEyThftg46gEVjZUBdVYSMZEsjjpwxuxjji",
  "key19": "41Jk8s78UhPw75yPYFGtyuac74zfpPN8WC3QqAdzaQq37muLXv2HNemCp1TBQk87CVddWtNBe8Zacz2wCS53nRYR",
  "key20": "4cTRbsqjsMziimiWathoVzeRFPwCs7yn8x1DvRtTXhYNCK3eiwMCVFaZew5bPtdbUNGEaGvgEMCCtFyrdN9ycHpS",
  "key21": "NQxmFWvAKriTARJRM7xm5iFoyQmdWHeriD7pPuffqCNNm22r8435NhBUzBR9GQGjfaXfi3vyFJjbgN5bY2hDCaA",
  "key22": "62DbyKtADQShjRHkzZyLf4bT9q8BofmnJvjFDggVnM2B372o4k8ixUj7fZXqhjw1CiobMKkUFxikP8yfWYZmoC74",
  "key23": "3viYmLcuC65nAJynuDwMy8E6J84UrHZrC7Za8pubzNvTRSKK7VmxKm2FU4VkyGLc5Z3vaabKLUxxDqEMns67MrLi",
  "key24": "5FUuDQJqNEKbEM4qH24A763tUCnTEx4sBamG8PrSezn5z3GS5BmcZ7orXKiJ51p4QaSEe9fhQKJ8MeY6B38uJJpU",
  "key25": "3Ajrn1M6Gd8nuD2d1xs9X7mwaN96yj1WZCfhyYPGiJV3DZtjJ2HCTCSyHuTaGMxkLFGvt7kKTyzrBz7NFyiSMv2E",
  "key26": "uCasMe2wmQZqZr4AMQvxxyAfd4NMqPUojRXBXASFa15XWcjguVX7C7h6GQbVUudGjA3bYMmozgP2dLUsrFwibtn",
  "key27": "2iNHfptoDCGza8HtGZ871okVQHdayrcAgQZQoZUk8LpnwEyBi8kkz5JjX2XPGExomRgjBD3AjZd5t2ZLHxJWdZRr",
  "key28": "4L1u6LX6D2fxJXr1qUZJ9koD1mhPA7bLtLhFdMB7i9agRgj9CnRSqvBMRzJAssHe1Rn9D7qdwppoTXveRZNTNx7R",
  "key29": "e2UFWEDv7naXzmsxSfiGjwjBQuVx53u1r2Cwu8NQ3VmEQeEdaEjTdzRv292m97QndT2FXC88Zf2EAMBoiCP52n2",
  "key30": "253ukJqAsB3ZTkFkCd6XHynWE2dXFyvW6ZbEmUyFobxorEXQTdo33BBAxQUtNWS71jDNii6jmbWSKap4wP7jddnA",
  "key31": "2pHBzaXbf2MW7XRDTqFXZJX4JqnGttNtksRHvBzb7qqus6gdbwWznWfuHoostUNi2PhNiwtX9AuN3nWGLzRV3JNu",
  "key32": "44Efz5fCQ291ECS9hoPBPxQbeEhYgjEpf2vUigeH7pcKhDs4Lk4HPp33whY5YdLYtwsRisf2qHcS6Xr6YFWSXXPY",
  "key33": "3V71Xfx8MTNKwQ8cnvEHhkveoPxsJ5v6dazx5tHpw1gL2D74rRwteF9KT64NhVi7fn2n96pFHMuy92y2XeXfG5QP",
  "key34": "5pbAQRuRFeKodswxm4r5uH3R9NB25JdsVq9AGxR8WVqRM9uF2n299Zm4LmQvph6R1rSaVj2VKZhxPgjLaNNUaGPG",
  "key35": "3fpekB3JvyHBmeo3HPkW6PxJS5tFHvBXM9KYDqPaQc3Qnd7K3Da259hQFNPuSTHHSdBTygLHdsrhPKJ4f5qVs4dM"
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
