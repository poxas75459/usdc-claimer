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
    "3RvwncpVtZwxEdRLRxhb1c6eT79XPMmk1gQaXoEgu3ntpQX8obkD5v5CRydkMGoLD1uyx8AeSxB8uw9DNTJdyv6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kN4jz3Fdfxy3hVfmToyB3aUDGC8HinQK26GQXAVvonPdf1K4BEVzkeNwo9uZZ1PQiNiy5Xbc7ng5dEpMp9iEPCg",
  "key1": "587T6h9DGcuCnU8WECZPNXh5Hm8a7natAHBG7Fz3Z8Rgog6iidSpqdqWDa7BPYVVSs7rQnJPdNdCanX9VAdw1RE6",
  "key2": "4vCBUiG5fqYBiqE4kqSJGiYhb54jvwe7wyMFpkuB5QjmboeeyzkHKGpvgwtq5j6PMCQPgzhuASbT7L1onVz5LNgn",
  "key3": "22zNzRfhmtDs68TZSFHaHmhzXEr1wYvrBHtPFv6J9KK2rq7sejhgXbnACCsYj6NJfWDnp3nhpXsxqDUSUcq7jf2a",
  "key4": "4Mk9TEZRToo8P9iHQPA9EjNWo66VcfgRupZiAvJra3MBRW1fs8toQnzXCkzhf4PT7LDRDRrDh3AabRxunHUeSHEo",
  "key5": "5M11MgLpiFSWHoXvDaaFAYiGHgfMBtua9sJwuiDdYP33guKLou6PLLd1PePaENPXUAps8FUr2eAb2Qi4cRQzVktT",
  "key6": "5tDDtD367ha59CugCtQKNEaGrCYY9Kx9JQEVQYsJsR8CwYqbVTRFz42HEPXXyCiBp49BsryMTRaWe8crw9Wndgj7",
  "key7": "28YUBgk5LMABzQwzWzcyxqr9iGijAU66KQKaqMR2BCD4UgFXHy8zqEUu4Hi6CvevAVt1tb4yrQ7SiuLt6vD2jND8",
  "key8": "3w39AR3S7Uamk8edXCjKppskERy4feK3z5ow7yRdUFcAjRPgGmQa3pf4UyBdRGg3SrBF6aGitM7pjRe3GmtHmpH9",
  "key9": "3dwBXBKqLRysTHEFA9ozbKTVx5MftgmBwLF1PCpfZFo7LoUoDQafsYvVfDQKUvBQNJU6zUckS9y9yKvsoinu6CK9",
  "key10": "4wFyyN7s2upuU6MvEDBHCHhGJyE5QeRvKt9DWMpoUkMg8LXNCrhFTe5L6sxtSGVPV19aWDuv8bsGcxu3QAP2gvLw",
  "key11": "2S3HPthBTxykpfpGHYk7KsHcfzk99Lie1dW9BtzbzxHqGtQLRUBqguaxFFoRwpucjNwQ6KSrdwDK2RaiyMc81F85",
  "key12": "4wd4j3tU2C71xWaMZ53JFmM862Mb45gZ9rL7bYKCf6wQv37QvoA1PXycXX1cWkNiJFy5bVVf2UqEoyYtDzH3PQ4w",
  "key13": "2pzEKipzyygjYTnuvjRfi3PCTUAe6Z3c13jNB2vHKtPz2hdnXnHdViBEfLMA1kU7WuHFjFCPKr7k18LXfk5ECeRb",
  "key14": "4mYtRkm3n5jnBuMzSkMV8PcEFVunvGVfrfYT4qWtRdBs2pTqanSbwaVkaYL188AkbTLRSaSmsJmuTvTFi8f2DM1i",
  "key15": "3S1iQXPHGE9W8Zd3d7XBVicJQ8riPZggswGzLZmLBf4jpSFtyNrD84omD8HXaFb2dG1HGMSKnEvQwxEzwv4qJYYC",
  "key16": "37udP2zYznsdn7TVL13UCyZ5ZeGykBQHCsuUerRzf2rfEsrdEXH9usSwJTHJpEL3V3pHshzgZeZasRuTx65KjbV8",
  "key17": "3eAGr6SADBoSxW7BpHbFien1WKbvCGE6KSZfX5JddYgyFTX3JAWBBW2UxvVQMjCYFUVZGF3324yNKHNYsSKaEn8z",
  "key18": "4D11C6ma2Ga9zSC5xCgFCLS4kKVinsUyM4L99JcRoqJU4Uo8cQpPeNorXVitZSFNZXABeEnEv1fCv7gdhWCYqPRD",
  "key19": "iWhEArDgvRxkGDDfs5ViomqMQXM4YoNFL3SKoVEqBTjgrxhzw4Wzjo2zwAbMQeQv9GfFoV4onPYSzn9NKtUcewE",
  "key20": "sXSSuCkSVnfm3jPXL3egNcgWUdfkpwZqbZAsnYZKgbTFUYGTW8drVHMpDp8fnHErxMxw2MxivQMqGXdwgB7EpVz",
  "key21": "45zhC2tUjmCayAuHCD4nixYRggGEgn7CFf81y13RnibodeBBrdsagvXyT1ZbzApRboYiyyYKBuHvmn7VriKCm1yJ",
  "key22": "PH68gWHdM8SAbJKowje8oLiKHmJvqFSYSRB3UXEexVMgAchpZSCD9gn9TVLchn6qUf3QNJ9VyhZKhueeX26NEWc",
  "key23": "5EVcoveBEWDGZHbNA333hpXnmggfVYzX8QhiuWPWVpksyxQwpvQju2bStkK5cBfex9WVbB9QVbWe9MPMG5kmiAVV",
  "key24": "2UVf84AJEnDLBZrjyrmmc52gV2tcuwbFYmvP2nGK7MgbAmjbXxmB2SPhQio6Uo6QSUehyUxb49kH9Kj9AjuxPzA5",
  "key25": "4KH3TBuqAFWTKQocRpfxJbH3x5QaGKywzC5MF84qQhzACjoTKqabGqBiGPoPZNAPBdC1zEUx8ApmUKPsyZaMaqhe",
  "key26": "2paU97kEjewifCWEHArwmb8fKdwUwbcoUX4g73B45kJnqXy7kw3UL6qo7ugvpMkSe7mUEdkBwPCNug3KPGZ7QfWd",
  "key27": "3Qts8y45yHakvXFXexiM8praA4Lw1Ss5sgwhuAFMwPe55kX5AygGJaXSusmpGHFQZztkBaGDD9RibdY18mAWQmU3"
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
