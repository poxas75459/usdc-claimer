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
    "x4jGCyeokKKAFwJKjzuULZdYsEiJ4nXXsSxVBTe7VEp4AVZzvuKrjeoDTrNoGUctMs5P3oPMgHUEtrjdr7x56aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BtV3siyBQ5vCr7UXZZvNPhK6Z1qXFxAuas7P941zoL7yL3VUPLRFrYhiEWpf1ETANqVjUGBVpULu6TbqgFt52y",
  "key1": "4yjRKMZQuwMcjrYLfdwpEy52cSwmVYa5JP57b9oLGn3GWwdJzKRuxBeTHogpE3EPy8x7Hmsru5hv5wbDsBhrMVMD",
  "key2": "4Q3fQ8w2RcLib4d55ZTtYDEHDpVWrpjdsVLwvhjoFZBeQcrRnfVZyu5TjdYRgDXZEmYiXKAw1EPn3Y5N9t7LE4me",
  "key3": "4EeQRTHe1cydaTLG2WqsuiiMPubg3Cb4L7zdDmvY1JRrRC6ggJy8531U244PTZ8VDQWSHH22cTPxVmfdpwEgw9tg",
  "key4": "57KxaL9gqwErBuvynryG99JXwsrRpMLULpscfkUdN4z8usRaCWAXt5YZ6L1W8T7wRqr37euCrih1vUZqTMrr6mYd",
  "key5": "2kymxHQ4E59RxhZjdmD6GNYg98A2ajuAgZnoHrvnZc79ZtNFeY4QuVSk4w9opQnN2UTM9cZHJp1Rm9TSANhXQ9Br",
  "key6": "3yMJZwZgfvUuhQ7uB37y1WQtvsyarkNjuHPFXGUXhHuSM3qWf81PUmSh8MuMbXkEeVvuP7s3Dbm4qspQXMLT7qHk",
  "key7": "2BKcoF7xsXTS5Mg8puMUEFrCBEo7pt4PPXsdKmZHKjMa5sQf25fFWWAzM1fKQRk4WMmJ6YQMm2xEbUha4CpCD9xX",
  "key8": "4yC5b1rMiqqJYN7ZAxyPToZ9wZN5UNmQxw4KiXmJLGetA9jod5RmYNFFZZ6VXRmFfdcZKxd6ADX5hi28oCyMc4Du",
  "key9": "3knY9d2TEL8sbVZeRpsVHh59akYCSijdJTgnGNn2PF2EYoFP6LM7Joik4SHzTbwVPdaxJoPizkF5Kp4NxYEyth7W",
  "key10": "YMQxm6HT5LHkwcE5z7sPUmbK1CuAU4swPKRHAwuMSvHUbgD1YwzZ34DDZuGKkoTAJaGr1HmmZ5ZCNiRQdE1X7Ah",
  "key11": "5WtQBDjVavG5mbk8tLmaaMUgUVcAmaVaeQEJML8ETk7sNb6dtPRL7N4ccyzFEHmznwAjD3ca3zUNxsoCctvUiv65",
  "key12": "QC4P78ZGiKVKraQGmeSv4NSNz5fXutHWQMsK1agiAStjUhnQAMdVTCNC6M37njpFCky4JtiFMpMUUDFWytVGCR4",
  "key13": "3oRsZvSphjJ1eSaNF3qoGfWYUsbmAQEM2N8zkRjRqU8DsX5cVjdxia7wfLRz3YzvMAec4YmxdszbnGwdKEVXjX1Z",
  "key14": "3ngNJ6bq24BJMhMjFggWnxhfJcr5rKVCrZN5cVsi45NbsJtuGyX4SYUEXvLfBgbyB7VutdUgafoLzEhDofS99gB4",
  "key15": "29jeYxMVSMuV4kofs37LJH9oRixSTkZJXXEmcSKeFbPdkvuGYRFVFgztyb3H9d6JWUmUi7CNQjcpJYfNCRPjaxt8",
  "key16": "3jtzFzSfR6NBdmLgxW8yLZwHpUocx3833GjND1qqh5qSVM9DUpT2TR41hXb9wKJMoHm1Yp4jJycM1scMujXfE1w3",
  "key17": "qtaCkctzq8qcz89wm5J54EtWvCh2XENKLULHv583QkasqbhocYyB173h5mgMRbHLPorexBN7awGvJoNdnPg6Bov",
  "key18": "3WptwH2kdYLJbabWq7bDvp17cn4SDqPXvokueRxjJxyQFjo9nyexZpCQggV2m5Usu5xFQt3BEjB4ksA5PMxGyXTq",
  "key19": "5H18gLN3yTGEvNTswWgqopkareb95uweMVZRDpY8eVA6VqiyX2aWHxNLbFHm2NgUKcnf5fTvHm434S7RNMUtn88A",
  "key20": "2RVGiMFRJrgzMjjoXdKKsh5ncuKHhCjS446KGo8xqdvWXmJjG9DRrsEg3PF2UYS8eyPQyHVmkKNKVNQWFCnwS8LS",
  "key21": "33kVALzQy2BHEvqzGUUFcDjVuijkKMzKPqyP7KQKFu5YEAfsCc9ByGUzwWXz8oD2hXEWhKoXBkAVuDieaW8yJgue",
  "key22": "5uySEuA7GDctX7P5z2geHT5QUQU2JZbR3cCcnaRDfTqARkGpDgQw6DsJsjyHZq5Gc4xnNSV2cm4s8HDovL97C4hz",
  "key23": "2iG46U13BEz97L4oVYCVSVjWSyRWmkjqsd5fnZ8jDZwcVmTz7E5vcqAvNabR72MTjKuLnGngGWhUJwWdu5iK8JNs",
  "key24": "WwJkRLJfgaj1jzWiaxKZ8P9ysJ9fDiZexTBVvQ1cpjnFzetMH6QmhezQeocDfbyTCzsojWYvcdp7zTo78dZE9bb",
  "key25": "26yhW1b43ypWdP3Duj5S27QUi4t7jkfohoGBpevHfEZCrmhaovXDujr6Nk1D66FAiQFWLn6gd6o6fdRbTZXdn6ZY",
  "key26": "2Bt31uYh2bNAUmfK3r8UqxNffUkMKmPDNTMN4exV6spaeuySoBHVpcSaqQNaodkx1KtUE18g4ckUNTiNPPNLVPxr",
  "key27": "4Hba8g31kKgxU1v8Xoj5QJnJ67caH83pYNE8mXCFuvB3P91Jdjky8tRPvXN8W8a9pnBNDYavVS2Mvtv1R7FxqW6H",
  "key28": "63qUiVJkURXTorf3UYUP8wdRvqP9ch5PnAuD7EMHVvZVdRpTV4xYCJBxb9N3WDatUPu8GEr8Ph1wiBqgK7gocv5R",
  "key29": "4izat2cuPoMy8c3gD8MRHbWtToE1fUz3AuzTDx1kSgmLdZz3X2Sfs3ZHoGJfgwRpoKRLBjyJ88mgz2pWu7JuWRV5",
  "key30": "4ANPxE9kqMJRdSJHhFQjGuq8FG9PdSLB3ECCWxsrp5GMt7Xx24VszA9PA8u27jYbF3pBuLUY3zDDs1BkHnt61FGC",
  "key31": "3MW8GCLxZtStSBMCVq8AbAEN4C51mt9UinsR4Fw1rkSi4D649C78mMd6CsEFdTm6czpsWr3x7cjrjN7atpTxyUVf",
  "key32": "5JPAUiBvbyNY9DgYpKH25Mzq38xkSMRhhWLJUZQFXj76UwPmSek8xD7Lu2m8kndYyA77Qsi1izFzj64yN74rN5SL",
  "key33": "5iX8T8fYaUd4PmJTTpY7neJkUjRsijG3PKpYrUofTXdSpkSDuFkBfobWYkvoUtSa7HqWCapNF9K8s9tkf8HNYaoi",
  "key34": "5xsUxGS777JHrbh5KzbVsNf9FuRbiA16rVswz1Km7mDNHTMyt8YXE6E7iSx1RwAzBW5fx2kGEW1eLGCyWr1ihU1m"
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
