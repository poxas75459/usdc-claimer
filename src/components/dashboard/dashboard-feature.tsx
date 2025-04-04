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
    "5WpLiGmJqjetLQY5rZGbVyWWN9wjcQS3px5QcDYrk3VKEPvCN6foA4RZnFN1xRfYvumnNMhkwptDbdrG89LgQLAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhYi8rNpK9AhUbLMkw3eEZNg8DoG2iJs88acGUNraLVuuqqdiQ1XwCyjnweCyGn85a2YJEH5zNSb7HaUxW4uVtT",
  "key1": "2Ym97rhuLDu8NMCewHCQNL3Hv3F65ABunMKE5BLhhpStuHdvK4Pr1nixL3LcFLe2V1qLu3FBk8syKJamdQ4trpZK",
  "key2": "pQtjWKvnh5cgRwA5oWYZptACBybWmVhDfbfikF2W9SVyj8yxDEqNNE2kJDTTeHcaUDURo2dNLndbDzUoWnm8CE7",
  "key3": "55XyC2suDGMUPF5GwJgEhphe4VJXosyqMMr2FK1TCbT2iunADAzqdjhsaD6rki273RVDkfFARNmAyw3h18WLCzKv",
  "key4": "5jvsSGDhZzyJYJgKdqUt74L11ZC1Gduoxrv5g56vvpbPekM8K9pV7LhXXgbFtSksUB3W1aUyMM53hrwuSP9AwURV",
  "key5": "3UmB2aFV3j4nhpAFUNWb8hTtDxDoqiSNf9BLs2M2AqV68c37iWXaSrXsqw3hzXgBJA9gq9BMyAhV4QS8abWeh2q",
  "key6": "3vWB1XguKQN8VB1YPPwKwz19bv35Bye3smcigXEe97YeYuTz9MyjVteie7pMrC3YqKUsgtrXGuY1dxF7YuHvTfc6",
  "key7": "32tpVdEH5V54sN1cuqtmejqUmmMhsQbvrj7NcwGqaHoLQ7MNN9EJuj3xuUNRX6Rx6ZvFUUjKL8P7iZJ7LjAjHfR",
  "key8": "3HM6cAfsnMsYbTEFQritFfSMUb8iZrKMd873d1SPkv4yPaZMmvNdpWkuXVG8V3wwkWhVRDFhGLAfGHNJMtmWPgjM",
  "key9": "cJFLPk78MKYWhtaJwnP5HndwhhhRPQ69qnJtUzvnBQoJFWERWzmXhDgs1gV9Qfu3GgctJ95EsLBpXFBkBHAohs8",
  "key10": "5Ar6zTXzVDeFdxEDXQCj75RbbjeGVadoucKmBoiSvtjUCyqiD9ckJgrvJRH2GYb5k8u3NaYBeyhf3Ks1WoPiM3m3",
  "key11": "LgZ7uW5DT2866WtgYsPpmLqQmUZcVw8hnna9NPCQVQXatAuxhV249V3EFWtF91RBZwDuQMLWxpif6ZVfYdZ7PoT",
  "key12": "5RYFi6QCPaq6Cs3hBAYLqDqHXew2t8g72jA8FNNxGy8bFc9N5Ao3TMjrtTQT4NaD5fkuteVWZxysBmMjBPk6x5Ft",
  "key13": "2XtyDpnh8YKCdghScFmDtfbeMByvNoaZct2k5xUizs4sDY1nipuy5qmM9wVLru22m6Zm9JNhWRTeKyawFDu87bzN",
  "key14": "5vzkFLjBFCHdVaRQ6M7ZCcxZnHZBrYADTkPZaEBfUwwhykvEu3QtQqB34qigpbc4hx1D56YXW8XkjDBPxF414CWT",
  "key15": "4zutAaimxdmaVNxrySoQ1cZ1FtHH5mbbgiY8KibgKmg8sG3uCxChmBTF2sZRE6bwT8iHisoZv3p2MAh6R7xNHb9f",
  "key16": "3d26gQ2g1QVvmpeBjVMrSvGJVuorRaLqrmYKWRptBwUn6pvZ9c1C8tAhfq8bsBQav3tNHPGQgvVK5ztBJfbDGF4J",
  "key17": "4wgrpJtrynzQktoV84nFLHuu5dn6rviR1rMmb2qnT4HTh3s6mkjwjeAM7zhyipod67aya2ZsQZjZCytGgDijmMy3",
  "key18": "3WMDo4JGUaSNHzDgj7TXTHihpn3D7EsBK8HZKPWwpnu8fRnCJ5qUp6qvqa4b7iWpphmKXXAhM5Muz86kqiwvwTM9",
  "key19": "3gtcWW2N64F8ZrXhEqefmsMtSwxfYgnkwRKKtxkwcE3z8cUxjCHfqHN2YHoeEW4YwMXHruPV7P7ieX3LJg6ABq4W",
  "key20": "3M3fjFeywsPE3VaGXQKNCMwpzub3GgNH48RXqKb4yEKfMzqkPY1sK4QRTWPsipTFeL2SA4Qh2rKotik1o2MioAwt",
  "key21": "bHAgoKMY6gLp6VNFCD2GmqyUjLF29FJF56dnJdHyQnH1iGG3SZ9Hhi6M1wng6jCWoUmXMCZaeeQQA9vKo3UYKEx",
  "key22": "3ZMW6rEY6sq5LchwpSx1U48yKvnExEMhBwgGGD8CcDiz6x3qBquk7EpwYxLNSyHEAMYkUYB2Bo4DSddQnzZP5YP",
  "key23": "2vePoJxCyGpKvp76C6piqNshg8GbtSLgXAag9aJpFHSrYLEShm1gQniknhj74tw9hRboh49idnVjNwFuGjLcRjit",
  "key24": "35HyRxrisMuoHFaPv6ab4g9croaw9NVBzHPEXj6ZCrMytXRHxiYVG6r8teZQkQGFJc7Z7KhsDHkv3fa8tWy9cKgp"
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
