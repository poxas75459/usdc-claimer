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
    "5ngf2pJiyuVLzzfErTxR226YGZPkNBcPnR8AVnv59khhBUauFLofSvTuoN8xDqiqS91WmqDMpeF83TzLT8Engzfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UBpH4cJnYdkb7YR5CsdSxqNZfmxAqsZxBXMMmaaKzTJ78pR2FmZz8g5RqGSNAUCJKb8DqVamvzFgppAuK7Nk8f5",
  "key1": "2UnFhoys7v895KSHKHaYzf1mFTUcoanwdpoqyejVTTYGcjN2NKyQGPqyfhxudom3LTcZZMZSMfWzcwzNg4GHJgpE",
  "key2": "bqz2d8YgZBXS5EBHhYdHkNFiNsvDRViRGPVJEDrJaDEKZN5CZSSK9dHzKn5oCXpFkKzho9qxyS1TUbKfHkQsaqp",
  "key3": "2QLbo5tEhygeMyajdALnyssmnQyTeTgt9iuCMezixsaD7zqc6WFcWitGCAn5Bz2pQKAUZ2EXVDmYYw6wDzLikUYM",
  "key4": "zWE7GG9PyZxSHZhP5YJVbbcEcwq34g2gVqN2t3X3tDveXcGShjTEmjR8gSkA8QpDCxp1YCXfLwHGufuyHSpQ3cq",
  "key5": "4opmo7gXRYTuivC2XXAXF2Qq9yXdk6kCsaG8qcvZix1Dt8dDekw1sFYhvndqMMSH5BPahfpeJr4zjepB75iqvPTe",
  "key6": "2b7qEMxrJt9ZVLBoAwvk5VvmW4MxntSBH3K9xEr6zaZgp9CsurimgvUKckjyNwmBBZxJ49pkvHcg5r7otqbTnvpA",
  "key7": "3RKCqfDZCkpMyvu84v3DfedEugpvrCAdPBGAhiV8XwvJjLZPmy8dC79QqXDyZHea6N257WvdX86wF5kQXCME79Cr",
  "key8": "3GrtFyTRFiN8pYTh8iezWjsxHztTMEzrujmn65iFBpihBK8bx8LLJPd4BeEwRKK7YFLYNaS2oJcXVtxj9SBap51e",
  "key9": "5Lb2hUCCB7s6RVB8v33afPgZ2FbESJJodu3Nb9LP5GeHCNgRA6X5Y4Bt6WA1mvZcCR7JRc7LXV2BWz6U6uQgEiAN",
  "key10": "WbPbdAvzgVgoydxy8dydGWUfettrQ3BQpbF5xfuoAhERste9xZ9syr92fXNpuQjm6MgPCUfUN1vkXqz4uGv3ckY",
  "key11": "Eq638kj425pUytPzihZ8pWGQhePDoZevUScy7UrZzokLZ12XRqFDcWcTbZTZbAgFEVPRRgK6mjCA22rqijpC8wR",
  "key12": "5KctQHxAzJ5YTjr3CEw9LdZx5CJSfcmbtDPnzQ79gk3fy5AfkNGpYXek1bJSdyr8r43hGmYNguayE2jPnc7sMofx",
  "key13": "48D1kkvNpVX8mirrGA9BqTfUrLBVo2p8k6Jbm4B88J89aBrp1DVCiojsuLsdqR5FBcmBzFkUFvA4w9X2p9W8N9Cq",
  "key14": "2rsBvwPURY1JnPfHGVffsHtHLLaCE7cZ4bS9XXCqcyGtsb2FQEBNwEJmeiYu5vnbjcpKKBXLojuhAmBtxvqaJbHE",
  "key15": "2PQ9f72Ygcnt8Qr1cboz2BjZv7w59nh4VdjDr3bYnhjYYrAeUofx1KPrgbZebrE9jbFqfu6PiFSNjNXo8yb4UPrn",
  "key16": "4S36ggxtabrbV6XYrq66Dh63fGD58xniVEpocMdhYF9ygukHrdU6o9j7bwL6HPKsJ98WikhugnWkjhtasroDWxaK",
  "key17": "21rJ4Nf2EajKbetaMEbMFLWAswXPEv4mQT8vAXT5GfuTufUvn1o28M8GLGfrkQDQg2eTnxkWTuFoSZ4srQhfSPGZ",
  "key18": "sAZbV63DtKZYGgtgahu7LJQXrZvN3sZXu5e3nJzXJM28eVPnYqqF2XRpUvkXv46cQHPXcKnCa7PeNtaQNL832qo",
  "key19": "5UXiJHdfCBZUZZr4F6Z3YjytKPBxxyPt8b1jDMM5wcn39xgGaXat3L6k2xsUoEu7FztEBS8hWe7EbQ8aAL4atvWo",
  "key20": "5ECyNUx6ch89SG5Yi42vqjaxyqbEwChtzWnCpJzYm8DJvn6rw7wVAMwXChpgZE9VauH6banFg2j7ct2525CzThy5",
  "key21": "35A8qp5ATHaeR6M7woDKmxJiq9snfrGFzhLWvvYtQYSGShCMDb3sw16nWFjy9jDEMGR8YYTVFjsBPuP5cfNs7PGq",
  "key22": "4gZWJHr16fjDgEPW3woKxMP89SDTfXVv4LMPxqkpaCjUwf5MW1XQgRJdcsRNusAcFN1VZedf2841B6mxyc7aGt14",
  "key23": "3yZ3sssFMcKENytYHGppJvT3tTC829oP8S483GZX9mEpahsPuB18r819AXexbTqip2oBxTwmyQAcwRKzGXbt4VAs",
  "key24": "BrQBAiaAfxDVNZtpkAEERmBpfQodihZbKL1nXAQgQCjfJ7iWQ1anrPpcegNUDfbVgVypDc8NQMQyf5sQsawXwjn",
  "key25": "4hSrUUPaodLB7tFZSQoxU21C48qTt5rBa7PBn3mUZBi2WqWAMk5UNQ8a1wkSFDqCJ7qMyn7MDGeG2B5CR3smD4rP",
  "key26": "5tSkZjNqnFZ4FWHFrMkxW9vcHRvUj3v3c2sBbt8QD6BhAknJgHrMv8koW9JbH9XepdMFBCebpdKrTGMfAw5Q7enA",
  "key27": "ZQem7uK7hVGKXQgPRgndb9egMZbBKCfAEv32SSZa5CczhkBtiVDRkquY2j83ZUSgR1Szmfr2S5oTQWr4aqjsMB4",
  "key28": "3zRcQimVUey6J8Rd76HSw4BEQNGK5jgxdrY95HM1HHKg1TF51DGoYAPwdmUCVT37qrK1hWyu5idZqdetkSXkvpgf",
  "key29": "4iYwxyDnHvtVSWZfhAjsoAR2o1EPSSu3jyGsogpN3dstkoo2SfJ6XL2MsmvLDEzmWH9SymFZcBP9WnvNX5bRoNrw",
  "key30": "5EpAhVbnjZyXTSY1mzDDgoAhnLQgBzWess3dKhicDQwzy7XUDsNNm5ZcNGMRMVKTNXxMNSi2CPy8UcTncbWtbajH",
  "key31": "4QZLQmMzq9ddDxAb4cf2t1hq6hMJKcu3jZu6R5eHiMCwo1ors5otbssj42mhiwSYf8qUWLrteVyycyDhkJ4U26X3",
  "key32": "6CYorRUyzdU3YhkQndjLzvVUxNe2HbbuQ9BKLPrdiWcD6QvVMFJukNhiiU2nM9NyHUShtSFXk8Fquk35gt6fxi4",
  "key33": "2VzF5hf1YzCrYaH3kmtEZEzcoWzqVaNwZiV8DiQsgqnwRvTaCBBZf3JcvvmUQGYHTuvVG8CcR94gP4jxLDbaAdmZ",
  "key34": "2S6EGvEfTH5JZN4V9uDee4J8ecVVM5DLNH37ccXuxsHLy6s9j1EHFt79ooRtU42HMfciP8sRYBETrzSx97RCwTTr",
  "key35": "4Qxx1mCHoKRFYbd4GwKe2np4ZgscwZWcV4BsnHSZhr4CArPXqeG8GQ9waMyLqYVLu9ya5R1QTD7ndVUZoFZgQsSM",
  "key36": "3CpkjAnYfEffQC261Kfd6w64JDL1zDvFuZfmKLSwoPqaPvHd1aiBhEYVtcH79VPFumbTMU1NdwUTFYRAPZCRqbKb",
  "key37": "4r4CtPLcgTdTWbaGFahZYpf9YLiFzrbKCPSbYbQbHav4RhHhuYBHJTZqZWV76QqVU4a9ERwX3BTDVdR15ieXktkW",
  "key38": "2EtpnepQfzZPtxQ6PRw61heSHSEuoNrxNQYdN8seymk7Sfcq8WZsXnJkvYDFrLH9MbBBJBr3sR17VBdezmHZztND",
  "key39": "3fozEz5HsX8EohJhurbAjQNAu3h41ycmUfqxcP5savr1XecwFBv6zCCVEabQKNovWSZuDu4X2VXuESo9PRjXSn5X",
  "key40": "5XCGDcMreNUYy1X7DmPoW7vKx77SuTCAqxmaJoJR3ayt8uorScMboREtdZJYvnLvJbiXkRLrwJdj2TBtmFoyAMju",
  "key41": "56UbiMaaAY28Zrrxuhgr2BsUZztjEBXVcouWqMTLvARspvyjVnnGcguYNRKtESWLCHFTF99Q4hYykGY7ZokvNFPW",
  "key42": "42wBZrSyHuRmQjhYQYu1bswAiEhc28xLCLxAgiNA1sBS4sFxujyhhfLvXn3X19gFEeMKm8YRHDb83ef9hog5UmsM",
  "key43": "3eU1YSJ6CrB4rZk92rGYLMt5fN5ca7cwB2c1xixE6QDnp4xfvVgqqVwDvAehrNur9wJS5byj8Ei1C3VTfK3k88nr",
  "key44": "4ZZojcc7n4uuHHru9rgTTW2qsZdAq8Wh36eRtbj7zCuAP67d1fzBt2YQKcBnbE7aXpuBgam5ntUKm1Ss89YWYkSg",
  "key45": "TFrrNpVygrNKYR6dkcbmGXZy3GNwAVAqFQxEWG99kBwzXFVDNi15Moe4gEmd53s3uu1yKU7uSHtcR8Qiazrx88p",
  "key46": "u6CbZtCZMMdzHiAF4AfhozQafNJUwbmcufZMcPtLAtnNc5G2U7EPxc8myeDz6XhZmeag2yXQst927HTyBkqPKqD"
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
