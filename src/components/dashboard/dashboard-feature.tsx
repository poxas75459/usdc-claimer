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
    "4F7i8RHLrKwZfYPyasweehgA3pwyQrkQiBx2WMQtTmTXFUJZFVbCaMpU1U6ECTFUsQgcxEtebvmvpEJf5morR8FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vjwufw9ymXqzGiwhTYEL1cq6AhsUopigdhJd2jJApTxiNwyxQe5undxCnniNMnJzsmYLA5AEJgTiFnnT6UToBAo",
  "key1": "271imUZH99BnePyC95HVBFtbr6BGgKJ1BrMTEcmvyjGW1qVhMngaYaZdoGg8DkuBduNLrQp6eR8z13VsGzwK9Lqw",
  "key2": "5jTmAGBkY1gqNuQQJTfGf1NC4SUK5p1iCwJYVE5zUsuSVueTrPN3X7gzXZNmFr8sysUQWhXNgDv1N1Hq9G974AMV",
  "key3": "4J4nFXHjXzBBjY7YpCqf4BzwqfvQZWwJGzRab2n4G5Ny9UQkWcJ6NAbUzXgHcmjGquUwXRG5xgQgRj7fN4QRHGNT",
  "key4": "hE5v1pDshC7YeJNcswbohxK2fsQKkeGMxcFXU5ukcqCWbSHdkf4JEuN8hUrSwLNkkQCniSKmiosVekigJFc44Ki",
  "key5": "3hhqQiMNotsiYYDsPrNRKE8EGifa72gK3deQ9UXokD7ZbswTYDMwNm3BR5BjEX56RyfuZu6Bi83yAmeKcAa9oRHR",
  "key6": "5wMQvc3H3Qd7FJa6hyLiFKVNFr53seDwjuThnuxMKwUSFFsDvLQ762emXZahvdp3gcMKhbgeCJKcqk3t9apdUVkn",
  "key7": "2yFyLuvcG2GKzs4z3FqGxRnbACv5K7nGXJoC5ottEAHnBLuVxmNebz73h3wS6biFjpJnZD3hVV7FeinYGygaXkFH",
  "key8": "32BwM9hzEUKzsZT4uhkxnvxpKsjqqXpBRihVJ4pUsst189XHjbhFkRdj5KmCeDchF5XqJqsdQqaeaCPeqS1wfa1P",
  "key9": "48DVLovzWqHwjdNvxW63z7PXpc7bfnrgvnbwsQnymSUgqAUmncSeorC6Ca9qjzwbZPvhPdFt98cZnKgzdwaEitWs",
  "key10": "4sJzQcKmekoXL2DBpL88mADaa46CnZQfvgsv2ffLWzbNpvFfiUEiJRNGNyMhPyXjSWVxWLngRAZPXVQdRx5Rxjo8",
  "key11": "2FiSYJGiSqjVwxAvTFtzjwVjj2or7WLJxx74p2d7PPcV5rwgQaCrM3bvUvCLZWr8i2WpaC9hXoAeXHDit1aqdJ5Q",
  "key12": "5XJZGp74zvSomVJNYNZhekrudMMScaFVW2G7e3mHcCCHUQSFFCxrx9AA7WYuZo5WZqhNez6fdrYEuLGGYLAXxAdj",
  "key13": "nmSZNuHXrcXSuE6vicTeunyBiMeYMys9kqpZpLjTfpPQxCu4Myu1XixP8NGZcxHPxCuGCnNVzRdANRMzhVdbaHi",
  "key14": "4hpGGuBuh6cCy3d23EzuSGb6TsT9VB9CpeHV7HzFv2BKFmXPPkRU42f4s76xBmruzUCSsohDH6ZNSs3NMtWHNJTz",
  "key15": "64jXnhQjjoHyQ3ogXtgPEYtHGW66SvkefpcGLQjnBy6ToNgUJPzXBNSmPyFFGnVR4gme2J7YEyjC2a6GWCSa58X6",
  "key16": "AymL2w4qDgjByHGBYQxF59hzxqE8i4a6tCJzWPKQE9TyFS7jUxoqTSf9bUPh13ptEhBENRoiPCtQjRpvRDgCto2",
  "key17": "2p39HKdjV2ZoPqic1nbGn4ab33WvqLDuLgUgCVZwaCvHUT2b2aDNa5u2yrS2kMDxtz17mMKPyH12iDSkk62D4rST",
  "key18": "4uUnFkg7MhVQeg6N1oGXPpWFgpRQGE462L3DNAnQMeFfwwdVVmJftUPc5SKdxzh5QFmw1k9WJictZXRTNfB2Xco7",
  "key19": "3dDtxhDRcBqFpXy7hApEHLNN8eDSGoWD4Lds4PnsFVG49CPR5Rk6XttH5nTXnNU8VTrJjygrNVr6R9Q42LJrgRx3",
  "key20": "56XeS3D2Eaqk44HSKzWNHMSQxNTteYQ3ypNsJhH4HyzgAgz3qe5uxXCTFqQkBTvHHfU5sGQHDF25P7TahHPFkWYY",
  "key21": "4uFoLd9XTXHHPBH7VZom3PfVydZFC7wvrcXy6uTTKYrYD6UeGGq5W4r9jBJVtknuKsAhEX84czh9rSLygrcuUGHf",
  "key22": "Znq8a9oupXEudNoJYX1WjLh6D84JCYEPw3oQ8gqyx1cEfS1WufAjJCaguEn5BoXYaVFPZQFdnq9ESHtWAJxxVyt",
  "key23": "5FUkq9CT8HUmnCnCAs1nuAgyNgnvzgBDDrgQJKf8XGzuDP228fxmgGuBetiFjdUSdPgFCnYXvvuznvCCY7yjgHj1",
  "key24": "495GpVWAC3ZgmsRducnskNoBwdJ53kdvGkbKQBxwFKjEjoviXdX6sBLjKC8KsBZ2iUqLMRvbdeJB28qyRuLtYZuJ",
  "key25": "4ZF8UWLXDNoGoDmq8yNTdxBujyvqezn6iz4V133wt1V5137RUfpCdw7vCi3Kpr47jzMjuGyn2WijQ2D2Ga3gNFiS"
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
