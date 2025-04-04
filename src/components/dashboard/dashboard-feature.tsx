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
    "4CbPG4NWKkXZ4x2q4GYGQipxwS8LsBjRKgKKh5G8CeJ7ZAtgS5f99up952RweYECtuMa7hxy3ThQy1A8HTKdZeiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UUUJkDfVbCFyAUh2kXj7mddKqXUSghSxXZ7Hpe6VguHZzgP4ScCWXwi9M6FXceiM37LjEPunm79tpdce5fHkykh",
  "key1": "43twfBquCUUqTkdqrXtej5R1LScqgQntmfXU6nvV4zPZyWuZAjoiGfnyYq3R4JLTLwZXqkAZBJmjBiS7qaeWZ4hA",
  "key2": "eXWV7MMN9L9cP6cFK2LiBqdEZboTCvDaWxAKzYJxKBetfTguderqWwKg7fbyC8i9dDAssodFtTs9MUJw6AheNCh",
  "key3": "3ZfkH2VkbFm5oj8rHLNkBdvfp7FtgSuoe1511kykhUNST1htQh5aFHHZGtWdYwQgyrc9iUrRDgmiaxgqAjvm33Xv",
  "key4": "4v2rqzbZCQFZgD694k37jJz7xjAjviZ4R3zj6bzxXejhJUtivawXT8fJfMMDP6CcCQVmaWFGkL3mNkSUdRMtb4HC",
  "key5": "528rYr6WFmfArqHVr7wuQvJT9VMik44iaD2zVXooZvxjLBRCyekghz2RZN6WQrWfXFe6iqBi5W8i8oPYzyqGmDPk",
  "key6": "3pTfWHMgsG3NVG9t3Gyj5E69TQ1jbmFvAGeD6wJpo4UByYpTFxnV26d3ZT5Cb1jsoeHJSacQfDA4mRumo3Uwk9Ye",
  "key7": "4cbGgYdaYQVtqdFMkkaBts44D2qN2GJJMMgWijbHspiuMs6AiBn1uQSxvCXjdfQfQ14oQnaikdvvAbbusNNVreuL",
  "key8": "4nKKxEE4bGNRJHwsj9KEaAUZX4FrE61i95WuKHcar6Quj8JTVwmonqLHtk53oyDnUK5FoQZMjKVFUYJGXzHvrcVJ",
  "key9": "3cJMw3azMKqmT6HkwZicf8fH6UvdqUdaCdLy8tmaEZzakBAfGa54RWb7FH2oB3viZe9x5rCngSHgsf2RNAW9w1M8",
  "key10": "2rjgRD3XESdizgzJKxFx7YRbnQzGZw8Fa7EFA1irymWG2oHoqLTyHa15rcpJ8Lm6j9fVzupDT6qsA2qtHPMGjxN5",
  "key11": "4oNR818d2Cv12HZBPQyPN6BfsywW131SAiFageMb8iGme8Hwr9bsTtXb442ey1vS7DgKPFPG2qTXhs4KkzUiogAr",
  "key12": "2qX8dEQccMPs83tzkb12kkT2dEdM63NPfnhSsjxV1vr2W5HGVxtKS81e24G4LAmw1LAeGQCoKqSKotNKsgxuZqt5",
  "key13": "2EC892ec6VT2Qk6VMw5GXUWnuyvM6yvcLUST8papdYZ3eF2rAkvLJjS4xkct36sCcKry1zg7oPwNbLsqKYXXWV8W",
  "key14": "4QvxRByoXnYZ4sQ7GXmyMh4Fkjyov7HQZvo7Y8vu8MwjEP151xXXbS6QSZPJso78SHSBuQxhXsCKxSP89KmvancA",
  "key15": "4u72PqPJCGV64AFyRbey2uU7mAKbMtujBotR3nxTkadwxYUWg1W7R2LVig2wqxY5TPpjobXgQ9rYSF18TAGV8XZK",
  "key16": "2KVdFFrBnoeHEfdjdBnnQPA9cmFsfgTQMn6P2ZpqiAWdgiMd4o5wkT44DMRiZtvTfyasyPZz9RXyUUWuHJqFMwas",
  "key17": "5FF4mBBXH4VfRqjGD4QjRCYCGEZszDKdJovo5cdq2oAYtys15y81RcoaC8XxhreHD1BKNzmgbAVVGX4W1EjMjACg",
  "key18": "3cBVy3R3uayxsZsDrrpPtfBw1Ei19VSAFvg4FWEtht7bWa5SMA3UgvqckStq92kmdKF4YtJywMjk4onJWrQSYmNu",
  "key19": "4JN5zzh3yA8H8GaB5sJxXfsqdvmbEkY3YwBRzqKwox2f4k129q7nJrVN4i2RNGN1gPdUzMNaeJnmsLn5eYQgf9FQ",
  "key20": "4n4Yu9bPRNbgVDS61pWRjTuoQnBeqsvNb63EhEWxQqvcnadHgDfNHWVMKyNjdJZvJTcvTfjWuE4pX571JMaKRXZc",
  "key21": "2yCX9Et8p4WTy64ioNeCoRSq7K1xFS8M6C6bdSJEXTD2Q6DUEbDdZjBCaM7aYa2bQfhUKdayaesVPbdR6tMV6kjX",
  "key22": "6dKs4wj8vUiJWf7c2exaDqh2e1dpmYkEfKej6hNLVuxfE8mAEgWwvgWnciPhaFF1h2puNYStLnhQr6XxKuSCGLu",
  "key23": "5SoqSKWVVum3AsoP3RZU6eS1DtynLr4suYMHNiEC56Eic1fUnir7qauu8ctoVq5aqMTqsKzbAkSNpsGXP1ZnB5FH",
  "key24": "CAp7ASi9r3zsnJh7UH8izZYmZRLKZ45XCwRMvXjKtmNmp7AZHQeLmjf6N7bSoFqjG1YLZGs5it4WDQnnRsD5NxB",
  "key25": "5ni9VF6UbPBqp6GBXP4FRD3jkjk1H5G8xSpHQCKdrw1xe6MZA5tcrby6DPHcEFUatoJy4R1qcjhDjCfDmUgHsBi3",
  "key26": "62zXNq85K77948Rv1bpVzHqkfWNsijerDtidGQ4xWLCHp6FnDQSzmTP6jGxWAHJ3TbPi1NHjykdSDwH2yokuyBDQ",
  "key27": "2RxZCRXhe6cdX1gfADXBgGs7VHf9tcRTPi1Ccff7GqqKD1kKhXGp3bVrbvzMaR5cgXxk1bqka71KTQxg8iTso4Lb",
  "key28": "Rin7AniapLBVF9q6PA3uW2NHDGATsJxPQDhT6n3t7zw8178ohDS8EPXKc3pSSaDV49UoGfS6PHiKxo6HnFGN9E9",
  "key29": "3jD5pGGEBJpevkpD8NnJzNQKdF9CtpyCLtcrFUQB9txtVzKutwsriVMBJcNP1g5bwuyAc92CyV7ee56CUs5GALEX",
  "key30": "47uikTNHhsehevLafwPwbnaoZtpDtq2aU4NL5ardZkyCF2TgbpUEANNLs5nt69Rxq2H3hveLVS2NTdqjYWsSaLos",
  "key31": "29McR1FV7j6JRPL7SdqhYmxBQorkPrU5dieUFxhTj1Q2GyCLjRe2eGPdcxqd7k2PYZzsZmuEB8YNCj1yeho1vPU1",
  "key32": "2yHSrtBKffjHhrGJcdN7Dj6F41HwroXVXLThXq9Ez8PNpmaYCmw4JJ7nhBD36dZDP5s4m142qv5UsGSNJopwpkfS",
  "key33": "4v6tzrv8BjcoGKmAu367Q65Bxa4qrnC5p5AvEAzgzvjyJPD3GSgcAUaYaHygnSHiWhzXf21cPmkLRko6y61eQFRe",
  "key34": "4vqG9JAyywEyMKDaSDcmh8tiCG6Q8qYnWSa6jPv1CkZwwGtQTw94V4FaKPP9dnz5X35oooF5h1UgMAv7pxbQLwB6",
  "key35": "3YUrWtk8R5mC5pMyNpQAvh1UpfspKPDoaXoxZCFiBY5r9EDgNwFG7wumwuryiGzH367npzfpsDpmZY3tbqH7UpTG",
  "key36": "5as7WZKMGeBnxYs3ytjPa2W1H8gbU5LsXfjqrCqmR8k1TwmvyKY6cKcP9DUdwLgSEj1JK1g4nBmUnanASbVxrphd",
  "key37": "4jxTQGMJ6YKWGPakYEp6wKnVwdFbgDfPwx9piFFqF7zSYzTPxxUJEHxfPjL239EHumQRHVqoKrLcmkpXFn1tPQQ",
  "key38": "2tCp4UwxRfLrqdvQbvfjeW82ZAJLJq7tLWaVLjR8dAtvjfLZCBUeZc7VuuskhYdJ6mynBv1Zi42pu6iwaDEjuSf7",
  "key39": "5jXKq4swxiQQ2KwKovYuDA8gGMtM48Xiy2AihmSrxtKbxTgmmW2qhFb2D8mEHwQ1xfSPbrTKbSqE8aj21Zow6PNz",
  "key40": "4reCKDEFrZ3B6xivKwX4NosgusD3nczHhqW7Uazay2tm7Vrma5qoc4ACKf9nbD2rQ4TevG6t8sdoLGxpXG2cgx23"
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
