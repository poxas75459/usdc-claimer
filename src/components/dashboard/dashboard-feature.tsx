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
    "5ceFGDeA1RGa81TMrcMJaqRniG1JyU71ZKYbgUQhVnkSJQaVgeLyZnSHcALXAf5BNrbPnFW8tL6qgR4EjGtGGydr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQfxb5SgSMb6UtNnSd6591YCdGvPRqT1uarYfS4FkZrwZxWFFagcjYRPwhgBtWKwvjmhfTeJdBsct7T6uhS6pNK",
  "key1": "5aSGeTnQjisKsL7JGUbgBwQ6vVcGxUfuhKXrsm5d2xY3gXZxNKcXG4J7JTuK2WiU6pWT1XDWECFPugqDgN5RUMYk",
  "key2": "5Emargm5FPxTrXZM35rCa1nXdYMztNQYLXeaExvtAzEMRCm1zTZJNnc3jvspx18kuczd7kVZNcaManNvvyej9b7x",
  "key3": "4LVeYJXbMqJ1fXTrVBLbUiMndoEvXmiQRWnQLCBsieGfzRJkWAv5X5FoaqvtgEJkQNjd693ayh8GP3AWdkaLD88S",
  "key4": "2diFWyn1s1uz9DUtg1jBcRtRAh8fUimFmbuWtEE3m1o9vRoTYjeRMqn9KyCsaq8eat87dD8joYEBuY5bYr9cQzeK",
  "key5": "3FNEbKzDxpzYQTSwEpAfP78kcm4tDFXK3e6zG12av1PhWrkyTSv8S7PfFQyHg9jg1FpgVG6gSSqC2eWTsWjTvreH",
  "key6": "3WrufWUDqh1dXYBsBaJyjiNDwYJ2eW7deh1EAqtxWsKP3X3Doszk1jiKcKWVqn8Liw4mpWrEEB65oJJB4KqTMaAJ",
  "key7": "26Sm74U323cYTGCEbCn4f1wW7LC2c8ZQdVfMNz1719bLjgCrSh6tfJcVNBRQpWFeXXtkJ2smFJfoNfkBVeGneXPm",
  "key8": "554YJM58KnXxRjKwmCTKxxKbcoQ1mLm5VazbgYcWkuM1NFHwhXuYffV6pfMsWSAjT1eEiFDteXbbYq517VHLf8WV",
  "key9": "2AwwPwPWRxv1vxisSYRezDVyUbLVa4CWL9NaohoWVUb6z1aTFTf1KKq6dWeXp5TxbrVJXLygSwpL12zNhq1HK1kC",
  "key10": "4dMbCXfebB35AgTcMCyg4cVZKvi82oTHYKmwfHScMaRK6L6XC5K8mgkzk5sFJeH3KpHkMHWsoy9QqAbAMC6vehZS",
  "key11": "5LwRByoz48U3dj832i6k3CF5hLyAcdxpTD3JrX5gKfWHPU2Q6vq1YcwNyKcBzEid7Tjvhv9WVo3x2ERAgEUo6966",
  "key12": "5GrYKQGtxwQQXm91dhBZ5CavKyD1Kh1DkfigburjUkREkrXjwS8sGgj655YsEQQH8yFwKe3CuQuHmMwKbvY2xPb7",
  "key13": "2AxDQUH6XdeMW9DmkgEKQT7RfSDYdPrscoT1xVseaTP4HAouhRjcwQ4WKHwuw4YZgbZ28WmfKQxzBDcK3xzvhfF",
  "key14": "3WhQyMzFp3nnJJwGSyADdiqP1wCLopp2RJxvsUpy5R21DF661w3MCC7htmokdmT4SG2yHkiKCmruvZj93Q6FuNzR",
  "key15": "56Y4iKJV3dx8JkV5b2WnxSU4tdRBEjYfbdWWg6aVjTcGYvtDs7FYVJPBR1GDBL33pzqwJPZuEpydNJ3rm5FjRHhA",
  "key16": "38dJeNLFAEjWaXbR214vY5cpXkWM4Nc6Ds7vuobFrzpVi66rsWBA74WiSGsmnGUx57rQ7C6SHdshXLr7sxSWngVC",
  "key17": "3EkDJvy1VNG8LQ7wJNFK6UD1NXfgDTNuzsaut6MAgkuzoR7rDaPuXwtvrUHjqc7kFHESUUfbxqrp3wvzUL55pe3k",
  "key18": "5xWDsXgVWDYFZSj3ZJ36DuHewCEoHSSP8RQP316LD9BDwXh4ixksa7GujBi6611FYCwcDW2LWZiaSYp7x715vFcp",
  "key19": "3e2jNf7NpkXxRxzsWepYwRyvqdVEUeWAt1yym262WoVFZToSrLWTvUYgmheeYzHfVhmR24uz9Hhbey5ofLWJvANA",
  "key20": "4DmbN8LZYRPqpJdq7AP8mKCeNYtKsRZZL51hhR7egduUQ3t6pWdCd8pfAz7cb2F6CBFBLhRDwCQ5ZVos6tyG21cG",
  "key21": "4bxxF6ahYeMpxs97xfWNFBwttt38rrWL6qd3WvCZwjtTnPUcDGrZeQEW2bE4ETsdo7qRxJsj4JUKFvWnopHEryZM",
  "key22": "51bUQXcTPAUaiUpkEc1dmYAMapugBdy62BQxc5BtcBUEAEBBDYEDpsJeT2jfpRf2B6mFJVg7pdZBV37wMtn2Un3y",
  "key23": "629Qci6XCr6okqdMdzdBZ8iGQiHDGtSC3VW2VSKdCwQfVM7nR3VLXyvSgPAo3HwUHYXR4i3A83V2j3okmcfXpryT",
  "key24": "4LTLa9V1LoSWX1pMCGCZak1utJsxAUxCwoTwLDjke34FAwdLCu5AHZrraaNwEYkHynF6jvwQtaQfGZsVJN9R69Gm",
  "key25": "2pc6Z9VyGpobWDt5MmUebr4Pc2oSwKvgVVinfsji2N2HjVhSY3Qa7UwF9HYUAKc9BYN5QBGdFuwkkkCiaR3fYKxh",
  "key26": "xKuMiDUp1UYSdPtgrAGCXEsniB4wVGswbSXnCLC6AyQrJsEcFuPHpP3mJPUJuon2oucFjVoDvUxgdvPYMht2SrH",
  "key27": "5n3Sr1JrFUvY67RYDFpsCGarK4ni6sGEqa9RZWxhDt8qCE8N9sUGpJgnUVYxNqqVvJPiHXKE1ZRmvUjur5dUxAYL",
  "key28": "2fgnmz2sJXrL5t9tMMd2yJA6GGyrZJCj46rf17qJZPTptBJa4DfaXWCw5rjVaCqzyriZhQqDUnwhV6XvRSnkB7K2",
  "key29": "Xu6ydCHwoGX5p9suaFgBXLLEkLMkthwqnVAoy25vPeFsk8VV6GYs2tzkeD8PjGZDsbMTC6zToGhtod8ygfm2REo",
  "key30": "5pRz4oLjij5EFbT6PUvK51YCExuFUbyvoCgxvvy3bVw8FhbSiLPapoRhdXm41H7z2y82oL2PJEcU8rMtwAx5kNLK",
  "key31": "3twtosM1H4uvqxKGqftyEzEieMZ4Ecyu38dLKzGJfvSq16hkT6ewZEssdJ7KAaHVdnyeQZiMeZ1XWVvVE8w2V3xs",
  "key32": "4uBAqCC9khpfLtE6V25o5vTC3N323frbptfEg43VruiLa6WfuZrybR9NPpzyrNtmdL2kpTE61UNEEGV5ocj4p9z",
  "key33": "2zGBHe5Yk2526Z66nsWetSZKtLZqjXd6rkMSC4nsDTUNGZSsePfNdkzgzTYLoot4WhEtLg6MnPCWmdzmVn6SA5Uf",
  "key34": "Frgrx65ASXWn87PfDTwQLZQs7xQAYYMK6PAfvatoVbnTwp1Cu15avbRVbL3R7YyjwWZAVZtUPD5sGcWj8VoXZYB"
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
