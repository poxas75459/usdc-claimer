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
    "5KWXssLYWWiwny8H3XRX4x3oreiXu4hjqkdVLheSuTc91S2HvogDVf5bhBsXbUtAbymsKL8puaNLCayPjTixUcwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c5UDpbS3evaounXxDWjcPt2RH9CqyeT9n69DL6mr7zRMzN2qyJs3bCv8brP7Fr3pia32Q5gQiSNyCwKmXhNdJn5",
  "key1": "kyHhRPhzNNV9NcFP1qdVLpi34sCM6GTCt5e8FQ7yNP43mUdSv34Lrc9gWf6oNENCSR9dPHa1o2Wd5DYJX4C9pjh",
  "key2": "385uNBnBQYTpsYYkwSPPBPQyPt3qura1L39qJSja9cQdYW2VjRjPyhDu3UXgsZFj7ndp7jn9XTzek7ddANVckDAZ",
  "key3": "25vnpFKcSdSBrtbCCNuUqX1483Ka2bDUexeQvpYXzwBdr8SK94oiQFnYvfZGk7qVvEsX3TQTsxi43YaoEAz1E9rf",
  "key4": "27p2swv8id1FU46wZE2Zb9pLooQgr2NPAHX4GssY5aKNPZYyiUhWiyLKnWB9hmzNAApocPifgR2A7Zd4LSowBqsV",
  "key5": "shdpLtZaUrc789nqioSRouzGEgESyxFyFqckfwfJjvtTv7ALQFNyynqJ7cjjREaTTttWoFLVV8YUeBAJKWyb9XM",
  "key6": "56gtVmjM1HJWyvJKabq7ohh6J7NoTFrsh5YTrLFzHYwk2obbaNvqTC2P6UgigJ63QuiHDYKGkmVrWKdX6c7T2yQP",
  "key7": "62RvKWRSbNGtXkj2AC6gNw6pQF8VR6LQR1ZdQ2LGQShxjW9c9Tvge4mMh3aQnNep221CJLtut2YgToCLa7kZCP12",
  "key8": "4v1JsDWWg1ao4QYg7CmhQKkdZxvVJtmEyHXTpiUWHpV1X52HHf8ae3yKQGkBiq9VGp1fFWLgkyYAeaXqQZ54eDw6",
  "key9": "5NAWQ4jvHUkDKha4kb3MqHyYe7StpBCAbKAJgUBWm7SNas9cwy8kS9VD5a46bzfG5UNa897EYApU7F3k7i2oB95Q",
  "key10": "PjyRWmAinBN8xMEp46r9iikPprUnyWcNUo769MssUcyTzsQZdv5vprvQyrmVuXVP5eNQSPr4TYsM686W925vyac",
  "key11": "Znwt51fH1KwHadQ31zowp3gQsCHYTDXzUXpsefbKBJctAWt2zKLebtidhZoVvHaxAdEdFA19Bi17cMyXeNq9ErM",
  "key12": "4uz73DGxnVTA7YTSDH2SXZqgN7U85PjLjBBPDcBag9Uz79wBsjTweo2cmP3dZAfRPNwsJJEGrShbX5zqWd7GkNhM",
  "key13": "4yDP2ymxtLWH1X3tU27H6S2q1ENzkGYdum3ScPJwMEEYnTS65XcZ8uCioTiXZU4avnHzb3MFDZBUnLgxRb4ezvZA",
  "key14": "2Yqwov4GHSzN3y1FXNrBsgmqASwZPq34sffrSR3xEafh21GXuEWnF25wuZvuNr4JwNQRvVJ1QAgUCmgBgfm7ef8i",
  "key15": "3TCMFwParuNHAY1hTtDKHneR1ZzxeHcqTQLNnRRBYkvdZvUyCRtysJG23VTJFYreWFtx4XNUfbKLZgGMGJZu8zFe",
  "key16": "evUXPd3rVR2wxLL5tfaknE5fCioGD9VJ3regDbteJsKb1NsfWJBov52hdj4SMRUv3HY4j2jEkdu7DzBGeJwn7yb",
  "key17": "21Dki2nhAq633i6BkFgfbMYDyVmsUMMk5L24hU71V9FHT3Rhg3xVD9Hv73V1x3qwusR8Wr1eoREVJfN4vofSsiT5",
  "key18": "2nVZmWehrhHQL7FcCJoAAXwNZABZ6QArDHhgS3VgYtyp52sDEjrsqXa89NTuHZLfuE2cE5xn6pFKsMx93P48G8zg",
  "key19": "4igYMHiXJoQ22ndgCP5BuL4GF47nU4ZtCL7PqRdM79iFRBKSfWJ3BhFMeXh3ci4MeqERTk8zywmaoDxDkmezfyoE",
  "key20": "3Zg2aGiAUK6HAdso2veraNditnA89Tj2zzPQGiPU43y92spFwPciHczLKDdafrQjFHsuFvoMdwqgqMxrm5P1Lwof",
  "key21": "5P66DE4znPzWJpwsodzH3DekTrXB7774eWhBWRJLTNEq65Y9AfENqVF67MstaX3G1a4qVakmcjWFmNVgCv46j5t1",
  "key22": "43UCgfP6U7SJWvTm6HxTXF7zf3YGUWWeNUwSN2pHDqxMJA9CXw4ubZeoeRLYtM7kGz8AJaCucQY5ki6STuHjPahZ",
  "key23": "5uumSSzKKPRPobfcBwuFc2q9YBLED6L2BxxyEZVKXFDsQ38PDCgirBnNcjbsquMuTgJfUN9oBP42aiu1UyQguZYX",
  "key24": "4wgnAJsVCQSqyupZgRwuRyH5hi2kdRwHiRDhHPbjdkSXDu6oExfy1yYwXd4oaiXPZmWM2VS26aPQqEGhxrXWkQwo",
  "key25": "3EUP3iC3vij7ar6yf4Do3agmKQYNoTUVEEbrjbVHxfd5Xh4nYQhozShZQFfTEmEn6i9c7sKM22BVxAm9rmfuEVf5",
  "key26": "qR9z7K6Jgzotc27ReyBVf8qQzHkd34CUqnSsiUXnzsHm4axp86tCktPN7FBN8Mf3AfEYZVeYLJ2vcMNTWDjwwqH"
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
