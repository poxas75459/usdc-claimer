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
    "27pSJV1t5azxdGjJcpcuue4Ea7abFhrjbLJTUaLjJjEyDqLoRzpk6Mnek9WYvYfDU2dsWnT4tf2dVHwLtEERfKD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676rkFToastEAaGeXBoUVdcB5Q8Y9jG4oJeByLNsu69MrMuiZpTd7sb3DVe22ZomAwZWnZUy7HAfUKZySXd9xUev",
  "key1": "4eFtHN5sQLgENb9Qdpf4o5H1wUbJEypNA2vA7EqhUDQkY3m1DnhedTLKr7FPDj4X5ZzyHc87CxVyPABJ1s7PUGfB",
  "key2": "18DYD5swXiJiUFXa79VKnqQG6dPpAVbD5LN18XcPj6wupV9Fkb6X4uzfSR5TUrmDBCNUzbiWqaMijtMnkrjFruy",
  "key3": "66VZeD71qHfHKHL43jZXHWFesDayLWaKfz8bRjnYg3edLpW8WQJNCJmNfn1JYiWKXUJVoaBVqBszvcNLqxU2Dcxx",
  "key4": "yLicDpEgxs8UVehhPyH7zk8q8ATzg3xJDg28B9NVqnJM3z9wVntmKzgWL7FUYfaoRRHGYMErhxUYwPwHcQ5r2ZX",
  "key5": "2jtijnZsBZv7vqujKzB5bm894pFySsQDymB5FexVXkJCEy8ERfooNAbQp3pAShREFuETWvifK7CGouT3DmkEBiTS",
  "key6": "5H6LUxJ8E1JmfCV4uGdYCor93FEc2Qf8biQXq4uDqsevWNQRXQtZNdVYSzECegB2xhBEkgVWPfxxcGeLgxqXzyaq",
  "key7": "2GUxR6kP8yFQ2y9NkcCoh9jRrx5mBh7xPgjt2gJ3ukVuGcZyHAMowcroVnAvsz7om1QFYRhsXSrN3nbK59vWptT4",
  "key8": "3fnbRrr3cFCFNJhaDNdXm1G6FKgzWaUgBDZUBqoA6EzxjNnz8WwEPKWjhRPYNY4ZUT8krfs6N4yAcw8TPFWFoPt",
  "key9": "yozggJQPmr3ZfJsZGZZ7rbEDJKc3e24cnv73mP2eiqf4awKNsJVAvWVRdwRmXGN3nV2ercz6jua6zw4x1m8LbeH",
  "key10": "2WBQiBAcp2FFook3Emct2TMyuvDG2ysQZTREmH9s6d7XYPwnRnaqCfv1mQsFaoEYZZ3x7UAbFDE8bp1PB3oXcYwB",
  "key11": "4b4G9EnDS1f9NgAVEaMrhbmRm3RC3Ug7xhXANZ5yVEpoupDqsqiZwQdXMdBz1sdP4W6iuA9nXrP76124VYHDQDfs",
  "key12": "PbQ59nC8FVJiWoFhpDFfLkaKhPwiPgPV3Engka3NSqiouwuWX4piK6KVidrHWh7MLaBftZxQXKsHEAk5Vid8kSW",
  "key13": "6591y5f4G5vSk2wFREkSkLfKs5pKMyVoUULjFvEBaeU5eyUhMdihBq69F13dBBgkQhhzmuUKihvoSAdyX5EYR7os",
  "key14": "29Hts9fwpNrEM1NrhbPc4tA2RzYLQD89BWacuVsAX8ej96niZZpPiHgZd6zvmYku9p3rP1iKWRxhSqFYvVkXkyMA",
  "key15": "3mpwi47NFqNVtqD6fogfMMtuu2TQ2gSBNr2p4BTrPNrdooqUSHj5cEsQTWdZw78MsB78p7dvYawAwtQBQGmwTie5",
  "key16": "5wvcdWPukHzoitammsDd7tnZQ4Qsmd8fR17CGWkQj3FpnSkHj8iGeoyFaoQaAmLh3uRAT8dLvS2sRTJuyXD3dfaS",
  "key17": "5GFWRjFXr1Ax4kLipwrkdGAzRa1kjffMXxsXvMFdoSSCJdiwTy7f2s8yto1foh82ehVPQPBYP2owmRAs2EkeuFM3",
  "key18": "sH6EQfEJQsD2VMVbdinqakWZmTbxmN7oqQKcFuP8Zj1Ufr9Ty15UaXghaFanyxi3kqLsNxFhCASk8cNA67PjV9y",
  "key19": "5eQT9mki2YphkdtsdF7qppusf3FMwhFQT2Qp2UrMe7BrLbt93kv63fmxW85jMxGE3X4A4rF6FiubMNZWMjA4ZerG",
  "key20": "5N9d6PuRoMD4YfRG1nc4Hf1e8kVWV54aAbsQHHRXpuAbR1V3WiUdnLsDAc9hcsaZJFwuqTG2DQGcs9n6GV3K5QEF",
  "key21": "yTBT8Pd1oUMAuyqD9gnMTDsti76Rr2c3J8QhBuVCniFtFJN4WpVmkXNqqP1MRVtN7aRDkZtomFVLVPF6ryh1Yvc",
  "key22": "52b5u1U8UbX7ThtjC9zjTXWJdpb1uz6fXenyeTzF4gKMnKxJVaUwhvGCwTFeodjn8F8j5KwP8bGZmhoHynLUaBUk",
  "key23": "2dmuZS9JcNrLVm769wVN2zM4KJzWELu2buxN169Q3AsWGXsRqygLJQDLXkkjmRCvFaFsMSHW3xWtGptRJvfy2EMz",
  "key24": "4ZN3SYaMjCH16C6ULJVZUiizZFiVqucoyT39pGLzUi95uvYycYtadCtLrpuCRhTuBYugDPzVCZAD7EzC5BVgHJBX",
  "key25": "6dhXxp8Wph5rvuhsmRMJ767gXxrFh3RwyVYA3H5NwkkTdJL34yAFanZocKJnSdiYVkRwg6FFUrZmhrm7SqJB7Tu",
  "key26": "2TaHieEWKsrFmEaiX96akH186mZroUtFnDwopM2kbiA8x3KMekVvEvLkoP7fhkGVKPtXhknjv7xGFuecrtASeBUL",
  "key27": "2FYojsaQqVW3WjAp6RGufkU7uPnc1y69d1MvAsxgqVsyP6YAoWjnrvFGQQA7YtQDuEbbj99EgMqxJdBVNLDv4Y5Z",
  "key28": "3ERek61MkuorpGzYRdcczZGgyRNWV5erc9R1pnV3azFXrLWTYS5sNLkjQqT1hRpG1jC27RyaUNohykQ9XvtFZWpp",
  "key29": "47ozS6r681tcSgS2Nn3xA92zVkCTWNU2D5MdcAmhuJA4nRoPNe1aZUi3EvSiKyGdfCKB1J84iAPK8cZiZyq1omgZ",
  "key30": "5KzcZQUgqKZ1DPXQYbjG8iuwJpB48LhX48am4qSWwKoW7GsQY1EdoAQMkpgvg6q29fzowiFqwpmTHwPKvQVNEkNx",
  "key31": "65ciFZ9v5Ra8mjfHS7H5qd2hQYWbg5bmF7k8Hjbkib7Kndy5yXiw1QqepycfEcvHzkEGGThP7m3iDK4gDEqgGSnj"
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
