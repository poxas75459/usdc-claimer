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
    "YwQdDSF9tZ84smfnUTCpPi8f7cx4afeXZuLU2TYGUSacdPqF2wRfUmWScWYr1wVvUjKWXvsd79beSzTRdyLpFQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h3CCfEt7jArDpDGpaona4sseoX8fEQWtRsgSVJsqoZyU8oTJBebHTcWvhKS6UbaSxRZ7uWSLyzztC4kuw43S2wN",
  "key1": "2Vp2LDx3ifXF1KpqMnsGKFAw4RFY4ey3nj9u1tGWvTZWMmY7KaS15t4jNQZZAbdoFnckF11YpGfBBsRbvF6JuaBW",
  "key2": "5NPivVCqpLV26cainPmJFXB7ERAd31e2rUp61pAKxACvPfdjafzkjqnrDzyqzY5DABEXq9Zy5Ws3gvqnAjd9XWw6",
  "key3": "3ocwqMZzK4s6VaRYj1n4B73Sz96ssPSGQstWZg4U1eJWTq5h86WEbh7D24Hq6gmqwh1CWVTLzCgJHZ6Bu9eyc488",
  "key4": "AP7QuLnyd27EuqP1QZZZn7NxoRGcVhZ4A9DXE9HBrs883wapWEemKi5X4VJpU3p1quUtyEqiKEF77wEYDkNncZh",
  "key5": "2NyNGf9ZWEEyLWJX1QGPX7sdPSRmQXYmVJ9iwowShUXVVh2nsHyiLgbNyAJPBiokKu2dkcxLx2EBZmJxMHbnFknm",
  "key6": "4W7aT9d9x2MT3UopXMpsmyu5AAJqTgLg5Xm4cEjBFp3omZqAYn6NgxfXeidKG6nCLckQhstseyYLxiUbEmmhzeFY",
  "key7": "557UPNshAsmwEFLvzSpYUGQue3Le4XoA7twoYYc1iHUm3rdmPqYXyqvoS8ps9tfQQxGexnyGXmvssEmpDf2zyV61",
  "key8": "gWiTQHBk5tKNTCr69MtSwpfjKjnqV9uZdY6CpGetu7bBpm6WDtNtT3q1P4CJPM3GCUMgEcXZjzf86fBgPHJkcxD",
  "key9": "24S1nVfS3KAH32tnnMpuhanRn7hAQcC1HjCtv5NpDRMYPNA4ZPWLn14dSvChqpJo2LTKQZ2H5W4cjWMf1y31tfjU",
  "key10": "3YigvnR3n7yjQADwahYYYvtUYj2ZdTsqXHWt5RsdLmgLdzNHhdRuogQtftzajAuJChFDNknnv6oDkJZav3FZPFCB",
  "key11": "53jesps9GPgbNRPuLjsmBB7xZKk8h5DaezyrgJ7VEQcqMkzR6rpnpT4hZ7kFqyGvKbCQh9BGZb3hMTxAw8fYZK7H",
  "key12": "He46rbywbFFa5H3c8birsYCLPHpQexJQDxXsZXc6zSuhDhLSfVFb9nox51QwXs7xCBfnQKwKh6Npp8LFrDRzrsY",
  "key13": "2WN3MyaCWhuC4rFojaVgRkgDPwP2sebAupXNHWu6pKk2RiTyBhMXRpefpXfWS9rhwwXLUHctiBBJWZJmqjZfu25E",
  "key14": "5Q5uetRbjzpRYCJyYjDZMF8XzRxUDFEkFRsZjeeASE98a16RF6mY47pTbqrMGqUxkhDmE94MmtcN8FqqzsXEM9CE",
  "key15": "3RwHLLJxoH4Ur3MCXxEnPiECp9t7AcphPFE9d4w8icfaRNZo1cYBvPogBip7wj6oSnF36MdPyLA5B34nj3WnWbcQ",
  "key16": "579mzp6dnXByMGbeWHLpGBFp5twxf4x4fGjtKvEcph3YnUUgR5g3Vcg8J3pizaaQgqU5Z3hkx7HLD5a9PzADafx8",
  "key17": "2JeXr5cLWeDtYFVU5S6Vi1DUJbUTKPXm3TX3dS55k28fXpJzeiS4MHpcnfgDgFFdhoYqhmyoehJc4mNHUSBrr251",
  "key18": "3NUZt89rvHS1t6Jn9fYrbhh37uJxGMbY4UFwCxNCJiYn46L2F2bPqAdwJEofsHyq2iX8uUWX5ccqkbdc6apx4scc",
  "key19": "2vX1JtH8px8YeVEUcLFeBbmmq9LUDtr8zF4Pij7qr8vXFqC8UzbZ67PKXfVBPfNPc9F5fmwkAbfLbhFCwNudkv5i",
  "key20": "321pWDEE6WXSftz55zG1iMGXQSqkhwBbuxceQcWV9QV3bQMU8ej7RZth4LJXpaYn4pkbv5piMFe3pGYPxvArRQPR",
  "key21": "4C6sjqT9o56xmWd5vGewHa3RHyE7deRXaj7x5za2y32dJccFYFMUWfZiYbSBspBASGdzsrLAQe1h2bxsnXETpSmm",
  "key22": "q4w8GiRGnSjH526bGKW4W7xKq3j5Q78NsoDakZ9h4uJDBdh7HgqoadrQ5RP5H6X9eWs8JoXZKy6tt4Kp4HBnnox",
  "key23": "3FcaLEXqNpjai1FV213Jg7aMa4JTjfPETJRdzjREY1DgkjZx3auYPkcop5tbmo4pyA1YwRck9ytdH3eLh8octmbB",
  "key24": "r4bVDkWp2bUSFezm3xq2qzroJ26Hmpx5WSo22bxjBnWyDCW3sKa1ia8o7rdmUsDz4Ke4KbWveTR2YYtmcdedPTe",
  "key25": "2MpevBBZRy5zCDe2aMdAb8pugD1cSXJZWuNujHSA17qoXoSc3tB4TQqKHfzE8gnqKFEPkECKAPCLuLjHceNjqCcp",
  "key26": "3aWyPkwASHxwbK5yuNCsSRphY2jrUCsD6SLK1A4xm2zUE2oF4wtfe3ydUcWR7ZJNJnTzHszjuQNf6xQwMHgF4hYc",
  "key27": "wFzXk9v54vZYqR8LiRy1kAmLymPCNzpVbgsUbPThgSuZYrV4LCcbgGmQ8FMqXLmnMdic9UC2TGjp4VHHRP5DD2e",
  "key28": "5PVEPUkz3CXfskPM9mVvFgHHeo15zm9nyFffxDfyF5KAs83BJLtZLogURn3hqV4KBqd9cbTYCFRBk2czMKHFXhbX",
  "key29": "5jmLJQDRBKHe8zDxWbSUGiSxoFgSLf9F4srU7S6GPfyKeZ1vtu4WFHZwMaE6f9tio2MgceNsbVUNNryZxsiMUaAp",
  "key30": "55DHpEMLYJmCBkhrKCJtQyZutkZ2uWKG93dhyhAC3PEUXBrvTfXje3mBBCCEUt9EQ8L7rioKPkT3MDyNUvYRH1zB",
  "key31": "4dj45tEyJAajHQm9gWrz2iBthMjPPQ4X8Yo9UZzYcUetLjXhVUAPce98ThuiZmgxtnXJ8ERgRwKqkq393sVc7kc5",
  "key32": "5dx9UAPAAY3ddLW55sFrsMuaSeeaQz5zSuzToX4Uu123fS2A2eaMRyvsz3HRHLeSZX7LUyTvGLt4R8SBDPi8baoJ",
  "key33": "4kKuwoB5VenCGZaYr4wuksahEqb8NECCLAiapUTHxA6mWxQpkMQMpcrh9TsHzCdiCPrLKX9xh1xmH4Jfdv2BUqSK",
  "key34": "23WtyFF2CqSCsTZr7HrVvdH2AGHBawV1q4u7QT1bca2egu4uYqsYx5CVmcdvESdhBtU7Tcb6j2fSAxERSyQUKtCX",
  "key35": "eDnNGCZWu75N1fAbT5914hW62JgZ2sJmQfJeHW4F37vMAUdjPm9NJrrdZA6Vt1bkbMhsA2AYGFHgSYwcgdbpnCg",
  "key36": "5UfxNuZJXva5UBRoKZMuwTgK1ibAZsYk1GheRUx3fVr44mvkYQbRQ5xbjxcZh7E5yRNsKVA5B5X6wH7XyYwYTa1E"
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
