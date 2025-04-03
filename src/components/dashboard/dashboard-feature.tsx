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
    "5vyb2cjBcoZXNsuUombSn8oLE5ps9EaAeVVbddktJcMyomF9DZazjUHuEGpHWG9d4Z7wX6BD9Hf7isYeXdmBQeik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzqYnvbuy6nwf8qfaZoWzAywd9bia3yqK5h9nsjsE62q4ur2XrrN3JydT2jYdHe44fNzHBX9mcAHDuc4js74tVJ",
  "key1": "xyB7GzQDR8cgv6say2sjGwzjDNRdSn2dEmmt2ruJ7CV8uP7c2K5ZMoFTbuwT1CDf2fRCMdXCMDtxCwSZdta7Bg7",
  "key2": "4t7q5gqJ88Zo7HpwU4rCTP5CR7sPBUhtLzDVdttFEmeNT1nNuS2mLNxDo81e7GfpaT1GqHZNZDsBdcqqdb8WsFrf",
  "key3": "2ptxwEk33KhGG1RJPrfUZaGstutkr3PWBXyfmYDugdpZAfkBAmS1F62eDPTEh6BBmikL7AJctuBWmWeU72bunReP",
  "key4": "42kuiYzPR7LESffm3H7gPydadgYCeh2Ch1ro3JKFh65SAMmk2voeM1LHtMHYS6WMhAMJhP8C3jLVabqb3DGWUie8",
  "key5": "4LV5BeHAe3hrgjnqWhRHP66uGFV1Zju1gnFeMxSXqJMiCCvVzHWSaYiWkWo7qUHtdYbwVc6tDmVYWkmRyQiMjx36",
  "key6": "2HgWK2kTs2QRjLBUoLq61w1Vt8SrKcqW7KrFYgYaEyjyDKntH7AXLUrEnv16RcSUKb3YskwWV76V1TqUTSZWuHWn",
  "key7": "3fCh5D98qMCCAAkyyRqre87peESAe2v6q7KjmD7XaDwhZHcE4oBvSJRtbQjXauoYzq4MfoDMzqmQLwurRQieVHcB",
  "key8": "yeuMsLGYGJ3EwWUHpkmr2mbW27wLgu9HvnV3ZszobLhQPoSLLqjnqFthByB3vtU86qxBTD1rcVLGgnrAvCw73KT",
  "key9": "Tj7cvrmcir8TAFFTMkqJVQBfWhPm6jGXkQhGBDJe4wTjcutVRr3to2CK55kzmwF43reU1qkoQS9DowyoTScNkGy",
  "key10": "5GenavwQnt575PDKFy3toYqtALq9CniAvcD6hNPfByDPdS8wwKG5XcmcwXAES7pPgQ2wd3tdDVt6LHs7HcuPrt46",
  "key11": "5WHnfXEri6ogmY13CwSArcAsVKt8eVSUBw1J36jBtKNrR2WYw9YGMhAi7SckSRfc6skTFU2gAqu7pcuwGkVSb7sj",
  "key12": "4GSdQ8YfUfPAbvfK4nDN4StgwyhS2J3aTpwkTUdxC78KW5PG8DKgZnixzoJqoMwAbVBLijtgMMRBQRRMG54CeFWz",
  "key13": "2hDouc6kLCFThafUNaZbCgTkuGjJXXUewGP29naerokMUwhe46mwXti2ZZo2da1ALbewPPLLVSMJavsgGv5Bcx53",
  "key14": "5hN83AvV9BUN9qmFZ19x8i4xTwCRdzGcyxGtEQ1JveDWqe2gJ7HV1Z1XX495gP72kKryBpD875ka8fqSSXraDfga",
  "key15": "3HtXekNvHNuAs7joGsd6ATaJYCBaxu3zTJg8rBr739oSxaFvGHzcYuMUDtzWLnPqckDsSGp7EMtywmuQyTj9Mj7D",
  "key16": "4uyWLXEJAsMWte8MgHs7Mzg7BYtmKafy7HyRX4AiGhj3y1iNYzGhau8Kbuxdk2HbJRabNpPAasoVF5btHB5fgGe",
  "key17": "29cGFzqhxE7c35ZbdSG7oJdqbxxdULvDpaEoEPJ6v5eqNoERKZMtzXuC6Wraowv4S3sMQrBhXjdhqchHC99B2SSW",
  "key18": "3LXvmebUYUVZKF4zdgPhocgFLBQZhqjgiRZxHCAtdkZrFXhmY34zSEDiqLJ8kRBXBTsxrxzpAZsid5FAEo1zBdj4",
  "key19": "4gGd6BjWYfDYKVS8VgnBQvaCwU752Wo3Zz2EgNnrkkbNUQTeqdPN3TneHk9ZEELGgjZcqUSLoatwiUHWdsEvJKzA",
  "key20": "38qe1k23QFVmE3dQoHTf1rSq5VeRc4ikLh1PrsGTK2t9WhHJ89xMYKK4SCW9gVESYPxrUjVR3keK53BC38qPHar7",
  "key21": "2varzrga37MSg7UpFFPBMuFc3MVEob1j2998mr9qTEr9wPoQFiEADgQD9SnqVk6E4kkcr4DVn4XxNPawFxRwMgsT",
  "key22": "4sNhJ83AXVBf31QNHWq5vee4SFMszsZZ1zmU13SCe7B8orPbmMXkyyqqSpABA1ZRWFa2vjYnZXDWYHgJydegEZp7",
  "key23": "41b3e7YNbTFrKDTB7TjvPApXjQNN493patGTqKNaH6hB82KshZbVTrkfnRsiJAhVXDuUwQJfpyAxqU15EC1gaFGD",
  "key24": "4ACXfReJznm2ZeVrfqRVshVRwMXyWobv7z8o951Eifd2K37pXLdPnABqJnVyPCXHHFBjnws6Nz753FZLCk2yyzY1",
  "key25": "Qf39LsC3kuKzUMmiZk5rX9XSaG2Ggv51nfgqWbHPAFyzfmViGmjQ5GEtHr7DJxrJ41xdgXAYpkGKkyb22ADfhh9",
  "key26": "3Yag3XMw5JzoaaNEQw18fPr3ihtTzzFNmGziogHMAJmTGLqLzFXYbz5rxwY7x6qhVe6aEr4pJnfu5Dj8X8usQuta",
  "key27": "RG2fQzXG2VGB1UmVxz7ugH6wL17faCcMLbKrqhAjj9So8jwP3Wfubz8zsZzzwuhdyCMrzX6eYvKigtPnzPfSzbm",
  "key28": "3tKrX7DpwKchx549EtA1K7eiXXfMcV5E7Pd2LQaGcDNXs8Nfnxpt4NN3E8yepK8jMSWXJyuxQgZdgFtDzFzbLSBr",
  "key29": "2SZMM9tBetQKd5pQ3tnnXH34AYdD1HhQd2k3CjxgqY3JTDvATftKAU8poww8fzVCA34eATnPdjkgAYjyCPtYduD5",
  "key30": "5N7XZdCdkNJTQfDyjQVbcTCKpKAMh2weosjzzomTJ4EUHB69dVKeZgezowKzcpcvQwuYAnEbkCzGdydBeBqhW8Z3",
  "key31": "4K4UZMgEeWRusPPbLFHnRW5XmRo9o4Nzgx25iqn8VYB3ahuEi68bYfMy356rW3KNobYhetbrMSdSdmAVrFJH41Bf",
  "key32": "5RWNeGmVP3acpMrYJa1jmcCZCvnnZYB2Z9dfjc5U8PhAjtffShTGtBvdnXgDTrbYgtG5r3gwSu7bCJ2bVmMQPiyq",
  "key33": "3tbVTjgkTXKpDhYuvmUm64SiTUibe7XWr297eJ75HYYA7bgGxYbkjSoshPinXikBkKoqFWMLTqh2p5VwrKU4DXqe",
  "key34": "4YAg3kSy2QL6nV3HqRJLSfobCpQ35vJZv5xKyvdv1Dq6VURCUzwvBNNbNqFbF4VTEZiRxLEqQULLfo9sLwsdkF8W",
  "key35": "343mNcxb9yQ6BCDBVjP4f9HD4Zo5FTH2qztSJmGbVWbfBW6hmaM3UuGaQ8wW9joUvWwzpcAieJxDMzc9DLnnv3PD",
  "key36": "A9kCeWHBoPqq5Awm3FKuqM8dtTx69KEJfWcJeUpeetwZoWanLGMvnAxn3wdycRB7Da4aa4h1bvVwT5UteiEZFaj",
  "key37": "3f7mfgQGXjJe9LTSuFrFuke1gPTH5C2Nq6LgELcJNNuWM6gyWrCou7KDKcRQWt1TdcxfBH71cnTCoXTyZcg6t6oV",
  "key38": "4z45C6Rp3inNZL4pw2ebC31C3x7AjsoSoFAtHgX93W4PJUMpvUQsUZGeC8UbumEKXcqQgJAx5LVvuR5zPPgxRVUr",
  "key39": "4q8KwRNh8nFGr3HwWSPd2BAYBEFk8XdfiNxtEydaPjcmzWAGm9Cj2zNwRXqUCFpwRKQ6c3888TGE46WDNNPzqyBG",
  "key40": "2DDMbbk8ovFQaohWtT2x2cJ1vTEbBhnMCsAezCS7w5wN25qJsZLXyu5oZzjEQz4Wx9L8NYvX6NucMt2E1mMRiEY4",
  "key41": "5PS2qMNXgtoxGBH9Y2DSpzDXsqMbTsGyqvP9RdhYh7Mt9Qpnz4D9c1UD3mHsGsuD6M1sKUQt9KoYGy3jDS25Y1nf",
  "key42": "8633ZXE2Pcq9Tgo9vWi5aeZp3JNW7FRTdKAm868mhNvE6xxMGooTvnjSmR3m4umGV9ZE3sr8HgtCF6m4WJMNWeu",
  "key43": "Ty5LDCaWvXH2eeLsXqjdMLVkhTjC8H2pQSTAdCKt2pDScM3gyBrZKzU3SkiUhPrkv1s2jVzntbGgAg2dcKceRAb"
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
