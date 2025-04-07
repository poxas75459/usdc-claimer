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
    "29c2yaonnuJfP5ma4GXJHLtS3Mq6ox2HcX6e2YbtCVx26porCPSAr7q1tCHsf21gnQPcAZLQVtAMzubJSujyDsqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H9BGLR6b6h3AEDaNWDnWjn6uy6F3ezBEKQdoHsMnweR9zq5o9kjhB6MQ677SSyWpk1UUhoa7bpRmzePfW78jruY",
  "key1": "R9uMV64gYfziQYBpNT7tZDuPBQwaphpswBUnpSrpG3grfMiXBgqEzqwnijRFL1XjhXGvHx2taaTQhhA7v72Nfa9",
  "key2": "qw7ZUHpJsPkNXnBLiw1zumDDNL1HxxgevvL7G31gzrmWPi54L14dsH31dRLRxvG5wHMT5Wf8JjqFJZqMm23d4ND",
  "key3": "66FKihBZqCHdsfvXpczy8hWs1fbsLW6A57sPj8qAko8rGYuM25FjyGVe1ZjrRw3yNzTmCiAX9aUFQkxyZqsQieZn",
  "key4": "61reMX5hNWUtmnCFX47Dazap1kfoGNVX6hhGthHTj64hPgUjcvHi9MzgiRj5TMgfp7ARDw3W29tw6h6DR2cEJFqV",
  "key5": "4o6hZwycsenT5W4sGbo37KdLbABycgngannFh65p45PhxR31FT1sgEFUpuQfaAx2eupNTRpRuXuakJXt2P29mErb",
  "key6": "8cBe4cg6D64qKYruMwk8NVUdy2nSAEaCKE6Hi1xYPk3ZDeaamfS9hB9QVHuNvvjDh6FbivroheX3hS1zqftxHMu",
  "key7": "56qVfYG3RGfKvFNsKBxiq9NdCVcBF1LzYtP3Ad8qm9WHEeW8wGFbVtgBFgKke7dcd1e8SfKesKGmD8k471AfJYcE",
  "key8": "ioHDZ5VCZCyJpAegECjXVmhRAsScZcpuEzeUkXZAPrcEBzzeSdisPkyZcHhzsWPvt4KCwHDRh1iH9xjSAq26m7G",
  "key9": "3CxD1VHgyMokNinzi5G9eq4giV6EeMDsdErR6Hfo2iHQtTJFvCxLW9cKDBBpCfBkMGZkR4SXknu8eWxbWqhaasG8",
  "key10": "5jZB9T9cy7chhSsBkonacuA6g3rd36CWH29dLUztTntMevcCzh4ZtzfPCTmnnNfyNET1BvjUnXHVJ39VPapLGGDt",
  "key11": "3wRUTvTAL5JAuKPLtaPT5F9aNQEvXxu8tm4tmpFCwu8NDWrsM3Xin2US5HruGwMU9HgLzxNuqZeVn81KAbAmtDh4",
  "key12": "5Aq65LVMwNStB9cX9sNFJTAQUsF4njeepVynMzGNAk9e6TbE2pYWG44knrhqUpRnXZjj2VnhUELvK8grcgGWkdUq",
  "key13": "5ipbauoNkCM4qLurJj8K4nrczG8K23Q7vojpkk5pfzbzimUpZdgyTfiC6T4XPMfokzb2KtfJi2SUadnaDERoLY1A",
  "key14": "3aT6wKg5p1q7jbSWhXsKFD5asJjNwSEg6irccJ6P9ReDdxzaaxWd7QvzzVyfmtJbgvwSUSYnPhN2HtSdDc5bGf5H",
  "key15": "r6mLGZHh953jMU9r5w7ckgzYPBnFwuRwPwTcKHBFraQ3Ng8QvZYE9oFQHjfF4TkeTap8EYwWUGgmseC9E6GH8y9",
  "key16": "3LKyuojyGEF7hntDHZ1MWLSjynDcmLjcTasi61tTqMunDjUmSnT1RPYJgDbr1AcMrtGyYsMoF2mZSyvtxzuXwXZp",
  "key17": "66kuUdpCS5Tz7pQ6wqgpbg5uK126mD3K7Tmc7dAf1XvAwvoctaExj9fwmQ62Ga2oCZpa53syj593jKySiE8rDTfs",
  "key18": "ExsisYKkNfvc6XTwBd5iT8Ys19Ph82zNjQ84aNJz5329gw7dyPaYqixhpURCiENzykZt6JH3VUH779jwvLqewQb",
  "key19": "hfmWBDdTZKiuym8Scv3XMCU6gWB2Rz1ppHyV8E2yzbN9db56WvFzC2kADUsw92LXk4mSDb9QopKTVBwA88EQS9D",
  "key20": "4Vx5UBZw9Rf79JczkQX3hmvtrXYRNMhMmbXK6y9xPYpucQqty9DaNrwojSTsZkYQbMNcL8S7gbfBSBgNaDfmL385",
  "key21": "5gsXiJcEhmuAJoJRgMecRXomPXrtJ2kzM46NPrqBVWHXCZu6WJu5mba6sRTMRDrpNeasBUSKxXuNMVbH6P1Lm3kc",
  "key22": "HRMZypBCWJJ5o2h4EJPkv1A8ssnGCyJJLPrJtinNoxP74hPBt8RNwFQA3eis9ZTaGp6ojpVVyBxNsrdcfssLDuF",
  "key23": "CtGwDpRz4rwZRbryLDgj4jsDMKV1jQ9WWTmU8bLkdbYjnU4Tk4T2T8wXjmKnUyHSLgoM7MFqhJqM5wuCz4kZ6wn",
  "key24": "dpXa3xbTcdCh5AYA1ej1mwbM1QswW6GUQkWuoKvzcc47dvYdurPvwyhvxLK3kd1uS7fUnBEWtCg3Qzt24Fdc1KP",
  "key25": "5Qhc12sSfLvgSmVR3N9MaqQhNFvCdmXXnAcdXWBL5oz2GmxnjyWmZxheYZzJ8Dx7rdpFB9f5BhKbWFZRcYs4NB6X",
  "key26": "41L1nACug6w5zcK8eCzFpikbKnPuhMektGxhWbvztr5hpBXgEaSRcMQqT7FBaEQh1H5GMeVw7J9wKdgi9qg4WiYL",
  "key27": "3VWbiLLRNAHY7LpL3rtRpeQDNdsQFwooiPUtpubktiT8n19eejrp6uVuEBMKEzonPq3ccg6n2rC72bphJzSwLaY9",
  "key28": "wk662ELsbymL9ccwmyeajtTa7raCEBS1RBBTsmbKQjxjG7BNREWxDrmRwBssAwCoX12QjAffic4h9D3Q8PskmsX",
  "key29": "3TouPXdqmAY8aGWFtgN8n1UaKiRnQncZHphVmee9iqaRMANQdXp2eFarCsrAYrbVAaj7kz5S42H9QhcMjEXt7ghq",
  "key30": "4aSDKneMLpsFLz51pP3yab8LkvynCBjoTKcauRa3ocDiXqvsuqPuC3sgwhAnAXZA7marW2wEkz2L84fAdzgVyQnw",
  "key31": "5iMSH6ATajMMdHVcawDjdroQKYfbKVEFQVSx2FzNqFtc8XaWCQPKQosSGExVCNz6iJvxwPXQwzGQGgkz7MQE2Tox",
  "key32": "BBpxFWsBTzVDATa2dsuMi5HcoFrZApTDMqSgJqRnaoBXQSXFZ3aXMndwYNp2gargJVFaGx34sSsZsvFSk2CY36b",
  "key33": "4Nnxxr43nzwe2AmMvNUbEfX2uy3CzdAqxKAhK6ZT4v3XTrHmd95j3orFapY59HnF8wJCwgSF5VGAkYk1MH5mzxbS",
  "key34": "4kfdexTCpsuEgYEbyjUAydqTNN8ddbjwesTiobg62vdPRgvyV5M2Cu7h4bwB4B3xHNdFwxu4qRsrcmjCt8nQRX4W",
  "key35": "2MSaFZzLBt8fUZjNEVbazUqn5224TKWCiaztsmGjquB1p4on1ZDGowBeKyE29jyDGpVUPH7pYAUcsnswBgrgDWbz",
  "key36": "49V4KgpkmuvQu93VmTAwNb9dSanAtQUDbfsxYMASrX1gBh6KG8unKK3imDaL6XUJB1Z2tNHh46dPtBEykxW4wY1R",
  "key37": "5Je62LQFgXx3MABQUXvPhUgtvyjgVpEyD2tKBx4HuDbzFkBpvtPxp4NF6AzRTHCM4msLQ96A2VjbRt4fjNXq4q1z",
  "key38": "5eeX3XVWAkm3LzyAXDWWkhyD8zo7sB68vhKogJKNsu1M3Rj43Hs5ma9v6odonZUY19Y9bRndDW2jM9ttQTUhGAL",
  "key39": "3zkcM8FP7R5eaRmxMqXusZTXWaG8K8q1w6SakmdAvc57QrSPTKVpARxDaVDf43FqoXRFPmzoVcumbQQXM67ER5kS",
  "key40": "5CJRgi8fokPaAFVuUyeY5Xqt2Bvhyr8eDL3nd6uwTFRNXC6RoVrUeNgRV61dkU5eU8r8n13RJyiEEbHdiVVFKHT",
  "key41": "guwWwjuzyvJAEGbNeHnjWxk72aFbDzga3orrDKMYD1E6RXUyLo5AvUBxG2qB8Q4XyPmxaooyLf1de5ro13kRFkB",
  "key42": "4C1vdx6VaBQcVhgJddxwUe5zHuCkaaUNJK7LXb7kjdBVXUR1u3LrsZKZX2ee967tTRSNH7RGvDfgWU21H8eTKzeK"
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
