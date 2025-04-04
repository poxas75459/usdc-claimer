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
    "obDyTm3NxA3fNdEirp1QJ4X1SaVdp8FUZijdfvQHhaMUjqEAinhWoGU99DkKk9qNh4sRwLsusGUBBwdKG9HXdSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvQUKfWcFA2QN43116TE6TZJwvAR932a1snYjeQ7rw8bC5cJb2WM8ZYx3DxM9FvEpXzPXBtfiC5fT33poKhpiwS",
  "key1": "4qF9WXPCH59YLQdWhyeQ5w6oNaei3cJJ2VqHVkTSkQVC4NjkzeDC21XvHzfAvsZS6VUrEfoNCLF9xaXXy7hRhQ1x",
  "key2": "4xSPaeTNohAE16DtUCvZUmN7CJGTK3HM1unqvGsMLVgiPyiJexwzMxMXdX7EoHG8cQzRrE6Uk1kQFZZYuUePsEna",
  "key3": "5fwmvDsq96iHn42pckKEaVxewx2eem1ZXruYzjjk8vP1MFy2MNKEXjFrFsHDmiZsuakddTgMasrtAxtpr8DC2cwE",
  "key4": "2ArdmS13tXMYBuskHd3pAn2nh6KLag56p7anugV3MNfdY2QPq611zwNqpYkZP2f67QDkxKWjKopfMe3SE112oXXj",
  "key5": "3CC4zoHmikNmKFVbqZ9X82vUPqoopgccfiFMM332wnRQxhrVS7QS2nnRLEXwQAVz2a3VBLnpZd5H2eGKFEjSmoVJ",
  "key6": "wnuRtEidGZB9RL1BJjZy1yQ43bDCCs1ECqHykgRHFWbm6R9aqJhSzLZDfGZG3w9NgCpLyNhAw2hTTsFR4wUHgzK",
  "key7": "4ps5sSfyqEXK14cHvAamzDx6U2TfgUHpsJBZa9Qd7hCLuQAxWNY7npsidg6hvpS85QiVedHGMK11s7rjHqewH93Y",
  "key8": "GAoNVMdzsH3xAGmDjxpt591txiZhZ7SATkaggBaWRozi4cDPtJUCG5nAY2imnL7LEXNx77qHAibRSrQdi42LMk4",
  "key9": "1hocfVXi25nSdwUeVYpyXAGoVaY3pUUho5wDHjHS1yeo7JD6WpLvBMEvqnAPvcsDFySXoJXTE7AyvckmUHnQk5F",
  "key10": "4nbLtWtFM71rpwwHWZ5qaTShBMqNpZGYouHwdVFgUci4YjU6qiULqoHnSBJNwcBNnvRJdwxSW9ChkMRcxzfsqPZM",
  "key11": "33PhgGmvkoEd1VsFfvq6g9g8usEED7kgGXyFnTdnhDrsxJ2c2hr6KLBYX91aUqRJiWQxEVpBsMbS4HTkpSosWQA9",
  "key12": "Y3X5wk3UAA8YptJNjiWjiT8Yz2m9gUhjBe6vjqGcxY7EaXvCa4jTw6Mx1bY8Cvw7DJQqZrCVENH2ptX4Np4j3tr",
  "key13": "551X4am3VmMCsaYTTWYxjqnuiADgkU99mz9tCkQothTn4a8MvP7gFe46WoGQNLNNCpyHMgo4dTqyQXpKbCFMCwKM",
  "key14": "QHnW3a6rTL63oFc542yEsruy8JDMFTwD4fpZco2U5R1dVN4Lf35ohaCn6HwKNyCDZzoGjCh1CVWrt9QCMjM2jC9",
  "key15": "op3SXpqmyLF8FBLEu7AmN2UvKWkg4prEMhpoAabm7KzVwhzL7EVz6a3eq4XysLVhiZcCdfYyc8yihfUBTX27icy",
  "key16": "8Qqx8rw2rUBaK4aansYt4k9cxLF37bBWxKyAB1Ng4xNPUYgTtAboVr5YNAU3Mf4XTTB7kjNLZAu5ZGbcG9bKTiw",
  "key17": "4zJ51v6yaQKb5VD9VQAPAUdKGbQeypwdPaCWLWW2rLs22BdHH93HHPL2Ya5JTcpEpPTaJgVWPhEriVj5w8tRrP2j",
  "key18": "2bSwQG7aNCymgTC3Wv2Coa5AMAq7gjw8k31o17rUhAgGxceDMVFM3SiWEHodovQcukmgTiPmvsqh1pBotv699RxG",
  "key19": "7dNUNcw6r8ER3289uEVgupPSVpXdfEADPUZ55trMqniFEGXTmStpTRtXyrSMp8t4TB9rS7ecYEtSGRjGowNdxbQ",
  "key20": "2FDWPq7SWrBSYPiH8A54iFddXrsL6JEDxAqGwjMwbZcyashwQZ5CaezGaB6hD4ZW1GS175GS9b6CjPDZSjZAR4bp",
  "key21": "sLitQPVgxudTk6eWzQ7ivtfDFiow1E4KiborNv2G2NmkmiofJJEcLJtR5HpiCnj9eNtzm8QjN4uDVeeaAp7a8Tn",
  "key22": "4F28HgbJ6Cj15F5Gjug8Df9JzcuTPJqVSxbA2vVoAbnpThhY76FWKrQ3AvBJaAN9sZbb1vSbdWXpRHfAQ3V43SmE",
  "key23": "PqeSy7oieLpUnveNtGhKbW7GGHdJwTg6xwxg81JnJAhPsQcomjPuu7DzKgbCHkCjsS9FuiqNprKeuF5FqQdPEUL",
  "key24": "4UUNDiN6cDw73KiQEVU2vtCsUdDCzA1gFetQsNjBg5pzRDE98V72KkpCMriTpuNMvU3wbNMcSuHKBszvoSmnbdp2",
  "key25": "2nFxWgpKcpnoJ61mA4ySxCdWjfzzMTioFuUSeouDxQdqkVdbJnq4kwNDM9rKS2XMP9a1LgYWJWYZPBa1XKfJ3U9p",
  "key26": "91QtYJAbrPRZY6gEvHwZQBJYAjcmCzeSenx7jMAeWSph9d6KZk8DK1afqVu5fwrZ1FKoxx9yL5pbwDPjNyH1Ma9",
  "key27": "3pVtHHz9QDR5RsoU1xA3Aadmw2krm8oUx6WNXRgzhwYirtW4ZRnYwHGu79kM7EwiFLx8WW5y4FG15hmAiTJMd41Q",
  "key28": "5zDXVZYSbDbaqRBtVRic5AZfqxUyBNmkwSvNCRS1VaLXdM8C3BHhzBoR9mwU5jTi5mcpXZGcjdQJirYUDe4o1pJ6",
  "key29": "64cnE3pvaFfiJtZrcihSLvP2sAHaZg6KLo7E6rmzTKeMDLTRThbr5AUsztGrE5SzRKAy6UMWdBsuHDvj1sfX9rYA",
  "key30": "33nMe6tMYkuBRCnNsendbj1jzSDzH2L1oyTHWTdtxUT72GwWo9RwfbikmTk7b3tWE5V1RbxiNyuroWKJrF1Dd4vi",
  "key31": "64QZj1PquchJhG9d4bgL6quP1PjwQUobj3SPhtNv4oJ3XdT8KtMtXj9Dyuy3ANrbgPgm6shXsf8AukSYBAi8gbG8",
  "key32": "4gcLdaRpkmUvvP8qSPYDc4vGdn4nykEcVg7gDeeVFTP8ZgFLexaMz6NqJggcUAMof2k4dGN3bBA4WTeWKD7N2DXx",
  "key33": "mwMb4gXaBpFH3UB6rArVSvsEuHQxMc7Hmpf2Ek4KXEFViMuftrwbyQ4cTYujH5tU37HyWVxPxa2ctYXHuNtZocz",
  "key34": "44RcHZRZYUBTPgcs6uqtkUEntG8MjgdB2dodSriT2n4ZoqjqCHUz8VgEpNwqQHg5BF1Xt3MM5qVozjGQvKKf8dMf",
  "key35": "ShHX2etuXcz9ctsKZ7u8fNcx7f6DMe8yMXZAn4tLESvWovE1eU43rh6rwnHam3pWZ3b4j9s3Q6H1J7xNuXMKaK2",
  "key36": "4WphHBddRYpHAEfNHMW331XMJrPVTZGkLc64ALoVH4Fg58VNR9mxwPjqbZGW51TwEYMKSWR2XAknQgCdf3AoenE1",
  "key37": "2gMuA2oXaGZRgZBMaSRTiwdHuZEAV6AoCktZJhY716Kex6h6zPcdcyvD1T91DDouhjZzyHEopdjTe141jEiy3zJr",
  "key38": "mTGoA9w2e3xeNxVoLBTwTVRd4V6MuvW1jBbBborunby4AEzZjsuw37jrTKBj6tfwomu4hmNqzKgQGST1gySAjUm",
  "key39": "aJrAMG9K7mz1LaFANQx8Sqa1DaLfDPUNUsnzXS9tQjLsPJgZ9fbE7FjcT2NnuudaqpkVAqbWFzuHvqWn5MuBasD",
  "key40": "3pmAZWUgCHPuGTBP85U2zpBwfgWTrUSuqUupV6Lw6199cgic1MCtdvsCuVjARRrBC2k38YWDry8LoVNj4obK751G",
  "key41": "49U1GVGPUq5aYWaLCp1QT6VU8wC1zhGP9UvmUeeRgHAf5Eo4W7G7fSmTKzUDNojFxpwriSjqAVDnrnScypyiTWhv",
  "key42": "eEYjRhiCY7vXyAM84FEeh75HSvyA1c2xWWVxazXNRYpX76zj7Vz654aJi9nH73uckAr6d5eZefr3m8UF29Sit9Y",
  "key43": "3ZxisCoZf2FBf5AnZxgnGxsQFEu3RYVFWfb9AUiPMkKAkmRbstDN8wdtTfx2B5pyZjokFCAvMqTD695ZYqKvaLQg",
  "key44": "4UKrP2hxxZM8cohakdym1iEDgY8GEnCGj63r7HFhJyq9E3JTomWWj2g4afNtusmQYpjnnvRMpHGDtGsyXBVQq7LE",
  "key45": "6676muULm8KSHoPztJtYcdYyGTGw3pgQzwSjuH1y7DysLkG1TX58un8JoigS9XDUyjp8CoRcdQSpv5BpeuTjGskX",
  "key46": "2jZ85CNCkGvUJQ3Ar2aq3E2HU2CCPuWmtKgfnjwLs2KqKAMbZaSmeCoNvBPCs6shmpL3aTmXJgM8YAViiQQUBz2f",
  "key47": "2mnfbRyJpybHLF85JQESo1a5CfLfsKpyPevKBZi3hRtSjM5AxgqfKoVTok6P51APUGXwvh4LPt8wy4pJWgtqLPst",
  "key48": "4FG1e8uF33haaityPzhCF3Jzrn7GqT4WjygV68EjV6DMgVfDwd6kyuqLdaAhJ7HLeSTR9sRpCsqJ2J1sY2RrbWcs"
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
