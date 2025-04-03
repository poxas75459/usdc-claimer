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
    "5NRyU2ueq2Girf5F3x1EHmjLGKcfc6hDGG3zGYkcC4A8mckYqboxFUWRQWxyLmN1z41hjJDazQuwrPYTCdcotLHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6f7cf6eBL55EP3UpVpnwG9rKCfwzWAvKUff5cJGKRgS2GAprWejkRvMdZEeH2yK2LThrh3RvMQMMv8gNxpJL1y",
  "key1": "48XRjqJH62eSP1cNzrKTa1rjxV1Hd3Sv1z1SNFwPvHWxYbzHGg3AdkYHBsy1fmo6UTvXRPUfALQ22jrMESD9haWZ",
  "key2": "3tHnsFg6EnhNj2wvEAcPY4UwhQ3JF7uboEoZ7vDqv1SWwtohppmAPW4VVafABu7gimmNHrJtrtjN9tJvoa2WgboH",
  "key3": "4b3mAj3eq6VH6LfJNb9uFVyTmeDvPTCfMUMYUb8TZW6wu3QHqKtjmZ8nBm34pApmhspEjxCZrfNZuCpeW6q3SVx4",
  "key4": "CEaetic3K6CcAPDM8FrE5qDDs4Dv1ZCTihCpaNsDV6jfgBmi6Jv8tTKJHY4eUHgz71tY8RUjT8MrubWPeuwG3Rx",
  "key5": "5nJV7ZPNBHjSEsHpPofaGCdETBTqVNy1xp3DRMcyAgsYEBQB4H4VmBxEPFbAXkNtNDsv343HX4B9p8Qnhgj1gWWn",
  "key6": "24SgHgdt5CkntGb5D36GuSHrCixCf97Z5TnNYdWy5Heq88YVTqUVKrVRga1TzDkRY4neLiTgjTKKVv1WG1sCvNkA",
  "key7": "4FFNvRGTxsemT37zENSraashULzo3GSE5wJYkHN7EbpwvUAfSqvM74qj95D1vFfxAUpC8zAHWMF5CQNfC7K7wfcu",
  "key8": "5x5oaV28X2SYeJWVViwFp5NLYkZYe7xTv6iKccPfZhSfmSZvtHvsNTByXFckfDM2oJ8YXVrGnGFVNtvrmPBDoiXY",
  "key9": "2q3sa3zpxGbWwvfxHApUbzczUGqqeiSdU1exPaAsqzwKWj3rVLgyQkgJJM6pQ46twCsooTUA2VfFfuacCGsbLMyP",
  "key10": "2yumJwNaTSQLPjuc6kfZSa4MCtakpDhRD3thtZ67inrvb7wPXWo2BVRvr21ygfauEFLYfZkVt2v35j3K4sCwXMnG",
  "key11": "5BraZKqffiB6qPQa9pzxF7yMPFPic3WJVjk8LNfofMFHnfkJQucg1JmPCa6nFXjnZt8KfMqxTPpv3HCJkTAXXrbW",
  "key12": "4zEJC6khEaNYfD1cFKNePg63f4TpeRgDkSBxRRqLTmUSU7rCy7ubR1pizGmb1eRfr23QvBa5N2Rumbqbfqq6M9Dn",
  "key13": "2XRx5uFL9b9UP3wsfLfV6yxmfSrBWUVg74pQhXZ5Ty4SM1qA9zmm5fxa6NNAcRbDC38NVkwaJ7HyFSuVU34vb5td",
  "key14": "49KAcu7GfHWuzQXPdXvxRgrVhcUZym13Xof2aoxndtHfL2PuybmYp59LCMR8bpRR7h8PgVBZRZhkmu89efNjFhyA",
  "key15": "bsKxRjhaYgG2BA11qHbQVgENKd7gnPyfSDpHLGbtLibvMVPtDj1JHGuD7qNo4Gmrg5E4ZDCqpibAkCwtjZzCYtM",
  "key16": "37C9koAcenyauCAJWD4vXBAq1KyQMhx7oawv9eKftzAfSJAo2J9BVnTUNgaFtEWSUaB6A3cMU625k5P3NcZeChLA",
  "key17": "3Ton2ABtPX9CwfyWHEghKURtTdAfWfpGooYLS9FhEF1PyHCfaE5iqTLESDZx7J6nnXdaWJsrqGkb3wfTVn7TjntZ",
  "key18": "5S5fZ2Vg66SrF5tTAcgHKHi8CwdPP5UEJmVqPQnMqXubqy8XKiEERAoKbZSZ6jbTPCRCnxgBfTJCKSmpmxXQEHE1",
  "key19": "2aMnvJkAC9VR5ppMYFNZ43rptCgjXbTJ9cWm6VfcF6iSuiDxB6wZmiQ6S12GxbPSv7fhdqWGbytYksyNnxp4mFeP",
  "key20": "9dz7dg9PVAmwQ7yhdu6p43ofnzDJkeENmQCH98ZqvwobEQiydFP8LjcsE88mrcVJBhvuD3WRK94hshGB59GKryT",
  "key21": "2UJKFpByUpbXtcohuVarvRevj6y5Xr9xHsYJz4gQ7fVXfqz7Rz8DEBMcsHxwGJ3RGToFsy3R31LhMhTvpdceFFEG",
  "key22": "3pSizB3U94LxzVVqKHZskETfuPpT1GB9C1ukFudaiEeNZjdrujv48pfvZmUsa3ajfq6gPvQhbzRa2g5sLp2MGx86",
  "key23": "23U7RtN75ZwCuXM7LxLxn6NLtWKTXQPwnXf1VfatvkWMBC3YNr8LsGB6fX2rDrfGwpPWp7ctR7g251BAN4zCB5FB",
  "key24": "4XFThL7UdZacEZiSPzKbEamKuFz1BEaiPPC6ppsE1ZLq43mviVRMEz7UQeAF2BcVnz24FyHkvnx8eyJ1XSGrhFpe",
  "key25": "37ZxqxZpvYbn6VMFoYiGXzZ5YPt2yTDNnEayGKDMkvRHirjALif12kR1NFuGvW7LT9rxV6PuCSk6FoY7ygU1tHYb",
  "key26": "3NmnRqp5gt1B8PT74f5Rc2qtZWuDb9Z3kBAxE9d3Fprq764taMuraAXqSHU7TmqAoNSSBx9yqGSQmwFdMAvqH9qd",
  "key27": "5wreH4SDfeAbkicn7Sbaxhi63fNHw3h9AYDmv5w8AYjFeKuiykQNoAVLT6tadbLhdZQ83XRr4Q7FJ35JD1C7LfHK",
  "key28": "P91ZMkvuqJXjMb8TvFTfKAQ1jHdkjzjAzT9dcAHNqTE2TFxYTGJvmSPSLbtNrmsoXfEdC7VjGVT9FuGLK3q6NjT",
  "key29": "5h7YCjQkK6oYJrih6fXHmjdYByTpY8GECqZhDVqmuJYaajP8vHUdQ9BZEC4PvN84tEe46UPXhtHHTGS3m5uxu9d3",
  "key30": "48Ge2TUgAQqW8GDZAMcqrmQivr6puHi2VgaacVsYb8FdNPB4icwYi29N79EsnXEzp5tCax4cwFo4KHGeeKQTeupB",
  "key31": "4MRgyie6SU5Gi5JK7bxK51SgBxCmq85etbhu6KXYQ3kok3TgHKpoWeR4RCsui5znmL2twGZFGWtGmCSJ699cUnCM",
  "key32": "36kDfk6xU6U3GeeEjrbEMVszY71jyjUFz8vjiinFkMYpjk4dZRcK7mFhuZifDyHuFmuwZ291xGyTW8JJMDZuKRTZ",
  "key33": "2cu1zge84ijbk9io8aDd1B8nriX4TAovKhRpuofpuMDR8ERes9aXCpZdCchvgcs9yrXLTQ7XMw9j4LyzmaJiUSsQ",
  "key34": "Lqv4QXH6Uhqc6HBNKWwdqNXbsBSVppyiJccgSrFNcUAUDUc3N1swTFHHPb9a4rHRhy5S8YZKuXfi4uc8CW8Xbu2"
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
