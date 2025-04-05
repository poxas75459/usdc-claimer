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
    "WsAirdZp96RWCHbeFKfot9xvcyx5uYVAN4o5Ato48f4ZGrhjL9nLEno1YYR3HAS2SSD1Ys8q569etxj49H4Jp8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AQSH7pbNNFJyPJuqdyZkp6YjD4E42ShFCfchYm9M1rcUjrgmap4tGLaTutz1eGkLipMq3GMa7CFnA7bb8wowFMT",
  "key1": "5rwqGibQt6JxohCCnghfccGLXDqswqgwFMCTnoP5iwwTKWYR6qa9ZHeB6VT1bFhHwJ3iyYX9wwzNHSsgqVErdapD",
  "key2": "YNzrGWQXKREpP9yumKa6sVqwG8QRJJu7kbww2ArZ2uFNo7seR7iiBncoJacULbNNmqrAnbtytwS45BxV8KTShe5",
  "key3": "3iJGaSSW8hGn1wsx823BPCYzu5SCSSsjqhKwXdere5FQh8X7KLXbEguEymbJXKMbrMxzHDFSSQhz2NUw9bfhP4WY",
  "key4": "4j2rBMYegqvxMqCungufRoVkgXjjHswYJbq99JoEPie3SUZLYSZP3hRZtTP9bsnLNPWzrWnKkFXw8fYBwaYLrK2j",
  "key5": "5trCX783WtcVuWRS5jmGv14zNgi3fanC8TTeLgpp7JtpiCQaXQj8AtRQY4kCDowRiKr4H8gRfaDVRhR4p1q6kaDP",
  "key6": "2d4yE1WLGFhpuriZahU6syvUdi4TAnPGZjmUfUugdje6YfGWsy7WxJeavdHAKYpEbSZsG2w5PBNZgMVok5FCquu5",
  "key7": "62kwodYrMUXJw37fjjvL4tGhCuxi22iAp6Sw6CddEP9HZqz4thN7g3tECtK9XrRSgMgeWHgeUpigbQvJEa7djoFV",
  "key8": "2D98XfbniR3pBC7gHBd345nVw4kYT4K3WTppJwTsy9aneAgxN9SxNWWoyuDAwxPgdaQ52PzqEFqrtuKZQ9U28qHf",
  "key9": "CQGoZS7pa9kjzxY9gXq5CWjpJcG72zdXyZFVyafvhExNQWwQbFp6rHQkLHpBeUnDUCu8yyBikgdEBrhnWMbCbT5",
  "key10": "22aHu5fis4xdZPhx4vgzfYUWrZXcTrrkZ2tXv1DZsTbHNKh1bHpzNw3nN6snwA6N9CjSmiSv5naXNVFjPQKTS7me",
  "key11": "2WjzTs2uWQATc5HieTkbqmzNdBf8qKvjoJc3fEL9K2fJoYAKSWQDrDMaqwMryacnLdjdSfLtcpdG3KJuPsSxfjKW",
  "key12": "3rYnEMJFCeM1ippwSoKiPCiS6pFqMhJ1BSpuXDKtYdxU3p9PXgHoLZcZ4haX3yfYt8uK9PZczdtdYnaAi5PkonV9",
  "key13": "j5H3kocLZiN6guGAc3LupehFqkeDnwWjgHFYTJRdW5BYh3AYaYrWStvYmB44AdMmjNSueZfJiSwkCAwPberHEiM",
  "key14": "23SzZ1x3CYZ58AjCsY5Q3aFR6t8LDqrUCkDeog2yHPR55nufbFaLjidt2ZmkMdTaAAxuHHWd9Tghsx7FEo2ZnvaN",
  "key15": "4E1MQRVkkqiCdivX4JUQvEkM9wvvoukVV7hydqhnKDe1vVS5U46z92ofTSK7PtSSoMRrH7x7LBvXg4BQhsEagDr",
  "key16": "3LP6oRNrydmYHSgFVFjnizBfS1QnqkoXauy5BBWbWwHoLmRJJCMAq6Jm9qZeJRCBGTcag7RsqBke6ez9Mm9sJv5K",
  "key17": "2s5WhzK615HhSbVRVv967wrnVxrCRYKJjogzjddEZw4hDrmmJYzYNuNLV2TCv2SsucUwBC9UEusLyJQfDRxACU3o",
  "key18": "29zwa8wSnkNQawdbvbFww946bLLoaAAfjNatuG3rewxwRwnqNEEePVrDPHvK3yFCGwK3oQnMgVJXTrPhMoRx3evi",
  "key19": "5nBwZyJpRDaRUpFroZebYySFEiJdjv5RXigoWTcQNDHQz41tSvTHC3ZkMncsXEEihh2MxXExNaocx5DZBN8RK388",
  "key20": "2yoRL4SpQK5m6wznaXGMEBsQ9B7U6nTeSzHJfWMCzAMnXfewfV8tU9rQT9bHGqT3zy26Roq2FnWur2HhGfHMVgqb",
  "key21": "3KdbHGiU71SFujW243eE4p2Vgjedhvfg6huTnkQstkFjZCUWdRjprzujN1eRPGJtTZj8pJe3Rq17Aja8MNwop2V8",
  "key22": "iWgASd2DYHRt3xVgsedzaLKCfPgrHYTPFHVmwRPNakwRTveSJsYwu5uchRNXKoGxyYLgwkFRNWAaK1CRdTRdjbY",
  "key23": "Ui4BSr514MjNywX6xH36XH9L7MzmDrZVEdT287TVC1a5fViTJUSBnKuRwoChzDDaFG5zdWTwxeCFp5DK9KhUAZf",
  "key24": "r3spKioXwUWxuesT9ek6N2pA2niqZLU7BknGpAjvQC1tSZtNVLJxSRqtL7Zwmp9XgrUNsuf8cLuHkVydm7GhWLu",
  "key25": "2PFUvpEX7uLa5DiuKZ3KKsT8XAtkMZRJoCFmUDj2DH3KzPQVmPjvwrPQhpAokrNtsNN492LbHT1XxDwxY7kviFsw",
  "key26": "2eWfGFF3uVzTnfyrH5eyvBpkD3A9cwasTManwgQUWZMj1dFsVkxD8EixszwMxTpkZLE3JXL2VnKWnnX17s9mQRfS",
  "key27": "4agZsS8EsFcfByCtaFP7VUDJDTz7fwf8hXsbBhoisawKwSMXgfz87Axb8bLihTk4Wm36nw91wzDi6jXu6K5vBR9S",
  "key28": "3yJZoLtxJxxU9n41DT3oNTebm9KGowUnUzDZGeS2hmL7pL4LrH8Mus1c1Xwncy613si5S2KaqD2pJjLeG1uviHBF",
  "key29": "36CGJPvTxD3ZffMhRTY4zjZ7tbowuMNgCARBZYVEEt2tQS67GpRpkfrNvvzoTdHbe3Tx4zivx67JaEQ1qFpB8g85",
  "key30": "uRUkJkPPPXzyicPkaSdfTbxkxM97xmCrCRLWQ87GyTLwDy8h3pq7qDhvxYGSSZ6ooNLSxs6eGyfaBUf4wHVn57o",
  "key31": "cG26vzqVknhMT57cnaVpbWFv2UHBGwmQxUkFAGA1xc8LPdbgqZJ2PfjJkeW9ioEccrC9ndDAR5xsLdPibNKazC2",
  "key32": "43iMP7SZfHgLeePoDCcrNFk53X4ueWUkowmFNascAURmUb2qGeF489kRda5q3HTvocmyETjyFy9eBUCr7UbTvSzY",
  "key33": "4xfa3hbSkoXNpsU1qffxFoxHfWHSAE3hu5KrDZ6EDzYJCuFzfbTYBdQcDGfSrHBVW5kna2FUyLT5TCMfZwPb1tau",
  "key34": "38EPzf7RUM1jFPi5Awhet47JoEBvE5koewT6V6hNk2sXNwKSgdwx21nCDthZTEcVAisbMMhxDqTQqqQprPMKMRra",
  "key35": "2TSsv8daFxaCm682nCiMs6inj55FgHgyMbwuFQL9nn68ELNNZbNUdJHCNTBUzwJzbCKbU7rfmQyQk8JsyidExTyD",
  "key36": "54jTHYACmthPb3duzZw6To9Bn6ttUBA6wv56UHyB5tTHyhURg54UgJNPfemUkDbkX7fcGUpbuyedqYtiK2LJvCM5",
  "key37": "2QcVzS3XX3UzMh8CNjkSYx6tKHGq5T1VmF9udx6ajGMtJDHcGDqKw7mN7EVcFxFY8BqwWHxfE3V1hqooYYeUyMi3",
  "key38": "Uz5g5hBMv3xC5P1aLKcNUKMim6QRWapnmLDV4P2W7mXadMaViDsbs3bpRPykeA8CgPeUz9subxJdWBG8KWcBUYA",
  "key39": "4oFHG3vkUF5mAG4NZ48YqPxchgaysdjXWxCSSGFY198AxRcTD4QWFrKHqmadbYHEitGA9VMshs6rz6UjZe7fgATB",
  "key40": "31oheddSYPcrWefBoR6ky2W2Yrww1zsLbzzQ5iaM2uVHAGVh5F9QLDS5YWwkz2TWKGiRALPoNbWkVFqaM4dh1oCr",
  "key41": "3vgYchdvuVsQWyH9yd3ETRbvWTpEKM2LsqiASYsVcK6aEGJFn9DJcehE1ytTGgKRwrJm2eisdMKVGRC5xPsfB7ZU",
  "key42": "45pDrMhdW37mRx6EkkazBRJdMYyFKN4JdTE4KL9NBo4xfzWiJkUu9kRZC8rMbrSgRY4ep5c5zELpgNFdF1YwudGy",
  "key43": "5dgahbDW9gsPPqHmdQZuhd78LiahP3CWCdCKbYyVU5629wdJTLVFs6LELRkeikooZsphMANCGdnDuoBnf47bCYwq",
  "key44": "5ARmtH9jqeoJrqULcQkgLTRzue88Pn3ZYAqdoeoFTy18PLyJ52j6kdVwLujW4cBN3tjUo4wLBw5X6mtnUsUSm4vu",
  "key45": "yzrDrLbtp3DtHwrHHjTuvQDQYYxcEZcDygSxXvitNSkYBa7ckWJMG2YokXrTDwVimY8qzoxp2i4U1jhxCj2qrjE",
  "key46": "2SpjWHZhkjxZXrrXkJjPNUvR6PgYNnqcCazBnuuwd8oUZdZVVP79iw7TCDBjiGqDGqsudtSeerTe4yzNh1iQibcZ"
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
