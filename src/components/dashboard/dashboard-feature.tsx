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
    "gdQPkYM5RzJfaCyxBMm43DUu5WDBbhgsk24hZ2BSpHseAcJXEqQkDMCXiLRGNFATJT19nKBrm4eXiVCu9zwYAQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3VT6trgqnRsPHjZ2Yr6C9idLDJW3Uqm8rZPacbG2VGn94Q8aV273H5C4zrbBR1XrjL8R3fTuiQsYAwN9SsdjEp",
  "key1": "2ci8pqkgABYyRVLM4qwpv311S8vnopBG4bbFrE91W2dfFJejksQBz4EXJqmQS9CrKYhK1yzFUEXjzjg4pRViVtXQ",
  "key2": "3qdjRBtGh5BcwXSP7efQBCBGXYWuCB3Lpa4T66x5heD5fx8x4i8kuadB389EumJyFsAV78xdfLU7y83beCwP7QEK",
  "key3": "YE8TTfwNV6LbvpppNGUzpLqehxMsRzLYPLBGcnNuXgmBgAUxNxnJ44CdnWp1zTMkYBcspNAW4CzmGZ2XbSd2a8g",
  "key4": "4EgQNAcdBVWq5TuwJXeuWVsdZCcbnHYmvasVvvca3PBLpJoz9askdBPTYKcZtVniAh7tnV2SarfVwU3iXamAuwSs",
  "key5": "45hzDoe7qTUFWkjkyEiFKw9j2WiE3xE3PgYb4Te4n94AW4RJmFJAqKxE4g9222zsPZAHCuJiBsxLE5ohAuHamvHU",
  "key6": "3mZ9hrJRy1tMEXd2QDqsucvKAvpJmhttZjt2HaXFE2bgJ2ARtaSpqmmCKfL7eFweUe7sP7UsBR7jVmGuNvnrfBkH",
  "key7": "25R68eLW33Zpn3ewr76mbKdei3tm9ud4KRMcAZnZpWVCfexUBwcRJch4wobQFX8U9TqXZQWRe7JMPLQRJAUhnzGs",
  "key8": "JJPyjCb69DqdhymNiqAYKLYSdgxUdrARmPjQddE6YK2kiCFtzd2ZwMreBV6CAtoATs1kCqmyypnPjvw9YcrvGWh",
  "key9": "5gMXXA1hgdQ7wmQh2s2ocT1FLBA2ioQNjeFyz1r5sxJ6KrNihNxpAWb3hMM4qJ19oyZ7pusPP7Xe1GQuzqG62FvC",
  "key10": "5kfP2Sv6La3pQU9fktc3WSBbig9xZ2BZmPDR8new6oVifKWSw6wCnFWjMF5TBTYJxyDRFfaFbYxCP7aGrZktLNCx",
  "key11": "37doTtnpkTqiKgSuUaPBJ4w7ziKtAPcRiYFaFq2iG4uZhsHMFUXwzQsUXp6ERQsdvDrCybahQK8Bz47nDwkmEkWF",
  "key12": "24eDHQXCwSMTeKLE68GESsoraRpS3tNAuDvw11HwDevtZhkYn1QkWnN4ZkjifVLekHBA5BnG82qBZuHFs2fagud1",
  "key13": "2TDnpDGKAcU3U9GRwrvLVPzJxcSutv96CMRcCsKYrh9wu3y716FU5V3ewE2k1bv239FHRztHJXzPW1Uims54qf3K",
  "key14": "3KU86UPqwNynHwhFMya4jHfcmX9a24dUCpRpzQXPCAjTAY6mHL7upRQeK5UgiuFTaiW7Qe2rpvtJiyj4V4s7wR1a",
  "key15": "52oFyPYCfEeGKsXf4f66bgjQCX9EAqtAAQmAzmiE43GpxnUfkJXcGDCZNYWmgpBfqHj8AfYgDb9QCHJASK7DRe7g",
  "key16": "3ZxjgnV1e8XGsc6M1xg59UgJZRc42jHGg31k5MVgUCZDSmSgQZw1WYMMmeaQVkDGwqdmKWKLifdSkmrMk3KAnXoG",
  "key17": "2Fuc7y74Rd29PjwhbZZUq3zWs5tBdjv6558B15bp2BfRntttmt4223YmsrUF9vAmANggRoCBxgFtq4sFuUG5oNAM",
  "key18": "5o5NSeCzeqLxFuJ2HQAoY4BhTuhws8eDqh1rZMJ47Ef82KmNeDQXgvs1Somkg6Ne4yC1wdF8G41sbt3brqefZBj1",
  "key19": "5vx46hvExeKoRDTbPSFHKyH6poxsyJCKM8pV9KzKFAT4dX4JWjfyx2ojAwpmd6DgJpFobYoLb8VRykwqvxkCQvBH",
  "key20": "2b535HDSGXs6xUEmSYAaAkou8dGff57jJ7PWtu6zC7JEKUYfNToLTctgJN2k9ggidJx8ZUMyxdvUKLSmHDrzEMTg",
  "key21": "4Co7sXrUKd2BknPSZzyAYY2WEbAkDKP1sowCx5ofxVWn6gfeNdfkcnqkPE1GEkudxpNoHguvshnLEF1B5r8S2JAK",
  "key22": "37xHegJwoRdQXmd61aQEpHW7C9UvomhDqD8qUcaUjWPh8wmxpWmiLchiwB2uQBb6NGRiJHUkfQDBCKBFL3X9Tg4S",
  "key23": "2sgVdVAd7mZ7nuESZXmUq6XrgEGsG9XuBotfG1B5EVEktDUdQ1GUr19Wq4uZB4mAxjYtBLx8cJoMfC3ctYcoAs26",
  "key24": "idDUi8zDjzqw8mc83qijP5Ussq74yALGi99Br3JeUxp6iv7DWUriicPT145rUaG6hfAh3JmAVoKKKpMTzq34GC6",
  "key25": "SCuzqYJWTGBrZDqsdWuJPDSWbDc2pSkPzXsyZGH9HyJc7J39baH31kE1RdeRzP9655X5RoGQmbZqspW39V4F28C",
  "key26": "4yoStKZozdW9DefKXE8HtNcJwphyeWzFca4WTVAHxuMLWLfZhNmuet4ez4eBFwxVc7VT1MTnxzHAyGbcGGznhkHS",
  "key27": "3VgGcYUPjGCfnZByAaX3Qj26EEuhmkj5CenUxQMj2gtgcfcHLNvLQiPM1W7Pz1pfac2WJk8c8HGb4AwFKVRd2qxx",
  "key28": "39GGMt8MkS2yv57DPAwrhLD1f8B5bBdkMbBpc7gzZdfxTAZVNBigVCdDbrA9gLS1CmfMshMh8CsnTp2nAmdeb9XK",
  "key29": "cmabVY1VzHruFQTfnhe2xT7wZSqptcvgpiKSYYEWJCikHaadFttQQqjtQU1JexEzz6g9Gi1Xtsanc5dsfAmkk1U",
  "key30": "432YegJNMLbhXiV9mAWLWxvg5zAVsJATQXaLBF4mmjD1oVXmjR3u86kzNDPQpQ5Wofbgj9E3LotUbhVFSyEjpmT1",
  "key31": "4rgXeF9wPX4otJmzSGh6qmxvpvVQespeZ4VSyhGLspeZAbUvpgQeMrpxm1FPiZzK8PYgzrCqwhLxPA1zrNSR3xCz",
  "key32": "3Mhs7o21mkSCt7QCJ5qmvaqdgvGVVhnyVrBa9A47hktHELv6LcQYEokHK5npJ8zC5jxLCMCaLgi3gifRD7ZyRUGs",
  "key33": "mj1DJ6VEYh5eiah7SPPECMRs2hBQQR7m5A2xqDBFeauxdBNwXyJP3LStRBwonaz3DpM7oqdWjiK4QebapHqKzFC",
  "key34": "H9oEMz8LJAX9QtqhcVsNAjQ34LvHVzcLy8d73JMU81yCRVAaegNxiA4iiE8NF6zpWB98p45Ju1c4kp4kw75GiFg",
  "key35": "5Qf3QG6MeUYNfRN6n8oZevMH6KLLaADgXjV7gnqbxRiHiaCN3AFHmxckqR2vWGAtkXdqxHnAfgb5HtxFvaVDRSkM",
  "key36": "4PKranwUf8PBNrS79diQeNjDNgJfpNEFNmcgmsy4uak2d4ePcM2GXozV8Eugtw6e9y1S8h2TRXSYeqJWhi89wjDM",
  "key37": "4HvmZjfDdxptowajm81jypEMywQBeV2nceGToRtsSCdLVDXSHAHu4isCDbRmvDkW3rLZgVchPTCN4zPnZKZhNkV5",
  "key38": "2oSDjjGBPrc5FUMJchZsFVPDDqHGjU55cmNGPkKpf84XjT5sxLsrjgU7ZxotY5qZw2Thkntc1mvkCsRU76H7maQn",
  "key39": "3hab76FumYMUcTUffzhpWKd4o5nofRaw9AQ93ZMR16dbR45gDBjTqsVkP2dqtAJnRUjEPyvjEMiMHfzDvfyhMyBN",
  "key40": "X85ufHp4XRZK9VdqCazwcZPPBvBpscjwNWFYiRVQz1CA4XRyb3Y58tkP657PhtR77ehZMgexXcFJ7B8VhNSPLqA",
  "key41": "2ta8xiRDSqFArbuyKRXACgNxGkEpm4m438Zf6MA14QwrguhLYseuWX234TNfabRZanaigecsFnRW4wWZeSwUa9Tf"
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
