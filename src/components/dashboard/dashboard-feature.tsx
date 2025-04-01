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
    "1CQqR6fsbogmYy6vrqMnDq1xLCdX8JjfCKBU8eFGXNkXmTVM53PPprbadRKrj8Pep1Ke3ANJgb8Ed1JF52hVTfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511KK9XckZ1ehKKGhmxFp2Whi9yL5dmGELdwKDVk1hFz4SHkjxofh9zXDvVkPaiivdKr52Dud7mHXf21HVncXDZS",
  "key1": "4S8N26UnJ79ua2zGLm99CT8GxVM286kbSPBX1CfFG7mM6dKooWCn7H4bcLZQ3P4SpmsVgEkyqP61UeV1o3wZshcL",
  "key2": "42JkewahA14V3mHAkQXZiTFzRUdRaQaxaXwz7Gg6K5uozyJnWTdpZZ1756LuhxLeZmFLvtS4hg1JpvD1XBggpZDm",
  "key3": "4LwQvzXkAKA5rxTVkDLdY2B9G3pYK6Yom5dNNXm5VFnBYJCeJUREKPGqvkoFYrwrNadtVjpvdjiqQZZCemrRkUHj",
  "key4": "2MjVEwgau6d14qbBTWQZhJvwsSxyLoozPaEsn69DgUB1T4TvDLWFpc3HR9V8HrkHJPBNouVYJ14MMnkAw7JsPvQ4",
  "key5": "4Yib2eyo58N5vRvknrCf6ZpoR9ATTDn7ySrRsP2yRR25cWi5bA2HvD4fKUnpvBLuD3kp8VS6pFAJswqVK2Jd1njo",
  "key6": "5MnStBAN4fjZoV89jCk1RWmUyZjc3eNHZ1MREqZtXXq51Kn9odKUzUUBLF3LWSStXYSKP8o2iTEzPnjGc8Lb2iFg",
  "key7": "2QxjKVniUVauodXtJvcFBSzHiY3WqYpctjmgmKDBg4iRkThQ3Gk8usgqF95aaGPXs95unKcDGsKz2dxtovWjts7T",
  "key8": "2K1Lv3z1SYEobwQFFRFhu8LmRpAsPZRDauX6gqueTF1T9bx1bxy3AriZWfrnxzBPEEGvvHGKM3nGEDbEBGbRh8Vv",
  "key9": "4RCVWL9c6tmEFzPrsarWQimny1X4hKSTPF9bBxffyZUML4GSjB9hv5UFST4AjXvNrGivAtagBvRef23mnkZWKrY",
  "key10": "4YpD7iAbSxQZJniYcF96bJBQaLpb5D9S73kXQ3EuQbdh5dLQzKdtcuXGYrtHn2FXEqaHvVowWc5bKkYKd6JTAU66",
  "key11": "2of9rctdaXfSxAHaQtkn6WN1AUmkV2v2BuEUcqPZwrMefBoh3S7sKjW8K2eFoXvoigScvYNo7J3eqn9WcvdFUgkZ",
  "key12": "3hu5srtkZY7bhHKraYGUDKtdVV1XKJ52MiWFN4EKgRRq4LGdE3gqLrv7pB3KjezFBCtpJuGF52bMfKWFtqn65yGK",
  "key13": "2AhZYimapQqHkkj39tetUGJhjsxMhJ1Pm6J5PLcrKciQ3Q5K3dwS3xdKYovwRRJSwrTypwKuoKfHCwVUeT7p81mz",
  "key14": "5sAvNvhsKYAZskTdCNyGYxHmwXT4vdrintmfQ3ygTboQKyKnciMk3Mp4LN9xcBDpW9CCQp1WVn1sFvAPsCFRFtUu",
  "key15": "5eniwcR6P7tx25AHT4cx7RRAQjw3WrkRFWvEEMCn3T5VR8mB3GTQvUxbeCXM1mtyjmWGAPdWQyFwumkQ6dCR4RRb",
  "key16": "48X6yk9vedMgiEkvSWqM73ytHA6KY57ejNNgoePtDFMJQLTVsHDs75vcjBeKH4cgkLcH8QGD9GTaYTFpLhGa5Beg",
  "key17": "5haaQ6yfWh17EnRuYkKepZwgt7ftZiF4gLPcXqA2hfqVTsxxYYE78Ek7fwLe4kYbchyK9mQaWpm7rqqFUtx6FLcK",
  "key18": "5KkJ8YMNWuEoXoUHHGMuxMMhN4m3mQykv72dK14q9QacPWVGQhYNHzSV1qJtSnFhPMyWC5fLqd7YjU1mkhP7Sn75",
  "key19": "4pYr69hsKFi9z7KMVmQzQ7n4WMr2trMEVvvrL6Qd9WpVmAYXkxNvK7XG8iMpmuvcenKi7ASG9txCPnjsbLX5rK7x",
  "key20": "3RiPGPb4x9uhBR3BcYDtcvSvLNh79Hs91MN6BbY8b7iRe1cJWveKVsegkAyWmsQXnyLNMhu39JAZDqEFpysgCNyS",
  "key21": "4pmqUpoLUBmQob8GUnaoMxyiGu7LAHJ2PJ9kr5kHXzALmQHmQZeym61up1BLVbLgrnrUmzbR6sf5SvpupiLszxSg",
  "key22": "2zxfuXQxk6gheuNdT2abMvkMiyyoXseZHBo4WV5bgs3UPpNy7BtD3BL3uLW6BA5Kz24FsiHaeh2gAxkmB4AVtvJe",
  "key23": "5fTSdDcZjPPuaPY5Dr4DoQrHRgcbGtD3n9LRoQvpu1tiGAEt5dSZMQKDuxzWnCHaQ9iXDFWU9VLME3JETcvdnAtP",
  "key24": "2VRXrh5XeSJUGCCPyiCivRZbRe2gfQSaY7cuqdMPuqS2g2qirnRMYRgT8YyFCFjU8hBfRZfXjYDaaiXSdqJfVAsH",
  "key25": "3VGZ7YddQMmcbMi8WyKiWPgfZXDKYmfVAG5N7uJGo8hG8BHZUNjsbwHqjjBPo69NfZH3pQ78si2GixMBg6Lrn6m7",
  "key26": "3VF11wJsFp8QpnQPuWQKdCPFTBqgULKRTMZNx86FFbcYibQ1BeTKwSa51Fx4T9pYT39kkx6Eh8kYSKWBbz9kPYov",
  "key27": "4g5iHuX23R3ZY5NutDJssr4AXMA9cUR8ETmtq8cMcWCrUzL6abscUEuxibDQaQNmZuBFEWWwp8BDfram4yuGcsXu",
  "key28": "5MoxP9yxWhnU2ptdTdu16BqCvAjLtdxvd7rRw4Q2jQaQ5PzM62e97sAiyhSSvk4mswZRaSGT3vRJ4HbhgqPQirdS",
  "key29": "2kJQHqsDs15jknDqqhnvDgJMqtuFivHaQqw5ahGsrndzRxgqPmrXNiMPeLx8UPYMHiUyuWuE8nwpRDRCF4xbRAjy",
  "key30": "2e6fE3PZBVEPgajo9KUkAPaRhQ22cNo3R1mPm1KTDmzH3AQDPqyJh9r5jjWgTQvUmJMEkypxctNgQUaFA16sCNRL",
  "key31": "5QZSvggWitxz59JT7WAx85dRaR9Vo9fk74oYMiUsZSiNbd2fcMQxCXhVqqZLyW4fbkeCh9mxxJ2nsxngYNwCbqa4",
  "key32": "5dkuZZJmTwaSLj4Jci4dcYehPj346omquDcWgtMAbq7a9tzpKiF16L7QJ2SszZtdyw66iDYjnUvm7GqhqoPsRzGP",
  "key33": "4ZQUWHS2kdNqDnoKVdAGN8pfbdPrynQUcYDumFy3DupppNjzXsip3jqMTX8rDeYyXkPvv8XzYc2UdWd5XWiS28BJ",
  "key34": "565dTD4PQUXHHVoqoZZu31jd6LuAGzA2s3iGan9WGerxSixKLjVDbN4zyMbsx2Ze1pvhQMD1926z48tK1jYJqcsJ",
  "key35": "5htdGPQbUeSm4RUaEbSmY4igLEeEF6jTqkJmjvyzy996TyXumAjNjgTccRn4LDM7geMJ9r1Hqt1Z1ZetTk2nmKum",
  "key36": "4nPzHTtQnsMAdLUs8eZx5sUfPRBwrPxp3b4Gzhboxd7vWt1pLcJAnJWeeDF69XUotuHPCfPpu951nZJRZQ1vk6dL",
  "key37": "2baV4NiSJyHmgQwFu1wNzVjFHTfG2kZMKPLXePhaGG1zwmnnC1rMetM9zvQLPCqUJtPsv5jh5VbnQoC4EEAz64s7",
  "key38": "seVojcT2Eqyj18WRcw1DVq74JYa7hJxsruMGJqFtC6poaX6LSw36t9WVC8oZWmJwe2VFPSXXBawiTT9qV9Cc5Df",
  "key39": "StjPxUfv4caXikmr57XuQRMUxfQdQV4AX1wVgzX5yza79Us4LjP7hzN1ukrhDfyEYpaiTMH3Zg7PirA1Decpy9A",
  "key40": "33UGQCVwPukmHtMbBbBDXrGc8cgeL8QCPvcVue82Bcn2MhEuqYaVdAvA4pjoDoUWmiqzP6pWb9euZuRxVrKSToBe",
  "key41": "4JpjegvZLo8ZsKZwHCexDQb3RCwqmFQXZRY3BF8x5eSnvh1aG1e6phKDC4AjwFuLxEaVBcpbDAoUe3R1naLj6JpR",
  "key42": "3P2Uq17zwEvUxdHNEJqRedH2YaJWzXdJn6RaB17qYuqy3mEBAdAyHctkhCXWTFPpXBo4Y1383kyiquUZvyPMR3cD",
  "key43": "zHtZgk23UR2ANNWi2dGUAJsFKftjBeziXer5beDkXjrbWimdcDSxssgHRnfGrVen7UM1aNfiRJQio8DMqy1CpmJ",
  "key44": "4FBuPKHvkVA9LdSWWi93VrJqj3qSZhd1QU1Pn6FduakpPp47xjqgnXkTFpqeQGHvK2WrpQxbXWaCN1ArR1HNeo5n",
  "key45": "5igNhaK5EJ5QSFv57Ub5ZCQVAftCeV9SbaEeL7XwA75Th6JRMXmPbt9VPpv7swesoam779F9Cua7vSwfiX87xtP7",
  "key46": "eZD5PYkpKm8CCEBzMKNAzYD9fFw22ZSQiEthidYwg3xkiNuxfaJS1KsntrCSkZPVu1a9oZ7pP7WWWSHwdKneU4L",
  "key47": "58uenkkz6mqwwYVW4pUaBJTxZGRXRWP3xXGoRqnQxEfXnGEKd5dY8MzUMNkRZmVLyyrxEQbG3doiiShqJFr4xeSD",
  "key48": "8NkVnXJhM9eCwUTpgSHDgZJeHA8zHJ5ktx3hSu4YmvqBtB5C7NGXeC6NfVuLCLgyGVYtAgSTPt9b1nCxKjmoAFf",
  "key49": "3KaYKsTh7yrbQ5uaTfvkvTeKbc7BGKpE2nCLaCfBdvAtCJHmKpprBG9cUVcvHEZsFGrGPjquJcRuodpFnzGQhSre"
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
