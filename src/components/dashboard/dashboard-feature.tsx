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
    "52QJsWoKJ1jNGTWRnfxQLjvZsmyUYPxy4dhUXv3owcsXYu5pa43vTJcJWpkC5rX2YM3hBJ7aL28tzSjKmyMLxPkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaFWX7qtN3Nb1Mm5R15M7KtigVcieC7XH8Q9QMJcuztYNFUaSqFmB2UNyHiUjDiPdaHyEoiXcdXCmbrpLAAyBfV",
  "key1": "2oqyV51QyTwhquZzo2T8KmxhNaSFASLcvJ9PUW7BXBMHmiEta2zNPYcoTvFynEQ4px3FkNzpn71VfjU4W5DAT5Bs",
  "key2": "5H8Qn8Ht2MkZgDjSstMyvaFXXLh4Pu24DYs5dvxTJQ2mhSs7ffHLvuHw3nopHW6ucYQcXcjqp3FSWNyM3kzxynnv",
  "key3": "3o8i4S3WX1h5TmALYZfnvPsT3M4RG6iCTGPQjPSQd52YyUqsBTFGhZSqrDYuvpzoromnqxxLDgpjJeNaU4W598x6",
  "key4": "RjKGak7MAoG8Ruaus5C5WvtjwFxSJdp9CgpRczbcNx9A4spbPYK82CPoT5cWdqFrXwrSrXJLmAp6gYsSps5oxgp",
  "key5": "5VXSQmNPT5kn1NidWhxBAuRDWxLH4wBsyM7Mb3CoAhwWyAqdMB8WU3XZM6yPWz27Uws6dSYbL1DfFQqqrBVrBoB5",
  "key6": "vmV9DauQGLT5aGhibAAgBcC4b4GcxF6qWgfzd6adSTGxdHFT7so1TGvcvaG5ZGmbcDmybCt6M3iC3Gzvw6B3gLJ",
  "key7": "zYosApHvaG4J5XptwkXbhiGvR6pFDu1a9xfrnQQX81r9njxBnKF6extFXPWfaJ1ttUtLRHSKz3a9szUJSHZr3E9",
  "key8": "4U1hbagksZJvt7XLwTXYu8g6nFCBKBEagcNjSujvPSXC3f9eVmwzqYcBwR8d4dC53E4PKfhueW4mgKPLpxcLoV6o",
  "key9": "46TfMvGJyvtrTag89kR9LHgvxXPrNBKFm6r68UiFiRnvQtkGgVdqvz6R1m3DoyPsE4h12GLE4inGCZqqifKXNNQn",
  "key10": "2J21aoHKvzc1uQXLQVrXkGT3DUEM3m5NWUkcukxxw9iPnoBHrsgPd1AYCyWkPMWvT5btxC21k9WFgLdJevY4X7kD",
  "key11": "66oMbSubNpu4ZBae4ENY1V3VRm9ekZvswpS5DfjqbSqg2Ksh4o8DWVFmJooghhsLtvVrt4CeR5fLajmD1dc8zJrf",
  "key12": "44M3FQcjv2D6r36EXYH24hBXa5ynZby5M35wzMaN6S1NADnH9uFtGknmoaYP6N17NQEHdwgP4vnMtwzkiWqbJe8r",
  "key13": "3acjwfjbRbmXuAPE9kH1Y8Nf8ZZkktPRpn72bYN6brJKGRhyhViGGhvo2kPvvRZ4jVvjHV31cbncTre8kqqYiafv",
  "key14": "2WqVGfCzxqmcaPHQCWDwFWEVq1WNet2AetPunVTHXs3JWmvwTnzw1wmzMGSqe3jYeu6byuPbJ4LLiH3EfxXBHRzh",
  "key15": "473KYrHcqzo7Fpud9d9RL8HDFcazDhmH6HyVrLkieedGLN4zQiKhq4cq34MaUDs6Dxy3F9c9mVNjWeUqmTZCpMHx",
  "key16": "3dTVUWHjXJKKEgGoWmpeE4WFJWZQwF7rvEswUr9FxuY5JfbQsooVQB7vuCy8aoUs6KJYDJrLCiVJhcsysnAK6cXr",
  "key17": "XNySPY7pN4ot6eZgApQ9mosi9Bkwcbygm4Dq6BD8YEbMwhjWRmQ61AFzFporKoy8tX5gaVXwZMDT592X1SRmZ3Y",
  "key18": "4R5RPfNRNKV4FTVxZheMqV9tAEpqYz4nD51Njy9dJeTamDjwkgAkRU9xcfbzaY2PWYqqcQP7UGpvychx5Yxbyzuk",
  "key19": "2HjkxZSDCav1PQWTxkbbf8BmtmxHyZt5G12iBg6EiRpaNkFZndkBbjj8DK8fq2LkS8vQ2BKmx5xyQRDGQF3DrH4",
  "key20": "3MuZdvxB8CoQibe9g76XER46RU7Eaic7BXmQfuwsqwkukvmxdny7BCc49UXXKJZEkmb6JazMXcsTVWWW3YXfucW6",
  "key21": "oJBgrpVKUNWY5pMTrv843NyB8omXp7iwbFk1G6xAjorDbYwJeQSimsfA3j2sQUAYWuqZQc2GKg7gWoTyznKeRic",
  "key22": "33Fj1EbWD5pxvZsrfnaoWYRs5hDVmBjKPay3QFPjVBfYmV5NNRwvdkDiBt8NHi9BZ6JTkW7hyVW4FRrGRRexVDr9",
  "key23": "2cgGCxsKmPY93Z55sVR2ZBSnmz46mYAPT2htZHvLZQVg11tRSrcF9GwTQKs9cqRzLwXrVzy9CLJun8bFHjQaCNg8",
  "key24": "5WotdhN7DYF7HL4fk14apFacxJVLu1dswavFZ8gR7aufyXmpvyrN9gE4MHUc94cWqgyFoYipLneNU8Y6zFE9y1N1",
  "key25": "3jDSapCtNBRYveqPz45M1nnTjdzaWrCYyPXndkgasiTTGnFyDE88jEEwmwmDyorFMvq1ejjHuMfzkxot2kwHNoSj",
  "key26": "3FV2Vj2BV9gMQbnERP5dym81kR3d3rrxyMNfcmJLB9FJL93hz5hmXMQjShHtfb68DSjdLHqqpAXb9kAjii9j3ExX",
  "key27": "4sZtqRmCMEm5zXeWZcvDjcDycCe7eiAQPhMvtqdu1CJvosM3QZRqo1fQ4dQHneMQZku7VAYhaxRxXhQAfbZAitna",
  "key28": "ArPcMUtq3tE6D585WBUmEyRhn3bRDdExBeNKijrHPheF4Eay3Niop1tiPzbURmK5ypweNhoCsNWJXKjKCAC3yW6",
  "key29": "5vFj3dqqJDz6yLvm9aBnAfmGyRSqmi7RGBac7DoZX5cjGMMbbXKBab1bHu77Mpc8hP8ss5WkKj28HUUXD3KfoStm",
  "key30": "5FBUZAKyee4XVFPKGctM2v7EpD3FjVq8Rd4DeaSKiCDxWTW7aMX3Mn5TdjiWm1RWXTU84fLNBwmxH6FRdemTQdhL",
  "key31": "4w9TFJPjgWMBVk4qYa2xTMTpLKyp41zxhUjgEq321ZWTqMCrvqBuaxHmUQLa5gaEcQcYj4uXAeuXoXDMy79eQtXW",
  "key32": "5ZGEaMBt7ivqdr7BGuyAtny2zqhByVG71pnL1aJtfb2kWCNp1D8NM8rZtgoVY5jNFuUzcCJRN19z1vWttnHiR8vL",
  "key33": "38HCLpKJeVrdBAPKxuKSaY49xaTy4QuSF7TKw8zX3R6u8f27B2RXoSPwDs759MLqZVffe9TqM4T7vJpT18kZGsEt",
  "key34": "4hXrKH4ytpN4TXy7SPgBDfDN9nvnUZx21Hsa1onUUuuSUHWCVhxASvgNtu5ahzakwwpi6bkySFr73KfVQbxMsG9t",
  "key35": "2uGSEkMEUuVNnGa2e8LfRRWJWL3PbN4NZrVuDMEDuHgb7gw87bRFiJLYWLqoPGss4zjx5s6ck9FBybFAiPDxawPb",
  "key36": "2CPM3DzuLYmtCggt25k1VDct9MPRSNwF3oWxaSad2Bvk2T4GShXLmFNUWJgjGWo4xWZ15etCc8xiyMMMBoMmLzzd",
  "key37": "2kwuDow9mUzSqM35r3xKunPPgWgmjoAe6azsu1gSZVAd4LGKziLDfGPG1gteXsMNQCNhnFHHTwzPZ59m3t4VK9Gj",
  "key38": "5jvq79BZ57gbEFRsHFjo3k1xABZvwup6fcbZKSARyxrioSkgUJeLcr4YchCMjx6ApUwKXe6ygE3xjB3JfEuFhTXH",
  "key39": "46KT2xAgdpzoxMdRh1w8hDKm3EkPsSugJVtMDSiWWH6iX2egmu4aVGua8AYpujQMYwWpkqSghjK7VPY5LpiyYq5P",
  "key40": "2X7nD2YGMEHMrjBAQGQ76yQFthwmHoAB5yhArZ4jLDxfubYM2AJByyfZgf2SoxRZdbK5pKksZEsK3EGdtapGxmvW"
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
