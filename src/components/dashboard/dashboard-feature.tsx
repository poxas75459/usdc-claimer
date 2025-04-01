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
    "67LD74MMSVgcZM22hUJkZpbBBW6Ts7SepPHWdAhcBGTd6Bj7GgCDBw2mV21nyxYnMH7Now2uWrP8UPZ9RxAiUbyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSPDUvmaUNbqKAFiBEdhWGkfNx7gY3NGtVovvVzRjC3F1FeCJ2oZe9HfC135jgeU3ZZdW9ogsWcsBLCMwChYoup",
  "key1": "31tatpYUjZBnrwgesv2EEF2W8VFf8jhwiwnTArUKo32JjKFgH9MKmCiVr5ttePAzhM9Jdv8Lra4Rku5PRBV5GjCn",
  "key2": "4o72whyCY5afUH32C4TncXVnKyPZViW53ijru7eHBtd67rUADs2cQbCp9BzJNZtoLCDctSkuV763unQTXG3BWeMc",
  "key3": "s6icPvKKHHw5avsAMecZU3gKZ7saQjTpAhCKeqysr1CoMfESpMVqK1ZPjkesVaZCwD2yyHeDuNDb8tDAzkFFDDe",
  "key4": "3RhdMBron3CLThe2AgTKKXkoptrLukdc4VHS5UWnkksJQh3EM2S5aJ3WCZowRffDpCfP4ZzrNeMksHrWoYR8ys59",
  "key5": "3mD7dhsV6uMhKJvWkYaUwmJ9YsufxZnh6NoxJYteKMRq5FCKaoABhrzViiTL5c6yWFEACzoDsyGcRahWDT8XCbXy",
  "key6": "4JPCGN68VHUa8A3uu7sF6p8RtaGvozqVznyhbuyKwfJpW9MABpTogqLLVYqAvSoUXHeukDB8Qje3vX8HnQXh1cpH",
  "key7": "4gmiu52TTAKKkzjvddstvYGfpzdD2Z2vg92TpeGsNvSW9wDpJFVmp9XzrnFe87JbWoEwaefQn8hdxhX4Cwr5mQbZ",
  "key8": "4hTyRNVCKn1pHChpsVHakfVqxR2DGTRa5UTiXBZJLM7eKRtSt2vf18vN6Y3voSwgEJJLWAiboKPd3X47k93GZtmx",
  "key9": "4eoZKymQyNQhkR7vifURk8ksCaX9mcTV4p2DjUo9sLMDg6nFnmYAFWzCdi5ddKz5acyWYJU31wdqax5nM3dUUYeg",
  "key10": "YqrxMUPD2KNw1egmwojQPc1DTDm6HQZqT4F5NwJHHiUAThnAefjbeEadMQssHHifNoYAx4zpA6UBnWJS9SRWA73",
  "key11": "5BpK7Xx9QHb9tDZw42sbuUvmufV3nweKV1EQz3QNUYdnH6UBozCXHcFZfU8ETjdeCkqGivDdM1y3CEJDekmeiWK9",
  "key12": "G9mJ1yFZtdreYoweEjBAcNTckKLyzjSWL8gPn79ESfqW5yrRraiGys75zbSj1SmmupmsXZwdouVTTAfj3qr174A",
  "key13": "5vG25QZg8ArCST8mFvf7JxW6fM96mhxZaVDKmNpFrfy4vmDEreeaDruUR2AfqEBWjih8oH78WfcghcrddA5ecNAG",
  "key14": "gJw2u2EypGp8zD3zLS84nj8vgQ4aJHFzpf5LtEmf2qVn6oZNqgiKzX1Py7egRChWKrXYKt9qLt2GLFiTQqSRCi7",
  "key15": "2AZojeewjLnfP8Ky8is97yofpDLureRjbamkk4Jbrmd5iosyZnoSAEMBCn2TEtBfieahzra9y2u4USGrbUQLwoup",
  "key16": "26r3PWXhD47ajK3mb8Yv9y786MuRpgSVHgFDAQokH2sL5AhGexzD3k5KEN8mSvLupfv3up9WduT7jQy8ym1yXHde",
  "key17": "5ZcKMDk2HWzYYtZTsysFpNwwFXme8pXT2rRbGuFGVuiy9LT1N2qTNUk4afi7pLCuDtsyz3DXTX12LEg4XyM4FLtS",
  "key18": "5sBGymyMgkXgLhdszUmnwTwb9GdoBb3BnbBfmdDLaEeemSN6VST74zzAwXdVYyu6LZhExsuEEEfjNz5hPYKqwgXJ",
  "key19": "38tiBJ8k9VLKVR3m8641Kw65XZAww9niCp9S95nja2D9aKwBSnBFQbZ3CsGGUUCKcQpAypk85unpWfkEGGFh6qnc",
  "key20": "2tv8q7C9PM15hHEsPKhYgNadeRu6LB4wk1rScs2FiGLfnLDaUQpRzTeYxyLv5jjfppiYfuVePiMsBcMbPjvSBrxr",
  "key21": "3y5W2tX2X3h8KNa7kgMghToJeKuWVk73zbv4myFkTrTmsb8DAiSfVNFrKMQ6BgmTUvF6QDrPyPqwG8UojZMxkF8B",
  "key22": "4je2zZyarVD9eAdoPxi3UFCEcE9C9W4ztFNnhjF6V3BUWhb5sUjtKQ46qkaW4ccY2jax1yttM56bX2oFjUC1xEyR",
  "key23": "4LX1CFtKn344oUr8AwVgswEBNtVqnoACuxkopNPL4bvrgNai9h5vktDoUKX3sThb9TYmthzqVavnhnuDwZYD2ubu",
  "key24": "2qjEkkin93tr9CxuBN89n2VbDvzKExm1AgANXH3w8zwFMVMBfJoYdgRBknmdXeJU8xvNohJWSCrof4D7j9EUdanz",
  "key25": "3SFvBpGXGFuF1tMPHceT8Fn73ss2pgtTb7MqWCm9o3P6bGnerXwqvbBTmaCHhNdd976tzfowhS8bWh9rpsS7Aob9",
  "key26": "5UAYjtwA8wcdP5cWhuDZe522hDK2Pbd8dm3RC4NDxCK8uYVocGTx41vyHPYSpPE7zKpGo9jt2Nfje4WGA9GCXmhK",
  "key27": "5tVR2PHMmoLMe8EidFFZduLUGHjc8hgm4qcXrDB1ThkkpjS6zXDcAf3SQh5r5kHQ6pW4kwPqdUnRufZDyHmuovcZ",
  "key28": "2M6fRXLQEfcGk27hNSxXdUdy63J26tZ2MFqeK3CiRGvwQSYw8nyfsKfAb6kXocLoNByrUeqfXWdDYhb7VVvSdYx4",
  "key29": "KfXjkV1F72r4iLKSjKpyi2HuwciGdfmr5LMUY4BF5ETTJLQaU5eG6h2i4NmbvruDkqitEt9Dg87EwD3FS4geRig",
  "key30": "MZsAK43Vxo4ex1CvSR6eDRp4amdqLqPfAkKoZhaiKWJZT24j1ipmXo541Ao2HX7KzdZ2NCcXinM5b6Ciie5Ly6H",
  "key31": "5UFfRSYEdN9omvaK6W78Rwm3VSguErJaWFZ8bw1CbKzXd891zSwDkVGoR1DhNHmChn4VjC7aop66hWfTAGiMjMqm",
  "key32": "3oaz8hyU8w6bNt2Tur1ZQgyqb9n1PSRdwyv5a3Q1P6VWTi6dq282qciWHACwYjaZuNYXUmBoZeqK5EbFuSaRbM7q",
  "key33": "4VseFaCtEwye1ALZBhh6UfdXciZSXq6bmvF96hdpTnL4bghHQLfc6b1PujyboRP6mQsoP3zSERvrj3yDjQeALXES"
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
