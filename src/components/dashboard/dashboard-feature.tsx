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
    "66LPguCKRtD3e4xZHiSuXFJqwtm3mrrPY7iapxDPbsSfdMZaGu2og4MrjXa4CrWhm62DV6hchZw8H2zHVj3VELRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xn9s5FohNq5Dy8nYL94MP59Hkr2AnKcg71Wfy9xvzdt1wRDM4G3s5ArLRq3mSyNYf7tXNdsLFR2JgK7r1Svi1c2",
  "key1": "36GzfF9zkm5PLJ5Bgu3A7My3Jy4jZa5D2t7d5RGqXh7EoKVz8npYC6ovwf7YPUXW5mkKTxKSdm5j4wZLSaea8nrD",
  "key2": "4yCS9AVQksvd756vbw89GZpYmQxKwaTLajS9ESoxBepbYosXactKWEZHTUwB2x22UmEKNsqBdMbtGzQt2nf4Vm61",
  "key3": "5WwRDchNXHzRsxwjfBCTrLT3ZW5g7m5SAsDiqZJk79FryVzXdUzL4AUU1bCc1MjHwNWPYzLWmEdAmoao1igdftk8",
  "key4": "3FaiGFsL8ptdZgzDC89maa7vi3jJFmy2bHCPPR7vNX6sKQrKqKpnFx5Hh4A6rnhs87wCuLgeTjMw4tpSHWkTanSi",
  "key5": "4HQifRiT1BRAUDHUdErNkQSDmwGFJ2767D8k5nFQyhMALr52jjWfsTNXB9MzwhkVn4B2QcKERfBYMrRZUrQtrfcd",
  "key6": "5eQd5mCjSzrHGFVesR2WK43RCf23CDri7DUgg3WgwxxvbDatGxHHPqwApRM6tuEaSdnM3zx2UuFS4bKdVdo712dS",
  "key7": "4zFVjZWntq6JzvYczz2xyovtFhqvRyUoqd8rtbWmQ4q7t9PC8x7YvZ6pSLmq3Sa8rLbeisK77oerGS8HATNxL95r",
  "key8": "1u2Yub7LnTVJrWTfRTTSskoLsSWYyht6nvTX1amMp584um47gq1LT2g2uCM4FszMMQrFWrC6td1DyeJHuj1aNts",
  "key9": "oM1U73X5mgF22uyeRMAEZNhjMXgd8eX3f5pnGRaMcRPtYuCav5R3hCtyqFzimYw5VwpaeM8n1UPPFyzhTZBtbD6",
  "key10": "58mLjtFFFg8CXvfLobdConjNMbUey1ohXrCGa3KEiTpt44n6ZcJQuMj23UJbERFXaPW19vS88st7APbPK6bUxf6v",
  "key11": "5jfhZGM3j5oS7kKvGensm3s3EBNTg32cr4Q7DbsU1uwCPaVqf9JyqWGZN5gAcv29MC3rD8aJVuVAFeQHKsbjv6f",
  "key12": "3XLHa4MJFZXBXhg14Zvbo45o141rP8ENSe8ekXmdEGA4sGQxT7oVq4NZsW7p1EgmwxGAc1YSD6wV8o4xBzzoi8jA",
  "key13": "47i9Vu67NHyWprgnaK1RPyagrLnXmLVxqhXGC8ewncaTLh51dSheoyUMZLCU8jEGjevEDczgXBBHxiGathfmjHQK",
  "key14": "56jwJtUPeFT9Cwa1kS6SWz6RPqZENbH6kFEzprkSUcyHgz9d6CCKTSx1TywpMjLhWmCBbkevEXxxmoLjbPbgxkq5",
  "key15": "3Lmppud9jHhui59uXfZHofvo3s5WMJGbDq3vywaDh9MvNypmzbP8qrNWC9cSq1T6cccSrewV2hk3Ef5MfQGEuFG3",
  "key16": "3NPyLDvCiFWaTv1SEBDUzoXQZimJaqKRLaZFUw9sT3vYC5FMzFfNcH1NFde7eeB8ecib54Enq72Egf62pzvM5PsR",
  "key17": "2qac2R9nYfrN5pneHKXX7dDqxYpQP5Df47qsqShC9tXa7EEWP8dFbqJ5enXEWQXzEpVTZRSbWQCJkFYEvYGwQQfV",
  "key18": "KHFSBGR6KxU9U5nUs1oJfAnWceqwn323op1F5FEsVeQoo24xCn7X1uPpxK1tjq5yAkRV8Ub81qyaUpBAoXKYeej",
  "key19": "3Kb8CwJ9SdfrYPgModfzndBuwnC4kCsufvvSzdrB7WXZGet7uL5Ya5Ap6RVQWY6xJ3wZZLSdpgTs7F8PqcAxx4rd",
  "key20": "3Gk4dexGNBwxoyzyS7H4cymkKmHwuZ8E6opoYydYfJRiWh3oqRARrXbgXpD93YNCefDoPbEGC6mHuKreaggkMeUU",
  "key21": "qYz3g6Uo3wyDKFmdJE3W72vqETnsKZshsDwkieLM48UAfxdcFw7qt23KH1Q3siXjXZvd2Gzunf3P4Vr4QoCvEEb",
  "key22": "2ShxoMmBfnRKTizn7rAVx9ELFzWhY9yYmvMKa1L3GfmGMUnfVAjgrgEM5q3pjSmD43h1W83s5LbD3krLm4S69m7M",
  "key23": "2PakfoEWBreKG7pGvRQZwQqH7z2Pzp3qQ6KHVD5uexcW28s2TxdXHy9KNFbGxywsAgsY8GBGP43smNsEehGT3YC4",
  "key24": "3CwpN7kHamM72qvHrC9rqzUnkvs3cmtiNC1U6HYxq3Faaypbi61sNZ9QiNKgWdtzyfeUiHR8ZmfXhd2WKszuQkKq",
  "key25": "4TkA8iiBvfMGaW92cbNVAbvBz4R8dsB84455LtHijtANKEAqgcGByzVGD71HXM8QPbipAYGXpakndDr5oNV42ccm",
  "key26": "3CtPJfiWkBRhqi4CBdRGRtDjLtUtWRVXs87Re3h8dupAGCWpyL3jUM6xCMMQpJJKpEuQrm2Gki9eiY7ZayqvFv21",
  "key27": "2fHN6AzGbuSiNsfG3bFbmVBFuJtDnEdZ8FCpZ1pjXsHRh7kY9d8SsXrSQ4QgfyTMhtMhRinU4fm2mbrokNi3XF3F",
  "key28": "4QB8eS7NdwHG3Uu16LaLCW6uGKmLFJqMh9AHXzGpeAM3oamZY8rNghFE7kfKuXqNwEVQKGR4b8eYXsAXXQXxWorF",
  "key29": "32GdymccZ6Atpui7BwtbaF9PD3d39XMf2sNbVFfCky9TfdunREazLiTwNwRZUK9M1Znbz1VuPwgghUHcDcZNM9it",
  "key30": "UYQmxJ1qEXb37hfeTG7w3myv2KyeEcH3f3ybWi3Z8z9iJBDUMBq26ZMW1nZ9DZ2Us47dm2PFrNdFYPCpwm3r63c",
  "key31": "dGFsevAfU5xxnBzdQYEPvc1q9tVuFDkK9isBRjMq16NUqPBiRxZd4JQaFMG7FAt792FM6pWNGLLToNZZ1HV4UKx",
  "key32": "3GokMdx6HfqqRn4WTKJwpd6Gq2ZCTwtcViCejPJFM81mggZPUuEhaiyVGYp4XxZB2UUqBzUzi4sHRBUqYEqHcgqn",
  "key33": "3fE72cJx2TLxUr6qyNa6sNgyQ6LG6ER2eFnnWRzxUstgFVHwkuDZyzQcyBi8X8m85J3QCC1vRZFHBWfQPeBLe6i6",
  "key34": "57wetwFYU9DndogBE8ygxaPKNW8wgGMuRYMagmHKmdPQLqnaCwmnJqstGMc8hMxsTMrQXA75Zrur52aptew9K7yx",
  "key35": "2vp1ni6ZsNVY2M8yjqGm8kdjCF7GkGEQvt3DWmB6KnAFQhQTYj7BBEpLc4yP8a49Gdfctp119Zxo9uek7e7ue5H6",
  "key36": "eQjqopShA1oSCSSptS4iRDAY9rXFi9qd7oqeFyD3QhGqdr9o8JsQME6BmQ2vwZCksHdWswNjQQueYXrVHKSFHc1",
  "key37": "4fyyyGtubDXHo7govDX9kyEcjsSFVYPkYCMGci29AEt89zFkBPzz4dztovn5Br5LBuVxHok3iwiDByy1mFyQETWD",
  "key38": "5J4PuCBZ55zN1Uv9qj6B7fuc65fAzG2BtTPsXb9E6V22pX8upyeC1Xgj4eNkcL5Kate5L6UHKdJXRYSjq6eVB9ny",
  "key39": "4iZm8DMiuesWE9LArQCUwJ3vpgcVhpy9xMvbhr4nBv4VAeLbENjcoCpjCLnHY2JU2o2RxydcphFByXdu1bzLt8Py",
  "key40": "DACJDVbDjwPWSv2brf3GDTzJir9KkitN6uAV6zJggYEictgSeo6DZJUp3vFsrKeXhQtAZZHvTN4J4wyomMPGXpv",
  "key41": "3svCPjRUJwtVAJ1Nw2QhpkjUbcpCEnftiw2kuCPhJvZLiyehVNkSHgKfoNZsz586kQLEJyLZvtcvmufdVsLbiSh1",
  "key42": "57Lxe41RUPZJNFK1E6itTY4qUSiPVuuSmqntfbYsmhdRUeG6EsUyygjudK7jzMmEiQQhLCrSpze3NuybqwjrDWkB",
  "key43": "c4sTMbwmPWXGW4Dzm8mjaW68PShLMtyehggaorDv2guR9Ju39XK588dcz5dNh2SGhHHPP8jW7DTnX7Z1W541fKE"
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
