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
    "5gwrX9fAptggW2wGozvFdgzu3Ds7Dn3cn4xdDnyShWuNLPxafwu8Y9c9jHKJ2gaGLnkEYEXAywqpQxTrGGZE9qMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDJYTaoMvzHSiH37cMRkQcQQoDc9ToMzm7CCW3CPqDt29bk8Aje4VHxWuH2DZtr7D6vXkAHTmwQaVy3eAHxWeBk",
  "key1": "3MPnVP1FWbYKWE3rFmdoALRWgRfJpDYNdHTpTtyT7NDgRKJttfTs7xnZn8gu5AZ3hmmw3Kqtqv1sLy3GQmU9Wgta",
  "key2": "j8UhpDScHFwhmPCrtum8eGEY918XrrJPYKDYawzaGZzsZ5ZywVZqaRVGxkHedDkidcMy9p8W1pauvoFDotvpCP3",
  "key3": "3BCyohuu25cgZaa18ra6AzHkiz6eVJcuD1sT8yWrGdAc9qTotrHeR59kBeqnZQi3YbeBuPtkrz7NAPe3hXHVALo3",
  "key4": "pdNpLYVkyq4e5rSqioD25x9WSEYQwWC5g7M2w4yDmTdHJtwyB2eUG1NK9vqyHpndiSB7of9E9YmgetGjZvTx9vx",
  "key5": "4zy98GaxSvopxCQoL27YxAsmxmK4kWdZmKkRvwAqAXUZHdtDTKpFHBdKSAai9qL11rxefYCuvouKLYmyNd7xTiuP",
  "key6": "2uvJwfENZuUpHi3rcjy1Yx8Z84GLC1zewm1dkg36omSxrN7ShnptxgN6uW35skvF8e76mRhrtWGD42oM8KUmauv1",
  "key7": "4L9HTP4TnJWpWFm6JxA2U3TSgydEURzTDhQoGnd1zSUwgTYm5jsfEkQseQRPmGaohU9nDKCDdkNx9tbvBf8pzZHi",
  "key8": "66z7rM4UmPGs2uwy8LqgvRsHXTF2zmwYPrTocEguKvZNyt1QUQ5rqjfUmdwhcfCnXpKYrjEYPKXWHfaiD5mpBsAD",
  "key9": "4fazR5JtcBvc2ojKtxDypDWDvYqhyw5RP1FFyDkwau3ma3ZgJH4No3m2cHjbFhFTnSbfmw7RvWn8ccFc2v1xHCSe",
  "key10": "2H7orKEzS3avQYHaQgGaTENyS8ErGBS5Xqpa1M6Zq3C41x8soVKyF6EfxMEFXbh92Y8scvbGoZRR5H3NaPdqonE",
  "key11": "JCf7qkvNukbcyTspG3842GWZcRbXvKGUakBLh8HG9toV5kecWTSiGHt3inwWA7guXhJQ8xWe9jAaMFHHB2GFPp5",
  "key12": "4cHUSFGXHz6DqKX991wSFLNGsRmwEw2w12BuoSjEMFvSkkLf58oxU91WNnGV8cJdYbzZ9zo5PaXKDPLf8dm92nWL",
  "key13": "4jHZ1FPpNgrWVt49RTqu4nygkxprsgXJbfFvqJGgLQvVCnRosZbtnhTEPzbVNaJDB2rzTe4JKdEwRrfXZHgB93xb",
  "key14": "pAx8HKsapLPyj6tASLgeXwyqsmQaCwjfAh2Rofx8iB3HFyLg3NSto6VezkagBvzq1J4hE3asoN2iuRtbqRjConc",
  "key15": "FgDY5gute5gsaUQUkaUiayW3PEsDrwy3MckN2W2D6awRpLVdQxVP6388wHMCaRU6c7fw5zu7GJkQFcTeLYWoChY",
  "key16": "4ignVRrdnow3T6LaXsAUjAXeruhipMfdgTtPVcpgwYqHWzT5vUtsRvN4oaF7nmS7HRyVrNkMYupddrUg4fZyuWbP",
  "key17": "3Bc6jzJVsdDa7YQxwj8C9wKF4iM15kbUroaAbwNPoLPYTkgBhNWtn527nJ8nWQR2JbWqshR94TxVfEAfqwKLUerY",
  "key18": "2i16tnhtAmcULr3ubEKm3oXG3De3Q8xGA7enKsoMc6hK2BBmNhrbHqLxyUYjodzL1xcbSuuvYSaZJHqHQxqjd7Pd",
  "key19": "2cRie4oZ83e2YrU44rNfMxbmUrwLVyC55w3pvcv3FYNFLEFW6PWyMo4FcUopB5faUD71R1TVXhjGjpYc2VcuL4M2",
  "key20": "2egzcnbyS9vJYh59Hbgjt7aYxPYPUzScHE1QU2q5sPfHLXzAMRqDm6Smp4uue22QZcqbvVGSjyoZMDpYJx3Jyby5",
  "key21": "3hK6MjLVyDjuoQoLYEmjmy4bYFrvZdXRfBa5nvMeEaJxbsETD7tZvwZuWQwQqbJUVKZnLusUszH6h1Yej4N3KyCz",
  "key22": "4kRGhmfqsTQJMhHW1NWzx4uGXKiUKa5T7wRcFTmASye4m8ksokF1b5kSNn6xcKaRZw4JRkoavUoudPGeHVvAY4zg",
  "key23": "2uwMKXBYgKDvs657WXWYGz61RN22UHqhbZoMWhSQMdVFFmiCQ7fa4yUDxzd8sKZQYzmxRDpZsUi5j4BoGMU9K172",
  "key24": "3NEKpCzP3Q448aLw2rPP4yU2o8hhb959hJc7G5RaNiYE2CMg6Aimsxwq3YsLtT9Vnt4WzwDX4iTbZTgFbqXCHQeh",
  "key25": "2JVervhszyEZosFwkhjGcLGqDFPKeU3roKf8agaEH7G3LDkwbrDkArHhGkkk3Nam1J2XcXvxwVZBkxqqzSxQFvDA",
  "key26": "376o1CeUv8jk4d2kTpFYzUx8Wig1EBgAPqw3X3s5VRNDUUmUtYiQ3yyumTJC7SsnTEChX5jYpnKUtbwHr847VaMB",
  "key27": "3WLxpGnp2JijgAcC4JJFDH6oaKiUAjtL8YvdXaSSsf7u3EbpKsbMivf7hz8rwWuPm7ETrhwtLSZdtfVFmmPpe3D8",
  "key28": "4uun3QdhxHXH2Nan5oLaNop3CtGv6EysTTCjMYjybLyiEvoPtugxh1Zz8tB3UQDvRCkjaYBAUX6QFLMemLNiSq3q",
  "key29": "3VEXQh2inAMs8HcoRvT1G11WTBXBiGxsnuYHrdBZLhATTqDq6jtmuFoP3n99VjoEFPsqjX9A8TrrVRMNw79Yjxvy",
  "key30": "46FUAKEGdXnGbBbFmwU5zwccMvkKFi2vqovBqn41PcyPDDaVmLiuBf84tzToadC3ToHFNwzwomD7gpgvTyHv1xgc",
  "key31": "2vifRstxFL4dvJ6AynZwQ2T9k6Y2WNptmctbeR19Fa95THJyjo7YNm4nzZGVDtb4CuV1rPegFmYcp83ccgCoBEAn",
  "key32": "5kSSq263sZjY3PY7RW1PqT2FzcZE8L3qZhMh6qhTmyEfsJ71Ad19xBiUcLrMN2f2Zx1zLvM3EfiDo4WQjFSSuW1",
  "key33": "3WfZTXvSXMNMhFQJDtpuh6VMF65g7aeZg8VgiJdMeAtqcc8JPkjEbzkQPfZERVSgvrSqB9QwMgyo9yMK3MHerjpP",
  "key34": "HpPumMp315DLdp7cCf5iFrRQXrz4VhLyAjxd9ZpdJjxUZdArx9iDKZn67bQiZHEM19YTdZFWr8V8t2QydpxeuVL",
  "key35": "G9ybXTqqytpbVabkX6tBKBbJY1ia4UkTPJ1asQeGnxFYp5jJeMtymujLsQZpbXys5mVde6wm21Cq1wnf39qG7Sp",
  "key36": "3ovztATCBy3N4AqeEEXeAW4ixwnpb31VfTEhUJwzC62rZGgoMf3LooAnVbBr3cxicaH8FbUyetcPzbXkwgxBEotu",
  "key37": "5x6SRLEzy3koPrz5Zq4kwjTUeFAKyMUL7Tzuu4hqpg1vFitW1D7ZwpKvH15Upg7Mjog1M4HTSthJmGTt2PVzPwgG",
  "key38": "3tHAKXxeoQC41gcuUDkMeQF8YxQ28qYHX35uFxnLYKZG4A7tdgzmoNDG7REUNx6Ko2hvW4ZmKtNXoFdrzZVVq9o4",
  "key39": "3nYCn5kpsL9F3DPXTZLFHLxKgdfrntpi8ZoT3jv4gfrgP2KnR14tgmzWoqb8ZMEqKZsXX5BG7eaWGcZ4J43nV6BW"
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
