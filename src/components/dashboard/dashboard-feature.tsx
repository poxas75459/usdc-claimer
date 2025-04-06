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
    "5g9KQeZRfDLA8WxPbEdMAfgoJL4AjMc8kdUkJSrVgyhbfL1Ryea4MBzr2A9Eh6jRxVoCrTnqNuXcMwFfhvPKneTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ELtuqRhsUYcoW8bo2vbRhif9izLs4a6eTG5raC7B47Ww9tVugDXLe8pHMVfEMZ51tY54M3Dcz6vJ9i9fpcSbkRo",
  "key1": "SSHnSxhjfCMXgtgHzEQW5oSfBow9ViaSBKG1BiDz1ashqDN2KBShWKGEsVCk8zabmUru7W17ZoZyqzmR81hsdJ5",
  "key2": "ChMVrBzK2ZgpNSxqPR46z232yqigyjT8sxTnzJ7cevDtKT4nxybhrtKV7iw432scezHT7UGJ4BqTNeJyHJ1Qi4s",
  "key3": "2z8WVCqd232nS3TB7QpnpyZDdCRZkjbso2jXzt3oMNECW15T99z2Db6orc282kE1UrcXWBEVJer9Df2Dho5TTbDZ",
  "key4": "2NrpqtbCTdvqnbGeLV1pTnxjxpoqQ9D4V5i1eYtGafyU61yHEcM2oBCrLULyVdXVaNXA4qDF85BA7u5LY1zcPPqg",
  "key5": "2BdfqJZDfpo5PgALJt12xSppHqHEhtyvvo5QuQn2XoHTJ6X4tvXxWo6HPkadTGXZzSANCkdGwArpj4YMc2EWvEAY",
  "key6": "5CxJLC7jCQGbkkzv5YViLD7Xrdp8Yq9DA7murpFW5nci7hbxoPwAwJGNqs3xf86UEmJAKA2DgQPGy6CH7EXeyx5m",
  "key7": "4QewHa8sWxdX18gWbd1uB8hzMD3oRAe1iRkHSKn36pXPnRHALkksy98Gmu9VHtXjuRZSYNcKjDeiGG3JNJtaS6Ju",
  "key8": "3aq7iEZesea551EuzQ7dZiNgYBrcje2Xd6Y7izXfZWTr5Fi7eodpq9TvPUQWpeLFVCbtrVcEN9pXSENczqZFNFnm",
  "key9": "4DZbezwqUu5cY4axYpYgRM5EsTJ2aGgcXLDz7aFXSbikRHDqYHm2NXKcvqPvNxsdyaqJ5qcVm6FqznThnhUeZfsF",
  "key10": "3kaWirrXVy5gLXVhiiBkmhzQgkKdzusSDgcksbu5Yn87NXnS5DEoFDqxeRUuPGaTN8z8N4omBrVKPHLEPChvgjZf",
  "key11": "3GLMHcMfwtPX3es1P4wuhJkqyzE4DzbtvjCE4adchq4WQi7dBBA1G9bNvwJ8LGQEjkfQMGV4NpRdQu8kwtSxCMDX",
  "key12": "2YH15BDSzGjGQHz6FCgC4KBSSDcuyyKBtrgYnrMdLFzuvfBEZRAtJc2TEAT5PfbhonVYuVo5BNH66jq3US2zjJ2c",
  "key13": "5XwX2SvhJLyxFdhaooJCwHKVANDAXdXWt62MdrrFYxUArvpUjrohsvugkqJ7GPqydsdtpAX8Qo7G9i9m2BLYd9CM",
  "key14": "4TLj7ujqQ7iD96VF8pfsNmun6VyLHKCyQe3y8nenzac9PEYVMadzUyXqMXrdixGrrvbtsfJ9NxzAoD1Rys8r99hP",
  "key15": "52K22jEJySdS7daS9cT6pP2ekgCxhWD6g5RfHJ3bu1xLURze3wupDVLCmxqM5VUwkccY62HSn8KRzKboBKVwyauo",
  "key16": "66FdC2Rx55eKeNPnVz6nu44mSbbYRexANRVE6NqBUoTYKADeN1u2oHbG2kcG4vnetKHjEkafPrSrdXJvgFhfFzAy",
  "key17": "hZKqYNpHvFmukK31H3iuETm4A5Nd4oV84CeBp3PQAQ43n9rMVTX3vnqscgB87GLm5sReq5efQdfYPanGNc375SU",
  "key18": "53hKdJx5nKQXLwE5enjd2kmZycRLRfYXWWoUHaUkRPdDD5FyuHRNdQkrS5x8NjzwPXKsNZyU51vcvypeB7AUdf2d",
  "key19": "3PKWS2z7JGD2NzczUArgNn2cLetWG2RDj8nfbcFzs7VtvvrJGPRc9bXb8TWFkXSoBP5VNR9XBJv4UVgtgJj2sX9T",
  "key20": "5da4sc5Ddi4gWLYP7jaGzgX3vi86nbU3q73FXAtQEoBUmoce7e5N1jiZo39RrXkJdyajHGvvMoRvDAZXqX5yRt1V",
  "key21": "3V6g5rjRuSsDWreFPQdXWVpj4xpGpQvp4VKrdijTJS6PntgBQVEyzLL7xupYGM3HddDPep2Ra9vn6G9ps45TY6pc",
  "key22": "4Mr6PHYsDUPXukRxhiEnkyveiNs5h9M7nFUF8sVUMWwbqHhhCQqNj9neQQiSxSS6jawUHKZwxcsgMjMX932SKL6K",
  "key23": "4CVmMa3GX6pBNjCSzxUkAtns27GcSpZMoDEHJTAVrhpQB2WhM81oG4iVWpGhNQkNVxr5Wob49bGtejBk1NFxVdtS",
  "key24": "4i9QN9yqDAdcnyX513qPYXiWZXbmAqkMfdXvdhzZ6jgvS1Y2vHk72xtMiFjqLehNUxgBkUjjoUxpZwC6ExwvZYa9",
  "key25": "2AfRFwmcLvAsFx52Nizcks51eAe1r47BBcfC14umdpg9LYbRXVvWmvmDzzCpormi9YZSBwyEmazkDowArwCiqe3",
  "key26": "5dgYzbN8wa4QxNgFxrvh4kaqCXo5BuP8PHZ8qCUaviebrsTWpRWz3MWNaUcjeykQkGT9UmeFxWyqmCZFTZPg9Mr7",
  "key27": "ZjwvFRQEtKe43esLMtKfzRxcPmmaULfgduzPwKEZ93HuVFgh8PjxeBtUqZJvgiu8TNNncJTqpsTDmaVKWBmLJ7x",
  "key28": "4f3B5eqhfzX9yMhY1743WM1vGXWydPWo5ot8rxRji3CFA2LKyPAEpKS3tgL1vDtoS8XyF5T99tunndzpHchSJfma",
  "key29": "Qb8PQQ8z8Wh8NqNpn5EkgsUmL536LGvV7FAYEFYUhvcojYTaW59wVJPgaHGbJSSBzbGVBXLb57NAHi7XX4Bv9RD",
  "key30": "4weQwKLTNRT7EyGrTtw3FQVckkwu1BSxNDHnGW3rmTmXntrzJkQRudKNn5qA5QWk2p5d2xHjPg6bx2XU2qxVNX5Q",
  "key31": "2QPrAaKtmm7fKNtyphJEaog4Q9UV4r2fGEGbx2mujq5wYBUkiVb8RigbSXWt2xWb7vaZ5DHkpb1sxrfoSYzHHQnm",
  "key32": "voToqXsV6nFfxq93f8MxAt1TB7G8cyoefKjnQw3FtYgTdTs9vfmxyvHcQJKy3AyemeAZR5WxGcS9BBh6u1uFn7z",
  "key33": "4F837ZHJ7NsTZFVX5NiozZ9PrnYKQGt1tjGDbQstBbYduXd6YwkLpMjQXQrv4f1kgZ5561oTwzhGknqcL8tyssEE",
  "key34": "4bAnQTZxPecMWu9s2DyJqDBevF185YGD5Er4NkHizhGhyBS1v8p6VQ4gPsWMZ65SkBEjgLSmHQM22kxv2WBuQ1Bs",
  "key35": "2NX23jKYPECUMymuJPVGoZtTC6iYSkZndKGBYh4SMPgVdAoT1mTcfq7oJRWRBEtVewKeNuth95qLQm7ykh1ff8FA",
  "key36": "671HNFFnrzVFnrdyAqkv2WXy5ZKyyaHs27XZJGiqQoG4t78wRpNdq9bt2WKfoJEkYykNiCVwBvtXutFtim6dkc8s",
  "key37": "sdQgqzpqstsS8jDpGvDoRtyss8zY4B1vRi4iM32XRreKxMFEvgViPrEnhWZaDaksj6seXkhEMp6UbPhgYfYfZNK",
  "key38": "2tUCWyfhfXVRvF338LkFYuLPBQPRUiTwqd7Zz7tkWqgx6Q8zkLk6x3zdaUQ8ABBDT7g4RjeojVAATFpeyC9fge8q",
  "key39": "3wSFzedqr6neg8zuNHezBVr29p2VgsuSnDtzqMjcSquhtWa5iby2mGSh4jyHtgmREEybWoXce37ur5nrbdzeXsVT",
  "key40": "3io1B6Z4ysJEDiMfFYrnk8x5EK6Tp9v3HAF5tMvYUDsuAC8q4NmnEARgGDXmP98QHPV1iJqrVMKFXGP7rhVSbosQ",
  "key41": "4AZp26QjUiwg24ibQXtxTS3BJ1HMgExVfBuMMb7JPdqWF7bKQuE6TpXH1ny8mWv6AtDQChZdfAXsfS4FTHird92L",
  "key42": "A4jnJFDCZ9b6TiDVxe7HHqsaPR36t5UHVFTQRoD7F9MSRb81S9q2GzteQie9J5Cd6J35vbyCqd1MoNyNztXs6eD"
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
