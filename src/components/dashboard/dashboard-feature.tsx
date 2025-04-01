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
    "DifdqhS49HaTmDYbR6MfZfRGqMrjQcSgPk4vq4rXtAyTWyjL8W5m8cekKZVFUmuAugqECM8m1ZKxXxtt39KqVYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "izXxFzpLody65CyPbj6YW7MuiKunk8QVb4Cxxc9sg3MstgadXyUQU4ZK6kYPU3JY7rHDTkVkbM6CS3M7bu8QGZS",
  "key1": "xibcZEK2BV2VzPnhERgLMEnSowp14oYxp7FKsWuA2H5ChvVir7Wv5HXi1sYMmy2qrBcFqLb1bZtSq3x1KAuAokk",
  "key2": "2eU6BAy9aeMZAPeDmo8A58DPdDdezagGALwgUmfVuetwrsToSDfbGd6h2f3fcrpSg6XZ3v55Jv32tx7PZE2fqPWg",
  "key3": "228tZJpXTwLoEmJ4BQLVDoy6f3k2dAoS6XhZ57ebWRMgCRjVQVd8frMbu14LUN3ZwhVVa7y722Vk4HmtojtVy3if",
  "key4": "3cp3ca1jmKneHD87A6kccLuiiGhrEKhXBZ7jGxgUZx86aa2MSuiurEMhJ3FxFSuQy2rQqjWggmpUWLNvAwXMkZLt",
  "key5": "4xepx8U7A4XVVz4tiMmRvu2AmzmwvsW6ivJE7nY6iYgdkp1bXo1MjndUpxhg6yNmGGpfwSqEPztxg6LBnCfzwgAe",
  "key6": "9W37DUMmzjGbME1rFNZSWzMZK93QyDrKVXbX4XYZSjSzKjNaj1njKQi5i1qhaMF4kZMNu8AvAZfVWh9gxHtzXJH",
  "key7": "56R75G4a7pKo6vEnBojzRSELTXUaUM1w2psx3UtVX8UvZSjrxoRAMBw8g64NpKMobe38wrbsQmgVuKS2Uof5qXLC",
  "key8": "4V8sXDGJrF5JU5qK4JX3owMHRGVnS9x61NoUdr1pv8TgBAudDz7A7qUsfgpwzJVJETcrWQ1GWjtKBXrF4GdMNRpD",
  "key9": "2sSHTpizxypPKhRnfjWkcMmQwXUq8d3FUYwk7uxjJoLySt49p4qwydACCa1vwERSex2vMZ6LTE6dVfnZx9efdwMe",
  "key10": "4NidxMKzvRxbEHEArUmwh7csnNbJyPwxYELpZPmFqyShgjNYdk254AH1foafdgeYyCDKKyZVvbhKxPo8NCedx1LQ",
  "key11": "7PJg8kcSciRmYusMRaax2eAtDLeN1K8F72KssrxWerT6ZJbGV8TQNw4yhbGWPJTJBxjBUReivEebrkQW8fBDHXL",
  "key12": "4AAHZFLhK67NFvQivgK283E7h6dYnRA6VNypwMGhW3AiFLamx9iREvBQM63rbxJkHYaiCQriAkh1cLHmrRYs7Lqt",
  "key13": "dNAeDhzpRTEZ1Wad4dabrfESQsbGnBMTHFcsgzd1J7cQe1b6SX1b4eNCG7zV2ApHSAg6ASQTcdojeQB6jvp9dk5",
  "key14": "66DcuGLEtAxXBW8Kf56zzDFV45DKTMWB2NNZEGKkLYP9Wb57pcKn4BwYZcuLi9ew5NBuYmeCuUh6PQTry9wvfP38",
  "key15": "3dLsMp1oZLUcmXx3fjkG3HT5HXXMMbEyNUcwWubWdppcHDskhiZBVTR71fZZKBCuNAVF211rjwnFNvrXs8JAWVkX",
  "key16": "64d1hNRWmjwmkoxuxV7pfQ43LVjzWcceJGBNjmjaUa6e6uCa49dX3356dVGW63UpehsCzcZEcSGxmbvenAUuHgRL",
  "key17": "31DQj28u9cqKcWknPb8wL8ihxCMkGCRJj3QiEH4KJTx7vLG6zJjtemrLJyvXUtDmKRPr9sCUTVfMAF8Z2wgDCxMn",
  "key18": "61MhGJPf91tnzizwYZSMgxYgyejimkVWziyBABxFxCoWfuAapGzGURTyLoWj2tiPE64Foz2bSMycNhWrTyzaYqeA",
  "key19": "4jKwpc1HPktHVTmuNP675QBu1QUxpYTB3nwfdgRdPxGWEabN5RWzQ1aipyKgJJTuwiqF66ntUTumc67gVRZ4NYu8",
  "key20": "H8ASxZiMJCLXdZNAFWUmroFqoFa9WCcPALiFmNBboJ2gocSXFhUBKxKENoJ1YyoupkwB2xQG8RmVsGig6xPY5AB",
  "key21": "5ewo73dpMeiwCzwL8FhNM17QQdB1Q4hQh1yPmns5fytTiksbh8RABqnSyzFXnuW4Hd2UT8WEf5H3vPdriTvURiK7",
  "key22": "48RGn2obEsc9xt3C5AgKujSz1T52zhFwN1aj1LkXzF8ScuvYrXhTTu33eE7pKFuaUyzqNCjyezuw11Pvp3AqV3ne",
  "key23": "5RE6CAYfQ1hj9w73F4ayp76V1G2csRFzNFQkaDjHuUBDMtnYTJaLKwMxg7F8hxVpSX9WLKdkhRwE1Q5vD33fpAst",
  "key24": "4bXbo63Wgyp2YpzmsEbTkDi4dJVqT88mCb1TZmFLpZZnURToyQKUGbevcBx2WzTJo6Nw3AzdNqfiY8WjCmxhHxtx",
  "key25": "t8wAWAngB4L7itySFtvngusWRZFvhQrShYPaxPHVv5XyDXiaQff1pagyNzeDvyzBzKucMMXNtNz7eBa83FRQi15",
  "key26": "4qTyKU2LNrQv8u58TLLbfyt2o9o47WjfbH6o5gVx1ie8Pwe1xTn3GV6SRbFzuBHC5MFN8Y5jyA1F1GPtQ4u5tCtZ",
  "key27": "2VgnRC4PkZ29AJPxZJoW2wPWzJTGcJGkDweXHcb5VG6c1ZSiAKVrhHj9uPdTAV5gtvFphs1oPv8WG2EMVTmuQ6NE",
  "key28": "2v4kCZhNy7VdXW4ZDUcqn5X4Y1qyVFY9kCWwopNiXGavcdM1LjXmrr9qHoJXqpwtR1Hvvbeg5UKtE5JgS76u7pj5",
  "key29": "4Ym1PdvUfdf7fA9nEveswSvfzFtE1wEwUiKhxLrFp2uVGWr5cey8jntdGVHTGXhYrNFkKXtgGCptYcAsA1AuoCbV",
  "key30": "3iUpEsJHuTDUKekuPnfgRWVyCDDGrux7KLvuL8qSH5tBRkQiFhwVrJ5wJhDNBYQa29qCkCh4EGxq2rmijzR9AM7g",
  "key31": "38WCGDmSS8AMqcvHjQgMYS5EL5JrFPvBDYDNsDphg7gwP74PEn3EVsipcABcdjQzYAojdZDmPt575t2uSKGuxNPU",
  "key32": "5hQcLCY21yw4hpC8wgXgaYrTaF1NTB5yrrpvqghfY1rpcBxxxbEUjWeikkj8zJvD2VRd5gWNHNR6sBp4jiKNvhB5",
  "key33": "492eoTmg6vqvrXzTKEPhdkEkrExh5qcsMuyNQpddpc27NpeiJnFbwsskEE5yoSZcU6xLZncnJ43MmjWuVEFyASTu",
  "key34": "R5AJULkpRYDgoY5ooFtkYbTcQoHbPukHWUZF5ygk3Zq4gkwJc3bFLAxKwbcmjtPJEiGR1L7x8VCKftJJXmjbQC4",
  "key35": "2RUqRFaQFhohsuybkn6Q6MFkvnEn37m5jkwDucx8tNujbX2iQ8GTW96dD5Xesb2XZmT1zQbLdWT5hyUv1kT82hSR",
  "key36": "5yssYuoDLcS1Z5yPEzkSqog1efj25XBWdxWTcntuPrroNGasi5yhHYdw4BT7yzE9MVqHKYJTtXtHfubSr7oDemKX",
  "key37": "QMsKi7BhtLNmqbcMkc24HWy4jRMvvXB9NTcSpKQnkesXKFHa9hQ1fVRvG9knZ481o7ondbDNsiYjuFSQCaNF4E6"
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
