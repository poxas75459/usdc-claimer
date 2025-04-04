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
    "5U9y2nngNu4y3LC9vFG99RMnTBy7dxfANJTinBVPzqy3n2Aco1K9iv917jV12yxstzSbHqy7EJvy1RvP7R5UgoCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLS9cbNBxtaLTq9F5SvmXd2yjhmBVFVZjuEjNH9qSaxjJnGohAxNDFi5b89Y4Vyest18nGjsQCPA2bgLBC3kvVs",
  "key1": "bsbu27zWPEnPCRTEbEszvH7DPcdEnH15brcFkzrbysFAyrahNnav5VFTshzttZee4kcbLMjAsVuCZ57TyxR7b3M",
  "key2": "4XUjXJmwErYF9zPJqtVh4TgPTpDuCQz7fbuRYawLFbALSDapXhJkr7mSaqXUD875i6D9CcfmDCfZjMs47YSng1Gk",
  "key3": "3ZYiGvrstJb1hJQywWWWoQfgDfgs556eN81FZmGKyPyZB9xVqEMDgV8bqgGSuJM8GczAR9amhAUmAvP6hx1xeKLw",
  "key4": "3JoCFP78uk3bmkovoV9sNphaX3e5JoQwG7stCqKcp4A37Nngr8Z3myidx3gecoDGeM8AwEM5ZfCnq27veram6xxc",
  "key5": "36iiiBfW1y3McqpRSexzwwK9MUuVQB18Xjd66czTZ2ocSDiaS46nsoDUYyzn7eTYeodmK8ZG5SUeeFdjLQRvmBXC",
  "key6": "2CQBPYt3g1v8DSq6hFXhqddxLgt5h9USPEzpzP5TqqduxRPU4eEP72i16Jitky9Sm1dV1x8FNkiBF1v13y3GPiZv",
  "key7": "2zY1rdFfCjnJp9sFXC2QqxW2ixrS18K44BBu9zQ6K3zCMT92DxWhHUpomxv97uPgfFnAednTxHPyo8NB7T3nrcz8",
  "key8": "3gKzSnTsHYjHaveoomU52jT2GCWrwQoSXiVxLmuLYaT8FGb2D6PhxLqchYpDHypVnZbWw2K5fujHLRZnjvF9rcGB",
  "key9": "2y5hQQSnFLYUvAHr58kxBNDm18MMGDx9E9v6bMb2dKwTAu6JRizvmq8sZWnQ6n3CdgBhQ83eM5zcJxf6iGkcUgbU",
  "key10": "39C89oqHimDMgzszQPAUaVTbpdBxYEiANnoWfK6JF2zcWbVgmuxUSsfsYdUAg5pDqxscjqWy5c1S26hJsbG79SX7",
  "key11": "5RHZnC8hAfHHSDgL7UCah1NgoarP4y52kP98sK1Zs7fPPqW7W1ZegcgozVFhVMh9Rvv4kdkK6FKFM6L6YQ82YUeF",
  "key12": "5SZSrD1FgVFV1acMc3GtgHPiLZvdYNqdGBBqVec2oFzzBJFKLYowLLV8J1WFdrk2NuaifQzDkHkk8f89DHyDw64S",
  "key13": "5sV6VwanikiRYaPRZw5ZmgTUVegpb7dUWyDaxh2TkdTP9zVdS8kAUbnVw4Q78aSSRk6agR4dLZjPaXQyLsAAgkRr",
  "key14": "5pcKRUP5zFp8E28jdBXnXPG68nAuUJsrbzDduLTXanP8zEWvAgXNtcPhH3kTdvT2t1bjECYPUCZa39jtpWvYHoLy",
  "key15": "45b86VAfkoSgHJcotAB6u5SocCy9S3FvCVQj6RWBT8QPrZ99HkpNPshPbuScJVStU81wVh2Jsatt6kj7F9w8cSi6",
  "key16": "2Xc34nQenHjczg8qdA8PHPB4Li5rKrGD27a5zpPhhQYfjgeWuS1z98QmM4Pp2CjpenPGPtRURCENmZibTxcQGQhG",
  "key17": "DLj249w6YPkvTTN8dVggmuFuho8z6WTLczp7qX8ecoGKwDA9Qiav86kVCDoN9Pg3gkmba8Gzv89jyLXtXGrEmLA",
  "key18": "tKMHfyDbCELivfzyDyQnsCpof3SfHfLoGprMoci3ordrvQ1ZsMztDrP8pfgV89y4WeZNnEMEvRJfmope5fmQCQz",
  "key19": "2vKFPr9ZmhTX3iNRgrHxnyr91tkHfPheW3uxXC58L4ULafwNfs44mzzLjWXmjru6WLssi8t3cGXYbtcphQm1jUYJ",
  "key20": "5rXERzanfsrTFN5DWpQ1n1w2YXkcE5oYREufEB2pmxopMSiuc1Q38zxTRhSFhHtz82PSAx5dqk5FXii15JuhqQ7P",
  "key21": "YfX1KZ978JfLxUoBeG46tBwP7BitoNj2TMjE5qEcWW46kindemVo8wopgyPLSDzQoUooDWKWSDb5ZiVPoLkjwkK",
  "key22": "5bhEZmKGgbZQwPAtqyrS5qUXkirSRUCpLNNAU1v1Td1n6ibsG3Fp7zFLneH9b5vW9d5AkPUkhK3e9cfHsUHbwRD1",
  "key23": "5sekLvrkJQkRVVmye7Szh36QYViwjqcB8pUDES6jpWSNgybS83NQrCjJn9iRMpAVza414G2Qt43JgYYs1GwepzPp",
  "key24": "s3jgDQSyEiecZK3Xw47YDMornxFh3n19VXeKuQnaDLAuxRWJiA8RkTpN5B4XoyasviK2eCaCBFsyrz6RkP6LzDP",
  "key25": "2ovGKWtc3cUYSqsi9iTB9jqi2jmGtBbEYzp6T7PpKiFWS4tVWiRRV4VatHDNLZ9b2RQZeSYCDGuPR4Qk1wubsqYy",
  "key26": "2T5eH7Grf6bDtsM9RDDvBhgk3tfiGX8uGD2zRuhzGgngKs2wvNvERTMzWCtHtZbLBQ42gSSr8nSHHgwYRumou8cD",
  "key27": "5e3t1MQQ9CJeUeYmWzshH3sg5mDZkUMHEdGT6anF8dDxAt2gVqhkzQi2hNqZzF4R7WSUjiEewfw84xXuFzn2t5ZA",
  "key28": "3EYe7xW2jkcz6aQvc5MvrUvZUhwHjL226S6wHHUSiyVpHyACy62Tbdd3CrmE77meeTXQzTZNHqfhK92BnnoVvbj1",
  "key29": "2N4SMkgm9CcELU5zcTtNxirj4op2teqB1ZEmCbRJE1TMwxbNg9JQ6mJbHcZQPtaBiaTRRwv9NC3KUQmdkHWqTZJs",
  "key30": "3gdp9pnnQw62auvtYrrhBh6FgNqs1B1UWh9ju3vki2RxdJdEEcaQcWbhUW9HN2coNUBPvniAkoaQUUpPAH2Kniqy",
  "key31": "5ZViaotB1LSpCUjHx4XpMpTuUD5WZkwUcESnPuScbZxYHsYthqhKxymN4rhWDujwvtRV6Avb4heV1zNobHFjC61d",
  "key32": "5Aow773RxLox5WtAzFKnHaP94jEd5mjfKvrdd4ZALfk3hWkW9ezjXdG4kY71RmUn72JMTYniq3GxCkvNZoRSTSUe"
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
