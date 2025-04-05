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
    "39PP7xmfthwtthek7eJ69cuGvFybsbzVipVpxJnEHqBcjUd1FzYVt4ebG9wQduGseDbys7gbqRqEZK6U62JfKkg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U1cC8jM2FyNH8D2hHbcMWQthN8WZEPhbAE8YUiKT4smAr1VtrpAXDhjkzENc8xRHe5mMVh7h76siZhxyjE4gTm7",
  "key1": "2WRLhJ7Rz4w271qzckuAQFHjzVze7Cta3Z5UCFst65qg61EwVqaZrxmDsLcj3XK4M9Aa5iPfZL5XHULxEQAaULbu",
  "key2": "54qBbHoGcAVwy9S15zRDYNLsqcWtgP69VSBjY4piyYaBhFFqFo34BP5sHrS5XUsqAasCc4ZE3zcs7xQAYGrPZGxe",
  "key3": "VP7BFozHPVZpL2nxGEHVT2BQrFiXz231FajdoDnVCVzWq9c7HjmGDRjAN7tYQTFdAdCBhpae2UC72JtwSg3ArYe",
  "key4": "2ohg1FWj6hxBkcBmMnYhWpHGyt5kc8K1LQ7S18r71EuU296xqPUTu1WgR8Y3Ziqm1Nuv7kp3XHLDkRKVdeM8y1ht",
  "key5": "4kB9Ah2psNGzEWgb9EsckbtirZug6h6eoKd5bYDcP4vEUfZQzMjTpneRrwWD3yGPxsNN5YNemK1bRfqUHS3n72Qd",
  "key6": "zKymnJ7inHpfNupaHSfMwcnsHNrK37BaxKw3FaQBefQ3PJLfDN8ro1fZk51krWK8aHbaXxtZCM6UhwZiYdi6DXE",
  "key7": "phytQCiqLZCTxQ7pmUZ4SWUoE2Vp7yoFiw8CjFncSJUJpHnBpxm1VXCwaU9b4upnRkPS3VPJdRx213GJgNxeEPj",
  "key8": "36GSx1mfxL3fq1ReevFg6BFxhwNyrugGn8oWdE6qKMJwXmFWnuMndPuVhzyvSBYq5Eb8mHaf2BtjKNAgJUoD4H7T",
  "key9": "5jrqY5fCzRo5k87oBUMSc4JR7MpnW7WUSZJWjAdhPX5ffnN8dhwPghJpW5bsW76r5zg55FoKr2RCpfak8vpAeKPH",
  "key10": "67brTD4J49TBexyWLTd28BeoArnBZUc2jva5jYxvX78sjWMj4zLwqaRSUtY9PH7djZChNCy3NUcodpqVGa6CRipE",
  "key11": "5DCUtWQQH4VZGRBA8LUjhq5hpnxKye9BG8R2xXWsbNdzTBHgPhHT4LHd3WUXzZENqmawuwQidXutpBL4hcNKRsYk",
  "key12": "5QW2eJoqnaR6HMNV3ebJ4JkyoUUEMdKfPgGnVrDu4PA2PHvoMvJeiEivgy4Ks1khHyE5QAQkKxzgDTxLu4W9dKtr",
  "key13": "58rGBhu5KUzxiimses8fAe9MhNhdpebaBfE9c3aTqZqLHXZA7tN8XspdxF1wS7HsEFTNhoAhRznCdHQaAEomANK6",
  "key14": "2kW146ZdHuMB2hTFCYhnSdLt6nUZjR2pLdgNyHUsFbtkgBwvVvYehER6fc1peskJmS6RnTkJ2WaPH2c6he9t7xM9",
  "key15": "2ccCBf9cRBEttW35zskHUSxw2fLWwSqU4wjFstkkch2mhtzQAPmmo5kFeMvUqSiRwpairtzg7D8JnovKBE5ofsvZ",
  "key16": "5WEqaM4zHfwdbxL5ZNQTc6Mnuzc9jof1feuUehFHcpNK9gmbdorqUoAZcWx8JPeJUU3MfYXssZE3MKiU2V5TTYD2",
  "key17": "5Lb9TBco8DPbBBo41QMo1Zc6zqbWDQUkwqVKSjqT4Y3cQJPSrPk5pypwJXAekHy7HPQUnBHDnVwfHZ6qtJ8t9FSj",
  "key18": "36QQpy7D5tCNu9oSpaxs2Gf6MgKNs51dNTu1cZaCzMrKCDTGsdsgTue32ouGFXsryPnetZG2EvxDnGwR5ES42nEV",
  "key19": "3WaJLZcRu8SF5n1T3uPPvmCLV4FFWCeaVHwRcyw2kbUaPqGzgPUj5PQikmrrv7Pf4tSmiFgkUiW53oULGsKuaFxT",
  "key20": "4GWL8WMVdQjjadYAaD6czdCDWMKaPyFfHkaXMFrcqfjHr4bxTCkxRAyLwC8T9GNd5X2WM7fAKDPHTozDdqYTnHfn",
  "key21": "ikv6uVTi3zD3bRkqkTUEJn1bJNdNf2FT8KfeXYR1vdN9k1uWRHzC8gfrZ9JNyo7VKyYBnfkeqyFegrzAZThjLmj",
  "key22": "4VVAcPw92mZ5TZwvGRPmhHZn9s5PYhY4EjkgehTcnUVQaUKXbxXEipTobACUaPugvvSSH3AxdKU4SEf4GJpfF7ab",
  "key23": "2n2Acp7E3J6yb2PpQrsgM6SpF9bDZG9GGcwTpSpfnSLcBQVKxqBuG6dSVKwUEufz6JDhbF5pBirRToHQNEUP8nAE",
  "key24": "5MTLd5YvANvSAZjxcQwqRDBfMYpnQNdyDR8avk8Yozs8NS1zi5Fxd6cH2PUdr4xT1Qd4YLAABNSKKe9W2UcMEtvf",
  "key25": "4BNkh3naeoG8iSoqWwJ1LsHPGpc6DADQ6b89jgxD1eHqP32WC4b6wsMtsxxV6qn3pYQ8XvJh3MHN64URNEeTTf91",
  "key26": "2sbJtM6BkS3dGSZSUK4DcV9cbXvZUyFx8PiJ4zE9jq5iCpAgYFwfrnG7t1sCJqxPPQqm3ffTBicGAfuqe29XUdFv",
  "key27": "62qSaQiNA9uGsst4koPMFjRrogNhUKxjaJouiGE2Fkip8kAq7iULBzbkVqBG4F2ur1BpJgDk8fhaQLGdrYqD3c8a",
  "key28": "bSsFxXASKqUTr3YFJzBhddRBEzbNgPpTfUYEY4eQWJesHG49qiiyLQ1gikT3dmLurjdmZCQXkQ9HDCxcH6NNt1R",
  "key29": "3RW2jUbU2uc1MNwsuowcLUmMCvdt22hcMP3JMdewGz1YCYjLyR8XcqM84B8iPy1tUeNkHNLrf81qf7m62VkcBWfS",
  "key30": "4SysLjcYpwMDoDnEmgp3nPdsDGTZmqDvP6SikCka47wWT2wCHwuG4yczCbw5am4FBw2KTzbD6rBw341ccNjFoJNV",
  "key31": "4WbgCUN1UqVuaeBZk7a9hY2yVYS4yJy8GfprJFe2sVGfKqPUqoFyMEfJtffgyX6Po3FsJmoRsZZYbvoJLEbgHFvi",
  "key32": "3fyVYa7mZvDV5HDHLz9QiY1YJQpfuQbzhv8cjicCCUsN6rJtHCpMjcZFbxd4CR78dtJTZncRLi9w1M9qVBypsAr9",
  "key33": "3iN7rA7mzPrLuJjBSGRNdeoyfy3zqGBbQRJhxhh5SR3E1iCThqN3UujZPcrJQhK7487Dr65xRAh4oQKmYvyXWLkK",
  "key34": "297VYSLamyRg6vcG3uP4aptctNyBuccNuSFidfNinhvRYEZJibXfNjikp34aZ6XrZY5YAQJzUcBzhF7kiftQNicm",
  "key35": "3aT6mQnm6ZUCtABDLananczh3tCp6NXDyydN6d4K1jhJ1FoDv6Pn32pP3RFnfqVF2hwph4WvUvPg9faThv862RBN",
  "key36": "5tAiimm7irBg78FsRmKmSsosXc54xCcbTZy4zgUv2b3BpXbr7QE8Vv1gTdM2Z62UfY6puE54zsSaCuyVRLqNfY7z",
  "key37": "4PndavJLjeVKCWgJKs7BdPt9TQWVzqdgQxMUnuWeahDKEL3qgnEjFC6ZGUNhPSNeAbEEu6SzKZs4cD2xGhLHQHQ6",
  "key38": "2rCWzxczB1HJZLsS3ddkkW1s7HXuzL8z6XRHKqGZaGwy2HTMQEBLY3ppFuRh7SYv5toBaQhqohtHQDFti5kQYeMr",
  "key39": "3hVUHrMt83zwDV9pCgRfsCrePDtCAJyErnWoH9c6eyZXvzwVrfmrHmEmSHQ45H3DdyCH56sY3HSf6xdLxYFHJQBw",
  "key40": "2pAsBpLhrVNUza9ConojvtiYiSnyMVtxDo7AUdJvXhhRufgNzKrMgF9hrEPtK2u3CHdDUdASH4KaxbzfRHcwTdrE",
  "key41": "z5D5Uu4df3Mw7tabGLwpi3kM7LYkLZMcsfPWDXRBFWkzB29RRdD1xkMRecufz8R7ooYTkMVEcrXqxa3iDxtfpNK",
  "key42": "4MBD1oZ4Whc1GZ5zr9J5AGURRvix8PxNZvKdk3mpC4bLnaBLFKtgZFaUk7mCpQ6T8S4ijB9s9T2cZD3V4HFhEwj8",
  "key43": "f3UexfpMycrrWHp7EuAYPy6Qw9LFJhfuseJpE5GqV8XV9q1muhjMMthFJHbJZpgmn68jUBQPc4CtfLH9XJiD9eQ",
  "key44": "5XW6ma7NvRkUnwXZPzPk8s3uDLMniezNYBQojWzXc4uppZou8ziUWq3QpLentFKfg86Jv82FHdtq5SfLXiG5kXr6",
  "key45": "31sWCewkDy9YLVHiyTNZ2a2aeWT3a1urD866C99xfLA3KQ9LKxNXcEPqJ4T2TJnWNLNVsPHoi9ACYT2CEtkd8tJH",
  "key46": "kjeiSnHabStiYQsZ1rnjqMJFbbLB8HZiTFy1SDJExYXNFKmAvRQRKDwY3JaUD6Btda3BmdPV9LKQtbAe2M6Yt5Y",
  "key47": "n3QKCdhY2n1yM9DHcmuk7EXw97D8CphwHaiwr5pWMq6RMsRgXgLb8GigG6LmKZy2vcftFcEnakwqNMxhen2EEDe",
  "key48": "BLJxZQPoffqy9DJTHRjwMx6FNPiT5L4SM2R5bJ9SiiAAaRSEGhuwbPQCMPqbxbpmbHYtoWvzu6bSckWo8gQyMJn"
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
