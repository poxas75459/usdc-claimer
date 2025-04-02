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
    "4WNT1aJn5YnoouY87VbnkCtHn5QyqRvKYfF8jFhWmQcDNQiayzoKbh2tB1PLbxUjgbxLCNvxaQ4DhxgVPG9vnYsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgzuL2i5T79HJqEcDAj7YUNGuedgc1UZFyTcjTzPyXigizuhHsyt6GbrQSnDv37K58uS14Wthzm1B6dNqYHXkJ3",
  "key1": "5m6wNbAbkSJstc5pCP25Z91e4T5kBbcn8yZrQUCDiMNSEmQF37CyHavQ5iMzVXLTvnFeJABcgXhP3beWEiAg5kiE",
  "key2": "2ijF4GJEz87mL3CP5Ak4XpTnHutr9A7XweFnNmboyZxDxAo3kvs1B1oxyBFrxurmi4XiHKqujeCL4dqpaBXzGfi6",
  "key3": "3UBbN4wtn7vVoHpHwfeK4HqcYdTDQpZJ599MBrBaPBY6LCc8d9n4wSAYdF8xvCxmsQh9E6qRyhi6UWFS5j1SyCWZ",
  "key4": "2D284tQFGsy2Nr7YPmXpwRkeCk1njMd2teL4wtCH8ygeLL5NNHZg35e6pzX1gtpWgUtkuCED6UrP9C9rKLcDVirL",
  "key5": "2ZAXyyWdsKCm8bAduhXdCr9gqox1GZMqvdhDR9GrE7BAYQnJPfotgTet9cji2hePwjYnZBtF9ESMzYKkx7JeR4Hp",
  "key6": "4mxhzGxxwEQwcxkTyNgzLqwzutNyxS9hqyJBAejAbQyfqkCQNE58LsgWYRHa2qXRKmNfa1T1aYxfkcieiGb2JwDL",
  "key7": "2PNAeiDeZv8QJMiJFtyD2y8QMYrrRbaGJHxzc5K1j9XuyCDXbz2WCCKcE1XLs4vPYfxRyVhoZYLE7qJyqAze4nkC",
  "key8": "2BwGxc6BwTVJoQrWBf2hyCRewLaA79xDCNR3uwgtsd4r3mx86B73RUbSzhrPEmAqAULUKvvKKbsM7wJeYbxA4g4s",
  "key9": "2f8J6yyCeodvbEQDiJm7QY3xQdepuuqCLszm1vftKPMoWKaJHq3gXYLewBSLSGvgzAdVy28amYD59x2npWdVet4N",
  "key10": "29zoucDeF2MUsNcsneHRqwqCX7vqnYgEasaYJu86oLRiBaRzxqfMnWxUJaEcbEYsMJJq8CzXuB143B34JMibPobn",
  "key11": "5CtdYLwocj28G3sdHVht5PvQHkF52BwThiDxAZegJi96gHTmoV63oCyVsytbtfeXiTYGHjPwaBYaqxygr3zorEjR",
  "key12": "2h2o1WzEfUX8JMmWQf3ykAk55xPm4vpKh3UvYEaPj1qsVvVvd7BkAfxyQfbnVSjb7hQaSFy4jdxVHb3V15uCeT5D",
  "key13": "3tuYwoACp2ne5zp9SF7HDkbjnYntnqSMWzkNgxWF1zPx1JUhBohe4sEBKKuaDCGe6Pb86fFreDg7f71bdcWfWD2m",
  "key14": "5qHNJtGvXo1Z2nwFocBah57gFDr5rJd13QWEeW6o4Fi2zrPMFssBNZWRsDSXGBbBqQqE4Zod7okxzDT4kWGaibjE",
  "key15": "3QFYM5SKx8wEMHQaj7szTw7C2YQfAehSiBrX7AuZRjYZ8eb86oDJCQC2zfAgdjkvQV235c59Vxh8jg4VfJH4o5xG",
  "key16": "HJSwATuz8GVTa5PuWfZtmxQYktyCbkCsTtXAmqzG38qE8uab73TPcU6y2ZRX2BSZriECE4zDa8xbSUVME4H51MG",
  "key17": "4VGoEc5qUjpyxGdcNRS1G8HpA31zYzaKsE2S6jVdyXr4hQnKTKckWJUkotJJe7mErxDFdT7PfUmugAp2MnK2QBaa",
  "key18": "3CHJAUQDjLL6zNF8QhtFJZfyydnB4o39yxTrwP2LnaVySRPKe34vqmwX5zntnyfDU2wpCEbqyUDBanYZW8HmFRSB",
  "key19": "4tKZhhFKRTvjfqeYRUZDGsctadpyufbojKNpk6CQjbaiqif13nVrsPzCcLqxQN7zmRnHL37ZturWKqiWxHDw7doV",
  "key20": "33R1nwrL2Ny2sSjkA8C6hfG9vx3RfQtocZkVD9eD78cC3LyNVML3GU6D24DXMxak4Ur65jCB7cVNnto9Lee14AyA",
  "key21": "5jctCEh7Fr7o315zw4SJ1Lp4haFpL3QSvK18UPTznRutx6EGq5m9BwgjeNhk9EuA6PhZuS85HURbiJQZ6ukTJ4Gv",
  "key22": "12PH375UHxx2mJjUpsAffKgmqgDGy5KZRURZKz3bpD3gdHazsn5oMShVMKtuayAJX38NmYtNU4G5mTg1z1579Ht",
  "key23": "64yrZ56dNArGNZxbE7eYtboKPYVgDaDqyrTDAYRiAFoDCEAHWhuLB1MMPxNfgu4twN1UXNataEFDJ4YAH3gzeoer",
  "key24": "2Q48e4SdGeD3oUPJR4wBVEfa3FLveQd948XZHfXrRpY7vaFeXLkjaNcSv5HN7jfMX3gKX7r9ZXqyvQ96DZxourGs",
  "key25": "2dRybn83EEuGL4TCBd6zs8jgXBb6dTyREuYxzrdikAevwP6Ra5od8DLyVhZuEkmfTJ4BLrCrf5rTwacJfFUQJZE3",
  "key26": "3pxEBajd15ZV3xVKJYreW2Sfm2paFmPYCgEjxEDeks6V8x3BxNPWpzHcHcDREUk7KmafftyxzHe8xF18varARGYP",
  "key27": "629VdcBuqSibHFHoEEdFq3YVeh47kKdpFKa8iwK3CFmb4cDzz7nXSqYMUSXwFaEm7uxJ7MCqGY3mDNqi4sNBPfnz",
  "key28": "2dEuAWLUTjjuCSuBNYVCbgkBaiw8Y39tfAXhQsDcFzwdRPNGizqErEi8jQd7cHatGkBDXCcWpSLHfTdNGahK9SXd",
  "key29": "1Z2BVWHnboKwNaHiLw99jXnhZrbqRzLpD3YWQACo4Tg1homVjn4r7mni1UuywQPbwLQAijeFMfkpoA6rzq94BvL",
  "key30": "5LaE1vvC56kdLCxFz4xyneDNuco63vNZktNMLNoy2UWXvgar9rhf7xqK7rug1G3NXKsMAWPT67SQwbU7oS2qmdmK",
  "key31": "72fbmTyQ69jMWYDJ7EsiuCEvff9KxBSJr2WobmjZADGXsAqYBhs9whcGdfAPrmfKpEpsrN2gXK4cMsRjfkaD1kr",
  "key32": "3odvBZpT5QqJTSf7pjFnrEJkdjfbAP9PeSxZ3TUUCjfEMRDEXyB7v7pji958X43avDEu6Wcu5MBgxQu2HqzWM38i",
  "key33": "4RmAb5nYTC2Ns49w5zyygPRcYo6fk4EYHTwCpXCMipxqDvJKKqVpd8XQfRiErDKqGT3WS2J5kNw2deCnyAguYqTt",
  "key34": "7siBniH3kUmCvYKfqmrSs66tRf9gvGPUc6hgS2uCEmpSJF41fTgDA5NPob1BM1q1amhTVQupAFDriymqtWHPbAg",
  "key35": "3JV8wp8FsiHaJoMAoUQGAqBZXrUZUWem3nYbLtGmpJbrjbyFK6coJhyTAGW36UhVtW9QP5THVvdugRKWzhm8w9DT",
  "key36": "5xKfULqgpbreWm8MPGxfk7UQizpPeP7W91qUEcDbgUcCvo7QSG8uDAFs6o6ecqn31RE5PrejH5unqbmKTxnKwvV9",
  "key37": "25rvgikhpbnmaW7qeHFHhh9uPfAaNDE4whKVXjNwKcfjgTTbjpbysxwaTctvzhXkU7fzfC5kSUkoNtkPKvJnxhdv",
  "key38": "CTyGrCmdsZMGacCXazzERQvxiAAVq697mFMGjXy3qXZCnPwkdRbjoWUH61SGmSghqh4wDgTuMinfYKqpJxTNPzj",
  "key39": "5hFNnSLzXjdGg1Zd4nipjv8uxz5XCyRgVCoas1edKiKGTbiorvyLB1pVnx2rh6L45xkCG8QiqNbweXgAsscuF6cs",
  "key40": "4jTFyzmZTEdn4xV6Peo8qx6em86vWs1HLWNRVig68XkyGeQSZ9DbKNpF4eFui6Y1iSvTa1Y7sTH7a69SafFnvLVr"
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
