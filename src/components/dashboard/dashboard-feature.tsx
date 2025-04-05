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
    "3HJSZKaG7uL1oB1JG5VD3TPBPRGgSz39ZguCCqC3HRMeQwGKWrgcWZ99t9rEvkzE76UCCH57Lspdo43hJe4LrJit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LmDGorSzkN9jTDmeuma2yjDie6oo7ayixenfyGCrtj6eZjtGXbj3LA4gsFnduTrNXMkdwTWcPrSyBWbY7NUrjCJ",
  "key1": "3JwptRFkTM4BqrFaXxeEhnsMFAV8LQb7r3DyUx1fmWd57T8fqYHGjRfx66Ekbw57nv7y7EeSNeZNReXiF7CED2jS",
  "key2": "3fa5Tq9nAQytSEqnWfSskseCZG6BmK6EdqBnsdkem5qywLWPjuuYUgHwhjofKHKf739vsMsphLXpGjF9JTjEjxwn",
  "key3": "4ehZbGctmR2JJdLwPJ2e9YhGmV6gAifxGVzC5jgZKnUbZnnoVTQTaFEiLRd4kQGgkZjRj8MBQ72pnRxABd79jEt",
  "key4": "5YJBvnasiAC7sue2XbD2piwydnWSFevruF5RDeFi8ygm788ESZgKCdwLcpMP61sinP5tJXawLRbG7yQ5eoPUeyNF",
  "key5": "2CFL6SF4J5i6AjutATCiKKjrNtKz7WrjCk33fy1XUCcCMuEUzjE6e2ZckduWY89qnzHjg9pxjwQiwGtbt9trhT3S",
  "key6": "2QsZ7ujrncrxazxev2hvYjxgpnA8BSkzXZkie7BEn1e8sFzZWNUmJi1ijredDSvrXy6smz5ePqp7VLXGXbc88pmy",
  "key7": "5Lf8yTA24tNUfWDmJWh74qukDVzLYKywGEdYkVbYqLU5BUQEdascFxg4XvzHKSv1pBufZVHDfJU891bkfmh7WXaZ",
  "key8": "5FdLF6D1s4hJ5BkzvG3YdBJGrCELGzs4HFYQdjvAHqrVJacEggNygbGvxYnP9PTuWqXZZ8wG79E3SWA3TAN1oRMM",
  "key9": "5crEQfmWNLUQX9u7wFf4LpJp8HX6AordXaztfc91jZM3ZN4o97n7AMc2qBndBF1BwoLjEDjY1M6yptpt2FZ8h5BM",
  "key10": "4rSsunmT4mybnM4wk6dwjV96x8Zy58jDAJPtsHRkMTmeUCmsoxGLw9ahoEEkj5WDQtj2zG5aHw3SM567icGtTWVg",
  "key11": "5iVefwpfzUwP4tMhor96JbUgG7jBroT9psYP8vgeGtgipiWeEQXLYp5k8spp3j6uypWaKXf29XNJVwMkXMXDms4q",
  "key12": "5jiC5fM31yfrsrTqdiMjWzu7yzY5BLptikihhdeZfXS3ytjgKAebGexBMKb4Ccrjn5VCese4Rs2pz159T1J1Tt9A",
  "key13": "3pTa8XYzXQSQq1YzqRjEnNUxxWFcBcC73CmghXqogY3p157hGy9UpCW3KzuXb5PQrgCDHrXarzaGEMaZVjWyeAps",
  "key14": "Suo3Rjie3d4WA2xJmdq8QCffH2awfDfE7W6hMFwca7bBiH6yEGnW9Mr5kQgWiahSKEY2FYxzuxTTeyHo9kZaZ8r",
  "key15": "5De3crbcjkmHrySgxnDbydE29H4Ty8iPCEUReNfuG39S8az2tGBFzvMUvdFAPkcnMRbDhW83G21wCaKABFXiwJt2",
  "key16": "qkYCeQeeE4JoC5rDvbABwrNgWbZMzowWX6Zjaj6XriJg94nLJfGuwJe3gM2jyeD3ftv9ifZ9vPNziKicQ1BEduQ",
  "key17": "2NxciaHndqKxiEsfNEiaSC6KNxk9ATj2ZXsyi6Mh3QwPG9V9yrQgzZQknHaZzGXjF45Hx8jAUz5YM9JtNz9RRhvZ",
  "key18": "3tDuwh5eSUwvLTgL9XbTcm5iKo1dmvEEhH12nTosHxy1XDsjNUThsTdFtjNuionhiL3m44nXWJNCp235syJn5pcC",
  "key19": "1ySgAXPMqnyKbNLKV1mV3NgvMq4iPL3eQoKK9bvpJk6PswA438tiWcnRY3bDXmWZ58rYCF6mrNXxpcHTcKp3Cfg",
  "key20": "5ZAwLXU9nR6mxZKbwU6WgrvG5NFPvwAMzsc1vA3D7XySJi9Zvb9FPt6teeVVFWA3XhpcG62e1aNiq4PDsjKpWUJm",
  "key21": "3YDdN32NLRCu5SztNFpMrAGZw7vyKo9wmdB8r6UUj6nyfhEJB3u4fZJCfhPotyfRd5dybZWAiNiCQWiVx7z6SqQk",
  "key22": "5tmcFxWSDa2NkLW2r5eaudgfvvg8aKUyxPYqxJGbptwpp1Y7CaE1ZVWXu2VqFDnQU7RBac8fW7BsD7GuDnnNgrQ6",
  "key23": "3YjRrVKFgaHzNp8cTaNq4oxqUiD7eYZE6gf8Z6GFnPbA6TFvhuhRYzSCSUikZDWpwzDcmcaQmtVwYKP1exi1fv3A",
  "key24": "5ftLbQPdZ5N7CVMzzXT8gMpyjeFbM5jp4Vk78GtXnuDrvFfbAUUDwPpLRRfz2Msb8MEBFmXQ4bVCe2rUC2YekduB",
  "key25": "GW5nJYrmqrQ6orqoHKVXT8ZBu1VpunJjfBcCPTFEvkEPaAgqPUrSQCqsSqxEN1QJZNc4TAxuJH1tfUrJmfFTkmU",
  "key26": "4QfthpjNu8BfVBvBPpcn2JWKicQb5B6hFSd7MBceAm63TZBPzHL27f8tuhZgjE6f7qVFicA1cUbRseWXKCVRH4aN",
  "key27": "XcgvnWtrz5sdYXNvVfsA99JpzK7CtZxpFuypemEqbSJQsc5rEbFMGnixbrSv6UtGvBLrfDtDBPA4Pw7kCzgBxAo",
  "key28": "5YmANW9a1iAGmQ1DnH1VJV8HpUWXKCRe7aDY8xBXaKsTeh1fA4D8kL4kqut48rWX98u3UA7cAAqnJTfeZfyX61d2",
  "key29": "319LvGntLPdRcH36uPj29ERpJtU7cg6X9i12s24tzYPFGEtcZZxnSYiikowgng3u28XXPd3ZFh8iSUZaDb9AZ59K",
  "key30": "jeGbdUPN6DWUXW8VdGfR2LotTnzgQohpXHGfXpcSEUJ9VV4fVSnpH1eDMa6EHapQn2MXzfaXA2nD6ZYLLC99gwQ",
  "key31": "3zTpDUYLv3ECwFUiNai3JTGf9QM2UbcGJkHyCFFhQ2NoscrdNaNAWNySRjLz8eiFRgnkE1L3VDtJy4MWRoVk7sTL",
  "key32": "4KCedwrPa6feaj3AKk3bqAKY6JPMFn8jYM7w66W8ZwosfKdAD6F8z7aG3nEsXKP6gEMQQTS1E3fzQkuKzRPVDXCf",
  "key33": "38M6k8spqiQv5h1PkQkWRV2J687rq57Hs6Rfc6PKWmymE16Dfi4ZZkWJCmNh4KaSMEWRrD46SvJTwQ2tzc4dzWB1",
  "key34": "4KDGgbbPbdh3TwQU7GeYVfUmX2b3QErCm1wx8tcFF5ViKNbQHX2bQWQK9KBgXZ8LiwwmXUWNVAxx6XuWnhZFo6UA",
  "key35": "2LAsLge8yhnAb5fVZZ3oLPmCfxmEcPAViwZkN2MsjsTUkSKDiyqZyVMCaAdPy6gb81QkVPn68ScXBARjPxHYjUD5",
  "key36": "3NXdPukpYERrTRetBWjqRn5mgXVkd6vJJLm1cEygGEn7Cnjha7du7aKfTzbhjQnTvVErv3L9MnJvPcE4Ft4XoxiM",
  "key37": "4vGQveFgyXCcBGCFwXz1RtNE15KuVBgurkMuv393zeNkSbyeTaf5YJaMwU4xij6xjrHdr5nTcmrBJWGiRTn33QZy",
  "key38": "2hzsXS36JVwG6nnZqKFWtepn8md8zJzFXkUNcHeJaY7L8FZ6VeLgAAXwCtcAiaCTkZjW5iaL8jDkCz2Kjyp2TM31",
  "key39": "4xrPFriVZfoSyjk2D8xa3cGw1d6pZS2kaows6EJcxht7SfTVLxAs5VgvEbrGxpVUBuueFMWTUqdRwtQTuC5V7zBj"
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
