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
    "2m78FEYyFAfJYQMGnU8pd4g9hzf1cNmjNwA7fhnS16Po8WTds1ZM1PGvmxD7iVUa589kB4Wev4MFBAyxzs94RLBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJ1UprcXhkJ63mq56MALPRQpbCPUuT93wUEDe9JUm3ohDBqYsW4FzbYHuAdXgxqyf3gFETs3Vs8FUTFRnSNvxJg",
  "key1": "35gsaa8ZSVNiFE3PUYGtw37gbaBsuk6MkgQwXfrfNsor4kCVePuJJDBhYYkEP9EGiigHD6tFL3X98CD18RAj7bWv",
  "key2": "5KgdcQRZ6Dk9qinEQyJ44LpCWZe4NdpwN5LRuamcBQEp6dBuBisRqpRDU9XoBbHfbPyab3v1eBVXKnYiHU6ymiLB",
  "key3": "XKVL2bQd3NZ2r1wjxpoyouXNELi2ZnJZqsNdRQr6x1qvts2Bmj9hC6AcN2sNDarp2XqZ8HHYztcyZa1auuEFkW3",
  "key4": "4cxPCnDjUZvrfYZjpD6c7QasazAkndsBVGjBznhPFZigMJypApbc2kk8UC4Jc6YXxkrPnBddUZMqn3JhT2gST455",
  "key5": "2qiD46YmRpL5tKC97XpNbFjUnSN5AY2PBXWpeuhp76h86SpJhpvoghHNwdsdcMG4gdBpkWCYACQgJ1Rh2W9Vfm6t",
  "key6": "3pEv6eFh6SCA7DeNLKabJ32FwjY9V4wAxDMcQHagNx3zcegUgxGUwRKhaDBAZWDbkpmJmRrMYkWgJVJKH6RBHbbZ",
  "key7": "4AzeWLBAncBKfLaz6DDrmEUnLCeHZNqnjp1KXbQYruNgcT7nBt5nUy4hkkLpNMqQJP48jcy82Pnn2Pug4AVqpNMa",
  "key8": "W8CzZBRfXNpQtWnmAzWMcwqk6hy9vKxWcHmCtLnshfovy7Ln1D2nX4dvPYs9oJLWDhHs2yhcN1HJUT9gM9kmpNR",
  "key9": "55sH1UYgkFVnmRJVn8vQwg2wKpiqY88HhBzN7Y9MC6GvUp3XS1HcYPvs2B7ZNuudhvJ5V1CM1uZgdiKEsNntcJfj",
  "key10": "24HoH8RH8iCisLmmZPeW9KNM7E8B8qZq82X6PVcMJ8gpYNo4z6DKok7nHwAbcxXk6SHMd9KwcoaLppruXezPuGaZ",
  "key11": "4fz9erNtUBX7vYyy8KV8NLepXo9yXumUDYtHRb99YjVPfs25ffUiReHH4mD9bPvGuYMY6TRTeAqvJx6YrERVxpx2",
  "key12": "2X9rC5HbxnTzf8CvaTKqb8eKwxwcZztnLSFhiBLT646gJT5Zu6gujGiuM9nYTrCQidKHaqZKnyKYRJWz8Uq333Qt",
  "key13": "3qgz1YaCNaaCkXQuZPZBApMSMc3P1o3h8cPcErPaPznmDbfP5QNw2iBpK1rteh3zgnGhhHHTqFDmquYQLLXt8w2n",
  "key14": "2PHEMfKF2sFV9XGRuz5LbpbAxTd4V1PuJeDTK1hcr2cbe96K5U7zNQREArJKpaJNZdQhdraWJN13SKFhNeMmuCfs",
  "key15": "4ePVBH4ypjPSFLWumUiJhuQC6P9JZ7MSUxzrWj3trfyfXUzdkj1Bez5Sr5uYjT49vSLJUP4mrzoiAGCGFcg9jaxy",
  "key16": "3KjNmZc1Q2EiSHs7FWFUZ1MzKfmCR7oq3np4rxhqkM8cVvBhrTEN3KSkbWQVfY6mUh8tW3mnSUiCvGAQjWKK6Qz9",
  "key17": "3Y78PHMJVbWM2ZbE6EnzUPC8iK1DkQHicijDNa1o99wgRgN1jXA9sQLHALxwu1iiVQxjAm5CBEe7chKPNqNJt9Eb",
  "key18": "476muGTxL2mTmeazQYEbDehzxPxxm7Gr5mqsePLdUStmwnd766o9gv7VunjEtkMz98c8cgxDurTVakcXbBGP4oAy",
  "key19": "4tEcCXkSj2YDepMwniioM2fZVMaD5joo6JCHipJr7cYiu9z5xPRsk7JzoqsAjYfidThekWG6cbQNLbvtozbwH7Xm",
  "key20": "2ppFENso5jqSd8eqPX2g9BQdr3dzX29cBTd6JntAP2zhFka2892MLCvxQmXCYdNAdufZrLAXuhysiLPS84s3g5F1",
  "key21": "32sgH7wENCCCZuFj7nxgTfthMHgtgb6mctF9snFkBsHiekwtaa7iQY53Fc2HqNiwb1RGcCWLv4ahtsQj66X2mQ1L",
  "key22": "342Gc3KNLBsLfbpguB6HEMA8DgcT5QPAmAM25T3sf84cc41Mvbi7zr9zSQNikgxG3Em1L2Km5tbCgLS61GdvRYen",
  "key23": "3ZxULPduK7qcWH1xcH8seD5p98m1F9cpY5tTr7FXNxMa1s4whMZSaQevFD1jU86g9XJXwrJz2G5SaNh4ZQjTtaxZ",
  "key24": "51NmTYBhrkrEYx6Uf7zQuFUEwVcTJqeT8fB7B1RKuGWvuXP6LkzQbmGFSy6VeQSZmFiWUDzzN4JSjYsS9jjkxXsj",
  "key25": "2Mm3XRQiQs3jDR43oKup8rpmFcHz7Gd8t4eNE7pQ9WAFicJYMa2q4R73UwbFbYqWmMxkbDczr6ns8suQc2WGm5NE",
  "key26": "4AqYTVsTk5TkTU7EyifZdoGw3iEivHYxMaxjg8UEUsW2dg6yArprJ3kPMm5ZLqvJNfqncoQRwuP4XdZxbebsvPis",
  "key27": "3MdM4vWm8hzAP4wBAn63M15nVEa1BTXo1dMy5uBzKuDV9W4uLRBk9zRreu1HcYFUZ7siMPzuxqwL2jNMd7ubKLS2",
  "key28": "51tpR5Tf6bqQbLabyj5kABHiNTb95qiyUVbkrjKEpZNEVEDjyXpCLnsVx8P2YD62iY1BR9upXQn9D68onkEGTb8P",
  "key29": "2xTd62KeJTU4NpfJKdcCUGh6sofvd7CjEDpFWADnpARWMNgo3a6roHQTj7MpCUSxXfqC7Nb6jteGHi8fU89U3b96"
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
