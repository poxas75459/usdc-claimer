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
    "63j6gmwK3Vxwcqpw2hufSYfKLfFAEvYBLMGkV3cVNeqdRJkc6NyJw3yiPxKDhnQ5ZdosyAGirrSbjif8FXbhkRxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PrTCAQazgN8q4voiMFiXPHNBAiXDhYaEyZJ682wHGvb61qy7bqwXWgja27WzwXqZsoHy6V7meBtPGN8aAh8X5JN",
  "key1": "33o63Vs6BbtpAU6ocNJipCbkeC1iV6mQoceJNvB3JweAu3QmUhtLs7cevFjwTivxDVVitvqhu3YqmCXSUnkxp9Rv",
  "key2": "646fJeKt8Ym16BXFGC5EuSCVRxCJ4wEAhf1fNwucBnyiFtYLkX37N8HLGjRyb75QBcqPAqXVZ1PJ9PXnMsxSwQh1",
  "key3": "pYv4sQQWvv5opxouSBbBAxvA9PyWA92tuiDGXFsfq6tHpESQ6XtV344XLxW7sDEX1D6PSQ9Rhh1nv8vSk1JDF4V",
  "key4": "4Fdj48wjMkgmGmGvB3xTVPLtodiXgim3pjHFSkUMMx3GP66t5wZDtJs9peNGQJrVn4FizXgwGnE1nkWBzEeLTjiQ",
  "key5": "4P1iVnnVa9L7PmGjjxnJgEQjdU17uZrfMfE7DmvcBa8nmtrdoLmHh8u3XdbQ7B68H4ziyGGdp8jYxWkPoBVUR8DZ",
  "key6": "5Zu8FVJDZn52FomDoL3s8vqjsVXrwCnQvTTWacNEtrPB4AUZWFedXt7gHEppKHPPiR1NezsJWtFSPMmrV7GZ1Xdw",
  "key7": "5DUXPHfwfNVkoutZBHbY7RyKwghbEa47etqxv3P8qPFA3bjPn16Zb7ki9C2N3faUDXmN3pH4yQhvfCJfjZbpEsi7",
  "key8": "3jpYxvcXZSmEEQunkqWU3FsNwxLP9bNczudfyApzQBjNENbrmfrHs7rBpAyfgAF69syGmb6KSSg7Tzb1QRZS1gRu",
  "key9": "4UfXEdWcPBqanSxLV9M5uwZ8wWoFxf9doiwNf1hiKCSxu3AHEja62qVzD9EqnRsCumhcvseD18wX6YwmjgZ46cx2",
  "key10": "2EhkzM8iS59woBGtgX7G98mj6DjZhVRhFAXS6vkRDNJPnyvFdEoDUdAMX5inSGCNrKWB2173Gvz3m13HyqDAyQpW",
  "key11": "3MacLU5kPTyiviAnfrDEhm8ucCv1LzDKdd7sbryuz5WKQweVujvKE8gJBF25qhUNS6zZGaJeZhRr3ctoerShAJTB",
  "key12": "4r1brCv7cCW1t88nW6Y8XRn5TqFSifsgUAutNipD3sLDwpk43xYrSNsKMEHvGDCtcDd5DF1E92HBon1eetnYo14p",
  "key13": "4auGZkDznHn51Ho5QJu83qwRwFfLuA8ysiNBc2gGDPhL3jym1gcqASQKPvRbJDK3GCuhSrFKohQQKFJSci6weVgp",
  "key14": "3nmdYb7eecg5Bni9TZCzgDTv2GYgzSxNnimNShnv4uYRipgbRxGJdp6WECjAf47w8xsRpvvW7Dk8KUcgoJ5JjG4J",
  "key15": "4yfmVuPLRZ4zpigapZNQaXZCU9PDB2BjMmJAhspJgcHEgzQM8TLkncGogXnKGpRSvJicruYueuG5APA3vvx45KP5",
  "key16": "4qG1u3NG8GrkwCJeFQiw4hiXqaXwLd4iR1QDmC8rQyrWKQNoCca1BRYo6V1urM6tJapgr58sgJiM6pcqSkhqA1TQ",
  "key17": "NBHb1bV9huSAgED9JPx5zuaSVnmBhfn7DrFdCKSbM17mQXEd5pGcE3BbpnUGvdjcmoPzQti9D8Kb3T1DwJ9Yce3",
  "key18": "2Mjf3p1MZ39jB3WH38n9eJrCauADQyuQW1RPfhScedJsNkworJpDXYKf8giXLvf3VjQhTL4xqkUJWwkPytiJ5tJX",
  "key19": "5MdassFZ5Xmewo8t4cySXaJCEuxGXLoQCfwmNBnbfDQB4sSa8wMyU3XvKw2rHcjBUQ2mNwxgAErsRdPqdat18ieX",
  "key20": "2oafvxYSQTV9zzJdxoD91o3U1nAkpVjCXR7cHdps7tKJxs2qLjqWgnchPBwWQLH2UygJShtvy98XXrAoY4kRbxHb",
  "key21": "2hSr1qy1qe9RzPmyFtH8E1nvKgTNKSxCJLb1XBnn41FBihSsDReub5Z1CzgB6y9HoysW5pYtQbSvhq9cMSvsP5zR",
  "key22": "WTA46UgKGPsMViAX5HGKnXNR27MMgRB2B9vCHqFxwL4CrtnroyXdFxpJ652i3MKS3dgqVYu8PcUTqQXsYT3L5jw",
  "key23": "2i5hwsz7ybT8YKjDFZBZmFWzAUbeZM79q7ju4rGvfzGo6DRuathzFG2LGqNFfebrEDsee2E35kkj99PX8qKJoYHg",
  "key24": "3Nwks3ipv1REpehvh3aPHQevtifFBzdMMB5Qi7WCrtYuDnhxMFZfA3FcHcqHs22CwDtvUp7AuSQQzFDSZdHCZ7d2",
  "key25": "4Xdz8Wsb5cF7E6sapSBV3DSbUETRCcK5XzDSZHGYCj9TE8gvicM2JJj7gkJNCNawpqLbfMgE9jANqvsMcy8WydR3"
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
