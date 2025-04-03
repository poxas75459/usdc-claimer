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
    "2nTGcL92Q5AdA3PWExNdfofXw8gezQnX8djSfbxq63rS9KrUcNaBu32qgK9bcVynnfZb7HVpsVkbHQz7z2hjxRFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515qePXdLGkq141zTTdkRyUEc3BtEqBB4MmheHkFPhrPAueztc7usPqXpFVMqSHbz7Vhh44Q7qMpsNTrbKKUAW1f",
  "key1": "3z1Ejg5KG5K2bvvcibo6s9RpkXGwXc1Mn6qP6ViTMRXo7ox6XtkcTDRHEN1kHCC6MQyF4bWiDbmzBBjygMwZhoZM",
  "key2": "2Z38H3pBZWREPNrwrkUAkbozJ95m38YyqM1DquBuzcRpS1JhVzo15iQuFBQqsMpviBLpkULczxZJA72FopPrGAK9",
  "key3": "3gNgYiKj2uhWdPGt9XhHPnxmHRVZYfmvi3wvuJoLMyQmu7rswbK7ap6S3T4JEFj2KJdSkuXU2tAGHhSUcL6PFu7h",
  "key4": "68kXkkKXEjpsZ2Zb9xav2ypKZzP1aRUwzRt6xtRkuTJg9wR21bHxigtWXRsKX6yoAkXu8YTk1aVVbm4ELk7c9Gd",
  "key5": "33U5VA2oR3zxqnVCDYFaUozHmu9beq7J1whwNyUXfZSwyVoyntiNpDfRsYN3eGvbCaeTC6eS3u8fw9YjKsPoFwGM",
  "key6": "5aU6bkvLCxv3JGaicfVauqgb5HUHA4dyAuckYxfV9qhye8WczWaPaSUXZuTCuyP3K3qScQ7XdqRfK8vaJgVFtzt2",
  "key7": "f5utuwUQDUKRwHAA8HiUXPzPCAFN6C7UafeQNjHCoyHXNWys73mZCF56K56zKKXDmPuEmccwGDhNA6TpVDKNbXs",
  "key8": "32wtt5n1EwcXfnKvyAbQMWUWMBvRacfTFqHVYBbzkProwFhiex5bKvTwJ4P1corUd6uZEkJ8xDYRb1iFq13xRreq",
  "key9": "8eCmEbMxKBLPLhF6fxNw9JhbDiG6enDJsWqHpQVz13iDsecTvbEDUEhJY5oyh1njrASyo8x1XJEcukDcg6SXjQM",
  "key10": "L2yRC6Np9kuQTD7CcYRbjB81j15YatJDKUGtGrJRzVZQxqT5JmFuX32X6uPtRv1gV7jY1UjnXzo4VudjiWo3d8K",
  "key11": "5nYithK9tEsGhnqczmgpyPZKykPaCYk8o4CTYqJ6it3dmzmkVxjxUj2xMifXsXfjTtrP3SPLawAquZj6RKCTQLYW",
  "key12": "4psFhCs9gMyK18Pzkcfw5WJTSgjQQM5143VeoE5BFR3Z5iHGq8EM6x9c1f1DB3jUFkgQyCfxZdbC25i1wcPgGfTn",
  "key13": "2bj3MGQrsA9ZrfUpiPtyBF8EXWPvznrx6oX5TpoYbs1KN11gk6NMNtUxypQKvFjjcxKhjH4XUcBYUgxanLvy1gqH",
  "key14": "2aUQqkzv5GqjnFDaVViDxkswKSG2yUD63dT6RJAoJY4qVZKy5A2BH6UkB3KXa5GVjJEKmTRvydyDBLAnDDmdUbMn",
  "key15": "4wrktMT4cqzcV6B7U6UjgarEA1cgxahgz19HaRKHpGo9SHBXRXouFx3sP9bNk2Gspt8JWELvX6gsz68TXxCAJUr3",
  "key16": "5Z7moRZ4cgzG7g4TMD6oJYJyJBWn3SC1WeLjRrFV7jpMFNX6u5Bnkw3KtumWPqHbeqhbJQeEy3s4qsfmuG1bMmnE",
  "key17": "3kEELvMa2Ha4xjTtJiHLkfXtVVDtyHoyWFDxqSyxjdjwafUteTu6DuYxCCTCupDJBpGFvUdowhSP1ti6b8uNnqCi",
  "key18": "3ByULF5S4StBvk25UgCUHXs3jNcZvypo9CmUFWRBMVQHge1a1XE62wNrmyKJsGo1ftR4AtvKy5w5PdJaSDyFr3ew",
  "key19": "2EsPe9WicXrmTibyJ4HJTaMo6ZtrQtybNMhXaUGU5sRnYYXAHSr1ppVFHw4a9zQURgUQbQPAYS13h3Vwznf4Dw2c",
  "key20": "2UJixQRkrgoQaesnqvaut2ZdxhTT6drRktaPC2upWFZAAF3yeuvvYbPPLCmAiy5fcJcWbPuFBteAJQrYYYPPpkcr",
  "key21": "2oNP3eroGpgkqo4iBJTj7JXwZQ82JFdEn33QKQVzJbrJfbgVj9fKoeAj8YJg1VSMAihzarNt5CjCyuPuoAVDpnh1",
  "key22": "2jw7LiFy2PsReyrqYugUgXTCmAZkAyX8YT7FmXhyNWLNcB8fZotx7yDn6C7c9xcwQcHqy5m9CjPe1jpydXfajvSs",
  "key23": "5a3uABLopy2fapyYaKyCTjRbMtAkNnKjnfRNc7ZCEFfs4VEyKAAsU1hGbzdkgMGD4soE23SwoNYCEn2Gy771EwP7",
  "key24": "4GV1vKCvzo2bc4bNPb1KWQYKwgnFYVn32Yy7MNntZc6sUChjtVaXxWWfXGXc23tKGKZakH5Nj9Dt8oBJkMaqTksn",
  "key25": "49WHsBu2ZpgKxGgkyCibxtHxZzyw3C8s3o4gB91d3j5sithfauwQxafQU1Zi4Bv3MATzF1AW92D6piFWDgzKgj3n",
  "key26": "fFTqR8WUQU9yDZG3GnHWyo3ATzjMKvx1cYTsLnPFnMrU4xemYF59hqjDdiKV7JnbMaibhu542trYMxXPJZHED8Y",
  "key27": "5ZaCT18cx6SEkLb1wG6jLwv9PJtXPNmUBPXM9CFWHsbnGNiASfEi5v1RwaGhkkMrKHY6BNHuEWyv5xtaCK7wqcop",
  "key28": "Na7PKzYaGQJGxRZ9t2K3EDk3W4pL2rxLAtVZdCRHt2ajLmSYWC3EazZeiEqS7pfB9NetfKE6SKwd9em1sPVVDUc",
  "key29": "qHkqDcKksFev4Zh6DfV7KbxzZ3TjTctWT2QVBQhmXs11jTTSKJ8X9p8PnfdcFXJTbsvxgduD5za3MYE6mPaPmpa",
  "key30": "mbA3oXxA55jMLhFm4kmGfM5tvohSPqoM8kGCZvqmAQat41CbAhD4xQmu8XCkadG7PaRoQL5E25J5YwA1TVAtXna",
  "key31": "54QypVwjNg38idgtscyykuydfAAonREr5TVP3hVWduqxt8DF4D4Dpf2bJzVN8nk6Dz8ktCPvmEhnyCk13VawtagP",
  "key32": "2aRXz2MpdpjsnY98XaGjUui6pWmYMXjBPizgbG8ojrXqXgd8qTRrABuNPnrusxR7PJqny7UexegeR7HAdKuyVNus",
  "key33": "2TKxqHbYPb1wfNbXc5NB5boC71z1aqywEnVxqvGkdmQuNGUbsdNjBCfz5AxWeDGZx6qioSvJJvzcUsBw6YFdaxk7",
  "key34": "2ysR9WaE1oLFAdnuA3qYMzVnPCfLaFQMbq7LGwEpsCB8Kd1deRe6hwrEYEoPxH3CAjdbzL8XWaoHvqDZh1gGW7Mv",
  "key35": "2LUpdY1BtfDkkBLmtQSC1LmUTA8gfAttyRahT8gMZCdpJrBiKaf7crDZEJyZvAEeZokRFKw1CmbJkWRrGhNYfiJW",
  "key36": "gmU4ReD9aYnZLRm9UasEAHRjy8gUcUzHmUKtRrpUU75hMZPcUrw5K5KYLisSBzRzGr3NyEFkiZf8xm7VWcxRy3p",
  "key37": "32ADPwyYVbX9j2qJy4ZbfwiCPZse5qSRBMpqY2UG1rgriX2VuwsVzX6DettQ9AsnWA1seoX2ke9SMtPksfqRQbKu",
  "key38": "PyWNjyR3kECcNQanRpuuR74a5nbvjmP4ddpgPqkijzDutJwtDBiukaMgg9rDeRARQDk6LLbdWM3ATfdMpzH5nUw",
  "key39": "3XQC7J8z9m5r57nq2HtamK29c9V445eGFuywt2hX6vUNyWmEtp7Y3RsqDQCU7kbGc1cNYvaojBMgXxm7yVqkQrq1",
  "key40": "3wL2Yorng6KCP6uoHek5beSoMYFa7wDqCXH4GoDSfnteNG6adBfySBX25c22UjTjCzUxXEFC8TsiedvnG6fHRgoG",
  "key41": "28saWyrm634Xr2esSverJaDDxYtjjEA3XVKbxPRaFh538T1bAGszieY1y4YchUHu76gVXsyKzNmMWqfFrXVARFLA",
  "key42": "62Razm2RbN1bJz2zmRM55eQRkczQpnYxvwMfPTh2XAsPNCR47aZv3HPNKdnLX7kht7YrVKZzhEM4KbLhWGGhNbnB",
  "key43": "2BwxJ1ZbMUQqqMzHTuguMFfUWvD7pc3hiAKyiBYjRTZXT1Bor13Agaw195YPmgZaeJHFt4KwTWHiebXcsAT64uAc",
  "key44": "3dBSXHkuXcCdcu7bDU9Jnx9QwhFqjg4Cg8gkWBRs1mNsEUhXgequFLEDhi8dbeG3bQ41X9DPWrBsMYV6tS58rhSf",
  "key45": "3JeRxjFJ5xr14uewnUNfyFePTXfUJzqhK5LchXb2BFTbCJoE5vqPJxYXNFkyPYFSBNMx8QBBEXJujPn511sBoPSJ",
  "key46": "2LLqPbHkubQMYoE8mqkLHRZraWyoqxwkGssqB4GiPDy2AxRhvx2xY4ZrLWdwuNY2e3aeZ8qyYddoUEUg4qAdoePM",
  "key47": "5ZLabCnEqeohJvvBXaRWzdNAcGktrd7aySRrUvja5HaCxCQS7ea96BvgP2VsMj1LpzHmiu67MkeeCKYoEaKP8g5G"
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
