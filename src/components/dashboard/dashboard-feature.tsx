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
    "5setWa9BgmUPvUUDsSLveAVTGinxdVZmxfjPB4ZXcqNaP6vnMWvpdanuwe2WtFJHeWpdaeVVwZVCs1uwuRnbg2oC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DWzrfdNpsBh2SMUuJbqbyn9PbKiZJtDu2qW4Q3icXye7H4giLQsMukayhH73nTsuBF2LoWy9vWqe8sbL8VECeGe",
  "key1": "22oEs4M9VCfKmEpB8gjBhyTBfGHcGrnAnsGqV4Uh4QtmntduijB79PbYkLKG7VzRfnytVHgYhVMTCrXvXQT8gbGc",
  "key2": "yL3StuB5M7T3ErEBEjnqJZ7azkRq84qnBj1AvTyDUR949xyac2PUjcca6Knn5ZbWSsk65aRGtJYWgJYZCZvYtM8",
  "key3": "298qGqcXVHnoueLwcxKioPTKpkjjXgp2MDGgk9163M2qjM63opfCjyUDyVUGiX7AhWRVWPAHgZcixjrZ88zUJgXS",
  "key4": "3rPkjJCvJGoFAiHYTDNsobJ7t8a6CmJZvAbZSyybB49omjagTYcUWX86Jd85X8UHKmidEUJaThAUUHWPB4WaZhdg",
  "key5": "FPzgNt8f3migpwchQ3jKu5GdZ8j1NR4TuCz4kQcY16cjYj8XjUoJbQGHoeR2QieMV2ZpiSj1HBCVH57pwC4jYw7",
  "key6": "2VTAkvPZRhcQD1ndCEqkeiWew7uaHgqMHU532TJRSedrsYGGL5iaS2muU2zD6Kj6dEYBAyhrfJCSb45imcihMoCg",
  "key7": "5n9DWRxFLhs1pw3ax5t9RSBrfTWoUoZq3tJaouHuzDvCEH8QFN4PNBzMr39T99GyxcJWXMpteHcjf89wZGRCeqHu",
  "key8": "4jCc2rXeLTu5LKz5paVdkQW3HDJKF5gMtDsrkJ94EMaAqhPNBLXZQJ8SFdSgRBFdoBKLY7HYKFct1iFeNka4sVPE",
  "key9": "5LLiAD1kbTCuShbHK77x2e2HMKPkBX1G44H7dQFv7tLDouvvWWCbCX9wApJ6PVTzaQQkHTihXHxJqs5Q6mGKydQN",
  "key10": "4D3f2HUr1R9kvNeARXMGx5x73NGKDA3M3JwQVgmWS4cFyBBWA9y7w5rpQdQ9RLgXX39Yxgpr9UGBkdJG3kibaV5Y",
  "key11": "2QNNV8rvTD6HgvV6KejXrEvau5YXFzvzFAwP2rkzFBuSDmj8CVMVKu2qGWkucMNA5CnY9QZ4EE6YXD8cCLtBS1P6",
  "key12": "tKxUbEpUL3xMzyHiCHEeMa8adfzqA4tvhTUWPPBpBVhGzMBotwSRCwLgqRzZuyeXi41vPzKVC6GL6SGoyPuNGwG",
  "key13": "8RSe42jagpY3rC6z5SaM6YM87t32aDFXi7K48WgmuRsuYwLKd4BU79StHZsWndCxWJaS5x2ySd1ViUD6RdH1hwB",
  "key14": "2YKxTosQ1JVHwxixVz2jMkBB5iaSKPfJtYeNp8kpiXtDyLdfkekS64v7nSwgz9pGQ7zhyoPj9rHrNCNt2iCDgzqT",
  "key15": "2kAJA2KND7S1MbjjRDFHMEhsdNsanyM39ZtXfhqbS9ETTE2F8pFG213zMqRqyiaAk1cpmBgcsgbixQGCyRtMdrst",
  "key16": "24hdqZdZBLLMZFGDxTP82NyHU3FuuuF5DKKsPNf1S53XBdoPXaBWH3m9Kt7a7FLsKDmwVf5RzVrsYfypq14Y9wgA",
  "key17": "56wUY8NfNytbzp9LtpsqAcDHD2F2D7C98QedY36hxSWxkcAKkuNs6oyCbaVk5c28WmrcddYCSC8Wx6PhFKjcAiwR",
  "key18": "3cUFnQj2bma8SxayJidjwwDDRMAKouDuQ6PuoeuAVZT5LAthPPSH4qbmH8swe7HCkWmzryXgy4umNFGAc3uKtPtA",
  "key19": "5RTAkzGZW3uD9kPmdzPCz5SJQ9T6fLSmore62Sv41L1ic3Yz7sgA7Wkmw7X2T5rndz1XdrVPMAJXkYNLfuBp9CA",
  "key20": "37cTmDE1moDHAVz7Q8KDmbE5awkeCU9a818M4XD8iTfFB58dEsujZ4LFHL6cynvj2eeruy3vnBnZ7dMDLjdciYtE",
  "key21": "3LqSNGDmR9tgeEkD3VzE9ZKdDqDprnoWN4QaveeHzvmzFH39i4L861gLbCw54tpSKeSQhHwLACxnzyQPfTiQHw5A",
  "key22": "5Kj3jw6trEs44W2seotQH7NdRzXPJYP1AvmBfbK2YKTD9gDNPvTbU6HCsy7R2wy3ugdppgW3WN2ido7oiHuv6TwL",
  "key23": "3FCzFMUh6LTN6irheKv3hUc17Pa1HzxrwHQadVQkCHbtDPsnSAhNNzyrjUgWwu9AWffDCXBmy6tSwtyibNnNpw5j",
  "key24": "3sbCUHbgTvuzgzoAVNQcLSPTxmi5kJCQFbp4GNDQ3HzLQozuHzCTPDKgPT7tNjuBNUqz4TR4nuSzoLLsWah4vpHw",
  "key25": "42u4xz76AiFdJWpzpcdQssctHkmM5TiM5ep1bVHo4LEvBtDWJjg4XQbvPvEhfMASmkxhuQqT2xkpDwYvTpo5e2Vh",
  "key26": "3mWTwkRnjEqiCdH8KxzKQY5nXLRpXYVXrqEYGtiq3dtpohS9xkzuvzMkHUxmdoGrKw4qRUEAA8nE5VCXEGLrQfi7",
  "key27": "pDwBbmWUo9jr8puKS7K3V2wSAyf1JC3SYCcCJAyLwpxUCGerim4kZzVAKYo9THQpoKHs6usSTY9tJsb8wvu4FG9",
  "key28": "2YEuSLVWEoUcze1iQe5XincQBQxM7RzY7yAD7e4JYZFFaEjXHKpeC1nQrGLBKSxkrzLef6ZtnVVkEGJqg5oBurkL",
  "key29": "45QmjMUqyXw9gzJ9PNg7kBb1PSypumx4LeD5hpuBhtmaJRGBKws8N9NH7kEnocjLtb7mkbqqHyCGTkpzpV8GN61V",
  "key30": "3CzgdrtJUYmT9sfViZv3UHg9Jeq2kLh73XRZztxWdP6yTXdW3mgN8j8SH5yYkuyQhiDnv2Q6g6PHBmvbTetvAqD8",
  "key31": "5TNGAmWJMZy6p3uQb73nUwsU9RanyRpdnAJHHMqdrFKrwMbJQWhYC8q7sjJTKiJTBtVw651JFPwxpZLvvLbd6xq5",
  "key32": "4Qe5rPs6mDsGWBrDTY6VXwm7UWFBzLzD15iMTE2mJqRcW6J1P2F5UA6J5VuJpqGezfpHxbAwjBacF9bAoVD3ZyTJ",
  "key33": "3YSGUSc21VsA5UZngwyE6k8gCrTJjCesEsQC6KRse99Q4WCvK52KSbPEYXGX7kUnPWwqdADqo9SM3Dv5ghSRs7nF",
  "key34": "5TvZMjXzFeLrZ61qpgbRVJunr2Tfq5VvZdmHGjZ8C6JXF5o3jRBr5Kq6EHF6jGkwPVvYWMXVQtZMo6BeCwQoMipv",
  "key35": "5KnD7MtYKq3Zb4dmhVTPQ3KHpqyyryc4pHYoJpjSy5zcgpmb3dZPjALj4fMfj9YxoH91kW6Eet1nyMEEcWAfoaY7",
  "key36": "5NWpnKUB9azyWfX2G6aSMGC98s1je18Pyzsc3k5LeyY8vF3Br2Mc2q5onjnP2iKLzDWX6fcDPz9sdcXjP57LfURs",
  "key37": "2yERXktZET6d9ozvirYvCpivLJ7w4u3BxKzECfWyhXAg8Awsg965PUJ8UPgB9XQsc1sQLc1J9U9unQH1pWRkvZGY",
  "key38": "3nPrcL5p1NDcrkkBAXMfarw8u3gcsgvXLqnpTZKTQM5ESev6aEHkFKgbjMJVAspxUS7rQcwYu9Zy8PNskS6k42Hz"
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
