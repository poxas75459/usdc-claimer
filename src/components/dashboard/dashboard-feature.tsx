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
    "otVApvTra24kT9hGmMfMNWpiZyrmqHFFi6FgddHrkFcXGvfpixYovetr9iPZFjE1786h6PEkUKQeu73qjSFNhBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UmoVw9ngBGzcb224NXnuvt1AwkF2UpDsZmTsNb6GJfpbLzvwD9Vwf2gryymh5fpMtaDNVX8eymUpHd6ZiA414A9",
  "key1": "gt3LDCGdQQDsJD1rTvqkt6RxVhNWNMbnREbyv8Wc5FRt5NTH7k2kWKLvkkXgmiezu6Wp5hqkwazawTzVd2hNNMf",
  "key2": "5yv1dXSFhKp1ZUB3CRgitHbgZz3hjpteMMoLPfX93kWR7tMG48Cw3BdHVXsqMNwEeHxtz4TdLU1GDXLHz7wyJusp",
  "key3": "4KABv4RJLdkPbSA5XxKPvUEvDEyW1RNwQWrYiEo9Nczkog8TAeq8kKnWoFqeQbafFtA2faypmS8srkXfcwnzcygY",
  "key4": "2nWyP9YaCuFV8mrMd8oyYpz4bFVKp2rVy5bmZP65YP61jsyPzPb2WzsiL9HmxT7WfKmhGUkHpwUtAxP6LFG9EzCt",
  "key5": "33v6fspSxSTzPC5PkjtygJM2nmukMNj81mBSBtHnUasnn1X859MUFhRv8cbkyNmHjZuFX9Em1CoERwBZmLrt7884",
  "key6": "fTXPqAQQwQmsfibFVSpiDaWSwy5SXDPUUqHwJDAAtuwpT1ckLCjTjV55WJRcwQi7jK3BYfAtHFGSbiiYNGnCC9h",
  "key7": "2KvWPQmjaYtpwB7UsT7bH2VUhnFHgxkT5wJt7vsvBhz7UZB29kfd8wdv34J2USbw4jjbwhnSCFfjpmn6hF85ycsE",
  "key8": "BRoyc2G2JfUnvno7EuuXDDLWwzHPWQGNU6CjgLeBXRU7CG83dtEeN2iUgsHiMvk7WC7z8yMhbbH1DvUmjb3CBbj",
  "key9": "GiFzc2dPvTneB3QubsHxQzwFYJuvY4f25NMb5dqkMeZ3vgSEv1dnwNyCEw4YoiRKohtUCYg1MWjqydjCsCCyqtN",
  "key10": "49mSsS6KEnGBNARECtkpEPfGgeaWuyfC5kizdEdQfJ1m5xa9axPr1Hm4bkf13RzGyZem8BLFAf8S3wVrVpNoNuwm",
  "key11": "3XxeRBZfgYspqHiAibnP5DWHeMyo5NDyAwmh76C771gsuYysQAWrrqky4fs9cuVANzhMuPdjAWL6bK1eKVgs3XiL",
  "key12": "3UKneCExHXPXfHn5Zgab2GnQBstSeDFDJWBW1Aytf62m2F3b1d4WnXtZ49b8U3AkqDK2YgGwGaeuUtaXCxi6Y9sC",
  "key13": "5vLT2F8yHySTf5ozisw7DwLuEjox8jEb3oMLUPNJsydbuoVWQtkmdETvmP2Yq26DQdqHRBpxMwFHPVUdzQ7uYSNw",
  "key14": "3VQp4bG51HUfcD7gdJSpKNA1sPhDR9KWRervmgSDnVXRsfUENx4hdm3zn92RRnX5W4E2L2NVcinYTQrFjEAXKMgf",
  "key15": "5qBeESFKFdXE27HdhTu8DKwvR9pyoDn73rbSYE2oEGPgEg8w3PD8EyLqa2SiP5aqx6wE4Fe21GKeaDZroYDiJFjE",
  "key16": "2ZBrAAUTcu8JEip1i1zrNJmH9tCoYtQf4wwJYBhFuY5Zw5JZQ4yJdXVPwSAz17cSjitkQ4Qrbo2Arky21wGdqA5T",
  "key17": "2upjurQPAR3LTCmTBkQF7jF7zmNW7kwbqYmvrGqE4NxzPQSKtDsZ2kNUMVmVuZG7wYbmEBUPvzPBc1HEyemd2nwY",
  "key18": "3VkrMkR8cdv3U8wtkwqsSdnuygQ6ERQNSnYdymkwFpUK4yx3oEHmWZ2zBaqYjngE9tdscoKe9xD9JYRLiJ4rGf1y",
  "key19": "3xv49qDPfL9VY5UVUUNqqegPXw833mk5i75C2UHqvCGLqPNuFMQeeTgG92UPvXu44vx9MSKe9TSefHJ51xWxRFoH",
  "key20": "3gNw9Ms1dnaXKBevjegzcvEba2eMQuCvcTkDkRTLzmRNcaRnv76wec6mCT9BFkc4uR7hVh8Fc6UpxqYzgPtL7ewL",
  "key21": "5vE9YPzM7gGkw6Lsd6PijA5x7pt3oE2M7zjCpULtFaxbSZWuP6y8J174iftrMxWi4vc1QsreUPBunT5gpp3g5HV8",
  "key22": "5o9uhccHjHrAhgz9a7Xs8N6oZE7TsuuoE4hpyqJfsVmEE1r2rbXUBEWxUcrPxcnoYvAeAkkEnN578pkKNFrruPVC",
  "key23": "2gVukuGv5p3zQWdHTx2VWph3UH418EXLXL1TK9Hcxqh54xiPjJ7jXcvoNtBAJs2wwKTtr21HqEYiadgs3c6Uy7o7",
  "key24": "3uaxHqqfxDoD7eX2dca1iRPCwDwB1wHpTzSVH3CQ2EPaPs24QrA9KgPN1M7QtLTL7reY5QoSFCb5dgihGjyhq95e",
  "key25": "3ZjTps5DxyhaohKNdJ4bxj2VG3quqDDoK5yDaCG4n1tjy3Qb2VKLiUnYVsvALEnwuSHTnMRWNQPYk82zdsmLZgg2",
  "key26": "5uUYL4tadehGSPPiPdH2vRJXE4LV6R3Zw5XZH7ydJBiZsixn71qQjub1DouktXxLrtxKsqpCxRwyrXxqqExAL3tu",
  "key27": "4KDqebS4udvTTAwa2oiyPugxHWmNFYP2MUntbxkBMCu7VQ8REGAXwqzYKQ1mqiojUcm3KNBSbfDSXs1Qi7KNyLJZ",
  "key28": "rv2DpgirLfPzExkMbr4CVjqYJnv8zv3iCAzdaz5dqrKRBy9NLNgrj79845T9ub8EGiUoMfqbxtciitEfMgsdG5a",
  "key29": "NttdyJzNt6ouN3pXByjneKBwMjnjwro2GMhFVAikfZDYo3qYGeMvsw4xs5XYEMfeRgJcJVuxkoHBQ8VLGetJrAg",
  "key30": "2X5Y9vaiN4AJdFNTaiitgrAWFFipFZRvpoMKcCCsoHjUdTA64zkAEHvLB31yEmAHiWF73k2216D4kr1LhefNmw55"
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
