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
    "4KtaZj15eFvnXsn1wdJHHaZoquigEkyDzw2GyiqT7riJ3gmVJJ7LyhBvuaUq7vKaMoAgW6YMATW4t5VzMqrhHHxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jWMqSEWSJisgfmUxre2Pw9dALZWocL33cJ3HicxHdLikKftb9PrFp6Q8ZYbbxJmkwmLYdmXVFj6gMqxbaBcnPZU",
  "key1": "4BJgfyUURvbizUL1tBydWjqYn6CXdH4nfEipsJEfHgFeWdTm5pSyNuLuadJLPF6xzTcXjosEwGntGyoq6c4Sh2bR",
  "key2": "jEbkd94Ccq8xEKC89LwFjEJaqw9LDq37WqeuQ4XQRVMKfpPqxS1kTKR2U21QDVBjUhihTdVevbVVASaJh4kriry",
  "key3": "2TrEbLvjBUN7YGqz4jJHkyxqPc6pGbRXhcvY1pgmrx6wzRZT9fofEtkVdD5SC71a5dEDSMkvdgd3MUqV7brM7udL",
  "key4": "3hFcLESyZBQnG4P9f8BPvDc5xPCEXFHJmwzLw2kCvVuJi8A1RwkJ5p4noagrhwi8Mu1hMoJRcp3dp4nodnagi3PR",
  "key5": "5F5zojzUYKrxV8dmufSRZmiZPpwua7dCtmZVrKqDJZZnzCezUnUojuSorGCwLU2DSc2MDAzdssvnVh8XRKnDm3MJ",
  "key6": "64PKXYbtpzVQpTrHZcPmDFPAgcWFQDS3c7Egjfh4akhweeSQefRg7N6WeHshHECZBsPNk8Dopp2ZHYbMDHRKN9v5",
  "key7": "36KG3kW55J6xX3P47Jt74CAWSj24TypoSv1Lwn5fsg3ZwGwbYVJ4fXbz3Ru8Eb5A7aMk6CFhJhdHu21JquUrnmww",
  "key8": "3Pkyy5HJMi9oN2fp2y4tm1aiboSXVTc2byGxjQosfjk8ppYc5rfFJ3pfjMAnSyrp4AXPGmaWUHbiUd6mEWCR3P1Q",
  "key9": "8ZPHbGWhN43g4977VV75mMW9z7KxxVVJpPyckqfS9eg8o2kvmpeFVtic9a7NrrJiw6TBy7qm6eM7MaFWe5RCNNR",
  "key10": "DW8Ph2ZAqKCsBz9MPqQK76WtWvYgS2RZCPVyM9XzcJBvDxG3qTCagaaEMctE2jL8WQFhBmbPcjqGZTqceeGffDA",
  "key11": "3d4EgK7EvA8gfB7PBMaWrmw9qpqYMbs8osfGFnBwuiFvC5e755W92PmuGDvKzVwuo1QD9eGRTFyZcp8ezdpgJzE4",
  "key12": "3BjFtN4rp69fCTME8cCxUNdPJcMbtUyVfQi9iJ1QQmVkYTbM6K2r6SBd2DLawBvjsPTayv995qf9BGRfBJckUVKm",
  "key13": "4XSK41u2FEqZVWrPHduDgR9T7cwgfWSk43p8A8KeNpB8AnQSy3HJioXqanoZab6BwGQqkQwhAgiMrNT7NRFPPdX6",
  "key14": "3yVWi5vK7vE9RHLN3HSpHPtMGLcbE7DkZuQfNLfo8uThi9PK2WJ3dQ2kLkm36PmcQgL7ETrHGoE2yzFTxX85w418",
  "key15": "2gDb8hadrNshXVsk7iPJ6Sei1qHzwnhkJ3hNdDsrYysFk7k7aiVvXAJoN5LyHDJQuRnvkVnzstwmfChmBgMnLp7F",
  "key16": "4LPMcsEdPqX359nMTNYfAm8A3W93v7Lr1kmhM6izkvXcqFDA4K4vAJgJ3htS5FK7oFkqcNBLLB7owKfXKLPz9Wee",
  "key17": "4j1uXGA8DaFQDAYYGjvkyhs8kHT5B5eksjaskRh5ttBHdN9in9isSPrenrmmXxEkGjsvy2yM4pmpgJHc5JY94eri",
  "key18": "58z7BgGF3X6nXVjTyBs9swTNBheUFYWc9QRjd2TWujpy8YUT59pEac5PsSe2DDYGN2yKXVVjqQT6zgEoLF1HtG3X",
  "key19": "5PTYoMijwFPyinKSuK6jdTDLgHiAVfdyopureiJ4L6VSik4Jy8rbZaXyJrvVZ8TiSqRhN9drkM7qpNjazBZsjzKR",
  "key20": "3KsooTSnym4FtCj3vHBb3SztoqBK2wNqiycon7oprWHyYkf4mDutQPMQ69WqD2rXzzPtmqMgoXWcGJA8jr3RKEDR",
  "key21": "4knmjgMq73uASYCknaxoK7wCtk2RX6nv1N7h4c1Ejj1BVshsPQThqx2LYCKZ1GRWKAGzFkWqDXD94boRckXQsTuN",
  "key22": "s4SCwJG8ZKP641Sv1MfJ1ykn57iDrs19xeZKdHQ8PwdXLB5UeV87K3ACFPviav7fT5mTvS7vNnDPDDUPjXTqxcH",
  "key23": "5jVFQ77GzLGjkhDZjkNxProDrZ2TfgchokHd6p8smaFZ8vMJhCiVWByWMmnySyZY13irZ2Xf28wbsbBZK1vkkkno",
  "key24": "3tv5LxLD8HW6P7YXui7zztYXgDnHrMapWaj9npDnDG42owd5CLYM8Dm989wfncYEdrKPANj7DzEDmFDHippomciv",
  "key25": "2jDcFsBSWMFSs1eQGKE6QdoPkmTbEBcfcTs8RsBFYUUatNoizBTJHSYXQT7nPgJWXMwnuAGyY4ujNHtthkB8PjMJ",
  "key26": "WVGhm6BbyGF4RhuuscSEABY9WPynssGBsLvPjRZBsAm2edSmb8VgcveEKwGdCpZFhF8Qz41Uy7HepLNABgvanNQ"
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
