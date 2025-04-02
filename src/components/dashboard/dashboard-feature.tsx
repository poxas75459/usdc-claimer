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
    "5L8VbpgwNjLJqiypvrKV4WESkDssUBQDwB4sHsgzGd4tETKC3RX2yyEBmxeZPtUUsMtUNoKpbp2k7492vUEAj41s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJZSC61gMbjqCEvQbcnE4QKgNBBPzTR8K3XU1TXXQqaG6QWP97cTv8axFE1xaN4r8uBBoQLkJ5MaVDs2LKV34RT",
  "key1": "3oea1QzQm8wQpKGaoYsiCqHnDfh5GE3wWrkYCMk8CG3R8e9nhdMRAeVgsrE99XcFP6qRkYor89FFBZkVeaZ71Jbt",
  "key2": "AhqTHWjq66nxeBiRnhQMitQgpn1zyBxjbxJVnQpCNE7mcTkAXdZAbRy34794YM8rnLebCVACXqX2DaWVu9F6yeP",
  "key3": "3NotH6N4NjSLsGS9hZGiiJBH99xnJrVX3EARrLFrNpxBWoYdHB3ND7JRWmcBYHoHTFnPakkPNY9bqZKLyX626eMW",
  "key4": "5pX5fdzPShatVn8WmrjHPymUgzS4TVr4Lv9c3od3C38xm3Q9Mn8QvwtbiRvvWHVzh7hBUMtPfFsjwK3ivHncxqG5",
  "key5": "4uXeskf8aFjDUQK6KVnxGgHtysjQ1zJj1FK7RQYsb2FP66GBBocix43f1cASSuyk9qHGHyfxrfZUmw4gvJRMHNw5",
  "key6": "FTzfwtWjXm747NTZ8MNvvzWh3TGJXezZwoGwPpaSSDsjukZW7tVNDWmmc42LZFaeXong98ZoaSq1n8DfkPWv5Hy",
  "key7": "2JcwmXpZfRcNa6koEHKedSyUpwYX9mfaq9vVXWo7W1oi8s6RATTZewPGMbJ7A3MyLWYQEHjAd9z5YxzWqSbVDXio",
  "key8": "gSZQG6wGGg6wFw2xsCLJfQLDANvbyq4BpkDC2vT8fTPq1Gwvgkvu2uRqDdQ2rh2hCR4mTzox3JNCxCfJjyP1aAd",
  "key9": "5Zo7PvQmioKv8Jv2CCq4SgQYGG1bXiZvC6yNiNDGeKAdWFtQhbt1zE1GoZh1GQ9JakhzM7cBa61YNeD25RdbNJkt",
  "key10": "qfwMsqszEjH8jdHcY5AyvUeSzAtD31njGk7VYYxZ5kQ2DVc2JGqqrJw8YJxF1SNsSsuQf5v7aSjHMxnME4eLkHz",
  "key11": "5GvN2e93BgZP7zKb8n5syfP5A7XUaFtMdTcKZxgBT4MKzrv84cV1gfQ1WoFC5FH76tzj6Xqwh3yih5rFKj1ycXRZ",
  "key12": "2NJVGsmYtUWDxY3PgABvHK62RgvhwauukPNGLL56oNGjRx5eWjgiQUnpQb9etMms8x4sWgM3qKCqUT1HvwjnbgUd",
  "key13": "2Sjapmk7emFGvg7vS7gK7m6rSvLQrEKAZetaGbR9CXXxxU54AC1CxRcczoCMGA3t7V3Ps7mKZRPFag9e71dcqkhD",
  "key14": "5UttZRNKomtfodY9yfkcZPd8rYKcQsKHZY7juSTCNgFp9xTtRi51AamxB7fqcmNsEtVDM5NixnheYNGb5u7nJBUB",
  "key15": "3xSfNFZQcU9LSn1BSLXL6FxhJtecudXzs8LCHyeh3pDEcRU9WmxUDdbN1nMWa7boy4qZZ96LRvadBMYTExWsmiyd",
  "key16": "uyhfpMhVetA5sCvZJ3uWQYb9K6rC8P7sSmxkcc2N3SebRodrFRbtHRyLdTbArqpmqR2mpBdAHAwnZTfLBkqFLut",
  "key17": "21BdZM6Lwj915wNEaJm84e8vnixfMvFjjh8QnC3GgrBoJ4cPQiyo5xbE8fjEAJCwEEPcoAznr1yTdo6iMBUqJckU",
  "key18": "3PXwGLU6LZQ8hBjHaBRHvcmjNHVbN7rAabCw98CSsqiWVduGgJQneuN2Kmpp37z49XBL8oY2isDJu5AFQvbckJ7A",
  "key19": "kf9wC45JHkPdFVQmE2rM7XYP8Sm9JPu7FFrfnQvp8EKdfD89wjt34BLwMjH97vWiAekr52LdLxRHbXiuDMLEY6w",
  "key20": "2ebemyAXdQbFhW86ac3imz85j6fifDNagTgeXKmDsEJqbauB6kC4LkH87oUyJD4rbE6N1hMviVxp32sXi37cSDka",
  "key21": "61HNSksyP8m2k98oBSfVkkuNU7uHTUeSTDU2mTLgERn5dmDoaieAYKQRmTuZofCp5uD2CPtBD7mcJFu5PGPNsuwF",
  "key22": "65FXHZY8vZ46cvMugSLtNkBpCzwVxuZomYG6NpGWitrPkPRrvrBAeF8uXCodihQd9SFLPMFKnXW4z2RQtMYYujoy",
  "key23": "2Am2UeUjGMNyVBJFLagzLoHFBZHLvJR3DRT1j8mQZsyGdnKW19hyzyEQjEPDpj5xhxjQoGxbC5jkpagSAWKn2ubT",
  "key24": "euj1UrGFWwqDKy7zc8cB87cFyfR5zddKUEAyNquiMBXPjXp9mYahLnMDnHmgNZ6vfJwJocmrZMApuxLsT8pWXJr",
  "key25": "4goZsEKfsRJUgqcy9WN3Cn2TivE9D1iDfHMETgfhJN2M42fAfsvXnVxMwMVvCTpDQHu4jLcZLa1F5Y4kUQpJ4a9M",
  "key26": "5Kbh59Kwg1TP9L2rVU8VtaHNQPhwwbA3GLM1uo88q5CzegmYdhrXt96ZEVNaZ7PDXVoYqTEApbPdHhp68CWafNDM",
  "key27": "zVqKc3pcAh61fg1NshmQYs3Z6j6vk1hESBXgRT5UQdTbZACb8TiHJpeWkREQwa3Q942kBw4bCDXJEcoUN5vXxtc",
  "key28": "2B6Qz7YuWonKNQTbGTRpCFWa7wL5mWSmA13ZTttAQMHdhaaK9GpbAsJDYjfQUCJ2qDqsEo6LNtZttcKYZ8LZ5ATz",
  "key29": "3wdhcGAnksJ7tGZaFP3MUoY7miXQEQ5AtFbSzWTCLG3FnYAcaSn3NUBeTDN8YdT5ZJNRzHn1Tab1nkkEY2AE7p8T"
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
