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
    "4nN13K5grhEYKyq3mW1yDReGmRQYinvt3fEgR6x9VApycAK1JCf2amRckVZUo82LVDgxF2fPEHAAiFrFQ3S2PFf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGHgnBf2AxeqxVGctMMbsMhrYBKMyFu8xQGHTohAVvB7WGQdKUgeSQHUukg7gCa2t235QU23vFz3xqoZYrCDo28",
  "key1": "45VDD1rGX4B2CAqiUiwic5NVqeo3sgoxwB7Kpi2JtopLREnm1R77qPDDmNBPq9i3iLbJzYC9LYEtsaa6bkFg2LGP",
  "key2": "ymtxEA3kJ8NRCLuzNvqL68LVyTtzjz8jQphoPCMifctvffJp9aaFdP3xCcJqjoUi7LxGnshkNJuwV8itTtg9TiJ",
  "key3": "e2hL7StcYzLxAJ1fyphsJCw2PG3rhyXuBgV75qixcAcgSq8Ejjn4QUJRTF5xKpeZwyhSMnYRzh8sgMgD5rvnFSm",
  "key4": "5A69jtfCAXsTYqiwFfQXzKaAYJpZScjjeHkEgDGMctf2cbtijBHZwvqj93w5MpGeDepCktoN4nm4j4FibBGCBDCU",
  "key5": "3wk5fRPh1Kd3rudztre4eWnuEFwgckjg3PcR6ecc3K4QRVrmVmPh6Fax8TByFcqXPi8UVPp4RMC4Tnjwq2ftSK9k",
  "key6": "2zRwJDpkHUkuBzU6V4c1tq4rFdcEA75oedKzCoXQKGHaVC76pzLttJiermyhCedx2eeW1KC67tTt7WfrhB9ZUMKH",
  "key7": "3er7Tw5t9QXyVAN2JSn14H7xXG7HdVrPp4ubgo1ucA8XA8toGntQj71eyNSENR5XB2nHUN36SrqsqesxrSy4ZRMa",
  "key8": "42APiu5Nkw1NBT8Cd1rc6rRjxqAMLwbEtjpHxgECHP5PfaPdrjD3P3oLhoGy1RNvD7sm7zQWwtov2rwUZ5wWiQXT",
  "key9": "3VhGsumT5QjNoDbeZpTap1LU9ciPvkSJhnaHCwMnnS61xtzsVaQoucZQMHodB7LCgtUP8MgrNuSrbAqhQJXHWoZb",
  "key10": "3Qkdhv5oK6k4Zqwip4X6cmNdW9ENMwRvirXdnept4m5huVgMZPx6YtXZwgGzqE4tjZdGtiqGgNWbh4ySk5mTWkao",
  "key11": "2ZXjS6bTMQKcVDYTE7AmYkKRqRTzGaao2AZu8qfnqnCuhr3LDUuRbxmHAMNBGQWV9XzdRsLiZpFWeLNEhy1DeBZg",
  "key12": "49LoNfRiEJrFQ8GAKY8qdASnHPccRQi5Q8eNQ1Dqy6wo7mecvLWL8ENHsiMwjqw6A2GHekqUTVb4pvhEi53hJcZM",
  "key13": "2YJKtNsTaoWoXEf6hHEvbmGgoDV8xdRkMvdsMW5cp22isQDqJcUq6BWbaeXFBBm4X4feYcnTFBLwHdcgjbF7Gq8w",
  "key14": "46kEtZoScbFJrq7DkNMfscZeBHyBMsFgkY5kgzKCbjbGhric9Dgwfpz7SeZfd8cuh1u7hCPCtQnJhFn2bvf5ZDLU",
  "key15": "aztnpkjvPzDgZTCeCxRxK6FXffKFbYtg8nDTLD2m6YUmkXUrCGran3MoF4bRRf2RgRJTmZBLJKcdMmoyZ6Dbs7P",
  "key16": "5ncjHHfj73PgTNb5RfthYxWU2Cq7etbpMCHxQLPxWZqG1vUNV7AmArRFbNm2QqiUJqz124eojpGkQAxkkfVqmNfc",
  "key17": "5wvbA5VSg5GxbRsvjzptxBrfjLCr12PS9eyFy5CewK1UUVsW5UaVsuRp3fQ9syUmo6ic2CzZqY8j91qTHBeaEgt7",
  "key18": "GcN2Y2Sek3EW5SRHt9WMFmJQTWYu5ZWHgvX2Biu26pjULS2N3TZBwLdnVH3cVsLHJU4PK2p5WDdpvZgQ8MbuN12",
  "key19": "2M7PSufuAZP8eM55xkBZwKue181zjBvo1zYv3CDN5qZn6jpiKW4FqxuB1WM2qWqB5T7p9iDk8t7uK1xnr21vqUcH",
  "key20": "5E5AKPr8bH63h5Fp63A6ASw9iy4J5ykNW1YD7qpqvfdi3zrNpoXFQ8kQjrJvhYSsaZeTxSBfddNQk9geKWYoaQtD",
  "key21": "2Dp3Jr9cZwjF2GXpsB7MH785tbQbTPgghDKpyMSiUdGLg1sadfb2wnTnHe9MBc6w2cpx9iX96ZaQgnMTJNvr9YBm",
  "key22": "kFa9TezNko5Xo5P7qTh6ovYKm39riKSb8PMLye38c17ayqJNkqSa7SXFTibsSsH3WErsULCiknARHUhcNZPu9y3",
  "key23": "h3L2Hr5bL1XJWmZr85GcHU1oPWZTdLzZtaegvLknRvNBggRpUJbCac7GZtjLVjNHoKX7r6V8DL5RqUPoMrD7ggs",
  "key24": "2YpzsujGeaVezfGcLYs5Y8LmUjUi3URANKgQykdLVp95A3BUB2s4TbMfqUJfz8CbMMHhahLRwWgkJbmNNsuRfA5Y",
  "key25": "2Tnnn3MHyD2tW7bHn26mSn1NKDfZKvLfs4waY4KrPjHh8AhH9cJaChNcnRifcj5sWBNfiXTnGwF9gd3CPa3pKmyD",
  "key26": "65nS1AWytg3FiTsJtmu2tfhayhvFZTMg7mJQ7EeBGgSB5NT2MbxVhqa22fXaS3hmwYoKRsKvHFZwVrtV54TZotWS",
  "key27": "5P8wQEhctgnfPm2Nf1A4vyhyRj7eX8K7rxtW3gBM6V2jWv8jK1S1obykQPqiZPZw9ooRiHxLeACqu2TMxP39GjBi",
  "key28": "4aHXRquLJY1Xm2ew3pDk1fZ9pX9byBuugDEsXbHDhYcEnsiTu9D6yGhr6wrXiS9VRSaykQii1RByn7wSRvwFdKAj",
  "key29": "3R3NwLzvwu5fRAkkDP9vZ8dhAmYJ7hBGLGEmrV9aKe5KEAFiXKBAM3x4uyvAuknsNcy4jE1T4qfVTyuN3PU7EP4y",
  "key30": "3waie3ocfBHVHZvKReybBbobDPugPiwdPdxKrXMMF6MSSbo87Md1gJau2M6v3jZNLqijGqLZtSg6qM4FYB54uSPn",
  "key31": "4sDqKhwQwKbFKEU8zG2poqtdb5xrtwmZb5b6ZgWzM5JZ11S6R5xpTe1eHfeVHgJJHob7Xk7aPvYV3bqeCECCnCpf",
  "key32": "2YfcXQt75bqoKVKji5cqNEhh8RHyBTd66jmzGTobZ8LMAWXEUKvS6RvTB2iFR3ZA2FEu9ybfb1qkUgRDTAK4cy9g",
  "key33": "4uJgMjutjHqGajczfYqmPaKD1n2YozLviJLewcfmXGz7v7PoRC2bQc1zwTeJNQq63BpTkFytXyrqMqyijziN1TCe",
  "key34": "5E2DijULDnbzBEW2mbubdZhnhCECrYiGr7bJBcLiYDJfhkEpGjqyz8xtrUhwacvHzY8PyyErVWzQt3Ue8PFveFbV"
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
