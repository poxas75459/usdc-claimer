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
    "4dU3E57Dp2fjdpo9MnNNVpGNN4rbDXWzXbvePUCERyj8fQVZgXKNBamz2Uex6QueaRzGZ6UhRSofuvCLnndGQCTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bRqtcuLbkooo4Eqyjau2sggHcMzpUfoTv8mb5rFnPzPWrgPmdgETuuG6qsT3ZNLossjoPe7EfmNDLjWqo7oHXZD",
  "key1": "45KYmvKoYUoT3VeXctMxKohbaGna26iP2jghxoHZQMMWzwCezP2ZsBrLDMFKmkSF7V7P2egKQszUHSSqFtX68CWA",
  "key2": "3xcrWc7PV4XtDQsfn4y5mELjRN77yT6z1Lrtfnp6Ynn3i5hy8KcrU2HdqpkqeCoV6Q6ag7mk6hbHaX4p9D3jQCK6",
  "key3": "4FXZsa8AqCWbLEkfeLybjqZafxVYNApNZecWQTAmgGfhwTuf7JFhdwqod7MY7D6LEyB23zSVfqmdzbAneZ9tsyng",
  "key4": "3o8eSinhRnLswfVwpzkMCQTb6tqSdVCz2GJxmmm8vaCsys9tBc9PQ7fzwRJbCzRV2oTCirjAPvR3Q26Bu5hy3PGT",
  "key5": "5r8zrXFVNr7C7kT1sa5UFXxqamnh2eiZiUkSbwKqugGU5pNvqKmHFrtR8c2WcDpbRHDcP18dVb2LGYja5pbpexRr",
  "key6": "4LsearxaagNecVAV1KC7Z3PfXNKnantZ9FSpS6yxyKEfMdDMAMVCMTh3xyxQYFn71Wew8ZjpBt7qygSP75yvr51A",
  "key7": "44p4SvaaZwFtaFntyujtYTXYABJ4TLAeuP9Srqs2K8xkAnjJHGpvKpiMHipYfxNAPerP8tXk24rjYQVdY1e7Q8Po",
  "key8": "2zcmjGk6pTJKQXydeqP2aiBbRLuBebFL4pgoDdm5P6v7wqAVntAQehvsaY2fwtjqvZbaXHRBKReqi4Sisr3rC9Lc",
  "key9": "62RCpoVquR3zRG6jxiPiu7yBHAEjtKQMpyj3PXqrfP8Sm6nDscWb9u4MQ8Eqntppep9vyrd8g4UEh3Ezw463T7QN",
  "key10": "4vYbJWVfBfTkLgUG5A7wqghwPkcPJKf4RwPPC9Xt9ZjfVzPpd9Dsw2FS2sWR6VKbUpT9vGwtb1mc2hRxVTQT4Lf6",
  "key11": "3cBFPP2VWATZt7v7xNLp6oUFXWSm3CGCmmtVjBMGcw6DtEbEQNkQpHxJYsR3zJH2CokHV6G6aHEgtmaf2X8w4oqf",
  "key12": "4LghkLrhQtseRN15MnQtyaML69piLvBpwhqq52pE1yhGh5kBYoo8SikXaLxCD9M8r6dmWTC9EWZ5cCQ45JhTFSEP",
  "key13": "3pUacXFd4DvcKDKUNs4dzAWXs42uBGAHHQnFTF2jCm34FneieaE62q22K9dD71jq2ZxGUD1JfFEuXm7uQyaaiGXc",
  "key14": "4HwRDxdjJxL2YJnRyfd16S14F4B6YWBGhU5AeKk5gpPgrKaaytnC1Y93fB9uz2ADhAUe25RGPbp9M378nVjS3BL7",
  "key15": "12P5qKkqUkeq2tSPQMPvNgw6Ct3VDVZ6Dt4fQ9gnDj1ps3rkFcu2rNexw4Qt4oT1MMAtauiDPdFhVaKEogfMn5u",
  "key16": "5mPy4B1smaeqBTddjM1gGFnRcdXSGsenCxBWzKHRaTV6QH9HvVKfvPvvk9ARqFEX4TptTNVxe1Ju9aqH2VijzYoo",
  "key17": "4EdRF4iHpE68x3ncuaV6EUjbDZUvW2TKp8UB7LbXk74NNUkLHKPq6zBautKHY5fdsckfTLbtEjQHqfKHdXu1g7gP",
  "key18": "2eKwcAetUAS3xEUBCR6vvbTyMgBdjFGjsFdd58UqQznASNuWkkofMevv7pQB938p47CQSV9WQVP2qkJyGGbq7PcE",
  "key19": "4nzPQNuANoWp8AEJPWq922n44puoSA1sGzhMjc8cPbVUR6VSZwqXZDAKu49Yf8hk8FeHdXwATShWfQDxWZJZRE3i",
  "key20": "5tfkRCtmPPe94dsVjK3Y7aKjauMdvBCWs4MHXsrkmgqSMCn2qgHGrfgvWu9PpZiQjYaZy1LstCrfbTYtRbEZDULr",
  "key21": "g4yaCN18Kjj1XiCVB1n45sgoFcDJKFtHxTg6mXY2G9b3DcaruGLyqGXiL7jG4Cu4ZAStZ5EhbnuoyuUiJMrMsrF",
  "key22": "3nec9w9vBaojQoBRvvh46Q8px4wfgdkpUdSy6Joz9wR1HxtwKxLNKVncroeu1kmAeg9K83NNYT7mffGKrYqJowEA",
  "key23": "3BJSbjpocpusic1xsgJoJnihzMWm9XvaGyxLhk8oqXnYHMBXaYBe21VPnQCszVgvEwMDSHcstecQKRj6BjjrfdLv",
  "key24": "3pH8fbAhTjVaTtGjFoddHSi3WffsjqBQTZQejAJ6QaC619w95dWXQ3i8mcxBubzFxrVrwihJgg36dzNrofEfRw36",
  "key25": "5pNPb4Sf6mWeQ6zJEHsusoAUQJ83DrJBNcQN3B9ZG9ZXA3shXoGhgHpXM5hKWGJ6qfS1B9m8zJPm1BQfHKKHzMYQ",
  "key26": "3D3Y29DZ6FXA6RWe3n87yC6CcpPH53pGjnzdwMz6gJNHiFWptRDMXy8WJfFfwc48e3pPDJz6fMXnxY4nBrj3K2v4",
  "key27": "27tkmJ2DXRA8oShYMnWmkwqkhW6bFKKfZFmjgvoME9aqscNsN9PZMz5TGoCXihCX7cFRY8EA1g6oVeGhzkuSvJte",
  "key28": "5cm2ZHryF4uiRchdStZ2KaKxLYFxmGe9eSm1eoNXKK3ZVCUqHyjRvLB7LiFqDxo8gfawXHRXYbVFeAjwaha3xCb8",
  "key29": "3atVLiG4Z9BtF76LsuivigUGNAPJgViG6M2Z25d3gAZKo81UHseR6m5TWkEKe47JnWVdTAbd7X16EHC2YTQqeXX8"
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
