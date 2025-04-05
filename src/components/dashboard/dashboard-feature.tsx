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
    "LL4BTzVhMB8JoUsNMs74xNDoGxWHZw6kWu6XE11H4e69BJLoWSKwsc4dahGrzkCjacERyLdr4yHJfi3A1ejfjDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zvrs3nRbE2N94fU78GxACJRwPWhUHXBdnhkNCjx1EdGaTiGyPkqMZceJsXVYasxY9yNKSbjPeiuULWn3jzFnTG3",
  "key1": "39vhUFUcBNhSB7CBM6VXkysHXXangC78LE7kSCUUcCoPvFAdKo9JoJMKvSfkxkb4AnsPcUSj6BTTvUiBRRc5YjbF",
  "key2": "4LyDjmY9puMnGTAfwkZU5T83JedVpqXQaK8kKzwdr9K7qVrVYjiM4wFMYUFWVfrvcNjnkPLDjRMPZeDxkaV9cJDS",
  "key3": "5ZgNUmVEEqtVUojuUAHJrC7jbC1ZSPyZ9ckjDoqXbH56iHrdY1BbyYRebUMuM6h9ZnjtruHr1TDhSsmgQtHtjxp5",
  "key4": "3kbXqSh5CtXuMfDAGecQZ7AteJAXXydkAruaqDYtvMCNhftzHXdRYbPgjgg8U1e3JupjJV8QHbsAheDNtaWGSF3F",
  "key5": "YwsPK5HTQGbhJDSssQbchM4vE1TiJgnTcKFt8LvUYMJGmf6nFaABvtmaACiNRx2VMCnZu1n5VGRiLCceaN3vDDr",
  "key6": "2XuhJ8zLmnRR28hD8yRkTFcEYkNjWzniRtUfTCVXbpDHKrmcCSejrTUjeFWV8hnuYGWnW2meBhyPnJ3NrXcnVahz",
  "key7": "59tfRULuoXfETfq7WBCeCD39AgEw772xzj1zXCzhQCQij1EaXDkCiqgUQKbScYM69ud9iHqMvMVRthi747oMeWKo",
  "key8": "BCoDEUdSf8LNjA1NgxPuLGeQmHCRMcfHVqvEPmjVTPGB7tCpgD9MyimoZBFdnmG7uNAAiRaBr5GxY83vB9hJX4N",
  "key9": "3NToFC3AXPrE6PDgjNHu4kWHM1a5CCvHjLQBWGp7hVCUnRntYjqT9xnaVS3GtWd4Mu8Wn4FXTPyouyDHCDM6iU2p",
  "key10": "3xFa57EDi6eeoVnLfwiaHywgmtHg6AtFbyAZo4SALLUvWArepCL48rVsHtLQ4Qurt3hktMqCqWc2tD9RBNpra6aK",
  "key11": "5WXTUAnJH62WoDvj65jif6hTuUNR3dWBPjNuRh7PUvxWXZ3KHLCoDLUXaXRJSitxZyXUfjBrZJnzyT46YsJJY5zu",
  "key12": "2YnZkZ1R7hXAbD9PEbLa7frrYdEgDKU6LqQcYxt6AK4YDHoRELgAtG8mDRLkDdie8c3gp4THFKyYmwdkhsrtECAs",
  "key13": "21sdhRSi6WbshgS913cZTg5bRspJFmqGRUeT9v2iGyngC391odgdpGyBXdfdgdCkFgTg4rNUZunsWnUR7SjSsWNT",
  "key14": "3C2ghY3nxBhY9ZNWoDCZQdTzfXagJz2BCQGTduyaDUHfuQtE5E3pTJzQHxYBXq8iUW6ATbY2WAtkbJ8M3zzTotYR",
  "key15": "3tVvKRAfJJGjaK2uwuen8iCR8vQKjyA2wn97kubeLjTRvD2X7TdPtcwJ7aApGwCjFEkK43foQ87xanvKigPdtTu3",
  "key16": "4UQLCeCXxWGcCwkzpivP22K8w6oBGD3tKTentTxGDVX8sSBPSXHkkwD1a9tGPzoTN5sC9XiSM1e3X4uGcdn3YkgJ",
  "key17": "2iWJtc8ezWnPL1yMgVNB9NZfCbUKZgo62WAwseLUH2J6GHJJDDjFX5RW4tor4BnKmKLKCwMgoZEaGc31Bg5NHL3J",
  "key18": "42e3xc2F4WPfYLNC9jg4DsQ6Sjw45sz42WmtUK6Lqm4Wy1t7F2vSNAJwikC6ZZiH6dVmHxmUC9cB67CKjDiAPqkV",
  "key19": "2B4SfsxacTrQDQYsPKCkKprWTnHQ2pMm9yePW2TrhMVDLN1MbFgpJyfq7RHSPAVRQ9CNVX77jQFMYXtpeRpVWVkg",
  "key20": "XdTDwTHXDbtXvroGrPwjF24KGSbKJG6YgZTGMzC2mq5PYhaiPj1CACyvVVeiNtGFnnzt9pyQBeVxo1pR2peMDuk",
  "key21": "421eENvCmKK3gzVXBdbmJf2fsKPt9FBXaNLkb74DKySsraxRugC56FKSERLbKbKFZwPnXMVr4gEZjibUZRgnsTtw",
  "key22": "jWKoPNjuhF5dtjHUmbJTdFWttsFYt7LnvxYvTeHLp7yA6GciHErVFanYzksvSrJkz7kt85rXhFc35N6iDuYrd5a",
  "key23": "2PGDFCp2dNQW69cdqbb6wM9ejAas37N6F2kojFnWSFh5okThd7rbbzwvsArocKijARTLyaJVRHjMkwqo5k4P3SCg",
  "key24": "4pKK2E1U6adp6nYBx93usKFrPKYyC6fWnYy7FYeRdmBsaJrJrjMzzw7S4dmGPQyk7srMmZdaskjrSSPAHVPxmsjY",
  "key25": "4k7w5VMQ7EpEUimad5qzVZcSfiKi8WXi9YDpdj2HGsMmF64SVXh9hEWAbBbuWYp432W3LzGYeaxPXKndatRSb8sL",
  "key26": "5QTDzFmPiXwRqfpvrXYpr81aSNMYg5RJwT8bn5ooYVGjJE4r4C8XzeZTfLa3LxQjzqv3NiUQDoQpp25hqibzFNYP",
  "key27": "33DERMsbpjLTaCMXffmwmw9Ae5zAtq1AKY1pyKrMTbGCuVDhn4WN2op8RdyM9234usa6MqCqLRrNTMp34a5F3yeH",
  "key28": "2PKwXnqtp1zJ56ZLwMVRsQ1nkVnSma6f5tvd2FZk45aTYxZ94NSYh3CtdXjmHe9Qz3aVPubFbqRgPAb2fdZ3Ggqx",
  "key29": "248KZqwzNYeSZr3L9GQTd9meYd3hGtFALPjbH8V2nvJJ4241M9LhGTChEmv6vvPoPVz1WPjVNykGz9MfW4EqMRwF",
  "key30": "66seh9dCuwZsKyALrKHk9JiFxJtp5oL8hUDvcPD2L75aQENNLTgbtaoej54GbcHqWy9kBzA9fBMaamtpoNRV4hth",
  "key31": "3bELqi1R9SsrgwS22PeMMzB94az6WCSgqWXi9hhNtog2L5N2bw9YVpajCKqjd3w8x2d4q28hJYASggBhTzZfsS8S",
  "key32": "3G77dmrrXrPhpzNg38qSVdRzuNRu4uNVsngQdwtxY77yfFxgyaBxKx8GfFR79NwbkPySa7en2sTfWrafyVpkGa1H",
  "key33": "57hNQ2odzgREriHSU5T9DhqAtfTTuxdxRxoujBgPoWj2bpJZ6A5z6FZKwj5szbZDrVd8LME8ox36aPtmYgTcGcpz",
  "key34": "4F5BXeHEBx7EFb9jy5PhNio5WXr2sUquyU9JQWt4rnArCMCefSVZYQBMa8Q67sGdfSRxAfXKQ4gyYDiJRGgoH5Cn",
  "key35": "5AJifTBH5v8LEuFr3GbaA7u2AVAwZPv5Rbt6djtVX3WCC6Lpn1JXMgcLHAqxkEhyt7Hvmqy5x4wC9un1t184oU2Z",
  "key36": "E1JzBvDC3NJWpuZzzDeB2one1Urjqeo1oaRAHv3eTGBr8766559w7DkTtbwebPmJWHFrZhs4cZVyJ5AFopUTf7t",
  "key37": "3s8hMDd7dFywkyYjhK8CynuiyjmXaBGgzyYoN5SMKdDZa18H8ydAizx3TaG3zEGtjTZGhw47d9NAfD118vWcaiNH",
  "key38": "4E8VhmQWqLZyZM878FhNaDRNF1TqVRfCmKGDGUEgrVA13t3rw2fKn3xCmkNsa7fxppUquNgNs9WDrXtMheNiE6T7",
  "key39": "Vc2qarACMW8NzwMhbLUqhq3NZrcLD1bTEeKVp9wrgoXRbKA9Fk3g6k8ipLuhMYKKmXcxWoJWCZVeHTuFeBh8WWC",
  "key40": "3vbLVLVPTeMGGnz37a46kUEeVeUGhXV5DspmGXS6ZcrWiGCHUeoQtbxqozaha5zzDGjccXUv9cCHwqUxtSpAzK6c",
  "key41": "54SnqXWFexp6tMWKJoXxhtqkHjvjHgDuXBVMGe7AkBFyeYovfUuQnLjrAvbNaRhmea9yWgF6m3FSUBDtsNCA8ZG3",
  "key42": "3S2KZUwXBLE7FAtCUu6BtiVPW7e2Z1M5ANy63PxCZtWWndS69dUdiaJX19CNAoBoJT7phi2k5MzMcDz15hkfFEd9",
  "key43": "3zGkdnhpHzEMsbgCdxHCYvAELic6dx7CyAFgZZpZvpjeLW2NtJFsoRC9YfzV1CHxQXcgfaLHaMh6qPFtJ9vn7yZL",
  "key44": "5NAbFkni5CpZqXXPiooG7HUKWwNPfpjG8AZo6RqzwkKdE4o6DxWMPqXPt4thDjrHe1AKdAwYjMDyrEEu88rHfVSY",
  "key45": "2WP4VaiaUUSaNNZ3Q9X7XUrkj9kMpBEwtz5PqGynPuXu75NdhUYtzcB78Sj3n714SzYtA9J1xuAQvfBd1D2KUWsn",
  "key46": "2S2TtURYU59Ye7yUHLAAqo3RbaWUbKPADzV6N3vwVj1o9sRThLKTLroPaB9VnkLLH3uFiLDtc5yHqsG8FXteTYQd",
  "key47": "7Q5ZqmYhfTXp7nqgMzuoLt9Pfn3GBUwfJKPBvK2M1fUEQnVDPXK8fi2kLgJWBZcinBwmRJSDcN3s2PDXsBeym2E",
  "key48": "4gmx8vbUdLvFT1zerm6y8F6GbrXznwmUeu7taGUYYvHwp1uTssUgFsgbi8yfhs8E631QHdE6jVzmcv3JUQAwbWhP"
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
