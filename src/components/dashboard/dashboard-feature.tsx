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
    "3QGCoZh4FJ7RZfTcyxATjfRV5bBM24E87WN63ZwjfNFdfBkRJBUKCgFdeU97ij3gBgPqngF9PSyESkSxfEvdt8jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gzmCDRg5onjqyR76JvTRxT8eZHr7DCXhBtQcQBwKD23kztKs32rAxF4zqmvpiG5GhXDZo8oG7uWrmLseoLULTJ3",
  "key1": "yDe1kW1RCSYGP5drKfg5T6H4YCnbcQaKr4wz2SuKELvGKqGmFTTszVGUd2LsTiF6nwB5Q3aLbK8mBv39vtkaut9",
  "key2": "Vqx3oAgNToWBo8juPuoBMk19H5Dw9VoLJ8AyWCG1qPku5EQqC99Qdo9zQZKGBMKnQeuYfP22bM8GAkz9DEA6Q2Q",
  "key3": "3i2SwHWxDJkgNfV6yzxtC3uBDvE5DBzzuhuqQ1m6zUD8FEVL9uge7bf7kZ63rkCBZ18wGHMHtjSbq9jBBCrgpx4G",
  "key4": "4WcNmiNacNLPbDtWsBXESqpzqUdR88aZQ7ZHVvbRRoK8eARGGeMmwkpt4ZKwU6qPypu7m22knbtZ9u3f369cM6SD",
  "key5": "5McA8gi5W5JttxCd1MBgP7M5DksSMJ4tdDyyg4Qq59GAE9qn9PmEghK2m38Jy9H4zWDvcRCmSbBwKsKhJBeFxPrZ",
  "key6": "msuBkZM7jmoRFWFRD3BWfEBBySsbE3joFecsET628b6buDSYjsgAVhtYwMN7H1LXoaPm6vwH72NkTgno1UPtsck",
  "key7": "jwY7aCmQryDEvrVwvURcKWUimb9oojZsG3pkBZCBwmJ52rMAizbpWKXvEMtmjKK6YCUUL9YYfSy1awTaZSrNACC",
  "key8": "32X4DzjTY7jY2wgZKBJhU9AMX2MBHceTetN9enqHXpfu7C9wnwsCMAiUiDVbSzHMc1eZHuSNGYUp3wYuBgsPkBW2",
  "key9": "3QVP8jVUCyw29GTxacncb9WN6p9T7fv3wZKHVtP5zv19WM2ARHcoa6YDm85sBEFnASjbeYg5AdhW1cViqxkZyCJz",
  "key10": "3jif3MURHDjoLRFca2C8FV8VUw5HFXtVcUNbQHstVt9wk4YPySf3F1H6ZVoPpjNY1rtSC23Wjb5hXPRP5keYFi9G",
  "key11": "4CsdszaLa68sabmm673tQ4TRg8zgWeJReKH6zumsKT6bBnxBiuJ4RKGRpoPfnuh7wWsAfmVvx1tfeFzGehiK2sHf",
  "key12": "UTjpcDg5uL6EPrEPw8szfUCwEBPG54nAZkdQMEZXedcyGrVWko5UiVV5Z6FeH1YyU934sGneNdQDFBNSJ3eGqqM",
  "key13": "3kYAK2PzKGPUepxV49nqnMUZ5RNNqk5dgq8DEAWdkA6wPV8TtydZhREfqn2QG4Q1QVPQ1dL5C1DFVq9dgFDz5TkJ",
  "key14": "2enQH5cfVyZLsKj6T3S7jUMNcumCukrRKPLuXJ5nXibVjicmJaSGSXLk5jagh6eo5D34MHHupn9KzLWj9ZYaw7Py",
  "key15": "27QQdRhDqMbAiUcs21X9gL7y1kinb1D5w9Lta7ojFkftCGvodLSZGQbaE5gMRanNeCURWZBrjBEL7TnGSBtsAPzF",
  "key16": "2dKiRGFvMLokHQufoPDULBTGcSRg9Do31LShe21Nh9i24AWbDQjrmeF732LYYxjDjK4jdwmbK87jf6L7cWss7wVc",
  "key17": "56cVQHqGXSjtaRt89KysREKSYrbf4SMHGV6m6C8RThT7rTDqhT1P3abLrAy5RGGg4kv9bExWLTANBz66x18xCZPp",
  "key18": "ZfTNULoiC8AjjE9LrBdKaYn4ShmTYT6mRgXsxJaLs4FmZTSY5xomNexKjDhcAMFe51U3VgXf5wLaTYdbHJSBrVK",
  "key19": "2kLR7nmM1f4Tb3yz3iKJ5Q9Dj2p9WMrYHz5hpmYv41rmkfZJVjV8igGvY2anLPTptXP9qc48RwscrP4gED4ZRAYd",
  "key20": "5J3SJQuo7cP2tzmcDQA6FZS8vCYVq2eyuKNfwgLQNnwMsNwfLi1yJ1jCcp49VgF7ZzVJ2A83MC7iPGuYkXgb1xs3",
  "key21": "4rPTicQqzTJGQnxQFxSrZpNqkzAqkU5A3ezm7WAZ6G5DsaQP6xbsBH12znwqXfYLqfejGrTxwxLG9BYWgrkQio5C",
  "key22": "35CFuuqr47B81BvSqD4vtezDhhgBoPaZjKEf5Ji8rbZEaDvDfC4xP8TSCEuUSvdsed94cCEgAdeMvt8ViRZh4jb5",
  "key23": "2gJWpwWRFypSpjBfvna9yjJsMVQvHsiAfyDcfY7oPAiMFqWmA97w6hjDecbxXxJCxpTmc5Zpf2DkXifwPRFS8Kdn",
  "key24": "2MnWfn9zC84LQvsL8QFAUT361fadbgXrLHS58L7MNfHXGvr1jdV3VuZPGgA7iHadNotPJY1dkFrTGyAjeFZk12c3",
  "key25": "EzGmJdPsfEPg47V2xPJ3HC2pUorTmvXPDEqD7TyJw6NFQXutVkTNWw2gnTZMSiHWMgqEDnWMVZrnspearaBXztD",
  "key26": "5jkwgEbbX4hfoMkF738bf1QasL3eZWiiDMSQFFVMdTM7WniF3tkYeEGNpFZy1yxmgBRfTL2aUvdcBL9YGxSt4cBj",
  "key27": "4mq5xS9AtTBS3x1ojujt6ePxff2VCYb7nw1cHaQCys9pXYs7kNQENDh9kwxpufRaoJd67ohxGqMdRT4536fey1x2",
  "key28": "2qno7L9dtab13tCBZbXvFqXrQmKG3cjiUKPkGV8Nq2h8c731BM43dCH5gzmtyRf3ffbQmtBSMtZt2BX4t7kAFqvZ",
  "key29": "tMdUVpSrpBibSwYLEEwfJQ7BLSq5p7YzdGRGxs4R9u4THvymQMX9UVm2E2D1F2uCR8aSyhoLPt5SmSww73BxzDe",
  "key30": "5hkE7DbQtUSiqdHuYxKZGJK8tUAhcLTtsvFSAeARPVvonQt7bSemu8xKnjt4pRmVkpr2BWZD6CizWKn1Qb8jfNZ",
  "key31": "3yKxCGvYnyLotTdCTRKwKyhUDSjmAkLGZ9TGYNScy4mqhe8uvC34gkRm8orMoZdDGWEYCS6ZFAd3RtPxdYxh2cg6",
  "key32": "avo2cFPW4yrXkn5iLEVexJUmndkfAqRRvCfYqhowknUNiAKNvjv8fX3PocFYFy7Q8PBwBkeXYB2QeTPcSUiDXKg",
  "key33": "2qhMnWBo7oVDi6cfH4wW2PbxD8nTtAtPmnEzCYWtkbk6WN3kXzJvL6qRHxn24VhAWTL8K454mQbhHTcFjGEAtcmX",
  "key34": "2kpVpQ1qFkLHFuFffGa8KCFZyMEDbAqegLyMS4M9YFgPSw5GDVneUS2DV2mcGCE4iVGz8ffHRQF3K3GaVh4P7QPD",
  "key35": "4wZzFsWLnn5GyPGjfmcrXXTLszFcfoHaKjKjWpCo8t7USdxxGgEZ9JsYK4Ksm4pMyNuo6S6Hyn8nv3vZLSJ6NzGz",
  "key36": "sPVUz2bfrN7jsbQTk7PMhUhKvv7NRckvWxCCSwxxZJXdGA597hxEbRv4D5wMbkCz9J9iZn36n2NgedMZtcjVDxV"
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
