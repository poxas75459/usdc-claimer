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
    "5WEDGpjfzaSeVPf7EbFYZRvk8TCeuS9L5d3WmTmQXjX4Ee3oqNafHcS9tUT5dPB5Y4nD699PfCzxjLSEZPFT1v1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V33mrqCpfXEET91aJ64WUvEp93nEjMvoLnBcqAreAk2JdGbceSe9VYVPQw4mmEN2mE8RNYirXAtX9bCMw9NyPRq",
  "key1": "5trQTEECRXaYKuBVe5wxGdARTTobCWpcSzbmB6DkwNtwzXZ2XzcyNVd3QAhGLPsyXYgQw5WWdsXnbYHGai6xZ5cH",
  "key2": "TJH1biGpxja6Xkmm2L7YMZ3JbHkD13t5YiPvu7cdZcMFpsbYMgfZq5bytS6QDdJKPH6HG5EazKnFWnMLadKX9W6",
  "key3": "2sciU8sdh2NdVoM5GuBBb1w37ar3DhkCk4kRbvKWLH1TVqMKG9JNDubXLKSgX8dKhP2QhpXN6cJ9V3KdeKzoYz5v",
  "key4": "3oWADzJzZeS5Ugpbpw3VJEqoqCaJCkcxX3Jn3j8ND3x1HPBpRuukpEdqWdDcUtDMxAqfpGtFG9YyDFqD3dd5rnbk",
  "key5": "2PoZQvSygUHbk6fdez2BkRTc1DV2bubpDEMFTKey3h98PKaanqS2jEfKraTDKGSJmVj2pME3dCGACKWsYRmVQjUF",
  "key6": "5CHj5qBxY8TX8Mgwp2rS8apSC1bax3L99UZg3b4A3ZjAxZT5Xe4xnLApRSekBShgpJ3i2wbxRYdvCCzfX18JaSVy",
  "key7": "37U7yBdMGsRW2GLLci45Wqaw7iRU7amweMgwSQRA2dve9w2RghZ1SC53g4ctjRggrbVP7rzbAMrA3b9BP3syrsHa",
  "key8": "36BHg2ux3WSRDHHzCdFPEbC6K3Kf5HU35it8mBfAsEVNt4jM7UoUuLVsWFjHULLN7ztRxZJz4DGbaVLab8kNEGbP",
  "key9": "5EZq7qfWaawFjbGbyFPfhEubwqoDJxqiy1sc2p1KLtTFPo9MvyRDXVxWonQdyxPpmggNM92FMfUriYbTdbPqEsXP",
  "key10": "4bDq4UUFhT7Bfufx93MJUoADaPPwfF5WNP4FTvcD8KDpxEu2YQhmNv9ivBYyZAbbk3naNdr1Cb8AgV4xaE1VypMM",
  "key11": "3QoTJ8u4WK4V7ThxVRJmnoE8Lqq1TyqDfR28Py1ocJ8qaVkQmD48znGwCj4TRGCAD7SYNyxwqoUwpu2uLGP6qjWs",
  "key12": "55QAjKo5PRsTFXNST7xMpN7gX5xVFgFsxmGoiByvzg5BNkx9CoX5WmmTpgEhcKQkq47SDPKX1o9mWaZfidw4aERq",
  "key13": "22x3wka2D64cDfC4rtqX1hYN49SggLQzsqXFLF1xLGgMuiPLKmTXosNFbyTAjMdTuLn4XGUgLqyeNGt6jEfM6a7d",
  "key14": "4ByeYy28kiL6BT8tbvSeD8FsChUtQrAY987mAy27dzUarnHknfGsVYKo8bwsaFQKmUDgfU78q5M1Cg774jGpShGJ",
  "key15": "621wR8kiMmBWaZ7FiFwUQ5LC3d4XGFVH4Sc3RiwwGB2wWU4R5MToogutHdd575bxTvQpCpS4kKHsPFuzov2eFvah",
  "key16": "Jz6CSuJMG4LVvFnroNFfYgKuaJQp6ZzDifLq6bYF9w44VohPajBua46TvgUmsje1F3mCkxKnVvj9rvMpPYpi6gi",
  "key17": "BhiqNkAhySTHcJM1PXmvGQJkY8PiaLkJtpd8F4fo3Eda5byu6U21ihRpxVM7UC5XrtNdC9kvQq4mkTgwuxV79uz",
  "key18": "3mWcL7UPqnDGNsiffGWeFLv5DStU7ULgFdz7v1eqLK82y6WHmbZ4JrcoKc6iXLKR56KjAk6PoaQ9S9HMAcnVtRne",
  "key19": "4h1TiczHq71ZPQHiq1hphHtTEYAHaCuAahAQkMerNxB9EKVS4jNtujDxMF11wtVthpmba1D72FrDDWBit3eoXFgW",
  "key20": "3LVk5j4SxmteymwxuT4qkQte1BK2zP5wyktMHgmCGFSR6Xz775Qcg5Krhg8c1pdwnyvAmkzjPGQjmvSqG3Xy4fqK",
  "key21": "41UD5x3iiKmtqDShbAjLB1LRmtve5RBVkohZEyFG2V3tsmzyvw62XHbQX8LA35K3X1s7ta6YNBBembmnUviGFxnV",
  "key22": "3nYmgN15EHzxfEaqgEJ8EpocM82cZFwgVUasmxmPSjFftPpFicSgS3dWvWWizXAY8kvnUxD7dioPua6xNfp3z3D",
  "key23": "2VoogefBNpMjt9ssvz38Xp6WCodGnUkrFiiFvDefKxYRfp2WyiRkkHPHWsjFAJEWMG6DzgNyXeXPs9uijdHTd16K",
  "key24": "4dYBVnNWtS1BLYZXoChmmy7fxNgq9F99r6jHcJhu3iCZZmzSb8Q21RKSeBgAYsuGiWZKMhK78cgEw3rFkfkVJTzG",
  "key25": "24jCUUn8qhxXynASCXTuj2gWFqr9CHnwKTWzb2jEhojTEnuQfzLHxiFSdeCP12ZQAhC73gkvDvkJXcFAruSyC54L",
  "key26": "v7w4F5EYXsJ753JiPaYZDJyQoQmfLa7X1q6BZG938K1rJLFDncd6XhpydF2z9qudv2rY3d5osA4tw8gYkAWGftV",
  "key27": "28fuGJDRzwkxJcZhQjqVyJV2kixWeuEaKTcWmJ6M11sH48ppbprV3CBUqWoN4DpapxgypWrE5Ybh7bcC62Gojrpj",
  "key28": "3sixDVKutDh8wwepDweWggGLUmBi8pxhjwPx5ivCCwwWyYXYivJ9RyPnuDQJ52B9dVvN6gFPm6fdGFuNG8i4rA43",
  "key29": "w3Ddvb6CADhGwkzamv3uzmQCzYPPrrH1bNGVLvGDgyp8pjGNZu5wgxBgRVF2kzX51wRVPsbE4iCqmjTyDHiyds8",
  "key30": "66Ya4cTvKqnMZCFmA2D1RZUApdWamtMFHHVdVjkkyVNjVNyQQGjYH15dwvzRYcA4rsPRJAzhA5wmDCpWxPb9LK8J",
  "key31": "5rjacaK6LJe6Q5GRBoxyraGZb4h2K9XauDdAyFriL9mmovH3JkpMJeWmFVSBbDk5otERVSyYHV65d2sH6wLTjNXS",
  "key32": "2Ai3E24pAoxvATtLZn2rD3FY945izeDZPzS6QyGV6WvxeD9x8tgNnjQA4Rr5UPQvikfvnykXnLCtPDvKkYtNptd5",
  "key33": "3mVQT1vGv9YfiopBM87dGZbXvAYyR8Cac4UkH7bkQd1iWoLBXcD6CjhyBoP9MxKsPubN4k1WWYrw8i6CoPntSZ2N",
  "key34": "2JDKczV32BPxK4HmpDKjrjGQLjz24BmbaTPbazpKsS6u37HKBFYUXJXZjuwy5zwsT9cXz3m8YEoaJzUeYJLsrhii",
  "key35": "4ewArGvTR8J98Aqq8pnTyBSx8o83DcLbeJfJjEyN5MmUWcpe2cpZPC3Z3ZV9KJMB7Z2vN9F9ptBoU6waiRnHc5WG",
  "key36": "49yCqQ7WurFKvbycWRjLwgB4eNEneK37emagtpxpxpmqxnPxfW7ZHAyfnpxV4GtdY1QTQtHFgJQZmcrrz2dvXo3q",
  "key37": "3fJRBH5TWRfTs45MjV9eqp2hNmHAf7tJp8vCHdjV7mnfgsT2LKoHH28Ss7x9MqyE8bCMMK8b8HkLZcNhYY8Q3kuF",
  "key38": "GUCE5nGQFXB6B2hpcLPrVJ761wMZ4VmX36SQAbYdCuTAVMa8ZviGfnvgQJK6oVcCqL4zdzQWhTDQ3wmPiE4pHw7",
  "key39": "4vRuTM2jVyqWGAFUWxpHUUbuBqT57avTa7UE2ZyhN1k2EEsnCsAZEn4wubs7THQzMfwaXEn9jGvhyPuX35hQ1wxX",
  "key40": "4fSFyMLBU8D8KuBLyuUb7qnfC3ZvkpfNZTKMz6ZHk5JVGg5ttvamkPNhRGrk9NQw4wfirGemcpGQq6StwiUn7859",
  "key41": "5waqtZJ216qnraKJL9znkdNvdmHmjUdnvQsAq41MvHriBbtD476Xu2q6w76bzCAwJHiMY6Mv7sgxyhnq21rsNdLT",
  "key42": "5rYoEVcNnfe5mUGPbiTxJo4qc7YGddbJfFWVe58Qg48SxDr5rMSyPvLnJgPo6qyRyST6AXWXCy6MvJXMaJmveL3K",
  "key43": "2DMTtno9zfFnvT3PRv26mAa6Kt1BMvLiprsLHMqgT3DrYxbCHWzqBZYYE6qcEj5euzfuUPc1BsmvaF5npbf5FRL3"
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
