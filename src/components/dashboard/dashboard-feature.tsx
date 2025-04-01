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
    "594R2fBZ49idoukPubyFvDXptQEbF89jJ4ytXFfUwpne5h61qAtRwSy2pe9iTNxQYkhoP1yM5KXQ9Q8Bn3PyomSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRbQ1gcDaGQmwkoDUec2pVVsqKV94tUDQ7LCZUZ2PP4BrJ3HLvUGMHF4LffSFHzsMTPGe8d5grw1x4r6jdmFAfh",
  "key1": "5iU8K9DWz3Wwz31PrjpUQsgHfXY9fX7uWpTHunvkwBEk8jcRVMue7oVLoQYGpDKhaT9Ty3KGuwnGswe1Exbx6mSh",
  "key2": "2KYWb1U3F8fPZbMTBqWc9sXmeAoNRSnU83nbsp5TzzV55XDuJLHGregExXqpRWYTGPDaGL1ReE9my1D31acHGMnx",
  "key3": "3FnWKriF5xuf35Ef5cRkiMJkNGtWirNdbZ8Hv4iZ88HDRPrKE53513nfN4DJVfYSp9oA2dzwyB4uG5PdFVPWq5ty",
  "key4": "3THgNEHhSv9LmLyWbR8WAFa7DcigimxLetDnUek1PFooL1HiaeMJxtYS96SjBq3ixR1LC8KA5vh9RhnwW4QDXLmR",
  "key5": "bUgxEEikkmxpbeKD5edbwzeVaciBSTsJHRd83Zebmm6dqnWW27jbHwcNj4Ld5n7XiisFt6vUaEJb2AoGdZeE5da",
  "key6": "4DpKQBbspX9Zh7CtUioS1ATYuki74TxSgHHqjokHE3Xw8jmCYcaxgkKqgPgBpyNctC9XmjTCMUuKHCn4YMtBvbXW",
  "key7": "5L8BKqSATCmSHECm9K2APwmL3ss6e3Bvm1UfnqEFpdYw4v19zG8oUULdDspkc7H8f5W1sCaHSw4e9RS9LtkvW37f",
  "key8": "2UEaJfbgwVy971kvJQhkrUQf1ZmUpdxwKNY2Aw1eSUM4KkBtAQpDmg89wANJKmAxRkhcPYa2JiZ567fH5ZH4aX5K",
  "key9": "3MCF7BU4fn9TVhuBkKXpgjq3xy3cKYkQmQFaHVi58bNN3Gxh3a6eGTF5WJy7yUR55VauRfw8eHcnKfVgx4xfUqrx",
  "key10": "3ehPQEQZMMfpY6hiS9F3BX1TmgkjiyvShPLnD8BigoWbqA3YK7AcLUtYjK94FLX28QwwjRkeJzrryjiUkhe57JFv",
  "key11": "3unFaDV29WVbPbWPQxvFieVkdSXjWxKrsJ5EJagjEwuo4yELH2TSp94zrTLWeEgEixYGWgb2Qm9273kadMqx3gR2",
  "key12": "3RULvVPou7EPzVfoSdRcjPzjh6rrmcusmrTvZ41PkViXbJpEGjwbrQeBc2KoHSchmdVdBtLjcMhYBg335hrueWbx",
  "key13": "2pPyeDbm7zFzZ1Bu5ckgkdkG3QgHDKm1srRkJvNsQe96hSNeibcZSMVwRbbPpaGYyoY2Jechk3xUgFtY61vhSSdC",
  "key14": "629ARtVbqKzXmFY5DdHN1B4tu6eNXp4uA51XY6GYepyY7o9b7R3Pex7c3J99AB1P1rG5oy14xgJqH5Qq6ydLayGV",
  "key15": "3se8HdNHSvSaytVWfjcPdefSNxt8dSkYDsG7EvzXfvsLzZpn5mY2TbhzkVo7dFEbMoRMdbwWE4aMWDsPpruarsCG",
  "key16": "227MZwtSaiTTJWEXxT5JSp4knoQHnB7MUENfD9BCWNB8H54CCFtu71Kh7PtYdysLxy8BqJNjBTZfggSX4GLw65F7",
  "key17": "4Y1J8gx4uxCri3ckSoP6Vxqt25A8w4Tm76pbFR7MHCiq3wfPKtdbxmxHh6rwdxdAZMsb1Dd8Wk97udcccedWLbkU",
  "key18": "4yMRrwUpF7KXQuP2BdQa9YNmxRbBzs7QyZ1HJW9YWoXp5PZkFsKnvGmrAhqKnAh4gTaryCAJpuyWkUE1wGL6rS59",
  "key19": "26BJriPELMVsqeCHNGZ3ASvSzLRLQgwo5MAPutmbx7ZpkUg6iVEzonwBCSdZCXJWBbBSF6zXpXNZwKh2sJLLG72a",
  "key20": "GF7SzW3ATwSuk4VLAZ2rqg4JTQWZTZuETYkfnZDEAJQ6S1HQfFyfMSULEt3m141LiHNPHSFj1J1KPwhxfXXMFt3",
  "key21": "3g5SvJAnuqTbhCJ6WDMxfUeGEGc7XPFqNG7gB5n7dsNwZMBU87aXvCxpWY9hHNLW7sYCr4TfdrprQJpNYmm1P15w",
  "key22": "4Wyv7ERd2jM7vnADrtFZKHuEtXtEvbfGeEoHm2tsaq7J2adXNd6HvDJTqkR81yjHYTbPoyM4t8j8e3fA48SYkvC8",
  "key23": "3zKw8VJpPuBB6qFdKtgqeGBpBhBfRd8z3VVpBX22uH8p9jXiFuYtZCdZohYEFFWzHuhtL3BvQ7aCi3Lw9HySutLc",
  "key24": "42YqRJViyZ9YPZah6niacQy1GxGo2xeG6NndSPUUykXb7Vv5Z2GsMvTGnSz5Dojya9YgShG7pJYUGjLCWbuTSTBz",
  "key25": "4wjRjUqXMkyk1HyzY2SgrBxvvZ7F4inNrq4VvGkXQ3TRVUmHwndh3NPKGe5n2caEtDhBxoGN2FoeG8soLBEeBGQR",
  "key26": "3tjHbfvMsawqQk2UpTsKDJ6yH7S2tNDG8gcz34dsuzZ7rbqTqBtmZxfN1MJ5VUDf4cUPF6RQuLF1iR8MdvRBhPSm",
  "key27": "5ak81rVYaFv3X9r6BSffvQ5xrCuH6LtPQKvuJgpxcQKep6toEMZHmd4CwfvfN4uuoKVPzt3Kp7QiSqYq9KfcyiVE",
  "key28": "2r8SmC3JFn22z4n3PKfwUH2fqk45fNBANLEGbsQrjSBVqtM4QJCXZL8JeSRrAGsTKaJ16nqxGQ5KEKth7ufKcKMF",
  "key29": "5Cu8bgk2RdHGfT67mnnDpuNzNFiPY5oTHQNCZQZEe7Wrwoe1uqUAHEjN2m3oY2YX9DSD6ZXyTFmvgppFWobnRBTt",
  "key30": "gEabLwBuUEzJeN9wqkaT4tcy1aqxAVnosXJhLrucuXLGetUepjjVAPtznqWM92bCJhji3ATfKcFRdKrTb5CDeN5",
  "key31": "2dWjLNceNGgVJxN1yd3SY7RT4aVa6vyzxnhcs8zCp8WeRrQEztVyPgpKJTTRbsi9iwqA12PYGnUf3S3dNdSn5zWr",
  "key32": "3k3EF4T8gyVeiAnv6ggBgrxcVTH7apCBeXxEbbNwVJwCJF5EAp1LaBCpUutHx8KG6ZcJTmGBJkmRvBqS8h6P92x6",
  "key33": "g6jB3ZM2fQqeidk1sejMCMHqKoHPbJ1mBmFihk9JweY3P8K4PkvdhDgqLy6JN8tvB1XWrbFrQof1C585bdw6htH",
  "key34": "4zf4tCQzPGv4ePBoQkN1MyuP69gi5UYE6EW82rPemhEM9rtznRq7Jjpn57fyRDd6eXBPWT5RLYwnTz3fT5CE9PnA",
  "key35": "3Z6Vbgyppbh5WS87VS2Y5vjBpSVhbPmnuy4jnx6U6ZQpJb2DzJTgvo6pDjQEszYokZ4vh6RepjVbbx3xnFg7BFUP",
  "key36": "66R5X6FdF6FnUmBcdXAjM99pSJ82KecshS8HRUTJ3EorFi8nsGKZRMXYTgH3eEta1YSqr1cM3ex6ZyjwNLFvE8Qh",
  "key37": "5erf3oVs3cPLDLxbaSCkAtzx4FvTtTkCMEZ1EFnReKHh8ZRgnTDyVpVFwSPixskCV5MDg18ZCeZziRMHS4EnPCjB",
  "key38": "2vauDbCRFEnhuLhtXdkrSdAQ8bQQVTwQDpxAVsEbm3arFgwLqqxWaZkYbyCaLHaybqKheb3G9nXdcLSq2PXr3qBo",
  "key39": "2Z5ELp8ai79fuSpzZphrkdJwpPhWDz7Rpm3yAcZYowD3kMiMEjj1wFfbwHk9biuifdWFCqMNBqvkdRqcQrMuHKPY",
  "key40": "1QfdRs12T6K1hPibrjxA9pxdK3cu9pJeKXgWSLALzg9g9eHAUi1dCTKVpXt1NZQSUdDNYTUhCB1e5vYGZpAFZBn",
  "key41": "3iBcuPYrW5irTA8zc2sfVwWTj15bm3mzye7NbVeWwVpTmQM54gEv2wjvxJCaUE3m8hPKNi4v2sKLXg4fie6pCMYx"
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
