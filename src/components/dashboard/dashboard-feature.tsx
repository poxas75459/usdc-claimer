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
    "62f4FyToiGdmeXKHxS6yUS51KyjQRHN6LZ32efe6gCgrjAM7B3ViY6JGJpnUs4YtLwrn46n4DMc6vQpJBXwTfJfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CBDoZ71AX2D9iLgs8WJxCPxBsnvDNYrMaoRFwXhwN7W8jsHb2fGfViGL6oEACEf8RZ8PNHUdXQJwKBTtnkNibbZ",
  "key1": "XFU8f7KQraFZC2jPdairwkTbEaJor9v3XY6YnGfBHeLrTS7359teEtiH7Kywh9Ua3c1XEEKNqGBceAvT7TSRYZf",
  "key2": "2xusqiqbWE163GgyY2CLbSQqKePtkhxQPuoF6kPriyuFACX6Cq4b5sbS9Uw8wP9VdzjkRoDQ8nUW983Vw2SEHj55",
  "key3": "kV1ukobwpG2ecMijzHUuTiaMDTWqRtRvMGeK9VvAP3z5c81KyC7ayA2ZgG5g7NJbt4UByZXLKeftDKeMgv9Ut9o",
  "key4": "5kGHqHPjKsSxsmcrqyryUmnVDnD8msk91T7fie9o4WdSWVTnm34m1g6TmY4tQQRNk8WYRtxSmtSdissJpGnBAcKE",
  "key5": "2WkpoHpju2uZzWABSpnM974GgLzp4Nsr5u2qAzN6s4ohuRwnqgCn5wngTK8UqULih5ajhvuJHHk5srLAkuE6UNF7",
  "key6": "48M2D1LDu3LDsVMfQ6MKJuDTWjZ7h1EYbYsVwPUhFA3X4EGriVMnfHwCWn4h1CoydvcXfrThinnovAzf7tL2LJ67",
  "key7": "2Vg2Tdid4MtBzhiTkjoD2fMizfghfsapqTwBiwpj4tzMfuGC9MFHrG8C9dXctjSPukCTatdvhCqCNt1SAFnTqXyh",
  "key8": "3YtZagmMkVqYP9SQWnCFBkBqCw1GoWe2dMFVgh7SZJ8nvWLFjwqJrrRPVJvh8xgEikWYPvLkG4D4wMqm8Z1wzD5D",
  "key9": "4X6ubbe5wh5D9YFv4Gr1mMutVETcjv7mLu7JX6VArAyhjbNYyGExud7XHTU5W6Ttqy13tJewzL2r4EQLgG6UUD1",
  "key10": "5fH8oNCfLnE38cw5p4Lq7RqXCzbdQKsMa7pJkozDTwYA6ha3dbgi2pVUBZqyv8SQx1L5AgiFJT8gB7k7AiGASLDH",
  "key11": "44ncVLSkB7jkECUzgJkpmGvWXnwHZicpUUjUok7HBc1BZtTgxD2Rg6QUBzLyGaJ6gNBRYT27idAePCh9UxqppZit",
  "key12": "4xwSUQQQ5p3xVA2kCiayDLbjPd7z7DsKVZAzGb8vBwGXmxhAHdYrFVKXNgtA2EdcgW1V7QJqs1SYz4vWwxr4c75U",
  "key13": "3kcmwk7GBwsiJzF1WrcdJtc47Vzdvjm8YdtQScoeYYLYDLD8mizC8tuBMhFJJJW3xqDMNKwzppFPXyA6havyuUMm",
  "key14": "5PrdDN48fua3ywhWqV6EFQLeD8xJnKMNkygt6pnKxqHmBEYkDTQkZDGFNtJRJhu9QTSUUdZKZpDCYxZTZWFHi5Rs",
  "key15": "2mG35WfaD2E6jhwhd4tne2ZwBuMu61NbaPqFBBCmcpGZvkT9fKhNJiM6UqqjiHdxbXN5RGBWZDom9mjQwodNkQA",
  "key16": "5oxyzBgpqgZHYmjUeQXkwYy287234BLhsGX6wzWcvtF1crkhzvKQpDzVTY27ebXPyJoExsSDaKZwVb6Xmrkm34SS",
  "key17": "5wXstfJEuEhwzJ7W5tL2CTGPCmhKcQutDyzVpZaXkX5htNaPXHts3MV43PbDb9FQgs4foYuknMfpGv7Ahkdon2R3",
  "key18": "5W9bSkYax5MMhzxGCHm3s5tJFkzqpoa1inNFgCX9sxcjso6y16t5HCMNiVE4qn1Lv3LgpTnjf5CrFpC9kFMuJ4Gp",
  "key19": "4fPeUrvHYEbCLHvXJNxU9axcfzAogqfNT6jGVujP8fnnsPPPGjuovyvZ2BN8XzCwbEYRUNPHnrFZuG3LUxnFfSo8",
  "key20": "3fRsbY9rrfFtq871hr25jFQEpyJaKwB45pRB9E9CCzCE3A6pYCBrsDjkKuV51bCpwsm1QshEoxX1rjBW2xZACDZH",
  "key21": "4Wj3ojwfUok4TdaagZgh6zbb5GAZEKtXN7wMzXoEfkiBx5AxRBVhRAcZ2rRNrBowDxZdYNY9fBcMZbAS42yHgEc6",
  "key22": "3eNyTiZGSdRyadVSue4MHtzHS9HPGg4cfe4Pmsvw8XdmyyifYUBUuQwDcmgUyFobqg788aijvbfQyivAJbs8r3BJ",
  "key23": "3eVT1phK8rhQ9zutXaWrR598VqSh6gNUR9kjcaaBYwgqNke7U5SAF5ot1CB1YQRk2pZgq2E3eJHJgHnGFGSefQC1",
  "key24": "2ry3nnvTcjhmDjKhQZmhAXCuiLLj2XJ1dz5U4LdDwY2Q9BrJuAHUddCfQz1M39dVJmttUyM91xCVa7iaJL4XCnvm",
  "key25": "2HCSbT4xTfLEuqrRKEzsSUoRwNjqt87epkKpqu4WjzuqcjUP3bdgeTujus4hzzWrqXyUBuEJ1xXuwFK6ZKnGJi3c",
  "key26": "5bcJi3pwEPK8BPahoZLgr3RKfeAySE1kbzsdvmwMedBboeiycZHWaK991xr4EfWDP3BU3nkBMNPAixjrhMyP4JF1",
  "key27": "5JKAyHRnV3oRMweyzdfYBSKok96P6oCSeziV1gebFbwyPFYEtqqLCL8hg84w7erET241bmKe1J6ZpJPauYtajdHt",
  "key28": "2TQ3LFuzyrzFBtbGZCLYWpRJxv7ffPBBPMYxixoggaHmGVsTXq4N7pNW8JjqBvr9gAynw4sdHBKPCsj9S6H8Fgof",
  "key29": "Q2qyCNDaer3Sp6jqhSxEStScW76pZRuNXtajvrPe9M8QDTrq9XoFRDDFyHregkg1KPiAgx1B4wHMpWo4kttxFEv",
  "key30": "4ymAfR7QyHmkPUiT7VMb2sxYrgSh2kEwk6f1aGHwh2rqnsfPxAVTKJTWx2QN1Ga6DStNb1TehHgPaKiUn41SR5mQ",
  "key31": "4xNm7PP8ZsXFRtcao48bpQhJVsYwPaaN6FpCFE36Rdk3gju8RJAayuVuuZR1fooViMdpadR4qfxUpNxyyRc7DqM2",
  "key32": "2xmaBnFsMfzxFG66csARdDAoL8TvjzGRZqxBYt8C1Ctgk5a3TefRcM5Hh8rRtaWM6ueDj7nh7Yv3hAvtdCWyuzLS",
  "key33": "4Espp5PBNxJfLmpQPXxthyGa51PzgUScHAjdsuAJVAaiWSuTNZRnLx8gbScwwi3VFXUcdG3uvZwKT8gySmZwQEtC",
  "key34": "2F2d3MWHg2QxhdcpZxyrv4vFVEyyeZE2uY57uPCfN5awBV6xePw4HQhYhHZ3QEW37Q8vbxSz6Ho6Y6kQStbqS2Xi",
  "key35": "445jiJGEpcrtMSmDxwVVL8S6u6Usaa3Hm6bzQwsVWefj17LT3xa6dPY7moHVFopEjmQWEYqRhEUXpG2VcbrmPG8A",
  "key36": "5bcPLXrDVzdXRbuh3vBTfy3abg3ES8YJvhuQZbq6uNhaowGsrNKyaunjPKrAUtbxgrN6vVjsVgQXBgZqF8TywsCk",
  "key37": "4Qd44JR1QFX65u4T76x4iixF4EAd7fcfyjXRK3qVev5J6prert6BF7vWTmxqiAiAwWSSFVKbJBFm3oDkjDoSsVj7",
  "key38": "4eCg9XVdoz8M5bz6ojhtQvA42452HyjDcVfEDyHgn6VXpGBpBUSnAFiTbmTSJDZgaYiM4Yz8hTSzkFj3Ggu6vCu5",
  "key39": "MANAjRo7GWDo1k8ijQuV7vhtXHj8BVArJ6d9qjm7Tw5w9qga5g77LrxUgQSVrJrTEvh9qnjRhiciWFQUSrWudGY",
  "key40": "4hkY4mvzpGTNTabSr1oDDX9LF8DCecyNzSAkh59zJecBKaNX2FDLU3Txi8wjsCZBZh1bARWfjiApvnREwxyF7EBz",
  "key41": "2SRahfnLdq9XSranZgmSw9E4an3gNhg2V87jRnHqsKAa2nZamGARUZQ4f7yYNZd7C2vEQp7bYgaWhVv2QNNi4965",
  "key42": "ccvRJCSbWRTRrxQ6H9ic2quDmzjmoPQLXgPLfCEhhybR37QUh7Y1XioGfoKZ2EQoBsZEGFo8oSSU1KAq1w8XJD9",
  "key43": "7kKX9v9qMcyxRDd72vsjLJ1orc3CThWiqpL6CAE4TuMLmHaYZqqQUYRX3diC5qCCCNrfEvUwFLSAn296xpi1piy",
  "key44": "492qjs6RDptCbPsqu2SFnqWP8JzJqD3a3NRV6Ne59nHkWQNVDQGRkujUDswHHtJHSP5gdx33KvYZyLVnSCgzj8n5",
  "key45": "322za6u6Q9H7dJr5AC7ztQGTntjtwCLaNudXgg4WEWBPCuuJNfM1nZYVNo7Mx1bUre3GnbhVVLDBUz9W9cqkn9N5",
  "key46": "5xzQapdZaREkeM3SJfVA34DMp9YeWqBU7f7NELaxFbfKLWbjzTn4o84wBCJi4kKYuH99sMqLq7WdyfzznyfxtQZF",
  "key47": "2ZG4LNL6cxJDDUWX6LtsJNx9VAceNiaUQ8x8zTJjCyLkUBoGeUVfG3fd991RWmRuyQH9vBU4ss5dNvTAqaUGgVB6",
  "key48": "3CSyY25JHNyjcdd1SXeXp4NPsvb7AU6MbPRsk4vn4DPS3YTckxB1tV77MKGvUHnh75RuH5pqj1gTDFJyHhpKQXuC"
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
