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
    "2T9DK1zFbpjTtyxVz9pw2iwGRayEA5b8U3y14QDFqQo8Pg4Zc8hHEuB5jTYpjRxGVh7Ngricr6hQoq2Nd8PQ9FEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ijXTgUYShJfGUeVo8A78YmQ3MZWibWAs1UCT1PbLhGzrsfUPZpSVv5Mu3qxUGziNDgrgEsEzez9gYf3LrRi4Amt",
  "key1": "4hZ9eCfNWHzb3LDuRdNPt6DxJia2FpuwW9CZB5jVZLjS3g8JMNT5a4zdFcCvs2ryY8MyVosDCJS3W2cmhBWNbyq6",
  "key2": "5KAzcAsLJ8yUfBmhDGYpDYzaNkgGc2GjRg5YCubNvEFMA7LD3pxgTp48ooGRwbq5DbgumHPe2ikXzi5oXizwWB7B",
  "key3": "3LFNjrNF3o8MkopcfgA1VtYYwXMSRa6WrAtTYzbbD4aGvsvnbZwCVWRb7CEcr1B7xrVxnNgWEpfgyqaPZpErDg41",
  "key4": "3ZTbt65WfL2anYDvkaDRTvbgUNjBNJQVgEMAjitvr2ERqyoeidLZLzs8VAsPDVhVtebSqT4ZAyBtrVcUXAnTQqZe",
  "key5": "3MxUGG2DfJV1FHjPi2nmt4f84t8ta79Z9uYoMZtzVAFEYzeBqdJT9Erc1mqoKcko4wTvTPoLwqqsLLuaAVZLnpFj",
  "key6": "25tfv57gfk2VgAE3ZS7hXVroYYnU1WDijVEkH6ogKDLHaRWdWd8VcMdb3eRiYzJoWdJppYn8XcACo7VkKMDMyMNA",
  "key7": "5W7TN9qvz3fYTQdGA1tqFgHthTo4Xt8ZM5LkvSRR9mvDkk4GE7yFiEPU6AoWQgnUs3GTQvkbo32CyjpYaovQkoF1",
  "key8": "oPcWDCzQzei19sSYPjhE4zy2MgwHZrVsiQCK1i1w2jbYahswJkMvx5vFJy2SL4r4N9xKCw4vJFaML5jFyS6Nvnb",
  "key9": "Y8WAUPrqWgjt7Q4N7fUTyMo21L8rP4vQq6LnQkrJ146NhfENy7PvkfDnB66PrkZzDWYtSenARUWdMi3dfGt1y37",
  "key10": "2afLDDkWWGv7GPex7Sb8ri7CLdzJ8SitTCZ1HuQSkZWXgRkxzzFjgQrPDnGQrRa7kLhcAzssgsUhMzH83WLUXX1E",
  "key11": "5SCCB1oxkFrFBTq2qxjL1EBoZZ9pPMi8voGnXpHWdeE21hLnMtPZHwvtGjuDepZv7Mx6bYkcrDqiJL4aQuh8Q9xf",
  "key12": "5Ja8ArADi9aP7NjQobh6Cegy7vtQDehQPPVokrbURFRFi22X6qPUdqf6cHwDWBVbT8Pxvi3aVwVceDUnro4tSXtM",
  "key13": "BRNWfUVE9aGAeStdfEKNWkuyxV9vCD2KSnpwXiBr3NivUfdGqQ2DadvM8CBbKeTj4XShu88Qe65v8ujC3AaUNrB",
  "key14": "3rvFcmeubNWyqSDCWNBYt39faXQYWmgxc2ZZjJqMTD9EmvMbhED7xM68ts1apdP7XGKPyZz4M5wAneauH8iwJNis",
  "key15": "rTsYrcKCJRQquGgfV5gq2Nikngt2ZeNd5hDmUqtWowdDFnwyvyCNwwkV63drhF3VMNMZ33JvY1fiTxY5aDV2EJA",
  "key16": "2itizmWZ8rfdDmdkRP6S6ygjf9mkNePS7m3DXKxAwVqqbyffyrDQNxEk7U4J2gjmZz7K4vMaDfYXcFfyfauGTTw9",
  "key17": "UWiyzQkERyaKzgyHvNCWsQGv8Y43jPMpcxMKzFMupqQZq7wufYLUZAo6WhLWaihw56qdx82oSsX2V2Dz9PkXN2H",
  "key18": "5uCmgTurbZGuH2G5p5AM8uDfv4jNLctd2o1Y1GHsTWfSQp9exUWVzybnuhgySYG62zHMiSQgXDijVyY1a5ngsSzK",
  "key19": "2JPSW7Q82Y35vWYjhPQs9YJUJ2nxx5zPGpKcbX2cN42jGmUMye3CPpMK9eecrbREvHRjTUKh2RPZTVMUxaELzucs",
  "key20": "5fULmXHfD8ee616HEjz9T1uoAAdpJ52E6g3efHphz84TBg9ZUi2FS1YFHHYxVAtLAK2tGAEhsmTHj6rQGhMF2cDo",
  "key21": "4YikA5EzFbUZsovzfScnjXpWTww8Pz8BqxPNwZWZa4YaBU753uocwStLuF7vwaPRjZ8AGWuTJWhdUk3WvSXxJdQV",
  "key22": "uD4S2Nb3WBPQ1fzy1xBLRgKp9V6MtJ8dSWbbiBqxpSRzxhrsncGgobevTX8ZWFd6h7wP78uNJoWPbqDJRQ7NLWU",
  "key23": "3MjskyWWm6DCfMcz3wYGDGyu2dcNAMmpxqTThD43vh5T6wi8dmg4TjE5c4EKdBZ6EMVBnvA2MG1AZyExN2gzatUo",
  "key24": "4hkPiLX2wUfcpPKg5SZuY1RWa9VNSBnLQG1LFL4fFkoPHCPKq4AMPRAzntijYxjqb7nF7X5A4QFmKxBv7nq2cRo3",
  "key25": "3qhseGi1eaHo51PMbegK1Mt9qhgd7eACVxHjGB4ANEigdDzDiWyrXwK76PRwYivUReiPhkPTBfJNwBdAot2kDpRa",
  "key26": "4cXGT89ULuXxXhLKK8kaLVWB7VRoBCUeq968k2Mx7RTqn2BtcTbviACKJeU3x8tPrYU3PLmYFBbDVvEA2T7ECq46",
  "key27": "2f7jKsjFBHqATzSLwB8Gekqeuq2EaH8QXHtx2bosUccMUGMxXed3ZHqE9AXZD5MAMGXngj6HZGCou21tL4MviD8y",
  "key28": "5vWPRowasvc5ysoRkXgKL7JNC7aspCUTRVC6nKUGF4Kjh3goVwJs9YmSdixEvqkQZGf4gGVa1u2rm1oSqzr5UEMv",
  "key29": "2vXJHJr3J6q6Nk4cdq14cukyASDPbkCG1xUm2VBSNXSQrh1z8jDMPCXCBoYX9PitDuoDFtuLkoXdcY4tpgDvqwLk",
  "key30": "32pkorZ6oqLNGbjjeKSLpLNiY7EmmSAS4a66mZNYbwaPKkoZdsj8u8SQUvdSoJouFN5nKg2X4pnddMbeoAMDKWwM",
  "key31": "4NbMiqKrtJ3xyCpi8doK7jNeisDv4kTxmBzCzDXywgVEJDuR4hpW7zto9uoEMZdP4zgqDsu4BBWjUqFo3fxAQKLc",
  "key32": "27t7dpmQ6oa5h3SH4noqq2QN4WhCTKbwubaWy9Cxm4Cv3N75DTPv5zQofsZ7pU8LM7StgBJ9hZYvCMmtQB51b7zq",
  "key33": "3GtDTNrgnmQxMB7YA8cPXFnsCHVN1ne7hJ3N8GqGdWXkBBhYPTKNWHoJQQm1hcsnfUp5Bk7BqrFGQjiVw5uiF4Jg",
  "key34": "5xR2sFuhFCrL217D3DPUST8sNQehWMPXzRYZESmTN3UwUoUcxyA5UugCQ3rcC7f3zvMQGxAMn8LDThiiohzVL5X",
  "key35": "4F43RvN18wKWcuLxTKt2LeMgBwJtGziFxF1DinG3TnqGCJMgCtwvzBk62cEFtE6ZdiWzNpybkDVHN65uLpUMsCyq",
  "key36": "2g6zRmP5V2vEGGRXNsQeBtnxE9Ej6yBQs5zQF8t8h3tBJ83UgxGu8rdkPuD8H9Hr5AYMaR2hf2Zxq8jwAHQMjCTK",
  "key37": "5bSBEv5R9Tm4bv13NCnUn9vXLEBvRwmi3nCsbUC27Q4KoJHvBH81HZSq66eCpeWX43qWDpSswCezufZ37VTiKiRp",
  "key38": "4As7cfs2wgyvawHE241NVtsGYt35gJeSBxdfnfXUKmCiuJi4BPBRmzVVWmPj5Cj6RmnHbee1R2xzkQ7qPh9dBRc4",
  "key39": "47oRa2VsYbXcTVFo3vVTVGCD8CbiHU7wfbjbT4DjJwnTfDyfjK4Ac6GVXoo15e7xgzZjaPSWZnGT6zoFsNWDJMBd",
  "key40": "2Er45vmu48TSLt3VSb83WvWzFGnNUQEuji2FbM3fLupNGNty7KC577wwWJGVbqJX5Yi5itiMi8VnU5mX73cKX1Td",
  "key41": "56875LX3gVAUYpqX525kNKRBy8npSyHdRckgb865599KGXsrr2TpX6MAwAnjsquyz5jcwpzzmiz9hREzkZN7jMXC",
  "key42": "5NJAjaj73k4cqRR7d3A5ztii37X75cbufvkasQzwACH4UXKcX8Q6bojWxeV8uRZvTjNuDeJg975RB7eGP5oHuJJX",
  "key43": "2jWJRDQp4kNAvc61BiqE3xppqsaBaW6pKtvdYWaSWxdZSPnCuq8Q84MADF1jNNg1PT3vf5zKEAwrYjtzVNkUkRGg",
  "key44": "2LoP1S1yhRXGeXcLfakamWrpriS9cxeAiKy8x4vy4xhka7hvAxWugUpMJ4PmXMBVsipHt8E5kJohThUJkguH4dcx",
  "key45": "oTtoeBQxXfmd6fP57xzeMijnZuBuyKhGsUssyhmADE3bLfWxyyiAdvKrJ24qF7wGvtEENUT4Zmm5zJuG7xBPVY3"
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
