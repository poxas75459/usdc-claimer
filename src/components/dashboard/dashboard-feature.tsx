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
    "2QaRzAH26zHPnzC3DVW6ysbEA7oz3qUpv4VUYs5ukmpKzxszUZcJW359hhG79rbEYZMWh1jagyDgevPUpvo1AbJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJpyWjKcZCMEu19y4AeC9zHKPiGbUYbLf3dynjvdgHuW4hbNVZ2bHiyt1Ndh1e5sNoD5mzf5cDpj1p741zQ1AY8",
  "key1": "2e1jRVrFCPoHdnFVt6k4T4u4pZjNCnqgX9m1zZuNrk4Jdf7MJQKfcLb5Bj64D5UZuf7Ay6Kb5gNvJu1q1Ks155hX",
  "key2": "4f9ffAt9Uy2hC5rXbAKQdmVHxo6iuFtmEY4abesqprWwh8kWMebRsVvaoLLmZXFHduzCndTU54wv244XZnsdjgKP",
  "key3": "5uMoMxdXT4i8B4rcwY1YXepiP4c8e3UbznkSQZqUEYY8p4wka5REBFAsQknAo8PK7cY1tDk3bkjz3XAczcAH9A5m",
  "key4": "5rWBEfvbuSEVFfxMxonwLBU1pPg49ac1fZAueCwzJAzTdkhjJrzYnfcCDci1jbW8czUrXVvw1TmQRKT7zJqNwUdH",
  "key5": "Krx8DN4iggjKc3YH98t1V6VZu4XgLZzSv1reHq3LoC92oZPv7peWmkPXsU3ZmL7WSHGYyP31TDnBjpfpnvexk36",
  "key6": "2exS6YvyNhBr47VTyzrajjAmp4hTg8YCmjRvSKAzrpUU5RJEsR8S2Vvkf69r7Lk4yVzyyvY7UG9mtaFRtJ3Rd2p3",
  "key7": "39EZTJk5EXCpXzUC2skBdUoJ78ocW67RS6jFQ1DJUTKGo18uGFN8hHaZygZ63yt8eZ4Fsoxt69ENJb4i972Yf4Qq",
  "key8": "5Y7wjFVeYMCF9nUCrYpUHmWc59YQAitRJYUGCB2iPXsbUdt2e694L5aKgVzYMnoV1oscBg2c7NF6uuDcJaHXyXh5",
  "key9": "476S8VF233pufdrdVhyLdEdeZJrYRhDTRWTYZPq769PEw1ouysghrvcLf962kXJ1BuNJS44y1WjrvWkEUiCjReuh",
  "key10": "RBLeoAQE22iVh7krU1EHrw2E21gUYvY8d1DWtdT61jQCcxaiyuVGmbEwJrhU7V8U4jBhQWTtqYyb1koJmYk2V4r",
  "key11": "4u751Q1Tj7FWbWpYKdKKHtujPUd8igThgS5N2hvDW7fsLGX3JJDae32VBkNNi11V42n9UupA61EgEf3cGEF6i9xG",
  "key12": "2ZZKxUJPsaPn1FBwVKCfGB2kXiRDqyRtVCszioGUpg29Ci7MAHHwHfRncVNaPAmA312DMdCFBKwKvPTxZQvAs4YP",
  "key13": "41yKcTCupNA2VZW8JUsuwA4tRnf5wfZww1EES3ja1Y1JoQowoYPQEXVFkBLm4cSaWsDpogkCAQQCYdaMuw21W1Jk",
  "key14": "ZFnnhn2UJkMrXCXRsa3S7R2rqiDyT4YPQXtgiezLucjHmuzFkxME3zo9KZ5rAoTgRyHnCFA8pERK33p7kgpCa5i",
  "key15": "5BAfednSuNkvypyacufBdEm3qYVEQgkRT27CxhkHqZEoKgYmnwao1oiTgqEcFT9yqRYkXLSeZtbPjGDbw4vkhtMX",
  "key16": "hvZVHMJLfrmFHXRwLeBGEgTH3nXsHPQFXYuKuAYsdfjY4ucjrBQGB6rtqtJD4f7UdooAspgrKZSGCGG3jEBF2vY",
  "key17": "5jedahqLSk55eLXrBzNgC1mRgrthDSEeM22CCaTLXjFap5VZujz12r3uXcVNAkeRe7EPwPd5PP7pKXVDHe1K7pPR",
  "key18": "5yfjJ4CZEhbAdgSu5wqYLnNkzF1gLDqju3EJ8LqLwv4njtEmkXxbXMr9xoRL2V61YVS752rKXdYf4g5Vx9Hpo1y1",
  "key19": "3GFS6e55AUSonz3NoMbThq58AhWDS3gLd9ixfMcQCAb6WxeWnFu2HwpRmigNWwSteMkBKyALRYKsBr5AhnHuKHci",
  "key20": "4JbgA6zN9g26mZmJ4VJzvGwQPG33woQArW6LM36hR9jckWAyp7JLdyFeDExhP47aZPoMaBX7cF33aeMTb2Nf76br",
  "key21": "2ojzB82BG87997CNtavAiLEpsoVNVHwLcNqrrM77HndDc3CFk3njBaaQfeiigZmpJnkConbLm4bzwaa4sb4vD5JA",
  "key22": "3Cqdw57Yc99Fu6c3LqbUyy7Zo4CZPuhXfTtC2QZrv8DpbKJNSbABx6n4veg7MaByg2XH1JPFEBqmRVH2LBqmkaF3",
  "key23": "53ZFAydoYahHLouQEyARWXLQwT6YEzBKpGJRp43nyQWB6BBV4cDpBcowRjKmke1jwEJKsU1agXACDEX6gCFH1MvQ",
  "key24": "2oM9QeJ5HnugXrwmV232jkhovo3bHCuGd5TLCxPbGVHzbZP2k9o6G2dSnGm7fu9pCUFd8THKTuXNx8cT9LzDQXbE",
  "key25": "54F9YL17nk7MBo5nFreUuxhdEpFUpZGe7bWDE9WVMpSiV3WQMauTLuQ6jfZRZB3ncLcNnSAwr19bPDF64njJXeKh",
  "key26": "uVjA6uR9yrpkfiMSfW1zSNRoBr8acuCP4hoQZ2SBhm1rC8rN198hcGKzLbsJhhSJcUxKdF2wsczXWyZTfKLJpjn",
  "key27": "57zP2Ubo4UqNUdHogdYvzSSzfRsigzZjHofU825JFGQBWGV7sedqv9cd2vPrXukNnypBGPVePLLvbLqYwaztHMWF",
  "key28": "njbBPzQ9okX4JygRhwE9vaPPmx4awFavTBvwYSgM8sE2RJEY3bwyzL1HSPigJ3jZKE4X3YjwCyk8nmUSJJcuAu4",
  "key29": "2RaFrSjpdwAN5jqTgF59MZMRzydKXdHQP9TUKfVb2kUMWBUgfTsxPWp5Fgd6giYhKmGzkzzBKhc8jGnaiLwX3ZUr",
  "key30": "2UotYATFwvWvm8dd9Tpcf9KHZ8ZMYKJz5ManvZo6QrVHWWFMvS9NsRKVSnVVBcySuCRC6VRi9yNyixh1vD9udvu5",
  "key31": "2jEhVFpGPbghUePh1ZnMFpYwmpKv2hKDKdk3Z8MJwr6vT3Ff6Qvf6w3u1epmGtaFWFgoAqNpecaA54kg9PPkGacZ",
  "key32": "3PuWJqCXxoqTxgRLjB1yerQ8nQAMsLYc1nKyobvDH7QvmyZQDiNeZbpEbQsDTbscee7C9ibRrMLokKVT6S3egZm",
  "key33": "5pXSpeYzNAibUttCG9KouYMa78uxB1roMoHaHYjYFA5XhVGxTQHFjwNUoZZUc4kon7rbfkttDZLTfAxCLAtK7y6b",
  "key34": "2wev7wzwswGA6FweqTvZEuzj2BkSgAVWFBUiR8FXzKuaaK8g2oWM6YqarAJQwU8JBoxUXfL917dEiD8KXnrz4ZPK",
  "key35": "3p1djfs6hrRab9qJNqkUXwX4xmrKKMvGDJnRBEcqjJsqqbNhdQSExgicekffZLJX8BCXcLKrUacRfgJ8BddntSuC",
  "key36": "3KY7KJTDGekJZvxrLs33vemj9UocVHQPKChBW7ntQYadDNJ5vPzzkfr7nBVRUCurzc7EYg9f8fzjH8S4zJk9Zzuz",
  "key37": "5NZGAWiVjL4Aq6YnXHihA9g6R5FP1rgw2GWx8P3TASqCZuJiH2cRa6BohZbSg5u2HKQBcK4MDpyH9WVHiAeCCMyX",
  "key38": "ThpUtGpUPjd9EVKLqLJRHDNwCZJSyHzhxpPZqCjf8buQbKLoC9qgRj33d545EiR6EQA52gHy65aAB4eQJpCZaQT",
  "key39": "3trqgUWeVJFprc9zoHqH76tahfDKjzeSkB83fDCoWEs1ApcDATNro1mDDV4SQUejppFkh1ETsiDg7ziqMTYW3yfn",
  "key40": "4JnjUgpAjz6cGoXzv7BZvv8apzFTaeMoUTxnviGo2pTqKbzHAsVYyVCDzuQN7uRvzT64wDM4PRgXhkF4JjyuoXyZ",
  "key41": "2YK8dByuchP3HSb2LE6srgdSsFNoYViXWycdePMDQFcd7BQBaesgYBmUY4QjHT4h43gkwPnYGsxwG9Cbjgb7s2vb",
  "key42": "2Mk9pK4S2Nydcd1yjavfVD398f8k7SwndeEv9M69S5VeiLHPNCHBGNeiuX3WQnWuzQCL1UtfacUKUK353KBFQ599",
  "key43": "2WTBrtihbi369DeM8ii61ypdjRU1LWvDuqVeZ4zxQP3mdPCko7UQFVp5yWNEXo6DaoXSQEwebRtrqcWbU7s8CPhw",
  "key44": "3KDj7JrgZtkPWsunUG9HKUa8UwUC7qmKcXjnsvyyXQKsiBiwT7BPjPcf4Dh55D1zX1n2Aa9e6Adw2Ztf8PEHeZLf",
  "key45": "2KgJuK6bhMCPadq1kBAyRocvXhdsoGgzngSAu5LVANTYhxiVwFpkfe2qu7pJXGZiWeMwoTP1keVHRKHYv41x72xu",
  "key46": "2mzEjce2ZbHPdVqbhSiGXfzmCyViByUZFkJH2DmPVoek8NQW6N5RktTr2PY666YxYW7KF3YAgBLNpvmEvp6JGsbW"
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
