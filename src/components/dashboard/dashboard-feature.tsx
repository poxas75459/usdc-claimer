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
    "tKCuGuuBRmYuJ5qcn7Aqzn3Abd3gXpyD9tMxWHUtv3i1qdzXNkpgtYGAkV5WqHwXtahq7aJjZJJqq1LTY3Kz8b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zt6VwHCis43HRfvnyJArAGmTuPsxheUJr6ZUnW734efZjVnUmWBATCAPkEtaoew9Gw23isM5hqKSZWk5MQ2qunb",
  "key1": "5gUkP7LSsr2yn5nTSom2rsYU5X2ytqXrEzDwhFvGiNi6hYTbrCc6KbKUhCGWmPbHvVs4vQGsPHatPTBGLFbdj1V",
  "key2": "5LrhyrNSCXmibGDNF3riLVB43YkaWj1W3iUXwhkBRQi3JYiZq6Qcp1ebvva8bJnUSNPDNXGCNj7pujj6PhCFaUq7",
  "key3": "5Hg4hZsWNL9km9Xy7tmJJcnnQ7S1SEtxLbqAJDXygM15xh1GWy7hqfyefEXVzRVZzPCNezN4MeYLMzyeAGh7Akkv",
  "key4": "3wEmEjDtPyuvSqtqnkxsE9CHaqKwPxthjeZeqDnNps5GXjszKTCcrniCnQLo6ytYnq7zoGaK7X9Cgm8F9m4Mzkqn",
  "key5": "4yYtauXSPVoaAoTmouxeofHp2Vf1koDFvdqD6pKbYCknM6We67Z37NXwidaTbyxdTE5TxAQs2TN6DUgsVjFQz6hP",
  "key6": "YexDkdnwCNfVSFHB2Pi6jG2TcHtaCBQji55A6KM9tFr4TwZMsySzdqXmBr1xXYDfJRRs5WxvgeSWt8iH5sMvN8r",
  "key7": "36u4J3nbEDqbEdEjYByGQ9dskbpyHWZ5LF1ihnjaKhBNGExJkdYJqLYGsDmT9BnsGi7YTLk5FPo2uTxzTw8dXFYn",
  "key8": "5nDuru8niULK4k5XV1guruEnKcG2nyDxrJjg64woivTYykbmPjoXosUhqv9gy3TfuqTMxWSDm5QZxb7WNzs1uZP1",
  "key9": "336KrEZRM6MN3bjAFGMCqVR2spsQ3piv195LqKyMsTzAHgTGBYMo1eKTUdqPA4bEET6MNsWppfU9T94kxDhvmk2G",
  "key10": "HsMf7EqTtSJGxLLQS9tYMW8JXgsUD5RBQ33g4WtuxoFypnJG4MvQnmcqeqvw5X4DDntQc7tRgDM8rrnpvpdRAK2",
  "key11": "54RjKwy37fvoACBdBXYPAD3fagBbeA5wrRQArJSNnTJ92HnfwtYdHA7AwGGmeQrEwbAzaanyRBy1wqSEJMFzPWbD",
  "key12": "3ec21emr6YjWFWuvPVuAb8tHkfRRF5V4Pg5Eit9JxsWSCPM62gCPM3xuhDVfaoTDUCBaam4FJQMSi7CLPhRoDM4E",
  "key13": "4zhV2XLs4aG2TxGLC81f4zaMScLv7vd4xd24gHmxcTWBd6ujUdMDJeBp8usxBt26bp8Nty4qxEHTdVkYkfSiWw2E",
  "key14": "3U9Zz98ge7CeJb35YdgjV6JuTnL9KjadijJgcQAPEM73LPTAR7CdU9aogNpekFFs4vaUmhTTt3EwQJbtfnwMuRGo",
  "key15": "2RrCkoniUEYYdnkTSqbWKxmzgK5gFstpngEcAXXWw4DXmfYGhYyLj4Qx6bYesJH9p4DB8oPtARCxtKD42Db24N1C",
  "key16": "5akfwQiEQ4bEftEeMjjeXut3PN4fTf6ZMqFnfDC9n4gHQQRwdQovpNpE6pXnAxwC2U9ownNw84sKM6u6e5QaZEsn",
  "key17": "31jhHoaWt4AneE9MHnhnv9dAwhVJeVFwoqGFBEcDdE8QaszJUQe8x7VnhnjHJ6PSnRAVFsrDtmTGRsqAapHKtMM8",
  "key18": "A4WGBTCCqzE5PkUbHYNJWdaPBDfvPiMs6EDWEnvRUhPf3XZtdDjt77KXkE3BMthwzNMpVNAjSJ3oAaqWaKAteQz",
  "key19": "3Mj7NXUyQw7muahAxP92yaWhhCDsFCzJZGYXvFCKCzcvNVTcjxvjZmo92xS8CTMMYq3XNPqN6kHVcsWqa1QVzhYU",
  "key20": "4H5qaDPaMAodu95Jgah8oST9EeBUC9Zt2HfNuNzcD9TaA3UzAqqrHLKe3vZF39HZ2YZfPYYo7VuPnsfvu1YdcwD3",
  "key21": "3U62baYzr84E7MDQbah81Umbf1Gg1dwtPnm9GdVmFq6h3rnpwkT7cnfwusrmP5PNqrUjvKhTfQ6sLWnYG3TNz6zV",
  "key22": "9ZmUrUapU4hRi1EijL9omJ8iHcA93wJ5ud576DouQAkn4YZisK4CnS5u7WB7Snj4nLhjN1Ng1QHbces6Hgofmg9",
  "key23": "3xhi2vzCjh54dxK6wtK8WCxmyWD7TsNGfkEgMTwesCy1pYgte2WTy5X6Rk2zMuYLe1acsWUgAKEJaggSGur8C8my",
  "key24": "4Pxzy1JUH6HbSXYbrohviuta2J8iixX63qgviM5deqUESBJu1nH4wKeVrttdcRMCd6NJ8Fq7YmHZJxeegykXgQYw",
  "key25": "4EVPktDvEVt2fLtnMGqJa2As8D7WdBFDK2EaZEMtQSJHuPUNTc32tCSMguj9LHB7RhDw1mpaRyJX7GMsow8ukWzy",
  "key26": "SmwdhG1QpnkhPsfjBzaU9DnqkD55xf4MRbyRjFjsLzLQQpJZb3f5BVf2XiN6aLWUHRJYHGj9bjHXB2Pt5LC1nUJ",
  "key27": "4f8uNzAxrMSFyNgkBzhaZSDa2beNt9axraZVBeSkHiaRea2yFjDxv5oGa4ceRF7NWAJ5SL6oB3Qvpykw5VthZLbt",
  "key28": "7ukqR4gYyLdv6LWXnZa5YzGT1xy1Py1e82j2kuBBSxMwJRE94dvryNEEe2PRr8ksfEydixvi669yCjSMd2Gd4hW",
  "key29": "3wEJqMkkRS1wmZjLZFPpqAGRC3xNNCEKqr1PxrNy3Mw93wT7RdAAfNiiWh6j1WxiymYr4hnXmajDHHTKmS3bHFqg",
  "key30": "4Ka5fRXCev2Gs8NDKb7rno9EHY1mzCnUKekx5xzjsXK8EBuLWFSBGoFMxhL8oh1f7L1LQXYVym6hVUeNSfk4kXMS"
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
