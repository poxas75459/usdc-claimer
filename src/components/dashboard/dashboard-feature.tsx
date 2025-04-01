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
    "2HSu7yhAG2Zr6TdgmvMfVEAHMttGxBHxEnZSpMw9Md1pY5xu2yEnc9SXQVCRwiDwGtz3M6k39zsqb2qkSUiZCwf8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xmddxzy4axdcxiXrBcCEHCeJ3GmGKSrSEkpAXMrPeVVnmUSRzCntKjjJ8JJcYr6oFUCfDs6j5mAGoccijs7GWj4",
  "key1": "4CVtfVw6tbs2y2RTVZG2BXepDARyeR9p2wn3z1NUbDb6xYi8sCj7KnKNJ4chywDdsPg7Ct8kr5LAQtgiWcNh8u1G",
  "key2": "32dRBytj9MaprsuHEBg4bAHLHFtgcVaeTrQ4KTFV4JjZ9LgZZu2utghq57RR99doofgDkhTc7K9ntx8NzsP6exWH",
  "key3": "2CLC48YG2gMcoS6GDk5vegnCoqRu3QdfcnFi6zCgANiusBJRfgdpkh8sT6gG9CxsvLcLnigcNWLXo36dtN7ASF3n",
  "key4": "5i1NuXsAsTfcsaZdbvji6pb1oQtiGS9CbBbZJVM8t62cjscko5Mq8MdthCyxZrLBoaEFobpr6sbQUa9jNzcemCvv",
  "key5": "4D62YoZkMumNDTC7tGvzwnFmsDvBunrGd8MC2yRRP7SGmD9B6sncq4irQLw53UVvbqomPoMXSypMVxoH6oAuuwj3",
  "key6": "4v3oAWPJ16LKikTbsofatKjZLSKLtvrwKkAADga7qxnaZ8cV5YpjDnsSPqQ91pT7PG1bz7ZhJNmKJKbtT17whpL2",
  "key7": "XNayvFkZUdYhM77FzPfUGrZHw8JVEwZkV9bUccFELfzoZdq4PpuC1nJsJh4g5vXgoEsDMQzrvTqJzwnCpjSwBAN",
  "key8": "3GmqnjHFSy1URUKcrMGmJ17XYJWQnX4HvGMss827p464rLm2buJbwNmT2vcVQ4oYxupaxSRk11uqUQchcxn4jgzv",
  "key9": "59fegikSpitxRbB3BuvZgigG4XUqvpunWMLnh1WbTXmWVF1MExxeqHqrHz49QyvbwsJUh9z4fVPGxLwEVWcLhPLi",
  "key10": "5ZJ1i2t9CttfjQBZ6bSL6HJyJujfgtFUmRg9RDRgNSgyaT2wxGevFUBrYXpKq8fuwJFkWd9FbnqGzVnidPYgTKGg",
  "key11": "3J13t5yp3iXLQJJQ9QovPCdwwZCAqaHUAEqmee2SRfpztPGzLQUKGKytag9zyK4asvEMrNv6mxvTMvoaP6yj8MuW",
  "key12": "5qnxUZVTF6apZmLEb4vYQczYPUQExrA8DK2EVDewbdV1kz8hdiMUso6hWQGwA6Cb74L1we1pirYUWC2rK5Hd5Hmp",
  "key13": "2nbBCZQ8dMhaKYcQegn96xoYbmVLsiRyC9ikajsMhQM3LbV3mUeajEMhEjyLSip37Ac9NrpYiMVfnAqPmn4kyCKe",
  "key14": "2mjSXjnjWeFDa9kZ6C8qevXdFHRNc64PXxkDdJ9vKk3i7WD8L1Bn56F76WDkGH1XfvuhS2J7HNM178xiqwVKK8qb",
  "key15": "3yMALsFnsrDz7ezN5gbqEsSKenvepFJCCv6dnaovEnBCXe1KaLeFvGvZd3VrBokNBEcNrWdzkhBrq8h5z3c8HGn9",
  "key16": "27JAcs4Qn61mYtFwayE4ENiZwrVf55LDoChEEkhpjqBopNFZ1bYiwMMfofZXium5gqzcAp3Kdhyf2DWqCNsgXcoE",
  "key17": "37Qvvju8kkHGBKEPazAy32X1MQMy3Nsfn4skeUC2qKSXyL56T2dvFTydcUhDMmnyTikfotWgRz2AFgC6bz8zysf7",
  "key18": "2VjcPHhNQe1Ly9tuqX11FtCi3GhtZ7YfBqviJFdkXzFoqhHVGWW32KoHtt9MKbKk9JFsRBBqmTDoFvVjkUeyvunZ",
  "key19": "5intjwnVzmt7kx2puUrkp3m6niBDRrzvFh2a8ZVFMJjgjFeSGPd2mati58euqRenHTyjvzaMLujRpyNtVzEpqp1g",
  "key20": "4xb3Z3naB3dukFMR6hbnKkZMgANwo1u5HPPUoWyhzJAq4hWTM65DJAhCnUoiN3TdV9KPcDVUJKs8ho5rtDzTwRJR",
  "key21": "3rtSvYqNQRP25cuCz9U86zCUsDi5HXcoF4LKdSuFvGBrVVYUpzRxVkc77L5juUymU6CQXTJhJyUWxVEdxpL1XseN",
  "key22": "zF3RJaXY4ekLNnnvMF9vLgxsMNRXzkZYyBVcPvsNmVj52HEuAVigSY7wEkJVgbN518Borwz7EUoQVA9Dve7LJws",
  "key23": "5JYexzVcAYFRdXE5YuwW8MSrjTzbdz9vePxsYL2ewE3j4ADxSAZizCQr1jAjdjhdkY1Bf3RujtXKSoA6bAsimwn3",
  "key24": "2NGpfH3vT3JFTJYSHakisvTXrG83rgr7HjWoNsRRcBpYKAMFBFVtiYfzxuDPmJ7aiocgD7Ayf4YydP21v9mppREP",
  "key25": "3F6qZcdDXz38PnX3jrQtajPUx8qGKzsuUBdR5F4XBcKygnP3eDPjYNM5oWRqHHw93vLE2LXFerhNwjyE5EJGXVJa",
  "key26": "5UUwN2rKb4ckWzR7f3CfoxQYixqyZ3Q5g9zUgir69LyCboxVhZ53HL6Qs9XQWbULo4xoLKkQJECbaLJmQUhLSeyQ",
  "key27": "2bvXakGVzjeE7gskndyQAvATriJWNv1yZx2JQxLU3h2mhokNTuWzd3vBWFRYabZVgkAmCdNbEYUts52KwDDwfatV",
  "key28": "C7Qy2EtdZE7xiJC4G9ucFwHsd6m8gKjFVfxqApqC5gLijLrc4CdKfnpQvk88WcrHorQ4jiqNQ9f4Wyw4pyJTY7D",
  "key29": "65NJwcUjGjMDT3ZL3eKq8gGDS35cmPwXe2HKVxCVjNPp9axw3pq3JBxgJkWBSgiLPDrk8h9TvqvGmJnQ94e4bqU2",
  "key30": "3GQxuErRjfBzgXdX39zL7FcoTr5mkZ8s8SSCsMcJZAHUcPVtCH1yejZiwnYFQwYRfUCQBqgbMiynrRxLUiQFbxpr",
  "key31": "224uGgVY3WHt56nHaLHZHQX8WAYZqo4FF5VkuvLBCVFCoNqfR8kg9JMsW3tqDr8sLmBqnURnzEi5Aixk636wJpJm",
  "key32": "2vED9dvYF1pEHN26FbV7B1tMTZCsWFGUMGB8vei31mRapdHQ32YZzbokxcLS7VUhaMArDb7vRELmw52orVbWs6fw",
  "key33": "ntuDZYPiJyYF1kj3miDNYS7kJSMBQr9LWPJS9Y1cBVPj9GFPE4Hho4z4dvudGetJ4JVHuhCmt1EcsxH9Rji5b3n"
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
