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
    "2XjqA7SwQjRxbf2qvbLknCCJuUXwMJE8eAsAcypVmUr89p6Btm7HHb5qRs7HTiM7vPvUxDpvHRUwv9jmjR9YuVD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bVrvXrwc5362LCZgo3xdBYKsDFKioi2UnKACqBhvhaX7DaDNbd2XPnCLLjAMvMb6mAWXjgRjj2w9m2x3vricv2v",
  "key1": "2eZsw3ZMSF6yNWjn7tT1rkgD3HPt6oMpuxDXuHer7SZDKWsKEw7FEXpXPgKy7BAuQfQVdxBohhe9VGPeXkdJ7NEn",
  "key2": "651h4duDFwzHn681BiV1tpS3Fb9wFZYkGja9nSuYsvsLkJn16No2CwRiL7innqqz6Dcgsf4tYi614krFVdV1Xyfr",
  "key3": "2q9QdDHwXKV215emVgkwrW7vCP2dTV3CFpxox3Uo9iYVY9FDfHL3TaZkCr3J6DuGtEKDq5WVtB98Q9XjWWuZaQSP",
  "key4": "5VTJpXP1jrE98965E1o5gjcmkUxyjxpmqSJKraDEo1Zp4DwgCXg4oGZMStWf66VT5q7ymwzw5r5sv1K7o7zyVKdU",
  "key5": "3oHf3tDYhZPW5czFhRQKqm25pgN9AibrqzDUpTsufMtkwFN5USuvnUkscFPXeKLQ1RFuqQ7JPFBeS5cmUC3LmNVC",
  "key6": "54gwJBC1hyZwGSqh455asB6j7V8hR15JGKGFKEmnkLkxDbmeoU9AUvSXcdq2ieyKHb8PkrsveNo79czgprsvpmSf",
  "key7": "sqe2suu4Hbq4MRcmex1ikPAAUKWpNpdbSs8NNg6W6iGSLibRkB9U9K5kCmLS1GVWiQQij7pfnL2WgjtcuJjEJWS",
  "key8": "icvbnHdpko6sk3XVt8cGDATpZ7Kp5ZvJSj79x2V1E8SoLFPP7QnXFPvKZx8v6S6tWczmh7ZVpEp34oSMkEHwGFa",
  "key9": "4GzcvqtyiZ6Std6vMYgoNdYsDwJkQZaVsTzgUKdV8ycER8erBka2QTVnijquR7ST6srUhpuRcWmHsRTrGhcaL1wd",
  "key10": "4BNSfBEeyuH4nL1HCHpzZUh4btVtSKZZesewK7JEm461FitHQbujFBvmRfqhJe46QbJPs7PfZcQMZ53KmJ79kFRQ",
  "key11": "2r2E3eXYoP82DWoNM9trvu6RiqAi5czR1kB8VtRKgCA9sn2FEbMt1wmVvXtwguqpoKZfQ1NWqpjNvx5YfBrdeybF",
  "key12": "33xw1TPjquJMmb8kYRsY48nvTFj6EiqJwza1CHJ4UU1aSGAfUrkfnJhetN6dR2Y6w3eSk5feBreLqivJ2V5D5tNn",
  "key13": "3nLcJzmJZVCyc61LepBDUENPWdf9EYd1vH6t184zaaeBfApfHfjj54iYsicJ5fmFshFmDRvam2LZKSUtCYLCZjJT",
  "key14": "4CX94g4ALH3KxPwzDgdwDcnowioBNWrGLhmiLDupkCGQUEbhiasZ97jWnr8nDcP5oTqRDGBP3MHvcWVZzGpsNUR3",
  "key15": "3JKy73LgQ6ppDr4v6RdR1DHjtcx29NAuvQyMxwG6Jf3YJJsKPBvpu7H4rVrzmjFkHeEc7dL5NgAuZgBv2m1LPFkS",
  "key16": "5q3zF5AfjM3BiJT6eLTNaNhMLV3BhW8ZdJXMka9heFU3quNhrqSHxPGi2MGVW4Qv6A8kLziYeZF2fRfTURAs2rh9",
  "key17": "3BD8Cqfc8jLcgpmTN4RnvqxV8Yyp4ewtmfZytXhjv8ZD8bBJHyuCvrMhXgKFqZeqxc1h7cmxbyPvmrdJvsYoeAhq",
  "key18": "4EfHUWcwzH2RoavgXrdetKwupPz1fMKoJxeZKt2CPJ6vxWDwtem9eYmGZUT1fToevLQ2W4yqp4ST16qCz1quyXrT",
  "key19": "5G8RFPHCYHkYLHos3BXNUv9XAuSk2hJngTZ9i7eJWLruC7zoMMgbMRnaLNJ5sguTQa5F5pitDe6GfSMmpnCRL89g",
  "key20": "4eDnjcnePErDGRAatMYW8W5bq7pjhrrbELnqw9coVv2oYDzjMci7f45EobQgpiX4z7fjAus5bVJGye6wj7mQ8WnF",
  "key21": "5dD1yASbBXtAntJs9X55sa9UzrMAZgSSYFsryhWUSUCeGBuZfgQTMWGYw2hqB9EpscspjMRdQwdvSMBZrjyt4a8u",
  "key22": "2sii7NJXTpS5Z4LsDqdkZjYtZBYA8xCm334hFHYDE5MyzyGeZfsHq55f7Nd7ZDbtUyvr4at4xJTQS9QcrqS8iMGV",
  "key23": "63FA8fEpr8fNkeY8apMUM5HKxhdDKqMxY4iNyREp1NqvBHbXNj3Ny6ykHy9dSDZ7mprNrjVfh8njEwTf3TatZJHw",
  "key24": "DXoP7Q9oJU2UdkgMrwK3iH1LemvuFWTfkduEc2QsHDDXB9CNCSTKKyApHizDuRjsm6HtL5fi7FNQ5drbZqiBvYA",
  "key25": "4Y64K1WNjwj5u7sWw454YUJbBLTurVeADGivNvKUCJjY1QxaoUteFWAzCYLbhUk9hprBVLf3ni29NR4kYbsDV66Y",
  "key26": "24wCYV5529f7qkKRYmEADamkJPEzqWWGTUCkrX22uUjdnBt9KvZoe3JVKDmus9CcpD47XzfiGTV8AzF4hwQPS2AL",
  "key27": "4ZN8gJKvBYAnsMGwkrAYcpChHBQCGBdNC8CU3nKZ8Dd1bzyuMWjfuwGG8JTqjvByHRZ18a9Aw8PHPL7cwmv6d32u",
  "key28": "2ZibGzbK3m9krfaJqjR3L9sHQesuabtzQCMfuaQhSg4qVQMmUGveenc1hyDWnB6dS5AmKYyHMo4F5Yry8NieLyL6",
  "key29": "bibbAbzsXTiesRCstZXmhohxDxRrVNs319Bg9wsPcmV2RpvkCKXYoq25teS2Z46d8bGQfK5XMm5BCgvjAUEwxR4",
  "key30": "4S5VBcEAzc5jxPsQsNrttuXaSg3XtThJCmSESsxJHXeA6reAVWokHTgNz2tnNsa1KNRFak3fu6gCZmJnSW6P77yB",
  "key31": "5uv2g6SgbTLsjpfGbzFgNMJE9faxwJNVCSZyZsmcTyq85RhgoXGsPSXvrZS3K3MV2cdEd43KrzzrSQQ3TZCwDCZC",
  "key32": "373aLR1rgixmuU8Xqc9qNq5enf4pnvj3jtkLzn9njvEMYXS5xKfH6NPorFV4oYGAmqCCnqp9tA2EyYy789gp9QmM",
  "key33": "3LSZAAXuJnqcMBza7R66ggRvP8ibAfyyszZKCCGr8cGc6anhU8hkjdG8QcwnurZhHhdtM2vjVRohBzDavXPFPPuZ",
  "key34": "66G6NnP1kaa9VzqiJoC6uGR5HVk34BTGx22DMaFsjBwmmtYev6B9BCdn2cyCXWgCsEE9v579xVFSzd19X1rwNqTT",
  "key35": "64hyGRZPUKjETXRtkwGH84jsaHMacS8gi5MUSVJNxVXhhn8grLvzZa4iLttMs2kRLscgkzoRVc4vNAWUrDhngJGx",
  "key36": "5ENapu2nXDiUANkGVCzkiianKYhPxHMcmJ6brW4SjXAMK5HD1X1KFfuzRCQLT7kB6GUHcrZjEBjBFdCZoSgjWuDf"
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
