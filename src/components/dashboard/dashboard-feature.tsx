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
    "Z3tK6tD8LpHGA4jkn1ajxgUv1cSScDEKgVNRPc2xbxENUqk3eAhrXBM4HxsbKTrSQiwW3sLALyzN7ztRjNLBdwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mJXX3uWJNVYRhNpZTiRANCT2kPM4opsHvErfbFYwMH6cHQq95F84WHCbSyhti5R6QZBz3uiYEGKxdkB7NKHziSu",
  "key1": "2zg7ownJQKVSua4zZzerbCKkUS9dspGbKbSch1rHNeUTZTjnRL4SKXqYuA4CUR1ycdqXqFgsQdBBptRg3PCbcaZX",
  "key2": "2SPAxcHYk2K4FfejXAkx3bywp3bAVuqaz8hrxUrwDNoTuNBHhzNxnmCf7P1Y4AfmZP6Y2mRrocYkJ2rYnUVZJYuQ",
  "key3": "5c9itjUwecXjVWg9UGx11b2UBkCHHHszWwkrtFPrjJ5emT1MzLmWvb2iSBsxupknaodGWbrPE9E5fQzsHRhbibdj",
  "key4": "69znsWvZsfpVXgmSx3DMgr2H4Ar5wzeAPnSremaETY1GxzyH2fQDwBWxBt5y5sP4L6Q63b9qp8b4dqPa29ChDoY",
  "key5": "5sn9GBmH65PeT4qnkmMshWa3H3e3NzzRyWYPtXAcSC9Tp5tmiQvFLSRQ9C5FtEb7CeQUpUkfNqcnb47Nx6GFKi17",
  "key6": "sHDK5CLcLLhSp6jM2fF9Faf8YedL1Zw7WfD2TNPrs6wMvA5XPVDSkZ1yHTqrQotC9jF3bCRERXEGPZdnGb2FK2T",
  "key7": "2z9dTL26Ez9DppcPk2f7ueZ2uUZxRij4AFkHkNkj1YhZLpFotGRRHigqEu6a4PwgA2jBDkbWzPcAgCJSzv5Vwgv2",
  "key8": "4iGBiG8VufEUZH7zDz3v8saDks4aMk5S5XzVf9XwiVgBk2PagguXGdY79k1gqiBtVpFs36d34TWTAejHadW8Ghm",
  "key9": "c6DCyjESsvPxjVnKX26WP92TgQs8B4KKN5vSdmYaokQMeWskayMGX3rdnyusNSoVZ9UcXWemLwNGc4X24Muu3CK",
  "key10": "vWBsUgWT51S49LNZ5KMFqHm3EG1wgRMsnURU6BPNR1VHYZjckjNLkyaqXBbuVzATLxrVrK1h5bF4ueE4o5FtDSm",
  "key11": "5sDZBqkQQQRxgKWV8NLjwoBpHD91n4ttPbXV94TQ3AmbrXHQT3koX8b1GhPk7Ge5HRddAX2reMjETZMwMedToAqC",
  "key12": "4yvyFBM5gKgQSDptod5bPKt35ndNEyi4TgM69Q57kcEgCiMn2S9TNgpkXwqN1y5ZPFLVspLwHbgZpap3j5Y59y6M",
  "key13": "5Tca11PQ5rW5RDmWituLM76yCNhmDsBBAY1L3C1o23YuedEbWopM6JqSLtn4DJ1sXen1A6YMojrL1aVXadj5YViG",
  "key14": "3PNKyL2y9JnwZdgMevQFpRDXPDP7qFuGQVLuZNsoiuZyTa2NfdaWvFg6gJgP2NQ847AYV1uHRacYYESZVZMASupv",
  "key15": "5Cc7H8TbyQx9PCZdTxxmJbFpDCGVGKVoqqsRmynza7yMTcmyCgBooRL2262Thw41JF6BvTTpyjw1J2oWrZywa37A",
  "key16": "5GtSR1GpnLeGDduhJjZtBSnuZTg6V5rApMWThf1dv91fKGwi1wBzvPh45eztNFcB1kvr7F9LhCQJAxm4RPQNbqQm",
  "key17": "5xvuvdh7vWCd9VViBstp5TCofAk38oJBVYgSvFHTUaJDZCtCw2wecWQtz13ucoF5G1ApYbJnpywwaiWEbcUzi3Wq",
  "key18": "wxrQq7uRkmWs9mqFdd8ZwrCQah3o3PV9ZkjiqpY6jPQYm6U4xfzSvi7P8kKZ8TDFC9T2hGvBxAdAeKUCBHsC9t1",
  "key19": "5NQV2w5BSp2Ps2k3224VA8NJDBXeDDRw3GxGgWT63y3ek1gYuBx4pcb7J4SeqPHzGr1u7CdHZb4na4BC7GfUnMWJ",
  "key20": "3PNAxTkNJpVSg7KpP3B2Pd9Ka3qe9LLg1YN9NBLmQfdZBYh9te5KQSRiPssm2AMB7DiZ4wDdJ7vLn4JQTtcLWeo9",
  "key21": "2Jmms4adQNM6zzVob3NrJMLvnvgF31ir6Qh6SCRagE4dGfgAnFfpNRjigu3ZkpCdsNmhfiVJecuKYcp9ZAAAh7QV",
  "key22": "4LN67f6cV9aBii6c8vm4S3kFbqWsfjNByQDjvVnLF4Mn74H7qCLsr7tNF3g86Xp1qUocmm9PyhN4p2KRvNVRN9v4",
  "key23": "4ei7otDUB6iBPuJ5MtUhK4bKMJkeqFRTZHHHZH3fe1fzU83uoTFjccXFpRnSrJSsCYwXVKMrAp2PfgiKSspJ1cmm",
  "key24": "3xfWszNfuRZqWeBgrqnYUv3yK6pim47ydyKYLmDAbVVsMR9u86tMhzxy5gzWjKpYJvkRoQ6sf6i3bBNdNnurec61",
  "key25": "5CZ2Za35TgDAtYdy7qJvCvwcB3nVh28Uar7yLHmLkrEGCvsB4D8MqEUnRvZ7nhDDG9aBABJ7nRfpuSYSceE9F4ee",
  "key26": "2rBw472jdriqySSuPv6DGtVWnCYnbiaxt1YdBWgvQkTxj3z7wook2NxAS3QtSNPX27ua4weaQLcifrXEhkSnx9Z6",
  "key27": "CVsqLrJP1ExwEs5m971vPHBmkLQtsf3sEp9aACSRQFvpVCVpZoAqCYhFbgkUaW7avD1aDAdoNbEvgdZgxKLxvJc",
  "key28": "5gLRM2G29LQAx2a2dUfgo9h8dXLUjm2V7ESy7Rtx5bHJKFMKAdaCvis5s3js1E1j81HuLjsoYGn5TyF3SS2hojj1",
  "key29": "3s7ejUcNc1FJEkB13h5PsXCwS6hqXQUrWcTzm3bZaHDy8zP5F6Vg9G7HEuMqS2fH8WoxigC2EpSmVoR33Hpah28F",
  "key30": "NTFyT713YpF34AgNVygp27SiURFo2Bq4F2pHNVDhkDESzm8tkS6eFScJiko2rG5Jp5KfXQk7gSBBnaHhmPU5ewR",
  "key31": "3nj7BgcMg9TyvYftV8XQtVJirYkXR4smHwsuoghMSP3Xs6Q9fmBoPpi4Z2rzcWeNP9myw4ZVAKaC93xmKbu1ejwZ",
  "key32": "5D7UA3JkfWY4bzbRY9iW7MDQeVzoKFs138RxzKmFe81EALky4wt2BrDU2wKGNfC61mS2qwUAZ9goDMWE2PgYXBUw",
  "key33": "4vsHkvznGpv7qvabtZ8EAoB7ivsD17qW2tZxM8EV2fZS9WkjLNqbqquJwVeq2VpH3H6aYaQQwyCJ3h6PqVuQ4MoY",
  "key34": "2x7oraXqHHwYfyrYGx4tW8Pdt57NRVkm9TweRMnUFviiaW3cWBHdqsgm3RLeRQkkf7y2HYj4mvSJeWY2w1jRqVTY",
  "key35": "2wUs5nXjKvFsECbt6HUjrkFXbs1RjpKc9fBFFQKaZ9ni4oV3t3g9kPUSXEa4f8CF1jtq1A2amUxvCtVR8ABWM8HF",
  "key36": "vFEjxTBZ5C497veYcH5Z89THZYBwArQqZrAgEQqwxuFBqXceHR97NELeWK7yawWm2KtrtHRx8fdhA8r83JP1iMd",
  "key37": "ietdrEYAJYpYGJD5Ffi38q5RhmXQEW7p6d6Na1eiSRSWVPC4tPzZdh6hkPQQY9jNPfGaCvuYDLvttnV7BR1QaML",
  "key38": "3raRi2WNQxkPE9dKxsLgeHNFc22hm2k88VSqP84StDGnfBXz8BxKRZT69tGezzocJvMRKC5jHVjB8bccogaigrXx",
  "key39": "5FXP64RCaqzi5bT4meNEw9XShbPSv5q2fqYRaBZLmmC5gXMdw1U1wsHyMHi5ketoDib6TKpHSukfgeyE76GbaZ9s",
  "key40": "5ZwzZXr6dk5VFXJAPKxYLCHREwyFRoez36iuenYgU8miXG1ic3bNpcpNoKfDZfG6uZBJCAosi9VLh6s9XV45Mdbp",
  "key41": "5kPxB4HSdRFm1be2o5eY8gX4m7GZXaiCk2Q5EkcvkUNrKWSfgQUzUEgKfwV4ngy7f5dz2kHuxNkUwCLndb4KgXJW",
  "key42": "4gDsRUDwbNyzPCD8oPPcFR687mp2kurBm2bUheBWxqANB17AZ3vUzJ3VQn8TD4PkaAKtcce2bL9yL1weWrTqN9HH",
  "key43": "5hg41MNGEsqbf4Ly7epB5zAKanRLb44fNF5NYYSK274Pcpyq6nTncHetv6UZC5UjqTTKv8T6CRhoLE2nGTB9jVjE",
  "key44": "4r85W5zD5fYHPobtnRDUjvkeNeYuDRKTHG6eSbPuJ2s2t7GrWxmxbuZTPQnNgBy8sW3QL7np5mARrzQM53zp1QXX"
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
