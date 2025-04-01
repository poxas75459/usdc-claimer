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
    "29cqYXwbVyfMNTYH2wMRgRDfKJwubGQZoG3eN1VXu8ybnDZE5wWPU1hhVZohVCbKFVkdtnLwGVPhPtZnDcFkEZkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekqYid3H8Gio6f6b3af9cP4VtfQRMri64nxe6vJfB9hrjmbcSTKHs25EhuejpnAYieudRUGAK634tBb2msF4Po7",
  "key1": "2tGxdXzWhQjo8UJJ6dii97Q5twa6sERETCub8y7RhPuk4Y2R84Agzp2PdaT93PJLDUnmRGUGXYJdZm5mq1K2NM8H",
  "key2": "5jCZzQy4acq1NKQyY4peVYWkyVNNDmBDk8wfXtopQkAkhwm7JgnsxCzigRjg9gk6QpMwemNnofCKefZK4w73zPnd",
  "key3": "5GpJHa35YRNtZzyjXR8TkjJai17xwYHkCpf5Cxo3izvm3CZs8R57fYAc6S3joA9EBUDhzo9h8u4GB5k4T6DwHf8u",
  "key4": "3PdjvK7AdmQVPpr1vPh4b4ct4nduzrLdRedNFsHqqfDBFpXErCCegjtTbG1ccjnBu3RkZ9EDUCPf4CjHtaZmbeNV",
  "key5": "hBPnV4gFhi8HikqCSDK7ib8ZemSTUyNhUn2DoNCYEFz1kQdzQsBpTVdmfftYVrDP3Kot6JyJcwm3yyLZzvdoKJW",
  "key6": "3MLHryQFfXwbFMhWx3yUNZ3ggh2r6px364AvxKayMjMV5QnCAFrn3AseJHpc15dKdf2GNqh9WHzbBc5duxxEiDX7",
  "key7": "4uNYtdggnH9HCJ1thX99d2FptTxUvXT7HTeu8ZQ1N8KPrQyJJeqpJrZuLhYXM6L8LojtFWcwzHiEnhGiPfdiTJCd",
  "key8": "2FojLRj254gLQzMJPcTauZsWaLBDx2NCdrkTwF8D1AvkS15SaMRQspz2tnkNxeyUzz8TEGdFT7iZmtMj3SxuNmdL",
  "key9": "32jogZDbzT5V84BMisYWff3CeUnov2rcooW7EA4p6CV5L4zx9WX7iN34pg3XtLMx61me5aohb2Hj3CqRiN6AYXC8",
  "key10": "WpSShwDCZHB8ptiKbHrHJERXRZM6QM3GdUQ1wEnQRbSxUf9oQ6GbEi7KaUnHxvanqkYzcJKZCzX86bBraifedpp",
  "key11": "5NNWK1rnvqnwk7q5a8GftXEzzJwms3ypUKn6LSmEWftZCcFgr8BK56G9pM9ggMiAoPgNkH2QsitsfZUBd3DxDHuu",
  "key12": "4EjRSqiTjhP2mGAj9DJQsyrYC18GMpq2oUBx8NUdZQB9TeFcEZ6ZZSvmqb5uKL5NuafXBA4KWZDASmma5B92m73b",
  "key13": "2yN6qW5SLFCkMxgcrpDpKfqAErz5bVFEwRG1zJzfJnZYrtza8LwFK6gA7U37TFw14RAsZGUDjQa5mankktJLNv15",
  "key14": "2GRAjcfdHD3NwbNi99DJZwTXU5j8gQxyqZ32Vz7EDpqTC4FswoEsTUBqQPzhwkkazKfD3yyVV3YnpWQMB8QJwYBu",
  "key15": "5q1EmbgNTkDzEFSML6srasBhQHj8Vx5HqniZYdV2gRHyLPaHxTPwiWqi9tjJqjC7R8tr1WY2Rs9mNt2yZv4Q4vvN",
  "key16": "tdcRLHrEBeuNzGBUvq371F84WDujaeUeyhJkA9wa83iqvGGRJkVxYUjjiQMLtgvHZy6w5NanCiCUKMR7n3Kew6H",
  "key17": "2mUvGc6oyWuVT7aSb1KD33DoCqNejEJUQxbbY5egvwS6QixH2yRqG2bqKYRtTeua3yuKQiqDFCCeKkf85Uc4qmd5",
  "key18": "2FbxZbXPwRoVr3LSBmNwWqYkfHBucBLAi1cySoWCKRY58VNZFY7cVc8noWzcpYtwYWrHHjhEugRpSFmFV6Srbz1R",
  "key19": "2RUk6tih1SDbwi4qZMKTNsVHmUjaGi2i5h5jTK3vnvrcLHFkd1GMmzbPHwqW7Zs4JkMxCyM3nF2LdEvynzzNh7Np",
  "key20": "58CsXeqC3jHsg9pJu9iNJ59b1Pm5uYAJ8MEgNqeRa7xdqc6tpCdzP3wLc4dTy8eNWPaMw4Soi5djcf7QeDV7kNuV",
  "key21": "2SaQPyTGBHLWqksAjyPUf9QKje97uPuzTyinLfgxoyVaWbMypifcyKZNFMoUcb9B15XcCV6thWqEjHn7ZMi1xyeB",
  "key22": "RxRLTZqCxn9Mb5ZFwkbHUoCnQCuhebUS9NpmJ2xer4RZhki3dSPiAxTfkCVCuWYmeRtKLPyKVnVd5rWYXX7NiLL",
  "key23": "Szo4dzmgGzUEF2CJfFT1C663uJJyPB4ni1M7cFyj5WFq1Mxbk5QZ33obeqRJXC7WeWxojBT7DWKYjqLSv4fSBCA",
  "key24": "5znYEhxB6DFWXnkiVX8zqR5YCV2Zz6t5LEv9ogJFxijLnzS5XFCeDae5qkksNDt8fT3VcybuZCeF7UG8kNaw6CTc",
  "key25": "33BzcLD2sp3CXBk4gpDFZGHQvyoNbBmdfCv97HLiH6mBBq9r4QhoebJMKKsTX658NYQ7HkiSVn6vhnui3d2z92QR",
  "key26": "41z5FPhgNdVou1tC7LfKqTcTDxDPqA5ZGRByA7XgxXxyXSz82BfkAKoG8TJpiTTdRhVtxEsPKDWJP1RoemQA7dBC",
  "key27": "26XdsjB3N9ADTSZbgRETTzS2h45W8vutraZTH2mfW4k4m2RE5mJZFzT3A7hBKSGDsiGxctfnB9YLYW9NudD1a8zR",
  "key28": "4vL4NnkZn1YfPosknvgid6YV7sgx2KJXeT38y1zrUFnC5pdKvSCpyViKUs9mrdYndvTdajFUmJKdC1JcdDFX26Pj",
  "key29": "5eZ5W5Gbo4ygX6fZvnMbbL6MH2azvgzwB2UcfTUXwFQuw6ATvTGDuLNcWTExN1NFSxhs84gUYKTx3SvPXK9Netnz"
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
