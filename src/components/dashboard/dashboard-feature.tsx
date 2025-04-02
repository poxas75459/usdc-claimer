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
    "2oTwjhLNsr6Qv6GypA57rjzMjb9zepACT3uJ5MG7zPA2qhAnzXiD3fY7SDNdFN4HqdrpEqckmkqKER1jY2ArmEJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjK3zp6kBx4E1kgdS6N5cQHtw4Tf7X5Z6tJ4RvHLCDu2wibQqA5BT6W2h7CJXwzBRQgzL5XdUF1o4dPffBd9oQs",
  "key1": "3YmsUuEwpWLAyr7T1pxGB5vMU8waSuAmbQZPD9WZCYanjsvfQyGCL77Vcd4xLhjnSj9v4hSRmSkX3u2Eh1LtXW4y",
  "key2": "W61ydP53VJeWx5y1EVKGf4cuY6Xc4pNhxNWph5V7c2gEVqhCe3mZhG71wn2pmyprePFggpomR4LxDMefcdbTRSG",
  "key3": "2wE4RBnvTahab8V7w6ZruwgVACUK11EMaN7coSiiLZe7GbeDSytBuebukHrvkoRXN4YXm8c1XDdCgZ2dCezgtmFy",
  "key4": "2bnqxsdjw7w4ne7BjPGTNrUekApCWxwEGFQfWgqTsi6nhxsu28tZeBF2CLTRVYL4gc2gRL4m4vZfEXZt19a2vX7i",
  "key5": "5nUgFTomQ6hm4r9s6NezNtBetBcRnfFeL6n6CGwfnUuQsjyZ8YfjRVeCNPhNbsw7zB1uRGkw7znmBQuuZeyGPT1c",
  "key6": "4dL6ABELTZwNWBfnv6KCDW57UjW3eDRLiRG4QHBWqrMW4oD8n6ttYinGFVdcsKBquPtkfVaSdKYdspKUJbnipx2h",
  "key7": "26t6XAJ63q5ty4YaSp9B8wTvnXAiV9Bmj3dweW5k8TNbKm8q8gLTrSPoKChAbPiNj7sX19D8s8zh6aNmZYKhAPSp",
  "key8": "439Hokh39o7V4TxbE5bVfZBktMBhbQskRfyuGMQmuJ2y4DvqwxYuKHhVhPRyUF9rC7j1xmGiDv4W3f9de8Jj5r3U",
  "key9": "3v4WMJmtp59fBtF9KioTz8ZLWRZgi7p8KsA6YcLd49GUFRuZByPKRE6hjUTwPn7wq98xzBe1fgHGu6gP3md7YSeZ",
  "key10": "5CUrJ8FtzVBaXqUmQ9EEbipnsxyL1nuUtTRkB2fqkmf5uu5NSQ1GpVTEDPuBg2hpNwGPmvmj46MWaDNpA5oDsBhE",
  "key11": "GaijURcHVxH7UTNmTFqm3TYq5oB4N3h9tyXnqghGFSwDnehnZEA1LwVs1b6MKMUdnBjTMa55MoANSyHTCyGxq8o",
  "key12": "4xfDzq3NVe1KzsSU5bUVCeAemwbriE8NzQST2AJFgxBPEFjuLtjtbo9XJQTTT3xso5L6NZBDW3HuqqF6wEbpZjhY",
  "key13": "UFhi9UdvRj6uXZV4CHzmj13qoD54Y4iWWdJbQxKioNbUtmYLMFa8dw2QynHiXHwzfmEmMnHCJDLQirxMk5dSCJg",
  "key14": "4VbeuDBMyfWrzuemz3XX4KKgJEdFKLsnoJm8zsBV5tR68iMD7cRQyB5QSVTYfrntBjN87aKa4Yxk4f5CMyKdR1Pf",
  "key15": "kQq9ivHfGEDteaP6PmJh5CcTs3UQPL7SH2H6EK21HEGZ9gXuMhLDnA9ZzEvu814eBc9PnHSnprQkBVNvZ3YNayn",
  "key16": "4Eug7kQ5NtRctuhofpHSuuSicH9CzqtaVWwQJHZDs7MF6A1UY6LxtHbCn63892aLUz2LkygewVuqoVvpSScoEK82",
  "key17": "51CsNHAQaP9AdAznyHhKQeAidtGCdxwCxV1Wc1DpEoEjXwXqG7TqVsYbd6nPtUoaPXgjKXvAKjheeXj5JunuZ59u",
  "key18": "4hryQBeciafJV7rNM8ZGubaFrY9ALmvYrtaQgfqpaiGnm3UCqKTLYmzfQMtyV4MDuvrsLL8rorstyiq9JQ135akA",
  "key19": "4QZM3bKArJdGG2nMsFuoJwAFBpJ6Jbejv9jSvk8uYAG2Yr7SqhLo1sz2nA3dQd5u1QbeufNUd7pNUpJrYc5C8Tmj",
  "key20": "2wPonoEV1FukwazDzfir5QFJsXF9KATAmJcHVVWzfhrN1QwpHhoHTLwJj5vzByPCi8yycnHyr7937wLJautXUEf7",
  "key21": "5nYiKzyHynB6PQAjLBZ6nwwm57iDU5vPe2RuAr3LmGQkryLCKRMw9T6oAfX4kdrA7EGHb79JWwRm6z1rj9xbzoRz",
  "key22": "4MmNd8w9t7AmTytS7AMmsEvu5E8NPM9KqjxmKFksopH8EwVAtAsdFjoVYJ6xGf3JdDnNYyxNTkL3ZfjfXrUbfL83",
  "key23": "5rhqWEJ15hk82C7Jo3Z42KtdZVATLQc93sKF3h5xB7Bc3LhWQ5VTWZHdfPR3BfxhFG89kEuhquUbNd18CaidVoQY",
  "key24": "3iudqUqJdcm1oG3rLNxAy9wc5fZTKeoH22u8ehJUF7xeCYKyrhSkxvWhuk22dpMhFRpPD85SRFJkUiaC9psMTrzb",
  "key25": "4AHQzJmsVfdLFbQtr6hetSH1V9noMQxZMFcNEtBprLf6vtmNVwmKMNHueZUvQZHfQF6jVSWP6Vk8Qa3qtAZyUR7x",
  "key26": "3tPPmAqT6tDf3wHQ3bG8n6eXq1SxuaqQKyqr8uqYjSmgJQNKNb4KdDqoUeaGRNzv5gHqTsRo14knutVw5YM4zcwj",
  "key27": "4ejoBrwTReUckqQGbqNKu1HaDt9TUfVGewHUdxqpbBEf5zLs8xucZLpQYjNVPB1Ef9ozfAxhbXs7VMVZXq5Lmxca",
  "key28": "62g59KXYB7TdEzhVAC771sGxdAZHkjxAoKtb9XtoxqrUK9nq49gBaCzFXynRRmE7PPaXFjtu15WdnszpYkWePAa3",
  "key29": "5x39dBrHR6EbdRWEYyFj2T7x9LpJGwJg1Hb8NpHwZvJL1RF3pzBDPsobQmCyjUWvyGunrM51B1hfnmZk6XHXbQhj",
  "key30": "153Gjq8RCw5fmYGa3fx6XC9yBUTkxgxAxdLUtn3B9rGHqbR2gv1M26yFA7r3hHU1GMBQp3F3dkSNzPGxdWrZRbY",
  "key31": "4NPjE2RSxDUsitzA5g5t7CvfDyhqH4fi3k8SXHpSoQwiiTcd7AdZL4Y3586ovcsBqav6rV3VVVWij3xSMxpjpiDt",
  "key32": "5p9JYKb8zR9GAZSogmiMYGutaVFdote5huoh5fuzTmKPFkFPCavV3MTFJbJh3GGYzJjTGgQmxdRyVGVWHtuQHRwq",
  "key33": "2UzvWVoBS3fKVYTMdJzrPZfaRrqQSZyMLwcLEnjnxds4uctQLpW8MqBgTEemn4QEtNc1YNtdH9m6u3KGGGroFwfM",
  "key34": "2CaBNa6KK8FS1EDsbCXUz4WKUzemX55CbJT8fYZ5n2Anqm7pwSQS18GXaqUUEYaDyE4J3tbKYeXRZwRs6dsjSfkH",
  "key35": "4DSGVVEAvX1V36ateDtRHZE8GMvBBPhtbDe17rAE3hb9QejPmgFr4CWY1m5aRgAycT8BuMZb5zCZC16jJzyjCzHX",
  "key36": "3PDgcd2KReBVsRihuSccFCFhRdwNF9J5EjF2dgvCebW9HkXUcNs8ybRRaGYmxHAgy3jQ15EppQd2jfPr3unD752q",
  "key37": "4gi3XtiVzzeAhGSo2oLAAFPNjetJftEJ5xmvocUp531Qj8QG5gYMUkceCLFrgyJVEUVcUv5WvuHgNZiae7Fyyq9A",
  "key38": "31kgKrmqYKRqhUg2WQMLpDwkAJ7XGLVF1SvqfNTANjpRiuHwyzz1VbSaWAgFrymYkf3jCXpgCvrgjsAUsCkhjCYb",
  "key39": "4BjHjYG8WmUzfudGB8sCxHzdYs2Q2Rxay1eDsRRMG1wRUo8xo3J52kEqYvtnUQdwi9uHheR71cpNxnF1PmGqvA8i",
  "key40": "3wjas3hHau611TunVHCC8J79CMK9DLK82818ie4nZM4j85AZZHqQ6ZDNnFW2hKPekFS5BmQDqKUpETrwWqPqP2gP",
  "key41": "3AwSyoKRJ3D4nmbqhNvF9mKfCUSbmWmEcL78hiu91wupzKzMvBgK2H26ZttbhYCiWsLdwt9WvLXC5aaRX7qF6Rbx",
  "key42": "3BGpkVKuiUMF8FhkumnV4n87m1ZSQcNLAUzvoFD7GkGt1NJc7FX77WBUomcUBb3Ei1YDMSRA4k8bfWY6DmTWcPXR"
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
