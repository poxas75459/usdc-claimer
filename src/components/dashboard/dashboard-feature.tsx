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
    "2suy4KpANZG5smhXobSCFY2AnXeGBFMiPLDYgriYdsnWwooAcw3XRSNoFqmqM88bWAK2tj9vci4joRn12hAJ9mD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYaVymJq5CMjdrgKnyp61gYouXbPCae5eY6UhAGjRwZZtZh2gWpYFkVHb83BUq8zxFyw9mexT8CRt5YRSLni6jc",
  "key1": "56NRZ6UXXTnypHfpjikXve3xQyGgaEtR42oL6xqAD4qu23eU4P2igTzwwpwwViSn9D4DQoY5MfFEfrXu9FyF1viZ",
  "key2": "4LbcAiqk5eimTp8NZwUkxwbH1jYovQmX5HfrFTTcbYzhWAXXWafsUMarhbtYgEJs51DwTnnNxZvq1GGNgXb5f1Tu",
  "key3": "5bbaL2nVJfLDTnsMLGe43Sx4KoWkmaGuqmqPmmz6zpPg4uCfk6q3JzZXYcrR4oGKbwgiFySFghFjt5KJoEsDMj1Q",
  "key4": "3p62EcdGSBMPcRYkn9cEbCew133Dz38VwbL4PbT6ch6RHrVtqDe3zms2k2arXFB431i2kZCmUbZ23WeaeKdhMVhT",
  "key5": "3rukUTPR5vevAXewTjmWMa2agD16zADfyr6HzsPvi8wpdRVF8MByAJy5JUtriCLUGGHc7ith2fNUcGWWqjHQaYZN",
  "key6": "2jhTzeW51D29UrooKot2f7NyUx3HGWdAyyJ3htoUktuH55nLwMcBJFgaUc8Axpx5Qgq1hQs6LgYs2z9jQaaLue4X",
  "key7": "3gN45Q8P6s8e3qvniVWFSySwkxMCeDp1fvgT3yHoJHi1zPPrAvSCxpPZHyFVpHbgFmgqZQeUqJ8daxVQurA6MRu5",
  "key8": "4CZVwVK2f2Yj66Qv6pfDA5eUMLU841VdHDXUoqWSbPtkpFkLDRH4Q5RBRxzdHU9CHxbB94Jrr5ivXx7twoP44SBK",
  "key9": "3KPEYii2btvZrQFNK4Hauy5FjWUq9YVyRMwszeUgJKRLy2rF94AmVJZQHGodnRuHy5giWqQ36Lta8hTQYxHWk7ni",
  "key10": "5XXwMFH9V4A3bGFER297T6ZqzmTnR166CdkCQ4nRn8DAVeXxXiY7759Wm7Xzz8v8amBd3Esvf5qVqotUNUYT4a7w",
  "key11": "5sVJ2QGTari6d3wVMkDpmyXTjYuB47m5sFZCtbC7CNJfPGVmuxVet15CgHEqrMMy7uQdEdJNN12EGxix6CDAwX6t",
  "key12": "4UK9ed2Mc6vrZP1rTqvK8RUV3SAdpAWCVjdPKMzF2euUSdvsgbHwLhavak1FREYEZT89gtTxdnDuz69oMwH2SdVu",
  "key13": "gQZdeFtDAS1gY16Yi7ptdcNMSMxzwWBMB7R44h6izMVcb2vRLUtntGHsoF8ckYaDk5oHFCb113KkmhwNc9LzkJB",
  "key14": "5LEcetTA1fRKfZxvDsenRbD5Bh9HnBhtnJpJoSukyotmmyZXovfBdfepr4miDzAUxC9vD9WEmEXJh5Pd4GfqgDNm",
  "key15": "2i3FnwMhVftY2BR2Y4n8rVcuirUqkiKubhimCBQyxTWShP27os58onQhUxS14s7nX49os8Y1UmLdasi8Fyyq7yBY",
  "key16": "SbzqvkvLM8fuLdsX9x9TVLAM8fDBLGdKyJkwFX7JG4fyD9imYhPsXPmdbzgGaHrpgV7jwiYqoZcw2bnJ2ngX5tM",
  "key17": "4C62q5yaPesHC9oMYEA941TZBk3c9ZV5bWMKmyRsvxGmhKyxGBTUQJACqiTwm1SZoc8fuQdvnhQ1EkQVfTggcUh7",
  "key18": "522xyq5YAMRx1FDDdefCBxCje3rXfTyddwH4ADG3obZycQRbVfzdu8ARshGv59Rdz1i8FPuQR4hA2nmqLAWsg5Yu",
  "key19": "2FY4bfSPbRtYha2Y11WoYD1gBuh9jo7ikCNWLv5osY9c8gAWRwBkVLuUUfsnVeSG5qpxeVF36QoDpHa39QB8yL3K",
  "key20": "kbswfhD6TA5fwJhx7MgNgybhbcvviEdinorMdiGqWDp1Jyz4Co1xaPgaBhSXZXdiqxXq2aRY7CxUJZH7V17HW2o",
  "key21": "4pG9AhRKLN9oqE1Z5BKSdGRgMUFQPw7AfQhmq1DBjWz2kCtKb4TdNtZwtSgRuqUMbqRgXyTW4vnjdbDczJmmWJ3Y",
  "key22": "5Hsn971bkgxmGhV9TbxEAHkrmveR4ixdP6owSfpiEAmkUoGAjXP2432uJuUaEcJaUtTmWhx9cRzGCUozUBDmgXqJ",
  "key23": "3zCKjBHXRDSSiKqTgGdH3iDXAAMLtMjdz5y2Xah7xU9wJxaFRzifKroTBpQiMDKvqeJWjf1xACAJsHESRAfJtF9h",
  "key24": "4HJEdnVpjiYZ2iVXY7fyBFe1CFqsvA9upCJsBYaZQSttzeoUGZqGwBuK78Ybfr7VE63KYMdSRXXSYVUM6fnkKDwH",
  "key25": "4fECP2bNktg3z3SMKTBNMtKKwwVj3BFpeAMM3TP51NP8Pq5sa7sfFwRU8SwaHTCWzLxYtsahjxffmDJphS4A96Lh",
  "key26": "3s3REVta8gdLNxLAxT4idwrPafduZaWe67goQzBGa6xMiJAxy7s7rrZbmVjYrT4EhfVECUz9a3iXxNNwu4TjrZrr",
  "key27": "21qGky2KZQrfwCD2xMPdpo6nSqNeWFPCxmsBfX9tbZ93VbecKyCpn3zJeX1SoXhHCHKXyZkvHUuk2iQCgd6ZiE2H",
  "key28": "aVffUQqNEmY1D6Y5KeUw8a93ec4bxuJgHtjAs7WfgEK3grFHjjLZbWTKMMg3GwK59HDJGxCw52yLtdnHDqUYAr7",
  "key29": "4Z8j4o56CmmK9MT3f2hZLDRtCLuvpQaUdMm1dyPfbk3WR9oBkCg8J7cVuGLsSVSF3DqRAEurAigD6bm5gdQ9DN91"
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
