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
    "5T2ToME8pkc1pYVynvf3ef33dqDtxm18gccvJoxTNomezfizugCAqmBNfdx6oTyKqZVs7icf1ATh9rVEY6EtWutP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdQzDtD2pBkvcBVm7VjUx1bY7hRUH4i7nFe8Kb4WBfT7cLPkq2cZLnDUsbtMaPJt583B3iqpEVXncq5LKTu4uiF",
  "key1": "4UrsyFYEnXFS8RqL4GYVvjyCUhmJGtSQV29599KagGPesBABsRcbivoSebY5QoCZUxtUveNr6o7o2Z5NRRVca4BZ",
  "key2": "3dkPbeTofHdVHjSjv236utDXPGyaCigxBY7CYrnTJt9WFiK8qFSvYAXCQ2dMNcarpv3DS58Us4wf36NR9uKjsQoM",
  "key3": "2MQ2giJRwHjiDzbucsRtPpR1HZi5coVH1NdHhY3rht2Cg4P4UGsxiuD3qT8Pf21Nf4Xj4JAJhAKedVmxvfVKYuUE",
  "key4": "4HmZLbEoSsovHvSkAZXSN2frnPmtqZRvsw7MhxkKuPbyDeDAveGVabKRq17D7SLVp1Mcgmh45HRGVhn9TZ5Tgrox",
  "key5": "3NBc1dHpiXoU4NKw5P7BoUwMACtMGW1vmyWTZ2QpzTyWnMLYEyZ3DZGfxbbHJtXQYNuT5qvuBY4weJhK1RGMyEwP",
  "key6": "58vBAv7Se2TaQjgzwd9E219z8hxSmFCNZsE6ih9D39GbYbQj8L4Zn5roQP2JmynmnnDy3VYwBmSQeyCq1mroeEuu",
  "key7": "26R1wwarUqwypWJDHWKJr1dK3rBa6mRG4G7HoD1NzN1RkqQaXcg5bgT6t7jGjNcEzL7uCWb2FzNZQGyGSqWFFXib",
  "key8": "5QonaMHbtiktNybPVkw2rphCkaYy9N8ZLFMxwgkDiMoTXShEmUvUf3KmDzEi3fx8Sg9tiWLMR8bQDcxzcNcjnSAs",
  "key9": "5e6ZCCB1QiEU1T4CHXVccMDsr95smLFeNSy3AfUKnBWuRfHKMUezwjZ7n1RsKg8MgA5cqrukdaiHLAkVaEJQXKGR",
  "key10": "4uHJc24VYhP38vBvq4S1fLhdoggdEPuY2FeNUfVRrQUPQtfweWKFLG5VvWQ2hUbUVnYpCj58gkb75kJMG2Z17PBB",
  "key11": "2TfWXGSaUYV1xJ99mjijGBJxhTVArwtNFdrtyWtiGMZezsE3RZwFiA4p1XHmWnbka9YqG4Wn4cJRwjaMaRwdjfN",
  "key12": "PfKKNPyktfGgiXfEYdT6PzwsmnBWfMiWqh7MgiLbjyXCvjG39YJ9WCzEHYyVSxpjWSpTVRGx6gH6tZqzWM42TtX",
  "key13": "2XbDci7f5WS8BKK2YaGJXkSf7yaQeEcJcQAgkhFcNk19jVGsu4SxjdD1cWVx8qzSNGSvxJSayYwKLPA2JToSQshZ",
  "key14": "2jcmkibcrcABPFbqPy8UooGAYPF8yY2dpDXmuNjKCFHoiFokGAC4WAKwsSSQJvMunhvwgsccsyyaYxqCah4Ttazx",
  "key15": "2mzB1PzTAhaQ6TGLwxkj1yVKkdXryooUg4SJMXNAe5aYxGhKz7ZuLFaavz7PqroZBrVBFTpQrEU1ZdTASy7QrrFt",
  "key16": "52TgjziH17mHpbGHk12WDPqZCzV1tDG99PZyB7c2hmMfPQjSVG4a1jd4CvcVp2o3mtaYNUccymYK8SfoWf2NvVeT",
  "key17": "3M39rHT95nz2RbA1YpRmqoQ8ChJr6ms4pZgckHY2MEKqJQMF4zXTZCMwvUVfPL4w5pjnQkqaBAead5UmPfG6sgLv",
  "key18": "2KyQrSE6KfyBqMoNkjwtemLoPBeYVATvn2kMWHsYsodGnwZtbUtDGAe7T5xZEtyZiTwqD3GiDhL1VLinRjRNAv5F",
  "key19": "67r7ikVCcCWiu3kdsd2WW69jj8uUQueyMqrxj5F83p3GhQuT9YmDS8w1KBdiSiRJuFcvcr54RX4T1RbnuHM8SYZi",
  "key20": "Zm7tHycnxLDN9rhapiNeUrRDxMwoZRTocaQQHpowHkdGzVwDs7MhzmqhRNx5Ujky8dMdekWJviXJnkMd8Q3tCFm",
  "key21": "5tYfUpcm3Ba7xVUXDMBPBMqrgfkAbNkCBwj66wKYY4QrPkKJD8xEYJM7yMfg3dqNRp9pSLFDkqrqUxsmxi5HLTrJ",
  "key22": "4kxJoJDA5SDzpAVTrW2vjkJ3jELEGpuH3AwAQRyAEGjzgHcJ5h7GsxaDKHFJL6zauCfi9e4KoDVBQQjQwUJAdXUV",
  "key23": "2rmeqjhkT6ZMWYemJ9xdr9h7LQaipRDwY6EvxXkzrUtnj4sEoeiD9vFLbecm27h6iNznq8V9gWGgjCUmEcLJo3hf",
  "key24": "3n8gSwZpjLM3b7orsa8HZ3aMaxKEDjMCXQSr1XJ7H7tkYEo9wUXjaTBXNV24xiov56hi1Muy1eKGNMzZxayq4HDb",
  "key25": "gWdepdPKx5NnmYPdfjPdK4kFUzyuC4oruaXqYkimWbmsGREueEgLgjUrozb7aGHFYMY3riec4rsHHarbRKZhNy7",
  "key26": "jyPo6rdNf7PYenvVFo2rrXuyyjUeniad58CxCYt845keDDktxQMbwcaioUHAtJHiv2zBFwPBjo9tqDyPqnMjeJ7",
  "key27": "3LQhTEKqcti9A6ghegYdj3DM8hULSbVnHi8r6ocWfMyQD9zCTumCuPFZgRzGDtfW3MQvHXqvJ6kasUXjLv3YNk2e",
  "key28": "28wPfLTWcYGRG3uyxgfLMPQj4jc2Wue7JuFM6tjAUQTD7gvhy6F5Xsm5TxhNswBW71BKQSA6dRjVxdRdv1egZEyk",
  "key29": "2SmVogZXhUBZYg37uqwBtGBBe9B7m6bQSGBtTBVkFafzkALEmwxpUDVxVTh6JAx7cUbf4dKyS4QVXKGspG9mxW9C",
  "key30": "28gwzaKtVXo7xHRrayNS6W2mGW9iUPmFbW4hGEJEvaJiXw2wSsxYKSaHSWK8EcN39u4bmWFBCrYyCakjpkLe8WAG",
  "key31": "5gTDaVh6NDSwPBnBR9YhbzDFH8KoQbqyrT3Qyi7WyDYwjyUbWk92oU1wHeHi724euugZsA8Wxj3jTnV6kS74BTA5",
  "key32": "YuJbny1MrxMXpwGKax3yEyRMQFxQikHFg9HRvZtLi1NKFTm1oP5r4wcSnhi8mvVuTJPNapRVnF8pbzGSw62CbMG",
  "key33": "46ERkat4iGEtoCgbqKXYwYRNEg22vsYydLwahLrdvXSBzU1kgQg6R1RPXvSw7NdxzMTmi6vWW7BNcQN4XVVBSqrV",
  "key34": "3UWfYHPNhvRZKg1h7jWA9tei6mLPK21yR5BjVDNzpX8w7UPtyPDw5QogPZSF22V5NWCRUiogviE2YAYatUxgM5vX",
  "key35": "43JyYmm6CVzUSWrcYDKg4NGjud1PwYPj3Aumi2G6tg8Gz98mybK4LE8f1SAzqsmie9sfQWZZYSUBYbQd4LZQEwbV",
  "key36": "22BBj5FshzzGvtLw5uw9in6winG2FJ9pJVtbxeCWcMNDG5hGxDHsuozsdsBBRQNz6pseTnL9ogi9XtTTt4pJpjSV",
  "key37": "37VNhhDdnZYn8LMmTa3uHUbHzESjzpT1TAQEVn1TFNdG9TDFkAwLK47xmSW7niKXoBP8tEE1Dvt8SkDmkhqJoi2b",
  "key38": "4sCh1nqndrSQx8mvoGhiZRP8TQhXCTvpNQXNt5dfZv4q3cwQurQJwhEAbNCNzjuTu77LtpvhHNtDGgHfCPeVX9xc",
  "key39": "4Hp8wK2f5SbXuodvPw1GGPnNBMns2nrd8LPG21c7EEuY7YJiV6Rv8p7GzFBXaqeXjEcgR8KaHtbw68yxMaRfLHZ8",
  "key40": "DDysYijYhqPUq4MBQ6w9MjngwVMHevUhNvQURVWJXcLiicXDbWLXXS5pRra6NEEnYA81AAdTsiYLe5kDzpzJQx6",
  "key41": "3AFe1pmcTpcNSunWqB986iuCnjoq8nJGYVCo7mJLW9BWBuFrfrhjNQUBvR9zKvMAWH3A5RRbtF91sBXmdz93rTHR",
  "key42": "2zaTCxU8RLe7q75rx2ox3g44z17WD55HZoyeRsxv4aSqzLgWeT1d7ufHQ6BQ217PQnnWUdhs6oJu1xBw6gNuRFqh",
  "key43": "2voRqJVTx3Vxd8bU3vh4ryTnLeVox1t5zCZ9xVgoDM6qG9TmEwHe7tbkUmoGwJvuiCxXWm7tAq18EAKbiqSsK9cG",
  "key44": "GKFtxbekXuNYPgTmnHZKThJTBm7d1GqC7yMxhs3t7oH2M5AX4kc7wXWh7h9wyohSABDVYg7Pr4UsQ7Z4dBhi3dy"
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
