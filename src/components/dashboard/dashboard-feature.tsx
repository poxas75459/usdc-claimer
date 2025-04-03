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
    "5wdtQgEatpAcKZLpaxmKyNwFa9GDzwBfJTVbgu3ukHUGBC4uVjrmMhtHb8324f6Cife7y6y49zVK7jqBTC8v9qYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UetT8u96y6nTaUbzWGp3T6augxSDwxixiLuBXnHnidDRhKWcxxc2MkEJQDanS1gTUCGKd86K7ciYAssVyk6c4wk",
  "key1": "5MkWgj2DqbRJtzVydeSnGYjdbDQFsoE7n7WKf3yK2k6B1vCx6VjEEPZXgLRYF7kmDgps6cVoJAX4rnPfCS8XCaZB",
  "key2": "3o4q5G8FS6Lo8q7RMLRp1Hgpaz3qZ45N8XrAHxsjnAsnmwuaQ6CzNn1LsadbV94Q6HdeGWBqo2BjnhPGMCayCczX",
  "key3": "3mJZkUDKmFyLA6oqGuYF5naWDBWNxndbXnx9h4pkXruhx1phLsbRKtxxFXwM8PYJXfBzt1BNM9VsssHQHHPvGFoi",
  "key4": "56tQfSRx7zvE821CXD2B7QnMJbEWJq2MwJJUEmK8kkNDude9Ao7ARVtjJAMxZVNdmMbTiZXWXZWaGTNz7PrB32zv",
  "key5": "4CmbLPWctgipM8G3NDuUhmwNobCtMTvTxgnZZd1Wife7PHKrvfGRpivfYedwkYMryYPNPg8uJw4ecRxoTW8B1bHt",
  "key6": "4jumAGkHcTndyD5DzqSksiH5hRfndmGgMNcoC4J441PxeS1tfZw8FvQz5VsadAd7rst52P5Sa9y5hzKSe3y4PEth",
  "key7": "2aSsrbkQ8ypLenVWcss3xK9hnmnz4Q7shD5Yhfb1VfaeybNMMtoZnZhqhKif2r9SbAXa5zD12vMunQEDkiKefxe9",
  "key8": "4hDBTAiuHmDvH3hrYXiLh8NwHVduwsqGPsNu7A2qYTvxiZMtJRkAp9uYgaarBjgC45v8S62Tki9xgZe4J3KMPK3L",
  "key9": "497D9syGtAXNRzxSdfLzdYpFcjbEMiwQzdCYubXiNRW8BaR4uw5717Hdn3tmUCq2LEvSpo39he1Ah2Su8GDNp3Py",
  "key10": "4pP8Fk4eV8rLqTKHMEzRWW42ZaUnvAKk8g9QBbki6M3dQVBVXSqRhHnE9vtboeoDiC8MTFwkyYaVsXp4CogsNSQ1",
  "key11": "3XJoamwX8GZcTCwwJmkUxHo7WtwbVx6HsD4mbPyTV1G6E4BJQDAuKEEsAmQiqJetQY4cQSGCiZmdgiebeLKJm67F",
  "key12": "66SnTJVJjjN6KV36pu7xUnnYrkPvVcBYKoTJ4YkvjVMGbZTZzcr5ZRui34rfUtJWPgreAfH8UYCxybyfGPhcg8zW",
  "key13": "wQHtPunnYbN6EXhvuMNo7RxBVKSGtwFNvvHiVrQCXPnMJgHVNduiJXB27JGh4BkjWRHX25b3QhFfhES5DHpgL1x",
  "key14": "284UPHob5RxU6ZBeUjDngG7ASLjTbDEEUgMy6odAFkWKwyDwU1Hv9xhz6WoeXnZvhhGfijpLS89j3NHmcDU8PsnT",
  "key15": "4XVNvGTYNuR85MvfTdHauyxMByyXtFB7S6qApi4rh9ND4B1boX4eNBFMknAXUxiUAsmio26ESreV9hY9w7yq9qjs",
  "key16": "61AvdgAfmiwujF9wnqwCsTxtv3yD5D6CRCuEvHjYUinvh2MeL7NULmJ3NCUV3zoibPoepAnsyikbMtRWuMFe7LjW",
  "key17": "5CQHzF5pWVgPRJ5CnLnSWLSscCJsueTfSC4CoXYrZRJqgzrPNTkP6mJrn6ZXuHzYUm6ZDMUYXXag1AWeeZjhQSD6",
  "key18": "39JQo4pj4bjC4dH8ehac7DLkxBz96gKMcWH1usSPRMD3JWZEDwBEHxGzuGWtD57AsrDh8jbe79hw9bgR19EYVpnQ",
  "key19": "3ahYQ372yedponkLgYv36hdeCaCXhA3E4W98M9HfCiyZ9Eut13SpCgA9KhusPosdwjpfHUnwer7mhtgGHU7ejbbn",
  "key20": "5monHdwxdztLtcBkzY7ZAPTVHH1xAXMCBLhuNhXfXR6T5mjhSAcH8H793HUXP8X9jYdSz7iP6ESWSR5fvaD1HDtW",
  "key21": "3WBKd4ovCko7rZZyN9m3drXEKmSL9x4SEB6UYxHpi31ryxNnspTS7Q2atbrePms9xKcMjfjV7LnsVz2MedAnUUqW",
  "key22": "pSMkr7N3VwNbcvoQC4reCAAoT1eA3dGGvS7JDdgByDMgSjqDcF4CWyaBLj5pkEdEQJsxz5SeBENuoBAxEGZ2D1Q",
  "key23": "NQPYGMDDaenbpu8dk2XhTzs7sFZ3gXTqur1JyYC4bzMNmpjaddfGV8gKd8ycwGbiyd6hHmEhLMZGCSBgaT3uWPz",
  "key24": "3itCgTsGAxEkScTnMWqTcVBJcDZ3kuHwPcDGW12Q8Twxe3PNWibWRdWytAHC1yFYQs5fSAHvSg8tbkNEFQVPZVMM",
  "key25": "pkRg2cRwMLdbqMHdJtBv8rWQ2xHLcv2WHhEX6GduxCCKGnyGi6MDb13wjXockPgQr4UTCGpZ8sMmyfSa4JhfaP1",
  "key26": "4N4ZjB3dEdq96H2f6vAJeXUq2kpssvNV9D5HwEkBf8qSZ3StwtamnmmEDyS6TJuAQJYw7E6vVoWF5vUSktXtUrwm",
  "key27": "2QhCfWmkHKvyUuPSXDqR485j1WnppFCipD281tS8cYjM2MGobqTsHj9tQSXdvs8JsdaE7j48oS8SZBa1xcKw7pNy",
  "key28": "4i8FwcQEddBWmcRfZwmifcmDwiAjHRDT9fVMmWdi64XBmMnJcYWWAgiFHVhbVBaEBJETAnJHcp3bH84XR3H2rHeZ",
  "key29": "1jr62nRzoZ9VrfSkZ67kcNMQFiL5reS3GVwWofBuqWqPRfDgBPHMs8fgdqXBow96TZoLmyyGTUM3TvCoWHERLe3",
  "key30": "38DX2xYNs5mqiFNQLrPPuG5EUSxRPmWRXCGyF34oMtYguh7tDGcVrHi5osWU7G8C58VR1b9mWbC27ThtJygGZzQV",
  "key31": "4Dcbecu181MQYpMNjqrt2cqZCLxMWpFCrY29RMjpA8ptw5b3oktVX67ZN4CHdTKTv42Tk8qHgfCFoqmxfhXixYkQ",
  "key32": "4QwDtmbpVNaozyctNyW1H6yiYZLbnPbnuPesmwrhHEnvZvb9BgEviTewy13LmXYbk3dEW5qjHMrdGoJaNVoXK84z",
  "key33": "2LekSvWRuFZg99csq5bWViLKP3oPepa3K6gEWf3NoCGv8TYHhDwX1YYKMLbqT1h4caEFXYgAb5yKAPLZZboxdSMf",
  "key34": "219YnyA4oPVfSpmWmnQCWE7YKHYRNF9PXxuZW81qHuHgwdwV99NkjeoHvVzurGPpJMoKTgYFjXpmr63QMsabDfXs",
  "key35": "aRSQfR5V7DQTtgdtzYUm2SAgZvjw31w2yEAEf1TSpTMJj7QVuq8QTJUT5ZFr55PXpf6PuGZ4iLZXb9B3QopfgaQ"
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
