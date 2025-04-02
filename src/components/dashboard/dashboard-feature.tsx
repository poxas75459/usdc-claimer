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
    "5KHX24wWaLz8QTrh6pWPmxUpuVgLgdSrc9qJtBDe8fmiKJeTXvqm6P9JtSs2n9eW6U2knyjtKj8cb9y8kTSgs1XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHhabPbTYj9r7veJsM9cRgW1HtjbZgUz9XeLFmAUGv6PSTsuYcD4aPjCxyYunoJFFTi5gxYvnk1t4gXkf5m11hA",
  "key1": "5hGRnLEBKSMcQj1Yfsmob11k1QfMnFCpzvz2yLiB9FCwyidvumFG3dBeJ14n8a2L3NPSnxyhdKEBS15Y2LYTHsEw",
  "key2": "5u8bE6JKzeaEk7MSVeXWWaE7FyvTrFJDPfuiGtqZPXsr2Wio3E8pyhpbwjuJYqjSq9fcTSZfAKgnSJFm14ft2Lj9",
  "key3": "5ptFbuV2LZxAfTy6BFEm82dKiKrhUPt3koGFU5AyhKxfyXZUQHRkpgVwvs5tw7DZWK4r2EEsE3VsspsD6e51qeP9",
  "key4": "4QqBjUBgSeH4wewhEMyPrJmTnvHKjubeWadDBV3vk28fc3ecahKzm8QNBASL88v4N97gzVwWVryoTEd5dzkTTLK7",
  "key5": "4AUtryJTRNr7Gx9kYPaSWa9fzK3bt3z7TWDDWoUNxCE3AnitpfKjKZ2S7YwLF6DLN7NvuNf5PZB1Zww8EKW6wpTe",
  "key6": "33KbhhhUJU8LnvWJVuUXDzzFFNbJrHbpFS5HBcMKmHc3wDh62oRD2b7nbQefZh7jmpzozFDTtbJ7Tb5tRiNNd4KK",
  "key7": "3qhnVsyFLZi5v8mnfso6VRpvRztzo7e4Md7qDAwLBUkpuSGuYdmBWgsPTFT8XtdgDro2dbVWoe6TSHFC2L6qwbw7",
  "key8": "5v6BbuVeRVUEiRfwB3i8qiFjcB3rFGr7bdKfqASnji8f2B7bS4Yj8W9sFVLRvydhvsMwDfngodao77T7TCDFQt8j",
  "key9": "2FT3y6828cyg4ziBu3M57G78h6S7ncdQMm7pEB4KnJyW8SZcENAFEnQK7q6EXN6L754jhnDamrqBh499Qux1a7kt",
  "key10": "uu5TghHrTuJPEboiBmS9DFwNmiTY3Lx4TLRQwNRdA1yf55YtvtR8p9W64PbGDyUUuS9hvNdSk6paoxXwnt2tSfV",
  "key11": "5pirJ6kujVASU2h4faKqGUC73aVTWToGnS1ZiWb1TdJCx8Ric7ifGQx82PPYiZcCgTXUkTnfSCKPtLcxYqhFn4gc",
  "key12": "3jwhBFBx3kqQZiYLupBCgQhuMzN2AFZZUXg1HJtVadTdg8JmschwZn4d7Xqq1D1DmTV4p6bX7JwANSN4UQXTx1ei",
  "key13": "3ga3t7C9DnTK1uusKg6aU6gM5xYRDto8EU8LeX3nzzik9EYKkY94nFYn7Sdt3N81JAoYRiuwfcHg3fG2UifXcgf6",
  "key14": "jiFetBTsVk8cb3pNv91sWuJy7C2fRhfL1MpiXnXDWRp8CaHn5gmC8qyQFXRedyzTJ5pEnvaNs5wEz2mgbjCbsfx",
  "key15": "rjz5ijMRzNKpF3rpmgrhCboHhamEvf8zNHnirK56AZtLbZrFsgWo56Ps2TqUSAg43QyTE8nUnxknC68mNetZgDu",
  "key16": "2mMYB4rC7T8V72yAMFMCzb6mbTgZ6AXKhEQqQYE5U3scqNqtvBAQZorr88etmw3msgdfVJM5p7qGSjmEoDTbTPBh",
  "key17": "33N2XAw4PGM1Kmv2c9f42iiZEnghfcEQu8Da46p3N34wjcRphGuBTE5pavZSbDBMT67DTcrXQYdLE9EDBAi5KFkF",
  "key18": "3eEFUjssA6whCxaeoquTiVPFknUCgPjYk4Futf7jG4oNkkXkAmR1qzMvuigJ4qNDDPw1D2eJ5FazyTKZnpNPgCJD",
  "key19": "3JKhNFQsHzgtbTHwDhDeKU4hyTqfZJXR9LYt7AVQkjNWY86rGwBouMrw6LvtbMph5xR5BVrbyFceBJJtg2MxjFsV",
  "key20": "4XNqBuYMGGEbybL5MLzDewThkgtSGC2cfzt66ePmMdNn32dZHVKcc2n6efykS3ynGcxea6NL8zVPLXZ1SLHapEka",
  "key21": "26cNdn2x4Mw19Jys5qJXraAeZKcwfBgLPotcvu5LX2JXri5thnd75nsGBEfvuHPux6YEuNTJbhX4fJDQFPf9kcPs",
  "key22": "36h3QoqhKgUfH1ouhPSdzNXuiASHHapBupHkG3kgagULsN6uzKXLMZpTtj6vnRbt92gCvSbZiFWYw5WKmnu6nWFT",
  "key23": "3zFNxbX3A7uQ83XB55AopNvFLYDDsAg2vmFPXYPAQTqeE4dsXcNm87yFWofdqWKUnrXFBPfANr8ME5vhwq7Mctoz",
  "key24": "5u7PNiSx3yxGCYpXaiGhQ82RF5okzTabtgio4vBN2gXX5NmtvK3CFWFTRxJ3apPDcPPfzBAsrMC76dssNJTKjaFq",
  "key25": "38JgGRSz3tNKkERBGRPUSix9W4oDpBh1HziixCzjhMsPYwXzVRscLemaQKPRiby9Df5G3rsTn88ZXzXzVtqgC7fv",
  "key26": "44vTdzzVFfvGQRzH893v7dgmdWVzFv1TPunDcuDbSHharw4EfkD9NVfYwbua7H5VKcHbdpKuAkFFsikS5HC8V5Sx",
  "key27": "3UZeLWePncJDYT2NMkQsC9Gn19CVpn2dTYfHi1Yipwau5swh6DHdJEQ83EjQrxtfFe7HErPjWEB9PsG1jiAixi23"
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
