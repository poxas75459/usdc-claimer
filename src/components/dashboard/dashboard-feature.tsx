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
    "29aGvwqZ6DJEUfqgEstivGJd5shSjHQC45QNiiUoo9wovjuoE5jdpBEUU2KpS9uJWb2QCf5Z54PmeLTU9bzGg6Rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3oR1VXLWd1kE5rVC3K76Yb5dMWV4fqXAQc4kEm2cSuhtJ3pAha4mtH4pdhJJzVfSBCWz1PBRbHm1wDF5VNgkWz",
  "key1": "K5cYZXYNzmvH8y8ddA4z1Af2z2iNkUPfrrnm5aPdtNMHwRViKwwLTHkTyeS4mg9PLABLHNKCpFLQAkNuMuMhni9",
  "key2": "QQaWuGv6htAaBMErr4rZ3bXvM1SGWoYh4zTR1j58wABKNpmami6EUJ8rbfAN52GT2G7i7VZuC3Yu5MR7xVGG1JN",
  "key3": "2thmWfdugKUexPHfXDZQ6wkmBiEndRUJyqfXd2JZFN7wVr3ZFdHcsTLxhoNgQcEmYnUBdxcKzeH4XpSRS3SxWAXa",
  "key4": "2TJe5xm3X3WvDDhRYxDtkS83skPJAbDFmXERUynFdSdt3FTAEt9BEqx8pSVFAbpRt6KQRvUP5PsYwaTKAYj1uDb1",
  "key5": "5hykmqYCWXWEgcLxq3z76L61ZfJE7iG7KcFZ5NhRQ19wCXCGjAXgbm8JDJ7PjveXxgJ5uXazRKbTfz5DFHS2QCvP",
  "key6": "3QTTqzBAHiY32hi4UWh7FPiTMU8wN3heoAxG5DJv3nzMsW7XWREm74yac4pGSokvLFeZXkHyhY39qZxUECAKjvwn",
  "key7": "PQMoDMrEiVT8D9m4NMQxGozK96z6rczAEm1Cr4w33PHecggVaGevELEKf2jNTb3fBjPduPkdRv2wV1Lc7WUZD1T",
  "key8": "31zmZ2CVKGww7tcvBWpJKRD45ZbM1M2Zo76bzCiLRi8u1Er2YY3Z63Q6b7LUxEdiag4PrxtaxyfYj3DBJPcxQin9",
  "key9": "2dS6zZE9PgaYMVVy63tsenDJcAACGJhMZMsctAnrtEM7RTRhKhCuctwrZ2b6yD59gNdnoESN7NCv83FVmfke6fcQ",
  "key10": "2yHh19JmajJPtT5g6zXHprhqsn22sAjWWxzPiLVTMG7w5JAfjv57rdtKxEdttzedB7VyCVzBkZqhqeEskY1yLLW5",
  "key11": "5WjqCSdi8UekNYb7RJScjiL6qJt2PmqSFXqJaQZFZ2tDVaa1TbRWbh57TPDzxLuNPCQuHJRDFrxeNRrL9ThgGFYK",
  "key12": "4eRngLcTCr2UW3jM2Y17KHnNTAgo7LsGx6A5fxLx21U2pcUmfpBZDbX3sSbju2WBsrcVUq7SjdmqKEZtQ8VU3xyn",
  "key13": "5jU6PuqF4QCFsZEKPJb9s9Ph2R1QvviiBGWatxLZxiisN7hNEb7MtxGVef871iX8LenKbiZrG45mhnWPPSanN6fE",
  "key14": "58FfnwnwJ1RDYq3U1mrnVaPwFpBWTVJ2MvpFhJrRyRi9uKZgk3y6JwFaD35AY3qpZuXqWuvTNMbaFevRsezziQtU",
  "key15": "67ZLwVYrfU6szCJ42UxbqMh8UKbcWqhJNuQCQdvcz5YcNWvrb8SYYbCDu9AJqDnJrJ95qpUpfdxnrGbt7DEnUgzd",
  "key16": "27bNooAGXGANXV4XUJ1Zc2UgFjgt7VCFmD3ve7YSwQeYySFw8n2p4SsiHZUVr8vREezWJWVAeVSn8ozFwFf2dB6G",
  "key17": "s3kwd4yJhJXbmqTCWot9fZmutjurYzFjbFf1rMfHTAhKFt4mmrHfBimjcqEeqRks2PgNVrPnSSQVb1PQzCdthZh",
  "key18": "5hpLbJZBFVjByCHhLAs3U9JR9bSRBZxYnZzYrK6qCwkxtFy1zoSwhkfz8R86svYuNj369RZ4aCQcQCRqkBXQxuag",
  "key19": "5xGKUkyRHWgP6PtJkjfsngWegWmPwtoo7yUCnq7B8mcte2vKm9bmNq1Wfro1pfdcmoKnJtTSrj3iamBQhyfeMC17",
  "key20": "2BJRB9XXSMWm429hnXWjRZGgA7Jv6ZqBaQX9XeqvppGbi9aCZmRGiqReP3ei6H3HXReNHzaPX3xmKA7cZvkxgCFq",
  "key21": "5vbLiMhMHjJv1NVYMBZTotLBh669PCH9ETTurUr1F3ZLtL9hANGxXMJFWFsvTQop8FbwPrZDZxjuYfsmYtxH5chW",
  "key22": "aUNpzMsTF7N2dj1KhJwPQrM6GrPGqMHKqCrtiJbifFiPaTJC4DYxxdFxWdmP8ZEiiN5BejYqQhqhXJhGrvBjkXx",
  "key23": "2uwuaoYhHDFthpjTubFUNiAxXu5WiZ94jW4c6hDZneKaw1uw3jS4pnvH3eGEZZPVhUmtiMmnSjBhpGSnWYWQcPbZ",
  "key24": "5Fd6JihzFUteDtL8b4gpFcH1qjTRest2MMjgTmHd6aDnadPTG1Yew73rBAto9k17n8TQgTASjX8iM36BHDeKDZSi"
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
