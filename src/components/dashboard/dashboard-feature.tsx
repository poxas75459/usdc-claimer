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
    "5amFik8h25PVxefsDN9fyfMvTbMVLoh1yXbh8CSdc8f2BywFk2hyguCy4GtkZc5TEYFvwGfigJZ5VDEH89V1GUNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d156frYKd55EBJEh4rxGjcS3Y2q36X6cMpgFHU7gMr1fPAFHxFXdKUZxRrJPU6aPjHwicc5bfkJakvQmovsyg9k",
  "key1": "2etxmX7NGbFoTAzfsyGa8PNUKAn2W7vZfjr6CwaNJSQhMnUB6S5K4ZDuM8zaNu1icZ2t3buN4Fd2uugnsFr78oGS",
  "key2": "W9miDnNBG5Qhs49f9aJqFHM4sxcdCrtinc9zPMdEkWWLc2TjJVcEBrGug1oM4M2wNJo1yEWcv9HtcJAULiMvcoq",
  "key3": "iNX1Buf8xDVufoY56Nu4URhPTabMvNJbLUcaaheRrqLWNSmFF4fh8Q8zkEmJrE594cKhqyXmEeD3Qpet2kiqRA3",
  "key4": "2K6njtQtLKk4Cpxmft29RJ9hS5euaEakJoGUypGZRzBNdTHgT4bdQBXY8bVUaVMbuUzEGeiS5ahQkm8wARDznZCe",
  "key5": "3qqKWnCo8q99KSLov7RFaQmb2aeXWQ2SFZYuxEjvvVK1He8RVgE55BpdEajn2JBnWwXB6wypxbDsHDpHT4S3SE9c",
  "key6": "29n3pPY7P1wvX7dFcBKC2YvBoYWFXeVjqSDeBz8kMWstb164hFZMEUP8KMZLz1oq7wCtoBZxuzwoSV1NHWpKGMp7",
  "key7": "67DKea19uJWoGSLiXaJenUDu13YiGxzA4pHu4RZFu8srrpVks4Yh6QLmHUUc8VBfbYvzufe9hTKf9WHG1tRJEjJm",
  "key8": "4DGipEhNJQgeZdUvwWtY6WP7aisRCWEFUrVvZY4yBT8FFyhXRBs9n6BYuiytfEMXEo4U6dfHS2CFn8themkG5Y5o",
  "key9": "2WC7AANecjL9pMXqMG5Lprd3o3mUJpMcUHHaAxd2ffSdF8hB3rRApcCVxKxP9vCxGRCK8VAv6mbsj4EFLbYqWQ7V",
  "key10": "41sPTvXvnLLcEunuC4h8ZRsqnrpbEiPkEyvRpyqJ2igCDf8MArJAT6outHiGEdLXWXQxVyZUFpT5mGeCtUYG3sqU",
  "key11": "5T4hHYW27Gk3GjhQEf8rxEeZ8qQYL5pU7HVe7GPQKrxtbgw2BaGjr6RxY2sXWWAAyrBuGGSy1km9mh3CYSR3p2Yw",
  "key12": "5inLPzkG37A4s6JyyzreR3tWNyEcarL5woNkXyzEVJ1R3iETAGquYjeL7HP7zecHQnF1TiqAvfXgf7FgePF1FP4X",
  "key13": "4uJdwptY2rscpytpdWnT4ndc6QvP6wafuec8Gscde2gnkEkC2L6grXFjSCQRcrWmRHJHQE6oQahPRYcoV3J17g38",
  "key14": "zmcxAf6ejedno67gs6HPej2wwpidecDyz2WA7wL2HSwhAPB9t6vYUTK3bUeuUiHGBz6cPNmkxLCTQxjtf2PnM8Y",
  "key15": "62wrqPMYBw33ZWZ6pLpDZ9ZaJBHRij9JpyD7mgd5NJqQWVPfD4watxutjJMnzyQ3L27aHoi9VWnnbgJ1XkCqa9TD",
  "key16": "2bqTXr4HScrSNFNxcsbRAuCPEV9mz9W5uKxcT5XdQHp7rv9iQUEb9AG2SNRbKXGvc1yT7BYNq1ZW4Lf7pdPbKpmT",
  "key17": "5Sd42q8thrqpiig9MQ8eUFy1VgWAqZBXafBYXy3n9DmdwikmrypbTfqVPu8M6ddfNExLhqgJf4DG8AtLDDbcVDjx",
  "key18": "bdurgReo2Zizj15wGTDprz6hjtd2ygXQD8upKQT52CwHbW7BbA3ZRiQk9AHeZthvC5A8B7GCkAEJuyyK2VyWTKJ",
  "key19": "4roqjVqXTjpxFb3gXKGQjLLn7MG3RfJsXdwTrqEKYGVDJix7qHzgt9Z9xAtq4gqouUZxLW3nabTZK3urm78N2Bvx",
  "key20": "453sHjfk6W8ANU6Su3U2RGXE9EQytzEktwvsSPfvyKkub2sDh65S77QWoDNarjo5U2vpzCGmGuE7MM9MrTGWqqUR",
  "key21": "ixGw85a3ChiYYDQzSbJ1fb2teckexbGFi55STfM6n9vmUjxpbCRYqT68DLxJCksHaeB7Ne4fEoKRPLCC95t466W",
  "key22": "2azd2Vo3MCWwW46oqtfD9iE6QGefDjEfjzGr6CJBdrGc3YCVNQrsyRbQPM1VdBJzTFpdzAejxtwpWs27KJ4yc73t",
  "key23": "3mDCpDRaBS7cEckC5MZqymvFrxrvDZqb9ZHoxN7oh5WBkyT6MJMcdPaGLHcgvEXe2jQ8zbtqYuWRHUe114eJ3j4f",
  "key24": "4cBHWeD8gDKERczC92WHLzd9Mb7BR2JXCkDiPgDug3o1F2DiUSxySUx47i56eAfCW485vfvjeVQvVpaL3eU1T9DG",
  "key25": "5Sjtq2gawWzErhwABgZz6WjZwejW2inYhZwyrfBMy6ukhFd2aajgkrqtWj7pceZ2Ede4vB5rWPZ1Ybh7HxXFNhLq",
  "key26": "2wb2oJDdtfErpSDUob3fiyV93iVx8axkSd9ZeCHHB2tCt8vgfsU4oyYwSibVtttKgmrLabYvrUa5bW4kCUdZ1k2s",
  "key27": "4pMPuRpYAp2h1BC4NsPs1PtFymmuS2QJd7zCN9wDVDGXWZWBE5aMNTPCZ8QT6bTLnxNkvT5xv4RYRL67PzNzYB29",
  "key28": "25n56Sor2h3jAeeiYz583yHMAhtMfVmmFdtnwnGnc4u4GePBC3uJHvfbfX7rH1AJ7vsjCfa4bu4YVdK4yUjrGQLK",
  "key29": "5MVcAYHNMFDoj2sjCVfKqHKY8vudr4DdieAP3sph5MrjZ82eXYgw1ng94ugBUhuL5Le8h9vcqaNSdqFL9sSix5C",
  "key30": "6QeRWkrreTBmnBW4tPn6qc2CUazHBFL74mPt8Fdgu3U6CSPNaan6SuBicEcSGZbzMUxkmE1SgjoCGH8bjbpBrJo",
  "key31": "4qVDKZY2n5j9L3qTHeHgo1xJ6M6woFcxjmiCffFs2eQ14NHySXe9dNUmX3Cz6Y4AdbDp97DYuErp4pvo1h9JFpPq",
  "key32": "4MufNzUyvUMXFCmaZbyLHEVXzvFRUKECrRXkgU3yr1kWArhuHFAf5X94GMaYv37ihntNpjUXzyRgg7kiYsSZenrX",
  "key33": "52efoWM7Shjwb8QZ5f8DpQShGoiNbvXUqxMFaTswt6qPbfBY9qgy1fP66ft1ft844mjAANh1ct3fsWUiu9GyEDQr",
  "key34": "5B4Y6CY8ygKvSRsra1hUMH4hMZLXvQVzefEsQLMBGkkEfRxvGnu9GoUoWZ6Zc4QLZMExaumQkuS2hZpZ9fTV3RUV",
  "key35": "8x5XBca5vvPX49cUCEXX1oGYDXqbz8qqFoJL31poHUq5QCQk7zyjcHvx2hSsxtR9r6JbC4ELS5za5Q3zMc6RadE",
  "key36": "2ZceAJrm7FBfH5TmfQ3DWDyijGbzaE8ERT8b54DsJAt4fQriA1C9Y7pG7w4QfNa4EajpkEmsHqQfxvA5pUnUyQot"
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
