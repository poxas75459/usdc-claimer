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
    "2uzgx6ZemiNHwFrrHkMAm1GcZGHNLicy7DWKFBX7aZCHM1LyS28r1f6DMtBtyQqyxqLEekpn9y96gvb5croXkpXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54x9pAqAFLd3izDCVbFPuD6RFfhep6NMuYMbnWa6WqfpmQcTFz4Ro8xp2WCiPs4hknLh2Cg29L5mb3BcfV4x9WDi",
  "key1": "3eLUVvsrHxzQRTM5nBtRRTaHxinj9WbzVqAsk8hTzgrXm5249ffWBKUmTWFr2XHxipBUAms5Vr9gyBm5DnkSQX5K",
  "key2": "5fAgAZsRaX1js788taMxSKKzorrBghAYrHHU6MkKtAG4DC349GxK6QhjgqEAGAoiZFreseBMmZJHuLC7jDMcQhNq",
  "key3": "36L28zKnapRzsUXjiSct29Q6zTGweiWecKebNTFhoAVLDK7TBo4jnr2rDg6V3EFRscAXasZik5R83q5JzaDXxPFS",
  "key4": "3CcP5Hm1t1z5y3X4KT8UW6UKSJgff4ug4LURSGS78Wt6eL4YkERfKfgh9WL6pPzg8E6fG3mamqN9AQNcoJEhMN4",
  "key5": "34XPFgC7VCAEWnaoPSMxxpdR35P6jyHaLmhZsTCYaEN1XUR2XDZmfM64YarHVKuaKnjoSX6tWENoRVuXVaqyFVkD",
  "key6": "XqFofPKH7TwnKAWWQM4YK7sW5kqZTw1RU3gYNJWFebtr4fBS2KvfkBwhx3AMhEYznx5XtaFwf8nPaDuwuAjsjc9",
  "key7": "4KHXKV4dsWSopuZ1sC15sFhVugvc4RjQW4G84Hun9U8AvnaVjGAfwCmfCVtSyYEG7HAs7U6un4zfkSRW1py93ryk",
  "key8": "3sCqrSUyr5ZG3UhLhXWtPZ5j2zCpGwHxnt821xNz53WiZoLSopV64BR6Cy72Ndhj36W2nHk3YwSXYd7JWXgDyR6",
  "key9": "2jT5E3uT7fJZRGaK8sYW5qRsC3ZBp71jjywNFYgbLMWCPd637MNbiYPKXDMwcVMvcRnkRoeopLDurp6q8APF75M8",
  "key10": "4cbdDa6goXMvvtbENPQbsUbfKv5oGzPPvTv48t6v3ZNKZycNbsFuKi7o1PMRyU96eiezuUaFkkiqX7MWEx21F2x9",
  "key11": "4dtSduiWbW5ZM6GBRqtZn5frHZTLqq2x1GLfFsJ49wgzato1urSbFByAjuAixfi3hTBTXbjuxxYmuJnBViJghAdy",
  "key12": "5XEak42JX7ur7g6x2LCrJAYvWhxHByhws9yq3Z2c2rGhwovb3gKqZhmsJbf1848cK345fK6HcBMhtuLgnk2ve7VJ",
  "key13": "4azvrMevz9sxfR4La8CkRdtPfW5fg3Bm4cG1fAuYGtTLYjBZwBCYDgTbnv7ySkxHL1qsTD795Pq49TM3VuqA55ZA",
  "key14": "4bHiCz5pHu3pnx8GHUCnyFmLta7tzST1LmK83djtqRMG2oyTukrr3zMuPtBD9XZCV72d7CYJKgXzT4idH3M7VAeM",
  "key15": "2V4qwXXnGnDNu7PvQXQipGK1ybbKJKUUVSSAHmgemAbZs1s74gmrLXVzDzXZVZeK3ocMSc5YXKK6VTipSbtN99hX",
  "key16": "3JeMMVFNwN68yU2eXBLKWsNxyA3Qt9bBfjXVY1qme6rbGULYpfxBcbdx91LkCvwfhFq7VAvYssEiiYnNXCQK6s5t",
  "key17": "guv3gFQX2fZ1gFPi1tQ1t7mMPZh1QprQvp7NrojTWHYUNAm5TUYFdm1xRx4jC8un7jSDWM86k6nfvSkSVj4ZtjU",
  "key18": "6iiJ4EDZxbBdJGWbYhTZ23anK2hru7NPDm7nrbh1TbgksjSTVAnjJCjp495CVr8YsG21TAFJ7cRLuMzj2sTSCvf",
  "key19": "3yGtWPqHfA79uRZVKAgoJw8itBDRUHmpipakdE7q1SY5K5Q4tvLsVYVF8EPHHdwvrWec6f6a2mtvrFkPJkCN5hvp",
  "key20": "2hKj5XNMLwiSNi6LAd2tGvrsLzbEPVM1ZaqmhsnzNQBgL2ivV8wL741YxFF3ZCMAs2rGZY3GXjyoENcTr9zo2hqn",
  "key21": "3BueUtj8o4DtcdT4AkgzWpvwX1A5hcpw2DiqNaxTNDdptnRaLbrL19xapmBFTGuat2H394NHjwHkJb9DLX9LDjDr",
  "key22": "4AcZgAPDxesEjhTKEy3TH8QmwfEECkg6MzsLaabZwVvSHvw3fcq3S6HAE8KTMAQFQGKEsjUEhbbyNkCL3KN1P6wT",
  "key23": "45Bw9eWDLKTq41rLbjPy4sGZL76vye4pkPjJ774XeuAK3M4429az4youFiBgaH2j7s6vYZyccyVyYTfySf4AVsdX",
  "key24": "3ukWdb6AAR5PvjjtwAYmKrzKnqDxUUuDSYuTZAhaMkKdFNCVBxny9agoir9zjAdcx4yP6KpWru3CUcVtrRVkWBC1",
  "key25": "4wQSMJVQni3ScjiFiHsr7vJkH5MvzfHcS1sSjQNY7ifTjWBy44n214R2XjC2LqmzwMvcGBPLxfAUvAGX5B8SzCtW",
  "key26": "wuqEkS9M7toGuXFB2zoWAZFPFEAnN6xGo8eHF8wyERiQCzyGYQiSmUS4xHtk614ib5JEWodHkVBJFwbPpDQKJ9X",
  "key27": "4rScSaqFiy2t51QGr7kGVNSP9uSwVNG1Q66eC1fRNbrLJQfmvpJkd2i7cS4GVMcxGtaFWMhV61J7rGofmuCeVDRr",
  "key28": "5xN3DWkCwQf7HeYbEPT2Md5qdgDUyXDemtNiVdZWiH28NfdVvTxo56NCD5aZRPaMYaMhcrR8WJjyYeYW5byeHsiP",
  "key29": "1UcT5rHqUixgjhtj1Cy7e6QNVMzPLgkxL849WfGMasMyEXcS5A22sE1qdWkxhoSGuFW8vVCg3cg8siAhxuigdZ6",
  "key30": "nrJpEyEuvXUrmF5x3hUAFLRN52qnYGGm8wzASGrUwiJcEspQ999bKR7zs1e6amrPKAPqNyrBdK1riD38ceVfmow",
  "key31": "3FBvt2KqSdoCxynnCA6ZuzdMcXPxVDEJsHGxxE9PwjMziJ2CQe8UG6Envn6n1H78KxiuwhqkhXMFtVSFSMVPyaNu",
  "key32": "4yAy25ftkmFtTzxRCV4hZRrjc34ReetdrQ53WB1r1sPVUr472LTPckPxPQAdvZS8JbiMZ2oNZB52YrC3gXECr1FU",
  "key33": "MsKMpXQfqh7XHe1gcexBrvVCuvrAx5gcxTgsGaE3p1Sa5ZzQyBZQFmGu54CXwx3PhjMXPT3CDUt3RhNjssUEYQC",
  "key34": "2qPM8ihb5wykgkxz9o2V5aLLkwsKgEqZsNftHVz5rMhowHDEc2uhnMymbKRaWFztGg6qVbroNEd6phqqk17rD6TH",
  "key35": "2QcSNWSktFytQz16JYcgAVAw5UXUWKjgznvWuPrxLk6nBvJ57vd5Qq57QQYXirh6VuB1m3cMFKSYsjEqVJtjYurk",
  "key36": "3a4JiRxYAPfuk8vpVwD5Gcarva9oWi7mqqxz3Ety7WTH5wkFMXKMbhHrPxpvSeAmegZ62Bcm8jrtw3yx7JdmgTyi",
  "key37": "p9Ci4ySE3hSb5f8Uc8iPvbpa1TwpVRwP7HU2QUhk6rRijBtRLNFajTG69BLACLksYKBndbLdUiXqGmepPyG4Cqs",
  "key38": "4eHBGG7xtRDXk8kfqMZYfAWvFxs2bg29w2PidgZmeoVPF1KYNLU2MNjTUPSi8XCTGpXyNr7sZLQVLGaLAtaJ8L62"
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
