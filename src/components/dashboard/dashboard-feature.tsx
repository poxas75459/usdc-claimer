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
    "5GsFHCRncMuySEVEkhN2CWNVH5qH3XAfKsfuqDnNcY84rC31fNqCTgUUzRWiQZBEjnaVGnuA2gUQHy9Z9iuQRtwN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZsXepLMEhAEus26ELDg6uXgEaFM1C8gjDWSmhaCZCBsAQuJmSejbcQnzf14NKHYMTG3tV4q4L4DkqukvUgDtrY",
  "key1": "2nWtsJmRj5jvFSseUZ5x4qhW9nt1jmCZksfw2eCgVKw6xWs9TpHVbvroHASYMarBieajtxXmH35GDteX5msti3SW",
  "key2": "4CqBdEdNRe8MzjKYseGUWXR3DTW8JhuYxEhxFnfN2RbPTqXXEWNCPFT27qmuoEamMRPEZtE37CVp53DGUpUMVuo9",
  "key3": "2LjvyXk8mRL4Q3Jk4AELJVnTps67GDEyYQQxHP6159GhYhu5s3GyjSBU4gDSQKqXwQzmFx1CoPkmAe2316cxNaFd",
  "key4": "3QK3FVmAW1Kj4pUPndU5AEQDQCQ61q1nTtF9nWYuJUDzRZbijgScwjdMQbA5qdt8Luga9DjEXqMEd7hAJ869o5aJ",
  "key5": "L3AUVSEva6FJ6kWJoMy65f4uvjFGA1vNoPaiCDpGQxYE2jomXt9WyrqDHXPt1fmBT1vxxZtTHfZjaazzq2Ws3XH",
  "key6": "3MnoV3SK4UvxUkJhWr6hF8B2oxaGGPHNHGoFcd8hsBfbz34p2i8dLD8eMbsLPnDiQa6f1TDFuNfZhT7fYMrTrTkq",
  "key7": "2Ao2a6TF62fScT2sVsGKKu3W3859nF6GdEXS4GPQvdJTjNgjq8juBt1gZ4wiwenDiLqoX3QwhuZLhs9KmKU75bPC",
  "key8": "5DnmF66r1k7wYLE3MY2o2DV2rxxvw1KExogRKFQ3Mt2k9oVew3NzsUFvFLwczGZ4DpZWBcEEgMidjvWeasMLAcTi",
  "key9": "2PXJJmj6ySiLSNpQPWSJV3sDo5gD2NP1YEvx5xYU5h9GnFUGJY673hboXES6PRtLiCSWW29vAh6uPTQMRGheZcHK",
  "key10": "vQPZN4xo7kWf5X34oP6rHhtV4GMhVB32fRfobWR5xv7q8c8wHELEa7BHYMEaeuR5t5MdYUY2CnDTLqZSACsz2sD",
  "key11": "2zuytHZUKVKahar9ciVQrpr9kzEdeivDx2Aozei3KzcAznCPDTpDRnyut9DMCNqwhLEivpAsAoAppagXhB4uj4pX",
  "key12": "4jAu2jwpmvucAGniaqxoZhTuahtZJ8N8eW1udqnUfxKn1JMzbnszkZ8r7c7o5buWqpaUzyayACmA7tyhBgQN7hPe",
  "key13": "qWVSyQQ2ynv2GZrsRUMwR4Uia955y7i4dR4t5Q4YTXQtJzLS229NYU6Ar5o6f1opkoedV9c5EEWhDvdG518sYcX",
  "key14": "42iUkHC6ED7x8wEkMWkJodNqTP5amttF97zbupTWsf6UKcQ1TyzPXxzRqnV8N2TdXuqn6M1pmwinnpM7tG6SawT7",
  "key15": "2og4m4Z6qRuRLbQpJmYtxDCGbZkjneETdmWcPA11S2bqkxcfxcxELSRa153TxQ2jQqfnSUeuzG8osMyja9Hwjaqh",
  "key16": "26Z4RxQhTA8ZvbhdfTVSPSZhw1TZM3gD42vCbLPq7wnCB8FfVWHX83f97xpN1YvDupvXMEx4YQQuZP9jLYAgmzZ4",
  "key17": "2ducdmcpGbGtm7SfJBeWSQ1KaJdjDrxY2HdCB2ieZeoSgNx1cFbt5ftSYBotgn6BGVUeYtWhFNShEpfnkB1gYgnN",
  "key18": "43DQPmnQu9KpVwYByyQaxzTjx9V9r2v39xDmAXckvyuHhPdeLnJYeM4RPU13BimEGVHT3oygjjoSCKv29HnzGELo",
  "key19": "37ih91SpzsXD8P2UoB6LqbpRzPhPfe1ttWFWTvzWWDh1WcbbfTvhFY1AgjxB1AKERBSgemGN5GUUK9cSVFp8i8SD",
  "key20": "RdQViZc8D6T8zLXBUzpN9noiGtVqGBTgdLjKyZq6wbWVh1Tk6C4ob75GGwit72zgXdwAaZCYXCzWgBmNPt5CJ5b",
  "key21": "giAvKxZCFexqcoFtzkZLQJXoX6vEFqooNBgUvqPKNEPAxiNPe6eWJM3fEbc9TkLP7uspkMvKvpx1eB8kMUQeQVj",
  "key22": "63x1ghynCtK8yYTEQgRV4Z1PnmwSwzbCK294J8bJLEFYzKnuWbKNk1byk3pBQSLwCYq7eLbsZ6jqHizaxZ8UUfrJ",
  "key23": "SGveVGS4R1bm79BDf8axCHyQq5JzsdTzvamYfCdA9rnfViFCBR7MYCWYdncbtPHXX28N7AVmCqQsk2EhYodLh5t",
  "key24": "3Ge4XxF4nZpDRUbo2i8CjUA8mBHxcVui8VWuScewzWcSiFjKjvyVeUCP2VB9CAWcCcuRqyaizvEtTZ6fdrFg5VeP",
  "key25": "362eQ5VwujXuvAzwZr5JbjY1ZhDghwCcGa4HbHWdHf342PYw9LyoQ4fBMG8dPH1cm59D1n73W6NJFMXcCpb3evFQ",
  "key26": "4Jb9SdGn6exPWZ1G3taKoQFVZvTQLQc5LarQEjepJbvz2c7rzaKfF8Xs7YXFaBzpzRNsesntZfRWHVcrnXMUiJxK",
  "key27": "bzbWfvZsZiyJoiXghaGgDUVpDxZ97dJuooBHTYMPDS77J6qSwwxZJT471U8BaDT73XbDy8dSdyfKst2bumRM8ws",
  "key28": "5WbcEjFhZLQETCwpiUuwAWvzFbGqqvJbJGmpKAWyFg8T5equkEDJ51ELUvDykTsY1jfWB41Yak2F5ufBT62EDPxJ",
  "key29": "5XmiNEXRfg1MswRWB9QfAfnCyUA5vDtQzk9sy8nYPcteVYgYFzhZoHXxsK9DirzxHyiDiSujgKiuV3smcmkgKZH",
  "key30": "mm1cNeda3wBdo18nnxehnEqn8jrhWs9eUVsmhJP4iwdSrmSZkxkdwPgMxjN4XsJ51AXE2zWeQC8kmXJKSfnwQAq",
  "key31": "674FQHBUgGxsxTxE65s9JPdUN47rg7WX8EB8zeB8YT4S1swmAKQYrYKFssSddePYBvnqqtYM5dEH1razAqkuusQf",
  "key32": "24XUTFXbLdX94Q2i1AkhPAbW9HZbppsB257t8d5EWPwfpYU7vDg7wf3XiUQrDXYRDa5pinhRwszxoMsMmS5WtBje",
  "key33": "hC9vwP9Jo4hEVsEmv9aNjKx1dYe7JBTvDxi51eER7Ph53PGzU5vySNeMVKiiNPS2qxczgdtnjSvEY4KycyJvZrt",
  "key34": "2hiccuUDEDVNa49mKvFFE3QAXNM3DLWsaMy7fJbtohYsnLxvhqiHGR4p9qn523mji2pLt85qu9yQ5veWEVBFGyzC"
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
