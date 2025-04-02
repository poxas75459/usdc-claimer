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
    "5mxAFvsaW2qZeEq2sbdRkWtTDKtCaFhFTNT8WMUYJriJahNE9E2Tdwn4UAzXi7Bn6bcjqYu35zsAYKLzipYz4SaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geN6ZtpKKhCjVSaUwXzMxPk9tLA7ku6ZYW1FDR1WTC22vYfKnANUMrU8BmWUptKAGGM1YY3oXcv5o759z8wAXo3",
  "key1": "46RuRxknStJGGcNfaptLE9XcRR2CMnGVbKNKFhgCwXQHiHx93CnHrU9EGm9zkEL2dGWnUFyiJm9ALKax51WijxLX",
  "key2": "3BbAECrDv3fZMAffsa4mopuwsZe4yUZ84a5y1YctRkTtVKe2Nf75DQByNuvmy5JmSV7KoA7gZ2vsUt1jcmSWLQiX",
  "key3": "5ptHcykDWAfowFsVFj9VDvEWrnF8Yp3mLcfrHgNKBFLRprW9WWPciKZTdia5x5KLh7XRvZDhpeRSsqPTysonTRqS",
  "key4": "21tQgNo9CGkb2e3vmEiHibtFys2dMo5HJWybEnpqHCNLPojbEEorLHy774e9GUudYbvRkkDdgNMV61qnZNsV5VwM",
  "key5": "4pvd8KYxiqaW1ArC7bgqghSMjomtT2Hzi3aKTWm4kwn7sZVHBtofxKuqLicQye3q3h1NDUcFWKRQ7T8b4n66LbzB",
  "key6": "4kKxFK1Vg19WbaXgyJsuPbu5MmmTjjgGJ4dUFx5S5238FR5daXRnFXFpGhWBowNYdeKzDBKVHAMxGzRiJu7VYZcp",
  "key7": "2xZerHE6X4CBn9Dpxoc6ULocAgUb88U3pcp9BnB4UTJD5TvNizz2L9SuoH1gRmuQ9QmBg3oWkV56VnAEzpai5sgP",
  "key8": "2zKzeCfpCQPzr3iL5LEreRxdvFxuPAXLevmnHTCKhERJEx5x9tUBSsTD4n3LVr6akbdfNchYcteRsjtWGkr5eBEo",
  "key9": "5L7a2t6tQnW6csBLXpR98JNxV3tnNDAypbNSMomr8g5H5bR3owCEk71KcGoRcsjReSez7HRsugcRyVMeD8GdXTJF",
  "key10": "5vD74JCYqpnJvbAUdLgap7MRRq7jj8yDg9kJPk3WDZeKS5BPHahpAw4nKbJ1uneMW71x5iyEh9cD9hZbtpsULVZv",
  "key11": "3QFdmLBedmmJcRPZevP6FLLgXTN9bweMgThhzvDwrwum5ccPWw3nNejKKVMDLn9BChBQSwER5yf1JVxQwncqTTvj",
  "key12": "4YNpGcrBRoKSubFUno2sk5QihwSGtKcJwpEMKwHeEWfqkPLpmJg4M25TTa1ebdBtWx9HsQryce5hbgxtbYHFZyV5",
  "key13": "4ASLXKErBPfsJrLBqNQaync1TGWiKYT7F5paBU8dA4NwT98HKvxNY4LaSQHgHKoYNkDtxWceH9uxJ3kFgxiGUGRP",
  "key14": "YDG3DpojUqsroYdprRmCMHNtHoLuDvkZPoMUFAqfkxURoKffxU1rmEQUtVHjH6o9vVWr8ndU1sFkgaiU8egmHWw",
  "key15": "8dJswmpknHJuQySgoLXLZaowaytmeQWzTtFMWx7UFDe7SjCTH5gGcotxR7yuP7UcPSwvwB2uoEPFXKSg5p2vaXh",
  "key16": "cvxcVPYbNrjPMwB2HV6XrfZwf92pdYob118wAfkN46FLNNWQfMAyU8CCGK9CXv98m3QovfYc3a8WWZGMU9askXv",
  "key17": "58VC79UMkGogdZ2q1zXiVjy5iFot42upvDCHNgvRQjBoFKTNQmXAvp6p3wuQwaxsPM9G6yDQNooVy1oEbAZTWwgz",
  "key18": "ijxeZhYe2hKcix6uomRtbvLNKLqHha9V2vCdWFdzDpSCQvyZxijhSGLEFFsp8PFTsUNSBBGpWBoEGpYh7zpDj8t",
  "key19": "39KRu3yFNNTWczqF8BQW9VQ5khPfGjBL1hjpqbdjEuqHPmTaXV1mBLNfqkCRobaojky7L4kkE6LpLbDKqQRqRbv1",
  "key20": "3vw1tz5zUUDx3fEmEuCPBcFxeaLCmJ9G11BdWcdTqXcTAaxQ5kxWuomVKf5GP7HtVr3hAkAvnxvtpozecbEMLT66",
  "key21": "4mnZy7HaLWV1omyDczBMtUHTaA57rTJXbc9VLPfWC6RS1VmyMMpxgh9iP6rUeg4KZj5SgfjnvvtyyUKMQXpwECCk",
  "key22": "2he2ub23yQ4ZBfCRxSF4AKXnZ3H4GHdRANZDsU4PMjLaSyL1uwZk8mynvyQhbSAV2hktyNkT2kAMriUWT6ZdGuV2",
  "key23": "g2aKr2M5WDZRkP4MXZuw1LXjJ14c1u914qSZSKJrBN9QxMWvmFRrPbU9SDjyS3HfeinZ6Ddsj9Ew7VWrJYfX78m",
  "key24": "QZXrCULoMpe69SSTirsd4BwhK2mWqxXc3emhmN1f2RYdQ7kpXYALBMT4Ua7jUdRuhrUJ58QjvrHJhVvX8gfYCGF",
  "key25": "2dy5opiHpfu4PHgwDcx9NMbd3JuSVpHNz4p3cZfktQKBaABcJsLpZPAdMvdfZ3XD1Nd8tvCDdu1YCvG9Jd1tYUbT",
  "key26": "38KsP2A6MRszATd3CWtVi4hoA2a42XoxUVoRB5qczkZZMAefDJM3qSR15df6ocBonkrw1utKHSRJkz17PnNBz8MZ",
  "key27": "5B4BZc1EwC7r8ApJtdeTGeSpyGpiMmAKrFhid3xfXXiynE5DmACbbAnGrxV67gMu9mEiASmKJJTFU6LiVgy216xF",
  "key28": "Ux3SU3JDYZR5kMTdj267P3wVM5QoKsdCK6xM8a1QA2i8bZSuMrbAa1ygqSzo5qVvkK6nzf5GHicb2eCphFUdu9C",
  "key29": "4G4RJB9a3CEaFBrZ8C8UHtJuf2NB2txAUKTpRcu3NFz73RmNFBFozJ7KtZc8k9j8qy68fA9tjTtYr99LudoUP4qo",
  "key30": "2EA2GdUgXUfzzYiFkLyGdt7RKDNyVyfjqKJQgbW2zVTDmJj41WHCXhQKRbNznEeSk4w1eqCsN4WVm4GgrQuDJwH4"
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
