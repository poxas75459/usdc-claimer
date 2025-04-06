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
    "2aw8imZxfa5KVgtakYAbn7fWnuRjnAeCEdWcwWq9Kfz12LwsHxHfAtFFwmxkpyfw5kmTtkbQsQMyq1vwShQyuNPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NxqxhRcQPvPjjT85Sc8XWXaoAXBPUMRzw1nnr8XGvDNj3QWFkjHEXwH7FPCgwuXMuuyc5XM5pBDjUj4sL5MMesq",
  "key1": "CReqKbMs3RXBmQvKvyx471cR3jWXsiM8LFREyxgD6rjknCBmrZfR9k5NweeNmUE4HJt9c5qdN9BGCFhz2s7nDkp",
  "key2": "5LZyYCmr8Wed3ypFFmsf6PGGEtMaXJYfR3C3W22jgJarywobhaPi25EwAMgVP3DDpSm8Dq9uUuhWwN9XqadZniB",
  "key3": "2KpK7MjTL7JwAieMwMAkhnaJzbYZc7hprmurhrHzmeiX87CNMkp6HFhSoRFxNGpLKqBSj4rYeB1bxzgC9t5n4YFo",
  "key4": "FT9YKq8VBzfJQJbS6HDKoeLEhG7krHxzBJrSbEStFfg6rm1uKeUaGby96bfxVtUPTGYHpAcAKKbuijXLZbEdvAs",
  "key5": "4rZo29RGTGXwovy3V2sdEZNGjkr6Hza2Rb8QcUn89FDnMfJv8GEhTZr6dNu1iHveD3uwbtQzB9iBPGyVVXq3DPzx",
  "key6": "57MSmj8Y4nWeABPU4RDpeJrWBbNkiS22jMR7CM5npMZi49GniQHUZQi7yRiZ6ZJBLdDeEar9hut2EGMBQ5ZsPPhE",
  "key7": "2QdT7kM1ZTDxjPCm2GfzfaFRuVXrRWWnPr8ft8nHLti91oYM7vvh6R3xkP9PDfMicDaiTmKKaKBLUX8pcMcf1DXa",
  "key8": "3nGFbQ8StWiCbPTL4JQBbf1iLdmq9YKLRaqvxGUMrmYpnTTYAEbjsgVc1zKx3KgNJhbk4MtC9WDjRLj9U3THdhjw",
  "key9": "66599NTedhQhDoaGrsVL1NVtEDccjjaHyAHmA7eYtbx18UXALxE6eVC4XqvHcnzGH9USopZv6vU9xn2rbmTSYuvk",
  "key10": "hpYDD91WkaDxioXo9nZPGRgxyNciVFBKJyGp1dyHMXemm7Rv4yRQcBZuRqRhVEeyqyShQ53F9fdC7fG2LShTmRR",
  "key11": "2cWkqgXiR4rfvggRNAV6rPjdEXhX7f4NaqjaTAZp8EoBuvWq4gjmFp2oKMhUU6prbbe2qWemgppH5FZC8GoUnQxV",
  "key12": "3niFp8fx5RHpPU1a39rAR1FnQYKBrb5C5HCpzYfc8MiUpEqYaQbwduu5aYUTpTwND8DR4iquirMMn8UqBL5bM6iJ",
  "key13": "424vLPwURsW2tjqDHTQbbKsrP4mggJtYQtYsk73yS4Kh9i6Y51ousM2mavjma3CJnYBb46NgcvfLsDcBPFoRjkeh",
  "key14": "5zfarLdrbCamx2UVRNZx7YetB1YSSYb8NKxA3rK27mtasUK91hr9hSMRG6N9ZkNUx5NWek7T1Z1JoTv4EWutdHTW",
  "key15": "kJM2ZpeebumZG2Xjna2W2xUKHZGozEmxe2tnTacBvJwJ8rmNoopndwWDVaRwiNRoZ8puasPU52ikwZzx2wqD48Z",
  "key16": "348aMqffVBG1FjXQjK2gwWvFsYpfBSiRERUYHfp3GeefsHsFHH1u8A5NDzjpzGGW3kE9GaioPV4cRE7FvadgDALm",
  "key17": "3BnwoWS5ijoYE354sVe4nEpDXqQaZqTqfMft3BzsU66fYbyrT7YfsjVfy6aBYZAoTVayTrk1C6DzPqX11aXcqSQX",
  "key18": "4DBDhkDBe3q42nVMMkh4snrGiwPnHm37JueaXzgzbxQjUubYZSXsitF54jkxuLJUfag9FSGhppE25NB8tsNB4Db2",
  "key19": "41VfBETBprYuwEN6Cng5o1vnDJUHrbYBuxbuTnT3LNY9SupUx8LnMCQM8WQVo5A7wmc8Lm4NosXks7pqayiWy8aK",
  "key20": "4jLeZHrEfez9HX4X3Z6zcbMhDqXvh2eVHZCVZXeE7LACSUvmuNxGCvmkdzhQE2Pmiqnkez75EZ6dcGSX44FVhv81",
  "key21": "4UQAHFS5SYZsDTcBEtbB72G1mScSMrgVRnCpNtairfECkHSPRjNcPBh6GX2AUYPZAe2wkxGjSwkW7uFoTZWtmFTt",
  "key22": "Wsw7U6iJj9m4irBqBTbDy2u2oSrrwVCd8p9uwRffHf5dtUEbEYxfuw5LH2168eFq7cM1yFyXh9oLm62Tvbt9X7d",
  "key23": "3vs5Yj5JdQh1ApKeRwtzkEfAavEVko2ShpYkjGeHAr3usA1L3q78hJ4qNAK6CTVmG7s1cRc5ixDTHV9jU5TJdcV3",
  "key24": "4sp7SFkp3V411DnBXhp1JqY5xhvfmeujrZsrctFVirVh4aEL2mtuqurSgS6yFwdrpNYSerJ7qRQpQaCtUKT8jXbz",
  "key25": "4wHWYapwdLCiLgibK6Q83ajvxHSao8R8WEToGa6Qm3vr3XoQTLgaU2ZEdBPKHVp2oH6kNuJ5qrpEzsT26vAPTfGo",
  "key26": "3HYUNpn1KYPvRJfvGb48AxLmYhEaDVEHapRLR5iNZUPqHRmKovZoWs1gP2fAYM7TDoYoRKgBMuCVPWpPkCKuk83y",
  "key27": "2xjcxXJiYbD7KhLw6utU5uBhYXkDZM7V747WSzzp35Wxw9fyMh8gP4tnyQvyyjpfxmYLn4zfh1ESb7sV9wXjZgFq",
  "key28": "3MWzREiYkGB7RsgddNkjSpFFz2cjXpyY9xqhtpQyJF8YhN3QeWjAUSMH3LDUJuBoJu534ohga3ZT5N9Xsvb7ADU3",
  "key29": "5TtMUNoHdhiFyqjhDpoeT15pjn6TpNzXWiiFqmvGHgANfFbkxreLU4G3SisMPrQi6AqbhKixFFYkcpy8XXiEhMGE",
  "key30": "3cGCE21gM1dYihD9EsC9PUgKBoieZonJ9EpneFgEnqsT7wnGHFYDM8d6oXf5izhWkKtHHYxt25NH91e8seLG7jBT",
  "key31": "33bE9vd5uUT5T1GHycStz3JmoL39uV7A4Py4BwgYXBdqpxVAXV9mtMvViKj8SdRk1gsVPnbsGFdLxoBB3GBgPjXU",
  "key32": "5mM6Qa7HzjAwDx2ZGnH3dDVcYVhKc4AAf5dFQcYTM3QGWn65fD2xYAtYxKHy2XQcDVdhBRXhtHc6XnoZSAurPkiG",
  "key33": "4oPehnFG5NHmpqisY1inbzwf7pHwQfVk1anzfyt9NnYiogt7KMKxnE3dkYB7T4MB2oXnkViTqpx8TkNcmYKTeL1X",
  "key34": "62qewhdb6QF2otyUa9DKieCDMCsun6oKDCHquccqScmcHDgixLfcExFxen784pXTeYBTitfq6m5gA8LCUPLzRxbs",
  "key35": "4oEbMRT7h4r41uzTmvNMFhFXDBViiWFRQZiKSRLmHe43uiLo3qeJ87yG5amdyMXrJVxuEiSS49zWKoguVnUsvcVe",
  "key36": "2R4bXh5sBvKgcCoBHBmdBNJXV1MCk4KXZNSVdQtsJ9TLfYpzAY6rqs2YGrHaawtsHGoDkGM1RF9SdfD5fFefrNzT",
  "key37": "f4kYDJxco8kJiPm9matB7S8iMEPynLmSqoggc7Nvpo83BEmHXskjomdpGhj8FrJmB8TUXBmUtCec8Rp5KQEHoR6",
  "key38": "3Ec9Sc9kGGAhPEaMD31HwUUMBQC8fwB6PEyYM9R7sZx3U9L2RuUG4rp5C2SpHo3vxuaHmXkvKmNi7mhuirm4D8e",
  "key39": "26WfvUzkPXVKvaZGEMrjsZD3nDUaqgxEgdgP31DituSGkvxHPNQA8XmAt5EQaBh272LSgUDFZCJNtMjm5U7x5e6v",
  "key40": "4GqozE6KKxyTdYsrqD92Svv9oEmQVdSwpLc7NZ4AEfjD929vtbhyD8kmYKwJK1YrVE2omxoB3fbKHrp5QwHV9BXy",
  "key41": "ja1Wf5cTj8Q18vcx2EJ32Fm549VmhffDywd6KWsCb2KSeDzGf7GjJk9UZTZi3hUfA6DRD2CMKXnW8qXQvkoJtjo"
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
