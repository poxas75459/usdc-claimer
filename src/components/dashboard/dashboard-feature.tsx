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
    "5DPFk72edjqLgijraMoqZoYfaTFMZ1YxhJzq4R9CaMHkBsaxGtVcSSDKfiA7EFbVRkhah6pS62dLRzRG4ZmrSV3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJsNcFZzBnafV6AwSEsqLf1kpWbXkEkEYdtkrmgkZ4CXsF8M8Vk4Qk14h9rnp5grM8ogd7ehewdTdGvvZ2wW7hF",
  "key1": "3HTC3vxEdnabTS4eJCZU26RxzXt7P6Tn9nc7bQmW2opaapZibTuXScgGmcaXFAWDkitfhM3oLGNtYLJfiJLqFVb6",
  "key2": "2BnYyN92M37swEpgdToHYzeuPgB2MhY7S4E4Tp9Ri5rQ7VAnK1bcBEHAua25X5XGWW6t5TZbz1T23HVBSsU7fcyc",
  "key3": "659dnhktrJ65GHWdJHgvdjPQUpho5PqJN1DV9svLa5vkbMVtZcvPwZYCF5jGRtwrCUvFxm8T4XzBboGkHcvnH1yT",
  "key4": "2X76CrKah8Pk8hFqKVk8maLCJKFtKiMoJ5eUMGY8gUz9hLK39LBq7BTTSaXNQWbMTVQJ7ossB7DrUFKpbwXWmJQs",
  "key5": "3Tds8EjFrQ19bpkbGGF8NmW6sbLtCPxKYbnNrXnW3aPHUMr4DBMBCj3AS7oUoXhP2J4WXpKgbPnr6FXb5E7waXgo",
  "key6": "3H2yPivozgAMmn7siQKVp1SDD7uEWY87EY1GEt1L44uFGoua9fzibAVZ6i7dHjRybGwyFC7LdtcELP59aeKqF3VA",
  "key7": "5DRXAx1dNLLscmBrBpFwPcbQYS52dd3nZc5ewXspr8L1qt5ynyjkgPu1rW9bTiFx9EXcsQJEQeuqPtK83iMk2166",
  "key8": "Ud8WRYrH7gaarUi8FpwqTnC612UUUSii25QUwYhUy3iSBzxefmWAKwaFCxQoWHLMfS5Te9XKU13b4S491zCqDJT",
  "key9": "5kMferSkDWTHbToePcdmpbqME6xAoPporhVe9adtW1PrMLGwKGSCXaUUiSjpu97n94UdR3cYqsbRmXfhWd374L5v",
  "key10": "3xMHFEj8byZ8R1JMDXTbemobnuLvAFrZ6Wh9Z62MehnuEG2xLrM2VYqBt7UWdMjXYvpq6c8syDtFNfw4NABTeCS5",
  "key11": "5pXymwvXGBVetDN73yss7cYFRBSur5fnBzCYX5uRxYcELQd8tuiTGgak6ZqEd5xfk35BSmNVJZcM2DjpWYhm7YRn",
  "key12": "4PorTkh7ze45g9oAr69g8JbxYrp1cFMo84eoCJZNgVktfUwSVj9MgYNrAuA3EKw4oHEgTZw7PfDt13kG81h682gb",
  "key13": "XRxVJcMwDTSfFuEmH8F8jjcJe6j91Jb7YBgs47njAp7EesUL2GH2D2xpMTkWHoMQ2kijCn6nV4UsSdun6FqpfEB",
  "key14": "2GNCDqkaNiBh6VBEyn9nQmoWJXzHBQxdTVjXCmLrYRPfrMBsDEM8Qjxx8HXrbXt5YyhFLWqCadF7FbQzGJBb7xN",
  "key15": "46avGuoj5h1qkovnfe5FsUwsTWntsvvSrVdYpd9EJUt6gnf5sZxcvTRxocdgyKh2mmRJ9KKoqrceKRuTFcXYMnm8",
  "key16": "49Pwg9Fa9ziMc6fqMzTSX1SRBuAd5Y4RoLZ1qerhVBqfw4fdK3Ayi8UeeRwcVRNXaSYaCHEsTRecDQJw6tFSbN8p",
  "key17": "4dbNFN9macK9G9zA5uucehaqok39PHT3q2L94HV5916JGqdKQZP9nH3mzhKJUqPEattwS7Ryh1pbpTe83DGUFjA6",
  "key18": "2m4d7qDE3e5aSuE6nwcoHXtp84n5uU5d8YPiovFVyabUjKUbe1E55Kp9u2T7vatAmVQkRyQKkNb1GFccFJ6ZM6EW",
  "key19": "4A8bpNwmDqvE8ocYYwhMwUdV2RXgspQXR2wRJRLByik2yZTEmbkun6ojYn5og1wuWCtRWbCw1PyoZYS18DLDVTF4",
  "key20": "3CLNgqVc2hqiRsMvYJSdSxSq5hty7HoTxQ6tjvfLfQevAeMuQFAKSpTVUFV8iQQLNAsmkLMn5YNkQZNzYiGmqdDs",
  "key21": "5ry9VF26i7Xcmcbj6Jchw7HY4gZoiu7KVhj3JvqbP6uNwVtjZyVxWMHqYk8E8vQwhwA7hQXZCCwqDLHZp7gYaL5U",
  "key22": "4BPVgeJshiZPJZVgxVwRBRtBnZoTSE1szbTxiQTP1sMtaCPkFpg4d8FvwYKUbZNzzJoW2mNZ2cr6V9uBGaUi8cPE",
  "key23": "56kyQUV8iY9Ky7gBLKQgarWj7gSqR9xV44tVx3gdr21QdCTdcJ25mKKDejFUaMcJC7ST29485eEwVGQJ7kgd1FiA",
  "key24": "zmanEtMpFgxt5vhSh9BdCMKpEDgin5JD8CXt6sF7sgAixM9QFuY1YVQ6oNPRtGmo2NS5uGF486HGE6TdKGsvxCX",
  "key25": "4AUSnwC4e82s8fnenwGS18uvocV7DZQJLtCwF3Pz7KWv7Ur9Xr8HguuhF22Z1yWgvY25rekLqznHP54oTskAhAPH",
  "key26": "39zXczxRZaddwggFAQ9gUbes9J4kJZuvEFfSMdMf1o4mDdniH8aXUe7wDLQ6cTqcE8boxkbwEk489SGs2d2pLSPG",
  "key27": "2ufNRaCm8rErSw47nNLo8GtC6wHtphshiFcNeRTyTM8AJzrHs7xAp4KujabjsZU1zt6Za5KA22ATbuTQFu6sBbWd",
  "key28": "66s6JKeVh5Fh56mQWn2L7d1gdgNKczVLNWHQRCL4wS6RGsd1dyYwZG3xc2UE2eWVDWfAJuFDN1D6AuGsZHt8EaQH",
  "key29": "jG5C6g1ekC5ce1po1RctDfrfwTdMi1G65SWeGPuLzzNx1gRBjYDM8inSBnkGETc2aBUjcUAPPhaLrgfCpPV6UWv",
  "key30": "2ZYhzsP4HbgnzUKNF6jFdu38n71KeqGQc2GDQQbS3pUzXthxVYUmNohQ19RWWFugSjijBwJnB35fbcVWLwan5eTB",
  "key31": "3bxy7BhnGBShD6aRByu1ir86J2PdWRPRwfn2ar3v291NrsT8tNSbDMgDSaUHVAozYTzBiXj8u6rHw63Z9pdWjDK4",
  "key32": "5ugqiNciLaDBqyyKGhuZMbniHvhr6cqd3B9h3bzbrLeuUG3evgeWwDWLsPEha5AhpRNhAJ3MhET5nSRTeBmkcAE",
  "key33": "2rFQmDj9A6WfLNcg4eMVFBjEXHYM6JodEUmGvwdhkWYK4H521ZhkuZBQ1CYGEwTZzdRTN3W1RGd31hwoVZHgZbyR",
  "key34": "4Y3YKqvMBH5BCzUqGN1ywBSSqiDm5Mz3tYqoAZG7jq8GKqiKLobx8c7V2phxXspUaBx5mqLdM1Fpa6jD11P75kCx",
  "key35": "6BgqN5TpBFqeXGiv3rirGQ7VQiMoVpYj2dh18vFi88Pj5HKc53WFTieNXvJ4GRED6SSRUFgYohvv4qPFDiMbv1y",
  "key36": "4fDBsCNzcv8aMtwGkFgzq4amidEYy1urDaH4xdJQgWgvKontxo5mmVWKsDePUpCvvHpKTAdx6oo3swRPCYwopeFR",
  "key37": "2izwakb5XBT9vVLnpvsAbnQzw3XeyzmhZGDu5t1bkbtuqVNb2Px95A8QyGeXhubRnYaqe6NP1s8DPg687vesKM4K",
  "key38": "59uHuVJca6Fq18Ef3QPTQQDLCxswh7Fs3AM1KKtDVnywa853H2Dcoupa8Sc1xt3yurJuf9ATYYY7K1qSd3RYDcMC",
  "key39": "3VeGSqpp4DsQ43czwMS3sbRBQhPMoNBsSKoseAeJ1RsaKZkyP7GRcBkmzJbkkANdUJ66BibmqixxpcsnQWh9rdXC",
  "key40": "4SL3463MqWgW5DYBMq7CHYXy3BPycKHQZcGiUi7fBgB15Cj9DfXofs6DwcCidNNphaxeoGfgmaN4qGVkiQM6h1pi",
  "key41": "65Dnh1qFA2AuJi3qUWXFGMmnGuWAekTjzpnWrWFgdRiYtYSCjaJDfSeMSRsfj6SpuEWGd3pALsgF91h8oUgzCqk4",
  "key42": "SSqLXCQM6KH8XNzAkBhXFzQsw1sTCZs5Zm7vMW9DwUCugURJML6Hw5LoaSdHBf5y8RrdZd5bBKpWuQNkwYL4B1c",
  "key43": "5gC8zZzF21VcQ8iJUXHqkFZAbfSvZqQ6rQrScgD1k989LQgUJYhvoVc9wWJmJdYWb2r1iRGrZwynGHB4tF6nUwfg",
  "key44": "2VeAsuV6SjRqVTTtZQuwMcieLpQk5igF37Ys5DrfaqiuCoaDkcDBcPbWRrLG48Zj4FWdvurD7gnTPWF2V44aFYW3",
  "key45": "5R1KMZpdJ4csrPoTzUwhRpMRPrCyn28GL8cY2Tjscr1vvet7vbaJmeoyTchfegtFMnFb3eEbQP2znEhEWkwgML4x",
  "key46": "45Jv1L76tsbwNnMvKuD4oMDjCDP66w8NJobfHkDXnHfrANCVy68PZ4A1XBP6p22wHChfHHDNdiAmDCD5XvNEN4ma",
  "key47": "3JPBXaWSVnGvicm82n2wAQnViZmExCfvXF6mQAAC6caLZNAohAJ7zxfTaBPKeCUNSD1yNT5LHWpTiEcVKfJJm6HG",
  "key48": "2nB5sdoMN87PLGATLeL73paRQzEp4sXTmVV3vH99swoxwAC4MfRyB4PtsivPWMEsxJQSg3HJggaAKqL2NidrFFws"
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
