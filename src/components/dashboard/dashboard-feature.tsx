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
    "5AW6oAUCDHrMsjiRxc39kYtPCPoYUBgJgSWsKdEeRvGHFozcmCWV73eko9BBejSCAMxwB9yEL4TAk7vGyYcR5yUQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vy9gbVYZm37Tyrx89FhFDCeHCJ5GDKzjWM6cwzqdciDf3CeRKS2NUkUPDB7wjXMpwBeY75wkED4RFwFJEgEuTtE",
  "key1": "3u2zJZbroWKz9AgqjqU7agf4Bd8jdUqQFyLAerGupBHwcV6o2j5dGPpHVsXiv51vdyCMEoFc33hRGiwQacrngDJz",
  "key2": "4Hu9tX25MXALRy3Eie259d5MYXstJJVuxorwcwwUifzpZEMGdh2dtY6V8yYwifoBXTxCjRU4wnddwiVrqBZ37JUc",
  "key3": "2BusUGfCDZxGJZz6GUQisnjZRuYhqEdPyqXhuzkqSzWpt1SWb4SM2UZpPRxqEtmsm1ZSvrZGAnUvrCyBi6qdZb4R",
  "key4": "4hA7ppu4oEXXDVgS7nkWs3nNw289QEDZeo9uLuPtKx73tHHCugC7M6Rh4UqXP4W8N25Di3ExL5dJjAoSydYuZjju",
  "key5": "WQc22siJGevq6Z5Ku6so4tYcdo9HRnn2KGGZDiRoMzCa6r5MNZBdPqDxSn8cXCn4YA2uY43KyqWLytoz3HHd7Xn",
  "key6": "3t7QcRs2vSv61AdWq8GKEdJJmsfBBcDvPT2x9FpRsnhUamhkPj4u4yGSrjMgrAA4C38ReZ8GCgpc6cqGyhD1iH6",
  "key7": "3HUUU711gkCpBsGwtEzBf6WjkGDJULhxX1KuMY1auXXkz5R47Z18mZ9odosEdcA8gwKCjELTCY4wFdgMoxUtwGzy",
  "key8": "5a4xZPS8FbwZ1NCacP1xPwqwkhBWVMYZeKpKR9SYnBeTYdah9aFhKKsG3anaz3xUbeDHZBgeJ2qCPspySzM34UQF",
  "key9": "3qVYBnujKKuHNkwjNWXYkiVWtgvXYvv8JaVRvoT5v3KTs4mWj7conHVP6FbrZmYk7DNeked4Gh3W5Dbnhyt1e3bx",
  "key10": "3HZTnktyBgGZ7juQXvFEUWNnYTQ56MWp4BNVYFFmSmdcb4UgvqigkJ6LNfG4iMbnX1osfRJsnQH8wsdinNsgtf94",
  "key11": "3NJHaZnNHoQXyKSfaCw5YuozEegUVkjrYd3mHt9gjw1HSjgLaZnHhVk2UpTRgHudWAv2bDR5poFNfA2expLe4aU8",
  "key12": "47T7eyp6MDVoWwUgtsuirwQrEM2Jd7CCCkQr9r78MoN7GuSG4GGG1PKG5L7D4gCdRGn8y22H2GbFHPehvjB54eoQ",
  "key13": "5Ckc3dGLqBSbhCXweRzUjcmhJUGxemDdpqbLDdqxD8heZYBuaxgA8vNjnPD8hmT49FNottyfxgz1L2Qzny3gG4tc",
  "key14": "2TPH8ze4aBECM8WD9iZ5rvVhdke7PH93CDRE1c9fMiHtQSCfziwkAcYirvEZqYoiqS1jUwqdE8dqhiaTTZrBygA1",
  "key15": "21wruGsXYDJdAnMmHS2NQVvu4NjUQqTrpYwmPbFH2JKp9WQqA31cckeMwntdjBf6r3HNvXKTpFN3S9GyaVuq4HA4",
  "key16": "2McFjLRZBgKDgySQcJ1HGUijFPuYUe7NU1vwZTfCpCxyYKjZngpBrkCjxZmeUw3VFN84jYzisJbhHHHJ5SiYFvTA",
  "key17": "24n6UaRakiDXNECwASndT58Tg6vBpkweqBM6BpT1N7Hoj216rSLCVwkCjFk7b73nESmw66RdQDoXJjzNquHUdrTJ",
  "key18": "4843upDC8zUTFXjoBBWsB5agsqMDHudv5yaGW1cR5vfdkHtKhEptaRMfztrVLoczX9NwNZnagyApbY54oApS5sQU",
  "key19": "5vwkmjGUgChkENtkf56rG2bnwcifBrzoX37WQLceEeqMmuMVRJPcRaTdN73A4HHrTFAFERv6MssEyGECdU6Hm73m",
  "key20": "3CX6yymUpkPbvHRHZeLV9mbSfnBaqwN2jnvmGR1xZ5izYQ9Jq5c1QFRbvtq35yrVee5hYDRTnAiFgkbFeVQfGCsw",
  "key21": "MwVmwEZvcLr77aSbieFoPa43QBhjCD43U7By3uwnPneiSBRqQ2aVcv5omvBPnnvnGCdx2He844KWMj4RaHCew5z",
  "key22": "4Mc53CBiK7mgDiSfYDXuWmGznJ9FJ9YTM6i7TvahwDwTMEXRU6zGzDyTgv49EZV4nSPqTFir6GLdExVgHPyYxCVK",
  "key23": "4B2rpDTNefTno78YTD1Cmi8XWQGcZTye7B9k9G7YD7ndwhr8iVTez7FrWM1PzEuBhgetfG27HpFEYbaRbut6CZxX",
  "key24": "kVwk1kab6K9EHhShMeiiD2puQ4CegzQ9ZZckuYnz3SjZBRv9zwxzsakZFyABsK1FuqDW5UB2UD8HHxoRoDneFds",
  "key25": "56RD4RU2RJgEUkJMoZXCU9XQixFPitRxvD9YRXXvJZ6q1vBTYeEHcQ6XTKgQbnbv9a9AEYcxuHUed6mgZ6zhad7F",
  "key26": "4Scw5SCsdoqP1zie2HRZp2TGXhdYRhxW8ZpT5chShU4q4P7oa9gVLsQfLFySmGQdEWFGYmCgxpnHSUcVVp52a25b",
  "key27": "5GyVuwUFNeRmPL8GfpmgAzk7GKhbLiiGGaJaJsnyc1CckZnbpyNvZBsDQ2uEJ5phFDZR9XkDhuroRZevEgSfdQxS",
  "key28": "2ujUYVViTTF1Fw6HyoqnYkU1jRWmdEFU8xgxKJJuxb2aWWrtPyx525Q1s1kmx2cKsKyFwXa2TK444onJhw2UqsGK",
  "key29": "3BTsyiuNyM7doSxRB5k9sgXduuETje4W9mWSSfha3pyHxFYA7SthV6SEDvwoSpXjCypnukuBdXFkGzPp7KMULLA3",
  "key30": "8D9Cf5cRiLk5hhSCZ2HjSxNTUsMmwyn5scX3pQaffSG5SdQPF5gX1QG33ePrPPgzNLjz7cYnzMzNSVnEhiQqvqj",
  "key31": "Ya4gVGFvxLPQjv1A46UPnPY8HEXoFrQjsj9j7tiQE1CGSf4brwEw9faFr63go171jxhfbuTRcGMfeLSL2EoVmL6",
  "key32": "5S8YoXAg4iN2SbeYRdDi9yadHZbtdK8E7Tr5Ym9CnmRgiydnzLgeqydXVo1zcZRHF9vvc4uiwBK9mC6ENy9GGbSs",
  "key33": "2PAXnEjC8nRvjRtrfB4ueTvAGVZ5CvLqK1CmMmYBE2VkqQN4DPNgaUiLdqSwQQ9vocgSMJqfepxFkFMqDb33Bsdm",
  "key34": "2Lzo2tCUHeexihnhYfQP9M1CjWouNE4zdi7Z9HfeeSKFGp3g2VDVtckP2pWqoZUYBfW7xViHw1VxHjdo4nDAZgZd",
  "key35": "4kHE3TD9Cb3zk2j1gfV2KCiEyVVXRV3Meb1AR6i1UreGthTFsYYdKYMJFm8jJpbeGi9FpmMkXUZecxEWtzsRTbzz",
  "key36": "67EPV3DZgUSDfrbzuTP5Mi5PPcRnmeMNyxyY9ujeYGNrx7NhfvoTGGgtUZuD6BJCCVf91qgksEBpZVu9qxSjYQNJ",
  "key37": "56vYcbrdYaVE2T82BcrFiWDGMmrp8z8UCZM5zpF1Z6UgxCnSKw7NYjvPRWo5RFXFu2Kb9M4R7FpMZthc7CEh6Frs",
  "key38": "5BLgVscBSqMjZpXdgfWXRCkdCtKapewbayzrnTrufWHCKzC1wQNhz4GDFu4ZbtKtjWoF7F1vZLW7eaKyQqPDYBfv",
  "key39": "5DbxJ6XTatWfSHu9evpEQjBMtzgqpS3mdBYvUMwX8xAW7CLYagfxvV2i49Wv6kxeZocsNggN8neWoCHrzEnZdKnb",
  "key40": "2K3cNQds5iGZMaZ82jqj2PfN9aRFgPUGGZpft1AzWr9AMmeHET7yjYk47idnnQDjhgpiycYG8MgB1FaD2PdntWcn",
  "key41": "2DcT6Pkd8b7R1jqDVfoLUNWMQdQF1X2xEP2htzuufr5HCxUjHR3hDrUtxTZinC71bXgVk8KuXZA6VTCvPzC92uYs",
  "key42": "57XHnMAkLsmdsW5R3TGc664gkGycydRwntshjiykfbiCkXSWvzUPBp6oeYvp1AGeAnvsdFBsXecvhcqbCJmw5h1",
  "key43": "5AepSCgKKfgrR3ouSNRbt2AxXfpXR8kU3cwMoSMfMQ5BxacJgPu2QWnikchHxzqeQbMjYV6jhHxFNczTsxZyA2SS",
  "key44": "24McL4W1Bjb4TxZHyM2xuWj1Gk7epXRZa12YXHXRSLBnmokXjCocjf9VwRZEuvV4VpCdH7Hay3QjHq5zBN2HmCCQ",
  "key45": "4TMbs3T8Xom8kb5seYa262QMkDwGRL35dEC7R8JrN48QY1AYAP3v6NdbafqcL4TofH57DQ9G2frQXNAqLSGoDqMv"
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
