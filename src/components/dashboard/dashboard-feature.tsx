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
    "2i47ZsXwr2ha6hEhi6Y23tdDoc5WVbEzfyvsfAxg5GKczRYwTRj2SptZ3mJx2xLxAntz5zE6zRmsQyeAKjRqjL4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmxDTFAD5oSzbg2t58vJGL5sASpMgVAqbNYa5T4gMNHKpyjg9p7feD7UvKFyY5TKK1kPbrK3E8Kz5yxf485HWyB",
  "key1": "5t4myZy9W3H7T95AYoCEiKcTpWm29G7h3hwJLx28zt8e9haxYAXgoNT1Sek4VTVLXcTSw3uy4DSVADyk4dGiV6WL",
  "key2": "QnHAMJtUvh6y8sECTfUesg7GyrxWhRNpGRrVkKATTXRzEwWSYADsfg18vg7bCFGjEk26ewX8N2noieyq1TjUTUJ",
  "key3": "5MYxpghiPbqpzvBQBvyKTHCCkZaRWdZBWanqRDSnkBgG5sykEzmr5e3SgAHXra1CuTfzH18qfiF85zV1A7ZisTvb",
  "key4": "5A7XW9ZkNZRpP2PyqejaN5WczfjcqjX7rM1iRGTK31ruMaT422GKuQrrxchnRdCPJhEfJgMt55Cj3ktrhP8oKm5u",
  "key5": "2y6zRENLU5E9FQJri5HsWuNucMCgr6GuvuYHiWigxGBJR6bi1YMhbeWsw9hdXh5FdVdHz6dyaaqu6F5v85LLc3pz",
  "key6": "2XcWUzugwtybYsJ923LgmwhiA9FZquJ8STwgyScRwXdKv2ximg8trLRNx2snhgx5C5Z8jo3udLtXuxPeN5jgWT4V",
  "key7": "5CymeeXQxgcyQeMEF3B9CMfpwmefDt7t89Ueb2zRbWJcNdGKAWiwcPQrenrLK7p9eJJTnU9nYyP1ciewewtKtaEL",
  "key8": "48GV3GbArAqvFXE1GV5zBXEkpEri9zSheK2zVC5ZRjdJNFjPkP5W4wiA6zWnYF11Vm72eo5E4a2Vk6aTmCT9XiTg",
  "key9": "5KrXVkVhi7hvSTHKZ8pXYeiajzvftGWt2wtWpE1rSpvaWNJnr2DPauP4eweXwiP5EgvNJ7EEP7BGfBRT9tKBNqti",
  "key10": "4cVQZnJ85EDSpLa5otRudLwakx85G3X8bA2f1kT2rndm32E9GAS9iHe26TyFLTgjg5NL57RpaEB3MgNGL2MA6VHi",
  "key11": "3cgNkQoY2f9bq5n31DtDQ9bhLobZw6idJVRLLsetJ1qyUHzeWd2Db1xQEgpTjeY6FqomQhJMrFpUn8s1TxpXpQdx",
  "key12": "5kYHfsiVnZfqBmTdZ9wAt93HLS2MNFbnFPyibxfRQRPQPokGR7JCm4Z2VCHSTQmD9mUJJ4TVbiP2rbbvnCosYByN",
  "key13": "ySj5fmBa57aezPy7oke2dz2FWRRv8rBcy1QQTwz5q4g6XXqbNnd3kJcXGNYBTNCJ2qJSMg7ppkGEaMtRmPHmyaa",
  "key14": "wLfh2NTD74BW4qBfiBAxoVkPmbJQ88dajWxD99SNHhnW9G1HMvLUq9xyD7jSayDxaWkjvnzjWQpdiffffZaxVas",
  "key15": "3R1KrvWFoXiGMp772FxK3QuKSKXrXZLWteXHRmvjA28CKUG7WqioVJKjxBk6p1bAh6j3WieoF318N85bQRCn16Ks",
  "key16": "5jYmj6EXP3u86sgBJxB6NRyZTM3qrGiu6x7K6AhZtnJB4X2aSv5x4DBKRnA7xBm5FNZVzqq1JHabckHMHePFWZr1",
  "key17": "zehubDHTvt7AJpnvBK2SWHEJrHkMALhg8y7KEHUiEuJ1jgLVS1UqgFHV6QATHquvX8WFttKGAZ8Ryzhiv1CjfWJ",
  "key18": "33NhbnXHjg1Rre4ZhQY6V2dfziifVSj8HN59VeVjTgzmzHtVDBfEwaqEaDpMvWhxmXaCNVzJVEqewYxAkuKvHshB",
  "key19": "2Q3wUxYXDNqzRv4UQVMXzTPfDtBtktY5FMYVauWLxzgmh17EEmmhq1vHmfuN2eWxrNWYpmm4C4jLp9dd77xhMxjj",
  "key20": "65ELZfXuqprZZPRGAQYmqj14YjMrWzs1RD3Kg299GVSpcfff6Ky6A9NSLTR6GUUZwGB5XrZW7ffy1LjP7Dc8vjMA",
  "key21": "4aiAbhsLNcLXxryuSBmMnhaW7gYRS1kycQvV49jUQD9UsEuVvFhQ5NhnQJrXcMBWvZwYv6pEah2EPWrDau3ezp2v",
  "key22": "TFRqCauXw3kXPJXCs2p1GYuvjJd5WfoiBpNhZmFTmJimeUByWASTDMG2bK4KsvvxB9HkC9tbvgmivZWhESfhEET",
  "key23": "VGGZ3nTZ5AsDwURzRBumJbjPfFM83tsnBeqB6m4jBGYhurB6PfMGUH8ojtGA68x39KXrRmi6vmPK9uF3LzUmkBG",
  "key24": "31CueaG4tDE78A6CvUKJ9oxzrRQuWMAD19E2snM2g9h2xo7qugzNwcZe3L7fg925nKkdtxkQdu6UcMntNs4Yxsww",
  "key25": "5EHQamCdho7z2KrFBsubzA1tES9MwBKksxfx3sBUkVo9eScx6retUAho2ny1hK4es3WNFyJBVnAsUM3YGdxVYLQw",
  "key26": "2KEyXkAwTjHJSJcJtRGwaJmqmHhuSbqNUSSkjnrAp2EfKyrgwu3c4jods9XuDbS68BKyZso2CXuNZdhL4zsZyahD",
  "key27": "3poje2koSkvo3sdyhwPrWFKfCtwSsm52yCZz2bp2SF8seMMfzYWUpEBtAw5A9C4e7qBtLS5Qar9AiTVUgY4HphyU",
  "key28": "3KrTngt9syLwjQFj4SKAV1z3WGvXa71b3CerxwLQ7Z1bU54XW5aHvSGWVJuhyRGLXzaDLPy6PxA8dRJUYCWkpmmq",
  "key29": "pRU9CHoZEad2JJquJqfv4hgEgAdmehMc36PsfCpB39hsBFsoaomFq8BUXg9gC9H7SUJ9dxGB5YwUcrwXssgQ3Lb",
  "key30": "4YB2Z9g1ZTTnViFYQyaNwKWEr4ZAqQVtUVsfzXeFVGCZJ12J321DkMEzn2fQMyH81CovF71Xp4gtLKUH489TDcDt",
  "key31": "33BvVrd3XarWuqjwWMjPpzMM5qsNn6G8PK3iY7nfp6W6sSXgLLU2u8kxmeFBa4n4bdPKKi6yTxys8idjddsx8jKF",
  "key32": "2xwVwJuMotvVVpZZsNBnzBXvcsXujPx5pKox1qMZFUax2ucFFu3H356oh5b9pwZdKmqnavVpijquxhSJqJzyBRr4",
  "key33": "2CMLtXkmzFXwAQiKnmxzW3HW3tiaHc2HFm2u6dZYBjWQwhM55Bd6w8myrnkjUttssdQj5MbYHEfXrnyuPKSER2hL",
  "key34": "57iuNiDuAkCawwB2QvnBmNuYPXLojjboNzkwPQa4xrZvB7nskWSftbCmdNSeLUdrXWP4zWpvVY9HQvd3TnPyhFxz",
  "key35": "218HjZGjqgyirm7vQLSqF5evHHRDta2vwfC1syNz5myjNonSrCrWYp58kGJjUgSPjDMvRjdnGoHPN81YYdqfQ9bn",
  "key36": "5QaiEBWJduCcjDruLLpTr5HLR2nHheHzmq7Ltfn3mUMTCo8HwcNzZP8xtu54isw3ywsQvqPHVqoHrRyxE7dygxWi",
  "key37": "5aXfJAB8rJnCKYW4VQt5NsRC4hVsaCS5Hb7eDnAjAkM8FLJtM9v5Hu8M6Fw8JxWZ4ycT6K6Xcf8CxuzvEPxE6NAa",
  "key38": "2fW5uYGuVUUDD7YCf84Szg73nonyBQT84MV5S6pTEYft31NifvWALv5imec69eusPU3EcA8itFCJqc1Y1RLHGtvZ"
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
