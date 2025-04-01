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
    "2tLNg7jfhjicacGsoEAQ2h72xdqUoNFCpb8MRiv57PtAR2h772KkjYHUcyenh5r7hKSDCS49SwH7jiS7TPyKYnDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32UMXVrLMTL6MLj7eVZdAGdCTd9txdN7waRDFbwraFJbAVUYP7ntFnxHQ2L5JZQN27XpUfVr1DbRC1nJECaKwcRv",
  "key1": "3YEfYw6jacVeFRVaG3CW6bscvHwrWG7sa6Y4nph1BjY3EVQAVpmCbztpo6wp4R5hh6rEcA6SGrxAWQyMsmHZF5b",
  "key2": "5PUsXHzHE8t4HrBde4oVmmVBUWf3VVbT1ugg8iz8btCmEcDmTr8ejLH1xv45DAM8omg4h9A9p6dbCXUffGVGbLK3",
  "key3": "3Ri12VSmjXqxaQy5e23R3jER8HbwENyEiehNbwrmY3Ubwr8LmK1FkR4uNdX9viBBwRbYiezmXJFDgLf3qFnAux72",
  "key4": "596wLJE3ym4L5BFCzAFcZQDjJ7pSYoAyujksyHBAwqXVRgcid273gmi4SLTUjduFid1wVRasbKQmuo166wyJbAPc",
  "key5": "58TvsUv8CQtC2mQe7gzpGXAfc7K5jnTZp8BP66Km58yKNJNMGrT99n9onfq93gsb5BTtALdvZRucY121h2Dgg8bi",
  "key6": "32tLCXqMRjLmbY3ts5n7NiScFT9cS4w43WgY8UvaFzbGibuogocBYN2KztM4eBdGZ5GM99JDqDmkUaeQKk31MMgX",
  "key7": "2jYgvYC62xSwW664BK5Jzse9jgUtzgnfC3DAbYiUVkCRQqQQLUMJmBeZUmmM94n9AyN8mDi6JnL3behFvvE81rDK",
  "key8": "3UL3bKGS13FBJaHxEmNXhfgyYEeE5wvZxV661qZhgP8sVkPoKgqnSbidC7ZzenWZ5XgNzENUUGVk42kzWBHNdLdh",
  "key9": "2YVYWw5bfgaHdTzttmQqcTXvBkJLxZhQMoQErTS6ZyDc5YNdfDD8wcXeZy5BPY2Mu4huWhBCcFcB4VLL47tD8Xve",
  "key10": "4wKMisjTFKvXESNFVCgsizQipSFmKJcsWHA9RLFwNZ97Pw2EkvUEFQ4htd5PhVfLDAdqbNnM5M4gR3zx78ErdqV2",
  "key11": "4xUbaHnkMJb43ZA19eWwf1Xi6KZJbgefAnkmFUVwcz1712eX2z5icqLdHKLV9joXj4Hgvmi48zUxWHccUUuke7Up",
  "key12": "5gdFcodPPjV9ViQw5Y5jzXUvnws2UBKQJpJXSUvai8Xcxx7i7a6cBtXibDyeR9pkKGV3cp34iLSh2ZUosmxkt21f",
  "key13": "4z1NPMuaGdQFVm6C5fvaCZFYw5HktccEz8RyRGr3Xr3LiP8xf3jbN1GwGRmT4ZFwRyzxP5RFxzMkFV3gEgKYXF5p",
  "key14": "GPULLpRHGnq9VDMYTnjRhAmsyuTJwYNK1kyP5wzGoi8ishDtezHrjQincNDRW2TKSbcA1KywvWwrvwqNE5LHdhS",
  "key15": "61Yx25nNSrG6rZbUeburu8bHgpiSaMRWsHjo7sP7KihE6ANFr75z7VNykBgWcgRw2rkWSX4E8iTJiGw1TWTyLcRW",
  "key16": "25EQdxv7LPZem2QoWBhG4ybao9scu9acQopx1GMA27uH82JAUWQrRWFeNSssKXoWyesfe2eR7ScRANgtcALXojeT",
  "key17": "3BwZYPGeQThLqE4tJMk1qHXUxJSS9QUVPYL3BJxaUomXAPhpy8SmAN4sSqfETS8SuHXbj9xfF8yRcPu9JrtACked",
  "key18": "3KM6mYcNiUuNPGxWgtq2B6vgU5xg9gtas8fwAXvqgrAQ5Dc8fNTcrhpErBw2bBBMKu2CQdotS19ZA5wKVsTNSy2o",
  "key19": "4ydJPNa8TAKNRwJcoh1HZZ6JHiZUz3ZbjmkGLGnW8xYtJ8wHfvWsqaAH2Vfk28pjM9XSmT5QxoXdPYuGVpUVw3rX",
  "key20": "ZpHMMTFA1qjLJTAQxeV9KdXEWWH7qBzWdYuBsEjDBtGDxETNZLGcoqwjTcvY9xYKFgpzv2jn4c53iAXpdSDa9vi",
  "key21": "3UEATYnu5U4YZBmQjZ56e52hpg6jYWAmBYm9D5GNbNWjzk5S2e3uNJYUXuj8QH3s3J1PKKrwG1jVVget7aUHYFBx",
  "key22": "2yYki2PYPodKxFFBE4TBiZ7oJi7j1aoeny8Wa6B5BEMbtdRJmkK8awbG6qS2orfgcxtQn5k9CCw7Tj4MSHN6Ye4z",
  "key23": "iUJm26chV7FRLes3HaWm15Jv7WfSS2Qrux53r4C63JZvupMEAjKZhctCY6BPxQg6mECaAodg7DnsB1nWuchqD9Q",
  "key24": "5bTkDHG9kRdR4k7ybFyBrJPmjcj8RW3yKw6q92p37gAYJQ5ZgCJGpaaD1DsmX6gG2PywAfGho6J1XbFms69zUVt1",
  "key25": "xUs5a33zQ7Y92UNmeErRYz7LyQhLL4abYLpq67shzKHbY6vHAsyAuT7d1pSsD1qoFsfuiTQT1icgPs41CdEkPws",
  "key26": "2hXLWUDgLt2EazCL2ve5PSNp6QHoqGJrf9sML4nHUDfiekMqP4JosePdTo7yWZHwLBYrcT1MxihEyb7w1EHGynxw",
  "key27": "nJjE2JRgBcvH29NfMe6LAjNAs6ngfA9A5oX5zH6fQibQuqJPhc6WmHJmavu574VrsAUZWyujcNsdsnwr8opSLtd",
  "key28": "67UsxjTMFaz9HvWeUEWoGbyF1xjZTSyzSvGz37VwTtjPuVWBcBZxhyG62mutwVBVdrfZZZiHrg37JaAKWHHe99yj",
  "key29": "37PjaB2anhrwa43GPLTNtTHt95uDtRK4Vx42a7LzU6qPV7w5UVs65MdYJJUx5y95pkw3jxuNwN3J5xJvAwuWXEYd",
  "key30": "3Mk4ewhrTZjd5XKcuUuopzTsrsYLVjPiJTXWYfr1wNo3TjHvVib3jyrs4oQvRytRhjH9XzeBsyLPAR39Dz51QJT1",
  "key31": "2QiaMJrTBoMQfQoCey2dbokhRzdCRJzhv54zWKC5fkVbJe8474RnHmYoAWYZTUTWsU8NsdZTzuDepzUBVPMrGV3n",
  "key32": "2N8duso26RT9cWkFMBshSMNTfZ8VqNc9e2CAyfcicQJUWAPe7bj6YkymEN5dti8T3mFwDnf1crXU62v2i57iZTqL",
  "key33": "4CFhMa8Dd5Wp3XZegG5fX6p7S7Kc1zUtB7MLyaUhDJjjoxfRb6cg9YwyGnuVHdDbcrwo5PELfPSpcsGrxt6H6G2N",
  "key34": "5yFK6RBsycmCuaWgRPAW23HhnGuEuGMtvHpg5DUCfrGCsPqQ4E5Aye8dijx9N68BxeviXxceYYTCkwveaiSbuMSy",
  "key35": "2RxHsooneTeMwr6tLpZAFYsN3YjFk3VUeW5wVQcGDvWwRq9KvFxKJiCu6WaTSGfLqd4kEg5ub6rvqpSkTZNrrcE5",
  "key36": "99Ynh1wMpWDKVRsPGZNCGceH4BMXhByQM7TnZhYNJ1aNMAphhaRghfdJFePgbKdY5yAHi4akww2M5Rr5oYW7c9w",
  "key37": "2y3BJaUPSiTuoGXuCeuVASeRtB7HJKR5qxiqYaXUNLT6WshRPLyn7prfZYapwZB1HdNhDQ8VnNtmjY5r9vYB13vF",
  "key38": "67kx2vFcsZaPHpuYB3zH5TztMXukr8egNycttQZkmoB27QaTmbNCAdEZuAQ3XJ37PHGRrfTWr1f2pwBU8NNE8AMq",
  "key39": "5EXdSXQ8zEEVbKBnVLshkZzvZbbn2qUU6CGEDfCEQtcaJoVrPyyEQiZi617QCKVV3DxSyuBMsqyXDZcxXzF9t6Br",
  "key40": "2qRZqeSTT5HQWyPQ9rF1zyQsgrwFnXH3o8J8kKyrkvXgAshmrkGerweEEtaHoiCXbnzjWrY3jvsTSa2EUL9JTkAX",
  "key41": "3V4tWVEuGSCcMmRmNcrstiMSXwN1MRSscuf8DpoV4FKV1YtcBRrpGELKbzkafmfCpK77KmzEozV9Hy7ynyGQwKxq"
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
