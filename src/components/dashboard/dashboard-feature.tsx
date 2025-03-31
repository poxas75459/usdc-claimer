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
    "3QgAyv9taqtbwfVAuXm8FQ1eoxTQmXoBWYtRrH9RYJoFtKD4cyoABABnmDLnnfMS9KHXz1bbLbmidQ8KxHnDGs1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ga7VbiRboAZi4PtvcrwArMwFN8cXs94MpAcE1bmbe7t9pPN4NF2xJbVkn9qNTt2gj6GYVeqSfTR9Wd4JErAxzu",
  "key1": "q4i7329CuMxha45A2QZsRVo7gwLRvq46b5J3EqxYbfhJrr4u7CNJJR3xoSAFYbr4VRXapUqEqg5SiAWXWmDB2KU",
  "key2": "5FQvc5aWmWNkWCe7x63vTsaWmZB4xzoexnBzikjabYnDRdfCR3HMtc5jtWgR1rmgDa7SUnMPrA9Yg3qXe7XLSmEp",
  "key3": "2RDzkREcdFDKhvQnwvnVR2ACgPUPi9rjcewvgErS6whBanvpsbxLLAQ5Jh7jfFcybnnnbqsnCJtw2WD7UDofTxmu",
  "key4": "4c4Qokg8wUTuEDSrf3Y8cY7pnRZWBMiRe9VcjTmdjNt2EWKiSoxFm9owx6N7T8BNxJGrwaxxusa584oQez8dZvv7",
  "key5": "4GG5rmAsqwAxSfXXib4jkWbfj5srZC4MTsbBQamtCj8hoqEwdCjyEtbDc9sdZNneEUghaUHnFfQmtqesYYjrTLiK",
  "key6": "2tVu367P7q3w8ABYdZwuZ4dyzFzPgDQosD84zyVUDGDnA1E2upyFsjDbFt7jGqJVpDzbf6HVAFbrb659LCFuE3c1",
  "key7": "5U1iy34jQCiif3XGN3znaeqGiaLNRPuJUoaGKiRnSGU8WQTkrB7mi8w9QagtDHFgTGZmggaTrLKqtQCwZeD1wfHw",
  "key8": "2ixCfVVV8tfSuR3Mr4gssFJNN9S39jcgLbLGkS3Dpwyj7AYbPpsRk5HLBqTetWw8GJvzm7R5Drcvz6LqasRGTceh",
  "key9": "5SkLsgLV2JEKwUCb3zFxpXDLz3VbuQKmikyNgtgyg9WWm7je87Tsp1acFuxCwab1FBDRPt1RKLbHBKQj8RJ9xcFY",
  "key10": "3vvdxK1Emn5kTzKDiwyEngNXF43nDUn7cHhdSFjhT6VDqJQtrt8mm4NoFQy1wz5YzNjjMdHU9YwQdhi6EdfUdwFZ",
  "key11": "hn1VRfgzAG2L7hzYtvmAmsLu5beyKdA7LSCj2yJD3yCjskXuVcJRdCm6FBXNVf6ToReWWhPApHU8NmGohzJCeQ5",
  "key12": "u4ee3rmBY9qfEWRK8dw7THFQ5h4KQbpH7sEMHDUnfMDRBnfNsHQiDnzpscDmFvjFQTF1zwz3cdR7TjG9barpKpr",
  "key13": "53HuUwLvSXdcJgowX44YCvCpoQKoCtYvAAg3JzFVDYBynCPZxzzCcQMqNShA2x44jZRp9gw9NmWeELjf6gk3CfHo",
  "key14": "oZpB9BRVqWojYQ1fog9Twm8skvGstgkvrABqfPsLkNGNWnAbVPunw3WtiLYap2VixfWytNAnKQ18ibiioXKZTpC",
  "key15": "2WiLh8c2stRfWepUBBK6faMybZ2D5tcxfNhpxxCH2wYJ6zqVz8enAd5zYPUCQxJ6t1kqbp2VBjMnFAv5MUVEQ4XZ",
  "key16": "4d5W67nxxR4t9fhMSD2QPbvrDGNNATYRb2yyJDtxPLTsfRag8XY61YZiFcX5gCSVQsrYadstPjsuPLo539RUX6MK",
  "key17": "2LcBsN8Wj81XSVaGa7EeZASE4oyFbRAKJRoVsZTqgs38ZJ9KXbaCfWh1f4aWm4vPgMcsQMhzD6ZgnDd4HP9UaHKy",
  "key18": "3Ax6pPhtyjxwQEcxnc97Bjqtc6DyNPptfBRpXuqgDAvrQXG9TLcAqVspqXdoQ6pZPDuovwHhtYLxEP6a5E654C9v",
  "key19": "5A2EzA7C7uXAZo4Xsiob18N4oKzMfqLQypzWntxGUB3DKf4eJR59YW8wpAVn2WZYxHxBfBSm2tisGfhYbaymwmys",
  "key20": "4PNPnCwGpseykThHaoQrUpMvMpUofE7agJ2mA1aWjjgjZe5g4RjjaVzjxNbymXuRELD571wAUzyZ2PG61g52LHHX",
  "key21": "XVX6TZEBA4zNeKLavwo8WAHN9EFeiSwQ5SAQsJBkXvwoqAMheM33zBDw55gacXiiMNUFksBtguYT6vB3Bo2bUqD",
  "key22": "4Q4ttRCatQ56vVpakvZYV3dbNtJfchXBuHvCEuk29Yim3wmAPq3VfLnGiXZRvoSBxpd5yYPCxsBHSLaMApFRJbP3",
  "key23": "5UFFdSMf3MNiQ7jDM9VfpkZr9T8e1tiTR8QJFDTW6DHJR5RYiCnrqaqQxYeP3g5kdNULWzztcNef3VSrx6GJQqBT",
  "key24": "3Et4qr9Y2GM315STDof2iKZyivVoti57jstGDaGt1JD4YQfXANrFoWwzUWLy5EKC9db6NmpEJPr7YUrZw7rk9jw1",
  "key25": "5wi9Mo4C2E8m9AQYBk3huDTYDVsrWE48qw1uxKNcRtdb2h7YLzgmWNJaxxCooL5YxDHtB25uCaUUAuNjJijMdSsu",
  "key26": "mXigBYvbRymnEWRiqh3Uaqij9P3w2oj6dMB3cU6LoKYarB9ZEeRD3sV2REc3fgLGrX7gUhXdBoBkN6XCEe65Tet",
  "key27": "248hwJ7QYAfYLgGuSvMT9ZRGRa8tSsjVRN1Cj2joBtPVbjb7DngMSd6eTNHkSpoLuQjtc445w3rvD2R3NzrT3vn9",
  "key28": "3G3rrhSjxkUmsukk1z29qFCYhZXeUVCioSn9G3dTi3JrvZYXkCtfEWVFtJwWM6azNMXo2kgE3xRiQPJ26emAJ3PG",
  "key29": "cn2frY4DgQJFovMe9JriwFjMC6chgLYHsP4NMPiYBfxHNZw1iCRvEfV8DCQBpTwhpvEcEWsASf1cUhqjiMvxLL1",
  "key30": "2W7YjEc8MmFqAjNmnaY4jPorLH8ZfLUrezHzTAeYVnaPUrvP7wx2Cbr56GfVuzpzUPSeYXvUef9K9WWxdGtmLNKu",
  "key31": "6ntnmzgKervp484eQCEJCSq7HtaGC157VCgxL9tTHgZee1p3Fx8mv4MMaeb9A5ZSpc2tm3iXZN8BeV44g9o8G5f",
  "key32": "Dj8dxNqeXrE2pzS6ky9iDp5KxiFPHtTFUDgiDbwfLtMNStctVzqXFvFJUMc8sNrAHqnLSnzzvdHovDhKPqDbz9w",
  "key33": "5SXA6WM762nArJHv5FENnDAtaincLqNh5ME4LjVkoA1WWY3daMYUdfyr5y7ofbZuj9s8Wvy4p5LC22e9TT1cveHN",
  "key34": "3YduqZHYWfziupUnkQJzKoZEJeHDng9cfBy3z3eL9Z916KS4BQorNNfvsAVNQzaTaFmTuAhb9ZMBb6nzugqnS71c",
  "key35": "fFFPWT2Y2oRp4VUXSGzWsnfVBkRCbQKCuCHsjbWtUc9pPUKHENYM33xx4iuJwuPXTUwxWNCg1pdTQ9ag4TLMBwk"
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
