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
    "2F2Fsy3TCTbVFTB98h5xkzPWxYhdz49epv7RAye7QfpYzY3AmdEAC6HTpunMw2kkB2MHTRxGXg5L5TJ8R4fuRFdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHjtMCrVcV87HBpM6nsT9FBnUfB6fQ4Y4RfYoUPfqneD67XDkhhTdQEE7dwKgTr94s5Kq3tae7x7pCDg4JmW4PZ",
  "key1": "31xGnXRoatbdksgExCAzCG8b2LtSkQwVLjUVjBF8R8WooE7XNp2BuQfxKR2cAesVuWeQteRTmGNAFUURgxjy3pNK",
  "key2": "2nJvAFTbi2kMarTKG58TbPtt1UiMbk1cs6UUro5PrCeVHwx3HebnhbiEq5VmtpNLqeTXgsyKhCVEb3e8Ky19TW4",
  "key3": "2oUcxFZinNGnAt42bpE671iVqtGH3txY6q4tSwpmAKr7tEoByiiR7kLtE8UfQu6CRNiWKn2q6hnYWGNms5q3vf14",
  "key4": "3UuNMiE3CUKkSrtHmEUhfGWnNkquRuse1nG94Jw1HP8cm9KsWLeSHyGGMdGeNwokVHUBrL6qoBpwu1WXDLH6Yi5M",
  "key5": "2xbD9W6ZhRbRxy1Lk1VWY18TF4ERvye2H6Y4XhhLncvKMfkGPQ6GjJBVWiQGx6UHd84KYXsb3sedzdUL8R7XMrwg",
  "key6": "2ps54RGbPdmFqxx9ZDjJiKf7M4Crt631nrm3i8uL1NQRGENxpA9DzpyyYjYZQBgVkDTK2MQ3F3JB1uFDErNGGerk",
  "key7": "3nAQQTBXK6Wvj1zxdveNSrnxENFD7ZzxkgPYoC8JhyVSoRNe5ipxJpPnaGACoYvBXGK2CCBs3QSwiDcyRA5YFiGs",
  "key8": "2HS2y1AAPNuUN9BJsPLEApvx1DnLhV8kgBUUELhtCnAsHZXnR2oPhSmgKYcSpBfxPeQzwzAYU8VLZx5avcSgyLC4",
  "key9": "4Q1dBHx6GXFH8cM97USqVT31cGX8gLHCeSnRq2hvefxUdNu5XAb4WkaraguzUg7PMjAZLjRnSHHX3CQr5iAApDii",
  "key10": "4aupFk5MXqrAJrEeUUxKawSMQ13EbMukKjkYi26mYRoExAKSuCpbgQTSWQ2EhKQW7Vwnu53eMzBb8mz958LT4YCj",
  "key11": "3bnWV3fXuNDJUUsRZPxYjxEzdNkxiU3YUCC7bwAhKihujqWvrFUBviiYMhd1B85ynqPBULhY5js9uzNjFAYNDgMc",
  "key12": "25fHbe6JoJxNWdrbB95Y8eBwTN8wa4FwVGcpBxEba98NTPxM1PJeLvrtx7TAxnZDyX1gqNMLt6WPvsBbsVkwxopT",
  "key13": "NFb6kcvocr9GsfmPw1debFxzuq1sfE5wh21TxyJLzheHswynjMaGrhvPzQGt9VxRZQFd4GAUxVJo5ALYqJwUJnH",
  "key14": "3s6yfAiQvNNWiRhks9ckwh9rLCYX1AxBQztQSJKD9H3Bmaoca17Mquu8DLWQMGUdU7AhDixNppTWVijrhPDwjtpy",
  "key15": "2FCyuJQefjPC9FQhZ5AovTZ52VGHkYFxdYresfsMsx6nxTMTe6DmgqbUFsw2oBzk7NBph3jBxsgRTSbxpmH7oimo",
  "key16": "36Ugfyy1tMBhmtGaHSTZNjjvYHjr8TpJE2xq8QJ1y3p8oZsSixRYgo8YfZ5KjM3goCj7mtoNz91rwzBSNS8LoHLh",
  "key17": "29mrwnLoe3CfV4W8JVHDqn95cicWpu1Xm3y58vmLNz2kSHbewLpq8wwxYuncT2EwMbgAkkakH8cpXPXdChPgDrgq",
  "key18": "4V2jXvfuGvsB129fJcV8kFJZJcLKRvQe4hKGGvXUCzXv3Rwppuhj6AdB3dZANWUA111f7cTDFxcA1cuJyj4Y4rR6",
  "key19": "3uy7H8dHjNiijFz9BmaQ5iXtMHPLzryepbaw7WrSvFAvrZhx5iwmBiv1vFD3Xo8QWRGJ36bvrQYzuLhtJS9FH1qW",
  "key20": "53eJNRYuxQit6ob8Athf3YUMyyAUX1Mkc84Zc9G25Tt9ZhE8b2kcgRDXFKthSxWxyyMKbHJv9Sx5eMsf8nKvsMFT",
  "key21": "5erAnML5QJxUCHiUuUmyvmQw3r4TQ4EhPKmZKKCiLUdGY46GkinbA5MBmqCKPgGMnjmaZSdx7sA48axCqWkGnoZ6",
  "key22": "2tqJA1Ft43HAZkmC9DRtbXGUzhbeTUZ1df2gWoZGfUwYXj3WPUt4uXrVkUpe8Mv1EaNSoo4n6aJ9oox5QWrXGFAR",
  "key23": "3MV75R8CKDj11mamE5aamsTyBD9w39BkJ6SQJVM2uxG4wtJDJVGvKi5RkRw1dB38iQYvVnrfT2TBwQUzeRMz8zPG",
  "key24": "5janhHJwB2G9cm6cstYNGWWURZwtyxDohJWo3uXQpqBY98Di3TEWJakM8z1TkwcihxK99aC5iss41v3JcMeNMFju",
  "key25": "5rSB6Ui3To4rKXU4SxMY1FBzyRTzxdssaUcqYWRgAHTndeix3t4YfZumTHiDxZjxdp7Gm42qkFTvz7HFvJ1KgvkB",
  "key26": "5YXP1phJECQxaGYrVtPhr5ceyr5P8go4J6qUWJU6R5YufTdTwvCBwcuXySMAx64ntXpvDsSfd2y9cvYSFFg2evJs",
  "key27": "37yNpiJiCa3nYpSpc85ynCgmcPDB7nL6tP6yaYYrPRfx5t7f7UNwWZYqSk4XRaePATCFLSA93kKtAFDbpASy76mB",
  "key28": "63gL5JZJMKwvghyB5iaXJ5qezsTf4FTuyK3oD15fJZ8etvb8oe2B15qVFasKzFumzPH4gqrmBbv13yP7JmHG9brH",
  "key29": "4SpydovLFjesZ7c9CJxGqRjBkfRUY3zHjqTniGaiZ7UrsinwngrF1jndB9zf8qPBaQkxwitUPnyWNc3Xs7J1ukau",
  "key30": "2DATcz6tnVa8wycpMLkjfLVmVXs7TsamQoFx7ZM8zH213pezVeZmhJb6PwtYCBeYjSzLM2jA8FZw24esgPPDu51J",
  "key31": "kBf9LpSYd5mWahzc7XQ6JGtAunvdLkUMit9s53FTmg3BN3TXgvyzCX3BNErhFQSFA3MtJ3qgZeGcgZrbGGem5EZ",
  "key32": "32mEmasDu3YVJmeyKyXAursqJ7BxrA8mFqTV4ReYNJW6cvewvsibRCCRgK73aRkdHk6bySjB8UM8qZMV7hmqax1S",
  "key33": "3ttNyzSpPiKTpm2QnfHngyii3sxWM5aWg8jjjvu66rDqix8fT9yGof7YRxKg3UW7KkG8iKXySDDmjhW8RoCTaEZa",
  "key34": "21U8pEPPrvNbQSUw2oFDpXes3Xfh5STUsrgySNPyK87uXZ79A4PCwMJDtF8KPoieykKLLA2mgh3a28f8EkPXKw7B",
  "key35": "5J6J4ADJ6Q3xSK3dxEawtkoGFd3jPp3fwYLsXp5fgboRVGiWFNgr3gwdCAdbKZ2jGYQHQ6bQjfubwwZXrjQ3iZ5Y",
  "key36": "629y2N61kbwgKtb5pTwpF1CTgUhnHbRi3Sy6sJ8JPvECmyqFmieSvUpGu4FjxFPcbMyQFpyAX7qkR2pTxihtp7aF",
  "key37": "31kLq3zWT8KgRAJQ4x46XW4ETaTj8GXVQ4rY5jQFsCCR4EgL8FTwcVrGkCq3BCpai55ZcZ8Zv3uuxgKRogiJB8uw",
  "key38": "2oL7UBLbQ2DMYoj8UXcb7bcnXAkkaz89BgrWhvsWRkoRDz8Y745RgoSHxBQdTScT6Yr8M8d5fMcp1BGMa2mouBtF",
  "key39": "5f6WN4YnwLymXSvBL4xLEbD6qtHwv6dhFmTcFennUfdFRD4tRgnLBdXunb1WQPkTWQQLLCaAqhuuAHzyFDC7F68Y",
  "key40": "358rGfLxRGPUxsv1fUhMouk6Fx511oZXJfACgE2qKiF9N2XW8d9p1xHoRJjbYK67kW6cwGkJ4LAmfWwZ9muRG8Tk",
  "key41": "4MHzxZsRqUaEnK6jYkZNnAURM1aTdaoAnTrpTcZ4oba4wV5vBKa43F1XmrvShPudPvA97qLwkWCzwHDvKe94bhTP",
  "key42": "asaaZQuZ1buKazPohUeXYTQV7P64eD9aELbAq6Sq8FTnwJZQXPQqGsx3oau2gTrFoYwgeLhYngUbDt42sv19k3x",
  "key43": "5S5tsYrptkHqTv4gGhsR11MrSQHr9pqDxhTVhjvq6yBmU4zbBydXsD2J632BJVtfuxcGST2hbET76YZMoELfwd4s",
  "key44": "4SkWRpgvfzsRJFWmfUrAmGK9X1wsrvehkLeCvsCw1fhAkvd9Nb8fYewJJSkjbR4TEGUvaGHe8h896BzLXZGxRBsP",
  "key45": "4qQKv3zkRYUs3hXVYJZEy9xQPXmxmKUcjSMJLnbEThqNhb457D5neMJckY1ZxXhJnCYgPrG6mbJNqbWhajfWSry3",
  "key46": "2cx3snQQMhGcCoCv241pkUbqYiQXzoChD4pWLHHoZqn3jTxdPBNV9UUzABcgEECZLnTBa8H2ZKPXZh99so71gR22",
  "key47": "539RGyGBnimML5fz5EUCnPMSGf5Nb4St2c4wmBj7noDY9sEzc5tspjasPSJ1ABo9LA43oxxiytWhDjwXHZiap7do"
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
