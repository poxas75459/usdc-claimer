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
    "97JNvtVSFgSrdefGxusQgStK4R3nCAEvq4cT853oGbVZQDdQs8c3JzH6Kf8Fj7yfKuHyWnbwCrr5mMa2H1qTVwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iCfkhtFft9FwJavMnZMbkUYV2nW4UwgqzgvQC7MpeF7VYKUxiTFP2mL66wYnUb6bAAYMaT47Ui8F4kHfqxkWpj5",
  "key1": "2dGxsFukkuXpdaikoupcbeu97DmQNNNGhvpajpgB7v9EgBgMqpbSTFZGBTqtP4jqWZfjwFAurjAnEdGbeHJizwC7",
  "key2": "2JZBbyYSHrc2Fh6hWF1rzfrQJzUWotSseXhchUpxyg9PzWX4Jc7zjxCZXCvGhq3oJotDXUHfofzPo3cMYCWqNYWk",
  "key3": "4zxxkwSUUX9qxruLt5GgkDoc142YgEFKPnTrDsw9Fk2GhsF6twuaT7bmnm1nkdPEUM6w7vcBXBk9LxWHDWam7crp",
  "key4": "4SbsAagL1pDLW5Bmzfoccs3SjiCC9uP5JfG1BKjkRe4RQFNXoizCpjsTGstqyXMbpBR9LLiQsuUWmo6tY7N13s7c",
  "key5": "3gdMJQAZAwjnMjvkZaKNZHCtZqoGk95R9iz6HWtRXvwnDbxKD8RUx3tq1an2k3xAWtXMG7yhKY7ERLLw6Dgw6eqf",
  "key6": "21mFWEf9sdvcyJp56CgbDVTsXmPrMKoCCbQzeha5WtWioDqttTrqbpWqvhSBpmMPvMMNfWE4L3wfNZt8whtmTKpF",
  "key7": "5pyHWEFccR99iqhwNidPcNnwJZUkLyxV7mWoJA4tWfPJ9uoMQDNhXkY3J6m4cM5HDv5W9A6j31w3rgvrgcyKjaEz",
  "key8": "2A6CUH6kTcZoXQWCDR8Aw8tqjQuKs351m2NL5v1kMc12HeRVYrUYqkEyAnTsZ53dHkcTpP77FtEVhAQiWiC8ZHPW",
  "key9": "4yGGetdkudDAMECffupYhKBPZ2B9gau5QnvbhzaYDgbvvgyR6LkD52sixkM1cwyLfi2a7PunuYji62THvv4ChKHp",
  "key10": "65uxqa7Qka19XiHmJecCasvLKcaMZNj6CkFFWn5GXMmr1QMyGYbnhBgqUuWWni3bA7QDTQ4gr7reYq2Rg1f2PvcW",
  "key11": "3ftERX1i7rELgVQLM8iD8oqmiRVxxSCkRBGhdvcvE6KvSTRkiGSvwJKZcDRXzQzviAWm2YRAuM9aw8V13LkEkoo",
  "key12": "3wqQKHNLURPoQ3RfGDbRa4SGeiuqVjpesW8MM8TNWz4PSrtTH9wjP9eb3cG8FnsJ1gsbx1RP8nMV5ddVXqk1qe1k",
  "key13": "3PCK3r8sYQ8RhBNWfKjzEjpEaXjvcCNFxypYvVhHrbdoj8r3fQ8Mq8BYATCFZqHfyd2K8XLGi4Jp6F5Hif28q9h6",
  "key14": "4BAQFpq1w5P6dJEeHaiVyfRtPYNwgCEPSueUfZ6CpA1GpDpZH4WmCtmbTJm3Vr5qQr6J8cx5ySYREc5caXWuyJ5m",
  "key15": "3ZXSH1ohckPPeacZDsXVKrWnXfQ4MwdGGFayYCiuruaoNokhqgdqNP6c3BH3paGSvvhmgRHY5TZQkefV3A1ZTE1n",
  "key16": "4QoKiMddK3LtN6moPpEi2mv2Lid6nUoM9YrCamUeYcfpCufvauYBRUQ4BSgXSP2ZW2eN5F9Ac56V7NgyH6SYkoWL",
  "key17": "2hX1pPdsjmzxzsG62Nf37S7zTYJpvQ2XCrAJfeiuM5R7ZBACXEkLc2NLHLj2x4Pz92gGXQ4ddgyujZ7yE29pFfP3",
  "key18": "5sqBPM5cgAk4qazcCmdYdrEZTCy6k2Gs2pzv9tVNqSzMRwGQbgdeyWQzf4TnNaDhZzoWwd5Qexur7sRPMSX1Na9r",
  "key19": "2hDYHFTWudjNjywJ3Z8RmUU5SUaEgC5HL5dgWWsgu8w5ZTTax4ZEWsSvA8gs2fyeWkS6Ra4qsN2rwbTjDha2G6KZ",
  "key20": "5k7nfhx6BxpbbUk3PkLkKjrXHv8vw21hUWqjUmynge84CEXbTCBRhs5cRNixqUKJZyZcXPbZWnzsjLi5VZJ4dY8K",
  "key21": "54WfZmf8yTdSG3WtE9e6fXpkFBqCtT1EbfLfBiv6seJbfChCVrLXpCHFg3NX1ZNbfjhNsVAEfzyRDYVmfV1Vacxk",
  "key22": "5T2meshiDjYNBBhTQK2Xs76hTHyCeTcXp7zsGQxT1ycBUcP5qbTKx7pXrcNm7AuzbrdxRUicNfAw7yyrCWAaSbco",
  "key23": "3fLmgfQHNRMtjJ3imqAbj1s6U7YuQDwTBPAANLooGLKxt2rtZL9e4LPPGqrs1V9xbs7hnqQrJvogdqozF9HKTDfE",
  "key24": "44QgnGHVGwroJDyAjizaK2Xndc3wva9SUjt6QwZ7zyr1uLNCTmiuqwxX8skSwfEyqRLN6CCWqNJuwBe8AhnQmQwH",
  "key25": "w3RdujLZb92rzgKHvpLnWo8qguT9JZAmZEV7hiUcL3mME2N2QLj5cWvpndkn94xYWgfhLMkV3tTFLxbybdAhGHS",
  "key26": "3FkpKdrpNrw3GzpRLEX31NKZKVr5q8AxrzThWBMqm6vERZmvNLjc1vk4Di5szMRoc2kN1WRCxFUDsF1DdSFbBckb",
  "key27": "4K2bircQbNoTv5jiarsCtmEG7u4g5v6Gg6uFys7zv1VmHJKhM4qwZ9rp6KXNcreh7D68dDoZinSwWPEaTgGvaBDD",
  "key28": "8wSuhKSSr4nKKNPPTeXgPqtViSrc9hGneKfSzbCRzvApm67r9MZucB95WcNCh5eddAg3qc8eqRPNRCeviD6MLpS",
  "key29": "2PEivJgggAVYrXTtPP24xEPnH3gjm744bZjTVLhfs1cuc3ArVQ1J2q37vjgRjB6w5Q1CHrHaMtu8PY7nQujUvXCT",
  "key30": "24SVSwXvG3KFtFDy8fMzrL25NTn4xiugoJXHPnjfV32MS4jSFpyyA3E3agwaFMkkdWGTF6GG3WYcHRgBmtsDsN8Y",
  "key31": "NtRNrjvTBsddJvtdnQNgCi7uhHgQJMhRN82pES1keKiSQpRdFkZU8AACAiB6ciKEGQcJouzfrbo32vDej5DdVH2",
  "key32": "537eD96rfAdDozzj8GFPunxeqjRnzZWzPBRjjKdvTusoxKeu5ZzKfTKJXz8uHCeDYD9RXmEQCrJQDWHiBuE7afSY",
  "key33": "4jgFDuho78rt2dMNmHfSLYTwQw3dRZZ8QqLgeCF8nMq7qiZsYPooGdw2yYYG5d2jsaC83ZkdbJh2xkAUJYJDA99p",
  "key34": "2RTajWaAAYNVT4yaetGTP7vjVUcZqHo4fCFvS7awucPiCeCSZMiL6mvPJDkhJbTshFEGiybwpzhsByjTaxAsU8ni",
  "key35": "dW2VkH3kb4QkeUxBsrdxsPZprwmZ89FqPWX7SfhzhyRbcrw28VLxTTa9BzjtJLeHMAfpcupEpNCmwdunBVmLURC",
  "key36": "4KnWqZmcSBfCanpERc3gZFLrhphPn8UsBZxqRF7UKhT2F98nhuEjDtrTgpdFpTR32Lv7UafGrQRJKDuDSawh8aiq",
  "key37": "3fHNtHzphXDUcgeVmzxmC4qoP1tAM1mRGKb2e4QKasKEJN2DjZw5YL7W5KAdBejY7e5sCQKeHTgFNdpjmVXxRoS6",
  "key38": "2vabKBeCFDDjQ5kVNemK3uZBQVirpNqqHT3HT42vPGiojym6BUuMEjen7RXviGJKDKvHHA9PAUGCemTHRcsAgE3m",
  "key39": "5dWqGziZiueEp92i45hikYC97M9Lnapp6Gus9YpRgRhBT5PQcJ5yd6kpfx8wukT5risXHHTqGXVUoa58tQZjPLLg",
  "key40": "MBEW2jSTCHMd6MMjoQiAdJUDK7RUL81JRzbkoSDHyb1nCjHeg3Xv281ZQBvQG39ZohVH4ATy5UrcNqrj19z76pM",
  "key41": "2cSyZuQSesLSPUSnH7rrtoq5WCHrSW4WzBoo884xHrTDeVMi6hWYT38roF1AHD7EV2fkDnSwBT4ec3BBHSYQP6Nv",
  "key42": "5tYubrJkBJAa98BEyAyTU2xxJHQJKFaoJUGG4gdLVLQp1hSXQpN7sBYfeTsJqVitev6kw5EzWx69vTyJgSNoAbf7",
  "key43": "FEUNvqBNANZtF7fix9En4Xf3AFYFcSKEhzdvReXeFBFoADrjWeVMUxoPdsM5sJ3FG1jZPzauUDvcGJg9r51HLNW"
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
