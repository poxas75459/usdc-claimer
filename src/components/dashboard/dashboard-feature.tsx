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
    "3Qerr4RLALPmG2pcoNqcJu24UysKR3xVaEfc3gqAe4Brr5DLgZdEoygh6ka2yTSpMEaWKn5UYFShnqoaZ7VbJjDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbCQDFFP5EuKv9dvMmHWrQHHEasM5PZQWJVvdrAqZaf35fHoJJh7ocp4QYUrPAjf4UBYhSyM58wkECQEHwKT1u9",
  "key1": "5kd2kwem8BezhVV5XryFRZnCY4yT9azcdmDF1M2sLqb28QCTPMzBDCwWFDziXQdLqAM67Hu31aQbnS8N9Dx4mSew",
  "key2": "3XEPXcW9HfzrTMqiuwQGgJruc1AMPFF8NfGAtLBVwGecBKxbDgSsjw7J9xHnNtgKRjyKUUZbLH2aaSqHmJzXLmFp",
  "key3": "3LbiPDkNNMFLGzavo5DNpYweQeQNETPNdytxueD4bh3ap9abn1JFNeh2hmHv56HRNFZKwHiUPNvMa7Te61k2z8Ns",
  "key4": "5cPmFfeioBGHmuVh5dWFdTpiP6YGfwrZmBzektCoMTdh6ZnvyCjk6wKRK4FCbDLLLvhPbVyp1F62d4F8TJ4ci5PZ",
  "key5": "ULJxLC2xBCCuyzAAY1wx1RECvg4Db5heiyL2n54G4MKPE6z1gbSJvGVyhzz8H3GoSckC2wvi4esc8r65LUreAYJ",
  "key6": "5ghrsLzDZHEkvoFsaUS6sEM1FARxxvzpajXwinnQJEmNqeqMWjQw1tVsVdmCmyjiiLygkyXUMYiEfd58GUptcMLg",
  "key7": "3ExDF7UgbDpaLneYzGNH5QCaVdLNmTqz4y4nMxHtF5275fpiWio8BAAQdARhMtDpipBmhWygeE6Y6CTRvBPaakzL",
  "key8": "5njBEFdx8cNJC1kAmf6rz4UQLjocdMHXEz5y8FRPfdbzwAibehypxKtTj167BhvrFgvjG9BnpTRFzAVtHeiXgRXh",
  "key9": "3b89nt38Cm7xnxc6C5vxDhr69r5Ro8uxcbPAdCsyWXJ1BXsQSCgJXxhrqaCcmeAJS83NZ6hzAdZQ1N2ozSzoRQzL",
  "key10": "632TH2m9qZoPqoVkQwLw2frwc7YC7rugzdZd8iF7AtMX9WeuRoT66uxtsgHcEiqW4fpJt7mtMVTzKejYnKkYZpbQ",
  "key11": "Wr5UESy3DGcuNcEkf3scAqiBnwVFEErrtJo9d9rmcvU4LJavdcSvAvbFSJzfkrM9opZKPEJd38BHWFo9dJ1rsrw",
  "key12": "34ajy6ncYxWLd4ACCsK7bRvtMokg9UXB2bZSff8DZLwjnn4oiL8mgBUcafUYBv6yREccbus44ezwJdzkP9wxshjB",
  "key13": "2KJk3iNJAGzzVBW5brE83DYn1uBvRxG8ki8BGK8bqYsHBsWd6b6HcqNBmR4mKvdiZem2NykRF6e6Vb6G1MFQZLMA",
  "key14": "3xG77xiLcN4xMHHMerzuPP7R9XZkkNuudN8aoqGNXETAkAaz4p8hrgmhCJJ27YPaYStgcvcG5bQg3JZqFFsz3Gjr",
  "key15": "4FBcs9PEk4zaGgovtUPzftZzFNhhUVG5Jws22nFaDzxr1a8r7vfc4TJkkRZmwGhEoWKXW6soFgyHp7kWc285Up4S",
  "key16": "2gKwaU4yPZ6mnzHJzBL6Cmpan3z9xv6waMfbe91AJstSv14tpqksxLQGRT7mDXyGLPkqpKJzkstc9npUAarvtWpT",
  "key17": "3HUPxVzgFBBys19mw9SPayPE1EMq6PWGWGxkz3Ljwy1wLJSTcHnvPutwHNtXQxFCChwmmKFXZXegABQbvVw4iqjH",
  "key18": "5Un3NDChBRp3ojaMmG19y9AvaVjUkgNC9TCfPhTrKxnjY8uZNouEwPxArJkaErcGvU9pqyJhugFnggZeUB4eq1aN",
  "key19": "4QbmEKBBvuGdKyb9MBbLWsMaSuu68ZrdFJ1G6m6U7uRm2ksnHtZ5WBZjqsi9p9yaP6wuLqqL4ciwmz3SFtGD9nTG",
  "key20": "3gE5zHbbecZfwxKVgv4L7DmaCfqkEQ5qu1cCFXTxhUNgcT5es73vDfyqphW7aSYEo8kHX3viHFNq6qTNK4RfAVZF",
  "key21": "K3DXjKqEtiC2RYTKq2KqcVXAw7UEzNFDznbNBPonHRQHkh5APrEgSxa9NQakQrdMsC6HNawwDjjYixL44kYMWXg",
  "key22": "3ydxuitt3Ak9uBUQPrSEJGFMK3mY2ZdkdarjCWU4hJSNayNsenYeW2FaBBrRgbQGbAY2w2FGBgQq6h6G2DtMgmCJ",
  "key23": "35it1nvRzExAtYFNFrQBcVyruy5Jb2i5KjzzcTmq3Njae4mJP9mio3aTpsLP8GUz6dXG3EMnhCZTYSttBaSAMrjg",
  "key24": "3RPRNYeSVnTC9jd6uzuKpqoaJSrASiynWnJhjePMpgZZ12L7EKj7KGgnJ38ERG8BABkn39EX2Tgk3zY3Wre6sd2D",
  "key25": "2vcZ77izcXJC7EMqXYyy5y9euG3hXQiYKgtxbTSbHWAJHTg9B5YNFt66fUoQnLAKCpTmnRj99xT68trSXvTRadyE",
  "key26": "5bvr7UF43y2qJKRV7RU2HbH8yGVTs6fAoqwDqVVQuMyE8MCjzJ3y95mjpCLBxWqvX7NzE1uBEVMvjxeuWXymo1jB",
  "key27": "3QQjZye8bY1cJT3h9qNPR8NKfseSzdfpNd58ZzE2NYewHXzKncvM9HXHKCjamAjmgnp84TvDE2ChU4pM7gbD4wyc",
  "key28": "5JzufM67kGcxNaKtfpKDrxM2dWz1AQ3g5Q6dyQK4MjbQDTRXdkxRbPMQXTe1AAGeorwDcx9rT37tZw5Vd4H2KQqZ",
  "key29": "4wkwfbLpo9S2VYqyQKttVRsUQsrjpZG8MNuGjB9Ueh3Y96mTFpfVbYtvULnMUSdLZeLz7ijuutxwiPKGvALh4ccu",
  "key30": "5jKkkbE3UXza493JecHHR4x8GVLPeR1ow952YuZCBmembVp7Sn5j6mwiHcXHg278QyRDePgTipdA4rn4S6Dzn5MS",
  "key31": "3Dmyb6FdmYcCyRiPUJs41URoVVhtPWHTfgEQwsE7AoFQs69E7qBhHtk1WFnvF3ZUGaMGekxq5GGAgmnfkVZ8vP5k",
  "key32": "2iiGHWCtV2xua2JA5y9q6vyA8BmCmssNdBCPT2E8MY9K8Af5nLXGpGtWXeTPyaXAHrZH2eujbtoA6F7BnXfwPqVd",
  "key33": "49hKbAgm7KiLPi8pTSJP112eAGQMagZM8KkUiErgzKzCbnKsKgeRLiohLRzi282r1LxU2MvWQKvRHMyQtgNmxz1c",
  "key34": "2NMmxuWcUVPhzbgjMNizjDFFqNmJYVg4L4nKKtrK1KNvjvPj1RHyztbVCQuCF9SF6uB6cAGP2VQmwHdkeCj8ajgK",
  "key35": "2zPMTAZ3GjVNDo8r5MQxra1mRxhzYG1N9Gin12fp1YnAbwirNeNBCgGsvpFVoF2nhqs8DwRdgz4rvrhsJbqJfGFJ",
  "key36": "5Lao3A1SnVdd3CrXMFxvcsmd8DbbP4mcSQtcDcprsyfPLLBCLjZ7Q52kJCLUm1xxJ9ZeeranxzoScLXrmNfdw7aq",
  "key37": "2nAGUqdefpBjEmTNjqofw12KQBFC4KAp8a4898mLaL67gAdy7wLcdLi8eTNJxemthswZXwAG1fthEAfcnjBeu5ST",
  "key38": "4swSM145L5vGcThxW2SEJJSUn9weQsnF9KUENqyApE6vUAc7DFCAeSCpGwhW7pHHthHxxzGtDFKUkQiW85EiYoyD",
  "key39": "2uc37RNAHyFzraEeF7hgFGeMvGt3eQuJpteP8AT3dU2m5ZTHJHMasYHzbxiko4YypBgumyfEyCwTNWLzKUZYAxfe"
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
