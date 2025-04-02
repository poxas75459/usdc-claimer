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
    "5J9k5VNmqd3x1MD2tiW4qmUJVdoyjky6MqdQ5crHfC6r5aTX9Qkx74ccheEAot9W8FpLxW1jS6QzAwCi4QJPBY5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rLzKokTWaBKNeLDZgPCf7sxqZmCy5VoDxrnct63XtzP4av8KWhdxiwttva24DkZDnkNHVzhEqLeFssaB4z8r3fB",
  "key1": "4QHEjHVLk4WBGPGuBRT47ZUyv9gH62ai7eN2AfgbFLvZy1YNrZnJv1thMUPBWkZ5pm98Mc8V3Zete7hzUAPcCXFv",
  "key2": "4iLoea9rZEkmf9cwRgg9JmV81YhofRuwcGxK1yPcsJ2nUoJWdksxqYAhHuaJiL9Rq2HrrsLq82TU6Myi9bTFB8Wm",
  "key3": "vTgfgvrqCUooM84T6ChK1xzkqJT6xbJt5HsyHkYB5TtaAEp2My5ZgYoNwRfphKdWSL1uUAbLfa35GhEH2bvVLgG",
  "key4": "3Rwb59gFExYWdD8c9T3CRGm2kPeQkRxyseJ9wLBNPt8iUK1Vow3fy3z9dPCxQmVYFgZSBaYSv5QvQN36dW87BPfp",
  "key5": "4XAccZEdbxqdq5dGuqEZt9mY491rtHVwyhyv9KMEmfFBB9mUJ7GXKHcrPjBG5xPEcaM2XkUekRcUc7WvaWQ2z5Ry",
  "key6": "3A615RD3VVnNRbPNwqEP6pC5pyYs6yxoe6wjWQURz2DdxRaREpBSYySBB6jBVUkivHjkXKo2yYnHUYnxmfD2rkjw",
  "key7": "3YKNTonevLEZRCqrrQ4SF8Xnw6G7ovMo43vSH7csK8E1c9h83qJWuphkpjazNiL743gGszszP6Qn6c1Fxs9T1fmT",
  "key8": "5zXjVmMRWZ9YYCVGTmQkAbC6wB699nyfhukyK9sMfUZvxZAJTMkEMMNhDmWz4BrwjGAD16GP2Q8xC6VQ5qCXzbv1",
  "key9": "4vmVwAWX8Z2N3H4jATResPfEKEbRzdeh6tKwwCb76enV48JtoaUPFVwG3SQwWq2tyYWE7FTLJskeLpnYqu7eNr3z",
  "key10": "4Z4fk2gaHKXNUsb8jzKHmN74W1mK1y3TZBsquRsQgUAED83YEF17BDsQcqJ1ZdRCJQ4KHjjcYWr6fVSNsHaLaiCd",
  "key11": "3548vx19WZ9d7WBxqPu6RyokP5mhzoygVqGTvPbRSCn4VGbiWNCfjKnJzgv5WH6XtbooexwYZAPdHi9E8ZBNihNv",
  "key12": "2xwCynpo6PXig4MKdk8UAKYXpSuG6cib67wHs4R9nCYFyQrw6uoZ2nVzXaff6DvYZHduCuwVFTPJADVwA8KQq2Jq",
  "key13": "3V7FTFJU92CDc9brwbC27iAqLnyYRnrMphghehvHzUFcLg9sZo5r7NdZbyAp1ReWuexBgTeyaLxPJDCeABpSHXQw",
  "key14": "6z9XcBWYviTVDePk8iNGGpJLLEhv43tEp6AQsZMp9zP5xMboEZucXtByrciCqnAeT6G3H47NA1oiPGhaWs9KHLz",
  "key15": "4nfFMqC4SiEzKoLdgot2rPBtc7fM9b9enTfMgvpQJhaVPq3ygznx5wytaEAqdTzuK8kT8ibeR69nc8xVj3Xk1tC4",
  "key16": "4ypUfgu4vca1Y4v71iv7QGxDQtr75eoPz9r2sjbJ3UjpbbTM8VcUfj2dzdgKzNyNpa5b1XMUvvAdDqR8Um4aV3yz",
  "key17": "4LrPobqazXgPrcK85cUb6TQEJJ5rAPoc2fTG1xv88PCTnNiE9w7hjiKxrFTUZQyf9X77NSLVnr3mNcTf97zxhi3Y",
  "key18": "Zy6rFs37pJyQbtvz5DcC7oD4DXfdXk3LWrdGe8ok9SWjTVUyb5GseqN8PFdSaZbxfVunFr1jkSmo9rmY19fMfX9",
  "key19": "43nKPqdgMwW2hr1uM1feyTy4bG68chXHKaucFKy6MympmDGQZDn4qbx67BoWdKXDfVEvVvisC82xifmkK83MQmxs",
  "key20": "trBt1Q9DYdVrimwiLAuSVgToL8CK3sNopSriUghYZdQu57XFVJ1DZDXm7iFjScKM6A5cCfYWJEVaogQq8hDsLHU",
  "key21": "5RNgTaBTJKrkvqQQPd17nVa9oVetB14iQuAemo3i1PHXVJbiBgF35fa4ztBnZugqHfqsFaqKvVL5kWH1gEwV5CJX",
  "key22": "31fVTxSPKvf2dAwzWWTzyFi7p4Gpixm7bcg7mpQ2nWipzATK5XZaLbg5m43R2WfAZoYvJG7E4kA6mKmM9NsPKhv6",
  "key23": "3PmNuSYDUpzVX9tddF1kGMgJSsa3DR8fgtqmNTwr1ZgLSqKkKx2UVUPnyhfZCb1AbtQPhGx23QQEoo219rtdsMH2",
  "key24": "2WHu6XK38aJ8MUPSiVaPk2C6Lgo3SQ5p3XywzLTgdjxA4RRJpbgzgeCfD6aW4tCgbetEgJBSqVVoiAwKdMTVnPyF",
  "key25": "5YGAVuA33qjRnZimCGJWN8rvHRy7mAupZQhfuj6ZK3RjLNCvYPc4i25Um3TamP91Sa8JUrXCWzeohuunnP48xDJd",
  "key26": "4Uu6uzC8EDNFUtwjN34TvCa8f33Unhj73Rm5geSajPVPR2jCzdD956yMR2SDjYak8AJvrUWUkuMVUAf3xLMcmvV6",
  "key27": "27BSPBefjKFkdfkYt6WEWHNt2hKGrwG9iJtApkZJyhTjn4ZJfjFBmM4S2sW2QKBXAqcjzufHesCortp421q9obBE",
  "key28": "uoknjjR3ZaKSJypYWadt8aogW7oJNcmLQCSm4RQqj7sGsmRnPVMQiRqPvsLZmVEPcFCAcR8DkjnGepfokSTp4MP",
  "key29": "4FKk2emPyCAeJZqJrkNNycwgQhu2EXpCRnNB5QrLCkhBdVeD1oM97TxZV44FamVtQsf4Mpgr4dH7JsWpDFwEH6fp"
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
