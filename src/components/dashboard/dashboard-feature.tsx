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
    "4WuPjKyhda5EKcedd91j8gDMuYzQVb6WWL8hnXwqq4uH5US8xxfq5WWTMCuq7srNzG83F5kMYLGFhHEDho6BAPqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dr2J5iRG8Cx1kbc179bxibFb4E1whmwEafwsuACNj6oMvbMgrH9ygQiADBoVzxrBtvK4pDeDJaqhn5ZDGc3Xyf6",
  "key1": "ZhJN8RHFToaCmF6V5EBctSyoBdj4YzY4GAXXJ35h8b8sMkdkq4wTthUKqun3pPCrG4FYGK1b6Hj8nhZGAyqdBW6",
  "key2": "23rQk86pSJwiNUc27awKqWqEXodWJjSRwssu8UyjGS3vHcM9LAvDKUScxPc85cSQpzLWKKZBqT1fqwHnG3wANJtc",
  "key3": "2ESatgQxFWteWTr5LuWhckbZymhsxXrPHbwcwciDRFtwLFsXrRkU8Ybm5BZCwJzk3LoHbYJYzy2fmiJyL9G9pPwu",
  "key4": "35iHBDEpXkF43kPrmVCnZ2ygDtvmyTftaLdsg8DAc7qn5AyKLmFW7cPaCHGjqm3hmLjgRLETBTSrhqaWSHWevTnp",
  "key5": "3fnBKi4fwN5wUPVfJP9JoA4gefZNHKA2pWyC3VhgSXs1Sv115hWVYjLEA4F2rmpUCoPur8kppd3iPn9qADtM7rbq",
  "key6": "3Eiu96Jqv3emoBtSzDnWvpZHnA1UsWCPP6ii9jNgK6HTcdhs4dcePkcGHaqaUne3sLdmqrFd9eBZSuJ6Gh3gbjj2",
  "key7": "54eHG3LawTX1gjvh9pQp23kie9FyRcsQUU8Swm3kemFUCLMfrqotdNpiQEPC1pqZ38FJ1kutahGFH8zj2bdXtSFa",
  "key8": "2Zvzof5uS6KF5CPKYXiDcCufwAn3Lh7Xpab4GZhDodAULZ4tLBs44LjEe2vs7tMXsntnj1xP3PEQuYFRrw7YdoPh",
  "key9": "5UjK4VhHosbSAfnjwUivuLtXUBqggUFMzrVf1pymc8zUyrNAnKodDLbk9KZxS8Yxjv2JG9apSqNRsv7oLgTtoWcU",
  "key10": "4PBDqofnUw9sTTJegZndwZ5HWN8BZ4MghNmpYCqKrPZhjxPQgYUmwLq1iJKazR1my8uUiNHLqdiPN7cCGjzrSwCu",
  "key11": "2QFEzonu3a7Xq6gpYW1CsvuyNJaJeUMb75Ryo1cMMZ588MvLF9ak2doZpzueupeFkibgDSzmW6D9e1PeogcUhkWr",
  "key12": "4xMSHbf5ZWL8NshciiYCk8Jj9TWMo5uqHT6XNm6ESbiHudkEWArgtoXEE8v2LEWTta7P7GTZG4KCbp6B7FW2H364",
  "key13": "66qoHcz9bUy6wDcyzuU3h1VvryM6P48DPqdd1QTUNJqJuiQquDR9XXxncaouwXrtogr8H4ZcR2ykRVK3dKzxbGDH",
  "key14": "5zVWEDco7juRfXbPxFeHgin7Je5SypJUixR7rj6y13RM444p8Y9zKiyjFUt784DGayumQefs4bhruo4226yWwnwj",
  "key15": "NFKN4StDRCyexajaFo8JMXVc7b3oSfwPBJG9m5PEyc3x2iJwVR5Z3P6BFV5TrthYqQecvw3w4h7uHn6yHRG12rb",
  "key16": "LbDh5gyL6PaKV8jZzK4p1hsp32t8A6AaAw3Jzk2EKmnvhYeXv2RHXEYCo8nKd8U6dP2SyJojwiQSXW7LAgb4Bmv",
  "key17": "4uGywPMaEpCy1ja1ZwxQWUuKiRmP6we2BaV2RRGECzDzgCBqkp1Yqi8AYhSD6rmRC9MU3Cs36LASGW3fojnNxuXt",
  "key18": "MEBGd5SQE46CtnpTWRvCAv5sDrz89oxX25sK4sa2s1xBdLdNbarSSo5T6PGZRqgcaRkrFJLd3VDZh72684BioDa",
  "key19": "2EGtYKWtEV2dv8djxCAMiYtKsQcfP2hH9pUETQNGCX4nQjcTEY9cnm3ew8RLYN3jwHvnX3ZqJ9s2rJxJnnuR7c3g",
  "key20": "3MzZV4YrJrG6r68jV6dH8ByUdbNmthbMAbiVwz4VY2egBdw7uPMTVfurgkrFZRQLNebFMgd95WttYpvb1T3G5KxT",
  "key21": "67mLRBmoW8BgsYJgdWMDHuqdZPWJKZabS2bktMZ6mFmmuv4HoNj8YGHHaDyE8nVxDkoZAQpUHqT9RjY4C42F841",
  "key22": "2RMe11ekYfprzSv4cL1Pwb7AzmajfJ9BEWwzz8qkYsjvVYBDFbQQaMrhA7bv3K7ZQ9WCdwhEzFoDCwBBFW3KpJbv",
  "key23": "59gQ7DubZQHKT6BA9R4MFjB9t6uebe8xAMsnua9LAS38BaCnLcYecaDbUqbKwHAsuNwwrqDdtfJq4QrjuHrR6sg3",
  "key24": "TYvmsxZVgN8BdLAZ12W6koRPJ2kdudsP1jN2PJstHVQW4yqqQ7fRKq25Nbq9CNF94AFfQkhUJJCPax9tB4nMANi",
  "key25": "21U7unD8BPVpTba7fZXqE4zPUrkUtNv32E2FdQvXiSj9VJzdGzwzyafk6pwZj1cjt4iTGsYmVhLdiH6EbM4b1m2L",
  "key26": "5H5z9vVBW2uESLutdqbMgUcetkP52961LaKi38VayE4JHxL2mSnNHPJGp5UZV7moRzb9YzTp19jMEG6g43L9wGo6",
  "key27": "3kemWdxeDU8FWXWczFp1rc7hJsN67kpqdZqRBgwonzZWpAyZRCd68SwfZ4FBHZbVWnLo3o4ZW1eUGeVKvg4t3jbX",
  "key28": "o84GnmhjWXKSncEb7h8ZHmpQMbb1PgTYCHhdRn5fr3zNeCbmS9Ed1Ge2DqkHNHKGhLMRK2r2L2Ke4yqZyHyQCGG",
  "key29": "46Zp1BoTtk1WsV23oYaghEXbuUraC5rrojViLyUq5PJKcnQfcsknNfVTW3JJkiz1axkSzwjUjpstTi9BLWR6MffC",
  "key30": "5gbFhW4CgyPcaX8u3t8iDAp5gAhYtztSdSsBpuLQEC1VY2Gg7eoeWZZWLw35jPyrRmhUzGzcxdChd82rRqhiBshN",
  "key31": "2YQxJXfV4WgJXFBXvZWQ4GHQmeSKF1H3FAnwJQA8r7SCZNFuKuU5dMRr3M4ac9eMTyWS5PybsjeJKCbGSuf653hH",
  "key32": "313pM51Ly7BMjF777Mdo6dVmknxVBWcSYdFLd7i7Tu3h2NcvLZyXhGSsXzc8tRkgaJsyS5ymCST7Dr7pRKqhMoNt",
  "key33": "2RDHQF6KLSaat7HRDYZK4cJrtvxEYmVwUQ2E9JYGCBa4qZkAM2xYboyXtwhnnScK7dqJigpbydrMZsPJp9XZNAsB",
  "key34": "3rT9rLVdKabACrqHGHwgko8rH1bUNmKaXcyE3F7eLUZrDPYhKvZzDpkkRUGm4iLAVuBLSRE6zw8wkdkKGtDPmoos",
  "key35": "612FfvehoVkwz8qtXVntAF7btFjRUf3uT5S9QR8R6MLKPWtAkmDMNsvfRyVY2DR5ToqcxF8XiQUnvBB2cyQpybdE",
  "key36": "mNSN9jFBq7dduE6ZUUt8ru3pXy4yLKYiQ4mZ7e489XKHTyy7fnEPCr6pcqE5fVHZMv8cidQtMd3HA4whXqthX3h"
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
