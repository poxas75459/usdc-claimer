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
    "3idcybxSjW3bk5szkEfPyPiShPfm7hATt7HTzQpmT6Kg648Ai4HWj6qgzUdJCXT8ruMWVuBuWt4L7Fsrr84TWmTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxs9dQB15jJ6idDg9q8XHCMvuswp8LBWMWS6PG1rt7bg6NuFrE675YJ5uS8YNUETvFfz4qSGMok1dxv8EqydTB",
  "key1": "2sgkXCjw59CRUTizvbFZ4mSPFqf4b1W5sQBMU8Zv4khk5Z2QHDFxMK1yQSuLPDht19ctSqEPyMWxRQc2dyBKc33p",
  "key2": "5Qvku2MAbdB2KneUNKRKbvAkS6gVYENdQtUerunSW2jmFkA1LVLvcdRVKDjKyvyQbFgpzWuhaUiEx94L6R3EfSLJ",
  "key3": "3KJ9LdT8D7Wz6EA4vReUGimWAjcY3ZXFtmQy4PKSU6ZojpWPL7b5ZWpXE7HGX9ShxvqYhhKrJhJuJshqRhXHZX2a",
  "key4": "qy4yQnFQNK1hiR2XhFfgv7hxCntaVCVP33tJt9eD59StWHE4Sbj6QiQyAGqwobU5N29LHEvqAejAvB4wku4NcC2",
  "key5": "4MoABp36PckRsvrrvwaANq44N6jUpeksxQwVVA8ZskSy5EucJqdtVobKyjTejRVeecTwGEW1iEsaH7dWyeBYAzSj",
  "key6": "2fB9JEaSiVu5JDpr2y1h5hAR6JsGzTiryV89qXwcbzYrj3t2GtCcC1cgM6gV45zHCmt8viEG3CpjLvoF9cyvwSHg",
  "key7": "4HgqFuu5zF396VfAYJjJjf9kdtVUXywDDY9hdXzsZanvF77fH8ke2zQzPPzLX1m7kD8xMTcJAndHHKhZdhirGA4M",
  "key8": "2Y3797akr5J4uiYtAWckzx8cA5ipYp3p6J4cwccK7vqYzUWGkWrA2JZ5LwagfBaQvh4ED9s4WoZvaNHz2gktay3F",
  "key9": "uVmTEYAaaKH58pdrCRT8jdqSQhXToyQAfwg7r5oziXk6Pbyuj6dt3Q9TNeQzr47UAp73b7DwPvFiixV4H2ZGxXT",
  "key10": "2381ZYWkvJ3fJwmxtGs1NH33XVnSqPhi7tRtyTtH8UTT8vypZ1EGFzTLFJGc8DWQrN8nsdm2ooVU2cK29FdZaXNp",
  "key11": "56G3tgcFw4ZsqZiZSfABsmHmbxdZrv5xc6PPKCj2av8AEFXT1qnKT8WQQSy5kRVSVeaEvSVTLGQVuV3S7qCmT6rE",
  "key12": "Zojrp1drTPwUioKGCJU3iK3uJHKnygbu1TohuWGDRtVLfSUPpkrU6DLuSkcGUpvjmmLdhqWceTTjgEMKbb2Uagr",
  "key13": "3UkDSVg3hVQKisckGVQCxidgeSr6wygy5aXBEogY2wKGmuxaucYjijaNSa3wTzEajcxzkrdAYHBuotBNBuAubcbG",
  "key14": "zJ3BocfiLhTEu8SX54w9LUTKspRCvrZJNetV2CFXKuam1NBVihpFTS64K6ERz42amzjfCiPjZ18Rn3Xg5kGgUsd",
  "key15": "4dDk9hSRdc2n6FssAzvVJxanHUyLAcHjWAbWQY3CmriEMZ9Jy86gksoBeP99Tghc3NGxdN6FgbmD7d5q5XpviLeV",
  "key16": "2tALPqHdkfMGrfKWCeNe5iEyCw1RD5P3emn7hbkCCVqRTAtGxomEgBVaN17ymTV1eogEMF6Zivob4ipJyxqukuv9",
  "key17": "2ESsTJ5n85ydU64F6Hh9cfoUmxiiCFj1TVQ2tZBW8mgA1f7VSm7aDsLi4H3QDXR2EkfpVHNKr8ou1aE5fucEaGFV",
  "key18": "4vY28cJUWMWUqmeUGzYFLaRR7MzBu61ZVLMJQEJMBRyuft1EKvezDfyxzkccTn3cpc9BuyPQHyoAsgDtk1PtGz2S",
  "key19": "FKeyKnWzQAN3YRdCkJCM1UnKLMwQxkz3fJqeab8vzoLPERCDuumRSJNtC4xkMmGd7a7e2StaGv5GYM1vyR1N1bo",
  "key20": "2kainzw2aQhiiKcNpssh4HiEEagZczmgBcWZf1SdY6rm6mYNG8UvA2cPccWeGSRXEoE3vDnpixxijJJChPYBQKzf",
  "key21": "3PRVmvcZYtLEp9KuiYmFt2eVVCPC3uFcxtr7TZtdsTCx4TRwBsFG56XZZuuPDpjRLLASZRQAJKP3Si3ki2qpF8NL",
  "key22": "2BhQkUbFs4LwUM2zjXmizNKVDc9nhcJR3GdrNfzoc3nu6p3pUH7B36PpzRRD6f1bX3L2uF2hUx7BmXhzp7WXsxcA",
  "key23": "4QUFQ6oiYaZLGhTSf5chkaKSgJmzWFituF37JPykN5FRSrRafDyRXdo4Lo33eAKvmy6ssYCgSvEZzuiSwVnNmiHw",
  "key24": "5cUT81ZtQKiUsFpSLW9hFqz6eq7VrYuyJa6nyprnP3oQixbX37mJrNJajbxu2GkdSXPjZtgnF2VgRSzDMDvexip1",
  "key25": "3N5Zivvugp2pDZgXvop2Yo4LZ7bu13xZKLt7h8cPFpwd1S23Hgmvij5NJybu69dMLDr3L6fA42W1esXRBnGwfzP6",
  "key26": "2PZBFSpMRwDN2xX5fJUS2KzUGhLdbfe2pt3KLG147kXwv3yvoCmFyrriaezbpKJ3bQiMXAfyCb3X4RtTNGS6RbnE",
  "key27": "4bSZLxSgcABv8qJy4oiNx7Vny2YcqMEWQ4qRHvtN163Adu9wA9cf8R4h1z2vMn5nrmH5zEzCciNcGyuxVt8ktwqu",
  "key28": "4188k2VFhfxkBvTY6on8AbKT1mfxfQUM4wzAEchHR2x5V71JoAn54VrFMAHTKVQs4dEi1zQPXgx9iPGdKZ3wfJKg",
  "key29": "38BSCmkKgG3K2E5HWBt2R9RnxWysw2TCxR3nB1eAYwA7pfridEWyLahp8attfLuDEbvsiH2nP1LVbQTRYaYkckT7",
  "key30": "m2aRfHpfikBGU3fmeybhAV4QDxPoFEDY3toXEtAHtrRdewQzC9YbGcxForqBAcs3WNHq3tyqJyZgm3P8eAbtUkk",
  "key31": "36t6b48nVRjVCNXX2GX1rCd59qVBB2rViPQfz2Zo61oPMSWJvbZn1cKcXakzcha6XNEpoaTaowMsvTzGHYoA1Fmt",
  "key32": "YVRTKd5oWKxwU19hN6VejtiKYiJ21JJhyUnSHCQ2NhLy3DPA2KJx8yZCorWQmG7qYVHWZhrWeMJZuDWRktv9vCy",
  "key33": "4Tp31fBZztjDMis8k3VJBFTcom9Hhv3EYc4ND5AWYNCwEmyWSuXShfdEFxBxa9m5phUcZFSakdLUs9CJVsgsv31i",
  "key34": "5WJVuqxx65pdbR9wHdhVqiqzRwB5v3tiaxAD426xrbDih9ZrTbAxGYqXJe7B5TLx3bnausXvj3M8aiZTt64BeiLy",
  "key35": "5YXQBx4eLXzB8cbEzZ4XedGpfD2dknBmzkbzPZQisJVbzegahLzKXWrgQChhnC3Nh7VXrKcSkg3Wn7PmeTsarvzy",
  "key36": "3uWnPcfMfXMNTcYZV4zJRyxqEbaqwaeAH4d3epbLh6PwQMobBdnbUGkhvjLMFPWkyfGq6QwwMjKrbesodTtKUMWc",
  "key37": "59piRFJ96mZB6XgJ2fCFkBs9fBGwj159DoTWYdBz7AVVTbE763RktDnfeCtkGUmVBM8EWGeUPnejeAN39RCnbrqH",
  "key38": "5myQmwB4BHACkRkT4zang3mZ2nmgLa8B5JWCyt8j2tW2WozUocvRkvkpJ6vYjbynLYBXWhdfttzxafFECZXDAg3o",
  "key39": "YSBhU9D2kj91b3YSiqiA6swoYumozggGzvTAA543JJbuLD8uJ7RbnDZEM8f4Tn1qaqvQ27vRggiUoAWV8DyPYcf",
  "key40": "2N8weQULnVfwBrNbZSe3WXgXxZN7QzVogEDEtJ6VETBALKwDr9Z7CwSq6TEa5jehNZFVuGyFYRd4hrnbWXs4A54S",
  "key41": "5Nk9nZqs3366ZirHUKh2gD1Sc48gcQLShTBJq3DChJcGywQkf7qocfBG4YffW3JsXbZdouKyj5NKGKWDKQJtgbHf",
  "key42": "3rWSksPvaC82NhBF13CWKzY41srz6s6zTebdH5oGcU8T2CoQQBJdhHm4xRsfd2PHsbq9qpK8XMuBirUa4xiyzLvr",
  "key43": "4yxwggZ8CK68svQjHzRt3BUmHWyTLsZ1sf33QAe7dF7yLRbBf2XXdw9LVyVR6SNR4GySp3uSxkfJtZFaHAdSj26R",
  "key44": "5SuVvGYLEo6eQ2Rk37y5qgQSFDZHUkyj189bsAVPg57BXhRKmjwTzSt9MUSQ8RFjeEcSKzX2tSKr6m58gtNuZmFP",
  "key45": "cfwpBWPLDE9MreVDRbnx2znYD7a3sWx3LyybHxpWtJV27S7x4z4vqwZ9LYRfzmcnkwBaYaCwAu2kzvK41p9qEUa",
  "key46": "5BMrhTpSkARQQ9LdRQTNUmMDNSkQFdo5BW96Mir3U6Cz1T21JVZszu3ivDNKmUfDVsykzhSKvvSiy5ugUf6D2KNQ"
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
