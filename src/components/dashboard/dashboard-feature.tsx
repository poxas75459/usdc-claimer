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
    "41bnpEzxyTimu3mQiacYyV8uQwt3PfzrqKiUZMhDqhgeuda2nNeXmAVtHA43VUbkfDGG99Rt4B6t3fGQ6WxwQ3L3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iCBsLZZdATv2ENqT6f5X28yiUxDEm9Nc7djUJWUsABg1VBbTK18ZdpM92LQraJqjxwEGNBagSYi7bW3KPQxEZVn",
  "key1": "vgeK1Ti2HLXtCoVww3rDgmzxTGTh334V8RETw2L3hMmtUakPnCQmu3PYU9n4AN3bN1GmK3Z8Tmbuu8Uo1Y6ptya",
  "key2": "4mNj2Q6nEfJA1DNjk2TYvnPTC4jXGD6U8PUiBSw7LbLce3dWP1t7Ygi1Bra9Roe21UJ2WYrywCW7ytHsRCUchvbX",
  "key3": "5c9z7TjEd9m8GSqRo848pGrgVjYqz9z6dvGCLC6eikBJ6B7iicjWrN7ZcY6x8R65L4xej4G942AxhyrFu5aawH43",
  "key4": "3CGTGhTV15DsxPNX5T5JwXjWz4gdDcJ3cMbmFMcjPJ99is42Uh5q17V9XAZFQdV42x5kuJBZLYw34y9xLJyWYaZy",
  "key5": "395oqiT6RgM7y4rMX5YBiJCUZGdUxfe4DEHGkwtFKXTDfVpJxzfqsAAMSXNXXSvEKrfsBuaXERvZ1AavM5JNetcF",
  "key6": "2K2EiYAUGwAfjErLpEBbu9R5DtACvcgDVY8pJJa1BuTKZhm3cfdvNpjQGWUuTzji4gAXGuYfFEACswfNWebbH1oA",
  "key7": "51V1tuMbgMCPdjGQHG8G5MFyJ9FfGJdgkSrmTtmxyzCvkRx9U43TDWLpRRaCgKx5QfJqqYJPTar7HHaxAKWjrrUe",
  "key8": "49duGcSAQJ1W7KTiBJ2JaR4kW41RDZDM5h3utZCJ7nz2vyJWAC5n6Wih4Vn62Axyf9hnrBYPpCFBk2nrKk7E6a7D",
  "key9": "4unNyn7ZaP6uRWMw5bcHjmQ8djy8WD1hHNyE1kF5xevVitBzLUei3L9zkhTKZavV4493ak8zasRxmqr4NNqmwkT5",
  "key10": "5xTRTQ8vefv9y9MMUjGH6ZqQfQQx4baxZnYzP6fcdnpzLdqiixHuRHjSbpxgxUEj9KfhSRjkZissyaM9NAk5thhG",
  "key11": "3jo3dbDE5ygUBdJuDcfW66zDzPJqLBeL2P3x53p3tpKMd9pp68DEaocMUn2Jeuq3pVE9x9By9Gn3yoN8MziLEMe9",
  "key12": "2EGWTpEHanxXxxqtrNPhMLLiu6XBTj2q5NTP1P1d7gXtaM4HmPjCAVCSr24vJch7xXJgpYFgNrHxRCbQyJhz7u3r",
  "key13": "7tETN7mdUxRx6Z7C6gx6cfJZQMeSQsY8jrRekiDccn2gcADPZxzpmF2JxcjrT8W1EsY12vdDFtcAJcBmLe6nF6f",
  "key14": "32zNLqWQ3cMAMGXirdaeMk14wC2tKEinDRiWGuzbjFe1h8KED3GsCoTxfWErZ3VcxCR4ubb3wvP9kpobjCoF2HRs",
  "key15": "4Uj5BASdaKs7GJHDeLMaPf6FWrzfWZppxj7MmBLofpqUZnL7y5U65WWZHttUP2R4seqfR2w4HvVZTWT3jDb7miC4",
  "key16": "CxH4uJ1xKchSRGAJVKQ6PAQi2DN5gsn4toezD7cKczFXni34jKhdczCZa4WqZYYwxTsnyF2jPz4QXTGnP9XDk11",
  "key17": "61hAUHT6T2cVJHQAm35epZc1PCbWBcN5XDKKXNPCQCs4jVSgQk8TLjbRhfRNUGUmpWg73CvvbdRz6oGSAb3vQSvZ",
  "key18": "4z6v8w5gYPUozbwMrBaKvwtsxgGYmvQ6sEeiXVnNHJZ2DCJDnmsk2t7LKpsS7qX3WGvtJLAhFGDtJwoRkuxT952H",
  "key19": "3yPCcaUaTkdRERoV24GAiMFHwgkwqZJqGyQBfD8vio1hbzVex8auYK4DZBGGk1eDQG9W1StuEiBT9uscknSi5r5p",
  "key20": "37pxTVCVVn73MQpPenuhfMBU47XrJpCyAqSo1Gctbkq1cntv3msvVV3Hgt6xsckTpvErEWGKgqHxDvaRXhepi81x",
  "key21": "5yjeRmvC3X1bgGKMDBkUWxa4DUfugSFmfC6zvK3iGQj19MPAbvWHFbqS8G1VSuQWnkmA53zyDnB3Gg5vgXmba8bA",
  "key22": "299QwBRwyY5DbUZKiQPwSxC8LmyvHmEh8E2EK6Cy4ihk8dUsu2DCXLTZKWtq1YMMiVKBU9CL3rhHHNfpX9bgUznq",
  "key23": "5J1NTz4B4ywxRaGvJL56go5ZboYuKqbxWHcFcnr7wHuRUe2Jd7QSSPr75sQcqCBvc9LpUAhGWYbG9zcAjrJbrxtV",
  "key24": "3c6okwyaTDDeAnrmcPBgxFDhEYtAFSqbaCeUeEXTZ2k9aniXwJTXMvaUMqzG7zD4Wb4KkzH5cmU2BLKtD6VECnai",
  "key25": "u2XfKk2QqTf1BPczpqtAQm6JPqvKRDi3pKnBDBNe3epnv9aVDTW8VsUNWVakjPdgfC9ust3tDdVci3byYLo8qBw",
  "key26": "5pUV57yz4gJkh6oz7CaSdLMLUSM5fzGrtsNjZPYrdScz4srnfF1bZARtqcTzaFtfkxsfXnApLGSTFweDswrXWcXG",
  "key27": "5FmKxjEkYit3ggkfwA86JevXqqmt1YGA6Mzk1Lbvj7D7wpmAyzskWGFez2z9Dh3VTF6LGTZYxxpopbamiUrA8GT9",
  "key28": "5UrUh9ibj9pezcDwcVmmt8txESVfZFVEU3vdXyFWif3WweW6RBheAgEv8PzPDJJr3BA3Nm7MLLxydVXD6xNf1njS",
  "key29": "2FLR1evu4oF6PN1cf9TUTySgy1nMbFEoot9SPSn7rGF5hRf8bNnQDzRYx1WC8Ru8w6699mLdgVxYr78L3gn49A5A",
  "key30": "2tKY5hT7UPocYvysuNFgF9H72PAGSbdLTky2BQ51r3XK3FgeZtVQVfWLh5JyNC9MrPaRtjr6AQQau3r4K18GDWux",
  "key31": "3PsQ7ixxMftzqMg7PJJo8edxFb4H3BfY43GLockRWJPL8SLe3dW2NxBGnua1AUQBFXhk2xT8euGte4X8JhTWqoJy",
  "key32": "3xzX1TYhug6Gt3m3dX5wEghyxsuEzCocuAAZAQ8bgodoBr8TuXr75wLcKvdNRTvgpA7GA5FqJEmvYMCB3e3EbxoP",
  "key33": "3Dkeoj9fRLBMepx7LQLXyn84NJ41EyRkJUM7DVd7VfpJzAyuR7RMk7F5T1NaNrrGRCpgzTxP7Lpqwus3xVo22hpr",
  "key34": "25YJU3n6dfezihcv2eKYR99yE5PmpCfbzU672e2z6j3UKTFcNU4V9ZNrztV5efRRDMjWMXhHvyr9czC6dXWonpng",
  "key35": "53t497r6gya6yehwghjTFT6kCHqUyCDuV8KnteoMH2v65TTUrHJou7UcdajgpLR2eWvZw7bwrzbupyc5BcmPctX6",
  "key36": "2maWFQiYxy3UWNJBMBZ4Envay4Km4NwoHLSgiKDoTBFkcMq4xqH66G8cTzV8v3pNPYXu9cHFo5exXfHGQpoYVXrS",
  "key37": "5uCnHY358PN92v9XvMUEPr5Esp9hhKTnKg5F2wipyVEgB2WUe8UdB5yP96fMWgnpow9CsdQD6HfRdDSzYcHRZFVv",
  "key38": "oFnAEVVo61A3sFQpf7eodLVJBGcRAQBXoGnp35gndcBJx4mPaPg1VME4H4CfthxvTx7YT3jt97YWPFvoTRRp8kJ"
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
