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
    "5cuAbKTSpRJ5bagyoc28YZzsxtFC6HRS1RZVoEJU9Xax2c1qpit1tEX5yUtQdUtkYusP8MpD9XeCWuQj7BvNS1cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGsLXwhA4dYBFPF3Jgj3MHu8cyoYrZQb6BFpxiSQJ9ChHAGGfpD3gKRXzYmXNjnNdXbxTmLGz4zXttX8wWmF5Ud",
  "key1": "SDC4SkP8Wx6kZyHBbAPAko9aXeHb2emZob7rEDKuzFT3tTFxwkMtyDY9ir5pPS5c2EtDbM4vnyLAXVJ6TXPb78V",
  "key2": "2Ru6R1gV1ioba3jA4Mwzogo6MoLWRhBgkbVqV8zZXCu9wK2SRo3ePCeGBfYota59GrCRToL2ELgPGJcyjgYvAzZo",
  "key3": "4s27uy8qRD39HDDYjue52mEZAuErkwVVYAfTTy1ftQpDymoyETkNz6W17zRnGmNkBmPHqhTaWxqkqNm8TDUYgQ84",
  "key4": "3eqBpb8Zdwdte9x3VWDRZFsq7kdGzYiuPeVCU9ZdSFG5ua3Q7p2z8rnbZKXnVBjCMzoYuXZD5uTpUKsAq1mnKJ6N",
  "key5": "2HvvHY6kN6WD3HkWgKnq9RMJqvUwghVQm6fHoSbG6h2esQULXy6Ryfosy5SWiuX4VnUJVYNh3Zz4yicrqK7oQFuA",
  "key6": "BLvQ4qboKxFbTH5M1HttUVEZSV1ne1HvisNr1uVkq9mFTC1FCBEc4DPksQaK15Ga4oYnV7fZKiiyx7HXhs2U6TL",
  "key7": "43BNB2thBWQE914e3ZnSNZfiYpuepPFy49rHQPeTfRj76TzCiQVp7xiTFuiUoFhDH9iz1fu1B1fNk7Dife1w1mY5",
  "key8": "5G4fs5NVYsomZSPEk1J1eKggsCHppRrLuzLb7vN76DLUMRY7FZRnNbQb76hS46D39f8Xi5ByApb85HEqcgtRqAaD",
  "key9": "2RdRSKATpUzoQUaKwkuMLZo6NrrpjnzF6YZwVsMNm19HPvCf2AVtpYxw9kvNPMpfbd9SoMWQ8uW24Y9M3ddiHvFn",
  "key10": "3jfomzgvpyxLkUmjLZbt3BNhQGp9qHfu1RSrUfw3egHw6u1q18NHCu3mnF1y6kpn8JYBh1mK3SYLJrY2zhjvktz",
  "key11": "5rakQV2ZvX7MwHkEq5WLVqWXHJd7TCKggnLgDuVW7FypyERXYDuz4byodYMbjy1EVmZudiKsBhJwdfLgESnL2XtX",
  "key12": "3wAuKeXzBetLRwJ8CYwxhRk7UcqUEKDn2DrjevcmxN82nf4TGqB7mUP5bv1jQWHFyhPcjyLzFeLS63x9LdSMLqDn",
  "key13": "5kVw5akPmme8AFYGhUPuiTBaFGzYG3QFsJnLLomTTcCaWwXcFkZhdJRWaUSsmzTiRGdDJVA6CsZ4JJMjFaJkgVLt",
  "key14": "519DrmKNGZbtYyh8CV8eYcJoUG93YquamHZJgk7tBELFg6XxqQsJJMvaqpM65nWRKNoeHQsRCbhkrTv3DzpjxKyv",
  "key15": "JHJs8HDMrRy82L3ExzTVCiNXNdwi71WeTrAhKNrxKuFHb6rpvpgtZSNcL5fJbfpNHeHL9pEbBZCv2CTcq17Tj4q",
  "key16": "58atTzfseepBjyFzdVjygLnqidmD14cFbGQKQuWiMja1MnFypH5ZspXbBwAcPgmnvBfvgLW4rFKGAvcnPi7TfxSY",
  "key17": "4d7bRPaX8qt6LTFTLeRf6aWUUDsmncFS5ifGxfHVUvP6EhAJMzCw1r9Dw5aTRAEpCocpYDi5EkZEjKe35zNoryja",
  "key18": "3VmWg8Yjt1GEj7VnPVCnhjFSaLyEazDFchSZNbVNSV3qtXAe4sQfBpFtXq6Hc4bDhj7ceRGuNF6pbDGGAMw8LYmr",
  "key19": "34uBEQeTAp5A4tVRqPBaVRJ5iC8ViNeu7vMRyW5NXh2WxkLKwRUvvbUkdcQDcZS5a7p4zH6kuJwdsFLicBC3Sq7i",
  "key20": "2yXevvuyW7LUfX2n2Hvu548ioYWo7SZ7Rx8a7ZfP8AWmy2jqfG4r1cP83rkrJRq1P9pbW93Ws1y3tbPo3f8uWcC6",
  "key21": "65iRjy6nj9b6K2t3sL9tfQvoYnN2riaiA5PYvCDRM3YUXWzXXwXPPVm1Xi7wquyx1xpZvNAuePXTAzM7Sxtwsqpp",
  "key22": "52LZKuGtQMs7ZhzZYGx93VK6ZeSHSwsCcwk9YL6yRFugc45e4QzPjdDhyXnLi4ACHQGUJwiGtnPD9EFdJiLEfNQg",
  "key23": "5nLAaRBmfwmVXgYMiQCRRdKtfddPVPtVyXpamXHZJJFaTvmud59FrkjjmcQGQ3AQ5QxHHEpjs7ivGikHSaGnhNES",
  "key24": "SsM1axVhYkbXKBnPcwEoxYBUzUZEHf6pQ2Qk9Kzh6hP2WdggyH5SU7VhszVVwKrWD1trxyurYt3i5r3DmJ1DzqP",
  "key25": "2zdHbZDcvGN5TJDrwmyFw1mgpuuyFiXywwJiJ6D31A93fgiahxshEk9wMLEgDZuWe4nTCuafN9pbcS46L6S2yxtw",
  "key26": "oAJCuZrzdp8UVF7Labkb25ygNByhYDUExX9zpYp5bDEcTxp69C8A4Hf1nKYR7nbBAHyL9KbjNjMPJkZpPmhbKNi",
  "key27": "sTfqHaXxarqmFBMRUjE24S9xsyjngBUAeLVAfPQDecW8GNqZ3s8REYMhecuBYcx7sR4PkWFmf6SsFYTjz3e3h9p",
  "key28": "5CRedXFd2vRT8NtnrhiCPoPfrA9QhD4XvSbyVmQXAWjzVrvH6GmzmMhMB75nCcL7jAsJ6p7qzZvMWXRgfMptGedc",
  "key29": "4gBPg3Zp6GVdHvL653Ju7pKsgp337xM3a4X95oKXA5uux54DvrnLWmXcdNThRo1UUEvLQvAEdyyzwiQx558S6s5e",
  "key30": "45Jnt2oJ2DB3aZkTtxX3n98PcE3Zc2VjnhgRU8oRZDnV2KsxrFSSXRTGTPGZm41mRyg8SVMkRLuk5GDA6nwJVqmk",
  "key31": "3Zwadmf4Ag7Qj9DGLgMuZZHHvidzTGQWgYKgCez3bKNJghhZDHWn595DhbS8mxc1vcAB2zqLg6EWVJXFgrC62F2K",
  "key32": "3AhiPHmTfjaxPq9C2EvjEbuMorPNTboccqbAVtsPCF9uxpMe4RhsntQW7KpZoDijcktD8RZ8PUpVu6MbtyCw5ao1",
  "key33": "4mFq4t83wyqmixJbNdcCZYRWcpsgZvvdYuFytKSSTXA4oB2GCKJ1qHS3YK1rBBJ5s5m5LbLR2oh1bPmdSmRTasxT",
  "key34": "5TktUjVPC3g9Q8RXqpNywbsSVym7gG7bNBh312pGhpJYrD1tyXGYwVhoKjw35TTfoTWVyjVTuecgbewBuwv8DA2m",
  "key35": "32PrAmd6i7XTAqrAaVDqNtmPnNoiJwoDzKuAk3C8PQCKwRs8e4MTYRYCNB1RPLgDahmkdCH1ioBRtuTnVTbTQYtM",
  "key36": "2udNbHaniLBr7bf5bCjg74LhnecRWVsGyEnhSVUZqzdYoyDbZaKJj9YtSEEATrCo83qBwD5DcpJZgEKCVCQ6vNVX",
  "key37": "5hh31WpkTM15H29DgHE8ag1MXZ7QtzEURRJ6DnDPAR13yKDBCFU2h2joDyaCfMxSKyEN4m12vFAMcHXn4seVYwLD",
  "key38": "3oPnLxXYTSEmUV5mbZfshwUXwXybxdLzfsgFfdH2MH4mSpkxxKtZ4fcXHhxL8dJPpWJ8Re3922ixV4rmgeYbxJ5z",
  "key39": "2hVyHXmTZgoUDw1Hot8hPLZw1KHcSyLKinNdw7uWyhQmuSu76UERTJ5Nn6SB9bu5z52pjM4m8jEjbAwCHZTLQV3c",
  "key40": "2orJzcd9TzzkxSuNC7wsADVGXpjEs2pyLdtPi1RbX6bLdzzA4sLbTuWnmLnbggGpK7nUEyGpxX4ETXDq9wHisiDJ",
  "key41": "42CmjdenM9YtN1j8pQnasNz98922hsTLVNK2UHGKk356tTY56hsiJwfkm5Q8aGyt6gQdBYDDiZVDqJV39ESYsxae",
  "key42": "57rzq2KpNy6FVkF9yuTmKQvePhQBVgsE6YY5VM7uBCtDcU8JtjZcxRNNHATkLQ9MAiCBW7QNgShK27QUqcSk9vjR"
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
