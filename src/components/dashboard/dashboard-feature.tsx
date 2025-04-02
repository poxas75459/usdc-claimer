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
    "3RdcHZTtwLDqx6K1KAjsrB6aSRP2XgxSNArCnZRrnEHcGNTxtTKcUbjUk8pfbU92z3LdZu8az3DBouhzvMzgNKwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CPb8KwM1gB2vZFrASLggR6SpAa15t9nYGo1BTG9awcMVN3XzEAvtYWXzv1ZEHNe1XQLfyU21ypPstvfmvtKoVjH",
  "key1": "3PoFM7UxEoDN9Qzp1C1VLh9pyz42n6JsmwK3nbncJBw7ucDTn8CbuMnzJP3jtWQQi8k2wiVpvtj48TA9S6snCT1T",
  "key2": "39STuxFYpDMjw2qegq3RD1TfaSSjDsHohCgMeMfrbi947FZyLYfB8AbhMDewAig1ibCQK7SfiqnkbpYJxWhtgrHw",
  "key3": "5hwQsKpvCT75SMWFmK1nKpNrKpckEwux7VwjyPt68jQTuhWHb4i4BKUcv7yA7zKR36svKT98tMwkyjHKaJkUBooY",
  "key4": "acqy99VtLwkvhRbqx6WHuj5Ucp3sbBqvv1woZ2Cj1ZSTcXWQTWeLHKgpjAwiQ2U2ydKsx8QxXHaivh5zJs5uw5J",
  "key5": "3SwwGDFHMbQRUKZsPfrhvVWyQgSo5U7AxxFr7pt13vZr6KnRyKXEJaQk3yiU5X72ReZDrBvGv4Ck41vrgPE14Zc6",
  "key6": "2mrfq6jecfMho9tUmerAt9CrQRHPRqJfEZDeVBcpP7DnDsLDwGWXJARx1VF7P2qMKax5QXT948WWPCu8keQbLx8H",
  "key7": "4LQhzcKLJ2vvsmeuQWprV2vK2aMQ8deGXB3uN8NWb9iBrr7FAEBuKUpQyzonNcZw2FHgpKugztQjyA6kHap1gpQV",
  "key8": "GQjsjbmoBmXG87TGQEkksLXo8NQxyj86yXERz6XCD7NC2ReK3PTAVGgSjhzKvzAejzpjY1K9fZEAymWN9WmN9ZY",
  "key9": "4suHtT1tCNnPy7zKGpx41bwrW3dHJCPkpUvP8aknJe3GDKar8cUDYxrhjqxXdhqc4AiHE5n5Semqr7FQ5zptAPoH",
  "key10": "66UfSUKRRp7BpHfxdwZ1jMVpdDr1RbzEgeD5pTqjfbCHtxNsFhPm7Ne5exLaR9ZohCwoLGnTjLFfiJbuCWe6h3Wo",
  "key11": "5kxumw6UpKe2csqpX3sTLK9yovdVVZ1WQTGaiYzGTJTgku3yVJBoAJt1BGgo4Yq6qGX8YywJvzx8GMxueM4hfQhY",
  "key12": "55M3eb78ggbEzFwcR6RtGShSChKeumoBLYfkP7aiUYZfn7bAeZ3AksdUfXWrRCjqY9zhCjNP4JGk7wjfUy3vt7FA",
  "key13": "2CRKDukGc4MWrtFFUkwrSMsYkrGFpJtZU5i5ENjv2EVboyY7a9Qh3pGZc64uxF3sZou3DRu2njvcXoU5Mrk7v77b",
  "key14": "2JT651BLftWyK8psSBzBNUPbURCE2a3NK6N7WtUuCJZ5fz71L6iyJJEaCMS5EVa56QSqQAQjckSST69QT5mNF2Tv",
  "key15": "3ut9sdc1tGsy3zu1jymYQTgzcTsmDCdhZo7tX3Ys2wtt5x268QHiQRkwAGM2Zhf5B5KUKCdPEccY8s4gKJTTJiBA",
  "key16": "57zCvvUaHzZxByx9rb9i9psXuHuSq9yUR5C7yWuSQfGWfxvJX6VQJ5Yvody5j5v1Xjo4ww1MeUvBQt6jBbp3zDTR",
  "key17": "2zzFZwqiQstm3cEQAnpn8d8ZbeKWnsznrVPwGsaHtK3nDRcwrj3R4CHcbfQtFhwToUABgmD7QNPJdsP4im2zbBLM",
  "key18": "5M3LZn6Y2y2jk9fyX2PcuqizGmj88PoF5rXfBeDCCB43BiF1pwqsnGk8kUCvnU53Los3CBH4TF6MBsSsGWwj8aNd",
  "key19": "4YUTELW6nLnCVrrruQojKJ3Q1rn9RZrrTBuTkMzHwNHaQoatkgUoFqhS7EcTGstpyNvdACeF7cikKqeYQHhcC8QE",
  "key20": "QGwAAwRHNFobZ14gfTZAKB9tDXjazs7i1fZtdccjj9QGPzvMT5X6Uo44LtkLJnWyw3wyBPJRxFqAugGLymqym4Q",
  "key21": "21D85qdzj74VisPK2TkDQLZEAAStnEtAeCKPFcnv2B77Nd5EmY7XSkimynSQvTA1ZwQH3hmzzEz7G4HeYJDKCemn",
  "key22": "4rmkWHLwPsV2cHnzDjD3voGcHwrpqLAjFS5MMQTvN1M8NSVs9LH15Qh7gWmYpxuLurKbWk3mUFU6iZgZcfN2uEvU",
  "key23": "49MazVDAdA45aFwtSn71zEHmMMMWJ8vuggKZxE6GEVLecNbNXK83wDh5ruUhjRr1uzAVCtnMaT2JUTBJzshMZp9L",
  "key24": "3D62dGFKDEnxQj44qCtHB4JG9pH8FUbWDydaePVsy15pZGi7yQNuxpNjTa3XhJDqc4WBLuPFL29kKhUtfBbM32if",
  "key25": "2eZZbRiW8AU576nszvZKFWTF4nN9e5J4V8SiGDwoaDJZmLzgppFbvSKrviNDqwZs4P2BJuRYMjMwyDA2oygQDEYj",
  "key26": "5QoosKHcxizG2j1xHPeX6RALA5n3s2oYtCVRihkAegxHDQo9RxgRbnmR6rgeqEEcUvcpRJ8LLUHchvjZWiVwHPnR",
  "key27": "41g8pTUm7wPGnPV6F5sdHp5tcHLzgUvhgFPt6arnrYdC8DrBYWWFFQWDizqxUH1kyzBJm8qWjHf9cvmTCHKrw7cA",
  "key28": "28qdfMBzKfXVgu2d7ScWHNr7brzJkoBwqiDvWHBDXEfbJmX8eWsmxSEGvq7JbGioPoSYSygagdBVC2kGyPJvzWBo",
  "key29": "3LJXwwueFDX1Zv1Br6EhvafuXoSo84g486At6mQdU1P8iRDUbFz3n2RBvCLpEKv9Wvpzm2eEk5Q21yg3RBRy8TH8",
  "key30": "TScsHit2ckhy5sQGd2JzytWHrPsxHE4SBzvqXZJutp2tHEAGyx9YFsGqbwraCbHtCWXCRWSjnSeq7tMwSFqcGYM",
  "key31": "3gH5dFDHqiUw1FxShGz2EWq9hSoQMTW6taBqWb9h1j83m8U6ybP8WMUiPqo3ydkT1YZ9EqjmRdCcwpQSbiGi2YZZ",
  "key32": "5X2HtwHNgJ77M61YZFzdPZEe6BpwPuaGJvoSTiLHWCJfGELqwD29fNrU6BxV3QNab4tc6Gn1jFu8QSv3MRn5PDe6",
  "key33": "3qTddWRbHHq4ZjM1r4rkYARvS44uxTagxru98BeuXnWspHjWBHdAF6KMQWX5EtwZEUhSeC2V7eKepAJmxsMPrftK",
  "key34": "2KEcKcV731C5FDQXEje7NkPvo41Xj2Q9L3E5fH9AEAfstjEp43yHdwbspz8SrR9veSi5LoHtgCYTF7k3EQVxwTXP",
  "key35": "2Db2gPFkB7hYi97Qts5RRzRQCWRxGnEMLoCM2j7bScjTBSuBaeAPXW4oHBXe2ERkAEEd3XmQZDP5QrVYx5FUFJFr",
  "key36": "5ZGkDuqKbyxWihZ7PDxtin3jrgYwQpXMeJ1rervmVrzezCa1sYCcupT3e2uxHnFZV9BcAmyw2ogMQ9RvYjYVYbv3",
  "key37": "4ygPzWtLwCnYGJ7KKKQp1iLWZw3e5tY4AXSro8rM8Fi3wtS3y9QZFGwPt2cEKoDnQ3DpvGnadKuDkouJM8MfBUiv",
  "key38": "2jeDNNDZ9b7647VM2mwBtTVy4LW4PYcbjPjWRtWKH4ssYwdSNs3MYP5kWvZK7xpPLt595aSF6yggetsRT1sqzuLi",
  "key39": "3s8E7UDUep7knFNtXCcE2B8jVWiwfevB7E9SG9YM3aQWZs9M16bKodD5y5Z2jHjvxKtPFxK7ZzUdcj4Ddog85CAE",
  "key40": "4EnXcx4zoEhrXBm51FYLfgffyoVSxufY85igyJbLEwWiE3JV4bcKquw5YcnPdW2h5RhDYWnpCwfzzMQPncdovEyL",
  "key41": "mTBr7uyHDZ6i8tRWJL21WPezrimSMjE2sd56MPKvjTW3W2iiPhJgHsZj8WdGNRn1vFLopmooysarPrDNMXQWaoE",
  "key42": "2hKRes87NFDd7feR2KJ4qZvHDcZLJoVeGNNrhptWccGAjSdJ4qkjPKcJKmZ9vtHN125wY8tMgLrYgmkx6AqTUvyi",
  "key43": "3pUx4QChbioU837MhV9sHAMSEudEPyXSrrVYMxTQwsK6v4SxAA4qgqARB1YxUNNqT8sfSHxyWGgsxCt1AV1eYRUr",
  "key44": "W6YkAPP1a8xoErDF2RbkdGbzi1A7xLJSEXJofbjHvJXCjUBJA3AhsMvcML4ksK8hWZfPgKqVSvs62JM5EmRGn3u",
  "key45": "3DArBcacVZdmMjwMUKby5y8Ay9d8yJJajf6Wmd9hnEMxFg34ZQoLmeJ1aets9HLHvmD1A2VLSZ5heeYhrQVhTPrs",
  "key46": "2pjTJrFBGPmo777EAjAxkUtxLU2yk8AhGYZVuUoxC8SgeDLSZufyL9xi4EbVzVFuScHfy5mfdn6eSmrE6cHrifsp",
  "key47": "3Tv8Sgy7f7wHf1qLArwnHYmVnhGnhkT6ehVGFCu5a7RCZLPX1kLHCt738zRk9Rn3vv1z6tW1AzuvGD83vSi4hFw4",
  "key48": "4zpqEmFcJfGLo1FgV3cDcS1Bq4XFk5aNCbzR6YmbgA2xVavjdWUkbg5pVBT8A1cbGVzbmqnxGvitRQ4N39eiE4rX"
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
