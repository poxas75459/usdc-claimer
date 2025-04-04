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
    "4YCVRAAvGABFwi5FFJeNSQB2QsEtt9tLetVGKQuanwqBr3demTNot5Nzbo7hmcY6UFichdNA4N8RHdHDZ3sDykwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EnCma6A7SgC4VN1FsECFpLsfLYVQzTbze4oPJjpPTirxfMESX8iUow3feh4aEBCtpXuPGrdZGCHd932fWzcB2Za",
  "key1": "5G52oZVt45qU546fqAPy4Cc1KhQzvuVX1LzRQ7YCtakZdo3ZYJMFeeV81KYAKhVC3HYGxKX5mug889WXfNFx8sTy",
  "key2": "4rFzudvQmDV46sBhJ9EKBQhB4yAPwXPT2YAvCiXNJwhYCtoQvhZP5EZiBBudkQXDrJEDze2HUcpRYdS5tR5jdN8v",
  "key3": "1f6M3TgFoewjVCwi485ReVvWVhzWR5Abakki6wYQKLLDya5UtRdkwtjPrYiwecejJJfgMGpxS4DZYr47PKV8Bgh",
  "key4": "4B4hfPrYKvbw5Si7sbjKFtmaNz3deZirrgWhvy4BrQ8QSJq1n6Q3CtzkyvHo6gsPkxCAZafJwP8U9iR7KLDDUWhc",
  "key5": "5gjHhRkJF9ziYySM31L1k8h7xkdnscecx87GDGtCfcDihoebQzur96hBq65CSDAteLYJGH71Sf43a6EQWdPrizAv",
  "key6": "32M62JmHqfH9K5Bmt5b43sccWiwDREMkyVwAHsd6KdJmp2p5eW4ndZVf6T3Bvp4Cnf4egcUDpBXWR6f6WQcNFgZP",
  "key7": "2RxKFuHGaqssPsi2rJFyxPtyY21XrdnegmwxXeQJkVFKHHskDTgRMBxXB9Tap7oT692qETszNDtd2VtkGuiMfNbj",
  "key8": "5jjUi2zKUuQdjERRHVJyo2GB7RrGEYgUiGUhSah7jQQ4p1ZNXFHzNsemmjBD53qRZXL287dGM9A4eb7GmdENhTWY",
  "key9": "4Ee9k1uFUfghF6mkBvR1HtLTuM5KBLhPMHyagGPtjJN9aQEaakhKQzrBJ6Hj7w5rRu9nCkt76nuGufYbhKTvp8he",
  "key10": "4i6NAWyVNKUeoZgFVXEbBFkapcjoaFAYjr5QzkwGs6xEP11mNMgr7Vctvn7xMxLJUywEv1eExdNKMtJLYfw15h74",
  "key11": "444Xa1huTGobxGHXr7pc44uBDHLp39Jhuqphomkt9fxDiJJrAWLUtvV1bvSVbZLEACSBqtUKPxntHKndeC8AHbe2",
  "key12": "5Sdc2A8JDDZz7tCZmD9apWwN3iZA6WZ3kSp1KhtjHqZSinzWc7o3DVSuj8LSARS2E8gBatCEzyTPDMr4Y7aJsAfP",
  "key13": "4ULX6Ziqsing4i57smPu9RJXDMrbnjbUAK63AVh7otuaB9tjx4D1buapcv3gdVjyctAfTU8c2mkpJFcGEjphJsU6",
  "key14": "Lq5Mp22kDbphCtHWQNYuBhkXHxyrYH7duShByhZ67bVsFfCiBExV28MdaXwz6HZqe7irBZ5aF9UMGYuc3SZoHUB",
  "key15": "51PJW36cCRz2tYgk9DYmhLAzWmthaFF2UYt5KXwEY3MDAr69We8wFdXUQUdg4c9NWfvoHL9hnm5PjYKoCP1AyXpE",
  "key16": "f6kWVxVKFpGxAaebpQ81KYACM2U8GvEZsjSLQEg34SLBqmtvsZtBqmxrqr23cJ6q5MWuSKoFqFwGdFMQs8wipkQ",
  "key17": "4Cz9Za3mZMfcVS6fBBJvUKdRs9LDDHGYMEE6tRmzdXgdAJgopuC43zUUC7Mi4AheoKyVfHx43sGmSkL1q2BGqAPN",
  "key18": "2ojFLZPZrZ7VhWJHMqntbugtihfxhzq3pk449CMZGUjGbaU6ai2W2KvMyBK2yNazeqQuXf7aca23d7QprsCGAcWE",
  "key19": "3QZDVHEG1YC8XYcV6miRmUDh19nH8HXegubkYfw4UhcBCzV1r3s4NV71rieBgU4PFEC49me1qxn95j2wthy8xDxh",
  "key20": "5qUDekXJqJ8eDkAx1En2gz3gKB1kWwFEWe2FwVN8u4nVPEtD3Co58ba3GjJPpbUqdsy5utcQeY9Kp2TUqWp7CXuY",
  "key21": "5gJfrgJwTxDrBbqWo1dbXYmRXdsvS4EyAcTWfdp5wHhgn6khXnzj2a6sd6134avBYLJMqGgBsXHDYRRrvYcgSxrK",
  "key22": "3KFQ4rW67J6ams7r3XD8Qqjra25H3ojKoZdDSZwGu24Z8jDpGiDrZ5QpP1EfdWHWaTVY1uSgGgdZb3JsDgzUtc1g",
  "key23": "5y7yeg7uBDxezfosdTiMdCEiBAWp1TEg4NUfgLkhnGPHwMuuFsFsgeLm1XTSGdo6ABz8kz9CMJa4p55YM4Ff475M",
  "key24": "MZHq1LQae2iXf1oYkwFHgG5BwZx4WfgBRmxhQxpC6mmkgsdRKmzmjAekek1VskGmEhXPCtx7tqhgakC1dGMnAKo"
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
