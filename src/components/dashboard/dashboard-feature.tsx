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
    "4X4jHULxeLyLW1bii93pGarNFazvnS3uU7EJfLwTUud1wh4ZueoS3SNhj4AXorGHwrx5BLpnpVxNT5DNXQwnpd3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P71bNLUcBKQo2cBGZSuA6vY83cXgpRL4JrtPEJUxr9kiYRLkmFRQxwJ4k4pqNwshaCEe4LhUxx1NaLQGgGf1Wqq",
  "key1": "4GS8NY5sFwYf2bhXKArt9QRZySxmVYNV6q41jquWAVFUcJigEigZnCaEgFXcQyg3nPfbeK7NCpVZ5b6NgMEYdSLy",
  "key2": "2mY9xyjVxUyWUZqTQNxcUt7e599ymnnJwq4vXvjkXHeSUKvqnE31baecy8nZsyFqY3ruM799btQwJEzp74nn9nYc",
  "key3": "5K7m2KQmCT3qApgKU3gNz2vceNCAtLPZf9xYMj7FjvzHgnVFpRbBBUuqUQmaBNQGeEM9gZx28kdiaxYY3rmTeddm",
  "key4": "2ezXASKN8ajBZ25aEaHPCrija2yYh5CzLqvmhmB4qBKYTWUuW4hfrm5Nj6jsvbY7XWgzw46t52R9rFyUgMLkqpAs",
  "key5": "534AE32AQShQpKV9BXemTuojKF9EdFMbgq43Kv5HvUT22U9hWYuTsuf2BkHW2xPY8yBMTQnZcvWJVxYUtizzmjWn",
  "key6": "3Mjdt4TsBSsqoFAmBK2hPdWThGGxHgwqZePXm3thXAAk1qHnHicAsQ7JL3EHm8S66jZMDfkYm3CfuCgiRcCGjrKo",
  "key7": "66fyx7od1BXwyCQ2YkqVGRkwKFJRWGKq5guq8x2j7i8LTA3Eu2xU3xACZEZAxtkJ7Xeqs9JMDCqjLhaqroLsMuY6",
  "key8": "5kw1jNTDoMqqSoNmFv6un7VKRDNHJi5LNw8VpUa5GSiH3wuAANDpRWS4VWhNbbU3zuLVSNHcy4zVFgnJnGhLBs2c",
  "key9": "Wi3hAVhK3b4prPawkY4SSDdYB6hLkHVioT5VPUyqm5vRgZxRuKKwxFZGqmeQJp2rYZ8n4nPJQrdH2fGHTpVdz2r",
  "key10": "h5YyTkALWe8uQFSaudnx1BkdwABgigoRtGowMSWWSUat9gCQHYbqjJ7P3tietM2Dc4JfjVGUZuMFuAe8et9YRRQ",
  "key11": "4mPyNZHaGRxjbWwQZwFjMecgQL47T7MmfeYRgr3oTU44DoCXMTMNAFFRzH6ZN282upi2MfdmoBHEp6hN5SiwRyf5",
  "key12": "3jqbbx7RW3jHAZxSimp9hvus9ugk9Xg3mm7CUsLjYFzxjAfa68i4eDZ4u1PVPqm2pqaSr8PuKNY3JKSkHHYCKQCx",
  "key13": "4o78fCqKrmJ5Cki69gfzm6UCRvReUU337sh1rFrC1DC6PpFbnubvSQ5cB51VG8Q14qJs3oe42Hoh7sdo4zwPG9xY",
  "key14": "59AQfL4EGKUB7i7CdNJC4gQSBAXUphax6byJEx6M2AoLbr2vi5eyrtNCisJNDYTpduJsAeYnExf2sG6MMWHWdNjH",
  "key15": "4Jz8264nUe47LaQbpXuF7ktJypw86mddPdRnA4kuyNs6iLavvDWpZosGb6uHYNZdVG2cNLA8fpKTMvotYxZFwb4B",
  "key16": "2TKVKfH1Pya5x5o6S7HnkS8SQDyuKThpBQG6p51g8cBkGTe9HgT24P9E2zBJaaAQTeEQoHz9uuRHhwU3uWAFyT7w",
  "key17": "4yDa2qDEWjKmjN5JZuVAUuMX3PffT6aniFs6gbjkrP6cV5K2HqtxTAYBBMnRwcvhAUPAHqsscfcwZpoA1319rBF2",
  "key18": "4LskNWCKFVdvxLLqB5nuTtnmd52EWfRfR2zpqfqcw2YDgLopsFLuHN1fExsVrxBHB9A6c4fCJBLTFc6YJd3Zmwru",
  "key19": "3g9Wsf6scxBwugp73rzGdfeS4CFEgJvuScfvVMgEWyY9SSQuk17axVQB2DEvCBu2jduPKpuuK2QoDN5Qtn55TpAk",
  "key20": "4kEKzPhgYTC58MtXwT6vr5AJYUfB4WLnBzFgeFrd7stviWN6h53Suw8BKnau2mQJAHEDtbNsZc5ZTovYuHjiPHDq",
  "key21": "3BV9hzuVvA45mGBKkfKYsSYitSQoT63jfN3okPrfJkrqbgsCWGgkCwsN4FK1sNgyCKM6dWKCd6XGujmHWJtConTa",
  "key22": "4WcsFufL8K4BbiYsXBMWJegwGD9sh1CDwG79ZuRzz6zvtBzhCpWwA7dqpkmuEReBgHvqjLoAfDAfizQnSkHxCuYb",
  "key23": "4GsouE6Yjigne4ywwrg3Rk4tVfuGUCdWPbk7twmLMEXjQ9uGDqr6aksbviJ8FvAdBWP5ZdJQRX4gtrccjCmN2LkC",
  "key24": "56LRy7RiH2FuwcJWLCkeBh38SoaXBSusbnBaD97kCdQwqfv6H5AhSRvCznQZoqtjkXh1p36DKE41VsqL8CFh8Jkt",
  "key25": "4dc4yQDK74KqvdxcPHQDk1ZLVDSpoiazWsMRTCwFvirdNHiDjxgJjf3ViRZ4tHjTa35NugX4vfEYTniLHoPybSqB",
  "key26": "5BAbu4oZFTg6EiMSoL5QZQzhAM5NXLcXaCbKAcpSrySVVYmBoSF6KfrCqHMrYiu88pSZobdFNCjjBa3J2qs4TDRp",
  "key27": "b66uMhUygKsZqmyLfC9S59rV7CqVxYsvbEDej5XRvZrYjsRTNBHqhjHw5U9JZLCt8K3Q7j5NcFVQtXjQdAyZvdG",
  "key28": "y8ghxfTdUXHGgSp73w32rdBZRmxYekFZLGsYqgg8Fmkwji8STysNEkdcVYbdEa16dL2T1duEV6f23dfiMASNHKd",
  "key29": "2MKHNUvAuV2atXoKmkNHWY6zWyUat94feU5fthTTNGCGb37VmzJXYiTmapCZZ4nCCuyuLhpwdEZGUJY9Q2oKixkL",
  "key30": "2DeHj3Jdz6Cwjhds8PwSSiHhXPiSfYpJLisqtDiSmfg49LaKppK6TDmSRJ2u5qsU9PKvczNhMwimrs4brd7hKezx",
  "key31": "65tBCN76EdckbAQfXhihyaU4cZe29AazWzjrrgnqRfZ9ZMpYcP6UzRZJF7L89U7joquHw4fgdynpvX91GBKNCXoC",
  "key32": "4sRB5d9TQ4WPQ5WrwHKpVNVQGFdayGjzESUoaMEu35H4FcqCuzKpZNbRLRkNU1Z3x49GpQZZ2iqw5FaAXc1C6mhz",
  "key33": "38n2AMEPVq7YutdcnCsUcivxbezXfgRgLscUskeYR4hMfMVgEhmTKeaxQ6dPmvEQMTJmpnNVg3VAMt2jP3hxrQDg",
  "key34": "4W7a1LhPfnXt5mbbMsMPX1M4AS7UNwBfC37kVW17ygxr9GyU8vdYyJ8iBYGQeC5EWaLJPPc8vESYKiyKsdP2cdBc",
  "key35": "5dGr2covXNPJC1aHMwKvqd8T52XkorxQmNFdxv4mdnesjkxgy2VokJ3yKw4suVGSkCNPsM9p9ByepW879aZ61XWb",
  "key36": "5UdSRTo4i8KX2j7xoNVFURporARxAm5xPzV3Cu5SC7vaWuRQtqEHATpFhzdtQEgTCv8jUkhuNLrZy7WYDKBpvGSr",
  "key37": "2ccRBdNN6Q4hrdns9GGobdKThfaUtzzrvof4cf2aYxUpwKbHuVU5SUpaR5aZeurYmXyLKPYoLuUrpB8e3xqMYMQu",
  "key38": "u1PCtk1EsW78bBeaYs8mbTcxEX1oCbk4DW46Mr7DdijAsoosXKWJ3PqRDDYWc2X3ZPLPwW6qwUdBjsiR24zXWE3",
  "key39": "3JC1czm936TVxhmEuJXP3eWm5bfcXyFNcdfQDG8NcjkzQ4zKWLKvsm2RxEw4DRHq9Bu3gdwHbFK3afu3oXCMQzre",
  "key40": "2Dpx5V6fV6Q5sDdddVV5NRy7HVN9Usg2feGbxEyQfHkSUvm4BYsuwj9JG5PtVeXdB4nXMtSxfi4szzyWK8WzwgLR",
  "key41": "3aUPfayHq8fYa2Wi57htLiXUF8VTG6zpqbgnMDsge8JQ4eqmouxVaRciKEacStauvuM2JbCN9DtLW3SNPS3yQaXE"
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
