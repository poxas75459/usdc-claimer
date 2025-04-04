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
    "Gu5iKk7e8AQwM9guocoU89YrijeoAbcaHZ8fL3o6UmoF5XHX9RRbWu4Q9pp7bd8UMEPCAWDvQTHuWUt59nzrdPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dQyrnrTALZbDXcdF3Lbsj24WwmcRFpAF5q63iLLHfEA9DMBpKPcC3hwi7Sbs3TDWcszpjc4vG1iBJS9uvUAKLRf",
  "key1": "45hhp2oaFgpEAmkrFN7hcCn5brxy8rkjVcCNGuDnUzzVX2SzWhy68sLuwhKPg91nnPXvoWcDhvwJ5be3tcJLiqFE",
  "key2": "5RSQGcoijELSpb3orTC5to3XQgfBFDqZVT3fRHtYgRY7Sdu9zqEFUtZPJJqkhuAU6V8AYpbi6KziFx3RN46Fn9Fp",
  "key3": "34D87fWDrDzNdxQZUJ4P8V9WSk3FAGvd7Kf4P7ERMzFGH6ozwY5VfEpLSsh7vArAf17wMokvHcGJDW8Zd9XmTAPG",
  "key4": "3L9r3zE6A4zkq7RTMb53qrjCFeLoq3YkD7en3anEPyH35JUoNoftitQXJjtPs6JpsWnjjbX7XAAEgu9Ba6GSMWBs",
  "key5": "4VxEZLA3RMCcDgbSb5KkAhXKav2SpTsyxa4NVXbGsNJKzPT3zPCgZt6Qav9ZuqutyhzwTKT19fqaFYyxM5UvByip",
  "key6": "Xksz9iz5pvG68H4bQzy3V6wCyRUK55kpAf9VHtVVcbCDvXxJEgTGbYRfUHGVQHc2dVku2mpenFnRgUT7zTNYzqs",
  "key7": "53M7eN6Rq7nNQCWYuC2k3QdFLSHUdRKqSokUbcpX6tCVaGyLFcYykstZB4TkYc8R4ZmjuxFmveuoTVjQV958hbH8",
  "key8": "4tyy9RQW25bQvRoKe291cuwFEvtqb8wgUdYHTS9ZWJzWRt7xAAnLWTFYk9Xuv26p9SN8ByCJVuDQFMvvHookT7u9",
  "key9": "iAE1QgUH1b9GfQSaykj1TiMbPkT4ncHBekSdKQfVyh5zKr9sGfsoXzsddqJBprDXoHFw1ebL8yknmiEpeZEkunr",
  "key10": "253fAr5ts7hk3qusJhMyPj4HW4zWnYx9MNr2vyusgZGzwt8YsHbKZa4ZgQt86ScjKvpM6GEnFpgcu8fnJU3Dyvyq",
  "key11": "xvRQT7Ut51vJPNaaaFmhvuAx7ai95Y5ZtTL3yhoPp9iCf1TToUxgw9R4Vq9BF3pckir5GQpBJruEXyiVU1uBQKK",
  "key12": "4ZxSY5gGsF6kzM5fvCEwzveksem53nohaouVpga98ZWcP8nnbkKodSkEJ4MQrFnHmF1ChBH648GpVL8XZfh5vtCf",
  "key13": "5no2eC1UeFevDmxYQEFAUYFSMdJe9JaRS3FRpMtaSH7hM7UbZZM32tLrSffvkLB8MdjmGTtvkrCzqXo7kdBBYfqc",
  "key14": "2fgHKTCZ6jwHYkjVZNe8ZsDR23xVV6Uye43m9c5VzaqFtwRRadjXfwRyBqxiNqwHJx9QpU8n7zpFn7we2tWhWRgA",
  "key15": "49Bzsa6KCgGqmJf4ntMsovKZMojT57GEpeR1SwZhc2yWPqs2mwYevMekzX1uTTA2hWMt293M9FHbJ1qSwt2SYJN2",
  "key16": "PnkLsrfmRbj8BEUTC3jJot9CB7dRJsQUsMwdsNm7tDiDvGpdZERSPysarm9G5Tm2JpFGC8gaXH7gyuvQbEGCeji",
  "key17": "4eDKddq88u7fyySVW47QxuPqUAHhiSyHT3pgFk73EYXBkhR3pq6Q63tYLB2fqLr84KDZyoBTLmX4indaoTqufcU5",
  "key18": "5sjxHh9KaM8vCj5oZAyPTtcV6eMhk1qzeVB4cDfgML95oSvR9kSEs1aRuiduuhaoEw4FiyQCpXg1dvycG8hUgEYG",
  "key19": "3zMe2WfaG9Hw64VBEvT9A4AdN4GtVfidpKrsAtUAfbF5gNrXDSSwTLdAXVW4Qpt3nsPAL514TZPru6RQxVHPsGkQ",
  "key20": "U4KC8mthVCqm8zNpVGcyGRymX3aV2XxfYaJc8ncPtRpRR1KEDZBHyfMZFfWadxgQeqdUCeVWoHAMqxUsV341n9Y",
  "key21": "ofX5gaHY1BDfPcrsvpT8iQELQ9JyyNT3vxL54xuaj4hj1TzNPCm7Xvoft7rJ3wWt9bXAjCxbripDR9UNVry3682",
  "key22": "5o626ajcesvevu2yYCqDV3qVA1zR5TUCuuJ856ETUWpNpV1QhkEhMqYbi1jxQHm9zBnmP2hWUbRnB2maFpqvUVHH",
  "key23": "2q4N91aZYMVGfAhHfT7tM9qVvBND2STxWFMzS6gNwJm3HYZyTcPZar6oabYYgtrDb5o7jzFH9bmRqYDR5nzi6RPE",
  "key24": "128Lgvj5Hp7WQJ69cLVced4vS9w8vMUZXbm3mWtg3dZf59jETgirQ5iGPghDBZzWeqcz278XhXrFkUKu4ND3uGgG",
  "key25": "3mqq2JtK6UbAUteqtWP3MsY8E3xrRRfp8PgFLQ7jcQ6FpP7yuR93pNYLagsYuLJvoG332HgG6qtLsEnSyhUioxnY",
  "key26": "3c5NzWVj9TCpQ8UwcTfoBLrJg18c1MxKs7yyaDLCh3DoH3B5SHdMxVmYDumAGhvLHaSBTqJqUjCpBfVmcu4DAxbc",
  "key27": "5CFDdEpR1rFMfQYeVPReBk5bDyNtwPgk21JoBRQiVmxWFouFMYifk9FbW8qJUb5kzScc7XWLtHwgPPto7n4yzs5r",
  "key28": "5qJ7PJmaE6tX7gCuLyfnQ7enHn4KNHp6zTpAPTovPPKHkkrWaLXWCVTnoVm34DYPzFHqcXGFpHivirXDeY85DXw6",
  "key29": "4T3ErsxWmCbH16UTcSukFmNymcYWjmzywzTcwWWQn8JGkC2zg4PPpMjUidqtF6MT2gT8NySmMi1BzxL9Gmtc4Fcj",
  "key30": "MkNbr6w9ry1gopsR7YsummZh2w2g2sLftREHqjkMK9X6AWK6HoV6fHGgcCZfAEQLqV4CjqVoWSVtpVzG8R59MBt",
  "key31": "MFDtvafMyxRkJJyf2pMo7MvheHKunTtKFgMGXr7NQ3XhQfzvM5bEpmhGuQYy7UjvzH5N54rAgvPGWgqmtyvnUaD",
  "key32": "2rU1oWTRkHYYDYARFhLLyPdp8VrLAUDVWK6CJR22NdvEppGAoDnnsAbfokR3c71vCaQkeXnZZTfhF3m3RsCEEDeF",
  "key33": "43ESUcqPACWDXAZ2LBcYXAgP1iocbaHf6PnZooV6wSrTyxfcocpv2eevZpYZHuqkEBp88FULBpx3Tg3Ur7mom6Lf",
  "key34": "38pPpMTLGEj42K8gDH5QRwqn2evETkYs5CGJVd5LmUKWAuiK6Z9ht3nL3Zk8z2o1pkHtisbrxE3nY7J8riAMUoGZ"
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
