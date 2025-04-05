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
    "5LKeXmKnUCeaKhiMvMjgknvNT4RjMZG1TdBtZXHJJxAcALhg6y28UPKFdYtPrnoNhJW4cy9CwfmuzP4xLDEWVcYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kDHE9o1kWGr3pvLqGS3yjtk5HyTnbNBiAjQ2N2UnJzUbqr1Fr9nd7yxXH6JT4uvDbYDj1jvvte83JjMqBAWxVjY",
  "key1": "2inobkADZdM1oytX7qYXWU84kP5vRgVC2o9sH6pQy65hXM2ac93CNggH8sKWEkycDB3Xzm19FwRC9rh1hJ5aBMR6",
  "key2": "5WUXf22A1PGrCUHuqXsgGnG6wDj22wSrtk2PYawKoy5xsnHty7zGDXFUWU3RykBXaYm3WdUx3rcWDgYMubRZTZB7",
  "key3": "2GM5kEK6QnxNSAZqw6omxs58T5sieiAhgRP8VEnBjYJYSvbZU6gvQ3u3BfQrw48uNhX8JPRr7HMJBrfvLXUuvtNv",
  "key4": "31u2fr87yf1nHaa4j6LnpJXVWLVwC4R5FqgELmSna33yLwjYiU9HzyPGXwJybh2KjnEEFzwYR3w7qsqEZDrnxWMJ",
  "key5": "5Zt5cK1BujVjkFdqrkNAfXzdXeZYqo75gf4huTqegpqBVx2XjWexFToCZhFFvpkDWhUxwN1qzSfjELnBzCDDr5Pk",
  "key6": "5sqLmQ6zuHdYgLeTJiDPCzVC2kzRAr4zmV5XWjHnPLD7unJnQqroVF2tdBX5D1EoSV6LdceDJjvks5PJaXkdxk7P",
  "key7": "2XQw4Zv796zxwGEGhBz5sxdofYJWj5jP6TkRrDF8QW8tfvJD8Uax68iaCcptdq8fPsBQ8DgzTMY9xpohbxT7ifrB",
  "key8": "t9RXH3SkYHpeRXjS2dLeJ4T6n3iKYBBE4AUSPSFvqyKtLQyYyqBZG9X1nD7hPVQognsNhn3Nk7vYt8rcFZfjccA",
  "key9": "23AcEpWWM2HL1D9TAXDbY1dK8fDuaAf2EeJNByiGcEdRzyWjommLW1mRpsZqoz65MjcksGunMU7PbXc1bfEcnq4r",
  "key10": "LYArCnV7s9QGm33QZKR14V8hHQzyG7N6QxekDJ12Do2n14f5DWRkBEqrgdngVg7mKQfSBmWET6BJCb3ZYfzvZ8X",
  "key11": "5wwZy3XDrX59KWDozRYL1kmkqwq4WfUPwi7Yy7drSe3RUtZRihWjTpy5CscsrFwNjWW2kqofw87ULMGMBKe7qdM4",
  "key12": "55q2HmZhYXczYEM6eWt8eZcjbQS7JKJyEaH76Auf9Wr31C5kpy6FyyPQG3bsA2tdkF4u6zTWwWVsc9JodbDASqzB",
  "key13": "4vJJi49nQs5ioXCBpVc8nUZVt1xnZ7g8H5tK1QHcdHUc1jEHU123VahUy6ETGKKx6N7DurVaaPTLxV4WzjdhTAqq",
  "key14": "4QWLfTkJLnXXdn8eeqwVM8ma6hGokgPuPTnELuXV1NwZxFS1VRmRG9WGDAgWEELF5rfC66MUEHPT7df2FYpBuH5Q",
  "key15": "3UR44bMyMwW21SckxEQwckhWcW6KD88DQDR2uRjQDsvQp7tZQwHRy1fYCXCXM2ffUd2HTuidBZpC3cFbjaPrjpu7",
  "key16": "5xqH5aeNZMZxbH3JjXthSYiyz14sWC3QfHzHhds7tVnbgV7i6XVKLLkdVuQG7r7EnLHESEWpdBBjQEebzod77o1u",
  "key17": "65JBya7pLutM5CL5pWAgZg3FQsjubQTCNfruRdJM5z4roxtMKSVhiJqBXchqUyczLZbd5GewnT1nd2VDEbJ5YGeM",
  "key18": "2MkjMCemdxqvNE9qt7X6MrtPHYarCQSM9VB7uBVHdgpfyDBxnu1Q89Bz13LESLbB1H5gLd2LifhJJqsBxsXPGjCz",
  "key19": "dLpzoSjLQEFBgiX6FxcmVYZ4oQsSoeaLyL5QU1xuuf8qWnQdiH2TjBX6ezSNBLHK2uQm7kWQtgZSJ2PdrsmNTSN",
  "key20": "498cai6AUNhc7NiUZg5Cs6xiVgNumHiRmh8xPmw3PQbHijoab3XhyAntvbSQS6wKw6giMqv5NzakdoEtYv9pYigq",
  "key21": "4ZAeiYy6pme2Cvd8fcvZfHY9BvAzi8DiFTDULcEwHW3jKEiV6phDGzfvT959zxUmzbfrL5n9qjMGpAriPxdQQntY",
  "key22": "3HtuCSb44co83BMk31Eoji2tVmSkFyfCUyKxuxX3XLfU1kXWJL5kteh2cFbqxZpU267HhpJVMVnmZv1bksVrZ1F8",
  "key23": "3yjtXbHQbu9kaQsqYe95U3d19zNeC4egFESgJZsKBnZthW4At9Rw4xu5nvqnw7XyqPcBVc64m7DhsgUqkvGxim2j",
  "key24": "2twYDchuyRrzx8mpFNLFnGXptgiTdACgPsgMrAmvaBmDEq2YrX3gWcZBmAndqoP6G2mm2d2bDuUYMLLZi1NGAKEo",
  "key25": "5GAEMQWSC1TDjpdkd2LTJXYXnoP29NsFKQqrcZjyXgt9JtEdR8s76LtBGPSPYW9Xk6Ed7KUBUke1PnvZgEtVnGag",
  "key26": "2yTcUqzRR1mABQZtDBQePpcD1RoSwGgKc1dSH71KoC1EDeRgX544Mt9FR4GSprTaXqQViVKRE498VRD6g7TW4KNk",
  "key27": "3mVfycqCDCopLykRmEAeueGjwoyPWAhzQyrhrZi7p6X7KJBbvbWgSHfBjb6LzBzZu8RuMXosAeFLqatvdZjC9cGy",
  "key28": "3tdpTNJ1tYgQFLMmGzJt8pJLLzz5uprN9ATtKZ1NywRFaQwKuFAHMThQecda8az9XeDhT2n5DNbwZpuDhiwzGZEJ",
  "key29": "4e7QHqKVW2GQUJn1Wvp7Xa5uzZYC1TT7BRfhhTqW5RJqnWoUrY1DLcEKdazbau6Uq2RGrvnczrNMUhL6rXg6cxe9",
  "key30": "31qdL5FkMsYk1tfB82hT5d29xDvaKbpFb3sdNcWfKWHR1XfnLvi97XXZHK9U4c58WZbZLrPpr5XjWztXvPDnaCmi",
  "key31": "5Gy9p9LdqMLG8gi5UN2dc18qrxarXZ2PMGZpCYVEzFfKnBdsCuuhYBVdVvXzSfCenzJeDkiMnH32YJBjcfRdvr3d",
  "key32": "4aAHti9byKjdNCCf2b9qp4mwnHegJHE61vfAy1eq4GAtJo45kZ9L7FUUkK2dSQb8XsWia7nzq2M6osvdtfazwqC7",
  "key33": "3fUMdpVZ92XLfbyCH9Q3vqrKUCKwHt77DKFb36rmrgWqfBWQeRAt5MfzTFkCcZshudRVjwwoH1P8bB8kxNpFzd4S",
  "key34": "32T2dcSjwuQPbTKuAzBAm79GkkonhkCf48vobTzJb4qNPtkqUTpkb9bSEyEsZNs29Nz8FRi7cyAKQU9stEFyujaC",
  "key35": "3rkoRKvD5HVLQ4cJiPFBUXw5qHPP4MPireNSmyCu3XCpFGEvnDqP9vj2mhVDze6zk2oWopUmxTd83hpa59DNxTTb",
  "key36": "42gQbSwQUBhDJpcbF2XVDDkkxD4cpMsXPzTa4xWteZxT32WweuWMe9gGQGi1Xmcqg82u2DtKSq1JMMjEsr73p2xm",
  "key37": "2wdLPjbp2S827XqFn8sDenpwsEvfRYPtAd8LChHepgBNUV2e64gMVdTsGpxWczJ6Tfg8pR9a8fM1QafQRT4qBAJK",
  "key38": "4r1gQP1hyp3Lo1FDVsrypz6QuTMxVtRaRdjavAaDt1joVxJR5EP5rwZLWDzSEcoX671LkzXNnH7KR5ZgVukTQj9n"
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
