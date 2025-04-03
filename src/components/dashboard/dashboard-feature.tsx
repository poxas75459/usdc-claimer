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
    "377Ty9p8q1YDLicbUjNcSxuqpcH9LhWH8VofMshwT8L4YejnH4CJ17K7z5sN58ofH7jqLvU3k4KzcRLZ5GeVaHoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67TGWjqBFPqxhPVernr5X4VnXYAQRumjcAnHXiCA9tb6Z9KpsKRMqTkqGLET9cn1hqKMaAQ24oM7MqT4R3ufAUnq",
  "key1": "5jgGWht1gSXwWiVtuSRdZF78epf2Q5gFNCA7Fm9DGLdSjU1GqWCJ9yG5WV8ShGhNLdRcSo6v1jHNmNkfghuqA3Ya",
  "key2": "59wk17vLXxR9cAt4MFt1m5u54YhMZnomtyjf5RSNUB5NYWu5D7JNk4raogLNgTotts93JrTudVwjeXh3V7aXcQ5q",
  "key3": "4WgMq55JkuYmjrh25hdd8weeHAjQEe3AnfJ5bjnuTe2U6FMzy63QGXX1S5xEkmgW9sbVkRCUsdgpLsHihHnJGwgD",
  "key4": "5Gg5xVhTP8BGQampNfcEMCQ2Se2nuhsV9U4MqVBJP56jZUTxpU7tV73LPfpgejNmwm7pnycay2DPBxLdHW9ts2uU",
  "key5": "WS7JNMfKxGaaUPbz88AkWGkyEyqG815oYz6gU9Jncrf2iRAdD9xw7HtQmN5KyGD8FrotYJ77aJRg3vm5VXoV58c",
  "key6": "4KeENkDZAgmWkdazGmKVktPXw8YcnMaqKqu85tBeVKb396AV4KDbzoFZnsskfa91ym4oRaBzt4dVVmjLJgALyE27",
  "key7": "QFXC84cBXa3ZazTBsxfGhXe2BXdfnnNTa7HGNDynwtdYKNgpgGXAZMHh9scym1dZhVee7aeBVy4qZSuJSo7te6P",
  "key8": "4nj1auNyFniWkQpSn4CfQeBppBD3hkc9wEy2P2zmmwpr7bTT48FPrCUuGqEp7CaaBAyfhEMSmhsWs23RyV4XqhLt",
  "key9": "5mQqg1P7zFbuPZM9z9yDACnsQKGcfxWo9DrkzTj4tSEWATuxGbGnoNnrbN5yvMGtwtP9Kmtg6dBSKokhcN6MovyE",
  "key10": "2YwvxhGjQ7JpM9S5iz9b9F41znj8SKsBNsr9j53GfFhxD5pNWpU8oLyxs2SWyowHXJ7qGYgGnZ9TZynZT5pByy3n",
  "key11": "5S9hAShFZDZp9yTsKJsUBZY768Gwdw4BeN2vSFrjEgNDMA6pnHxxThgcLfCQy4caAULKZnBazJzYHzVowJjdwaSr",
  "key12": "Jdw39P1XgUTVZpNWvb5mdeMiKnWNb7HvaVn3er3P4hwxGL7DY1rYXtL4pTBzM7eRNdeTtAMgU3G65fBxpjGz5o7",
  "key13": "5JXVC6wAYin4rH7S25sHzr7744CaUduewuNSrNdcMmSKFU3N2prQgAFLjskvoDAUCYfbhv5TcX4eAE3yJHqAYkGk",
  "key14": "2w5AGgDqenfEjtYaoVJN8LDbEcstgUZCiGEbod5GPR3dZgLUacutJDhMzove2DSdRuNrH44PuRi4YagbtgzLMweN",
  "key15": "4hbAUxZt9mhKNgkCLoHQ6U75HmsNsf9kHfRcbtmJFm6EmVSURwnGSTpxQFZLhJTD3CurMwXu9yiBhmyo2NTghZ88",
  "key16": "27B7Q9hVLqPuqk5fmVT4K2kFK17bVVjjiPQ5mjmW1QY4Wuz3bqzMGMFMvVHFtUDazUMyj8XDLJvN9MQC3NQ9xN2U",
  "key17": "4spKsrEbGTqZmAevDNWm6mfCaSt67yiLyLDdVic82qRKi5hMdBjWTzGLMgMUY1xbrPpZEsEwow37vyAqKLRLeSZB",
  "key18": "3zUWgecFzEccVchJWZZPaPs2TmM5Z4NbgK8QmhbLfju2c5i8nxHjUCBmcFMaeGGVYQ6NS58iRxgJeHQRQwVbR6ad",
  "key19": "2quzxkLf6N2ZCRra21vZNfgEZrauZdC2pM5QUVNTdWqiuG3JU2R4hsFq5TdCU12grBJhyDeW9pHC9PbVH9b7aiz7",
  "key20": "2Q6k5orSUPu6nVhEr3PKQsy4kG9FSsbgh1MjmNsi5b8uZJybVb8Wss19bRqZ3rVa1xMMa8crYkC1JBYZKoEuQ7YA",
  "key21": "3bpTGk6bfGXqmJUFMhv4We4z2vtHqqqc9hcJCjPQdeMdgYMHjX2JZGwsfv3jRXQ8cACKiypMsH74x1iwQcTwe68x",
  "key22": "5grEZMdv5eB9vueQKwnwQSoDU8fGV19RzDVwmTpQ36AE7b4t3XLzVV9gddiG7JSXhPBpdh8MGTwTWqVTFHyiPDNL",
  "key23": "4VgRCj6wB3ExCwaF5vZk8nw488Hv3DxnHQUB7zgQ5hvc6Dc1JfkDcZGRTabrQ6TgEEmJfmvrk5eyXdf1hf3rmZEe",
  "key24": "3kw2fyS9LGs1DiXLBMUw87QWwuQdgsPnSxLuoEnonqqon1cnPL15SA7fEeUno8mTmZ1jDjvmyDq4UrHPyFt4UMgR",
  "key25": "4x18U2k1zBjozEJP1NHrvfze4eoMQjWdMAQzPCDbqtYXwhGJapEnxjxZt4oZySYDwqptGqjk7BipqCKLFWgx8f4U",
  "key26": "WTqKCUFxSWZsCYAzoCFAGCn1TMrL7Vn5xhKiv3VCweVEkLEHNDuaLcrZhwgX6TYVVAAWF1Ldm1WBW7CeQYFtEhZ",
  "key27": "3LEPU7jR5wcu1Zm2P2e5fKLqjnxJAAPktM4ZSjGPXuSqoKz2qp4gfV9nVEcJrinaesrMbnPjqubtbZk3ktsNyin3",
  "key28": "4Qz4ro7VcTbDPk3Gx1eHkzN6G8Gdn7tTzzVpJVvzeK3QZHAFkmcHZcaWVv9zkYgdbjURTQmM1VSG7zyaQUBEMvaF",
  "key29": "3yTrXhW2dp7CuFqTbn6TEHHusSFC5SJ2Ayx8vq3WHJRdLWaxfPoCS2TUNQr6obkDzxsy1kN575YhShdvucBsZo7f",
  "key30": "2rt5isRrGGJGGmR1WdfmWkLF8Yv1HvNTMxPbnamDMMTdpynmS8CtHueqGVkezpLD5rY39dC5DGoHvrTyRHWjFhTE",
  "key31": "5XMjUr8wAMDQuJss6f26LKjDvUd1YXDRgc3x9ppasZRKKxkysUAXLuzqfiLGAayjE3KT33umAvjXDLu4N2haj8DP",
  "key32": "5w3suG36uEw41tDgdZPgFLSwZiH6EeoRaWCFSpUr2zQQPGmwEZZV7RjmoBwgWkREwpYNpFnZMSfGXNobrPMMLh9C",
  "key33": "4Fruzv2En3UsvXMDKsQ19o7Zu6KLbHxCztZTH6Lu7FGXdjkAcfvigNy4URogWgYukiBaCoF3priY5SfgZmxHSGm5",
  "key34": "fqGsx33oze3BPVWYs2EDGVNca5iu6UB1pYepk6TAbiY8vptoVp5aJBsfoQUk3ahs5j5aRKeS5rdrJTRccCcY5Vu",
  "key35": "RwUN7RSaUupTKH9pNNW4ekssxQ9Vsun8h7Wko3T6Ci1p8ZGQG63jmCJ8AUv3wMywjAdWqjRucF5fxZB63DKufTH",
  "key36": "U4dfJZPSDcDmqQDnCQGfRszrHLfm8agFKEYY92WCbM6xd8iWRUT26GzJCed8M3HahjauUaM2EPufsDGKCeVv98U",
  "key37": "2kJf5UKBRMRRxUavT2DVQSe4p5Rhi42rpxhn9mTAGXTE2tV6G1EZhZqAGE6rwqSkPiAaUPfE1vy64Jmv2JnR5t51",
  "key38": "4prDtqVxVJUdJgRmwCrDPcNb5HL38SbS6J4p8rZ74vxmHRq5MzxEaUPYWU5pB5LMTwRsHeQKvhcuJHNrJrrZY5mG",
  "key39": "5vApavnUMaESEz1i8UjuRvPXK6zaYxr1pZQ6DwZaJLwYVvpiVtV73Zuy8pqLA22jAmGPxrYprApwdoAHr57FoByQ",
  "key40": "5ZS2YfgX9CZASUpBhhYQS2UUakRJQ6CRXKqzvQyZ7vpbZFCngmjn9VbTSfUHMQZMKS1caTzrgYit7uCJSnyNNkhr",
  "key41": "5tTZidEr3k431bJP7TF74NgxJ1sncN1WyXxxfneo7josegyLGQJdGspHdiMsYdMNDyJfudS8Ld84EgnDeHjyJULt",
  "key42": "SDvEagVF2pAKfAXEWaHYoeqqMQw9gc5WPtK1HHvxxvEaWQjFokMSZxoVdkZi51jb8JwSKZB1yoFymUrhj8pjWXb",
  "key43": "5ayAbuFVkBH8ta5isDobXZT7q24FNQZWrErEcsNF4ZAtj6AzjmBmEU24ppkKmxNQjoxFMZ5yQe3mMiqWHjFEGxW7",
  "key44": "4j83rMQgiNJKdGEqd4d2axHJ5D3YPbH3UXav2CADuHh573dGGB9dp6VyT2n6wYHsg5V2CF4Pv9TheyzNhiTewZXK"
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
