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
    "4LL1Si71VzgMPdmLWWfTy2WQW67FmTnb1xWiJpNRn5XMDT4d4caSzfwdTUb56vRLcBSMWUSrn1zecoYknbvX6wao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZqnF4KHSEDUTQMnixwqtvv1EuvyTsnvvq6Ha3nmTQfgdjsivGeALWtvJ5qvpjJH9kLeFX8c4kbZ81LKpCZD6Ry",
  "key1": "4vpMEjR8tBDgXvRc6xGLspeSgTakyLsaEgup4YbWtQJtCo7zCP3kHkDzRBuzcTXuvzThkQBSYmNbQACXe8VTp4yj",
  "key2": "5bvQZBC1ptB7ykkK1h3MjU392dUKPmtJYCSNWLbdeSd5CzKrnYAC6qKKkx5LoQ788dLo3NKCbuonnxsb8pS87xv7",
  "key3": "5yUofxnbKtm9xJhQLUURDezgk3iMBEEW6T8bR2HNN1bNvGAsXiGNE4ctvnTJymeBfVv9Z6N5pYzZkofKC6X7H6q9",
  "key4": "CxiSyDow9uNnSSNoPr2pRsS98CM4bPwpNVnPreHPgaoARQ9GxhA4j9RPDpubSdqKf6mzidoznrKy3jYTB5rGgSw",
  "key5": "2TfK5mKMh4NWxM88kQ9Tt86swHeaSssCBZm77jSKUUS47YNCv6WVf2TpEfCH8ZcJHxXLrEkKqwJTrKFqoYZBNhpX",
  "key6": "4Hg2nZDTkxyBPQzHRu5sr6gH6rB65pjQ8qDdEVVfL3kVsFktxRm2EKVqWZpCUwhM7NgBYrSPM1QRuJhjPF2iVd9G",
  "key7": "54zTb4u76m9m3Dz1hrT5CKePtEP2JiEDZDy1svCJpsi3qFyY54qPw82C3HTDbHiNh8EGEVueR8VnvnhZdNQFf5Vt",
  "key8": "52j7Xv12Pc6YcQc5hQYjGXiMs3KYUCkRxku6fuXkz9Sh4AphUDoM8horwvV6zgKVvJVcrNSXghFW7sQDpmTNyYFp",
  "key9": "3QZ1GSh3vCWVHMmSV6mCb9QB8sBBaosGcvbD72TK7Wyv6mcXyHdsX1NofuJJiGsxNtsXQws4VxEGNiEf2eZkozEM",
  "key10": "KAkpyK5v1yyVovhWeSamcdS4E7bBanTfRj26UcZwNxnDDoPRpd6eMt3cB7qGnRvABRkENSPxJGg6aiztHrU4fm1",
  "key11": "5SqaYexJpUZuhuQ8pTrvepDs857KFdYYD2weoL94VEyjgmGGv41ayGgsW9YUwXRNy9Yt1ubFE892GgVB1vhaeC6B",
  "key12": "3HU6fZMWvVJWRa4dk2Ze89RLChkrPhAbNTnJFcYcFSFkn7nocVWJPo5B8ExeBhL3Ve1iaTW1mHkWVRAjTvCVYxjV",
  "key13": "3uFnxqUFfPwJr4cz88YFivSGrNVEPcbYzWUCd292xHEzL6SjWAGc4MDTk68W3EF489ZZC4VZNFyZsCtfoHA2NzyL",
  "key14": "5AvK9N1QovRkZkBmwbapDBry1xbz2DEt8EU2vQBixMS7sCK16iY66fZ1f1VLRD66CZibzWq1BxHtPQvDkYjoLF3M",
  "key15": "2tj1ounTWy1o2M4sE5FkydMso6M8RHsbHquZZAsGWL8uvBLY33McbcJy9cFxhsT4FgYmX9sqCvsp4TXRv7aWZ1up",
  "key16": "3wCCisTDwJREzjYf7dPUp881owmTASYaxZUT3wTkYwvd3YWRAKiLzERgJ2KiaVW3VDMmxoBatqmEByKMuKfgTMXT",
  "key17": "3TxXR3TQDX3GzxuXWvFLKx7FDqVE3CRFxqaTFJevG6Yeu7WE4Y4fba4ZmSxjHogfijYJRhxNb89Dvzdbd17io4t3",
  "key18": "5RPNTHkQmdzRw4oMKeEF8WtKbkPWQuKvoo6SWdrisYZW8RB7yWULJkeRv5sZSgUiT7G786yj3q6o5J8xVJ6zGSkW",
  "key19": "322rVZVSJTS8t4CtcLZTVJPgH6zCaHRv4mpm8k9gGyADRnniHKfEJrYUB5ZpRN9PxE4odU6jXuWxfHbpFBCWm9Fm",
  "key20": "5NXNfxTLG54ymPDTA5aDcYAJCBc77GyPEdezssS2GyntJbrcTqVAYqLgqKK52iLg4YpmaHCZh4Qkk3qL72YAVGgw",
  "key21": "22QgJAn5pgevzYqrBaEHgCk3aS7iCgEGGWJN1unGWncUH1FmtJG5iTEGyBKK8thjEweE99enAZwqZgd3W3vHgLLR",
  "key22": "2KTBNyTSuNWhfuRUActqPXKsS7Ua67jWMTuvs8Rky1zHV9HV22pLQWsYktSsb1vjHUQadwbNSrrPQt23MHqHmRWi",
  "key23": "8fW3LZ6dthuuPASKcsErRNBRWL9CnaSRWoFPW1YH8EesAn1CXjrLQwGse9rC9J5gcSjqC7R7tGSksqzaHw448JD",
  "key24": "4pxSgTCaney9H3yUHnbyNYF3FyJib12pL8DBgNDACzU73BTJhLut3dbgkNobCiCfD97FQtfgmqg4bLopaWYZjXZw",
  "key25": "5agQuHHRUspxesUrBUV8SZ3tcTU5oF4Zb2h7rTTJbktAcoQzg4EF2DxPhFvjmFp7bfRdXijfuSg3qN3VDj212P7G",
  "key26": "5uiv9HSPnS1WZRWkHiqTsY2UxyXm91mnSqohTvEyjv5GQsAaFEJpSuC6QF8Rq3F97rt27dutVMYeq3tiz58oPwNb",
  "key27": "2AKZnT6cjgp86uNte3kSzFQh469x9PrRFpjAFvJ4ajVzwwUaJ4ssNi3omVFo3mcS2BzKH5B2WwZnfrhWLHGBpXrp",
  "key28": "5EEYSuZriC9cwqYaK591xpqhyUnuUomYP7rcnTzLmuAAjUEqHubzTMg5zSmxhtgRoryd5F6KyLPSVrwgJErwSSrN",
  "key29": "2sJVfjReQ5w3Xw26nrJtwYyaNhpVgX32XexHT7HNFrTUyUn6v6Sz72kUC9qbdRn2TeKXt5qHwBCahFAFUsTcLfZk",
  "key30": "58MNG5juCmCvwvSS6PiPgv3BtqjwzYtuGSY1FWaGZdiU8RqLShorbsB7k7KzQK5sxjq5FeeaE2sYuJxNUaqahAxM",
  "key31": "4B7S8sz4V31wrwP7NqpvGHhrq3deknTQ1DdrJadCkU8e592jcSp7gU3LJ2NqWrdikRyjm51ni3LnGzqJkYfapRZD",
  "key32": "3e3PNXA3p6WJSzwGgmcK2zfaDZ9Xk2BKiMLuD3x9gk5CgfiB4F2zMxDdcMf6PbyrzPwmnG2qwMSmbtbmUsM7pjzM",
  "key33": "5FmacjqyM6dGAhgLDmFU3ardziWcLBtYRLhKvHYabVeGwUse2WLT9CiJtBUkFqxE2vV4WSCLC8GHsmamBRBesLev",
  "key34": "27ZaDH5r5vJnR3F225fGkK8Nz4StUFAbPvu3s3Aa2nAjc5GF2c2WhRRw9gkmosmx7NvPmdjqp94XYNMRFAXtoUNt",
  "key35": "jxSa6CfnjEasyke6fjNAKgLgbCCKFgdNbsjd6j8DCEnyuCrZPKR4LhCJ2mdTV9PDpAZMNBcU7FuXDWbUXbMZFmf",
  "key36": "62GSZLNJqayrbztWiPicuhU5NJRzr4Q5btYRWyRTT5h8epn3CKVRFt79X1tuZe9Gv6Sgk3Qe2HxYh8N7TRSiT6uR",
  "key37": "tRZ6U8aMSneocrmfhqtaCGqhx5jALtqwa8sVhTKzB9cX8NQV9M9PJfK5zAACRWGLcRbYf4dN96S5Z8kF7MC7yyS",
  "key38": "4SSNGr4Co12thRRWmDRDEARPwVTnA9WXXE2LhivtVxHBL9rCiga1zFuetcwNmAMuDLAM2e3aswFwQHuucK8hsxdQ",
  "key39": "573KVAhpyLXUU24xvZLSPdd7XRfJ7zVxNx6ayRn3U184gYE45FDXRqfxCHTs3o7g3aQrVPdpJ2NXVHt6jWHLozAp",
  "key40": "4CmwFnoorBraMiZxDcmbQbbte7nr3TKg2fhX9y7TY2LwEiQmqHjECvaMgsPbA4kBWu7gqrNa5GMxbLnM5kK22Wrk",
  "key41": "DG6Yn7pa359B1L2PUAUEqZHi3jYrvW4pJeYeCbjGxvN3HTwstiXYiJ7ck2Z1hfi8nWnJjqnXxfUzzswPRdXJ9YZ",
  "key42": "337Ga3VySJuY3XhyyUdpy3BqnDhVeBoXnR4oxgc564MMXi4frE1fKR7xajx5cSh91MHZuPsthXk6j7BjBz6FbrMk"
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
