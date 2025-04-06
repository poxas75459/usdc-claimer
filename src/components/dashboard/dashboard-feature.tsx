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
    "3HeVhJ45RanXEKea6pYFfy72ho3UeeNufE7x6ynFSf4pDioGUyMeJHEDtW5sRSHrNkBrpDKV85kpNhrRrJxgjKhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTHYakmziUDew1gEgk5XaCJ3yrAeC9TjSLMaBqrFqJYTMg2D1PPpC8YTqsmzD2R41e3tkyW9TnLiaX8Js4KP19y",
  "key1": "uuJ3gu3MGZhZTTec96pTBbztncspdaTaWfuVqZMzJqqZ2VogagV78qKJfHwLdW4Wbt3iS8MLtLSdBq1TuwPmVkV",
  "key2": "44hnLVpt6cxzpmz14zcFtPD6UgLsYNbChGurrkF9D9kuWGDxESFXrXgBhDbatd7pdS2WWgmLmrXtmoSw7cj8iXN",
  "key3": "2muuciKNpb4SX5K1Jomj9SQkbVkn2agz9MHMQU96wzMZvYiwG3pBntjeB3c52kVboyubYMEusXwkuNGSXpHGgX3y",
  "key4": "5JgwQfefLzUugzSsm5w9gSe6bvG5wF4dbFEk9dAYnE7Tu8vEwK7pP38Z5623FkK7RgZqJA81ZrvVuQx6AF3ZSdGM",
  "key5": "31gSuoMkB9uLSpVDH3VQEkCYMnYjeqvf36o9ZkzpKDWHkxqHidZEGM3pNeuKSEVgpPwfiJmUo5Frvp3a7GGKADnQ",
  "key6": "4FZ3P2SNMygbyw6K6HTXhHuFMaAvDbAxmf2xLbFEU78Ays6pJgDLnW52GVxKKZiEFMA29EbKQbJgo7QhCTEtkTZu",
  "key7": "3k38E6N5XyMsc6We6ZCHuNwZdUfzL8tTigKFoBfxrLjnLygAprrANVTwF7aBSsSQYETiMvACwHgnagMAkjFLAYLf",
  "key8": "4q1RLEva2myxEjuhFBHWhyGK4cLmVVwtDZGWgW45Ky5nWK4rNMUv7kzotHX2B3tpLN36d2xAxna2cNmN94WNmcHt",
  "key9": "4a8B29wUJZ4BbH745QqQ8bZRbSyzmdFc3mSELCdTPsuPCfA8Fmw86hfqtMEeKwsDU6yAX1csDsnT9fcWvQpa3jKa",
  "key10": "4wkycz4WKZAbxoegsFe9tKBpFm7KnH9M8HAw9LQS6u4r9ZK6de6h3p9K19rF2KMNN3SKr53oPQvoYq4pUV3fND7S",
  "key11": "4zXz4nrWez8dWVSPZTEKAQ7wgK48jmZN9B5JKj1bwHDsZS1uaxSzP8CpnP9RpQbh9HNoRkLCu7rM3yoJvhNy1KCz",
  "key12": "3ru7jsUneHnbAqCgz5mLEsdaUaiwHMiuUqDkLzDnrQECpCYyjEfndXmUz4QeLg2NfRJn9GeKoBZWTuCaMRNbJ7ZW",
  "key13": "45T9wGesKF8PcqPzG3RNCzQSKPYKrLvTZrYhWQzpMUSEz1LD7Vwr36nzUUL2qNkUdcLuQSSA6D7i9yKuwnCn5T3c",
  "key14": "4duXRJxcAZCir7AWtnZmrKe3ZXDPvDhTbi8FMYX2iH11f3sw4LttPHM2wgwpnMv1gxSdNT34BYyFzGCbSND9By9p",
  "key15": "3nqaTgACTaSWuuuP8seKvzQQRenN3Vma3eLSuvyEsA4J3ufZT48qbcAMiJjy82CJifiANfio3eLvBvkksDW9PG8m",
  "key16": "5hqMaPCztQFfzHV1tgaqrvqjdgnfQcNu2BxWr97hudoE3bZbeqesnczb1LPDp2w5kjZUGuFLNoMAzZPTtpEh7p2D",
  "key17": "45r8JjXpyLmMSSFHewFjafn81Yxcxmwp5ZkRXfcmXNvPrQovcWZNgPQX6YoCaWUDb483awwvBxEgaL7J8ZryULSo",
  "key18": "5KcGkMLo19d3TW3Y4GBVhcTEsuGksZrkSvRBqJudGe3SPFeRnZYcdkZvzbMQMtPQnM2wReoq2TDfRqPkhontopTk",
  "key19": "2ff4AtWfya5M1NynRxK7KrRCw2ns6tPiyp5TrgH2qhXo3UHqEyLevuProz5Wpah9qku3qJ42ubT8LUQHFk6rXSiD",
  "key20": "4FKZgjLfUAv9kvvaHkXGWCuU5PBWKPPriK4PqfJGcasopV86HzHVM7m4Ges64LgvP1e22huUm6arjyLvrxcNZF9Z",
  "key21": "3jEpaPXpKtGVaDq4ndx7eUkEHpFirpQLMWyChS4jmSbtpihQDvPzBr65Jw8KXhdHbLhqH5g5gpVpEKnJxj3JirWY",
  "key22": "2m26foNwBqQbLyB2bFZCDZadyN7A6G9ZHyMjucxoNrgYaBNokeWW9k2boJ765iKWMe37PSJWbau7hMT3q3JYnwET",
  "key23": "22HAs6L4g3xXxQWQ2QXZqJYYA5Z3xB3rM3kBbw4fkEVwWH5hVwe9hGEmydbeJWaRJp8Csr5akPdv9nQnyY2sQewS",
  "key24": "3kSSLp1sS779s7VrsxGTtho2ustuWNmjaXUdsRCoEJgneEukoQwHKT5KAtv7DxSUhyrGW4w6d9XfpEVaoyFZuoHg",
  "key25": "x5uC6S9zxh7sQvGqazX9pd1xRfHf6FfCvhRemVLPyKPh9jYvcdFzu42Emd3DKU1uPKEy6Ub8r7Vh1JFNNJFvctX",
  "key26": "5gLGt2TQeTYjCt7czVHy3iZK2zMHEXSFxqsLvuRHZys2KMinimJYSA5WnhjrA5X1FE2vJarS9XnP3GSdsb7s5zXQ",
  "key27": "5DWMdCu8AHCk7BaHjmAXgyfTLihDtr4VXWVoeExvumEtEc2ZYcUs5uBTXBUc6SND3qpvoxRSaY53CXHSkLTCeGUK",
  "key28": "4xukyt2SVCHyjcJWY5D8pVLMVCqXzWjs8LfU2HTwt4nba2qCBDs1xVR9Mjw482nvU8RY38WQzchSp7XZWKXZGwr8",
  "key29": "4G7Ypd47J2r142oNiieJ7K59b2ja5pPuuPwatY66brayYjuiq1L8UaJNF39vhNGH5VwQdcDQtkBkzQJ84qzbrAit",
  "key30": "3z3gNSdoicGcgGH5txQd6PYe1FL6iCyz3ggzG8AuGJPEWfsQDhzdxug3Rrf2gDWhea4Ty8azJw5XBCLJCPZhU8oT",
  "key31": "5du3svFcRPB7JJjhYj7qnp1tb2bPQRRfXVxLBj62ci35S6dna65zgKpLQhRfQaE4MVxf6wT8Lhy1NUozFTb7ngzU"
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
