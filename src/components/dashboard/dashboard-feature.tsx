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
    "2MezyKwrdtBbDhrxUPXv24x8Y9ikurXEo6BY3i2Js8ySKD1QGN7TzhrCqTu2cwHBA5JAk3KmJWy3Hp4tnNmZLn7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kN83eNmsR6bWCbnouG9upfZbFumF2S2oVPphbZ5zHv3AV1R3fi2E7aiC26fGSVqT61oTKc24ayiczXUsGnX5h9n",
  "key1": "2Q5poiCMbteg9KadhJFHopA5vix1j4pCvwjdTxWggTbeL5XyxboZZJyBaVWimqqudKvnE5oZUrtNfrW6XK2Dq7oQ",
  "key2": "2grXhUrn383tPeDZb4RnzLYGkzbKiLUUQGphfvpAYwPkYz9afvWykGgkMdqA4zmXovNmgd1eZYBxF87RZwFBLE3t",
  "key3": "Ype3vmmoVgR1KEmCdXM9Dyp9AYSGaXRXm71NBjjXN4vDGgBja71mzntos1nisT4fQqsFeU4XiHeQc8XM2KsbhA2",
  "key4": "2Pd4UKwp9MZFaAQYfcxD5syhLF4QTMdS14UH2m8StMGQPx5jmUUf1jC5rG88hwMFmVdwY8zVDQjrKJXndpwGyWeL",
  "key5": "9JkU16AEELwdS4DoMDfxE7QAzmkhSQvgmvVtpDcocktKoBP4E4Afmf9GusABih561w7sVTkFTR4i4fWQH9HukXL",
  "key6": "47RevH4LxiboSBdxNrZMNCXa4P8HAxZGiE1FRsBmddDTZWNmgDTKPZmC8s464T9wVHKjS9N99oivpTMCBNpZJ54r",
  "key7": "4myrDvhgjgmSFKWb4JPgoJFUA8kFBjfBA8PrdoCydMF228HSVAaNDBGfWYGcDmBZZMEsYj9jfeBVL36tYeAKXQvg",
  "key8": "3VUeHU2Z38sBme5hZtwnajySzb8gVaTMHcdA4AWjaf8Xat3Lh6hE2XkDYA9i9sqQn6hkXVoW1RJfGoKuFHzMphUv",
  "key9": "3GutBbFLKKepjffwg16bDPVwN4ho85WaKWwu6pg85CnJTjjLhFEmdEQa2YAcsNTTyWQepmviZhswvVXYDtMpkjqt",
  "key10": "5dnQdWFMTx3JdUkhEqy97BuDPfGFtpeiR8FDBpsCYzdi5Qsoed5Q8jkRVe5Bud1DuQnNG16qnG52yRe7o9Fvb16N",
  "key11": "PKMzKh8BSo5NVLHinaqzsxtSda5QuLgk1UMHfJwefAqGUGmWWk8yEMseeLXPXg2z4ixF3Ht7gTmBMkpCg81DTAX",
  "key12": "gVLNPFYdGwPWYHRYtNxpge5PSoZsZ6JjtP8nPjUPWqUaNT8W2vyZsMBzY2HqrrrZbZzuvqWFAWZGYntKR15qPXr",
  "key13": "2cFRm5A97Yis4bsNN9gDymXuxJF7wxYFTeebJZZPaaaYEM46cy2GWSrPeAK3XoZT5kegfpJ7owRhtYTXLLPUNQpx",
  "key14": "48xoVgkKBzYF46zvzWb6M9okaBo1hPnTuXyRyTNTyC7Bp18pQWScMNBCvXrh3Z8zLVdsERDE3hchxt9wXBxpJUiz",
  "key15": "3boJPvQU3PVCXXaaPdmnEFxucWBiSSvzvBnuqFfRdtD7TZd5as4A7V53uoJtNK3afCbaqymxdAyTvacg9jDv7coW",
  "key16": "UmukAsWPEndVFJgPhToLEiEnUEafy9WD4DxwJjN9UCLgjJC4rcGwmptZLzKSYxKujjAr4mvsSH6u1iwksGg27Ws",
  "key17": "4PFvzaBRKyJGuhbXNfxdadx1aV6GkpdFkJtUo7G5cHQXH7ynAyNmaWGRbZBQ1FapNgBFCcTaUtpHtwr8hDvfeTDH",
  "key18": "5xXwBibubQEFZxAjErxTwEGLNDMMM7vM1vMCD77PsxGyM37KPi7T4dPmvpYUAgZ3ph6saXd9BFwimvceoiGG2L3j",
  "key19": "39VDrQLxiyqyWLUL462np4G3neGFcLq8QWGRrV8qxtwdD42iN3bkJBDb2gj5JVxSXwY3HCWCkiDCRvgJm9n7bggY",
  "key20": "XJL6kA1ZSFx44NXR3gzLyCZK4xSGth6g7XpVncWf2fu7jEKixQf8cAkz2JjC7f5cnDq87LJb9QT2yMdkqxHR7i2",
  "key21": "3ixF7EcJFJLRfDc4dwmwGAFZzgx7oD7dYnJPGsSyPRNomVm4gWs6dDBChC5YCBMAnVyJX1Hj4bYrcEWKYeqkzUkA",
  "key22": "qnCpHuixFP1qxotC2EfdMsoSPNSDQ6PyaagGFuJA5h5GJjGqw3sz6RdgFtHHsSifkoYpVFjtoKZpHxMwn9KJBby",
  "key23": "3wuoLN1WEod3cQSEsVPyHw1UwnqgduH4cyEszU3nXL1aTYcegwzAGSXp6vWnjgD8o5bXSCSdeUhyVAELVMJBXCQo",
  "key24": "JdH7zSmftQmoafjpCehVeQa1E6mfnM41qLzXwF2G5t5Y46ZVc2sxtubZzAQ78SzLNNyVnN6qRjy3bSFLxKKjBzi",
  "key25": "4b5V3L9EUgTS7cUcGGjNXLynK8EWAoRMTerPbDuroxS9ZdDy9X9adRigvsLXv6SzoPyFXccBTqsB6jADQgpo8udA",
  "key26": "67UmZXWs8Xwxh15fuadvnmnj9NeKy9dxVJCFauy9RiXJ3WgLXTWT9JedtuhDXuNZoQRrYkkWAt8JZGbYhyoFxti9",
  "key27": "4efuSSv7FpxLDAfb5g1Npc2bMB4AWpcadWngLtymdtnyAmpEyrevDosbxRGCghHJRBtpsNqGeMuqiMovsp8nNmqt",
  "key28": "5G2mX2BuEJQ2c7vq3BfNfVzouqaHwKtY1HKepxZbNZ5UfrHkwU5DMGhp2Lav1dYJL8qN7P52QzRje3VCAXGgDc1k",
  "key29": "25PjYKjUu12KkwxU2941hMc31bXYQAYBek4fikRWw4AQbduxKFNFmZnU6sozP1Ly6pB5XaKBSJjw5R4UWpCLpGVs",
  "key30": "5hZqBoWBcWK3zsC7uhHVGaKZGrmXt6AFXmDD78VN1SA4SvAizBBMHSGoxaUXQN9jpGAyDYYgFmYXWdfoy6sxxBRt",
  "key31": "5rha8koweZ85MktaUPrqCRX1CfDfTjSaDogdkxcbLrntQHnTqghoSwjrNMkn6oL1y8ZeAuJAuQ14LTB2ZSjYp9r9",
  "key32": "kXVH3fyzdJCYLrefYm5QX3uKBmCzbon7v6Aiu1x3NkLoZUqodAA8bPkTQkswq9Q1BvxsddkKbfCsuVDTPihzeEp",
  "key33": "5oYGC4ywxrZg6myj7acDTpF51kiCkmB66rUesEaVAoqwUmVhudcyucJrKenhaLyJuBZgoZX4hFE6RL11xMw62SKD",
  "key34": "5nddxPKQe4KbPW5iG1RwBWTsEShpFZrztgMFCPi4Cm43x6Lmodtz6TBV7KQJVRfxZYub4ouevkyenbuQ855CQHY1",
  "key35": "4yXc7Za8gxTHAWWf27xDKZ9nq4jgYjSRKyGkqVVwwSYhUGaYwpvfzKe9CzL1GG99NgtiUdBqkwAbQTcxunU4i4em",
  "key36": "5M8kXSV6AELFTYBE58tf3H7JL7B9gRND6vmgrQtPzYMwsaBCm5weV2GoFWUjLW3W16RVKLYWPcgwZQryuucCRrzA",
  "key37": "4tsFZgF4cwELdZwVSi4dN99aiQjRFJdwAx5St7cgBW2mzS5VkEBvMAs2q8NMSMxjGSm7k7kz2KEYuYWvhK3vPkjo",
  "key38": "2s5EPs94ZsxVPEB7TNt58n97mXMvGWsEtQra6s1vy7dMKvhimmDNqw7gsAb8k3cv36T1GGXUAyJfoJ5zTCwraLmK",
  "key39": "5tBypyyXMzvgfGoCb7FbSXhoG1jAGYkuwMj4XThDaKdMdYv64MXCi11UPdcoWi1BmxYHp1qLQNvCh68hVfuAdS3v",
  "key40": "6BpEncHJShNSr7zzutUsXJaXLWvQJVQSzeNxnMGKCEvWTwFL1721sMzJ2i9MvtLSEhfhokH3LNR8MG2tSeaBbpt",
  "key41": "4TXW5U4Wbyus5kxJP1dyuTVW2tmcm7yj9Se7WJVgG6k4pkEuDn1STMXPrdJQXGqckzMsfZ9nknZRoihKPPnN3LrC",
  "key42": "66aF9y8udqG3Dm79ZY1bAYSKwqrctUydZ95828s4xrkKqYM2x7LGrJJPuqy1hmFrhvWrpQ2mAVaXCEt2BRyXad7H"
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
