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
    "QG1nUomU2dfdx9NRg1Kcm9oiA3hkHEUkAXAX8PmQizxAMsHMtcY5J2j1brsFg8wqC3CBq8SX27jLYuvCRBVfW9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36suEgp4CDfu1QTzgzaZVt1aefUX1NbQASgU439nrMkEDTHvet1LqJsPbEcn92dZhLZz2MfFvCNkERTuPeRj86qu",
  "key1": "5cDZqKiBHQ8b5br7777R1wqZpRuR75jW7rZvPvZMGf8PdRQZuyCbQK6ZwYFVqFvUSuacbo2SnDGkSipgPVjQRzxK",
  "key2": "2fq9a5qqxvqVjVWVFzA5zdTHnZ3j5gF3YNefcsHbjuh8SYgKWFqUuj2xbPaCGpn4QdjPUxsZNAK1SBnPQWUJkuXq",
  "key3": "4t4DmWUHUipsCAqvt2Bw9PXBfThcYnA5SE4Fxs5WrFyTpmULsBDyFpACYzoQ3fzFmFscihqhBn9A6ZdgCfixTuEs",
  "key4": "4xVib3rZYVXYCQuwGeVEx3xzcSgbxZpLjkYgPXt2nLsuDkcRuWJe3rAp47bzmanG1ZMzXdYmwqotx181Rjuqmyeq",
  "key5": "4E3Bmy7wD7J3R73rj4rgkwtaTEA5byRcDXtS1M1eMHadGupz1wNEcaHXyTZrUXdhJ6zTkd6wEcTzmHtZ27xHnb2w",
  "key6": "EgRvgjwGw9ACmBbgdhMbnv7v6Cnx7xtZnoCaJvC6D2opzG7vNRkJrpraGHPVGThxsS2NCoZCWv9son1b1j4zgW7",
  "key7": "5CTwx82GraDQdxELzJnqMTu1wNBRmW9Gm8Ni3zffntsb4neqfyMP5q7CxWLPn4yVwS5QcQD5ukD3NpGtsQuTGL1F",
  "key8": "5GzRwcUGmyWYi3N49nVKn1rK2DWJybREFdJWuzRibW8vqbQjTQBFVALiT5NNinUuq5Wf6sXNj9LjAg6NioLTeDVs",
  "key9": "4outtbxRZqrLyWdXyKse47YtZ7RtVeF5HHft3bFAFRfQE42uQDiiKkEkskVy1NQfS5LJv4DYDRGJZakSkx3qhkxh",
  "key10": "kBiQLZ79b5Sq4eaho8aFYrAVQB7reAQ2FQ6NAiKBVG1y12qrzvwvFyKEYJBzqpG36M1WRroEWsYggnzq2TacfTJ",
  "key11": "4oVhpcqq76iyYv5jEeBpAN41R1v8fmiD7WqxB9BSukXEVkVhErBEkiSnB3hiSAXYgVFbfdgHFA1uCayh118fTUa1",
  "key12": "3Huu8ECNYvVDqDenVDamwUr4sCyo65QtLEksiiaeavUiDFPBwdjwVn4siMzTXx3zveweFbsTAgdwKjZ7cLAWSx9N",
  "key13": "5sHRnuyoQBxcRz3YjSty7C8FkXV1gYr5dfUKBEcdZ3ubXe5qTnVMycjKHfaRL3Cdru5KBDCafxfYdR7Mo37KsPx9",
  "key14": "23JoyhJrqe6nbrFmGwz6DcExJreeH6sTSGhSG5EGN5a6gepD2cEHDrcgC2kTDudhX6ChNBWN5QmqRB9wvWhddFTv",
  "key15": "5XfMggB9yxGkcUcV8QgZVxbr5qb25XEsRS924nkAZQGnB5F1MYcWVfUVFAomq7X7pak8Pzks8muQqrje4wXoMr6m",
  "key16": "RVuisfvrrYrgRjjB1TC1udTcyKwY86fGpjkzy4aAK4dsEYk2HTh82fR5eiQgYef4UbQBGcmHN4VdPdMG7EunoFW",
  "key17": "2ZTvUM5NrQsLpjLKXy9zEbyTXaLrouhVPJYNNodHYzRk17y1Kj674pjMQcMU1ytNcC1hyAjFoyV3TjEidiMRiszK",
  "key18": "2xgixDev8hmiqxcTZUjGejYTrs2nhGq8HWBgyVSRxtmKmiEcxShRB9Sg9FEBsWCwrYVurK3U6DZJNpXFD7q6LRKG",
  "key19": "3LuZxgnwJ6yZ91yPw4RVCfPV1wcjLHDyQ97KHqmMa5tpmwmgCEodZTZHcu63L4uPku6LQrgn9Ts37pBzeKHUActm",
  "key20": "3vv7u3WdC7LJPBkrSVe3pWeQBDZTn1Zpce63wxyD1N2CDo7nPuXnMXnf9tcA3JvrMj5W8rEXnwTaCGvhjLYXW2E",
  "key21": "uDpMb2t8vXEM1MbvoAYfFLB7hdTJua9vNMfM3h66szn7VCfGVP3F6qtLQ8H2FUzFQxrBuG9b28Pk8dD6dKA3QFh",
  "key22": "4T8CRymqdRbtgKFn6fp6tCv9VtMEgontvc97LRxjksgEH7SYNdWK7927DxSUQhSRgYZLtzwj46WoT9cmU1heG56W",
  "key23": "3mMAQZdT2Uy2jU5WcVaD9AMVY1WrvXPs4EsTeMK62oJnZtbUPpAoeD64an8F8skYgqfg1MLjoZmQSJxbfsX9zGWB",
  "key24": "3Xn93U9pYBAGUBT6udr7EgGNVpLYyG5ocA5JGD4jBrBzi7wjFPAxBMW4uLeVgEfCzRgPyPJAunm86fu8SU5eXnyz",
  "key25": "2z2zNeSBZSmSc89Sau2GbCtrZ9vtxd8jxvENWftM4hgp4RVuaXiC4TgTWnCrDznhtpJvyu2cqE6QGaKhveVaCZ4S",
  "key26": "4wvUf5MwbQqMpnP9UMKZfyYVVyxcttMxc9JSjYcA7EVAeYLwWBVuUn3TR4vXaTZh1k18wugM3AE3vyJQ5gaku6vc",
  "key27": "47FPrjXpTewM5H1huiHmCtYqEkJDx2ZJbG8qMRNmAQW4wmB5d9SBYWte7ZscFkFBfG9oSL57P6vdu2gD4mQsgcCc",
  "key28": "3NFRqm9tLmcJDd4iaYN177XhZC3FqXLeLYDqwg1ipGbCNh96CV9DvncXLT34EQrjiKHzpicXkcTgcWH5qMLriUpb",
  "key29": "5WbdwFQyHdaRZ9grHK9EixttGRZZA2pAnft6yXoVVf8xueWTWz5kigkvWvjd7MQWqJqkLkV3vARpaExADA9wfwQD",
  "key30": "5fsL5LLzrqQZQpCnziMn4Zewnei8aR9FiUUraBxGVjvYscWRGJbhdSov9E2NYereNPND5Up9i1h6f8bVrVndiNM4",
  "key31": "3XsiaMHWHbJxkswFioEwVpR5NSX4LUYoatB1pyPyda4ep5AK5cXgxtPTf7i1TSTdLZQxAzJtNiu5Z5mA2AVqPxrU",
  "key32": "2oDk5XMSsfuz63bK6fjSYfnkou755qLJHRdTovyJtFkCKBWNydbWeGkkRTQb8Wi9WW7He3bahhoo3Yx1BLg7JWuq"
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
