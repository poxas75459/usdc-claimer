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
    "3z5FsrRJi6e9g4TuRQCwLwhaWtnN8JEDAEQ2CUwJch9mYDxBhDcsEVgfQi6bYPaf2wjrADzyJrkwkcib8Dfjpeow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oHSfA5itbacWUtowZArpMfd5J8FETW6tDACxYWnpohmje7iCbwcLffiYLqU6UqQLiag2kfUg4GzEqy1vFenSnnX",
  "key1": "36RTxgamEj6WZtV96GEoWxveCsAE8mr861pdRGmTPbs9EWaj14TT7tE2env7wckikDd7PAFU3vfEKNaUYnV48gbv",
  "key2": "2YYr22pZx8puxVV77VCDdkPxcUZ3J2FeqTUbMr8Rbcpo8Pk2Uz4CG9ukAWdctkRdshu9PqwVaGnznvb55oKkShRT",
  "key3": "63AemdXBka92MtPtb9vt7oswsfzZEYBJ29TiH8Zr3mnyFhym2obhhK6s7mxLXfAFykMAZm8HoVRMftnpGCzVhuj9",
  "key4": "2YMfy4kkoyzSoC6notbQKnvF944GH8yd1c3U5u5WdShAwhAunGNbRUoi9iK7r7NjMFWmxNmdznZ3dhn89Pra8ybz",
  "key5": "5Skw6Q18DgAbEihzmSK7R3SaTVQzgfo9SsveKv5dScwXAGKcu428FkNYUifToZDBUfbpamXZ9qsd14psuPH5j2qo",
  "key6": "3NakKVodQJWk5SymmyuZZq11DAbTHrFjxhxaJoRM7M1E9Uzpmy7DzLeuJCYG5AdJZ4MgacAjTndGn3o7soaZdyP9",
  "key7": "2fcsjMJx9mccafSGDAEz7joaAzYYJA5h5qmXQ72Tarb7RXPfSVbgNzcEvSUCLhFMnmpMNmeaK1MpovaxjAVipXyP",
  "key8": "2UymQhC7d75YoaPi59uApnsm682sAGt2fzbacUGdbaK4bSQ6rDEn1jPFcbRmhuAsehV4yApWeiXmgEjxGUe5g8hS",
  "key9": "3rpNCkqe8PYiDFYbeF9bu89Hxdo1B4kjkR98Z2uGNNUvwZQ7CdoDDP6AHeUeYVmDFdCd5GfDck2MdApUwb5KzXak",
  "key10": "63GXbjxrVhry7WVEHEyonNcmtetS8aHrNZ7VM7sFVAswFvHTZ2r3jBcT7Tb1Lv9NsCmLq2mf6gEX6HGrjuKydvh3",
  "key11": "nxPyG1ebyspXwJL3T35vpYUoE9s5Vka2QRPyoPQbMGLrEHQYYstf2cfQyraXRvxaGSLxSosJ3jjaKZPSuoPfc1X",
  "key12": "57vedzFLBEihoSrDeFkgtkvCSBf5hrHVSikVz1kVWaMNwob7TSmwHRXejFojv24gf1nFbgDXdCY5CNmRatATdpcv",
  "key13": "4hgJmrexysf2ciZ8Z1VaUKCCMHGr84JqCG8uCgaVUKp5NVeYtimCTVEpy6dSE1a76uyFn2QYLLVLL2HA7CT7Y5R3",
  "key14": "2UbRo6rTHsFZZZRnC7XTVTRhQ37V5sbA8EATBsKWoysKoXDrJKnfcPBV7nESYkygTKtUrgVxYvQtLvmRjiF1SAG6",
  "key15": "37XnW6TRgBs1UxMdgxV4Z25ssP8gqrKCXF8fyU77EUSBPbWwzh2iu1svtQZjbkQWJgdqZagkXgmNQvbHiDjB4Rr5",
  "key16": "bpkwGawqvBq2g767isHECmXHq7xJhAJSeMKSfqRVtpqvWWnvubUsFoE8YZkwXmhaF3ysLDzkQ3drubXH18V5sGF",
  "key17": "2ggcsa6mkqXpfJjn67YyDRedSCyF7e6dN8xpCKdSTka1spKMCtPMhnuTKtHyPDNe6o7phY8UhFC56eqWSs25ig7g",
  "key18": "28PMkiTF7UpY7teQQGNyHsTbs9HKssLxbcqwbeS8GDzySTGVdGRey85MYte3dzE6wGMiSHkMjSvEJKRJsPZPMnxH",
  "key19": "5gtocFVkZDcT45juG3vJ1p3bwv6sRMdwjaCGgC6ztzSU3rWy2ieGNvS8bkQjyZKBskHzTWvvZo6Yy58ojN4LSuLU",
  "key20": "94wrRubMRDWjkMtdqo93upQQnLuGqkQVoh6HtAAGsKXWFtK2e1NTk2gQxMm28nsjkPXTGADZRiH9fRseGh8Q6RL",
  "key21": "5zdcWHJM7sdsr7GqSs5AQQfia74rSTeYfJfiXcQspAF3rubzjmjANLPrD5FuwYnYxvmVZ7fkQ664aoWEfZccFCzA",
  "key22": "3pWZFGLRR1LMCfa4NipnshXiXVqwT5VDHnf4kx5Ze7QNJhbZKNhTjCHhfgfFgPJ2qHdAQ1y2kE3wyZad77fwi3Ex",
  "key23": "VoS3mfgsqKU6qTGWitHzETffPH5UhyF1NbK2Fsb9bwLQgT22fQbBawztVQcjY1DchRfT5gLH6dycDDgtKHQqKLs",
  "key24": "3cCrvsco83GeG2BXhh4oZu6VBS8FrwN4SHAtKFukdGRsJHAMCby4oY1HisLNw4WEsAptFnGuta7ugHsfN8h17dd5",
  "key25": "rxz9qPvrMkPtyPLx7TrnqRwQDnDZWcovFfT3iUMMfeTrzZShTQHXo6o6MumAN8PKjDah63Dkwn4GQgbuKHedHWU",
  "key26": "3z6aopwyghq1tnXtWBDQhh7qYm3df5PzFWL8vxpvt1ocd8Qddu6Txwf2pKFMjmNT7hEqd7Kvvx3gR4zHdX7kQFGm",
  "key27": "5JM1gZtvEPT7fktiWkxQJ2hwzTkdJEXdq4LU42Smw6re2Bej9PVhkTyuDc8DgTSdhaMgpkeXra4aPWiT7LwZxS4N",
  "key28": "3xe3FbZQwRLNxuAho8qk1T4veiQBJZZDGNELkHzZCXQ2cLG1qGZTvBXhTuQ4Vzo7p5ow8NwBgTq4FDEfdQxeD91B",
  "key29": "2wi4eWPZviDeUMwWy8kYT81gE2bnLo59AWyDHTjorVdvZe3TUcsfi5B78dvqmogKvXj2kwb4Pd1qa7rYkPUtRaZf",
  "key30": "5YAwu53PSkmjXFXwEiauDWCjeeJHRpaFa776hUBuybZKQaF6poJN2sqR94axP2mQ4u1tqfXDLNCytx5DgebzYHzb",
  "key31": "nKo7D9wRBgzQuTWcL1hnWRTiqXyibheQkt9gjUuHBm4QHfdG1oivXwMVU2JsP13UZUobQmNVbDBQkDrAtUEGaBE",
  "key32": "2V3fbbQYQHRxJ4wvTcQo1Ac74boWzGiRbvpna1uSJThedTW8dFAGLpWjnTy6BpbfjzANvF4C9MXMEpez7iohfNQ1",
  "key33": "52GnqrSTAkzDcf1JHFgafBE4Uroc9R2VYC432Tomiyq4BeZUhcjiuAcXmza2ujLDfDFQ6dkEGFVuFdGunGfs7umk",
  "key34": "5ivx2mquQQNCu5HVKkQM4hxVb2uVsMzNtf2juj76qLh2jt3Q9byD9wakjBz9gYTTR9gSbe44cc7iLpws5ezii4V5",
  "key35": "5xR7cEh1PdrWJymGesti9oDdEfBpfpP67gcAtC8dXhGr7f5QZqEMeB6SpE1UmDeNo7V5A2pJCkGJQzSwLdFMuc1Q",
  "key36": "2HTzAj4D9Mpm8azmo6fJzuWWJorGNDdgvmPq82Wz7UPbS7ap8LPtYWaMsLeAmsRcYdH6U2YmN1a1mwVzfSVXH5iY",
  "key37": "4AHy34M4ovHiMDdFFj8rQYLp2mN8DW48etQwjMGq1okYJPLkctQ7NGQuZYDjyFRUfTCXtGmgV96BXuouttVXbBW7",
  "key38": "XRgJhb1i4f6gB39gJutaZbpAdop94RSTkLyw5VGfF3qfJtnHeXCvEJEFuBjqVeBLG66YspNYmMjKPzKAFzKEB8D",
  "key39": "5aYYk3Wz5Cxs1zE1mdy9hW25Xn9HGWqiLKVgHX7QxTdMLqBPxgEzkf6gQPtWghAS2N42NvwGvE7KqxZDKmfw2dbi",
  "key40": "3KXY77wgEs5ft32mSbFGWbb1pPocEm5R1EuuJYDBaY7QXNgyGn58e2w7HUA5b1xogteqnaQ3jRFkJCV8otMdDSVt",
  "key41": "4bDkvrLsBoJV8XmDZVHJrbeKbJS8RjNw6urDuW4Jai5hh1peirzW84ZeTzYdMq4RvQC3KSPG98zkJR2yFMwwftVL",
  "key42": "2m2wKw6hjEFz8D4qyzLM3REgec33v7yU9moG46Hn3pzMFwc88w8GjPeaBVCJegTLFNuyniJbLuxzF4ADKhpiKzXs",
  "key43": "5cMUToCpPASwucyawCNLGYqT22YqF2vdfZNLRqUeaHDJeJB47nW4qvUrP8mURtSJKApdgBbEUMdrSYKyY9ytD1Ja",
  "key44": "2haS6Y8xdpHNxctu2rKu4SeZtMehe8g599eeUYB6Uv2YRmE5wcQkRkg7Q4kT2DWHweTVdF1eFN1XA5MtZfnUhCuF"
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
