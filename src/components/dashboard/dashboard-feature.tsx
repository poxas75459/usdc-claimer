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
    "4U3aD7VTppcJtArcCx6jHWRSfWZos25o3nsiF1oePvJb5xXTMHN7icws2E54EDaK8suvS7YE5agUbHxq9E6fgDXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F18CFe11fhjUq7t5oN3BZggFTqhLJQGFywPYJPqyFUxRixMfxjJ7EekZ9Y2W3uYXNv7Ldp2n2Df9Z2M8JUUtW4H",
  "key1": "2QKqnLvC1Qh4pFN5fafa9Zn1Db7aRpGkXnZr4gzEEEXeeFb4aypDWWcNreMNcMtZaKTMQnw7cMWopJgai2Wehmwn",
  "key2": "2h9ZfHTorRBgCicXdt5Yhh9o3uy5JbFYus4gvKboCbXAZquJ6gUfc7RUKSLiZb743coGvBC7f4bpPBojQrmnMzDQ",
  "key3": "4UZJqUuWaNdz8BR2JMaD7HFu6JDrpEAWqPWUwoRxCMwpL6NX9UCmnpt3d7SVc7CjKPD198znXPfRZJYqMqUP8UAp",
  "key4": "5PsXPDUwtqBj8w9D7EMdjyB6jm3ruyyf465rVkitqB2jp6V4pTVg9QrmzGhUhmfTFrQ8GGGQhtoqcuM11aSBLSMa",
  "key5": "55vjSvExc2XkeoVvoMJmZe63E4XG3GvmBPYFRrXzFty9bG3XVMNYvKKxiLh493XQGJ9chvQfndVuNBxzN1zMrCEP",
  "key6": "4ceADCSuUNCoJ5hnxZFxFVSkZKfMZvpD7dpu1X7DzpiybYNCNGLf8Pod95yGUWePHkixN94p9jBYp32ByArVJoeg",
  "key7": "2nEwPbBCNF1NbiPfVo4YN1AaSPmePVyzcUG19w3uqhCtyrsZpgi462tuJ4VYvFBS6Nt7RX9tFoyAtkYEYE856xJ4",
  "key8": "2ZqDWqm2XCMfAdqUV3QPCbRGqWFpHS6dEiQDphX9DtWPPMnLzBMGvjxL81X52n2NLthqRUWqqPsyMwsUHrM4NSY8",
  "key9": "4ypbiN4vjgg7XKNuoJzFKxJevNXjhEDWFUdUxbJchj4C5uwJt762DQD2PspntQsPuh3iH6UGYgFaSYnbC8QPXk2F",
  "key10": "5hmb7fqYRenofSfL5he3Bex2YmrMwN3HpPRybVdbhj5wwm7ywnX4ZrWZhmeiaoha8zrSABBxmQXmymutFqfDaYwk",
  "key11": "9a1Lpiq6D874E6MPFAWYKUazFAEZoiHwJJ9eiiJu66T1q1NTYQrgi9DQhhyVWfQC1BW7MtsPWU2hhhCQqZobhEt",
  "key12": "2AkQZ5aPtwbV87rKczHB45frKiVasSD8SNFyajp3yYjzvFKEkA7oztFYzYTDFzugdUpcaE5ug7NCCaAcybc6thCo",
  "key13": "mUU1hYJzUAg2B4UvWmYeRiXcrNMHGXB7JUkMdfRt4hZC5TcYfMVLxdb7T4SuSzF9tvFTJL6sV8SaDswhJDXfb8V",
  "key14": "wE1a5vycNQFbrHmMSg5WNWwS3jWFNDKkHs9CxRk2twSzHSqAuenvTXW1w6o49ZTtei1i69BggU3CbRhk4xjWqYG",
  "key15": "4a8oXHbDR8EM7TKKn4iDAx9QA2dcz4D3T2rDFUytRtjhrCeFV3QeZo53XRVKTtZeM26ovAP9pZVaFc72goh7bMi1",
  "key16": "5DucfDPJdSF521a3AJM3dj949TLqr1oLEabNwyZ4AU6NBt7DV5mh4RD1QJnjEwTk9exULcMPSSpXUpvg9ZaRCPMx",
  "key17": "5C2JwvxWAgV2YBYwyZ47G4vdRit6gnwUPh8Uw41dBiYJUofg6FBKjtgZKyt1JZ8PNcLGroZYQXtsfsAtgUHAKah9",
  "key18": "2wNnsuSF1vAbhZWBStoap7g2pfBQhhBGqevtwmYqKySj2vqmYBx6FQ1nPYDQtEpozc2Y9mvAdAssJmSLtwfFu3T3",
  "key19": "2RpxZjJZXoUAdFi8f2ETwgo8u1c263ga2er8wG3qNSN8LiUfEPjzTa8pvy4LYcXs2zH8u8ZTspmFYa7Mo7YHuXBY",
  "key20": "46rSvmKKqLKFhdHTwnxBrFjb1GnxUeDxciXmQAQicuZdzLenR8bSwbHHskdQhThf5Hw6YSbP13nJ5pCRWzxHKfbj",
  "key21": "vJHEqNygwb3JGHvShuwXKdhrmo7Bu3XPhThoqxXnuDjTcqi5aWPLEFMCbGWsS23rUZq5UMPtMe8XfJbFt2uTYB1",
  "key22": "3VYTAyyxGTWLQGrynET12Duz2YPST5tosGKFsWsui9bgP6KTMJjYTdn19vZg1iNs2NNte9CSHSDLSMBd68QDB2QH",
  "key23": "4JiqD1kYf48jQ8buf34Y7qShK1B4A2mbWxnTF5xMBWK3ttcV9wb1uDoWuFZ34ZrMZNBGvbxaVYt3S7KmwZGCrFcb",
  "key24": "4ZXSGJM7jqhdfcE7ubCtrC8swWPg8iKSBFWWURu2c5NaiWLmq6CGAcBxHjVCjhLcYCASRbpLjfsS4ksTSTKiPDBq",
  "key25": "rLDV988kSyDoPzhuLxgTgGa6rCd4T7jndVgtnai6HRaBCAqw1z6HHDKGofhjxYC9pZWR6mpQqaXVE2wG3e4UaP5",
  "key26": "2wNRa51bWF5cYityC99GSNoshMnxvH1pVhjRsDb8qLVV7ULkc3zoxjuPDf2hLb2Q3yPJT8e3QTvpZAStFGb69qjk",
  "key27": "2MeEDRjfKcpkXZNqSd68GRGbzrRyqHNPqYy1PYh5U4qo5PozsvhrqxbarEUspc22iNQk6GSXy4vkTzYhzo6X8gCK",
  "key28": "42FnDBo2MNTsES4BbqituYgUywsrpXMs7F8JUiRUy1juDwpyjm4LtAxiTvR1KBHCVU5shcadM28zL5Qb82SUWUkh"
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
