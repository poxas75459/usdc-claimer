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
    "cN5A86tv55nX7BVU9X2FK46qk19cD7ThvfrYrGyTtCkusRjDuYRpCXMjFEbzgG4Vj3cTx8q5GkUFCCBHfne2Hse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmXNkehrUutvSXU3ywtgYRNjrqRgeAoQNv8xtdqjSRuhnMzFoFyCxRMFmF1EbMNMB7meEW8AzYfjVc5oxnb9AeS",
  "key1": "4nGkjGgaT85o1TkzJByiEq2mExQ1nxCdW6TYZhAoPYks9oiB4ZSwXLSfGKw7gwDyBr5SJn2hh2tK5r2JQW9RaKep",
  "key2": "27FS2bUq9zDQH1BnsLzX3SWpkNfrvh6zhkVhX3tWWzn6wktKaKHgg9wyCKocYDKbJ2Jog7B4fbQakhc7KiRVKVLs",
  "key3": "5DkGRUa3pMpvStQg5RoEoDr5epLgb4GP9Q4k1m5LxJDNiZKip4fn7754GSSnyw7qm9cxqL3CLFi8ekgcS4J2bEQf",
  "key4": "9Tuw2BhHcYHoVGXXLRtmcgsjRVrBqr59XEqsUFSAEq1Y3jvG2mpeXQhiRBV5vcZ1kyQoYnezCZA6j8gDCbxpbGz",
  "key5": "5fFMd43CBMSBm5h7S3C22ZSUReeMGJJqfYUujuwou5orAPpdPkWrWsvYdcATLN9CunkAa9e3zX2KqqW9hsy9We2K",
  "key6": "5iyX6UPxES3bRYfKBP7kvQ2nB96Z5MVVA2wmJKCEcAhP4iLXTxGbHzH9FqmW9Ao5oNGQVnEu9TxtG9LzErTdsby3",
  "key7": "5bjyHHryhJXSi3dFG5TnsfpMZ4AUn9p3o6k2nd7pdyAPCpNyu7cNvrXBf1H99kxgiAiEyVMH7dDqr5e7CQxeWceR",
  "key8": "rdpRaptNz3U9ASm8KBHtyoEy88n4LdYvwVXvkpKtAQ58urCKkKDHiLgAsvfEYzMkTEV44QQPY9kAsMav25L5y1B",
  "key9": "31xWDi37XQHE3EgMsK96tufUWiMuzzBuJueJCEwGrznZW4G72ov8hKEYc77tormWpFmmLi2uYW9tiqXcJGAmnjSp",
  "key10": "5HkpL4ey32JYuC1pdy8WotP1BBn5bhSEoM1PbExVhhCLBspXRqHEE8v5frhV2fB4ZEWL633BeaWLj5swRZ598ufd",
  "key11": "2M6LMRc1q5qGSinV8mKD7UK7dTYKPhSwRFpXWGBPJXnud3bWijUWzZUdiZwgPkkRSUhiwdwCqxacyCJZyQG3aWWf",
  "key12": "4UJov5WYKAhBQEDaR3r9ZtjVPdefr4A5quf8WqTSK7vhzDhmJu7RJAXSVhqAE9jwSMvjUZJqzvJj6tGaLdjK7rRZ",
  "key13": "3oW3bNyteQP9WG3APUfKALZvEuEuh1ky4M44RCTDwTVKqLvzMi7wMBTB5jFrSBMvveQVdu966RBEhoWXeMp8pBKm",
  "key14": "4obRGnuwF8PKUnJFhhURLDhdwLYLCmG2KReE2QGbVUW8fd2Hdqdspzj4jhW95kzTgRLWz7YmyFvHwK3jCSUpcpzf",
  "key15": "58VKjbLtHusVsPSUrJCQyiJuN2wGwJb7kCxPAZaEUiHYGdCXRdMKVcL35oQrBiNQ7YuNtUHqgjgCmKpTLpPQiB1i",
  "key16": "5LTckqVCDATi8ZqKEVnp4qq81n1VuPQda2m5SmwZEYd8qYmes3mMcEuBQFqMavyEgNdgrrbpCHxsHBZiZWZsy6J5",
  "key17": "48StWJEtj7jbWo8Gohu2rWYAaJmY88ziyNVZvrUAGd74DQFJDipSLoe48VkWeTSUcR6mURqczjpu6LFxrazz1mio",
  "key18": "5beX63Cip5gjEw1QhoT2wEpv7bHCATgYg2bomeXQkWC3RXF29NhyCxirmRxw9MSyeMHz7ED71r9ogyQPASiXhZUv",
  "key19": "2HiR6cH8qttCxTfRaKaSGCVgwdUz1ddZnvqK2th1LHQccSJEA4HXBmVrjehJavfSioJnTH7fzVAb9NcD8g2rP4gK",
  "key20": "VJmDgJjcx2MEhNpewo58dpPP9z4sjysLLmKYkzSkLFHmx7uqzHxZ6uGkvTjPt4AEJyWD1kzr8gJ3E9aVYWmLtx8",
  "key21": "4dGxX9J3tc4Q3sEVw9hZEJXE7KiCCEnrL7WAsGHGA2p9mSgqpG7wEA1PEyR7vsvbjUmFMLSKY2tyW8kgHtZ6gnLk",
  "key22": "5WwVNX7XVP72WboqBQQvQo7xAMq5fNBgJniNd2vKbxuVZPvgea2rdLvzCLvxuviStJ8Zu1GhayZtDfLgyfFx84u4",
  "key23": "2irFrt8JESqAe4cgrkd6guyEBAUUTSvGesM2PJdVDE2ej9j7tyaAPeVBoiFXxBpteJcQZMYVD5aahz1sRPoyVbPG",
  "key24": "3xmHLq9AKhGiRtBx3rcEvRErZULPR8ZziueYF5YroudPVxs82iBzACeQu78GoQ4LoDJ4jULVJ6XEivyvBbd4jgia",
  "key25": "4Aj8N4JRUpkZXCxSPAaizK7iF789NWLywAXNPS3HdT1FqDyyhdHJBBA7VEv66PQWNhw4RbxG9XZLn7fv4NE3es3G",
  "key26": "2r7g6dZVvWdioh2XYvQL92qhRbRxZePduTdt9vqTx84VDmKStY3gwPb1cvfdsiCqtKCBRuX6Lzp9QB3nDi8LzyV6",
  "key27": "2vsJik5EnVYEoart53r9T4T4HL9FVCxFpdj4T7LxDFoMoCkBK3VkDRTYMDmeetHtkcHWVsP3WK2272aoqP8XKbcW",
  "key28": "5bwbFSYXWdxUfWCjunSVmVdS1SPPEFWggm1rQ8H6kRBjnv17FhGkGiRqAw81mKP6XzkhXmQuctkxEFd7SbU7zXuh",
  "key29": "3atCAi6EnCM9GweHuuRSPNJmGJMTUP14ULScmPwhgxpwFGwmgdV3p2sm3S6psAQPfYToKs9MRsBXpmb8kQtBnMpY",
  "key30": "3AfHjBYmAgH3zFkgbtLS3g7VrXtYf77WVDkJm1Z6nCC1z1fCeaBSW274YDKzyWQJuXho8X3ob5aJ7mMBAqQjnYZm",
  "key31": "3fqdu3KcSG8U2h1zmM6RJEibZ9HYH61tLsbZbxXafCPDRQEDfMf4BzgPdMKqeoTfitKWFbwrjvChevsjhNLaHhHv",
  "key32": "2drBCWuCU5uQg3vSBQCpV8iYGGXqY9VaQBJVYi3gRfytZNEibdB9ZEbKsvWUcH9CMikaRxAqviNAAHHD4BRbQyub",
  "key33": "2VYfMdTNL1BKw9wp3r7UYDDU6EeTVS4eXjncQBsCiogbVcDMKYNZHk2tN5cor3fEiCw2uF36TQgafXn3G5yD6gZt",
  "key34": "29qw97nJ6obwpyX8tCDk1ByFxbQ89qV5XoKmgbkhUxUuHYcojf3sxq7t8RquXjJnNa9HnrMC3HQ1ySZacnWjX9LW",
  "key35": "2aerxn8bkUkmFn4WHQUgB9TqYPXsFfpSL2GPVEpY6xtHg5TamLMdpGjJAfmL7cPACNytehdMhfbE6HPcETNu546U",
  "key36": "2F6mbAjvJEppExLzbThVKpceZicymZvwgTF4tim1CoUBhVRPrbztEe1RUpDevvhpgn3iVSR16xK3XqU3vkmQxeL5",
  "key37": "3S6DPXCE4B7eVSWDVZTuqV9rDEMwXSeL4ZSbfMVZa84dhR3m86kNESFa5T87P3cAJrqjXFwDfrdR3rQsdn9JBAuS",
  "key38": "4hEH6MTMbzVWPLF6KExoC88NnPoBUKyyTkMABhQWyxxFsM8exa2QdWyQoM348hAawoSyqaaZmRxKbBcm7mTBb9WM",
  "key39": "5pKjxYW9GRdC3cJ9nHkDFWGxTqRycDxQTZ5KjAysske5WmrUmAJVTBWEwfiDQLMNdpAyGFCfrFU92o7NDQQs9yxo",
  "key40": "BnLabxPgu3UANz7645GuyqywbvczZrJGBJZoc8FCidVnxNCefSfTP9V99kGG5fB6cpW5FT5tT6KXq493baQKFLA",
  "key41": "2m2h4uMiknR6pNfmGxTzguDtukE7kRBxWj5KP3Xsv6K2womCuCFZmYn4Meh8HYMnMiEYqtoPMgL6kVrB6dutmbf9",
  "key42": "3qKgxrXudCemhuNCMDXxEprp2UjTKiLD4izorCEdaJXi6nCRaGrcV2RsGpjwifgssuNhjPoYtCwhCNKeqMV4D18Q",
  "key43": "xoFZaCvQhWTpqJs9vY9rXQT2tukSqXzyEQmz2AzWJH9D7j6PF3jU9ZJQiEfCCLUCBrFXTAmLmNyZyneRQNk3HW7",
  "key44": "3PLTvfUdQKiBSYYLtyZ8C88EhKJ8VWtwoR5WXZpU3YuzJHqfmUgqQMoe559QRu36pBiBA1WMsZwvyPTqaVXfdWoV",
  "key45": "49jTVPYyEXE6adTgsHv86FeFKkFuGV47GVYAuRtLiJuKmqyNQipKkUdWKm5He54NLcVWJTCr2GJ3pbGUK7mk1V4a",
  "key46": "j3mqn3nkSGxNzKXRNcwvdQKqRXFaoMhugTXpbJXeGw92MexGkAdWGkqYADtH7AW8PgXxQLFrXjcAiYYtdTnz3cQ",
  "key47": "5CC1oUdCG584dcjnMzk9t7byLzhURYrmv5bvcoahdFVdMYaKstKYEuoqU33swXaS3Lc51WyuHJArXDufuLewkprp",
  "key48": "35GUT6tR7r1DNosjf7Q7nQtFyqY5HpakxYDKFwXEKSYPTr3pbASS2DNuRjQ7NEYMZBeLMxzFAkbY6kodT5G8wfBR",
  "key49": "5rAL5FPJgDznbHJ33qy6nWFhUJ5JFFLNkibzCGaQJW8TF7ztZap2mamJKJFNxS8E15st915MeE29Rzpbh2DHMkvo"
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
