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
    "2JjnwfaqUi3AUM1CUNKXLYMGFK65iLeoinbgAe9zopNiBhBheTCXc3Gg6KECTKqrtSLEYfVqAGopAubbWtnam9fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KSuDRb6HFtHnPVcYUP9qGfBRaydeP1y27uYbP3q7goDQQNHc7pQSpMHE6M2EwQUnZgdtX3NhxkGGpnwFaestXLm",
  "key1": "mcXS4jXZB23tCUANyGWjwXd7dnooSDWtXPFfCTSZtAmDseZjk7bM368oaArKh4hUcrqU7kS7Lxq5xV2kRyJfQk2",
  "key2": "QBDGBxpUsrRdgKNP7vpM5QM6kR5uK6pFiNExxmQeM6U8vqW1fQoiZhwVz4Fa4xWqkifXwx38KZ23QXEULrpr2yi",
  "key3": "3FdCYSwcvpMovi1kzVyRoz4izvSWHHHHDuMrw5ndvADivJCjyD3xnaaBvwmpX24rCbwjPXERdKmV7zLtBD2bSMeW",
  "key4": "24rU46VzPRt7r1kRwu3JhEHwZmdUsYDerQiNkVMHWGUAm2ksWviC6gHNjEcfvwCJLbnFbzBrrn39phTYdEgRw9Mb",
  "key5": "4pMkGsdEmL2ir1gQDqToMB5uXc8M7Jw9u7fCDLMvVya2VTnWNqDs7mgzdJui2MQUf6QQyrCjX7emK2qeRXHvEFni",
  "key6": "38fNwTwynLcnQf7HReydiXqxPgQfDx4SLDF4VzZChZi8ZYLe3AsfDEPxASuyAi8C7uBLSfRjnx9qNgFeFYUPf3uu",
  "key7": "QToCuqd1zb7BqAMbB4BRqRC37i31rTDvkRo3HJXRZKu91rJzSCg8vTqLVVVbAbrcnCJr5fMsyrSUvhd5wVx5BkR",
  "key8": "5huHqMxDoAJJuucpYoiFunark3R6U4FRhkUNcSRBeenhoLtjZfpgvN5jgKj5N4go9f8T32wkoK7T9jtgKstZJi7j",
  "key9": "51boR7manmUMfQFGJLpHJMPnrQJrJaknoMKPgerokC3P9G5zagXuTWAbRB8LQD1F5EBHKQAFWnnTc76tcRmwBY8E",
  "key10": "5pvzyzLTje8LogWzc8TrRQraJLDpHqxGtC9MZQ3WLwsAa6gnFVHsR2d3g6f6GNdyGe2Nwm7QGUoUK2T1JpEbFJ6g",
  "key11": "2jn6qUAhJwfc6Lzsq8z5th1dfmRFiZ4i5yCatsNnBgegUhVZxW28FpqY3PY9h2iydRbLPtkun7qH6PioxRAr4DuK",
  "key12": "2Zh8ToTqbFFVUHPpL4eFnYDRNXQTfsmAwJNVzDqJ9QsnqscmGpG3PoARiLt9NVVzgEG9NmPjJ8GPWozSLnw8Xj39",
  "key13": "4VQnCGeLHJ9XXSMgmoZrp1wg9w8bitDQSxuwtiZJNudFuADmLwmxXj5GtwuYN551uevYmabysmvrDZF4D2FhygwB",
  "key14": "XjS7KJektZJpgj6XW87J3vSdWde4oAAchrgmEnnP9omzt6Sj4wSHvNjHeB6RMd9VKhCxFZBNTGDNzZWEtJfJ934",
  "key15": "KvAgshVMLCNKLUg5bupSPeP5HYabpV6BHAGiUGjEVVFeP3EqRq8vGACERbNm1VVcF8VN8fW82hVvtmjBNxnC5wo",
  "key16": "cYGDbmeEEBEg8Tij6K1DNzQ4W85WSZcoHeyUwJJRFfZfxL2tSqV2ZbREbRvBTBT2ewLkVhzkGZCTg67HMWKvh5M",
  "key17": "5Py791pN5xzd1ZpqFjEN8mxQrM3DXRxTb6yiLVJg5Jpyt2EjiUPabCSsuKVgmhdSYJP9NChJXf2Famgtgh9T8Kar",
  "key18": "29xwePdUix1gLrZgmA2kqq1VaaogEnNGiWpNKNCxVMLQmZvNKGeisvQ4sodzPmMg2qRnVyQsPzPfWjETnxaA2XEE",
  "key19": "322KtiQT3VNXLBJfeXNZqf85MXkyKNobKgt25ZGiAEwfwNAjFucC8FBaLtKXmu3QCiW85H18oe76QBWK8xgUwXbU",
  "key20": "3GnUexBDw9JanSmPLpN9nBwNB2rz79Cv7mbkSAikB93urwJhPEQqeUPHT3mJx3CdKgDV1xhbXSHmzJNwAMcRwhAT",
  "key21": "5mz3Sbuz8Dt2R9H6pyqNqwECNexGetZeBqThtXdA88enBTB6dmFK3qE1XGqAX8RwSiYwTjE3PFFbopxQ43f8tgUd",
  "key22": "666Q5z1Uk2o9TwnjzN2jUQxxj2ZhzFRwW3aREacg2twym8ZbBzdKZmWDxFQbGSpp75gaGQ6uovf54oMvgTs4nxBk",
  "key23": "64hEn1J2s5fkUzwkbwgATqkQHKGP5TZnDdAhJiFFm2vJWDLKUdcy6Zu89p9eHbesD6ZCLbmNHDmzdZVBo5tDQueP",
  "key24": "3HBNP7rVwGpV8sfDNebb9rZBwCs9N4BpoFmmcNKiBU1nZJJ7dtWYdbnUXwdQG9rE8QTNSJgvg2XGcJFJW3FvwD2h",
  "key25": "4Q1sMgMvNMcgBgeuzHaCHgQbo3jvnNTP8TUHSdCZWXKtAJ5rSjioHyu1JHdJ3tc6gcNJHkbApFZQu2VGYapKeYvK",
  "key26": "4fx6o451ncyR6nUKJsPfpciXUkj5wdsxrFnN5UbNU2XzzFLCbUgoELQBKMypSMDKsMihzo94d2GvFuVjTQsm1Pae",
  "key27": "4WgzATwTTuFc5MYERj2KkT7yBdsYZBeT6ZcKVBwgdF3RQ7YKKqnUQLd5BUzjNMDo1PjyXGyUAKxsJHnxtZyi8ixX",
  "key28": "2kXnU2DZ7x9hGWarZ2jznhvDjnYqraM5CYzwfuDtmrfTiSMN7Z1Do57LNR4yv2KjvHm1TiX5C1QBcDMucDExut9n",
  "key29": "3LypDWtcjoPr5vfirFyycZyi4EojE8YPW92FCZKDXdSNn9aC81Xga4ZPqisBHyZhpUP3EWRWLC5SS4EgcPceuYGv",
  "key30": "2FA5DgYharjMC1BBqKWmYxZnVSu8QGQKdZcwormfZ1xPFoqwibUJYLGdY4eJYvW13wf43tb3eRGzBo4TX2fa6XN",
  "key31": "vfuHo78rUz8pmkeayVah7gVBrjM9UCFBhnkDw4i3VTx8mKH3hTXN6wDvpAaDrdkN79MDKfxyQbZi5h1zLryJCzW",
  "key32": "4Xa9LgAW6LSkh5Bs7M71AAYRiZMCdwroVS4XquNa5MzULcPHH7mfkGJhM9gNLtYjPmqrs6e6Pz3fsT2UjVKtBUSc",
  "key33": "62VXRSNfwuwcjpoG4sQzx8geCs1vhAtZpBbeE7E1qCAvMZQkSuHrR3F1rZ2diYxTxHXaqAZFhPQaQpmygpXzMVF7",
  "key34": "4qLiSpwb7NqRUBLEpSQQjCet9b89j3vfLmoUi24JEUPyb9HDQoeCJWktKbujFaK7iLE3Q5FgBLgAvMpPDv4HTGWT",
  "key35": "3wMh9MAkXd66D88PZiAQE4mJJK25B1ZNTZxTME6ePkhmMxKUdaCB79xsAvBRcgYLwQgfTsAv3TibGdA5d4vii9sR",
  "key36": "5GnciNPoo1RFmjhAT2xiGyq8y9UBXAT8AkRPYULnS6yV56QmQa5q5uCL3zX9gcPASSpeLqdx8Gir4qnzdhqUiodF"
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
