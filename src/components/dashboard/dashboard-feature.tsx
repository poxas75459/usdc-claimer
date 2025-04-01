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
    "66s7RZShKCFdCuiqP7xfPJ19geQVQH275nQsUT3JpnJQofzSrEujHV7iJVcPctAeftGwTWmE37V983Dyzhqks2NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AosnVRHHRHRdQYpM8whMQJEqAbEN1fxwsMBiCHRvWWrGm26eEjbt4MF9vuB47nkhQBkwpqEAt2cEs2BgXYwZJa",
  "key1": "mV9dRfUVDAtZmtan3DaGrMVU7Ayt5UoBJKBHmBSRxJqDsrG7LhRrd9gJ4m6GzuSPWQaXoGZM6Gn8gfoEUDncXEg",
  "key2": "BU8z51cNh6aEKx47GANztYEdDygVocizgMuXa5KG6zy4auYr4WG8w7BkYhr6CqhYZa8xKwGDa8m5qDG2PcjGSVU",
  "key3": "5BeW9cKobKuhGxYu1ZiNY5NYqPkgaXJuRHAAibH47sK2SbaJSaxqc5okEE1a4FqHwVGMtE6NtDH3X36i3ieMEfFE",
  "key4": "32hnF9Rg5xmqvsha6xBtARVv41yrPUcrvtVx8mbbo5NvwnRDWnmk87ZS8FKcLjoX2n4jrb2gKeLHjDrXmPHv2VR1",
  "key5": "3ByNTAuBFXwWG1uCdTUGMP5GqDDJRmeHubEDAFVbTJXa2S8GEhhdjnjteJ31Xi6vxLw5BhsovPvRGgdJk8RYju2z",
  "key6": "4YNJ8GWcQHHkwHwjCZpDtDkLrQJ1JtebgCGrtQi6ypeXTMKm6RMKLj1pQiTP9ieJgHg8RRLKm76L1qNqUim9QYeN",
  "key7": "gZTmFPAdaCXnbv8cXz791d48kSEM7qFoXGzrGjASys9QuCoLiJmiAE3A7ybws5bFvpdF5AXudmRo5mhjStiD9xR",
  "key8": "2KamhrdsPpDDaeerT8KYyuGNBLspQ7Kq3jNYK7fEu6SfBSkeGKSesxxcuxy19EuePfxUDwHJAtxJWxTeJq16UiNB",
  "key9": "4A5mSHzFpLyrD3fHfDg6U8TV4YTu2uVwtxZ9Rg5J47pXpsVzAHTqTFs4x2fYxyFA4L34SEyxxLBoSMzuFAreLZid",
  "key10": "3F6Vw1tHmFdQXGdzh38RuKMP22vUccxzvC7wXtPexBgFV1w4scMbwUTPKiRDry5JF4oSPyatpseqNb4JrcEngW76",
  "key11": "4P1TKgJn8qtkWGzgoLr4wEDY57c4VcMd4bRpt7fTPXx1ot8244cfL7sDedCqLZv9yFzehdATFST6ygQWsyXLCbH1",
  "key12": "3vgEM1jQqojjHwvrEc1YWzzfdix5Cd5rptJC1CMZE7VoNUFwkwHQrCmruLZBPH6DavhEjJ4eoPAQcDfrm4xtfmCH",
  "key13": "WRZ26HDdQ12RQMmSLfG8seJk3TzBegNqgteDG3qHtSuTVzuLznXfFzkgNpkEY9io6ea5cWrWk64HPMMPFShDmHP",
  "key14": "34RU4C4gwNdbkSYb7mhwwYRjTsvtpaWo2K74Rn15x3uzykSj2gFNWcB8eFYxuEDHj8ULRauacqqKUpzrgaS7KpHS",
  "key15": "3PRwLEb9q8WgBB3B5iHoDMGK8Hxzq7TUrHoN5sP9oTf8DGX4NpMHT2jndM8L3AiSVNsVjbEZFpVXpp5ENipPLDUp",
  "key16": "2nCYmqgvorPYjbNM7cG5LKhBYj3U1QZbugLjfrYeKB9B9NR1EFWM5a1xsnHwSPf5yGrnByqazy8zjexwozzQUvw2",
  "key17": "46umHNTuUu1hvkAqq9ZofGgufp4x6QaKK4rm7sZd5ntZrNogsbKZgNvxrB2evH57YGDoxG2WGiN35KGHezn8PvkR",
  "key18": "7h5R5NQSyVdZnjsQjgXkgrBJ56vXJMMQhVzCT3QWHAHSR3U4TG62ARYs5sN15HqWMBPJsL3uuX2xwyrQFkNob8Q",
  "key19": "5F1jhYKwBpzgqqgzsKaWGy5gRdwsxy2zYkzpjMh22GuZWg7JLMcsJzg3WhaijJTxN7FUvLfRzunzXQJmc8vSdbDo",
  "key20": "21yYZjdF1eseDC2KvNwpy6XfD2kwUXqnGBDU5amhU87gpLBkhxq1bpcXr18RQfjoecBrKX5fKXaEZ6UBXaJRqegF",
  "key21": "4be75czbY6zS1jfyF1Grai2PDPrfjDjQsUtu8u833kthtQrmuozCbo34LAaQ9nbzUyFRoPWHauUtsGo9mahAqxM1",
  "key22": "4MKk1UwA24rxDxHQdeGGRrTw3ut8r84aUzV4DjPnndcps8ZydSC5ePNH2f1ZZSEQak9EbZSxMCe2nihBHRbSYWtY",
  "key23": "5TTpTWrtVp9rhNHH9ELvZQiNEbrnj1VmB5rGDfk9rfx7B7ygNCwdkRwiFQwu64ZNnbcjk1GLDRGbqBUSMweRc7GL",
  "key24": "2rN985dC5X9z4G5nDL1A3nYE2irwrgRT17hizWbA8EaJvSSZjg9YfezZtKDddmsCzeW4knAJs8W7h5sP6Pm6mxKP",
  "key25": "4WaXR6LtziT2zWrAP7hckeCUJrGLc1hf9GEajT6QSUdwceK8AHM6fgKPsnBu3grhsyHGFrg3E4FRNHkxGRcM2Eck",
  "key26": "Fubzw33bgXXcEHwwnmmioW2Wy5DhjDPqoJxXor5DZje1z4JYVhCT9RYekus4hZmLqno9baa3T3U6Q2XPaPSLUuR",
  "key27": "3wsj2k1fy6z7S7U68qP8x3bFimESRfkY6L6CkZD8xVrNPKPLfjBsXqqLQzqz3p3yXwbQRtZroHsrjKK4ow7Yzvby",
  "key28": "3UA8RKvfk4TpvXM5zTjanHBtGi8ycvdSyCBbxQ6dVXPANYng2bFup7xGmHwtUf1iRc2AgjtWqG2Zn4YPZBRHQDQ2",
  "key29": "3q3unxDbBuuzpkdiEyfLvchXWLFiwDmVHapda49b9eHqEC94dBBgiP2jvkGvVkHjrm3z8ScK6kfgvDrfh6z97nc3",
  "key30": "5RV8TdQrdHbtMj1kn7Yt1afo2FyFZrf5ZcnrELNjH9hQxxWanZCoruZkQZ7efCcsq6gHyo54L5ED4ML1uoPtBaXa",
  "key31": "z8W9Ah8Q88dtd5Y5foxs2QB82KzhAunvHbeVERkDLm9MZogMzB2cHYEETQRwtR8P4fFPzuu44EL93sDexnvKVam",
  "key32": "5AZa1Ev3T5GysQN6hFsY16W59EzYB4XK6WX9jz63eDH3SkRgY2nfD9D4MVXDGmbGF2Ej2uQGAnchJG93fS1aDvn1"
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
