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
    "5VvaMuyywWPdMaYDjN9T4DH9zy2rzz8m35sysTSfjinb58GzNmKyZv1HzKz5aKih4VmzRoh1eBqx3tgKY7MuoADh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xRjtFs6duXVCDxa1PWxVZgymr9NqQc8HNRnDqxWRNVnqeHMBiQWqPvp8689yfZ2LZbK8LobTeBCxNYQmvku24Fx",
  "key1": "5ypUWT1Qmny2PuUByFcUD3eyEDJcojBvXYuFGF4S89QfmQJpSzu83YrfwoWwcunSJPfdSCKQPBUuS14Q3UMXu2yN",
  "key2": "3Urvtf8LCTBcYFPEspF5xfcdNeg3o2jN88tVXdqJRLWP92YGJ88FZ7afqexGRRmXxdb6vjZknd2VYykAASqgTYBU",
  "key3": "22KqQASDQpfT1muRsxhGKHaVuefg4NFZV4EjMS5E1ErELsq56XAfEpfgAmRyBqopi6vqRrnUaHEc1YRvyeJeZ8Zd",
  "key4": "vULCFNUmzg4J2x5QKV7Li9fzX4rdJZn8Kd7v2Lb7irPXJyaXKTYspAXpziDfEZKWPAcnnrHDyb8tbALzqV1DTbd",
  "key5": "2csK3qB6LRAjniBPz47ERNL68LjcoFMejaGZQ9dd5K28WiVwzRHFzGr3HcwNSTE8oVho9ubHdspGCGYdQCeLkDJj",
  "key6": "NBpqSNV3s8tPvEWgW1yTntgZ4ts3Y9V21tu4PiMSEKs9KTiarduLkwzkXJ3Aa2GSaC916QAWMctXf8UVvsctdFB",
  "key7": "5FpziC6VopHtuZ7ydhKFozF15fq1ncuwpH9k39Y2HMHdiK6hJ7vx6KAPk8Fi73cqCaVMKbk5VXxdXdGMrot98ixN",
  "key8": "4Uta2iYchW1V6FG34WSTPDdh7Zx3MxdUHnFouzniMcj99iGmGKxtqKWcmbk6Eu41YE66zUEDiYyNAEkihXtDpWuv",
  "key9": "4WirN2wwHCaTC7m3QQinosBVBoo9EConAsmKuPcqyhHyWSPHnz8LZXsS16uuMi9d3yvcZ4uBJ4Ec3c77akTtXttc",
  "key10": "2t13QbkJDnK7PmmQ7D19dhA3Las7JHGyBQY9f7QJNJkiRt95dTvCArFeYU6Lj9REsnMY43SCELgx7zrLPm9Lkanh",
  "key11": "4jjn7iiqYLJQt67BaD8cZQ5PjaFBXPHUNs89YVjBbNqzHRG6ZnibdvXbdMDqygm1HhiaEN9kggeXq4adxSVmDftW",
  "key12": "22S7sB2Ad9Bodus2eHbbr6rrhPoLpQt6kQv8QUctwYhiXZnetSHK43Kxi927yRaEjgjssrYrNPSvVhLzez9VnC9o",
  "key13": "4goJ5qhgQDWKbao3Q9ezTcAeGFGV2Z2oW42ZUHogBssPbHNBLEvMqMNXTyubDdszeaSf8Ecq7w1edg8d4H5zmtaD",
  "key14": "3J8Ayy8DqWq4marV3VzVDT2VEMx3xNCapScVL1WDDdEtGfHZCTrC7RUM363xmsuviYUqST8zjPR3KyXgoruqMSHX",
  "key15": "51jSf28eqU7GpxceF5XmewVRUEQQwuyaDu2rq8xxBPtvWZk6wFifjB5GchBFFvnk6H1iLUCesVV7La1wew9FdHHt",
  "key16": "UD5cNsU3STJgdwx5ayEaMNBRNsdsJCkfuoWyKCToi94sz59MTtHRSVKHi1wbGYeBsqxJ1DuRXKG7fp1i4xRt5mP",
  "key17": "3qHKwUs4i3MMkUooccYywQimdUmJWMcEeUwfAQjKBp4uvMtVQe9okTqwHxN8LEz9hBVHNLHF53LRUXqSwrfyA2ym",
  "key18": "34bbYX2x7KWK9fSWLxK9rRbya5J7UPYnjPxTJo9TmMu4RfxdZwUxpmZurPE8jiYfynTXdG9ocrpxZPjKz6LWJ5vV",
  "key19": "7RmMWsEBX3SKWyq9141PUWKp2WQZs1kBz4Xxs71JYZwgGajmPEvM21vDUr6BbqijsZ3wwMbRBVf6x4YSgp7WGze",
  "key20": "3zobe4go4upjMQPa5zhjY47fHrMDEGzmvGkMt4idxor8DnoGTf7YnKigyicRn2XMFXwHBrHHTgY7NTcFAooPsATy",
  "key21": "4aLxbVDHcZyZgoNMuQ9DuWXEuqim4RcLCLHsJAwYM2QcJBtM3aekCtfdosKbVyYdN4EVdbJ6QLH7kxBUdXocYcsJ",
  "key22": "4b2as1K4EJNEEFhqoKrzsr4Q39mQTyXWe1YpS2uNW6WGduKucxRJXzcDZcCRLAkHYhXKKzSF9L9gZfFAaEMm1PpF",
  "key23": "5rqbG97DCfRkojYUZx5FAhWxrHnt17KJFVCdaiiBVPWQ5mZSaNXpFms4tcriW8dDJUyHLozRbfB8vz1fPqaMNgY9",
  "key24": "2NAJBkdeVrDnddK73s3VRUxPHkSfCCukdKv7SCbb8wsWn99Xdtv2Ny2uroHBPi6VFdgRjFyzQDrGjFdQcG84AZdb",
  "key25": "558MCroZFWhsAGs2Vh34SK99qzexWGY8MQ5Y2cT9oNBWqa2Gi8Luosn54GNRY6HzYXRjRzpf6xybUiKL435evDvx",
  "key26": "61aeXpKPjDgMhwtM15V1HNPdzVzLY5p2wz11wCowELecXX2EwfjJT7BE4M4aWoNSYxAR7dXh6CYAF7TP199t4nAa",
  "key27": "2Fyvs4aQ3gHMrhN7E9eaQLViCeTN8B57Uk7FqiFLrQumDQ5CYwyVMyrSa4q5P5t74BzRUHw92L733CFxWkmej3b7",
  "key28": "3pKxAFg1K4uoxnsRCwoXAc2DzLvibwYhgVjtfkhc2WkDUTNPPQTYmmWGj2BMBSYFa2RJyiU8mY5yToSRQFox4srh",
  "key29": "vkMDwtnEJX6yncYbyNkMTgFj1utn5nmV1rDzZBcGmG8vc4Smr6hh5e86MdCMW2K2CtH7VubwtmfmDYoxrmrZ27k",
  "key30": "2qRPiBrsrC2TTDQGxFgZGYcrjFxX35e4Ww7nZ9wyGUbx7mcYnD5RJDb2vSxVCgDaiMzhGpzZJ1rpj2Y3sWtF49vG",
  "key31": "3vpNuFj3bU1RNCyGxPXVFEnETPJ4m3F69tebH2d6vLi5sSstdAyHPpNm9Uq1s7SfB7EsuuFbSTjkzs3YcxNZoc3C"
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
