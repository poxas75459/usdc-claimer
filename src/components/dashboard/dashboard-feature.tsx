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
    "RCUfkFQ5x6NgaFFt4oYkPzZACDAQZnrY54irq67HgnEdcznGyZyNBWCLts84vrWD9W1aoQN3aPcWqjK1Jb3grH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eUp4LRxuNjL8ZUtW5AUvevfUmXDKDSE25cGVvjKJb3scePgzpF8HXr41mKLkrcPbFKnTHUUiWHugntWwxTXedQ",
  "key1": "5xm5akrfK74pDCo1PoGsf65Uy8bQovcdapyEvkGyJ2JdaTAc6a5LyuGN8vFYf3gE9chx8YG9tVNY1Ymf2Z5VFHeD",
  "key2": "2tp4rfFxDCrNY5F7UpGruKmqirWA9xZLfS63A32W4RJVC5L7xAoCEqwsDcYiEANyhaccHwVt6fp6pYRNfuc8xNDC",
  "key3": "2XoiqSbsKTe3jUSktxGRR9x6UN5jvXPkt19qYic72uK9LZss9RCCTXaybfvnnpDy6bvQgN9SgQzmCrhqNirSpdtx",
  "key4": "2JmX8bH7BkjmXZNCTUpudyFRj8yjv8pQhSPFQ1dJKdG9eBdjgxry6PTs1CpXjpwXx851cXY5cvrUo1jALxUkDNYw",
  "key5": "hCUwSjgWHW9awiX5i1W7NUtreruzMkrf7WUVK7Wa5YunHBVwLaSSKrZGwn65F3Hh4QdaPNq6tJ82p2WxPb13nqp",
  "key6": "5GeHGNV8JpxuNxbCA3YnA43ZwDyJaprEZcTdAUT48vghmAY5QP43VAr8Lb1AN4JVpYSrrtxGc3wsKLDeTHc8USAR",
  "key7": "KaY1zsJbsUpn1jHD1Zk87d4R8PpwpTeVvkJLAdmci2DRSaQfW7hcQrBg3WR1epCur4uxTg9o3nLcmUSUGQrMC26",
  "key8": "4rY3UjUSPbGNLWoKvjHqxp6bALJShb7YGEpzYJJ8KB6YgCqLS5TdJNmZss9oNXNrVFQb9aQbhzP5qehs3yhJnkdA",
  "key9": "47RiER3MUaKjZhbWcghCB2evZPq2uzEKSywDtWUaU8heouSbpzUdRbEWySCAghcgWbjGyZtzvB7Bo9drBkcJFi58",
  "key10": "pJnrwhwobxMQDbpW4VEBi6ktMF8GnNdNAJpbEu5Cx9EuB33MZEBX7acpMYp9jCni7y4sB5CYzi1mMmeWRUcVn5g",
  "key11": "3kJeFnCYfzrBmKgtgLHDNpZecWYSgaSaq6wrgcV1qnsrYc6E47d6obvZoho4tT9StbiwFsFruUnFVkoZdu7Tx23z",
  "key12": "42938vFiKF618Y8dq78pptzb3zgnVwopzq3rQh2ZexsweXr9nprmoQezDRvVxJtHzSzmow3nfh153eDemNHeefts",
  "key13": "2ugqjbnXmB6qacuHEadjn8oJKGVca6hXyMSK1PJa5rwvVCEMSUhTaEcx3XvTDaoJ2D6odDimiQR6RaovPSisLo8z",
  "key14": "FGos4J7Xnd9QTje5pN2mwATRM6foprRJJY1rLPNT7EKLZDjn9rYNWPGYJRPjs7qa16xrJ2yxu1aj8ANmJ89dqbJ",
  "key15": "62jPu2YJ7chqNsPi5bzzba85MDCYxCZhEpxE97RbHcA6TQdWM3FKmwxNAeMBvzH4g2NQ2LJrurbJig5PRzdWe5sB",
  "key16": "DDam5kTKHsGmD5yiBaSYdHB6XYGHEaT4fxG1aYWzRE6k4mryNmiGkTBaVtkDvKusqZdaDTmkPxAxFC2M81mXF8i",
  "key17": "4GhN3Y2X7eNeai49nzGyB7fKh7jwgWCm7uGzVxCgZ1ak8SDwHVnPc3JzZPLyrcDbSYdKvjqKpDR95ZXCMCbxivuz",
  "key18": "4okXeEZPPBJFixEgo2ErGTWCerayAjeoW6Z94Q27xPZ42Uqrs4Rm3V8pdAhg34CxG9FhG6BnTGgTeYPpwDRJEU7L",
  "key19": "4S3SXpDf8sxHYosNyu9ztFL9swH9MNkeU9nbYdXkD1HBXFZdeRWy2W7vjrmGZ9hMzZXz5ausbFf2jpGneErpMZej",
  "key20": "4XyYzMpq9uKy9WFfGKU4nJksjj7fqVAubQ4To1dhn7xe78vx6NdDSSTws8MjCJWc3ektbKYHCaobtDiyZaHTPpCE",
  "key21": "Snk12sLfJeWPTYKCJw28W5yeodzGbvJ9rvJczDbvhm6M3SRXm9RQJnPwtKwwj3RsPrfxGL5V6GES6wSr9neRZX8",
  "key22": "3YmBPZAKuHK5k5w1KtQ13rCHdjMvWfdGFj8Xf2S1SCSoN4uLdpAfJzy6nX3WPhVKKiiVp3dqNgTeFhCkzSRR1A6T",
  "key23": "5U7SNsPF2tm2zpePxN1nuxkzMHpHQW1bosKDvo6uqYbKVSFmF9rmWPkqRQ4NBtQBv2SpMLYfYmAQCmgWimrbR8SB",
  "key24": "2EooaPAa6i848Gsiv7bzBQseaTurCM4zxaEkG3u6qsFcXK5WF61DuLeG55Cd6A8gufUzktVtVhfo94rLd9vNtJko",
  "key25": "4AD9K6VoPghuvqept8HuvsaeREuG5HvcAPNy8SQHQAPtJ6U7nyJ882AbNpay7CdLS3xj4MEGGSzm9TY3kJ2Hki6t",
  "key26": "3DVjJAp6uThRmyg3UMqSwa7dcnAs2tR9TLkN4v9w48Cx1uhaZ62QC4vYDbFUAFpXqUNgmhv72H9Ab53XsSJfStsh",
  "key27": "5xc6w7MSSrWpHss1ER5MWxDban5MJMyHACnQLo87KSYFbPngbimFeeCtYuWc6bWccikAV4jpaNwsxS8uR4remdhf",
  "key28": "3o9L3g6cvwKXjxLcoawFmNnTXecmuJmXrLYxpFhXAbXCewjHQi4wzhJV5AyDmrXvaj5hx4G5PJLaBrfQJQPaKpt6",
  "key29": "HMJoPdA5Y59hhxCArHxk2fTuizo6VbTjmCYZGuF7XDMtAvG35se13zMr1Uks1mefCY92QyPwzmB2wLnbceEskQo",
  "key30": "3rR1UiuhLNJHA9JA9GGoGu8XrLmJVTaowgZbBNJjhVE2PJHiJkxYSKESz8TaSPQFDV9Er5FNZXjZzA66XxNm8QUh",
  "key31": "775mYEdc1EdccB5DckM1QgVrvNFR3sHX9Udc8JsHyZ8FXSwe76NsJXwqN1bAYdD5o1k22Dm2ecNWRmzDFhMTM88",
  "key32": "5GwEk6Z65WSGY6JDGtvVepDYz3xWEkAh9qJUHxF8L8cTfcaut5wmVADYGNSVfHQfViX9pgR5nHGtTAJzSD336jmq",
  "key33": "44bdE2cistXVUhNkTf7C7si7PygbVqVxbMSA64DEgsWN3TBqnyZM4h6ot8me6RCvVW9etH1bp6quVRkUrNxQJYQR",
  "key34": "4gjZ3vrciaRexZQ72VCiUDXjZqJfF3NzNXyCgt3jSdsg8r8GhAhrK11mMF3ZNzfnWhCpm562xBLvxGHhkUoZdwrk",
  "key35": "45nXYSMWaZ6baYFDfdaXTgrdoZ38BfSo5eeqePLQgPmQ85cu2dj25kQ22FMAhgwSMjnGTCDg1rj6sECEbnAxbuFs"
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
