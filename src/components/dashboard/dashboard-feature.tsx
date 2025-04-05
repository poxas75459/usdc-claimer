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
    "2avq9h9CQiqUESzwYvGj6jCNNsCwsDAPAbvaxCdHbe3J7Fuz8CcHTkZrHMsPqFFwM319Y4dRPYHkkAhxggUzhfWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdAaXp9YRNWBHbyWnA4oCxuUkUsb2NBoYrMBDZy6iSsHTEorvS3K6rxSFAhM3TZ6282C1SEhMpG2WyLqoK27wG2",
  "key1": "zRGHKvezPoUHc7r2rnqtWU9W6eKcETVq9uVn1hU3RxL8e8VbwJieMYR7HJxeqgbx1CSAyFFyXmbjrbD6GvYmJ6E",
  "key2": "2F11fmjnLZzYJkDRud5Reeru93G7QtPY5UZuecWD2nPwMyKGaW6FwMEpgEs7itB7VTWVmmF7ZuDzx9JSDSpwp7pz",
  "key3": "2Ast8vRxvQZHJKiKFcTzE8Kem2ecsbVA4ewXx4R1SWYU1teGeaP9BVSGkk1iwi3ttibtBbG8dhUgGKZMCMX73RQH",
  "key4": "5zLXR7FBEv5z8Xf9o4XWXCyvFpYc39QyV6JY32bvjD723ZE7GmKvjRCDzkNRB8hN6ZB312NYjvyRfWSMg4gXUWVG",
  "key5": "3dhqz6gn56sWQvRbAEEHDw8P4oky9ogLr1v5NSbcx1xp5X34w6y2xZHpBwZCqEVgbP95BymTjyjucGJpgMMNrhk2",
  "key6": "2qC5dYpaTBmknfHyvEeohL3Y8tpfH9s32ko7YgJ96iUUz7EPUTknU8hb7thubiXbLo8ArQmPYrW43TEHj79uibqH",
  "key7": "tUYkGoP9BMQUqSsQb2FnoqJe5MqWJLFL3GiGUGJG8aoqLT8m8PZ8yGUSYrz1d52bHf4hB13QS9URTnD6fYdtq7B",
  "key8": "3V5edvw8CiDdK3b2TWWFzE1cZEQpH4xKZZHxxYpQ2633ZHHwrDJTYvRMswdroCDKm7QsErPv8wo2TftxPCuJDB4H",
  "key9": "2dQvhzgwf8RZM6kvLzhCpY3k3CxdZ8x32E7D8GiaMqDhRAY8CxoWaUs7pnBjjt8duJUNHPyS6UkSAm93ZJ8whFTr",
  "key10": "2K29Ne5ByxpKv46uS5UkjMEvdqaokMwNhzs3BxUQDmjHgLiK5r12eS8dKT8Kx9mBBWR6vEHYkHvbXPRw9wRrjeu3",
  "key11": "4sfAA3agxB7TkZ3qF8U4co76NsAW6ThjRAT7NrrVZZ1QTQZuTTnWWsSjSaozA69owwFLDjMnrg1agkvHxx8M3LBS",
  "key12": "5nAAJiCzRZgfbv6wes4W9YcW1JNAEoXNmptjuiu1nC8pdLGfRMznu15ZU9fFHe7dqLmwFiEjLdVTdNjtpPbxdDbR",
  "key13": "3LYJgbkRJ5EN7oLSTKhnkKZMn6n3hwUmWyFoMC38TaoP38ECDCRCYYv811s1xThVMhuQQ2AcmJs5gDJUTykEsWho",
  "key14": "5Rdfx8FQPxdJDotwT4Xsv2kBv5HwV9QNpShkqKizmSRszme22ehETw1amuDZtuA3XwYT81iKPpB5VV4r9hMvsNF7",
  "key15": "3EVnGBsx6UczUFqzNvet81uXARU9c2zqCjagFaChMNJ96hav1qyzXrw42taZjXFZhR55Ar1UJjH773o5gCMvmrxv",
  "key16": "2f5FuAx1yPJgmUnhAtMn8mRpici7gBQt8PSpQw673hcPhVks5QhYqY9ssjvFNogWPqRTDU2fM37xYXm91NBEB4kp",
  "key17": "5oAZgcM7VVEiiWEkaqDwTGMoCjYtuEVt4LSerWsiFpAM6p7oZL4fWu1t7K7T5NqSB44Bj7b2W1EzYQJhG9mTGf8U",
  "key18": "zsq19YBqWsqanbgYGC69RLyyeDX4fxs1FTV9FB1BvNmFbsPSAU6zbFQQ8QxVwnv6vBmLun9xLGPpVii9AxXvkAT",
  "key19": "3RpfU6tSBtptnkx1kdRmxd3ciDmw57mNqNHB9uMPVVH4b2Ju3JtKXDMEdYqVrLuFAnAERvqLNbirFUWuvpopBzd",
  "key20": "2KtfzCvhEoz3knmSCNe6yJ2FobQYS3Puxk5k1BrAJMTYjHjPFZkqQmQcDb5YqjQHjZjH4jUYcakZ1oCAoR4RsX3N",
  "key21": "4kVQvH7Fw8uzQRBaXwaRvfcfiPBkA2Mp5L5s6dSEMSS4Rh4xS13rPjzhPp83x9JpvCTF7PsGZXDoKRo8tVaRe9Ff",
  "key22": "qGVG7CmJzP5HBcmsXYj872k8tg6HFrqTV2HbjSK4M9A9NgkpwGviEyPnaRjGug1GghzXgGYz5TQKQLZXb3TVKVm",
  "key23": "5SqEB195dy55CXT96n9oFUJyZGhRwcGVC6vdAwPmWTWb75jYF2YZAxD5vUBWoBN786vh6uK6ep21DMS84T9wQa5W",
  "key24": "qGwssg1M7BSr87gHpBbHahDExLKMYGj2jWBqzosZkditH9sU22zDZ6xYN6V2vvdSn7Ew4u41ofnC6shFMXGQmpf",
  "key25": "LX8UrV7AzfHyv2u5gM5DzZAMuQzmmhhz99a8n6Qzj5BHnhtXuTEvNuBD2CpKQmZ1BCcEbbfqkq3ZdmiZdRaFRwp",
  "key26": "66Lve13HBuxETbydkdBfWh7WttQmS2sZCrdZ5fyjrcbC2nEMJ9WdjJ2qorYMQM4zGx7uVDH3KbP4rRHedjZqH94i",
  "key27": "5xNoYL94pTAgiBYJxTmy6EDpfSdYGCt4q7gaWoVjUTAGEb1cJf8V3H4DDq4mDNThTBe7TAsNyzC3pNB9k7vYpWgB",
  "key28": "5VkXTJNPNaQDuLefjcCYsmHTXRfd38jKUtCxJvGQqo77X6wDDFwrZFSss8djVoS5JWgC2RF3TT33NBenNR2tvCMW",
  "key29": "2z47G495sV2MRFxWFxpMuvQ7MCv16z3wkbL6bWddktWpuPtYZnGUvFChuVM4HEJqKtRBx57L8G9x4iiLBLnmiG1y",
  "key30": "q4JJRnkuKkbpC35bsd1CpD4Foq6e8mncEmFu5S5RRXGUpLQaqkCRwjih9FwoeUnGAihrn8cV8WQHQoA5CW24FFR",
  "key31": "3TsYsDyZCW9WXUBQeAoVqLcUvZhFymXAAgpJRuedS3DRmSK61cxmCa5NbNyk2SiBB8JscsYjqrwb58aGqZ151zht",
  "key32": "43E4w4GMmtTwwK9ST2Ji61z4CiYQTSAtgRWdbEXz8DEwF87AA6bZWdQaMeeReGNMXMPR2iW5qLehPo8vRY3H9xA9",
  "key33": "58AHXrKG4WfekcqqFnwsTHCF2CN9A7Ko2vuFUzWwXYqyjRiv1M2ELjXwmryWf2NCiiWCtVPKe7rVhC3pCVaFAHq",
  "key34": "48JddetY42f6SUqDrX5Cfu55pxE5zGoQPfgC51Tr6HB3VqEWJUKpWMFE64WsckhVoTFgCBoVcphTYfDk7cyvxeT5",
  "key35": "4kPGpRLtz8SAuJq4zy3zcsosXTFUM5fSPMqzLiDZbnF42LWZH4c8rqGoPWhhpDR8mP8LdHNrWXDLmUPxo7hQM26U",
  "key36": "4hF55JBMiJ3LdF4Nwy9tYjRkjc5dKwPWdtyy2JrYgWmruXvpRjaVxnZp1RDmR584JopjQkxK9rvK2x61w3PhwNco",
  "key37": "43sAivpiBAqCUtvoN6wKScR5KsJkfNYRXEjre7y5tc1DYWLHR1v3YW254KY5mu2GVcFawzB1nWjXz9nyRAEuBbW5",
  "key38": "kGB69wA2dk5AoMzfd9pQ6YpQxmZfcLEdZijrFBEcF25ByF6jFv84J5JnpY9xim7kxNq1jJhDnqQseFq7jAPDRV4",
  "key39": "4oUq3UzK1QntjnLCxgVJVKfYXVXyBmfrpVa56NXNDxssfoanuPiqstT1p3u7JvHVHUX3bmk39wDHFSHDdbDXZZJe",
  "key40": "2EjRQvBGchZqSxACfeDuqgic1vD7HEQQCT4o711qmQicEaqCvVhsXszEwytBrWAjvYs7CyBFussvb2Qx6BGygPc3",
  "key41": "2eAtoZxAHB7DSjxUe6M1BBoVVHLgu1Pq2TLCGZfjhKjzD37e4U6MN1oGXGGa4UJD8xJiSvEuvVSMkahQS4WoXX7z",
  "key42": "5HhUqT7cVeG6AZzgN1RwwboDaSBYwCHu91Jq7E1jn26cAyKtWrZe13XcbS9SiacftovKbbhWnJ3quREj9FG1kYLD",
  "key43": "2M7DTYojVKFqNJhv4HRcYp6cveXnd2dJchkvxTCWFcGC6EJHSXvz8NfE7qJp6tW1xrvswAobax3GWY4P7sQmFDVP"
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
