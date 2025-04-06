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
    "kaG5xtmmVi2VRiUyLgRMPPiEkfDjuEb4FiVJPPU9AjNACWPTEojeYJ6CERtrDP4afDx86SAVJPTaz9A3J5VqASS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DkMYAPeJgEqBpz72L2ShW1GMndjxWc9vbYfU2JtDbsts1gsXS9Tw6iGG4iaNX5DNesw4ffNt3GhRdeMzkwFKMoA",
  "key1": "6497r6K6LgbA9vuBJgMRff9SiSRRw3cfd64MUUFJDihq1dBuuL61nHWNKv4QVnELhjHGtvXi4YDMFMjgg7gE7tCp",
  "key2": "2xzpbAoPhqNDmGS4Th3i64cW21NMeRjxehoUs4mFY9fScbAKsQ4r5Rcg4zkFQcMLBV58YUqW6f1Jifuk2p2pVd4x",
  "key3": "3R8TLqUu4JooMEU7odGLkyFmRQ2YsuuVPgHCwi64iq9kNWmduf2sY4izbx7QvGxved4j89kUeJ6pdycNrWSgDRmG",
  "key4": "2X1MaHK9dWhH7X3r1kkoeG6EdbW51qP2tVmPQES1SCZvk4UpKYvBVQhNUcUwUykkoNrsG1A2rhAap1EQWFfW3jTB",
  "key5": "8XUQ1UrufpTk8iP1F1tc6QcJRRny5x2B17RrbnUkHfnGGyrgxDfxLyjMQM1wuMNiDeBkRC6sET4awZzxAtPRbRF",
  "key6": "2VpXtizA35TJTSYZoQoSv6YMFduu2ew7DavMpChE852r4sKy5iTL1iJm34ae6mrUtWZMUmBo5akXvywuVDYfUCi3",
  "key7": "4yyfHD1sniRv2Fnx6JNGGxbhATqyb6ia8niRW5jqyZyaZZQaLRZA3Zqpg8Chzkgy8g7ckLjT8tvSG3PTKqvZRgg6",
  "key8": "1tBGsTyfU5fW18ETFRFL9nEaaBXhEdMj6Kcfd1Z7jKdXAqwcpNp7ojgfm4TthbpVyxBczGzLjtzeuranYmrgkoy",
  "key9": "2NhL2Nb4avGhu5QN8LifS5VgKPSdRmmM1xcB1G12nTzRnXQGL8haCHwQFCN1MEZrufZXdTQj1vyGbNEWcifP7UW7",
  "key10": "4wJuWbnMcNhrtBzNsq7rRAeZkYPWEeddCYRrjVc5DGa9SSX3vLbBwpnPHQkCvxyhWb8bqDjCBjeBsftMf91yksyh",
  "key11": "2mHSu1MTuigHkJa6biazD3jG8qPotmcd5p1uqziUZr9xrtHkH7VczjGxhFhSbMq52GUzA3Rohs3YCEi9x2CgkEJC",
  "key12": "xhwYjoZ9GhChjtPf9i9aPKNuV74Fqe8wWow5TpS5krmTA3PNZJPoa745dea8tAf9h5wczn9262unHxKxC7GCfkR",
  "key13": "mBSPX1VNgYffTDHp4sF7cq8e7AozqMCfa9Mceo9NaZCsiuNNf38YXeLtJ9tEkXjPYEQkPZmrbnckSpdKkxB2E2i",
  "key14": "HmCdUK2euGQptjziRvZ7K9RUsRJtSY8XgChFxZtS9sgpW7EgibVydKNQAkatFdnpFWWvCn9q36T5oK64gDWKcyq",
  "key15": "gx6QJBNTcuwkM3twgvNpWy4aPCJ1C1P1nuTj6TkL5PBmDPwmvzZn6fRSzU1FM2s6WxodRZJw1rx5FqN3SFYRAJ4",
  "key16": "CMAq6aKG6ZFr3SrrkZswH5ZABpUBbghg6bWqhXaD4kxos2cCCheLMfyzmNcsTr58kgDmkhzaMyRTzTMt6HBwshp",
  "key17": "xZq7QE4WUM1iEr1KNMEM4zUVbNWfmMBQVn9rjaGRN4xHznixSd56N7oEtJJP6qhgDuHXPvugYmiwYjxmhm5mB1z",
  "key18": "3K2prjpwLgFUzikjp2KPmtp8jSqBnz4F27pVqLJa72BCEuJKzMENHuHnkqD8ynk3jvHKVLwnW9SJ5W2hVCWmSdYH",
  "key19": "4pqmUfVcLpY4Jep8DB8jgkMXsJkLFdUcH3ooxpky9vuuxw616SWypKEbt7zvi734Kjbn1Q4iuGoJEbnScERRudwr",
  "key20": "3PqjeFRwDTj638Kz7ZFTCbnEBgg7JKAVDT3TGXfWFuDgLykMRWmwmQYqX62CUZP7duu42fLDYjvNUiEtzpWcdecv",
  "key21": "48i25nUkSepSxjR3vtADbqPRHzZLpmsYi2iarHb4ftRnfGEpthmikFgYkubeTFLstxK8LCunD1JRH8Ge4TfL5Wxv",
  "key22": "5YeVLwTF94vEtjDNRsJTt9qFu3NcJsQdxW7vwvJDyH2DqYD7upsESzD1ntAErXkgwuumqG2QyYVkSxvaDqcVzBni",
  "key23": "34EKfyN6bGo8bpWgvpEcNQBshW3HrLteMbfGBjcZ7Ddw7CUxnxnbZKCF4RVuL6veupAeLG3dy9io12DqtjsN3SNR",
  "key24": "5K3x6VK2aj9VA94X5WWCYFKvV6r4UhYKrpah2xcirodUsZLkzB8mx2rAtGPLF5kkvQdmw2LvzyAJL4w3ENJTNNTt",
  "key25": "4ggtwGFK9WzoodrNxb2dPSYx2Cts5urZi9ijVgmiad8WPopYAJu5FsixssLKVu6DN6JdSsdiY2BW2rwnoDMyoBG4",
  "key26": "31Utv7see7vUhtr2SzggmSe5NBH1kiHrqXn85aw2D4xGaWeR3HHp6resWakxkJ9QFZehhXUiLFE8DhgNKhVVZ4bb",
  "key27": "4Zv7CjnFhrV1SKH55grpvRFo6EY4cufCeEoj9Kj4nQDUzPDSuKoARefNZoVZnQHN1zvcznXGw2nLzH2UUuHNP5yY",
  "key28": "4opMzAVAByiLSwfvwRgmx1BR4uEGyvxMn9NgfNXa8WjG76zJfLjoncDA77Rk78K8QSRuaZM9t4tXTN11RTkXmjRC",
  "key29": "4VUBetTmBLF8Fq1bRP3APbYBDC5ainYhkhXUGPaMp19ujcqAyfzGLY2QRhGscfHBy6CV48gPv7CAPk6WgLVkCWxA",
  "key30": "4b85hFM9a14LgMrsHNAjhuyxVxWnwrUGZCUjRwRzHGJsYzdHtWnANUXRdTofLH7hs2v6VCZih9uBHmFXS5dAr5Zd",
  "key31": "42MtFkgzX3gJKPUoswGvVW38SfaMXwefBZkGCpLDTyTHKyQwRuJLkCDZYNHysHi6pxVcRJsEMcQ8yzz5449KHmNB",
  "key32": "armwNAgMexd6DNK8v4LgUBmj3YcZM4tMm43AKxR5YZKe4iTXJyxaPBgFK9izVPCNhr8MFrsbocMkHSo2ZQPuNsn",
  "key33": "2ADEoQNX5RHJt1n95ZESPaSXj6kmiypv1WuBxJmJ8M6wHNcBraWoSZYb7e78xfpbA2mBQFWByuvYegtKozzt5KWT",
  "key34": "51tXtzcxY5VswktvoFJftuVnPTJyQKoWXe9kTwD8fYs18HSu5XYDBbv6bmJqzbeVpCBkucFrcmevTkbtQW1GU3ac",
  "key35": "44KeurMuJSjgnNHmKgs3w4WRmuMHGvtnc8VTm3hf1K2LmRZoBb65a7AJARsdvEMeN3nLpxYJ6UJ5z5F6smSE6nnF",
  "key36": "4NX2wazp5M4NdteqoQQ4W7R68svHkN3fyY1Rsn9MpWekg8DMtuCKLiAkRXYuRUuDdmizhFFNMCVDEZsrtG3ZjtmC",
  "key37": "Nr9v8HWqFFLYB82L4MKFWKb7wwkb3UYnJUDS6bHofVA5whF5J6WDk1XuQLSpYKp4c6gVNU3u7HX5zibQ8Z1qG8k",
  "key38": "29Rk8rWVMagjwbZo9BcfpB3hV3tGV2uQW7FCB5eynAgzaNkd9zhUzxxZDLQCMD6pVMRAdBVg8Yw6TmFbavcD3mpW",
  "key39": "5PGhEVR9SNJcgbA1uZ3sHKRfV7FzGvMARVGAfatd7zGnnNU9snA3KbvwenupbyDtotj5hxUUGMGosaothHkf9m3o",
  "key40": "4sRumE8mer8GC4vPTEdnExGhBxvxyXw4oN3pkogKrAmY8aYK1i7gtRTxJcoe4iZmY1NymenUyc1GdpBeSv9bG44i",
  "key41": "5ceFHwn6onqLu5yak6kjZLdsu3JaAnerpZCqcZKkmKA1ts59No5S7B1X4Rxiz5ucppMD4zyB4rk37skh9pA3S53v"
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
