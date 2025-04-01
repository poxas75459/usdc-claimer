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
    "4XBU1xuYFZ9ECHRercBBgWeSKdFJYeD1sRpSQqveLe2hGoRwKuiou3dkQxvtLezLaaNUnxhZfiBPY6RQiwJ2Rhfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JatTUZk8xjMpJGnbmRFb2eMpP5JtBZzt7ZXYuTR1xBGXTRZLQ4GWaR3RX9whxzXyPxaZyuf7cUqt2zB7rEM3rML",
  "key1": "2BuAqN7a2GxMgNoXuPcdxCutCT8bcNkwv8NrvCjsf168KjdrCTP1cUt1JnZ6L7UyPaaGpnKD5wwaqXwZRQwSJN4v",
  "key2": "27nj9QBCHvgWGM6DmjPUE27bmbKMaorGyh23YjvNCExrsENmk5PXBUZvnGdAqVyCZuz3QRhiyzRXCJd3N5YRbZ6e",
  "key3": "swUovLHjSCsjK6akQ8ujnUkNjoUdXTrDWN779tgkDnHuEsnJbWCvVCKNVxDdeZXnfWyqWHME3ZhQFUb3UzY7gvQ",
  "key4": "2YfBvPhVFr9mr1ADtE4nYgcNqKvdmbZLtpfGoZMRATPkvPdzByFNTZiEuv57YyfPyVf836Ng2tchh5FFNQ5TyoVr",
  "key5": "2coM5QZj4Nb3zkYPMvCBaVXx64iseDzYRGAnvgVuReu5c7hSBoENi3nwkZ5wo4nTB2VhEi7mXHHk6KNXcQLib1Lz",
  "key6": "2Lz1HQwC6ftavYuBY4N4NRDxkqNeBPSgUM36DybCmPCTyzqLW1cD5GJTbgpPn7Y2W2LHt92mYuxBJhRMXV5d2Uvd",
  "key7": "2ZB3kADNyDAKUgfv2GpxyqfdihmYfeDXu9Q9Nuo2F63rL5vc2vCJdP7Knag7wmXJrVcCaQ5EY3t2s6snVFJz6dgf",
  "key8": "3aQhK2MjuuXzA4yjrNBWQcL6uZpfA8Zxq5CrAyuXmrL2NrYRx4W8oexN7JgWGfTPUSKyoT2yGtHwJhBsptcy8JD9",
  "key9": "JFFdUBCmZ1SJ9RkYmzwrBBLSkagQfamuDdY8fR3mjUSkcXaYDr5KM3KFoUJYo2u4e4yeg7dUZGQTpnybgBsXJRD",
  "key10": "5mB4qCLqbYvQihXNdBCn389YyBaRis451VrDFzWSaY1tBzXvVAMZPf7PMUqErGnhCBX25Aaw49c6SHnNqwaUjKqK",
  "key11": "5SFhYyG5H9WNktEvMNr7kvskDHWarF5rFJekygvKtpf9txzSRHo8hNqMsWZTbe8zYG9jJjyibKTePL2vpsqCxkpt",
  "key12": "5vfB8pZaYUXAcxeUV8LSTexavGwbWqMe8nKmKTgdi4qx3tiAzNZpytxWndc6WnWf9ci6MS5CwCES37msKfaBpxTP",
  "key13": "5HfsFvBa1txisKWT3myRMtDvwJXNPjVXBYYbb2MQHwrDAoW7MDmAcEfXdvwJHAQnd4M56shg5Kg9VcmB7XdpPCdy",
  "key14": "2xC7z7PvUsuSHfix4jaLgu97yVLufd9atfBKiJ5ntxK4CEL34Vk5VMVhxhpgpqVY6uTVQABh8wQ3D3XXAxkzHBFt",
  "key15": "3JN1JV82Yu2itjkAazioHAC4YBbUbpjiH2QguD67XHfrY4Vpd4rXvYzmWMxyzXbXVkFwukzDDynQM5K8GmbwvJ3F",
  "key16": "565X4LAW65JS3Hrmo4t9eEg7zb1JHfxNGdvwx9hUAUvKHtheGpDkiR7EuVViNVfiiLoEgMyTkMMh5i8n6Ekgmd12",
  "key17": "eiaYRVRma5Xo2H37xBYn5j4vH5x41A6iZjizrBZSKx3TkPwnp3bfR2L7k5U7iwdMNUw84TLXDchwC9mHy8SvVUn",
  "key18": "3F3GqtZUKdZ6QMNrfx4vqcw8rhAwnVNwspLdXACbE8myBtyrYcBehC9J84v9KLSn97Q9NQUejJLpXdECRz5Pe3p6",
  "key19": "Ch1Q8L4gcRYdm2nfuprFpqk5CEijghu8aSBbCpEdcTfCCGgDVd1AD8mbeCya4LkRHFdv4nqSkhidM1E1inuBsVc",
  "key20": "5xMw6c5KsgatCNCFZvnsoSo2MiLPXDrS7qZZvd2TgqLQkS5hBFvsVyrrYRFGLkPMo8uE1fgY67CXoirjwPwQvC4o",
  "key21": "sCuzsCrBARAWGEFCBjjWDvyCLqkScJgpmSWycbiW9dcsZaXhaACrmQMF39t3XLnDGeJFxU8YYB6qHkAp1YhytJJ",
  "key22": "4S1rSrsoKhhtJi4y2YbZ4ADJgTYMexvjo7penj9f6toMk856ptUXMmWcF6iM4n4oRmkur4SAeWjAknpzcQpovCKN",
  "key23": "yKKjYegJP9g8P1DPrPeJEhYkgtxQTZYgLpSW9UEyV59UwihTMHDHXBeVucxtZs6t1KSBH1yR7xkh7prZb49L6FD",
  "key24": "2dSgZfFWop8iWEFcfr535XcKZQmj7AyoXKPPZ38CzAahsmPuY5NvGZQnUspabXNBP9ZdiviaAYCVSwvaYunw2wHA",
  "key25": "3i6gw2QdcZmxziNpnHxKGc3Sxq9fDJoCADQcoL8DbaymMkr1kE8VZ2VeJrudxkiGLriWYX6mYPVLto3wjd8QVmjs",
  "key26": "5jT1DF88bMcsSfeWf6HUz4JSFk5t4GdVset1LagSrwsUAXGVJf8swyhKNcKWZSPmt4wjCmpMD91gsBJAQk5JcbZv",
  "key27": "4kw1d6sqBpKK9pfyMz62egVDGLFbc8CxSMuPdhUBtU8mZtU3yXDaukXe42Q8xZmTftCxKWk98dBSB1A1rHSjfnoG",
  "key28": "24s8s2BMYP4Dh2WAtxr2RwhC9maGpNk3eqH64SbMP2W8qSyMF41p9MwAUeo7c8SrDipeJC9NyjpDQqGhJgQiNBtc",
  "key29": "zTY4pEnDxjQzYtoLoFmmEAsr3UptcsVnC6oVJv2v8kZLPESxP67EX1AtMX63pXvzWws1MwseYHqwPtk8iLNAHfC",
  "key30": "5rGSAU98qepSTrVJi4MU4mhPGYMRQGZNscCb4UEw1HjhzLWix47tJbgPyog7P953rWk4YBVBycNuZsvig8Trefav",
  "key31": "3MxR3uTe5GJZfZStbarWpSMzFC67EY4zy5zupnhPGoGSeF6E2UaNFK7cdYsTBBeFsDL7FbVXrey4Uvnaq2sfwTUQ",
  "key32": "2RG6JE7v5ZwxREKtLnAbm4ByDc3Kc25RwrrnVvzcAen8B9JaywTKT7wRKfvm7s5o74WJ3FiSqUfcLWx5aaiHXnzK",
  "key33": "ezv5ZDEb2aXHLnYiBbSp5AHgqgu3sVsDdQt5oYXG7XNBc75UG2tVRWo9BUqvYSoKFxpraAcQ82Th2LSmjeAqtPS",
  "key34": "2qrGaAsXFnBnzhLpaiyNrvPxvbqCe8fPGA6JqDFNu7un3wjcJDRGVtvi83voF5RefjH1tPFj5oxTD2124jWWhbHF",
  "key35": "29nhcx4ZMife8hY1e8Mr276cyWXUkLMkoVQJM9yx2ssGKA5JTUZK8gKfx88nt2LKjaC6B4Gr8ZPXPw9XbQai8dJC",
  "key36": "4a7Xu2pLSSs8V48rS6NKTU7Rn8uARQouAZzYz1yYGpKXZnctqtonXeeNV116NG44ZPoCCbxMLTHDLaGor4kdnYbq",
  "key37": "64E8cN26hsQbb3ehXEe786fF6SXAqUMEuQbLjj55LGFuGX4Zicyb7SPtNkpE6PgKgRWfW4u6TEmGDzvwx6EndnpN",
  "key38": "344sgCFgmhiSMevk9rxUXcmLju2Qcbjnmz4r1AyvoLWYfBEeGbtUncwSqy6MyhPtTbUHL27XXKgJF5tuqWE34ijE",
  "key39": "3zRwPhEV29oNxu7rETLsrAMeVxFxWXLWhbfSkA8NLXcLDSYubRGqpzkJcupBXa3XEsAR6HzTXyN8hWLrKtWpDmeA",
  "key40": "3k4TE5vgcoD5K1FpZcQtVeptGgpF2wNrzQ7h8vxHmWzuwdtn1Hr3Y6LzGptK4Di1AkyPqxwEP8PW2QdJTZpT8jyL",
  "key41": "pBCirMLhaHCfzg8tQZ1yEQz9rw5kuAhiKqpWNUgR7EgSHE2gispcFvmzbBWv71xuP5UcZUDXhpZMiSJpv4ZQEt9",
  "key42": "5Kww8khmwrATtyGz6WPWbcEa2zzezvmHNnj3bxUxNt11SpN13id4PcWjEqoiMPww94VTdnfWr3mg8GnivaqvFyRA",
  "key43": "5bk4bQoj5ZzK6BT2f5fzXPAf47odfSHpjCfnQuUbpFGgjtVwsGbZ3e667ww2P1SuvcrYNZ71MYJ2eWKs7TjgtqN8",
  "key44": "4BGh6KbvmossF5p51X7qj378aRsh4rrxLBUuHVMfmkirfaWK2YVAaZL2yLrXavevLJcQvxBvgNq8D2mq7qvbpqFv",
  "key45": "3uo2na1cyFMNDqeBc3NofmXgNDaDSg6kSaM5grcJANaLxy7hGj17ay9xs3giq5E2oAgvcT4aLQ9xvWNRYbvtKZLb",
  "key46": "5W8Zione4VJwXRQkBKkZpsKJQVM9yatvKB1JssitdrSwTzTpyDutxTLKwQDdXcF8MXVE9irs4zZqw1FGFBvZTnd4",
  "key47": "3wdVCHf5tcRsPbjb19YvWh9DdsxYxK8UJFbpHZoRY8Qe7YexAstk1t1SNNGQhaeAUf9CEYf8fXGZbx9Ss3eFFcKp",
  "key48": "32kVPKtNmx62LxkturLS8djpXW4YjqTkAvGZSnkb8ahGdJQKNUbg4tWFqSWN1rBcxuRBJbkqW3uhdGyNbGGaPz8F"
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
