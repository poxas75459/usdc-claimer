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
    "3wSDhTAjaGY1cT75NQwcosAwjfc26NLGTdmM2K7v2M3KSudzcisT6MxFT8McH3G8PzuYU6jk1ru65Y4Jegx1tyvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZTJ1BJVriyxWjnAWih1GvYLwc72gFP9jVVJnJoqrTZVpibNCFiPG9x6pHLD5b2RJwEA4r49cSNDAUbju2tAmKD",
  "key1": "5kvKhPgfXa9iJLBJBbiM3VGkMhgR2bfWhLShXsry8XmcE7deS4BGTeCJEPknMx6AV6i3gpEQJCVy2rDAp293TL6d",
  "key2": "5kqZCH8LZF9dBJtKFHeyRSriQ89NRgAeWxbhijDfcEUY4xW5YTHTaQCgtJUFj7bHXLpqJJCNX2YiDu3mFc17BgZd",
  "key3": "3JYAHKd6B1pANhwDQU62yEh4UwThe3TMGdAsSnQuFdq6EddCm43yjojM65d5JAwiF4PEMztb5UavsQyCWaDmHDir",
  "key4": "5eLg4yt15xhMQ2vMj6qk2Y8Q6QAkr6A7zg4u2xDfJrgbLggvwuQxwpAvmDAv18tt8zAZEKi7mwF4fFpSZC97iAdP",
  "key5": "ePEF3fR4V79fkXCAv8EneBhhB73m3v8mjStEuCwDKNQjdzgA5VARpazkw6oCHJZj3PHbqj2vWQQk9Y3Wbtj52mi",
  "key6": "2sWHoiCkesdB9nxQZgq74bDnpLxmVdqsMnjt9mVRwcEccMSYT93s52WiKPGBxdJ8Fzun1v4ux1Ge2CZiNKccjoQK",
  "key7": "31uBPLj6rhU9JzDxnCqXAVY6ycm6PmX1EzbJhBwABjcmzJXGxtGC2P4sY8F9ShfgEtmxu79karutns3B4YoMus1F",
  "key8": "2EkQL7QsbWHSfPmuxu4bNLPSGjFytqeMCMUDEGsDfzQfw5NZhzZUhseqneGt8EDu498L2ZeBDvKdQbAAxthRfhw4",
  "key9": "4vvAaidaYy6EKXkTUXiZ7ej5jB8XKrupM56spzBAhZ6UQkx6vboL2Q6yCGVqUzqLiGviKD3kbB4UhAgN1yyuDWs5",
  "key10": "2eXbiBx4gYhZK9PRwoBNiVcs9YPZ5Y7wcYxZuLwY85jsWZXcD5mtviEegEnRaGJQRJYFpNwiH6EACA8QA8PozdfK",
  "key11": "4pKtW2rCrG7uA2eP8yBsHZpkT8CPMWC1Z4G1iNxPFARs1jebwJzPztouui6jghdgwiph85WDoQzo5BPExp5KJvgZ",
  "key12": "5T6XDuh4MiWnikEwXegThiKrR8TAfhGpJC4fxJjRuC7wDd4NoUBz1afY7mdoUv3UKUCVWhJwEDW8uodnn2zSuQNh",
  "key13": "3p5Uaqrw2jaV3x77fE4WvBsxUg7TMDmvqgo9cyeg8GxLzfGTQyYKmSymqvFDT57UDTv4F9JNNyfw2sxXDTxZC78z",
  "key14": "4g3wyparKCFokYoisqZh6aWWbsVq37RR2h88WYXiKHQpYX8cagRtpqd7psTK7ttg5wokXydSuGGDy1fyoJkLUGRg",
  "key15": "XhM32R87ors4rRZvYgPzgE5mTkw9bqXBLHWfx54u58DJxKxrfseKfVvVZwqzae3YcYvjX3NfT9uU6MMQuTPSJx5",
  "key16": "BUXAFkvZf3cNvV49REuGKs6n3giGUDoXXm8GKLBkLxiJSVBJerjqHTE5j1UJACHEmW56VPFKiWWzmetwcLcv3Gr",
  "key17": "3Aj29arvuXMqwMJNc1wjgkNnEPgnc1ZGQjoMRop8KCmRpD3xEEVcCBkBM57F6war5c86KFyJVhvG65VPvj6mdDDT",
  "key18": "2NWXtaL4Kk35CsFWgpcfgTEavMEzQsCBSMJQDwW2BkdcLCc9jzRE9DbCWgfpDbxGE9gXx6Xxi22YXqwAVNYT4Wih",
  "key19": "2jeCUvPE4AXdVNwrkEm8JYU61dRHznaMCv7LR7gNv1c5HNpkDfu5pvuFxkAq5Lc1PwbeJ9qzUvxFLYQdagXMiGiN",
  "key20": "3uNkbZsG12uLEziZt7DPrcQV526MaU7ztYX72m3CfL82Uwb6zNFB48fhZUjMCKBgvMg4qiC2ongtvJcLaZKDDH2Z",
  "key21": "PUwV1rx2Gbm2DsXa1fPCPiziJX8KXhdbVBAsuugn225UwBkKHpeoi1CrdFZGw4dQFnXzarv124nknnWhZAQCE7L",
  "key22": "3VAnWLY1Wdr3DeZNZx9ahJS4Z2Md4Cv9HSj77E4km8JjWMsBrqeNkUCDYnb9gwgoAB3uUbmTkTcUyxdbkFag1Eft",
  "key23": "5i2Yb77qHtfLb3YmWCcGyAspxh43huZFVCH3qXZhhgi2hD7TUMAFs3tj3xXRfNeG197zvBZScKw1tx6v3hwhTk8X",
  "key24": "4hUNGA13XMkJ8jK6vR5CyXtJfRVMFYADxmxAzkKmFYH695sRNvwJbE5TDGxTKwnKUGEz48Th5WpWgHTrbjcncbnS",
  "key25": "4dKhEfsu38A89uEmqsCZoKAHo6TuNEkgdsFcjgCnhLVk1beNBtsdKAB8RWyvGBgjPGf2By3j1M9RzXSTQo3n7VRG",
  "key26": "9iB7X4bde5fUoXZaKVRSdqjT8o3xnqGGxfiQkbMeYMYvwqufHVgdU8eYu7NgTgCEZ8tBCKtH4M1UDsxaoJRSB6v",
  "key27": "54NX9cQ45AqNBi4M8vayD2UNYPcdVrmmwLj1ttEELkfLCRvJRe8GvezH99ahNbbj5EXLupbwrz9feAsVb5BnDeAp",
  "key28": "2UEgE8s36zorzGmnu2c3c8xQiyDED6iyK8Jbngh9reUxk9E3SaHMg8axb8k6HFoip3F662cFSjFTMhEMoq1bJsuQ",
  "key29": "Pn9x3EBVpoD73XPSd1EmfxivYGVjbHFkcLBfYeEVSeUgsZ13eo55fsEb7UyRy66EhkNbKRxpjxLBn5SsaV5oL8e",
  "key30": "2pkb4WVbUEj9fTiRuVjJstFgYHhFA7K2ax7h9M711KL2Xo5VMzMrXboYQicNfMNYedmADGLfj9DrTQTMovrWMt7w",
  "key31": "2bbRWsP35jVcJrjfp7LUviiMJG6uzJ9LsRfeRtCbbv9sgu9rDkwXxT6Cyg28k7vitXRaKUDtCbrJ3d1sMPDxSGJW",
  "key32": "3WLKKqvKPTS1r7z6pkk5qVfFsVBKTkVdH77r9ZwDo7Sq3s38kDFh7wTvhHG7C6Wip8HbbyWmcDgpsArYHuLkunJx",
  "key33": "ewRAEWJckx8LNeGZTUZgqWKyL42f7U1riemiHjE9h8Wo4xcip1beHTjrAssSCdxNpsW7Rh4cDXFVRgL1EszWFeR",
  "key34": "NUHbUXPqAdyTfRmGXQz4Qhj2WmtKdyak3XYuxNPegHfo54LytRkb9njcoehWr2uYoMfihVuRrbfkZicPGgCVSEo",
  "key35": "2pHpJjrCj5P6x7HKTkaZJMJs1kwcVaALNRfXFkBZNDXhiMwqmLf2tQthDCJSipQX7iDRogML3Hwkc1G171DWJTUR",
  "key36": "3wxVz5ZTPQecAJsFYzufRHotgGSC3xjwT4JfkS7NtQ1WZgkpSRBr2x3qjauLwiahn15FHN2SgNRfXNibTWibEMKb",
  "key37": "3GtNFvc14UbiJhqRz61f1Lcq5GmdTLr6jiFdgubQS8Q71F5sC4St8i7jP3no5cwNhqwUUN2rzkiGR3RpnzKrRcd2",
  "key38": "DmX23d8RWdnzYQCWSB1KEz2C4d5Y4K9TssoRth5KNcxkCymHY2QpK9PTNn77qpQ6fSyhMRj2cod82So9wdU2cK4",
  "key39": "4nD7xwupBpaHQHdwyp6oskmUdVeCexqY7WPs489uThCDhzMPR8Sx2UZD7NqcgBmLQqPVmae33Z6Hkv25cNz8Ju9B",
  "key40": "51xUrwdUhPwSHCXBv7K7DbvC9hWnRSZ6fS32T3uSe9JtByEBad4Z9fqYBWUg5QZcDjFkuyHoDxhs6tmC3rvc7jbk"
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
