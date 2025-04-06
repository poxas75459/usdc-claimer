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
    "5HaXS3XVu5CdZwM9koowJXFSYngsd95nCHgS2tKQ17eQhrDSm6czDa2Q9z7AFnV4cARLbHzfFTr2yE72NBSHvJR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cMpHwh6DFvggUiT5ktZ9GuX2V46Q1A18SBQJo9vyjALg1RZLgkH3A3JLkwxN9UsK47SWFK7ruurHqEZo5HeChJU",
  "key1": "4GscUZtgQLEp3p7uUg7fbZexkw2kC1WDRNKYZiFHYM6GE3VDQe8ss6YVWgNmrTahVUnLHevBH2xnWrEmeeWQJbXj",
  "key2": "xjUuZaJMwRKsqNFccQHEq6fjjNY2iLUsXhkHkfnFxhJ2wsN35UxkZwgeoCfJX4wWW3ZaaQNUWeDQAm6vKsPGfT6",
  "key3": "5Ah9yypssNY9P89rPwiDgDZFeWAZPurdmNv9xGhAQiZgZiUNkpA8HdeN71bzrstGA7nF1FNrDsSU942p7reFrvaV",
  "key4": "54HMr6qWAL5VNcSuE7dD7DZ1DrqkCHSTZGmKsd7viEAq8or1G5TFp3g31oAr8G6qEGWYpkaG8Zn913iik1azPrWf",
  "key5": "2VMrvm3X1zh5gm5XRQojv6gRqxiR1obskHn6oMFnQUV7un7gjjsT2momCYvmSiqtzu2aTCzQRdzmJEdJDifjTxoq",
  "key6": "5iWnEzabJdwYvoqVKKnxPQCBySWuG6hYXyz3DgjNAkGEVY5HkY8aZCwC32E3ngs75MeLv9Mvw6U1bzBmbjBEpdK6",
  "key7": "56k2iGRZzYMJQWv99CM2BLmY9xarUDczReQ4sQNkS7yDzjikdKq27DnJgMFfEhM7b5f3YMrjUeZyjytPQzz3Wcnv",
  "key8": "WcdbEqyHd8AbGRGcGEvpwAuvnTsvPwmYvgSFcV9XKouutYch8q6mV3Ei8Gn93FbSsjKsWjekTQxdYS1QpUz1gKK",
  "key9": "3QXP8drMracU6t3FmaEnvFttzGzJfkeXmPprkFhBKaBtx8Kg6cwhVDsFT2SffVuaAcU6vtH3Z9L4yn6wfZWJVsLs",
  "key10": "32UEyZHCueN552QvWTsEtCjqRwF2PTaNWQRqVjTp6kUuQRtGVcfSuBfecZbFbXNcN5nh9XseYNGVcA59jV24xmN1",
  "key11": "4css4Jyd2dx9zQEP9hhUGAHUJtiGAQ3TvGqaGeoMkv83kkrazQcFZLHrdS59nmpMDLj9m4nVpdmDuCQWUvLA4M5m",
  "key12": "2xAugsGBFKmLEjCS37dBGrDtkBxwppK3MjE24udMgtCxUSW5BpUpif7R4h5oQ8zpxMkqQKBdqBxdgpvBqh5Tkox1",
  "key13": "4pAfrYtHTHm9C29wd9zD1mrJRtr4sHqDLchxxqAgzMnhZqZKuKvksR6mR9428Vbt5Sxat6VAYZuNwaQtsCgUhnaA",
  "key14": "qZfaPM6iGdHbLXcuJuonR25BSnwcEto5SD1tP9vaPXPXJZtDUbNvKdXvfHhpc3bcy3w139Cdnj5wZUM2TycfuZf",
  "key15": "5bj6C7vA85jENdXrQJ11LSHLk2eJNKrtFUXLkhoqEDamSs4vqyGrnYKnbdrAimJYexAPiiQkKmtw9pypMhPVCfma",
  "key16": "5kT9hE79xrv2CYezcbnWmGBARDBHv8teHdWGjAUoM6erJhrRfqaLZvX5juhnpXv2abTuMo1qvxXVNxpNXpGnA6Xc",
  "key17": "4m3KRutGqEVhYwEwEPkqo99sUxBKpaEBHdsKG8L34GqcAXUX3Wt36F2sjgzJYBCJ2nXqL4CVBccWGT1EdjGDN6bY",
  "key18": "5CTErAUxdFF4aqoUHRn841qEkt3tkBWZ2crdPwCMxCZ8xEb2PREiBfWUCKU2FAdyD3camnsDYkrx7DyZTJx1JYGa",
  "key19": "jHfHo6LkvZy9dSFPHDto3qmzzyKo22CXq5a1BXRMW5Krgkgx8g7p1Luzxi76gzSUZtQUFvjy1N3f4KBevqA5KEA",
  "key20": "5zA8vEaDM4yD57yJZ4N1GytntUUJHfduoRw2fwrtV6vDCs4ZqdXB7iUsHwtGdfeoAp5q8uEegRUCFqwxej79whYA",
  "key21": "3ihJgJyaq86CLPwjFNTxKff9SmxfNnwkZwLN9AxUFgEZaxJRgkRWmdLdHwYyMGsMr3wCW1agfoxTTSFPqcp8pXyC",
  "key22": "4WEM1GJvJgG8hRYRBzWQ39Qk82tcYQPQBvusZ4p3BvRoHac9ywAhSxHxUw7rkD1pRJxdzJEX3WTsmKiVaY3CX3Ab",
  "key23": "4PzK28G6NHCGdnAwg85P7eb5kLzMmawZvAPwYuN4QEVJJcz5LJuoMj6wWTyKkKMGxEGVrp9R8QQmyV8iDFDN44Kt",
  "key24": "KHeAsfq9E5fX7EjXAD6CrmBdATHLJL9ryR73yScaHiKA13TLK41jJogbGJ72zyWHHQiVVax1PNaTtt78cCzsRMg",
  "key25": "2RNfXGmE5tsY3cTELtQ5n1Pjx38DyR1avtYNuuNvUoKZMNKg28asJD9fZQSMq2PLv86wNGp56ChvDy5HAhRLmczc",
  "key26": "4tfuiNPWiHJZVxN9CZSmhqLMHFhNveeN7KWaqwTiTNi17equ2zKzxEcorWpau7ey1BCmMvnSphA8VB9a4apcPDdb",
  "key27": "HAWhurf9YkgCu7gyWrfkhqqVwhobV58y3UQ6KdfaHhR8C591mPZzzGmVYHHyo2LE4xshH6fE21sktE4zYfLxFgj",
  "key28": "5pSq9SPawcva8SCSVnS11xWydXLrMPn5B7FzxySQCxKAcLMj2t2oDFoXxCDthNg3nxMAKjbMWYxwV2KjgCk2jHZk",
  "key29": "2E5GVmtdVTqPyEwa68svy6HrJdodCqULjftQ9BLYRaK4f82Repwkbo2djfaWydEHWgGbXwmonL1xXqHPkyCxfpd8",
  "key30": "5MPFhhx212UqXP8zVKA1WQrAz7JUpASm1k3A7jHsbHrZV9DS6YPMET16sFuVgDV5H9JuGtAsf3aqFpV3J8CDu9Dt",
  "key31": "23pZy5rQKgWnK1YZUZwo9cR3sfcEFyTeWQX4ztWXQc4TpPRxvaYQVVJ8daDLEsRLVqZWJYhMnWpXKYbhGhskWkU7",
  "key32": "3iJPALLD28P3W7tqoGiQcHEnhLqu6x9Stgbp5V6TUS9iBVL8aHyo52wszek7ezb84P7ZPJ7wGoPCmMdc2xiPFLEt",
  "key33": "2ktV1UuUoV8CCMqNPaWy6crNafZmjvZhQPm73Roxg4PN6ypTN5g4JhCoZ3WySsW6Lfe7oQoCGqiXj4tjn7g3nhqp",
  "key34": "41jWd16pUh9vrugKDUsSzXBMeYebGAcLkRz2cfCSNDH28gezYDPq8fZFybxBxJ5dmdhUcEM4aAxXDhVt5RbZzEfE",
  "key35": "2EzXo579Tk8UQJrWHyNT3MhEqNFzX4Jt868oeAg5743tc17n29tPMtgvXbmhcWLBDNN1tPA4vWNitMxTrnRmyGqd",
  "key36": "5jp78QMcLR1jNnutiYwfwfSLuvVnkRjzAjoPKAd7tuziEDmBeRccMJqUnJbH99myEoFNJY9rymyj8iiHNdXJ7QHf",
  "key37": "4tEnbGpTBJnR3brBaLiaHKttQszNqmDjXp1hdYzSf2eaWn7YJ8WyDkbiDZkKo4RXXqPtRDm4hSjQy4DK82obpXSN",
  "key38": "aTNWaiwLvomjbaUQmEC2cyy3YcqRbk7JSRpATUysT83wLSNuGSkCa1yaQ6hjpFgWACutrdRKA8e1c54SjuQVMNc"
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
