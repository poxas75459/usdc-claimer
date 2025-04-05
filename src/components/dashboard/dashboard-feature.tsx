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
    "2FkDp8hV56gByxLR2wYo1wuK7BT9BFNWsBZ1hiEymwtGqQf3msnsFtmcipWbxobUfKyDgo1pdq1a62yfSFKrGhBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJGjeFWiFzZz4MdmLmFYj8qPAt3v4kgD7iwBcXsux9cBKyuNUorrfqikjX9GLjHBY55UDwj27qMP6FzxeXHDEf5",
  "key1": "5YKUjcBzJL4GAR7aonmZuzHDwZpbPeDcMX4mzTVgUMc4baJK15Q3MkBmDgT5uJFD77Yye2L3Yn1Ex1XmJ913aXT4",
  "key2": "4GYUviQm2mqiJFoEYLaWUFenDH8mMPmKCzhVs6GC8XAFDSQ5CxTXPEQNPCw3F4ZDztunhUD58dnsPbdJ9QkgZwBD",
  "key3": "nBBzJzpV5iQZ8nNeWGQwyy8aHRoeGcDCdoLb86zaiJX1jJQw5cgDvLrqpM5DrtgFpCkimNfwSWwVSEVMCqfHYv2",
  "key4": "125DqY813Up1waMNTsL51vbWHmR5F2zUH88fdpbNMHz3Y8pjVMhj9FS4gMT6wpypTx2JMkwNDo2DrHaSHQpU7yWn",
  "key5": "2ygFsZxWDnvwCiHPeHW89Vob1osqFn99zUfHjkdBtMUYJazuEFFykEPyPbSpSPH54T2QogRs1r4TiBKK1VhTeNPP",
  "key6": "4Qqddpk6snDyX2s7XBNRzAG1uQvHbvVRtJfnUo3gSW9sLd32v8k7cQE2py4hmxxoDHBJ2kfp2U7FWnfChUmFbQBe",
  "key7": "5zesoQvW9xWnCx7fcLqxcViKbTdbd4YLnMcwjfPdH6JAAqgW1zNNRMpbKQyLPaXbe7h2hhU45L2aQJBXUdKHXKkC",
  "key8": "tui3JEreVWrXpa36Dqpv9nJy7FUUCVrYfb3G8WgPEcjT1SQ5MAAEUx2hK24p6XrpU5ehhvrMa26tasYePUeaGXi",
  "key9": "dDsk363zcjSfV8MRVEUDKcGXJaZbJgDQRApbfwxDUPocDwLiPcbuRUUukT71QjaAoRizrmTiLv8DAUbXZLJwBtm",
  "key10": "2Q3YBK29aCa4QJWjYrBvsdekYaA7XMk54cU2efSvyKDzjMUGAUVd5mzZrGTK98W6WgY8bB8n9u2p9nxJjK4vXEdW",
  "key11": "3NZavzcaHGcfkhvWb3SbczoTCbeK67cM1QJ9dg2nJ7EQVQxUJ7M7oVV2p7d5xzfFAFkQUmPVqoHmQnJcuCpFrnKn",
  "key12": "4TKyrJ7nozyzAonCD6KfndwggXgmkRJDjiXaeEvBCFSCnZkgM8SU5Uvm7TExG1A1qVi6zNxNXZkJLH1T9SLs7cjF",
  "key13": "2PRP3KEzwYg9AZkgtCzKDXuokLJTRnE7fN8duvtWLUn6EJ2hVjRkoMBamqwvzoF71yXKzT1gxyXBUFD9JAZZ6mTG",
  "key14": "oZVeQodoKY5UJBznsDLSc8fNNfWUE5asQC4EJzZRBSNFWvhuN9F8ubBN9KvWyGiuRxrmBRykrk9LBJSDq6R6PRr",
  "key15": "2EutQruKA3vYGUXUMZdvpdzvw1KYwNiW5Gg4yrj7HNMmQVLCJYbt5xjdGBMCBUgmLGXNkY2eSmAvJMqRNcAxTC95",
  "key16": "5cn1qNCQiWmZQJR4byC4HgnPduQa6reZFinn2B4cyiT7hsxpYeJ6xCB1hYkRhTUkosXQFtuTJz1yV8i2nd5CD6wJ",
  "key17": "4vSiSpiiG1Xs9hHcqfU4f6SuLVMPoD1RxCrbComNkrxCpC7edSoGnpxjyV8rw6JrGwYhcvRovUuYh1vuFk7ykx6k",
  "key18": "3QntgisWMVXqavH5zb93wJFwCgxrbBw3hZFtow59MexR158U9nVNwC8nsyEp2Wpb4NT2Nqr9HRgi4G7EJ5ypb1fx",
  "key19": "5VMQqGt59DaiVghoLXU3pRyFGLncFibUB7KPGYmLjtPZjoCsGfmJwAWi5CNuDQb2YXiRnN5nFk1udQxTyvoAGqTe",
  "key20": "2qHComc5YKknx4QvxkasMYxWbDHZsGfBJGvHvHeMANRWfN74755kyaFNKKMDPeeKfCt6rRr4ywBw4NLyCot4XyKB",
  "key21": "ABYNSMD4F7DgAnKrm7VcMLbYcu5UcraVBkSC1QgE3D83ZinMiN6X1LU29ynA6uuem2p4LnBMzHTjYNZZaKgS1Nk",
  "key22": "5ZNMrr4DorK5Rm5ZuWNdfx3MCdYL2Npbr9Xt9fh8RdiRSigGw4tP2ieN4dXagwPkd3qnjLMxW7HSc5y7Bnt9VGz5",
  "key23": "2F5J5jaS65mq9KwKrU6roqzh14yrSavmsAaKwpbdaaNL4NvYKFkEPMGkW89RW8czA51D3jSvAA2smFT4r8yme9Le",
  "key24": "4cueXA6Yf16VXdcTS1wGhVET7ahTDv5YJVvcKQ9HiLujFsxyWCR69UZnvEVky4fvrGQcixdPzCuizHFf5YJNbHtB",
  "key25": "5cLFRyPGrMzfq5jcNkCMM4MHsBoSZzkzpVrhGgznWvFhnhcorku3zRubtzhbYpdB6xk7AT9fzWJ3odyK6rLutjhU",
  "key26": "2h7VuGMHikho9GLTnNDaFbC1t5jR2s5jjNiLzuLzAd1jd7U85mjy68SU8nS7n1Ytw6JqK2Ca7tHecJuQeSbD5ERH",
  "key27": "5jF8qM25Sgoi8Xc93iTGvE9yPjgLzSRLJ4t9WeVZja6kaVqdL9GtUoGjrEk3ty8ZbKDqZs5hYGLHZXD79jcbQXeu",
  "key28": "zD7CvFuYBoYbexKAmaevMByWvFD5YXiHAa69p6VJszxMngmzBF4qts14YNYLpQT14fmmTgQQfnwRkqmDZdadcpm",
  "key29": "3zq2HLG48N8nCHxsUrdjeA76nYvPY2a7REKh2dvKqe7ZnmP3ZPDcr5UjrKCFKVWaCcZD9TPR9EXax4uusud3Ajrh",
  "key30": "5X9pmX7QvmxHXq7XqkNSzRCDGKcFzVmoAuSJityqDNxxDwTbEug3ZG7tp4fjBP6Rjws2MLsvnagenQaht1CWMox1",
  "key31": "5Gs5oXcro4iQaFhfEvVVQTDtSu3hEZkTTFDNKpmvTphpCFzLNj7wwuzhVarcRRznTvG9RkEWoc69ZC2S5263jeiz",
  "key32": "2VnJcoKLtcaFMjXf6tvZkxbPNowhUL8G3T91hHUh6znVXxvGY4hv63vwxWyEmaog5NC9mZmrE5a1md2gTqFLdUCh",
  "key33": "4WSSXmA8DBRxnnCTtKRSLDgE7P463gMSjSVrsz32giqUsdfTAhrKY4oEfvZNGTLV46MrCJq496xMWhaPzbDEo3jH",
  "key34": "vjDN1xPLa7kQpN2cNtSrUqFunsXUWPvbfRmXXpbipXhV328CGCow1H8vVLpvE33vFTgp32cirPaeBrwhz8m1NJd",
  "key35": "FSNCc2Yfe39nbwcLDpK49gNyzNhuaQkFPKBxbnfbpE8qpGtndLEzbwT9WDSszzUoe5877yt51S6terFGGjkuqXM",
  "key36": "37bhgz73ZGpEb8EKJQBGEBEJXPV8LVDyHnoYiQzBTtWhmTABEUzxcrJLErHrK91hugUHL35txwqP4Q7tmrtkzYYw",
  "key37": "2HqnAcofF3Q2swrSjgmpkZVXLmveFojtut5Qa4QCphGwiYAm3rf2YV7T9zJhRvKXvzwqTukQ7wxiXDHNnX8AK53L",
  "key38": "3d1h65sz9c3aA6ky5qaAf4pVs4WTtfW4Mkadpv7igHZQW7p4xKPEcK4AM9JeFGXazYB7JxWdsan4qWdEafQ5JA97",
  "key39": "5dt5jJBNJnfJTAmx5Pb2HymycCqnbe9r1f8wff9aVoqXACAtcezyPRiFamCHPjuxofLR4yXPSPz6kB2Mn8ykayfo",
  "key40": "WctLJiwTcG1WNpNBUSkXC6MJ6o1Sk6WJBL3CBegyivPj3pm5zLr7wFRBqdQtwcXrdgWGffCfziVo2mAD2NPVPym",
  "key41": "4QVXKL8RbE2P9HYpoPcLJWf5XwmBEbMZi6c1styPWRRfsVcywXfaHFhdLhqAWEbTbDS7j4PPr4TbAbpoY1faHMEv",
  "key42": "4ehejKDRqqGFFDGeCNWckNw1mbxY1JG85PmD9PD5ks9t8HtyPPyjQ77HNP1uoDDzqK1umAwdcm9V78xZW3VTNKKx",
  "key43": "2kRpSdHY6W1os7k7LPhTMMf3gyViZgZ7QFh7m4P5bcQdLc5A6WGaXqGENpAgwcupFCDzrWrmsZhTPQZKwXU18RUK",
  "key44": "L3XAU8PPwM46ieCx7enLuMDF3oCp86Jk2b1yzTZbbXBLFPmiPGUdtyS2FfT9cVLbDydEKr9UirhRUbyA7eYoPQS",
  "key45": "4syystBccfZCYyPAbgTc7AakW4ff5gUzfXghAVyLrTy2wg3GyNVraJhBvH669bhCwRiLw4gasMkeviofrhqKPbWC"
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
