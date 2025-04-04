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
    "Na7cQHwk1h3994XJQ2M1AiEqjRT5KnekXP13A1emT7C2sGdfEwkxCqfgMZNUUKCaw8jyTqXD4VW3NXzrXNa1BQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rLzAGFDSA3YqahNJ55cZ3nkvxQjrLMejohf1yH1fUig4AgGgJMtV3tPkVboLqfNswPGk5FycqiKnoZRVsXDD1h",
  "key1": "3y5S2xVHPWDz1vXqe44ff9HbCGqYChgtBU5fsmZNxEE3u7KJF8a14TjDG24UfDVe5Pg8rutqp7fXNrhwcgsZ9qtk",
  "key2": "5uVKV1JQprXRbn38uui4G6Jot5qVgwXna7555b85AuQpRshjYULZscpUwss5oRMEjAb2nXqdWAgrK5sXWTiFHbmn",
  "key3": "Fcypfrk46otXjUaTUR9VZ44zBtuYRUm3UZoeF7AqFyZUMw1HDP398zgAcJKpmxqzBxmbhz9kDB9HsNSLvLx9yQ9",
  "key4": "2bvSJjq12irsRbQNLyEdWzApNoW1jrUurs1TBihqNyRA3tMGyM3d2FRkmTcr4uSin2QkPDhU15SM2GLbKVWTB7Cr",
  "key5": "635XGSiKJjDLgKtNACaP9Wm4PL1ePmB6tjPNLLvdVaWWZ7nuLdeQMgWRkXwzwt27nj2bsVBGmNxsQKgPUfna4Gsk",
  "key6": "38H8eUFHV2g8cwGcHPXLoMKo4BQtKXEjSC5TEYevL8rKvNtiWtWyWjWZ7iHcuSvLtKb3mcH64jAprbBUiDptpJjc",
  "key7": "3PXMBUnZh9SxpbL79XWZUNdCg7fxCDBJCE4RxpzaNmpzfknVJZJdxuMV9cLAvH93PPSojUppPg4cAyup1vZJdnCc",
  "key8": "3VkAt3HfPfGcnxRms5trrfQCSjar8HBFeEMQQWg24m8KdEMsAiPnKeTaqpVkXNvMhT2NWJwEW3vWAjkcjuXzgLAZ",
  "key9": "EjdND5UzQfL8foekqAKDq9sW8x5oEDLDEehomFkYsNj8mrWcYHq3zfSRxmQ2pwqTrVuTxWJR31NsosDb7k1tmWZ",
  "key10": "5jMpsRhyPPGWRTRcQ9XHVtFditnevTfaLLtmJ44gXuUUaNsCwY692RHAcwhE6oXj5XCT8RqrHi5tYi1KRnybwveZ",
  "key11": "D3vrwKZN1LhZ3ko4GmhyedmaE983exP1paBj3YrBzr9WbkwTM9QVki38ovv2ej9Lwq8r4dYyvZ2jf9dU4VuKmCz",
  "key12": "3SnNyEus7hoMpQmvizAwaZT27ataNbZuGQwtKWfZQqt5GC6wkeK7Qy5TozxqhvdW943nvpf96NV3oG2wHKH62j5g",
  "key13": "5ZbeETNvUtxmK8AQ9xzxyiD2TZk58RGQijh5QtR2yoafqay7xpwpi2LrQSjfB6si2BEgEEPXRxioWt1oij6LUTn6",
  "key14": "32niXAdZHv1BCN4X3VFveLdmNidMJLjrQuGmd1Vu8fkhZmN7u5HTwje4SJpkE6yxt5mvaL3B5HjjvbLaFH3cF7Pq",
  "key15": "2H81Xwop4EMyAXisEJLCWXpxxVstQsujN99cVAcwe52WgkSydPFPLwkjtMW2YTGu4XTjoAgX6KpoR7VA5Ra6qVkN",
  "key16": "2Vhf44JUhG98XrQyYie61v3Zr4tmDceFsqbQeTkU64Nm5zaCozW5fF1Rz5Y7jwgkKa5JXu51KnPgwVLV8X6oVEWA",
  "key17": "5PJpq4H3XLLqsE62ByZEJQF5JX2jZVxJGeqLAoVP9yVWdg4VgErRZvgAJojJgQudNewzkgaxQ9sSs58Mzrjf9XPM",
  "key18": "3BEiqAJDSGuYdUXDbgxPYkN2vDCtGzxSysmp6NcPbyM8rUeFpb3yirZu4BSzhyYo1x9Npgv7XxWAryz58XkjuqHo",
  "key19": "5ue7TsC1qWSK2KWqYKRsLuT1jTd1HRk7inKXocMohLwy7W8txRip5ZfKWxpPALFdnyPGuwNbznrEo5p19eznYhoT",
  "key20": "2Vc8cQ82fZqwj78FVN1XUsitpLL89pwVmx4BFxEdrRrAnrxtqUX4PSu2bcjy98sWZ4tLccmPUA392fKPYuxb7er8",
  "key21": "5QL81xwXaSTDtChxmMD8Yc39L97YGex5JMBWxK8rzPiwJ4UvaVxiUYi43bdseB5QzzP5t8xZ3jb5z73HrwcGcNLP",
  "key22": "CdeRDe9F4GVgmtZpWjNHEoFdYPQaDWh3UTVvFx49wgTzv1jwRkcs8SGQc25aCC4uHDYCqgREKxZj4DgwoLAjRqH",
  "key23": "pAx4ApNmTbvcT5wBVrUr64hNHm7A1YyEhjorxjV1rT8cajDoXn51XD7J9MzW1btJ9fgZAYxiS5fBfFfYdyhRLcW",
  "key24": "4x6tasx88D3QV8CLvH2hHXiDc9ZNEvQHBdNTPwjRwYCRq59uTnV8BAaTtuf6ZVbASemu6BhLKpE2NKv5s1p8SgUp",
  "key25": "5YKwqZueJMqZcthZaXA2iKqb4ZzF8JNFnKirSMHfoz2CppiYQoQ9KX3E21o5NV32JN3bNt2p3eiDodbBcu381TWu",
  "key26": "2SMVVVqkvQmyCaCVnYE4ppv9GjD3cZ7ae43U1HRqugMN9wPUi34PAywNAmKLMrZwyyfbZaDKwodDsdew97Qq8cmX",
  "key27": "3DyQJUTHzjb2LNRQZNmUSJaVFvbsh73ZwXZuKdadcR3me4DiwNwpjUdBSDkfYC51asWfFzXa25ZDegnZAz8s7BoX",
  "key28": "2bmmqy5i7gHBezERaLs2CGKRBpJkP6BCciuh5TkkxHGgtQUicwbXqqehDiHLnmthxCrLrYFfcPqz9WkGaXX2hk5o",
  "key29": "5CDxEtaTeVffNfXAp6r9GGvEJ4fmHmUm4vLPLxfGw1x8rXTgwq2L1oXs8a4aQziV6tFWrxLx8r2ywrCwmN1NQMFC",
  "key30": "3b1AMkXZMF4CBzAGcBJnruKWifZjB9mA8FBVLoFqdMBce4w6gJZzUwxCrHAjPdUrekcTyFq16cH4KCKZsYzF6tYn",
  "key31": "Z67vt9ezmwpVEE2xYkvLeRrT3rdmQdFwk3TnvGKdrmtC47ZXb8BwC1GpyYhy8JtTkZyHCgNaS3GXnrWjktYhUuC",
  "key32": "4iPm1K126iGUW2Mp4KyD355CmF5EFNxojETbWV6swDVvDzSJpbRLP8MDrXHPZLzGTjAcpAxJVQLLDLsBwbSZD3fC",
  "key33": "3YdjJNzKZv4K8ijDmp3t8c1EDmD3HtMa8qk4AsGsjjQCBMQMxRq3auBtZTPXHEQtdrWbgmHsG63WCPKrQjEHx37W",
  "key34": "2bHipKNRRAg2JT8xX2i46gxkpzGTA4R5zt87JDY4FNhSzQGWkWx4itMXLHJKaxVme8SfKGVw2GjNYAppdLNAgaaN",
  "key35": "4wTY3FCCaP133dg3389oFqznzNHaqAQdjQH47wr9DxytCQEwYoF45VpcrNiD5mcTUeaoHUQ5bQigDitwnvV3Lfat",
  "key36": "5aMPnUtpexuDsBnKmamhh5TqTyjYh1XFZDSZKFkSypUfxncNJXUEFGBW7hsoxZhMV73RbgwehPH963D73ohRkQmV",
  "key37": "2rd2EiL1NCjgiCf7qiSzQDZALDNQJxouHaMPYHW9frQ8RpjFcYX9wEw1YD4TFRhi1ts4926roSqdnPdxqnYKnAct",
  "key38": "UZ6aYwHPVKj5bkzMKJG7K3aae35Q91Pw7pyvzQbjwwAckdiDreLXdw68DgEpv8ppePMNVYkwaQcStTyo2ZpqBt8",
  "key39": "2QqWa6jwo4Ak87gGQDgwJY7bEzbP8LibhzYcVoZ3wP7sUQwPRU8gPSPSE9VG1xa4vJTdUT2PRCsbQmu5Zc8d1Q6j",
  "key40": "2biESGnD8TqzXKAL7wUrHc5xoV3gFqxWMMNCo4qeX8mGa5xo18N2UqyxiiQr3WSRpHxMu45MzJTDFYiwtU269NGU",
  "key41": "5FB6DazV38uJbNWcpvFkze2LjzhpwDH2d1Knpzc7iGUT1yTA94csF6cSCZo1nkrhcabkSCqmYdZyJmUoSPzPoow7",
  "key42": "3uhtkqhkZyBsrzogaP8SLyyaw6LLmasXD6kZ3JPKGfbNwY1FmpQxggW6mEcvUXKe7MpJHUZjoEKqB641vSMGpsgQ",
  "key43": "5e7hWk5uNZtGWVw1atzSDrT77sy1C6LfhzyUuDS8cRGfDy2DNZXPko6zqeUgUrtusobaBgvRu4Uj2a5ispTzK8Fy"
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
