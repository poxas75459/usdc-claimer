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
    "jBbU4XYzatSA57mKkvT3ST8ouTYT8muSYkgQe99gBhXxXAcW63P714AhTi4CuZsz9cUc7KYPzqMbHckgS1E288f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCHgdd2qgTjTpSwf5mmX4j6CY3Uj1anLF4XTBuYMksW6BG8drBvEng791NznPtbafw5bC3UW5bL5UqzJAjNrXc4",
  "key1": "66dGZFj2ee7qWSNYTxnDbSDfbW8EUYr9TCMFAYvhfg3BgQRf4XBcp7QisDjbnkohsFQBqFoUeag9eDQr54fus6ng",
  "key2": "3e3ctCaXc4k9Q3k7yx9RZ4mVaaiHRV7PqppXv1JRR6EfuPVUVToUEja1iuM7eMrPWbzQEXDBxUavE2aYKPrTqEdj",
  "key3": "3ZHjdH7yfZPhHfHqjFcDT1nDwRKTPfwFx12fgeHZ8q4ETNEUPiZb8JfuiPnFHHKfW63rGTWHEReai8em19EA5cWt",
  "key4": "2rDaATxvTcJm392aJBeLjv2CN7D3Qk6aMobzMXy647JsPaigk8nkgMtYFpn59uDvDD7uzoQMJWPSBv3m6V5CJ7Pm",
  "key5": "43uRRg8yUtbfP7yKLAopxvcKqTDLCToUz5NRaJWUY6nabXwrLxNqKUpr3HB5S5RocBer2iRDL1nn6RjBXqadHx2F",
  "key6": "3FXqL7Cgzsam6n6merA2jpJ975wEpx6hKsZAFEfJL9VFJKSQsaBriExsdZFGbpNvagE6wQeYkNvH8QTbeqdAwcDQ",
  "key7": "2PUUJiVKq1ZSC75RUJnp1AAXLw4S2WoTe7Cz2LDgHvwzXZbuMpdp8SfHL1M4dkkaetwE2apmCoxQpja32FQTdT1m",
  "key8": "DB695ddKVWvNhH768PM1bAN8vTdUa5ejmLWityGKvTYjvBkt8RKfGrRCXxXqpS7NfuVgDJcYVNxVP8p9gMUNJBj",
  "key9": "3TSeMSkYsEh4yVmwavSRQqdsJH6YFUPkfXJpFBe1nUs69Ss4ETisU4CCK8EKLFGSj2u1wyQTBRmaPJ94oZuaJfy9",
  "key10": "3iJKBjhY7yM1DeyrKzXSr5Daa69Z3MZNddRWuWH9eXWoqXWUNWhKQDDA9nFY6upj5ZwoyTxXXUN945Lzy2oJqzEd",
  "key11": "47ctMJ1Gkvt7mxzEnhKMqU7HH29qeuccSDGYpW6Xo9iobkWMhWthv6dmnCnLDVjJtRh2XfPFmJhmB7GcUbsG94vg",
  "key12": "4XYPpEFQJykkrk8bZv9km94B3wT5Y5nZdBdZgpgejGQ7PycxqK86MbXy64k2k8Z5GYr1XKcmYc9XtHn2wzFb2s9N",
  "key13": "344MChy9z6WuBCGbjTV88zKhjWVw2YRR4UuPC949pYXDz8wqHhHeKEUvUWWr1kJvQE4Nn7WiRRbkM35acY5aWSSR",
  "key14": "5N3W79KxcyycA8z3Vu9vW9vuBNNqqA3XuGtsmPYXcFTmKkLgoiZ6gkxNDgUym82jbvwHqkSeBFLkkfnUhBt6d1P2",
  "key15": "53pdtrkdyvdVxNMuwLKb26c57kDusbtRugsGi3niLh9BoYsFMBsJdYd3wT59mrNArQCzsFc6TTTZvGWt9CG1fCbz",
  "key16": "4garxvkEiZ7bTBVp9fdPVN44tb3Qb212tic8RM7XVpNz7cegCkusTUu4BHCxTgQcPtnC13Mx2pckBVoB3g9x9fVV",
  "key17": "29Web7QcQwAQMd21kdPfTWS9s7g6Bc4NGWpwZSRmZQAm13xfXnb2AUU5tEafxt5XUyy3KwirGprE9DEhmx7goLUA",
  "key18": "5k1zYLZtBBk14dvumSyN9WdofwNyg7Kq3mW7QXjnUiTBZFFXU7bzBLiBxBjC9FZjCpKKPXqmbZUshFtADRcFy4KM",
  "key19": "2PEtSPnpPVVenhAa6UBgkFDZ1QXMGJsTU3zDqr3oMYy1UW7kR8hfzhxizGzKHkZLiC77keZZWKmRnTADEYsRLy52",
  "key20": "3dy7726WwmfmxH18QFQEuX197C6AFHkRxdQUnjaGHjqRqC7n4y1Dt7hqZFycKQr2GADrnDMHQAToiRzFghCmL9zU",
  "key21": "58MexbvVQWtwqVYDjy638gwnxVL2zdZ45NRAg4YybA8tgta1aLwoPAQGqgUacGQkpUNkhdtmFiZxNJNACo2DP8Sz",
  "key22": "3zeEDD4VxuxxKk7iW51vPGm1Qjd7R4PE9bNew95t2j6K81B6dZ1PJZNPwCEJjJQcrYWWwfG2uuqj4TgWSvd4uvMT",
  "key23": "4HZSkJabkwpJpLyfDSd6mrY8Wj6fyYNE1wJ62EUFdARRcmoG8JbDc44aW3J5YtknYSYiT5LCVaB6E8dxsgmXnKHy",
  "key24": "nFS8QhGce9iiZQzLCzjzEASxA115dbvxnQtZ5ZSqkoPR442Kz5dt2CFFK7QypcoHxHekdtN2Z7wAAduXfxMEGxp",
  "key25": "5d2b4CBZYQNSZCKPNDtrs9pwrVGDVdskrRr9WsXpVxbG7dVF7tQtp4zFgcW1soCbJXJdtcJmNSxd9uiNnhtkhswr",
  "key26": "5WXBzDGdTDK1ne9Z9HY4pgZgkqvHaqAGkg48BSZusp6WxZUxhqZtH3y4G9zre49E3KY8GB8Qc1cwWBjG9tM21GaT",
  "key27": "2MYuSvJwtw5XaFHw8fPYC7fCzin9FyaPmTjJCVysziKCnspqHwSCmrcpSuXKBoaYU2ovgwfKNfzvPkV47GdyKqFM",
  "key28": "4ms2BTQoDsboV24YEkDU7VFt9q1SN8287n1gULzRZewFnS3j44dfnDP6wTqj6cWYVLSohHeb5hcEpLUAZZqqkaZc",
  "key29": "2U2FxnUw6UAW41nF39dy5V2hcjJww9ouw7WFvtUUqLVMKkFGhAsrLhDxa64qv79ekhSKk5SKDAp46zULE5koi67o",
  "key30": "38UjBVY5Y37UZpVDixTFWmy4cqAH4WFfBHZg4PffhMQg8kny9V8zYpgTvgfbiHvnXXVVzDmD3ARSzWAz7XjjNazE",
  "key31": "2VsdKhi6mfwQyLinx6iiZmAxSRP5rJJexYiDimwtkuRQXsFA2CbX4iDeFYunXxVRgDGmQQfsXjdNWyKdq53ZWX5E",
  "key32": "2j6PUAgdXWsvjCQehYcQkPfJPeE97dRiKNjBL8rXxQ5vnS2mrKGXS3QXF6ZrzBB6vPHd8ifMZKmywyGGHBW61Yfe",
  "key33": "2qCm4YTTKag6ASLzvEN4vUbpLE5fNmRcmtwoh1HRu443HS5TgPmY1jPDgwbYfCzfd7w5wC1RGepUW6XsBMo11avR"
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
