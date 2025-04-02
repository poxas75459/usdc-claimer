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
    "3qnSTqGti7aeH5TiaJe5otksmhoz3e9ttnsJie374EnKXSUinWrfHKw5nZhfNUa1JJegmPJQF7mFt7vHPDJragCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GRKCYD7uZ4bKRbU4TxvP38L8iEQXoKU3JwqWsFxgacwsTsKLz4rHfqt92UQ8MfsR4MNqPHbC4kkiH1Y5fYr7SZ",
  "key1": "4PBkVzW96h89A2vbnxfn34JuNBjeaywAtVhrtvhKH3UAx3zRZA6iGJgrPZuTwYDJjR9CKk9UDqDvJ3eihPxVpMa7",
  "key2": "5aZajwp97ARv1rinByeMbLnxnYNjrCoW7WSJrmSbbVMcSBgea1oEU1W2N3izRmXTTXBRFYEFLitSedJrsL7wkBHC",
  "key3": "4sXX7stU8xiUMfTdSsdw43YXGbVntj1T4V4eYedVTZ6Az5E33Q3NnWmGbpJ9WXs9Tes94sT8Cv68UG65deYq1suV",
  "key4": "2QRufhyi4yq9J3Ut2ipuRVVmoiB55M4PiMV8YuN5oVxpun7MZQUrHf42W4PErUcUJBVNb6TKVKwYg9SUsLKoEPhZ",
  "key5": "5qN8i5jE7FwcGszoacrRBh1R8MrB6gwH9PV3z4XkPJbu2K1ty7kEKY6dxh3R9vK6pP4iV6pWGQ62sixZRr7mhoAm",
  "key6": "24mkNFptN5Edd9wfFfNe6SGnUDs5D21SzqDLi4Pyw8J53QcLMsb5U3xb6ZWmG7HKgF3quZ677jghDEmy1gu4fvKG",
  "key7": "2SYKKF3VrZWMBz8i7AEm5BhbGnwTZKfnaQMQRYXtzbAzeYZHnt2HV3pbrjZcFMhAsAs3hA5r9GCEkn7NrhYMDppu",
  "key8": "yCmV8M57Jbqn6UACsF4sPkryG4T7b6fC4pL3xacdcnHnrLvm2Uv2eWcvGjK16SoxvQ87599LwKyYY48CPa8i2U3",
  "key9": "3aaCpBPMYAkp1pdVufNLk3TimxmoZMycA68z33HAqTuoR4WBcZHM3m5y5WVLV7CpXZCUocFAo2vs994ek6ZEYfce",
  "key10": "qtqrZL9Z6ggDCUGdpfZsPuN3wBcNpRkaoY58x4x15v9g5KwKHt56SiGGNNCyrimxUo2RQKNE1wxPiwjL2zRM7B7",
  "key11": "47uuWMeUkR1N7JbEH3YYxUZubZogpttQsTHf99iUKWPf2Mw6DwJkjzNVVTxYZeriYDGxZgmpAkWyRjEdtHXSd8e8",
  "key12": "2NCYgkXJncMRmCuh9bNMHyA1EsDW5BtZp6eLr2K8T3ZLC1pvSWTn4wGXbsX223nHBJSFafXhZUC2JbPe5u7MXN2t",
  "key13": "3d72pwe3suhCfxaLeo32gcxmCRfTWtj7WzXhqieh82D4KrkVrx2RauMKegCoMHu7gr3RxXVPApeUEkY3Sw26bow9",
  "key14": "4Pj85Qv2tJydLgZw9LQVuCe5istPD6V6KCyh2tMDoeNphoFnyFJjwekkcm9jfomsHditXNNqeuiJ2xEb1UKrXXNT",
  "key15": "5DnL2QBaGmVdpbVTVZpxRDA7jJqMPW1RvzehE1JQRaUavmzjFnpvHwN2wQ1nvzhPEbPD1BgnMoocZtaEA67hWYaU",
  "key16": "3V3qisJuzGycTJDnRQDEyr8WkhZU3CWLRy4kEabmQkKHZ5osDNg31LRYnmdokNU8YgQ2a8mJAG5SYDhVgaL4ygsA",
  "key17": "3WcD6QZvuVD9cDjzvBJR1QBETEkRSF9Uf2QUX22JEDRwXLesEGVqHoqT7pDj7qqBuPTy4xVjWuex4fUFH9jmepSS",
  "key18": "5AXDWvbTHUKe1NLCz7j8Pzc7uFoLyPp3gjgMHHJDtksFs6Zc3ubBE9usEc4dCm47hnYFf6DsUoPR8HVJ8aZ8KjXq",
  "key19": "wW5yciysmgrxQCWcH3hCBQHmtcaHufc9UFG2XYFcBezx1VNUtLcQVCDjYnuLWpYV3rno45YwLvk6eG9W3ycCtrE",
  "key20": "5aJcYKZoh18T8ZcQWs4j48ivVDxyZTz2VTkXaMy7XxQrb6KycbUg443wmYjbgdyFE5SyRkTu7MXj7NkZokxkboTB",
  "key21": "4RXxx1pf5X8apoijfj2oqqrfWfB27DC4xtJf6fU8gp1XTHhZ1aEmsXo3XUGzXsb2YT1gG6osTcpfQmuSn82XvBeL",
  "key22": "4iKT9i28obre4dj1QcFgcnESVyJYoiqeFPbLkHr77dvF4vqHvZvSLEpmNarRLatGFvy7XDauhi44DAx7XCRQJTkc",
  "key23": "5CoTngF15pPc5qpBQnL4Eva4pQ7yjxaxxkc8DZriMx8j2pbAhtfgtcvVUELbbsu3wFj71eAP4aTDxWXTQ6UwtgVL",
  "key24": "2fVrLzgprWYTkvAPdkwLgh3ibeEq92wRYGtanLYX5zHN7pM6XzXjr5kfL2WLqPsjbV2em4jhweymarwrCm6yX1LG",
  "key25": "5YE42JaEuJmv24m9qw2ThNxEVEsWgbdyDabMtrujuWSiYoFipQrZWQssuFjgW7MVGAU3YD6kJU3T58YnwSDYjX3e",
  "key26": "2Yec9ekpsPhHWDBjTP2aubs5M8yhnQewyv2rVgJu8HmEHesFqkrAEDzvhW4uzSRJ139r7A5uTx5XKAyPhJDVh37m",
  "key27": "26NH759fpVVjGdhPvNK2BPVMe5F7KqozBT6b2PuarGvBtHdiwJPxXJnEVXTDXK9RaVgXBva7iBP5L643GwDHJd98",
  "key28": "hHUUWzgCNHpVctAY2YnrBNFo2MdB5zHUDWK48cmbQ56bWdLQZduvnFrcU6C8SSqambhYAe4HsSNaTJVGHdsTvcs",
  "key29": "2VEX5CFwDjUCveSWz6ihWY5dad2ZTeM1vbm1Fs14RziqJwDxJx5mAtc5FJh9yrUu4Dhjyud3C7XBqRuQUiRftDD7",
  "key30": "4WT7QiZ9HpQfuLU85PY7QvSjCJyRN6ixRVzAMngD44pq4HcGB3RXtBWtqxVGvvyLNdy6qpb5J7X2bHr9Lhmy8zzi",
  "key31": "5vidqZ4V38yDZq6VXhToWPWouvAxGfP3gLfa68afMDy4K3ewwrZYWahyEwDGX9KSuKe9xYKGBLFECyrvB928h2k3",
  "key32": "33nRSSnaU5hWWEGWV5W2i1craoXDGPmfGPTB7oYwdDd7DcZRkJNok2WVBzUg5uanEvi43HZpAWhHvsn2G1UFyveA",
  "key33": "znA22hAecyT4b1yZCJDtebhZg67Wy8pYj6X77wz34cjX19H1Ktu8GntcitLKZpmkiwExpARvnREnbozEWSEvQx6",
  "key34": "2wjqudQUBKJsHJEoVahHgaajHFFMcA5JoSGFTnY9FcY6LyZj46R6Ze6YrTB5cLETiijwjXuZTcfqQCxxB62HVPtG",
  "key35": "4SeNU2ZyAnicgYRD3eTV6RBGHtY976pVZLsmNTjRmqkCRXdBXFNeovZUtkBGtZkzVNdscLVvjordpV9qYRaCVhoR",
  "key36": "4H2VpATYdZbtb819sb2XkH99Ey3y573hPVf8pKQERBxZR4YfxJw6Fw7pmRJBY4fMZM7BTeMbsEKyjQHciWGFZcRt",
  "key37": "VFg5eQcABDxRY44TxXqREHNQwiw8CVjNyDnowdrP3umjdGYiu4NFeS4vsUrDZsRJT47UUtPr3zdhmTLa4ZQ8S7J",
  "key38": "s2XDH55yJa74TZ2qQbBrP7cvxZmT9K5AWHxnCcNfsh1hPDdLmoSBCuiB6xrcJiQ1MMKWsoxX6TyEyW1yeUF4K9j",
  "key39": "XxRnrgHmcspkLbEqQfjumTt96GQGuFi7m4Bm4q5Mp2GvCa42AsULdbuyNKaMbVeY4DArtjwCbUgNAVzLyMLEXng",
  "key40": "3d2bvNtDG9r8pZN45922Hab7nqKvcptGFQfMxDBamNw1ffwRcuStb5bFxpTc8ZKWzBavPwHxqoiurhsYsbCjsymg",
  "key41": "4LzVsNtMYMXqQEg5Sh6dRKrz2cGgMtndKA2f1WWBcECwcJnhaCxWEq7SHFFMppnVhwutkyZAebhdR2e7shy9e8n4",
  "key42": "2x7PD3vz2vAACrG4PC18Fsibebi5HXh6uFiTcHw12wVnCmXG4tQNAkroHC2ynNaCoh2dkExXtYoA1hByvJoL4Cki",
  "key43": "2x2eZGX4iZnXcTTjsLMqJ2fHwkWUL77uScQeSyYrNsuSfg5dwcty9oEnSed4yq6wUUbdwP12aojNyUaCFPQ8DZXT",
  "key44": "2WRUdeb6Li8SeYqhmtSiY8fm5xvRLbnii1T4LHNdtoQvb2qUYDNNeScKCc28uSXw32QiZGhdtv9dJvgACXu79KxJ",
  "key45": "2nr1NKyC7Gqs9doAXuoK6GpBJR1w7NDTAues9d1JkvRB47PCmKaB9hR2HcreS5JqnP5ddg6XYhzkifTCR9mBfYba",
  "key46": "3MB6zmZtfyYMVzRHUgqyPcobHXLGKBFKT4PtcrYzmv3hp2a41yeKtyvirNycz1TPpJX8PrHyySxPbEGTevhyPawS",
  "key47": "5EE8V8VhDmWTHLb77kQbEJm3QJUDH3UcGXV9hJAzhhbEf5Pt9wePPeSRhNMu5rynRNAkZuxEdUhAJGLWuBFFARka",
  "key48": "3VsRtJaMaeG1FQqi2fe3Wx9jsd8wKT85cRTCza1TbU21nrnkaQxEE7r7TspUL41QXhXxmzjW9eGK3NqVgz74zjBG",
  "key49": "5n9kuyLL4L1crtUdP8N7HRN2LjpS6ooP2S9t7Q8XRdJPH6x4KtpJpvFaVrNyaXjSc5mqgx5dyQ57ZK4hF7fa6VHM"
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
