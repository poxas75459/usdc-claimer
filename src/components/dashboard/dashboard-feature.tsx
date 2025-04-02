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
    "4eKtBjh66umj4cngB1aLiFwHDwhDMJiFvUSrvY5MiE44U5SHgzCMX6LB76MZm2ipsdwHRLLFkKMWGLvxYpeqduNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HQqZQJoaT4cP2z8EatyHvjeFH9L56xWaCnQz2SoQQXz1JHoVd2wF1s7VFL1sFw4LGh6s7RajmGJQiAxrzQKpeqA",
  "key1": "ki2R62P2cE85Um6PVDnVRLo3KNKKRTS9xBe59xKVZcyBMaoinJPBmc1sJUjyroFM9A6cPiiaNFRgtixwh8w79WY",
  "key2": "FZcpoU9ac8832q846mqMAqtMXxJGNCQkNyru3MpxU4pBhEJzCu3Hoj8F6DtrjyuFgnbXeMnE4imo1W8bD8tbQjY",
  "key3": "3Tk59zQLFWTDYdxAJ3P1Ex4pfw5Fs1rPq8M83Au53Ue1YHxeE3eLLiVpiwJ9Rp4xP7t3rs3DhudPuRFP735Z7nYd",
  "key4": "3nKELExxnavcS8qHL93xo3b2n3HN9PhPTLR6awawVayvUhYyiCPaPeJAHBJYCEYJFtVswKHf7hB4f2Y7DuRYWAW5",
  "key5": "4VXZxHrARugWEkMqmdyQi7agtDEnSgJKpGvbK7SxgXowadGLBobUtaHgzo915kofV2ewdVBDP6rouG8t4SEjtJnn",
  "key6": "2qZb9FfWTRtYPEJPzdFAoqz5gcgMsPzoSgCL3ETyjSukn8pZFP5HoNA6Zeb8ubFnDtUQNbxPvdpCezzBawr6XEFH",
  "key7": "5tZoEj8zNFAEYGxhw5V6NFHQ6ogtPT39McyjpSnfEYS2HJhXT4EUc2auLTYazcbTn2jV9juW62swsE24fps8r183",
  "key8": "55DkMsNHce7UW9YZdsFkifXjkYN6B1Vx5j8Cz5k5TY1Wf89awLoFgKafG9pW4jTpBaempBLLjsQ6eoXBQrvkHzLU",
  "key9": "21rWEm24Zp6dLTE1P1jGYmdNypUcQCfrJcq22oq65ofQnRwf92RbuWQx3GrUaPYFWgodGummxyHuxXwqkudieShk",
  "key10": "c6akrRVHh23cvRskCWZBSiqSocpa3V6iHjcVFJSvBoE7boMdq2Jh4Q1UQnWiQeG5s7iMrbjaVi5qQv2h5QLm5uT",
  "key11": "wRDkVsEK62SgDpfLj6YbAdxVsxcVhjmLdPcTazmj21i4orYRHHuMbygox8F2PbTvgE69AmkXTeDc8ekDjhkt96c",
  "key12": "3gvjFfCJSffpGXMeB8py9eka4sD4hnqbF5P3iDNjxASc65vVNqnpay4XWKsZoBAAWH7nm2wZTZYZidvEkNmDZnL7",
  "key13": "2q3LaSrKprKTc1z6kQp32jaBnFgCAbrCMveviTacSWp2xwJQa4vkBUkdKmmiqhrm59baUMmf5SEH8ifs27EPzxCP",
  "key14": "32ynL14YD7x5DvJgEYsZXYEvCQYeAEjc5JZkZm26dxj9fiFr9AoXxUoU9zzuMERmT7bRcTwoMruwwdgLGS5rYwB2",
  "key15": "2aDiueMn9coCy4scAGfzFF4dQES8srCRdgy1a444EwSrbi989jb8En6HJuPq37ry5UNAjdy2EGDkrA6bWtkdw5gX",
  "key16": "23TU3KEdPsNTjrKug5vTfV6B57gqwjneYrmtyKMVj4m3xjvJyjwLBommLRWyyMpUwNpbWH3eQKGTZZZtKoNga2eL",
  "key17": "2E781RnMxzx5YWTRuW8tiswFBH9DKSTpbc2km7CHHrz4GWeomHRgcBHzPmbTq5756rTp3TsokWx1NDDWKbbrP3yR",
  "key18": "MVxhpA56K3reVMWh6GrJpSLoA7h9iwHtYzg3JW2nJyRXjkP3PhVcknT6FyoxrmwNFjAaFHrduJjmWqRohGPHJTc",
  "key19": "2iXeM7Aw276sVJpghirjcDDJ6Zk9yLn8hyDjCyRfcjWiUgftG5tuw68xieJkBAcRGGuzBqEEvswwsvtMVVwzp9Jh",
  "key20": "3HqrPFNshzaHZydDefb3Aso9SfejQQVThTvZCuAuH9UGeRt35QxHJ8QLbaw6BimY5TsY2ubgCDUad48gnppgHEnx",
  "key21": "2tkMbKCUCL3y5dmr8DrHMLWsuGW5coLWbDHduS4C3HKL3eTL1bCA2v7LN1nL8qZXPD2Pqf3AZVdnwqzGYtPrsobV",
  "key22": "2pwn9Ga2vmrndS76uXCK17VFvVzMCP3fHk1VNxK5aWLLvnP1hQJEgD4BMnFa36JAqxtmozTBogL8Y5W8d7cfHPBf",
  "key23": "4HPaJMH2JBkakJTkjyMtMByXCkYy64NEao6Hosh1L4kUHvUTDUKQVPe4QELgrVv8vu1ttBAqcQEPzzam5m3PFoqc",
  "key24": "2gUu8rTrENqaHqAxo1opVox3vZe1iBZPnW1H9ZEyr8kb7Kf9T6ePTxQZ9LAba64t1CdxqZURNXJQH73L6UZRwuft",
  "key25": "3f9kVMH6u98hC5J8PTRA34Jqd8uzPvb4uiUERjDenyysACRtjgLz8AwJ63fWKNiymCocSKhHk7KrozxKSnfARmeG",
  "key26": "67F2FZukxapdmZRs35h4Z23b5Ty6rB7f9yBTWRvUsBT8AVwyjPirp3NQJ47qSWBaBx4Rcv73NwJRPjxEi8hk6Fc1",
  "key27": "4TPTvcNBYbB2bKXm7tTw1DwTjpY3dTHHnPwqUDDLEksmLqpexr3L6mic3xpU1yxp9kLLZHET8GxXrkvuZsxqvztN"
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
