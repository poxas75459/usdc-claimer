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
    "2C3pcjK3Wq5jNQgB3VDXpTJwmeGQu9Hgip2sgnVhKvgPz8Se5suUND38CxsS9KFWYp9ZnGKN8tQMjHjYKhJRGjoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nPveXLQuQD76Fy3PjTrPHUuyYeFtXtSy8mmpU918J8uL4PCosnwUawShbkQ1pSeCPC6oYD57Yz5Yys5rQJAG42X",
  "key1": "iwWtEhjcm89PRU3xzUhAA12VNetagXC74Anwn4xq5j1Zg32iLAYgwAGWJicXSFwyWvnseV81G6jHZR8NuKD8V4t",
  "key2": "5yJU4Q4VdyK6qsmevwT6rGkQ3eD1Q1aUUFxNpZhpcSFpWZmtKucTurkW46tFyzUpbVRGL3wxCHgmphBdpybB1PJy",
  "key3": "2r7EsVQCQxiuPpPyiLTKQ8D5NzUXtcapvzp63Zkwizk8FQFpT6YAsvFSaLFTzLauMekjKbHwfuGDGmhAppvsqtVg",
  "key4": "4rF577WpP9dMoi1fXk2HHVfPvNp2WQf1HvQvNN5CbyVt2Zo6z4LFTLN8MCWCzzscTU1FMRimwsKiPiYioK8ajBgw",
  "key5": "4w73JivfLvzeQKAdDKMSTbe8fEpF4PzceYJDX6EorDTfwUMcrhVCAX6dRM5ijAYWdBb1kqWDeC2KhqerQFLpSmwz",
  "key6": "3eZhVd8qWkksWZ9T7FJqxv2Rkt3seM48Q48snnVQpJTd29S9DgZbpG1Ts2CxVaaVN4pSeRpbqrJH1N5EW63WQGNL",
  "key7": "582FXiSyFJXSJB3GKBQJU6Nzvda69PF3d8j45J66Vvbd9XM1pWGNavDDA7Tv4edvmDnzvjFhpa3NEAtajnmoGHtb",
  "key8": "49ofk3m4viS9XnUqPXbwL7Wt5dwHtChqb7CqzYEpQ3THG6uA8D86Njm1gghsQKV3bjqGzagov323yMMnnitZmPgu",
  "key9": "2inmFsxZc9kkTk6j1yfwKb9jJi1J4gqvnBZTxYViukPq7FmJHaJeM9FdzkDBGm9kEtKsDbM8gMLishyaiXCRUaHh",
  "key10": "23AwogngjJnv55PLpdcZS9afC1tziueRiymmi7a3RV8bb98SDGdQzG84kBWkHPJp1RpTMAK4UhMkZKQ2B81SW2MH",
  "key11": "678MF2wfScA8d7YVGewi4Rw1qXXVsspMdRnrjRJxq8KSLr8e5PuoC1GsB2fK8a8L48yRUrPtVs5hYRzhBsWGcWdF",
  "key12": "3HGn7asMifrbyFpQqBjVEzArXY8PFCoPjfrCVbuukMsLSpYLGs7Uvkse2wWzGZqjB9DJkJz8f8WrqesC2kNbR3bF",
  "key13": "2ZGQ1sUaaR6huUenPv7agih2rSYoUkK1UZdttAg3111pDjrfGbF5Kj3xjgDcfeUqWYea3MXExs4jrtNFtYAJyoQL",
  "key14": "3QiTUC4ZJXf5pEERJa1vdazBou86szh8rdZu9MnbD6sBtB5nZi24oyBhXZxuFBgsHNA2EB6ds1YP3CvKurt1Wf9P",
  "key15": "jXawqP4LZ2PgHwwCwfBmvRkePtCM4Qon8yEZoWZWS1ETJaB1bhZxoBV9rCkoU6Qj3Qf128fzRiXfzTHYKJ1EbmJ",
  "key16": "5uKtdixSmWqtjMKahSNuH126SWrSNQ38cn4GwAngSJ4n1CjVrF29kUMtW6siEhvsRuZHpr7KU33TtnQa19NWag8t",
  "key17": "4hwdf52vccWSuCAFZLvcY5kZvE8i1CrwGkA2bbqhB1ZhwpAJLVmD3q7B8z9EjrUwbpmyzRPK999Gh9N9MZD7KKoA",
  "key18": "2zeyetnBfmeAzTSc4v7kc514TSw5iRu2cCGoGE2ChRCqquk7oDcTivESSAwnJE65TMai3uAETaikAMtWa7BiND3L",
  "key19": "3yCbrBaf8ALEV31ChFNpB1z4hPJnTXQVU2VjRpptpqPdn5XyWvWsgTLv2ULw4XdKD1xwRn7v66BqE9TibPTBss93",
  "key20": "5meXagyoQrZgu1LwjqGxdvCgmF1BZ9GGn6Zfj8pWYWZDu6frn5KruLMBaXz35jLcNbZsoJhaBq19rZ2taWtrGG9e",
  "key21": "csAVvfkvdwkJ3jhgg9Uoii8gvEuxbNqzP53fARsEC5VXTeCKbEJGhZLXmWxm3mvZu51VsWgh5HNS8TGzvDjeMJo",
  "key22": "3BhzFqAEnebSVLs4LmcGPRJdw3uAtjTawgSs9sMH4d93yNa9KC73ai3SZTK7M85nNhfFnWri3uCqxi8WSn3AbBEm",
  "key23": "3kkza85PKzQJdSvttFP73Co2phJPWHsqyjofsPQ8xoyFN7GjcXxQch8Wqbk1DVajmSa5HhmozAfW33x51apTQtQB",
  "key24": "5YmxrHm9W9Lojvz4X8vLBcrvszi2ykgSwZW1gJtiBHAhbu3jdYjyJyzBqYf4jUgKMbR6heKcvaGBvmrqQ7BGFY4E",
  "key25": "63gpQ8rBhgRaNtC4WpaBFybDLK7CsMLVUkfCxkVBTkz52LXH3kNvqogewQPD6N3919rfu1tUE3mFu5JZG8sidKs7",
  "key26": "UCYqcvgFREt2LYr3dQufjzWGL1yoPtkMVNU6b6FcHUB2DM3xdP46jbjt4pR8n8SpsThySxDdMVyuUT62tkStavo",
  "key27": "3pNb1ZyxVSZCMaYrWQJjBT1AbijHcj3Kqor2EdaAFGMvoENsHjgbuLiMrvCPVWmqq3774mogF5RzFu6mzmJFpb4w",
  "key28": "34gwz6QzFFETKF6Zhk4QhBQvVG8qbPMZk4m8BCsnvMaQuai5CCG5oet7pnDFCmAkapV5tdGearimDVHay1kPgNdA",
  "key29": "4BgTT8nprfKur2h95Jcx9ngqkwjWnZPtf8Za7vbBnvTD1zK2Yyqn9XuSEc8Xo1vacqekytAwvjbbT8MD7SFiK24y",
  "key30": "XVHJw8MCYnZf1ukydTpNrZA3d9bH43mTa7UojvuRmjMRkQQFQYptywmohooRP9nuZsfgtZoMfE6R15PyNx6Qivu",
  "key31": "5bj9b3cNQ5i5zGWk7NKhU9dsu91xAStrh3ZWKBf3y141S7cLGjmKHnE49nijmTGSZUYnh9JrNtCkJGY3SvUfiJFP",
  "key32": "2TVKi9JE5V7QTGRxdMWCsSjfNRpXwrgYk7opQEEpV6hqKozSoXH2wPmdfPh7Qe94g4rUtCRLKYkoWgh3y8BpwuUg"
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
