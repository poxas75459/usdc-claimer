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
    "2BzpXLcsnu1kynTd13UHbDmaufqaCzYdUe5VghCAR7344u4vybTSK8ZF9YtaA6keuS1ghwoTr1gEc2StWQG7ieGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cixcaGUm9azEaVwDQmRUTQoTUp4DKhbVRdkyooJuK7y7FXLtnANvPvuCLNDQBSnTe87XKaitGNfS9iJXjvd7aeC",
  "key1": "3mFZ1mtLjGuMePigGb4LNz2SwiUbkr1s3CLojq3ddqmqcRNiY9m1z68TPC3iHN2rygWLXKtPSVFDkM3e76Hm4gBa",
  "key2": "5AJvoBci8x9HrqDmhCmb4J2vZE81V3sAH3FTV3yZewjCiHhiBx8dj2WUzaPxdmKNB1pLsKTnK9iexPoBPErh94gW",
  "key3": "5U5fAEjzGjoXJcrgGLyYcgcsXY3dYkR6ysfP7TLhH4Aj43CKg1brdxVzRYa5c39uKtBG3RvmdZ8eKBNKFGCh7BMs",
  "key4": "5kYFHCmBHqWBFV8LHWqJ3ir9Tp8QypMWD2E2ybKiCzM2aMnoGSLiQQowXUibnqjQScFT6MooPKbMF9nPDvLEANnt",
  "key5": "344aWa7DVT8LStCfzPEedoskfjz7665PboKUeivR64mN6G3eahxvmPF3a2txmcaGb6A8d6FySkmidLRhdedrNWE2",
  "key6": "3UVXYkMDwFU77kojgsm5S5wr7YJr9ec9vof15B6Kfs6PgkEtn8duDPdtHFAh5JdkqLYtDkDMkDdZsYDKvGpTdq8q",
  "key7": "5quqCuaUpquhDPo3cEhiTEcrD53NnUW13pbcVk99k79F4v752WAhkTYP7EvC5xh8PbYXD2BNQwUo2fDPvPDgrEzs",
  "key8": "4JZFyCA7You4yYF4Wtw1vWdkBqFqNTiYKiRiRDfUhfmcVuWdSLkvXHmVVgFSptMjgmfPfPjdFPWhVoiNEtoAPSiT",
  "key9": "4zmhFhNw5khpyavNFcii5N6oDHKoDR2fVF9UNFxKpiy1BpW7AAGb3NENJEuTuM8XvKYKPeLcZpmy9gEbwgG85G1p",
  "key10": "3tepTRa3taMBVDJQYRtTyhXnXRT1Wc1jP5xE53CwCdc4a4NYndnzWrH3EUckopHd4Vk6kpSsPYETdXVm8bUsHpHg",
  "key11": "5G5JVAhSWZvDUS1nmMixfUhcSfdupkisJJK4ockFzXTyD6hdh42pijPvRuyYeoNqxNcoP45vnJYhacw11z38EPZF",
  "key12": "5DRnrkbsa1oZL3z7XRDTESDP35oKCc8Q9BWTEE3thuUQ3qCGQcEYHcJCxYCRpMtPyeZroMK1atQFAqvju4w7HedJ",
  "key13": "Z7NC27zxUtFe7jVC5QGFLDwfiY3kiojMEBJUqUKGSodHCTVMkb1zs99GoxFgvnHRu9pXLEzbcvHn8aKfpRbNeKf",
  "key14": "2jDma7rC2jEBX5Vpuz5vPG6ztVeyXc6DzjPzYR4vHeRYrpQhS7NUkGhbKpyFmqvjUtkQ7aSB7z6iaf2n8BybiSPy",
  "key15": "4eksnNXqL8MLTntD44xv8B15EHJNkxHYdwQ4pyGAVuswHaLbnHX5KCJTmgtdXvcXMgvCZQ8JzHaAbVSa9XKUUbwC",
  "key16": "2QB4zpp9yQiBbwN4P1oCH2ga6wmFoFJdaWCmZSghTchmZNU3HyjvsCf4voZNANvBaTgrJMFBMZGHPi1hR6oFjRwp",
  "key17": "229BwaH6MfTJtLzC68JAvxQcFCWNh6ynnCzue35paYHUaLcDABEpHqRo6eK7bFYUCDi4XAeWxnTG4vB8VaE4kXCU",
  "key18": "5qRSRriECUYkaXkCgT1MHumEKBA4f68sF296gkUrvqV9bKo1M6QzERCtHsAZDV4Pud99z45m4cDzZ2J8Rx4jdtw9",
  "key19": "41w35Jvt7sB61NzKFmHD6b53WpFGbFK4b97jVRc9FiqBTsaviYQBnkheVa6v9wER9eZcv6EFhESZvWffniNYSoUf",
  "key20": "56icGqwSoocsfd64jP9utWg7kZKv6k8b8x6JwLHTU4CjTK7wUnHtTXyjJJCEswHRjKc81UsGoQXomcE2dhL9GVxT",
  "key21": "2AFxqHNNgN13Ab4UrcTsjkSm4tfkFQeL17t5oyzz3L77ciFDyRdvBnXLGWqSYaCvpghbsKZoTsyP6Fbu4T57u7j1",
  "key22": "5zu9w9H69fj3ycBmcLSxu4DmhQMMnaPh6RrQUfzv7WvENPtebP3gbwWgMkgXijBEtyQbmNs7Audt5rHtVmXWv9WT",
  "key23": "4ZbW9TRizBZA4sSHuC7BBEsyVeExD1CpEhqnWgBXv5EeokeyZP1tuwD3PHnv3RDhfpDpadreqo87LPTpULD3nvJL",
  "key24": "3UW5QMe5n5PWoBrcDiuuAFLLBYiT8gvKvpmNYpQjaDSwMej3URWx2MipaNdZwX88xg5Q8gi47LbnFnDPoogDTXpQ",
  "key25": "LpghNoZLARxh6hdwxvYFauLNTmeCcKUTjFykkLGgJ7rsBtSGyCjBE7AZKgEuNRhpmbxHNAKKTz5xE1epN2z6EtY",
  "key26": "4dWP2GQh55jbKrtt6dfwaJCqBwrrvz2C48gCkuw1KjEzAhWNh2cngfJ2XsE5RBWpikJSkjajWfYzFVasvEpk3Rt4",
  "key27": "9UmnMDeyXVQ3SGSFghePcgRYzJCGmRxesomZnP26b7dpVmSTogEnTJdQsBhJV61NCoh5i6NtXWzCrkVkXrShVoq",
  "key28": "2yNDYQv3KdvJfktHQ2PmcvVbNeiVUBJ2Hsu1EdQK6gCvC7s7qEuMMgFizRoEuMXqDLWF4mWLjrZSQ9xMxdmxGSQg",
  "key29": "qz18wronDQ7AAWEGiA4QbvDvhBhfJCFCwJAcRhk4sHoLf684utzBsqq4t36zwoKL1aap2ac48aJ5YHmyGyfSFH5",
  "key30": "QeTUfS7SzZpAgrkFCdLoD6rzeTfPqTVySKFyS3gMojXDxmvFd2wBzrStTd3kv4HssyBUKd9AhFzgty2g3y3NVEB"
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
