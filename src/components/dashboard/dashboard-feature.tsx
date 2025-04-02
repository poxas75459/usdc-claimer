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
    "2hY5za4ALWTb4bk7gsJX9pJzPhQ5YJ1CDJ5EEocrdCMSpMoji4ki8UQoAF7PXoFND7Huzi24MW942CqnkK41VkJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dz7Cjkn8APYZBbmjgurZGyjA3hNgrPN4xDdoaGX2tUKZGGYBWPLswakgip92ouPegAur1Zmu2jMtdWXG3RkCTV3",
  "key1": "3Es3nMeFJtckMq3VMKh9vSx7vLcjGoCmBU5ttprqVAppTH59SHwNgp3Xu7q3pTSBwP8tqA6caT7QN5h6VDgHzKju",
  "key2": "6r44Qtq8Rd3eXhcmtwBu4t4qN7GPokwKzXqZzvxKs6Sfu1nXoTTZqngb7N8VHGLjMfzJZddH65PSarmAW8aq7hi",
  "key3": "5WsWXuiuoPWi9H1fuknCnPzaNFGzNKkaTcdTH3a6nmztnQMzhSDntupYFDikUT9yrQn1Qz9ySi5EC1Nd72pJwfYz",
  "key4": "3T6aYdQjXocoP3hLvN57L946xpus7LmVb7vPp7HwNHbM8zHiUpdPdHBg3WYi3aVyUk6a1YPv5TuV6jUbbnUknLZx",
  "key5": "54rWVJsBCC9x4Sg9YbGNSznepDfTzKYWHztMFWggxgF99MLcAmtL3QHrXyPFgJYHSMLBcmEBhFD9NQGix88Jmpue",
  "key6": "2udUjS2wJfCJTYTgbFBxbejBQ4ngYFZaEmGaYryPnZsFge1d82RQqtZUv4VPh3HEHpYWAuzgG4JDaRJMxZAHKaSk",
  "key7": "2M5BHxTY98ZhkWsoJW77HNfqoFqTqZt8CALx2AhC1dQCYWkMpqXEGswkUh1WYuxjeVp9ogNUQ44LtWbBtg8VHNMj",
  "key8": "4oN9GaxMjLxqVs5jStjWkqGDtThCftZ4ZQMJGrTWiCznKuxoErgPUNrbxp65twrpXSKkeGjPNAVqFbMm4SBAK9ui",
  "key9": "3oqZe7pmF2nT4MWFwUe7pjCG3GSKvgdzauKRjeFY2bpJXZkz7ypfjSgfJi8cpFXY5g8Fnb1Dv3FxaFFV87SjFyrm",
  "key10": "3m27bKCRALZSVPfzyGEPBDuDwEmsgSinayt8UD4w9ZGfZahVZDhcTR4e6rNQTQna2Tw96JwSWF8esbaeLt23vhsZ",
  "key11": "25G4UXkC6PSF9tC8bwqjTSPJ2im2iceaJVhMFnF917bgeb5kBz8o8nws6T8avdeC7eCrMPjouT1E9ZG5C8GbTjXq",
  "key12": "5dnFavZoAMfGsiyw6XdEqSaYfTA1BEw9sjWmwXMb8QQTvrn1AgVuFbvXY33dYW8LwcK1ShaHJNGp35Qw4t1n2rz6",
  "key13": "UTP2zDjLoEMeEgTMDH1ARk7GahKdAJ8zZoP3VG8uRjN4dWEjFDUyeYRZ7fCexjpFPtJkNdpsnCaBfdFFPwrzN4z",
  "key14": "65Qp2JkX4jtUbdiue79nsvCwVyLGLmGcr3MhAi9jfwrjRH6dbarDNXJZZ9xFaMPZfRv3PQuCMQtpMyzFfZDHDNNW",
  "key15": "a3MGuxXqUA156D3KoujoRcrisinbKuscujr1P4KjtoL7viS1DHxkhDSTXWcM2Nd5qPTKHJrhZ6tbtMkG5ApvRvS",
  "key16": "48qazjgxC3inYqG52cepz8hKt6AUXdbACfoVjYwkrLUHeRsbHHZNBPRpvjkL6HJiTGjmqNnS3YHKCXwb4PoDxtiG",
  "key17": "4T614hPxV7dKA2bRGzcBudxVhTkmfkstGQwp6HSVD9ucd6fJE2Znd1BVdHcMCWtZLBZtcTyRkJcLJXAigfGh3ZHH",
  "key18": "4RwapQL3tutvtPR75DWcBDavhjKFXRMuHhKQJrzi15mMZo4wmGDJeLi9njQz69XsEa7HYwXTfb2cmFwEqJbp5R8W",
  "key19": "2foooLkRNS3FBX3Cshr7K6RJy3UducvnxvKm3pFAmo1YeUryJTGjkyxcBNDtFeFo3yfWt3u3RQdXefYMsirJ9nnv",
  "key20": "nwYFWxHUUHsGpk1yp3ZFDs8hUDDUvVKo4CwforZ37k2tfzBebiWrApjEghN9FVP4fA1TzknGP5RFmokgm8PrYH5",
  "key21": "zCuYhuQyqMhHFKdgmfvssDa4o5QrZ6pzrL3YMnvF8KCD5zM5z5vSNrzQjHX33fG7SbibE5aUbg8gPre9ihLfusT",
  "key22": "3P2R3pdcxgPGEYnwqW6uB1NQoLPsSdvs8Q4gVuaVmZ37QueDd8gYMZvtDqtvstvEnksiadr455R4YjyP29crZRvK",
  "key23": "3sTGwxUt5JCRT9NrEoX7LNCcgS9ejynipp6ATegVzFEQwDNfixg4VBbfkVLd42rtP4D8pNQNo19YkmviEtbQQ4UH",
  "key24": "49ey2VEMJGb6zBsixr9nqspqixKX8ewctbMaf3kDyjVm9oPo2BxjCfENpTsB988MRxCMoSfV5S1g1iWGRCUVBVFD",
  "key25": "4rVPDoHTwxEdoFJakV5UrstCeP8mx1wXBEZNv1qM9xLtBdMX1AVvruHJHaBufpkTeX61S9YTZyDz7ANMQszBJAvy",
  "key26": "4zCW3g84Kvo1poSmxL5RJfBi5y6afSqnsgiJEYQshYgtC4EmLSprMpdqWMQqxCUQMAL3suXd2XKBFfzjBmWF6euC",
  "key27": "c6frCjcG852yogeVfkPqqMf7ohX5WXYxCtAAHLZ8hCf8ZSYb3wQzDXFmyyp2izfAgZtFtg9PpDYRA6KZXATfhjq",
  "key28": "5e2SgLMbDogegiVdYzicdnGUxuvgoSSBNsSdVDiRUBFQpugT2yuBC2Pi6cbLvSQuAiRYkMhASR1L2smespiNoNRu",
  "key29": "5rCuAD1GGGAKFi3he8GutGmUNRbRRD55tHno3gQk5pMALfDQxgDsjtro5Xrura7DvXEGA1aJ2ruBJadEYp1fgXcs",
  "key30": "51N17CdPt5yFYkRH1GucWbwne1ZA678P95f74RHGchwKHrwdSxTbgVxKSyJP1MKwZAuTqFcMEv33iCibABsXUwLE",
  "key31": "3yqV82myxsCaaRvd4GsiUN7iJWDgD3AirwXWAjYkKUU5UbEfGfQoAkho4242SYyDvY9MTnPzk7mkFZKThJCE19Zs",
  "key32": "4cDgqZqZoMhn7HLrQW947NkV4ykDrUQ5sxkUBP3wHAFvwXrf4rbb6QaBrEsZ17jqKWgrUBPBHekUYfXF2c5AVEtU",
  "key33": "uviRGCR2Jcb4R2NyVgqdwJKFx8swRcLpQNKXXY2Gh8JYiF3V2QUkjXrYVH4RHK9AKLDTpUH7KyubBRuWuHgddME",
  "key34": "3itPwG8RpsNDydfyKESJruWL7AaGsGPFuCdppjC3aiC1zUYeDGRi6odoe95Lo8nWd1vQhBiK6M5oytjyJhL3wagD",
  "key35": "2H9eaWQB9JySAFfN5W1fWQ1HLKG6rB5J2LEdLQbKEXt13DGVVFS5PyQo7WRdwKJWN8scNWmfP5YFZnFcjjzc1Gmw",
  "key36": "2U6z3mDthEtssSrRzJSKhsnHeujUhgovCTPxkZ5Sks9pBnyjKZhr286cfktpCY8VSXQFcueKZY7Gbd5euU9GrRae",
  "key37": "4ZYZ7pBXgtqT9nKSz3zgeKf3c1RyCV7y3tAkAjkgoBxWDj5Cn1KsWbvumRWYC4L8zYjRhsXRqDoFpaNYyAr78AKb",
  "key38": "LEpxZdn7b34vHReTxhgRTcPsk5ZDjyyCXD1VGCgnmp1gQrnQgJFfBDCeToGc6248jWVDq3ynniAgWSzPDio7Mcj"
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
