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
    "63WzbSWn2GnwQCsqLDWm1BHwRUCHTycK2qhH6qYhtAadyf2gQpz1AQpfAVvWgmFZ3x7aJM4Kqc6xLzKBnjXmYqKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxCVbq3Jyt8oJT63TE8U8W15FjxA2PPnKTtTJ4vzzvcyB6s7jNBgiBP6KGxZggzDGM8cpMdXq8LMBs5tnh75hkh",
  "key1": "3sLCvnq5akyVwwjxTs2VST2xZswSx4m36xZEiUtcg7jGUUuPaR3ZzeNpS7Ya2oqwhpY7SarQQ2Qyn1E5j664F1GE",
  "key2": "2r7K2RVq96X5auGeoYJLU2F2vJXLz9ay8jFEAtEZRc145G1KrkRNEGRf7NgqT5NJAq1yY992dC9bVbF8dWdrjm3W",
  "key3": "32SagV4ch3pnNuCv1twCd1QAwWY7wtXpkGz3GgdkqGgK1hQfzZy8X147XPFSNFeUMup351LXT5aVLuGGTimofMFA",
  "key4": "5z5Z8jF38X6EjWqx5GLUXR356jbsz8FdopWDCwTScgV51NLFbauJUmxPwqHpvv21nCstt7tdvFW8a13fWsaZuCyX",
  "key5": "2YeBaeAmipzsN8wtYDcMHJoN8Qd6NeySSVrSDd9iBys5Gj9XbqijhbWjkSXY9gQJe2omdmYTSHx2w1awPMafEbX7",
  "key6": "4QFns8FmCiCLxHL3UcCLqHByMoD64p5e2hkgzGD5qUPtfxU5Urfr711KkrSFHZV3dajFLykp8KnGbQnk2kTcPWru",
  "key7": "3JWcKreBq1ojT3GJ7J4GVSGTxyQjCsff4Lso6B9qjxAU2hLxPFs2GhVpwNfeTqAj77rmqW5CUUGKdovDzqZWB4ah",
  "key8": "451pVhA725GntEEcGmREyvcbnrk6MXLLWAmC6njGevycuB2oE9MgzhFQ5TyroWG4ZMNom5RQQKQeRZxhEPpoPLC",
  "key9": "3PuxuiWbCyWkUW46tUbZUV4tZH2XcYajMErGoKw2HFy4PYkN6YR6QBQNFWTZMDUr1pHcWMmeFBN4PxSEG9uRDy5m",
  "key10": "4ukBMPkzJWgJzfd5VwKYtLFxQu413Sivi7ejCqkQVT1KtTTbguHuUN7BvpnR9kxGx4Y7x5yq9gwjCBFq2aWDsKth",
  "key11": "DkM3Zj5QbezjMRyM8jKbRz3A6priZnfkpg4WnKGBFy6MTFSWXQeoeAVo2eQcAy9Ys2pLbYBkGNjRXctRHjYt1g8",
  "key12": "kQLFd66kuxwxozR1Jb6z3Y3fVj4xBsovDiA7ZD3q1AMxvVTECv8Cs8vt7hocohUPk88gsQDvwzPfjkuNouZxTCK",
  "key13": "5E86P8sxwwMZQVmCT3kxUSTHzauLSKowpeoDBtm6a88njfKZq4CTNQs7w7wbPjin4Bt41V6ypVLFKv88mtTVpwKJ",
  "key14": "37fAgJXJaqzQBDSVDPDzR3kmHEedifzf2L1J2i9gEfn3FYTjwPPt9DD67NgMYUoEqZ7XuQ4Mu354JPSPXDPxYYhT",
  "key15": "52nA4vM9sHPCadYzjw69ExTwoQHcoxwvjhzniVR2yFZL7KZViVTbbNoSJzZRR5RieV2FpXgoFpcCfvkmS43Uev82",
  "key16": "5VY41Kzv1ZvD14sp7TSom3gkBwhjvA7v4ubdkTg7B9JdTmsPZUkKgngZhEvphL7HTJkqCkujGjZcmdibjeAkYsM3",
  "key17": "4pQhocy2brtbB1UTPV4GJ6nADKetQLynrV3mSHFSLA4fp3RRWm1hbmGsim8eKstdrBv9UFxZtSXyKYBGDoZww9sH",
  "key18": "4GDLLBkhAoUskP8yTVSjEtkq9wF5E4UxK4UBBnnekJT5joa7nqmj2DWztLQd3W4h8fh8idPa9KpDh37RRBCzFGNh",
  "key19": "2DNL5GhwW2dCfUyBHSpoz1uVnZmXeuwKbGcZ7G6KyyykaLhS39BjjUVv5qjQHNjVgoq9W1VFVB3BCd9Sro8JDqpv",
  "key20": "jEqyvB4irZNixfXitsuwnaCrHdCBcyQthSiF2g8RMYmq5JzuUQ9xrgkFtc7g8FsXxRkeoPxNk5wT2BeLcDnZ5NZ",
  "key21": "4VLGBrTXRYDFzLuznsknfY8Lphccv4ip1518H2GJXabbPB7ef6Ppqjeu8aDq5jWvukpkz4HiqETVcXnoGq6t1uN",
  "key22": "4U94k6s9A58MoA91R3SZPJqC2Kg1AdzVp4Ukusp1FbJGgeHoi38rAYouTMirn6Ua7mdBUjDKwDRabLHfDBUUzkSa",
  "key23": "56UrxfRb92cD79XFoNSVn9jwBLVACY7GjS2fCQmUuQQvUwBooZRj3ZEhBbcF26UkNMLRocxnnuhxNRKSrojgJae3",
  "key24": "bRujhfBgqTueUZiiDS5yMW4ZgaAeFEjjbSU1mEMgGzTqCN2UGpmKTFG3dnwtkGMWKEKKGgfWxnMkkcRdEuvdBXN",
  "key25": "3xVhxSpxUJGUfeHq1DC8NwwVbs7qn3ot8FcKBJEr38wfFUySMVifhgeiLSvh6anWqfGjvMofZmdBMQR8oHG84rsE",
  "key26": "4G1MoMc2VbZ2ZsSWXgR3WTNdR3wJsuG2WrNxiYiyyucwzCo2ntUhwbTYigPm2bjeP8uh5hH4HqYS5hXxHVWzgd1T",
  "key27": "4vcZLEjN2rFz3KTm32f6v5jV4EGu3ykhyCLZ8JQGWym4yErsn322bYmwTEWWT4E1QV3vxbyT96Gm8fCuhP9i4hCs",
  "key28": "3bYtZz35aTcJ2NTrLPJroUkzLE6xkveyZxi33im6HUgK5pCjE4uw5LqadPxjSLPYtisR8TrRZemFAyY1hCFecc4S",
  "key29": "jMzMdwrB4fmZyAGCpBNyJVX7kiVvzN8D5AwMHcg2gZg5ufsS33DuK9GGtdDzEic5da3KPzq4mWhwBY93nJjdvAs",
  "key30": "CdJdGQEdtFqSNZezVrAhinPJm6S175WMNS5WhQsnLmEMVK3dvML1P93JZTB8bBh74uZ3wgpRvXmiVDYR85ckuXg",
  "key31": "3Bn8n2pL557ikj3gxt3RvEPJoRzdajVnZVadJAEHjVUTXrTLiYmXBkkBix4WyYhBUEKS8bACXfW9iizHPr2Ch7kv",
  "key32": "4YMWqV8RrP6qVQRN1z4W27WCszWK3y4L5vpezs1vwHx8Hkj9hLahwRmvPrdXePMAhc1UqU5Br1mLZpBbBukHkBqp"
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
