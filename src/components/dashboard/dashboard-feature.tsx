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
    "2RmmAeyo9ZY8xh4KEfFcfNLo1qSkLY5zCZy8z7h389Eqv3NMTVnoTaYmYvQtKDavYDoazcWodr6Z7CVRtNrRH1ia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HY6BvtMjvf8e7BVMmYs8SMtYLETL1ViMRo63dtWiZ7PMewaNzENDH2d9sG2BiN7uGTtuH9Fsza99ag7dxapVJdk",
  "key1": "4K2S5nC4P6YGQ7ctsjXsop63AoPagXsxovppsec9g5TqeXVd4zg8BpwAzx6hM6pAgkW8HDTANeDGZpuFJGwji7vy",
  "key2": "52CG9PpGDf14kNEcwkjAkSDgo9HTeL9bmew4CZXrT2JMjPWrsryJYWcXTYv5QeQ5T31Nv1GXViZrB1uakT8nGm8P",
  "key3": "VvwTgMhwPzfUypfN7zGBcjh1ook7GaTtiyeKajas6BzPmnqcTZXTzLYv3cQzZFXzPMFYUTDiRqa2iTC6jJtfzyt",
  "key4": "3Cg4Hh17d3YoMfKNt7fh9FpTQ2ii3KVczrpfomAa6XnBGrRKNz3HG75BLCrqenu4hCJK6RvnKPwuVt9RBVUbGu5x",
  "key5": "2JUwhaQmSD1Hr9S15N3CNsFtjiQvLDwSrmurHuqHAXLYSDvquH7bZZKJtEYsCYXMGXNybLXgw3uF639B6B7vPndT",
  "key6": "3evKpXxJc5zxu14nketqa3U4EDCGnjGBTx595hFSmLSQzKF9DYkp6RCT2vMU2CQ7wuzAzucoDrLFhrTGwaatWDwp",
  "key7": "5dPBy7phWLS6evHMkD5GPhHjfm4ybKuF4US5cAZyWSZh2Vdua64YCHkKZew6Cb8uWXeWRYSbY1d3KbFHSsuaWbfw",
  "key8": "Dvm85Mc3KQioZ1zm6u2y4PMN3W4G8yYfof1ZGGJ4dnadbuPChhD2b4XPr2tzT7vjsS26AW1gJYHxebc2EHPYZyX",
  "key9": "4vXS8M2vxVukScmWgqrdA7YYqky2RdzA1sULGJUv5UZVDxXkHEx26R6SdFRyiusyyGcC3mKpsF6Xt6LR9smjTFS7",
  "key10": "3BWwUAfak7dcjoytffpQc6Ye7VTRtgD7amAiVEAyV99mVQrpkx78YDYZvxbemWsXh9Y6s67JqApxw9twQ3oBNUbq",
  "key11": "P3ura3stAdsvUgNAsTvjhbm251AQ5SZXuLtMto2XCgyJgzSHdmrVywZq2bUVe3KFC5pZDeUej921X8cFNRY1YbY",
  "key12": "6KDE29MswSFHNaDj4enWVFVMc7vCQYqaiANvjKfabPXZtGCrjrzC2oF4yW5EDKNrwxgjwDSU3VntMtVeD4cyv7y",
  "key13": "2JK2TqQjEymiJAeVhveMyVeiC5quZLEbL8UR6MCVGhUvpvmTZKncBH12UbsPxkDn12zgPwEY7tPSKDqE9MsLQXa7",
  "key14": "Qk228ZjDXXjXSnNp4CbBrtgaTFWTjV2ioD51MC9hUQtAB655QzaQQ2rkyNz9Q8FqPyWtWF7Yn8pPMa67RXykNrm",
  "key15": "49tBf5T9FMfKdMBGgb5TFgPbyd2gjxK7PJpUcUZcgn4eBEqLdXHrvHocbYu27fxR9nUC5LhKjyufeVHWhADQHYYJ",
  "key16": "4gjRd3Hu1peqM7FLf2HoEeHyghCDg6QBHHhZ9tDbS5Vjhdtw3GEoQMAuQxmCq1ib61WxuorkoVjHmoELLF6xt4t2",
  "key17": "3xqD4KTBuHwdS6LBDn5Vn27iqiDgA2UXozYEq1KjEjGqPSEM6A3mgxu1w6eojC766KG2aGLSSNjs3ix1pRpBqWkG",
  "key18": "KmeHbwBmQn2PFny4P6JPV9vYZiiFCXLBivVmUwdBuNYBnAo5EyDyyfBhf5fxQBKGMDv62krx7k8YFdG4GNXn6ig",
  "key19": "38AaSG8A82ne2WJzw6HjjogUxd9REnQvDdYEUsUVaoacymhXjngKWCSNzjo6a16G4sG5ND2oGDJ8u7NtLZfoNHDf",
  "key20": "5MrQF33UUsasB7DbfkDEa95HLJbpB9ouvcvtmimWjURBADUUGyJsyFAK5niuFFYeg251oV5HgL7PSp85f4yLFQAR",
  "key21": "381bguAzyA9b7ahDbXxZDkRUqf9uoiJZ9CDehGmEgY5VZQwbJaz8mdqXBn4WmvkXQWWxLTxd9YKR7SPXUnJN1qsQ",
  "key22": "22f7D7qNiEn5CAG1SeBa832HJ3jEdXC7m2evUW2MnuUnwXtwNnL1GXH2dC9kbh2dVoVtstVnpgoUxkY8xBdL9DQw",
  "key23": "25gf3HvXeM627zyhCMw1x4Wmuwq5BJEmJbDnG6UqwDXn2RPCzPFEi2T83SezSwhYceFgwVxD3Cg72FJvQtmqRfLQ",
  "key24": "4LvgGPkuEffgKqr6JZ8JJ8QfZsPdPeD5qWRDxFxrmLAjZ3vWmhrKZeSkX4b1myZaYHqDUWRHMJVJ6BAjYjp4jQBW",
  "key25": "2mRRHCU3u7aAxQykoSms15mW3V1YCvFexFGEaWxGszdrnwaR6Ztoy6UQdmKeVVUoob5FUtcWbMphge9zFJCDYxgr",
  "key26": "2sfZc76fN8GZA2XdxuES46jAzHByK26pyqGVyyP8E5qJY6dQxYiVyfxnGq7GkYJGcppu6jhZxme8pAhQzDNHKhPb",
  "key27": "wfqxjUHp38tytcFyARg2ZGZNsfZ9AWdhL9u3LP7BYJiQ7nahxrrd8z2ZkjT41K5CkXy3FceoEoPWaw3LYMLRgYt",
  "key28": "5Ue9BG91Emhb3vS7WzcsCJbcjYyWbnWHWHoqvvtugX3VWyCvxxu16n33RUoqLaTKmek64ywFCpBi7fVXjopbNinb",
  "key29": "4ffDAw3SbVxjf6hvNbFBpP5XZdCeduaaJQUxBVS1uWbHxVLPPRvneUjwA2AoaNBMVer8EXAsF48vEajg7iq8qDAH",
  "key30": "5AvkiLJj78ss17VWkmSGxsNs6kRB9qxSwwj9njKfR8JfydKEgh7zJvynhqsSBNwuQtH6dYYnrJe811UBKfZj7Rsm",
  "key31": "3Z4w5oKPxywLYo68gMQAAXJYHwc98bGCiTWkkUQUrrCyMW5ipJKbFFqNX8vUSuE7CKcbtqrWNxRePBqaWD9cuhLd",
  "key32": "49BfoS13ajLk8H2wGMSrR8SiANwTZxYVnhYj5yogirr9nbpvW975M4b13cdFyi8qJJe88eJ1ffc5YhPhNfahAXxe",
  "key33": "54g4SNx3LHoTbBtMxrhMqegxZL4FG2QgamYQ9vXpTHb254uMXHdeWcJf2Z2CF3Nus64JeemKefhGCgypWkwREajG",
  "key34": "3Bs1zTGgQmhhJBsdj3XCxqMLPtSkjS94w98Rh4j5TM5A5WxeVerJn92VxwsUgj1o84VrmhHrucDcKPrGUqsDdRan",
  "key35": "5gYU46Y8sLH6pvU6L2ZSxkctHM7Ejh8RGfH1qbXP1J93Z3DT8p9NorBfQFXdMUQmbpj1AEBPkEjfj4s27tuyhfpN",
  "key36": "2hXGCD1KETdGqdCALpZD4vebT3BEwdr6iL5RBdLUEeXVT83KQE7YveX7gk9ZAAa7FQfQsiQnrAceRiEWMfFATHDt",
  "key37": "4SZdre6Q3y3gFoMf7BNoxMECqeybXV6BSjsa6ixGjakVWF3kC6DXniYwup2dYHSiGsX4sFqgf1gvTnZxnsAAdLwh",
  "key38": "3qX3XTB5XPQKa8HeFaNpvD4JfEapHHPwiyVAZR7uhcKnHHsuMTq4JkjeZ57akj5nUaGKPUbULh8NYeNNqpuCrGtT",
  "key39": "3u1BpZx47ZsQdVRqMneNZ7VceZ3Etp633Ay2gUJrZNRaitGm1XJuoUCjLFsnU7UTQkLSHq2UUnMa66xnZ4qmSWma",
  "key40": "34i6t5wZ51wZBxtaHBwJFRAWtHg8VNw9BHUiVJUDcVkJL9ZFfBoCCtYT9b9xTyAPSqLUz9PQqUABQTiXjCxjrZ8M",
  "key41": "4T5P1mwJtGSNEgu19ER515ur4chz97sUDm8TYSvx2tfQuf3tVAKT1ZCv54NNg8k8ZookAdDqaH24e2QcLyQWakqe",
  "key42": "5K4gPVaNkQ3kYdeMPNgGxGN8VpzUp6sb2qqfisSeqBmhuG3p8GyakafEA19nDU9A5FVVUUJkHpqQ6pLjHEoV9YKR",
  "key43": "3J4ZSCXge6RP9mKwU3XeV1q69XS5zUQaF2aX2hUmhHKRA7NPcYW1ZwQbbVhtw2qBDBQ258gr9PFbV1veZ2jkQ1mH",
  "key44": "4HJED6VrRkK2XK5xz5qEThHPJH5rWWux9duVAuiTyYzbjRk1GkCiRsjcPA1Dt3SKxkZ7KCx3i2dxnvVEVMj2f4n6"
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
