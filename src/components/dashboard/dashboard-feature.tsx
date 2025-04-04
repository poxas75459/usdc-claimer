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
    "5JycpPc6YFe18PKWU2xTaoXHyqhC5GCX7SwYP1tTZwGTeJgR9Ai2YkPBenLWB3BSCB3qARcTHKdrgohQWb6G4FWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iBzMtm2ZYP6hXktVpVuX3KLwfJ8KmWu5Lm9iVRX14FBiBC7f8axP4ij22QPd7XjH5TMm3nr5xNfB6Nt68corNu",
  "key1": "61BBYSj3QucmikHd3xe5TFQ3fBoZCs1L8zQi97MUD7MAxcfuouTkvG85i2ktY5E4iuNXRxD5jH2owQwmZBFRiUhu",
  "key2": "4LCmFT78drkfEie8cV3y797qR2yjGRnntbSCGESkzKoqJjxTw9TQwr5JARnE3ti71MtxYoBU5RMAyxiE1ySpgCuC",
  "key3": "3U3Y4URWNb8MFWUP7AYJYFGx45iNJZrkTxtrvoX5N5hTQUwpTAWAgZ9VWCwg49FsFnXQbjDuTZdwkFD9z4x5AGp7",
  "key4": "Jd1D9hKGAX7EiL5SXuuA6eaNPNAvHVAyCNeFigCXRAJmKVeVghJDSCFbfSUXzb7aXDjMvqxpn3ChJvRMfYkLdYh",
  "key5": "5mrpKFYLmV4m34DMwCsbcvjBsKZhj9H3pAaboxxHbqr4613aF7udmBcDh7La9oK8XPJX4qG32WksPDPPTbvxRrNJ",
  "key6": "9LuB3eHGV8bgTX1NGoW7oqWvnjwBXSb8aBYKNMsGpWeTzwJMecnMoVycEm5eaWqS6eG5CQBaFHXn5NVkmWDovfr",
  "key7": "4hHzNgMuqE599JrbCiviT9obKy8pEpzfHsyzDL5vdBYv3FDwGXxKriSEbt4adwSmfqetzLK5bwPQHVfcw9buyKxa",
  "key8": "3r3wwNzjyiuFLQNFNNW73q5PRXp5z6otqRBMfaGUtQhn5nX9h4fPtsXDJi2D5HZbfaqzd6zVC9HuF32HcXsscrYE",
  "key9": "65h7bbq3XmAZEhrDfrYNkRNtBrbhhh9qTPChmTbgrmxZ5SVWj8YkmvywnCyki5925mDY9Azf2V5B9BLtNAbE4LBz",
  "key10": "4WArGL5jZWF49H6fAtXokjbSktYCjYMVtoMkEJKHm4HFYJSSh4uLuGtf836v7ioJHnTGThF1T1VFV1QYVPu8dPwY",
  "key11": "pRfsGFRn4eSnx77ryZ4qfNWQwZdsyip6NEyGbHzVNitcFsKTkVHuA1jhvBizexSpHQY4p8HriUGrj5gEkLN45sK",
  "key12": "2CiqsnjwgX6bUkAY76DG4cHMteHPrqCb3SoxMd8F9ujwnrTHSeWwezEEUKSrYZyJXDETFKMXghL9fUGTN6VCS7kS",
  "key13": "3jRKKXWsfufmYso3dzg8WDNG2KXenCCkRfdVokDrzpEJ2nKjvmiButoLjS74NAWTfcWGe7QeJVB7EGgFJnD2kESq",
  "key14": "55mBqfEMBhyt1DxLmeg8p2cWPVcWfW3ycBRaAwcsFqwDTVPLUFsnyNitWTztHV7i8ML4YgYHUknibzAS9jiKC6Ng",
  "key15": "4bENH2z6SLpsFsJFXh9MEGuJxwJMvPSZkCVG5yj7eRdyLWtk3KgNFsoYmTGAM2drEYZZrKa6CSQBWzS2kUnYXpwx",
  "key16": "2JBr9zc72wxEbVjXchbq3eiUdqNPBQRU71Faov7tzRh3U9FNP2aFD5NVifyFB2TGUMq3kPmebkS9AjCbDZVW7SBU",
  "key17": "5CcfcEunwYfBdToGjG3sAtJQp3pMK7aPDgAQph5fZ2PFtz7RmU3LuvoomxSDxfm75YUbukEKFeJrtTWR4ixBZmgW",
  "key18": "2ybzgSVKpjX2rSRJfBmpLqLgiiV9TNWMEsivZaRm3VqYon6xKBpXE1qNenGhdCMNy47wP38w9WgTZPcLeUY5J4Lo",
  "key19": "5xDEbvXxoKze2kR3Mxd4f4XzvPzWRuJsECdYxDT3jAMmd2HeEZhwAkxaNv1VY4bXDwopMCQZWBTgo7WDs4SXgfuU",
  "key20": "3EBEXPXE7nxs8xibpHghv3BW7UKcLMVPzpTrG86g4VtfsP6vN1waZXJfnsaHRyVTJqVxbwX3tVcoycam9cZ5zkvn",
  "key21": "5Jx3zx1whyUTUQKvJ6wNsFSGMj1YiR4WamSHxE7M4qarcf5aGvng43C3bPRUrDe3ZbP4wf4s6WwNhcP1rf3mkcLH",
  "key22": "2T1QGJdMVzinjksrJhBz4gNXBkYb85neNbDV2X6pimFksKBqaY3zyrS5cHvrX4SZhdnHa1yLyWkp6RNUhBkfu7VJ",
  "key23": "1of8T9LiGJfu9w9sHvo2F9JDrt3ZmjM79DFPuUfEcXtoMpZc6ZRCmFTx4F9SoLoK66ahbiQWiXK14YZGBe1LjX7",
  "key24": "5aYoVnKmZgtEDwdgyMPQaRaBm2Am3jY67BiQ2TuEfcUoaZTPG4nymioNVi6p3tvGk1QBt1ayAyaoEvGMm7NYQk7r",
  "key25": "2rphbpnpSeydyjGjKuzMhJAxWvfZj8ZALfdkgGFr2npow6UHw1Yx2wdR1W5Qvx4y9kRPhm59mHzEnj5PGCLHeJdT",
  "key26": "3SeLLAwg77yXagwdwLL8VN9xUsJrk857DMhQ9s1JRSCGAPQXmvRjNViLgMLKsdqCGCxG6Ae46UTNRkxxBneY9djU",
  "key27": "4aEhu6tjdYL9vqoMS4WgjdfeLjbAZTEJh276KNTnq8EknT5Lj6ca6ptcxYakgK5viMegptmEmkt6UBueHaMvLNub",
  "key28": "CK5QPRxSduy8UQdaAVULXcB4srJCzwJBCUZZEfyq5x5z6mJhk4oH7KGcRtBhbS1S97eoE7qSNHYrFA4pxB5HuGK",
  "key29": "5c9opqFKDQ81nLnpyHWdEmxzbzRoLwAAyihuRPEwzXciMzWTmKynnxZendSi9q1jr64A6TYDb9CVnTq8XqNCF1Ts",
  "key30": "3jRbYRjnxSrxEpzmehDzL9CpbuEZC5952dayKjwnjnGb4QGvdmzk7EXD4Twq45g99Xjitep4BpTykDFpVhWnzZau",
  "key31": "5EEWvb5xCHoxYTEGrsVWdjPc5cUPhC7JtQVNgdcTyVTjeHFckG4RtHpK9XAjmQyznVNFix2c4oCJSk3Zo4TQNk1S",
  "key32": "5LKtkrrS9eS8p4z1SMYnxN85HU25V5mkgWshv8CkpLdvjwPXeE5xVaHZW2t8NHfQPxeRgfcdzE5jwnvCfdRZafmR"
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
