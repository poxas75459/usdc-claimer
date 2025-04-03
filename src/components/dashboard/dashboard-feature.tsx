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
    "ZHEJMgzmyeCuhXe8npeosxUTh6GpWyT7xmWFBZV7gW6CchBGhGUW6U8WJYA8dqzfcXsnZ2vLfzirCx9ZJBNHCQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qC7fjV147Z6nCa4G4FLvpMuBFwvHgJN59aV9GovTPs2YCsPbPnh68PbcRGSBVW7kVoKem6ygeJVRzTa1faMNAC2",
  "key1": "3aXEqvuraYz6pVvfQx9qLTRqUJo823TMiPBpirNNbVUvPoYXLLECARNcMJ5icSjjTgWY3AuoU1CLowmShC99QTzn",
  "key2": "66o1xJiTrvPAvh8NibcETrwmWbDyWqtJtwGtDF9auPXMdchTSPDppUXTaZRvPU2PsfTBVwAUtugcrRNdPm7EUQvu",
  "key3": "22cVvnAaZejEwQNBbDfFVHpot3yfudnQHntmyg6HweM2U3KXecPP8oXytfy4cUNxsKXsR492kpTnWQarU5DFnfkr",
  "key4": "4mFBD2E6gYveNiCi7wAadVreAhrkjZCa54VEmqT2F7HqETVfmTHPaK9suDzgmxd8vpYdmgucBWyMKH9Q8MfDYwQv",
  "key5": "aBFQtg5Y8wo1C9DnqoW439PiinmJPa3fferfAwWzkVCKQzazy5RznQGHTTAZHFgk7jsVfj9C3FNVEUwDLG9UDSb",
  "key6": "5kjHM2BbEbscH23sDUxTye12i2HxGLovAuUjoXyR9Gmu5fFfrbfv9anaaUBm9D5YkgH3vH9NFEig2DGDoXF5ufbQ",
  "key7": "YLgBhhFm7Gno5qZB23qVB2As5ewkxvHmicoNxvPZtK8faKX6UgyWVEz8zD68Q7SK86Hre4RANSGSqSBhuakuUjy",
  "key8": "5CRA6qQRvZ63QigYu3y1Cs8387Vouj4z8bRCTVUx3zVQDiDoqCsjXTButKSULGSn6HurLAx82vjRk3khjRdrbYw3",
  "key9": "hhJTmuxfqAEpQEtsYbsEnFTtuZkWWvkofXSW52r8gRYiLdFFnn259duLnTKNhhjuPrJjqV8KmuDLnf8mxbtx8ro",
  "key10": "37rk7bUaM9ZBE4T5ozh2WiiJJfK9XVA13ZNe49tx8u6hjWUmYLkUoDxBwm1ur3eTxDicMKAZkmPYiSYWRt9TvBPx",
  "key11": "3ZRDj7oTBPbrnZRGZro28sBQmUC5HdVfTGUJk77kHNzedFiou8Lh22BbvAQAFn76YvMb93KnBQcqxCd59Lic5cvb",
  "key12": "2pH3G5Es9N2iFaekdcPRPqspL3DbD35v4tjjzTLbxbgarjfHdGt8H9cBVecWaT7ejoHbug3Sa4qJWC1fERxk6uHz",
  "key13": "3Y9Mkz6Ypd6nLCSQNBn1BMtgeicHyLAhabxe4f6xJLtBK5S6ztpzifdaf5aKCdGmHnS2SsSey8AFgZnPsDbKkp84",
  "key14": "4nzj8UtsaBFP8omhhHc3R8rq2Xr1ag8nEbJCzcpNBkToe1nSdb6t2ak7ktzDXkNVyHZfpCnhkdNknDw5HuZdwDFk",
  "key15": "2Ju1kQJiaw3TWKsXmNCWbMJsbijhU1qoy2zLEtkGa55oHA5kKFMzfbPK55HAttj8xt2FrLjHUtjv9NTQfsZKhCRH",
  "key16": "25aaDKXN94We8Nxig1L45csna6WPuAKLA44wSEupHcXs6hjgpx7L5QFNKaDsDpxmTQXTKVHTine8ZtgukwNUML16",
  "key17": "2vG5X8RqPLH3QwPQAPjNS6qFxTFti5PfG4c37Te2hSjALzu38DcUCAsSVNDAHa27PchEpTryNP1Gp1rwKRySb2mK",
  "key18": "ccyCnX3ZZ5eKXvNj9Jo1iHk7akpanNywyJDwaYBoi7nPioThuCmQ2L1nagn4Fvr7Pj8UMWyfX7QCALZ7uk4p5PL",
  "key19": "33n2YuxsiA5CSgEq7oNsaGvY7SUWhg8Epqk3zgDL9ZpKRfnkUTxZuXCX3j3Ypm7GrHPPuUJfkEu6iUXGSNSsjHoY",
  "key20": "3Ws32SmNkRNqvu8472saHTzV7xcWnbdDf41dmQ3mFoNVTo9rzcbw6bEZFN64wnw7F2mvnqVS3xbJiMzPMQybnhQ4",
  "key21": "KAvQvFHpbcQbdGYMMSoxVNpivBnRh2aWMRqTaJLqVSzYVJA2fFF88NtAggsUAMwJAFUDW7se41NgA44o7kiDAre",
  "key22": "3jQ4GakvrmiRS5KnDLCuLTY3FN4f5hhQALwfj5kvggezDtXn8SGXqoPfLyxyp6VMjE1pcssYHn7ndkh6vkvw8kbT",
  "key23": "4gd5w6ToJdSPgJZ65YSLHk1ZHB7VCQvGvFEPiNTCHXKHwtoiMVHwdxYaZqnQkNnJGFdivWKRRu3QS5d5PWAyv766",
  "key24": "4MmrmEYF1ghaU2W51WhnMNWUYmz47Fw2M6DKFYNPAuK2SkinL7etsnwy4QZxySQR2j6rZeByBjxzQFZegefsgMpK",
  "key25": "3eg785Cen7vu35tHaM4tg86Ec3BJKzqmUgLpCpThvkYV18esJUUhvRjf5CPFGohBJaNXQEf5y3BFT36gqi12QPwJ",
  "key26": "5389iui5nCYn16qDgoYawTxWwvAdMBXfjjdDFMPipfX7YtYpMxYwt2yKX3GukCzBFXSvHNrt6pVhe9wC2hfTLQC1",
  "key27": "34Q2yRs9A7AyzmjDzH9J14CiAJisfjLQ1fTdiRPs8qXJFssYgEGQvBwTfae2WDVPjTGzEjMAHNtCcRMRs8cn61U5",
  "key28": "3WeqifSvibvov7wznhwQy2dNfM18TRifoDUkLY33Pxjhj3MybCPdfjWNEKbNqaPBmGqRgg71WxLFL6Ck9py8psvF",
  "key29": "5FdU7uHrJSHd89g78gdoXzu9juqaQisEcSM77p3eb4Nedhr5UpoRDNgSPgzvp8BNs3kmiJZ2FktXSRuzcip4Nqcz",
  "key30": "2VVs5BcZM7wnJKuHd317xXwWh6GFA4G71Qu93JDrVoN8uAfe5JWiteDYkRx3yXfdAgq6rgkNpgEMWtiFUye8xLzL",
  "key31": "2Pzh4tyGJh8RsStmQGDRWYRQpFt8TUYksPn9jh9MASMojABdMYVuNs3nxqqEo7E2MAbnGN1nhKPNhZfBZnztvoAY",
  "key32": "3yBfmAvChYFppi2izomuJgBY12rTkdTPWTTKdCe9EDeN8pY1AyZZEZn3dnrm7QJVqJEQgsxfockUeT8xPp1FfG85",
  "key33": "58Cm7jT1urrCwypRBvSCmuaz5fw28QYb3mtMY1Md73GTeXLn3dy3ViyTAtQnRL3kZ5vGeQD28b8rFvxHjN59ZyRT",
  "key34": "hyisfRE6uchiFBoGos2v4C29DuWe4o2SxnmbvSHLoTagjcHjTJw6uJaPguMHWndGN15wtfpNq2QUJyu7NMstojt",
  "key35": "5ryFwjSdTXjq1WrUSohGYkS4i1B5hetXPJ6gxwWF4uhHsmGurFpWQJcRr4c4BWmzyCThMofDXafbzMxaGQGipk5W",
  "key36": "3PA1D7e4mihrf6vNWoQLRdXLCV3bxddH3KJNh9WavDodVY3YQAjCQqguD1jqYsZJogjd43Q8Sb2vHMvEzfbPkMy4",
  "key37": "5XEBpA9e5RPiYDm6XeswYaAy6NAMmKXggfEc7sxupLtZ1woHJzQ8iceoeri9VYxh7ru7tJ1BbS9aUHTve3a2FgNg",
  "key38": "4gjTz3bAYaxHsv1kH9C5GUD6sfTsxww9odpqLQ4qQipQ3vh2opFV5YvG7CnXPKwXV9ttWkRKzFGLXJ7ABGX5urjk",
  "key39": "3NCzHdiSNAw1TiWxrn17RKB6sSwEo1tz4oZiLjLW41sZfahKNkwShnsmqj5BvQWRMWqGzKgpNb9f9kdxZUNtFygP"
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
