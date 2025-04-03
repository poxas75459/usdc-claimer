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
    "sUozxpmDiG5zk7NQfbTQ4w4155GRCAzGVuqdMWBkFCiUHb4Wz3c1HYaBppJ5CJoeLgjP4aP3fVpFZhiF4Lv4ML5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zk4xE1wcoDEDBQVpXjA91K7t8G9NNhbDh3qR9HKpzUQzUK2c6HB5SW3TUNG3VmXFZcFtHx4jWE83Q6VkREf3Rxr",
  "key1": "GgDrbwBEDtX2HYZVgnF1tMFm62xaWY7JvcH1oyPJHZSzEUFPNbJT8GVDCfHkm5GSXPFrScBPze4aseW8wPL7BW4",
  "key2": "4rscYtfKwArAdbR1gybHJbSeuyYxJvW9Eu4yhtPrjKi4QJmu5WxEC2cKkrZVw5pPhPggLDBkcQzGWnf4C3kUR5k7",
  "key3": "2TmtkbyvfZ4KVhqTVq6b94i2bp1wyhxx6h5rEF83uAyhgnQzhjqpR5RX3jEbZ7ARkvz4HamHCGjmGGHxKpMTFdWB",
  "key4": "36oqzP5wMhrD2pb9tT2gYv4Wig36RiVj3RVnsUGZ85ZPBfNW5ripN4JHavVn2QaDXqPqdJXvztPYxvRX3dsegEgP",
  "key5": "5ZRF3XbyVkMgVbBxJ1vanS4tYGhfBVxdDYiZW8inSYZz9Gva85ANZ9aLkCmnixp2tTPwQLxywYYzkkbXdpJVjyjJ",
  "key6": "24rwujdCZFogzJsu1r173cWuEe3Ep35bnFfdtwRg3MUn9tw8V6qogM33mmuN7VRHeSyPhZSwAnJXYJi98b2bPnxn",
  "key7": "2Hh5wtmbmjNidThkkpDGVSXR45iawZHDnVw59f1j9m7Ry4BjSEcAxVATCoo9QFruonBz331WXPgurj7dxd9tAtDK",
  "key8": "3H57KVpAhzFyLdJ4s9jvgf8FiLxfWvFMommvrScxfhc6QYJzTWxpd4gDqpDc5ME7yf82aj2g5u9YpK7vyKgheCTD",
  "key9": "4uwRbywMBqs4TrjJ5nBDMD6wHKypYptXRdCDXE8m71pmzUenR2DuGoAfJkjT8hQetAmiXAgesS1FXEsw1DgxoyGE",
  "key10": "2ri6ZWBMDCpF5824F39a9B9rbqEZPZuJuBfKF69Pa6LEomh3Hm7CSzfq46uMZidXKqF3Z6U8ux5L84YQMha2eMsa",
  "key11": "4sJrPENWSrKGFMThLxWa57uX2DYCc8je1nZBHUoQMQ6W8HW7s5YTH5RkPSSyTDAhJ6EdTTydaTvL4Do9qb4jmhTH",
  "key12": "9m3csbEYN28Zxm1iLfEtKZcfk7qEpoLu1gbacrLuVibNqXW2t7byVt9pPP9rq8DdksotECxT9ZPjWTJqryM9yyW",
  "key13": "b4h2BGkj7YTxy93JChYmFz23eJcP7zJoww7eoPwHbPbVthNSa72QdSKKxnEfmmExEgXz7QF5HtCwRby1Ah2ydv8",
  "key14": "vDR23WL6rfKtU8vfR37HrN7NyASuXocv2Dbz9NZnJ2BAd46rQEMAzmiNSoJrbkjkCLTT2jvWD167vQT487HBedM",
  "key15": "VPFzVz9WyUrU5jHkTJjDMTfpYqvnWF4RUFuums91AnQApyXcWNepUL93eR4K6yvEe9XZZpx78dtafgRKWfS6vyV",
  "key16": "C6PbhMd8YGH3GYqLjvcfZgY8NN5mrj4Hb13RfUtRZGg5MeynKSB5AdeFsuWbULBoDWTdpcqt3fME5JDNq1ygoJD",
  "key17": "2yJcNN3YSU9ywrKrspX1a4fxuHbTv8srNqw4FuMCZWSymvL2vGYCU5ZeaCNM9wjyjstwXwdgzNN62qwTubYSZGAi",
  "key18": "2CfV6y9WkWGgFEVgpYQYDgJ95bxVHrejfwf4NU1eLGnodWyETa2NSxa7jizNUsFTpFTjd4sEdtLSyUPJXZoDCoMD",
  "key19": "4ae2hbuXpKGFPmSFDoS9raB6jdfzUj5FQDh9p66v6b8iQEQdMScuEkQ8SaXtWkdnHDYoWpJxVJtch4x5eneSmsRf",
  "key20": "419YgoprZNeK5xe6RoPiSvFCeHiTtnLoWNp74JofKXBHGt2a3umtGFe3nCKSV7HqLFW6uUf5daLz6nKu2ek85sSe",
  "key21": "3vB15JjxEsZPx9EeEChkXb2jfr5qkvkaZ9eCdVpDAUUfYDausvMGSwZSXaGAJfJSV6iiRo4XLrAWCa5cM8KGnhYZ",
  "key22": "w2VW7LP8TfFx9ccA3FzMXbHp5KBdLp8TJyRp5VUa8sK2oySXVVbxVmQptr5b3Rxxdh9tNojgWtnH5YFwGkcUeiP",
  "key23": "3eMj9CYkmkSphvvxMzHwL5jGQEmQaANQXNHRB73RZm45QJndLHoNJda4ybvTV1WnTgXv1ugEFQiMtxY5hnyeptt",
  "key24": "hHzvRsw1WNWUdpSPfpMfeU1HXGzCt4FYwjSaDSxkzsc7cqSeVVwR46NX6PtzTdUPqDJAYqWJN89HNfsJkL3qaNQ",
  "key25": "42aWqeDNmj6bEKrMiEoNS9seNn27obFt13pvaRhnYADgLKEtUnmejSmLiZUF3dQbheMMpownGRKTY2R6dC72Xqug",
  "key26": "72b2BAa6UGSXN4djT3RGdVPj59djCZ8MPA12rJq8zVx1jF4H8Lc6abkUqUdYqFF1HTgXurd3mwy6YKiNLczpBWf",
  "key27": "5WETHx6W5Ld5RaXoAheUd9FdXsGBwhjw7QP2raPgLwUGSoVwko7WfohcGqw7CqjJg312Ebf1B8hioy2CG8G7GyPG",
  "key28": "4qYqj8GCkjiBQah887zNuVY7GnsAYnWUkTjsjBJBYG3UaLwZpCLkNLD3npS32HEvvA6Vjq47otiPqnViDNor972X",
  "key29": "4F6pEYAJvmGA1cD32mM3KegGh6Uo9pNqXWRcYoBKc6wmWDLqonTw9jzfmW1TvESrWGe43yAodLvAZJFuY5ktCDff",
  "key30": "5J3Ta42BVDYdMCAW4pAjyVJjRGwQ84xzhLKPPoLP5RKRbJisnLxD5jMWjBUCN27sdKDKPmeNRDDH41exeE4dcrrp",
  "key31": "K44cXf3MjF4h6n755BqVnT4McsCnkPRGVoZorvo51AwtsCvi44GqMRLWPkZuuLXXLfT7jP5W63GfBUdGBtNP1AB",
  "key32": "4HCR2JMjFC7iJT9enZXb1ncHarBuHJEzdoWFD7FkbDrX7CfnxfuELq2rU4abnE26Bi9zvti1e6RxvTEr6EptHZ3B",
  "key33": "2Wm7Yp6tyGGjB3UPNWwLjddZ8wuygff7rw2KqeSj2tHh1KTnCY72ozDRRdDtWGo6KuhAiD7KxcWoaMxqbjtUAMac",
  "key34": "2tGmLkhTZ5NYjEAPWtcmzozHM7kNf9M7yPwvogexD5BqNvZSQKSJEtEhRh8D6ZAAUB2mdRqYxHaVs7cYfZqFvaDw",
  "key35": "3PUipH2nSbCqM7MhxdboiuVWuKvNqAp9Qd5uSQoPmB5sjV5YD4kDseidgsQUCKdN6Ud6e7MHgxjSDkxS2JRd3PNt",
  "key36": "5kaMbAfeaTuhMWc7ndqCBt1hjT8hBiHhFCD8mG98beaC3iBhKXbj7PPo4ojwYu4EGrMrzBUR2iQxsn6ntjUDXnDR",
  "key37": "4BXJaYkKzcsrpiWMq3D5JMR2CE2ivnWCkYJirCXZjLyUVdwE1GtyKCH6xgU42KU6pvFZTDBhFD39FzLbCuw5sxzE",
  "key38": "46KXWMh4KMUDj3oJaNbJ9y4LuEH87kn1U83TaE5VKnA3xUPWLVX6EKFR8A7icrdJE4gGFEBmKvmmjHFqKJx6GbRz",
  "key39": "37Qo73dqTUvmu5b4TGs199sUcu8YkEcePYjBLsPvz7vrLkHQ43E8468AKEJ9n8R3Ld76x4UdA2ZY8FPLzrAPW8QJ",
  "key40": "4N7X5MTLQZxr8ti1y6fs5JDPuofnSG3Koi3C8FXN7cABsDBdktfUjDP8dvkaLYrRMFaW78ooTz1q42Tx6LiHMoNd",
  "key41": "3jbZ2cHHNihY8cpmYAKrPkd2omnCrK5rNQAaRBdaS6ycrqEajbXAE5mvTr7SkpEp7zBcj4EhCSxSW6s9z8jT7VNM",
  "key42": "2Py4zMqC5b66noyZ6VUskCuiuLbHCcv22AiGUwWYwTnvikCeyRBqUgkdchXVcD68FBN1zoQkjLRLG4tMdnvDVwDd",
  "key43": "3UXdQDKKEVNyLrDS8sENHBMBvLbAE1durCgnYkrGLh7ohCpjLTNEL1j1WT9n9Pvd1AYvgMH7XLR2JYRLcvAFgrpp",
  "key44": "67bTKt6zrtjxXSEHrd9Yh4QYhomgdQDVB3HF9bRhNc2uJKBNDRRCJiPMeD7jZthmgqxSvnpxdCZgqBZL7Z6G3ep9",
  "key45": "5MPddJgmh1DxbpfUxP9E5QU1mnUtx3EXnoY6DNadtTVV6s8TpPd8NTyuBHha3v1BFUDYMevbpgDedzwi3LBK6gyp",
  "key46": "3uftHssfBormgSvVM2EALFjtNsiibiufkSewnQM7DefeSwhYAPMhBty3zjMqg7LEUJ8rstMHsKgp9aGq1NMVGT5f",
  "key47": "5qCtnJEDXi91hCXYwLe5UyJeh3sCjeAgLLMp42YBTvFsrbrmBUjqkV8tLfBuE8VVomPXxVuvCJV9wKJLS5cHFZM1",
  "key48": "Rr6GhZVpk2Myr3epoSGFXxH7WmwVbT2icCBM4Rsaa5YcoMXFBCZTiXWTJnuVPcrj9ZHKK1oqAKyA9PtJmYhkeP2",
  "key49": "2wubbJgzwNJf7AJPj5pm4irgzhew9kdAw4e4uijttc2kVUEYiGcwPjxLrb6kLTehBkE52XQTqzt5nK3HTN3AS8ZS"
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
