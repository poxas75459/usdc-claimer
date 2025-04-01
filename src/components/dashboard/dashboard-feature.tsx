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
    "3T2zFrsEUvmgzHYjfKa3GBUV8sTr59Q77UCTjH7Ap4763VzJM3QQzUoQkPmSgnDxiyv96QkUtrRN3pKYZ14hiVKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYNY6WsJY3Y6fV2HtX9eT4TnpoTUbXSv6kZ8JW5kEvk2ZopkzeU6FhA9j94SZhL35e4LSaAW64CPm77pANkhssF",
  "key1": "FqwW1L7jERmy6gx6jx9TC4JoQDUEeCejrHATG42yvqGCu6sHMu4Siv2iRNHd1n3cZTEuHeTzeQZJLDQBFLA4EFo",
  "key2": "4EdVdMPaCNbg7UTDcizAHJTDMreDpcjqks7DX58gUaZ6D2YtdCEmLoRFkWdCoDKsitLnt8xCikWUaJeND4Jhs3Pz",
  "key3": "3U1D3hhfBCn7jSwDgG3bhGRR4m7sxeXLmdpeRWgkPBVareB6G15Nq6ams78XXj4zvX7z7XPU6x2yWCHyULh6fV7c",
  "key4": "koC2Tb2Y13rKq3CcmxLpnQH9TTq9trfMMTv6fkvycnbQxyoUrw4RAPyrBssp7rK2hq15v4jXSTM36fEmpLLzkhf",
  "key5": "5aGTMWKQXMG1pxQCe4naWRSbwNEyiEhoJ51CHtBrxuyXxZqBi4P1Asin5ZeRAGUaE9eXo9hzv28vBBYgFAUSVWRG",
  "key6": "5iwA8JjWTg4oSCa8oQzzm23UR7RPD3s4rsNifbidT1MSgNBZwQNUUXUYxV8i9PEefzCDYDdPZ4WEFkt1c9iPnJ3G",
  "key7": "oUiyJoJAJKHWr3YEr4jvFc8wTDgJU6SxkQXNMZm5DVXKRwQJvewgXH5jFPt8NzKnc2BMZs1BYQiNNjXRKDKehJ8",
  "key8": "qMnWFR6Amji7RdWFpVCkNs6YozJQeV3xPUtMayuk1M1yrLT7xMDYTXzKyL4MgPGWEkrHsi71KbcXD3xG6XhUBvu",
  "key9": "5GsVErZd49yyS26Kg2LUfZmN4euDtgKnEd7DQovdcvGeS4PY7eV7BoqN4SKrAgtXkreqQHKLpGZoPqR8boEtyAct",
  "key10": "fQ8m3fkeT76qfkEdRN5JsTgNkYpWWB8xMfhhcwveC9i6LpSH58JsWS7RtydAH59LXU64UYpWpxu2mNTVHCdGesY",
  "key11": "2oursGZAEEoudqjZMtTqc7PVLVcEuhBMwaYQc3bxwepifFeQ4DNirLdirhg7W9DzjNRG8fsvvUGHNFT8DZKfcv6J",
  "key12": "3whsaCLvRWr2GZwGUd81RmQSftTPxj6upoQpFRUqWBvAQAMHwr659ZJfkc5M8YjdBAaYNARtze5dg59dVXb6WeL8",
  "key13": "3odwiNfrJjxH7LLoVSXB2SDMeG8YqQXuJ8ex7wVkZ1AEdYN7g7PUqntoEGkEAmGGJqjuDTBKUDVUcdLn5vsWcgvf",
  "key14": "4sGtkx4fcoAADykuYZkQqgLWQFF1KYTVaUJcRS4hSxHX6nPzB1aHtkv5auhK4hdyY5f7jQGphTcUUG32Qqx92YWK",
  "key15": "3Q1FFxjynQrkfrSEGcf3SASUAJorC4T1ZNQyWRczpynAdYGtutcyyVqE879FH2Th3rtGrLRKmSDDBfkg7mXKZf8B",
  "key16": "xk6c8yRrXtYZer5uyqKrpsrVSDneCQGbXXhqKvRgPsbXeaR7V4dQ1rCzt1b6Vo6V1HMB3A2dZAia4cSxSnU3jRt",
  "key17": "5Xi6qsFdEmNMRPfUsKaQR4xCTseWng4bEVus2wEPYiYQ1n8kbX7xaJMcXFziWCrs1f7bGxcnBGuLvdsJUXjfsAjM",
  "key18": "2AFEF84UW7dz92CGfSqXMVzqDVCQJSbUEySFdukiTWCRvZAQwQF6gBnBgizvm4VsoGcPhnGAzcJVGTNqcmPpEVBq",
  "key19": "3BHwStJGjobi7zjj9Zq7qb5spipYg2BMQJ9AcBdw86dRAWFUm6j9rTNfXib9LMqr6JWiHNcdeGuuw4HL14L9bXhE",
  "key20": "3YwGm3qWFLUsj8cEWmFgcA2V6AenshkLRFvgfZnM7icWUQLRT4t1YP3ZoUFQ88wRvy6FrXYiQAxTrRN3Yzaw1BWu",
  "key21": "2vCovvwdmK4bungUHUWin9SkoD3Yx8RaT9LHGdMk5xVepuuiZYUK2Dh45cdH3wqh7qKp7EjYWrC1roc2uFoFmcMs",
  "key22": "2ikktXpEH9RoHrX8AxoGhNczydZZQWY4FG54wE7o6VTQ45y5hjXMKo5DVBsDDoivyjzw4KxdNFp1KHn27hCGJPdm",
  "key23": "44eyQUwSKXrzC9QqaqvbNnpPKLLqV7mFGqkvKoyu5iXpdjQk3e4Q4oTB3bCVDWJutUfvFEBt8kwbSfArqMB9MKi1",
  "key24": "3tTmjsEvnpumzfW36NHcAnTrHBvCUu4ys7qNLyFZQCT8crwGYHcCLZAp9AFc6CLKES4AcYCTpFJpmSBY62NguMGX",
  "key25": "5XkJCoUqPknodVa1d3GSBwMVCuHuvnbJV2PQcA55dE1NTzDTZdJ7jrqcjZqP7x4sBSV64Lif7quP9c5YYfNDzgAS",
  "key26": "bdV4Bkbw7p1Ehky45kkn3LY5gWYcFgD5NboxqNUzeFCTaRJRxQdXaT1sYoVVEpBRi7zRsQeULQyZfserWTJGJS7",
  "key27": "3KYWExJXRVxeD848ioHGXA8RjSapQng6QzWS3hnDDFCVxQQvvW2wmjZRTKJvgKDaLzYh79EXjQCYmiDNddKFBRpv",
  "key28": "5FYajcegr1n5ExPm8R9AGBbevtWvNVN4ha6J4kA1i3pFfkNokDwiZa9GrTQ7bisVjxXxj7mvPYitX4rnD4v344cC",
  "key29": "6jKhY8mhTr6GwspvtEQ9JHcTLm4VXaLJk8fbN5rbzNen6B2ELPPcwDYx6tuhKoSQxh7i6mbXuTKfBgfY9JEKqDe",
  "key30": "2PR9apqokvbtRZRQYeVtu8w7cHVfjLwbCki3LdBvr5Ny5cWJ2HvtnRN5bej5amScxCpJY91sEqe5xmscJVDsoZXn",
  "key31": "5TMYrSujTBCBQnuHoLnGCiRBAe2ezNEPZeuQyFX9Q12cUvxCn4gUfySsPgAu5YRJTUjGQgVFD8hzHTAFuhvrBpo2",
  "key32": "f5ooZ53dwgCf21dh575XiUKoZzXWZT897KKK66ufug4V8acrbm5wVYDheeyhhhbLQY4LAfcpQU4PzCwew9BAdAp",
  "key33": "5ZYA8pFE5JoxifyDf1stTZEjP6gAoJghcZ6X8vLAurBzAwTtSSQMiRvd59ARj488qShoFwPAPAhEj911ozJG8tM7",
  "key34": "5WnKgkv8KgQGRGLsC9YQ4XWidWkC3G6qHxnJuMoizhBpeTQkgaGBg1gsC5NypHDJx5ELJzc26PoBEJF5XUaNM8vN",
  "key35": "4p7zc7HyAUbqCtx9N3si2LVYLz2ENvugqP6JNuREBWJcYUnhz5EVcZckSY7cBNFHyjQ6bUa2kaVyNt9AprXa58EF",
  "key36": "67S5mGAms72jnX7NNioZjvwJQvGMyEriJM3PQMJBNEFFhqWAw6Bodc2Ag3XF1vEtFBhRnoi7cF5q76oYj3ypERZ6",
  "key37": "7fXoJynEgjDE795Z58DiUJUEPUniYmDFEqvovsNFq9TF9xf19ThqcASREUE2ekLPSJr5JPCnKpsaavp5K7j2Cn7",
  "key38": "4DkwGgNDkcQP1t62iiSwRGBXsvPGXMcNaQ9VtSkGZpY8q3QktqXE95DnjrhoReoekeZDfBFcVzYhHRozqqWoCEXs",
  "key39": "4k7BD9rDCRre9XX8keBPeRjs8ECSsubDStEnLNqLYd1qBXZSqcrHzVwbDtgLvDV2ur5ierJm569Npkq1XWDgM5tc",
  "key40": "MNkRg9LF2cjro1huh7SYmyCDXUrBYAgPXeedsndb4wWs9cZ2bgmi79jk3EN56mDaUUSjEgcmV1T8YMJbymgoBeX",
  "key41": "4CR4SrmZHXuwGLZ74ScAbS2qrFuXrRVWCD2X7zzht3HhBVjiuEkQmLa49PPKfxPHpbMgnbS789w7Xn2KRofTpcVp",
  "key42": "3hwuMrD27aPzzzTxq9eYHrH8UqHm9yMHpLWtAHJHwumAUbjkrLNYmTcYdT23RYrTUPUq4FZYjzCLJ1sjVQQTocyw",
  "key43": "4WajacYdd5mk313Nw651S7wWKTGwPVK9DPtVEfJByRihoHKZ4bot7ZNojVkk8K33v9XNp7Kja8cgYcKWWqJLuEc1",
  "key44": "2RGp7eXcTsQavmEGvW9jRpWFi51QiV8QYBhryk3mNyJiq2GhXPiMVsZkcUNSKCiQqn1dKojaWyN7aTSwJqgS76Lj",
  "key45": "64Zz7Niu1RXuHURXKuuL2YYZpUmQNGyM8ZE9JD9xJVMAkg37WqC8Eydenfzs2rcp37wfAE3zMx4niami8quGJUpC",
  "key46": "2jWRCzW9JtQN5EjTK5Jk7VFWLazswe9dfqdPqondFssb1QYVKGRwZ1c38KnGb3VQG1iEmyZThJ7LufNvrLLYSew",
  "key47": "4CKh6vrMWk5Mk8YfbnhZyohnW9QQMKwhhucXcfJ6izsfXJMdFYyomgH9sMd9TUtQTiin2nMz7iaCsJCP6cxYnbVa"
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
