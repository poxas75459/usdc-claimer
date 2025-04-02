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
    "2Bjid6EtyAwG5QthkfPSwRg8coozCKY7mvdwRY5gx1MQXxSCa26NJ3YJ37S8KfJ1ZLfpzNAXai1zq4YNDd7mV4kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2viAVZaWzFtdm6iVRrNuzyCrfpQD7ozEqggfjHfipKyMFhL8VzrXvNNf5Q3LUQjJe8BrTKX83MeDKecRDms86FA8",
  "key1": "4fhnvfvVSVNBGG2epDcDyWpdKmFUDNN9AZCNcMkoAm2Z97YEraLBPnxczZdGitqsGMkQTSVXStE2GWQEdSU3z9AD",
  "key2": "YdMd238trj31JxcougJyq9Qo6ajeJeBvaYZFGzBqksAL73XtmJtvVBJUSRBrm2fGAahvzGnrdphFS9YU29oM2FE",
  "key3": "DHzFAM6yYarPQXasyTpEvxEemAMD71VbJcEa8vhJQwHxw1bmyRu1N3K9ynfBejApRSWr9qKEEJeVKcKjJmaGgBy",
  "key4": "4JJmsQBTfzQoDtFArEMhSV9qdne1LKPgFgkxoin2N3gonTw8ARGMftS3TnQmVwQ66XFZNP4D7F86pVXBpvg47fvs",
  "key5": "2xHkNp51rmJzfRNGZYwcAJ6qXgtuj7Qfx3VgHFF3rUV7ydBHsKKDLS7nyKLyvchBAYdUidNKmDsinvTsFdQzBeFS",
  "key6": "4AA9wcARHm1cxH8ZPVs3jgCv1GHNoE3bzTzv8ohB48o1dDKgwtyHKHj4ZRzbD5aCBEwtbcNhTc6rmvDNwQRSNTxH",
  "key7": "5NTZkFcWVjBsQbUbWEacNewnNGXemWL9hcozHyHGpfkVNZfBPeC9of8aAW1zj4Kq65edv85eeyMB5hpqWZAgzovE",
  "key8": "3PhN8w5PqFLtPHbERk89gY9YSaNwC7ZeC9jhiBnqbDKrAdNDYb59EoGtpo7hjf1G8Yr8bGwcmxYan9MrUNYzoUyg",
  "key9": "qyAY3RLZjLoHf8a8zUYE9jsJUMUVPPuccN2KqkiszVttPatJoQar35zy87xcF8xcJ3CkzammVT9vi8CgxLsf3nj",
  "key10": "2kaTZSRHUBSWcG2VhEDxhx3akJ3iUMKF5TnepqhBdWWc7mQ1JFV8ruUWXQMfcSMjYmjBvavjJaBhXhvSQ4vvjNSL",
  "key11": "5PiyAdg7X9CiJjRCVZYuLyNcxo9LZ3kkGq6rAhvJdfhRb8CegTAitN29hpYvvbq3XeQxxmS4E7yxeGHJqi1bv5M4",
  "key12": "3zPWmyhtY6BKzQJZuYgqvC2tAMRjZkbsTU1jTVznYco3fePoAfpPJbPpA6tNTeQh4XnD8jbtgVcyr8N9j1XUyZ8k",
  "key13": "3UcdgEekrCX5nNmGHcQgvxrt2BFGPfc6kE69uFBt8CdBBtJ4gk8ZUea4MCmKbFQcufMXxMpCRGVzFkNkXTQDP7mh",
  "key14": "533pLj7AzMScbBAhmvLzEGDpedAWz9GkuTq7QhC1G4TyJcBXhJ8s53EFWW2fWkuAxgjPNQrxoK5sgXMNnFfRusNb",
  "key15": "jiRZMjUGjHaCDxpqLqWr2EXa9Z6agZp9SHmyPf8jmtBLqCDn6GM3sV2hAWQZiajc1MY5yJEQuRyrGN5W4Qsbc5y",
  "key16": "2hSHpxRAWwDHAKVrgm7P1Hu2ihqEsp9cMoYbE3itUkBVdQQXZjJgodUfPeHJsJx2gM9UBTmQDctrcjVqYQyEzRVQ",
  "key17": "3WM3PKs8Exm9TR1SNbKpk4H8TsLPk6pMh3cFxFKq28M7o7egNGKngEaj8sLjxSNYdS1e8TLVkMGh3VxsRWaC1bUA",
  "key18": "4pCKNbiZnMH4qeUgGU5RaEgfvwwtWppBXuBYfsBP2vhvnjRLrAq42h8JuRL3QyezwbL4qAm7VaAdqmx6saEy64X2",
  "key19": "Rpngdwh82aL7218CnvfBYUZ6nDSDeVjBrbbjPQtzeHG8L9oKKZmJqzrMeRUFNQ8WJCRCCi6QyFCi21w3xeiKDwm",
  "key20": "3rAcYPwNxNUUEh7bPnmK19RnkpoAcUDdWKGSaE1nK4FDbbA3DnjWYb8CDVEETJM9UHanCGCuMz4SnT8osZ8pbPq4",
  "key21": "pu3RvmRaRMRoeLtsriKe3iR63p6agbCczNEBrJpK9f6U6WxBXF8TMcVt28oUmoiMFZfJWhRea5h2n38uq4kK43C",
  "key22": "465Muk2rBxWJ41ps6B8mQvK812qhQowTi9oRixrcSKkLvJYGENR2HFhruEfrnzGwRAAAogwLHc7VfTsJs7akRV19",
  "key23": "4tH1NA7ahPMMg6m56KuXx1rhA5qk9LmAhcSGpJxAwehe1Jmv2YtgrAAneRGfv8aR78uhHQy6Qub15mBx3XG4sCdr",
  "key24": "ASGofbdD9Z9deTUW9F2zXkVywL5p5mJB5spxnmvUN75CJmpLGa6EitUTc3vCYf6YtVmLBbpHiH9h4jQdFFn3sEz"
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
