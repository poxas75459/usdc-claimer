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
    "4r5CZnozfNot4YxrbfVixxdz8ZvBCjSvuh8MTmtGNk4CWyqZ3NcP9UAY3naiG7r1iYJLuqWGq1yezVnPBJ2Ek2gn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HBHTv44yCDmRP2bxuPeNyqdGMwFNHCyALqn3bAy9PJk15TH5mRMbnfH5W1PybqoDeMwUZveL35gbttVDzDXU6Ea",
  "key1": "2JapN5NEdiABqS6UKfMCDD3mquVCFbDAR68SqeQLEzGo8jycVRUbpPN4So6E1ixjpc3F9yaf811H7ovKWUEwAe6C",
  "key2": "3A6LDpJCS4wfc5qLYkzX8z4AbRQqJLm2jEHmiecYFLfCAdxsCDyP291Y8S1EkNRXA9XK2VrSGzKn2ducQcHYd5hL",
  "key3": "3FzrqrsyLWSoH35TRc8VP2mvCpoovJeG51ZFB58EwxmfLqHywWBNxZAponSrzZUTyHoH46aPF8CWuMoJuLGX7T8v",
  "key4": "313h6NVHThtkfupXL8pwmRTe8BYo4SHe1tVQ9rU7AXJYa8sF61yKAHY6rPUSt4DfkiZmCsW49rHQ7TPje5dcLxqH",
  "key5": "4Agdzqs2DVQKxCPJCn1MBt8P3d2pynkDDwXpooTFyAvYLkNUjVmVDVuAEApg1pGRc8Xfm1jwaX8uDxcctYeAhmcv",
  "key6": "41aSgvu79eU834L3yAXkThp53qBQLuVfP61vPnHZ3JyDfdh26eXMEWEsRiAMaGxNrQti7PPGZMb9WvwUQEWQytGB",
  "key7": "59fvJr8tZtudBEHjmqLjDetu4GrUxrXw4fufHyCARiadrjZFzFzpdZqbpp4U74r7gW2YiH4juCcCon9L228PAFkp",
  "key8": "5d82Kg55bj78hRhUAFhCgFYiY52FyZJtPCzvT2VSaqq5iXM4kW2sxoDCvYdxAx3qYkuBL1JHwWREbhQSjMmcxqrT",
  "key9": "5MsJeYZKVvLZkDpeV5nGGrs45XkPtoGQ3N89Z5Etaou55R5EaEHnUn1rtnN8ecFPSZgSSj8PFVr7XMbdT7VEioru",
  "key10": "3BbS1MRxjRTRsYKoLW9zusHw9oXsRLJhqzFuyuh9ZWNfeU2r9MffQK3NhUnM18xPDVT5sFXRx8qkVFT4oPjpjaU1",
  "key11": "2YGrES9XPxtK1gvYmp4XFkiLYykaXkWwd6nynWa4cX9RLfBAEjCMgCo8cAsUCUe8MDDDxz2zTLgCXJskxGiNFEi1",
  "key12": "zK55LtLWgTqyKcjbMU1ZwoYHoiSbJZD9Fep2harhTz1nPkPNmEDF4WNec2aupxhC7FkdoTdkydtD7V7hVnALyMU",
  "key13": "3P551vk5vqPD1x98o5c97xStLhSXuS7mvFTpcsSkR7oEE12RczwMFoqy6aJRmqtREXduunLRbLLBwwfRVT84ACMu",
  "key14": "4gUaVxxEdK9efMQodbjbseQJGyECDaPvYa1Rc4spg9CSsPJZpvKzR8Qek2F3ju9pJVwx4Ax1qcJfX88C2Bhd3zVS",
  "key15": "2gntqzNpAm3GNBcM2Jrg32JCfZQyUJhC2oRMZ3okx7VkaWkoN9hFPE8GzqyKgQ3XJ6J7g6gfMpN7KrwJ1nkBkA6b",
  "key16": "3PQjjDd61T3VrHKSmKcNHS9efYjUFPQFgrioi4aBcHqgyNRyLRTPCfM2HfuDyqq7LGZgbw4fgvg5FbzehBhUwZAv",
  "key17": "4BKGaxxVMDxsAZndqV5M3xwWLFM4v36ek3L1Lh3gqtqBvBnfspGhv6DS8RDw8aybzFCbBfrxFVxcNPhPnDikPro",
  "key18": "5gPmub5g5UU5wBZADag6habdg1TfiAJnaiSbnVkLMtjCYN3MWgTfPWS7aqmZfo9BgkXpjyNLJoFCrNRWgUvabkj4",
  "key19": "2AoYh2DU9AWRrCikzujcwRcnFbonFivtzVq3g1LMFokDn1Dn8vCnxYj4KQCNr2WKuk31s9FsfkkUr1PwDypCjngr",
  "key20": "2ChBRkCmkCwk8arBysfuggHbPUtE9xEinT1tqqtxid83VTzgemjkT9CtDaJ6TXzJur3v4zgRuL8eHq7BiKvRsrAM",
  "key21": "4qbBLatEimb8HASmoQhcBdcnMWUcgUws9cgMz5Ua1J9fqqvVkegaufjMnu7HxHHdLjUhvCDP82cxGv3iXWyCrsLi",
  "key22": "2Yn4cHFQnStavbnWY5LqDycToqMgGtnEpVSS23dH7iozSGnEeNbffLJCo62F6UmGKjCTnS8DkYAxHUDjUgZ1hcVZ",
  "key23": "4A2td7wmEhcmwhrR8wTFTfmYq1sbUS6i2fgEjzTTNvgYr12iNo5ygRcnxCmazQX5vdvtP25cWAAoq5d9WWcnorak",
  "key24": "3tGLigL6xqa8sCYawmCmwfv9MPnWYGbCbCVBXt6RwgrGGd57nKZC8ar4AFvkm7isrf8j4MkJwWQ2EhRMi9KZc6ep",
  "key25": "3zVZAW62Yheb946sqpwSJy9vNxXRfiqd2rdfqC5Dn1Qu4fjhrotFPBquuhhJnSUwxcg4KUbmzms4ATFR7FfWKZQw",
  "key26": "2zKbNJX61kssQVcRFb7x6fNjVm2fHENU5tTsksNJvg5yL6oYafHkRc8MbqCdA6KKWvdAqX6AG2zS8kaxWpNk7HGP",
  "key27": "5yhvephHUM9nd31KkJhLgfvcF9GbqM4duNRiP626BvFSQNLMVvsxJ6yL3SxKTtJ6uC18ht9wEKAVkyrCGATFTprF",
  "key28": "36mM3WhNGrCd6DYthXL6WYyqi7feCbr3pwPLCvnC4Uy53rEMq2PR5gWeG1bZWa3GWuZFX9hh9br6HuovoYjHpVuP",
  "key29": "zeRizwRWDmpADFZd2spk6WxAejifTUDkkFLRqwrstZcygonP96dWY3C5tYw7SBC7Jvo2zswsZ6xcG6R6tkdmfJk",
  "key30": "5ZrR4XzLFSqBELnPbBwrQ2FHqoA7WFaRnQVh3KaFJWkTpW2LrQAuC6WesYTy1uA9y8KPQCr25EX8wbPKeoYncPYx",
  "key31": "xU1m883e3eWchL5xJbrKrdCmx62XkFARVkoYy7Xa59So6dkdpPKjaX6XVMxq9ayFiYT3jC8osmXMXr68BxGsFAJ",
  "key32": "5KZv8UgPLQPjeyxNyUyk7929kqYNPpMaqFhXZ8CpoqhDRTKZLfkxeEzL3Es5kNcWH6NyQ89X7XE76BBdMmrjMejs",
  "key33": "V3muSwLzwgxPyoMsozG4T7Vgf5bNK5dFnrSgWZuC8cAMmQAWmgjV1X3aeQFBaQEcmuXUYVnKp29cPxtxH5C4Si1",
  "key34": "39A6FWtqfGktFM4bNZQ3jqEvGowxXEutCRbj7ZDZXyAQmxRh1c7xwbHt7Mg2d2dWJaTByb1RrNhmZgJjkuJZTVeR",
  "key35": "2Mjv1SqXwx6Sg6FVMFfn2AnwAZs7btpF5eM88f21h7KPrrrd19KVjHzS5Bh6yLtjy3ngDLfrm2iu8cgqd3eA1b2v",
  "key36": "48BZE5TC8GdKi4bKz6Ds3uL9QnLLtkvEJrg7x8tDDqoPRyitn4QSQVW83R9r1cJz4UgB1QYX2HnFPTgfbcU9MBfc",
  "key37": "4hxkaqvUvdXL8DGyWpMJSrwRkYN4sGuB2oGe6poCkP7J4dNoihvczbz6HpYFM3ZMEky5vZeqA66wLhdQsQFaa5bx",
  "key38": "2vrezLebmaXnb9woAbX3PY1M5udzMP15vyvbsfeNLMKRBogDM9VGxVEQFyDVXKKB7VAeevB1fwyRea2h7fN7GsoZ",
  "key39": "3W9bpb13PCp6zwdiAsQdZVPwJgyDtA4usWMS7eq3gGUpEBuqYBkRYvpCEhgRdUqqFpeRmANuNW89A3Tgm6YExzug",
  "key40": "5NZiXMCj98GE5M7URFvND3XSByainDUoGuyuZdiU16XHhVmENAefxYCZP1gQtBtRjQGrYn5zGkPwC5GHh5UA3LWL",
  "key41": "2gPkcDi3rShMqfxc4s8q8p3QJtCBAb9iGjTwnvbZeiCDX6ZfAMCPBRrEr2kj6UFPrX8P2LpNoYZNCnF2hfCAD35s",
  "key42": "5LjBhHJssxqVMF8SwRFSDJdTkov7HFzzCZY43952hkTWLsniDBHw9YP3oZyhrefkgAwRQxQ3Yb8sLipT5PjHrAsN",
  "key43": "3yKfdS69GxR5mAyo25qeAMCLh6JTwNuvVtPR1iFGbpNNLXVvNaBZj4Db1kHUZZB1pSzPquu319FB3exYRuF5Wyxs",
  "key44": "3kaBo1LUfysDtECECTxPzZaKMdofV9EXjqXmxXBYpTFs9Mqz4P3TfRwckpQ1uYECHzqs9K6syPKp6afGskbnJCa2",
  "key45": "5Ka8CP1kJKMQbvmhuK2pDkPRiNnTxcym5GDmTzjzVQAoJYsRuRBYkARjMvdxyXRV5WmgpvPNqM5NbmQPwpbRYAGC",
  "key46": "5MbbQMetYp3bfp27sUcrtKtESjw9sS2x6xZfd1sQTs47YExuCuWxaaZXBiij5mAjJRfW5gZ9CdhdTzDktiHAYXUL"
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
