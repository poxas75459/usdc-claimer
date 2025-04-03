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
    "5aGQ3SDnRW4aCw3AMKFdR2bGQvEpfaJoZrohzkuQWcxBtoJQ9Vuwyip9E337xBqxxhYTL6Q8xgijDsEY5ZHzmJzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "szchW24Xf8yBH97xENiunZcFD9W3C5gZ7zFvUFuVctee6ZpkeA3yKQxoJVdZQ6Ls8xNJUGB8i24zPwG1oqMqrQA",
  "key1": "3mFw5DNxtpRu7wQmmT6bKya9btvMFvsCaSk4ikJD3d2gf8kZwGPfqNdcizEpywc9X5NifgmDLVSTd62M4fz6QH3Y",
  "key2": "2JBZrH5231sSYqx2QwhrfoMEBx3n6B2TWtji9QcuCanU7tTVKCNCquf3tTpT4qi8xRo6bc8yQ1CgWuniP8KqXbFc",
  "key3": "5dWYGL8gJCGVwKCZ5837rBE9wb7szW2A2sCTzxGZGhNARHrqHchTcY45MZz6mLBa9TQBDTxYC6myFwg8pVax14i7",
  "key4": "4W1dbf91DEoqpJiMoWjiph3onQ7gkX3GiERGWzCwToD8tkaHeZ7iuS3gBbx6z9u2dPQZCiyLnqUDQFBDKMALCRp7",
  "key5": "4MKGYDM3pE3qy599GTHWjNbA5JUprYt7EAQG5wGRaiMKxnfJVRNnR7AqrKwLYffzx3MwrqjX93MEfSMYhQGu76Zw",
  "key6": "3vyiCbZP5JnrHjpmZzoCMmSUch1Hm4wy7VM68xnhmvw4jgBiSXAstuWBe2M1XePsuimghnPD5Z1N2HiZioeY7p5T",
  "key7": "2z2sD15kYDgRqLKY7c1gafK4DqDq8aUwWfpKvHmUhaZLEFWSkLYZXQMr6zJNe4YjLpUAFNApJ5rRctbcPWHR7vp8",
  "key8": "2vRvbPMkKuZpiKWkf8uQSwCxdYXzn9RGEejXPGQ9xUyN7ze2kp1QvWGK39m9EsJ7c81TWyM1bK1MZcdEKVWTe4FS",
  "key9": "4peJgKUnEPcVRoHMXCZEnfwrV6B8pef56cWc1NJhCsb4tNVi5tyy8qPevGE6vKD3EUwebydcW1WpPfU35SEWpX2F",
  "key10": "4FXoK9HtL24LYacVs7cHCDgk9MVnPBYLVx8auPh5iiw2xVHgFcZmQA5qWqeKBbEMYztiX3JVAHwbW3vPJk91qtck",
  "key11": "3HZC2jnzfUrYLyAM6j2AEfpCaFfCooiqvv1BQDXg9q8WJAbJxh4s36DT7M64s49NsZXwFv97HczNKBmx3k8Z6CJv",
  "key12": "61HMGTFCLBm4Y6xhhatFTF4mAAhzHqtL58aHAViK1LBiLnEmkWLPKihGpn8VtHGQgkBxrF5S1PQuPhT8qCZTHE33",
  "key13": "2QDBZXfvm7JXafnmWci93WXvhJPfCjnLWpXbrC5TvLZsbQK3rAyMtuQnLHKhqS1vHK9sgnx6xkthmATSKHkAp8ia",
  "key14": "4ENKzhTzDvQP1payAjKw9trpM38oKBbfzePvjdMSBSmRF6v6qB8Rs9eKZa3iDGCSzLdEups3qNgyHeKhcZnnWd3c",
  "key15": "52XyTjMai9r1vJDyyqFeEzY1Xaa7EcfwtepfKKGhTLPDvf72W461UXozKqdSHN6DkLwsniDdAmcRYFcQRMdqoDBG",
  "key16": "285jk3tvbtttcGR6aQwo4qr6pFGsyY9NGSfPF8NsVS8VYPbDYQmcLvRKdvYgLp38wV8uEDh4Cby242kbWSfikYdC",
  "key17": "3xaL1DMPFkGXn3ZscD8hvrgfG5PjaSGFq3xYeAYdL3KwsK6bj9WnwcqyqfBwn7rcZrn8GcuSEv2VRL6ngTUKEpWS",
  "key18": "5ptwukSJyrtwm5wFnVGL6m8MSQ7aE2dMwEqU5rFuvDVG3xw3YekM4iTqoftrXkDBcsmiv7s2ePz61eL26gW6Mpcg",
  "key19": "4RMz71Fjppz78zymxBjTPhPqfKDUn5uf7nVaftbQnPc4D5egYktGtLfoeHcutUJEpDHMVi4PiB7VhwQu1D9g9NbQ",
  "key20": "5oyBg8nbC8o6W9THAMDxdMd2cVn7XHv64KyR8qwfo1nD5M93c3FtpEpoETEh6XXcaSw4vtAyxLjPh87uAiUPUPT3",
  "key21": "2JPQdQF8Bu3LBaC1xwDJgtPGh8dGNxgm7L5RszSHaJHn2HP7AC1JnPvHTVPEQdCAcq9PY29ZELWnUK84Bgskk6df",
  "key22": "3rQarpUhNP2CM18z3BVkngodKxTtz1ecWswT8mQyBgsc7fDbw5oEtjBa4BDDiwgVfpKWjknpZYVFs2ZbEoUPJNfb",
  "key23": "MVU2bqi8kusgjiNsnLVTzuQVTprSsBbr22TS5dm5KwnL5xFDh9Xd5UP1XYXXJ4BtziWtbKDrS3CkvQbSsWBWaXf",
  "key24": "5iunZMfR2qQqKcvcbc4p2L5m5njt9QCJGVmTAarv23fjg7xLYpjaHHAzEzyhNWY4xVBcLeBsxWjgXNvhxLcHE1rG",
  "key25": "TSi48njBGDBcxSFRieSAGXx8HZ13ycEHn6rHpsi8EW9WuDXRhXZhdPQ5bHJfrJcuYVxw2ymH2wZqCz9MLFYRaev",
  "key26": "DY3USFseYaqgwDD2E5uphWnZQRqEwWwVwvdc25CUd79aDvBzCtztxbfvAXJ5YMENzpG7irnHxtjnJr2v5sqWZuq",
  "key27": "aoeXcMhhVpahCdi2ipTgofbJPF65Fnanb9jFs7duZm4NbZTWbKsXpUVjEom4PVFwVh9NQzhg9kQT5eABtfBhDyx",
  "key28": "2pKPrJFpFKY3hHxYFxr7RDvDJj4Zpn4r54vJkKfSAqhWUREp6zmdAqtsLbSvFMZjAUFmTBCRxCRkzWwohG1woicx",
  "key29": "5ji5mYaqPUywK89jsrbsk5cDG1TzM92NXmdCuqd1MAMKbtCx64wSvf3WFG5tuRMQThVNNRRxxBh6emr3uoHLFCv8",
  "key30": "5RX8ao9Bm223UDqWCy9zSyuECupiALZmUFL3fvtKAD68YzrcFFxDKyRNCzStFBcvPYjb2YxkeGP4vARkk1psbHs9",
  "key31": "3LHintfDnK6PeytkPvQRSP7daMRMdszmEZVZ9eCSKJ9RDnkUJT6JMwgb42mgmPepFWsu5qszicgs59Gtr1onV6ug",
  "key32": "2Lf4hqP3wfokv8dyRFiQDY5kLBypGp3eJma4cjnPTvW5jAnfZmrzkYrvJDSBi51JpFW79yqFaCsFJzvVo79NKNuc",
  "key33": "83XfLwjywbdEEYmZUozjWt6VvNwuM5tS8hvZscGrx61dqAQds9MQvbwxzBrGqg8bH2eQcZkiyxMuJ14eo5zQCsL",
  "key34": "327f3cwoNZeyS7zGgzePGJnkhhMmGrwEB76B2yDa6kK9rEAx428gRxrCvK1qibkgV7J3jErpbvEVxTkXfwWHNwk"
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
