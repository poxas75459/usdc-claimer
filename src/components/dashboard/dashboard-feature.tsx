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
    "61DyPfAjmiwTPw8znkY6z7H2fsV3C9xGfJqv8bYvXxEMnwXetMjvpvTB6wNidhTQYkLj9kByuTJabyNXyRS62KKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBgVhExF4FqLactsHoKPQUYiBQB3FPUkbzdeJDWC2VuwiZg8Moc7Hv6ES3HZMJ4qjVR3yXSyd5eBgmuqZc2AR4W",
  "key1": "3rqGx3d5rd6x23NMUewHy9iBDVpiNDgMDQabnmdnQ8Sszicnb55AJkjN6ronLoq1XguAP7pZvj6uVixAWR3Cin7Q",
  "key2": "3x4n1DxQ5iP3VMik7C5usQ16zUxzGDd8FnxU2FcsF8aWFt8WKL6boxPWvqNbJ43WZLKKLTpBAGXz4eoyUKjpM5Td",
  "key3": "xgWLR7MJ3yi4tbQtwa9D5i5rUAE9PmHrZXSPfB2LCLoSdeSwYQTv5makcYfyrYQGNcQQsMqVffmZJBBba8aJgZK",
  "key4": "2xGdJRNgh6qEU1sxN35Zj8JMSYNKsibBZzfoAs7RmtXS1iyD5Eki2eBDsnCmNLMjyYrqJC1PVuP21qoBNXYgHjTB",
  "key5": "4CKx4c7sEjWcU4S9XJGdv26xbRDW2SQcxfQhVbCY1KuSJxxMVgwHF1dQaSL3LMES3hSbPXiGdXh8wX6SVL9PUyr5",
  "key6": "4ruLcAYe5E9o8dN2Au1Uv7nThzcxG8jTmU7nxuo26tzzJjrr777eYWY2E8xCPZQXtBCUaRThwHLxBUXre1SBhRgY",
  "key7": "5foLkKtT2U3iXZUh7CSfyGYXDyS5FkSuQpqntWCnzrk45My7tG2qTM6d8ekvPzY8dxvDHK3uPfGr9SFugHAqnWde",
  "key8": "4jvxeJskGP1wDrRskJ4umHzDAXuqiTxCZiRiJ75dy2cYuvyh2vQL9adBZoaBD17xYVUSvf3XTQFpw53jRyA2ZvM7",
  "key9": "4c9Civ6sXmM9hGTCAT7tt1pCqKpbugc6YLhnjrv3zNswkPczW1ucFeSXtHspW9gNye1EUXerV1vVWShok2EPkxGH",
  "key10": "5xtkUAJjEww1cQnnP1r72tLtUAHSiQicMk5w2hqJZykTvvd6C6WEM4bs87ZJd1FRovTvRkKMdFZAFazDF3EGchPK",
  "key11": "4AL7StNNz6djAmQTpQ1wn91kAZLaozU8Rp1TxiqdUu87Lx3at3xjZS2hWcunN4B7GwXouLhgEkTnYphDzVLW2Db7",
  "key12": "2FCWojLpTTcw65orVPyhFxwsSDNq79pzLCpy6hfRuGw4bTVnZ351QVjWgL8o4QsijHptono7LEALQ5ZwGLJzLNLi",
  "key13": "XzKCug6WinNCsAuAhqBesDREGKmTHs1WqpGuvRthNvLJm8QCRzivaKcsxQDo7UhFsZ1osv5NhFR4wEmAtbkFUea",
  "key14": "3D24rD2axCnum2BV1TzXuh9Q3R9RekD3aUgKHwkucdk1seEbS5Tg4yxLpN427sMasEQnncLbQDcv68mbxgDi1kHS",
  "key15": "2hUf2kB3Mq75kXVD8up6EBdWd35Z1722nrtZGsaKpzBj9Go59QrNBFfbTV7u3aQ4w9zJLLBmNowqWeoHM5yNAqq6",
  "key16": "5Qoie5AzvX3QhfnCtAYKAmTCLhDAQJXywRQWTmRVsGMQQkiyHtbNwLVYh7v52TVubhMDqSh8iAojVkgxUg8e7ShZ",
  "key17": "hw1kbfWNLBNpHY7UkV3K8x3hy1p3pWSEjXPSEjA75jW6o5xWjjfTPiXQsiemLGikqFMqVpteTgNLvLpYzUVKzmP",
  "key18": "3YWrEBs2Tx7pPwnth3CyzpDTNAt34amd1wr13bUFDnFu3Qhx4hLUFWMmCgnEs3ypFQekcPUmFqBrMaQYhKvJFPkC",
  "key19": "3P4NkWgA2ceD6RyoXsGjp4uxFYMiEnF3tuL2hSQ5vV1pAmCe4cdMHx71zsthkuQRvXBFdh4NnF3BswQfaaybthai",
  "key20": "PmFWgPdyghmLJedy6diCffxPKhF6Tyh91LYsb5SRBtKfN7Q2Z9NWw4NyzM9M6kQCwXeV5Qu9yxk2rkMQhdPZTYn",
  "key21": "5VGVVkNK3TokLKb97W64j2h68g8vAGp5oLppxW9TaCxMSQ7akJ3ehgJB6YogMPkCxCcutJs8VT9mGa7waTXyEbmF",
  "key22": "5Lw49RyfCWDah6CcKUPLJnHHvCQReCWksVjYdQwr9DMzT1bPeojrPN7HVBTYMxLckF2Rf29zNMpxJsH9ezLXDBne",
  "key23": "2BHjyF2FJk1fsBgeSA97R39ptQDjKPqRmJdCFWge88KBTs84RAqfqhT6ZjayzGkbPSuhpKV8G5qfs5xuCwntY5TE",
  "key24": "2RYMeSqaszojREhDvHCaDH1r3bkXjeYKyr3E1fLcw7oRAvhRKcZpVgFvGcX1MRGwn6zAvDDUvAxcN2X1oi169u6q",
  "key25": "4iGdVVv9KmYRAhvz9bUemNtEBFTtp4iPawtfgFpxzg4ahvmKC9TZjaC6nU5KZUP7p7Z9sYRLxTRTTGcZEDp8QTU5",
  "key26": "34W3RqJvy3grjVdgssYnHmarA33Z6xxbY5vAhk5ijvePgqC1sg3xXTwD7NgZuv3CXj5pHC1LE5JWQEbtCrSYfUXn",
  "key27": "2LrivncgwtgGFynG2Tqv2rRNqUCtQ9wixbP1gdMCQynMEes86hWSHfN5MfAhHTo8Ln476FWLiBFkgpxGPcDLKje5",
  "key28": "2Rqkp1mMMo7azbtZ3xBg4HJRn4mj4aBsrKivHaPKvReRAsYJPPR5i69CWF5RfBdMiwpYHV9KdcXTujdbhBpertAB",
  "key29": "4vXrccuFfCDS8qCDPBD8UPSePDYeYSwdoq6pbBKDhUunitjR1vj3NimsDhd8Rxf2gjQvv6BENHPLbCcZJVRsZYQt",
  "key30": "3EpNuJ8BS8vQMFjZvkQ91mBe1sC4NpTrhAcTAcScWFQRYrJ3qrMHq5PKD6uWCGRxecyqJ8vyJHSmzvjyWy6yX6q1",
  "key31": "57NkDSnH7eXynUc5k4kh3YCWLgFPThRfXQC8RfTYWovnGax7kFpD7NKeFAbymM5e86mST8dUQNpdMvadhqHdWvW2"
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
