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
    "5vsq33Vi8pUgt6ZZoZYRbyJnK4ux5HfX9QL83ZtNeRPSWDQaEthGxgWmB8K7fRTQveVf2rTTgcTBcbakBcSMBSRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x9oZH5DyJpLArprQ9FU3QDTG3tBxtaBW248cCihpDPJLvtCFzUVN4mvHWe8ViAtfUKMBkWJHzrBhAcTNVCtogx6",
  "key1": "3aGBSXgzpPE26Qn5fRpvch2u9dLWFmUseoe91P7fSyoAuZn5pV4ZdTXeEw2y5SjuTH4oKyMkyVvrHr3fnxtmo67J",
  "key2": "4E2HPiHGewoC7Z6H3PeaHCw46bpW2V4s3ZLt51hTxHntht8ecbz1YzUo1vqorBmBVMDP15sU231kcwXYZwsRcN8b",
  "key3": "55CbkrqyJByUpcea5Xtty7YSv5qYrWgNtD3HcB5rZXKfaYzbuuUrV9tbj3vUECAcvaZNHARL1RNxegxMTGUDKzE8",
  "key4": "2XBHWGAsz9BP8hQCFg1gS2rPDm9Gfko8dFcBLcoA2rvx62nNhG6eCZ1FeZRMJVb6pk1U1pfzW5Gn1SWEH8e6ycdM",
  "key5": "2ke5zkTTcds5nHguhTbXqqeURdcPBD2cKXm3hSYyf5j1wuV3KPcoNAk1t52TghbsCSVdRUKSc9FHJJscD75wJ25d",
  "key6": "3wbgmq6bJmJm9J81JEz266i6YmWbnQ6HmMYUzei3yeobogDvmtJZTRQGKGYn7CZ5xpi9cFqD55dKpQsGDVbHb56f",
  "key7": "UrR3zfv48waQ1tE1ZLAiRgiZGj5UPmjTyR1QpgeWCaZRaCKwu7t99XjNJi9p6Fio47VSxtGmiNHPcwNqC712nMV",
  "key8": "kGeTmEvSBTiGJZjcjmptw5p4mKQUuDsfcktQS9FiSt2MFsike4fP1YTeUGCr1UYhth8Um3d2UjhHcnPSSXSZg6W",
  "key9": "2EcuB4YrrbTFZA4x1Fh3ddCsZrMAvBUWSsTbTZEUbRGk3TTGBwZV6SKuuveyezn4AfgGZJmw6qgGZiQAZKEJuM1S",
  "key10": "56GvdaSFjWoFJ39vPGanNpBARy68DxkJtF41RrDLrTvKNjDmK2VABcvf5pFvSfAbhRcYZJP39UEs34pTFZ1NZQNV",
  "key11": "3Uq6rayy7GMxTDHiLKJS5Do8v7zehVpB95uZN4Vs45nQWrPGSB88MKVPmj9G4SpNnaXbEr9vGaWz34hUXa2uZiRL",
  "key12": "2VVHLGcHeUhjkPamRdtRbKHQwcG628em9znkbKVc3YWv985FtT9Jo3AdafJWmhfg4oomp7Zv2XMTdqxQeFc4UkUx",
  "key13": "4p2bacNhu8WPV6gAMfkBZFFKMp8h3pE2EGta3y3gtD1SXHKJFxTJjrUoyfsDhCJ6p6uunSW5Q5hWWTk6FVpKxmFR",
  "key14": "3Z9dEjaJvTYHqXGrSRF93NQhLh45hydfZkHCfpU9P861pvkTwuZwVZQB8JHdXxYBLo6bH8ePN1sdEJXHqpkq5aT7",
  "key15": "4DAsyNmn1F76VHGF8WfaK9Cmrwun348VM2gtN2GPaDVbAAniHzwT1JZFTXRPV4L6DvkT2Rmen8vAYdzhZ6kZbDNU",
  "key16": "4jpLaocxeRSbNqhb44z9av1W8qLY1nnzzNjSFFN5cAw3wLnjunPQVbjicVpTLrZa4eYBtvzpPby3VArsz7TmGMtq",
  "key17": "5nYD6q1tncg2RAYiYv2EhpKpw1djQEcXv4tyiWeiSZVdnhmATbrHAgQFwZtiKHvDHr1ieU7n6V4ZwGSnahMSbYR5",
  "key18": "UpEmnjsU5HpMjZQnG5KN5dmTa4ubYHkp5casV9ByZPCwNDeUjd3rUfdwHi9YXBvgH2vqwukk1Y5KBimY9KXPQDM",
  "key19": "2aNtPEUCKjzga6cFpuQVJXqurkpwvVMoADH8sbBfG4bWS4eCj2yqnchjLAjiKRFHvDbpapSy8SwmAHiAwmzEN561",
  "key20": "57En54YTfgQHniupkDr9Ri6hSxfZiJPR9dKnWvajGhbaWzmCheekpDz3mFaLhD7MU9tp8AXJ7XtDxqANQjexZwWC",
  "key21": "4A11Kj6VQqmdJXBXCY4Dj6BpvKGboY79PJBxbsq1rVhDdsPuJJeuEuNLExE91j6iJntbVawuUem988t9hnCGmq4x",
  "key22": "3BoUgvgn1HdmYK3YnfcHNdMEo3mFagVCsB6BorSLhFxGp54cgHuwamJAVKpimvrnW8A9zPQd1WqQtV1XXBKDYgst",
  "key23": "2NHRFziTe5wLSe1mbYr7XSfPjcidjergC2xzAzShhptahuJ2gFcLgV461LeDaN9mvmp17VxgwUe2X1bHAvuCMYEm",
  "key24": "3o1DJRgU71h9jgRPQ5iePebRghP7JPvaJjvc5PKxpFLz5x9k6kcpmVJJyjtWBLxvYptofL4UktVqa8nmVRrMhYq2",
  "key25": "4ULzFW6Qro1vW4qDD2zpnx4jx5TosuaHQnfSYYjgJ76DryZyd3y3ZkxHhKGsA4dRQyJnLjGrs97u9fzte5rbtjdS",
  "key26": "5CioEo45sWUvRJ2pqGNd3pBxdXnYzuBCucwkdm3iLQfnPKUBp4z2BECC6DoKZBr8Dmm4TnWqos6f1CAy4p7fFQB4",
  "key27": "3gKo4W8ycBeT6zw1udkNFVt3drQjZYNcPca7hqYxLezkqDrmKKCmnYtq1MR5BqYGi23VoXR42hjYdn8TTDVafDxt",
  "key28": "3XqHjWvsXYD8myBtHi4g5pyZUNNoScdmhj3H85Ka7E479gD1gNo6sgNEFxwdaTchoSyGSYV4iZvCPaouJdcCp23N",
  "key29": "4TZmCy5VCsg4VHL8pAPWAwdQQakcEhwT38pQwQPFeybdYssAtY3crVvocEsEanFMqEfnpp6hLJax1DdXfvGniRPz"
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
