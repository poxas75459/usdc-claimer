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
    "3HuqroNQY2kFX4diNDaGpA9FUb2T82is2ToMRxRQkif4CzBqM7CKu4VB8k8qv36GgavEBNDn59UoEfbP2HGmdVXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A5xQHdQ1AVnakhe1coojeuuCNBnU4AL6xDzPHi1nfy3Uy8doSKv6USJXhVpcwojNupFaHzBzsk4pmUarXmXa4rd",
  "key1": "3EbvpoqNaRwmJcZw2DfLrPd2XGmcUi3Pji8cvhuUb6dD4VCVuYHkvwHck6VWxiuJ9eSDRbnpiem9R2x6CfC7BAZg",
  "key2": "XCGainHh7kkFWYmtF5eiwfgzg2EfDheF2xEGqD4jTtc5PSABm3AAQ73v7yheLqzASJGYkg9JUBNkTfisRdzcsP1",
  "key3": "4FmEw2ESYdR8BeeTR2cN9SNxiZ6Qv4GmF7nEqKJnzERZjwYmfvxciawhNrHeK5StYcJUe69XLCHTQxF6jXiyNdZh",
  "key4": "5omd2ptmX1wnKeYCyoG1SNtv2CJfeYM1ojJp9aXGbk48hYUW3xeHFiaxVAKYkwLcsPu1wWHXSC35Y7SzzqDQmhH2",
  "key5": "3fWS1FM1iheqPHVDHrkemg4c2ufYz8SJYUN5421ryUfaphyrV84bQqXnMwENjdmNaMyEzV44awW2t9cbkz9ncbuj",
  "key6": "4g3EczD8jUmaX2SSfVCgmzsgPuJ9xo7w9hjg7qWoVjKajHvZd8cywYcd1fChBMEVPRVX8e5F6HexUzQh3ttiYq12",
  "key7": "4uS8q96VQRoRe15iG387Xm4SEuWD1NKDzZZYJRSKYjr8H3Tqdx3ookXSiPohZCtNQbnVpVgivmvFDbjj77gL6LeC",
  "key8": "XWKxJJdQHewQVuD34uS4WceafwMszrsj9WmDsfdjF78U22kHYEoFVdQ5U4JPkTRYq6hK1ukC4D3Xq6xbuUQfCmP",
  "key9": "33NoffmBNQftuTDjNfnkP9FBHWvWZNYxCyzpdyB6Eb4eTJBBrbUktXPwhg4hUN9zYhwBEYxQwP41M2iRYnqNwYbJ",
  "key10": "hfMAEhNi9LvSuuutLxUTS6Ki8WffzoVeH9pjHyy1uR1Q2dZx3LeNvWy2ZPfmmuTMRhwQP3zLwMiGGtWy6YMFuTY",
  "key11": "4WMqcn4RwRaxTrSFsyD7RHxQqwN6VvCKLneDmT9qJXvQEM1t62GZWR2vAmUYVLQYuG1iMwCgUckuDRvHi6xBFDdE",
  "key12": "MGpxM7MPgVXAjqtpCtYbSEp5TnoGXyW9zpQh6HjqVm4tJzAy8b3SLi17uF7iV87Z7Kef8i3Z98muPnkDVUaErKn",
  "key13": "5SStCdkAkc2vhWsofrneb3qo4JXTYcMySyfyumkmmn72dXog5Fw5JbRpSdrK6HyHtZ67t42N6kQdSNJHeQfnfFBP",
  "key14": "22LpwGwe3GcyhApCD9f3hKJCGzVNzo9UNg8AvpBd8kZWYdPSBq5T4JtZUzPwoUh2hd5VxoowZekrFMaGkHaDU8uH",
  "key15": "3ewnxXbM4gixG8n7NMSAhhsao3qBZJpUrNiBZh4EDhq9dYDf53iT6ZAEB8cgLbVhqj4MJX4GsgmQPAnCheT9nJ9u",
  "key16": "2agXt2i82PsAXUq4GfTQ9vqsBpt8tB7uiR6Uc6Fodk91CabjeJV5q8Z8RNzAuZkH969aB1LJdWEz9qDJJDeGCiV3",
  "key17": "3j8SNvo6oudAwDQYsDsygaRfzUgDkJeQeZ4ycBQGhNuBc2pA2UgL2VyZkQnYBAdJUcwXezui446fRz14eyAja8Rt",
  "key18": "5jBZEGu9F6ozn1DR6h5FkABMYcqRigp2gNX2Mn3B8RCah2ASp4NV1i7LBvzMnzuLJmd1RiagabsBpoSxbN7BioVK",
  "key19": "3dUSfbPDPbwX8BKteCnQgPTEqbFiALYRJYD9C42wrwXWx5PsDJihkzx2NP3isT9PbQPmz5BqsnX4ofSB1NxkuXni",
  "key20": "4U1Rf5kF4zmU5qK4xYSBP9zCL8B1urtEds813SoZtnHZTsqUFmbWr7RRByaiL7BHsagEh9WS319xX43s84bbSBWK",
  "key21": "3yQ5RPoXTbA4w6A3ukV79KVUboY1S57LPFD7cfpHqgAuwRDw6Nyvt3jA7FFwq1Hz3oLuAUn5Nh2pmp9tgLGTPQtf",
  "key22": "3p91n9aJ6gx12NJ1UWEavmkSqRW6V7ue7GPptZfAvzzTFSBVFEbmZbR6J6aJXeDebj7GdpaDiAvs5puj1wjHoHuP",
  "key23": "5mDdysk9G4iMmZCaQBRD1TDnxKdi5US5QVkUDoJsVuGKsaLiAFp2tiYwoneVsFLqJ1X2t2AZDoPTC55LsDKi3Beb",
  "key24": "5j8iU5y4rRpyY4YjJwDE9MKpmR1CgfvKoTR8mtagJyECDrSZc3YiBt1UQgS29KAr6hTbJ4tuWRoRRUeAgsb8N9X4",
  "key25": "5NudJVPqySH6AuWkkkPmfAxKQVPewBrmtwwTrnaCrdwMLTywTKe2UriiE1tvdz7QBjKV4XRAQ1VfNQqmCD3erhJz",
  "key26": "2XkRaNwhuXkNbaQJpRiW5nRHw41Lbsfk21xb9eVy3GLGqC5h8wsT6jkmWf6oxEpGh2vtnWyeZuk6oeWvLy86kBrC",
  "key27": "5qCaRTDGQatngobiY8deLWjvc14MYL5PAMt7JYRjhnaXuVZsWzDqVfhyeQ55rczuCn7n9ZcnmV1T3V47hDhLZXGT"
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
