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
    "GKk9zvyiY7hBwfq6dDDLLx6hSe5sh1H3JxpicLusLrQR4x6kn6sCEky2K6zkqzCTKZdWrAhfoPXXUmLDV155V5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Cs6W5MQLh9ycaV2gpnaqgytaMe7xGTnnoGF3WhDmSCXY9TBNZPqYF5ywiprdPgT1Siqhir6kkmiRg9f5TTWYbT",
  "key1": "oGL5LrRKWPEYQbixMLg19KrCmSjCXj2q26nf43G2M7aPs7g2JaQU9c7SG2uhxmUJpk5bG3TGqrgWyzi3pCsQQht",
  "key2": "5Vo4WPPA857dDakbNNYH6Um15sBqeB91AgnRAHFE5YeZqykNA9qdTPgRYHhewaCXtMyufiEgDRScjNmZKbuzfsBa",
  "key3": "2fTKVzqr3yG2JwFiPo1RcBoo59sAzgnte8cnF8MZxWJaFs2u86NRAuszzbCa8nAQJK9aZtRe7FXTGUdC8Zh94LSL",
  "key4": "2aJbmFcG7W139hcShBeLJFfa12oG1CoCBRz2MgWqTiW1W69Auc9ucjK2umshiqqspWjftfLhoskdV7x9mQYeAT6M",
  "key5": "36Z6DsadFNKzSfSiy4uGAuLGB7rSjqDmZ8Fpczm67XKdorp7udKaFaqV2XHs5QGssVfzqHyzrkdCK536LhpQebWo",
  "key6": "uV5xrszKbExieVaEtDwNitvMxNbjPs8aT8nZYV76arFCkTHspBfZ7ZYT4QtAoCadpLkAyxpSbJ4cGrpDjrKiJy6",
  "key7": "NY9v52X4dR9Je4dXuJTKv2Jg1GjjbZtBJycFwVABoKxMiiN6zRMVZnaxpxLTMtcPYWsVY3AuyHidZuvZGWunUuX",
  "key8": "2NnST4iStKSUY8zDaEX2LQfyFHBQ4wS1FYiV1JD3jNgJQPHGgiiv1EECYfD8fU35jNVxWUjHz1p4VDAHXf2Ntt83",
  "key9": "4eeMCsntEoTH2Q5DvN7ZgnxHwnJnxULJHkCcyAJrnGCwMbrVXTroScbvwzcYWHdGuh1DpVzsFLCPgLnL5eCHahEP",
  "key10": "3eeks7zvWd1YrSALxXjexVmgYsyLv7vuEvSQVPyDBx7DmqhzufjVBvTqaGHx7oaLPteGzkbjcnYcrJ2qH5xXasT7",
  "key11": "jnrXUBmoFKEt4pSmSuZPe83CyBRwvXPDJQt3xfkHr1v6V373wCG5FEeaampNw6xyXuCJVRXaKhCWoy1QF85Cu5f",
  "key12": "4DqqvGCqq3mxKMhLQsDxNvjTKcG46rWqoQ4EKqL1PQHuAHQ2TYXUtXiXULTtJJa7PrCJTRCDSGd9Hz4cUyBgxupV",
  "key13": "C8jiwL9WPFvrJBEiZXfC39uZJddyCx8fq4Bsn8HpgqZ1nBUHVYk5Vcpy4jrrMsvuvZCXS4W8oQdaMJHjtzCYyxm",
  "key14": "3drt8FbuJVVB75JXtZW8B6rS65337fZjFyYdmwovjE5HhQt6ei9gPR4FbeKxi9po9Amd6AKddsTRAuzbPpQQ9u67",
  "key15": "5DykcrfguSudd6pQkALDPnTs1XpNSyp78wKGmsf2Cv8jLfta6dHiyzn87dmax6ts1nANsmG56xfrPTmXraQ9QtGJ",
  "key16": "3pN8eAWsuB4p3ZPeywbN66KoXZHcvAgsfJxdkCJusmRHnSttrBmAscS5gu1Ru8X5UhnwWUiTQfx4YvqWin8Y9PoW",
  "key17": "bJRLpiGdoYcYhcKfnzwwqSjvQbfpArSNw8hieEdvPQsXevTUs1i3xnjfb3QvjdehESY7cCgmqqKctPWsmVX2ZwK",
  "key18": "2m4BeM2aHF9fRPHcXcUgd7y4M5CEvarMa8mJ7UFhwPDb1TSPGbEYFnBYVB4UU4aDKuYynY5KiKNCCVwUXndWo4B4",
  "key19": "63uMeGs4WKRxjg7ijumxEzHnfPw7RwDLChiJmbihAQctnR5cMJmcj2KuYSRotgJtteMoWcCcBmZcBa6e5ZURK4FJ",
  "key20": "p4weFA8AZ66faWDVkhZLdFVqQd8ic3dEbsHjjVK2RdwUxvySS2s1o34JMZCZ36UE3nsvgtY5dNcuefM6jYwxk72",
  "key21": "4gtNAy8EwcdfZwu1tkKPtR1DmN2iMmuTsHLryYubhLuy4XXpyf7opiLMSKW7yGyWTSbQTn8iu2V61SGB1JnnSo61",
  "key22": "5s3Et91dipwb6y5FtrQZmCZiqGXHkcNTToJwMPdhoC1KUeLfoEpuhpavwGs3CvtazJFqBvuJvRJvMGwHBejRmr7o",
  "key23": "57mDon6qhczMe64ERYiNUgQr5AEHPXPUmFCEMnfHuxfrf36tuZkyLby2p4EqXFYBzj2pgLj5Ybyia4zvdhukH748",
  "key24": "3pZjC89kdh72FGGXo2ussEpnSVU2py84bSpKy4BJEkTT4ei4pe5vxB2aJucJLBdcZCF1ErnTehy8CphWAmpzBMrj",
  "key25": "YLDQrb6PS2RzngB2UjdLSoDvSuN2aKq4ben67SMFAmBh43ov7WNyrDNa62Q1yCHqaNV8nXkAdgnuYnrhJD4qnhy",
  "key26": "2XHTAULQfHaAHQK9nQVHH7Wi9B3Voa5uKHoD5iJoiSzpQAAUPs6iQVo6rcbGu967sk98R9uqseMvHTRkspwCACvr",
  "key27": "2bVVzeMrTh41wCyAm5GxUB6wgkuj3EnXSSKF7oGB1qjP7mFGiNrvCw244JsJwXSa39gnBU7VoGPmDqcqUiVq4WKR",
  "key28": "4tfjhGwD4nVkpDD2syMfXB538aDRJBHrX5soC97RzVpJUE2ytsU3zbzMg1BDawmb2ZjG87w9bmhBPyUX4gNmBoGD",
  "key29": "2JSL84qkoynrKpfeXni8P2MP9x9RoNDUN5anaAnGRs2AgWMCNb1ySRxiFK6zC8zKTsbQHniq7s7aT2ujjEZ7hKDN",
  "key30": "5P4TA4A2LkJfhDFaJJa5NKmW2EiRZmyJFrpoCCaFXuVWapqCKyxQkSMDeNBA2P3QFKfxpKten7WUmMv2myGk84WW",
  "key31": "5rbc6gjjCFHYxWh7qMr5Yw7kmrY3ypEcjhuQxjQa6WCkfXT22xsZoo8qoFYtVZhWFgK9u3tRhBRsxYjC3pjdKhtz"
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
