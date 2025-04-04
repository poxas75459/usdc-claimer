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
    "2MfJFrnsnebuM7kK699HjT9opNkLwUKL9M8j5VJHqt7YhjDkNGraaijY4xJahzhjada4JsWcsnJpNYJEsBM4iUxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZUpWD6SXvHa74MozdY4HGPNTN1v9H9KFbXGLRdhM5tvRwWmUCQDVLRcNWb7Sfy3qxa76N8kEmypn4aAZntEse5",
  "key1": "36URk1ZALXQSPmQzR5tZAwvzBbuabcvKZoh4vG7iyNWauvANquuh6cFmi9a3mENaYBvkHFN6VMiVMPZyophDmQZv",
  "key2": "5uFQj2n9E8agvQVeDZH41ZYct6sxM1wckee7rSzna6DkirN8tMyNFZVvdcd4Sbk37vtfUuyUZjdPGqQUj6kYqi77",
  "key3": "4YZbNBJhUWAViveVGawdXjcp7bLdgmYRWPTemrHh55oxt6RoHuRhjUSDqh1toVEFiQeyPvdginrxiT5XS8a3onxy",
  "key4": "4owTqF2C7bLVPddJjPV5V5jo2xvT7h3x3HRQxGDXitGkYBA64b21C2agxR3wQK1LF5hXh8PqqXtemwRTqzVrbB6f",
  "key5": "3EfkKBHwfCdf2CCQs2R1r1V8B1tAVQDzvF5GMpUeihVdDonnkuihhrEjKcDSupY7S2qKPR7qFpgiBtnBun7yz9uj",
  "key6": "6d4p6aokGwL2MYUAhPD7sTDQNQMSYnSJAew594XtbgqyvJZtciJkeC2faccaogwtAWLbTTpQwSuFkMpV7gVCT1B",
  "key7": "26cDKg2inRwpxT1hbhB6Y7Eh5HuULLvhWhiMH72veE5zQHgorYRhEMDQ3QLfCJqe6KRus3Vf3BVupLdfmwx9rxrs",
  "key8": "4JuUqmgDwNXoXHQRCTyagrPWs6JyWQNfs4MPZFf8vbEbhoEwiN58KHdXgpHr1TqhXoN9zRa1FHqzceMnfSbJ55Qj",
  "key9": "61hYZU1fLuagDArinpEEZZTjhWxY5MJn4CqqPj2K6bJHi93dww8oi8rzZBnMgLo16rk4a5N7cVZzncxueDhDu1ud",
  "key10": "BxnGTUcDe3yD8rhbmW9kPqTifLQrKEx3XhHYnGSV7ah44uWCbHDkFXFSqHP5T6bCQwNg4c6kZLkLXwyiGsWNk25",
  "key11": "rGYh7mLq2vUVu3FVyW46FTdDyt1ZxopmGB339UXU1aKsoXsqw7E9WzG2BynUw717Y8m5xCwaM2HoPzC9wrLYmWJ",
  "key12": "3qmai4C4k2wNEgvh76d7qgWKshuyMDMdg45xLTHTHoardE12xubn6y225rMRQbBj8f5Vkjb56n2aW4qzWbMdT8iu",
  "key13": "4e14Q5UVdjL5FD5fcJK4jiuJMmtYf3T47UCUj2BqVnjNDfFaCAUxukZtx8k2ABGnsiLk65FDxwpz3AuVpWXEZCbH",
  "key14": "24aUKkmHvFYkV7MWzs6tDr69eAMTWqqLjCRJrCCoBn3KGVUDaJEobpSL2aEZqZj3dKDGQbP8ircvw29M4rswvAvN",
  "key15": "4c56tPpBJ2jgyEuEgQGJ7Ury8ZQuzeb6PvKUZSdQsvfz6ffUUrqYfTgLskf1Zjm3TKwkxyviHJCuAz2SuH5nnV1A",
  "key16": "d8f8SQnBP833meEsmNuXNL4ZDaMwy1fGQicZptQaZv6dZSrBUungHfn7dDCFxfA7xD4RKckjU9aaKXhkqomhpAK",
  "key17": "drEv9CkCHfnRPoX495Duux2eqbRKCCXgW8RfRUiHRAK8tVJVLtNRTH7NaLWRfUvGtNG7mc6omw9uBnhJT3UzKnk",
  "key18": "4pzEwAuwwYTWznwweHp63ycDyxSqm8GFHcTE5D6kdS7xz123otggiZSwnbjWatvqGoks2r4CGSDXFuVEKbo6u59n",
  "key19": "2WAwryGaPCpdA3Qg5iPbAqSwby4APzMhGaqtN6pbGNnka4Zki5v7z8Zz3urx5HtXaMRYoag9oZR5nfUSMT7XG2Lp",
  "key20": "39DKmhZRurFAhcCo9CNThkFgMJ18DzvdeKzZoxrwjiPTFsPMudDEuoYTTVfmWMRnSn14EcaaWUi7M94jMfzPSExR",
  "key21": "2jcS3Du9Nv4ttVjkAyqWZ3K8ev1iKkL5suvwGPdP69aRsNvCuyNJ84MgXRKkVx9B3uKoeadfgtJKgHuGrM7edwNt",
  "key22": "4dkVFfysdifvJ7cgyKVsmHActmwLFdhoDA5a1KSNvNUXxq3TCfbhPGd4ZqD3p4djrKZoxM7kTQFd4DZAmkmgjr98",
  "key23": "4zVkmgt12jbqS8Tfmp9YfeTexLNnz2xzNi22U6EFRsVqm6up8hqKp425MjMCSeAUBkTcF343vVz6AsyTH5WLMAA5",
  "key24": "GKDvj64TyDW83gHMnRr29aTipWfZakTSLoKeWv2vFqWfqVmNyXPaBzvHQH7bMFxdJx4nDqiboQPQxmQJKnJNist",
  "key25": "47ZoHQj66zx5eFFNEXEwaAeuYAXk3a8U4PD9U9GxtH3od4zopN7jQUam3cYzVRZQ3L6ohoXpqSFgtkcGgS3K3tWX",
  "key26": "4Ypk48FmRRBWRnDRtB2hG2SKfpuxrqmiiKDSxfJHxYbAnei37gQx5sYJQcgnM1nLhJn9d3yw9rF9zqk4cNKuDofb",
  "key27": "5XnYtfD2ojtin5mYMogXQZnV4yMXN9GNCXkLwXM2fUYU6wvK9Jor41XzLuYiwYTGRytPvg8kLkWEZPhkJ4ri5jWc",
  "key28": "67AaSZJ6NpBDocFCKfLFfV3f3vLsxD4hGWVewrU72MoUPRnie5BDtYa3mzc3moobbDsKXGsbGe61H3ykhFrhmumW",
  "key29": "5x4qh3NpiG43HKXk5WcEPTJ4Eg3sUr6Mhr4tzGy1mm8GXAoHTVNgmpNKJqdAoVKrtGe8YebgLbmKxMBZQLD5U5jj",
  "key30": "12nTTdPkP7r4Q5qvYMYk6EAN5aEdUR7784KaeHuTSiAp4DvYnqJ1ChfZzq5ULzxhdpeuZtAMYVQbFY5e825jP7N",
  "key31": "rY18VN4sWRJ6HSWosePKrFL2SQ5Yc1CneUziv9hWk5rdBnetMJcKUCd3NTEXJrkiAg6Ca5ZB6wuaMRaoUkdbQ9b",
  "key32": "3TzjjokoRrGjdCfE1ZSJcYYgfWtLU2eZMTzYN9s2v7TrLmKKJNTnoXtjxbQPKSnj9shdNkUNy8a8q1yKcCV32p82",
  "key33": "rTMUzNnya7AF24eSHaZBNusBkvnTArrcwBJVj7nXZ6A8kJFDmt7F6jUcwYpyxCKeMqQL4JTtNtGhVPTcoGskBDa",
  "key34": "4uhj7ERiKCwcp2LY6HQsgvgCdnB1T1NmnGUN1DaJrXFzpG7nFx7mrngazeDt7TdTjP7kAdvB3r9ru5p6xB39ZEnH",
  "key35": "5KEPe2YJVWjYZ7FvY1oVyzKCxnQQbsLkJVmQJZN3DwQ4V7VsdpLf8x1UFkiFthzZd379kHgnJAymCgEzaS1LvqFM",
  "key36": "zVekoYpmxs3X3iW1nW4BJAuhjDRP2kvyrF3UHRzju4762UuWN7aaLe1MCbDTJpnkDtH1avkGFs3E8D4uaYsDopi",
  "key37": "3oSU3863ueTJKzZP6g6xKQvkuT9bpMNYkzNyi5X2KiRseFFF8aznfDkqW8sUCTWknTS4iAPbVkS5ndAxoCifKt8L",
  "key38": "4xsNm3KtpVWp6jNrwapxuAQZDGe6wqVHzaFr11Ye77zNpYnvuqF2xi1vnwV7BPYEgJWZQ9Wznfp1J2K74Bs1CX7h",
  "key39": "332LSHmf9mjVax6B1DUP43tURqWNjXJFRQydrbkAQriX8GyGRmjCoN6kkpRhhSaqCNpfinDa3bCwG6VHQZzxEoJL",
  "key40": "2c1SWfB66ompena6W2c1ksTv19sQDjqnMLycmcDyjAXEJBiydbB2bZRseQesct8bZuU7PHx2NvKjbyV9RFBy6KG1",
  "key41": "xduDnKE6j47238w1qWF2oWh8oupGT8WDWqasEvvpRnJTPVuvERbR8p2Y7T1hvCbD4rvKALxoxW5ujqGJgvoBZoo",
  "key42": "RH7fVsoGidwLQYbj3ovwN26xALipqMhB9GoCwd7n5GaJtnYgiLDHnWt386wmEr9Xz8WNAVwgiaAGDV6WwyNXwxR",
  "key43": "3AQMo7YUSLTGiyA198v9eoy3k2nZq3qkKkSgczMa61DvJdtDWnVEW8J6vjoauBJzQbdG1scwVyNvWCpNTYPgDiVz",
  "key44": "3ghfKcC1GnjRonaz3obR7M9c4GZ7UucXp62paPzNSJPb4UrWZhxVuYs1oR2YRP8ECUKZJ7XKEsM9YMaqLdUGJd2M",
  "key45": "4DhXnqmt4yBr6QjCPG4XMF5AvmwDUhMaLpagNXnEE4RgPgHk1BzJcMz3NQKVSDMMTRU8Ka8oefBugPyH4u8rmiRz",
  "key46": "3Ph6SfPs3LnjNsuw7FgYwbnLwqAd9Ft4jhv3fTEPXeLa2BZ9DMksAGPRyArLGdkCrxp1jMFTcypYxDdrmj634kYF",
  "key47": "2G67cvFs5PhBNivaAzVnnQZxcDj4hugEUF2XpZ1wr5sjdVuBbeB2MeuS2SsSBSDAKWnjw7ARjXvwcSwHrWdbgGxR"
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
