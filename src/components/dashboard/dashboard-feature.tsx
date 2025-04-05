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
    "4YAWS2Uh1TVbyGcWxJBEu5ayc1YdES62eh741YK9JGvWgzPugpSPA4Q2PvrAuzXTySCDdgSFi4perw9f9phhJAcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xxb8tV3vS9XG1iZAWkEJ8d2juYsn9sqDTohoH8v67SVESyp2wo1UpD4FQ2riqkcVMPCA7Edy1WYkjujb9PwdwLb",
  "key1": "QvZqmGADKUGbFMAw46bbLegJ8JYVCyvTuc8686HxX4p3Vs28ySiLgj97aYeAErbegfJ563MzcnCs3QNmdh9DHsJ",
  "key2": "4yghBqjJtbV8pXdttnRAuMU7u3X1A9Jkts7YPPAz1hyUhqGP4mAQ9qoNyYsL9QCWiXHw4NvJrS7jV8YRWwdDneWK",
  "key3": "2n7QoaNkEc5z8Y4ukTZaatnPyyEWNmxZQaWRUqhGkcceymH5o4r4e9FeigAYydAWohDXtX3SoXWoifrXeTXvytpc",
  "key4": "Z5ddFgCtgkqFvmAaLRmjTUYgtARGXc5PKJv65m2HwZrdygDQ5zMpsbU8HZherrt7iWWhZr1LsTu7dcyyLHodjSq",
  "key5": "37hQNin7rB2cNnKfxK19BmmCzwDGkSotnNFBRn2v7GiXCCKZWL2KwJNUPHoDGkgST9ibgRZX1ma1cqiDhJPcTDUq",
  "key6": "31KBQvyFcYkxkvuiZL4mKMvT4HCDYz1P1rqCSXk71jXGYoEpAuFxNNTAn5SwGL9tjNhjUYDUdDVj3xYa3RjSq8xf",
  "key7": "4FBEUrnDTt9rgEm2ZWj8jor46W5A4mk5xrHoE6MGXbyYmNE5vcs3o2FX2A3MdL6kFv2xAQv4edUv4ebiYW7ycHSj",
  "key8": "5EeutwPmJ65dtgsSpvuoQRPqV2xsmjwA8UJe7zVaRy1z3cDEb1DGSMup7mYTEyPhNifJTsRWdx2x4ahBWSen8YmX",
  "key9": "22CV6F7WLustu87RmzRJCwW4HreVGUw5ecX8chYVbpWnED1KNQtnU8HENRKerrHw2NMo1PPMqBufcTZvCEmVVo7U",
  "key10": "2CaNQVGEsHTF5g32ee5PnCV7vGXRhxG93Wx6saNnYkbmhhi49nuggyrWovRL6wDdyCUQa1i6rdYUxy7pUK6xU7vb",
  "key11": "fEs7fUnnpJbPxEvjmsriqqsNenmvteSZ1QoqX9BUF86eQD62pnf1wJdj24DubygiGzR2Qgiizp9m9gu9ujisnYR",
  "key12": "5Xrk2xP3A7NnyZJn137jzmkcLMuJayv3XAvJDL6mtpqdStp4rBMgZPvQU8V6Ne1MxTxow7tBCU2NC3MG4hLQ7rb3",
  "key13": "2a4FjJzAQLexkoZreDXiRa3oRKCzGrwNDgAjrDMJgUk2f5iRnMV1gzhWNgNoYwKi8Vi4JGKiWqJF1nGCg3B3pj5m",
  "key14": "238cyeN79bTvzfAnWuQFmgz7AfRTCrMaoPCwiHv4UN7FzWhWzJt9nTofknbFgHagXVUBGzhrsi1XFnHavJZweHdz",
  "key15": "2xcpQXtcCTCRVzKPUnKfEWUB8kpegdfJ36s6SgK8sZCGB8Y2ybjYXrvGH7SGwUKrVQ5DGu8dH5G2UtNjk2naMzBm",
  "key16": "4fKqr1BzWJ6NKjNgfr12iwPrt2tW9osSxzYoyS5RHqfwDi8jYWEm6F9NHWfEYUHdFJgJvXSW2sXNxM6E1x45xPS1",
  "key17": "3qYJYcimJdQ4MMHYCuhUFiw3ncfFLnL2f3B5MNAwYLsgmHCDH3UvD6JNTvniXq8N8tDHMSFVymg3XcZYGppMuoG2",
  "key18": "5nvU5tpU9d2sop48DvJgpJASoaxFo6QUeq55vGpzkr6GSu2YAW6MHC1FWJKrnkbhAH6DXjQMTuQWEMNbfBPxPAXF",
  "key19": "59wVQRDPWH1zGHyhzxUdd5gQ1Tzn16UEmVPLwgtDk9q3SUST7mGQ6k4QkbeQZjF1ALThFjg1WPmaaAMBiNRqYoQf",
  "key20": "26vJPcdeb3CmAHCaT2kfUgAMeqdV31Wfe3zin3fU7Py1bg1sCBCXhsHFeECJPCFjCq9PCLDyQePNDpstBJtRxgGr",
  "key21": "xFrcQFWTgwqkW3uBVMGWGxgMtG6wEZmXUY9jPBNKumrBwj18dN5jN43p2iHZFkSR1RLyT9TtVA7iejEaJgt2dYV",
  "key22": "A3RjjJrd5BhtGdtP2K6ducQaXjXeDcHrF1C41jrFGCvsFsmKoLW8MkQUyd9JcCswDf4EbrnLVh2snkhtPVobcZL",
  "key23": "2EY4S9rbZ5C4yGP4S2eWcKAaRgc65NrV63A5TigmGk3fLEMsPrhzLYiGqnvrt9T2ZkBmsaR4cTeSuPcJot4RP8CS",
  "key24": "5JCA266gD4SUkZoS97YxD255euCV7w9FDtAyJxxdSbGGGvXiRu963t3pujGvcddgJjHhnnXaQQhcbqjE1oBpDk8U",
  "key25": "3227tTnLwbXgeUGfQneQ5XfNSvx7sYjQb5oq91UTtGyy8zaavaN7DCc5WcrX7B3MN5G64ccwY5QVJnAuB1VV8eWA",
  "key26": "4n7Vx22LzC7PkgVqDYDj5KizrdmEhc9ahaDwg5HQxrvCjf7y4fwFzmuGD5eA3Cia5fZAHpQrW7D6UmfzjFGUw4Mz",
  "key27": "nkpeKYEa6BSXfU8eKvJUdzEVVqt4HEFFEfhrVaeuoq3qZgAhEQf8zbujcPgU22Btg6NAcUmLNeF8mgVKMzMDNha",
  "key28": "5h8UNCtYB2AhkZks8BcPV7U1BAwYt5fwGQ9dfcQ9G7N7upQpmYYSDDZgm2rp4WHznaHj6gC4NgFXwszJgQPAWgLV",
  "key29": "4Gjew3abyyUp5Mw5Q7kqZ5A2vbmNvtEgPBGrhctTmaUP1qruqRPC9TkfSPt9ZBhpQmNPyQ1oiEH4FeFdNTUbcPWe",
  "key30": "3uWExhtMdjeSHru8JrR11wDwV7YJhw8gMKQtbtvJMysxuXYjtJ9FfazBSZrrw4AAzfNQ7EMLFMBgST9yj9ox5yt",
  "key31": "5HW53kDrXj1GyoDmDaoMrTNbXgDsSyrxX79eAVwYxMqeYWZJosM898dMt5apNwzfkCJrjFRQd8TTLL96WXVCh2Xh",
  "key32": "3yJHNMvvg4WubHksNgUkFmURsBeck3sJwvB3SpAnDVdLnPvvcKee9jxXyiWahL8tH5vwh7gEhE9TPA3MdsTrjTNV",
  "key33": "4zkMd6RD8WZPksn6z3iMtGP7km2cUmLz7RbaozNqrpjQQ264Sg8Yhs7eRkH7fBYBtmVzX4mtCZWykge6JWVkU4yF",
  "key34": "2yZ8hVf751STsoheKq7bPvqZDBDS98LKzXJ8Sfi5zu2GFEQnfAAkaZ6mbUHN47K3kDXaV9Pqfhtcghwo25uYmE7A",
  "key35": "4o6BkqdtRiNawYhUekm3MTMF6ipc7SDcoLyDsYzxKnTjthP8vc6oPxdgTfqQJ6FXnn5EWWzUr5rpaJD4RcCKLy9B",
  "key36": "5CXGUFFX2jgZqt6fznuHgKyuVVrsjXGix2Wv6gny4ZXowKmtmhMS2JmkFkHEtxRZWdLxG9Eo6DDEphq5vYdAPsjm",
  "key37": "563ZM3YXNriK9bYdVH2WSAUekYjrg12Lo4gC7Wy6PwNwDjY5SCftx2nXVkJZm74bvMp3UWoM4UnEcHrL3Z7URnBE",
  "key38": "2DL4Cu8vd4ZSxsVFaA9himWyaQWQcswb5gxwwqpkDJyFDZXU5FZ7XcQtvb3CibVmC5W5aN84AnkHJheYPxSX1o3W",
  "key39": "2BcjETk9rMvA1vvs9g8vDHdpGPyKdGUSJxFWqR3QDjYoRc5gE1XRfVrahBMp1AKUa6duzxn5j4WEjmCtHu3hMKJ9",
  "key40": "48KJBRLjffHaghH1ZGjykecjW3i66CG1SEQ4wKFQddm77uHjRexXSnQLztkb5XKuymzrdXqSbpJR735FDrZn7SaZ",
  "key41": "3TU44Voo5curmojxAsu3ZySS7hJYyzE5zuU7prJUAmbP98CGxhxrYwaZqeEjEUMdUXFRUKZPqy9sezJjHnzwpztA",
  "key42": "4A1S8yQtixRCRhe6xQ7j3KtdbY78ziVuA6qAg3ZUjco749Fnv5gjbHM7n3Qb4TzQrrpyxeLbvWFzayX6K6xGj7Zm",
  "key43": "4vCMendMuycbHm5g53wuQB4RYxbGJ5EctVcjcVw6Drauvpbt7WBC9QoDH2JrC739gmsPxDxpmR96AU3HNrqxYNfk",
  "key44": "4dWR71fscMcnBq5kYRtqMPJR88tqA21qx6cBrK3ZmKFtPsBCCdFBbeM47qTVYAGKaaxev1xr3epQoC9eeUnRCkRW",
  "key45": "2wt4FYdpsntAmXohL5QhcMA7SeszJMRFPQZT8UMucR2qmw24a4HQvLiV2v8C9k42k4GwatyWcYScKsN2jMmiSDBy",
  "key46": "YGvzcvA6z5Yf8m3LWrb9YVFK8faTHBZg3bWFRtb8EWmvHsFYGD2md4ccx7JqCCk1GjvNrcBoN1GH87FwcsXnJ6q"
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
