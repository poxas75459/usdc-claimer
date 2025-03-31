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
    "64bgjXjaFhUFmP92bCSFg3BpLox9RFAwr1TiFtpWZnffx5SWj286jMxTFS2j6WRZ7DPe8ETBhwoRnF4jwmNckKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jwArEaZYS3AHndn9wU55Z8tEx7pBLhXoi57gqdzSXtMiWbemx2Hqcu7vPsJF381T7ZNRgtS8FtG1cZkucys5d4c",
  "key1": "tKQ6MPLMFpqXjb9cDMzwSvePmqyd7tpiMyFEeU7y3oM3nCSPLjBwFQMEegkSvoo2ttTJ5GjRitEiRQ5FBHv2tsh",
  "key2": "vwnimHXqXLZYB2SkJK8GxhbGcidU5oTUzTN7w82cdazRvVE4kCM1WqDvYxNPK7baQjq1Bh3vz3MqkbofZZrhAyt",
  "key3": "4fdEafKEicboSmzbeq5muLBj2sRMn8T8LVAGq35Wwoi8GjqxWKaNmCpTqRWfWMkD36MVWKeCmpmzrrSuKmgb5nFd",
  "key4": "5FV3WHVTMER3WW3ikU8mGzKUgDKCBmegJT4oTMBHkNkG1kGFiAQggY7wrPQ4soHG9HS79uZFQK8eHBSrwb6BeY7B",
  "key5": "4VTEcnmy72AWYM6Skv8nAtJ9dQa643z4WszDXwGs97gCkK3bigeXbRv4QGzN1GvHgqr7QdTKDxDkjEmitXPXD6jh",
  "key6": "4M6pLPSxu8uSQqnWk3V1xwBfXMbmcBHjHgQ2GMBrHqzUmmLcpz7o52Eg66QGp7Xwz9fq1bRe3RVYHa6Um7hdSAKG",
  "key7": "5HSyWgTgbo8UJi1QBR33seqZEvvNAAVNPJiPx9ZwLG1WFjueRi7HJSsQmitg4UwtPy6rKSMy1S9jYwtLbSW1MUCD",
  "key8": "4UTYDt9GwVf2u7mh9imKg5cytLA7Hb6jmGSuW9zaVp892xaTgstTCVfCuJaZDPWhhxw9ANhE3DPyQWsW4k9PgBiU",
  "key9": "4JtUPN8VXuFj6hsRC2pyVJMh3dojPbdg9ERu1hUz6EcXZmHnAS6gx1c8dm6NyJseGRVkoJtJJGTqpzwXtHtpkpNg",
  "key10": "2MSk92Sgsgf5sZhbiAw82kkHxZjHV2RsZhMZm49F6vFzh6nmo9NhYkdcNL4GAZvg8gFxi39uqnLyFHXwdUntEkrZ",
  "key11": "3YTNTd9gbCmHSQhd5zEgj1JKGaB31zQZW3qLaAZYk5jA5MZC6irRCXUWRS4ZZT7YHCaornYg7e7PtAHvNFgaWKce",
  "key12": "3972bPVYM3rkhCnRiY6SLft376FMFX4x55KnNRt5GALnBDNPdPCJfDs6DRpr89ZWgyCGF3GW2bA7bfTwCn5EMCfv",
  "key13": "2GKw4v8xCTwYtLHEC6knc37bNtcGpU4U43i8ZNBgnBNEiQ8HSrZugCE3DmrDZxEgeCFhp4hmUxwEJShVSqMAMU78",
  "key14": "4pTZAvduiqf4ntQ53Ap76tbRggC17WNx1tvb7T1vSt2aFZUAnMSgCYF5UmNg775AwdZLA3zQAuuiPGWTQ9EBTVxZ",
  "key15": "3HwtDc2mqTdwiXHZiob8LNcLQFT4EC6g6jVhuSzA22bgwtWbcoyUPz64Yf1bF8kSjvd2ZFktQQKkBe24NDn6LZ1R",
  "key16": "28w6PXDZUMYLqM89Bccbg5KtSNVmdCdECQdaKzTTPS6RmtyKd3jmvmgBcLhFFpvb84ebD99yATVVYn6vN9KbqWtV",
  "key17": "4KTqWTAyDC5q168opWpG811y85cPNbahkfKjUeNf3mz4ZdXjZiTmDAcbcxPC6WYg2CfUCJkZuPimRnpPKMjMyJtB",
  "key18": "5XYJNsxvM1rcjT5vuF5gikxEZFTamWLodr6fd1sW5gse9XxyrCSzK2oMPjVZSwKmACYbSB3hpFjCRq27F7qLGaiZ",
  "key19": "5kf7PG3BQ8XdVsh3cKp1HB2f2AdKr9oh3Yknyja8JS2Me14YMkGBmbeWf1md57wpwKsawXFhtnPV4PKzb4MCgWXk",
  "key20": "3MK4zBdCZw8xSjJCGzYxd7ct9EANkNKsv3X8hLifY6Xi2sH5wqt826ovfPnLbBGLfJXjTVBG9pttBd4LUayxHnhv",
  "key21": "3QnpPWYE72U9iQjyHeVFc24GnFufMfp5bimtrJW1AW66moq2FnoK7c7JdVAk7s9MiFcYu87EpgYKQUaiy5APpAnt",
  "key22": "2Bp9sfqNMnaCtLgszvCDSsksxs6eno7owDYVH739gwXEBL7qSJGbm242P2uEP9PMxJ3EVxf6kd5nnotDwGkurn5m",
  "key23": "2p2ELNtDtUjJyKF5Xms8ZoinoWUKCp16mgVHJdCaaEyj5jSxyA9zg2hB1h3BLzUZN5GqhSXR8UvMp4BHAsPCzt9p",
  "key24": "3ftJPTKTscjMECojLCiLX7FiBvBcYqwKucCiLmdWCXiDMfhn9ysvZWC8sjc2N9SrpryvWuqAkPzgx8gyGSFGu1Gg",
  "key25": "A6gTdzBXipCbnxTkLKbxsQqESUgJHCiv1ht2vtm7H8MQTpSgdrgWHUCgvs19WSZRApNhh7Lp6R5AMxrsE9DNVBC",
  "key26": "2SWFNo9QiNu1bgHuwQUUAnd7jw1MQeJBXGYC8XfUFkaahm4ejWS3UmSgU2WdXGczeifPvemMyNkhLZhT2oGF2zNj",
  "key27": "2R6tpzvZbkJ17KA9yr91k9xTMDr9SB6mQuzGCEVCR5cY4cFsJBdYVJaCNfYKL7CGrFs5i2Y2wAKo2amjrc6MKnAx",
  "key28": "27rtTSqiULR5LrSeqoX63jSxnyZfkTXN7oENVKtHR4TabEom6xQrYB1MsvLSd9tSMqcYy4EUZsxLWHiFyLKEykRK",
  "key29": "dWrTxkYhZGfphmvQwjEzLwe8mkNLjRUCmZjjfc2iS7o2PwQa6eGXr2Cm6Cmz69vcGhvp2oLgKbbfqSKpNDYHNVA",
  "key30": "47NJGxfw8peJb75d5GvoUyxa9McxvSi8KJDzvFv4e169P5S9PpwVWykNfiagDjRTFPYGEL6Dg4vjib29zyx17vAx",
  "key31": "pSS1aWfdjzEE9WAN7usLuYc5fSGXvHcNapUSVQrfkJzTdhXqNkWuHKPNG7A9uFLuzoRuYzarnGne9kTTAsz51nP",
  "key32": "3keUaBXS3Z7eDxX6Kyprcy3Baz6XZVeiN8e8Vn6fgNMeDh2ZBP97JnA9taWdFuYfYcexLDEN14TiP3csLYrdwHZ7",
  "key33": "464HkJEfhC3YVfT7MrLGbMEC1mviYwaSwSD7nVd29bva1ZAsgFDwY68fwwB1VfWGkn1jFioLCzafefuu6898DsAb",
  "key34": "2J6p76CVCrS8wb15KhCwwKdxZbWqFkAbmbBvMrzxqmeejYbYuzVBDfYqGzbJD9sxPhxogQj68jiD1UyqoJCQH6Eu",
  "key35": "LLjun92CApnT6hGDT6SGaXMEYi32ZZD2XMFxhMoAUEx8sSnSUebNkNWvWWyo76pT9LDrLSqkrMYXZ8suuwgne4s",
  "key36": "3eJQRgee8QWjPTFYJKNEe7SopdLjWnRYGorPgCax9dSwmgKbep16DhtvSWxNR5g9QCa9oVTDB3o25HQhAtdeWvoP",
  "key37": "e1MEBKmt2HwGKRRMw82LpcmoKhLnQ1C3MDRV1Qt7Ju7KYGE6UWXe3ZNNYxA53JcUEPMdbq4YEBBwHuSNnkk5oh4",
  "key38": "4WRbMWPzDspSbz4eyRrkZSNFiSsKhE7ZJanWf4ehZMvH8nGq2YcVDC5jypB9CfCeeHYM4nNE727uMRGEKSrXKyVX"
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
