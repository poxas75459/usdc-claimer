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
    "pqbjeq6wS3bWBwPfwzdpEQ9m7F2wmNVJ1oWFMsf6X7syHwvQDxyueNRTWvJtMXjqMgJyVLFo6fSJskwQDnMhCEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSobJLsy1JjdEdFLPidXvBAtV11XNVNioDiWn9w7Be9mgG6VXbwPqQKo5iYUU2R6awGax6F44WPtGNB3zNJyFnX",
  "key1": "5nMnRvQFjV6fcwTDCHFKXHnAC4avL1EZj8hUEo9bd5gSyDvS6cPhuwaSRGXt9HvkRDG1zfF1qmEkacx3R6faSKUi",
  "key2": "65hq7xUzYZyrokbXFcEH7KRKJRCf1ZhQRrGZHdUmeNb927gViajSqAV47UQdXLrYFyxsW9puYggDASXwqW6YsoGP",
  "key3": "ZLiwiFx8GDZcfKs2ZX7zj9UdaqTMo6DYytGLdRH5qWLYFRMSp4yNwM7iVsvJvt7DAEagTWto6k7hrYHAXTGhQLQ",
  "key4": "4c9fJbF2UptrKdwLgRaqydRHbYpzPeRw9UPNKUfq9byD9veZ5nDUyYTk6QABQZCpTwDPwWhiVhuPg4FNYpPCSQQD",
  "key5": "4T1QcdHdCcu7PJ7May9RzBPoRNMWjVzD2zy3mCWut2QRuoGdoCs8eS9aZbemYqk7AAnbPExKVL8z1CK2s2TYKg5j",
  "key6": "5tCbBBQtKjt9bgJ3xbvnXiU29PuFq4ypiCSJ83MH2AkZojkzBQ17PFxQBdoqPVgYswbq75yn8yVXsMMQ7EWhqW1E",
  "key7": "2amHAtuKnvFW4TjtKsyzvyJQ9jEsSCqiN11NBAAV3dBmBgSgzDX3tidud5nnZmit2Afe1eXCVjLKPSqDQkTM5rGX",
  "key8": "2rapKxmpTG4BWTvcKcUocpf6HHidXHCJiYVafwURHWZPhd8B7ZxkTHL2em5WZL6GB4Xpv33Nff9NNDNz7rNz3QDz",
  "key9": "5e2tpCgxjmVzdeRA7CgEb634DZKCg6H1eEqmkobfSURDMzYsAae1aUGGHqe64jJTXSPvbZH7UDzMx6EKkuNhUf4J",
  "key10": "45YMa9Qa2GsJFhgYDP1UBZ78w5vjDJA8SMrwQmKQqZQgjq81nCGhY1eC7gFGvDENP9rXKiv6hLy5apmqHnbh2QiQ",
  "key11": "2B2NRR7T6PtyGRKm2L1R1iBrpoU6jhMHTdTpRL4faHB6KMYRgu6SkkoAdE8sYpJhGEnnXBjhsd8STaYVvAJ4YqQd",
  "key12": "mrcp9hmtLQSUrffQdM6TX2aik5erhkCwwDYaeTbAi2HY8bH2LtK4VTet7txVnotDNHqNV3gDYSFui1XAbQpEV9S",
  "key13": "417FUMDjmV8hDkDxc5vKTVBXpkTbAKfBdqL6rABstLbpvVQAwF4ex7sZbHDE3L6x1dfT2u5un6drwt49yHsmhvsE",
  "key14": "bHbQUv4Pbw2XtHi938nM6b64qY98U6Xv4hWufW4SkymjHi4RToiNphKH3Pm591hod99dReVmDgy1t2MfpQTFpS8",
  "key15": "4pJUAXoGvtdNyXhBPZA5iyP5yHYy3TGjoN88htPZfsaQY4FesrzBGCfsLx82CGUGP7egZGcHVe6sxjGneccYS2x",
  "key16": "2JJPfG3mQvAXBtvQ7KSaFVpXMmu9qFn32jyxzkJSz5W9xxmUzZMaWVW6ASMzDvTx1Rsgy1XLJxqVWp5MHwYRovrm",
  "key17": "3PnEUSdmBj4va7AyNDzVJokxp4gQghf2v4wkoydtd1wEKxA9RLziHyGhHn6sU2VZ4XBHbPNHyxbXvFq5TU5yCfR7",
  "key18": "Gj4qWo2rjpRXNhfvM9ahQZo69M8UpY9wTyEhGQjNb36aoKDVfx6jRQqasegP7Xrgb4Yr3Pe922ixLpGe3SKZjXc",
  "key19": "3ZXD8uPhg7YLYoz9w6MPb9pC7y8iYkTdSWo5C9GD4sYTmYW6dNTSXeV9EHUUE4Ph2sGE7JqWKnMgfRSAc4dgGpxU",
  "key20": "2PaKZ17nRXMpoEDRA1m7Ly2BcHrfsrgbr68P3uFnLKyuNJr269ptVn4sL1QspGmbBWDtETKqQ7uHnvYjyxkyWwqC",
  "key21": "3Cy9eWXbCDDcfBvVyiVVKQCYZhkzW17j33gjoKQ89DANWSULABvVGhSGuTUdeHENced1mzsX3FtivccChadPA88j",
  "key22": "53BA7hED7nc6bMa1CcpgwTSBXPtocc5fdUh7JYbPEeugnavnLQByoaUXMGFgnYxBvS5nGxJFq46RBRAsUdCC7gYD",
  "key23": "5UHnxfnZHeioU5hWr4wDkDpF6GHUPMR7xSMhcfPNfSEsJNxkU2WSR5S7rZbTefkWsQXX9aWFCjRXCDbD5RkTMhra",
  "key24": "4Vo2ki8gzfmM6nvNJUrL9DmtwwqEVZPX7fumfvjGbUjNzZh5crpaUrm1xyUNje79EYENvyrQ2sJQtAK6n16HSNyP",
  "key25": "31p4DG3M37aW12t5BQk4SDpbTgTPKv1ZUhWwh279GvfDJSpxR1rkzsbPM7LSqURj4BusiQFE1EFaK3uHcX8tfK5",
  "key26": "4a1sxQjW6i4JJJeCYrzmegxjjsJ1998PD8x32WXuBB5Q1gEk94mBG9DVJv2FfAKQwKtwTGwTFLjtSVryy18qJoET",
  "key27": "jFdsv7S8HYXGF1DjvK6b5xgAuFqefc4ZnfbRG2gJ3Bc6rF2GJryk9esB5oRCdJYsRsn9L6senu6KEe6rvURBtMU",
  "key28": "gzGxJHytcpYiT2A9BWnVxFNg6722uodLzdBV1x9uejXYZoE2PVmmoqjjYXZbKhPyopaSXM7oxeGC9geVJaR2x6X",
  "key29": "2h7yWRxey3gh7TrFqPkZd3x8kBxD1HB3CN6zsVhrtRX4Dac7fzCH2f7KrKonpgSDLrA8FVAUqzjxYMKSYdfsmKdp",
  "key30": "2hh1dj4BNPvKREeFRiJd9baSfF3EvS56Xhf7KtXRaC7z9px6cKLSsMJM4vWKY6UQYYZ1xAKpzUFbmFrxxXzzxAN4",
  "key31": "2dQe24k6QUgejYGwd7hPDPYNuJ7GpSmhmgbB8Rx3AKuwBskqmeMpeDesb1y1Zajmxz9zqHcSTybqPkDtJsrTL5ho",
  "key32": "FTdTqvoUpvCRfnAfA1p9d4WwMM4TH5qeCA7btG55LZXH6HvuiGun3RhSCZknL3QH1LMvxnrKt68jqwTK6ArK5cX",
  "key33": "2WHyvVTyQxXuKM4vSpEfTy1mFbGodh3DiP7bfBR4raBRyGtt8KP82YwxHVHN9zvRqG33LeYssbtW1MdBw635RFEW",
  "key34": "r5bnFh8hqFTaASkntzsitWUJjhKXJNeCDXPfjDby32q1Dtfigz6dew93Bmc2AumUujfdPoi1r5UckAN8LQTjYP2",
  "key35": "5YucGGG6iUmpv9oyKt6kz9iYnVHyzstYyRpQgFykUefFVaS4HgaZrrTGyWpWb9L6QR15K817Sb4SYPm2CH346EDJ",
  "key36": "5jnGBHXwgv34jEWm8y499jFuRABbHyVNi1gQdwcV31M9EKzR2ho3gnujchBUKTEhvc2p6abXmQ6QZWMctJ5CXL21",
  "key37": "23rztyWycNQwZNCUiqQeGNRagEQCYdfipUpbDqXdUGDH6dVEu1cNiY1XfcK5yvMcocc7MtdcyuHqjTL15sZ552Hh",
  "key38": "kHqyNPSB3K2opGSv3PXAqdxypNoRBkBbvTHfAgFwNSKEkRemCDQuQtLUaPgKzAacNA3Jzz7Pxo9LuYgNfFXicCc",
  "key39": "ZvBpctgw5uC6XYBpMfQFAHmPAx1oC6JjqVPhvJtZcc1XHyJ7njr8WhBKEaVY2u51k9XCqk6Dwwoi5kp88MGydCH",
  "key40": "3ynfE3BXjf9MrUBKJEKNxu7kAz124Aoboeh9YmwM9Hi5kDnyYDoTqhQLRDzP6LY1JTewJvpiryKPUeviWU9X9BVv",
  "key41": "42wXJLjVDHoNG72WpYsT8Yt9LU1Ck4jZ3N4r2iUSz4t4zcwwc2xY3AWqgHNLHq5vpqdULBgBuPRThHV3kRzdZC8f",
  "key42": "4QKwoHhGfgYAneznkK9AiMuvdBqaQ3TTLpnapLL153xzSNL9SW2QEh5Pf1cAvB71WZJArnRCR8JJ8ihGR6zZoUrC",
  "key43": "65G8xJJNDVbB9aaA3E6Ras65E4RC7HVxNta5wEWsgpYGtKxid5HjCrraLQ27pVyHwSFLLxSbB3R21s8JPupuUKf8",
  "key44": "37XKXenyHT9kkb9TB7xZdkCK3T8Jq1pWqnz8qdHF6MgHpb1pHAMN3xAd1etDKZKCNzLEakCujaD4jFtsR8EfH7r3",
  "key45": "4VNfQ3hfo4FqupXgywgRNTrEyf2qRmzv57vaTT8efNrsdQS21Vu3UswyKJQQFM48yZ9mgaAHrxX6HXAYSGMrTki4"
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
