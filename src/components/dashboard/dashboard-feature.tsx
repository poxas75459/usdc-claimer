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
    "DuCCUL91tGkGthE35oYVA4NjnX3L799uTgpH3QHQCNggXXxWfsvK1HpBmH5uUfYRHPEkxUSC6NzFq6xV3uHUiz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAL74zHi6Nn1CLVmmFdxjqQiXP9HgH64194D18zuhsGLFrhaJcHt8a8rBbdXPdKtX6kKHD7vX9s3RRhvWVcN2xf",
  "key1": "5RNyA7SL35PmyLWAiJGumhN2AEEA7BcwmDUh2fowr46P8eQ3R8t9LkTBfhHcuTzmTtBWWTYFGUkwrvUMEufXPy5s",
  "key2": "2f7ncP1Hu9LASoXxTHA1Y1KW77Pycb5wHnK9WBSqAsTBdqFrRp2GceuyLmhHzaAxWmH6YcqXWYq6nEwpYJ481Mzk",
  "key3": "3SBNHgiyRCZevswkvgtbDLCtGehEJbFgJtmULGFUTeye1kNkBFeG8ujetrZZC5qsiSZ6obqTcPV1f4yo7ws6ggsu",
  "key4": "5qG5QyLaaCpib5EtSDe7GkPdwDaXSHE7KY3HrnPvx4T45W55t3b6RarbGrhaDrtNEqp8XMtQA95smt5jMqdDTfiB",
  "key5": "wXLRSBMJin8eNE1oVoujWsiZy3f1Asc7ExVptQ9ZqV4G6iLn3KnhYFBTgkUvhTDu8oLPKaQ1XTVRevSEinVa1EZ",
  "key6": "23AvtcMdck3ntYui6aMVY7Wg5LqhM8FhRy7m4p4pgQRDttCTgmD2TKuxTWLQhYvgFhovWecnMRiZrN2bCCLERjXV",
  "key7": "2XdoXyzAK8E2p5N1qgEgeZNQFrRD83Cq9bSkMnLcpTNSDNtV5rD4CX9BfkSq4rioviFbQntuTyUab2fSqmebCWQe",
  "key8": "3tTQCFTuWiDxc9Lf6CfNusKpTFz4fvcEUoPWyQ67UnPXdvp9s5NW4a84Ss14biKV4X5vwksiRys6VkaK2on1kDEi",
  "key9": "3pXsPkqsVzcrjagea75tnmppC4XM6AiyVnHaKdncMZGwNCJbAJB8fk2rtHy7yryHwXzNVwSgLrdkhTEYCgkKqu9V",
  "key10": "47B3JwaPokLf74Bpab5S5TxKYwiCicd39Nwx2UAaMjYk3F7coLj4tpTu2BirpqW4JZR3nXC6YGZnJnXDqJQnaEUn",
  "key11": "3nGjRYgUkZghSwpHgEew3hiHw6aTR2HqrxtXqp8jyvbaWuPfzAg72t7Gsz2yLJVWcFjieYaogHqbNghCkHNyzePQ",
  "key12": "r9SStq1d7NZ27e2Yzapax1iTBmLYV4kALWmryWVXnvUkvWssvH84mcGyxuUebDHdhcQkCHRoKF7VsBCD1UH3Ajo",
  "key13": "2jg3nLXSxKMcRWf3xg8BTH2xudovgwwooL8cZNDRkdVKB3NKsf1TThjyMaw7Y5buVuT9HLHvAEWnp8uiKampJTfJ",
  "key14": "VMuvfQn66mbpzSz4c6K3Hg81DoRAh1iePH4Lha4gibJCdxSufr3izUdybDxMpBgfRDK4p2F7JtvtsX4zqsq9MGq",
  "key15": "4TPbXrSxiEuWTFFALKWV6x7Dn6pdMiYWJDAVSYo6mt4XJDLvjxKg98hfkAEMXC9KzF1yJYakfNh48knTbjq4mXHP",
  "key16": "5CzfY6wgF4gsWqW6nRKE177D71gw9pDnqRmEHTpRETf5Fe6Bq7M5hAFNASQxSJjwHVeK2QYoFS3GeGrWMWTdjcjo",
  "key17": "4u5HUcgotVLY3GuRwGQy47uYWMomUugjnphRSK5WVbrKuyUKiKEnCvCqfKug1ZcGYzEDbEvuoWxrsQsMbbzfY4Lg",
  "key18": "s79yDjk6aPaTLjekVpDXpEmsZTXYNpd9U9WkVuDUY3YmhdU1YweQwdHKNajmtMfSNY5pYqN98eJ6jHHi3kHoNPC",
  "key19": "5FT3ULfj4bUeedCoCPGUfgJqYpuzxitqHLix9h2RFJdgV9kvBYztyAHzxzZd873Rse6Dz1RTPkg9ipWgxbm1dGih",
  "key20": "eYXMhC4xmXFVULLNJbHpopRrUi1TtEahBL3MXpKJkLEKrjmmy4QHELTdtG1h6wocHdp9mWjx1Z17JZnMZpiN9Tk",
  "key21": "2ymA8opm3dUBEHuk3ksUUBrr9QG1vJDFfHTD42jv4iNsNqu7mvfvYjuMq3N57A3rV9g8MWum3LtxLbgaVbQPffDJ",
  "key22": "46B3Zh7fnSNCG3YKj2LcXUu1L6gTVf4urPb2Lg7fwkXXfn5H1HmaToGo8rnx2wgBpTocKbsYznBJkUavjpNf2Tau",
  "key23": "35aGdvNGoKERVsjK7Rfc8UmLbBCs2mTPhKS6991z38j1i7LHo2XV7HgifrqiGDpNMpTdFteq7vxLNTs2ALEXYqBL",
  "key24": "2GrDjHb29JVNo7UnvgAh9A7QhjpthE5Ed35o4oFzbJ8LTn63W9AjDqtYuWU5Kbi7q95ZGt6wH3A8SU3eXvoPcSyo",
  "key25": "fTH2w32sATmw8b8YcVaNLAvFhjpo9kiHwmyFrVgAzY3eGUMFDtAbUhESaiRomh7Mgt9khXv1WSeev1wBEHFFAc5",
  "key26": "29qFp2wbwuDFWdjMRTngpS3K1ekaeGspmTuM6RNtVgdicnGFx8r4g7bQtaJQLptNL91q6cg88JCwFxhDMmGH94xn",
  "key27": "3rPnaPhXkqk572Pm4DLnqhFWFt4xCekhbAN7UL2gCpqhpX1suGj3GTevW9G3qV62487Ano7Fuh1wu4oybz31tDrY",
  "key28": "23Md3SmLtEh6gsSXsSpv7wVSVkRWa8gpchjdUiFFrZhr2EJhijznRuJpsVZeNvK64Rs5p96kN6px6iG7vEBax3jJ",
  "key29": "4JhSWX6gHGWhZhUcUKD6d3J5AnvpcWGf9CK6HbRZq2M1HWJ6jXdiuzx2SM6ykj2E3vnrz65hinDFMCycVNorPVKy",
  "key30": "5RwqL8Lwrga6wyQzfvuFwFNAk6vFA9bi8n8pUaYdbsNx9Kb9HBNGh7ZAP6fWAjNjK7fEzghmfJwAZJ3Kpzoxac6S",
  "key31": "3BEvjBRRehgd8uxWaYovNywSnQqvHpybuD9hgk4vVf8AwChpjzv4suHRmSsJsufHGsJBnaEWNhVtdA8ibhmwTe2v",
  "key32": "4ShkH8ANTcTccnhidatYdJ3BGDcWuwiJWjDLyYAc4pWbzgx2oJUb6ZwJDr1NjmG9ouB2CLPhHvP8UFuAoivuJQcq",
  "key33": "4A3iNihT9vVJVbrSKJQTN86wqCXxzcG1QKRFyyXroAHPg1kCfhiubx98TGmnvHHWBg5K7oxnryUNiKaJ52ubd7Nn",
  "key34": "4FjJfDcDP3jk6xhFcCW9jz77RvJf8Y46oy9Df4kTKnqsKJHFoUXA9qhTFj83Qg96k1zAzAbW3kG1hQjkdDMSCqJu",
  "key35": "2Z9PsggbCw2y6Sx2caCVAer2E6U5Hb2WYWA1BtWXHkXKajE5p2sYWzZv1zi5jXgNaNHwJSgLmGo15pQxrcGfG9SL",
  "key36": "4T3CJF4zakDzCkpWWsspHBQSpRCxCRwKaeC9CmKaX2X2NVKGaEcWMK2Fn5hY7e3gq2T8hi7HsWyomtWWx2q3xwpH",
  "key37": "3m34pMSui56nRvrv4FnSMnA1j1tZLfSgGaAtsc8EaLyGyeUivY5xkGMUJFKWJ4WjrYHZrkZa8Mk8z54kNZ2Qhavg",
  "key38": "44Te19p1QcmXoFrrPmENW8Cp2fELPEacfFX53vHgjyd29Q1SgdSMt8Kjk1gyBZtNyP4Hz6yMpemT8ATpKhopg6Ss",
  "key39": "3n36zfb4KTEo9joUFdVNjtjzrGzdccPRGEn43dFsAbjYs3Ay1wyR5zdv5bw5i3AX1akFGkfg6TAVCGv93wKEkMcP",
  "key40": "26qXKJXhabW1MY11934U2RA14EFSPTdmyyxWzKvi7sgC9o3etTHpgy9BUgHK7pKiYe3V3R8DwTwEeDGBjQgyhgh3",
  "key41": "4BubeReHsgeRapNuWE2A913u5YFiXJkWeens4EHqENmZeyVEsz36sjMY9pP8yxKFVj7zLgZGwtDWeM3eeV4NjCoj"
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
