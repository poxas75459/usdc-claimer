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
    "2jh2rz3odcFW1xNCJTSML613qY653m77N2WG6hdYoBBtSMnomfCU8VnqvcUQCjquEbj1ka6Xu7w91BzMUFvnGgqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzCw3v89xpr4NFULAJSa747m7Gb1FDc1Ckd6u9WCFnBz7Sh4DdCmXoPptjHW53uKAMinHx9ja1nbYe6hQsJossr",
  "key1": "4Mzq3uELkPEPDRZdiwW6ZyNft6YsqyJazVVp459RadRv46cJ9LAfUZQnKX5xBA72UKdpR1u44EuiCFFC2H8GZHBW",
  "key2": "3fFnWXqVJpFLkD7cakZGxgAUuGwiQFw4g7D9DX6VavtNdptn7BtrdFco946GssRjBe1fEKKTRwuJSj9w4a8MSfLy",
  "key3": "28PEmfitEEkrvSrKkDCf61sQa2qG4EpxtDgWv97BehJLWf1vSVfouSJthXjJhAW7MSJK9vPBBMuJ1aTy4mfCmcay",
  "key4": "XgNXqRiz5i5N37kefbgZSwpSDrLFEofw789N2TqDmV6PFnBTVh9m22vMzmCUbCS2Y1MK8sQo7cmVkbPWKwZSq3w",
  "key5": "35Qmgr14yEzLQ5Q1DbLdFWLWSkppnBo4bikQhH3vLqTqzivAKbXskCQwvjUJDdqcLCy2vt1uVREi5QvPFtaGnAJf",
  "key6": "5FksHSVEG6ensDiU2cGFnay7U2EJmUFDxxNzsxVDWxd8U2r1mdhiWce8J4mE8WmUe19uCZuLMDzCYMdgo6biYLme",
  "key7": "5ub9AcD9qhGBztUX9VMEFSvLij3T6G17GcGLU1MAxBczWWBatKYNJnuz134rwhhHV31fLPHyi5wGrEDoCcjSun78",
  "key8": "5Gd9VJn8xECjqb5hZ71HFi7HBb8Pqz8A8f7Qs12pTTkn211psXDy9wushGcmunuk9NVxuD3e5euXMFx8wbpBdy4x",
  "key9": "2QTVLxZcQFk2JmhJkh54rYwULpVXVJ4vvRzJA2SVDimQXeJNsLMBXdj8e3YjPibHKywFpsKiVTrFpNzW5pCyN3x3",
  "key10": "32ZcXX6CsnoUEYZJpLW5JPTTGEGq8K74LvAFUirZWNuCbTnDjGQCRw2Qrxy4i6RnHN53eFad6Nf7scvEWGKLy6qx",
  "key11": "38GXtmyoso9YQCdv2kKPXr7fXwPLHvg95T2UHePi6JgJNDCfSaQ81sBUUC9PT12jbxWXh7JWw2fRtLWyeYqnKTaK",
  "key12": "chroEQC3DmRSA2F1xqe6uecaDin7Ka4CikvBHcX4uZEYbAE4gVYwZzqccqspUByQpq7GSjASMJCKVQMbqKQc17C",
  "key13": "zry15H3YG3NWJSyLqtGHrJ4nA7vBTWAiHAnZ76x8Sv3K1zPxSerSWndEJkexXuK1LNRLYn9muJejVVB6EyAEzSL",
  "key14": "5urQumopMpQahpmCFFS9Cjbbk34xWn9rAAJa7o5MuVsvNzKE7JLy9qG6LKkgmXUYxvFcGCHdfUiT6ucWudjoJ5KR",
  "key15": "5PugPtGDb1SFNe3KUMtSxabeCf7o5KHB8VZkXJjBhNPFWLfYSdwKibMSM8U4DBD49NxPoAuCsUZdo4if8pSSJJ7Y",
  "key16": "5kLLKitpt2eKTTdPVeTQD9zLKr7sHzzrvks4HPmZdSRM8gus24Z5MoEjoxYWxJNGPeGGBCZrtjSLwFbhyGftVyDK",
  "key17": "23cb217P4z6XXGGsGVo8Dx1f9MgCMSJMLpqTfAh5qkQ1JCX2VSJcErEFEwE5sBFeTEKtzgzfBA4snX6RMLUoqPsn",
  "key18": "3UfwWsjzvoxFDz1aLeNkbdB9c1xFFuQ58pTRGduQ5crDogWVYJzaYx73Uyu9fVYH3ygeWHDari9gbwoYk8MEcbYD",
  "key19": "34S1vhQnLVdciJR8WJQtZXohrXc7oQnyoXKUmaedX5MTNMcLhxGLMTCDQ2JZBAiHSCC221kCoqfvrK3mDaH4UfqL",
  "key20": "3NBNuuQw8JtzBs56wJoQFwc6EiQfw7EQiErC9RzQoJSFaCCbdcVXP7koDbkyKBKRhqUYtG18nLmfEh7hxq3gq4k9",
  "key21": "2anK4e4UiY59Wm5WGgvMPDDaUE8H633VEgTEXW2y5VuxrjHzoWuFiAH79pRnjMH9245uFywq8wZgrvsm9ceo7ZkV",
  "key22": "5eUxdBR17S96oH1N2dgEDFqdncdt7mdKSzEBCwRgVL7X6MfazgcugBfYh6tx5dvKJmG5QuU4BgPdmwPMWUVw5vNR",
  "key23": "4taKsiCaxuSGYrHfi2kvqKxrGD8BGwRzR5yif9QAhxMkpiVfwgtSyydmERtrabv4arnKBeukVQyQ1Arp8JfBaEVE",
  "key24": "2f2YLrjDaoBgbTmoUfq7Ye8BMJTeUNokd4RDRgf2EAaRkyVBw8DnU8PevvwQGitLibHBScZJzvexE5f3tbTGMat",
  "key25": "2XdqGqtq9jSdNGQSYuXcnUXGTsZPF4GWZes5LvUDfsHXS9xo38sh4vs3EV86LU2SrWRd3hMWUZ87P8GuqqUeEnmv",
  "key26": "GzraoVv7bmTUQrmpmddvCov8N5LgbqxThcHxGWttB4iuJ26NRjpFRGtsnD5T1TiKFrk5TVcvM5bUBmNVA2fdVQ8",
  "key27": "5CP6q8kJNHppkiUDnxdfC9Za67Ln8mxRVNiyM2XCwW3YCexAXUyhkGD8c1tx4EDcydbjnwf3CFYmRcUTDjcNH3tf",
  "key28": "2PjH9PyXHkeGyENrWvw8VfcQuaVc1nwJi2DPyduuAhBzmiX8LbVpU1GNYQ3XmDo71UAueqRe9p7mrGCn4JSJJHdC",
  "key29": "5CirZcByUVjchBjs68KST7221NNVue8TxAuXSV5HZJKAvD8RYgq35VUVWf4iGccAyuaNKApFPxRgNLVCLMcPWgbg",
  "key30": "5WfRxhV1bFV3x7j21TfSS5vKyWotuVGEc6aQNgPvMETmfxV1JvP6WKtmEkvZhGtLjfR3MpHAmwaxAhtxvczSqQam",
  "key31": "4HJ6AH8UFZQfBXfjk65SBCHBjdq8TLpwxoSmocDuXF7uUCrE5H3kVEJg1TzapBibBdRJEbteR9LAdiDBTy4Rj1Hk",
  "key32": "3oarmvP1xAfEtaK9Zbrt4d5e9Zk2PF6KufE9LenPJhU9k9jG2D4V2r6mHTpze5iCy6o5ka9gBo959jyawgsuA8QA",
  "key33": "afM9EgEtX8TRQceH3b5k24SLZw7tADw3EUKFHMdW9bMy7TEaqVXutTrvTfiqMe1Y2edAqyJG4wsf7DM1GCbwRuE",
  "key34": "5Hc5xFeoAjjYHSG96W29DSVchV5kXh1otTCvZjzHnmyzW3vdfdHk4RRnUjsZX7Jj2EpKNqCBU6Q9JGimgRdenxZk",
  "key35": "4D6tGfhRLzheGM4NS2jrKEnvgfJ4dqgM1QizsQREF1uJkFAtRPajdNj1Vp9MQxFAvyBbSR1xGbKhgAKieEFj6oKT",
  "key36": "2VExVGdL2AiJyJEreRYQWfJkeE54kpfWGNJNUygBYVfJhsrsN41yyTvNp9pFY8swYweQ2yoKmZuNstqGzEttcJjE",
  "key37": "3nMcQ4ttv3rbkESS2burrKKFRG5M1o7ScmvGCbGsCqFJ1Hys9MpAdzyuxcXZAZccMrkrC6CVwR1Cf9a34YUGGrNe"
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
