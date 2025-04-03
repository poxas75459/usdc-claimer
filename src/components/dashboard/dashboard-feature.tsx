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
    "3HdSMrm98ZWSfQ4am75ZEsM3C1S7G1TCh6d1FXGQJNeG3Rdaas8mz3rJ8MeCktGb7AfDNA5rSDEqKxvQUf78XoDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iV6dcrUeL19b6xzSQqcdN6ygtQFmUstAzQ2xMVZwPqAeAerpweSCfbeDdoL8r3CwyEkGC64jzJAzRnfYiR3JYZA",
  "key1": "4eTLDuj7BLBEMCjauwH6xrin3jSkG4W63a1PTsaXpcocjaNET2uAkt1WkqAazQYh5EC5x1VHdSrwVeckfzUoqSRs",
  "key2": "5PvZ1nRkV9Nrgb8r6mHd8PbDA3fsNpomKBQYeQyJU31y2WhiuFKvMxkHAewvy2xoBrEvh9FkWfB1Ps8XZE5WF2FG",
  "key3": "4SHsUVVTEWSP6Jp5v2nPpcCwR8ZwP8uFcgpy7Dz2hsseHMKb8GxxpdfGs2cL94tHhW2WogMdVgf23ZoQyKxrVH18",
  "key4": "5jWGzvedv9TfRGSZ5ijkH5zGwnCe5qmEBDd2WeGAA3tETuhVLrEqsjv9VHqUimXziEUMwyz1SvDebFvPFpZD8UsW",
  "key5": "4zQx7695oiPorpYCqyFKSPNnZnqhZ8m19TvQ4G1X1DZZTjtoybcfsGeqG98emkw3WEGkYbJ6J2tjZKSB4P2VdqJW",
  "key6": "KqaMm5EG5wnTYACusRA5a15z4piJyqqgwkuBLrHZwMijXbdz5Zpdo9Quu994QPNACLp6vsfQxZdt2qdo9JopDDr",
  "key7": "4931oR1rPwbb46z2xESTVL8KBw93ghugTFFDb9ZMLcx6j2Lh6nGKAbF2YmkpugW7hL1KUozknNATBU3YPpx4AmPi",
  "key8": "A2Wz2ek4KYioyzWo7YqLUeJz3C15YKaSPCbUhwnhHQvbsrZbDfazMwCTu3Lau5MCvGMufXNVWEMyGcopXTWJmVy",
  "key9": "H4Bs1ySE5fbr5j2KzHGWEMHE3vPFQ87Z4Rs7FHau6zDmwonReAqaUfvLD4sGrB6uHx1wsiK6RtTbqNed43CXcrt",
  "key10": "4KYeoqBWUTyVniKobKgtT7NEQWakRwkVXFxW9X5KGeQuAEGkis9y1eJMu19r2kp1fLYGKdXyRQ3Q5SAvsnRpMPEm",
  "key11": "2cJAm3kag1RTowtEDm5YnFdVKJQXe4S8orFsmbqLh3UJrfC61PFfjREYtxQzsSEM3U5RYGm28xJUG2vmyaUqk2NP",
  "key12": "FqcP1fmU9ZvYgsUgHPfM4FESPwFrLQW7SQHxRBTP6Hgs3x14Tpr81uKxbjLewAMJB5Smcfk8oaFHpbGu8tWG8at",
  "key13": "5LhybZLJpJyA8TBUaAFDfMxUNSDP7sLQ15yZabpzzHMWTWcnCPKM8gufPkLoiT1wEPzaqi6tZRSjscPN1vXZ6Pin",
  "key14": "63GyxQgSEQYUbTh2UZ5paD5emrnWKvPcyjcB5Q5Qu1coJtPGtjnhEkxJJ4tpAfJXPdoePcZHacaod1M76Ez1WPSg",
  "key15": "5SLsb97Z9MpetEsCqrZ7n7LdopfsMmU2vvor41LeztTmhogSVRmcHiT9BNU3B1LgJmpn1Lt1f1z23joHZUNLZAwV",
  "key16": "2vpRr23kymKGeP3y9BD9WzgC7ALJ99o6Tyb9Pj1StVNdjMVDVAQLuDhZoZdQzG5tT5k46Ka8xs7rwTGm7o4z5FfQ",
  "key17": "39kZaHpmvSPizF3PZ6guQBDPDFAE3bAVQqw4NoUNRzYzmx47La9HLH6DUiKRg1yCSZ3PFpRQEhzhBSXGsGg2jpZb",
  "key18": "3zbV92TdYps5J3y39uuhQ4MAXVqUgg8f3PBnx32aR3uyhQ9QMxUQvJfpy2UPKr5NQxb6gjKknC43pjP6wiEWcLSy",
  "key19": "2TnqgGrPUNYuXBcqy9q5ys7WjyYR5bEZ2HJK1CEtxAKsNcSs9YvudZ4cmwm2ojB9s9GZP8XLSQqTG7jNU5sC61b",
  "key20": "4u4Aa7VLnyjmd4dxRBKgGwNt3Juac1agYFmFDhE4VQw5qorAok7NsPy1G5iD92thGdGFU7kLJM1GkeFxvjpetHYA",
  "key21": "5pVphFMX81394cHPmQ9zTCsj119LxmDm2yn1vhdhreH12KCff9aY3WnbuXLy7UnVcQvrc7WNYc7Qxy8SoZVxeLYQ",
  "key22": "VdvAB8wLfkPEKa5FNR7wA7e7o4MdtzUjP8JceQsk3pmLFwViiHAZnV5xBCq4KTQNvdSHv8aLMV4Cb9bqmjuH4jk",
  "key23": "8wXFB799zHhu9ooUytBYPzU6V6wucuJBGL3nbDDFEM8CAm5fRw1v6vV3y3CKma1GGJ5EEB9pFdVbb12RJdGo4kZ",
  "key24": "3bLKz7Hogg2qiMdB9VUjPFVVhUBuQdC8GW8Kv4N6bt1XNzgBfayNgPmkNXj4wqtQPMZ6kZNTJV711cbfFyf7GUxF",
  "key25": "5KZ1D3MPpQpYWxS4AVg2TM2v9ATnfVEo8vFPCev5AnYorh4Ro6zqEpT72dtkD8UGyaZszRTkxvQJruGpY5UYh2DG",
  "key26": "4rh8XCspmLXw1uqUnSFZiJakmBNUamJDDVGAUbhZWktLbSgQbKA9YJAygQP91te7ewScdee9DEksKFnqaeBkuFFT",
  "key27": "3bmzBTpyQ8ndpD4JbbnaVsFBs72AqavKdjqQ7b9XJ3LYM28KUyQ9oaBz7w9hfHHZqut8PbaPFpqX34SyKzgnjL5p",
  "key28": "4WtKjzJPA9u99m7sJZhDgRWyyQjpg5PPxNGBZ2gTShDqNMAj8EDfGsw55RY7VDUJx8bDHgaZSHgjWe4eSsQzLXg4",
  "key29": "2SH6LHRwXKf4WWK4hKvhApJXX76Si2JFAorZisPnFZQPwqVR4yQAJTuwUHnixAhpSLaw8shVKCfVtko4txFqB1GH",
  "key30": "2aNKGM4SF7oeNmPwZJBePgViVPU5LbB9EseKPBRcHcDGfeEJW3LFc62LRQd4orViiaeAsnB9L9DUaBDx8djA4jsa",
  "key31": "YvUXBswaD2k2Q5o3g1d8FxNFbRRi3t7nQFDjyxpUfpUtUbxjvSPPsBKDyspuj23Y4cnTaYcdfg5Exy51GbvfkWs",
  "key32": "5TwvGkzgrWB1jqXXEFSRN11PKx6tRGfzQUdCYJVs4TGyxmN8eHWchTixEPHsZHgJAQA5ChWyyncgqWCCW1hoRPjy",
  "key33": "2vbiV7gZz3h7WbBiDXTsW9yNCSJPFh8BK46z8Y8xHNUxB4515kMS9huDTHW7eJhEbxEGWHSox5eaFeTyJy7Y4GY9",
  "key34": "4Cg7eXAQHo4bwtxmjCY3iEsZKZ8DmXAqSYNj744Bkbaahzkp8yxQKibfuRMpAvNManzRAq2nDqJVQP7XUZv8bWGA",
  "key35": "59huuwFqeVw2ejjHspYuoKSmVZp7baWHjG7nRxtJGu6xn72REusZ9At4v67zSpNb11Je9dboDXuhK3pNVPbtGoQv",
  "key36": "3N89YK92nLBKkpYthmQmkypX2Cfmczcg8hcFuRaGiE2aAJqruT4oDKENKvZMYcFJ2GEAhzon67miLHTD4BPHCJPn",
  "key37": "2NnixaeS7Q1ffWJ5wZGTDZ7CZSViDuvbwg2J1wxgNyZcWs3akkngVBeeW16HTuvH1jpH8zY7sHX1psZQKCat97RC",
  "key38": "3rZ2quXVRuoEPhpB2qDqYgJphwbitkoYBqoeje386WfevJQE6erpiKJJN1kAV3q26mRFxxz2hLAat4vm33iCjN2A",
  "key39": "5XUbzwTR6jZgKJA13zWG9kmBML7CqdMoKoNqt6xSkYwJAfcvw8TRTvUYoG4zDob6wAttZSYZRbJpPdtwhsGaF1Rk",
  "key40": "6L4X4r4QpiL59c9rkFNX5Ddu2g4zLQQXdngPE2L9YYZSTfYVy7aX36f7TNFVke2ZtZ21RfFY1gvXv2v8Wr97D4T",
  "key41": "3GPChVYxqmUNv8bagrzWgwV7ZB3nkAB9YG5vLwBcWsUZHkD5GfLuRzQRGRMXjMYbtfjCoRmAvD7DVCDWcvRV59bS",
  "key42": "4xn86hXuZKjppdTMLqN5xxXFUeB7v4mdc6FHuwiS7Gc4qrjcKnYiU5DsJPMhn9UGsyELELCJAqY3qXxAruKM7Paa",
  "key43": "t5HdLyDawmXEUjwSDJEmrWozLyy1VP57GkbVhBpZyWqwPadCKzcg6RNPWxuEtXVUQTBtRrSa5ZZYHZaFwEjSn29",
  "key44": "5ShQ2LAWJaJdCRidJhHen8cWL1JeXDaJ7xrDqd7KHK1Ta4YDCH8dM9UYgGbtos54Qq6v9zaCzxc9UJjMtA8HaPA8",
  "key45": "4U41PmeW9dMKkFqkPYuKrD776YP8QbyPeKHCihZFjgQnBZryKVDHQ1AMf2dUjKvK8h5U8KaJFJzpm3xnHjqHXtMy",
  "key46": "39HG2fTsbKCM8HbwPbyikWtdueUUzN4EuiooJJC2WT4fjcf2taMMroSpcAq9YoF6UtBmPcz7QefrKmMDnkTvNRja",
  "key47": "qpcphfqSH4bPXfRcSaoeCoErxxasCY3YcMS1iD98HApZwGnQ1npmu3QBM1ZxjEXhxzUf1xdTevyjERrqp6nV7pq"
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
