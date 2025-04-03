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
    "2V4awa3SRAaxnqQruBMaTfTmuMKLPXizFe3fBs6RnGkqcSQZxZwFQVkF6hcn6gyAnU2dviTPGJJjCbZHEZ4FVhbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VNknnPgMSFxTMfJtYfNGXqqS9N8widxMxC8JBNGi5Cd9t9xhuAcLxsGLdpobryYPzHWWiXdPXtmDENS52ebzMuY",
  "key1": "56yVNPL2afEptvJWaTthPyJnC3HrCATjmGu1U3aoN2FDqj8MMzXFvRaJVpkqhowgmHooUGtL23r38JPT1pmh1pp1",
  "key2": "2Pv9HEgFSpnHQ5vNP4tYGXn9RDWZFB6ZadmUmYtq5rRt1RzLYE2yx3AAoy3YBzbQ8bx541VCau3vKfe8sCYff2Yp",
  "key3": "675vJvG6swNNjZars4mFnPD7JPRTTTa8CmPnhNH78sZtZ5bZvxD2Do1fN46tdgW6yrxeVAmsf1MjveZa1XVzQ7HK",
  "key4": "4HpUT7w6qDNFFSq44w9iQVdekFBsSxZNfS7EBDL7qQQ8yw28BKMbf6AEVyHVH2dpXdaFmrxN69PpojVwsJydNtxc",
  "key5": "2mz7oLbX2Vs7WTp8dM4iNzcpXe4nKEyVz17kJTp6AxynPSJXfSXpfdBCzf95gTy3ve5mWa4ELf6itPY4EZv2yLiA",
  "key6": "4CdRfbAv21bh5MRB359n1PqQAm77HFWJgNun2pSUrs4FHX1quvV5AccdSUxEjs4T9Nwh2xzy5s9gquPsEXwzUruc",
  "key7": "5uSs6Mr7hJrBuBHYSs2oQFFugnkorrzUdsQKQi9pwQLZmgXD5GV8PdvdmVtb86foQDn4N5Vo7RXzpsFMNG3cUQoW",
  "key8": "3Nw7HxVdFzLFk84Sd1NV6mKoT5gvRQArtRaD5Nmg1ty6d6dggtGcJvTw9F1Zy4rigPuFLjCCJG26z5DRrhvKp5yR",
  "key9": "iu4D3stw1YMUna9RhbFZE8z7Sk33S4k9z9vcvmFgGhiqcajGCRDmaCLFwk7qRtJG5pACUdwT8dyWuXSvML2QqQM",
  "key10": "3tMGc6H5SrGf4Wvi1zbbp8yLVLfpDZ9CECdiXRKSh3Y125W4oQM9fPh7YAW5iRBViQ55DgVq1u5e4yXBPM3u7M8s",
  "key11": "4k8u8rbFq8eQ24uKfNsv9Nx5ovh9j8cidXhyEeQTjPngVKLwXBYKA33HPvMtnvzv5UTperYCBZnjwspoGAC5aa9o",
  "key12": "VffBaqwW1cheMfwXZtRf3GyYX7MfkdU33bLshWgJ4WL7vA6y1CHHHMWXNJAPcDby8Z4aVtvoNbiFQEBDNofrEpw",
  "key13": "3TYR4aaQAaSWjqxmuKiLh79RYCT7bDZkejmVYXgTziDZKpkjCxd8qrDitp4QFcdGt6K3LsG34mo8Nrw9mUYXiKCw",
  "key14": "4p6pCoF5z5hyuDpxp6JJAvMnLSQQXWBYscPWzKEwFU5dkAqd6akhbsu73cqxmNaP9kJ5q2y1sxeoRCjTAbZ9oxiP",
  "key15": "2ztVkeFtdoKxPFSenStnsHTptzG76MC14Rx3uuvVziZV5xRHptnnYSr4KGEvBzzMVdF9LbF5aALHNwaH9NSJUffQ",
  "key16": "4igZUmuybMkCBQnRMWq3LoKNxHHVPTVJq71wZCBV5EcDWy1hzHjFfLhwkV8BdbTWrJTHZqyeLmhH7sjwKYx3nnr6",
  "key17": "4LGyXXFWfVxYFZ4bVjNMgbQ4HJp6rQH2DqFQqZy8E8U7V2T4Y5fMGxEZosWfGudBTzyxQbR551jtekoY5DUB2U2M",
  "key18": "3JxyH5nD9Kq9Pq6Jhy9zbBb4Z9dj3oKUxfwXY3w3Yzg4cBCqkAech3CMhPyLoQwzibM8prmNBDHQ67byEeikBtsr",
  "key19": "4AXTD7zM8new26p8DwjxaqGn6xjqHx1sw9fta6jsvM9rwSyypp3sKR5SW3g6PYvtqcV6iMVHZFc2YK5asxKmvEAS",
  "key20": "4wmYCBoXzLrdPgm6zpM8gDCHEW95Hz2iSU31eKuuC2kuNwSYqUtmqabUYoyeWUNPr7HJfUBJY9MdqhLC2R1i3wKn",
  "key21": "4jzoVyn7YcgyES8yK6cnHUDBQRWsK8EBbHAuKgGgDwggYMfzufeLejg6H9zb5F4EspWHENKSQ9VJiJsRuxvjgsVA",
  "key22": "31Gu8Zxd1bKRqLMHZ1NDgdEe65zqMCnhKn9aTBjGX4QkB9mCuaRoo1kM7m3vaGfHqGCB7x7Po6MnQ7V7Rm3d56CX",
  "key23": "52xoLPHk7gMPM5zFLfGn2fchJY7NKacJFHjzSaKPBJENyfQaYJDNji9zwM3zJrtvDvYKoeUcWwJDDrttAV3n7uhM",
  "key24": "43tdcAEjXqX5SddzuphXiDQYGXSNH3ymDrqDVa3L9ZzArEvzbYzZRuFBAfvDZfgW8uNShWhLmXXrGWeXfEQZuZ9k",
  "key25": "3vweG77Mfrec3XhXTEueFrb6YNdCe3ErmxgUumqY5kVf4sL7fakFY8bqVzFFLbPWUrNLwBYbCuVo2zHcHTB9wDNB",
  "key26": "63aVra6F732UwAphpFPZDb9F1Vbib8v94taqr45ngb2ugGNHBZCFCpPPMXz2Me7Zo1AY3meM6qmMKv5oV1Hw7ard",
  "key27": "x5duArqU3acsT8n7QGeNVr7a7S7MFMrXCAgRoYQ4Q1mcvcMzDHDWR66rtkxVoEPDYh7TusHaRvhBuQQDZGX9Xej",
  "key28": "5R1Wt4cqC9LCzRzicVHx7k1ZKrV7pwexg6FohyHix7yrwBBtxBBYUnoAzaSV1G24X25uqhYFKb3TzkLvTQchf82W",
  "key29": "4qMCWrNfiUhPoAMM4z6PAXMgRd53FrwdFStdq11JrSmUcQenis1h5QVkyuR4c9XGNzKpKZ5ZUpt7hQNRvs6tbh9o",
  "key30": "2QwSgJyfwn8HSiadF2r8rFiPNM8PYxHinqaGQPnbVyEQpPxThnTxhpvGM8GNAjiPdkMZFTjhu4rfd7oo7DJ5TqbW",
  "key31": "5nwJh41xsVYY9mmdWxroFDBkJ8mNj9F337in2fDVgULs2LB4THD1boxVXBmt4BjXN8VYS69r5yqJe8uKEUMytDzC",
  "key32": "2EDsBAtg94LzWNXk46RqtxXnpbRZTFJoEifqXfEQjF2sWh8tSRUbqxbs19qdmBM1oJ9Y1Q9PPgcpjBXRNxDKsAqc",
  "key33": "2bLZHu2sAR94Z4naTN8ayjkirCJwtcbdi3GQbpcxaE8r2gTjwqJsrinoQvs3qQbtkBUxADvtRBcDvZjFpbyXs89J",
  "key34": "2J2WViQvPXb9vNYrcPBaj2cKE7zZmt3bfhJBBACVGPaMMVHL14yuFsqrZJ4VrEBWsry1QYbuySBFaTZWEpt7tYkX",
  "key35": "5Ti9AHxyZoiLm7ASJmhNGhaqKGQFbkYsCMTq7tdM2MgZQhJKVkxHevxUA8XsswW37QuiDHZPTL7AuhCSWfU4fJvd",
  "key36": "RT4jxo4LqMZ1uvs8jH6ZeXNQJMSTXgeo1J25Yu3vDZEVjEUSBy3CS3LqiRnRKWtSuakuPPDV8p4FBdGXfuvyP1q",
  "key37": "24666KDtwpsccD47yjaWV4rSdW2sRW4vmqfPkyRgqKQiego97DU1zChAqHGxCatwpRotHBd4dGhr4Q7VTcpZPRaB"
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
