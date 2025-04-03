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
    "58WkEXHM3yXbBp23XWjpPUa8Ek7H6j1i9yCuSc89hLA6SbgCvX6MLuC6Pwn7Ft7BfUkfPxtnfoSpF27yeyfzUaAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4WDGajtLHM6Dp97uET17fzn4TKoJZRRHgSu9s1quxb65nx27cMZgi5KsoARi5k3TLe8UshkwEpCJ9KEW8oj9iG",
  "key1": "5Seg6dRRdyXvu8nB8Fo2gJthinGeHungrY2WZEKQEwNLAPJNesVxk7jG5wChzc4natJskQUVnoYqQ7388mDqwp8V",
  "key2": "3ZNhUcZJwPJsEyJ6imWoHPfwcPmEhTXtXwuRCeLzUTnzBwLfj7pouBMgrQC4YoEdwh29X1eSVK4BLvtdnYqxg7kR",
  "key3": "4qV9WtEGrQD4gMs2RG91ZrGdZxaPfPqRk33XBjwRFf6UadC6vXhJsXBj6jxDTC2T3KH5NcMSFLMXEJWoWNTWj5eS",
  "key4": "4Jx1Evghj7hLdXv9tXc7hv3UqdsPZJ1dsiL7x2UxquEiHUabmtenFYgW2Rb92guZ2ihSNwFnDjCmi782nssTJtyD",
  "key5": "NdDqYfiX5hUaPZjn5L2viKUX8X5r1gh1cYyEUgnqvanWDDphJxB457AQuUmdzKpBMCVmeoYTyFVGdPr5SVxYxb5",
  "key6": "5mRg6gRrZbf5dMLV9cLpQJ67rnTxkKY9EbiLRwQJCFbTpQjDa8uUiRe3DfTx35USDqZU7nobmuPDmZKbHKB8WxLH",
  "key7": "3MJRgpDJurkMCzWZXTRjg2BoGV96nBxmqEGANvR2MinzRUKkngLw7M3S8a84DJHzQD5WrgG7h2MxdYPpbUDmQhqL",
  "key8": "39MdAhzptN55XQ4JeeS8oP54gm2wfoJoKmamqGkTHTKT1WsoyWEZqHQjbUTGa14KofvP1VaCaWnSnzMw1JbyqjtK",
  "key9": "4TeHqJzLSaBBZFwsV2y6vVmvLVJXz96dABnEqQfFZNNBMG7e8UaxeH6364KpA1Vke17NznkUdPEh7etKu5QcXVHi",
  "key10": "3mbHsKRuHQE3ohgc2SD2gPf59UpWg3brRFJC21uG7TxrA7ADNQqj4qu1ruuZB7bQNBKuNCH7GXEy8sCGpNpYq9a5",
  "key11": "F8BgYR1pc9zkmphWgc6nNCH9KZmX1H7hCFZ3s539AzVjdyZX6uLrbkEcS7URytR86aYg8VG2KUk3CSAx2vdZtMx",
  "key12": "4PiEBUkDVdX4XBEMrmU98h7WqfnaPgjSjTZnPLGSySqB7tYrWx3ZMLkGCByQ9ouZBzbUKkY65CFqewM4siafdVox",
  "key13": "5E3Zzt5dYLLjezuh6DveWUsRCsqpKMs1bsf9XX4MNcYRJ2Dmc81rWCtcLPKrvFh8i9fHgfzGXMYZKsLp1TbFiKiW",
  "key14": "2vTFrS13u7WCpHYe2aoodWvFGCkp8G45rq6k3G1PRkgcQExyb4XHt827aM7QmotWthSdxrb39DZdyBEqtb5QnxCY",
  "key15": "Kg6de2zaASa6cMPPVcJbD4ZayE9S9667DWSzpoXnssny1BM2pbBiKo63b1qhnUgGt4no3Ri2N6ENE7gUM9Zr8rk",
  "key16": "38QUTEzQkW64WiFThSyhFVMKGr6sBnPzDvWx5PBkACJJrJ22N2kfKJAGgxj8t8vaav1kx7hkrjFyU2qYGJjaBdmw",
  "key17": "4sLXciNEVwFaqWkMzqaRCYJdDTBdCVRtpbknAUsZc9JFc6Yg82h5CgNGCP7YiXvP9yTkq2YF7sx18p4M7y9WELvV",
  "key18": "3rQGRDbiXVsJ9xwwnxRBUYNQS1qfrCw7g9wSLUHbvs5qq6K19sMw1uXSWD4mT8CMYbxSAW6MKWWQGeyS5RpAYy4u",
  "key19": "3NYJ4UABxTMerKS3EvVo9Z6bt1ftxinc7ntoKczo6P2WY54x2AMiqyG8Bdto8TWEuwfZDVpsoJsitWBa1f6ggoHn",
  "key20": "5sF1XsDjY9CHkV4FGygzWqWgBa5Qt9UT68ThDBcsWrVYg8s5z9cQFJLmQ9krLmNKca8nKzNny41JTGLKQT8ir6uL",
  "key21": "2ZTxxrPkk3Y5BM2rn4pmj2LrTUTHdxPXzwKpqgURVaJF6bBxunsaaww68KSsChdFMo49makFg7bNK5fPxu2RRGVM",
  "key22": "4dPjPquYcej8m543NoaX4wtoQPJbeDUYVZHbPHCpicm8vWKvfZhkeXkeRTkht8KhpUwBsUQ8SKvJ2zzRwQykrQuB",
  "key23": "3WJqp1oA36jo9dvVYrWJhYXZkNrKBoNWAZf5H9C3uDiJvwM9MQCEdFxA3hpU5pZ6iHokiKYy4FcywggbQYN2R358",
  "key24": "5EnayPwJ3au8pjcrfZPZVbjKVMZunRCdwcR8zqoypxKVXK4oMP5vwuCYEaNf1ciFoW2kTemVkHBj334zh3Qhi3Da",
  "key25": "4QwgeAfZ3T48ZxaUvT5fJLFYpQQn2YWBxqQTzw7x9oSkVmS3tF8iT9bHmKNZFm6ba8SQYAR8RzCyy2LvWEkujpvh",
  "key26": "3reE3ZzYxDVT12wCasmdgLJi52edUW6HjUTAnn8gyighsMm8vVGCKFsXVmdGuxp8rkgVX8MSE7iX3rcDvHjks2yJ",
  "key27": "44xtTYTSGWutoN3AVG5pJ9GcDRvdH1wgRmDwVc5Vx8Ax7sUS6AqxsyZmNSJU8oUomKmG6yM9dmQNd4T2rcgJZx38",
  "key28": "YnqnAT4miMzyrD8XVWTTcCvMKg8bQu1R35ERyU55Ujubw2iLqo5gUXGxJ367pw9LCxT56VrwuupjZjjrXeDbQgB",
  "key29": "2sA3uKkk3qzHRzAQ5EeHER27AU3AJVdGSu4LCqx6NDBTB1GcoSEig6BTrprHiMNkE3gdAaQzVJL6u9Hq6qa9EZHh",
  "key30": "4SsrrAx4Dkj9kY2Nz61FugM3q4crXX9YhxbWgj6mAYk7zcFrt7KWvmyCFD9St5aMDivPBfMWoHtLBG5pabj1FJtE",
  "key31": "3m43U38D15WQUpGfXVAL8a8bkNjEGaLZpffD1AbDnzzF9LEw93n2rHUcYERv2gNHrDn34owDfqFnpXDw73LHzjYE",
  "key32": "2rVozotWModuKfdzR1C5GWMVvZNPfxFhY9EqFN6JwXTT4hhkoJWMFbLL8Mgk2eA34gaY5PKjQjT6ekUm4UkgMjtx",
  "key33": "4qFcxgMiN1CzmPwSFzwCHEhihUYSxVz37zF5xJz63uP7UUeEZGxw7d2Xn4XHvnKTLtKcGxaGCpYhNBF5mVjftvPP",
  "key34": "2QjyoYAY15HjQrm94c4Mp8mDT4xAMne4ohPj55c5FZiES9KrYvh9rZgXxwfhg8HXwERrF7WAMLAXZJ6AqJQk8TaA",
  "key35": "5Hj7JA1qFAAxgyXwXgeUgP9qFZy5HBQA3Tzb5dKTw8AbEM9PHm158VjkpiDedsxX3pAMDNXyDLTwEyB5b6NKjwES",
  "key36": "3G2Pa67gVXnA3R8HX1s32fpgskpLTDpcAR3PTXGXmZGpvkkctgJ5wcvS9mcnVQfGTTmn5dWHSoTMeokQT2w6vDtd",
  "key37": "3r6vhBPJaJposfN6UaFFDR2C99mVy2k1GWwQZNQbbMM1CYE5iLuywYLQkYRBHTS4A12KsPA7mo6gz1wR2GoSYFYj",
  "key38": "2QFjAdZkMH3CB6ZiMpPSnxQaz9vi82WTZyTeJJo43rvyiUN24AwpgUoorkiXJQz3twYWCErzMt4KLW4xGH1Wjxuo",
  "key39": "5LtGyQGSGLFMksGdCtTVtDKM4YPXQf5mfsNtecrKkwF9RDBu7PUp3RWSopfeirrGVF2enPeqDtGZKk2VehHCD3Nz",
  "key40": "2Dde5VhQrqvnbzAvAPpZXySQaPngEdb8GfNNvQZYiWj7twpxpLJxuAE5fGPsr7z4CLHkNduwhXESpA5xfYFrcT2A",
  "key41": "5kkXNmgcwZ69CrCTBueeVvjUAopjbwV6C1A5rBjxnjjxoDGSgiWB6Kxqyq39De2RP9f6efXoqnm65T4ERegWSY3q"
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
