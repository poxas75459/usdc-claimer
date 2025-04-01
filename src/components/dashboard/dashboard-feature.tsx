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
    "3ftsy26eBSegSGWh7hPyEaZP2ZMW5SbXMx5ZFmCisdk9y9qDGUAdys4oT5V4uw5yd9o8NjKyHxY3rAjzSZjNY4Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUA8d5Q48XBoMkYLYe1Vj9zJkjyUw6Xrehrpnyy3KBPve2troZAxGYUmTz8EF2bVVRBbuYA75UFucYVrBtj57NA",
  "key1": "fUQYx2c2GuzPLbJS7rDPHNkFHF1nFCRBKAwBpZNaHNLzXZ7uUPwWNS33jjEueNRFkZHyYi8iQtP34TFhzeFvxSy",
  "key2": "ikNBEKjK47xrpRmYnHqKRd9JDpcA7dCgN6FnUSnHvLVu6LkTsiriFe9XdCndJig32Aau6g6DWujZxfHHe2rfFea",
  "key3": "6a7kesjCTj45VP5GLCCBLmLfumKxrBo7PvsQoCyqYkY3X2RyiQHb3YVPiJSucm4sVU4w84JG7eZabMeYXpNhSnP",
  "key4": "4seTha7nk5BdczGyWTNq55Bk5sf4vvpcHio8vMgZ8J1Q9FSxY2GwSZUk1m8Af6rdAcNssVu7rj4s7gzyf9nwttha",
  "key5": "3rsJ7V5wGmtZCD6Qf3ae66Mhx7N3CQNka95ENycG6YVzD7YyYrfZwnhnvH1ARyJAj1XcDxX53MCgaYjTm5C7wanx",
  "key6": "jRyuiu9mF8nyhznZGz4oc6tnuDMRe7rQtbBJ2yY3JmV6Kjc28HTXHW5W3Q4dNyGdm6sX8kcbsJimqCDx6W2XfCi",
  "key7": "eHMRBuu9PLh1ZyKcic9dKPmjYcH9MG4HELqxrEFUPJpqBGdq7Wq4Su9nrh9JJXfgvrqrCzUc4EnxLtdJNtzmQz9",
  "key8": "2vbyDrontYy6YFtGf74RyYSFK9fpcEnGXYPAzfYZdb65ExcPyFVFhveBeCxUnbJQEDhBrAJy5ceuNAVZMHUTyzhc",
  "key9": "BdXb4qfVwfP2zJh6yUdx8wQXzeKnK8KbyuiwybVeMnXZr1hUT2CVpod5rnHe1wGRCRTYEpbCV2fuhcxVrvGnUjA",
  "key10": "Mzdvzt8vgiJPKtP9VQYQPAvQnZ8t3T6ZUc4ZXWphWaHLGDtAhqt4cxZkDMwEqtoaapV5QKqoUQaG48s6o379rXp",
  "key11": "58g6VWLacqJVWnsZf52oF7KoCTpMRZ8rXSGjX62zb4mXWTVnJzLzZBvozpHnuPehMTqrKDgUsM55hrjUkqPSzZQH",
  "key12": "5SkqvxbQB9UkS8aN64oyL7VbaC3Vcs8opUAHVGyKVC8VhUPEZ5z6FDRzYquLGF6HjxeaKZ3APcLMmvWQBBkDXeW7",
  "key13": "2SVG3ftcWPCZoGVmPm9imyrpF9H469ioyoyBe6jhdeczpdyQHsGqTggSx9NY7KK1yAgekkvtB5NvNwpkpQkDd9AZ",
  "key14": "povmPh2SZXKBQ1dZXbMVPmb6fBGGcDQrMgxTtKMwxJoTmF9kFipYcenNGQi2UjZwrXLjyryQEJyaPpqZLGVn5vx",
  "key15": "2QUhKf8uffdJw49czGPuHQPFVXTgQEMipnDSfX1kz1V328mTXAwYXb5tGHsBD35aFiWBf2BtFEnNbh8HSkGPVxVZ",
  "key16": "4MGBaPHjP5wxsAkVeoQCp8hYzNmJmyoqyhLSR2rMx3VzCtL6JkQ1k9orNBV6rb1qSd11YnZEqbXeSxyGFYKjmN24",
  "key17": "4HVCocyGfTrwwJhNRaJLWB8vYa2RVQf5hy49SXwo2zLcbyGCkDephAp92UftHPeDiKmXwKuhkefqot3untUPSwBk",
  "key18": "3GvBUhut36R1j9bGPJgoAifvoJ6q618CeXDs7HfHQevxZhybF7TD5NuvMirKFEKKU6hBCWtzvJYnhT62fXNamXpY",
  "key19": "3RMZjutjTCkH5aFNHVRqQZpBsCaaKkN3vvcZDXfwE94UijwubfGQbsDGMYznn9dqZfpo8rcPVXmsUjN8wz2QcB1e",
  "key20": "2GuzxknrjSNjNCJXwdGpHq8jTaB7tgyaxK4yvbTDeQHY5u2iGAvUfokgHntE1ysb2LrCDfx3KH9mhQvPXxs7XJP3",
  "key21": "5PSpGmksHJiBNY64xCVtGbrvb1tCiLxAVKttS3ASZnb2JHt6QK8uV3AChRnJrNE6fzNR9TnqZXBZX7dqkQffd6YJ",
  "key22": "EJ9VDXT6u1fJ2Dm9Ws8cnTPGdaMrezqwFLafMqXSo9ujEbC5a6uU3vBzWQ6woA1XGA7AFApkBeCSGKiyHpK1oue",
  "key23": "2ikqL6p2utoENcsSw8wzH3ottSCJiDehdRWtRqW3tJj3mqnxi1qmi3xFcJx6kXPbDU265WNsYFG8r5UNcNnvq338",
  "key24": "4Pf2rtH7Q4tERSDD9QLEaUnriQ5gYiEF2TURsy3n97JeGkywPra4UbxR2ZHreG3LDrkuDDmjcfSyBKFcQdMu3zYs"
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
