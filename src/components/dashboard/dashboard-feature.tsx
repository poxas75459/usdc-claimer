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
    "2G8LyvFbQtR2vPNX95vjdh5myGvbdxmLXfjPAy7kembepu7sKW3tFvBSTeabbTtkd895EVZprGQszLbJE1hiUzNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V2QiG4ksrmeBC2eDYR3gCbsv1c3ieaUjspn5E7kRoDj2fHXgJRo47M6sLDJhKHaLB86v3EEWNtLds2NQKV1Yfnf",
  "key1": "5X1i6hZkhqoosYscwAf4s8ky5DaMHqhX8DpraUuHS6Z4QnrDKn89Gy7x9GcSwnifHSUYQkn6YEkg3nxcd567YvnZ",
  "key2": "2RdKR9PBLpr4shvbQ7nVAkyMBGNHG1EfnE24j4uPX9j3kD5C3ZkYkkRXeqKQK2gGHtd1nD4Wjgmt8zR4ajTr6Ned",
  "key3": "JiHHEC3V4ETdYUNAMnngk5nDag2LeNrnBR9vhZBQp2ugtXB51czkA3KHGjwjNjAZ3vYSgxg2WHAVV6DsxAufQpL",
  "key4": "4kvg4NoknQJFvaLJKFsvGuDojP8v5A2FBX4PgAZyfxhsY7iQvwHPbvWJ7icMgriPupxBc1vjcTmruY2EhGgCEvDT",
  "key5": "3dyUH79f7TWFiouMDHLcF3E36DSRXEfTyJgWmAVVEqPy6keYq9TZWcbHb7aKyatqEmh4AHUvWXuABSXe5SxAGfa3",
  "key6": "5Ry7dw5kXufrGAMH3hb1bQPPEyuFretCSWJuwr2YTTFh4pCPKJhmEXEiGTBxmJZrSCdxETcWRNT84gsi2vsjDVKt",
  "key7": "3Yc1uFym8YoAwLzEWUxkBLdmP9aGcixDNboKRJ8r7KYVXbsnVkpHURJNCJdyQYdvJrQCppKt9zFUU5hU5zYzaFM9",
  "key8": "2QJha1CkF3AUuy6M95XkARMXnxKMfmPynfgjXccnjcPE3Z8GhgSzHTuaDYFMNxBHfdXr5PbveVvrtjm9gAZuihYP",
  "key9": "4c7huCu4gMYP5VLxWzUjsNzqx4xAikMGZMVBWWzA3BMrFuLicDFaWdTdsHwPQDsnNoUoGaicQEs6pZw2MBZ8uhFo",
  "key10": "2aaT1LwGRETztQ3gU1GcwGVaq1LFCS7ttoVKDRDDFkD1KyqdwxmeY237HBwmpt2omaZ75WVopMhuHybSjR4i8fH2",
  "key11": "2ksZ88apAjJKQfvGqPC7Ga8EGPD2yTrBUN7mVtc6NLQYatb24XxjYW8WXxKD32fhiUmBn1KadpBAbYgEE459ihQx",
  "key12": "4wKz3L1QTiMR7cmuSyuWW6Ebh26JynUCsCka3Wy3ZJwpPqH3a1wPUfigqKviNEZ9HGe4c7JrDRgmjCy9chvnMH2Z",
  "key13": "2f2LcZiKeawUGvv9WYF6TvATY9FmJ2mTAK7qmD36EMTvdYqS6wLzoP6r5N6zBohANo6vE82jJuzYWKc3VjSEtxeg",
  "key14": "343zzmk3UY5UMhqDEwXqvbt1kPv9KqVb83dq5eE4fuh8FWi4m9UvoXdcz1w5Nwv1sPkkfHbkXnZeoJa7rRBidMZ",
  "key15": "3vvBYuBo5ytCrxTbgM8BkoBYeeFqRyUB6qfnmS3h4F3FhEzt3vyuni85ef85iH5mM4Ftr8Br11JwDbqxesfu9LHX",
  "key16": "4MHUkFkNABBYEjzhsyfTDyy5GXLDngAdcBkZ7qGo7WfUhh8tGhGtrUjvpj6SURBZdvr2AiDBaGBXT9qxyVBgNRBv",
  "key17": "ZupW3A7uD2UxfSpekLAUonN1gXSpEBQVsborVDanrSYaUxhs1ocqEJbr3kk9TxRL81em9bHCvC42Ahocv35qxTV",
  "key18": "4d8H1C9mqEWGThmtsWHgfhULxY2LfshZoUrHooNFSkevULeeB93e1oTtcYWkmwBzkPfo3xLUzmpBcsPLy4vGGS3Y",
  "key19": "2rXjuteEpt8hijahbCc8v6xe749U1NLUnyMyBzvVDtd7JG3xEvtZZJVeNHHTkVFC5zN1Bmi5iEcSWGm2spF1ABBR",
  "key20": "2gY2XNqvCq4wRYqu5T3Bbr86kcQYSU1Usx56Hmt6bmCTZutMoAP7jGg9W6LBGPimVfWx1gJhXzRdXKMF8pTdKkJm",
  "key21": "bkPivqT1xC4GwBoyrr3wbUzu6qDouNT6U5eu4SXzUtWGt4HB23xqumZSvzzhmc9HSu3RCMok7jCVP3P7uzmLPRT",
  "key22": "2EKf2WzbAXoRPBjob2TixZczzAu8Mses4pm8HHFxJYcb1bEABWc97uCJUkSbF9DQZsJ6r9P27EnRrJgYHxVhRVv5",
  "key23": "2E1HUeRmGyH5HFnv8uNxWRGHsmcM83fMkLJFoA2y6f6hruGpozXjBFC2ngSAMpC9wn4C7AqXjaYs5zcvJQrgHDjV",
  "key24": "5hgiGu4FVQMcNJR2vxXbnrumkKkcrMsVAJRYBYueVY9J1VhP25ASn9KJs9SGSqiX254yvFf2SwBKmTPR6WbXtD6N",
  "key25": "3vkEpjGFWwjD4kwzcJoFBHb6o49TrViSfqpVgTippT4Xq4nRtWisyeC2yYa8aa1hJ3YbPtrzbwNptGugj7dTiB8k",
  "key26": "4Bhfct6L84Pc9NENm2ZiEMAWBVZi6k1hJtKq6EHh7vNZf6uH3efZnXHcxPGM3LzKRLvxMMnVT6i6tqNNizboTRBm",
  "key27": "2UokF1gPwY4PuGTLJtGNE3RiU8A5DQjqpeNFXvuJpEeKtNsid3yRieY2QDjrFVqox2Peao6HckEpWSMrQpA3xmMx",
  "key28": "3KGfZ96MvT3nAyXuLPnxMRLGudurTg9iUYeCMWMLEFBsM7ffsV5jZeVj1QVjsX5trS8VWhs5CfPXBu7fVY2Xn4vx",
  "key29": "dBKzuEcAM8iakM7xcW8WqW4hxckntQzY3nm7CnhSxhcR4PdayivHZqkjHFvC1uFC7pYgEWHwdKCC51JSgJQjgiZ",
  "key30": "48wbW4bhpAinqPSWhzrcTqoewwfiy9qA8wogpdF8QySr16eLqajtDWp8KxhKnZmDoNjwwWEW5zm2J295jEGmhUXb",
  "key31": "2tRPv9frb3zkpEb5FHSXpmxS6L1DVDoCGSqgNgNYDuvdww7mrT2ddJ6xAL5jk55ZWNx3pkFDqYv4xd7Yvhcwy5Lw",
  "key32": "5Ea29Mf4MrZj5PLSgLxH2jeVMEgZmm8v2BujkYV3GLtrEuYFACVACAPgLxPGPGCENgpx9heLRtVfzWvR4akiadN7",
  "key33": "iYwqXR94XMQu4RF9cJYmzyGgEYz6ofhF3XrXQTUEcANgUSdxaQS96irydvKh16TRm4KbxbgMV5iFcQsAwnPwbWv",
  "key34": "BnEUB8vQoyQV5qc1ni9PYAwGqVZuLSFQuZCYRmpQGcMDcKWFUNj36KBNKCm1DDWZu5R5AoMZXJW434tnMrGcDii",
  "key35": "5dBrkTGYCNUV6HQa5ZxusAmUopn5zEG5TZb9racy6cC23e9fgyPBTo1vhEqMqQcKrEREUwJq6zJezjgrtQvZ7Yud",
  "key36": "5hsw8YaX7iG3Y3eKmQWDJqccR8oMWxAtD7pD3u165csVoo5fGkGP97GPgVRGuZfNHhksFp6tMfwfDGT9RyidE7ou",
  "key37": "2HgjQfMNwDUUnf5capZdypqbzoDsz7xFKrkxXb238XXJj9zhAXbeZ14kEBNT4sKrYT7s6yZEbFk2Agut6ZXNnUTi",
  "key38": "5c44BhrRqkXWnMQ6znrZqu9GEVMsESDf6jbMpKM6wGkpDV1tn11s5q6WxQceVGcCk3URxSQzc5jh1nzp4eRAVkuf",
  "key39": "usSrs4onvmzMDCqwauiTAM9ea8MLgJczw7SCcoRXAVwPWsdAhcyNr9LoJxV3geptxi7KUEQcJzLPWPgEAADwngR",
  "key40": "5AhipDuzRe63aQ3J4HmPb2bgczwgTjxpEwecog2uwnBAkiMX5FZKF2NtNa2vvXu7eYFiyed5tkP2yDnFxmBndjf1",
  "key41": "5jCjfUmDon93kX7mp1j1NuTsNundggxwSwX7x9dLYwJT3SonZ8UZCorJ6uj1LHbLFjJBidJrJBXMdf7qRyJm8ffJ"
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
