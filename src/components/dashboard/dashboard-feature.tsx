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
    "29jJCKrmT8NxhNM82M1SNsEihJyPnNPv4x6j4LwHswnyxntSf8faDxU9xGWrzo7Hrnr3E1S8A4itsw6DGHcuXtuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WexynLZBzV5mqo16DvWrGowbNwKzX6kcKHNE75AJXjA9RqQp9YoLe8C5hKi5ZaypbqPyFp9Lqa33LQHM1ctwFBN",
  "key1": "4d3KhoqhpxcRAQ7ekqgZmhwkSueNGxCQrusJPfF8F8tLfds6h12c7Msz9XcgBvKEDY3RU2KeJAPesKd3wk43E9hQ",
  "key2": "419JniiDNkqW4s9Sbiyde79Udksrr8mQWCa2yWWoYpsZ9M5ypCeP9jZ1fnJMjD2xhwTyi4XbUWai6rGdspTKMnNj",
  "key3": "5TfN5P3PUerT7w5XSmKifnWhih23e9JAmvLqA1AiYA3WoQnr3tJEnPi6644e3CNDShy3nTQtMnrair75qwWUKxsf",
  "key4": "3xiQw48GVRgcTiGeaMRf1WaKfCkPD95WbAuVd2njzXagxNf6k87pFX7r9N1iYy4Gv3PBKXCYPZ2MHGgAGFMXBjMn",
  "key5": "65JYdmEPz44WUbwzBT67qUXgaynotWuJmwzKtBt4RvxHHuCEjYxppVMBkJjVyowgVXgSk3EioxZPFbiEL8BrESK2",
  "key6": "H8Cz87a5YebgfUEcJiDffZvBbkc3d9tjn5WpW2EYUs8zvdqL2HR22J3gGfZEgqEzBNn4xXeE4LnMD2cUrsuHdt6",
  "key7": "5u8MLjo54byJBTNGNcPnrFpHB1vWHjMEivEHRky4C1h3MX6tYQv2xcJgRqey2A3xAcDSPizprJVSAMWuCPAzMMVj",
  "key8": "3RHdVv3x1qKHTtMXEuA7YLWqXwWXTxzPm2ZhxyNtcRdiiR3VuNDpnUK8St2t6LVhcoeM4DiLwFXfSQ7UaoEus1Z4",
  "key9": "3qSNm1c9GhTTmnANp5MSu3kKWUk6dYQCouWtxRKT6bJTQEiBkUN33rvuueUnCEaPBfdZomeUi4CCbkK9qDSEsHq7",
  "key10": "4Q1JcmATrZBtippLHhroPWH9NM5CUZh4y4qNFRiKMmEGEiB5jS5FhosLXyBiYWSfpDVzovH9eYwTzjKDGTA4d5pQ",
  "key11": "2HShPMYLXVHLmrzMZ8s9y6yuKJKwRsaroiXZf8JpcmdXMmySan7rwnr1YnFSfX4vu7cei1kWdPo3X1uT2tyV3cex",
  "key12": "3J5pc2XxLsHvUxVohixNxD2LUWPVAwSku9KPUVPocktZXBQ1Aaxs46rq9CT26RT6Cyt1gmfNejvqkWekRGRrpb8Y",
  "key13": "256cSHeEsZRsbvUnaoK5MD8Yvkkr2kdbJ1SCaipvyGdU8VWb5X2A2qz53yo3iemXQZAEKZLw7cywuviyp8wyQLpz",
  "key14": "2PTehtNcbT9Y35Y1JAAVWUk6U71gESBUAt5UWMjPpCAL98KQbTMvij6Dbh23ezpkuVnKdYScFSyUWY8vpm8jJVMK",
  "key15": "F1QvZUWCxYKUGu9yvQCkUE2cMgcrACxwMzpzTYdqpZJnX4eCCx46ZEoJ2gTSLdP8QAuiS3LkyE627ph6wLJmqa2",
  "key16": "4fGT9thwp8SbymBZpvo4CyQuVUhxaaqqeSoz4vUEpNek2GHgD6K7wQoATZdwoErKDZuuc1wxY58XNKy5wcVWZdj3",
  "key17": "TEcWHseeLQ8r59s4b3G7TbNsSkZjSwaGkMrqzVfMuBtjYPcBPcVXxrrdu2wLjHEBBu6xBFAhiw8k2DbFCTCqUK7",
  "key18": "5WT3Zqv7w9kMjKGVX8eJ8yqPs4XpEjcpCkapMd2BMPvzRnsjwQfZvWtxY5gfyn6yekqTkgB2C64ZPwJ2kFro6tD9",
  "key19": "5tu2G8fshYkkorkLypRWK5U6WpTfv7sWYtxkd9Xk2uLToUKcumnPhK1Uve5UP9kK6bwtZQVQFrQHcCGnwU3U3GDG",
  "key20": "5oZ3jDHdYGRtnFP3J9tqtp7WtfZCZ8aCJYwuqZwPNXM395k5swhTW39ktAGU61J581qQLajuo9pBK94hLt2RAiVn",
  "key21": "4KPM3sAsn5QN7Hc8MBUUXSU8AsqJ7UWfy1puszMgrwijaXTHtdVAsMUxBYPaQKMSVQiPxMvoDH6Rd6HYgsa9Ru1q",
  "key22": "2hcbtoQ6zPbt2AWVQ4GLamuzFDjnXiXowXje6d8ijSkT39rUG9PNBEfgAWHjEckQJezzKgdcN66u34RxqewdFgjk",
  "key23": "5jrd8P6QyNBBYRqyGY8s8zxUDvk5dFsWerPMuCkWL63jHPP3EeFkAdp1eeZj6yE6q2BenTk1xvnd5pF8Xjqbpd73",
  "key24": "2zFftVw1fmZAfgF59VZZ45WuZn8PJmH3ofL3sZQ3yi7rDdU3H61tcgojRC9StAEmTqBPkJ3uJK7zGiiRcMAfnqE6",
  "key25": "4BeNK24TEFjFzaSkEjeMyPH6tRaox3efxHXt7qYsbXLi8eeqgig8Qinv12P9BRe18Ka7SUfBVNwi1eD9GwXpYhcq",
  "key26": "3Jt4CiJckgfgDSNaYj1u9UTfzkjWH11ooe1bTbgKnY8ULVSjV3PxTRWjj8jqZmcaH5aJdf7LYGH3B7gnQFhswGc2",
  "key27": "2D99NF6addXjZZnMp32DvPHCqVK68HmJWtPqQdZdL62mzTF8FNHBZ63z63UknvVRKmgvRJuqf58bc18dXcXXZ2WE",
  "key28": "5JvtTb9aFRYsDbPZePDxgvXYB7VMWYyzR7xmzcyB6buLFV7CtDGRNCpjufMaR3ghFfJHKKuVKKb6NVGNnZgEmbfE",
  "key29": "5T3aicsbRRVUsn4coGdtkmoh6MnyTtttdYfUPPsunx65noBUVjRDbKgPuX6kReZtZaQwksopt2MRrS4BcKUrzY4f",
  "key30": "5KccvL4Tf8rLXn1tuWoVPQbh1DRecLLqjWiTvT1KdjTAL5jedBuQitF2ds8izcD9Lj9izE2KcGAze7yn2JC1AjBi",
  "key31": "3uatNnhyVi39Rc6R4c4N1gsQqoAjxdKXrCAu6vQ6XLAyWZRFrnPnJxGXAz9gFrktN9pb6LAfbaLkCTD139NrxhAU",
  "key32": "2vNmnGoAEPtAis1H14p7Pp5VnV5wM24jkSGPVRDidgC7YFX1vcfkokbrWyMjZhDrWoCE1wNyks5zDwZHQe2T4Ahf",
  "key33": "VF7W9tKGZnX9Vspwrd6TkBm6HKM9rdQgnoxPfU3eQrzV6joyazUPA7FHZgeVSyL4netcf2JUAJxRsFX1GAqa1LF",
  "key34": "EcCj2krocTWRLShhkVNYzd2GxicZ5ckmoq5L6q77K2hemRtPgbdaWNiBoiGMPaf1HTXdfhXNWWvETzBoSkbYcpQ",
  "key35": "5PR892wEqkptzeT3TKibR1bqMHkhu9JGkfUrPATJeAvmKX3ij5R345kRSszTXXhcGkS9BJ43ZxvyE2Ggoy1EVT1V",
  "key36": "3k146HVS44pKJcxNVnASF4reG2Rmta6TtqmDGSx4r6PUUka2SPvsaAPby1mTqQxadzwXf8SBtHvsLn6RoVttLA8Y",
  "key37": "2zVqbzxnkNLKNtLE4B1A6uEcsR83ZEJsSycgDg7hP2tDcGkXtydeYtzeKZknZcBFsj8QaQeVK7QSK1ELSe2XRiuZ",
  "key38": "2ZAXbacTLGALq5zvCyYL2D6gDVxK9ogrjDa8C1pXHuq7kM1ccB4ZQkTzB4qk8AoyXvFdZrjps1nRtTG8puY9Ei5f",
  "key39": "2xfwMySav7WzBgk9nYo45MM6zBUB7pi5um9K7EymuSzh2vzfPSp9iwDjZpqrX12FbSrRNH2GzDtKNCgYGA8sTjhc",
  "key40": "4eQCTcZwTSPM4NQX5R3ZuuemaWR1x9ySt76L15qx1mmDwZu7bcdcyMGxZeqtRVv7ufqWG2hVZn167vVXrE41bsTw",
  "key41": "4ZVLKbnr8NWdy78DRTfmcvNUYLmasgXdMrKegbrQ7WZhn4xTgzo6GvSoE2VPXpJ5Gef587DxcdqxeCvFtWL7VFPv",
  "key42": "3o1UA5q7jj6tKip4XihBqvQPgoHHhSvLyxfCkUkDeKvBkiXSHUVwPQfvw84xWfo7u5xFGHG9Zff7hyEg5CGLyvpw",
  "key43": "657q7nUxuVNumgxFSXJPs55e5V7Rt7aFLpYygnYZdzeKjeNe4hXdbHQjKHTtg9c8xzfZzHT3gqYy4uon7vGdcCJd",
  "key44": "3ujDZYX3xpZKxMnS6GDvRzJuRvhrViVY5nqxuUwB2SpznygseMxztErefY94kNw7HCXoBXMHKiDn9NmtD76kkzUc"
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
