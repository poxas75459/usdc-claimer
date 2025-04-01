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
    "32Cwd3qCvZGuB3Bs44DQH9ooRHTQdQpjhvuqFfhGDMBYTCSaajiqCUdXx9MYvxajM3nfaFMQjzcL3WkJDLP1EUv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfhgBooaB5jYPYytKgHQ7V26MyFmzRGBNPDMXfFmUAw5R7MUBeXfbXT5M46TJTWQ3SrCQWipJWFSm1C25kF16bx",
  "key1": "2zKrq4TCsRmakhVUi3Gs9PrbSmoiM6He7gFWBSn1AWGGY7bntH7gv17weYQzLRd7vWHkRKf6maJFBqKnduSPczpE",
  "key2": "4kaCQX7Nfr3WuYxjpcZpJTrvJjQiCCJ27wvNFbKhyjhN8eeduGQrLuiF12ZcnnfJyqq8uqLScoaHdcYJQhcAbUXy",
  "key3": "5qYwr6xoxQZDfbifejBzLmPSLTXcFQ5PQaFN7w2sd9Be5pPACCev1HKSFSxBqGjRMJPJ6PTHvLWhEju8sAQfEAJH",
  "key4": "572TQCt4ujc8cE4Rru8ajMwCciSsxJd9YLwxA7aGvYVpuv2tsXmd3hkV65tk6A7ZUJU4gcLJQm3ZvwcyQ8iyscE",
  "key5": "4zMQ4zmGViMoauq9APmE1Mh8zfJQCzWGA1nw7AJ4PnLQc8iuKJeMBVt4wt4AJhKZEc6qpuyfT9KpLEHM5WjPyvCv",
  "key6": "34SPr4P6EDEUcg3mKvzJraJxnmZ71bqdW6BfnzDb44LRty4EyZLwzUM8Au7dgeZPRT1G4ythDVDW1WynEVDNhzsS",
  "key7": "3vGBSrWwzK9xRRR3CvKjVrQfaUFFQDHU9bVyG5aR3F4bHjqMTbn2ggtL9zUcaTXm7A6N6zkCDgzECNSeq2PAWaQi",
  "key8": "5ywSUtfgZPrypAAZZKKxLuzkLHMjiuEAx4Cni4BzkMSKM2XZj3oSSCRPCuwF6zA6kw7uyxKV52adMZMjDhhRWx1n",
  "key9": "2qGHcnTRcCv1AYsnefiHAUZu5RQRj6SENhxMp9EcSVjdJcPLRibpSQrcf2wBZGkGAuoAbjF9uX25HpkKbGAdqzNs",
  "key10": "m77j2JriAUuo8UdCcYqqF4x5hNHD7uc8cVbnddBbXcL2mHf5BbNPSXRMUXpHbCaXKdBhfDVsmjvHTgrB9AwUsqQ",
  "key11": "3SJkKd8gjWF7FTkghz1u2yYgiA6XmpdDdxCuh95iX9mEpP73d8C2QGzMCUZGyUmiTp6eENjsXPC785djPxKDWmNU",
  "key12": "3s82jzxG6vadjG8AMPdDooFQvzBLEBBc7eHwbWBzKs149h9zAwgL5gCYZsLJszFDU6XNvF7RSTqejr5sXnNR1gaN",
  "key13": "4Kq3Z2TUkyhyiUCTRDWiTaAgDCMFbCNn59gRBqsrSWzVqg2qWPijZ7fL1s8ehJaRJwSX1qjVAJQDA7gN7dJiGLK6",
  "key14": "5ubbxgkabcEA5FAxGZ2JNatgEBQnGUd9yG8XgAWNYVNjyzayrBqszeeawoK937dTVY6BfSqjMxqG4VCbgGETUzn4",
  "key15": "4NtxcDGrGUcJHu7JBbf1cbwKWLAeab3BXUNawMnYXxcTsxUkyQ3n64FU7oBZ7ax3W4WPpSXpYs34SeDogkaxWPmd",
  "key16": "2jG1Y6DbeJ21R19cHhDoVNRURsRKbZLQstsSTshakMvyjqxT29qiXKNMt9jqgoegq6hPsDL6vEp7688Nzejy8iaj",
  "key17": "5epVboGjUwdmipvHtuDE3sK7xR7XVLjPkAJe45gmCn8GinHnBQeeP43KtUfAjJL493XW8eDYz6ea9TWYFWnhJFHG",
  "key18": "3aWWwXxP6PEJLHJdFhhbid2oGurXWbmZapoPYSR7KYNbXy6SJbaXV3WPHWNWAXLHtHAjc1dx5gM8ZBPKgsd3jQSC",
  "key19": "3ewqw3cEx3273m1wMTEfhSgN113dE7xhNXh9gdbYJKS2aBs3BQkcSUHB1tPHHwoDGP8JEASZDrXsdXQ286PBhHcs",
  "key20": "2ivE43b68iYvQag4rEYyYCoskRq3jVZnoZzoe44xNMPbpR7QsWSY7T4XsBhpVRPpWqFNC2yV1LotV78WTmE6UuzG",
  "key21": "2DUANAUqe4UffSvfTTrhHxyqNxw4gm7gseJ7r4jXTLUj4SKDBesMbhScRZ9SatRfbkRmJBCozrQpQ57o45sRPPVx",
  "key22": "2ZNGpiVXrxHbbTG3oY37f2uoHxpzUvoS2JyUPamYWwGKSFbusGjpsEvL6mDwVgLhmTZsHLwaXNYFFZBhTdCGuaFU",
  "key23": "5Ni4hHNLPVBHySCnh4wfAx16XvxwobbrKdYehqW2fDo3C8iVUsmo4kBZsv8z5uKWcpcbXdYBsunetCmAoBR2Rr1D",
  "key24": "2KNoCrdACScoeBqwnmmiEFGZ6qihkw4rRLBC1J8NwhzJJgQZENubhhRPERumXc5txcfsTiVx1VPQpcbzerhHXexm",
  "key25": "4tNH8b5AVVjbkGHJHZ8SwvQjThMgBPfnMKwt7ir9cgsb1dz7M4QCkHG9bmMx5FUDFTqNKwXfVpbJqY43oziPwjn6",
  "key26": "446MYTJfLu2yU2EgHhKBTq7jZLPZPDDzodPr375btdZ35iimnZpATUP1gfvsJzXmVjsJpiwEqz8Jj83v3cuT5QY9"
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
