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
    "9oWsxBeQqQ7FuuewBqwf6Z4kZkTWd7C3QbwcZytSFMjfAQzQhKgPGtmgDp64FYmmgFJUbKbnkwe3eBNooV1GPff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3DEwBCfDrp5zjPcvWK4uzrSeszjNMWg59UuykLNWNxth7NN1X2ry2RA14oD1iuiSitNNHusPUb72N4fgKCFXQ6",
  "key1": "FXJ5NQUdvBqb3GZkFGYd2ygse7TEzyqjkoUHgp2UKkV6CtxLEhW1X8BAfNoq3Euu8mng2uQDr7GUijYWe6TfsWh",
  "key2": "2eX1FezWp1EZurUercFRCMwPXJtMq361e8LRRLjUnCkztAaVw3Ckq6VJkB4aeQ64Nr91SVNxVkeXe4gK5ZCs7Kf3",
  "key3": "67WfUTVLHE3Qv12Kv5awMu645YrBWAGmYAuo8nyfocewGfRs757g6HmrM4uAFgka8b2P9ZYZzRAycdVwSKPpbFc9",
  "key4": "37MGQKe2yqC4vFoPE32RYttTC1FvihZKbuK6BEMSyz5WHggFA9bahvUNtiu2Dr3fB6G3q7cQRvutU5Dfj5Nhi6uN",
  "key5": "5Y3A936crY93B6Q3zwMaxVUj92pzR5UDUY9x7DF2Wyhiz3Z3WK85z1Hrs4aAvT39ESEppQdcZsCTHWnJRN9ZXf6w",
  "key6": "3ZWCR9w2NM8W6YdUFuoQ6TcwFfop7qR2yS7upsdw4bmUWujc38qSz199ZbnLaZ6W1SA8WNyjvAciLSPZ9bBrHavn",
  "key7": "31jSgXNwqabVQHjD6aLWTAxFb6d2Hqa5nxGGQS5nxZthcP7quirygfu4GfG5khB9Epak5dedqbKVqNwFYXCDQdHU",
  "key8": "3eyRA3bmzzk4DcSrGd7McFS1mCLB3crE1KLZUqb53mDXHLGudsKLMZZJLVzM9E8yrM4wHFT52XkVksitfyz6V2XE",
  "key9": "ZyDR5ri8wHVpTVFPmtoBi6iuAP2sTwCAZ1mHdNby6cZABhRjSKSxLucSkLm5DMdqz9homXjND6zx95iPh73RCaN",
  "key10": "2KtJBEAcxqWycZcww4EpctcgMWA58GjQUwkLhLuqnn5fdXiws5kv18X8gpsqnyqsYfFRUuPGtpA9cRt498Rk4geW",
  "key11": "5Wx3yqzdSoBGpHiHKqkDy2jF14D7Fv72heosoNdWissD1GLnf7giUXfTkxV9XgmgpMVQDLKu23gMgRXqsDk9FZX2",
  "key12": "3KspAynqd25Htj74sjn9ywcGzx5ivtUnfzaxkNkjW5kPyyVmvjfb6Te8QWjiH9kjsLS9J3H8tE6m7pJgoHKyysbX",
  "key13": "5bVQtUV1qXWe2QiNqSL8A7AvdTdbB5TbFJ8S2fwHbDK4YKJBHrZiz29iLoqqsLm2pckwXovsQMzi6CxWwuLYJFFp",
  "key14": "43w2GwVrc27HRP72VaLUau8hVhoRbiH6AX7UHVZ8gR8XJ8WB8X7Cdkikdx12aMiCj2YRB2kT5oz2ppuPEvA8NB8C",
  "key15": "2s8UuFCzEVCn7BZCBGbVfpALMB9DLpfCh5GTceGRzxbURLb3zLsaFP4rwJYX2crisa58tjnLjFfypXqotrhmTNG4",
  "key16": "123pdMAKefvni3peHhQBRgeNsPiEreKfzv4sMkGmFGWedvZpha1A5mqkVxTgbLr3NjPAUvoM1ZMKCgNXkv3MVJxi",
  "key17": "4oWhXpUZFwH4YkbkEddxw2iS3BqCuvjauHSPDLcLwM6NDL9FebbifATGNZhjU7wyeH4z3qhTuGnNJ2kB7K8myaYR",
  "key18": "5MR2qCJQdXFz6iVo1aCsNFoSsUcAJDjqgpAag76YEwUuZjbpW1VjZbtg4aMgFjtFajoebht5GodoXzBNwRXE2b9g",
  "key19": "59Rs6QcMH8bAnNRYdkPgUqv3Jc1vgw95j1RDDPLmbNJXKvjTBp2BkdeVEKVBjHyMRJvaLXpKs4nTNwcXGUfRd6SX",
  "key20": "38J94X5SEJw17yXUkQZk1xCdotDq1sFD8BquJo1WRFRXU6GJTVB6SzRq8UAvUX37EzoLCogRoSZVjiJPJYwLAhfm",
  "key21": "2nB8Jo654UGxxhfW5eAfsNCTBuFZmvFhU2jfrBX8GbUhCASUskV2dmuDgKWzF25mfExpxquLpaQ3V2AQB92yXu22",
  "key22": "29BYXEgHYDxDfkLKJ5UDgBVkbq71vQB3TdqBiXt1XWkTLvSRG91FCLoB8pMqz6UdW2uFuGeDKr2JZ3kJ3dMPs5Hb",
  "key23": "5JudVsxvK9h55e2iFGq8ht21GPYUnQD82adeHCtjHfovd4BQcqbXyrbQauxYuTgPLAjagopHkehXx7YSVzcKPUph",
  "key24": "4b3BgQjoPsm69xXeERwBXEtiCqdPRA96UM6CucsVZYjCxiVPGotuYMYNz6N8oZXJfpB45RCwToctVXQb3YyANyYC",
  "key25": "4fkPCAYpJkPx6PGrpPsqi7Y6x7Gq6J5qh7Hjtpua8QzE816S8zGPUmjBa7wjbbtiocw3QYtbz2vzp6RG6bJuqpiU",
  "key26": "54hNBUwEtQv5tmJd4fAjMyzzrT1ZYVsvmEp8XyCdq6qSPexFKPhEKHbHpmr2XGu1qhqWg7KtC56bTdzzTZvJjZVr",
  "key27": "2M7qAaTrfFkBcZQEPrnWJcVRgypQ4i4awABWSrUmjfgioxnQEsiLnFiPU5EEj7x2EBeeBvHkYkxCA4ii9R4W1DBN",
  "key28": "512FApyqHKtaF43HRSFHfuGUHLW9Y6GM4cYsPPTi1bVsz2Furp7aSeGjyh8MCsRNUXq44PQchc7KdzVe6F6hCFrC",
  "key29": "TsQziMm4kKZXcbKpvaZNrb8FbnPd2EmZgDT1vbab5ykkcE7dBLoQyA1jL6YFWuk2TWjxmyxyrHVZPqy7wQTwLna",
  "key30": "5URpRv7g64nn88MJznBp3tHwDmeghdXRfR9Rxg5Smud1Y133maGKg3YST6viz1FsTmSoNakA6gy2tFJ5esgaJJLT",
  "key31": "3knG1KWqeutX8M6XBr1f9tLALwDwcrAPYc32UkTpqGm7eQLBa4T5mECZdENnofkEPwKmkpmmEDy1uzuiw8xGFi7k",
  "key32": "5GPEQuojG6FsSDbAZLn2Di9nU2N5UBJadxxGP7Y58faYLT9dLZKmBpnzDdGbWsTfRxCBqVkvzrhYrGJgPt4Puc2i",
  "key33": "2gMiy1UAfKdkhBEm1XPnbffPpnGPDJUbGxqMuW5wBqVBMmJcWnmfcmx1MViRsxQuPKVhPpASwSgbCTjW4TAuAemi",
  "key34": "4546LeiYCWBxMocQst6xDGaG7K6Pr9Du1ZzExsQZ7q4wATnGYM9jMNHUdLc2pxxKiFsho85NmS4hdUrM9eaNBYbC",
  "key35": "XQTgxPEiLa6DCCdQLFmX6dEXHWeChycFRF2pViBbFWp4xuwGfaSd1GZqix522z7B2mxuvZtEZxLnf1QSnnd7S4b"
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
