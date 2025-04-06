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
    "39eE6u9yd8i4ufzUudsMLZgJd4NQcutt65deKuBNrhecz1du8TYqN5uvCtCX6ACxdXSbbUZ3dYqHBy8RF3twcW5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L6XmR9F1bXfUsW8UUc9zdJqaXVnW5fwFR85A6cuxPf4JNkCkMNZtssR8nyjJW6igYdqezfajyB6fSCecf2Z25va",
  "key1": "4mXFpdQNf7ub5B8xwJRKozeJaSMCuPMLr1DpUoUwvFS9e8o1fnurKFzMXNV1n6CyEh4jaqckMq8mBgxN19gzaLUu",
  "key2": "439GSFKn4g5DXr2WUgXdw62JVqJsxe7eQMiWDy88PukpoGzgtUHdEDUmfsQ5neRDw9Kb7RzXdoiNEcc9CcyNPscK",
  "key3": "4oSCNprVeUo79KRqipnZ5ocBcK4StXh1B8D5JwmFQ3fGTsZx6dZvDfbnwoqzAMcvmoTVGEbmP2CvobaXMVJtyied",
  "key4": "51uZ5dfjr412DkRuNBPqgbdtRBfN5CErC2sjgMC34YiZ6A1tNLo3aeS1tjAiQ2MZKHaqpJJNUUh1yrw8WbYrUxd5",
  "key5": "44a4aRivtuKP6MEu8xqapezekAnETmY4hURWmgDFdk4YRwymqxeernJUJk53RTAPp7eWeGBSb6Aev5cJHATSrkta",
  "key6": "48MXEruPzhRA1D3juEeUoGBXZyWS8svKM5QJLXneRVLZKCNpW3jG8JLFgRjbjimoqNSw1hJUqLshWkHJrmMoWWCi",
  "key7": "26znMWWVeocqjA6visbzxQsTcMwDouPx9ACdoNDgLDaLBz6BHkEnsthZfzZsAiv2eBHYvEkzd5hiP27YZ2wP3o5G",
  "key8": "5qpqqNcA3wsWgrfAhfGbpmpt6VE2zNiqYVXWhN8vxYT1tJcEmWcVkW2quQxW95g4114FU94rqfcvmREzN3XzRys4",
  "key9": "27dru3XTTYXCAHnuUy7TpZ5jP3o5Fg6f9ktC6BQPBgxaShyjherNhsFrMDWJ79QbDXSXuZDQ18t94FvoX9nQADCx",
  "key10": "6e12zp16T1CAE9rVHDqH2HQYaMvxgnYrxBYNwZCu2DRxEi3TePwtTJgqSHLXgedqRMc4mYzvCErUoA17a449adH",
  "key11": "5EbNWVgc8KeTkkCdPDn8yiiUCGUFAQc7MXRLWve9tigKQmbunjxfzVV3Vurw8jBPNzNTqFPNesnXqDAqm9hN337j",
  "key12": "3NBGZg4pSKB1qXTVj3NFhYokc5Wsv46G8w5oqr89XxtZ8bFfPmk9puZX2msSvWg2K2u6BySDJHhcsHdj1KXgH4go",
  "key13": "2d5L6GumudwCt8kiY6dYAM3FEhWkzqu9Q5Fyzq6FEhGMYABCPLG8s6UTTY1GH3oo6pPbo3EXS6cCdDXVcai66NFH",
  "key14": "36VH5Pr8XA8sVdr76cZfVQdoGmDZ4Ms8NfS8CeHvuG2qV6DGv81JbaBDAWi9kFGGeD7gVJAyQtgYCK2RxhT3RpHx",
  "key15": "Egyb6wYaxosh4hdYh4oHgZc4XYuLi9pjUR42XMfFQEE2B22s6AUo36uqmfoKWiGAdYNUTJ1g5sY14dCdcmuSY8j",
  "key16": "66tzdErT14TpZ8Sy7o1tsbrsdJpPrTcPjPkJSrG7L3QyWrRLiiwd3rnrQrc7zyE5VcTi1dr5Z8ouyJjWkik1PvbC",
  "key17": "KmbH7JVFzfCxPSWMudGsCtj4r1F1fhvHDAb3S3JdfCaaPkrnXJtgD7FqFrhKYUN82XQLg4QVqBYZsRuyVaJqs7z",
  "key18": "4N7BgawB4xZdXh3PRKTfqxae6nJj6yfv4AMZUTv9EVfcHcpfuz5PmDFpWoGM3rM8hMzQcLyDBtRoZ6atxFd2g8WY",
  "key19": "2evWznsKihFwjZXGqqTyJRc55StwWCZ5f9qhX4dbCxgY7jVtuaWMeKeiJjqwSr6fFSskK7dS5kqthuba9PE6HEu6",
  "key20": "3QivFitGBUzEJxJNyjLQFiabEu4GvYracVnv2v7ezuozVRwpSg8YFHo8zhKr2BmfR1EQBtVgZh74Bj2rzgEW53gP",
  "key21": "4npqAeZezj7JitiuQv8sN6PzX6m9mJXWVio35Wb9zJrakLqQHj5x3QcxqgAhhLfYmanJnHhA3qDbmDk1pvJvu2U3",
  "key22": "dqmJmVZy1NJs9PDVxYU5cE8YQ71CrERNecWj4u5TTniW6U2p28YeC55mqJbs4JeBiiZEGGNCsZ9hzFrmMTQYHyL",
  "key23": "4yAeziBxyQzBZLeR9X1z1oEFk4foSKAeEfwMJXHvscsMxT7GcwRkeeeau1P1JyXLVjYKYUVu8k2yaZ1p1HS48ZVD",
  "key24": "56u26nXnfwnJFXBHZ5UT3eJwAaDM2Ja9GMmARCuqHEvxLE9yfpoUZ6fKQ5BVB1fBzK7YKcqcqCRJLLtMA1ZQhyiu",
  "key25": "3ZkE79GRvucerz362UBb54eHMMwXMi8ShUzHmhyP6F6Kq2DbN5i8VjUVTz86sYUL7Ne7y7bLXciQvXPwmDLvAPhX",
  "key26": "23D1VK8cyCtdg534vNWn2ERwHc7RwqSYkaCr69YsBThyYQYmBVCX8QBBh6nVAj7qDUYnmfF7M8iiowi7yFMtiPuW",
  "key27": "4PBPu4RfzQWA5pADrp4fYnhrcfyMdtSDXHAoRRRwoWV3fJ5G9npVh88AVvsxjWvRo57A7gPNRpwBJPiroj8cH3J1",
  "key28": "QsY5Tfbrq9c84qTuZGqNWNXbj3i7buHnjASuHedcvpyQG9GxR2YnmA6ZkxsP4GAVHTzP1GudMSkmg3HseEF4KA5",
  "key29": "3iPwygCBLzRHfSD1F5wa31hjBPv3dKkrPqvtMsyc5VvSYzaemK8nQbE1jDoYCZFJELZ5mtXwvCFikqry6ZddA8MA",
  "key30": "5mif7mPjJhjt3UQygv3bDwsuvqfnzx9wYJhwjz7J1fPsyVzJPs8dVGP4MdMqHDmS5QBxeWofqySFr2ttWN5iKqxh",
  "key31": "4UzuQk2U8W9iwcn6CAqLbceCeDH1dAn44Dym5evXCa5SKCYGjfnJByeVaFWdAVptHZmvR1tVPxfMVEPwH1kDarVG",
  "key32": "3q7d6yBXqRRLzwsFYMiDD2hLsBvEWYZV4fjuW1XudM9Bdw3PVFQAufTzGHL2Xksgi6b7ZUaiJpKi2CNon63aRc6t",
  "key33": "2KmF7sgVruUWxf1twQ78qFPt8Zqo4fAesmSGbEfDGZtWqdnPHV1if3YbMi6s7bVA85qMfvBxsnofK9KL6HFUcY4v",
  "key34": "3D3AYEvQWP4LEyVeSYkxwjymfY1dHgFWBUaeGvXf86SpVELarznKK4Xg1yskTDq7S4hGmNAS7gwQmtgfRz6wU6m2",
  "key35": "pJnj7QXpVYhJUfZ3SNxMHGNTQBymZTCZSxYTSDiH3sRtYkVDiD5W8qizRJrt4b82iuZHi1iY7KRJPrG9HjPWfyH",
  "key36": "2UYWArVB1AyHvEDf7zG4qZZED2nwVuywrJLGxvBvHhAZKxDCJmaC3gi1jiCe7DmTAazV83PpYUc1aafn9AYnzhed",
  "key37": "4xos49eh31FRNi3hJQT9ymLbVWcJbmVDz1d2oB7ehXCG26isvYCNbJC92EcWqXrzBi9wbiQh8iRDoiqni8NSiU2S",
  "key38": "2nXXsohbiAVoT69UgFX8NcefoUsNBEG27tDD1LTNQXzec68biLNrAC2bZn3FezfWQpbWHi97k3DoV5zSQyCo2iWQ",
  "key39": "56qf1erphKkahBZxFLQDc6578T4FyBWyF6x5aEYCpyh1BgvSCBe359oiCt93hNBH2Wz1mvDVPDHsQQwGq4dFRSmv",
  "key40": "4XQbova6kPxAsCTbPVFnMZVXCEGYBDZLzeiaGLSgernRoUJNxVryJQTUxH11tVWFcniZcRkeVe4Cu9bng637Yswc",
  "key41": "2CuroieWQJNCGH7ayinV1ZJwVBkTuiRqJTm1WCmeZen4ergsm61cnJqCRnjG6H8xFohwTYZ14TR79ZzBMy8YoKbC"
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
