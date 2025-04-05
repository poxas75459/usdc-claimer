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
    "5CdqVsMuyX24WFUSMZSfEEKzSfFpdu5e8F3Rjwo2ZyVaPZ8NyQWwcZsF7cXG1jcM25DzQ9CL9cmNoUDTRZmhheZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mjA8AkRgGpydcTbmxBM8UXpX46PZUtLg6gWuKd7RacXBkBwPj5smNn9L4k8rRrUA1LFG7w4PbeGcmT213RimMvi",
  "key1": "4Fc6b9Ank9tRaHehoxEK7ebBJyWXcQvhj6uaLArCSFENjrhkw7TnmsLJfgh9TdES6Qd1kFZWHiWkRZTfh1rR1smb",
  "key2": "5BBP5yuoML7sKdXEVP9nN2AFcssWWeehuSTUxCM2ynmYa41WwSwoBSaSg83yEgZzh99gp4VB9FhmWvsMy1ygdJzA",
  "key3": "2AAyFSizmRgaK7tw1QgQeuwrCJApA76yxKZNtGYuWKAzQt2GdGa6fujGM1un6Ck7nNn3EaiYA2rQFT51PA3XfVXw",
  "key4": "2i1dfGWm3FVdJyhcpg8SxJN446T7yuLpiVpS3Sgd37tyeZAQHWbToXZTsqvT3gjKnYabZvXvokW6bE3gzkrM8EYQ",
  "key5": "3kny2bFTaHHrLyBWrAuuYVHoPjpWWYJJ3RFhqAwLQEnnhLvTkcyj8CRnFga41vLx3kueqF3FHeHdNBB9uTABRJtH",
  "key6": "3Z5LK1NmNZdJQBhkUrPbqjHDQwRYVfjgsjchyoLtph9UEwvTvHcPoat3hM2kZp5iRPLYkvbzh5ZnmCPKDLWLofTv",
  "key7": "5Q5R1JLrBvomuBZnBtAGwrXGfK6Ynzca5mBNFwG6X479TnaqRRaSfr5oDrLVamLPttaX49Uy8HsaNjd8wycsykFW",
  "key8": "2YuyRBp9r1QYwfATTBxTBHBe4YQvTnDES6nsGqDMhCQAq1Zp9LxUDZHEtjQNgyLRSpkHCTqfGnQY66rufNnofqhA",
  "key9": "DTtkoXQfgovV7joCHF7CVVu3GbAXjxNVS22xQgirxA8Peav2EMLtfM2GGJUosRuyF8Jgsv3wRenVeZCQBHt5CLv",
  "key10": "5E7rZ4H3pXmmtAfJwosatrSszjz9iyLzZcNXkyUC6NvaSzrrBJhUAVjYcondJV7Xw4D65vpWxz2cJGiNLDugLQJz",
  "key11": "4TvGQ65Ky8X9rcWaeLLven7DSSU8vJiA88Qss1bYoYhTM5hM552UxvDSrWVdCnQ7b3i1duJR71FnPdEF3bw7ufeg",
  "key12": "4znNRFsNHMij5zXKyaVhna18rsNBbDXjqb83X9ZekLbUVi99AjeFbSzpcrLUcngcH6e3SfnNWSe8kR8i4GyRCYjG",
  "key13": "2iu86gzTYS7kkN8uMYcNRaS9MXrtSooViaVWbsku4kQHEgeBTCDuhoWwZP7SGgLpMH6bTqVLtecMhdyJRj6MYf3r",
  "key14": "3PAwDGzb8hsfh7iXABVmwwhbomnauJKTRWaQjFkBankJqhs5XCHkWKbE6KH4cuvFkiZZ4RBL1b9ree3in4fSN9ji",
  "key15": "3NAonk7amiQ8Q5qQ7zJLQAJxaoBvpoMAz8LtNhRDcNTpLPYc72mu4NxtfQYpFieZUq5yAFubzYRWqYeiaY4ymn2Q",
  "key16": "2bJv1yjaEdqnbzPbTEV6UnEPCV4DtUQzgx2u5mHMSQzqwTpgv8i11mfSfP5FyJRPkQd7hfDEg6MfBvr6EMgqzFC6",
  "key17": "3jmBE52cGgwS5wM9RbxBDgewzattp9kHjM3gVtacMw6Xx5rERyJ5zPdMKByutssKs2CJD1cEqn12cXuVg9Pr2YPS",
  "key18": "2WxQCiT2yKE61c83fhLRKavW9H7mzgEtJRK5rH6redRzaj2RGhG3XvWRhVJdaiGaZCMn2AbS5NDUh5pefNUUjXcx",
  "key19": "3JKXkL19iAP2aYiAtkzcd5bT82bGQ1xJaz6E1YRKrGeB7fwCsj5NHKbNZY9pZQid68AmPgPgjbQBozfbFCu2yuWw",
  "key20": "3H4dVyBCMqwPVcpaELdWX6ET2fkRmJhcjCxWmV3D3D1DChQngPuytDY5f4Fjs1sTWPad195etwqEAoGk5kTyTNx7",
  "key21": "33m7mLe171B169Sm83avq4r6SpEDz1UVZMDgsuJTgBVZwsCwnpNNq7uhweDKg5Rjyrqv5WnavWWehNWzTfjRDvN6",
  "key22": "5sEYLUXi26WP3B5cJGidJP8wBvH7z2kwAEVCQNybgaDtCevGcgtW18FgzbhFeo6m9XFyVGakWj5QJqiueAgFDMeG",
  "key23": "5aXL9o3dxhxPkzcnRCP6JLwRQorYWyS4ZBZK5y8Sg6STUb3GPHhimGz9SetSj4kvG4KQxumjFPP61esrHmYpUF5x",
  "key24": "4mfR3uvXGhxjoUbHcdaT4EfiT8wuESpAEV1AasPU2L32zHRcGacLJBUtwTx2Suz7hrUV3gzXteeVHHq6ep7tJuf5",
  "key25": "4dP7TPecgabuKrK8HsfJTtM14uGif68MsR8iUewn3REmMZQ4si8jiyccGxaAnFHZe817AurVn11rD3U5HwsJuuBo",
  "key26": "3LDKWBL2Q1xDCFYAVLNPnAXb3JbB64qAuHm9MDyRtepkasWvMhZuwBhX4g4TP81tgBfjNbPXTeGYmpoP6g8q3hUQ",
  "key27": "3iQQwdrUSc8VZmRMh5vNG96y9jfUBrM1dxbZsF2ytWie1yqoYkBCY12KN53zGLDxiHbAbFugiGGJNWokuMAPEswT",
  "key28": "5GBpkjkkuFUfY7GC8so14bZDGja4nb99Qnnqdg4mdPvp7SbFZnA7LQSrwEkGypAaf7oDHowAnssmY1hbphgdGMiJ",
  "key29": "2CCcE3XzCsVmLp85gJYSNPj349k12Bj8jYvdfTHe2kXJG85i9QarkxSJ4Gf7aiuxm3QE9VvfXKekAwRqNdim7fsa",
  "key30": "2JGQjPRYE6gpadCtWej7kyP1yqSRV2HLtdBQFLj2f97hpA2Bd1nVbXjoc2hf38hnc7Tb2emeGiMsuw1buUr3K5eG",
  "key31": "2idc5LxFx3TyPzURp7bWKQMjecyiND2a58PJdqJcUBR86YTmXseVAKMn5oQ9oLweuJbL3FqXsbp4MTsEzXMzzx6b",
  "key32": "3N9pFW6bCd196tctVjsKrPiTZZwaywDPyY6DMtHZkTgwwCBUFEeA7bUMXdYG8NYPZGPMBDCQCHwYB5xLMsm4qjZU",
  "key33": "M5Vw4AqQBCrreazazKMa4HZBRanUDmqSAVYjwFtFQq76n9TCu8Gz263yDxMC2WFu4N3puHMu3xhkUBMYvAndTx7",
  "key34": "2xrKJFADhyzA3Pq522TabMtoM3QdT9xM3kUsbmeNMe3SdX2pupYxaC1rKf8LTxzW8fN347K9r8oipUgHPYWe4EGZ",
  "key35": "3rvpEpQ9xAJpW9pe1BSvmMhoQngGhDXvach93Qgi8wha7DrjaC9T7vPGfvCiUW44buM3A2x3GQoQ4RL9yx65mU92",
  "key36": "d2GeMKyFsXbzKaM9kKCY7Gavew22EczJj97u2kUrUrmd7yoDvu514qXpMZpRRqAeGVEF4fZbCvqkXNE4h6i7HQf",
  "key37": "31RegaeVvqupxReo2wnPTE8Rbb8xsyNmHFmxZRTvrci7XtzGHTMgxt2hJoVBnSf5WBD9eYV9EmcgnWUPibrQbWSv",
  "key38": "3qJzjifQ9o2LNRppHTXGX7LUQwj6LEfrriPc2xZTvbknHCiFmnqyQsFQ92Pti2gSo2KHrVAFe99DfQRPNmDhG32c",
  "key39": "46mFN4aMqYfjB3DxF28xPs88gzsQuzaW19bzfsjYYRKpFZWjSdxTj6wPGJuZ3StyoDCkSvP7YuXme1B5BHPk3R9H",
  "key40": "5n2LUmTCrpFZ7d1eSRMPwFzj2NM4aHDwUmb6QpP2XiQegGD4cXBk5SZR6FDCJWwXuwuvegfST14xU1NADMSGRfX",
  "key41": "2NUh9BXGcv1xo5tN972pWyGNxe6hid3BY64epN6SfTbBLL1yLZjrRQ3C5FM4AAAWXv6UXWXEqTuQTV35GYCokpgn",
  "key42": "333qojJC5qCEtFSJdhhP2XQTXS49niJTKbF1pzA79qsSBZXhqqucfUshMASnvaVCujBbMWdP2BwK3mtHyEQ8SNz1",
  "key43": "2nGpa642NpwY1LJ8A4k5oi8MTnbp8FL6VvoKvSPx84W9KoF3MxqhtP3QsfhZUm5Hh7HnHVKWx7yMQNgPNxE3Ry6D",
  "key44": "2v5gADPQcsLnVdi8bBbvLbsNsQRyw2retzMi4dDnckegiStNcpH5KxiNCZGaXTR534nhBqKMvHRBCge8wpdrgJzc",
  "key45": "cSaiVEsdUgf26Er4EAZ2fecKbpokZqWhpSgWUJd3oyYMPnmLqSGtwRaTKmbdMziBLYAiXmQQsk6NRKsQFY2mmzi",
  "key46": "33TegP6XRoU3GAJ3GzoZTVr1NN1HYYTrpK1oyQV9xyXksHiNXo48veCefkXurigjEYYiNGJrrjdWUvrGoJ1Naqpd",
  "key47": "tkJXh2P8MA7nzd4v7wkcqfQUjwrm4VmnPzo2nZn59cdWXaABywqEeSXAq2srqFRS3mVTjQXLKk3VxxChH6TtxK3",
  "key48": "34yAY3HPgq8GcNocQTRP7YfQUSpm2nzTxzLZnpaFfrJHvJPppbHcjuuzCUxu7W9cTGnS75d5hVhgQxKyEgR3jfQq"
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
