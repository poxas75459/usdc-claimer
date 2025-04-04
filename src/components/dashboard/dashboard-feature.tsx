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
    "38tYdqa7Q1qV5MpuHBgbt49Dzz1g8NddEPoQCF2FhDVXPHqkD441Sz4sW1jAjX3VaiDKxjfc3W6yCUfPuJwTW5rj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HnpP7hw8oo9McjJS94jns9YRnALLSCHhzj6zdJdhEv3y81t5QHaykZeaB5GNGgNRnF3jsXpsN2smMVQoYcnmbRv",
  "key1": "34QtFgSxs3TR3kHJQVwARbWhE88tQXPWQbY4XVcxUcQR5NmaScdB444yiiGqy1WSBsHnkJmU5D9fvV2gc1K1QoJQ",
  "key2": "8i7AmszdN3SLwwCcLKHArGzRCVhpSUEZxccr72Qw5w8GaCkPn7JonHRCix9DWnmcb8VgRHBMH5Aa8FvTDPSAaeL",
  "key3": "4EnprCoYodesPX2MVZfg7sjAvEqwnt6phvoJEFGhbtEkgUVaFdkdShswbQBg4AcYTyqnEa8xA6wVxeoNc6sRcdHq",
  "key4": "3tRYeC71yUjLyTomKCFtni8koVNq7bwqwTwBpkZKC3bc5DuCcASrNQfzCz3Mxqu5JsaGfHS1t7egYstkUroyPkxq",
  "key5": "3cD3TCRgtaWRzvQy6AYWiTwRG2FfpSkSgwSZfu6F2hhrTXamfP2KfTumi7qBoNgHsyjH9cPc6vu1uPfeYWNRd6kU",
  "key6": "4Yguucog4ZgiUtmtqN85eG9fi8pYJBqKp9RQvEBuhyofsEWMZPCru5Jju7YaznFAWj2dSpRLvXhhT9CubJKWxrPk",
  "key7": "38STt5eQCurRxVCheMnzkjcX2EYZkBcApxeo8iLPhfX8fekvSGh7KdaXjkEBLquCsVeFHQY1oNXXu7D9ZEc2ta8G",
  "key8": "5vhBaoyrJ6cmFm9NXLX9Chjcd2XQQYDGrfeH2Are4bDC16HwGsSwWM1HRiTpLGu7n56dKQpVrV9J2aVXrzfAv37c",
  "key9": "4PvAqda2k97HPzaZtH2bA6kqnngb963tGByXUA42ErDnPozaQGYYcM2dUAa6kC91bFp951W2MvTWdZs5fwm45RFp",
  "key10": "5FhKnz8gM3BW6dJyiBGEgPSv4QBCQpYxZDNSQ7KQdnATeZtTby87dyrcV9QB9UrFUrZLpbVscsz62SqmTJMSunu5",
  "key11": "3Ewmn4n24TuzoEsU6euMMiKWveg6DenQAuzDcsqfgB4Tn1mdg1oxDaFF5taE2JqAm7FGb7Ska1wgRWFATTEURNbE",
  "key12": "3vo9u5AGB4riBbXVQ2sXPNRWiWjiBByz9LkQwprvcDtWPg5F18UtNHFHCpUMwJnTannEzGFY97RLs965coD3A73t",
  "key13": "49qXpPWu4U6SQxfXYm97VgGb1iRS1wmUNxv8ArGatFnxyiqEbTzddNwJLqyYeLxk1brBnz5NQvn3zPAgbXf35Vuz",
  "key14": "imTg92Jist8yde2onBYCUvPGbBwmQ4NPwvbX9K57akizMsYQ5gMpUgigFGwHCyXH7F9yhRJoyFWpGGuRqChSbBx",
  "key15": "3FQ8xm81QjMw7jKTC9pKEZa2DEBE8g7ZyrSjVRBg2Wud94otskzf7Z1oD87q1Fjrw6jTfStHt8PTqMsGphxUg3sQ",
  "key16": "2txNmCMhdYFqY4ekWH2VnrbJM9ZUef4MudSKtKAMQra3DMFDwgxguLYym8YwDPZGybGfbc3aWmQgfJ52DC62D8Kv",
  "key17": "5CEhXrMxVLecP9t8cJnymmWRvNYLhHUYDLGztghca3JVi7JQH53WyzVduzRNA3MVDMA5RSNSdA9He2YhewsRkvWP",
  "key18": "3z6k2oWB6YQ48EQFWTgdkdL9BqfUApFKzjeK5DzL8BJLGP8pnknLYw79UMUtexB4VD4q8JFV1tYgatgCFQvgpuHN",
  "key19": "2FEk1TT89b4qMYuapT7byHWFwY2pqnbicF1pS9YERysYtjukbvYnWr8UbyccqwJ6umJVBFTX4VQ8KYsyHkbzv3Te",
  "key20": "5sKY64sGQHVdYXXrVk1hACP7WnGmikYp5bmTvL2x5Sjn2KxQJLftjfefxkzRTrRj11RYjRAZTFMZJd5o2EEN6DEc",
  "key21": "3ZfUAuQd7sogHbNa6eAYGi8NGDqFsh7WSh6kPRC2RQcQDy44zRdPDApiZCBzUkE4DnkPinYVXNiA3vQTuvYaZ7CU",
  "key22": "43hEgmdXuZLgcqBchU9bv2vZEDeVZ2niqbcugZZ6kNuaL44UreMrFpK2YSUYa8hGgVdTUSZVcqhDmi4Fcsx2naxe",
  "key23": "4JWjwyatHzYMzbG355LLtLZWx4UFWPCXuL5udFSgBsq82oPt3mgcYmQMgoNwgNtUVMWFnbwQ41WtPsEwRiUgWGK2",
  "key24": "64b686odc7vSAqVCYFqNS5tu3a1wSfKFwqS3qnTZaSwDBufUNN98XQY6GfFr2LfextJNRPCGULMK4JpUjDta7D9t",
  "key25": "5PEVjUfGdpUrUNz1BXXHwA9GqV7535xkcNT8ufuXGfQZ4bMGgxNnYDuMvrZiQGVpzk2DTv7UjEzdyDWUBzb6zgJ5",
  "key26": "5btNsFaiEgk1cqoX5udK9jB323SZDM9pSuxiaR71qbDKtqGfaNbmVKXxCgwQ1gLauF6snPEws5y7NCgnLPbfyyJp",
  "key27": "3zoBwygd1UZrNzUPhziyrAZrza558b881FWxMRKQHy8A7CVuaArrJhjTusyr9FVA3jH9VFenMfBTUUR9opoRBQW9",
  "key28": "3yuTjrRoWZ8oPPxvz1oVxMJxAxTYAr2PjMMD91WZAcpLrtVGdmkkrBVu341u7aJfVhT86JYqr8TJjEqksVSmhELM",
  "key29": "3SMXphqa2wJzGH2Tmj8oa7P6ot117jVZLRZ8EuwzsPNRTEjnQh5uB88wQNH4kMEpPBYHa3zjPqZEBwLH5GXrRjx1"
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
