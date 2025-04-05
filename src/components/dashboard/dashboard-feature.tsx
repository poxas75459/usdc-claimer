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
    "2QRDrUqEmMt93H4U4Z3btNEzS63jRDGpfgWWMSREc7XEkXA3uS7gDDM3zUJU3k4bcuvZ4sMdehQWApvHfunqXsxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t7jNqJCwi366HJYMVXarQwH32b25Z51w8MwaBCYUAfDkTCw13gXFPbgtVL8w4Wq9rHh7ub3e25M666qU3S1sKWo",
  "key1": "4q4kymDkrQemVCU3HHZtytweXV7AAgiizYRw4GWVKuEkPMWTfxGhp87o8DQkS2rSt8GHeovNWVqrWsPcDFFSRQEr",
  "key2": "2tHaRgusEq4yjyWbb4YxhGvKqkYpdcjdYJXsV1ntXbW2emgSoSWA3aQhAVLDZFntkBux6pYrkkyUGtfMP5ayPiFk",
  "key3": "3sLhjre8ueeiXZvZct5dzCVhBtEJfUgAJP68fR8EFZ4awZZrMpS6mGKTxQU42Zk7tH7pLus4bKFrcDMnHPXMuPGB",
  "key4": "YjWEE5W2K8oJKGkB3sK7C7a4GfYYQLcgyPLBt761zgiq5NUj3TWkMcYhu427ZEZYJbbFdpub8WY21bvQBcjf8jJ",
  "key5": "XJov4T74DHSJPzairp9vhbYKHBUfid1Rc7HGJuEvw3ZxbWcSZAz8s9ACXuhuYsXtjP6NDXzhe7tx3xBJaGCXuQa",
  "key6": "2EB5cYCiJ1xBsje82WLnuFo8rJkCWPnWCPEVgpzWEG9Wo1ek7Sbt4RX7MFqaroe6Siz1xyeTMjSmGJhvmVDtiuoq",
  "key7": "4LrfNVLTvUoE2rDi6N1GTHWx5sox3q3GQw465XrGprYmTRuBJp4Un796Dj6LYitDzzAEV1x81MKUnyYPLuDiRs9y",
  "key8": "5T9QUAxW6GFbk2eB7SRa7KPBdTYC3cNS1hNBVSS4hzGhWmk97ZnDciSd7WtwavwRn7dUKeLezVPxtSF1hLm1Nxhs",
  "key9": "5uve9im3Jgwv3Mw6ebnhRXLfVUsiJqg4dv98bxLYKgUAKjkgLzxD8dVpXgobBCvgu2EeyyzXigacn2RfdowreXrz",
  "key10": "Eg6dMgbviyZtTPZjNvRpDpypftP1fg5fjbYDCPRyteygcLxNjPnWZAotS3HddHiGpU7EYZYH382UuXdRjSqx11w",
  "key11": "3bmSSmbB1ZWpJvKU1zqVD4PXf2NcsCwqWicza1h81HQm8iMbDRvcXnGRHJL4TzzvKxxJ94gZJYwHHNZqM8EBAR1X",
  "key12": "4dZj3bvnSfiT5hb393v68SwtfeJtH6y4kYSehkshNrkLCE5E8S7rZAEyt8PL9JE31XiQsJV1dfbTp2fgCbj866WA",
  "key13": "35pw2MV1kXSEJDrrw8UVvhP6KxFY1vRL9rMkHwvs3QfodUW93kWRtPPK9M8T6QzwaJ8RatNnmTfmjhJdM7tUend8",
  "key14": "4GJgLb57zPV98EBGpCRRKddef8GHAstiLdZgNiEv98aCkkQDF3kusMqXo59GydQsS5gFBg5pBJYWhLeQ4TVCAhwm",
  "key15": "BrCLjz6rHJaZveJCeKdE6WCXfBgJRKmtVSTEKRAdWq6G7oDTgdVXTVZ2AUvgcX51CiR4gtAV3erT1cfTZqQHRqe",
  "key16": "46dqD6MLsWX7nK8Jk5FDGDWmVeH75k34gwg3ETPJ3UoGE8KgSqa9kK56fsM7ALNtAKygq7AFMfhXgkXQw4q3JGbk",
  "key17": "XqRsFemfpijVwcgkSNSLvmzgfFmJsMWnFNYDomtYmP7PcvvUodp3WReLZ87BjDiFrD7uYQvKLPjbvYcFzdAAtDj",
  "key18": "4Bx8c3hw4HYf8sgiQ2TWxGRPXAi3ivMrpiDUx79Ko243fePcXgkLdxdKSDw7UZtjfRei3Q11DRviDma31fhk6xLY",
  "key19": "3RJmnankGCHkp5RZATz5uS6zhhChUsmHiKBNVKsp3MmfPoksaV4zFLLxbVwctv6mBpSHEZxc7NJqBL3zuCNZhboq",
  "key20": "SBK1keqb9eWACJa8M4LMWvTETyLozEJqLDtwkifjYTa2QcPVpdSy3BJGHiPiiq2bJuo6jpsyZL5AWBad8PuFWTG",
  "key21": "AnpoeE12iz5uuZ9oQ4UaREzC3dx6zwQWedmQ3t6AJ8drDyvLocpwXnE9yM8DWBYW4ybfR5mcFztCJUyavtuEMEj",
  "key22": "5W5SKpWo1XrNhRKbwNMwrQRtyJ2FgZvpkDh2iGjioyeLTQ7Y2xpvHdA2BcWqFXnAD9qGnY8CwJcW3q8VkETBF5Ss",
  "key23": "2mzdiKxCH5GUvhBxsmKUY38iGWqohQwkKkB4WDT2geFG59vWeEKnygohgC73GeGn2NKyYC5Q7D9neAFGaVVgD6Fd",
  "key24": "3ZyA8MQpA9LcXWmfxobytNeJiRcNPNpajAMoRwcn68NsisgX9h5b19VRfcVSjFiXtiPfGZMWEqejDFu6MSF9BhoH",
  "key25": "4L9QpAKqL7Cn1SEumHAJTAAsQivWVnYFtiJ46d9JFRqALHzVnVM2H4AwSJVEBRkqDX6u9xARKvR4AHAVGuXgfSzz",
  "key26": "FTYv5mkFAcwjroSqVNsMtZDqPXiiBp4hVWutuedewMDnLT6cy8QapYV2XCSYjRndbniPXfDwv77ZAMeZeobCtV1",
  "key27": "2whS81PkD7K5F9YYPgmrgpBJPa1zg5iAB4mHuwLm1kGYLvm4PjvgZffqDuwEDKgz6pCP2YEAWXFvXFctsi2vXuj9",
  "key28": "Ufdw4E4CaLHqhh8DiLNbyoeZ34JXLZfsKA51WNX81gFs72p5aY3TTLrf2BBxJafXXaVgvdWjed64ZnEoaQc1cgU",
  "key29": "3qgPY3FJRCwd9FLbPfopxkqnhzp7teqqAEHfuweDCP8BC23XS9ozWaqb4KNMnPEmQx6TKRXvNXdkrwbrMyo8ZAiM",
  "key30": "4FN4pPKMCRtCeCEHdNR9pxEoH7o1dcbJ2x9WEU3LxjkW9pFBqoA272Evz5mSEEuGB72RbSHu6ZZgyRWFCsiqZGJv",
  "key31": "4wcgXo2Nm2tHBFGDj8AmfL68W2Eosvy9hi1fLsA6VoNcg25RCENVKykbrGQBHeUf6P7PoV2vwYoVvhnYVaQUMZsF",
  "key32": "4HXqKg3286wdPxynFeqNGtubocVYDMyPkvGPLqbqQBncEyequtip6fvZokBoNh61fWM6vTQ54d85crNt3SVaGXgX",
  "key33": "4upGRGoMcyF8JZ5TaotwSDF5ATroC26xXyeF8a3NxhCN58Hg2czaZHK1yHLZfyibBktZ3U8yUh7SRboH9eE9cnHi",
  "key34": "5UM4ezEzzHgC6BfsqhkgqMzd6bnBqYLUBU4SvepKQW3uH1mXEdPdLuah1ydmtxSfqv38XdmiUKwqHSCzRr5reYa9",
  "key35": "zGAgCmkNhWTwjiHfXYZBJaazfS8Tq2H9g4JJ9syVzvGxm8jczNWm7QGY8T8pEKkzCUyNEKZTTMo7c7ce2eVofSZ",
  "key36": "5U8ob6ASq5L6e2B25sTkpNJQx6e7xvsaAPaJmE6gx9Tx9ybP2xzxRTSfpEkuhqfwMfGPTzMGhJXyP5wkL26b7KUA",
  "key37": "3Zm9t4F9pWfQRsjp2LJttCC8ZVf1kavzWXgGMMC4dXUcTjL5ZAcFxiWdPJyFQzXCxDjYALeMwFdUZStBTNy65nwg",
  "key38": "5sxXkQXeFk1moGSsMVxUJiUXYKu7dXj7oxMBeETmxz3hFa6DFk1L9kbD5o5mHKSYADEFrJ8jBNMbBoXv3uY7iUhD",
  "key39": "2L9oUQhHQhqRmZnVtMLanezLyCTuJ2dWMj1RwgG1mnGdp574Tdxd25Pj14vgECmiwZKq1Tn4dQe8cYT9KQom411z",
  "key40": "taZSLZ1pnmRLyQup2RpDEDhbeK9fCzAcJo1ukY5Qawuyv7w3pNf6QHNDR15hTEQFKzRDH3BKWY3myBgrUKjbtsm",
  "key41": "5qLQsEte5ge9gkQUpR2sViGLztHiioJVzqjbMtpqPNu9KXGmQ57ZZLsTENM1Y13jgsFvasoZu6jw9w3oS1dor9My"
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
