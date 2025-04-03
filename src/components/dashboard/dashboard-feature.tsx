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
    "5onbi9amZqs1BAgKZnL2PE8vj3LpnxpWqpcLCioq2W29dYhpgGfzBUbL587e3vt7fsEfuYZWa6qV8gCS5Y6eLWuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hUp5eN2HKJeBv4iABbbWbcfH2NUEJKgPTNZA6cNkghew7NWYBoD3XoAV65RrHyUcmtAJvsZV6TjjE6t9NpLu74",
  "key1": "42orcFTeGdiGb6Eaqn2ZKH37XANstVN4gBJRam21Wp11tue8kbziqLDZoL6Eo9LM8kHmwRDRo5Xk5VuEqvV7CjnN",
  "key2": "576TvCvyAFWHp7rd6eLbTCJ9yM4LKhopwsnQ2VJCyXYyqi3u1xfhsd1J15MsLa1AZUbX3gLLma81YeGepS1NV5WR",
  "key3": "3as5AxJBBZUT5bkt6FdmYU5KehLVrRG7Efr65JC1yk1X9pC4hcGSRoc2R2b2Du1ZFEyrVVzXGrBr9RCuHN2ahA1",
  "key4": "2WiMh6YLCWJaFjDs36KVXaj9tKa6a6TYdKHHZrBQ8je7dUTsoAmfsnLcnbD1ws4u9iosWXeZLKt5UavXKPgvkV9t",
  "key5": "39DwWSaP9pnP4Qym7CLRwUAzJyjbT1qgVjTHVESm8p3iTXkreuvnVfVkfcGkko1YeLdANn2KkocbNxwotHdJmbhm",
  "key6": "3JvqawceEDrYTKjrHYasGabyaGTYmAd8C1X1fCpU4RRkW2R7PmkfSrjpu3uFLsAHmngHCwsB7AH6ve7ieQeRhJMu",
  "key7": "37qTcTXcCsw9RscC1mhQ7oB6iLPSJwhAKtMxFjS8dj7DSutJmxL8D5y7iFiKQsVFXoJUaJbpgRfAmv7RfGvAD963",
  "key8": "3jbMopKfpPPFJkFWYQ226TVA7hYvhjsiSzY3i8oeXdKF5QKAwm3mcG9v5WXmHW44VECuar5VTEZcYkVZJzQNrya",
  "key9": "3Q8NpHPHPuVJ4dPmTjDC6H9HHQFbC171FZCbtgLoxahhiDy1cCJpZreNi4EVtGuTyqvKyAHrfj3TMa4j479N1PiS",
  "key10": "stFhxK4qcnzsgpsmkGxUvBmDnVQY5Liwtvece9im6nGkzVKcoPPs8sPZiUgD3KLLRLvVmTtcBjkz9B3rdieKdUn",
  "key11": "4Nm4T1h87831Bp9QjkEiNcGjBvGF8dH9BF7kBxWRqYpboEwkaR8QwnYWW6TCyMkyYrKMQhaxz1SwYEDvCacbXs4j",
  "key12": "2E2LG2HP7UMQSgY8BbpzTgiaGA5rW8eRt7Hb8gwvzTF1TEvF23nYMJuXJV3fjbEUgiELM7uBLM4ijW7nJJeJ76jZ",
  "key13": "4xcn87svAbDLWhNerWt1V5E1ima8Cfe3wm6tG2ApSSXys9uKJD7RDqErVP3Qt6vRfSmaN9aRpdqM4s9PrTLpQRZx",
  "key14": "4WXazwJ8khUS6pKCgNiWfdow9vzkj8kifdztCL3FvEmnm3MzQiFLbC92x6za1dsbsY7cmkYzJnN9j34RfxNJ1jRE",
  "key15": "jo7exvd2rBgdRG623YeGnga87jMM7kL8q27yw8M92tyEEk5ev5Z2u8P6sNYrvpcBR3CsmMEDVdJNQFwLyAAhLQQ",
  "key16": "3oBLnQkjPCX19taubsnjHtiycAsKxyobmdaJiejFFPEiCpCbdoV1Miah1wKzcEQkKjrSwVn8LURQiyX5M7sj5WMm",
  "key17": "3wQXAspJNErRHQxk5MzekSHJzp4ydT67Qd4Pnc9qQeFUngibYfXYx4bs8Ai5zDCi1WsfvkKZvQv4gDsBienFqfSJ",
  "key18": "61sEq6eVJUQHrDatSoN1PhpjeiWfovarUx1AqwpiYJvZTeS8hYGHwPgra1M6GjdyRKkEydERx6BinhHH6Ltz3z9r",
  "key19": "TpoHvWvZqXJCHTmWPtTQWJdmQjkjemTVMjL6s7D3sskH48wuTs79HQUQTdVu2V6u4M5n9dLs6BLbmZRozaGhytZ",
  "key20": "qySTq2V7t5uVNzWryNE62KCng7XaUHE9DneGM9e1rfhjKrqqyu2WYjULEo4TPhjLcLoF5MD1afUQUhMcBWtYJCi",
  "key21": "2zALii713NMyThbjUY5uvCXd8zpvkdca6q1LPf4GGnirkAmuLh2S58uggwQTxvG991GPE5YGoWLERfquzZtbw895",
  "key22": "4KNni2dkDYNcp92A87USJmPUbz36eWVRbKAXwEoNdXCxB4A8bJDHGaMHtVcW4FhHrqVGxxgtHNVQ2viqX5tWEtnT",
  "key23": "3UXgWzh2SPbbdPGujUs2FMgAA691ey7zSbpngeuwkdwCQkZsJG57NWp15MPEwCYqr2hDVbhPiUh9UjqwPtFb9ncm",
  "key24": "5xBV3QkybfNt8cgn2eYY4kygDg7otcoipqA68WvmdbtQwYpbLTBjBhEgBfzc38svm794Ya8hwNZzahZY3mbHEytU",
  "key25": "3xfWnkaMNYmypj6kA62oYXeJGKVsfNqyUFfen9YCfUxznN4YZqGd8ULWUQcwHPf1avCdnyE1QRQ7vdx44updBWpY",
  "key26": "647d1FiiTSwv2wyiiEMLSUZiwRgkdRqHyTdS26JKVQzh1GJQWMZd8YCAz4SjZtfwZfv8aFmoDqWw4vWdUhMrDyBD",
  "key27": "4yWxZKz6hr9Nn6wvimWV3DTGdc39ZP8FxsWSADuCN1pupxA9qL92n5VJfyP7NKLeB8Lo2rwD6rSHkGPmdTV7By6g",
  "key28": "4waXsxRFxnYN5d4AjfEKaYj2jDpwVVjrQfZ197EzvjrLF6bZsB5zQgF2RT1AQ5gzemRRWRTJidbBGtwGv6rna57X"
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
