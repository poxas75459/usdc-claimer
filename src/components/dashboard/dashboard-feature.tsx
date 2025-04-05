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
    "33hTASn3Pr1qnWxYHgkbRdKNjnHdHNLqZ5s5cVpEGj7unX8FYdyY9ctvc5SYnj5ryVnkubz38f9BxiFReoB7sPBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ri7ARYVG2uYLfPjJhimWrNhZHBnXYFq8YT7FGNamiG9ibh5Um74tGxjGScc69hwXq31UoZWtT72jctk5wcjzu8Z",
  "key1": "2b7sPVfASS33zuPFymCu6NsmN2T5w37mNggbrBeMRhLUG2ugNMJv57cy8ibfUuqYPsHWSig2DvsmfXBSVHgeHi3P",
  "key2": "3QNDmChtYcwsyLn1XHzN8Ph6nhoqfC6gLGqZeJf2qCcGJraPy1ji5US3u4TQSLVDhScWDbnzC59stVsnxCftuQN7",
  "key3": "4KhPoTrUTowwsog7MKg7z2BrmKdQseKB1yrptEBVZEWWQ7sWX3RMwHTa5B8BtMJz7YM3CD8YjWsQgnHTcygN6BPr",
  "key4": "5NB1DF6uvZmuYeqbZAbibfKcTiAoW3mURcu65a9gMp7kfmeP5Q4Ldp6CLeHuP35hh4vb8djThJRt9mTeZc8v1iVk",
  "key5": "hys7pa3EF3bHSM8W5kTYz61M9nD1dYh7zK4iix6ZQhXoCBHMk6scQR1VRp1RbHy8D2HaeyTjCiiJVPbpzofPeQi",
  "key6": "em2j1fHRrCfgfEZPWM2eDzrSUugVWPN2V4Dz57WPA9mXzZm91y6maehXvGVacV4Wbo8NPEv4htne9j8tZvbVYTM",
  "key7": "5sXBnRPk6ois5R8yS52R2aLhVyXKst7DzmS6m4PCCSC2Gf1ZYdXSJ9GEpFks9WEUAx5iwyiWFM4za4dqZCAgtp1L",
  "key8": "i4M8zNgXEnckp2euMTsVMbCKMUHKWvewvYGSo3N6iqMKhfHy8rrGt46vTCfAUW7bxEJzZmbLHJb5kHSBrtNHrSV",
  "key9": "3ofeZxrMoh2bd5X87BXA534k74T779NDWTaawBcYyWfo2MWjm2Y2hraK9xD8r8guYYNgcYhMuzoTakPHyU3E6oaa",
  "key10": "waSdNMkJagfn8jKLKzuGDk56BDDuKgRBQM2LfXnkRsdkKLqiYvviGoeJ33cUpVxyMsZDatvJHMBEWGhb3ze8CpP",
  "key11": "5XfjWNAw6yXxA7bK8EewtWjETjRRX3KUSghfNTQ7h6WQBiih7822efMna9HZQJVovgRihRT2dJjmxPEEXDFKvCht",
  "key12": "54xSEypD7UE7t2C2oyKxbChYpeHGwgzFf8c5WMmmbxJohpXqh5UXjTQxwqEAHhvHafySQKZgSSF1rWM9cn6Pvap",
  "key13": "Dcuys8EfbtdvT6gVs4YsRQAZJ1zpTa9Rqh6yXuQ2FKzY5wjokZ3LQv6J8irxtVdETDZefkk8smmUfTquUAmbwVD",
  "key14": "68PNd7QUMtXq52zfzP6Yf1E1z9FadSiKHUPeNX8cLTtRyAPfRUerBgqtjaZj8fdWwYky9AEqaKFibfoGiNs8mGf",
  "key15": "3bPTUeTDXneMQbie5RSdPaqeRKN53LaouVqi9Q3U5ByfdhjmfqAiVwFBu2QAU4QpUjL6jFRDsenERTn5jtmPxdyG",
  "key16": "4rG5ctA5SMbsvFGGKbqHLvjYS6xqjKv2bHk29NXqFoWA5CuonzcQJ7wrRaTCh8i6aDrByMtggzeXXgo1qYAe5HeK",
  "key17": "5BWg1ua1QbPY916XmHWNxWNJju636c3MeXLaC35VKdngsfVbWrJ1zHPnGqqATjvPbuMi9NPSaTGkwtR8qUr8tUPA",
  "key18": "3jhHbpTocPPe9WPxYgd9cWQxdAeoNYa2BacGomnsP3ooJPvPxxzGWbLkMaAEe5TeAJL2dtPaQDixXdSjJ9FU3cXK",
  "key19": "44LsgiiFPQLqx6St61fRUXZ45rAtbPWU5jkg9hVhupMfbHHQSrb3HXD4f5CNQQcnDUB1U99cHgT4CCBjpoi64Zrs",
  "key20": "3MpVrwhKHoAk26PVea8a7rRs9rYqNEiw4atWXp4YrbZ5wFcHdKRRv7MQ7vy3Xsarf8wBAWcFzXkwU2iGqGP8Uoy8",
  "key21": "3WVxThyQrEsAa5UiaUK1HtjemyaZ7T9d5SD1vSLfGFG5vtqYEzPXNWCUn1TCEjzSoGww3AgupnsRsKBNUAXysxw7",
  "key22": "26ZSY5iLiWfpWt33ghbbp7jkBCDf3fgooLPGLqkPEBdAY5uhZqpxcwiMSengxSmHmo46c3mn9aCahEsg48gMr2mM",
  "key23": "2MXsHDzyZQHsKa4c1sTq6H283GEEsWbA3Vd8htn2xP6EMR97FK87UBRdDAbrPAfxDyC1fneERc7hJK5WNwtAXDmg",
  "key24": "2doC8jBRYsYF2HX4ruBmjtCxy7gqfzPDe7HPQzNZ7q3nXNLFLP3DHzAN1j4Zioc3YCYbo5YK8QsQTTvob49aUaEW",
  "key25": "5QSVfLMBxr9Jy1E9tFWM7Szfbx14Umd2USdtGJt4Jmk3MVrrxnR14vwU2Qb1YNA4kdRXXfEPFXbSdZcmDCytmkgW",
  "key26": "2DcQ59d1WnmNf3Njp7FhP2dByRC8W3aMSUsC9VDk9dA3WLMW7YYcSwtKC99gAh46ZHWKNoeNdYrHShymVEc3BXEU",
  "key27": "TZ1Urgy3XMz67FkdHmLqkJdZZ2i32xKbtmr53HuV8agjjkD4zmgLr2iwbig7Y9ZpFTYhJgenskaTNSFXBHSvHYL",
  "key28": "gutrXkZ36A7M84VNbQ4nxmrGhmirrr3yzXx9hGiZfb7LpmahvV6HQYGpUkqtMnYZ6ccecBSMznJD2izZeYVazbS",
  "key29": "4LphuDdhSbraoZ6JUuUPEijBZRz3pF18w5rxKbN3Z5GrDHxo5SXMM8ZcqHtLzBzV85kuLYMkkuVmdxfK1ybx9NMA",
  "key30": "5UpSFiksp4cyP823vqw2atYgE9GzxVdLNCo4DrFupb19CM5snpHVi8fQcmsxptmSEjF6Vd8FgJpvWwfNLH6LHAsc"
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
