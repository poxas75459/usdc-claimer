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
    "pnAyTgT2NhcwV5zep2N1va3Xir53pUpbkD1TodLVQtygP5nirmLdvTAJCMtmYb64bWfsqsD7wwj7h4YVG4tqvNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Au3nNVxzLuVdjSsEiEnWRutCvR4hYaux1cyHXcqkNTiaYvJLfzFVJ9VW1vUJPU4jP8PZ6iEEfHzV5JeoRNXuJWr",
  "key1": "5FAgE8JdmEc7og5Ei8xwWSXaQcLfisukvXGCZTt24AwEc7fxNFfQPPCdUjuVVfsEtK1fiGyJKmivbZpXzTdLHwho",
  "key2": "VqBYMFuf8YJ2M6guhGQkPSPDyuNyC3ZiYpxGbsKYV62V58bZU5xJgHCwMEFqaZj6dYbxyHoCj4ZRRz6fHPiG4Qv",
  "key3": "4jKzYhMomov9hnhfu3UcyrHygfhP5J3bjqWrPt6REWtyoeLSimn8Hr9XbupVjPdnBLqRmNDqnQd3juRog8uMyDwa",
  "key4": "33iW6M1KRPMc11PuWaPRLBWpccKgZQHyRg5USVFTsBXbQmn9Cp5DmWgF3jLxRWaNw4RquCDftchHKHiCdb8Qr3Y6",
  "key5": "ycgnkr4zj5QvydsKX2sdffYTJAVbgAYjHMQ7fQ5jTrpDrz66M4RYn4rBBt9rWTQ2frPM6F4gQkwm3izVdv9PXjJ",
  "key6": "4CGtufjdb2bncqL5DqQk4GK7JqvvC6jEbyHPFd5ReNhPf65jvbeTFwHfrbJw52QXxvMkUhjs7RusRNesiJLTQv1N",
  "key7": "32gBttHmq9xEPap13zGeXXs4EUrqPCHm7EapRbLG33NdXH43TV9jAYiyMsW9jxRBb8QmTvvm8ymkn6WAaNCofzJ1",
  "key8": "5KcmdAWKsKvH23CgDES68sY97GhkXPN7y2Upux7PLT8HyUuodwweXq38Z2nLdtEMNZvCt8PEjpvLuLQHstT2D7s6",
  "key9": "21LKn1i2AvaYiVWXG139cwNq5qgdt26GYptVmqKrzmp9ASBHmBxh8D9mxWExeu7csQyvjEV6AcNo7edgK17uX9Mg",
  "key10": "4hsUL47adMJDjkAEDHwCvvC4jaS9HfHCqdjDB2sRb8sZ4mYZXPcJZtREUr6rnkDfzHo2QPb25aNY7qaFtLeqfpoN",
  "key11": "2FUgFPGheAAWdNAmRWENz4rPktJc7SP6zU11YwK13Gx2MYs2ZN8peGQwffBLV7zcCHnVvzG6rx2DyJcBpEYKqdyP",
  "key12": "pSNLkCb4gXYFeKKxwAv2sTZxnhtR8dRMPz96m3F1TciDuSH2QqFV66hicFfaUeDNBpgpq62h22hA22gjru8mBRJ",
  "key13": "4WcqnrUFT2G8AwjboQvQhwY2yp8SjUSYxXPo2XZotUZm3iMDbMRi9EwdS2gmF78VhTnA7QSj1zBjytWsKa6KV1WD",
  "key14": "5TqdCxamWKMVMq5VXeApY66Jb9Nbmxv5GVE8yAbgDjKnK9dG9bQBkD9JK1wYSppqtj9LEy4uVGa5ARFZKqvDrG2P",
  "key15": "pUXVXVMX4Y3GDq6dTdPBWRA5C6EPwRatWmmca3Hn1q4xG27PnLonngdvBUpg18rRFQAb9T5Hkt7GUCcaQ7uxqFs",
  "key16": "5zu6qtjrz5YtZ5fA4fLREmQeFGv2YqFi86EKK8HJoJJQPD3EhUpzpah4QebUQR6uNUiQRzfEXpRyjCBFc6ttd1Q2",
  "key17": "4Smj9BytCFqVwzLU8CX9qqDCDBqjMhvkz8bKW91sJiy78KztaU1JckGowFj2L6Vyzh9r4BENpK5CrdRRq4RicPS1",
  "key18": "3GMjV2AAypLPyuSo6nStLv1XqzBE1sQSFKRDwiR6NU25ZdfQ36gcpEuoSy2FwAnnVCJGYw1BrMgSDkLMXdYSxWQP",
  "key19": "32eNvAjdhfjbpEVcXwDSEpAurT4yLND5HSN325AuxCy99YxxSPBj6F1vycGoEsRRSR9L53knHzFBPLMDDLQdcHYR",
  "key20": "2tLEdemGHPK52Jy6Q4EmAYaYVXeZDGWGTffouUHaBfPCYeN7P5pd39RFWz2QPx1rAjtY2CXaeZMACbHF6e15QpYg",
  "key21": "3F45BEqNuB9hMmY6LB7epoL7vdnZiXEfQe47CHBVv2guEmBC1eCzBJWU7dZbAxyzQKz2pLAADR21MgoCJpbCG3AM",
  "key22": "2ChnPFwfWjVP2oMif3sK8vB7Ttp2M9iDsGYud1kNydSuboj4eZG6yM8o8Q7pxLYFtEn2L8cCDavrjrfU3RoukRtT",
  "key23": "Wdr89LNmcGSC36A6vevyNcwLnddrGnmemhCCpxQCz9SeVs3tSpJLer28fGCcp8j9xuhRH2xK47hVv5mWNjfkPSy",
  "key24": "3Zw3tvKDWjQv3GYKc5NoWBuR6jYBQRLnHTpQYCNUb2usNyY32JAwohs16jUyLF7DEoFBc8TkFoEew3WGvEgqNpZD",
  "key25": "476P6VqqDi7m5wk4pUJ72M2JPDkevFCyDvwCAfUok2xSReMY1E9gbzQj6X2ygLyDY3SsrsAuuiwPJqFhAb8zYAQX",
  "key26": "WS3DzYjrDo8BqmUMWZ5E1YwrNYa9FZLyZq9p7TRbwNocMkYkm6djm79qhLrvbty3yBZkYHL2hWDRJayxZcuVccB",
  "key27": "4Pfmj25cFsyVRjtyeJXckZ8s6ojLn3a189PN8e4zh6Z3zeiaje2PxhWEczfQWoimvMYcpzsNLHfshFHvaMyZQMzS",
  "key28": "36BfyfpjzFisetk1ygcZqrFzKNvUTsbB315RvJW2AFom4AhuycQf1yik2NjstzxNvRkUFgLPh24qwhwSEuYqJXuf",
  "key29": "5kHrrSiMvscrscrsX3wJGtWcmg7pxJ9mbhZ9LyciBz8dX3WqCEJ3QFgHAuvoNuS86Wb31kR1AZ8nwCU1LgYHYadS",
  "key30": "34KR6s4E7seRYhtaPmsHJ4L7dLhDbZBHWYLAFfkTiPNVnzrDLAZeyLMDrZrLGXwLas97qQpkQVkwfWsA5FwyrVqc",
  "key31": "3saDCF2uqFtpsVPS7JBzjmZp1A3RUAub7FnwaMuVf2NPbSkU54tYRsQ714o6nJTSZYPx7bSEzmQLmGns5Lc7fCyF",
  "key32": "4RfVNqJ5MeRFZFZnnjCLmvrtXdKu8tGSZDXXG16kLfunA68YWVTE6PSkuBeTw9ebefVZ2oh4cPj94jgs2Hu7iARa",
  "key33": "2fMrFmQrcxuxRb26AbH8koYHdPyAZobbg1xYAKNyCf7dMf6TVyJCK9NbFUCkXCcpvQFzsybAgPA8PF64Vsb8kiTx",
  "key34": "JWgtWzvqohQDwNVmfJriw3p3Lnad72qouDwBvwZA5iazb86xaSwK2N64oVhKCjjMu1Wj767b98GsYaGDB1RL4Yb",
  "key35": "2P9nn1Y5yUzXuubeD6uvMEGLnmzKrLaHZwkgR9gxh69NL57qfsbitwjKvUz8Hw6Dye6v32XasKhUUm6QQEprtzy1",
  "key36": "4Q7GVmE8P7xgfwUBRTXaowPxnHaZEkn9jSZpooMGRGKhwSsWbJbkvtQWa3kuf34bwSXTP4wmRepGBSdgXYx65UW4",
  "key37": "2YKevjoxKEw6m6LLiUQjcR94yXsd5oKUzdcTsgKeUTkEJefYZK7uw633NkpJcSS1WTQvL5Bg8etdjQwUApgEAxXN"
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
