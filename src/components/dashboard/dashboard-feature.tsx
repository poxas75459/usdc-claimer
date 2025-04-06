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
    "8q1Z6YRc4yBnXYG1un4Va1QvaxhjKQ68pvvdWYbJHLGNUySnZRoMcUGN4JPsTt4rLpqp9u8DhEyXXJqdpXDKvt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54vg6iHK6METGrJzcSeCwC4X6KEUtfohJRU9XfLB9kxRHQXALqkWdYZg5yk8QHCitjh1hsRsLyWPgD3AUMER7kwU",
  "key1": "3WuD5NgcnfF968bYvw4khdG9FwqbJHiJChBPLLPx4VDfNUdCb81iYCNuCkBXUxMxo32bP3wx5pYHmv4pRFK5nzjB",
  "key2": "4kbCLZnwLdj7picsk5JrL2VY4G38WFgrLTUiQu5sQB4C5FptJHmktpRWY3WnA3bLwvHDsDtcWinXKzU9z8UTyJ6J",
  "key3": "2cod3GTv5kzzGhtR4Ug9PgJANJQhr98zRBrbptvAY1vpBmjkBwyGF4Czocp5eZVs2hUFKXHGoCmD2i89D7ty8iyX",
  "key4": "53StBbJUn39cKHVWeHtU4jvaL5uuagBnbTThSzRtQPtcPsqRb7vvTpUQdobnQ1UrHdVpi9zHqVwZUdwWirCpjhLo",
  "key5": "4UB9qNwnZUViy8mmF9UpLpyZv82Cb3m2xe5iEpP3S3ZWRFGKde18PodtX4zdN7bQf5hn2f6Rk6UpVbbeeEhU4hF8",
  "key6": "5Ad4m79znvRCawkmdAzds7WAh9xZ4bZfsJwK1ZvZXHjSuf5zBwPk5T3k3zhwSPNsiCJ5TtYZpihSb6Zbc15qFJgg",
  "key7": "4J51wCbkJAaBU8Ga9Y3ZJJ4Dp5NTeCyKdzU8ce8D7b8XR9eXsujkdzZMS3ycUywHU2BuMoDQCmLHgq57ANVLbFYK",
  "key8": "651N5SYQ3stejLrKHrHEHcSMX3s1qHi4j82tWyh7DD9Zeyh3eZkU8HKmjDRZcwtmNHc5Eh99FRvZ5ShxKBKA2isT",
  "key9": "2pdxLUSr4eTods8K8rnJrugUBa5aAhinrr4FniokKcaCohsSgAtToRwnGZWYRFBAyYEJ573YB7nPsdwm7vpmNuHZ",
  "key10": "2ZZheJ5CQVazFY9irmiFUtL2P1MRPr1TbtD3a6QDhUWHoMiXQjJ3fknKPnUR8mKEgQJqewBRmUaYkyXA7ry8dpDD",
  "key11": "v1za1VvkLSwaevRKMe4Wp8mHEBQo6xuDWyyhmjrRfYiYi76bFJHotE2vuTkxV5dN2J8qefgVw6YcmnGm6yJuXLj",
  "key12": "4mLo5inCX8yBAaZ8DmGyDob4SXyEsdDq1NW9QG2dWxVhqKyGhTZqWmJX8iVR8j8WTTXwZSs4XS7we9RRDQ3jE2kN",
  "key13": "WXVRYKKcpQsszx7yRXWarisRP3EAfRF7a1aGf1Gq5D9DjjrveuRcMBBrNJyV1xCgNB3qrEyAoLdzDvYwtbkXYmy",
  "key14": "4Cy7CbJSxAwFiD3wPq1omj7JrdCWU3gf2mQGpExSKm5iwVkHhwQaPigeT73E4ScfhSwnLhp1aja8o6CCxQJEsebU",
  "key15": "42Q5rvC2WKtB27f48qqU8gTu5HFv6RT6u3kFedKXtTyxxGFZ1tf1t5tFvRWHbxXCjpuqw5sXBNBJTbafJPacLWT5",
  "key16": "4NiqzZHgteg2FTcSa9BSdF2PWqCEgzZ6DXfkRwURi3sC5YdCW5Rbpaji4ebxfX3xSoUU11uLZjP5qABxfWh3ani",
  "key17": "2UoX1GBerfajrMhKHeu9LRNPeEhb4QBXBxPTSHeXTTAGJWDhcZpjmdA99vNipGCHwDyBitmVyxGkQuZ8G1LUegxW",
  "key18": "3WaPzc1rSFS5v9NKaSD7rZsLp7RneBgUSt2ofKSbPuwBcAGPqAx4wx1adDMdVMqBVxoeAVuEnieZg9AWeqfqjRXn",
  "key19": "3Tdj9Lk9yA817mvAKRmZu5NKi55LDWExRe9k926wsTtp6e4SacKp3QqetS26zYobYgV1pXgSuqFqg4gPQeZ5RUwV",
  "key20": "423PgdtyZUvhfZXA8dqFaLt91kSMefXf49XqMT7YsKLbskTvEGXo1TjLgwQLHQPxMXqppk13XAFnnQRKtAhd75Vr",
  "key21": "3ZGBJz2Nv5twNP7i3UuQhBRnEkn5Fz94vuagUMQKnpDhgp7CTCLN5aPVYTfpAEm2n7wZtAJ7RWvcePSndXBwLYJ",
  "key22": "5pea43Vf5CdDyp2jsoeH7MnbaNpuJzJkcnvWShhrosaEmzvX8RGiemRS28XiZJbY5tphjrWj67Y9dDGthqsYxT1S",
  "key23": "3bW1ofVzQNtgzxRn8wfH2Yfd4m9ubYRwT2QEBmvxrpQdPv8me7fz8bWF78F9HEAQtuMeb7pz7fycqxU6MNZyPcGx",
  "key24": "5j63DzGWhvHmZVr2Jq3vXV5GZT6kSBrvw5gLZyAGoef3FBeV2n4aJu7qm9ZY9Q6JzUkemcXhwSwRwmjUtfNn1nqm",
  "key25": "52pwexRJfiasX6DPuPZTWacMFs2FSL19TBEw8K6uQaxiEvJsRy4YMYpviBU87qQPM13TPbV2BieYU3X6MVFxxo5H",
  "key26": "2Dff3vNwWZ2WY86mBsAjjmiRQfdDDWTmdKVkmtFhvRBcxubLHVBasCJ6R71uBqLU6uEuaWGDNKzYGJkDZAeRnAY6"
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
