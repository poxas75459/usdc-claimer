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
    "5EWyDgSAq4mDQUwSt6GZH3V5pdmdUzzk9WVbrs7ugX8FpUJLoHhCzfAUDL2JETU616NLNmmj3SuB4dLEdasRLKwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eV6dxog99qKe2cGy73pApmcr4KUAybw16iZHs4btcCg4iVPN6bWspKske6hGLLQKmpUZqkGS4euExVkfgjFSEX",
  "key1": "numvJxGNjX7aQYLwyA9KaNKor39JJpK9o8xh4CQEyfMG6KYTsd8zazNtqahMcUZnEwSJpcMkXi76qcdigFBsPwZ",
  "key2": "54FCi6BATrJig7ozKHVcY3tjzyXDiLyDRwrQSrUwbhPk3aTy4796gXTdNvJRtQscrFP3QD46VixEuAEUo6hRsrao",
  "key3": "5gqJ3rPNW9otLnyVXNgxnbJApcX8EgcwgExGofPG8jRMjfgaTg6JMTnQzrtvEQUpAG3Q9jcRo2aEeX8dE29BGLKw",
  "key4": "QvK9E2rLtunNUJgn95NHwB8y6YLMy4LgFYY7Ao52xEVwNW2g71C5H5pkFRTWzH3cCfUGVW1pyYvJrd7AZMjJ4Mv",
  "key5": "FDdqcKYNgmRXEr8xAxroukHB1QEcXiBP328XwAiGAvVpPqSyNkPaVnsgMddwgraQZQMEZH9GFFZx8uQMjoX2byS",
  "key6": "VsSJ8MGfamQvbKwNKesoC7e5utC3HrqibtAdfxmM7yWKFNXLQ5x7edUuV4aHMT4UJAgHhqaoYV3XH1pE6SNZ1Do",
  "key7": "5LWFiAcSR75m4sRiCJxUs2XppcWYZkcFvMd4YKRXZjXTXp5LmSbLBq2q1DCTB4sqcGVB5b5fodp6FqCPUZ4CuZQT",
  "key8": "47kJF8gn6B8Uq5F5mL78gdPek5Y6t7nAHJmbbSk8eXynH3ywAxxET86bh5y85TNDQqZ3AyzFTSA6KM5g2m5PLsXZ",
  "key9": "4tnZczQcdon7KtWsBe71FqhYqr5cSjuQ5aHaKiu9XcpeiwvmRebJtwAuHhJoaStNErdZfJFwZev9Yo7dcJJb17pN",
  "key10": "3oeb4ZATEFzYDC2eHUsREjcwkdfHaRvJcoNiXqbHKxataGAKwnZGviEDk1b7jUmv8oqwUxy6mBxfRhL8kxz7RT81",
  "key11": "5bbyrrfEcg9s6mYUm5bB5q6BLwpZysujqH7PExJzy6QFgEqHDV6fM2oUqpw3HhyKrWg4asa84KkcQ8xQMpwxdz4Q",
  "key12": "5onWkuWas7wX7V4Ga8ebnpxUJULTya9VpFraJYHyNHLEXy5vdgVYvwUo9Wm1bBaGrdrchCkusCcM9JBxQg2hTh3K",
  "key13": "2izstZtLAQgwZeJiibun37vWfnZi4c5LTs7iUiGTfpDuyPKrJDaVTi16NAbUev8YSB9MaQUr6EZgd5bXjZsgZSQk",
  "key14": "4ynR1Lys98zXz7zLYz9nnwptcfroEnVQ6ukm3mXbW1GxgZgCsXx199ungPXi8m5VyXdX4Ue8RBF9SfwUByT9TN5s",
  "key15": "5Xhid5241MZ4656H4torfryafkYwrVdA7hTygwfyvfZi1ppHZLU6fbyo6XF58rsYZDcAQuwEAvU1kJXtDwWGadBa",
  "key16": "2ngBMXyydTMyWq45Byjc8vB6mn46p55ofgoGA4poiVziXaNTCM6GZESpyNUBogMBBLLjq51Lc1HYD3YbPceKTrHC",
  "key17": "29gtignJdFyVXVNt7gAreZYTsdFNAcho5Xo7pRAGujck9vcZPA939oAG4wT4EZnGqL1HfPD4AoaaN4B4ayNENyy8",
  "key18": "4D7CsXktLNi56iukmdyh3N6NfY7XD2AWizPRM3se5a9CxfMuaHjBAA6UAcRXXivUpD2pLbmJZJPoD6Q5737f2VvW",
  "key19": "3hxJ91HUbZDfmNJBuk1PxzghN72jw9vpVNfyUMY3492W6do1bBf89Bd6g8vFviAz3wwtekUiQXXBDE91fo1tcEcm",
  "key20": "2snFZxWFTv1RBojHvtWgx8Xm2VLy7TUDKzdJRA1nzYSKcVKnubtR5dg9vzEivKm5jBGS6heMm6beMpaX2Wnmsdar",
  "key21": "5yUCz4JU7ThdYssaB1skNCraJ68Z2cTX6nb2PAYdXaKmzyWSwA1wGjNC2k4V4k8AQgz9MfSiW7wQy4HCRradGpvT",
  "key22": "3CeKsaujtTAorpZn1uPZCpHN4YKtdTfLLo6yZrDpcnK9kicCVe4w34YQbevzGFGtgDZgHgJLELFnKM7b9dc5zYUQ",
  "key23": "5HLu357SiPzFAz7G1Fie7vKp18y6VQhqSTMef1cPcXimdwn215jMBjoA5cecodtCXZA26pCxT3xF9aSHtHt7ME9S",
  "key24": "49FedVjF8rc3mi1YsvtFq4BfC4siePouc6gCHZVbo2n9hbG4STTVqgxMjdrfGTBdTv7JF73MKRrVJnRNgTgrb3yD",
  "key25": "3Hr32TjeGPrnTRs5Vj2AFauW4RNuxjfQha5tZpyNn9fti3JhhvnF3Ho3SS6XzEcyVtKXD4a2ayibg4J5u2Eg3X3e",
  "key26": "5ufSt3F9PDz3yS8MxaHwZtbQBLvhuDMYBs6Tq9Pkx3iTiYn1opPE3N63q1MGDkvFwFENNbE4jJ2QfGFvedchHmRL"
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
