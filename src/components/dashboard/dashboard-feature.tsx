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
    "3yvwJ6QGAwxa7YzpbEMPi1yL1HRMr6Nea3SzmXk1Zds6DSoE38Y3kDH8goViocqkJxsvs6Gk7XRHjjvcZe33tPwP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vuq5LQ4LAgLFmvizrqkXJgEjnmdHRJzsHRGQY6AgECwYVhFn2VxzHqnDD9okUhQFzP6d6MP9rhRWpCDceckYuYU",
  "key1": "3U6898pq5wd1v4MMg5sTEgqr3juEw6HGgBZKNjLZWpJzCeQ2DT6Pbpadg1uznVhv2QhugD9hNumY9ohHzmTxVrZ",
  "key2": "2RQTWiPCzBy8LvTUSbcZgLDGxEmjnZCcKRXXwhD9EYcFPJNmv8JZtSjgjkLbjTZ3QXhcL5QeNqyyQ8msTUijNTg2",
  "key3": "3DEWAFgNajHc6Wxq4XVRouH3N6PWtU2jqNzMCHHwFD94bJi13o9wQ5SwUyCwbZdCiJUznPKAssMJyDkacz9Qv1aM",
  "key4": "3uYFHQPM19c9F1LugzKspXgWtMLCQZYJn8aDuQjyWY1X8ngFDvJKg6JFkps3dg3FWz846SmhWMGEsH42QpLnfPBj",
  "key5": "5RvFNB6aKiLWv6aNbXPj9ggqXNPpaofpAF3FRB441uULeokJH2ERPoAHjQCCjaTjbMURcQQtwki9k5E2uYVrUVoX",
  "key6": "CeC7hgdT5979yZHorscTJzh2za21wCA1MtugG1s96wEZFhB2nxiB6K19ZGg2iCK3ku1QYv89rJh9J6i3Sc4EHJ7",
  "key7": "58LnMg2U43QH1ZPpNEikPPdSSKJaixjPCE5MCMppTN9hYR5z2joHjQvhYDyT2rt5YBFWf1S9fkrpGCV4BwtJB12i",
  "key8": "5PY84HKDxTh9E344qn3Ts8Z573RuiMDiyQThQBtuamrtatRTiit7qg8cFt5u2pFEs2naBNqVFCPzspnEBod6SJVd",
  "key9": "5npHAr8rYtXz8WqQbryb7um2yN1JVsB42Wdz4vYzyMcZTQWvfM84iu3aXbMYt9BcwXbNu2RE6j3znANFwQqD78Za",
  "key10": "3xHRi9C8TxPJyUa3tbMnibYzQLDZiaNmRRj1gitU1PHBeGzF1XUq7vkJ9ETSMqMafx5Tx8qCHmjfyEYiE6KUwEZU",
  "key11": "48HpfiYiuSCVVmkpG1eeLWZPcDyVH9DGcwygRF5a1eJMuMvh82XHNRGGxcrxsZsw3gL7LKvTgAYCeUsQgxN5reEB",
  "key12": "2HygvYQAbesDpkDA53MX1pZTnfPsv5NFy2cgMqwJ4BFzjEESm3LmUardQ2HZRivqAZ76rpboqey9HPzpGSf2CP7F",
  "key13": "2BswHFeqd8r6yBUs2ktW4psKFveUfTvtnwdq8b5NkSy1MA6o7q2p1bHBW6zgNatxprD85vrXqnRcTFhjyTDD8nQy",
  "key14": "3s6Hth3kAfTdieN48AxyE5AhXGstrg7bjnVW9Q8jjzPYC2i6JrkUQJ4st8gAGi2KhLJVF5sywL7qsmBVUKZByKDj",
  "key15": "5XJ7ubgxyC3ofvJ7AQR2tiPE2GM5vVEsLcbWYVxFW6hzoMuPzVe44DVHv3kmbnerWHyfdrYNCh3hRnb8Z2NLUQyM",
  "key16": "41VqY3rmakKSzHfPHtoBZbGh54Eu6kexmPLmN6WXzyDD3qVWgCJD9mvBc6pRdZ1pUeL7RZ7hE3SLC913vju7jjRi",
  "key17": "2SpMt33umFvyHLYq2LCqnE57n6hV3CFRb3BaPAwbMa15gZoJ1iQhLdLvXqLdGp2cFpAbZkD9HpF7iJ6DY7eEVCdT",
  "key18": "3xRtocMKCdq8aw5NjVMhAqmnbqhxjzLBU2WxZB5MWLF9fG4cQG97E2APGmT63TGZ7H9jWCBakcKCAh4VT93ooF3P",
  "key19": "3UFo9LGF45ZNHGmQ3wMAfsBgRspFFjDSyR34rL1vVnZYWNCyHgQoMUdkgDg5u9zcwySxSEtWj7BsRHF1hraTmkgh",
  "key20": "3ctkFcZu7KBdnWJBFweaZfbtba1Dw89NYcraY6rnv6s2Lded1ksCM65b5qZs1b8ySx9XCTd9LH44qapEV67gRZ1r",
  "key21": "2Z7nw8ByZVX8eeixzbYpy9x2zYjXNm8tG8CZcg2Wo7yTV5RohtRN2PGeMrEU2hrGAmisdZQ8BcC6383RNKXe9gJr",
  "key22": "2U4wwFz1b7xsqLVU2Ndory3USxGhdjPP3ELZYQCZA5EGB8xryJvVzTyFECzUYAsjqLsjS6YimYupuxJieyvimjUw",
  "key23": "2LF3ToKQ84NH6RUAD9UzZJnzx3b2m5snEuATkxMBxTKe1xZ15V5uaFHku6NYVLEuSGHPnEDqfnCeSTuK4Yk5K4eT",
  "key24": "5Uc9AfeG4g6X5xyL5jsJrdFH5b5Ay7A5BwRZCyBfCTL1hMzmBQLhTWiPxxCzu2gQDTB3PUKixs2Z9RwsG9DBAEYL",
  "key25": "4Mjs18q7H9km9qPhskeH5jc7EBMYd39YzV8LdaMRWX4Ro5DYTVdBUk2YFmXq2XJJVDtnqVufw2qvPa79rJRrsHJ8",
  "key26": "4w5cyVJcX6Abic4f27HJVTaZEB9aC2PXiyQLfyC3wuicSdjjj6pRKB2dPTRwwnLha4r9YsaSuUGyu1DTBKt3sZnr",
  "key27": "5ZgUWgodDfDzukkfN3AMhLvuSSN6ysS3YocmF1hjUVppM5nvf59AMaKAME49nqcMbTNJrHFXWxXFaxubu5GBdCPf",
  "key28": "3CYVdkNftYd3jvqF5Wy7FTaYAJTxQSqW1w5b6daHsEqmsjibfK7xuxVoGCye57Y9BtSzbZZ8Z38YBVL36CEgWtii",
  "key29": "4LKJgQ8arY4qNpeaSEMQ3e9fyFgNyqWRhRKS8zuKuV4f7rkmUm2pEZESkbeEHsRhgYFaFE5ipP1LvM74SF6c3UuN",
  "key30": "wRJyj776HNtu4fUmzgKKzwJ28X4qpU9iiqgxjYSLgcUvcJLCktkjL91pMyCDGTj7cVT4Mb7Lhfb9vNQY9cNLo4U",
  "key31": "8pZg9X4MMYsupLiTipGZr7dqxgbPPm9P2GpRN4eYWW1VSjFuya4AuFeuvxiPpmpgDJhJjpnwkVzfS9QdBvKMv39",
  "key32": "2bpCXLhzDyxiosxhnzdfK39uJKvC8TLin1NWhSn9eXxfSa6wbtjpw9L3VXQcACk7Yj8k6n8ScXcKC1hsdfatDWYs",
  "key33": "2tQgZJQZ9YhfRdUezjTKfrecAaXKMkAz1aG8ZEYaxXSXkoV927c8qy6e2kkfQ1Lc9n4CVqNM45daPUkRULeEjdGb",
  "key34": "4jSrJukPC4UpxLxHkFdXYBSNWpXy3VvacUtPC1PkBmmeeahLX61AoDPSUC3318R3zyjuzgcYd1JkLm6WYhz7FCJv",
  "key35": "44ZN2t3x6PAZ2w1ywTo2n5QUddERLJ44idRm72k8yw5Eba9ANRKGw31pfnNXrUnJnM3H61y9nP5NtsLqd1YzzHjY",
  "key36": "482xea9TqKm7nNEnAqEtda6Sfdf3qA2XPxwifFFxgmhTTw6EZXCo7uGEDL2tpu2o23wgg4DN3oiaFsik8Hy9UTiN",
  "key37": "8qA8AhGiogaPNwbqYfkhDaDLj2rkJ9KYsyY8itNYWfnScvLkAHGtG675Y6MXR1ebXEEEw3qQknh6bFwRTMhZy3d",
  "key38": "5AnKXBLUF5zEPc4foxvEH16qVgbeMuSPJK24oBAVhfbN9CKSbaZK3YPcFq1MjqxxYnwzNBMDMqYZ2WVEQMC9QfBC",
  "key39": "56c9CvELLgVqvZqejW9bg2tWgidVuizKNYRyodzj1cnB4ju8KyJfWtRLfDWhkngEGY3QuQjtZus9L2hTeQN7a8iY",
  "key40": "2Tyz1tVyyZ99Dwiaz3wV6bRQc98iLKZWymBiMGBZ5vD64nQCrGKztesw7apeaLbkH6HKi8mMDjsVqejnsYWTH1bv",
  "key41": "41ukrdsmoi7VbLeyHCXpSFBHNRGSMiLkvmmxibLMYDsQUiCEmVb82oydNupQmrVKVs58fGfPTksGMSh84ortkyRK"
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
