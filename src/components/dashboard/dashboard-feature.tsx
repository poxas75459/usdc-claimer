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
    "K9Ae2EpVXN2bvJvfYfX4JGLw1s3sdHKEY2rUabZ5ytkcU7pRLcgL8GbVuqz1HRmyEzPDxKjHDQXs5iVzrPMH7jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DSDiTrZuKwwtjpAmV8CqLL9Axk1i4HzAAvxgDsr33Nn8NjAJ5JfBBFpBN9GqSxpDrQbDcPiRVggKgaRq3HnggBb",
  "key1": "667fFnZEupXi2TgnycQhQ6WEzBP3zqfp86TkT1P223FQwbdLzNeGcRivwfMdtPVDWxNRJJwCBV6Dg1SecmmNzTC5",
  "key2": "NFsuAjEvUnL7cySrJy5pXqNGfZBL6XHBUJSY1Evo2jacyWiJiiwStMbJy8AfdDcZ6SiuDWby7Hj1awbADexRPgC",
  "key3": "2GRWNNrAQEWqZmF1jgW1VeaghNofTjhbBYqRu5pEo248hPCFwmRos8BXniv8qyhKDErDZbPQcZc5Ezvvcyw8DpFB",
  "key4": "4u67p2fcDm8zcSekEMPwypf49xuiJKpuz94fc1MYqPW3JsLCHpgCWiXuTgaENDX8bEL8rR8VZDXSJrn6WSCFRqXD",
  "key5": "3viyUAZMc41dP24kSNfPLYeEq6HrPYTJSbtoCVt5h6NCmGvqNoaZaibBA7dnYVmvC8UPunwn5SLgxcc6fsHX3zvc",
  "key6": "BuY3wzsP4UWBhyFB21vMSYmskdMzuYivPBuRHDdfURd1VyYjmqPuenXkgx3qyLNt7xgoQbrX5tE4rN69qWvCqqm",
  "key7": "2eHYe4U7fpvUK98VtPHmUHokHK5BPYEgsXVcMwwjNbUHSLCWKvEFb84x51K7VFGuhCinLKpWe4NyA3yWA6RooHaF",
  "key8": "3HfgXLWFFKDn2DJUHoDEi8pvqkEMkvfi6XW9sxUPiaqpg1r9LMAAYXYL7X7K7dWiDr6hyvP9emYodhkacGMYTQ5X",
  "key9": "pYkVmsshM1mHxnmN2D8qfW4m15PNSoDL2ZiQNVhBtfe7Zj68KMswmaHZvhnS2i3uYJ6VHxgQeUXxw5mpjgmceXC",
  "key10": "gv6tvbyCtMkVJ5MBiDdJxvPaVanJR3eYakhDcqdsbcbsNpCDWuDUK3T2KKXXeX9B9S6TsSZfS6nQNZnfHAQcknS",
  "key11": "zW1aF2ikZcZvTjUc6x872s31HKDwADXnvhE5NnZDwEPuJZHKGkjUSYGvn5Crt8vn35CUhsit6G6CWyzd289o7dR",
  "key12": "5kEj79VZRZ8p3LhcMfT4ydWfNL2KiLKEnNKvCJko4tnr6MSRwJyBJca9F6kFPh7Wny7sSgGaEK9VSqFnU3xLFgK",
  "key13": "5hgvRXDGMGftDMY6mmfPBKTG911vVfZXu5P8N8cZ6rFpeXoguEzDTBB4wVHDWzA5Ryj72zV1KEvfcp8BQTW7C85X",
  "key14": "em1Zi1AE5Kn4D4pHsioAgQFokwUcr8pad4qoUNJZrFjY7vvVXu3QpXjhrMdQ8mkuYpGHwi7aoVohdB2dZaPuCZo",
  "key15": "4n6S5SQWBsFLRjsZLCEaySihDP7XX7HL3PmexkofsbXXarcueT3rEVarmSZjHaH8abfN6jbx2e7HaqvzSTahGDNU",
  "key16": "5rDZY1ao94jfnFXcqc5MMipSTW5nbDfkpMpiKoPxB1N8RccTYvApkMZ8LhdiP4MpJWhEqJiy3HHDqjJEJTALZQ5P",
  "key17": "5HD4SU9n6NtNMFxSXZq7qdk7oiiij5CPoAQo5XW7BQgqVDYC98oqwHPNJ3L4qi993Z4sQXipKAoi8Ark2cxCU51q",
  "key18": "4pGzFsjJ8yaXfK8LhfoeYfoo4D2hfcPeeGCBAEgU8aCiKhVS9Gk2uSruU93pqzNuwZueqAjmkwVrHdofpP8x8Xuy",
  "key19": "5FQQCafsMHBVHMQSK1QhUz26iiCmGdd6kPgC6LSebVQ6Dku1Y4UJkVpeQpqnsWqFQ89ovUxTpfN2xnZcBBjnchD7",
  "key20": "521dZjXFVQnoxCvFtJcUGoP5oLYrngWHVWkVV2XYytheAk39boDnTBuyPrdgTsprHodQ5Y5EXKUWRZQjb98ZpVKW",
  "key21": "FSPcqBnBkKnhVVLX2ZMgH4FgHgbT8Jn9Ho9JquYny4nwveCdyGUKZH2AT2todsN2WNwfiQLMAsH7C5A2rt73Hcg",
  "key22": "983gMTTaFtzESpxjkMEoAvLHxhn47tSkXaRJBjtEi28UL3MA7rgFS4sqxtq1XvuS89BPbpcc5AvEnAcu9JTetcJ",
  "key23": "2cchDGKp8pV37nBZJ3ib21b4bSEZqSd8w8AT6vF51eeN4ekqNYFMwkPYKY9n4QqRBebdpJRLKnd1qEA8PPfyw7Xk",
  "key24": "3Em1cRv5eYqaV8HVXvuQBaNNtQ1p73jsi1w7t7RViAtzjqhvsKG9noCV3cPAyNZsmvoy6YgwbzrTMp44eiUji2vz",
  "key25": "2u5F7YgXtJGCkdwYojuZ3CgMkfxnpxiRqdB9kmztaBMvJpWJ4KiJEwvMAYzHa49kKvFsdGCr9jThDcWgzW9835J2",
  "key26": "PyYoj86fm19iRrpiJZFe6smmAfqmQmRh92EQC3DUiwULvWrVXh9fr76naB8CuxCadVeqDvmpnbxuwCYzHhcJL1t",
  "key27": "4fuDwmwQNfYqRtcw56sbiGYx3ZffvhNAXC2Cn2Y8MYvjJUZfs418q2QJMQzwwJ9fRBpnf4SptG5SGLfrdjofe2Sm",
  "key28": "2WSbLGzjarnSTYsa8fokfvLJEHpSzH9tZ8fxTSdktzpKwhyCPQbjQZFG7Qj18bnYzHoaAa8rzNzUwG5iKRf41BqN",
  "key29": "5jipt22cx96o5TjvLGEfsGVgCUwnh7e8VeLi1U5DDfKWkNeC2Yw6aQmvb89Usk6cwe9Pjnm9TjJ6GqU51paHGfrA",
  "key30": "SeYzGdKG3QzA8GDe25EwgCwEGWMWEeGodJerBoRifMoYJV4r3XuLyEfYAUJpAjHm25PAQZYXCru5CqVHmSGSHe2",
  "key31": "bfYE2xFqDqR7JZSTtK22zLoMMQCiWD43P1zypMHYPPMLbWPvQcgegYXxykGpvArifhD7twfneYZ6DTn1pSiDr7N",
  "key32": "3MNmuVmc6kKHLcMyw9CSq5NnW7gLqs7U2gurheJjA99ndZ87tu2owMmpUisUHvJZvQWLsy9tBaoPrb9QgFfTDQYj",
  "key33": "9HCK7SHFquywGTcAxGsRMTZswkRo6r58fdiNMqJzriNbXNk6jmx3iAMADN2UYv3Fm6yj5nEzuHdZSwSZeLkRfMN",
  "key34": "3xvoxaFnZzXowRR61mfgaGzKCDow3dAQ5Hjc5SmW9jaTgr8vxfyGVGH98jCgjY9h3hKnFHiZ3LRwdc5sp2zLjHa9",
  "key35": "3gUUiN3muvQ5SoZJuMj7dK4cEpKsReTHKqA4ZPFYTfXFv7RTQkUEpXFPfcicodHqbTTaZXXnsF3fJeLh7McAEgdr",
  "key36": "byn9Uy8KkqrT65r8YKERQ86q2cQbSJghZr7qTzmHWyP5d9u9jZRgwZS4tRVrE62KRu3knDaZjNvnWMqk1mfrDTm",
  "key37": "4ZG31NQqaN5wUJAC593913PPijoLZtNFYJELAcR6hjfx4wixUYRRjVv6swGu2Sfaeg7aK5kbekFZXXNaU7KirEvt",
  "key38": "2pq9hXhVkTeT1mszKppSkZXERasfwBDsAP65gJFpgvH1YZsRiyWzaYQ5q2RDESBtfdZ2hHqQWb5UXJudwoJm7tJe",
  "key39": "5qTgJEub4uYQuDi8Q76vVU1WR2zHVQCr6M4RxJGuky4ej75nXyLnWPhsxWrx1HGg5shcFWPNA14sP1wBPcMKKuo5",
  "key40": "4nC7zXz1YJt8uTkJ5n3fjpgpAi41Zxd79ZYeyjtjCXz8XabgoUczCDmKDxNa9RuEDfKgMAqqQdpyxyneJ34JpSXZ",
  "key41": "4299qGLccRCoorq48rw1BBeF82Axv48wQvgx4qpCCHBWYh12CBku1FcRRDREWVxa4q4SrQhRxk11S9FgM3BubqxA",
  "key42": "4YDPvLw4h7Kh6vLUPz59vHLeoNkFvPJoaMfrud8L4JvFBYEDnTBTpxu4JReXFEi3efsMoeJBPZNmodGyyT2n5A1t",
  "key43": "ZMfwEL99CQkSAuw3W8mQSe3WNq8tF5MsRtyRjTuwioTdPLFiZm9pDCy6wjNZBA2x57mGdU7Ha1dXYs1UB8Bohqa",
  "key44": "QHzbu5wQrVY3w491ZykgnoJE1nj99fhVEidFYNC6oHakZhqmhwULpXJzrjgF9h9UoJXFJEHXxvkukaHRohffRh9",
  "key45": "UwhWQwo7YqJ3gc49bc8c6YQWGhLAbqkvf6CZsEK3erVq4ouEm4xYSvjvCzn87dM9GiR94Pq1PsDqAiN3ro6Ywad",
  "key46": "4wuKaN1WZCUkBs6KJ4CeeQjchhZe2T97hw1c145E1A5Yb29ZZutDpBBwXsno5XtgTE4mf7v4iSFxJqpuf2KFFxfC",
  "key47": "BPL1f8BVVg5fuMU2QA56SmC7NEZpYDQbLrBMDTWr3LdjedTgT9ft1Qi4Zfskb8VuNpTjeooSpvaSdfcmc4PijeG",
  "key48": "3E314WeAWbCSV3swQ8trZzE7JVPwMF7ZXZ3LhS7KWwd42ns21ZPoz8Ybtvr3mjkUEtnk8rJ9Cc9DftxFowXQvPYT",
  "key49": "5CDYPr3mJGo5X51mouw4vLDT5iKdt9evkGkFrtwc6yqqDu5d1DE9okruFB812GmzqLjkP9emjhb7hWtQ7HmeMeXm"
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
