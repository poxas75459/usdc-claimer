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
    "2sav9NAiYz3btYYQLYdr3jzJdEko1ZdXZoiAQNB5vRVmr6FvEjpk2fwhEmx6bSgyqBGHCZjdfYL3qBBhLWh5p6mg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TXnbXttsss7o8bDnTfsErXjqrzP49CEZKSQVEkKoWHq71hmMmnmCz6C3tTaD9m9CQ6cBWRYvb2wXHqgQantoxae",
  "key1": "3NqERWqU2dXybteHFDH5eUvwbN3JBsBgy9gH7YQ1wRf7tMBLzHeL5Y3EZozEnVDPQ6Gec8ve3JSPvzLXm8rQ3kB1",
  "key2": "3iKBSBCQjLwMN9Kqaq9xWb5csN3c8uPGj8keFHmfcbjX5m5hULe5TQeBHVhHieWvPqrfb4tEk9nvPhqLTejW2cjE",
  "key3": "TnjpyuczyQsvXKV4wZ31KsPg46apom1vTcNtkhczgihEfjQTFMFiqgCL1FC6VbN8fnAE6XPmQMnVDdaJ7Kn5o7s",
  "key4": "5ZaE3RWqPhiAdmLLSewET6f6p2qGp6PPzkyWeJj2es9QXAZvdi6zttc59jGccmQiN2nPSuBMUuSiJ2XYxeRYSgCr",
  "key5": "2TWqmWfrtKG9xjRh4YbxweFRS7GpXKLBxE8MFjsNeJZeE42su3JMFtSsCK2d6PNYp3wxR43tnRRxEcVSThWN22GV",
  "key6": "CuwwuyYJmBhwzZ8xG8iRw3FuVsHh6dKqdj4irxQ4q8E7QAsB18K6dTPXXNT33G1taXMymyaz87Tetkn3DR7TLo3",
  "key7": "4cwjGn3M3Y3tyeYuH75kCyXmSS9M7qhHxC9s1UzudNQrBnL2pcocmcSt3WXimB5SmeZ2XQF2b1AzobvoB2XMSYdh",
  "key8": "4TYkuNnwNZPbG6KcNJARzaQWkfnpiNvEDrMJX4WBm1ewbFjjQcXb6iboasUawwzQaqhmwxE4LEndX5DNun2JNDqc",
  "key9": "ALQPtzqRUtsAS3VnzycLPZiA4Gv5bsTSYipBdvWELERx9pEuMVgsUfvxDwZe7uc7LK2BsqGTasYvXZivSm62qbt",
  "key10": "3WnppmmstmW6CFEL87Qbo7BjTpcdfAPkgXMsMQqrGNeZ5S4ajkpHAsJkZiC3ZNeos9qTBKxZSCoyb3ptnS76Kgfk",
  "key11": "4XnDquz3M2ioYPtoryb7PEZeDRXL3xWNmXc6VBa2zmwecDNpiwrsvK8wJxe4wEej3HHebaTfj2Q9aK6yNUVX2gN9",
  "key12": "5dazq3m4ptPq8ATo2GFQ8SxLjp9eP6zARBLwqzo1FPyrRwogokM7vPBPzYfmLpNtNUtfA9k75U1CVizJUfNzDc6h",
  "key13": "2CqFBZHuyf1otah3JZdm8i9GFL46mPAKfiGdvNDEhS87Nuq1R3sv5uLwhupBRX4Ub4KxtNVcPAje59h4BMoJ1oKv",
  "key14": "2fi3rwkbVaSo82SgHouCV9rSdrn4BjZ4QsnKqsWC2TASzj27yL8PdHEEoB1ESVSf5sw1SgvfK8RR6yVnzQ9cgY4w",
  "key15": "2Jem5aW2j5KKLRzqSyeHycpxhY6agx7L7j1mSrRvCMoSiGJ5watyQDB1X6VUuM199u75GTohg4Ppk9MjjtnJcF8y",
  "key16": "9vHN2BojiD6zqQA6o94QWXoG9EKC3RSZwG9rqVgGj7nWHJnfTXp42jsfxQjoNMToqH1jka4hmJCJERehnW8ttxB",
  "key17": "4buP8CL9nNKt1r2MGtndQD7dWctDRkdv2nB7j3KmVBWK4NsrLa6qPMj9xULa7t8NvBZqbaG69HRqtrqkxx1PT8cv",
  "key18": "5NEwssM8rV8QA3eWaqcK4vgTvBmUdYkvdYHfth3bRruKvEvHVVyr5rzHJGEMGbocXL55TXWpdt6qTjqCPAenLrz5",
  "key19": "vHHZxK5ZNvzTzG9z7aRZLUchwjKpQjPj32LaVq7GvT5XPXsJSpkHTzVssemNALuXwsp1PxP1aYnoUR2QvoaL6Jb",
  "key20": "aufRafQCo9rGD6qYvj6Qi5QGZ4mxqysXYAFR33VfrjF2DXhDFxNZ4TnadZEMkGrKab49t3r5N5pJXesx3nkrx6p",
  "key21": "3adqV88K5gdj7gGVbVY1tGPj9cF8UmeqthDMV3jKBEUFW5zL6YKE1gnoArnoRTpJdhHFgVrPWsDupKWGHEiyDFJi",
  "key22": "3HAFt79U1KbooLwBR1GhKiJWdprBpidb8qaqhBXVF8cgtcbUTbBibvmQv5rRjPYqALadL9X1HDJbB8QRzo8Ti42o",
  "key23": "2TbqGK7BpZv8L7fW765jk4UcRdvSDSn1R7qBbt3JPMPWLrBwNX11sHbhbnXKE43hkRWoRRtv6fLX1LnG5m4dvS3Y",
  "key24": "5bEkr37aGgbJ8iQkeYymSuNsAwpR3Tuf9qkYwWbex9Z5zbG99JPzwCspBhFoThhCPmz6wLiCyxD7VC1YyvTUguKA",
  "key25": "3om9fWojvHfwLmn2waLfcpKLgWkg9Z13jLMY4oRRkcHE4AietXFrmYEYgjAuG7eakPQUMbyGLb2sVT9bUAN5XitQ",
  "key26": "2sfJPfedRGT3XzPPwfxzbRxiL1iESCiVn1UA1JDFfPzkkaYqwCPjwVw92T5rAQSAx2mqmQZaB4WH4s4qaNfzdxfD",
  "key27": "4u3gSikmXuKEJDJE7Fp8GKvci3vdN63aN7qSeZTtnEQSNErJjTEDDXpEz2h78vk76iyE9fBf6Qh9pHoc9o4Aazkf",
  "key28": "39vg2aHRPKu414PttQqGZdDtYAxWHeyJL71udG8rssfKc7Qkt6fhfzYzVTSZHzSSXyjmySrqQ7iExn8uebka3dYm",
  "key29": "3ooyGtpoprRJnPFGTC4L3v7uZ1qaQWngPm6D8Y5gXcEeVgGMq8wT4DE5W93ZCA9yLwqnvLbwxgDdAKMzSVJXPLvJ",
  "key30": "4cfcuAptEBgRcdo4WLHjUm4T2rT9rZE7axLwi2MxifPRNCGmc58AYSSjY2zy8UriPxkXjkWCafVmbERnB2ipzxsV"
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
