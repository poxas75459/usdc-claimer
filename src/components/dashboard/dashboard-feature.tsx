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
    "3AwReB81Db48uqHTHGkuk98gFWDw1SLzavmGMVrTBSbQfrVfeckewoVfr7AUEnxbsDyuFGwQqXMjtB57qhaP1Yxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSvTN3pTe6m1eL8rmEnwuNYygW353KuW8vwvpR8BWJM4n7xM8XR628dtJ7DoFM5HhV4rkwKNFMJmmZXPdXP5hTL",
  "key1": "2WnB5zbDaZQVcfj7yh24PwNu3vwu7NGVqZGit1oFgV1inrg348ST177N2LQDASzDoUWkzCGtmqsYzbqPDPe5Y6Pm",
  "key2": "2oBzSCpMY6ZebWvbKAGG7W1zPb7hb2qKKQZmDpuD4neQF8R9A2XyeKVtjHjLYx2SudpzwCadsxcgH7QsUBky4y6n",
  "key3": "4Ji67Dn7gNoV4E6VHnBdjoa1nFKeuJtaCXnhG4kRLTKaLUjuMdTQ3vw3WuexS4Npic1MsyKKW9FY5AxvUKXvcBCA",
  "key4": "2b34L4cjNc56Hc2YFh3FogAsje27p9mY7Kz2rBiEds4kVVpinMaKJzwgkM2DygWZAtRMT5vhqMKH5YyL7DpV3Ffb",
  "key5": "CeR3agKiHTU5mvKC1KiNGEqAPzVkdad3tt3g6hGSJqPaB1dd8SUSSmwTfGYzNoYM7nfqZa7aczJnfzYctfbGoJg",
  "key6": "4NSDJP3gkN5fESLLiWBiJDuHyk8DUf5ZTE4MBP6vPTsGJhTgm2SmNPNKv4VGm292Rn9hY9wTi1UZBbKD5VUzpiPG",
  "key7": "4SBs9PskbUcC2EhyJVLbRxSTqw97UfCoPNbALkzVQ6a2rztqFRYMYTKB4k2tQyuqTcA1Wu3huNDqhQeTWcsbAjuU",
  "key8": "4pXTb8nwoqh1vP44ryJHjaEnY3AjrRRDhcp3Y4zCHah78u3G3RHvuocLfcjYRSindJVkdU4sc27ZTQoymv79pCky",
  "key9": "4yzyXJXqUSiY1WLPDmorveqMPMvjTRLYRjRANNVGXMBWx6tXxgu9USRMNtHG2nWrBGgP7dMF1eSAzLrCB2xpYHt4",
  "key10": "2N46pKzfQ186NLDvBeMh1z1TbEgAsh4vT5MaJfzaDwYXGAwqaEHDiBUxryr56a7JanX8Zz2yjqw3mpNG8QCj22wy",
  "key11": "46spjfcSajqWn7nApFGtCQbh7hBZM3jhZBecWwX67eygzoeJYiKmuRzZ5Es5yLAnSJiKrkgXQs24YPv7nUzimEzA",
  "key12": "5NtKHJ8pN9yaCKKyyD2PwCyi2KBv3a64yxQUZYzABjoy6ViKRF4FY4CdDRRaX1cXujBPZFX7ruYMwZsRthXdi4ck",
  "key13": "nbfDVj4afuqt4oKqwC1r8mXcgj9zMtgbLjAq2mnSAQq9nUFgWgVgF3moLWVgAmnLeL4g3iXJ7oC7oQJU2rymDH2",
  "key14": "397ivyDyVEZtPCkHW8ZjviGWZkgkjejnnuubUqNqDUCwRY9KHtWeyQR4oSZ8zTh6Txh6zXA9N86NUBxrZkrNBmzL",
  "key15": "3tqbkWkdhMDhowPGBsLQPkQMdBwirEaCrYwM99om2s8HX8aj4okiF9dUNozJ9yt4fqPUfdyswVuQvQEdgiCzWpPV",
  "key16": "zUHFPbwZpbhaBFTxFbCwmNP7zdTSgJhNsGRwkNFgxzthTdp8wEULvTvNsfvp5txq3PTn2C14VKBgo5EdocvwDEP",
  "key17": "6cgFjJGCGYD6DXCmKMTphgbCcMjDSicMJZj8P4DfLsGuCVgsXjmwzsaq8ohSpzz1T5LbrYtBtmjNLizA988kVu2",
  "key18": "4a2V9ngot36LpDcBAK4udBqeXJGAfY468FiFXUYBKCwFmuW4JLntJpZgMW7GgQn7dJedu3MshJ6B6vWUqJWcQF3Q",
  "key19": "2BvBcVFQeXRLAkcDuUnPAaXF8qytPsgVw48ZMZMANgaAFWAVSATzkdGDPLrodbN5EMyuXcAmQwR7Hf2yQC7KquA4",
  "key20": "2rsRUuzNFhssv2isEHfcof77Br5RdNpzStAXzMCT1she1h3mtrjAN8MKsAbyd1yhxedqxvNZNY7naxXmkwGVpj2t",
  "key21": "4NTUnhuhnE7HazCRNyyZ34icFk9HC7hf673HXbG64Ph8TTKwzCkpCtwLQTQGuPUNLZWYuXYR7YZr8nEaadWyCbZo",
  "key22": "3LskQjStYhUgVBpSdSwR3wbGpqU1NNezG68KW11CxNCBQqzuMXRV2RsGNwqqjPZCaqiuhTLFn8SW4WDfVFp77fi5",
  "key23": "5UJAUgpWZmHbZ7HG8xVJJcYHAYqe4wzLbqFL8e9VoUXvkoTUmA3g4CXXXhBQb5dRYuecJRURn7dcC7ReqyCzHzgR",
  "key24": "9ZxwBzETXRSkQ93VpmeFTFFSmQCuheomKpm9DhG8c51EbtC5DVhRfLU2uVR8Wh8wackJkrj5KZgeRzyUxeFM6uM",
  "key25": "31wEgst24pNzQvMhZsHGKRMvVi9dpFjU3z5vcUDhbfrWse5nwwKH6HLbMsxgxarAS8Jo6pisX7mXQbJiWhJpu41d",
  "key26": "2Vea1rnaFFiVA2y3w8sgr7EHQAnjw1ARTPQq2z53LAJqeRQBUKb8uuhBzmzg1DiXzLYLYNsmXftiTCpshUepndFJ",
  "key27": "k2Dtfw7G9T1jQrVVcUEhP2WNHoiWJFQTpL82h4gLQkB9PMHUnpgQSNAwfYcEe412U5j4BCV2R5B3dVggR3UU3F4",
  "key28": "4qqzpcMbhk8TkKeNrm4r5NqSQkJUBWxWtTekJFp6p6ScRodyWjMA96ubsJUD9bHPXA8UBE1xk5Je5qoQrx4N4DNY",
  "key29": "4SiepxKDTDWXjYFW2UU9knAp5yxPwHgMeepHVGV55ufEhRi2bQGBBJNpttbkF6YbdpjYwJ8NiJ9co2S9faDKya6M",
  "key30": "42TRQcHo8grGZCQr8MshQYztm5fiAbk946NqPcmvieYXKAqamk4C3yJBqDJL3FmBSXRv5ML3XWUKfXqDQ8cxwHSW",
  "key31": "2DUZQC7cfhVjpMpxHjsqQ4aMpJdRNubGo6ausg7rj3uDdvVuELvRBFSzFYARhonHa3Vkr11PLuWZDEcE26hXaYrb",
  "key32": "4YBgbUoRhCNU3pxQu9joBRFrCFdHJgfaoXNMkoLNkGzsGtH5AQxY8VqnMYoY6eaBpDXAZ21oYabtkv4JxRpmnfNC",
  "key33": "5ZKnuMGMmPnXdgLEVar5vFgzuCuVrq8iY1VoJPkCfGVHVdKfzW1jyfKHcRg9udepVheUVWnuTjydJqrupFLKZbJq",
  "key34": "2UFndBq9RBjLWHQZebdBeJ3QTvvZVq54YKnUbwpNayzjdVjJttkCqLFdcyW9jiCmJN6W7hq3Gb9wJShttNCHhJXk",
  "key35": "SxGRPLCX1Dkqnu2dAQSs1yxGenF8JtkJX5oJqKdxE6cDvUrSsq1eufVLPaYN4CxaujQbpU6R8T5i7cP1ByjxCXw"
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
