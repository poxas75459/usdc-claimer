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
    "3atmXhWPEJFj5mkHQWrJSWWfs8gqMVSoC2SCXj4TcfEiU2ZLTFxgoeyuucUspMLZiHWk9hDZZK7i7nVUxVcKRjAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wSjnj9XPiJJYxQ4UcXaEHoZTT24risdVtDPTXF3sJ6jkumkEyMkFEJ1bgFvgm2LvwyuGgyAcGA3mtF71JyHrCUc",
  "key1": "2uF8pDRdwvMrh8FmD3ejoYCND9Y5vzVd7z5Bcm9SyN9vKTxtejBzhgjfZ8mBgwUnGhakdqB9WmN3Jc6Lr7rtKpAq",
  "key2": "2fucGqWUxZhmMhYt2uVWcSCEGxWww2bbu8NjTGBV3qTyjTHsZkyUxCKhL2Hu3TB9Q3wXb5aCQE9QywUGcPhmArz4",
  "key3": "66MkeqdLKdFHW1EDUGj82GKMZuH7M9WnLG5TT1AB8rw6DcXE5XijjbaLjZNAPPjX7ZKBhboCKhpcfC2SxRugxssj",
  "key4": "5bktaq8oi5ax7jvm87RteHrGyWSPz8ynCEZXkQbw5yDph9vwxDCHuKwkMURFrnsbnebhgcb9cNicyFkmvGQWQZn7",
  "key5": "2LY5bkv3q4UUH2T7MgzbtdwW2Rpywxzn5yr2jgodMsUEz7BWunFpDMUQYgNFP4CqTdkJxszkKpDR3q74YMcofsDV",
  "key6": "4d8N3TZpSwtMLKdKNJRNuKenQw6KyXGuEs8n9PTMatVxnJVMiwiw3VtFVj1WXLWJxkoU4vJZY1ptq8fVoE511Tht",
  "key7": "yGcEPJreXBJjoVvJFsMNv7XrZvCHR7SnzQAwFpQLnQLtLXDX5LVrqv1kLkYqS5GamC9xPdMPnNgKuEeG2sPXwJD",
  "key8": "3spxtSbG2dtAtBvMQTT3h6LvDkNWsr18m6Uc9HNRLWRh2dvTB3jkF7abnfkp8Y3zMaebgiujMU2eKq6fDsrCYUBX",
  "key9": "4HRFYUJNuW3fgXUpmddDDHzGDbtQTzc4cFy2faFWuwurbw9HyAiWDvpPKZDBDXJteSpaFYNUWigY553chjhf82D9",
  "key10": "2X9Dso8vVde1SNHWZUC9bKeH3DKzkSEDmyCtiymPdgfmNozE5GpGSmuvBW3XTsBzkXD5wJ5hsUMXbPf5PTcet2GF",
  "key11": "3TR12FHeuEorjm46nXiX8TeS4wT8iax6p7iFDadpg39ARRVU1hjBphpgk13Ts4bqrha5qP8Bgukm1KzHN4Hmv7qo",
  "key12": "5d5a2Nohm3LmtYkxEjuBAE66w3nnjnv6yZ6Vyb4hUgwM8NHnkh5C2Uardde4rxTW7EMynC4Fg3HppaD4bpEdFCaE",
  "key13": "3aaswN2ZYY9Vg8EDhzDrR2o9UhFdkHaRJpA7vxNM9a15cSH9kWZTvzgabYKW7cN83HkJHoZy8jQUttr26PzvqkWB",
  "key14": "4SV7WUv677EduzNDHugWctQuAHi6Ryf2TrN4puKCcZ61UANUxsnbNuweVvw6vaENPEU97heLpHG3b4rfUHS5Pcrq",
  "key15": "49XamstjrCYcP69o9nmDVvhHVHiQp7R7Z4fmZ61dG3YGs7eAN4UNLiE5N7jr56jFrmg5p5drnikvgeAVevC5APBk",
  "key16": "2eEce9k5fFB42kRCR4bcvJweZB6TeZUaHa5rcTxYVv3fqoPSGqDzqgvMmYsJMqtrcQQXyVGJZRNDNKN2h1ysnMHz",
  "key17": "4P612Zh6NcKAoW7dG8DYonjp6MsHLnUrQ4m8XjbrVFKcyFx783JfDKa8zonBQjuREJroNrtHxGq22NmpYFidSAG7",
  "key18": "3SxbYdrjzVWGmfG1yr4rLS2QKrhJ2NRZCvCj95f2QVMvkxg6rapKBsPufAiYnwd3cyzbjWZtiyBpwJqTcgNjioyU",
  "key19": "4prp1xXe5Uuvkcw6HCdZs5FwPQnZv4EpYo8cp7CcCRHQJMdZ7jfsSoefUCnoCUpQvCC5LWu7Wy1FLDwgXzUPhE72",
  "key20": "5jNZXCQ1kLfG9meENS9rbXufKTjmCg6nXJi6pLhCAmz57LMGarkaH1jX9MEPzWLEae6XkLVVD59ALwiud1hfKuTD",
  "key21": "GsCZiByPVW9z5RcgZhBBrQiRDsh8e7k9WAAnZGPAX9ARmg44oQEcgykCBop8HtUxJKeE6dALTDHQvPRPXKUiWui",
  "key22": "MS8CiDZb2UwXYVn32oN5eng1KpJsweCh9KyRUd75JyJiu51ZHA7rApMMRyeDrJP4vJf3nhGEgYgmJD6t3SYCbnm",
  "key23": "38UgPnwiumLos7kt4kSGEgXvzMPxUaakXfXCggg6fTUCn5sb6rg84RjThrgWxec2dhZ9saDjuHCw95x25eXQPhuA",
  "key24": "2kgWt6FCqo78Yhm1owNoYnAzCzgNSWCRobLwGUT71tM1dsTcFCqgkFeEf1Aad9meivJVKwDT534iRoPswzrTNrDC",
  "key25": "3FeMpANCY3AcsKQ64PqznwmrezEdcfuNdpBQir6w81eunYT1wFvmYy4WD3iMDsD4taGUkrLb4PgfUQLBRD2LMvVe",
  "key26": "41XqHmUPQwjUsjL5yJotTuktiaeBq4BpXJzfXLp9xkt9yuQGH9HQTDHyC46Gs8iV8HT1VE3EbLUgZwGdTMcAmNJT",
  "key27": "2CPQWCeMEDJMbWQtk9yZhYcT1dRSgV2n73QhRVa1MFeEk2p8yCvoQ5HPJRENxVMQkQtT2nn2yE6hUjkPf7jx1eui",
  "key28": "KaqgJkNMrGDyodL21fAi6HgTBpg7NiCJy7at9LcHSxVyc2EsoMZQ8wj1VUKsSoYKAvLMysgaf8UgfdMjac9kxY7",
  "key29": "5QADadkeHj4f4WTEYHJeNXiLcZNVJoCKCoRxFXShw1YEhGD9gbnSgrMKBVY6irgnhjmMRuPf4Q49XedRvNr7jYV7",
  "key30": "2uXyY6hTiAeLVNfDF391mDqukeT39eHfX2JZBDsrPNH3tBkE2RRz1gRHp7LLCtMNYXz9aqJexrTtjx79EafNewNU",
  "key31": "5mBeU9tcqJdf7LLoBdmBvtiijFhBNaVquUJeQQSQYUmW3GwWiJXNEu5ZXCVSisnqtcP428bm1NW6QdGrEFK12Ywf",
  "key32": "5mpkPsN1gsgaaaRR36FfQXevW2b6tTrTgZsQavEE5Lgiibo9bDpZZkeL3dr212c4q5c9Q3YGVk1iK1vt9QVsMgb5",
  "key33": "35nQsZerzp9v7SQRSZfxpBeVPdPn4kkgfkwtvPvsfBwNym7g7r7PsDVHcHfkZgegGZUe4Gf4HEtmfzHJ2KNUMUAg",
  "key34": "5BnjGfDPr7RFpCJXkBscTHUdVNRpK3BkKagmr2BFZVgwRX5Gbx31StCG8BFMn7Jihee7Gz6Ze9eK7zUGxeNoFfYv",
  "key35": "JTXuTq4NqZFtRFVWq3VEPdQF7uJ9hMqvPP6hyYv8FUBRoRGsSRMtdArdKYBLAx3o9BhEh9qNGXG1Cqw4KwYmDW1",
  "key36": "579D3ge3NoUZ8mpz3MnVpejDiMUMBn5aSakmkiksVQGLtV8shx1anvGzP7nA7i5jVE7LzNuGp636Urw6nU4TehL7",
  "key37": "4Y7t92PBC25kR2iMqr3g6XkMQ7AiGespfAnbjro3vqngh54Y2ZDA7sW9GCpfhTMLbioh8ZrZTKrXfrXZ7UoFTXNi",
  "key38": "5WGsAjb2AGaMECZf7siyrTnNV8pzVeVqphVN6xUVFG3rjEPpSxE7q9g3Jk75uAbLLCMYpFMM4NexgiV9Eumcwh9G"
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
