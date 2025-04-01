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
    "4TV2LiuYnuL9xn9MYjvT3CKpv5CWhXNbcoN6dVcF9GnMisruCqveNCjvWefZsHKAY7DWy8TTSzLkwwjn6QoxU9Qu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22c2ysqWkU51vMnM36zSWZPB9Eb8m4r6w5pKVfjPJBDVKGZvHWoJM4CQYmok1Ex8YXaFrmdwGqhBVKfnsKysGFgk",
  "key1": "4jFpWSEhdAHd3paGysgQyeMkEy8fji4hiQkxmeftZZXH38SL78CVUzq1RSd3a8cU9uTCbncqBsCgjmr6K1KxumKA",
  "key2": "3nCDDLUQHudDJeTreD41SuvEgm2wnFHYhmzazYfcsSPb3WvsS9xBXLfzwUj6oFoGWRRfw8NkekkoR6dGi9cGnXpa",
  "key3": "2PJhgLqFgHv8c5W1g7cSh8uq3AqsYmyZd7XMKJxbXG5ci2gYAbziFzsN3HB3EyctHdyJScXgEcbYqENUSboqqdUc",
  "key4": "3ZfvuTJMbaZjxo2DanTuswBY2cvNoZoZRtJwTjmSmoZfSD7YEsZnfGGzfJ2opa84uZFAWxnaA4opoX6eTeqDjFct",
  "key5": "JACS58MPem74YUcFHHDhJDqb9mymithN93CxZ9B69Fzas433KWfgTwrVzHzsNwzkst7MJc5zicK8Zqzgsxa4ZDf",
  "key6": "2pSzEnCmiRJcH1DddxJKsg7Jq5YhKwTSKqTgAZzEmg5tnZN7bRNLtwVcviHgmchADzjH2Vc7dFhCK7B98wWvYySj",
  "key7": "3NWhGR6DQ9MuirR6BripePD8k8JXcx7KjLRDK8bbMwUtfxtRzfPPSuW6UDCGvmBqdfq9ZZgj9iRHec9S3iTFiRRj",
  "key8": "GX5GgxmohKobSp4os5jUomXaggp8NFwYM1wzKLUGAzetehCDjJCzL96otGYquF1DEaWtFGCyicNeBrPYuRajUK3",
  "key9": "2MJb5tbJdQDYg8BxdEKFfMMyforP7byofgEa4ud2cVvsd2yWDC2i3vG9VNMejV3cnzW2UfSXWN1cghXEuP4npXhd",
  "key10": "5xda2NLBH4oWuee37PdWT2oU18TQWQdjEK3g2Us4ttewYGFi2ucoDLYkYmuS82efmayhUrKHo6FRLj8T1diWCgZy",
  "key11": "2hNQMABdgmcYA2XJRBTT8xYmJfNmkNRuZ4DKWvS2Qwi3HNYZcRgcJ635DiX9d3rhJsdaM3qZ1G9ShamZEzy7J6xm",
  "key12": "5aNpHTU9ezXpkV45TZf5xcHzqyovuoWD2LZYaUhKjUtY5dWhrBdMVg5rx76v8WrhuTYsf8S8MLjxBgA36xkahAsz",
  "key13": "owzJXYjfD2cDwyezzk4kt3TikdWk6rP9seJsKMFnhYD1EeuLuBi7uuirKcThGUmcwwc3HTEF5Ep89ZXsjka7q9j",
  "key14": "5nWpeQBjYgxkGeHv8V8McpULLxWv5hFHfjFrXcNVXhyHBr5EMKwNquqVTJyXAytdi9EaDU7D6FTqybtdbPfpWbg2",
  "key15": "5RJgBgxtGeYruPRCRGKVBx6XxCgbTrJnVxgQAmgH5PYQztiWgQstmxLJaAMgBuKP8NJXzAdpRAQSP4FU185HnujV",
  "key16": "3HyqgDN9XQFTJmVyRJ7hrDYPtY8UoSwfEtGRVYcak8f5vQVVYMm3uyr4BJS9qA5MN97ByAFyq5xXeDPRU2tDf2cY",
  "key17": "5kuCNgg2YCxotbMbsNxFBZob9fMPoQbk6aPwYsjZXYQqqTdGoDqUCyVdJihJ5FaF9NXak4nzSTTPshTy2HcFhZpS",
  "key18": "TM7WxMguQs6J8suKBd5DkUaNtNcdPHxNfTqN5CMZMKEds7yLYDCA1UKm8CRqcGSXoPPJnQwDGuJNiXPuU8EAQjC",
  "key19": "4wjt9A4DFnEW8Ne1TCYM6xFLDQNuVty3JuTLtxisWJFknTbDevAqPTGZxHvFKyWPwgNYeoSwxzV4DzTCzdcHRCFA",
  "key20": "Q3euZUpFEZxXT8tGL2tQTcfKAHsfqEeU7YqTHBFk7K2gHuttt7fqxMq1GdaDdjp7ZqjKp529U5bCqoy3j7k1U5T",
  "key21": "5JecWz8HcWXW47a87E9KmdGZXmzbkxgcMSLkMdcjfbMDAZcRvwRXc5Q6UftTZyaHx5anGUNCAKJqvYmsazegxGGa",
  "key22": "5of5TcVCLrRr3JLfCQ18UVpTZs15KpVD6WM1P85btErtz6nZxsUGkPpjjhesHa8q4qpheVL6LNNgGnopw73LzCMx",
  "key23": "2UNf7jNCzxrHyXZbL8gmqYpM213LBCv1ibk87NfG9quWb2SSQRuE3LUT4pEcEoxiCJYGJUsDoCNLK3n6qdsNhdnj",
  "key24": "FWRhas1cw8tZidrGjU97g1XgEhxPjEXZzpejAYo1HW4uzCpy5qd1We95sQLiaujUr64ixYxfACtpBpoARksCxtS",
  "key25": "2VDV9FZ3GCLMy2TdFaEUmFRXEuHUMWFvAfiGouEGq5NYzhvsbf7SsZFqoDpMVYwYL6doMdRNnXv9tAZmP4tyyixs",
  "key26": "1s1Hyi28WNqNneS58YV72XiEryMomvHDrDkqz1FAF3kg9QqxdcrCo5dfPGANTQ7yLm7YsK6XZ9bfFhtC6ffBgYp",
  "key27": "2jwP8Fd2kgHVpYvtUom472t5TpWDsAAJE21uWKDy89oZFg2dwbmGVTxeLgPp4YBzV8CKb2EkACZcknpWoNa8T3qk",
  "key28": "2DEpe4BbHg6B3pWNwEQVLz1man6xS6QLxD1SdwJYqPGX6krQPcmD5wb973YSdtWs2Zn3L8yrGfn8MVDmJDc5CnGS",
  "key29": "jTJThE9zttz5LiQRbzWF3wWmGsmFm15zyorytnzXRCeeCaixJXV44cZayDwaCQhotnbvRiaGpeMYnxRupezDhqM",
  "key30": "Z6H5T4MRq7qEYhmkreuBYMjePcUwAMHeGuL3UHobYUXamGizH45Gm36dQfviBNm76JdzmVEUxoB4fQJeQMjeS5o",
  "key31": "52Z5y8eKW4wrze15xnt6QZEPvpRmSvaBaF2egd9p5LsvajdT96hxW6hMGkR8ojJjxEgJvPBR8wHQsvqQuCoBRh47",
  "key32": "5WHvJBA5WVNZdGipZiBBqnK8t5dY8UbMCnuh83K484SESDTsBj8wh6DBnBDxgY84eTpXpvApZBEdy3i4v2zTmCzZ",
  "key33": "4HiNPrZj2xJJmu3z2g5AU1dysG8QzctSDHEHc5KSMfCyFD3wuR3vrhLanWqL52V24AxVvwoisEQWUUYNvb6xD9Jy"
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
