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
    "A9MxdEbh2EvotXRaumce7JXtr1W1c1EpJC5B6n4VcogogK6kZArxMwUQJxnWwUcXoQnVmePuLT12WkCdrMDBtnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nak13GsndesVQcq9zkSg1zx3wXTjBiTDgU7onFnA43h4RBP8uooW4KN6dCtgRfYTw6FWz6nTDbA78iDypENNriG",
  "key1": "2mqXmWw2WETdusYeDkQ8zyYpycn9rm8SJ5sRJ3a8S1rgrkZPDANUmfZ6nUBiSrmHdnwQjatU32femhJH2Kcmisyj",
  "key2": "3NxUH3JzF3qMFugqhRcej4Lh9FhGGvLPMDcAu5EpZ1sNH2QnnQTd45YmCfqh2vrW1ffw8unn8hFBJajTF2PF5oTq",
  "key3": "361PqP2YjcFBnu7ZTAokb13exAhxfz5PWT9oDHN6xawFuKoHJ6wyiAjL87uzf14kQSKv66iZ9AC9VJzcQHKkmRqw",
  "key4": "3nZPRj5CeRfvb5o8WfQbrt5tJwgsi8zru4ApddMEdhNqAVKWs5npz62oPntxd3D8fYMA7b2F4bzohRSRPgsaDTxe",
  "key5": "4RxoQCsqTsqcjuPiLJGitn9f67rpv4Qpjd2xCVmXP6G7ozWkNtuKtfd2yr3odmkAGMxF9kvSoWrDyPxiFZTcuUGL",
  "key6": "48V8UvsMmBatXJLVJ29nU8uzhwvFvSCeZHVSWY6AJse7zu4DaDC6STcK1XBoYCpewjuaFKPqKXfFQUBsaibrQnQ3",
  "key7": "3ywNNj43gXEDxjdfurEf8Bf5XV6drzhEhCPZVM4G1VnicJBvRAQXiB7tcNBSYdppD9rhWw1XcJLKYKm2Kf2msm1y",
  "key8": "4YH2KqWsJKUUr6CC6qk8YzszWcdWDTTBe8qjTtZG1eGixydM1scB67oMJ6iT7CfEgXfK123P44gcUZrWvy9ZxXhF",
  "key9": "3Ud9tXHPoKN4mfLA9HDpwoorLBu1LdrWGqwvBgoin36uQJ6K4BBK3e4zravcrigk618crTrtJdqWSfuRtH5gfyBp",
  "key10": "5tS9vVFo5gRqqXe3W6a1WtB6nJeVKdthtADH3TrjjDuyjGVjom67uufwCPSyCaiN18S4XKwY4Zwf3BAtiD4xYRdC",
  "key11": "R8AbAB7fa75TVTn4PraZoyTAwdWwCmc7VFsZnY1b9yaS6Y8SkFxtU4ifTdFFdq6gUQ824Y8pXnUDrUJPdmL3teT",
  "key12": "5DgzNQn7RpGcKPKzGmuAphNARxJnpa3ss3YdnHcjLNfn5pfqJeDu1r6fUtVj6TFm8ZquSgTV28sn5x9VENdK8YTe",
  "key13": "4YRMKZfUN9z67prwhuygiRziuc2ZvzjW9piYoqtP6TYQvYVvPqkcHhgq15tkcHKes4t8MAP8eugueyg53uydkgqr",
  "key14": "5xDkVB5rzBaynGGU1B3h1RS9QsbpttTvAHSQZozEEZZ65G2DjmH9qiUaxSqGzH5dBWAM9DxsoWeb44xu4VAs9tsr",
  "key15": "2eQWaSgReMgaK9RMcreRkgz9DZ39LfMEsEtYgJziqD11yKnF3dnncVPXMjQtS7Cy8LiWXJXFyCDuonuUQu3moedM",
  "key16": "4yiU7Sk9yjez4u3f7a7APxX3smbKRjpaJRtHU93vk6TMgxyaCg4VToeU3nVZNCRGW9k5dkMYQHbHXNF559kzCQZH",
  "key17": "TTUTQnUBH5pF3hzU4c13jw9rYyghrKiqTVWVAx8mydtThggsiiyox9spNYwnE7iGGQpgjiE9C5t2X5RftxLDEpf",
  "key18": "3oMQmbAUkHFNL3Qz1vtdQqJYcgd2xpXSMMcC3G6wRVRG1vrMV7QhMRhNVjrciHV99iMFb3K4LubPMQbH7UiLDRyF",
  "key19": "3BxatoHF7Gk2Rd9RXJk8APfyAr1jD3o2rjBSDpkUN9mJRFDWEAjMrUsdWdNt9YddJ9AZ9zkgXWVuQQfaqVcpbWXg",
  "key20": "26Bv66yKKyxBNmA7ptViT9FtYyKPP8DpQQ4dHWzX636sEU3RCDdZoEEygfsJCcsG91vubnwHeLxwKu3665dsJHiC",
  "key21": "2MpoENAnY2UTBUw8z6gAibiHvJ3ZPNxyB6z3T3eBpoW5PXQVtP2enWuPSQqScyUxhzCCmfdh8fJx9EN8QFi9aSZB",
  "key22": "5iZ2k9XjJRByktNvZWZPvFdA3on23x7BnWREhk6Up4br38YR2EwLbAFNDX615LKWZyUnHFzifDZA2RWkdFJCzrfo",
  "key23": "4jEdPrcH4zjqheA7bSrp1qCEKqNeVfh27EaRm5cyGUy36Px6H2GtJBQ8qBxLxFUgiTj1mxs7g2FPfxtjGTQJeNZz",
  "key24": "4vcdxACxbpJ86NoxmkjXEWrgQhwvdyDrdHSJfSPK1DT62pxE1dc9c6G1kXSsDpSG9jxpNa6U6eBneTKBbSYc4dLs",
  "key25": "55ksffFP8spruYCAxsVevzPBDgZfNHK3T16JpdDgf56SetTPKXmaay5AeDrCuUQAebMXLJg2jTFFzj3w7gG2Wiay",
  "key26": "WqmpEyuFQDEbYk4QZDNXpzSzxCHZagSDYGkpHa3eMw5bE8sC5hZxBYqSM8fS3SZrgPgQ3wPaFuKeSZs2ucNd3ro",
  "key27": "46NNySPZGL6UpMSTMrjyvLLDdYnDQGBrggc83RtKNtKmq1nSzjTQbSEavreAAteS6bqBm97MY3d2FsUw9arB93ix",
  "key28": "53Kxn2wXEPrZV7pPepHSjsVCjnWkvewxWS5MiGQkncuALe8ri4MyfXkL1cWYWesc5gAzGrD8QgP7HpV4dTMEXaHT"
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
