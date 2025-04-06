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
    "2k5qY1FmRh98eNbPfbb2rqoEUjjovjT33MveqNB5RLjS5B5dYAg4C8o6ySKSZxSLoQZYsX8876cWQyWmsZinKBDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FjpSsVD1CGacSHupzVUQBxzevQ8cWVgYcgKybJm4psXHNBmLnWqHzrRmncWEXShiWpuvAt2373yYnkqeaK98yBV",
  "key1": "5BS8h9gws8GYXtHt15oj7TEUoMTjhkwrRg1HDeM96UkydFafgJxNxL3HTzquYvVAcAtLsMDszw5SfFtCqWeS7MNN",
  "key2": "5G65eBN489fZc9REjVo4LDVcSvZwLQVZP5mFBzvkVjn3acer5oWcPdDUCdyhQ4TRkzyNeEuwNYi1sCBNi6kZa3ZV",
  "key3": "CgYiq1yAyErXEuLgpikSEiMKYT7Et3JsPUpwQDVvViyhAiZvgp5qxgd3KDvuY8H1R3448dgf6GjTg9YAWaiLi1b",
  "key4": "3sAMEhnJQDgCqEs3EBYy3i4SDyXPzr5yy3niJht9G8DbQNQfinT7BFdeBwTv97rTNYNDCPh4ZGmMxHDqvHSt9ASC",
  "key5": "5sFnX3dni1XLrEdRyipNkETzgSufY1vtKMMQt32HVtaKzeHW5A9uJsFrDKNdNQjqVXdMnsT2WDRRmgf5txfzAzeH",
  "key6": "2LbuKMg5RyXihyBvmFDXkBehjbbD68pQduVEEDkKmioW8E8mkcUY9QgxPdaVp2jDefZd24RmEUBN8Qf4PGhuceBK",
  "key7": "5LKCtbuMi9H39bixopux14wnHZD6msK4U84NJJP7HatiXR5b8SpcfgYMeTgzc5d3LMrcw55yhPeW3n2C3yRKf3M4",
  "key8": "5m4bsrcuCKSWQLTnPBGD74hbEuhqeyf5ruuuenV9tGpg7GrCp2xFGbYW2DR2VGRZFYSxe5TU1Vt9E65zbQSXuGgw",
  "key9": "2Z76wLzk42vtoP3obN2CRTjyWe651TqkfmEhapT5xJcF7YzgHzVdw97ssvZXG3D14DLdTa7R5t4x2XiqovPP8WVU",
  "key10": "Pe94ow2Rx8nAdaBMXUxPHmDrq45cMFp2CEfjdU8Aprz8hw39h7Hxskk17ZTxYaZSjyLMEBLetfC25Eh7dhrAEjL",
  "key11": "2Xs5oHmNSVKMv8LWdCHNxXhg537XJ9BfGAgwWRUWJ5csePfNbhvWbhVG7pDuC44EeLwbhYawM8qFxg9FmerE4x2j",
  "key12": "3gh5VhtHxaisuLDhmsEnNiVv8YHR75i351sP2rFXJJKYNFQz3HB4E66aN4DaqrpTn9RxF44UppJ1GVdUWHpv15Ws",
  "key13": "3uH5iA73RK6DJA8BcRmx2XYVmP4bUeJWcAxLkVzdzjQEwtVCF7sUn2r5xZxEf6uEEshRqqdKW8TehojpLCsYrxFK",
  "key14": "5vH1aNJnHqLnjaCvNz5YJvf1p4Nj4z3WvHMSuPXLXwkopaHBpqwVLRiRGa5bU5uRRRAFUS68UwKaPVWV8FgqtjeY",
  "key15": "64B6cF7BZEKxiR9tAqMymA1gBR6LpzekyGBSgUUPpn6NxNbUR1f1S5xptzbhQ2npfLkkpdNVUyiWxPTz3mzUSsc3",
  "key16": "Yj1gUTDqhni1C1EYqBo6N82vEEKbWqhdQzcBT8wEcjAonjcv4tNBLsSLL3WurvWqk6zjEjiiY68Jj6tPZPpdjfN",
  "key17": "2Prc1jg2LgCznADgL8dNiV2SVxB3A8k9ks9CNtWgrzm4fDUm3sqzHoDupWSsQvNQzZRSeuaS4YnEVahnw5RoGXxt",
  "key18": "5Qn7MepgPzDdBBCh6bcvkVgwHBSLqPjD2i7SkZwSbCdRdE8RQcm5MpYguc3KP4RkBLT9RQLESmUyw7aLYbHi7VGw",
  "key19": "5tcMne8ZABAVKyoyJQptiobc1g8ATRfnTgDPRto8BoKTDqaEWynZVhYAppNmirGDzKXPfiZ6QDprbpzqqubx2yqZ",
  "key20": "cKu95YfYCgzsqaGs1SZBL7WSqPz2DJfjFzWSnaVqZR8cVUgXUSAPNNXabrb8uoevT7YirqkHUZ1hJB5aUfE7cmE",
  "key21": "3xH66BB53TugbE65iU8CSxaaEFqpPYde1RqTb14sMqgJyNYQEwPatrwVxGtPc7jZxS6KkfAEEH3cZwPUmjrDELZF",
  "key22": "3L4FKAjnBB6pHE3ujyz4C89NYNyWu9jbPywRNPk5XVxaCa8cTQyFChXPUmiTfZctRmXA8mnAsyyee46d9xDHyYXZ",
  "key23": "38T6dQuNfMy4CEvqiKNVZm4z9HYobsaRshFbxnZ1qk2TF4yajBajQRbgyjvkUDaRTaKLx6sM9gYiXBQpiDZwzWCg",
  "key24": "4NUp3JvxAzF2g515D8S52v89nHDQwuCZtXq9tabYiaeJy47mtBNiygDQHpMFPAc17j36qbFmDyeSQ4m7V1CE8nCR",
  "key25": "2CTXGEhevn8DKmi6KSLLJCLvLa8XxgHCKbPaYbiAZNfV76s9YGn2aab5e74Cj7bvUSW1VXsMuGDocuGGbWKopRwL",
  "key26": "47GHhYe3enURn9UYEgs2teuZUqxKE9yYYRrUzxjrX2HfUimQxZgdK1K7mA3WRzUKFGaggAkPvvGi278a948wt65Q",
  "key27": "5fJJAurQBjGRGuGgmmq2MYpeiroVUQjATYjjbBwFyfzBPubnwqKutt6Nv4hD4Qg4CiCCnZXMcHB8K7hNT89kWaYj",
  "key28": "3XEYL8MhdQWLt1sYE1X9gMtfADCV5xv5qMwDimiqjnjifWz59exLSr7JJRhUsZi5fRRkyhCwyuF5Ch2mp6YQnAc3",
  "key29": "2jmSFSYziWexL1R1K2ihq1FfS1JxRVetPvn3a92K5r7rqA7DsciaK8DEevV89aTpwv87jG7PHusYYG5wr8F2Giiy",
  "key30": "DwY37989GhWuh3MPB59vkJwzyKmCAcikjXnwDkVdFF2ZAbo3ZrKoDtMEZYvhAGTLJ5fujE55pGUSx4U7nvVK1H9",
  "key31": "PQj7sYvT5LLFGCb6yCKmRvXWo2ZBYSD5dSmmxwyQ9tcR9yMJrT7cx35nNuGTrfG3eGdLHnE3P5Wv8GWZrdjRAGg",
  "key32": "3tBjLeuvqGhBxwYEfzeC3fCpmhBwdYW5VqdPD5WuR87BSbsUqdQAmyZNZqZg64QbjicpC99sQaU7hivUwY8p6rTs",
  "key33": "4tXdVa29Ph5PWZXZqmogiZbpcBR9nb4X7utrdW3qAWP26zaZDSbZm7LH6noT8LqKcvuAFPZwXYLXwEcJL7C5bA9W",
  "key34": "q6CFyjcct4zDNvyLt9DxFkKs9g7vQrBbZsApu3NozyMZp3uXbux34zqXJTqrJwvf8ZZmpnrsGfQ4KwPQhRnEBji",
  "key35": "2BDavLw3399ZfRKjbW8rqMNcWkNZ8PWmLeCR4TT9NWdFWdVFgrnRMyjJtWGrtxr26QidWxXYscHazAgxBiPNT73u",
  "key36": "2GJL98aJ2XxamKiUtaMiuuSwwPQ4rLiYZ3xo15inqHU2LSX3MewdMzJpg1VF7YqaapzsqLQ2oUqPoqz3BSdS8fLn",
  "key37": "2fXAARjnUVG2ZZwbjNYYqjcsZrLLfgVGYDSehqooU1k1RBmQRjomdkCunzz1PaCwBrR7pq6UauvFfMUgEyFfpw7b",
  "key38": "24piPy7Ja4JYZcdyc6pqMqekzXvHoT4C9T5R8K3R3AT9ejMAYkDCrbvtPKujpbGVKFbMd7KeGvbPef3qDYci3WE1",
  "key39": "2HHUoy7zgKwPmXH8jTy1b2xQKzz24CZ2D9b2w9UsdQ5zfnmQCWj8awUFAsYsvE9eFCq6mUvCS5s2snqSU3Yyscjw",
  "key40": "3EEJ32q6HJDZFqZpG7yxscLQqt7sRjPjcJWxA3vuBmx8v1aHLaocMwNZJVQad51ZSUkBBGpe8U4SDUxibTUp5PsZ",
  "key41": "4gC32sFGWE2bWz28ppTChn4miq4zRF6pxYE3p4APDC2R8YMwFwscBqZ3c9FaAp9MrswjfXmn7mr1Z7hdHMa2BKKP",
  "key42": "9H94j6si1QZZ6d29RcaVAkGu1sm4TsnPYpVc91kJHrxELAE2ZUx8rpfwpDCs7XZSyZAyfo7qTq7w6ArjRAokatB",
  "key43": "zScoZbV9RyWLPniBkU6aqxtnNpm5qywg8DP4M8FQHDP2spHzPZ6vDbMEUboHvZwfX86wPN8EZumdQNscnYovbjw",
  "key44": "LZawsuHwLYT3ARo6gXGz4NDqoQt3ZXXmGDmvycvFC6rVqmv9TTzBv3RurFC9sXeURB4mRCqKMqpjg8GLS4CCbFQ",
  "key45": "4w5dXMHC3n8N4LfCpjR3E84n7wGcYA3PyfoLfFeyrd9Jk8gkojWr1dqPaM9tw6F29rhV6J6hyze5avexNUWqquQ2",
  "key46": "5vV3AJ42ikESgzLsMJ9nCqSdcXutBgz7tDigknrq62DjgEvtRzPKDJLCmHeWVeYidLBR632yuWYUooC9UabvqJdw",
  "key47": "444pM2NWfAuNm9Tv8TAVHw8qNZMEeEjcbLcRnHPBRz9vAPEEEDYEpkg5QtmSN4sMTGWAXCZs9gS2E3BT2yGKiD7g",
  "key48": "4ueK1LnMLYAQv7RBtrffgtcHJVyJhsLYnB1SmvcTtMjPjSPwYJEZLZayR4G26JPBYy6nHDrakNtcX1jroymh1jNd",
  "key49": "5Us76P1ijYVddCKZTGhpnwYNJvNpWXqGY5FbbGmezucio1jFRXNg2i461cRmsT5MuUzDe2EKHF1yYAf8N7LoopCr"
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
