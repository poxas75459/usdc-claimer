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
    "4L6MkajRqgvHt5FcDwzU875z5uYsGyWpp8udgwLrG7tiso3ykLDKnFRCjbv4RyjNQc2cxgRiJ3mint7YJmxTqxjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257ki4KrfGeag97EaPdqeCeUz5pD5i6gpG32fAe5CjmvhoTd9jVnvjnBbGEWgEJX3y2ZjAzmCtnCxQ8DADxrGz8D",
  "key1": "pLufjMdf63gR9LzimDmtkfZAes2dw2JChK96gn4aFvrX7fS9YcTaULsC9Ux8V1G8hBPsKKt9abT9gxCYT4amEXk",
  "key2": "4m5qx3dV3ejUcBwk3SWUiwRJm5N2rMKvmbWWvH4fygmWWFrdFhTgF2Qw3ZQ6UyySkaVbWZaNdGHnbLQxkgPMM4Lv",
  "key3": "8r4QYn94FUCuREQ83F7FmRx66H68gywZcRpSGsE1bu6TKvuqzKKGC2S432gXR9cTyCWhmuNn2VxmgjWiiNH57F7",
  "key4": "27dkvYAdHoAoP6xsUnhXdc16Kmi6Nnk4RB6GNNsLtTm64ttPiiH1sz83AxXjp4rUDDyWd46PUDsBY7EppLJBxrSM",
  "key5": "2BcYjeoZugJADdLxewmz6KKVwUn8Lq4bTcKY6TW4ySAj34pyiTnJKA14r9Qor8gTfc93VovVBmptXBFG9eBfcgt6",
  "key6": "iZrCjDnqf929GjyUSfi26EL4TT8MQAqhMxmVtyik4kMDanL25VpMDbHxiSjtzaXmbdTWEq4xbqtM3yUef8QJWpt",
  "key7": "2JGP6NJP7w8qBwbNc3xMM4wc5rsYGps9TkQwdQmgTPq1D1xXSzfjPjXSsBi7vFRMoRZMkyP2BtmT4whiVNw5CxVB",
  "key8": "3uxGvkNXy3LC7znUSsRX3ytGBeg8rxREgvKuD7apcTSYf2UTAjn9akwCZmbwnQs3h3VNipfabTT4z1JtbfuhSxPH",
  "key9": "eLktj1kndfJGMpcJ4ekSMf2krf1MNzdLaU6C6A4wSatCj1V8qp2kq9Vt6wq7cqMnV4XBbs4YVfaXPwcE2Kdp9cG",
  "key10": "3tLcyK7ixiUqKnAhioXSToC6xCNzP55SVoFUeY8eNeWt8U6bv2gygzNQUttHmUWBx7QcCKJZFf2fWNuaF98Dd6yU",
  "key11": "5KYKyfC2XZaxcrTDHS7HybvfDFUnXtWw7n6AZdStLpD5X8mpA8Yd6sTPLQAo1sFWdbGj1CPCeuVL79LUB2umPWvL",
  "key12": "34yDWzBFdBRmX4bzAcJD8CKJxaCUTqziLWuUSphqYwUDeekjmeE3V4ULmSfeQbmaN2UejN9r65QpeX1ak3THYw6o",
  "key13": "4HbDPQQos9zVtgrBD8vWNnBt5dVKcgiT4L3RTkfVghen7otFyCuB4FDKPitnuwQnRg7wdczf3mAKaxaTdH21EfCJ",
  "key14": "4qtmdEiQkWTcEkPnCCeT5Uv3Lqu78LhVacyEXdYU9VLFvKWsuiaMgFkpFxLApPVtNo8uU7UZ44oKx1aYENYb2KsK",
  "key15": "2v6Uic3gpw2Ud5y9uCo7SPG7TfKsfX5FLZBiARZGZVdaj4oYkvYyxbJFvL14qP3WmrEfRKujkKXYPTt9ZjUvr9A2",
  "key16": "5SgiahtbNDvRf4V7m226THJWTGFD54sRM24oug6zLC9K9YW8kfeL7vwY98NxaHsceEq1F1tBDLjT1JvEN3hSx3o2",
  "key17": "3oFBeJ9WWwj5EQn5kyrhCJ6S7JUq1qqedcgxLLP7vBP7v6gN7R8c2oVhbCv8j59zDxPagetoMtyrmEi8uHvE9Um2",
  "key18": "4X1vhVMpCGUANebGdZ9wmM1vAhezxMCMPePGVPHM4ixQPce6rYB5wcx6NEsRngGcG3jm4zx5v9XEHTzaQTXxKmYb",
  "key19": "3fwSx7pdFEL8Sf1AKwPcEoFk9QCkobtehQ1VejkLx6ivJxmxxTsgnswWSqnyucTEiZWEP1dEHGn3pxQbNSiPBQRS",
  "key20": "xE5FEBhhesciaSB4C3igCspW1Tx7v8fcj6rLfYKgNnZ4zLVhs69R5hWSrpWpdRp5a1BwpMmfsH7p6bwnMpR4toM",
  "key21": "4YXUqQR8uAcCmq5HnnBmpTKyF6mhU5FpdvsMBkPhQCWXYjGQKWGKXs6StF6A4WhxKXiYa2pg1pMvswg4dUXYawj",
  "key22": "5jDDosLZu6Q7SAk99SGAwk8j1TFWwiQQFsp4SfRTyUfTKfZjrdi3oN5ZmPFVaCVMAECnGs165NZ6swXzXJkgKTJ7",
  "key23": "oNRQCZs8uZPh4yZzuvXNQnZpmDdoy1guoqKuGRKrjxwDYL8DY9AYfV14NKXVw2JbfWUJXg4P4SkEeyPVDWRzh6s",
  "key24": "5Hy4dkBYPSBwbWEw5U4wJVo6Wa7UnNcq9UpjbLWSSr4yneLD7tVdCbaTJy121TkQ4EtVudnAgR369RXFbb7aTcCX",
  "key25": "3aGr9Si1dHWgvZqfUgMUxh1e3eEKCA6Fg6RBJFjdn2dSd92D3suJw7sokdVmMVBNcQUgHgnqFUisRGBu9cwraeBK",
  "key26": "2ZDvW56eog4pRqzzabtdbUb4UbtJvqiqLCTapJupSSyPrb1AwS5hVzuUuDcYqH7BywzXLNR3onqSYMfbM2HDGcou",
  "key27": "gpaUpWLNPvGrDhAqLmHJKAyzQSupZpAZodv1oN8cpccArYn9TgcQuggCF6GNw53gFxG43xpjFwW15ZZYW8iR3fe",
  "key28": "4btKfxUfKShGKcHHQMCg68Y5xkGcMjoGAtnHL7WndAbohN5Wb9VsYpCuEYpQcbFu36u6XFKnD9Npkxw4Y71Sr8kZ",
  "key29": "2royRxpYoJ1ARwrabTpiXk3NZRKkMkhK8KiCpKPRh9iWfRbDq8X8KZTkvN6dN7vLXLGA3wTorMTQB5skmzRFjGY",
  "key30": "1PC4Eqg8sF3KL5JWZWcpo484Q5NR4nEK71WhVrVPSoTA4ghhHCZ6JGmY8shECvNobzxzh3WYYk9o9GCerVn5xVr",
  "key31": "2RU7L2yTuMka6TpwhfKnVTx1brnfBDRS8mF9gRv11wvyUtR3n9hhYpytZxa7VmRMYUdqhxhtnbaoYbQw3KguujZw",
  "key32": "3UusFSsMLp6ce6XCfmS8ZF7V4b5wt5B9Lw6fMTrERA7dbkcT38aoh2WGC8RHMpkpfzQvjds5CKNugcB894VnPprs",
  "key33": "3pBy1EQDFMHnmBQHd8nvg7BW9XhSMVyW3TmZpqf2vK23sgzXPLr74JAimpDFh6zTv5kHNQ1r4UKT5pjPsGNV5ekU",
  "key34": "46HJsnrCrQRo97KgXcmHxmvyzJQRnvCyVxZwruEdTTHYCdS5idQHpmGWxxGdneZMpjvjpoxyiF3fB47S6dh2ZLAT",
  "key35": "4WNck97skHgra1vYbUj6pUbgVAfDLua54RrfXzJK4FeDC43gtYi4TpLjG6SdEPdv8bcgB1Spo8GGepbcwxnFSN83",
  "key36": "39EwitP9x6SbNamCJk4kfekjM42fmP6E9dMw6mQxmxxvRyH4p4AnvRfMkGyXBaAzDpU4apynacd45yVoH3iJmYVD",
  "key37": "DjLj2wKhoiWopAh3RZnVxFWdqEC8TUcceBvwbv2wgXZAa8indbUdYrr5KossMLkzjwMt5Ky8m2AtjV4QhhTfrUF",
  "key38": "e2r9f637h2SSPonz2uZEPLZvFzwirGoZcF7FB2eSfjQoA5UzmMM2GKgJoS6yHs5Uk7kMNp1FctyBXjT2tBoXWab",
  "key39": "hMUuBP7vHhJFj1TpVJY4RcXvjvB8VzihPYUyj1sNZoMaSrQTCUAxiSERBqLyf4wsCbUaV2U9pNkVN6EqecfUCym",
  "key40": "67QgAks7Lv19UXjySdx5yy2CojFng3vPe9C1moheUE2KYuQU1WvCUoeNuVVgCUaFAxXHh1tR9aqd9YBHzpteBeCi",
  "key41": "5E5uCnjBewB7cSUVM54ahJgaVnWRxVmV7pLvktZPNzFTXeFFpdtHReno61Bp9r34cNbR3JxizQS4WEQDZhDFZoiu"
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
