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
    "4899BHvxkxNrMRLh5Az1b8BAHcBQc4Jv8MbKkjhyEbKXy5zjoDQLoXxFSabpC1JsX4mdidk6ZNcMd9d5bSYUmAnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XaDvRqJudnN1wTauRB4fQRUC4BXbnUZDxuUTJ2w7XrobbCRbepW9hLz95XjBUaV3FtiyHthp3WEPbALtPP1Wj2",
  "key1": "2Y9UZ3PxGWpLqYp7BBgUS1EZric2iQ93SwdDBY7XGr2ENiTingKhSRdSdqXpy4HtZgfjFJLYfY2DdBtY9kJyxUMN",
  "key2": "3yeMcJxXmyJgnUp7RK1LGnYzmpzfMeum4L31n8K9MVrFwY76KyTYiTBLnqhUdGW9vXmUPiHaTcj4mGT9EBC7z3BU",
  "key3": "3FwiaCTVzaxZV7YwPZjnryujKVRgDbmmJe1xeNMmHgX9QCoTXNBChTg8ozq9zo14kH8MsWBf8BqRZSvSgEkXDPqt",
  "key4": "G8fe6jZQg9dnYG5nJD1VC61bpvknq6RWPPRrjAoRMYRegygcp8FryfV7xrnDBMMaZmAt5eAFMJCNcmFKeEJHfdh",
  "key5": "3dzDsrEbBNsW95xk92w2GJ7zPnkLYgr9DYHP8LpF28wdVM9nqrSH3zFPWABTXANeszqEWLGGSivCSYgtjbab18Yq",
  "key6": "2LyFq4HcxU1p4Wwncr9XwS8bN4B9VaPDCECmuyEVLyBvJ7gM2KYzJzH8bobjquuic1cUnqvTKA4gfk7ufnfgowTB",
  "key7": "2MwL1ttazkc4My77ExYJM3wAG65NuDfVWMZsak1z3bZgX2q7xiA3reNMLaf7K3Ncy4LsMQVAS7mUy8duGiZ71Sx1",
  "key8": "YH2YzrkYB2tcv3zyCbhq39Yq9ZaCLokFyJDjVYTKhfMkEW2EwQN6si2oY2GoA5Bue3DeKuMGmha1Fhzj4BoqQPH",
  "key9": "3JE7S29vSRsFQst1TdnnYekpxfohnGLn45U2YM4hwv9GQr2rNyXch8adDhoVtoALNiAXMVKQLjMRCRQBfjbBKEgu",
  "key10": "28kaJGrgs9TsyATBWJS1sVb3ihzBseX3ejqmw6XXAynwKA3dTdujiUwnHSU27dANz7ANi8qaCCjwhNFZAKKEdrvQ",
  "key11": "5mjDLMZyNfwwbr3ci9ETYFVz5PdZpYBeye2843W4Gb7oQ6qpsiisoawbaSMXFTG1C7jRyVvh97dzsiQtCW2UxYaj",
  "key12": "4D3qytdkC5VUDXrbapnPSXRdJaAvXQvUFfyXFiL5wnkXN4VUuAVUePUU9Uf79KWZ7C1p8myGgJJqhEJAJKmcVB7A",
  "key13": "5ZbRkJFsTU9DJghuPAYf4RXUj7n9eQQKARm2tVroXYEfw988Qgky4UGPULdGQovXNt97MprCr4utcwq1R3hED9jP",
  "key14": "5KAqEszfxwe7iVASgYoBYN1pW6TvD8RNYN8G8ft5PXoc8rGzupaGPphK7WmGRtzXvz6vyEdTyK2vLpw3NuxYJm4Q",
  "key15": "3aaP1huP8XPTWmGJWRA6u3ruSNMbG9zAaFNw92P8ySHrDHgEeCoL7KPacb8jLLTdeSp1Cg4yfM5xw1MxMfs5n2TB",
  "key16": "4cvj5oDo89h4wo6gcqykaUXYYTCunv994bZVNmE9rSzydzhUK51BG6oopQ3nB8zvQDQeSqw75ZHrug43DLJYpWy1",
  "key17": "2hLsfVLWe5v7KDB1P8K9uuqgawU6iNpxpw2sTQF1JJpwgx4xHYfjT7LTEPnMTpnhb4JTQLkZRhnT2zniVcofTq8V",
  "key18": "3HM9HM4F9vKmQQQCfWActYkYFziUA1dUo4PvvQJGQPgNrzyHuaCixcTYr74Z3imtjPT47jRdrhUhuQnJ18hSmVqj",
  "key19": "5T9YgTYF644FhWekaUxstiwc9krTZsvhiduDhgs76iy8LUuEkztMo7tWgFvgHJPab4iCoY3GCDDpJncm3EXWg7GD",
  "key20": "CTYtASJHpLfgVDR13Aba2HA1e6nNg5o3gsZZ6tJ8J8rycYXocsDMnHBKyqQ7b7b26MKd1ML3oe55u19CzDYb8uY",
  "key21": "xWaAfhGcYqxHwAfVupdYdwKnZEaSUta733dqAzDf66xL2GVYR3bDpkdoYB2G3KqEkNJk2AmgYiaZh8b9R25FwkQ",
  "key22": "u53iLQ3uJh7SiuhhhFzJhKZ2v6BZCZj4JPuDvPD9mctVyWV3E8Xd2nSkUTBM963PLCkZJHq9J7EyLZrKZvf7bai",
  "key23": "2PH38wNmtb9d1UcgBfTSnUQnCSsCHWitwGJPzM7dTfp7ywdMADuwzeAdapW9QPnhsuUgSFnWKcrQkNRcDbtfubSf",
  "key24": "5PeK4HouAD3PehfXzuvFCzJnmbUmjgdrBZcmxypr1zi5KUuEpKMEJjfxhFZzDCxEyjcEDCBGvpLf9xaechNjQnSN",
  "key25": "3DdtbYUuDutDkhA9DCiUBRNKL9C7WCjWLAq5E7knZGbieFiLYd3iTj46t8ax59TqkTPi6EFoZgTNBNwmvs2gWoe9",
  "key26": "5fQe1VsoCFrVnrAhsxBJCrMoqX849R7MDKYTFbxJQKXZrvcBrqeKDMqAKMRg3U6PD6jibMJGfZTaGw5MGcw3nTKJ",
  "key27": "3vfd9SkfULoKogGWuZ1okrvsGznSi8C3UgmN94BzRZGBjakYGCBV4oLiqxPZTS2piVqa2BhuUSme1EATmnP7Hz1w",
  "key28": "5t4V99N23GpcmzvKvKEefwzAFNo63ZZ6F8F4BrZtU5kT6yFpsnVGbVD8pv9jzU661oZXxdmbTuzsoy6UwchvHg1s",
  "key29": "4zHfQYUxUsDn1oiTykAkji5LKttZuAp9yuDduJuUbXg6FS8i3eXcoq6ask5UuhrXpZrFtGhTmahs6U73VkfJoAX6",
  "key30": "2iL5owsMDZUXH6YSh78jnFdAuhvmPUopeA5NwTY4itBa8CtdfGb72bJzg3xNJj4GsvC8TzScfraFwNco46pdFfzQ",
  "key31": "5gfuSjgz1sejRZDw9js1PC66djrSyEZRpeKNhGHLZ1WF7a2dZw4GaK3ytntvNXQ8g4MbvwaJwFNuqgzSDBEY3C8z",
  "key32": "5QSg29dnhiAdze3jthzXhQHcPYd85aei4MXxYvbnVHAhnszXjAtK9NKg97Qxgn3VYvTyVgstCg5V7PFD11iid6Dc",
  "key33": "5TxLEA7Zun1iC4zAGkewTds9QR1tTgsZfV4VjozNYppEBtLgBM6AJc217UELUezBwzc17FmmBvWs6vS4Gg5oDjr4",
  "key34": "5sKM2b93upp85ceMnGmP4Tm3Q6DtF4iARofasEYRQXp2bm8LSFYifhcoB6sUK9QuHJsABwynZjYi4qDQWj7pMeEk",
  "key35": "4GaGM7WxyovAebvRhVaXih6VvNj2o2bvPB9uFPeeCY41YSyCHiz2BRoT4ibhG7dbsiGJ6FGxHD12M5u27X43BH6H",
  "key36": "4YZKKwKcevq5Awrabc6mEbtJUuKB72EfnPtwkfUw8wetiH76KCNYHx9HC5DxkeLbpWwwLvY9B81fEiDSz4hAKczp",
  "key37": "3Q9xGn3HrnFQm8UPzv8hEMqGBYgphVaZxw3YM6TGYHbxwXofZbTtWTFu8zUTj5D2zuUFAXWjWLjqAsiR8nSjpbRE",
  "key38": "zs9Ev5hFxvvrUZkRdzgUU6wigzx1owrhjeqwdM69992gLP59ydhw3THcJaiqHTZwUr5vDweb4638dqmgKDKyz97",
  "key39": "2jWL8SzbAo3tont5dwZQj8ziY5NQphCmTPmAP7opQHCLUzXeKgdrCS1PqKpK2ea7u5B5KegLE2YDknv29GJYiYPc",
  "key40": "5ZA2x45D5BBLXr4pAQY9pKH4hYJx39sVxSFTNfJ5xLPcfcymgEhmQWcg5h98Szu5XGukrYY2bvY51qygqwRjBFBM",
  "key41": "2qatrjskQmG4myRLHokye8cedbPi11rkeBsDHJXgmqs6HmVD6UtJZbcJxcGJntthjEc5So8yPFcSZ8vv1jdyXsC6",
  "key42": "5CzEJbUHVJexx7AsAifKL64cpbmw5VJpiaGY4AghQ2TeLC6ncnXWMdVthWfym2G6xELB2WEBCGNwyH6RUtFUq7Jz",
  "key43": "SYQCStLJ21cB4RT3wcNzNZAiBpX3ADHuWpi8fR6gVoyZX66Q56bVoP1EtF8oh4wdq8potJeoHan9x6uXk8p5sjq",
  "key44": "52Kf28anVguhXYf97MbhJ5Yp7qKbsoudAXSwAyvB2G4Pw6bbT7YwyeYnfcAQkMpV92Bm9fubCzdyE1zfB5bBYxzz",
  "key45": "5XAJXRoMv6MxvEBiP5iEX81p1s5HQuB7q4pJMKNbpqyANWYHrKxcQmntxDfAPneQYYVRuqqH8mv7WZJ3yMa3hmPM",
  "key46": "CXu4dkYtkNACDCvHGKKvGjCk1fb4GQVNZjhKmQ9t4PTipnTy8m24jzx2eeADj4AknCv3PPWLzxjy76U8BnzsY3q",
  "key47": "3rFYdoV9XVjnZCYxEzKPnNBrFv3LBqoPtoV73me9Esg2KwL4AwMvugBub36on42KcnKafyBReY45wsYyL19zKgb5",
  "key48": "7Xi435Dcrya199QWbtRBy8Xpfyo1z4M5DJUVZ66mz8c2qFHhAUwkE8YHHq89qmJEej4nNm4rhaPbF3L2CvURcbD"
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
