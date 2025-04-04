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
    "4uyRtv3rkr9bn8KDr7HCwGzqyhqie8K4kP3vcAjDHHQx1XRRUvhYegBqNWQWAfJ2s8T2oe9uoU5hTnCBrhiZ7tat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v8MXVxeVnq36Dkt9pGy4Pb4vMSRT3qShnroaDiLLjk5k8PZMynXGanR6AHXbq1ce871eskoku2RrfxUMr2PEirV",
  "key1": "3XXENjoQnHRyji5gTiVpRjCiyh4CtMHd5KuuJFmwXsybX4jVC3Zgsmxhc1zN7BTwXmV65NTdWN29XwgeCEPcm17f",
  "key2": "5uqSvqbqhULMsFb1fCc7sB4KpofCo8hZz6iZRSKyzHwMvkLJJS4TEBK6XLn796q3k9wQb8LaUvLkKAEiEJfeShkr",
  "key3": "3gbXewXGsMForC1hor7z5asYBoMhRcr63y1Nbcv5Tuene1b1G6jL1dgy8UbMyAD99VwKt3aYqEiXnyLn7XLv8j2V",
  "key4": "35RKDaS9jvh4SVEBLfAg296Pr3jxwpdhwTxuhw4tQcDpnj3qPiJyX6zTnhDcT3pkutJ8SBso5oYZgruLb74qsfhf",
  "key5": "Rxjo4ksnja6z6RGVDKGo3o769sKCwNhjHLtNVWt9bKFA3nxGsQyUjdSxYbonM7oza6q2FAGu5NsME9o5RvRwE67",
  "key6": "5nVBS3zrJx1ZaDVTv8g9PjvZ5eBG4MeNU5PQXhM5n7R39PALBx58ReztrS9433HyWaJoYwamdcXJE6ZG8wUq35hW",
  "key7": "3YQ78oWEZQg1soCd5t52tsjqHYDZBBPGpXRJ2gqm2NfJmtvCjbzswevdgAoUwvUYwC9cgghbCemsZnDU5Chstbby",
  "key8": "3oVCFRZT3jv2KnNAenH5dMYrYic365NnAuTCnMTH646PWqmYafsn25u5q7WHP397m6NdHJb6UuPUfu5y39sR8iih",
  "key9": "7WYkzWYxvpeDkg8ZsEAbBrQNGyf8CdBhwx9uVcv2mpvZEiYDwbyyP48FNF9dFDnEertnM4yebrRcc8xipHPYthC",
  "key10": "3Cecdn6Evk493TdgjmSiJRYJuwNvBhW7c8VzE5tnzTGUu5K13VLkwA9bPpGPfAB3mWwdCukFcNH9VQzfVpEF3cpJ",
  "key11": "3reNN7eFP6V1tkUDCWTmAFakuMFTLHRHNTLyDZ4i9u1MVzMQoD4ViLyL9Aj2eys58nrVY6eKxqqUFDBZPZMqVMgb",
  "key12": "3T7v68BnNb4meHFGRkmpYQYffJdgWFMb93MjhKnm8NJc4g9NdB7hR3EQ6jRgbQRKBNF2es3BFtqKVyAXKZ59ac5V",
  "key13": "64drdNAfjYhnNf9VWPxizuhfBcfgSacTQQFZbtDDW5P9cYFzFU9eTRdXUedcAZcodr1rtBbfVZPHhZv638JEg9Rg",
  "key14": "2hmUGtrFYffaPLpt9ULfwEUX2uaExSBN6WTz8BMtFzt8eLj3gzke1Sx8beacHjs6aNxpbFz9enYH7KyddgCRy4T7",
  "key15": "59o9ZM8MaDw7bcAUNdm5X843ftMUADt89DzJWAVZXcxJFbaorXsZjmQfDR7S4GRx4BWqBLXaeZKu5Khvg4v3pqir",
  "key16": "2FNoeTnBfsSpK5KL7ikuoZwZGmRaCjCrAQYjMhPdzpUssAYL8jTSzXWLrSbE8Z3bBY9gqA1Vn61sSNnfAAGHbwYB",
  "key17": "3BjN53eKGmA1xpnf6iZ5wLvcsMPgLZrjMGRGmzFVDjbU7gXyHNjzNkuoC4PD79Dq6ykojQvE6zFTQtTw2JAqJGKF",
  "key18": "3TRHTfE33HJqTPgtzL8SWAX9S3mYYDxG7Md2ZNW1T5oUyMmzZ3Ep2zLTMcrDVjXRbYH8U9AJRCUAd97BCwoyEbPT",
  "key19": "4ph6EyFmwh3FVYkGnVC2WPHhcRMCKCDYKPL4fF4GEqVUE3mAEKBt5SCGtup1STv4nasxDdqG5tJdfoz7w76sHYuk",
  "key20": "PAtJn6cjVuhLNw2r8ridFcLfh7uijxXZ9wrjuf6uzTq6dvYWGqTXoESVR92WLFW38oXb27FpcCdLEgwmsPNdFXm",
  "key21": "4pUg5WH37Uy6Xjz1MC1TGjNBLM5knxB2UWmBjXLAb8MCetHLysTqtTzpAg1XDWmrrrRmiH3tsgFf4prEtRubXR8u",
  "key22": "5LVBC9Hrqp39ffgCd4jFzryEnPetCKWva1Tuu8SZkkwoeiA7k8xqcr6mM5AFPWMRUtzQ7Kpkxbsab7SjFn8XNAu5",
  "key23": "Hv6nrsmKWMTB77acdfzp34Rd174LsqfaDSABbVr9HkV6HK3sF7Fn8XWJ3jKyGPHPovmqWr6vbM8zAuvAeVfKRGR",
  "key24": "3JokFBpbH7VJoL3xov2Uun9kRs3iswXnAmSm5UY9hW1nw8RZWwZtdqewQR5Rqg2HX4CEx7fJFrFnCLHimSfdz7tZ",
  "key25": "4fjoBLsjYv1RH4Sj395BhjaMzRZHjv7updgfgdeYcctVVXPMZkahmpNR7c6uoTrGGMFRQgaKAPHgHQTCS4EUEVoP",
  "key26": "JpoNF859X9vpd6J8Mk2TT1NHFhiPb42juxArnhV2vS5C94Y35xPZWMTpiGE2mpT9m4CwotsWc931BG7KcTyfdrN",
  "key27": "31guTvBekYtGbzBtjtXGNe4i4m3rToDPGrdB7XLziNTGM7fTV3UsnAxvXqFe2KiN2HPjBxf3Nh4t9H2ojpqcvg2p",
  "key28": "57EX4gHd5D4a9XKPp7pVUZxTXTPcMApzpZJbcgaZsssfcMQdVDWsDkbHisUnRzctVtcmkJY6hhH4wRARj6wY1EqG",
  "key29": "3WrCmJGgUG9dLsGffuHkWykP2Wos3ZQHAa5TBGBMrsjWgQ7zaLKQ8cy8gbzv7V1ob2muM5CFshV4GfHjizLbVkmk",
  "key30": "2o8Uij4ZDyBLp6iGDsTmDNyCCxRJuJbxB5MPM8BBToMf3j72vMiRW3rvCVASrrfFXSk1BuLP7fE5LNQ5HyrS5YHG",
  "key31": "4YAwFjkNeHknHvB2F45eFnApyq7DHBdVb5X68ShS2qrtmUTKHvPwKFX7G4GTypeapkLN1voSbxd8WL8nJ3t4uVsc",
  "key32": "3g9xr3VENGdoPUfyVuwiLUc6n76tE7FZiJdpEtC8uuJmfd6NLzoAkQrvE34EnwPpcKumMYpb7N6mmCnHBEZ1AHW2",
  "key33": "5SJe3jnSzUB2DbTQhUSJDZbdfMQv69BUW4jq6jy6yyooKsjwRsHBH5cijAUDYAA4pgmXjvvHrxLfUpS7AFWMT1CN",
  "key34": "3aUjcwGGsA8B7RpEHr1bDktXiGRjCDjTQN7SPV21LN5BUCucvqPpQDZuNz6dyLqQcgw4sHPJ2bC4rHJYkWrNwssH",
  "key35": "Ro4zHoX4PxGzi8CQVMV8whXZYRH4f9N6chBaiGmuFMpEReu35F1ULCJsCkkyM3kugJzSDfLxCZvJaeqPJitxwrv",
  "key36": "ysSzQDB59y7WEmwfGXdaBSXxC8XPsjNbDggSoEs5TyhJwLMkDsgL9wLuYRL7rHuzHU77cZDqUMyASNnGqbFEtVb",
  "key37": "5GgjJxux51manoDwUYgQEMyRqf2weYUuetZ4ewJDcLGPHAwxmGkknm8Di8Jf5ys2gAr3Lx4xE8DYEgdM5u71V32g",
  "key38": "4s74SEDFmT9fJ56FJdhWqDzMxipNCaV6MT7qh1nmPTLxbBJKZWmz8HgRso5vHVZfSFZndsgzRorkEGArtNGAgqj1"
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
