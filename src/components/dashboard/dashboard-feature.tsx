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
    "2by43BHw9VjmGtzSKHgmHJ1nNQeAQxodUoYE8AeVbLL6uLVnQqiFbqdj19opEJyZkuHV7qyCLzoHJdrUsHFQNpJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QejXnMoZvgpPCD5o2A4ktLmwiBKS11fgrDpKJXyrs6gJMcqgSKnTfoiY5VhfSFw2eaVupE2qsz5ER36a7feSTiF",
  "key1": "3cRyKFjNcVgVTvZhwWoKhsi3YenM51PyFRHsbPWP12eCZ81nnGfDDNASuLyLPx57eK2fWRBr43SSgQS7DWJ9Dsb9",
  "key2": "5f2cD8PvLiJ6yQJW3HyWkmHB5yPByYbXC2MnKwVYWSSbsBgxyt4CrXtZrGSv61GL9YHECurtuv5Svka3rpnkmKzV",
  "key3": "43ivx73L3wuZo4Ja4qBAmwPcnrb1tdBsJsUPw4RJEnQZrg57ooVaUmpAaqMrfpVGG73kYhzoMUvXxnXtLGGtB5hB",
  "key4": "5Umod2JgAz7zg8Q7ErQRrFHxQ1pNffBZcVfX7qH4feXBXwv3J22Bj2wRur7D6A2qszwxzVv15KFSzndPok1ZUNu3",
  "key5": "4c6WBDmuUNSMmLBBPqpnjswvtRohaEf9DSvX3zgQu2hyJrvRDfWUUP2h1KiwHJa1fQ3D3YMs9rTETStWEbDuGsv2",
  "key6": "5pRrH9PpqcUxGHgK6FztHshKNuzXLv3Jd2oHamLeScJeAU9gLiU6WP3nmWEiTZdzPbvoacVe2RgRZexhzAWYYJiF",
  "key7": "3vD5N7vWdhxYtEnytcg2Cn6LJHDXXVY91RfmupRv2JFUEB8rWwwJChxY87KU74AKPyNL8JXkoc4bfmv365v4ydUL",
  "key8": "5sz92od1CLDygLjUD9GeBW9ZTgXa1nHK5bBrUiTgHkiKyLSscJRuyto6yyJE734EdR4jHqkzgWGtumC31DnzZnEU",
  "key9": "5RShtzrAq29V6wWVMWepj6SYaEudE9jPVq2m7TsVtPmQ9SLU2ZVAEqo5pfP1qpUwpVn27ymfFRwgRgzHcx2ZbFtE",
  "key10": "3mfjsJsGWf95iGnaZbQf4p61rYQqcSh8WkQayG1oA8uyGQ7D34hakbgLgaw3qvFK74qhtQHU5m23XhtQBg3rCuWv",
  "key11": "4meyriLTY8Yqw3uWz9RiUq7JQwiuDBWKCU2C9TjVueBf63zmak3BH3QnkiWxqvsRUbBVB4Hk65Z8j8ajjuqtpkz",
  "key12": "5v3Hnib92jmSAtPyujpKRM7qwSWWiMXMYjm6YMJHsKFjeU7g6s2oowz5qkougv7pkg9S9QydvhGHjJKvkL9CceJt",
  "key13": "2FyWUiQxvrFfnUCRh5Ly3tWCy2nFgZAS2JtC5Bo1FfQ7gZXDVaAc4CvCyJ3mytMkH8jFqeiaPRfCek1zc37N6gLj",
  "key14": "5VGjv8kavP5D2cgaSFnwL1p8xiUUCxR6TchsxZHydpzZKUxJN2VRUzT3idSXWoXDkbrnKyXAiT97ukmX5g26SnRi",
  "key15": "yLpjdMo7QsMMgDfcfV3A4sF1SYNELsu9NpHdwVnmP5Nim651qMHWweze8g3bLdv5GuBvC9syMLZfCGB2XsKLevC",
  "key16": "2MsasqYdkyyGgDiRyaGS9e9x19b5WtEZu4BLvMN2sksKpX1GQzrXEFhgZ3tYZShXtY8CyatJCV48ryr8BtuLo9Bi",
  "key17": "pQNQ8SeyGspDYR81gLh8yCjP2ipTKLFeYXW9eoKiF4xvntMqAVDKnCXyBe72B4wgcjdPVkvoNzJKprsRdQk44Fd",
  "key18": "4Bd1QPvFYcDkJDq3Kf7c1rQrapVRRo4d6DFKPvFqEVFZ7PprL5emQFQK8mFLRnzABbLByF7WKsGRkGrrg5zE2rqC",
  "key19": "5UYzRUNcQ8WK6nCokeq3yPm8ss3pvf98u8HRHv2ietwPv3PvbqPsF3htENYTGEHTxeXkky65SwNnGcBKeFQjuqDQ",
  "key20": "5LcrMf43yr4bujtgpPgy7tKBydZCY7dvnjgeMJPiQACizYWsK4R15xAjqXy9esav6njnJqtJTkCFr1E6vfaPrQQV",
  "key21": "2ec2veZehd8QaVX82YCBVtP6zXiu66L88CHuGkmPp4y7ZBEcBscatSg69mUhSAsNWyfjPq97Ge2SRL9CqcXT6yF2",
  "key22": "4ZwMtvRyxW1Zca5nqBvod6WKeRxygGiHcZmKsbPWM1SKdbjX2F5G6uvi15AiTninDSZcJeJRT6p3hVBoSUYm9xVA",
  "key23": "rxB36mUER89KuPYE4wxnMnPi7WrXYETxrHkZPRo6rNBo3v9fHQvqTvgKDWg1DB6NKg92VVBgW6CvxzQYH5MVqTv",
  "key24": "5FJ7it17T1yYWQb21SudacUZAybqHsPuiPsLRWxYgghdkKBubsJDjXJT8SGjxbfP1Ym8RG4Gg8H4DpDPcRa3oMhX",
  "key25": "5XiNd4LrFJ5YX9BEUcxSntoFNKwdc6qZZ6DUctUkdUc9aRtZnLgPJGA5UWDdiVFRT1yZrJCCapTPkYK7JTuiEurF",
  "key26": "4zmzZ92XqSPRwzWg3kSoNyTz9uxQjodetYZL3ADydXtJ2d2BD6zKCPUwzfXkq38GkM7N42p2fik9R6oWHvxsdoGS",
  "key27": "4fQJwMg2AQUxUuwVABNy2DwjEkkxxpjUYjCvMFmGF211gwHUXmwJkgBGBzRscT6dTcPiVVyC9yp2CTBTyAt6MtWv",
  "key28": "3o6Xr2mJeq9xGBvgxu9BPQjnNDeRVE1sH5LAhnKNDYtYB4mjVP5uiQnazqW7c8vAEDYpzRUV82nL319cTCR7cjc3",
  "key29": "3npwr2M8VAz5645r77QsW25tdyu3SjMTFadeXBTsfxRs3o6kFP4JUNWcDqAKveAHcLi13XnymspQVQdJQ8fz8V97",
  "key30": "Y9X1CEvbqeLUt8PrB6fPSMoSE8LLr5KmpirLt1Mj4zZST2VeFAbjz55TnQLXGvY4KumUTRb6Wby8tLv8r5BhpR3",
  "key31": "5daPcfkX5FmMRE6UrTC2bBt28ojBmC537ffXJRu9rZMDrWC3cA78yLXnCUfqqWXdw5MphnDK92goPrE2kXFacEma",
  "key32": "3Bf5bV8qw9s8BCvCnLXC6EUTscJr7CN5NxYT1QioxDRiJXyjh48d53Up9Sk9GraBaRoFBmDhwjbt9BPhcSttKhz2"
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
