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
    "2D44eyV6aA3i2p4PSkQRwAuHFx6SQh3gUbUYHpT2eE5NMHhswQpoeH1j5ourK9aZfX4r6YGTD7kEQ5QksftErdBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQqYMf8AXfVqKswHg1xAHtSLaHwcdRFFpp1fQLvuPfT2NzRexRqUuEXsU4haKisVABW6nkzPmCWz55DNU2E2iYC",
  "key1": "yT4PLxCwjsX73aoFZrMGp2TRQvf3v6D8psd226v3AMQkFnP7DVKDx7ykL3f582yEKtC1DbtxJ7TqxY848jACMmJ",
  "key2": "6k7v1nnGJeszHZMPpMvjFcc18XEqbj29ET77XLoCRrRGXQvhALWuFCQww62AQzSnk49k3GGQ8mykK5vfHFK9eMS",
  "key3": "3hcMTPf7AZw88VDHKktREnJYtyeQUDupetGfy9xG6qxuTdJNjv3aH96A7vUEKhScSvGaxawh1aTCbU4eWAUceSGk",
  "key4": "5vBKfnuwFusdfn7g1AU1KfwMocHxcVNUmZjwYkXVgmP4bNVoua63zVBh3eXTF9pPJMQLebbisVFL5DnyehQ2uzwW",
  "key5": "5QhHDRH93mLwSw7Vj66GufgsmiTKf83g1sgYN9giCgxf3pF4HzcZ3cccEVwEJvcYbbsf7V352Y65oXnyMKfgyk93",
  "key6": "2zdk5uzCorgaPdNAmquJ1bEH2sLsHEKvUNsPzX8Hgwo6mDg4LZMwxVgByrH5HdAPr4MnHLpTqVRJ93wg6rp7e6Q",
  "key7": "3eM8a6zemo8o6X2AXaW31AyTDTd6HUP9fV78H8vZGBaK9hBEdG8iG1wbG6bQBJHRauDcm1TT3hFBwxn5kba1xtZS",
  "key8": "vHPczpcMU5Mf7faFrT4nZScNabL4T1Y21FYHJY8mnyNvjvZs6FMnZWzYsdw76pp2QSEvvpqnvALduvRpA1oYZTb",
  "key9": "2zkTG7BAozWG8srRujtGfP1kCmK491gbFyxYsCxvzr6d2KLAQK75SUsAKSKtxXZj94m94MkLrRmjgG8hwf8ra6Ub",
  "key10": "5Mvz878DKjEwZpGpn1tq9eUuaCtJ3yTPAfZ8eBqeZAn6gCtz84Dsjshp5Ume7Me3M3xLaF3QEeXRoxMMAqDWKFzg",
  "key11": "obp6cig5ohY7hDoAqjGEB8KJMYcjcRCcikhKwfxXtYhdoppjvJq798q8Y6FhvaGuCQAxe5YdHXcwVj4pf2ukBFU",
  "key12": "5nmnQTTBKV1y48iXrUD5ETRTvVEiwYycK978xE5t941Bj2bj9SnCserupm2LSZ6ec3i7fRfZYdskMu7JvtoCNgj1",
  "key13": "57t5tnzq3majj1QGZxUKcg167AKhC8jUVQEWd6LcNA2i1AgZUeihVxNTE5YL1mY1v3YsFTX8fYNvTRe3shUajPit",
  "key14": "2JjTEvjSKif8oRMEkJYS5SHv2moPwy84LFYW6WuvzSLs6BfiCjAQP8TUA6b6Y8yvpW1ADgyDqS9gPS7wfxqr6vne",
  "key15": "5jm8r1eb382FsM3tZ3S9nY5eLrsMrctYPhGZWqGnbocuUZCArYHRaQaLsy4wbA1koQiJ7RkL1ESxhGrfsvqV5ZE5",
  "key16": "3fY4oiEBAqToPZgcWBxhbcej2mw84HUWLW4p9iN1nb5ed3WXsusjRrJYNcq7bZh26SdjN1prXACK6A4xk79U6QfV",
  "key17": "5yPjscMEMer2BN7iMVYQj185udiCS4ZmwwT1XecMR4Jk39rcbKV66LRb9r1GmQt8y133SvbaeD9wdkZ8MC3uKsMe",
  "key18": "4AVNp586CF6kC6c5nrzyj1ho8uZ33JvXef1o8gZWry3fyh5cDYCckMvvWmJt8PRi9BNxj14cCZeCFhSdSJ77DPJF",
  "key19": "4f9zg45F4NXoLFWc334PH18XAMoXqtfDpKQdy7JqhaSZjVtyhywLX56RebYDdR8r21zqV3KoaPRDCMxtK1S1Z2ss",
  "key20": "vWZK1CqaUUmyz1HqtFnsRpVmryDkXgkgDUPnDir8QaWK35fzHp8Rhhd2stzMrFnSz7jqhZDo5wz6uNf3F4kH7VF",
  "key21": "3tBe9zfHFfpHuQPoJAU4RkPgUq9dgiF2Rgj5UYfiAWY8rjZHjptg4sqf8SPJpicLXKQ4nTtkNi91zd27gUy4mPtY",
  "key22": "3oRoVV1Sa9T1Y2qVnJAW8ei5jHuKQ9bDkXNY5oxYwHKWtV6WsudkmHosBCiMPU7ytCNvEdssypdVnjwSrxpfSgHY",
  "key23": "4FjT9MRcnTzRE1BzuU35Kj9qyNyntT41jbyCPmuENV3ixpJhgn685w5vzKNmcchdhMQ8UkA5SHW7Rs2Xgu7W7cy2",
  "key24": "5SpqrwevEwDEgfV7Ap9nVerwMFGN8hsDrNMmLTadYZKCxCmULUpGFLCK6Mvz7UeKG4d2u9VJtqhWqzYPabgW7zDp",
  "key25": "4Aah1zKAYn3GiPJ4SauJeJKzs977NZvFr2TU8E5rVcfZ6FyZcwjWd65xAN6zJiviV2cFPiCzeJrwFqijT9hrDXVi",
  "key26": "yovJ8hm9Tcd1Bcbzd2KCDG9du1LRkudTVBVxSzz5GDj2g8TZXYSwgTSHjTXGxAMzmQbLXcrz2Kdia9dgyGQpYB5",
  "key27": "2L63XgAMsbyjVy38kb6QM7uMRyah57nxTG1SHhtayZrDdPh3nEBNKKdFAfABLm9pmnVRgpNAQPieqLC6VoiNB9zV",
  "key28": "2ZkDPbj8CW3DrsTndKxKnTJWey8WhcYg4uTHT8vRNVZihg8Qyb9hepPjkBiWEuUegMNKtiSfHZM1edir8MpMUJMx",
  "key29": "uxH15rv9KgWkGFiJShsZsWGkzSsHWcBGusf2AxxaVqCSnVNfw58AHQbbXZH782jjWKUSJu3i1bnL727WsdmUgri",
  "key30": "drv6qpgVpZHKCe1Cp6SPCbt8VaPWYFpcUC5ysvHoaRQo45rWUYbkLX3gAuWENCmu5Dmmue9w1qXNML6uMw5kSLe",
  "key31": "zFSazhjL1Ly1f2s5cFR4B4ZEzZRxYTVh2LNofPBb6ZPDMLRQjNAqogC15LPe63YfDuiLzLayfqCfiQLvqNKsbuC",
  "key32": "NMmfLKVVFuWUKdSr1ZhubTLZP8TRzJnyXcixmihbRk5VNGwgkoe6tMEQeh78eQLx6UpxwmnrudnEF4Y189wJJjM",
  "key33": "GsgKurFwAKTY6Qtuboivu3Sou5sMrgveEFdCnc2YHicZuvjoo5UX7rfktvgZDdP4Ag5wepwWo15uA54rTDfduti",
  "key34": "5UMvrEvzx4PDfTkFbq2aD3rQpwE8kQMC2KntVYyUmoWC228X8st8tiMwfSwBFF3bmt4WDKsrC5NafTiHGahJuTaN",
  "key35": "LToKbvFCB346QZFviNnAzSgASyST8tafhFQYnjLQjtavPdENx85cw33b7j7gTCoMSirzjDg4PYYCJvVjuLcV7wM",
  "key36": "L3yuibLTrtSKjofvZmfV64A71ehdycTxLonFLEFjN2BsvUdJUAc5pZqWKoA7NwN3MW8uA7Aki8FM3AbhARLa38e"
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
