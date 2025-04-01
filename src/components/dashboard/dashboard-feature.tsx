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
    "5fhjAJKTUmfpGKC3B6yrQf1qZL3cPEQr1kzCwisPZJz9rdPDto6bRuvJSWv3RbuMAHCx4HMp5HKkjvCQk2df7bQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EEWE9bXqresnFrdkSMENYKv1eXRtJ88XZsw7QxidfhWmc8pJkzJm3XXuN5n8z8sP4zAmQyt69Pw1Wznqwn71wY5",
  "key1": "2sRrjuD8X7EmhfyEbAzdDS9M4CrzLLkgdb44BbepuveopwqZWSnRDBNSM2SdZFjhz1qWT7PB7W22D37eHk6vvm1G",
  "key2": "UqPnjYTz2HHzGJw1ypq86crNDML1zSbuLTwjEQCTovAPJFmThFbUKMkaYraqv8X6fqShem6xcWpaQSWYt8cyXBP",
  "key3": "5RmBASfDZcWmQoU6NfZNHVSrH3Lkoq9NSWQ1FW1f82T1nsveW9pPzpbQUhAoY7zPypCioNJGoLanABGjfV29Nbep",
  "key4": "2yBKKyyRgF7FE5H4LK95yRou8yHLxz7CZCeZQYPwaoMTGiZZTJMDqrTBp7hHkibeD5pA8tnHhxWa4wmdQcnKAiUZ",
  "key5": "3vQz5N6PDvcaAM28vvMtaKgPnxqMZtH618iZro9aKCf5GRE4p7rxnJr6dEdbrJZAbMSwgZnLHNHGxRupadfNyebN",
  "key6": "2wCXUDDcqBr7waw4FhgFMR4CZzZQawN1ZUC3hcSrWDM8NQt889tbCJyBSwE4Bh3e5rvscGYktTAP5VNfEP1AFgfH",
  "key7": "3cBfeAG3tpYFgrAjuJ8esG1tStJWaFmz52CiCKQzNjXtvLdW31kBmMxLbjgNDp2VNCDHrzRWF7ywpKAMR4nn9zxX",
  "key8": "5dmSf3FsDRjY5ADQN6wp9iYqjHXAytcMCBSfRed5Dv6swjfQ7m2ru8zymp8NS12V1UKkq2VQ9nVM2FTh49N8TZH4",
  "key9": "5uFeXLKaNLBhRd76ZkNVLEQcMTps9fA8RmSaDwqgvoJeLczodzJZbpDQQSJVuC3G1ddDtFvfob53vftMAazmBAWE",
  "key10": "3yT89Asr1P4F63vDmfWEDAsNY9eNsWmfifxdXiJnJ8An7jr4JcTxrbAkPGa6DfcVJv78rnT3PW9YY6f24ou8ruwn",
  "key11": "3ddgeBMmNzryCreQE4j95MSjfpDJyTiQSbpGeP9f8yZ3qVNKKExQJKZWSUmJpx9DjXShZbQMxsktVg5EgP9osbPV",
  "key12": "2GHfTWWWXf4cZTGFDH8hWVZGszHGLQusC7osgLC6f35WmJvSftVV3CYqaMtJZ2Kb62JA1qy1ZoUx3M63h5YxzA9J",
  "key13": "5UoD2oXAjn75wFL8MHS5mJ83wDS7FFtT1zqWnaEYFqXF5tXmy1qWjZ7FvbHrYLwftoWXTRm77qVcLUL5NGoUVjdD",
  "key14": "yPSBKKLUJSKD4tHKXq64nByXuWt4r2rXezZB2wzV6Xz6QB4kUuwWJ9qWfdGX1612Sgvn89Vr96EHaHU26gxCZUi",
  "key15": "5TjyQUFjTRfXsyXXueTxEV9Sq16tir1offfxJM5jqpDaSnS6zpuKUvwPdDaK25c2HdgvyEgNwKvywbBADr7k5vfu",
  "key16": "kqt6mKH87XUMXJXk11Q3CRhxtTHaVR6s7F1SuyMj2JAR3JHQtKq1JMC5ygHr4EsFxZTN9ZUXcwWSTPeDQuveaK9",
  "key17": "3CZw4iBbbJ1XSSgyuTGtDYJnrVEaEwXoYQJoTXq9z96nuMRMG9QYPVuU5KcpdXfAE6ayP4r68McLgQW1oJLk5aV1",
  "key18": "5UzWvihnZPXTeFXj5mmkTnvsjPxmf5dLzmAQqGbG1UzGVAY7b1QTx9vaZjHS1ZKPGmjfQa2dUnYjHYB7zjQAHr2z",
  "key19": "2UaJeoDsxdprPi9WKKSSXtXUcV9cVN2RoRB7ne72Rm6FuiXPCx2ejK2TJBMPA1ksnZYGm6zFvXJVun8XvWJvmF94",
  "key20": "36gzPYo5UYV64MrtGw16iqpdjvK5rVUo8aK3hGdhrwqHhSLcsuej4JUWrNf3KQh7oVwc7yZhS2qnFdqpaM8uoF16",
  "key21": "2bmT3Ue6NbY7hCzvP5gfMgvPHcBQ1bUJ1btgZ7mSWSMtKKq2ptadwc9MV3NakL8goJfkado65yWdepa7nXHRaHWG",
  "key22": "4TabW7XQHx9bf2uHJGorYQkLxJfr1S6VDRUu93JdyTc7jGdMfEDgTaVHaFDJqorgpcCqAf5SiQmMMFZHsQFspUML",
  "key23": "5TMhfPTHpP8xeG1zAuWcRi7isRzvFQezxZT4C9nK61zFoSfeoNQTVL8mDmCK5mJJPbtWASXWKby7vX7AZ1V3qNmC",
  "key24": "5wT3NQaQSoWsmW1NpHHjskPfdZdqnBp9pNNgUKFzgwsLHhiooDS8qC3j7gzNe5sPY9jAQ1zWbPPKdd8yqDJTVJRT",
  "key25": "2okxBsXyyr69B27SGHrtmMyqdzx7vGKdBkpg2dUtU1sZioMPR13LuwRZ8znHra53sWdWgyAMKmC57MP8FsYKrcpR",
  "key26": "2DYwPnAwLsL4gqUnXJQdqDPEt5UrHdP2httjo1RmpxDbQhqYQEK2rkLhu1h58TpkXfBd9YqWNELrgYk1zkzPbDpF",
  "key27": "5FaCAsLKzsKwzxDQnt44joN1wUzU5Sxh3FKHToHPgd2jJiBgXK3iJA1nST8rhN7B5Ggs2uoB8ed3HdJePaGy9vf3",
  "key28": "2MTmfkwUhhrDfL7q9mWUq93bv1tZsRR3QDUexHw1tsiy2bg5AX6WXEMkVKxyQ9fdY5dLD3jQsnp4ogArEramEECY",
  "key29": "Dr55nY7j3DhVGrSER33gQ7MYsT7Zvv7VsSUPS3AeAuygvb2r4fmYdAkGppS3oMgB2oVJceWFZJxjEyP9Sk3sinx",
  "key30": "3LcuQez6ogtwaSc93PJF7bmhdptcciQVgU3HL2PN98RRc2Dns3wdz2kUd3GuUP7aN1DzH4dHrz9aEoLSvDw38rfp",
  "key31": "mPkjJCD85qK2kH92w7c6XDrPQFwandeUmV16uLbCULuCZ4u6Kxg3ysDHi8d6jhfPuoJBRZpJVr2CFPEKNpkqnqu",
  "key32": "2aU5yFSioqCxQSYtH1eQNs9GtmCEFQvC8jroSbMwkXfqE7AgKo8Zsed72XMi86oWgC2yLUUDGrLeeEjatexKsDFk",
  "key33": "32tz7RXoHQSzrzeHLkdyHoJe6vJ7zubMPwMU6BmESTfFDocCgbv3CBx5o7WjCmnfirDDXmNjtJGudBEENrKm22Qm",
  "key34": "4Ts9LuF4bphsnhWRy4KKeoSP4QM3UtsczzeFbLTV9BQiU2MX8W6oq3yTgBesLDdVkPCgJCoaa5Gqwu2oDhfoNGJH",
  "key35": "4znTUun43eCobbsnpHErVzAipZh8tZrJftfJqNhkzxPLSJCYSARN2zs3Zw7oM8zXAPf1qgmYvB6ExoLo2DoygudH",
  "key36": "3AyvUaeCHRtWHJ7dsYKJMKfEWwSdPAkwyPQBcT3tkWogbrpWV8MuXjfbHDkP1aoYM1t9xLC1dj6ApUmudXHkPgeF",
  "key37": "3spobSPuNPZ5cXLNoWGdVQkYQt1GicwpT6m3b7n3NCt1b14YgWAf6uEmfWMAUMAik1knbiHs4GAJT75j3UtzZ6Nz",
  "key38": "iJdYm6AZfYA3cKGjRxHspo3ynk21KwD5QG9bV6EJ3GS65xW6XSq2uM6aAZvY2HXiEhFC8QfunSBWmccCgLVYwB6",
  "key39": "52yzmRgy1qX8D11XYUKHSzX8QJ3wsctq36NGuAM4KRUunMGzryezxwFGDdgJvS3yiLPJYSej66m8LhgrQCn7Po87",
  "key40": "4HWirVxbQDzMU4zNTEqTbmLf8Zc1VzXw1TccUFUeMYRzwF26JictSHmde8rMLHyMGUWSqvDosBiosfsn21MnugwY",
  "key41": "46tGi472dRrsfCFs4Seyh91uu3fZ1FnbTTwvhFCHyVdZmDCkCk5VW6cuDwuuq6LXpLpfQGAUS7L9WgFEdxbxPhxS",
  "key42": "6bgo8SwuBwq2KvH6GjhdSGAA5fuBoJxgGUPUifXRTCmkVQwobq4jfvdda6S44YmGfLRGzBxzLabYwzT59BhdGEA"
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
