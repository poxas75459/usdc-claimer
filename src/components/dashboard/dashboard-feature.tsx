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
    "3CTVos2fSARVmRWeB1gAfYU2CrqcjxxE2Xp7uKwtDCt9ERbnTxFtirmHkPQxFcuAh5wfzaDoEv1dbghNxwn6xmj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35aGan2zYFABywFwPYW8nwPgohhYf46CFnMfkbWnrGVUgUF3tyYhWo5i9cnkJt1eDmXPaXegC3dXPocTF6wXrwuq",
  "key1": "543nophpGhajYguxsqAEt72a2AgU4PNExDAqvR7mhKECAzqLojbJhgofjjtmgz16B7aMRTFZdzNkMnDr5LoZMfbv",
  "key2": "4TKZSCwthurz34bDRzNj2dQDzvbXVNy2RYD3UVHP3yyuYJP6gVkaUiqzGYishxnLmECorv8hENKLbQx5EuNTgBPK",
  "key3": "2SbjP68GhBgupr9Ecan7Y7Y6zxmVH8CEPtGCtBkJ2EajegsttGDWx4MTyAt9hWtAsKuxVAn97saRcvnbzt5s9v1P",
  "key4": "5coku4X9vWfwaxmbZKn5RKNdT7V5P6GCBbDoHU8VMXEasph5UGhoGnZtSbDReV62Mz2NZpe8WyQzCfqMV6kFTeV2",
  "key5": "67kHFbmQPwHxiczNXPMGLj6nuEPNRvFzbq12JbTf4UX7tKzzA8e2oeQe9FGJNm3bCsxZq2dnSovQftNZVDVWasKv",
  "key6": "5N8Bq7r85cDqb9e56ReSU3totW9PH1dkR9bKaAATMHrQbwBfzDCrd2Dr1SvHXJTKU1N5hUZsgGxfkGzkSvanUyL",
  "key7": "5DivV6i4DJjTFmW5d3QowSA72LCAWZKDgqmBmdLNSvm2f5CjRFHsd5rPGhBsnBFnX9ScczRvVzZ4oHNWJt2sfGyU",
  "key8": "3tR4uCiDTnoFxvBSkFmENGnrKnhjkBMwbRPsG685f5w8b9pfpT1GNHJucyJ6Yj6FfF51ew5xYecyQUDudMaSS2F8",
  "key9": "4pBBQa9qYjvHw1iPEQ4rXAaPnvoNfzASuRsHu4vjM5zj97XQhv71rKmXRMaKsRHgZUK7W4FF57ri6JPfYM8BkD7x",
  "key10": "3pvcozi5tN8TsD4F8cLTkn2McvXtqMAdpw5jMpi3AcoocaGppdTH1osUasgbbEUQsZ3sdb4VwGhJkb7bnbfe1HvQ",
  "key11": "3K3bXgxSoNXc7vNUBXVrE2x1Z1n7f6AZf8GdDoPTHV2nP5xCMZefq9rhAkMmNR82V6LvdkwhrKEHSYLydr9Z2E2K",
  "key12": "2Vkt3h3g4YhZLmWVYm5u84GSZy1w6HXNHJFfbSaxwRmrJXdyjYuXpFi3VbSeyTwXGLZaQociLd371Xcv7KhdLEnb",
  "key13": "q6MhYbpQWKZaugMnMtDxuQAiDo2wQTn54Cydj65pywx9FzwfhE2HMpsYDy5V58keBgYizgxNd1rcYsXoskqZiJu",
  "key14": "4rpqFN37pSM28gPj7Q7TBNhLghMQVqA3c5i7Tc4ViAuhN8ZiRqgCW99BAVtgAMk3bXJ9U3fM5Uz65UuS4nCR2QMu",
  "key15": "2rNVnHyYJ2RgYHzXay1C4rgH8Zu8LbBg3H9wYF3r46or1QhHFTaZhXTFRSkEBU18ZHr4W7hBhJNNYhSpSXt2saLB",
  "key16": "5miYZ2zjJ9LByJfs6WwqvGMk9S1fAkHcD3PbwxGvi99L5zwKYsu7YavqzRMUA5HrYCbxuwyfR89sMrNsWsFUi2fV",
  "key17": "2AjJPhWvBhwsYqM1MYKvncgZhx5pyhGPhKEM8erd7dyghx6n2Mf75WjnALZgA32ezPWAKBvVouv8Fc78FB6s7Lqs",
  "key18": "3qyUowFfQoMHa1Fv4AShScXLcQsTefGhygkLUzBoJm27Q2AqgGbGL5Zs2QNJPA8UpgcLYVK9CPzUhbsmxZ3WHpQU",
  "key19": "eMN6n3Qm8THJa8LXxjdHVtgPWEXDW5bSTyYX61SMhVRc55N1fjUJUaJDVo7hxnMmxCyFtXnqUJgxkMTCqE5QQYn",
  "key20": "4TbxMTtf7YdLqRgymEQGquXamkDoDDwamGJkcLEQ7L9dKvUHvykH2sdfPz4cTsjbjULPsAeE3DMUhk5nH2868BNw",
  "key21": "4dpJz5uvkXxNEhz7rAYVJWZHx27BsNertR9az1NKvawZ3SbTJn7rK9UDfPvm7VJYMrootmKE8DT5Vsh98Hr4KkYq",
  "key22": "3325y8k5VriUTL8LXhyB6FTU3V7iUN1Dw997HE7C5JXvK66pRg1kbBnNUsoTLMJzcWz3Lxg5nko2ZnyNBhpqSdBC",
  "key23": "86jJdWtgBUJY2eTBa9D9c4L1J41444FKbasxA2T3ASQR8oEgTSnyL7XvsxVnHagZUwEXDjUxWrm8FerSgFTr1Sk",
  "key24": "5Ht6zZFCvSiFDYkpi2id9TeMmyc72N7eByPogqTSME68wkmpaMZChimBUzVG33m7eFK7wEFgjjXqTNT7sQxbDVDk",
  "key25": "5h3aYm1tH1UoHBb3MBsi5xEpeq82HKji7YBy7vgrnp8Y1F7rVo9VLoxx4nqJJNvmPFtSt9c5DHWhgdQZ8JRRQ8EK",
  "key26": "5xovjUH91WRQJTv5FtAnAcJnQ1MQPCkFtB8WmjbmXHu4oQfxBQRDQWVManLetWVo3GyLZHEpDNw7LNhWum1YJ5o1",
  "key27": "5k9iHMJhiK6ZftJEmXqQQYZKTnsebRw5cHQwu5LbVfDDWuctQzh1JcxG7jk8uuHrtxyR1868X38Wk2ypRmLPje28"
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
