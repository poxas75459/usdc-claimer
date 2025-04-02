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
    "5ThmcE6hb3QQnoxxLRidPYvzLXKnKdAwcfbH9mmU6J8T5xZruKWNJ9WoYHBTLyFAGKfu8oeJcey6CyRQcfjwobwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKh6WtatmktB4138cLc3CQBjffptzfZEoypzMbor13wCh4nikQuKES3YGbSoTbAQ8jCagVyXwSu3ctquLRUNLmB",
  "key1": "59cjC9d9ugGW3o85oaA7Y5fh6T4Bu9fcXK9xA9P172xSavET4k5oK5RvnyK5CVye5KtkB8331aThS2pkGaWiYyjD",
  "key2": "5VPM1KMtQWNgPdPVcLExWSnnCAQGGAjvJtLsoioBxaVK4P5oskMoKcZP7Qm9wG6fVB7yLgv3VaXXiDfq3tmQPmEX",
  "key3": "3YJXiQJK2aP94XkQNRYmJV5f2G1dtpnieBz4ULvQyUgLK9r7yU266tpgpyXKo22YozVw7izkrt1BurUh5DLrnPxK",
  "key4": "5LrFgtx2wrkb37kFP49ja8HBFitksu9MXLnEmEbWivjtxqnFzYFJ93GgspEt3mbrvM1Jv3XPVXnCFJyJYmQ819fD",
  "key5": "2tHP269jqryJpKTcoJU3265arui3XaDjNwun8cmKu6GNTjXUzEmC4FREhCpHbmm1cWy2W9UuXwfCF7p8JVyMmu7j",
  "key6": "4jTmroH3QzEG5ZPjTEr3miUR3ub6WNN2JjjkyeA3G3SNgBjXDJp4tKGTW2MF1Xok4VPQadLka4Gqc112rnr4AuLN",
  "key7": "4i1oSu3jf23DyQ2nsc8Rk8mKwt1Y2bNCdZRfWpDK46yKHD8EY5YkEgQfFygfNA6FCB77qjnfKW8XDui2WyKgkaoj",
  "key8": "3deQzvn7z8MSowZA47dEgnpQkxqUr9Ha6GCzGYgHHdebUetZsdPRpxmSm9bHgWz1jEcv73ZMj9LAP4BXe7b7jqo2",
  "key9": "37CqeAEx3fdDC9AZrXWoifhZfosUVdcU5fj7yYGjZEQLx9UWpmseaASjAbANwC2q1PNUKCwfZu72CjWUUM5MFU3Y",
  "key10": "2g2kwRiuoPTXMb4kkmYde2VzSkXTyGqjdsuJi4kRxbWmmxZsstmGQXSwvBUfgw6ZbEFAGVBTiD2Kxx82NJ91ZQDs",
  "key11": "3zYU67LwUnjVmQDeM3Ga1HC9sJ6jwV3qu2wPTBmc6fSJ5VKGvxySyrrtRbcDh7yP1c12EcXZ16gZ2uK1k6fSaDKk",
  "key12": "4YYstBq4Fg4XomWdSDwUYynm2nRakgq88W3YpXKx3Cj4kvyxoZmPYxjikXDjPfc4Xhoej4UBNSxV8aR35ViNMBGy",
  "key13": "HojETev5rSzwTnHaaWyBPvJhYiHnGUCqnsFGPhfBVM1phZmGSoWbb2TeP3P7etbGEbEWGCV9sxmrZQq8qfdHJKw",
  "key14": "4XcHpqgviEcDqLXfdpXbE9aqSqiHJsYYtr3aMxd4PeAfkk8vM7C3NHUcvbQQFFSu2JFg8YbJ7okaM2yv78SfabcB",
  "key15": "3uwNQ7ZD4oMLp2kvWRKvDyqiPaetZbjJueQQh6RJ9t528wvT1sHkHZvZk3NTP5pvdFr5Qwrrfq1TnDsNGwC6hBYL",
  "key16": "WgJVgTmpdDuDTHRxQFfJg9Z2dM54BfNCWqupzrc4ZiW9apTvySVpDmEButDBYDsLvP1dBtcekzqZYxUeMp8UbLe",
  "key17": "54gQuUEyx1TFzVZ1c8AnHXuR2ZG1kN1nLkZYqwHb2622FUgzmDEe8W7GH1VLw6rW4DEbrrJqvVVRBBSTDmkqSvde",
  "key18": "4rwtuydsqk5P5eHuQ1if1hrQcBaw5RUpKevQX3C86BD51fH4ftDtQsFoSGBLMufBhNXZagFfXZ1erJrN2bVeiTgL",
  "key19": "5kc91dD79NuYRbkfLBH1oRRAWih3QbEiiqNmeDw1TTD7atYCads1adZcmWkby964c8YrNEo4R3GCsensKRHj3wiC",
  "key20": "3XTzTVfkyA3dr6pgk1Cd9tusFKj2QfAtPVhEtDZDj35LV8HP6pLzDvoX85op3nVrvWR3S4dZhS6itzSjU8SjfBXs",
  "key21": "2H9rjdDoFHoGH3HwE7NUxXJwEgXDwmrUUMkJLznB2WUxn6fXZTCnPvDAkWkqWiaR5bW3ZkscRJRSGNFhgfR8Rx38",
  "key22": "5LxxZeBgB4GTGYnS61iTn4X52YLYDCE4jovaE2WpCae3Xx6wkJ4zUyZ69zPH9rPFkMriURWYFqxZ9DTcvumHUsR1",
  "key23": "tYVpbacdKYGifFR3sn34HwTNrugDH7h6V5oKA4TJih8h9xJzGSMatgxJfSJ68nbYRbgxSMnUJzYu8jxXyCKnwsi",
  "key24": "22eSZBEuyBJg13sUQzvrpwTzutZXMx4J3rZZjjQ8vhfPimh2re9HkUCQcTKjNG1GxV7gePJwVWVctiq7BmptzHeo",
  "key25": "5w7EecnDxxrCrJwqb7tu4E1PkgwY5snFtgJgT49eJKzyGhB6GsEHCRnWqFVjGmKN66GBRB9ke2tUTY6G5LFDoc8k",
  "key26": "5e46Jdmn3FzUXeVgdcZkj3P9aoyCLd5ZueYNhkxL7zRSFXLcHFuYC4p3KuCx8KfCavsV4fm6nMZdrqDH8y88Kk4f",
  "key27": "RsQLjtaZ1ty42zvHQ8cdLM89xSWczXBrqx3BJFeJ8dQKgdpU4AShpsTQDGYWFgvRkKFYesRjLZmuo3RaUPLnRNi",
  "key28": "3hLpcb4EF95cwfYKSVUMxk6BDu7Po5YirxFNnJwzkApw1jthBPHz36SX53XU9tbq68aKjkcJGLeaqzafAfRF3Tzz",
  "key29": "6d43GT3ZwD9T7tZ9tX2z8FX4TVhbiZsbpKUQ4DUUqUamHhFzQLw4VpmCkSfXT7nuxTaaXSQjdA9F9ay8Es66Bbf"
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
