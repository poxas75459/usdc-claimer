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
    "5UYpZK3LZ9crHuh5Jh5Nb6e2ZsFNXRJQT19B9r7CtVsuo7549JjrsgK6Z5fdaGJhfyAkJpvNC81zAAwZwwdotfFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6fQrPinHZzSLeSPuKpDBXBmJRSaWgjZ8fi6yewUJkXHHneV14V6fSDgGaKyvGp6NBDF5H4pY4Lsdfgo5x84CQP",
  "key1": "5MLRnqYPBqf6JgGjNvzKhPogC2sfntzcmQngsU1y9eCaevAttEPGpZ6gLCHM6M6ZeoHbDW5LwMEk9LHZVNrQdqWc",
  "key2": "5f7rGCMyCgkhtwVE5DKAfRp1Natmr9TSS5XARJMW6BaqqEH11ESA8ZtH3LTGBotZ7hYBm7tvnQTu8bEVsFZwaP4R",
  "key3": "4FLbQ3iD4FaKCJmtSPiisG1gWw5Uk26CZ7KrMjZqHA34sGRhTm8FMEoXzgK8mohxXSTjZnM1JXfboqCyrZMCipSk",
  "key4": "3YTS8UnQeDoFzivZ3vjgTBjo7cbUkQtpPbVPYBDqMKpSo3AR7e3UM4R9VGyjBnCFDRm922rA24EN6Un54dAoZEPz",
  "key5": "4QswmMEoZ92sZ4PnvKwRoYgrkmR1h8APX9h2yBYZ1K4iPMFPd1DoovMaHVtuVEWaUzJdToZvS8CpHmXneQV16YM4",
  "key6": "4hvo6TbLPkC3aMhvRze84SadafePtYWuDdmmkovReH7zNBdSFnmwf55a2aa98MEyVzVp4toQTQXMP2FyQUKPwP7i",
  "key7": "5cwfbdrDi3dPBPr2gzEsduoiTEbULkYisFRKrRVgKnFYmD1VYPLGHf5HXDbM8Ti9UQmVjbEd437c1o5EianWpvs8",
  "key8": "22NQgqnJN7SEDL1fXTYMu4dHJ3JvVnLnX8Eh1GVVeqdBErwGY2tSRPJmHca8nW7YjEpLhgFgDySLE4pDUnXbQfkp",
  "key9": "377Jmi7CJuEbsRVkvfmE1QcCA562KD1ZXpvxN4QYTmmPoLNNJQrkSBGVVZL1si3Cgi1WJPPRrNBhjPngyVWT52ey",
  "key10": "2mky6e27e9ka9fLSzVjYAEtSNS2gemm1xZaoaPfMQJCGbCbAKM99RMkxg6wsaKdNoQBsBQeYkcQPgaMmdA3gpSgm",
  "key11": "3hchWbkWwFhBYM3HtCvDx7ii4h2DWj8P5EgnTvTv4naKQhsPD4TYkyMAEQjjaEaNTUT2mxGnWLNqUr2z8x2kwhj6",
  "key12": "392SQGVUTKhbVUp83HYH2qjZGH9DnJ2aMKQFR5gmCDsDBoWu23L1G9eBkQYDKsQCY3ftq5EcTxXtrFkbjRvrGbwz",
  "key13": "4AncPiLyR6rdp9Ho5a7NykUuTHqWwz84QExa9fZY2vQ1MwUHesNFdy29MMAsW84t7BzW5icJEAg4b78xoxouTJBR",
  "key14": "yW8UdtFB38tstsFE8Jg8mE5oJMRnfErud692hYKUoEbLLxJgBZZyMLesrt1CTRHiFzg8apkVHBSsoB5VJey3gW1",
  "key15": "kuNTQg7J1bGpnArrU7NqKrhfceeQKJ6eUiDFYo4fnigJkBdcuEPwhwoKLvJoVLEqqnifg8nS8mceEuMvFKcEAUE",
  "key16": "SfGzze5NUwFKyBPpRs8ZcUE2ThR3gvKgW3HbsPr3KLg5NQgqnK4MB6JraoQySEs6sp7XMsrmdckFpkB3kGZEzvd",
  "key17": "4AWbF6LykQkBCSVszn9zhfU1J6HCPxikfzwJSTkHhvWzLTwpXDnK58f31vRQ3TyF9hqHQuiXfha2PFmjM8cvH2Vy",
  "key18": "2pLXmv63NxU2RsnWpVXhkmZc7i7eYaUzQkuSmepUUDrRawaZcAydXSZD7E3Cn65PAZTS1Kmtd5qMp2rFxmRd6Qgn",
  "key19": "4dWTjyreYcrnrzFBHfEuPaEmvmaoD2rSJDNnW521d6nBKgLnpeajunTXDLTLB8fhZfAxSoJoUgM59RhVTPwo9vZ6",
  "key20": "5L49fF1D6dwxZaBXDuw65bx3btQZukkjr3NcX3iir3X9UD7g5CpYqxaQXxX3eareGv5vtYhhxChf9muu1E6CwdjL",
  "key21": "VdyZe3SLH2epAaUS1dNrz8sPp4nQb3SPQCUFe2T513ZFJqoqusXkAyrjEeLwmrpEfSWh8LSWsusR6my8vAyWtuD",
  "key22": "2gg3MAfYtKNiM4AWKqpDG1Wm4Prqaom3VB6EcLviXgWcD59juAbGr5WSvfJHDTmcvuKGrTTHrrZw3WokJKnf9BzN",
  "key23": "3ThRTvpWEmuRpQDGFbbBYiDgftenVPyEyj9Eb2JYCbh2R44sfWyxjrqRQsjzf8vtRPnveXnQ2wZywqKLM5XYob6E",
  "key24": "CQUxL8JizbzigSpXhK1mfsPQd3tSPMwTuPVnLPgKGDJozEyJpaz1z4BnYDmXf8nVndpsAEfhjP475uekKFCKrYc",
  "key25": "3BBXkWj2uFC9QrtzoJJYqkRxUfuG679dTmMNAk4PuHqHEb7ykxJ3kHcKCbdrZi3kJy7SYL8vTERjfATFqVjhpbDF",
  "key26": "4zQUdVkayy5peuhHNpSEjitgn6FLwt4jCzS8BLLp1HaZ139rv7nHSwQ5cCuoyXWe5CzpxZyyPF4fHDUQ1zAyhpUQ",
  "key27": "36XQYqTRsR9hcmVYV4j4NFi9Wv2CJ4SANPiC8kbCVeS7nj72YCLm8Y2XEg2knq65KvMrUsh1vLAPPzVcNAwU8tKC",
  "key28": "2HaCLT2x8T4F9VC6K4sfxc6fbmLC6tcFBJKNedd58NTi8bjfSZfvNM1cm5Ui6prRoJbek5kB1sTSTLvgMFGgERiQ",
  "key29": "4z2iB9QbSsAsen3vgYXY1C6LWLqvZjiaChrNb1nVHBzhiStYV15TJPvHo2wMDEjtz9z6HPAjv9s6sf46AKU1fo7o",
  "key30": "3AcCWsh7UJUHR1E4JNtZEES4ve2D2gCqfcsXo2kJwMy5N81jRNmk9wRG9HtGegHMH38HvqjBKwvu344UNbp9yCue",
  "key31": "4YDC98MN7Sj3dxWTDRo8vhzfvNcg4Ru9LhjtYjTuYtpwZWHXoWTuAQ89je79gC6S8LtHYonDngMeP7LLDiQvvMgp",
  "key32": "Cf8PxNYCErUAC48oedAymetMwKAEARiUbFSrL8JAiXfaHE2RyHhbLq166AKgSmCYqvGc5DDsZEwbpnAyEG7d6zL",
  "key33": "5J8dKG7h4EspjUziffAcSXCTvPcwuMzGLpe1H8aY5CQ43sgewNTNFjwZhownq1VvFPyqvYBm1m5evuzFSq6PX7kA",
  "key34": "4Ws63KQq4ocsQ87dA9EX9RWMchnDXWUzLoZq53f5uTTrnSdB12u9v3YAFBhXveyMqeQ4L4t2FUuzxsAaiEviipce",
  "key35": "YzayCpsFCzjjT3PoCnbnBbJkmtPXpEYEw1S9wsoHgnGSSVu1PZvi8JXiQ1SpTLgLhYWt7RkUDf4F8nDyVz4Q4Xg",
  "key36": "pSEAxXr6zqTaeqfQWKKVX5wBdDK5TL73oXGR2TGTJpstCpgK2fCsbbV7wFVVoaPczzfqMGh3S9mcGLxKz7pTUiZ",
  "key37": "49inbQipM1NAWte78ECTHu3JAEsnxCpFUwnmMScT9DSMmv9Q4kGrkyFGixzYTx6SpjfN52gWYxntt9v61ocQzvhd",
  "key38": "46m6n3u2LuVQCKPc8L27gmsMXTvovkZCaujKXSUHYFbqfv4QDvPUGZcNPrdXJz1x9xrmfhr8DXSTF3KwbEK4Krot",
  "key39": "4rELNvcaAWLeCy2wTHi3kX27K7qgQLE7oJFLLSrHuPXz4WXJQimHV1TSCEP6Ag9u3X1Z1FTmvdmEqJv5GrLpU3Ge",
  "key40": "1gWPHyDQvci6fkzeG4XC7JMfm2dgirT51JZejhkBAjt6UoKNNStbRsvkBrYV8aVPJHiqkjjMZfY5SFdW7ia23Pd"
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
