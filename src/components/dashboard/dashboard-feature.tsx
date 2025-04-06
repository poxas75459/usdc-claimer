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
    "4oZ9uWZ2VJHyZMVqWRpfHTJmQopTqAt6ng9ypM1uKJWfZzag48UufzLLnGwqPNEGCTQf2wrqLc7eWqYfoCJ3sCqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26mtZ2DNV3VNELzB6xUffgWawZmZcCTnjGPqSqzw9SDAUfQDw8RwB9xGx8yjbwPP5vrmoTMjYdQBHkZUYC4bzqD1",
  "key1": "3Uu6haq4mCemWu9j2nPstjXGfQS2gwCaroW4Eq7YVfymASPxLJoyP6Aq22bj6axywpawkAkELQ4yp1JcFYQ2ibHp",
  "key2": "4TCL278eF4nBzV2YqGm9TAHawi9K6ubeimk4SjxjhAvnmv74gSkEj5ZNBoCe9YUz5TPYrZRtbkEUoHFcUYHAjLFy",
  "key3": "4EeJ98QXDBQcLvKPqzwryxvQivbPrMzUM53iNKg9bHtsYm8a1PRiiGtWNCSu33hJFJcS9jWXUpag5LsJVcKTrjF6",
  "key4": "3THyTFDsbvm8foj7f8j4ERNw7tuPydYDyZNTkXhEAa51cyivQiPBnksyiRvUEAd2GAYjCkWxrii3VFZx6U9cDUHG",
  "key5": "443cDHURxy9U5FXU5qm7f62mGLxmMQnRMcPtgwn12RcowsP58yuALbkuVegSodfWTpDTXG9nfAWU3upqpADnuX9L",
  "key6": "ocfuVKvptdnkz8JrSc8gT5nnB8vczfbtp68qRFr4FR7qWjAfHot2GVaeytAKb9nMqUeJi6Vkmxt3GayiWCpKzpE",
  "key7": "4oGUA5Uvg26oweKEifz9anqf28SP2vz4CuBYJT8sCwhqy54F7TUamWo8nXNaFNKZr1WwUV1eVbbSCL3yvXFCRgBA",
  "key8": "2gPgHLVjZHhqr6frPCMf4JMdx2bQjvjmwigg3PKTG6W82Zrctm3xEojB5zpbb7mGa4tJ4wCR5yKNMV2CuKKDXodU",
  "key9": "4ahVHh1gsmaSSMigd8myqLnMghZ6zCXRmrUBMowP6KWnKS9xdtrsASYJjM3UbF1WPp3eZ2aB3nTrjZEjr6eFNHLa",
  "key10": "4XE6iyg3JFjdt3uyfPfNqTyYMJnMjSXeDcyNWMHww1dFrKsLjfHX8PQ79LeFASWz6TdYatKGhBik4n4Fnu6WrdhL",
  "key11": "5ho9KLYYozE71nWUCMnEXzsvC31mF3TEqYq469dVKXURKZVodE4xRqCVBqgugSHsfy39mzkHSU42uk2yWrCX3sBp",
  "key12": "3unZ7gS1KXFcRJN1E64YNFRFvLPMt6YSGtx36CbnLatL1731h8619rCMkeLtrYNMFSjCE4xX5r9Qz2T5TuhegiCa",
  "key13": "4atCTaHLdLauQpdSC6ZqtMPiq6VNLagneNXtove8nraYPiF7tkkh91EPdtARQ7vPFp9x6zM7nFLBQkh4afUKrxwt",
  "key14": "3V5EuwMKz2ZCrXqzzSGTkWReDPrCQKicH8e6mzYabGZsWtn1L9P4e9fb6SEiMeJ6dnmzZZBHWWAgHJFRnkAWq8yv",
  "key15": "5Uq7uNran5U1TeNHSnBQxUjbHQcPWAvNQkfoFLYEJWzKMp2SPnyrfeKYKAwX56PVBQUCmNn2ihkMSrn2SwAD5DJP",
  "key16": "2KMajXKQCjXkHLJ4GKnDniq2MQgDinHWkBsWxPw4B3QvCcRtLeRmgX8EBbA1QCvKwLGFMTQg2vewMzSQiY3u6fxb",
  "key17": "3z66tUFoV3VoF55b7YGu87vqGzUMyueKdkFpzrMMBwV3G8JgJycYF2iB36AcgThxMR6e6hxZLuUTMqLBadWb7p7E",
  "key18": "3xnERktSFZgYrN2xtP51mxuFNYThk9x76SGkiMJgHKH3K2wuupLosCkFHyHfE3fYLcsJd92Lp8dURCBeYVnBjR8M",
  "key19": "48gfMd88qkvaS6ovdvYHRyCNY8uoXYwWnb7QQdeNQ4KfNwVcxDqF3Rjx7oiiz6Dx4thVw6nKoMuTm91ZRhDatto2",
  "key20": "2XcxZU3AQhWFsQe4XAXJ6i7TMxvafPRPdryQYwQ5idJGUVAir4eTpLJnxQVd7pSmhzdZJRvhsjzgE8FCLqrRFWHC",
  "key21": "23JGSs5vkPYEB9kuw4zfAHu3vrgDVTaxhTpaxZKGWFcjYj97Lv2EkDL7Dpby6Evsj11tEVYU3kSj3SecJg5uH46J",
  "key22": "4MRiz3tqYgEsZ2TY8AYPjyM1sX7H9cvVL5WSUWjdeC5icckKGukeKhzMaQm98vocuPXL786fjGJK6Qp8ymmwUnrC",
  "key23": "5pB24gGbssEL3mBemYZhzrRmNMBWd99bcAeuGMKqBHu4zzbdZqgjnJAoiLWsmZ6r5V1w1UVVE45mkK4ZVvbVqanF",
  "key24": "4wHT8h362nTeSiZYEYfPcxn889YsatUjJbZFWPU4MyFFPms2DJLdr2RT84uwyh5tgWZ453gKPC7mdEhPJtjphvWL"
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
