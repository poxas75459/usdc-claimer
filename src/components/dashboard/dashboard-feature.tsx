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
    "5wkgfVtr3D5mtKUMPyXt7MFejgME8ZNfTqJYMcmvdC3DJjMHYrs8rgCTiiNbWVV6qVymdthNGBLikC9oa9NrQats"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwXaXAdXTwozTo9t3pRbuiqmwizRVi2ibr9Xaauu1zDnrU8uErhRBbWQzzvxyjKRRVbCEqWA37r7pQrhwXbxNHx",
  "key1": "zWdtpM6krFy99htXdkFU7qzzE4G3mqxMvCbE4eTUG3fTVuxqbDRx7M4Q3PkWvrk8wCWzan7nqgKjN9mfzHuJ1Fp",
  "key2": "364iUVfgYSD7nZA1RSnkzkZao6EidJfoPVoL8fMnESWmNwZAfwjaEKtAjNTYr4qGLq6fmFJfAsD1Y62U16u9vXtf",
  "key3": "3pQMzzpk2koscb4eBL4N2fyhNhAAQdCueGwP5npPp2T11esNUmBKCZdENaXh69ooZeU55YLN3CM6GnesDHnHXSSB",
  "key4": "2gXeRmqGPG3nrNL7bDWqcMyyCsdEQLT8hmjJuSErM6oimjbhkoox4sp6e7qm8aPJ7vcHc34bWkx5bzy1G5dChC1J",
  "key5": "5Sq1H6MgqudbRgTn1Ryuy91ZcjeFNJhSdXfWV17gEUHEqiDgHkZrZ9jxThoqA2CBfrxFhBrUxEhRhjRRju7dZJ7T",
  "key6": "3fx7XgnHLc36cPLVL6vPcBPbeSG7RzUJD8rZe5zvMey8jZtufxCmqw2kHjtdedcHhZFg5TBFXQFcJaCEHUhRNMHM",
  "key7": "GdYwyMgtTc1faTXjezexrpZ8YLPgmRjMiDwsSddmsLpBjNRBdk566Zh1Fhh9tJaw7BUgrHynNzQ86koYaxxWRk9",
  "key8": "2vMkWkLc8YasWR4DMXWFKmt9cYgJCioHh6m65Uf14T1vUJxZgr67xY5nLLEw3BUtf5n8Aw3Wzj3YR9quPUKvxj5C",
  "key9": "5NCBFqPdZQggnJUx1oZ1f4Vp4JnC4WsUsoio2aNC7CMAnnwyShambNd7v9eD4r75umEVJHovTkShRpBu3Jwi416m",
  "key10": "2Jz7s5EggehXajcoLP74WBk6tPHbMJaZna5t93ubyKLqiPQws2LG7mMe6xK4iMXowN2PKkLi3SiDQbqmWGGNjybH",
  "key11": "5FTrLssKs3zaR6WFjEVUSmChgqY1135g2P7LyvWdrwzRbeeUKX2qtfZs2kpFwvT5WnrYEDdqyQRdZuyWTMk7gqMG",
  "key12": "ZpF2PoPSXRknXbiLDj3Zk18o9HpS6iL6PGkBoPVAARTkqWEH5qQnHMBu5pxVvszzWsR3gEsa9qxo87RBXH3b8Hu",
  "key13": "415tZpmzy8FZPgpjY7gHbPwq4ZPp19QMeCXVrET6wScNBDXXYg6BdAs7hKZj2UL4cdi53RrdsjPjgbdWaeYWXm6G",
  "key14": "5T3ksKTWyejeSDj1Dp8RyyNtwftWyAYRAVjxFxkVwZSWB1fxrdAsnfLPQ59RsvZkv2o3oStDfgUXiE5q7wSJupvn",
  "key15": "67eCcp53qwtXVSDYbEfdJXNebF7NgQboenK6xJr7SxfP2SV39pzBTnbZ5n9FDqCbceuBFF7JKCvsSK6gtruhvHBL",
  "key16": "5QmN1hNouZ175rMtB7pYudDPsTFCsMf9XMJt4WBv5sRnoar5K6aAUydN9LARxNW93MNdPAyCYKLYSUzCZu6YtrDE",
  "key17": "2WkkbrRoR5qcXNjobPwySChHcLFHwoeVJZCfQxB7wxGN8qs6tpxbdM8R9cWTPNFzTosSZcUxybSMXHekCL5y9YZu",
  "key18": "66nDNAsX6caP4oLUznEiW25inuvkz4RFbTt8uE6aMqWDPDHkC4nRMpqj4HjczussVUtA6yZEzqejpWf3e1DASUgS",
  "key19": "5nmWrkgSWbgwwAv13F7UJVSKGxEiQJZGasRMnfA2PGexjtkoQsdJDT17ZN1PkQ4MwmFsxLacPi8aWPqSJZFRYPUh",
  "key20": "jNTxRwmmV7CNxeNKHL5aTC8q1RfjhPtmS8TkbhqqhAu8ZVVNfvVYedwSYciRzuCySACWtLPP8E26nPmf4PkqUVP",
  "key21": "3MjMoJ8fmbeapKptcwXTpqU369EzDEVj7P1XSYLV4Syy7i6wXTwQueHcpfb9FmjsPmpcSZqRRLz5VPnwxZfhhT5Q",
  "key22": "3AuhqATkCFa2RWmiY7jPKf8wjxZxAWTwWxDaosQf6DyZVPwK6gJSRGax2Ghn69ChV4fFseUushYJD8sncrLn636f",
  "key23": "3AHpT79QGTiUSpm2W3DyR2uaiSGSmurAiieZ6oqc7zWU2UDbhadnLB7vGa7MerV4t3XP1kRMTDyBrLcoeNz6qFjV",
  "key24": "5BXrF8EowhkVWptcqjMYZ4X46f4d8DSaxV2P1FAvB62PhFg8KwEPLVbBSZX8v7Gi4KESRhVeNwaWb5yu7nyhfh7u",
  "key25": "5opN7TW7WW2o8mTijKuNd289fSxpTyotRKg8xYQ47isUGiq3UhHW79z99ziT2Q7BAz8CfCBdjVzFNyr9Z2BvcDnX",
  "key26": "3bstq5mrXefxnpWRBWquJLJoLZpHgSLYqz2vbDahpjoDaKcX7NKn3iVE6BJj3oNgGfYyiQoNsPdEpYG4XJJpyNSW",
  "key27": "5mhy5JdLAE4ogip8vAFwUo677ojDCmYbxXCXmYAjuMzAa5SBoBz8pa7eP5s6pw5zY5ifDJ7ZSqCLpuWokJEuz2R4",
  "key28": "hqyJZgzzbRbBYMinsUomNkjCYJC3Zp1hqn3muQix978WgVx44tV1XLt36Wn3ogwuFQitdQtL1QMnS6JHEMRAPkC",
  "key29": "2KRQfY8MoisAey7kriAjyokHfKvEoP6kCkY1kGU6Q5vQJx77Ek7bmGt3ADhs6aGzacf5kcxrnBGnQECwFefYYqEL",
  "key30": "2WvG3auBvEsvPtFRv5JiAKbhQbETQE6F3ppaaRU4LagkjXkiMeuVg1sRzzgFpn3HjBGQauVizAXMBYZiiQ9NBjpP",
  "key31": "363C4oB4FgXBciXZ1WHj13xSL7s431Cg2C7DWLmEs2XRchcKmFX55PAA2XQU3oVdABQ6F5QZb6gwcQ9u6Lr1bSmR",
  "key32": "3av1uW4yrYLiAPiQFWBnERkJAmRByxxtGfUusrVKuuj2kTynKY7g9gAHLC9GRgxuhJUZ5jijaadKJ9xbzSe3rXyu",
  "key33": "6Qkp78xw6iU1ijkNVGtiZvMDbBqp9zKSy45k6nb9kmPHHMh5sU7tjVM1CVB3dLcBn9u6Shjh5uU6KAQ82ubFshv",
  "key34": "4pMG2cHjrmqMvxV5zf6Drq4ybKGDGtLdD6USVLRZBs9jXjT3q81CLgRaM7fbXtP1t2VaJ8c4mtmN9TFScyFa4rh2",
  "key35": "Z4i46WkS54bmZNWPSmrTgPFFuxuGyF9uv8QQMMh8bQo4tAK428UAA9JLhc5ctW6sSEYVDK6wR31t7vPscsfdfxu",
  "key36": "2CMcARrYRe1HzhpCRmLjiX4nEwLbQ7tJDCAWQebWk3UELoo6Sk4qQTgrZbVJPrb5jKBpPsgYfuGxnXu1kTCdJiZk",
  "key37": "4jKr4r6JAfR2dBmRrA8EJsGGJHwZsGtMicphDNJ7VMg8toBVKLBngewuBfwREqQamNzGG1StZhGmxRHZCgDSHLFj",
  "key38": "4VVKivYz2EaLAPBG6amYkstT12sBaZzriasSh69fSg7xPD4vXd8Vj3DxfBcHf25p8UdHeZCy5up1c2EJxC5CC9Kk",
  "key39": "34pFY8R9ticFLXbCmm4ADU2vGk1ZYeUFoxF6LEbniSwUDFHTDJsbKEETdfiaEYDoFcxmuUM1steuMyEpj9A7t2x5",
  "key40": "4o6PoPB8iQpQ4LPkBGwWEiMav2YASUpZ617VsraLzeszTDHRgzQczMcmtDUcUNFkfPHLHQqAWsPCqMZfrXG2ENkP",
  "key41": "FhzkWEQKxdJdr8MiAUkSiho8bBxvwDQCSUyDaYMraPrsnJgty776YaXNRw5LUTN2a4x5kn6izrTr6rC3dLfTjrw",
  "key42": "279CaY2846xmvXMW6vHUKdVDE3PFvR9oXiBjVaixrg8q4teEJtz6osmSgdMh4KbTqb31zvf8PbJb4aSkpQY88pUg",
  "key43": "4Dn7bUDWb3FiriAvEwQNPh35SEn9N2HNLwEvSZmJ1mtjZoRtRdi7dwV7bnpQZFgr4321n3AQHEkK97Ly9enttvZd",
  "key44": "3uGo1YSzxLoLZrpyfmxSy7uXystb4ZdogApFZsNJhC7FArjk3w8RGKviZWMw7tf97QBzVAh8hTJYhxPzcyr4iRa4",
  "key45": "54Y6gVEi7ad5c5tAPbeB9YCPxd2hzKYYpCFiXnHK4cS7a7SPSuJMo1HcdyeqN7jMzFDMq8oKbStJc29SKzEqVR9e"
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
