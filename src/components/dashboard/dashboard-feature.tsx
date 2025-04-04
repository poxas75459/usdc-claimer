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
    "2MKYGP2fkt3aLgGVJH6Zb3YTTvbwfnNGrNhaZxE8U2Xjx8yaUcLiskNpWWNxDfvd2dFag6nTykyErv3Zgvxx9nBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57fFRg4Lt3HXdm5YeVLDBJYPG2YBoMFB6ywt1rM1ceKX1Vc31uE6yfejJkhxugC4paYMpxGBnMRQcXaBfkgaTeaU",
  "key1": "3XX6RqXmWZa5WUfTkMiipxprZJ1BTKGh1AgfiLHYqSibiHeThUjpa2wFBPwyVv11RAq9EwJphzBfnMs6o4CYmnjt",
  "key2": "65tXz7MZLruN3jKq7BA9wXyKtNrQDBYiG9NGJrpNZpisBHm9nYs9iosvKa3XwH8NwgTLCZCKL2aZhFo9X6r9yvs7",
  "key3": "2A1fCNAxtfySkZHgLjEauXz5MGPyHMkcigtfafbvg7YR6zce8tfm3LkXnPnVQYJP92dwEbqi3sWuQkT2dJCDVSEF",
  "key4": "4NjC97LUqUzrsRDgcT1FXVayecmq2Lbzg96kePuwf5aHTgr7h9whY2dFE47mZZNvoapU1p7PurPqPaDkw5Xu8nGR",
  "key5": "3fwoVy4bZfNaQ9pn7E43exhMU9doAPTH6vCB6171KdF48aRYpvJBk2ULGvFNf4fb2io6BXNzi1R8W5Uq8kfZXPei",
  "key6": "V5VqcCRnfgip9W9UqmAUUX3Tp8wtRRVTxVrp1kKTFKR4fgyk4pVtVHbfXruNyadnYwFkFahptBYqs8sAnNKPbcz",
  "key7": "4dz3fN2cCjVfXo1E4YecahZWLs3EJA7doUvuPKF4GXJAdGv4eksMRLonRg4xMYTh6pMwAxZ5qKsYUfBEz2cFyo9j",
  "key8": "3ziNWafAFeruaYEYD7dvJnxQFhyREv3FFFYe4gcZye9UNFxD5Dt4wGpGV8C2AbcBTQfj4H6koRMKWex1QYbaUonH",
  "key9": "4toMtqkGVtk4yRDyLPLEcD2ekvtZ9paRXkxh8QEEty3ZRT9VuHQhZbuyBnrvMcCXvQChrGL6bCCTCZpnh5z7xW6T",
  "key10": "5YByPsENEhE1XHbbTUvU8qguC5VjcwftsWF7gkdtK1VwHRTecs1tSH2ScSZnWrzkFacpDoDUbKiEt2jWtqeKvP28",
  "key11": "4YaZC2nTfong6WxNeU1cdbRQ4PWW3QPGEaguGzKTzsZjzypZ5aWinKTiM7CAsVaGy46Z9L8vHCRQ6HvDBEQ1jrEn",
  "key12": "4cvcoPGVk87aFgM7DFTtMoqD4faAfBkmoTS924cZemzuVvZ8gHXf7R5A1cinVi5HkTReAfzyz7g972futb2sCyUU",
  "key13": "7xJwZxQQzhTzGueSY7XkGuKkhtPsN1qMM8njS2MWMwBHCT7xP6zrgimdUsUwbHq8cSPtXpBJbZkpB4RcqoKPqYo",
  "key14": "4YCcfsFJHeY5KapQndeg68TG6K2y5r8EDZXS8pPP8Gqjd3iggzR954Ju5NviUEd9LpjWTDfE3DfA4KFrurePVZeC",
  "key15": "4tSWMVmnrcPGiaRP7f1rcDVBwtAeyU9xiVgeKcGtx8ndLTYTJwiitPQsXY8eExrXCPawYTXkF8K5P34DkxrkxjgA",
  "key16": "38rDdDSvUqtQDSxKyyFfdG46q1NPBNTbM2VFZSCj3fzyGYPGuozo9kANyiqjF8GCHaWXzzSektAsBhoM2ZLbEPem",
  "key17": "2HsiGHGisf8wj4owWQ5BzoJydifeRwvGxsw3qNSmnMG4UmmdaWehze5xErTgvjB85KdtuJNiAmd1cFpEV3JUC5BX",
  "key18": "3NWuYLToPrmWLjjJGds8iKtRPwyiMwJ8mudTP3ZAwQtyWVvoVHEci1PshdHvnqp9vwFamcrZSkRXoZXPNgA83r2i",
  "key19": "53FvrU6MeQBGmyuDVf7aYmCHQRNJw86CeC3b3Cv2hKSHTuWsrApAc4HbHmNRERWsenZMQ9EAkVvbawZGkZdREuMT",
  "key20": "4nKox2SjoEZw5kDXMf6Gs7PQM856hRb1JyLEFYJDMCFaVMtY4duNgQjLaaMtAmNvsx31chKhxfQbafaQ6zP9Z8sE",
  "key21": "5JYedA5B2FSKwGVna6FgcDt7nUYqPZ2LXdr2ZSHBBGctmDKptTZT9Cp13xdiXuSixq6mqYTC7CruDNXRdj9TScJr",
  "key22": "3LzS3VRkMSqqz6PRiCNQNh7yhZE5grAts3hkZp2firSZBxKbBcT6ZQJXvm1NeCBqhbtbHdQL7rA7n7huwTLStyyC",
  "key23": "YG2i9Zw5GLvMP5jWA6kP5Z2R4q5fTqu8gPyZR7xNkZs6PtdrnomxyciYULZKHpYMGiuTe18wCmAjNX1ZpyeRJht",
  "key24": "2zaXJ2eYSCvpV9k5DWSovba9hXvg3aZD9RaDEiRrQBrUGaPtaUcEHZiarEMBjKq5vPNZnS4WHXrdZqkYtar3jMe5",
  "key25": "41ArvaVzMqrJSN8eE21X872zyhtKFSEwVKo3VLqjw2ZixXYJc3NygqVWVyfKhVcHWFiA3LNaaYA7Zz6UTAp3Dqyc",
  "key26": "65t1ifUPBWZ8BjTfY3kVfGwXnv3zVuMj6iismHahNgTtnjctv5kmwKmAXCDfUvmeQHXtuQq4ZbjwyZfVvefeqCrM",
  "key27": "3wE4Lai6ignEVgjcj1GdEZUBF23VTvA2waRpjNAaHWXoG5BK1tBZvwDW19vBqZ3Em2euFJtBqMPqEh7uwV7A8kJD",
  "key28": "5fqUBG8S4NrshnikcopXwd3kR5zHxrpHdR3vWkCbu6UP5XqHZNDsuZ1hpcTgWHmgsWhf9Z1eGSDkvzVJvgthzdTf",
  "key29": "SdKnJKDWDGPQCK87v9tCdjqpJQ1QvZqc3QTMpM3sgspxERJykM5tQd5GCQc1PhNzKWk85w53zoQmXKfF6BStfUV",
  "key30": "2hbWsUx3WW7GA6a5gvJUF76moSrxxoG2ZmSsFZRFpqB5gur22DqLxgALpN19vnefXPWmZc99CbwHk8ps8kL5GuuE",
  "key31": "5N5oG85EDUAN9tF8RQk2TwoZJBSz9hrPsPw4TVSrL29tYTgU7zuMdhtKhJUKpJ9MEuhqvarmx7QbcLz5txjA1iP8",
  "key32": "5m243KideNj73hP7rZJh9VnhMTkQMpFryHYNqnMGoPaQtTbFCBtsYiajYReiV2uo59hwHqrbRqUJ2RuL142HgdZg",
  "key33": "2akr4sPDH2sf2HcCxs5pz92YMT11AQvGcYKU4Lu9mrrNkztKqaioqyE1WjhnS27oGQZgNfD8SPPaV1UwCMHEKTMW",
  "key34": "2R3fjmHu8SeCD3vrsJQohZBJHA9gg2REFeACzNesDzzz7DdYHyU5ebnnjnudBEVXYXcoS2YJuLWr827Mx9nt5w2",
  "key35": "4T7TvPgS9xhgtGrfMVhkXwm47hjXkDzsHnZqBdiv3RVmLKsoZgmQjdcqEQoKWCKf1KmLGvQqHhUmx4zmgUDkksBT",
  "key36": "3KWJWRihk2wRWHj2riMvxT1NJovCcQaLd3ovmEZyMwXoVZhFtS3kFtiHp1PJAjUMz54KU5eX1B3hFAVjcBfBrzjL",
  "key37": "3bQs3Hm8HUizuiXppUcmcJ7LAzdmsgGEhLfqq1Azw3FuExsST9y7vjeBZGzAxF26CyVEo3SrEuFX1TUWniV7mbLr",
  "key38": "7ey6YnYiqY4UpSpGZzRkyWWpJjqMCnPnkFhfv1vCkHfmwDFNh5CF26DCHWSitepNhAvNeugU3sHwsjxtgwNviFq",
  "key39": "5hn7vC4M7JRKbeua2BZaVsoLBzzdfZaJxsZehSfndFfoD5aAYLiVrZQRFFEESEmpTQAphB5Wpd152VUUk8zRJu45",
  "key40": "5Ck3PMPHBdp5ckTLbubroeMkqEfaQzBFnGT1jXxsF8vZknqHHsDis991shb5yQ18cgY7Jashrm4Jn1G8zWtBr2X3",
  "key41": "3b6V2RML4aHMvoa5N5Un1AsrFXj83ujpkJ8MU4KrtrTm7jrZ1eumASYiDwqiv6YXUxEW1Gwp12Ed1BuBZsffFb8W",
  "key42": "BWbERBHjxZvK8BSvXQtMnJrN7SRrUQrnP88evexsg5VyXHohFob9GE4rofp4wu1qJe4PV6FedRyCCqRbPTcX2FJ"
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
