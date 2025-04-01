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
    "4AyG48yGEevm4gi67aAc5WcqhBbRmXHFP5yb3Uhce8oLbJfAqkpnf6JQJJvcMHpKt2chjKdjQjujZaTPZWzoeV2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KEUmABA4ojkjD8D9uKRsagLJkR7YZk2WMge17VNpGX2xkPEaDE7aDkNhDEgfR7VHr8SEDeFBNrFUfLDBNBqTbRX",
  "key1": "4WVjwNmEDti9Ao2sBgsVMbRKaLF1BE6mJLEXXRYH8deTFy34MaVbSfzAMwzdppsZF2daYYuWMuRYsh1hX2GsfLeh",
  "key2": "bYyZgtikCDjqb7VkheZQ1W3JoAjn1ZtapsbTAghQ5ajjmS7sAbRAnHptPQuohrRTohP4xrWAMtdaKFKj8yz6PVW",
  "key3": "4q8fd4Xa3EqeNQAr7CaWA3xLmbo9qGAEtEgzqRAPkPZ2LBH7pW9yUBq1qck7L7GoqD2pzFQPBgxTgzGPg6rHYpAX",
  "key4": "2wH1uYPqzDHvxY3EaBnftNBEwridaUqif56AEN39AcvMy8mczwbAdtJBSfzEWeqn11aq8rb2i81qoBPqjccbkKBe",
  "key5": "4cMj72fipqzJyo4Pp94ECGRzfPsjaUuZhwKi5Ccktt24mbARVgbjYVeSsGEZmfWmFn57LHic97uiR2nez21Pkg8R",
  "key6": "28YSakthLxygUsGWNtPBmqyMYC96rs1ayi1UD7aYBabkjnBew1sMLD5ieADqn3tDRDToNnN4NbyUf7dAea6c5LtN",
  "key7": "4dMchX8jhSDKcHFFk3jxWW7BGTRuMryyYLUxoVQGdLuGcySaBm9ujGQjTgChmqaPtmcA7ag9cvRHhhtq7UzRMA6q",
  "key8": "e2GynNN8GPVLYXaaU2HayeSMa5HATFbKFZU7xgcFF2DBUZ3crWQj2wcwMbykuw1oMPzupGShU7VryS8QUiEziRX",
  "key9": "yRqTkr3niZvWTFJFagLQATLbfkKxpeDULiy6PkiEFjraTBHmmebL7EHNAdomPywrfLsnXghmybiq7XrFk7VE8YH",
  "key10": "5jk2GSTpcwgpR4K7Sty9jVjER7xbk6AeDzrryyxob181w8S1DZhaStY5M8BTabTjEZWw5KWiArgwKbojMpYbbJpp",
  "key11": "3g1eWnTV9KvC4euVBqSVxMDWz8xcGyeLusYShGZDC43DvzJeLrLkfWEVaj7WFPafaoWPGDEVTZegSLZKbr5nzzcA",
  "key12": "2HLQHM33nosLj4UxLt64JgRp5jdMTuRxUemRA7czG4K2Jsi7hDpLKvikaayATrVvtbBNFTvK6nkRZhjkChYndDCM",
  "key13": "4DypFjnNodiN2tEdRhj4ZL6HwfDajBCbxXoRzuREcBWgNjDdTJSFGZ2RPLzsFGsKhsNiYR8Un3BMGDXAgxxQnHHU",
  "key14": "3gJmaJo4ELTrf4cUHQeAzHu82WBSsDV7en72CG8kJ73U5Dx1gEqvS1amKKwd6ouYCy5dCaEgcAJEjKmy9djsg5tN",
  "key15": "3d2L6H5hydUm7Y7DN7ESN7w5FcGyYae8uqFY8vYGsoh16hLJ43oFfRzzr98hzLzQhrUHTcj7JDLLWBS4SCdRjr47",
  "key16": "2vwMLYhCFFqG4injKZHUSyVFiKca5SjfXnmu69HM4zTDCX21q2gxwyRUjpxW1wSQ1DGQAV18NqFpUD9fQyzmExj7",
  "key17": "4qrBL9nohH5gw4jabi1hJx1CK6VhbEqwCAY2C96Q4JGJ75iAXgK7iDyA9UZDuF1bSWsKhdwHMcsEAgQ9dofzYU1R",
  "key18": "4fLpC5Eaj84W9kL7nwkNPN9dmAxgxy9DtKsLqgdvLyV2iD9yL9cx2qoCcLzDJXSyLzKgGbLgtFYU1HDJbv8Rsatj",
  "key19": "4yxz1ZVvroFcbjHzAVRdCUU9LAdr3Zm7LZActoxsgUCA9UnQHcXvLCnXtCog7LHBtVz5AdTVe8saMVs7ixG3wGnW",
  "key20": "37rY42nsXc3LwbqmMMDXiQQbPB3ypSq6d4GP5Cc6H46twUM9pFpsjeWQi392dHxeXY12drWQ5Zxn8z7QG3bMSVaA",
  "key21": "2aQSAEShmnWZpdT8DXRtb9tdELDK1DbjThCx5rJZrTe55o2TPfHQATEajhGADCyYkNhpuKdTAPYVZ7mnDuYXs1Wn",
  "key22": "61c7jCvNUxu1kMpKULfF5BAQ1bCznFjS5izA1QkH3KuB9vcYNYB6Y6hGEcmYo2mV7NqW6hrX7ziEnjqG3xrnyT5M",
  "key23": "52MLWz8LugEBddCwvPZSiE22RvDSu5MxpAE4FH9SEJ1kQyMYV8YcGKJiDxdwwKNBNMDVvzjdS8D8VVLYtTheW2wA",
  "key24": "4aTMgPDrMCQY7Nac4E4UbuKGEm2jZ4im7bAAdKKDUKdYtKc6JgDXxsXKVVCcfXdzVMK2gZuoUderLBAhqszJuw45",
  "key25": "2ckj86zZG1QSUgw8uRDaU4p1q7sHdmmagj6saaLmavPwFRNv9cSCnURWn21jNzKTLF6rFM194BuYAYHXu4J6ewE2",
  "key26": "35AgYBZDPAbUXM47B6mYnF7o1ndLtpfWHWKGZcXMV6dk2HBAphYYsYeaktovGzpbh1dvdFWTgH6yW78vKUg2dxsV",
  "key27": "43B6eZUg8Fp1MzQtZYzfyWwhGF5iCu4KRYNLLU2bN9BFPajFmVxN6SseSqk5jyYLbqWy2XAsPNMrGfpvvjuCaLqd",
  "key28": "3pLBgdK8x4CN67F2xYLqxqknczEsuUYDmmjF4tD5AfkTTUDL7d84fj6FEz32NHGnzzba3jsfpZzUnyy4JZDAGVNe",
  "key29": "3jddVzCWA3afqmefPt3T8V9ofKgFZ7ZT6RmySkcYBz2bppPWSCrXkozhyFKaJbXJd1bfkXwS8kVPMsnWQy2PH56X",
  "key30": "643oCRCHHe71mfD7bMvh3rYk9bsRh4DeDkKrNBHWbnUERtxqHJZDi6gbHgXHbdLmH6HygRmGY2ATCJhRgv9R2kFQ",
  "key31": "2Zy3Rp6XaahJdp5JWCjEmwAPj9UNLvjF3HVrydpACgSCMw28X4L4owPe2A7N96wvB7wPYiiinyh8y6DoxMn8Kics",
  "key32": "4TXAKxaeqcRUjVJW6GDyGwr7UeefCBTy9dStdqcAE7wGkrwGyiqsMYVg1b8SztvMMBgCWAgtsg9WCuwfSsJapTfM",
  "key33": "5UrTf6VzNCMHzVN2iwsBZgeUcUGVjzoiWZXr1UZ9vWkFLtPMfwGWMMSRpWiWAm4JGrxBQccYoYcPzm4AC43AXoBX",
  "key34": "2RoCgcJ9XVqiiNfrjU7uX1rreXbMcjpS9nfayxwr9GvF2BHcnerMaaR1Cvnxz46h3STFyw93RfkG1cT5akUbYnWu",
  "key35": "rZmChKeDFPuzpJZxMXwVUwmVLkhkfUKyP9xe16Fbpq91jSgZkzJzfPjBwBcrgojDWzoUXiugDpLZCynT9jooZFX",
  "key36": "Kdg1jXAkyeUUXz6tjv6mAbjFYRFCXv5HbNvTFwQjS4yzXpL45GbjNsAZQb76Xbq6gt83RYsEp9FSE1UusPon4ak",
  "key37": "2QB5v9LoGiHaoXXWpsAQCoTnbbxhMo94G6P9nR8tsW3LmB6R9jLbr4n1Riv2YN8jVmqYKj6t1ad1nnoVBedS7hhA",
  "key38": "Zz7P91YuvKn4LbbLzUBMCSNxg5SLx3VUneALpQsCXig7gsrz4sZ7GTtLysSpGdDgz4YGmu4LveT3NkuUcxToZCB",
  "key39": "3AAg2AcqcfpZdF8zCdXa15HQPAx1Y7dWLRhT66PQQ2zePGMSTCRSw15DdxQ269jRiUA41CgdjD8Tv3vmBAKtQPY5",
  "key40": "3fW29FhHwRuZBUg5CdMAdQVPVFZNS5VqHjwYgrrpm4as12CpUtajCfrPnJ6Unnfg1afbevDCrXp9rKWhHfSfkjM6",
  "key41": "3geUBdstoGi5PVFmsZi2Q9EYhP7erASE541cp1Nccj5JDoFeCjdNjzk5vcpkMmdz9Gr6QR8MCCy1FpdqkgBMn4mT",
  "key42": "26TELACTqJeCdRaFUAakSr7s8tBaD2kzs9zKXg9fLJ6ED4nXXRetHomv3n4kUebt4zat3FdnfEMQcrchN4on6TzJ",
  "key43": "4m4ugHL7Daf9HYdw3EiS9oJEEsq5RzNXoN2PEfGLp8xSJt6RjgGU2RNjhQ6qE8j4yUsZipmA39U2zLLXhUTuGnYo"
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
