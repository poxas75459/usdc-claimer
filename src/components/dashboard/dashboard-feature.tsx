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
    "3br5xDN23g2PUAoPLVW3WY2XPQByFjZ62LzXhpdk9AuZrYHKqB7H8VX195UUAn2oc4xf8xJisHmXVh4zABVdKErB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xE8jWqJwWT23YmHrjvR5SkuzDtPJppMH3x3ww9PiQPmCf3yXrtCxXvhwEFVpPFjQeqUpcZhxuY9R3zZ4z79fEGQ",
  "key1": "5Ez318hUuACdhf13U6BcgZz8sbrrRicKvM98tw1hfEzkFqSsnJYfnDUmTbw83oB9teDY629mxAd7J2tasrKzdaqN",
  "key2": "5tgvLGCkim8FihUYqsMCLWRTzwpwmjP4TwNEscZEEqa1nKohamgQQw8pSUjorHM7wDDNXiJkqEGYMkzB2vxQtxbs",
  "key3": "4ZwamfzvRnYvev9zY3kKNVyc7XLePdthtJ5oFfRAUvkr24mshyKQ6XYQ9K2zjyc2PFEMvHiRTFuLCbdf7JFQyyVk",
  "key4": "2pug88FHJ1NokBPbU2ETtgeKiXB9VWSPdqS6JSQQW9EuMEQYp6kYcAwQ6EhuP7ijgsiPp3zgFrJBCCijnNRhXfp4",
  "key5": "5iPZLJkYpQBcFLUWKTFmTgX194HmB3knteVEfnZXWhPiT8SCu3cmqeNMf6H4Ygbyu3DrbbLFqxd3cFzc7LyyVWV1",
  "key6": "vBBCorZ4ajcqgJmiAbtpSwG56N2iMLQgi6evLSVNfA67cuf3QpZZPd1XokcwDa7h4amBDUs6cBVaxR3jdt8dJBR",
  "key7": "4gBa6RSPNJGW6Yb9hMwC3yT1eMvNm9Q1rHa9jyPwzBefTACiiea4FDBUbqtaj49wEMs64BHVNDpqQHWgWCAKAdHx",
  "key8": "3VBk1GodeY2ojf87hdKFzd9qamLV5j7L9SUewN68pBpT6ipap3xS47XZPsVZCRdu4VmcS2ZjiUy3LYwNDHpaHeX",
  "key9": "4Uapsogur77hby5k89Eh988PYAugbqP45YSq394A6UrbUPCgbA9se5QGVkCAP6MYnNaFSqyqsrWL5Fo4g4vNqwCm",
  "key10": "De9GCBrC8VHdyytkjtRhMCC7JPSP6nZq6xSwrxf9HhRTJoFVDrgoXenXKz694tvE3YBFsx1VucEq2WbuwjpUbe2",
  "key11": "4AWpaiSYgppXgCsxt3fQKsBtXXQkpHP3gGjK49RSPo98CANQpmWLufJoEJfzkovrQW943t2Vin7CH4HpwRbkTTbm",
  "key12": "3b5wn3s9JRUG66eWf48Wxw4Eu3JxBFPPqRhLJqNFjvEbdf3MnV9miJL6W8UCYLwiLX22RXitNBmD7x1k7Mpf9QuW",
  "key13": "2YVSjwqS8kJzdkHRUVdo9WHhBk4d6RSdvqgWX7L67Y2rM4skfuwvbbzrUzR2MsZp7SxVFgFpbgtvKhNKw9ZWz325",
  "key14": "47QMjgfZdZUGYezrUjSzMyQ4nvnn7UbhPo7usK79CXK2ukFPEAJvGV7FhqgTXkYoB4Rr8FzXVW73s2y9KdstP4a",
  "key15": "3JjUZtgDJPiE7jwRSx1iWLQiuZhWFjVT1Vf8XnkF1W1LW5uKdL3YRpzKBvjY383iz4ASeVD54t81qnn1Jnur6qwv",
  "key16": "32SioMY3RmN7o6pVTwvqQP2ggFejZpbZTRns48F6gWdP4gvD3FWos6i6EAYZNi2eEWAtzN6XQ6U9WtHEPFWdhoN7",
  "key17": "4qu8oSAMuxaMxqkqKr83wZirHztdh4nRFojmNzcJWdArhX6dFtn66YfrugRDixBUDSiLxaW9A4Fpi7BPdPWjHydX",
  "key18": "4BB5mbfd2cqweiH8uXFSHEzUGy28z5FmqbLWiWrpuLbSdVigiJ3KxoRwNtP8jTi65duPmWaigQMegorjdbqFXa2a",
  "key19": "2HhUDd3FyBDwpDzoBaRnCfuirqsCjApHAA9hNUtNjm1YYuM82ytq4PBMwPc4ZXR7Z1Mkdr9UCjUvz6dZNchJq6mi",
  "key20": "4D19WsFWU6PaCiBnMbhR99MYGq4doHrEGLULRdKuhCdo45KwKaL52BUaPMy5u8yoLGFUz3QuH6SFhiKChWsqRbc9",
  "key21": "39yMbjdi5PHfNNA55FBaik6LLu4MiPfq3Fs7Hfcz6ZQ7mGZyZn18P2yxWkct8PLF97Jdb55HPhTn5m2npEUrNE1k",
  "key22": "2834VeW7zjjZWZtodmwonaXL6qUMqVYpMJY3g4FgabAaoCMnQyEzKrcZCdQBuDEdHFypDftMSNHfA75b5TNpGybD",
  "key23": "PURaes6WsqA1yHr8bw92Km5N7icbmnvVgExqpyPhgUFBbykpjtnUXNqGf3iEgfyjT63P6TwCGPs7QvA9CGugjsw",
  "key24": "54NQpdaV8tA4d8JaavidJbV2b2jYFi1sQBYPvsAA4xWbP9gF9LQBgjnuivcXzyVvh2ntQx1qrawp8dPNSpoFcH6H",
  "key25": "taMVewEdiafNdcYMtgisi4zmwPgqD1mv8A5U92c1HEktsdAkEJEprtUz87PW6pAzCq4CUQCPf33cb2ELb1ep19F",
  "key26": "MBgUsfkvCAgznHHNPHTdNTxLjMUXsd8iPxxNFM7SggXa1YUXyKwNtqWdkfrLLWt11QVMcuQwpnWoYMWxkHYHBdc",
  "key27": "3hgoPBm7FNj1WxxRXMgPSMmPbVAZfSnfP4DttApJ9EYfkeo8zAYUjMZN1qoFQi3hBWZA9VhXC9Li33WViwVRob44",
  "key28": "2QosbXMXesFWoJewWQA6c1VjnbSgH7Lxw2bjUoaY4g5xPBiDp4dcjGQkN48MxkhAXHTpDQYrDKssHbit297EeXu6",
  "key29": "5jDL7bLWcBT1dYMKuNQcnFeumdGCCA59vwBNrGwepHnGzT41ym9t2N3BjfN7356rsDyT67W6p3GnnxiyAWtjPrMV",
  "key30": "5iSacNFG3x9Z6mTNSwRaGF28VhsayLG6XXc15wakKHBe3qT9TL5ufXgTZ6JheaFibzKabcCcBgp16vq5Lw15koye",
  "key31": "5hMejCHV9iFwmP5iwk8TPn24r5GWDz2ZVRweXDB3dTr94a7xNwPQYtqtUyzUBrZRfAkkSQWU3ytZdxjyLwpRC9o4",
  "key32": "Aqe3vbQuCQ6SHDqoj3bSyVHZDrWk55ohpAkVYtD7C9Laxyocx6qEPvzBHfzJs7xjCcXTCRFiKZcvcREZjSvAzkP",
  "key33": "2PS7m1g9QyF7R1oRFcf7uvBxdJdbyaHfLGPwhTPKd9jHQV6g1oPikmrjULrecLcNtCsbgcQdiZPEQUFivGKwLqsq",
  "key34": "pJYRFZrVtVDfeUaEw4dB27KeQiyNaiJEWhT6aAGWEidWY6WwtHaPt1oqCbNqHQ9nDRP4FBwx1pHtbLXm6LojwfA",
  "key35": "5P81ZqLBnDTV9QTSuoQHym9V3EtaXQEGFGQ48oZ8YR4K6oYc68adZrEwWE8CTWGnjtHbLuEM63h4AAwLcspPCZ1F",
  "key36": "44vxmgTALq835kWRKrHziNs14TNmy6odKynSnsZ1Rtoxma6GqwbU8XQVyY6uFCHLfXCrAQ3imLMbvtsm7PA4ygvk",
  "key37": "3PLun8phWEgcNEQrG2gVAjT8dMvKUwgPhTfC366EbKnjTtGMuaDpV3JBN2v8PgyXRgo46nGtzPKCZbuhiRx29qnt",
  "key38": "2oRPrXzyS85V9JDXXvz2FWuckjbAzPWYbV6gwUfGv4P28nSJKuZy7FiZnkZ3KqwimuWAjry6Cm1BQHuvwkrSXYvw",
  "key39": "369gocFpitAZDC6hXUzRPiY2yHEEQTPWLjEJA2gSGivGZK8NSkXsS2Yw3T9TMqu4t882KDGGDeA2mhEFjAxAyNnL",
  "key40": "AZ1koLE8GDChJhbSzg511Vsxyci8rSsgGcpP8b29XXzQhFnSBJaZ2gG1xqaW5y2RafF8bstNKiYmWkhSN3mpbgW",
  "key41": "gCFdnLm2RXa6LruYAevRMtGER46go9LGozL1ULjMKPwh4KJoEGC9GYSuyY5RN1mPkNJdui46rLfVT258ojHpD2h",
  "key42": "DYE18Wt6nk5tFhJcgJ9beciBZrNVnd2anbYoKwU8Bn9Hw5ajSfC7VWCv318QfRBVV5ibcNsBbBq6Mk7tamiFqq3",
  "key43": "2J5L9omvkNtW89xdm9WT6NYzqtbxLZtasLNEPNwnunf1Z1zRCE7F84mYsag1cj37u1JxF2Lr6pHRVvca7G8zd9gx",
  "key44": "2QU9f9juy8E4oZXcWq1zSNJcJZTmHnrFKNa2uJKdMWSXX9C6kwywWHjR6XBn81CLsY67kyFNb99mAdT6BdbnYKzw",
  "key45": "38EsAVfTpVEqoSCWCgMaWC6ugn8Eoe76CYrKZgSFM84ysYwwXEFnwmxDt2PAxSeMVbBUko5xhnFokxMhMdpXtDE9",
  "key46": "2HowiCdtwNVdtHrSh5PJ2XfPEQ5UR1exSE3R2ZYZkKNwEJt3sJ1QLGahZek8kuhnvzFgVWa6cpvg3NX45ksEmc6a",
  "key47": "43iZsJ156GkCUQx2whNuvqPwXs2vFgv4ErFRYFfrLeCyiUv5tkgJWRuXkXSn8mHiPnXFMT6mAXCfmuQBa8MdAEgj"
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
