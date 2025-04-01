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
    "2zDT8mvo7dRXQfNsnnWbVERAWugNegbyCCjjskGS71vkwpeZ3Pn8CheqL7jopajnKr6MTMD3MKoWDbEvuJrJCUHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NzyZD4VwFn2DAkh31hzw8VDHpUALT6ffoK3DErvWsSkFGqGzmbthDJV1iCgtvMwvfK52VFDb2cLuFUms8tNibcm",
  "key1": "GTsfu2D7REeKF67NRwML2SLi3KEYDHKZFothjZno5ELu7DxSj4qYpAyNkAC8VgwtAXEBR2sJebbdHH1f7nnvZeX",
  "key2": "58BzB46Zm5RTzvcG7iFpPVb59VfbAUSFpdCVwKoq8Hmfuaf3yLuohKtscPnXGwj9hrPQ7eBaCJRGrJkXYgQVbGeN",
  "key3": "4Q2wJmP8UuQqXatjTuw2ZfVMnAhJsjAnDHc7pSHKHczW4rdtpsZgcekpShdZpWwf8F3ak4DFdcTUC6DgJ8zZ7qyJ",
  "key4": "2FRkGFLrQGYW5JMpQ64KZx1iQf8yCJGDazSGpgbviu9PjgZiura6nrGkgHaKJmroYkqEfv4ZdPQQjTUsGRd8AtYt",
  "key5": "36pVzX7dhZY1Q8oR4sWXXKwBFAEBxquM2xrRntU3nLEm929c3NWkEGuEPASYE5vdsEvGTsxfnvAf1ppRK4pX7JQx",
  "key6": "2ZgKBwabpMYGxWAPDqKcFtka1waqbD2DCCq3VAMh5cesyBmrZLp9yjJmLCUPxkijJGUqUMJ5PvxhULsoDP7CFi2i",
  "key7": "4Ycw3RRSj68fyACQfak6SWeVmEmC9VGmR7MtCC4oJ6MkhDisHPBMLE1u1MKecnCHtoJrfsgg74qEMGC17mKVNJCC",
  "key8": "3RgAJv1SmHU94Wqq24pn4Z37iywMraiDMrDh84GLRvA8ykf1EHmhvFaL3drM7t1EGttT8FpQgeVn2zfWtH5TbBBD",
  "key9": "2vmeM2jL76CtacSGTrRShNgWTQeGKK5h59rjYCJhASZYANLwwASbwroYoacNrLpNkFeBe2hUphAtroHQJX3UHgq5",
  "key10": "4pWsxsLisW2q3RfCmVu6iZ7gYudBzQMf1uysKwPkKWJCDwxsuiZxxyp145KiqrzCX3cnDWMUHbVEmZYrJn9Zc8Vx",
  "key11": "3DtqVg3tJ7X1eg5F9SFRpNgTXj5pMv6n9PMaDWcAUwfTF11VWv4HjkFtV5maU7PHnKyb6RqNUerWomfyL6hFiBkL",
  "key12": "B6q2mPcEvpp2zyf3jtXc9NnJ3fuPntYHwEnHygckxg5D9osSJg1HM14VjWWbukVWuep7PnD6K9bAb5SJzxyUnNf",
  "key13": "W3uKgU4yBBUA8Rdf26tRty32RcEzRmqkG5jHGn3bxvccDf6pJwXy5Uf6Gwy5cxhweDywRvyJZ6zQ7E2y4S2PYLv",
  "key14": "36VBxz4inKRVFr2DC9aVBL5TRuHFXKLQpYDodXZHqmuM1MjP6UrLz6qDpChviP2uhgs5n4oLJWouR2JngjfQBxfM",
  "key15": "3PAeYKs8TMwuxH9Z9HAEgKaP4y5ARmQnNjVNyQz33fSq8g6dWacHceY7urLaPztJStzph8UngDRQs5nuiugeLpbU",
  "key16": "5GUpJdnyoVJEUwGeAGZzFGmcbD8NEo11ntg9JKwmJNKxnTCKrZdA5bo5FEU2JZZtnSB4MXKQho17EzUVTy1vmRNq",
  "key17": "5zToE4TNEh9W6JuSLwYVX6HabBEbmnMPFJ4Ndh6oowRmHVwW9UJxJcfZVxCpSr4o8w257gsVUNNG8Lj7MCeVHZ4D",
  "key18": "3hWixiwuU58tbZnaWBS3mzMsepxpN2WQZf4GvUTxQiSpwWEL496S2iggRiarxRRavtHcZ6FnJ6okTZKt3JxnuuSz",
  "key19": "1q2X2JmX1as7amFn9qtPDFuaNbgrmRLmsP4Kd1JpeRtd12oFJwvoYJm6rCGkead1S7b5t4mq2PAQ8gGpTDZQu3T",
  "key20": "4S6AJ7z3is61b1pxRDy8UT6rKsjuw1n8Rv6Qzqy7dAsYjvWXk22RU2Hf2zZDkvhF5RxmLJSqv7Q71FvfNcdEr7cu",
  "key21": "3np393LYCpd1WMeEB3WpYor7niGWvV5bGWtJSE4yXnWCsdXw1i7fB9HGJZE7TJLBh8hBxrU5AKE4cwxDEtAADnhc",
  "key22": "5xGz7WDBdec29ezMpKRhjbD3Uci2ftHzLLsMe5bq5qMpyLDLbYXdamL7b5kvjyoDR2EV29jMkuxhGWdRY5DFgqMH",
  "key23": "4Zgxr5HPHYeWTRWxMYFRWPzqUVQd5rsrz1XF1oSiGeqV3Gzj6xnLtb2KhEPCtp7ykoCwoR752RUAQaDZXqa9A6dD",
  "key24": "2KgRLyJSjpgvGQnFJ2np47a5mamZF7REfiYyN4pwsMrpzteTyf8pL9Rjo3wKmm2n34TjSMpo9DtNK9kVtW76C5Y",
  "key25": "4QaQDyLguVcxyeeJBLEeJwoxG4eY4m3RMmUEZbKmKDBGitCcx4fRXL9tb6hQv8cchRktXzPjAiZmqsQGZFL2vHht"
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
