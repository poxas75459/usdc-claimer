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
    "4rbmeJfy5aW8hVNQXpfoTu2gxZjUYfqDhsmQnVSGro1qjrfFjaTY7ecUDsJNfqQkGp8Kucnj8UfUiWp1RuDygrip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ai3qgw388XEEh5HWZtpRWw29p4zpJUPx9CzjHrhMLbTnYcN6GzXXZ6n9nmaoXusPsWJDZEeiTR8w3TeydKFiirj",
  "key1": "3942n6a2iqdWLR2WZisozvTpxw8WcNyNVN6tkPQc34hNSn7gmvGB5DJYW6YMgu67E1gvRNPcFdv6i5DpV8eqp2QZ",
  "key2": "3g53F5VLaSPwBKAFF14aGnidgBiqmos1KHBEgT3B1MRvkFXUo8GDB67kmzPmamoZeosesPZTS7A5zVPeyvtGK2hm",
  "key3": "3E8f1Lxr3ots65VakXAXfYTsHjsmm6zz6kBDmNuJKhdZRxxXthBGoeiYCqj4ezW9dQFk32TEPK4Hr93b34irTy2H",
  "key4": "fAHebDHKRuBbvZ9ux7Yu8c1f1YwrnotQ5vDKeKr1rpEEi5ZTmzv9TCy8A9AZoHuPtUam9eC4ERxn8b3mZuf1Wit",
  "key5": "4BUejhyZ3ss7ySncNhgR1fHWBNvd61UrP8e6BFwtVi3wmXsi2Pt55TPCzEPit2gcoUhaaQisMe1DAELvnqa1uELD",
  "key6": "3nEoPJVTDgUZL7mTixKZMa6uju5ouFvNckyLX3xbvWWHUy5x79wFd7rv3xJr55TmE9FmdSfhtzynMqcUfRSLgSvT",
  "key7": "33cfE54nrNLcuYrHCQtYtC4zoYdBW6CBYcpwHvvvkWLmGLGqjKPcd9YyRjegaBZYbcAgsN9ZBK8xEYB9kTM1xSiQ",
  "key8": "2o3mNR8Y9QoHBYVf6AYRsG1Jnqs4jbZvgVora4xiF5BJhQ7ztM9CXGhJZV5ax4bnhnJbNLb81wDM2RxwqXVXGAHH",
  "key9": "5aHxYpbdULW5byToziKTM6J2X1vTrM567EsYkj8penB5WBUx1N5vuFr6NJuFkY7ffjMPEH2zoZPU7rYcrvRR6xvy",
  "key10": "5mswZ2wpoEnhiwkyCvDWEEtPfrpsTkTxqDdpGhzbDGJQVmhxAuaqPyzhjdhnqpC7eaMWE5NUPKBRfy3V4yz8XR3y",
  "key11": "fDeHFPdraEAw7hFMYUemVJF3QiQGAH2fFR7YEgdoDcGMMJYvh5LA5ERikQMhZXZtaeRfKTXyiNxbQr3cNFZfQaY",
  "key12": "2tmBkiK4PFVKwmDDFX9v9P5QmvbsMfseDftBn2SYtyCpDCKQQVagX9gt8FJkpDkW5cjP18Nu8YfNgpY6QnWXHyFh",
  "key13": "rbVcFEMtzZ5CTJdcBFi7XttrY3DS6Uir6xGCvs5Cki5RvLgp1PUCnR5Fv99mczV1MeRURMXqEsJ6ofKEM1fGdrc",
  "key14": "21gq2nNGpJmtvcnifUnBx3ccgVjzmRbpyBwZktwn5m82MfJqxRwgVMiLbamDb97LucZ5LVxk2MaWqn6dUJkEaudE",
  "key15": "5ownnVenChXVZwevytxmbL3ebahezVFHZMcw1o8QQrJxBptfSMb5YKfJwkDSFrcZqc16QPT1LEuq7s86DXZR3b5c",
  "key16": "5veYgbMoF5LHRSwo2Cik62t8JhSgZhfDt7ViKAezvsaAbjdAmtQZwaTZozgwqYmVNhpUrhgK89kd7ft6S6hpvcfo",
  "key17": "4MBLeqyW7sdhABGdZHTXZ3vWYJFfAHZnjHYutyJFuuwQ6cv9kzAttrmrdDoyKAqzcvbnqmQVdfsaA6iDLiPCnCUx",
  "key18": "3tb8LUCW3qNstJ59Uvc5zUcjPwkrKBATD1dX9ueT5H2j6FNqPn1bLNxEi9s1EHfZ3o8192DcgngHKeJ4j8NCvF7v",
  "key19": "5SFCXnjLxPvuggLZM9hVEMUhUoQnKax6w3KGDEK8NJFZDbPqyFQhcdW9aruGVGjWihut4PgBgaNgxSSLhfYwnT3K",
  "key20": "3DzHFumqj4TvB4oj8dqpbs9nQ2nVm1bhCbcH4xNgRtGctZ8oAmUzGUM8Az9LNJhsu9VAux3NqFGkpVy7MxFD4Wze",
  "key21": "5firG88ueQsUxGV2jgoM5Fbr5TYiBFGzxqTemTWkx4zHnBUzoQMsaqmHaTm6qRtnkAGEZdZrCzrUbtnBboxUYfen",
  "key22": "4Dhcnm5LPJJe9PchV3AUygqU6PxZuqtTaCgRSFkqaRUes1RyTmCzVwptYAvndW3VPqNN5u8He2Me8NgX2v66xDYE",
  "key23": "3NoVqFQsPqTssjTHj35VgW35sdfKC8ojHLtvFKPp1shXMWBsvxaAjVSuMDHYbqL1jVBDTR1DTZB3ZKL3LWSWPEki",
  "key24": "5ffQi1EVvGUdr7Ny1XS1Upiu5KyQ2aVQHVJSRrv9ZHajGx2bKU3H6R5CsPYtGzYL2T8XsGbJpnGtiunyvho2bx5R",
  "key25": "21yp6GjemJFUmPo8T3rRk4nnuLvTnNJnTRJ9MNR3w489nqxTt2WP8Hn9SpJbyAkbcA4CSjRmezWh5u5WHQxFyfGb",
  "key26": "2XFgb7KhP4zMhhStFbqeB6uRYPnKYzaEMfWRuzkrVLzty1PtB13yTwuqU7jkCnp1g8SGqSNHB6tF7cNPnbMMLJLG",
  "key27": "sMaHZRS3uUBsq5JKNmSmdMH1XYR7xgeZJxREnQd2VckzgWAs9cjLrTnrToFwrVuWixpFipvyjP52NbMeRGh5yNu",
  "key28": "3CAQ8WCZEwUBPDyKVMYZvuBMg9UFq9ZdMPJVVWigA8msHkBjRPjcuhqpTt44sLerqSpwSRKFyLQj9W4B4FVpQxYq",
  "key29": "sdhkA7B3fJ2tWCimPZpZ61MvWtrjkVq9yX2oMTbLGCThaJfEUoLeMrHoMUr98isUL5dUSgL47GnM5HY9nExR6Fd",
  "key30": "5m6SpZayhAPbjQ8qnxiLpx4eP1ZH678zEb6zCpgt5W1nAX83mKqN2CgpUyGsomPAc6ijVoKSRDefUCSV9g6L5bjx",
  "key31": "3HCiCV9yEwXRmUBJ2SUYaoQaFNhxLhSUMyPkn38Y1QmozADv2KGsFcsJy2ieFzcbBhQcyWnuYs6mwa5oENF4C4gD",
  "key32": "51JX6ZX3gf11zencFsNjbkHcd8KHZh2HqwrMGHXBTHghgi3ptcHbxrPBtiWhonmvoa5adc3wM2uN1hpHDgZpphgd",
  "key33": "r6mTgD1TDC895KcW93s2dZfqLTEVvNSPsAuiPRgEsTr8vDDXLqAwq7hViJMq8yMsDeYDiMpsYKJvv8tS21aUAox",
  "key34": "4XbvVP4GNYya9eJXKF9wDEiYVX6dD2NJXfByWREz7C4Y5qBUQQAgkiLJSeEGefQi297VXg8TJ46dTGu7dY6e9N7",
  "key35": "2L3TVdprqGeghBPirQPufKkM4URgVLuerx76mAVQx453aR63XQNwQBzC6KRgYq7q7wvQmZdXSqJ4wHqb52piVmSa",
  "key36": "2Bmax8wGdFFA8Q94VnbLKvJGkAcrpq6jB38ZRFKpmZgekY16bKrWqzDNiWwuLMSkywUjDTxUwexMdbGFS6kc6PHd"
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
