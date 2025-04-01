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
    "1qEsmLf6WgwmBxrx54bnfpp7ocMt7ce2hiRLtujXTqdf3erymWzCaS4a7HuW6od7vR3XuUKGN4gMzTF6C6GwEru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmYgHMwufYJKtSBZHKLYQbbSZiPxWNfXhMAkPEixwChR9YBexErKf4BGF6x4BRYZoRoCgiq1rr9VMGJDzY7Mcre",
  "key1": "4hXgHumCfWYZb8KtWPcjz2Ga7ZACWZU42GpU8jgxiV1gJUQo2VzGqm5fM7KyBV6cStbZy4VKQ7c7zWSazoyWBYrN",
  "key2": "2qQPFqGTxjPw9yR3VNMCvx21ZaoxKf9KpkvhKw73kgFJNCbjB6MGRcFmtqBBNPKa2mLCqQcrkV6abh6XvVviwAXo",
  "key3": "jj6CJveQc18Yxcup8zns9QbrBnUB3QCstotWu3b4ekh1KTAViCfRGCW6U7dAQG89qs6Qs9XedrCcbkpomyxqa2c",
  "key4": "5iGkbNNwGLcY286FUFaWLAuap4VnaA1q6rNVuKdMnvgyMT2LU9g11PkjHG4A9eyj1RU8PBZXkixZpSUxitrAu56a",
  "key5": "5zRBqaPnnYi4EGrxd5CooD3X7RjLsAy16CxUQUuwPVmjsQ2nhcFPyMcnkqeNRzyD91Hj5krdydN1B1CCbrZgET52",
  "key6": "39u7FReqHtF37JVsjwhqgtUzwaNt4NQhCzGnGz9PUE3sNy8tQhi8jiJEFbgC9jrcSGP92pS7GSkwbfifmakxUvmX",
  "key7": "AgvfHsFnnhRqJYwuc34YCACPjp71QhJSsyDsAq1DfUDgVsDckiTYMJcVH6QgVnqCpY5HeunswGtH86ejcBSfgce",
  "key8": "4MEYp8kWbRarYn5VRhtXxkvT6KDRxAz5ytT9BXg4Hi3YzWuJsUMvambX1tZKNSJ5tBJVPkEBmfHTcZk8PMVewxRR",
  "key9": "3FJpvBVMQivyX8XvFt1vb1h5UUfuWJw4XeShDNU95HeVAeHoNPiJFGPiz4PSeJLWNJo5mqdabZncSPwr8fSE5coZ",
  "key10": "2athS2UqhPz4bwUEwDZgTZTeWW9G46doi921gc7JbqxBpK9XJntN1M4VaowD9FcnjSVEoHRXbN75Ji4SnKB9aMAg",
  "key11": "5R4aWQQLUZq8Re8xQ1bj8gpR5ABSREZbhc6KZo8xwvX5jvsV2yn1TKi9m1ASDaAL9NBSjXxkGew3J6U5q8bG1m6F",
  "key12": "5AFSjcaz1BtgfYd1WY6VBhYe8uMaBK1b6JJp4j3YHxknVmFS2ugCTiHPgFP3MNucoG3JDazeHqWuGF1an1a7Z7Vi",
  "key13": "5GjGJdtaZVx8B3DDzz2vBMqSQh7TzyMPRq1mysVKGKhX2Qiqo47oa4btHSknW5LYJMJV6q4D52KqGbgUiDGH5HRd",
  "key14": "4v2JWTHr3UQWgDo3dM9a2FGDBmxwBcsuGbrL56w7EmgWUiDc6Tc5oS2UXhZ8FFyGGcYZBjQhp9xV5cMCpkGvKFLm",
  "key15": "5duLd9y3DQaJg6rgjv7xqa3rezGwcd5RGyrupej29v1sqamJMbdsbxTs7jZncaK7R4yqV26ahx64NLavCKDrcbcg",
  "key16": "62U6QYmJYsfFWJGKTYGKai4hrE5KkqRG2LnbDi1q7k647uqRQVPBPhyr2nQ1pjpcNR1M7XrpRuhSX9KUsj49zih6",
  "key17": "5hH4s6ocoh8WfxrNRGu58D53Jx58Nk1zZi8siXvfvKP7DnHdmdbZhT758kMvtsXEomg7xMuozcZCfjT9QZxj8LfN",
  "key18": "2jnkrscHCX3U9Zvf7FRnjmZ4UntFWNk8Ta8S5Gf7y5TsTgBPgiAP2PbhzW9mpheE7Bebt9ff4e5ByFkkjtnKtn4C",
  "key19": "2zYba3rgjZSxm1pjN93ZxeyYW1nKLy1eBhAoG4eGdj1bV8WiJjoYZNhiwzbpHqNtoZcZRTKPvy3Q4BGAPa69UhTY",
  "key20": "2Fk1Fvxq3wn8t78k9ss1fL5wDWBNsM5UoF4WXsLSuowtiqubkfzggtzrfqcUe4Q5hFJt6CvnMuc8LWMmsiVLZH93",
  "key21": "2upNtLwHhPChWNdU7sm46nfGdSVu2kkE3D76VTgEeLhJVYozwxKUSVucabfhLv8Jspb2jGxfnKJDonWPhmRHf9iq",
  "key22": "4GBmiHGqyviKype3JzR4U6reki7NBH1p8FVPJy8mbeJVKcKXLeTqGyZ4wJRSzb8Y7pipGWwdZeSaJBk9pxBod1of",
  "key23": "4VzhhYwQDiPzeKiz5s1CSAZNRQChkzzzhukCyhzjW9yBTAKPgurMCrFzXLNn9X6w5tSdmaavH4TK9WHoi8KQojm5",
  "key24": "65HZMghkJWELNFMdxajvUuUVWqc5m8eKQ2tMvNg4N2vLoFPwZjQh5bUB85KRJmmfRD8DCJF4bF6VzNUnHwuMo77z",
  "key25": "4WcXuR9bXWkTj7iXhuRNV3Znu5LzUed6Lb3GY6W7oWBt37mXY9uGyrhv52mwkmYRaqyAvp3XBx8VCyTYjnqnMmwM",
  "key26": "3znr6H6wdiSaoXFHKKjwz9HS7zP15F92hb5a5GHcwLg6GVqHcMfa7NvQBUsbgFd7PEvQgN6Xq1K5wDVsrxRo1Gkw",
  "key27": "2MA9Xd52VBmWpuumpBJSmPB4d8ZMb7u6e9tpDiHihXBAAQ6r5MpkWdT6CYKkJ9woWSVhpcwWYsjPCHpCe6UmkfTU",
  "key28": "xnDjUaQr2FHumusAChpNxzRdeSzuUfMcxpSStAb9Cywg4N9wvsDd12PjBffrvo6aaRv58cqJsJUYezyTXSrPMhi",
  "key29": "nQbRoMwhjhy7fDFNjBLJvkfiPvZfdW1oj8EdUrhmXMeG1Pvfnvcq5f1Uz8SiVh5rvNgapmTmEoyxdZZhbaY74fq"
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
