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
    "4zeGvd14RNpWTaGzVqhVtjH6Gr3WauNEqpZyM2Rvez8beFUtHyx2yCypnxRURK8pPjupsCCJJab9o7QTKkN9ZQyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqUVjxEVdehjRfjghLJLjHin1Pmm8tdC7Z96QAUAzZ62YTU7zZepDZr1ebR9Cs9pSQ2u79eWHfmkN1x4L9YkhhC",
  "key1": "5Sder9D1gctkxqYTNe8KULy9HevbZdrjuqdJQXhLtWUKfoP5PfHPV4uipFodMvHT6DkEeYbeMonctBLVeyqryweL",
  "key2": "5gFPwR2UibqZfytmg6bBqL79aHuXQ9JJLz8ufWkqS16RXqaNRmeezPBFKCuArnqZH3yb1ryx2SkMvi6kcto3n5X2",
  "key3": "37p7QyfBLLXdrk6NnYsLk22ZRLtEt1WS7knypQSsycstgNZsf4cj4ashdbtuzkQde1MRVkB9cL1AoTj8qpDKiMiH",
  "key4": "GRqodk3fx7o5puvTUPzwhaM6rserAjaV46xDpe8xYx1r76zdu8WuR8WUBmSnJrAT4dwZGm6Z3TJB4URg2Ts6bz3",
  "key5": "4j5si5DrtgWYgpdbi6nPXFxeXEtqbvNR6eHRrk6TJn1CXNspq5bajHN7TXbgtjWna16WsVcksQNDfxu1i9vbKPPL",
  "key6": "5JuF2htc9y8PiXU1P1hFHk6g2JdUyeR54n7PfKQP6QnyXGrYdhGpx7D1NoX8gEAccQyeDEQDdpxzPma5k237jNet",
  "key7": "YF6M8X76jWaQKVPVpDBQLJMcFLXfjj4guSdCJJsS326d2oHF6ysdG8gSR52bK5i998vxqXvpUD2rEEpasPbTBeq",
  "key8": "5tECgQuBx7ZmBCoNfXWjSHHw532afn8YUU1SKA55nZ5bsWMvaBBH4em6qRRTafsiEThCvffLyRVFcbGNLyRs6TD7",
  "key9": "4KotjJMwE1gFyAaNvszjhqQwV7YQRSg2Yg3u6GquBALoccwiRysxtXjtnMtxx2kVoTFUwhsm5oV8Jahcse48b2Li",
  "key10": "5ufHYNkCh9R5Ayrad8mXxdCrBh8nX6LyrdU2H5Vgm1LvF8KqoHZn5jnrqFDJrupGLReyMS2wV5WdCVskMKDp27Up",
  "key11": "f24Yxhq84PfL9CjwMPUF2VEqPD1eca2TSMFjoWWAvfsCi9NqjdZyCpyUyX5HUzc2rZSJEzPhkh29bAJWzuzkQd3",
  "key12": "52GfV3fCiBpTxpSawkh4zxoAwFPF38YidStQCS5n38kByTWotzeG4yom8jfLBKASrrUuh1NjXUUnu1kQKvj3mtoc",
  "key13": "5kosciTVE9EdD8ZnYBq73DayrC67cA42D6BRjBujq2jXdR2RztY8hUA9jL9uEsYasXnffZvYu3o5zezQg6dvzEvR",
  "key14": "28af4VNk7LBfsoq1N2LRyneceAsiMdow49PZC4k9Xv8Cf7kJCyw1ciNy8iySFXg5vZq2CiEMg8LbphzX2akBP8ps",
  "key15": "5x5rm6zTGsrxytabRvH86J9xh3sbkSkRnGDAuZmT5MPcXwSxTZMaCm6CeLHc71KKQDNHxB2A2raqRmxXsz7F94wV",
  "key16": "3bEg2QhUtzweXyNDYYUQ74en5sXjGrqhRFjTh4Veih2nbnNEpuJZBUGp6ybwxpHCL3LYq9jAhKEf3Bct4TQyfYun",
  "key17": "3ejzuhba7MNYoezbpcVARw4LPLR42si64vbjKwSiBnLUAMCb1cgvkcZAaGtEkbhMND5gdLHeDuyzndiTC2roB6gM",
  "key18": "WBBVVUrZeQ7ENmUgQFdjovD3Uh3ktz2ShMv2Q45ZAbce8X7v8KT5vCoBH2LJwpUaPFEY4WdCDpUZJeiGSYrTYm3",
  "key19": "656SsHeVpuu8jfTLbxLBrUcpdoGR7HkwyzZBfnis4o5jktcwtdnvuXduXiWRTSyt31P4g49AH4id2iCP1GEpTCuo",
  "key20": "3mPuNEBeRr3ddbp9SieNcJsKk8tQ9AdYWPUMGJA5ELCtSYQMPRAeKLS5esLtjkMvbCfNNYttABKyjSbYFYUq5vKp",
  "key21": "5nEMMsoJcpPwUArg8awA4uimQhNDmAhMP7CH3jk9q9KUBwPNZrZiPazCSQqCC5mm1Nm7BqY7QCP21yCjzDnyZ9pP",
  "key22": "3JnMzgJWHK8TaJkuasPyveiGkfu6A2RDt1sjdDhpXwsonnzCFtnQSYs9nm3SXUo8XkJ9k1mCxKiM2frBk1WD9tMQ",
  "key23": "2yzYn6588Rb1UH9n4dDKK8zV2hS18j8FGT5CRPF6dLw1sjQDpmEtpd1ThGkjv5omNXHvQ37Ss4LgsGtsQNdmMqoi",
  "key24": "29MxynS2E46BqvfJaXWgCXyUZ82UQUwXAHbFXj7LkpsCXNBcz4z9TPSQGpJCAVHeXMnYNw78SaPtYszdyqsrroVh",
  "key25": "5jgvzaJpe8u8As9CdgWKu2BXeR1XVuEvfar1ZdM3bQFuVMEAtGDF2iqFLrZ6XsAW8Prw91kFruertZuoU3TgqD7Q",
  "key26": "5XGMHD6JcNPHoR28rVtdfQwhrRsKmgEDktYS2GZAjoFq9rpWJUW4jL14MyYS1ze2isWb5rGkFqqNp4GBHAFfLnWd",
  "key27": "2J6GvMT9GiehnyAeEDyHaEUZCg83yMT8Bi9rBdcadwsD9fEa8dEqHwzETPoWnEmA3hBxM398eHezNq5K13aSu29",
  "key28": "3B1odVPCXYNe4MCMjMPJUtjb5LTGQ8RKMQoYhxcQy2rMo6z9dALjhpoxuUiqUVCwztQ47XGSUNDGwRauER1Rjg6D",
  "key29": "5U3Ht1Ce2xa5ijymff49PXLksMU54HXr38hXSRYxKnqbA7YB39eu8gVEks1cg1KGjrUZkibH2XS32aCdF8Mw3mHP",
  "key30": "5AQDspnyLYJiEfwd7jwiM5ep7LBemZ9PhgmniBHWz6cW4Ebe7tkAt4aPPg3q8GYZ5eRUn5t9qpkYCPDA3pbxzRwE",
  "key31": "JP82it4brWRict7Xc5QyLi2PCDk1CxGvwK7yZd5Zgrg24DweKz4x8SZLySQ3VSmDDmYfmpqneCAizkdXtKLk99m",
  "key32": "2oZjXa5mMnHcxxLaHzCoNombVi9KrMAkQg1JkwFgLWPfuahQcLZGip5ZbwUXzoooKKmLFsBS4UAsngZfBiFi4HWi",
  "key33": "5DSrxoLUE1VkindFXpgjHm3JCAqmVfo5RsqKuFiLTNR6u9NrqS5GpY6cFSKGWJJXxMcPh4L7fKEb9dQmwFcUs6am",
  "key34": "5icYuV1f4TToi3CuSb656oUtejJLDRCexjK5uiABBU2ZHURPfriPV14raKecG7NHj6z1rdNhMDedoqiAE25ULS5E",
  "key35": "4SZQ8AXRo9qoByneY6ghrTHCMYS1mHToN28fow1jDwGoJzr7u1ADe8DdgsR77sJBJLYDp6jPeaTaoa9x53So4Wpf",
  "key36": "3H5b4PepksX33kos7zc4YUY9Hpz77CMxxWYJpmfmwyq4tvDQiHVDkSWNZ8HgGsPsESMCokUh6tpKGrb9vV8UC8Ug",
  "key37": "4eNun2hkpaw9tM6bmTwg8ULzXiJCnDeC3Q7MaV8wteVAeCBwhHhaWkDG74RcgzApEnRYErH68MnC9bj1BcQJPV3s",
  "key38": "2GJpETgswUHgtPUWiGTUHWshNi3UWnwnQfGtAV6mt6DsvmpmUCMFBAewAXdNpt4Q42RGfNWkLxPYsvcdkAMkhu13",
  "key39": "7FGRSi8aViNemV5HwDNeh31wyXdq3Ls9CnitKrXi2EqLqfBki4uu38LNuwBRBqu8MiaFX6REh84pztMjY7sYQPz",
  "key40": "38pToKi2HyUpm4d1c6JZpBciYpNsspo7CtHMYFopNfaFSKKC2z3i3JfUGQD1JbjRtmJM3yyzV4SosZGcmqQEcbiZ",
  "key41": "4KgaGWJnmrM8k7r4t8VKoUEur92cmwa3eJ1qJ69q1akewynvsuJiCgSmGhghzd5s8rKEX3hoRQDrconaRjxBSrWK",
  "key42": "5wG6WKxwmWdYiUJt5zAKw7ccXFJPexdVPLRjoH6o3D2Ygfufv1vako9vbSAxS6Wd8yE2b6sSb8rLz4n7kAmE2E5e",
  "key43": "4RcpKEjnbwVpMyT4iHEv2fsfbv1ZsD4poJNH2GiXbyqXTzwpww8xXXLW8zA7d9YeaT9TcpJVu1Ee6XMFMEyQP7mn",
  "key44": "641mixskJohWqDH7M5pUrhGFSfoUa6uuGjFRQawn1JFZV3xY1cfya2rGFs9JgdLweQ933cLoyx4VyfeCiLykLzeg",
  "key45": "59oYFA1oFFwQuaGEp1usixVCv5Kq265FQbzz8tfmc51QAKEcuG4SRE7gqLYdK5KTnHf1USVXPpNgE4nVe9aBddqZ",
  "key46": "3WXfZ7hx2qaVMyEtba5ZrdaLqgMePhY5oW6J5C9oXY3PWAbYdmNaegESxGBbQqEn69Cuv3MHLxzgtN1R6MnhDQie",
  "key47": "2BkNzEnkBL46x82qh1ksWdsftKeYQ71rKtE2gUoRwHf7BcGvZg7VUjDFUfHYMbe9CVoPB2ZDScDoemEUhUmpeGcs"
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
