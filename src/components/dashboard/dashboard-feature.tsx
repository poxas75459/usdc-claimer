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
    "2S1MdhKSEQ1o5fTWUEHHEm8faD7Mike2H2zZU9uYy3xumpwShcrC9T6dwqbngoVBLD8J8nrbLxtSSyF3VEmVwVM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLjtg8i5xvZpZf1RsyqtD6xys9yDEc8jXNfmTEGRj5PBLgfaciEwmE3wf2iewMN5VAryNFw8UdagoF2Du6NnNnK",
  "key1": "5EhNm67Y1sLR2rxmyLSp1grLncLXwT267aShRk5SrZ5jytkL3h9YZNh9FktyUM7jFbNPf2Qe5AjPPyeg8MTB99Yt",
  "key2": "2R2GRYxbkCnhL6HgSQ8kc2VQJ4xB7PF8o6BWjHd4rLScjJYhPeNDQpPDXoaarDDsh2aC3Ep5TQkmPsDViw111zSo",
  "key3": "59aFC23Akau7LRRvkmt48e1NHeqQoy5oZcUgaWKBN6aLCcpB6mSVe6CD8SGmm8SMhSVmGYiiGXZGDQPxLxnDHnea",
  "key4": "8P8xqR6Dptka8QELY6VgPgbQcjxUNqT5hnoDSEidc1YA7zRF1Jx3hCtNFDACS2RbXjPp496RnTVpCiC27BpJpsi",
  "key5": "4i9bB2QipGMsBeHAt3ohqSt3WjaLkfL9XXRizqs95YZBEqFkFTejzuPbeAYfqYbspivb1rw1Z5iqM6eLJF4b7Lwx",
  "key6": "4VdzngzfTdbpv9nkHsDbCSmq9CtsubAXgYYZVvyDuNjMDDU8rFNj5jeT2AyNgYBMwyHjgm71udzGrDqJZgz48QwF",
  "key7": "Lr5Gw5nXnEqTU6wt34QLTotCMJrD1jZbwKyN2DasQ25yfknsQ5XyrydL34pnGi7BNrwnFcF4iTBxm1PwgNnKWxx",
  "key8": "5MWi3wH9EXQA1Sm5Zfim2hqanHiWgLYmhpkEgouADhEfHpeKvpvSK6k3ybG5WXZ84YNAmTa53Sg69f5qbXewez68",
  "key9": "5cAqkkDkLTCEhQSxzfuNitYQyPwerzwRBKSsLaN53tB5tV2gRZ1ZpReY2mj8dQQSRSMQaQxptHrutHdBt9KQeHju",
  "key10": "2d9fHCuoAVfs1k6HJW6F6Hx84kHETbK1z2yRwPJ42iD6RsunivxWfDy43rs3ZCsaPNBxBcJ8mCcPkewLLYoS8JP7",
  "key11": "4GkFhh2VEo9YttCBVxsBkftJDwdKmmL8mDmz4TAQYzUKDf3GnRUysPQCdmYoNrowwQb5auwa4LMKXhDy7zmZb3AR",
  "key12": "62McQRctvx8g5ZjMgzNAYtrWRJC3YdJRtg1v8kGvzhE2Wjt3yERSp5kpBRVax98YvzFGcvgoSB7Wb6wycWnbUxoU",
  "key13": "4GpCEUtcLQbTBftmX2wxxUYjsJcZEMTxJ3LkJjvzBnWJvWodP17PAGSUKbRdWA3g8qaaHHCjocLjXMSpDekq7ThT",
  "key14": "4FSFQiqJP6tL9euaD4vcy12dnLAhgtvMNGXYPX1ReR7zdA5oaXRqQ8i8P36UwciqzU9B3APJLbaQQvVB2A2z6Pgs",
  "key15": "4ijA5ACyi8GE5EayQBs7zjU8L3sfw9MLdM6ZMFuoeSmjJGSifHZ4znFVupobgY619WLXXskTLSpNy3jWe4L2vWqK",
  "key16": "2yDBziTN4B7sbLw9GokxXL324pwTroswdUYKWEgZ87Es4Rb7uweYQ3AYvKrMvYy3R1bDAdP1HaB2qQuVr2rCP9sM",
  "key17": "5MvV5dt1c67evZGXk4gGipjJAqPos7mu2dnebDqmgSG8i1Wn78Xy5MUCGtKjAPNHJLfSSf8vpXVLRfBANN87z5rC",
  "key18": "3eea6YJcRUsKWV3JXfKoNsvgALajMrrqiirr4Vo4dqhgdYkdWrqTjwxcBtDtcCBoRr3WcNde6xaDfezMdesEYwuf",
  "key19": "3Uwb2aS8e7NrhqZ7zFjN34vKojEAxK5eLE27Lp13eSxeAjgoJosrPRF8KtawATGNYtssKmE7ip1NGdKPWpYzf7Di",
  "key20": "5p7uTUy4HmsLCSvfdbnbmXxzM2QTUpAVzP4ZV2t9ZvFqj619uAJxNx2ebqzuZh9GGfWrxNDrk1hAS8p4bVDEv5F7",
  "key21": "2VumZmE8UuZhhV6uRHtVi15cHJvBpXqA6k8RxNN22gT59YGZxVjDGbUjqXCGUJ8zQ85ebQZdAxLBzCnH6bSy4jCC",
  "key22": "3DWCjYasnug9gv3oEw4CVn7PAuwhgTaZzCHmiDcHGAc4nxdZSLQfCTYdeiLGCXWnYLWSc9AZkmiDJGTT1M4cZ6w8",
  "key23": "SFj1e79xAbvnMqe5CDayUgote5rTjT4BdjwSuXqpVkS3nPyXDiEsnxnGZ8PoBi9o9rZ1BD8G45iYETD8SnMf84W",
  "key24": "Tmqr7GUHNb8cUPm68CStc8AQpwyGgwsib4GK7metXSHwLexjC7iVmxZyQEand438k6VyeaoNSZzJyJuMpBCYzaJ",
  "key25": "5gVoRc5U5eN93uhkKCDWgrkzA83HptN8B7J27BLKNxEC2NpY1o1jaNwhQXugZFgN54eGv1ye6wfQmcV1nkvzhj6o",
  "key26": "5xLZFiarhZNtunhWGqmD888W1GRMFb4xQM4MJoqjhT8RoVm2FjGqG2RCeje95VCdcjVH637yadQZEY9KsJq67Ak6",
  "key27": "5tcfLxJY1akYwr8MWkTLQtY66cJaMZE4RjLEiPAgxkxueiCH6NafxfBK5cJUkmUHcSq4HRk9zSWL7YRTHipdZy4n",
  "key28": "5rWiWzzo7JYMqdH1Wfqi33tF6kwcJwz6puVVZN9ZQgcNX4kNNg4tVTMAXNuptLBPn9kBvQivGjwc6RQpvME1Dnx1",
  "key29": "3S2rJ4SKN2nSstYe5jtrcvMYRzyvTv2VQ8Z1BMCvZ1ZPbhrc2PLrgkewKDrkTJMuoLfWvYpRznYabqcV14YvTDmM",
  "key30": "2ksC9H3VQPn2crrkGPAVP84jFzi5x1qLWffXRPeTrC7sDPB78yQuJEtuBYZJacwAC3cLNrmkxEePBDST7RywDBF5",
  "key31": "23CBoZzyGNbNxg5onobdwTruDRqsYxB9Wyr8oDAwB5dRi2fVCjohg72qERT1WAJAco2v1drL4xN8YXzqpDEdmUDA",
  "key32": "2SdvrhHxX8RqgFvCaymop1Qh2YKHkpNku64ToRhdwAMH7zcgNG2AE2Y2NAvmkdsMN54WLEep7Xn7vFJ7wVsygrnh",
  "key33": "4TM7pJoAkzURQbcBRQuVqrUQAiMxpAUML9Lva4XjQU9RTPcaWtT15sy58HZHp5EviBHZ38omAvdThHMjvLaST7wA",
  "key34": "HvqPxeSjY51jhXWMpP4Vb2nkPq6j52zZsTCd8nTPJg5xfJ92gpuZHgFF71Bgah2wqtvA4YHG6rU29tPXV7Y9sAU",
  "key35": "2CP1FFXLUV4mMfxaKiYyehhwX7BCxKALJgL9uWwhZWStr2MKmGWXmcCo3v8ck4uoocELQE6XgXEhcU8xnuFHQdoV",
  "key36": "JtxbnLubMfKqodVqu7aDysZU1vsca4X4qrdMuCJkAwSUqQfzHbcVwNrD7B7WMrknnKkepAUZ7NCGg8kkBPbVBF9",
  "key37": "2J1v7D1XhitoAZBDXzY8CZov7cPY4E4mLP4jG7eZFJ9ccBUt7ie1sKg7iajZ22zy1JwjAve9EZJrqzn2TY7pLUQ8",
  "key38": "5AKR2uB6B1YHdDTeXHC1JcRiwhPHrGmeqwTQLRVnZ2MzBYYmHTvgin82tJUZY8UkF52nisCmtTS7EB3KBxhbTWwU",
  "key39": "3UGfU9YvGz1u1FbhXhmch31HUVafkpMc2zuUCbC4ms5whT191DcaeuQdq2jghNU15B3iYiaveoF7FMJPdy4bBRMd",
  "key40": "2rcygQkugsrc9tLfJKA1L6uv48gY5PzvzuFx1UuevrMq2yNjCf1DeJvXaMCD9ohrQuRSe2o6aDnWMJqezAJL18vk",
  "key41": "3WZMRmExAiwU1VFZivCZg13CRRCfmpDgfxST4ckcxBwycAJiQU9koHZYXqvuRNepEs3oxyW4ZGeKUNRiyawq4vb8",
  "key42": "3jF9qEMR4R9iYXz56DPN2ehhJ48KeLneZSd1eyivtpW1eoqLVc7FqWb9mjuMso1ceHJUvxcmJbZCNXHKsYNKww8e",
  "key43": "4jZx1uYdov7iLFAM9ZdSZYKX9zw2N8Dj8JzRFFFfC7p3y5n32VDVphuxt9SBE2qmPJNUgF6LWMLPtB6BmdzQniBF",
  "key44": "5BPBJKhzqBbpgYBYhBXwb7BR9k6WScnnNHxmebAq2AUaN9PPpsD7HHokwPCHz4WdsVxReZYcHzChrJnbei1pkC3M",
  "key45": "2sWiomJSN3oQ51ESK3d8AQkjrTAGpMRMn8BtXSu4JaGq67wr9RWVKhB96aBjfcx5dwUEWULEMSgMKdBNYbv86Y5P"
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
