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
    "yFgpPmGg8WYFP7v2pD65nTz7KZ9xZixzjhHrsarKViYbr8BEMp8YeNJBju9VqWTkGVoGiSYi1SZrdqwTT74r8RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wenbGWd6yeU6wDwbHGQyqHvKmB6rpX5d3gyQL6yKmWPcNQ7Ehv7N42KiFNVAMYRUywXWfcCxRKYu2aMDAPBLa8B",
  "key1": "2kvbTKevyJgktnTxk5Wxudy6VGHzkdAs7D3LRAWvEtiihYfLA14EfQ3fKM9bxVFVnU3dE7aGcEWnCTGZC4UxxLVx",
  "key2": "3TgNEv23NvHtUQESFd4WqaKKEDhwo75YgVvAuLGvb2PoZkBWk9DJz6ceHK8DinoE8yMCxMLao3zRCnoxWdxVphux",
  "key3": "5vHT4VTVULrdLQi3xnLdMDY5yGynmPr8MkBBE8JcS42Em3ZaYYqFmrQpwoFbU951UrY3iHLNhP4oUPGNVsKSMeut",
  "key4": "s6EXB7tU3WbXboLVrPKGsH7EuNm62UdFYYf6Mk36DJtGCHtWvtVCNNk9Uv9YQQYpCsVoW35umhxLTf8eMJrEy8u",
  "key5": "55afNMsJEr18fPuFMDoubkJkoApgzz6jh2afe3iT1eBVMP69wwciFgCqLVEBtj3hAv7ebJbV2jJD3ki4KyWyKt9W",
  "key6": "4GJbTm3Hexc7xu9m7hJCLkDfQeWYyyHvFHD9p3xPCe6WyHTiREYj77dKJMXgCR4k1myekjLtboDBmmL9GRYbgAvj",
  "key7": "5YCBbrzBTsbv8buhbGFt5sqZdTSkyGT6D6LVAmMkB1FTTZQ5ZrgakWFs3NLgTnXFVYQ2D5qLx32kQgGFH9Wu4UCk",
  "key8": "2poZHPGQZdbgJFLS7hskkHf6X28eR33ebQ5fNwGobMke3z3TSmvysv7DJKAVrqMiJK7Z5hYUSUyGcfRA9UbZ3z5H",
  "key9": "HfjMgLbpPAgTDgGMmjLZcBJqKcBBVgxyAkb7TN8zbK6XMp6sLzysRSRYVwqH2HRD7EwrAZNknom5sPaNPCPgznL",
  "key10": "43vPwc8YaTFaVJzdYSoD8J6mwqKxDoLxTNYFWAmQbeTPM9xF77Z9kwLbTRJPjm9jLHeZkCGeGNYJhgtEDReJY7L7",
  "key11": "4cEpzWmkm3Znr1kgiH81tR6pKRxviV7DLH7cogJbmmosoCjUKDSz7FW6hYZHVMZbuY4GxHFF9hhFkTSLz6XZuwHE",
  "key12": "5qJaKjQyM4R8mEJZe4msswxp6Wj9TjexqLsVB4a781neQJeZQ85Rzw8SgJgDLgg6wpMqnukSpvK1TyUWvZ2q5aYG",
  "key13": "62uTw2owB9FBARXbQaYhojchxsEqvZhfKu5y3AJguaFJGw3N2TPUBzH6VssrmrZTbYGCrMPfeJWmTWhTCXRYxADQ",
  "key14": "3GYUegTUpJf4vczbNTXFRq681CbMmjH4iGN7be7kgiELGU3CKsiTZdw3sKQFsNmx2i56tGCQusMkLUzWJYrRQxCA",
  "key15": "pLVMs9j2dcypfxxbdjH2FGeN2aLZufxkqGfh9338thefMFqufHpAvgQRFJtX7V2VD2pnu89sqDdZKTaVffHZVj8",
  "key16": "4SYyMAZewXNMBceYCAi4mqAqnZr6fg4HY5XW5tjKqaHv8vHVojMLVpHwsGrnnieepPqbVXkBKuex6m4T5XJ7z4J",
  "key17": "3fGzbZFGGxKqMutuBfCZPn3jcVsceKidza5jh3hn4gUk7BisyAZRRNuM2siS5PkfVdmdh1o5QRfuwg7dg4prFNGt",
  "key18": "67DJzgUNh9nHLqb5Xx5DGS3fk1BcYVnFNTzVypD3XEzcJ5Dae8agQdn53R4BEFX39BVm1EKhDgKHo4F8DhcUqMTN",
  "key19": "2WG9ouLfSesDMwNRxq6xPGLtFkttywQ7CpwmmVaLrbGmERGdaGxAxmrCBSRied3WA8HNfRwh3pSjFmHNeJJ1NcKY",
  "key20": "3XxkM7JTvjmgSH4mrASEzn6C4sHucAKDLBvAkqYzqcWsjcNep9XvCD6bG4pxmX7uefpAazA66s19r3NhSMYUimdj",
  "key21": "29uaDWx6tdh6VAz8bBtJ6SauyxLtvGYTZRmuk58t9ZDaMq1neCt8LUdPJfMqpXm8fwL2CiHUYkeytmbZWLd2mKEU",
  "key22": "3FtH25ecwt441sdANPE6wVtGeHXdHebNwz8Ppe1xD3CcS2crK4QyB2KxiK3r2xuPZqv1EhnPWT7FNEvgKsDFVA87",
  "key23": "3fLvSwMYU8P4hFCcVnP7PPFLV3pBWuQgf8SQsMqWCHJu3sK46jrnEGUS3GJiwwe5ZS5XtgqfdsXq8RNgm7rYQtF6",
  "key24": "5Nb2zvGqSpXLmhxeMkV4QSv5SWzzAH9yKySxuVy3nfGJM1i7cds5DQtCchHVdN7oqA4pLm1B959u229BBNdNAd9y"
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
