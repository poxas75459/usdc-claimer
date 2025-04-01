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
    "58zHHit9dERAuTBKYJWLYRVYFEYH9PYfjJXckGcG4dxiBPm99UBqygQMxBPUrKSc25sfrxTCbNxHjzJQuxnEcqHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsgU8KLtYoSFfFKyLaqxyFG3LT7sDSM3DHxk8csZCSLdTxkVEaQj88HjF4NA4ozdPDgkMguajnLhkoz5aCk1KAZ",
  "key1": "3k6MhgRddgJFdBKocSGygdrtwrDX4Lths2F9a4vsg4XGKVag263MdXJsMoSnBr2phLBzQPpdaNjXRYZjPQxwvH4f",
  "key2": "542MTjYWTRzEqZB9ZRnX4DvWojzLxmbkmHtCuuJUuHv7bgJ26Foweg8dqwo1ZzxRGUKvjYb7Emwvwn628xsERFbd",
  "key3": "56shW3D9WFiKagEXbhuK46qQtArMXtJFX24zJAkvpiTNcxbnwtJWdJifxhveRuRYMUzLZU45V3L65L2xfC4SKtD2",
  "key4": "rWWqR9S43fkSeiqxMm8xrzCjBSxGVwvJrqUycpDaUcQvzyKjWqN5757iBZaeRthxKCqMfcnP9yPWa5igTppyn1w",
  "key5": "3amoWKjKDFG7YfopZueUsvNqisTGNCSTizcA3W4oQH3F2LjJp3k4C9vGUXWhugLiRh3J2j6ZpGdKuksLH4rYKVgQ",
  "key6": "3QGxCJ8Q9Z9hrydwzY8fnG3siRtyC8qkmWhWv1ixVj7vBmaNbWxiktWSJCUoEeQno7BPYBdkJLDSjUUkXQyrhnu3",
  "key7": "5mkXfNtna1d9TJHknD3gG7GJCPvKMBFX3tXER6S2vejfTfTqjucWprzyeteVMXysEERWPb8GHmNGRSyLGxXv8MtS",
  "key8": "4yDvnb8z4Q7Nyw51AYsD1fTfjmacs2ZG7Bw1Q2j5EEZEQ7GWKc1TewJmHErTiAwVJLLeijwfco9nTGiwnn566u6o",
  "key9": "2y8nYyQCy1H5U5btE1D1MrBLYBWB6UnBggMLV4nQAAhPEro5xbRFhDArkayMj8ufhzZf2fpRTj6E9PcrUMqVQv6c",
  "key10": "393YdipKKEtzKoQLPBRUDJqhRkwubNr4hFC4UyFMoijP8ztiZawSddvYJXu7EiBtwPyAw3nniXeBQcS6816x3sJp",
  "key11": "tqXNLuJcAvCbyCrvPQWDYrynCzNL2neBqfpCQBuhDPNSkaLybC8BPvVoyH19BDdCbUeB15s98xVsyRaGeAPTh7D",
  "key12": "2TArdifEPRnpSHXiBNr86A9VvcfJuUbabEsjtcUp96h3QTEzG3eahG8uizWRTkJw2oCJGNQgTCp2fbwbXSR8FsWb",
  "key13": "5Bv5aah2KCSTgNKonNT7rrdpy2ibqB7FG9cJqQoi2TRKhuwnxFLRE95MDfdDwmfuZ8jZimhnKCKw1qPgnE8TmzFX",
  "key14": "zsaFtVmrfUUiifEX4dmnMeZdgAGBcdR6dUt4fNT5Aa853PnhisUjFpcunNBrSnG2mDMG77C85oeWVv4inrW2eKT",
  "key15": "24QL91deXzHkbFma7f8nkd5qA8VtvJ3vfuPzxLVsndEts2TmoeAvEVQ96nQWjnsYxzX3xTtYReM7o5VL9AC65Tdq",
  "key16": "633iJGtdXhtjL8CXQC1TNeuFgLrT6JmUq7huaXGSeKZxHH3tuqA5LeG9U8vaxz2zEnVCwxKtd945szap8gxciNHg",
  "key17": "4xiwW5q3SAjEGqb1CodQrKMCan2K9xgZgNffnkUfpgD6NDZB4SsPCEZ9Q6EE4QS2KUGmfhWJi4E115ShT45t2GKX",
  "key18": "o5PxTDe5QFVtX4vktL2ox5wcE6qbJ1fVDnDAcwLA2Jffd6FatVcueqtP6Ahs7m7TcqGtcysRTvovXeJFe5RFdHp",
  "key19": "2LGF6dzYdr9L11Y8LjiXFEqCTuSciuAkayxx2CRx6ofch6Mfcu451ets4a91QpRUCt5CMhJTZSixbvRV6FafCf2d",
  "key20": "3bCkC93QEYXmqE6cynS13bbiz6V1yxKPgLKpLWbziYwXsHoGCTUCbxLGZcaFi3aDgefmPpYXEEZ5JdGgXBufrPrr",
  "key21": "2VhrAfeK8NWbnPLwNhyJVofXicve4ovBj5MfvzSMdapXGH9ovvFxLrWoeNEJseCTpJTxMRxajY8maTiwxySqkJvV",
  "key22": "5hpLHxQoBAcDibUqp3TjyUWvBvdrcbXm7nurMAH6192HHn4djxWAeyGHbSb9MvJ6JJAQ9ZyZF6kgGKNKe8yMsvHR",
  "key23": "4kS4q8F1Hoi342wXssi4TFu2TskhAryaCEnJaec4wSxQrZj1nWQhgZNNbmE18jQZoH9fLNMvGjdAQ9Y7bb4khAoW",
  "key24": "5Ev2Liwkqc1w9X7g839mhZZif6yuZhVeCtwnef5d9m4R64ZvbnPGzYoyGb5Do3SAefm7ejzouiWG2D1pAzUFNuK6",
  "key25": "3QGxJ6RcdRPjHJ1hqYgyZCKYTgpVRtcrn6eTXg3GeSUxC9PZr7Vcw2gwp8oCoFfuhhcaxSscYwiu46wDPYDehZCx",
  "key26": "2jvwKh995k3AEV6XMXqekVsdaTF3QZEGGtDM3pnPPPwJ5NoHsvbeBsMkoTuPWL8d9Jr5HdS2YEKqejqB3DBA2vC9",
  "key27": "8n71GP23C4LbyXpPrTEvZeqbFHPBvWDtu25aXgSQwKMjHKQZs1z3EdWeeoeiQiFv8BUmE9kvLmvPL5K1rwyE51L",
  "key28": "2SCJdMmqcXsUR5JD34ZuqntRTbyFtqD3KwXjBmNYkMHCmt9TRLXWXkRXyk2PecuEJtNGpJx933DTcCsPHSjWWpzw",
  "key29": "2CMkBUzTUQAqBMv93CJBVVdsdpCHUcL6XqWBbGvbqKh6MWjd8k77sdH6K7RZEwa4LrxcSesDsFCiudC3mcMJGSoA",
  "key30": "5sUL5dL7jzmp5NEXGgwPnPVtqMELzuxDz7fdfqy3tZy43xjihYP3NHqMFbobnrQgG7BrG13MhgLfTap7tcQwWjR4",
  "key31": "4unFwqmJS3qnHLdsfZqmKTmhvJJEtcedNHZ1fZWNQ5J418EHozXcS8gFcumVVQypm9HvG3E51MK5VxiTLvaUMxks",
  "key32": "4dHJinv8787sbBmJZJkyFMGKH8T7Va8sC8AJWZsN9bn7Q8VvypAmEspxPbocSzBJSZWs4ZZZNr7Ni3KTyPc1xYQz",
  "key33": "5r5QQya9tgSeMbBYM3VSBqYkGensFt3R2jv2hBCbRhvWYbS1P7ZubjW4vujqRtARkScQaMFZaBf55wJApVGhzNN4",
  "key34": "veXsigSg8ZJW84DscZY6p8FfMr3T5wXzA6PgsxWb5JWsURDfXJPNDp1mYYZLJmQy68Yw5jqykDZSKkPBrP238GA",
  "key35": "5mrr2imTaaEAXV1j9g69swAreRnWq6qvXnaTkbgzUkudCGX5gRCemhwnoCQrfBQxY7f19qiF5N1RC7zLTJPMa1QP",
  "key36": "44Niw5AwZGty4psQ7wxVCkB88ACi2zjjQUL18h1YmqyKhs9seqFzspDWwpjEdZVLa99dSJULGJ4wrL3gC8JgHdhg",
  "key37": "4FBddRfSrxiJeffrh4BCMHk1hzvgYHN4z9YpNtPUoBho1b57nPbGuMu2wHnpJsXMjoeV6JiDf4v3RkKtQCTnBZ3L",
  "key38": "2r6MRdsMG5bHyMtsuqTTnZJfDv9rQYsgFsGBtiPdKQZTBiYcjhVduXYTaZq25Fg4bTpJSPumZyYd5vFRcPZCx5SJ",
  "key39": "3KufwGMB8GEEFVV7WoEwGz438s85gWerfwXCT7nFtf2X7yA9zDJHYA6KW5v6u8tKFZNarvAHzUWomn9wxWBaoY6K"
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
