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
    "GF14JP2nykgF4mkyzCx2QYz34JWgaxADh8q4SwCtTQPiAKwMjvC3tu7JBYZNaKFnsFgjTYAcDgzYBMwEMeGNPWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49hkAUWkKvjk3iwqU1a2VVJ9D7Lwqti4TnWCaPKttpipB6ZGAKhuRoEqWa44EvwcDEDtsbkNouAruLzPR4wYBh9",
  "key1": "41r85dLRXwzWFtFtdrGm6yo531JEpmR4qt3dPo1hajfMdnL1rCVNXZc6d4ZSL7GUS2hV1B6HWhKVzKqDbKukyUS6",
  "key2": "4KG3zPPAbujr1vqQfxfTYJLDkmMbtmqDFZ4xFm4gv4pCikMHtAZbfeEf1twHQGXfsCQc18Afg5panYK72BKZV19L",
  "key3": "5sMYiBWLkjmr38ags8k7nLVjx9Ytm4N9YKVbJzGu9LvNRUa3V8dx7rf9pM96K9YYtntXJZf2gDx8A5i9tQYfQzFM",
  "key4": "5eqpngqREFPieqy3Lj2jxUChn2DuggEFgd1S1Gtnt56HQJtErykABGXNPanoTzLro18ZhuzBCDPtRR794gKoGmP8",
  "key5": "5R5nykLzX1vDiyC5F1gMvryk5M4vUTyRJkb2fujdcMB1vXnMjHKHWTrcEaRe55HtAfiTTeTEQsr6b67sGMHhfQSB",
  "key6": "3r4niSRsa1GFgUiEsgoqYiikYrHSNYfENg1mEoYUuPYTtjE3gQzG8MGZuL65xVbLkgga3DmQjoeM7Q9PzLoPEn1C",
  "key7": "4NkcAGKWUvMS6NuCd17rZ3AwLAVC9f3UiMjvSFNvzFT9zukAgc1hESkX4Wq1aTJTbqdC91iCccqQAmwX8RSxavDy",
  "key8": "2w8o8YLsFsZwA7r99DYkAnppfudhQbWVQs15QGyw2pBiRmzfmHFdpBFqEVCFry8CBfA5HrhbN9KWQ8VCVb5c89Y9",
  "key9": "2FckRFxVHUwscrdJADSRiaBtu6kqc8qNugDhtVb5LdY3Q86bB8odpdHoHxuqajaDaNzW6JQbMLV5jFS1LzzvwUzB",
  "key10": "5UUoXJwia921784ipHn9ywZ1LCzAB5Ax94RZTUEUnvYUwNskyegUf4YQ4wjP4tidYFUWXmhtj4QsuqiDpPCwuR5H",
  "key11": "5stPjgJ7WqcTe6rAeqSWqmLbt87SdK6zdPXC1SU1U9kBkapZ8zCYBp4PRHuHAar1vVumKx8tB76767HjFppRdWBx",
  "key12": "4Nx6Z4E7b8spbKmqmEqNCXgT7S4y5EEzs6WNivRUd1at8Wjdtg3WCPqKJ91caXhn2VGFKWA7KUQ2LKvs8pVVcn7G",
  "key13": "5Su1apkp4XdeVixntwqubs8wrsrZcaUHcAaCrbSgv5h1ngLDNLnj7Rxb9mhuujvaVbP2qyQCdR2RHbkYuYPGL1Ay",
  "key14": "3CU2X3uatCE52QFk2JRq2GnXntuvzxoKRUWHvEzbZb41RqHMbAbiyLmEFk88wgdjxUmsEDeqtR7EhVLK3Kq6rWnn",
  "key15": "5oLADbVp9SEfbr1woGB5AbMSie9Jid3uenLbfzChZNsPLE1PdukEgYXSSWCarZBRmugA8pCpgW1KVYpNt6pG1VeV",
  "key16": "3oj5y5zGUCCW7s3WYCY8xUogSFrNy7sDf1wAa4fZwf5rTA3UtbPSwpTzJqLXqNuBFmj282iCN1pqNV1e3n1C2Rwn",
  "key17": "5o45NLH66MsQqEWtsp3kWcf6YWFyPP74aHmFKjbEKZ7kFyzqL1hDHgKpHRurKByXy2xbL5pjX9ma6tQz6vqdT8a1",
  "key18": "HrpBEHkprN3UgFoWkNpxTY6mnD86MaZwpq6oTQ6WXoLgAhWg4dHUcpbwpVqJAosmy5H8DAzJFxt6MSfJLGq3ZXW",
  "key19": "USANeUNAyGU1v4WX3adggbCwGpeo6gzuh5HBv6h5dJcwAjJkEpem8kRW49yZHKREKB8fpepdB9mFjS76WiP6zvx",
  "key20": "fEmMFRVarwMS2ZnuRHpoPCs7LP5VuL2TLJCjv6yHq1hrVsiDAYnXSophxyocWJQajbvagoqNmogZG3DtR4eK5q6",
  "key21": "3ZJag27xQcqfrtPKrvrbtS7sZsv4axkHwhsyDHH3rHmfTZviZzQXMmUP9ToW3fEaJZ7SbCgR9o1xMq1xi9ekiAkj",
  "key22": "2TmWNTq3UFytcvJBJSRx1bU8TBmNn4sBqxKbdwESnC2s81RyALD1mZC4fTK6tWSESz6NP2bK82QfEJ2ntpqBKBG2",
  "key23": "b8sXMazSJqu41MrFEumtcUwAp1DR9r8SGoMkxFKxi1tA5Xcf7XJFSJqmyt6xqznJ8AXt3uEva8V9cbTEsyxButV",
  "key24": "43bNfQikBXQfDj18NdynXa6tYqyRrXzaemJua9rJSZhATiDWJLWZ3RtmmQQH6zdvaBkNThdSjpsnuDu17XuZ2jCA",
  "key25": "2BtEsJjkAGS88uU3TjGCk6N9NRDmhkn54es28uqRCnf5FUtSkKjmwVA69Gc4f47rDrsCS4q3RhmGjDVBriXiFnua",
  "key26": "5irzoRyAdzo3DKBhp7p8utJhwUwPtyNMG1JtjxYLeHTKzKUX7PMArrznfELoTE8XwzkmGvimeZjyXE8Q2KCPa2ez",
  "key27": "3afwmbrkeHbKF9ErtkzQKyBTeTRmmJSSr3fHYX1HAQxKTyaaJDgfR9MUdrkMjwRX3HztTsZC6U6Zx5ZkzKcReM8a",
  "key28": "VPQ6G5ajwsJeYT49kYT3PwCqwXFyikmBqdKAG89yD25hBNNLuyrd5BH2Lq2dLzHrR7WzvjNZSWhkUvzCsVK2bZX",
  "key29": "5AcdBUo22qHGqpiUMEzbh5FwjRpcD1H8MoFa5No9cSak8PEZ1Qm6aYxdomSkMm29GFaxka89uK3kwYg6NXdN8Jo9",
  "key30": "2kMtqrvu2eAkqLCZDWRQ33vNZPcKY3kiQn5WXvezE9ycWXAw8FHWK2UEYAFjh4T3TQQAsECcALJpboMRC7pc9S5R",
  "key31": "3HsSVzCLJRfV2nLN6mCF3RfvrvBEXGRBhZnF7pzSjffR6VQMbCLkADvpd6gfaKT1VafpX4xuKnCkGpZTpxwTNtTx",
  "key32": "3vGX2LiMouVhdRgDs2MQVbqZ8vpW6pzmNbdufmxVXA8Ys2M1io2sLifp6aek9EAJGtt4myhxdbkf8p95daomjDsx",
  "key33": "3J5nN7rkAXdF775cEe1V5SnpayEmTqmyJrhqwDkjP8CbH9QnzWof1yskqe5WyQEfBrkEhVpo6spKEwHaHoUwEiGp",
  "key34": "3ohhuxXVFJvpzXVo3nr9BatViPYhzSx3E8RNvXF8CQu3T7nsvfSgmm4K5wourEWxQxa2NhyyenyqxfXYnFyyhXpM",
  "key35": "5HRCWpV4MBEp64WvKytx92t9vE2Zy13rBHmeRStBjar5B7DSFUAQXB2tEzefu75BGVscsJdcrYTg7B2uWiGr5q1i",
  "key36": "VYHurV4EXpoM8MaJ7mvwJ39kimjGg2SMfcJ7L2DWrzrSJRhopBZY4TspiZGPDT9WF87YUHKgWsiAJJMLCSJP3Es",
  "key37": "4g9292kgWxGiD8jyUiX1sKra7PAbhYgVjiPWEYrym1r2oWANdbhFqehmnRwxjAYuMnPcFoF7HdQGhdgpA27KhE99",
  "key38": "3cWyqaZ6FxpaV7MM8LmHeuoLknv9CEaAeH7RrSHxDdXYpgRZxetoiwyubFLFjBKk2x3fdUtRx1gQXsC1g4FjUjhw",
  "key39": "5cFmwLnRNjpvr3eGNHcExZ7Bss2RA1mXBZWC5mwTwhNpK22bJfNqs4U996FwSGEZHCPwsrYqaXjvDaKcfHyBeTuh",
  "key40": "5r4drCrLzwTehsxSj1N1kUBbUdB6W4S22iEyYa8fXr3uYijnXRCwn1i2LZ8bcE5s8HMQLdFpSzF4GiKMywn1Q9rd",
  "key41": "28MnjnNGWfnYpWpG2VTGYdmWbQShFNDUiJu2y7TTu2us95coXg7VApwZT1rigGsotUR4aCpLGsT3NXq2jDz9KruU",
  "key42": "5wr7AKUnDdYRZtkQarQd2JnNLcZ9F289p1tdJ1HFENVGqNtJtkercocpodwucYrDCWvK2qhasBYm7aBBJcXNmp2X",
  "key43": "2RuhgG8rJSaYMFSbqpg172J8TUggoNc13pirP85tRCBd7DzHoTExC4jcdqhc4qEYnFuvmGPuPrKqBXcaJdYFdnWm",
  "key44": "4hWCSv3XVPnQCF9stq5bFj2cjtdKge1trzNJbV1LEkfUED8cedz9XWutBS4hh5RbHqGgN7QfCmuk54aTomksUMSE",
  "key45": "5jXf3iL8rEfFqhJ2Pvm3gQGXoZGcqN9cKdfVt7iVi4LN91SBPzAzuGzaXnGWEkbHiEU5JJ3EWiwmTJpyFtsjoHUZ",
  "key46": "4NoyRptyfENTFRhfUSk8BLXEXzozpgem9wYg9D1FWc5an2LtLpGU6bo4GjVcZuCLGbJQPkyNKJMGbKZcupvC7nYH"
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
