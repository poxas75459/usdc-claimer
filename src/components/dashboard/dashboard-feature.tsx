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
    "3CHcbTeTTvERMMVPHcQw76nUkkA2dynrSyEJyXnsrzJdCeaPjDrdzpFcdBrheECUpcX7mgFqDDPyH8vUF49WeMfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okUyyP6uY2hEZ2QzDwajZ12zsfXKZpxjbjCKYAoVmh7jmerDy56DKGEARHBhNqsdkA2qwgrkHVtQp1wSeYabsig",
  "key1": "ZhBB9RnANKuPCC8CA4YFmni3AhTPD3nrveAAoRWVjy6Rqycnm1wBxChfBSF9Xw1MskfQZEu4gEVyzi5mScbCavj",
  "key2": "5Bnn4hBjer5W8HDvjydsBtHAsmyMf92o8whZ4AF6p8K3BXsiTR7DHq3XqkWxEwrY7KyAiNCwRhuwsqfF4nwSSW2Y",
  "key3": "39AjFHLYjiatJnmbyfSJ8Y7PBakT4xMaDYdPX3CNmFc35Mhn6uPBbdfbY8otFrrVXShK8b6eynxQMBBwinxXJxky",
  "key4": "5nVdNrPCkdMMignuG6nGxz8Rg3JGKW2jRu88vDdwoAsDciyAUbA2hFjKKHHHW6f6GUUQBxNs6ed6dsc3SJJLzzrv",
  "key5": "H7vhTPs1skJRMx4jCtoxaYkhVeJRuQqeCNJcvn2fSHGvsrU289aJbGqZFir2zAyi3VDt1zRBRNdppvcPrVKyN3R",
  "key6": "4HNDjSpfdBKq3b2LMr2skM9xi8SyDrAxAZRTKezwzLn7yjD6MsAjiKA8pNQp4rQRPzHZhZ5SDNp347ZGXMhs3AHr",
  "key7": "5urCCh6zTXgvDSZBPx4BTsrkGH8DTJjGxsztDCxx6CWfrxy2SGMEy1DLQjcxPsXf88osrpX4vnrXCzVYBvfr2sJt",
  "key8": "4n2ktXWK183SpeH6v5evYEqRDAif8Xk6mKDnjqQVJbVrGGAJFTiFjEiPnGPK4aE4LWU4PLACjehcMEW21JoaHLM7",
  "key9": "3vY6bfZSoxMtucjTEEsh5pQkMaixWJnb1pSH2SkHoBKAVzpkj4nQBE7CotsRuAmuoFHW611YbvwvMvHvsaTqfFNk",
  "key10": "4hh8DrwPbqtFzbbxb5pAdG6DYkLeZ4986r12Zc6S542QtZm1h6drUVyYvz6ja1eDaqKGWg7QjEbNA25o6Aa8PL9e",
  "key11": "2TFafvZxPKCYEdaYRNm6D12K9BopodwjAuYUt4ucPbZhf4ikJndMQiGEm5Q36h3WazWvkEQ2Qk4Ski7UTQbaFNwQ",
  "key12": "3rddY7uyFWmMwsQFQpVnm5BtwaxprxNQewpYYdxqS6kcKnjvCPAMWt2TCXixVehkdGBRHTrq96c93b8utVSW2ePh",
  "key13": "UZzS7pEJ7YuMZTfJUvPaNq6oAQM3S5868Sb1ds2RSXJPyosXzX3ugr61FDdNSRHxde7SnUa7thX1TJEXei51p2P",
  "key14": "4mN3gaDRA7XCW6SEDAYEA9LCoeiLvXDnjQSdUAvLXcZjzAtPVqCj6wL3Lwk6t75JyQGP3uz6s6XC8wUL4SPvjm6r",
  "key15": "4dHomVBLcFvzrUkx715qrkrkX9KjQcxiNXFkWBYYDU84APABW6g4nFNg6Ec9E1PFYHX19kSMgaJGQ73QHw3kxpUo",
  "key16": "5UsCM2CRPGYq6ua66cRVGADtzH2XFd6x9ovgCuRR5yAYaEaf42pKXh2fSuFRk6GkmQnWtDLb5ZPqhpkZhaAxtQ1f",
  "key17": "2V9NVaQDDuHkcrh8GSvaoso9PSUbXbxgk2dqrYgkCVTAG1e64t8Lvg7sUAP3UeR2zboyTHuwnYwwoLyqwUwTRn81",
  "key18": "Ra7Zk73bTXzAF6hPvi31bpERCZDv8xdhDCMHQAgSekQKCttULYh4apNsULS8wijF9GeT99q1AT3dSAL5C7ZGCag",
  "key19": "TvopZ8P9huZ2HGHWN64chCSzTJ8Z66VVHMKavo7JxEDUiAinLxwAdXb7VQUbtK9qLmR9xtR8koP87QMeTaXCTPC",
  "key20": "2HXPCd4UNF8NBSLeVEPj6GGhkCDm2BzjHDgqfvvxw3Gg2KMy7GDzySkdeegXigYD6r8EWwEjvPnrskjDwueJWn2d",
  "key21": "2Y6g4R2xQAkSYubZRqSgNUkdWJYUuwNcFPSJWQ1VtbZu146XWzuWyMXbijzXHrgJ9Pst13jVXr6k2unZ6rdvyriL",
  "key22": "5aWdS7BU5bJSfb1X7omC3SH7ay6A7BnF5dBRH5p6je2wgPSQjHEQNiQgzTTxbm4eXSVGwKXvXSo5sUFTQFPpDJ6J",
  "key23": "5LsZARbMuiXVpjMtkUoVPHfHZnnFtGEptC9e1JSs48vRhbUAenwYNagnRfU7VUmutJAsmw1AEnETs73q3dp24WhP",
  "key24": "3oRMnLBa1YF1HnoW1HeTtdZiouSAnigLCUdiBNKzfU9YVc3kJkQb4e7mYSAU2B2skGsiBsyWy85N6UZUxkA9wznc",
  "key25": "5vhkhheeZQqgDoSsn1gHKjpnDpsh3fb6RJbNAC3Bnyt1hpKgu1kJamusEku4RJWuBQJDkZkVznMLvkeZZRTPr2d3",
  "key26": "5JQctfyvmvUsgii2TVV22UrWVkmCxbdSHUfCwwZXyHCUyXtfaKhYpH2dWyRK3zTACCtsHKiLrCsQWdYsKnwkXD6p",
  "key27": "H4EXpj6P5G64CdUiFyoePjtjdxqSJsAqu749fM1RriCfXY9sXjoqBGCDDGw3tajSEm7dWqAtRWZ17E3d97TdsjP",
  "key28": "5MqCRna1q1bRzNhTuREQJScgc8sJYUGEiKabrBsaovRKJpHabiD1ypC3bB4jnRavyzzt6KahEnqcqW3bkrK7TBtR",
  "key29": "2CaidYFYFU165PxLTzAxZbjYtV7W67UET2eekszi5b3qggfojVnbgqTBXyZQsNZnPiYCqqAbpnCikadXNnMaDaUp",
  "key30": "5n5zk4SPtg3Eze5DpYbaPzz2Tf5XjuyphE6hmhaRhNFvdv6PHfDwfXL5BWQrmZRiXZGdpZ1UcD9RVzGnBvVv1jEr",
  "key31": "6DEhYwovo7JufzVbs8hLAWuMsyEuiCSBFmtJwWUpnaUuBfHU1T8KjYshvA1A4WYbox9LLfvqBqbUB3Qx9jesvr9",
  "key32": "2uZN5VCBbViR131yTTpWXtgfJ8s32pmEWsQaKKKSXNGNVr82hB1DPteFrms4HkhTce2r4wu7StYo1zk3NJnxPgiG",
  "key33": "57jRDodPPUJC514t91hVWTYCpKfmiLt6byWVZT4xsjcxqvLPmMTcYL2KB6GH8hvF5fVuiqfX7GcYQ7TTx3ckAEE3",
  "key34": "icNXXRnaa9kLc2FKHDwtkBm3ZT8M8ucLwQR5KW3YMvoTfzVsLtMFbttuRh4awUbnNo6oJ93LA8DF7XFYPARGmJD",
  "key35": "SCRktS4qLPNo7MGsYxRLNkWEbRngbKRsnCyqQo2fTrgMCXyA6e3Rs6QetdW1i4ZRfbvWtaZUjHi7pGP3SWfnswV",
  "key36": "Apm1zNwhujeTb6DMs7xeD7zekHFvdppLUYDaX6RuS871j8zV1abPAgPz3oEeVe7tbBLRiztMTfMujv4oMrZLjVd",
  "key37": "3WyWfBf6a7ENKYp9kzUQD47NwLqparj6E56Yeb7FQNA1URC4yw3zbPAsdkH5xnvvanU3LvUnafu17U85V8NW11bk",
  "key38": "3SShDzLJ7vMrTiSqXnDTGL4L8U2hRqQP2EMUcENEVp5HgZFyKwE6gWZbyZLk89NqiSev1YpMrjCVXRpUDpv2DFQE",
  "key39": "36vDAbN7e4XYPxd1JHsW3nJxyNRfznf8UsGbDKeUXLuG3tc1cFWyYKW5PVibqft9d7NR6orRNZHqwRV9SZ84KwYA",
  "key40": "3W1C8GVcEXxzXJd1ExnJfyJ4GnFQNso5skxJjHGZnpQ3Fbc4aB1GaX5KdSuy667GEGNdPsLi7cHjDwC8hytK5LHs",
  "key41": "uKd7CjuyoX1bDM3kceTe6YsgJF8rNrMybsb1WtCYgTfyGCoUVQCnHZyiFUVAKgLP8yAWn66C2zccQuFTU9EPjQq",
  "key42": "3mfYizwzKMNV2xdRGxMH9LqAG5e9kL2TJpYXJ4EcfPZfXh8rnaHQnLssNeuJ8kLJq9JHa62GWenJUmmDYCWKT8eE",
  "key43": "2YCRt5FFkGYxrtR2hnWivvEgP2cUprBLq5k5jSAtUR9STDsYs1whqpkQnz8XYc6836CdfgKMAWJ4wcDrDDMyweqQ",
  "key44": "4d7eJDrR2hAKF3xjt4Kb87n8ST1MfyzphYq6XQ7xmPDUd7eucWugR8CXeHor8Yuv9MstsNi2hAAkCfqXvpYq4FqH",
  "key45": "BXUwmzzG6hHtQr9tQfvtV8q9AZ9edDMBEjRygDhxMfkc5ornwSQN499LTkNzAgatHkKmQzqtGofpYep3qjRVoq1",
  "key46": "7fH2LiVaUHjRSmnAPH9SAGnetQn7zRqBshuZ1ggpvZFz9D8LtmdJm6bKKXuAx4UMaGyaiKSJXGh7UNxanHgvn2s"
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
