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
    "3HKLGVEnxEnhphGHBGotnSEzKEuVpqwxUj2FzT2ANzNDmMY9UjFBVxykGAk9YduEvLN5S2xXju4HpqH9PwfRhj2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJwViLCE27wASZGXPLcc7ugZoDA7CQ9q5m9pLppnobjv6hr1hF1ha5Vv9aeq8dskYnGqPT3KXrBCcCxonc45GEG",
  "key1": "3dGFt398nqN4MNyCHkSn4QneocKwHbHwHWqRgy3bWVot4VNXEkEbunFAADiqY4YyVSYEUA1jKsdxYN5zxWZJVeHn",
  "key2": "4RaUtxmAxphbXcbEVnsiwmz1HEenbKD4YV7KoYM1zwk55fAugBUJ3k9gwL3zXMKRGA3j1J6VdekzJtAZAzZiUTYt",
  "key3": "2Q5xU2VYU8XRe3umwqkrZ5o14EHuhv9koaN3HHiZ4VkVnVnUAE2Qb86BgAywnVBvfByJ8BA2yRqDKytCq4Epcofw",
  "key4": "3y4fwqstttuLvnRBNATH1SwUtZNrePhkAxBTLjeGyrDhaeb9JoY9HYDHek5NqoVkdnMspAGX7URmyiWE8Vj3272z",
  "key5": "5zb3UGxXcq28JrDqqMhni5m2QnfBDVwQQRJVpZ1eLUWJMRJ1J7ZGeYEZ4bxtkBxkasVjv75ieqbiTUtiBsvqqw3k",
  "key6": "2fpxW2BouKTkD7q9TgG6zuUswB4CoBywjfqifp57gXHtg5B1djupWUDdxNdXRAhzde27yuxkwtmnWcpTzG3WTkHD",
  "key7": "46WwWvm8sKdS1PFLkwwsbjMm2Rj35U711sRZVEqCRBrjndNqpeJ8cg1wBzpwRaJHYT9ZLTRTYH7XcrH18wiwWxK4",
  "key8": "5H7uKrZDxqEYnC1JQUAv1UsoMy5yK88UZaKGZcRB6SeDXTo8DshgrbTnoSyfp2GSNeMuxvoyFgX6ab1GMwK1qmd8",
  "key9": "4Ug4rqQYKuaAMTPqpAhHa2bb47bs6y4XcAA1qhmHP2Zr4XMXEopkUgNHFK61y4A69FCzZszRfibUA5TPwgokLuGL",
  "key10": "ynqJMmFCQcM3ZSytARKhJYPnCqRzf7GWAj8Nqrq9PRWpoo5sNJo2Wr5P8aTXC6KGuEneJHpTeDAPYU3EcHvDS2k",
  "key11": "3nScfjyuWEKhBF9cA2bWNxyz8jtfjvdTny1RZSV5tQanx8wtCcBEwqv17AStkrbmqLAvRTimm46SU6g7pRhwTktA",
  "key12": "3KqLNyrfXnEGJCz7VbttQZCLbpGR8Czs33xoXHjMahXamv6dwzcss7TmZdVQ1YVkwKzWqFyjfR6CPnuqSGvpxFqf",
  "key13": "5hpcvzXcoL4dYmUEszvugZ7q7oPwwTefHFoVQBETueDjqfUJLkmGrRNuW8QmHG9RzmCPMFktPCcZbAmd1R661pKF",
  "key14": "3bN3bAFzGCTPu5nAFZLdxKQRTXtcnkSQwDbYrcg3LCmeCumgzVh4gvRye1r8brdDSiRWstZUBqXE5ydHTPuzR6hB",
  "key15": "ERWeLrdxqq3csShoxCviLqa99y3YPmhrRAw16U6j939dWqxfotrcDMxM1Bjhdrpyoi6sexRXe3TrUjxYLnFoJht",
  "key16": "5g2gg3xBGr9Aip4L9WmCdjUGkM1pdKQhazgugdSLngvdy712oQW7krXVNcyzLe6nHLFfDktuiSp2SRQ2N9riNtBJ",
  "key17": "3NGPLSePnkqbLNzYWSoudgkfS8Z6q4zMtQGgofK8ih2VofpxVxdNA1hKtz9cxubvT66iHfd7GJsC8o3ZcNirNFxL",
  "key18": "2fJzsoTLH6PDuD6tjpYEyAyruahr9VkArV4v8KLeQh3THra3tryARtMxpaChUkspWBCYi6yNPefVkdmhRBSM9C8W",
  "key19": "5oxtyQVag2qbPUKpiMfexLFgE4cCtsV2eUDr8EV4vArFhgrMuKgsFfhZLsrgRDZiA1USXrAE8jPTtBREh2u7kvCY",
  "key20": "s1Z1S1DDVJX1W4Ts1JsDXpWGuPR747yUc76WfRqvo7ztg1JwLK4RA5KGwoDtzctGdZbcZRDafcAunhRsYNS61P3",
  "key21": "3VaoepGqygmqr2u4T51FZk8fj4PLNkj5UkFspLy5hzWddzNVBoYY34rw3HhwLPU5FKVzSoGomiGxJF3gAYP7YLDu",
  "key22": "3ipCQoSNebuVSApmYmiPCtdcLch2Nm1vhgFYQ2XNxSYfJjqnti4LqLhSZLY5Ur72AFWkZEKVW3gSULswEdEwkka9",
  "key23": "2ydN9bRL2BA23M4KACgzzpo94ub3qLXMhuxtgLHR1oTKjzFMbVD4QLrafAogVdeKTQ7Z4PTeNmvDs3jTzKMs9cHF",
  "key24": "331C9Zj94CGsZVSMCvcLrZmKb3c8EYod8n34NhaYZVUAcSW2wqaMS5UHhfCmN3zmKE4R99gRtgQ1YUV9TUMex6Ly",
  "key25": "3SF73FHpVp72Wzwn5sLUAyopFaidxbHWPzDsXs46RjvxMXZdR285oEvTEenAB5XZ1u325fG9P394MsNWteA51mFM",
  "key26": "5Vbv9zf5PuB1vFvbM2CdpAZy6BTtfM6X2Gc7X7tDYwU9cNnwfoevjrPzpYxjxQakuoAKo7qgwxQsEryE6hsrqgLq",
  "key27": "ucX53KjctZVMqd1K17dJAGDVjXJcZwTiw376pds7vswjDWcFxaF8gWGU3qE9e2YC38xRFBjW8C4SoxVJ3A1MXUa",
  "key28": "5mCWtup18PZ1JRWao3N98Pgo2cF6JyfqfLfgFMtSSEG9wmAkGZtqbDJm7XmMdwc83dsS3QLmoFatZiws87VBULKA",
  "key29": "4JNU6G9Nae5Cun6Wnz3UKMbYA21uFJ7Fd6eNbfLvaKZkyNGQZFUAwvX9VfUQ6FGAxu9rXKGELVa5bteRWBYvTPnc",
  "key30": "Bm3WviupwAnjX3EMUn3sHrRxLVKzzQvi9MwWbC2BqoXVAYv8idEGNeKLMvzrJSo7fiCcxZBd1JD3C385hqDJ7nC",
  "key31": "33c9dPZVNfUeUX73ZAvDzY2QaPijgPJA48M5CSTZmRWCWwmXKV8vbcji1WKJLLNGMWMXBf3er7GLaV75rbs7q1Ff",
  "key32": "4xnq7ykLfJywrCwPUHzsVdRv7KKs4Ccf7mXxdpWbowcUyutKFyude6PUx7GPB63fiv6w8L4mksn7rJbWCjYVCbvR",
  "key33": "4hScmhsciipFZA5crn9CVQMxu65SEmcVTwkvE4vug2FhEuffVHHE9c6f8NYU4wSRaVH26HExFK1CVo73RV9T1xd4"
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
