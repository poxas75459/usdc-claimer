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
    "2U6BxUDY7rwxR9joqwFuqCckHy2pivKgakewyNKFKZ6kjBxxSCbSdtHaHZBi2yWgrAmnLeXpYHqNvWAQaFp3Y1gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W6JZGgoJuuWer8eLwrurEXmGdMJtzsDkt8TZyuZNhCUM7MHN9NpghL6ZPef5hCvJB8AbzvZdZeqde6st5B9CpxH",
  "key1": "4Tk58JeCBKTnx42bRitLCH1kgZLMgdoTnZskpQk9SGqfGhsnYvp8zRNGSiFpkdSbvqLjheyYbXAkLsnnQUh43GmY",
  "key2": "511yQpbPBCU8XUSqg2xmNUq6vWyaprCKX4DyTG35X12GNdh6RtzFmJ1y8B9tjdGAWNrxMDUEfbhJ9KPEH3ypUhNi",
  "key3": "GADySdGEsFRh7WdSTwmb8R7aDvNUWeGtnXkrCjHETxwgZojUWWqu1i7gspFSUDpCKekTaXXqFyLC3hMwBGrfnXU",
  "key4": "5b3rbP2Ai23pJHsTcYooh1XYYAGpiqYtpSRSaWitjXw3sYsrDwdLS7sWRZpdrijGQKBCFTEaUatGR2zU5PVvmeeb",
  "key5": "2t9q4XGuNoH4vi9j2mYajP8R5FqqRsrQyq4rFhGGtbaMDRzSApUJBhhLLpZ2ZBEBdL2vfehmPVWrhajHaWLtVKTV",
  "key6": "52py1LtH5Nfi9ScvFMgb8wFt4J6PmMzWJymZu25ieLUTYDYisKfo2S3JzzF14MD176Mw2SifnCYKcc1Pq6mGhasG",
  "key7": "2T7z23erRg3X5ZURDeY2GQFaUfJrP9JzbiP9MqBUuDnLjuEX7iuEcK6xv6gseccaHaXowhMQdyuYfrfuNqHjtb23",
  "key8": "2E8ozNT86SDXT8tavPYohXYsQUhmPHd1S3DsiUVHfMReSgkP2QrEVdtAZCHh2AJWF9hUP2dZvVJPxqSjRVeLQXnm",
  "key9": "5ayiK82U5TtW9tu9f2BcDmMQsnY3XftqJAjGAUyp2XehsmiwKNzJVNMMZeupCtzAckiE3esdXUpz6x92DAuiwUNT",
  "key10": "3nR7i2gZePdHoYC1GAyDUfHFnURS6E1j76DgDFr36mfGWBbYJCKKwaSiFgKUUNg8xmPcgU7JVueQpyJheVxqSXdU",
  "key11": "DHtrrFyHoshZRZcrqaZmkaAxEgk1kEDKGc2YuPzVUKVSGgFWiX5uQ1X8twmbkKKEwuFFiqh2KqUFUDdjWp3HTd9",
  "key12": "A9AT7gidA6rfTRA4RQbTX2Zi8CbLZy5kcYuZPDwu2QCmLPBfjN9Y5n1ntMnSGmvPTfcqmP24MXMSP5ade3oHeDP",
  "key13": "XfuqkCAVkVnxhECVULQDGmcBGX9yPGNut5MAz2gANuo6hy2WereiFqkkCDUG4MCRiroCzeFw52c93pi9kEaT1q1",
  "key14": "2QTrQBU3rX1t3we8EuuH6VmJy9y722QKFVE9twGa9xTUTxDiUtNvzHkav5HABLf9NpbMVS62y1GW3kxUzGE68KBu",
  "key15": "5VLUYMguH7WALxgQ4Z7TizrJaKZBfzkKAEgwjkJnhpdrq18zwuAzL91rTGK3x7hRAfvkX2c6ePqnQqX6gPpMhneW",
  "key16": "4BBhsnNryNb2P5hdfGTTi5avZYwgYzzicjB3XHNDr83rBPWLrtRwSPY1s4wrjY3MYdZ1cPH33tz9nbcGXs8YYZ2Q",
  "key17": "3YD2SEyTufT8eiDRwsLnYLACBFozNQoPSEpf1xXLDPq2PcrjEZxBhZn8TkS9tdo2YGNYkVobZmEJMhb2Bq2Pf5Vq",
  "key18": "yciuUZ4Dti5vDi77g733G53Mh58ajWDYAHpMPhLij2XVXNzpSQ8QzbLU3QVH11BMFQ994K2Mc6pHmmEzeLRkybK",
  "key19": "3rLZWTq52tDnR4XmN7Ket1es29znZugeVshQzYht4kaNCVaj2rH9WdqFWhf2dGkV2UvoZWQeaPJgQ5LMcnNLTxoD",
  "key20": "4jE9o68bA85CUUcDPgjCWdGqUQfRG7k7mCsUAh2PqvhvsXQvVZ2bsxCzBzH1LGzkb6LhH5gruRvq9jK7FYETeuqD",
  "key21": "4coyGy1giA9BDFam6xpJtmafMuVkSHCHDrju7G5LGJKMCpgf5jQ9CSEAqiNoftArHEYpdnFEmfbjtnriiSVxHMSr",
  "key22": "Lw476Z3VPepfxFGfXJ2QPeQY94LpFcGJj4J82qiv4kxLNvZef3DDYWdZhuNAbNBu8QKuMxoiErr3tW5ici25uTf",
  "key23": "55ZDNDzfEDBLsDKvCcwAYzLHbQNKsotZkGnLqvK9zv5PjHeQCLgWStq4nkPsEUUfH77CSiBRdY3Dushmw9vXMMjw",
  "key24": "42FyUV9tpEmGXzRvu1VGK3bxY4z8HMrUxm3sjuTjq7SALHSCJdXgkKG8zxSDcmmYboCdGs13eryzDtz6fgrMxihV",
  "key25": "4op4Ka6tCFygKASxeFnf72JcLgMLpGqVJ4YEPgq1iZhZB7eRssLGC7q8WgAtof9SA562PPwqSQXGMRJxSazp8V6G",
  "key26": "3ZpmusMWMeuzDiR1j1xzB5nkqqLFHKKyhVVrqrDoXgxSp38MKV6dSfrGyznPg5G7RRbTBBXRJBcG2HidfseZtJDB",
  "key27": "CCkmBGdam7ayDGx9zmyfRaoBGgBXZ3PjXy7TurBzFVkjenK4YUsmYxYToxNWNVzVJkTtYfjSuWuW6GK2tTaxzpV",
  "key28": "2RXtLsd9kFuZ3139i1D2tqwsyAq39FModrsCq9EWXfGg5SqR6cH8SiamUse7r2RGMhqGzfWnj2VAfFMvrfcQbJFv",
  "key29": "r3jqtXfWyYW8kQPhMEiAjKPXwaU8oAMUV5eZZRpXspNBTXeTvPgaeUrafLJ7jwvKY2v4LaxSwUAidY6pKmYC6uS",
  "key30": "2LxZFDad2SpcSyqf5jyD8y1vQe37Lby3gaBFamHLoXTTGCDq57jy2QscFMzdGrjMTYJb7PLTnGZdE8tf7Rof5xZ2",
  "key31": "3Xtqx5z5LkCEFN5rwV72BgforQ7ohn9aNDBE5QBcbKPxzUSeUPqNkbvywqpjLZffv7PUiiWzEVTK14MQpwdReFom",
  "key32": "4vMAbAZUXZ5L9MVa5JphQ6AEDjdtr5iUSpZZbQm9bjapwn5LfJALzP44QJcrkVkb2b1BdJoSEgxZDf3JeaTMy7m7",
  "key33": "5wJstbaK8SGMHSmcxsxP9oSwWUiB929UTdxjMdCK9MPMiGQpMEVz3RcFiFC1feArhq5bCtWFTjBcSv3egpjW1sPi",
  "key34": "3J2n3uR4az3fAyo7HkXHXZPf8gxs6n1Ya72aAiqe7WJKaPGsMZRkkCH3qXubX43JZuzaSnxPSSSK9Qu5QdYkwaUA",
  "key35": "gbQYWsGdVU14PiVM1UFKNUMsUJW7SzJan8iQUSAKbK2dXZ8LNFQeh6av5Gd2ZV3uwvuXsghEqyQoQ52B8j6dFz4",
  "key36": "2C8Ke8htsX2xGwS1yc1zTp6d2yuHSRqunmTh5pHzwbxRvWZVaaRfSjvjo8vdhgscxhVrybyYeXesVCXqBKVcCFfQ",
  "key37": "5MXkuTBUYhTwV812Nc8STApHQeWq51Z9KKzzPHNsLkyJrU2sUP7NA2qV9f6vSy5E5Ugioqe7kPpqZAdp7dPRb4Vy",
  "key38": "4dmUmpDRtN4oNz7bizNn77Fh3iLfsFDsRDpXFnp8WiGsUEX52pn6RtWskx7gQ4per6DnkXEum6EZ5k4FU5jcwDQN",
  "key39": "4auPja6JcE8KuUXWZ7G7wUQEa3vSJYtsmNcHXhBXay7g2wKuFpRZt3DS75c6cQDVquogn5YCD2cnzoMmuXSwaV1z",
  "key40": "47QVmxrVUdTUPR9yyvAGkWqNErPFvjz52Ao6YUzW3iTgdnpJj2syToFwg377e4eMrKEQnJ9wF6Ga7aqJUcjtSZA4",
  "key41": "2UmWB7xPWeWN6VpyuBCZGatpAFW3gyNiZbdsLQ1NBJoiC5JKKLoico65BTa8TT78SANDjcUMBhyLEMW3rGEtV8e7",
  "key42": "4keXXxsEkVKGTQ5K9D2sTaT3FgVgpZZ61kVNLXSYvhUPjF5phyaSjAuT1Rzvqy3xNyi93vbGRtW6N6T7W6VP5uEw",
  "key43": "tbFg66eGzAumX6De3QbLzPAArsxR8NfbpkmAtMMhzUJMsgtvJngAqwLRCteXuEFcBWRWEeNzNCp8Q2FeMkpiRxK",
  "key44": "4xH6C6o9i8roPe1pD8F1ynxmNErAShXPcY6uFsVzbh3UMzbbXNRwB7RD6Z4EUd8N3vjWP2zKtL17uNHs4mqXk4qp"
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
