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
    "3i1xUA27UVu9Xk2u19FNdRX4Dn4CANt4DaAwA6EGUjWFgTuSveBm9frR339Y6Bjx9VhpJzYK74nRvhaf4o1Jvkqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tciUJunhB9snNUnP88gXTGP78t7WF71sqCZu46uejUa6hEtUvpzZ4iR5Z8mJpVNfBczJ2Rc2CCNdzidpQXSovah",
  "key1": "VBLY1vGtVWJAeHerTitXXCknyhdXzJ4GHidyhei4bAuVfyPUiTBUqQJUSUWvgS7jU27rYixK3LDEqZBNYG5cMCV",
  "key2": "4s6pCLLWSnoeMYaHgS2MRFafTWdszeMmHa8u8kULJWwnXpdu8f5bFtdxqAwjxtUWos2wgJWgRTYparjmJTgyZYPq",
  "key3": "2e2eP4f263Gfc7f59TroBZ7dg6koiWMf5pSLpBwCDzVMrzL6hqZoCBPmEHnmjhYty2uFFJGW5z8xAHXvC5eFDt5M",
  "key4": "8CBrFWP1wrPV3fSNkDPAPMT5WswxXQjFkXzPNRWewWXLpM63EdhcCbBmAJk1Et85ejTZLJR4e43c1ATvj3vJQ15",
  "key5": "2KpDzUiTFBV83D2TkeHyFtNGRbfcKQaTEaghkzZzhjyy57h6HhjWB9Gq38DQWWqif5Dif8aKZg7K6kRnHq3zkwjD",
  "key6": "5j2ZZV9MjLeacGR6VNw16rrW5TkfLEqxghRMXeRrrn4CQ9AutB9hHRMVVuP5EC6rCZcJhwTDnmBizRPXsKUsZYMx",
  "key7": "5Ema4x7jpjat8jLXPP6gN8gDd67x1jFCrLEFiqwaUt7dt9NqePQsigaRqLVcKUCqo8AoqsJXvXMhfAx4veWQWnak",
  "key8": "3RErJQRJskohzQn6DJgTuJKk84nthNAL1s7SMQ4qfvxuNiGn6tvxEfAd6TgzBfmU3Y2ptnEGBx98D9gTSka2r1mC",
  "key9": "4rC3b5QqGeAQxTo6ZwkxncJ5JjB2J7CBqEcwLmZH1d1zZ7ReXPPNnSuFFXzr2WTt55Aj5k3tWsGNqxRCe9fxvWWV",
  "key10": "3NGPa5y5AGgRNaVy7dEbsWeZdJbk98JJXgnWr8NrB83kxfGkRTq6uNAKpKeje7C7DRCgB2ijzvmGAeLx28k9QNPf",
  "key11": "3EkMesfynk9U968RYoTvx5SQhmY9YiqhogshB6jQLU9gj3iy4n84XYLrehaGAfwz4tGLQFStkWM4fsKMUDdz3vMY",
  "key12": "2dGoSLVG3w1AyS1V82YwoZxV6sVgCktfQUC4EPR6uN68wAakcApHLBkenx7DThNmrnU7bsJzRMLR8wYm111w3i2v",
  "key13": "2VxFLc3wU9nW3AYUUXxJxJ57PufM6Vy8WXetvwMNXYGVJi7U4F4kzCizKVNDABkyxbsG8tkvZPhqufDpMDFXkqaM",
  "key14": "24osrbR2C98id3zH78bvEiRMnd3GegooPyWmWRC1jqQsnu186MWfwaErJMD59srxMihxikwVxBy1NDkx7fXqZFkp",
  "key15": "2CjFLsJdWXfyh2zGHGJsijex1f5m3J9JvXHNVm1r5G5w7WrgBRYqp6nX943UivMq5JpVGbT5gYjPWMasa3rZTCi2",
  "key16": "59x4GTW3auhNZeYYp6CuQCFqguAgozWLL4736A2Xzikv2YvVoaa4BBKdPaHDFeDEBwKZVFAWqVv3UeWWqtTgnAFm",
  "key17": "2S2ehexRj1EN3psaDL2HqZfGWAz6896sn8EE243vNEQyRGmKQ5wfmbmuwBhp3bmKKxKxiDPsTHGmPQt397MSSU7S",
  "key18": "nG3vqxF5sMgWxkm4eDmWWavJnihfhXEJgXfqZiNVnTN3qibEWbEyns7Cite3kwpQCuML1i7cMbdV4e5pjUFVtMg",
  "key19": "no5dmJfc21qT24DQzzF5NL1HJzzdWAYThwEoKtXE6Ym8kHAutcjGHgqkJzRdGRgt96kZAwXs8hKofAp9q4vHBYg",
  "key20": "23N8vFqr8ehiZYX3kAvZhr7cheeL1ttpDVZ2G4BHU8iAgMDohyfVBiHS6EvFvvi5Gc9wwgoYko66qHxpxuc3u1KZ",
  "key21": "41fNZBuPqiAtyJotKn3gKDh2M8XfT9EvuHkokNJ9N8nPrpHtVfgTsCs59MfKNUdMRLzg6msX6WSEbaG5GckcFkHZ",
  "key22": "4xeEPRsAEJ3WZgMEJuQBZdZsqrrv1DMfBi9pnZDHMNiBAp9YMfahuhiechkdLmDqptPFqGUHijT9Ktju3jizrFWm",
  "key23": "P4jRapM46MkMpjEEn3697wCM7bDGk2QPkgm1M94wWrGC1Kv2gNygSt18ainCNCYPzbrXW13W4hhckoGXRBioWJd",
  "key24": "3MZ19rxquiDP9B1AtEaBgBcZstTVGQLMTUNoqz7xK4e1G9pLKae2jiC3EBNRpCB174ZTWfotpkVXaW3niBxxQ8vz",
  "key25": "w2eZDozDw8uNAxvo4dmWyEjWppqZ2C1gEjpM5FPp6VHZKf234SH2CF7mh3ugSGwzdcowaMm9wnMVNo4EseGwBBq",
  "key26": "5gCJ32uZid8CWxhPYG2QQyg6XSKxw8RgtGuVGe9gAWQcC3b3sdxgHcP7DyPcPgrhAiJXiQi5WEj1FuvZgL8zpu61",
  "key27": "5sMcYAAKJgU8CPtq1D45kG1ftuqVcik659QyAx3AzJdT4B3pEDoS2AQKS3k5MvrJmnJSU57EgJzNwAfbT4JchEGt",
  "key28": "2vrz3sBQ6AzoSUaW3dgJZsuqj2dQCLzrf65E7PNUbi1HoJ5FfP3xhPZ5F1GYbixtmW51u2CCiZPuqRyXpPuyZu1Y",
  "key29": "x74WCxWHstw7s6Wt7A98hrwLutsDCVpTxywZJERbtRmxE9GcFBoUVjvGzGkFZNPQvdbHyHXjB8g9WhYHURXt1o4",
  "key30": "3wFjGtzBiHahX3Dp7yx62Nin7KpQD43uCJrKuYdUjD1cjd5MnWGWEogijwb3B7kcVYCiDbVu5F4L3LaxkUPJQeRV",
  "key31": "3djrKprbUyK22XSF33zswB5U1riAeCQsvBYufM3UaeUJnzKKC17X2KeGBDHUak1Zui4EY5WYrLjgcH9kKcwgYYAk",
  "key32": "35p3NALjBLpeb3dUEHEpK2V8kQRWmsvgmLN4BAjTdnBgzaFUxKjUvAfMvNXksHudvdnRhqaPVz3VXMYTJgoFedEv",
  "key33": "2SRT21DtW5kRrxjrGwTWH3SYYUhTZWpUeLDWUeHFpp8cxZDxVpbmLV426ZPAdnC4jQGX7zVVhiyM2nPgwL9hmjhs",
  "key34": "2QzNFrc4cTexvgQsu2cQi5JE1aKLTEXN6tW52Tqh5sxKezS4TPFdo3Kum7nVQmaJnF74rkSNCo3PLSqbmaMWhVtj",
  "key35": "31KREntMXZRCg9N16uDmbEov5dySH448xKTB4hxvcv7cxoKLaZLLpumFNMbfQRmFBTdqGZsMPQeriSY9r9ms6e39",
  "key36": "Tp47Ub2SbvDdS16Sv3atUXLwJGa2uHm81Ea7TbSkfSQYmWGBhhaQhqNvBwsjzGXNbRV9bsDQCNQ3Zvdgirhdw5H",
  "key37": "BmPUx9jiarfuE5cTmM1QRmu84SGaBkwmo24T62rjfVQ9iZxEjJZ2Qth74gqnv8gQShKaUD4fBQWsbW5veXXTvVR"
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
