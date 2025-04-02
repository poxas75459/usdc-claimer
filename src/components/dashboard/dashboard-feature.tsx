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
    "pfhNnjuwhqx5U8JCQwYqwjVtxPxAiGdcG8VthCTWgWAhZb1rZgWTQEgk2uFE8VhiB68vFibigp6qx7DXyGvrkHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1PTADsGG3SobUomDdybUyo2dnDd48VEw4hsgmboYwk7jsu57U3aXaannB9nW8JnwCd65ir9krdEBDQi785ZHu6",
  "key1": "3nkTdBUsQ4T5ze3Qa5aBiAvGxJdfQyjfVFX2LmuSMCFxKXi7VMivT46FW9deZnJN8udojnfWHPvg5dyebMGNEbkU",
  "key2": "4NpWQEVbetmmsh4ex4qyhiaSdwEdLSDHSZ5g4bh1BWwfdK8kDh24WRPwYQMMkvj2Gg2HJaUDJRq3GpGMfbHRYdQB",
  "key3": "StnpgizKjz5xoyUjt57j3rMAKXRu4pdANKim1ixyMGus2KLExS3QiY7s9Mie8HyBfonfrUpnn7eHzEB8gtpRv47",
  "key4": "65eGQYVbrCui2NqSKM9ApYNQpFdy7jN8DXFzmjhWjtPaBBHdk3Lodqf1655H1pX5qpA6SN8xYdiDLM6ZXUqNFuXY",
  "key5": "3SNPyaa27vdNS6t6CUeo7Pb49oG4fugqgfS9s8NPWqFBKicjLzaURXnYvfVRF3quskrrKGsgTaafo2SDKThFwosy",
  "key6": "3n9Add3eZvgA9fVdifn5AcVxfR39MZ8dMSAQTJWAEi4HfcQSE1SKGFoPMNLZzbSwZb9dfMKw8BhLpiCHJ3w2b7NJ",
  "key7": "nhTn4mRdBMFUi5QzUi792Nkfx2QscDLf2MsbBjivntoishB2tgBuyRRGyBvjarCG9QVMjDYbuykC5iisNqTkeGW",
  "key8": "5f8Jcj7s3tfmqBfoam1Xjbsmoriai6XT9bkZR3wbG1YpE4XU85aBfTjQFgnSsFjV7GiPBDr3akUVDo4TRSahv39P",
  "key9": "3vm4E5g3VSkBvZcgCdDmQ27P6Kyt2mwEgczPxf3Q3uzjib2gc2b1odAwcDpxMc6sP7RqDXY8F39r4dNqx63oiEUE",
  "key10": "5NqQmmkBjxBrNhLGvswEjhXqnhuteChjUxovQJwiPut8eujYfymXKBxSP86LDkDfScXKAi6dPqMnozTTn8aD4tdH",
  "key11": "cRkLybYT1hEtHv5u1tHrhKTCNwwqYhREhhPyA78hr1MwCzJnZJmco75RWDxFRVuR5GTzC5N1o2Ckn1f1fSTujCT",
  "key12": "AUFbwcH5f282UCLbppM35xCJL5TpjhJVuupVJc7MpKCBPBKo4mxqRwxeuUXWyUbwtjit2dvn4ngvqrD4N4QCC5r",
  "key13": "4TAZySjA25HDNjxjbapEscasharGVmpYY8oyp4C1it7nxRRAPUNajb28t5qpnAJyhnDpTZNfpUtEDGHH725r3b1r",
  "key14": "5HpfwAQmfava6FMVJFu7PNnqfm3fBssvDJC4MPARU5FubuLXGx1pGdM7tKSmTGhPmqSbm1eZy17FBATUMnstmdaz",
  "key15": "2Wr2GsDgF1kmu1pichuiN7Eg1FLoELuhRN4qEefUHV23g1hvPF2z99hp8oGJv6XHP32fpEV9HZeFpaBBiKfV5S4N",
  "key16": "2km8EoHim2em44LyexGcvPtDYuLp8ncrqjceZxF6VLQC5NgowHeC7L4fF8qgbSuUqmLSGjxFgxGpyPtDxs9aH6zX",
  "key17": "2KVHEMuY2y1HgPtJMtairj77GpSP43NGouoRG4uREeHJS1kASsAFNehA9j3fJPAmstiuTkEu1KLXtECJWBaUU1oa",
  "key18": "2hxHXrCQUhhKVKdxRoTRumhCa1LQVdmX3vvQs13E7T7kQ8SVY25W5ChcC9UuSptAwrmyq5X5KCcZqdzRK7Taxahp",
  "key19": "5GTquUieEkAwTZofZcxvvPoJhyu1he3nJUJdHh2gdDRrBVZZQEnJdyDKgDEFmZCoAoZDhFFagP7SAgw1JwMMcK4D",
  "key20": "63tnTobTdeJ43AeSDmX6sNTWQcC2gKTpZtQKMVadpVACF4CzxAEHhUSBEB6d9RdnNFjKZsDkUtxicqm2oqi8cekb",
  "key21": "3uagoz1Vm5EnqmMPBe7zwGwx7HZXEEYs1L2gbMsnnFayyxEA5Jsd77x3tHwK8USMtBfm9ivGYsydPNPVyTYWYcsp",
  "key22": "4mfbBE51NFpHXZygMkH3a4CoFpHHBAdN62fV6nFGLH8PSpvcrBm8hkheFnajRVhJXRpgMj1dGEHxSszbLEJiEMUc",
  "key23": "3729AJgQFy5a6Wd3ZJJfVonbhQCVw3jAS4QHkMk6byHTqUAGKydFsYeVwiuxgkkSKvZKSCdv8kP9WkmRzYL2T6p2",
  "key24": "4JBsnAE64ShX2WhvAJxLzkSSnJ9oS1ucJttzxeMLpGVaDL7b1w9nw8h9nWJuEyNs9nJc8yN7Djv5Ht342UMKjSC",
  "key25": "tWXVQDy8GQzUgdwFoAUCWeKz5cGUCgR1VJnv8WvjRaA9TioAD6ECCF8oJK4EriPnMUYAMjacPFi9bxNwF5aYU2V",
  "key26": "4jKS3TBjY38Cvc5by2ZA5VZLDbkLhz83t4ekfFcU4iaL4idQYGxcsLSx7JVXiArxWDYWe4oouE4ies8CX5B3Egdy",
  "key27": "3GCjwuYQU7BGXvi7joRBVzYfV8PcmbBoBEDrFbH2g3obsK5DxduJaBRmKDDfvDWsc2sK3Kce45jModsccf7y3U4P",
  "key28": "4K8zJ4ZtjhFbjj265dGdgCHY3apm8YXRPDCQY8PNZbzLmsheQMW4mJsCYc97T42FKig5tuisqhFnoa3BckAmL58m",
  "key29": "3PsEaPQAvGJeJV4zSatJGQQ43xBuuUoNCR3T13pqxrBBtCtgvZr45b2xsekKWPenEj4pJEtRhTxsPZ2gHFf3BjVM",
  "key30": "5CNjU4561hnqTg7Eid4Gc5V7dqVtcVH5qWhnxVWtuaHX7j7X5z59WEbvgy4ah3U5sCE6HekffWTm2e6DKqkxBDkj",
  "key31": "3rqh5D83ZvpJ3Lqfxpmdk7HAjxqcNb6D6j5n9PZr3if9yYYENt8Mvd457haWAw7vrzjmbq5kQUbfJ945QDuzNxeZ",
  "key32": "319fo6en5dcmHD632toMWF6oNJtE7EFbAK7HJ9WXdDW3oLsAk3QCo4MjfrEZKHiSwfgGgSCduTHZazWjDDwKFdSS",
  "key33": "281SCYvefAQifPXh1rC55qesoP2vn6pPdsf2V69c8m9vcS29NvGo93Kx2E94XuUVRmRQ7WepycahTkMYbvDoGx1W"
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
