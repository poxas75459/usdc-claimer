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
    "5P7zxe2WhnvSn4P5eqhx8omJQY1XbyewUd6JFu7o2t7DXLG9nFp4rCwBw6erNGyRK4TQL9ud674CEHtMGaNenUN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "292B6i3kYvgVouwiDrv7C9sxJVe6C46zTt1Hg9muTZU8oGiH4syKVqUQ7pjf4XH4i3mwkwkiwmoKhBJ8hSt1Rx9H",
  "key1": "4xfgn62D3otwSNQ7L3HzPukUzdTAF3PEfoBCBV8HpJn7rGQtwGyQjQNkEDPTasYXAfmV9GELAbRrtZ6Dt5xipq8G",
  "key2": "SpZydhB2DdEdWpCsFiaesxyyR2kbQh6u5iXpgzhpZyc14WM2w9yqJ7adWHqoKAxVrgodC1dEo75MnqtyY4B31Kj",
  "key3": "4opq5TKah88BvWQfnHf1xBfqzA1A2D8g4ydLvkFp1dqvQV65NHpab4wsDKf3YEPyYxB6Fjzr98v8ce522bU9Lbpw",
  "key4": "4E7c2EDzixwWFBqVfNAKS7dpDWrhsz7jz6Svis2J1YzF4pirzvzRXwKjVJMrL3giPmNp3vX3sNtjpe7aMkgyQmZt",
  "key5": "9skE7umbGqgrMUgxbsYg48uzLZDKecLWPxQLx9kTGZuXSz2i3PNHxVGXPUv5BspV5d4Xi7XBB8YUZVGgSF8SJQ3",
  "key6": "22DmfkX6Zo1HMwQ7SA8rw6CTZxy9Mxxw1ntAvaWDaQh7ZcSmJmxCa1ZFXMYeHnrqiu6MbNcaEviq5JtRudA5pBou",
  "key7": "4xryd6s36bwjinXZBRT1coE7suGZFNNedPS4617QRBstPdrgNXLW4eyLgdGDciE64mP1d9TZ1sV3akYtVbAMicja",
  "key8": "2gSEqKDpgxW9LkwP4g7SXJxCsX8c9kKNL56eyW1dxYwACMFnkrJ1X5mnqe4gKi8rXzRKQ2QNKjXgKawcppCoYHho",
  "key9": "5K1et1fpG5vHhN3nHsaFKgBK2drVywp7asdQEtYVyprG7YLj5Na3P8uB4Gsj7aTGgvv3JeC9WeiKCZZDec5JKSKg",
  "key10": "HBoj957g1ga4xJPueos2YVdDSecsh4C1kRcP3PSj3QDV6X4pHWa9ixunxs4JGGNppoqW36w5nS2fqJmQ2t4m1hC",
  "key11": "21raqY74tXB4BedkQkRfLBeQMkoh8ERcndQTYa83kuHqdUXBfpYEkA8fSPXFPqoDqvBqpw9Ht1jmaEL3toe1bY5x",
  "key12": "5MS78Ga8b6W1SzjNiCpHNWohJKjgYNkxiAJ1kWXoS49z344CN8ZrBJjCrLAWzsVPaxvMbjSY41aS7yjVbPzXjhPz",
  "key13": "4bmAfEpeqgaBCThbyrJcuaqoQcYTZagPQeTQjDYyWuun7GKWnTMfLCN5Z42U2n9jnK6jCD4qupQnbgcMDQsXGXP8",
  "key14": "57zzjvkvAF5dfn8eykDrXEQW4daEBVDiDZiRpKAndqWJjVDqsMdSwi2oGt6tzHkuKFNmtetTZPjFG8HPum43gZx6",
  "key15": "4Y1d1ZPZXamCv24KAtj7RgKYRyBgWMEe5GmTauZnBS1jvqvVxRuNfMRu7u4YPRupsQpttVGqBuw1ryhqeD1Ba97n",
  "key16": "ELUZeLpD8HH8dKoGPKXWrpovHg7JT11aGy4TKFj9vJH438NXkC8q1Ae6wNmj9Efm6SZwegtKnYQL8xoCSburzpU",
  "key17": "2PjDjFwWMu4gpF8SmdWarHdvvscUXLZEVokPP2KdAEAgsZcBMQHMufKDPwrSeerZcFRTw1JrEsj1JypBo7AFMwiU",
  "key18": "5L2Zm4Xz2nT1kS8Sp7i86ULk5LKrxN7B1yZtfUkdd16fAHRmJAMoQu49ojBmehDmj9D6rNezFYXvRVsFU3LKR83e",
  "key19": "3qQXwUK6wWoBEMp9hJTUMJ4mboY68nnTNdjfS97n885265VR7qbkhTHRX5mrWJRqYpHYWGJXtvuwCPYHhUqdj8sz",
  "key20": "2W2whiuphUqxfi7scbbLuC2YDv9cN69basYjXNBFEc8rnrngQZkHNKE4tEB6SxegoSpUFbQaYJsvCYSYGwCPAMzp",
  "key21": "Kcbyq9wgczJJbwtpbYdrAGA93xgxbmXPjmvserdWxKUTdkzLZdt2f7t6hNSifhx6GwgQctvcLLWvBENW4bM8F4S",
  "key22": "27uDtGX4EhthccEzAK7V9wqbzZHpBZUvcjwpYWNykjbhUU1nGbiKJnPYeVnEeZCfRGtcVnCUdJx77Rbgd2BvdFHH",
  "key23": "4iA7STjLdDt6RjgAHXfkSuNZkZdGA3VgimaYp4Yo6mNq5JKvHMi2MNbXj7AdiJQHEdr1RCSpMJCMzKru4tJRBsU1",
  "key24": "3GEiGc5putKY2PXVC6KZsBWwUSbT4JUYC4AxaK4w2dTZpGhwNAkA9VTKmMeCic8wg3pHCLmP67kE16aW6SDbSh78",
  "key25": "24TGeSkw6zWPh28w2P8nFR1q2m988bxACo9TMnq1HwcJqcBLBiohvJvsANKTV5idcfMERX8Df4wecNnhpPhQud7P",
  "key26": "3Gs7wdtwgjFdiDHgckeePtW1Ad3i9H4gdCGYGs6EXeVn3D5LCdMhTFuML24KJiyLzgYB5pi3BWTX8Xe6jf4y88zA",
  "key27": "5SxXRh8nMxpAPfwTQc7SosNGAPw4mp4qNN2qKp6s4Sj1FqYpJKdtbUGW3JQkZSMg8D4qYaz6Ki6syqNpA43BtRZc",
  "key28": "3hAxAfTbRCwtGF4aZhzzbCJfe3xaienzuLrwp6Ae9hnKNL5f7RW4vnHbr4eZ6ZRCEAeS7KpR8VUwLMRcvgnay3kJ",
  "key29": "2aaKzNXg7QgPD4FA2fqPmyiDvieNf3DgYeHVevRmNzJJfAjfRaUKZBZB1YTnqeA4kdUebCgydfxxTWqWGbrd8hC6",
  "key30": "tLTPv2LMPhsos47caBRMbGAYepBoMHYCyv6QFexvS7Mp1LiR9q75493AjZoYkgAdtpnyojFb7WHHiAEBz3NNAGW",
  "key31": "2iNXn1TYGKiEtaXqQ4zfaPs891drukyrQwB8JwGQVGf4UE7gvKsEmEPsJntU6rjJNseAXJproPaB6STvMDQ2p2aU",
  "key32": "25TREa5tLHmen8i7mvzZcSmHnETrztRnwnKwCYwWasGSGQjtS8eHGZWL8tesVdSpcWmz8cY3LFmRbqiVNfDo6f4s",
  "key33": "4eufgi4G4we33h8Qh2CQdvLL5PELSTRCWudHKuxQWcC9ZC74qHNDSLwsTVjAaehbq3BJcFydxPxqv9py4KLB5Mv6",
  "key34": "nr1TndcD3RA7BSZQuZT9AH55Qrtnh78BXjeKsQZNiFqJ1temgwPqkNe2B5a4SyWtfa823N9guLUtX9nnFsn6w3y",
  "key35": "22sc8TmQLfyGTUyXtGtoitMeAaaLMAM82Ue6SC9tz3FPLj6aCdEfh5CokMU1YB9DRZ4FhJs2fWLZAnLQfLtn83tE",
  "key36": "3yRgSckc4DPfey5RqZwpBiXqxtPiPgqtmBu2acYAtHtQKEedBLFxJZwyBPeKjHBQkx5TqraYLu7NJ1CHa8b374rP",
  "key37": "4mWG9Xr5dsHmyCnRwUKfxY191Vzu4d9obH2dm2JADf5hnsVfbdYM3gCDqoV85STX1fSAKZec2uZ7RibnhaDjwR6t",
  "key38": "4AgD8RwA8AC3ygSKXVqfb6BrgPshEJojC7TCUMoWEPkf5atZipqu3raqgzxN1rsxnV6KLuocAE3VJQnpAokp1G1C",
  "key39": "nYYWBGaxQ4rRskUyk9QvcboMKtAETMiWAWSpXz1LPmE9NPuse581zVkFVPwWAzPeXx8Arei7t4jdJwmkBV9PRQx",
  "key40": "HEwCabZk4D768K6Aep3ovPAvdqWBdDozfpGngnEgcqdLbrp5PDqzvGN9ooUSVGeSTTn7xa58zNsV8qYGusHgQqH",
  "key41": "aNgZcGiwsAVhwzzEZPujY4XEHNA9APQr754ZRKybvX8JCUqX34AbbeofazHYLgrV2ftvqBnLeyBct4qnj7boygB",
  "key42": "2rYTzgxtGWtn3Kuhk7QG97Abm6FJkZz2TeVgTdchj9huvwAxPhYhniwCcjUNucN65dMYBc3kDCsDYMXivy8VVSZV",
  "key43": "yGJRwUSsN6qPLxnRoiwrnM5f7RPaz8NBdFprBRCQpinW17eDwot6WP77RJvxEjehbJCMi3NUsyxXU8YNyWvkQo2",
  "key44": "5CtfmR7vxxbmq7WgJmUBPVfy7KTZpqPWREFX3hujorWfmS5xpd9ckfPqz9uJ5tSfFpTthHacsL84fvBNxNhknQNE",
  "key45": "gaWeaMvQ9CEA2frVJj9E7SPdaxaX3XYN6DbRHVMwcZycye7KVBYDheeFVSPiteBtNdCLqFyREBzsCvvkabsWLYp",
  "key46": "2xt4cEgpLDSLJ9pJYTndwHdoB5QcSkDu9SW5o9vV7izssafdQQ5Wd4o6pc6KzCM6gWLTtvJdA8YfxVdtS82eJBtN"
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
