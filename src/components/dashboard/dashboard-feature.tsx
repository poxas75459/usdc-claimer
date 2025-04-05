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
    "44fVn6B9TAQZNqGXWuNsAyNntZLA1qGLUpNuweGTfLT5Xx7FbbFxKczZe1t7pEEthBNNk9SXJHMgAUh84Lhf1THn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sbBaPwg8D83wntjaPbDxnq4aMSwDMVBkYR3J5AKQt73PfQjCuMR1CWYwzkzqr6z7HCy2gsCESuUZQjA4Y3ddfaC",
  "key1": "GidKBnWkfc6dCW6f4NgrR48VPnxTXMuShn5niCytWKG6fNBaM2BNDEmSNEMLF2XHZ7yy9ubcxehwAGed6WbqYom",
  "key2": "4s5nK6K4akzyJS471ubWXnpvxD1XuwNML25RmQRGrfxiLLnpTeSmq9mLzHe44fRth2jWqYto2jukLHzPc2Vwk7nh",
  "key3": "3LK73zVhDEodv71YGXAf7DAJ1tXhrMYpCb1yxZi59Hi16Vb2TE54BExYRhXktHFXJYWPZ3rPzNaLH4bhZ4BHa3NX",
  "key4": "3PcP8vUqQPJchbQjqYxX8KcBjP7SFJZe8DAaZ6QDXgtfN8Qmpc49xNnUWG1EtnfxTNLMbrz9vkVWWxKg3dpXDN8r",
  "key5": "2PnrJSBaT8wSnLKMLndbPjDwDKQsH2t4wJJ7RbGDnA1zjzYGGeq7ofXTjpDET7Tttdebn8r6kno7dM7YZXa7fppT",
  "key6": "4iL28euyDR64RiCKSNcY4gyZFFwWRxpfkVubErM9EgipXTyrF5jL3pAo1XXhMidYXr3WZCu1gvxrfG29txX7P851",
  "key7": "2asdYNWAYiRMtdZtAtUEP3BbkKvir38jXxdE9rQhHTVr4rxHoo8UA5SsqvR2AvK3SpUEV4Czh9tJ3QEvgNca6nLZ",
  "key8": "2t5RZCdvAtA6YtP8fRjH1EmhF5gfSGbj7PPCp6wAGh8rJyiXzHsJP8UqDZxcg3q1wwcyYQbyW18qygnHtVj3tExv",
  "key9": "4JUKYErS11jhpW5RRUU7QwZqq8ie9iHbDc2hMmu8hXJcJyxJHGQyeTiCBKaHTWNqx8UJh3kKQJBKWT9GeHvs3SYy",
  "key10": "5rgNqJu3BvCwhGvYgFX5o9F18xLRwdYxA4PrBgdyjLtjmBLTU8rMZQVB4Wr6TuG8pjNYTFVZyxNEMafunxuapFh3",
  "key11": "2UcvKpEN1xRs63c2dSCASKkwCmHTbPio42VoYHQUPxfS7SuBxa4SUDyoDtowsvU94HUNKFoH6NV5YfWWWdM7K9bU",
  "key12": "2cXX37nMgU2Y84XKLhTVu8hiNy7ZvEmhCLA8oP1KWCHeSzKNNRUWs3WgHnb1pTx4c4LbhEKYGC7F5jhXQfJGBs5e",
  "key13": "vtCPBhTpxXnhUePzMRrqPtZ1sMy9Kxph3mEwxukTWebBSKTmGohEPzwponga9WmM4x4dqqDYs68FMSQkwye71re",
  "key14": "5T9jHJriLZ4rnMUWxPQFsVbKJGftUJGSSUyFcPCoWoLR6UEzAbYoL7ttQeHqifLSfY19PZ98SWhU9hMdZEVcdoUu",
  "key15": "5bR9KNvfZQ6QwSAW2EBwaqj15SsLBmaEtkDe3tVNZ7CCzvZEg86dShL7s5Qtd11vdLoCnJywkgNd2CdksAw7A9Uc",
  "key16": "231gdWdYT7ajXYUNwLtSWiySyboKczcKdC24go15gBKz1S57UZinkj59tJLa1GM1axusG5U1PnG8E5L9wVLSvfWR",
  "key17": "25CWPJbUSuDe318jFwtbwgSZb2CS2JxP3YiPQWgRAofTgtCqdUAS1DiwQqeNVUBAKYRAJLV1888ETQdBCzqKD82f",
  "key18": "49EjosahMjmiTqQFZEWa1pmrNPofQk24i6yuSYbKunnKWQQ8iWgLMBGbYLK98uqTGofR7gCYV4ajssi41oZT5o7M",
  "key19": "5B7p8KAUaK5nLrne8oHNx5QdmFjqr96pjE5BfgSXccotj4hGffqeEXmSSQnWmAT9Ng1UzxKGtMnPCvyy1Bx9TgRw",
  "key20": "4anvgWuQLo3jBj9Pm1HMy34L1fbpSTfDScn6cgR9fT51iqqvdCdUy22Baox2zAnWG9sxUEX1RmZ294DPRgbvYFdf",
  "key21": "5XsdkK1bzRycsFZSJT2PVzfAEAQavgf9QJjoSJ1faBoDEURnh7vB88sDdDWscRbDwGSb5Urany1zViXgzX4JR34q",
  "key22": "4zFXudqiJ3W19Vxf8GmXS9siFtjvixpNwtgb4TwXvxTZxLoCx9q5EDzNXATDYtu898D1GaxyGF6Zv6d68aD5hrmZ",
  "key23": "UFzpXQijuhc1ZWZYy1GVFnjAi3FkctUfHTzKi4NczED8woV8kM7nfgpCvcPKUKY7jrYeg7dfB127Lc8tqhWVkDP",
  "key24": "2R5JcDL1836iVZL57D8hLo5Qb73Uwx3AY84gT1LcdCdxpze2RSn7i7AbYWaTyqKUWNJKR7Ckcd1Y8nJKjwMjnEuK",
  "key25": "3PA9VwMSd5TMCGLrcm2uGaiViW9u4E8g8opFneYx78aYUzipNHHQBARfA6ySU1EPDbvpQ4z929xxxpeMv7qhj93p",
  "key26": "5FZEun58TgCGUPBrUCt2g6uditeige58cXWQYhjFAtjjMVYMgCVCn2u3m3xu49eSrP9wci34oXUC4iWmP3EH4KJw"
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
