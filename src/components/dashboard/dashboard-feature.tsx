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
    "418KjKLtZfFrBi4BxTBng2j19X5aqmaN2QsoFCRRQjFSYU2apLCntst4aMro2B2MwtKX9NfpSwsfspYF17wrsuzx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9EpRT5n6uvFsZzTvLSwoPVnCDTfBRkFTN5dKHPhdZiaCfZMKbgbkhTJhVLUn539EbeafH7AnGSVfmqgu2GFePE",
  "key1": "5z6RNfzJ7PVRgSQ854Hc2gH12c6jRQtHor2k18bT3H861oG2q6EsPwEuSRihuzw83p4Zr79JhjmhiGYhqdCGZEnq",
  "key2": "nNDB8KUQ3JcHFUmVhBSTbUfxf9TzT6keGFc22PEgK18mMU7nxtiyEgrGARJwzkdzkEnhqJ5EqUKxtsWGZ98Jnz7",
  "key3": "5wE9Swa41Zi7cuA1N1nKyv8C9Pg2Njk9GhYzqMCPVoksrsP3U7BQgh79E8YU6WPR3c26LPKb1sV919qY2UbwD9Gs",
  "key4": "4AxzmCdLaQK4VkwdjDdJA74gVMKv6n2fEQ5DaGafRVoLKLhom3ni4GNBrxWohsd8RibfLk6iKzuwjoCzZRgsfvUj",
  "key5": "3VxqSzqeMC3JKLqUv5bVbjRxcT9xyn4Dj4djcH6rPf5HFtd7RhTFmdPn6vy5bY3RGVtyK9HzQji1kteLB2wbrg3i",
  "key6": "31NePhMr9vjZYZmaktkJ9JaQc3mxZm2oTz9RoPetYmCZS21mc8AHWLHEyBNxedPALf6foZfeT6YkMDRUgEmBaCZv",
  "key7": "4Hzbm6h223ETBMznDyXUWJ9Fc3HCXfXDUmXnDjSz7BFTYaRDx64mKRjdyMkR8VBaUThFUqiX4FyXj62aejApELuF",
  "key8": "Qkqn7NDxu5dbygGUkMuqx6mNpN21hAWoaEMrCLMMgs499oywgtczHG7dZP2SFsc1EMVWanPhRNA2XBhKT4TCWyp",
  "key9": "4bHLaTjY51T191xcaaUc2r1pbbuUooGdjnERtEpBm9atmoWdTQrwFYhaPq9Qn8JDrn7N3rsFgkyhojQPLSxh1Ane",
  "key10": "bAMwTGYZWKX6DQZP2fYs1m9XVD72qVGQ7EhTsekLvGNmgkTtnX92D9299nD6JWzbi1kch83UvJ8nZ3hJHfAxAMZ",
  "key11": "3gUrbWrwCZEJhdrEMqWtrPGHe4qPdEoGBjwYvAuYQbfWtthk7jYRFCY4CJTcCbyupAjn71LBpprHKk2JfTw1v4pq",
  "key12": "5YAvSvxuw2h1awJavCGYMBxU7MjHsTZvmxmLrLmBje3CX7aUXyJGuCH51WDiD2SBA8gBJLRnNqxSqN585Ah1K5R3",
  "key13": "6Bi12MP4QNE7M852UXvMyeEmfJuSC2m29y2F4MY8DFV3ZLZAFFB23eJhTDtv4vc8hRsdxP2Gdc6XmbssDX1MGhu",
  "key14": "3SkrZneJbPTCy72cbtJXFEorLqZ1UMNfPXBJBbWzKKFWYwXxXT4wt6hmNLuK79xLtdqacEzLcJiNUzga4kBRLsAL",
  "key15": "yiCnqvMnnX4qxBwQgJmxST4fJoMRsjwRE6mtEpjfFGNjfgAvW7Niot4pV9zc8KHUyWg9MCm2BDUF2ug4rL3C5VS",
  "key16": "3iPDGKZXsoxH4FoEgUHVYxKKHiq3V4CBbqxsQz44V2kCWG8Sosbvr9WYiah1d8Fpr6xZqbrezJkoHYxNZiL6nyhG",
  "key17": "3tPaxuD2jXDt9FBeicU8TfwHzr9ays6VXi6jNwHyicXCYPGPCf7neqdV9q9axwewVRv44T1ZJhStHuRN4R34Bmo2",
  "key18": "3XjRDyLRKYXKdx1rKMNJ7Xe1DJsNxk3vmdE1db2vBrStZ5Gv9Kw8c8GLZJQArbgWeUjLdp7A9utWb8sGFESsFjAG",
  "key19": "4U18eZH7rmWGG3YNJmXCVLeBfrxcTd6FAe1Eh5xXNJe2oJz3t69Yqzx27K33MzQt9nHDJrcdtPYCCbmkXw71VnBy",
  "key20": "3S4eQjfNYPqasjesKGZpLbx8q5RZK1KiWTQ2xDgpMjgdNuyis2nS92uqfw4adAbK7czhNBRxuaPjrWGTgLGQBxtM",
  "key21": "3qe6q6GASMPBDCXCAtfu3u1DsJYsm85YW2DRPXyXUYASfqJRXN7sH1Zrzxp6GmbULXgQFaoGjzPTyfrjs6Mbesnn",
  "key22": "592sBPtw6A3qMBEhfcPs8Q7Hursw7HSeJqNTRrsjvGGZvCMSYuChFDsQZZdAdZBfAbXGfTULHcmW8JNror9kw1wA",
  "key23": "3rQoKGRQzXnrBJjPDb21bNuChzkVR9MDx8LWDeTPpDJvsyHgLXgXKJVi6c5Zdb7ZEgFR2guDqoHVNmZKiJ3vthjq",
  "key24": "odhgMo39ooaj3wDmJq5pYknQRisauyAYjjfch6hQxK3pJXwcca8pJRMQdNvz6SKwgFhc9QNHB6pzMGbkTdqiqG1",
  "key25": "4Cs9FwcDzZwKC3w55nnC7sx4veWfucB6umWYTYv9DjDBzetKActsZatFEutjcah8cmXi4oXLEYr2KD6dBCNzrwch",
  "key26": "5AjHb2NBpr3vDEX5w1SQyc5Z12YDYFSZ5Y6m2vJAFriRn8XvrqDEHcerk8BYrfpebCncxgBQFKNMTyAfCRFf76Dh",
  "key27": "2mnVZfdfvm1cSgWDFE8NhVjKeBTWFmJAu6NCZJqisivjzcpQJCnNFeSLMWcw5XrA4NzyqZRLgNxoF9ZKwNe1atBr",
  "key28": "5p27F7Vtj5eez9r4fhLLREYWkYnSXZaxSXdfza55pD4BCeNme7sYYcAm4kwz5UK7iGwYaKHDYRts26xHMytakrmZ",
  "key29": "4QHbcnBVCSLB2EXK4L3UGdJPGnuvknFnEhVk9cChwHg62pAdsBnPzde7ymjTBVZZVTCmxeiGVj4AnnHioZy8voVL",
  "key30": "2ZCjq2gG5a4pz3dsAaH7ckLfFRe81Q12hpLKNxNiB6hGYeWXEB3R1wLLGcFTqRqh17dLneSZTngR5FckAq28jgkZ",
  "key31": "4EfSFHLihcmq4PmYXDzMaSkDNb2Ajm4D1PKqE9d9sNu5SJGNPLsckdo8oS1YibYAVfjoUzf5BKSVTLJuy4gSyUxn",
  "key32": "3t9KwnvDWn4jLsdz1rwq73RSLb9Yb13EQuWg62njf7XTYVdoBcj1Ke8cybDGykLbG4uFNuLPfQpi2SZTWdRx92qq",
  "key33": "38hYa2TBES1rcLtmrB6zxBHBV3KaYr2dbmowsY683uczffTCD7itAtc5t82hBAjq1ouJepvYV6u4xLDWEHsJFKEx",
  "key34": "2GnaDEQheVbo13fbU6h7XJkWx4pdapvVmEcE8SpjTSCRXSNcqtqMeD2vYvdWgmqSYTysjPWQyzCWfdBgjiPtFUYf",
  "key35": "3oshfqGM4CWhFw7Qk9PkdnHVzTD1K58RMSWvYcrAnsnPXDqHgYaEqhLgNzGYAzUAtpqb4KaYVE3epkTuxS1CtvDz",
  "key36": "43wRdKPWkMeYa5KuUtSnggckYid5WJASaJoc44qvWzdpasFnm695ViW9aAZW3woMynBp4Q1wL3uHu8en16wirPDx",
  "key37": "mpXzrwE7tRTCLvN8uM588uYjnb7XmbiTMDfJjdMAS8zbiMZ8ype3RYnMupN3Wph5YM7X1uaxfyYBACHNCefnzQq",
  "key38": "2tuKv1D4ZvHNWUHP7UCqXFTFnKwuMoYUNsS4Yu7RNXVGuPi2Y2Ygpnyw1wnH5gtw2DpAFpG4UfLMTFSM4ZiY7T9K",
  "key39": "2gwpzup7ukeHzuuxJaAiG1JPUtrEi35dYj4WB49XcE148HkJortXhpxK3GYdDKEViCd3YWn3Zbb48PyrduMokuHW",
  "key40": "2PWGjaXukBWeUmZhbSJQ7NFpsAGCK6gabKD9YKjwaTigR2gpTo2d2qZHK31d8wT6TrUiPXjAH43u4LyVi8zMZ8L3",
  "key41": "2vW1q3rvhd3kYvMqwwzWTS9ntSnBn1AjguFwuKrfDtpBzZ5AzEeUNG1zSxCt6bRyrsDH8qstVvmRGz1LGmqNWHLR",
  "key42": "3x5j5DSuJprgXUzip1ENiS1f4T2e9YD69b9VzoAshRXWBugqMjz2X182R7AagAJjm2yjRPeCgxiXLij5NrbvW9Re",
  "key43": "BhXQ6Rp5wydWzTj6t9fNjZbULfr7GZAccEdPKyQJNfnsQAC53SVNKoXCX4LjfHzuANv3KWEFwx3USCjZDF1nqdp",
  "key44": "3xQuud9bv3JPUWgi4wxeQ2UcrRWYDXueZcqDne41KNsnXfo1tEBQjriDgCPhdgSnXKMQajZpYQ4yMfNmLcwzTmPL",
  "key45": "3brFYswMTZ9xTsasjzwXzRuojckjQv6UtFCHP1ZuoPefgtf6kVjf88EHbGNZKXQPvHxanxdi3wCZ45ivxbkJpEuL",
  "key46": "2TihhRE2BTep9yAcNdLq9NNiqCnqPbMygj7LaTtPwXLF31K8oibHx6PcmFqGJBQkmHjTkV4WXAs7CJvX6BS8PrkZ",
  "key47": "3BNSG5tRiqJvpJBRCH3XNVx7KjRx4CVKFW3fYSme4yK3b4aXvCuzHyPyLnpMoNbnPcL8iQDBQK8eG6teDasiFn8v",
  "key48": "GDDTMGcToS7PEm7xm8Ma7hRJ3KzgXdh5cK7C4XxgBJXLHx274w9dstZeTBFbWGcSD8vvWUJTWaWVQEk7435ez8i"
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
