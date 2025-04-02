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
    "54aMDTt4vvDTpMiRv3HA9zN8F7raiXQ4RsXkzz6FpCUBFsk2VrGgjqJFsAMXzqkVmEYnobLKD3DzBxzPWzSNNB8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWCvmewcGSKqrmyW36ciqBg7t9bTZdyTDTrMVJgvmABfKsNVKSfEDTPUx4Y2X3y48NnnmmR3hp9t69ifDniuTJF",
  "key1": "4Jt2YQmg7qwZJooBGVxbAKv2t2ib8sYVjrHhoNgdpJf4kobxWp1z7LQg513gVbCV3SDMfS6uxg7ehw6Tz7Qurj6e",
  "key2": "5qYCyJe3ejKJe6GhE6e6S84MLEWZTEVKZSh89vLVh9pNWB2WDqcG1AHj5jVqe4LQBh1CXTawQrDrbzT4wYuiNLXe",
  "key3": "42DNoYcjTTDU47DkdkiiN4vAu8QmqTNH6QJ1XymkbejaP8fSMsbW7a9At6NnbyNTwsX1DKuV1UKMJhEqKwHhG7zD",
  "key4": "4i5sQiGGmfcAhS3fieGkad5hSf2NQCvkQ8QYdg7Vy2KuXoQSVYL2xFS4gYT6PxdZxnYXAPeL7KYNsH2A1K9Yhokj",
  "key5": "2566t5uiDvLSKdyZyviXqASe29iArnAL1zktXvuzUbkXDzFYeSVWXqGXqDZkfSGk7kyTBt2Rhsii3cdKasFhxG1N",
  "key6": "5QHYfK3xJRLWjPTFeGwwR4yGCdGUPjqoGPDhh7kVS8ATnCCqE8q3cAs5Jh42mrKs3qxXwAr9zBDS4iw4Qjkj3JgQ",
  "key7": "2YXfvqxmDS4hCH6STmjL2Trm1eV9gpoJhRfbmuvGyJw463kQCNFuLnCPAr8qHRwpUk8yDTk1uz3Z5uEe5w9GTx8U",
  "key8": "4SNGSAbXsF2ZfKCHtGwMVAagbcXh5KwDmk8toEBfAkPALf1MtoH95i6z4sGxFKEssFLM5Bu56WzqG1nYhATLFgXA",
  "key9": "4J3BM1Dx6ktpkH6jhFcZbsAZqGShsveed6vsV9jXvFxU29dzz3SYu1JxKXwemZPX9AtCFRu8ZkUQVyiqdiCfNX7u",
  "key10": "3jib5iE3swaEcyXKRnitLm6VmGDUVos7ww7LxFqs3PrRxDDAJ792vFB2C9WqNGQzdEKx6Fz5dQaoRZnPLM5radVF",
  "key11": "4zZYoKGGUHq3AszuEzbP4FkX9wv8SFbnB7XgroHeA7hJvWkK2eF4tAG9bzsmx5RrMD1nG3kjssaTkg1SWW3XSLyT",
  "key12": "3s3Ly3rkdVumodTZfRZuUX6hBmCvKpgJUDZfmFM3d9Hne194Cm4miGRAkFD2xPQ8pC4d3jvWZZ3nCJF3d8sy6wje",
  "key13": "3bGbUYb7AYFTUHB441BCpB6VVbHnA9UxokfVMg88X51m7ZwhCGw9xNrnihPBE3WpdkFS55zSqQKpJkvNh7Hojb47",
  "key14": "2sx2xR9DMVLjsPXioVBPLQ7ZLNGuwSQD6JcRtmVKbytWVASq4DF3rPX1a6mtVHckwpzNoU6ykuCTfASt8sBmKuwt",
  "key15": "2AJWgDaBSquiCZAtx3KynaqkcBzcaiafZ6fdQJ4R9QEVXZcF2MtV3xKrjYsNL3NFpG8N93uXVMyun6xevAoNwhxU",
  "key16": "3ZYhGCntnXpsZW6BSHANU6S8W4mrASCFmYE5fwamuQmgoHm815qdZVmVuHGQ6LeZUHw2uogWFvazzpcBAYg7Z4tK",
  "key17": "2APSSBPCK2atu27xnwXLjMBU6EJJLFBG6vckF4RC3XcSH1gMfJohYtZyNcE2b8TAJ3Bk2JNBekREUeaKUsLUsrjt",
  "key18": "25CKYBLXUQNXCNbC8KvCDiQh1NgYMvm7zJkFe2DZaSL9j9j7SDe8fojWXUtK6hSGwH3fPnFdNQBM4E43EqU1qKGT",
  "key19": "3YF6Cd235jMXTD9uyyCZSNHs1HiqqtfmjCNomuVKDvUnJoAqmnyxAmZfMvpGr5MQ6UNoW1WkzZRRaj8KN24apePT",
  "key20": "59vfQS7tPkix8rzZcHuEqZ8befC8Q7FeWVH4X9kbffPuvzLjcEt6b23YXjhzzQ3cGUc9vTXQiVXY8qTCBzt4hwG8",
  "key21": "3XxYLjKokfc6qhMYjjNSy3VubLUehgvNzafdWGDJX4jCcZqqh7Xs1u21wmnqXstun97VfVZdUWPCGvoTiQ2x1tZJ",
  "key22": "22LZQfnbxVp828NzXrL5TqhMV2R7TSCzQhzxmgyYLqEZYmCCjycu29wzdJnsgYY7priRQ1HA12w9eiWoD7tW35YC",
  "key23": "cRSUntYvQUDEt7sfLANEbBbr65aZheQhE3rkg2BUgzk1htBscGXvz6eb5n67U1PTz6fkRut51Vn1LRJgS3qYj58",
  "key24": "34eYsCsMUcepLMPiBGjfLSeZ4qxMojkTquGRTHtFEYCSkxuGRBss6MfQBQ6FCTPhV6mZgR7R63xoh2G9mnWv3VKz"
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
