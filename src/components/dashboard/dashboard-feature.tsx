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
    "5JzTaKa6W3kmMA3TyXUF6ZXYA7L57F8mwpKUR81YpRzxBH3X87HqCNRnRFHFuHKzE1upC37riKnft4CD7Y4M3Juw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WgJiTWM46TkmfjpcSi1saBQRiVqnH6Rri8VWhygVTY832MK8aWhFSd6HNBxBvkUxPWX9UM7isAp6DpPskV5z3Z",
  "key1": "2nG2GofMJvyW1mPmt3uWBtXgbxGzCqk4r2CBZgm11T2yDeRpJ7rzw7ZcrtNDuzqnV3TDcVaW53oGCSLrkvoW1muF",
  "key2": "hAw1XNXt8SZy7vmYynziBZv4PgNzExQnwTQnioJHBF6oHBY3TCS46r42v83N8jhxiG1mXNPtnkKCpN6VoD43XHu",
  "key3": "2hEeDe227iTsyGdPuHNZVXUW9NCWAnq79qYQMge4d8iYy3R2WrigVCVYYqttEbiHWRpZkZMb7vr5anjTcDpX1Ujt",
  "key4": "grh2K1JfGaJUQQx1HeojSVo73m22n3DnE1F7ioyfoJPz2ZmrNoK4pCiz3TrhCAtXF2jxF7jNngnmzx13oEdp6kE",
  "key5": "63VHXzv76VJGPkhgf8cRqKLfi8KM4rBB4oakMnn7GD5pp8mX1Q48qhcegbGmKGKgFmnkNwhXYjtga5XtA1gYj2fi",
  "key6": "2cpCX8ek2iXmp5wyKuhtfLkMNbef1v9yBRdN9JD76GrdRLQAQE38SqTVcLNLgJabkYF7K3iyTES1V36j37PxXEMj",
  "key7": "2WXs8kdCDmLb6Ko2hVrYZZTaqFL6kCDK8cjXze2ArVLAPdzTu7ZNqmmqVD6dSE6k8sMX4yhQM3jGFR1Hv35dC6XX",
  "key8": "4BTkPBCyrMTUTLgPCaNSr18Fg6fGJcnkHTXxHwaHVeqRM3yP684bBhAs9qCXffx8vurXhKtArWJhqWbxwDmnRqtQ",
  "key9": "3s2Cis8vD6SWJWSPzJAYfokVBy1N6w2V9tZ9MbBsejYTpDUxowaAxiL4bhagXmxYWBa63KmTvP9ezmufZuNHXEVk",
  "key10": "1nWH5axu5UqCgRbbAFqBk9H3ei4nmxPU9YpN4TLjzwHt8xDQDaJxAFNFEkKso3EgqYDbmLcFX6YoPCADzxhcGdU",
  "key11": "2UoXtSZkBRhoFtfGkfpbbgQGDv6yeGH9D1xNMLzpgLGKVuaPoUbQ5PuTwKCByiG8rjBMF7DTvPQkpBFwmdzJPyxS",
  "key12": "2ZBAKANcNdzqGnCtJkNTLTkkuBfoNy6SR3HzLryuMvUDrRjxrCkSLhaMfuag248GUwsVo8BYFwmHRSuhSU7CYgTF",
  "key13": "VAkYQCGMaNfNzPC5AYUhKtRRta4FiNykSSpzfa1n5oiEYtpbD2EHLKR8syYiX2KoMLrG1JiNyLuopd6ipJGMpAX",
  "key14": "3FuTQywVXwcZoc2oUUjn1vLgE32YWz1ghsPzb8UcasnHG97rK6jLimYnwufWPF3TLphbxfftMJwB2G5NJUX8FTqd",
  "key15": "61HPqWMi7BrnuVoJj7vb6dkAUYwqZPHmLC77yFJ3VyD7E2iAWQqQpnavGrixhgg48Ki8gVpF32rVhzS75SjcxL4x",
  "key16": "2QCmfR2Q5XByz3crppTL5ky2iRQcBpTzcZZfyvH5DXx1hifbsZ3ZHdxikFi31NQ3sQefQANN5Wtn7LhB47c9QEMo",
  "key17": "rJpHJEe4F5QWbHBQe1dwayE7b8X4VwzP66PRRQfyNhE9XsnP7jV5gXCMDHzFtaievEgVdE8MnzpJ7WEtMZXZvsh",
  "key18": "55wd7bY28dZsJsxwuu2kg5XiQGXcJfX3ZFJvjba2vggyppVSZ68p1DSYeHTJNxmq6rDpapze5yDk2Teprpn9zjWB",
  "key19": "3PSUw1CG9Y1PfKZjLrncFC6FeUhjV2cRmTEDnrVhxJUAfbxpSUH5wcoQG8mKMw1PbR7m3BJaTZXqBcSrPSUU1GUb",
  "key20": "Z5Nn32ZiHAHTJifxba6t4Pd4EyrFBZhPApzhSeZMnWgv9fEFG22psDsY7FgeVn5gYBikXeb3csLRwZQ7Nz8TxzJ",
  "key21": "ScPqybVwVpQz1DZFAkHo86XBkJpk3pi9pjmngxxr4h8ZjfuTK7tqAdQ2mAcEV3Qu9rHGLYYLwRmiy68ekhvkufr",
  "key22": "4xmEqCuCvyRpxze3N8afJfmTb9ubbZRNjFnoyGrSetWvitBtBLbpVXgd6gMaZaQ7pE9SWuDsvMegY4X3xNfZkhcE",
  "key23": "4uR1ZzKiBBr72HNZQK4yZ4cgupuWan5qnMhCaRXfEL6vXK1dG8mBLDV9tVRTRa9N3bSre3vo6d5mRkRkr7QnKvXL",
  "key24": "5H3DDR6QRU4msc3MrUv2DVXskeZPvMU8Grt8WYNTKNWZtXRXPqPXStTNRMEVLgFQs3conwZhER5yz9bejyxefbHZ",
  "key25": "2yTBuhPjuWYATAborRT4ZfvvX3D2Q9xNBznihv8hEZxdcgMqensM8gvztuU913HfBcZqbizexGVULy9saZjQ6cc7",
  "key26": "41VwDEZuUAGbqExyZt6WWWMaFa3eYsVsEDwwrPKNsW6KP6Y3ZpDP7j5iDa4UgawDYLFVXwjzgMSUn6kTqVGTH5F3",
  "key27": "3c2h7JDVJq9H4eNYk8wWJa2z8faXprdasT6gejvhtHPgNhCu4RVzWjkrW7jQ6di32oeXrNz4dVhoFJVSBr58Mge3",
  "key28": "2L7bBu9hLrq7gWEhG1sMWnqckNcT6BySakseyRcP2w9aYEWSqzKCAXLRUKvfQpDf8epN6LjL7iwb3SaQ5EbWjMnB",
  "key29": "3x9h3en74RLokYEcWLFd6K6KdtNF4nDmV5KtXqESHaXLWBrGGu4sEYWRyTuCayv8Hiv4zvh8WWQQ9JR6i7mytfzS",
  "key30": "5TiSjF4hY3122ef8YhgzBWUFPgBAH8pZV2WmGviTaCs1bbKKNF3XFZK5r6ZCv22PW7vXGX1N9VKEj7UdfJirSntZ",
  "key31": "5oxU38b6tdXakQ5FP8j4cubw7n5ea9Eh5n6S6JnAt9FXJtQGhftzwAurBYaDKryQnH17UhMpB3wTMDZN68oEcp9e",
  "key32": "4VLkMwhEpjHhps626uNcyFn1ay6BjZnp4yxKjadNaDZm3xLqwin8whEgwGvpUdhXDwKQ3HkRZLgexLP3poCVxtMi",
  "key33": "4a6BDwsdNhiDgqqpM2j92MJiVZiVbUuGFDJ9gVRWXuHA4idfU38f2f7E6vSYUHtAZRFaWKYhKpbwjtu2H73h4rMn",
  "key34": "3SSdz4nnAepetkCBt4UoTKHdAtTpyiEho6WRsoxrX8t6AwP85c6QaAVCLhqdz85pVf3AX8mjgkMUNYUmkciUK6ph",
  "key35": "xEr4G31aBd5tEzeJh7R2i7r6dEJpFWqAMCD8SwVLvjyP28K5HYHTvbDk6rkfxotZp4RskHYyi4gZvZyoHvMfphX",
  "key36": "7CNLbMENrDM6jnjb4Wt1uJeeP5LSAe63dRqNdNtVmbdY1wn6nkvRTv8KnbSwxDaDAmfpfzNjxzfYMRZtqj5NAfa",
  "key37": "27BmZnveahAsQEVJL38uK75Lwa6ByXV2zRCH7n991jJhLY82iMwu7F6jqbu2wk9gkfwdAnsrQt2xN5Z9ggaiNoHt",
  "key38": "27cafqL1wAczpViPFcyxFNZKRfbDeTgmanoanpNGnTNL1w6r3DsdAepYT3LKKQejDonMqaP1dEuPUZ2HhscgD4f6"
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
