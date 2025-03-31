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
    "3wqwggggT2D6RdqGUPNNsYZT6jUinuvsHHTTDHNq81qyYecXcTJ2hxdqSt5cKGqySHoKsHYxq3efkFQesRG1g3Fp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4ugXP1vKWXKJkFrge84qEdejdaRTVvEb9LQFsW57f1xWaW5jkvynS7xCDbVKUUm685h9VsPjrz65nmMT5masWg",
  "key1": "5UgdZ6CxzdnhrLNd4pm93Qh7C5Ne9okac2rC3RrKSJYc2CNuyEGpSXeWmBDg7bf4JV1B1a4EEDae5JdkU3mEoH8",
  "key2": "byBTZWoM8CABdAiNBfxAAoUJShZTByZ3FWDTGHe8piLviYWANWtYKeoV4xpddU5oHgQfrqt1VUYK8oAxi5Sm73G",
  "key3": "2wNp8CPqbJK9uU8c8JZNeCGe24Csp8UeM5NWPUvL138ccDPLkx7vNvDAopsCjc3wdy8LvgR31SRoVJLccJ1uWFV1",
  "key4": "3GQt9a3r5Q9FfkD9pi3TRQJjWnvcCBHZzqejB8hM1xymD9SCvNbm3tAWKXXJq6VTc8ohbD7ByhFG27uNStTYGVP7",
  "key5": "2SErRyMUJZ8hQ3R2HJsXyyPaCbiYS2Zme7pQHpKc54iopgdg3k6Zwc37CwtJXBqWSeJv1t1ybeLUUCYTjJFMFgDZ",
  "key6": "5hhQ2AdJyXd8Q7mwoykAToyCAN7S2TyZkWAma4vLkXt9cwyyg3B7va12LDPxRgSGY1QCJGyJiqRoKg2kxxgKUCmn",
  "key7": "2NRnzCNAa6SBC6fJ5W2dTN2wLZTMvhFwtpB6A331WLWBZbyz3769jj3MfCi3xZBEdv1SGpFdbP3y4RAPpFdh6JVL",
  "key8": "5zk7nUfLtQvJdG35vPGMdwLKsCmS1mCyZtcLuE29WojJoDJr4uKQzhSWgditrDnbWMiixQHL9K3UBRpSMRmHkpEV",
  "key9": "3ghyNAf9UgFofuHR7v9wnGUFgL6Mbo3DmCRM1iYqTD1HM7wtnjbuJfJ4Dzp3xtXrC7bFynXwFFLMgjb4UZ6ut1B6",
  "key10": "63YtJDiZawNCo3mueaDjLM8cBqHDWwZPQd2dUKRF4VmzcHQGCUWCtrKoUh4FeJzjog8dBjBTWtwdeREe6CnaxSMv",
  "key11": "3Jy31y5HRs3H9u7YiHUYye41L4yy8S61g5aS5xsXMsLutxs6VdisZgmGTarf2cw4iCMxUGFZpQW7tkiQQaCs1u4e",
  "key12": "2SXKiSxqgY5pMmQxz8dnWobGCvXAwMd65nyqCk8zp9u6XWhkPurVsnmTh5B73Y1MVVsMFJK8cnu3Jq6RxgAoxsCD",
  "key13": "2jEW13638CXkrQQQwwD4s7bLauUHktnX5aRPJdgiTUGNGoNKvmg6V5toSjidaphygsx1wKVnfpNN3WMsuYWiWHyy",
  "key14": "5HKnNapibpE3pymugMvqAPM45eQwuh6MZRwYWktkuDucTy78SYvjuVQHy22Wd2xHfSZbPhRLwhSVQmnCafRbnLYK",
  "key15": "5jsAxPqrSzDfSavkXnWjp5hjictJxQugZ4fmqx8m4i89sL14GhLCosLmjsjFFdxXhEdGnMU9BNWeJuPwmSnXiADL",
  "key16": "5qWDFMp6BnPQG2PfsVaWko7og2A1CwdbHrXpb6hE1Gc4HHcZDAZxhuodk5cLCtm7uKusB9NhT5tMGYS7vmkELYMX",
  "key17": "koywgT6tSjqMXy1TYAHXEYsHuDctCmD3gWKjTTY4VkGrppzwmBe23HpRbCva4jYQJiYkKgTpffJS2ak7d6P9ify",
  "key18": "5Q7c5DBRjdm9o9NYDLgB1TJLF8A8gcfWMNSzBbEAMCqSJiaXix7xS2FZgtou59JikatLHiH6oywgG5xNmamuDchH",
  "key19": "5yLo8xRrKCumPF3S3En1RrtTPYKd1njALcZqqEojfpzaoqinVjDpRzHXXNFnPMbziTwSsGMsTrSz6xWzJfRdM4QY",
  "key20": "2G4AqPew8mwfCtr6BtqepgrzcponjpR7UfwiHcSTXEbPHXio2r5BxKY6Tb6WCDQM79Lwt2tLr3skSw43uwCLySSo",
  "key21": "9WSCjjScqjShJLTVrke6gjYTJ37sVytRZHst8od9YxL9Tvb7z19VsGrzKQTbnWbDNCpsxfJMbNBLZCBhpo2TDz3",
  "key22": "61MEtBFMWc428Zknr8bsdjJEK6Z5xUvWgSndvw7umyy5P3JLrcMorVy6e4kFUGiByKfvjP82XiS9xh69okpUui1q",
  "key23": "5VjDy6VWntRxntqNJtzqvipU6emaKBrGVH2Ms9McHfeuCEuqHTAXGKq3QBEHgEoMcbUEfF4yxgvdmmkb1gNcWJAt",
  "key24": "5UA3wvcuNahtLZ2oLhTKL1JcQbuN2kWYoZPPvSXnEv2JW2L3S6HG2qTpeM4MWsQmgkS4YVRm5qmx6abFatd53Gh",
  "key25": "4z7RFd86UPErmQGHwzupf8UCc5hu9AgtD8JJtE2rU6CM9tR5THsWpHkKGNNGHr9ZCsjSw9Tirfgi6Szfj4kokFA2",
  "key26": "2hC7uEwHwyRU5hMbuhnjWgeL29hGUtAgNQ27vq7g6L3udGC5GzJyoSjfFKNEP7DizZXR795zLEznsNEMiAQsymiy",
  "key27": "4Q5xwU1DmZ1orjAAVeyaTeRNtdKvadNJa1WB5bhxte3zgYtj64DWqEWUYnnTc7FaSnbyZvht35RdHtv5qp6JvsXg",
  "key28": "32psk1rKc4xrRDgQBdEKQ9MejeUy9Xhk92jurhVLBo4vbD6YLHoQiy61HtbffstzY4C79X76qdKDz9jidBs5ZZiB",
  "key29": "2wY4TNJhXhriCwyowmM1GW2uVw25t7ZoKsS7ZFvbPN3eczse6NKxVNFCbuVN2Sifga4CNK42aN9ZWjM99swUgJAR",
  "key30": "4H4gjzrqApGarep2qnj1qPedC2bcowx2QurKFcMVLi1SbHKMEoB4WozUiHQcb7yw888gVep5oeJCrkdfcwdNZuzn",
  "key31": "RAZqpWytASMwBgffhzYK6HssFfvAttfVhBFtMPoVcPkJYTqwBYfbotpwqqFmhNwruXSG8n3ezcbgYrYV7iw3MnA",
  "key32": "2QEchPSwUbhdGKVMr3xRL9GPVcr2Ucym9iggQBVjRiYPuu3eCeNySgMBSPNz94tFC8bPU4q4m5LNpNsTT34fDZci",
  "key33": "6KjyCpji8bHSi5uvdQPkApA51skhBqS9SHYZGyMA7WBz8k7cYAAeXbJCok9vSQ9k5UyJfsxH6bMDqrgFiJ7zHCs",
  "key34": "5WYpWKz8PSjv1PfVqLS97eY1SnboJVytXxpnWWzFsYG3FBztVWjYRKLt5YmQS5nX8UzadqUdrYna9rbKMry5aBnm",
  "key35": "3THttx9YVGNXz9hkmYaBcT15y5rt66zsH1TpBYVjzWNV3hfyS55VVATromncwdY6XCtNs52pZyhFmHwpbXcV5stB"
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
