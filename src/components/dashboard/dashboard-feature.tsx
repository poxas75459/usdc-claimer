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
    "xjVkPGyEPLjBHTvDGq7WTSr52qJKH1tfwYnJ7aLoqn1qtXJCYWZvFL4M54nqYLapJUhafRKsRjtq4Lc1NX76X38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ngnojyyw5NEYMx2DXHpC91LAcBsHX1Sn23YVkwL4NCLr1vYNYu7u1NT6nXAQPJ6sibLo4aNnzwhf64oc4dAXnZu",
  "key1": "44eASxkMqsszQTZb4v6eBfHWaqbBFJZnY44QJX2ripZ35PYTmXWDaDS3PBhph5MqiX48aYLoW6vs1UkGE5FYoY8U",
  "key2": "26yM7q7DPQeKRpndLtqaEqrQU5jgwR9tywyh3hPJSMErMNUa51pZQh43hR3ZDPzG9EtiHnCmsUdMZoyWwnniLBid",
  "key3": "4Sq2kF7Ns8Um5cKVWaZRXGfQUbCbBqeNjdeU5TvbYvu1u8WoBcbbWFDjqucDVr7FeFS7d5dXBipVe9ZYp7TstL2F",
  "key4": "4agoUx1HdqCXE6tPYJJzRdf942NstJ2nTq7hZPMghKHNxv1Zqrzoq2Lv1DQjpkLdELiU2VFojQ2Up5TmHwUKk5X",
  "key5": "czrnMVP6EW1ey7EBqEgSkoveUec1dq7cjdi8CVBkRXCz4Lj2Z5t2FDEBv5jUjKiKyERGWYEMZsAi33ka2PhBxyf",
  "key6": "6559yjf9EbtVm914Sceh3HmPRFogpSkWx9w9zbbuukNoYbnuJ331DGEXremdwkXdd6AxwkRE871tyuWVTdyLu4fi",
  "key7": "4Wnago82ZfAoykefrNyoHiCNgqejmYMmQxEFTWCyVu1A3BWTPi22LTzKHRLymAtYxnyh7GywRM1tmmngMfDj3gKb",
  "key8": "vxNm7iDCZ6wTsRnAnZnZ9YDjWpUFCqmhfykQ3D7Htm1fdb7xG13eAMHmk97nk3wYAEFij5YXgc3oweg1a1632Df",
  "key9": "KEryFj3Pn4Ca7vFa7aK7Y71vwnCK8jk6hLPfvWyUU2wffPBq7X9KxNrBEmz9fEietG6wSwYa6DdGkQZQQB1xC7y",
  "key10": "3CiyJtc5a4XbgsCDxWNAfEtcSmj9wwwQznVdaMziHxFqjivUsz9UvLoKat2AT9BbT43216gENLX48xvNHDWeWhmf",
  "key11": "4MXZo6z9zreGQr8yL219DxkZvmDBSc9JEhWhS9WpErgN3GpvGxjgpaKSJmadeaCr9chGMAat8qxQyrz5pWkWRsGs",
  "key12": "ixHtD5XQGabWigFJHBXFbHksQeuNKgGcFDHqaXwXS1j6HC2A7kS4fKLmRbBQyjKFSLpAxgWZkXmK3S8xtzsWxui",
  "key13": "5o7swPpBSfJZ6Wix82mmJ1WZmnBRUiMPtP9ETZN2YjBQs1dMFyyT2FjDWTU8khUkWyWUHPvEqRYWBzeoZp37NmFY",
  "key14": "3J1iwCWmWxN8Sq5TERbLCF6hftMSdC7rnxe8xtM4kw4y1fP7sCmGZarktTXZX94ofgywq84eLkzDBckmgNVVYssu",
  "key15": "63BG7KiA2ukqqLfZ9jKDAov545k2jJxT6sZx62GxEiatnxLKPb3eXj72YtL5gPpRwDAV5QTYTQyo2QG8934eSiWw",
  "key16": "5UNkHXJPgYwre4DHGKMGewjkVvnzaTe8vyQqPZDQsRYUzGPPG4JijrSZpFG3BVzLY6CDsN7coNi4V14YroCcwAcQ",
  "key17": "ue8x5WLCHdkgGtsSz6LAgNJxpaZKDuGqQAFX3mejc1yXNy1XdDLaKQQN79qfiL2tmvLUMdNzF2QCfytuqTJ8EWx",
  "key18": "4NqnRFSxXSSzgENmbngeHq7LkghRwK3TNYfBwefKr9eCtsx843Lt8o4EC9EMpsbvb3zK4teVjVtAF1vWVeMCVCoh",
  "key19": "21j1jroYpeWK6aSaM2u812Ridg1Fbmb6wqWPkdoX37sikbJDscnZLv5HxTMqPeMu4CAiPZwDYBMyE3BnKmWWGdEt",
  "key20": "JiaN27iAWxYhTZxgXr5YRxb6oSwhg76AX2U7ShtZNh5vH6pPHfdFghhgjHGsa2WEZUzPX28mJuG4oB3pmyYtzig",
  "key21": "5ZvZ22s1rJ6vRfL8ftGnmEafujh5Xmbmo28fAi2QhJwQXEqPdERbJz4ZiGgmNmFkY83LZoBUUWtgv8jghqiHAEp5",
  "key22": "5rxdsx5euz69RUcxnXuihskotzaSMknaFjp2FrEWP12wRT4p3nfptqhwg4KAomAwdBo681Y13A8npewJBStXaQMy",
  "key23": "42yE6u598ArCsNezy4iSAsDtwD9UYffJBvuaKUAwUmJSpWCtY2CSAGSGJyGWnb4MT2CoV46ky87K7uBT9eqoCwx6",
  "key24": "5PQMKuWJroAk2Pw2pGY7gtjqJSwHMgjuAPV7kemNNrRqCT2u1ChmuLD2DsSx3P3ZkG7Fg4n6ypKi6xALR5hsV8W6",
  "key25": "3sdShphQZapnb8m82vj9ndVFcDP1JT94RJ8DSm7TT9TfhaEYSPkDNZgR6rRPya4egRCh3MHdp8kH8rv72mQCJDzz",
  "key26": "LHLXtcqSrpZAeognnmwHpvUQka5DLHyUdcxeSKVckjv9w5cK68M2Cq8gD94uup18z9RWP37Hpf8By2Nmb62CWai",
  "key27": "2UJdKQCEyPx8dZVXg1RgSsPNUxVCJqXcCQ4jym75xn3iVCLH14FKmg9McUU5wBo4Djf3UWGNZ6shHfw9tUaDKxwb",
  "key28": "46TPZHgdp8ChEEefMEnAXVtgQPRJwkawAGfU2BDNhqQ9VQNWrNFWhLoqJa3sFX1KwEjfuSPjw3dfA1hPeFTnsACb",
  "key29": "3RXgsfPhexLofremtFJ3WYJVHvScqnddfJJCLGJoGbQdFWHFtgk7pupuDKGGHmdgk6vDeUR15fpk2n5TgPWarcZR",
  "key30": "1Ec7o1LPkM8zghUNnezX6LNZxcfVXqPzCVUatcLDDnbNoJzNS85YDvSiF65QVLEzvTk3MDQiSxwthCwZLLWjyf4",
  "key31": "4e5jygQ2xpgHXm4tgcAUA5UQUrsBHxMaK4P3imVnG9ScA2LVqycLEzhJ2pSo6Y2n3poPGFLfzeeHNsi6srV5gamG",
  "key32": "29Jp9ij65bjrpnkjbsHxzRmG3sgYtSi3FT5NUZPUWietsD9RKoLcZ2dZBxQQ1ueEBh1qCKABxa89GbRXimEvVLmk",
  "key33": "Lpw7WfTXaEHGSsXx9wQZrMHmcZHJKy2moY5zULQV3SnAznyLx5JVqp2fhV45ZgTu6XjJbe3mZCVEvniUdowNLWc",
  "key34": "5Vi5soEhMBcagX8CdYuQ7CBMprxXLX14WksH1zWYR2rGYzYdSaPnjR8PN7AcY4xrPyuNT7zPvXkTimXPn6M6oZqB",
  "key35": "3XKbQTrqfVjSeKVUZAi3FWaKuN4PHVVew6GSRtXeCPvwaBEvuZE5pFmaQf1NR5RELp2vMCZtQLBdxV2MNX5rTux8",
  "key36": "5UnEiMY6Wjh4R8teoDZe32Lb9zt5CMmRAGYcMNWDPBYpRzksjEyQ3TSeKAB1GDcSR4LJmrSoaHVKSP8EVLASWRSN",
  "key37": "4HVfvyGo9DXajgpPEhYKWWGBEyHfscJGJb1FjHAqzdHT4YE4PAtqmep2oT9aGMD5zBPsu87W5hPPwjtwjEGFUCE3",
  "key38": "2zrBdWmyY1CxVFPmkM7zwGgEQsESP7XDLDAMfYUozcVuT5SLwwWHJxkTVeRKJnQaP3ZhoqYWaLk6HiMjYgN7gWVB",
  "key39": "5TcDWM56vwN88adBjCXvBaxGDVBYUF9wkDaYg53zaK8bhJsNBYWjguyeJTAhQdHexLX6etM5EsA7cKtuqgf7N3Kg",
  "key40": "2p7ME83Y6aKNhVr19kag79wQ7qJ9dVXUnjsNRKvAD5LBKA8Z4AUTGfv5jWqKP9FeW3w1RmvVhuSmwYCzfTmMPF9D",
  "key41": "4W4hkiYaW5qfLSfe45FCtzK5QBMH1g9Lr7zpRXpgaGkU8wnSh8PSP8aDYNNbBHDHwGFTGmP9CUq4N7bStdyNwx9J",
  "key42": "2W5dMUWwUzp2eG7vAkVULVP7FnC89kVz4jbCxTFivFeoYdwBvmtRvk5x4PWw7Jqujtq9aWqyDezGEhniG3A4cK3f",
  "key43": "5D7pyCcYyEbepgMaXb9SfRpmixJGVru7dJjU6GJthTW1XmiQBGwDxMZSHhU5kb3gup63oEwSaP1cPMmxdaRWQv4W"
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
