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
    "3Xk7JeaNpKAY9F4xDJ3r4XFBTMJX2Tg2uUam7hq1rCUZXaQZr7GHWd5eEreYdkW6Y3E9Bo36hH3fvtMCM2Y3xYkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PEmMr5R9VSLmD3DDuQ77T86gWGgWMCwUV8F3mDdWd3qNMLuSsuX1wh6cB3wV2Rsat4VxUYxm8oZk6gbEph4sMe7",
  "key1": "juy2rQBV8Aw8dZaXFWFMgqC8fkfWWabUJWM8ZLzjerDXAVR9mpPnLNnHcwunRM3BcRBMFrfutC81mS53zSTFkNc",
  "key2": "2NDVz55FP1GnhvREcU5jXSeWnGCDfaMZVakPcbdzvvoWNe4AxsYmVt4GctZrfvjbJU5YyfeYt8c8x1pMLrbgzP8L",
  "key3": "52eUjYjFc4Yg68NukcxBadK4eG7KEZxroa6vGQGjFZNWba9M616KQWn6zPn8scDwx1TkYXCxNcqtp449YHvdwvvo",
  "key4": "2zDzevD6DPp9aJNef3aMEwqRXpCam5NEXBcjfyaM34Bf2MfWFPnp87Xx5bFkgmGPTVXWkeSqAyECubD8aCYii5Vi",
  "key5": "4WxBrYkR452Uavbj9TR9pznyM3V6yRRQNLeNEtg5EHonS6HoNkVRB2nEEPzMULucF5u3P5sGih8PrWCj7PrGmZp4",
  "key6": "5YzyeFhsEH3K4rJuXpwYqAkw7hBZm7izrgN3vMYg7a3UYs9EoEJg5MJVM25XDAH8sq6Cx9B2DAjkbVEqAS7tkziY",
  "key7": "tz7z86nN4bL8DGhyP7Yd5MX1GT7iiDtDSqty7mjXhfPufxEzRBaMG9ReYbtQBoQ7UDqpxyKkQxreWfpCYwEY23X",
  "key8": "4XUECAEdsZm4CfGD71QcrU6S7tsppkqWBaabsjuTQwcPVvfGdvEYuxgHZ6D7JCHEJ7Va3fTciE2TEWCEKdgcq42Q",
  "key9": "3naaTNdbPQs5jzSTrn87LK2VCojk8pNkjg9sEGupB5evhsab3J5AAct6ZbaMUsqRXjWdq9UvrVNuDGDhKr8PD1JN",
  "key10": "5TGadrTXHG5cD6TmLHkKmvYfpkGz9UL8QBa4WdHNyn2Qb3ii2XmfQ25YvpcYzgqU1HUAM2cpR7VHvkvhSBweUfsk",
  "key11": "2jzVTysrEDF3x2APq5VC9gYSmP9vr3BsDAszkyzAr84vVxGKJgBChW1Kdz8judCQJs4NF8pLVZoMRvJjDNaPvCtu",
  "key12": "4nyFUGnf1fSWeDCkwKPSWNU1mpdEseyLrsRtZP5xPYzp6x7XiLDbRTKuvr9t8m6dUnhiEaRgZT5jcE1idYXrC398",
  "key13": "3hb7LRgJtz6VjwJKdYLMnnq5FFrPvyDGgMA9LkRA1TcwmsHinxDKJLJ9myCc1X961oWZcwXiQMcGxTQbtNEB4oyg",
  "key14": "4PjcGLpfVDRQYECcwdEZoMnhN1H599FjgTBsEoWcccZttnamKd5pt7HDYEg3TJAB59NjpH2RbANrGa2fUWGybEHJ",
  "key15": "2zLq7Bkbrey8agxaGLbY521Wh9JRuVbjmRP6dsvgMSvtu3gSXMtmfhEdBK8an43ae63GBBdURoKosrY9Bc4yuwms",
  "key16": "d1n1iyLooMtiY38J49ggVYR2PDRrscx4j9ug9ofq6FckPZ6KTDdSdUG1uLbwrMFNPDruux6WKLFY4TYqzCdrGhT",
  "key17": "5mWHnezESUs5TijKGGYUEbichjadwHGBkwzTe73irFZYXVRXRQ5wffHq8n2Wtpe8XprdkxQ2K4UNWFbiSKXgxKXM",
  "key18": "67QaWewVbr1yg15M8TJsuBMxPZvfU5YwjwDWEb126v2rVo3UXQxLQyd2nFQEnfpE9eJScutdaRh5LDmgSJ13LGSA",
  "key19": "5EeP3yzudkRwXYnyfcSTRUq3spsT6QFntKAgAu3NbKoZKK5tgWod7PuiUktQEq6SF7siLvJZSBywG3QEzVdr8LD8",
  "key20": "4MQ3AEtL1F2HCU4nas922R1RpmTv9KFngL1nuNkQCqKD8svuznXqv7isbUmMpL5y75TBzUx34oQm59ZCBswpzrU6",
  "key21": "4D1mULLBn554hC8FiZDn7cjUV4TEd5AJv8mqWFTJU9H4ue7V5uuEMyPzxqZonqZUxZGkvqUvmTJrBdZwRMQMoY8v",
  "key22": "g58SAtr99a7CrJ9GnkPnQ1Ar7sJcaKnyZBcME9kmkTJvQgnvWs6PmFYdiWfXQF9gxTK2CPEuubxqHogomyGSiL8",
  "key23": "UZ2sXHztpRdFM3sBPV6v7UZ3JSAs8mUp6soJUEWTMqswAYPELaVmTHSYbyWeDM3ZSe6Ch7F6WbSkBQ4ceT6V4gz",
  "key24": "4Su3WKrqQgmUwbGDcWnK4uVnhD6kxTgmAdedCnpnAPUNDNrNUGEj9AEQvhKuq7me3BgKDLufk95zBHtGhtTNn4id",
  "key25": "5y9zptsuyUxv71oFovQsfZzzi6FAzkbRBmnrmdAknUzu1DWVbUXSi1E6Lysbk24Tn7tmtmbyUVmD6Ea6QKTfzcki",
  "key26": "53AmvzePTK4BspA6tYMjYenAX7xm8YiagapUibMc4mH4TUSmdncCzTqj7kPQnC6aq3RdrSR2SLBnWdezFGSJwCnz",
  "key27": "EQeCNXVNF9B7W1ycWfk9axuyCzNebkDwbqqdjZX9gtDTwH8ALdY2G9vreoDMi371DE8B36VEm8LhZGEH6TAKMhV",
  "key28": "3WJ2nZpsbyxDEDZwPAxaX8sbh8wsQGWczcjCSENC8ck1UcHMVBHtRFNR8q4qju6AuaTfJy8ZarCx4XTnqtiMNrFY",
  "key29": "5fEjvb2XeTdUmSFrrVPNWYxE3ASAWPZnjeXbH7P7wHamchJzdTvRnfL4fpWrfke6nFNgRKywA6MevbxnGeZhnjNy",
  "key30": "3jsHr2LJKJS4LmhneNa5TmDLJWo6FCtatgad4hjZcs6QBuXmkTgqbGKKChTq7nRL9ZnXeSrjiQLVewDcHRyF5QnJ",
  "key31": "4cTeAK1YSVbPP6A7A2KR5fNwRagD38FbCNMtbtJtwh9um2yZ56MdWruNF1gd3MqdA6zjozhr79hvbXK1KfGUrfcw",
  "key32": "4jHKGzX7jwsw78xAdPNedyxC4TB8nnwHRG1E5T8uqykTeQJ3Va2D6QhDSaQGsSEbbRRzUJYSz9JBoQmVMJpT8yKs",
  "key33": "3vT8igK6WPUJESGszKJP6sC6Cm1J6BrpQwLoZmYS8J52YJy6DhBJkjyEtzcS4pSZdbKmq3E9JUE8c6KdV2jKdC2a",
  "key34": "5Mp1LN6RCWiqtcTivGbiQsyWm8cH7bj8y2mhpup9Q9hq657C9LLCF9pLYzKUKgETx76x9rGGLus42oqHM4SK7iBq",
  "key35": "5YabcivkWczj84YZ2X36kBE5LGF7u5wgpFYSpTLqYTSgCm8jGzyY2SVdYQF9EQ1qS1Et1cXqDVyEcZznL2uWx91v",
  "key36": "2eHtGNgbFv4ZqeSU6ktV3uU9KYVHhM4afxMFJGeZTWvYm7jFqUuYZQZp3HfSQx2PrESwPCwKy1BYvQ3sfosTVArs",
  "key37": "3KsdzhV1uf7mkPbo8ZhR4TAruTCQYzeSwDZAMHSxqnZBjVMpbuPQYCxaRRo99Udvbs5eUcWmwMwggVs57yKPhbAm",
  "key38": "yHvwKGjfTBHaA3WTMNj6kFayzDd33i1fQaqDjtuz9pNWnmafoFg1ho9Wuc47HcTSdnyHwyq7GsBSFUSiujm2261",
  "key39": "2B7Ka59HRHS6YF6ZgBA58Si34mWupbABNJCxc5S13j57vQsKH1tzn9M7Pcj4tjML9YbKn1jrzC3tK5vX3dzQKV2w",
  "key40": "4GZ11jXhiAPD7FbcGMCnQvziNx4PJMce9tcD5mgA8FNk7wSh4xaRAKCvfYPYChbfX3V3XsK1FzwzeysBRYGh6SQ5",
  "key41": "3JfytJqQeF6Ut4akokjTtQ4jeL6bZDL8P6ieqH4izuRge6gPLFBUWyqWmzm5DL5t2TJUnKBDF9XDsyh2RjNp3MgW",
  "key42": "458QStbJWchCPxg8zbNPGtAuQyLMcGRwnq37ouhu9PukRXiSsxZ6TFvKFhWZiutEhRAax5eiKpqALwq85L1jUed6",
  "key43": "5ANeJabYmHgiQYurG6UYAddbwxCYPfyFZMmaPvanYCN5Duczifg3xYXqUNwwS1WKGBnU9kCmwGHsGFjUjNYDxgCE",
  "key44": "3Ld6Q3AcYanZzRyvzvhpkFZXVS32Lr19mDZ5g711yn8fW3tfQMzH49dqKypUGtSkyafV5raSFRaAowpC4bWKEKPq",
  "key45": "2CCVbRRUnzftKkXqXz4tJj6KoLxwPadPb4UMGtd7sKVDeXPFTRviZVk3E93LQrEHUMcWCSW91jTRCjdx55Y5nfQu",
  "key46": "61q88KpKp9zaD3kxZjvCANzkPXjNKqfsrsRHxySNgvnVhpHVtte7p8P9tiSdp3q7mwfpbo7Vg1eHtximxDqhUXqh"
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
