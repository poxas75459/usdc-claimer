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
    "5zQK8oTqL6MyKYi6YMhWfHzZjEjqHAFmQWmL3jbUZVEvAZeRsKrNAnGCYBXzuWNXeQYFQxRsTxQmCuf1BciECBrp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ageUeRH6ZAuQ85Nd8nBmNg39CXqihPRdZqVaPU4w1gT7TtfT94ve8Lyv1eM53kmakK4XJa26zeWqDZLgAn9iSw",
  "key1": "YzqPeDJwkdf3ZfBiXJjT3eUiGBNRJFd64dP5wuJsVn6u6MfCZcyPn2PUjkBMg5E3vXaTU3jebUDUxrFS9vhy3wB",
  "key2": "4gUtw5HwRZi3z4TTqKAHdTPjqz5cYE6Gu2LSMGkiMNjVsnoEPADWDzMdfS3XFVPfjn5hXc2yzjakM4kuUocLSqUq",
  "key3": "3kwkmcxtZ59sV4diZKJ7FDjNLAxnr62KVJkS9Wdem1DXaL2xTrBM1G3WcCAJWGPnsTcauDtrpL8cZputuJD8MmDo",
  "key4": "uZt8gtgRWanz1kbdNAZWUQwTAtnyMcscNU4SJLydpXrm2noi7STkUE3gxYJ6vrBQujp4BcKFA5FB8J9fA633KFA",
  "key5": "EGbours7cXCDdKfG32fSQEQmG8xk1RpLgQ3WC7we1JR3mB7aoczhfnJ8UzUav9vmmvY6WPZk9zyx4LU91HDf5Uq",
  "key6": "5y4GghGpBPED7QTeH6KDeM9pWEormzMPsgDdwfeGEdVP7RMTiBXszoyowgLpfd8RbhHZXGUiqeBVqv9VqkUNiA4g",
  "key7": "4sWbJHMJnLGyWgSdT751op4XdimX2QmW9zxYTvvcMh4iiQrNfeQtP7W7rWcR628DueZsjWYx26g9JS7wqH9AAne4",
  "key8": "5etgfhNsXujKJD1fJB3HVA4Re9CXgQyRhTmLPZTq32atDeDVQD1kHcSzvRgjUh8AfW4xDZmkqJ85EbXMjAKk6Qo1",
  "key9": "2chDQ785RaFHKW2yBFM5N3sGReAzcGDFt5VGMoh8Xrqdko9yoVjGLzutwfkJG8q8FadqisbZiwCcP2PisBMhXaUJ",
  "key10": "4bKwFaDZNYJbnbrcCbqYkDteM212QRbsVeNrV6a1Z5DeyGBtLatuKjNUqeGuUkR2c7GfCwHNGubjZ9XSWsYHkFLt",
  "key11": "2Cm554sWdvne89BmkaAqLZcujzbWg3qFY8Lp5a19JFWGwAqzi9Wn6APApBscTnqFMXZ4uaWKtrLMFCgp11CCCjYi",
  "key12": "2RqcaaK9qrWqVgojojQosunMc8sfQZNQxRq32ZeBKHv9Fyw6t2rDGkdLdRx28s3f2iGAhPnSqdo47vpv2Afq9vVK",
  "key13": "3JQ5KeLcz3ATBqoSyxB2jFSFevTAaqfvWJnGDzXEtgn8M27FuLgdNcaNAo8YsXSNvJjDbVDtJneRYMnF5kzTHiCL",
  "key14": "2tfyWhjz9dkSp4nSTo2BNVRMCzL3qUoWUpLeCYnLkzCeSKAQ12xHJaDXBEKXArdx6gyejJPuBSk4XHVBgf6USFDv",
  "key15": "2VaJsTPFedJ3B5vPeZiePirQfs76B6w4jrtYK2BjavP3YzaahXP3Mh72uE1R6JAFi64vfgGKYTGhAkzsB2qfuUgD",
  "key16": "ooRJHmc62RLzorh5K4avjQciRrQSJs4Zhfv6YjxvnWcQZKWS8cSgcsgx3F425nL5ri8qGaEvcep9sM3PkVZdhkG",
  "key17": "4ak1rPVPNfnSDGeJ5CDCtCR3eoHhT3STcbQJUw5jqb2Pcnubp8fcaPzFW3uXuSbTicSyPT5pp1icyHfq7v3frEMz",
  "key18": "31JXRdc9QyChuGdxeBgRjfjuG1Z4sy64W2uremxwsQKTD1Mdab1YqYZ51vW2fZ93AMUTPunN4uewyZFbZTYUAgTT",
  "key19": "4Z6bqFMK8u9Cxg74psKcHJdnQeUaiZfHhLLdkUZwWXKTh93jvcx1tyefVvZjrnBw8QmK5reZDmEPUK9Qrtws5aAJ",
  "key20": "4SyYMHnj1XK5Y5MfExbGhH4TZTgG5bTW2ynU1HC3N85TuYFRYs7My3BS1nh6vvptDc678JZoxjKNB91qufNTWtJE",
  "key21": "5JUd8sXs16foi2KKBSLP2CV9PeHCcC6Ar48dttuSjheucGKzZGFCv94eKk5pq5xEWJsRdDJ2f6raUfjsH2dKy5Dy",
  "key22": "QsY434V63ZcP7wrR9KmMfzLTntJmqWRC2cUJiKjArK5qgwrGTAToUkCmkLrrQ4zFkxD1ufWqRBPaWAJedKYNaUy",
  "key23": "2M4N6bBZTaLE52eD3WtEZ1xdfS775Qiddraa1zCgsUVxzRMk4mnTTH7obfxGedfFaiyM5aJQz2F7xtEStjSuEzcD",
  "key24": "4YhyPjFnwLSsgmuVFSqB3KRGDASzXCnmtmXw2Ci5bmF3rb5E3Rp3vTskFhWEtbHGF8STKf7UiohpJwQAYWe2wGnB",
  "key25": "QfHLJ1GWw6492Lwja6cfCvku1uPbQcLscYU8KU2jSQLis67wm2JPAX3rSRhj3KHS13Y9NPikioJjTWXvSnzEY7B",
  "key26": "3XmCCeNiWbSGJECcLYXSuUWif3vamXrGBX6W9x1KyLjpqfswSPfhHSdnP35G887yZ1787fRW3sDFMZuXtUEAiWki",
  "key27": "4kUKySfvzJT5NuHE83d1zaGjXVYmUHPjNkfsDn3nU6nVVgdotMbXmotEpo3PvRWDoU84Tt4CuWAGSctee8VpxHxi",
  "key28": "4FsTScSC6g6iJuuQRq3fXXpyptDVgYNX25ojD4RwoCQGGEL7offQV4y7nm3XgGPTdNB5rbDKzDugfC2GodB896or",
  "key29": "449Ldm6qwx1JG7y5bffX4xf3QAC4C3kCxXuhFJKAQtQArXLryTUfuMHR4LVN97vd6QcbmHrGTWcdVDgDQpuNK3hD",
  "key30": "3M1gVd2rHYUesPPZmtbVxwnQCqtynGd26ckdbn3ueVYmbAzAhHyQdHJdMwQNarorLgLQxUKmk8bUfp9ABQ5cxmHe",
  "key31": "61b1zURjDzMWM2FL69JdPK2fHBfpzi7T2nGMb8tLrGryHrbossvocXCAqLZq7BCDxdUyJRtSLB5rn6vYkBYaDXjZ",
  "key32": "4WzM5aUN7ZfN31ZKmB6jB57txfhpMsCWfRqhkvvfUsct2k2ACH8xgFZWUfDjJw6mAB46ynMt3KTpzzp1hPQKvr9R",
  "key33": "3q1nS1jx9T3ewctonXCLegBmufZt8A1bWKoBTe5G8aYjy8cGf6EQo1anTRWoXyr7zUbPexdQuQ19f7C8E12wA97q",
  "key34": "4Ckd8oe1KFxtkCyeYxb1w1vp2AqtG2FHonuXGiQRhUqrr7SJxmawkHh1R3vHi7gd2twMiwx9fUeox34HQvP2XjTv",
  "key35": "26TdZq7V6wpPHpSJfWug6r2vjzGBTcLwmhaGzKonQJvAmA9w1BZeUvLE1MeQg2FAuWpmeMRkjuiVYt37aNXNJKfx",
  "key36": "3q8T3GBQ4VsLcq72BmD1UYYxheDkevEHSBoJghM32ibJXvQQ7jSbX9Ms7wCZvLfj8XMTmAsNAmDqrBaNqUGGESNq",
  "key37": "HddRpEriPMwkUfBJcu4DQ5Z5xSTLmjj2AzrVhHK2ztm6KfXpCYMC4aeEGbXvNSssTqd3pCocmb5qmPQdvRZWCCm",
  "key38": "2mavEyyrjKJ8CJGA4q2SndpmFdcXEQ9Xr9okjvmY9PPoGgimF9i2R3iq9FLVUHJ3dcwaEprPjTFxTvtso96nRZuK",
  "key39": "iPo1CUYhDeMTftpagMWCbrLPr4PEJ2Hfjz6WdfZxVRjAsuFgReGXgHvtc9mQ632Ys13pY4saVDugttBeCbhWviB",
  "key40": "5NJyPhoKfmPa7StBxrKzRFXKfPvwkaDdQavp8SbRXksUcd6mWM3QJCpNEsMJmaNCMiLwzB1fevVbT2Dm6Cf7ji4f",
  "key41": "2MJJyNQQFasxw6YSB6DjVpBaJY2P79r6CJL2BL8WFZk3tqmykPEtY1sZV8rpcW7EzmF9J8t9k8hMqoJZtwXWNr5o",
  "key42": "4Rhrah9mGGXHfLyHcsRHRxVWj8RHNMoFg688p5Nzo5x45DSgKNHL13vpSpiNn2dYkCtzDh5Y3TCEsPkDhQvYiMQZ",
  "key43": "3sSYrTz1V2M59ezNN6jsdJrLhJqYHSBM9T9Rk8GDgc5AfzbVdk2jNhunmbX9FJ2whUPfqeGexA7w8oRdYqrajt2K"
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
