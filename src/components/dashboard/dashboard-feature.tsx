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
    "2QsTxX7hF8DRPorpzkCW1mi4j4ucK8c5JwQx9hTHXmJuSpJn3byZXn7xE1PwEUkYST5r41Qr5wgyGMMVxX1fnb4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XjPAoiqE3ZvtCadUFRX8Jqnuv7p6RiXZnLmQyZysCwTpKfZ6ogRbHAoNEe2yudHPcHyGy68HP8Aijp2pGEQ9xdG",
  "key1": "4xdGpMDr9HjZ1ZwYsE5gaGEB1bdiF3gxbtAQ4tjZegNf9kF7BShN9cAu9AT7LRNwC6pTbJ6dYPAzqq6ESnBvPtyv",
  "key2": "4jCmrrXDYSqUVXs1e4t97EDzJG6saLgpqqZUF1Ah7f48vCmHDbxPkuSn2TNYqJo8Rje5M9zoZo7DNtUe2TncMeED",
  "key3": "3kHHyaQsNZoCgni13u5HNqKLA2oboF896oMtKzBTMDcpGNrWgbR5ugbzgmgfnL3xt83qVTUdt4bfdZgCKn4YyDQN",
  "key4": "3RedSTXK5iNC4DpRegLYPx2dwrNJ1PDgFTLxQq9pBmWMf8yDbjoV6pgVxy2LvkQvyLiymp1APJyhhgfKJ8TmWFUP",
  "key5": "42Y71mzqiW1t6BncX6meeiK9RnxUaSjFaXFv8JkwGEk6VagQWbr2Vb8euxRjVS1hB3WmfGi2Urw4yCZ3BUrwZTUx",
  "key6": "3Jgf19uBZ4AKECbPCaCeoUaXWLBty1SPUdfBty3DnaVrf96Mt9pC6w6Uvm5YLt5s2QmHx2EZJwZNAjmfv1XBDVWK",
  "key7": "2yQtyNWiXVhaqbf9San7DQYD3p5x4GzSs16c2iyBFjqUHP7KhyyViNZF7fw9PAJtYmdqRy2F4gWseu8R6XJdFJn3",
  "key8": "5oANxQbrSUhJdbXgRNEirRgfgFVptk3mfdAsvsjnDrtToLN1p66indMKp2ew5azjTcVaBZSJdZEvq5Z5Vdf6Hxzj",
  "key9": "3viEeHkzffJ2EMGYRd4uDe4aLG1wbE5TZFTG6SD5L359QNWozZNUgV6rhoCoZBiE892yRjjPyQqfFcgmboeVrmza",
  "key10": "26mSWP5pMe9bKW86L9aCcJSxZXekD6Y7EDPCi7pNjadgFbVsCfWGUUpBB22JUN3fLFpbyAM4Us8Wm4BWRviL1RR4",
  "key11": "4T3V3nkhjtmSweizVohtCoYctMyqX3X7JeTUvonmVZniNLXqtKyoXkhg65k6C6vTLtdTmW21dMQipft4YQCqpTmM",
  "key12": "1y6JLf6ukPu62VWZe8RvD7XuPFaQgKX6JxmMqinK8hm6ijzpB3uaWT2ZG66CUHV5hZiMjdW1d6QEU5N8RxHS74V",
  "key13": "2WHyfmmEhE91jGhYw8wU2z2LJJVNvLTLgzYMfXkXrH3XvTuaTPaYNYsaJ2TeRps7UpEAEt3TVzkcnvmJkko66eQY",
  "key14": "3U1j5KEC78AEvVg6xyQuJxeAZcpx9qWMGUvknpM6uk4NC1VMZbcZNcSk2trQFdhxfJBHZCcrvrp8fuTzwJe5pkii",
  "key15": "dg81aiSBy1iUoHmCnVAAdRH2k79LLJc6jFj99FXoTskW86AdQfNrch76mzXk31HQkma8NxnvZKz97Ceud3nosxr",
  "key16": "ooodKLYVHSnt32KSRRKCJje76pBE6bWBwFNwhFPjJshiPjrFe6VvQr5gyodwzfxg2wDan5SeC89JGWox876Aupp",
  "key17": "4Z6Z76AAwdp5x523KXrMZDSdHJGWwN2Y6vPEw5FFGx9HqdUArfX6y8Hn6s73WdT1geU19dEwjpsDb8V9bCW9PxQp",
  "key18": "5kZi1rD2AeG8aHsge15BXm6RgZbVrAtvcTTvXkWD24gMXcFW3k8AqM8tkWdcMGF3kuzyF72X6d5fhFqoVxcJBdTC",
  "key19": "2jP4ZQyTpkbtnrNZw8g2k62qeBjC9Q6qLALhq2NSLPNWyqbaaA2JYmCnnGHJJQvMP6JC83RiLyuCmyXZcbnJb8Fj",
  "key20": "4dRs7sdUmzVX3k8jaomsyii7qymqC51M7Losa2Vbw87MC24WYRfRP55cBSzoH6vXshQ2DzqNWb4XByiGNJvprMSp",
  "key21": "2ZUpShqnsGqv9yKytaym3zB9FztLf6NymHeB1KBy7uL8FB724E4TVwHbCyZyvq9pHNsAJBUwiztD1CL9GuXZomcP",
  "key22": "3doVfESMsPtLz27gYmq6nncSQyU8kd2Z6WcZNsuVeBX2tetVp6YGcKbBREhRp8VRK2JBcRB54hFKCvj6BPuRz3eF",
  "key23": "4aDGPtyAgrxwmEta5evYzkfmWTtnWMQpaXeGqLmFxkpnDNApRx5XYkeYrXMEY6Gu32bQ2Z5pB5n6Fipop2KWVsrT",
  "key24": "52LVqNBiGDktVssYH8zPBGyyAinVp9Jz99pPjMd5gtLV11ide7ovryd87zDqznbVtj8gU28QufmnToE4RTFVhwDn",
  "key25": "3jWCNSLxopA1B5j4j7fRE5aJzeavyr1vt5tRoNWuaPDm2qCJ8XoypR8VkQPj2D81Mb98hWkyfUxkfx6WX5EytReC",
  "key26": "5jGFWZe7zGEPnV92FHJ4GUoLZW78S64afjsy54zEHJsJdFqL1oEfkwwa5sxumNrP6vSjybThfk1LaYXUANZsRx1g",
  "key27": "4myRpt5xFZ9Q1z2mMDVqson3spC8zfAmZWewKF7MUt9a4naHu9WmxeMVXkdZC73Gh8vjNrrfNaFfDMVKhaTTK71X",
  "key28": "3Dup2Ajy4mrEvHA4EXS1PMkEj67RvH8iczLmrRAbaEinRiuNpwB6zrfb9aijM4F1wBytVYqLzYQyjmWnSD1CF63u",
  "key29": "5Yt27JeYLqWuaPoz835JK7i1whcbBM3mvobgHvvHJY6eNevwtUHbsnozYnNZX76VfUiGWwrccLcUck81jQNZDEvd",
  "key30": "SmHqhLLpMgPfuds11pK6Dz6wVoEB4BZojeiLfHE3QdtE2TPpwt6mGQcEzg9WHZuRtpRgBafJ5kunFAVkoktZZxr",
  "key31": "62ghYYkp6qvBmU37g6URKNjBBPUbyoYKuod9pCEhSeUafH5cYmPgmZayU5bEiPe34YABU8NwdZkUXpue31NEyK1A",
  "key32": "3Eb3wAp5dteeKmepjEdR1UjBxj2jfhDHfNyopyLugVK4JVk5KWHUJNUQ3BEh6CgKZgHFr6eYWNSjPF9oM7icjFxx",
  "key33": "3P7fwMi3hRrbQAApdWKEgVwWjn4hSVoC76ZcmbXs22S3ZUqhzAMD9VhHgfgdoEiLSUj1zLKoAj2B7fDoDrjzmHgc",
  "key34": "55QiQ393RnufVqY8uemnSQYjpiU5ZvGDNbJYZqxfhzgznXNwtVW5snkLu96ZUZhJQxtgPLhVC2sBNrSdR84Xdo1j",
  "key35": "48NZmwMLQuY2t6ZTwN78wYTGXvnT8RCVTfxa5ax6GhcaT5PyENTZTHvmLik4DRX6T1RpRR545yVt6XHNktzBZkfB",
  "key36": "2KUSBkiccQMcMchzngDbggxLtKamVK8BtBnaWZL72CX9KovuQWTjio1pMfM9De6KHvnfma1fHMNRdsrPigjwpHt9",
  "key37": "3P24jXHQkBeeSNSsz8DDfxWAsniXybqTupskQyXZNWJb2MYWJP4oyxVpgHrH7siDSfd4T731VCAsEy9Jffk1jnDG",
  "key38": "5MDMt6tkF5BBWZSujGKybtmNWmqUcx5hw4Kv95a7rwvQ8PZw1Ku1M4KLYKsdiEbKrZobfhsfNroQqQqesXBMWsBG",
  "key39": "jnNuEHwBgnwE7jV3j8H5jy7TDcRmj7pQSGAW4ABzfY95JLkq76pA5Hd9PgRFrWpcggrh3YCSgEmizSymJxeZ154",
  "key40": "2BjZCci3qRvPvLgzzEhwW2VvW5xtxAyiVQYLvMc4zENRP9BEawur4P4TgyLKrXVr84CCEcKF8dUfJX97UXn3E99R",
  "key41": "2r9JnkeHGo6XrEfAAhhrVkM1CHKeWAKzn2hm77ac3XVBiuzRfptRpedrRuPEExik69ZhgyEr2D1xgP6hZgLLx4HK",
  "key42": "3sh93TT3uijRc4Xs4N7W1F3DP7sEUuoDkL3WXXfk8UXa5TxuELrBvVNNbrDH3Wav6TcebMCV68pM7pJsNvT87DA",
  "key43": "5qrzRkBT3DWZfRLXrLxRTGBkJRxHBmdYVmT5FdsyFUtqvGd2tsnFmQjq42r2N2B4ZXHvtW3Pk63uLeamQqNsVZvt",
  "key44": "tc5AfyxZukKRgC4NiddKBxejqqgZ8BAwCwhpBo8o6h8RjgyVN3mZmmfstejPAr3fbwbWfh6qvksnHiLTWA7bFKL"
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
