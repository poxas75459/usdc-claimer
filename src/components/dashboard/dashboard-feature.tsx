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
    "2h923wiQVjY7EJFE63bS66x5aBFmNf99vTasev5jjUAYuxFNhiUZnie3bD6HVUcMYRpRYE2uc2BGNKQnGVDfMfdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSQ6BV9bc77SNwCaYdH6DsXvGAPzAHt6svXQkTowsSXW2rVZDzj6yCVundo7n9ooQUkjrR1fD3FzwqQbRzvy2zG",
  "key1": "2WHqsgEKW45cpXVLzfJgrvfVcWeQDRsJ7651xAsu4PtQgSC9CFr2LdJCUf9rnfchf7FU5YAWd3MbiGASjW47oG25",
  "key2": "4BRy3MaBkBs29QkJWhqP5m34kzYDFX5MWn39ZQyDJgWLiwrjhNnznmAuo1SkxBTsAH9bWMxSZLPzskcZftJjoDBg",
  "key3": "5jWjXBYyLb2R3M4571iC8vH3Ftgx6oq63aiDKLV4NtbW1KtVfAgp7E5iUpEEpDeGfeCY6YGfciVGzCts96j22WMi",
  "key4": "q8noVyAAFfQSPQraMCuC7W7V46HvEoVqvZVGF68cp2LGxDvBhHXxbvgrp4xbR2E6ai79SntMnXvoovAHE4gtY21",
  "key5": "3dsyJfYQPMHC7CTtiZTqmyV75QYLbnpkrwZcSs5kxkZNnG8uNKWbCJBLinSxLCraSePkcLySMTeoRueMfVLfXEBm",
  "key6": "4hSzvxTcmf1eksxr776BZuzkaft2xCk7JsAAEnpyaUiN9GHDnC4rCR3SBJRcoxtioHUYWePg3GTd5BKLngQR6Coq",
  "key7": "FgL5Hn3dC38wMQbGqyFhWoZXB4wnugzrLSDPg6eoQAWLT3e9qKCsu4ADwufdBAY5s2ofKzRwVHBpCnv2DHuZgfP",
  "key8": "2J4JfErbmAs1y9kVLoiKyr7GyVcQfi65NrKTRCmEZbxeVnRoPGZiJXRuBUN1AsZh8fAZtbCXPKkp4Cyi9R6eo9mH",
  "key9": "513Y1Y7Un3ko6Xf35z9fXAsKYBCMmhA8KEzvJAmg8ffuTaNnBiNvZjo1SqyFB9mXgApVupuRTaSGsAqu8FLbjgG8",
  "key10": "36UazzrGyRR6uY6wr8Aur4frdsrxBk6BxB3s6B2ZrvUbJHCHsycuHurDtAYpd2yV6hhexhGtmUCZBeQvUwtXamU4",
  "key11": "zCrZDQLa5rc9hvLQyEeCr3otR4PxL9S2bmmtZJRSXkRTr74cbAdwbmGfduDjQQpTTA34jLYBdRrLTMuHdnguojg",
  "key12": "3w8yCYV2mdhw98kjmjqp6FK3izAwLbtPsyfCWuwdyY5uUzUNDB6gunCCiWSATYTjpxAeTP951yR4F1muEormJRTB",
  "key13": "4K77VrbQahHDCQEfzzhdRb6o2DbUvJHtjnUVvkRGhwdu3YT41dPk9KoU8SRZ28UZBnxvEXQT4pWdR5Rm2yD5RZXE",
  "key14": "654zmFdnbQu9jYEoSpFPKGJQM9h8wueJimtDpJJKp8FMFuJbiZL9kBJ8ngAoW2fPCZ1txPYiv9g7iLX1rSaMuEiS",
  "key15": "5AbaVHSUoNUaaGE9GCKHz3SvyWfLUL4UZMSQfvzYCMUDeBFW14kBdTsJWjwgwfSiwsTz2GuSmwpV4FLv1F8h5RmL",
  "key16": "3sZ4R7JJ7bAzQB1hfQsnUj2EGionnWorbDQnqmRDMcjgmsaUZENcu4npWvNxsaTwKNR6UywXTX1uFYXkaRsEbSpU",
  "key17": "27VFRY97xmAD2P3dfDSaerPLJcFe4cpkoNrUuHJYgYEWZDdL8QLQNWiTx7KZNRdghWFqAV1JoRszYyqw53JM4aA7",
  "key18": "2yPs79KwyGxqaKxguUE9Tj7yYMC4T6ENXFp1WPwhTqZW1to8SSwGcVijmrSJNQW9SMREmAdjbdSFcjU9pu15hfnm",
  "key19": "27HvAcRxgcaXYjBQM76TUjrgz2AwJj9ZoZrmjVhNw1fD78hLRE77GmMmbnZkuojaTKXWXMTeWXtfRnVg5vQF8uTZ",
  "key20": "gFAFpvyWLzbyf15YpZDNeAx8uoakuwNnKE8KNFCHfwYxGEnkvBsQPJrBSvqjwWbnA3Qi7kVKB2VwuzPYThinFah",
  "key21": "5bYpnhWfvDEiF6geuJ27J7b53ScCAJMhujVnnmC5c63pxLC15N9eTaPCn2ak2dVqV1zoCZWvPaupp8XQNLqVR3G6",
  "key22": "4GERvk4U8Y6pHaViDXYCd3cL5xEJt1aFxCykvzufFpr1S9S6ciYtvLZViDkhbNgw1WZJUXVHhNCpaywxoJjJbrfp",
  "key23": "4MSj8MdKcHqrh79FrTY1wXtehQrxCjeDPqfjsrAntxT44d8qK5wgctUCBe6aKDLHre4pj2t9X6QXvRQWE44jbgWn",
  "key24": "2PAJtsmU6F5JQuwNBD9hw9Z1r9F5HZLKn3nJWaYwBpDPa43H1nSbRZo7FMxAeFzGQJR7fvjhqotPDBeM3M9m4Aq7",
  "key25": "5DYCHqELCr9hSc6b2Zi29Zf8TZvgLvtK7jkeYK5VRfphKezrktxspvQf7zDPqYTkVxp4iciXULLLpB4vfRpjHSWg",
  "key26": "afCG1A47xVENoa1wnLvSRSv7oeyM2T4ji16tNfGQivyFrkQmtYEhcgM1UT7q4VyCCgUXnPk8MZBgXeFx1ny9WgH",
  "key27": "Q4w84KJCFZC9Y49sdpn8BwGvCYUbN4nVrdgWfRQZvZUpfdRYDWs6KnKuwaMWwA9Xzhh5Bid8LbcZRo1gLLCchP9",
  "key28": "44gN1dcb7HeWy8G9ouWqsPc6Koi4m76Faf5BRqhoPdWGe6utAUASmgeakGUZjDJKsFqG68TAhv1pcDW3cE15168Y",
  "key29": "3kRsxo2Auv6YPdDjWiLTRXxqGHuSV8qCyNvQVscP1iE8wXdwP4iviDhj6jPaD2ujfDAXygpktpFiJpJDePVphszr",
  "key30": "2FuKzgGhUDQV8Cbv29R2ZNYYj6Rj3i5S1RSRwV1P7dzhDVSMxCeTT8DgHv8TgQzq4uFovHuS65oRUKav2rSp1uGq",
  "key31": "53goUAe4KdfJCRaWMDMh1ZNDUPvWMAbJYj9zjoyv2CMmaykiiZuTRcBkqZ8cre2Xc38d92eHNs17gPmksNoz2pYv",
  "key32": "Dv1Df7sqsYANU3YBF4m4gBDWkGxGVpAtqDEPMhHoXT77J9iy9zct4MHZ7c7aBsaMq3pNreLU3jguLNrGT22c2Zf",
  "key33": "5skTwWk67SAh1F3DqkHqi9Hf4WcJrAj8gB3aZhi84kjaeKK8NUyBXzZV7EhEZt5QHXWsKdJ5bGfxjjFmoCPxh4Kn",
  "key34": "5bHi3gJNWKY87vLEfaf8WSZGBXx2zJAQD5ehJimwWoXo5LbAyJvyXpSH8DcY6R1TeRvDoy2Bg2T7uU8otgAtaXcP",
  "key35": "5YUsYm1RXsL5VRXbjZZ2cQ9hup18aJAVD63pyWwbckbAvaydthfuc76YSkJMyy1LrhHdDWBXwmEXLyojM6zVmeM8",
  "key36": "48XUZvH4Yd5RgmwPR7PVPtkFkuzseqXZM7exr6qfp3B66eEj6PiNmSpbmXrgEFZeC8JKdRvP54vfXnVqDUTJ5Xhu",
  "key37": "5udrSNpKHhrUdaJFa6MoaAyErsDMa5Z5aC5Df2PYtmaAHxmDG2xTX987193pGr2B76zq1K5hoYKLJBGHQ4hFzJPq",
  "key38": "vVM9G44RsqzAJGe2C8VuzoFCg7wWnAZeR1inx5FHei6VPDrQMHBayJ6jDjzVB9WBHJwJGJ8bQKwwei3GY7RTHYx",
  "key39": "NKagpxhuLwYMdGJDJMrXkFsT81jLVD5hGpcHzhnFDPvUnGP5bUL4i8YKRNtQKcHtnuBz9ZzTZSMeQ5heAEDdR2J"
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
