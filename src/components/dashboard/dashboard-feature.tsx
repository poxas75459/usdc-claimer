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
    "DUAanoPopMMXGJDPcr7XDqiXR1fCbUvscVqq811zWeRiEC2JoiQbheDPVWr7Vy1ppb9RJ1US3y2MqE8nVwe6rQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7upyQk1szUzwDM7ugrYKQjssM9Nwsfea6NUBE93dudrLfr1aq2vUC4gzneCQhUfmepdkbdqbdGbpK1DCipaM2v",
  "key1": "3i865o8i18ctyP2eUbkrYZr2NDEH7pmvhiV2kVsnCJUQzPMy3VckkDWTeqc7vsLtQKwVbUQR9Snpfa9WaEvDFGFU",
  "key2": "3H6hGVFyot6sFuQu76pAp4cTJCyNnkyFDKJCCPkXYsYcLWLTrsq8bBF8j3xgdk1Mdp9TaEMet16PwcESFnfcTauC",
  "key3": "248QDrXFUUpT4MPA8pfR3rGk7nYQgavRUqoqo7LRa1HV7o5h6E3ajsZrqU8cdZBV94MtDok4C9XKv4KyRvLr6zkn",
  "key4": "3NVJpQJf9uJxEjgZox8axU8ZBiMtyNnGBo5U9P4845EDWzYbq4Do6TtAX6HyZtrcLc4BsB6fUffeZYVK29wZerC6",
  "key5": "3soR8Wx5dahcAEbAad8PX1PiJfuVEcbnpJoATUsyKoHKZbxrYoq97DD6Y1ovM4fHSCsVLkqM2iDHgGpumYCdsVUn",
  "key6": "5uoN3dwqwDqD3LTHR8ow4kxmDKSZLCF3d8qnPZF4gwJsGrqmYjoo14TZBcnBjCFW2a5MomLZmnrWnMunkwyUtF6V",
  "key7": "BTXsprwV24qeR9bPj1UsMTU9zwxLbbgSxB5rGei15LoJpSzEBSfgpvFYqhEvWs9pNsbCMYzT3BnNPkK7BKVVkBM",
  "key8": "5WAZ9WbLX64ihwWkS4hZTDVyKZNncdKFMkWsEykf6nvhZjJAYLAnNikZmw26PNYpHKfWXygKFGKgPxenqYy1cRMh",
  "key9": "46EdT4L1Jw7ESuFwULqgea2XXJyGH5Sh2BVgG9t6GjUoFB7o7psnw5Ronu5VrvySy9iAEukhaTVsqJ2fMDYG2x2P",
  "key10": "2HSUrg9u75xaDWYLxuzXxQF5BGC8HLJ9SLSvgmYJqrGcZYUXwJT4ED1sfy7TCc7B79yiUAr3ZvjhNi2qHXtky1XS",
  "key11": "3NsButo6yS2F7kLJtk4d8oAyo7Do7VyYo1WBF3VUGj5RP19EZREZstyum7TkhMhygTRUrvFo4tALGv23RS2Dy9NB",
  "key12": "5xb1C4bNWKU6Heq51ik67sRNWrEKYw5VsA3ZSuf8Hjf33f7qa516g1WXXJr6bPwJt59Ltm2Co64FJuWvqpGEqdjL",
  "key13": "VtwRVeh37jaL9jtzPx331xMjsNPT4jwf4dMyqTAfhMm5JLuKEmjypEeYZ7xaXc1CtW2APi1qyTVS71QAVR3Z5t6",
  "key14": "3fTJGXciTXiSL978JBiSQ355RFYJUM8GVAyvUS6tbq9xoWgvQhDAUaVVf8TSnzTevhPDD2z1MqoUyofozf6NB6TX",
  "key15": "3CHAHAsLbfLZg9FY6n8XA3v391fyp9BW1kizxmvjrqrsjX52TkLfzcxfXbKZAq6ZjN3tF5pm2y3CohrtnHcLFysE",
  "key16": "3GTTCZ8kze8zB42qxnPQrxCKjXuV827VhBg63jMn8eiw2UHST3U4Sp2smrQz7XUmCsicX1LnrWQbkrVpkVRq94qB",
  "key17": "2EPguiP3Z6wf4rB4QyFKNi2Qb9Et1xzqEMgJLaFwZLSJhmQZTBts4FS7pkJvBMePbjgS3aPsTiNZPCosKudxY57y",
  "key18": "53rzjPs9GyUkzTxFSV1Ytq8VKCQ7gUZA6SwJ6HEFE8XCXov1ZNdPxGZGPcFdG7cWUU2F5LjcZCC6kXScqVezFZSM",
  "key19": "4QzjYmur4f2bNwt5PtkmFgKC9GHShYiE3bLbsgrapQyLqRu97isHvsfePYq19PwCdD8pDdvuQxyZayBmdC4PG9Z6",
  "key20": "5ZWaozfcgrQnZkz6DFp4qHiNzViB4Zff4HKmuQ5eZUocijk8PszXrnbQgZHTNER2yhmXbHJ6uPjtkD3dfMKyhf2D",
  "key21": "45Sh4SWrw2JL92v7LVbdUMX5Evrx7ip9bDuGoxbzVQrf6XBnGrFym1MjFWsgAz5wgNKj5pxFxZj4wDiWkKrxbqrX",
  "key22": "5GBMbTSXVt68zhAnX1qXZpDVvPYuPFNeWdjUpdgmJM1yX9Uw6H4UV2a6b6SE8Fb2YLbU9MXfj79cJt9HYhU86c8L",
  "key23": "5ZXr4McQAHJAu3RysdP2QUnhEBNhWJFSivxVh22MXZJ35TWLqE8DzTeBiRhpNvCBdv43cq95xxDo9dsfSgw2J3c4",
  "key24": "2hDw9pKQc8Ck3KRMijNZqBgCjg89HJqq9wHSejB63f9E661KGfkm1AvmF3SJLQyUcPM6fWESFVKEhpm3Y1VrnszE",
  "key25": "2gqVLvFWWKkPrv3MbBQezmnXrcVstBCTMa3ayKJUBm7kmDe6qvoWhXjEH2Rmfq66q7KJQtuh1rqAevmompQ9iZH",
  "key26": "R9wvoz7fLMmWjZDKD8wcjc1QvtALAmhVimXQprQx2pe4sBSw65xY6imx4oTagppp3ip1Y2yZGrwj6F7NwbsQuKr",
  "key27": "4H3a2fCEKXVCshNs4v3qEGKvDZLVorZTBUFGtykw5H5uqLTPRrQKSEY3QXJJ69eVTSeWnMy4r5vS8A1NuR4DcjwQ",
  "key28": "2ydpbwks8kdGSmQ9h1u5Apr4UUkXd4o7T7QSYMzBH2P7MzWNQQpgBb7q8HowKFiVPEPmiyNk7CmzgsJ3sHUk5i5W",
  "key29": "5u69MJCBW5AfcZFqCSZwuLY9rVwXRKiUHwcv36wDACP25f8T5ex55QXdh21fxZgpug4eeCirEHrqh2rZzjHznhF1",
  "key30": "58gbmzDX9Pp8GE7ommfo4XYvtt7TMZXf7u3a18DqNPZ8B5PLzsiW85wHtPCFbrqc5nHunuHk3o9EZ5xoSdhAbz8P",
  "key31": "4UkCy5vb3uDTjimoRPYtn7in9Ngza4Qciwxja36GD1o7m3zZabsZwpu6G74XB1Chnchh8Kidopy4AHSHnGPiwzEF",
  "key32": "4mtqpH9Qjcr3ZgnbTJJKvKK3TMKeuypi9mwf45Zsm8TjsSATLpftvNDre1XFXJqm8DVvqSLyVvsdRSAdLZHJhzhK",
  "key33": "BYA3cqLcqGRk6urmxHa58RmrKpuZJ7o888kkmUtN8Gtqhbg6aLCyGqdbJkYLCQybRhiPN9Kt2dUdB32ngniyFTf",
  "key34": "3esFgqz34DJsupwaRRPC4FqvYhu4NyLn1Vm6h5ePWq1dtwsYn6V9pRayiYVD4yBY58JLciX4P7JhPdBnUCu7jAwr"
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
