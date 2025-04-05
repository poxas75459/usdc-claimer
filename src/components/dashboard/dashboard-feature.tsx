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
    "2dEBHE2ZuBUHN5JNUccjEBpdkH43UF9LnXG565Lav9JjaQ4cmk3whftpLtg35J7r7CjrRQNTwnjdybMdVW7mN7Zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ao5U8cZqCiFQYPuwDYrrzj2Wa2iek2WvvBNAvpR8fHgXaKqEnNkuYuSoSsjKe2XuRq2bdmj9urbUfH1BPt5L8yX",
  "key1": "2dLivY2f2gmywNf8oJLNP45eEotr9obsLGzMYrFXoDycvAhfvU88GjrbYpy1Dmge16Dre8RwiVyRmQ9EdqKsg9kB",
  "key2": "5MVjGm5Zt7BEubQyg1wDMWSPk8NUuQdps7XSHK6EgyHRFGMKcAwp4TLr2ZGartc6GYrKvYqXc9qsgxVPccHuLHuy",
  "key3": "5vrRrnWDkXas6Exp4c4tjPfb59BA2mA9p11dJjRzVWFbBa6qrDVNWL9UQXu6r1tUuHs8LFkvuTc9geQzsU1nYKjg",
  "key4": "2MDDhp7YAXx2Dx27stiwTY385qPgMRnRW7eakRTinLRzrDF54Mjf4GWvwiFvTc93wb8cfEMbTP9SQpvDay2d8biq",
  "key5": "2NyypDsxHeafrGvMp7cZJ7oT5vLVyuRr4iWmEQ8c5TvfFiawMmEMW9guFBHS854ANHGDtNAyEqNunNCpfjw59RJS",
  "key6": "3KuSiQ2mX9TqrJkiJqktN5FpyP2S1VwSqhDdiggYw2LtujLYdqmTqjkrokr9AxjUCmmcB3SbRtqebbRuLbfTpAYU",
  "key7": "DLQ3EdMM4mUD1y1Nm8G4yL33XKbPB4zDBw17jn9KjU1CfonsRnYTb64SQKBnmUdQuq5SQftAvT3pEzHTQD8P7jj",
  "key8": "3CWj21SNqcE678xi74BSEypgx8tnM29okQEkrByyj7iufGHExfLSMAP111BJomwzrzPhcMkXFtLU7UVoLFUodnPY",
  "key9": "2RahwzmX1QDBwYDD3yt3eirewz5jJTMJGy2HQqSXBMYCvVW4apv9L4JCYBz5yfpJZckJRyPzWFfpw1b6kByVHzTX",
  "key10": "3Ku6vXZ6hbMPjFXVAh53PBuw9R2TvQq8QVq8uKUVPwNL3ycZP1XxWdH8DGLkQe9tuUshxpqL2oGDfSfQjArLcBdq",
  "key11": "2jN12hkjyJL4xPhkJuZQHKo72XWZsFV5Xm7kpAsKSp97SmnRteKWsuLn7VwEy1uSttP2kX48iE85Hz4jScvXU8ew",
  "key12": "58mHUB59vYrggQDx7VuQoFECmZhLwRAmtK3Qt5ejTbyXMQCvbZXohSX4kDA4HfAfs36D6sJ4YboCrwUtjWeSQtUY",
  "key13": "3yE8FyLxwzQq27PT3zBxiyVrVJ2khNLxjStcX7f48dH3yV7nRvM7DXa5Gca5SqKPKvADD7RqKxSpePvygwmPkvYV",
  "key14": "5s53QcQVF27poRJccTSyeHNvPPArs7Xate9u94cC38oeP56rdEp6AXS1Ud3dDXhcm9n4d73WuSfdTfkETTpEASin",
  "key15": "3KEQmd8gqHe7G2fNjrEwJcrDNSnHkMjP9gYuwDrEVHVMhsT7EuQgRNqTx7rjsooZXaPDdw89ibxPa9q8vYRFJuBf",
  "key16": "36zPyifjXmWs7UWzk8SPauy23Qd53CpTTfYfELwLCKU1L83quNf9s9AqY6yRz5mYAdbRYpnyGBDhgR5pWV6kCQ1w",
  "key17": "5JtyMC15RgN6EUT3LGE5cPEq5dJ2dafUw1CEF5MHULCsP8phgHXtoyHW6sa5y973NKvynFUobLWdhpmP4oi3GSGv",
  "key18": "4C1yqMCN1nv8rWZLdFXvWwydW5fUCkqn5eNTxZ7qEQA9gge65BLozZMcLSQe6pooGuhbmhWAtArKutEmAuNuP7uX",
  "key19": "4RanPRjuGUMF5GwyVSK8QqCPcuRMqhHGG7VahE8JSQt56XFTAeomuQHn1TSQkewPTC634qqtRgpD4gFyZRnXMdji",
  "key20": "41LhXvPZeifEFEMMfZxSS9RGsNXD38qFj4ohtExsjFNoFW8WxjSx1CmbQfjABsoE216MTiHvggmWBzCJPDvNGATE",
  "key21": "rMZRvKwufBAFMSk6UuXNAz1agfYxQ1s8aKyVhQmpbZswS6aQpBTyWMhc6k8YB25J6qNv6nqaokuxeKWXD9o28bS",
  "key22": "4FbcRkpoYuiKf2HEwWa9WsQUZ7ao87SzwD78nTSSVBcquDfFZBmwTUbjHbGZ4xTuo479fcuFMYEaZNhTpNeA5rtK",
  "key23": "3uV74BJzW7eoNTnCUHPtTzv5DkJbCwvccFNNuWy8FYK9jGXYYH7QFXet95PYHD6boKXVQNQS71UCdDry5hdMDtey",
  "key24": "3omxXW7x5regFjCK4gAUtkzy1r3MrqHmfdsT6y83rCzRG7PHBBzdwUc1B1P82xLukJT2jSrQcWbmAM6JXSn28MVY",
  "key25": "2F5BPGhARMMNnwqApAnwfTMfLrVgNvqMukyDdmEQr4WTA27z3CKbxvsQ14x1DXZ4RuTxbsVFMX3QMgpHKGMmTjJ1",
  "key26": "3wcRX8r7Pdhe7z26JyHet42jZSUT7nhvuctJPSWqCL4dNTxQpchyXVGBD4M5m972EzZwM9hcEbghGQoQL5vxUA9V",
  "key27": "2Gd4fcr5FHbcQT34XGjXjTa8Lq5zBoq1X9nGioErZaCZQzGP1YNsjfMYF6Chcfg7q1J9ipnuP2RCMDveLoXfNwpB",
  "key28": "4oWVveBWwKb4mHr4KveA6MZSoMRzv73iuQGVR7PqRY9vgxuoX4Zq8SquEy1zLzq5GuhXqG6UWNHbc5CdxxL28Pdp",
  "key29": "2LuLYxx5WXZ13cLBZeeapPW16Q4oMtKtaeix7FY24usAAHM1VvjVHbWEXgck9vZNzzunCWaRW1NiJNdw4dKXm4RP",
  "key30": "2naF9MzMgjusFbqcM2Wy2beE84K7GynAR9NvKq1pC4yoCofS9JZNFw7GzUpH4GVFPA4WfXMweGCByVFKd1Bm7TEA",
  "key31": "yZVRxJwEohhtojFrRrC71NLqjca35wwJkrAmzmBDUfXNdFpUMPUdRKJtxmLQQWPgN7QuS4qtZeaPQ2BjJpoXFQB",
  "key32": "4p3p6Tjg1vwQYcgPFTFYirffmXZ6LC5EDVQWpC5MSaFQPUWopNrdzoyzAoxSgwEE1X8zkkuHNT15wW8VCuFvB3yj",
  "key33": "qw1rLhj2GoWYU4NKvDw2Q9fHiMHm67K9QGzTSu9m2YBhj7oUpTAkqwBoLyd7tbBVZk5iBcJTQjQDDy8f8qWdEVA",
  "key34": "25Bk2eeMxg6hZRVEGatfhuw9xmCwhqp1R6DwQ6BcJ5pQT7LtGQoxM2sR9UBfUdGFWRpsXS5PYSiydKVcgXC5p6K9",
  "key35": "5rJSJDG53szTg58DuoQq1ZY8esnPJTbbu5FjXKM2r2gifKDeM8G2rsnud59gF8dbzgQXs7VFBD9CmNKC9uEhsx5r",
  "key36": "DQzsiiSCwMk7hHpgjikJdXXKpxWprXtYDiyDk9CA9P4g9QsWzFYMn3gSeWg2KoiEkhGMmAVCek255kEpdu9GLVR",
  "key37": "5VTBYBGjQ6keYPQoabb4PFXDGeo67hAN9QaeLPpvM9hpFypDFtb5EiCFMK62SD6cxHKYyvHmUtxqXa1NNLMvVqPh",
  "key38": "Vuyx3zCFc8btcS9NvuZkcPMDYfo4aNXvejYFRj7W1SjpFuAG1ReKNdL7UZMzHb3P39n8JVJDt7tSFXrVc5EQtS7",
  "key39": "zzbgbMKZ3CSww8vfRqUPp7tB3ok5DNhoTUaW7ZwBUPGcFpzgNpH2uZDRcA8W8XiYsmj9JoRT9fo7bgYisjDU9dG",
  "key40": "3uxpFnq8oLX7csSDBn4x9ABCpU3wHcCAcd83GGtC5ijLZB9mjoc43sgvGvbzMF7Q7rqnpPSr2ZBEQAE1EHb3RnxQ",
  "key41": "4BRaPYFCzDugeDm4mFnWephJ8UqFDVBhNomSfuY3WGnfwz6MJPvGWvksYnd1ZjDsTaFTjNnrCFjRx3dspL5LpXtn",
  "key42": "4KCWLky3tE7MMiFAq7YCzEKN2y5cdgwhD4x5uU7TcevYe4dQqUKtrDRgkiSxjB6KqbGKQscAN1xvi8Z81vTbMhSW",
  "key43": "3MkaVDXpgESeJK5ULCGMc15ELPtJKh9YU7Gde1q3H8hjyqofYaWyrgx69WKC1wBcx3GpTAj11n69aPRM1Uox42sK",
  "key44": "5JUkmuJC51e5E7Y8A2fAfK1UW36jLPcbFGxFKNcF9WraPU7xJZYwr1Q1eEa4HgBm3yH2VL4McNd7BA9Mh3n3sCC5",
  "key45": "5WnLsNMEohhQKgN2YsfmLbm4XH3aks8oKrLWiN3Xovb7nqdcuAqRqH3ZtdK6mpCAJZMuc7w6eLtk3nyFogBc93Yp",
  "key46": "36Jwu1pQWFBv9xhYdBDz5LagPCKa9noWkDDsHRsJnW1B2AGnsqxckLpms6DuVLrCtFUTTjSJgCwTQjrJX72ZtmBd",
  "key47": "24Jic6u7H2zxXHqa6rcyZYsuKrdNpCJoUtbrDzTD9wU9C8cVAcoMGtLyt8RCxTWUQB1Pf5DucVuqteMc3WZHAU97"
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
