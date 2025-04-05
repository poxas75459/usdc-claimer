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
    "3Tg9znTwZTVSeAvMaVVSLVWGbdc7fuMqKmm9gtwmyyj2F7ytTwieAwSqXb6sMAtUjneE5qLE1ksWfnU5vHe6jhCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g4m7PjtDecgKY371913wwbwQJakiydF9s1sH5QXL2KgaV1QM5E2mHaDXvpxvhjatE911g2UpMnUbQXCcBsdJpos",
  "key1": "3jPcBsu2uADGG5DBjb5ZmZZQxcnnntfc8E6U611pGLZABwqdGYRcaDKdYAVuD7gPTVtX8EC9UWZnNhg3mTN4EzKp",
  "key2": "RqU8ae5n1h2fdC1W5sUp5RiDpjGweDGn2H9H1EK3LC5JAECNUtkVGcVXNdtGieaNqimn5FBTVU56RBvhJUGHovq",
  "key3": "3ExPN5yzVJnytAYceP3jTa2ZaDGA9v1ZqCenbwnWurR3hZTFH39af4RxHwWGwsCkr2QceQ5ZbP4tbp1RGigane3f",
  "key4": "3gaPrNBcD4CA2ND6VupK79qvgLbLHqR4V165Fj4PdxuZDXEckJA37cawff7wdnh9TqivotjF275mFgj91dZM6tMe",
  "key5": "3CtpwLV1nzu9rKncZ9uamdDnFQFUbQM176amZmUJQ7833tcRMZurS7b67yHcVmFtVMTqFTstBBmmszWKh2wZjXDr",
  "key6": "5diVyfLMtJeWsH6AUUfBkqTok93b6zusoGWn53oyz9kHQCEje69nXTWG5fmt1RTnrpnCsgzK5M2yhnewiB6uVFZH",
  "key7": "27TcDqRYbjSL5EzCvkfuP5JFTU9KyUh8QhWjK6oxcSSoEZVZD3b6ZFEbgJuPLnZzmaqFqKhnZtKfrzCRiZBFVBxW",
  "key8": "57MvnawQ6JkxG8xdW1zngFdT4MgXh6PPhURqyYX1aMQFoQvLWnNESptV4kB5xuyMbvLo7phSHtQnXLTWWTXKExUB",
  "key9": "53C74xAvE83JiFWJaK7M2eqpu6r3L3q5dombLJnowNehrDBuDWijKTSXVimnRRQg2HHPjesLtXosXnKebugpJeax",
  "key10": "uVRpGEEXaYobLFVeQ9WKz1rNtABzQBgovVqwC1c171VBKK3jGuuH54rvJu7xL61PkaaZLw2x12UW1GAT8PD8v2v",
  "key11": "4rZza9R8GCkaqw2eAo9GVXxSRpPBswWXXDYxG5mXQHdsLHJMSWoVMNHpuayNcQ75J9bxi8mDTKzhYwBCP9qtp3hq",
  "key12": "5obsmLzJ7SjVqdhcJiZME9nWbZVeEC4yAtJb6PfPKMzLHBAVTdVjv8y5SFXPPuRDDWtssHq71fRsUQL76cV1TseW",
  "key13": "GxnT5WWpCrxKdd1gxNHmpAMYfqJozzM899FwREnmgTfsm3LGYqViDCsennEQYyx6Rcatj6icFKZw9NzZBnu3stH",
  "key14": "2vqakwRVzk3qdch4i9dGGiGwmL9sBt12ntMjwTZLSN1cXHSJsF8NWxEz2jJzphdgf8iWfmXrmqEffoavaz7mffsW",
  "key15": "434UpQYr9gs5WFoU1p4jFx5APBQGcDy4C9xnzVXJ8tx2JejN6uxiFgoXYXFdV3oVwrxghTup8i7918Eb8xhSBFd2",
  "key16": "2DArvnLYfhZkFWa6HEfAfCMCA3zwButvg8bN5o5UVD2j4SLyNcB3dqfwMirtr85wvGbRJ4bXDUhAr3A3VHCQpoQ9",
  "key17": "5z4VYLhagF8tVDuXu34QaqqNP1BZVM2W3fcQDEZsjqM7dNPnZ4uzBuW1URijzivx6NmTiGwRR3MYYhxxbDG7P1G",
  "key18": "2n8ELUDVSPXALiHKGPkpJQESbVBCnd53xSThtdX3LifdQqBLPwM2vJqA5mHAHR8Zu34DchpXPTtgJhDvSFEsgi8D",
  "key19": "2jd2EXXCHjtzf89EaS91zeXKMvvpSow68WE97QDBzeZaEbxUYstkyqsg1aahjuAVsRcdDML61ZSJeLmP22ZmZK6g",
  "key20": "3xFCbwFEvnCL91B1KP9McZa2ZLZMwwa5XckmJxci5SnADDcmmGdC3GUChDNEoxnCwzfzFhKDTtH43PQr9grC2DcC",
  "key21": "4BpAKP6faJydWMGDUNZYjXfdC6AxfsCvF9Sftxtntkh2PpCwFoqyahUEUDywQsCMMrSThRbj2d5EKSTLsRUYEVvP",
  "key22": "ATbUpEECQPq2XWTNGyytm5JuwHi2NVdX8k6xR53pmZwZtcr26RyuzfMm5UEqPMiw9A8ACGuPVjUVmWuidA8UGaX",
  "key23": "4xsE6HsAGTF8vp4c2Rtz2ahCz934JmTbyJe1Z6TFP3vfu4UApvGdmQkJUjGVmqEtSdPZseGkhZZEKEJyHZFEPNb7",
  "key24": "4TzXnxLLoC8fHS968R59fwm8um7g8Svtecdf64LTFRUavMyvyt4JFKTxbXJQLGasoCJdQnaSjRduvoTWxNZdLtTP",
  "key25": "o83J2UP89nA4F8Vhz22zFMsBfcaMk89p5AkH12C4YPgHcRGvRFa8UEE6qnA2SgQ9xAKA35aDwigGTGTm6KUSanZ",
  "key26": "52zErorJJVAuqYokz2vPqJFrbaBZKcmcmES3u9T5n3fgHZE1fZFicRob2Fq3q7kGiYUhpic6YSj6KskEeYhTKqAo",
  "key27": "64boMBSeBfVgBUcUGMxDD79BCypAqCaJMQWwM1TEPn7gu9u9Z4mtnwF41iR4XHWUBi3Y1VkvGvEfKV6BDjEcZeP1",
  "key28": "2uB6bbFQQ7m96BVbTbz5qWuz5W6mvPEM8mzFfT6e1EeDDRQcGXnmV1rgKJyhqd4Mh5mAQRRkKVf4JQkAhfyRFSoc",
  "key29": "tV5H9gAZm3EBa2p45KbYHsWWEMs3cLBWr2HATJNkrHaUPvTrrPD3wfXzfmucxrnGVUmbyTx1Hyxq3L67twPNBnP",
  "key30": "41nn6vLq6KxDp5d7NDvUXDKBGhNoJmh17VXAw5GVb76Wj8QizmVRWfMa9wGBjBMb1xPBMZ7MEwcuJGZbcckY9u74",
  "key31": "3Qmn3uuha2WBaqwjhdeMEThnNg4Zv6rX5BKqjk7sNTbhsnUzDCivkgD1ZgizuAv3DPpXccf3aTvnMuHbhTsUtBwJ",
  "key32": "5YEbsa9k9K9Gi51XzZhuTvEcpscQGtf5QndYpQbqCKRR4ZtNohn8PzRAFX9S5B3N4xkcouF397ame4a5TjDwoPXQ",
  "key33": "5UVpMuPyzunWNHY3koAKivHHv6B96r5iqNjRFeW4rcKKHzdjEpS9AvZtmLM4HaYmoF73TVLciKuEhrPLJUwZtAjz",
  "key34": "boRnad3rSrFb6BjpFR8A2vzrkLCAZb74WFCR3hKqbkKRBs4gMZSQAtWdgvCXYiFQRKm3dugKxMbYawD3LG2aHgt",
  "key35": "yizsgh71Lzm3vmzNHbfEbAdZidj54Qc5sxnCDayba5Hs4UbEYhjKtLQsNRcGFbSdXoCMHuiebHJFj3RLSa3jcB7",
  "key36": "2Ng2ShDVsXaxApgkC2DyTAqQCCLzWN7d8HBqC1Y3DrUjWikVQF9UMge8mPVYgVyUZubYezbqNbHTHNXpfWQPvHp4",
  "key37": "3JQE67nGpxMhZXLEBzUHBTM26wpWE7HZmowdBZ4kKnvs7qicUDsPvcZAY9FCVkGBoPzC5f9K49QpP1kuCSuidt18"
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
