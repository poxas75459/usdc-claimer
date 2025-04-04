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
    "49hagNAMdR3Ft8iWEatL8u4XgcwrkFtBcpsZAH3pr6SZmRe4W3CNLxctBMUtWfWQXucNdcSLw8h9DvymH5yJidv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QbWuvhyvQzvh9Yq9PXrAeKANL2spdXbabRMHMjY285v6J8BGWPqbjwHFY7JH1oncJ2VEJSZT4FazTaGExKxHVtS",
  "key1": "4XNiivbxm5s3BoTCZH7NZpo6KsaPp9t1XvNuHW5YD1q1XZi51iDg3jBSgUvKacbxVguRRwW2gCjHzzgD87Ce2ECf",
  "key2": "5eYiSprYx52eKkjxLesaYYMtXdrYvtmsms19bRXzbsUH75B2EB48vccV4uqsLH4ouqudis8hvn89saRVzdN7X9kx",
  "key3": "4vx1hMfyFoSEHVBXfjhAv7QEzGf71mYPb5hid3SmUJihiSQ5cQGSzZT2Jp3acnGHnGQZQ3tWeHCoAmA4gEwxNbHe",
  "key4": "5LwDYq4x4ZCVcFVWMXdk45erNmcVPBwZH9uiWaMpHPgcfiDurPMqZ6UWZecM31JGM4zpDjmnRqWtZ6RyUnYnsq2i",
  "key5": "4s3QpSvY2FuJUskn5GAjgbGDsbCyrXao84GgdY7XDCQ1tQMy6JzEH9967rWwFkM5nUWAfs2UZmbJXxywQ7RP487H",
  "key6": "2XgaCQcbfaFMfPaPEHfLegYunR8J8a1pXDXFZy5FHmwjtrTC2ZLEXEH2F7somaXTbFrtvmk5wFe3CZnhJudSRQX7",
  "key7": "64TZFoqdcoLicRkEJjEjoNueD2zbTPHECs6M9ibRxDbMSmxA2tLrUsX4hifubMuinFBU4RAeDjTSVMaGaWWBQaVs",
  "key8": "5bvsBhoa5DDQEh2crgxXQNTy3tU8P7XuGpbB5phcT2nX8x7fvW2q6uMAa8dh3LXTyvh7zXM7TaXLNPJymqcuN17n",
  "key9": "28EtZYTCi8tTnuViQjPsuowxUyrDpM73Cn9dcm3cvVsBebiy6tFyaEwAf6CKVfqbvEQLWH9gFHjnUqGSopK4xhkF",
  "key10": "5QVBcZW6pY11q8oQ9Gdm6TnJeUZCXsNDGJR59rPScJWDXjV7CUxrfQG7bZGA3X9rSPxKMQZMZY5wF1Uk1XjnQhoe",
  "key11": "51V5YnFTgD36f2Q87HY9rpTJL1nTDYgywbFLsTsJkJWT9eHNcxRSgnEggk7LQasE2iqpKR49cPZU6gNjWfbQzL4n",
  "key12": "5QVAoG7vCxwD7qsauE3A2AMTxP3XJcbd2tagU8VoJnFxK9HcmcxL4k2eJapuxxradX4FhcwvseBBWgxNj4MoVmxf",
  "key13": "3QtFquXdKZMkPpsh7vKhbjybof9ZcKeKjmR94K77TbvdXKpSCrHt9rQNCmb7gK3hzGGFUbQT3d4KsBDTzjf6KdAm",
  "key14": "4Z847dtYictz9HEaLpFZnfN5NsSyCthkJEsyzadtadEaQ7uYXK3bqUSs9StZQLQGJMZTmMrP4Fv77QBHVGEHYQs9",
  "key15": "a9pM32SpAa131x6uKhbueCkX147n8NubqaFc2aVYR6RSadUXHSKTfnC2YThrbb4cFDg7DsujxpQhzdMqc8eWbMC",
  "key16": "2T5zZsACvz1toViAP8PSdNQ26igJpSuV2nCSRcrN2swYsb2qA5SvxFttWXRGggjYfpA8NewBV8wiApvWhWQZzNRa",
  "key17": "3RTkQscnNYbHcoufaRfN5AZmiLTj8zbLbGgmNphcWTPKadTas9WzJosLFphhynNGziPoWTLvHens7FvZWRyknWa5",
  "key18": "4nNLSug1HfTQYr7JcP6vtJNhUvsw3xErxeTLGHSt48Rgn7VFv5n9VBZPajTtFurZ93etk6EVLztQtbQ4aSvrUkwK",
  "key19": "5L1rnMbqKTsXaHgw91e8egGG2xbEbWA3TafE1NyewHzWbLS9GboW22jpxTLHszBN1eiMkPxFfhWWJD3RUyttjHEM",
  "key20": "nsMq5TWCs3DteWKsiD7zvs2GYGdqbv4W6M1PSTUm741gNWLbw17yM5YmVMjHo4xFByEohvdGSAgBYLX18z5QZJ5",
  "key21": "57NQxJFadRMj3qzJLfPi4PCd3VTHFxGoFYcUm6QdA5LYsauemDecQ4BAjMoo1UR6yHfhwYw6k7JqMgqzsUYhih7R",
  "key22": "M7FGQn7HFHfcT3Q3mquiUFY9f8n8bUnRt36zUzLJfHMfAR9nkxC98CS9dAs7hJVzY7SgRK3yJjGt3gupWJHEsM1",
  "key23": "28BnVzXgBvzi2XTR7jb9c8UKLEQMYmox8xHVU3GpwrsFVJm39niokdsXPmGt3BtKpqe8uBDumR49dZueLqh1Puvd",
  "key24": "4x9RMs2eo8TzavvmTmH4w6b5TYTJCXxJN1FEfzJgpY7Fh91jtwxk9q3nu2BAJxP2SdJA29nyiNVAeHHnxFAEtLfM",
  "key25": "4xvSm4D9Bjd7m8XTvSg65tBnxv64bwicmaWhJkhVVCYQbMfoCwxAx7PgiutpBDWh3pz6cqqxL7J7fp7FzrtdKBn7"
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
