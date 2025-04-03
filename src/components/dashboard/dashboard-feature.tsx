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
    "45riNxVxNrcYnBdQmWoMbmgVMDswU9HqLMVRykC2wQRAidzPtwT66ms9kpbLFBcwBg5Duyi2qkfthB8SQtojdpfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sDvAqxJMx9xgxczmv7h1EaEgZVSYGQrRVhWNog8TorAACHTBJbScg5k7PTGMU2VwepgMe9tK7CFuAnz5jPv7XHb",
  "key1": "5u92SKQqVw21pvhzexDCPCqcF8CYbMhu4TMAu1g763E9qmxA5HogrpLz1hqMAojnioHPGezoe2uwYc69oHFc5LuW",
  "key2": "3nUQ7gCDFKoiDDhZFXmsWHWvP97XA4H72kUCJ1zzLWjU8SejAknMPEUqhRNYzznrq7bizWqHLrH69KxeZREh59JB",
  "key3": "4SdsPeHTYRSFgmQ5tUGo5xauus5NPaJdtUhqaFcAy7DDhzzdZy6qxofCZruhoQ7chPTbxBU9qrbmWVxZaKJVgabJ",
  "key4": "2KcawzipzA6H7sesrZGnqBcLpywB62jpJxAXDMYr19k9okhtT4E8EwzPbhUpb3kqzUF89YLuaoGRXShxBfoZB6DP",
  "key5": "5szGsXejRnskbNgfkxccmhvqqcbjuaf3i5HMagQazeLzFpBCeTe3JmNydNaBucgdLNSM97TdDrz1TkvLzBsq7U87",
  "key6": "Tvs2peKRe36LJTzNB3E65yNRMLthLhXmcgkgNK1Z8fxfHNf6JqNyqkwVkrG7xUrLpnSecSwcANMmfZBFcp7Qqjv",
  "key7": "45vrXUYFuHkoqEHjKad378DBN6UMUWu81pMhFJnRdw99dVJj1JRDesyBsaaZ15wcJfS1xY2xyF3uzYQdDLQ5qPGA",
  "key8": "xJdCoAUZdhUVCnFkygj9EzxB8TVrCba77ndYN6CqhzktyNFc3AWfSh8Wsw1kWqx3kKXKNAnAemCxXoPMfAJboSD",
  "key9": "2v7zNcbSUSqsQDL4uaD7rmUbibGZckEMSVX47nx6QS1fqvX3K835DgJ3JDACXidpF4tAdHDfaTKstzrzCHK9V19Q",
  "key10": "2Ws17TtCs6boHFrYfUWNcJHdtmBK1HGHSe4QoMvKst2Yj1qFy5dHw9yAcCVFfaxbDv8zrMZgfJrUHar67jVLQaWm",
  "key11": "4wi6k5k1FbSdZnp71MhGmBLfU2CYWwLKLKyzVgm728rHZNb1v3MAvUxWoEW82DpxQV4WUA9jzKYRjGqw9jKeus36",
  "key12": "AAFdLYrTr5jYMkJxyEBsgzfcB95TJN1uGYMk9ei7sFQsX4WtxAGVPREHjBDBsaZEYLX5kcnXh4pbUtXA6n86kaZ",
  "key13": "2Sok5b5kujJUuEVchzVHfuhpAgxJKrrvHpGBL7L1i66JxN3PJuK5wACsgwmBxmMFdWRSywq8w6mAr8fLRVfkmCrR",
  "key14": "4FLJFiYLcvuu7modBftKSQYDSPdj4rE2Ctnwhq7NznqzdSMCfhzTMV3XqLdF1yN3QZmm5mU8iYAkbDC2sYiH9hdJ",
  "key15": "25WfgvDEh9YdKndQ5exLoDWMV87cdVriY7AqPgkawpE386aT5xJVGJLScFFJeAWRK5N1UPyd1sfkGSD6Dtzi9DAy",
  "key16": "38mdJtDFumWzFXKHxjGCm6ubdHPc7fwbNsWweDGnbWkMYPn8SDvX5qWGcCS3SmSCrp38ci4baysrkbWAZp5VN943",
  "key17": "3q4vhVZMJkZja5dYSUeYoHJgoiQ9JqkgkHXDzHyMTwsuq7QfG2ugQW7TiiLRsBKdGyvef7rWBK253EqXzNYeBsdb",
  "key18": "QMCwnUq9KXc3iq6Qi778kgmiSkxaFwBBVRVjS3kfE2qWTKeL1U8Tc9o5s4rWeKJbibUvQUP7cawgJXWbMJ3d68s",
  "key19": "vrUDgeYuNE3bLvo6mPFkMLksNExvpuZvttV1JagCQ2TCJxvsorgk3qgUCiCdEKCGfhrNWTvwcgx8SzWfQaijUgg",
  "key20": "3PNk77UbnntdSJPVuUMi4MJgCvchTzEaXJKK5Gu8ygGSKAF74qZ3hdcvajBkmN8RXUuajbeyTUN7ZTXNng9TqKhE",
  "key21": "4JeHtDkpUgRtcjXw4KXzeGdDfSiPig36rfa8GXNuXEdZVWN2vk2MbdjRhGmKnVEzrNHqPJ1v6pgwidGNpf3psPYE",
  "key22": "2mEXgvpkjqTujoUcXecnwBKddHZ3DvgqK2wNDb4oFzsanvSz68CxVJPDp5Jc6ESpR9pfo1zwNygxc9tGxzbRACSo",
  "key23": "TZpR7o2BwcMU7zRv97jQHi6ynuMsTjkmfVEbh74PW1U8G6RwTdj7dwrRgHE6uLoHumV7fPwRzG5gkCcUFmfKFDx",
  "key24": "GBfT6PQgDyAk11GxNL3LQAcj2kxxiwocnecdX8Y6Ut68BJA1QLa5upX5BGoTAsvqfxzRxvgzaAbcGDnMFTSh8wm",
  "key25": "63FtLHz8yXQyck5ZZKYbE25RTcTeQKXy9dfQQuX2hdDLeiQRabS1J2jox4rbX9QtgPD6CB5Z5LvqotXtTuHYZYKA",
  "key26": "4MhkSdvwPFR2dft3tBKbqM7uFrfFVE3sRiXiQ7StsL6adFqsi61ZQrmHHNxPKEvFerNS4vxjN9sSXFoFH5qHGTds",
  "key27": "5uuh2szU8NUj17vDJ2S6H4YVKE9EYTkqHtp5BUxYe2RJcZnopyjVe7r2iJQUm96uZqjuGqRe4PpSz6eAmeUJ7J3y",
  "key28": "4NgY72f1aVcP7SeYaAgAmFRDMdTqsekG7KzxkqdT3unPkn1FdbfyNa2Vbf25r3ip8dPdZ2iGMpxrSzBgMLSAvRPf",
  "key29": "vypyfz9XsoLGP6Ate5KMLMGMuotN45xNZUDHURVvMiXcfMSeDUEnmtcsNLr1WTLCSv5feApHCvRc1fdiCatEoLj",
  "key30": "31mX1uBrWdfgo6KvXejtAUbyFGwgyB7sqSbqUkAHpEarKRH7EqpY1qwjHHTzbiWNJPpNPabifKao3wqToRgJRUzt",
  "key31": "3xtG8wNDxB9vY9rVKAnTs7Xhof6Aazj9qdza1KSj8ZKXkBmskiZC5KzmJ4TdBgSMa5zkZvwRdWaYf3RAM4Qr1Z6k",
  "key32": "4WihddDH6T1pVdQQqZAp6oexB3zrN2tbUyN6oAupiBJtYKfiofUVTRPPoS9mkfD3DfRkUcGmk3P3FWK1vdP5252",
  "key33": "4eGfpiSPqM6g8bf4N3vikaav8UUcsrTe2K24BdLGtoTCA3XYNbUmr3gwEhTiD4wruWUzsTTS1HV4ZNW9rvrKM8PE",
  "key34": "5XRLtfAbv7xhbygyEyQZKfzzQWBpHqjGdQ9fPJgZizsfQSihTKVb2PvFbSGVFpaBHnbd87CirSuCkiFB4BYA4eLf",
  "key35": "5BE4Qjak1uSoMGSV9eszEFb4nwgRSdWCiHqAe3cKjPqkzzedN2dSHb9sgSYWfL8FfGKzWSyjKc4tFtXsJ3r6wfUz",
  "key36": "BgxXSBc6gaX5xE1KCX5xutq1Fpa12yxxtTTn7faG4xk1iRLjrspRkX5D1tMi9zSSQRwMDqqZkuJCfxk7ppJ4Uj7",
  "key37": "533E2YL8xnyviLxMe34iQEHcv6N57NMDk7ytCSDhC7WnC2ybmzzzXG3MbUFzfVEa1BxLYX52dHtXUdz8qGHXpkst",
  "key38": "3nzoJ3ZRSyMh3GGFK1F88hL6aWsoEMHH2LzRiKwmgCtgPsLAzrMwLqb8vduwXdj3RkpRS7gCt7uAXrwQ5RcAuiNx",
  "key39": "knF1LgtZqBVApckWzUxETSmdXGu1Xn3rb7mScJSHvb3cizoRtZEmFDzqHDXNRii9rddJAQApik8FP8GVzByJ6CA"
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
