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
    "Q7pXzQRA7sSakjd8EvEhvkbHW6dEr8aj6tZ4AY6MPPjfBAjwmN1igPZraKfNuezP1yBJPZFAEeN2kHurRMymRXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rpdqaDWoUWcK6o2wESx6ZCGacPd3qxe2JXn91Q8vkbVHg6ZP6jJAC6BLSVM7bLCs8nBUcbBhjvyRHmsQgLvCGBk",
  "key1": "5mgV8bNyYCuhCDfJvNHZyVi4NBBrTxPCTJhLsChjshhW8x9wYCAmKsAr1hVqipczhwNf3iECgU77wghR1yxdiALg",
  "key2": "4kTAQrN2op2xN1Q9sn3efomtjXMmYhz94z6FBXorvjRk1py4zHeTBc3fpCTcmjFDYQ7vnf5foiFjpPwhmZDhP2PJ",
  "key3": "SAWyJdD1N1mJpiDZnXtPf548Q2v5ugaKUxqYtPKvBiB9EsHsz2chdKgQPjwL7d9pwsxvEmxNY2ZCVpFcveZcLmF",
  "key4": "Ps6mr4Q2uQnorFmrZ3XfuaKYNvjEAgvNqkjWaKFqBZZ2hWwFa5zN8r2qKxvwY356ybiregQ1yjGYzbJCTmyzkS8",
  "key5": "5nG18douVA3GQZsVTPTWPVDkh4nPWaZ14YnSXsBisUobL7eeoEoHQfWZTAp9dQLm5zY1MFSt6tBPNicdn88iYJ7w",
  "key6": "5Rzk5TENXaHZN6LGbZBi94N5wvub5bgqMT8AmJ8M8B7EWL6HKCkTcXXSDU1BtvnZacFvWqjLB4Wx9UhzXpQeCK8X",
  "key7": "5roRSTwrjrH69wUkPCY2dSGwV1TZ2DzPUXq7NQAwWTwJbkgG1dBUFUp3E3zUNqYyWWbFnAfMuKqZBfr6MgPhVydQ",
  "key8": "2Bb6nRWgNKomDjywnszf43AG7b8HdoMzrqyyCFQxE9re5uNK6pK4qs2syg7byd7TXQvPeUr5kyqGmSMGxewRt4vr",
  "key9": "4zjku1goJeLvAzVr62SCqg3qtYxvDFHCMwF9NzJeoMNef7jrgsxffauddBnbKhErm6mbo9SX2ARRZDWuZ4o1xA2J",
  "key10": "5x7smkiZR3ezZE3UQ12ChiAb5bYcZ9MdYStxV2knEZL8D1dHsKp24Z1aajhYh6EDxVbMSBwFqPftE7HmuRkpQtSd",
  "key11": "5fZ25dPucLwmBkhC3tzoovgy4KFvX29CSTzVXqqaquorSKMf5mbvJFVRHmwJYZXsH8HwcPPYrdYABWMXnwU3reDG",
  "key12": "3QPQ5quVSjAHQjGGHEiagtP1sm2cYY5gAJDR19yKfRNvWMpuAg47ptMWoyPHiEMDUF7FbTEaw4S5WGSVH99yUTjP",
  "key13": "22imME52i5Q8846kjJmtc1iwnD5MfSBrD1J7c34vkzapvn1DuVL5ujKqfbpG2AdUjBm4yuXwk6TsQ7HuTQL534rN",
  "key14": "2amtX6RGdNes7PTfbmXfNfcybEgFXc5s4o6KinHhYn2r9EdiUgN55uajMQdZfbtyM3nNqBEeu5W2oRhm7ZxBjmrP",
  "key15": "XUKVRXsUCKM3RGRXyo92RhTpAMju5xREJCvN96m9wDL7s2nfX9QWBTakDHBwungWpvf5MsuWP5qrB2WimAVVEet",
  "key16": "2k2Qquvc7rkazoYHtARVgvhnh9F98kNt5cbTu1VBeegLU4ZQGvmP3tUsGus2kWgyXyEULfFzZkG8PckFSF5SqecC",
  "key17": "yeeNGPeFqG5Ksr9XwZfhQKMM3oRYB6swAsHf3tx86WLpzXfZJvzbpjMY8GnLgB192ZscBTzdqjVYntpSheG8B3y",
  "key18": "5fBfHZNLkzb48M4pB8FuQgLinkeNSTfZTLK7rkYh9kYvYSpTPaRHNNqR3ZR3YL6BzQHKs1sWCt7RYaQHftQ2Tjsj",
  "key19": "5TXGp5chB1kcftqnMs7TDoGpSVWYsvWDJUUjDnQ3bjbLwDiwcPRLwjnHUoUmtZCgwhxoqE81BgaHHtKhKu15mk6R",
  "key20": "LsnNwRDffsqiPKvJnTq79vog2SYhbq6fTaCVnKyw6xMVpcooG2tHPoPtQi1MHnQF2wtqhq3hohciegab7sipZ1P",
  "key21": "4b35juhPaqHWJFf3iHpoSrsV6nxnXVNZ6PoCg3xNa4DSjyhJK8uYqCEcmJ4ys6gvVyEh4GF6FQokGvdAfZ14iUQh",
  "key22": "24uFE4rw5Pp6rbL9swfHaHk1sRs9qeamiQCF2wonAygvM9JUdbYGKYTqP2PXRjAa8wXsZezy3xy1trmccBDn5TLc",
  "key23": "3CyMWXSqnJMavbbFcaUxDFTcgEAhYRV4F4uQ7xhGUoph5efgHqYea6DGu5iDNPdHSnfhR29CJ44Z2tdiFfBcwF8u",
  "key24": "3KpsmeCBQhUzupeqH6UZn4tMsvVyRptq9uLBN2tMv5oFHvzh2NAUswHjUvpmZQVuLJ1gDw62kvTMsiJrrY9Avk5U",
  "key25": "36Q2am7K81iaLsiph6E1W9uXLj7ugHJw8fSRyHrouF8nSXtdWkduHotHmbyyfehYeMn7BTAScCUZCSd9gfHEufaG",
  "key26": "5thhXzghxcv2e6CkJPLjdxYzMQYo2zA1e1y3KpxcPUc3muLcNvbFHeJchXUMvdWVBPjyZoqCrsgLvGPZekrR3EzC",
  "key27": "2DBVx7ntithaCXd2yQQd3GkbjvmLH5FTxdAgHQUye8exowYiYecPyZu1mCyhmRGJxmcpZcGEaGXWyhc2S2vuR43N",
  "key28": "61sBp4TSUVa5bCVoWJgfU1RvDECZu5CpVTYt3xohjJGdi9aTm8mWmjxfBrCi5TrLZR5AwFR5ZZJnV8Whhai7wYdU"
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
