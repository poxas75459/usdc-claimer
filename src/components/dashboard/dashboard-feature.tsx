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
    "2trbbwpdkTimea95xBKEUPci3LSjhFQGEG7h681hdKWdDdakrWVKVtCZx7brNu2bv3fABdB1NBkKJJJrHQh3B614"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3527sk3vqrRteQ85E3Rhrknke53J9w6qrPkrkZdMh1WrnACDNS3a64SMUmeabzrHXcDK8ocC7mynr95LjWuyLH3o",
  "key1": "h5iteXfVCuwh9aTAoWqSWs6mcDiU4PcnCkJQhY8aRbTPxBs4vZH3q1e8b2vBbX7HKXJ3LuUwTuJtTnBQTxmMAGz",
  "key2": "4RCpNcr3wdX2pjiXXkmx9LsaYrciCcK5oXZQSZ3SSu5cnAQifHkiu5Frbag45pcXG42Fvvgs7NPoKo8v8cSB9QTG",
  "key3": "4C8RpqSQmMAGdeGuzFVSXNxexk9ZtUE9HKAdPPCA19NriFHSoTF2ggMEVq412S8K55WLPGFDWsUPpMXp3ZcvQTiE",
  "key4": "wmUbmDSJ7pTGeVtmPM9Vtk3giVK2kaDNurM6rxTKZPzGPoejjD5Ds62bmAjfRaLhHTSr779cxmKh2JadYpdN2Cc",
  "key5": "3xBN79G38H6wU2zQzokFUB5nDDFtxCP2BfYFjYLEbFyTDMyPbQhTozYpSKCGGbUhgumqHDJ3MzmPtx6uJYdVD9xq",
  "key6": "38ShhMkAr92Xq89eeDDStTwYsVCKiZ31xPMkKAn2VV6r7mLXykYQkDNogg9KUGvGBEM9HbNEFaajULxQza18V8sh",
  "key7": "3gapmBDy2fWbWBbtukzbMrQcRL2UceLjYYpEXZ2QDJRiLqdSE59EdXmmcwxHTknWsfEZVVk9FL2Nuvb965KonJqf",
  "key8": "d2am7eSmpZ2u8dd4gG8LTCEzWM7NUVPYmMnDR7kKsuZTrdayStWwKhoxUNgb4BcRMx5BVuW7KpwMK4xgpVwMHxE",
  "key9": "4uLvY4YSzejNg1bRAbH9gnicdRLuy9j5nuATzRmLvzXieNZuXBNEDrgSUJHKGi6YnYJ7TCaDfPg9phZRUnnvFpFS",
  "key10": "5K1kiN1ZKbrNe4fYM58cU7Vi8hRycnCxGPGhs7c7bYccr1Kze6T3avTNyJDPFbqHH2msEtswGJHuoJoyNjPUDvsy",
  "key11": "3FYs2px1aEmjei431gY1FBd3NFuQZnFc66WRoxzXJUbBE9yiF7uZt6RiYFGDHoip84311JRydy3Y43ihcc4pQVNj",
  "key12": "5wKd6AVxrqmZRQSquSU4QQ4y38b9xYCkuD6VcEh5T9tZV8NguxbmHjfNjkZk19rpxwHqZqox1dDiLNFYaRTyNJz5",
  "key13": "4KQFDDBSZg8CoVapCFu4LM7AJcKHJFNVBVeogKipB2fZkiAh9SXPtxnwSQeiDk58bHVs7piG3Mj98tKYYzqXi8ck",
  "key14": "4sTtfuLbUvV9rv7oG3k4ANmgywVxpSJcoSmNSUMmHkFULXiJ8dozASAHAdJTzc4B8c8YMzXXqsYKfXagSa1i69mw",
  "key15": "kEKWkvxGQ84n3hS4FcCPDqTVVpz1F5i5eQMKrk6UZR8xJTWGes7tq16SYW5E97oYMZd6qDRkiCB6XGZkn2YFRZG",
  "key16": "62NQsYpZ3SJ6yVHFyHKbLUQLKtqjuTuNXsZqsZzhX4g86DoFpbfec1zM9PwJQXvWBz71DPQ6VmBdkM6oiMWndiWA",
  "key17": "xpYFvr2mB664dNMiuavdqQJyucPSN5w7WUYGXJ7PyYk5ybis9mheEjBDc2uuobrmAH1sneXWrEjLJnDXTTyhPAA",
  "key18": "24A3MMygZXxLfQ2c3tKekVmMwndJyMZfUnJNkp3sraQVgKwmmoLzyfUbTcoXBBtFvnCFqNwfbXEjGC3hpbjCB7kS",
  "key19": "2dvEiuTupbUmE7z1o7P3YohJ1sNZ1kd8XAMWcSvmNJaqnux8uHrqSyYqD9eqyRJu5dHQ3GAegCAaPkxd68uEFCpP",
  "key20": "QNbCFTAPYsTCVmHvzhudrXkm1UJVJGktTFXdB2yrANHiU8eZ2PX3LeoDbkvWRXFjEf1FDvvT5tPPyZcaJ3ZF8Tn",
  "key21": "3ci79Xf9UDMVUtvp6x94cPaF8bJyVpcaU8xUvehnieQmomNc5VBEbJqxhHREMziLkcgMyedzwy44YL6atUNB4RM6",
  "key22": "R4c7dAvVe6Hz9zTfcRyfRJoSnZjkAiQ9BDT6P2S63cjXabJgpVm17e4zoNmufr8iR2SwHRsg4mgdFFekXQWTwej",
  "key23": "2nPnMgqb6CgDmRUyMkBPQ1waa8ZxP4fuJwfe1eywpE7SnMs8nh5fH6gs1BYH3XeyQmoXcRyYW8vYVG3kts3v72Cx",
  "key24": "5xqQLTk7To2QYDBehFMjYduNp1U1tk4N5ChA7ULb457yWSwmA7176U61oqjgMjseXJhXw461dTKULJsvVNyY8E9d",
  "key25": "2bHTa92v9RYXU6yZDLqM5NkMSHLH122WSYHzwSxKxdymkVU1qmqBvi9eQJf116HB1hTjRUkviWs13TtSi8pHTLQj",
  "key26": "5rVSaEak4Uu8YmLbzEgvPPZfWjaxei6LoDpwr15facrh9cqLXoDcZ3A8kNJx418BSzsLVyJ5r7CgdDyQRUF4AVi1",
  "key27": "5fyyrRLKBo8CoBPpkNTJJr6CwzQeENhEGT58dBXtUpeCQ1ZpA1Nk8hjbeYC1iVzEGyaq7M5qtc23YxxEJq2fRgLM",
  "key28": "etB3wjneoYUkPVW4dKin9dNBCgCG1YJXTK7brDBzsq6WFYfuQzDw8163sm9Tmv5hdYcyRrV6s22YJ82o2YqH5bb",
  "key29": "pSpjUucQL7PGCiz8RFsLVUv9AoCgMh44FUAGKzh15B4PyxXjskuxrbXoAsyjTNxzijXs5tbKFBdYEawKDqNZnAF",
  "key30": "4Doj9FLnB5vTLqxos4mtYxxiotoBrMZp4G3aXkNV1UgL4Ddwyc8fWADjWSq4d6d7Fu39B2PHkKvVnn9pZKXXbYgX",
  "key31": "2WAuSQSpQxXWb149VV8kpT1WU8CTAVcHT6CJiuJHuzwgSLzXpTfjGJu4iPfL7tRRCp99MYF2M9bst25xnSPuFM5X",
  "key32": "247u3srNZCsy7rUQE9a3vcimAcU7FmZghrEt38FbRs7oeV7iWMKNmPtuhAh9VQyQtSYysthqkd6Sjx6gWbHSMhh2",
  "key33": "49U5EhmCFpc8A1YKF7WvYvY3t92jfAvBhDgXBex2ssDT27dyLK36Pgq37MRUgKXBm2AHRcPoNSeudy7AEx8T53ke",
  "key34": "5rZNRgG31hvGT5AUfQetMq49RUwfXgSbMVH3uHZfFjK9LWVhgTdjCytkgLLbwGPo6DnPoUu9MLQx5JHbCMMb9cW4",
  "key35": "2pp8jeWfFzt7zpgV9LtFxzLgdqPq4QJsoVAKo7EdH315sKUUSa32KD6iHy42bU1WENEexob3CoqG7c7t1aaPRJjr",
  "key36": "aChnjuzwotsbitpgwhv8t9c33HHCvi6Vg5oF7VPX5n44z7tfYaLmbjHnSNKDhxs2AzZP6mJPGtGRkbcbh5TWyz7",
  "key37": "kMCkk4bmEvQ4XogC7Whu5djEN2oP1GA6UcKPu8MC32MTAoiS72DX1cvrrrW8sNFYRa47maPG1VqKFkRYqBu5fKR",
  "key38": "4s1TNZhfdJaXwhLQyLDi9FHZKBrjj2H2epgqQ877PthZg3dVFiAZJdMazMVXxnYiWRKgZsfN59U8K9qC26dVZTPc",
  "key39": "5yZTw26sNKzhuZwG6upUNTqSrbehz2o3JosCU8iSy7dborwjjk9Y7TFEVWuTBjdn73GnsuKKXfT7iePKtLx9BctX",
  "key40": "4K5Zvf7by952QqyDWh7oiezLk3dLYUqRVL948BRCELTwZfa8U3bdcBrnDpny5d5ryF2PDZRP64h9hx15XJqQbzQc",
  "key41": "3BVW96zsJMv56tyA5rzZLWcvhC1sW8aBGpGvdzYV8W5SNvacdsbhCZMPvKFsqtdSymKnkipZdyUSMxpaJHyN5Lrd",
  "key42": "3GDPJ2pWUrXqRweqzejeE3hs6JtdEvdJfuzLBx3vQ4KvtPB8ePakHkW8hRoFnKozrT5mkY4Z8pCcEXUvsTu5fWR2",
  "key43": "3CbxpPu2RMvwBae41khemLVcLSnPTEbCubKPBvb42VSiW8SScYKrb4oiLywe2Cr3VBSpc8522ADnXVZxhk7gX9Hg",
  "key44": "4sDkEXX7d7uVWHnucCZxWvYKFw6ZEN9fo3gdMCt27AhpWm1amNdjArpQ3QwR1nQMYx4Z1rfCQDBmP1ySdp72EGN2"
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
