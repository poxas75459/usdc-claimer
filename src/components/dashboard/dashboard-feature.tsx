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
    "5tmEMkn8ke6PaMxMeLSMEU4ThXh6aLZ1SeF7uCj9677oDQmrK1wkMdxtRaR8AzfaTYeJ52oZ7AXPGy4z86deBpUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auTn6hoNsfn5dTpiV5anVbBKKPFDdk5gJMnBPmS93iBN9jdbSiYPNiryUNHAXjxmQALJMxcGxH8uNkXZbmXLm36",
  "key1": "NnPWih8UYX8YYztvhJDPXyMJcdt4em1pHyzk96tpvDS9u3T3aSVxamAqkwmcnvdWsHSoQH9CS2MsQGeB4JivxgX",
  "key2": "2KRpBU9z6Ryk3kT5BesJTnBwSGfrXsxKcUsTLQbfNpFtMxgQ1HwjzBwnGLYdzqwgrfQEjN1ak9ZY9Ni6hbfFBKQn",
  "key3": "2ATxAejrY7ebMzuAS13iEazGaCeHb67Rznynup65wfrz7P6CyhpUjVp62PNCEyPtPnug4KbKChAP4LsmYMiuuVbj",
  "key4": "ov3wT86ppGutksRjZ2iRrk37S8oTbWvk5GF5W2TvamB8oVb7Lpo9cu8HMwjfmLPdx3ETFiEwcPHCvuVeVP5sT1D",
  "key5": "2pg9tanSZZLrRQsKJuW22Tn44ynRVZCTFPxbRV84XHKfsw37N1ubQ2bkqU9vYmAeCwp1Zg8wdYZg8dSFYhkVfj53",
  "key6": "2F7FAmL782gDwDkgt5Z1UbLVaHtUhGJMr6nCM4dDD2BP45Nuu8PcBEcL241YmcFowGxf8dsZ2AAQDB7gpX2n4dwo",
  "key7": "1uDq8jxhmL2qyoiUJDAUSDF2LNpGrxdBLdBW2D4CixjQfY3rxWvA6axhngtGYM63CCw25dxVVoC2S9MHnRjLkgG",
  "key8": "mH3REVCxHtfvsD2UdZbJHhGozqMYvujQ6FRH3h1HqsGT1CL7YVvU2ep3jPDP41zumT1LeHP2pdewU3HvsuM7j5b",
  "key9": "5o3CWFxWChAdL8TzDQ9potfSfT2e6SDqe2kd6fdLAN7wKCGkEc3yD1rzwEHuyv3tqAG45LgPs66Q1HKc1X93eUkx",
  "key10": "2F6bxwnpL9yBGJ1sAicqi2jkdMGVj5JL8unW8zDvhg6z5CQeFv5ZZsXdQQARKcHkEv6v5JPXSjFJndgUQap313uE",
  "key11": "MV6tYam7RJcpQAwbpF3xrhzAPp5N1RSbi2wzoCjTk4mdoCKtqmUEaZBvR6UkibmhwKFqcMwnBXJMSZvkPcGnVKh",
  "key12": "4goFEjumNRH1fdG8uJEru7ks3br8sYuUq9cRmG19wobWrqi2mssHRLfB8QjLEvvNJLbe7FaYbFFmdjHR9d9iJM7q",
  "key13": "3ha228X3GnagfXDECYGzN5U4X8AJuitS5eAjW9967k4p6XNJENk3hhokkrdkM8f5USqDZikof4Zj8DLPfhJb2Ds9",
  "key14": "55thBx7hfvPzYkfujC84eWJeM3tHynixPLrbrjwEhSZxoTXBxAFX5dNnbPxHs7NRteyL5wrEKNVPeaSfKEyM4gkN",
  "key15": "5FYtS2B1w7KEFKBDwp3sQmUUhk9LYLdKeFhEMWMBMD27FT6UGXNVaxNhkWaXnce7qYj7AbTF7VX2mEayWGFdJCZt",
  "key16": "54pjTwQLxmdBQ3YidUTLsXA7qAMLiGRu7kMnbZiym39mEdgDybxFZUqGuk595XFdXLueMyN6Eb4J5VRK5v5YY86q",
  "key17": "52R9z73QNgeyLyRfJQY1HMU7gDfFEJQiNcJuSU3ZjJZyUCDyYJpDH9xQXWQGszJqDjKGCDMN6i1LF5w4YNoAQK2c",
  "key18": "4tq16HSvemC9u8n88rhd4GGP5rrnei1SFGKE9bgYCiHQoDG4yJzU2UEX332rRn5MPYdvyeK6QKTgXKGmzPhj2g6W",
  "key19": "8hDhJw2aSzJLrcKG9CRxuaXD6v7fTcYmmPNnWbu32HvREzZenUvtW6Q4PGxRZCF1ZXco2hx2tcM1m56ECwxWLGh",
  "key20": "5WpayVFVW13Xr7vMW3bS1nGwdZ1sWh2F2EqV8wXcMeQyV7aQBFgRPuXCWPpAUGifpxsc1iF6csi57jNKr2ypRFjU",
  "key21": "2ktqJzY5qdnkeJP3g6eAGRmUBA31MaWf4Hm2ZXFnsqvVub3acug1kzLE8gDkxcfQVs4uN6jdFbrgyaSg3gg9ZnoU",
  "key22": "JraVGYXP326WsVNqj6g2qMXA4WagsZNYHf2EGj7892pzJjAc3ocpWYkr8a7FyqztSxMZb2XYJr7Qs9h5AREfT4v",
  "key23": "vYZkUk5y8P1A5HAEQwFRogL7ZGB3quJT4RvJzWzbbVp8VaQA2K3tbk95uAZnRXNzfaQJKL1A8R6tgR1NbnTbWA8",
  "key24": "5kgKFyCgGPkdFLLCa2UdzW3p2E2XYN6rxxgrDWku9YRWwiva7vkGipyEciACjzsDHzF83qYULystU2Rn58KESY5e",
  "key25": "5iuaTjhE99YhgK9HZaAEaEHC3XXsWv6JphFTjM9WNJn5EU9CRv9UshyfNNAxV67bQVwNiPKHiRzbf8jR5sXEZDTk",
  "key26": "4TKZqKF4XPoihBPwpZoaSLJbcHz13r7F6ayUsVTuFHxzJkeGLBdKEZj4EZhELwxpbS1tCqkugwPrQ2Z37C89HPxq",
  "key27": "4sD1hCq8oUpyFekSipdiRwEM5e7wbsyJgNzcYTBaBYPZv2Ejio8bFUgSxEkMWRq6mR58QA9N4MFyfcrSTsXu7APx",
  "key28": "5jF4z1qHPA7H4ZwkKWYi3jw1x8r6bu5b3sK43kNB2AgPyWRHsWNjyTaG6f5N6G9YSyX1nNNuZnFhY4Cke1FvKdsS",
  "key29": "2cfWhB3BLTUC82C65xywPeoCAxVgqS1R5HGZZowmY4SFjXrkkpGTSuNwBLCZMaLjG5tPK9XZiNwd99TTcHmpjKwZ",
  "key30": "55tmmQaT1oouVYdTmz9GMxNYiZbwJo894aKMXuXBXERb1e7r6hyL7RefFpA83qnGhqkABqy6TNKBjjFVCU9frb49"
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
