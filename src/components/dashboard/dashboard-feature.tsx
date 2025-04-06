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
    "29pXaEQyCKhqDeVmyv7ULZW3UDDKkH97L9UwxJqKavNsNsUnJEgvon9pY3VDMq7JSb9B1QSr5qFZNw4cG96w8ywy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jeb27YRugsLXJsRSeEALSAy2HZTfiaEibR1EwbRZh9F45TLnXraHVfa8HsuSfNxG88BJRsfQ22DvugkgcMsEDn9",
  "key1": "4Kw31cqYBSDL15btHfSxPD9mPWUpVTMvMm21jwgxbkbquKnw4X5HLDse9xBEiBTyKpcuLiLrwEzMRsZH9Az8JVx8",
  "key2": "3xnYgxwmHjPUFNH5UejHHcQtJfoGjF1d1ALqtaAuuuXHLKZDy8vzRYihMm8c2HdNcQ9X1JXUdXJLjQYC5ysLMNc2",
  "key3": "4MrzPJ9DL8ZEd778fYr2nPtHCBXAD8tYJe9Hv6YdYFtzT8LLAdiYmGZ9EZw6A6mphhMY9f83h5xWhRaVxWv8Ly2D",
  "key4": "JZeFaHpLp6SFvoMgHGe287DAKeU8iUvX7cxg3gs2rbD7vKYeYKHjb4j5K7pJduQpcsTw6xNegBgbBQgZhTPRYJa",
  "key5": "3XbrXHKeqkjbsR55Gfi7bPihYzrMV9fft6iSepG47AQ4UcPFD4SMdQ4X79dGD8aNWaPu7KzhE15chnWzcvQ8MEEU",
  "key6": "2sNK5eVPA244zxruUB6aVVkxv2jBvbCY3UjCj5Aatiu6MREmkfCJLz2qAGH3cTrAo72MeZwem4SZTJPmSfJ8pGC2",
  "key7": "nepmT5APSannEzTbvz2LYdv7wrJjBMw4CxBNKr2TsyANf4xDbXAFsSdtkF7cupYG1uWyKQeXTQnR8qcfP4fHzG9",
  "key8": "5FjboXKXQBP5ntLqFdWjFTCfn4buopur8dAxrixAAgzaedQhpNqAiRXQhRaRrMXsjyGDPBPxBKK6jWzx3fWu4TAW",
  "key9": "6MyzC8y7CF18pLyXbx8LCyHzVtDVSjkPXs8BWbhaeHtJRQnKH1wdXr6KsHgYMoQAjt1c2kjTLu3QgW9GSdBJ1Mh",
  "key10": "61Gmy2TxUdyfcQhHrxHZwDo68HTHK63eDNh85UP8Rd1AftfxkxS3xKzGCtUn2w6eU6ogUoh6o2VjZPv76Nbzy8NX",
  "key11": "5NzJsfrEvggttnYTwHV1hPTGCqZhHUT4x4QR1zDRXNkw39vBM1hxB5FueXekcfqwCq7ewGjZ5CAZdQ2A8baaiDmF",
  "key12": "4yQgMMgzant7XPuCNYmjZB6SrH8wDzvBrsk5MY1j3qeUvTD2SJ7bAvGSV6BzXJbUL6RTtKUzVoWadeLQJkLEQ3go",
  "key13": "5JwbQ9A27q4xmmQ7bLQzbsGJGTQfLbXsXRnJotepCNJyDGdfqFjPsgfoBwjp16e6WfJAx5aoPKDNW4j7Nau9SJjN",
  "key14": "64tofb9tKQWz9t21wnZE4U4zmmVsDo6WQ8AjnZYtWKThrwvCZf4ScxgYJPREHvJHPr8GXWh6TvNTivW9y2yBH1SB",
  "key15": "3HVDfDpdp9aDvL3rfYJ5nvUpJLXhgdUgXdJc9FyXUb1JMXs7kUkNepLNjjX3ky3aj2JBwQqcbXyXeriZRnyWoZMQ",
  "key16": "3ybx61sRpsc5Tyth75FTAMNPN7J2yg16VfvnZg8o8K2ZS42VMx6F1sDERfzdaUpSyAnzZTkTJjFnu8ZTNmGfXLE8",
  "key17": "3dPNSnscfNCNwDTXxrjSRFMi8td4o3Z2T75VLi6bcCygj9RqBCbJVwHEhYc3stNDWV72YvQ3uoJuDoMm1ZqHA24Y",
  "key18": "2BrN5c14epGuxFKtFfzz1dH2giYRWUtZ1DwTegerJVeBPap85xRmu8rASqU28FojEMYwngbVh3rB31jAkhv5SRQR",
  "key19": "3guqzidxNS9dLNy7UNxBE2EjGUXWLQtEG5kJokpEjYYuPqXR4i4i6G9vPddPyJSdgEbSUU8QCdic21y5cZLv3cr3",
  "key20": "3jJJkACPNezFJTTgVgBJhiLz88UVasji68EBWwByqRHvWUR4YikgsQQ7V796FHwBgT1Xcq6uT6gWeLsRr4VXMEw7",
  "key21": "5x4JFsjWFrk5VNFstESDHqXKuEyroxG2UZsMk12a5ejw7TxcQpHLkcfTDZmC7n1FfKfCE4Yw3DG8t6vq2M6qBWFC",
  "key22": "2Gn29Vp5eNJRpMjpJ8w6WQfNx7MaxyceQ9iaNmFpKrh7yHoE95YoJgTSJeFKq1M8t2E34cPtt5TjzQwqhFqYiBQy",
  "key23": "4TgQZc6357g9csdG5x3bX3Upc2tiMBkHh5DLtSuJszCPWZt1gi3gCBZgrBefVyGvPqvMKxxfy9dWnrvyesvbdsBH",
  "key24": "56GdgqJ4QhGfL57JGytbB8FpzfkBkjCPbpG1dch6KxDRFMhtcDsnjP9RuNenrxPnF7Am2uQ6U77AsaQDGrBk5e74",
  "key25": "4wMSJpxzRoxnGQe49acks4fMU51wkuMon6X7Mza5mXecJkujyDNUet3c8zkzu9svZnwR9AoKsiJyJAwpmceseH2g",
  "key26": "2FNoeZ2YgNyDtjunSbZ6RvGZkbyNqtso1fYUqLcgcT7EFaXHt3ZPvHm4QZZdEkMy6j71L7JS9FeJsi2asptPJZCN",
  "key27": "4JTh89VnwXqQeFqFcXwt7RFpwGWqyxLo6jsyX6mhS1P727mrMByes1MmGThXy6MD22eVEHcEf1dbXzTFfZSXcpn9",
  "key28": "3xXFi5XPDk3iEunfDTEmKagK9GJAhXQaR8uDB3dtig6wG3SfGM6p3iVLfDwfGcJWPAQv1fZBasCde3YTrXFKkBqB",
  "key29": "3wEX1wjWjGsHnKUqz64pmmcMpyrptzDXTv9JEPrGfEFcvk5h2sifTZA8o3WMsBQjQhE2gFvan4Y4vaTHpNzR1mnB",
  "key30": "jK9grZHZyjJNyThYzm6QuVuyG3dfHtBH6B4hUPDeBVaaY6ZANSBHx1ioqzAb19Gg9yJ8U1zRSrM92D16RpFQ8HY",
  "key31": "YxRktioCzWyzR4qw3So3TCj3XdC92AZNDHTzNh3bfBwHHriJjpGs2EKgAFwEeqaKqnony7g8dpBWG9G8sxRSNCY",
  "key32": "5mZi1BPM6ks1XTp66kjMbhtsrdsHQZjtxnrjXfAuw3PgWEihWuQTHtcrVtU5kgevNmtjAQuyMu7xBbx4b2Fz82XN",
  "key33": "4qTtBUNLfgtcGHLxi4pxDUqZ5Q2rnmeQXgW9gcqwTuwmeCCCXpnGhaMg2pU1SKcHXtQPhVP7Q436GX3ukB2Ue1sM",
  "key34": "3p4CSeNheciPB6JDPNtz3TK7Dv2RqjcqyEEuccyRLTbzT35bSK9PpVjjLSzyDUyLc76nXVnYRXU5pP71NnjFQyXM",
  "key35": "5YGNJcrQRLWVGshLRpMrBU83pQLmkPh335UmjK8vp5FEGCzjCag52tuEwAmMrvfvqWttZjSeW59WjSnHh2k9oPkP",
  "key36": "5AREEnTBjQupK8ut5X3tiFH5baV5EiAAZioNXTLP6dZncCzmwHRbc3gALdSTzHbzGXo8yUA4pxTMMRHAa6mepeVN",
  "key37": "qzEwDxYVMAkANQd9LamBse6dS4yYCqhogrviW2Bnx4gPQchkjhzpiDqwYgwCvSWNxm3eV2mTY1mcbE31PgbGAud",
  "key38": "4NsYZADZ3vpbP7xVVjLq7pidG3vJ6NJ3WLgqjCF1suyYTkUdhSQTHCiunwNAuazK6RXfYj8a1ajcS4ifzsUH8CSs",
  "key39": "2giT8ptQyeg3WeyuKMHkCMgYZxckUWPGW1cuBtNFFP7sez2iWeehQf6xSmkF9EywuEBgBUEYMfVFqVVSEMgoo1e9",
  "key40": "2dZMhHSKmacNT1u6uDXqCakk4ku4pjLC9LiUNQeBJdTogq6yqd39d7rra19SBtaV9EQ26gs4BzbD8XgB5CsfDhvS",
  "key41": "2DXdvGh9tc4U3kF3XPzrZNbJCUhyhxXtnwLoqR5R9xM8mNAWhENpGochSfKBZUQJothKDve6E2ZCGGiZHHRCLPG6"
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
