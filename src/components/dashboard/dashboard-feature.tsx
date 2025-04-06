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
    "4JxWj23KjHMPt578wgimHih9CcAhbLUV61UrSLLcaFDwhbeBMhYuCnGpBaUZnh9kxhpCvmNwsKPdyogGCuKNZEdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CMyHfYmr6WHVV68cTBr1jH9bphUZga9aNJ4y8d4aB5BoRyxtWHk7z99GHZEm19rhhisZ1yF6SaWZSh5vRuR6znc",
  "key1": "HYN1iREyJo2RyV5kFsUfacgjqw9fGm7h9iE7EHzVKjhx83jF8DBTLkFyScS6q9yuBoC1MR8tix5zpDCfub2zvEb",
  "key2": "5BoWh7a2nZ3yvwPtGu1pbKz7gUNPVQcoqfgNRfGbyLQLza4GxV8UyAvZoWqQa3UFyv8uWccZ867w2wqgjBRhqTdz",
  "key3": "5ripd6CtKgC6uk5ETgL84zJskZrvmsc5zDuakqPP4xTfpTcQZwjPdm9xmW1fmQCptspm9UHREh1dwQHgooJ9PLrJ",
  "key4": "uqCMotFHkm2Ljc9Z2AXZH6ax95BQZtrHaKmQipPzPuCsoEoxAd2dFH4uLVvPK4WEUQZrUBqEsR9j3QjUVJPDBLm",
  "key5": "2EyiaJ8ZqVt2WKuk547RS82R8pT2SXubgWuM7ABqBCPRzsJPi45n9beUjLfC4d3ALYhrCZeJfxd6HiydYmXxrVBL",
  "key6": "7cPRWbwDdG7usLnuLTQorqKTxNayjkK1vCjR928GrntDVSRzUJanYucF8Pd2h9nig9Gp5UQiHZ9YNo7x8XFRt6N",
  "key7": "toXbXRRRb2124t4e8uekwg93H2CGv4q2HSd2S9o3D2kPdkJibmJBZdTSpmPT1JkF311nXBDPEE4QDt2vYrhsAxz",
  "key8": "5sdfuaU7Vp9sr2JEBdqU3L7dweitjc3fYjN6Pr87VFNnAhfLoh1m3jzDL7qdEFfcmSTrWsV3oCLPdN8Pzi2ivmkM",
  "key9": "4UreBQB5QvZgqCJQPipXNwxiuuoBxPCgdxuww3GbhUMo5QfcpTmhz9tPiQWH2kx2WKs24qxGxa5HzfVaojJ2n44q",
  "key10": "4uyk3k82g7Nn6qQF7qbqiqEdPQjmCoGkHrMufHy9WAq5WKi2oF9ZsVG3VSTkFMna4c8E8nS2huvnhdKiHo6FrBik",
  "key11": "2A3yNEvdbwPXPD9H4JfnomAHtcWK28rmAEqcqBdD5x3ar58pk5TVGFRg17L9aH6pL8dZ2Pzf2ooDc6oS6kTMjiXA",
  "key12": "CcJ3g8uqFU1Nm8y2hf1EFH8BER1E8Xzo9U6CoEAWrp1BB8ieD9X79hkWj6ajk5MwnexezK2jYhf6GrVB5LcrDMy",
  "key13": "33eqsg5dyjQoVfCeE9si2R8wCMrySnu1Yag3FtgTpBRhywnFwQyQ9EvPWK1CpyZ4ybEthiXE346YnWPZvxbLh4tQ",
  "key14": "3jY8QDd9VVqKKqCzyaMGGU8CCg6mPWJPgXnjMdLsZp9gpw5MXVaKX1wLsTZewDEScjspzS3jkwf6y2qitFCHHpKc",
  "key15": "55xNeg98U4N9mbRTt5vSSCaWCiRiYNedpxNjt6obS4BGyXfkxFieXvQUZLYSg27sZNhhChWp6n9DbuS7ts6nM245",
  "key16": "3n3uGM8dxvKiCsQuBJo4DnKZ9NGys5CZm2eRwzyitUsd3nzyMYRDMKfJ6X2Xg4jDFmLaATQJ5PD6gm4FEMegkMwz",
  "key17": "4i7XtYuXANQEA8cuE9m74gPCGLNXSK3HtuMzUrX8xjDRfyvgq5XDUq4Q8XZdY35VWeim29WccSKojTVVT2GFLajQ",
  "key18": "5mcnfDCpURFFauRkHrrHDW1jUCrbLvWHZDx4aK2DTfpDN4AAU4SRprAJRuAgdrLrbLUYSxg6A69nrx8tK3QpmTdk",
  "key19": "Znb5nQvBa4uBeuJYNcnEdUjgE6fCfNyiGqqM3KD2xoBnq9g5uHdY9xT7rwVV5FZpKTVdEz8pV5JrUhZ5gD2dSRv",
  "key20": "31eCKevTG5QfXwttGPhqZG15N5H1DSr22jc1Dui7fvC6yqBGSdErAzCk4x8C4eZUqYakMC65aHrbGGdWsMP9SypG",
  "key21": "4SvHUYuo3NXkWvNVazYojQgxMGu886yGwE2jVTbHkaHkuY9i4EqeVFkBieadKFtsQ9L87uAKbp9367dLnfxrYHcC",
  "key22": "4FeumeFpSSSoYt5KFZhbqMTVg6rWfT6Xw9AGUvoEkqXMJbcdUuRPeMRbaBs9xAQHzUm2ZtruV6YkiYi9XSPpLkQc",
  "key23": "5o1LpRb9ZYe7Gjm9oAtAnPMPaQRdJdHNuLvP5WRfjuLmhDbvoHWYv7hLC47EDtAdndFUqo4LPPk2STHJFMtsiDWT",
  "key24": "2LnENKCdpWywBKkBYJZbJbphNg5g6Y15guHnGW6nRWdLm4kKiSypxb9z2wEiCwwXKT1x9YyDpkNBAzYNEjc9pokV",
  "key25": "2fCdXNQ5UzFkBSXcpaKvRRsuD7bX5PRujNLYjZS8wQ4Znp8juF5qbFJ3bxZGGerwQXtkDAtxN7f1gSAXjienzyU6",
  "key26": "2hXBVBXGaXwN1agCfuKvXk7NHC9WBebgt6CTWXiEo8oqPPWXfmg3awV6RTUvpaYYjcwi3eCLCe1NzetFAFDZn6K",
  "key27": "31W4PqbKcqKPMsUu4PTP1S13dZpHXSaMbx8YuAv2wftdVxqWPfvj1NdqsStdjKtLSKWgQEkBaq8Becesn3XrHse7",
  "key28": "4YaEHF2FdqyQ3C2Pgko2hShRFzZxiWtPM5pzmpmYANBhhtd62YoPapgarzcH35CnoZgZjXmSPtomSWs5gr3x7EKA",
  "key29": "584SjvzLfDSDFP58moX2Py8seaBEvGUU4DWDqF5nwGXtktGMz7ChtAMARyL77YSVJMKi7nuDN7taQsPTxSiQA9Cm",
  "key30": "51UXTgEJTUjA2xn2QqqTRd6FcPXmyVEGf8Vz1DQsJpBdmAxpSccjUVr4TCfZ7ebyQJia4mFyuRr5VL1GG8PB5cbX",
  "key31": "K6A8DvJEURpm2NqUAdZaJSJB8n7w8b7N9cYLHkYRLpD4oNPjWXqsBeQwerQ6geu37ezWvoC42E47Mnr9QzqEECk",
  "key32": "38FyCgkvkuEaoJrDAKCz9zUjBAALASEPfhYfZCMVGtE8wuQdrMKQaYdEkgHMJs9naebRFZsDaACDTd8Cu4U14a9x",
  "key33": "2ScetEVW4ebC9f3uAAe8VxetUCtfzF9BuXB1mfuHwKZ4hhhxTXqqVr5eiJMCPr6ZEaX6VCXHbZ8SpojeHi2TigpA",
  "key34": "3Hp9KAjZBjGtqh6cCQNBZXuA5NY4rxM1ZKh8FDEk37n6QUVLbb3e3PyZx5jwzb8CNuBmgSjoJrvP89Ee8RJSRhyv",
  "key35": "5bNTN4bmyGFpf9nZe15n7bFVZfBdmRDxqGoDkNe5eFfnUejeyXsKwmXpGgUGTWxDqFHURF95KGoAUpczQcPNHGV7"
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
