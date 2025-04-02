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
    "2MtHNEiYhAew44sh3qKLsgbcGeEXhegHfTzYASS2PVA4XGGDVwSn29Zr32yXpSNLt43VsUWZLnTh6csDyRBHXPxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9ArLTsPmYHQHGe95gF5TpDjqRGtYpJSYN3fzBF4XPcQES8wewVGDNryS8X8YG5SNPj1SejAkkWDnSVCdwBxo3o",
  "key1": "4MDMzad5srVckcw38wmkzMSjQ6AdN7Pz5jhSCfmQyMKnaWFhKqddkHQthenbkxm9xSUHkLpemk1UGWxqM5hrKWMo",
  "key2": "2jUspJWC4SzGkqroGts9wgkqJHpKYUeH1LGsTs4Z9Gs2bGcFxb1xmZBx28EpP9SBKD818KGwjoDWoySFWD8xvirM",
  "key3": "4NsnCApEq3RXkUEsS4DSsSk9ATKQMWQxMKSUnT4dD7x82KFrRR5RsqNswsZoy4e4P5AAYmiuuLLFWYxTDzQiubjP",
  "key4": "N8qKte2uxjh5UNyScPZJYeKanVeGxepGyc5aC8uG9yPDL6YD7VpX3GqW7uhwkXndxYRWyDqAdLdvNE3SXZP19bK",
  "key5": "nZPY7ciEJjog9cZ6ZXNfLMHubWhDuhTXJJmdYv6qFuBzGz38pKJnizPvtESkTwYLgwhjoyJGXb3s4UKhJ68tUcd",
  "key6": "4Wvd5nXD4PMkjcxYCe3ipiC19xj7HSXKGBb8kxrxFuCy8XwRVUbWZpTxcyPWDGG1Frp5CofVYzhYTMpCKXEBNnQe",
  "key7": "48Wca7GCBR2TSd8GtuQmH4igXoFj1aJiB4o64AmW2escTn4Kjo37FYVmmqAjhidPqHzMCXtrZpEqZbW3fJRrTPAe",
  "key8": "4gd41ZU7wPY4QGKb87qeZnNjMPjSuL3QvxnuWZjzgMvh9vrnkUh9U55hv6xZYjVzysMmouqSZWX84uyz4CMPLYoy",
  "key9": "427UQMS12vVMZECxHijvpKovmsHendBXPq2MnAEzoBE1wuMuEBhwgkPsSNnzShPeyhj4URtYE4iLxZKf4sPKN7uB",
  "key10": "gQvdCqAwfKftBsBJmwRSQW2juBAzmbsqmGk2BaJtwNMN3CTv9odVEhu1MoJqJCHrwY4mqc5FBYTLQzFPXJfopJS",
  "key11": "3esNzoUPoz1ig3W3yxct7ErsFFWxLVvVXJY1BwgS9aV6E1y8idgbfw2mQdL3jaKpeh7SceV7jS8H66xWqjoCTBtJ",
  "key12": "d9adZB7csdYBzGRDi9LLv9f9NtyGfMKmBKppbMCzTHzW7jotxj9rLPr8LWctbTSr16f9Tymr75NAF1Vj1SrGXRq",
  "key13": "4vW9GEaMU77vQzaskfE7EqCLzEVhiBSnd1BwLoj25zfEBY515myqYrcz84mi8YgW5dRopJsX3rjbTEqX35y6GLPa",
  "key14": "5N4e2yRTE2RXJNBNfMrJFATEtXCaFBQjJtWPZ7Rxr1fYwHoXeh52vrusictKCWbjLiS2ppF3XJVKp8xPkfrhTbs9",
  "key15": "4R8hqAZv3nhETsJorbGiop6RyjiYNTmhrm9jy28F8xVMQ2mqGLxifTupJ3Qy1uLh9C7QYPSdjPKE7YBVRtwKBnZd",
  "key16": "4J9gmRWpDkXpT2PnGx7nqWxboizJp3S3wnNeeGvoNA5cJ5FmC983asffvm6VCac1WnKypSG43jwGz6ahzUKnNqvW",
  "key17": "3NywxwXPdv84V1n6at2qiCt1dtMTxQvytLBcmVzEb27SeBuARkXPjGa7BMBc3Wdk8tg4aDwMRyMcpQ4LKJDtD4Gg",
  "key18": "44x7QmMH6kYTTN1yL3tQKsDFbxTPrcJMR9mLt1xMwGAAqJn7ffpxkmLMJ1PUtfVajcHdPygEHujLZKkqirsRADcQ",
  "key19": "3JpzJUarRXJiSQGf8sJYtKp68AbUQUXmj2KuCupuqBPMAiPSwSvML64YYPUQ56cBZLmGraZEhEWgzVPtU24H9J12",
  "key20": "2hDf1obLz3qahvXcywLJ7wkVQGheWRAgwY79sBbj6AY69HpyN2vaJpXFUtbzzFKpxzAiop5hkfq8muR3Tabi1Uu3",
  "key21": "3T9oDYCpMTfPrJ4ZH4wCngHDxJePcRcp5ybGzyCffnPvbvrBk5s3FjQRZLdcXAc5TUo6Xkbe35onxBtm8JaTmHAg",
  "key22": "sgnpzefmXkbmUAHJUVeroedCrGv9KKxAcrPKMJgwVvpq51Vq7crVDYqKV6Z4m47cPSMFMbUyXWG2cHh6rnJeDhP",
  "key23": "367iVWDaxkescL3ZHJGiyJ7g7vjqfAq17iS9f5MHEgyUzz2fP4WAyMHzrqmgK9CLnDqJNTdGxMB4fjidgksHgXJn",
  "key24": "YiqbGSjrYqxFAyBv3PxN3txo6wbf68RcXr28hJYAHXGsMWW7LTHFaz7H6chtCW6AkiW2jey2urs8ZoAvgS2vqw5",
  "key25": "4uuExmfvDXgWdTPcka161EJppVmwPm5ngrqN2NBZLE8D7N1zo5wFQM4zJiCY9wFD5v4HuvMuJMn1cdrNkWMb5bJr",
  "key26": "3U1knPqACM59buVnBjxC6aBXpPiVdazkzGdqyQ6JhpLj2xLoXNgsPRXgwZsndejF9wWfrMFfVERpkhFfbbqMRreH",
  "key27": "5rrADi9g8oJbH2aHXcCk7nzNgTBmdwZgWxBjFEUoX4rr4UMQpA3QocTEcThxg92vZCpy8JGifaScQZ84ntqUfDq8",
  "key28": "4CG8taSA3KUbdGUvaLuXdCV2qk3KKJMfPMXtdN9D7GZDJvm9zux5J976CUPsgazSumAVjvyoS6wwNBHhVDczguVA",
  "key29": "5xh8efZoeYKZjLoGEKgPTjkZr2Fb3jpHwMhMKPu11nP8tFuE2Bjz2Jgyoirov4AVBqaMNwVtPb1fa1K29DAte7eu",
  "key30": "4jAiBMSLx4PJWSnS9rh6wgAhR6qNtH8Eo6t28udzptxVgBFa1YFFh8SmhQdfjBPziptTd47cjGkpSz5WPycqfyH5",
  "key31": "4wgVoUzpjbNUJ1egAHyUaGZay6Rg7iZEbW16tT9EWfuwRctDcDkP97CcQhAMjTxtUmdEQ83BNSpcNhumVneHxwrM",
  "key32": "2aPX12fBDQuWBtUz9D1ufMmG4R5j1uCSiQZrx5rj1NKFmw9jBpssfQkELEXcRCXfjpXf3W9yLEmCAXBKAH9WLjW",
  "key33": "53MrmG5vu9qEay26anFzacCsz8AFzAeh1RRLN6dhZBfcQMEY72Jg3Jumk9UzakWDTrhb3sFcjt2acmUt2oMDWst5",
  "key34": "3ZW3p3ccqJv7mpCRfPgbDnyhaUEDsWEYH8MXRYzvjsLVcNKF96FzLaWF4FscvZUeTNjpC8B7W2TAHF1w8Nv6NsQw"
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
