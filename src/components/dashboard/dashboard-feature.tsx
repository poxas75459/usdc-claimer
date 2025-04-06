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
    "5JdK6jFXsdrkrTL8d4RTRPi66f1om4dJYy8fqZY8zhpa3tKLC8K8zduG1bPh7gGxFRrDadL4jXb8gz2KjxuGUX3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Uv3uPW65FTHUetC6xWVvPnxvYcR4nTzvNi29oGHc59AdoAeusYcZ7utchDxijcn3Vng8GBn6QTV18zbAybPgi5",
  "key1": "4hWea7rBCNhLSFqMYPhTcQLRChFoeth9ckJ91pmStfz6L9JkYHoG5jcEfeVNa2EUPNLGsQFTp7nNbC7vKg6SDhay",
  "key2": "2iu9CtXb55ST7S5aLPrC3uDZMH5NKqFBN5aWZnhNJ5uVokrKGEX6yjc6WmsdrZxrSk8exwyKGsAaBNEtffv3QUxq",
  "key3": "2nhY1FFMCLfN1mWqUXFh96seYH8aRudFUgTWAs4Bs5YMEcDyaUGz978L85bjtu5fFEXxBV69ogEGhd8WMfET2zbh",
  "key4": "5xFZ6fywQvkvDuGcRJFH2U2ivKPBrK1Jvdrk6ApaKD4351fGDZLvxTMqejEKzJjM3TdrU29ftg8ZHqo7UrRFaDp5",
  "key5": "2VNLZ2okvYkkwWQzjGvUPBZAk5Sh1nNTPdDWFQBre82ZEy8Ymj269fidZmeUM7dX1fSxSRKLSzBcWBLBTFYGsFzo",
  "key6": "3CqdxQVjgSijVJSzJgaVPqrJb9PjCtVmZQyVUdj5h43owR9aR8tWZaWwKpf4nj2nPfPyBqCRyXwe67qhk7hB7gba",
  "key7": "4QvtYYKZrNxTsUt8823xMpdr15HsKGG9EMCHFnUp71NXQwoszDPZaHneaNrk2VTrfMjbH1Mv7yhkwccgi3JTzNEf",
  "key8": "2n5j1RNXk6kjAf58sxgSJTvuBMncTd6CQ5Gfr4Wdtzb6oR7RYVzcMqDkinQnmxFs56NLm3cYyWpZG2VG1jVgMEuN",
  "key9": "57eQzvHJc4MX5L4q6CwNNkSPFPbM3kz27QWpMfWNN9mhkdtDG9JPyYMYaZTM8dYtroipsBhW19dr8ZCYqrB3ojH1",
  "key10": "3zQk8mBwQrtZD554KbA4YnJ95P7iFYa9JUepK2sEdqFej17iVNoLfsPjmkhwwhdaL7Qac9iy8iWtgFzoYCAMQHgb",
  "key11": "5C8kA5TVFAx6EFbRAvPzfUpDRZTFau21gQivRjZ41fmuSmdtQeTiGeC9oWrsjAsyuyupF39kjT4G18BEaDhA6kKN",
  "key12": "Cn5fiRR2jT1R6EheLrazsaBfSNHbF4tsvivwYySH61PeuytX492CfqyDmFwPbBRhjGnfQwXhYqijqL69Jg665qL",
  "key13": "2xsHAUXCvPGeQdHKkJajknJqvfz5964WbK8cZLemsK5MciTWDnxB1ahnJXScQgFLw1x5n9CqQXhYWVDPiGCtZnku",
  "key14": "35AJpKCxxuy64VP7W34AesE3ZTXyW2p9x59Wp5kVD1pdiBAqSue25bvZYgQ9g9Lv3AYKxxBsxCLceYTw59nZGvUA",
  "key15": "2uRGw1SNBjRYop2M6N9nJKk9WWR13NTo28x3Dt2BYyURBh8pi2fp2tvsAALbBMNYSe6NBVFGmrtc9CMqBeUjy8KB",
  "key16": "3DQh9venw1rF4ghm5629UqrTGp6FJ7wHo4fwYmKRnDrdn7SE3YdMHWNHZHDqzBzWyA5tLkaaUGRHmahMYBVFDuBf",
  "key17": "bUxdukMK1bs57Auz8QViiuEsAfBpwK6g4EZnSEbsvpQdqd3MB3XXWoY6v74RLTatpu6s6FVCgtfsanquRWpAPMc",
  "key18": "5bqsyzLUfEExj3sY5DtXoVAhbv6zT96Z7DrGoXUFfHe5D7iW4QmPjcojf14DUGt4CU7SygZ7tBEBkuX39qBrkxkm",
  "key19": "rAzJtYvHdwQMLGYg8hkkuy1fGXYJkBkffQ1LrqchAp1JLNjr1H27vUv7RiGVVGapBjN4TdPFTs3AFY4ZiX8voJh",
  "key20": "3QBNPoa4rQAHsww4dYSJipgmWK6KcV5XqPM3mVJf7KAyARaYFFNxZ5Tdt5EVLQTCBh4p8LkVNYMS1dCD7GTh211z",
  "key21": "2DTw3KwNoCd1c5wF6qhtiC9agJ14VdeTNzTBKNaQYg1f3MT3RB6xXTG3tCimuCgQCTKFX6UBJ6BuiyzC9iGPYg8Z",
  "key22": "8CcBg31YGMiY2rKACee4gSqDyHKa65LR1vBUk1TKsJEc9Bf1k9fCekS4o2zt4tKwPoeN1kY2znmJAQdSuXChcZF",
  "key23": "5g3QKgLgHZaXZwn5Raf7xehVonc9wj9sn14ajmUJPe75KSD8GgmuTnr7KqAUoceDFTGKC6iMh8SNTMttEyU7JVvG",
  "key24": "38PUXRRj4PqAPENnY3Fuzqf4hE441bJ4Sp32hBdJvMAW38Gp1stWNtLVY4pxdsTUEsX5wTvJQWmnc6WwyjYM1og2",
  "key25": "5muAYSmB6sCv59jUhh1uNUo84NdfiqbtDbBdaCxagjYJaXBR9n88b2t8tPqBPec89giMTKPw6f9gUjc9nd5a2vyd",
  "key26": "4XsK2RbS5UGvLi34NAm8fAKb3SeYHJKn7eBNgtmxhhYyaNe7P2AS7Va6P7bJmbM7WDkfNXP1CUResZ9P3Q7wkJKk",
  "key27": "3KrfQwSYeC8mo7gxzimbBxfovEjSvc5ddW1cqLP8SJLrpLbKgftEeqrfRjjQoDhBfqDVRn62VSCjckFNJhLofvqP",
  "key28": "5qfYpzp8wXtmwBh3XybXNPYTX7gD5iU1ccTc1n3RtHzunQ4WkLqdNJeanHRfuDBesihAHJ3R6RxJ8kMavCz9yNZa",
  "key29": "1289TZmvzKtc8PLQYi4rEZDacGmv5nPQAUz9bB7vNzyGbMg785iWfm29ZzSbjfLC7ENzoSMbbjfXckTehysi3gz7",
  "key30": "43aKhJV7bT3pAJue871Dp2CkkYhgFqZ94n7ynqUmHvDt1jvajdcan9a2XtmM29aKVQP1BW9YHFYZMeqac9kY6YSL",
  "key31": "4jeHAXjAZAjAYKWkA4YqGQNiB1dtweJnTcuHBAHAwd5BC4tHCNMDeJeqtMoLNUgm6bnXk1BNA1myg5pieiQxjTZL",
  "key32": "2CnEKtc2RbWgJ8eW5YCZkScEFj73F5UNUyusA7iERyygs2RPxPj4eKKhBhj3QaMsJd8fRG9koL3gACrYgu7DJWkV",
  "key33": "3yEanU6NZh3iAfZz4BqfiMF26EAPtpfrPDAUPxP11RVUxMFM2cS9scfdR4xfebRk24BKTDUKhZMiLSBoQYSJXbZJ",
  "key34": "358YwZ6rA3pkuDjGxZFhpvuqRRzyrWFQpCX1ZeJ7aFxzntxppsn5khDx3TnWtLLAXgzerkSMyreF7p2PLygS255N",
  "key35": "44KvorUWqNe7jyaNQq2r4PRoQFFPuNcGWLL3Bhd7yw2VvtFpc48Xx7ZuSjLubFVknzvNxn1h29YViDQkDRWukhM4",
  "key36": "3GAyHhWQZ7tscKhANitE39o9CHo4Mk6DrtJDmjbxNNM1JRgte4Y6yCxQEUUTB2jfWAS347tFBRm7kjoFtjtUYtCz",
  "key37": "4c6fghq79HBq2EdDskMV6rYJFZEab7Kx1jNmPtYeUkHff2Jr8TUNXdobhhJjowdXcuxvBTwXUdtAEDkXHD1oEhL4",
  "key38": "42cEP2e74Bn39gh9WnrQf13NyrnskWFTT5p9ywQp4xwsTsDEAJKDpDSHhspu6hEhBXuSbKT2a2yB93gPcWumXmGn"
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
