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
    "45rmjrMA1carGaY2Fh156sFb91zLnMDZJaAEiXUSR2nGzkmbFWLsMfSYi3P2YRoLXgXivHABFacSveuULLzwS5ST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bREtFEE1fRYWVEf6iGibML6PBhz9zN6Lq7tzQJYxUnYnFnGxGDweYPxtqMpkzRXq1LiPy62LEhSMHju3eLd3aCG",
  "key1": "5rbjnVroo5A6FH9C7Qe8gSWSc7Dueoq5dabDWbgVHYbvUNadzrmQC21R7jGnocVTptEY1ZvLNSUxkYPmKsSoq6DX",
  "key2": "Kc8hsimg1qxb82gnCRR2fJEEoQXFq9bn1qn2wsrd8Y7zaMAPqcM3FMq7X54ETzJHXEEPiwxJZRfr4CjD94Txyjn",
  "key3": "om5HB72CxMYiys8mRfYQSTfx27A7aHnr3EthpVb2DrXAh55hmBKdxujF8egBTgYvLosyNjnEmCGASiFEUMyrKQa",
  "key4": "49Xr3Ey9WCgUHRNPckSfaLj8Kr2oa6JEQz1egNjsNS6dsjKWSC33jVkiudyuEH1QaczKZaCDGZueUPhihzvrmSbp",
  "key5": "4gariwyRdvmYx3hBZB78bGZLSv1rpr7v1UPmoVqq7LoZtYDULYPS5JVpaY9wgCVbz3WNBoxwgNiNHmoZ7DuKB7kp",
  "key6": "4gGXcsh5Mu43nbD3dxiBYZA89tRQLxUUzR5ha3jFTCq3c4NASqyqKTbwAXeX82bskT2fzEM73e41Krjy3VKRnD5z",
  "key7": "4tm7FM1zUSfqxDvwQgygSzLpnQZF7Yk2RJ7U793KwwYUgZH2qEkp8iCturkKWnMEfa79bpfciFM8MyoXt9HdhZJz",
  "key8": "3NUDJEtqpT1gg1M6gqMTorhS2FE63qeWQVnUZMS5Co2tqj92oBcMnW4LULDHcNyoJEhwGqsyUXiheYMkxjwi3yWW",
  "key9": "4pTteQ5PevecS4RrFEFweSGWyyN92X9GdNuQHzE32dMAu1BcLsQvK6qyL2GttKUJyQAppfcNCuDYXu2eKQ3PTCRv",
  "key10": "3n8XxWRECnEQvmD8BqCz71GGY8dVEHpqGyuXZxaYZx3GXT4PGRGyEfvUVzQ56s61KAriS5fvE8Bin5wk3tKL9kNG",
  "key11": "5xFZ3jTL1cvY5ZyRwrTucjvQKdezXVdrsBrnJmDhkqU6oLRCNNtykz4WR3FEwDiDUxwU6nncEijUd1EE7cDY9fGr",
  "key12": "5hdzwWSN4fWrK4LmvNRrTHcpLsD3aY797bChN4npLJ1YdcWjF5B6EWzy3nFP39Nxb3QZSMiWb7XvP7XB7MKsxrmw",
  "key13": "hr4WEu1yHUasJkwP4SJvEfQxxJZjycoYAu11ZveVJsVYbqfG6FAkSNj5CkKjkkubgnf4HjV2FxioV811xFWzG9p",
  "key14": "3dgpqCsyZRv7c23pFiqfMxw9iUPqj2DDeuZfM7ZNYika5foWmW5imif6v6difHdsrLf3UzYcMM3NnAJUAjnLKzj2",
  "key15": "5vz17S22gLgtku1XpUZ5R767DyUco8NAfxo9aXe2jnCbHti4WcWs7uNsx2iqVCTBWgBX4uswGugoucogDwHFsP8u",
  "key16": "2C8wrDxqTtraHvrhga7UzhES1V3JD7t32uqfy7mF4kdKV7iETyqVxVYVmUDvaNG1WZpveFi4krKd8THWpZsYthgv",
  "key17": "P5HRDcyHUftWpRnywkvHGxJ9nTcYWS5WWomeB7sDzU3qtng581jFRipH3mmEcLfihVoRsw1Utdm2EhgzqeayurG",
  "key18": "veiht1TvxbrfghSRXL1peGc66LRXw8W3urCFkV6fSYfjxL1QbLneX44ZzYy68bcSQVqWuphuT7Q4SVbDMUpG8EF",
  "key19": "t4oPgkwi5oQrSjrUJpnx97QG77EDV7SdWQkSxteoC1gpQdn8UBv6FYdjtSqvSHiraVkpU7HGMjY1XuVYH7ko3oM",
  "key20": "5YyBh5tg28CE4hbkiBxNjZZbtjTdwuMDpTMnKAvJjAJKm1uHdPNzrnqiQrGCgA7FME4ceXENgLkb5NHNmDpCnbjx",
  "key21": "36m5A32mafWEH7vEWhvbuV6xACejyxia1LfDsffx9cBjRjTb6CGgv2KMkz59AHSNa5PdtGSZynPaG4YPKqkDWukn",
  "key22": "325VRWDiWc6Kv5xu13qTRtM7UChXJ5xJbPpqnB3mqYtjvjDp6cnS9HB1Tj9V3YwRkAKZLo1XLxdnhM5ZUvwCChuZ",
  "key23": "2xYyuFk6a37ADSHbgjDZmuECfHKYRVfmKWF2vURjwULqLNTvSttHb7TSvLZKiS57CfEmRUnYWZEDYbqtmWBcaXUN",
  "key24": "2JePybdvkBziBzFkpya2ZDaypUjSxHPbeg88MggMPy1Q3TXAPFofztEBqu5cgYDiKUNMacEHdAHuLB5eGz8UHJqn",
  "key25": "3x7NE24p89BRHrMDStLCuFMm6tYw8PjHVYrKghDtkngqfSMVGjX5SYmJ5wEdy1vTBfUgkwxaZYrpxg4CwVzaweZB",
  "key26": "2z2espMMxm65RMDLx1Utdemz5udXxcj8tWHGEqK4P6TKTRPVgV41fucXUd9x3s4DTPiyh1rgwzpNKkckBwJN5pDR",
  "key27": "63qmiTfrYv2a9Bp75BtoEKzoPCbrhDqz49h8vGTjXPdQPZzABuuWUA4PqNbTJsJmv4ix3YqxWJVKboXuDyB7qmnc",
  "key28": "4YcWxkXDJvTmSVExkyrqXH7r1PejjEHpw7Y3rwfJjG7udGTeU7qPipmgTGoajg5H3aAYfDX4CALNk1zrvkNcLRWi",
  "key29": "63MDNwhAMgsjTMvx166ASsdDFUMZvyUJvU7tMumReoi6c87nfh94kzJvQALh9eZaMsUydgHvcNKH3AftxRE65Ws",
  "key30": "4EoF3Ko7R78Uezk7Pabz4t9HPiCEqM5xNH9VVxuhm8MML5jiE195YT4yn2WAH1tp7cgiCJyczxeg6yBNWeXjNVKJ",
  "key31": "6781FseDjkS6jTfWAh1bMe8Fvrx2i6g6WtdaLhdBqc5RKygcEvXNSAFooQFxBphgkzpYraSGb7XQBxQYBfdXbPfZ",
  "key32": "GmznK3CK6dKiMSStpURDFU9aVwYiTG4KxU4LV84oezm3ZTbNzuSYR6N6gmDxCoqnsQXFMFHcAYWpBD9EaeN1Jeb",
  "key33": "3NPx6nZ3y4cAmNAGXFeMMAgYtb7ULwAfVaxdAu1qVfPNLWTzR6QZ8waXYJT2hJuSWsKT8kT9dQm6SrV6vp4M9fPm",
  "key34": "asNWwsUgNVY9t7QsxfoJKPWvryD31GGYVeLCqXJ56EXuNLoSJZ6sQyNEMbRFB6qvMDiwucq83uEMh7ymoFEBRej",
  "key35": "ededApn6USz8WCvSSzghXsxvZPuQ1Cc2UmeM7pihpU6zLhJyVjUyTmnE5PWjMV9Ks9Tktu2RzRsPoC1HS3u5tNc",
  "key36": "x8mpPaNKGkiDDdHJ8SkK5zMrKkmbwHbUEKkx1M7STYpiH7NW3y1tfowCf4rYF14UYY5MJXc7FrM4J2grcd2vsvx",
  "key37": "4k4iKC6UnfHDn1iqQEvdu9Cc1K7QanCuej6xa3oHeSticsD1CbQtpAtLrMJr3nHfGaUD5946PDDn9G2JmpoZi7nk",
  "key38": "4u4qS2ZX2DHzf6XEvjn16bQuedSR9HJrCTB5nQQ9j3SKNy6KvQJp7Wp78yUdv9pnYVqD4kxBesqf7fjeLTUPKzg"
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
