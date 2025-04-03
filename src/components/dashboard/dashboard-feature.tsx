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
    "3gCCYnpXzJSpdx2tE7u3tgtTBZUPku7F285p7vN78GxcsKKsqnoDE4qbDrgDUwaVuAogfM7tvuZhuxYEihPRaeBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "232wyAECQZt6impcVUPYPuj19LQcNwdqVLH2oRzseWFZ6fPfhVB5y56bvD2DrBK63QuFdh1fKvTWYhm9iLEHcMks",
  "key1": "2TCahQmYMmRyzNWTjYydWtYwNKc96tSgDhmjqbHRGyjc8V77XHk2NTx1cLo4tKaXNawNtLHHpS1Xz9KU53bxDDLw",
  "key2": "3GwZZpwGXE9RLgEoKvkKCc6kAevqeJSYpgZWdzPD4zHp1MnkZJyXtSWfFC2GFCMJDSRbJKDfrDhA7i5ZJ6JGbxN5",
  "key3": "2sfi56KauveVuUkDPcZRQEpbfKA2NK8sEnmXHSqaonuEgmpfJryctb4v1wF6ZF9X1Yfqb4o3YBX8AocekNx5giG4",
  "key4": "W4WM7umHRL5cGvowE7vuNNp7P69wUoLfDDmduECeoCxsxAHJwvHnPW75QtsN5rH9Jtt8hgjaL6BzE96TXSEQs9X",
  "key5": "2msomoWQSdSjgGrboXTX49CNeXXcoug2uK4ASX5tY3KRfWQDfLHgn8G9ZgCUpHt1HJKJAcEJ77cCLNDjGEVce6mb",
  "key6": "3pdLxmr5tq2tU6qizz5dCEVzd9uVsscnszKzjL6C4d786QaFft7rdMZurx6wUngR4yaHd7CvmaiXmwTgsLHT31Sr",
  "key7": "46MNq7LA2XFXZk4vCQQmMVSoDUPVHu4Uq5ojwVNJXH3wRVRGzDcccFkB5rP8c7bpCxgg4cGRj7sDT48orqoKuRvW",
  "key8": "5evXLTWQS8B1r91M9dJPuj3uReZsqsqMiMGnVLc2UEdPLDkstTLTLJwMU9uDuFjnpTqChxZRmhvvCdm2cDwm4Tv6",
  "key9": "3YZKpJbT11cAMewNvphmkJ8mqp3Ec1fvGiWpkEcSdDP38qMvgy7EjibqTE9aTm1jENNKHWuN7n1nBuvjDAFi45Wk",
  "key10": "5JgkR6TZbwUaQkydmLVccAGRQtiwVGtbGDnYHhNMK91GEVtd2Tk93osJr1RVKJ8CqVRNnSbpPSoQfRmuP8AksbT1",
  "key11": "3XAwP6f9TWZ1H1MZF7axDEnaAf2HFxkHwq3MK2FeVsQgrjm4E3qNTBTB9Jpy4th4AC1fHjibDsNLgzfM9dptLSHA",
  "key12": "5sew7oHX5fMBvdV2jQShGYPuSpg7nk1RKaurcsjWfUZWjPHPtUXQ91dkSrrPzwY5MqUUnJZXtN3ceE1Rup7tN36b",
  "key13": "3JX7RzGyESPkYH1r3Q9dxhe9ahungGtFqRDECwN74zzJCMZXCGmwpr6pdRVEUcRw2mCcDk3UpWCnUAM62XREhWAs",
  "key14": "4ft5QaMNHK3PBKe7iiP8uaPat5nEK6TmaqvnSbkHrf7zwV5hoiCXcbKmKbMEhtW8AxacpW2CNZCth57t4R7nb16t",
  "key15": "2VQzKwvcJBfdK7EvgGymvGccpkL7DSTn8zthsR89gKcc7kquVz8DTxfbLhTmiE1XEqVu5mDunCEhkvjyBWyUP9Jc",
  "key16": "5DEWwmqxzyahBybYjKfUF2ePBuZcAsQpz9fKxUnWTojSJtA8Bhs3mZrgLBGBLCmvVRgAgWH5JCJ7KRJr8ZayxGkQ",
  "key17": "2FGWsxivDKunhkb6SThtjKo84aDty297jARDo5VQ5QKn4ZAd2u7d4ewiQ6SwgUfpk51R2vp6yZHmKwM99BV5HM7v",
  "key18": "5mGrhRA76ANAwTDoiscJQJYk3HCC7zAHL5J8EDdxRRjReo3ieVhYETT8wr5tLAvbPUrVkUThNR9jTu3NU1yiFWw2",
  "key19": "4MMnzSpfC6eBZLH3kFhHbjJLjitc1vfsvBwRViUZTfRk1SiV2bs7vMEipfrc66nDC8vh5TvgQASLPtYjVgJNEGsF",
  "key20": "3VALhn8vceCdMxD6d2m37yzEFyco1n4D2iRK1B6siSSSoWUS9zqQm7ubmqXWKs3QmaGiBJx4qm61wvPscSvVLSR",
  "key21": "ajh2b6aVPxHXyeqyhR9Vt2T2kUHeSFkhRQ44YzrQyTRK3GJpZNi1VHR7We7Gnh1WamA2N5n9Rkm9LVCNqqAK6Hs",
  "key22": "bZgCrS2aE3o2uFg9p68eZH1rSJJbNGPT1nfXNu5dxLNXfm8tUp6ypBSKrqwL9DLBFL7BLshDp9TJHyYq1YMN5BX",
  "key23": "5NrdGSNGjFRtjC251N7ahMGM7dYSwD8BZKUgC8b635RpbbmVa7azYgyco51o2oXfqQvGops3dLtxjjhGLaJaKUXL",
  "key24": "56khHvghD67PJNujhHd5ehXWXq14EmaFK7KXGB613QtqVSeUEgmTMMzZH1H2ZnHQPYL3uvdgMc8vFbP2fNP7HPeu",
  "key25": "3wd34g5PEzDVLsENQThdwHw6tpnuntigb2g3qwi8PpChkf6MBC8Q8TwPia1YtFupm92nu3KhPs2Gww45AGcRieKS",
  "key26": "2p9pJfmV7aorbFAskhKKHkrnPx4sFrgQ6QCZPpDq83yQ4sXhwqezcx8CT8sD7gvR4uyP5eV4kYh7D39mv39m87tU",
  "key27": "2jk8BqdmcwQJRb1L6W6Zd7M1uiMXBdiaG4XBxvqYqhay8Y6SkjPTUMdDJDVwc3KeKNTBUFc6VpAnSjB56YbSBx52",
  "key28": "pdhjk3eyxdcPuigmZKQW2qmeCvhkDMt2TMBQMzsLxAJ5fsv1eP7hFxf92qtpdcP8wmcaVtTFoC41s2999fd2WeH",
  "key29": "2AfDqP5GagaXyrypiFPW5JqXa7nRMoJLvT2nTjQvh4ZBrWHE8ysJJH9cd7Upu61rvQkEybkBBg2BjLvvd9UQEKWo",
  "key30": "24FsWjx5qv34bJHxCB2dwKFY3iqLzxbQcZgMDCusKo7NJinjf328rsg8KC2fVXvT9dZoRx6y5Q7YxvGAGynLQTBM",
  "key31": "62q5nb2WGcLjeZZVACM9Jyer4wAGoQW3VRpPFxJxePF1sdfnvcixnsmJa8s435mv8pZcHePUQHTaabSC5XV824Nm",
  "key32": "4uPPHBXVsmW5c3Nd21HoXL9BmLk64apVN4ZGFBHRz4UUdrREciUGsZo2aSmp9Mo3soGf6qA5LZ86Ph5deZWq2qJv",
  "key33": "3djqty3nUyfxyFpFixLozmnE6th1J6EKs7weBjczs1gDPNj9jJrkRNTtedQg1J6zDArMPaBpH9aeNPczvQkRbfh8",
  "key34": "426NFb3qDaqXoGXNnt5TxD48FSrQumVLpTWWMvygsgKM3jGQctAwzE3hMDzzhpda1uWaJQDku8ZqWQDJxFs8cMpj"
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
