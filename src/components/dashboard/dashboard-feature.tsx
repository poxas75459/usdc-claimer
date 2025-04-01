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
    "44JhwsaEYEp235AhnLWirkqcJbRYpreWz9ssrksgy5zNSDfLFZ9SLqhjzUToi18qGm6L9ZUCakRBEyFAvSWfy8of"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "482LScUG1Q2Yev78KMkGHgDfvHxBXVutVzJpdu5cjwk6GkxezLoxDnjeeEMpv2ZJUpRjL27D8CScyL2SUKggbSSS",
  "key1": "3csrez1SHbY2KQhE5A2hvXevBXJK5ZjuVTrkB5fEC2zCe3XioLcbrgLuYBWK7PqmMMCzYPqxtkQqa8fNzcyBe6dq",
  "key2": "o1bgjuiZHpu2BTcUrHAzSXJSwgqUkn8qBzCLEJ5yGwCoNDafkE9kjVcs4fJPXzDBxkJSmgKPo3SwLQ3FaejHBmy",
  "key3": "2CdZTbqHM5jJHWxfLqechzjoKVmNKosS1p4NGbFbFTNXW3bsNXoxzo8JoxtAM5YJwBvvxXm9GkUcjgSFcKCDw9Ap",
  "key4": "2Qi9Cd86VkRYigouE3sJRrGnFv6AYM5qR2J75paE9d28MnrF8vdKHj9G4anbfwK7YLWWfru4CCpAB23ssfvo4Kex",
  "key5": "3BdsEJ3qd4JgTuQpQeoSLfd3PLZLiu3M73qCDeKgJJScR4ueGC89wAaa2oatvbmF9baTmY3kgQMnmLFxLdZKThsf",
  "key6": "6285NqoZ1UCLAi9bojfnJA1GzmpByNy1khL7maEBgNQvvaytAiX4da8N7FFK4xhaMSpVZEdVTpbpc8p3XPkwqf18",
  "key7": "34hPLgCHUsGmceh8dkp9uFDvSmdJ34iLjgcvPk3Sqg6b4J6gFXnHsZ5cETCPBEHedd1saC1MharojjisZQh2fkgB",
  "key8": "395YzUqtKAYqdkr1wk39UVdecENuj1HA7DnKagoNUoAumzXdLP5xMNwhRgoEosQtjzmAmWQMwZydUEMqUGCSgRyY",
  "key9": "2wtSQMjK4b84mhSurSmeHNZDXLHhqs7U3mMKLnd6xGWnDFmU93BKCdiVzpP3KhjTfPGxWNftDm2FiFjRPKRxggJw",
  "key10": "54seJ6JwPjER958hLdKfp52rqWtzzVHVqHTwE2Q6L2Deu5azGd5fN96sv2FKRyPtY4bsFEasnrDWdHqhZB8uSNCj",
  "key11": "52cLQvkZABZi82sD3Ue1ScU9gg3hZDS5Z5FhashUdbGJ6ZpqR6WxFRuYya41AzaD7iw84tUGymDZzLfuN6Av2RRH",
  "key12": "u43uosMoNpy6RtayXPRXQYRR7eUTevTjbVCYPp9UgXiB8WFmHrW6mCpQayqFH5XnrEDbugMNwxuftANv5F9n8Jo",
  "key13": "3iLBaLvtkFBUTuiVuMoTxNUMix4q5UXhfFmSXn1fpxbYUWyLKjwG19Vk6aqArY7L2zH5w2f5CWY5BhmELADgPJ7m",
  "key14": "wvLnz9rqcHunTr7a7FWurJSAuWBFs9REkUPMww5UEVc9aBajt3zuUmRexSuM6QGixBRncRiUq9hvesi7HM3mDr9",
  "key15": "3PPpJkZeo5vUKk2UuX4XDcLX2F4SaDJ8j3LQKPtXVvuqXRreDURenv51UkhdapJKc866S1JyRfDnV4hRg5PtVVSX",
  "key16": "2XrgRcjSHczb4EcJk3w56btXAJbt5ugmX41pbjbRgX8XBTZTWPPDqncbocpkRwis68Z94ivHCiX7qQLnWfF9no4C",
  "key17": "2MQFXn2vTBq41U2cWQ1zdJEC1mNMgZS595VbMKfA6p5fFpqVGosfUuKcSSmHR1eXs5UYzmYFfcRUrPEwgiW1hc7c",
  "key18": "3x65NoN38EeZEjFhe7EYorS9ErTabZvd2dwHNR6ZWp7FYVrGGHeAsaYbRTZCV8XUnQogRw62Ln51ytrqDuSoKr72",
  "key19": "2sGfUcZAjwXRzwXHLGyjLckBfcEHVWCkaxiVsVSM9cCnxGPi6bY6d6dj2tsFNNHeepCsY81FXmYgo7ZYbKGDA973",
  "key20": "3TMwQWtbBg8aG1MSvhA3JttwhEns1UAQkAgXLh3qkoKLRwWZ5LGkLizXFJ2C5aYh5FBkuiYqWWMpPL1fAQJcGVAS",
  "key21": "4vveC4diwk1tmuthaRkGCDsUvPyeUtmGVzFemAK6FKWtgRFsspD16ya7CiUy29oMkx3cZbfU9KkZ3wz69whZytxu",
  "key22": "5oh3TDkLX7yxxzNxcWBnJDp629W9N8H9ErrXfKMswGQhk44rnJVWgxCFaf4sdifAZ23QxTxsA8nTzK1muhQRXb3F",
  "key23": "5zdqT7d7gmo5shcyUJgebQZWM6mgCufpRwwqAQUbK9FMGuU1Qa15HuFFdiPqd64ZZThYVLmPZ4PWpjwQZ9kEDw2R",
  "key24": "5RGZR6TupSkPXnihvDDW9s1fVRBCdA5AmCn7f9f4hZ9Jgb1dYsnjRvNNiC1SgxKqzNG9vPnMJifDnN5QLJGposyu",
  "key25": "2DtV9gNz2mYhjZ2quwMQy9nBkVR1BW4yLxUzhhrCK4qgFLqs1WYunga9Z6Nb8dZxqvJrc9PW8wTg8kNbLUuhE9V",
  "key26": "3FtF4QSL5zcBbUtuchFKd4ozg4g6ts7i2dqmCFWWUGorCDBa1Zw8VM3BytmC5CzRsXJ5Rp1W6Pi7CA4QZJbVP7Et",
  "key27": "2tGpsnkw6PqQvdeQkUNAE5ztUGSicW6cV3bbg3q7yMjN1Y2747mKLPvCV5TBeG41hYGAQcWiRk9V9cBtDZ8d8vKh"
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
