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
    "2a7rSSKvxChCuerT6bd3BpU9dMjefaFm6UZA2omU3JSZAXE3x7b3WiyuHb3c7nD86CfytAitHicrhr4478m1oWSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "632R6uTg5djtEcK5E6S3pBWAa3REjxBgVgH3ecYgZoBrQs4V4iuB6aF3KPHy2kxWq7zcyZCG29G5vkor3XbUHQ3h",
  "key1": "5kBaRPfbaSZmZKBCVYYj1AcZP3xhm3yw5hgFJ7JKvAYPKPbA54kkpMHqb2raTzQBLKVrQo1eV1yFDU2zAu1bppch",
  "key2": "2Z7P7QCDpn9izDW6PhAoCWQCSiTswwkncyM4UAorM4ivWod9bRGcJPUyNnPsKhpMKzrMXUbK4SLBRqTM8urThNHF",
  "key3": "ZFitXLCqed9GPiAGi9gjYcFRLik8duzknVKy22UkSMT1HQ1nAQQuhZEGWhngBXjg7fjkp1Qz5vgsn3uvW63dn1a",
  "key4": "5QkbDs1PCXyXh6eqBKYQ1FDQ71AtkYA2RdbE7p7A5LJxHGqZYQQ7wiBrh1nYPqWtgmhVsmuiSuRPm6Aem9jbe1xS",
  "key5": "2LurHbZidqhzL4bmQQrthfSu8D6CSUhHx291RKfkiWJVHnwAeVm5JUhpyVw8PAHStUDM56TF4VhTAAGP2eZhAhKS",
  "key6": "51atwdwddzoY8qRGcTPFYcdsKg1ihLqys16L5hD5V9FRmZDPnXpYyLkBn4bQryW16cWiYWr1Jcn4hvi3ndJMNYmr",
  "key7": "2z11sYvMM9n9NJ2V2cRbPeQ1Sr82sYpoEzQ2qSPAYCXU7yLvCMrS1EuiNiSSQPKukQsCNqVWPeTwVkWZbuHP7nhr",
  "key8": "4GuMYMze1f3TsinaQ5VqwTnwZgjofkUd5WM1uCFFAWhai3K1gRbeYuKkZxQoWY7C5arjnAsTSnvdqEuCstryEfex",
  "key9": "4ohmRGYnHYvYFjVEvSvS5he5sAapAxsbTFn9zxssNob34PqASbBz5kcoVWqRrifQSoBQ44T8gyqjXGC4rL9m5d7a",
  "key10": "3HJfLiQmDiKg64MERCYKEBqNCMkbLWJfgbZ7o6nsMDBFi1iKa9T2BZHtWsQKzFL6qzZi5h5rC6BNQYf1Y4K7pXLo",
  "key11": "4hmkyKKc2y7b1xVE55XyinaDLLhVeXy1GNWmHq7mtrrfusAAv1oxCzLweNdzCoqHTQa6Gt9ESaLBjJC4bUhRYuGv",
  "key12": "211BR2ZpcAf5CjgRFRQwZ6SsySqss2HT6nchv7SGxDbYKqW9mdHwKefLLJQuqFJQiHSbwSz7vd15JbBZjDNBeP8R",
  "key13": "3PaJ82PVbpvZF6ePZJ2crxkuyT6x8y7ecDjuGQ3Z52N5sgSL25nJ7xAuV96B5TAcrdDavkg4wwPhTdYqcERiBbTJ",
  "key14": "5HbDTTXXhiMmSeRq5pinXg28NUuh1spirdkE15J78qm4v7YuCKWZgzKMbxZpoXE12vEQ5dDbj5uPzDeSFPXrmwch",
  "key15": "Y8DsBmEhHCCp27T1hXT271u3LGihTYHkzK4K8nmX7sAK9XcWxoopcJU26dKsffWFvsGMfdmnAedfcL1v34TjUfp",
  "key16": "3iYPnQN8mPCYQcr7c64WZX9kVCEuxucDjAAQBENtuXZnuknUsbETWmMUuLBm1wHFxahFm7DMsym7jJ2CkWEgMqCz",
  "key17": "3XbMnkePMwn9vJcxNFQr3oP4umKFctYfb3AUedYw2EEqUAykBBK3LUSHA7emMN5CjLuyRvMoyxiGvH9yWmfcxk13",
  "key18": "3xxoXYwKiLNB8smFaYfA3cSsFMxhjPYagssZLCqfArYqb5ccUHXDXhrr8NQWBvBFRspRBqEPS1GPahokoBG5ZPuy",
  "key19": "5qoiwUbRrYEZ7ma6zr7T8J6Uz1Tw7Ut5buHPxgMEM11UQKYSRe9yRAzKqQiXLW6b5VRDtqmdbhBFsXcnC5CGQ2FW",
  "key20": "jadqBH2Ky6ozoLnXtbF88YjoDeuNWPrMQAXXwbVbsjcAbKuCs8mtdw5dFRVP2iAnYiAQ4zzWfMEPo96BZJLJ58q",
  "key21": "5Vss6fRdZU2HM432aBjyzimb2zE4h7nW3oSjwenqT8kokv3wM1cL7FPKkKJYing1MEQkEz53JVftJvk6uGaQs6fx",
  "key22": "2MyHBirr9Fq19hJLw922es9PWkdGkRr1A8ymuW998PEvpMwRF4qZdAUamf8pG2pjdyVtriU8a2kDCPPMdRatfJvq",
  "key23": "4ZNXYDodzuaxx5ru2BKUL1U8HCh3sMokNa6BXwdFnjHWRcFvTLRfjvYKnLhrrwyY8a5Bq8udiQHDrC14Fu1JvRRW",
  "key24": "4Y157yAbvqEuhQTedPAQ4SrudH5TGuwmtHsF8AVH831TiPd9CfmCTcWmgX3tSASWhVpRsfmteah7BS1uNsmhMrk3",
  "key25": "3P3ubyMxc8jAXgTthPcaEGYMohDtoQEArbA5ugU24UzKhkiady1CZX5vkfdWXvF94tpv1nt5RPkEkdkFstDieCRe",
  "key26": "4X4wTKt6vQjWvzAWFu8zviD79C1VaUzPcKfi6FtEUU86Ncq8hpsNn2do6oSRzsGnkL6f2VmS3KLf7ctNVsti5HvY",
  "key27": "4c8gbr8hKvh9qzQkwc2CKWU3wp8y3iJEAkZyHgF1oXR4eQ6iNknCHjSSQgzdnq9DqM6wFSzhYHaTF7pTd9xY2Erx",
  "key28": "3FHpUzadds4hX8ULUo6LbrBAJfxaort1yhXwMkW3Ntqisye9MNMjoA31uyr8o7DTu55zqJjmWeZ6dxCRwHZpcy7D",
  "key29": "4xpJCcMQ4PaD9chHCxsK6oQSQ2vVWWi5irrZtei83dE2csyuSdBvPbQGo7mUU4dvyUYLTSMf78APQ1RqoQMrASd8",
  "key30": "3Y5iJAXCzkfAwtaCLCkotyaXoeDL9FSiwBfsofLQCF1d4NYkiUGuPifVmqHGbdZiiCWFqNx9Pg8wxLPeqgjD2idm",
  "key31": "4p2GYBDubgHYj5seAeKbfJ4P6SnKUsSpar1WyQLcDCx5Hf3foKYaeCfE51nkhTS9BKeAUMJLsdwsFDqZS35Va4Zx",
  "key32": "67ajLCXA1AnedAHikCnSF6nRVmcXe1nxdZpHYvGeE57guZrMWJHhPhyZ2iVR3fMnCCzLz2UswxY63hhUAJSDs41h",
  "key33": "2MgHjc8JHDR6SbLxYf4rHS1DqmWTof2rhgniaZZNb1Z9LHVABiwGwYfmYNvN3KC9pwFco8sH7cUM4oiLTfoqx7tt",
  "key34": "4SJD9KERizyuvwbQUncEPLAKpnfuj5dYYz5Dx5hFTNsoUoiUS5HcpvBmYJ9mt24RwkQxHjoKVohnPCfUGgQrXUqz",
  "key35": "BmYNCS39mi458NYRCqmpzFaWrcrj8x3njwx5JpYPKK7LDmtXqioW7oGPoAfXLC8YawFdcQa6WxG4iHG9jE1H6gh",
  "key36": "JvTYQCHExxvSNWvW2bmuiba9qZFErcYfdntLSapbiP3QXBBaLmKmUd6229Hk7dztYn75L4G8CEPpUCQEyHU9LHC",
  "key37": "4274zf3af3ZdwzdsngBwL5CCciN3SffbT8ubxZb7aP3mLsb4BYggrGAhsFxpUonYffp7qHcGS1FEguu4EHp9TsM",
  "key38": "3oKHAEkXuAWTrH5Wfs8PTnbFpXEAjET6LHGNvRZYvacKtSF47Y6bGyWaKNZuRDWhon1jjAfonu8LNrAoyyMpdkRh",
  "key39": "Aj1k4dqiKjgbm8sXw3RKEZ2A9sYPKStpWE8YcpgDGPVs47zqBq8ZRRr1tyXQwHFgbFVktdbAvuXhd3LGzWZS8rK",
  "key40": "LJ67qBZvjHf1u1L56xr8hEvNeiSZdjg8hraAZB7R6tCc1UCMKQFJpWifjo9g9BYSuaZEH9vSM1zVQdvSMKFCjRc",
  "key41": "4vogSSQoPM6nuoFQnPHvBZfmhnia6Sj1zvpt4vTd6jFMPedboq7Ho9VVBPh26mYUManmBRbtxFMYt41aEXoaM1yq",
  "key42": "375yixMsjgrMj5DUHUo3Trfkmn6CMFpjZZHDspGXK7oovre8CqrUcM8hED9rwFbpNSWLbq6nwC2zicEH19SRNMs2",
  "key43": "UemrKu2EPaWRqCjfS7J4rNauGcd5knPNnJuZZ2WcuFSS1vb1YPsaAzjhyHVGc6f46DvRQ28GWqN3oNSNKiNESEw",
  "key44": "4RTxX3txGQe3KYYQZEj8krYMv8m14CVSMmGpyZgfcwHHxSm6ZYKwcaNyQ5Zca4uHhqYnzrXK75qSW3Qt7UNSCQgR",
  "key45": "2Ku9my3mPv7AFhWRkF7hbPh94PwKi9pNTzKP9VA68Hza1AhbWZRsehpHFRCyPCVRqgu3z2iXTAjx92ii1aZ9bYqX",
  "key46": "5EYR4XbW8v2X24PqUH4gzngCGz3tLVrQJEWrP6ttAiJjW2bjD5yZSFVsjdVjnGiynXU7im3FmjjMAwv8imGx88rM",
  "key47": "4n7hM8hw81xfvto5JucmAtLdProJKkzQwegfF2E49v53cFuHss2pQT3NqsaKarhxRdCPPPgnK48MW5SKgYHpDNfM"
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
