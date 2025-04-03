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
    "C2UfYbMwJiRL3PjYbTPX5xSeu3YeyDiChYDg1dJ5gK7CkCRCy7VgUhYArdoJoWPiCefEjBhmQtJTt4Ek8BjgMgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAgygpFtmmdgwrP7jzWED26ipcd4Yku6ULNXPoPBHvB6gz6yaSQ7fh933e8ntLgsETxhYmPFjZypxLkm6bJniNF",
  "key1": "4MfuJq3vY2puXuTKEMFXxr6K7pwXzqBkH9JbWTKo1UYDdrsJtARGMuvAEraaDHu8ofx1pXf1atrPyYj5axRF1fKi",
  "key2": "5nPjfB5LAwxo9Hq74E3qWFgqqGi5AqNEcp8JA2s4bjk2NdNBASjAhCeJx39xLcQ117cFEEWE5dW1a84ZCQjKkNny",
  "key3": "4gfyTRLxU6uTnBhPFeic2ZroLMqgzK3t6A5X1HQmkDS1mU1Ne3EdU3qE3dHffNtUPQhwQpi11nTdr8DQV35Mxmzf",
  "key4": "5AhvJjBhebJxYfRL4z3C7BbzpsgmdMLQiCAPKbGmqn87M7JhU1xKRsjp3CawKnhLWPToTxb5PLGorGNTizVkevf1",
  "key5": "3EyrJ2W6Mxdw7BXj1mGfc4xxUdyKapaCA8dVibCt9nHt369eRqMNZncq1RzkY4GBgDEwNRhqeLdMFvipN2dFCUhx",
  "key6": "5DZBeseRgPVU6tsgPKDfLeusAgbsVzVD95wfBH8x3y36ixSn4j1bX9u2pr5EHHpuWKeRcTVbxsn7VVySGXnucQht",
  "key7": "3jVn7z9ncZ58D5e5bhDeAPbGSoE3ZfERxBVeQXSZzx7RxLhmBe4Xk8hSBi9eM178AYK1VDpFkWHbMuzQRg1Lx78S",
  "key8": "2YFuhqMq3n8NFW3ZTko94BBs8RmUwhX3n8sPAoDmpRYzPeZZob1QCWeYxyJsbTmn6y122NtKW8iEZkVt6Magfp9T",
  "key9": "5yogRpmGAbqG4P92pqtHGBU47UodFohLD3D3GUyu9vVtUcJkrvi9yVXFHE1Sk7n3R5nrLtrSELBwH9q4nfbjz79Q",
  "key10": "4uDPjHQuV6VQnoC7ngMF2ML3H6nNUtUx7Qo9eJXRUU8eHmhpPQtWGdNMVDmSCvkcq3Cg61jy9ja7gRLttciEdhM7",
  "key11": "7UxMTrW3dcwPdKYPCEQvDeBiRBf8jbFXPBYJD4m8UuVwAs1mD3dN632GCVor4q6REh2ADaeZGEKcWBbnXK3mBwq",
  "key12": "5D12yyiYLo5mAEjTu5joLzkG8UXuFpAhKPNqAmDuV2fs6UCJ56RJFRroD6CKPjt8kqpZVyD4eL1rXuT7bx24acj",
  "key13": "3faa8vrYpwyseKvQcjunCXFFRocYUupkVTAi6d1aRQ1RsnddNEeR2rpPwzepNw6g1UjQYJh1b1HCvWDPproEx7Nw",
  "key14": "3PvA6GfPXoPu6GqaBj6FT5D3g8bCyeBanWEhuSp5BZNVVdeEjVxWrYBV5hm4UsJDAcsEPsfz5aGgM2geMGTrVc33",
  "key15": "d1nDJx4ivjg5zShHe5baeawRYeEuyyfM9oWghnkkqVFiV34KniFwZf8SnMWV8MGNKYu5cteCJWjCujnKFnTiq7g",
  "key16": "t3fydgSMiUSR11cDrR4goGL1qoaUJJDPPAYcVqwWf1soiXNLpnUBcsk1Zv77QdanW849soNjtfbuagt9c2fnrcT",
  "key17": "dmJx4rpM4iQqDeWGds89i4VymKoSJzwqZVyWQaxZoiVq9dkkwzWULGbDWiDQwFiGLH79iWG7sRJoTZ2xMc2jjVa",
  "key18": "4651eYGJiznY7AvQoyi43qV2yMbGnjZmobbigfVVNfujtxrHmPniiw81reSmHPhEk11vnjwAxsFngk7yDuxt6LsE",
  "key19": "3TuuvkFggaDBevoTmct85DpZVHZZoNHAwi6whJYrZpLgjTUq8S35ocvoEYyhLKR8bzFdPtHm2SyrLBafFMk3qi5B",
  "key20": "4vW1M2qED6U2AX5kJ5ra1pB5HXcj38wuHr1Rmke6EM1NdXUfrsRGpMsravKgYYREXyKscD8srY9SnC6qQR5jocLC",
  "key21": "5sYmsJvoocXrqVp9q5QguRar2e3opqnwUyQC9KUJEd5hTrKwbJDo6qLiqTvVNBUDgRb6gUB7C9VDtiH5YKiMs8kJ",
  "key22": "5uik52sHVQfMt3tKNWukWss3cz1N5fyiYHHDi7AMa6WCy1kRL7AXoFjLoph34wmR7uAGD3NwYTdZKJCiDYyr5AaE",
  "key23": "2bgwpPLDSCVUL7BA5mCx1KEbXmFUJWqzntBCx44Lx3AT3A2w1pXoPPJ7DA22Aru32YdUoRinfA77JWXges3tmLSy",
  "key24": "tfX7R54yg6PQZDqTgA2zJEMhzRBQiiWtaLDaYfN8y3hXKcBt1Xry6Bs55KZnfRXEtCpTFwbdFP1nT9qdw7DVtDr",
  "key25": "efx4mb4dX8hQCo5nmdVSCRPYon4a4H2dbaKqnnRd1RkZ3tkv81JaBjHGWzwmoV4qLgJLiMkTXYN6EgxSjSAfy6S",
  "key26": "5kXsZZ4vni1YHieK1xfDZRYo8TWUJrXQB9jK7hq2rekeDxDH2xhgwzVbERi8c9BiuN18bFQeJUNuuNSTD7t4mEHX",
  "key27": "39KB4gHFFEMaz8rGLfyRQYXXSqyqwHqbimLmfmDHHYdCR4edkxxjKFLpTjYuEzSaSBgw3Ha9JaoXwpGALBR9Emvf",
  "key28": "2jgH78ynueapf6J6ZD3SGfcwTyhsKNeXR9oGFA444S3FYXfuqksdkbLoqi4uqtheETBcPV4oaXwfete18J7vfZtM",
  "key29": "fLrsyxbLJVG9FL4wKjHaYc9SArcotB9GMkkm3PdCkfrak6Z2beTsN8xPpD41Sy8zSXXeS5DiruekJSoLQGt5fqr",
  "key30": "1QNusJiX8Kyv84UWdFWeaoqEk4bHiPW6AmPmhwr5Fe8qaU5Tdd2fBeLKzPiqVCqqdn4R8zVo7dsvFpsehgjm24q",
  "key31": "2czVLTTti5jzxBGARQEvznv6uKz63dYAJbV5ay3Wfxk6qadGa3BExVj8mzgVihLUeUFrowJ8sETQKuYgvbY4Yos6",
  "key32": "583HY1ANnS2YApkH56yy7wQyYHAQRAoAtXUt4Xq5wXYNEb5TLc6GUEFSw6BEzyLRyWhKo9vfeowEQBbDTEMM99En",
  "key33": "424xcUrTJWmPWcSE2dYWrABBqgy9n3azQSJ34gZEU1qC2LhmL3RjBPSmN7MkjTHUojaAMQNCr8R23qRR8JytGmk3",
  "key34": "2VTKjWqK1oAcGTYu7AFmieZyV94gGSaZ1MWTHZsm2QHZwaHTREpiLdjURkNFWtpw7sTPTtWkAGyh8ma9oC7cPCUU",
  "key35": "32BBbyvCsS7BZRTPGMMsMS3oVWww77C6iwA8kkfiGUnf59ywDHtFr8rfkmxMoSFzztRA549K5QPeurZrcHajDKTt",
  "key36": "5R13wihTCfty4pTv69cEnsKaB2WuTqpn1GeH18jMABVvTHT3u4trgGNP5iRvpddEhnmwG4PVj3FLCvHz4vSBrYBK",
  "key37": "4t3N71TGLTzDxkX1C2jXEdeffkwVY3MuzCH932SmKpoHQbgD5ysaTkJqENrAeDRoFYQtbefiS8wWs2t9sRCcswg1",
  "key38": "52C6NDoQHu32S5L88xYVGjhur6DZi1AyzZhtCNjuXcYPKgUkW8BGfU5fK376pzgzPJCz12QwAraKSASy8RHX7X8C",
  "key39": "4Vadjr3nXdPkgFSCK35smA1vTvGzz9A4n74rqkJviw6n9Y1TE4VyCZTJ7StYhUPKdxR8fAne76pV671sQ693vRji",
  "key40": "61gNBqohXyiZhtrJBgPzxLkTH4fbGW8A6VRbAhyCdyXcba3HkfT7dVdsFZWr2hoCvuQMHHJUo7D4SmGPY33BpqTc",
  "key41": "3KkS12VoyArYibjnSJY2bSYe4WNxjPzTZ3JbqLKvG9B9Kv444NAkpxnAPtPnYfUwWBq2LCcbuQRru33nA4gwMgwj",
  "key42": "4TAw964MdNiKvq8xjCE43o4CaQSJeauiFna6y8WsbfF2QELyiBX8Gh2suLQ5xeCCtSa7C9TKajtXxJBMoXxtYeh1",
  "key43": "4EC6xryej4En1GiDT31NTR3vG2FsN8ZwyroKCiaspk8vjtRsykU69e7bSTZXdNFfacNEkZg624KUvfVDWiVemL5Z",
  "key44": "qkBC9hD2JkmTQ6T4YYhR8hkGeqpRbVh7zETAD4FoPiEw7YKxPBKEPz64N7RvwPCoa9fgNVzPzirwTaPtV6Nfj67",
  "key45": "5FGZUkVpYcsyp6ycXWxFSevTKAMnb7ifCJostSkH25kqjr2AyRGcdebcQ1spsCtAiJA4KjsVc3ZWLowrH6XvyHUx"
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
