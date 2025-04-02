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
    "3Uyg1drzjxmeLKnKVte7ZaDW7m7SehZit1Rxapx4KWN9o44MyD4WoaM3u7BVGU85sPRFCESZF9ibqkjRzttGSW2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pFaPm7i3fAMyyWn5VJhzy1YSzXGPKmGbdyNRJZRTgsKFKrdUZ79FATpdJufjn4nWMggfR8zto6hfr9fsvXHqFb",
  "key1": "6EBtC4WAVnw9P2v3zavhsS6nx1Gq5f7AbCWp4c3QNrQQTQR7EnMqBEZdE7ShnWHDzuSFaK6yuS9hC2UN9yGe2Sm",
  "key2": "5JFDu6VzDbSmRrRwYwSFosLpW6j6hAUfR1T12oL3EViQRnSWmFkMiSrhrDc3YhJEZwirTp9YS3FXhzLetoDzAmHD",
  "key3": "2xF9E2HxxSWZRhBZ4BSdtaQ7tJ2XZDKzWp2LYtdYxTDYuKdHBQ2fYonq19CZaswf64h8gDXTZr2FzM2R4CRUYfNx",
  "key4": "2FL4iL3VLtxQaeGR9nc9yWx7nb6YYz2zzJygNtkgbVY6p6Sozfug1RHKJ8wKH8H7uqtCvtEiKW7k5Yyx6bcrZC1c",
  "key5": "5uzNeXSxek3S7fdu6T39cDLy6LsHzDqsZF3eyiygpWbWaDmoD79JG5dLU5QAVeTJou3LL3raQAwmebRZog52YaBE",
  "key6": "2UPZE9QACmRHPmgh1s6NEwE7YRhqnvAngg3Jwd94WmLNvnrpbSfrjhD9c7pBYsNFkBTzTU3zp7m9PTLQG8JmwjAb",
  "key7": "2db32zwtKgWuSPVtDWGsxsaNMo71LgWKX6A3pw2YtXxh16ausKK5FfxoSVJUTQghXsqB4BKxTqLkWqUfSsqSrLcK",
  "key8": "5Gwd5YECL7whu5AW5reGEPWvv1csq4ou3LAgFUr4h5XGPRW65QLQPfHAFqFhXwDQ7fk84ZLzoD8drfYVedJ17zpX",
  "key9": "5dMLaWgYMJUco9Nv3PNbx5Z2BmBGKkYRCn8GfLWVoMNFEBAbY286CcJREmLbAMww8eB3iC36cUTyh9u5gxC6FK3r",
  "key10": "5X4PW7LJSiudPZpFfzPhWhJ4x7TiM8ekhNUPKtH99WViYy3SBa3AgSp3RotMZvqXdzG1BZeTaQEUgW9KwXYuh745",
  "key11": "54wacmgBbSie8D82xZDK9vjy3rmNadx4efmEHwLPrv2HoTZfpR4UExNBEanZSzo7odMuhDTXJrugLpnU7Cu4XjTK",
  "key12": "28sPFBZ13AURG9xV8pBtNmdH6xnwSzc2kDa6duKn42YMciHwr8YHyAzLX7jfszUun3dSh7p1zsTgY6CqGghZAkgt",
  "key13": "3SrkhRLhh2NhbrvaaGWYhToMudQ9FS3LsYYR8nKGYcYUUvbyKPAKobMtMnmZ9sNzJPaZuFWiM4UWKz9LV4pxLC4y",
  "key14": "87cQigF2dSKRxVKdwbVLz5QyW3fPwonfT12SccLVBMG1uoAfgH6aV1eJ5xjGNqREesrHTjay5dw1hMQWNiHNCUE",
  "key15": "5Tu8KeYaJtsFNi4ZujPLuFRhLdWvPP1EV6qokqRZRiB6C78BWCvqQq6KHKpvda9hU7Sam6ajxm42RybfFAJtWDG9",
  "key16": "2jQuwXMmzsD8DE22JC2pDU4PnUc6M66trXNMyBBDEYMNVRSB5vjzgRid3i9sJhm3h7oLcKdJDRrxBWA3NNdNwNpp",
  "key17": "4pAKXWhyZa18McBfWjRuD4gdgU8ZPcQM8FHrDPd1fivSSddiBmmv1mt8KwRpCdvXiwLDj6fHe8TugMeM5mzrZycA",
  "key18": "47q9Nz3uoLBwLfz2ReWZSCRvTttC6wVHC5DfHDvK2UiEQTVPm6NgqgnWhKCCB12WBxB86Tw6Mhx4MAR7FMzxHEri",
  "key19": "3JmussCCLfAAt6fvnviAByCaJGxhMcQHvwvCNyWMuww3yFNZRoaz1DusR6YYruDEXKkuPRRVgjhJucu8cPWTPuHj",
  "key20": "3msJkUYkDQAZe4UMXHhNLR6RRVXg8QDEAqeuUpHBhjVb6VGJpT1Azof3LZkMVFBgamCnuRZG1tucESgZP2yBYiQv",
  "key21": "KmfLKasT6iiZuDYyXZC45jc6fggFQwTR78fAjRH5cn9bVcoTA5jYeEhcs3XqzzX8kJtGSMER47GaqZLZrWxsTRq",
  "key22": "4Vt94B96kV2789eAo8iJHpjorom9phkYGgt1A7YMT1sKMEayz7DWxjT6ZgueH7FFtvVxpuZxiJBvYgun7yt7Ukaq",
  "key23": "Wgccez9SeGCwcaB4nSR3KWgeUS3WANpnq4TomipYsvRQ7cb6you4E1NRjuER1P56yBhmdrTVCtNfDPnXTEiXVDk",
  "key24": "4QcPw243783rS7N2sEvN5avGcxSEVY2gYtEPn9eJcXU14j44doshnbYodF27cu45MBR2a6AgdVg9fzTjesiJQE69",
  "key25": "321ASi1zkoCw1VDzw1Po7PpmJxKtHeiwQbjy6thKJDyuDmxBxSNELsXCwQ2ajCaZBdxJrCzr7bUfDTdZyGbq2fKd",
  "key26": "2gAqFuswipR2x4ezEN8s7fqTaH1Y1FwHACFP429jXavG7oNpukCR6zHcAjc7B1eY9Px6eyvGf1D2cPjAHTcdiEDd",
  "key27": "54UBggsuFzVeoYDKBCy84KvJec2NKf5zqb4FvFKgPbKJwxX3qCzaNnyFCEkwPPEdWtVQb9ugMyg6RUKMWAe3f8vE",
  "key28": "5GUrK2bDEJEcqSgvh4VHPxa26epKMqE7VEr1fUciuLGedAZdJ8rHvuvWJSkwFTY444nhoh9Mb9rTMKtG8bA9gWV5",
  "key29": "4NWdrowpc22aH1FA3yK1YYr1ra62YvxW118kxdF9bcZPyTR1TUJds7PnZSgBtXHHdQGN2o4GpDLrVVRV2wUqVPER",
  "key30": "L32Df8RUwX7G5SzEFCWjLL1ff8azmCFQbopEfzUwvTKCZ1G4eiRKP3aUoLiTJWEevAQCaFMdymEBgBn7acbiqQ9",
  "key31": "3PunJ8bEHg1BTVi9L19fxYCnH9bRwEcrNR5nnFCbemofLP13yHpf643S2GXT2NMbyE3iuX6rKs1aGEdfsdJst5hy",
  "key32": "4CvmNhrqqFPRM6K2yRyhUXeQ7XWuXppKiRNShQi9Lu3Tgaw5b5U1kryBBJBAKK4eX735trURFxMgQHYM1LVNE74A",
  "key33": "2VJGrQjJgL9776hxSvAAA6oLwZ5DGwtFQNfTfx1qbTUepebwsFP8ZxdaTjWk2Q442CR48R8Rkhfz6TLd4YfWMAkF",
  "key34": "2vUZ2WNk4kSne5P3f3QQkcawYJBpZKCry2knnaQnw9HazHgoa2jC2qkm3x7GUXmXV7CP6cSP7HuXw27BXkdyGCXW",
  "key35": "3fq8rNNhTh2jLNuTzeqWtZ9TYCppkUrCEyeXhcE2QRyzpBvnsy9zB4ieYjQD9puZuwEu3muyYda4BY741dGUG7cV",
  "key36": "DVP83NSVmLschdz42fy1FrJXUcxs6viDRKji5AtYNoLy4Befc1wRGw5ihdTdtNUnMwExkD5uGysK61MCuGjkJcH",
  "key37": "XYhKgaL42kEmyZe6Qecueg4X2fdkFpt9gum9beo3D5885AXZtGDeurC3GFVqBW5Rp69tX6L7NLfpK18pbWBJLRM",
  "key38": "4s4BcxP6LPmK37JQ6JpjJJ6PPyE4QJaPULTGqZ2Bn5eTqV9fhKZhY4Vi7roV4XD1yACkYM6gDMFjihsb3rXVkPAq",
  "key39": "21kSm3uXrmtBp6shGSv4GoaDBh2RwXYpYdhuHA6ShZqECKLvXTjoiznV5uD7RRbhsdXryUp3rH8e7F9966QDWdXA",
  "key40": "4Z3v1VE7KWvka6janv1NSNcKzpYtV2ze1FaGbisM5LnyH6tAjNNVKabrqpoN8ByFXRmkC5fndXnR9m28LuViLKH7",
  "key41": "2AnCfz5x9SkkyDPhq4ZMQEweB9aZzq3RBQ3MgQSgFNqFe7cjfqcVfh2CQbHUyWgAZBog7Fn4UQojGVEShfbciu2a",
  "key42": "3rwTcd62qsFHPAmQtPBvfXAQLqhY9pugBMPBpkwtxdMHyfv5Rkow5GZit6g7ef3V3Xyzwk74xjz24SxjuGoZoVuT",
  "key43": "4woVwcpsd4o7ZCXqsuzo5vL9z3hzv8EGQwyjRiDvMi3L1Hf3wuUE8hAoJ7tsWT1qfXXsyhThG7aLy7UuN6RTzS8W",
  "key44": "5UcsGaiv5E9SqS3iDC7z8NBPULyDZk1LKqp3jmJ4Tee5Ui3mZXGkePdAFAjP3BGf22PqCtPLZZjCzb335R4cKhVT",
  "key45": "4KGMht8v9MoQcvgdHnvZZJFPTjRdoVkbA9JtHXXZZTZkTH8XY24DKJWfkr4P5uQk6r6u3uzuBjUnzPNaduVDccBx",
  "key46": "2yt12uGGQqAQ3CTMqvVtSSnR1WfqTmVfYenFTaJDAGGnzmMccGGXfyXfzkkRKraqYsuxZFwn3TUgD6SDvgknzDVj"
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
