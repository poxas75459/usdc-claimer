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
    "2Sr9F41tW3eTXjn1xCdxxVbTjqT5a2RDxopntDabBr6oNVUq8PZjHVm3Nd1rfHHpuBJ2vsNuNkdaiRuKee1xBRwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6GPQkBrtU3157NUEY35tmMjEJFQaojii4qLHyiVxXaUYSqH3uYosvuKDMYAg83cj3Ljr3msZDc9f18GWKU9mCs",
  "key1": "Z8MiQe3QDFWriSFf9w9yK9ipWcRAETVicUBCa8ryw87HZfmNLevk3qhxjfUGYovH1Lh3PHNjrypdrkkfEtpbiSy",
  "key2": "2B68Ny4LvPrahaTJdoNMz5AwNj4dptFGQDn7E9x1SEq6twnLUwzztJpGDtSSujNHYBmWSzePWoauwrbVpYT7txrH",
  "key3": "4CDcXWC4omvnVYqCc6kUuowore2SHc1UgztVhLrDemS8SZRbu9i2H1z75Z4YZaoV5pgigsfAD2SGHAAWwM8Uz8Hz",
  "key4": "5vsBHwEaV9dqXx1Q94TuxPbTm9pWtxKxFpyJAzJnuLL6fNDKv3WEzkD9VRKMmjpR3o2SqApjZApUxKY6u3VQfcV8",
  "key5": "4HBpbWgqKSBVxQ8Pwk9Rb5w2MZPiiz1jZ2SPfbRYo1AJn14QNL5p7N8sRb5w8EdQXdu9yLUEZAgZAWxQBpwNDhJE",
  "key6": "2ohEFRiJtcc2MusbKJB47mvpCLr8yH5iGf9jt1cVjrGcPuh5ghgQ5x65v7dgC4Rdrhdr57RjxLHq4jfwMEs8gb2u",
  "key7": "4kK6X3uoXAbnwfqHZKgQtnmpM9StsA1zKPzGHuDwiGKzNPJYPUEdPvXQFm6rEJ5LXQrGmydG3ZBzDJymhrYqww9s",
  "key8": "39Kx5JEwYGsxs2mM5Frh2PtVgbmq7xs3c1JZYMiBtcFMcGGHmenU3bFX3F2Y8GD9Ke4emHbYkEKgazcxdk5m5QuP",
  "key9": "RSCTDqQECYPZaYBmAhqNhjmFSFPrF61C7L9kYcaLUPgFToD36UtvtMJxc313TQLxTPCaohyFEf19N7fyAWiNtLD",
  "key10": "49V2yWQaYi7St9nr7SKzCakgXr61msgEKzp9SoM9VZ2J7gaACtK756GSr7BoWKpYtbnriAMZaMEFLp2mpR7uptFB",
  "key11": "5wNDrUdUFSCn6RnRpHidhCwXsLkRsRBhVzQKGAbinnm1V8uP5XKe3R7cKm7vz69HJ2jdvpBauJxd51Vx6HCzSSQ7",
  "key12": "3ejnJ2b1i9R9W1LXj6X2pLQgPGp3QRQFiQMidQUY371ck72MMKRYLgePk1K2Epj5FYaf8Tzn85W6LRLUpzwPmPsM",
  "key13": "2NjUVCx9UkqDpFjp5aTTJSCWptvmCoCg1tP61GSgRceRhB7fHfhXhZ5Yjzr5TtTxsN4PyDcE2XuNPwn1uAjJAts3",
  "key14": "4U4KN2ZEH2dw1YNYcAE8setix7mNgatHtS2MP3zFri2yWQx4tfNSuFfHLESg3cGZtMsAhHCtQJ4isKaStokdq2YW",
  "key15": "2vQ7U8XLpgAeD1GChzDt5Tk6ec2c6MoBtou4qzRdbbD6Knt5bEhaFfcV9JmLgYcjTxovuUQLDiX7j1T7yTzmnSGQ",
  "key16": "5cCC9MLVHBZRcY5UVXRKmyr8Z6ELVDUDvtkU77rz6RbLdDCu3oWNAm5wa9j34zdQDW2CBc6yebuaXz6krCFLss3B",
  "key17": "3jEYCCAcQZQ3giBqqadiDXpsSze7YNUYw2N7qn4JK32jr4zD3BWqAmHWwvPmwnmcUAAeaoSW92ASav2Qxq9wLEE",
  "key18": "42gS7DLfo7HeGwXYxceEuf5phrtRzFGHwco5zotJFMUu34ZoU9hem8gGyjh7u4R1zA1q9rF2pb9fi4diNN91wfpV",
  "key19": "fuWu4mAMjqnE4827HMuN6F4AKF8AP5nfRVsn3fbQ13VRBArnhWZ1BJeciKD9snddePsoS5XQSHztReVRKRNWc5a",
  "key20": "2H17hMiSXzFxDJUeqSWKD91H7WywhrbeetxGPZ9Fkh9hFKx3SfTx794rdK1G1tMHxueehUUesBie4KQnBnXqUkNC",
  "key21": "45baqA3DFuZ8cLiZBW4pWrvhqakAAWmWX6tSp1e1cpD74RR7mAM81UxfcS8ECcvdZbqR5dk2GMuNnY4APv18ahrA",
  "key22": "63hzrpAK1pwGsruc9SWWSkGSjhNYi6x83x1xYS4k5L3FfrL68BzjvFW9rJMezmMprWF6WABYwaeHWDS8bC7DeEt",
  "key23": "3eZKhkjyHMKUyud93RnrT9faH49SBd87oCVWya6GjAqaShTHxnmBH4rv8zuxZdWAmPi1DybN2fByB2UVmWthPDAo",
  "key24": "d9tZNiKMxJ52tUjzSEbdwDPmT1py8vZzWYue6Ump5Boiwz7Chj4ukTdAtZb4tNPkfi9L52P6Uk15MKqzxVYBuR1",
  "key25": "3HQp2ijBRD79YxY9ErkUHNVRrHphzgH9iLre18fQpmJjb9EkhtES8t5KjSMT6WWnGmY3UxZzxwQmYpnnVmdgwa9S",
  "key26": "5U8YQc6Dz2PvKjRp1Lspe9ZDuXhAVf5pch2rhdV9dJgL2cRcT2zZs9Woo4Xzvx8riwJtP6wMZPibrKEURaEtLJay",
  "key27": "29zaL4ojbxPtitsotaevR1FY23hNheiqYbaLsGekfEwGM196pqQGPdpKP1GR2DmVtaorzotUtdGeMNeRD8rvGy77",
  "key28": "5ETAUYYoLGGsQLFzA6p8nBbcaYN9gn526YS4ZrWxT7duhxe6GGKPgh59uJ3MEiFNA31x54S9iMGnMhJGM1Avh4vs",
  "key29": "5xRGjWGZBLkW2qgKmG13QoafbAGQHJsURjGmtcP77iei4w9ZGGQEofmHsMSKHfR4k9DGNi6T5m3j3WDn6V1ic4m5",
  "key30": "5NzTUKo6szvf69VDK9g1cpdYDZ2fN1W45hucgTVukaTfPuYPwWdoo7FNLQJRRog8zVV6N6vkvvpUf3kRFpG8b2uu",
  "key31": "2TW7V9ZhWxBVLzWHXemhVaM8LgavYq7D1ahGBiCQqaoDM7mwe1rT4Gmqu8qNYDojkFx8zdvfnSZFKzDSeqwfNowf",
  "key32": "4jmnhvSXctuu3DgnkQqMdPp6F9Xk6eZmt8unPwot8rmYiZgdJJ1YoibaHGiLoLqPoEiHLuWy6XKBq6SGKb4N9ii7",
  "key33": "5T9oKyTL9EKQoAkto1TS5at6jwPFWeME1vsWamtPpBmJncuCmjYDTQvdhg8QxC4DqTFA6vTnCWAgLvw8QnmmScrF",
  "key34": "4kBsXxj81fgpxCRsPoTAAJJwfihCuGgXyJxgBSWEi6J3kynYsgYf4kMVbYZHQap39dyG6GjeryJCyZmfCutJ7YFD",
  "key35": "4tQ5HX9w6VYMDBgJMbXdyZJaqXrpT7ccBof26hHKLaQAtoxLCL2QhNggedCG36EEeGZRcE61GbcsFDQA4iXTaWE3",
  "key36": "2mi9hffqPEJ6sxsUGKBHSyXPJrHkgTz8GikH26LJv8jUoTsQBERaAWdHLiNU2g1WMArNJ8ov7BatiUDS9H7Ma1np",
  "key37": "3PfZEAAfKefj58pMUoqC9Nm4p8u3GWvooey1FCK3pa45SZMk7BdCqjNGfBK2V9ZKBCqQMU1fcgBv57Bk1zpuFfHp",
  "key38": "4vH4T6NePGiwqsjMMz9a746WJxcUMj3EnsXDeTAaK8Haw9GP5u1vDMQHtkmucDsHx8BVJoCzLJ518SqdgYTpbSd5",
  "key39": "4PuSu5K3JWmtC8dRz4jfhHk6N4X7HZVj3H9mweXjZUVmvGXYpjGygD6NvS1avbVYE3HBmshKPdMywjaUWCWAsnuh",
  "key40": "5EnothyrDKGJXkREaV722P44GtgzoZFWN5MWdKo2NLRWx6RGxAUQdqcnPKsx5sghgrVktBsm4oWCZbj9Gg3J3PCH",
  "key41": "5C5qgT3hzAQSwQpbjVTvpPB4FDJgZYu5nskUsHZG9P3Dm7qt3giPyd28pCQ2dRX69A8mwJGkS9jk8BM1UnMChagr",
  "key42": "49VDgyDdvCdm8ScveyAF19egEMJQ7gYzJcMEQS4vnGp7gh5BfNV7xyzLuUZu9cNTirL1ewp12Cnb324B34vH54R8",
  "key43": "ZuR7CipdZUEtzkjbhJuKVdChxQGfu8BovqS4jQuSrQt22QzDqw7K8uGZHxWtwhmUZY5y13WzfxD3B1a37yqsDPS",
  "key44": "2TCfzD86AwE2R8VAvc7Yg1eL7bR9NcYtXJViQhFQFTjALvjyGH7vTYXHi8sdUuBmL5yxQyXjgxuotsHrRSiJt6NG",
  "key45": "3cXsNEpD2LGJTyDDbY4AShTyBN8M9uPGYiv5NBY4canChzJamqAiXZNdfdGyQgef7c1dEMLaXEGEWyA6PxZ4pCvx"
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
