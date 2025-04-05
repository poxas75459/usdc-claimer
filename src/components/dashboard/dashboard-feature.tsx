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
    "4cNU2S2QmwK1qWXQBXj9Et4VDxHB9oyzVJg9mjm5d8uKiUcCqhMUWCJ4iwDbWYGRS8DzbiPJbnc4JnFE6nx9krsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugAyZoMyHtouLmSdjmEZrtNd5NunsrYNVNJ5Ap5nZw9uASrRdcQgyxvzcjxRhiuXoG2C4eWSgtgMrTqdsBWxzFT",
  "key1": "66CK8PQE8Ucne5JNDpUNZ9CYKhGdRxF7U6a4KGJKDXCv2aJxrQumBtXGWZ2FTq95dLXtnV443YAdtVG39tZNva26",
  "key2": "36hZ94jgT89MZkfwmVugSsaZi8n2ySKygbYRH5KJpRrvwaGYksQh2x6E3dFGEwNWyxF2Lby8LDBW8WZsL7K1SkDQ",
  "key3": "5MRRwACwUmQwDt2ENmyCeAA9a2Xu4ur5dHEZQB3vdZLyKCuaJ1yhSzoMV6djNqj2j8PjRicFuHAYUfN3Rt1TN9b",
  "key4": "GS1N3YiatfqwGdQDQdShKLQojSYwKVbR1wLuTj27ej3P4XTqWyzpLKXepqeDmNo5fGRkx62E9MLJsgSqqDNsUag",
  "key5": "wpQDy2tYSjkjqDyJoj4mcoj8VswqymVRTJwF3diigBPZh3dYj8e46NATxQByKbeJtwGmVaVnbvY8zWjRaXmHuze",
  "key6": "2NFqd4wE34FcMsbnsru7aq3o1aov9bbt1USQ4KrkmghKEKsSXRSNGDpmeW5Lg52RAqjN8wudC2dC1dbAUkEhgCHJ",
  "key7": "62rMgQ3oJWAWx5yQAeF3qQy9w3PHUFY6CQSHqXxZwwn37ZuazBLNLRMaFhdEJqLUN5rKEdbLsE9VZvqXyDtkCjRn",
  "key8": "3esqESjyeFKmf4gabivLHiGSpNd36PTarV6mGtqWsZtPXpgCQdaXCb8fUuTBc72X8uCWibttukiuDeMv1Mb1b96o",
  "key9": "Ex68FUFxXevaAH3ho1FuAkghTWL4goUesEVnVGeTeKc8qKMCAZJxmBZ4Vwjn1ZJgdVwhePLviwiSYa9yUcZ6Cz8",
  "key10": "4nUJY2brD1uveMAXLcSLmkhs3nEztxf16MXVQfk9DfRPPoyhxQFKQua6XtLMaLn6TyMMB9pbcxm32ktu9xna2P2r",
  "key11": "4Ac7aNXWy8AATk1AivXV9VFTRebSfbf6bj5UJv4azBE7if5mvkMU1LiD5RFAAATDVwCSEJ1BF19iKTMHWmRpTCeJ",
  "key12": "5x8tr7LuzbYnqELQnTFZK7FJLjcJQRUo2sRpYyK49psoKm2z7WYRfdbKhWq46wjsVNkZqAgzZkfeEamrdiwr9xdY",
  "key13": "28L6jGaGzNKYcAqqpL13NP9Gu2hYVTHtqFWQ7hpqhGcySqbWP3aGQpZj4gQMXcYFA5yBG6hy1DzjQ9YSACsA9wkj",
  "key14": "uqUEwVeMfoVBCid8jkeZKdt6RWaPGzpwZ9Nfu5akeKp4pvd65MwozvzfSBmwTt1VLckbXAKSYrPvnWodQAV4kDs",
  "key15": "2V17Lb4EiqPdr9ic3REK1gdFhHxtEYLfMoEHkCAG55kNT65VjTFuurzdX9EtV4mNoiVQgtrhcEE9RjoFJ4iEjyCs",
  "key16": "2HMEE8dxAgwEwjWWNsyDBGr7wyuYiGdZFfjvsi8mdkWRReFaVBYVAqwjgJ6LXZYf5u1FQmH1UhZMSfTvufBdkaVM",
  "key17": "3RhEpRAxAE5taW4dttfgcnmyKD8qhiKKjD96by5xgmqGZUDKHgz1qtB9SqQNB9aDTtYU3XHidNkGHPjEoKzeG9RD",
  "key18": "25JyVuVnHHUfkLyu7QvUN7Ntygf3sWR1hPk93GnYCxV2km5U4SfKpeDbgZgoSXeAWdA13z2CyGqYjkEaXqaq6qLs",
  "key19": "5ZewQrmVez6z2u5GkuWdmw3AypC8GAjQANC34dsouUXDD2c9GfGxK5ymh8joiY8baKzALF5UbbkDr91QGxz8HSmR",
  "key20": "52vxXWg9H7veZpqsAAciK3Jx1qa49iSz1ea2hAbgVbth9xmSsg3xk9BEkYMuZxibRqv43BEXU1famfYke7KTbFBQ",
  "key21": "3g7etH5U3zBvi7Y4T3FPnPLka3RTqWpKeNgewwYpBLbSPjDw1xpmL9EmebxutG1Mi3KTQonoaoD16mAAbuaAjc5q",
  "key22": "2wVT7yfF3hmXXUnrUc6BRZh3PwVrTCAd6A5gNiZH5AS7J5fj7WY3YhScdjnhzromRNWp3yuBNsc5jZWfwCHxdpva",
  "key23": "4BCJ24aj8uiDjx7TGrz1WKWmW2VG8ekFYdn1RKiebd3aXtWWgDsXhfm8JZMRcmA2oJKcqCuF9VfFoPMDECkvyyP4",
  "key24": "FXWVy6oUXK9QMGcLmSiJqXNswfZKsKoH3yLhx8ionKZeuKZaCBSqZ89gWYdS324egheHvJSkLfANuKsqzG4hv57"
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
