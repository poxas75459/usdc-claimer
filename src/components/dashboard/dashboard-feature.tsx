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
    "2xfNuhUwvrH8j1QRxfsvSB8m1CG3o1jc7XK9BYsLHBh6WW32oU453ozGxjgNrFkLzFjeRgsRjNrBQTLMqV7RTzUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y3igbWM7jQ9vsXhRk4Q8YNKcpjoDgCNmUv6cXgSpT4VG51T1TZggt8sXu8wCVeqTiTGx1qCS2kg2vTDzqeK2Q5Z",
  "key1": "3CjQE4fARdbRi8GWhwLnpuGbHaYXnPPyJBdM8bKhcR1Zv56TuyxBWUxahwbW2Hv63PwzrAgtkYJKXMMT7zPJYYKm",
  "key2": "4nGNRivseTGA78b6BLsJRNUtpnVWTmjgrQgW78aotWRVaThVsPJdpsPrEPRfexeB9dPA1VgtFkdEU9HrwVZvpRM3",
  "key3": "4W6iy4Jz4H7YdtBohVfmz27JRxUQnfYkb2DGc3qxGf7EzNBnCEzbrBc5xoeDZwbyC3N3JbvUzZpD9bLEdnfpc2wY",
  "key4": "4vY5b5g5FaJka2Uc4eN2scCUYcPDbnWS5s9ZRnxY7pJUNqradpqwhmruRjEvLGRszx9HQ7LxqBB6nMgUNQ6GGQ4Z",
  "key5": "DbWN82x3n51ZH1ukj6vU2Euw5mBKNdZvoyHLSSwX9uCHS9K5srEZScz2YhyHYp6MR9cjkdvcV41bG5JqFboVv42",
  "key6": "3TCoNSYYHipj6pwYgcksKBFhx58AvkX5bj9Rq9rQTQH7vrDLyPgYPkhcNxzKBUXjXuYuDfstejfYfd68NNFiLy8b",
  "key7": "2p95eudqADbdVbNrQCAopbbbmF8YhG17YaMjUsVStTm39LhVWoJHfCgTDEHhyM96DRrEDpjCzAtGh16xpBX3XQsY",
  "key8": "48hYfVXtxmezvK5hkWvYDfeFAvRn36GsVuE9MYD9PuXrr3crJBjEjrjXghane5xrePfVBqU2LSWoyvN2nobVGwhp",
  "key9": "5zJjZDSyo5cKr1BYX78PkFrYfVK5PKuffDCB6RZkcU8BQQkZ9a1khsjCUWh1tnJvimCDzpDSRQzKLffrSjrziDTY",
  "key10": "5ZpbWmpYyi4g626Sy8aCjNQidFhUmewBCE6jXpHdQwsg9CCFXKEiwq49vAjvtY7EybErZBoBGXJstajauW1DVQKW",
  "key11": "3auqoEqMH7qVchMkzp4Qj7i8ooyxeAtSLpyvwEH6PDFYzhDXABHRCdYj1Ldpon7Dv4XBxX7HRi3KuzTHYwRGWdSj",
  "key12": "2YHsTnafBUUmj4UV43B6ocmeb5BBQda2vSsM5o1PCGk4itRp3iMeHYHqn2HND1SmEibyDu6UMNrkCihoHUqd33JS",
  "key13": "5Jacr1atMwRXzTYqHantsc4pfSKq7uSFkXWgqyWopTV5aaGQYfekkaYqZMRoAukHDPizb3nNN9pYrLKgUaxNMKL7",
  "key14": "4GwfpKeRmt4qKUWt2CrNupWawn1dLezGfSG8UHfgAGAw5u91rSr4WAbdYbr5j98Np8mggzoFd53iCkia2PzUNXfX",
  "key15": "2PMsjes19kZ8RmsXEHE8nVsMhYmsN6n8MspRc2NTYt8pFDJXHLLqzxuon9wnb16BUn8UKQK9SCdJk7GJDSp76KWs",
  "key16": "5XKr9oCrp7wjuubmYqtxtKMCTYiyNquCt3tJumQT41ZfEsyEy5qMAwLjS1P78vt6NR9KdzJH7EKFvs485bYJbszG",
  "key17": "5CGXGsoFT3dCaAhzWM91GtYPDssR5bGJbkbXwbs82hutrtuWM3v5uoMHECUEBK7dpaUBKXfQFcDDk4XgNazFMzsy",
  "key18": "4v58PTM6aSrcER7NWxksZ6v6hZCDdN4Na5jknDea1SX8aWgb2fjDEPv7A9oeYNFvQoEb1Rmk59xfRgoepzq2Ckmu",
  "key19": "2mgiVMZC7qTAa9RZEkS37ubQPLB7pJWJjTZT9knsuQcSPWy972EJz4hnTnpc6xcKxjjssQwdx6hoixRTe8Hqe9k3",
  "key20": "4wDizXuEz3eqRiXWbREppATYvtPjo6jPb3JMTToMnciGfqqC5rZnqdpWLP2wthrocGF6AfyRoRkApxpxCFt9tspj",
  "key21": "5p83bacZ7obzNSBv25LPkro8VQhqWBnErcVR9yKxHfTHtwgAaForaDcEfGHFQKru6pWTbiJvjTUeaAe3sHJ7JR9t",
  "key22": "5u1muJm7URxfxiptspsjPgVexqdyjERTHBQ34fEBjYN3JpvvPErZ5bH15BLQ5xasK8kbuiNN2bqLWA5ARkDDiBzH",
  "key23": "3tH3TuN2dPgao8YYnqhLxR6WvFg3DmBa772KNRs8wTFJDdYUq9hJfVkEWXqD4U7MbMbYZXwQkfA1CL5Hbn3zjk1S",
  "key24": "4iXjSEL8orZkiemk8Ez2tQzLKNLbY1qmLTwiEH2LSrRWoaHNbi8FYmNQ3EXTPoaQ4RKCG7unvXCEsT1midKMj2DN",
  "key25": "2DMW1iogzyUNf3t597QLnzyVtSnpyCsm2K2KaRqMGutTqyNMPwpqnUymhxoDuf9mXgJWyNL4Jx96aW8zr9d3CvNw",
  "key26": "37E3g653dvpUDfxQrbtshEAQds2SFrPm3f8Gh8yPK8ZE2937GGyeEow4aeu4mkQ8Hdy9DqaLFhof2K1c8tBwYRWo",
  "key27": "4p3pbbPxmJ36pRFqT7K6WPumcF2TWU5THXYKJKz2M23HjmmpPt55MGkk2vGLLqXqeVMuaGgoXYrLZWZSJ9emRd2p",
  "key28": "5Q3iKyUN9aPGH7dECV3C7uPeRKhGw1wTKJY4LnBzdCSnqg3YWPBPwxUbpwHByXjBefqv3ZTubDHJvHPkHFV9Ta8X",
  "key29": "5ceA4gteVPzRjCgFMxAo12sK2QeymTUYL6Xe1cfsXDouwS9q6wbSUWQ8z9rwaRhzrMNrnS5Fvt17xKEvvzmXd3NT",
  "key30": "5HFS12iayPGBoyN9wkNKcNHMjoGkAgGnaDAHZvwsrS9GnqjQd5wqC2z5JAL7eTjzFyksvfnd1qewxh7jKD5uaRNd",
  "key31": "3i7GCkutECf8HXS3zNT7xJjKSNaEzhYPv2ZYmTKe7XMNn3GPzDT4F3EXgj5MDHjtS8tKaENWyCR1ND9o7iCRwgH2",
  "key32": "5ZRoTdpDjqRf3tiwvvW7fNtQJ3K3KmrWYKuf6C34TfR4eVAtMzhL8AFfR4NCD9eg2a6QsnMHnMjhdC4S7murXg9P",
  "key33": "3zAvje8uPLBVRwcYaqgKhVAa6ivmVRAhbNboVHZC7WHdukAYkrRzHSpEh1fpkg4KvTE9ErjbqegDj3qs633GaBqV",
  "key34": "3YNSaD2bVTnebaSVbbyALfQpEMYmRifxJsnZxbAEzGhsKvPnDx5jDmxdEKp6WA5f2xLG2QxDsG48ddeg3iw97gvH",
  "key35": "2z15x1JRgvQnntphimC5xCE9Fx7zTBB7xjqSZh5gqPzNP5SvctMiPpoVsLHbPLKfeMJxE9LmDh6x8eBPQEaV5tmM",
  "key36": "3c2pxvtELunpp8i9caDh9Nyaejacq3M7QmBQ5QpcCLQP2RfN2fKt8em85t3eiQha3nk3girWgjixSQjUbYZUUNGU",
  "key37": "5ZnMeqxGH2DC5Vi8UuAJ33Ah3622qxG7kZdYPCZYhE4RsEq5ni2TQPfXYgXjbS9SGULQm26X9rTkejG6ZUateiic"
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
