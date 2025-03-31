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
    "3hvjX6uLDXjtzZcLsrjqqBiePgiurwoyevLbCb7UUgPoUDUbEG8T2AZsCm1tCYcwAgKj6ooz6ksVXk8VnMuXKU8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yLkJ4mB5rr8wxVuTwVCxLzKMiwNHHcQe9WTCkFtAgwczs4XihfMqeej5uziPAhdkXyjpXyPu8jxVfGCdWdHu2xA",
  "key1": "4ZLoLK9J4Wf5XMfEcTykerJF7gQueoGj9HMBMjDpjwUpqEhPvD5GwCmA7G4RPhsxL14oBkkcfjsw6po9dniabkxg",
  "key2": "3rhW3sXgLtiMX2BGBCD1eRMDQyr8CaDfbAsBWwcWLwVodnHgnCX25NNqknUvEtATpfAXn3vZ3r2BpbibZaPTD3EP",
  "key3": "3ZxzV6kdwSauXTctV799VBakNBkepe8GGLnJgyG6fsjxitKJcyNCqZRRToba7hYbMSQofbeSrFVcFrbywBwYyGAL",
  "key4": "2qdcMTTayLLHBZAYmpXHXcUAQQCvLRpZs9WBkhtXXER5ARwhLmW9Q1rgxua6ANabf7gt9Z5msLwcTG5vNXwK8hiD",
  "key5": "63nX2m37jWLAWEn7AXaxtzqVa91hqw37HPKEF9U9qxHsdiVKio3TfsWJxNrskisgodzEUCZmDxhH3yUaJ8wAdqoP",
  "key6": "NyUsvxKC75ZvddHavGvexCifE676Gitp7nMpYRZmy228ssFr74dHSak5VB8CUihzGDfSWB1BTzKxBe6wQD3oh8o",
  "key7": "2j66JwEWsX8izeK1kugNVbXe2n6nc6PBfBGCfde1br4EePH9gYbcyGVbWq7Uaktu5cQfSHXdFLDKaWJA2LzKpAVQ",
  "key8": "3ejGSi83REuDRU1GsC2Gwv1PMGJ7aWjJcEWAjzUQFsMtkonpU7cNjiQQ184ecXzDDAADYg9Gu6sDC214WLBnR7S4",
  "key9": "5uvSdtC3Eif1Jyc6UVEVkWUab6CFasnVenMVLH2NbqKdAefUnDaqq9oJ8W27c1JAGT6pxgrjFDidrGjk4s4upA4y",
  "key10": "4T7eLmm2Kd4JjLxGHiDtvtRgoEYb4LCEEitnm6X6134qngeW5NZ3H3m2zXPNyj6fNGCM5sPtHKiLKmSZzALysZEK",
  "key11": "4sgKK71pKjXBQzfRiK9UzvuJDoCnmzBejB7cmdd5975cAVr8dLvVnLMXV9o1VzEQmCKbEfptPfidXyo4D8kidmbc",
  "key12": "5NKEXGKfhaVfRE6Vhvyqyvdu27Bi3PVoKg6D4xbBerP7CeLN8gGQUhGZwrEc4qN24GKGRaWLN1DjWyCPAbdhSmG9",
  "key13": "5dmr1H6k8Q9tPRExys5YadXJqirdgtNPmpaJKswLRq1A2Ui6qUuhpJUtb4nN31syWARZjq7AgniSABA2TKmKHE7j",
  "key14": "39BYnQG9UeHPp4JpDGtkcueoBgpUqwonbrQupMQWXqSFRirVR92gxLzYh7wkpsXcqqK8kYc46XHUs1kSW77VPKUR",
  "key15": "2GMnJwjRnDDS3xCEFqwTMVPBD5KEKZJ1KGV7ZBZ5RAp6fgSatYyJ9kJor6kEgYfTcYZeV5s38TTfDhrourBwDZYG",
  "key16": "62pdzxiEk2KcTWebmx65TPMFjDUqduepoa1jQzAa5ME3DeHjheAyXLtEf9gqmWru7tGEdJ7HkXqkHBaNjK4mHJU1",
  "key17": "23B7LSmiZDimJ7EXJes6yaqM97PVx5GE7TsJZhvPSmXBbiEzFcn1uQqYWVM8Q6MeqYCJbrwSSpMprJLxUECwLECg",
  "key18": "4hgfMjQB7QptPpRsyVALVBZ1zGPyXA48YPbSGqQQfpPYb6PjG4pbJR9UwHnNvbc8BocKUUrUsdwd6bt5RZwjFS7E",
  "key19": "3mo7CiZ4vRetaBTzG2ayimhRypeV8zdJNs5RU3N6jhL7GBGr5wAw2zYFCrohFehLzDAMrr8BqBjyXS7bJHCFLHAA",
  "key20": "3ssSWMiTMyDejcPiEAqtQ1kezQvztSqG1mER4KNE7frxCqpLasGJTLpivTpJzTZGZtNWmtSm8ig7yQQd8Mu99kx1",
  "key21": "z7yrSTqd1J5QbgN3XsUV9otdZ5YJtKqX7J49Bv4hK6cyGwpcurWu5CQm33zCRxA7YnwB871KqwYYJsGjBrGhmaM",
  "key22": "3oKaPHZaCZaaso8LVnpvxXF99wKLTCVoSejmVBPDDCDYMkrzrVV2awdVVyjTuPLBxz4186F5cUWRwqLPJgEgJDge",
  "key23": "3poKCwTtyH4bNwLNUhMywusXJnWvr9QYVhzyKhi2bhQMdNbmqe7XPhpmMPJd8Ta6oBpEt5NDJ8QTRXyWuEGdsibE",
  "key24": "2PQ5kjC8wpV93fVM4xtLcxe5VeQCiYCrZctV4NjTVhDwTjqzYtA52znTcjQSUbNiSWZvbDNGKrs5nr88i5gx8rw8",
  "key25": "5J38MTUgcNpLhBX5E21Xbg3zKaBaoR7Eko5hvbdBN8HAjkU18SCTdNsS6G2MVQRUrvqzTLPbd1a4FcY9XBeFR9sn",
  "key26": "3gqPzrqbMiv9gM7L8pqy5wqfVZdVNf5dhUcY8w3puyRknHCJypsz6DS3Zpi7sjdD561LaKH1U9eAx96d8wfsZeWo",
  "key27": "AdRNfHDM4En9EayQKDD7bcAhZfphvCbS1QLEyHh4RVqJckFBC6bFTfFVfksevq4qmPvHKc8MV5Yq1mp67iAtaLK",
  "key28": "3hP8UMTRZVChNSVAC3Qd3yWtGUBoKJdKU34AKsckhseqyafo76jHHRikjitj9uP8Nxrev5MYxxms7Va97WttZw9U"
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
