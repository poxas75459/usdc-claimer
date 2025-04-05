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
    "3wTAh8Kxxx3xmpyHi9YzmeiiqgGsg3F9Fvz6ikM1e5nCTQNAn6Xskh7v21GFfmcoGLqj6z39hSjjGpPzpnYCAThu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWihAU4a4UjMhjGRA6LysG7kqYRc7xjwbyureNw1ZxXuWxSqhjrP7oSa4QduVei3FvnECoQtZRy1YTnJshB6j9X",
  "key1": "ca8ix49JrgLVTEEC2wpWMSo6R23GaVKcktjKqNag1CZoipbXQPL9PYeSbhr5pmF9z9SwfyJkVyBux3s7KYbxEVc",
  "key2": "4aBSLeJUggqjkV3TpNrAPu2x7JDYRFaGs3GnvVP9r1KsKApjhikpZMdv8UGVPJhLcsgwFKxnQ4Tbe9swTESH8yqX",
  "key3": "3xecGHjVYRA329tS4XdqEKzYW8KFqBEYjgK8res5JzzyDz2shQbo5sExXH8H6QMyuLjdUnkCVLVVGuSSz8eZk2CK",
  "key4": "D6EeruGCH7B3nGpEtaJQJzvR8bSoDGjC1UqCMn14qQHsiQebRgRLgS3gf6jFDzLCodJb3yVBPg5RxX5ViX3rDvC",
  "key5": "436wDAWH1PRRYANYa3ohRW1mhWVjd3Dp3K5zPiEZ5LZzPri7Hj5RBY9XddTgFE2Ftz49G2hs7VQHW4hVFUXUYeRD",
  "key6": "BdjLRm2QBYFqwn7BeYUyc15w4Q13iLiDzyAKfBZ6VcpTSvGvZu6KJJdZdq86anPEemtUyfV4Tizkij1x7FT1DBn",
  "key7": "Gf8VdsWGF4U3sb8iNAzbD67hsYxmMhtajS1hvRpqBAkgpGH94sfa19xtH7m2RQs9GTzPY1TBvnfUMzN5wE51Q1o",
  "key8": "2TWW5Ki3m3xWFXLttrob2AMTT9hBUMscKDcCQjUdMFHi2ahRaBmkVx3YCNfdnB5zK2zmbSoPusnuZLpWqLnaBXkS",
  "key9": "3upwsT1UWuKrMHPq2MC8E8aPQ1hGNsxF8jhkiZd1zNgXNVnvA9889ZFsZu47xQP4ic2Q7yXDerNT8RHyuugR9Uep",
  "key10": "eq5PaqsdSdARTyCsM1nACamtvMsysPZjbxvA3WnZAriBtDtd5q9ZMj83zx5rLKGgXW6BrfGu6KM4t6R7TWskayA",
  "key11": "3Avp9RU4X2GS4yqsW8EKYTeW6M6HQg2WNJv3iHMbZ2icJaPFRtQ2YSubfYTZK5HtDJqj7Mo2M8Xn3dxASzjfYfn5",
  "key12": "55HmfvroXRQ4AeJftZ5p3h9nj5BeZvQwF2U9btzm7zd4j4PYQ8A1V69DPGttnoCVqavaGzaoSL8DhvCLVPFhcrtX",
  "key13": "4EQ6mtfQaTDpE1eUvtrEn3BCVNmZiCuMAsv3nhkHNoLX5zNt2vXEBqyEiWapzT1DK6DA3XXyfEfumXUbyN22zYxK",
  "key14": "myJDUcDeMD1VsAR3BF813DQFWCcdhhbvkgVsXadipozTDVTBbkZJC8AcYTZH6hkWZzHwEagQHvTLrX8zzSn7jfp",
  "key15": "23Y8gqpJAg2n6tkLk5p4iS6Dv5mdPXuqVLg3mnBgPatfgqo5UyDLmF9NVLykFyjbRvbSw11cuaAiaTFAtF92AE9B",
  "key16": "42wADT7ULsmvNsFJxG6HQGuuWXx7guU7MD14PsCEKDpJqvrF5TGVGk9Ap75WxqELfg2gyq9eKVnBoTmGuhihx3FP",
  "key17": "W7VXQFySGwRhDSXPrTfQkMW8MqjMhyC7xUij7Vr5ypQhbopJytNiUGGNWSNPvhTiybUwZwheBBUPNroLUrxQ1R9",
  "key18": "KfPsTpVEytb43qobscZPwL6QCToPNsZcsDcXxf1R24ix7SNzD17Rjq1wfgVhht4FVXtCWuuYLakq3qAySetC5BH",
  "key19": "2AbPqekdjgQH25YZFZg6LSXQwXTduE96sm8hdWiwzrUa14EwbK9gcwgzGqk1LNVZKdxkCN6TCazmPLHjGRw9bK4z",
  "key20": "33e5BuicTB5qeMTiX7F9hRKsYFJn7JYrndx2g6WNrRtDDmEafyPeYMi8nxtkaEWcHrPzp7qsNf1R1ogL9VFpFwBm",
  "key21": "2FroCBTfBKwu2LttWzbLLVydpb9PwF4TfKAWJQLsppJ2c3iSg1zqKShLAq6sGQrzaUt9tMTQjjDtScFDBZtB3KGC",
  "key22": "2Ggu7WXS1aHLpcdskdNWf92ND1iqHBD23CVZjrDMpLtr65VifMB8S1fkmQCEHwkoBx6hu9ovgiKwW89DZC7rSr6N",
  "key23": "3Btga3daHrreS6LoDHfUB5jWuzbJLZaNDbHfKR8Uk6tNpgDb3G62KNh2qt492gqk9iHZmCbzqM3VYY3UJ4Qc9iP9",
  "key24": "3oWEJw8RivyHopiFQXwoYG8T2SL6y4x9vKdfgDkorvbRNCtVz4ykVMAWSZRsXDiac4vtHGyDNFhyfbGDYzNmvxuK",
  "key25": "4QTYjKSruPejoQenjPSLcbbSbJsWeQ9wbzBhLV7AnYCpyw2kNriJsPvjpWKyhCbE2wdeMvkfMZRs8aHt1r21Gzc6",
  "key26": "6314xQD6WSY1zJXtuUcaFvgcqMax86vkNzSvuUzTcwWgR9HoueycJN1NDpSbpWHTyGDJiSxdhD4QWXXqXRh1Vp3i",
  "key27": "5dw9wcjy2c97RyVCoaR317GXW2mgzzqcjg5TpW7feXNsLB6v7uLissXpSYdcRgZ6mBe7n7opGKuSBNC2cNJnSwvK",
  "key28": "4aiaMEnsP8P3dHHWYB6Rf92T35xs4fbmqc3iSAfUjnNbzhYuRE9ED4dhcVPfQJ3tcWU4nhC1X9vVJt5gWVVn7GKf",
  "key29": "4ESvH6R1vMCzwspxiEY18YbC23pRS7VzNzJe2VyUKHTNmm1zaAsEsftxsFMTa5228is8Z8Gf6mS9fA6NkTRZ7SAx",
  "key30": "uy771st78jmYa6wMbmbPGeK4VLv1bZeBzQww1sJNxnTmP18r6qmnVNzJyFVKhW1K74uPFTsHDk8p1yWCu3FSxYY",
  "key31": "3p7SacS2DQsWPdie7Paze2ayvaUNJyRsoTyUN1uXEPvRUj89WJP1haWwkkQGMtmRuaWz738dDAqgHQKESr7jhzQb",
  "key32": "2fnu71uhnFDeS78VMJrga9qEjH1t8wQAFi7kb8ZnTg9MzBJsK4NEYJE7znr2ZTHxHWibCAd3VNodAuX1ZSr7q8zH"
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
