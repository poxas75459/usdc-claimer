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
    "5QySESfz9v6sEyrs2Gj8XTvEcum1e2idhbp6uTgfv77o9CLsaW2DLv3ihXaKeCKnCRhLuXrygu1wDEGaQr3qm7XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZzGT4RtdKMNUzmGSte3Z8J8ZLaqWLs6vL2aw4q4LCop5cezi7pwufwYAMPmWoLQ2Hgvwfx6f65QpF4pt2XuTjj",
  "key1": "4MaprXXxkpms2MUXSRF2g2JY8NjS3RK6J8rpDxVKTRpy4DnxmGS7Wi2XZGDThU5To2FL5tsGJH2WnqWL9364MRwz",
  "key2": "5ukCaVfV9jBsN4uoob3a6bX6JRfm1xKUxCTdUnY4fCYwFoMBtGRCVSFSsGDXTJ6irUgk1YEUkeY5dy2UKhXEjVjZ",
  "key3": "J33cVcQgT8vmhTBSbwXsECV7NZSiHWVtcpANtiHwg5gXboqTLfzetKxNksRZFcB9HSpa7aGobDS918tumBJtqqg",
  "key4": "474Rf8g4KVyr5a6c6Ye9kByyf4Aem2xMsKExbW1bazN7xs62AhwnYAeU3z57tNLmcoms4kmq4fxoe6L1fkuV8L3H",
  "key5": "4r9FqvkD7vr1p5UBbdjjv38DqKJZxDsU4kshhMFCJyqnaLgLRtf2vJn79E4efPEa9UqeEZEDjuBVt3ExqffLtLi8",
  "key6": "2fCpJUSfxQYoQqCjQi7mSJw81jTtrk4rWgqhpBqj9dDkdQBoc1i2pqyhx6KSs8BgrxK1Ezk88BCXoNYjx5SMyH4P",
  "key7": "5fkKpD2wgbjdY7eh7X1VaQv38JfLxBwkuxz5A4x9iQDHvD8eot2QQAUgcfHc7tYxG7sdTbo7Ps6rGmxbi3aLV7ow",
  "key8": "4kDr5a3ngCTi6gqUXRKhVWUezUasqPujDQDPmCfXqanD5CvJeffqBu7Nj2Uf6aZp1jmzNHTFaUabmrZun8ej1c8z",
  "key9": "5noBTk5YBP3nQ7Zxn91PiE2SoNxuSpW5QSrfLw2GaxFmd52Kw8yxmt1FduThnnJyvechLaekR3NK9Q47GX7wP2xJ",
  "key10": "wLon67CXC4gSGd2YPBWXxzpQzuYeuCyAB7G1ZnwMxPhwWVnYD14wETdPC7xHaoq2Dvsv8wPHBSkr5XgcsokpWQd",
  "key11": "4PDjovhehXVzhi99aVKJRkUxESfrsxC6QLUhWrFHGYMq1ijt8EF8D35VpS3CSP1dWKuEimbuWfrqpPMJRbjna7y2",
  "key12": "3v46w7SDFyM8UJV4tmBXNQB2nLqbeNG211GA8UWjWpdQQ6w4dh5uRQjGsKGzvahdBpckuZnpu6UFWtbXN6T41rUY",
  "key13": "2FUqc3zpASsB5vvTX4wMwHatm9FrVXqTvMfSF7y6j5WJ2LAtbLLar6nAnm5JJfq1VwN1EgVphnkXwpFh3AT5SQNh",
  "key14": "pi9TU6mnv88sFh91AnG8iUcd2Gt5y2jhfdnLjEUkyYbTEWzUHa2VepzsZGiqSkvJyAuvpf1uCDhVo8pqCit58QK",
  "key15": "2wpnxSBqdUUzW21R7GjHoe8CXGZWfoc7ULpiyvHnxKMeBLd3GB6LH5PgR9PFeDfWSXskTcXizr7XzQvz8mEsbb1e",
  "key16": "FSAVBGisFYEn8BbgS7FvXKMakbQGfgTPHAxkKKQHFqf9mFnA3v4QkcPyAXx2vYCHS8CeCw8WgDPDoiRJPiYfiHB",
  "key17": "2mWk2u5HEXN57W54wzaokcvfjgCDqKkTJsxq4Bvki9w3n1VLYDn2MkLMhX2Tpu5JZGBgpCXyhQ3yQm7coGQBBb1n",
  "key18": "3n9P55cHyqnJVw5Dit7Bx3haFLqUBB1H3Uq4ZzQMmRBhoSSbM1csHvL1UHsBzChxC15ziFm9mMrHWhVFqfzhGaKn",
  "key19": "5Li3oSZtiT4tbhVdUjcoLdhuSv7wBaCKA2TVRz4qmdWX56wRjcZG86fiYDGD1GwoQLKbSSUQLYRjJcaf34vfNS65",
  "key20": "z3i78vB5yTDRcVoxpCKC1NQbFpWh9PHyoyAPkt6qgzv7ug6FMfGfMLp4TvcJZZreCkAdGmFbrUkvPuroStyTCEq",
  "key21": "5zFaNDhgypSUhDQRbKUYT24PJMBSyAoudPPBdWUn3BKr2ZUz25nUUuwDFYarEYHKSUFfhGvQ8qttdUUrD7Rpzkvo",
  "key22": "5QMspwFey38ww6oawHo2eXJHDbkveQbkqHvsNnWezdAHX5WDVNu6dRajGkQGb4ZvuAPdpFUTmqcAkbHaMdbZQAbn",
  "key23": "3F6L6s6GaDgHhfNY43BqT3L3NqEj9ejJPy6xkskoCg2o8AL4pVzdownFiUpwRmKhQuDQxa7Vy1KnwCqtyk1j9bKX",
  "key24": "5VoucSCBN66Xf3zU7wGC1dUwfgwmaNWFymhGRWEH47Qs66eK1X2tYYMwRavyemDT34Pnta9rJzn1cyhaSUAjG624",
  "key25": "3f4kxBN4jMcPYrDFz6eBzD1cHfZYcW7m2VrEHNY1eNNioH2u5RKoGg5ysrim8EVM3Bw7tiqopDxWKnp5YNjpursN",
  "key26": "4M8f6XrE7yBNEjcfW4FwGUKgWutPhhVgbcasG1BMSCZJ2ndR6fWvQA2Vms93eaTr72f5q62W6f7xyjaK7satEFoN",
  "key27": "KHqodhybhFY4UHp37CdBsw3ePdy2ucAQkbfUEWG12Jo41rcSViCNqFw1qL1BhTRkDsryjeUocaWpCvsogW21ujQ",
  "key28": "4LpxADyXtDyuDd3s75QWVMg8giu9LVRMK6Bvc8uxonKTopJc3QLT2FLfxhBBsMwyVFphqrRZXdg81acXoSghjyy9",
  "key29": "3hf33BYwBATjjsnZchTbbLKMsftEcUCkoGmFzg2fzT9EfQaJw8GhfruDkNxQEu8Fvjrnf35f98hv59ECXWwz75JN",
  "key30": "5rqYjf5wicXZLnknrKhVTmKmRz1zpx4W9GUbK1qioJxzqwBbxmrj2wS3ABqwK62LF5sPjSyEW4r5HPdN6ek49ocF",
  "key31": "2QuCMHSQbZGzSTm9gfxeErkchWWYy86PBU9DsjsJKXoHBo5GDNkPNXw4uppgAeJy4u5h3LwM78mrgoZMEMHr5c21",
  "key32": "3jEYKsJsS7E3V43Z1XEnbsEZJCHB3d1LAh81Liiypu2k4T7dtfkVsgyUNyvFs8XMrU3K1qsofG3vAPNDmBadTFKE",
  "key33": "2EguNonjCBCtJfjtJmazsoiHvqeLiP5uQAGeBAhh2gBBGyoagqkbkYzBUKGCGu1b7wMkmgxucdDPL2s9go1V1g9U",
  "key34": "4Ruk6ytU4unTyzGFEgfNRJFvh2ipRwamvANY7De8ENGt5wHY3GgGMfNNaFkCaXmEAoJ4oBi5vengqMtejC4ajqu8",
  "key35": "fJLhoBd6xZhnN3v3Z7DjUduHG4PFfjrLTZwDt3czsM38ucmh9ndskS5EK3CEYHMjmtcuEVi9U2xdXx4WLANDe6g",
  "key36": "2KKsj97naX1PSSUwFxnoaCo2GCK67F3n9Ay7eQMsebbaVXjhaDPd8nmFgGNNtQJhbXyL5qwFQBm9yyGWRmAimRa9",
  "key37": "ftKLUR1QGBXtJtYqKVaGfJ65BCv2mZVnYqf8uCNTDPbvvqNVgzPU5vBfUUYfSg4JPS2JwT71NtopHHHenkVifPQ",
  "key38": "2Twoh4TuksVjeTCiyGNX7hefVkuBdLmepQQ7VKuKgzQsF7eTzEMPUCUyBCqhrBpjMDDKwMGMpdb73U2j79H58jiy",
  "key39": "CVqy6ammVgXDzwFNQRL5zrVo5KViYEzY8ravwrFmkye6gDHSsF1SeGj5e7f5yZ9shZFH6uLvnzJ6nZzy58hP7Xd",
  "key40": "3YgGKyHDKhzvBj7NaH9bhWMm9DUj1VJqSRbSswHxD8Lef8m3qDApTd5CCC2MLrcJJGURCuNgEQ1k2VBq3Xwbz2Pf",
  "key41": "28e2Rsj6b51PkrAXsWqPQrd31LeDHafBEpaJUgGmiJTwDBq8mCQvyk7BkcpxzTCZeNjr1YW1YMaqceYdWkWa6g2F",
  "key42": "3SxKUQwLKRqnPyJFA64MxNG5FqCdH61Cm4b1T9uQrSSPLgDQ7EHJefVPuEGVRZC3eHU7vKY8rYzoLw8zWi4SSGnq",
  "key43": "3KswmnUS8qmJkx1yxqrxx1qrQ7XUyN5VaHkbEoxJGoz5of8w3UFTuSo814chMARDDMkjser8Cc8ZnsExEQYb3U9J",
  "key44": "2bZAPo96fRXKViZBoy31fp9zLbmkki5HYMRM33Naej3nYVpba8XqfSi9kCopj1YjRhXkSSmmhoou7D3vt23Fn72K",
  "key45": "4wA97f7UZpQGLi51VaACoDokPhKe7WByjx1qf4jwjGPyXX9uscVeh4dKDfyAKfDkKfKAGtTSuBvGqMAZPjdighgL",
  "key46": "H45CY6Y2Ys6cD2ubkgYpa7cFGnmvoZh2pv9ojSzdPzjUnzMpKEbHdCZpdKqFaixVSixPf8AuqKjZwcTrvkBBi4F",
  "key47": "2fuaF1xEsdH9ZgSg7gPrJubEZhDAY6W9rciTmPzC8kZ5yN4avrfa3DetJNgDs5DwBr24ukUh6fCz5zNjMvNQeXrw",
  "key48": "ytxxeNvEHRU6FjSxycEksGHEwg4pRDbXYbCXvVaJjp9yoPRriyyoGgHDy2Q5LJoNxrc6N8DmqwZz2pEcaw8xF2o",
  "key49": "3WitWDucixJFUju4w3kzHCzEZgAF4HmyGJMaHgRz8KVPveLgF6LgZsjr2Wry4cWFA3MkrNivMZmLKbgfcQQR5XpR"
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
