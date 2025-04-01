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
    "5Uxpn3dxpEfdjtPKZFVuyFowMJHGmuRYrakNjSdWBbUjFpHgpU7reELPeD1ug6cj3wg4JqypNntw7iqN8ZBCVsQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36hQjThWwKvcbWHQZSKEYfmpNqKm4NCdLyHToaqKfwQkDzLFm7wyL77hTYLyFE4NKhxh1iZMZag6mcdcBG6EyhhV",
  "key1": "4EKw3fJGmXFXYjcg7EwQoJWz8FZQLspeLwhLGDXdVcQ6Qc4neFEBJgEWPxbtFYUFMsxMAkHZXEjTMELDJsmtqN4R",
  "key2": "2wkHYgLuqKVNkTUUJQruSbhq2zm8tsfw3qBKif7YBZSL7Hu3EaoYDh95gdN9zVZhLZcbGa2X13MoB3a33Fb83s7V",
  "key3": "5Cz9ixE5YAiW4L4aRckRbQaP8fb2yK7HaHxiUpdGfR5Gui8uWex9WTG3JQ5EevsqphLQjyJHqBAbyH8Xr2wh9DNM",
  "key4": "4DGCSymzdggR4khX6tokpXUPjWuX7vaqhmBQVi5LwWZCHiEnCzDbJTZbLbmUV3jxnRcn2AhxA3EtcaKvw2jprWVU",
  "key5": "3SrwyTiRTfuKtQEpSyUoPCn12oWYMWLCuQ63Ced3eNjNPBFGtP42WyYMToXjYNNcfFJMsfdLkUrfqnFb9TRW3PRS",
  "key6": "2EivTTHyvtuuYhgshmEEFaYKWHPmCovz2cbb2mMzdz6G33uKLPAmL6jo2dm318gHVW64jBMuKw4qfhwMqFWJKWXS",
  "key7": "JN8AbuoF4W378bsnkFLr7dFr2A942xMU2feTw95qFx3gdWtjLY47oYWWrVJyUAhE51bKNXgkB5MMwvPM2Qh6mZD",
  "key8": "5okqG64unkrXKitDWpJmecEPaU5Zx35za7JKUJ55mFjydKbSKu8izQGVTj6zShza6JCFxjMSd5pUJArroceh2qYA",
  "key9": "zykhJbHpK8ANcZNY2TP7J3jhJwiUDCZ2XXQMt8JBFvJUoBN5cJ9BCJBiRGmG1PTVceUbSCaYZAzDZsn1SpQabvW",
  "key10": "62bAuN6WkLJVrdoBWACTam9ZMZB2xB1yHVKupupC9n8YZfcgvu1wL7vLuwdq54dZKo9F7Eym4P5aKgEUX1oi4H7P",
  "key11": "3aLdgWM6tNJpVYTpGqETMXp1FfzmSLYSYhuUbDdB83ERJ7U4GKXobUh4dZpz99LZoW8kS4W14tQ7E65yJM9ZkH5K",
  "key12": "sKS8rFut61NGSg5Z3tPz6uCKkNS43FnmU53D5gGCDxQ6cUL3iUrseXqfQ8D4ncn97x2d6uUofQMPnnTLYGLk6n1",
  "key13": "nWaoAbNscJQe1fK4KPr94ZqzdDwbbxGueHxrnpVj4TjpaAmnjWxkUfqcoy8EH65PajrL7HfandyAuh2LJKpr4hE",
  "key14": "2BGDCrEjTr8PV4y7RMJYXFyJm2b1Jabdoaf7RaReWfcJVZhyXwoEuaFwPpii2Cgta7gCbPUVAfd9b9wiiGeasrDa",
  "key15": "3EKPfCYEgfQNKBKqRVmffLnYo9quPrmkaZYUfL948DBuifWniDEBBEH2W4ozFP33ygbTfVBUzc54rtv7xdkLf627",
  "key16": "55MnqeXRt4voU1CjF7XhfFeZwD43c5QPUf59cEnDFPgzqEkwNKzgojvhgUAmGtJuW4vKyPJBPKruHMehm4XyQ4TW",
  "key17": "4AYvYRA1eMsVD2a5bPXB7FSeWUtC67YLXvWdUssTdqULDXV8LN3gEmYD5jhm7NZJBZWWWLqJ4NB2ZhqxG51S9Rjp",
  "key18": "52fpuibpKxXPn6e6tnXiJmRe2iLCrLm2hXbSYduEz73hYTWNFpSfcR5SmV9SRV4nh3iX2uUJH2gMCkyTMtWBRJPK",
  "key19": "3E4HnwvSiyxXRirMfwoisAQnFm99ECqWV4CbY49f8CV4TAezgHyZDZA616EzhME2QSJbXKrscLkypAtq23xEVV1p",
  "key20": "3S2hST7s2sXMGcqhnTMiRttP2VMJbWafrNoMZFFDbpvmh7FVs1KVqnh49VKXtSQVWhTYvxhKwE5uJWCudiBKMVdK",
  "key21": "5VYTSNeuWP13RyEemQUd8NgJ7RVHsuGVD5EWDzAsiPfKDcx1jfBbTVQxweccxPPkAXuB9rJDERFsgwqEEosAH5vX",
  "key22": "4FXxwSd2eRiCNZA3MJRWYUQxR7tAx8QzVPnxbrwTn1gpkk4ZZRSQMuSbbPQWo1K6i1aQEg8oJ6go368QKcWrkPBH",
  "key23": "2PPDfe9UuBJiuL7ocTR8yVAQCZvZpcsWsAMxr64nVjPQTfLTgXzu1wrKskCEJCwjQLgAHG28dbDP6p1aXxfMm1RA",
  "key24": "CMQhc1chjphBFyUkN94EKzWAusAsDRx9jNMxNLeCQVdGPpohwUBSRov4m3JQrNM5m5c4gnsmYuMSdTDYYhaJHSv",
  "key25": "5iGVG63UrgB1o32AFBYLvETuDJedzRxY63fj7nvyCiTNjuviV89Mq7P9iUc8aGLzpLZL6mhu9URyJd3xnGye1Yb4",
  "key26": "3dRanArgUTrA865etQHXShsY3iqj7VWEE5R9ckfUjfioBxEw7Sf9Np1TqxwDRYGnh53FtvCxLjPNpftZwNUTkGVs",
  "key27": "2eFAx7ZWQrTt9ySVwCUST2jFEH36GxniPk3wVXJCWZyLydGbd9EdbLCnwdLYWnt1EzERcvBARYh5J6iFrFaYZ8VL",
  "key28": "4f7afHoyrsM9qamKoEVbriizUFVp1jxPpbd8fHSWqp6LaKCSBHoNGZ4doQDF2FAZrKXvRtt1U1yS5q5Fe8F128xg",
  "key29": "4VLM3hSELQmtZcnMvzD6tKx6ddhQyahXHDMovygjz6DNAcPAMLKVghR3tZHfPze8KKyyJGoAaLwBuyy2ojK8SmCq",
  "key30": "5NnW5S54RdSZ262yRDXZJBTA1wQyg2yhszg2Qi5gPWSt2L6mUVyH4nBCTwPNq3nj2CtkfxdJzL4jfWc8CipSxvpM",
  "key31": "5x1Z3cDWbxqAetzxjraWdQgyztzGcV6Gz1vqhaRTuini65Nm31ypTB9fUnnj35ZZyQJnqvoudMte3YoswKcxi2EP",
  "key32": "2WTc9yb6Szkj9G46TZhh88PB2s9cAn7o492roqXnczV47WffTewJmWGUbT9CkG2i3PcGHxcczDn3QXRneKB5qa5s",
  "key33": "jFCm1uweaWSLyyDcdFCCPQ63HVXjjmjASfDveLUoiF3boJN5SGa8xHJ4gF4sKW4KY6xg3RfUYWCzDZPPh8TGsQ3",
  "key34": "2GXaXx6LYXVDwyPhw1Yx6SZEiuVeku8EpfUzvUnGkKjEEfXPWttLr45a17tK6DgkdEBDqSKkrkiXMKmnfzxd4hC3",
  "key35": "3X62TAHz8MDxKwRj2YhcN74corejFvBMXPdsTLHiqDGp73k3XHPw4hmMiVmux7YPFQBcRjoa2LR3GmPFWtzGfRXe"
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
