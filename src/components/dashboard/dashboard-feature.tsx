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
    "h3o4haTRp4PaAgBomeYEhJqTG7JaPaQkQQQYdQb8Ag9zeH72xa9m2N4vfVbv2jjDpi8BZZ3k2s8MrnPYWLAeTtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFJLN9dTLVTbazQb8bPwKUw5WuC6t7dJujqwgfyhGkgHNXJKeh5XWC32ctoS6ogRKthsaj4cEisY7tLKvzuPBsW",
  "key1": "2p45bY3fiNUAVfVMZsUtDr331SfnYzdBFMAdHPhU3xeVddNRpFcYqwPd1TaAKvRD7E9QDWL2E5PhdA5zC1fUYZmk",
  "key2": "4GspFcCyLLgW5SesxR2QGESdxucMuaWVwvoWXuetZhqjUtK4NTWjYNo8hGQAWcHoazMjLKTFTfmwpLQ6cK4VY1eG",
  "key3": "3iyc3J6nBmzVgWxc4siNEHnB7jWkeA2mMRDTAg8uR1oRJmUwcdXU8f5JXNjGNKMZkEwUqviaTGnmQVVpBU7EQwCB",
  "key4": "5eGb4DPo1KxL9Vo6qhi9Y15iTDAznepEDqU5fPtbq75dDkvA2FryUgnxJP2wWFvCXQEFF2xo7o4DfgoNCRjeXm14",
  "key5": "3wo6AAZVpWAdhse4jAYNnih64LuMG9pWn6jkv3myWMZURvCu6g9NW5VXHhfrKpLRgCx6fh63owEQYTuiKgRWd8Su",
  "key6": "2h3WCTuLjDkwwPpJteY7vpCd8HJ3EFQB2AA73UxRnNnYPEHsbkf3GcyDwvq1Vc7ntV4qYGJzWL4uuA73Fd9L4kG5",
  "key7": "51bmG4n9N3PbMHnongrqoKHAKun9WCGj7bR5kYyXaBLWcrF2JF5GpUfngRPcJHDtiSqDK1pn2PXN5x2RyNnzEvj9",
  "key8": "2VNqZmgvRQfkmkWTne5Nma9MiSiSzsxNZ3whYHyC5Rwt4k1vaixexgnZBgMaZidGbGW6nSxAiHUDpXXwwVTE2vUT",
  "key9": "2xVdkLg4oBpC4gUEEe1mpcAFupjwv8HPqJAknR8NPfpH6JEp1cAHBg6ZsrbqQagNQBmB8QMoVvM7ZnCjYMRhXwhC",
  "key10": "R43gdbe1JzEXRFwd3mdzyAttYmaj59jcMT5sHnY5q8NYXBT7BXDoqaTBLKoKcSs6Cs2r1Sin5XnhdcMuq5wceVo",
  "key11": "2ZzsFDbmkXaXTs1pkRqG87riUFv8EtDCJXj5QJTgPcY8FNNvckR8VHdn63HdwwijT4drD7Wqdkr78CdFmo1NPiwQ",
  "key12": "4iFz3sppWTdbjho7emq44PELrY7uZXsQiACVnftxYwpbx2XtyTx1H2YYDEwYn7Qs9UMtdg5xc4cZxa49jqY18gJ7",
  "key13": "3qw4kQBj8LE4mYLBr38KcrxcLWzLu3RkiDa7Zn7BRfyhV4kB5MCzEXXoT4nrbUVcCTLX9NibEVfKUkeQW2jF7Zf4",
  "key14": "oaQnAaXbJmfeZEGgQULeAFD6gp3ZphaTHTdgspbN9xEQ6hQJGdbp4qpwGJ1M8QpYszzkZ5LyWePpfw7Lkr19ptF",
  "key15": "54wjD2GckYkUVNUTCe9rpVtuzTkfc8EPa1xNB3CQFBnq3zL7gmnrpC7yhuxHKm4Y9KkeUimEPkYcFbAi8Rrpq3Dr",
  "key16": "2vUQh7yV8QeLu9vsoPNUtNE2VkxzLvYzRkpUbYzAWnZkgmY5RTCMDDBuQHzqrX33RGnEERJXwcE9o8kqJz6YRFoi",
  "key17": "2zUA3cqvGM2H8m6aULFDKo99L3Mn1xCyis1FgusjMoUs7efAMEeUCncnsyhC7jJGJ7tJAog8TMv63K43VN7i75eA",
  "key18": "xssfxPDtw1WfSt1rstu7uZDwuyqFnyqeQEnHixShBze8XHby9j5xH9xwddp2gkcr9gPBdfQzXhyL2ob5tTCjKT8",
  "key19": "wjZUWXtNFXfjEydNUnZMoFPGJeFPLnk9YQFUwoDwDiRZRvFHiRaaCgTVfgx3CCWUpCJAmL3s7WzMCtGFyUqJ2nX",
  "key20": "4GeLxKq4DH7mNdBfEeYL2HMjn8z15ZLmiqVhZKWMQbQZrVxpWFnguJYN8ia9G6c9AhxyRUAAixY7ZvHRpn1v1skY",
  "key21": "2ona92tt54oAzg8xADXymtyTHAxRUtntdwuWNNzGYDEiEY2wtjFVZfzkNzbu7KBfWAP6hw6x5yV1VRR6C5nvF4Ma",
  "key22": "sFSadfvvvNN5iXsBZqae6Jtwqy5mPcpqZic5QSXE8KaPTF58Re4MRUUrDZxWhpvNmp9CVVAx5F5nL9o2tjeGChm",
  "key23": "2qzF1taxkzgHwGKyMhE8PcJQw8FHnnCUUBeDiY42gTVgHGThu5Q3hod8zDbRMtco8d2M1n4MVHEAUMk9XWDy6TMi",
  "key24": "3AUarY3u9BnCvooS4V5vgopVEPQ94uvi46EHx1grGptQsk3keUtVtfHxTURwGc9L7j1JtWxWL4A4Js3WLvAYsaNE",
  "key25": "5773jcjv3r8k31CtNU2JirvmmsfcFyo6tuH2vanfeoaujSu5fRLEPpU6Y54Hw2L9dYaJLNiqzxHkaf7iZVcCQnwh",
  "key26": "5Zf6vNi5JkSbTRrP8xxRfDoEhdBqjmCNqYwzKqKTaTTPJC3uxQHJGranKDktApnLDCJ81h6CUeJ9r8nKDwp2fsQ1",
  "key27": "extoQwq4ELYMWK1Wby7uTzWk4WtXvAMNj8yqQQf4f5t4JYJSvgFsygsT4Fnsv58U3gVKkqtuEJGSeRLJtQEXn1P",
  "key28": "2itU2THtVZe27AXqS5MBTyfRDFuKyfPFprd4cPLipQzxDe2b7qnYYS7LJnVhFBtcWSbTf8KTiwufG8c6MFjbCYRz",
  "key29": "66FH4DAGzR9qpkzaZxvWQtSbiU5zWaCBFQfod4kSBg8veL7TBBvR918tfWiXZiDWDQhkv1hig4ySFDpSn5y1SQwf",
  "key30": "2KyAWfNLyN5ni9eNMUP3UU5fpEtzrMXFGpp5mz5hUnx9KGucwNFNVPmEXtfkcCyvP9i3pwPV1JrdMJDtXG4ZrZ5d",
  "key31": "5yvyFkquNaPh1zG48uCRfsv8kfbeeatqNj48aVfYDGBL2MaA51EXeoMrhnCncvHwwXxiUffN6tuuYUJJRGbFgLnt",
  "key32": "3MAWD2U5NqePQ9neqN4YhKovVE2JVRmAYkLM4maGS4ZaHnnDsCUn3dMEqQ1TQLQZtUSKxzAy2fUirXdb3pV3B8Ue",
  "key33": "3jz1NsC5xqnyhu27rgieuyqBbKCL24RDLsAFntwMgBSWaAoyCZBdfYdJaoabpMWiJx6q4VxtHQaZsyWEMxFdL1bG",
  "key34": "3kzo51F2C1kfe9ats65nBZfRwkzVXzyLbxTwTXA6umsH3qai8cMaRiCP5utEEVLkZr3YCFa9MPHc936PNjjUxQ7i",
  "key35": "66xJfMh74gGqdcURSXomcmmzpRaUg7oATsqevpPBeoAXKCshFP1ZjYKdEvcuAq6avyU2kcZqGHvZbEyuimqsMF9J",
  "key36": "3aAutMiadPsFptwpSR9AyLhu2vXPFMpSiUMNz7vRofzPekigPJfwerPLg5b2qmWd3R3H6jd4yDf3m479ZjvCBhoV",
  "key37": "4pdwMaRKXqj3y1LRTVmEVeqxc1qnHrNkP9wFcYKJtTU5Y7JrLQmtNqwVUBMkw93Xcq1VCt9GyTUqHrm1F8gnzdGv",
  "key38": "2ao3Xv8jxgKtCws6VkQdFksHzhZK3qm1GD61ZoE7dN93KaBBhuNqUQPq6zocVXsRB7n5J2t26LwZgpZncTAEXc4E",
  "key39": "2BZy2SdaZ3LbsfQicH1cPbvM1czVBgFXmGqjfFonnur22NxaXoChfJD1saXAiV7jBC6Jq4vY16XY73neMuE1c9Xd",
  "key40": "23QwZF9aN2mMbJ8BHvNwSPVWUzTfk9L7eGr9zF8THG6SegK35optBNKZbvAiCPvw5SLSJPsgtWWb2pY9D7Dmnrsy",
  "key41": "3UsB77CfXxZv4DNwqZFPhfaYg745kmXBkkDGfTtGtTzfs1L9Tuiad2KfNs9bKk5YXeDt2YU5Qj87p2V9AnMGGSDz",
  "key42": "3qq4FcShRTeojSNJzXddRLSLwxWczeLzkKJurSYMyAngcsQtQFcJBaaJahSmeWT2wLSoEn9cLLf7Hi6JHn3Wib3c",
  "key43": "3HXVW9KYAGB8mNYQhQqMNrBzTxS9i8PkiTdUcvYMugKWnXcxnaL4MNbhAZS6mxVUJig6sQgcuQb8hJZNz1pC9TJx",
  "key44": "MLeJyHJVbZd3VGt6yVab8WEuL165gXRH987ARVB4d3ECjmpyecFAdqpfswuFXyAzFLQvyP1Znx6vdCac7a8GJhs",
  "key45": "49QEqDvAQiFLGpSVZDaJgkFFLGcX1Es5ahS5uxpuvt8nGY5i2dbqradAbKJGourf8Ph452dMoqi8Wvy1RsHeK8Mj"
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
