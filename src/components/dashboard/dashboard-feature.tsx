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
    "2yQ4Yvq9eTyW5Xb7nbYYyztUvCVSTsRxmyamcP1i9nrGQHPYZMq5Hn4riZWhpzjrP2wt9Gdj3tNzVZHUX72z7sCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JS4MSecBv64BkuJwWVA54Aor1bssMn7adwvLYh7b3V5owV2gEck39uxWgJ6ne2TNk4HhXpt8H1jnCGAgA7D7gp",
  "key1": "5Ts7S5GUR9ieDfxH8in65eh9nMC5emUWvTkz327hskEmPXQjnjst5efeVqAHumCgY1XwBrH7XbsPhdNjmfJEAqK9",
  "key2": "tx7NwkUZFRQ8w2wTfKL8VBpQhoL5wnzDQHiHPX2TFvvDAHfYfGyBdb24zH7c5iWHRubZXboSq7gSfUmccaYPuVm",
  "key3": "3Bt28XWUNu69UZj9A5vqZogRJoMj5kW9PoELvuCbMg9Ay414GgvUoTRsAu4NTRarzoSMwmoVSD8LjHp8MXvrFmGh",
  "key4": "2V9AKEEUy4UdByfcxk1eC6Rg9spVGJs6pbmHYQC38uwxqLrUEwCmgvyM7YG51nNFVpkmLDicPeFRfVsiXKD2QPPJ",
  "key5": "RuhKhrp6Vof1gQdeUi8xdqYixfWr54FaacALcXvZUAzJpJotvh6dqfFHrBaQaNUFkxn18pipdZD6LgxbkAoY64o",
  "key6": "5MW59b7TrpgxCpdULeRPqrfYpZvucotwNzVYGc5oiJhy1Awmd3fyV4ESAVRxHYWt7A1MerjZ5G3EbZL2De2FtL3D",
  "key7": "5zJnGxa9WZ3eVpUCcBL4vH789R4Kg1tE94kCDmewMa47T6VMLvdKcd3SgFaHz8am5teQWYnvWix9GqorfP14gF2f",
  "key8": "5uAs1FscqmsX2qJMy7WTskZwkWCsDEehyR6HPZJ2rp6GaeD5jXo4e5NuU8LG9cMzH6GN2g2FoXWEUAPu93gz591c",
  "key9": "5YAbjQgSisFxsE3DzQo6PqYcMRLqxLPngARA9wPYFW52mGMAD8TLnkMbUxqzVLcEGQ6hmy2MaDUBcLAzoT1chuEd",
  "key10": "2qKHmBebuhdatkxK79RuC7nuniJB9LwigkX61jmYb9eQa5Z2gm8TiXHCmjRz3U3N7i63ULEB2unRZvbmmjWJari9",
  "key11": "5387PiMH1yUyKRGXH1tK9ovGLkS8WtQHBeiTvVz7E9W8KfnrHdwai39gwTvwveZaCwER94mu7KfkQn4iqdTCiVS1",
  "key12": "q2TmKyc1KJEmr4YVNUN1xp1VRycGssBw4qDHehog2iUXcq7sLii5KTsrp7DdtorAHU2Xw2EZh7kbATx8BVyw38p",
  "key13": "5ff5eqJqXyG4FthAggNYMKNCWNZTBbwtJtFEiSEDLoag8G17WLAdGBCFEd56JhkjkCQKAhLm1pFGLzFxhgwYNBzX",
  "key14": "cCM5moMJKG6UQW4aqCSauP4LKrKdvHvwtiG6YW31d2uN14d9B1WvJa5shhXSVTVaF7ytSjaJfyzzGWqPsdVzLem",
  "key15": "4FcBL3W8n72exJHXz7ovEytQ2MXRie4NMjkKXnBA2UVQr1Qyy5xfSbdpHrAV4LSG7sw2PkdknGvNps7j5h5TnxVt",
  "key16": "4jnYkkUN1LTrsXqWjVu89eMHQ1iRerM7Pmued1skxLynvT4fBFyHWuJqaZGkRgGjFifyHpB3mtvjzWYTNHdG66Fy",
  "key17": "5Vy9b4dwTtUek7EyKYbYXopAqsebUioSbcdYM4R4dFC7sYWFDsZCnQwh9dB5Ye1hVz8G8UCah4DR81DkasTHpNm",
  "key18": "cwhsdZ3revKXMGTLtGxENFr992AyQcPtBwZYcMx7QBJGWeUJe9YfxfsjnbtJYUBUqtJyEunu173pEZVRXh4wXTW",
  "key19": "YxRqCajxhc2HiYexZiYsnC2KecFvhYSJkGB4cSuw31VVJ6vYnaunWfYJtc9wMcrJtWbKLJSzSW2gwCEw3GXSArw",
  "key20": "438B3vGUZ15GtaeravQy4TRHWnntZcYBhRKqhVJxQEMthAkoKgmTTNJsnqwfYU4kYjVkAEeRBaD6nyUoSmR2i5LZ",
  "key21": "54xx2pjgtcMcnG35SZkVUXrfqnPkVLebii6EYfKDeknpqieF53rixvPLD3VRfJKm4SfapDRAVLpqjQ9ikNs6NuE7",
  "key22": "2azt85gnf1akyLf4uJVC4WjjDcMumyGf4NzgmyqWipRv4BqHgtCzotRbg5P4i8iEgT1Ybn8vKzPBhDDFb4NdQH6C",
  "key23": "58MMWb2uBaPA2z95dy1XRuP6RJF7sPf9KGkuxqfRTQLr8DJoX2PhnNqz8ZiHVznyzG2r6GnxoA7e4P3rn5WEj35F",
  "key24": "3DMXNWP6ukBZg5rfYYjeprmUkFLQKSJMCBqvuVBiPA4Y61vsiE8y1yaSeTp271ipNt1MqGSYmfs1GVXdbMM96vNj",
  "key25": "5FLgkMycGUdg99rPvuj7pJ98wfp8LC543Wkbu46AYDZf4Xj5zAKca7kBsa8tezEJSgodP3ouoQpPAVFPVvpDdqoq",
  "key26": "4eaMxAzKpfr7RBUX4QjiAYMmweLUiZxmBTmTp2bj8puPPV6GUVUCCXdnnjuyZoi54p8XL44eASP2pjACso7jYCtz",
  "key27": "vwYfrdpGzN44th2qcX5hgaviHbpU7pj32xqdx2bgvzbXxCUyXv1YbUMaRh6iTVo2FJySXxJLFqnAV5dF52SmWXv",
  "key28": "cs1p3p9gMUjZ282HTQeXb56wQ4xCqMX1awbkA7badfKmrmGCZuzPTnxtqrast3Uq15FmfJRw26m8J9Kmv5br9wg",
  "key29": "wUwm7yx1ypCj4811um9gxXkUsmRQGLkmCQadbTQ2qLsbFVLjTEnHaxmZGZj4To6A9BuMqzvYDffHCd3Ps9WdvCn",
  "key30": "4Xuoy8HXPESG62BukNC9uEAtsJ8pQbHQqTzvn1stxhrSTsGyd6nAsxcNJMY8U1sbs1356rX3NYipJs94XbD2NYgJ",
  "key31": "679QdFDNVg7sUjUYbiXiKvLHA71XqZYTnvdGXF1rFPNWAh2Q7e6J4jAT8yCdMztVNoRJCnHe5M2ycQ4REyX24e7n",
  "key32": "3r4aD5gtwaUyPZSycywacYvhvxMS3EErFcT5SFqdjbmh6K49XZdam71A9ChMudLTsLCpWporTMENN6dpnFwDFQGs"
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
