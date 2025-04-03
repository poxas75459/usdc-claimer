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
    "5mhLovzNvVofAYNzSKYS3kEjdhczg4zMgscBiscbXFNfHWYisXXvp6ThS18v3kNu3v7VJenGQGS2VGJtAvq8MuBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cn7h4n1RCiHyRGAa3EHF7D2x9w76j9A2rgduRApGcb2FbY9DYWe6yDS4oy1d6S2bwFkV3pQdoKCwgn7iZKWroKL",
  "key1": "3RzXnhwARnUjnL5eTDdiof6oGZMC3gsQurz81r92rfyrV94VBeu17kUmbLB6ykwnPTPkZCJjLpZ5D3kkWkFVd3hh",
  "key2": "3V63hL9yAHuQyLgYTNEPog4UfJWkzDzUwcbaesrU57h8oRdLtY2v7AicwWS9KanLu3DiSc2bAuVE7xs6b17mQZFi",
  "key3": "5TXN77PoXr2fz8fMjzDoQovkKiyLovUsuaxp9BCB4Yd9xpwTe99hTzQarDzwudez1EUQf2NA3q3q35HW3T8eS2Zg",
  "key4": "3NatKCExD3QdHDAtmZT9a5GSQX9SP3mUKi7rj2t2khfKf6bxxjuM5RNPDNRZfQZRRPuRGSWrPwEFbBau5atgpG2G",
  "key5": "3RKc4iUkNMXwbGX9skWdTqwvsx3zKno2xhEUbFkq5sCqqF2qjzaAf19vANw9GKN2RTza54NG5fRoNCy836xFJrdg",
  "key6": "Q73a5VCp9aUKZ6q7gJ3LcdaZ86KcgENjL3YaxmJ5AWpEggMp7UQdFSJU59epRextGK47yWxciF5YeUgAejDhYfS",
  "key7": "2W65tvGBShYHaA9R9pqrdeWYqenEQhiPbDgHaavfiMr9yKu8XsRUBQrgR8RtVwfNpCtw1kXTZNFjbj9RsdLGuv7j",
  "key8": "3iwJU6uGpaXVv2M6VrTziNuZWH7NLJa2DB9HUZePCNGR2qxEJzKdACC73Pg4qNMgLdBprEVB1zmZSEsrAMKmJP4M",
  "key9": "66Fs6ErQbgjb2RpFJQVTrRKGAXxdciMrcJeDSzdaA7ttjRReiWpvhKszhRGYi1TgQSzuJZiFU2ZxRPFnwjtUGCyC",
  "key10": "5SxBaD411kRCboSoq7HEMhzSCv1nYFs3mJhFxQsfj5BP44hq7kLSSwgAhPjsbmdcFdeu9th4pHuWvtPajN1vACxQ",
  "key11": "3R6oZgMfiNx96kiuK3aVzzYhkfrDG1Rxnodvnef6Uf6MdZxWMJYaRKtrH4MSUUaVcm2yqQxWWbZSqjnFtwHjwB3d",
  "key12": "58ET4Q4KkxdbSZKzRoJzF9orC97ftNJgm6jb8Vdp4d5eeQQAT2dLEgG67TqBuxDesWiJt3vQCD6CvRJr1HBsUgmH",
  "key13": "2zFu2HuL5n49ehWcZV3B3JZj37YUipjAdq4yFKEAatcoKfDPyaFrN49LjEVej4fhUjtYCYn6cSbU7mrY5apabjyh",
  "key14": "5gfvhY3h5o53cAYCkyPNgfCEtKLky9VYniX8u93YbJwwYEeZrvEujAHvQR34mjFPuzpH2L99s9Jun2Xn4TmiqSX5",
  "key15": "Mjm9NgQuQaUFdeqj4fgWK9sZYEYQv6zko6b53nH7oer3D2UYVzQfReESz7cBNBkQZ3kUJxHH7KHmHYNVtJgEHnm",
  "key16": "joG6ZbbUSYuafqL4wnLQTSuL7szJ8v1sbqzXLH5bBWVJYiA2CFzpSrvSuNjQvkiSs42nZWRbKsRF59gCMeUcEcM",
  "key17": "4iej1LdEagf8sBXMFCKHZ29tBpHdPVM6x19QzuAxyRqPvEppo74kS31JLdjtEoX9EvXfvvVnpTRYCkQTzYLAtsSa",
  "key18": "ezTGRu3gDfiF2MUy9BnyK3Lr32KVVbzkLFyEBrqyTatpC1TeFXMejF9921KaMuLAKe84tnmZcTrBi2s5xWX7Sd7",
  "key19": "4yWtBXzi87oq5DWchtpA3Xi1yWv3NDRaFQp197DfMEVD8bAus3g7rQJjAcw1QJ217k3dyHeNGJ81iu6HuJkektRr",
  "key20": "4rHMSBaPyaTMeNA3PBBYqQDJJgSShc1rZNL2Dop4sULmtkYSYmyyBP43MKq8qGEkpSpcYKgH4kkJgajohgWRfvLK",
  "key21": "51fy4PAmKFRQXJ283k7g6oXSxzM2WcDfQQQ6z8TiTpQDNW4C2zsSB5Kc1E9KpiRzFtJpse1egvTXrppptFEv1bK1",
  "key22": "4bbq612xLjVZBqHvBr7WSPdWM3huSERBHfgahFmQu4bE2U4kf5YqNYrE7nyqByUshfQuoRXkhybgiNT28NptFFsE",
  "key23": "4hxF53pyPRfKEeDiC7GnHCg6ra5gbdV89WavUnrdHusyvUF3mov1uVgXVAdEdVZhs7k9a5NaheLyAJ1kQmPcqNH6",
  "key24": "5P6AXUM3YuSoErwq9eHiph9vrsupwbxXnVLU2nfswPnBUX2p8LcU6Q8RQiK7eLyum5PWEJGMBpSG2J5zYCDUGnqL",
  "key25": "3XZ5D4zDqCHVeGQEcCZHzSB8MEWc7bg6cWiNDhf7dR8hcNmtmVqwtS1pDc8Jg6iBRqB6Mw7w9UEJyfogS3G1xuXt",
  "key26": "3raCD72Qx376LkR6WrDDeYmZ4gok3B1esy8tmGXB9Qgkw6ZQvDriurbzexKaCmth9UFQweiotqXpsz4Z8e11zJoN",
  "key27": "YD5xHNfZztRAhswFR5xAjgSQJzchwFZbwitZQeAqtEriMrpMDns94oTnnWXXmqWFCw9Wz7xrGPyVzSLUyFiy8mG",
  "key28": "4PdFiMrWuyHqvqAEBtEkyBiTBAKx2GrLrCUAmYk9NWCm5WmdUw8paGpSgrL5kFgssy8f5qnSzPJ59E7UEqnKDPyw",
  "key29": "5obZXvfPxLBRYFmFvC1XHu5DXpQnVDJA3x2imS5iayVqaNdxMVcSpizdvSgQmiPcaLwEVipj8LFaTyrqHBxyJvXY",
  "key30": "3qtsHbsjak6A4XLjQGXnayMTdgZcLecFig5UgnxZbFyVPaSCjkbbgmMXMXEuqDpgFyPTRoPTij4FnQYenQwUW31A",
  "key31": "4LqiMivd5DtENHWeWrdLx6mJd1aoCfkpiDHLsD2nmU1uLbURkwKtqhqxfhkXqDqFbfzVLhQEd5boVHT86j3UfVjG",
  "key32": "2tUdjcvSUrFbR39udsActhBLfcmmtA7AmN5rs4VZBWFuBqbtbpvNn2HNs4dWxVmFqWBdptKPq7r96RRqcYursvBK",
  "key33": "4uQPWMKyAkGjwAB91sovhD15R4WWa3BMy7P75mSjFG9udSRoLoM6M1cMQ7LpuCA1cVoGAgZqg6AGqPsCJGFHREUL",
  "key34": "5bV2GHujTv8fVtet4yfw7NhWAcVaiRnyoG1veKRG11dBnYLaw4sFVs5Fedr5N6ox8ZdVEN2aC8UTBekupvxJ3QBY",
  "key35": "45kuvEeR7BBZhVHagU1vatFvyEXWA8JQmbu4Mzte1GkQkySMaK71U11XJSsMzrRiKkxXQnRkH6KTxbiawmmfmGg8",
  "key36": "38rnUoVwhfzWTbEAEshzEpaHcyXryn4dZXBmudRoJCDgTwNzezy8fMwv7BcQg6EdwCzSQ1Hpq5TowNPRas9AH63x",
  "key37": "2qE9CHxST3LkjcDjGokX4rQhuAmYutymWhnYRhv5Y9zHEieM3zos2mHkp4R4rTN5PabwdcM12tvFxKNxhSNakDKd",
  "key38": "5VxcLKbgrExhM43FN24prTXLszGUYinNqMZYyNqpxYsyZheMWe3WrcPaswhsMzCCU7EGkntS8aRAqVDgT2BFLNH3",
  "key39": "2XudaYgHDyPHMqMKiDUxqbmeLM3iti46jJicVHGLWkeq8jqhtPnaffYLfVLsczVCmgBLoCxGRZV7nhph4S91swh2",
  "key40": "2AdAPLfddc59JZVCfcgAGY8mARtEKxXVDagKybJFUxpLh15QP2zqGAghgE8xGZnSgwAVXhXiy5umyTogvkN7H7Tq",
  "key41": "61hY2khPTTNdBJs4BQ1ABuGfTFYcdKAeJh4sp2BFbyjysxQi5Pwr4bs8QbBSagLduvLHwRMhFZLD9EZNRuTLGggC",
  "key42": "4QKxJzUGc81HituWFmtb4fSaHkXd3iFoRVz6ysSZ9FbPYPxRT3XX2ENdyde4Y4UhWAQAL5hhpdhxV65JUKYdXMhU",
  "key43": "4sFxdRyFBHw9wJhEH4ZbBgzH6zECBsVGLnGHcxUHT9qKfxVaph6CdasD65ePsN1Hf4g6wuExT17Rf38RWuNtzQoL"
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
