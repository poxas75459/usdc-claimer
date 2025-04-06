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
    "38WYC3pBYbQ1HBUZCiFNgTPn9SNd6chF1BEVpq2oVWdKKmYtHjhiGHXevAq7rsxXhauWZacuBvuD5RNnLXberzRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCQkxkpfsTWd1pikSKFmtE5RoHSb5iW8mRNNQJJcuouoR9kAJszCRbHCc7swi7T3dCLeTE31ByTR1pjhzdPmxCB",
  "key1": "5fvs6U7gMQLBjJz6HqPcXcu3qrKQBbiuSvRnMQ7eepiM5Y1pgXb6VMvNA5LXid6JrCF2GYEKfhKpK6FEPhzHzByk",
  "key2": "3hRK1kWmcL9MYGbjqYNCqAtniM7w4DWSDiZv7FxGfUzRsMNXiT7eJHXfhxydzWwvDaieJDPkWXi15NFX5E7ezZXw",
  "key3": "2ySB3QDVDB1da7uT6zYUX15aC9wgHQVxux5J2rGjXz4axhzb6fv3EVx1NEDp7R7iBssDkwgd8UKmxRoFpajLbe3V",
  "key4": "3YnaRTY7XrJRWz8Wf9SLJ5T2QifBraRHt97144tQ8irfGeVH4JhmdmwLN1EbYvvz48uuJALiEDsdvBGAJZkGAcAg",
  "key5": "ec1DDiPt4U743PmxTrsfkuZBPzgx1KUEntJohfMFZEYsdF67UDjuu4J7WBjJ7mCNruC9ynCSUUbPrjWq6XXp3Zg",
  "key6": "55gmppmQRMRgtsicLbUGAQrBw4dJgHP6MwB3c72yLSPRNWqmNe2xTAtNkeXNohSkAuVhhSCxwaACzmgborxQ573H",
  "key7": "Xrfp6tm6Hyd7ZpijGqvSDa828RmiGcRbjsp9N85X791D7bGZkAwPm2pcSaqoJYHLhxFCJuj7FXxtwpsQExMhXh5",
  "key8": "35z5VzVgqV71p3zHFNU35iQPPuaLv89zsw5wRjCqvyiFdBM8rwPPM1KZhfmDwcfmAUVLcT5WoG6JgMmVR9rZp5bh",
  "key9": "2wxTxuNsMJc6xNKSDUy3CKEwDvfVGPRrz5XMjvH8UmDzy19wHLtUADR5qwxSdkbZQFNinPFEf2cCNHpEs6hU4HqE",
  "key10": "3WpCpkF2y1HNyWkPwZFu9DYQn2ChzLfbGbyMfrK7Zgv3Eyxx2GZYVxoJAigBHpJaGmwkzjLxn2v9DSc1rQteShxg",
  "key11": "5mNQFich41DCTEQuC8S8cBQswRNiUa9WAw6Jz45J4kNQ5w8HYVSrC4Ey9EodNYgUKVfcsgKSenj484yLK5pGyPM4",
  "key12": "3vVtZ47CbaE55aBE382NN7934HKzwYnKMAWPuUZ8t6aC8bfRbi3PtjWBNNissUi3ow6zh42fgYYgTysThZmHCg8J",
  "key13": "5cj1MpDsbs2whc2DM3QQREGHroLTXFMKdkwYHnKr2YyedAHXgmhbH9jPZdCqfFYojqGNCyK4a34wftyJEiqYQ1pb",
  "key14": "4CWLnuPTjnxqHM1gRj1ABmbH5FwajN7gMx9YiqrfodLMLTpVbpWZWYDKFxHxaBHZbmzdJg2xuM8C6kfTKLh7QkTX",
  "key15": "3KPJdQkD3uLqYADf2gWddfuQKMokpWeBzDmn65aRRFjotkmVQTuacvbbzSyeb4rWBXkKykWBYAAUw3FZpwydFZBG",
  "key16": "58YjHkQg863xWAzb4popYDJWv9HFqYthxgPE8R5oam6coSYyvcgim44mmyQ1BM7XKjJRkxpf27HemP4KuCwWpjZ5",
  "key17": "3yCpUGpPEjmn6uh44ZDuaGjtTdDdQVWCkf6bUxxXiZUnoqQXANNBsxF8j3eyPzGenfXEFt4ezL3HHNeXsxPQ3Lbc",
  "key18": "39qxZ39kPu5Vf9XSwjUyqXKv4XRvMU7EfXjoh3pR6WLnepsqQjw53M4LEyi6sJxS1HUzJTZAYrhNsMo93Ws9bEL9",
  "key19": "ePnRwo8WHwgCTuSJgrPB6Rzk6pN3RuTqF58VXYR37jwzvbsuFXP6cF3b7qjNTv5etrjQbotp5E1vRxv9ahBcYJF",
  "key20": "31rXRQecHykxtc2Gke6ZbvFwar2WHRxor5rQSEFF33DrPsMwwL6JbyhUUrXhP2b1uhzBb7NbLMSRoDDAAsccB7rt",
  "key21": "3VUfT5bMeqD4Er9CnF5ztFyq4uDyCyxeEhR21mfUGs6xSH4SkbXNjkAnmqyS2rVRitExx8dktmpGWmrgowqpaaut",
  "key22": "5b4oNAnLV5LngJgoKqN8fPiVh6WaDoXwLC4KgSpdtcvupHnJH439onZTZ1G5K41eFztkiWQMRJPcbDmq6dMqzJTn",
  "key23": "3TdjCwEgRVN3YgKETqqh7VoR97mZViRLxDmpj18zMsnvhAtadkUT1op8EwJZ3im87zm7Mn9NQXTiKcvD8sEZK9Sa",
  "key24": "vWAtJFa7YKaby7oYHkK3b3vEpby3boWDqMFM97AYaw75UQyYAndMe6AZ4out2TAapLzF5wQKFNGhjDYyKjdQZ9Z",
  "key25": "5k7qMAgZcg5E2ds5ciR3iDGJVEPHn2xvk8oy1Y35rFfirtWL2bqoUzcbYBobRC41xiSk2p4sRiCWGz8wZJwmXkQM",
  "key26": "4pBrZrDZUYqFtxdzB1KQfR1jCdbV5XG9b7PCfid1VJVpvqjQha7Q3BNa8ekVNhj4SXuye58dCq6mEEDdR4DpzPr5",
  "key27": "56TMtrhz2VevtXgBTRUc7rQMjLSuq3UxACp3LpA9wdRPTnmabY9yPe7LUwDAbQjbPNgeXU7y1HnBhFCe8n2TdKim",
  "key28": "24MnKoso74WsuSb7m3BU9DEkcg41RHvL43XPtL1mNq9fhHdqUi5gXuhd9fm37NVjUebfZ5Q4TjjwogHeMBnpJqyj",
  "key29": "DZNsNrtS19VUCZeaA4hnNdcGrtGVEnvrZ3HD2peQUG2dodrkDegH6Ds77cR8Fhq76H9AZs1BJxqaPd6XtR92gAt",
  "key30": "2yDxoAAm3eiChLep9ih8V5Km2RzHXJ8HGDnSjYksL64dxwCTP44kQLSvDD9kBgwbTVvN4UravvNjR6reXSYXRWd7",
  "key31": "2Kg2zb1uifyZ6QCp9jMQP1jERkZPCeu2T9Hpvm7iwoksAFLHAWXppTSDaumVPaCGmJfrKeKjaB8uq3g3DkAT2y95",
  "key32": "5fyzpvPprdkcgs6jRGaUBtViroTn9pYdcCMg49jafAkfDzbUgAx2EqhA8pyj5K2fkTLB6RZZHcuktthgcYZf54AZ",
  "key33": "4z993tCpCP8eTwjL3e2L9T8gKiYkSTK9UNtxkEmizEVepaDTJxHhBc39s2Tq18oDYMJ4Jpst5T2wDHYQUZDoQYrg",
  "key34": "2bCq65GAjwXaaDDzU1RUgPMSfYjxRiMG3Kfzzvr5fLvcd4UWSdS6Z3BSEXh51fHT4TJZPmj7kceR9BWUQXhw6wrr",
  "key35": "5iV3U2z2cc7YEXE1Gq2k8wLhUqzCE4S4okyLD4XLR9fDExoftFjejjv2EPoBm1BBaY1H2jtvartw4LpxmtsByUqU",
  "key36": "5yJrUAwPLC3QRb7ViVEZqKWEi9VWFN1FED8h6YJ1Sjd7B1gNNQhGWb38HJ31Ye6ECa8qhRMjPeXphWt6HbZUzDiw",
  "key37": "2DRVmEDManfNut8J1PZv8vXJbaMGChDDeWsdRFhkDh676EG4rL21vbMaqD3K3iMTShnaQsh89kaHXVrxXiZDXaMw",
  "key38": "5WtAwVoNnUsh83ywjszGnRZNfLAHHgb3f8fD1tuEgBim3A6woxr14Q1SDnhzE1azEks3HAoN9ogodxGfWHBSpQd6",
  "key39": "54yJrdjk3eEGT4BXjUfHnH2Q9FCXYpSyUktAEB9z8JUZbRQkpF7bJPPGQ94avLEsWrbxZjjHYcCUvtvWSpGctqcM",
  "key40": "5dT2pj7DFcbav7y9MZ1Vp4pbyUS2RYE2QyYuwjQx9yFbwQAL1qiPDHMdwCfozmQXZ4cC2Rfoyms6DtxP6xxfuucV",
  "key41": "5Pk3T92E4PWKuHjxq8nnBpy6t39siCQKiWGpFaTtx2TfJRpJHbjcHNNmChuxUi4jFYhoZR6tooeNbx9rXN4SrL7g",
  "key42": "2KoeNmap55f5AninxrdrTk4nhmmMPddR9Zwvoy5ggV6rCPT9nFMfuhyk6LVWK1cprjWRGCGmknrUveKBM6JXpmTn",
  "key43": "5HNpFrf8GKV8eWAek21LQ58sGG3uKatXji8Xu3BjaJv36iKsoTfTwykydJbMZEqWrookVCiBP3NcZVGcXaegdSR4",
  "key44": "FfmzQj88L4YP9AGr8m6S3VhGfxUWy1RedCXpSYrS8Z1rRCKtymfMhQSMtTghRYZin599B5FVKhaoKMsbdfC6NTf",
  "key45": "5sGDMLCxmtpTg4A7uQoyneBJjK6C4JHiUqfnHJqskb3NPt8fEktne9aHc7QfkhN48mUnHp7oxn5gtgYNchEZTynH",
  "key46": "CJKQYrwUo8A6pPzAJRrRML3kXhv9RarYiVhs5GPuzguBt7yuq4NDSkkUYccz1LutzYmy7aLCJ7fHsMa3F8GBUKH",
  "key47": "2CoEuBuMkxLiFRvM8ioXQQUdPczw74nVbBYsfXeXXR98qpb1TwKYMr14XFWLYySDWqiiBPEfX3cu5pbECMyQoUoA",
  "key48": "5RXKRSz9MTwibPeAujecbjR7N7BTnU5Gnn43LcwXbxPng43NhjKaBqouVdwVNezwH5DCL133vKccF5sHAq6qJizY"
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
