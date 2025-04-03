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
    "25yY5YvSmXNXM1RGDW1Y7Jjs1u3tYtK2Ge54bzHXiEymUrvuYUtnBW9fMvXFwzZAYpG7tbwH8qCg5BL6MHiduxhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gDcKfMVBwLw8CCsnQ9qWnQCpwhtaLRzF8jha2Ma5Nq5ak9ehAmDYLPgAiXoKBfp3ASLsCHg4n9MAxLvXYcP8BAC",
  "key1": "qAwhD9vmpaJF3z3Hz6nr4XtQgmf8AbK3NTjB1iWSJBK7ynVryJCYAXisDAuSAoYSUYNMxhKD3p7gfvYeVeZFarD",
  "key2": "myfeGcPnEQ55xELsXT7UF13rvWNrHCUS4YuzxZcwNeFxvTm72F88Zejr3TYSEH8p9DXgUZJAh51c7qfQhkoiBps",
  "key3": "8T1JKWKthp2qFCH69sviMbFwQgwqsNSiBe6cwkdknG5vJz8Fpp6ni66FQzxbgEzTmhZgjtSaPLEewn9rnL8W4mX",
  "key4": "42abr7wVBPnGMhr7uiXEu4AuAuf6c5Z9AaP2aBzEh5KPvGYZQfY2jHzGKySDZHNjyKn2mezLxUYNaC5KYvhYzmxk",
  "key5": "4To7Qk7wSwbuZCMV1fQqApcLtnarUSBzrwcjXQpBLg9KkLHUZwdp4JsFVK9rboe1BXPNyRo9S8PwcZxRWUppURHD",
  "key6": "5en8KEcabfxQCdacdsgQ1NH2vmCjX5t9EXfFuLADFTADoLzHVXmJK3UPAnFKhz78S6Em7ddVtReHgbCnwZJbBgz2",
  "key7": "4RJr9i9u6feSVDsYNtsDSHZiZrYDrgLkoo7T2hWzV16CBmvjZ8dqTiz9cdFEk55G3nsD95PniSGe8fbk4VYde8Q8",
  "key8": "3p4NTfiRza5uk8kXzqxEW3F5bknxEu7sRpFZs422eKNCaQqoHUqgucx4ZNdp5nn2prhymSnSvDSbrsPDoaJR35pY",
  "key9": "5KCxQema1oiZyKsr5qZQsN3tjMwmwembfMCYK6tgSRwbafF648AdHmKozxSnhabBTDs65ndGMt6mnbWkvo7k8Rpj",
  "key10": "2ANSzS6A1VkhA5gnAWPmkenMQSrVVzpzpG1KtZ7HgneUab8exUV2He52xogxJxDKaKhQtkhju2TY47EfegZ3qKdw",
  "key11": "4PPyMBmxkqsi2bav3NL15EQjLPwfhXTisvSmLCZEgz3uZWswTFtcrAea3SB5Vk6wUtsvFokiwvGdVKDv1bdcczg4",
  "key12": "4vPBZ8N6K7DwV3JZjJJMsquf6HYy7jvH1gej5bfiZ3Tg2XybPhw5tDqDtk3YTbvAjJoTpUKyjsEL2sA3st5Nc7wi",
  "key13": "4XZ7XgbHsGM1N8791U6GJC2GFhzs7vje9VGecdXcF3g8DF4b2EA7LUPNESGH81athd5pyBw7azd4vfASkbCG5G5G",
  "key14": "47XmLSLxQuH3mi61foaXoZMCdmbUt2UgLArbQqwUYdAWMjLHNpBPhjzQRZBMMH2yXMYkkjEysZgZAGFoLL74hDSv",
  "key15": "3bUQiQM6ADXWyVjqTuioFtcZFVhPesCoJfC1MKdtuEVPGAGieoNoWRhaRF3fdhBqgjZgeDBEKEVrcjngzb6i1SqA",
  "key16": "4foyem8TCjd1FPbzgxDWQqJwcxqrwaY6zNpQTKnwTGvWjuJAKzcRTmJ8V5F7KZ7Kg9BecEPXwaHzrApRSvPwHvT2",
  "key17": "5CzQbH1ms8ZDPJLZ2mPP4yq3aF3RWghA4gs9HpkNQCQT379Bzh7LdyMcHAEVtHrxqpfF1iS2zBbaDBM9sd2QL2c6",
  "key18": "3JyHiAoJemaA6SjtMWHC6kE9o3gscZccFKck3RVVHNJPng8sQdspjiSmf8zZQxr1ZhW7M836FLdaXKqhRA14sm1T",
  "key19": "XXCep56iTD9EapwrfRWPi5bP9sjNKQtrBDYdjCxr6o3jHoyMqLxHyxkMAEB2aWsNzqkaEN29Ew3whpxAmH6nMUw",
  "key20": "3NSjpTZ2CMYZ5SBErtDwWZssW1QsLxSrMzJ4HPRGhoC3A9i7MkcJGQDhf5paEKo2ZgW3ywA4kkgVwX5bhuEnjuNd",
  "key21": "5mUo2iuEq33d2p8Lh4s4bc6uF88GUwAzYEVN24kaLGPbpE2yDaopL47HbEuJGqLpdWnEKusfY4LeQjr4YwKtMpzr",
  "key22": "3kBi22cNgwLf942MXiuzmfLR8yHxqt1Zma2q4kiW7z2uAU9fjBT136odtAsD9EfochPmJXRUvaA1EX1W7qKraGr8",
  "key23": "m6ANBNmeSeK9swAM4gB7TafqCTeXU22Ca7oVk8MNmfeim7uMmK1cBuSrsnBvW7cDzAQLC7DZqx7k1PK1VjNLWp3",
  "key24": "jM3gTynzq8bnMGFc8UpTJPTQe5XhCtaHjPAP3Ag1fPgLwwVG4zRWvotnDKASQ9ssJdYWyJWAnUdEUH5VKsho7c5",
  "key25": "2zoWkPg7pQpZbsgj2NuSmPG2fkgjDYwwkFw6RbBe7DuZg7DzSEL6mzWJ1n683hGPfo4Pjgh8w3cjbB79nAzPM8VE",
  "key26": "NaEghtsvduBig6HAanLNAGrmuSKP4WbpoxHhTdYcgXyrdv56Bhq4HDxq8cKrm1B8iPzYoFuHbhF8DTV98P2NMGd",
  "key27": "4UFQUfi3jmQd86vZXyJkapJ1kFXWjgyT4zumuNfQAXQkN4H4w9VE1fR2iGiA8DEcC8jkmPjBXhCtAreFcFBqCK2g",
  "key28": "3BrfmPLtSgaxuSSVsNPBfAk5eiENsk9hS9t2qYgiUZ43Ph8iY8hoDqhrXPbjiYHPTWukBwjsWtEZV6WZ17oN9tiU",
  "key29": "5HYMu7dKTurYAfrqo2nBGMEPcSC6J8Y4SLyeyer7k86kJZp8NMMtKhYg2m8gWqwwidN5goRG4uQ4MaW5vxezifqA",
  "key30": "G8EnvR9bz4MJEfiHzNY5wtwFFEo9w7WmrQaxhxsJbpn3AEqyFK4wvKtDJYMEQiHQcYdSqnUeWZy9qVoRiQ934Rq",
  "key31": "Xjyox945X52Gm1zVrvg5teBKEQNR3TdCty8Pu7v7GGsBBHhtPGYHFeoqEvWDyrrhRJ5dqy1aCgpWsGtdb7skz4U",
  "key32": "5VzN6YeufsygBVjJHi7aoXiTE6mPRuMv1f6sh4GSHD3Wydvi84KNExqyjWJ3dDozfCgkuThisYfNBq4jJztRUN9x",
  "key33": "42XovpX6cgZkzguVvsr7SbH3HJNTvTcuZKrwX4EjYBr4DRc4SqZF7HGvcqoESz7JVJ3cnQQHtLeyvQmMUNUKzCcC",
  "key34": "5Q55Sz2FXV5riQx2DwyGAfYxoCR65HAMXxEbh31wnkHmUWLRBsDo9VgvhmQvqLCAjADUJfG8c5wigruDTZASHMuN",
  "key35": "4AN24dwxFLuJsqKbpq2g9NfCgb1X9szjzFnjBjTYpohEUrQ8tMqShMnjC9c2bLV56JkJU8aeYF7ymhByL1cSNMUZ",
  "key36": "5D2mwcQfSLwCqi6gGexvUWk9PoAZbLdPsCqhniW6LMHuXWQQGHEjq1V22Ap9tU5mp58DUCLdUc6YJ7h8n8o4HFhc"
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
