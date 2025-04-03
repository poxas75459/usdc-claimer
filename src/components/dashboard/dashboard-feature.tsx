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
    "ij2RMxd7AEmArfGGPn9y8jHymKymbW4LG1aFY6a6YHRDgqUsDuzpBreTjuHBhytPfj3XuW9ztCRyxbdmm2N4fJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wo4WUjHwPWAiRwkJv5DzqvAvLsNFVJAPhZsVko5YKWwTzhREWAXeWWPw4b2PFBkW4PKP4JBm9gEJUN9Ub1zVZtL",
  "key1": "siPQb44Z2bfcWugZVkm1zf4WVSnFMBvQ1nWo1ZnKLDLQndX4Dj4sV6Y5f2ZxrH7KJbEQuz2SxsnRU6bJkiCyqPP",
  "key2": "2rZyWUG7XUbU8bqyyjuqQhQxZ8uSwGaS2awJCWdfcC9EvQAgv2tvv41dCR23fcSUtfGvZk7Z3S6BK7ZBN49Cykbf",
  "key3": "4SvcFKRJd5Dq8mXTuMUw4i62zAZSbSepvso7xmYeMXNKe8EFf7VPmbX5NAmpA5aHr8VERpD8AE4E5ztwWNrd7zQm",
  "key4": "RTitujnRSA5pyESLCwxYhCJMPyyy6XCQ99Zj77YtfD7gTsh2h9wxrfSNFCTcthPWEqUta1Cqab2RnXorAXajbh8",
  "key5": "3CChxcz8fa7svgEj5yKL31wBWMEvkDoV9sAoRyEB4494F81C1256jUNpJvGff8qi5DDVNJ6VoX72xKYKenzbD8sG",
  "key6": "34fkybsGqsaFF6QrajSu1uTRteFNGbVCNSqs7Q4kZyZaw5Hr5nrecbmRPZMUNYBRMLdPmK4czwUMo46dBhZxd49X",
  "key7": "4iCaJYMyAxtYeS6tAJvxXvnvMKFNgdab7MQm6M73wvxfWZuFvncJyMzQ18BZnaynbRt93qhZWtrDkUXQSCqj5gQr",
  "key8": "5EUjAiuEiURVKkGhHzVvTgtMW5nE3ehpVaDTrrD9wCNVG5qbUFNYSSxoXryxXYDiJZ6RCcZU95UwmDYnJ5xJeN8f",
  "key9": "2ZTnL39r86gVfPxbPMUqvBBC56ETsnFgzmjkneENr7yiAKsJKRbUjzXQEgGASoRsr2MnUbhkyDfmRzX8UGZwbjV3",
  "key10": "K7ZZ8fjrZU5j9qNZ9NbfQpjgN9Ds3FU2LDdZBwKfXNnRzHUAymo88NZ7evFZsZ3Jg5qteWVSJW8evM1Qzt484sw",
  "key11": "4G8fMfPK4z8cicfijrBFLoZBp4VdmBL767gCsURfqQjNJnGC6YzvfPFTXLKiwoS6F6DPPAE41WgQHxu2PXFjdsb7",
  "key12": "5iR7S1gAAhMkV5B2y7RZTpsfgR9dJS6MaU5kLctDbzFUGByW1q2tFJ3KpSD4PeXojvQeLAmpYn8XBERvvP2ChnXb",
  "key13": "52SWBdcffpjFztuteiNZNogwhv2WFhQ72hUvtrMwLQfFUfZg6NU2mLe6L66VD7ifsdyUBq7TkokvRT3TEqcPWcu8",
  "key14": "4AyXSSBkSM3iAXcoeQoGi58XZA9KYTu3Ki6JYyWB8NucANC4VregEENwKrq1g5uTSdSgPLbBjhLP8m3eKP54YRni",
  "key15": "2SDCxheDLfzFwoYoTsZUmPZVPp2PCTJA6X9HnS5A77WwytzaXjX5Q4L3vtaoyjckXxjyCzYyqSDAYNxoE4fuUPEC",
  "key16": "XNpL35KURbm61hWBcLAdVQrc4sJzyX4TxtmzL6dYe8uDmuVcBDTYqFkXvgLeMWN9uJKk6DetzHhjZp5DL4zz5J6",
  "key17": "2WKHaaKxtobMc54r1UiLpCr1NrAxHHdg5PRFHdzfcexNUEHVEDfqSMmmT8QvDWDKZiPxsUccszLCLcmDfjubkdoK",
  "key18": "5o7UuYG8sZQ79TG7D5crfXx7EiysemCCmboeSb3EREqXvVRuRi2m7UMde5hM1A52A9UfWs5mUCfSoQVdzYeUVP6X",
  "key19": "5FqTbEYBvrfiFmSX3XFUeZtnDo4zYB6Diuo2yZXbo5UFRrbHATKn4H9qVkmUn9tkHECFBDjjiXAacQ5qwsz9KmzU",
  "key20": "3NQ88kKivjRwsGhWRedqNLcJLm73xJfKh5vzRjbFraZTfsjokwtVxcc9MRmiTD85aEyFyCbKk9THLG7HL1yMT8LG",
  "key21": "48bMewM1td7LgYeGzk1ZVxEmGceVrDnVigKaF6azL4Yf14TC75R3QKidjWDDz2koYdwaTjdbM3Lo32opheUm37kG",
  "key22": "4rB1NpdNwkbuBy1JRDcm4mxVVyAhREcZyEK9drGY8pSvrhKxC5uh3K5eQeBng447hrKET1cGHuUXJC9eyGuwnpXw",
  "key23": "xLaZY8bKPRV3neuHLDoV18H5ikKJZLafXK3tMWp3sc5Yx5Q481wNjyL5c5FihCbpHFuxW7VCbeYv9VYz4NrfaoT",
  "key24": "66JLew63pmgDtY8ZYENbiReSPrNz1whmQ99yr6N9Y9myVtWni9an3eCf4sB522qoeZBNcEK9AQhVDpLdW9QnoKZ7",
  "key25": "c8BZuEUt6TGQdQ5dkEcuHWtdFHdoKEkBgoXmeaXSXZJX1JnT6iUW8E37eyHaMLM1WFPEUwEs7k4ySJ1aJZyc3jw",
  "key26": "632CC825FX6VyXq2jV37S9Kqf6c62fTCmgAYD4NMycUAwQ4Ffeo5RUAUiAJc16ECKiBPhqDDHeo6Ps5CUqLG5XSv",
  "key27": "221eYJEomUY6nFvwRpZc4gXk6PchYBE9em223Sz2fVW6HzG3iMPuHRG1DJFnCiSB8S8aFeXJgKHjfFuHiwSYhptK",
  "key28": "2ETa2yMQ36oSGWvBzaiBkaydSFUzGqLXqFGqVcCec6vf1wVgQDXgwRqG7fcQAT8SiC87gygmSVWTLEhvoq4Ff7fK",
  "key29": "2yBrAG2Ueaavb8QNjcMK44ghWHGbJ7D3JFW1sCDx5xp8YivNxqeGHKxnHiuRCGB8JLqQZ6wHTCidcuDoRmQ6dp42",
  "key30": "4zsMXYFbZ6Hp4kJ3cpLJdXknwxVKKobbNvaGu7Qr5rUTKszCr9aDaWGaV4PHf4GYuo7yyQHCaJ2PDrCWTzMjouzF",
  "key31": "2jzTiHdoUoQEbJoaKv858U9p6fMpumCiQx3jb2YFEeNBEJZhYUZNsf2Cdv4aojwiJmQnT6hdDSQjXZ2xzTSXbgU5",
  "key32": "2UAcUdTetQH2amSx8GPG9Jt8QMoJ1s9H7S811UbFVRiCKRQkKWcmQvwXKHXqmYnzAAaAjTRduvUP3aBAyBSWfAv5",
  "key33": "5f55G812he8ggycDSbeAeHtgz8aEhsPH4UxGWiYafrE7iWhy5azW1j2Sw5EKPPTWktgnQ8ReKq6SzF12VWipJQ68",
  "key34": "2rqmZsc5HDd2GU3ABaJQzdHqRkjDLGVC4poAn9yYNxkzY8wLF8MqwpxpacWdE45dXYibUkcDtFdP3FFf9KVzt8pi",
  "key35": "26vpGoqq2pBmrWLpdYcVaM8mKa1qDf9fzjSfq1XQ2JVERsDQ2fnWn4VZ7PRrKShdZsVzquTdrPxbPj8amQamGmDj",
  "key36": "5PhSwrEe3iGfty2eeTFCGK1TSYw3G8fPxb9rwoJ7DkyGH6p4tTgV41XbsFnpuVK1H1UkTKqJBRzwbwreRWhWDjeP",
  "key37": "5b5qVkRCH8xEuwm7C6sMgcS9ypkpRdCrRftPV71H8zGWqD3SH5Tb7ytVYfKa6jR8w53Ls2cSZZxegUVa8KJLD6jL",
  "key38": "2aahDC7fnEhBRAmhZaeTtfUkjR5SEZwTAsVoWAqo9CsxRpQjnwVgxeG2m3rKuh72EUqBySReaRaTij9q5kMeBA7V",
  "key39": "EZwoXVSf7RNS6qAbjSJGoV4exoeCCapzUkTaHS8HdAzQFqLrEzPR6UXXsjCTC9wC2SsXVxLobKvm7vYhaJvCiSs"
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
