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
    "3CVCSSb7TNYud9DzrhA3jUHzSjuFAudMZgrq4wTckZPmnfP9BH5KwHxQwyVYmMjpJ6aRy1R3DGdCpCHkyesRKxFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPGHEWJ4v3e9eRZYFdqxnTkdMdXE2XL8iWFcrtqvMN8mdy2z93cdcouS5YxginCWD3wzMmuUQSbiCsu5N2dmFPn",
  "key1": "3hHWmmKqFQoDpCfqVVPy1KkpteTKwGZwmr8bAqmLPTch9bhWvS56KHnJ2VsLdhX4YWNCF2v1kjA8NGqAqr6vFLuq",
  "key2": "5haJWy5URJfyYHNW2cyWygYYkviBKoHBkxegpnJtdFigdGKLHYhQakD3nRweycvn6BJVLx3RJLEQfLGnx1WYrcCc",
  "key3": "5q2FKSRrYEouRABqeYcnz28wzbXEXy1BBiEwHXqF6jYGv4CdecJQEivaVsKhPNvw8h191fDKftmUGZqMrXTyCRiy",
  "key4": "mZoCFP5295YcBuiSyBbrH8R5QYjUEm9XUPp33tHxXXazeoB6KqVdic9RiRfmijFss2UG5wmYRqUh2UoQqe946j1",
  "key5": "3EudPpFJBwFLQ3uKtqiTn2w8KAAh1aebAx5KWiHHpyaqWq2T4gUW4ks2sPAfhPdMSiJvPFPgFx5buYUirXBmV1E2",
  "key6": "2yu3F8mFsoeuPgzAbWRFiA4DtgePD1c5mVLmC3HaEoSaHqEVyxefCEGbyefypKtQNiEZ2q6PhiMSDXaWJZotKkZV",
  "key7": "ZvL3pV8354xxACRyVSapcsXDYzVUs4RcVhGccfJX4CBL5hB6biBu4GXCjmSE3poReQpas9YPPdP61oTS9EJy5GX",
  "key8": "PJ2Y6H67mmNEm6a8FhqUsFXgddKLnMF5YPYY2jyT51iqcQX9WtN8k7ooEA1CT8Bvy6k47ZCEUj2rm1qK6giuHeB",
  "key9": "5i2BP64kreLiFtjz76kwWkuw1JYrLB1BEjq3Hd7SGTrXXQ9dMxnAbZLzQc6ju6nM14vrToq3Gm6hamJccppNDXA",
  "key10": "3KxzbWCWrik8YJzWPqJTbqJEQUHBK4NRQZUEM1Vna5Eg6bizLVE3VaNPAhqmG9PAPeNCdtvpbUFYnwLjFYcJVBjX",
  "key11": "9fLzHTTqy6zMo3c2jq6TTkcjxZ8TCyWhxFPfscjuZLuU1zgAhKcfTEKvP9nq9Fr4SmZpEppzi6tpw5N9LabTBNC",
  "key12": "2SS7iLUHCQeYQnm3UxgRtUbVm64Vm35hrZVpZtdTmpsorrQKzeC7yR2NVkJvgNuEWjt7f32cjfnH8ENxtN88X54t",
  "key13": "4ckarRp6WHNE6vCY7eLFq8Khw9jTJhCubeHhB9WQYQSQFJCo6nvXzcWzFpC6uKjZRiLx52Gn3yjJayVCsHQET1kJ",
  "key14": "3ZJgzESoRcew1WpXdTfvqcq8z3jHaDtzRCV7GNiz3S1hg2Pk9gVKcDWb71wVRfsQtwPGZcbVR6uAFd27rdjUKTqn",
  "key15": "2Zy1czjVZeF582LZec17Dh85oea7cQ2sdhC6AKXL3CaxZmfEXk2QHBffUKatu6GJhNKEzqYcD697xhF7qEmVa93F",
  "key16": "3Bedo1BAMoEnDf9bXCVJp7AsNUavTxs1ESsGQgT1XwjSquk5y7ikrmrw1rZarjs9JCn3qPEViv7BwGAeYzgj1WdU",
  "key17": "5XznKEJqNXi5iNuNqhoxkKRgyVbjKwArP1ijFgfZhN6jw2r9KDkswAofwFKKyhDpY3La5ZtkXikhvcXWGzAWfsEQ",
  "key18": "4w2ouXzZ7UZBsZw3eKSRhH3c9bik9aQHge6KXWGVbTZUWmHjEuLpY6AW4fGbXCj2CEruvcw3XVHcKzJAwt6cr7Tt",
  "key19": "3uu7mQAX9o7ojJn58vBNbThExNwmjc9YiJp83pASeCwEfNG9Dfw9PbgDXMnUhU8RgY4L1KVoDpjJ1TAk1X8fwCv7",
  "key20": "4GkugGYET77h1Fuz8GVMwy1fodZku4gK9haCuAzECeSiN9EFkYmJA3Zk3eYmGDcejToJWaebX6xLzYh6oepsmYMi",
  "key21": "BFS5esRw9pg7Yc4LojPHTefeiHTcrUvpWex9ahFMtHsX5pmQnh8DcvnSXqQWrKXFCjYwF2Rr7qrA4WJomPTNjiB",
  "key22": "5c7YXdki17ksqiU2RGDsRGU7tgNqkFUDQCq6m439nQ955Y37CRNB5pcrhgNAPj7GjYHH7eo4GCWStspcY9txLuDW",
  "key23": "4BDbMXAXeVMZJ18GofVQAPUYs1mottBXcvRJRSNaZkXMFND2NtFGXVTPck3ghKQngwsiBXNGT7HVV4bZQ2GQ5zg2",
  "key24": "57pL4b6ZTvuqGSq6ejWJUkst7m4UCbyLhX2Vv5iZM49wiXZSXo6Ptp7G7WcGVUbcnzJA3i5sBfXJhdk6MC6KR76x",
  "key25": "5XvbgT5LcZwiuMJx9DYauoUCf9Mn5rjrayUG52XWueYv7fkXquAz8Q4ZXsi1H3GodNKkN2iwjiznUGpnZnGru52j",
  "key26": "4JRm72dKJaAJF8SSeUVKFtMtdafxaAWUaEmz3WWAwrx43gt6EUC9Jg2TKZy5dcCpaji4Pc8hjDjW6F44rEh3pnkJ",
  "key27": "3jjajTRhc6GLRZaiVMsgX3FnZg4vJebiHcK8GVH9y3a52saKnpJktb3pQzHmGmHiVaMwvRvJdYNcbkyFtMWMNUW9",
  "key28": "Fg6mHZycDeLP3y9eJ3TkMdK1Ghg2BakqA7cRSmQVJWBrkkwykPNzKeHoRXzbAUUq8FwBKghotFQG2JjB6gPcLL1",
  "key29": "4XLNWgTHMdWqQApACqhkHjj4gWKgWEjt6uBXnnexLq9pyShHnzEJL9yhcMtGzV2xX8762JTFPMnNMLUeoY52uVXn",
  "key30": "2L9A4Dq8mS7gt1769eoSGqDogdPkA19j5cvS4NSNHdvqmgoR3rG932JNhFASzLeNDhMsGbBdZtkd5jqQb7SqAzrX",
  "key31": "2Mt27EJFV6DQqw3RGwHgnQVWesq1CvKK2RQaDYqW6iVLzzeWjAgLWZoDPhUAefaP2JV8PA59Si26GG6DYhvoe4YD",
  "key32": "5EaKCZaqE7bwVrPHLnYpC9nUNGbC2G7MarKawa1QSddefdpN1eoogD4K2pRVcgrXVbk8AbcG27Y24WHstBoEsBEP",
  "key33": "4znqc5zBgY6escAMnTcpHWXRBy3G3jxVwKoFKijUYW128SYwa8guhyuWFaSWMEWcPC14BmYFyNBMYsNh8vnSTRz",
  "key34": "26WiftnRXsD7vhHCQxxoCNJwscG6VLqDopQr5GGLLPeqedVeNCzNFeCEwAcDa3yLtmkVm419MMSRvt1ecL76m3s3"
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
