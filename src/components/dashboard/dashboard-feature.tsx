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
    "3B592498NdpqqkLR3PUpW7cdmggH9zjwixypq48hWVd79vkVEvM8WhZsuJjSJXLi4BgnuSpZQZSGeEgoQsmwaHCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2groq4uG75JVwUADicAqyJUWNnvQSdRRe1eYK7U7G3QxZfvUXgpPUrmVJbrQKW2TMEoUd3QJYrKvJeerYoJkErBZ",
  "key1": "5GdnAjaG3KAktSg8tFfgcpYSDmXhG7AvXFKSc5AWHLQTcAWGTskbHGAbVQJSCBHmDXju41TEY25Cp27jyq2VhtnJ",
  "key2": "4NYYkYA5k6p15rK1mreTMgFGqWrCycTyKkNHjdEwME9t6pg2oKh7HvFCkqrnhiGSM8gpRB48VBEqHWTAanDrQtnc",
  "key3": "3hLJR2KQNvoFHqMn1X1wW2qKBEF7WN3dQKMLc4EseHq7s6U8cbLomZ2noDVb9Vp1kZDBAZYcL3xhVqY8JEfJbbDq",
  "key4": "52YB1M3YLa7tRR3z47ULqaTU1ymmBbyCrbjnLJAPHdFmwdwfaT4wBnd8GY9n6jUv6rv6YXYcAf9nLSGBtU2QmGBr",
  "key5": "2Npz1NnsGQW9X22TtiSmiinwP5Gamdozy8xG4f3VmiM4oSyXfQrWdJyBzMnBxpVpHZobyB6vzDUsceKsPuRyTHVA",
  "key6": "4epPYPnnxd6TNN1YUmPmdkoD4hXWgFg3jVAyRrCDNNU5T3c2stG28oaJEcAEhJsxLoYnU642YhajU7dB58VEtdE8",
  "key7": "2dGpMtWzxXpqDJJvgeFYFVWPP8EtjYbAZ6UpUVEYo8NKr8NjC7kJBHAh7YQcH7Xw23JgicCpLwVZzEw9JHL3yeMx",
  "key8": "5nSwHJPfkWa9i4BRsQ6h1zDo9UzTEQc7TAnf8A7KLGTUVyxRsgp2VNxB6HyJdYgp6iJCSfyera8DdG4cmSF2u9XM",
  "key9": "ZqFcNZ8CpFJYUuGDQ8RAK2mfe6AXt1UEJCKfhCmk8PCumkakbbRDKRLiBfqLGGKQsLe5CrsxAkXnTHTg8MDVqTe",
  "key10": "4iykHGnBMPFFdUrADfrLvH5gQxPq8JBqZqJHzxrThjPx7Pzs7v6L1NNScU2agAE818Q8C45eCieQLGziJETE16TK",
  "key11": "4AsQd2UJXfAHbaaAAPPTowRcqMk3q4pCxRFVg9h2bGYUYYXmLjcwXJWbjy9wU38Mjjb8qN8zPGYbQ75Fe977dpq7",
  "key12": "nisu8wTUHSArWTKGBsVUrKGMoWekWpAwjhaLEsQYB9zTSVcyhNrUpE9m8T2CFb64CSnhxQKTaCtgpavd9bNPP9b",
  "key13": "5axnRzcTqNpSN8MYtaN4iwQ2Lzf1gmPxng5CyXui8jtAcEQaafiDJwNzkiEs2KQCq1sfczKeL4n3NADAmAidprmm",
  "key14": "aSroUq8HEwVhVkhgHhLtGp5JWwteSrYjPR4ocFuWgrFzjU128Ld7Qs1i8YvT2zmY35sEjDqDciuu1tfs5gjADWQ",
  "key15": "5dFLJXB2eCQpYLy7hHpD3dSeoiGwzj3P3MMZGjXojf9UUC2vEZsPTTxvwpL6QikrwcsRcEPFJwUYjNMev1ARvaw8",
  "key16": "3MZDaSuEAeesFSU3CJetcJob42HFQHkU8HNBGiqjsfPVWqN6AA34v57Jr7o4BdckZQ7achsxWEERPD2sUygzNSCY",
  "key17": "3terR4gBDSt6gjE8mpPqqZB63gnfd3KzB5gJzSj8BrNZdcNkrJZFygJkG2GDhMfgY2WGzggpNGMrbtcdVBuu9fjD",
  "key18": "hKRwPNpotY3vP6GnKfnF5g9o3Sgehrp2jh3Cg9joGQVZV5x8U11rWmg21FLkVxD5jKtKpUidvvMNfBnSqjYbUub",
  "key19": "kupohXncedszXSyvLbjAt8GWTiFZaD1PC7QixrY34pfqucNeoc4WjLt7V4qa8kSTiwUkpbAWTxCwqjnD3rMLP8A",
  "key20": "296wu4DMUSsF9AU9ZPsRsS2LekX4cQvBprNzmDdmEBduRxA9uSXnqXpU48CsNEuFkLU4VeUg5nMhLH1eD2q37c6b",
  "key21": "gasaZbT27zWhBkbV9Jw92CrnABBcPGtnJhQe1Ak1cjerFQyyZCAx1RMnup5CmiuUsBa9ES4jwMWm2EtKhqP8mD3",
  "key22": "dBuznChNPLr4GKMfBvd9WB3wioFeKhU2Z31Afg3Ro9rg8krTiDBoe7gZArrW31vmdFMt3sH3RszSFjesR6X1YG3",
  "key23": "3Dwqj3LzHepvuuPGLUyE8dnKgAY4Rmyt6fZt3k3cXgfB8e3JsJN5WRtPzjxf4YJiQWuk7Ajf5UdmEAebEGt5NurH",
  "key24": "2FihXxCVpijTJ5DV22HqCrgPs8p9xqEJMaF7k7CP1SdJi5G2oeQozmCaEC3aZYybsok9Q4VbyBiHCM8UtYtjLs74",
  "key25": "A5uZDKUpDH1kqFx1wUz26SD8uh8qKfZj3Srxn7R3GYTkiTqiEbgKUEdEpWziEo6P3iLPR2dXeCEq8ncb1r8xYdZ",
  "key26": "2y7MRRvt3Xwhpkve6RDn7e29qKELjrL51GhwJNbkgG147NjxzbGnrEXXXQ7pAVJtDTJM38Cuim5eP6cQDrVzpwgs",
  "key27": "4i2V2oRkSUmjfmsxjqNCTAMHGS7EiFnGTVP8prrRQJKazAz5dTrBX4P3Dz4kT4HvDfEpzwXanaWmpb2m98evcdAF",
  "key28": "4pkrZVJBqfEcQhdJELgUTwd73ScSMJeZb5ypowrTeWt3yzEM6B8SPBvqcjWqg7e4Qe6g3TuuqZ2ycZUC7WbqPsTY",
  "key29": "yYLvSmKdu7HheTtfNw15mvjKRExvNVcDFN6gk6mqMsWrj9BQ5hW1Qa8Gmxj2ki23tehremtRjY6RwhtrkmqzErx",
  "key30": "2ZwKjFJYSJGTTtTg9kvwx9dhz4euntNFQAHNCo5sEKxNcHyu5p3dkTGvBt6Sgh39W5fmpDo8nHyEzeyMsKBAfLLh",
  "key31": "5Q4C8onZfr2ZtgNCwTcpDpxgddacDZcEFKpZxfuA9YaMQ6k9R4Zq1KPvJTps8TVMJeAEn2ZLpr9KKkpi5TEUb2eg",
  "key32": "3CEFbeYoESXFCTtMwFpYNNuJwkExsTHdz7BztfM1DwUn59DfkEDbeaPrtRU97Gr26ZfU3Cw66TQncSPTU3k6DaN7",
  "key33": "4sV2c3jptN5Fd45mLfbQSnKKQfnpo5bNpszsVrsHc53LEt5x1pLxV6nYDwa3VvExPHJJUigy3Ye31TvRtcEYazJF",
  "key34": "2gByVNhBPwGs7i4m24epMCoK9kt85mij8hnTyBi9xpGcT3YeSZhqgx5f1qrMXLA98NgYdVdgisqdJhWWuC7uJA8z",
  "key35": "38wszdSMTxexkCagt9MFfXixoSKaDXtyMq3WEmVYAQDKz3X7K74Xw8wVQGGY7u2oXt9h93QX6AjbSMv2dT3egp5H",
  "key36": "3P8WyBcmCutJRassjBbKSnTb2tRF77WqNheMAa3veRSgw4w91AYMWGiCi8mUtVgkGmk5iAy6dAFxUcvVxmKuR1ZX",
  "key37": "5g2hkSLJur46pa3DymyrHy7VHRwg2xYkSxt125drZrrSeQiprH9LDbxY7LwmLUbh3xZhnsrkGDHXpinG8Ny7vQtg",
  "key38": "3nrVxPsvLmkqEESYdFvAGNSuJAobV4gdSFEciRbWwS83C5RoNHFz5qQYbhAhHbaT1BgctnsCPTZNTGPKuhoWzntN",
  "key39": "3m8e5WPoakTJ1TLTVhxu9sKBgbwF5X3ktJAy3va63HtsRCo4jaQWgxxbMhmtkub4Q3VC2AomdFrHPV5FxLh1j9Fd",
  "key40": "4Nn2C2gZmeJgJtWoedMA6tWqmH6ptp7Aqa6t9gqr7xGfoFkdwpafh62vccSZz2t5Y8GuBQyZYeErdoo2Dcetzs4f",
  "key41": "3XF8RpVUEnKDxGzrjjCCusZsMbHuz1K6qUFjwe7XtXXxTma8WPG52BmNEMcWtuwzRorGNEerT47HVpt8yeaqZkM6",
  "key42": "2Kr7EzdQvPUqNFtDzd9W2KSUkfNqmxt2ce5zLrEeANGo3rn54U48qnQqdVveU3sLYKgyD6AyYSWEvnajKkpbx6rP",
  "key43": "31johTHFzFjFxGQVCVoWDTH2qBPNJQzjYaSHJ5f5oftVRe4gPvhweZNWRvyD7eQSwgmKuxt6seQgYhssJRNMxLdy",
  "key44": "4AMBYzTs3XFiQksHdSyJ56QicQ3yZpqTiAW9fS1Cfi9k8MbyT2cEYLnk9dLFVhWay8GSnMnmjFbFBsz1zcB3R3ob",
  "key45": "2wycLBMTH4dezvMzkzRZTZqocPfH5gtQtHMTmtgmMAePtK2q3k9iaL3QKKDDgv94M5afkTV1MJWwz6kW5W3jQJy9",
  "key46": "5oaiYMZceGiFJPYxxgrXSg8MnYfyZU7X4RQwng7q95Fvch1S9J8kBtiFahBPUe78SFtbY34c8tbwq1fizmduG555",
  "key47": "5kCLZuGJVRjFELCRKuu7zuR7YRBNonGgSsX3MRMG3F92gL4uvwJL9gC7JA8QfJ9aFG1onyFphf8reNFRa8NycRVN",
  "key48": "xTTzEfi8XgvAy2zte84JiLXcE1zvqDniLmkdnV9QwLRi8hJH4GWDqpQzG2aM281QxxhXbTPWKz79ucT2x7C1ff1",
  "key49": "5pdrtbNDeR9dkviZVYkhgQXH9KD4R1gcUbid4rzZ1nUYfUZgmVMX3ZUHt8C6W4sv4C76P9Zs736idHYB8RewbgUu"
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
