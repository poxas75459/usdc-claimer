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
    "tWr8xKfF87aRQ6nJrdcmsLEWoMJuxfXEaQSWXae1Loc4GtXyittD7qoZVSbQC8tgzDW8s21DpdiFGMTMDpQeyM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuRxe159DqDRyV6bPFkVJViya5XCTFNhaK3uVDfXSt7msy3mhArc94sT3jAKsQTHJSDv8DW9AV3BbD3fDwVGa1W",
  "key1": "5uZFqdo91zMLvepT9ADw1xq9ooyPP4esTrZ1iMgoruTGkuDKH63XRsuJ61w4puqbt3FyYAfmoTxkGruMF3WSH4xa",
  "key2": "xtiy6xnpTR9yMMzMyNH4b2ikDYKAMoTCEYjeTamkqHevLCaRtTdKEDUwnFAt7HuxKChCACUFtxJwZRgcV1wvKGE",
  "key3": "57sCZwXkRx8GSqb12LZzguDAv3P9dLjAoof931cB9UTdMcj9DoAntGWw4g1f3ibB9m2kbRRi6XDGfdfhiXwdqTS7",
  "key4": "6qwDzJEG43MV17iqLWh6sNJvaLj4W2CnfrfLsDnR1jJ3CztKAWi2jrcj4h2ygigiugnEHPBb6fvXzhHNoovD9rX",
  "key5": "4QqYeE2go632scXdPgDgz5LsCacysj56UCSXt8ssDL3zThE6mVUMGGR7AixYX9edjN2GFcHFw9f6CL6iZLpgyTsw",
  "key6": "2JkFjuZjTfMVGRLNLokLH9FDygUWt5FhJsGywbwvs1BB463WpiuxtYuYgWM5hLjUrnBULw8kJMErZTxmd1Bfgtvn",
  "key7": "3X3M8tvL5UEhaqqJexejZ51fBMSRKo4V4BKr4zfZHo3czN7Qibu6FHK8J1Pcu5UFZDBDcSBn45EjNMpya8yS9Z5g",
  "key8": "5YKkHsLoXZhySc2fU8bsLTwBEDKHMLnwaFa7A3XLwvrgFGuwv3J8SLcCgX65zrd4PNsKUqxhc7tgX1N2CjmdVfG7",
  "key9": "443LLv1Fsokvjr5V5Yake4E9Wi9bbxDtvQ1qn9vDDp7peSj2FyVq55cWzCeJgpkzca6D4LJLEuYpejBPDVSneRnV",
  "key10": "5YxPdJVsnmhDWhcS4CmCAc2P1RspwUkPH6JbXz6Rib9FJ4wFmssuDjBRhZv3v1UfrT16ckP2TzUoFcos8vz9pCNR",
  "key11": "462mZSagWyYYKAUyXXrEwxdZrsrwHAmPYb8irnCduNuDqYytdqW6ziZHKzjBuNxYqwMJ5VCwUdBswAzUcpQArS5e",
  "key12": "2d9n4NLTXbXVXkz3hZWrgE454L5R67vf7yHQEG8R7zQNjkBtMVL5pCj6iKuZEk4kWhP9sUAv2ELGq7cuCAn1X4yy",
  "key13": "2YmfGu96wGhbpqWDMZd6Tbz5GvSEAQnACiipxgTFwhFbEz7JWYS9urxF4JBfBAC21YtR4v4L1LzMiZqu6s98mUfQ",
  "key14": "3y9pj297EEg5c5m7EGEZamTyS8bXqkHV1mdx2XcTwuUSqE7JwCd8CN3Bhz91bhzcVB8QK4GzMWbztbkX1ciWwNvU",
  "key15": "2TiFUHBC1c39B4BHBY54pwbVqg9szEV74rH2dThjzHKzuCUPXNgAYqnXC2bvSX3KjW4FbAXE5JQKfyiyn94evLMb",
  "key16": "5P85YEfdtSuJGKGvWEXCAph3dEDVY8v2XfiLVEU3d3BcFTvE5y4CRsn7m9KZNDkLUjH39dCQLXUbofsi8UcbzAvc",
  "key17": "536auqojag1FPwjoeQdYhFpJb1ctFDvUWbZPLhMjXgKKsYYrbEZUuAZynnEDFGigrYBovdrQw7aXaGAyLqm9WbsH",
  "key18": "4iuhHM5BxKfGfUneS8DpMxeSuQDgzWrb5cebXbevHccYpiu73D2MYUkQbtGY37T8ppBoM4kkTERbcm9etLHLFusp",
  "key19": "fZj9UZs6CaJFmMgjyVA678SaddZfrDoiKaSzLGzTDtXkwtFvCB1fwgiqAhcP3hvb52ybM5BZkA2pUWia4grAWpB",
  "key20": "4v7YvLds8yce5Z8zBn9PKDSXMcNAhiaREnjq88fZXzHVroZNGDM8m462jpmwHAkwHa4A6LMS2ASCFJW71e1VP85V",
  "key21": "3Kva8bdz7K1kjgzXnGzro86urxkWdnjPFsAsPB4LiCY168LSpjE9qYCVcxMXqm4hJtDqnTz8QRxQgxhnWy9qzdJm",
  "key22": "4rqSvNX7V6UCp24XMjptB2iFnKaGD1ZpAZ7fP4XCFQMTy8CouPQqdr2EjyKrpJik9waALE63ps54KGFojJMz5dzu",
  "key23": "2XoEcBiLh6FaQ564o6ReTZs8ACgDMaG5EAwFbJLpif3cfUr1V6kQXBnCTd9eoASySDqbANa9DY2UrGzZvWajn4Pk",
  "key24": "35sd3uJ9Dn4tFcHj9ypAASxE5HioHHbfd6RFbvGtPKzNoNY7d9hwGo2eEEk8QLNcPDAT1P99JK7rYq3uA3qKJV5d",
  "key25": "2NKvk21oVq1FtbJTjZLRuHqzmigPoS4ZFfoGm5wKvgfjV48wcNWVGfyixkXEfodnYpp3Kc3HLagcMZi5mYSi4BBK",
  "key26": "2hrAxG4t1kptAdYrKr8yb3o4SngNfSa2aA3Vt8PjhHR52pvJ63SHeY1opUXXRagj5emy2uTshduEcaAhmmisa225",
  "key27": "4aagMVWgEUyoATybsEtbdcya3UNe8N62M5KpSmfHvQy2u9j9uH7X8SLHD8sGrh9oCyaZ7ChYPVwL5EgGmRYfKmmb",
  "key28": "4utvyYxbTLzJ5WRzpuVzTt1oJvmEmuCkLa37JJEqCFkpbbuYLTTKgvUxgvWcxQiQtAWCDjHChNHcPxV8nsonmgfL",
  "key29": "2gYP3mAc14QUP2dKuf47Qq7JSjyj5NUFDUdeQmZGR9BXztpXuPZVMjpo9SLstqBdDtCBfH7egLQpspXWZCY9QADC"
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
