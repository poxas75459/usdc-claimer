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
    "Hz2Lma8Wy6jW8o9JgZ6WE6nzqgHAcyjRoZD44J4aKoPWJwHNMjWQousjTrkhLQdG3iooGhqees6pShMBVJbwvnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HKQ6dKP5qRSiuQbDw1vRFcNSVB56HTrLDVWVQixk6L2BnVaPM97L3Y8xkiMykRcvB6S87ZdVbkdydFDsPkZqR23",
  "key1": "5DUS2Y5Myk9y9rKtAxn7R1cPwbgQRuG43mMLDL1A1taeu3r93cJFn4v3yiYT2BdF4xfDvwXjwzbvW1gGe1ikWjiQ",
  "key2": "5NYc6Qx2WRsFwXAG79fhTiwb9WA8wDwGDiSPiFT76kPAHqoSzkT6evGudCxSTfZgC6ocsnUkhBPC9CDMjBQMeFR8",
  "key3": "3fu8Kr9Y3KcScqosSTD8SfQYfqVjgEqFsQxLp5TfbSv7ewpkoWHUEmujYLzN8NpufmaPG1L32AQ1RLJYybmV1kkW",
  "key4": "3cddFqbCMKYMgtXVhdX3tbWxs2YcJv1q3Q1JqG1MRf4aiHouGRWuwPPMLuHhGvXLmK1vJSnoXUKYvmbRLLsvj1nw",
  "key5": "GGY3ZV2xUrPR4RxDRiLerR2Bgmx8ZVmtiz4XKVDZEm6PhGN8RAES6vJWgoGdmaQVe4m8BEWFNqLZmBvBWc7RmLf",
  "key6": "36HhiVHbpaZtyPqgXXpnVvS1usLm61TQpQiZTNSGNR7F6v9SkxMVJ1zABVwabc5aYjNLWhq8QEehmAAAyk3q4hKU",
  "key7": "2VfhsLzBfjzo9Bi9uJnYCkMqfUpPkM1k3N18avQdoYH4z4pxk5VKD65Ey5EVnidJMFMZGdQFna3GGjy9KxcKddB",
  "key8": "2VgH7yyrnUzhgPkRbexunHSD3eHgCDaJFpvSkremNQM5eLnpcCr95MZGuVjDv3teoFQrAnMUEXugKDJ5BY9ggFEH",
  "key9": "35oax97FuA1bY3LyfrzetpTQvKJ4jMpNWmJgCdJjJt335JB4if8zAYEy7mdaVx8DK3QFXv9f6Hrr7P4MUNKTYtN",
  "key10": "5LA9mUKTmZBcpA6MLmYtUgf7ts28UsPGNvnaboiauhSDjwdPHytUGKQDhteMoJsHjweS1fS8WM8bjx4Zo7UELFS2",
  "key11": "4mqhpTsxqdgSAG4kWRTwgV4hodX5dVDSRj67pQGNsamiiutRtZrVieyr72duWGu8EqwqTPzqM1Y3FujxErGMR1aV",
  "key12": "R6qW76D6TEVbQVhZSWZ2N3aYtsX6Xzo76794BCV8tFqDCNHdzurg2miHNq632tkhrxRrWsYDUyyG7dPykxL6Tfp",
  "key13": "4VaALZGmUseGWP8PsBv6aDSVmvqgAafv3zpQSF9PhQ3SCYveQLcPzZotTZ8sNwCGNSDidewp3jBhw6xZT86YgHzk",
  "key14": "5hfC4iEigUf7desFSC72emay94qk3wiewq1tPdc9UAzAQSFWZPTabA8wLwNpyNzRAmo6UbFoNFB5KyUiezxub4sv",
  "key15": "hKcp8cKp9ajQNZPkcfEz6xacE7miDuNWZHa5FC1CNNiNATkpEx7Eez62C7CpLztyLyu5hjWivxG4fAsQVb6JPtV",
  "key16": "5ggMkQj8e6vFdo2mkGJu6TfKP8TcDVGQULsDkKVdCRTKQUKaDEEjRUpjF8HJ6mb91DFJuf2VoNj9fseqXWNSbUg1",
  "key17": "3sNroFPQ6kjL1yJiEWDX7aCebkvhb4W42dGHLiVDXj78cqcK81Y5GvQRXZhpDLxvbtKvy8iF69GNbQLbB9nnLqog",
  "key18": "5qL5uXWpCWmtf2dxN55ThcktZSddjUvDy1Yq5Bdy8BkpkGsb2BenAA2CgJBsiqLLfLvcaCDdUcMk91bXneA6ttNb",
  "key19": "5k7Hd5gJHEezkDrDurbBDp271i6pdYt2UiUeH4WZRr9nut5xLSUMrms98ENk3QRHu6mLiq4ge71wZcS3iZhynRTs",
  "key20": "2xeBgLUx9TuWDyF5FqpKn1KFJVyxC3FrEuFv3dZURybyXFHYE1PftHvEM7gnBUwao557tQwcxSrSCCmSBU5ZZr37",
  "key21": "JpYeHYzyTCjynTqW811bD1axT8i8cuYhNRLqWAzASBcXrQ9gUsZqZvKkDVxThSwj5VYmSeHRDW5vgTpbNyrwTeJ",
  "key22": "4tngKVEv4iFVKWL1GQmuoxMMeGAPc8PZxbXFZoaDMqojuxZWA943Xxqeo5sNi55Wx97Cx9bkrKQvBNeEhDbPE2qa",
  "key23": "5jQuQr2onx4iiTLuiZFfqp1UvdcMHPZ5iw3ay27wfRCtA5KPaAR9sRoZhUmkE1SkuJRCrzu6RKd7brH9g8pJf1Mo",
  "key24": "3fmhQMPfHdXqebBxo1GgQWYsT3oU2wDQcKt5kWigNfTuEBSjY2FdikjgGtxndT9dUW9kkbAbXm8MyhXnbJAfhpcg",
  "key25": "2cuoXFfdMpFSE4PLGsVVCvTmTwepjTAeBN4fCwN9xENAsYeswLuVbQj7d5yyEfrTGGGPM8BytiMQbBPgiv9W7CMu",
  "key26": "V64q7VkwuinhdyYUx3tdiBiHWdn5mj2LQJJfV2WPN9pAGHgjKeL873uPDKergTUDui5pEi1XMZBwuxwtfQPqwjq",
  "key27": "4inxjmzs6uagvtfavkkvwNoPpNgSFXWwSmXjRFTYVyjQpxfpammKFuzntg2x4mZvW2ciKH6rMy5U5zTKGJQcYx7P",
  "key28": "4kneZpdhF7CH6H81tdcNw7XghLstFTcnY5GoLtG1u253UsAKBM4qiLqCUzZPsgBnnarU9EGvAsZgmP9UkLfUY3gS",
  "key29": "fAjBH86WuCk51tEkPa2juXChcoCozUDpckEmcTPQUNm4Cs9fuBQmjdfJzcHDyn3BGMyj224g7doz7zreuu4m2NX",
  "key30": "3BVQ2Lr6DMA2rtLKpSUsAifu87nXNmaNVCogkErXPzxwynV72QKniXiAunRiDUxepvUKkj64rq851gGHQLmsuKWj"
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
