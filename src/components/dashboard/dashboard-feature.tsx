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
    "2XmnA3kdxnL2X9mvPxQERbSu1KzgEpKWfjM3EXeoxs6RtAsn3LtLXtCKbYnFKo9FUzaeHPkcKSuCJWZVRF9KVqzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H6eqk1v3NM4HjEEZxAWM5ihCLDhCHjx3Yw6Aa5yRFG9tqUDDRpHy9jp2W4ou5YN3xHQy9y4tFQ3GeLG6YJu1tzb",
  "key1": "y2sz16uDN224YihJ2S9Sk4mNJbhugvD4vXaLB7ygixPagsSXMBXyfVwb55h4hxAjM145hUgNmhJ8FwemM6dRDwY",
  "key2": "54u4GDTY7NXHH8ZHF8T2AfhF6CPUnmuCoaYB8VGbeqhvu6uFCoVDCMrJgZioeAqTHJ1iXqcWNAMkBzMiUEinss1",
  "key3": "5yrwZcScG4onsa9T59wVsv6QBKB5JdeinSMxFhMmpmoqVGUqXZXjvcz9AhdyStq3rGym7uXHmhW14DYGuEuoqEUS",
  "key4": "45awpXmL3pFRZoU7dsjxVdW43bdMQVcJX6QZNRc4ijyu3NFHcKihh6JT9Fm63h5yFRjj1XJU5ENW4fopA3sN7Luq",
  "key5": "CwhoVGSXfzSozYbRrp76KhCJY3Wg7GGL6vRYaaJzJ5rVhbTQt3nupXBcLcnUiLVCzcYtxEkNMFwA3UdgnfE97V2",
  "key6": "51dtKEDrxYmdCwWRkf25hprQAdoPRFYGvE5y1G4ZBxAYZNGcPg4QEncJfyxW4RJqSeu1sX7BQR2sqzFzhSQ71sP5",
  "key7": "5jK6k1cKDF2ZdNyp2YWZBKr6Ez4izsFLT6ZB923gCVPx2vUS6ooB5UgLyVbMDb8XyCgb9kCAkhebDBuGQPbqdRSV",
  "key8": "3gkyH3sJtEyQW2X1RWHc8umb8NFLt6PjGaea2GYxraDho9yb4fP1A8Y7LzFWLW8y2RMQqo8s1h6Taq6y8z8itsVj",
  "key9": "2MN88sDDhTZVzAFobaGhY5QvYL3GvmzSSPTMfVTrQo6mq29XHNfjdcf4VHtUv8b1YH6nqJn3hU32jkRxDrLj16m8",
  "key10": "4FKNjBPrBtLpamFHu4utLAtrdkEpLytiZr9iXgM9UzZtoVHYNvT1BERSUAkALF2pQgMsDJEXKdutQJ9xUPHpDfyK",
  "key11": "2LiKXZK3qxfT6BmbgGb58VpPRZwhveSiwtFNR9DQtJF1FwFt88iMFZdWjAcYx5aaCAMo3fbbmPuHWrLzjUxZppUa",
  "key12": "2nbhQ6od14njQmWaMnVF9Zd982PE41qTZCZSMXanRdGPusYvoj7mWAnfkDar5A9yY3YQGswEFZnL8sFArrTTaQof",
  "key13": "2rvx3SsjM2tuSVroeB9SXxuPXnPvwbKvuv1kjM33sE6ayLDJindLqgbvemNwKWeZS9fdiiCR3g4Aw7JChzGpmMJs",
  "key14": "vddAF6wkn65g8bJ1GhuFHvdm8ZGniHmVk7xH28YRk6mQUMLTXynCe9wB1Wv1TszptZqCnPDSRWGe4SH56PyxATo",
  "key15": "k8xWi574eqSRwFsLg7WgKp7MDq5wTpKC4TkGxWN54sMHLSXfJ4aE5xYXV3zYRZksMgYwvJvb1Dibrx3GVrY2byo",
  "key16": "2LAu5KEgPnnfJAuhHLctWNLnKVm53sfi3f1roghWBXduMpr1FJJmHgWVsGBpxvn7ZpKh3cQwGt9sMrn7Y31HCLYJ",
  "key17": "57fs9R29eYS26uR8DRMDHrNtqzGyPd68dDtVMEZyKkDoH7K5RHFLiwM5ANaQpdVgCqJDyhcpaN9zoSETmNLo4ECz",
  "key18": "5uEAjK9hAA5f5MgnrkiPQS1Ajge2U6xPUjS7FND27EnRmrb9zqnPZoeaBW2WHv7rS4aTsh7yUsdHa1aTT9rTFUEo",
  "key19": "nScY9BDeo3nb5LSw4Wo3EX4uNo5of8VuB5nBAGrpJuxfA1dFgBpExFuXPjtCfvjFvLUar2eXgrxgWeQBFHJtHLF",
  "key20": "2WmPwBwJXVUoWxFNkHSszQ4u58o7ydm6BAe816BVvUMziXSWkJWbBcdwaLXVUc4416MZhWvaJh4ZgLPqMSjxmhy1",
  "key21": "25hJFVZ4YivrumgdZaaFx3NmR1T6tndwR6LwcZo9afZUxT1SeQkbZJy28BM6PnsDby2W4Z6R74UdHSkmW44BJqvN",
  "key22": "3D7QMACzYccaYgwXryY41FasHDSgwUaT4PGhCinXfBH8zci16AepkXJ9wTyyYuvzbZzo6DFNUGswBC7p7qzUYpL5",
  "key23": "5q1Hw3NdXdbWCpRnaN2RZwCfRwbSr36AcBDEdMUM3yqQnavr7VJyJaNoeEc3qFJqZkSCGoiMuz8KzUaZ6TZwTEi1",
  "key24": "P9DjHfE1HTEDX548m4dS8okqBXd6XR83nG4XYBRg621TH6fKHaiT2e7CUP9vfMHDC7WeAa22BdxfoLUcaHAhNoc",
  "key25": "2Sgp49j77gNivJwP7AZid5akgShofjgRMY8siPf9HskTbpkbmfW3rXWXpfEXXRQUB97ui9wqcHaYmKTVzE1xCXwj",
  "key26": "2P2ZyLcDKqdkdNbazk9LTBwcsDNscoxBBv59VaKuE1GGkhWDs5i2LiGarFFc5p5Vau1R3XahaC9MQhqDtQGk43Wd",
  "key27": "gFwgf5xUSdW5TVeDCfaPrSWDYwaE4YhJdAVVnZJpebQHYiF5upYr8U12yV97iEoP1ALW3RKB89BzgSjaKcFB5fw",
  "key28": "zzMVunuC6G92gVggN3t6L1wKjJQSTNy1FSf4vGZZpWYnKgffq3Fq7QCNdrzMJmHc3bcWTK3eofERR9YJBKA9YTm",
  "key29": "3AafjGzLiBZMSRpKZwdQA2UroF7uwkFJnKhSV6rSAFfcbFYaor957csduhRdaM5jrm7WcVAmqNbVTNChgyJ2DUg7",
  "key30": "4aJFKzTfRELAHuacdp2sdcnrUCXeg9ZX55tqM2PXUiaMe7Bdb2TUFMNub7ctedoSbDvNdbrU4WPBGHSqafFSr75f",
  "key31": "2zrytjgZ9UkP2jvJz1iLYnzwRjthwJohyP5Dg3G2d7zUERNeZogoTesrrT9WVdAPUdkVDUrX6CCYdmJbZKfGXXxe",
  "key32": "JPxUrh7CXK7wiEiGyPX6959p1exCCKq78rA8xY3XHHhY9RtaxPVFafkx9zLzezoNRVUfKrS3ugcmZBmZMvTciF1",
  "key33": "YAqeB6CKUhY7w1bDM8ydsi5XcDLtWmkYKJEPAWm3BsvLhnAE83s6tE8y9NisHSYxB8B7eMSpMhkQNEGfpjfEDEe",
  "key34": "63pWLoXANaQiGAVes6M7Q5aht16bAi68BTtzBCnxWeamSWVJoFqEZ9vpht6B3EtjtxjQw4VrgqrE9fFzf396HCdu",
  "key35": "5YuT9vYP3HzJKFqLScLB7U2bWiAP1qxqvLhHugxbRbw7jNJbuyoeXcabyCe282c96KitxSyLoCAuNLCVx87waPEA",
  "key36": "4GASpcT6sc7H5R6Ym7J6BcKxcheq9eMgUYoV6ifoh9xaJpwZhDc1wqSPxSmC1j51PwWr8ZVhLcA19F1yMZ94WamF",
  "key37": "5KxnZVekCxjFSvU95sa3m17wYRaNrV5ch4Q3DqxVTb6RUrcLumWbBkQvXXGeB5PAHWGe4LGPkZUF1rPZYQQ6FykY",
  "key38": "44KtGLU92wJD9YRD1eCKWbDfXi5dxvoVP4Tb6C1ziJtMDAc7ZbfXEa5NcKhWFdq2AThCiaUCoVjJTFLgswmybhku",
  "key39": "359TZHeGvUW27tavpQio6kSPKLQPszfXcPp2UaDxuqEjVNMcekT9b6udsBr47NfzRSrjaTHbLTVHS5qGQaBLfPrU",
  "key40": "3suMUM9ocbLhR3ZP6Py7LynryxxLRS7mnUaqLPJWoTc92ZRPjNkiUGSLGHLiuD2Q9zfLgwfyGjLTpig1cUsgXQ2a",
  "key41": "3RZPBrVGYugdwL6HG1rPTafeWcvsiEWvR1VtbNjaoLmixUqaFiyRwNDreMUMda9Pii83qRPmTUf6wTAfuDGB3wjc"
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
