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
    "3bHN1fm2Ekcx5cyKAjLn4jEUL9astFpgPegHvMkpWxSVbxZjo9PMrmseDNsMuJrsgmkrowsJX27Lia23KUJEWQRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VoWgXqek1ij2rMzmNejRMwKMYbCtmwvEH1cHzXPEPiThavFp8ZArXp6VSPox6shzvv4VLKbdyWUbijwddcoy3we",
  "key1": "54pFxqYYqWf6iRryiC9WVifMudipKPsz8KZ66Y2cnsxfjwRA7NriDdkKBcJ6MRHjADiUk3UB71nNUUEyL87pmhVY",
  "key2": "PfQWamE3hGf9gB4u2isRDcd7tE8m1qng57pLG9sVWB4vfwFfzxMD1bKLwXbYCcs2pwpEgyvWzPe67aPba46BChx",
  "key3": "Bsimv8ojKRGaK7ew8yX7qora27qL2ShWwU7NYamAYs5Rb3ZEGhhwq87xpQvaJWjVhnykKpGnpjKf1PEEDvRMaoM",
  "key4": "224ZxtFYzptpHFWhkz8HnnM6TdCVStBQ5h1jFUxuFTVbaT9DRBa3KVUsWTj8jCV3dnTAjRvqfEJSqfgUAmVYqt6f",
  "key5": "3NcSJK67dvUH7i9URVzQ4X49XNBv8RXruLDR8SqcuLxUGWa3wkgi9ysfhKQsakPt8LTBM96qcWyq8jW6Wb7DSNpf",
  "key6": "5Co7cJLahc214QEkkpUx4hLYDzwBdfUoFAEEwFUGG3dkgvT8tUNheRf3kntM9siTm7NujhSjL41tAKMB3pyVfSR8",
  "key7": "9t7PS3aWpqUvdshVEHTuh1FFAbBArLJbaMCZFgrUAxSsULcPz6V6ayXsGmDecPyP9hUaUXY9pavVcVVi5ftPJWT",
  "key8": "Wqe7LzJ4ptAcW1PbQm8o6Wx6e6J7tvbzMQjURZgmuYHSvB2FGziVDJKhos2RSpaKcAvpLUvaTvX7gQNTKKm3L45",
  "key9": "2HPR4VxhKRFKzmc6QMqcy6MEo8t55eHUgy1MjThXFvj7KYAtZpyBpZwyrZaF8s8PoyXGoKpoTFHPS9kfY7QyXNa2",
  "key10": "rSZAU4xRuiPvPRopyXmWWCn3zCCVf9sDzfEUkNHDja7q68zg9i3yaSBNuViBoaq4V4G5DnX8ThTdxJDY4tcxPb7",
  "key11": "a3E3ZovHdru4Y3fcRqsuhXXnYM2NovT6HqNNd5Pu2GXaRiUBFQUEMfXzt7DBY2SmiwdoTmcoEqpkbBArsV6zmCg",
  "key12": "5NW7Q4xN8pfq6fnrjYqSr7uWF7EkRTWCSDDPSvPpbLiMoj5buUKf4UmU1uyoDmGfuMgwmLsWu5cRSq2xbqfVw7R",
  "key13": "bJjeSqNk3wPJVCZm82hz9JZepLs9Tx8iDYGE3EkRWjLQx4owM5CkQ9BRJ2uqvVRoYZ6JxhMSKDUC3xJWB6f7z49",
  "key14": "4291kV6azQNsRkDRvGHPAvkQe9XramuHvbMGBWq2uYTB4qPidcyq4EbMtS5GQcicdKpJ7UCZB1L9uZRdtoaZqMim",
  "key15": "38zWVG2NjvA1mQLHNnsRbrF7U5ZNvPqL6FsHxfJg4sT9YWqUXYpjUnUA5zQf73SY3vmuZ1nj9k4e6PoBCtCKZmeh",
  "key16": "Jsj9VgbjpXjo7D2svWLKkz5dERrcdQEcGUuyfzxVGjb3U9JT4NEYkx7yn23yTXDC3SXZawboZWSSZuHEGXbxuR8",
  "key17": "4sRhRFpCGTirg3FZassz27iiWo38UDcyyn72xbDTkLkLJmfYLoKUJEb1FprqDEDzfJzCSdt3F2MGmszwEVzUCCcq",
  "key18": "EU3vDsvH8ZWkEuKo8b35c1szXkecXTJTKiU9VJZ4zc86XcWjSxiMJzroBk1KX1LSAJMhTg29n1hzwSDmN7sKCxd",
  "key19": "ReaVPt7wKTqTYBCUeMh9MrmyKSozgH8nDZqmwdS2BB9G65mvRweWvPMfiS9DBjeQSGMxpmGZwuXgXWaZUCRzbNz",
  "key20": "FQKjqqjoL7hnyhF8NPNhFmhMJY5GzJnr2PYX9ejyBY8Bz23hXkDYjJHUKUmVFEybWsJ1ZHXRYvDwzwhGUNJtEuS",
  "key21": "3UB1CMezKPpMJ7m2w8mXPuPdgGzR2MTCfxy2YZu6vfKBpBiZGijYHCHkwYeYNKLpahtL63M4xbzWJrDWvDmeE6Wg",
  "key22": "e7arZY4R7rkhtcvD765jKgwNiqnzcwVWWQUcDo1GzSmcRaQcnkvqEMuXojS5epZJCDwH3ZEvhJ1JKWny3b4UbMQ",
  "key23": "iPFWZFYXjPaPhofTCg92H74qTiWwkqzxoPqyjJLS6cHTYcRvLB9cpBGzeq9baTnz7g2frHZEmj67KnY3BqG1pNa",
  "key24": "3L1NVq9jTQPb67rBQCW2gU778VRBSS8Xz5z6xLawnJPyNk3cLwcgtgQQxwCzQ2t96bHVZqg71kjFjHzcCQu1qsf5",
  "key25": "3mumuCYadsbMgwb97jz6Zaw2aiDaFNq7S2QLLyxtG8p1mXoZdRpHgsBUrygbuZqLrEsuCpbokDRwJyioPFo2Lgzj",
  "key26": "YrcrZkHfJLEG2sRwBvNUEWBkg7WCLwnfUuqhJU1qGjsjjukM2EcDTZXAZC4UpA3r4ULpZa468WpjcYej32KeZvp",
  "key27": "VoxDx2QZjvu5iAuTLdzw3deTcGoPrH4FrmRviDezsuAC3m4VhTCEL8rMYoccFeZE47RtfNNUH2mKY2PFK1go4Ua",
  "key28": "5eekdZvDgdBV9qDZtyvnfs1ZiuRxxyA7V3Aad1z5ddyyJyABL8CtH1tbyYYmyppiy5v17sYza7fpMm3XeAtGR9re",
  "key29": "49f4NugTMZuq1Pyj8FauaRqa7A4hXeCAha2WQdenL7eDGFLqMrS2htirkFWP22oC1cwcxHKXGdzVBShyBgCPXuCt",
  "key30": "4uUj284prFGVGv6mRZ5GyPKxohig2zHbE2RWN6mKNeTwxfYTASPAGKzvnTMabfekde5mpDxBqYARySHi6SUTC8ix",
  "key31": "2YLmZVquR2yCFNnxdmZB4yo224TXWvpdwHvXrAaLqevQckjexcj9quhMrwfEddvkcfTomAFEoRRYPuUj7cH1DKat",
  "key32": "4Z5x64XSQBtjrUSNWuehqoi5C6SDpJ9apVZH1HHpUKiqWEGLVbSWhAzwKdk6rRR97eLCewttFz7ri7iQZnfLKvYT",
  "key33": "2EYUn8skvtXGcLvqaSUU8oK2466warLM3LqpkQ8dhGKhPjb9Wzx3NyGEdpwc5y3tDv1uCjwq42HHwZyF4SKhB51h",
  "key34": "aPZTjENGQRmXKBuSffpffDR2nx8fNvTeQEmVjtFf9AfccQb1pboPQto5mShBR5sXyh6tUxgUdrLNCnUp9hsFtZ1",
  "key35": "22wyPUtrrRJXaHZE4UWdDzf8SEr2PjU5y2o62gfph9B1sa3G9R1bAaxndAF2SnfkdkJjpdSdcNAKhiyxKvnFaX69",
  "key36": "5YDizHidkQjc5kcJhsfFsmDdbfVDWe7Pfnk5kJrjcK9E3SczBj3WJxPNAqQjxrCFPM7V5GS5FK9YX7fdNkh7wEEA",
  "key37": "4d6yPp3c1SYGYbR8axV28RQ4Y1GmJF9m1bntEZrxUi4ZeJnBCjvER9anNcVa3TWBLW5J3nyV6eGsRB6oWweyHpAb",
  "key38": "5dzet5nd2xBWcCnui61TQEqyqQJgXeijCkgfmcu8zBu9ijB3ifDAs6WmXZ6c5SXiz4oDz1TB9YtxqUmJH8pnvAtm",
  "key39": "5iCrD4tGRTwswdBKBnvpTmp6BUvRnBTcaxMUEqB2XQhtNDpW4MFRuRxDCsfrQ5VjtSPk7wgWoeeKk2sTm2mPPH4A"
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
