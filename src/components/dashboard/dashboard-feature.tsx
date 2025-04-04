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
    "4UQUqEqwb8iQvJs19QNxe4kCB7VBAiscqrKVomLujkbrnxBsNtJc99wPT2ye7Xp3TuwYrHhaLb3TAHKsnEaTMCqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MfS2GtcaiE13WJQadSSs982daNNe5MB1sPwMw61hpcGbCo6H1x9DqmBYKQYSAqEtxcadJ9p4DcEdbuhDTTmVSW7",
  "key1": "2182Q2APfhttJd3cmPgRwM9sY6zS63uujBBLko85mi2WZu6eUoNpX7Vx7RZ9FPnNbL33ZSwF8mnESShFYft2jbEQ",
  "key2": "4AuagUSmd4wr6CmoGY1nAT91mKC3G56EodWVHyfxoMP11CAnJ36hXHFxuu5xsfvx2HiCSmeSKkRLzYp9Swhk2GW2",
  "key3": "5RQnrEDQbH3nLyeE9NwRAwqTesGKxrnK2ToArPQYfr6frPxmsNAF8Wu1UrPFcPgrCLFDxN5oBQyfJpuR51HsoQRs",
  "key4": "KJDCjcUkJZ4dsh2YnrkpAYbPLNxsd7S7sH7B5gAPDP7rtPnuFhH3P4e4ggkcDpq1ue7rJWRpzGp3KV4qR3mwBU3",
  "key5": "4sSjg725xcVzpk7b546JBjYzrDVUn2zpXXzbgdi7sgD4cpoBg536toqqQTMHiKtgNhfv7m3xWaKnHdK93i3yWATE",
  "key6": "4Pj2rb9HzoTi42V2mgzgoeCvyhYZyox2yHsibDQnQfTiEij6t9dPZ5jc6AqJ85fvFX1KpTePoLE8sVRj5W7gEgQR",
  "key7": "2qTrsnSEN2wqhZwcnBirFPBb7Erm2ry9cLSBScDFHnUGnuKVPmCz4i8nyzasHNdzXz2pm2utwgqkAuMDyRzo5HJa",
  "key8": "5nxxVEBSbkvpnN9DvGYf9bMt2b6e2N31nRjPivvPjava2NYCMXTuwmpjfPThfvmFqQknQrcBJ4xDMU7UBxvPUTCn",
  "key9": "5byRMg7EBWhp6P4w5LT5gNFKy6gAPsexyuSKD5NLLDF3fdgs3LjU6wJ2u3FHkZfL56vzMzNne5ic2GyaaF2moBRT",
  "key10": "4v6cJ45z2K32mJEoYsawCNyouoz46qnmt1vbhbZPwx9gm5xuq3smk3pAacuongfumvKYRMTEjBFHS7243AyaPTue",
  "key11": "NnE51yhz5JUQ3jGKLFeV4Jad337eigLVn5Q4kPBxnxT1YzAxBCeUxpetYARMZjZJiRPR4rarTgP4txtWoZB1w34",
  "key12": "5Nr39Z39bNhf4qj86o4RhJU7UX2CkKPShS8rbv7uGzHnWKczL8524PLp8zP18nbyadEonY8QEC9zjmUrkScFixjf",
  "key13": "5B1K4ji6vWyn37RR5tCNx1aaS2pNYsh2ZTkdeGJxPHoWR6ZrW3K9ifU6JgxbVefisCJvZJmcWFoMd1MDdTt4KzwP",
  "key14": "2VtyB3qP5iWLhTXAm72EaQ7EY1yM1XS58E2vPob1jpf4Dn4yQ9LGyekCg2PTWpPzPvE3DRrGAQBJNSt6CSSJqyVR",
  "key15": "vgXLRb9tXK34vCJCCaC8HfcoMuzVDhkJEMm6J92YoizCQtNXvcLhDkoB53ykfFj5Wezkp3TwiN4qyuwzGs171ji",
  "key16": "2g2GgETG3dvhhQDZCVHMjE6h8NtgZAngLqgQoBpXzjNthRjbbYeigsyatBQJ1XcJRgwj1fyTgg7ZkKBKeBThFDkL",
  "key17": "eG8MWrYnHnD4ibCaJzS33Ar7hyCzoS7x2p96PuKoTKdaWqqXHZ1jqXEUbJFJwB87pPQbqqWTLgx4DT9B3meNBXM",
  "key18": "2CQ2EtFVPPx1khNpg68Hvhv3WrDkYpaatYqG4QkwQ6xvgNQcdHVEzWpNzCiKx5nF9CgtJkwghosFxpNj2PbRM8pG",
  "key19": "57nWnuEoE9cX38Nx3JUJ2of11wdo74zSjdTje4sEu2dNKcPcg47LVG6eWdoQyCXCeBPUvYY5cDUPDuYdKMyhEro3",
  "key20": "545jWHb7heWq8ZuAdkuN1SsNy2aVPXH5WtjYUHdjYFQycYQZpZLAPWDGkHKXXssKiUDpWi6jdU9TG2mNzyHYFGKy",
  "key21": "4CTcEXHeU2cyN5zoHZ9PyrNCzDdBs64qyHtAUkvWLoZnbW7yVw1reypXrhDtNsj43qXr1zBmPY4LREdG4SJVjAJV",
  "key22": "3552ym5YfKK2963gkHBTVLJkjKi6Ke6voyS3D7av22rwtpMQ56zDSp5GAT4m1vVXDEHnKR78yisKZKgkCJiGhqoG",
  "key23": "5veZL87DaYw79nXmQd62J4w2MnFbt7RWVMVY89W8BvLrBjKasiks88YNEmmb551MCULecSHoAnbVP4nkyG3RciGL",
  "key24": "5QQtcSYsAkX8qq5hXbVDjKBU1RLUdkbSFN9xfLFaEP9iCzqqiHFwcwoKpGrRvC8fmSmxiFUVt4oG6qfMtgWD9X3s",
  "key25": "2xemNFoqQ7y87dCnJG14eeWEbmFREkVov6Z6rmaRKjieAU8c5HiTxsoWmNdVbEbtDsU9znVAZsabe5S3MX67wbWP",
  "key26": "5e9XkkL4HhT5xNPd1pGLhF1kkpVM9ebm3LErti4AsBo132NxRh9CRUvNKXhU7JoqGyjmhNav94o4J3J8Xgj5E9bX",
  "key27": "3MoGJfEQNQwcRkmheJbroYbwaHjcHKvykaPgcSmQTJikqWHFVS8vAsafLbuHkMKcArAWeh524KEUL6sNQ55wFdEq",
  "key28": "qX1a4EmWEAcd3SqYVatjQLX2y8BysrvbKwy89smDFdzSFDsxzmY1kkjogg8BMvDDZbZe4bCHnoY7z5Lw9CQTwdX",
  "key29": "3gu22FWXpND8Lag9b3dHE9CBx7SYcaCpVDibCGpgr7UuEfefdBJMuVuPeV97oggXAantLMibSGs2iBEiVdVxRPjW",
  "key30": "8bHHApwkwwNYtTmVJ3hnxZ6wo9EsuXF7ex96bXvWK6gog4u5scDj2S7u52dRJogzdJn81txuXYShUquBNVqA9WE",
  "key31": "64uxW8iRamvPewr4ABeUQnLyfYpYD63vZhJXP6Qxaoa6f5wU6dX5WwRbGGFCNaZW28qzsc5HnEPC5qiHFok99PtD",
  "key32": "4DfRoF4HTrtukbLxMFFigZ9tkBsxrWJuYr2Ncr4Kg1nEoGSuiPyCvdSEHsN5RaZHSRnuYQ9jtUzjH3Rs2L9uZ1it",
  "key33": "3WbJxW14rJ3ers7x8wn2ctxkA6rZ3SVAsCCEf4u2Jcrk1k3ZSjWfC1TEPycZB3i5r3nNmCGMoH5eZkBLQpSem68H",
  "key34": "4ySXgDRmJKfjJacn4Z3Hh6KoTKRa5Uzs98HXP9MffCreAYi5smJrEq2QUQp5Ew8phjNf2QHUetRpuGPpgRd7t48q",
  "key35": "nHAJM1whxmZpQ8kEap8xwCeN4PUQLqyg3pi6d5rzUAynzpxpqFU59xW76dgmrNztAfMNBxRdjimGVMoNpiHnYVs",
  "key36": "4Vjg5p3uj4nqy3xvY9cQvwZrZm5HK733sDhPJoNzcShyQMbe1fMhGJfdd9sFEnMBSRHgwspoqkooEyExFV9bf4g6",
  "key37": "hCJUXJVU58ym1yYaCuaR1gLgZ7rFyKgLQAMK2u8gPicAczZAL9QVRpWzewG7x4BcqG4Bvvv22VKz1wBK9WfpRS4",
  "key38": "2g856FxXZUNsuaSHWjnWjwVju79iwWqVQmeUmhxJSbPyBBLPV2y9EjuZifcnECQPF1FURbqSHz5j17AVcbAjfSor",
  "key39": "2Y6WroKQ4mNhFi4VRfXenZJ4cAK5WjTa3XrM81wLT5biYJ7r7bgSd8z7rFdEnW2wYEMTHJknyvzbmCMADb6AsmD6",
  "key40": "3vtz7pCVozB1F6isxVTmfxb51w3AZKaKfLgBeQRw26aQtXN881v5EMFJoXHcLJXYWwCxgBAAUnR9waAC6TrowPMj",
  "key41": "25HMidMRg6yFkzGhbexjTs4F7AfVX5gQz4JkNYez8fh1UU2K8nW8UgEUvxzoiZR5UPovZ4vWcXxM1aXPhmExkyAm",
  "key42": "41kcpJXXDAUaA1zV6yShQswCKHTd5ZzucXYCK3R6yPkaShCSUPHhYhxRTwXYzoUwCUVXXG2Ro4ccgfop3vwM4zAP",
  "key43": "4o63HcUXHXeAzrw3a2DdAkvwnfxSPXCvjJUSadcxHxRQz5qxSNCyNQeC9iFZ1GqLU2Tgc64Ha2Fi5tNRbz5MJVwZ",
  "key44": "4bvukPs5W4qj4dW936xkeLey89RCxX29hafM7ukyBUKEhgahbJzLjseUFiHW3w2DNaAaKjZTj6Qth1GNVFcLQpB2"
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
