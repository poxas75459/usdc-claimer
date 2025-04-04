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
    "2swiXuizhTLs8igapyXzY1f7P18TwzEGSZct9Dn8kUJxL162uvrj5WBJwYjo6oEiPn4CYwBPRG3S4FoyeUcfH8RV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDfRhSYvcTLfaZsHugeDFogcTEMdz8ybkcUq6p6pAamWAU6wLr5RtJfm2iafNJcPx3NjPn6qUrMWWndvYwr1sr2",
  "key1": "2Zd2zKuVwYfPZLSHT2f38rkzJ1LrKK2tLjc2gUFT9Y572qef6ZjECGYZ7CTN69WdovcuCFpHQYQbEERdBHLeoCzR",
  "key2": "BAVwY3G7jWjxMPvmWYaNAvee8hsvdkk1ycJ67p3FB1PGSeSQQ7XnhobHQj8hjB1iZSKFpQA2F38F1x9z2i1tTsU",
  "key3": "fJxs118tCRzWWoW26zDQ6FJGt7UQbEzvZvMqBhrECTTki95TqoWX3pxewxTeTV3kTqWiwJTywdV36hF629K5dbZ",
  "key4": "57wtcnW7CTR6cU5ArhQ29iAzFNzPuP78s9B74LBAmQKYqVRgYrsF2HuVojZ8jSHEwCMeqVFTo2r9BATP1NLfF8KK",
  "key5": "2Jv6nmALHgy5xSKp7KyPVCbGyZjcr8HGTXLeuiDxQ9uALtK6oDdSLCR9Dq9L64JEMFCH6LGjzFsLHa7jCB33ibRu",
  "key6": "FR1dbxjzV7335ZaCpiDH3DXbfjW4KsLJfNYVFAAQDUzHbpays8BorJDZjA7EPmneHrSwuaRofX33JaVwpBtpdHb",
  "key7": "2EbCeEinXqjJkvZpZg1rwyazcfF5eQsNm6QYhwcEeg2bMevteraDycbetgFVL7K7bK8gEArd14EaDkvkWiH139Q7",
  "key8": "3pVpgtGrPTKKdLxVA3MNkwQUT9v9pusxDhzzLDrqVCX3ZjrUfuaQiH7meyCmVrgvLPoyBAZ1h6VHi7VsvYcbnjxs",
  "key9": "2U55BLG1oe9mE8XCbPZmcb59FGYdKT9s7cP79N7CS4jTpy3VLesykeT9F7AK8pBLbCJScv9x3uZVN7vL6jpEJFe4",
  "key10": "4egVgJvTKpiUe2UfmXXXWSzj6TsSQ99GemAag2wzZKdHGhkoJUxK6cX6FTTQTkkatsgXTBYvBuWMqMrUscYjdE5o",
  "key11": "FpwuUYdjqNpNE8muvxjiUJJRMNzwNxJGWUBU8HByXkXhKKxiVav5nRjTn5sGqhThUafrzcgSkrdmRTXXwSu7cWK",
  "key12": "215vr1mRSg6uEMz42hUNEdrv42bbSqq3EvPidCiEb8R6L9MbEJ4ubf7RBiy2hxgvwZdxFHhpQCdCksaScouHcuho",
  "key13": "26q9vyZwd9VhELcsfZs8T23uFsiBU5zLkDNdTt3Vvcg5M5FdHJpRMtY5x9HdHv6YWvMUdSFULRCk6Ty18TvLDy9d",
  "key14": "3jxu21SmTw3bfg8ttD6FxUGXwzCS5G1vzX4zaAdtEfoCSpnTNqJwrLLygLRGxupbqM1zcD7rMWs9qdPUz3UZUqGW",
  "key15": "2ckEQpuNAj8G1TG6LczWZ7xZWkyu7C9kfTFUqgCiSRfUn6kzEsfy5Mz8r9S3w5UG2HeC6HKef3UJpDVQaY83MWQh",
  "key16": "4uCyQKS71dihy12rSM2Vb1RQdn6jjoeCAq7LehcQ1YQSVQqe4cWSqPPcsZa83vXtpqnbzfPcm2CgyvCCknk1i6Pa",
  "key17": "672Mq4bVncdRxHKxbEsnAHn4FS63tZTayGpUppp1C6RPJNLKFgJsHozEcssNp1ikFsqP8rTRfCoFJ9ETmMWeyCLD",
  "key18": "3XCDtbiafF1MpX2ijAvgCe9uFF4DLth1JDFitCkSpntWoKFrUkVaJU4XifGEorMG3M8J7ZUX3AkkvaQwTRwohbZw",
  "key19": "vJ5JuDRFs9AVsaNcW85FhhWmh4VhK1wscGaJWiTVvMiUUj1s1eHWZM3k8yj2w2fXtArZTfvgcxNRWt8EmWwuQ7b",
  "key20": "4XUZ84Mbmjyv7uVo7kkPZnEBppGkcYMXckHxw1GxdBZicJsEm96crGgAKdTv53GC1hpWnVCeNnQZKdCXpfasc49F",
  "key21": "4JF1nuWCv8E5hVi7sF5tDJU9FfjArnAiZUabiCQzAUVPxZKokFLSCAytVFGkwrrYdrmks1LTjYfPTcJd7XnHKhXi",
  "key22": "Rwgan5HLLGTGiK3LeDcJk39Gyu2rk6WF3Bn2uXRvYS7s3s7Bw5M8pGge8PNsnshQ9vSnP86aWsnJriE4Dz9denZ",
  "key23": "5qLvtpvUSD35Rth2KPFHRsV3nQKyzQSRZjRop9RUL1pE2tRCGjsW4ZGw7ove3WohCJZ5RRm9SFQjqMm52y5Zv8Fg",
  "key24": "5K632Mm4c8po8o3NdBfzEYccV1JojcRzXqLwkUfUSneP8UC68om42kvE8XbdQjApLvPJEpKLXaCdb42oPdiD6gYH",
  "key25": "LrT9upCuPzSygPyW6LpQtgj4xJS8tnZu5bKo6t8qeMURV6FDAxwSbaiHv42m4pZ7DPheeiE3ZNmMHZvQd1kwdTa",
  "key26": "5YoCV1TtWQxoaUJuxrj3TmmUp2st2xc2z7WZNUpSnudK3DbzPrTYM2GpcduvG2MnAhXQtkZAxrjdgbeWcWsprzRd",
  "key27": "61aVjBdNjbLktpDSjcWdBQ4amHXfei3U9wcUNYUcC3JrdQwpHTaFPP7Nsj43JqdZKSkmDBH83Jhg6PQ3THkXJ2ws",
  "key28": "2mc2CWvH5mcBWvtGUyDzv1xAoN6pwAGP5NXdJS7a1gCEoofxceFTV4i3GAfJB6JPJZnqZJPjS2nVV21rUwEjeb8a"
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
