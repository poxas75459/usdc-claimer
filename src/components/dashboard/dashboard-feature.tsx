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
    "5BYvq4BFDYTit8f8o8dEdk3VmDfdGEZ3PfJBjifTqG2Fk9eHUSxDSq73iKeo8hji8LGB8m4p2aefjw3Usuq3yrWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFNRXy1u45Zsw1jtbqJnEQRAhv4dELfyJAcwMqTQsYNpk2BBwk47pSUCSsyA4tNw1zcLVj5SQgJHU5DtMo95Enu",
  "key1": "2jERwLbH2jHA5EcWFVyks6KFcMYXoUF81i7NQt9jqHKFGRJTXqWNY88RnQXZcMTLwdeSzRmZvLnT39fjVcgsc7cF",
  "key2": "27f88wUjeCuCQvf2He6sQtYouTXrFqHVmov6VnvDDcigpbz9gRYe73Dy86tXrW5bS8mTZEFk6MBN2Ad6jkaY57th",
  "key3": "2BKHFMrcmtvmPWaSqx3JhQY7PxFP5sTnXn6sBAK6Qc7R4DLLLycSsASFwrigCWbHRgxEkKrPFnJBfJLHHhdoJ1Hm",
  "key4": "unDKnxaL9En1kJ7V7Jwb9L3mRT99YyUcXmY2yrCAd8ZP5AjeRZBkAGixkgjNMtYLN1WWKDKy4E2ERAMV8EvxqXD",
  "key5": "28Z9r4CKSaD1WYEuPqY7G6MmsKPKdwDh6wLURXQrebJTSLHVykcVYSSRnKEAAvFdsz5F51ZYoTVNiC4dnqvHnJXz",
  "key6": "4h8TzKMMAecbnKXyvqp38kCPU8Cz5XwiTqUKAnMPKD7teZMyB2ctK5MfuGPfYbTEdNCorJ5A6tG7ty2zJcX3rWaB",
  "key7": "ii6dQ35CLR6BPDNpCipSX9hP2JYMGzZ4ocqJcp3ao36u36mussdtQ4F4LuMFTQFZEedjJBWvt9dU51RS6YUoDjG",
  "key8": "5JDCX1uoBwhsuhs3a2EQ8zKidWYZm6se6dsPVUrpLLB8wac8EiKHA3xBh1H5HvYjAndf6KAp9S5PHuQ3V8ZHZVdT",
  "key9": "5SF78ifKmxzVpcg4UEZVtVHNxzubpdBffvsXFE9Dn7NwWXgTQDwvVEDgtjmHrBZ8oxhCDrzeXUvHKCrWA2Xe3Yrr",
  "key10": "5r31zfM5QFomvH1Pm6Sfs1JTiVQq9PKqqYtcbeSHu3w8Res6i6JjgNTXcXJ1tapkfE5hrpSsNmwEqEZKBHi5Mo71",
  "key11": "kMzcDZrHeknCrdqnRDYdS2vjnq9zoyv5fcJtTdR9gt7sxdrFCE5CHuJHvCPk64fFE3FYP5Y1TMSpSmw6YLPcHrB",
  "key12": "5RE4hGf7NQMqvC9WPkg9gUtEeG15wTJntXoczKXZPmYiRjLjfLUQXsTQGbXmkJMDSZUQ63mJyG6n7DAWwoMVfctG",
  "key13": "4zTnGu5GEzYFVH4qURsnwgY3RrKerFGuze9US5Tik7uj1r67svoFuDoxrAtMrqE3yPR9xymTBnmEwQL8Jvkp3U3r",
  "key14": "QEfebMRyaYUkFrirTZnDJdcMevsHdvg7YhB4BxkZzs35k94WZfMsfJQfJ6oS6fnBM3nLAnKoiTPwvEkznJMLLBB",
  "key15": "ZqA7dsoAvK7c6EwzbsezkTmoLAvnzhg1bsT7RQVGncKYb5A4HNkjhrhzXvn57oRtLWiupwPdYwHVCx8v9BmmGfu",
  "key16": "5jpkfLqL3f92kaN69hCodie63Czq7y7PF6uc5qah6NU6cSabpuwwsUtZ5uxZKkVjwCmS5RXztozkfFMstnmYSssj",
  "key17": "58WveJLJZc5CCZaheaFJog9LRyWTzxWHz9DyAdcjzGGo9WS8ySiSiF4pv7ge869zpH3BFsi6D68FFfS1611wqmF6",
  "key18": "3vzfxFHY1rZVEX2PMCXGFzQAiBuf34CCmgb41kzfSa1ozfCehnxWWX1DWbkEtrGhgUSQ7rPe8zKiq5zB3Z9eN4QC",
  "key19": "3FoN7Fbw5bzZCmZAZn2acXvQjk5WpDqQhzhyYnRHHGDWLLmPqJax9EDBkRfBvNxdGXPzC6UmDEiEzyGiFr6G7aTd",
  "key20": "3WKYezWjvFUgCDHnrhYUru4ofhFAWdRHH8AkaSGHMHdPq2RUka2wSdvBcniT5UBB4jL7TdiDeLjdQ2yoSDsuRFgs",
  "key21": "3Vzca6UmYVntRyDCGvmfxv3NkwRjxQHe5an27sAKW8wGEH6siHdfjEP38UTPc1P7SNm8A8EubSSHYFRL34Nk1n5R",
  "key22": "2jdHr5ToDtoZwq5Ud6fwdL67W8nbxzN2E6QVkT7VLb6CcL45p3EoqAwmr9RgEdfZ1iUGpUWrQcfWZ5LZcPriNfbo",
  "key23": "5JE4QDmepZ6AiXuX1Spx5N6P4ZsR9wPgGeJb3d4MjVQihj8gEFcYosTq9jLUJabe9Zi4D2zCcRjaVDp6PkrxCvnE",
  "key24": "3Yg283pdt5TCqEsHt1s33qx1o6j9pY3KBeccBG5v7FBGSLtufoYUPZrVQmJYP58jzWDE32GYgAW4hqD5EZ9aaxrE",
  "key25": "5sk4nAX82gcSfZ14oeNsu1pJuq4vdLcCCRFtbdx6JnbuXJSa197xabzoMhr8esaRzsDRFVucveaTE9BRTYBeTsbG",
  "key26": "3f5G545HVRuzPGW3gXzxkVCC6edYzMBSLhjJmafRwrxcvshgEn5TfmqihqMFmYCAU9A4jxfMwoZvepBuiWAB3RWZ",
  "key27": "3NMXCdeAC1GEGenxWzx9NBCmrdKU6ZUSgg5ZHs5GQXZXSFiPTRJE6ii2SKhEDqcTKvrNgejmZTj11a6iLL4KcHiv",
  "key28": "izK6cR2oAe359hxWZHevkspaEiYPpR1nS2bmPinw4LkU6sHqzTxdvzCELV7Ln5ZVT2n3Zi8Rvr8CyaV1QBXNMmP",
  "key29": "2GMZNKccCcRqkHATzVofssRoe3Qf1EpmdxYFwLWUA658hvVbpvPyMQiTMGG11UntnELRp7EsprBPsVAQ6XpQBRs5",
  "key30": "4yi822yuvZVNvfTZ96crGz3x8Moqs5njT6aR3qJm7hd9NHRBi65fjZA7CAczkGF1ncxd6AMb313aczEmqARXHJTj",
  "key31": "5PUh4KPJyYrF4Uy2F412q3chTufoAQytS2fcU8enHcEn4zj2p3mPAzSFYXCPdfpjTVxZ9xvNF2RztEc4tsrURujj",
  "key32": "42KBRWhjqHA67RBoK5EPjURJxtfy2PzMJ2DYocw5prqEz7j1nJ7XpKXc6KUG7kUz4gbd9vQbCxkhzNygjZSwy9xC",
  "key33": "5qDSumrmwmx1yPn3mwWcZQ5MuBNgVentEA25jbi2Te32Fnr5iGt8uDGcMevuCLYp6PZ6yPgxkSVLHtkduTJzhoh8",
  "key34": "bCnHBLtAYHHDcLFjgQyjy7rJxma56SceghBHPTtPzUPMAcHtUBNJ4W4CskuAPiZAUMCrA4AYo1o2wQZ6w6Sbh9d",
  "key35": "SA4EDybADrYnBjVF1bdF6EkkFCZDFJUT6JdsNRizuHW3WyreyCxxv9nbj8od7eb4Tx5ks9nQdaT88Lyx79BWgrx",
  "key36": "4DwpfBUvAJ88FwCoT1EbLPBeQN27mMr5Tm2sdUTyu3KELej6P3vy5L7MTyQcmGC8TgS9f4ZiijWVozZqheDGW88W",
  "key37": "oQmeEb2wYLqJ1MEmcjDFh7ZsAYPNkHLgxZcuuXkrjJQUgvJBXXGpy6EDfxGeKQeHmQZwKTszvcCbTfZS1RMiuXR",
  "key38": "3fSk2Znv1Kmjj5MMDCvGfxccxyRH1BwhxGkpuZXRzTmcJJW9juPc92g9uu6xWwjaSw2vBnt1nEkP3EmnxK6KKaD1",
  "key39": "4YgAr98niXYU3aoFPJAeJi9aVRNDW4sEUDxsum6oGCJFuQmYdo92jEJ2eTWgnk8HiBfrkVsY4FnKsocY7zTWtDC1",
  "key40": "3eJ9xJjBcuJsDtcPjEnMHkkWQChDpnNDJrcj1BTvEihjBNypBT4wngpaJ5gQRHujjYpDpzSSzyrckoYE9bPfG1cR",
  "key41": "2WtS1evzDz1vCQeV9JU9zuSR6k5yNMFrVdses1Q2LxJiRo7dMk3cV5ABjkzeDpa2JGxRry1tQpg3J6wxjK6hK461",
  "key42": "39W1woiEBJ2PDWZ6nsnCfbt5WtsKRBKMZK3zarJTXaboKTkFQuFimgSFengcFLaviUF776nYV9gcXKBVgWx9WtSC",
  "key43": "Yzu4KJhJEbH7mcQL99xa9zUCwgN7X6gv351QAPVYECvzEmdU69upPP1ojUnJKt453YSeqHEVwjWSvWZAxyMrGJU",
  "key44": "5n931yZugUJKT88DbHyiwFPshCRc15cpzKWsfE5iCHW36ZwUYDAzimDBWCDR3d4RtGH4RmoFnoYZ7ikYmVcEGRoM",
  "key45": "5GxcTUZSuymRNJ6chWZyguRHz6ZxvYBBGdQLJQymVfgCfrdT5X2NfaLpjpK6Npd4UM9AMc9D1WFdZwPHDrM32H7b",
  "key46": "kswLp5RGdQxXfrY7KLn3bTzDtMhUzz8DoDVR8crjeArdJ39cpzXiNugDRnVqw6CQzY5rGfYWS4iu5k2vtPjUgp4",
  "key47": "2z25ePHe8B9QvBfwNyyRKUA61WbCqnd5zYiNfxyLHfpGiUmqeDZXErBomSdgKp6TsLjjhu4mTQv6VF1YLZGDbhp2",
  "key48": "3HiK148LpYqd8XZVALZ8PShdMc47iHHgP6tQzNhN9b5PneBGy7paMT55Z1ntLHRM8kz6tWDYZxvE8PUKmKiYbCtD"
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
