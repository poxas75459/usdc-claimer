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
    "3E3pvczaa5qTrCtgErmn6pRx3CGJr2zD1tRccxRA5i5cBRp5FCsdMSLA5MEXJuQU2znEA9pHD7bT1MkbZeG5RzQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f9yvyRuQrRi4YRzxfCnc1XjyBNx5EHEVmoZXXvEo3w2epABnk6RqsbkMh1YfcfAwMyUTChg2WKzpcqVMCZeBhX8",
  "key1": "31NtvxWhds1dvpvu6QADKesFNrBZbYvgdSEd4NtoX72L6iWVQgPUdoeD7m8jSsnMoeQSmKY2vF2kksDt31kec7N8",
  "key2": "3EHjYCAtwZnngTVEhWdSnXMVnGGG9FBzcCnEMZKvDU5h13qSmMNCS2jE8U7DbLk9jGZg6S9qCstYfK71BpgHdASr",
  "key3": "5EMvZvzXmw7e5AvxhpTjwWbMBJDnmYsPn9JaT3QMc311ZHsFBmduKtWquTnzM3rSSTNnauq2Jg6eiRsR4mMGMF3G",
  "key4": "2NHPqworVa8kViNwS5QnG94y1feuwmtLa5Fx6dEk5RthdNjyjmP9LFEKLex9JeoeNrcRehMLGYnT1fNxq3afhN8i",
  "key5": "5WgfQU5z6R1fCUYUufJrsYrgd4Vug5dKCf9yst6uXv7Vf3PTmxcFFGdrSK1iacgLVEiLiEHmAQc1qEgTbSAuZCQ3",
  "key6": "2bwHbpMzhTUU7gLKcPRnq9k3qK7Q19QvtEV37rMsv63mro6vjzN1sh2LdqwWPRAtW5FXH5WZHntXC8iGVL8zuZWv",
  "key7": "3CyhN3jArsUSN9x3uNj6gu1wJBRvFtzKBWGAHBcBYFGcNZbTp8ixPnYsUSGGwUvWSJsaU1Cux5VrXBGkiy1YvJgd",
  "key8": "2GVxvZfRQQZbgGb6dTSbnqM6abDDxQGYUsus5mfMWpDtkpNS8aU7CxNj2ezREGRsVT4CjBu2ZwTaEZFUjUEFkWdp",
  "key9": "2fk5YMFipk4DyR3trP3NLpEXeLwxQHiX537MHnUVtVfLQvrC4piU8ABBM21SnPvLkrvRXXqL4gwXPaosm2f32KdD",
  "key10": "4facRPSaTpRUTzj3FxE6mjkhGvpYZFLn18sqtD3rK39ABmcpCa9oPM5BstpxKfJFr8t2aHEbTHzA4D1YqzaoBGxP",
  "key11": "34JQZ3rrwUyDkQv8UDQ5N6ZYNTaJhZmw9z34jGmWBSZyCcLvRgo4mhndKBUmzTi2TDZqtXux9YDveCVseyTV1t1b",
  "key12": "2YuLXGZQhoh4mEq2eAjdwtHVnDzAG4WMCBpe5XPzNiqxPQseuSewmVGubAhnspkZiVekLkiTPBiBD6qKU7x4VbiY",
  "key13": "5E89C4CG95DausxEK1YtG82muTr9iLBA8c2zZY4Aax7MJRwcqc2cBiFRoZ4VHA8fSLhBQM1ocuWK6RK84vFAsdx3",
  "key14": "UYf6HaCBHCvUknqqyRFLiuSEZP6NyaCTmVPmTKXTZxWxMoPxnzbMVuDiXoWpgbzUyX2Z1HE1H3bG1B2KwUAXSAp",
  "key15": "5x3YAmxbSDNmMuDcuMwSyi9i46Uq4yqVGJUy9UW3na1GKMJgH2dSatbxxPfpEzuJwpMrLbYjSWoFfsRiEjkRhqP7",
  "key16": "Kb5usBmDCZ9fB8LQYLD4Uoxff7xdyLrwaVAtK1paUJ2Ldz9CGYQkSE8o1maKreTtxpfw5vj2YArwHHwYZABT8TN",
  "key17": "5vLMbV9sNHh6ZUqKFAJmuF1ayRT1A62Ua5E3pehPMdjzdxwHsjcLA7DUhsJvKB78MrFd1soCq3XD6YVKRk9jieB3",
  "key18": "4dEmM7ozNy4PCTCYreaKsCGW4xZpY7iqHgJbxjGmfkrDo5ytM9nQrMphCGGJCUcrYxByFHqqpNPXyCvfjL46f1D2",
  "key19": "6P1vtnPCPDoXzwtEL7ch5TYLRmNdcv68wvaWVxA67XTuGQeH1KkZwddCzKVoptSpVtWcqoEFsCxW7nxofu9Jaqc",
  "key20": "3ieij9fbVn2msM3gAcmyKBZkmeX6adHjGA2m7CMZX78xiQiDi5LzQkjJAtS6FETQ8W735YQqTQS8mNvet8wcniM2",
  "key21": "5NKcKBe4zDJxRAKNM5UsQ9EvHEfkfAQTiMFw4jzNTChFt94AmLtc4WpkakTNWfZTABop3qK61pMUZCDbqZyTNT3R",
  "key22": "3ZVbyXv9yi8u74WsUo5w2XBJbgN8XnpkK45rKWtX6vk3qnbMxdc41h58wkyJjvPwW7Kob1AXaHMhLedAcqxtGZGt",
  "key23": "5H9S7ipoxqF3MERYzBGvjchiHSkxTSntKKKPApPVLKErA5nnX9guTemY4Pm2V4mXtRwC42AJaCnZ1TqKQifhPUxy",
  "key24": "xfVfXCxH2FU5XN1gMsnivG2zMfTqD7BXWQyRm2ZFpSnX9nwks6qzAiMCrmyCTiVoETULW4ogAMk5D89dMwxdJnb",
  "key25": "587gwyx9ruhps4Mocg3XAXkxEAAdYvQGqovmi2tvh1faJorBxm1nxZeKCi1TcBbWxLWJEZryejgyRRW53gPA8kkW",
  "key26": "4AP6an1umNAvj69Xek8fgRPjnxDfCk9T7EovSWDZYZd3EaxVRFgDb6XXAohfS4xWSXDGXonjcBNb6YBNVTRN4sqc",
  "key27": "3mfgW4tD4LwMrLYhFmjCsGEF8xEErdqfu1iwDGjfB62paFpt6rwsxTguy2oTWgJAGQqqA3cbgQ8AMjunE59zHuQu",
  "key28": "3PSKoc3Ryus8vCHDmJ7EXYnazMAfihG4YvheYHLyQkAweq8kLVUzkCEWo4Sm6N3tuRsLtfPfVLoLmdKoVp3LbijS",
  "key29": "4QLoVXkLztPrnqM2XfieE1RxijfT4FaLedrgXnM6Zmdh879Qr4FmLS6RDRZzX9MSwXkmZLRBkvDsmzvSiVXGBqTj",
  "key30": "31NW1Dag92dKgoedrB9bn7Nv2PEgE2dWAa84YkMbJBK2ZddcSVqsgYBnMRdEX3PH44uu5BY8fHWJb9iDZ9emxcFA",
  "key31": "VKwwCKwQkHKxTnvt6XL8sAN9G5rrdcoq4PU4P5wbZbBWySMcXk43zvsHqiGY298D5U3PCZrsS4qXtF1hZfVD2z1",
  "key32": "3aSqZVzcTPvFxf4JvukP5NqakgwFL4UK4o4QAEoxT8TmfhYnDenEzT7sm8hkwkc6Jn2rmGidJxDSuVk4GFWysayF"
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
