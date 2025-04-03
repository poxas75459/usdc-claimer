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
    "2R2YPCCptGLtwDENtRg6wz6oSAqzo3D1ksbipujb4iq65rZpBLgJhzfkepPm9LHf1CXh1HSuUFzHYkvWrRrgQvuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjAf5Wff86GcavhHtikkD14Ft3MMNCFeLchDp6sHghx5sAY6LE8M8fdsEysqKrAE9775xBerYroPezo8Vt5hH3g",
  "key1": "2pTwJ6jBV7q9CyS3NRm6LZ1fXPJjsioKC1J4X1aJnngo7859FEyVpRsDTDpHPcQ5gCBqdWENY3jwxwQsHJam2bnn",
  "key2": "3y42YDYAzj3tKk5JqgJZsBy4LUB6eBCQqchw45MAmffz5wQDRrstk2imLNYdzXZuKjw2WXc37hLqcPuSk99q6gaX",
  "key3": "5mataQRtPPXHt5DD5svYuELySWrcJGZG9fQfg7zatX7erG72cruAdzQQFFrRvopsLYymQ7XqKP2QyRfCAUtSnRA1",
  "key4": "5Gi1dcnFcUcqjTJa6tiiNjJQnehG4XQ24EedjabbmBuK7mu8AveRMnyMU2cQrenKfqqq1ZqfSJQMhe4s66mMeLF8",
  "key5": "5RHWfCYRZSc5VZL28crpHTnGt9JUuHMmE8GzaMf3xmt8aRyQbm5K48LGXK53ncEAPuWM1pt73nV8UHpGk7SxsVSu",
  "key6": "4RHD6BKALpehuS4KaYZBnafo7AG3nXjXQdvJGMzbQzGLP2Sjb5ny2yDEDGwfYGBcHkWvxSwr2BVZNLGc4tiPCcRR",
  "key7": "2fWgHaoUs4Yp8iE691PFza43kTA4LM6mKPDhDLSXzPPKR6tgfHuZ4p3EtrjMQcDpgguZ1hHxLGNJo27JboAb4ijZ",
  "key8": "5ZdszEB5UPm4KdTgpML6fuD2fYJe7aqpkJZQNbvT4YiQhmkQrWVCZgEG6pYyMAh8kpTrch3ugMW5sFVBoCNUS8dg",
  "key9": "2HuvDmxE5XcfPZpdrGKm8FS7Tm4jDweoH5WTHokgwnapuTGFo5Qtj3J9b2SZkyy3BiBsKAbZwPsBkaAcFH1vmpiD",
  "key10": "4ByhGRvmMJcw4pBCrusisB1t1extr1zFMUBaS79oZgWJz9ZFBNkmA824ECh52Zt3PpBoswv4wK2hiMG8FPxM6NVK",
  "key11": "4yzqvGhBpgFqKiq1r5yNatHQEwjnfrpQx1YGxMVGzU1j6LB9CM88HL8z9YK8c7nBp4LGPXxQeQGLP4maMYPRc63V",
  "key12": "2FZTvnYXE84R9in7ej91gzjoWEyjwJ7Dskze86L1BaXJz6zN6PfWY3oY1ypmcBZkrYH2CYC13rJvCChXYLCVsqp8",
  "key13": "21dbTGqmTqYL98dduTywA27u7iRrYtmgRjK9mPsjsJZKnuRStmuURAoedtKcNcLS7tZ8yB6ZqQQkR7tXu3fKYq49",
  "key14": "5rgqHoGm36TzS5sVfSvyHStrqFB7dZAmLbUgD54VCZoH55wFyRwxVZ2nQFt47DtBKkvJXFQmSpfYRaDfsqphq1EU",
  "key15": "5WTtG4QAcYkHtAEoy7UhX4gQHm2HjszMtCccsaGDERMvC9FsSZFz9TjT1aneCq2TCGAGyjYzZ4yTn1r877DEkaAN",
  "key16": "3KCshCbrSWbY7RmAKoNP28BTRKrrCbowduJAXJe7yiRrWwH4zZZ7JpFJdYzKTi6LYyC9m8mWeXsJbCmuM6iGJw4u",
  "key17": "3CCF5dUHZgwskUkvyMwmSJMyGcAg8GnFWKkQKUN79a3K7C4yL4GGj93eXYdQ6q4HQoxJWcFP8D8Ahven8hsSNKA7",
  "key18": "4eftv3A8njeUzo9tpqrWv4f6tuhCTXKXoMrzcMpoUMkH27BjJUCtxgMya3qNBFty9ZNFzYJDajJuDfsy92oxJZWY",
  "key19": "22euuj1MCpt4oheiTKNzmEQbbpgzsDvBjgjLYu7ErSjeGEbxGDjZcPuj83c4dNcEtCWeziCU5stPProrhYboCRXZ",
  "key20": "FckUPjthBg82ZnTytVeTLByH7Si1euRmXmKujH3B47Fs1dj3exgFspGW64CLt8qJTKhngZp2dVh7jx1gRWCXxyz",
  "key21": "3D8s9apdhaBzA4dCobUpkmBsrV9tXftELKb2nZVJh6F8n6c8Qx6BRi3xNHn83evrJfDj7WYjTfWyRvK2LGANhfua",
  "key22": "55RkM6X6wnEDz13ydUKeWKa4Pi8qCemwmTCGXCC1eQi5atdGaJCAt2m6P27KZyWzwteQdwmDJwgRnRy9i5Lf9eVd",
  "key23": "8fhnBXsTFNXPWL7ZA4FNcpeAWukAFemorXnw8jhL958UsZ2724zugHFr7kFHmQquBnp9BPW5T5DsC9SPEri3Ra8",
  "key24": "3LGKVJAzc7NpxLo3SeSVXSkHmuigCZRrJ2kPtGi17AEYizbZcz6TQqYEtqzCJucMG9KTdTfZCHNxo1inpoaPnKQF",
  "key25": "5DfkfBzKmUrFL6SUazhTVM1FVmh2pe3dWuP6GrtpvTocncZjxbkK2YGFGzGrAhd3z2mcygLb8R9ThWKcdeEfBuDm",
  "key26": "5FYhhDCwJ3mJhjs3BbWaSUGF1ajq943mvgiD6KM8tJ1x3YjwdrabnpCZHfLFawCFtRzgc8kjTwNQ1v55YE4RjCAD",
  "key27": "2enwkKk6GEfhGkDLSjchEDLkHtVdLQkbNu45UeSnymncKHCZgH2fQBSgXV53SQGUtc45bTYNDNNZTpwHAN2B56iM",
  "key28": "3HPixQ3nfDUftgjL4L9pAx2TqZxr4KmHzgspvzHoLEVqFgjX7enWnGRimnjPmAySeD8czDaDjtXYFe2x48yHije6",
  "key29": "4u8Gyx7R6q6RKQXtdQc7pnznGqGGWhhB4ZVLN8iAMHWrVd8Es9Z4pk9ngS4eqNFjYaQjvuLrCgrn5aX2CVm1HKLc",
  "key30": "28ezMrJziMRrd7n1GoEeFJEP7vEVYqnXyHHykE1NK6p4zJvZtRK32GCrBSustFUri96WV1DC3WY1XCfNh2cfs5Hg",
  "key31": "1SkRRNg4oS3VNi2tTUbby5TkwFMpdKwbr6S1acFTqHpTJVdnfMeFHgKkEj7Xb9qejnvk6erGk3TofdEC6yKPDPw",
  "key32": "3ozhwVqostCbM2HJHgfKdDSztS1nqHZwbTW6kTyj9dKo2qbRScgEiaNPYg44eWwxxLeN4NYHcgXtjKzyWMTAR3kx",
  "key33": "4e5yVvGaxLaBnCkNwULREh29z6yMN7NKnmTamaeb74uPeLBVAbpaNBnqQu5j1an4UrPfKAQmvAggbDX9erJXZPG",
  "key34": "4WPmM6Y27rSUjGpJ7cStqgnbGQvM77RsvRMUZmE9Jg5gc7cq56QLq2PzvvmmRn5YreHsEXfg7XH2JiuYAJtcoQDp",
  "key35": "5KYTjBXb35uHj7PxCZcLK9uZbxKSuQ7vpcLFC1fFxqTLC8eMjWSXugsYGhUt1UKhdUDFaJTHt93RsnniLvSokBLd",
  "key36": "4JLG6tngru6nL9vFBbJWNRz9PYS2Q1r3yZZXbCAMQQS4VPto3L8hmySf9LbUWFEu6nULnaFq1wj4scPEoPhiMneL"
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
