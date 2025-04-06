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
    "4Ri2xGKy8UHq3AXTtgaWyfxjv7uNnQWRSmgofZwztV7bBVzeTHBroC7Sadsndfnmm6axzyjB8ffA6fas7Pnm35kW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sUmUn356gmN2K5Lgy5KA5NqovPKpkeDBgtfG3iYsqBBmWwbwYjkGFqts9Qo6tY9swd7vSxyabVyhuZc6qWaR6VS",
  "key1": "2mKmWVobjvVQi7Y7YSYhzTXPhdHE3PPoJS29eZEcBLqRC48vEaRDWU3ZpFr3KBGNkxN5KqgdZjzjoNEaBx1v5PPp",
  "key2": "2vuJRioPLAYF8pPba9q99UJfEdqyqDZVKd2bBN7rMovYCuzsReS9hsysxvBzwSQBvQeqbjp2YDtcxFANBtkrzWrJ",
  "key3": "5xjC422gbuczwMoa4wS6xngFQBbG1iX9gwHsibqFSgsBKDcK46a24eS92gG1FuePQwYMiR8MKM5ZQpZdhZWF3V6Z",
  "key4": "2qPjtRwbTWU6ErPatbxWDGttkk3pUbBbbGwiPCi3nyW8t9mi2L7FAPCtibHCi9LBq2PLHewT1wRwsVXo4A3HZZoq",
  "key5": "92jeSK8L1bBbW5YpPW3BVeNHvvTdvSnMNFVN8LafXK26xd1qpBeTyRhazmxWFrBGMMfRBHGAYyu3QjmU6YeT26S",
  "key6": "5QwEqEMEoTjVB8WPdnZx5FbYHhPTMoenkXAghF4LRa5f9B1MgzP7w6kU2kJoiMVpwacCH1jWEXDwvSnjYx8v3LVd",
  "key7": "4jAQHNdbJZv46w1Ns9HLBLa6SNpk7B2HjLxxQu7naZu8oXVJCW7uPvw9pP1FUARtg2dtd7asheFgS6w5a4hcnkTC",
  "key8": "3ceWcTAWGyn2942oUZdCj1Vw6gjBXAXcRV8dMiyEuR5sbyyfR7LZLR29ncVMWzQivtdqKjMZBy6nmWqTNUUaDZBi",
  "key9": "5bEsa4AjMtbWYHVVtHjWruPsXuWT9RDYD4hWmxWAW4SSRyBXjR1BazXAHY3fwu2f1d5q4CbyZBwNYaBiKMjtMWtH",
  "key10": "4KRvjU4D77ukoDnuzExyJX9NThEoF7mhgC7jA5SgtHWeWV5Trn6vNvvrEcPf2LZssVuAHth2hKyUHRepLKiSRM1S",
  "key11": "3ZPVUqyRHWz9j69hfS2CeKpsskHHGDSYEj172U597DqX2W3hTAkRM7Dr4ZUdjB2Z6DEkqdH1dw11WftLvNk6mJS6",
  "key12": "3wTVdKwkNotgbNJjYeecT24Xwy5Pt47yKQduYeM1mPxUTJ8ojvmZ64m8QPnociUBaCRNckPShegP4VrQESSFFLdd",
  "key13": "3jWDNqhTcnTu3RFyRDXq7bdRjayGXqwDpsF3D6JCECvSnyDNsZS6nuopriRY7wVrpKEfpauEEUmF6H9yP7Dyv2d5",
  "key14": "3e3GXLALCEgodUawhDQYrcDr9A6SxHRNBG18cbgEJA74nVqmTFWBrkeEH6Heq9caaGpcBADtaEHckrCcnCT6PtcX",
  "key15": "2eEsGXk6MXesxMhtSRSfrnTDdB8zhvVXACzYhZL5kMn8RyYmmoAWN1rfpYdEvbtRidgw2rtCaxQkjb9wsG64oZeq",
  "key16": "W9beeFd6Ji3PkYrj7dSWBQiztKrnq8fGSs2PEMecDffM6FKB3H5Y4XQnXXJPQtd1bVmxfyjBSm5XQZ8QtXCnsLq",
  "key17": "3D9tXanQie2K9WuxqwCGr6VN1iZEh78k5kzXyFiBoJzF21UqxKudiHL7BCM1WjY1w1Uj5QDuNTzoNVuKWbWBaf8X",
  "key18": "5h2qnHnfon9Kx1BHadWrpMbHcTqvJPYjg2tyNiBEXKgaq66Kez7QaNa97pWENGCzBZBzZaByFPp1yKwawd3BxTDN",
  "key19": "4k8T9izAb6Fsg7pyFvSRRNJ7jk93Jckptw4nRLPr3QWL4RUuLdDMW63rxYVnKDiWAyPL9XSEYbDqpmFpodtB9uNP",
  "key20": "EucRTexpSybWVMjohXPjMWBpJQFv1nW153UyJpc4x9xRGuxLAFxHY8gYK7MqRXDEHjTuPfuyXNwnMR7VXFSXwy8",
  "key21": "4H4eWCKreFYXSE8qCDgyF5BYCQ8QvhH54RVohnr4h8MnjM1zyRh8FEAZpnjWHfQQZtWfvy7SiN9K5qhzRckPRqTL",
  "key22": "47WFxmq2vDyiPG92fmGoKyqz6J6cC1Fps8Bewx5ybvUNQxPmRDEHPy1RbkiRYAymHiGUhofVWkG1BsNEJcEXBgUv",
  "key23": "3tZxUyzYFXMCqi118VaZNvwoBXqVVkjbn8bPmSt4pirghD4UxL1tFhPn9S9fw8KFv72T4UKiGWkpRs93ZWxZbEoh",
  "key24": "GMZx1rKsq3mG9Q4YiUgdBdffBhV7KqYtS337wrjnaYobDvk7aUKWKkc11sFNscjT7EUjcRnBqJvAHsreHySsqm1",
  "key25": "5CE8CkCxCrwCozSfsf1FJBaJcHQ6j18rm8aD8qm2zzoL23F1tpm9rQgahRb5vdBbE7T4krYPFDjbuHjRMxMVHStW",
  "key26": "RYZsRmBYePh7ZuJzMV8XXH9BTSfeU9XM3vDX3hZQH3jFK76iKyxJ9b25eQ9VXeVoL4LR73x7YwU9vY6GqUeiTVa",
  "key27": "PhnGvsNWB5SrSScSvu3oBjEbKXxsQ1sZBbFGAMrWVFgH5ForFgH1ddh511KRvMkjsX3NdfWDEEfd8tE4pe2wotF",
  "key28": "2qqZWY3ZN36R3PpRWxHXNYuvmMZ2pPQw1fBTzYN5hNKaw59rDEPqPsDYPdRLhpfc5FFKc1H7VB8PTuYTigrFyWgq",
  "key29": "2aSujaekqkR3ju2GUCAT1rBE4cHJNHhUivSkZw8yobwKSBpKi9iZHvpNcXw1HvaBptZKeLzCghnFQNT3122iGBtX",
  "key30": "59bxzf8ynLMncvvwjVL61KjyaXAyeHgfsgseDBpAgQj2mGGwKv7Mcddx4FLxkp354JFcvtmKuiQXQprVcRmmjman",
  "key31": "jDGvu3F8ZP3J1CPqUnYJzsVcNVmrrHfUMEJrxdsZYtjGTFcK3R424SVWagiYPJGXDdJRfPKGsfGVSibxaNVPJG4",
  "key32": "5WMYs1oexdLQ7vQ2Pegg318nuNkLBrb9gEXhcpSfJigKq46mNSKYWzkDrpXr3LiLiSjgz3JmQyinMDkvbTKxhCiS",
  "key33": "3x87P77hZ8gx5XP5w7V6x7DtbgmeJLLgyNNVJUCYNW9GbMLkddKVUoJJ7751Zh9Qthch6kXoY7cSaRhGTPEgi9MC",
  "key34": "9sSEYoFrQzsBJMoc5ajMrWmFTdzQYkpzTgWpEok3r7j5JkPFRKGnuNFwR1xu2yHCZCZAty4SAww7nzRk2rumHky",
  "key35": "5cRTrXZ9owAd2tSUfuL6XiB4bFCu6JGds9mA2gBZsY5VQ349Vf9VMx6ikzMgjnbEVtUd4A7U8p5hfbgnno4Hc1NQ",
  "key36": "4bagyahjQYasE4wLncjnmFJTc8bzZe2NrrqEiZ3wsKQeJdVFqvW15e7hqV8Fk6iB583h8NXPPnHaDrCFqP5UML5s",
  "key37": "4NZkC3dbJGyUGJ9iKKb2Z9BwXoMubVZUftMy2rGh1ZQRvaSDz4HrXUTLCfNbPYZa6XUscT2pV1p7kfpGEDUcrY5y",
  "key38": "5yeiLTaKfBAb1AkxeguthLQtm2rc4yhVt5Ht1KGmPxgdtnSEFCmsJSaNZRKApLe5avCpMcP7742X9pjPLSnXndbS",
  "key39": "52BWntAzgK2K9vS6K3GqoH83q2NNeu31DXT4f7ifER1JDwNMTxcK4oqmJFCLZZWvDzMjmWxWhmHnFk722efSTg1U",
  "key40": "4xmvJFqC1rctthx7gbAWUf9vHvfBtNfe39wZxmGg5iWoe4tVfsBTYPkd9qb3v16mrz4wV772SbPZ9bMdAHLQreSh",
  "key41": "4Q77pgi2PfAhuJMYdefbAgthtGzvBzmvGQpmQBTQ6HjLKtUiLdRAFVnSVTw1NSPqgUKKwxWPv5YtciMFxdU6Cxbc",
  "key42": "2U7he8ywNX6JErFW1SFKkndyaBvzeiaNUmjQezX2hKT63RTFBtKyg18KgjGrLkChqS1m51hArxiQBgLdYBwGHeKc",
  "key43": "2YWFgorqD6HVtfehwb2cJsFuQgVQ5cSYDNU9fomohrP7A6nincxDJuqohVwdEHctuZpd4xh3RZdjri21WoqgExP9",
  "key44": "5JG97xQgchr3jC4dZKqZvqCLhJQi7w5X3ws9pwAMe7DrcVScydrkvaXrp94YsnmdnByWXW7hnPFwQpbCZ4kWG5HU",
  "key45": "5rJtbW1FHbL6UgP6SxeXKYfJqq1qS67R1Csrw4nNP8fzBY9NFRQW4drHxCfnLKNNApmy6whC5upXsPtBrgAdrhNi",
  "key46": "3NKRjJ1kUoAa8AMzVfhTDzA1VabVJmFxkT1Y1s4kgVWL5zc4r88Zs1fj4P3TXkGWYQj9TbDPfqMTNFztZUw2XJyP",
  "key47": "5Voru6Re8CVUYByU1rpRrJuETHGXTbjCMBPusyjs22YjcYCnU9yyRLD4HDYiL58uvD8YraQMD6mYpbCwVDLXc8dK"
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
