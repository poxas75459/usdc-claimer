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
    "hvqwtTN7o1tX7XfkixkVNnBv2bAx5EhbSSUojoe1CS3cduEcEAY1LizDjNeBe2iFBbFwBKhudZYBXbJHLH14XuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236iGktwaCCa7j21iAhGCxdnd3qvqaVJP6K1QJxsbCVFwuwNSnZyertMzUw8ZgUH7EskGcG1CH5nwipxqNYYZg2b",
  "key1": "4YBxkzBibu2CzGP6VKL2X9PKHRAvNfEWRoXt2F2P9aW7t3mC4XcxfDRXuu2erXCL5DhyAw5BvinPTLJvj3UcMeEy",
  "key2": "oH1cGmC4G5gQeYk6c9bfQywwLAUnJRMLWfhxQZZ2ZkNy5MrGiP7KjTEz7C5qFS5xoWWfoSmAZicVrpKsntC2BQX",
  "key3": "2RamY9sEn9xLsiQdCpvHxwaSS13KqBgBeq8bNHFsrrADVTYu8ov4n1uVjBjVzs9eTJ72USMmAFEFZgYDkrvoHVvo",
  "key4": "4VET1dxaoDu6RYUz6n52FNPsZwRX38tKMMf5GpCpFhyDn81JLKZMUMFPxc89Z8LyzHmSgBSF89fdKM8YdA6eY5Ke",
  "key5": "2PZsCFiB57HZDr2Qz5tSBVhc4apPXNvTuxPkkuKQAoUXCm5tDVzR65UxsnZWqVRneSwHYYEF5AJFLtYBHR82Z3cx",
  "key6": "cm3Nv6C6oa6NbfvnjHFUB9Gj7dC8SiMNJgVWrLVLjHVKV3hiGLEiFKPUtj3XmuMxQyuKJopouGjywYN2TMsfNKX",
  "key7": "3hq9fZoV8Hgb8S1Dt1CVjX3ym4XrsXbXuoWD4CYkzypC38GqovPWzDqPotYVhBWHXNqvCoqV7AMwxcCKxvPwxU74",
  "key8": "2WkyPohxdoGCaLWPjWJPNcjMx27sF1hxxfs2vamuSxMJrdqxKNJxpyxwffRVdzuAcQw8FhHxNTtz4ExCZioUCccY",
  "key9": "1MKHwwXauDecuXk9NRjWwWYmnSEBMy12MvaiUVLJgnkZqnAWodmWSa8Lipf5J7FbajBLS2JtTtnJVyKxatcDWUY",
  "key10": "5WjA5VBoVrq261wvYCbkpYrp2CVJUcw76enaQ3Fc1niLZ34oQU24hpDGwYqWH183MPxHtqn1mk7KhYgETGNVs7gA",
  "key11": "4cWzd4yYesrxmwEN4t6ZNCSfjkHSyVoSm4XeZxU4Ud7Dh8RSPqbrKLsNhHRt4nzGMoquWNbkHMUEdXCFHWtET9u",
  "key12": "4WM6pMjnhVsG9X9TYRLPjciJRGbXbZBK9cxprxD4vMgXfHztKWPr4Nqqn2rit8WDUuXrXKbLm1wRpJ7882nefX1N",
  "key13": "HW1qJfa69rjheyvQHhyb6fPs5oNqPNmg61xKV69XyjRZADfE3j26cwiim5b6zykzxivKBskTMbYaQpnf14YsYky",
  "key14": "TMVPrgfd5pKyVE9dUP4H6Noi59tWSbBQU1T8onFEd4DE6Qx8z3SGwdnc8UzCppZ3SjDCNhjB4mGURqzNnxqshDq",
  "key15": "48aqxQR3qXsQmDB9DkwqtoiWPQKyC2aXRt237hzjudtMj9BxF7WXRjJawbse4NsTcupmjYfMpgkDS4V7bEFcY16D",
  "key16": "3sdawwQUREzKPodvmUyLwvWoCDjErcRwDjQ5LKrKKA2eQfzKccZ8Jk4xu46Hb5upyaqeWt9xdKzWMk3xM5RUi2Z1",
  "key17": "4NJcsWtE6rt7g8ecpF6YnLzApGSajjzioczuzrMSMDTx49wmBhxhtipGX62wcQ9SLMnWhfCHcQ31m1KLn7RYzPux",
  "key18": "QXs3Pb9uisBetukA7fgWmiZnZctxDto3ty4Kx2y58kM4bsdK6AkaY45m5GArQGY3Vrh1mwBvrkQipxWNJ5qtMEe",
  "key19": "21YjcGtHwvMaC5ozrvyYvq6RtjBxVupvRyotNg9ewCRJqauRCkXc3s8FUD8JjTn53c2PGFKpzwcJec75drfdPWZj",
  "key20": "3APi3B4afcaR7WSkMpmsHELCSF7swKZuR4npbUmgvDbGU6Jx5MHXbS5DEhTFCiES7svHXVg8FszxzReoWNKdbsmH",
  "key21": "iA1afDqdvZ9hMReQq7ia7eTXC3YvnXhsnMqVE6wWacr26HpPSPFbXr5CEFJwNkCcVfJBBvv53ijyVXZJu95vwRg",
  "key22": "4HNK9oZFVjton2uPXU8RJfTz6d9kFvCvCmHN4jiCZfo2pX1TjwsiERFkxHirV9JW178PyD6fw8w4qxSMxyCBAPbt",
  "key23": "4C5Bcq2QAxEWSnPLgj2yyJG7KUSXLW45ddxnHYtHJUv8UW2MmUpDXXDVCAf2Cz8RM2UdVUWkxWs3yoKsPGm6xRNF",
  "key24": "3nn7FPoysAEkcJwCGqsb8FUAoNZvXNMX1CHrQkSfxSn7UkBdbjF4BNsnfgL5LYGv9kiFRzCkmLZ2G8YZ4oiTFU4J",
  "key25": "4FJGGYJfdJZSLD6eYDn6Ts7U83Fr8PhNqhCAdagg8bnGH3v6BTiKAB7UrbykUM4EcTZxuGhkqfcB2FRL5NBrKurd",
  "key26": "2Z6J93RyxibXfU271ASFoSXdGStHQz2NxdSKUaYr5Dcjz2nKhboeN2rNPkfakenKVcegNFF1ikQpPx1ghUqtrEL",
  "key27": "kGUm5usm4duyvZvTGQjipNDCA9kB2KyLpRcCxXrn3mDnAW5wyCzAVoa4bER47QendARHpFmWBYhN7YNqcNZbiZq",
  "key28": "2huLCANbtebDC4tAFcs429DT6gFJgzkSG7Fe5SQ2JeKvYJcHCscaoLSicVAWg1tNVC3NbbJPnmoFgdSxcTEXXUf",
  "key29": "nGko1HwnuncB6Z4gBTZzUuaVkygN1N9wPuggkXRqCMyt63duCrNWCxWV9Rb3Bgr7rU9uFUPSZACf8LowsqyKU1M",
  "key30": "4Mmb2anhZ9KzToNjG8SM5mHDGFy7FkyczDjJx6KQwm3ge8S3kePUi7Z3CNe6RJBrg7sSys8r2XQAhz2wZnQL5ZYH",
  "key31": "22eivSDXMJ89KT9UEyKVXw41GLYu46Gj68xs7ATGWBRoRyKDkzHDoZoYgM3raCPCGMQeGfVrDiwjGuwJVdGoiupj",
  "key32": "4tsJbAki8fZdMJELCbzymy6gko8deCdzYS7WSDRMjoGtvGy6RNCo7r4BbjKsDaqATMKmaARJqLxnUjeku5CtqzkH",
  "key33": "4onfSZiN1noNc8zvRBPfpjrKLoMx4gDCuZqz7Ne2wKKcq4LC28jJrK65SQbGSyJXsjccJbkwFxkvxLbR3Z249d1Q",
  "key34": "nvkLsC6erAso3nXqGEGSh9KaDgfE3qDsuEms9XqtWrg8ny76A6d5XQQcXMYqJ5W3FTcFMwkmDNgh2oH4NM2catE",
  "key35": "4xchGn5K2Lt7C8djYnaGiCwf4vtU2opDgTLgyteRu2yytuqzpTQmtQ2uapUmLcmaopGtP4xkereJcWT8JQ1vUnXs",
  "key36": "36JuUir3ba3625bfU8JPs6veQxTDnWvYwbpZCzXphPsMv4MFZdJb2z4UgPZXyfuUZGtVgwaZNB8Veo5LPiV1axzD",
  "key37": "5ezfzT1hZL3wYcBYmitAC2r79bgxK6pvm7setfgAsszcsGiANBHF2fi5hRNnZMwNUXagq1FwRnTirNr6EF8tCcQH",
  "key38": "2CBoyctzhwmtMVXtXcWZQGZfpZ5wuyNwUn1sTLtvg8E22hL8LaVSMn3VjAzwmvQJnvbBZhZPnpQdWxrbhnpWEpsz",
  "key39": "DXcLJ8uCa4ga3kDoksv8uK3X1k3CWE3cxLMtVzEU41PdKciq1B3bMje67QxXet22vDYXsNjn2dbLp2JUEMxGvbc",
  "key40": "3YqPDkfFDwyPywMy9jA8jrevmgd2srWBWv2SQSEX8xrS4L1prQUf9U6v5BJe9HWCSwb2pJCKJucpV8jQWYMaJdQj"
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
