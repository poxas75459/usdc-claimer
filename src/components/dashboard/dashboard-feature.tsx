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
    "3wrvQbx9nXbGeUfTkKRL2Xdx5eyDL4M5Fjps9AsVf5EKHKQpkcUMSy7G7qEN27BBmbSiUJWdEiM2BBEzNWhfhCKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgtRq67RoepHfDCPpNpuwhn8JcvwUCgcotEpgNyTUzDS7KANE6WjazWTAETh5xaia9y9gqDiSXUzvNvgom1u2Ef",
  "key1": "2CJT7fQW9BVgZPUe4BkW4xvbnDk2P4LvrvCUCXVjTC7Tuun6LWAUPJUaR9xFe7UNJ2e5QZhzXKSsvSGAy7uqDy4X",
  "key2": "5WLbJ3LyXboQGFTpNiKomAWtFkiudN8Cg9jLY7XCqWHeQDSgpgrUKjBeVHpwSS3PC691QqH7vpKf3JwWXnhG7Pw",
  "key3": "57adE4MNSvqvR5JeT1UWDvb4SFxYRqoviHjQqxS9fwa7dSWD4ATokf43DrqNfBfCuARAh5m1M6a89uN6qRQqy2ax",
  "key4": "5tgKTYTi9tCWwp5np82fN5Uvz6wVCfQwMvqyBgHGoRSpNKChQxTi4F7HkKtLvBZSyBpwcT9WHGq5oi2v9qrFe6zH",
  "key5": "3hnjZqkFAXoLmquM3p5Uu4UWGFDRZHx4VV1mCY3z5YEWnPNFW5jQfTfBpgCSXSbgsTg9Spp6PPg6g2ZSg8uLvNTa",
  "key6": "26hnuiWWEPmijgBai1MBrc5neNAvP1QVEvc5ND83XTMBf2uu181YSxXie16U94cXvZL2doX5iaGxXcQK7aYFraxv",
  "key7": "crvwp5BHiMxKAUTt6gEu8dMsxMLGUFriaPfFQMgjn48oWLzZEjAFmCQtBVHFtH68AQ9sG8LESvV8cR5VeUYbC6t",
  "key8": "3eGFYA8Djf3ktwpCWZeMnf54aE9HQfDbeToHVG4VsLHrr8dexkgvCuDxQRNWiToFjN8m5wmyyrypgquiMcWzncFU",
  "key9": "3AwPsfmZhjFWwNESvJemFJmdjQH4jfsi1PumjHbLnxcutizXXVRt6A5UcrJ88vcDN2sKQx7HfuNGe9B6FzYDzmc6",
  "key10": "4KLBpjnrY1AUzufN4nEWTijQcWopYSKBnZFvaHD3FtVQJs8mkUPUHRoGqeiNqS5AzKvKvpJ8dBVUHzuankaeMCmZ",
  "key11": "4UCxM5aVLBbgyNJXHW7NyTKUqpjxSPtrwCScDdPZcu9NJ8oQMz4op3ghxKjfcjnznEikXGzZ2hK2vxCz3sCu4Bwp",
  "key12": "2HzkePZ6kbawVEJLgYow9yxdgEeRCv7Z1Ji666fQ32rmji8VN1iZViUFXwZqRkVEwJAQhoUu6tqEbjEELUPHzP2R",
  "key13": "3pMEkgN7geQkVVj9wtY2aBR2ymgS3U9e1u1fWqZ7nnEjGBpqveT75siTUo4AWKojsyKo1k2TJLELoihsPUbxivPY",
  "key14": "3TPcJePZRrGVbjjxkL3ZJgcujzS6zowwwwue9R3WRWvS91hj7RCqudJQgosZXh4kqv8kM5fzS1697hFRAyU6zreZ",
  "key15": "4DxopopaVNjv8Nv14iEmYAFPEfygaiZjHp9qw2yS7YAvLbzWBrUb8HMKE1KySw6jxVA6ZA1dsx6TVjUoFgAWvUpS",
  "key16": "3bH5uhcnmAcakWdk5gGBA3RnwMT4xB5869QL2mLJP44CC8iveyrpZgeaR6yU3y3oqiLTWZjEUFKyAfy9tYB75sEF",
  "key17": "62s2S8CcFH4S4q2qJqdYt2stWkNnMwGhX1Y76KEj6syDqMFCk3JPUhrd3gWkvqSvhowjqdCyPXk85tyNTcQPyfND",
  "key18": "3eZFPQTfridf6g1Wqj4j285q1uPQqECo6z2sasxpvshz6uUpoAzQA7bYRRa64zzcKubHvZWHJsvr4opuZw6XY7YT",
  "key19": "3vB4WtXcjb41UXnGB2KCdR4doYKpUiN6rtYYZHqqSLCJq9ckyu1AyyqdiEz1T3vsuwCXvUKNpgZTv6HDp2NW5qyS",
  "key20": "5843tKLHqb5eEFuK7B24sRmk5wUK3ReD9WfYPSgsfAdGuxA4UMWvrFM8kLZ8vxRRoJbTpSUC6zgxRFUCK75JSTDP",
  "key21": "35LezHLhk3dgtm84z7Cm7uFH7qugcmySJAC4ajW9wH6VSd73ua8ZAh7dpEAX3UdzeHtN4UHpFLUvAkv1Xq39poaq",
  "key22": "5gTkrEfw9s9Y4yStTytXPan1TtVKNecp2vRXdUYWsm1YuWhzk4thhMvtHrtfdpvGPaTAEgRzzanWtEoevKLaxxrf",
  "key23": "MoGYhVei9Gk4o7KWVYjGnh5Pub7hPiJ1yMEBBds6dJPURt3iZDdfH1EyohrTXmVyqpjC3XgGjp2FnuhAaoWSp8y",
  "key24": "4eZLkVJAAnVVRwdThdcnarsdTmMn7FBXC7N9HQLj3Ft5C97H5zXJ7BoY3ppqU7JG6jTQ4TtxyWu1eB9NyRQpSiUe",
  "key25": "34PzgByfbRTyVwRoCVi32euFb94MTh3jtNaJCzEKamjLYPy3Bj5epXEHzKmqSPaxgYwYvKSgopb5GXAB2tV5oZGv"
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
