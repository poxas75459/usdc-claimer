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
    "41q9WiRqNoYQRp6T2arz7pNcyPCfoNoV7McfCGXDEzGdK129ouSsP6LhZ6sKB9Bsaatda7fwLYp6JTuy3t9hw6nt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwnPcNwAL2nNETx6wbqdZQeoFpyMV7GThabRehHxK1zGdyEbn7tedHWHNwZgN98RJUcg9M1iL9MZGswooavxKiP",
  "key1": "5ouZJcnUaYwqHQKwKwpPawKVKm8fKaBY4EFFKJscv5GPam8GWm5v6m1fZW1MjPZKv1QXgf1MtCRsNjMCFnT5zeJF",
  "key2": "35AWCbb5pEKiXBG8NaTWWQG3F2RwH9C248mZrQ9X9U8eBUtBdbDXececMyNZ8VZBqqrLdMtueXLVd4eqhFHq3ZCv",
  "key3": "56hJAJfihH2PECPTSycj2eiHRcQ9Kr6xhtbJPrXmSL4pAL7Yk2UsxoLm3cBRkQN7uruDzuPXbfbTenpr7u6P7ArD",
  "key4": "4kBhpVyPVMuAKJ7x4N1WjSiykg9r1ZGDE3ti6enu83NaEhqyM5Su5qjGqpJeQimwn6CsvTK6eZQcqYBryams9CXm",
  "key5": "4CDhSTWsuEJj1bietKySMdFuPrbRpWZUmEc7f2Ee8jC4hxyYCGh6aMhfmErnQmxHqSJ4yXCjvaitXVzX3xDjLFFK",
  "key6": "piRYMR7UyYh5N1Tmpt5XiuUUKuGm3CDKYUdmJBVEAvuAPGZkMUsntQVYaAeRVhCbTJVagmj5nhHkQqdFfR3HHwn",
  "key7": "5dbheXnb65t852nxAjsEpiZu5u3Kk7RJw6GSigfqEWXGZEgcdADJygm5hv2Ho5iNVdJTsMMdJ8hiBkNpE3buyUpr",
  "key8": "4i6Cp91tVscF5cbwiYnFf4EbNsqte2b5T4he2PfNisSCPrYjKA6QgipnHAHGMtULCqpsZEHHQ2L924iFNkzugoJc",
  "key9": "2xzV9edJiAv8HVP9UVVMf6xhRAb6nVthQisuivNevN8ySdZdDBhJx6JkTUmKQofyevtXNo6oWbryGxjwcTwVattK",
  "key10": "5tP7XZeqoSzaPuq63x8fg5Fa9XVrW5WQHLekRWLckLKt92xhuNsR5TB9bya8Cd5UyRYbzpRFbz81qF4LDanTzSRu",
  "key11": "2y9YKT292u4SoPeu7NJSQLxDsky5d6JNBTxqivNe1cbLGRb2kSdQuAQUUU5gBhPBfvckTKbu8j6dk9WD1ycp6L65",
  "key12": "LXrYwhtbhjUFui6hTZ7eeLBhNNjC8TbSVFGsiEVBkmK2BcSfB5mFjymDFWAT27WUu86mtxAXgagkF8A3ZdqFBvv",
  "key13": "5cUrsQdf988rD7AKWHkuNxaMUXRuFNNiTNJo68qB88pZpSbSBdBwkdNoyE6YtzZRkdKFbHgQFNZvujrKptGnpyih",
  "key14": "264KPZTEZsU8SLRbsG7gigbznRBA9b2xZfc4RouWbq23Fz9gxo25Df6DKBvDx8izYjAa15qdU8hYx9sNcYhFGqv3",
  "key15": "3VsfGe7Mfti25VVNcuWKkr8RuA2wGqhTJRUj9YedEbZTEztQom8qY1hgve4iC8T3ysYqNRiJdQeDte4r3CWU5gL4",
  "key16": "3UmuGwGCATHBMu9WapiLEbbjutGDUeQvjrft51MGvEQAvtXoHzAkYTpsxChwHwSPyHjmAmdiDG1R1sFsCMsQw6pq",
  "key17": "ZtmUD77GsStKKyod53JVPDarv8Zt27Gnp6drepUkt3cti2LGz8UYCh34VM53CYASXXenNVKybb1X4ocHCGmWeUF",
  "key18": "4ndpiUhMYkQQ8SJ5sjxee6TrmkfxvZHQgwhvXQ4GDDRLQfvqUGRM62fteQq26cBcwz76n7TkHFdRbsCkQuXYQ9vf",
  "key19": "27xQMzeoMHvFgBucNW3Dzd2ZhfwsK8PQwTagNzazTNVUsBW2mAoKd9c2S9QvGZd9a1DteB9iPsUFLLmK3oEgSuTM",
  "key20": "33C5p98hqnYaDGcpAaLtZdiZduD6ZMMUm2Es2R9TtYPhk95pV8d4m8inEaDsJtKc3cP3wNrpBx62V6njNfDQwzve",
  "key21": "5h3i9SqT17BZbNS3JHKhCF9nu2gkBpgAHvY2TUxzchevrSBXQxB2yT4up9yhCij8ap6wfw3ENf1H7YtWYAwhaDQG",
  "key22": "5PierCZbQfW2y7tjKhH4tdzhvGocqHr7dz38dtHBA4v3DRUL1GTyoayyXc89R1GtcWMkKurxXzcxF4f9sjn8s6gi",
  "key23": "5dFp9J88VRQU48kKTb45mD5suu28qT3Qofobvd4ThmdfQqf2MCycZ31ncWerE8THEm5ZjzmnjBd3e2qUB5mPQM28",
  "key24": "2swskFDRWWaGJuJXLHSpV5r7hgS92zZxVHtsRmsgGEjs7nsDcW7E4Ec8vY9r1LrecBPCoA5Zj9uLE9q46fxuER4Q",
  "key25": "3vSCGkGu8skgL4RmTraUPq1xaBBU9esQjSuNNYaMrW88R21qMNTLPbWcEcpDzQ5E1by2fLjky7X6LM4ZctGCWCua",
  "key26": "5tFwKhizSb4ho2f6uirsK6yibtnEPZ7rszq8geysmaJPPbQMFhhmiVrRcS86Ee5tzUjNZeRounMbyc62U5NjtYHb",
  "key27": "3o4dTEPKNB4qJY7azN9TuYz35R9C7bjMSXHJ7dCPn8XeFb5PaG25SfbjA9E5XQVoF3RV9RoZUV8TrgmDaUjmRA2R",
  "key28": "4WyzsiWagyACzBtJRdQW9ETpVnhesqWpfGbjPCXcSTorCxBoYygPeCw2cYT29urgZmmjAgNCwLZXeaSUKuJxuANZ",
  "key29": "5yBBcoCGTuaBVmQdaPXqtgHMqs45zdo9JbYJemfYfh4xWSFfreJB4yFmBLBphGrNVbpoVeeSeUNjAMY1Mq93gFi6",
  "key30": "4d3zxSC1kwG26An4HuDCFnS5ku3Nm9fNLV1vKY9FAcq3As2zK1YVihocX28dZScZg6EmiQWiK6bWkw7oDZrqoJTC",
  "key31": "nWtXkvvbRj2UEmfs3VLQehzeiaerzwD5zg7WG24iwYcvb5m1BQZbngQsqYAh7naiwjxkQE5APVAqtth2i4kkvJA",
  "key32": "3T19PhQTTkRueZ3vfKoBN5T3NNDrhJQ2RwHtesLvTgrskdeC1BdttkS9M9FaEZSXgx9fMi5FrHnzgRb9FDKmHsHb",
  "key33": "2UaKyey4BvrTKENE33SEqsAviTgLqSSgFNYCPg1RtsK7aZvgjgXGXPbyoNEJoKr6s5zESmpqfWbCvcP9qk8YUh3w",
  "key34": "213E447oMwRoHXE3eE4gW3eiCwzSY6uU2BkU5EhoMcpS4NmQc5EwHLKpuJJHwupHTBN1mNHAJRZDeTCNXvQKcPmH",
  "key35": "dqwiaF2niXE6k36ibTEnUpB5FPP8EZkZLavpG7RGeEPsXWFu4YBuQBwb1efudDFDdip5cU82TZ34zvZ3wwSQ3Gb",
  "key36": "2uYQPKcoJccZr9qDsy6mpcKRFta3oqFHwB6oiJpJmzytJqjKqhVE5w8GmdHV5oFjpbp4ZhBoAvzGeG3AxjwBFUhm",
  "key37": "5JrmHGoHZ8fGNFvgqHNCMcFBJ6zbiYnhFWKYd4YdfuFGXKhn2B1BE9YFZ1jww9PDrK4G8WtvUEyW1t5HPTcBZWgT",
  "key38": "4fqFrpuAF2C55FYa3TTeuZXS1Jbra4GknbegGUwk7vTiuAt6httaTmn8VJv2N9JbzAwkNdndsiyZf61pnDiownbv"
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
