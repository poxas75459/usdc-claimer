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
    "3dhfMtwsondehAZZqTiy9xjpMHYacNeGxz3yk93ZcqUdAXKatLQ2hffpsHSooDmULT5CYQ6FX64X9CoavgBf8BTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3GofACHFgrWvrKqWa3XrJLyjTh5dYsT6fybZWS8R1AjDXHTFQ3EZF6JuGySqDbZW9dMsyb4GZV1PwtNp2fHMpb",
  "key1": "5x359zuBcAE7L4vfZJEYjHYHuM1KeYtBC5gAY156HrCCy5neAmJfuZCunbM6zLBpJYknjvW97k5rnxDqtWVGLQbA",
  "key2": "6783RG4JbHXwR9anTUMvEfhYQ2uNmz5WyD1YcTLTWGt6qKwTRXjtMeCNKdGfpTvHuQpXVejHU3dBBfRB1gxzvKuC",
  "key3": "3ejaGREeYJ4KfnCG7Fk9f82B9FcnwwcYDgRFSJrZvprzuQfMA2TKaDCgqASsuJciAGfw9d9qP6qJ5FoiUsBWjpSD",
  "key4": "2bE2nZyDc57BN99Zr2K1UsXvLN7K2F7mQxkqMP9CqcgoNt9xKQkkfbQF9VcAer8T9aYHwvKQeprXQ4bqp8AFqfd4",
  "key5": "3ZhWMNULnxEbnL2hknE9SBB21ueoznF6eB2hjHNGafv7DjPHcAXam612AyAvN6fj1PvS7BrryHAfVtLabG1FGxfy",
  "key6": "2JeZ9yFo8wkCVhZTTPLpGT4wCMFgFjg155JiBRpiGxRJTFZDtf3RbyxFzT7oxVq85cabMdnUXBUbtAsh76PDQj7n",
  "key7": "iVG4uVUiLh7omEZGUDJ6ev2baZFnfebxmJ65z94Bnwc5ZgGUTscVdJ73MNbofUjQKwifA97TddVU2NC5qPjV1gD",
  "key8": "5dE1abcJ7p4PEJ2XNVomNFjQ867pPYhauYJM1N7zdzZ8LQP5uKo4XDQcn4R36hvsfpbwSyhArh6KUMjnq6WRWmR9",
  "key9": "4fMdKcfyhcFUap74mX5w2LhrBv6aVHrEMdZnfJ69NgJjaEBifzNHhRgcow7cQsSSQ31S9n4SYhZ3wDjserRUpV4L",
  "key10": "5XTRgQw7k1nxCWAWJZLszWzqdm9CJMTvWeerqoR5TrJQ4i2b1s9qrw4gdACGLjqoyNz17pDP6LjXRcExvUTQvFcx",
  "key11": "5cLsvGdkMTKQ129w8fphUMJrkLhv5mfX5RweKaV5eEqwDYEuKKAuuLYu9LjtCg7oBSy8A1XxWAxnnVjXf5oTS8Z1",
  "key12": "2SJohtcnhcKF1BxqGeEqhRrDnmam4LUHr3tnnwA5hdoFtupWsLcefrfP1wks2uNJdCQGE6s6VRUiyzfPXduqNhoq",
  "key13": "35xoD9zFU13TkMjmSYNktDDM4SzsJLPW4ZUmYRs92J6W899hHJYziPLWqiKsTa4bTaeWoVpeDRU9WN5W8QtH4dvm",
  "key14": "5qa7fMEe8Q2jiLnrYkamLVrmQpfLkwNidjg9TchzoemEYsizUABahjD2i7bHGa9m5RLytKApAb8AEKz4fHQM6CJ7",
  "key15": "3K4fb76vbik8F59d4yuzFSRb8BARTvGafKonZunEHqRqE4bTYdN5kYfirqBbJp8rGyHQKUFcfuHhQsegohkUPSKP",
  "key16": "z1phZpDJzekxiHcSgihExXH3H5wEawAXtzgaaS5JQ7s4MJUZFkJqGUxuCV4tvLgW51T8yc6geMdPoAzLNSNHqyh",
  "key17": "5UaXs7tmJyNuMKDUtLCSAEwEFgx2wbM1Vr7SiVznKxhGc2UVJF2yEvCsGcrSgWG4Jf5C7rURBC2TKx34Ws46uSWo",
  "key18": "5AGhe8J5HBDfkWzz84xM91qH6rSpeZEVV2TukT6F39J1ARNamZs8iKasKoCcNm4Mn4jPcLTAGBkTMiV2KZBWUhN3",
  "key19": "nH8FWqEocAPMnrGPvt11QEeBFecCtkzDH83bcr2C89FuDJ1LtoYJKkpaNaUSwLufm63AjF7XbyrMCFy1a8MFMuy",
  "key20": "2CGwaUktDBNp3p4k949BJfvwLExiY55ks7YgTE34cJjrKvomqyb65RYiYwSPad3NKSHCWvWuvmKS184bVHc6Fqmw",
  "key21": "2m2YMj8JGTsDzgopyWHFgqNrbRrVxQMH3y52bnPTgDR8axMSqGYhHCLimhnH6J7ouoeWd8mtsBfpgJSGMoZUkd9q",
  "key22": "4UjiiLps5rr3hDnXWtKUcW9gawGp1Mnss8j79WsNqXhecxnL2GZPPARFsitJNiXLo94VA5Dj3rXKeCLuWH4JNzPa",
  "key23": "5n5248Vivc7yrmnRtvEgk3g2TxVxWcCe6KuB16VHwcMKJVx4GE2KTBrWhpFtvFFzaMqGooETR6hRbgsfGp2cvejp",
  "key24": "2YRYrTnPYoQd1AkQfcue9LWjwD3yziXtapkqYaYdxehzwLWwkEec7fLbwvKdwZzTPFUpSNtWLx85G7nMEiPYaNFr",
  "key25": "2MkoTEdchPtAcgo6cb6JZoJD4BFbC5Ft5XTfzd9zTqTEkiKvgAvjxddNPmFP8Pe31pistPUNoDv2HmnVB5K5KRfw",
  "key26": "2rEcVE8mjkKF73iNdxGn5FMB6FkZ9cowamZ7ZRhW3t911uQCcTbBMLFh3aCfpMEZcqVrgXac2TUX9dHPnhpgPGLE",
  "key27": "5cqFiwaM7Wj4QEK7oGKQJDTvDkzX8zLBajzrGoyNUbJmNnxSb8W4NsvL4mVWd3zqzLz51Ahtbh3ZbcX9N5Zj8gAB",
  "key28": "5vrCmnPn6e5bV1wTrqU4oqA2efNgV3AwZ4hSUVwZibsXwzC1mcW2WnN1M5CvjqrMFT8pWHRjB3dBiQwGvpgDSquH"
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
