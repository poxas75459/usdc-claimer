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
    "2f9jXRFE98V7qTTRvReC86vckwPwik5FZNdLeFRHyTrk1P3bkEVoNtA2c7CYw7WbP7W1K3Ev1r2Mc5qgVcq96xnB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "535BiVGatpRgbRRgwyHe2y4fjxxoeziV6uh1MPVjopTFPVxF6qRanbPNHDk1Kgru6DAiGRAvghyDDE5mhH4K3NyR",
  "key1": "215iCFdRaCarvSk6tK7CpuPnDimV16D8NdUQuKHAnFVeZMpPiAobtoSMYVo1HCM7tewmiQXXDvzqZrBVA7hzJZaZ",
  "key2": "4EnY57U4U4MWNcJNB193SY5TAxCKceTTDhn4e7r12bUe9gbNyCLAbeH6imC9jSRnus7uRhUHDoysMLeamb2wHWyP",
  "key3": "5xu5rMNvavyc8TDLUFnQ8qBYFnrk4Fc6gXBGetmE7DXRETZi2XtZTwH6XcALHyWx8oz8BqSVzy1tZ4Wfmxx5QR8h",
  "key4": "4UoRsZPtSBP9VdSRhoaQSKvkMjgPSkAX1UM9EL7jAHhcPnfyhwfWijBJyYk2N6j2oDL6qXkhPnSFd21X9Y6JxvwP",
  "key5": "RQNm4jFZpx7WAJ94PpkBdng3erKAPFPvw8H6sNXqiJueMWGx79C3cdxeGh5YGMRZB1RiNuA4VpGRNsULD8DSNpd",
  "key6": "43hAuWp5s8phJn6m4mAr4mTfXNbAQtomMHbBmbnToqA5uaGgCCMbQLyVWMsn35TxN253HheLxeYFxc5BugHcdHZ5",
  "key7": "5NfDto8KvBWXxGHMoAnF7Vntqk5uRc6e3foC3p6qCfsGSAjF8M9kQ7KY4GE6bUUEJ4VX9AmPQPuJs4e4NTeSFHSH",
  "key8": "5hJHJntYqNZcmy5YdnKMordvGUvF2W3H5CM2xAKuUqHjGaJDVR1t4dxFJYkh8NMVTDrfqUD31LxFT3oV8Tk9Bpkq",
  "key9": "3f5up7spQ2ZDsMWprHEGH74DX7Si1bcTLLrWPtzggPXpX9Ju1ayq5671XqLgnCDj89xZTqpcaM8yXj5yNo1i9g8G",
  "key10": "4NNFHaLhoySp19seSYP42amkDzerUbPzvCcuAW8NzxW3jgguUKuG67iY9tzYJboQihyC4FewcEvJ8VAXqVZLKVm6",
  "key11": "SQuPBpoYPDUSUyYsEa6SjVxevjaF1ZeZVxyuxEPaBkp4TKEqBV9EVzLpVcKyJuuvErSyyxhqTAFQGCjPz9y7Cet",
  "key12": "3ungnGBUtw59mzZWocKPaYQ9v5S73S1LxJTm2crprppPeSoyaRAsycBwVxPMHVTAzA7Rk6ZR1Y7LwSzCkRVRgvJc",
  "key13": "5ZxzfQuNXYCPTywyyk9V8XoLggChXMGuUFCRAvg4ej9hJR7EQFjh97qDJ5ujQbCrkkeUDCVeov4cdLGm4y3QtoxJ",
  "key14": "4zxr8g7hEx8stTMR7kUhm7FJdbTQ2VzEY7T6jLvxVkvAiwHv8gQyvXn2gwA531hHS7GAvBxkh48GiyNEmycg65jr",
  "key15": "4FZrFa4m9WQBKGuTr1HCCbBwSU7WC5RcQJXs5eAokA8XEb9jure1bQikuFhQsZtsH2uxmA1sVyBxvBcXLDAqcrbE",
  "key16": "2XCGakT4xNQsZbmkR5sdjZNqFkZm7USodxw6jevLyu64TA8JDc25J6MYnGCnyvsczuyJvrsfV4NH1Mf74jfJME2e",
  "key17": "4zWeqmSFY595FWX5KBHsdeGGFD9d3RRJYP6ZgU7ufynYhoTBzZ8Ngf2twAPmwzRjAURDH7rPhxaw3pLueq4pGLor",
  "key18": "VLiJrguXAe4sqhmVK9J94XvZEaXFG3U4QQwR4YwR84Y9cFQ4AHySCpfzSjMz9JQ8PsWueUdFvG7np94S4EvKnFg",
  "key19": "2UquxUgneKEazZ16UnfEvvoB3LfWaELiyguLqqJuABvdP5ux3Jqh2BdiwqpPtxjNdLzwCQ52L2MzdsPJmRqCKLaw",
  "key20": "63BY54FSSEPCXEbVBJWZPCbPmLarqg2V8KoD25mYkPLKWEcuWmed4CrS7fW4iyxh9Mw3iGVoBuex3MZnbh673tpd",
  "key21": "5DWGDKFcsSc9gVvjsxSEasfmqpD6b2V6SnuKxjF4Bt3EN58fkgxEpvcfx1nUczJuscH2nSNPpC7KUa5CFBK8BEfL",
  "key22": "5ajLpwUm2sBAbGCt5zQSuoTmeHXHsTnVespFpA7jEiiZvzrUYt7qvUDeoCjKQxNuCi4LiGtuzkAqwf2wSvUULmz8",
  "key23": "3Udg5jM4AH1dr92mQFeie8yr3PNszdDRpaMh97hSuVyMaC6Gc8vioKeeKLZGYDYKZ74Nw8fxF656aUB3BcgRwCQw",
  "key24": "3QedNQmM2XHoxCZmzTetPDoqvRCjcveoq4FgQGqBVnJcmVQPQfXUu7UVudj8cMAM6rEcqZr76KXY1s1qpN3963qV",
  "key25": "4YrdQxAP8xnxXtGskiyG1EapcuzagmKk8y1XgGsnf1N8q6KVwqtquGJ7gt1UzDNfoiWu5tY88YUJaFNYV3ymyLXS",
  "key26": "yUvDSMWxsjKyDTmPUQUeAKntdfBZLLaGShXVsYRhgNYkNeZfVfXoQxcvD693N1eErEAYSboSFJbjmtG47BZdPTU",
  "key27": "j5MH4JFYuXxpjZemaf7Fypyn9oiFAj67LirrPtYKA6zQ6hnS6ugukhSN5QSJtoccitW8YZY6VLu22ZAD1H3WicC",
  "key28": "3GHfvv9LX12PS9tFBtxgbKEcnHL3tP8Y3tL5KXw96n5MK8qBMwjVX9jdQZ93J6S8jd9jtcwUrejWtLWyAtDA7bSb",
  "key29": "5Stopvs6GcvNq9W3PCMApt9uUfVLPHHDmZr1FpnE28AXGiutD4Qg127LTtinRTLaDY8Dohd633Xf22RCq2actGyU",
  "key30": "38ycaA3jBmwwu1grSydAFBKdAaCo2sg8sSLGbZNBD3ZZVNHF1hGowcyrjDTQXKcF1B2XRHwCpHXf5S9nySb42fY5",
  "key31": "3XhH1Mes413YHrs9LDCLxRbUix9MacGd16SDxD5sFmzqYNpqAkb9dUFYUQXDH1vj5xHhhDhzCaRdhLkCSQTifwEh",
  "key32": "BEBTQdGze1SeC7MdxUhWT5Rceqan11h3UmMBdC4h8n71KkFiX7eQbJKqNN8UjJ5pNs1WBTEPPiUgyibuDKmk2Ny",
  "key33": "3w6gCCgp3uuZk3Zz4gVe6NvdpUHosLt1Wdmn8SXKSh3Y7iMGTfB4wD7H43Bbeh4gGo2RXoLNWdfAgWnZMKri3UVj",
  "key34": "2VreVvSCApRx5fg12SdhGr5Y2hoZWvMCU1ZLZE2mm25UfRTWtbCcaJVt5f49wqQvL6WiiBDY8ycS4qwPoEuqbF5k",
  "key35": "447EU6fS33SVU6PfbqLzzCBAivVmFyfmTarWr9R4BvfoZn4bQLF589Q8qxn4iqKJ6HHUcFyJ9eRKkxBeiTdojijP"
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
