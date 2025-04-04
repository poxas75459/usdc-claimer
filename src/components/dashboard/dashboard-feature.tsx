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
    "4pGR6kPHp5rc7PemA6HmqrvrNd8F98sw2v3pFVRg2oXqnMG5PdsjfXDJhj3ZDtmcimY2ZLcwHp5JYVshfr8UMxtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38pZMVxb41aW5NUDHxN4JqvR3cEdwWbaoWXqxFoxZbzdfq3TFaeitFL2Gj1ZMm8RHtoKyW94h9ZqSm16Uj7Cbwzw",
  "key1": "51WJsL3gVthH1t2Vgggsg4i1eZDJdZ8dfv2xefqiT4TFEcuGBNv5it3evuiPqVUF6BmQcvHzUduZmeeksd3KzkWr",
  "key2": "3qi6X3PrnWm9yAHB4koaq4JzgokLLvGrAotzztbSLFuyeW7tb5QQ35jb1yabXcokHht3qbTTP6F6RQbHaj6JekDz",
  "key3": "YiBJpCsKfqR7xPZxq1N8H8cC2DYMX2JQsisaJxDXP3im9ckP3MkXJ9R7tMPWibfayZ8Ud7Hpv1xUiBhahWLfcPv",
  "key4": "2iJogMKHDtWJ5hbPzUkRxy8db9x6XAbWPGVBJaPhEG4RWCBkvG6VY7CQQ2hYauN68o5RrsTBRGx3iUBXiee8w5LF",
  "key5": "3HBS6Y4dktpzq7R9Wq6EN1pCvB1SF6vDfqQYYahEwY6KebSTfmHs8iqnhhwxUm6Qic216DsfhVDHwS4k7KaQJPGQ",
  "key6": "4qupay9y1ULBG6iPKSo72CYnWAVvWk4Amg4276W6788GjLQSZL8kWrf6XExozGrAJCCrJoV4bEXUJnifoH7nw6df",
  "key7": "2YMAQj9Fq8E9B9vvRfxJhcFgQEzRGWr5aksFZMz3iUUGhsipQ6otTjbfcqcPN2wKAsiys9gjdfKVRxBUiUMqkajK",
  "key8": "342iypWkQEwnYVEQUANtDecjHedhoaP1UubeNSu4rTUkeVzzrYMpD9k4mBymmX4vFGaKpveYcCAybcPRy6h3gWk",
  "key9": "2yL2NHFLR9vyZ3qrirtRbCnhmFgY9RkyqBFhh4BRcbaULheSTvY7ZdNMYRiBibQRqU5RHNwH6PjUCQxC3J86TAQV",
  "key10": "2TaZFE8e87v6s8WQLSjJSCsJEEEgmXejFD2WNkQbFHbtP7BSx3ft7x3AuAaT6VzUTwZoupvZfr3DCwq4MaETYH8R",
  "key11": "48DT3agYxzHKLZiT7s9MoRGN684pAxgoqVnhRBfKatTt3sF8Ngha569NgScbmr6WRsp9NkQYhL7ty5nj61GUC9ms",
  "key12": "2N2Q4aBcFrG1WSGygVm1W9Sk4qNc7hoZ5KeXmtdMv1eUNqhS8DMNsJ8dUUKsWqDym9kYK7YgczJQc39foUSVczi9",
  "key13": "4oNfQNpW4125iuzoY56aYQsNnRAR3qaZExfoiVPGkzomkSM4FM4Dr3ahDNGqPTqFpy3r43z7xW56ruDVqx1oGssm",
  "key14": "4WEXQ67DBiGA5JG3HR5ch3eznQWAYCsK4M9j1LXFQ8TndKphMjjXw1WH7pTdHPdqbaPK2w1A6FQiDTkJsWhFtu5P",
  "key15": "5MR8jwpW3pKMgH2bgWaeThscKCHwYRjXFGQWB9gfUijv7XKbQNSy6mhikVHTvQEj2k39Mazgze2xpxTerTtUZFrj",
  "key16": "4cFvgxDDXFy4vhpYLUeAU7bU1M1DhUPTPVjvzCKMGoiVEqSJfYr7KY64Ri6NpTfXvwdxbxj7goZXu5ckLyJvdrEY",
  "key17": "5eb3ymvtgHRwen8YNpd3e6aCxxnm1MHFNUPaH8eSc1srG9dviKdCcpBYJmkfCdr81newBCWw8mwPVB6YVMYkqEYR",
  "key18": "42b4gQYZivV2yn2hpNt74EEye4Erts15ibJx1Fu8Ae8xHi9pNSqXeVYhapmfK4kS7qXW4asq4ExzrLeyjAj7hGeT",
  "key19": "33yP6nWdwsQWL71HwGJ6fZxkdEykZ98om2xyp8GJDKruCNScJ2s8R3FgsCgZZ4kQurZwtgZE7co1rSmEZbK7Vqn5",
  "key20": "5Lh2tmCiqYWfwqY64fnprXZF6BV6RUhKPY4TWrSZKpe5cUW1gLQwcKL3hHU9KT9o3y3MN8Ga74GofDBYW5mtvsA7",
  "key21": "2AR7WDQN63asjwmKYK69M6gBKYUrUWau5UWyDZXhczpFfhbFibytbJHJTsffQjh4986YjojFpZWyNjTFojMdfg5q",
  "key22": "4XjKh1xgYNwwrRTser4fE953wXWEDxRZSg5eMTRR8pYTTcm3tYEv2HthCVpHcRbzvEzTvgcifLJpd4LuwLrvrZvQ",
  "key23": "htYuEd4nvCvwYkDddoGUDdw52GDV7dTRcqj7zvGE6imiUYHLTBbqdfqgg44x3ANUzFWqwKHA1e4ENDwyyrPH1WT",
  "key24": "3j4oaZtyTZt9sS8Ud47QYgkVLGtFu4uHsZeTT2urjjUv2N8TNYrmjhn7c8ewD42cnkhnmiqe6EmGQvLoM4eiCTAX",
  "key25": "65RzjnRvmMfWngS3TqBZyoZezMAbDc2DZPP8raQ3CJoG41DrPD9er7UpVXdgi9R124b5RS8tQDNmMMuxhGoiDgt3",
  "key26": "2zBi9H22rhn1eTxY8Me91xbjXeaSkS4tpjoeSj1q8K9pfZdQ9ouLUkeG3B59zds2eCEbvXhr9NeAiZ5APfTpsCeJ",
  "key27": "42TWbcc5vNG9piDJCE8KYdMPGNNXvRqryt37D5AgvMRcvVStSo9vrJbqenDYEUpYxKcHYQMx3ury2iJdU1hjSCcw",
  "key28": "3WkQF3ShFvSwKHRmKZGZ5ou3r4cRK6nu1yw7HCJqjzcFJdKomwtY6isB8qk8YhvVWWp1gmU8vZ6b1tSnKADsJxKE",
  "key29": "3WmdzWU5iPTRNjsjiZ4VDxRz5D6sxBLiXFc5KEwTBtW7M8xPCLc21FfAdfNyWWcfA7fBqu9d89EjhYRhzi9siY6Y",
  "key30": "35BTDQsTqjJrgXK3PpFn7aaSMKXe82CC22w3PFv51fHEKX7QRR6vAXjK1aLpk2Q61XnxwaBjzWTSRNza8NvJz9m2",
  "key31": "33pJTfrMXb9jpZButrxLEXZWshwqa9Xjq97z7rurAggTdAXNvY88CuhQ8tj5FdHPVEWAaqYfQdBoJvDTp49b9JNG",
  "key32": "5ALbKjyzSQAY7CeHGtpnHVXh9kR8ChT9GmJtbfpcY6GLpZhfMebtpN2qztbd3wwtLCqJTFgySsDRgk3YdyabP3Yv"
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
