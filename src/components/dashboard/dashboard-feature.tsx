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
    "4VLfvUfMeK2KEJB7CqNsUnLdymASHTMEdbZvg7NHxrpHqAwfHbqkZxY2wBU1ciAjt2bz4y3WfqQiEqcNg75JpZBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S7tuXieEuQBAkBcRFdcwssK5N81yJRqZb46zq1sMXe4b5UrYUxp1263Vk7bmz1q6qCXCxnAkg3JaJ1Yo26hDbrR",
  "key1": "5G1LMfEjZfDB5mtMtwHE39eMSqmgKNPVJkNqUGCLwEAkczy349jUzPFENjLnce41MAGowBjQPjNZTmva4CKUhqsf",
  "key2": "2GP5y17epNT7CofFwqNsPpEvxfJbmCGAS1SWNCmAyHhfpGmDVsu79Hw3T5fLhvBRJcrqYvgyjyQsKsWnfqUQyBRA",
  "key3": "5uHvzKNwCfRVKW1MT5Qh2gUQTQZMr9Ez7CqSia6qjgfW45CYTs1Mpqms427jQqA45FXTB4WkpNHbhRKeBCw9RSde",
  "key4": "2Y1ueQfTenvhxipxYjFiub3PVFTLmzB2kthPQTK1pQ6cqNf17x2sVkwRHw75h4w52ALugcWxPVuZp7EK4fFZmfDD",
  "key5": "2nnXanTuMm7hLMvCV8LipDGvPG6Bj3munjvCoLhjBnPXPYh6zTuKR5yRpYaJuGp4bgVVjy6qCSeVwZG754nHeFr1",
  "key6": "4pEZF4R91QuGdDs154vCbnWFbuxcjx2hrkTvBQaZaVRPpv9AZ3ZcaqgGtG18ZHjJMPpCaRtARTiDou2DnKwp7hWd",
  "key7": "4YHVdMVCdZrTyjx3UcfJ7GzKhkPvHHujU9N1hunwmSM97u2UmbSpmhRWrABNiYo1AuLWbXVfzxSqfStrf5s4WZfM",
  "key8": "2LUVA6FkUeAjZgVfimh1xcrzx2VJ1ov6ySkJY4z7Es8KvrZSKWH4H3EopSKnzCqeKPrDCGCHt2FNV5iLt4G6zsH9",
  "key9": "3a9JMYWUyqZ9b6F3qsRuKYzE75NSkHtiT8x6MqJ6SUZ2rtXusykcNswg2LyZdtQuZqgoYWU1zsXiLMeb6MpcFbn5",
  "key10": "3hFm9q73XkttwhdK1qny4dcb5id7nqswWn8W8DTb5rQDf9MDW48CnnwzaeJ9hJsx4zi6xwYrNUUuddCmyoPVYPyD",
  "key11": "54od8Nm71CghJsCXNHqK8267av7aMfQwxR7cqcFXbFQLV2i3ZzF4hG72ZwJmnBcoYXNRoxHq8u34bAuEbTzacoPL",
  "key12": "3PY856YhKxvbg4YQcUvuncWV8Lnh3PVnBBM6habfkDyLXzEjLPekcGHsmEU5RvUs9LBvUfNcEvy18ZGRKb1MB2Nc",
  "key13": "2fZnCGKxUgrdB6Gzp4HDwDYrD6YAmofb6uYa1AZCTT5ZaYacnwUnKi6yWy3eGTLvMT2Z81c8zYffHRgTAxjf1YXz",
  "key14": "aWaFkBXRqfbfrWCrhZiqDVv59yFw8MpjAJB3cR5odAtpe82UDSTjq6tMEiQ74b7HVTAvE77wHPbdKgCbtwT5DR4",
  "key15": "47GtvVX1cM21nzripMbf1sPmiESpFMaBaWwcdeKVcscEpotQrNtRNiB1WAZmoCA3dAAG11Gcr8KPxKBbFhc49X9e",
  "key16": "3m7NSkg5kgoXmB5JyPM9rCPE3ZJBYfjjBEqukmASu7vwAJjj31E1WBPuAu79Y8csxgCiaQwfwXSrKrSwYAiRRMDe",
  "key17": "2HvjrMGF3rt2kaL4osTkztbL8WppbW5rSbFCY4NszuqqcWMktxX6PnDPKm6U1hGAttcE8g1QzKUEBZCmNpnnX98E",
  "key18": "2bNysTpnfWRdwx5UWe5zeTivk35Bew2upcbAR35duabdKC6aUnDEhbzHM4RoGuTH4e7zmURsY7yteZYs7aYqoKoN",
  "key19": "38w7RN3tK7KdxKvia6BgVHa4jq8hxvxwFy3iv3x9xLtZyRZBRbrS6sRb4vHAutGS56mhV2AUMu8JfBovYmoU2KYY",
  "key20": "5xaA6yvEQgAjwvFCoSLtXMEMjdRLaRXkxgR9mMV81cpbV4ViwFx3WxueTApjoByJAVzekFosHHwNcoFHLM3BwBVw",
  "key21": "4aRN6Y5ywwGx4dyMerMbwRRfDZUZsgeivVWxiVQfUaHjZDaT4rkvFDdtMZRPFYrswMVciRfpNULiqhfpvngzZJXm",
  "key22": "5Uh77WgmSRxrwmFRUdJsf8hLSG6YS8fXYcAzv1PqCvSjcRmom9vZujAVRL8dDPFeA2yWxCjfqKVqSPbW3fATQ39P",
  "key23": "2h1Q9eFrhos3yGQTVmXN9jnjk79rZQTVnP82ZEE698dMsAKxYJVs9YqGm1GZZBaLHgWwaAAqgBExJtkqYQK2XTR",
  "key24": "54PtaEzEreLLbktkdeSzPiwMxkHozPveHCfc2jt9vXLT8pnkzaFUb3yijs13sYzzutoW3GV6LhNUMdu64CnrjjfA",
  "key25": "KrY2UP6uRnz1ShSyopxAk2UAGavtULM99WMV6wvcqsmDX3mko7qJRHKd1xCakY53Zd2ThbyrXM3XpP7PV4GQKDh",
  "key26": "4VDVT22hs28kjAYn9AMtiG5khkjcBe5Jwz35XsHFSMYmP9auwJZo59cBeBAQyYo8P9ueK4K5ByLwMCDmjpUhzXbP",
  "key27": "3xV4AeMkHLaMDLHBdPuRWFc83MUA41axEtdYhtJ2z9noaT3ZHfZ8NnbAUM82fRcbnvuH4w4iJq8oK2GVEEAv9toF",
  "key28": "4qWvuwoZveWgVK7ud8uYTjQLfzFaRhbJVG7ZmU4FQQV2zii9dnNno6PQN3DR6K7ytC1tBv4EVaLzaQAUoKquRV7W",
  "key29": "5m93FvkxpUxKZGyfvphzJ2Zm7wGzmqK1gU4YKWetuA3BnHGTWk6bKNGhWLUnzmSXLWm83iRx92DBXvDh2AhWtU5f",
  "key30": "2xzoWF4WCDx8u6sG4DLHEmvE34PpbkdTRjnoquCacoctxHqLh82hApPGJQGnF91Vo53K9enDa3ZW2JWDXGFmWgyP",
  "key31": "5dbnSB3R98JmYSHSsSDi5t6r5jucjGHdF4ZjYfKju9RCi395pmabrZerpgVyEksDhmFAPv3GWGgHHMxJm9UKemog",
  "key32": "3mVyMnYvficKXgBttRnPmwTX7XzsPrrxaRUSNoXGmSdtXJzGrh6uekoigSQbWgt1kLapDPWKWJqJQMysxuzktSaH",
  "key33": "3a9uL8oF8yTrmW12GoXxjdF1bNykMdBDY1JWuTgQjbuH6gBF3wBzpHXkmAMtB5XTxKfc2ZzrffpeqeaPw5GvYuKj",
  "key34": "om3Mc1ja68zp1zEg1pqDGTAVwmRJbgQLbh8gF7KFyHYs5eKcwvGrgVLFNZcGEMSDbS4UTewNCrh6fE8Msc5ppmx",
  "key35": "4J3HNGbNwDLCHFGDhhCF8wHUDAxUg4vmALDzTBX9XfGiUD9pzNqs5aZJjTk3C8dMEViVqv3EZ8cbz7AQbXDeD8Vm",
  "key36": "2MUGYyZHMH4NpJ9EF1RghJu45us1A7EjskrgGxLVLdgYNPmt93CfqDCoacUfXJkZ1X22XAaYcVsWRf8HFxM9MwCn",
  "key37": "4fRPHCKC2jiShDcaWunfkLcpYJ43sXMhFnFnUdtPsAqnVcBPDWVKCF7ErssWzCt3hGrTdRiGKC8cLUWZADZjGxxk",
  "key38": "BY6AhbDFjrag4JsCGTGESjZNyTaWuXVVVR3MfpA4h4N29AGWYcZ4rapbmNbP6KMYztHLo3gKvCS8mKKDgGdPuAT",
  "key39": "4XPXjP2TJcKN8GqfGfC9nqxvKjkWhq2LzqpzKSBy8eS61FCBFi3ZnqN5x8bVVzfVsZtwBBASWL8QLRAwAiZAtZQ2",
  "key40": "3WFwRTGsXzRWqeF6MgcFiUALEMmPZkhvMgcLxYmgsrchBWszEKwfaLupqbChfzXMGt33nKw3Db6upep5MXgxGmuZ",
  "key41": "oPv4XEj1GDVXj69t22cu5FDeHotojJpKQf3FyYSmzHwdK6zZwxZkk4PbMmSo7oZmazGg5ME4s837HizpB8Z17Yv"
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
