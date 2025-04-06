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
    "2tiEtaSu6uf1SK88NoySkgv3cthZkDF7bewY34ZsCq7gCTGQJ9FR3wu9oF5TaGESpjo81sgNe8piuT491r9uArdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2ZP5YXkmp8GGEUjJYrY9mMuGhL3Qaj2HsPUWYfLWhispr7xksdR7ZwSRArPuR5HqfbvFcJt4ScCFoGXbAV8xGE",
  "key1": "4o67n24NdSCKoACt4obG1JDQiXVrt8xZd1jr7Wr1tCZ4FMfqxPS7UVWkm8CSyvNFhZPJsV5RPengFgmfNrhTetJp",
  "key2": "5FEs7vRP8GPLbiXZmMBXJMRo1UFHbLc24YVvtFUdm3N5hJ2c9BLG5gGuNq4C7ZrTf6XavNoKLo567ywReAMGRGH2",
  "key3": "4jHDgXq9U2drcbnNN3eMSGpGsPaoFtN6jvC2XvChLLuywTTxKg3fHGZXwBrEC4KNejQ9rD7Xo2tbUVBkgkrgezKY",
  "key4": "e99gnnnD7UjYEAT8f6ScwrA7RjdNHTNMDPLuMvj2ZmQCKwigrqrVyr2p2o3YhQ8zFTG4YHcEtQC4m5JQCbcYwM6",
  "key5": "2QSnmVGgHGUDF28gFK5KMmzF23ZfgEhwXrQDtYoY2CdqQkGLwFg1Se5ZF7iNk65UBEohjpS8nznXn6k4bfgaCA1m",
  "key6": "2wtwAJzjM4epcjW6a8w2PDLayjz6XKLXHdoAAeZzDBD1mGqkdRZtgxowxGKNeBHBYUz7CwudKE3wxc3LHaNv64LG",
  "key7": "DXssGes9vMVNAGHB8tJ6SWdLBEE31EMYHP6Krkk8eKbtcMqUJJRNHmCeqLm9K7pq4Mt5fovTaJppNQL7TUJghzW",
  "key8": "AsrVAZYh5aHkaFcFAziFC7fqJKzeUXEmK3xC2W1ueGzSiL7WrWyd2g26QtZAc64Ug1RpphRxfSV8zzUnFh6N5TV",
  "key9": "2dxuZj4Fn8sewQvudHHJHVB6rXuPMwvSARaAGWaAfrdCKfEjojdFhxsDjQKYJtqvsJp6qCfQUsknCQ27NwtdNmia",
  "key10": "3LvpfzP4zL9pYJb6PMH29VZ1tmbJYNWxwvVEwjy8BkWigdnkPY3AWDZApNc43hQQF1YMSv3h1L9yEKGrUViQzCjt",
  "key11": "5Q1pwgDUpV8es76S8FwQ9km18UFaUZkjge3efX4Y3Qd32sjUoj4JDjwAPbmJNrtVtiYJGfFRAZX1fovwuB9czLhZ",
  "key12": "4gssrqKAyCpmWf3RM2Yv1kkQdRLHhL5KtPdSVDDyjbMScrX6LJJi5QhvMYTbjZ75p4omqMCopc3WdnZCBmL8iEDe",
  "key13": "4VJoRKpyKdZSSbWdyJTqVJh6CMuFhFg2q8qPquo62VP6xCdCGLMSyXwny5JopPwy7SXFepv1HAM8mQyd8aCYNY2N",
  "key14": "39C9SvTFgRs9YCjz32xZDjKNK9fpbRJCgJmiNHqDZg44WHNTXT6x3pUm3uipU3qCUxNcnpTvkJYE267C9pFXqpvm",
  "key15": "4L5iH4MzVZiWEzU6mFNK5MDRKEfQdB6S5FyehomC5hzKzYcsW6AGdtzjS6ZvUagXeR1WpEGc2fFKPsZLXy64bGrT",
  "key16": "3qpciEq5H9uixTbGmhVxEjwBHMgzudnMF37DenN7pnp8tVHe4YM922sWSFpidNQFG5Hbxe8kC8KbSsFr4GpyyqeU",
  "key17": "3JBErmecZhijNNVVLUASYh7oiP3w8sxBW7LbCW8df5S9DKswZsev4LFY9mgGuy5yLqCifkbJCxu1XuDgnUUahdiE",
  "key18": "2gsCxe1Hhb4cqLztCcZCCqTj1Fstsgx7YT4rhA5oFvnwPSqsh95TxJoa1mo8La1i8mZGvvdamE6bFdi319DtEMEe",
  "key19": "CM9Hk9knyGqRSuZHrt4kn6sySjw95ZoTuYoT28vhDT9HJauP18dhvRoHcPNdPndv15uWA1KvqtcGEw78Kfyp5BM",
  "key20": "CtPBR6NBgrrXg7dASxBuJqRurau9Di4YAjC9xstEfBfMUUnvXKZjG4qQxrD9iCPCCy6iP5R7nZXEosvgMToW19p",
  "key21": "DXzMvze3ZKSKBxyD2JD2ScBoREDRhun6L9KMe8abdL1fg89HtkpJarRYKyfdR2uPBfmw6699xeRbc86sjz85ZnZ",
  "key22": "zK5vsUaMNWh681iUvJKvB1EC3b4HSja67sktQjU9PUmuKMoZao3ErBhkufCbuE2cM5QZ5wrLu576r1qdDiqqYLh",
  "key23": "5Mq9ibEA31cLeP55JhrHQephvCSZWTJjGDmwRYwoQQMfWCd833RgnA79DuSCqMrDUyEeMBe6t1wEM1e7T2WWPGBj",
  "key24": "3Yoh4cpg5Rh3LLd5RfL2rYhL3vuRivo2j5Xw3rg9od3QiTm6SUat3Lzh2jmNBkdupyyaihL6uMkZkRZDWMMEYM9q",
  "key25": "bSZoPAGsLMuGJ9aayKbMG2WcsyyMjei5GAtSrKtqp87W1Vxr93JGiBJbuZLEsgtDu3y8DQJ4NwFoKQEX9yzAuZC",
  "key26": "4kSetXrHama2iS2j7fQ4qpuXtpdBiEvEunv1CXkUPgnEgL3osr3Zoco7V2Tu7s2H6Busn7prssyQY4vYvbGjE8aV",
  "key27": "4H829mwPWnnMPEXkxXidectkCpdX4fS7Jr2MMEVqpJGjY7NmG5Lp6WToJSznsWDoPFt831bihabfACEcNvXuXRA3",
  "key28": "2garAp4yzvRBTvRvUZkCi77gtCpJ3trDhmDvH5tkFzE15EoBqv5aeiexFZXWGZmkGq8EJ38xmNKZT9c3JQJKbv3",
  "key29": "5PXJjDwiWFRmSDqcukdBuSR5HzqB5AfSD6Gz9YNJRZYwYwCqixYh8gDjWKX2Fg5EYWPajsj4Ud7jub63x87aY6Us",
  "key30": "4227k8cfJTVvBMR8knQ7ivC2WUHZC1SRVXrC9DgDytqX7BKm6uZmdmwUXeKd1ZHw4EttLiZEeCah2WXEF7gQNjkt",
  "key31": "37GVZZfwaAHBe71FmwbUy2ukNJQh74DFcbfa56QdnJiNe2EFiJ3XoghisWeXXMjJTLvA6ooq1DC4fP4ct9ynoBuX",
  "key32": "2q3R68aXEEM2pgb6iwc1Q9RudmSaHkrRAi3gU4YnQ9dDqEQu8EKUh513tbUg5Z5ryhtQmJNfpk6uh6cvcdNejm4v",
  "key33": "5QDJB2uQQgcDBVPbQWmWFuRbb4SocuK72fqXbdGtM7qv8bcXgXDdweu77aLnqW43ho4LbkvaFCjnKMaxCoPSpA69",
  "key34": "3fxkDUPxwgj29qx8ZV1F6mmunq723xBCUssy1YySebbJr2BqepjaUGguJm5e4e3boXSgj6exsQXEZF5g5rwHf3e",
  "key35": "3ygQS1VZLG1fy52e25uNCWxnoGodaxUgckznw2Un2g8pBMjyaJ6zhXcCU72f82NcizBXkeVuKLum21hSSFaCQZsu",
  "key36": "5W15RKEux7o2zg19Annd8DCpCYyxg9F3DT5ozHqRFroxWfqzq3Ehx8UopkPWy6G6DHxQEV9bXABeuZUPjs5wT8Vo",
  "key37": "64mTZxxMgKPXtTf5No9YpzASGzcdmdu35YXwbCou9DxqbVAqHR2V1NJeMq259PumEpczr71AL4McdcTk9XyfpG2b"
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
