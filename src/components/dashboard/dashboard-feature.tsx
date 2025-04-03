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
    "2wogKY9Nu2FqRWQp2AuXMzLmXvpZaNXxsSgpQPDEHWGf57FMhdVgD3br5VH12bvKgyHMGSqzMnUTMMhr1z4ihtWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g3QLiQouPkbkr3yv8FT4RN6JNCKRjheCkfyznVpodJxNMN4uuqPGMFTMwv4psVFPmqzNb6rrHuXE9ocAFy4qaHh",
  "key1": "4xJ23R6ekKH89LD5VDYV44iDJdrp9iiqc4q8yfWx29DQwjwpCqRUQbDECaxuutWsJGmKdZK9pB46cBqFpDmCGmLE",
  "key2": "63qK38sjgcYQfxwRTxbpRhWVQ9LKu4x91F6ict948WhvuUm3RxuNx3FhBfigeMEMRkSE9kmiGUPGvC9x63GmRxxW",
  "key3": "2eJgCMjSJ7aHQx3qsmCfboLBhkAeoh1HASQpFXRoaAu42QWxtC3qzDwk6QAQ2Ak2ZQvaYeZhBNPpU6dWmepaQNAA",
  "key4": "5vL22tW2obGS7DcPr3P9azRefiAvEZefgyoDSjzBprKjbZDBjNaiwtqoZNoXeFnBVsxKShPNLvtXFzn7nsizntWa",
  "key5": "4iLbUV8n2q8zD93USaeGXMhAmzbtkPZ98j4B6S6nU9ow29QV5AzLkbdG4jNLKVvcczqvQqvSz719ALy9JVeHGk9U",
  "key6": "4d1Kq94ohvbZNNVKLfXEgnvu5tm4pZh5KwLo62pt8mrDWVDEoQ1KNkuKzqwXuKpwgC2yHeqVEAXgoZJYKMrSoJ9v",
  "key7": "4FGRNgaBtb5YcSYJ5S72RKy2i7UqK9g7XDBQw8GJs5HYUm1kBnUgh33MeyoSdSzNJzLLEV4NPbCSpWdvxAB3dEA7",
  "key8": "63aTJshv8uUHGpjfh4yxQU56iBDfgc4h9PCGLsoGBeitVyryVXCPhyMavyvhF9Ae8ckZH7jBdVXmWYHEHeCvXNMX",
  "key9": "Df7qsiMksik5YtXc82J1R4Q3CVuXdmP2WoFUE3c8Nt1EsBMh8AW3GsCoSLCKGFFpfRFtBCy68gEBAKbbBpWmQPo",
  "key10": "hL3nwfKBQhEJEZnmhoJq1kix7YN1YNtuLermFbZvrt9QndXAVtEfUcxGzTLxHNLTTjqt9SdV6HySAC1hRPUPbs5",
  "key11": "5oMbChGyQvRXA9uEhPhzWGoTTViuZCovUCE8qtHAHhwiS1r4E5D7Fsn8ixF1GgJ2fDYArQ2ciFFww6AW7z6xGEdK",
  "key12": "5FDyyLpe4J9ZT5LocYcM9FxZ8Dwy72jJQuW9c75Lx84ZDwWe6RMD1hgxED9adSdAieTVbCHtB4rym5uhHWU4pb1R",
  "key13": "3KjAUCXjHJdEb36yZKr3nDb5ndrvbx44JJwruC3fiVnHkw39jq3obfR5aNAnzdgDLwcZqey7rX7hmRPTdgtKub22",
  "key14": "3GLrxy823SEjRFE6HnGdJWJxcby7iVwYGkZbSnmpoTvaXWPK1aAS8oKwQzYHDvnPKNfujgGH9yApaaLubda1oXC1",
  "key15": "3CBq18jaHYXJu1QvLdig7hWp9VLQJFLQzR3KMxHhiPynxy1nu2R2HKb1zX3zY8cQTjxwoHqtPK9G6r1Mk6mR4isR",
  "key16": "WXfeTrqwHdvu6KLPaseS57y5BozAHHYTVAdADNrudCRB85n95T2nRGfLrX4mV5PQAiZznBymBe3pdGUWPeHNH51",
  "key17": "4f794UuiakoQhceT5Nc9VJuAPkkBGeBfQ3ZAt7emuGZc7YCXxTwcQ5ANBzf4fouGGYfrYGS1q1E8f3rgJ7cQLePc",
  "key18": "5QtAUGSno32rdkpNQqtxkfzsYkMqurW7NtVbmV5ovzST3bfCprmgPqrFoYQd6ccwA5ikrAukoJH1FNx47CV1GNnS",
  "key19": "porBsu8LMhXu193Em8vSJ83tAsbQ8VREoTTNLCWqWZnw1Yq14BBALak8vGKz6qZyAcexVfcTWa1boMLBDU2wAtJ",
  "key20": "3o9nCkFi7hMHKzTEF3cgPqw8aeBGM65HTHsYjq3bdGRYLnGVtPgeEAYWNHwKUnuJ1nA7XXjVWicU3ZoZYi2wRFYV",
  "key21": "cnytWaz5Zigvd82SRZVXzHg1Wqb9fRrCE5STSQeq5BFzTPymFpEGoxnV9tUSH1mk1oSHfX5VZWumv9hjcHWon4M",
  "key22": "Rr2ugJwUNhwqYKxK9fP5rhi9X1Ga6WXrbM2Pwh1HxDQ2JjY3pTg7DQUbDkr7SBYoW6uA9JKT1PFJdX5uHe6BsWc",
  "key23": "TQXgJNYURAHmUy5Yp2Dh4i76cut7Rseg1JbtjYz14CDvv9LwqrB1zC7gDTjc7tZDnJTT2cfAgbzGvA25SMGP3qg",
  "key24": "3TT2pFvzVLQfdEHxy9jMKeHqZcXmGac1RzWDDNxrDeuVBhfLjhfj48XhLXuWaxrQLnQGRRxjmsoAPXnBUqRr1BeA",
  "key25": "42Vjfwcceu1uuAUvJQmXzcVyDG4PqJpHhCF8BaEbwdaT6Hzzm5ivEwKcQUWtuYcA91kXciE8GAtgyAtbaV2vtTAp",
  "key26": "4SutErk8ZvZAMfyqdDNV8kQEzHHkDM1W7Gvm4AXvNnz7jdDF2MCFZzbeFfSjZHPmgdCZJfxymdf73WdhHwCja3Rw",
  "key27": "uQoKsf9tPRhva24vcrqUcsB64JaXViDxwcxbrecHtdUKeKENVFqq3UbM7SXAMRmDxzxpLfAkvtDdsFQJWbpaEBN",
  "key28": "pYvBiyQLcCEBkBXcGTxRB5UrMAXGqNjY723VENvkoiZnW22YwVRmuBjGndZqhym2X487HDxFPyGCNn21iboDwEu",
  "key29": "3jBVP5e4NBwD4ayVoE6jRC28eexTEX6FEJnSZW2puZ9iJSyDK7xBpTVXeydb4yBRwBxevngKiT2wHSbWmLgAKVhN",
  "key30": "4BbCHgyfAt6kL1WnCqAUUxLWMNgN9D9BQM2Gupwb6KMWxpPc6XQWaa4JzrZzVT2szSYRcx8ydCP4iHieMARrVbqb",
  "key31": "6hmvPHcpV3dR12vSqGrQz1e8VshdbCcsxQu3bGkDr5ewdKzrzArfMgUpqMq8MaN51rFq7wYFsVtJ2eHBg3Hxpo6",
  "key32": "5jAVtqFwJqo2fvkMgFTQXY8ExgqBDjFzcgp8SyyobT3nQ2GSLUQTnwRymk3CxJriZo9j6FxetrgH9fQ4WkzeNGfu",
  "key33": "rCG9aP7BsAUBRPKgw6A11TuJzrf8uUCJ8PTDx69Tw1BmUetxhCpLV8Y2Qy74j1ZpGZrcPKC5XJbP5aoDEYXTqSi",
  "key34": "3KgBBFG6mSbhGM44eeh8pWtQaAqPwNRnNJUyLxk6aSK2yUmLsvYzBop8G6TjYMrUoBJuNdmcg2Wn5hNuugF4HL74",
  "key35": "E9rJ4GCGHdfDFv1vaxFDPB3nfiNbkksLJXAkxNH7Vatdyorhg7RHi69mcQYfcxcoHPf1ankzVAcrP6fsvikZmmm",
  "key36": "3noy3Aq8ELfcQg4FMFxQaVvUHBRNGTi4bA63tmKEnhwkU8ArpXAZXjvg4HF2q452wisy26jY4pqgqvjKXKzByFKk",
  "key37": "3SYrG3fCfNgKHhRRKpU4nYW5AUA4fAgz4yK7o7jWvKoXBw298z31r2uPwCCERPyn8CJQRPxiKGog5LwtHFUrDcgi",
  "key38": "WRubgVKYbYmN4eqcQkQ92tihFaXZHALUxidEzgDKpkgQy9h7VTywhQgffgTczrnjqgHPQZpz1Sh6XtcRseTUR76",
  "key39": "3Pi1P2rgpY1maGg74Vg6XUZxkc9NFkprgzY7g3GgStEkrfka18dSQuJ7CgqjMU82yNTohU1UuRMCKcYgYPvtowMF",
  "key40": "3Zn5o28eUvApa8iDnCj1UXvJFk5dXdd5cWWxLW7waBjABsEDiVc1dNVBgswyteBB6uCTAmypxe9sszx2nMGYQVYa",
  "key41": "25BQRiiMmtmGG3BW2VcX11MU8CL27RUa8M5ka2JM4KJdVs8dX9ea5v8RkVwMEGwF3F48XLnHBQWjRrceGbZCBt9u",
  "key42": "4HYwPaDuhNBMUmwqFEjAJ2mPWT9rqLy2r7YYufScphncEj1ipwcMfHUvqdf5rrTvc5ZULxqen3gJPSSQVhZSdneK",
  "key43": "3MHEBhqJKqDW2SMyZ2W7WGAARYfLPGEi2pzMSWjKPi8uSoLjAL6qB3SeEPZrEFMb4fdQcbsZb52Q7pnNw8dpUs2D",
  "key44": "62PegCd9D7Wh4wuiCFbUJKW7NTK9EvYfDaE3W8b8e1CpCpA5RdrYn5MjGYduLosdGKhGdZvwrsSXVV6jrtKLzNk9",
  "key45": "4zcZAH7Cs6yvcD2Bk7ivtHQG37nps35p2xmgyAmfkvFLFfAnoLbpM5aZPwxypjbBtpvq8hQTiCebFdhR5hF2c7gV"
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
