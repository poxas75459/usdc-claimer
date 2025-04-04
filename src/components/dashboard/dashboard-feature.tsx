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
    "3H9wpHAmCqMGqCtXPuVrw4Dd3JV75cdpyZEBvXreUm18Sstkp6DAPXNWFGHEyTaCDX1juySLKssrBVHXr8G1Pmjk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKPcwx58neHGbaPr8uHLQUJLWHaFtDgG2WFvHJhDURpwVZbTVSwQ1vDiZ2gRV6KhaTT3Ba2ebgypv2x5WcwXgE1",
  "key1": "n6i4isRdw5Lo1QXbZJrri9cAhNAJvVkbGekd2cUyUb1dN9uteMgM42kpvn7aVYjn9oP4GdyF7XSsNjoDXeqpHDe",
  "key2": "d1TmMTLLr32pLk1CaA9NvpWWVJSTPNEV4XWH2NhTyMTMxZepthgZpqFoqus2aFpBBVxajz1Rq2kBoPatbwv5Tnf",
  "key3": "WQ1ScvvFDAQdL4ZKCz39ks6tbMChHa4yj2MgMMKX97dELEmJxT4pY2MWS3n4HoQJ6fvrNPRpt69EKKJvK8bn97Z",
  "key4": "2VZLKzxUFHSZMpXEQb3vRz7kMu84ffFR1EAf4A6gQKATVNwYuHU8Rfau67qv4ezTsE9ehriY8nn9JwquZNq5Qv1U",
  "key5": "tuDemGZ9oCqxEhyJGa6mATXncaZnZrDHFCChZ891Kibzfb92iyRmYAjhFJuERLj2SvhsSj7L1tsCb4jTYesQVeo",
  "key6": "5a224aqf4dyDNvfUaK7t9D4gWzJBgFYssBxaGWdh9zeuaxRnL2AbPXW4qVWqrPcQE3Qjvtx6xkVeFnwnjPu5Rabm",
  "key7": "3D6SQZfKLsVeBcSysDiW4m6m5ZjUQRnfr4hCEky2gKU7cCng5dtTB5tJxqYf8PXW9p1vPNZ6tAktaiieTDFp6Cn6",
  "key8": "1SFruwYoM9JAmpkgRfT83LLAUmmPkM3c5XSQEvy1QGy53f71GBvpMufxPrhaKLVwmSXXQMGdjQSRtdw9PtXFJxn",
  "key9": "j4PxEF2eQbHjre7YuzDZCLYYAu7MXwfNYngHUzZnuRY9jfLB4mnu2ejrm6xHBHrp6uvNExge8CoQS2BKcbV7X1E",
  "key10": "54ve6h7ujXbQSpTUWsvGWZ1SjjzmHSLmpqutwxVVLn554HRhvUGosM8cp3dyJdZ5tbnYJhVMYnrANooECRRkGfxZ",
  "key11": "4xk4JiAKtLq5E5qTaNsbsWXYv5LP8o1fuodWWA3q537UZzKS2wwfazFQdEHyTq8LXjZF9CaqizyA1AAoHrFbibHi",
  "key12": "4X2CA92BGPMMiT3jrWQXyUE4HKuNzKbceHuLYhZgYJa4ctCMVQCZTMe8STZU7ZRfv5eJjs3me9GsYr4X3sjRzF1U",
  "key13": "4PpXUJVuTE7MDo3P1BZc9tmbNx2UQpFMUvpgzfKJq5WCUm5cu7GJRZ9VLw6hE4iyuWBeE5oLBH1yPwk2tRqdTHjQ",
  "key14": "i5aznBPqCVk2Xdb8Y1mkKU75PuSSYnXwEDqNbyg1cggBTZyq861LKsXe34s8mwcv8QcEgZD46XEePwVQzK7ryr8",
  "key15": "2ZdCqx7ApkRDD5boex8m6p3Zoioyj6oagn2XiL4qyVtMkqHF8aCdJzcS6UxqPehfhoG1LLDEzjmUQKq1z3AtaUS2",
  "key16": "4jxEbzrGiz2wZDXZaSiFS1gJ6cQzh2PAAevA4ZsnB4Df23mSmsVMp7o3ijeU7DmBJP76qix5ASaqzSz8ddvwwcNc",
  "key17": "4fY5B7WJKyimdErudju4KSRroo9LKw4k8wmMFEphX7hb659e3omL3KUiS4Rvhv8rFDiJkHGN3fTg9WsyddUiAKez",
  "key18": "5e7W7tUTm3bK5teGh55M7na3k3XGN9o7FtQb454M5tNkykQKzBdRL91k6orS7EACGk8cCUpjuJkz5RrVf23eWbix",
  "key19": "5pM2JoYhZmJMwaJMWqgcs2uisMnXa6fr9YV7yxNrD5BTeXQMzGvvtgGM3fy91VkWswVBsCwYF6ZYoxUwRM2PJqaY",
  "key20": "4Ah2i5LfaHduoTk1BzfMffEkB7vpAj7Z47d55UdccXmeruMLwASjU7j1yLLDDpaTApVQwEpMDpj4jJPJpnFvxiPw",
  "key21": "5dJpD8QUrbq113JBncnXfQd4sbd5Jcm7ZoGsczWRypFcMC2s1cH2J2xsvbdrGyzwMpJdnGLFPyVomhj3ct4bZUES",
  "key22": "3nRXpW94mtB7wKzfJQUCe83GgjCNf6n1Pjvjqc9PqA2iTN6TkvFCwEnLVrpAk4yHso3Y2ktci3S6N5aSVC93m8eC",
  "key23": "5LAZEEwLaA2uwDJc3cTfHX2rosAvk3uieymHZvMsArJAhWfR22tnSHdJQrQcywDhgx9Honx7gEBHz51CytT2gJ5f",
  "key24": "3Hfe64XPuyXkEAih3mssoJTeF3tjcFjSbuyddg11TckJG5GVyztiMEA1BKZkPGG9i1ALqX7KBjV7tW5WbgXngvJk",
  "key25": "2eXwZF1GhGuNmaxmFVHChV2qFvBGfsijPn4bSmnzkfVmcpqhdJ1brQ2nCrmLCSzgU78afVTcsRNKnNxLSGzFkjeH",
  "key26": "341iTtVaWXPFoRSAyGacHxa4ti419UfqDdXuK1CzWxz2NDRpWpVjkt39KgMMD9Lrfyfn3X1wS17VgCj4MLzfuPat",
  "key27": "3hNL6SoLbA4kuWEBiNeskBgkoPogAWGWfYhWpNS7aXUAEn2P681Lb69QT1DUgL8fPuzBhfrep6WYDjsoodc6xH8k",
  "key28": "5LeeyLGpGnbrUppvYe9e7VMr69PZLgEVNdbxvucgbTbuhfLtQdGFpXJVHp3sREouYvi58EmKCJKL9RPXg4exE3KL",
  "key29": "3ZPjsQyRBKRFGQCGybUQJJuTvPzhVMJZsVSh1nQAAu7vwJrWeqQxXYphHG6gZbZKRSB9M4mXtGZXejxfNE6mEhPQ",
  "key30": "WRGuqZ9F5FxRsTPTb4pBZ2kHCKLpRnsLewKDvXGdhS4qvqMa68auh9GX5egdiif83mZ73uAXY1DscPC75z7iFPk",
  "key31": "z6mo81wBtUeERWyhtwCVRuCTTh9VGnMug99DLVQCCGSYA4iYRJpvUdrN17yDhMBauyybERQwx6F7tihMyFcUPcY",
  "key32": "2CETvhb5dUd2umosdUJSU7hLq2RpX8aZJfEQhkHnRXgDPDfyxZbHNHBKxnWg5e1ieZzBTfV74esX4rx6JVGjBmsX"
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
