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
    "4SRKRKhMkKhWkMVVrxby4hT7o7THH4xxgBFeEUkYyrzy5t3HsLsQpAYLxFktDhdFiEYSYeKQv8KFzmmqmPnLHGjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sv1QUYSxfgRtkt3tBPDgnrvVvLNgAPjCP6goVkqFZcVLRBHtRXCVp2ZqeyvUhuqUBVqbga3uvDxRgqbDiJ72Mkj",
  "key1": "5DMZZ6xKvaMU4cngA5K1cT4xPDg7v4q9Z8yNZqLayCpRCcuyVQxv54HCKhZisYuDQSjQAaYUXdbNC2ukEbaZ2hQG",
  "key2": "3H7JBrvRraEbbp2QkSZ2ggVY5zbMMjG9sWH3U2zJHZaREUbTzGANZwCnYhFhcyY5gyPtmoMQFux7WqLVdwXsF7eh",
  "key3": "2U6QrVPiRKHo8Gn14nwZtP1Eudmcu8st6jnBXQkhnd7keKLUSV57mT2K1p7f4nv7VU59gw7M7DfVNKSn9YHpmVLr",
  "key4": "4ycywaf5ZDdWHqLcFLSSEAdXJwVjYhvWSjZXvw69SA6qbZ2WczsrXnwHfWdzzLqz7rAJF71LtENRXAcc9gnjSyuD",
  "key5": "WsojXjaNcmmRnHVHVHtgC7u2sbkQ8Tq5h91LcmU52NQEPVVrZ5LdahoWhoHm3t1xVKABXWqxCBWvXs7qdjR5qsi",
  "key6": "5DH1FWmBCpaGQWoMoUNfdcZh6tmURJqP6ia5kVsYanJzx2WZhLQx4af7wb8A9u8W9ashLbhUdhZTPTwTaJq9jg38",
  "key7": "5D3vnxhCBNFKAn14yzVdyo6LvbiNnARMDRkTk9rBDujjX6NNvhCFtQs52B6fch7EBpC62sED5DLqdJDc9EH1cjaB",
  "key8": "5HjdCdLqXExcSSFCnfmhmD6VWAm2dWdTSLqq2dcJ4oHCTZv7UTrVrz3pAxRVcZL4zdcjuG9u9Xfap3BPcGv8uykh",
  "key9": "3SxJ34iyyR7P4USZFgAEsRVc3aMF13HQX1PorK5ZyEbe7SLaokB9oapNjyopbox7qtgs1bbExZedyQibUR411d9A",
  "key10": "CrxeyUHYSzZhtRuJf3pMVB7ZzY3S41AVuAexzZCZY5cvRmzZTyWmpYRUiq2tNsVHz4YtVuQ2E9z32T1kBT6GtDJ",
  "key11": "5xpoKUzhDTrrMJSFTSZemS1DuLjXuV5cRHkACYm9GCnTJFhXFwZXsaLgA3wwLqjRX5WoaR5w14qKZq5CkEYCNk41",
  "key12": "F1ZCkWzrWy5JtWr2MLY4k3sAtiLe1soKMbU27ayCyNr3QEQdjKns3h19kEraG2RnmB3bCRmMHYLV3KMzi2Eu8PA",
  "key13": "3zsSinMUVPS8zczo2DDxJPwgBChG7whE1TVtpAbzFWvqYuZY17CQhLLnKttBuUzSRos24XkAPn9mu9csFaF9MH2T",
  "key14": "5qCDbccpgFvbnkAiN9wCyXQJVkAFZQitH3c9jP67rSMyT8qR6TwNsP11CP1jY9bViyMYRX6nAyutnmNJSY5jwtFZ",
  "key15": "4ofnFGWp2jemj57LRegCWSnw61oP5CnTycPGMwkPJyzQM5JT4S5K9awYrKfWDSpaAXmMRPUhSMMPGtrfNyxPwX7y",
  "key16": "2AMZ5Z9E4Q7HUqkwgUxmmpxGo84Utc3EioEkYbqrbwoQGZf4CxyWLH9aSr3F1WfuZuATD4dC7E2fESoUZ9SBBSvW",
  "key17": "5SXGkpFKrMhUu2mUCfqh6p8cNai9ianpKk7tAx1YkxwJRCShkmdcY2vXpMAw8PCbq5jkXXuzMNXyTkwLL6N2WU93",
  "key18": "5K6G9y4Scso2xzqNHugBjYPb32P28vpk93jeqpfkFkGLpdHQRGJqjtKr6LGZNa6CEPcgZELoABgWDggFs1EG1wED",
  "key19": "45CDRnSTHg7WktNUH9VgfHe38YqPz6Zq24CjNed2BEgnDaLLRnyJ1hSvSUobaDrMiHNKFitFGZGxNvPympTJ6b7R",
  "key20": "52hKqeKHVi6ekoM7kmL7PbFyjMVTF6MbvypQ7XpodNA95drCeSuGDWbZNycMPer1fT7BwGdYGL3pXvBeejSAkFWx",
  "key21": "2x14qXpVUGgcJnXUGYzp2LSSBnzz5eCEDEEN3WStNpbBshhCP1JbTWH3WqntCrnaaDNLMYKgDsqviAA6X33iC2DA",
  "key22": "3gRszFoWVMpzcQjwgG7g9SgRL1nD4Eedj1oCTXLjrRrb5iV5Y77PQvU3quTXJ1ytsANCeHUuE3HujjGZa82FGv2P",
  "key23": "62b28xTrRcfPSWXMJ7MV1cj3SBBQGEZ77dLPpsdG9WSLqBxRLA9BofrLEzSLti9fFAjk19HZ5shix6Xv3cQheJRM",
  "key24": "4qbjzmwfCZJpuaLWNh4pvPPpW8g2TdHpQonNr4L24PemnUjY12s5SNfwDoMFMnwJJwBHSiHeT6ZasDjZLtAjZEUn",
  "key25": "4KJi8ppYb7Sr73BWciZv1YHg8oYxWcArSu2AQ2x69RH4vTGVnCwSC1UWoajqLuzfSamiHt6CNc6EqMENsafPwzX1"
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
