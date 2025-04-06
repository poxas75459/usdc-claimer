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
    "5xFBzR4w6i8AFkiyb9Y2Hys49U2xZZpDzgppTMwALFpqTswbeWHyo3ELjDtFzkmEhxCPzHRTDfZnrUik4bpsRn3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEsp76CyhJXSosqNFYgiZXgSa8dDpXcCNHwHR13kQkN7EcpHjVBw6PQzzQm5vyESwHJqsrMKrGK17YG1Uvv7kTj",
  "key1": "4S54Fc3yZBvqjLK3V834fVGXhogi6n47ZJJ5UMMEZaLEYFa5qiBcLPkV8zgsETeFfcB9FR7tuXhYG6HBknVpXss5",
  "key2": "3PBUbWRCXXxMx51VPhh34SLsUJHVT7mB8w2ykwrUuAxS7kgSiEhEvghbvc9vCAkBbM6qb19BCd4JX5QSp5KKKbMK",
  "key3": "3B32CM1bFwy9pHkBnwZ9Z3cx18Ji1FReM7mHxTvNpCzrhmeADpLLQYy5awKMiA5ZUusmgQzTmbbr34j5zbPy3ctm",
  "key4": "3hB4ERbLjiQUSKs8Sgx1sbvc9z2TPJJnhx5kcNZgxGnBjkRTbtDDcYPtumjWduPag7NNJsqyYCwJyTRJ2r1uYfuT",
  "key5": "95p3cWNhV4a5btfn2qyKmXojMCsh5ppfVZAnbgj6UjWRfsrzkt5nNXbbU35Pv4AHKfN8iCSMrVtq4B4APyPgoMQ",
  "key6": "3Jw3hcjwz8C29v3MLRVGFmB2FEgJxvNkqdcppxaZSz2C4CwY5PrDHGJj6akJopTMsJAdzsanEdwYgXjkvRNNVa7n",
  "key7": "4Xv2FsLR55kXtUzXMvyS7m7PqywusmMqwz6ie87RZDMd8CChXWyyUDVFDgXoaxdT7no5t4Z2XEcXakgEmWnjpFbz",
  "key8": "3gQiUzapHExo3Aw4LE5DdqJTt1keDCN4VGyLVDaCq28D35pp6QFzebLtNGnRqFsxvsAphfvoDPD8qAZgRqHRF7P6",
  "key9": "5ruXnEyDKY3k8ktpQ5HfqD6g8aTQE1kKb6uzytkKZh88rytRWDE5jzkyJt4ueZ8fjAPv7XN8bxSHnVcx9pGYQk8r",
  "key10": "655bhXw7scPwMiUEWyLN8114tSksDVWW2Gt2dAA6mS83E7HD1Wq8RYVQbPAKQHtMb2ZLRgEKsEktab6Dj9Ffzojw",
  "key11": "3npHiSes6RRrY4sNjRKj8Tb52PbCK6FD1T9sw8F8YJ2S4EMTQr25T9CZcT7oVmeKH5UqUNmag5apGena1BUCATEE",
  "key12": "5XWosTyCE3ZW5As9ZjoLShW3EdKAmAbHEfkcbm8XFsf3wTqTSfuAWzBRHKeBStpCXVRtbh9K7U2LgqnmZGhgwRVr",
  "key13": "2FfiScytwhQewLmMJQuToN5Nk1ZeoGM6Z815rsQBx4Z2qeiHGfyBgBsGmZocyDCzXhV9KUM1DUWWu9fGsBsejYRW",
  "key14": "3hFSzYT6jbatJPZNVsgN5bSAeWbTrwnTHoHSHpZMHQFa2AceuFsFyTvXs7YzQepRDDRJiA1t51CbVKirRBYjVCxL",
  "key15": "2QFYdQXY16Gub3BKTwtS9a3mB4E3t933efuwqqr22ZgDHaS6QZmNKao6MNj1npGgHDyMxBCnqz3BHXdjH9dSvZdk",
  "key16": "5AiBnWVhe4K6JDS2nmLRnyXJR38HFw6cSKBKFAKhNp2FbABSJxY4iVpfakhuSZZzu3p4gUuAfjQygp4kvKvqu5d5",
  "key17": "4NbhcmUtdmFNR28H1E5crytynZsvYUsnoWdbp7Ew94oMAWXQMzYhwoXC4pL6vmCaLBZbc3q4kCL5kvKyqMdTvEZy",
  "key18": "5eqbEQehjo7R8WH1aPfLZHHbe8pJiGdrNEm3GxKrYHR5CPQBr5MArNxJnZg3B9kjq4iUX6nswQP38f9X6PJDK8ru",
  "key19": "4wAZZTdNiVk3nVw3zgiyUyyiUHfatXfjYFJN4zRkJ8UqjYHCYbNFvgDBVyz9NNc7CAcoj8832eqrLTT3uARbzzdY",
  "key20": "t5PcGxdD4KrZ6kwyBpqxsahbMg2mAKvKBeuAC526gBYrjA7kSXTcJUj3gZX7MzGgFCNpxSNiPneRzfXBgxz8Riz",
  "key21": "VHtf6gvaYPN5CU5ktgJckM1S1PjYSG67osstjmtprfX3abjXJLfro4Gn6YEa3gYiKtabqBSfgavppWuPwweGdsM",
  "key22": "3xpbaKwY3QmY33gy1zkLNTphthWz6LSJ11YHFyJq8baG31BZo6PPVK5gdmRT9ZqsaPWrZ7NAh1brAbBvBgNhBf9B",
  "key23": "53MABwcT9BN8SH1EaNBUerpdkbJzTJNV7pXTQd6FXUi6JKPhGhNidWms876LWfMj8BGPXp9Z535vFogSVptskaZu",
  "key24": "4tWhMGxEXP1duzucEp7nXfbQ5stGKazQWa5Xjow8xAcWcywbA2fHNz6PKnrnnph3fLdHuEHMdB66GXzJaAUFJjw2",
  "key25": "5qKJGFrfUQ7xqnBzFtkLfLYu3Wcz6i1FedvxjJqvzQLjm7ydt9rTCxVBvzFgtU23sbxgXsnKQQJbEcUcYh5Bxjax",
  "key26": "GXm4aaDrkiWG8UaXGeXp8dRUBw1mpzJriCn6Ss1GzR2xA4jKfcefGgQ6j522pFDNpRXgr5uirWsYg2BCKmbZAJP",
  "key27": "3vY2fHXKNQcT9yTXmiDwib63D7hKvFUdiHCokhueE83m1cmC6m6vLVnAo1ez6bFpnEhgYDjR4DeH8XDS1nCX8LkF",
  "key28": "HTnx5inqadt6Sz5Z9S7uaA4V9VFHQ8J2edy4MfEf83u5zZSi54u6NKNBw7LTpBR3dhGz6GqosD8f7ZGey1PNEqN",
  "key29": "5ZpYBYe1PGZVHGGwj3Z1tQDaRYbnvUiTGTU7gnRN1qD3e2nNyy4dALVukGQEkQ93SUrWLZKVDxqM172ZwBV8GU8R",
  "key30": "3zEsAW5pi4gnbpuPd99LmLQtDAqiXa5MWRnFGJMEjHhnFfvTs8TWrDrSVBS78MYhHP3iYMoLfSPFwYNGCwEvhtgJ",
  "key31": "3KuzUD22kM3ZfwfqJoLaunuCyxxPcBJDTmG9yg3jGw5wm3FvvmesW14qkdG15QYn9QavG9F7pNTxjRmNYfAuYDUb",
  "key32": "39UiL822USoKgfBUpC9bPM8SaygfL8BuJMdpT8nw7aGHqLLvthdmrCmoN6Qx2iNo1vqQ2RW4FBxm33e8YdWGnqLz",
  "key33": "2Kz5hFNbXQ6GZvQzzUus3VSgbN6dd12EBuZFpaSbVPgLT91xJPH7hjVrz6SxSY6L4RJjSqd8JfDEW9pRx7vNCH9A",
  "key34": "BWUoqASHGF44U7rfYzNhkvPwfAVSmy5yKuUCWDyUsNsHN6vHa1jCiMXNcHHWdHq3VPRcNULtHSt3uwsoDWHbLJY",
  "key35": "5xGGfFXZnx9BcHTeMFRd1rzbkmELoGgy6oqL9wsSNQLsR93cafqoqa7cB6tTJQBxXTqsoeaXQBiUxHHHKAfFFEYE",
  "key36": "2SfE8PheVZoJmwvbnuBU1LU2xwAFsoTsx7Pv8ufB2PKefiiNb474xZLw3PwjiPd5ojzB4wGpnkFzEV8EMUVC4PxB",
  "key37": "8RZgAVTyPSnnizoXtUhptYPZ1PrASTi7sYhJ9UiGnAb1CD24awpDKLY3fUSdFsC8qEF9ztXuT1g2TFHnBVQQkQu",
  "key38": "xo1L6Jo3NyHA97uNcgU3dGtKcPLFxfvWv9b1aMs56yDrNif7yB4hjT9gHPocbwvgN2W755YNeFWTHnKEqKMDDqE",
  "key39": "2sBBjYT1Lh6mqrHybNxzXu9MqsJFsfR9M8YH6wjQgMqXZuboqwMDovyW43QNGPEanjodH3awgJyns2wcXgEw9xje",
  "key40": "3jGTwUP4nEKyweFpjaxkEV6JoXuH5rruENY3f29p1p87DoawndkUB5wZ1v4hvz8hoJFPkCBzwnte7uVwu1cZrykW",
  "key41": "5SUAWF9ViiFm2bnoF9Fdgwdb45WNRhdowH8A9ktXVDfDh1eDx8t2Ri3UyM5eYVtgRVVVPmJdvHh8ZhBspdhg61By",
  "key42": "3cniiGk8ch8E3jbG2u6JSLeYbbdvw4VavGMaMqdE44QNaQZ7JG2RZreS4F55RcfcoHuKMUUktrv6Sz8999pkPqUW",
  "key43": "ZFMoK86yhRDbtzRAcxxwSdjawssK3pw7aRZWpiFp2TRfSh6zEZP6MTECfky7PSKsSsNb83njHsMPMHnBcmPbeui",
  "key44": "3xmTzVDktpH6EST3uu2oazXDqn25aZbKCaEKm61SDv7nyzJD48vGZwebVqeDN3xwTiWh2gAZR5y8Gnttk92q5ZuV"
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
