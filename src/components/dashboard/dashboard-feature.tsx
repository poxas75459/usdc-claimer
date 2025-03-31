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
    "7MY5bRByEAcdfyzbbd7V7GGd5CVyG7X7LUbjzYPPGNy4zH5PoatK95w9u1CUa8ukJFcB8Cxk2zGhDm1rqVa21Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fhnuYkiihTYaXFn3TFgHNVeZCbQnbuGveqDwrMJruBbpLXsxNCSsM6JyzcHoJaEHEbZVikHFhgPmNJSHXeCc7Q",
  "key1": "5fpBqDTD4RJpe2PQsWW79e9RpoMA8YiNVDceYAzFcs5YxRv8Zikap5GtGEYfwUmm7AkCWr817yK7mR2QK5CHH7Wm",
  "key2": "2MEjvizwGRMEwkhEJeQBks896AC2CapYGoq3XEPosaSz5oWPHzFJNDsj9ksvWvZyLneRsjdTvL8FFnY6Lp2f5DKs",
  "key3": "4M2X6gErhmAN5aioLkjVu4pHfaHieo2rq2TiaAPK59qhNe6UsuHm68MiUqF97Mry9cFmDbDxEniNM5UeGYqKxcSc",
  "key4": "3JWuZJ27h6mJC6JCj8KVgwqLtVRz6BQU295KiNqSSvqBxuzumt1RV8FSokH2bargoTCDEZAwJkEb5T11ygFoXtGt",
  "key5": "3h9jUUjTfaWG2y2kZG2QNchcf9Eet2KY55BXZ58fG7PWALWSr4wuCaaiEDPU9oE6WiNgcPoqDuf3uuDM1mPhJmtT",
  "key6": "4iGkJJHHYa9X1qADbPsdxjJ79jxb1aK4xE4ctckvR554sJLVrNc2ZexZbQjiaYC9khcRekWR8u5Rxr1DTYwv3ekw",
  "key7": "yLmzV1Gtj7zaZf22J2vAeuTZ5frYkEmCxY6sfTrPktxGpBvcuxNd7UtZixua8Lb6JtKBxEQvwqotuc2JgkAV1FM",
  "key8": "5LeKiVJyJ22on6XXVD7JAgEmy4WGkVvBZS68jYCZCzHqSwGkZCn1NjL5tqyTPh237zcFvjqFYhUR7amq1ZKpomxf",
  "key9": "2FCNb8pvb6swBwz3feRoUUHFicEXKwsjnLQwtHZ57Wh3kTLQh5Wm8SCT54YAWZKqKB8Bf2RxasXod4XmhdnX9FNK",
  "key10": "34mpAqg91LuByATN31J6wpSKwcrQwe6XpAdFRV6s8bqRdum3Ah64JisPabMHMWJsqPMRA6LBgVcsad4MbzziEckn",
  "key11": "2iG6QyHN7J2WFm9ggus2UF8EJF7eoJi7ny6pt4TeWx4pNx8e4Sb1ngLZGgbsSDnDSJ8UVgGVX3YnVa1igdCf3Q5h",
  "key12": "5thd3p8muiTYDiD54SvAZuSdQehRLkHAaipEoUgpZsvFaAphGuAB8GjcziKJKnjYsr1nE3p4jWk3p9k5VEW6pbsh",
  "key13": "jNnYWYKWjvJ56ezhfz7WTuHyXmr2JF7DP9U3LHKxz3zVsw4dEAQ7CZamCRRRRHLtDzwXAjHA8Po254ohRLonYcy",
  "key14": "dZCGorTCvGYFf4AZiBagLG91TcuZU8Ah7sFtPekWxo7sYiAsNf1gbwpYFLLp6kEXGjskVhLjtQkfNksv4q56hXw",
  "key15": "2A3q8L3wozKPUETVMj1UZP56i2aQK73QP1HWzLvtnNn8eiTbbqHxvRENGECBYsu9fJS4jLJxJKCvUPC2cNktpZGh",
  "key16": "4HcMJLs19JqLPiAR2vAKC7rv5N7tMwRja1kvpvjag74foWPc5RQpkaaftf3vmMeb8CHADUJcTupoEEJkMnD31yBo",
  "key17": "F2PV6o17yirSMnQvnW9SqTk8JEZwpT3KUYAdEc6Na2tsQ8VcTouMkiVVNLk5gmFxAwWyJ8JuxgrQNQPEaKAkYLH",
  "key18": "4GPbwcdarogJzaWe3ZPHHbwWBtUxypASoaKm8FFG2zXQyqkyxDwj5gJvTfMimbLymxYryCxrvAo2fLMhwH447xCa",
  "key19": "54ynoVD8M8ouYQ2Q9jz39PAbhdsc98nCfoNKpt91FRFFKHrtqAnxGP2MwBssEroMhT7qzecwu3m3odbi1i23QtDj",
  "key20": "3ibWSkowBsLzpZqcJurpV2fn9YEnLzFvWiaLnySxE2B4j6Vmof5WfiU6uHdERF3dG4SdnBPNXBmF8RowJerYgYnD",
  "key21": "5gmGppJr2UL8z7mY7Nid99U5svg5LZRnXTPDt4t15gFg1ZPKjqjapHWCpnJofG5pUwq6mtVC4nHgUUDmkA7zySya",
  "key22": "5qhzB9114j79KaNk7fXUE13SNqJqxsZX11x4QYCZahkTYfMe7Be6gE8RRRHYrXEkys3qJeuWLwkxhCcvspYnTpqg",
  "key23": "3qFFVWheTbwnTBSy3KR5Rb7uhw4j91Bm3G71AXYKBpp8EDu7AUXF4zKqXkY4ArjnxzF311GtYPSw4wxUcQZYubBH",
  "key24": "3FenM3j42SWMXp6jsSGmQLq6mFZStMVPN1q1XXtspB1zjPpTMvsLoF7GZ6SbKdna6cFhnjCcDssYj7xFs1WvCQik",
  "key25": "K8VMLZBGX3Lv4rLCNFtYdRc5YnDg5HSYSjp9wC2uf718NwRDTLxjbd2HHxsVNtEGn7Wx6z1WbSF3CwXB32sxYcD",
  "key26": "5biR5s1H5Mq3213jGGqew37h84WhcXtiQziFzPFyfkTUfwRUsDcQSmRjXJbqkoRYvv3MwaTCsaJQLHQCT3MWJ5dq",
  "key27": "5Xp8axPAPRdtAyD5AXjK9LB4CKXmWfTTAAYBinzdZHy3TBHsx4K3LKfdAn7VtmENSHjiK8gZsxwFgcmk9W9M5jYk"
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
