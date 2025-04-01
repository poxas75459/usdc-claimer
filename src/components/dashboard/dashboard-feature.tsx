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
    "3sNpbPzkEELqmLv6m54AzRJ8hHRyJUG6gcJiFD8NcbQYsE2Lw7hGWsTPWuRsqvhm6CYQt8RR6htd8h6KYWQRQV4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nG41hgJ1dKEy8hfzdLC5KiELETVmhkezkpYTRVHWXhFNexbYoB4eDYjtScJyQ9NXugamb5F6dSUCYxZtAVPepTB",
  "key1": "5pZkwg2WV65mnX7YxhSbpbNJSSA2niciWSmYjseioznARBc6ybXFvJQnnTV1ci5QNL229viG6wJVRpRFMAXCpXfT",
  "key2": "3HviZKYrRjvLNAiMFSBCmPqLw9k38BBkZaJFp6UiaTa2DkgxRYz3noV46SXDiL8e6iZwb53KNpSNaz9FUKjJANmx",
  "key3": "ySF5ArvNa1FQnQ4BHw9Ja4KwPb2pRqMT7zFEh6qDB5hn8mtoWxogjbFY9wNoekPCUYnpg7SBvnV5QiX1frWY6mk",
  "key4": "3bwbT54ANgGbgV7zjQNhAC77WWuVPHinhq3SdwUcpVpjioeWN5LN2CR4GEhSg3q4S3eGcSfMTZD61QZ4yMNbNBP1",
  "key5": "25GpqDNEKTA1GZ7qqavrggAwARmTLBgzRJbLSExTM9WtnNVrLW4tjnuiN3TTdzkx85wv454386jTFdoQU4WSdpzp",
  "key6": "5LdXFwSNh8PCH8PDGj3hgZ8AdSREdzcEauKtNSDzRMwYbzktaZTt27ogARj5Rez7jdMKK9vHbpG9DkWpZNo3YLE7",
  "key7": "aYxyqBVtY8hkdtPa3h5exF6bj34uBrrGKEyW8s7uX4cCrzEFPi2zCqvRUoktDKBFbcz9evWuVCQrSGmZTfdUmok",
  "key8": "5DAsu6dpaEgUocj9ZWnQGxtsy4a4n8cCHTH5ks9Uyeffoi2qP5Tyeez7BwC58FsNisMkXx7xLbNAmpB1tkB2HodC",
  "key9": "3crKyLdJG4FKWp1WKks1A7ndy3RnUHp4mFMYUbPTxbfG8Z9oLsFG6w21x2oys1YsTmzj8Dvi9CVrEbTP5exA9YJd",
  "key10": "3SqiDbZhf7cwJTCGYu5eQumBFqvh9uGopLNgruhNqPiubcF6mNdzkdivwKGTGS3qp8mRFodJpG6Jza4FRDNM3HUg",
  "key11": "64EVVVw3N5ym9fZwUsPXxFW33qSomCX1ZnXrFo8jWWg3BBi6Yq7QNpymaSFFg98gfm7C5JjP83CfxW5aNGgxxLwT",
  "key12": "FBn9Nz5j17MbXNUzBrhEauHLKJKfUnpV3djTWz4vd2BQdGSguGrLw2kbKX5CJ8VCYbHmFkQMTJTT3Afaakdp5Bv",
  "key13": "66sLzuEg2N2hotiv1fgKEGpJUPe3VrY9RoWsna7EH2npNvdAptj2uvwzGKY4M82wVDp5u4VdnquQA3sWtTzYnAkN",
  "key14": "29doHRrPZC4AEHDCsyraGZDKV5nZxQ1rVoKB7g2pshAXCfdCuqGjKaE68puofod587zXC9faK3ToRKWdHKTAVEV5",
  "key15": "5x8UaYXPYBWLV2EmXcDthnMo9SezMYeTNTNVUZPNyVitSzm8cEY2zq12RW2QvBZjpXd1S89p1evpsY5gSvjj48gm",
  "key16": "3Y3uzYBR18QEXMhgWkNC9zJgjiMvnfta4U93JBBtySYYQGHfKi1iTr3g7fNTN31yrjY9M8iVytXHfuwkvhKntWth",
  "key17": "YZVYkFScC1YPc1ziX2KkfNbGa8vcca3izWDKRxGNbhTbYzuPz7phLkanw55Koytdsqcc4vPPEfVaqhPbSBoeeiQ",
  "key18": "fTpRPULDQcZd16nR3F713Ac79rbcnrwMXLiC1TPifE3AFGB4GsKHLFMUGSm4594WNRMVbJYQQmob1YnVcXQFe9h",
  "key19": "3psiC5KvXBjKj7X5GMetmspFLvk6DJsukMrbp6hJXvVw53jPpKnuYt6MwGnnmyVKRoKwaV3t9b4444nVgUdTcVXA",
  "key20": "5fzasp5BCEHqzdYeHKGvJScqVPfoLTXQ9nYEvspf11YVgqJicjs5nTPFyGAtid8p1jmtcyz4LEVNzUMBhiGLytbp",
  "key21": "iXQoZDm5ww7SD3Ywwpagzs1jc2N7V4pGnu4KNQGCFgLgHWHfq4ehhsFS9C8GUMGSVnX1RKtxgdLDc7F5YnHDpwY",
  "key22": "2XRKsm4HfsBRrSM6kAWeR1L4MsH7668wsfDLSBMsq8hi3aXwUiHNY2pHPQoXtaGwHYAHm1NJtU37C8yD8yKQ7uUU",
  "key23": "3bCzdUhGP23MauyQY7FMuUB2kFZuY9Lzc2KoX3SasYUx7epmDdsLZ5YYyRaiiSKAuZXKRrwqJaaNPZwGoFa4rT96",
  "key24": "55WtsXCYzq5YKEGmSiU8x5JpQAAErQR3MxFhQpLmnJbRRHJrVsBAKwnHZf1unUBGBVqL2Wi3XbdZqZBR1xHvcCVb",
  "key25": "2nNe9C5RkxL2R2J4yTM7cnySkUz9HQqofnMLiAyxEr1jjUGAzLWr4rc9mDhXX6DS7XuHyQ2DCUebX4SXPRb4XEos",
  "key26": "4CegJeKMYmXJpW8cDUxGxbH1coSzdQs3GdRcdx1Kc1WKhBb22ZkUfTGkBY8mhqyUD1Dp2ufmqb4rpLSkViMdKRh3",
  "key27": "3HcKrqsspWQtRBmAztryq94VbzPqte7WcnxWQ1TAQZ6TMzEWuQDxcuxsW8CAjRq2fGfASSezoE48qU6X39YBca3y",
  "key28": "4vvE9MZvdZQsRtFHsLyfK39M2o71f9962p2Z9uZeEVkC8ZnByVPtsDJZ7q3X6VD4pV7FLDFrZi99zWaCR25UFsuD",
  "key29": "3yQDv8W1vCjCexNihKF8RUDJCehNeJ75TceWRTAKtUYX4fYbQzuvR7MZ8VTqfGZsrNyuPehFzZeBqed38ZqPXuR6",
  "key30": "5JtJY1gnSRLnMV8DzKUxNn94bR1qYJjQw6R6xGiP8qykuW523qrTVmoqKqhjQgGoeyLFAdbfwLUGiFz2v2TfSkeQ",
  "key31": "3Yng9VyE676sJt5NEhfop2wsZzRtrAZkU1PL2g5fqwsBoWbFYuos4WbP45mdairpjje5vHLsU34x2GvydN7a8Bnw",
  "key32": "npKav5sGef8ZurqyJkEjyC16WWpf3XUyqEnpGobPZLvxFt6FLABxJJjkvWSqZJcSC2KbKZNRFm2TCArd4oAJxtj",
  "key33": "X86fAWgpVNhCC1x1AMVAijubM4Yr5mmsYno2CWq4WAjiE3dQ1oDRtczfkEiCpRhii3q8ieic1gsT5TrP3gg7JWW",
  "key34": "2cATouBqRWovYYnXzjdnRKSFWaciR2XRv7FJBV8D6DJwAgRDuxTvEkNKAekFeQYattpxexvFznVsSPtQTzv1hVPC",
  "key35": "5DSJgKErhg3nXanqX5Yb8LTp1yaisGqNa3pAPbxdL3eJ8tDkojDKeoGcgZ8ew93ZcPsPA4EfZhVALzk7kD9NCZU8",
  "key36": "66qsFkrszBHVd5ZAgf2U89UeJu7FxGGWxLxmpcTNp5scf9zHhEXFihKeT4HHtWg5VhgNehC4ZAavAmuFXvdDCP1b",
  "key37": "NusTsyWsY8eb8jAfjP2nxsHmPimMSccqdV1czQuQ6WTQGfCpNeXAp41iRZe1MdLGUm9ZnVYV1TtANxuzVcYmMe2"
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
