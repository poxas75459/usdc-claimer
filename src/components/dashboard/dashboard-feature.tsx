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
    "3wCkNw3WaVoGDbSmG5wHZS1onTe9pQ5bgMf39yXPp2cmB7eDr1vdvR5wDTN2jRyk7pafHAM1hNGuAiLpfWbFFk1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVqS18cBM3LGk6EfqenjAnJL7eEfeJaBjWWi45tN4nBRPoRc2kYKq9RDyPJQBRa2YtGfx7xzJgYfzMq51KKvtYi",
  "key1": "2xvNBcEa6yRkSMDFsWWwVvJqGcK3K5YNjVZUbkwwf2BvT6HLxDuacgug1zm2MptUAb744AGyTRgCPX1BMs4PBrQN",
  "key2": "8GrfUHjjBp3vbCtFnDSRW9hjj5nUeCndG9oD2ypRzb2gzYfxcCTDvSy4no9nxUMofXP4HkEd8ArcrEh4cjrEb7z",
  "key3": "aVvGq9nAupQWjseuybCnUSc7oU4GDwDNLbxybNyT9NM2g4rQFnuZmZjMnBRGowQVGXgRrCgS3r4tMnZrNrzeCcn",
  "key4": "57AiQa7wwaQa4QAwSS6DBPyshWdvnBgduJHwBWBUsBZfrN72HQgnGyugka3EsKZNgujXAxKW3vRbz6WWVvutv13U",
  "key5": "2ycGugBsUAjNsrSMN1wK5qWbkrtmZew9efYgTEUpa2KgAdkZ82nbjRwiaq5L8CzibpvKsSetPvqv6cTs1WCugZFN",
  "key6": "4NTiqsQWEgzCE3xuPu88hJhhzzCV8K6yH33kdKysEs1HKBK8rLHsxb2NZUmKaQ6wgezwxbJqmvWxs8RSMbbjxG7c",
  "key7": "3xSdgfBdYVAHn8ND8PFnMZ6sco9t5bTtZk542P9Mg4RbEJspdfmpDyzVwe2MovkQxU3zGDFfqyPuD3CbDiG6kmGc",
  "key8": "5PM7wMA9EznkJhNnGCgvq1gTVWiGM4v99a5HLocGHCWzSJ6gHEGnVQgRyhB4A3XN9KN3nZbjowdQGX7k1WGhj2v4",
  "key9": "4cF8EayAPMW4FdBkMAY89Btafyxhog7iGy5G5uJVTiSAekBX1nMkZcpVGnH3ev4suLVXd3s2b6wfH6JyjuUkqBg9",
  "key10": "5LyYa9b8dQUxmSXNvwWLffjteLPS2gF4aHT8sS2SYQSqd5iCbX9sSY8W4HuWUCCGz31T9AuoTRFML5m6Z37JLQqw",
  "key11": "3TsfZDfRPLYugMyz8VEJZ6vmtBPcfJgjRMTyv1yXfPn6AcxmRJFwhovzYRhwARKBiKm8oqpFrRAt5KcqgAmDuaGC",
  "key12": "4FKmtBV2hjdzDMix2zFLWxU1qn9rEUadB5vkSrzPkFQDhfCWAXmLGW4cNeFQRmkTUppQQcoyXiJgrDZ2D4jNWkgo",
  "key13": "3jxnNYCSsQRcH2tYvi1RESp61EtQTKzRmSLzwf5CeZFtgqSR9n3CwBpk75k83eFqbzRpXiLyPMkyDgeWjSDcH3Qz",
  "key14": "4ZQmpSLTyRXzyJVNQttBt3rTXC3evBiMWuHCdKXQHWjM5YLaBPMnfYXBHHpeV2Vycd1ByPGMMzfeqnx3bkL8HYKk",
  "key15": "7gnw5qCE7w3nuHUQQEowHCjy95knL9aaPNNGiSptMuQXtMf9XVcVAqHk1EUWFMMjJ2CgkSCLeymWyxEQ85U9u4g",
  "key16": "QHj3HouiWXKboPcBxJJyGXqgoP5YmiWfEYGaSWevWCLSyhPAiQE4U1X872gdybB3Ek8x1rmmBBR8dwG9nKoXME7",
  "key17": "4iAWhScpvhq5ZPdS9TsibYQC1eR4c9UwDRgp5jcSoLg2kGfZ7S4FZ5aqEcLG6Th6ERVCa1bdMQKonpHmNLLDhkpC",
  "key18": "bCvtBwJM8rFi8A9n6Hm3jckvEoeBzk1auzsdz6GLbQbWLpEnsc1n3S9y559oPTHjktaox7iPd2JDi3QgMLrcP6J",
  "key19": "5Dqxha3ifEQPU5naZEZkkPJ8rLcAaSbrvebqLZZLbB7GjcHZ41XSES59f9nqSz8xa9KZu4MdXsnnRbEe9kcUH8dE",
  "key20": "2eTGeEASBfmqTbVfuG5hc3NnxJP5P3a9JG5nbNyb77Y6dNaRtvqjMwWqiPtwCRNAUYS9kqqUt9FU3MxcyWNDgWnf",
  "key21": "3ANX2w13iuiFw4FwHwDYkpNNvGTRbgdMUZZUMM5F75vXwWSA5xpcXHJim6ueTGrBabL4taqoFDo7x2aeycRsPMfw",
  "key22": "M2WDSY2TaEf2WyAUeg4hThFAvch3rWhY1vJhY6oQQiTfwo9Pn2qZR3GLpyDR9M23uES3iErH9bSDq82c4R6B5J5",
  "key23": "JZqAALEqGFbt5pCZEWH7AAjDsRUiE3dAD9SrDWCoGf4ARE7Nq8UcEqNn4iSPmatZoZugTsiJtiuEDafuKmS67iR",
  "key24": "QQ92pwcbgqf3sUKz1Cbs2fY2CRvPSSN8ycj2THiyTrUxip42rZ6vdLGoVajYNXp8hiJfAMxnhTxyFYEahb6xGuo",
  "key25": "4Dq2aZCcL7zKFiqqx6NmsrbHiPiUXKsjRewiPvXTcDEsHHMY9oa7UwdcrwqA31jHjz8Eca1kiqXFLpm9rFqETxC8",
  "key26": "3bYnuj4TiNFkSgmxBDZdoJAxycfVjkpAM65DY7LzmtuUknNnU69q6WGLe1bo4XB8TzKbVuJCJmw54iDwBtTQXtA4",
  "key27": "5HoTscpKZS9nZvJRfdgeF4Wos1WwSyzpGVCTZKRw8NauXV3yrQUXYwkPMAYjAxF8iAGTNsQnK6FJ95M8JE8op12n",
  "key28": "3Gjb6w59giPB4PAazwDt3QKeRgZQLrPDSECPwQrG1yUECbCXRd5SL9VPmMFVsPX9ej6Sq2yX2tsuxFod6SrQLYQt",
  "key29": "5HAcfThjiLk8GaYwadjuqjavRu8CsnHuabHhUHRFDTX9JFwsvtvqEYicEXuAnBQSW6HC69fqgi39kzznCSFrfnFa",
  "key30": "2eCQ5UmNEUC8wuF8J5gAUpfQBs8vmtB8v1qTBtb3QApphniqgY4chKYja1bqSWa5rasTnTQcBts2GNSFaeJ7Yyiq",
  "key31": "JfxtQ6BLaB41pcudQhSyVhqS25dw1Xev6QrFqTrHTYEsdCParhyB5M7nPRSUmDmS9SSUQG2Qpwh48u3qTdYGARV",
  "key32": "1wZiHoDAB8McfDoX9eiL9g6ACjLbcoEhFt46Cfj6e2ktvVf7G4wHb9SB451xTxoYCTFH4JkzfjHqxE1NtKGB7gk",
  "key33": "5yKj4FjmmwfwBRn33jWTjT3Zhk7RdhpPpGe5Cs5unkwpM9776YPsL1kJpqQRtQ2RRNRj43B8UQHym6rvHx11Modk",
  "key34": "VSAh878cAnBv8VEyb5PxtWGqjAr3PYmLacVsJt2ECfLZpmzFfv3YhFcsvsNTDxTzDqagkxQNu3EYFjKTbeyKXxG",
  "key35": "5MRgVADjQiBGJCoLQMeEWieLD5TmwfnmDBSGT6NxaJqNnR8gyotTqqqWG7wjJscPJskEGmeE77PMabLcaZqQJsGP",
  "key36": "qMHd2i8VxpSKifwwCsQigzbuWwbGZH2rtcpk8XwwhwCSNkjnnuqXHR5L2Csda9U31Ut3aYgjoxco5XhtR52E3r1",
  "key37": "3dBBrU8CEL42JdDxHGoRnTpzkM7SXfEiEs86fEHShzHeWrFiwvinDY2xu9Zdk4mbDqKwoGLp5zBsfaie98VzWas5"
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
