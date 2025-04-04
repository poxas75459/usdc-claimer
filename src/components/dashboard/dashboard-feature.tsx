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
    "3f7VoeCupU4tY91hgH3FpwR4iKbd4xX2kXRrgiDjWV2iaji7tMcGWdX7jx57Wzz1P5SejYv5GZyeGG1gP99jSxij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mzfF7HyDeVQjGsdaYSchMeWHmU4BAWM8qvLRBxm1YCKka4xHojv4NMx7W7uNRC7iMt4TTpbGzJsngrM1n8SfMbp",
  "key1": "2z3VDPQ9VdY51Xrp7sVwfqeK692V93ghxTgJTgrMUm6F2bwtQpwj5YotZbkfTPDfbQognhfhGR3KgesVYrvoaSxF",
  "key2": "4NewhF6nMbJerJMbNxaM6uBSbjgwjBpozsEZHuKLrLCteErDZ6k89SDmhVpMj6xcrcYhZYdM7hKEw6NMGkLHZrhL",
  "key3": "2fTk6zfcNwwhm4bbPZdZZQf8LWDQsGf29HXvZ2w44S32htKDCpr6MpHy9oXYaH7oZ2VqGb5T7s28QQD883KWNdot",
  "key4": "2bvKVE8hajsLwA3Vz2LMAQ1ZHuGHYWsvuDfe14JgiYqwPMQvQNxCz2AWPTUmN1L7kuf2FALM6bc53a3MzvVEHeVM",
  "key5": "37ru1CJUhBPwWVwharK8ygzx7PkudjPcQ6EJt6nqc6k4ZfXC3njj4A8wyz8xxzD2HTmtNFCJ4msfepiQir1Wp7o8",
  "key6": "4KC479bKA5zjhYLCHGPgz5KUHd9dLQSnBc9d9eMjHpDwe57S4D1dbJegfgqD6Mhai6CsAbhKzieKswE9xkpQ4ApB",
  "key7": "4AhS6uhPRroJXvDfnTg8jUaXxMpXpaGg7iK6vnitzZuKzaxRzAJf3ZnmuVxpNSxsHSbBjyqEsiM8kCwLnxfSe8gs",
  "key8": "aQqeuQn5Jf9vgdPej1GbYSaiPwyaB7g7BkbptAaKn23smnMRTt7zTqcAJTwapZuyJYgN21qqjs6svGH8hMZVqQ3",
  "key9": "5oufzM5JSWMrCmhFgE2z3xvLN4iCYqUrzd3xd9T3hdszt72r3qPtSaE1JcKuJQv8kNxWxd2PvhNNJEfqiVMRqhXf",
  "key10": "2JKtm1gHGNrrFCYsYSfYtrAUrV2RPmwbQ4LTFr8UaV1KeRv7oJgR91E7KciqRJ5CZhF7xwTfqb3vGxtV5aTCUNYY",
  "key11": "27tbDyjAQdKs8XQpbSMCLRgP7PbiQTUBK6mht3DV8Pc4ZPRqwsxGsfHuq48xp5RZLdb9uCnUA9kk4CXFBeNWUVBh",
  "key12": "5uBRUzWRyou4oBZEWbuJGLcgfrzYDtN46MzTyb7e735uEDJ67URUCQPT142dGCas1UoUH1ZXUQn8tY1B8JJ82kPk",
  "key13": "2bNcMcG3mRUkHtAA7XZqmhJXJNB34gyc6xvNagphDxiUuaaRCnewPTdXPum2mnGJAr6rXh9RdHbfsLnwuPz5faru",
  "key14": "4wzyBtUT2Qbfdn4aeCbG3f1Hr4sUQZv6rkqhacoxzwNWyRdyn4Zfo3A9RZGeyHmAEJif7RJwBCAJcYceCeQdQ1tW",
  "key15": "57ZvbCrX65jEyPKJeUgF6FoBSUvTTmc6rrC23PZBjXHFp5REfLBsiXnH8FLHdESxmeetVpJdru1Hqe5xxNFSUUa",
  "key16": "nTUiJhqqsaetnzCbusBoLpjRx3CTxaHAauSmP5txMhMnMwCX23WZwpxpL7e9hJMTZ2gDFnC9SCQpXpMNCykNcqC",
  "key17": "5W7QqYk9zxrLuLRQ6tgYB98DWjnshJbEkTTv8oH7CGVnGUDXQ5DQBygTDMth4oupox4Fy4sSnF6mHEsKiZyZGVXH",
  "key18": "3NNLSeF9hJgoUTvmDN1kCYJHMScqDnQWc45aDT2b4cx3KFMPLobv1omfU1rwfsru4xaSMDGqX4sA8wuMmBAFQjfN",
  "key19": "4gFvDmHGGNkEgYbUoSycruAq1uRJXxP5UCZ8EKSocWEwCWZ7ioiikCRMhDD6jeBRU2TY9D8rT7kk3gG3pnhb984x",
  "key20": "2hdK4bKBQSWhLZmFerLcvJ1HasSjAjXPfbFCBSrtvzJaBpiVGfQTPzC77KkGVAoAcMGEoYpTLjhDVU1u45dGPAmU",
  "key21": "4F5VFsVjtYdtrS6vajndzowNfJrfb3bFhA8R264RvFv5LukixpcYbYGVEsbbfdSJ8GqwUQTzhw22Mv2hFe2AQBpX",
  "key22": "5gc7awz7qNK4GLvZcNjngbM5HXedquJsNAGfoTp2ACR3Lgwi8x4jTZ9vvYNvgTnmMoNiAf1M4pM1B2jxyQiN4G8w",
  "key23": "4ZZVtoY3ZJd4n4NBcjuwWa7GCEpTzTfR7kQ9eqH6WWTndeGg7eqSV1so4b5r6D1FrjkPpLLXCZBwk42kSQsbM4PF",
  "key24": "5LbMLaukkq3y5zGHsq9P5bGbdtPk2o86mctyHNWe799heo1GJZ5TuSoEhYCGxdCm8Uhc9yvp3h1SnNN4YM9MNjAr",
  "key25": "2VcAGHwKuRwRfJSYMhki9NMr9EMrAmzhQajCVKnPrpasCAoahbCNSCDb14yb9jCXsxHnTZmVKmWGGtKZ7fP5KVKF",
  "key26": "5quAjDVNr8d2EvWUD1NbPQ2kYj4Wn8WwX2adamH7cHQyDYy8t4n1smTohRZUkLB52f8mk9ohPbBJJoAsmGNAUrnB",
  "key27": "4781Z9JZTLB6oLFrYAenR1Cvt7okAs87oGwFBVWZzyDLMbWJAEQeV8Yn1myYbgGL1LJUZXxzAibKPmBEFBGkgZCY",
  "key28": "iHimy7c7ozcRQJz8WDs8YvgB3PCFSrMiFZEqvWLJ5raJ4EjNoRD1jgYwfaepjegCFncibD7gn2SQqTH39kbMSDo"
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
