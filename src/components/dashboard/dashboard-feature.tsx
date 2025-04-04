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
    "4GE5TAsbLG8CGvoWUuvyhWqzmgauF3bUpxNRbnhBwKRt7J1qhvN6MnQyXV8rtGw8KqGZWKw1NW4GWoSEsPuJnLzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6DnaoaTLVR8SvaRiLXqKjdCdfsvwRuKUfUso4dZBFoG6RPv3ZY8bWysagX7WbWWZ89kBeEtc1KUqHbnmSnhxon",
  "key1": "2uoCGSfhZ1mxMEi6fgEEPR4uqDHVPuAqAEEizKLnSCS1SRt7vkThz3gRgzR1GLVK1nv4ZPTVT41ABcr1EWzYxw3b",
  "key2": "5srhRsdJcKTdFy9AmfLPAmwySUwaruRQcesZCAgFsLwPDETygoECqqWVU1ZZu6n1zYDU1b8Mj98deDEUnqT24xKV",
  "key3": "aKmSBZCwaAGLdT2fgzWQaDHx9NqSNTaEsNkJDMFwMQho1AktEW8BSd1iDNhjLrPByfYqqjqYBa6jzctvZ9hwjyy",
  "key4": "2hydQbKasKeLTHMLRFK4XUiG7Ku357qCbsQvdf5j8mdSgkoVGZCDfZzmLcgEvk9XZm68GT7waJ1Ait2Tw2urm4Lg",
  "key5": "44xxv55A4zwNUNF2eCgSvBgwvEz3CUaAGPnDr1pNJMyokuxxvqst4ZkxrKEDuzsDTGkaaRnc6sV3oRnstgyAc15c",
  "key6": "5XEBKwULDiRukkVtmDJPc5X9UuHEPhPbqW6hepQXAYpknKkWdi3CVoJ16gENuB99aa1tkhxFgT4V8fx3Am79dgLn",
  "key7": "2r5SbDY3Qbx8jnB66vov4pVvFvZiHKbvYKaBbCGvXGB8LUtbwvSBfZWUJXuJBCSghxAwBMf9ES5rW2ZsYn2Y51Ae",
  "key8": "3vmmDPwsGPH9VxXKjT3yiEGFvHVXpyxBAE6EzZzN58cbW8pbpi9h3bY7sn5sA8VXfrw5E8Vk7KStUfpiAJqLE6D7",
  "key9": "42Nj8DTeDscaF5qKLYpPTD6x8bG51Ldj8HZS94HxZkYYjt54YmUew7hNRLv7cMmiU7Gyqvyogiq7em8LccLw2QqS",
  "key10": "5GQWxytLFKNrYYYBHM3uYczsFadXkP3Zw55Uaewr6dsqDpwePhuFAfASYhbYa3h3Kj11gyqN3W79xAHikG9CXNau",
  "key11": "2NS7iA8EqexBPCu44b4sSwbzyFaUZt9J6hdcYHYAwEZU6nXkZiyxiwdobi5CEaaQQcJpvTU2eXFSVysPQGiz2tq5",
  "key12": "33cMbbssW1x1QzTnYye4UecL8E7hvLgvs73MSz7WYJwPy5UZSTaFM9Xv1P13vABCXaHHZ9se13cacAUqcZ7mBSZ4",
  "key13": "5zj6Y4jMdQpEGR4gs7mX17aQnspDwzhwkigLe3yT6LzYS4QftSsHqEtJNkE43ZjdzS3k7t9TKo9CMtKFFkJnKdHV",
  "key14": "4U1FyCgMtd5vGKLb3cn18DvcUpConGVGZnYhak2cTHMWejtduXw1QFNu5tKWCVXR69PdDQXA5mbG2nrYvBLUDW66",
  "key15": "2sn3PHydPQhfCPieJ4v7jptwLKXSU4N1QbVU9Z4yCQG16ZJdZ2LL3vd2uXW7jkHTuNEQ6LedbazNF8JCp389aKd2",
  "key16": "64SxutANChtqFXBTAbH54QFpC3KR52eDbs9r2WxJ5j9p4XKpDUJEUBtfD4CM4ahWAsKjvrCfEaZNct51FmEhuYwN",
  "key17": "4HwYTKwMBm2roTCoAyPqah8CD16k4fizW17Gz9f7jXaEge14JHFonj9ReFUyA6qtQQ5uQdcv9HWjpnQnGZHRxsug",
  "key18": "54TytuiKAHBodnEQbjefrzU1TX5iHm6ZANtahB6mm6P3B4ErHgSSFcc7Nhqpyy285Ei4PqnCkwuoWVwmJan2CiFE",
  "key19": "2k6Q9nsBVCQF5LLAuNNemNJqTtnS4tSFSrfaNVUcaB5DDBn17Y9BtxZaPc5MtyVnZLQoT2hKfzXpDSgVT8Yhj8vy",
  "key20": "4wimVQrja5H2v6aodL46pTrdQuRMcJUG8Bvw7JbHkxdhyAYMvyXj7tq8gNtgULKfDGnWbz3NapWLTNKJQ2kuZncN",
  "key21": "5DZgefDgM3Tu781LYKFRwQWTgL66f7kiFoMWN4ceZaXjFHA3cMmqSd1d5q2XtjbKupsXs2VB5XHXHssBk2WMdQQY",
  "key22": "5rLY4gWK58MFHAwum2e9hyg9NDvWmVypD7PwNMSgWfmJwDAWhZLQh8wvTybBwGfQ6DhnXJWqiUbHhCHdFb1nevWG",
  "key23": "2WyWYTpiLCAFdCfdqZP7UMrjqgM3SAsPqARCf8VuGx3Gp7EF8w5MdkSrXjPLRVc2q3FYXurtogAvyTGD4DAEq6zn",
  "key24": "4czS5Zf1FdDmYGcg3vYj7Za8A9q88hAz8kaKwzfuyDCv3imiQb5amwkTkZHm4zAhEHUM8J8ttGprCtGatAEWjjtL",
  "key25": "4pxW389fsxpjWwPUVazSNBYictS7tHJUHgpfp3viR5ZHUMAX2E65jZxQQCyerLktZzqSvthkRFoFNHycDsCZzS4t",
  "key26": "5NGfzkKPAFnvN3pqSMMva6otYHFFJmE7Wx4DgRoAgmGhHZqxpJonWVXyA9AuMkF2kXtVMMqUi3sdG5K7Rfy2H4gp",
  "key27": "5DTNTFYNnRKzaTJS8xnaDCkfp6JhRvUdEBdKH8fTwcFVdGS3L3qNXRhv13YRxdTyXnXhc1gsXd1awwbuSFj7QBAb",
  "key28": "3MGmM8wuDvr2eUnb2UwCSNCa8JmYkamWEs254zd6gWzu8MzsNud6dKNXvDXUjGdsH7M1vmN7XhNrx3Mn7DdvMDBc",
  "key29": "4nDuJ2cZgHDCnhryATqPrdjjniBSrXGUjDF6jcf9kRiciKBE9jdufVNMCFrmgAceX7s6puDyxKTiTfq28z7ZQagR",
  "key30": "51okpXAkxvL6wrhsdWdxshSLBxHrELU8CviYt5mJJChr3wzsJAQsDDbifE1P3mxvY1WeKRpp5wi3GEUWvLRzyRZT",
  "key31": "2pUzweZdr3ao5ZA1XoYLmEetpepLEhR8SaS9uonidnvQRyrW8iUXyf2ayiDCu3vEXXLSSXXcDUsmMNdEByYy2Ud9",
  "key32": "4S4qpfq6A7ZX5eiXGL4X5PmrHC3mLqDxzSSd5xeYJkEb29fwskXTEuSZmpdZjfB662oLmGw1qJwgYC7SBoCHCSQS",
  "key33": "4aiiWkk5Ut4GMyrfGBztCjJYXYi6E41A3d3z3rocaLK9AhsWZgVbSMCvNis4cvw6JsBkt2wRcdxGaSU9C2JLp2NE",
  "key34": "45q5XMaRLGrEgzMCJZcUgbCPRqy7xAH55obd8Ta7XYjJ4QXtCxfFzj3MyMzpxhQt9dRshZqSxJBxrAx2kye26oWX"
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
