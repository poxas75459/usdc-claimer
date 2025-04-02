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
    "4DCd18RJHGJmBV4rqWKuPbTNuSSv7jncz1dB5Vxh4pkeorKGmsNqprT19u2XMrshv5dZSQYGBr8JjWMK5o89tsGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W1hNPFko5HQE8ZrfhA8umbJPFqrSNwN2BfspfofWzmFqG5U3mvG23YK9HWEBcMsFB9EfyktUjcafkYmmwh5QdbU",
  "key1": "3rQMepwjCXZJ1FtmVt4uhvUoRxJuu7psyVuuSLZCLhJUY1eAgkRCo7rrMUyqzSnBXfM7StViHhHULE63TzdBZ6ZY",
  "key2": "5cJ2PSg23Sc5Rk223DLgZPx41SHyZVfoWfBuLXNasAfHQNmNX2Lm1rM4bQtZ68Tb1Y4SvvGebdbr8YeibPV4NjCn",
  "key3": "MpwLZu51GBnSgfe2u9j2iFSuJ79Ph6Y2z23Pu39AtVMNtW2M372twdazW5JGpNBYBdZNtmdQWiBHRG4B3sTzBcX",
  "key4": "3DknWjweyc939ktfAC6aq4P8HDUPxNkMV5GaB1pvakEkHYiwjAQwZ79j5DbGcGGEoJRdpHmzNjg5W6ZBWt4SYQQd",
  "key5": "EbU4xVgcZ6pP3FG3Ep8svtp6uATUSh9v2aENcwRHxj31PDaGPSkJ5Hqi7NVx5mq8D7zFMd4iVRDMmMASsx5uo3V",
  "key6": "34ogsTRMHbRgR87k8aaaJXxn4oZBSm9oKBrVwVWYiKjfSSLt8UGntx7xZtmF6bZqmmGwnrBkaFLqVm9rsS9evUB2",
  "key7": "3iAtqzxvbF7vmjHtDL3HVQCrnqQE1gAsfkHeBRBMq8qkKvP5JRMpVPEcN2JkH6w3gZsfGp7LGBNA5iUTCRJjdHEe",
  "key8": "4Ewg74kxqkcn8SPUwYM2xqGfXCqqntPbFYUdN7vCH1yUDc5qCnFEbcj197zLLn7GntAsbPWzDEjFLRf9PVtyqiUm",
  "key9": "28e3KweXVvqsanVLTGPfe1acmMCAATG8afJNL1sg5ehXCf4KaxsEDBvPEYkGhoj9NkMT1Twms2q8dGd7azVHtTMJ",
  "key10": "4xURpnjyFXBzJfwBPU4jcq4JjAMUUhcPRSsPPGLNTmXN4DGNiUq5S641tNRhnvugY1FbpY69yupCEhcABVJAEWD4",
  "key11": "uAnigcPqhkhCc4WCM6dbcBs3b8XGRPm7A7Vk4x9esNN7EQUHVeYcUSiMvLsmAtF1iCdkDaC6VTbjLdj4757ZW8N",
  "key12": "623Tw3mTmDmfvtL6BQYnFwBs5D7Jaah26zwkBnypZybtXW78ZrsYE5gXuuFBhrnqUn3eMVtFnnGPtxbPznhJae1n",
  "key13": "w8c7W2krbQwwddZrKi6ArWuNW12xMj6By2xga4LLvKB5gAyVzXWoezk7PfrMyngPr3jG6LYVdYFKqmRT2WB35P5",
  "key14": "4V8f6mi3nNj2UvSAioovzajUoJwGaCkiSBQkUW6EZQ3UyLo1N4oZsVVdNvUCpV9TstRdmTjEMTxgaxGgesXc1Dkg",
  "key15": "5UgcokL89qpDhX1ssdFJdRSGvUZ1WfZUJeMHRVwhC8FrhWkbGbPC6uHU7rF4KxgY8zQQswMqckPNP4HVh5aR4ddj",
  "key16": "57fASD5dSS9LjADV8fuPvHUcs5YwikGq4jDm7UU4wtD96co7tVPxV5gPp1m1DfZsNJVgQ7pNah2eJrSowFxhgZuP",
  "key17": "5wUGNggdbRvhg74vuP7wNLrgCHezGzqrjwLixCq3LNB3cdNMwxP7SpXxKsmLjbP5Ptbx7F3KUFN6reU73BDfXkbC",
  "key18": "2ziAiL2bdhCvsNDzS5HH7v1smRzTi6yiuCgsWmdW47g6BTykaswiVjqwTxfTMi9B1dQ57zszhQnhh5JJery8eScg",
  "key19": "4VB6Xt7X3jebDxSH4J6W8yq1M25DHQuYAcR8gkBXB8wTtLvPpPt5wnbM7a7FMs9w9AVm2X3BeqyZiCux7KsZzS7X",
  "key20": "5YiLpEzBwWV2LXfFP1rRDnLV5heB5KtHj1UnCWgDJog58i4dMJZ54WPo2iBidp437PGVUQFpNXEGLLwkpuezYNjY",
  "key21": "4JBpfQ99WZ5pwugLXrKCUMCSWTqqeHA2aYFqNgNi1Eud5cSMBKqmCv7idpZVt5PhBxqvGnrz3Tua8j4yg1h89Yfu",
  "key22": "4JhtDrw671aYqayz4XNc2UhMcXwVfG6JB7oJgsywuXZLCUYMMjLhNBofaCseScj77zCWXn9Ygfmq5kViD1PWKHkQ",
  "key23": "2MTsu4s8tdSEi1WPBv5DHBHiqpo7xAQxWiVdEi16bwUCbmBcp2FdGr13UPDzonKiRP1MBB9em5zEiNFPMUiKHMHc",
  "key24": "2j8uYv3MdBVnWyGLCBUq3xhKk4nthxs2Wis7TCVMG8G7c7AJQUjTRUfy3nzaozia9d7n99UZN31AnsQNiVMubLwb",
  "key25": "3czJG8hq5CsRBVa1DEXMVbmHUJdRGR9bNfSQYmCaRBGPhKY2x1Lpwe9zrtaS6zoMMsxDSvUjKJUniMV1dm7nw9uc",
  "key26": "3nTU61DzCC1TUwfs1TPnoGdMfSjkyvNxiDSFjGB3goqjX4vJ9zvg61KmVy7eau66J6bfedebzvNrk5qg6Bm4jNTc",
  "key27": "2XhsPei42Gq3evjKgD7RRVqPzdLiUu3m7PSefN56tDKXJDq3wCr7vP1Fw2KDxrgT3jhBtHbBcr9KAXhexL3JVnUV",
  "key28": "4v7EkmHbXRm7EhmcqUAn3wCRauoP7B8kaQLFu93M7AzUqQb2w3USrSzBUwTv4LEsGrPWqPvTGHF5yeCkzuBqTfqE",
  "key29": "2yr24sjfnf4yquT3P1sLE5jdyKXLf4zfx5sKfMPdWjyTndVCjkDzngaDcyjuJbHWH7a7uKcrsiHzWUfvkT3RyDx9",
  "key30": "3k7VPjN83QHFCiwK8EpmcsMJZCfKdpKvpQFyBa6orroQJfmg1a1GTKMYtYifsPL1jQbsbrmqPJZUdrFg6yy6n2HT",
  "key31": "4TnXXn1i5jGTryH4kSBRSqG9HC9qd6D7s3kTyfGhzYZK3Rerhf6UKWmTxHWR3BsAi3edu9Eu2TczVwTnL1em5SoW",
  "key32": "2SzdVyWXg7bLZq1tXfNtXRZ74KZpi2j4tmufuuwLHcDmqEf3HSGJnKWEU7JaRDRGX2LMYEyNh8zJmmqc2TWFoWgi",
  "key33": "wsrFH3MUwFm831zH1A92mNRB78SozCFCMzNZ5u6vriBLR2EdxL7VUmtp6FZ2drMoVzwS9cxqd82KmcDSf1BGPWa",
  "key34": "3zdBm4pu1WXhxY5uv3d9fQPkWHApjBkDNYFmqpyUspYHbVN3JS1p939HNGyc36Ai3Tcxg7Jg48wgTjk6uVrYRwmu",
  "key35": "4czaJBngbhpcZnQ3Wi8k9LSXrfiFS43FM8HvrhWJqLNrjSivGwKSTyhmEuWwsQvdDckjqHKEKH4vtSy3w1yNEnMf",
  "key36": "3nXEthyDYefZYk8KVXXp9vUUc7TrxcNaP7sgzGgLCJCVUUNA8bcJHwKDT6QbiaaATMUTM5JyvHuQJz2Z3H2nLZNr",
  "key37": "m29hRENbQrp9Q3ZqCUbGMfGoCQ3KXPGsBupSiGtbLN8ViAX45YRiUhCf8VwdwUkXhu2CaedQGpyBYEPd2rZ5JxL",
  "key38": "2qqicwD8dhMNRgXCFHiLY5hNU9yJwrVfN7vfr6Nt7u1poW56nUKV6L6ydkM5NzKtJHL73J8AcJLWL9KKpQ8Vo62m",
  "key39": "5UX9SaYyZZ4EknfDwPSwVMFTU9cjDVnfRSZVuCJjo52dH4bzPzVR9dH87hrNvPPe5VxjyGsjTsidoTmrCutJndD7",
  "key40": "5myrrKaKc26M732kqHdVpr36i7tVBMXqsRrLzryUYJynUU3YwxZpPzvQ7aCwtmZNH4kSY8cdV6KWqxSGsh9RzG3q",
  "key41": "3e72fdPZyd4d8oJqvirngSsSbbg1gqAFc7FaHxEkAxVoyqB4NfstrwvWPGku7yXd1kPgTLku4h7g6atUY49JnRM6",
  "key42": "K9tfYxWJu4NPDj4tSbDRL4vsvY7t7KZ3QSNQh7CtQi68t8tJnU6JwNbuu7A45WTywr7jFiVma6VHLrKZvykv3pY",
  "key43": "hwKZ4kkDwaTALQMKsR8jTBfE2cx5yqKcjB1vekPpcqRJzHUYTamWMa7fG7Fd8JDKkCHBaqq358grWiQML7u3bgy",
  "key44": "5PTgeyYPAQ2xCW23UHHh1M3EgWq3fdwLp1BRoP1y8GNm3vLtAkoipjW9agTm43jd4egD8RqhZ3iVFatcDrn5qxuQ"
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
