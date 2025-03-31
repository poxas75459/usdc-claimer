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
    "5HaR4d5q2dGUL2qvuCtVnymS4W55UhMNvS9aEvwuMY5DmHXq5bvVkwSmHV4Q68qv8RARQZrezUyepmPGkuStgD56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmVfZ9oKJUBF6x9bUeUFNnoYBqg4PUmFpFgJumzL1bgdbBjjVoHg4dG3UKHzELzqDg2JmaAQzS2PWZesVhoTvfW",
  "key1": "qrYSrEf8CypcTmCTD6Zz2663jXWXotEwmNdVqsbRRjQBkcySWyD82yizCFKgNp2Dj9XCVVKR5tCQvfNwspKXAec",
  "key2": "4ajgWML4CiszmdiCnNyo9XykhKhFx7Ncieq7AiApPLNuvq9D45t2wEYYSfdWT4aLLbodHwiyyCuN74r2QUZ6UKj8",
  "key3": "3MU2T45qhwPeiw1gRr79mR2ZF9rtWoUfKYi2JkX1FvEfFfNFCLDPedFP41kzNraPCj6zS9UnqTcp2J9vMnr9X3Qx",
  "key4": "58hvPtnvVrELvcwgZhFvcMzHe8qgz8RZnHaQz9p4cx3TUm3AsfYxgnhuyd3waC7W4U9Db4kBbXU9n5t4DfZptxHq",
  "key5": "2kYdjqbP82NaFxogH54mfKuvhxAaM4WXh9gppq3cwHxb7XsguVDdzyUP3niCgnbTVnhu8vVu2qQ8cWTkq9iUpqpE",
  "key6": "47SyySgPG3U8pVV2nYeeEKezLa5VW5qk6Q6hp8e5Wve5jSFXRVuNq6KaW7Qj112Jve47B9iAsgXNqSNbudtMcGcq",
  "key7": "41USM3eLoWGcRX4dpygAwFxYrnuvRFKUh6FnqannrYVrTFccZFbsNYNiQNC8y77dmVhtSxPhJy3Bn1uSDXsRq4f5",
  "key8": "48FRTVxC7mjPVuuv8Uz7mSdgpxRQ8A9AJRiaWkzFZdswkJ94ELQLH3tSMcNoNGpyXP8wXTobsJriQzQgwwo8ebc1",
  "key9": "2AR4DCW7k44mogJRGbW2PXY39gxtkfaS6MZczM7bWD3w31XM5m3vNCbCf3PKwVFEAsNujy2L8QkVUdmN1hjjmUj3",
  "key10": "4dxDMyuHfzGBe8TfCHR6Pf997nFz5UnW92nTfPb5w68aCXu2srJM5wkSC8uE31JwgR1coFmpGHfGBddGPSWq1BPW",
  "key11": "32eiknR2nsaimTLRv4oeNk8sVg5YyhbgbMCSp6xvqSLdQ1NwExPGQ6ijKL79tfXnLJhe6unLtzs4S4gouyWLENfv",
  "key12": "46jwPZbtZed1eMCgwFJ7o3zeF34QUVAzfEX36hu41g7WWyDB49uR4apEajZecBL894s1EahY5CzMEg1UkHkcSxWN",
  "key13": "3PXTUUcGaAmh5HPexWj9F1TzNAmmLprpzhKCVVLVM7ULTroV4sUr3QWaNstzmScxoVTtSXS9Zjs8xpPbj9Fgcw5x",
  "key14": "4NS6JPwSnNB2s6PtUin5qnji5WqoR4792xXaRU73doj7uFRJLrDednqgjNMsz8ehQZjgE372tj8EKNEAhf8PHuhs",
  "key15": "2F3ykVRywbVEgyqCPb46WkAouXkHHTsaLibu8J7SvzZUH8saP3JTxeXfLqSYPLz85VxTg2yJbcVwNFcL2Uzmu2wb",
  "key16": "5NMq18a6DUU4iZbMCxMdsYDCRDN2MN6GkDMzKQnNLaFyKfttCgdkXsCtTGRC4Yoi9JHjrLkrRaxd1iEoUK2X1pbX",
  "key17": "3e8D3KJinaXy6CRgrMg1dB4PTfiDqc15czzS2b7uamkp6ckMDZqhez1QUGth3RFfN48uvQwiCt7EjxfTve8r8R4",
  "key18": "Ai92yeUgtkk2M335nDfXyLnjnxHni9hYRz573Q7EnAqMeAr3W9hZzCZJyqJSgfsbnwwDEqBrT1zXjqFYHsoi1eE",
  "key19": "4kXGtsTDMU17UvmME1XgM5tmVC6UF5YpYGnxL2C25iypS1q3fLtqgSe8K23uFCWJeUhoBbyseoQmytGJGsqE1rgc",
  "key20": "3uSorLKu3MutU8ofC9FPFNugEdR3jFG1auhiFg1dn6vpTyhkrke1gpfDNuEwQb5CbJg3xBFJW1m1aAyAuZqvpKvc",
  "key21": "5XgxWsE7LSewQSMrzRnJqRj7tKDUAgyG94gpUuJbq6cvrM476rPYBmw1KtL8cLBZdbkheQsxPGURUYM33wCcbTjM",
  "key22": "2Fp3Bpu33H7eDW2zL7nLYNvC5ZaZf3a1gDmg48SJ2ozRz7mgVsuhrMvmn2fj3gs3g8hp5LCMcWn2iCNP22GA7w7N",
  "key23": "63Rrz3txbQRxaSHHT9ZqhsuyFUZZDftNT7b9JH2YB2HP4FTf1gsm8scrtoeFyBYdkGA18DXjxmMLKzeEqQLftgs3",
  "key24": "4zYobLTJsvV44L6qNrFRmVrDWJmahvw7FvMJUtdUf5RaVReGVGjQhVQkaQmCc8DLQ11NhePfj5aMdyiT8XhNCovt",
  "key25": "5GJL71rhaR2kiMMvR2Taaoyfyb3grfNJ6aBDk7TBivQHFEZ7ZwqHKEN7mbHMTKrdQdQzArEgFdYCXnqHVBkwjKG7",
  "key26": "3XS7eRrfABzJ8rGGBuJZ8usgFex4HAAhXYs1zSCjYx3aFPRbMn2tfowuzWMSjPTrqkaNTRaPqsRdfYK9yYoUKrZL",
  "key27": "2MvAoAUNX6NyzB2yuG7i3ZS19YhSZ1RxiAwQb6w4NEDnYsUGuSpGaewcJ9h9jjoWV4psm1Fo14Vu8ZY62kKYFFGL",
  "key28": "5K4NqiHUunzpCqSdJKswNCe61zX7RtJE8W7pAC3xcPtNxD4ttkYFZB411VXjn9Chbs4vuxKW5oMYBNCjfwwih1PM",
  "key29": "5kL1NXxW5SVn5Zvzikhwv816ZPkCBEJjYEXeqyLDoFqoBscaREcHUeFXTwCsnx7ZFHVX4MVPBeQwK8wkpfvz8jTD",
  "key30": "4VuY7fNwj8LcBS9VkgffBgPhEQ1bVrVz4TSLpEj6NLe9t5riwkpNdoGvt8c1MEggsUueZsdcaxYx6CsNCVtQ6mn7",
  "key31": "5TsQZyuhRZ9RGDZp6NnhmWpboYovt2FhqTgceNP6RY2e9nGSuzX7L1XifA5oTq7dVfkf1FFDtBAGjEUuJdPW7BLa",
  "key32": "9kUtPRFYNn7beny1MxFcE5HrdqfqbrZp9ZDy7CzBNSZNc4wTfZtQxPuxwbvfk3cFWQwGSYTKrii8sT1QUroAEur",
  "key33": "4VtwiP1snKg4vdbMDXBveBcrXNdVgJoykZtJ6gthKvmvL8DXfNbedm2qCLEprkgPaSBBVaNFXtnm3jbx5mLk7CGt",
  "key34": "3yqJTtH6PFfhFFwJNtrDMFcy8pKQHdt7y5xLAzCSsbt6ZbzEdfFZwJvs7E6LRo5fYTR7mSsPup8oQkWT7Rj4xnoD",
  "key35": "4wLMLkqeemHo7jW4K9rvqtsVjZpEsowgKr6oq78YQHPhtyc3PjvuJduJtpxiRCMh9Yxb6fektNMJRxNV4rvFQK5x",
  "key36": "63Uo7c42SNwpTPrM6qoYgRB52P6EBX5Mijtv85z4FoxbnJHgHqBvZjbKWa3MxYGrvC4GpEZYWJ6nAE3C1spw5ck7",
  "key37": "2FgptVT5kH8p89eJqxBDKhDFePtKrE6fx1AX5vGWAwtjjajEXeX4Yt8GixDDtfdmSDHCHM8KQ9gjaLqrDW3BX964",
  "key38": "4vqgsueFnQYW9kKR8MUCkDjBFHDHizHtQ7HyAkj2gU8NsCKUL5LKjK1QWnndF6ar5PwaLhp9XxyyuPwz746Bk3Xf",
  "key39": "244Y4bbx3KVWkBmBSDJBjqKwV4PBQQ4DiMFbE2ViRFSppZSHxkAgRP2mCeZT8mGheEgnhbkETQEP5zXUGsW5cv1a",
  "key40": "5J3mnD8bppDQz9NXWhaGC44x4LccPErLZxJPwFBZZ38xgiFN3sUuhZprs6L5qxP1cToZHNccyMRiXXVGEcqChY62",
  "key41": "5Jr9BTsas4zPEBH5CWxTBiReHqWTsGZGkrdndL1qa4C3Ar5MqaSFDrYSmUFqGzuAdHKCipLMVBTkiSMHMwicBPeD",
  "key42": "4CC8PSpNT4QmJ6s92q4wk1bXXzPqWyrnJXrQXEDAqndFbKGpf8kpsaZWrGbBuUQRgeicFZwZpCux91XbmYNaapVS",
  "key43": "3mjCEHiGYooxVgtm63gJS4Ntc8YNv9ZtTKtgUQbJH6DHkGkqxZDpekw8FhNWMbxQFuJrrqToi9kL7PcYMaEVpqSe",
  "key44": "58AE5PaU58AXYTc6T2YGdxBzrvNn2udEXkVtJFejczVAKu7K4C4oVbNZwcDRBunqBHWSyUFmjnQs17bvjQQKyxCD",
  "key45": "3VoXV5mebQfZQHidfvmeruop7AVt6SS7Amh6fKEEcjENyrHhyVumddFMNigUiCYTBunckHaJ4TWaVsyNUuyUxGux",
  "key46": "2cj8cRwhKYtV8BJ3koSg32m6WQiwFMayXbECKc19S9RfhNHmXiJWoJy1xs8RZefAVGZcauQtxFCwZur96S3mYN8D",
  "key47": "2gxf63r6naxqEtKFrsf1CpGTtGC9eCHrcoM4YeTA2TrqMUBKRqSgTuvdp7ATvej86q93KtWZM4WkqiukzLwm1DVs",
  "key48": "3yrC6LTD2C9TuxWCrPj8u8S3XtLaeWZ84WJHYQJ4uDY1Rgs7YYhGEzDQ3yArYsrYxgDNdPR7YpLxuzjSQkL4zvXm",
  "key49": "3aYRQsoVo1uhoHDG2EPiN755WzbUVwHD9mjjuzYws6y3hdLV43hfQMALGkBG1qs95UfrZxN6dniJQT4Ji2wVp49P"
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
