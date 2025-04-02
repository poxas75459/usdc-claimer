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
    "3FTBbYoJingbTstBmuvACjwmUndZx4uSWBWkig4MkBMoj9u9vJLrSKDiL3aca4XoQCi3LYyBYApAJRV3TcHuhWKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32aGtPY3Rn9Tmydkhq16rmTivD5ZvXTB33JVAjBQez3xBscvQDT34xPxGxS3aNeye91e51EHQwosLpf3eARPzUFE",
  "key1": "98sxGuyDtjxP9wpNHfAmiphcfZZiXKtSFSfuH2rxFHP6TXHex45zrfHdHPb8PEqVw88FyWBZhVevarGdFatPfmY",
  "key2": "5FmqroGzmvd2CHPubtwzJCrR1MwLNHPhjW9M1W1Z4GEjyrv7etxmm4A8EqvunvZ6zgqccCVaB3ujCZBrNT5ej3FU",
  "key3": "4CM4ZHF2EtXgtfarew64LdnMbJJY4m5Mih1HmPcJLtfLXBREMZp9WpA6Z6aU4146YM4XAyS1kRB24H7pfNZ4HKRu",
  "key4": "4ftPtfBEhNJF3nCBt9MyeVqKipZUq8w7q1Vx7UNTs2A3ZXVv23SmzevDgW2maAv8RHZML1tYyUic1KKUjSfUxaPM",
  "key5": "DETZvSyJcS7bgf3kJkRSUNRraa6KSwqWVkhXueX8dkhKsXbTy5TGP2fBpmTQhYKZ9eXhMzirXpEFZpsnUKxi3Ue",
  "key6": "5zxbwkiw3rzskhrQnKKdX7gViAHSJdZoicsaYKjkodeadZZpNZLyHRf3HKbX9A6EFU6J8SW4eEmMdr11K5HaU83W",
  "key7": "vGFVoEt6CAKrJwbGsmHBfpPKL2MYfescwtub4PjvMGBWi2Biu1CukbaRgXvsvRpc6sn1kD3ACLjvbE72gtdpZrF",
  "key8": "4MAz9NZzYvZ4wjd8TobHDhspbNzvZDwq6XZmW7FytxwLTMBhVUpN53xG9qWLHmzAeUQWprqviwe4ZZajaxtVCQSu",
  "key9": "4jmPg4chX3H1j1DvFDbJfeJhTBXGChfEe87G9xrMpJXpNmjHHMWJNC2stfZBXKPBrVtRsDtNmK5hryKRgXHiLujN",
  "key10": "2e4qZnhm6b6iQQhnhEvWGDsgaahGQJm8GojBs2dZtYcf1Ct4fH82FzydnqwGnYLHKG1ofrttUvQU4ZQMMXhynsfV",
  "key11": "5uCC7KWhdoivRWQaUaLDfRZXzA6tHHnfK3jRxLUtEFQcJzZ2VhGeh1fKppLZnko1acMNGUa58S8mUDs138qERQKp",
  "key12": "2eT7bwRMuhx5DboA5o4g1R5TCjJdNRHyA1QhyBRfwo59upnWwhqmd13PDZC4RFASSVFDm7CTw9uPUeYCrC6jJba4",
  "key13": "2BzodmbrSkBNfMVSmhTtoSKHjBmugfeLacyLQNZ8VTRq2nZgm3Sjj9nFN3j4piqajpkdaxECWLP9Kt9r8K1H2Rd",
  "key14": "3pxvur9ga3R3uSmbmH7Jj2mEX7gpEFLNEaKAN2KZLL7DAjszTR4KgydpftSg5s1TizppagiXEu8bgCocjg6FJ17J",
  "key15": "3vGGVN9CyhedpqFfgywMRvByW4AHiWAdR5waW6J5iGmstCEFvsLY35iH4unWJQPxLJWWvA45s9FRKxiXyVKqVFcD",
  "key16": "2A1WkjWHeEcBUG2r3TobwvZHXuLKMMbi1a6kz6iKftcn4fvt8bnqH6wZ1vu3TQZCQUAgHqwJ4u18AYBcATpMrd7C",
  "key17": "2GiLUAzs36u7iy9FwRSh6Kn5BNYiLjuuKE8GF4H4JMdHbkzXHNwBHhChG6n5DLWdGpGJCfeYFw3mnVkybPMmRMFC",
  "key18": "Ak5UaSTdTzNdzSmJFLhmVP9M8tpLyq8peXu99qSeR3xraFkt2dpaKqsEB5nfZh239Tb5zHu61JiyWZv5oNqEHod",
  "key19": "4kFFsSPHEj2JSNpxf7UNB5AGzxU3CNftkHfzwtp7pUX94RfmnoyVFJZS8hwLLS2xW8kSh5HJ5P5iqMzkvPtR6tnF",
  "key20": "3CyQVR8q4xV6x91yWr2KdiDQn3Rjt5Qk7T7eVWYbErVwVEebqYujDJMhx7bAUmvSNJd4uJRGYF8R8US3BJGTzXZk",
  "key21": "5ukgPGvc84EA8H1tQD9NTWTjzn8FVXEZeFdAyTBTt8amFrtRRnihD6jKcN5eFLymLSWoN2AJVJs9iUrHdbUTqZpD",
  "key22": "5MvEHyenYDFnKQVLdLxe9qfLoFxj92apduK9WxBLjncbVCjykQKEwaNR2ALM6aLWUsL3ZfuRcaQpkCbCsJpcwg6T",
  "key23": "54K5q7yixpW9yE1Qttw8ofUkEGCN7t2R1ugRgWoDNueXKCqDHEv14oTqNLhmmU8anZWsj6LaVcJnWPFxHexvkppo",
  "key24": "5n5eeWYwPiiQ1SWA7Hq2uiWDkX75a8QyQ6jt21TTWLAyjEPx5EbS58fh7Mis6WaKaUc8sjW9odg5LxUPcNkp8xb9",
  "key25": "5T6aBY6tffvUu4snLGGvNs3C7cruVTbU7qCfWfGRfctJbrLtRwjqk54cLuBBFKkWr9cSgqMyz4B4gett26fKYDrj",
  "key26": "BbAermabCyPTEpeFJKgNdyWgK9AUeU6AUX3tm7QouB1MGzL2fJw8BYqZwj1DTRyJhFDWdarExRRfNS6uwnxHdA6",
  "key27": "3Ghe9RwgtxEcb8RrXgPS9zdYgkknek9gLbNXR6xaMWT1DbLfZnh1fReHEqwCdwieMBfy8jT1bMHchx2vmRJsvRYG",
  "key28": "Nbpg4MKpyAw7E1tBydbt4jqinmLCSHi84KJLiRuzWUFG8htL6GfJEw6S53ds2xN3cWBrwrd73rh9fEcaFy5P5W6",
  "key29": "FdrBRo7sdn5z7EHbHZN62bV6a6ngtdaLFMoC2MgATsb8zX7uP2YuWK3Uru9c2rKLCGionA4tYu1SMQ98s8ZS4Au",
  "key30": "51F9xi6kHsnLsTdBi4gkVoRWecyJeJHiKWkWAGiN4dXgywes1k4DuVpRrvTmxFMAfQYdThs6koVNdFo1L1tDGGUj",
  "key31": "5AqUJJLJFSw6t5w2ti8mRPncZkCNxVn7yrPq14KywdCGjoTuhoxFsyibDYQ9PYT2DrV7KNdidpvKNBozN9rT8Jdk",
  "key32": "5uDyK7qVGKz37bhiTGX3a7XeKvAMAaMEJ3FWAv93J82jfUn6LqG68za7DoGtqyVuX5EZpAAKFUNsG3wk7njjyi5G",
  "key33": "3ZFVZmSxeWyy7kVa9KfhKaJPGMxNP8SdFVAMRn9ZpsuPcJc4z2CoCGc3kyWCGCYHQa3XAwYkdRzscTNAEcyXzszE",
  "key34": "2ZDem4uoyNcJvcxFEJkjus3PVnRtKUPxKE5jJ8HrkjeFymCi8GQ3PWVzzdvMWGzue2HXczMY1XS2YiGUems5LsZc",
  "key35": "4vmWDidnx8mtybDHvnGwx7DbTgLKEbvgreADUuCquF7fWpbFCGUYLRkBQxQTfoVsen95nCm5MbUb1CZXSsGxupuB",
  "key36": "3LZ2DqJr6p7Fcc8oCE1Zh8LqzrNYcxaYvsg6uLnFTqwUCoGSEf8sFDzd4qUSjiKUdFeyKCB91SYaFYgWeYiXizmD",
  "key37": "2qK8Dj86Ja3jhiWDHbudCGALdNsVs1CWU8cezvwwiVSGBdRkffZBNfg24UpVtax1xmwDJiGRJzMd8DWp929XFPdE",
  "key38": "5pSJ6b4tqvBW1AaqYa5SHESF27A8n1GJ4hGJQGqYAQiRvyx5gpoiNkxia3KHqv3EtBo8WkZWu6Pnh2NqqaS8fZrn",
  "key39": "hbuB9L4eS5uQhcQTKvRjZvvQCw6G9dKM9vdqkbudb3KHr8q6zg3LQW1Z4RGVGPwvv2WxnQ798ChK567AZfFSTmn"
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
