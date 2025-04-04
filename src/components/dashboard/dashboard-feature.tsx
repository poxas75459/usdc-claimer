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
    "513443HNGGkMesczXyVYnHqYig3GwVjZkJXyHCV2CeReXhJj9d1t8hn5p2qQvBAvzEPHB5DWK4QdNDg7pYYnG1pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ART35xkuMcQDdV9wGWCvw9Dc1qbnF6KR9TsyBcF8kA7NBUaX7jsFkg6hm2He6dtL27kUzjanqR7cUZdwp6zz2h",
  "key1": "2hEp3GkJpBsGntdYauc8CpsDmTX64xW5xYU85cC3pi32KaoNVwi5eafxcy1Ai5ofZUqjFa1RgHNFdpUhiRpmme7a",
  "key2": "1DoTcZPgK1ZMp12FpTszNzgZ3RmXavYaQybg34HqcRFEC9rd2XvN98FdtHTpKnQWBttYyMhMSooS4xsVZGcn1Ry",
  "key3": "5maaJnKk1SBaY7sTEmNqSj3JWq5XQAk23fG9CPNyRWZLRnS8Ku2upysg7WHB5P3AqubCxod15T3ZhdnCY83j1NRf",
  "key4": "4RevNq4xCB4vYo8BYKYSB5vJgcJDCkBxgwCEV78iRHHNicU2V54pXVhwjJ2oRHimmCByypqi6dWwBgUnPRiMjXbP",
  "key5": "NKToxMvbjpCDNE9JTDzeG52TgAcHKe2itxXQ3s1CNcDA51sNRhMDksD3ohMZjz43b59PskYXVyc1X3qRttvpHvD",
  "key6": "4yKkPzHHFkFP127HHRNjkeAntPYssFgnbUaJUgL249bktUNaChNSELpm1zGGk6ASTEqwTyAmtFRoyeZVRrmN96kb",
  "key7": "4wE4ZbnJoNRhEyYR4UaGbKRRM27NCKnnb4U57ZJXfKr8dSYDqvHTq6Rne1d74YBqbDSuME7D2zDHm5z1Mhp7LDwP",
  "key8": "3j97ELsS4my9NByPZPHnsRAZNdoDPzSLdN45NLJ15fQbWicGgEKvWaKjviR7d4YR1uUXsST8B8uGVwqdzcJsyGK9",
  "key9": "AxWhTWYq43MZeErekg9on9DR2aNvX2qNeZYJq6ZQaouDDbzbkQ49EKy7JtenRNqYUcHQWjSEacYRdnuNBCFDeGQ",
  "key10": "rZP3aFvuRmSJmw9rCuLHbstVHLRZadENtzLRF6WKhWRe8irMxd4Zxz2QiCKXKEk8BPUn29RsqAi9CdwVNt7nLsx",
  "key11": "3rhNEpaSkSxSJTvGcxszLbzQaeK6ryANTR8z3X4P1gexktC1ErTheoFL6ESB9ZvDvXqS9ssAb75KeS56b6QWbqhZ",
  "key12": "3GZckDJ3Ldn9HniQ1DTiasZ5ZSoM6SjEDq5SdcFfCSNJw8ELbqhybJMsy26CKPoG6E6yGMtSmQyDkoAeftrMKBiE",
  "key13": "FQ1g223PeYCLQMNEJXTuKzExtyZ1hrMjeksXEhd5hVxbf1c8GRFnY1a96riqhf6HgSNqR1YgkmKL7YyL5yNNDaN",
  "key14": "j5k1aLHJT6KHzrU8DBu658WnMr6dyjUtZ6sLYycw28fajru1EPtKP7SWknRLeqX5oXXV61cHDanM9TmKS63wjcY",
  "key15": "3fMCjeCqNDYPuRTnhoWPiXHL1NHBDPtwLHQttAGLPwMwqbYj8uPN7MvfHq5xbveXrka6eqmb9KPodFE7UDP86BAW",
  "key16": "5Uv52kkgwgx5MYw8MAAaTQHDeJzd7Bv7CwFjMVtWvhE8Zz4xvD5H1GMcjuarwm8DhCu3gjtMSUgzFbabFfG94EaJ",
  "key17": "2YXzyYHg1veWF5DARWLdqCDVe9QSmsquByH9YC5N4WZ5HD5ALzca61HzuzbXabw6koPvDf9YgWeYwywzR8d1tqAq",
  "key18": "kZjYw5cMDUmLkrbmzKriA1DxuK6stXy3UjYy9Dq9DDau2RP47r8FwdtdNNQpfpgewUHSMy6WPhCMqDYU4xDyNx6",
  "key19": "3s8zyUSKfRDnP6cxGCKPHFha8qiSLb6Cf6C3iXJrLGafWjR9TiRx6DXbFa7UwSUkd2XUAZPKsAU4eAY24DAbBDMB",
  "key20": "2hm2oRtScEc2afw6x9qjKBeLEHud6DRP1EdaKPp3WQNFVJNT2bbQvhwaz2syozUL2pNofMLBSRQPVUvc1T1cngR8",
  "key21": "3oXZ8tTq5eFYrd2SfUrEW5Uc862Tw6Mpr8WAPo7uEFx1hmuzfwTuz2bqfB7J9MLoSd3GuwyRa2hVERnS41hojEVk",
  "key22": "k9SoxG48phBj3BAoUmGQiGKKiZAKnps7jwkGvkKp5bAZSrv5bd8L9EwhtSpUxbU8mTEDo4d3ige7rzqcmucpExM",
  "key23": "5s5exhe561MwT2ev8AT3NzSrXMZybSzpDi5Rnfmz8yG9jaaMjR8mEGEwRzFMkvJ3mJZVqb2JyhLJUsu4AL8QotMe",
  "key24": "MNYtPPa9ugDw4kFKFyCJ3S6citQiin97nCXyUKvVvdiUEPoDDasZcRHYn3eJqK5TCm9Vsm94snTKpMmSZNLnYtG",
  "key25": "3RrMwWMfWuDdivoc9hkR4MrnE7megUiA9Hyp2QsDCnJF8JispybRU7xjdLGLHYLVFNNq7E8Dghvbzyyfy7qu7G4F",
  "key26": "5zbBJ56btZGyuHQXDjoDaYUWmzDqNVvRaibz1Di9yMAt8rtr6VkM1cW3yzuZxoHX9mZYcAs5z9YT7tg83ti4mUAv",
  "key27": "53PaAo2kYajRCMLiQHe39x4kQ8JaaeUJdqYgqGwhQvk6Q8N9Qf5g6UQfoB5dsw5HvQgZZqDKfxJbQvQhg9DFxcsJ",
  "key28": "VkoeW4iqVRk1jDPk3yVvjZuHwoSRxW14V37rYA66R2DKJenTVfuuiZDpXMKBRnPtZ5KLgXZJZxhZKNaMVCZpWV1",
  "key29": "2mmzAq4hELdLhcwWpMj9rfKdJFQGs4edHpvY6KkVVtHeZsihpNiqizcQHysBfaHjjp3DuHv5RREUNWQELGNbx98N",
  "key30": "4SDtHTfoRw1o8YWVUogoWe1djdmWVAqNe6cUoCGJgBq7fzyBkJjGQebM6iZitT1RnceXPAnFMNjHFY4gPmcBoLbk",
  "key31": "48989XfuopHYX1W82Cei5k5R458w3J8abGwY6PEaoD3vmHu8vjU8ccqW2wMadtuV28BuEseGAbbq1ieyxHSeU4PK",
  "key32": "5eyV6GPVMYUYwnEjD1xiaUCbqDX7FJhen3bwGVTb1uiPJtq6CAkzpga59HNCoCsKY35EuXJ5QNphrTB7bFk5i2S6",
  "key33": "4w4sW8MLZR5DzHobiAEryFKUorjBmJsMSgZuP8CEELKsQTQJgFQnagaBrkPZR3tF7on9dqtu3Gx2ydudcnRKtEjf",
  "key34": "2dhJrsJi5yhvDM9SQM6itPLrEjqRNAsqcXhCkjkqAZixFFunU5R9HcAf8scwqF5ALTnoDFKb2PUXDdvRnANf6yap",
  "key35": "62nNzFTsktEDqHZTM5vXqFRErFX7hXt7XN9fLQHnbGW2pAkx1LCPUCAJQiMiybBVgESMxQeYZfyaXYZcrZ7Lj4GP",
  "key36": "2yMcBVzSCF2WAHcYs1wWmhJinTwePMDg3UHnF7XwyBchKmfmK1DEp7y8MhGAPEhHN5RDreayKNSfYHsK33fdguWX",
  "key37": "3hgfsHsW6FCzs6nG2SMdmxUV7zZ2S9JkQtMj9biTFzzSmnzXP41APi2YVjQdZ5htui9qiuNpYEhYJyr1DeQMJuyd",
  "key38": "4jx1fw8F33USatpRxfQF5XcT6e9m1GBhBWdzjuUwukqbinARkTT2mCk1jw2BwZsR7fonEaJLCCfmpkr2PM5SZAaW",
  "key39": "4XwscMvjLNcBxDW47Eh1awf2SNKhyKr8ezs3LPHi2XaNBmjCxT1U2ZjETHqVehcuvm66wuXyjgjcmHcmL15EkXSR",
  "key40": "3VJ57yb6vVYbYGeG479UJt6Jee9WBjwnQwDfvSywbkfvDN1cssc7gUZoP55KjmJNQSpwKZzYAbdmwY6QsUPPwN3i",
  "key41": "5PCBryZ3DTENHcRYMXivbzUYFMoKez2CfMTMeGUALa6Nw4hnLXPTHEvcT1ZvvH7wv5isYFRtQYA5qhnvPq67S6ts",
  "key42": "5J4sCB5rpjipz8Lq4t1ETMZ28aEDuW77e4SNnAUXecuK4GS1MLDUzh8MocBwQyGScFWS9NXsrcnEcbEUwz53VD3X",
  "key43": "3BsSWTjDcXjSRE71VsBdy3gcFWKpgYUCAstzXdXbv7HR46dXJcadpCUXPPok35SsAHNmvmnHykwLJLMigYas6rEJ",
  "key44": "5V94iaphPP4iLwjM162Kzg7U1gBkDTvHfBYKMFcD9q3amgu9RBuD1zeTbmdUbYVBkrj2813VVoucfUXH414vBnPE",
  "key45": "3Zj7KZWhnkmgcaL1bJmp9qtMWrAkH2uMc7exYpQVoEK9UyCkdBD7KuWcmZ7s6pPVU1ZBHUsUTkv85bz9SXs1A2cg",
  "key46": "6nLQNpQG8hW7gKJYzhE1kDKuxnFXNRdJqSQfnYxxgxiNZiA7h3KVwpT1htfvDVThwrpLduHNYtLM7XBz2PWUsVX",
  "key47": "6dYG4q4FVqLeS1rZwWsWcNXDCsZMr9qMBmEGyCwW5MJ4aRmEsYPFciN7kZa26id258y6r3Wg55TEW3xMxxEZsdM",
  "key48": "Ae4F75YweQDHtqzr8HMiEG1zrBDBeLz7KwLmoXdvFapgsDGpTQyz4rgHzctJUF7LunzfVsgQzcAQJ6ERgZ1SLse"
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
