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
    "3yYxNi3gmf6F6zuFaVn8yAE3RcJhWGzXsTriRVQeGxbTJMHDHetCynaiUQkfGhaWhQinD5Lx3odhxDuEU1io67Ti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XqrvffbhKN2FD4Cb8RNFp4vhrcP9mUqpTn2zu37ETz3W3wTAeixmQF8stdDFrLZWXmzgMvCcK7DtrdhoLbm7h2",
  "key1": "4SfQEouoFiqEocf6HHkoCvis56UvGkjMxVo1oi8CUU6rsXEpiSgzHB8tZRZChqHF1H3rMACnuXhSXkPqukLukGaF",
  "key2": "5Y9LDMwEiVYTn5N46iZjnPc11ZpevcM1xo3YzaoVTgxiBpPFCYQXSfN3nVhcfGG8QWH2ktb1Ds3SQ8ThzF9W9nX3",
  "key3": "9MAUhtDMJqSzPWcTD6WNgKvGMpvBVta8Q7wBySpFg3qJ2cXmZJfLUD72mGH6QXBqoYHvK3D3fuJGxGNvuBTZbBt",
  "key4": "oEbEnscw5tD5uzh61Pe2ThLGBP1aixmatvS3TdcdctArMtbnjNrpV76iKDALemHuXEorPPzTnDDRSmCmxVNaYEm",
  "key5": "2865JaPxpSG32yBJFCzWHR1o7QDVu3ULDXs1BzxrosaeEgbVcXLR9bQHVq4p5mFwZYPCfaMovZzGeHLYW2ZkCSTT",
  "key6": "rYiVzPm5uQTEdmWrvGZBEBbhRvPeKoQ2tqiCvjncAjFkBnjUmR6yJuRf3zMyah4gYAxghv7kL93RdBpBh7ayjGz",
  "key7": "xXnTu9d9o2wXqPKnyRcNbs289SCcseVyEnFmfyW4marYogtHMgg8k7NwSRbniuCdU3mCS17JHwX8jCqitdpzaJT",
  "key8": "2knifCTtWEaxdhnkCscECV4BHCahrASMo3jtzzWuCtfXFLdWrecHrvac5HSzaVxkJfDZCB3jzHmzCofLgJda8m9r",
  "key9": "3us8kBCesMVFzrcJGZkYbBoxbMtnkxZxM9NGEikQUvSKpgALKa974GFKbshgf9Tb4sW45T2zj6iDyvnmPWZC4N4V",
  "key10": "3X6QQokZK1XUgZ22pw1KjqPmpPnx9uF6sQPMx9M1P2azZNT4rFRKEzLReJRKbAGGpT9BmAA51XPQ4TUgJoxMD5fU",
  "key11": "5biHmUDBiUzea1CLerm7KeR5KaycE8Kcz5xU4ghmwamSADK1pafLfVPob9m2gbTpp2TRKUrWhuAo5RG9sdZ8vKqy",
  "key12": "ptqoBEXMRFz8VrQkv5RPjTvtLn5Psnnju9QCHw5UTf1xUFadxKQNcfV35CtPpcb1wHtnx4XZdSzkMaKixRYGZH3",
  "key13": "5ecN6aQKi5qECDQxGhWiVAHEjw7Wi5Lz11TbVC4BYnYiVEGSBgc5nsdFt9b1BXK9W4bTMND6U7HHvtYNizwxwG2q",
  "key14": "2oY571KhN5T4VyKNcC7DCSkbX5ZW5Tp4JBA5sD5oZ5zC492Cn5YcHvDLaeiDWcaSHCzx38NTR1BJJKZ6JsvuHDo8",
  "key15": "4AkV4G7xnaJo6LrctkRbnfrQpSuCNisuHz4kuMefpsuE8GF3H6fxgyTHGiApBgUqnXNe2FDLhXNZbM5ur3TDtyTc",
  "key16": "5QAdRqiRxGhNGgcibSqxA7q2Sj6tU5ZLASHNe7b3XX6j5EsV6jLgT4ZpwfGbpDcdmT6DFe1TAVir9j8D78SRSchA",
  "key17": "5N1FctuCy8sA6xL7sMW7icdYL32xVJRHAFC323KCB1fWTvdxBGnrn4jNuCypUs4rL2RWf79iKpQVDSHfWjAmkbBA",
  "key18": "2UrpfCcYYF2AbZZYXxsJ4hRCcWhEHpdpqoxcJdLaD18BsTQby64LN66tPoPV89yVDLtDBNdN2UcMJ7oCEB25F1oZ",
  "key19": "5hS6Jg2ayJzqBFYHWJ3LWKSKVJ1PEcXEMgQbMRfFxdxBMrPwkEJYYjgFCxPSE1P3dxJQCo8zZ1dzf5xv2BfwAbUy",
  "key20": "4DYvPUMHATbJF77W1oLF2uyMisE4YmA3dCjaxjwcHBCNfnPNGujuSYDDnC7odj7U3251TpekYvEpnZsH9Pfw4mrK",
  "key21": "2rHSMjwA8SXitN7Cz3XaYbEoxwSP8GJxNjQ6SGCwJ7VskteYqnTN9CQxTtxmgNdpHr5LWHX4AbwVHzM4TcP66MmC",
  "key22": "5HwkKyFpP9dsNdpAFQJrwfu2R21E8cP2SfthweGsA5XoyhQUABdXuNkvwzYajgpuRE9UDdz2Pe8pPr5xGHU7R1Qo",
  "key23": "64q7UQTPS6J18oXRtTsMCkbWmsPxxAxWEMcCMRAxziuzHnmRkSyAZaHYSmW8AiJX8hPjCBFVa9UxxVMrynTBCtm9",
  "key24": "32d2CfsoFpfHVh2dk4nw6nitudmthYBhthv9AFBExpvUcigMsjVjWtwohNiMCevajkzoPtBrrxMW2dbUemFFazxJ",
  "key25": "3V1w5eCVWZaTHqxMxnSkFTQhq7msRKVMS13bskfVFuuquLhzu8yTqvEUffpasvEGtNQi85oWqqKcbEXx5eD6SZx5",
  "key26": "65VrYEiBo9Scu4q8GLPTV8PpBUqyDoQpyw6HAELyA46Sv9dmR8qikHfo55i5eCWzruMrKb4ZzyqthJoXHWYAD7w5",
  "key27": "GgB7TCkctzkkqtLr1WSQ46wN5aFwLD6FGB2A79NDHez8mA574rGRPNj75dyhR5K7LvHZ2DYoywHEg51koFFED2j",
  "key28": "MZCdCLnVrt91GH96PcqiPgmA6izP3EZkv6w8cS53C4sSXPy3NZuEpHrLRmfCTsS8B4U58CJyWQDKzsfTC3wMyo4",
  "key29": "55kEX3vwHW32kYFwi7fEsMYxC2KZVTRECuXtKdjVr3QRSZYK98UgiU3dzhj25eDuNsJyd5y31uMjaTXg7WAAzDKz",
  "key30": "Xz47cJLumVjzvQ3s9BamWqMpF7V4GDL68hU7oDnqvQok2Ewrvy99KBpPP8NiAL1yk1dABVWsmLykUys4HG5jBgz",
  "key31": "2mZM6Vw1yBNjJEhBuoK4rER4vHJ3wdxmj19Usmzmx5GwRX8HzfpYgMjsBRJKBR2o1JXmKtgnjBoeB6SMo3TLxkCG",
  "key32": "5dzEFVpfwtEFGRckA2ejiSS1N5986xNdry5nGgEWYws1FmrueGA1wE4AmEBbDKjMjPgEpPYbsAwsMQ7BeguYUefS",
  "key33": "5dtVPpbRtfRzQmrWUSpMYdNCnPth9x5DvAo1mFMzAVzxa8PWsjxYgXREhkToGei9UNhZNGKodWv3VpgydRyAGcty",
  "key34": "5QYmfoC8zyd5h7ZKuqYvCvXboh2FwYfQzBEVPPiMT61NqV8ZwFn7kWPUHaNFMjVY3p2XwbWnnByqSovvu9PikgbK",
  "key35": "2rsxzDQDwHvWKPR7WicZg4Z8NDCpFRrk6ayfoTTv1GCKjxJh4Wzjqv1rw7gVJVEMTZp1xJ2pkV567rwZ3jf1bU3Q",
  "key36": "35dD3eeJiDCBDV1RTauMYzH8npzrqe4aTVXankuSK5neVfwGmyB22VCTabXo1P1eqhfhAZdsZ79dGh2xpSQWA64C",
  "key37": "5KqqJTLSNLpwRFUwaPwiYBQfdd3vgWFkPxHbUXdX6EWAez2aCx6esEEMtT8W3k3GCqZq3fMg13VZou5gukQHKF5Q",
  "key38": "51ZJQWhK1UhWs56SqQQvaCyUtZ5uWvYHnokwnDhBjPQxg6XSvwbf3qkayi7Zg6PCXuW5qxFv9VH4YWpGqR78Kjgd"
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
