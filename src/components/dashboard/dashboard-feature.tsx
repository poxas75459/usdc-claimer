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
    "5U8yfYBE4Wh5CQibazGmFPPuyDnm7HQWWMZpFXmftzsFn2UA7W6Hn6DGe5hcYBF7F2Qs5RMiK3WdKypNZZxQsfLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ixMY7nHy3UTFzHQK12SxUZkYsUH3ZzHgF7mFz867hws3usYvZ1DyHFNiW78hTY3F8CYP8XH3ebN7AtXm7dZi4C",
  "key1": "4RrERPMNuQFeeNcUKxuGJgFHJYkxZPRVq7hqWvDWUZoqk9P89cWhuDPn7FhP65sqqfSdzSitzeeQd2o9gyLT2g2k",
  "key2": "2cBJjUWxU784ninQaj3CwnoesiWSDPgQ2FMBn5zr7onqnBxvyBj3tBKLDPsp2VT1RxhiLj97U7bKKtpTBi88XgF1",
  "key3": "2NDF1S23UkdqRyBuAVw1eRzrx14vvvL4TXjKreM17Zn5b9QdDnxEN184sZ9J4JpSzUzHPSsmHPGLLPym9vcjkuvk",
  "key4": "4PBJCFJCA8ifqKwCiPo1k7KFkraBz6NhF4Y7AKLQAgKUfuLWtT6rnMyZccKQWhv3PidLosTKSUPDVu7p9dm7dQL3",
  "key5": "2thMz7LiFvXPri9TyDM3WPALmQFWPHNV6knX9muPJMmKoUoS2b5Y2kjJQWw3um8uwTj4dtc86MsZcvo8fKSGwZRT",
  "key6": "4tktW7dTVYV8i4daKRbCf4y7Bmqw3BpCTw9X5ox5TmTPgsiLY5GqgotneMoLtJP3x6Mvn6ZZ8RWtCXeSeUcMsg5N",
  "key7": "3e5xoCCzgyVKUQZCo6Lke4LSZR3cFYEBMW1jHdF1KoWxQyaYGWwVyuAQiYgvj5PjXkACXLHzXXjDKsogGMTqdj7e",
  "key8": "4XEsas9s6rEh9CPLRVUkDyhTd4uDCSFEDxiHRmbfaob3za9uVqDyzsxuPm5MCsjJvzmtecQPb7XERn2Lkmbr5gM7",
  "key9": "3AqhtgHnT4wLhhZH8Dsk6oKodE2wuhfqWs2G67fuDBQ2Z7uSLVT3N2LpeP6RtedenfZYyXawaqrW4ADB2kBFfqgr",
  "key10": "2MBXvXHk43hN21pSwEGxoTQ9buC4np3rLxKwnh8Ty5Uh3Yoaz9aFWMs8txHMGRkJcCbaxNsMbuCrP74Z3pGTHqbi",
  "key11": "2HMaUq2Av7egn3RvGDjrG88AfmqTsqxdo46PpLNDxz2RWpC6zviFnYY5jm9uLtfq2P16NqBDk8QpB7do8RpNRr75",
  "key12": "KPom7RuxhD8X9BQvaGvDrYa2YBexzZLu6PTcdzF9QMhEvFHX1cuuyL6De42oHhZNgTQiMCaWa9NydYcZ2JB4wqN",
  "key13": "2bbnx7WAQcbit4mvxVarpLhnKgsgKEVh5zRa2EprVdCpA8rorJfJdB4d3XR9HLNiFy6b6nZ8h4Dg7pjQfatFuyNj",
  "key14": "4xZVcEwGoe4PsgPK733pfd8Wb3FgJ5jFmo92H1MpfhQv4bDaTMnmfS5BJfGcsdCY4eu14SxByXVEwcfcRz1MTQ7t",
  "key15": "3ZAaL8eK4x5DToSo9GQhxk91GwApUMhcrQMy69EHAZ2fEm59UPbogGbhtbhwGHFgD6eEFvnDkHcc4Mzabx3cUebZ",
  "key16": "2bRqFyNdp5vy7zHAYFysxY7V9Afc6fGYkdshDhcx6N5HBgTYGFygVU768WvRjGStZew77yTTmWEYuDXQLKxi2YWm",
  "key17": "5qJuzS3V3NGQYQx3JQmQ1s4WeLyz7yaB241kvYn1WN8NsuMudzdwJrjXgUR2KCywNXEAPtqWkgsNfcWV4dTRWUSm",
  "key18": "4tcbQKoLZdQzufCWLYNRPZNu8Beein5ipWMc9mqR51hTyDpetx57XcrDqTv2NUVooBYeUhkKSc5rRwC5sG6BQS2u",
  "key19": "3cLYdJqcQLahkJEz4BqLQznCgftzBTxK4QMM2ssbaGsicxS298htCE5ZrshrVgMwbnuXbd4pAwezFqrFnsSRDruc",
  "key20": "SgxgdPa7AyG76Yw1FNjJDTAmffcFuJfiBfCCdEw3m53tYEcARatGx31wJePvqS4iXD1JQ4TXsGvp2bLr4LWy4vu",
  "key21": "3GRKGNEPGCpnwzr1ANpZhwha62XX7z7re797TLJ87pnmTuYWcnPDHDUrJtyq8WuknqDSYYtQyDVdy3zkBXSKkSBb",
  "key22": "2mB7Z8uavhqrXwicdYUWjMLC5UAeXYZHWiEmxwR6kLeCpUnv21KrSNtmXFkKk3e5GqPZjzAMHZqxEhCsuPMLswQf",
  "key23": "4mhUKYCYeLVnsQqgJc5ysrZrW8FwYXFxw4RQ5QM1gLHikiUgFzys1MsLSaamHkNV4dVRjr9G2H6MEGUC2i2BaiyR",
  "key24": "2FYYMc8v7hoFfhH6z3iWzdzFBxzv3BHD2MBzGA8uDF1N2irLstPS5BEGjCtjYzYEGwECjZ4F7TqBKBFqsQjuLqMb",
  "key25": "4ZuAuEmh4wtVMhqoN7M24BE3MdwRM87uv38uuJijfXyRwFLNLQA4BHnyGNJbg8p7zQ6nneBkE8T19QKBYBJ5hd2i",
  "key26": "4g1xgMH2yK72kfp4rT9zNis685fYueptpa8GRrrdMKeeyd3eZNfbYoRGdYAs6wf6Zg6sotUiC4RuDPij7jisGvbK",
  "key27": "5d5ckWaRWqXtvmv9huX7TsoTBQreGTR4oNVxcb41FK3SxiimzHXv8rmzt7w9Ap7WxFyyYKLN77bvYrrqHznx9XWX",
  "key28": "2xZrsDLjB4L93fBh5DDGrnzqmdXVgUyaqMG9xdBvmKRVaoQqd3m1mrpXt8tGPD4AQCK7UkUuetAR7n4NAFsrPqUa",
  "key29": "585jLQvby5APZEcbV7DsyScFtTdBAK7LNTCX1yo27aG66zc3xGdNwRzX6hZ6wLf4nRZDbfw6m5jF2bkddJVsUCX4",
  "key30": "29oHUYNQEHrwhdQGtJUZ6zLRQbLdVqypsPNsrGQusUkBS4YPgmjfGf2ZfwM6fsepycefiAkf8EkJBB3FjAnfDRSx",
  "key31": "hRPLwNR3fuUoohDiRWPagZyWdzfut9tK248cqhdjAvNYiB9WsqpvjrcRebxfTTUDJes5bjkCtKasGDGhx7NMXuf",
  "key32": "5TEN1dtsrNfHGZWZ6yUBvViSxGAqZFZYEufvN9ERCncDzZf6RS5xkieg85og5oHAMqD2HDjEscbBj2yq3hqYEa8W",
  "key33": "5R8m5xcpuGSC4PqnmysxV3SMA9WZcdZfzv1VM49dzBNEiauZwHDWKTt3FC5zjPNZGVQwKfu3GLpBfxTPUv8DSwpc",
  "key34": "3P551JaKKPjbxKs3HaNsXQnjKsNYTsCswoGbCbJV81jsjrgoYiiu8MsQ2NQ2vTLaTrCS5ssUHca5KM4DuGm5pGDV",
  "key35": "5Mf1ajt69ebTRD7CEei3UKaTDh2kvdKGNrRup9nU4wVQ9SsWg1c2BRPMqoBCdZNEfBtQJQqt2PwuHHG3SEuZQeRU",
  "key36": "5ycJenYLjFjvsN3Fo368XmkxcRDe9SUpo53AQhb3UCHAixzZXv9UT62LQ2ghAjDpyJXyWZqZK48qkoEX9pprpVjA",
  "key37": "ocUSiVurCa579wmbydWs2Et7Jsw6mr5i2dKn3782E47Uae6fgxQh7ShojF5GY4LEAS3hnCZ1s7ygCXmSgRd48tv",
  "key38": "5ENVmAXMjaNZTsv19X9wUZHneW4ycVyJY4LvEzgjoarU3zJhH8GNoz8sp4GZXCiKrEVBnr7HzgQeafUYyim43FCP",
  "key39": "2GFUA3Gb72ZuqR7tJWtcECexffRiHc24vmcJcuvb4bDyZ2Xu5YsvDHD3fpzeTJjZPj6adMcm4Y6efB4edpWgyvk",
  "key40": "5onEKUYAaKK65yNxg5u33ZV1KwoCGVb4CucQ8AcbQn2UmK42JhiXYPyCAAa974XnmjYXN9VNacU9V6FPQ2nCvMbF",
  "key41": "5UTDVjL1k1yhKDG97pYr6DFhZgVs2aN4V9yTFwfb1NrAtmqW9B9qwdTQrGmGEDtn7VV81LToUt1Wj9YZ2YyQxZMw",
  "key42": "2v7u7ocMVZdCwFJhguxyjc3N72VqrwtBSQCmJtLJr25rSGnkzCaAYDZLcZEyScLLkcTpuH8RAYuvNfGbJaTBw87L",
  "key43": "3ajdjrXzDaa537znGvfERJ7N4X9zM7RfGY7LFsvz9p3ZbAM5zh1tj3dpo8otPmCKq54vDjYUQAzRGwCcKpUYHsjL",
  "key44": "5TJs48qQ3jWjohw7TQTYJGTtG4h7HP8Y88Yz1cdDzSt6GvgyjMGaG71ekb9GbgpTSn42rY5REBk2He9TZbpq7m3N",
  "key45": "3eT9grnrDntX1Uc99mtEEfYC8nz9GGHuoFDshq2dmzGS3S91cZcLyjcKaLMjqwmcpTA3RFEeGjBN4EH9VwUGpYWD",
  "key46": "XcT5mZCd1L81dewF1jJu1Y1D9pt1gpAyUsk3HJca6QrNC2jQPR2sScS2sKRQkv3gAqVakxsNxUN8dhmz8BzAo9H",
  "key47": "2LpEqWm47Agy8hbaHNUAu23J4ddZ9UX9onWyfpKZNggy68LoeDKs2no5M9FacmuExPNnmtfbrvmtLyTZZyzqK91b"
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
