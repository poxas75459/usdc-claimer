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
    "3gSuyvKDByp78kyUnzcdYN5mLHa8fVdfPihonjKWYK8gDxDyGZSfMHtUU1whosbvsKgbisVvDtner5mXmCeMs28i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F8erhVbJQnkCB5pHc2TcpHEX3638hRztFmkCw9EgrCJLCfNyx9i9HjXqL3GmYz49pv4U5EWp78VYxEoCWjS6rKV",
  "key1": "5modadRe7DEZtoaxWB482HvXXnexv44eiWk5YgMvzHZSY8Mr7HYyqqqGd2tA3rMQEqzCsTZS3DC6YSBq7m2z5bDw",
  "key2": "5zZbTHGQQs6ScXs2atRdafJgMfYTp8Y9RpZfvxBxcF5Umsj3oCDmz4LtL1g8gq5LnmkZf81Uh9e8omYEFumizqf3",
  "key3": "2XaabFwUmG67yaN37WvqsokHkasaYVmTY6AKPES4VEjHW65BknrbxezQwcWhUVNbZJgbqLtEHptcMJVNdGGkwRZ6",
  "key4": "2qMZSQUjcLdN6Z1896JeNANYYx6RA8UQFyqZPYypaHES3j6H5anmv2HZZLxheVCp8R5AZPXGxt6ikLgNwr741Fdh",
  "key5": "zRmF98oVv6WGbJpiac8WwsSb1PZat4Tq4PLuuJ17N68J8Bx358wxtcs3AXfo9tScDCSGDhoPdBsbSPdT4FVAGDm",
  "key6": "5ujC2WKuvC5iDGX9oV1yuRc7eoeNeiUzNFUgANBEr7fSmpBf9aNTas8GEhoj4vW8ut9sUQb8G2k3xQEdEUZASzTv",
  "key7": "3EfoJnHxM5p367xc1iHN8ECD2g7aWg8mnazVpdTaR2znzbXWPCf3zYcv7ydBSPmJNgkP72Th9XC9aCysSWsjv5BF",
  "key8": "2DtjJAXR9GCR4guQufpzJTzsLJGsWJBV5TuTcCjmqMqwufFZxAhauJgX9vxh4wzRmJMFiaKjRSz8Ac6kvrbZmUUC",
  "key9": "5jadMgJXBiCb1EnCHRt1wbCu22Zf1dY5ZV7N22PF8t9Qu1Qk6wAUTMnUx3HCwLhQCq5F6ujYLJS5vxsxCGpwc6e7",
  "key10": "CdcTA3f3QtijJFW5mdLhPvgfQDCwFaHXoV3dCBG96vCmwagYJ9ortHV6NajJXf7tTGWpptCvBksscEGfb1rUkcA",
  "key11": "2MkFTsBjREhZj7g6NwJ1fqR3ZnE9aJibhmM5F7o9v4Rzm7kyVt6XWRrXR3FTUgqHzieijks3P8FycmszBNehKZMo",
  "key12": "49mWHKDvRRiRHLP21R6R9WEsPcXtyLfNg2GNHJZjf6dL3tv3S8ZR9h3SwH8kTzngwL95E5PysuVLofjBFLNRBQkm",
  "key13": "3HvJVKqTZD5Q7zvF76MdKryjroqRkrWfgXGPERpZLZUrsVKGv46pJN3TqLcDsqWVyXH6kmutNZ4fTR8g3VxzPgmT",
  "key14": "448JyiAQjCbXi3nQfN25DU5cp5Q3NcYoTPt2P2tw67dAouYEwGudjFa2tgNHsoZY9JyLqVi9JWy1bDX21xVgUGKC",
  "key15": "2fUb5DViF9G8HJwjptVuLjitZZAeefsHCQtQJGsGpFa944yZikDr52SXfAXPwjx41ALkRKJdRyCCdmXxnFW6D222",
  "key16": "2Zrk96RV6Qst4SbJMJT8eij3qeCsd1pdpFNrzuq5tWYBqqeKURpGf1gCcsLhMK73vfnssY9pkMV6DCjyMHHg1sNh",
  "key17": "4FYMHjqzgSQCgUQvqWvhxcnaEkR59BdfjMy7EfvvE55ygTevxVYzRcU7mvYPzgAWtVLnbXDcQH3bfwpS1wWdbrW5",
  "key18": "25d8W1kPojnRp7mVc5W4SjNjF37oMTnayvzeHWNrStGoJVBKKGRepfehVQBC81zAXQxzrR7TTEErudqj2EmSmgBT",
  "key19": "2oqdsSgrtsQbjUsnZQEegEnkq2tZdAcFKFw2UfNkHUR9Vis3HhAJQQ8oy4KjMyZn4HZi552Zrpsh5JZAXdNAUPhg",
  "key20": "2xNnpmmqCGYw8tDWyxbY2nKjnZK1MrQ5DYxa1A3DH48vmNffPnRwmMcfGFZRokBzoYKvwKHn411PaPoBsekPx3Jy",
  "key21": "jt8ymVtTm7QNSPhAv6p1uQDF5LJgsZDSoGoh5yEW4ZcB9HdnMjLURrsrTTDMhRPmcK7xYoGkQXpP2TF3pQUtC2e",
  "key22": "2QrGNALtjEKsLfz4jfiMHGe3TiBveUqFUVuapaZpXDfAQ375qp7yu5i3hEvZredyQfuTdZFg35BrgaVEGMrQqLTQ",
  "key23": "5ZgciYNXuoppxq8fGCqUi56k6ZK7xAAgufw3EzV5M69MYmy8SoEMX4CZ5qL8YMqm3TDCn7sJxZ555MVSysrMZspd",
  "key24": "3JvP7eN4Tg42W2LQ1JbmaggySAPwFRdApyVGd3Mja5zfZt8wa4F6PqmTanrKJ5QJ4q9GoC5GDvpg1hWUtijqoshi",
  "key25": "5Yh2qN7ucwBuFqbWdLRN5YEh7EAvmLhi3KGNj2RWnojTNpt4WoBbUVTd3W1MRmM5uT9AKW4xz5ZBeWF9CBVM5YcB",
  "key26": "21XLagNMXpR9CwGHEY87bmEipUA6NxRiP4KeByFHujKsrj6DGfbNPppfx2mgTp4VXQYArhvxD4CBrMLckjNFJhCr",
  "key27": "4yxqifMMgHtFd5h92P2n8booV4heYroymDL9RBgPeTR9FHfjanCvND1i4ypcVsWUbeua3YeudTj3V2ypeLemdCF2",
  "key28": "4w4xDwrgsJPxYMiz5E8dkJa9DvCGCg8LH927qGr4AurVhdCpEnReSUm81uVrrLf3we5b98UwNe8jrcsWJuGALnNs",
  "key29": "5DVMoo33MbmE612qrCZXaieo5SvrR4aMR48CyuyGngUcj7iEa3gusBcX2P8vveV8yESxhagTiy5MGqzdjtA5Li1Z",
  "key30": "76qTjncvvsFSPbH71PgonYJ6ePtwPbgg5G93LJYCFD91EW3kxNT5aHfdHJ38LoiVPaiBsYMetwzRy9SKTyuE3PH",
  "key31": "2xPSXt9wMfvVbcRkYybKufmwqcqfdcr6KYJLUzn71qELqqwG8PEkY1GS847SnLSzexLX8bg7X5kkdzztTxt48itr",
  "key32": "4SvnXd2XPrsNPkhscCKNFiLC1baXsoc969Qx6bMyerMm9DyaNYRatYyyiHmgfHZAL2BpcVA9kEv5pYWoia6ehThb",
  "key33": "2pxsFMnmLMnhDdFpVFr7yBNABxdAq7wR1jDzz9MroVbKrgDVBRAU8FvShqMPrtWaG48GKsrZwy1T6DzW1erBuxTe",
  "key34": "bRj33zWavCXo67BAvM2CALT4i3bh5j3fpAeAQLG1AicyeSzmXn2g5WBdPgHYBd8b9ErCECsTCBYb3EfNpvujGms",
  "key35": "4ESGv2KJ95dqbHie7Ej5ACeJ7pWWXJCnHrmFwfmd9j42VanJHhsqho9Q8gepMcrqqPCWn5LuPYemqfxVp72zkufc",
  "key36": "pGpYfNrLXYbnwm6tZU3236GbR3ip96xEMMyc36ScRHhrXrQde5HEYDK6YSgAMLEBN8hr5Z24ygH3eC5YLqj3gYD",
  "key37": "65eKoVdXQf6cKMyHNwY1JkuycuSsFavUBRQaUgU5ZbhiJpPyWzYyFK7rF8xrbW74PqdbMFQHzRBpDcjuMjN9Xhtt",
  "key38": "3bwEU91LHXzmLpj3sYhxQq7GoU2iDcTKSyzXKdiZobRjgMwYWPins5AfkUoYo8AY1tuqWYPWE9JdLcvhS4AvLYSw",
  "key39": "HRVA1TmfPTCfRB9HQ5eeKvCc2hGL7U69dpr9zbnMxoB3xnkjmYmirvHN6skqCDCYH42r21mNHgsGhbRZ8kQzAxn",
  "key40": "53Vnz4Ffj1KSxy3sn43YnBBDgTcYXMBho9um7RR3zaEtHRPe4UozZC3JMcuzv3uttwkguXLiCNr2z6G4rJgq15ge",
  "key41": "2CufvoJebJQ3doPiAzt78MjR6yGX31dNwt9rzQHh4wSj6qYKpQBwPX4deXMMsY6gXdRzxXhKLJM2n89MqMMrf2t3"
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
