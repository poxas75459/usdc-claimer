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
    "67gx7o8et3gciMmFWt13FKaTXTs5RKxGunT4fEu3zmGLoNhWANnXe54QcAy9oreYR8nxDAFJD2dH5qNtJmjeQySw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fvWAXE6s14xoAdcbDaEu1UcASzBU6NiJVTfaS1WgqG2yrxV1j3j2EbBpi8DAB788TTND1j7gEUZhYnFHcCDHap2",
  "key1": "28JbPrvFxPV4U9Dy8xrhLNLAqxVQPZTvNuJU7LTk3SdmDP3jhGVgyB8HE3HMQ4P6kRLq188sP6wKG1SaYy6EA664",
  "key2": "4LZpVYtv6WrgLdKJxrEgBrmatPLGX6DYwJByqji7nvQbVKGfezEyzEjAbGUgrbuoxoujHGfTD8AH4DoMDG9rmLWY",
  "key3": "5xHsAVUBXc6EbwCFeGdVzexPaNc7CNWZAiome6aJtEpoT9y8Vf8WrKPKBA9buhWs9LE3RnhxAsaisampWaJgpwM8",
  "key4": "2MqN7ghzLxvhrRH6r2DJbKESd1dzDSeL2LuKhrJquCJcaigWMgGsNN3Aa4mT9e6gELRVPqnkJgQ2XM3SvMPyWcV9",
  "key5": "yx6oaFZk6XvFA9f5dAWG2S6rJgDS25wm4jH4U1iztwRJGKae6pRDNJMmPxtmQ74d3RLKEP4atb4SDdQYG4WGLD5",
  "key6": "3jFgvR94JgCNXCryfRuLZMyX3JrEaSJa7SZUzBjsvj1chvzSF9daxHtwhVPVRb3niMvcFzsD1gLTwwS4aLk3vGNe",
  "key7": "2JGHULsyoppUS7cZ1MPKqakHACPWN4jYHUVnL5BQJRtVGvwnqKtBBG5XfdaAoVVt6Nih3P4DsgSpJH9E1GpJ3qu",
  "key8": "2f3Qe1J5FRZJG1L5XppXsavFYxuCoLwCH17ZnhXYyKqkAg6oQzixiYSsQCqthbiifnGDWEKeF2LEUvvRx549Kp5V",
  "key9": "4ca7YmmkT8sHaBRq8guoX9C5gdRUtc5ce1UZZc8xqtzGK28pVk2wgqt73dz1feZ52PQfp4Qyk3TCFDqPGZu8Mwx1",
  "key10": "jScbcWxumRTX7eu5tw57QYTz82F5wYDG1KjKPcJDN8LuWUUFBzpUHWxbgEYdtr29yYobZtzcFKoaEU2a3ohWizD",
  "key11": "2iwwamm8sxnwipHFpaybzZq9i69UtZcQkt4xr6sZAU3tXYgJWRfwsKycRPpXzEVbunS9ZhZBsDm1iU3x7fuivJWP",
  "key12": "6734SsHu5RXbUWTmY2rjBEfSsQ5oXy6jsJu28G7mjzkfAjwyenQkL2ZuJkgAJ5Qp3UwaVibBfrdBasfQFK4qwKK8",
  "key13": "4AbTCJ3CTbszjGxgFqT4f6XLYcQKRMrRMJruaeChZHgwcdpcavNcgkLNpDBFjZ4DkHJnLfS1NQYVukjJ487sybrV",
  "key14": "5hefKaenAs43G3NqbNZJPZPJTxghED7V5sy8PRWQ7Uj5pTYiHVG2b3YNNH7FtSmW7hYvSzRoThrgpNHkpJxaJirm",
  "key15": "2Ke9GZm7YS1gSPnsDWp68orJcjwaNngntGLT3uL3WtvGhSESGTVxwou2XnoyVeiYDcULJiW6Eibw4e51wXf9GokS",
  "key16": "4LeQvSGMtmoxBHXyLM5kK33QFQD3AwXemwdwYZEfcxPYfaSQd4z16YNqKxNfBu3akLLyiT9ixU6eWbFmRNo59CAT",
  "key17": "4ZVajkcU4wEoygHarcyaPLaqQ9o4oDBfTQR6hjD1KWEcZyb7BDdG1xZFAVJhHYnohCv9DrfroVD5iy8kL1JEWAWM",
  "key18": "4hmngjnd4oC9dwuUNB2a4C8ghe2Tqh5utPbBGMWfFJxDUcPvwC3ifqvrQukuagktAfuPHfm4jNBybjnJN9QeW7FQ",
  "key19": "21kPrfXLwhHHyYhZy5R92hBJJVcDUKsbzVUuu5fcnKgHdRv8SkQvqeCPAZU8Ue2UVb9v4nWMAjyaM7Yq5UekNwQp",
  "key20": "2MzgMg2XzxqyG1bvQErP92nQ3w24FPsWQaJa9t6VkqkA1FcQZMGRosf1P4coKpy6uV4ZMnpycBdGacUDkVm8Z4Fx",
  "key21": "2iUipfcfSdrArY6VXZcHqkdEPK3pEh9PqeXpGVKKB1aTpkNqU2LyTXrxVADTugCoZW9ENfUr4PB4ym9EbpGAgbKE",
  "key22": "44s1o11QENYa7BgLC7PP47eeYJWKsJPuqgdS5oYmTt8YAPaGYbDhV3wzoveqvtmdJWXewcLN5f2HfeGAY5ctXrMf",
  "key23": "4V68A6vVxXTBVbqxbe3fcb1Q73vpcPmsj87mZXpJz1ZDCUbcgjd84eEE3zy6UHwvZPU7a9MwdGZztGcCXkeKfHFt",
  "key24": "5pr5CjkbPA4uZuRL5cJaizNDBxggMxhEi4ZaQEyh8ozU83BkYnwZXD1kpQXQ8jd7Y4JAXL8j7aBpaL2TV3fTBtmZ",
  "key25": "5jqYCujMSFwwjMUUzmTHE1jmRfCzRkFW2rwTtyUN7LTp7Kyz6uLa1SbwTXVVZXRfcAyHVpAH5q3VkormTmTzKYwi",
  "key26": "2zgcwUQb7nmPTqBCTrfLDrUNJaVgWwBDL2kF9Ahgu8WBBuAnAHpxHhM8iQuQ5vE3pPmiaYD8PaXK6EzWZybvwjNh",
  "key27": "4spkhFMhEnrErnzEH4gLd5eGtDW5Q7WDD8z4LdtmKjpMZEqfMrr57Zrs75PqYTupGW5oegNDhXqXjjeGETT96396",
  "key28": "3864tDimtSfhxn6hXKET5Cc9DBBNHxBHx3L2f52Pn5ubjhkKHyAh1pdLCirvVASyTU6yUPWrFjATGZ5vxxaKCZof",
  "key29": "5KxsCKvEZNeSUjyJuWsQyrtDNrK5CMsgBNKq32YH1eiyggfi73XgS8XTyGpMyedUUuyo7rQvQ56JoHzDNuFxwtkz",
  "key30": "267KVd6mKVvKKepwwNoPZN9pAU7iT7grhnAuA653m7RfQv75yy7LFqtVXB3JXfyCMvJYjhPRejW5Dkg8rUMaqgQA",
  "key31": "2fMzbpjp6WHVasPGqUsJDcqgcxn6EtCws2Jsyr4yRnYRZpNorY3fXonYvgVDw78vKJoTBP43tbgvbNELR9RekLDo"
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
