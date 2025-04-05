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
    "47V4RFbiH8ysg5LmmBNW9XNYSLJT8SNJ3f5cEFfPYZnWrr8QxLXiXaFrenUs9AwnswX1yHxLH6GmEPqXzMDX7G7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UhMs2hctmVK194bxdB3GnBoq9wmBcrcDEQ7c61QKxWSffL3BWfhAohDe3wFB9jdcfh6prvjh69mYEJrCmh8c961",
  "key1": "5YKmtG86yux8WcNeNHrVC8GkKja5rqJgJszC6uVA2R4pSbRYN3YfUn1HDqb5c9UEEMQNTf49oKV1T514wH74duXS",
  "key2": "2WCVRYqUgKos4mUrimWuzeNeP8oLa5pp4aPaKn3E2m5paAMzcg81jQaQe5oZGZtUJxDDQeFvJmnmCkES12ZTJtfY",
  "key3": "nYxs79CB1ybzsSLJ43PmD3uyaLBgirihNhTP5bhqgFbfL3C6wmDW4bgwfSXgxQhtYNsTyvUXpAbq9cZhe2BaJoX",
  "key4": "4xYL6hxZpipYVPWnBcRFetedwQVruAstYDQjruE638ZTP4NCBmswqu3JzwSynJDCafY2iRUw6hBgK1zMo8EjSxZe",
  "key5": "3x1E1GgQidH9GHUAUnXF8iNZCzTMsUmU8LRsfzoJv9T2MjfAHv88id71gNny1dDXrNuzhmQ2Cn4xLZPjexW1TiBi",
  "key6": "s6VZGykbdfW1fJ1iMqGskFyGaSWNWkm66xYWMy4tg2qjSGzU7bMTuapKTzLU1GZdJuzcRL3jQB9uxStXZYRDgdC",
  "key7": "5e1rr7ZVAMWhuAgJ7cRRG1XJ9rMrGbt45sG2dKxQS3wEXpavLEg2ViQbKui38SCFoqSmwN8zqAGLoHmHcN4izGB3",
  "key8": "4G3aBYZGhmPbs8dkf6pu618bpK1ksEVK2qDKMDjm13hMNhzp19KKscWz1NXMfXZSnZp6umPqbw7pEuWpofXyuckU",
  "key9": "4tbqPMCXtkazxThVpoeijXWS3LdAxrgNQ46cgw7UdBqBpRsmAA4R7FDJfVm6k54Duurc7K6qVViqUMvKMpiLxwGz",
  "key10": "4mTHiJvf7Xcu1vD9hGGvGrtMFRnqGvGQBBqmNH42jt7HLhebCDHF1bve1fbBF47bBtxyNtLaj5d4Pn7Z9dKdyzxx",
  "key11": "57x9s9F1HyNzynrBJCe2Cy1rq78r1MmboseATBTUswNcjRU4WMbfsSLwFsfy5yCPaHA9SeZnrASnkymuHYrdDMXD",
  "key12": "2anKUNWaVBhuA8kuPVZJhf5Dt6tt8Q6kiS9mLvE1X7SSai7ApoKxd3hKCBtxDCRqbpfYEQpCrinQ9V7xPafV68zc",
  "key13": "5NVqgS1aYTHHfZCzRQNB531qhyyW9WREZmqgaG1J7KBrpWsTK7zuih27JabkgJCb96TS9ijupZoz3dKmMYoKraF4",
  "key14": "KiJMrR8TdgjQGQnBpqFHTntPAyGQqNFg1g65De4MRrP3BSBw9J7gf7xDxo7bHo2yAgQ3wRFWxzWSX1Dws6ARXxQ",
  "key15": "3LGzbAXLCYhfXQQpAiMjqM1SJWhE2JZH6ShrqrT8vz8hCUrhydgnGdb8pVzyZ2v77yNvnLZFPX7chiBqzb4VXghy",
  "key16": "23kYLtvHR1xRRcXn1TYsg3vNZ2W3qBdenrZ8MQcNC7f8abTYNEctdNnYDKARDudtZMwPmMvbjgkXfyfH3kWvSb6T",
  "key17": "3pkt4jFzfFt5Nzw7XBKtsYsrtJJx6okGYXGRibrGVe2pMfVsZhKicC6AW8Kcrm4zTTKJ1AzjasCURoHgVHSy2AZD",
  "key18": "4pNDac5xhdpFumHKgdTupdvK1T9ARGuXC32CYTXdmz84eQ72r9YJHs7QM8zZmXqJCr2PjQL1nxhefhkfiP7o1k3v",
  "key19": "cA8vaeCvvQAC4Kks4xQwXXM3we6jVcYUvZVW9WRXtHvowakLHsoX7Lmfa2ffajmeMXG7hKqnTHQ7UWdcQVY4T5F",
  "key20": "4ehLFRCEjVWm71Krj62FkeiopZ8KmzjESjH23Ko6jNYkWtzkLkSnCzbRPGodn3HQfWzryR4qE3EX5zNj5ungcP5d",
  "key21": "25SWbSkuTzRHfDBfKnfhvRyTwhZHJAQd3JapbJ4sj3MZpj74PiDiBZapg3WNKNa7u3JNPGNbybMcBLXeYchWTWUy",
  "key22": "v85XsfdLumRsfoeEzqkb4oSzYyuArxhxbjyvGejTTTjLMkp8jY64pByDC55ho2ysnUKt1jYkFXvgo9P3juHzAgz",
  "key23": "4Xxixyh4qrjjB3drFBKhXUyDphgVsuP5V2dr7nSZT8QDnwSCdtqoLVpatr4BAApcNw94yomhyHJAeSQuLrFSfgcT",
  "key24": "1dfJPxTGZwWRU4NkuxEjSainZgab4mA37oHwBWtoGYefy4rqjjHHtMHc1kNSXbVWiK7cNqjkmTXjXZ1Ngqy1GFo",
  "key25": "5pSiRFCgaLppp8hyPy4FZuLz4geks362Brgednmbiuuzxy8sFadFJZffTDnfJyy1nYpb6U8Yxt6927RbCgbEV3ob",
  "key26": "fWTnmXU2X4Gwc3WLXwwzir4Rbu9RqZk3G3mEjs8k9Vbtmoxwn8RTh5udP15P9v6ZLxB9Yebt8gwDa4L2oY4a9fy",
  "key27": "5vpU2FRcn9RLUJHyMqwYaarz7eHR95EBeC2hGxzcCGW46EEarzyykSeNNYNERdRutLhdCaHqDruXccEmMi1H62ej",
  "key28": "2rqwAM6WsaVxK8Whu8mAWnWBemBqrATQiFdUmqB3otJRWjQeEoQ77qWKMiZN56TtGYkzsBbkyEqKph8bPaNRH7QQ",
  "key29": "4UiKSsFcSwi2RMXiPDvVeEExK4xB9ur9CL53VVkhFf8N98tm4hngcpvjBVRmamwuMu4JprjDdkub35wRpsuLukU7",
  "key30": "2Wa1ip5oj6C5364Ld3WGQ2wNoVYKiDEbhhvHX1g7LDeLRWmyd4SbkopZVR2bnvHTtbNHquYBoDwDMB1pUqmpTs4a",
  "key31": "464RGFR7K6XBR7JhMBjwvTTEUeFDCLydt1yVxisU7FEdvD6EEZNqzs2stw4JM1A2rrSsbTW6HCVQG8WGeSyhW6nP",
  "key32": "T21Toqcy91jFdGVdyWxz9FW2JVYhCdiY26ANLxDx77RZa3DYJptqdmHrEvpMvP3zqhHrtfh9E7a5H3faAKHFhy9",
  "key33": "5G8sHuNCQk1gadpjuDcSxoXPYeDiQJQ8UU4yqr3Yrh7rSxsevz2Li9RbPWK8G47TrUwL3uLsaGXWTPKkrnnPuSkL",
  "key34": "2ize3YVhtZNbqi6XDp3zLF7pFpRcU3yD69RXggSPPgKtQQjcGw6qLNgUrB78JtmWuW7FZrvDjrfyABdB7gChbzGa",
  "key35": "284CRWQM6PF2c7pCKXWmS7Ja1cWsP2K6cBTjhh3pckZsmNpZ5873PfZMWgvMY9wo8mA9XL4sW5RNLXNMFymR8YRq",
  "key36": "2hZSdywGr3jwZv7tXbjwHuN6S8CzwbcK7BjjEiFShFCkGhf3KgmByjDMx7fDbkZWRzM8x7CbR5DVKkBRwVB2timk",
  "key37": "526s6Bh8Aq4wy5VZxbowQJmFddENbDZsDEqpLcjDwVBumH9MyBySLbjmyphmZEVWh9Xxp3fZEuneFwffQspATCfV",
  "key38": "REhzCL3uFtoWebgUTmVSJAkEm6rmv6mvvAVKGtGYdVhQ2fdvt8YF1RSZWiVUyk5atHCgyh6gskP4C5pAVMrjRzT",
  "key39": "3hYqcsP4J1oP7YAov3N7udfXVAxu9VVeUiLjTWNHYdhfcXfB5N5GA5csCvQADb2bH678F9JTQkHLkLAuxYj3DiHo"
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
