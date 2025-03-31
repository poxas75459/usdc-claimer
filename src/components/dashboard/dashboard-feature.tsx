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
    "43vCiiD5oPkzqQd3ZQM3S3zfZxbya7bAq5saxi5grEztJ9vWVAvSqfXoxqtjtZWQ9XRrppR8oN2RZx1nu3AYcx1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AX99fhXktJa5gXmm7kcnzxJZPtETHKVrKUaF5TYoPUCx8SeiNXkbBSzUvBYUbUYhz6L3oz9VgGszQ4FDVJiGzB8",
  "key1": "4cY9gg8kF4ar86iJcuKDTmJZZHNLuQx3J2TAku9Jrm6drCAZL4B2Krv5btp5n7rqhdL2ibWLPWoRmLcRgsZke8vx",
  "key2": "186KySCTZ94mcfbVfftMb8P4yjs8GpdkwQEgmiN1rqZQF1uH9Eo2gpneE7PUqT1ED53ePCMDoSfaD9NNNuQdTEw",
  "key3": "45EBGi14dj5JFmpp1bqqqJcE9DJhVRbNfqMMftz4as33Tz7e21iXa1wdUKRqeoXDzW7SWriY2HEQgFBkEHvogWRT",
  "key4": "43eQ6vqHw893yjze3ceQfcomcFijd53aL2HKrLRK9rVnAadhSuawRMXGp9Fd6cSTuV6fNRbmXwKi6Xd5NHVPQGRp",
  "key5": "NbuYQUzvScUgc66kWsQV97fMV6r4wMGo4kQUgLPKTLSpjkVUFvfJ2pakZb4wJk6Z5HQxr9wct6asFABd5cBtpZp",
  "key6": "44P86mHJuyeHucnMg8LGQcgyzPNSbEKWD5J3dHehuAdLryL2n6xnKpgoEBnzAFSpYbDYEa5V7haZfG3i94T3wXZ4",
  "key7": "Eci7B2ByoTYvn1Lnchg7XRcLAMoy3HszaLRagwvaaGyqUg3Z4vH3Jqg1VhRFGwZPvrxKmC1AmnSrb4X2gYZtHVQ",
  "key8": "4MTbxZZ5L8onLsubpuQrn1fpfHDrtqswu2qwdLAa2GsqN9PmYzTqM18xpbLHQ1v2YTvAQfyUUysmMbEusqTQwt1q",
  "key9": "3wjZuPSMdyM67j4w8TJC7PW5wuQp8cEFgLuydjtHUPrZtTFCuAcSdCgsZdh9ktRguvZGHgFAh24cE84YcA1v1WTp",
  "key10": "2tdHZhbigEiottk4P7STbxBQ13aZHoACenA6fQLbw3s2F6RMoQJ6toQopLgmc3cDehG58iJoZ1bkLwk3GnQBVEhX",
  "key11": "4zhpwdkJBryXVt1H93KatwPaXXMCxZsdMST3rwEnA1xmRaC8RdSmQKQ7X9vcs3ptpbTTb5oqTgizJAFibjat5ucd",
  "key12": "3dhiN6mFTFRdT3ZDPYw3BAEpp8YxeRjhCaMGqCgNE7zVgqou3tMb6QGuLpdP6ejuoh66ETNYb3V1HYmckU33aLVY",
  "key13": "Qzw2nCZG1y1agR8tbt9dsqFPnBQ691KxQYcWVj1Es2m3uEZzWkqruaQVR1VswtoX4meDNtZxJKnWHNwgDBQRZBC",
  "key14": "wYiJ5gMUJbp9Yt8Fht2CGmoYLb7Y75L7CxYbQJXZCQffyENS8Wm9N4mnkesXMwd95Df8vp7HD8o1h3DGzPjUoFs",
  "key15": "2cqfidUjpWR5iV7RexKjDaardizFeo3PHb8ZV5YcBXMo71Hc43waH2hiu5bnFxwZXizKRS5Ph1eYreVMWrtzNfbu",
  "key16": "2HDG7EcAddsqMTLnURcTdbRwUWApqthybAe1udVtX98b5pqscSF18tcYZN9N67giCjjxUr7HuohMDh9NChDvx4jq",
  "key17": "3WSd4477pRF1UPNVRZYTFq6Fdpm5P66vx1uzPb1wgymCYn1ouZb6K1nzLGNhYKQqsAKGoeLxBvzexkMjLKs5mvzH",
  "key18": "5dL5A961LLQKrVqo75jjiopbWy6uouYdDQVnAJ9NVvJ7TxYkvEfxB8GArvVB3JCECdkvC4kFEf9dNEuvk13qSToW",
  "key19": "3fs2bcD2LxJn4RY99c5EtMw1yhARXGyhvdnfT1qLh8WQz4UaGKiE5Hh917ry8W21bqTqzKCacWaUmSN8wzwTr9CF",
  "key20": "LRyXLPLFbwwRUZvJngt5YVpfVSScgfqY6MuHV5XjWV4fRJKJJEc5xurjkmFcfpZ7LUVwf1fGCeQ268w9p3U7FHF",
  "key21": "3SsFx8BVzdmbaVEqH3PNEW4qsYgFigKnr2ecu7gC7HtXpEh3SNVwmn9EhUQ9g3kqYtD8SZDzqNBXAD5TxPVjvcNi",
  "key22": "2L9myzQC4UgqthEtUxWQWdsJtxeYhprkrL4mvc1JkS8D5CeFRC6cV9C7tHq4SrN3uxnvPWn9ek7MGRT566LPVFX8",
  "key23": "2Q8PSfZkZDRqiKxDgLYMcKhmxBL8s3keXJq27iRVovXh5aJ3WTNbiXcQXDzKp4S2JAN31bLyp4ycsL547a6ZJER",
  "key24": "2USjeaUkHU49UkdRcB4wEVL6dVsH6JofXfAvMiHruU12barSJG7Pyzyu4wQdwvne2TBKmRtGMrh749cou2cuHwAp",
  "key25": "3xvjh47Rq7mc2ZRjqqCPmzvC32RYxnuPusQpXzmXvFrsjb98pJcAk67GL9aUN8n85tfQW4vyAgY2NgjEDSv9RWaN",
  "key26": "9BFczYeegQhEsRdYS8uDjVbvpQjWwkSDiTv2rUotX7WGi9jhB6T7woyiwdveCMkVSeqcdPkK1bQoWw3zeTvRvKM",
  "key27": "39c4uHC5z8nTWPnzPKU8QNPMWQui7gnthf5ZzVFsniQewzVXoogXmfEa8scQdz33a8TqKvkRBBKro9CWYQMSvmo7",
  "key28": "Gw8o2BiJEovhtxXBn6oH3vGD8cmQWwE92YANWaTdD1KdYv2nXa4RNahn5Tiwz3JN2ziYobtknWEJ3hbULrUxxot",
  "key29": "3pswzLEy7dUKZQS1aZ5neRWHGQj3ShXcAr2iy9E7J1WL4mvpCfTZatr1zUhR2LrxJXnu3eLTZ9mPRnqgd1qVMSuk",
  "key30": "2RHcg9FL31KoyVSUQ3nKBkhgejuwDdYqAWVK1wQqBg5z6vCngSzQvMLQX4B8ZdbC1KHqTFjwS99wTsARcA7XxCBD",
  "key31": "iqNYryujLeLCBK7gvpGC3hWQaVv57Q6wNZBSWaNYtDAQmRGHDcBHiNNBvpw9bsvzpid421nBBv3c2fW7bx8hVLV",
  "key32": "2794YTCknfXJg8bCDEpNG76B1nmQzUfA4h2dZ81EYCbeZmi8sii4qv3R1ZHygsFBn9XbaeZ22Ui7TDSRQaPLMJUe",
  "key33": "UvhRMzXrU3H4Dg1RPUkJ3hQ1yAxLn8FvE7JMgQFwSjVkCFiYTh4Uu1yfXHY6ptQVGFZtDmUEQsGsu9fRFG4PeJs",
  "key34": "xGMajpjK7oSWTkbpB8Er4Kn31gdTEHQKxA25YPhqXdHNHRAokbW3kwHGjJwuaHCy5MX5d7AK4TN2HVtQnkFPjpL",
  "key35": "2mT562BtdH63XTyyB4NxXryLKzidg6MvZjZVNv2t8Wfhh82enLbyghmytKkcPEi5eRVDcA9iEHnD1icA4eGpizvT",
  "key36": "4dsNoQzcWMCCFhwRtNYmEku9rjbo5LJ26qiQPvicaU1jcu4aBiMKzG2nSWaQrSCNZYVKVYgNUeMxgR91BFTTk897",
  "key37": "pd3meq77cdtJ9usxdPMDbZ6DsrdQGJmH2bFCiFx8Qpwp4eehv2mB75RqHJQhKh1k9FCHn8UwJmbvS4A19HMeHDK",
  "key38": "3J9VSboZAdhBHGNMRZz6VZeAWLTpZcsuDnZDmnS9e4XBSMEyoU3ikQ25AvTZwEHNUFcycLjGZnqCHrgnyBxDSpoU",
  "key39": "56fJHb9qQHwn5NU4JksUE8ci2kiav2rFdJpD7KPWL2WGt9Pw1ph6oyDmu6vWdJQ2iZMBaVnK7ZkogBX2PUA629As",
  "key40": "3i2MSeYQrWm75GPn5MAbkEr8ir9jiurEtgZBVu9DgtzSX1Fg9UJLKCcZ2hA1ehZZQtbF1JafK2snAK92ZqbBVnWa",
  "key41": "3DLNV1vijCYhiUyHPkHiT2FQEz12mjaGi8RLKiwxU7WSzzYUaDfcmoiYDYmcHyZhn91jjio1uSiESACgw7YYwDGX",
  "key42": "4bp2jsxCeoUfQrSoGCXE9ytbZMNWpi7LfusM2U6JkqjMd6Bk8HPciqLHshXQWsbAobQZCaZGVPehBEg1faQ2KKFH",
  "key43": "5jUvWzEnDWqANs5c97NzpccAwETvp6uoTWWM8JCpek4jFvanfcQy2eyw9zmpsvnA693ioNsJX8MNJKqKnJEWQcr4",
  "key44": "3M9HpS7NR5Ej7WNHvm3TsU9VRsPvmNTy79HDCHFyeBjRF3x3p9bgLWuUHpnA6Wcn3gjbPRX4qKe4WQgy27NE6H7x",
  "key45": "5qUxsUzCuwYSWkx9EhCCPVkw6cbzkQZpdLpuMefbTgJUo6M6iqTNpC7tUFak3WGd82oFU3UcPajDkqoh9dRKrMsE",
  "key46": "adLu54e7yYG18pfaA7jGaYAHswSSojQoXJhVizYg1LedwEbH5rjRfhsRqpFynr9YDomf5gv4LtFfrK5hQtdFjMW",
  "key47": "aS9oPEFqfqCMiFoK8WiMqA1URDA7pax1DMkBEVwgJDSGwX9MzBf9teeXbRfnkLP1uKWaa98TLBLPmuTzsUMR83e",
  "key48": "5AuCkRH5ewYP6zUJP3XnLZ8VPQkCKMVzEKZmVPZsXvcwyMuEBdjRKzXbkUAeP93TiBRGoLtuDiJkN3baK3p7Eak1"
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
