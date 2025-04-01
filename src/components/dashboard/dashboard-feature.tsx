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
    "D21bG38guJsMDxj1vEZR3fcFL4EW6gNKFiMoEA7LhhaemUENDmu3etaiCgjZF9fu8W5A74BaN3adfRp8HAWFkyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CdC4cme5sAN2kwoPU2czsiMgPov25P76FGJWsXdEz7PaMer8axmimcYnsFx3zCUPW2EBFmr2Hn7sHh9Aa5oDSb8",
  "key1": "Yw2JsshqWucC5o46suQAbEdCZjk44wwkaSQvQufTUbHYJF6NfM7gMSWoZjgrDvsmbopM7XaexmkYAXxvJjScwYs",
  "key2": "2wBy1gWhWFzNPe6rJE5Pve71upFPZ1Q8Jnpr41Hba8yxtGvrfh4SKn9Tyefadw1ooiSWcXy7R2PZeroAuLmqTzXe",
  "key3": "3GJ72uQ4G5pSTJjayzKH2beRWR9WoqQE5xMHafe4HdKCQAzYpnYtNqEh8LtRaX1WFUcdY21hrdtsW7e4MifpdxiW",
  "key4": "28hrh5FwN1DYvR7JCBRv8obAz81eL3exKTjMpENWDKnZ9GNA7rUHSGhLcd568dv4Dk5z4Ht7VvnhDCt2JPshqAgo",
  "key5": "4MLianea6ZGSEHynSeAtHXsDtrZ1jL3Z8i3pYY5soHeZPp8ZHWn529pLLrzSZKwHa2bKNhEjwzjdjTaFSjq9d7mX",
  "key6": "8R7ZxmKyeDeuPmP3REiUY59uRa3M6ct2RCiTj1aAWKk6ARqV9nrcquU6PdnrGqQ6fLMudky3tjJTgMXwA6EW3bp",
  "key7": "fF5aA4VXUcuwE8jT7gFi1asKUCMTBNSZgTbgwVigzAUDCjDdDRmzfz8g8ofADSchSd8AVWz6C9FNt1xiz7CcPbk",
  "key8": "567DK6eHEsaFgVqdFYDcHTazskPyNeETr3QuX3VXnKWviZ3cyd1ewfgdjsRPVNTiQJAGLHUFNUsUrsLTGm6UAsUt",
  "key9": "4REReRpncLm9x2AErLWNeqcTFrED5EsXq1BYqwb7H4rdRG6APMHJygiut1KSeAomzSJFe1URfPpCv2oFX36uwa7e",
  "key10": "3M9HEpgn8ZXat6QcK2UNMKriiTUQWWNnXMmUrKUxzzXxtQYhYBcwYyvXrgCWZaQd3k5UQ599fjj8cUpKEYR4aMfd",
  "key11": "312QC3ykQcqdueAAfxCozFe1q3jYMzaE5jtQi2dLKnTVu8R5AKuzmeVddomX4YedGre3bYXa4ydhDJWTDJW4zwdR",
  "key12": "4nZD2RR4QRoSVq6ZHA9HyHpp6yh635ey6ybc6sCkv114m1jLCnHU1E5fmbe11WrceCXnGpNEENjPnB9HshWxtMKQ",
  "key13": "2iVbe3Hj5yGCCFeXmvWFsFC1MskUgGjmpxu7FNVaU8easyYtzyqPMUTunsgSJbSxA8ZfwPLX3B6hZmJpebufH6Xm",
  "key14": "28sd9KfXV6DqWgd3eo2Cd3yZDLtiLnpouMLiudTShmiwVmP3KN7Gt5r1k8KufKoyJS2gLMwNDRJDLVtGhoAYU1yn",
  "key15": "44zXxSuyemnYxn3vPmHPsiSsDMSx5YGFqWb8qRizo71Bcn9azQUrtPaC2mkTmTtMHwVuLrdnys3m6e6twNg5uwpb",
  "key16": "2NrWdZCqZm8UhEhkmmUujsbht9a1gy16xcW97oagRPA7VBFFYrpEASgd5993B6TwAJXyW6Ba4CaR6gYeAvPBd9nQ",
  "key17": "V3kxicaVUBTdUkK7MG9UmEk5oepfwF5k195xxNRWPQMmHartRmDpLmFxfES1c81oDTydGYC5ZUARo3yxaEHj9k9",
  "key18": "5svHbHsKqDEPZ9XpDbnQ3fachE3VEVK8RaFJC5DCbwoGg7HhcA5dQw5hQ6Dpmgxq7zUh2qusJsDoq8Rw7nvE9mvr",
  "key19": "5Tvmz9JoKZwmWZ4nLKc23qYCFUDP1eetPD3ygwGTe32w1mEcmRgv95zqBosgYJv1mVDRs7MzY2Cwo1dmCnDzEvAU",
  "key20": "3b1ReokZZWwV9eXgsSsCurxecrwsTeW3iv8A39XgepEua6cVHD3cjb8KTcyW31Shh9t5oxbmEwjSTzGvbQHUrY7a",
  "key21": "5C5XeNdHmZEV9NLi2x8KfsdA1tkXxPN1drNnjtf9m7cttEEoY2N2kyVgfE167zKxga7GRjePwJqYxnyohEpDVakS",
  "key22": "2HUG52B1omfQsYmm1jDoQdwAompLAvZ3oomfDqKsGjZLRcnaRzqirvGkPeHjMmXYmzJyj6AnZGMY2n8wEgzoooru",
  "key23": "3G7csvzUcQCw65meK1UQqmxo2ADjAzVasXtyai8pvg8DuY1Am3UCtmRWmX1WFDWbARfmcP2s39N2Xc7bkxAYFabK",
  "key24": "3VteXp3ZTsb8Y1nuvKJjWmsB2VgXaF9A5Evw85e8cE6hUJmuPrWua6GSvjjdmVwBp2qZTvrMjk3RF7JkjJtJAkvj",
  "key25": "7UCSMW4CC9aZfTMkmpaAtRbGisLbRTnpchNTuuempJVsFDTwjRCX8bPU4ki3WcZn5ZTqdEETGkgL28M7N1TjFXJ",
  "key26": "282xMALk9Qz1tA3pfeNdM2ZWgfvgDrUA78fnw6CuHmEYh3ogJydnX5sTqjdQDGc2mdVfhZzaoUaswP45cBsnrKaB",
  "key27": "5jUJvo3U53bfPPPFxc53HRqGHNUWtr5PaGHMcFQCkcpdKN72itVyZpsom1RcCyiWbvjCBqKx3ZwruShtfE4PfTN5",
  "key28": "4MM5jgJhkB7PpGgLqc21TEvUPGvaty6aAufcT9Xr6BmHUHnQ3wiKgE53434ppCwW8aExhfvJeH5VvYtsgbJc5q5a",
  "key29": "5oryCiZ8d5SYm3uUiGVvZN95j1S5zG7G4hzSjWognuN1Y3QEbP294kmth8igegTB8FFfZATxUTytb7aQkBsLtwCQ",
  "key30": "5EkAZ71QVradDCjyF2f6AQhe4V1xdiTsnTNH2xwvXVyRUBDw8ucmDhBaQMdbFTRLAjdFETSw94ENQRJJHGCSrexY",
  "key31": "2U4eM74So2SKTzStxW76fNA7rx1aCCBqsfUu3DDJxZaBo4PgDPGFLGNchEJvY79f7WMtLECbDvJFhUvPvRfcHSJV",
  "key32": "3YqS9SU5x4Mb6V1yp81U8HqBoUUZUwbZtKmqCfCUDKquZW1hpABos4Mb4hQLWW9Wx9N3ZEUGoai2vUdFjrosLDcv",
  "key33": "5jdcEYVJjswoRW9DFNcwEeAshJE6j8XCHXa6GwmsHzKbagnxMtW7iuvdQY15T1QMGojARckkhQB5iQ7mqD7Fvfq1",
  "key34": "3WsZMtR3uDdCzJDvzfRvsHeXu6UnhAF6osM9ii9VBMUeopkqzGALkiW6cWXTofCxUoVK88S8dfEcqWLcRhBVW4V3",
  "key35": "4cqo6jdoqrRQH2X6gCXcgKug8jN6mqMcbFWQKLCgvQMEUJEzbL4voiQDVjmZ38kUqG2tdeZeD4Cn4Mi1H2sR6Jfg",
  "key36": "4QTLkxYkztqTFcQkudGSNFFFuGvz44ChuDRYqnP4Y2QJFwsdCpczFWxJQWe3ghbC4HqU4WrgraCDYzvSKTXnPYEr",
  "key37": "2BWsacAk57gP1cx562D4wCFzWnL23B8gBoAuKGzmFe24xucTntS59tU4czBv2UXQZ1euNAAJNbMg1UUEM2ipD7fV",
  "key38": "4FfcFtR4wHMqdmDP79PLMuvGVzqMrH1QUaqk1SJ1ieRf46sFVueRoSg3YbqkiQwgSHYMZWTqAegm5yejGn7WpN4a",
  "key39": "pU4wjww1khCcLkjU31fahV1AS9knWEXEjEvAr3dNGtusVafxmsNFTMWv4JaDRhryCcJG9wvZ5x87iLt4ZpKByNT",
  "key40": "2vVcb4YiZ79DAT2itPe3rQqCuN4onQscU2SsdVe8z96agHbXQdreknSNxPGHBARYXKhvf1RamdPVw2SMsN8WEndW",
  "key41": "3712jYUrocQXmt95KJCUGxdqyiLMDkk6jHMxAgXe5hhoJgDsmjrDY6fXHGMtsAZ4QfZ4dKKoXaKPu52JxUCju89d",
  "key42": "JQchZsEwN2W21LabfoCpcZu3ZhjnE3ZMksRPCRjb2ABwoVrnZXSWFFpbFdqSA4D9eeJ8VjzMsv54arnGaLHgQq6",
  "key43": "3qLVXDGVsf3a1hKb9wP9UNJeDEnyXF27YA5vHmLxyB9aoMxWrSXibvN2MUqW5E7WUyM9nZ2vohRKrZYHadVKw6WW"
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
