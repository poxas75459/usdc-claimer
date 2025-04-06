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
    "63sQeoftEbZL2Z6owbTuts6Vf9wciJuUD2a6WSSTN1RMpFMAUdCpVXUD2ZboeWQmU7AEkRsZdyMMFqNvdKYQyd5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YyjzB6YYVEmnMaMtA1wHjmWxr1zyWMREJh57RHbv9DpKPL4scEMYRUe3FVFrqFrLkv2BTzsvmAtBwURM5Mc7vAv",
  "key1": "4dBQGyhEFXsV6Kd7TeT5MGMaX6M8K6YZM99FzfrDLKDAtTiaTbaXhCcWtK2i8zw9tGEr6C3Y3B9rtdWxRskXVpD3",
  "key2": "3EFbYhcd8MkJ4vohCN8CQ9Q6FmPKgRMbBWzsWgBW6EjJJN9WjgpQ2RE24DfJr6aVTTNftgdmN9JU22KUHS4NZ43w",
  "key3": "4dEwjkFDm2XVBpss2JR8ySDWUy2yNCh4gEAcKcyun2a6F3syQyhp1EitpNW9spfUWMvzWG5NVBcCuqVCv5uQPiyg",
  "key4": "3NeTdwhEQ6W5gWpkYcFuxT5wxsAx3tgfUdJpRSJVEAZnRRQqe51E7ERbj4VtgUbaPEPS7iLJu8sUyR3mE9agmUQa",
  "key5": "4hk4cQSaEuH6gqpfLf6mGpzuC5qL34buhsEsmMhV4Edwavno3qvZ8BvJY7TzYCjYSbwQXa5rpbduBo8eBfAcwzm3",
  "key6": "kcyKVc8zNz1KbCti1XG2XiXGCJoCJcyioAPPtccBnZDqASZXaDAMr9w5eq77Md1fcoWXLD1LDFwKysFP42pBNL7",
  "key7": "4uCu5JV5FnT7Re3ebJq2YxRzNiCFv1Kr6M8cNTyov18VvqecV1J1ey972xq823g8vGBgtpDYNUuG3pYjTnnNQJFv",
  "key8": "46rEw4STC5pvdxiBnxgsmteszTZmV5HQAbgzu5HnskakFeCuVeKhzQUdCHhpipyG667Hnyh8ayJ12XBCokEdnwkH",
  "key9": "2cxzwr68zJnjwResWbAeKr4GMdGUgqGfebJZDnfm8pb6hmhgByzw2fPQehtcL4oQTqziHtpBtyEjLVhoQ2m1Bdeg",
  "key10": "ySD9Guqq6XkRokKu1sb7S49UDvi3FgiDU8KD5bxkwoYUFvcTZwXe5oBgvnSGy4DEFUZaiq6jWwe13oHr1dZKtmo",
  "key11": "5msXBd3oET3G2bvLBqFjTnA3YoxkZWc4SBg1oUFJqUWUUu8cwZXsaJ6Rqh93Zq2Lu38H5VkLY3rmbzdFXxMPPNSn",
  "key12": "qHuiGFeaQ3gTggf2uq6bPArM5DxNDQYTXFJmywXyHutnK2JwkGtsaLVHSwYxK3u9CWwnKbSfsnys2ZFmB7wKHVW",
  "key13": "3vZ8fjNGbkByJK1B2pHo6jJ6TGuhQT7BbbHhiDbqAR46hzTEJMqFpZ7hT8t6oVmjgv8KdsyRrfMi4ex65K1MzS4g",
  "key14": "4YDs8Y4dU7oYiTXcqqxrzVwH4MVkEfDub57nDCWSzWp6xpbfBALpQntaLAaBAqqLDbf39FgayfVbhver3sXMZxj2",
  "key15": "5dEkUgyXbNAPWHtjyZ9kWaLta16adJkcij4gbsijLkz4pTuTP6yr54fK6WZL3zzBimwYmeHui6duGrk28itQBhj4",
  "key16": "5fUNx8CWp9KtSFhz6mC2F3usyn7i5f6Zh83CPN8JoH9BBxcibMRkEcLEUFy5iN5HJezuH7Sfrw5zS9y4T8Uq1ewX",
  "key17": "4nXWKThZPkuezVm6WnJwNru7Zu5JXocWbYPLrcpPs9jDyR8bvy8pHe87yg4YgHsSqyuh6L9WE1FF1AEnD135RRfV",
  "key18": "2i8pBm8xLbGNfb2WnLHKFAGqAhnaoYDj4UGgRxGhe9xs4m9BpyeRNPt4sDrWP7ygvdCm3L5fwSGfgHgqNgesqJPu",
  "key19": "4iw4MtCYnc4oZby9FhY9gAwaszu5ofxpH9edpFRNaomvSjycyPR5Qj4QLcJzWwvXpvNq3PgTE4ckHZVYwE3pzZ4L",
  "key20": "4UrW27kb5haFSrftZYFgjvrV63t2kuPawHu6tHAXwxcTPexdSCjofPGLiDbTEDAkkpjXDJk6NpCtC4fXrrHMKBqM",
  "key21": "5FoCvcs1fkcBJ4LhqPECJ5xWGwraZxhrqtVm339bxS7G5mTCMBPq6sYjPZcJuk93N6BCLmAPkpGPDfR4bJuEx4k6",
  "key22": "4TwMiMDQNJXqro8B7cszbu5ZSoXV5vLJDdyJATKqzbxbT1wjrjeHJjbhuWf1eVXm9qcdMzX6TefwNGfUVCQy1iKA",
  "key23": "2q3Fnt7e4W1ATxPPa4fgQATxveMWZosMNEmo3v91jNPUKwmvcu52oBMs3NTDiNZhWZuXokjNMm7y6LeTLfAPWpcZ",
  "key24": "4QwJ39LdkuRn62Bqr6w8AGbHiANZmc4PjzkzTcBqUURaxaJyQNKK2YG2CkjKx2VrCXSUTNZBuigdurEuLvE5cnvf",
  "key25": "2q7qSXxbh1BxixMJfL9veUx3uxYh9FfXiz2b35PDc54yE4yxAJpQAk3U8KJmVKMQjAcrrpK2FitWe2nWb2ncaki7",
  "key26": "4wizv15hJyDYmFmdv2Mdn5RgEGAjw74rH6US2UtZgyJimjRo28Hg1tiyCndHrdLdkq1YTxGAE689m2dBgFwDLypP"
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
