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
    "2UHMHM2nJpzx96MzkghXLax7nw5s2PLCv5Wp3NdFrzgajt4qu3fZd9aXxAfGww7Jks1sS9LHLhSV92AjwDxkvgDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4dVYGcEUKWjbER7hWYuvZRtehrHm6MUGEidXG92XDAZLD7L4Y2kWWQtWwNyHWShWUZhbJBn5LALiUL2n7d7KuU",
  "key1": "4EunBtqtHYHRCNsGnbomTo5caDzSPpxs1QRuq1VMLZ19XTHxE5oZwSznbgjdVYAi7NoVQyXo3zDFXVu7BXTriLjL",
  "key2": "4bkSeVJS4LWwiTTjxsCw66FwAfYjFAFV9hQAb764cyENVSxSqq5nbWzsraecjEEiHYiXcii2w4u3kJnL7hZ8QLXG",
  "key3": "3FAXwAt4xnmx9QG28Gpg7iMK4E9Z2ERShrZNVcjEpTDfXUaWHKxNeKowaFR5nuo85EYKZvQ6t1EQg7dcfdThf1zB",
  "key4": "5wB57t9k4WHFMJM6XtjZfBqZMHYs43bdBUjZmK6gjpbEbBLprPkjVvgwxfZzV5oNGe9LAq46yzkSTHuSgCVa94KP",
  "key5": "42Yx97EwTFkW6wCDm2eqgCuHB4JMsA4GyunMFJmVeJAHPDeGruvmuKbadt4vadPwehpZBQLpsvvtx5zMdC4d1QTN",
  "key6": "3hSji93BWkbaC248ZJvjWWFztAsWKsic5jvVqdiwuetrzvvSJtr2Zo7bvYZwC8sVtDwNBZAtmheodZ7AUwzDc9YM",
  "key7": "3xKWKgyYb3P7iwDNV9dBpewSs8qgMquhPArY7GaJamfJmpaQrwSLCmL8MWbpzWRAmp4jZPamkhdP2AooGwyg2KnX",
  "key8": "5ZrbUD112jfcxXiBYmjHnwHtAyTiQnWoSiVQYoyKGHqLpfH9GgcX3V7hwYYJLaiqHKMRNPvnBxHbap4hgbPiPitx",
  "key9": "3mbyAnBh8AE3WDg1e3hPKtRXS7xhwBZXHhtupnAUv3qtiom6auhnszDJNuVBj1khrZ5A5mAXEEJfuBkUeu1sUmWs",
  "key10": "3wU69PMggHvsG11hqDZcPiLgYZYS9m97PBdaqTRfRmYHsXnX4LXH5LU41RuyNbznLFqnbPaMpEwzk8pGyQmBmg4w",
  "key11": "2Jj8Q6DTUCuGLpD5wP7XMR1TuBR4ebiwscrd2HW8Z958rXzgPnEixLh28iupzSfqHR5kTkWY6gKF4DEN7D6UTKv6",
  "key12": "55D4Axr8AAnvFm6vE7icTsaLxstjdieDdmr9pZ49HmD89q74UmkC6gHfRUjWYtYPMh9K5nwa86bQZDH6ba752gJt",
  "key13": "5saHBWLw2uyePtcvNchHeHN6NaRhiBW3hCZHthNV4NrdTehsjnvtCFWKCVHGGunuG6zhvaUNWA7rUCKrs3fTvrYd",
  "key14": "4aXGExKuobt4v1SBajomeWGgfB28HStk1MMvfHyaJKyb5DCKKewJuZk3cUPW1oMDJ4XXMScH2ZtbEiM8VbTsw2M6",
  "key15": "2pCkUScTY5qormgRmo8qx4GuL6iaN92i2GWzVzTQcJHjHtJFrfBijGRQVWWLMFBHvCywxa7cPHCB3KgaHPjQ31HR",
  "key16": "4axVQHsvow7rJiwKRamf9AXfCYh6MFttPFtqBBopsqXEi3eT8YRtmkJF7pkEuH9FyZnTxUrcA9ZM3b6vK71KoYd",
  "key17": "5d4bjCfm2zhBYRZfpBG9YcHPGd4VfXTPZuf9pRg9eHWRC9qnwMrAvfyRDi2bibLEoRjKu3rGAoxgBmCJP91AfYDj",
  "key18": "aju5fVwvFTh7ovd5J7R18XkccJyeWSvdUQvVyChBz7JTJRU8N4uYkpswmrFxsWiFL6YyCAp8yMBgPDLte6PKuWV",
  "key19": "2rQsjGzfMpDHYudQzpgsakrhHX1zjdKWpU2PMYWKmKSFdki5S9F2LhhrWqWEqx4bUzDg1eJGpmo9cfFWZUSwxw7c",
  "key20": "5FUAXMYM4yHBgN9jn1AAYx55FnksNxTUvkd7AXMbyCexYvMAGUqwWS1PNW6sfA6QQjn3Kq6mn8dWBnNeiDGD5VKV",
  "key21": "3yjT9gN7HkKmyekPdV8YfRkczZ7g71WFyZqerJSBeB3ybZfWwsc6y5CAgAipczmxuqKEJk41v6ri9zg4AyjmMCgs",
  "key22": "3ozEwjMxwyw8Ea7npSKZ1J5gg4KFH698NRG1HEuZLYHZeE45XNm8vuP7TRyu6NPidvzPs62eqSPZWLAgWSyVtwrE",
  "key23": "5mbh2E6qjYkk3aMSE6JTZ44Z4DUYGPzVDrZW8kGbjc9zvdwCrr8rVro17DAq8rggKGzBZpVt9iMVsAmqG3VrsTJQ",
  "key24": "5iZ8nC3NWo2zL16jYwSjGf63ea91DqbBSXMegbMNH6CTJHVWiK1Xmxmsp9o7m57xaQmPac2snyLv3wbcvRcocDAv",
  "key25": "2yD7wiagc7zKG6yiaeP3wADyA6ycetpW8j1zA2CZg4n3hwRBwCof7m8p2oEokR1pULrJdsEHtwfRB32iamd8PWbh",
  "key26": "3K1Sq3PZfqa3esVtR5Bf4PNRnfWcEYCerDDpCwpyDEx9saKybuxsXiraJkTBRFyizrBywY3tJrqP4mVL5PcQFQdE",
  "key27": "4XUuhFH91tfvm48tKBF3NxLUETBjshhRTnVcohb193L8rtA5TfZQa13Tbe5xDh8qd8A72eqixakn2fUwRMAkwL7S"
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
