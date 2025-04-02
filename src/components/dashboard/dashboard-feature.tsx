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
    "UFamLHqEfaPLWy9ujJptFs49bA7fLh3b3nGMb1zPJWD147ysFyyqLXdnErkEyCtTg72kncohFtT88GzUJcG6WjD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASmMwp6neQPxPPtoNM1JeZiSZr8kH55q8zBk9yRcX3UfjKhwmhLYwJjWx5UAEFPXDLWuigRvBeoLW52oFtwgKrq",
  "key1": "61ppYJbbx4495narJgkwqrAWg9zet7uERkrVCgfgXMnZwxvcEvLQr7PiCAhE5p9nnsXcw9vmv355Bk54hRT9xmVB",
  "key2": "3KF7kWfHgVgSyCAJezJrPjnkGQyy8bnkB5DY5NQR6d2NByceJED8hUfh2oStyS4Kw4fwxa3Xh2vR8qRVVDXn684a",
  "key3": "4GKZYpyhaB7yNzent1dihF6z5tMDw4fMtow7L5Q6Yuws7gDa7xMqkJc1Hbsv39vd4nnejcKB9bkQgyi8SL7KSa6Z",
  "key4": "3pWN6X5H6DSEBkrEUCPqV7t37m6P2LUVA8QNa7oa7xhdJNFoqJ2ven5hVphyTMpnWrxCXsRiTsndQCMaqK5bfHAf",
  "key5": "4DL4zUUpFupHrhjfdQFBDVXbKc8TdodcNySaqYp1pPCjG4zYg1tkG6kXM8HhwSpBLv7qop2aE7orCxPjUbzBPHF5",
  "key6": "36yPdx5SX42UuUnB4AHao28Kmcp66M2Yfq7oVth2Q5haC18Mn3RtMEaVHA2S9pFiEYkQ3FjjSyWDRW9tkhHuHVh1",
  "key7": "h2ezf8yxoqxj5TRwZYQK2RnZk8VKrmcx8b9XnZkVYbbMiQySMuhbUdoL9qgisezYQGNRd5CWZ9z1TgnvqWqHvRp",
  "key8": "2SUTcQYpTkyLZ7F3ZB8KMCk9CziC2SHjXjhYFnVrH7Wfri9kv6KGuhWwyPKgtkPexEDxC7akxgPKRNGSui2ni4tg",
  "key9": "3zR6CivJ712fXKoXKBr3zaxvb2nkFSvxJdfD8nKvB4nTyYJx3Prj2MTJ3Lf34ovELMB78nk3XYXbiRhUBRRcJjBR",
  "key10": "3SqTwWBidFGxdu47tJNKcCPNgzKze6zRgYBo66C9vGWAVEU3tnx7mjhErxTPsgJiUtExn3m6cgMjmjP6nKp1eb7r",
  "key11": "4SbrH6HTrzfPzayaiWeoSEWFPrXrRQFhqWGNEyNNSR6UhrcnXmqFqmQYASBeKcQCeUNF2LeWQ97nfPWp1vAt6ot2",
  "key12": "2LGaHBNnbYFy66GNkDrADhLpyeKJc5RkmdybKgNXaz9iChRcs4GSYjttB48PR5rsyhSqNiMJP7p4WgMdR6BPiDQn",
  "key13": "5J3EMbCgw2WJ5FjwdkXZQTF2MiBL3cLyXVEpQedBiBcma8JZhofwJhPHoroFjzUfaQBJACCrLL5zNZHYW4cLcWWw",
  "key14": "3SmsgKt1NwDR7sxicocBGFUBEP1iPBym8Uc2yg2nJTY8PDr4mBv6YqJMMTifWy3cBfSoqu8mh13WJ1U1EYdStbdu",
  "key15": "2X5J59jTRi5BB13uBB9kKrymNKdyS8CXVVLXq4L7RZxTX1zMieg4E1bUTzqcK1tWGcD9JGLxiZMMXNytsGP9uSfy",
  "key16": "5nYAJxdYsCS1MFheaRKo3VXzXRA9ode8DhoyTkJjJ2jefD8eNnkGaN9mw5RXYgczvpieaXpeEDw5Fe2mXWKVUB8V",
  "key17": "3teLvR8zL84WiYSBDHXSd1gRpf6iGUPi116XHt8R9mLTtMBuHgxKsanRPmRuCagLBVN61Ws74wfoEJxSJdDPMnX6",
  "key18": "2Lta6x1SvwJLChjF1we2NydJ6xKRGr6v72YPk5ajxjCfQEtwdamSfQh4R8FFjsc6T1sYAyUTBJzr8hJetnMnD6Tt",
  "key19": "5fcEYdfURWNMnXtnDJew9dg9x6RDEtfRzF3iaog2Ut1C2iZEgdHDYFBDZaxeqQu8Qkjom77mR7TJxvnsQ4ErSMhX",
  "key20": "5qToGws7LDVdKSSQ8bWZ6pR9MEWggNUfSYoU5yHosMSJ8pQoGm22erZF1oLsVjNDaibbY1Q3BPY5WZfwZQd1BL7t",
  "key21": "4bH8b7R1bVERGQmxaWq4ymJMVu5fHL3fdjCDM8rbq6yQehTSLvRdVqPKX5fKkbuvseq96EgeaQmncFGWM3qfKaEn",
  "key22": "3YgQKyiUzJS8GYtnF4HQLY8o2PqtZ2Q2v1QwfBMWmrRFxpABd5fhFHZW3uMRQ5DuCHmFsCVpXbGaBJ1iMANrvBaS",
  "key23": "5fpVAXE2JEwGeNtDGNiAMRRh2HqWtsjuHWFFj6wxGWAvYwcgYsnwKL2fnvq1Rq99wRim2V9oYCyZxmQMG4rTAH7q",
  "key24": "3edyKfT6RjJ94JXiXTg6NLme25FLXAgssNG2nEE8bfJ1nivWaZWVCuREykFfXkPU6U86JTa2tZgCC7AdSYE4aciZ",
  "key25": "4FPrkyKXTAiFJYf8rfEJhg7R3DbBtQA3vTbCuFFZJZ2ZCsRCxhdd99CAj3vueVaRuUd8SVMWbHrFxRdJZKNxq1X1",
  "key26": "a8XzWdkYs81CVvSMSRMzbTLXAKLVwW6QnU8rFissfkBstxo5uNDsspfZqersjP8uTCxunfeCtRYHiZFiyULqJUY",
  "key27": "3PS66qBhux7qcNL5PamQkcPgL4p3mrdN8RhA79xkuuPkWVJSK6J1J3cpnrp5dmNJS5gokXwpLsj3VZU7pQV7NyTN",
  "key28": "4B4nwTU4qBD4zbV8Xpgb75pyt4ABYeiVCjiW6ADwZL6N8Q3DNY6cSQ7eBcv4cXZ1kUkWss29gz1pVUBb3qMcpTcf",
  "key29": "hz5Sag7QPDUHMrCYPpUJRAZvyzcDvRc8fEq3D1JRQHeWewA7cUyuy6q5DMz5V2f3wKATuDGtrpXAqmRQ4Jm3WsN"
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
