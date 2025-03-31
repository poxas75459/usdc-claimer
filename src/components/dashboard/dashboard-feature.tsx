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
    "5K1ZsTEsMTCN9MEGuP9KxZH7xP5iREkVctvVtJ9yRYcWEwbhCGeSzQNYgVtiV8SY1DRkF4kpvhPifLcddaRfJEsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jx6YsBriFzAVkz4KHDtVs2t2fNiH2AgQZ3t5VMN3NGBzMdDyMR1dd3u6MbGCAaNvhonwfv1bAwYjL1txfwEZPn7",
  "key1": "41ge5s1AtHuLuACxYkBtP4RF6uC9CjZdT9yYJpvK4wRgeHiD2QKajcjnbNHhj6tySgHnGLmAt8DgChUymCpd7ryG",
  "key2": "FDTuA6qXBDT8561BGzPBHkQyMxVwGhnnUzY2BkFyZsb3JraJtK7tCryi3HqTdbx3gCPwPGHj9FqLg82Sn1D5gDs",
  "key3": "5ykMXnTBmf7anhp4Zgy7THfypgS1KNLve4MSoue3PxzAm6M7AxyFaq3Lx4wvKhzBnrXyP9TUb3FFubfDdiFbSqSG",
  "key4": "4H7VbWF6uQg1ANgyyu7S7g7X8ywRAszuUcYzT2AsmFb559SfzZ3B2F1Zm3jHwafnwSKiGjkSKGdw1TCpVtx7zt7r",
  "key5": "3Ba3igyg5YcySTsFAByFyjeYdPSVowmhd8PaauXxUyyaubwcTZRa4JEaYpHYwwGdDEbiigC4Wb3zNSwwHQ39qon3",
  "key6": "2ucwrQzGMBY9NqcJ2MNaBMX9rbX8WoTEXGCXA8u2kPFaERFP8x3SeckQvmzGp9txhmb5PykWxrGdufyuuCXBC1vG",
  "key7": "2uhozgjtk7Jo4WZTNKfHBn98ZfhfrvXsC6xw7baBDNuvqWUyQa4K8aL7F2UEhGELgcRYaGg4mQJ97ia9kU9VJ4qN",
  "key8": "5zrsSpCuqXtk4nYfaHyRvASGeNrJeZnhMEurm3XsvvhrL6T8kuv7JA4an6xgfiUfQ9Zw1VezWmttX7SDqkMoy6qR",
  "key9": "swJ5rHrKZnHU98A78GNYCVvHwufP2FAVcP19c5gk7s6ESuU1RRDCsKke6k7korqoyUUJqMDTLTErw4SYoyRhZmR",
  "key10": "hRq8zmFDcqMKGeqK5vMoHVAuMv7ydqEviQXn5vVBs14byerYJPhm9Zd1W7EeH2LQ57hKseH1eqB8rLP8Meuwg78",
  "key11": "2Q3roK4FbUhvcV3v1AM6k17Ey5UqcWcUGBB4fRZvQZ1udnNvUegM6GTvEAL2AURmLNSWJoGjhLjVZvgAKfS21VS5",
  "key12": "2bPKCiU73YFP4SNAMJwG1Va8mWuDzip13BhsupJU2X8d2niE435Mbrtb6QyujyrhctP8pEPUaWcVVR3vB8j5ZVT",
  "key13": "EjbmM1pBgMYEno2iLcF6pUVddtXJvo4LdsKABVCsVZ9snfWz54oym19JN8T7YpNKKtrwKanRGTJz4B8fvjbXskv",
  "key14": "2V1agaVCfpLaKQEALs7bAZNXZxM4Z3jUvzAHDae9rwDHgR3WyimiHnoCL9UvifkTsTwSsxostMp46Nntvt5bfkQD",
  "key15": "2YeYruwgYEez8xLB5FaKtvxjZ28JvYsDG7GYTqGGXFCy2coNWCHEkR9RB5fH6AVB1uwm52nQnEocUYs9d8FFDcMQ",
  "key16": "25qQyyLCrkrY7EzM7XP6f82CSXQDeXfEZhaxAe26vXVf9ges9VCgzmnHgM38toeQyu3HzgSiM2eN1CunBH9g2eff",
  "key17": "3eH5pZbJqoomYTQ7t4vrbwD1VMyo6x9JhqpsT9TwycB7KnyxC3SKXG2t91E7yEEw9pLCErgetL85SfWmeiFPRYdP",
  "key18": "egzKJYugr7CtqT1HFBj8CgswDYhyJZRvuAuYMHpdwRikJoqE4HPkBxENUQdwDnpCky5yMcFUoRFX6oih3zQjA3N",
  "key19": "42uc4aMJAnU57Ru5fEUfyiHLWnhfNVntjema5tFuPztigwRcpLMrju5aiQB1KBnngo88oapGm8qmziL2ttdDfMu6",
  "key20": "2ZGy1CwzMEEVWT3nN6h3xggErrQ8DmQ9L1tMLiksBnUAesRmZHBZqcJW7TWNWTKbmnChpoMQDMWqxspGp4RyVh3V",
  "key21": "2G5FxDxoX9m5GXpXnv6fcrMGy5Bp3s2o1KNxTTmU8EyqPANyECRJFy15QruuDNnWqJosxuzAPRT3zfCQ7HNnDz76",
  "key22": "28S5fptZQaMXXF9q6SLRPfNVyf2nzE96akHjPdXNvxDUkRg5nu49B5XM8hWfU7UMUCZaZ9gPqUYjbkaR7ja84YQk",
  "key23": "5Qg9poPCUKBpzUv4S6zLmvEGDznQD7EYDH43VppMdZ3aEjD5J7Gp28vXqrF3BFaJqRU4rKeL5kwz7uD2FNDiTHQg",
  "key24": "3Mi4h9saYbyddmr9Q3TfSHbVVjqb1DvZtXYKUmJ94zJqQ3gZZB5hJbV3JPATFQanLntfVkCCoY1zWD7MLPx7PbXr",
  "key25": "5QNxqagQ8ia6Q7NkJWqMdafbkEBTmvjj8FDzhDZXmtnjMr7gZU7Hzz5K7qesnDzhXd6aHMz9txQQd4k5y89uPPbp",
  "key26": "zBpuNRYRUJbHXfZd791onsj2Gu5nruCQg2v8PtC5UAXxHer5rdLkVgGtUMDpUQthQuLo9Syi7aZifB7ZBZtDCJC",
  "key27": "5ZuBq8sm8yHgyMUZYGYZUj5ZKpcnkNh4UbrRUTwevEi3C6G15GgNDjFeaygqggz4KhXhxyxBahtUeLxCfuCQz8Bp",
  "key28": "5gpLKPcbuewUkvgN24Tdyr1Qs17QZvqCKoZAbFL5w2iocyG4ZSCxwtdaHZ5w438PfKRuoz6kt4DXwvsFWHwbrETF",
  "key29": "2q5br8EPVVGMvwnVKShw2n3Avxjz8p48af9KxLHYi54nYkKdiUHkJ3qPZg3ehhXySK3TJd2D6413mzJ3CebQanty",
  "key30": "643hcvmYSYrS7ruS9isCieJq38NqzvjsAcKHWU8xQDGUvwC3aZ5c9kJjPexeDCaiesDK4ikwDK7DqFwCP1evc6Vv",
  "key31": "3haJpWFC97wQXBxwE96jcBartBLyYfZMb5mr9WaBqpUHrArxGKE3m87JrPFRYsRE6EhJagCNstExCEcrREVPstKR",
  "key32": "3wJh1EaCSjpXTvDZqaRE4VQQTPWgTd3if1QijFpx16mAB4BXU8hinfLQ2Nhvr7iCg3Jugh3WQ36zwLedFDas7kdE",
  "key33": "2qH5NU95mbhShc5xfmzC9DcxnJBWwiQDFxBUAWfSLRsB4iLC8W3PnjdeANiHwX1gMZkXLvcuudzrdEm9rhrQoRb1",
  "key34": "3toEBpy4cYhbFht61UVQemfBVVHZ1yrXRhds58N8GdVTcsY9qk15CENcqsoTUUL32CVp3KGeeBWepFZRsybgMA25",
  "key35": "5qc5bjFQUjarw2GScdcFC3PAgpWDbek5WtFyh9ikawN95m2wKcHrEiYB1wGZKpykgWkmjqodKVdQAwXEmYtma6G",
  "key36": "4gGSADiCBM62cmdbmYVZN1f5q1F5QM2sWQJGdpE4CWP7WWcjEFrUTQ2A61xFAZM6QhBKSq69y3b4i1grM3D4qpM2",
  "key37": "wkRJ3WNsUXuaBs9XCqJSzN2b3sPHyhxMv3UVEirL4LCDdHmEGpNFsdWjDgeYsMFeUhagATjF3XMouajodyz8rLp",
  "key38": "5K6KJ8suc2hiMksX1w8ebKPZ35Tpe94dEF5xD1hg5tPnEwZUbovctdXkztAkgd6963miK9CJs1zZuWyGjJX6NTMK"
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
