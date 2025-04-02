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
    "3PM1bFowmAyWpKuBL7c7CG1E1F4rbny8tbcDStxbS6q6Eqw6pfkt5vQWFLpfPrHWnvQCnpZ4vWoZLSusH5onmc2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKHcJgLmtmCfJtNH3hX43tqrHbQkzAPRyj8dMKUWakuChoTU5g5HYL8k9dri6dHu4F5mmThjcTsZrVFRGDugh4j",
  "key1": "5bkXcgKSrrCwLY6taXT74vF8mx4VNzGRXtwAamjbVrTPmCZsWVsmvWo5bP43wfRKNY84nW2fD2WhaJZStGDYufnW",
  "key2": "4JU44oyYvJ8LpzhLo4zWwkNxs7TEQjnVfQ3QaWVhLpPkBiYT269RmdfwkyNSjQTmGutoarct7sqcvDFaAt83gN1m",
  "key3": "sWrv5HncEUwK5P6qMLXR9uVpz9S55YHbPdEh6J2cZ4pGbHoXb6mBnWrkH5XAs9HerWF1rg19VE8N33mrDrRYLkL",
  "key4": "4DAR51PZw2AMY6z2TFV8vcoUT65qjU2VpQuoDgGzXQxaGtt9Zsv3HG8HN9itWDKNacWDgX4jMazcS2yY1whBBB5V",
  "key5": "5Epwh4VtfyzcdpkxVNk8VS4MFBBUpH3GYFtZh7nwPpDXcMKWXxMAqqV8QefZbDMNzFDzmEEpinyNwWPXLzritBLm",
  "key6": "3DnxC9c1xFKjGmJq5ckPZNU2QSbwgzCXJVkbf1x4PkQdq5x6Tfm9B6ES7K69gBjoDeY5WUEeV8ow9kpmNj3qqAc7",
  "key7": "iyGo1e8f71SL4BauBuMCaj6wguNvwNQMWHeVQS1fThntADdwhqms9nqGLEbgWa734SPUhLQq1dZcJKEP4Mq27Lu",
  "key8": "jzmBtErQpWJ1vj4N18hme1YiGpLiToQQjawqtvjKpwC1CXiKhoykDDKj2s9LwzfKS5ztwQjcdXR4JxRcMZcGZX1",
  "key9": "25Zus6LFAk8R1VV8Y6FUmXjs21YjzaWd3nCMzhtnx5mJsjNiU5XwVNaqoDDct97FXeScCWnKKkws8dE7aUwJ3HRP",
  "key10": "aPTUSrPNgdds69JHfkijqjTRPro4ChXriM29AC9zeRy9q4KAX1N47zZjjsoS7Xn37Q7trZpfd8Wfevc4GSZ6miQ",
  "key11": "5tJyAZARgsbjbBs4rNDdoUYKmLNZmswq5tGyzLJk2CjeG2PhyJara1PkQ6kJgLM4yq7du2hJhtDLBop5aYGTEPfz",
  "key12": "36wfhoipXSEUfKwPNCvGfwPR2C9swgUiYq7328wXgD9JtwFNPGHuMqD6gRu37F8835fCrm13rKwQ7GEnZr83VUfa",
  "key13": "3fJ3cNah5X5dNS2wXK34oVwPmUwE5u3YB6b9mxwucmnkMepxhcs36jPnThJ7Cw4GYH2t7HC6MqYUcFx4x1v5WQdy",
  "key14": "EMkqZdrBUFjqkxBtVN6NQHAj6wEvxCqBUvpfJbU8UbfaTcG6hQWKGcQRMja4janR7qhWgayLT56V72dxRACxqQR",
  "key15": "62JdRXwp5piQTMJqYXF86yVNZmoyCs3hLCxErvn4aF7Q5pWdXPdbRWSZLBoDQ7GevbK3itUVGgiHQ2qYdMkxMVta",
  "key16": "WFGp3KzmEUtnsJbYpXtmLmeGLeiZtVmktKvbb4Rbe4uKiNiF2Li2Q6dKhtbk1mckHShVYQCMdgpMqFGNHfcPyTv",
  "key17": "67GxGiXGwvEo6eAFc2JkqKu5Xih6j32YDgWnqJYjx8fPTMX6J6LN1K7vB1VC7oHB4wQJdDsvmMaMNELfemcxMMPB",
  "key18": "c17dJn49qU7FwDdyTakVWDnCD7DtWzwwTM4rpevzxr1hVQGp3w6MSaJVF2qG3CT9nqCCjzYRFUCdq1XGzZHsx5p",
  "key19": "456YGuYxrGWLN3ahzEkeSM97eRqVwVocYiLeik1YzgZnnzMjsG9yNPQTGatsQ1fz1UzvgMtUYp3Zd3Yem3Z6zGtV",
  "key20": "58KpwqGA6NrfPnuQ5n9wW44BsJ5icFtunWLCMeGRU9aVdydvW5MDD9rvn2xQUaogEVsjoXAKb6kSWSTfySHqxB89",
  "key21": "5g7j75nvpAdcmhSwbYYz7VJoD4tjhFZ2yKPFrKBi13AdWeYQnyKRZtDnzE88fbsgdemxdpnD1ietnRvKu7mgC225",
  "key22": "5zceZUmDXG91nEzn4urAgBGiibHtUwHr7orgTg8qnRkLwc72fRzdYLufug6w3K8cB9pk2Wu9APGhg6sB5KHGJcfz",
  "key23": "3DoArW2eYxabRk7F25Xaxoh9LrxzH1gYKAjNnFhuTBtq6nii9YSQmSZfazWGvphQyAgD9yef3WQNsATxNUnBSygn",
  "key24": "67TVXnBbi3Gk7myCLFpMt5hvPHVvYY6qujzaJtextEdXHpEV7crK2XFNzDQZ7QchDJLraNWUtG6U9PtebCbCdTyZ",
  "key25": "3VoQvqkSsidJt6ext4CqfouV7pHYqJ9yDh2NtUAnaVkbXpzMwvfn7fLNCekuv6pVaEQ9MmxaHtz9ajrr1Eqj2n9h",
  "key26": "5mVbLoFwDgN1nGTaRHqJPV5Hcsbu4VMTnpJb3eiDb88YFPdQ9Fsbj2cL4FUhkG2Nv8zy5VMgMyVotZTLMCvVnHvT",
  "key27": "5bZkfZQUNJQDUnQqBSY1hdj89d1NPtq45WHveN6di2e9aCs183tpPP3nFUNvCFDvSq7k5DdcHWZRGXHtaL6pT89t",
  "key28": "3XZu4jCsgisEEa8ZM3N11gLSetsVLrDQ4Q5LRJYZLCM77CztY7sDf4SLUN43Gg7yG5zD2vRJL5eRHbYPz7LJW9iB",
  "key29": "279n9qxbubVKATRcCYKPncRoaL9h2eVKn3SnpTw4pDj4c7BGfu2UsDEeZEcFD4jQizid2c7AQNHwU2hhdsHmNPUz",
  "key30": "4agSWuFf6bqt7C2RgPr2DLRfeL4q5cJqxK2hGJ2PBSyDNqKawUBP12UVgYsTQXbx9x6p3WoeLdJQeREHpryFxK7W",
  "key31": "nxhdbJsDkDCWtb4Q3gXRWLv2kHTvypDq7tdZpXrHomz1as23Yhbcy3PZKznBksxwcbzjaGuepjnSK7wzTpRaSLK",
  "key32": "5ZR8szQdyp1bLkLYZCCY8D4xB434JmXZmg1EXbJwZWGLvUr1Wp5mZYdgiMaeCYJCcPZiFDvACKLayuNotbZ7dLGq",
  "key33": "4svBTtoTNmjNFqK2auqmKPHGcokzuC7VQAp1to1sMYqwRUdT5AMrdy3nRw2psdtFeDPW9oqjJUmeLCpdwM7KJaEo",
  "key34": "dQGDdur134jYsfGwH9Tc6qdLaPbPzRnLGw8uMZFQpJfYRptiEC7GpAJfsnkVpzZutQEJEDxzzQQecLMjX3gRoaw",
  "key35": "557nFSjHAH78eEimzfVVVdBS9JQvJis4kdGAdvJSNxmiEVUtxCbji3d2RTt2Cqzhr1z1onuMhgvAw2S1fHaRnU9t",
  "key36": "4f2rJoL45LkFV87YhMMjr9shKafdMWJ2Wz8F8qas5yRJkEZKj1bMR6Yg58DRJeFp3aRv4msFtmx7Ue9DZ1VWvZdV",
  "key37": "4W2cFHo73YiKCYKzZ7Y7tYk6nuL4agWwEH8rmne3DdnWnqprkm39pxBbDRPQ38ykue6xfdKcTb8V5WBNogJ8MiPo",
  "key38": "5ekVzHVq2Y62WV2LXYZB1xXpDKedEfoAiPCKRwgyByc2EgbMRGSKZoygWKvQTTp4m4U7bS9Mzjn19y2b11xhV7ao",
  "key39": "2CWji7VLErMjb8oN7AjdFgc8Rvor8n9UaUDvqYTwhjgp5WwbsqigWvimhRpNbZL64wT4Ff5KCEv2aWTwgHyBjuDG",
  "key40": "4BkoXwaKdNzGhNgYUXsrnu4qUkGoVPorSpqkB3UR6UKy52RaKs5UbEcGJSbrr5cFvP8fStX37itxqoTirT4hP321",
  "key41": "4Z9bhW8uttpz4xYLZBnr7heX4upTSjTuTAgENAY5qCkg2Y8Poxp8g3uSeR1X6ME6RnJisQHQbBhkNrAEZHrzpY92",
  "key42": "31mU5PTaEZVmouuL9eu1cSA17Q6dB74Wb8v8XCtko4iVAobh3rMsi8i3fTgs9FRzDudrAvhtnR61B19xsKF8wBJk",
  "key43": "23GLwP46y5C4BCisYfiKhGnW6fQh162QtjgHCh7zd5zngGPHkgya9cPGUebS811hxyF9v9MqhskKbYRKE8PzhxAa",
  "key44": "25k3XAuWa26nEDsnpLMVoTsziqECcdvRq3rz1xAaYCc5SBeZRdKwwJXXiQDjF7qWQN11HKNsogpyPVXjRFsacxeM",
  "key45": "2e5mt1v9DPiMNApxj8Jo4vG7ZekseLxEd2uB8GeiKoSxgNtHPjStDeXuyYSNFA2uu5hV2wLHqDTi9YBg8MYv2ma7",
  "key46": "iEDp1nHgHDmorreDFYQTNwvrNdQwvAz8sLf8i3LhSve9Yh8cNkAES61kXUDtsnV9crHHnsxG6dUiGoX1bAVEUPD",
  "key47": "4p8vRytYCzfXQUhwfunoyzPW3Frrptt2Y4DhKkDVmaV2fXHHEh6w55fk5fSMZXH1yy8D2GbTubKteMimBnj9QnPb"
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
