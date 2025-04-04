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
    "43oYbg79CJM2Ra9SZiNZ8vfoHuxannuQxk9FvAP4X41gvoZtnWrHTWjVZRTFBf9EJFahKb4dGmj2MCSLbbyXtLaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdZKNLov3xtbDQkD1iisFBE4LAkeQcJLYTbNcCYEDqovQnEJDmHjThfVCPiUjLejNEJPGNYhK3LeUZkzUqta87b",
  "key1": "qgxgN8Ynd3c1k4sB6MU94dEXH3Mz7z9DBMmAh31DonXsm67XAoBYA1yCNEdftyYMpbHcENwdTXucPTGdCtHzExh",
  "key2": "2gWnAL8ZbN1hf8VBYSZWsJCUM2WsBcQEF4mLxpFqzJSZMzGNiCrnpojadWwALr81eSU4X4pwTxnpNuty7uJ3pnWW",
  "key3": "2RgL6SDfHfPnjqiTAoVAJqqaHmwjU2Gx8k9LcTSuT8gRxeSSxmxwRoTxPNr8hXhv9qRFUvPq66AeiD9mHcqJ7i7z",
  "key4": "25rXwaeCYisxGmym7iCDCDUWj1MMzeFVjmXQxKaZxsSqqqzC8d5i7RXjqrAMExYjf6Q6US7nAHDVTXVG97Yn9ztp",
  "key5": "3BuaRDn85rUE8xwJSqAZqDu87FuuRrEH4FyBmtjkD8D1NSbkX9ZMDJTB8iFYBinBpin1EDjFEpE2VDDdM9x2TBT8",
  "key6": "4zkXtYEnTLPAKbdA24ZPSYagYoYPNQPxf7GCt23HkF6WCptcguuz3QtifEtK6dKWNbF47rLtdX5RXX5HGecu5F4M",
  "key7": "2cqxwQbYrBnLPu7G9Tn6XvL9PcVRiaeBQJN8S9Ze9zGa3zDDq8ZpqPubbgdfJ5MCT89MWdE7CKJB4aHL9GiWM7mX",
  "key8": "4JmtqwgQDGNuR8FJmjbFnpNysJDwvAj9wTyHmNhBay9aqzctLitiFtyZEJLJJbHBMKuzxC4V1Dy8k1qv7RW6MoJQ",
  "key9": "5GNGK2FjzdKJyzxnuKvrxFrfRYstLrsf9cNKwFETHUHkbkFawPyUvRzp5oSmtJBQ2kYwKc63QPHtGZAuEdCUEdSh",
  "key10": "4xgw6GazSiMNPP34XHbNprDkgErjNwLJ6aPWPEC5bpWyLfGXmfy3TDVd4vGjZcb7LYbadPdc53DWPx8WDiLNciSm",
  "key11": "zqiAjAaNmCfyyuapEufnLVcD3PhDuaxZ1aMsLCN4E1dUwzDsGYrxpsboEtzQqbZXX88jwYhyCazRgxJaLKzNF8w",
  "key12": "nX1ZxJuoj21NkXyn2jvPFLHD4TxVwMuKcTgqjzPqRERbL5Rv8bLYmiGvwUQPNq8UdCQ8fUecHxvWroJyDaSQp8m",
  "key13": "5oXdcryiav5UVHKSNXmUy6i9fH8mNsJZJU6DSuAG24sUjMWPM7MzNXDdoGtvAYxFX9JUt66UNwQ9MN6G186wq97b",
  "key14": "5y7pNcEjLMt9xRubz13aRPat8chA3B2k2JfduSNCex8DAZan9hNxoSQ88JK5A4xtAjD9f274tVecKBTPpaV7NxMn",
  "key15": "2QaW6RYMPUPxpGkFZw8uiMoaYPwHDm7ekHRFFbLBNUEJ1p5iptXSjgziWk36XfRoN27e1CZe8oqJmXYjyQCFxzaH",
  "key16": "4mmdUjcnpzBnU488xmE7rEPTqonLf8VGbdH7fkoBkciN74B5kfW1iQ3yvSFbwW93D9jhcVBuP2JQq9bcbsGVS7hr",
  "key17": "3bwLzebPGePzFu9YennkTWg6yxiq9iAsHgTodnnSJq4Gio9i4SU78ZmpV8UWmYu6238YVSuHv4CJrirAhtQqN584",
  "key18": "2wAR3i6DWg5e1BWqC9jzhSXL1oCwPjhtc2tF8TbADHDh9GfnTTULfyNRXffaGZMQ8oGtWEXbovRQP6Hq99CcBDUM",
  "key19": "5Xo7kAarEYskANPcuGULgqGsYHjRdBpF5tzL29kBm99YTHZd4XsCy6DsvMDohCtwsMGqchm1A94Ec1kuVutjhdSH",
  "key20": "2n3BwKXKmrKMyjc8eTa3gVxiQJKkDmSsTKHSKd89XwxJvHJrX6FrTd7HXjmb944og4VtrBZbtLav9jhcFevb1iif",
  "key21": "2yzW1FVHD8Q5MZVGUtHH2VJXqdW7LmRU4UGD3zbm44EVkbhPfaaoRWpKK91LWmtfiudswrJ7CDCLojdr7d2PjFH3",
  "key22": "4q3nJSnk3JBVvjb6euvnbJdpGDh4oVuQwsKjaU9BvCU2VTnSwB67fSjJvA1SHfsB18pXaJMtLeCta2gpfth4Augd",
  "key23": "292orusdGPB1A3wxGSiXEmk5rTxYwELZYC4EfVBTHK4VXEDHMFz2SRJGMz95HTjbNY4JkpgvMDZD28Q923JJyCKi",
  "key24": "2Hx9JVfNmBUu82upyveQZ95zvsMiNL9q35Px9EUuo8MiM8uoFD49ptdVQX5iP7gmqZ5YF29fxR48qiMgg2Cu7zq5",
  "key25": "5v3gh86kvbkLndR51JU8xCLJDGVabJqujcbBFLkU8N2xY77GaaarqsyyejnoTJRxQztLeKLtVut7zHNjqG37iPYb",
  "key26": "3bb2B7pM3UEs2k1g9CeHE6pHQgBHHMHTUWmq1dtaBhXnvVQNJV62sgdXXCx8XyXVHjKtHiwVMHzbXUHgAVViHCS7",
  "key27": "5vGWLzAusqVrGQdfDu5m4wnpxuvkM83gFTPeiFiG1U6LGYJMykFTzVxHkHy9VCRbwXW6papMTs4eAcPveLE2rQo3",
  "key28": "2Rufppcdvg2efbWwcitjHpvGn8tD7w3h4bGYfXEYsTRAX5v948CyVHp9T7MuKh6qZUxcdzyjUVyJqvFRsAMepHej",
  "key29": "5ezxnssFxSWVGxeMnq2hJwBNc4V4TrEA62D83ady4Tv1FEKUExDqTXRENnR5D8TP9qnewaDs8gXcF5NV3mfbJ5Ey",
  "key30": "5oSNDiEpHss1FARPefLgsYtkS3rqGHSvPRWtUfvNh8sAt7AUsMiDCJxX7CdaKGkV6bvnCXWELJLMNBSfh5BCWybx",
  "key31": "25eXoA2ZHNfxzHyk9Nf6NYz1pJrsEqoNHd2r4De1WPatu6NCfiEgXTYHRUsMrRoTmQ9QqzgX2ek7p6MtYyashZCw",
  "key32": "4Eaa64JUpnxYcqXUHLJuAVUoMoivTKWHVeyBKYwFX85xLL4thdHuozskQ6tECUBSKDeyytNy4XuxF2UD6PTw3jiE",
  "key33": "2uXNRbq7JXRG8buEhMyZSaCnw3YSpSMJueYzeJr1Aj2XKpfZK1S7R5gzfHiDLCykdj4qJziKzECJ2kq3Hbwd9fp6",
  "key34": "3uDc8k9SiKXuCx9nMLz6aMLPiJFJSyhCYAWZxXzdAeZs7ZKk7x1zBxCJnbyvFVSUH53MCNz8Tm8AigFhEyFRyqw",
  "key35": "3yXvWoNgYBWrREWn4mMjZWKBwVa5QGdQWd2dq8UaRirkvw45YGavjguZByfXPwia38pTurCen9LwRsuyRggYf5X8",
  "key36": "2d7NB6NsPiyt7WLJMbPV9KSdBj58t4HWrbZicFUAvf3Jp5pUadusrHT2YDV3mr1RDZwUSVfhgVeHgvwo6hqfpp6G",
  "key37": "31Lci6kACCuDuE2DVEk5ym6M81rgLpF2pC533JLZAfoTEGimqPsgPYPgwmnXWLroQExj3eeAGCvwAabGajGPkQXc",
  "key38": "unqRfs4jPKbfgbi6j5YeB83QLWwvxHzEuRZLTo47saiyTFUa3a1XJYtCGH17qodbjiQozMmC3CQYi4B6x5qpebu",
  "key39": "4t41z5wPRKFnMBKnjWiKqV7Pr8V1HFdpMxseeT5EmxRLm83ps7DQ6SFrxLkmnFMDd4haQW82THMJ5qvJzkznCrHZ"
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
