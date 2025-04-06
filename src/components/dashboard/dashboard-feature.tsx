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
    "3XR3vKDoFjmFf8wqVEuNKQhJt1Qpt75Q2GG5PB93iipLFdZ862HFnz35x8yrRZchyptAiVpmwVX4Q5r7aZzHD3wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTGF8AN1hbJvVTrm9NDByo56vp7KufPkfqjSL9XfR3KQDEWQUwDC3sYw7o2Moc9PGYGQsf6qvy4sZ7wD1c4CR68",
  "key1": "5Hmiibr5oVj6MJhH9WNVEfAABQ1jvSqCLprVsTeqyBJAQ2uvfyueDFfXm6ZSGAwRAksaNsvB2w7x3NgtdSMVQm3Y",
  "key2": "65SPa3ybgCtHEEUVFerVvGVG1t7iY91iZ4vbiVVkqjZ7Lb45nvyoGJ78kp2tpLv4XrfuZ22RVNabF4Nw8rnMFhRt",
  "key3": "5bQ3yfv6nJrV5t5q8yhJLXiESHPUGhiYVzCEYWUFhPeZkEMbQpQhwqXxqZMygE5hd5sVZWBU3mdbq9qTfiu1LrtX",
  "key4": "5QCrKHjoheos5Lep8KKabXXqarx6w3eGT6KSivUX1T1NnggCKMbDuTWtvJXxhfzsbBkRtJtMgkKmcDCGMhRexL4B",
  "key5": "EAB8jRH4nVmx8nKaDWK1x4RD1MyQpvurPzdSKnUAGaKxQsTdEGV7bdEJJ3e8thfUfH8R42Ztj1HGgjsazTarfka",
  "key6": "3uKofMsMTgmYisgkpHxF5KwPLxzhwhNrZ79wx6b37Cy2MwSkdits1U8Aa73EASwaAfM6nFc3xHPdHaxjZ9Yq4YhB",
  "key7": "ECFgPioGGdS4wLTbyi7CKuW1ZFix1YnyCZQhGTT1LmBFvmbBXrJSkAUfhF1udJ5uD74eajUSsxCTLmivSm8jQb8",
  "key8": "27LyxJ5JvEbSPW5vW1NC8mi4qrBnGRMhehPK5M5Eo7gqLzXMWC36NouDj4gy2j1sXYy1qtngsAFfHgvGwYZWago6",
  "key9": "2uvJvU4PBaDDEHZrYkYi6dRgRHAegNt8bYqsnXuUhCPgoKgHMiYxBAzCxiWwE2JisERT6jakkZxU19jzfxUaKgvy",
  "key10": "y92sxFhiAEcyiyh172dk6ZsPNxSvwbzsGkwEp9iPkbhnqxXTNWtEtC5NY1XHwHFuospUk54BGkf5LF9TGXUv52o",
  "key11": "2vHWmUssBf7Ht8FL24jKhPDjYtxVVXmGYXeiYNCWxcGmZCHsHqs31NZxnoC7kb7C7XGVPYfVUS4iLcK9ExgadoLZ",
  "key12": "3wLYMm9C2QuMPBQzRzK2mmTPHTGytQ4SXfbDVZFQ5vuLhQf1wqQUpEeYxfUzKkWUB9WVpfpPh3jCLTuwEBfNT1yE",
  "key13": "3kTAfzw9KwCPJaD5UKdVpa87GPkcBiaXZsP8z2SDQYq33ZW5waqcX8cjvjpG5NxfS9AJcU5fZhhutK3hwz1viPLP",
  "key14": "5hQAa5NH6YuwYvbT1EZ6oAaXsQ2Y7QP9h7Kt8kY4GPr4wJ6h53N3WXfAr8KvZyztAaMox8JZwdhjRVKck7kexZHr",
  "key15": "2JhcuJfwSUit3bG8kR64ss5TW6FtsrTRe1zGBTaaXJKCEFeKRFx6KgxNTvx96X1DdsbTvuUCjhFD9WkyyJzjKNdi",
  "key16": "54GoJMdihNmKfgDBssyKnx8Wea4kmt4dTAMGU9PuFZT1sF1Tf18AgX3bCrrBhK4jjZwRh38Rrmmu25Eigpq2xU8H",
  "key17": "5MLXp73Puw4tooCS1jfvHiyDzksC5Rj2Aprj5p56wMRvvqCC1CrRr8b3mYAfiybsHmykfM1T74CACcN48QLGoqHi",
  "key18": "3p7UHT6JJA8eh37JE2gU6XQF15uX5F5vFpWCWmzx4QirPir5aPN6W6RKKGHEaFbWKkxRUYTspCMmz8HrEPwLqG8P",
  "key19": "5Pu312jKAMYBq5DaubGTSUfbUerSej1D83xfQESL5aS3vB6SRwEw9xidqygPy82Wv2m6rAjro79wAdWTVd54YvPM",
  "key20": "4aoUuT1oY5X5vxVyq2J4UTy2k2UsHnxsvgSSQZk1GjEQpJpZ2Ptg4rAnH9hWdj2PhhK6eXf8yEeAZ8oJMupKJrSa",
  "key21": "35jJXjxSwCbDcfJzoy5nj8qtbaa5DnQXMu4E4rntASfGuwae7TJeyPCpzb4GaNfwJ8CKZiCAyM47oM3ceRiGxQrh",
  "key22": "2zXrtUMPnzNVUsxBEnPQounQg6bja7jt53aCxLfV4nPEoPSRqEkaV19eh4uDsRyfweKea84hDQ4MXJ2dsNorogat",
  "key23": "9YmiZosDhv21QVynGMWKH67WpSfyu2ncEgjCTfQrhdbKXwK7VpxWkhDd5YePcbqvXjp2JPJaYiar3C2ZDBsatTM",
  "key24": "4GX2VVfpb23fi45Xo18zKQ4qtLSQKn8nVuG9JfjqCfnU3xdnAbFc4Kjhh9RTfuUxdSLAB5sTEHP4ADEChZyukMzD",
  "key25": "48tKgmXCeqLcSUYwJngqQZGKD7ckMyUzXk3NeCBk1h9wsYckPYDuALknN5BUkXCFY96c5ju1T8N5JCuA2CLfpmF9"
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
