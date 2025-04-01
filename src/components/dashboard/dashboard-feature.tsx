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
    "iMvKaPruf3KEmNtm2cz8RthAJo24q2fzuEWpm84PmfYMZwB12eojXmnFKCKAxACPqkWyCrY3uCZab93wLF4Qh7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DpgYLfFHJHcmaHMhLn9BzG9i2j2xSbAsrdzxnfmZFUwAqBbNCVKAMcWKsUJo2ZLNCDF5JguY9EYyEiMx6kn8AYe",
  "key1": "sAbjiXD4VBSNFW6WzWKmCnBFbfywm8L9hMEheqogUcnG8nZXeJMzKdyysUTu6oxzxsUCQ9NUDbckgaxGxQxkqVd",
  "key2": "65ZrH4gxJv9Je8YtDAdRbYeZ5hq42rbUGqfkQhKCYFwRSSRpRaNVdFVcpPn7FmBv1cvm7QWLAnD33u8rQYumamk4",
  "key3": "2XKwELRQBSWsqkwe4rbha8hQCdSjvuudPCXRvuTATT78Sxcr6oWtWZBLaUhCtoyH9HvFHsqt9HtzUYGpAPv7Roqh",
  "key4": "RiwhtgRcARrF2GPfrk67hoWxTAfnCm96LdvjBFCRzAvabaTLv4E21joNZ5a1HwDt6w8eD9Y74eiYpaCgcB9WDUv",
  "key5": "4D3mYFgagiRvrETfuG8RrgDYdxU9jkJt9EyVNRGbuhLh8w8yvsx7RxWYkU8oEPk6scenxjHe9ou81nsqY6G3udZr",
  "key6": "3QkHGnzGendBhSFmFGQ84eHAnJ65hzEpDFAbxQTzCfYSRnzGr36ijrU4SiVdiYZ5ERZ7M1PbHQtBJ1Y9yi5aRNVV",
  "key7": "EHQoo2ZwhztDWYSfqjfFTawuED4Ace4JUpEZhV5SJAQt7z8oydu9JFTtTrabBpJkn38YMDyfgjaxc4yYLhXPDQV",
  "key8": "64KWQUufNWnWpx3JBiXKjvuzuvnrERybhrzsPmcq7Vztj33D2nwi7b8HsJrZ4WZk2NuWnPqiVqJJJXw5JSXLcDpp",
  "key9": "5qVE98XZoo5hM2nch5jair2hdXoquEgbH53chqWRCzz3QGJXrQvcjp6W8GHUPpH5582tFXNZS1rb4r4KagLF1dTq",
  "key10": "Ban4aNBHVxyo4gPLx5FnvQXPSgeDjyijuVKvan1SN2s6UTuAbWJUumMUi9J8UnpSBnHQ4zJ1Cctszn4WKWGzKeK",
  "key11": "3BcWXKRZ8SKc2w31WMGTwJbHpyNibX7biuFa1tiQt2YenUUG23nXZ1bDoneCapvY9HNYvPQiCFxiJB62unzxCFAj",
  "key12": "5KTpn5r7rM6MfWNDi26Dc4kVg5anEwUd2jyMEDD9RRTrNhAJK43EuLa3J3L6bwpdWNBhBzFr63ZR6g8dQw1TnAWR",
  "key13": "3GJob8JKoi5WbAQF7J79uMexBhXtR6evJBgRiTY9ouyRziMSUie7vP98qohGgcoRs3aAcHvtdLCbm1nNTEbpTGDj",
  "key14": "g5eZ5yu8LF1zPMzwuTL2JSS62VPAoskxFKtNVS8R5v9muoQNzo95C1UiD8YmPZwJRP9fCvRKcTk6JZLD4n2VhBy",
  "key15": "3JjMa1ho5YEXkuak23QzP53AZgtjGnQuK5HJDjUjUR4pGCytvh6gBqfmK5hXwU8td9YC1KwhdLGysPNULiLZGLhx",
  "key16": "3E9CbZYjKbrQbhzJpQ117c3zfudSUoZGVCH4Hr8coBNeobPKPgDbMvnAJCRTc2PDzaEBmbaLsy3ebHFUj3FaCBV1",
  "key17": "4B4a5CJ8NeCuDxYcptWeDkAG5dhRGHGczEDJ2bUEXJihAZm9dyBYrqrNyyraCEfsmfayu4WGT5knf2ucJaQxV4J4",
  "key18": "4sCgpd3u8ur4noepBmpUVeC6X3L27kfzrnPTeqE21CUj4aNLvLVg52W2UzBU6fQyv1VvQCejLj2LWdhH1rk5LaZ7",
  "key19": "2ZeCpKSqi8ExnurzjL3UrmgdCcq2BS1RThruwfCd1mz8A73Uv9iYZqqCkwQsich1uCuS1fKqbkcrmyGwWwtK8XD2",
  "key20": "5gpRrQA7XhQK5s3zqTK65W2MZqi7bHmfcn6LxNvgbvtXoCHog7JVG6vtVhepdcCbyvCzLo2FK4MLbziiPKupAGMr",
  "key21": "53GtH7tD83rvgKWE6aAHsg9WkM2kiZUG597tCPauk7ZPWVb1jHt9XeXfmRbvEfNAoWikRh8L2dueT5Arsj5b7izA",
  "key22": "43Qydq9tNgg1hwjeH5Nj6GgiqDbh4TLb83jWn6UNVhYNQc1ey9ZAbTi1AZUPwq8GbTGWKhY3duxcbSbK8iBBZoUx",
  "key23": "3e3AYzJCNgoaP9GqFJrwFgkH2KPHRP7oEeXKP5PdBpQA8pbDgoqMi4ioPr5iKpviyEncEHXmruXUeMDHmBtrY5vU",
  "key24": "5mAbEJMqoZgvJ8kAxq6q6e7guqqdP4z9hie34FQSbAXruZYckDB3NCHEyU8onVR7BG6zPP1bwoSRdB7xHKjyyQs6",
  "key25": "4yg9SfGQ2sXhNZaXLqbCay1fuyubRCd1V6uuS17FxrpfQUSxR1zHC468G9N4gUv6f2aMFrqPzA2Su7HLqCGwD9BN",
  "key26": "3Gg3An6PuWFXZnAPG7JaAEMgvETLXq8TQQUVYcZGqS1EWYWLboLGqCU4N4xgHLUGDDWkabjFYUdo4PEncAjczusR",
  "key27": "4HxSMownr2WWaNLp2NXBVsBcX6PLeVqTvsAx1LhyBE7YVugxSF1qBD6zEkfxqTBZKySBJmJza3FYRo461MWRjWh9",
  "key28": "2YxPXLADfQgHNPK7ZrCLBy38HJVyqLRcFh9o8cTYq4sVYDTNkdrr1ejqwL2ZmP5ZLSMEVzY1JX3iPCVY6gd6fQZ6",
  "key29": "4aHgQ1GadsAtTRZ9PyKPcHnYrXsYFYP3MiPqfsBmkZsVtJTCZbBZwKF2A3qVb3BJczZdAugZLMmZdDugXXZRjbAT",
  "key30": "2mN9Q1K6VT4RdJ41NgmF8ta4ENMk6uCew2d4zWf1bXMRfUJ2WA7id5gvPFPecckL5jrfUb81e7N6KW6VD6iaGDkr",
  "key31": "D8SNJJsACFGDeaN4wY4Cfnot8xPTAJj1mDZNpokhG6puF7Q3qqFquBNJy5qtUZUXW6rygN1WcDtRcHwmF7iKu7n"
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
