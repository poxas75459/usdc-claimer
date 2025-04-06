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
    "3vmRBPzHPo2zhX8o8zcnzTkYtG42GAkYm86R6WqvN7QLHNbFHX2nPEDrfd6TZAMWqmS61Hq7LTfGMkmterQJXzHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SdAnp6Dgv9DT6QuJBaTPjw6bJJkgYLdY5o9DCdf6VMe3JL5U3SWUkdevt4U3WhJ9quXRch7WDEgV7pNzpPzFDNC",
  "key1": "4qfB7pGdMwxSa5SwssY1dJEUWbUt6gCV491tYP1zc2JSFcKxA9YPsH4xZhFaMjiRfwN1MepLgMxyHDdZ1MBtxNyY",
  "key2": "2EbjfmnzJQE7RxTQw4dhJmYGCZhCXhYHbKnoimWqrP34E1ASHdDG3RYY4qvSVnM51CAWUjDGXm9MnzzjNEv5YAq2",
  "key3": "2XaBuGUT1BEdfgy4QKfUyg8NXW6JbqwjbSaqd5sA4J5cR3cSjm23DAwNSm7cYMnrh25DpKsXPNKSkkmWNF8iffhj",
  "key4": "46nS4JNHRmpXfsDBrWAe8ddHJ9TqsJJ7PBSDf2B1gpatgw8ehtitdHuFMqtfjqwFKvxrFMj5xkvKbe7SCpbpSw32",
  "key5": "2e4hX1R8ZqDebFNnQSe5LLBXPJ6DfdUpr6WSDAdXk8W441qGSAg1USznxKceB59XDPeeUwbMFLiSE1UDjr1PRVZG",
  "key6": "67A6TF4pBXXro4MnpPwDmhPXBMEiUqvLahW7CWf54eHXXpgoBdtgn8AHYQCinYjUQMv6FDcnN3Po4rDduENTwQSa",
  "key7": "5f95gJK3YZXdvVFkECg1UsBd7AUSGZf8LSftwPghcuN7BvwxEKFuWt8hKV8efQGFUxGCZtpb7FpYhPpbMaLXbHke",
  "key8": "neW2zD5yk4WZhCy7bVVYSVBretBdZhn3GycquRXrNSRhiiLiSxNtkZjULKAMGh8psSqosQvyHBmchJuhV3FSk3n",
  "key9": "2K8rTt9UWYJYPYXqvt4VgXVMpNzJ5Zifyr9Zdaw8azMZKubBvEHFTjw69CxbmWMBdC4v7qqTqUMEm8zzWkLWPp16",
  "key10": "5ryfnU2DaZBCThHUwBGXKriSLb9LWwnybACHiv2Y95s3dDgrmK7XAJFQey4Wz9oHdk542Pjf77G6ti2fa7QyQYEh",
  "key11": "5t9mwzh5HozaJXbDzgixtaHc74MwHV48gQ1pWXeNGQVHdeLBC4mfXFpxQ27EK78ZN9kb9Hyp1Ko26UQLZdAiCpsK",
  "key12": "FDQTDRsGEt7im9Ekxn5EdTMMXAR5YfqVF5Zvyv5sRCq1iStHxN2EHYiHMNAEKr6Znn5pjmAcfbYAMcGjPq3udru",
  "key13": "5VbKjkAiEVWU6eQJo6kGP9tp6ctqoXWF9hGzcU5bPCe14pCrAQ1erbVzYmFJa4YBbGt2uzjmptWDWMA7fi85ErQx",
  "key14": "58gnxdPrUzAJY52btz66NJ64Vk6asVEYs5bsrbiBwQnuYRafL1MwLnJPiddSR6F96eBRyc5zZStqKcNM7YMEbGZY",
  "key15": "3pz3NwwPfrWeuZFMsaG2M2dwRmwtGTYvwbkQdY9DoYiUhPLwbkGRzxv7t4eQxCfbzdQQirB9bDVW1wtRHBwEAyLr",
  "key16": "2eZxJkM2UW5Eg1Z6ftoy8977eXoji86CM7mC8tjJioK9GM4Nx2jjey9P3VyQMqm7MudTpsooEqw7r9DGBuvigxNw",
  "key17": "5igzJyXVnGPd4Waq5RBsymrZkzySvKgYqFzUBMqHftaDsUN9JCN2nNmBcazqfvHBAxHg74mgi4htF7E7RKoty6bi",
  "key18": "3MLHwUE95gPnBKyJthwW75rm4JSCF1RmCDx4QyNJ51QxxXMQeETf9KzRaXUepzNWaucNd4x6qrPoVoXN7SMqjAXR",
  "key19": "ENTzMtvvSwAP72qsGsywNcLmtdwyvPNBaTPbsx8UcGonjodDvHUVp448yU177dpwWCJAREGLwdK9AS4ErBMFu5C",
  "key20": "2myHQGeAuNXrsrPVmqMiF93vySv1GmSzFkdZrDTiLiEg1k2NZQanyctZ8oAsASQrnEvn5MnSHnv3S8Ne5jGH5LtG",
  "key21": "h5bZahgL1HeWh1Wpw2qiouh91pii94agQV3wzyrBAfemyYwxZc2rrH7F2APYTtrP4oGAKL1QAabjN4FqtZ9Hndf",
  "key22": "2DyjoLcKmtp38WV4twwYZSjDHCVANTGbSnvwvGGERC5NjUxHY1yiKDSnpHZBPtgrxxD2GpBKeuUfgREtBsfYprMY",
  "key23": "4BhvzGRNJ6i9VRseYABt1JyK8yg9Mn6cdaNtfbSZoka2jdAPML6S2cPkGGRBPvh4Yjx6r5TPBPRwnSYHxYYNYRq3",
  "key24": "5QizaDgHfBVU92HnZmVpjYCeW4r4Qh6pjzFrL9RkNLa4YvAVnSqqDPTP1hMBgAodqm1axZ8oymd1SAyo7VUzKCrC",
  "key25": "3QN8tG1NnDfrhoEC1GRN28gHkGFUNtbfA3DvkGXnFggDyo93eHAwmQDyPJ5w1xTuTE9ep7EhAuNR1C5S9G6DqQZ5",
  "key26": "4Wcve6BYs8tKedQbUvv7pxYYQ7njgssXkaHQYMyZyDyQCp6hTNFAhYdjtqLHrCGnuUMJkimi3N96sxjnozdA19w8",
  "key27": "4LYzp1DDKRJz5g7yebSjRQo7Tftyk9jKUZBFVKTe21C2TqVMUnaypgBhjtSPE46VRnnZmjJAJhQXnv5JLMKhkmnb",
  "key28": "2JRHUb5Gg44ACBqBoMRsxapUczE1uJBXzK8RpSCjXgV68qWswzRFXkTNjXxEs8BFBENvnNip3pWyUtKSH4X1KghR",
  "key29": "2dMfD8WWb5jXpqkbQpebC7ikAbZnEZph1U7g95ZVfL6G3qjaBBXpVEJC9VoNKEM7zRTpdHA8w5hu3CxXmcTvRXbM",
  "key30": "5NgyPqPMTH5E9XVq2cb1SXjBKTyyzDokDb5zLpT3gZgpNetqNFTjcHAyk8DbdL8Rm5C48F51NBD5bNTzxUkNZymr",
  "key31": "51ZPFnD8fFqCKxm4M78i9ztgVSLN5VC58U1cb4crjaVDgCNxZAqqyiboynsdcaEY1aDUyHNLELm7LgNStkw79QZj",
  "key32": "5R79awjfaaEPTjuiZ7uBGv7nrGCPxe7jvQaBuFRmUwgFNrbKt8WKdvUis6vUfRwJ5MRNfgqVUwzEcRQCf6CHFSyV",
  "key33": "256cB23B4WtsTsVemHXY9fjjewUywM7femYtmtqfg9gCodoaFLAmt3EgaYjcGanw1gDkNSXDyQ2uFJK2p5pxBD1v",
  "key34": "YkhbfPUy5PJmsxFFTDvrmsEmXctxehChMNrqXgEYFWt7Ehn2Cm9n8THAK2ZRZD8sHucCkJf2HoJqK28Si552M7T",
  "key35": "gckM22tqbScoTPDDVeABfj4q3ArXHjqLaDMCauVNz71Lbfn1kZb7b4AJBuuCfsHW9ht6fdC6Qa2V4eCRe9H7KMR",
  "key36": "4XBCKFceMX5eY8ijkGVQUW4hfZQecU3LMSdaqPbTmUFtuiXWBhyAyLcsFwFCfEmPhYsmKf6y19tnCti8KG2nSDZz",
  "key37": "2vjqUh2PfXfGYxaRn3ZgLwY5RFvYGbZUZfv2sMbLM53vvwh89XwGKybqZgNbCKNSQveSvLeCYFgfq5X3BxXiQs2k",
  "key38": "4P59AMPxutTf4v5aD2Ssf8wMwzTYGeS86FHnzi8PzGo5ffpha9ycj35tYzuuMvAKR84qss59UEfXKEiMiPVhLYBJ",
  "key39": "4fDpp7kYs9oMBKLosnUFAbiJL5gHVKhqG8cZFEC47BKvUaA1xej1Hwr81ZWoxn81d6PuNkzLCnLF6N2MCnJ4zXNe",
  "key40": "Ajk7uRAtCnG43BEC7ih9rPDH59UZLH6aXVag2x5LBHFJ6TTv4SY5RqjMjHm2bXeDcJYKSkwPXkQycd3Wz6HFFuo",
  "key41": "3gmN7qK44NmwM6QLJbqGjgZmrFdvAUDdCxNCayWSNDmQhHvwDpsodSp8NhC2tAafkC4sM68CG9q9YeTgG4LvQcyC",
  "key42": "5yU5NA8qzu4P9weyoUhorF6fu9fpWaoH7PVqC8GYigDSx4wgUrFELJiDwuXfsVEj9UJwGmxiNYF6wSACtASRkr9d",
  "key43": "28wvT2dUDHGewvDmi8G2cx34D1qMEfY8RpC9qRABCC7Pp79JEttDjYx8mCuueG1bG4p8yqmv4qQqdHBaN5PbojPs"
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
