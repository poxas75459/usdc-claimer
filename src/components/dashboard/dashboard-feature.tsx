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
    "X5SKuSPZgT9fhCLN1ZK6yYCz1ZHhiqWpsWxN5bELHgEnedkhHbRJs6uuxmQ2sMBPD3SGEZ9t24RGKkqD1KS7eaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E6sNWjApx8HXNXzuveb14cV4LrXtjDuQH3BJWn1afU5CoE5WfjKCX2YMNg7cmjn19qWjRwxdYwCWRAVf4Vn5uWK",
  "key1": "3nYKHY6G4mnaGnufsEzS6RSDqakz9XBR2BAfXziby8RCrLEDGtCtS634P4ZhijscF5mB2f79LBKP8hwDbunYJExB",
  "key2": "4fKJ2Wvb4bQY5x52ijccgXfL24Xr6d3QxRGBszpEGq2nqBtDuiYxG1iJjtXsCx7akxUtBiMRndBv7u2buUJJKzBR",
  "key3": "4Ya7psENBoVhSeqN39vZRVBge5mv7tW4hPQAEaTdWvYdyrGQY3Y1PHGQPPZLx3N9TzMkY6kevvNpLU3U23XywhGW",
  "key4": "6UAMUiaNGcsXpaxPWbUbsDPtkRoHMgAhRB6PMyA9cmzTCKmaBh4UpVKmjpEoFWre9xqTfKZ9Dn6dyoAc9k6WLqe",
  "key5": "itkyDuLaRi1AQC7hLdJcBBNLRSmsJSgJU2kv1Zi3czpHwBiP6nxPUcM65RCiGnuR11pVKq6qyAPNfKK89gW1pqV",
  "key6": "3xjuqJ66vDynwcTt3zTrFfkiKWJK6HRu6gjqJt78cfRPybizVtvtG1zXxZWVGJ2No5QnNQEDtdPVP6q67Y6Tz9P9",
  "key7": "qdLz3PsjJHXnujDs8MFhZnFwCpZPzUQA4b7bJfer9FrQi49PZW3gD7t7o9XmtboEVVHoaJePHGHFCmZkPXpMU61",
  "key8": "3mRcMF5krx4vovBFi7ZcfpsxaZLMb8sJpAn6wKyvdZC37w6FXk3ALYTtVEssysiYCQRiXcUUK3jkYMdfYC5yUnVQ",
  "key9": "q9FY4M219ZBzDqJmcktJAFwXfaSEfE7T9bpM1rgoiHJ7sZFntGH261z5PsdAarGJwyFfytSTL5JduHgbBJ87xbB",
  "key10": "2UEeFywfRKoMJY69T8Sid8qGpJaAKSsVDNDD9Adkoa5U8huj5Z9g7tc92MYPcgu5ZDhUnWSE16FTvwHLY3H9LCZ5",
  "key11": "5SH7nDdZLB3jjyYFSkAXPyUPrbNsbNjYkXWYvw8Mbh3YKyqwqceM9iX8aRecfXWk2FfA2Yx6JC6PKjQi1V54ZGrV",
  "key12": "3PTb3d5Q1F5SNtFj5gssdThxoFMQ4UzMEfbSpTPvdnQo3UYBJsn2GyjRLvaQdyuQjWE9Q1m4p2f7WN6yeLZXGGDY",
  "key13": "2vek2W8wvmPYHXH4f15TrztM2MxaKbW9CGAt21KxFJP3EMxYh83mde6QvGqipWPmunpH7HLLoZDcVuiJCPHDwv4f",
  "key14": "2PQHVLFEgxDPxc9YKNofpfbjEX4Rt5QAHkpRkiAap6J1reL6votui8pR4PdG1SqsZynauriGZoinf6zftKbvFCbt",
  "key15": "5FdR8632VSJJQVvb4L5o5mH3qHLecTySCK8CFKaWRKVsMqJ7iFYTPLWFsrYqh5DTaDzXDKQjFLC3obTsH6rPWLzK",
  "key16": "2jybtKKChAoJ6b1CSiNutqvAwqGnuoY8ibgALS54YJHgZvKT5nZ5p4vc8dVXTTL6bCSEmQCpAanARGQh8FnmwXgp",
  "key17": "1GpFZ5cfCENYbEGoiNYj3Y2BijxhzAAKw3s8FTr5HemMMBwbhdkndbySVxnBcekWvWQhZQNvZFLZbNDo7nf4EZN",
  "key18": "2J14PcV2ZpHqd2Et72SZ9jWhoHdJRd69ayuUA7xm9QW9wwSkQ2eyYirDgyAHAFf2PkpFfgWjdXwMSRPrBiAf77is",
  "key19": "49gwf2CaxDfiFhqgHX1FQRdnMdcyzpVBVm8rSYjpRGa1cNaeXwb1LkFmFXtGSdB28td2DJZMgxnBfLtU53W6ngfG",
  "key20": "jN4K62A941BrPnCYJght4mNUffJhAYNw7RJxgqnz9hrCgySR1yjTM5KT98e4K3bxGxVz1M1MHtAESc7ifwuVo1p",
  "key21": "3cNcbJzWYrknCYWJHMyenFAzqCpfpPHFw9PCcAoXvXJG5aqAvRRAJjTzqPBVNksvdGf1Kkc759FdkNgJa2BwSNdX",
  "key22": "48c439QKRbA2yJQ45tcZYBPUn8uda6X794VV1rzmNEMFgNtZBtLeQ2abU8pFpWGzVnR95te1nbMFrCDxTTrT4dGw",
  "key23": "5Qbdp9kTiYfUB9ahR34MX1a3EQdPVutkfXcAKnAoSH7LT4tB5ct4CG2TyMFfHc8KejKPGLjPjobPtaqwqymot2W5",
  "key24": "RGpyH4KDoMf2E4u47YvkwS1q2tNP9qqgr6b662LdmP8pgSJZsHCC4FUYrLqVV76GwK2tEK9yFSGLnRvnWxCmPTa",
  "key25": "3aojhHoKbzNavGRFU3R3YMMDUzb4sa4jvs5D2aeJqcZTbEC6Jhm2wyjY3z5mFSPDmUhFvTM4HcvEo9JHCk98yyJ3",
  "key26": "2U2BwcUUaay514ReZgvQi1SWJ2z6Yf6i5uGB4mZ4XBhwg6NEky7E86tDBbainsmG7esfBonJeySXGCYUXA7D1Ddt",
  "key27": "3ZYH8TB7XWEscysMMyAC9RfQX7C7PWVPW8N7oFDb1LsfGhHLpKRyC2v6ezW1XycexHwab61Hx3XLARvPwxGRxi9D",
  "key28": "2xFtBYEUbJsmQb9mAEDdM48Qprf5ZLJSc2jcJn153uhanWLgyFKu1uJDDkiporoPQNoNe2DB58Yp6VsXWjZAXVmg",
  "key29": "2911r8tQxmS5PB943t6RqT1sZd7WMCtnY619znCmdg8KTVhkyvBpDJcjWwjJtVjk4jc4pL3GeJmZ4Aq8nAgpuyBs",
  "key30": "5BNr5tSvhJmG8UysCvBXKafJuXjoS9cL6o8EzKgcz7xvcxnRnBuENN7x9rxH2zZbgmii44srcr29cjjtk7icjMmS",
  "key31": "44HaaCr2nMSoyhY39YypN2Efsi2pSezc1A7CrvVu4aQNDDsmzAAw1D46R5MXv1gJ21KTFRVawFELcQnQpRgR5nsS",
  "key32": "5EPa9fGRHzHhhhToWRVk9vbdhrz9imCvXWZrYkeQs5kEDq4tZq6kYs7QKgf5Lbw23Ww3G4KQWcRgifci1eEyYREW",
  "key33": "cKsRMZwdoEW65wwZS5rRvQakj1bMxNCsVSYC4kz1ur5LyVGMHqxBCHVgFSj2NfZRsrgvHTzZxvSadB8Yfy2HXCN",
  "key34": "4T83Mi81GuANKVfjYFat1iQzkD3HwicoqQJAfUnwbfKvrTmUAV6Q5foxQXaXkgu1FkMdRdJe3tVgGjcuFGq44g1M",
  "key35": "4Zkxp1oiSgP9NtR4uiZnrTbzobmDTfwDCa1D73FcoRAGajEmqdnfNUkqBWX9DqU7oWNnM13mUrEf4CuVhYKZKpnf",
  "key36": "53rbeS5GTor7KKnmczAZEGjYGoc4DNxpXRBmotiS6ScvLiqf1EVTG6M1f99gLTTAsaEKL4sJMsYNkb3tGrivNudV",
  "key37": "5QpT6z6PHKnYmJ39y6hJonr5W3qWUjhUh48eLKWTY1L7PkXP4XDGTf6uZ8Js42bbDveF11TWX2suneFcdpBjiDjg"
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
