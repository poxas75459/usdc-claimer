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
    "43fN62R6GEr8ZaZSb36vAPzB9nYmkDDYrJ6MqqLh5nWiSQgpP3WGiDwMDqYdnVGE41m7bfGhdiCS5xaHFyzPuLqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUV7yzKn9CYmEiJVBXpYaZnxkFhoxdekpfuV8qAmRsscSFJZa942dQJ3xWHCAfM9jK5e8qeChSem6NiTkSv9XSR",
  "key1": "4gATrBFqKCJtbReCk9C7Jm97BSydGhzmr69K28YHKHP4zxPQRVkXJeiWqVwxdLKStvqJdoun8hm2HDDtWQYMHgVj",
  "key2": "3qVxBTq9VUZTSeaDhNa7J22fnKSdZRjqguFo4ePeetEfV7GhcGF5nYAgkwtCffpZP3QcFqDMFUM5Ugz33bn7Rwbg",
  "key3": "664cUqLTbis3J6rugKv3KrkTL2zejsjv2cdHWYjzQ7MHd4XAVmFZNBwSRt7w3gPD1faePimrY1nuQf112w2JYguk",
  "key4": "sWPjPgzsygn3WCyKqZnQXZeZPpwGvRryjPJZs2U6dsZHnEhdfYZjMFYy2FVJBDwbLCStpMRJ9AfKLa46eySWzM5",
  "key5": "3hn1wgiXvesTJnMifHz3PXgqYPzLVvi7nQawgS3xTYgkQoQygPVxtpNAbTfpNNSMbLophX1k4Q9Evjkx3qWNpSiH",
  "key6": "NYPuZiVgGk3gAZN88v8UzT1U1QvtP9eW1ptVuKE7sdT1iSUZLCzoYp3YJKjaGrT34y1jfWj4azGCFB59N5z1emB",
  "key7": "2LtzgbD9RtYBxNU7s7DCCq8JJn5RRcHZxERXiNpvC4duxsd6JnUAnYyf2bC7AY2kNdFaHTPxBv4u3AhgRoVMW9S3",
  "key8": "5ucP5YS9trko4mLr5fDR8pYuUfFsdm1jB4Y7rDmGrMf7KUZucp1xb52hUNvS6UdNvJv1xDWcPjE1E5yTg4znKwHg",
  "key9": "4pvBbVo3Mdr7tjgWWqybaBu7KXLxqXrAVVK27Fov6KSm1S362hgpi7gc9G7pve8Pm3fhpC4CM3RDXGoiMYh22RAY",
  "key10": "3SdqW6TtEhKnfN7CQWyeB8TvgveHRx2btyfVzQzRpqq2aqAMJ5cGgQDkZV3rAGpx9sNFbFM2sixiS7xmq48Fv5vw",
  "key11": "2A2RnSuXpkSWYQaHxmgGrhEK42AKcGzD4rGaNkat8uQUFyvWvke45S6taR2NkwmmaF4p2uzgpTNt3uewWwhrf9gb",
  "key12": "ME3TqViVCNtybUbiYmiLVMFv27q5z15ntENKYQrLjYsV3yDknz49Ck3QAJMnrpA8pDgq2RAfZa2jCv2ebiwNhMx",
  "key13": "3sXixhaxbb8nGgnMMs8Dj4aHVzG7LtRBGFijw7FKJTnweqF2FNnrhcVreF56XpMAXyEWA3N2LZttT8TC6JXaDFZa",
  "key14": "2exXXbXkJD2S1pD8YqrexVkapo5wXCkookBFDtEYb8mPe3z44giinN1PuPtNvKVn187sbHELkLJHGpbNu7dv5uDu",
  "key15": "3fbnQHWTmzrRmB1DPHz3TSi9proevb6pt3NtEpHU1cj1nrUSBzY2XCbbt8GTAqjPsUt8gJsVe1TtFXyU7Fagx8J3",
  "key16": "2hMrGAsYpXeuDRwJtZUFW6QpowRKWcSAH9PpNJ7d2SRv7akepUzAFFsmLuM3TTggyfVmK8xDsDWX7y4GVhDPs1gs",
  "key17": "HWMbAFbLW7EpbuWdjnCzZvrahmvAiDGDGaU4hpHnvg8pa1JGMKHd9aTnno4jbiDvPVM1BWk8AtxNXmzG1ZihWeX",
  "key18": "28qWh6z2yzLkxkGPE7cHLvnWxNxfFXN9nQmaeSuRMo7XY1N7aJ5mJNHfzjbVcr4mVzkmrxw1Qr6bLpHsu4SnkyFs",
  "key19": "47Cb1o9CVefohkYUXmv1ECVYp7eJyv6WxvAYiWpgN7PPybAr4LXsX47W4yRwxGBPFc8w1WxeVZp11VgA4f7F8bXT",
  "key20": "4THZnCiNSDs8DwR38V2Lss9hyacRRt3Uz4cKwmsz38Ej47oQifAgJCz5vZihEPYXjQjn5eD3GpAcNyuoDwaiGwrZ",
  "key21": "5YqF3aLRQtMZ5YUfixEXZeuZBRmWj9c7rZ9tcTiVTng6czZ1acMKccoUN16qNTkHLPEpkHQxxehFs2W5p1m1mQ9W",
  "key22": "2baq3NJYC8AEJLNj32mvogooF9rj5ToofiY8wNBo3cRLZxvG6PwkgRhbnM9L497p7sVsN4sDcmemLZLrx7hVsDr4",
  "key23": "RzYz792fk6yLuoW8tSrRaJ1sbEknTnXzVApGPHk4qtBQoy1dbw7z1MYX7yMr4Ns7BwiKbPVtg1azmVMYf2hC1Gy",
  "key24": "2qbgaZ7zNVnCN7PxnMQPfxjSDsH3G8J6pLGWiTHJNDgSqAfMSU3yF2S1UysaomR6XhJoHYzyimg5LZ7XU4qaS7sc",
  "key25": "3VpzqczXLgR5HuvxGuaxndRJf7gaAefFVFJkPoMNMR4J7xFue7bJLpDSkgN1crq71mVdRwEiwgheRUiwdnqYrR8w",
  "key26": "3hzA1hPMa9gwtEVu9avJmgXRghUSJv5T6EyyeKMqEFAfdcfRYiSdghaqUZp1vSBkm2XvJrjBDaeFADRNxYQ4MdDq",
  "key27": "2f4xQUBz2pWad6w42RDZs6mHfc3iygQRpbeSyt5xmhe4wnapMswr9sGe5wkV71ZfpF9dN9MH5C9Na2rrtg8x8be8",
  "key28": "418oVD6jzwJFzogte1r29SkWiw8kRbdVo5E96r25EGqbJeRozaTCbmGMuu5v3HYyR4uCpiJ4aRrtxeMToK73DxEx",
  "key29": "5SMeojMy3LF6Dnuoah1WmWADhTje7haVkNyN8HkQnU4o1AquG6BJXipxCVaA33AstPPTWNrMVj4TiwBE5LAeRAo2",
  "key30": "4xrRLLcBwfyLBazfvtT1rLNMzDL2t4qNLbWSAYF6hdJSBkJDtmmh1Y4V7QHWord3qQjFk9NxncwGHd6BZqqCRHz7",
  "key31": "2mbc48G4v7mADQjtBejFMABcd1tMJm6cGk3EmAdTi1idRZmaZ4gjnDsSaRtfgqxESM4XmSQHpKNz915qQgArkqcj",
  "key32": "3rtU8xTsbbMYifjYbnABxtEwp5VpwRrWwwwcZLoUpPe3XXX8MRG6L9s729fpGcXM2osJ15LZWznyDLtqBc9fu2jD",
  "key33": "2mtKqeNBHosLzSV56ik8wDJfnh8bq19artw16PLMnp65rDRpvcxjnvNmdKxVxzrZVXLePYeuBSC8rFs6ytKDjT4y",
  "key34": "CrU384Bw13J4jK9tyjdExULD57Sr8DnxeN87LPMJo2M6L4BvynuRPGsh5ijzfuLH8YoZsr5mGdVb4X439GA3sZX",
  "key35": "aRctgfRW9AVvpD7BQpFhnRx7o3tVigDqxpcVBWZ3EogUpDzv1wSMHJ6XFYJNXnH5mzaXiNXvYrBBNkoGzGvmCev",
  "key36": "3wTpxpYT8gXnobbdpfgB2eJaqRLEx4aTR6z7iQd5eRLri2mKsu1LcRLEuUo6QE9irJGfxyvJGYN8VNyHCuhdY7qY",
  "key37": "3vUTZqidy1myKBqkFu5mRvx4ujkXWRRETLZLRreBjDoLfC9fwCEdTSpUHD2wP9eqMqnb5rMprnpqUdWfhL8iT2Ud",
  "key38": "4uEKKZuemSmFZqqAmDNAxsCaoLfFYd5oNQBVQ8weFnM8t6CdPKbk2W1vPGAXHep9oYxMZRFVjf74cuzhEZM1sRUG",
  "key39": "ui2MJjRWwFFrPRBXMdfJma9CSgRZmHUPuDG8okpaHhFYPSJhFx35x8N5pfLceiqzwQsNc96g3CMnqzdJQFLS49J",
  "key40": "5r9ukLQYSG8P6ma28Riy2rc4hJ5ZgL3A5QwJ8nYkkkpHwwChAKXhcxy9nCewsFaxuZLATsdMoagh6Gss3HedMBWG",
  "key41": "SsGzTYmB7zQb94nHzhHyMHQRta1bUKAY6jtdk8JCQ5jGj6BGLqMyCVf8iBPa3X1gznPKsKfoFoeSqsxJdBaRJ2o",
  "key42": "5iSwuzUegvEyM8Kv1Nfmcmwn9qpHZDKDzthiyVvWALvdfxxyzaiUEU3kABDnKjTeUpkJdejoPRHHPx9LMgJuCrw5",
  "key43": "xFKUbDMvWVq9RPdhq929RDJist1nhcRVWpHDpegv8S7mVRPPqjLfz6pZJDBnC72hjpDqaTHjShkHtQGic1rvjHD",
  "key44": "3Tvu4jgPVEQKaSB3VcqBdU3JfYB1zKG7wCxoVwnGM6CffVLDwJfbZ57DVCgQTi1xcGhpfeBMy8f3dVJm2AAwBoyx",
  "key45": "5H6HtzJV5KNe7S8pK7cvmrWkf3HQZ3YoWt8XtdNNXhnQ7tjbQQBseHCMgxwaEgCnatfBiY9FFrRqSKRoWDKiasVu",
  "key46": "4Y3J78ckCbjLKwBFQV9BEKsGehWE1AznodTBrsJGGkHxbLs7CHCJvBNpXDky3YHf4K63weCYjnZXymSEJPGD71hq",
  "key47": "3cMTr6T9DN6vjPEK3KUme5GucBtD8dnMtd5Zw3djKuNBDFL6PSZo1DdiFbHTusXj9n9tiFUvfbw6bFbB6jyBhzMM",
  "key48": "2CZMHFiur776t49BSWV3MvugvQhvKGy7q61TRsKTvaxbvM4WSHkd8DZtjYFS5yNHCB5aK3ypdWH6A3CBFQym4bEV"
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
