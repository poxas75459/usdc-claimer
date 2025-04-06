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
    "pGzp1yb3WHsBNwedbp9kmyAxGxzEo7fMe411B15VM3gUUqnHy7bhGqt3weNGHEW65oQJ4k57x6djwR4W25QiPTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UvqsAHczCkf5MddgwUJRmSBxKJQTYTwJHzB4F7p7QpNntAmbMxADHHrNcRxst1xtyxSCMtscF9JHWvUxr4or2HN",
  "key1": "5dBx3Zit4KpkSvf2fRm23BtRnYBDeoZNm3Zs63o6Houhg4hF26Bd8x8ANpLnxnXZk9FSrjK5Go5d1bCwof12nR9P",
  "key2": "rdHAuFFUvN6B9G9BpjJS4TtFLEvEuaDAWh2SXvMNGL22SBpGmq9vD7fsAQgWd9cCFFvkDgCeLBdsU5SezroDwfW",
  "key3": "SHrqfM1VXmG6YyC25MrgGyTXwPnStQtuYUCz9qwvEWymt1ojpcdMog3PUEMsdsgdsZxfmUigPu3n1vJxpg8eDQu",
  "key4": "2f9NDREDs5m7fq6k44fi5Tj2vruVq3wRodF9VnpdqvATMVEKbg57oGim3eTQpGcaTR6uJUkQwSmNpXg4fiet4qAy",
  "key5": "1gKDMUDjJUHLBH1mQQAwoDZLjqH9hU54GHgju4ZSD93CJgcLH93JVyL6FxGjS4t3CVYc6i1DBSwBgvBr5gaLUZZ",
  "key6": "2zMpyH77zBSq4enNtyBuCEVRFPN3g2zqJaXoMCA1ZASfve6ehoKEXSmJ3kJfL5J259tWBhyYKhekfPFvLe34Cmgm",
  "key7": "3La2C5xaviVucRNj5kcSkY5K9JhR9wvHncPNbrf9kFEAcWfRzsJBXffeDVtJJJXXuisBAkWnNNr38mvELM4r4uVa",
  "key8": "2rEJd7yjQ3Bo6LoAJfmsbhPgP3d5cSmexLXWoaCLUmaQNCr9Upn6oyXLtoRmmdc8WaAhJTNCAbAhRN1FkLHs77AA",
  "key9": "3jy4aD7thnKMvZTZD9kA8N9jUVBg9hCqHnUHXREVmHh8druct2wb7kXzaVZweERXHqAwS9iisTDkgYyZ6jXfG7C3",
  "key10": "wzUNfagoqxfmq773SBFjaiHTStRrCUhs7w2xb75NhaNZpHbiXQ87ZBL4npQx7rvtNzTsPzdWRNUHFMSB2i4STj1",
  "key11": "2wGaS1qg4qhiJsQzFntEN2UteuSTpAp9CH6KnjAj7UEMujRC7WrK5DBRx1KjTfMQ1Zhv4nMbJsLxeCmUQ4KTLj6A",
  "key12": "345QF2Kn9GTjwTiRCLvRzCNSH2hAzfWWyfaRsQRcVAWgwFMKcydCGUKTMAgjKP2fnWNjcjsXyXs9e3Rkqkk8ueox",
  "key13": "2G5Vd6YxkphBEbPwmKdktn1i9sfGSbXNGVTL7YrwZ3CfQnQea32NH1hU5subeob1UqthNNu5JvEkHKv8HCRMGzu",
  "key14": "3ByLAbMvZ95oCKxWqxH6kSx2ojNfiZa1x1tMMB6qeo6XwnLuZx88X7rErryz78zdH2U8XUpjbEcJyJhMA1absRe",
  "key15": "536LKdn3Wjtui7pCqiskhxEcuePe7KV8tkFQT3WLKqyiEom2tnwJyEwxCZtexDmhDrca6q5mqx7xaZkdZCMcWXpy",
  "key16": "4iEMCypoYMqyyQ1HykYVuYG7DEzgkNn7NRHsuFuiqgfpDaAVThEpPL7fWUUvgUuUUN7veCC5ULiBG3WYoFDtFVLT",
  "key17": "41LLYbgQcvF5Gddo8X2GK3DXNodmSUUNaUTUmoS2Xp3a2v9BBHtoZgFq9yJy2QzE9LwVBPnY6Y6fbAL9HZw138CG",
  "key18": "49FN5AZd6WdJ6cUcx2nAee6MeBkNSaz9oEfyn4qj8kPsztVK8tfnFRpcveSXpMKqpWsJZftYF2kC6BfGovwUCULL",
  "key19": "PyMaiU9rvv7SBaLnpZPpDesNKVeTs9QVWXysjGbkZTXPhsepbzUBMkyE7vQXHsqWK4ZEgxfzsxRDxKxxoF7WXff",
  "key20": "37WJ65L3mef1iSr4H7uFwGKrWZkFaxDssw2pDtUZpyqLiTcJaMxtJgsxPUB4V1QN3GihS4AKX2c3Hmq5KDNEiVXh",
  "key21": "mnXCXaHEBDsyLshL8chu9hxxjUmiH12NtVVjyudpu3VnLzpTVqRxgmRdDM3vdrsJ2uqasUcLjRfRZhHxdjyVQqy",
  "key22": "5jj1VYhQCq1sX6PAtycGe8cH7zwcm2VNBVUeYve7sGfV1qAcT71QfuZowHYsxM479PrLVGTem2n2HWZzcferoB7v",
  "key23": "5t4YsiZWp7eL6n6vJNjimpce8p6JRAHv29tQ5iThsFXJwkgqnHiPiExPFLANk8Uibt2v94caXsdZbT7m1AXWjR4W",
  "key24": "37CSS7nGXdWu2urZh7ku5Xb4Gf2p2Q7jycHU19gSZexrwH45DTCSCjRF6FYVVzXgSW3ryp2suztkwFQbgwaaBSqi",
  "key25": "4PbpVAqFU3hDWQWu53BKc32ghotbGsz9L39UKKXAXCngrWK8x5LR3xboVGJYWouJXNZYhdeMPvHqtgJ3GnMdMZTM",
  "key26": "2u7EjdQbE8qfBUzZCsvgn5mjDAEsvNLshGXF3YiC7cNmCczqFGWMmKNyU5GDZpJYftattGqojKcPy4fmHomPKnJm",
  "key27": "4vXATDtMohfYwpzQjc1YY76aZYndr3dxsAGruUPf1di2M8u7AFeJXZn1TW3Fj3P7bCXCD12DLUsBjuXDyLqwpJQ9",
  "key28": "r7b7ykVQF7Czy9tYuXH9hiZSAgB4uq1kWgyDLWKLKBZUvEtDGe5atfUUyD4CqBYma3wVmUPpQ1Jx9ov4cQq8Ppc",
  "key29": "2ecM5TCi4kqo9cZNfgHoBxR3uyz78V7hXNhEDt8DnYRCb7sV5pduBfuYHZL7NYumD9rrwzPqSgzesf6jT4kHjotv",
  "key30": "3qtKYpBn5n3d8r6LKkxbWr2Pv7eN9KRQxMbqiVCsBw1C1ptHXPQyazRzJw8iCMPyFeSYdt1UC8YQphwdyusBZ3ph",
  "key31": "2a1BkZacUswPmGjY9ZJaHLxotJm1MAz5X2E5zbmB4ffTdDDV1XA2GZdPeYUQ6gUWkAYovYpQ8b9tKPJ2gDepxrSc"
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
