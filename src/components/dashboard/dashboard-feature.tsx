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
    "ySkLwUb1RdzonA9d3mEGMDyKVD2xFv7WMwUFeYybvQaYtK1r6NWU6kFdjUFwrQrXD6vuLjG3YLdp8qmvwraxd1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJMGcnCXWcuRKeY9PvBx7MCE6q3KnajFmfd3hcPY9jbM7Z6HdL6EXdP51JH5UgUF4SYbuyzd3cb9z9j6FRKqjQa",
  "key1": "2VRcH3x2PT4rK7CDmy3ofXdFCP1NVJLkfQ2ZGNwLGFCNYZnQJiHaJihbDegH3dg7vaVhdZHumSYauNzFtjmnxykX",
  "key2": "sBhEZBj2fEXHoQRzcA4JpxiBuBkcMtAmWbwcP7ZsUAvwH6ZuAbcwBag7cAFTQwP5sF243cdbm71GMXNkoTtNwZq",
  "key3": "5BH8VkGhxPYU8oSJoEpjVaucU7aLHhXwnKYhXmi5EYyHb3MTUqCuKfnV1DZswpvfBD46cYf74iwKBAQs7j4eZL2h",
  "key4": "3iGeUCb8i59qjkCHT25vyS4Jm2U236nUeEKMRgmwXcyK8hsj2QfGjJRftJFtQJ85DhEp5nZES7Jx5cEGUXdMdvuc",
  "key5": "2T6843kHV3xHZeA94zVk8pQaeUzov3y2UUZ3sgiW3JjQErJKLDdBTzttoECKxZCgdBYdLktqhRhmUKpwhpQ8dnig",
  "key6": "2dMH5SrCpwTYzfRf5QGaPYqQSMU9Witzjewuuttw6ihNXJTLJJD4XZuWJEwMK81RBwDpwNH6gmEybatc5MxBcWGd",
  "key7": "qXUHeqUiTtj8y6BZSaVUk2PAXarpkcrRFjN3RGVCsjDTiZmXDJnuAtKg7vLji7VoJBsz6ZqHE4ueJBJJNnoEk7s",
  "key8": "45u2RDX4qgUffQqtiQAUXJhQJ1aq3vJzx4o4h8KMj45LeookZQkost3B7HK5u3uXTDdHRG8BeYv13adzQaQjCrhr",
  "key9": "3ftXv4dGhY9XomhqDxrcyo8YukdYNSbsBg8Q2Rs4RNjFYKuDwRNMuY1JJVxLcHiNYAtwRpkQpgRvnZrPzwqNqnu1",
  "key10": "2NkUPSKy1MGWp9iHhSHWSwEhzzxQ1WcVhDVJxqsg79LcEoQtCw6Wz8qNBw7tvbLfRouJuBXuHcudFWYUBNyv2eME",
  "key11": "4aSn5qZ8muDYi5vQPYfwPSDmMVZV1ZPKyZRGUbCgX7bEDmUNvgNhwLSBbJ2sDXQtDYvtE7qyS5tMYmv1u5poZS2h",
  "key12": "3YoUUATJjBeTMYzWrRbz2UFDWe9HJuz3uUpX91Rqqe4H78cN1NFdyvyvaq1XNUYAfyztfDkdo2E4ymMLsM56gVEB",
  "key13": "76TdbxUmWs39hMo3Jw7FZGqQh26GRyZptgbRxmSbzxYddqH5ccDEnXk1A721BWueLefRSJtqRooDScxsNCRQPrb",
  "key14": "4Bo2DWMA6MHsRprxoihQMq17EyTnRd8RQgyuve6R6jREdNQPBDqFQhxRDuNy2fhkJXN9e5fp1J35iYKLZB3bkAsi",
  "key15": "5LvNE7sY42QZVESZSpoy93JLcDeRQkwuxtouSFsRwrMyxzxAm94URhsUBAu16Kwwa8fuEjGQFgxnzb6L2fistJDt",
  "key16": "VnhRPJAh88iRtxD6Ahedn3pRzwoZvet1NRPpzrhp7bQHrSgiKZZQGQ46fuk1zff2oDMzQPkzYWxPxiJa2Shv4TG",
  "key17": "2Xm8p7NAUCNVc4CY3t8Sjv18WZmpAPRjhvS8KsudxKe7qhShh4E6fNaLAvrWTYs7eebNMT8BfhvXGSFddxhtUJNL",
  "key18": "4LpgAvyrvojbsnhBCKstWSZbSHhVJuUyUgeUV1iSedp1jQNXL853egRrFAz18CfBRBLgyspPPK7KpPBAooVHoenA",
  "key19": "2XSTb9BtuyArN6jPncBwAddwQYvfBqVgsHfnBdETFQ6z6snmeSxineo6Zt3kUUBVGkr45d6kcDMEK7seWCCrL9HT",
  "key20": "5YDKMXr6BgvCMW18UQKAAYysxyNkxMBasQ8a6yGXdGrXC5PrPbDYgRaQqmNoFdvz5mA5EKRJTfUJzLqQb1JXi1tx",
  "key21": "mWLyWNPQhpM7Lv7zXyG95drJQMrAfM8fZjTrBHnt4ocgxPLYC8ACzQJzpD3CWHgDrbKp6h2HABGvmyjVg8F4ZWG",
  "key22": "5byyFEjAHCu1VdKhMzTxRUH339w6DCVdjaWaoxYMsnXhmJKynYzM76gCBrDgZaC8GTV6PpjP5g5DW9uePhm4wqCU",
  "key23": "45jC5q3cgJxz8Tep9CG74fzsKqs99asjs8s8qtXbHuogojvumduJYRt8T5HMzn7dXfJEQPp1zQp7D1DexHtedUfX",
  "key24": "3dQa8LtoL2pf7gW2sp9nue7TCmPRiM8XNDz6UuyRVSYrpHjsF311VC2v3bqRCYMFZ813joBhgkw3MDQ9nPVydAxR",
  "key25": "5bTu5AJ5WCUbHw1qBHxJ6EL8aYNdu6R1VTR2wGaNhEyDXy4aa9maQ6pWgBQNTp4pYMU8f4cwxGzQ8ZBw9mFzrczL",
  "key26": "482bsL8M3EAjW9f5DJsYMKjZrpqKp7GhufzKz2FMWi9HEZbPq9Vn6cPYrh7G7pv9SuTvjbNzVKh3LSkGYWtFCxiG",
  "key27": "5FSiqUTMHNa4D5Tt9o2SED1LYiixR47F6qLBDo6t4tjmSpNkwXx1QduzPBvHD23esjoerYNKqhj1h712ywvkhJSx",
  "key28": "5RXkRy4UBvvFXraY4vg521ef183fr2onWF5MVfCmkkQupg3PmJh1wbcraef3X2DSMLCHTUa7ZYCTybKSTLxWdbb",
  "key29": "3JbMJaSDZzusb3Bn5A1qiv4VYiqdnBRNwop7AuREiX9tzdbiNGbRVZV8yq9st1rQ41VZ15gMDZhFBbVV5yzYxHXb",
  "key30": "BDhAk3uaC9E8a5zDZ3FdjrW6agZD85KHNvWAeGxVBWpek2NX1upzqRfq1rY4GKqXU8ZBsv3uGAUBpKjb4JqoP9x",
  "key31": "5FQ5wK1EgvC4KMYvrLP8cTSRze4x4QeiQV4ksAMLBcKJBfWX3UqpXkG5YWJYu7xgqqAurfGk4Gs1pePeSpESaE1q",
  "key32": "3KZj2d7EUXdHRxsmXXCnDS4ErtCiLYXvSFdv5fmB3TSwY4dNzVt8k9Lu65ACUmgcWPtS79jQVhTJYGWC9rY24DUx",
  "key33": "GuCinbNCukPs9rE46cZhCMzfQe4SqdEuhktuJUxB1Vn3C9MpMAfghLaKdCruhVCNDMZPhNb9FsR9U9rKgLBZYTY",
  "key34": "2XAcrdVpwSDTh7FcTjRMiArEXV3p4YHwtFBhrXkvnEz5kGVG12gzkQ1xBKouCikPhuQPLY9tVk28tbPjzzTN2dby",
  "key35": "pWz5CBqGZacJM26xikBwA6dsV373X8rrHzTC81XEwMYd4119YAZ8UpLutApUCHg3h5DJHJX3sbQyPrjPZ1iW6dz",
  "key36": "4qzMB6CSr3Xx6jEcDx3fNGE7KanvAFJCtMMwX42qmPi8Y6ERP2JSaNfDNpwGK8LSmbKGGiVTFVoQ2SJxxeYkq2y3",
  "key37": "3t63VFJN9nzC7pSASRb6debUQfwwF5ohrBRaPT93kGLFYKyUzybmyNVRVXbHRkQZqeSewo7H1w6nXR9gmK7paS8J",
  "key38": "3DpnGiphKyRLZoYXuXFSo9KuQqSAMscwQmk4offRjhRsngzagDke3q8gfvvKCFuv7p1YkBn4rAEYsjs2fXjmyH5r",
  "key39": "DCxue8ANFcUnWx7wFbbYN3ZRkVJF4gAWPUE1tLT21KxiVdoQDhF5zU8sT68JLRkvLFEmKKXEYMru6JFwUymvVfq",
  "key40": "4P7Lm5PRiT8V3w4EUg4GjHmNUufy36s9tRjeP65pJkKv1od1Jzf5eoP3bVwkwew5smnHSckUGWE6Wb1MM6SSoXpR",
  "key41": "2WwbcV4FWVwCTKAPo6YsPdBzjiNVpZghW9Wqd567qjpJyiG4BcmkfdrFfofk8zKbA9jjrbsC5W6RdSA6ZApz2sJG",
  "key42": "27XRzdoYcNEKpmVeZHHZnU27sefxywztbSipBnizTWCopcxTQyKb1ePieQRebrvu2E3jEK8CiF1sG62sX53dsNzz",
  "key43": "nu8rFSZh5nSPQGmf4ns5MG6RLWRjShqRi1DUiRemURBXgGyCDtN9TmsDVLSEPgoQJNiadoVdPv9RUb3xbhvnkhZ",
  "key44": "33HKwr3CeYsTxVK2WzL6R9B7n6sDFTg5miXPXMkWbdunHrzzBs4Y3VULfJVWXEtriPFmHYiUDF2QBhCGBHWd5XGo",
  "key45": "5TYvxfimsUfyj43FLguNWRnWctTA3FBhrpzKgkB9xXo1qVzLFrHRsJ477Lp923xbTU54ZLcvMHzp3Ja6Xj8dZgG4",
  "key46": "dXVhwWr959FFFyXfqawpih9E3hgXpeaANVjbZgP2h8AKxsmDLrWEkwNCLUKcjPJ1F1nb65o5ZwNBwC8vMkjkQkQ"
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
