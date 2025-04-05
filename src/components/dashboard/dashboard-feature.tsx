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
    "2v2VzdbrUz88fizHxq1B6FQyMjXj1cKh9hLFLtqakPCPi5efJ1wiqyUf91NxKAAc1eZpGfVMSh4c2P6eruqedJMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YM1s7hbm17TEJF8o34LE5f43ns4TuzLbLcfTvX352dXZHdtazeicm7vKxArCNhmYP3zwh8KWNmWnTJANof8A9oT",
  "key1": "4wGCnNWGPatuUV3zo4Z2ihAybXuL1CrHTNRVr8HNrGudVE9mH6wmHN6QcZ8evCTupjBJmLFxL6JwDE9w1goyyLE4",
  "key2": "4Ju1y4NVP6JgGJsMwi5epMQtJrbRpa4EYDb2YAaaCBnstAREPRvWMpsha2Nb6tKaunXey7FkgBxxW92Pkmej7TWf",
  "key3": "2nsRHm28xcw7V1xrwZ3tTTQRdtXK5hmFDQwsgxpVEv6816A2c1Jwg95UJWLfRNtYdhomhj8U2oYVEtHbeR53rECa",
  "key4": "5RC8uDR68GjkrsVeHFyQLxM7cnTxH1kUpv9y1NELAzU3fBH695oifo7qUT2Jzx2LcbYLAZ6SuUL1hicPCLhFUfuv",
  "key5": "5fgNjcUhGC4XrxfS9s9hgsZeHtrJPnP3dTjG1MYzVdsPNeyw7sRPTxmNA3kJ8VY5pYZx8wagp7mKZyHSWLvYsvfp",
  "key6": "4AaV9GomE5SAUepDkQMvmRzeAXLtBwvUpTFHdmcRLTMm9ax84WNN7VJQHKER4SGE5HqF1sqi4zhTNTWtraHR9HhD",
  "key7": "5HDU4vHaWWtoLqC153eLBPX8q8Qvob3TpqBxBo923n3t89gSD783g7hBQf2L6RRtgsUNrWba3g4JYsN2cSxe2sv7",
  "key8": "5ERboqnCs9CXGwnoyKjeWTDzWq6QQMaSGTnvman6nQL4jYjTt153cnk5pH5HGCMmcgaEFHyzEohE5BrtMR9Syo3y",
  "key9": "2Ac65WEG2hnpA6BDUzqy7kp2nxRed6F8oTGLCxomQbBM9gwht6GzVy4hiTrMvJZRpBJKz3aTTXHhpBjxFuQniVnk",
  "key10": "yY7ZPaB3jgRm4C9PT7MA1mu3NentzrRzCJkmhP7kDfUfN9D5ZVA5tFB1Ae2eHEbWK3PDqdookjB5n8P22vvKVh5",
  "key11": "2Kv34X5QVo5RPVNQRxMzLUE45aKJXptFzYypejJsNVsJFhp8iKYPu3CnazpbnqkrsV9m86SGtJqGxWDBWScexW6n",
  "key12": "5gdPzFddYjZ5x624UjxDTPPStf4qvkGEsCQHj5JqVrMGzHZPKCQmuZngKAcDmN9sH5Wkd1Xpvrftp8kiWBZYgrPk",
  "key13": "3FWo1nFy14YDzPJSgv7eyb1WCNXXcPz81vbFNZ7FZAA9cLa18CduXDceX9AbPMutDifTom1ffR52aFWnkdeYaNAm",
  "key14": "3rrZD7roDYGrdQ8EBpCRzAdsTYggP7F5Ku61T9Y4bUi1zoKMHm3cu6PXKhUH9NKngDFNKNcS1MsJZCcJbD3MSnN1",
  "key15": "3fLKyXARQ7spZ4LQV6cSnhBuHVwWgFSuwxKwrfRKNxMtWtZidtgGwXNzEVjX5nGinMGX7iuUpYk1cJN3hFGgmRNp",
  "key16": "31ZshuUM9tdbRZo57TChvAx8jhXKTfW7DaTAXwau5ihy3VJNdsBw459oytUZzRebxd2L1EFbM8hakg52kWLrdpqj",
  "key17": "4PTAFQQjdY5CxKgWWUFFiDL7P7UfDfB8gatuppPQ2Ze8zoDjcgYF2KkktU35zTKtdCd1eWwiipWXcoNLP8mUUYhD",
  "key18": "4DKEJzFuwvecXDLrkfwBQFzWSHXFDM8BbEQGJVzQ9JFyMaFRNX6cthmNGPEEh1vdfdYLw21w3mgDFxYux3FxbeDg",
  "key19": "RHd5AKbiNzFK5ymWP94yTfDbFEqgau4F3NtCo8V2jVZQnuYDvpKcJ3wsodNFXSjyZXNRnKFE723x2Z7fQomt5Sb",
  "key20": "3AG4Up7BfLMtdT3u4KJ7Yxi4khCReLj3avCZiWupgmtzJwb4eft3hLr5GtwXtX5WiEZVASes2grbxsVBQAFFcLMo",
  "key21": "4qAAw7vSWCX3KMoerFVeanyiQgiFQKRs3gexZJPkUb3aCBKxHUN8iR3hBABKMZ426QdMG1fw5NSwvmi1Dky56sm9",
  "key22": "45NiakDxxACMwibsJzv6fmdAUYvuVnbBDeVd84y1UPhjebgVtnRA3LqqytcGZkWAPfkr5Z4qzmi1FoLHjimeF1WZ",
  "key23": "49hbof4Vcn8ZaFbGEb5VsCTnYAqd2XQfhaWqyFSAgjPmfsRSBvg9fR45FZRpBFkVWyoxkY1UeDQ6PLzA8VetfyDo",
  "key24": "5ypdMhq5qLUZLnex2QwypCNR4wQVveo3QmA7EJhD9mhdzKjkGUEE15hL1kMCqnqCMxDvn5DbDDiHLdawds3uEgFB",
  "key25": "piz5oeKB6TUmtMSqMoK4rTJB2L24nYuUsQw6r6MGJPgEzNAehZKTt3nUTWyL8abRwQkr1QC7AHu56wVBFt61sSw",
  "key26": "2egTkcTn9ApBdPKj1EXkvRpczTt7bhBgg2bcV9D8wqw98tWGSw6tXKvJuDPbQ5rPFZSXupveYXrSm7yCNAW5jM4P",
  "key27": "45d8auyDuW8c1yhHDH3SPH6pEdwkAeRmx72p549nNNbHoxTnKn8qo1K9t6CizurHQ3aMTcyVTcu615szbFPida8u",
  "key28": "5S4f1a1W59fo4a8tV6W92s1ULkVxBYxZJ2xoD6ojH88kEW6LjHXB8eZGvkUoJA7avyRNJSWXWXvLdQZbTd8YTebA",
  "key29": "Wa3HTNgpQMQjR5fvhr82WCpZPvrzPWRwffnSc6aWueEAtLZKetPFNFUb1TfESTDQz5Y5aXexTdYtERHzJybcdnN",
  "key30": "3QxH3q4FDb5hF3pSHjayKUhZqx7pBuxiRZrdoizPcV3RQrTEx82y4FcVJz8PHTFLiK6QR8tJVKvbksVrRPEbvhiw",
  "key31": "yBPbNeBjh3SayMvsriS49fTmidjeJ2cewP6RayawqXF5ENFSKGDFB8QBhpWYGFCqMPwutVqNg7qVkEDGdaAZ1q2",
  "key32": "3DiLEGUvvLXe4jW5KjycD91hYtcZsbtVHutg1evhbnzLQzw4fTM1nMNvhTFHvnm8dmRPCpZ8iQsAks3ZdbQRajV6",
  "key33": "35ZxpL6F3m4UhFek1QzdEEf9kVuwkVujCJLWFMA2vVyxqVyqS33X41oRWFvx6nw94NiURdUXyRHvNG5y1tJ4HTQB",
  "key34": "4GKgrKTCmhPuoyztAuKbJbx4qYSvf8ByJ2q2Ap1w9v2PfACx4vbtL11jeVgFuMsH1V36dWUzQ9LcQGknjg9zMox7",
  "key35": "35HhfnNppZGrJWd6fZVjdG3bFSHEZJq8FckdEnnJCErr9thbvewiDvHRAQa7zwPBitsGFpV8v1YvGzVPacLbxyw2",
  "key36": "5jJdZ7n6nM45xU5v3JRnLVfcPKQrDr71R8KdJgTJ8CzkLFiV71HDR8WEmMo5gCmc6cGRCV61D33F6ea2MnNobspc",
  "key37": "5imwrUjy2tjzGP3JXETRTrTMTT8jGCfowQYvesg3VghA1sKMp9yJRPbhXFxNpWFx3gW6gQoZQiKjWr6ZTtyRcmtW",
  "key38": "5ZjkEmpnP2ufUd5KgcxdRb2CQgewGZYgh8B1y6Y5BUoJCFMLkVd6faRSoPVgdBui5urwJfL4NxPHkc3q7abYzLXJ",
  "key39": "22qZrPBsoNoUUMvsfvggfRvVhcWChBC2PsNtX83j5wpBqnD8FRxjaXERASdhvfP5W6EL6ZrU6tCC6bCcqVxAoTbh",
  "key40": "65QYZ2SpVrDeEn5q4rTqcAQxLK8Qa5T2PXXy6km5f2Zb8EkUK8ic49LhmV8vLTFefBYZnCg198mcRQrsr8Rh8AGA",
  "key41": "3dVBvfRoZhTfQ3z6wSQREEjEokBShP9yPXDVE15XHqad6rr2UjjEYvCh8Gu41kY881DM62RZLCM6tD8rfQmsirQW",
  "key42": "4v6HzDyDZLyMgEavW1TCjvMnTCj7ymt6dBKMMedo4VH8iwGYKXJzAjLYkKSd1EcxuttHeMe2xMj7R1LhYVW8eweG",
  "key43": "4wdaSz32tmpRqgEL6QmuU9U8NMSY5jTksgos32PnUSnKca45MQhRmKoQnWqR4gG7qzHbXsDZbhnGaghfT736Tp76",
  "key44": "2FJSeMNbtLnGpU35MsHAWMJZJ3CLvTLcAfmmiap9pxvC74LZovDdxVhKUng2rWWAGYWa5gHCtAZ7eu5fo8RE1xbU",
  "key45": "5YvZhrKZZb81H6uKrgZu1ygwPKqrWREwFsGyU14Zjrbi6khNnDUESvEEnS9s3NqoyBm3br3oCH9vpG14PmXePeJJ",
  "key46": "35oyg5zA95G6hh6Qgrm9F8VzLLevHJ4duVwLtP7KZvHZg8PpjSbj6YgHYqKcNcUo1d3eSe35Mxs5frgg7Gvm4rza",
  "key47": "5xz6MMAaKtdcHUfv5JTgVynk1gkrKVWWGLLgB8mSrxfkFa6AFgMRQtHcwjLv9zA6vhCdKnwdpmUocmK3zCsYGWpz",
  "key48": "3BxEgtysmKYXkaBopJVtRQ9fHiSio2ZADvTTc7V1f9yERykJNtKFPCNVvRTEVP9PXHmMgaBvTuyGZZxxTCAo2rkB"
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
