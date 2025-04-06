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
    "TuE1aVmwtvweq7Hii69BuLhJEZSpbQhUvFvJvxhaXKhcheNKFmh1Cv36htrZQBXeXf78FXNvGYL9PRt1AneGsAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7HxqoK72exo3ToQCVqzmFr7uyGwDTbWpinzQz3QUJvrFS1MHJE3i2bX3uGfDk12WqmreaDKy82qjM24zJo1Vnk",
  "key1": "3RTbhJvaEXjWmdisehmbCE1M5KGWYqDYnxdBBtS5Vmkx4AcR2SyGBheWaTK8gZvQzBhbq9L7wnrKof42suiHhpCT",
  "key2": "5qE5JZ7D9x9mMU5vrFe1rZUtxvVmWWV2eXRhKddqUmLJigeXXRVdmj1J3WcosDtNAzYGRHN67oKmWvGiNtuY3FiN",
  "key3": "4aayMNsy88z7sswGzZ5vZc4CFLeksxFjJ6ywie4KouZ9fpbQp7KcrwPEpdyTNMLtuV4mGhDoG22PwgE38gGGXscd",
  "key4": "2snBt6od875xgompzPQGjDir9UbjQEE2y8cLQA4p1NGVJeNGL76q3J7FH1UASjwCTrdcc5i5c3wvNGSsfVUoai65",
  "key5": "PHwnVH9ULBQLe7UNNjs81sYXxEsBwewB74wnx3HG5sUSNcPb2EieNXPR3VUUQJEGJrvQ6bsvRFqcFYoZjkk7AEn",
  "key6": "5tcTgxigeiZsY7Xg1vEFvAVTND748ezxxvDmQcs682CKxZwGA2sCFFgewKwxeN1uDopGhjfhfFsnUjEMDpDjpNnL",
  "key7": "2MzhbutkpRMN4nyyJdB55BWoMei7qTd1wBMv9oPicBEU69diB8doYmgsZZQeD8ih2tNCvHPpmuJDq3pM7JbKdrYg",
  "key8": "3oqt2hdAvXmanXstpiYb3bc1SosyLrKN2Y7RarRNKbhbcPY687cN7h8AdDyV1j2rfCvAyejD6FB3SyKHChbeJJfo",
  "key9": "i4g5FHqW2fDNNvcaQBoXHCKv5rd2th3yixBmSGAUV33NugXFuqa15xkrvs7NmoHuy154CTFjWMBo86SA5RikmDW",
  "key10": "4zoAe75P3mFhAjcV59p7zd8epvonEECDUNB7HyBoqRbBfHebzF2uqg17HB2kfg6YYCcb2YRPVKhkmYoc8ixVu3Tw",
  "key11": "5CM4qFRA4PfGZrjJ69DadpVkWBEPiGQpbyn2sZS3Kbn5EwkMGQ7e89PVGFnDFLnQLr8GQmcHnSxZVLVXwaP5Mthp",
  "key12": "3PHqGfqAmCGokHpSsdRHQpNNUJoCsJbCU5nUBeMSm6DppqC3FxhkUZyevXGsHognBED8hmSjAAaKGEBvRh6rDgcY",
  "key13": "21nHTiW9vwhHNDTtkaTwbdqc5WADHrBP8yFDfPt8ZgJsCxJi8Xd2bL2845YAr8gM2YbJmCgqvLwrfXhbyTbxVCB6",
  "key14": "3MsHCWToCwjk8GhEYezfSyzn3M7iECdxhgXQ27xwdQNBGyZMhM14WRaNF67ZYAMW3MwCnBiVoERsxhFEdPBiky9k",
  "key15": "51nvoMvECYbgtKHaGNgFp2rXdANiRmstHEoDfoFMs5yQhqVRgGNpMywybKiYxy6G2fc4Cfig2sD8qjCrKfciqUjb",
  "key16": "2uXRDwH1UogYmjq6a4BxE8tnfJsxcKc7mJzAoAvJqhFokWY77gBwXBbdQt8YPRKy3HxiwyD95hgo8EQe6ovoVSZT",
  "key17": "58byHey88tp7KM6Czo8Gx3NqZjfjRcGyZZKzyEg7P91whvXVX7WW3sD26PnzMuFDVgvJgJ3sNiUwKAvRdT2Tozvh",
  "key18": "5bPEUVQNwCahDLLUC7fD8yN5myjJicrxgf94WL8nk4ivas7XH6R5hn85hvqGgk6MHZdwLS6P3wuEnWp1VmJQhuAU",
  "key19": "4PnZMUXNFnvAwsVomWykrbQg4WdQqNqcXE93XkhV6wQ7DZX4vFqKQ215H6apmeRZ9uhe8QeLrZVxc6Qhso4t22NB",
  "key20": "4YFwB4edzZoJyiCB3J9QB3cGV6YQAEjQLtcrvctH69VgrZv9Ywc31NExQBHxJ7Bij7vRzoixXKfjtQBMDg83mQ8C",
  "key21": "hmVdc2V6YcCcxL76247kVbrFAs3xgWTLj2EVcq41kJKjEgWbmCfZYzbPoJ4WYJcXThQ9ZoQezaSNPaQEoYpdgK4",
  "key22": "3fanPAsvDHM9xtwfyAmq3Q3eFqorJSUt9JEvkmNRZNUZTUkpd3ptVfoFoARP6BPwoSuzYSRLQ49nJzKVFkbZD8QA",
  "key23": "GnnfLmJHbEnCNRuXyDWTVSTrddrxTASyhHJHiWa6m6JnmJod4MK9sdoG3NJqQZFPNLLRTPb5PnJVXDM12DiZKpX",
  "key24": "Fbh2AsQsAZD8Rhk9mzQbjdpeAzr65YsctQWz4txRVziAo4JRyvVVUyDmXGG7K6EPJVrfvHuVsqPVncHoB7UFKM4",
  "key25": "4Q5GxCeR5oedcHDMWu7A8YR5VJ24GNHYEB7sM9yRYAZnYygR865FQKN53wR1k4GhcvZb1r2XTHnoENNW8kf3B29w",
  "key26": "4BB1GRL8JmEr4MnJ4s4RzCzYqJwPX1xzUyekQfvNbjrKLBoR9vjWK5sCTKvmh8Rt66P95MKuqjh97F7peywhWvAp",
  "key27": "22VddgLMUQRiLkroFLNE97UfeL5MEaqvkGgQKeXtCdPkmk9vTjYuGhzfn8KsdqbVRyphh7UdBywDVZi1eCTLrD6r",
  "key28": "219VaCq1R55TZBw8pghrTpjjXY1tXbpNdXTam22oX7cJgyaNqcMWnXUYk5YRTFhvNvzC9UWcv3oCgvK1Hyjm3zBo"
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
