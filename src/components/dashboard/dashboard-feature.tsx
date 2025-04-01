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
    "5u1y1X2MzJUxfVvk2gDTu8c7HpnU4S1q4ddTauYewfjtBDTjXoTR3q6bUvxvJ1rp3d5Sw98enws4wsrfMdH74tzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mi1UqTrYVBBCAoUNetTSZiu1sThc3Nx8ARB9vzZtscAUTkVKJF7A1aBRow5FsVLMnwsGiVPvHRyRWD51P54jzRr",
  "key1": "44xMppD6bQ5J99Mq6xXyvitnWDTf5Jti8udMJXYYgrHogYMYYtPtiSVHmCLLF2NmWYCN9Cok9PzM3BtznbLqGY8X",
  "key2": "5hnxvCFis2QUhb2Y9myJ8G4yK7ZQj8QfoRbhNtrXZEB59gGe3qf5NVsj4awDwqLFi2thM7qA5RqSRjUNTimrPpNu",
  "key3": "5J4RPWd5XmhAJ91DUxZ2WBuPS4YzUx4VmuhSagj7m1cLowzW2xsLU2mpVMjZtaY1J3PuRcXryCTwkrbCMv4s5NUr",
  "key4": "Zs9egfeFpcgqKbYTNV2E87YNBSha4nmgFMXLNe6UXNU1ekSZsjJ79uGnk1N9ttQVym1Jwj45UuKdco16pUNwv4T",
  "key5": "5hjMaFaJnG9KTuRrpSTkukD5PZd81VQY85G45C99X1R4a9L5pkrxVyce2pD5MH5ETwX9t4LHigB8zGPRBpJZSq9j",
  "key6": "4cmcx8Sv1bsXAaRNHCeL3jBWJbTC7LK5JsSwkzfhfs6pwnP9wAES6YZP2SSMCJ1anVcPxxYJAiupc3H7znYThozT",
  "key7": "39bcpt5GsRYs6Rsd2cDJoiofZuHUzP2nqMBivVRTPZMoNJLWiZcX2RbrNJb1rvPEvWK9z9ZRfGo6WehyJgaMZD6s",
  "key8": "28hiDz6U22de1tUp4JtQkUh6vcnJVSuYJoRmh3XncVxK7QNu19xs7R6khWuez9iA47kXCEWsU5k3Tsbex44W95ai",
  "key9": "2FLj7bMKrpyHp5aFEhYPX6aWYZYJjw9ofWM5zv4ah1yRjZHcYQd55aKcZaNz9WRnTnjebg4BhZMnoWf7dvkSYsoz",
  "key10": "5sH3LPzV3hfxBaNRzzGCNkAgWgfZ6DPx49Rf7vtffr2mKJkaK3XTm9gdhfgw9cJra2pmmyYEbTzK7ZPnYT9di2Kp",
  "key11": "tBKca5VXkAZZ3pa5kBJUbVw83wA25kD3WVZgwRxh5LJK4b3jaQBDo9jhtZyoq831CakiTbdDg2K37Yfvioz9xbg",
  "key12": "4JRtkWboXzN5KhPvTCkk5SKJsZiaQPqFnAaYQC33hUWdexoSMRgYBAuQWuMACgnbZgQcgntjzcnpm5jcJwq7mREE",
  "key13": "32ZkTnJC7iV3gbPzFQfLHkEL2xEvqrGL9Ro8h9XvscGkoErRNcZzY3ZyC8EbvQThfxxSyytrMMmHzDAoTVc6WDdg",
  "key14": "4PuM696mt5tU2ijmXyB9RHbcJ8AHNCBCCsM8cYBVLDyz8Sv5cJVxSLQksdr57qY641f3Z9GdvwmHHFMSZjDJztxC",
  "key15": "qLD3AQd3jKV9E7BrXVHZqNfC9H24BpujzNHUJ37HhFZHXAQNzXsHwkGPM7zgVV8TKB6PFjFHsX6wGRkuQBML9aa",
  "key16": "4CbFbxjdwMJpKWyN51Bga49H8YnLqS9oPvidp94WyFxehE39cB5GmFD1ZrdkFKFh3k24mXCEBoyaZ8Yqtg4iCWZU",
  "key17": "xYdonRjPXLgLop8ANhurBWzSqE9ZUzdKAmkMSHetKeTksYKoBFE2qWc8gf4XDJzYxhupaKcn2UzWVwJdLvDgS8d",
  "key18": "4tZLZL71Lutrsqgn81tWTrrxTQFcVhWRv6jhJqXAjtNYYAamHCBZLjgwXYb9jZUeLa9ea7vngBX3JU8nncxnbpUd",
  "key19": "4RJdSU6BPLpvoMbVdcXCtTGMtwVKF2B6AVA2nGigvbmHTK8zZ32L1UWr59Tq29F4uA9BPaipXzujPywdTzW2nQuX",
  "key20": "4yxHhDQptnciR5h1NiN5VZSfLN151PLNginZ2rUiL4wymnWbwJD5kUnDJGsHtmT9SmVgiQH2pz7v4B8ckaNUPzXK",
  "key21": "64NohCvZcg7NdnJSipMGGXb5D5FaSaq6EvUcpd4xWyqF36uNkd49oBQ4Ycs7WDY23Wwaku2NuBx2JPFLCm9M9MTR",
  "key22": "YW9onb6NLiBKf6ZJ25BMTD7jrtWzTokkJCs15kemn3D3Eg4fu9WeVncfujeHiNbZdhKQxe9uN4KUCLBHrsXnpcY",
  "key23": "7ehNNgsTJdvEkJesehGFwVxkkhptivgkxcKAyBMx4fHL1bJPxibf6SCK8SqE3z3umgE5y4o2JAK1UAEkXwjbrJX",
  "key24": "5vuzVQ2TsQtk7xhMXnPoNnhQ8TMfGK9z2koG4uBHgbMp8PBgwjGbuy3nHTmVwjvgRMPZSUTkzNQe48oCY11PMu4Z",
  "key25": "5xWEnxxwH8ytX7Y9jEXaYetB5bRkcwp6qbFSQv6ZD5covb9SdzDQ5Fxpvoq7iTuwPDUyX5ix9p7vkKudVhXjGWzL",
  "key26": "2MqpkYF1xAXB5hTmVvJG4wece96Y2xUa3ThxLqUqJWkEWJeab4Dft9BTKnUFQzKUYJdTzRmkYg9b1Bg3jLm7z91G",
  "key27": "3fthCBA6V4SgJKHejbF3MZaPMynEwCrnffPoan2bWE2E4SvtVxvUH62WCdmPyuAwrYYGqv6h5KdBK5nAk25ZRdS7",
  "key28": "3nMsaLpmJ2G7JbHXoZjgNjp3LnnGwrgrzmkdNunzMZwoZdn6gkuPdqoZZiR1ZRvREf8aCEAYYFJYsrsyiGFEP2ea",
  "key29": "aLbciQhRzAozUUP7keZTQUQWK25u2SEN83WDPe3QWAfsWjZ4mQ2DtzWYHsZmiWPphC45gEWuv2PUZYc41cvGaHq",
  "key30": "3knKKKj6BsAWD98YGTpN2hmdbQ87tjf6SXek8ha2GSk2oXpQG8Qjkee3St5geE52gNfg9UrgqpZgNHnAx65aC2Lb",
  "key31": "7wMw9hVwKb997pspBmWsTyi5fJGauERbm8vFEmrvQYnxGj18TqWEmSunBEGi5pCuSzuoStQmVt4h53Tx64Xhrcd",
  "key32": "iSzJngomfCs1WfaexEcHwnBdpew7VNQDJrcDJzPCrYagjVmDAymsn5AVezN5s8yUfUfS2VMSKFkqCYpyPtUdwdC",
  "key33": "2Jwo1dhCjuXwGz9HD6vf9UCrayvRWcsDdTLcwGXLXTfRP3seUanssbgCoMGsXHVtEvh5n7L5A1ctytd2DkX1dirx",
  "key34": "59sQSaxhLp9PMhPmXfPakPinq9FxrKfikd35p53qQ2HD62pm2vRQzEXso6fZ9ufMmYPaKcb32fvjEE7vBQVrgR2q",
  "key35": "2S598ZgLubndD5tQi1H4p2W8BGYE1HFJr8a1N2wJyYGQnLNwXPYdnhadM4cMRWXKhPbBbveyGx1iJ2N8KxVNm15k",
  "key36": "2NmM36YJxBXXyaDSv3hDcbspV5d6wh7H3jn1t36RCXqdDpx9YkjwYYRFmeqVMDRHQTUSEoLctuabMKCWo5iNJB6n",
  "key37": "cTL64xXhVh1VYJTT9HwoADjgWNdJoFevACHikGYBEco1zgTsdMBvfr7r7a4N3yHnx4MQYrhvWtEjt4DHTd6aJxS",
  "key38": "A6RWDq3fjLQuEbobamrt64ww2NymauhMd7VdFpGNLFCSa5EquegttQDqxDKtDmVGMWWj6GHqCAk6S8JdejmX5t2",
  "key39": "2VdwuEYnkyKoWQPnB9gbLxKuKfRKTM7RZtQ9mKr9ni7sz9FFXPtN4MDLdz14pgU9qqTmDFy6LZfHpTSiWaLjJp4a",
  "key40": "4HnLZ94Q1U8hddh5ieiKC1MT8GJNUKaJu3GTpQdek17W18gTdfmsnBNwACUUsb6PX2YdamboaehEDvqt8PXdyceg",
  "key41": "4N1BrqwFJms62MRKAv2sR969ASpspq8piYvxqccMPMdgpCSo3Udb7g8sn8TeZQtUpRDpGoUc9GBZWA5M7Gwt4dbt",
  "key42": "5RwVjgdszyvZjTGMGxEo7uKVEhuc8VXBim6EgdXLAdkqAqFjFeoC9cQPqqhBUvhCnnrzHJatyaLXNrSXS5NUmBCn",
  "key43": "428baENLbcGbQmcNY7hT8TvE71N1pDbnxrGFQWKfvJ444R1xsbnvMZadriciFDpkWNQnysKFBQVwC2znxRbg2Rpv",
  "key44": "2F7GBX46YdAPko6A2JJJfo9FMCfpR1m7ieF3FcaVcuTxS7PkSwjsZokoEQgwKi4vf5HdWFQLbWX7uCCvW2JCda3N",
  "key45": "zpjAcqABdErjBKGauSQ1FXTSeaT8SydCWEdRMGYCe9DmwRg2MzTvtRVyM1GS4L3npjESNp4w3WxfEmYjzVq7115",
  "key46": "4kyDmrAuwnJY9secJaEeAcwS7hUx464c5kPpNP68DziE26V4o4P5C2G2M1g731aLEfwKmw7YYtKtUvJiNM3SyKPG",
  "key47": "1CPuDirmC7ZSdaxMzVw3Xh93RE5K6Ev8JN2j3SuZ6bZH1Xzb31sQnFRtqRXkqf9ic2rahYMUhj8HoZZMiEA6BnJ"
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
