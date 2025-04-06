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
    "4wix5pHq4PU4acqiFgBtxB3wFV3i2KFTJyrbqXXrphknHYoBuagomdxQwQwDdLSCp7SrVcX2Fy3bfcAgf7fquLyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pSE8rTXGU82PfF1qJ2sXQKSFk6pryW72GP2nnd38DoH4j3K2qks2Cm4dtGZAJcN7dxTLQb9xKgKMKxxwcrKfUKN",
  "key1": "5kTWvZB5xtJdn3qbJ9gWCbuenrgrhEG4Gwc4yGrS3SxfstpCHWrkAisDXMZXLuSAuwntJw7BSirZg6wQda1z8Cmw",
  "key2": "2zraePE2uSE4BG2zAqHRo48M1tc7NHujXVHuHcKWhHVyMEHHq93FzwwvLKcCZ56qAXW41qbmXV7tVZhXBEfmRaVH",
  "key3": "297kxAf5vqbaYQ6kEHB9EW24Yd8z933LZUhfDyygQcunxcARif3hRJhZNhUKk9SJB7qxbgnGDP1boZ3yZndGQdUn",
  "key4": "kzYaVfz1nohLupq8nVgFsa9f26yMsxeJkmQxQjM3oL94bqUs3t6UGH9uE2L6FhRjZuUyiRYTPxbmoAnqSUUV8uQ",
  "key5": "5CWXMPFRZh7aAv77qWsSTv1qsGWtxU37WP99PPQALPBi51whqWZkJnxMzVMXYhULndyXWVRtW4CNr4vHZwdy3NZK",
  "key6": "5r9kKm7s14Xioep2KGWh4pGYP6p9kxgeqoDjFEpy45rPadxVvZwZg9r8p3k3S2yApK49Qaw9vm9mBaaUZmaKrgyX",
  "key7": "LJ5gG7PfYXUkMGY24kyQaT7manqau7tLVeTkM316kE29nCsBnVAfnFT9j8rfjheir7Htu9HtoCktjuTSy9zNFcU",
  "key8": "244eQ862wDURNi99dY6fD2xU7CBiNdGhEAMXLAn58XfAREcbZUrWnm5QKkpN2KXhnEPZDdwcFCieouwde1fHDq47",
  "key9": "3Thn99pwSnBHSv91SskrTEzVN7Ly1GD9VjXSbUFoe3G1eQQZ3WPmYZ4kxaPZ73SfxN9V9rKbGP9KMAxm9re1Rmbf",
  "key10": "4DR3jxB6CMhhVyPF8iTvofjjsjf77p6mDFJ5H2tKyUuBZjhRR4SmAJMZRAgCHy7UHJ9sqypenPttPYzG5zteTKYP",
  "key11": "2TYg8324EUn3gCQdrACxTWpd8BwHTKsTGuDdLqFHmnpPFz6GtkPhzbbUMoodF6mJyqXQcjifZQpDqXJtqVSAZAJx",
  "key12": "Aez521kCjES85M8oXoUGMttZyyg1puspeVowh6BLMtJQBqREwNYBAgyAWiETgNwzVyXv2Wmy2HNqou5d2mdgtFv",
  "key13": "3TtKxQev6p2YeTSGtzEATzBYJ3cGZcPAQPFkM1iqVk2v1xL6AfuAHJ5J2kqKSnmQfZ8w685z8fr7fCMBDgJfE5Cp",
  "key14": "Mhfu4b9ykrcmU8pvUeyKyEXyD5Bxh1UWXnbqn2qZJF77q8ck7kPySzFBPQvuqRsWxHcmJozePNcwo3PUhu9eKLQ",
  "key15": "bFVpLPLN2bHkNqRuqvV13WHKdGt3kK15HPFkVhm9e2deCDveDr1zEdeTe4khWBLChYnzeKK3dCFtxXjZCerKy58",
  "key16": "fBVWT2rSHjVcCz94Fxe8jvQqSURKxmSSvdwgKfzoE77xZ4K8rCFjLkVZYq9m9ZfKsvAA5zud6XrWtZrijDK2otx",
  "key17": "2GdE88eDNfvz842eobByYMWFLBKrcFSEEK7znQ7xhPgcsYeiGAGePidV5jaXv2FQXMLkfJtBDb6ftGGxGpAgnmut",
  "key18": "PwEyWdC1HzxEdPQCsyqbgZbYvWcvDXcgahqFnSC8wPZwhgxpe5bXcdHNGefpwtXKR62JAjFxvbXeeM36ahdjW5N",
  "key19": "2X6jo3FkfoLqBXo9qz1uDcsTS3hL6mJCuxmZJWYQZ311gCG9Wb5CU8bqs5CmJrge1gtUX5vd35ScmSg7uxidLASu",
  "key20": "3aEGazQBuV9deB3qmqHmA4zEXzde8iSZuauhMjyrq362YYMY7QeVadabUSmiRwUF36UKzD4fcEGiUs19nz6M8XXp",
  "key21": "49yVkn6RTpYzyeKTRYRQfQhEFsDApgu7YQJJMWdf1ggigyqA5R2nmipWcUwunboDTVk6hDhWyjdrpsWtvyigXuh8",
  "key22": "3nwCDgr2safcfrErGpPs7wKknQ2H1v8DEc7TbT4dNL11Msa7XeV7SieYoh9A1dCHxtW6eojjLgL5E2NaeGccnzcG",
  "key23": "3mRd1iNDstPfgq8HNbdzuGUttYfFZ3tAGGHdLrbLjFoKpxxWSj8xwpgfHAGyBW4DPdmW2RjXEtNUTqNg3VSWFr8L",
  "key24": "5P1i7R9aaqC6GbTb7iEg1JLLfwuSyJMHArndgT1gCK3jPGLNko6znf9u2YCdpRiCgwaW9qQsXnyHxY7LoMm8gSLe",
  "key25": "NRgSzCyVqyPemLZpd9G37ZQRGypNBQdyzEwteb5zetiBF2MTzhSR8hkYNUULB8gFzCGaHyzgTjnsBEUNa6m2it9",
  "key26": "5cEfhpCZVz8xqJbjbHABNSuEuA5kFnRkC6TySF2ytKrLABPjoNehpGoN1K4n5pHFe61n78zbRt443AFj7ZiKi7JL",
  "key27": "3WsXWbGHRuojANYT7fT13YQmoyQKpdhUAHun7G1xBcCjeRfhfFzL3KkUR4Hc3j9SiXtJoyFxJa4DatFojSs5ZGhC",
  "key28": "4c38yXQUCeioje9BUNwPRVxEHMW4nQu7i1B397FKC7wu1eU8rBSJ1BTbSBk5EugaE72RagQEJwH9mLL72LSDxzYy",
  "key29": "t4Z74nWqpaVb1qkKEpT3X59GQcfrAyoQn9u8UhFijeTFyz5GHA1wkegbQyEjU1kWv6m8p4kQXhbhmeRPEDA7mS1",
  "key30": "5ZvVyFkhVWSnmr6bUrp4mSbhXQoAVVuHk9ZmFsNYdLGVkrX3xMezaLKczfsxm2j1nQ6zvcUm6VohStkJ9az85b1u",
  "key31": "362C56RQ2ayMSHtK1fhkX22tFiGUTcuXVk2YWAWh3jkLwzg68d7TXDt8wocUxCE1kiBtgJ3USVAuCPh9htRRvoRB",
  "key32": "3PYoc9ir8GELdT9dy2neS9FPXm9dGgjcdN57Sg2UxtiMBkFA8bXGiU1wNiyQ6s4DrcK5f1h9EAsv8PhBF9KEQZb5",
  "key33": "6fRCzpRosr8hVbZuBMZh8kb1PhH1NQHumom8Q1ifBkFaFAXhRoo4fUnjoviPmVg2hdsSKq84DoUCiFNYcB618p4",
  "key34": "4EpEUeuSQ922pguYLynpVDQFNh9JB6wBkjA1Uixy8fuATDt4Juqay7NtiLpQK6DGCcneoEnAoEKdm7DHNdWUKUfd",
  "key35": "CCCXcbbCrqjcoyWWN8VPY52TST9BucQuiMRpS6jPrmEppDx9EQy3Xue5P5hemrMfJH83wghvMajB53xub2wTKt9",
  "key36": "3uGWud8WKschdyRxHLN5P97dYB8AZEt1wqKBkdGQ7kGfzBWeYJtbBJHp9zNhYPxhjgVSTWj7hUDpegsZkHDeHuq3"
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
