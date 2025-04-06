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
    "3rPHEmZYZzavfMcMQcTSTzkSZGQNrhfH6hmftYNHVC5QyxxLP1zpirGx5rDGsvpfTz8dYrpoGMrkgqg783KGPqX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DtZFp5ri1HKTUMj2VYVU6kwx3Dn8He3zopQQJqezCyo8m75k1J776YQMSKUtkhWAEEGitS6u21pZERL9Yb23K34",
  "key1": "66NNoWBBn1CDGvrZGGxsaJSX3vvru3P3nGUqmhy7X7i6CXrkDyn4GDun3cv85PJLs3T65Qu5fTaubUKL1iFBuhAD",
  "key2": "2WnDiRRtehBhSFyrjTyJPAS6sTfzz9xr99vaCzceunogxW2D5QV63s2HFAHyhjAQqKiZgPf7qRZphPSthztMtWfL",
  "key3": "39sCebqrpH2t3bggrkjYEKKw9cpxUbF5WqSR4uRqQiyMVkmadC1vZrAkka6FZPHUk5wnVxsAERve3rbkwSZv1Rqy",
  "key4": "2FJ7twRk3bigcSNzA1RjXdXmgCC85foQYkxqRQZhSAJWc4cB21nqd5u6Xm5yvGUpxtNFPL6k36z6Ua4BqqXursuM",
  "key5": "yB2Jj46R2PVHxvRUq9sr47pw1yxUCrkxzvEMo7BPZVFKomx9yGV1fTmfFPt2Wt3zab7SRRueyeNX1HJ1chHcUYy",
  "key6": "5wg5UoMNuJ7413N2PR1R7DEdXUhNZxGcMTto7C2zu69UqpaZNEmcz2ufDWooFjo7d9rFUrhguBU9LS99bAWK3j5r",
  "key7": "2vM12ixAM9a7XubMCrn7unvMMd1MfFjN4tmZdrHGag3GuHCb5T7iXcD9fRrLjxjKT5QcMWE81sDJifX9aGSgY2ov",
  "key8": "2YoNefbSzP8rVQL9iyYU9v3xGAtvoYhPH3FEjBgjPn7w3p1kJLRpT8v3RTLJ5oTMbBZqEr2U6fHW7oZR7ECXJAFK",
  "key9": "kp5JeU47tQDDUe1kdwwziZQGZEcaRhRYpthm1yYALhBzkKYwXfRGpw3GyMe2qXz2k3fAzmiHktqVij8tNE5B3DH",
  "key10": "22ToMQJMknm7viLEY9wcCi1gTcic7G4NvaHZLpbaH45piox14DHJaEh6AKkMsLFbqRAfYGqmQoVvk2KCm7wTBUvk",
  "key11": "64kSBepcz5s74USrR6pc7bunHxf9zgHECcPq3NuzXPz14siB3ySqJXJroa2AuhHzyvGvYRt5U9bD6k5Yp68UkenV",
  "key12": "2S76qZN6AUEvdVcbpgmRD7G6ns8ex8HP245TSsZihmtSdZ2MUkNVbb81BiUF5mMYGNao1c9VPtXMiZMbjsHqWw16",
  "key13": "4sjuwZYxhytADBLWTLGr4PdjJWVWSejyJHG5Npm5tQLiwftAKYx5tC2pdR8nrW8nLGmkprTqSs8tzh8DrmH1Ah1H",
  "key14": "3Ay1y8JKfSuPwnJsQStrVv6tdQNC2rwvKJtj5dZWViL1JGr45ipDySq5RFVcFigPxy6Sjrrarfn77mcPgKe2JASH",
  "key15": "384x1Dq7MjX5c9RHYtLNevLoBqmbSH8eF9CCuCoHvghdnWjDFiV9yaNSX3yXXxXbap99kgG6Y1PJhqoeke17wKx5",
  "key16": "2cX6WgDcETWGHeN7hELitqJZbhtrCCdzXVLaMMShwtfcZgrAzKFrjetTTMN28PQK8e8yUhm8p2VaVtqRv39guR2h",
  "key17": "5gegAM4T8u7ez9jEfo2RsMEj1mqCuCkXYTd7qChZNKMqCvJr3jzytVUsHpGf1CgZL8LbhTDF6HvB6RJKz3W9e71M",
  "key18": "3vkvUq2eafN9tcjGZ5TW1K2sZGyxn2TTGf9X55FGTRsRsF1JLxQfzSLvfEszBnHoPakGx7k8om4Qea68gSEzrYtM",
  "key19": "54a4DtFzwDkF9gsN8JgdLYP4w8UgaSvumjC5sQmEwjfvoHjZXoLYgAEgYchqL21kiBRWrwJaFFbHaGcSeT9CtVfo",
  "key20": "2FyG5g6voiG2gWXXd25qm3zcoW1TGyjUSVJYxSM9HRZcH9gsMWjH3Yerh1qwiZZpX6dHxXEmo6bgn8uFLD8b2Q57",
  "key21": "7QidVKe4DsEyQu8ajuxHKT1Kx9hxyNEJdqT7rGioyqb4atkEspQVZCSTRjCzrrSLwfNhN8vozK2GG9DZh5Uj8kM",
  "key22": "56dJ4Te6dKoF5DRKQTjD6L6hoJnjQhomguA6LSP1ceETnk72E1xyHa8Mm9ZCYHBg2U3FQZ4VFwvaDU4ZLHAvZvs",
  "key23": "47XF2fuDt3K9yxoNizbcsajTfCYfhGpUE5cEcTQgn47cASuvSzf4DCqm8r7EnNw3w5oYgqQwerxN5xPCf4L8ckCU",
  "key24": "5XtofmgzBGxymDKYRcdomNbQUxsjVFTLfUJx6r7pYwJff3iKohufe3UfTV6ekpxmmJE1DBGY6dDsy1Qn4pePMnYT",
  "key25": "53kri2iCqBLugzH3dvKhcuyB1mcGP3tHYutSeLtncf4oMEAktFJ6cjb7PmmmWoe19dGgS3meYoVgExSv6kvoT4Yg",
  "key26": "2W671x4LECmzgHjK6nTPrwwwxJZVUqa4VVatLw8uDYHHgDhaTobu2PsZVuUExYqVbxyktLvbQNUKZVfKQXJq4ADT",
  "key27": "UZz9Au7dioTd8C8cXs9egVgrbmnTVEd532YnVwbK7wkWRFbCoNaUmAmJGoBrHu4eykni3PETu7NoEFTDvd95ajt",
  "key28": "5grzxPpX3RS7ui1mSh8ugaWiUyDtTneZGAhY8yaEFyxfBg6LKjU6WpDaoYofQvXgwHyxfZVURbeZKxc4cskLBHup",
  "key29": "wJpN3d3WxhX7Pd8y1nTbgHiMmDTnh5yM7peh5tuRby2bcqVfHPX6JtvaXHGMafjSqAWCFBL7LPEFHSPPV4JRfSr",
  "key30": "52uTxjrrq7NE67mhR5b8g8H9tecjDpQtY3tNjUCV1DB8y2geRtpRMZo4QY86VrCnAywiFq8zfGXuJuHpgY3w5r5h",
  "key31": "4zm2Dea9ydznQnSdfJmRs8UAjW8MUsodqSs7vFKjHwtgHP67rDsi3M9VsYEKX2dDEH9QREs77SKDAdefrufQBUNR",
  "key32": "2ypknnfk9c3Z8hg3TBoB45299zR13oFEi9J5eYWbkiy3ZVb4fgaUitiDNXbANMbL8w8gvN9vHhdY1BFTkTHzRZM2",
  "key33": "3ABYC2ebJJM1nMJTqrVhhit7vnoBFAT8UaiSy9anehzXV5oY4gpsFGcbJLZH55JHoiuLb3Z8bY3pmAmg4tpLcMi5",
  "key34": "2PDxTkDXCcFh8cQGTBvCVcQemy1PbEKR6ARrrt6m6Qq89x96B9PQt7xmcbahwY8T1GMtPjH7d4XKyJzPEQYJDhgF",
  "key35": "4NxXbD9gsqqtZ4h19v3ap7gUBg61uQ5kvvsLDu32UqVcqZqBYPiHU2JGfxngx8RJfS7MnKnC5jUg6GecvguSdoUs",
  "key36": "4JxiuJNJaRrY9SYKSpxKCcC6nXD2KYCaD85eXNBRLpzxFTQ6STXrZTD9gxJhHn3Z6r4AwrGrMhodsxTYniguMmGX",
  "key37": "3buuAUGSPiD9NaqUjwoNnfweoALHSLSZaHBWgW6C9SwkrgtgKPvgTFARePNCAYkgbM1EuXDLTgfFXEf2s8GeCHL6",
  "key38": "3p2wUe8Z5CKqMD51zCuvSEWQEReX8fnjmMXekM7ppLsa28DoPgn9axiyBZ99L3xYqBnm6Lk49Pmw61kjsoK7HoKB",
  "key39": "5MTBZ2DV3uKZTQerZt7VXy8kXu87PNf8C8GhTP2ri2MncL1i17hdcZomgUPa9kvXQiE6wAxZ9f8r6KJx9e8ivjm1",
  "key40": "3aET2xKoJx5S7CNWPjkvUKZDrBG3LceaVpRjvp6MUjrTtghzhKbT6hNLdpscudPbfkzLtxdjLcCCb9acWRi6mFrD",
  "key41": "3ruv8GMgJ6qqEQTZxPwEfPke7Bjvr8agZtMVd893zDr7UoHRMZXkgKkBLFBecDrT8gjzxWtPSBCyUhnVjqEtJfFo",
  "key42": "ffgiA2kKJzQW9Po6d6jPQtVwTxZ8Mk5Kh4fcMi8JyBjB4oDihK4V8TtM2C2ffDdoEsS5zunjY4rozyQ8QczKWQa",
  "key43": "xeEiP9eK9PMFeYuvbg93D9Uxt2UrafMt75QQEmk3UVcPdd13qmxurRbC1QVnttfJ8NtL1HgSiPjxcu7co9nEPfS",
  "key44": "3XQcVYUSxCjNEgTCNGgr4tnFS7w7cnMk8LJvBHDMwcfAcjXqsTSL4Ybo5SPN5BZV2mRroWm19waDwBBrdeXfGksm",
  "key45": "4pzET3URw2r3QhS2RqNP5bc45VWqMgsb42HoxNFiiQYBJFNq3wq9d2zdQhEMfpSB4KjyWkCqLtD5nsLZwXjw2m5y",
  "key46": "Gpua4CyNVc1LTYNX1jG341aUcQSa3jPcpobBn2wyZpUtbFtv9hR6YAkDwBDM2ADGRmhYvbDddbux6jcBTJeThZm",
  "key47": "2TriqkyQoZLFCxz6G8x69dsNTEtNZ4QJcAQ1LnC5RiuTAW3MNUGxawxobddQTwzzedxj5UwXTAFVRT9kApXSswYH",
  "key48": "3hBfvCch6s4GL4ShoRKtbWn3a2VY4Adq1tUBPEEhoJQX5j7LAt3Bt7RLypExfEJrLDHLmJZWMpi5dxL3D1g89F8J"
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
