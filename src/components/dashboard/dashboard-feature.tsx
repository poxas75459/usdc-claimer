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
    "4JVcToqJiNPat8nbVVRymVmCYjTqJs7TRxyFxs2tawxgMTKL4X6LPdvBnAHBwbLp8NY1NNSn2gWvn6K8VKJ78qpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EjA8hKi6pHRoaQCZTCPkXrPuyjRFvjYJWdK4KrVQqD7FXthajVAcK2RDCJ2knwkDu25sYzKHwb5sP9vpHTJuYLc",
  "key1": "5y8cjXJiXCMwstVEvd6QjDbB6uvrygjboeHGh2YvB2zJRqgsdoSXnHUNpvQDkqMgLjrsPGhJKqMdU6VGovUGbFoX",
  "key2": "65bSJXrW21u6b19M6HgK894XomTiW8R8gUc5RVuMo3zUrkHuBCExK1jGBxREQrbqjmVwB4m4H3sWjbBBb1P7opQN",
  "key3": "43WuieXUAZoo2YdgKd4EaV5AiEHEsf84amnuvizxX5oQKo3NwUkMeystNqHVJkHUZF48JrVdHLTNLikqeZ4Q8ek5",
  "key4": "4rfrY6bxW2wTwF1zg5CPXVbJ1AC5N3UmttPyfNs2Mj7V8bzK4PjukGr6Nkr6XpTY6Bct9jjWvCvpdqC55mHpyKYn",
  "key5": "2rZ31GbpVtavxjSqFo9CuvkzrTCooQBTHTogcYpS7k6LthiWh7SyPVXidFKGKzTMMA8MwyzkXq4zCn4dRXBXNMP6",
  "key6": "67qWTMRoZPoU47iN8dVJoKqpkrC3JyVh4BYGxXwJj9ani2T4sE7KjAba1aTcAbDzsXX1PsKVguh1jNnrfWg4gmwL",
  "key7": "341HGZ1dsxi2bBifmLi1kUwdGQCktLLumcmhPCLDBmbqH4vjUjxb9TD5pF12YbjQShCf7FEFD8uXBWeo89oKtVex",
  "key8": "2C3jDf3RXkvV6jYj3GMQiyzTmWzfDpBMmT8a31zcPiGwidavtgoxVsR9MN6kzUmTB7CUavkY5LX8bqpeAbiJP13m",
  "key9": "3ZnqxUktdGukkAs5ad1VvSWVCLFDXS1uC3pPMtLmcQ1FM8dJ3DY1T3LXXBEgRqYRXcQGeDhRDryypGW9Hd9BB9ur",
  "key10": "2uSd7k1dSxcyChsSXEMrB3Uh9mza5iHzFZzhaC8anPrErJXykRxzu1FoWEp8o8oB6923QH8Pf7tSr5XHm4MRibBC",
  "key11": "4eZkyGzTUVK3C4a55uwCxBhaCyYkTwWaiysjoSVVjYcCcbxZmrq7Td4GysMNYoL3KpFSusEB3FPmsH592fB3JBtJ",
  "key12": "D1okig3576gBFGbfpH3oxoL9pJaTBoVBN3WTiQvJmjXKCugST6T9K7RMrxkUM9J97wWEJneaL4yWHsHsof8nzn4",
  "key13": "zReq7DE3EiExGfQwXuZqbw5FT4fyqx6sJHrhi8shyrb8Yaq4b1wnVpdMMDWDRcdtPYqdzs2wGaGdNfY18cCzGwz",
  "key14": "4FXSoKRxwFAx9wFho23nDU5RQr2jJfh4Dy2e2drhKBSVvh4DhntnTmvvMLydfVJZfGxSE1Y2CksjbjN29RqCkVLg",
  "key15": "2h2gVmWxhG6VyeSetUeSdbXqhA7miWochqRqwKe6XKH5U7GSkBF8R2UMYx2gxdgfZy25zKLEYofZ89j5ETB6htJb",
  "key16": "4rYDDR9JJFvHeGadsMsEQNrg2RQafGAdaiYhoqfhYWM4ASmghEtTnimKeS7oE9SbeSQWNWNKVaPyn774piH1ociH",
  "key17": "5rMC1JHoC9t2T64H41kUvfA8SG9xZBEAWyM5hsLQre8VK7UuqQHf3NZALkuHUdzBpMgsGdiZjFk5MDLuPKFrHuGo",
  "key18": "3wLivSooNBq3Nc9TY1LKzC731NwFPAM6cySM6EfprLqtiuAXAiiksSYNqAeBNnG9DMbpDJ32NUTSH6ovBgDxNkEu",
  "key19": "ZNcRCw9uc7NpgbAQ3cerVJRJWiRJge8mzYTn2bZ4fSz8TzRyVMoAEM1SRwDRaC1T16rmRaX8wr9Kv3htAJ3gmYJ",
  "key20": "5wiESdwsKKjc5SCFicwzci5trCghzuTXrtZCFuXcdyHZJKEYC7yjBWq2wC3H5c3Z5XszQczcSpAVSHpn68eEnS4f",
  "key21": "oRZJhzKKzYQuG7dWYW8HLTyzcqgc8gRartCEQw4Mrp1kTnVfAX9pUNmqvxfpR4bUKUi7Ld29m25vs9hWqWJhJtg",
  "key22": "3161BV2fMeVkvHoWWhWrMiYocaDonDDg8AbYQ55yqHE7yfnWnL1fJN2NdAq2yq4XUJKZtdMoyKc64mTW9qAgbZUe",
  "key23": "6oNqudvUXXPxbckyjivXquPqSdwy9BVXXX2aBZfmEXmzta27pMz41iWWCw1jXrSwuMaWkuiavejkcCvxYzFGmDu",
  "key24": "47xUbTQyzy7538ApBC7s2sHBwJqJ3PV3eL1EVbBMwTKwpRGGFWWGDj1H8HWYkZyRfdpBMZ8bx4CJhjJKH8CuBHZo",
  "key25": "4AMxFghMGEgt7tWD3fFctYsiW4uPWU9ywJgN2GqMLv9xvMZgbEWkcsfDErWUwUY88q4tefXeYzFfa9fw7VrPHMDF",
  "key26": "2LUfpyb5eLgnnGWt8AoCnRWy2u77BQ5G5dxUq7MdRLePqiwXo8yDaDN9fa3Yo8xCHrr4EyRk9VrwUCsybD7foV6L",
  "key27": "59vADo5L7jCgFCWsyxKPLGhhCdrei851DAoXVrJ6pHt6vUxcMeETuB2sFqwQAmAAoELkTgSqdguWVds7VSwszq3C",
  "key28": "2FJaL5mDaE2dWZYjS4rb3e9xZWRgctdeStUv9ivS1NPVPqjXVPiVR1KkuRqUYyxV2bYdst3s3T65WQWtnASfcJ1j",
  "key29": "4M6tDsqFET8cRTDhpjA5Yyb8CsLJapbu9sj5jsbutRVy8wHWa7ozqDGLUShygDhX4VmgFv8BQ3hs4CsQc49YsF6w",
  "key30": "FgbmUUPXURR5pS5CNDtTsnA7BB4xBLrrFJPfKLuAK4MM5ekkVakxwTi519qV1Xp9jm3Ku3H2NV7oM6Fqi1Q3bxz",
  "key31": "5Kb7RNSEKr2ymiSiW7Arphy6MiCwSwT7a41HBrmQyGEn3odUEWQJoKybJJWD8uzNXPc21Dc18GvQreYAEFgvgFne",
  "key32": "2vxPpsR1Tu99fL4pbMngwR1N8GANQgq6sUNcaH3QVkLDEsfMx1AfiLLvbi8JSejmEdMWjbbHm8G9EeQA22dRhH7i",
  "key33": "63YU6W6ku8GfXHetDaRxBKBFweP8jYyu7RbUXEu7ndq3kyLcZ1pWqdbnjRMDyGXHqUS1kNtXkCt3nfBda2Ych1Tv",
  "key34": "4JC8mcvGmH924GW3dyGLFyQsHBBwTv8GtA5ymHNt5CzzKuH99Pp58rmUbhkUJAzGTYu2cvKrqFnYsDv2vrCaFAip",
  "key35": "6TgUZcejg45doEca1oXWxyHkYwUdQV8ppqsKnA7NkVZ83fiP5HVZVH2nDF5naLkQ6dLjHy2icNzToAF5fo646sQ",
  "key36": "3RwDMGN38esWaA8fFnMAPsFrb9ztGZRtLGxBCLMY7PoSrSkH8fbssBFU9qyDGye4ahjt3hJnCRTrkXv65iWmZj1N",
  "key37": "4NvooU2iqoKtfgdh9SoThSr78zB2WovSaWiUfw9w4MzjLZqvf7SrSstgwepyRcbXQN1fLtXFNa1VNyF8zF7M9nCS",
  "key38": "5vqqU8EfLPPFUaqCehe2s1PYd2qChUUfZu6VLL3MR9NqUmpKUET7ardbsFFe8raDLZ8ZixJgNmTSZsqdiFUbUEYQ",
  "key39": "24WPcLUJn2DxodcaiN5WG5LqkD1BFq5QAAaZzAQX5s1dyWG8SecVp8HBnh9tkXVwYumKz7Hhc4owrdoD3LNVhaUc"
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
