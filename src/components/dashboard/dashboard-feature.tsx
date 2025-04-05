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
    "55F5noBAub2ZpX52Y9kQLd1PSGPNUNMMwMnTzfmxiZtPX8ZGd84jFet3DVF6v1bjN4K16rMsd7zCimbDqzu1z7ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5GbYC9cMwE2qPLyg25387rLhZ8JkTyxnNdV4wgSeynHMfZnZEyGkMEWzkSSrMXTxBuchHLWkEPdqmrL4RrN8PB",
  "key1": "4z6Zvg1obqddpabau2thbSFGe93cGHgZThqCuZ6jhBo34RDUCzJjNJKJouB5Ym1zBN5TuXxB4BuPHGBo8vVHjXqi",
  "key2": "3PcLb9sdH6JkDhZies2o6KMSHgaHnRzBJaNHWQSjxNPSSCnmZsHtMV23sj2XjuUAoqg8Ezb1F81Ykge7y2mt1moo",
  "key3": "Jmrog5MyJ9H6xUp2339C88cZPSKetWUrKwsUwX3sgzMEJBrHa9r9v8XiuSMY13YiVFYZ2DVFV35QDy9pQMbs5cg",
  "key4": "4qje1BKdJ6h5jyXnbLr7vmtPWFQ3Hs8mUbrWFzU6Z5j984ij33zEGX5AtTYLMFf5n64ME79WzQqYUQU7G1TFLwEV",
  "key5": "4QxJU3Mqetru6pBmKG6AABhkbdj8wqz49zXkbURbbci5e5WSY9wJzoZVFb71y8MGn3E8mdKLnWyiMnkpLbq3DCEM",
  "key6": "btwadwwnQunkUkixUSJ1DZEsPNkxWvaMqLLnDYJCVr3pgHAEmdAZp3ZFRsPXyWWxQgJQ2X38TbnsuoLJoEQZT2T",
  "key7": "EEkMvJpAcaeVv1qjMEh5wSf1x2bbT7j6NtVSGYzsoniq3MmMWkDAxNZzWgPEALvSngpRTEdZqyMeVWPGNkhUv9w",
  "key8": "37EXd4qFNK74B3UdzwA1GVuRyrsDszsHfCVTKd24t5Y3EZ5bRXfYzVmBqdvnuAT8k5qk77uHQgLXGybED66m7LaY",
  "key9": "3gxf9tTiBLqaSSb1xPVuK6ZNa8e6cS6vdEzBzdhR11BiaiwJWPJPzU9HZcmoSxtwmyNiFjigmyAwwmSyAjXxGa2p",
  "key10": "32wShsr9Be2H5cZpCa9c9h2vqfn5mPdFDLGCHPwPN2EgW9mFf4ZrkF8YK64f4XoRixg6e3TQG4Ys1BNievsuZP6f",
  "key11": "4xRmSNFSZoYQQGZSUwSSxuRpztuhyCJAnkh43Mth6gdKV9ya9hSokuqXGBHFXjeUiZBpy5P7Cjmwy4JXYVafmt6p",
  "key12": "HtZqHcPYbJGDXMYewbJCvgynUvqTEV8KTAaq4PdL1Pgn4HwqA5xgnpmBvURF8NQuyijSRqcuK9hDkf6YvZsYfqm",
  "key13": "5ccJnPgpdvo3hmR8riJ5qAqfzRSrh1ueCLnAsWdcimFCo9i372vZ1TyH3cijADwAFgYh2riw2ngg7kZirCWGhBPv",
  "key14": "4s3fmSHatSfyjSbQM9nrA3bp1Cu3RYMsLxRG5NVMVE4mKpvtz1MBWvRRLJq6jiyd7DPyQxC327FaJNzgohSy5EfA",
  "key15": "3eodDtE5B86MiSAcEpYdgRv4H6WUX4Mbw13rta7TxAZdQu3wvEQKTNLyA1vu7vSHtimCCUTwi5EgVKRefi2m8DUa",
  "key16": "4pAV6q2WbsWkkmmYbbKvU1sGSTN9zWL84fb3vhEBvKRmzeSxvGAfodp6AeYsGH1VagyxnnX3y8S82xfFMYTcqLb3",
  "key17": "5fQf25sjH6MnxUohzc13NNGLpUkJdUeetBGVYHSPFR4gAP4zyeteRrbgTVXsFvJS4AEunDqQYnAh7AVcPcvsAjub",
  "key18": "5mXsbXxhxqrcG318Fh5xHn3D5ASapqkrxnendziWVGy5jKkBqA3BQZzKUaZNqkMV1W4zrQD2Kzg1JNhJ8x4BAwBK",
  "key19": "4kDnJ3zsPkZ26o5dzqpmTngDZ5xBXeLEKP1FZpRKkzAucoGY74Lji7nKymq7GP7fGM3mWw92nabXDbdSZNKus68b",
  "key20": "AVz2JcfNf7UEDP6bFuejUvZLNH7oU1YuP62jndqu5jr4cJU9ZJFakaETRQJSKZMUf4KRhKKeq4UC7cBrHbachAN",
  "key21": "pWcYcNqg8tGWVtWtSVMVpB2Xiuo7NpUoYzyfhUVgk9fyVw5fYyCY7gb4CoVMBeTSSJ5gwhVLNrqeSWiKhWTTpsz",
  "key22": "3SDz6TrBAWPyNa28TJZnZ4xSc3Ai8XucLxRotiNskyRcySJD8TVWqEij911b6M44gogVHokurK1oKWd2gSubWmXX",
  "key23": "44uATtGcQ2bnoU7gdQTxZc8t9tAgX9efAnZXUbud2cbWUJ53dPQAWxHkoGNFmaZqDxcsYc5dVVWUydSoZmswgQfs",
  "key24": "2bj25ddQQYDYE4hd2x4cPMKisHqq3hkgQ8gy1WFD9i1Y3gmz1Q5ZeoGqS24JYkSpCxnGPfMs6L1yJCcExyJ4Gvno",
  "key25": "pWWzrR6GMb3sNUF6oHc7SRXPitmvYtczrs2chhZVsoDbtwk61qRpTRyiBkUi1khuziZ3pGcrYKGjsbpSnCXFMkC",
  "key26": "5vPmY6YLchsNf8csMeNhFnpo8iAavqWfLMhQjPqwhMUeAEscTstgRuuR5nrwt2hYSqvrHR4Z9eb6PXxFHAdt1QAJ",
  "key27": "4qvZLXcKnXKfdWHmY2b9ta8nvgrkfiFFgrXYuUYefBPKxHQfqUv4qacde9TurHSgufJcVbqQnyDfV7h4adQZbxg3",
  "key28": "4yPbZ8d3Zvzc3FujDNRVUpMEdLKFrs9Qp5su8XRf6JbqaUQaBj91woFv7zjF25ZQwsNZb8h3DuotawRdS32Mg412",
  "key29": "3HDjwxA7QeQTxX9vGZsy8VNPARQZA6LMQEnYEToQdo5HDMsm2K8dt8bCKyqttg8LpHqsE6TQ4TPXf6QpprGagxa6",
  "key30": "UEHdbFCXLyhcP5yhW69mghCPfSyH7xNS4JkTc2cyw6G5fUWicVBzvQzMQ8NTrGAFV8ou2fs5Pr4ofbr4EQnimdP",
  "key31": "2sRuJg6yqpX6dMBqM9fwrYEkMCRotbNjXPTGQEFfiqj1Mbow1DZPV9op5GgxmoKEjLxT7EW4GbDvwnRHxLm2ECVM",
  "key32": "5gtvLqV2VyPKZTxxbp8W5A1W9U5RT7kF4SFUem16Mbq6KAHTy3R7C1AVsNMSoo7Lj1ucMEudu9wnrM4Lm6YaZi1Q",
  "key33": "49sg48z55QcLQ21QYxgidhF5rmU3ZUGvwENyTcH7z1bBJwLKeYnWQm6Ai87EgJbeR1bQFKA8RaBuhRTJ6kX2Wr37",
  "key34": "3PmGALHCcwH6Pq6f3FkEwEYdBKPG5fhQ6yeAWuqwL7an8ThAHWkpKuAnRLv4e1qNGDhjTpTdgwW89jX4Kun7Tmwj",
  "key35": "4e3rKot2W69fg3kua12XR34UsHrCnFcm5DodJ2TNfZm7w12tw6yVkhKZ4nMaSuUeLjMgNi7aX1s59ttTkAtJMPn9"
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
