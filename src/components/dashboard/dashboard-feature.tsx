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
    "4GbpikURW94VJdZ1HK9yNPjsyE8NTeE8HpT5KqufWo3TBE39zot6yCF9scMScCcLuvUQS4cmvMV8EoGpJbXfGw65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v34cNWkWumFnyNWeCQ5cimmmmMXW9W6PZCKVUCmajCRfvYni4ULp6iASUdmne7YbRDMWMw455JWQH3Ad6Cnb4uf",
  "key1": "YnJojWrLGqqXWtZ73qXJU8cELtG1dCeLuawnmJyPv9gd8tD7YeR2RXkSQfkKj27F35Jpn7HyZoS3JQQTtCsTfAN",
  "key2": "3QYHVP9w3rXckiucNv7o8MsrJpHNck8pUuQm3bXmPRuAuAzeKyEx4DavYV8irvbzRAt9SRMFng8iJTgrJ7J9JBuY",
  "key3": "ZHfb3zPteqpQCnrTs1AKdjT2XfRrYHrZbviVxngxHe2oFtVJTHofDQu1nC57T3j4s2bJ4kJNe2JcsL9XdQ4rhPj",
  "key4": "5xAb3sqkUX1H8DWLdKhwE8B35nW8PxhDuKYhBD9K8X8Xm2N562yXTrTZNU3GtSbeYkJwrtbHGSPpWVKYVx9QWFJ1",
  "key5": "53xxy5X7hFbpWboQNwkjZ7tsf3ypKbxgU1E3kaAtGStdBZMXuTN4ShRdVpq1SB2vQUeSjvBh1cMwue5TSguurLzv",
  "key6": "bDzXbqAHFXtYx6zM6yfbMPaqy65oSzbnPxnxnYnmhYn9B6L3RyHfp9PkFf3WcGbU8nLmixTFbp1UxAVUfaKqRZ5",
  "key7": "46c2AzuzSeWFMep4YsgquUX5HC3pqzXkiGLAKKpKArEkYhDc7dgXvavTXsVnzp1PRGeRR2KEgpSt7F3usZ4dzeSM",
  "key8": "2qAD6WkGzJ4MFBHQMTe1npkZydzQw4Md5kbm1Gy4irgRkhqk2NP2EhgfqYXKwbJMydhVVBqxZgapAg5HoT76jFND",
  "key9": "5Aefz5ftm5FtpTEuULEBQyKss8Wmp2P1BuJF1mPBBgHUBHj1fwyTUhhTqqMMbJKkDQqeBiT8yiuVEwGxPgwrZhzG",
  "key10": "5xPVqA9bYyGAHDAbystsfocnbNUwtwoZi8dLmue7jCwZ8owLU4Fo9UNw36wbmk3pbe2wZm5JNKsUagFmX9uodnso",
  "key11": "4gxKk5j2ibPndEL8eWBfFjRxu2VMKX5TNaAcXeGtD4mwVmqDkuWtjbUAbfxJAdzrRjxSgZ9pt5v7G6j7u1dhSy4J",
  "key12": "FQsYwYCp9ZNVCsPJNno11hndsg351jvTKo4maCiVEzB697jHftKQAUjjVm2m7ppVz3uYR2fYc8Qjp5VT1wf9Sxg",
  "key13": "54VzuUHo2Chr5QQLPmmFcAWjD5qCLSL61MkYdpzfifsnV7osJ5Uh4uQr6WgCzEu7hDHH9M2wTDCeQnxd9RX7gTqR",
  "key14": "33r6c21cCzErY7qDY266cS4qw5pBKAURMJe6H1R3Bc3R2CN1y645tHr7FVyJ2GYYmHTG1PMBzH9J4Kq8tcJpRSgm",
  "key15": "5zcpJPPtTfn6BVrrqfZydMQAKqhYEcjLks5Usr6qex9uELfwkuMGcPQJUBzCkRzYLYGA8CoyHqL6TRYvzFWdcNAe",
  "key16": "554YMsM94CDGV1LaRpKFVJPCvqn3PESZpe5fGrpeYGZ8zFJG28STPBHH45WnQkgD4ZVZZzJ5War8uHmJRhxEgqBj",
  "key17": "5cTM9zX3vF4n83sG21EMN7EnYHYckoivub2hizkyYofymjkThtcyUi7cTFMzY2uNmEW2rrwq7zLfmsZsP6SzCWKE",
  "key18": "5xqddFWih5W6HKhTwRYVTCyB5HndRgYjrafsKARApsD66dqDVqnQgFC5JbgEDD6JSSFGn4bExDp5s16f5wcZqouJ",
  "key19": "3WP69CxkVD9Ar9gNdFQyv84G2gA125kuU28YqgJsEj2QGefdPEMWVZXtwBtcvqJEtzirekFgw6KV8KxbpKuNnYPn",
  "key20": "3e1HrsKsaPduF1zNKFduAfg5ggodEYiNGzAydQmHJJdAmxcFq6TvnmB6ZSzPcs7x1VnxCrkMhSnXH2EtQiAo56zz",
  "key21": "57GJYZxjsxqDmJRw6sAYdNasYW4vwxo435E3VV6jYed5JPZXKhGE2LwpfejrPQWjK7tpkhyMxkMrkabWp9M4Qmm4",
  "key22": "3nkweuGqWyKHvmhThe7TJYweb8pu6oxWjDS7SgRJUb8xSytQyYqomajMEfB6HA2uGu1WqDdYK5afUC6LiLp9wWaH",
  "key23": "2Ts7t3fwTVgz6AXwCJwdoDspGbwKMn6ceDi5YeFHBE3M8kUYsdSTc74egnCkqYJo7ft63nAW2CZYq5FzKYY1nrGL",
  "key24": "4GB8B3WNKLxRt42jG4kkuLUb4QMAJHdR2o1bWT9hvBF4bM7CTgYpNkmMjZ9icTLLBmZRiL5YVjQyVWfoHPM6WLZg",
  "key25": "4ryBjWKLac8tkjrpckWMdukT2yXPmNpTRWZCe8PdgWL4MS6ATQ6JJdhCSqhzJH4PUGMP17G4uRCvakw7XgeLDewn",
  "key26": "4j7qXZLWoo5oTemsbb3VHb6tJxL4kvGRTmMKqU59sgi8nEoqaDrEF1vkyeogv7Fm3JM8A2e9SwY9SRmuBxTYTwjM",
  "key27": "3Z2KmZn77Kew8chyC3E5ViQg4nZMcKYX4nH4UPJyejPyFcrgagzwZM69x4ujkZ6VeUYUSxmYW6eeovsMC9tDoXBU",
  "key28": "3GLLHaoJZQJQCobZThLykcxqt84QGf9FgubrrhRJWyQwRBEkMusPhZnvefJm4sDk9QaPJT7Pov9kRS6sEH8H5Y2K",
  "key29": "4QvhPQ7GBiS7mjBrnTThmMUByGRs4y9jiVf4QihwkybEAt6ozkVt3nhTRvgH1FYUiZqgbyasujVazjFuxoTybn9n",
  "key30": "52cKrdyZhYH4bhPwAyWat4qdJevGtZmvfw1oi9ufEcnvmMaHFSnGPzm3ca4ppxeVJBe5MnVHzxAK4mmc1pQRhehU",
  "key31": "52rUzMo1xAjJatnbraMXtkHcxvYdpqVszfhJMvfqicKTSGWciK4dowfdvjhnXYLe3dThW3w3KQ9AP3aEPXuUiAV7",
  "key32": "3hBuikCh63BLaBVBmhUA9SL4bbGJs7Brq6kxrdTonMQ7AUEhZ1srKDRmxzJdRtsMtSX1QNm4otc8WVddCCDgd5Jq",
  "key33": "q7hxhWGtRgoKtPVeJEt7HyHp16Zff6CpwYVhzBSCfdgFUBH9tWqqU1XrFgxRvkWNnY7vgcPJQDCJVXKTRZnkU7F",
  "key34": "3QdqXV8jDovfvz73emMUXwwGVAUw2nfdyQkprztVrnQ9ri978XJVnFAWFCJriEmLzh3ZJaK4KVtYPbaA3gKRJEKW",
  "key35": "2vgPczX4CkpvJG3LRy62EpNngztRrgxpjgm7mf6PgSGEmabsfYW4sZh8GjsxZzLiA55tZp3MwEDXGiwq12DSUzjC",
  "key36": "2uRtNsjw6Gch4gaMvffyTZpFz1gogj39ua9oGnCu1yB2yFx5qn1Ww3JYEQ5X32ZamhReU151DTE8gUfWNqxAuNH6",
  "key37": "3ZvY6ojH4wFEV4ki24andUUqqfQHyvvALkg5cT9ECUUV2wptGtAKSGEGHkdmcJ8Rx4FgJPWm7ZhBDNUz86E7wsFS",
  "key38": "4gXtrWQ4yUPfmX4sGaM3pDYxhU5Hn67cNpH8kNe5i7vqMJ6Czh418TJhgSGvcZfeVqyyRUYNS8VJXeSq8uiySumn",
  "key39": "2syMswGzcrkGLRRgSjaF9zjdaaYDuaC4p3SHyB48DVdvMBrPz8RVkFCi35AZKHM29uqKSch5Y7vN8J41ERpDoAmn",
  "key40": "3rShzJ6iNxS6aZJqscxxq6MVnekMXU88Upaee1vgsBAeaSL4o9ZvpK8Sxs6swDzD3JouksjFhGrN74mrbNL3TDti",
  "key41": "3QZfNhovZLxU94wDRFUva37q7DvtRmgHuxMtBZ5Auw8WCLVKr7RAuKiLZjesHcdBsEgdUVqVrBTYD5khzqnkM9FE",
  "key42": "5xCdAPRSQh4NMenp1AYx5pHMakGPeiSRgQzJUNQiEjGuXFcxVn4twoHkCVFVHoikwJj8tFEPBJxhX67PRtNp8yaw",
  "key43": "63XCHZzzRnuSUpkJvQ353bud8ds5L3nWaT6U4jnrtgefJvaMnenEXAo6jYvSpZe23AxssgtAaxBKjE6XQX4TAQV7",
  "key44": "27LVEP5VorLorb7uE69u4Kok1cR3rjUVUzr5qBRvAGPyYHXvoVXDtTvoTpgMkJj9UNN3NSxLu37hV2Hwx9vkPEeC",
  "key45": "2fgzdk9wSo9msefNs6YEn6uzs8knXUSN99eUH7c2so6FKyhuLhzhBBhbc1mZ9En2yiQ9JHvYPdzeSo5EPELPRTTA",
  "key46": "61oq9guN5s3n9QokqLMSvkev6v8NYqqwC3pSJ5nCNtBk5dzGsn6Mp6r73NFFEpCTZCp5HQiL7FKtCMUYuP7ZHmtG",
  "key47": "21Rb2LzLnFZnBvZgCewoa1XtZS1qgJepamifhKChYBNLMChNNbReZed8bPWxQcoPGtHcpN8tauyMQsnJrxA7aBdw",
  "key48": "HQgdWwkweoPSdJNPXYhp9wQMLNEciCYiw7Z7JjRVZqWdP2QQ4zSPa4qxTC5pxfBErXzn8MdbaA3AvUNsnJCmKf1"
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
