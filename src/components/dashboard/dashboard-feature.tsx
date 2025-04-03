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
    "4gSmgUDq7FGgupYKkZnJKThPYMbJFFTCpK2u47e23BsgdFYgxnPhwzh3Qzt9s69g9WejVdqQfv4w84VDUqRLGqmA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bZLKeWLafB9BZ1QEHaxkTU86XZBaVv23fAuVENYVN89eK997B3Eskftw1higVoSgGEbWRjwCochcF2ouNKNQB2h",
  "key1": "5Gbo3Jy37HbBzGZfCjixQdeM53xdmcs8HzTeKPGCr5qAE2z7NJwz2ujRfzKJD4KtWBJYRJXmS7xGy9VfnvZGvmcK",
  "key2": "bVZUhmBPTgkEVo9n9ZkBRTCvJRgKkNsHxTVqp4b7skkoHoeARxM6ej4PyyuXhqWhq16QHeX1SaTZwSwAetPBa3j",
  "key3": "59MEiQ13dGgHFPCGcnwTguXnxFwB6edqjUxzP8jZBRYM3hRkX7ZZgskTCmaxoKEsYFLKmS7kTU9gULzmbxqDw2qE",
  "key4": "FcK2tpbFRbU6i7UaKXUJccHjeEPjvS87t8FZTNEshKtyWhw5KPdznQRpf8wjtLSBut3rXhGt5SQiBZsLzXEfDeS",
  "key5": "58mG4mptSL4rsfnQQMxdreoX7hQ15qeeqfzNRfZhRE9L9zCVUr37XLHHRfbK1wKFXqehMTLpL6zAFJQqKkcWMyHA",
  "key6": "2BAUDuAmEp5Pca4b63pXP132z9Vqr8z4nFVB49npGj5npD7S6SZa6wH6r8T5zU3GoT3XQGnLiXj6qb3G3LqzNWFt",
  "key7": "3c4rY7kVyQDSeMHXtoiU3VgFMhsfvXTiaJhRq45sBfxTBPjfPNmzA6m33KJ2dhYT6a8KynbJNgTGnZLTLAiEUTpR",
  "key8": "2FYU5PdNbAp7iU4e82sBv3gETszGP4Uh8gcbFvFZdNeLSXUPvcSUMXhYXARGGwzmfeZfPuAH5ByQ7w8kt1DSTSRx",
  "key9": "t9fWjzfNgyQGqg2p8YYBop7WokiqzhPL3eA1igfuS75KwAPfL5hqw5nEJ8eWmKq7tfTtJWdcpZmR3atyxn55fZd",
  "key10": "5ZBVfinU6ogGCvATHzHTsZAnJzvkx5C77zvhUtwr7XMmmxP6Ck6eP5civskdQvtmJZqsUoodvxGmEJ9BN5hVEZtS",
  "key11": "2HEgZsy3jn962Rvqsy917YZD1y72AA9Mnh2WcEQVKZjzpRjZz92rkznFqkqyLCR78FPp2ha5XcmMZbpqVyvwmBpA",
  "key12": "5o5PrrY89AnD3FCN95fvadBuwwN8XA9USAzwge2FsyoXPr7a1gs5j7PAuS7BoukoVE1iGTWHSDAcLpBz3geT8auP",
  "key13": "3VLdinawmv1ZZa6YyJLGwnofSvYduofUw6anSZCGSsg3JA9yd5uydA3hF1FfnDCDNKARe9NBbtsfdJR6kyNuDphF",
  "key14": "46hfz5i2PkdRzTp6S2RSMWuo8GbZP8HgaDqz34vGHmFSPSFX5tGnpkmxSVupju7KxVSsZ3TfDbp7EiVR56SQUiWC",
  "key15": "3FzqefgBhoK1qrduSwowcK2FBJSDRcvFsxUNebB6tJcKEiwUL81o8iKEzh2gqS8t56rNPkUXP9z5Z9uAnDPiNTLV",
  "key16": "Auk6BvMqUrWGPB5c4W4SkKrWhYDFBVqdpJwDAMfbKsa1BMq48WmxGa8DC7efxMAxvjgD9nufkKycHu3khN5SFTH",
  "key17": "3J57tzvLx3Lg1Adwwuvbd6A7ccMX36aRQtcs9mji8E5cFp5H24ZBm9omBvKrVKX121kmynob3hr4AigY1Lcac9t5",
  "key18": "5iuK8dL8VARS1nfT1ZC7yGTPfsB6vFV2gSRDXycXzxTK22nVnYXe76AP4QzWf9xV4g1W8pZ2TxW7ug8rbToVm6tu",
  "key19": "4bK6rJ6MNbZvy5mbRi5P6oKZuErvS23vBk9wB2MbcR3G9xWNiDKi3XrG9b4nsSYuKDzPb7vn6FMDNoGiFqydfJH9",
  "key20": "2aaWq9QP68BPA2kNBCPPTv4ams8qy32Ejj3FY4uZARCiWe65RR1GskwZAt15riHSXPvzVbe8V1BN8LRpzgmp7PQ8",
  "key21": "21aMEVopcZGcZFZRTq1FWCGCUaS82RkDBpxudFeJNP9gQpjnUpPRPVtbecNfP8bbJBm62qoz2EdkXcPF4dzrtbDZ",
  "key22": "44Y9ecNanHEFVyGuCWijgsc8E3BgAdVFwG7FBvJQucgGwXxaRgz7hbdDN2Yxj97dMRJtzW9A8WcSeSefcpPGe2td",
  "key23": "439n1FLZmPatwxNtMGGJ4VbveUf9M22TvMigCb9PkFUtgGCd9zkNfVYFN1pGremM48jaFwNgxe9LSHbbrAVuLz1R",
  "key24": "sve1jJt4qh1PY2zCm4SncCHQXNGdD6sDRmy5SsfkGo62QEMyaFSnFtTeuQzeDXk9CHhyY3w9TTYxDtT3LmzLuHZ",
  "key25": "4muV97Ap6TjNMM6792G2wPEe7TNjnaE2j4XXtQxLVdacJDnFQY65MYb8pMThZd6VfDd4GRaprUceXiXKXdomnbi7",
  "key26": "3GUCzUkVRTSbjdysGxhaHxjZVEGvouV6Yq9rAh7s92GzwCKfQBBnKGET351vsf3AENobQxuq7j99LafroSKAGnhK",
  "key27": "3KNpraBDCXvKaf9FEJnXBQF5mBsEwmpPBQUhDVqsczp36kSKyifgjSET6u9ZatvEFAYwEt7iWaJyDhVpYcqLV1gu"
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
