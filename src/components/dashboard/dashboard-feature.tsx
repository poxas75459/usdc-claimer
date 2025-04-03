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
    "Nw1fx5TSX191oSdJsoFokFL5nG4qQBRwBrNDffEjPTxGuxNScuspcoZ7YC8RqUwv4iZYEEWunX1Tc2DwhjDWtcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsTRJL2Xrm2g6fL36sJT7B6MRkomKXgYh3B6EuLFVL1bJTivJGtPB4iKYjtchxUz4tWYg4pFEM5Y2KfazHmGP9D",
  "key1": "4hiVeuqWh1tsiPCHcXVPjU6qR7HDygZqfzNJGSm64KWZEF9n6SXXcPa41XxucF7i9Dby6ch891zsHf1cEJCFbuiY",
  "key2": "5RroX7otuEPhTMrQpSEHNM5CsSgkMordy8X1LgvXtT3oqTLjxRZNA93A2sNdvEh9oTcNCFt8LiZMbnWyZsAuXich",
  "key3": "hrjpeMifURmLG4vUDuteiq4QEWEf5b6xKLjhH1Xc8xENSvKNarru37AwB3EJ1UTWeZP6LNbxivstFJgeV372XGT",
  "key4": "2pAaB7Zj3yaFUWH75jFuoCL7tjrg3jFV61ce15t1rbTvmzsQn8Q5vAePgXPvod1uD3SJsbQsCy5tvnq1P8zyjmdm",
  "key5": "2QZasFm9cbsu9Bt4xis7PrQfneVduWQFMNyuYJUgru2sQcXbckvY6A8YQV8SJ4wVQGmCk1YMMPfQMrrjxdXDJ5Ss",
  "key6": "c76uaAnxwF3m1wjCUNfmBuBbwDtFzjbnkgmvvycLHtDwTeF8oAP2usrhqofTTAhYWhqf18tU7H5KZ6Ewiek48r4",
  "key7": "4bcrfHB31hwp3D8jJ9GTgqxGKRtu3U8cA5ZXxNcxZDJaQnzvBZ29YTxiMt5LUQBkXpGk8ztZiqjHbUzHJNTgRgFf",
  "key8": "2ZZZWStjBDhJwqnsZnU2VqWkLTJq989iR3RPNZn5fVeY9NEofCKNt3Ksc3ujcKN4KPAckfMK2V3ZvoR66suWVsxc",
  "key9": "38kWBN8SAuEo4eNQEzk9Y4VVt8hHoiojM9SS5RevEdddWCSnqjfj9Fuy63afhLZPAencHZku8gs4TZPZc8E3FbZi",
  "key10": "4jw5LLfzHY395t4W74kkBrHRhTUL5ihyyXtztUVstedj6ktqGS2kpp7QHqDFt5gCnBhNKMjs84jggMTXBhWrPCs2",
  "key11": "3fv3Z4zPTreQnTPDJejM1R8qumQmxKeD7BEhSSdpyq8Jh2dfoN91n4XU3U7nNcJ33SxmgQP1KBTUWWTHJ2qkPwbr",
  "key12": "dZCdQQNPKE11gSCrPzebuZEwSdbWj4EQV8pftW4fkt7rfKVfs8WwzuEtuugBBKzmBGWT7EYMWU1RyzXZE5zoeFb",
  "key13": "55nMX2rcTdSoRwvbNAhptFdF4KVwGk6ECZvA9Wayfj7Xj2PAbkxyCxqs1CgWmj8SNSuDxaD38c2cS9x8riDMeMoG",
  "key14": "2FeaZpFt1jYHJFZZ6PP3gMWcJG8vYhNaVdDxVu1f8uttZhKb9p6Gcj9HMz2FoczE9A7gbQq4XEE4z4dLyf3fDiLE",
  "key15": "2E8jnkdt64iofq7ftKJDAbkPGCg4eqT7mEvCBrJ5Ry9UK7kYZmL5cGA2be4ko7PHTktCmhNQKGVsAyZ9tN8PVdry",
  "key16": "4pJ9UvceCixx5vdwf8iFjAZGA9mtBNZr3gUuRSnNV5o1L2NNR9mX3du4rQNMqsLqev2WWQrWa1Zn6i9sSUwzdUtF",
  "key17": "5ovD3SDsrQJgnA17rcwxpoxhCtPXzGQm4tP2kfk4zjHnS2Q3nmpdwvp32wLcW2o8DiQNF5qnzu34ingcdv9Hq5KK",
  "key18": "5DuNRNAX3xLiiMXbDpTQiUbGHDTLt9rSYZQBVSVh2vs1hrApPndNwjwaMDVdTDC6mechNi98ixbgQoHgVMQNF2iw",
  "key19": "53P8A3aGQapBtAUN4psZqqFAjYrLe4FcppjmsBVCRjjmPZmxJ1qAHTF13KxapgFRuGirj2irc442bV5jpQsUBraq",
  "key20": "2m4UJME9djbNbLM9xv8t4GU52ykXYDx6UGTQLjtRfaCAU4fzGUiDXdaSGdm1t2Hbf3XQFeyhnyELb4yPg2wVgCa6",
  "key21": "2b4d4yoocUoDzW2BCizus4vFmjcV8g3XVwewsFQWWwunkkGEfNPpqRhTch4B34hEg36ha7azBm4szk9yVktuYinE",
  "key22": "2xcBN8omDWEXbv8nBUGgh6vFFzcaVGjbhPNXF89sKX4KKsSNyTywJZ5R3itpUpM2mqqjc3MeqAVT3LjHbxa3pDEX",
  "key23": "2g8Xhe7xEm5GwYiNDxX9U9dfvmJCjQ2LUv3CKkij4k62oMPeQsy7aVWUCuXb8EfH8XzC8rur7rvxDr7WTTf1iMfh",
  "key24": "4A8wkTADJRECPn48Dm6YWo6bncEVUkERb9AFiNkd2i1Qhcn8BAZ1KPQPsvswqT77z8MRMuayBffFEeD3TDb9PdH7",
  "key25": "4EYsTAMLrr7Y4Ud6Zi1TRYv12YQxL3KMKtz6eK316rR9iPBuggADuaDGjeaqeGwx6DYfDQ8ksUvkzqkDoErmrf85",
  "key26": "5jQPur6tGUsRb7Da7qW1iLo1inXTmhFoBBaRFHZrkhEdgRskay2FdSbd681o9LgnxHnQ6728TeRDPMxdYBbo8qUa",
  "key27": "5tmfr2xnFcDSyEuUMxjPvi9HyGsFB2Y5xSYq7hyf1qCRQ9UP5XXSu2Sf35VcDhrG7kxarVAW3Tu98BQhR3zU5SHK",
  "key28": "3HngxE4JeQXCNPs5ZnsceiTUsWaw61B1fEsuwnjmo5gzTbYAysjF9VpxZFuojtpDLUDrPpTaQZHS8Jr6Yjp9E1Zb",
  "key29": "47nS27QqdE8RBM4WiVeZDpcRc3QgBxkxNEifyp7WQM4FBkbMGL5gkVoiAbGKBwfz4BvQ8WE9Bxpq92bgsHoFig8B",
  "key30": "4fbojDKiRRSvqDe9orBcqusDwHPsi1qzugx9jj9sipBDb4vyaHG668RnFGckiUy7qLKzX9EQ6iPsQgo6s5hzgCm",
  "key31": "2eh15NkVs2udqHaVriWBvDpjt9WrpMMaRbRUZWbDeQjhfJVbffXhTMwsnXQjuVyqonrXiQkF35ZbJM38SXtEs3xB",
  "key32": "3xfp52h79R6uPdfamb3RtBUoje2gTqrZWcw1TnQ7jH2k8wUymLedn8cWjLtkRxBLwrmhvCniFk4MuBargLTjQDh5",
  "key33": "tUqPoDBy5vbi39LWPXgCBq6QHrfV1XFyXtCac7QJYYJ2a9wz7WsJNUz5ACi1y6tc1rq8P3NE1ozgNb9qk8DFr94",
  "key34": "2rjBwFYQgdDCRiyAYZrL7aTv43LRaF14LoZgzbDsbTzE5naH7nrCQWsEW6P2wjKXA1oMu9wpbRuMtkNUJfNZDiY7"
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
