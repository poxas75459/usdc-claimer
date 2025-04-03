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
    "4rS6YWmmFUBpmRuuQQhyFE1WYZeprArCKa5PJKCHvGxXa1btSTv77dkT6V2xv6jF83NGmxaN3hHTbvYPxAmjLccy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JyEyWm3AiGx33W4bJrgGhvo275dU8rk3zZTKHG7qirumE4V2E31u1A3CZRMGNL1gCdNcZ5LrNoE4JwNRT5eiWRv",
  "key1": "5YRAQ1KXxCnT5kPktcx3PxL3At6bX6yQzzym6ShrJAXhdstjcX9ePDqZN87D8Kj5dUKx6WJccZnwTGSVFXBhUXmk",
  "key2": "3UjYpYRwa6TRivU4dDT1wQk9BTLByMctQmDw6sGgLa2UoKydMDMN4vzgAPUR5FVXhdCQYqLEtFeSdxVnGfkqVYjW",
  "key3": "44KwhdA3ceuK8YdTQA5yUm1K8ueyAUsGapNg4umXm1Rv1E3dxSM1AFenxgkGZsMKfokUev3mpp3n6TqpCcBgEyuq",
  "key4": "eaHWepd5TuxfKmegBm77141EETnPogFhJWDMhLsmFAEsXbay5t84iVwzZzw966eaxHwvemnjzWCbEwShvwhQszi",
  "key5": "4cYMvA8YAiqrgT8i9v7aQVnhpZEUSaBKYREG5bXerH1y2tfN8tbVNp4mr8wDLY9rVMmaYSPkBHL55RnSJNwWrihs",
  "key6": "25LZvmhWUCM1o4NyGExHdzDE1VmpgQ83qGL47eZLjdsD9B2mRc37brcABxcETFuQHPpHmiJBup5Nk7n69F864vy5",
  "key7": "3gr6RXJvdAxi4CqvY2xmPDF8n3RVGLXh7CuMsZ53MzAdRh1qkpJfmDPwjd8NaJcnr5ESJo3nfh22i9KySnjzR5ia",
  "key8": "5BJYfoCYgji8HbzkWQsESDJeQGgWQb5G6J2NdKgzXNqrHPtBKY8TxUNf94Lfz1Afnce6VDVsbxff6UusFnEu1HJH",
  "key9": "2QT3B5P2GQVV32K4Z7eqEF7qGL6KrNpaREgs3STvpMDHaQEGJPRqzeY39dHRX2ADoTapJefzsCg15Kw68MA7Kg3a",
  "key10": "5ZvxCDVaVUdXqKrW7HgSYTKqb8EPU43Y7GXez5WHLYAceJ2XbxXBH7nCajbn1RRtonsAEA7UeUY7L4Vsncv7cdEy",
  "key11": "5HSNu2yHQtmFrAHXkNPc4HA7KGSwAWyFtUeP2XHbtefi1ZUrHqFE6x3idVxB9kCy8hzK7LPzt1riVC9KKuaqC9AY",
  "key12": "667yQAf9gsThejf5X4hssSmY5GdTq4wSagBwjMF6wzqyYgBNwdXyiYwRZYSuL3HrgHRB8YBKo1TQ5tB2fTH8Jwa2",
  "key13": "3xqzqAcACzZgterQCRAsyfpuKvydzZvmpH1wfQUDPmBx5Y7otqU7nP5cScYm2xubGToxgo3qP75SQx5JUMLc6CUG",
  "key14": "35ofaCcfv7PnJsvyBcVQbE3szKHMexXg3bQBr71gYciegQGaTnTaSKuE1SboEw8B981z4c7bRFGduc5KfcWXrmxw",
  "key15": "3VmTiVkLcr3CboZR7T1ZKuMA4rZ7WmG1GkNY79oHegwbc4UgPd7GCpFTm11vWr1wVGmxs5sND5jWhGqs1jFPovSG",
  "key16": "3mZzBddfCgBzMVLPVKvSE6jy79BdBUAaxcrwDXTdZcjogr7UM9GC2Gvd6UtNHCxKSTawKCqyTbFYmjinzMWrDg1j",
  "key17": "uqwWV5WMZ5VoahnrWj8LzrHYWBWDNY9SuxXGjCDpbrx1MxGFnFKnSpGn69hGanDuuhTaXgFWD38np35UehgPFYm",
  "key18": "3WsR2EYzyhkB5zjkpAqDDhUhumUHXfDFG2SeDf3NZtPvoq1XXubdVtHKp1WnvHYPVvzDygeD6guM3bGcY1rQdhUu",
  "key19": "2g5B3TXZVjvH3aEiBAeQt2FxoNxE4dgRKf9N1sEhfqS2YXdrs3vRWhLixeaEyK4rtZkJm6rmbukiofQf4aoz8hpf",
  "key20": "5TJSLrzb4jfqDFLQT11CKSXAfWNyTFV4dqgEM5zZAx26FgCXkzjm1Bk4KqZRtsuEiMBgxPGTNC1iVTpuf8me6xTb",
  "key21": "4FouLnKY9fJZAJXgGvhacdipWC4hQueZoUYpw5F8Kdp5yNsAo8cthGszvVxegnTYL5dpiYoaems6FEg2Gr992iyT",
  "key22": "5AWtMH9UDtYnivbzbE6QATe8REByazsHmZiN9yPoTckgjDq63gQEuN1yvM7VQzXeDPoGzF76ycQy28hSX1Fzn37P",
  "key23": "2BejeCEC9gKKpjLRcUSWwWYqkdj84dRXFAhDxT34Qg5cg2AMsNoxsY9aBTXKLjHVbrmhDTUerEGvjV84n8dDvhdo",
  "key24": "3L6c4Q8uVUbhYTTrmrZop9LbEnR4E2eA1VKWyGyvD5nPccUGiW46SuJK9JuftXkEpfSekvnqwvtJwQdCS1mkedhz",
  "key25": "QEMQPm2q51ar8jiyqEsqpDkwaWVHQzw16BdfVXj9R3tVk7y8WhQ4AVrZYhA6VVP25PDC4gxRhyzA2pS9dyPVvbF",
  "key26": "2RMDf5qry9LK7zvcLMC9NeRaEY8w19NDBnVT3JYwMfGtNqWB12bJNn9a5XiGUHW6imJMt7NQD1AyAgK3DcVTKaJ9",
  "key27": "5JC6uX7ya7UXBWspQmAwAK6mdaK52MUSc4tV4kPhGm8rqFHqtnZLyJ7JWZq5CkBNJSxrzPqQ4vk53hxPkNwVoVMm",
  "key28": "2VGmxRqAywLAjgRvXPqCygiMHSaBz9Qk7vg2fR7jFjCJCoDqT7qEiUJgvWzdkLB3eBdrAf1nQXwibvAbYozVSd9z",
  "key29": "3qVvcsuofmsb6W9sCYqCrPmm8w4YcnGQqd1jSRiH8vwfjEXoJJC2ZYZoC6nQe4Q1Jg8KwfDQsTURYJ69FkyQZpEX",
  "key30": "pm23n89ai3tCsGwEGtFN2sZKXvRa83kQ2BpbH6UAxshpP8oJNoTZNDY4zeKebzQYDEhQBWEBYbKxzbYMsGa6Smn",
  "key31": "3uhG2nuUGbCmpZcZ7zzp9EjFzzhzZHyrFzZvmvJcWS3T2binujXti4xW45XvcUcEKAddvf3JPMvAWtSiYJNYYzw9",
  "key32": "427k6vyEVCmLjb2tjNDdoeshCbJXgfMhJGBBSQbWGTddDdYsrA9gt5QtNf55vykKYXpc8WsgbWeq6P7FJAgVanJM",
  "key33": "5egmckBAyVwXJ8CWt8DvCj3PU241bEajAchGTNWQk5s6gSJj7m7AUHnESV6ou5AbwREss27zLcrjMRX7WFkMrtnW",
  "key34": "4qnvARhkYYchAZkSD4MuhDJuMhLczYEWeizJLqY7A9Ek5j7xGHbehJ2eMhbb1V6GB8VsPo4D437yU2E9MSWcUWgv",
  "key35": "3DhPnAcPJ74nTUPugVeZRZgmfvQ1AFXKXnprZ77q3KdSG6pCNKGCFVk4R7yxxj5jLtaKg94QuoU9HtbpqCPYztXm",
  "key36": "33EAc6vzd7cSRvPkC6CyW8hozeRkoeijBTmpBPSU47v7xS37qSJcgUTS1xSYdW7BJ3yAZ8vgNbtA8Gy92KVBUeTz",
  "key37": "4SbQs5kuttDnjw5f5X29vNrdFD8r4PrYyMSX7iAw9tpKQdMTqgLDseR3EA5ofjjyrVRcrzk1YTNUmNZPJVZjpg8z",
  "key38": "2uK2SGwN9T8s8i1wionsor5unm37HuQaTvbs1q36R9S1vrmi8ynh6KR9uiNupdCmG5Pb7nXdHcZ9Xc6DSDqJc7ZF",
  "key39": "pg6H8DFgg5nRzYdhPU9HTKKgqecNMUrniYuzCDQ4gy8fBnMHXS1miVu3f37onEmnRqeUkwoDn4ZhXKrpX9xXQAT",
  "key40": "4eTWHjtWTZfSmK7Xyy2fkXD8DEha2GgU2gEWk9PXvypojHLNgwdD9nZBrpj9v9ewkRtNqrwHpy8psLAEvu5uVNra",
  "key41": "5MDhGZ1mrLSA2UmkpRtDJQdZr6S6RV5CCrN3XKDvfzqbEWafT5JhDPi4mrvwrFQ6TtgupqgmgMd5MMbQv96saVCL",
  "key42": "MkVxZH7wwAj19C2aPrjgBinTbXbAvuNbfoLJatG9sphWzBwGgbvbtCB5PkAaP4Bttnh8KrJsF52jsmPWFXtVgjx"
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
