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
    "4Q2JumT4CioczTjccFPRyZemgUPdHQ492XY3ofWmmUZoKBiTvQ7nrP4SZjwiLNDBoAdDeLE2vK4ckLjcPcpVToKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qz76rLV8yT5jYpVu3dsRhCwhmgMPPXP3XziV6zht7MdJQ6gqVrMhiVFkcAhbaAT8cJJ4H1dBn46aEtQrCjcWi6Q",
  "key1": "5k6pZLPKkr7jmQmLXR3GYTd6eURV5PNEy6BHWqv57BBW8btN3C7vyXWxfsEwQcqR6WCK62D2CdwWRW38w6dY2rqD",
  "key2": "58Jph9Sm8BSeHCg3tTQDkReVE5quAtU4GiX4E1o1wKJ2uDofMKsgxs37r1VzitdQ6fs9zLVcdrNoVYcmcVp1Jpmz",
  "key3": "4uP5QFUHR5ZHDcYf3giNT8KAVN6ySGHzRqouvLwG7dR7Z3W5efWRfwWSq4gm9YiesH59GiCanR1GrNdqQ64j1VGG",
  "key4": "oXZhQp98d6tYVZxemnAEAXAtSipKr5y2AiDHGHcadE7DL582fv9PHBFg7SkrRx2ca83qFpVsoRvvGGMPGjo7xBx",
  "key5": "2gX2NsE8dPabA43ntDdeFjkPnXxJzhsh2DxD1KhNnrX7Sq3Q72XFnrRwafrnupyS974dUayg2HetLTR9D13bU5mb",
  "key6": "2wqiEN3W2jWSJngi5eBzEPn4qtbtcnwdKEWh5jWB4Ho4amzaexmL9obRdLYgiJG8DVXa7WyjgRVx1aUcvoJNRAqS",
  "key7": "5hcUfhETgroPNx6A12erE1gr1EYFG15VMHmCVRLndW5sG4pkbRmASGJGpAeyx1p7u7AFhSVjrTCNVfS227HJcVei",
  "key8": "5BsLSSwH9pnDd8vPtWGuKkrEBnPtdmnj1181FvxLTXKAZRoAQPt2XwWq36eQaxmBx7X1XmTHU6gzPu1zmTQiTcNj",
  "key9": "4VCy9LsAicVLbTgyvoEP4FoWiEbQ9kfRHMZ5H8MekUuDQQYfsRciWKoNm53MWb6gprcgG2TBJ8W2zSTLM1KmL6Nk",
  "key10": "5en4hke2qh7uyVTSxCuAU51p7qGYV2QGgUgzmkE56v2Z43mmdvwwXQ1xqLC4UHnSirpMzgAp56hwxu4czZ69myHq",
  "key11": "5n4VS4U7E7QfejAe7K4MmbkvBwtxxr5c6BPXduWi3XbBtq3FjLVH9LiPh7JotURB9xmfsJNDbUu4V57id4BQTxR9",
  "key12": "Wrgnh9biHdQBqjrpcYpnLZWk1G9kBaCroEd8LwEE986jfwrgb4zQjrs35cES95qtqECQPLKdHaa5tJMMorqiYZR",
  "key13": "5K5g9vCH8ZKqYnjGMbErsvjTrrXZKjj6Z9CE54iougANFTwHxWGiuZYdk7Us2XQU2CcJ189M3GxCXccgjYV31DNn",
  "key14": "4TfXPdrEc2EqBjGsBhbBRSuMqxSiNJGZMQkVRt8zMNVV7KV6acYzEaopTVX1HcWCSbLpM6j5zx9RUdCYbbi5MDDK",
  "key15": "5StkdaUdbbEf6h3EtB5VpBvnkGJxqD7UXzaVJnq3R1zu4cYv97X3shT74VG8HMW2kbc8pLaQqfHK4o4o53NggJJ7",
  "key16": "fvEKbVf28an1jUeXoMT57hzRLhGQgiwVBkTEFAofgnKdMkwXrV4LCxKybDaEpR7LsrPVd4gSWLCwDTozPtEZcFz",
  "key17": "2N2nFRtKFPdRiQ5vDwTUzebHHBf1ugpPFSFprSTtiA2jfGwGByAHY2JqAy76L62smtkkTsWK173FZfStEaQLwBPp",
  "key18": "5rFXPMun16XkJjVZoWqEZMzpzQPqWjTm1juFmzPD3f5a5kQVw5Dw34r2PzHTguvPb17gUApTqXP8WSNMPxnbps6w",
  "key19": "3s2DVHp9abefFAF92Jkq1koN7PvpsoKG6yamJwXYN7fvnQ6kjTXFKvzQqENxGzqQhNCeu3EbTHttcLfmeqdMbWTf",
  "key20": "4uQvfYqf7sR565hxgrAZQXksphMvGFzoC2b9JHrHFDurp2PF7ePCbaLRYcBD3sdbue1YDZLv9VLygcxSbkYJ7qcR",
  "key21": "4Jbo5Pfm4pSwNqGrG58LnfdRt9a6RH5KgvzxjZZwq6fUoytn1ojegyuK1v8iDREiRPWAmSatczSnWB6ZQPQSJ9iL",
  "key22": "3zDkbAdzQX3ZZX1q11nbFcdiRYfpf1ZPq66Zw1FuCtpyAmw5ZPjEYazpuB7Hv3zrNTTZZkJS4YKbvUto6U5eU3kS",
  "key23": "4gJzeKYRsamd6aNwAmZkLF6Q23Pevw5u6RLvTZ24nLKhyHPoF9TKQS4jnQqsJfPvQvvCckiyqYaGTQtL1gACmEBV",
  "key24": "2qqXZregB5UkeWzzXrW1BupJMiya2qG9uNayCr7rBfnMYvZbaRyoxeDVzdWf6SY9SWDyHS61cqPYVZeW8jxzWrxD",
  "key25": "4Qg4CBVbanJwR1jxa41gnrkEi2cTmdFQXARgF4eVDh3xZzKNuUR243ZVrwPZ8Qg7hPaSti7KKiwRCSaQrdEKVMdx",
  "key26": "DLNrxXhNVHNSFmxU2PNPRxgFhR3eaLquu4dA6d1qEjftKAPX7dk7tNxcg8iZUFZLkzkon7iMWb38tNBX9wi3ERL",
  "key27": "3Eyx4AJtZmauEnpHGuXyEbPH8EbutauynARZqdWQNEFpjg1b9zBaJNYuVRhn98YgR1U2en15h82cZaRTPTwGWB7B",
  "key28": "2vmgywrCKmwCosdFnH4bJ4HsrfjYtnUVihrD6Er6RpXQAViG1KNVU9VadAE9rFu2eohqJDRjDLcsYjbJYd3jUEeD",
  "key29": "2NEkFBfWsqBUueB7bRUQEwkFsYeDdDexmzU391ifC7y8gXQy4bo5SGcupEmPXaGFJ3xQ3aDY86JpxVRS29TNUBzC",
  "key30": "3rJT6DegJeWkrzYUdjik8Horpmv9BaNiPNEtmwyFJWdfpGivjnRFVkQdaBtPEAokEJ4nesFmoSJfzoSiEC5p8XnW",
  "key31": "21vUdWzUj9KsTQtqFFYq2oMP46s8ByWkoWXn5TzDLtCqc23to8CzH4kY2QFZf8SSP8Re6XEXmMXPTjDyivXyfwPV",
  "key32": "2SAQwq9c1nMEEqVFYVDb9JTMVCDGEy3WJ8kJxV4K4SzfC6HQ5vbQdNpijzPMxBEB9ZqQqhiZe1UzoaMFzt6khyDQ",
  "key33": "SZXmfPngVJLy1x2SCq3vwmAV9gG3Jmi6VrRUfCU4QUBABxEvUjAk3usWZs5j4JFu9oaHGzGSfDC4eXhGaHePhhC",
  "key34": "2aDwdojvimYtoqJP39AcJJ5qjD3voLge2AvuCPYtErF3jbd1PJ4T3N1Wm5tKsosrTagszjM9GBVLFUP1nCpepnA",
  "key35": "4rxFRi3BKuvCuzKFvjN45Mesb6gLkc5p2M5ZZtaMvk6gb2wWJomhKM2657szU4SPojsvPjfWgtMgPhqLdhBY9zy3",
  "key36": "4tn44jWbmuvDEA2XwYXzbvXa7Ch3rwoBSCD53hB6upRd1rmD7cAnCMHMT88rQWk9hEBp3btz3Go4gRUz2AP95BH9",
  "key37": "2mhLBzo5Ru5ChEj5apov9pZ4APk2XPxXBF8tUUAVfKpHDVJDp3ziq3DML3arqyu3HZRHdtz762te4Lv3L8TkM7td",
  "key38": "2wE6rMVttmNvkpGAm32QFhzT284bL9PsT7v5NUXFewPXQhDwAPwF6EHhPQ34t8hqqPEWP4xvb8sGc94rE4XjwoxQ",
  "key39": "48UkDMnG1juAPj3ZzYiWgU3TG2XPZSPDnAQH4VSGa8w5kcVcauzvv7govzV2rHFNdTGScccZ88Qh6oDPb2avGaKK",
  "key40": "5SJkoRU7wgH3cCtenELUXhaVgvNr6bV5UjCWLGVCP7T2UWHy24vsXZ9fstHBtCK9d15ALaXZoCP8KwM351rykj13",
  "key41": "UwQ8GjZBWzQ81cM3BWrjgAUpdRVKZJbZyGuq111CNKhw97hVTpN8bSoAQZgWMboDfeheBEDWkpkEagzjQhmBgmi",
  "key42": "bGu1yym3pHkNjTJH56k1v9QAZMfWjTnkU1gssEentVCjXQNKwZxorfQW1BTuLezJs9hqZLnUSADJ1kvrQHBhpbu",
  "key43": "KWjN7sk39DmAxoDj8zvRRsqjqCggPgqjvEBHj3z3ac1rL1e6SEr9XnUpXRdYzN38WeCHqmkuGRtxbZsfxZeA9Ef"
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
