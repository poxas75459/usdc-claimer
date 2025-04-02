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
    "3aud6M3sfohfJucCZyzaHT9eHQmLG5mLBz8bmQNJr1nhUr7gynu7XK5MLKUn1qA2LQVjp6xKwGaMS2T6FHjFq78r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X69LVKoESRsyfwuiuMiwjVJoFiMQzccBgcBSzHGtcRiYbB9aLYiWma2JJ2tsD4b3ybkoU8w6qHoxb4QnaUPhEnE",
  "key1": "4s1gv3JRfQCbhWSWQHa12K63bpotYaTB4PzPmtTZ43LyGqpiCg1UroXGXEf8Z9d9x8iJPmp6MQP4w4FcpQX1se7a",
  "key2": "5q1qY9peWAF6iTPXpnReuBQzGgUgYExYnxXLQ4cu13EdssTy7sVsQsjgU3azh9L2bGn1q8Nja2ofnanK25KxLCVp",
  "key3": "3u1uBmRw5tnQx1WDzbRVHHpMVnfpnUgAzT5gYXejvnRzZEWmvbSXi36csKftLoXNgTfv7B9DLGV7BL6C32T43J6e",
  "key4": "R3N935QUtLSXC7kK3taPACT3mTU3xtgktFHd6mhN53bpUwK4qRFAtVXaPUYZXHdKnZbz8gYvjK8UAVzm8wYiAC8",
  "key5": "3NYVs59pFDh9MPsonW1ZJtDDy4t9cvHwoqyT3Gy8GRFKyrATE3TeqV2NZUQC65jyL8ZG4wZwgeedZVZgwHUwHFKr",
  "key6": "cjd1qozJmWJCj2mjGtSJg1nEUCQRhVfcefnEjkw44Edmq9PfbkRadw4tkcwYMMNgZtLWk25PJWBycGKPh63GBhH",
  "key7": "5pQdL2a1BW2EvxAZwBDcTeFVuuwwj1C2zqhNkZmx1MYaoHaVsNjduxNsWNRStYwoAukA7EW64qdrALkWgCRbkpsA",
  "key8": "4q9R3P96mCE6napvHbXVTbCB1JDbCrJZPhR7XKw5rp2SDNWEpQX2apC5XabfQDHPJKfJ32z4AqARLPXpJPf2E1Zi",
  "key9": "4KJiTChfEAqbeRhpJMsTa5tHbQE1fE4x1g9i7h6UDNTfdayjE92MVSvb46q6nCQzVkoHnuNFkmWhqkwgbQqxj8oF",
  "key10": "33vFZtrf5vkXDbKxJPVJB31EaWrrMezFK4eUCfWVb7xGx784wBUXUzYudkSTqckoHqu2ThYBSC5DX9mPZZvTGDS8",
  "key11": "2PHSdHHSNAcASH5RV7oVKQk4vZiVjjZpYdviK6qUgzp687E2pMML9BUh72UGtPvw4CSe6rE93xh6RnVuKcwBQqnS",
  "key12": "7pvpPt9Tq7ahdRfh8f29a3WXXfzf37wDTgsdEgg2gJxcnKM8fMHSzkHzgYw1HUXq67Qo6NyxRwwaPth1PTNfd95",
  "key13": "2TvU9W1sGrrqZ6cfv7yta3wVLrZ8C99EnLPMdFART2RUGWg6jJy1u3FRLhk5DjYEN6CgAWufsY72UDWbhLsuo2xJ",
  "key14": "4kMnvJDjShS1Q9BkZ9yESwLfYsmfJcbarPwKs8pLmYf6m6wypi4PQLt81RYngQwdGHhgKmrMrnvQPhC21N8jh16H",
  "key15": "49tEwUMemqcQZg95Nmridw5XyxSne1LEVheVBWJZfWJUDM7YMupqD8h1TYqDRHCgPbaX4CX2JSJ3sznLK36NqDM9",
  "key16": "5Cxhvy9mq3hpYBTaAyQp7xWFa5vzpj5MsuaL1efTeCk8Qt7p7QEXCUzYrHKnGeEtSTMtQFR4hWhG9xHnNQD8SmLL",
  "key17": "48b5qwFyEXTR5sEX2zyK1SPksgoC3SDT4Tvfc5JLC6fh5NWqD4yjUXshXkGdSFKpig31ZMnhnXYrtjxYFRTi1eA7",
  "key18": "3NMgbeDmLdMezswVcwXihF8yUoA4KoztGTbdAuS1Ljm7xcFrunJGQ1sFsNcnyCNzJdEcE1WHsDF9LeNfbFTWEgKp",
  "key19": "4CJCWa5pgJMs4BjFv2Leunc21LkErpSFhgUKWeq4iG2EDBociy4wjd9AtyWSANDBNCRviCt7GeadkXWXYKn6RtR1",
  "key20": "35JTS7PSQuxtynSBe3VLXq7JYW7jDEaRBLJtRYUELWQfTpSvSoHBgx8oBuCSACDq5DKqhqiecA8f4sQjZDcBZkn1",
  "key21": "4fezRaMz3uC7QKSNST7hzvmb25365e2VXsX1CWBH8AjnvYgVCst18vovLh6CQey5xGzSwYxu6La7FMP8zL1xoRDc",
  "key22": "2cqesy7vP2bqu18zMV3eozyreVeYtWd1tnQ5AZ4vcX33YdNSVe3rmaza4JNCRH383e1wxLuXNYcnEPWwUtws8Wvo",
  "key23": "5fqEwM1ukB51uPSMQLbVUL9pSLcASwWLtHk1FRJobGPcCgX4xPnDLHwvoWC7FuTtzQaN2b1NBd5oK6rCY7xjzmiZ",
  "key24": "5qAzarDYPKkZoZwgMpmJgz4UpXYSa2f4RyevSnbvTJb6qYjHE1s14hHTnPcav3sarBkuMHLjidzNHC5a4zgB6JvD",
  "key25": "4T71XtNf5K8LgsFmrqrGh7Vdr4G2xw5Ndf1VqbTcwMG5ZB5R3cLquqNKRonpUK2R5wGnRfLbWGQ9YRs4crP2npSK",
  "key26": "51Q1AjFTU7zfnS2CWuDrsRwp8EYMPteuxp7BQJYZS4JDn65LEL23g2tjHahoDDVTKsnNgB8jMx7bURjdvz4s9XAm",
  "key27": "5NUs1GoN8CWHnYaqzZf6FXqoN8cGeDMooPsZkAMFo5qmMosmhwVXBuDb2kTsFXpjvGZ719xF837LfPytKdXwqL5Q",
  "key28": "5uUgpXEhzwP7Q59QeNjuWDeKHwDBhsdAYK8qU37E9mHUWoEefbFsspMgxQpf2tVFwh8wofuhtZbEiLgZx3jYtVUx",
  "key29": "4WENYB619kPK6V1rHhahVrhN7hbpfM3sEu1933WjSDHYx56BAw38SiqbJBN7AjSHxnzKD8Dw1TTcp6qQokYR6Jgf",
  "key30": "48WUYtAd9K4P3BDeU26cznGaYSeW9ftjASDHcBemVM7czjFMpR2RUVuvtNEm69xmn9Xjmbtz7WJkr3aGcL9mepEN",
  "key31": "3j2Bor7VR9Ve3CS8j5k3YjgfzygnGtR8JJzJXgEHgjj4xPB7nz3Ta21KtkMD6hMe5azPXfXKiVnspS92rni3sGyf",
  "key32": "3gXR71QWPEuM7vxezdA72dgWM7ERF8wc68Kxdom9ZPoe62pPXQCJST6pD4XxVmzW98iZ5B11rEtyVLdcCF6AWGa3",
  "key33": "WnQFnVLqXH8dwA7m4bJcygu2418hhdkE8Qo4izo74XRV9yi6Fers2qRCN1vn1m7it9jtEV1iekSTCodNs5s4E5z",
  "key34": "bBLyFjNDsV91qKVkpXJhsgKp96CLwjWW2WVg7SUKcYeths81McMVSmwpbQy5PTbyMzZDZtrHy6ZfcoCXV4fXNmR",
  "key35": "ttRzhoys61Dyeo8HLE8ivFtXvxnA3KcEo3tcL3jatmjfUbsdvwnBDsBspjYdSXL1Z4q8r7V2dPpYpmojbgytR7M",
  "key36": "e4ULFE4MAqhMqeBNzAnAweqaHqnDiHb8Gyo1GgBQUGnSMqsRdaCujLCNK3CDuG4eAAYRZQWC3YXJFHa287j6TuR",
  "key37": "2tcGJnNNVMzJrGRosJnNCBF8JXE7tSdGUDntegdqPBLQ9Mws2Vz212dBM5yH61wHyEjy9dXCbmfpnYjQvcijk5oQ",
  "key38": "4MusiKR4bUjUGL9JAuGMS9h9mgYSVchj2VEJDrcyBARGywnfQ2cdQiTXs2wVz4HQgMhFn1b8rVoYsCfwfxUp1mzx",
  "key39": "3GUDpRXa4G3vcQrrznRoiZ7TMt9nmcCNuh6QadTLBChHRZZxZmbxieR7upsKzwPAip8114FvJm5PVba9nsGiAGBr",
  "key40": "56YHu1f4a8RTRBue6Ry9D4ffK6vkHFBWheuLpracyeKr12p5PFz1w1jcqWSnkaSjYzhJYDKG75YnSJnGo2Bwudo1",
  "key41": "5oA4LRxEcc95WN9CCB5gyfFAsHFzKatJYCtcF1paNw4PRuPvxL6u8Zm42EkpPZMqf4XrypfkkhDXjmvc2FvsddzR",
  "key42": "2923Co8YWewZC5U7WX1PcMNVephuEMfy5KEyX4nLBUiFdqCLpEK6qGSv2REV3SpKYRbGWo5A2vG9SwHjS7xzs3s3",
  "key43": "2fLfje3aTgDgpLQv7qWjeef2y95qdG9NeFbZhZCc9zfyk23QRPBSBbT91qxYCFMmAufCTDqbXQFT4aJb44sjnqwd",
  "key44": "2hL1BwnFQtYG4tvYEkz7sDkz27kQavfDz1enPNBnAxQyQYPECVbKuB6gqPeELig44JY3hYjCyATsKVyAq2imh5Wy",
  "key45": "d2HyQxdEjeX2cumhPzdGc3H3KLqAiWHq9iMomkzyAJujvcNqecR9DdDtWXifaCzhHdk4q2BiskMHo8eFUwPXXMt",
  "key46": "5DtxqekpkkVJioWDgGjY6SgSrgF25HDZeuCnzhEzoiHLLjkuf73vuQXwDK2W4BonhkoVcARejdkpYWtUAaig5ZGL",
  "key47": "P5kkQPsKUnE4u6JbmnxJdocsoGxfZiCFkXsBqkjF2Ki52uKd9Tghhu6dkKnx63gVY8PxqRsqYGZ8BeY1R7c1Zmj",
  "key48": "wyKequfKU2dg64Z3SPKoinAd4wT9BMFLp2CRtQB6Rq8XuQ9GupEV62HyKHaXH9iCyiaFLqE9j62ESPeWGbUHPdi",
  "key49": "4woxyz3u7UcV1x2Q33pw4cgz9A2TWZbg2Z58d9RVZnJ4iyxrurF1F3QRCKP7k9k9a3Tv49xNiozyxY67JGW5DcNU"
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
