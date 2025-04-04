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
    "41GVtX1yUGNB91gQGUWwFNfsEqFC32wxwu4h77b2pHMbx6UrUzH2JHzmpJfoiPxnBgjBJoBa74Feh9WmdKwS4gtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uPiS93JgjcxhALZhSgi5Vs5x475piWRre34fPQxqGyqtzd9RT5Gg5Fd7sigwHe2HFzZo5erS1WDGB7rccX9nbSm",
  "key1": "65kSdVfQ6fK76KvFHnvtiG4dMg9BtMKJkmfqpcfvNy6iwHdbBTn8StNkiG2zRcZ5cp3PybXWGex9t5KxWq7y4zJC",
  "key2": "5VGJfK1QgRA4sDCBC5cVwH8GFnQjJmSxF7nrhZ7n3Pq6hTF4wCH6JjWthYeczs1kU3jB9PbJDLuGLKjjyLH9d92N",
  "key3": "61oExyGEgrZGNG7CXyynJfB6GaYQ4YBscsgHByC6hsqhujsAATD3z8JRGGLD3hojcJfnY7uELhRq2opyu4AZEPqu",
  "key4": "5eLfZsF5AmfXjTN7VKHpgT42i7zqUYJPS8YNqPysQgW8aV5qFJ5QrozmFgct6saGvXLfXrSwP1Lcm54Ke6JkLYR8",
  "key5": "nrmJkqgpLPUkwPyCiPzKUuYR7VQuwgdzC4rUTVUqSH1kr91hm5kfNo5w3uXZXX8JuesDF2UxCXNmqcaPa8Nhd8X",
  "key6": "4ocgrRTtw4NTVsVZp63HDoDDL2jZjfx15RLypmbeGXN927vdUbxyy5FAgfFKXQkBFuuW8hXRfwi6diWidM8oSJtQ",
  "key7": "2V3TQDasWn9cXcmx5juJfPgWT6wR3f4DKAZq76AuYgKB7dYG7mwY5kL5ittAGV3HXCmyeMApZZhvPRLbCv1RfkQ4",
  "key8": "3o1dSe8dG39tWr4vRjLnpjbEHioEN37y7VkC1s4pgEe8Z4vXcxMpAM3YpNgbDFiWPR6pdkiM47hT5xQB8trcjLXf",
  "key9": "54MhGWCKgdg7kDEwfvS68uTJ9q9J63Z5j1EeSee8eKpLgfcM5Kce9ZnvaqVHAzzybaDgwxunWPbXQToWrWDJQWR1",
  "key10": "5fLdLtHcp1jgbw25o4SzVv1c27vYoNBraXAdAKFjvkpsGtM9Aw33mo5v39cW7nqr935YX1YtSNQTRgbwyCtvNaKU",
  "key11": "3trY197FfF2xND8y46FbWXYbxnAas4JiGxyfEKPGgobpRijJwbTujF9Y7ybeN73K7jVj7hm5xwcDzqtW9GLKtprn",
  "key12": "2pSQfpxX3udut5qWF1ZxwewA2En1qFdoe2cmFqsLbEY1K2AFqPBajvk4EB61XW6ZUcgTZfEnVUzJaQwKmQgdn5nb",
  "key13": "4qr277wjKxbRjnwji6NA7z8G8qKr6wawW4ERxbMWUNBKXkDQWMMSWNhdP7UNxK4jgEJWFDytfa8eQTsX7XCRxnVL",
  "key14": "67bDzhTaaknrco5dChhz6wYd7UVxJ53C2YX3GXUZwGtpdLRmbFaFUrXu9v1kVUMq6L1pwomcwtknwZ22VpX1yq3g",
  "key15": "4qv6vzweePEgtZvqfGvtpiEWULckAqMuwyA6aS4SQo9xvL8H5B7HjXPMLDR7t7p6uYCZJf8ZZ5TPPVwF3eecwrnu",
  "key16": "3BZhHP1yDNXsR1jiWjMacABMTrLucgUiWpssofLffGD9WH8F9JLLnpAinxyz23ANKTpKcXCZuBetKA9thfGqMomD",
  "key17": "63ZcEi6vqQtx9sCvNMVTUYDzcLVtF8TM1MsjLQqbRnXVwpFd7rCUBf88MwkjdfWQ8zHgjt64W1ywfvxX4ooXsa7d",
  "key18": "5wR29wiX1y15oMMECK1AZHinRvFceANyJPJg2kxXAvobQbBgqPX92RR8p6HeSr45xCnEE8msn8u7NSq3VsmVL4Ba",
  "key19": "P6yECd1trsFUhxhPXRW4sA6ccr6mpSUxDE3XGFhLf9LmJyhFdN9X47JJCacRj3dXZAS3Gn1LZk58h43wCWDvs3G",
  "key20": "36TA1MyCNRf3AFmkXHz8VrqSBMA5zfGVLoQhYTQKogxWAM2DdnJYtdcyvxa7HoiXkgZZCHqb14hgXVVQx87syb9y",
  "key21": "42GySx6T3ctfazvGcqJLWHCxDZX5pP3yQZ7hgpa4NzsHckyroDn3wz7cYBTEPJq6pLX5Qo3xc2T8TaBCuLnua1Ws",
  "key22": "5GEG98wYyxyZktoTW5SYc1hqtzadbnQ5f6z38wMdUE7WccTBBLBJfvFfGQ96Ya65mp65TcgfR2a36WHWnULiCLAA",
  "key23": "4W8d8fr73datz1S6QEeNq4WAM4MTf9Bif9yvybD1Um7UyYQWegTbpKayJtKDke6Bc27vEj4HbDSXjxoSzpGeXdpR",
  "key24": "28sH9KHoUQM3MPc7xxrMtDX2CCaYUXGZ6Gn6Dhnv3E2QcDt8BgtmT7J3oEUxdfnwk8swCzrgGqcHpQLwNFXwaUPY",
  "key25": "5Kw5rbbMEr8bzEdyWhSACfXXacs31FNZqEkFXbCJu6u5c7zuH2RyYPj7dVkvxqkGvYbPuEggH92AaE5uQ9A2kPK1",
  "key26": "CZzuLbmxWFDUU1wAGWiaCFLdEFv4iy9wN3mSFLiBQEHeX2jwDbzoKdrCXMoRTZyubQpS1EQog9J3DZFbsvkwB6f",
  "key27": "5sAf3W1FtfjvyLhPTz4N4u3QdmFSmyecBP4bXZVqm11C94MwNnUB1tgHBkrd4xicWEJMbBjm762c6dfgU176ABri"
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
