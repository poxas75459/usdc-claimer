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
    "2XtphDiUiTtaoK4rqa9YYdNpn4KPNgNpxHkJhLv1JsKh7pRj1Fq4aEDEaifABMYXpexAhKoxPeS3GWSZBq4iEciv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nMhYyYRJEoTvwAkQdMnekhMEesMtqnJkY8QL6HiYc71ci11yCxEwJT8qLNqvApoZbCSrYHEaiSrjmWek6P2jjyU",
  "key1": "5aEkjieFu9EQq9M3Pfzyc5mYfVuG8co5zizGWGXhib3eTJYA5JbmVYnHCatrF4zJsCQPC4x75599RwGrz18r4VUg",
  "key2": "2z6weKCBWM5Ejr1uavmSckqhC2n58umi8xRLqBkxZ3PZU1wMELd8V1RXAMyLNefAsWCQJst5ZswGqSTUeyVp9fE4",
  "key3": "2ZDsuBa6ecByy7E11vT8Hs6KaAZ5Lxn5fanMFKFkcnDNAXWVzdyxvc2Y6BKDSfNd1jGkEckcgnW8VpEsRjAcpGf",
  "key4": "46K4kYjRz2ntQ7omz5iwd8xnEwKyYVt6Ui8tnRh7qLD367PWRyBoWFvD1gSA7YTBz6ckfGdQCsrxmuAocumGTY8f",
  "key5": "5nsrjU2hJgzg6QN9qrsHXweXmhLHtyZXdChqWEoAokRW6dQbeQmzUXwdYxP7wE5XeU7uvRZ6d6FcoxfcWdjJWDxF",
  "key6": "2F3QPJHcFwHioWJ11EqasUnP3L71eozg8hHCJXEZnqvyukZ4Mzct7W6ZC1EvCxMDKcJjstoAgZ9hdX9jtWmEPk3J",
  "key7": "4hEqwdiNzE9c7KmShA48qZfozNPjFvxMsSf7QYTNsL5ni2wTTEJT1wj4hFtZb81zWcgHeeFNZZaZMxPrB6gr8ohq",
  "key8": "32yrr2mc3ZBSbmW6ThRVyqjkV46B8pxRde6Hg5mk1QH6XdyNpL15JndL1REdbrQtZyhzvdr24pejiQYWpitVjErj",
  "key9": "377YncCavNDJTDsssB7WELmNwb48kMMQpSZzfLoWWD4J8oqsiK3UvNq7BugtuCr425UCCwVzAtGjsc8xKzYspv8S",
  "key10": "5RBe2aSPY6hFsBmZaADeSsqZnxt7hova4548NCRiZ4eqvVAgX9QXB7yy45TwfvW7GaHT3iwhVtaXsJ1UKXhPC59v",
  "key11": "3h7SBfcXuAVHUAM6xehfk1rT2WpQfoC224VtViXDq3H1r7jrNsTR38VXFzRt6DDAAvUsW5p1WJsodqhLdZ1E1bEG",
  "key12": "AL9EgxuGQYcYMW3hf6St5nC2nz1DufvdsvEKbNqPWwd11pUk349TJaCdKB7hzbrDqusEUanbdMvg99WqCD4wtjR",
  "key13": "4w7MNxmHYPey5yuEhy9CrdfMvZNoKei5udTBi2oXV7XzRGfYJmFukASbM6CKM6Bi97DpFkXz9iUYiQ4ymuDpNF5b",
  "key14": "226Y1VMsWBe754HDLL3DYEcaqUhWsKvWSVGdEwG5Bs6CL4rvSMgyoSh92KsdYUTqsuQDFfNP6aYPTh6rtLMi4jvu",
  "key15": "ueqwsUtyaJ5wiGFgsPvJAA93ZT8VahPSabBYzfkyKyKb9wneJ7vyMQnsoCtHgUouwF1KgzjimGAiM7e3wY4pnXv",
  "key16": "2JoxVSJoNBehFCRLpiUN9eiMxwZFrpBgvBqf7NiTwUnwbhrdNdtk9kyY2ntQD2qdEA4fhJik7FrXPiMRhLEfH5om",
  "key17": "5hBQFVf91TJxxSKbSd3cUsrsySASRhHKhk7UnaLNw78Qogj2osjG1GnELxnWcKaUGUN9uMBWygLU9ex7H85zaJRe",
  "key18": "2eihdNcyhEooSt3zqM6sHihbCC2NZVUS44aX7g7AAEv8eLjDWLPaEXLPPHmHMR5qRcykRzZyNaUZgtB1i5CFzdNE",
  "key19": "5CuG7Pw5wY5JrdPU365HmhBUcHcgvZdaL4TVeTG7s96RfSxCb5fpdSeEkNFgHvxMzpeuC5vezqMN9FdbTo2RunVs",
  "key20": "5QEtRdxXfvXW7gNfxTFVt26SwVv5uwXPfADiKqfBBtdiD2nDaebKDobaNJ3j9yGAxEUpj4tuCgpBLVTuawAgwT5F",
  "key21": "3cheU9UbpkNPtTMiQjh3yMwMFjxQAoXFmxpbrBmH9DW96ghgtPKuu1JqctELNTn9jPC8PUP6ZL8fwTZHvRh5FLE7",
  "key22": "5rtMMbYBNyBp5x5jhU2QqP9nbEkYMkBNseHBpZqL7Kkvkod7LBN7SvaH4u3aezutEqgc4yv3JXPv63EsXDKYMGHB",
  "key23": "r7RnAMtEBYYYmvpegk1df6eh4axknG3MCwTzaqYtCpw65ppoWuRxz2fMj57QzERojzAJnmSLzWBBXj3KWmPzMaD",
  "key24": "2xfgJUX8hwYfc6dEX2nzCpShFBqWXdC6UeJ1ycAsG6XZJYreebzVvfTTD6zSXW5m6Gg3DQsXeg9VS6mhQBouffNs",
  "key25": "5Wf7ZG3qihSovH24wVGWbNBoy3qzd3h8bbNaVL6u5kuN6k7jC3yRuaazZXhWgUMPW5jrNSE3z9WTFgykLKQFNR6P",
  "key26": "5eRW28zFhwSQ61oZc5ZsRTqTZeUkS7LcEF3GX8gbLKeMaNX9wqTeZxfkgvbQdJfJup59cfnpijjYbbFUiUtSK6BQ"
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
