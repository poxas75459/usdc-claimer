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
    "4ZekoBioJvvAZvgQiNcPSgwncEx3SMUHX1eeAx7mEb89yYHN1K6uA5AqqjTKNn95x2rqSG4VynBNobg4NpNpiLt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHEade16FKXYQikYjvpK7nMC8yz2Jg9M9F6cSPag3W1JCnQz1PhpFsDd8dVqwYw6cbd6G6ine89QGAKrj71LVBF",
  "key1": "38geCGx1bZ9YAAfYv4AneESXNEHq8bokRGfzVwU9CCpTgCMkUZwqfJokxGAR4pWSTRYoidE8XHgeCQuDGq91WiQM",
  "key2": "RjLjieyz9kA8qruAqmpS3SveMnb2Yx3DrrSKGWDV8QB5z5kV7qqmwzn8Kne2oMfyUKd1QkVD3kmgkBYxUoWsjVF",
  "key3": "5N6BdEYc98iyKvarjfTHoh2A9D7xURbdZBMKXDSqjq4oNMoJNAVrFkPnvhW1YVZFNrQ42pfFoBGdFf2NDTJwL4gy",
  "key4": "qgknFBy4LaaigzGJ6UKm9sBu7vYYckhxEaLrrCaVdvVJWfbiGSpYtNP1nGiXQ4a8DRTF9aMAryzr6bbWEaTcbqL",
  "key5": "3hBMeYhiweoDSYb5vM82QyzKQ73SGauYAwMG1wWYZRvuryCkEZqWyJMM74g7ZpwGd6kfbaJh2HCgogJdns7t9ATb",
  "key6": "5nHjJUgZH7qRTRZYRT4VfCVAGYPej45rLhNaxisksayc24s8unLfzYp7jusPjF1XCgtg4xyTXXxMxcjtE1BqhjX4",
  "key7": "UkzmehP2KNwjKySRe2TaZBVdpRAnhysjdz28xg8NUXXTkEgoYzKPJsAUGRaYonZVuBvTkDgbstKgemzqjmmWPG5",
  "key8": "5XHw3e9rdoBZNgH82iPEwKLL7W2VVbhXe3szuXFjnwhZdpuEBP3H7BSkjnFhvD473Ty2QNqUf35cP7qKHXtbqgti",
  "key9": "67bD6jDUYskKDKpwPwSVcNcFMSrEuMkdMDSwoyWhLj7Sk2TRFf9B2i6wYKnX1mY63UF3KG4pNokiuApCbPuJfyQC",
  "key10": "3NkEyARrTKSk9UsmaPNkWSwymXKuJi1qX5wTkGXuvv4Xv7q1PEKUwm5mEk7xiEYMJDVPAwL7iwVGwgJN8mt7fvF2",
  "key11": "2JzQkfDMMJqNSMZP6NHAbdHnNiPX76Gb7dpPbCMpBUr6H8XNwMUfSKZm8mA1kCePXJsV4DbVrSwzPPyJrsdZL1kp",
  "key12": "28jPEmgLV83FjVodVMcNr1fG813f8og4ka3CkGv1RCokHiqDQiweocqQ6Mfry6JrACH3xyJw2q9AZGpPaYXVHE6X",
  "key13": "3QzUKqZQmr2dGhEsVjsU7HLL12tKpFMhDmHDHyuXbRowUuSB7CdcpqKWSh6XTTRu5yyfFZUaYcPhVCHNLU6E7VD5",
  "key14": "28KdHktQeL8vgLH72osjQZV4Sxa8oVnDWJNwChimAUN9KuHDxGwZn9EoEn8LYobehVrvuET2L8QZUFwSz56m5HqA",
  "key15": "4o8RgxpgarLmT7wHXBk8MvjLwygq6UDbAauivNiAEunewRAxLzBNN925rZZaRVnn8QiexqY9ANNjJSPANjwP6gxc",
  "key16": "4x2cuCNB6dmUHxiDR41ZMNTYFKQovbDN4AgMKmF5mvWZsPx26sXumZfMQ1fiCnViLHGcqacCtGBEGBZwX1GE13i2",
  "key17": "FPG9kRnE6vaALpH9teveJyFwyfuRQra9D2cQjyyFbv63iCw3BkmCdAfTtgThwWzE8vETJ5ePEvE41qNiLcygy2k",
  "key18": "5XngUhyHSMVTGUV2qPQL3oYftUoX3T352z7jREpd7QkvS133WuazttPL5JNcnrwqRhXAa6LGwegQuR2jNAezb223",
  "key19": "4T1T6CoUh3T9EKaKJ97zM4PnsdJtkz8JVvbdDQ1SFy8RnCCjU3cSTqFAzgM9UNbeyGiYt5uUUQJYGhC4vSYfmv8Y",
  "key20": "4nni77pSiAWi4SGnGCSZ98j5DWw1sCNqJQ9KJWCaVxVt4USNqciVNhy9Xb1s6fcPFjFoye8NehJ3RqcbtjjnmSBc",
  "key21": "5sP7m6DDQjxHz8a3LQQHMkX3KuzSio2CCfG8QjboBSdXdd4v7HuRyxFEahiGwiMkK1TvpQXPNCV3wBGxrWDmYhd1",
  "key22": "4SEJ6XFF6oMjS19jcVkVbGtTdfCFAm5SzxWuEsau2ztDMBfXBf5DQDYdre7xSNRGLGkrX3Hx6xoMsw9a3KvQMmvD",
  "key23": "51EVUP8sfHoA6wz2eHiYkHS7EyrbPCgbTpwzGQazMkgsFnpbXNkRvykZChuMbunfnne4mpApScNPRozW5ERRp7WD",
  "key24": "jLnnb97ZMjP3jMKgeqP8mdmFzyVnJaJnN7z6cftt1iMYeKnKXrcBh5foYEjCsqD1o3DXpK49zCcK3kpBWRQex6P",
  "key25": "4JdC14tyTvAgs7Nmq5ejrivTMisfsHtqfP5iPqQ3q7Cu8MN5tbpecB8ZsCv94sSw7Nm5a9XJsxeAxajGBNJ7ZST5",
  "key26": "36s1ut1GSL7cFaQRYZw9v55VMwbW9hbbdZoqLyKeVBw7ufmYe8v6aKrm3NA1jfeJpoYuyYf52FHuqL8jXnvsqTDS",
  "key27": "5s46ff6PSGPJPceAYSwhxUfia3mBdQ2H3RLKp2vPR9zXTkEVm9zQCmWqNv9JKDVUrfV6KicRWqPSNc6VrXtVbKsJ",
  "key28": "3steQjMPfDRQ32k5iKk5KmAATozxjf3Fbk2Xd8mpfsjMdVBuztJemV9KnAuP5LvCRhiYRGXQfKnR9ADUggExB2ja",
  "key29": "4DaTW7zodoPbf7ZUwz5nRfJa3WPRyLV8t4Q53NiZB4zAjCcejfukbxvYtFmGYDrKTGFgqCTzcC942nEFjA5nEkvs",
  "key30": "2ZDAv4Sp7V7a8ipaqjL4kFH2Bzyr4BptdHX8hvoS9GX1X84UjrBYo1qmJeaBqTgthtr2DYoR5fb69h2yMLXLGu8C",
  "key31": "3p89ojRWenXzXosJK4J43iPjAWfZFpfuctD9PNoXhw2tr6wsaMoMs1jHZjTw69zqUJyWm8rdJRPKXaDB2f2hcq7V",
  "key32": "59xfW9G2B8kKXdU5FyR6pKureBhHGHFVCuZak9LZMRjXRLaBmjBozCAjotCnCN2fhVauYPw7DwMahxfmTFJpL5xt",
  "key33": "2Jf2Gq9QafGb3EaT5C37xHWYNE8LBoWgD7L5KhiFEa2J4BCmKnMeBnwQPfNFuHnv6rU1hNA79Fh8kzwmKHDdu1sV",
  "key34": "65h7Nz3M3CfNHgZVvCDDoxcrkfR5A8i7Q5ZiNxPJWCrFW72cxi48F5h3ygSLthtCgSjWQnkJYmzwGsqzyLPDAmus",
  "key35": "3czQYSF9cSCZ8j3pWHgRkjkppqNrfmncnXgAN98FUgGRABye2ZugxJjZKXTPTu4R4hN9ArSnyNJbgyUbJepDkAEU",
  "key36": "4N6ZBUa5KS4bS9NGreg2JjQPuX7EnsJk592wzb8KTU57LkiDHj5b2qwg8UPeyhsziaQrPf4F23iqAD6nCdBF1TYc",
  "key37": "2HjeCXW3SGjwEuE7N5SEyz8M8W3nBxDApWddpYjLt4QXfdpHMqcc6dVBDEehUdbxH6fpv6TxVak6WYzmEuDMsLe4",
  "key38": "3moHUVqNG7f2NRnTf31FC8S4NboxHA4uLnMZEyBN4r6N6Rn3nLoYpSpD4EXg9EjGsP6Fxg6FJvJ6zTzgXvbrgm6Y",
  "key39": "5DmNsbbLaY9LDNgXCc2cxwZ3W6Xu9Vz2tXSg8YPVZGmaqk5oo51o8umX6ttC8iC3yxeNTymvwCF5wcy7tXMJo2ki",
  "key40": "3jCBuN7xNUqZYTB2L2datjnQHCoCm8HrLmCuaBVbET8LUgwovWGNs3eF8aBkBaKoJ86A4PcugGmU4j9CeymWywUT",
  "key41": "2hjdTLLvtaHWg2mtwo7rvLNQN565aUyTmGMeZBqUwcNMMvgUQiWMWKLFkMvXaZTgR8tmysxCjWnjsSJbTak6PXj8",
  "key42": "2bfD4hc5B3bKMQTHTuk1VVGuWxdrG8vRqx3eGjYeZHpFDFfsJeZc6nV9jbGZuAJAKWMmy1kyb4uTWyjEcKRNW4QE",
  "key43": "5wqzWKCJmNnCQ7ydF4dwJhRCh5v7pZzRvUFoWWeu1CRsuqbrwG3x1y9JpmZhzyFkJFhx7QASytZuNqYP2uS7iAoW",
  "key44": "2esXTyfH2mBdnRy25hvbJAZUDj664AEs7Q2YhQeLTimEog3ALKqmrrpPUdy8sfaoyPr1zAF3BLthNcS2CmtKyws9",
  "key45": "4AxG56KKzVLNouExKAvJ75u624gMosTcd9Gsguif4LZ1geBkjDMK6djStcyLKbmT97o35qjPfRc3eEcmPcrBScaK",
  "key46": "5grtH6wxyJvokpSciRPWVhpB5X3dR79shKszxkhjvFUToQgkUZcTTsVePuMBNm3UXGfzQL5VE87VENazezc4oaWF"
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
