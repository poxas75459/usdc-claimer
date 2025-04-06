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
    "4kr9bAj32njGcqMNcNdfFn1qpaoRUmkvJLoyyZHf3gnCcTJy6EV5oC4Q9PUQJ7qiuQZzU99wCmzKK4LszVbpVGVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "234PLKFgoy3Ha8oVsQuHuXZdc8QDDRs61KdAmeoTweng43isumC4UrAAWKStk4hLQ2M9CAWuDS8urRFc7d4weU2b",
  "key1": "62VDi7opmJ4GrPXrEYZrTvDiPX2adTr8J7icjee8pJuf7u5kzDwNGDeqpKQyYkXTcupSmxK4SfrVWV7HXhjmF8Nu",
  "key2": "59cFUQ1YPqWz8uvfqfK2kErA57TU59dWywPG7gU44Z5EzFQcjbv8oeYMPLiVHkHXj8DwGvkDhoS6ZiT1mKE47EYP",
  "key3": "QZdyj4xePhbeQh1oGxdgS8T7PjJntk2tJJWxXvXbTypNnAxQ8eLf2RmjVifhNg3BoPt9RBWaxvn6JoScJ3jCA15",
  "key4": "36PjXTjihwqVy4Hha5j7MDUq71jxa4zXYjW83bDqDB7sMHk6oTiyheCmFDwSP9MwdmPzv5Bqvzbfj8q1uEHjgDR2",
  "key5": "31qH6BvfriKvVymMmoEUePGc5wND9KdsDFFwo68yN6tjHRRWc68hY57YQfTyW82Vb2XQ3bxmBa6aFFYh8i73W1oY",
  "key6": "GCVoJWH9s6kjNEfk9ASVhVZ93JtzvBRrG3WApbGbfW3yt35t4KzxhSisfgdjn2WrSDVhnvoQXWGZsNzvUyczZ8A",
  "key7": "4HWCimeBgitG8TXvyjyF8omg5jNvXZyfcm5jEzRQGUNpJCYnHCAn84a1XAx54SSBYrTGz1zKWaUNaFzcYpqV1HRP",
  "key8": "3aeTKyZUU1uBL5HXkmCCVGnf12yfNhMnm2hmbD3tbmLVSJpdyg4i9AhgDmCwx5dJFKyEW8HMxTEeChhnt8fTE8i7",
  "key9": "5ttphCZqzJbP549gTBmeWppEQqRCyRft2G5J1B8eSEdb8HHB9WucCxozMpBtPxNVrZ6y675PJ7sjStroKYh2jDcZ",
  "key10": "5w4k5PEXdt3Lymnfq77p9bhuFPSthnrDdW49c2vXPBFhMpRJZEg3bCNucN944Fj9NAYpWKrRNthJSu5gBbHrZ4nS",
  "key11": "3PuSC2vSGGD7VQMQ3TSqQB2L4epkScS6YKDEaBmwXuKXpM1BFMMGgwCHindyChG5zHn9B3NYuQJ6rFMB6Y85pk3b",
  "key12": "Dx9ptsRxJFvercSenMcvuaAcmVCaJtzk9bLng4KpVJ8prK8DZUx9Qxw519ieiJtnaDovBX9jTHuRSF5bwgNnjS1",
  "key13": "P16LjqgsVwTeAGYkiaewrBzVATXsEo5H1KRURSJaZd6GNCtsWsRihmjCPXZ2Zki8uejK2swjToYQbP1Z5CK8gDa",
  "key14": "tJSV6uLdySxVwbKrnNR6evnAijoCABNK53QqgThTPi6EpT2eFPprt4ABJ9Q7n2uLQ5UQ4NZV54KcTUEgKFUYJL9",
  "key15": "4Ekbz3kmPapmMQc6NPKqPHrmMTs4YcuLPdAsx37WwUZtTC5drMpJ3WKHaf3ZseNYBNVtzjhdFfwmAnne8Ac4c9pm",
  "key16": "5XNsh69QMGN2yCdaBTPmGu7ECyPPP94tQXkn6L1FjTFMyPc2SpvgADXQYwHATFUmYt7Wf2Tycg2UJc9AK8uqYPjM",
  "key17": "2W74V5opnfZagVNuEvaMrdfHBJd1WnrtxoxfQYQpZWxGJnqrLqrJBNiCyENfErMmF1bepQrNnH9VVJYpvqDAEhrx",
  "key18": "qKuxrDcBCHguKzqdNdkXvxsnNn133wpQ6yAkXYzwF7xUN8hdMSvGx5yDKaFjuGJK6BhGqwgHRttsdhzsMY99nDq",
  "key19": "ySAZ6CdcjYAnVHJU48TEc2emEYppCH5Mi2TSdNPWoJGgf1GwE2cajonTgfQYS64mw6togzijqprjLuM91dgHJYX",
  "key20": "3XMPgm2nsbSNXi94C7eYUuUaPK5Yvsypyz2Cv6ziQVxP9opXWSvUnNvCPxaUeyVa22dHsgjf9ses1TMqidL6CNoH",
  "key21": "2qk21b3RXK4VaMMtk4egaBxedYDiaFYdLq2XXfxG2DLFLh4yJDTt5y5V2JJ9AqTPezouDMpf7fu7u4QreacXKF5k",
  "key22": "4KTqjbBbkEKncA28NwXYTEm8RiZE2iHQg9imkja1qBnNTN6ebf5ZFC5zcreDg59hoZR9ejFJxpf9giJTURoiEmEB",
  "key23": "5NQq3xD1BynWxXLdkoEZ8uW4Dd3UR4oFQ3J54Q3HPumXUwqv1sEsSYq1b6QDoQLvsX246joS75tTZ2GecvgVZryE",
  "key24": "5pfykGNJ7BGF9vyjtw3SNpZr3dgAFn4JupWCacdMUykMfuqomxCuQ5Yh4C3koXoafhMmhYSAwiSNgY2UkBVY5g3W",
  "key25": "JbdKs5z7hroCdSDk3C7P3JfmFNfhXJQjo2zA3QuHRZWBNvyv7FcN6szx6MRKewZyrkW7H4VN5WkKWNkPmStkL6M",
  "key26": "5CMjKGUt8oBChVjG1GUWEosRkMikgMzQKgdHUM4Bp7P5x8CDS7r4zZrMFKFPTKD4H55SYSVUmsHTdN4JevtkH5jB",
  "key27": "4jNWB5kDK3KEWKrXpD16boUuGEkjprpPbaRhJPyKm58VXtk9cxFJt9qirAjSbr4orhXKYNa9XN2j48sXCdpt1ESY"
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
