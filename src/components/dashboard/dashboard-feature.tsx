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
    "5GiQergZcs83gvMGDbfPhCADYrp5nWYJhav9e7T1YmHNSiqVjjdovkud6un7a9raQ1USzaNKaPGNfRqqjUwcVhuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GBMhWJXanuRUZVtFPk79hJLgQzFoximkVZvkovDRCQ4K91kfrZJwhdKaaUZ8MAKrQAMT4Yo2YDzqagXTwRfKSz9",
  "key1": "9LJvXEA2BUZ9wumNUiWWkm3bRohbNYCjdxSdJFpjw1SVxfV9Bd5E4qk2o2ZhGo4VStG8nk3ep46LmgBLk46zNmy",
  "key2": "4Qhq1QLyMqmttxXDHVUManz6Z7Cv3cFHfdVhkLuejukTZryCtAcTe7KXtnpk6FhzFLA3BphdrY7dvYy7EphGZBSS",
  "key3": "2Q3ryLQMPrCa97oxzvrJXWGUE5VAHMVe9FfAc8MmhFQYhBCpg9WoZTb9hoLgvXqwwUZfWinyTC8BzxQ7YZwQJsdp",
  "key4": "2eXEB8xyZxLN7PcdHycDdRFdvhKELpLNUNFDYXBPjhSuuAfYSvxyC5HPjN7a3DCN8ZnZcz3gRn2XuZ8h5whpUN1v",
  "key5": "3iiibdNPNmgjuSXB8cZXmW4PgA7sgekwB3NzNfJMuDa8Xd9tLC4is8hXcaJm6sjkVFtcsaYaTWeHspwnXpBtmPFB",
  "key6": "o7NH7vBHPtm1brMqFw2CTtq3VbxC2Fw5fWfVhWtii7GJX13geRfw41kovFBvh42j9xQJZTmrAbZuBqRPsVTV3z6",
  "key7": "2ChnUThahgXU8C9mwsRo84j3PYzg7YUxjV4KdTjqQp17bEocpBPu4WaatdkjUuE4jcTXVF2jFWcWBavRiGkmZ5uc",
  "key8": "284ZgHZegQ6AC8k6jbFWz3kotCWtXsSHwFGdxNsR5WQzzvGmFFhPKac4ecw2R61zyFFMSwRXiwv7ENTGUiFcTKQj",
  "key9": "5zYvrGiSnQXGGUqQPoFEJJrLfDaB8HzfL5AHnjNG32K6auoWCXRrennQdPp4kZTsf9odnT7o9ckyYbk7RyQ6Fb4f",
  "key10": "3x4LaxQ5ym2FgxduRHzFbQ7om23SyUjJByMzWYpXbjBKkrvh4ThPwfVDTttJbUFwkr73LwyffVAjCZgnwuBx4axg",
  "key11": "67GgPg7B8AHKBuAzRdJ7SecSS73NTi46xt2brk1cLHESMdeYoe92cG8uXbD9UoW6ZzuLhtLXQpbSsUK1icqrud53",
  "key12": "8Xg5w84sZPieCydQAvv7SauinVD82xnfG6UHNpoHTZkP8HB31pCzvUHkcAG1cUx3LcyS1m1isUrqv2xgWJ3eKPt",
  "key13": "3KnDHCu9Yhka2YFCTnSVif4cb5Rgre84E2Mj1aCtf7QJvVSkV5L27zvfSvjhngZNWvJapYYa3Tm7qGWqRVLfHsRy",
  "key14": "3trn6nLRWVJjLFVbv5rxisinrZbPb8F97ccmZWkhzVLLpfLe7hYAmV6JNHCLxMUaWLYQtJUAiN6NDvhZgE1LZoKH",
  "key15": "56BC8eAfdqRXYn4YSHVPxUyTcqDpEeB6qL8oMbR9EVzgXUzDzn99n4TSkMqB8WVNteqD6LgLtCCRhQaqjw6G5pzh",
  "key16": "3z6uVUSE3njj76QToarjKzZjGkSs55zE3vo1TLkzhCiSbJCLpXnewURqpjphjGzNGWDMsdTReGW5YQ5pc8uRyzsb",
  "key17": "62KcWsnHFxSt1ekWMXboEKPGYwhVXy539skWDFJGgYcobGhqyjLFWt5SkBPj7hrfKHGu1MVh5PyRjaWoUm4i1pg5",
  "key18": "ndhxy93phbkMvZkB7CAA2BXkxxj7z4DxLCEnw7avKs4KPj6DLCufWqzYAChw6kaKiq5NBotLbn6BUfASuP19EcE",
  "key19": "4ucbQfYszPkY8cSzmeQUqikYYJM69C4Uxd6TjtGTDdZGJqHivK8dtL23DXXxYERPUGh4i5gd7kV1HSwJeVVhwZcJ",
  "key20": "XmAbzC5Go8F5arTakroNX3YXZqTG54zJZVmYzRZaCM93JDq6DhszZhgAycVut19UB298wjKN1UPMFE7cunGQ9gi",
  "key21": "U4L5CfDvtSKuM9HxabK96sVzKjLt7QMZpjMVht1MeL2uAunoywwkAiop5UzK6xhwRhLXjpHN2L33jGVTCHLc4ho",
  "key22": "dTatUY3MX8ny5VB1Bs6DkYaU9YiizAPgkE689Sk4gF2Jcrw8mw8vrLokiETTqGuZkDHukRPbGvpaojuFhv9gJbE",
  "key23": "38F3gGsA6Dht5kmLyjMprdm3CefpnNA3bCEknm6RmGur7MusqJQixJEop2nrKpG8rGeKmQK3ceXRDg8ZXY2g5iH7",
  "key24": "4ohUqH12fMVDdrPhVDAENoqeqoYZoKKPQ2PWgPzW2EYsUb8H3MiGHyR5zFkyTa1qCfEF9Sp1L3S3djqxj2ZwAuis",
  "key25": "2sLzPLJ9YHoCgbnSop4omJpMHRDzkapUsQEMFeW7pvNQtGCy6zRWYTCDApH1KWF1XZgbctnHC7T177exSRccuehq",
  "key26": "3vmKqBwvexHquJX32gdCtPacmTpGAuzng587mzXeLtAYLLnyK1ECZPttGtTFxYNRkxEa3jXJ7Ddrq6Djq6MqyCT9",
  "key27": "45ipNFhEmYbo5cPL42bhe1pYSPModsngb8hUCgbdKS2PGp4Z3o7WQTAfJvjv3c4QRekMhrbvY94ZGrVirAxaiR8q",
  "key28": "5wV3cMdamTxgBvGzXGCxN1QBCmkPA358bF4q5DY59pbQXaskGcAJLU9JB9bXUX8v9hCkMTtuondbDyo2iSQKvPbh",
  "key29": "kxuT8sWhkLYFGcjUXk7hGegxFtW6y4ka68RK84mM9mkvdDG7aSV3D7nHudEWou1Y13ecphDaPmXynfthZYNsGxj",
  "key30": "Wxhr8aS3rbV8EihVwLrD1R8vsD4rr1JRFEp8v7ZMFc4MXdC6KegohTvGHrqrFDSjgbEU3gSLiKA57vBAt3Vi5Md",
  "key31": "2F45LQCtMfELFFeUX1pgkTuzJ9eGP7ahe7EvRWrAbfT83ggcfNhUFNwiRXwBRsLNzjT6dVF7JAJob67n4bivYsQu",
  "key32": "36vprSdg8nxexsG9xByfuQR8LhUTYLvardiqzvoP3jybqQhVWFEpymjXoi6PQVugvt3TaDYzgJnXLtdgzWu8gvAf",
  "key33": "hwG1zNLiuDnq9f29HUbbaSw6UHLP4cNxodZeuU1fZpMNSQnY7S793QEYf58BXaHTm4jSarWuLe13q59doW5bN37",
  "key34": "29GjgRLr3L2FpnuiEeX9R4HcxUynKtHRCfNPnXp6zp5Ca4Lj6mmPeGSdiVwJC7BaVqEUbbY6HCnc9jMkGseuZggV",
  "key35": "5APdSywgiYRFc1gftPguG3kgfExebxfA3wDU4nJbMbbjouFm8CpjR3Uensu21f35zf8ptWhsru6m7jEuZ3MkEGhf",
  "key36": "5S94Gx1T2iotBPgnkzWbR2MQFeDsFQXhUMjFBVHbXHKuCp4UmfsHSKxLDF1EEcV1HCdVnhmcyB8GcbnFXVBssMCR",
  "key37": "4bZoTAZL1wvVuvR68puDwCRaLBsAgKkTQFNnGffuiSZ8vUnp41bs2JxBPX6JZJ2ZdwxUArFhAjvjzEaQ3UQX6zN2",
  "key38": "58RuTqcbCtAAFN45p3QP9x2czQyiTsLgVvuTMcVkwyhhLgrdECg8HyaJdSFMAE2dTJCoqixP8XeTyKr3e5TEXJcd"
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
