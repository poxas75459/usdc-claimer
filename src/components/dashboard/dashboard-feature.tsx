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
    "2aQvhRfQD8LLY7Cokf16uRgBaqt6BCgfsJpnPR562MBqZNJRvjHGhqU51wz99DbeHFqdJhCcKSG9Yj2roTnFb3Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNMB5rXHJ1rdhGV3iznE8Av3ZCN2MrbmtJtBikj7a6VJiuxD8K52fa1bYwmXoqmU6zHhob4BaEwo3hQDxfhjivn",
  "key1": "3SwDKLzV1Q6GMw1PCSkPcvrjg8QZrxD5bmto4pfqsq9qQ2WNpfP3rVNgQ23BfQE2u2dHvnj83E3gki9NfNFgQDvp",
  "key2": "341GXmCMFUxC5gYPUvxNAXyxvv3xGZPBF4rtSgdsYya8K62nB4E6qXsPUeuBUKb9B9EbCSc8FC4n8zDbe8ha2rbq",
  "key3": "3mpm5FcUDMEDgWz33ixj5nrHARrkY4PUFeAnQZr9svGNLiTreFNXQec6LCiRWnc7LLPchZq3o6JHArwhKiHDJeU5",
  "key4": "5EdU9SZtnGuGYqq1gQpiP1YtWKCTjMnwEHnfRqdofL5vEm1CGzMJtoDfQQ9YT41Eu8iQRAWipZcyG2cPaQmnfHMq",
  "key5": "odeNxDDZNzkAp5KrBFUxUTxmMiMvXBR2X1h57T6g1nGU489B8cY5HaAPCVdBjAkvxhoBsaG8eUMmLgZgZ6RsZtG",
  "key6": "bsqu6iaa6PU8ULJmPDv8jAG7ZPd5nTRYp76X9RaYMtnxMoLcpi21xuMztLJHrwhhGGPMwAUJqHgodGbLRxAMqpq",
  "key7": "2iVs2d4XJcSj2i3WdyBPpPoKwxgp3mRDUCUT2YkRnB29qpSpbm2PyZ8hxsidkg6bPYyJg4zFzMkCRZByTE1rB8MU",
  "key8": "uhySgYK2buzEB4ppovD2FEj3sqN4J6tDceDCjgXjJax2B6V4PAnKHw52WUCF5nKSphjgZd1U2mSdWCFyaJhS2Es",
  "key9": "2FH9PX5kAuNH81SyP1yHNwyBbdfvLzQbTZoYcYL7QF3SoYMCideEPgCb5UQbwBpEjjB4s2VQMB2QmBL5fAZYDuXk",
  "key10": "5hXTJr3RMDgcuKtQmZhpomfVrX7pvGkKYNCZb9QjG3SeFS1QHkoY7JJqwZqMYkwHznkB42Q1KAWewFKP1mF1ejK1",
  "key11": "EkzQaR2nxKrVExVgZrhP1nJXLYoBpQEHfQPPEFwD5E13cFYHtbgyGqnbFXGjvbdQf7TrGhcUYbGBmRxYC2iK523",
  "key12": "AvRVbVBTVvEBDNr5AQEMUL1VNJEom4T3i5d5ZogvuW38Yr3SWTpnXWazYKUnyupWKkJ5b1daYi5XoVB2fEJ7SfU",
  "key13": "47ENBYheFotYhap8CkD9jtSsuvJ7uQp9ZzZA2uaAY1TyKnMzCgXosgVAL8Vhx3or4aQSKjg6hM47qMNqbPAtuAgP",
  "key14": "L147pj3PtP1pYkzuC4ApvnuScdfyRhJq2dMmr8y7qJcCwm3ZWykWyYV2bw82LQ9pc1AZaraHet24xhFf8uyu7q3",
  "key15": "2t5YbFwXiANiXxM7xeoEjvLXCJER4cAc1Ned4mjz7pR1Qz2H1PUnmoYTCMMVRrfNc1Z3jLe9QHLr2Yj5dnjNpeW9",
  "key16": "3njhsLdkH2JLv311oakigofbr4j9Y7Hvuudz82ZyrX3rYN6oSS7bhdTbzg4vibK7aRN8QR3k4QfLMV8Aj7k1obG6",
  "key17": "2NcDR8NuMNGuByvHjS51jtp4DBmQEYYQ4JrTYeBo2MekPcRMszUGAi1Ufuat8rsHyYKqC81hG5reB3nD4optzCxC",
  "key18": "324SCS1iVixaYY9X63pgejhvf9bvZ86i5NFc4SVpSoxixzdmmrYLgeXpdGMXAGtG9548Kk3rK7QUv3prAYJniTWB",
  "key19": "5As5WtPC9ovYFTHTaZcpndpA8vddv1xQZ57bGrwVetaWdgKWa5CGb5qkgm4wU7a2dGQdBCbMwFRhwYMpfbRUSTqn",
  "key20": "mHveEHRS9eaS2BpukdSW1id8XDh5UKwzjAgBuAGRx6oa5oGPsV44R7rvDhnvvst2LyqjSHA6XLGGP5kobg1ppea",
  "key21": "4qkdXuhbBpLonXfPu5pfNcpnYbncJqANLwPjntgv56KhBZf4asMRRo5mRvaDdQskPGphN1nKnoCjEdqyBVz34hT",
  "key22": "45nBvVG2nVV4kyKJfk555kwsNxCUMMbaXaCwz2zRB7ARLBc2bYPen1nE7K87NMYPi6NwcuggAXWLVvFSwF7RQ9Q4",
  "key23": "SRxz53mCD2MoCsW2kEJ87qL4jiawQdTdXK1wVqp7AVvMoXpzrXKbL4CVcUNp56MFWUhZ6vgjDYNqrZ55YGTgVYW",
  "key24": "5EumPDHLKss9XQ9akQCWkg1Lxnt2vHGSQti3PCFxPXpHBVNVKncZF9crn96Kg5DyMQskrLYaVdRNCAmP5qPnteBc",
  "key25": "2gNNcYCfULU78p1BRksvCQpCELCT8DefsKiMk1z2jYchUKMFmZQNMDQHzBXXHj6FanakMXzuh3L4NGacsLWnSKz8",
  "key26": "4MZ7L6qUixp9B3GRv1iFzgkdv9PJPQokdMhbZQEgewirDpSnZp3SG7QhQhtLcRk9KcmHMZK4CvszAJ45HfQxQ3qy",
  "key27": "3aFvuDUTJ75tPHwJVb31hiVewdqRCEVRT3FEXEuw7mkNDVqCYQTxHsSoq4pAVZreQt6vphnHzXCc3PNUmxQVwxcB",
  "key28": "vyv3yWRQD9tHX8mYGUjhJNne6WnQQqA1YaG45N6iUGhtaJhe9hAVGoDdts3MFkf6B6RiqQvDYTfzJNkxBCq8wGW",
  "key29": "XhVx7NimATYDj87UExx5s76k6xNJsPm8f5XRDzJk3R9xwGJ4JhcNdQk2pgNTDLhhM69Rz4drpL4neQCz128yYkR"
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
