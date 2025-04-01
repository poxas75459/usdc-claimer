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
    "2ctcUsDdmFzgDKeXGmzpNPLmDS2EWzoTGAKtPKQY4g7mXbPHXBnd1MgQUdZuHuXUePqPR4jXUEaxpbcF8BFTvg6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJeCf6BLpd4HdVXWYr6R5tr8GwMHtPQWkPHQtoMCx2iHuWLNDXMcxdpBc97ajQmEQwDakebJD7mzSax9B7USZBQ",
  "key1": "8fM2w811QYaEgZ58wQLkmkphiWiqY3ckEcLGnAUwQLsSH7EDyysBzqfqS4B2N8Jua3imhu9ikqaGWHriZAAx5uZ",
  "key2": "24diMWQMTYojHiMUmm5P41ikSSXCQiBApzrMTK8mYNXdzTfCGGSCVuMmQvtNy72QkF98KinTAhG5q7sTgCTv4hwG",
  "key3": "2VCJx5Dw7nDWhsmWJzETAaa6ZeDduoKUT9MDGuY5pKbepnUgPGEXsf7AoVsB7SZvNmXC3VoycNexHAT95ffUM1Fc",
  "key4": "4pYwcexpg5HkE2aXfEURBCutHvwyvepQ1PSJFHBDwqRzANsEGJaTcxcmXvkbC9FcyTW14L2Tm9kTwGtamnguB8S",
  "key5": "4MnppebcMQ172HdaRhDMK7QXwd3X398ZeU5GtU5oCmJDsL6UYEcpyFXe8tpgHwg8suEHa7D1eHAN9QWkZXszbkQ4",
  "key6": "2he8jyVh2ppyUnxKvSqGSPbzwAYSyfeYASm6EvYXXpbNTtZgZQ3LC7rJiLzaAu8hnkWw2QtwFYVh1bxRWBExDjtD",
  "key7": "5cobVnuG7pZw18QdyBqPEi2mVj71rwVX5uLKH7ucFDrVVunzWTni6mPi8wK3AB6LQdjHfqvcKSWisgBDuTA6hHaT",
  "key8": "2NhZ1n8djWDuiDkUgd7MmYSmw9Wk9ZYww7kqpfGdqG9BUVHwZxnkzyqr9s9wvKboUTWyhJKb6fHeKHrYyjFry8tY",
  "key9": "422hrFYhc6kV9A7YSHjHZRNTmEefKrVAMMZtpiPP1Kf2q7vaPW4krfeBgmpY7jNP8796XqK5PeaZ33ZWc5KiG8jB",
  "key10": "2G1eqyodQjdvT5GHbbyH69p3Cxw6xkazkxUDCii7KiBUZJUFqkBF1PKzxTpzSyTNeeZLg8aSbrT9kGiMNJURLmSw",
  "key11": "HYk551v2g8t5c7XKFgq5vPsSqVM8ucYNmc91uzYWAANBLW6mDuKVzvADpsuJyZV9BjeYz6jPKcbwLTSKVsShyP9",
  "key12": "4P9C1avvT1DH4veQpQ7fh2JSy1LxBd7Ez7UbvpVWmsT2voR61W4MzF9UcwKck7krvigLPjDE4kvaE26ZnrkK1xmA",
  "key13": "46fjmRGvVKonjznAv1Y846sjDaJ6tYjNCXG46JTKaBsbqeoSFutec1a8vMve1gB7znA6RQLUAhqeAX9Y3GFjSgKx",
  "key14": "M7M9zbPCtUxS5nJcGYrZ2SSEFnBWTgt4bNAe3uHY35qhEbFbg2xFexffTY71nzLHTJpkbt7SmUyhHbiLXx5zgAV",
  "key15": "32W63PsnmT9kqQirCoVwMj45cNs9pkxeHjRLBQEtXArnGAhoAQucHRkdhBihTiFwZhGXMfKvhXAdgGVbDMFZdaYK",
  "key16": "26CiNH5LbsJV56ammTGbWKqHgyLzxFNiZHrvmE2QN8NXK8VABzLZHtnneHiGymqM4vuNUgvUDuGEtUJrYCJfRxAD",
  "key17": "61hTbNMyy4MwveztpZFeeZiynb2XRqmhp1Dct6gbsA3FQ17iHujgWaTzHRncrJgZnjw3cTfcwHd6f1HEzdAdkcWJ",
  "key18": "4onLmeHWXLqHQ9bbYqSTawTMSujWWbuW7uqxHX9XeusbMwYb9a8XkTgwQNSFUA5nNSvPo6AgmNXbdDTnneENcXXC",
  "key19": "2dz56wqPVsnxgj98GeuZADH1KQYGfQVPWyUEdEatB7NwbuSikDhvNdCt9faXGbWswMo55dis93fGcSR3j664cnpm",
  "key20": "4HyoNgNgU8CxHdBe6LoioseLTtG1gR1uRQPP2GEoRbtpE4dKFVMMxvwLmK4u8JqMUuA56epv8PWkf8cfV5MmHj5C",
  "key21": "2JXfoYNzkEKdqivVxxZAXhGM7WGhmh6FxGq7kxBHkEUe7vGjeGjAD7zFGyFsE1G13mtRE5L6iVruF9DHAh3iuwrd",
  "key22": "2qRYfba4A5RsuSbDSSBDpn7ZsL6btVQD3T6sXtamAPEMDQ6phpkgHkUg7rYdcF374Z6M7qd2vQYGYC5h7AXp1HGW",
  "key23": "2AzhEsdzhiXuRkiYNjjzRMcpChqmhHsz7wCVnUdXuYd9iepj6Zh5cMCFdGr7hwPy8pP1SBFaDs2ppfD4uNBRv24s",
  "key24": "42F5nKocuzUHxRqSY8Sjy7XCucZ4xeizeoSE9FbCtUfU6H6TT5o3VJxkNBQ2u8DmbzoXKGXaM9oemQjaFBsmML9o",
  "key25": "2bCR4bxerw6UdrzxhFzBDqP761dB6d2LEUiFZvx575Xc7sfvgAkTw7N3U4AYpK1Z9S2PfjcqhV7v8VJmmfhNiEmD",
  "key26": "2DaTYNhn2Us3JPxbWDoLfUGkeCxKEiXxbUDj3bHq3eiY4DETxS7qeH9kUbQh8Th8ty5wtCwKdsgekfUijDiA55fA",
  "key27": "2r2WM3ZPguEsgkvYS9EUnPo1xY7fSwfxYVHZFeiL2kTuuaRfsEtQPPcuyP4ov5YXRuMkBX91HgcHNF6zXA34ZoH3",
  "key28": "y46nbC7aq2xwUM95uwmXFZLT7pmd3RyW3qqds2BbuoDdotNcPLHvjD2WbR4vT9Mu2icGdA2KvzqYAaoMo6P2T4b",
  "key29": "2mLCHuYTq6c9GWk749aeSQhjaKEbRXhJMCRA3SzzkM5z6V5M6zMnWvzb9i3iwY9ma7nMaLGoQcn2ZFUJB8XytAHx",
  "key30": "5bhArvaEF6R6AeJF8sGVp8Ryu1x8uYvLqodoyTiCCSinRSqtpE4X6hADKxobALGbu9NM2ErnsUXsdqKUJQyb2esU",
  "key31": "z7w56qSKUXGbo7JtFzbV8yRSYnaLjeH3gxm28z4Tufmb6Nezw6y7HjGawNwjj21anQucPnZLcda5B61hrPDDCLX",
  "key32": "4aB5eHzCvzY8ZPdTN8ATry5ryVCEWkWtrBP2fwr1TSuznZhyL19oX3S48TDs55E2SJMpJcJj8yy4Qo7rNZCNnV4F",
  "key33": "38C3Qjdb8NhfGvpBTyXAqQRwCJ1xuJgDe5cq7KQiL2HAa51NkojrPgvY2wcSo6SibbzG8f9ZqpigkSapzN4RGBVT",
  "key34": "4TXLFJctKcDbsqNesF4DFaMgdbhmUnLsWfzXgotD3s5R58EQPLdXKS1e6izF4oifs61wN1fTKuRYZHrQAeW9cAkU",
  "key35": "2r8N35YEMxZxGPJfS1zjiPGJQTcrb5emp8BGRMbBoLeiuRFSiS3gsDgQipBgqj7cz47gK1YxkUNbrZBNUEWHh3ze",
  "key36": "4fswHjtXTTay3v7BuzQUTuohmMSfMvKf19L5nu9yEeXHGJnaAyYqyLo4fKoAq42uUugpr7R55mrFBavkzrv3Fdwk",
  "key37": "5u4AG117hUHewiCg1DW5gfQwthrEnhM72Nazvqps3sm5cSjKmtALkmP4vaUgqL77U8X3bS3JeSu3xnSRnEBnPypH",
  "key38": "5dBqfHqE9BjB8TX3rtWo1UjcGoif8Kps9mXHtPKvXxb7fEc3USMZQqqNu79xTpBWssxCV4mkaQCuZUnn6h3e7nVV",
  "key39": "566UvsAMaUSRwvjiQsoAAeWCqzkco9D1R4Z3WrSxULieN3y6hrhn8ZsYjzxzbbYHXQiZhnpEo2kDxUy12sWB4tqV",
  "key40": "22ESCwFj3qCPdfM6J71qq7eKjgpUkxUJHWWdx3oXQcWhCugQxycsFECk5nYTGndyRT3Q9JgHr6jdu7zbGj54enJS",
  "key41": "61FoKcqX5GJq1CuE616wokbvncU6hbJkVNLuVNWSUMXBoQb81BiuGKEyaG88RAeFddb4HgtiwG8EoFE9dYVKcNS7",
  "key42": "5xAWDmVkALBucwdkMKMZxszL1wNF7UAedGU2JxUwVPJQRhxABHgewW9cy7qYX8EuHH7sGUHtHow4SvchYERN97WD",
  "key43": "3Ms1BRP85ob9ZZhKgKTXoWGArUvteNCWqvzMZbmtdWqPVDVFP385CrXmSX6EyVtk4afcyt8towW6RXvscuc2X9Bh",
  "key44": "2EcU7QpupK7w5wh5AjT3BK3G5PR8fA7ZtDekxevkybaecjkpyHnTw3DZUsW8wZZST6urvsgHXwzSY7bYiDTYJiRA",
  "key45": "P3N5LCgvypuLgEg8ae26VW5FKWEn2hFF42KK6GvE3AVFBuHZVJRQGxR64Xibx6nwyyUqy9K9p4bJPoZjexMufww",
  "key46": "4enMtXz1hmA7TAstVwp8cGjYdQmM8RUKTcr3JqCU3Njt1XKCfSmEU9Zun75NUNkNVGmpabDqEZ1mK5wUhU7j8fVD"
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
