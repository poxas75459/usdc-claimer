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
    "5jyrdKaNPX4JXVrhhgtsNxuP63rDeBGodcC2ZuusxTiJfkVvWBkCpsAURxGqa152jekkwe3Hedi63hkVePsmUrhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZVbAihn2FQiwk2nBk8ozndVG977WboZu5D87yBXSK2TrXui51m8b442kyH1zsbh2nr2rTJXC9VKgXPjy3dzmNq",
  "key1": "3gpB7bLMTXYNaSBTStbGbhhENG1qcrjSvJscrErMiDPqQTAcUuoHgx7JjGneL37gRTyTrR4xhsnp4Rss9i2J6ec5",
  "key2": "3ZV1FS4yS1rwFjFUR14LJQ6HVJsZrJWEgQgzn1CZZqKjoEhLAVbLxGCHhntjEsjPkoEbVGgSVbVqDTp67znKjdtk",
  "key3": "ckigxcxCbHoFb4vtPxWTp6pP4JwYpEgE1QfLb2R6jhMm3H5HEn2MwbqvfDSrBEQRJVwvbosHNPFvKuq3j9PrRQJ",
  "key4": "2PxWLJFm3pdXsztw8pPBnNWfLikoC5q67m85dmHAU3HvfuJA8371EZFBUGRtPPH7LwkwpxuvigjF4WNEzfLmTKm4",
  "key5": "22XjbDEEobVJwu1wFY9Sjs37DBWR5DufSASeWPJAKmy2Wmyi7Z3JqSezMsj93njan9apd1nnrBrDXC1xDVGGgnCh",
  "key6": "oRju9yZNZMGtnc6QFUYpdovZCpw8Ww8DD3mFguUTniF1qRT8EA1YvkXuE1ANnN2PPGTzG2bGnXHpnpN5aF84xaN",
  "key7": "58a9BbFG59X5gH153FRe4ubxfK91zqXRVJ5u4sQPwk92N6EZJcGREpBGMaKafxbhQbFtp3EcrtbdzAhgUSz3TuJY",
  "key8": "5JNJ446gjYDZSQnRxrFBtycUrYRw9qFqAXUJJoYez11mZE4ym54gR5qYUbZZRakKj4NnNABdyZQh3mHcva9aGi77",
  "key9": "4P3dDTXV1Zb5k2v9vWe1f2bhhsxitvtTJrPNKY7tEnKbXhA8YbsJ2Gk5AcgkndNXgwtexH6ePAfa7udLKFXrj5Mx",
  "key10": "3vhrP6eXrpBdynUT9pgNDpZw5BjYNCUZcs5RyfBqLsK67NPWQa6oxrbhGJ3FfZscW9DCGJVZtrh3ZFZe9jXJpoVa",
  "key11": "dsuqngobuYaXepMWD6SdGAAJp1N6HvucYxpiDCLhtDHLe99FdabhABzCBAjAGkaqVPzyGiFtYb1sq8Ax4WVLydx",
  "key12": "bUJSLY7EQCxYJsjcJuJpin92BPpvzqTsYZgomC2snHgdkumY4b7Ku2qJAuW5QVDjxtqkPzYGsCQxdcePAqLy9H6",
  "key13": "3seNeHaTzN8vHJ4aV61v5ZmGg1SJBeafypm8vWgDmfGdGJToMThgs96Er28MDenY81t8kFVx1wqEgAmNfTQKtCLp",
  "key14": "3a3HEBK5rzQk8i52akmsb1fjkucsukhtrs3U6eAieSVsWoKnjpDABJARVUuTGmQ7JpHorLsEr8YDZKLm61aVVeff",
  "key15": "5ge1YEovL8ZL3N2GTEN9DbVKk88wquKaAtUAy4ToENd9QiDgp8V1Xthxzoi3argxjKN6Ub6mGVogzRxKDr24C4gE",
  "key16": "34n9EqtjcM6Etz9RiZrdir6hHHVsH5zVRHiVMQGAFHkdbixUyX3usMt5GaaJWnmhGmRcdRWrMaCSmPFRG84gJgwd",
  "key17": "62ovH58KQhhi75NqgSwi4uuKuUjHNLC5xWmJUn7EP1BMv18V2vqu64Ghp4Lj3ExP2uMgBHEviB5PqrweskTvh2x4",
  "key18": "4yegb3KPqzevuhgpYTN5rXVjRHR8zt6roaHGQaNMJ8oFB1u9Mj9qMihpYWAKtea9rZCjGxH3JxgY6GwxD2uLboAi",
  "key19": "jXf6cyUVsMebvge832EeKxfzwgyNNiHH4AFwXy8DiM9t3umz2jKZBda75MizDq5XeMGb3NFxf7x4FMq9MUqfApZ",
  "key20": "352vw6YHxffiQLP6ZNKC1YTxio7h3fydxsRuWysABTxT9No1iXMjnXjfWYdSoFmjNU7kEfJ2mtfaNTQqJc11mhXZ",
  "key21": "2ALb2tUhagMF2Tk6QqpmFnnS7UiU61SF7sNC9CNqE9mXzDmNNfyAg7nzfehbdGMkvcBHwXRd3E2ufvAuMMTkneVJ",
  "key22": "3g1sHEduf24n54PycQWNQbGxgLbV1RfLEkYct9cMpn52KXLGnXAwLHu9yeAnKrWv5myW8XgYLYDTpwGf6AvnNwcw",
  "key23": "5vvzgJZohsU1htzBdQb4dgA3PmE5aGaeo9GKAKLFeskAu9oYLwrcmurRosewswBrf3P3WtnATkwYyU748QCZgmuL",
  "key24": "3BtCVrfP556TGuN1PvSU9UQL7A77BRSvg9V4GCpw5SVWsy5hByYerTUAGhBudsFPraVDk96ykNjMfjfC2Nknt5Qy",
  "key25": "3VKJCaC5xTHHYgTVoiJorzSeCPaBBZiuzXULyFAnmYjBxLsbHwvJbniNFxZFCKi2puthKxLxY8ZKUHS33fyYSND9",
  "key26": "3zNo1rYRTLJyBqfbQsrYuaVZAqhVHTadxiNp1BWWqV5JgTSBmiD5JLoQTqxJLDyNrZbPFEQsXFbgYfwnzFuSVScN",
  "key27": "4cQcDpRQhsEBCSrJku9M4oABgQCxUVyunL8iMqwmY5rQaCR9VEaa1LubgAZcqfGAPJ89BndM6pWqkXw8snoYQadH",
  "key28": "HehmnQu7tnQbPbaoV6mMoH2KhLLTBdoq5t2HTAfGdzLiNkWBuYuXzd37ZiqKdBCDg19zGzPuKbmaMXuLudD1jXd",
  "key29": "5F9Hv7jJh5jnLVGbjzCVSR3AwNmRa1m5n8QHjxMd2kZubao3RvXoq5316N87aWMrNsmqMDaCKbSQZ2eC8RJCPQaH",
  "key30": "2ybNnboJPEey5x7TyWrdRpEfvJGMayWeiifVbGWssosDY34kZ8xXNCd9nQ33MS3Q3cj5CsqUKBDn11aHBjrA6h3g",
  "key31": "22rJP823uc8VWm2TM2TE24EGa3bSzmFAzbmMFuTdWhm99qcCZ6z2xNMtZmsEFb5E2zXWmfshtmH23ymDhnhib6Ft",
  "key32": "5CzqttYuBxYQE5Cu5hJRGdKaUKma7VAU7AYvqtJkafxH6VY5PgbKULcqEcyUJ6crZ7nvioYCktThUFuomALKo2Wu",
  "key33": "63UGBo8TERKTqJpFyUrUTtk6bLXb1ffH2A8M283B1HACMzemNwj1wx6YurSPja6xcJjanVpaKzjosEN9K3b1UHrZ",
  "key34": "23yEKaVWiDWHnyo6wNJVtgJQ5Lr6jugVKzu6FPseN3HgHpcHrzm9Nc7sAMYxc1RmcZTGpkhy5mWjGpkT4WwgeGwM",
  "key35": "3PAZbWb8UhmWJ7AgrDM8nqkoDSTDXKNZk4NtTygR1DgragfSyENfUrDHgX9he2iB98NHhXvQypNe69R5eChnmGgh",
  "key36": "38CHKZidWB27nYAzL8DX8X58jpQL1TQKd3qvYBaRFGFYPK6vnEq4ugrfUVDwW6TQnEbQLiYjnFszoewKyEbfyS5F",
  "key37": "58ZbbCrNuoDgDtkjPNZTdAPFLuZuMM8ZxVPgfFNTJbRULE7X5PfBJiyUf15WroBwxMQYYrRdVScwcTok2f7oHecT",
  "key38": "5SYF5A1AcVZwZcrkC6wCcF1YngNqYrt4s1hJHoDsn2a31rkpWD65iRsvD2VpR8nJyd7p3omzy8hhxrUiJkCsgNH3",
  "key39": "2iAL7BiiudjVgrSBhvoB1rSsZ8X9P93hcFPXkHQgU6ym8ff9jsLLt8mcKPgf4XPGNUoZyhbYQJc3TgrzGzse9YpR",
  "key40": "f6Pvk4KYRyGgSGhGxCdwHzWJ98U6rnqgMMyCUe9rpFSpY7hQUECts47xryNTy8ResPm3urz9sxpqNUY9U5WC3V8",
  "key41": "2h9ZZcqSbiQGBMe9NCSxSg2Th8LrReW9fBGmZjTBmdcgR37gQtkKZTnqsvunAACuHwhFY2mxPc6aWGvP3pGFQE5f",
  "key42": "4nkfA8GZAsVQEoLS1nNpQgwcsS9gw2iUeuGbe1VWmd15yX12noTTxLQ586Eaifgi12CxB1pZu9fTtB3MJ5oqcqqY",
  "key43": "3mn4bjHSYRykRQP2cuvTL8zPLU3tXASexC5aPrXW7dBGQh9UQ1pTzVBXdQFARKEpEzQNVpu5PHLwAoHY6Bk4reLL",
  "key44": "49RHrJC7QZEjK72yDxrnkyhcWWbvbYmJmE8rUJu9zsYW9n9Q2Tz33hZnC1J8JEfk5uygU1LC3zs2LHP7CU64sDjb",
  "key45": "4DAdEGauEbn4wA24rqt7yeF4VLmTtvvUHXQTDeanCVVEkxQm9epSnW8Udo6FuXKQ3R6o1Bh4GrbFFiN45o9hSt4d",
  "key46": "TsoBdGptzVzpgjmWwA3QCPgJbD1kpVSPdxFgJezNwaMypT8qv7gYLat7QKvwkR3WzgsC6b8wW3fWW6YH9iH1eU2",
  "key47": "2g6ikLGiktMjWReZPu8p4G8qZjY3YwFbHE7KYDWyKi9gkGzeMTAUBAzq2mSDGmjHrFhkVqYrXp2QxMsGHvUhrDMi",
  "key48": "MdGaVf2HE5xrYCBkezJAfT77BhatjWFhWgg6kATWznzBJNuncydH8bDrz8RyST2GPHq3nRsTwrW77o2To48zVCp",
  "key49": "5L9Xi82evHqExyoxCar5HJiA75d2zB3k9kdcN4aUYBs6MyHVqEzYJJyMNgepi6shZQgjFPRADKsCrWmaXMQ7rQxs"
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
