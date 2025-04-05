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
    "1N6Bz1o6V4S7L9YF7Gk3cKBBAo3dWYJf1r4tK2qzWJhymWzH4Jk8zTsvqrA7BDcBiRYzRfeYb2fjxc8dffUnBaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uybc3EUmQkEfHwLwTto2QZ4wQMBJpN1xY2WNeF9asdcRWSg5Np9nquMqmDuK27XvE9Ho8CzSHxqye1a8hopMX7Z",
  "key1": "3SSwTZPvizi4cg39zToCNNXT8g2fFpAVNF9a1suUFujFoQN6kHB9KWQYj8m2bdh9yfTmZwyto5Q7FbTscqLJKpWK",
  "key2": "5RsoZ9eKBr245v8p8zKpTG3sFKMME6pCDft93Gm7Yhp8w2uYcBTgYybaP8ncjLzBeCbHChzEHFjrwD6U8Rs5rAao",
  "key3": "3ufHrUwPF8W5ErSZU1JfvjtkQS8cHU8njqEGibuZTTdbiY9NCVX8i3PgKPTEYoJwFjyjDk3MR6WQWrwoqcJn3kLU",
  "key4": "5Zb9jSVe8AFT66DKG8jkCBkJtjg2dt6efUFacabhPthuwLjf5NQj892SaCAJA3EbnfvNp5y1L5wUGVLLCiHgzxXW",
  "key5": "46NwLy87ZHusYoHfXiUSX5euEZtFhn5NrZ5rxWtoStq7yWQE4wjD3qc1t575ciCkKqoSzGsBvbXfJpEckB18dcj8",
  "key6": "3fdMhcwp64vMBYGYxXMFcsacoayudxPFAojgCV76WnEH7dpCrUK7SsKyofkiKvgHe49ZheGbRECpaevfdQEDNR5f",
  "key7": "3BBBNzF964qapqPEAoEViEqo28wa458dZQZBKUPGpNv7RvRLVBN5tH5PDaYkdAoaVwrCG9KqvrAUDRMyAiK5dBmu",
  "key8": "5irfZhA8rUbcGvw3sQXjx88jiwaH9hSpZnYXvRpQSBBRk2fmfUUYBcQ7Tcs2dw8s3y4DbDD6R3rfkKmwPkQ3z1py",
  "key9": "35ZTCZnfm2ZnfNMNhHuSyrx7MzMYnPwXnTStzn6z1WhXJzfYSzW89VvoF4BKqTLmTka2NoBXPj4YqKJcbtMm5DMk",
  "key10": "5WQr2351Fpzk8eGrzSMrbk3xhPqZnZhHFDhBhJ89Xt1ketKYNVVNPQ4jHC59zyttBUU4fiYKetxE9ZdY1SUUf6VE",
  "key11": "5dCz5wUM1yLxMWBZMXwUuxMPPDvSfLtorWzDuJpzazjrbjzbo5DCuud23erU66Bc8NjdByUpSkQkvjRzXhr867kN",
  "key12": "35iCmba6QnyLdmFhQWEdicnxpuRfrMHPuL6sMhBzGWW2nLXHDgbnnWFMqtQZ2QMm2P3638VKF5DuzdVQCcqTFXk",
  "key13": "2SWbXH3E5FVz1i1bEUV9rfKcZE6fWTC5FPApSoDqzyM7nkF4YfQZyvH8WimL4w6S9nMP9axiseCruePSPvvdiask",
  "key14": "3Jb4f5m35pfHcZVfgMzZkmotp7qSr3xPkFsJLA8NJsVwYG1JwfbCQvQ57Wz3EZLrXdEfzkAGqcFPKSBpstdMKabD",
  "key15": "2tFxezBAgmrapQJQzRbAkdASNE2T7tJizsk3bABrERgAyKrxKd7S1Wxn4FTYDrkydfrqr7EZSWsTim5uusTCJFE4",
  "key16": "5GwR2WBobqaiTm2JKNduvxdUA1U7tHkRo4q7rDhDgDAzmQYGeckAkj5Rns3UMXdYN6qDQSsfajMZu4vxDBk5hzP5",
  "key17": "36c2o5Y94Wzkru4MRUBifQHJnAyjgYcqKCYSizd8EXPz2dmoatJT2zT3To6N1b3Mx39xcC2i6q1AsfeL3NmpeM42",
  "key18": "3Fxzfr6wwDSnwLKJTYkq17hap8QKugxDRjMWVeDujartVP5jPrbB1ryyWEniiXCjMPxcvFX3agN68WsosraYRTve",
  "key19": "5SxvAg7pmPj15oTuwrJ7rdZDqAgBkwp9ESgwYbG1Nx8Dfu25AQq4JT4rjLHufrkL44ZmwsLmGVnsnBxDs5N8CvTf",
  "key20": "33QH4FzqC6EPRg3z43QNNAHj8L5FjFXcYofsMkr3psYP9pcgVncBwdDsGwKp486eztof89s6RWxHftrPhvgJzKBS",
  "key21": "4oUg44y6jhRhKnpaceRAQgSV6YNBoD2D1L57UNUHWvLmKDwVxpUUGGNugUNX1GR9K2V1q6uMB8Zb2fGrRSv24nsx",
  "key22": "2aFLzNLmBNb6wVqb7Zdk6vwstQ2Ukig6SAS6kBU1RXmVTr1k2pEE8vMYXsBraZyDq9GQbwC4f7GJFPnUPJTQSXqa",
  "key23": "4tZfebv6YsmhvYC1X6QApbLKYTMbW2m7taec4KcR7ReMWuSGzDgfbivmFWoU7DdBG5iu4JrkzZvma4wkNgcFnjpz",
  "key24": "3w8M7HSV4tLEjxdnYZbRasYjvKY9GFbUrmmq8KK98aqZrxwJmEa8pSY5oozXVw1rAKkUXqc3HPqFqaNJETmcXGq"
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
