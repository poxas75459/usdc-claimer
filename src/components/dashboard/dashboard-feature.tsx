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
    "3AmQTXkbMVbRtmuHK72tT2hs6jpZhSHxYAUKFKMrsoKeaQ2Rz2YsSg1hEAf8BfixhvzVj4PsQYmU1YSWbjn2QZTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwmi5sHES83hSbX9vDfbeQ5CKBzFwZvH1epbYmt9qiesJhDb3bvGxQpZjSrZvdmpvB825qdNB4asEpiYGK9j3a6",
  "key1": "3y7VNqPRBPjnthDfYneSenpRmF2i9CreqjZXrsF99oYxBM3tWYJE4ToqFMdZfPSa1b5SQKo2ufheV3myDwG6mrAT",
  "key2": "2b4YMxtuMPykXDereTWerkwL2K33cSH6QujXTjcHbRQbiBEGTfjj8T3h2N28iqu3gz4aUgW2Cu6c5RySmkkqv9hJ",
  "key3": "3ZRyaf12xGat4hfroKZPuvq7n9wDY1Jodh2k3jjECCPyF9yWGiAzMXmzsNZuqQ8ydjwECGfK2eZFPCgChsnMjpwn",
  "key4": "5PU26SUKnKR4qLrQFiNMb6tejPypJKcALTSWKXj74HL1iyJ745XpK4VcFwyzAk686xLuhztnkzFD7zV8gsFz4WWh",
  "key5": "2DLAmYsTpY2vbcbzqUkkHC67KKcpTtCr1ZNKcvYuYnem3Lzxn7nwzMh8TVtBeUgJYf2q2dfHz6q1oyjnUyBKuKc2",
  "key6": "25EjBtiQ5ykTgyoeWhCwBba9mqSneHpk6zfRxhv3BUVJHM2TyNqEjuLSbPmJu35mokCFHMEZH5bndmZfq2bsgLjm",
  "key7": "2SBriDsfWhsPtpkCjL6rcnETDDDfKt36PiZkQG7Z5xuMM3FQaYUULt6ACeNXFuqj5wxrViLroiVKBYfFdTmrEXNN",
  "key8": "347Q4b6FhcwVnyqrorLmhS6zoowXGtSJ8UTXH4R8zYPywCLTcweKyzJBKJTcXZDT2cN2yLHa6wkw2HCQAjsAr3ME",
  "key9": "3Yq3FsLKEAJdFrLioouo8grBAttKrKZx3XvbmhaXXeHNmACXn3TnWNn9FyRRfZdwtTdxkBKuUbrGWMzzq3krCpPG",
  "key10": "4HdLRjQe2iX2EefHa84j84pPJ2QftaUm2AXruv3SZEBs85VHmbaAgbc2KZ3LxbWszSit63xBNnJYh4RHH2pikoap",
  "key11": "59NvdJ6azp2i6yo2hW6n37gkBKXfnBLisw8JZrkwNbYeU8FjXtwgVzv1CPahAjF4tvstV92P4uQwbFhA2xScQpvW",
  "key12": "4HCphc2G7PkfP55vKftFjNyV3AJdW4uP7D9tVALhD6bCtHvAqmSGzo8ekTp6qg7uAqiB3xAgncXGSRtCPpUapnE3",
  "key13": "39sSMGYhTM5i272kjdAjUCaiabgWynbUi5unCEy81qGSuDaD3sz6Wk1AeEittUWHSUXpFrkQPk8JPtN1Q2TeJHE7",
  "key14": "bj9HguWgMp4JpaVKY6DhtBQvYXEhed7vTeTU7oA1hmpBLvgPrgZgJoZKHDYRi9bodmVXNCYZ1zJyFXBS2YnaSgA",
  "key15": "53Q5uHhLS3BQHARtCfGyZu8HgXej54QdSa9s4hj9Z6LAFMU6T1xkcAH3FCdi7QbtBi66rFnqpiR5991NR1Tofgd4",
  "key16": "5Bc7gF2JQ2Yw96WB2644aV1YnU9sAfr2LjsyV44LQLtArgWa1kPpW38Wy5bYLWZa1NdqR7rR7UcqRftt7ZN56Z7i",
  "key17": "4Zuieu34PmwSDBdRyetQAeXs8d1fMg5J5BptG5332jKmzpBVJU5u8pPD9Ugob7ZuFR32cs1YH4PG32fJ1UmwmyuX",
  "key18": "2NPhCsJBpSV2GBje3vo4PCd1ztsyxxZ2v1URnoyZedgL1DuZkT4sxN9B12FGzQh9kZCFTUmkd9GCQf3EAhMqAG1Y",
  "key19": "NyoWdrQZUYYFpxDakofPJCecJZVXjLoqSS5Ma12F5ap8Tcpa7vMYYTDC7NT3c4eU949wLdGmSphGBXsfy1R9BZ6",
  "key20": "26FJsFSMGEdrRHXo7DRFWNqiQ8YdQ95PafqSzs3s4XzuhjigAzcqo9bjrcDhYxEGp7TxoYsMWU48BinwHR3xjX6W",
  "key21": "3WuPcKroUz9a4kNETC1N7VexRwxZsvaUk9J4uciCA8jFBXHwWx4QeG28RDghTP3PbJAqFwEW3ZjG9TKru54eaWT5",
  "key22": "5s7psvi8gf93RLAAcodjKW8W5TU4SkD7ZLL44KQ3ZprzfqWBQ2niwsoBvgaVUHZriQQgk7Fek4PApsBRNsNtd4Z8",
  "key23": "52qCMRhQ9GgLbKRPBTFZ3YJ3PeBa3GUUXrGBunQnCZH4cbd5AZeB3PEutNMNwuH32GxQns6n2WRudtVuX8L6KvYx",
  "key24": "5RdRZy3eDnM8nk7GZhKbrkbpV32CSZABcyoKxPpUbxtNqJ2P9jFGNn9gtyCp7jt3qjpvS5PyvrADb9trBuZkoSnw",
  "key25": "4pkCjevNwRPcZrE4BYrRC1CX5p4KJLivTp4bL47Ziw8fjxrEiJGNVpMPeMbNSasPtydPigPQ2ceyNaFGkhxDGDka",
  "key26": "4YSrtH96LEUJeaaEiUsZhdgZMz9Uv4fA8Gq7qsRiWaP9WiN1oyv7ZFu1i767hhSNH162vDJQr7SxvTqejgZ7iCUE",
  "key27": "5GCd4sPv6HT6KPFVmdNeaZtQasmTpdfAnTh7do2WN2rBGFzxLjStomMxBmbhk4jWcjaiMWDCTWDG1kkPF6r9GYJ7",
  "key28": "5qejw5BPVf6Q6bnK94K6zVTQXJQWpfEj8NXvx7x6Ad9iecAuZXovLuxqBNhWC2VCfZSHmiihhZ4fgCnM31YMi61K",
  "key29": "28KTMpcJAc96Zb1uxcKhxPsXQPm8Bz6ioTfS62yKjAt7a1PnfY9bMw2iEQAmWKa4SvwBf4bBCTtSdHvc9icGdnkx",
  "key30": "5wHAtD6V2eHZ2azVZHtrMVrXj882UiDNkmoH75SVEd5FVkS2vgAVATM6y8pJyPLxGHxFjL72CJWwHiqngHt6TZL6",
  "key31": "3vb4g1U4JZvfHzs9M9tW1LRKFECdeBsBzbFQheCzeYr3BxLjHcpKGag8o4QQnjatrbe9tGMcDW7gdHeht27JLXAm"
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
