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
    "5FkzYDmJ6ZVGnZVusA2n1iPogQ6XyLcTYMqAfgG7Q6e5pP4dRr24znm9Z1MzyonKkDwknfAc7S3PBSPtozcxJQ6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKaWKrBcHr6kKuBaFe7Evrv9EfemhtjRv8EaURv7DPSWrgcdAnT9vv8CydgwjhJSd4bbKHoT6VkZSHdzehybP8s",
  "key1": "5TQdUHAKSpKmRiqUtzVpvP78x57hviHPfinxU8YHQPhpiveQAjpJmPA4vxbAG3ksakFSd5UcwwDKVNFt9DSXba4x",
  "key2": "3Vb3KGasv7Ppm1Qzynk2titozvqvmqVJ7XXzp7HBGjvkZ2WnhGeEWC17pRucGpnQvKevMNBGptCwxCcW4MYFqHa9",
  "key3": "2SdTyX73BcH831YvzwDGRKn8aaHQPxXXthnEeTNnxkECdGitFvY2TF5kgMnZhAxVA8TnTXkqM5sc75oSJMiP9P2b",
  "key4": "2BQhxfSBaA3ZLp3pK1CxCTf18gJjUJBK86zuAnAzPfwdZeMsEagxrvVxRW24KVaR3g6bzsKRNqSHBj5dTghu9Lrp",
  "key5": "3KHfCmzjxxkni3XAVxfztDWmzLpQXaQRvQYRDL83dWtcmwvJ8je5uPtTAP5MTFx4JNv1q2XZAnEXaSGKpBdV1wW9",
  "key6": "3g1JsRZQM2nsxcqcxC8MuCBGnJfkuWNgiZ8KxNAReiHKkpghBgTiCykm2n5Aw3yAKejhdw2TJbjaKqTgUtUwMBTU",
  "key7": "5MF6qmeMosYJdAMP4zrJSwz31XWyfFf5ND5QfXYhP7qj4TWzvex4AAiFqUJ3mmBsvd2n4n4q4GJWJ7gbinLYL4Bu",
  "key8": "2h4n363sFz6xpZWvSdgmf9RT9qHdg7PLhBeeF7T3V6qHvDh7YUSe1MxLYgSCXioRBtPQGAUHaDM2NwMqNYM1cKbg",
  "key9": "E4Xa8obGypq8JPHGj7iHFDBKaVHZGnt7v1Br1LRi6BFrtCV7hq8Y3rQjwiEZvvPfnxU79WVAF2Q7tNS8KyEeg3m",
  "key10": "5xT9ADe5nAEPaULwsU3nwVwDVwmW8qjbC6y7cnS5pA4qZXFLyp7CKXJC7mZChuqpZCs7LeSr5VkD1u6yW112VQTA",
  "key11": "3TmzGqtsaF4yaKYsxyQLjmwBB2QeXNFY3VaJFcK9yeF13P6ZiJnPdwwhN34BFMyEKcpQ9tFUf26Phqu3X8y81c7j",
  "key12": "2m8c5aKT1mHSh6vFVnNWMZqSe93rQXdrXf5TGJsCK7Toe9jL599Hr49A6fK9EUFwYUVz5oXdToPZTXEF5cm6yoat",
  "key13": "4dCGYcBXngQXuzoGxW9grnhmLBFajLUzeeJa5mdqkj5BTGSGxEdwntbnr1rU4HK5HMWMLFt5hDSp1wQFvGWMPUWV",
  "key14": "5FUYHhMB5HrjLynk6A3No9xYDK8CXMdf3nr1TQaXjPk6Duhee6ScUENmntrZwECfAMgJ9x79eAuqGzj7gEheaQMo",
  "key15": "4p8yfw5Viwm4HVHG7NKadNeAGD1UwwiF1PukwJ2MQqTAvqQTs7iMGWq9ApLQ3xCAhvBUqrhZwftQRtzNiMrQY2D8",
  "key16": "22SKDhYh6p8PZn4yNbje2YnZSgfog62goN2iRigBG32GNPVKwgXi23DZn9Q47SpKLUq2vFWrB6BM7qfDzhKYq4Bo",
  "key17": "4uhbUrbEW9E6784cugfFD4dHycnMJJEJhdacfz5qoyyQ7m8r9pi7VKADF3CL3UMNkg6gJCHXRh8MJjRShnzaLEnx",
  "key18": "mRuH87E7xH7kNQehxamMmUSsPT9cYQxG5sRF2gPcSADzESbQbyfaV845BGjXHRqSVw7paKDBL2o9e5DaAbJJrVz",
  "key19": "3ERjeqNjWJw8SBVt2woRVfw16grYAhhTK8L1z31WMqB5LWn36kK5Q2axaQh8j9NqWgapmmosgEskUsr7xJC1icXg",
  "key20": "5rtZykb7mbZgsvsS5ZJcmbUEHJdRK6rbBEL7K8UtLZQdsjVSYygY7hRpKdAgMwjZFsqKuyKZrHPM7tYdBRma8cjm",
  "key21": "3k8by4B5oZGSxpNjbvn5VDaaU7YexYGyx9BhLFuYDRaJQB2eCgeT38xLxD9tydqjzZvmUT1gheiK2GbJyKfGBJAB",
  "key22": "49wgooJtcromJmCeuPMjyoqnVQQMcVJ6yCFSmr88nt4Egdnf89J6VjabDC3AHRvsMv6ZPpqYWK6EiCsBkubc7s9k",
  "key23": "LpdCo6hV2Q1jwSZ5kovVDhqd4CZnv7LmRec3JwKyGRWVTy9Xg8GLPLDfLSRtET2oVi4Qer9dLLP72344XDqwpPg",
  "key24": "3LM6GHMZPBgnB53ysrGyT9YZMyWnHQPC2pEEvV9dSedGn9bm9j1F8K3KLKcLMAoQiqAUS5NmrYpqFfjQ2321KSSG",
  "key25": "3mpT2RdoDwzEFcsG2vkrpCZrBhB5pAsj2nBi4N4kgF72m5gv8PFwGCUkPRXk1nLsL7y1T9JpR7rabwuFh7kZ2ZVq",
  "key26": "4deEFiRrSZjqmxyHJUnsJb9oD4RhkEc9bjmMA8qT2Vi8BjJc3pw1K7KCiGXMfwjWFEtSC3UF9ihhE8PzMvSut7G2",
  "key27": "3uWkiYFxXFkXQhDdJCi655XoYAifUC9hgXPdUgoABKWogcaBGC5qKuDFcPpaXzXnzAjjsVy3eHK12n8wGhcLjKjx",
  "key28": "4aBC3hw4DifKwxE5EqPre2qND2PQgQ82LZPqJJX7mVDCas9EAiEUGNiAPt4n1AZhv6mebMm1iFHHCe1aogjgEEdw",
  "key29": "2XJmQqSu8obX5tSXXsrKx68kM48S6vxUwwSzqfuZS9V7XyWUAuYB1ckc9kBQis6mpnA6pLeUqi1dUv2LequVQLm3",
  "key30": "2ysgrGvTkeZNxDGzCXNn2KXERbX1SNLsdRr8SGxtDWa4KLDm1cuxFNu2x2NFSsL6XWoh5euiQUtiS6kzydRssF2s",
  "key31": "3TXb3FLvVda1hdZrcVxsTxpmtRx3JGfEQX5tRZzusKNd27iTH4jqpMmpWfbfiVpYEdzoo9ybZ3zedy8Pm416Lq1e",
  "key32": "5WBdG3moYGXWtu3LieXGcHykvYJ5baMoPVV2LSV3hSw2HXXZJAwusfJk5dXMqkcBuNS9Sr4o1J2xeUzzBKRwMTTi",
  "key33": "4WjKHDHeeYk1uY8524wBHkyVJuw1XxWvPTzPujtHpbByUpQjSeXg3ZtMy3sswR4KBthyGTq1toPoXbwuxxbcWT3e",
  "key34": "pJBiRvgtrsLia4eHejx8SfNxBivpwPhUzqWXEX6D6ZG8eVuymuuZCn45tUC75n55VdMrMazm7tURJk7mcTwrTgn",
  "key35": "2718VFGHpqDMyswmFzgcm4oHoKRkV4BRQhN3ZrQgK9HWUaG8Lff9YDSEq515kw9ZDzRofchqLB1KtHeq1Kd5YHhz",
  "key36": "3XVoutbJ7jFto3Dk3A3bcPKGH617ukvrB1omx9iAaKsU3cX2at6epA9HELYmNNb7t2WGvzakfE4FxARyx23RMqrU",
  "key37": "4hhLkBzM2XZoRY1AnWh6eeohY3PwvpYduSLWEpc7dF4MASSKPSVXRj8j2rwpiaMSUv7Smf1Jhp5CKTBKyJfUt54W",
  "key38": "4wAZ3K3C8ATe2m9vqjk2NhvpfjCqozvWcJUj2itjZBrKVKYqnYiubCZtNvvUVoaQk5HHBXssiXYouM7njqvbqFwt",
  "key39": "4tNxwPjYhRdoyuRyxJkeYrhzEPMpaBykfTtWiE141Aan5GTG2y1JmX3JcKMVQEZPuPN7AkRnkRmVs5F7CLMa9ppu",
  "key40": "459VLUoCAhGskK6JTysKB4SfXRPEaHuMBvNwaGsCtWXmoSn4o9sYhZdkateoDrVXCSgKHkCsiMJgDUtoiFdEgMVa"
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
