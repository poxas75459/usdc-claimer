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
    "4mpNVZwHZDgSQ84GPSYBgrBUy2aqXTm7QKevwjYCsmgH2x1Ztm5ZErwi2L2pQKgELN1idcTx3c72mwsPjKTS1nsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xnsQZ3KU8a9cyX3MniWhT7Qest9XAmCko39bhjvyzTnms7tZRXR8dnTkjnJTEe9FHw7PneVd7imxcorZNkgMqub",
  "key1": "3UgJZpzmm7MNYWf3bEmQhx2HYsaoqqae8pedsgkeEZXtzDkAiixF781UB6CWFpFusJENS1KpMDU72EqhQJHxtqif",
  "key2": "2YfDs7VdtrTSuuwiNfeDfpet4YDgtwywBwQc1RfqhG4MVM49oiNL1LE5ErXHcidwCFYdXBgCbFpxPgoXUJUhJEay",
  "key3": "CXsGv2JzxtLJa3PrxW5VE6fcRmhDVae5U7TuMZsWBUz3nzAcCoKsJFDCcshgTn76Ntntmo2w1GEmmYzXmU1Qbix",
  "key4": "4UBFtNtYxKHGAAGk8aciuXGHQ9b3iCPAjQsiUgy5kTwPaaPhP9uwY9erVWTcwFrZ3WeWhkNBM4W8veYa4RdMJMab",
  "key5": "9XPZD5bDMqsGkErCVR14FjnL7WaLja3piNsKwaKnrzYhKVVbxY36A9fuYEuLqt1fHR3h3ap4tbMmYZrMpdWbMTd",
  "key6": "4n2P7sV3DXsMiYH4R4mcoHdQZtGxWohK7K5cn3VRneeLm28BCJo1SGDZK3zbjxCWTaZPHhoQMK7FXBwW94GuE4Jr",
  "key7": "4yrB16JibqgsqfowvrKuDcKvDseFZvWGbsxodRzx556BgK8HjNSeYXSvkqhESVUwf9ooGZDbM1krwUBu1j7BnZrW",
  "key8": "2Bqers7y3hToKQ62K3xt6YjZ8LLsNXYi3sUEvz582aaXwCqAS3yz2p4JTCydKjQiJtUVPn9YNuDzxZitevoXEwrd",
  "key9": "3oKiWaqaQ8PURahHhnyADYb9nJQZK8Yyjg4F8ZJxUmMGjH4ZJXSiV2EfsEqnq6f2z45b6Hgxaj2NQWR8p9QiYFQs",
  "key10": "4JWwtjTwpkqtY4GwygHrN9rdCj6a5NmqgEawpdvx6vkznE6VDz1AzQxM2PsrXPP8Roc6naefBL9YzzSQXwjUzpX5",
  "key11": "3AYoLNCYhBe64npMiGj6dnP1EfbGRitcpMMLhWCV5zvmq3j5ounPhdPEEaUYPJUnBS52FHbUsNDDmriGFpDzCQmF",
  "key12": "5ueczHosyBPC3XVXnZ4GqpERixERH7xE6F7xS3Pdjhcre3xMeWg9j1X6tLcWVsaDkQVxNBHmUV5bDeze8esou2b5",
  "key13": "2MHkygCwa6pdT2YeMJvi1Tffxy7cYp636YvdVRknaPcQPXgAoDu6yjW8X6QwTAurgakzhUQdKdBUUdq4SXzCoSdw",
  "key14": "4SmKdyY5oR67AcWqgriTZ2tjgtiTGYu8vNAMM1kVWZhgKkPLe1MwRUoEYrxkpBn1Xzq94gbf63xAuCvck4brzfmR",
  "key15": "3gRDN5Ey8nmWTVuvhvpbyDnvq7CQWVxXd1fP52Lfw7QCxcJJmzyCGq2T3jnKDFJqEtxR2ainkD2bUGGVm2iK44av",
  "key16": "4wHiuWvKYqo3Cw6ZT95WSnYATKGKptzGYTZhno55sjdbQXsADdNVFv93R56ggMiS1xwaWbau6mnDYZtAcrMd2hv7",
  "key17": "WjBvCkQGooqdWPYV1H32Bb2RDCBU2zxXuYjCbFSSC67wVnCGGvVN8NrE5ij5CrtkbaQ1BwRVfEDmRTXuZqWRE8w",
  "key18": "2druNcTQ4uzagCF44GRhyTTnfQgbotDry4qAPZ7ViHzdFyybSoBK2A986cr1QKE5yXv8L2MDpvueyPyK6iwk5n7B",
  "key19": "39j4QCUZvh1HnPDG16fJRiZ1eVfTaPN715B2eQoxZp6SP11Egi62VYANfHxpYBUTzChsVE8M4Dod27ufmuAg3ifj",
  "key20": "3fjJthaFdgEfHfE6TSvgtCTzut86ERYXnyHUmsaoKmJovAzJh8zdMoNByfvAKEtUSzXD5zRH7BdYwF6u7L3cELFT",
  "key21": "61y83NdcrtacgiEvG1x5cCrW6Lb6jN8pnzBxt69PT3PDhz1SkZ2poXiUTxbhzhbFaojC5C657CoDtbdTftYJeJJ3",
  "key22": "65G4pRWvUq3HcPCX7Y15g8x6WZbmqhCHx2tuiEQLXDdfY7djdSDe2ToyCJYju1i1HS6pJvheo1mMa4DXMRZdDm2F",
  "key23": "3YVJ6EPsvNGxVLrTWZeXWKUdqKFpYMQXP6uEug6dBB5poyx3Vuvn6hoqsrmbpZCeYBei9CiA1YWo3biuQer9fnrL",
  "key24": "45c5d4QdUWzJTiVv97fW7M2PoR96xibuxg6wQZae7uMtj1dcY3JrNWLNhPEZoXfXKNJGczk6217MzLqikTS3TnRH",
  "key25": "4eRBq7sSRhjCgva2usBjNsWFaXyoCAiZncsRdcHuiesAmp6gct5ihTmAGsdXA2ZndoNhMbJCLenakzsTPcfadjfM",
  "key26": "2qSC5w8HozHai1XwUvmyhkJNyCfA6Jbo1wJGqapioPNK1cXdNF8pfXjTxUmfuZSS5wxoeRKWHfuD5n7btYCDvHJF",
  "key27": "5i92tmK17o3j1a5thL5FpmcqMdPbaqJC9Acb8oH8rKGniP651zXAWAoncw6MAKKXyVhycMv5dtnp2yKo65ygwSyE",
  "key28": "4CcFmFaPsWWWMrixNGXT8bgZPo87mr861GFbBdAvhzVNDFSMMsnaqYKZCjKCTKo9WaiwVtNJ1xPLpJtL71d4xdXr",
  "key29": "2qbY6Zc9hzDxVqArDVFnSKoyYBFtddeyaUBtrprYt2rjiz9QM2S2JB4zV1ydMqSR4P4y1tG9wLkMXpJZ7u1RHNkv",
  "key30": "3uhxJuA3Bo5mRvtGEqHqi13WyrC2RkDutVsP9aLsjQsjbVmeh2xRkJ84Z5wS9itFT1Gy74xi2dmsAHvrk1ipq3Nh",
  "key31": "4kPHT6WRtavjqSuth7Zuz1D48h54RX71v7q8WfYYfmYvooysY9G5aLVAQ4HXzwzKkEN7bNLgry7FCopk6gfvXyRp",
  "key32": "58BXfckTfkkZ3x3YG4LNjYLXFXS5Guxc2Mkym7cWNEGiAHmvRjamUhN7NonPtXWPZhHPbHZKRY2sDqcLETvXoekS",
  "key33": "5C28EDh3PFdM37i2hGPwWcUfz5xjHU5caFyfzmj6ogLsm6VDMznfjCS7FjfqhKStavBw7ohVo5jrQCTft6JUk9iR",
  "key34": "47ZubSc9UCMYC8QnHWmn7fLJmjCycNi7L5AUcMejXsfiRijxNUNiGTNjQWqi6u5P334yaMqNjQLjqfT9xeupeXUq",
  "key35": "nNTGKMgRZaiBh2MwjJWPQgf3ypR5PG5A6gn7gBMGhf4PMP96fraNA5mWcA1UrkbKphw9p4BRqXjeiHh3pYtxhGi",
  "key36": "3y66dVS1ZzwBWu6ctnLqBwDp9fzHDva5k4FWbv8bVqGRHpS2dUWo3h1P2KnwGWPQuHX33U17FqBdySBptyY3YVLM",
  "key37": "67YyVN38oEkGXTaXPjwv5ix1Jcva2cwhZH6zNGNS9WuA3HjnFXct2f398SeZQvncstM9MCVtnUowKqncfMqArqoR",
  "key38": "3nH2myfoPsLFo2SquPYNdd4quTzfX8u2qtuxBLgJCC1bBJHFaXyrp1xCzZrpwrModEzAh7idJYbseCNZcnH2pr3J",
  "key39": "3sNswx9E3V57SUQSQAxaMmGveMr1VYd4FTCxK4mDTwPjycmy1Gcsoa2Nka5Lca984gBB7G8SWZrT6M3cxRyjTt3t",
  "key40": "5KeA88r6geAF4dx7C3dN7Ki6TzdG7rnvQb7RtG1oMckzw7jhDirDKWkK6aLc37GBqP1uVKXtmnNVovBzhupsVoYe",
  "key41": "2Uya7T5Ki4HuPvpoKRbwErsWUwQ2LHHmVvjAhP7jqfcDqpcL8LJxUtHT56pHcf7aBBNiQXUppKK6JNb9u6Y9YL1j",
  "key42": "4nx4hPFGjbLNKLmQJdaGuANZ8veSK9BLhXryfHCPQaHLWpNYTJKApM2Do64buJXKWZDBUXZVohXBCFGzbsk4c8am"
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
