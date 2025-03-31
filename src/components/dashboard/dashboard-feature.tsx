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
    "632zomhTrNJnrqinrchvAv7mg2GxuVhVNPDuiPAAv13YipaRhRTQMJGQdgWuF2FjAZtUsSW3VWQHbsH86AXSVdrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1eC2R92uzc9vsP89GJomhHMqc542bsGZQmsCxmrbELHQfYZuZc8eN1gTQV3mVb3QPeckW15qVaUDSLuEnPMGAE",
  "key1": "5sq7LNj5A8m2YUxjhWFvtkoLZV1QdV36an3Z7M1HHCjyGzzHhCisrPHKaxiwuZApCnybj7y4HMNWTLaUGmqC5mbk",
  "key2": "3pobz19GwPhusWtgVZGPcc56MZZaqn5gaXpCkwNpFxZiWB2V557pLWqWW1EUQ4Dv2tU8npyGkQTTJVzYuMGeSUGr",
  "key3": "3quGjDznXKB1gZF6EoyjV5TYyuQGb1deQDYM4Nu5uTtjMsYf7yuEks1GgW2PdVGUFiGk1zXU9f8ht8KQRnuVUYcD",
  "key4": "5sivjDN3qudrdAsVQPBcE5iF1QBTo1jh4NUDeegGhcgSWgzjt7FUqasNiRHBkozmvF15L8k8aRW9fxQUuvRcZ9ey",
  "key5": "airqyAgUkdAR9VjKF2qhZuAWkSF1GFvsQmtyTrpyUXbpSfPyst4Xt8Y8qyYLtvVpDxgBGvhZVtzeFWaWJK2Xdni",
  "key6": "656DeP1CigrKu3DjzLDpEzAQydgxV33Jj9yfV2bz6gErtzQRvHV48L3HnATbhNoF8eaDnEGSaaN1RJNPk4Ac8CKr",
  "key7": "5YbYuhym44p8nt66zLm1KcGg7MUkK2DKGCMJErWSRuMw8B9bNqwEG5ERrm1qmW3d1ME9cJifgb6HbuGdwLkrRG6e",
  "key8": "2CbaD3AHdhceBbAiSy9h6cziNK42LVkZdaNAAtPchJF4P4SyCgr6Egwfrwc8gPzzsJm2ZU2Hk8pZuAow8LRmoMVn",
  "key9": "5T998dKMbEh8HpmoCmxYMJx8BcSn87rKRpn5MDRkzyfM3v6XvW4BAkAfwzzXsBAzSqxNwwjXnhouWwUYJ5QpyUeJ",
  "key10": "2vogGNKuRMhmwtNE5Emtr9iSMjKHZb6NfVT4RVzYTHHE2gcQ6suh7NmyUyFTbsiq5wyqbjjPQacXUjDqj4o7uKsU",
  "key11": "26fPmZRWZ7cGHjS4Rei5ocgJfs2B32ViL6ZrbhmwD7MQksYeb4g3AF7fAoSUUdd1akTehsjtMKBoDYFg7HPfxqY8",
  "key12": "cqR6hKoqnBvwSYmfYqzSAhMyuSmZ69XT8gDMvkkTPSEo35myNGeH6qsgPypWpQKScQZcRGYLiw4hNiawpKUQvN5",
  "key13": "5DsYXwnqZn49e2JBbGi7F1dmQso6AZucGTE9z63neyb8Xo4sw25nMkZZfDm84PDHruCNxbmu7wha5RCz8vmcJqRu",
  "key14": "3kRQBcfdb7thqMMCJURi6sYdLDZpKYmGZQrBRMMgqMQyXZWjHKSzYTie3PB8uTCoNtRPvjtNNRNQfLPbDVc3zw2A",
  "key15": "2rTSaRZpFrBhBSHG2jUyKMoV97aBkdJfaMPibq9ugzzzpMo3YgK4NuNJ1LwHFZjv1wkMesAzDTC6LcacdvdfWkmJ",
  "key16": "5RWGoP55dyEWAE1Q3BYrecXJshGJDXxonq5ABWggXqco4QzpaK4LvA6aLJWWqmrCEPWnBuXnXQVQMFk3uEwfZKh1",
  "key17": "63NXvM1uxnoxNQeu4DbupHzXnF8ePuiHwngzHWR4LQtNPTFcMokREunWLnS4Hxbb2eECQvWGTcxwASngXsVCv6Ze",
  "key18": "372pow63B1WAbdFD7mWU54iJMTxEupLJQvNcyX3ppnvnqC2Pxrau6Y9HFCyDzDpmTkmet2Au8sUkEUA8niY1mTUL",
  "key19": "4TgwP2FBDXhNBDyZVuAa8ENiJn2bxwRmtHweN78rRVhTjM5ukHUr8GouqAv1QNy1BB3eXGAzKMBDqVZSoN5jSJMP",
  "key20": "4exkVWST43kDBZVBjXm9N3bZ7XsGpXhFDVcPbzdmmqjFKSVgYvGyx4J7Cgmcu2BfsMAvDDWGghMbM8czN12DQrF5",
  "key21": "5KbF229re4mJVqyTLnw3iKCg6ucuFVKR28wN7GKKradpGd4XucqPH6VxW242xApDcYoCFfG7PCXtArUxDSvSG1yv",
  "key22": "3uurGZZYFofMetbycWz6CzRmxsm4u1WA3Hfsn8JAiwtBgnZuEC6Wf6CLvvnUQC4NHGeen5Ajcw456VoZtrNmzuCa",
  "key23": "3nEjJdzNVokanugzUwwTZyayFFbeNd72kAx31pF5XkfCrrGpBf4ehKCac184MqYs3dbSJ2Edzwmn5m1uJYEHDxYo",
  "key24": "4RSejAJZZuqTCGN3RYVDQCo9EUqYnCEkTjxeevjN4DcJrusv2q1NSaGF7NN3NViM6StPAeDiJGVWFgV64uspEsXr",
  "key25": "5Er5WyPLb23Hf5HBt3KjyqdL6Ta9hzXfo49hk9Xw7U2yMqRv1fZRGq5URiKJwaosCKdD7ENUqFwETWVrYZUwzYs6",
  "key26": "5jhRwaK1v7Ez5C23s4JUYRit7n15ntdgKwHMrf7LAKD6Tf8CnMPjwqfXEc7SLATxCcRZ2tVWiPHc54cP4DY3K3gc",
  "key27": "2QqDdgunbk3ZnLGKRnZS4yBqgAAK7k4tzxrS1iv1zDEVj2udksC5w4pXYPuwSZ7zR4RXD1TMy7hGPNowT2ZVFh2Z",
  "key28": "nMvvohLkyhzJeNuBbxciDWrJPrACTdH3E5GJr5ecKBm8Mbsz5jPrtVRbd6QsXntovXisHWJgkvZLj7dyLHJv37n",
  "key29": "9cQr38crwvrPozYNxa5hGRrCewZJqBuhWZR8BEzLDDaXVoDFFiM9SUb26NhqSL4R4HBbRgmBPHSgBKXCbjnjziu",
  "key30": "4N62mzJKE6XJbgX5sEKWczG5DrMoaC3sNB2CcY8h1mvMXXvBthNfv2yJbhqCHtchFvsTJDqfsne2osTEQiCxbnBh",
  "key31": "2faLraxv5qBniqh8TBdrjDvfBV2pnVB54YUZcTbwrLAWaeV4j3AnXuuDGLY5EffNmxTe77wGNuGWpyuE9Mrbp11F",
  "key32": "51fr27VrQuR3Rd1C8sQ5DzPLUPJci4RMMfZGnGTpx1LPVB4woWXPpwSPbJzFE3miZqLopjPSSEiongVTvsAcPs27",
  "key33": "4hvQMkgevW5eRFRxpPJh9XgeFDRf8a8m7FvDYwUnAeZiEo98QMnG9TLCBfq6ogmrJJePPsUPtjukjc2Rv6NRPWZf",
  "key34": "UpQFLieiNb4o3mgZcU84wMUKdLJ75aXxwnse7rRxR5XTcrfqp55xJbXhsPS5RUS256CweESRESFoYcmDeX2fpup",
  "key35": "Nzpuw7e2xGVcH2Cp9XonvzUn9BgeuZaxxwNthmGPcuf7FJUpXHL9t1KqcRhd4eNVkZTvA8sCrnzpbte7RkAAJjf",
  "key36": "3hfdt63gWpZgV1wGQEhXYCG2WZ1kvRsynpvKnHoMz5ESvFZn5n1Uxr1PH6CshKTV5BDr9uviC3SXgAi9JKQ3gFjH",
  "key37": "27BjbGREdj1b2dpfErUvajiuQUz47pC9qz6xzAcpqQemKyPiqjUhuTDgkhWcairTx2LcwcicfkJDzxgRgMGJUtTD",
  "key38": "46YUw3k7TSQhZpp4Y6fMQMpaLLpsdXTzun5QYCUkSCQs6zMJmWBkDrV8r1hUKd1uo5P2KWy5QcRsEii8SJToACAQ",
  "key39": "2WZRqqjpjHof6aYKkNPS19NPrVdNxAPce88yXfuSvoNwJoN2eBK7X38hi3aKUoZbdFivSa4qoRfPAgpGekCWxrhr",
  "key40": "2Bj5Lp4TXSbniT7P1PcYqLyT5mrnYnNikwtpFFiWxDHfDMdSEoNxVBqMRqYE63js8Wv55GXMv3w1FkSEcgaBmFqF"
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
