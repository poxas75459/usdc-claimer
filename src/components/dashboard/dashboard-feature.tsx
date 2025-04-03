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
    "4cknkGjW4Sf43A6d2P3nFXfABh3bH8Prz5NvpEC8Kr2wFwmw6Q8h4EQvG9dS8gZBs2TJS448sxxftQ8DsUCepxqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DHJVyASyas9DRbMnGVP9rgyDFYa8iKQDT4ZPeYu5UsyofPNAkmYK62ScrWccRau6oodcGEzaVeYkk7hYbcWXe8",
  "key1": "36TD3qSwYaqNNQm4Kauj6PKKd35E1p1gQDmVepb3jBhC8hfnezHtwXahMbE1fEfZh5yhQo3tpaYA18MhWfezc1J9",
  "key2": "2RfmpEYGKV8jR2rA457bU4cZk1PrPLbMPytn7PWrfqPZyDgPkj9T34sH9vfzHyhxpcRQr1h2cacvA6D7X6t1HN4z",
  "key3": "48oTKk8bEgSuLdE8HmLyDJBRZk2hS2URrQ7grJFPmdCAWg3oGiAFs2Fqxjo6KSEu6WVvju2dpcTaV1f38qt6fqS8",
  "key4": "5sB7Qv5pCikJY4ccXYgDFihmjDxt9Y8ZfCvGrFKJ7ppfqcBgvWSjWmAVN92kZtqWuq4UEq96NKg7Tt7K67oNAHdf",
  "key5": "3DQtyACu4St76vCUbA9U5R5FCG7m4Gy7Wu5R2s9tvX2gQHEpgASikVV9drDujZJxPH9oBbeKvfSzEiZP5Kx2XzGW",
  "key6": "tLzfbjktEyN1qjjwZDwwi9jQBKaJsu755LwJxS55KBLj9UtN3tWNxKgVaRpMPfyufwiXtMHdEkBGwD9pSNXP5Lz",
  "key7": "9Qqkbvbz5CpVm1SCNDsjXebkoPdteFD8wVAi1RbtVYjAVGH2SckaCWzRdJLUsAir5VEDdMRvZtTSsh7VqtVuU9t",
  "key8": "3dm7YTa1f2S8FZJ4eq1Acz1rvXWGYDq9AH8E2QtzMJKnd7SBsgjGeYxyPKgJNUgHxuhK5K92qYDHkTbfaeZBrDs5",
  "key9": "5RGWM4QoVRyDSsmdWmnTyL35MtLq7PHfhDdiZs6mdmaSnkcaaXrtgAvMnWRQPcNCowJNBaSnU3XYg3zhUtvV1NmK",
  "key10": "6757geQ1rAw739DxZLAr8h3C2FQs3HXt6kWzYBdAyyM4P3EtA5qUJpdaW8pfwrMuypLvHu9FRijnkpXwbGmCfm1h",
  "key11": "2eFeX6PShxm5CnmTU2QNNh3LE9g8u3XgGYGQWd46hbhWWxTRHmaaH9nDs5cGdYHSzUbBcbLnsQgHfgj2gvHW7dVD",
  "key12": "2Fg3cGFM6F115qtCMbkWik6zT9ydPTfsEQhDE4VrKXT9T9sBifXMiChQafs8ypsuzFKXoWQDCtMXJGbC1UADqZ36",
  "key13": "RRddbVV3tDCsbxNAty2Fju7GzMXDKX1ZRfzDPNFxFXqiMSwdurqywjbrTMNdJjnGHZZThbZxea9EP5rsUPgDKrD",
  "key14": "42cy2ozEgdUL5er3zwkRdeLTyFE82gjBhYqMudoRgjsukLL6hhQAFmGtSfBH2AAhy3QAPo9aWJVL2qP6Cne8bPnd",
  "key15": "3LgAat6Bne21vPhjwV9aLU1brrZgfaQsDKJo8bqLnn6B7wMpc8GYvk7NKKCcn5bGsGHoZZNCVAv52Gpq5ty7QUrH",
  "key16": "3Mdg9Td4DUwS8cWNmk47vr3KFCGEhQvDsLprKbaXJynvDwMXNZ8BDwCV7wG1ETBKnxGFsNE8NmKNpsNNyuDRDKei",
  "key17": "3HZydv3EGX7e1zTFSUpuoiWTNehp1x57Ad8gzLAogu8bFQYxsHDFvkzABnQCoL3LFJaDFrbJfQ9ohkP6543gkJEa",
  "key18": "3VvftB6LEFLkcey1xRpBLTt76XBVDvgWW9WFDP7968kES7aQ6wuUK6tUkM1pq7shooWR2zZjLR97dG1agJst2DSg",
  "key19": "4doRkoYi5VFSZWSk1shpZ6JCC748uZ2zWsXG4FGvZ8Ud4J3tYBXDPxEw1C5SbKEnppaREzPw5snQgt83EhB66WZt",
  "key20": "3UxrsFzDn9fLzR5CY6ge96g3tW9DvoXK2XqtthoQ79YXSMGQrrWL8VWTXda1ri64YhSWGsv2bkQmAtdYq7JJx96E",
  "key21": "5ury4tiU7GXevFnEXDrzpm6zB691XAxGR6G7gkKo9Tvs3giR9knUQsrEzGAgQkX1jiWkCYQtYwDds1Dp7j7vMmHt",
  "key22": "3kdxFMpYWnyURoBwsoCjCWfrV1nno4jGjXrhx3BfKG5RF4pF5ciVBHX91x9Mo3qjuvJv3u46DtXugZi3g88yoohu",
  "key23": "4KSgAuS4jUzts4zsG2113DaZYsHQuK7YsfhuzpQ8DMCJQiZvvThMhFvQG56uB67QyNCeFdqaWWyqVtg3bAGdJPGy",
  "key24": "2xAuskHvFWFKbunC5r2QadvuoxjDJrTkALBPmcspGfSxuaeb1AoLGnnQB9VjteQQbKBc7AT4AQAcZM6iqz5xfiHS",
  "key25": "2aWAGg8vUAms5CDWJ8JufhVwjtAtu5GAJjoUgfUUVDf89UbCF35sJ6MkSomeUK3d1F15uCjPcHY7zxKs3jXwfji7",
  "key26": "3PJWZfyfMkLnZMV1ttTstUyYsQUku8H9aHHiUyEbK5Gw8gTvBQRSFidqzNsVFkzzsF2GbisiA9fZxnyGEEPpgQ1w",
  "key27": "4dr7ZcHeF2j8guLeS2uMCYUDawoiko4YJEQ1c2RDYEWuyrhBU5qvmp9uQC4mu6CsHuixvP4tfEfvTUzYUgXvm5zd",
  "key28": "5vpeabiwT854yEbFgdFFQMvQDrR11wS7mRtj4yowQJgS7h9o8FhTvEZpRbmafSuQdTdgM1MLxpD9E12jp1FKsNmu",
  "key29": "2MEVajPKo82DnXxVNtiuzrr6f2gva2aURApXa4oyWBvtzcn796J9UsdSgMRauBBL4iUTZsKQDLrAGoAmj1Jo4biU",
  "key30": "297dNrsSb6SEYPmQ4NQjZFsQN1AFXvuP1gULYABvQgRFUyyRsXopP9FXxfVbcHTXSsRjTDFdnSHCNnzzGnjsqGeR",
  "key31": "2CXBatGSXss1A33YEz85R61q8TKwNGQnxxFTnqxKx8xxigodBhYik89x5m9YRgodFC5EvQSchRsYjaPGUfcwWE6k",
  "key32": "4HFV2jafiTVgbxWi2qeoFap167ZTz8VAojTndf9YScxGg4CNPdxNRZowJGUqCQTC3B46bnUbQNFP3eE2WMTc2Vhm",
  "key33": "JUGRMYVA7hSczd7hXCt839MtDsa7rCCcaVkpwmN9JLjwurpwpMSqNyRQxnheX2juHjqhb7VWfzRLPZXCNpZXgEo",
  "key34": "AYmi8hU62USsRbrSg3bh68PuhGwuX9TiBX81sbLyKptTi4hXEmMtWGxUJKwRUtQjF8sMqHLHcJhNJvzDGBFokaH",
  "key35": "2LyPVoSdM43t6cSKh56UkrQAkAVxfktJEBk8mvzioN3Z8tSG66HW4fvPHrGT3fTE8JorhnQcziQtHfLoanRKsZMi",
  "key36": "2wjCuedTfbY9nch9dSt6Ed1nokAAV6UVSWbqtHnHP2g7aKBszUncrubCnN8B1YcRMbGAY1Wu3QwWaAScYGqU79Jt",
  "key37": "gQRAoMQbWKNtPiCtjuPdJyrKu1A1jBNLtjZhZMa1MLJm2s8GmUmTPeR2Bk2UUTi8QvRiACLneu5McYkeaTFig2V",
  "key38": "2f2c4rbp7MHXfF5CwEJcWNdjHTdHbHfpSb7W4r4weexTAW4NSnCygxvM7YjdxRfsE2YxZVADb5kAmQrHnfNVRPEi",
  "key39": "851bj68DKW16Atix3ZvCnRGQ61Yeby2YDdAgdx9Dy8hbETY3r5Cw5TZb4rva55zGy2xuG5XoGZHQMFDv46h6a68",
  "key40": "3By3KvzD5WjTHTpYRKJajDmpYWu4GYbUpYeXDqqkgy9tUKppgE8AEj6T9y71UyF4aUUcdDAWLvG3cukthmBdP7R7",
  "key41": "2Cg8KrZXTvNe6xTdZBgEDz5VpXK4UztjZU7Pi8FDMLASCFyKE6UtdZNGuNeLdJ4PtUVRV1T138PZqEXZ2NreXsuh",
  "key42": "2kQ7V7xAwbFpc8R9DoW8d3293aiyJCcEvP19snTdE4yx7mzajXs547MWLm2zXTDtUXjGirx9uG86XUuR86o1ZqHn",
  "key43": "2fnWnzN2QuF9FMYUrpFjZCJuATF2asu8poTX9UaqqmX7jz3GQXhjvPLiJjTq2q6pTZhK52Xwe9n9ZY9QNCHfvatz",
  "key44": "NMpFTHQ7NZYZBuqxLVRNUvuRMaQRrY313gR2jXfLvpAV1Lp2AGzStWXARvDG3kSN4E7kkzkcu9XBvCtQwmEdN4G",
  "key45": "zYEF43A7SewWoKoRNArH6SsPVjcR95MjHZbyHmsRQLSQ4k7rZ5RDE3D7oGqM3eyBKnydtihK2dsySc9PYbgLQ6x",
  "key46": "5G1g9DZiJn6uhvuPqXxV87zptk3J3vdgmuVykvTP6MPJQ9HZqgPacuLBDU3QXFQVzvtCnhnZNPdNxDWBRrirU6YJ",
  "key47": "X59ZLucGzgMoXJUjTAENeZadzi4t6pSMyz1yw7bcpGccZsEZAQaW5USE5rS1dLsxE921k3qpSsYjokFdhu6XJ7a",
  "key48": "44K7avBVuhmUvsAv1Jjr77cWdCFA14bpDqU3wMsbBvrZ5w9pz88gApWYYDLqmKCqrZ5g6DqFegBaJQqmVZW3gKUd"
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
