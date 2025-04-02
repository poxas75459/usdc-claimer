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
    "2QwVV3os7ESjUwV2fEwV9p2Z1i47hvDDmnzNpd2oTUKc2BTcrvKV5hQhDeYKP8LVorwtZK5QvxspRCb2dBLqkBeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Au6JJ8JCkB3tm5xdeRExwyCMnHaM1JLgnzu1u5LSEHruFHM2R5AT5iqSzPxQQPkEvAum64erG3dw4dfvAoVd8CU",
  "key1": "2Kq894pV5XpYTzceo1e5kaNuNxhZXSjD9oJCR4xsxogkxN1iymh95mQFwCqVRB1UkLFe7GE6qfwgoUnQyPGjdS56",
  "key2": "5GsxRM3b3VP3spVa8fRRoFhJhF4v7mK4BiWYwebE9FTnZLii6851Qr47JR7jT5AEKLrR5xC6NAEtdZTwqt5iKRSs",
  "key3": "2iFH6NiUgRteumsPUP7ycofrZMiVd9EgmCotVB383aKxRDrT2T9CkcqyQwiSom3wmHFYFjLibuqSyMTxvsB7Qkui",
  "key4": "3YVE2dFBAtYFTVzJNQysogKwSU8FNHXRQoVjnWJ1KeCCAdkicKVp6EvaFZe1NbdVFcCN5652VjjvNwVatViEEWP7",
  "key5": "GXTQsojQyKKsMR4LsLs73m3EX8qLNNrm2DiQHpCZT6GpDQ6Hw9VweMxB5V6SMJNVgWEvKYGssPX9brjb9ijK1d8",
  "key6": "5Qh3WMruVXzbfSFcd84AqSfTqt2xjRU9dkYL3y2deN2xZ8NP3g78mpryekqHudLEPgsaVGeD7rtaw1e1Vfk5gtXb",
  "key7": "3SJkrs1utEHBuhQwQR3EAbtwanbUREU8P5Zr8nehLLu6rUPakhgXdQc3ZXkukedPT7Zfp5hf6AU3myUctmUJZRmf",
  "key8": "3ytt8a7SSorSut78D61VRqCsmnHLVVkfMmd8ymFijBN7AiDvSMWU3mKoqtLwjFuYbX2LP4TCEPGnfsDY1fwN8X8s",
  "key9": "k6vmXEHmAZ8J9ZmyjPJaU23VLAYsXkgHiHWdjJCkofo6ihwbRAXyPrQXWAeTzYfpwTkovDUPnEz1xUwHDBaFU74",
  "key10": "tX4tsjTTsju5Zy9RrSQRk6HzaNGcZySK5WReWmUXvL83pt22u88gNocfAb566zbyEYDLYFfqefhJfvDraHFgRj9",
  "key11": "5VC39QMLYFzJXgiGEMyPjaRSHibPNfhn3acK38NpWuxfRaFoCSNX35HJtDSZzayuPHQEt82UhuM2FV6aEmgAsqpW",
  "key12": "UBXp4ujLzs9aNhGiA8PokwToM1JLe3H6uw8DWEcP9iLfSciRq8br331gPDjiYAEzARouGivq5S4cfy9Q1TmQZxo",
  "key13": "2xPBqaFNETG6Y2sNraJ872PJfP3faajpkCtEqoJMgRVAUiaxCm3bBL9zhtK29Eeixm6d7rWS47h3aqRsCSbQiE22",
  "key14": "GW9za9BmJyJBZy89cEpPVJm1BYZNmwFvzrPthdZuTjnkSxKBA1oFyFUQXV1bttUms7DCMbAZzufQmBDyG2iC5s9",
  "key15": "ADhErS2gDyUec652RtMVLWm6ZV6x1fA1BYA2GH4BcQP5Wv9TrDTwCfqGRdxxXHNeVgAByuK5hT48cj2yw3P4K1R",
  "key16": "56TPGuXVbgL25v2KgXx47Tx2ZED5bkKVtcoVNdPqg4uS7s5CvqnmpsUHDUBQ49Kyfo6FJwFfVtHooBNFg5ZPVgkB",
  "key17": "mDbYpGLCL83vB5PVFcQqsKfFgZ6uTai5AjosumxxRU4FnXGd2xKPq67GocJGGtyuY4TSQH527gD7i48rJv2yU1C",
  "key18": "4ucoADtQE1CbU5PG85q4tvQomW4JLfD8XWH8eVdAVASpQyRX4nyp4Wu3SS5zueHnCfC79f61kEtCG4P6dRbcJpT9",
  "key19": "3VPa4TBTrmQb2ZRxgRdu8o6HQe6LMU4gnxodj5LB5xyaJrC4nZcDeWJk8GiJFLoD953poweCYnmEw7NRoJb4mdqQ",
  "key20": "Z4HHaUbBQveFNfqKm5ZyYWRgTsyGDNjzWrbSydzAFcuW1S1mePXgTUvZBq6ouoLkJSpXTK61W4nAJis7tuGeuB2",
  "key21": "3bWPBXFwBvnSwNhD3vQiNtgokZSeobrWTdcCZy7QZR8eFZoSDQwZfQvCE39Qr5RLFQXWEr7NH4EC6aTZQKaxdFok",
  "key22": "2uvtJ3o7EbiM6ntbnr61GizS1gKTYBZ9kJjQFsY6xoo1FNFtzJybGPsq3mS1fgKAhEzvYUAeTR7AruW8HsfGZcay",
  "key23": "2jUsGXCFpZFnYEUYDnLWiz1pDsMkgbrVNP4zBaa8eeVZwJ1uNR4h4YEoUouAprDBDdQgPERrG2cRzgY7x5zKdUc3",
  "key24": "5jQSnNN2wzkWh7bLu5bPBCi4T3DBqV4XtoBCzNAJ1KmF5groJSt8TFhbcvPq5cJcYF62yXMHT9dBJagAZuwtn1z7",
  "key25": "2PyKj8RAFHwBPihtAPjLQE7KgQgoVENz1EHNeSXDYfBHJR2WxYjzLxnmgMnWXPT1SovaD9GQUKezobadY5TWjEuu",
  "key26": "4aVLJPBE75zCbuyf5SMm7XzVSyFG5ZNBXXkKN79tst7QCLCxwHL8XCHQsbRabBgAAdt7iZpLAQveBLbfS5EjNHkh",
  "key27": "icqeK45X8XmjC4cv4b9caBLuRwmEDL6bb47ggGmA4EjzJ2Fyw2UVJgNihMHeEB9xNdDAAVZ8EPDAAkrkY4wQ4Zd",
  "key28": "2kJVNh1WcWrvJDeWqhLnbypVa8JqUNhNzthThKymc3FYATHSskoRzUPXwixTt2WQJc27Xy2cPFRRcAxpe6Vc4e9e",
  "key29": "62SmbmtZLtRAwgcXygLQuak5mv66GPyRcXpSaW1UdzLjamjwyihHihVp3RNoP3K4wSHykVbZ5BhZB8Jb1cTrudwa",
  "key30": "5sue3KWKdsrdu6phumj9y4BRhEEzPKNYdLzuuVTPuzavj83fo4fxUo4s8xHsAVnof2D55bYNv6tFNzez5jEv1muN",
  "key31": "5M74ydrcN9d8ysAKQwrUPRscJ1Xc6M3DSVLbu6kFJBD2fGnoKWzkn3Z9FPkmPsHBUyiaWHWmiojims9jv9GQ6Vcm",
  "key32": "484C4ws8LtDkynK5C51gbp4Zv8y4HxdUzv9b8HPzQgavcZk1wfkMqKxzYxCyyX29JM59nMyyENHirkpH6rMNNe1Y",
  "key33": "435SkG2PHAFnnjfqb3F9QqYXRceYjACbggrMQbHCmnHMQ3V9dx2PYdattdRRVPQg1ij2okrZY1npbZxa9qdjmjkF",
  "key34": "efpNk1WNqwRUxZrM7zBConPv1pUoz6SSbVQLB99YGvTxJnLkzTy2EGfcgqFYSxBvec1taS59VYexgkUJDeUFxaz",
  "key35": "2Vgru9nupGyiBbLJbK1YWf1gmCsrfThhtAZZhkJeroAaZHhzGaYNBAHjFAgRNPXsS9bRTXNKknvhZMWDyd6H1Kye",
  "key36": "WPJGierF5nDfUaTyBrTjuQoQndbatdMpQp4ezYCKroEvX6Fxyate3RA1QL9d6q2WPtKUg8NQNUegxueThZ4UyGi",
  "key37": "ZGafEDZxv8EBXQN8WfKJZo4KbFtozVdthKxyfRe9HqnafzKfFzuMaAc9kTYUQvi5wXzkoVuLVcTkFgaTWyJrUtg",
  "key38": "5YqENspKNUDjTmqLNuCY18n8wnmt5apa9UjkmJtSMnP7ZZRWNVbiCMLDSz2WnQh4CgmZ3f3YgFYW12psEj8sViZ8",
  "key39": "2dAEb5JV9UCPbCmUpmkBqeoABuLJ1d6ZH38JN7C5Ak851V8yzuQZ1dJYKj3BWPhBNkJwZW9nkptPD37L3Xob8gvs",
  "key40": "zmwK7KiNyRzG6QNJ4m9m8Gti2fPhggo9VfZdtjcv5iepWSpVu6tZmLegBWQRb8wihP64hHsvHJP9XcEmpkz3Fcq",
  "key41": "MHvmm7xUrgVjVXGk7hx3Hcj4CCrfsbUgAsupN7D4eyHzCPUF7sEwc1wgFSzdYHnqGtWZWR6bgpz4BZuNCt97yaa",
  "key42": "2tE7VvxB6xdWVaW36iL1zGfTXciFB5MtrGEvy6fhuWKbVp39hfkLdp11RMH5CVqAVMF4U3jweoDb7hSx7o6y5qf9",
  "key43": "s8vcEaK4P8w85qgKvYs1ZZj5SXButRZgbMPbbnE288LZ6Lz3QU2R1Lc1i9rXbf6oVA7q7VgRQqiqKJHreCQ5wXx",
  "key44": "58wGcHXYmPk1Ap1BMRrG6bm64wCYAbQ4FatTd8LrSQd4TcPCckFfCCTLHGJXtminMS5FfZUsK2x3NkvfS8Ukjtre",
  "key45": "5iQCvR5tnToBczoFahHnV3jz4cMHFb9q3jk83n8wcu2Kke3ZfNWt2dq7FiGxy965WzMSw1HNo6A96C7isv3ynDwX",
  "key46": "43HnxhyxNixBVTaq8rrDuu6SPSB8yxQVbocs5TR6AYWw6tmWaZderUHofEJJxb7t9FTFfD6yFJRiVqvD6eeP46L5",
  "key47": "4FJCExsjNtgY4aqnomC93pMfk553T9w3cqukuAB4zkob4wVnu1nWHtpV8rxbSsRJQiTfBb3WBzgLTwVWdbNiFBRz"
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
