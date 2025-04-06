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
    "4ccUo6JLnkgwzdwepy7S3HssSAgc6tQfYTncCfUXo7UVS2G4zNk7pt29vFFYqrWcSSi4pEosJiTJZKuVvMr3x5A5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQySHZtnhBWWMMBkcX3Nk8UuusD9bwtmwQTvw9LPVQpZf1nfivDc65UGRdPed4c9jrGg2pe6WVZV9tHF8LMVcaq",
  "key1": "3nmkTyrzKCVEBmKjfaZMqgGNHggUfJV8S5SmhMpdc68XXPNNQDr6SpnYeEeWSgKKcH6bcGhsW2a5XBXbQn32h9cp",
  "key2": "4ZcL9GD8VmV8gwtfVsAELma5fAjbMK7jkUcN4YeYjfsxLV1TescLDhLQk8XYA235XZUYXRGYACdDRATgCouAXBns",
  "key3": "3KWdVAfNiiKYfaCz4Toj58TdcJ7Kob4dM45YnLTgHcgHCsmCLdKV7FnkkWAR8iuXXpCTnhZ7wP1cu3nMnBucvFCS",
  "key4": "EMYfzaLx2Lw6KH9F6mJeAifVqWvJLdu3gnR2Uk9W2PsEYFV91CMWVhpbJ36sJkokktzAtwwC5jtvEeMQ88Qjsum",
  "key5": "WHgVsw1zyW9LWCTfX8HEFCdkTpagPFah5nbU96G3RFytk5kjrxRPLrCbCRN3URuenmnzxZzwqra6amoGvUs6hiE",
  "key6": "5GNnnfBDzBxNd4er9EhSLtTSb82vumvjnA5AvE6X3NAvvwdp2ecgzTkGJ6S8DD3bg7mHrcZLQMBUxsqD2nJhGWNj",
  "key7": "25VZgzuSMQkXPc4zHx7zn67FNv8nNCRL42PNDnLYq6Vwq9ApdfQUAgn4FByiAwhkcehjCEdwDEXMg6bUpRN1LnUU",
  "key8": "4oy9vmnWs3XNagGGRFJUUJMsbPXTaXpE2AUhexry9Me4NridRBcg4Mr48x3WAciZGyY3e3b5HxiP61u4xpkdnVGE",
  "key9": "5ViEKmidyWGYFmjkTBYmRv9asb2r9qrtD9k1xyu6AUTufdvUsqYxVKhGEwcbnwUAgc2t2Pv5U3oXTTt7zFE86WJY",
  "key10": "3nSWhMy9JjVStVQgRxnBEhcwM5uk3kW5z26VXG6qBc5X7ibriTYH8WQwbhCuZotkWs1zRVcMTfnpZ4eoPfC4K5cp",
  "key11": "HswrMgxY9dAMbK1aDpfWPuFkLz9FHfG5zdRtCjWdSN4WC6GY6BVh4DP9XioEDJYW8BCYG5Pj1Xu8P8smxT5zXCN",
  "key12": "28wmBE9q7MvVXuvLaV7NLVBdYB9HaeLS7zkKMZ6revLr7CzFb1QgHdvEhAdbEJVhraXPvbUiqipvuvLSnxkNvTyq",
  "key13": "3Zp5txeqicncL5bZWb9baZYXBU7EsRYhGKMqGVFZNurdc7xYqtg4QFWY3eXFK95qTCD6gVdUZBpcj2M36W5XgdTa",
  "key14": "3CTU4hcyVWFKXPMXMpoYYqjRmTmv4qEAaDquPqGN5Szs71drHXxf8oVU1bi9fiDa2fSreAq5fenTTVpF9JcduUQL",
  "key15": "23eL1TcBkPQAgurCZ8myFPhZPcX61B5MDzzYALZRyE574JWFHJ1PvzXtGa6xNtASzUoNGRo2n9GDZWdvS8mCzyL2",
  "key16": "p2uV7TU7cLNfhxvCC4gm5BKBbvzp3V7iyiKFzs37pjUgynJHrnunjMWGrUdRP3nDhqc2ngg7Dx5KNU1aHp7cbmN",
  "key17": "2eTSDfpskpUCBJcrnE5nWKS9F58mqV9eJvjCyTpdF5otdRmDfsD3hQzk54SPX5vrDKk9kXYkCB9EE4SWT2atXwWE",
  "key18": "48mB65nuVG7bozDbdGmQyBCnD5ZZVDaAajETPq26EHhNKAh8S4ssfhJ4tMkU39X3vhAPh6Gu21Wy3QfivvAXjzXA",
  "key19": "36NUXu19xF8U4t4dBtoWWHnN9HJinXsiojcVeY3eWDCc3n4gX4rs5KHFSZooJhrqYMzk27ExxAegtZgwbdcWPrcp",
  "key20": "2WMyaJffE6vxnhtRT1uBsvY1XumWTJs3ANPEuhmVTNXGGDeKkcdMBcqdwy2gyQEDEFEkDwzgJFUCK9kyQpr6wMd8",
  "key21": "4o6ddkYWUz5yZFpscBbfrybhVseAbAgDFNmqv4iT6NrxRaKvuBUwQLsJSxNMBGhMp9gCwfLTJKCnS9a3BL9B7rsW",
  "key22": "kuf7yMbejjtFWjBqxKysAoSSexqPD8giZWfQ5wPJkQevfLPAfuWS4wFTJBNuGAdgvEwcRaEN5DHKF51XPjoA31E",
  "key23": "2gBXC3uAj1efFp8i6duVsJ6eghhrhBoTZTy6ZGE1MHEpD1o3G25umz512YJa7dCotpuMdfe51F7yuq686wo9Gikp",
  "key24": "3ZnAfyY9PewxSshH8T4gSguwqi4MQBosfqCsvH3xG4sqesHLZMsYBvKQevgvZqejYtkodk1hLnWwW1manJXAKV9a",
  "key25": "m1EScQY468pqNVfFagSU31EasqjTmWnvCcbYy2UoiMViE41aA4UbeC8zLGVKaYcF314BzphtHoDZ1oJy7mHYpMf"
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
