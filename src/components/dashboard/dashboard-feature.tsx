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
    "2R7dcYwyEqfwmEGpxr1fgkAmMqWqEsEV5CTQXsaJ6T7sGW8cqaLFsGGFjt4N8cwVyBhsNCK47jaknVGyasHcP4c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T6AE1WPWarrdW36hn2xEZQWS8oHBVqMH7pe9jUD1WMaAjgjTUXxA2Bca89gM4Eye7GgZiAYKJqnGV7ya1oy87oG",
  "key1": "3U2q6x2tJSEQPEUmfq2P2Z4oCe2pCaAfGUDo7rLyJBe2PTn6YxyQXRPNM948iz4oKmSEUczpX1nVbFShA9JmoMNv",
  "key2": "58rGoJV1qSmZpn66XYkPmJLR5aRsGka57f9xBgEsmkFd3B1XDyVpwVJzs6MZPpq4nLBMwYC9mdKXVYkE4zjQw2R",
  "key3": "5mQL3sqHZ1nAwswcXod58deJRt4TYDjz8KemhC22DwKLSGvsWkQbMgN5oEA2RimojzwY9E18ttfW1NN5X5krthuX",
  "key4": "47CLPCSQjqJ7MVuXv1BPLyGjNGxh1e8CbSyqySLAPLzv8cSTSCo7T2wavovCKy3ygmwp7zVi85ij4aVQSdWYadNt",
  "key5": "5svyXqmVuWUkZ3nydn9gkTHEF6fiUChu9Z7ubxXePRDjDKFtPRKcNy7ygMbLYwbQtzka5bFa2WuXVjWim9JPUgJG",
  "key6": "21VgPeXq77LXAqC9SVDpPMiSCRKvPdyk2P3r15QGZV7vih4Uqc7AXaM3JWrpsvvzpRM73L6qNkKnAqWg5ySy4v7y",
  "key7": "44xWa5465126p8FAo6gV68kiw4fx6pwLW7oQfnoyYt4qYxNv19HZB8xT9SeqwBzAZEThXF3vA62eUD2YCkFafCxW",
  "key8": "34qutY8Mk8n6QUfHQBvd3xvCmsg6qPkMcZmk4UV3Ae9ACfCrPjRa7eWWVbPE7TtgJTePCcj4RmyVJLEM1fH1drYG",
  "key9": "4vMAkWTGxyfuU11VJKjFtLqYXfXCoyAkint1zHdbaJLRZgXtw2PA4uSsJfHmQhGYnWc52xUUkKCcS2YsoKTdM1Rw",
  "key10": "571WqXZ3svmpp5gjbEZAeh7XknMFkxG558JKdKcefwkBxH4t3NseAwHUyQgLv2L52LVVHZpQnEAc4MTyuQBQofLo",
  "key11": "hjbT5d7FTzCG9JhFMUeGb345e3UJYyF3qsjDwG2n7wE7xxstVzXzXg4KfKtTmYqxgmujqZceYRkDCwQTY4G1B8X",
  "key12": "5gA7aNXTQZaGF2P5dnAbt3Gn3xuR5VocnBfxyUqBauMJ9vmLVkfziXe376aQboHsrt9A8U9TWcY3W3W7jbmiMr6A",
  "key13": "2wvhPo3b4CvLoByPC1wRafD41pXda7wjiG1tEEGfWeoqu64CmSe5YxiLb9LriVd5Cbe1GP7tCk17bJj5STkH9HfX",
  "key14": "3kcM8FpRW6BgehsHbQsDPSCocVKGeJ2C67vXLtwT4nhnBjRWXmRTHNDFNVPK2ai6kXmARFzzLUTvMmb25cnV5fnx",
  "key15": "5rq2QNTciDh3XgRbsEzPKCZEvZny4b7UatpAJvcZFHzDtcM3CW7cveWiKek7a9TQcucoYKxzFKtJbWS668YgHbQV",
  "key16": "5YGfKJ1uTpZw9Zm6pvDC6xchmx5W6YgDz55uW4ivCeHp6yozqAJcNcABQkDyDu3VaZTL6mTb9yaCarCfRJYSdxgj",
  "key17": "3Dr2AqejQukyuPNACwCpJerW4vWrufqgPjd3SEiVV5xJJ9KYwocH7D8fpJoBzFTUsuDfvoTJXEssW1btC52YvWJr",
  "key18": "4Xxtk5HTcJ93EGuXcpud9rVtEK3AgxXGAyaa19S9Xydvy8yxgLkhuJ57bVtn8aYpv9R4aXbv7N1BfJzdapX5XuvZ",
  "key19": "5yj2qhmB3pdTQZEqXQAXiixHT5zy39pfYpH4TzFjPBYDrgDa93idWb9jHMZM4uiX82p5NECGdHTcmgNSetmDTvHC",
  "key20": "4JsdudMGmKpNxftMUZSp2zgPcB1uikc19j7ZcKY5hFpU81usPKYuqevMMLQ1mVQRqTTAPyeK3sRN7ZAkAAMWi9ya",
  "key21": "5BLADyvVM4u9w8mJK4FWRe2kinQv2XTskZPXm2NDX7soouhBZQHoeVAkUfqTfGbGRM8LhXGjV3wTWHAk7EtxWCMT",
  "key22": "3gMC67MsKBPZ2Ue3rbN6wYP3eQDDn6TYCeoWxg3cMoNUz2gHHeXjfcRF93b3Z8F9eC2h6KXcRidJZ8gkJ8bFkjzQ",
  "key23": "2Etoa4vN4onjiXxJGPUV5LLqY7RMmzNv4PKTAfw1MELLwuB9DBX71UUxaiSfkixAMxyHUaACx1HENAiyhZueBBvh",
  "key24": "4VE9u2UVgWpjt9vMYYa5CuoTzKPaUrBz42G4Tr6c6jRTAoBCV7aKfdP4CZ9zpnvQrijV94bJxuBi9rkWeroQdZaG",
  "key25": "398Dm55ymrVCKgXbSvnPZV2onh34n4zPTACBwgSUKru7gjN8tef7NC8YaCkgXqNcWoSCj2ssHNqWVE32HJcrXn31",
  "key26": "2Un6fPQFVDVj7s6ABw7z8abTEsVn4u69ZdyM2YMzjPM75dtWivFJi3aoS8HSQK6GdkuUwFQSDfcFtArkFhJxuygE"
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
