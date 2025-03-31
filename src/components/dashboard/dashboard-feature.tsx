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
    "5KfPZkFvHFLvQGrufvkR6ceGXVaiSiuuFkpxEWj64tLombSgD68mDGMHw1zyALGZnru5cR9MAqzgbWfhTxt3WAGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fJ9XpkSWrUHviLDkabbkskyiYJgQCwipQUFLixXXZ5EcFHQRTHJ6WC2cJAx83o53UjJurDNb5Ywk5BsM4auvVGK",
  "key1": "5Kudt242T4i5cndke4ypCGj8UiLuYTcNySWAvUbrmcsLYnVu1tq8nkdiCyAMYCLeWqDvbwPkPyLVuz9hsDngWmiy",
  "key2": "kXyHYMn5rGACxpF7myQGtNvoUs7yPihZq7gcgB52pRLgFw6zhKu4dJmFe31wauAdupnGmYzPNmJdq29JLrJE8vG",
  "key3": "4XEqNkunEEjXzzxzpGnjDMHfawi4rUgnHv2RtxBH78pLxwfX9QD5tLkxrcVgEGJw45BQwSPek9weURkWPwY1oRfH",
  "key4": "LQxD4VRwHnuW5ssGL1m7PyeA7pHBSq3nEQzwNgsTY7ifRMphjQCqCDyTAUgxtrCMCu7sYBjTfZwbwH6fyV7HCK7",
  "key5": "5wZ6T9vY9p2wVaVoLJmYvZKsWRNecnXLWJQpSStidG6XcbMGX1EPvzUhFheJTbw39o42tCA6mY3AYmSR3GACjNzx",
  "key6": "5NQfG8VMGNbqDMZYh5QixzkpXZB7fBg1VhqjPUi6ypaCUz5YGPWiaWUr1JuAijnFGyH4zBNt9oaiUSRApEjD574A",
  "key7": "3Bz89bqnqV8QWn4gmDPQ9KtfUvHiHt4Ro68rJMftE7TS4rV1kGu8MunYWaz8EbdpqWQzBfkvMaA7wdkMinxoNFu3",
  "key8": "5CuCmpVneDh2fS5Q9ZV7doJZoauxudhBqewDvTNzG2tPwdZ8TGjWkLDerKVaDhM9Vww3cSrHmWM1oikMdNjZu11F",
  "key9": "ZjdkcwXoyzVqeLJVgzfAhB7XSiLLmEPDD54cbVdseMfJKx95wd4G5bQFNxbLdWPtzrCzpzjba7WATXJBv3EmvCm",
  "key10": "2EMsLpy3hbtfxCBsi4FNiFHAmMdib9JV5fTEdg9atv4kQmq5bfktz7qYBQVqQfzB9E6Hga1vrHXh2EM9z2iKnd5H",
  "key11": "5XSSGymYrMsNFJ1kQ9KM4aurNDvoxuPQynZt2try8NurU8ucRte9ju9pQxVTKKGbfoEKQ7GaXRM5JRWtvhvUD8jo",
  "key12": "4jF7vDHnQ1kCSbFZZ4Prr5ADCGGkfx2WXqhCka78PhAQMNFvXMmFoUvjow8KDMFHfdfnwSHHiWyeaXzHSE7DAY6b",
  "key13": "5Cwf9M9vyGRNVeA4sbnPExxuuC3RcHGNQZTbAcVnf8habzP8FJw3waoG3LeiMCYfJh8NoSxCLEjwym568RbvB63p",
  "key14": "4CjRHnQ3pwpNXLASxBJZpMUZ3aX3TVX11TjU1mj9sWeCw2egPNywY8a4pLpyxHxWUvQyHGpVSN6kDgLFRX1HP5Zk",
  "key15": "4r597kqwyo1wAgKe2b8r5QZx1HTMQXXEhefidK3YJdGaEgjanBnz7FYkAuLFMTVoeLKoJ5AWZMrVugRHMe44sH1m",
  "key16": "2aHuG3TmbrZmiaeiDaSiJNy6cjvMgMtLEZgu6ReNVGCXuTNoDxDyeC6mwEM9NvZnAjo9fcr6kmPt75M59MfSJGU5",
  "key17": "2vaMLAwKSgdSAarGjLTN1Ta7sgqNT2xLzfPU99S93WNkyDgoW4jcKb9Fqc19bn6xzr3AjrWqj5fDfCHVTDS3P8s5",
  "key18": "3aw7TbapmNzu5DQELbgfYBjxoJKgyJ6CrRV4hcSKydjneFpvqf2yEjuocRk4FPzhHg4yCo8mRzyexvpjG1Hep6gk",
  "key19": "5J8dj8p4uKGqW9amrPpqaunshFZeMH15FN94A4LdYqHMuUij5CfDM9rHMURxrcwWxmhNf3v58VQToSwghmM9HvGE",
  "key20": "4hFBMJUDz8JZ52eJ33EFpGijQm76ZQEywsgbo728S9MhADsg4uKGLqq5Gr89vpZNMmCE9EvRVsVh3zce6K2MTJd7",
  "key21": "2U3xEJThdwxKXtS5YD5KZYnraW6Ha7ExGtLvX2LDtiAw35iwimu8ay8cX1tjDkSkSNGCX1wqRdEYmtP5y57quWy6",
  "key22": "38VEsQhf6bRT5cepJAciu32DamAXY7vc7nRZnNPrdqFZcXNmwcAkhT2EKV4mUoTgFMXm6KrUXY6bLwzyKQ9TZevV",
  "key23": "5Q7AA9GJuQYizy6cZkjyHKXC96pppGnu7ctaVPjaXHiMhq6wbK21yfhniAFvaLxvXMDmKpfc8ig9YR3TKnJ7c35p",
  "key24": "3yw6UW74VRn5fJEThvkaYmbuBUWvQfWfJqnMymcMbupFwtoiGi4SJ1Hx32zkC6udT2foQ29j7ufMASJr6nmnoTHs",
  "key25": "47AS93W5BwUUyQMNdeSGsmZ6kwX46Ywsemcc6GDH5PEgcw9ZYBRiiFz7YmwRv8n7yuxT1KWPYggghVBrWP4MDH8x",
  "key26": "3pu5YLpeX8biT5jTsyGi85fLGTu83NMcGHS3jxvACJEXXEsPzas3Bi3RXeMdEjxmsMHSjWu5RZtquT1K6sXvWe9d",
  "key27": "22SboBzxFtVVrdtRiBwZy2YgoHodj9HshxTG8dgAenMC9fi6PWaG5hkg7ZE4amkY15ByzAh46MjwM8cJ7s7NLVAK",
  "key28": "2WrcAXUSB3gC2EQ7tFy4hvfj7pZV1FYyMAQDEJ7fK5u7q3oGfDa8nXXyAvZuPTxCDHxJznozfGMm9pYcT7YuNLSF",
  "key29": "2uUXhExnJ2jdJk2KY7GZp6LtN4njHxtZqBEPKqSe9XZoKKV9WkvauDMbTVKupK3NiCgd3Nf292ZQQ5mei7iMssyL",
  "key30": "3tb4wS3YVt3qTdVvDu2FkBVAJKf4w4qTmjo4ZBqq4npiBBVQxieJm9v3x4vAu8omLWDgAZv1UjNmWvwayBueH3Z7",
  "key31": "2tsovTwfYve5pSWHLrwfbmU4R7jeJ68NUeR4cCWwcD6jkC5ikeQpZRhwtj99Bi9NME8zECGN6M2HwsbesfbKDqET",
  "key32": "5z65D7PvB31VUU438ybUMxqBrnBDx1W2J2RSGSm8ZKQZSCRVq2nayBdvHuvvVjK37YCfY5Rx2JLjDorY3vjBv9Np",
  "key33": "2pNXHPGH1EHVDNQ4tPwjFYDxaPN8EL1i6JrT1jyC7U2ceVrxBDwuCggPcJb1cRSbp7k6dz7aytmFWPSdFRn49mR5",
  "key34": "32LFmcYZNhkJPyqv1H7QdCVR81DZrKK4AQubsWCjZ98ncNqjBPApbCpoTcARMQAYQ4cjRWc6V6Yf8RFfVPdDNJNr",
  "key35": "2XSCJkd9RdAkm9NnpKCYCq1k9PqmrWosdGxzTA4S95XNeV5oCB92uuzpihqFMWanBeYMNB8ELY5CXh2wchjT4b8s",
  "key36": "592mJBQcc1JsBxeh1w6RWo8imoTW1RxEGZqgzTq2ttk52AFAdi2uxMhQoEgFGZvUZfxCDQFyBvjgMCcQNvFsKZBn",
  "key37": "39db9MZRa42BbMXd5e3zGtye6GJBxauRySh1JtPqsnqJhQMhBwEKuXhKdtcKsEYM6smpLJMzXeudw6RiKiA9PF54",
  "key38": "4BfdEP1o8JKC8peCbjEJri8j8KHNcT5LEoxrUo88ptXDCiZNPnjWYhjUmzrxu6GX2s14wSP2jTWhhACirMA58wBd",
  "key39": "574dWrXBh6NpUQqKqRQp9S51ZTZGLrPx4hBXPVgfjGaBRdzJgbvVYrhNviZEPbPXzhGLqYPaQNqNFicvHejhjSZL",
  "key40": "3skZvv2ngc5Uj4rEN4DwGf1hvke4QnaCCHAjHypNDm3LkKAXnvA5jk8rZN4fp5bEvJtCLrCzjZk8uS8hijTJzzb4",
  "key41": "5er9JnGCYQ7bYekPJiybSmY2Y2N3msfQ6EVJ64cWpWEYFkn8W4EywEMTG8gzrtZ8qjasPieV919bUeoG8E7s93oV"
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
