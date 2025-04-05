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
    "2HBMYNdkk8eUPjazrRg5KJvsBUMathDqJShM1QbgM4wDmTsRugDzuVYk3kedV5bXXM5Wxo9F3CUUVJkxMUxKT25x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P7t8faciw2ntB7Afb9hqXXADXWMZ5WQ8kcTZThumEFhghoqXntE4CmJovy4RYxQVb9SdqVG9LG6oUrTc61uADSB",
  "key1": "h5Bf4nKf1HFetKDZcjkU8kcY7uyiQSAnLfBWRJd25WkuesWLx7QzVrw5vorNrKeHjPDJyGUhKeFkZeXz7TivfUn",
  "key2": "5RBHafy12B47KHmAdkTSidkRSs1vanrLAHPyNWqd9gFXuaTffstfGgbqbpFK3XNWmL2xuaVEA4whBqH7qdJ17ACT",
  "key3": "55rwnRDZTwGshxet1yw9fP9JyAyKoxsViPhVxhw551er8QRke7YvskQfHJ2YMHDH8VuPFyFfDpGmr2zK16KWsCAq",
  "key4": "3MEUgBYt5bE4uSzoNZAtfWBy19nPvQncseEnJxzfVhFcTAYmrgEH6fBSyzGHbFSAWiK7G7FFiBgXMHXnQxtF6SQu",
  "key5": "LNQtwma6qR7p7rXyvBrCnJCzzDEvZsGzk3MfX8dkY1cVzASsPH95JaQ5vCetB4hE4FVcLeBGsTcv48dPZZA4NkW",
  "key6": "2NTkLQLPgjwjGpkKMa2r1RYByxMJm67rTQuBUMpqDCUNZnrNW6L2N4XDSfwz8ZFtmGrfAs51P7mhzVNzkE5MQNUf",
  "key7": "prcdZEfme8e7Aa7hf9SY1iXmHy8sQaV3YhYFEUEiQj34aRmpBY5tNCc2jQw7W7jErSqo1QZbeugSpQWrARcr6Ak",
  "key8": "5pNyR8afrvt8VJ6Zn1er8N5u8j7nfU6x2wN25Eiode2CPHkGumHaCKoL16ggKLuVecPA872ZR1u1hhsH1yDdkhRM",
  "key9": "5E5Eqe9yTTcekeaEPuyRekfXg2zBTZ7B4mbrZsCBzoAbUSYw1hbnppyMxKQkioGDFmtuFBjY1rhFeA4B3vmFgQHP",
  "key10": "5PfufASF4RM4J2r42QdYZLF8v59cYbvqW7JSqQWqM4DgiLhe1L6F8Ljbim3Tq47ro2YJTYN1SVbFwYx5wu5xbhLH",
  "key11": "3voLrutiPzqPXfQZKN8UsYo4HQ9eJwKBFw83voyqtaV5q4junGqPU1AQGGpvYx8uy5s9kWzBVS88afTeGsJMSxTF",
  "key12": "3NqWXwo3T1Mx3vMvqF3HfVJYqNzzodp7Mcv55GNVU6chp7JsADWrySi1QxoiHtA3fkCJkPSBckRPPWGcMbZa3QbW",
  "key13": "5fYDssPVU78xrb32iWARxPuXaZC5BUGxbUzBphwWhXLaw6Ds399tTJ974VS8p8GN4gV588qhHTb6X1ayyQdKiydK",
  "key14": "5Drb7NZSnRqDijp3jkKo1WAgrnvqQK3m8qxzTxwZJvrvUGnrfcWYw5mj61JXFr4vXggtWaiyw2bCKuR6sxPiKf3E",
  "key15": "4w3zKexk6Kp1z4Nmc553E4QmJerSSRos82ggXXM4RNsj7DgPFLwao68vhBSwE2ngYcniYD1Zfdi1rJowJYmE7drf",
  "key16": "4tZ4wSNskjRmktTB4yYJkV7G5i5Qs13m1TB4H8UNQwi4h5MmWGMNCmsbZNiBujMxzU4QtoVmYmqyXifkuhKuKTYL",
  "key17": "4XYw6hXakivUiLFbAPACTpyCy4LquhjRocVwYUowKt75eummNCPYrQmWDwFsbMv4goo2w5pE8UHQS9LtjKeicXMy",
  "key18": "4KJRrsj7H15hJCLNJhFzTG43C5sxtdQQZVuFMhhfM3XdfBfY5kfHhwCC4nwPh7WcLSWmpBo82W67gKBVKJ5xuWsm",
  "key19": "5tc63aoLUPBoC7wUGHK1Lggp3qBDECYrXWf2YfUpp4P6CzBXNfinkX6cR7fJzrUVPdpUhBmSdeY9cWD8mkdt4pw1",
  "key20": "26F3fAPMQDFufaMdfxXydrRb8KwMVka352ZVG9iDLKwumXDi8hmBaf98KkhyrfdwBr44HHVWvez4H1dm1urj1iEP",
  "key21": "4RmTxxMc7oKKYr1DR77dpUER5dZjM85BcSZvJMJD3Ub3VARsgw4uyANfWETZr2yotzpcFiR8cLZrsCc66d3KrdiQ",
  "key22": "624mvfyAU6HsjRVU5dTx11HZCtdMbDy8UsX3Ed7LXoqkHKvqbg8PDj6gEDS3jZU41cgvLKzcaxM4nAeS8Kz3MYxx",
  "key23": "5iCRETwFCUkexFJfhbMR4K4aSWPmZjQKBRLEtxfd4aKAFTsjEVDV3CBtub7eZTq4yKNfWHyuxhN426p7axCSJfGX",
  "key24": "3h3udeUNzFhnZE7CYTZgRRtyjfZGtbMEeatdkpJF543XDkUVrnfyE8bCLvNgWbN1CLoZ134GaSkjPj8QrqL6cfTM",
  "key25": "gh69A1jYb1VmJYqa9Qrrhnw8vwFCfZvyqmZEnhYLHfh4aW5Z7tQtwqXniaCF3jKCWuZnDYX9iGmWcebShL2BPFp",
  "key26": "3oF82NvmyWbz2h7okXxK3zLGHp7JAr4tgVxC4HVwqaQ847mhxBhhye8UZ9WRR46VgkqgcnH3Lm9XWqNbrxjPXVmM",
  "key27": "CweMpVUkr3PMQamShgvGQ9qBDw77KsERVspG4GXcQy2kqYKmiFTVpdfCpLrxPaiWnTbgNukbPTsa9Uu8vnWxHFd",
  "key28": "5yXKH9SoXXKGAzXimjxTzvQq21mHNdkDmGSypuWFKJaQXbVCe9qGCVknS9Ly3nd3CHyN3Tar2xDToEx3pjGzXfTB",
  "key29": "77FsmAVeCXo6rdQQNe4TeDi3AZmo9GHj18XKSbG3UJY29eyd2Ecmddcex8wMg71rAvVYTu2dEvTSXxUGjV3LJb5",
  "key30": "3Ht7XqzZ73oi6isGoCkc6GrLKdGVQipmFoBja5vteaZ6WEviL3DSmjP3wJiKZygSoMn6hrxcxgr8gTafHQQ57Lnd",
  "key31": "AfxU5twQFQADh2VDfJAC7saEJJ9PcSsVt8zZ8Jv7pR8drWe3qEVHbuDP3YysagmddFdD882GjFbrVE1KkCYemvE",
  "key32": "5w5kc7A4CMPPoq8Dzg5n8DF7eReYUt8mAXZLMN6fDzamQ89nGQ9HzFqy14SYJAzYPQZFue1KDti6SnsFwaCa7hT5",
  "key33": "47jUDaZGendk4u5aanQ2kp6NSSWs4kEszwCkdPsQkXVAcob7pQxkwEWGkMDfqFYXYos1o6xhLqEjCoDDQwHLJgr3",
  "key34": "4C1KfqJ8EwZjGeXYqzemFqXBG6goXGRrpPf9DRF25uWBaY9AumfaQWxA9ug6JMgVLkXAf5DxBCyJPsrAYDHyML6t",
  "key35": "27BTiz8h2pitiLXqnWLeYtfhoZLkUKDQ8bJcNXE4fzfhcvy653sgNqgwC5eNGCh3JeyBTTcpXvjrkKSqNhRLbrJs",
  "key36": "4Jm1hLFGpwKvqb4FaZRxTTUXcfx7P2XGGMptUMJYHYwtN6hZwdApHvDSSJFFSKxp6Qifo7SdhKd4qhdhiPsT92aq",
  "key37": "5VhLvzrKMPrqXWoPDGzHCgvM9hDf6FdivBmZBP3nsG2zqmcMaBXox8DaMy7rTp4tH25cUM7ho95t5VMBCvmuM5AE",
  "key38": "4ZKigs8jNPtFXfimtCA9e6sLFRKdAUaPfFFhFntEvixFgA9dbdrWUEbR3mRS4T4J9KmCWR9SnghZU26kkSXjcvQN",
  "key39": "SLF3PHTChnrEnrV2ZUW3G1LvtfdptJ5GUoe7NEJhsa9LGHRNt3EDiu2aCcF8vmeFoW4nHtm9AWuauhQWTeMpQz6",
  "key40": "36UMxwVPb6f8H1DYHgtrbATfsbnBEVFbPwcVJV7wSyRt6Gy3MZUxcRBC4za676HjSxRaEDLTwRNJ8RJvVA4gb4s6",
  "key41": "4NLL8e1fQ25t42dkyemxrBPEB1q8UDdzwTLHzvWZZARNVrZtkgrdp3W8URUZqhCDUgTh4xnhr4FhRu1nRgFuk1Sq"
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
