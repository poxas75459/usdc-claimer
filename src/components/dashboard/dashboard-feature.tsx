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
    "L8WzahndVX2x9u3krvn5Dfc6RfJmFBKKy8vR8Gu8izL1qj6EtWgh75mw1WrkA6iZUSjNrK6Xb6vkWXg7rVXS3zY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36z23oUb5Gcug21Jc5uJZGApcAoyDhMw7QrQxy2owSoADcFBDgqQD11HgDVXxMVGBiVpwzVAz4wmWLJFHkLaKQD3",
  "key1": "4fS5dWp8JTxMB8RjBdEPxj4KJUpcKnRujmMNgVWBD5RvJbLtWiGiW19TocyMWFpebvwSwws7WrTJ9JaesiWdWPCn",
  "key2": "3bwyxbXsFHaojwiiBHK7KdMCh2oDcDwu21huQpCg11V98fqDXz6SNMnyYvy1yPFPe3bMGe9RB6nfpUrKX8myerpy",
  "key3": "24UBNZ7S7pdzCgpPrdUiHKFo8DgqDXNd8ubGdnLj6Aj8zfYr4KjGj4x3nr6JEB8EKAio22dBcuNVx2Pxu9skP6Ri",
  "key4": "gYzQrB8spMNngkox9ejqZLkHcQ2Eh3Roua2cC9EeT9cy95FH5xZEGTjq3DbK58DsFKgL8MhKRkGXjmozM1DTF7d",
  "key5": "2TvfUpayqbE4YrwfFytSqbk352sXEwd1hugXNfogSyGMTnnqKMtkEQm1YBcJZunFqf1murqTora5ncB4wBT5TGWn",
  "key6": "2Amtw56tbhx4zMwoSsRBxAiUohJThNzwSAaadCZ2aRpyodpY7UK2MFtUjgLggicNp7F31obzzK1U9RoT2t9DwxAf",
  "key7": "3ptbSrN8V8EgubWwmLxB9WWNUmA4KbsrcYF8JuJQe2ZuurqnJJqRKfyvvGt8ELNtdBZx2ZVskAE5ZHws1y9PCAd6",
  "key8": "64GvTMReCnGXFDgK6MVCPL16naRQc6EeCggnhwk2b3EPGeSFSskHABakptNeTCy2hYEV1CtD9my49upS9W4ZFRp8",
  "key9": "hCvHZi5hJFytYiaeYWRwCnamWUvDt2MvNc2KNzLjBR3W3RhJXgnuPsogagaLVJCneG4peh5WpzSRzeEwDMGCFfW",
  "key10": "4tHkHD7mznw3C2dxKtqgeeCZJwPN3i5p7sgG6pPKyLQDXxczK3smSQ1PgtrNHDan2t1ENbsUzBWUdMdFkx1XKAE",
  "key11": "3d2qwY2PN8Uma2ydXzQBGJ4RgoUBVKf6BVbYabDgJ872bvdnnUJtBV5YFgAdGe1nckk8HTDYpjuqxYWzABYkrvMH",
  "key12": "4hpXhs38LE4DyES4gVQAQCDrj2K1fY7nHJYbFey2oGsEHiBaBUeB5eDPg3w7o7bj6wYZcJb71NSax9xFr6Wr4vVH",
  "key13": "4HiTvkR1Y9khJPFWTHR1CQvZuvk9fXGZhGAmbGDc1YBjHAhPpPyHyjQrGbWftveq3YtGKdzd3CNPPNvghzLMZCV1",
  "key14": "3wxJYzMWrxkt8hVQ4hVScTiCqSu8zEyJorYY6jVsC7mkPCjzPAYuBzDvJet7tzHseUcEbQbWMBYJaWuYh8KhLPXW",
  "key15": "3Tki1S7P87rejzae47VLw1FxtB3H31DRU2wEDV78rep7fYsn6QcMKY38dnVLu8VBUopqHep2o8n9SFqUJ3zFfBeW",
  "key16": "2mr5Y73fjW62kZBuu8Q74GBKKieQS8WQqf6Ys7A1RggCnK5vLnHvSKjVpoEjWRvzM2ePhoGs7CUacCU2BnTqzYV1",
  "key17": "3qJ8puuMLpwjyef6DE2S4Td2HbCqVvMGfRiiM76iWGvEznHbLWSEkt9uuQypSXT2WBgRYM4MJ8F7MpKjLP5GGFyq",
  "key18": "SeDBEr49CUx7yy13sw5Xs9SDTitHuL3bQ7pWKFSY7izUtV9oBFgunLS3Zp7D7DudSaHa6L4q3EAMiveFamq3XdP",
  "key19": "4Zm8FH7Ms4VCHtZEz2tAoe9NrcT91CW9BCFX2ArKMgbXUnfN7hFPDYudpnKYqWfmChEWPqmzkaPEFgj5yogdmXpR",
  "key20": "5g8YWQw3r74uYmw57yBqME9pXYqnYTjUUmLgUGCkxrWnVVhEpTkjJhg3e3iFqFhsL9LrYw8bTy3QQUxh5hV348aM",
  "key21": "2mgn7Cgv944ueaGPSnP1brYXYcMRxyZvabEvxZd4orpJon5yJsyKeZPoKjNEXj2sZkFPjNkwmLu9YCu8JtZ9yj4T",
  "key22": "3fTUCTDj1Hudm8e68JL4mLnjw7wc2Brx1AC5qQkr2UV52rJcpRGp7dct2HNBnYSP5eyT1arFwrusABsqHSZkZCn7",
  "key23": "5gRytHgE7xaNWEb2JhRBT2Zh9Rzmu7wPZCDRGiMLGhupLB23pFZcvkSvL82eKPowvCRAec2ad4fywLYtEtGM8RkV",
  "key24": "3Yd8SLiU2j2mXCRrqz1NMJW6fwjFufR7W83yXyx6Hs3v1RszFfURMxFEDiZWMHhpodAufQEWzj1ypUvcdwSwcu1d",
  "key25": "3L3oHVSowAp3pd2yPAfS5HBVXBXNdoHuB4oJArSYNKudUgC9zfRYggE1EBMoU1N7XxMnmDDA3EwzpcDsSbSDCAKu",
  "key26": "2zKTipTg7QfVP9XEWpkHtFsbUe5VjYCcft1BsEyYwFqBTodnMW9hu3kthHJ12hFxCfZGVTX623SDJjKNJKVfGqke"
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
