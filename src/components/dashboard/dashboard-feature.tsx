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
    "3NmdifsHUyRmf1HcBxuJ99UiFXeJs8TNWqBPuPHWcqYF4vEe5fQyxG4ZiaX4x7tWaXmZE2hXk7Sa3vFXaSjecrfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "573tsaig8HrHWkiRWgvdQ1W1VQszPxh18tfvfrZLBeJL2Ph6grouMeL3U3SWBRcc6LBK1cYddWbudzvXZtmxMn8",
  "key1": "4jxMtpNEB9s4WPtuRNHGNy6NP7QA7DpNZ6mvqi94KzvoRb3W3GTwYeJEfKE1D8yz5scDHPzjahqfP51hHLbCN7ag",
  "key2": "4HYAvkPmTA54upPiiBLTx5aiNw5cS5yE3mEgvRYSvpZ2dXspicWSYeHy24Ln44C2LdgzL8rEPpFkp5JtH88Y6e6b",
  "key3": "63XzfQLi3xubHVE5eUJ35NCHwGCau6F5ud1LSKawt7bC2rxKKTjxk9q7W7PwtepSigtDL4Rtp4B1o6kCVEieKDz4",
  "key4": "3JNd6fBKNrcvstqNW5wQLrddjxPJASKhQmRtbL8A3pi6cwrk5Fh3h6cZGnooXvC91RwCodLAQSFJiyWCGcHKqRhQ",
  "key5": "9KN3q7sjC2Xhb22jbErLUVm6BcquY4UMuLbFL6awmdT4TpLDPZgVyJ9qfLwp5HpY1u1t3Uzw9oYpgsZKyLhw4nN",
  "key6": "4hA2ZB6y7AqtbZWTHYSqiNqPXpriX22tpYUEYPy2qREjRkfAwJaxJ8NWKPZz5X5E2tNaTack2zNS32LND3rFz5nu",
  "key7": "2ch42f4QdJRYGUXHHuPcn5TwqYLgiY4hGz9RBaa2ug8WJG2zmdd6NZ4QCg7SCmAipNPma6ZQGFov3dVaaEBfcXPe",
  "key8": "5PDhrMuxCZ7G8EqpxrVHMtf7c9yDCX4CoasxWjn12USUmJYF32GpWbe8yaF2PeMMYGJbRVf4oNvLFkUHYWCN9oB8",
  "key9": "2JYoqHCKzr1TMqTvjjdG6LwgEtqgRHuJmFWHEtRuHZzzd2U7FqdN6zioGytk2mXz8KUmGbBSvcUgqMKxpCJ5eSag",
  "key10": "3XMTcZYhAdtZ5SrsM1YoJGNoePZgGf7WwAW6EmR7CchJ7UPrweBQymuXD7jKHiWGzP1HC2ugMV1WtLCAC4RKkYRa",
  "key11": "2393Zt3u64NdCCaBi4rPocsBKmD92PMfW3FnPF79mqRpD3DBsiJao7VUrvZL4VwkCQbBQP5qRCUeszqEqx43FYxf",
  "key12": "5KpMsX87WWVRP9ABA5q8DfNJdiGZLQSKDE5H7mfTUH46TrXjn1TzPp5Y5MgvtDnmR7ZnqAHC9RJd3wDgdADp4nLu",
  "key13": "hxxVH4vKPPJdkJvkxy84PqtsvNCkrPFGQawAQZ2ELGJXV5LvLiD9fvUTaXtLx6ETFGu2VrRnscdf5AVo5Z5Vid9",
  "key14": "2SMFoAd4SdKHPaoYqhSR2TXAyM9UWFJSMde9RQQUjbwGtCYmpgFQ2e7TGm98zD96FCwybTwGJREfQyJbMvXFuknk",
  "key15": "3DcgMG9nzUfomQP6aur6w2vcqrUmd6gbWGwVQVAtLvCvdxAKBSMVuY7YtBrbsH29gA1u5npaAy1QJ1iKvusTyri9",
  "key16": "amraxh56z3WjNSqVVdU7NCacuqxP4YL1mLWc66Yiyb1n1KPLJzjxgQwf93byBvjyvY1Ui4WDUZt93bivgGzpZkQ",
  "key17": "41pP5L4ok7QBwRweNNeX9SJbQkxDP7kHeRDHXB6kHV7fZAq5QdxjEuW4nXyazMGHY6aL1tjaGjkF9EZVpqwnYckn",
  "key18": "3xHdvZ45Xk3Wt9sYP1KjKR6iK5uUNGCsCe9ADGd89NnRStn6qgkmFwLm7rasJbKniDY6v8XDi3K3z8MKwxvmRA96",
  "key19": "qEJk8JZ6sYxbdcNR67ykFXRfCRFoKGNDgeV7HCCQzF5qaDoBLtGpECot5GyvfMg3ViJoZ3rV6zZLxSnstfZHycE",
  "key20": "3WMQrXSJnYezKkrHj4PEAwssgNrceQ6pxWJswpDson2qHk8JkHN1i8WxAFCLqsV83kZ4TtdWvCLhTTKXFodpbN8j",
  "key21": "3F5SFX1wa3CwsYZmDvi54XLXk2PB7ynEM2a63wLKNnXxxtqAEKdCinTtbs1D3VTQLaGm272Y3KtghxtojWFNukwv",
  "key22": "3hPreqTBv3VR9KJZZCMfxks4gfSAp8KpJ6uvMzTpa3YaAsJ6DKAfa5zDg5kTsPxm6Rji6eWXgzvcxrcoJvxcx9GR",
  "key23": "62YZBv8j2crfvLzgcbJm1xATpjwS9bSSUovu6WkynuMiVJeB3B8n1UXxXgWJFYcTbA4jz4HcTxzxoUWEmLuE79y8",
  "key24": "qc4ts1ic7N7ywyN3XqEG5jcKKZhEupqLpvL7F7j9M1qjpcTcK6yscE4JLg9VCyWgmEXLVFRoU1agr59eJSb6BeE",
  "key25": "6SkJZxY6VnDqULREMUZQN9262fsP2XAnLa7bcAzTHDgiYq8J1X7FSPA3KTtZTsvAsyYG2FhCywCNx8eCs7wJaix",
  "key26": "3WHhg5QtafeF9983W45RhQHZAt6Vh1vab2kRWZz9R5o3U17YqgkvWoJQAVCNfz2g8ruVPCBh5JHBoEhYkaCw26g9",
  "key27": "5keUxA9AgKUtLFBpXoNpbSncZC3wD9gXQLtg7LyMeF6KgmtKAHJwRjqqtCwiF7s6o84AQeo5ZUh4psJZgia3y5NZ",
  "key28": "364grRq8nR1HNj8NbTHLPgr4nTq58bb2xCk9LXNUxmAXyxaSshjveWRueztBqputrdMPjN42xhb2T8rTDHuNEPny",
  "key29": "5Z7NGdFPK1aywiT6vhMMwCz1AhKLbjQVa6N65QZTDaVydzAXGsZJhW8cZNgmK5uaQ8FR5rrU3moUxrBAndujyWqG",
  "key30": "2MByy8ymiFtBxYRyFUPpwAMPCSrT3CouBkWbquggNRRJ94KDifVMZcVjCSsbYbzanCeKBZ1DwNRQHgeevEZVeFiH",
  "key31": "5DQAe3q1dYPJHbmhAooMyYc3jP8xXUuwxNZLwdQyD5UHGZcrjDnmCTVHnkLuBQfUtzf6FfkqEE6SAQFyEBgQMvi6",
  "key32": "4eg7RSMgCxzqvgvxLkNZ13dRks7rVZeEgiUDoLYvHfYjVfPc9Z33R63FnwbBjPz43LDNYW72s1m9wb9puVpYbpo3",
  "key33": "3nQfUUQmpXsZyz325ZyWNavUnCAky3wuxKG8tDCpmzsWjqpKbZbF9P4hirw5BceMbqtRBi9Mo5sHcc3Kyw2rNepM",
  "key34": "51CCXJ9VTovmSMfoF8TFXEkKMvfq7UGSRLiagMRRKbENNu5gKC57dougsC6Th1XAFUnsaxcEzknsAGzRmg8PfYc8",
  "key35": "4MLSt22wJbazhGPC5sxQqT8zx1iyoNENkFXZ4XFtViKABj4DZHXV5r4eF3DHiuTn9MYXhQfHBX8VxeiWYfej7C7n",
  "key36": "3syXQ8GvNZf5MSY8mnvc4ww1osg5YG92TgWRm5txj18iK9J7GdA2Xbvy2FgQSPB6VNCqqNzxX3cFf8qw7W5AeGqt",
  "key37": "4iRmogt25BGFMafyNHSMsNi2L8WVYt3DwGoHTF8JGKa5t2ZNYKCE1mhaFGd8LpMKjef6adHCBJZDiqRzheeSfSQP",
  "key38": "3dx3vaAsBK9cFeENGi8GAsMwmyCvngFZuXsABLZDicwojpgVYAPZSe5XKt8sPCLLpApHqUTuUgq85HC11xRrVhDN"
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
