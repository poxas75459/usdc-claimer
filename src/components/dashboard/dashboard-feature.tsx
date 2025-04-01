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
    "55tPGVX1PvDiS3q3iXX4mM1kuqY1tmH3s57rKeDVXBZ1Pf2fRnsDJk1QSJhKFKBCam7tfotkfwk4mWuSYdKCRtWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45jnXqcdkPgm6QSuWJzNC6JYsxTMc3Q8w7YDiM9kAXsy38DBgGcxKM8CPWVvHujtsEpnzEgRNEmweCwWfcSKg2wt",
  "key1": "5rFw5r9owFZrQQwywnCeBHvXAHevFdEtX9cmiGwPxsgtnGzGPyi5Mhwdz93gctNBjd2aKPkqU8kToEhkGvbexAQb",
  "key2": "3ZyNLQHSZzfxj9gXW4kBLvzhfYZeNUeoPn7DKoRbUqDrkssfoo2BQafrWqgDdWY5KNrECHbpKkkEpExc14z6YFoP",
  "key3": "4FEmGe7iJahwxFZZwRdjFyWGzGDWp3SsrT86gMXqt4t9cpxLrx6qkH3UgJDkQc4Qm4VqPk1y8rUz69U7iekaFJdR",
  "key4": "5WASmzB9LGCnxquP55fjyEfyP2T3o1tB4YbDebcLA8gNkg5f3cphYTocEd897h3kTNw3iPBtyb2yb6mZ39p83HuM",
  "key5": "3hoaFctK19sXRBu73cP8rhVM9nHfJzDFdzjaf7rM3Kf9LjxoAFCUW9KQfHGDrhW1i478VSdmHnSkVioAdZwLCGVW",
  "key6": "4a4jQfAZygKmaEMjbizwwoceKxn5odxUYQa6S4o2tiNQpMEzcPhFLwu228esLkuEe8ykynKjUfgcA12puAP912mV",
  "key7": "25ch76AW522wZfRVNqAte7UbkMHUWjAhWNHdkNyhReL7cqhA5tDXSeQWaRYvhoHswHvwk42qKZGe6B8xDMp1hqAJ",
  "key8": "Tq7sn6cYk1FERFuCBXmSFxp2iWYok2CgrnV5Nb6ZNCDQBZ3pu6jrhbQJBffPSA23Q5dKVrs4Fc3us9jmW4bYn6Y",
  "key9": "gzAnPK6gDtWkawoG6wusBBB5upDLesivSKEczdHHjHLmt3UmA17EtR44EyXus2bdgjdiM8iSW19kePYTAqfYQDK",
  "key10": "ojvvpxe37XNk1ZXSHiVrRCYp8h1NS7fTFrExAdvUiCFSDubqYUUVWMy7eLPwC38XjEKaZopYbbEZya8Y4WEB8is",
  "key11": "2bW8CutLkmpsYsjThTfxd9ZEDZuiv9dQP7kieT4ATwN5VtoKN6onMfDiDMFBe9FLgKj7q5UrkMRybZfKvz6qyeiz",
  "key12": "2pNp2Y98Uh6ZtGYXZYG7FsEPpndQo3GzGF4BawE9cuRgk4CH1sg22Nq1XVDEh8jX7p7jxC4Ds4HPjBHCmtApzUqb",
  "key13": "EZ4rXo9TGqJphhJPgucDJ5veZCMSbHGcSYJJd9TyRPFZNQkRr9frVtvenNAhX7ttuoAdvky2vMBHifimUAheoe2",
  "key14": "5mnvqFrmUrNZYzfqJWgUh5KBQ8kaa2mpjNCwdFb6Se8Qp5cWk1M8i8WfCVwfKDYSiRdTzfeZew3vPjeKMNZYLFVD",
  "key15": "5ys21RPtUNrQ6vKkBGV2WFtw1hUdUboUyeip7xhPbRysCkQVUn7TUfsmj15L4CbtDv81tdSHSjfJFGqCybofxu2u",
  "key16": "3fDvSFMKsVnjhurPELE3kdnSTeKtWuxC47LYmvUnnz3QTLPciusGUVzZwo2XztQ6Ds56BLdbqdRqYeRXoXFxZrqP",
  "key17": "2FLZAjYCVv4yac9f2RVD8UjmWuW9dif6eBNvtToC3fRUkit8wXYMqNqKwxraptAVQpZPUwvFYdFhKAUg1oTkttjk",
  "key18": "2zYrA8LD3Wxt9JyBh1o1Fi6Ur9SJkbowRxqRsgfN8GwB1TEGxYTt13B5ixELf4j7bqqx4VbaqcY8czKpzNzQVs6g",
  "key19": "4ot7YwboFuK9Ef42EDVqXnMuWT6KHzpzjYr3j3rSo6Er1wSbAwUFQ7oDPXMjScPXS5gXiSYaBNPJ9NuGbHhMxjue",
  "key20": "5ruJoQG6Ur4LbE3xXb8agLsP3HwEUk1k6S5Hcbx2YSgHoKXdd6B3iUoiTZJYFyXHvmgYsg26ae4nUqi8YAcoUUiS",
  "key21": "ZxLrdz9S6aLCJcJJbYq7FcDtUW8JjpR8deR5R85KUYxEoL1yPc5gjqMSu2EiagzAqg4L1ai7NZBo9KUZWuTvL62",
  "key22": "vDRGrK9BuCM6ybwXMiAr4eeKxVo4DYv8P3K4srq3oHpWxwZyDoxk4QTJ3zxyeN8LXa3Zs9uwuE85T8jtXvZuw1K",
  "key23": "hq1qv47zbFzBXymduX6rGsiKPUxFzQi2mXfMHgkfLRyuY4kXbbyDMhKtQpGxSi5qAAzKvoV9chhoas7xoEFKwTc",
  "key24": "LhoEyWS6fcmMSi52wja8Yc4Egsj5SdL191We1wQ8pyUsUoXCnjrjatrsrRbYE2cJaghQYK1ANMgpwL9FN114okU",
  "key25": "UcbkR3jvRvWKeYWiEANAQB6wm5tSw5sidjCyFtdcTbJYvxoAhggkHiar95x9tDgbR5iGoKKVfiz2R9jb5Lz84mt",
  "key26": "ETVzhbHnD2MPw5boKGNiARNpuBkaWMq5wPWt7KNyGBmj37jyqttbi78Mj3EkwENLoeyfNMsdobkKwXAYn9abfH2",
  "key27": "39xieMu5o2kn2HEMD4k2FZ3e2nv7sUpV9DC2qz2rHa7sikGieLxVbGKHgSD98CL6oSNSye9veJLLgBnDWvanejLt",
  "key28": "4jLNt94DfAtkEHNKqrLXmJrDwAD34hKGXFaHtWhHAq7eVCMj5BEYdz7jMYEPRrm1S4T3CQMSEoBAR3QEgSNemfz5",
  "key29": "2CAPVaTDH5C3L4ZHhjxgk3xGoyS7hQsUBbqmDas9heYHuGUJ7Yvbafbvpcgvkjs8dzcV1DzXFc5TnJQCHuwW8gXL"
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
