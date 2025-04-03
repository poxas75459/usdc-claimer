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
    "3db8YBBJf2DG5Uj62awYkGqr7Xp3ugKjA9SmgJ48HWLtWfm7XLtBvVXZaHK7aB8aWdrKdWjs4eCmwytB2iS72oEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJbgPSvu5jJgD9m9zBAgCDLySFsiLZtosDD4XMq2EhLVBk4RXXnjDpedaUezHAXcwD3BW87szhHCNtmF87EfDuv",
  "key1": "9Qj45sLFqf35n9M9f3ATgKCJDDZ7jdENiCLKejtjrPkBnAJm5EvbReuwxFWGn4cCN8jtoRb6ChuGhhuTMfA32yk",
  "key2": "5dUyF3sufVKboiYPFb4EfQCCY2cVoPivyLiMq6k3qgHUdakk8ECSpEWaN5sgrb7rH6zbTXFLEgcNuio73kgRPjzW",
  "key3": "65TJSqfW1RcVSSJZBUpEUJK3jeDQgYYgQgq1D2gxbgXfFcdfru1ThTe4vk8fxFWFQ5QExtX8g3pxuS4YtPuScnDn",
  "key4": "36zBkHvuE1GrEPdZ4DRawrk5x6gJVVbvsxFwUk6b91TZcXJaGGopWQ2uikTZWyLPV2yp2oJXzN4nzBqrBU6r3CXM",
  "key5": "4FnuBBJiabz8YkqQd3i4Mo4T6A2kfqWnFyXtZmWzvSodyfmr34wtMUJiZjxTNdmgCUhGAiA9i5BQfcvjJWbE527H",
  "key6": "2acprQzaaYwvu4mSdLCZ666qfStTe9qwuo7jnKdv6tDdnDcCbbjY2gMLrveRGS93JHVHLm14z1BJtSewhHtEHhjB",
  "key7": "7SmEnzVcjdgaNAoapZEDiAUzE5iauNiGjYHeuRBCFuZhbYq8VdqyBUWzCFhohofXm6KCZbLKwokjzXkRv2cWLtk",
  "key8": "iZghvLYE6A8bBX94THxZKrwz79Z5aZ9QMCsjBsd4C3QpyFYyPqmfWtZELFqVkQr53GxnbvufmnrazA4Q8TJWVe6",
  "key9": "5QLUG2a566uhY4RC9sMzKzu5KcT1sourRpXqd2jD11DN16RcKfwryTfqnGWtraDZPFxcA9WRX2y2PB977pqat1p9",
  "key10": "3tjY7wtYPZp5N1XJ6nJr8JPbrxnzrxG6ufzMfyKYmHkSDNd8xijfEySnYFSTGAa1PDWed5U1fWLaEZwEK6PpV78P",
  "key11": "5BaXz35kJVTMnLPhUAmUdAFvDAxRG5e3F49km1Hcbt3J1aXrsbDxcsCLajMArKQ33VbPyyxPZNktU17VYHRgNsBP",
  "key12": "2B2T1AyKWziLZuKxkCMhHjY1jGYBVqLnQKmwjSa1WsEhKxKFifne3f1F72EJi6w2KaL4jAnT4Nkr5RvC4tFqxvRX",
  "key13": "494gqS1WxYpC8LiS6RAvyJf39HvM3oXkEsNKHjhSfW2XnhZgnzHjU6p6DXcBUEBXU3mmxz1ZtVSRiAhmfmUfpCf6",
  "key14": "3hz5PDz9Yhrcta99bBt9bWbS1WkAFH1nmoR46kN1wEJUbmQF9De2tFkQzFhVyLrx4iaZVWrmQiSheq3vVq5fkvDF",
  "key15": "4eLh6PjEqE7JJcR4bvYCNvugNfwjiTo6kWPXw5WkztyvLwjqF4cMkW6A3vv9ZUhrnj1k84XeeGaPehQsB2SEacPB",
  "key16": "4X5TjWyCZfPm3ouQSPtk5Wfv42bQgQJehcFuViStxGJFfH5ufe7mUMz5E334hTYAp1h7b5ya6CagBVD63p1BnxMh",
  "key17": "5Px1JL9j5nCfcNgBPuv35XuFa6ZT5xqA2xF5ghSFBtrVRN7BvZLKwXBaEXmia6ZSpBLpvdKC3w2ELeKwzrLksM25",
  "key18": "2Q3Qfze51w8XvaDeYCLphsLSuikZAis4ZxNZ6QJNfkUBnZRofxKXq1bKXVumrY7Q1YJK3u8xFhVvdxazeJVgWG7e",
  "key19": "CqRkcYWXqSLA8VEmgtavDSCZkw5fJnuCUNSaMttTR58NHzei3hZy8oowXT8xfiEUxVskcz76hE8UrqFTHWLJLPi",
  "key20": "3EvoujmhoG1EtaZut5qQ5FQyEdWvALWVjsh1GHUpaN56brB2H6egjypKTV4u3x6LyWyq2TeAVYgV9L6GU2orENwV",
  "key21": "5ovBuCpFCaiiHxEUYrAX2ovZ2ErjVDFCS4tCbt3E4c14tZfBgZN2pNT661EqwPZnk76Lh2WEtXjzgmpz2giwyF27",
  "key22": "gciGgYSydWHsY1J3f3pT2zMQRT7F4GXpxTy6z8LUVsruEspzcuSyyKzNQrukqDgPwX85zwLZkbcWmXkfQ4KxtQW",
  "key23": "4EqcobayvMYcvw6Uaoa9uydqiYRdV4WwYJoTJsieNvNNj5wHAprJUyc85XJZRQBAYYzqwRNkiMGDGw1Lkyxy4hMG",
  "key24": "5uQ5qqCnJpVZ4ycxhBYAPZAJVFNmTg7dmWCoMwnJV2VfYoampHZ8L1kupy3w3ZLS4fcGwvkLcyK79cSXYqMPskBX",
  "key25": "43Lb9XTUDTo1D2QRX9ExrZr6DesBVKyKd3ChhSyu3M4Kfk1CKofMp4pfAa6fHiBgHpX5rQynCnstKRJZiLxnhMvb",
  "key26": "fcNYeXhy6PbLAWA3mWnrunzMC2tGP9ux9HP3d7rVW7HXdR8D9SKRB8aqVTE5YWcadWLADur8cDd15NMrwzko7Ez",
  "key27": "4X8VBT3Chk2bvwvYvRPEDcLHMTJ14Dq1kqjtbtufoUE9qHeJyugo7wRfYeiNUdEArUfRTbMhArVDNK72zwofcfU7",
  "key28": "2QJRXMpzq9edxAr3m8tH4PqLqbMis9T78pWXvpcs2K5K5dhVUwT3HUVBQzbZJYnq9HF5UyomETTSCdjtYvE6GyAx"
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
