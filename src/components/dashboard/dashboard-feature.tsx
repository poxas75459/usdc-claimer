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
    "y41R1upWmbzZs19QQAa8c3rddtwst34StW7YVnabkirgCdHvDSQeh7s9j9jQDAK2drZpuJP2vVQbkV6PN84yn4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54L38zeQ8ZnVPr51WDVxRoEY7HbkqCdUM7zUvBivAd46Ad8FWr8WBWkRkoshvJpNi3aT96zqGnxfrZ7vku8Cyx66",
  "key1": "53dr6xk1VfMdN6MqSqKpvyhfmCMTdhWUBF28n6U3eR5zToPWqtt6c2BYN69Z37P8ithiTHynKRgTJ8Ua5x4VLB5r",
  "key2": "3XX9wPh8g2oopDRDaEP3nkHQhnmeJYsqX9o3XLE6du2gie645T6o41BnqCj5HQ7zQRDsv4TjEUfAFaHQbkS4nguc",
  "key3": "3tCEwUdztEAHp6s2qT29Zv5YS2MfhSpeU2ut1FFSa9aL5pqLNZquksfUck1zLJd7QGw7aQQYaDkFXRA141iAMH3Z",
  "key4": "4UUbUD8gXL84CykeQKsYoATyxgMPWzLhoYwrouzAjBVymG5GCosvRnbT9irNHvjCw1zXKmfN7bQtMX5WBpKDfztu",
  "key5": "4MosHP6RgHNpDghir1aXj6t6WM4bZgeJ3SRz6VrVTbVp8fR5mjNCNcrT3EWjkq7GbhBuFuwBJmgzaknaC1uXjW12",
  "key6": "3Mp5ArW4w2VwqyNWUoEYnBTbY6PutLNXngsfkhBhZYhgaHEnS2LTr4e3PS7gtxMJj6knVC9MxH6ExR1mq613f2Ng",
  "key7": "4f5aV2wqac6t1jQ2sP7BRdegYfQWFFGa29fDVd5yM3iwMCKCH4PMhyy6xKYfPP78qjmArdtHL8xtLdqVTh1znjS2",
  "key8": "3sysbQU4Vkzju5eWMSJe749gxC7hKKBgJZR5mPXx5a5yNfYAwXugASBtk5UZdM7oiXRcTmaLcgMwjaAATysEohuQ",
  "key9": "2K86GViu8yrsJmmYJS4UaVGWYhsEXfpxSVu6F9EyNro3k9GvcxkaZqpBu1U6WgsEHbHfBfH7vQT8ytr6HgjqAcf1",
  "key10": "n8wpJTXdUqL4cUfJux8gc1MLyk4H48NuyacfQos8zmNJqrJ1hCMX4LKQeqhFXV2YJqTLeMfuXHKYkWRC3hndfH9",
  "key11": "2FkUC1GwWwXLJW8v5gAU6KKULTth5cc22qp51jbYPpVZANpeMYHYbeCTKNAh6YAW19UBfd4bnxPhviTkDc1KXpfe",
  "key12": "2SJmSCpvu3pJGJsHFa8M8tXVopqLqcyC7zSDAsSiGh4TnrGDBNQvSs2dpqQRBVCYr1e4BTtiBekQP2mZs2mBT2jA",
  "key13": "2YFSW8BByNjWirFDjpJaGvut4fiezixdNwqkbQJ4VEk9WUSqgKgKAWR4p1f76wBwde1pkJcYKte8ZkisDZCoimZV",
  "key14": "5mN8qX78nvFPvgL6Zf1CYYWvM9nA8w6v6uTcBdcEwKBLJeHVwf5wdZvuPqsh39eg7Do98PAcBPiVQuhGaZCRBpUZ",
  "key15": "5P8ko4Earmt8V7BPeH4f76KCTYVszJRoMtSgqT6WRViWnCbaWJiuPhcJmFxsBedLxcYaJvaLvvu3R677hZZBnfsi",
  "key16": "29t5eBzFWsgDeBfC5tsar7L9L6e7Cc853pvWpQaEw7h3NWUvrpJsVpaXpuTWjmpxVcZXeidrCpeJjM2HSaVcBkTa",
  "key17": "64FVbMLjdBGwZNuCEs3dUBxNCMkaxC3ktFdLaaVFKCPFbT3HLVcMr3M28PnnM59ekpFVouYTxdaH4CncoPnmSzuA",
  "key18": "2wnXdCCx1Mecwda1xevNyv3dUKxEaan5JDwAx6C5Ab8nbn9FqVjs9V377RMjENRipbJZ7XEvBdCyeQfqHEpcxKS7",
  "key19": "54oJgsJAKq7sftueuajMjkcLRr5zxPH3xMwtzAW5ijLan8M7XZEG6NC4VW4pMQqMynrT3QLYea6YZQZvkLMmJ4Uy",
  "key20": "2MsVPriT8yyvEbRrDQQtFz1RSKTxHSnxkEwszDHA9ycmZkqJXRwFz4wvRJ2CGghMB8KFVt7Hff4WcmG8Q3HzMtXs",
  "key21": "pveSW7V1b5TUDSeS19UGcQfVpE9iaiucjw2MMBarbiSsyREXqJmqNxo4rpL6nN5BSe7YrsqX196mVRSQpcVVV9V",
  "key22": "3xrFrFPPyV9TTUwc3vKD4gcATLrABUtZi8JFfJVx928XCa9xm6TzNcXKPhMKdKWjJMpf5uCkcSnqTHiGoKo25RPw",
  "key23": "2ECZHtdCQrPAiHNWCLGUc6rUByNgKrvFykih89PpdfxQAT4akUa68LqesmHpTGAJ9eora8GQk1ELvTAZSfpCYzAe",
  "key24": "EzSpx5YkKdUsKHTEhXMD1VYBrDwqdSZRaS9qtZU1LHwEWUdvk22G1egQJJWsH1G29yyLAcHN91xoeaszvqSuR3o",
  "key25": "2GHuvsKnbGMJNoBiy7YTxVbb82wjgbxfZWzWyCoU81e8ojHZhnYYS4sKApN2M9gJUxh5CigbLoWmBzGSodyXN9xf",
  "key26": "25rZgJhKiaU4SAYutDhZvUdF9qm3H66YjCdsnTrt4Fk6RVyoxPFRL8QiZ8wFwLWj9FbrBGvqJ1cPD8ydduyAcNWS",
  "key27": "2JkdtzuPpcZFcinUKLkpV9UJvcnRoEijuVp5z7Be4SHuAvqi3LT1zyPusBUH3FDEnFgcThoWYWxPVkwRxz54MtFC",
  "key28": "2E8UMTfjzLRRVng3HtZ5bwz12Jh9zQb6v8SJf3bhDFL7eyv8rS4kiaK2FHHPxNGRj4TFmtuPCrWWBhZhBB6BosHD",
  "key29": "3vurm3ovuBPt5w8vAMBA7uFEUPbrdjbCaVGfwL9TZeTpzuQTothfiuXBBqU54bxVpd1rmSQaEMjQfwS1Sdb6Kein",
  "key30": "2cxpeu5CZrBUoyht3bYWs2m9k2yuWv2ZcbgDYFvM4rrdJCJuU6XdFGjqEMSG5MnZuqzSDS82vbGHxbkPXbk6BcmR",
  "key31": "3dzGUqoBvht64jWRbeqU4NGXww44kr3n66YT3PXhzdu76aF1EUiuFBvUCt8GdLsaFFwXFxkb2sV42X8QnSy3cnXp",
  "key32": "4uJqXBaXTofg3YH8XY6x5QM96k2Jg6VG52dHwUCPU2s1hMDTF8sMqLWVohwA9UAjC2KSpw7HcoPDNJodkkJgRFfU",
  "key33": "ugWfGFwUQAVTtZCunmuBGjmnVaSp6Q4PpooWK9psnZAXUMrhb22B4vnWUHCa315poK2wEFsd8aJzt2e84VBwWvf",
  "key34": "5oFgs1yCgKm4VU7HDSN3fWyeWmKyg4n8TEeeQfYsZsS1meTqRsaG3YgfNkeHcx2Q5CPX9YmQtXQb6fyy5k5icruC",
  "key35": "2sdtwsYCyZvUXjYgvgS8EmnpHX4sw3B7Udf157v3dqegrqTUYi7Kyazfs2cS81h2Ws7qtAaeyqEQcGVb1JGuD4ov",
  "key36": "3xGev7rPf1xwrSZEnqS2ExqDMPuDTYbxg8Lc2CayCyECdAKF6thpckFyYFMHZjreLiKVPmRXRfqPVquu9kFxwEFq",
  "key37": "4J9SpZeZH5MvJG4QSZRTBdakQfXBXJpPsXre6imZQPCWR8jrHGFrw8Rc62W3Rty85xmULwEzUHo5DXzxzJ6x5gqA"
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
