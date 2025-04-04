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
    "3SrqCiT1ew9HmTp5abhSRJA9aAmaewz5mtA2rRBfq8eDqEwHRpSgcLmHLof1KncgPzj7pAG8x8yqNfsf1MUpgWBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZdZXo8XhUKWcw1FHksNLn7UYvDzWaogaDc82H4LseyawCLG7yV1KL45SRgjVuhk1EMFEUwgsZPjs4RFy3ym2Wv",
  "key1": "5gYwwwmxQhJUNbTtyu4TVqhGYTYFTagjzfkjHD9297UoDc175FgYSAQii5Jf8K7NuEkGM81PB2dFCNmEnEe5TErg",
  "key2": "4NnBW5XpcGf1fuuV62F1ACvfwpoXqJL1r6PdeQkpXw6eWwEeCvTXZnnMeSBK7iTCBwJqHY5poJGbspQJWBsF17N1",
  "key3": "3DMqMVzYHW9hsPDeUpo4iyt7Ft4pFjCHVTZEPQmzW3GdVzK81cwxDugExjga4BT87xoePNQDW5gMGEbvoeXf5UVb",
  "key4": "5wnDCMAnyXP6BS2tJQkDUFSzFaGDtLfaknFHvi8HTBPhfKUF8TQMmcJXaTpWQXJw5AdLB4HiTeMBSGXfcYyA7P4y",
  "key5": "4CbhW8TBo1G48keQxDWVZ127JBwhTwcfNvHcsP271fC9utgERhTJE89Tyo9WipyD1CCPQ5hBPeBEN81FCm9ycxUd",
  "key6": "63bfKB7XpBEGdXK75DfbUDimLBnEHn9ruMcNf1dJMfapdr9vpMdW7TeqZ9bGVKEDomGbwJKm6dCjEDrdAGhUiD5Z",
  "key7": "3qNQ5FzNo6BWdwi96n214PwrczHfgsHiidbkuP6U9fP7WMMnh5Fp8rDwfMrJwsus31mk4iHfz2Lx1bxNo9z4UcmV",
  "key8": "26B388hNvxYzxoRCFgjjAKyiPmjhEPKRvE82MCug7WgjneE1chmfqXeXZAWF7Srvjjh3RHcfvqtG3T5rK2q3kyx9",
  "key9": "37Gcq1C6Anew6h1w5UMFuHG1vMMJZ7AMYZFVjzPwYcuUrZcQA2nBbh3AY6gYzp7QGqsCfeCXV4Jtq3YjHKLAw1ce",
  "key10": "65YJfbLW8n3jUpbYeSg9euuVhskpGrTguoWV2StnYp5xrjvFAdLct2pPTFdfTNXWNz9XJy1pZUVatL1oJ4XYVZd9",
  "key11": "5z6SmVDcWwXQt1CWCxE3KwPqHmjWwS3s26MuLxausBq1uS4uVo1jtBxZoAztc39pwh9unS4AG4ghLgPMTDyZpYeC",
  "key12": "2rZBHUrJ8UUoD66vExQkffvtgyALWYaSa2x4FPHaqbPiNLYWTbKWxK1eTgPKwyRDnqzDw4z9pNCyJ7onUqFk4CTt",
  "key13": "26LxFTKN9mRrKTo5xccCur61ZoNSWp2MRgaaj1UyKagFMAF8ZXdwfG3DLqZNT8efgyMFYhwpghFdGT2HD82hvbDt",
  "key14": "2RMkNH4jzJ8vWGT7i9AVFN8V5tcePmLSVcBKckQXRDFLSqY2V7tM9z4Ta4f4CEMVQhvnnWNeLHmtAsSUtooPn5No",
  "key15": "4SCodsAqAK8L5pHxnqg221XAKa1obWgc74ka3nYnmMYeyjoekqSyZ7C9fm5n37GbHUWjNmMCu26jSupnzJo5N95b",
  "key16": "5YmZ38i5C5LBr9gMswGvtsAAwS84gPxTrZzTtK6ed42svAongdTJMUUzYs9ziNgUCKbAg4AigceZwYVuXxLFM4E6",
  "key17": "2VqEH2JrsnGkMNJCv4aVCWtYnGESZy2hSFZ21JVycSKcdo5Mb7P5iLi7PRtDSZg8LS5N7e2aphm6qs9jNjAiLJxV",
  "key18": "1tJrTtGu9TJ2uqqHdHC2iAe5Leh9UNZjy4zT8Hssj6xQHJNMArXw48TbaF1S2V4fufv4WAbMBSDiYqxeRFBrqCy",
  "key19": "4FEp8wZtyG9dWCr1Yqgn4fPg9ijMJ3GpUzQ9orzE8PR6CUfMR43RuMREzbdZjPonmhRmiCGsKDov6T2zSEH5bdhg",
  "key20": "2BVB6h7QhadWJvPuKR1YEptMUYb3XoqncxKaRCD2ZDvcWFAgfbfhCn1cesnzNV3xQ9KijEqik1hBmqxWr3XnvCLd",
  "key21": "5kc2FfFps5vj986jLUv9LV9DmgkAtv55xm67USxafwRSM4zdrHCzPnpcJsScWWHuarhGut9bWAJ5Q83PM1VpFsZk",
  "key22": "5zi1mKXspBR7YXEjiJeW796HBLbm8zUp1iMk8yekagaCwxqijgHbmub1WPxXeCAGWyotRCB2DH5TuJknp5hoYdDq",
  "key23": "3SGoxejsWoAc6FEhyyfdw57SbewCp716KUkmqtUPENM4tvYRhH1piZ9GbTkVX7sxEb4jkNBevokznrvv5DZj7MFb",
  "key24": "4PPmY4RFHekRXzcMkW5LdXxpy6dJZezar8k1idi2A7ZQ5DZtsqhwCYFDPY2do1brrXUs9wNdDyDQePrTsQ2xkRiv",
  "key25": "2243AWB9nUJGT9wvxURuhKdxQjJFYnnFgcH8zUQoE5xP92GYKnMxmrPRUhfBy3Ed9tjcfwtMQReM9fA4iuP2y8q5",
  "key26": "2XfgYauxu4DndPLFZsvGAXDhHHnv5ZZCAZRLpJmfA3sRNLEg8KBz2kHwGGKbaMKfDVZYEcX6fZm1MxCvqgVrZn8f",
  "key27": "2wutqLRBfyK9J9NVrBv7Cd2Fh4U2BWDc8EfBF5RnVHr9qpjEpZScn5WJw62dvpppnrk4jur6FMtCgzJSDY5Kr2i6",
  "key28": "wfGH2GBW7ZnVCTHAcRbsKZRkckfpSFCe94eU8fWULATGyWkyS1kkMoDps7jRCJNgkaJ2VrJnrtpeudasapAiuBj",
  "key29": "4LqhwETreUAsWF4r4uQS7b4Jo8vj6HULotnrU9HK62pD9FREqbr4gpYs1LVc48aj4XVNGkNT7EGqbKdk58PQkDU5",
  "key30": "4FeVDKZjNzJbavMS95NxA77KmQWMghcX3t85XUAk9rLyT7esuttTEj5YbiZEvzcVVBR2n1Mev653sgsL3sMSvTgV",
  "key31": "1TivA11vpFiqt7PCqVW95U4QpqedGvVcXT4V1r7ubuEpjQpZuhJrFMcPzqC9o3BG7gtDyijXjtDYzWZ8V8ueNow",
  "key32": "Z8iFZKipG9EFgeYXG8RFUah5oFCSFLNFocLAXJDPFSq37eN6rTGmQPxD1qpeoS5on3taZpVCPhNgrBqQpgctQB7",
  "key33": "43iRk9s2VdJPtQgZ3Un21azyamWDfGrPTTYECXczyGNYGCov19qTati3E5dfVV7LQFbjhrpRK8mrUagyhwUZMmqG",
  "key34": "63yLYYzxGpsiip9XNgV9zMgLQG6Wt3CBSZ9d5AgU6F8uV3Apcphd8DJzyd75t6Rdgb4trzQ6KxiZUJorLZzXyx3b",
  "key35": "5TtAdMfGCPmcEjJCM7AT5z3GJRpuQbHM6EUpertWk6c7xBn7JwV6DEiZUwqEMfNgRaTQE2VhZ1s6pAZMKbfg7UQR",
  "key36": "dPXJtrHc3dJF6Q1kg5kuPD59mne8tdvhNrbs9z9ggL11duBsCyUV27gA1JbmBxpKJns79WdcRPtA4PAStTN7kNK",
  "key37": "3r5XbLKY3C8ssfRGwAaMX8DRsF4cWLrxa1RUHmtJTC2vv5pteK3a9Uzquptd39AR5T8wkdHLLzyPuSR5P5ZkdMSg",
  "key38": "3WhcLeptmTfxSzo67vj3pwnvw2QBx7oiEEa21zGcYRUuC44zLxbebv482koiHq87QXGsNjdJPfchyjFGJ5dMGSKa",
  "key39": "5CRoChYoPZBhUsnwcRo8DcyoushswtfnGFCUhbFvJnTyr8rhRLEiG5ZWs2Pn3oyAkMvh555PekXxiTtLxVDAv1w4",
  "key40": "3krsj8L4sBq6QB9XE3yZVjzPnd1UqgeQf5qScYg4FpMDqP5RvWWNXMvYPidF16SM67EPzZYwo4E3eueFvNqfLUdL"
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
