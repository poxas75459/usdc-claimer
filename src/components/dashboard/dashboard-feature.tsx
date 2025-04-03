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
    "4kL8bCY9gBKWPsmSFZs74b4nfeQWwpYCvgHuAcXZfuC7DH8sCMrE9qbXeupY9mchboHoncVKxsw1XjfNUVpdRFyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sWGbW1UJKwV5WqeXhdZz1Knu3bPqxYLgqsxoBR3kXRYog3ZBBaADd2Wyr6fENRPs314mXgXVyLni8sbHiQuyqbQ",
  "key1": "fj8HLZzSBPxz14v8bf35G3zDoqU3TLVWXnLR1WBbqMjwV5Fupuo5NRnmWcYJCiuGNih17qsUAjvEoDAqXK1kAMR",
  "key2": "5uzjwQ2CovW9fxXWYrxPnQjdbKnFZ6tnxboPap5L3khryLWmZAzqcPtGLnnwPLdFbcQhkjnDmTbhr6jsBon7YXmN",
  "key3": "3pkZC5PSNB3rU3gygKjHMmCT5yhv94McBUbwZpRUsgRhcGHkDAtbArH2GG2pG9J85mMS6FjXMvCuczyxMTrxzqJ8",
  "key4": "LYauNLzVRfaz8M2tw2yzFKThJAv5jMnkF23MXPGKyrPEFtLuyfahCqQGZND9QoPHQeA56wNKeCrT79dwuMTGLC8",
  "key5": "7U6f9S2bKNarFthY3StuqWomo5HAF5imAp9oTJi5pi5qKUmBkPTvhKy9EBT7hm7b7MpoDyQu1g8uV6a8GPWB7e2",
  "key6": "5LH6x6DyF1GnDSynSMjCPc3j91rQuAvpPfZHWEzG9jUjYTSvvrqhw59tfAcJCjzKuvvJxqgb3eDJZg81wRygVtsV",
  "key7": "3e77kqGihxL67uRPh2PmXuYTP5UiyaFJ9nVZJTEqoV5VBEF4dkcHK4dmwSGYbTmFj398tD69z4u1tR77TJqPTEid",
  "key8": "3CWuWA1etWNj1XJYDk8oDw6V2gZYm78BGHKXS4uRWSVJArphbot21wLNzd1CYkYhYbanCGLSbkzcon3pJcbhHBHh",
  "key9": "34KNcgG8qMaCstnseAAL1R9heKizweAVWmQoWSj6F5EkvMS39BY19NSq2pmJkqBmShseGGJayRDBfrwT6k1B3ANk",
  "key10": "27JT4rkbFzhRmvk8tzzWuYrZ74AHjGCb6ruLUVYpvvjXTXoYazYbaJBuKd6UyBv7CQHeS4wcDr6xWs4ix4582Gre",
  "key11": "3gcFxd8HUSE2zDkDqeSNi6ZN44KZhPPHQW2PHsvb6mXAKmkvJH8DnaN3LzpAJGmEp8fdB1mrUJnMa1WfydF8qXGu",
  "key12": "JB2yifxjfuckwCsnKtWBxwTGh4Ng24SJ3JtTdqrtyyXAZ7Q7Y8d4PWSYe8GUSnj8R327vAqRiRy1xxx4c25LZnB",
  "key13": "2DVjrzfuqvpAaPvPB4SzUUZ8yQNpqFdUyVqV3YMfKKxxGcXR8KdhRF4i5G1732LiZC6aN6oLofasXx5L5VxW4ae5",
  "key14": "3YPihzHsrVFKWY1SZy3uhR9b4DGrgWfXqgQMHg3jRuFgcLxGECHSMkQ5EYg1C2yaH9K6jr1nFxh2rGMusCKYWULd",
  "key15": "4Ecur1E4r9vrRbxBmmNVYg9cBKGkvU5yVZt6Lw7CgJfRNRyJ9Wd1mgASuBqesAqwoNuYJL1cb2ZSwqHo6NDZY7MM",
  "key16": "2oLYwaNLpzqK7hwmPU3U1UeRxLrTHFrCKtHRzDv7CE23CQUwT6mtS3gLf8KtYizph23VfvAM4smq72ka2dA3LPSB",
  "key17": "3hzHC3SsX4FEwbYVS52Te9ogPiqzmMYPRb9DbQ1QEhkba8aiD3EXxwND2PQxmXQWoJQrG5dE2FkKEENUKsyy2dRL",
  "key18": "5sWiMXUbcLHwutNw3w7MTnthfDnGws24nEzp81cQ2Siw7iGmPjgrEex5rxcW9P5YR1HaHEBbyoKsNcBZa4bswa8N",
  "key19": "67V3WTGtDKFPZ8egSZHpdfr32HBtn2JahuCvN4cn8SRrEhbbLyTUqhgSU3TaW2S7r9UEzGPPTTsZWMJYzPKwDErQ",
  "key20": "2dGFJm6JfWfNF9BuNwDdQAnaS3pwvVUbpdJHbf19F4mVcFXnkFtJMaW8W2UfAGAg8Dv1fCYGouDGJxN872FkWHwx",
  "key21": "3JqRCopYNXBvSyP9JRxGbdp86m9VbNvushB6qmpu8ixqdq4jfNo3aZBkREDq61gqqCrBcL5mbYc3tahjSzj7tjdG",
  "key22": "45e1thsMiwui5TZeYh5Qn4vTKNWzjXTAJncfNLzCEyZeyCMycg3dLDbxygamPUKWSR8bucGdNojwqGq1R3rAxgx3",
  "key23": "5mCnjV5YmUTde9eFeShDVotMxku7VvUmeNcsCqQXEerSDwCgk3pKKzpKg5hL33kt9CFT8zLNG4pgBss1rEA2fwBe",
  "key24": "2RufeRMrRZCACxWNwvHAxTMuRxzvsBYGePmFfJCQQg87NpyJveiJd3egvfBXa9aCps9YhxxW3HvyWkeZMzPdY9Py",
  "key25": "agx6qER7hFN68ZWx99aRmmwonotYwdB6HsXe4zgwUjAKVMcbKom4xTi1E4qGTTiMV1KnrsFgCfnqTmfe6H8em4n",
  "key26": "4TT1EokBYcaQptNpFRUWurm7yMfCskLjrhP6JukcZfLAsRRRRtPy1sR9rr2iffaLjga4XVF222Eu83ghykkMjAda",
  "key27": "2vgaK6wjYBqQWziA6P4ruteHdAqFSyzmgNrBzmm6sgW2zin66qbcyVnmmPNfMnPPQx6XW4tES72SMqky9kA7YfVS",
  "key28": "4ftMLFPsBvExminATFLU2Q6ETxPaUDnWAwWh6iaCCQGsFumMFUXVkH3ZBWP6LcQG6BKjB9u6iQXPF2o5paYi1Qms",
  "key29": "3P28CD3NLBikZiLpfxsmZSh45FLDYedLqDKZ1ef7Qisneu3ZhCTrVRyk9BkfgcJxTqsApfH2es6RSVDkDEH4gRqH",
  "key30": "3APBzx5YtxmntdM7nyYY43Xb8M38V6uRtAzYCypBMT9Cveun93G4i8cjcXsRGJTgsbmhC8tNPWinvaeTvPKvm85S",
  "key31": "36CfnCozg5VzExcGr6Hzk4x65bTBUP6wX6q6A1KLt1WDMvMZUsCqJv5C4w8oRuv8rLV82MF5RonQtrDAcgUvsN7C",
  "key32": "4tFdUXQoDB5gdN9kkoYC16gjCwimHjH7Jnpczdvn9u4hZcSEyGQnVgsWbcXjdTE2vWEwhPQxNtTz2xmxP6MRKQ5H",
  "key33": "85Zyx6sos2LHFAmxt1cv49PJ6BR6vCo2Xqiq3ZSSKBQjERosn39xnbosSe5bYcJfu5H6keckKzhx67aTBovfsZu",
  "key34": "5goeY1EiJXySSRoUzdWH36Qqicx1VGDwvQcN7wqnLogyPCuaeJWyXGkpn2NXnCA3d2sg5P1g7C3i1ikw9HL1cDCc",
  "key35": "4QHUTHBczLrGx5Eh6yytAWXEYRrJrsc9hP8RqEAZiTnuro3g9eUmNTMvjVm4DdZQFFvme1nz7ak2xSB545XjJRDK",
  "key36": "4aN4hPuRaYoGUqKnpamrPfYJQSffxSjNXC9qXtXAgBFenKtKEoNSFa4SEAPjxr6FMWW4Lkz9kTZBKy7CYnXVbZ1D",
  "key37": "5hxpbppzJtmQRep9ri6Vt5TnAeVoBTRB7AeMkXS2nLoDe2tnWt47hMvVHUHBhxYRgQoXWDKG9X1nrqARQsCJSEA5",
  "key38": "2trMcDbtfEwaFKKMsPSCQ6Pdr9M9xgyGrLR5ntNvRuevh2CJWJ9kv6mmjCWF7K6LuERMDbemjN3YPJB2Go2pe43s",
  "key39": "9pchFdzryQooBWjMijBVjgLX8MW6fDQBvPXqsix3pzgtDU3GDAwBRdCSHSqc5yDwD4tSrFgyvJ6upWAWwbadY6M",
  "key40": "36z5jBx2ouzimQVFkS5n6jJMXqaKoPAcGgcdL8LREkNYLBdkp15udHcqXarycrmhhYEGpXwj6UWPH97dCuKFHpoa",
  "key41": "4ihzSEZ1n8UzfswcAkbTA1RwYwLTbzR5NTUied6UdPA7r4GHhG7NaEmxxqLeg7L59WDSszQvaFhZXnTGFefM61RA",
  "key42": "3vAvAc97eaKxAmfvxkKCdhwbuMbdxeRBb8U6GMv9AnDoKLQ8pHoaxhdywrGoqNGeJcyUnoZLfYjkboGuqoFLM7sZ",
  "key43": "w6nNREV9wcT8z71GwopEmemMYGoVbi6G637vMjZViAoY1JSj7pBN1WEsuisriXKmaHsBt4L8HZNERGe5JHay629",
  "key44": "JvPrHpTrEtQhWRDAByjeyovjZArf3L6jNuACZfwBuB7XpvzaxPmen6tEKddARQqHvANtcK61ecjBrBzFpD5N5qk",
  "key45": "5NK7gwy3vnRQFdkJpCSQf4RQGdjNQfmCz9iPDxfT2mWLRhPjtJiXQ9rWMCwc1uwf1KGuEmV9mSQqZRL3eC1bUqNo",
  "key46": "55evvqu2RCpaN8anvmYjoySg9oAHcfZDNSEEEEJiHRATF8VT9px3iiQA4Yg1zawSE1mWumeUSg6YroS7Eeg6uSHz"
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
