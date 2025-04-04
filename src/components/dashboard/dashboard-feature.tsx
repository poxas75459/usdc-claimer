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
    "2y3kDpginXT8a97yk3SyeZ9ZF5M5KyeCSRDE2FPruzSbNdUyypMqk9TjHKX5q8GHr2syn1H4inVKhcAcU49yAb8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvcxRWMDKf2wdSMSXBZjvcajHUwcSre5qFh8MHLY5ET2DWBN7qbawEeX49oQcH4TaNJiLr9NRyxjuoYBHdUStC",
  "key1": "5WzwPUbv1NSjmcNHgKaZQpBhQexcSo9Xmjuj6EG5LDMmFNVsjeMGKyKfYRCqfjmMSt4Fqk8ZMic3euycMh5YaFR3",
  "key2": "KA2Tm4TvPixhAabF8KX9QhGEjR9aS5ZrMRudYmqBzd2ekHJo3TRrCsSZWkqfe9ah4RoK7fyRWt6DNwb9XAzdZfF",
  "key3": "4qVHBuvLh9kkMjsix3tpAG1P2BbRnqFHWmVYNyrk91sHfppPgEkb2Jzytj6niVLqGHMgKEFr3mhixqEF9q5cXppN",
  "key4": "EJpK29AtAeWxbfd3rctn8M8Dzyjntqt3mR9WEo5TiSVLHxBaPQfexT9dqvcXp6idEu7yLfHe8wzecmVzW1cWuoW",
  "key5": "KJb59B6diLQfXCcr1cdNUPcktdrRqDx67iXK5YLxinpzQyUqSqU858WYfYMmeBXmBB8AXEBS14N4oJuX1AekUC5",
  "key6": "2W2M7Hy6rXYWVnrpKEigzQumVwxZ3n5W9wiroXYnhQkmfRvTuCrz72hFdZpXGnhLapXjvKzgymBnFDj8ogrQTqtn",
  "key7": "4PbiMDuW6Lj4ikBVtVS52Vg5js6UYwL9GrouPTNYhWw42RvioKqbfGebcB7Pj9zDNpMyWZAGxaodTiA8uNG4K1Hh",
  "key8": "M6nqJe8p1qAXHmXPeVReoUPyHAA4Swi5JkKetpikK71rNRxPXiTvSsxYjxovoqVt8iME9EQ2Qadgf5NRmiVdtVC",
  "key9": "3SmAP3Vx9uoJkm7DnbCp5ieiUxkTh9DJvM93HsxBw8QMZC7jYQoRdBwEAHzZqUDy7XzWZrVg42kPRF9EzmsLhiVB",
  "key10": "62hmWi9iATFvP1M2M8wiAnEbap1Vyvv27mMz5owKZ3uuCRMdyCtGRe3ngKE4t8Pgs2g8JjUk7UyAjcWhKCviMTu9",
  "key11": "3dy9tsd4Sc1s9pwiNJgSXaBXhypwcRQKJmrHMCCPp7sv4M39WfeJVpg6iBQ3zXgRURKQCwNGpHddGkeNwrJ61tDj",
  "key12": "4JAzrp3m8wTLijmcjirfShhru4TqJtEhyVoABKcZK2sGev3z4BEJNxgNNLAWgDRNtJkyr1DsksFNGZd8gJmQMnHX",
  "key13": "4SqypnT48Lg3hMuPp4rHZGBFVvcEwBYVUhppLqrFoq1mC5ebDs7S8XH6v7JFu3TmDqBKGFATF3J9Yk8dLMVzghQo",
  "key14": "gytaWtjfJ7f1Y8vHdYYyu6WfpF1ttN8zfkxA7qF1J1TjHUHt6PgTAan3BX2pFUrHtqtireQQKvyVVsxU56eawzp",
  "key15": "3xuoR2PmKUCkJr4zPsjZfb9UNq2RNz1htKwDqptM8xziFoDoqoJW2d65Ptjdmk3Leh5xWYvCGqCBCgEnDoWzRhzf",
  "key16": "41W2uebCA7gYJX8mfLvedWS7U4xQcPgEuoz7SUNAsjAdHywSBar2Phb8skXbVggf7Ubf561Qy6BcQrFExPYG56M5",
  "key17": "T8N4rAE9GBbSTGJ9sS88FPP2RsDx75DBbHcQ2kSk2uWbGzW9EGTuxHdN9Ljuvosrs3w2k935ohtiZSoXEZCd71K",
  "key18": "4xyN2cd8aNpWPhc52TEtpBTzrCseNqhaHRTJhQyFBvgmag6zV3PaVTHJWv3oD3y5nCtGmHsUN28FtsJ2BkvaNpGP",
  "key19": "2n6qqMdzi35iHgaPkDgPPMuAEQmSq5mpk5sffbPbwDm6hzwvrse3iFcmzfVJxUzSWTcZdxkauYPbzS2KnVzSeyKw",
  "key20": "3Z6X85yex5poBV2JoqSgPSyaFdaAe1jMS9m9idiHt9ikMmWR7BLGZT1rrXaWdah9SnfEH3jUvPNsw4JtoCCJF4q9",
  "key21": "5Cc1dQ4xbsumSgs1U5VyrMkL7iNBDc3Ui9wq6c3SkmgTECQMhrjQQZ52CFefWa4bourNuo46JYPcfb7hPYxXhyU1",
  "key22": "2dsfZUpPqejpydCW8L3DAjstbPKKRnYPT4zt6v71mswsLuac7jHqrVWHGoiLpiqryVG9kyas6sS68gwWH9bAHd7J",
  "key23": "Y98PGsE2P9DCihdJjZDZUHRJwutLvrJm8QEeGP6EhyoAqzgZbCjzCuhn5mXoTqytQyriAE1aabAJaE55mZnf937",
  "key24": "45TANhpKWUy9ekGbNm9ur3rbFZf2wLsrFsGrvk3XjaMjGbzm6zKFVFQFxPdAQDdERHBkmugyjbDrb8G3YVvdkweS",
  "key25": "3iLNWVDtQv1WnWdtktbm2Mm2ssD4pGMYenv3fv2m9g16NxyACePbP8GRLawGu8sBr8TeXFtt6iZpmGvvPBh68YoE",
  "key26": "48bQ3RmWyMyxkrU1G65C3b89b2TarqDMLPtQXEeezXj3aPNtXtFCYhLvTyNingjRsPMzgbuxyzjk92ruj88QAKcD",
  "key27": "5Tv1hnMnnLoQ4FkbykrYaTzbtdpLwfBHfaZQDUTsBFrZwzzpuPiaituAQf6DuZTYyALuKztiqhiz16TtWznGtu5H",
  "key28": "K1p214w5Rmp8Pujo6v2N39fL2BfksBWwjqNGSNh9W83AehW9kifs5cwCb6Psd9oZFEnVEdbeMtz6RHeCtXdQoAT",
  "key29": "4eBpQaaRM6BmcpDhwHxLmEYQDWW7xV8inP1WbZskqUsrNTrEfdLrixHhNLYgzQAMYNEDbiTa58Cuvb49HHg7qLTT",
  "key30": "KyCUiRhrt3gh9HSSitE6wKcVJhzbWADrPv6twM1qPEfeBzooR4xJsMtKD9RZwfZyZnKUCQdDJAd2F3DwfDwQYXx",
  "key31": "ByARhKqVz24m7B7gvrNHH2jqGBCtKNjMtqQQM1wo2JFHpVBJexA1rdhmrG87LagorZDJCayFCSGvqvyroMJkAGk",
  "key32": "3AcwPQK61fMyGniNrr7yB46UWjXbRKkv8N8nfceuaMigWYyVd8MBjnYSPsNGgRfQZFhzoBZA4UmFwxUsTvw77wdS",
  "key33": "2QVwvRAcRRKFCmXftoKuprocsH5RQoJbCD2w4yYvbVGtXsddBZKoNXumjcwVi824RKTWoXy5S9FiT9CWn9keMvfj"
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
