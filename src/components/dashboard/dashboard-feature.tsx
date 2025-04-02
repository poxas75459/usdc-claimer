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
    "613ruHYjKa1K3LgLtXxAErVXGBerLo8wiELtQWPKtqVqPLrarbEyeqbh8ZJQaqkub3qc5mvBcYa4VcRYS8kFSSwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWe2xy3T2pjbw4EB3UAh7ZjpuTCxYeP2yghNE6eRMbJspoLzXHukfxAi4cefkjLHUtxSPY3vVKvMd3USPox4nG9",
  "key1": "ob9P4gmjbeHRLJSrpX5acsZiZhAFLwE39FewVcLJvJXK2oxz9SyhrScLtvNA8yZ591UsghRxaG6sq51H1a3Qibi",
  "key2": "51hxBU8KKHYDLLz9BF8Bm43WtCF6R6vVpwzX6WsuJh4vM2NptHnmDFzsEBuhvHvxyvLxwRtoVyaAEvcYpCuCHRWn",
  "key3": "4uT8sByhEs1N1fWpsAFA1zQMeZetzLiAwMvz44T5FQTBntb9dMNgJCYs7xiSQXvsGdy9ZquwMQQ3S2q3pLPbMmgK",
  "key4": "3PhQ7u7FBZ94jZCVC9NX2RLg3rM7Z5WbbQAv59xS9JwdaNjAVwpAkVD9wJ7vYxLcfENs7xDknc3gq7UisbtrkJNu",
  "key5": "YSj1gtMcE77aLZJhKWkvLEtChaVjoWyrWgozeHfWYAjeiVBpuxJH2i8kFHpv9VuWFBUyReTwzVgmw9qSiUjzH75",
  "key6": "4Jdyxn53kxp3kMomwgkjkG6c6u8K36pxa7DcWh4xzrcEXSJzgu6XncSxKeZFtpFpNHZ91LC55UFivnMCgHMRhfN1",
  "key7": "4pTKZEP2xGASweh1gT8wJQy5eR3AdpYY3GAmGn1qHEFzyMTWt5s9c31GX34aRnw5qjF9kaAq8JUVZ98MibbngCYo",
  "key8": "5PFgvidoNkv32UK8FXx522CqUkKNcCNHmbZP2msfnZgw49Xrbj6rWHF3w48oh2uMYQ3ZCrvHFM3Wfy3HvdxcnHYD",
  "key9": "5ccGv86R6Fjdw3pzUwWnPpjkc8XvJChbLSYxWDHwLELF77G6x52D4sZTrJ9ayBRwshQEg657fq3EZnUmPdw6fZWJ",
  "key10": "2z56PMxFzNVsABUQzWtL34gvTqS9F7WFr5YwcZ7FBFsWBZcwc9Y8qE7UyeAwxzgjWJPbipmJSDS1dUUJscBkM9Fc",
  "key11": "47K7psxtLXLU4FbCnfGkaLJqtBhPeZyRrXWTpmjpniYKNJJEQziqeK33EdhbRJ1hNmsNXN1gyETZr6A2ZDnhqKgS",
  "key12": "616t13ShXMXwzo6DTiTZnrpvDYDgXDqoXScDGfdSSQxDVA8WRfqTpivPePg9C8mwXTq8xvGE3ofUfWo6PUcuDz1g",
  "key13": "3vayAUFAt2q1iWApUqJaLMnoYg8Tc7FsEG4wWY2zYJ8PwNNUqH7bst8ioUFoALwRxgwcL1LpVUsrtQXMgaFd4KtA",
  "key14": "41SZZZaBnAW6s6mDMMQC49wSPA6EPgmge4yZGx4CLypTgSHB5BEHCpSLhRoLSH5gU6sxQaxEfTjX4FP6S5w4DLiS",
  "key15": "3USmzfCqwGFXZ5TFypJZhvj4a64KuvzGt7AMwkyafxULUSpyUa1dYfSszr6UAwdUYyG8NxE4eskjpjY1CqksnshT",
  "key16": "2Y1XKMeZBT3BEJ66PEJx6fg51URo13TbgkyMGyzST5HY5st7guusXahryic8xPQeCbiEitDBZ9r9m38KVqko2M97",
  "key17": "nz4fn2RcdZx2LzgX4pmuSGG67f1HJRTZihtjiZj9YhQNt6YLCQnrRrU1cvNgoWrAgx7dndstustLR5EqdEemz7e",
  "key18": "3Kt4a34YhziDLa3EGBcEaczgfPNK7hYTKNQNbH9TEoWn7GpzNzzdFu4WPTNofvBQYKzfHHfRNXe9X9YAvaERqCRB",
  "key19": "3495W4prNjG3hNahwGRLY6Tx3yUtGJvfnSGC5bx4sBCHSoWHupE9dTSioQkXwb7Zt7H9MHaZ8B5KTmzeAxvPizLg",
  "key20": "5NCGtN5XBcbY5Gd7un8oysKZeno5AiZxW9dowCqxgUa55pHoDXdyo1RXcmRQaqAGDRnNan2GmqkJTxhP4jdqnYMQ",
  "key21": "t32mDGorqGj1nAZVqzFPTdSezjHzpfXenNFgcWwcYj7HzbQX7hVJcqL7AQQpagWbsFsRFqBV6bbj1R9kvAWt8if",
  "key22": "3QBf9vjMUhNmEHwCsddqB4X8gEyfXfsjbQ5ay5D9bHFNNqpmHr5uE4Cj7bLrky7QCBxWzKKWLnfEDT8i4k1ZmNpB",
  "key23": "3nBeA6FUgi28RYDcMdiXqSGeyWnLL7qQPhM99wTKm4jYrj2NThEDNUuqXnETdE5E3qpJGygGDYteos4aAraUGRY",
  "key24": "wLnpV9vPibfMuaEaSM8okpYwPGe1Tn6vyKV2y9S9VHgvmqXEhrEpAcQD5NfEEHBdi91xqPVNZaTrKFbcDrpu7St",
  "key25": "2WXgNsobVaifyGA1Cmg8Duyd2aaB8toKvAtMQYkjR2GtSwrv6xNCWEDvBb9suxs1vgPBeXSHHUgQpMHare8Cpy36",
  "key26": "4Eq6xSooXK2vjY4uqCtvCX9TGx3q6dLTZff1Kc6SoBnFZ7BNwXtBMnrqiShHsx3EkcR2WKvKHoLdHTauFceDuLWX",
  "key27": "2wHXQZTfsMThfkFmnncbf728zH6pF1pgctarxJRcCSqhpjMZEM8yJ8amvXwjf3jses6Fnp4FKUh4a1Kn3M1atbUB",
  "key28": "vBg71W6zyDJPtgE7SvrhXFH5cKKrHUfUU4jTaDBXWwfBucDBhY5u2xrB1shPTwZouP9pkJZASLNBcaDkqxv3WJY",
  "key29": "58uE99Lbc9Z83MR2XKK8h1RqzXugFPPnUrovJPf4xymyZWJmtwbfctrrTL9ZnWihUZKc1fVXreEEB6o1ffWst1Z3",
  "key30": "DDrph4fKwmmcVcurwZnG8MH3RpWjQPr6S5Xsu4XjEB2SufpBWN84Jyk3YZx6PmBqhd8QD5M47UdvUfHdqbE4Hnh",
  "key31": "3toT2b61m38EJCaiRw4SehtbH9Jbhdu9kB6J3sXzB92qfq9HY8WbVPzbuV9hLAjfYUHggTQoadsM5ExsgwVZEiAD",
  "key32": "2MXKB9D1rqhX5ode95tB9MaEdkrzJCaZbrsLctjsK7kyc6RK7WV7foA71EDUka9STvYPVMTugT8GFDPUt4tF3rg",
  "key33": "3FXTzi5bvLhfsvz5HcmjAXTfQeuyxFZd2T1PNSw6MK94yr7omhRb7HG5WhcBqXP3htrGRdjmCzhhwgSYkEwtp8WP",
  "key34": "4nPj8im4B35b3H5WFbf63sFvPExvZkcHAvZH5FJtJo8i3b28A7HtZSQxDVxFRDE2kjy4qKPZJwZA7cz5whDygqSp",
  "key35": "7XboNMqTp5qx5H5gnEUmV5hhkA13xxo19ALBvWtQZqmGJDwgkjNhkmd4zt2Gc9UxUCCrJ4vFw3cPuL83ReGZ2m9",
  "key36": "2ZuGaSMKnuaGgGfQsUvjvZGpMhTQx17vqcgq2q5N47stAGrJyd6buo3ECH2oHyxQ2apWqXfbp3zRtf5VzkszSxaT",
  "key37": "2VqoAt3rNLZgC1dm4Ujyzv1NjAPMBRw2mrduyxryQF78Kb3va9fYHDrimVW1YNSGPw2xkjSm4EccpShqH5BjR6yB",
  "key38": "5Xn8Thq9KQHYn2HJF8rVZhcZjRNqqaCM4HHgmijcMQhxfjBc5xu6hzxTMk9EEDLe9x16ZAasj7xn4cncWbgTFJm1",
  "key39": "2eHtmC7p7UeSZE1jwHwWojtN8djJ8QzrCuWLajiqaMbNhFCW9WDg2qyqGu7wehKSNckMM6as6C1fqb4g6GrWuRnk",
  "key40": "2fWcnDgoLwuKFyVxNZvRqD5vNunPeKWHF5z4ytDsJqoseZhMhWToxJraU7MT1SdobcP7DbgX2eBkSFes62hGkUvV",
  "key41": "54gnir7w3mZvjBneRq2hu2Mi5xAhhPfq44p47LApz53H9YEZgQvVAWgYBkmpgk2rfCe6w7LGc4nC2gZtWjeLFbmR",
  "key42": "2hMduvVHUvutX1RNbosKa7kCjPMa8PuAncyzfzvYgkK4sNExZKaNL8gbDVbHF9YXP3M6jmFXm4AMVTwbeGq5aYsR",
  "key43": "4xwXsGoNtBFWDC9HuZDCZNhav8KwS3j1crswyicvrDko3VpZMqFofuaf6acWGm59YuupbseQMfVLunP6rCEz3nnq",
  "key44": "5dkjLiFZMk4p32cjpXQbezM32WMGLpSLHeQLUTxxHJg6dnEJ69nEFqbHtZXaDDzxg4NzpEBwb4E3AxDRqxa618ic",
  "key45": "5JWioazTxtguiAGXJ82rccw2SzeDjSp51iq3VXSb3ecwJguusH98b4ZnCqdKr2vauzM6L9ksQLbG7zTsZmquVsF5"
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
