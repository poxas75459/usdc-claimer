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
    "2xk1AWVxvbB76NjejtqjjvoPjuELfwD2u6B3FjFi9Xs6Pn5R2fFUPeQSpcz14S41HDvfT6uDXG3tXPQnvMcuKJ9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjQBxawvfiCRbztmcG8DC3oq4vF11APN4ssD46fAAEFakPjH4H2qnL8sWHD2zVSRYKEhsoAEyuKRGELLGExVXsn",
  "key1": "3h9cGrvErLQLUn5A3edxfxFfWRRy1anbaEdgBoGnFan25njFJn3WMDyXMFjS6iwactBDVvQxUwv9YNZxYZhTFQwL",
  "key2": "h37nkygPqrV16tWUD8fxYtQivS7GPCL9eQTAa8GqBZHNznnBxRd4arPpWeAwg7yZdHQ4zCmPPCKMSHd7C16X7ZM",
  "key3": "5RkB3dMYtKGwLgRmTCNbkGTAWDSJTE9HDbsrnprD4EvS2sbqRjnDN1xJZjkoPnXajhJG7R51HLKTcao7jpS3VVsH",
  "key4": "5uBMJEGWW5nUj4z6VdRenTvi8QN4hzfnLAcmJx6krNwvaWkwBPW32RFCHzdWjVRoJtTD8vYWkvZGQxFYtaNU36Qn",
  "key5": "39npvHVP1UkptMSi9MzFiBmkySYqFNcCjZWSwr7WTVvERXdNyqS83oErMSn7P6QA1Bp4r1JDsW1Y8oWqV3VtEMYA",
  "key6": "6GAa57Su8aG893vZWJAExDnVpEeYUMqX1pNpP1ymsBcedEG9RbN5iFPdS1hoM5GdCtcFg598Qt2FmteYvFYEYK2",
  "key7": "4L7dVYpZW3EnJ4nDrmWsoufDNDb7mVF1e6ZwqSJYX4DXc1PWFfEnFvWxNKHS9awdWE62EymNwJzPE49uV8A3UzFJ",
  "key8": "vAoZ72z4ecnmeUxSShzdwt2RqNbbDPUCU7tDFkpP8k5APMtoJGh9mVSaA36NT1jcQLx6kZ6EUtfyVfzwHrDUQth",
  "key9": "4cHRFFQspV4JYEPdXYcyJQTvpp25aagwwGqzMVgd2H4hdg1GXcxdUMstvrgBgnbCe8S4kXLXteC4QNrNVaPAnqkC",
  "key10": "bw3z7bwND9JSjahkvHiD7GNrypZm6jHPLcuRiHntVLUxoj3YvjnxcqR4A8ZvLXmk6rxQ1ZMsExFk6hpY8WRvHrC",
  "key11": "5YoqRs59Cbis7kYMMZvQcDszbxLhnhbU4JbgxnLsdP6W48y91rieKR8JheQvdPtARW5ZZ51WVoS29eRXeSZU3Zp",
  "key12": "3wf2U9aSfEB7ZnXLrQ9qA1SrZGLPBCKgtauQfC5TVDazhZNReQRDv3HkL9nuwtQ9dsLyTESKkxXLPAX38aX2Vnfv",
  "key13": "Un4BqBHts8X9BwVfE9K3mPRjtiUng6iERMtfHHEuQNXgTvz18KwQboFVdiYDpgSmgLrJWFgQUE8S1gXxu1e7eSb",
  "key14": "5pCUeUthyyHfP1uKfguhtEBUVMMMyXtUwGVvtht7nNTYYbgVe36yNF3CVsDYrrjBuxRc2fzfY6xQQvbyGRycNZKp",
  "key15": "FnQ3S9mchMcJXtF5QA7Lp41T7VfTW6EGCmtpLBqfr8QuDqkcv8B9rbUK3REGg6p8JAFvrsvGEK2g26sLZrFfp8j",
  "key16": "fq6oF4KiF6ao7UGEi8AsBkpXj9N5PgCyTUCqcvpxEp2fBX3ZGSLjBLChuQDJFNUobya9KKwgesgWfm58eZKRemE",
  "key17": "f3ZSLaVMsNP5rwGKEnjZyTVozzAu6SW5f2pXw62Q2Q5TxD7nyiwUDRLDxb8dkySkbNjnyrK7VPsC8g6M4CdA77P",
  "key18": "5EPdhGgxJnnEciX2qsiEa5S4iqFW6ENQDg5Z6xGCmfZ3hGCGaxA4n2hAiBV8CNzdx9W3qdmwQ27nVi9zmSvqRzfy",
  "key19": "3dF99jZKhJHakV2nwSRxQ4VSLSsKPetFpg5qjQMbNWcFxKWcdMQpo5r2r3vKEfsrYSBKGMXDKAcZCUY6qFw2prEi",
  "key20": "4ScKTJfHFdyDoziCVu23vbSYATEwtRoPbiLsgB4or33y8VDoxjnThYk5va6bw1orihJGfZxqnXnyPgfAngNScx9Q",
  "key21": "2ioGjmEyLy6nS8GBn7raxkRpS5m1hYxgMT8PoytJ4B5Ai3TLjjebSGn3BQSn6fsCQ1iei4iqYMjrQFNzbgUEzn1Z",
  "key22": "5ktos2ToUeSdQ55HNG5BnzrtKzF7QGZzFzhsHDRpAXFh8whxPW9vkLZ6zYu9HiQFejMzTuwXSXHzwt4DkdF5BkUJ",
  "key23": "ZXcxrZjNPFfJ3qXZEGNrJLsdMTPrWSDVAYEKYYBp6Vw87egGB4ZmfXyvic7LqL7TnKHLBGjtpb98rXr9cJP6Vs4",
  "key24": "3qfySLHpwsUK9DfmrGCYH3n2SUDrTsjpfrxLMUA5j6t94ZbaqXgHe4qp5xxPTiBd46D8y2m2gxZ2cd8F6hQXkJ15",
  "key25": "4vifP83a9Tcgbx85SubvNBMb9yLi3uT235jP4EkYhUzCetNiLmS9dJmChukrXvbZx6uemrBqXeYQWWw76YcWuPdQ",
  "key26": "rFmCXSySGjarAsVfqgEYXjn51MP9ExC9yW2MSPsoUUTu3XcTZSytKvduiND1TpHQmnmsXMxi79n9s9b1P7ZVRkE",
  "key27": "4qh6Xf2SxCDpdioWAwMuhSDRiro1HsHTnz1HTFR17jXPptaSDmE8YETS7fqGohnk7vyKxFq5JghXskLFYhyadFKP"
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
