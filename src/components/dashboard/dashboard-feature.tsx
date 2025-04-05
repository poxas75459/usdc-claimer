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
    "5xajeeNrnfwwxw6KzKp9MiJPUDiZC7LEDab7S6QQwTSJ3qkcXk297L47mHXmydzbYs9SJcz6Xk1PdmKVb1tu3SGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HbLqfZheV6GY11r9ZSKdu6Dmkm3m3yQB91uEzHj4yYVMR3hKTectpU5UDHMLfsYm7eBpLeJ12SW8nkvAFuHR97C",
  "key1": "3rUxzrQ3nRmuoQqajaAVApbvUDTuUxS5ktJam8umNQ19Zqzh2zrUfGVMsqWdKCxjQZhaHQ9RVGYSoa14dK2c6Kmy",
  "key2": "3uBThU5f7vSEm36LsPpBBQb8x4SxeDERyLgzERcSzNUp2jFCwhmNbrznNk7wawhHx2HdfoNQJ4dkYEeXmuGYV5t1",
  "key3": "259n8b5BRc2Mpx8xMmYy1gQG6HvjKwk1sCyUxp48LRUJ4hm5jzadCKSTzfJSNq8JhXnAgpBco9kNnqyBPm2NaLCq",
  "key4": "me8LxdJGSVkfJit9WzSiTrNvXkKhY3HPbME9bGdT45a5j3rrT9FKQ3CBQcRnPRkpiCKUR3kCQCkSC5EUrvubo97",
  "key5": "4PBxkBH58dsqrvzZBusgUPJ9JfrYWtcL8Y6H6BViQniKtupgtg3fs7A9y7hbLiN9tjsh3eecrN1WxRwKkwbZjfoj",
  "key6": "33iJX6ALpMyjajJsk1965GrpQeHJUL8wLF1kWV5AqwmTwxqduuXQ5xpTCMw4sHKdSqJbjDimMsDvCYmDYGGFhrAX",
  "key7": "2Vvrv1q9y3iJjvQW1WHqmRz2dZuBDhLWezpwmkTwU2ybioY8YvGnapNFEq9PL6qYq3o1yJZ681FFcR6fJsGnssPY",
  "key8": "4AUuotyRkJo7jVCFWbY8x3Lg4UD6SmPrtpAWMKFygz925jJ45m1dvGiNJkp9esjUSXpopuHjhoduMzqi4XeRf4WK",
  "key9": "Z3PY1taSu1LAgh95Dj1bF19edRGCssUFwp5KgKr3t8MHP88Mnt9Gits5aemCYwmResGgnvNJZToQcNuss9iNY1q",
  "key10": "5cPwDVj5ZzhVcwxFS5KeUgqZUKJgenacfHxSzvfBPnjMg32VbggnHkDuLYBETiu8DwJteC9BsYSpEw9E4vx7m42t",
  "key11": "3iF1wQtuzNk6z6Jhuroib366RRF6gJhCVGjEsNCSznQ7B8oSVRrEBDXjZ71YMrFZ1qC2yKkUDKfSxaffGXU1HdCr",
  "key12": "45kedxwDVK6zh6HANstEkQ7iJEtwWqmX6DK8PZLHfX8pRPerM6K4idrKm7bTgj7ViCy6BR86E4jFtNpgbrtCCnyP",
  "key13": "5LgbSyemB8ovh7ePDorxoqaexGfRKVFcUpLk4HPSs3Wt5tyWB9voNLFzhApvNXmp1H3KsCwtJ72nF7HxELLy2NDB",
  "key14": "59LcQ1eeUZ9BVV32TqSXxRN7c8mKv39BmyDGHQUczcddijJgPbZNE44m6oyJgzmhXbmu9VBz4D2z3DUkywLZ52c8",
  "key15": "6dbLAzZjiL8SZDwCjuaJBHJKNWr18rFRiSXWPvLJaDvxKauyFFf2bP4XQHAXGQG6SCozp7dvRyVgioLwSPToGie",
  "key16": "4siAQU56ZKMMFSBLC4UZBV6wrNonk1XmMEqPnGqWLnivLodgLK4mo9CJQo8a9cLZi2Dgxc2yEGaj5vBBpL1r1anf",
  "key17": "4LDqUDDvu8yHY7gDhnSy5jd24EgyGPZCHPZJmhyVfBHou19ZLaTKhHTxPV2Bmr4ZYicsiVwgGY272sWPEQFYBXT7",
  "key18": "5qUSaGSXkbVbqFetgpAdQ4Hw4gm69r5c8f7mz6efnzVG8t3Krx8aRX534sgT5hZsVu1YJtvuXqHh8hD4rQjMjwAv",
  "key19": "3JzmBWhQfeyVo2mbMCuXvtmDHqQzH6nsj74oD5i8pxzy1a7dwTWkJu9E9E1kSjH83MXce8xxgCQk4oirzZoCLM6w",
  "key20": "4eU397BgtREFLEwvNZDtqFC33duJucFLZWUN9EmhJUyc21za6xuVmnGKXDPFEJ6UAgQEQJ6XjgHtbTzejJNwqE96",
  "key21": "4GtMujBekz8U7rTXdoWs7UdPATBnhaGUErizbPZn88EAmPSijsc9XKNUwoxhRLUPaJNCJ7Sru1Fge3m2fTvCkXun",
  "key22": "shszFGNXxVDGEmQc16jQFaHtvXVv816P2gqMY2wp6P3fnLye4fJcGk76uFqGZfck1WYEAJVUoCnfMnYMAc19pjA",
  "key23": "qBSPfD9Y1HS3mhHTFR3nbspUVwhmRX6ESrDWRW4XibVwpyf3iRFYQGyxJMezfxcdwWRJ4aRoAJ4RrVwiEjpGAz3",
  "key24": "2dBBf1xnyAKbFobZqPYLvp6HUvZmhWgTfQZBrLJCdN58vX2xtcVPD7YCFJdoD7hf42U4p9oqxCJbAywNRqG5v7a3",
  "key25": "2gt9zWk9Ndj43zdfDTJsX61FPxrtfGYuADtt8fm2CEDtMtcWXJcuohBkJjZxgkwfXRFqwgvpemyHxgzYSh6RuHR4",
  "key26": "2zKJ7AoXRkjRYXtfy5WpfUE9pRGCJ6s5xhXcF1S4sJF8vJt9cRZ7xNnQHwSLHnKHYjKxsuCERGQapdkGLAsnzcVv",
  "key27": "5u3AjoFGXzXofJ97TpMy4z6rnomEKuE68kNFTSJP17iaq7s5e3F4SrhoTa6aVd7oSBGsnFtMHLGzHE6JFVicK9Pv"
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
