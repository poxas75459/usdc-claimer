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
    "32dhYT5z9sKXtRmGoHmeiEzB6P6N59DXKupmUWBBv13cEbeCsJaKnA2f3jmTHMKCHkXVDTeUGvHZ5XfARitt6qNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JsNGd8yUPeSRzgFJJyLZbbmBMgVhmM3WXfn2AqQCBPWX4ue9AiuiTWTmvv2sMKdpZEuPuvqjB7bPMTSbbX4iYf",
  "key1": "25GELjEDkmPe1VSAdSKvvYD5sJsk3KZg5U6oZFyHMKeMTvf5dvzp5WoF7J88k8QbYAuhWT6BqcXeUNu87HzaeBPh",
  "key2": "51aHJ1TU3pGkiX6LCkhs8KJV7xFpgy1qzvH8siMrG1vHMKJHcRTFP12BxaC1uP6CETaBsR4RrK3Me9jMLxBvNEE4",
  "key3": "5jLkm5wBv8WJhtDgn6B2GApcnK2CpRmLWsERGgq6r316vaa8CEWAXQe4wNKo2CyAFH6TMczYMX2zHLWYTFM7NK6b",
  "key4": "5us4YEgJhYMT8uCQajwowbL2111UWYaXFBkK6iUc1ozuUWTNZV4ZR8Uh1oZfRCtYo1csuQN2Lr4MxXyzA3d3eiyq",
  "key5": "cKikp1fYLAkWnXjLRTD3PQvxvXJcfiJnPQikVtTpn4Yap2GKe6KtnFGCNBq5v6mgpUYL3apipB5GH17jbYZcMQw",
  "key6": "4jvDx74pm8A772ptTtiLgeeNNs1m8tC8Lt144FSYqVVk7iKeUVDH166hi7QWmaxSBttobjxUJbHy9QNNs5goy9fj",
  "key7": "275Jzmda7sYjaPXsDpCWqD5Bf2TUUewj51zW7JCjpnZA8RrQhhq93NjMaCYxkJqM5Mri3vfkBPUwustYKJij9Ng1",
  "key8": "2vLY4bTSPDRjacaocBcw9J9AwGx3NLMsevYrRxTdYNVt6WMYCiZCZHqHECkCk5sfkw4gKp4tfuCaMWsK71PwA7hw",
  "key9": "5EJ5ZaPffX2YD7UMJqM3dhoqV5tt76EGqtAf4ESbC2v4RzJ71ZCV2NVxzLLZQn2yuKkBwNegcTwDJjC45VX16e65",
  "key10": "4CL3qxozC96pQaQy8HmYBUR6N6dPU8wQ4vyoQFwMKPXFyEybXHwH8MZV2oseMZ46iHZ6jAoC4KrNXnvEWf8KtLWC",
  "key11": "BzjeDt2VYb5DYMjCJf5ami4MCp8wgSSEe1gFKQMV7L6krBR4AKxTACpF4B7WKfryoCGa6C9wobBxCBCYM5MiKRT",
  "key12": "4MfHaSSw79XfXGVjh2Ua3dypf3du1GjWPrdqLTw74cvUX1XQ6hwuzSrjfTtad2Gv2ZzC2vvA5xAVywbwWrvtxC2D",
  "key13": "2qTC7AXHfEBGWZZBmMaZFXc3hzaT9o9QSeDAx84SntzZxLGnMLWcsbhKqF3v2wK5rEasmovNRRrAv8dnDYwFvALQ",
  "key14": "29Ep1MTQiP8NP2uwtjPqumtWp6SagQxvoVr95tEQ96K7j6Wv9nZ9LgrKybaU8f16e1aTCcK3euMCGyPk4BTbLG5i",
  "key15": "37XeP8tm5ZaTK5tuFyH9TMB4fU2fSiFhJRyBsULtnRpA8eQnmX6awEufnH5ywGT2bJtifMshCY7yXaFfrciULCPU",
  "key16": "5u87J911hmoySZsiZiv6w2W4XJUwu2pD96p9yRiNCJUE8cmKXETJwz8WhEoxcQzeJhEAU59CJECknHihhbXZqYuo",
  "key17": "3Nzv43FK8kBGW8M7gGaSFQYqpMSMX6xU2Cc2Yr1LgS4U91j88Zht461yTqH44zAJhJJSYG56X4MTkvUZT3EfQdHH",
  "key18": "5GG7Mo8okAhRnALoH3fPzLCJvCTsdt7pgEVgthJ3rz3YLjNsqYdUonYPR1MuJNkZwKRGv78iWck7GMQ3oxHbjNDT",
  "key19": "23S1M5CxW6VkNVoqzSfuGKhaFrEw1CfgvmivKgwKetU2Wh5mSGi21p33g9Kegr9Gkzzq3g8nygEiPsFMC854JRwz",
  "key20": "28ii2ATkR84Xg4HZFwoWAWU381Bpaev4tN4okzypxNmCXoV7NmfU1efDYG7MJR7t65aWmpk5yoC6eWYJb7p8uwYg",
  "key21": "2w18RrpCJsc39jkxMrrD2xMSRmQzQXG7RmQbuwneP2GAVMTfD6JGbZnKM6o1neNHmH8ThxrjnDubdUJnds9XaJbj",
  "key22": "61Lrp1qRum5iSKtdz4xGzGDcqmkdRoCuU5icNCqNneMEYeNJSsxEyJeqHspWMYtL4Wv5Th6MeQjCUd3j6NmHGDaw",
  "key23": "4ZTax3RPYAxDxrWyu2HNKPxcW1Ec18asbPP3jsS3jv6iuQFLtvnx7TBUg72vCmrDuRvSoFzp23X2WLPbCHx1du5L",
  "key24": "3ncfjptjMrBBvRdQ2udoCCAKH4DzsNx1LX8VSRzgzcQG5rcTzCSnFBDmfnmGdKB8Qy6rNbnSgZKmcUzKwNfR4Dpt",
  "key25": "n5gMZeUZRYF11aXBUiGeoT14c8UCpMXVcDDtaFQZjV6oD9xSRC9zW9XM3Zbon6uXKSmisJKEVZ85qFxLcNniELN",
  "key26": "57Sp47i3We2wLkS7ivaZSoqwuDs3ecLiuttiBd4zuq3mxzwsH3p8MDBhBKJEStZ3TUjhngiCrGmYgdLGoWduxNqQ",
  "key27": "33d66t2z79qCZKoxdFBeyxA4xueJmQWABGPHfZKRMj6m3mi5YCw6jdac1i6XN7UKenBjhLYszBXe4sBMStTwGKph",
  "key28": "PohAwo3Fi3Q97a1yVHXmEsmMfp8WxWdw9TbFVsUZYYKMZCyvHkiY6Vx1QZn5KqxYGJwfCF7A4y45EFE4owtCj9u",
  "key29": "2QqWJdNCHMh9bbdf22RjvcsfuwThEzG1FjQw1TBm92wqwpD41tTHtks3Rsd6x1Tm1UW828xtXaUhFkaSmBpar7Nr",
  "key30": "RNkFc1q98txVnhh4LHWySWbNA8aKjwUjuCxeLhwwbbZpgN9ZbKqPcE6occQwJrGKFkA4pbgcB5dgxDtN4P4VLem",
  "key31": "2mrrcfqbzEFgtHKKgubNy93oV7C1yfFWT888tXfwwfwiRaZJRTN5v6KesVRtWpMrZiHQBbS63o4rZhYuc839Ajmr",
  "key32": "2fdzpGmjEKG8voKzZfbabTDHosv1dx1uEMeNTJLw336k5SsTS8CBhsjB7eMNqNfwA3DnexHXGdMB4juPyBXbposr",
  "key33": "5ZnG8cMBpkij3X49eYdptwft34JzsHqMborrTFq9SEXCStPLCbuMHPvJeoQqCSv7MYztR2Ue8zaPLj4t6B8SsEpA",
  "key34": "5pprpQDghWZ81v5rN9RpWLXxkkUmUspTZUqAWFmUPPT3EZYriKFtbyparPHFxXDj8csqkgkWTLbUXMxwtK3vPcYe",
  "key35": "578ywpKAKWR6fUFwWqdA7huyDZnzKCtjyA3vTMTsKK185QKZ6by5HqvmNQYTh7yLmBEXiE8HMix5QSxJCz7Q33Zo",
  "key36": "5y3UwKSTaZFfy5Kwd9Qi14TnvGdKCaEH6fRkL1GMb19Rauv7HGmePMzBYN9Q5Zxiuggemr6myfguDrxXa4gRqQEc",
  "key37": "fRhu2mR2M7f8efgy2JvTrxQ9HtoenabZ7Rs8rzCa6tML7JRAUZ6EgGQnpHL1ptMfuPizPrqkGRHaYpQSV2iFEph",
  "key38": "5UM135aaqZ6xsyc9k3ASwFZWYGRoif9XGNd6LFF4CoABEiizumQS7fhv5KtdGD1LsVDxQJtV5NyrkeSA7SULMvFR",
  "key39": "67ML9N56Sbk2URwYnN6iY8yQ2vEc8Coyr3uJPgyS12suhMdbP4eXehfQ1ikeCkp1pcYqDYNDt1cN2CqwuuCYW1TX",
  "key40": "641MBhQ2MXq3PBm9ArEnwyA98VULVizN9rP3JM2cEibc1gqt44ZDCG9bnUHVJNgxxJGiMo2af2wDAHHmgWKqQrsK",
  "key41": "4LfxTtAmU6x3KvcrooDDBiqYWcRhiyuNuGpWn1s1EkgZMDA3sAYeH1wERfHGeT2wa2sJNTDXDgUzdHpD75A287eZ",
  "key42": "4byVPmGGFnzz7x2qcQNJJh2S1vZLbwiWPHfvikWhrr6xQSP2Qf6GnqcvQSZ6XK1UKPmZc2obZ8fdTVnsRizfzzKQ",
  "key43": "Uf9QzH8CwokrSDCS9NRissTgUuMj6ZiZnXH3wSKiXBkjiwoLNSY77Ej8iMJCCohRrY7CXwbgmmgvN7Ww9oZjdbG"
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
