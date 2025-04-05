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
    "62LhF3YDLLwqv9yPZVJRzaKZafFPmv5q1Vd6fQDGwwCVnNH5a2xNf4Frx3f91W8WaKdDon5F8bdwB9sbdgHBr6pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hH23fFTvZpgSfQ9x1grNGWHHe8riqfMX9TWbd7UvsjjU9nyAinQMuFnPeRa6pyargZe6reeSMC4WczW1uBcW9Um",
  "key1": "2eguHuxmDn4fFfpBDdQDe7V4CWzsYfdpE6UMbgYg5RhekNsdzMj4wR4zXLfCzptjp92SAJXDe2hYGuDySxgt9nfC",
  "key2": "3UkV3UujkX6yqfhFKLjYx87GBXyz4TNGTdnnm8txcXiDKaDAQYJubNYS5xSp6rCxce97NWRLYrGWgoUTDJGP5kSZ",
  "key3": "2ievXDr2oZQbaZ4BR8iouBoyt8EgV9hUNBr4acEz3YAeBoyk8dcKAJumq8JyMnQfjVw1Ki44aUZjUCCv9DurB4cc",
  "key4": "3eH9SHjXtsGSLVbhvP9gBCVLAasGh1HQwhV3oTpAx3xaHwoaZJzPGHv4Nipyd3mA4XwG9SCJ1gUfCojk3uvTAwVg",
  "key5": "5kzVxgTFXXH8csBKWDuiMhEt1kHwrnEFqHDKDn87j6zV935pj8EWvGMhAxT8sofo7nEKbKbsfBPbXwyoNS84pJpg",
  "key6": "4S9qYpXQJoktDzBaAAg9spHfvNHXGoDudHtLkqmHXJFP1K2u7Ghek8WYdFYi7YWy9rJaP8D9V1LhHux5SziodJaA",
  "key7": "gCg8oorJWHeWJhwwfQqMQtuKEWeMRH3LdPg1Ru4DpiERnDenZ4yK2TLtQnsoKKzQCszNUCttzHqDjpR8ji5vvQe",
  "key8": "2iXNmPykxDtZZJcY4cmQFAmowHFxEzB2CSMV5yzCqmdh7BjEYW4G9F1J7KSHsZTgYW2Q5MkxNiTXgB8T6cuoy8yd",
  "key9": "3XY5btg7Xq2Ypz4RsUQAvnqVwwD3GmGwHPsFh7EYDCqXzqWe4NhoAQz3Gc9Ckq4tW5N6UToWHV5eTTtScNbt6v7z",
  "key10": "5xFqWGDXhAwBGmgCDspL2kwcQ6QV8obvv7jPb4S5JGpmYtzeiXShQqSXS1oKY9beTrjrNVs7XMwZZn7npg7JrW7P",
  "key11": "4ZZGhfZVHz7AkQpNxKd3NjVH5vfRbC5GucuQwhRv3LDLpiDXyeHqRFzzqix1vahCMafo2R6mcFqzU38PoqG36yCF",
  "key12": "5itvQXmgoSqrw94bEH97EE8NSpDf3F7jRwawgdbprJNFSbpp6VspAMnHgWKHjoHdEHvdZjadtDsRe4creJ8TRfnB",
  "key13": "5cYiMuejWStLWmZB1EDpofXhL2AqazVKk8uY2vV18R4Vyfvbtz6JreSFpynWsUsk2j1pp5bBny9FnnEiZTjYvr4X",
  "key14": "5JqMxcYwRmbrwGgKZEk58kCDXfatnQHUitAobRUbSphQ6tbasVZtGxj4fd9BZ7Ae4M4qitSxNrAZffsXcYnxaCHa",
  "key15": "3DthKMUpHRzR885pTUDBZ1GHyxP2ZPFdi5Nx8KN3dubmw559SeWqKVSB63DMUirRV62n948H4sj649QwkVFkFdwD",
  "key16": "34ZicWVPoAV6Yjy72rV59LKCtQHutfDiNuWviVaB9L8zbovM9SBNVrGxRd3rn18i7YJbpi6zzeryGDWU2d9Ncw1x",
  "key17": "2yATsTv94vs2Qk3UFt3YaNByiFoSjWhN48kqBcVX5aSE7a4ePQR5iwRp3ZneAK5LHUTZDkuigX5NEQEAQHgVDdZo",
  "key18": "4oayr6DvZWDNvGbmUJVVtXjvXxtLzpbnTEBF8fJVbmiYnnsZgKHqKCVFQ581CSxJLpJvSLGcRELqx1c8W796gok1",
  "key19": "4wPBFEDHsNS1LQySpYC6FrPgy1G31adrtYsCJTgcSmzkic32UWXwFu1hR37CwxdrePB7rWPLEbEjivLCbckZWhvX",
  "key20": "3XgM2TFxrtWHbpZyVarfcEs3JgbTn5ve57g9s6YzrxwBGqHgt9ekYsg6FPkWJ8De4X1BGSam8gHAXwHVx5Wzszy7",
  "key21": "KP59gwwb29dwdPnviFnHjYyc7hy9AngdPTZkSzjntNfS1PAy6KEmoNfmFzWceUwUAxhtMhpdjnSFRM1ovRnngLH",
  "key22": "rH2kkueG5yb4Ly2LYfbT8mHZnTQcCjeh1TQrHM7tD3cbHKhb3AmCY8RC7S7gUDimHwd9Uoi8AGmsz5Z3YA7m9bH",
  "key23": "xNrhPaQpiACZPJvaipPB1YYi8JZSKnQHrmzJ2rh2ooGHmmpE6YTJH2dRrHawPNmcCMVjKSwS2h8edkQG7dz142W",
  "key24": "2LKov4SP3WvSYksAaj7jfNyJSYUzapEKhsBD1yfEaVMdi6MAzLs7Y4vRqpxKJmiUVo59KQGTcZ4H2HytuHf4FeyG",
  "key25": "5HjWv2SamzS3TcRGKVjPebbzRfJQUFB1qbUfQTWYZvK1N2saKjZdfaMiN9q2MESxvAMZyvCQxZBBuytY3oF2Lkjr",
  "key26": "2es7stHZn3nwtizV8p3nrJNkXHetfghtjtED6cftiFZTmj1ZPuvS7adsho7Sdn1xcQ7n5VXsrypjjgnAVGVf6E7F",
  "key27": "5hdRyyMKZsL8YbWxGrRtCGEGfRetZ94ygYFyz6Qzbk7xgAksG4s3n8wDtXfiRx5GtfYFMxgp5YA2Evc92VVPYamU",
  "key28": "24tNcV31qfqEzhhRttn5K2jcHdzbCU8ddVf2d9Jat3i57vLeGcQ8adEk4THCbH8vs1fnxxV7J6rpZEkbgbeWEyjN",
  "key29": "xAztyYqMSMBzU1kWEu8mbzXb8sA9re4BE5iKF5KVhHqEBzxXPJXeVZQoaUktYvFfxaNXV2DvHLo8JxdcsXDaVoc",
  "key30": "2FvgaDTgwYGEZyyG1SocsFatWmVW9Jdw3i728ZKVGSNAs9L2Eu6f45qEPH3ARwvbq4iNBV8M3guqZdEy6UGifT9J",
  "key31": "pyNSgZD5rrWsHBssw5hv8jF63KqHXRpcxHisgFPWRY86f7e4bUz1uT1N5gXGqDkVPYAjmkAXZiFbXXhurJGpsFd",
  "key32": "L8gfrY4VEnHC2wy8ddbapW32rWgGBDU4ALiUywaW47gcMFzpPqZUqcF626mwLXCZLBc3EpmG1siw4JmrrHjUntR",
  "key33": "5TtWjwHtBoMt1Fzo5Vv35qaSgAbYVKGHggihKeNmZ3rnBhJ79snRqmm8ggKPGoMuH8R2rfyvEWtr7MwQBPmLHE41",
  "key34": "3933Q2xfyQrZuuofZmnJeZXDwwCmh7TiVipNwJxf1queqQpnCRu8531kc3L2irhnxXXJrdsrhAAV4S4yKSqAeV3E",
  "key35": "3qVSTVmUHEFGwLCQaqE4iE9fMbxwv7PqmPECyHiNkUUk5izQ14H4nHN5m377hjEziqPEKAd8ZtJzUDY9a6NRgykc",
  "key36": "5wJruNxZmhGvYvBaK4bK8YJxViaqTf42A1SMzycLsXNqsGJEcVeA7rd3fANVouXvSjmbAYjHzJrSRFdof9HiaEK5",
  "key37": "5BDdrbbeh6u9tGzd1Q2UxcXGz6og7ksgkoffbpndADHvEP3PMaubyFFEVng6QU3XYDLRsN445TifLJKWDSivB56e",
  "key38": "3YCBFGyU15GtS3KhY3FMy4ncj6DNm1gwKYJvGPqM8dEiVsUwhe6Qhr4PpxG7RYx9CCZhHirsNetNUBeLvPV3tKps",
  "key39": "2Kdec4nw7ZvkLThphMSSXvyJZsmco8MBqHwiZeo7wuh96dYy4r1qFS6GBEvioTHKoG9MWj9SKXnuRz2fEqHp4vP1",
  "key40": "2Waq3oHgazt7bhbbC73bqUr1MSA3W49fSZLjEJ2SpMg7wLRbwHRUNbYWvg4xyRzCMZrh3a9UxYASNAQ5nFwdt7Ua",
  "key41": "4mXCkSR4X9sK5saWBcvPjo3b63ws191D6FX9vJ5bXNrhnQ52iJj8smR4CKvfmvxQhQ2YFaBToZqSSfD7GYATDWwc",
  "key42": "3nyqFeh4EfzWNXYZVoijdHcpogGvPCKscUiP1c3nHD13U5HgcbMuMcb7grsKJGAM3skuSW55c3DGJi55wjwchtLG",
  "key43": "2V9v9ZNucwcCReBfyvKBeVaK8t43LpX8rLJHyCCFho7zskaJwuB518UM8Fg4WZfuX8vJ6kcPzmxUWtrdyeA8giAF",
  "key44": "EzLuHipBdXDyNxsKMeHrG3FKSqCqeCb2Z1GmVNazHJbcorqgTY9i4mUtTjq8Qtjx77C8VNZrR99iUo4VcrqDXzU",
  "key45": "3Vpmz2kqczpgd59FG5cqmJoNMhN7MVfTny4zgEq1mjNXYVsB2fFjmhve9XhtxweCt8QTDE3XGeYAFXS6XdBdwiU6",
  "key46": "dKMN45P8jKNWWMhEGFRSSF3of7cd9jKttm6ZMsCAoeuhwJzp2Eu3ZismwKr7QZNziiavApAA1yW7MyLj5HQCg6e",
  "key47": "3hCP2e41sggKMdoVcQAj2YgsqMYEKQg67FP5wNGNcYekGZ4mZUABn1GbDZna1PuY5h6kekaSuYTGqL3T9Mz5mJwM",
  "key48": "J11hmrq4aw7fUcXUTRi3u5hsy86VJHzBvk9NPFJniRfsPNQaxpWYfDv4i4umdBbENyEUHHLcJ4rhCk3Wm9SBG1Z"
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
