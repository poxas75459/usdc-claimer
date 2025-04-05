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
    "5LA76Y4h7b64yGqGSiWNCFdL7j3ucFCgxPBoypACt3iuxio3BZt68LEiPD71HimNNgQMtnYatZb82G9dqi3DyKmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5gpqbqyMoRin8ebRqhLJMUmaYNwE1Gk3oDsFZyHjL3Fw8X3d8iB4dQiFtKEyRvfxheGF56zbaUFHAn5NLnEQpA",
  "key1": "5mjKv8pCmGPjQG3XLGyqL1Sc8UGvx2e6VcKb565JxoMPK44cxc2njJR7VvJGRUrgvjKNkTWpy2Nxt85hoGK28X7b",
  "key2": "XCEbuN5mFdQCWcuFPjfjw3Zyg8sK5DcC6qvvWq3dtESZUvsJ5KxpMo1ZSo62Y6KBtxicv6jjDN3n5gpzXkZqB1h",
  "key3": "BNopdiukDepuwGJZaVWoQJ23iuGxBjZp6b5UTf4AzJJUCjbhSee5JvYGZBEguJddeG1mJYp1uQwZYDvTmLgJurn",
  "key4": "5CQujdK23nyhxpZmqG3CcrrPcTXFH7YkM9Kk4Bo28NXiaFBGPnB6zVt1mi6jfa7C78mBkNhddw5orz4oT5GcCmh4",
  "key5": "8crj6UuB9C995MmANQBwmHixMxphNKgM584VzVNcp7Nrx3iyQooDyCKoEgDky2tBNZLdQr4SYspB9pdEQAbZhow",
  "key6": "22ASYcuEGZJpAjSwewG7oNPgkYSDgsWFTDmConPXe1ApyEdbiUMDKu18GpD6BhuWREH6idgosoqhSGCbs39Xv12K",
  "key7": "xZZjaXsvSmaMNmgSpiFmXfijSPK7HSQuWBvjwpW5PmR5qbeD7A9okY2TLBs2mYJdZ8FVHot9a5FSxSx9ad1h5NA",
  "key8": "5ufwMxASbqvYmr7tWKageFuKfSsR658Pp8K5vpTokWnSkFuyvgPgS6tM8eRkwSsV8pX1kyVPZwQDyD6XvzQWRNeg",
  "key9": "2GsnFjt8LMq3TP7gZ3GhhTW13pevUbMGP1qqjLxqzxCb6EPtHNznCYSFivaePhdnmZNB7VfZejRBDy5NERuuXPqV",
  "key10": "2e9n5Jbyc1KUiTw9btnNZHhDeox62tN2CJRQWknXD4mGEQWPXFYxkKoxJvWikZxVeoE2spuyKibxMvsoHqC4EcFX",
  "key11": "3sLs9iMAv1uxiT4fQnThrXP1fWtuC19mZQCpy2b9cN9qCdBJ9xNkqvspc8ULhTiuw81EpL7ZCMxNW1zn1rUVJCPF",
  "key12": "4ngNwoMNJBZjJjXeS7U4H3AFajz3xMZLcZJ2pE8ZjCv1XSMiFqipZ45wCYMbiLzdkvDbwssr6vMGwtWxR8FzCshJ",
  "key13": "2AQ5zPfDtff2rMswx1MFwxyPCvwZq6sNmjDfe9gqtTtpz4wpDJTaLQZpfmxkChSjUcsaCXFArBwBwvpYdNVdQG6z",
  "key14": "4HZjfrmh3rdJydH51Z8nvcDqPRywoshTLc6RtDBPPShncu1uM6By5j3bQy8PHbdfsxEnYmLEBuKMvkEHUdLpMwB8",
  "key15": "417KK7eMmyVhkakPVsq66aYEK1J4b3Y5dJoNHRVaajSErfbAS3b9iq3rZKJxMRf1kYdXychHLge3om14Am37bbJr",
  "key16": "tfLzzhG8fVS1gEn2V9qHpZp6EiXXEAqxydYPzrYcBxTg1dSfNp5sFc1LfriMgViwLzqzsVMKfWAzZyGau2zSNwM",
  "key17": "4eXcUoadvRfamFnhdNb2tYU9M8jzzb5AphD6DqoR7p3LAGSGwduAXup6yHE3dQMYw1fGdLSoyMEjKMvkmy61sYPy",
  "key18": "5HBd7otjkMSeUCgwT52cxifKgb7wSLLEhERQjXcioNyKB8ezRsmf84A3eMsJ534V67yCR2JoucxQwuPHoaW7MybC",
  "key19": "4mfNpBpPfFNwpRpeSGhtSvoqzoZWpnwSAnaRy543zk6y3Hskw16fcRr1LsnZmzWQNZrDJB4BvWT2RYv1STmFCuac",
  "key20": "dTutpgmDovpEJ9GNLCFyMFtH5FDMdsCBdTwje1yYxQnRbBHLvxvJ6ZsD4EEap3h1AxKopkyRQ1DZxNwwGwVBon1",
  "key21": "5G1JbqN7utjry3JFgRrYjwvCFkY9b9rZGx7nqoRP9pfwhdeVmYs85TWu9emETmgPWBfKLBbUy8Jnjb3JhymyFkUS",
  "key22": "5RxfUTmfb8k6ZKnJMdgpN1ejUpPpNH9aNMrZBoDUqjY3eTYHAdBEmZ8pdSYQgdDK2ZAX2GTfAKPXFxJHGCGTR4pD",
  "key23": "4F8kGJLQ7BNpJogpFFWjezeJ7QT7xJAjWAveKUYoDEfXHXaj9HPQSZg6A84yQuPNDa3gwctdGAhKGcHrLEb4k7nX",
  "key24": "KG2kzbxxC6n7qEJXvBhfabwNwTezs9ZvKzBbsDD8iMBkG65qYAuan2zhWUAMk3ZyJd65BzZ7aEF1YW73PTcCUmX",
  "key25": "4s4jT4RHG3wThofaQA8UbV5mYT6VpDSMUTd763C4Accrn4nNZcASnV8yTpFXHmgMYcWSSnaRVVru8Y5kN7pTeNix",
  "key26": "3udxiRjwH1Hpn6RrsLBBwRW6uDZjjVxBZ1gSZfjB8TFGonQp9zmArupqnYKHPpt51jBqvqCePMQVo5VQG19Ttdjy",
  "key27": "4rtVw8JhqGFFRa2DVrjUsiUZHFeKDM2YKMn5w5TcR8EQvmSQeSsYCWnh5XM8FYv2Z24yBVZKV4AiKV8VH1TdGUdS",
  "key28": "4K3xtJQHGsrzQkuLNfaGTDVFKVrvtjjvcVU4Lev6GKk6CmYpB4pMDnwM3ZDVu3dpQ3EcLxX6y3znmXgxCuASoxFJ",
  "key29": "5DvKf7kdyLNhQtNVWNgFth5FiUtvMD864hu56aXPyRwBb9UadPZscqqaTpoVoxuLik5Be6N7zaBWVj7Qp3gcHmbP",
  "key30": "SVK3awu4R7fjPCnDyaZhcqkdJtvoAkhudDsTNsDUzZm5fUd8KUWaEcJVGnmCmvpCci5BmPVsEjXwqrCToKaB73M",
  "key31": "5FjD7AG7MMt8GGKjFFy9faNeJ4mLg3cWiEfkUkVaRNath6QrBUvwCXuDneE7J9RsnhzcXfn8QuTwFBByFPMFZHfu",
  "key32": "4twcjE71ZovYbKJVPu21RA6sFkCfcrhi6c7VqR6PVGwXSzGviTqejTPZPVmUPEvngRjZSprikdmzCoBH5di2pxKb",
  "key33": "3Lyhfv9ygW1AtCzxewCrZdMj7Hx2Vuq8CHcKd5feW29A6wurEvEJVbQY9s4TPH47hoLTfWFSQf3jwuQe7BHVY7XJ",
  "key34": "2F7P9KvyvUHq1tEEgh3Ku8z3RmLYPNs74GBjyCAgXyAQS4mjhHaWFTkocPVd9TXnj3cQ2RHkJYCd2fWp7m5LRLF2",
  "key35": "5z79woLzJEhFNRQudzSZXKFjj6uwEqThb9dhWjBSMJ5ZJ8CEdxFfNHxpFvuvW2wfnMm4MLEXdiL2NCY5LeqeZCaF",
  "key36": "AjHkLh9T975uSoWghefp3oURS5G3M2ZoJVouz4T6zAmE4zetnUYfT4mKKruqiFokdiu1y4X1iNiGX8v9rJb1jqL",
  "key37": "5Zybkurv8PF2gD81hTH6SUCMR59nL7JTpBJbtd7M8HG3vNLZY1CbCPoACpQJf4LdbfCUWZaivptKrEURattbWZzC",
  "key38": "5k929grmWY1JntEH5pyNoVmaMgaB3w5AHwMwLWpfUvBbKPmUDqSSq7FZ4is29N2zPwDwgayswZLE5BChkVtkabes",
  "key39": "4aipSu6tmxdFGmAWg1eqFCJRmgineFYu8ovRmqHZLFTfPREfRGDyNfdxw7pZgwyia8npQp7dPyELhAdsrquJyqDL",
  "key40": "4BruwsNrKTXM5T2Q67LNcQ6LMaJCrSWMX1RWMjsyBpTPmnwfxT815FQaKbeNAmG3haJZzozwpwVQ1Zo5uU82N4Ft",
  "key41": "5nPvQUTKadqVyLfdNx4rqSAJffKYz2hWE4Sv8CxrU4bm9KKkz8xoBsWYUzdi7UdMaHCznaTVndXrF1iRxFQ4u8N",
  "key42": "4AqZkLW79xq3ChUsv5Hkut9v2z6QeFmkpoSmzpwfnC7PcydZLfPUMR3qbthBnWv9zw1FnC221mLFpZzE7EvDds5i",
  "key43": "5HxmFWNLPw1n2foB4iWHmTDuT1HBF2zw7RqreoqTLeQwK36uV63qmY1wGNeSbihyFLEACnkGkKwUGsprN6f4xTri",
  "key44": "4Efvb5GcqetDPqHDo4aWXkarjSZThT3Ndh4yMZk3Mfuuc7a1KKYMGtm1ByUuZNDBchV36WhyczBXEUAXk9JCx3Wq",
  "key45": "2nJ5fQisMpHJobcEENKketbcgfEM9Jbi5jMVdhNfVZNNxgVa5aje8G7ghXzq6FgqB7Ag65KPE9p17V5ZXFeezjUZ",
  "key46": "5SoPdc55SgNzyVKyh2v4QWc9Z13a3XhMmRz1DXfrGphvar8Y3bWdqsMamcKa2Tk4Gj9ELY2tyxhsUU1puUyLwhh6",
  "key47": "37guPcfyiq9omybG6rteECxkjecoqnDDVJ5USkMb1PSQhA1nKJjg6rBi6Heb5GZyWanXHUEqVLKKMdBhMHNWGrPv",
  "key48": "gxguLA5bhmfjWYkDaVsZeqtuhw3QG5kxEJrHxWrBQddSBYxBxsA7NkNxSQzuHz5RcEmKSock23Qv1VwUpwF5GRN",
  "key49": "4heQeiR5wYhT14bogFT5CACsp7pWhoQhzGpyF1gn7zcMG79LV5sCkHuvUZo6CntUmJLiY5UYNJM8k8N8ngqT4sve"
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
