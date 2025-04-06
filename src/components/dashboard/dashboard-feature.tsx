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
    "2EyALEdcXkFCe4WEXfsVEBqe3jaFJfxXmeczDmyAdigANiiw7vc1pgUtBGVb5psZDhrbTZc8fRMRZABqPXNsv9ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LfWFC1V7DfprUqtnqFMFNP4t1WEeVw1rK7YQNQMiwZ48o4G2rf5qp9VdSrRfxw2nDrKKedTSC4TtvdU5aq5AhLV",
  "key1": "3oyTdUqqCxWX3f3htpQ2m2GLgDQrwcWKTuJSUn7PsvBAXuvEKWPKAc6aJwagPCqShyxnW7qTe8hsJZu4CGipFV3T",
  "key2": "23RMmXiN7ebGjhYJrYDPehmm8e8DwBTyx3mNKZ642HFosX5MrrdcAom2Ho63Z2tQhXcFFFgLzRFm5REKfq4fCsvx",
  "key3": "4emDoTr72qYQvRyfCEP8Y9g4hThK1qbyu6zpXVUoZnCCtqyYULFkScAzo6MSydqbG5YmFyR5q6ud2ShMD1p9Wjym",
  "key4": "2JpC7Q3LnDkAGrASQXWx6r5yWYgwGQmXpieA4rTZBmPW5tJWnmpuMmoyiiAMzsarzBH3Gny2TJ85xvfXPau1jDc8",
  "key5": "56FWESp95XaXC7HiiSeBxHTyQ74HQSFkVt9TvXBaZPyzx7tS6gYCZesGUq9mXuGgWqRsZEABmeuY8UjsG452fXid",
  "key6": "4mRoGcUQSxJ2Y9f8U5L7tzvgGE97DFWbYKBFw2Tf2J7jvvuCDSTmr1PKTXjWSkumnU6jJo8D95RgD7S4nxnhiAkY",
  "key7": "4QGXZjCBHNvKiLTidEYuE1A4bWkNjaC9bdTrA6E2VMHowGdC973LD9XUREJePBRJLdz3W5weUdhfe6E1ekPmirQ8",
  "key8": "StcJEYfU8Wk7ySeqWj1TXasQYtK56TMKpfPRN4W6RAuDUjnPRH5aHPZQb268ZdLdWu7HU9tiLk5kashvinpDVFW",
  "key9": "2bsnxGcMEEgM6821zDByXrtyJYo6dn9JypkuXW8Uqjj1ah5HVGRAfsSpKVp7Xi1n2z8uHnHpaAqPHAJMALRMq8bP",
  "key10": "2Ciq3RPdMtaJP7jqxNLvTxASNZAcbmiNakazPRZjnvQ7pyB1yqRU8DkADWJPh5cRbyMDmtEDuJHoF1MfRXaPZcc3",
  "key11": "4hsdRhFcFC5SzdXNL5cd4fKgeTkqvnez1ixoPpbDtjUyj5eNqvBQSPUVhC7WLwQkkQeFMASdkZaXm6wjLsUk1fYs",
  "key12": "3ERyvbHRXaQiVRZWoA5LL8JThfmXgi6tUNFa37i8odjeWwfPkZqbvUsLch9e5tDzD8TsTA6THLpaYxWXF6k7vTN9",
  "key13": "4oyKn31Tmigi5c8nF1juwfDCqrYNdRg3eYqb9PYqkh8n5hqSUwU1CQUjT14UNXmAhmQHSpLumje3rwxaPJymvYtD",
  "key14": "2qZ5thNejUbwpHMDLwmtVC5ou8EAVLayJozcHrjxuZSgCRKBPHhzNodEeLRJF7r2R6SvinyDprotCgYPgYLCVnhN",
  "key15": "3jmJ7crrL2QwsyvYh6BghxUkVM5uEx9itm4e1Rr8XNa5dxP423snH7R88yxs4AfajtDbj8zRKCsg9sg4VjdpYYY5",
  "key16": "5SPU3ud5gHxP876K8ksxbCPS7F38RQQi8KgP3pGzjtGaiyQXe24gjSuwgaKCWWSCujkuvJ6ySw9AYcdnQyV4KWT2",
  "key17": "3vAfmjZ7Lux1BYwPdRqpkZmQuoyL8jRERTRetEZm24kMwB4FK6zSDbxvtZYzWzLoCXGdzjhGRZoD2NUUgxnu6CxT",
  "key18": "5sBQvHxGnEZRVrZ5HvAhpasaBFWQA87o5ap4S4fYNuLxstz1aquif3JXNyQ2XiMjZPPBGox2TgTcrrPzmNXkhCyZ",
  "key19": "3Nv7T84MqbdE8ARH6bZDY3f5VSeGDR6mGREYt6YV3PuxowUdpSG84prfzhM2hZ8A7vBR4EzWEstSjd6RVJ9sHGuu",
  "key20": "4HewBLJFm2y1FgieDfjPNZyMCa4gdyahRg5ozfNgsY4ikpftg38nF5uQKBwydzEB9WgH2CQ2atZS2vdxaXtNvZnY",
  "key21": "3bRqsYF29F8LpH6VktriupnmNWuwa8LHBmTbN4ZWfgJb1BcBitaVZUhRMaDu44kRRrBbTr7YHq4MpoXT6V35dJph",
  "key22": "3pQtPDJZxopv87skAu1Rf26pPitotc3jqio36sX2oJX2rUTwkxNr3gUiKp6LTSsXp7ftKGuie6e3QWyFWfMYZFXo",
  "key23": "6c7A6e8JE3BPhRsvXvB1WuFEVrqyQD89ELxcDGXrUwdsNzomThbyTJ7FQn3jNiWt9abQkUSiAshtpFfU2nBYDCM",
  "key24": "5qcXHsdfccqpAQ3AJiYV1DsEGZ6GN21DcDpHJGeifr7q1qax84HfRhBeeCN7ES4dXCxAZdRMFf6z9izWEmUULtYX",
  "key25": "4bPHYdKEvD14BUrhzAR3ptkmEdXX5dwzP4MnXTPU5fbPrWFeAUDAGg2u6eHq9ru53EwMCGSKpa5u8AiqQxDWP8gt",
  "key26": "5NBWgzpBLwH6kPwFaZ69c6dV3DiGgUkzv7CBVDMMyPy36DUJTBNP26ef6Cu5XHz5Nz3mtXyLykmLqbSpeAUjP8Jo",
  "key27": "eikLod1emgBxEP8txDgyT7ShGxpVdksfUvryiydVm7BM4bXh73EvQhYjgNEtb4oNcyco5EXxy2b15PVwM9U8n8G",
  "key28": "ENufr5YsYxiHMhE5UBAZHej3nMhaKvnjCDu3dytpoV7Anzq4ZT4qrsm6ysZR7SXeH2SVQQWqGLBnvpW7S9gMquU",
  "key29": "29mc9JM4szLMbKHTY3vkihpeZb9KzrVfsdEXtjUwrwBeuxtNFGNCdHgdu8uccevkvh69Kwfzk9HRL21UokvSyVWd",
  "key30": "3zNnxrGCnwogbjsUsQ8hnqJh3XPb3YLpQVrHoAXCtrLYaPTTrCYAMso38so7WSq9bKC9LvWYKmu1eGGzgf84q2M",
  "key31": "4NUtDhWWL2DS9GUUG1udvof5FW9tKS5yMnv4VjNwP7K1MCqam9HQe925x7vD359xMjqV7YArnkaUJVfTwcRuzMbT",
  "key32": "49WfJyW9aeG65fZ64LtWA6PNhvQQcgHSpTW1Ur8YQ85s6EdKu2dfXhfz7dyheqL4UWW9nxpaBXKq4ZAHJeSbWVQF",
  "key33": "GHgmHai3K2HhatjhY9VBqZhPr9py7dCA6DRWpySY6okqPKHAzZibs3PNY51PbFKgmBHPoZusxSVGGvkiG3YZdCF",
  "key34": "kvG6tcgNzCnPC2bYtxT11wggxyhKdJ2dkWkc2QLXKpRzsZsC8Gthu2XhiSQhcMrUXxT11E7EyogPkU89RYjcVwF",
  "key35": "2wfs1iySR2aYEgWKyFjqrCs5PDJbPg5scgpGgUnRhp7EH1SGV98RZYN7qWPgS6TMJCe4QFRcEoTXWt4CwgNjWH2w",
  "key36": "3nFYNMsJRrcnCe7XZB82o6oWKrBBL5KnMGnuJYnxFRNWGCkn585UrfRcLBm8aeUUTVfZezYV19LqZpvtoPgvwkgp",
  "key37": "92rrgb9veTTKDL7TxWdGdtjPehFfnJgV7w5GTJH7y6b6d9rfUYt28DY2iEM4vm9Qv8cECk5WGTVphxAxHv3w1fm",
  "key38": "4fgPhyseAo7erSLBHWapargJVgVBt58Z1MAXqnctvk49btfMscqU38av2haeXHz2K9RnYKEHfeHu7iujP6L2rhWK",
  "key39": "4qjvtVq8nT71sh2nTDWbyGAyvDRqCPN1jSc5wWeegydhyHKWjcMC7Z5HC226jR5a4XMiF28cuKqfJJMg6sWQPihm"
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
