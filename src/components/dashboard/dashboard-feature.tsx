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
    "49C4Z8kwxCxsCxS9DfLntDofdZz9i12wjGTapKiZvDr13rbmRKhV4QmGhKjs11et6uNYfWvdanagerXGv8PgxYFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LBKdvNCA9JmUEKHmyWrGt4PRL8g4f6Kb251hKCGibQS3GyeyC3BKmRAicDd94P7CFFDpFefSjSzP3wfqJXnADqJ",
  "key1": "ZHbp4cAfJgPVRjwRhqeKfUwY6kKeCCFPjsMF2tEx5jsRwEx7K5JyTQYgkozJ2pvvq5y1gbXXWhi8m8krGfCYNXm",
  "key2": "5v6CiJikXEs1SHzBsgWB2NVHTm1Y47aTAqFbuKNxesNTCQA4DUcpk1UF6kia5nxN36r6NUo1LgywgE46QXTCMsnL",
  "key3": "mrNi9MNGzKnPzcma4VDSwQYPZqUdBvioQyXLozEgjHW65zdvdSMrQeqpMpkVaPCKetXVe5bfzeUGy1S99Lj23GH",
  "key4": "4FcxHMvxKd5DHaSHDd4c9jZ7KaSfNitLqNxxBuGuXaWnfdseWptQR2oPadjGoWfXcrzicLtpCFaPLmopo3pr8yy1",
  "key5": "upMCY9kY4svroS3bNijVeEaPBT2pR1e3Bu49En8d2AHwgeQzmgXTpS4nJqojbKucGWCoJpVEeK6DMD5KQbQwfKu",
  "key6": "4GfX353JSdHdTR9ZNe9qtukYnvYQYEwqBw99axbo3hKj7k17YAPDW6ZLCyK7AUZLCRbT1BH6VQGgft46mBviMzpo",
  "key7": "2qYNhUEhA8fHabB4K68Wr8GncSnuma949uecCseDmBfvVAfFTTAqGrMc62ExDa5uuC8mEYNrWANugNtTCMCSJKVX",
  "key8": "2dgQjrEUcWKsHgmC14vs2E1nE47HgaASgJM5CnAPLa8sk2tenuHUegbmD9adA8CeaE6x6NP2gXQcsAWmvGiM4vmp",
  "key9": "AsrrRrsZFn9VkseCpS727N9GC7bQxkUWAekJ9gAk6k6W9TfofXvbjbX3jM6gYTwQS2rgwr3rc1sbCnVphU2oasb",
  "key10": "iS57CYjB5DSgE2j59GczPERoejcRDXCSEJfYv7WNhNMLYhdBCroi46ge7U4Faz3yJgtgNjtB44SUQiqu9x5pzRj",
  "key11": "2z1LX4CQq6rJMuKuFtwe9Ev1HauqUB9oqSNLCfSd8iWryDEGaPiUD5PGqg7XSPawt54Ehs89DQAaUuGe2mt5AC6C",
  "key12": "2ZhMW4JNsAsGBgwi6aqxvdo5wDWRM8YidjYGPPTb9mfQkTUDJPqqMWcKMnpatHyhnNmo8KmV5ZgtnPE8Srq4JfvW",
  "key13": "3jBak1kUHjCk9AYHjsFEoWr53rFc7321JGnNs6dNASwvsVqPqDm48gtMsw6AS3DevVA6yhJmTSjrAXUF2SBYekKP",
  "key14": "gZoMRxTC2eaurUKt6v9sNeDudsTb9q9WVjmLn7UMW86bkC4U8dAra1kfaaAaRydV5WowAcPVSHF6DqEeHyLn1ut",
  "key15": "5u6iMiYwa7F4iuZGFcNgbdTFM7UDeN3tHZC7EwGdKBPZRjgPantxZkG8MYSZYxZ4xKBwH6WMRJ4i8fv2XjGxjGBy",
  "key16": "3D196tnqF5QhygEsiSDjfv8nGBJd6QFzXMAaCRqbrDpiFtL77riMT9sRq9y4M8DzPdbU1Cn7KXsmpY7woaK4iArB",
  "key17": "ykEB8JYjYA7dxPYncQxWGTseGPUSK1su2HJR81u3TzWQGULstpnTv3itm3vwfxZVyQEMpDseVGfLyNi1pVARnQx",
  "key18": "26BBGJSfgE3mWpaHMGR993Z2NYpssRhKmVurx8XockL5YCfpT2ULxxASTQNcksqvFrn7vJV46b3EukJnMFZHrCRG",
  "key19": "3D6dJHyfPem2CeKbwWbiMXF1dvX3VSsLcCvTffLzRF7rbnCv5sjN1N8zxSobVC8Pw8GGMvsCS5xQf6aG4CefKoqr",
  "key20": "464ysvv2uPn8c4s2VrcPC3Hx3kSLdKvuGGaGWjZ77wJPeaK9qzro184T8JgvqFPKpw9HCSYtQHhCBuVmyUjL5A8d",
  "key21": "h4FdpGRhGFumjVfVXgvXj6v8x86fLM35QNw6CiapTnZQQKcnGhQZxa8WytfxeKoezjSnmJSActbRjPFXDEJRozi",
  "key22": "3skiamt8zKsKuVowZiyLCsroJu3RTXzM1REtDAZ6iGHtcn2w6ksyLrCSF4SVeDD38ZVnH7EkSW3xhAh5MFRMuWJU",
  "key23": "2qF1w2fWAyxbPYNixzf7RpNsva2z4YyU1yChJNTcgpygL1gieL4v5CNP6qrrHvkSPMicUak4EPSG8BcuS11GLB8r",
  "key24": "5ThyVeib5VFfhXpPX4hUjGhyafYoo4jdaqhaPWtmD9UeUzHvRVxrXdU9KJMJPL5FBeyB9dZZMfTEFAu6XmTQwiyo",
  "key25": "Rdct6Jjg1n3inkZdwaXnnzrAAmwEvReGjGWkZt5BdXqiRcB4UHdQ58JYhYWuUL5UpzVuBfYPjUy6B4Qh1DGvaaN",
  "key26": "7CTjJJVSvSJM3nSrWaicA18vq52kFXm2FY2a3gqedyDSnUbyZur1UJRDnykstWJrSzxtCQVAr5BTuQQ3fFcERfy",
  "key27": "2Tt1MkjdLjBeZaAs3AeaTJiENxVYANtTw286f6dB2VH1WgCx3aj8AabhCzrXvhVCAkJdXVAWf2RPDYCAM6w44u5L",
  "key28": "4odiJTp7W29jKkgnNdvio2thxoV86YPvNLgV69yKQh6g7Zvi4ucvpyskdsmKhCqap3LD1v4VJBYjr8w5Tuv9ThUL",
  "key29": "2EwfKUJ3vrBak75jR2L7wNwc9953otQgJJBkvhYL7T6oqEH9VvD6CnkMeH9Pt9yeWCwMUsFiCxwnhpSu6MH8imDG",
  "key30": "UDGYzUcjwTdDTA2n1APgWLFZrEHQXKRfKLTBjptgoUxXzaarxfSVpk8ez6snLw1cfzaS3Lpbbgga813SNDwkDdN",
  "key31": "Bi6WdxSiqPxPMXTBVgYERUxNK6FFqQ64iWThTNS2AWH3nQM4hGZtbNN9dAiTUguSp9n2E5ZG7N64w4nBKH8wT1r",
  "key32": "ePQKpnjqbVfZRYaGtDhdtDw7LkNmjbrQv8NQ88xLU4MCuc8bi8APsH8oMcbLNBNDzGv5zaf6ZitkKXTGUm5CuDQ",
  "key33": "2nPcgvy2YRhibnTfcUnDeYWA4hbE78mCRmjk2wDrsX2FjEc358bfqC943VaDDqx4ncaGHvyx9LLjiECLi7sjiAAM",
  "key34": "4qa6iWHkcBxSUyNCSoiN4KLpArkcDoQJKGhJVSHzJ1wTiaY533QWSWcdY6hi1N8NC3Q4Z1g1NMqRTzejVSq6Gh38",
  "key35": "4U8bZG6p9v6BGSBdRey1FuVQqXXZu3rGMipw6JX1q2KjTPFRC2XDjDVFB72JukxHtU7DyKXsNAWmH8bGYHhXqjgn",
  "key36": "4D7bUwE1hMfDa9hwRAD9fJA3zySZV6emw4svhBkH7PEUWgN9YbkCgT7V3JV73ZmuVjiMDHNh8xzcWXZNXnQrpG8A",
  "key37": "3omQxCZyp85xbrcj9b16Bx1k1Fenxf2f1JoBvWTvThCmFya3kHS7axRiE2J7keadnCocxfoRBmpGd94z6MUepQLA",
  "key38": "3iEywNiD7GDLo7xxhrowGuzxxVZR78xj8coVrHUoZcDRL5dX3KRZ32BzUDkyvk2YRvieqX4yobZSNMLPwpfopjVd",
  "key39": "5bfMf4gXjWdVYyNSAWnRjCNbcUWaB9BJTsAJKgwAtqDcRbjnKp9qwWbv23UjB75BKD8JEajgnJT2PLWh7s7pshkq",
  "key40": "RSMZbmkrsK223MThKT3pdNamZPCg8u2DAuQ16QA3Y1VN9drkGFXzaXDXgU1FvkE7apgYCDF1gNiEkQ86SUEM4Le"
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
