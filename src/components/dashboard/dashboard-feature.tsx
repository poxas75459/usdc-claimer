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
    "3WGqtL1ZZRgJWh8vPxYqoJJW2EY4X8Jkrziwebqs35p4VFytXWUf7Nuk1BVE7Z7Vq93h7z5SUuvLvzgarDK667HW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZKwNuw653thz4gKcsNLrnkUP9iTf9QH4K29X21s6mbu5QcUzMQZV3YgmajCPavEq3knxFtjrtDTYPTgpN37Gp3",
  "key1": "2s49QkDLoFRMHiWXVMufzfXVgbPZSV3Ur9WNEvrBC9Ji2SyQ9BE9eWWfmwGfywb7hHvrECdB7UZf5RV4sjhXGtWd",
  "key2": "3F3vy452LqmkuKQXXsPM2fJmJ6MTm97Gq64o3izXWzZTu6ntD9Zpt4TA4bUQqC4SeRQkHFnJFqiu8jTaPUgVnvCM",
  "key3": "XwSuSEexx344KGG86PVgr8cYqgmGSiuuuSPCw54aJSXSRSeNs2c3FSYza5QCc6jgn2f7pSUF6x7QLGz6SF6bppN",
  "key4": "3UVKzD4AgChsoStyeTRFjoCVPwAYih95KQijndHtMq9MxNG8dBkfWSuyA1S43iVASVcE89d1iRZyMGH7WuBq3iRY",
  "key5": "3SioKVzKaaLdTL58BcLRGKB4vpJdABqnfhWuozFaibV5uGExzrcx9xVGUMcEeMmtNHGVrm7SEYRQWDTRNdpJDvq2",
  "key6": "vtTKrAw9LF4kWCtRfyLmvxR4vjGT4sL1aNCpwN7pCVWdKim6M7VFHLDtTrDrbTB6H9SB6x2sHR6iw3mE5oqFtjp",
  "key7": "ddSpwiSjjJmwkTrKShJofsrcorB7n85xHonF93KDw3TNnG1VyydW2auV4jucJC6Syonh9b3VRPH83zRbt2PMcv1",
  "key8": "3sP4xJpVrYLLA78MUWgQx1WUVsbh6CZ6bMi5yn7cnfYiDqWjDJY3VbA3CB9mVjdCH4tN3Hx6bbfCVvwWXSYVv1Qh",
  "key9": "3K7iPawfys1tFHW9jL2iFQgzvFP95LSmGf9gnx2rSiA1YKYEmftXxx4pgRF9XKLhrKH4cpHVxd5uSsMFwKzK6ti1",
  "key10": "2reELC2aZQz1zn6DeveHyYzQ4vZdy2A1kRVhjsWfu55zUggvKvQCWcLYdvVaXuYDHTYZBF1rRYpLABpvuyLkos4N",
  "key11": "MhxRjv7BCCLgdAVjhYZTLRh27AkbZgKeaMmeUS42VgUBGYvF9MdNYPnVZ47zaEK2vHVskXaks61G5AvazQfj1fs",
  "key12": "25uDSvQdbFxnANADXVoQDZxaKmEMQokfoeCj6mMMah24cU1qiBVRUKaK5y1Cc8VocJQdTM6UiSGLCGTBZPxAtWu6",
  "key13": "4J5rFiPZPJN9AStrqj7oovPviWPrX4gvqkeSsjCxk98nHTDpmSsdi2Gwzuvnk6qusjzDauNXhWhLU7ZujPkSSuYs",
  "key14": "4ohHQCcDZ9fmgDZaKcF7FMuFDbZN17Kp2noVvnr8aBDcuqz5yTcBQWTF8j2iLFBzanDdKBZYDNjPD87X5f7Qav1m",
  "key15": "kVkjGXmimhzu2wCqTruW1sseW7tKZV6W1vTA4e79wGdQHrtYCUztu9Nca7FGYJKw7kyX6kdXmkTBMku95ZdgGLX",
  "key16": "2zyrjCTWh9cwMaPJ555PBbvAFkznCp4Fz6YSUeP4HwkquFDfrWcDjGdGf28rqWwnb56vFxQ6bEhdoKM9GJsqVTRq",
  "key17": "2vEG7YWJ1SxrtVydLNVzw25gGdcn62k1ri6pptRTpRXVx5KzbMs7tEAd6D1hqXBhJkaaAVYFT7ZVi6xRg7VpjbYQ",
  "key18": "fighXeGbwHVh9ix2anu3DwZKTF9Whhd2aeNPyH51f3ArMstcfGMJEY2jWbQ6ZGzBBwSUYoYwL1Jp5AaE32RhD3g",
  "key19": "3mvwCUJTsVuuZ1xMy6vGi69BiF9beN7TvfmapoHh9yJC4oE3hHVtU8D2EgXHeh6A6QEC9uCYj6AAgjrJsqhP1Dsy",
  "key20": "xbviLHtfT22ZQ6A7fYF81tv7uEsFUt8VRMM3PffwC6qoYGg52Rnd5SCZHUycnGjkQePUX8wNev2jXR19YGHaSrm",
  "key21": "3TjarQh48c8s5dTmiG55rbYVc1R6gQhQ2WMcf7mpshAX1ETuELvVD5qMbR9ssUcc1k9peFW1mFu2XW4AdSM5yAAb",
  "key22": "zoiBCc9Jdd8p8kerqYY5mQ5PP51Xc1gcaU5qKZgPWwnM5yq4pcgrg2CfNuEVxRYRriU3MKjDiKWBXYVWJxjQVFZ",
  "key23": "5LXRYvuBMT4bi1U34NLAmdbPR1EwSk5akguygLNrwqZmsK38rjjGsHA8S8EKYYjRww7KFFpJpt9CkMaa5VsuLjob",
  "key24": "3DC83BWZDcGtZicL7UtxriDPDdj5xCWQGcnLTsUNsNp62ywYSp6UXpwHvr2Nmt7wEDxde5KRwJnZUqAzXmZj1CJY",
  "key25": "4rDRb8HkN4aWKijdpQMY2F7hT4F6VfQMaf72TgPxcpgxdkCLEV3GwSe8xVu4vfc1eae4MpMvP5RDaDJcUXTqsY1Y",
  "key26": "63mUKesPe1jU2dkAv1n1uhsrjinCd3vRVuNm5B9CRarSNssR2UY94HdiuVz1zDJxLZB8B5PjwaTSKaDtA2bihkMw",
  "key27": "5eLPVtovfxU88dpyCeBYdg2hzzDPj8FkCacBZSdpjcF6wXrXvu2F4x5KgBGVhGZKFu8nLhNNStsKEm1qoyt4sXcv",
  "key28": "4upWQGL45zHTQ3kLGHkqEMhCcXYjoaf7L9KMLX4cYA3SYLUcgfmPY5SjN65VtMSMNb87JKmejM2sCVvG9FAZRQ2L",
  "key29": "21PMcRsvuBsSLfJoaUfZAC1iFrv55ePP4kkAYDvex5NqpWEuwxfY7kgzxJxfnwo1mByhbxXQqEX7ed4QeJULjohA"
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
