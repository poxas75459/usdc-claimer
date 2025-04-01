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
    "2MhqLdwYgFY4LX76hGcfv6daThjSUcR8aC4idyekCqDiNr1dQntbLRfricWDxmcw6fygDUyVz4ViDdbxkbHt4iPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZ1tGMpuqm4tb8jDhrCNk9TeSnqpc3zzCaBEuQXepeKcb1i4RhkeX7TvpjSSkMWkw3VstPGAEK866p4mUigZL7X",
  "key1": "263HGcQVncMXp4xCtqP3NP7tvN9zSfQZGjw5ubA6qsPfbUtvS61ZupJz9hLxFa7PRRs9n57wmipUHvD6CPdL7YXU",
  "key2": "xZWJpQafHKC5vSjRLP4K18Ks4W2WHUfoojKLsE2gMW2qxgqhtCYed5tkoy7iQ9wRZ5yGb8VHwdb35Ak6MvSK9hm",
  "key3": "3zCa6fmi53tdCBzEzaGRDX6iEnHKotFEdxnBbwsC378Cp5jdsqTNkKzX5igA5kVdiomTGoASr4B7VXmpHBP69dYM",
  "key4": "3mMVqXXTDt9oMfWwLkWDQZB4d7Ksc6HXsU3Y6n1Zt8RDPtcbP6SasiFTXEzR33a6WXuhvuA7deMtFN8uK7ZJ8uNT",
  "key5": "VAE2Z8EvAy6Q25TEgmMYgbuQDFH1vazw6Nae7fZqd7aKykuRGe3TKxqw515oQ2xx1JF2cP5nG4DaSuqzVRdMPka",
  "key6": "XpDQr64nRQaBe88Y5b4hbzV45qN1SKzDaAavaD3HGPsm6EUF7xKqJmfuzQfuUSpyhQTvdWXGiqnR1nLWGPCpZzG",
  "key7": "3nqLkwJzF4aohbTFqeo7du9B6DPgESYKxnn8GUMAtEZtfxUpq3uTaR9wB7qYaExgkgZeYyX9m8frLpDjdRaQmSpo",
  "key8": "2FREs6XDqwUocgNygGXaJtPuuKSdkLdkMSwFLpfs3ZmwarfNScc5J3KABVm5fNnJS8JwJvZQy2RjyadpLU3b5bsP",
  "key9": "UkWZRsBUFitWSY2uLDGCynpQfeaY1Mxhu7N9K4Lk34AZdTiGMD5HtcCP72FRyEWoKE1jqXSvcEeCjLyonH1zWsQ",
  "key10": "4vYPTqjceiJkgcdFUXPmvZK7bWJTPcnTynHqgLpnHfE7UiyzNFKk3NVGwWtmi8HkXPJUaxWAANJmMLo2gjRdyFRH",
  "key11": "2Mfk2LSQ8DVoETdxApi4zJnxKdWenpqDDLuQH3Tyfb4EtBJDRcNagn3hqzDcSbC2Rrz8mid44zCycVK7CEaiJQwx",
  "key12": "3fmcM84o8yDLT6o4fHPhuiD9yhhvbKk7nec6qTyLM4zT4x22qHYEcnvJWHnEpfxM5rnuuM2UuJ9sgoyR9mwggsJQ",
  "key13": "3r7Ps9W8WxQaMvURmCHnMB4ja2HX6wgpNDHhsLV7o9NunHgEGNQyruVY95dSs7j7EbvVuaqr8xcELEqzZsqToRQb",
  "key14": "5iD59n9jq8SVFaYTDGsWNNxZuteAuNw9GjhKUdW637FQAUJCiKsk9VnTpbUJddpmZDcYcL679PpCAGVTftWsDYrp",
  "key15": "5sdL5jm26yB9etyRJJg65ZiAVU93aUvsTGBsg9yuf7ibjf236MPYWt49eu6m75vn6vcE93fH4mNSetngssFM9YWT",
  "key16": "38Eo3uqs5S2w42GScnQSGRyDC3YSyNpL5kgSu7tJLC9vxnEU6YrAQ9tETe24DSynt5RpkWqRDAQBusTRo2YAuc8n",
  "key17": "2Zzj6iQDruaLPGGJTKR3Njq4SyT3equmhbZm5axzMRXbuuYcugmJAve4rTB3LGbhcneYY2SX8W5Ji5Kbibgb51EV",
  "key18": "4HKfrL5gjNwaoWJHYrwxGykEL2CCrBhVxALuQjmyfYqvHpFUemxc8nptZBoB725pM6MY6hZAa7YoA9Cb4CbaVm5z",
  "key19": "5KyxeW1EBxQLPUh4gMaDJYtxzzhBxLh2TC6d9yhmGRd6XAWB8v1nv6ce6WRGrtUYH4ZpHDgb81btBvgyZUmpr835",
  "key20": "3AMtSNcnfdhEXc5Xoe4zmcaHfDHwFBSES6T4E4oqFLtYk7Gx1CqmVP4n5osejorsKGYj4o2b21TYKV62DRHds3tb",
  "key21": "33mfKWWdWhobkp5fjVGaBepjYuQUTCPL2XLy8SJd9rkzZY11ixcksN1qSpUZYk1dE2obFWb9AFfh2rk4cmJVon2V",
  "key22": "2UJWnVUFCEay2jNvxkLiEKQfpP48sMbK5vHBtw1LhAhWjiRf2YkcFk2XuJCrRhXsg38SKVCAp2zSXdXZgGinWYPN",
  "key23": "64X37nvGtGZeLbJYcqKVoZWw72hqdqhCBSq9AwszesWPh6Z8kyKcGb4qvXTtKLkJFXmAWHYV77qkrkTuJ7pKwhDR",
  "key24": "43HvQo4gxgy82Mg8szmWU275d5tWUUoUKqBKwDf5grTqAtJpoXsjP8wNmjF4RKDvQxuNjWVyFMWyM6vdiBXcJrkW",
  "key25": "4hJdv25Zow66TMqcpSzakpUE5pj7De14wLSbmkqnh62MTBsbiofrZh1tjBSfgTv1FzVpKkVA4d4bi62QJcGGKMZm",
  "key26": "5LBvJVYn5mweRgfusrt2ZcUecdnySKAohmAepxRJP7jAjjdwdfc1wWMxNLFguETc5DrRFqJUzJrKZtXrU54YXmPu",
  "key27": "4hgs17jq2Tu4AsCYbx8ZXa8cS8up7CLChupDT5acLyhLAkktGJD1t85t6Z3S9CaTV75yKviygCV7Nyr6shDZesHT",
  "key28": "27Xv2S7XJZEEX3Z8qzKrfbyzc7KbbebboXpkhiS1SKLmNcVCJ3R6q6w8N6JVpZnzbveCuBEu3KLtQnxyfA4iFkrb",
  "key29": "5sw29Nmz7LjUF1N9WytSRhksPUMHah7Kk6SkPSXSHWFnuAGgLz1DYLHGzaSPAXe7JCRRFMeqxhuRKhtUUArX3gea",
  "key30": "5CED7hPBaF28WzrxWrVsMgjqu8pfeQTL6KBQERHcisPSHQSpd2FFGJZFUB5GWD9Aeq3bsGy6fbUWzpkBJ5rjoGVv",
  "key31": "5TykQzyaB4zc91Dh2z6egeax39pgv5Fs2J5dmQSpUZKW94KjhPng9Faq99oTwgnfCLH1G8SavT2Z4xBcCix42UUW",
  "key32": "2dw7D4PLJdGbkQQdrCsJCrQsGicmFJmvWydjdwRpxvQ4WJ487rZMdsJBdjnQrBdLsJ3jaVka7x69bp6FXpGNX7g6",
  "key33": "3gwiowfJndoEyNKZHKZjs7dqkdabF9cCxeyFBbAB8ZmmAYavJo6zCi7dehJRJrWnQjtaCmBUGbYbwRVDbbbC4xPR",
  "key34": "628k5y1QJQ5rfmfE9ULju89HyFqVZhbi7xxMKE54Yy3sE2csSJ77Y3MYASApthuAuFxsQFjoALTqpi1Qo1uKYWMR",
  "key35": "t2Pi77ANqZCi514NwR3nShL9LnxkHLKE3j2B7nTCLmCW11wwbR4FRNQYUoqvD3uhN1cAhrmG198QLteWsynXVcM",
  "key36": "4rgDYsH1XpgCuHTQbD5ANPZc5JSm9GgePSQSAKkfLj3TYMuqjBCFJBEZ4CQNQmokFX63ZJrQgqDBK7L7yFXdcEtG",
  "key37": "4qzwY8eZiWhn7QtBpkBEuuFWY3YyvACDmyK9kNzrnv9JDKQdaCmcRw2LbogbtB1H26AhbZXmdQW2sSKZbbkbVyk",
  "key38": "3P5YMgcLX8rXAwG3tdzEmmweD5pWEm8mcypewnzTvAkhQmV5mkBsUxqVAErYwNjuNZgd6Q5HtXdviggATLg4h9Z7",
  "key39": "2sVox4XpPcW3hPfCe1wotmQ7YEdhN5vHka2JnNCPHA4Wr7kyJstkvtebty6MPx8gfpsTh5j78rXPpKtx9p5VoKEK",
  "key40": "3T9yYZfXAjLsWTxBCgopwFoDcjsuE6uynSgUm9wJSV4wBqtLSCXgkvDHe9YYJp3fndgXNQridtfN58EfaiKSJKuy",
  "key41": "38pf7e65ypou7gcPibT7sCW4H4mACAQ3s6NPHLsrz2Cvkp5q8DxmnG7G5Kf2ZuVsFL8vuESeAzKTbH4Pgj9GXnPn",
  "key42": "5yY8A8Lu9TYtNdt6phZaRu9wbkE1KbXGK8n4gbwiBrNMrCF3LgRps7UVaWDzDaG3nW7jLXX2ve1r7UT6PxQt7zky",
  "key43": "2vgNBbDrQm9HsZzGwoD9nvY8UNw2s3Dc2t8qcWMC4rWNuMR3LRR6tY7xJTTXS3WtHatjptVBGYskd4aYPwqf5cT3",
  "key44": "39jYGUShGwzn5Voag6sD2ZpdbXkkvLxdJ3SkssTsv13YDYzVWPZYwLy5oUbmPXYvosFUQRPbs9LYf6PB8G7RYiCV"
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
