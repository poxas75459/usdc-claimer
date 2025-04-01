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
    "2kCj429xsDvhK2jmWLjxuL1nB5gpH1ncSxY4qWRVodw1c4PtrAAzM1JditiQ6jrGvH1bvZm8w5kLnB4N52z1B4Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQnHJNiyedqnPpKboJvdQSdjM8LEDnKV4mXxx8Ln4Zs8vfztU3ACWMnw8P11e9YcwULrDBbMXoBgbXT9yiEDtPy",
  "key1": "33VaqYzk76C1G5S9Z4MgnGnJZGRAhR4RKgGgnsBqg8mmSswgyrLc1w7sW81JTC7g7bNSx23JERhqmWWKWQz5593U",
  "key2": "3kvvDjiVZKnLNHBgNe4fTvxg1q1WtBoNaNZUJcLHKH2VR6t3EgbnZg4sVAb5zwCoB2AGoya46pLWArpDHXQ5x5HV",
  "key3": "2EcRZNJi4n4YhS1UVcLxCSQJfsVxphRkfUCyBMvY9RQhRmHSxLE7HMvnMKEouscmsk7T8BvzB46DN5NcGA8mb33k",
  "key4": "5nHTjzQy5rgbg2BkDpSGcBZzA9y6MshoaFsdLHjty8gsvCHAz7WRkK6HXXFLejQyMjPpjwBzj2Vo3vAkMRWqaJCj",
  "key5": "4Y4YbwQtdsioRDMgTSADub1ctRugrYeTvDuJX2jrTe7bRL5rcAJVpnUsmh9VKUXN8vW8UMLWj9E4TUSXvstkjP4v",
  "key6": "3oxpG4P9Fgt7FzhVLBNmBpD5ZtXTA5hQ7L13seyJtyk9WkTgtfr1nuMiQuGYr6ZNXtysDr7FFwEsGF19CHrWrHhk",
  "key7": "5i19K9sFvmvc1CzNN2hjcsgNU7WewN5sS6y3o7AeKz5tJquBpsjr5uTvzzLGCw1W2ScNs9tcxtDmnABm289vGhGJ",
  "key8": "35Yy9SsgX9YdtyYou26VdQLbueBtD5o6zNHaVwKXcDXzxpSk6r8csx4WhWdoCGXrk1FLoUPenyqnHjBhMMQxAx32",
  "key9": "4wQo67dV5izPTbFSEhHSZu2fmCpimXe2Z2LJKoCHdxgWAkvA2L1TpV31UscyzNmpVhiTmJAnrbJThYSQqakXtoVB",
  "key10": "2iFhF2VTMT7BQXqeavobcPk5A27N4DRp12gYwdxxf668eMv5fzaAvN7sNYZBFBzEaafNRWZqKXokAjj8WMHQ6Uuu",
  "key11": "f4DD5DWRDWNLt7D5kGAu5aCUzFf3Vaz651wVJkauS6uVHgHy7mamTDkT8Sc3Scaxau6GZhs41pE9V6SnKTDJqx6",
  "key12": "3WDHTKEjMnDHTN7qmTtRArejjeJoL54w5jDuEqh8ca1AyZ9rQZjNvhwFv3xmeN8vnPXLHbsriot5V7214K7YiHqf",
  "key13": "5LMtsmHNzGxU6RMNXocbQmKLbsYyro1wvPf1hfjNSNsDhyJkAa3nS9HC134M4LpqQmuha6JjctLPEAi6NrKS7bSQ",
  "key14": "3GnpMcDFBvFxu2KUYaZSDkvyNXwKuLuw3n2fpUjkEdVEBPPP9KaYd8mpgvvWV4c9nUfVMiAjtuRMcpV3aY5piZ43",
  "key15": "kvtZGxzTusNY3pfKQnYUqTFUDh24Brhh72NB1fBDgBQM2LGVeiFY7Cqs9V6v6dnhto88AaFbLK3CgEUSBtyToaN",
  "key16": "2jRVAh2REypVru3YLwF1s7vUf5ctjVYYHzPUukBg4DCNxa56m6jWbAcrNDWGgY37CsjKGnzpHVF3QPpLMoE6q6MN",
  "key17": "3BAQv6nCihC4rGPUphacbVCUePT6zm1nSiFv8anXJMC1dCAKvhR7ypGUgrphSkUQcDLGnGPHwdZ6ss9TqVP5HN1g",
  "key18": "4231dsMmsaptUE1Rh3wjvXsjrVaLyiqGqe3q2efQdEMSNcvMEAHo3y855eAEsjVP1yDm71KKzgbEqdT9we3rFzLs",
  "key19": "3SaVGBejSs11H9vsHx15HxkUGgMs2xfMjQb6tf2iZjjvrt6ywAn1197yxJW1B7rropZTEeRM9o9zG91svHuKBQf7",
  "key20": "Sik4ypv1qjiLwBWyhczYaC9ok5U8Ka3EumLY3qjoevhK15eMNKhRhHfVhwmfGMabbYfWBbvEwdcpigf1jacyneD",
  "key21": "48JadKw2te1VtMdeC4ZSSqzqipD8JT66H3CXha1fjmNsZMdEafA6QrpBuikptG99dyUFD7tAkrBLoas93SH7JeVt",
  "key22": "5tsjkuxi1zNfaME3Rn2EQm9eHGvAY3BviXTcn7Su8VTpJPyqmuN9yPCbhE8uf1J7nfy4uQXviQ3fMj5dDjtMeyup",
  "key23": "47NXjNaBuDZN1TXFagKPCTqiUxZ2AT2dKRL4ydRGfG44qRKVCFPKnYadcN5pYF1B5SHSaCkEbTZBgix1QMABAG5o",
  "key24": "pxnX1sUFsdxRzm6pZN2uswGCu7nPMu5bT5i7w4REJRLUzf6XFD8jyk9SF3JiwVSQTnDq7tdyFEjbvFhCGByNBsG",
  "key25": "sU5HxJ2SvCQ4PjtdTf6zA6af4fUizC1qWW6aZeDCau3BoGJ6eVuZuHbrApmB6cH6RvdRNZJw62pFnmWvy7ryQvX"
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
