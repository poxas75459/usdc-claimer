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
    "5QZDkBrFERkbxXPxUzG2d8vkUHMARvm8h7wRZy2J5PExByZYvMdVtZTcDUKTxHTMWSnBC5SXTqSiTeT9Q39sX1HJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qRTGWMqqit1gnBjTmGEEwambnhBpGZMEDMa64rzdPwA7BbGtaXiombnmms4buHDYokEjKz2whWj3uSFBg6Cdma",
  "key1": "5YjX6D5rqWdhmDuR2m5guWejp4aSpYvZN29MquSBAESYo28RKMaC8mzZupecNXbGGwTCs7Poo1hL5bx5C2AKBCNQ",
  "key2": "4nGzNSupMk62LVuadvzMxSZH73v4Cna4bM3WYuuQemGJodMAKLEJvrxVZnT4FgBcDUWoCpNr1CBFZNXQynTm7p2Z",
  "key3": "5k2G7j2BZYBqhzUmWTnjhtsSc1LC5RYY1w1iGWeGVhTKELKow5NLQfaHg5WZ3LukaihSjrSv3hZ1EHHvT83xp5E7",
  "key4": "5jKLGBaZR3h9zPfZEcYEmgGt6hMjC39zoAkMcQjvawDwwqJq3ZeGDErRo4JA9rCbgWCxGKgtEfi498KgbJ8f3CDg",
  "key5": "49ct12GEN98uXCLVy93hEgkujxud8cqVa2CypuCHADzzseK6tMFuodukondhvHAbYH8RrJ4jpF8rF4qCrd1gPhBW",
  "key6": "3GfA1cWUk56zovEb6VEumm7JNNABSYVBK1VaU1p6AbZ5EUA3u3Wc8v4rwzpLsbS56i3Kc1EXctQLRUb5TKL7eL6o",
  "key7": "5RELCecMbGQJCfh1WfMCEvBHvPESS95y7oMxBKVYaUWxQ4cGHhqNUg92MV2PPJnALk52XUCjpzbpKRYGQtegajCK",
  "key8": "3Gz3wL31F4QE7upQcNBXin9PjtkU7q5EsYwrduy4r5m2U9Fk4Vq3sNVZ4tPCjZHoXwUugZsL4D5WsuwPvumBMfsG",
  "key9": "21BxZzE7FoEUb3fuZ2V9EyWjGtrPviUzKGYYHGVP9LfFDndpUE3A3Utxxm9LhiExrYgCzadkXZWsKfwsGgq249ZJ",
  "key10": "4VUS9YcmbQ1U3HjcJx7bqAgtHpzqA22th5yhSqD57KjNPg3bG8ZYy7AwqpV6on5CQ5HCv3kPTG715Nmzqjggxi3e",
  "key11": "1VZnEqNY7stPGwpmReKHWJsuVLPmJbiAGuNcD3jThJ1wELfzV5HNPXbWqvRZCL1M91xMKTgeFkiErPxL1W6DgoT",
  "key12": "4xTxJ5BkZEqKbV11g26uivFXrbbGyKmmv7XUY8a5jDXWLZ4u7DoiivfP5FRgb3GKQbKycPVRwFKjfokEeC5wZ7jS",
  "key13": "5VrutkSkoUPnPiv5eTwpNhVvFRJ19txxzckjRmKs89hx15YMDaqk9Cj22CD1y8d5iELKUpHqkdXDw5j9PpA2Sooq",
  "key14": "5Ne3F8wKn6pMzvxzHsuhMGe7q9ZXBW33RpdMGWdQf4KRALXg4oici32RoCQmwjvF2k7jscLEgAoWUZUezkzZx3P1",
  "key15": "3pgZmp7w4sCK75Sndcwg337zPJ8zpacbmfPNMddSUFRJssR675aLkGjgyGY2BRYSScKqQztoHGqjoGJME8wtGUED",
  "key16": "4QAxDgfQtZYCtWCU2YmLrAxV6zS27kcE3VNCNv8xsaPSvtrjnVDHbyhDSviXC1ibqmdXVP73JoY6MPdrfpRedfm6",
  "key17": "5BsDnC16fHf8xF31D8jAZopZiixEMirxXX8yzjQWWyFvR442sYgoX8tCLoBHVc3ifhouJ7dZ5qdsn9ACXKaPQwu2",
  "key18": "3JUHYTLX4e4wJttvhVwuxBpkEjhW6gXRQFK3zhDCP5xsRYpzGkq1V4FjnNUNbikyAV4fHyyz6Z3S6RdrJwxLgD73",
  "key19": "37zEoZaWaGx22Nd6JSndHiWkF2erkMP1gTSC2uMc493ovnsmfwcHRwEEBLFJnfg8eh7DckudZxDEsP2bifukGL12",
  "key20": "TLFSyhYQJe7hDWbMS5WPccns5XSjz8F2oM37US6g1TPR7y8L5um98pVzquVqNL8AHPRXGbcAWMUiaPxfjt1wRtd",
  "key21": "5BomoXEaVLafpaVPd7uSzsX1tTbkUWrShoFdvm2KDYYGB6FmNQAjubFSgknQxKzLyYjc4wjHiZfAU1J61ZXSAKRU",
  "key22": "2EsqpZWTgNRAUrqPj4KaJAr2rtrJ1XRV7pZS298gx8T4NQtrgGHHZGQDVGRjdpjmEhSr6Kipt7jDaknHLB28oWvy",
  "key23": "4wVaUAtYNt5oVrVA39j5zPrCGrGoMZgH2Rp5EHdmECNNT8m7ihTdJyoWbr2ENQSiuTt4DorEdN9tXxSkxAeAvV9t",
  "key24": "3dngKcPYYsfXKhwhaiUrY51drv1dqK6MKEVPmnxREcG95n8PprXpvpQSWK3GRpLRSLZF5UviB5pBxcM6rYMsAwJN",
  "key25": "5x6vYa8rRLC7243RZ3ChZh7ovseWooGxr4nvaAQWKnRtzth6NirvLkfYEqAw1ePMAo7cS6prmszwywYBz3e2cEys",
  "key26": "3UvVM6g8MvayoAHt6rgZgqtyu6YRvkQ7m4RCokg2QcnD6jsYrb9fn8rMjUFSEDjPtVCCNFRXD2oD8boMSeFK6Nf1",
  "key27": "47VevBQB9DhXevTvzAWMPcrKCB9JwtJmAARnghv27CEn87DTbdFEy9taPGzdiDHZLo8kPjFm6xM6z2WHpSMa7Ju4",
  "key28": "krUnsk3vAku2WBrNuTHvm43DLyPXUCkVHeZzXoEHKmR31FCePoH1H39kCbJ6M2sCupu8cYRPcsFttxH6P3w65vN",
  "key29": "3a55nvna4zXfYgbxeY4NMkpLuoQm1Q5cAHGXw6S3ZdDLjFAVSQq7RU8kYN36av31FpXJkodfj85MuV5xJxGsvbpr",
  "key30": "17hfcUTWgnSZC1hn2sxQXcNtYW7gU81Rb3wNL9uqTDdYgD9VKnC9qjy6RR8nguTumsWoJtoMDgBUHMaCmTQBqPv",
  "key31": "2B83Y1EDBeqJZtQBCNmhdjXNbxFADkTkq1QmrCkYBJdrUCVKUWMK63QdRCZgrxUt6RDbX973VQqN2dE3jbwEVekT",
  "key32": "59D1HW3ATL3oEdyt7GPLCFcUvZCoshX4pRS7ZGtDuLdLRvL9FDXhX6nfd9HC1vJhoUPEBunXdsQLDxiXwoaqK5wp",
  "key33": "22mt9VBNEf8ufvR32BhYrdaZU9MiSW2g7xu3AP3k2e2wGDHYCQdMmpe4faNhYa4BqgdNa2S5vSpRbzSCwNxjYWsR",
  "key34": "3Hkewrx2TxNMVi9i2YzEdFNM2WzPpU1RgjM5VpjbZoaijg4GzGNyYGZaCWbbDyFyfBJGUVZjiH2ZuXLL1bqm9f5x",
  "key35": "2CU8GCrnqTEhFi9HqRXjNjDLzBtrRey1RMVbCwUQ43qR97NKusg6kN8hYfJwpMeFiwZqqwRW8P776aMduyUcHeta"
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
