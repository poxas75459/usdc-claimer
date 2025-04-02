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
    "5XDBYZEsUSH7Fyq1i1DftCWdX5VhkvD4ujDQWd7ovAU5NmnnchZYGuDcsMqM4UodeGGy6dV5PUBX5xb729nigjGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahFCfK7XmjjxMh7j3fSQVPGfJA24KQqqGAYxRw4RWYZA7NykRhwgXxrexpFUu4uKycWxadCGMwV5QzrVUQ9ymHw",
  "key1": "XesXP2udPDVJwgaYPbbf9btCfPHN2F7XY1cBBgKqyLUczTsWVAJtiuhE1s8eBYcbFwTVBoZqaHqwQGjsXmqk2et",
  "key2": "3AzPtqF6FeQVFi9QrLio56mWeXzA8x1AQV4nXPD2JSCbFpGdRGcDvRMGhWZmYMgaktk7iGhQxi6Fe5We9CxcGZ8A",
  "key3": "3E4wWDQsf5soBEkSXbezod3JwwUKLmmoetasA9rXcpxzWyAM8jQwEAahfmKaQs99PYLzwY5HeQ6JahAAPSvqXyye",
  "key4": "CrPUKnkpxox74pj9CzK3YFpQ1DTDdLcC7WRMFNy2rxbk1WCs7V7pL9U5LqdqrQjZixbCieytJSaB3qrkbW1Mxa8",
  "key5": "23xtKvsPmgsdp4d4tAw5kQBJx4VZoQq5uaEBZgt3DRwQ19icFgVKc6CjFM7xLRpkGZWp1d7NRZD4xu7PsbrG4Rrd",
  "key6": "558vbkhfq4xh4m6kRhovfXHgh4CnphD6g69oXw6Xnkf3ExhPWRpPzE16AMCmMgWJ6ktmUDnyB1d5VNpQhDzFBfGx",
  "key7": "c1XLKDZPSn6mUo7FvRaz1scjcRpV9sohLTZ5x3Svd4mXAURdbVNco2u82vgzTwyDLpRcrSSTeJnv31QyMtt4XMT",
  "key8": "32c9xWV3pJ2o6ZoVPfMtU8m5oqttFXE6dJw4pPpw1zdksz8SfcGryAx9uXQuhd8trKM32GSiR2Ppf5ngkp6zkboA",
  "key9": "3LwoVmuyRZhCuxnbZLq5RjQGnj8KrpvbPz33hm4yQtz8uJSYhU98Rm9qjJKzpkCeEhg6fhsStBqEJKTxZDdDGD4P",
  "key10": "3mXC59bhg3hAqre9wDBbo8gXnXj56SccviKDYbScTvMfPBAdCX9GQEzUBn31fYJk3hxYfFQDV4EDtbddLS1NCp1y",
  "key11": "5VzSAwsmgAjBZv1YRfPSFWeSpH6iMWpD25HjFtfCCvaQwJ2iXtRDLig1esgYVf2MvzizCWFszTfmJ5Ls39Nm3AD7",
  "key12": "63kkZcBC3Pbae91dFoBqWHviGA4WJYxpbnRthLVovVDVAL7E36T8g9y5ePGD3oQ3ND2FDmWAv8nWW3NhqKtPqu15",
  "key13": "JVT9fxvdFdkojTXSRgWwGUQdTjc7y9KDMQ3RFgRPTovLCA577uv7cMktV5YZBkQXdzeuuBiqsDDKXTMm3qC6pkS",
  "key14": "5nFSPSGavTKZZG5cj2yuH9WK1J6k4ETKrJUZVtwLeZvTu2KM7X1q2McMvNRKqZCepqrzB4sbXk62A32anduF5SWu",
  "key15": "35zxaWfqf4XDjsavW2otBuP8wMRfwNp8w5oedBHRUPDaEyAwYKhPfwCJSAAHfLtJGfu11jXfwxAwQt78EL2YSW2c",
  "key16": "369tdgsMvMYk1V9RZR6t7Xf29ybSWrHo2nt4PieDBRqozazNsXqWBWGWhV8n2gVum6ghGYZ3ahoWJWisupJCiKAD",
  "key17": "5BvBP6VPir9LkjY8s5bQX9qzCKVCvwMC6ZvWbSph9h3T9fv3ftYMBM4KJqSEi7cPMFS6HQ8HLdbGXVZpwxXwjT2k",
  "key18": "3Mi6AoiubEiaKjUBMzKPKGgGTnKURzNZ9ab4ZXprEBHJaQMQeYyvF1kh5WpdewNBhii38NhFP5D4MH2P1kCgTnSc",
  "key19": "5TSs5GGcXBgHCgqJzTnkuwDHGCfycKqArwsGxnUdTdRV5AUAahsbHg6MGMgbnSKVBN4eWiWBhizKiKP4trhzHLk1",
  "key20": "3jQ8pRM7hXbyiXteKrBCWbJHaZgaUVZaWHM3PRk4Z2nTzQAvMQHSvBLzj5fCzHRiikwEsX7C1zWkycJHpXnfuv6B",
  "key21": "je2hEpbVcfiEe2VwuuwC8FKYe9GGeZZapsYERrAtao3crPqjLghmk6KD9p4CqTv9zvUDV3CfyyT8Pbjh4Xiqveo",
  "key22": "oYgehUqrS1KLH9NSRuovERnrt6MrgywiqXJtFW8TgNhwLYgNsXSMMBsMFYtDt5H5Rkt3PXGWmcPWiukfXXGpSTY",
  "key23": "27SvyARmBcHV6A9y5xKbtwU6cyzcJk7avskmdXp6atjWdqbHKuHY4GCzxyygYpzkkuijEZLrQbkbtxP8WwbatTV6",
  "key24": "6JUMhBLqwoyaLE9SzoiaE9kh5pSSns1FvZu6fZw39Z3ENiZyGC1SBgfFn6HuEZhDEPotZB7P8YSMJ3L8SV4tEVe",
  "key25": "5S8hYr1ps8bES7Y85ErgoLEtgWMsxkb1bY1JB2hytioeCUxZbUcLPhWAA3EVx6eoRCygoM8bt5a5KimLNnZtiJHg"
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
