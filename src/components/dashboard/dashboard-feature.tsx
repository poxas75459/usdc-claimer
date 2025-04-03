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
    "K4ZJMwvDgW21cykDs5KifqJP7H1PHTxorsaoMnEpTB6VNjbxSvrjH5KMXgscrGv79Pt246ciq4vo3skHbnh5mRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eVeNtgPzy2Y5vsc7eAz9sgvtLJPaTSs4gPXRvtyD7PtUjhiSr3Me2RtW1HMvhJ53A31Z434gePeMBGUzSouwgYB",
  "key1": "6MQyKRn62fee3LEGHBLzYB4niuZkZoibZCcuzvyKLPrXLiWpm6FeYSdvLxUMsRBsJBqaeegpLqqGWUF1bFJXuLZ",
  "key2": "5SwcESxmXRWjHMWouZq9nLWyaeT5vrmtYaVV1Ddpk5U7LSh9Mo4xpaQwTGKMSb4eYzne3Ng5c9GdEv4ssJjaJyY8",
  "key3": "5M5ZyGtA39bTqT2cJihDDGtV8DSLXbQgFDbBYmZX691TMVjDFVbqA3PrR3UrJsxGu6iL88ifc2Y7DQ8rD9Ye9Cur",
  "key4": "43HaebrEBdF62PkzfAj6AKh3N326R9Hjv26aqtWAD1u8FHC7N8tzQJPxLnNKK7cLgvBPkyU49xThYEQdzw65EN4f",
  "key5": "5FYT6KNT6JuMqg5qP1kf3mCjyTiHY8aWJF9Apaf7SuVDfH8zcb46XqT38XN8cBS6RdcYAwHPqD5DVtTRinSsuZQ",
  "key6": "3qhsF7qZh9af6Twnerct7yhAhDfXfYpa2NRNggx8ngoRZB9HGEgSREvtN2J4c9h1HKR6cx7Bo2P52p9xgifiMxND",
  "key7": "3o3zRQsZL9RfDSnb6NnFxqLUrbTstUihDj6qQzNAkoLyse8yPm4gaF1RshT7XLAnGAJDKgHqhR2i4h13nKnczZ9G",
  "key8": "29dREzVpF6juavYomZFik8MUjKy6Jkv5fXSep25Co8hRStdjUDkk7cSEJdsBzLD7jwXsKeXbLHkJ9UfxDufECVzo",
  "key9": "5SnxAhgvRkxe57zafE51x9cRdmx1BJdnQyPrK6rE6raLM6YnvMK9zUXUugQYQqTL1ckHWYkPjxmZjQnmypwKxKz7",
  "key10": "2MZYS21rUf66xTyw65EeUqxTitmw3q4yAVmemx97SQNTcxj8KnKLVKehhqjKLinV1TWKBRE9UJmoeWpqkMgav1AK",
  "key11": "5qYDNkkRPMt5XjxBJeVruR5muYV3GH1h2u61oK9KYyifZAfUJEXDTTh2RdzZSbXUYY9aKvEyfZh1KtrHBw7EqA1o",
  "key12": "1LnbrmDXj1CxFnqELDy7tFqqztxhueD9SLtmMkqhYRQxJMtPahhwU5XVn111mCpS8rmzYwYPNghtiQ2N7KfMJzo",
  "key13": "wBDjH4Z1QsonyzfwSwDynaFRaDCuSnq678ty9aamqHYoCQejoEx7mvWEdioggD5fyV81T7d8dLXJxCyc6XVNq2B",
  "key14": "67d6e34UPff8izqn7nYQJ3sE7zSQyk5Q3774N6jUKxutvbYkn5KFZioxfMkyDFTQcXmscir6swnxry8mKpFNnLsx",
  "key15": "5mSihWYqGDFGBRoqBrGdNAPrJiJiMfsrKpDVCk4ifHLaUcwAy2FSyKHn9KC6QRCXWKEC5wwDydxTXCS1b7EoVsRY",
  "key16": "5cyjiimyUeBmRcMZWwoiF2wrSAweoENd58XtESJm6UbjDh7iLkeLNMn2dKzLRpB55kUesxRPX3ePJdLUiDSCkjev",
  "key17": "5ztKeiWZvP5cMJ1RrAReG2FcxhHVGXUP9vDMMXgP7HqNznSCQGsQkUNHntNvyvZUxAM4LAVgFyFQ3WKZSeMZzbh6",
  "key18": "yRaTL6kdqBfNo9SiKi2afJ5DHbgrU9jhLRX1CsW9gHcSD8JpjjqUP2jFtjSEWxqAsf49w9xuNt4K3LfCfSbHNvF",
  "key19": "62uR5ZDEB7nKVuAKpuuUeG9PiG26qZNVkYNkyGs2vUjfmMzkYPKwsK9F4du41C9K3Bc7wb3QFzY7vMzCcjXxyBaU",
  "key20": "54GcJgknYafVsL575SfkMDvLvfUGnTNeQiWzbC85jBDZqcjoWs36pksYgTFwfwnvTboUwpBapuH9ve4h9fxr987f",
  "key21": "ABvk8keHLdgaef6LSLgA4eaSBqoeBVJ8i55jBBNASqcZkpNyeLnNzyDiYKgDBGEzUK8shtjmAupD8QAttMTN2cZ",
  "key22": "3jfvAd11y9rvT3uodGQbvXwiYZaLU25PxvzyfVuF1NXmpBbyDEMxzV1jMWWSZAwjF5uVg2iqjFeRbDJfBA9w8XMf",
  "key23": "2ueYcCWrTZqq6umdmcjNTavf7ToxUcx8otP1yFEa1c1RCX1HQDBsMNk8fZb6PzhPZHew7mdrTyWsEn6CNMBxG9Bd",
  "key24": "SSRsyrb3vExGQ45w9qxKFUMaWH5f1Bj14XZgfHX5yXwYPRegvzf7GeRZpuMar2gkjdGtT8ZPmHWiNUNwjZGZa5C",
  "key25": "34RySEbC6gXNjf4ZcttaTnBk77FfVj24tjkEM32xpkxW4NXcmyhdte4o9wvPdTDQSMtxaSnGQKaaagApWnPES5hZ",
  "key26": "3iw4coqaChEuQZdZNKpE8v579tBwVzm7Jv9xax7mbkNJHvdcHCEi2MCD3MuYFLDtGfZtmtW8eQMBodPKKU6bt4oY",
  "key27": "dSzshPLKQx5xH2ap4G7QisrKyGnwjnpamCz2LipxPma1dpZM2c8DJuyy4njgAvv9aDPabJAnzZePxdGyKPfyAuR",
  "key28": "58wa7tnQqZuUAtQRZCpGxyjDJr5cPCR4x4SgEPA7eBpuBCbESzFKs4aYcdPCvaW6xnT6f5bX1rDbqtrLsc8pAykF",
  "key29": "2famRGHSiirZUfc1sasWehHxFnX2bhsroRzmVXpAGt3KhEKhhKusrR9rZSCLMxjJxgSVYe6guDqakEbpfk92hDfg",
  "key30": "4CR7c7jLbsFbgpQcPq3CkpKspNWn7BAASGGh9H8TTfgHxiU8tcwGBKGZcTJ7t97BQNUHm1nstox3PPQnJL4UNqxG",
  "key31": "5QecwPjsrd4KfXd8brk17eUwarEi2m3pFpDXZa5jEcSv3AHivszb4RPG4S4d9qWXzTh2GSGL92wwr4js7ecHVv9U",
  "key32": "4LD8R9umjKd7snS7CVn6LydDj5wGkktyhDx7Nm8614VH1fCPBGVE4mAVGJnQgWHPiS5dEhWhSCYg9pGQkZwCusaa",
  "key33": "acGV5Bm6mCPvwsKezP6nxM3vQBexwKQw4i8V2JrivvVwQMpaFiowhUZxrsmV3aiGZyyEDsXtL4mBxc6CrDAsgfz",
  "key34": "2pXrFTZZvyNZK2sFPszw9QJpapNYSN4W6XDFkvyQX7nC9omd5JNvGAysTGKg88QGtpPzTdyJBdtrKy3LfXsoazGk",
  "key35": "D2hGPM3BNRE1XwUcCqzghDzp5naQCCssQHVRHmxuz9SEu4xUcX5gzMyaCMQ8RaktSxHoNzXNViaR7xx2D4uTvBX",
  "key36": "2o1r3LW7WjJS9C1cqfcTKukV4M9VW24usBE3dAJWDxgYb8tUKV64VbWgTYkpcyMYTs63KGkLCPgdVT94FCcwdS9x",
  "key37": "2DM3YGtDvLw7UQCYwkyTqUWJo2oFXCXih44ViAtnhauApLtNA86hVAYk9jLPGcS13Mez7M9h8H8qnfumoite3z1g",
  "key38": "3C8AwH8WHAWJdX1xd7yb6CutgAQUhPyeio5SLpr34zD3PztTMiKbiR8ST3YkXjtwAZ2MTd56jQTUyNhJPkuBqxXE",
  "key39": "4VmYdUduzhxKwgagSNDVhpDFtsTuEfUc8fLBJ78LFtNCNepvoMHGSFNjBKDwDeHBNX9iX6hxNGydMfCEGHoysfxY",
  "key40": "3EeupGpabmehmJ6EyhuXGDMGzvfct9HNDX5FJdisV3CijHmA5AYP9q1WedV6r4AsjDvziRVnZGhHNubVhHvy4WgV",
  "key41": "5WoqmFGHeYXVZ187rS4zLeY68bTDfwwCNxF6o6qf5XVjWXUXwpsMzwthyCMMeWNKw6Gk9XugDWWSUPeMmVmpVHhk",
  "key42": "ZYPkaPvCRKz7AetcHqMBt7qAqHYNonLDQksKjgUWVoJpLJoTBxHn1dSi9SYF8VmDEpmaHsRZr3N4rT23A7HLSXJ",
  "key43": "u2dnq6eiEmk22wHfo8zGkVduDoNSxW2jRcxfbdt4wquVDuJA4r7MuezLH1nZfg435zzY9DbgdSsPdzmHRsd7Cux",
  "key44": "4DonG6GFrVGCE64xkWytm9QTAd1CJkgUNy9mBimK3x7v1mDfJCZBwwZqASH9qnBXjs6MkE7VyJzjDopMRcjPoZLs",
  "key45": "5sYp5t4YXazPeH3ivNFJq5LK5NkAf7xsiYSMv66pY7Qck49V3HBNn4xJn2FY7oKZseRMHs8YvGqaSFZtNq7sP14X",
  "key46": "spJvWEXTkpT8i3zdSpFD8V5VnPgNYJnVHu3FLzT2swVsDqKKDq34GcbMXXpGRwH3GeWBKap9t8GLDX9xURUp6Fw",
  "key47": "2sM6Jzg5UmixRTZ9B5BFqbUJ9miCcgF67UXEnTnniJ9Qct5asA5phuVy7yobjq4Ju499wgBteBavST6G1bzz43HF",
  "key48": "41S3i9d7u44Engq3Ds55X5j7uuKcZtCKBdjKMPTGSPEsejoMkPsvnuw2rTs4YHrKAmgrE78KEdFiD4Bj2Gg6xbNq",
  "key49": "5caw6FRsMtquucUMJxJSsvtv5Tcf9fW2CXPpvJHditp5Dtm9Kd5Pdtzq4X21n6D2AowD64LUwRhJwpTsZL8qTUSK"
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
