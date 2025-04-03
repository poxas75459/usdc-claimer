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
    "3cEaXYA2e4j8vrxmuk5wg8gPkpqEV8MJArLSNa6mP5XgTcCapSeBjabs7xmwv3ywx6AuS3m8Cv2TFW9rCq5qW1Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568LtwP1rXDmwmHh9coRCszjxP37Mn9Fdom6ePq1tT4sQLVjt7CrxhuKojs8n3XsaUFPApqaozZF1M5Dw1SG8pfB",
  "key1": "3YGeEYnVGjQcWXeJH2LhjVVY5itY8uhNezD8N358Zf3Dk45fduNZe2z2RpXcob43JCs8CKaF2645cCEsmbHvrBJh",
  "key2": "37XogJ4YTxw6TQasSHH5jkuszvDebdbLG6EY4PY9w4gDezNLBEJSaK2Ht7W6Nusk5zCjbdmQKQP59XpF5T6itisi",
  "key3": "3urtyN2bQW9uyYB1doZVcJZHffwLFByovsLRtLrLjqHR4EVVjPPzdj39qa5cwGjZRgh7aksCyKeQzEDKB26btJNx",
  "key4": "2PFCd9PXbPvoKDTMkkrP2qNAsiePRHhQxFwNYfnxyx8i4UrMeDPixwKncQemCepqDhPCDNJwyvBPRYGNV9ewp9rL",
  "key5": "4Xr6rEUd1yt2FAUA6TNeu1DqrZEYKymMsn1bd8BaDZeDJxMy1xWPzYvtqprtGsSVNmehUoignrEEAh2rRtL2GrtS",
  "key6": "3kwbSXjqZGovG5Z4K1z6MxYniM7LWhDAngstZWpP35kpZ9J4RMcDKKSrwLd36oTYGhRHhWEm518iDLLsM1aXy6RC",
  "key7": "4hWwwR8tyfV9WBLYvLP9BwEGuWhJzSpekVWtobZFqEbqSdBAz6eLJPdCEibioJsWaSj3s2pwVawSqG3HU5b6JtBv",
  "key8": "5bGxQfapiKX2JEUqqm12tConmiwEvqzXC4cs1VkGV3oVkSiUxYdFi6ccXZudPXBhB9s6zNTXNhAfvjJ1CQZGJA7n",
  "key9": "5JuPUa9Zj99Vm9twph2aH6mQUKKoKegs8fi8n5mAA4spidfQja8HKFRKgQKUCx3wYPdWsoqdoudoPi2LsBXBKYau",
  "key10": "2BepxjzvRVxA25CTCDUyXSnczPmYHfw7N7hiVxJWBxSJ8vDo3jQTZyXUciynPB8oaDqBMVxnTGbRK5R66Hr7hMSz",
  "key11": "YqCqySzAgfUTR9umB3yPG5b6XCKL2GbFdbCXwbzxGfaCRcHAUrvMN4NPbuVFSGUCCBsmm2TsogysXzLpCtkpGk3",
  "key12": "bY2ALUPzbdbXDyxpyfmdcqrAFu5dzmN18JG9QmP7es76TCwsYzH37kFp62o7YEmassyPrXzXncEJQyeNQp9hsim",
  "key13": "V4bvhErKwnBehUwBqhs4pUK7CXZPrzPgtrsubqoDRaZoPub7pPn2GN6TmG16tKTuCiGERgAimEa8tnTSNcirNNm",
  "key14": "4mwjwCZi351hcEktoGdnct2hZBqjcdGv18CP4PdG9sAjppkoDh7uztYnYYzwwmG1ViGsuGnoUqrEgevNWVKAXSdn",
  "key15": "5kjJ34AHXmEmbAFt92adYYfBpNvojBCNYN32u4vJYXaTih1RjyrWAMg3ToYRddepEL61iDNZDfD4fMYZCeiHi9nr",
  "key16": "GjASd1z2Ws17VhXKZvLHzxA3GyaGnu3dbNMf1wVQog3tVLKhDHAcNHGB7fycwyW4ocW6DccpfteD1mYY7TwEduc",
  "key17": "4ATKKuwAfKzgrigoUg8Cnu4SFr6ABkftrM4t1ZNExm5eArZWeuVzSKNqoNxGCaQYza6BGrioS78NLXvDzAYviNk9",
  "key18": "3usH5dDkDCcPHm74TAmAHNC82tvcLhj1vtngqFbhF17PFJ98R453WKGrWX3xEfY5rj3zLdDocz17Dhpin6oJDCb4",
  "key19": "4Uo2Nni1VrQ47ANG3rABTfs4Y9KhuHD6yEwe24jYxwVPp52YU5HeqFJH3g3mFd2nZwnrRybV3sWJbUo9d1qpQ3cW",
  "key20": "aVbLy9QDFcu4RdUKoudEC8Mo995ozBnBd5vZABip3kgb74cVRYqwS1Jp3VfAZJScXzV6R64F6WQUwgEPT6ma8me",
  "key21": "1f7SCa9x43ityHZNZ5oAsx9uwsZjrao5DGNAmpN5KgXjRpA4Mi7PCt4U6VRBKMhTsd45HMTUavQ2C82VfsgL9wz",
  "key22": "38puR66HXMQJt1rHhV4Cyd2D2DUbTsUx2cKaDP8VzgWxCbDkVPCnHBJRxosEEirWymKDuMJz61AvwnAwMY4Yr8tg",
  "key23": "5cZDsxfKet2kw2zyLntJjzM2j4btwhYY3CcQVYRmVjMZnMLsGfvmciMGewtrM6uNPq3hHfg6JNwXQtAR8x2XRLC8",
  "key24": "2SHVtv9k5YTyH74BHfCjYog6QshzY6bWsvoQsgYmziTy5jGdTaxBGGJm336x5hNJzyD9brN6fBvS4drijPYfUe2s",
  "key25": "4KkJzfteU8RvuGtcrjb6rHRiKccF17bm58p9fG7eoTBycQ6rpCJfLpSFa6tHeSazwPLGBCCm3mxQPb9iyuAVGcmg",
  "key26": "4oVsDfXw8uwMH1vhYjyD4dkJJRNTbEV5EAnQsfsPHvAHjjESBULuAMfFx9fQmvUM3fNZswLK3Ua79RM5xmz3ajTw",
  "key27": "5xcQhFT8qEWj4CFkw1vJ1Euuxd421ZS1dFCWGiFCETUXMDVFofKjiz8jbzQAeLnzR3q66Kqp5BFzRYFVi7MU6Pdv",
  "key28": "3AMunUU3uGWpn8SgAUX3jUnLGKctRG3oQpgQuPeAYJprwruMDxmx3E387p2718KcrEkVcnok43wFWdpK3rnLQWFf",
  "key29": "41yCV3MgYn2Uu9YArAm1NaTtkAgJ3vQXiMCvWzVyMtbsZq6jamPN2Bf7v8ZSTTQhuQym8twxr75P777kUYkAs1ph",
  "key30": "3tr1Kpok18DJ9g19jYHZsCXg8mkXkbtUFTwxRodfzGZB8b9vyMxfXj96wZ4Prh1bZjcc35CLCTRWftsbFA6szmXn",
  "key31": "4BX8hpf4wHyUrSkKDPwkocoiTzF8L6RQWK96Y979FjgE4ofGjtRLwHUNFKAE8wA31yFGAM3X2Rn9B6K33NC54dge",
  "key32": "3u5kx66uBqPSyEGbw1JtVtviuiBkBSC31ctCvKucQQi99RzzMY6gkDAhf5XXsmnEmEYBT739t2qp6tXn5TJxc8Lh",
  "key33": "458ADR3ZcAfU8HjjR9s7rpJm8tLM8RBSesyJWpkd5tD6GYAGkGyvj2LLcuZNUS1Hp1tYSCo35V4GMeYsrzagMSsr",
  "key34": "CfcdV9irnJYJCnK6BTMwVr3mir3vnkJdvhCsfFVKMo34eiWwMsy79REmnbYUcXhh3FJGYzhUgasA6u5acVnF9n6",
  "key35": "3YpfF3ukvBpyDg4MsyHgHa15QDbDfJKhkMmo5CUr43xJ2h1fWxScBYNtBhuoTgnWT4qfnvjZeKCLrydobhXrPjif",
  "key36": "4iKgn9qsS3qS73jRHkYqjB5k8CgcBc1dhfQKk6T1mHyuYZetMFjQgu41LmFui982kZaxiNhrxotckC4z96AYFCN9",
  "key37": "5YGJUGG7X3FXYqokzXBAFU3Q3UoF6uTLJJDSMhbSPHzmwzXyjajjKSrEk7QnzJvMuHAp8QCgqPtwn9nK36gpKMDX",
  "key38": "4oa87g3kBddviEUcxupgSBaBJq2cw59o4qC7iMPLMdncf97Y11NMvQkjMEZ4UcBdwcAQop1wUz5ZJkHwHEmtCXTJ",
  "key39": "3zXy5u79MVKE7J5PKEjnCRD5aRkBS2vcSAX7mNytjA6zVSXhq3kB64jfUHcBN5LE1UGnqdqXBapMUUsKx3ne3Ypq",
  "key40": "471R7qJb2LA8t2SRzN2MQe7Y6HLoKfpnBnfLWcad2bHdUPWAYG4f5vEhCqv79MTXz5D8hW5dgju1jHiyqufauLEB",
  "key41": "5ZZbzH3Eq3gZ6ZKwWKSsn7WXwPv9JLWRskLASzJXNqYCipKf5FNfHZqjbWbKDNrdMM9jrHsdqw5A67GkCvKmJ3jL",
  "key42": "3vt2rFZMHos5akLxjSfUTdTjjxWucs1bZjPiJ6QXEjcRCF3HCQK5sWnVBA3aPFz4GetRZfgXSqJdqzKwMn4kugiQ",
  "key43": "5Cfhdfe4SMsfo2YMCPV46N5adtPM5hwz7HjQbyGtxzZ3PXenjdnkE2Usq8a9g4hQ6VtVpLtgAYpAFEncTAHTzm8m",
  "key44": "nPFNMFPwy1Exg9nLNwGi5aaZezzGvcUjnUirkeSW3xVECxp6junJKo577J9GmM1onEU7uvS2BvF727vorNErH4Y"
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
