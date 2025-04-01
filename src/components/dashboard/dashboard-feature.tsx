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
    "2XcRSimF8HEdCTXeUNQ3J7j5UuCbPHx9tRJFn9u8c89K7gUXBTEBBXeh513F8wgbZeG1heEMhvXYNrsTkHrXZYpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tXmxUJYgLgW5pF2SCSTi8RVpdWSHmoEP6mvQhE3UNbabFYgGK8nZFdrycQqFwBW8BMJYYTygYnPsJx2BGV6KRhZ",
  "key1": "3Y7dQSgLqkohEmoXH2yLo7T4YwQNJGL1f9URSXxYN4srGdCCpjVe7JrxKsoDby9RXobLSwP5LMaX4Cch2ETqkpHi",
  "key2": "52Www9GU5b3rLBNpSbtKZDuduGY4oGSoVmD1ddxewiUvD2bHFqF8RcseAMV1ZgfMTfRJ1uPZNgSqKHV8Mo5JsPJP",
  "key3": "2YPvd2Hwi9mcH6iMyZFEozjoTcwfBBxsiTxzW44MvnrCQBzbchgV6kSciTTzo1QpQwjcybRhaJdnPWE6qSLnt9bE",
  "key4": "TYd5Pk2W8F7JNWFpNpEQbkBqSgLZapaYGNwm1w2YdkSDEz9qHBHid8dEyBVXyKg2TEuVoQ9942fwRQg91TbDsr3",
  "key5": "3PyfumH7tc92DvjGv1nDNy1bssb85znabvVKx7hpmM7M1hDUr43JPFzaqd5xstd3zUVBzAeGe6zQrNss3gL7oW75",
  "key6": "4qwUcZ2mejYU6AAxyFgEf8Wseyq45Ub9Z7vj6yuF5HkaMZEY2WZbhSmbxyVdPL2PjnHAFHcDoa2y2wP4hycFLeFB",
  "key7": "36xDF4MHyxNtjQDN5mWXP61yR5vYqEFsNJGb8EhF581dvGtuqdJZht958gnV6jUKsnso8YxBE2THEZwqu6uVwN43",
  "key8": "2fBqBj3ro7y1TTqar1y8ysTREtej2AHFRQkeRWCYnxGxC4PFy2aSVBEXhBYriMcnjzBjZArwHopAFiQmZRiZAUQJ",
  "key9": "4ZSrNkNZ9s6EQhLCn7EewGrMJxrVebBwUDvLoPckQi5NvvpATXAjjaVacFbjMmyZ6A9wjCz4oi74XZaahP6M1FzC",
  "key10": "4KwtQFFDsXtfet6fiSvjTHzjQ72NrN4JQ8zCRfQGpAZdVV23cVmzLSPeJ8oQ7ACqRDfmArr8wCEKxzcGiGTKgtfq",
  "key11": "6tZpceSqg5fxueDFLBsrePRTQ5mBd144XyjHMnW7yi1P5R5VAyCnrkLTV2aTyHiqxJckLHhZ64zrZWtmbCKwWkV",
  "key12": "3yaMZ4UQJFvapPZpbvMHSaBg4ttqvXdSdvwGD5Avea9iebJeZCezsk5FQ4LDz7vzKYoMb3bwGDhWXENMXvHPgdaA",
  "key13": "4E8qSjYfoT5PYhQCTq8DftMCSk6ZxvSZXDptUskuDj3A8K82i453asBmrHEdTSGDaeAf6GNCjF4ZniLH5SRow3Ck",
  "key14": "2VVHSkFs1s31L9FGm7t1fF2eSSJXhhiLMvg1USCFzd3A6BQTebepCEzEkmUT9rexzGMTc8cic41qMJxNEdaNerwW",
  "key15": "43xfivvZT66KBroGf3kw5Ma9mb1n7RTmvFo89DZg7BpQcWNVAcJuiTPFaHmdRjdFoZRnXcmyXcKHkJ12AWc6HD29",
  "key16": "NVfzfDfJoA6KWkrfSESDwKtqnNJGhoQagnSxJgYwbaoispVMjpC5xQiQUvV6iw4tNtuFWwiDSbwNNB288Q8km9F",
  "key17": "46rfix5hwcnAAj6hJBpvcebCGHRUN2Y4nSRPrh4YE8VhkwcHSQEhdz2R8UbaZXLSXdFpFvVHJfaimks8nVuiTp9k",
  "key18": "4GrPbd6TJk6FnzW8SCXdAuqCmi4QgkEvYVRqnNgyJYSVKDLDTvjD2qJQiZFv6oXhP7CsHKRGBrQyXjE7Qg63EyrD",
  "key19": "2nTu8ua75b1M1MLLXmN1aP1s1jpVQ22Dfcew2LXR8S99WGCsaLoCVCJGWGRrGii8juWRYu8UXJWXiGFmWTLK67Yd",
  "key20": "35uWFdKpMy7ogTWxSnBr2R1Bxdm82Gpin1qkRDPpfKgG6CLbyZBrsxVTYmX6SdpvA2xHikmDtKpH2sUQ6RJPCxnd",
  "key21": "2mKbUeCmRkcsZ2FjKp6CaWQdGH7pSbTMAWLrtKiv1d7g7KCFoaTVQ9btCDicp5ZgkNKRVCBkaxNHvkn5fCW933EN",
  "key22": "PJ6ZqQ1j7aBBiMK2BzcYhbCRRTFAywYm88x8q2xmkypgH4e1stP4BFAVYjU3iYi6D9SDgMCp7XSksP6PuHGCBf4",
  "key23": "4VYYWoMymrktXfZACff6ifEQnYnjqiocAuagwCTnP53uuR1aaLU43APFFm8TN5uNRuHSYmTDGLhBVJrjHHcftGfT",
  "key24": "5cJptpFBtUEN3nLpBTW5nrdcjswGuTjZJiqTxX17p5sokgAmnNPQbo5y7HCfUXbtBUhBrnmRc8iNGM2t4zxuAxb8",
  "key25": "5Mt5kHDkyqA6swvhrU2J6GHvJ2YPZBBARwCN1b2PvGuWmMD7s2RZw6YG9gqVP5MtBnXGfRetgt9goLbNeu9t72Qx",
  "key26": "2xua4m3mcgxD4ZfuLE71XpoifMN9kxs2cewonEq3AFpTvQDqACngcwzZoCqVHt8fDHvL83JACaMMhn6LRY8n88rT",
  "key27": "4u7ZfhY4Q5mMGaogMZ4U5ZUtUVPz537PTxHEfKhDUoKiNhYy9biFcDMNNLANxuc6DhpUCQ5CCwuWgkRNhFi7H6sU",
  "key28": "2mYkKYgfw2ScdChcSUP96ECfEMT8PsuDYWWkotUEA7CekE1uKzQfsGFbnn5iCFzS62sEumGU7F6vuPiQn1jEpaNS",
  "key29": "2pHRKy54HJtbVsmNvpueaR7n7o9eS1mjfDndq2cbFaiHYuUBftiYT7wgNtwCQNLMVK1KGq51dGBh1PzAdTGzt8cx",
  "key30": "2wYPcV65EVwiQfUTxuNMmKUYFqnoeQi1G7XbdnpoDm2A8E8FRsBfkZh8oQ33XArttzZzt2pc1LDrYuhqo7mGsokt",
  "key31": "4kLHVDKhVbAotwkoRLd25L5YQhYhsz9UACnwu8gZEoi1oZMXWj5tTqALnCHV7csZRw8XdDqvew8giLmgmRDwzvHX",
  "key32": "cfQYtJkJYHYroGXa851UX2mHuNRR2sGNZPegu5YeVVzp4jthVjhsB6ZPmn8BdhhgXT1MJEEXXXTUNTkzHEC3QBy",
  "key33": "st7HY7CEJGMqVKfqB6J8S4TqaizXryVczZAakd1oWxu81EWu7uUL7C1Kq7izzzWCmPzTpwrmhSLRmmYdKvEqhzf",
  "key34": "4ZEbzed5wQrXtWDHercmJVwyyMoPLjS71Xuk3f7kbqLEATkwg16f4Uz3xTLxQH1KkmmyKkgLhy3kPUtSJFbATNgU",
  "key35": "61FrTe8nSahKQwHtSapKV72gbyHk9QRryv2xFPkXT37caBVeStqJ2rwXj87Gkx5UJMgWpJmRoTjboGbXHbNuiVJr",
  "key36": "4TCDXhCDwYggGWxvi9P7pts3h68SKERhe5ekas8mk1v33agNZ2EfvEpLc6nVHHZKPqvJqbZ4mSBXsjhYt4HrCB13",
  "key37": "2zG2kMJ2u9Tf6Fge5f8ZiuvS5w2nYv7AgJHLxYuBRgm2brSAcqsWsq7XbXr4DbyLfNHkwZhMWnHVCof7Fad6Fr3w",
  "key38": "45aRZup6fMqsdykmnh9FxPKdBgZ9yntEuzeQobvoPAoCM8QTXWi4fJFh2GhPVYMCoC2y9n2DkV2FUSFXuyTrVZfK"
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
