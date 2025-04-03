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
    "2vVBNsd9rw8Cdyw7qpG7PwZncq84Be8LXb8wpb8XXzUe5mdDewGtfZbTauiA8TdXgLEgk1P9f7prsVJwW6w4sSER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29hzysm7s3Fjv47iP37L3zCwpA3sD6WpbqgaxZe7cdBFPXEFywJP7b6zB6ETt1nANhmEMQZpCZVRZq1SUmnBHb1H",
  "key1": "4jdq77p5qPtXneHQNQrsxwC4VMCrLx36tqYFfGYMCseq7j5iF5NnFRdwt4RDenoNgxXErME3QeAxKqxuuhjSuEYZ",
  "key2": "2iyAKHHkVopB4XmwnghDBF41Z7XUW1jF76CiNBibA1ZDukx7n4aZqfFPSr1cpcByQwZxY7viCJqFQMC9WewGWDbh",
  "key3": "3q9wPenqoyGiDCqustTh49DXLN37cpWMgPbmLTx3Tyf8iMXTPTXuC3RYqqxVzXcW9KstW2VXCAeaZWT8d3pQ6yEv",
  "key4": "2c5k922cUxGJs5uJ9KyRQJvSfo9h7wAP3qREKkV4AhiNUkMyUxzpy3hEyVSAP6z7m7w9xYuNLxJeh6y3uRSx49tX",
  "key5": "2kPvVyMQjR1Hn9YaNRkRVnYRdtThbMy2b9284aXmLsB6fg2GMkbsTS945RGxqvbpadMD3fbF3VUqsPGmjnwvvgKA",
  "key6": "5TERwDnQ4P6qjDuJTF7YbetUueTtGJukFuYFqKcBoCWpFckZJgz5GJ2PFyrdozozehCdtpwq4rk4FWmDD6q1Cw4T",
  "key7": "Nsz2JC2xGp6wGQ5FtDFUnEELRi2BYgirAHLK6P4dNNTA7drHgEAYsv76SYhwEBjUhjmw7qWn8DB7dRY7fcUzp79",
  "key8": "4qFqzQQz4VJGDWsqv7SXuHL5xrWMtPLNVKJrczyhxYfYstPmvZsKHEVQ371miEGpzS8bLrLpfNwjrA83QVfDzoNC",
  "key9": "3xmGzLREtG5gQ8rVGNqeRTs4xBKf8ZUcEx4tUucWzAkmDQLcS6HetbGjgKB9qN6qcE8KhSuTucmhoirwsrjz3dA9",
  "key10": "5JQKH5m9YDrsb8FR2YcCiU8GstgBiicH11iTTm8ppZbsNSsSYVGLuKjgMae1nv3QAxn38teytjSsEK5PwExnEzze",
  "key11": "3m17Xcub6ErjGvBrjCdRDR3EtHLz47V2LQTG7xW6cJFvN3ip5xPPebhvaKpF2Ab5RCNoK23kStLfYVG6ph9KF4S8",
  "key12": "5LPhXn7UVqiXvcZ4DBGBB2hjqhve4vMFzEch1uC1xsqq2xii3r2ri6WgUD63dKCF9LhVgfC8M1nhts9hgzwefsgh",
  "key13": "2yZfmDmtJkuHeaTskbRLSHBfH6SCFp7RYAzTLMbt7Y7taiFQN3kAfBzFPXVF2RT6FhXPLdPRQS7U92jqRV3c231T",
  "key14": "3BvpEb3kUmjDLNznggjZACJYENYQeEkUR9tiCVHAYYi5MfoiRiM141h7rsTKaVPHGgwnyZ5Fqe5RuMHn6cCqk1GG",
  "key15": "3orWD3JQLpj31nk5HGcdBr5TqYZVxhapPQMc44yjXdPAL2cPdyFYSYK36oEToRbsyXNMVgAdY4PhWZSyxbCpmkz4",
  "key16": "2xwA3rHHWuojrJjVeG9ShQHLQedgY8wpxM3yq9hNNvSCccAY3bfKrJPJqpPYDArrUgA6sv6a6srE9Pm6kSXtDsdm",
  "key17": "5w6moEkrJ3iuZCRaBVXrKKhwAucaG37dgQ6hj2GUqnYaJ1gYeVByNCQRvKvMJZjTAdce9zUP9ZJcK6m9HKbFGh1c",
  "key18": "3RXg2vEGL6EamrUvyFoSra57VnG2ts2EpJaZJvvsaSDJktmSgX99Vf83oAKanCf5ixvbHiHvWcofTGE7qNj8jPLX",
  "key19": "LFzD3vHeHb6LjDTvJ6z9RAcVhBZ9jP8mV8rNZ9Npc6XF345KtYcjqPgbZViYdKCKtaTSQc87CvYw3xqdKHFHf6r",
  "key20": "4xgeEmoVf5rvQzmMbMAR65dw5F9r7PnBvZj4iEw4PywR1mYniiu9rJ4t5oDeki5icW7URB8qdzRwVYqx2LhWgjew",
  "key21": "DqxfYC6D2darhWDRoZXRq3ywSMTzAuKe9E1piX4oFX26sgJ42QWw2AKB6sJDHKdjyewRL9ktSZiUDJTVtV2VgHx",
  "key22": "4tv7pQ416561j8z7uMWUsdC2xccJ9RXKS9xXirg17RMB42Q3sU7PCvZMRGSjFjANwMacPh24S3ujdUvwh3XQiiEj",
  "key23": "2Tuay9ARjV1kkSeCUwUfNgYcCVyUtcXLeMUdMkpnYM8ym9HkryLdBpyDg2CPH6mq1EMeHnLYK1SDAqaoM6cJNZJ6",
  "key24": "3X6ZmceMYpq7eDFBRR8incQRVuRYMVWJCm7857uJ6t1okc2ZNxcyAx35AKDMtpwvNfTDizSBpFVRicfBkdxRgDC7",
  "key25": "3sVGQYxRo8omxytJ5BHbXt5W7PS8Ni41qZxhNLUu9Y5gAtbX6raze5UcK5kfEZDwLPgr1fjG46Wz6TK5hucuSi5B",
  "key26": "5yUy3fdXt7MJNUQcmGLYMWtb4XPejXRmotfNw9jjRrgpFvLhpYLJBuKuypxagsXvi43VEKDgs1NUufbEY5E7QHeJ",
  "key27": "U7MAi8dabmSXcZFyEE9AmBoYgeuijujx6HpkeZjmSsaZ4cEdJLPVWrsgyGop96wfHhm93NqW9bzkaZAYVDTE3EZ",
  "key28": "EC92ADa4TDWgs8rpxC3ZNSxKTL3jgh3QDt8zm3KNhLFHHmbroBbXNaybQutPQDwBFxUqGNJyabPC1B88NXK2gDq",
  "key29": "jLArFCKVgH1ZskR4VQifRd6iZFyyQZEXXoYwko7MYsHEqH1FBny7teitC6yUYtJ9h5YyDx7myixs8b2ULbocYsT",
  "key30": "2rpbL6sBsapR6GWnh16LY1UJwoQUoJk899bzsGkfwYE2BHnoM38BmUxpakfxy1tBX4FoeFRM6YSSNvnPz5cVdwas",
  "key31": "2GUGzqKUynY8b6EkK3Y8R1KVau5ck8oU1trnaFugnbVcK6RQjSZE8kywKGQAyTK8qeTehEDXk7m9VzhWfxa5JiAe",
  "key32": "gbo58vayB8jstYcQGevJ2uTrKx22E2TzcmfjT3iSf8VDGSqg8ZyHQ9nkp4Hx8nPRmJULmgdCsY8UN5v6CRKAUu6",
  "key33": "58QMZaorV9U6qKzCSMAvpUVRF23d9UBfKohoHE3N7ApGnoCCMgC1M4oc63jpZaHvTELJzZ86Aoou2RvXdhT6t83i",
  "key34": "qc1uZUAjcJkmSxoRBd5V1qsRsc6zBdYnUnRXNEym14AYVcnxjdiseB6MZjTqdLCc73yzek8jADSz23oSRc9c9Q2",
  "key35": "4K9M2yshGpNL2Bye14hDuAVfYu6bzeW3Ht3pd9jrmzYiD8451a1rqwpAJS6BWb7HxbipErTsVzVnopCJgWRT5Y1V",
  "key36": "UBpz4hdCkaEBa8CxAWhqspa43p33PTYiDtSUqNNSfDhSdsDXVBJ2XSFQhg95hqMWUDrue3Ta2DWo9FPJ7CwTrxR",
  "key37": "22u7fUqPKHsZRJyzZwdXpVtYCfxxjDmnrh2ZegYG9K8thSUu4PKajXv7Bx5BbPoTwZM3LnotdFgSjh3gyu51Q4Dk",
  "key38": "6179h4taJvMNZd7SC7hoChTXyzy3MS6AYQYBv7j6NrzzYED6ar1EotM4Y3Ga6GXJjfUAP4DEPamAJ4SpVJps7fF4",
  "key39": "3mCcmrtx8uyjrrpPQsVMYNHd8xBofZQ5BvETMyFszAb7i9B1UGbvKGSroEtVfR6Q8UhvfK78XD9Y1kz4JGfg2wNK",
  "key40": "2PKWFAwnhm5TzwMh63tghhJWMthd87AKthtNcMdCJtShsWSyYeJwFCbHwtR7dE2UFCrQq2pqNAcDMkuDNZ7fDP4H",
  "key41": "3e13p26zfekw8yHu4arCLX5hKPYn5cYbENtBRjYjPqTPvHBaUDHNKkKtyCcYUMyXgWwh878RT7YwadE822bFWsSP",
  "key42": "4RJ5tjYcMak3T5YkfBDSZmpUQWy3TqMMsRhpCrtkP95ShMzW48mh1UHij3rV9To8cpap87R6Gwnvdd4HVKcoF1BW",
  "key43": "3ThxaZMFaTFpNwHLnRapLBQHJZoFUeCFmDoeiyuSpktjosRz5SHyvbzAxCvNtMkYu6MpWrYmkbUseK7wKhWz6S5L"
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
