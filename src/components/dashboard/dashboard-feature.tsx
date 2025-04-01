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
    "JTzGo5BVZDhr2nnixdTuzeov5JgDVwMnqemUXZsvxfxHmpDBxftHv3Heig1sAbntvEfC5rjhcfXMptNuo6pYSqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tBgV189Y4W3U2G39rb6x1pYSsJREtpVCTdLSzNkQ6qE7TEdNa3vckgDCirXHJnQMzSrF36Ecu9kjyM1Hs8oPTEc",
  "key1": "XdX6TybY1Sd1p8yLyWmQJBDFnrGV2r2xsLjnKapj6GVwyzvuTtPdArYSgw1WMMbyqkXqt7qcA34WAkkdWFk9FEw",
  "key2": "3vtLG12JQWLFC7Jd8yDuVhf1ezbhZFSfucqHVdekwwisYaC5qEPs8T3JxWUfkeTqEmZNAa7oCmRxZzg91wC61b1C",
  "key3": "S1JZmkRbAeWzDMx2pQ26rduRarsamJJdbv8uXu8J2Z1ZQ7G2w4X28o8ShdPpJWMgfnYmrVwfeQ2H5avH1f4CBdg",
  "key4": "4UJ13qagEvPzRtBtTa9VfRxb8y8mugoLigzb3N2jeGjM7rY95WooNDhupii1Tt2ZGmK88eJxgbKK2bEYQZJyx7Wp",
  "key5": "2R6rTVxK4wgHJLYaQ1SU3CSBsy9d3Ava4HYZ2FqsRBAJgWVA42Qw2bkcwKkBmDFk3vtfSmT9yqEftB5HyJzVxLgt",
  "key6": "5mgj2xQZxUFChhrCyJHqWTYgxdGBfN4UGh5Nh97LargM3W5xERAXM96Paw1SHxLcysXt9qPZJvLFidfYoSyGLpT2",
  "key7": "4QUYVNnq6eZrEgRYL6D8PFGiCvGf2wg9GGwL5T3XLkPgMeVr8Vh4Bz3wBTciZKpNQVMjNjbDkKXJKiaGFVS21F3u",
  "key8": "31MXnqe8K59egx4jRq34NTnsqjMpixioZCoeGPqHecT3SjrQitgEx8Zpf5dqvVnpSTHqKKeFLn4g58Pz91gbtnkd",
  "key9": "24hByUXCPmxYGYuLuG3KXu6ErZNX9kzXqgCPiPny3baqMo6uibXFtV3mk6f2VgnzRKmRn6JtbLXSpZGks7WVRamM",
  "key10": "KtukvBfXXzguZ3be6jcP1pExFrCfZGGiczcsbLmBdd4Dmmzv7PpM3jxFwdCQADVhCX2hWZpjZHwLtK7HpGkjGp7",
  "key11": "451PYoSCRd7DcTs5pnwYY1tkQBMjEj8M5cXSG7m726tXBsGnt5AdFYiKhVqSu5rAG9akL4zBDQuYpwckmQan3oUJ",
  "key12": "3yUthsHFJuJVLU8NqWgYepxre2utUiASF9HtWNYeXaGDudZHRFaudJq4AcXvm532qUTphJmnpcX1qDebgQYYFoMo",
  "key13": "55CPCyrkvAHMWaL6E8fMZixvqMm8spjk9xxhTcoMrvLMsXpky51t7eTMUvhef5vCsYrgFQcBcqXDD2Ci2Svev4KV",
  "key14": "CjBKNhH2kqTcf5XvHtszx34rAurA2Ug1TMYPq8VBR7rE1S2LjM4FYeQjaVWDjUQQyUbggt3cZVazmeARCWFMtRv",
  "key15": "4WchcVuFnYaoptY6wGof1EFyBw6RnLKVoUCZH6RmUamitch8JCoVS3QasSiFJhLbECmaVbjevwtBnLtGvFXzGYEL",
  "key16": "2CpmJ2MtN5GqaYpp8bEPckBNfUAEanFBBM9SmZwCY1CiFA8vDVgt62GYv2kkYBmUNXmbuTmtjkH5Do5MXNi1BJ5v",
  "key17": "416skdwWorNbw12wyg62fpTk6C9Mh9F3FgANNXhBtAZZaRJWMpj9bbePXNBt5gtHiUmQfanNWoFL4rkfrNPDVqey",
  "key18": "4TG5VH88e51bD9tuCJ1UEqN52u9wxy5CcD2Rxy6teveC4b2TfWbfi2gc3z92VDAFoQEZBACpTJXeEZSmPWfhWxd5",
  "key19": "39johQ3pPpXbzbM1Td6X4WNzR33i49vh4VziM6899LyPYPDnSLXgjUvFtXaJqoFB92RYjbcJ5dmNjE89zrwTUdM8",
  "key20": "2Dg4XQCQ4b9K9TjmSG5wCyk91Kx1in3wSWMPr3YKQAzTG1hoQRPwqqYTCNkPG964ihCuiRcjf3jEkyvo4yLWGe4M",
  "key21": "2bbmNZ9A3Xq8DhedYkkmFSwjd3iDFyBRqZ9qkckZEaWvWbEGkrHVoGDxWDJYGtEfQcnNZx39chT9zfoFp1C8kvcH",
  "key22": "2AJtJfEF4SmDbmTme5a6R6BQDT9BaYBrEcsGTqL7X4rSZVMrS7q3R3oUnr4YEGkCqrqs72G216c2vt6H7pxZVkN1",
  "key23": "5mQ7oCwrk2V2sEWYE7oGQdAvZP97HuVS3xeJubWshvCwQGGBWPW5aUXtdsAgDLpDEDSdgfafZjRVscqyPicCgi4P",
  "key24": "2MwGvqb2i4bLTvcWSYcJhKwk1K21Vpyffy7hr7eZM2pbwA6iaSkRUmeAkM74Jh9du9PSV4m1UrbpUyazD4mJHxhk",
  "key25": "2btoFbq3QwibvWDzTYjHiqtKPQw6zVi63GrNbff3566yD7k61VgsSrFgXv3UwWW22NGFuGKes1Jc6KuuYZiPf6ST",
  "key26": "4VH3YBZGYLhMDtmyNPYs51pvPsUBGc2c35GdMGhpezccvY7ArYogU59UCLYZp8sw2C3aVmKfVDS3EvDpMNuwFBLD",
  "key27": "4eTvGGSpS5djzV6c7jxPXaACvtqHHvau6w3MfATXWZT9rTtbobn1HTrBNGriRjNujzpATchFEkbn4GBUbE1PihwZ",
  "key28": "MYEygLnopB3uzRqoCFeJCwjr63Lo6Fnx5yFmHiznUTfNQjsNPEegpUaBnCZP27ddBSURNspfmZeBxy2cLcGHowM",
  "key29": "5fyxPiSpRfzqhUM3oy8Ry3NGAjR12L1BwG7mkPEuGhdeadSHUZxsrf2yYqEN4FuX8m2izXs3yLZayEaFh3aNrPXw",
  "key30": "2bTYNrFNhQTraAuBLcNoLjsEMgP8w3cuvzuUUyDjHr61UScuSM8hsjiGNEEzPzpDvwMAPJdp9SVqq2z7Z1NPhw6V",
  "key31": "5pnzFUGzrrzmq9Y8kRpMicXK5y5CB9YGqBBayjjVn33vDv4AbWHZoQbaFwkw9jGBZpHbZZTK8B2csBdvBZ4iXTy2",
  "key32": "p7uUmJ4YG6CKeCy6aNdVGMSz5q2iXsRm78iVD42tsxFbFaaFVNumRTwH93FXzgnpNKqTMBmhSr7sfArvAJW1AdW",
  "key33": "3ttjnMjcNohBTu8WyM8PbBfQaBF9PVBzFcH6t32EPAsJhKrYo129F5wFNZgEoszBkcdqcL3Mua3ESUYqWV1SzC6A",
  "key34": "2h3CXgTt1WN72mtqy8CFYinSP4awDX3KLhabDfG81doqdXzeCDX6oF5X3L7myMcEEjDG48XJwWqQBwo4NYKK5QMS",
  "key35": "4hLJtzwWFH29xS3Lg64r5uMJ4NrJKSbBhGyCHL7dRJNUEh2TQ413riCNhLGkawP6p3jErpZkN5L7FPsiJ3bo86J8",
  "key36": "4Mb11jyEV94rf9RSVn21oRoHqTgoLESBevgdprF5dvUmHVdMYyxdtitg9t2nTYPhpuSat4qAnF7yMY3vSSxrc41J",
  "key37": "5G8UH7pL5SrqX91RP4L2PSTFQYUKNoo4EJqDuACgDscCs6LAR2m215GsvBZbNvhvjHpCHVrBJdbWVBnXe5ebX9L7",
  "key38": "34KwMiXusNARaSzypBCpRseD64RRdK6rbYDSU9LhipZ3tHTf6dAkpLQhiee475n5RcpZYLeGwP9tGWvvmLqHJFwJ",
  "key39": "4abfpdccm6ptX4zYq5HY96q9XKZEJqDscHhbNWBMneErqLzr4DxHk777DLPLiy4afjtFe75GUMnJ25uofs8V88sb",
  "key40": "5G9T3qGjqaagEEnzLh6cm7SiSGWc6o7gFG8iFEwm4xXy3gWNNvXccbMGHgTR8PQKmucLDi1UbT3buxwa1AZpixaC",
  "key41": "2k9VybZM7FLDGUVQqejEDHVXY7a9WBQL1dnxjB8YN36wfJekx3VVu3ixAFc8afbq1eJRBDNq5XxuyzC2cGtiSNZ1",
  "key42": "5UDKwCuTazk4bWwv1AhxLPtfWWUvih8KvoxV7LzN5nKYdj6pQi3dnsmr3UkzQRByUQ4oMA3GLTfgK9W2wVH91G82",
  "key43": "PtkzwVuriUcaB4CuMEgSLPhZNQ87uUUoKHm28LMQ37qvXsZY15Hec2r7qfJ1BPtAMPMFc6qmRNJYWbYTt8nqKSZ",
  "key44": "3fK4awJJ76qTFqP1FYnXwW9HMeBSRPdGpGbtH159tTGvwadHDte6xWndUjMpKDAU7soS9u35FFgYYgZHUmSPBkjW",
  "key45": "XGYjQHgdMcLkiu2hGWWbouqaqPZXn4axG2bQHjCKvec9ANp6jkSgovXHbfhUh46uUKT8EkepPcn4PNTVbSUdbVL",
  "key46": "2a96eH9P5SVuc8VgZDzFAnfbJktGyKC5MdSVPqWHxmHgwvw1e8b91Vh2htCMKMZ1SmbyagTS9wu5CUwFoGp1FgTP",
  "key47": "FZGwAmeSFmXnyzZuiXQKRyyPMteA8V5GTTwmTGk4uSkEAw1vwqXQYo2FWsbcm13huM1zNBbx77gzEjWZXTs3WnF",
  "key48": "4t26fzEWbg7Q71zkceG6RfnAMRATy1gwYHt53ZG3xLFRPo5ZWpi7yyy8Lnj2iRV7V4Ty64UdYQqMHSDyHmk4KfeG",
  "key49": "4MERDAsbn3aG8ZmZvG3vVGRjKacHrNwGuKvHFSQEkAyRtuQoo7RAMhxZ6ExQBm5daURuNJ7GCMc1SmzcpUdmNTP1"
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
