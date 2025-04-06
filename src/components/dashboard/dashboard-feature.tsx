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
    "47FRpXicMu8FTU9tH3AF4kmeiqMDT6SuTEKFjEidDCDbrLKhNdwR2a7Cniz3jirpsKnQVPDgxBNN53bcAWJgG1jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QF6P4ZyVGVhHpxeUpkgPgKxULMXy3LoZdyxjRDfBMJKJm4gpvTo2MeRAxDTbL61fH5qr7hKXe5ZBWLxfYiWeGYB",
  "key1": "4EGZWAzGeQwMbF27C2jTCmrRkoDe3SFSkvcBYmSvDtQ4cYTi63PVmUZjsU13xdnpDsx4SnYPgrZejTGfcCydTpgc",
  "key2": "VGsYn6Ld6sMBavRdWb2iYcznGDzZ3Qi9xNa3vXsu5vprLdSQQzk5tqq2TGm45UhfE6UzXww49NnMH7y2i9YBj3h",
  "key3": "3C9SZpv18h8YDfeRcbuSCEnNdvrzWeZt8gLJBztGLeDS8s6No6RBZZeGR8N1n2SLcX6Z4x4kQEh3PuDXb1PS6W8X",
  "key4": "496R3Mb37bkNZvZ8zpedzs7qPJVtHHvnoSVs4FVVtnm1mmkq58JMfLR7QnZEZgL7E4gjQLb9weTMdL9MPzoS5bCx",
  "key5": "NGdLzTnQmY52YmugnsppCFiE67Fzg2uTs38rM9cB5JiuSp3oYUhjjwakFCYsz6VPFTM5ffvnTzSL2rtbHD1VCMP",
  "key6": "3zS2PumVwzgippYM21zJhaYwBSpLrKUYQbv6MN7Ci42LgwophznvhTzZdThfiiuFXkK3hQc27K6tAy2crZF55f9D",
  "key7": "4CGfLFbr4xek3adNfPbvwHdaAcaMmhcrUGwWXxxQeDgHfVT7tGLsp4eFuhWnqkZy97pxjBRAGZNHG8SVSETpQahk",
  "key8": "5kDKTuZD7bkL2QKPp4djeh3gan1Vjm2L8zK3kL2RAEuR4jxKSQ4vDZVQn55s6nk8eHdbCX5CJtSNbZMBd1zSawjE",
  "key9": "39UWfjJMs34gxWhrkVmULXDHEzbb6MZEafhN9atqmwfQdxZaVJMUJ4ALxjQU6RFTKMGyYeRHk3fQwTmS9TLFhrmD",
  "key10": "5CswcU6WLuFnS23ATHEoGTmyNcXZBhGMEvgfEUt9vTJNCBYMLm1vxZXmh7CtTsHNCaE35b5d49baZysq7rdMRfXY",
  "key11": "5EuiEXPTccNUrigaB67o8RG3SYR7sd942YeRyRYAJ3KfWtnCDVGPsrHf16jXhxoYBHmFZGi97t4AMSg1gPm1xuku",
  "key12": "2f1Sn3p66rhCNn5BYqdgCF5qYme4zTTMvDCSZGp9fgNKaFUpdJrPcdkQfcYRwJRceVLpohLKCh6xGcuzVGh8dRVx",
  "key13": "2cXehowNaYgHQXK6xxDrW8togRoAEo3vVjAbAJkDMpFaDPuPLKk9fj2jNfV8sKjUk1fMQQFBBbo3b4JwcaovyM6z",
  "key14": "Qk6CNTG2q7XzdQnRe1SpaB5EfRuEpJQWpDWN6kSgWnyjXY79YpFTgjz18gu4XEf4pEEuPxBdVca68ELrvDen2MU",
  "key15": "4tTyTPzyotwYmiJqDAJfCgS7HzznvHNTyRvUHus8vRpzfF4CFmczQz3GTfo7xLhNVK4rdcd1RgN4avnrJzZBdKfK",
  "key16": "3ZZCcaQLgXzq7XV4RKouWsDWjnrTYUSToDuDjzctcBXiv7VPrfenP4zUXui8KbBc8cpqeqWCsyEf9xtJTtq7CzZJ",
  "key17": "2CYEbfYoggYxY72or7hHhFuyoQRvZ8uDqEgHL5T5qNk2diR1Xei7Sv7AK8RGfYDr5kFWh1cZxSQbv3aqkprHaPRW",
  "key18": "26he9a46SXF2nJQdaqPEzJf9QTRHN3dRGFUWtCk59fpBL4vGy6Mkt94CwGAEsSCXN37s36rm7SLoriJPknJWYeDa",
  "key19": "3Xo77w3fLvky6XGYNxmkBzsdgCYdfCGnJRjdFYJJU7JivXEcBswxheFPAX3eK5jfepyvJE52AxGo9idpeo4LhyyM",
  "key20": "5mK95AxW7kapmsXo9wy9pMyn7TJvu76V2bgkczKq6q66nMQvSaSAFBXurp9Q7HocaEWLkSPKktQcdEoLrHMKEW3o",
  "key21": "5xemp1HBaN9HmW7FdRVfT34ecuoQerMBa4uDJ2nkzPUwBGpmSdHnkTYFoVdwvXZkBTmVGiomGhXSkcS8EDJ7jUBt",
  "key22": "35qDFk1QosmrqcynPgA1tWX9Ym2Sq2jwi9pGjBwE8U1ki3LcXBcgCUnq4GcANmSEPzynehYiQXNu8um5J5VkmA9U",
  "key23": "ths9L7gPpd9Kqb3DiXmDUNXoyaaFoxsoiKrisiGrx6r2QqeY6MZ6odY3u7XfNMj1qsFYu9EvETstf13UigBamkh",
  "key24": "3UNLjGL1j16guHa3ExffdNTjGYGDYRrZT1fv13a7Siw4vRwZg9MKwPdevKQSdVfg78wwufcpXqMKFxExsvRsXqS8",
  "key25": "3EUJYCh9nmET4coWWjJatNmtxfnMFomJvm8izurppnPCnKLNGUP4bfVRmBq9CJJ4QfNi9fraL9jbB8vB8hScyU4Z",
  "key26": "qB5v8v3b4rvLUbQD3khifLLqS2zKt8Mgeag9DKsx8MCHwzoN1TkcEEh1HXfJFMUZAcD1ZVCkMApqBtHqABCpXgi",
  "key27": "3VstaQsU8dWURMSVYgAL2YHdSMWJgQaqcjodm3WqevBHeEdNnRyKoAsoS4jUuRq6WWWeAm8gxTHNFVJ6AwZuKZ9V",
  "key28": "hAZ4g1GLF98wdzDrTpox8542QwAtrjyKTrXuBatxcg8B1EHKJnjwd6FmYxse774FNbtmWAAGDkAq6rPFF4LNx3S",
  "key29": "3gM522HkWVCPGb38okfjfQA5bVz4ZjbUpB7x92Pxf1QofpWT5X2gUUgeH32eoVtp3ChYNwCseDpg5kTLJnJZsVeH",
  "key30": "5EEuvFJNRtJuMeCJp5mjBHPQCdbaSijuQ6RyERBQFNLPHVzq5ZrLCGBFoH9iQzcdV91sMAP7ajCrKuvM8i5xy5b",
  "key31": "4AgmfiZXxoyeiDqnPHug2dJHgpC4eTLhVWVmZLyB7xMfWFFVoQwE7S3QYzY8hw2tiSNiF6mH5GkK6edVvUdSAGrK",
  "key32": "453jwsfXcJumtsYLkaundSszVNe2JtVzxeHYkU8VwkfwkJ7sqV9KXz1DuuZ1Gph7tgFT3ktP8G4c8euCyVM3nEgx",
  "key33": "2teXFYGDKGF3YhGS1PdAfikWCVizE1H7EwdqG53HDb2gSoAG5tGPRBr9wGo8ubYSiexUNwSzkAyb978sexh4PNEr",
  "key34": "4L1zU3mfXtxKEVcjHJd5R8MAfTv4Y4JZaWA5diGqC18T3e9CvgCY4KXDaVzjcCEpj4L6QV3N1gGFti5KTpSqdGAS",
  "key35": "5pTvf88rA1BP1bFMccKyoSzRn62hF6rx28hzAkp9AUMvKJTttVXzcoeSKy7JMEEYe73Nk1ZgS8eNZTPVSQ2buCfF",
  "key36": "5A1BThVr3zM6BPWt21PCMxTPb9ogiosRmuJenjQZyWsmQVyG7iWAzmkNM4oVQZXgvHDYNez2MW3pp2qQhX7jXzuu",
  "key37": "ktd3y67qZzHGqUdVsPpAb74YVyGhcBpkNaE9E7Lrsdrmo4z6pWPTwXMZvJuVR9jTN2Rx4pFh9wH3zmtpUkAEkwj",
  "key38": "5P96U9TLHDaFg6Bgv8V6EayR2c6Px1MaCPWzRZ7mz2dRz2rcBjMnkrbudPQYaCp6evZ5Eht2o4CTMVGGNVY2tApi",
  "key39": "42NoJHgD3wt1K4paYoE1prndzQvCRUXuKLx19zkLhtY6DkN9YssGXt5yaE4E9GrEFagCAVKKv3HeAw3x3LZDUWNd",
  "key40": "4B9c8JqnQS8KZHgQEkHQMSkUF4i2EfhEYZvnD5K8pEy8Pytj2ukkt6TwQSDa1QrMgHeaEHWeggpjXNKjjW3bxXDT",
  "key41": "2mhQ2cPDXGGFBwHtmJ3q8KmZfRpkUr88vyahM2SbShhqAawFQ7fHbgmdQ7es6pnycdLnZmGYBuk1dpNrfwPFNmQC",
  "key42": "A51K7aCYSdphrpyFcmxsWM2qhge9HMVGRYR3YsJPiUHzqcrd1whDoFbTAfMXiT8HpwKYXs4MS3M6zNZXfZh6gdv",
  "key43": "kmC6cuzsoK22MhP7QyPGKoYUkm9fHPgTJ7UXYtDqLXm2RqryL7mzk617NfwVkurdQNE9jPvvX4atUtvVaWMURYb",
  "key44": "4SUshuQ4gnWcNmSV21x8rKYSgweNsUsy3L7mxZ4qGi5QKXhJdTQZCG2h2nKShRZpksBSap6d2NQokojpfqb99tWE",
  "key45": "2syJMUgPDGL2C6HzVJdyqQLjupdJEJXFvH3pE1qHiuTzRWVh5X2SJGKCrry36abG36iMoXkBSqsUoMdvFS5NYyFe",
  "key46": "4Nk9mmJpMhuj7qPzXq8wMwbJcoQBeEG9t7MpMf4YLuZazuhrTA3iqJHhiQaCgMh4YCwJM7c8WHQcn3HgUxAkMLKZ"
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
