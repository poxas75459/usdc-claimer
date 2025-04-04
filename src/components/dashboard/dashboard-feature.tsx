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
    "3X1Lusbm2tq3vGmA94ws9SVLU4kLB1wVXAW4fdfyxNaPf3mKeY2YJi2h7MCjRnjsCYCBssYVjXpR9qKzYo2W9dVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjTXL7wo2iQP4f7t4feCXYRPdMcMRiTmXVJwZvQPzHe5Hw4729CrEdCsn4DoQsC2honC1TmtzcN4bjLe7tTBbn1",
  "key1": "zz96nSseLxNFkTQxZan9pNXWWzW1vRmRvhNYBPX3nM5qsPKNPJS42MugTtqnF7hXow7k8up5aoSZbixWwzy9Ytk",
  "key2": "2BCLtXHQWHmdvhpV4TxGvgPwyJddqeMFt9hWvMJkDpaCcbkYEFAxMBrmxpisLwVAeCVmPMEQFXZy5HFxciEDo353",
  "key3": "3PdzZRHkMuf6kELnv2AeEZvgvgqgbrNfHLX9sKV9dLsAPnEWXMv6TqarwWjE1LZgpYi3b2BME899tQ3dz8mvz1uz",
  "key4": "62Ga1PvPUokPmbgasxyznnQRsKFrNg9BGjyo3S7c9MpGDLstmij2mvpaRWz6kNPUS1X8LpkxeytPhSFZMzKUYKgn",
  "key5": "2KcVvjB6VrqDgJGeNoRDkbJoPsHmK55Wa1LvAaCzdp7jJ4B7k1RsD1dnwVWVHc7by1A5yuA53eWeJ4knABjtDeXb",
  "key6": "5QwXLXAaQHjmS9r6ZucssfHg18iktCYnmMxCJiWBK8C9Z8U7yMnSVZ5uK9YgWwwiEeiN6a9DvAtyG2C7pSxEA44n",
  "key7": "2A2UsVRgnNZuqRckhsPgedkfnNh1uPcfdSKvWBZfrrCZVTqxrQVDKLimihxSzAxVzSAwJt2Yq9R4uzztdGFrFgeT",
  "key8": "36vb4o9m4hkQP5SkBjopozBgUwUtrdsxRmdSAjr8tDpkY9qnmjuDaLcn7TjgRbrQX1jbonbwJAzgy73vUSDxQZZC",
  "key9": "4Z37xo7a2M1Bcd834e8evqbhbxPv4bKj7fi5W76iBfYk8JhSnNSFJXShmP3DKs2BgTfLk6mxkq3SL5zGbKbbku9s",
  "key10": "5i7eDjHa5AZyWoPhQfCeiNjENoRSKYYz9ZnH9wBBQSjoNY5WNzKej6v7K1wmKnei2Grv67qWGLUF3yuitSakygRq",
  "key11": "5JBjPCZ4KHw5Es5FmaeQdHHjuAb3BACn9dBiGkQx8y2NZzbHZWgbszs8AMwtEUmSiGuefVY9rmG29eAVhtHiPLoK",
  "key12": "3Hx1EYm3PF1BmouNQQshXdU3SNLLu29oFhjWJRQXak5mZ6PJZAMJBmcG2ctqtG6vVL4bJadLCWLo7URhL7LPUBQd",
  "key13": "8c6CFR2nrqYyp9eWziSQeS3QC45KFUWoSgaCrBcWM4quQ5yM6fR2hT6GxZ8kZSmkGS672mj5UevTKRedB37Bi28",
  "key14": "4SAq32foE4CueD9FM5CYxDPDYctJKkVrVXWCLH6zVZs5wX2oy8mJSDEmut7SGmNqSPTXtLV4ubJbTkQkhMxFNdvc",
  "key15": "3f7hHuvPggMemY9BHyZV74t8a9cyrM2eDKqLTDHwUPnTLDL4jeGbY8ueZGBEyCfAFvext3fH6x37kXpywyJHgAQA",
  "key16": "3bHsGn6CD6qgugSJeiBw5r49xXcPJ826TBcyVEkzK5inBYbN3XrMoqpiB1SKFjoccU5HTLmD4tssxnKMSP1QbbYq",
  "key17": "29y4Jmecfaxnoy38oAFoUaBafVndDwMq1EnwvPfGEW7Y99sRc7vsYaQFBVPVQNeVzg2MjgNYoVmWwiCLRZvDivYQ",
  "key18": "5dwbQDNrJ1gTZCDgTJYcmQN1hE9gKq6K8y8zcy53cEY4fDXUqdF5NHuN4h3rF2VvWPBt2Sr6jZzNcaEM6JVqoYjb",
  "key19": "HqdVQk1Leid6zFMvZnCzAas4ugqSApGtTsFyY46K89pdURUtbpb8qcM55ixwP1S4asNN4FV3nfuEnuVwn9Eyvi9",
  "key20": "4WAxA9BCn7GVYmWWBuBsaNnhFLA24uwCytFvTc2D2vnCn14wKtJrC82hEdaqnoGGfDUptnJv1sbdC3bfSAL58e9a",
  "key21": "5nvQ9rZAJDLw4EqLkQZMPxfd1tAnqcdBaviG4Wc77fcL3jP7joLrkpxD9rrWqm7wtTyNqxas39DrSbfixyjGbKae",
  "key22": "bYYmAj71k11qq1y8xp5htobQTQbTBcBhnPhf3jQAD6SZ7Bq1KEa2M7XNTYvtnunPpCe7zYzoiLb1RzWBfBA4XKo",
  "key23": "wgtYuenvjz8RVAwxPFv9Lhfsh5j1i6eTfXVcdJHVDG7UA8ro8X7JmWEA7CLZC2NWskZ2YnLQp9kNQ5fteU7UTBg",
  "key24": "gtvCr1EWaTtGLMFfY62HmfgsBd6g5iUFg7CM1piFVbxkffkGz833f5b6ND83MZYniUAuGsd6svfoBrXrwr1LKgi",
  "key25": "2upqRYRZ7xQbDj6iaWxcyfaR6upXzvm7gRwZTs6ZV3BZ6pyEGzfQU8m1jfZEJJqFJ7Z6KhQDeFWQxgGfpMEb3b9",
  "key26": "4oYbxCzKVHph2bdsFccs71KAN4HJRvm7mJoReZMiqHtr2FLXpSXJfY4Lx66yEBf37HKMTkLzJnuhh9HCaJUHyBWq",
  "key27": "5iFpojemkSBQzZA2zJV3HkEt2kTL4JfFw8oHet6bexHMtnTHKfR1yH3cyWU3GNUSeq8RHEyRxTnUKz3PirnNfrce",
  "key28": "499ikWMGTAuTmBwbm3gXwsXnFGru5shWmDTN8yQ7Z8yJ4ot616sYT7AP9L62KGZeN9jjPBaYz9VMnj1D5yuTmsUm",
  "key29": "2gBNm43WihPEL2XXYqVxsY5cFYL9z3Fucr1jGimidzHCvNeB5BdH5WLTvJeyb9asG6RwQUpEzT7ehtrwNgYeKNCC",
  "key30": "2Jqf17gdcvuzUNYKeYYoXhuFChoXxmWUT9EUdKFRpWVsitfDY9fR7PXYchNCi4gEzePBcbHf5jsM8Q6um3SzAd69",
  "key31": "2oQSkTvY6CZv1z5kKsL2GiEAX8S8LYNRP7Syg6G1C2qjQ3wp8JiJ3DzZEjj1NAhRYg4izVAT8Eq3BwvZfPr4bvwk",
  "key32": "3cuvWDx493jyRpcYSrXBvs3q3te7Gi7srwAtKwkUeKkvhK15WcoZ7pY1wDLzF7VAR3qCUYPfjiJwSRVLWyN6xgdE",
  "key33": "571XxfCHfFkNKQ25cSJJSa8KTiER2zXTuPNfx2bhqn98rkf9s7Q7piwmuEzcgzsVHfZKDHeEqnnqUF5qkoudmS6f"
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
