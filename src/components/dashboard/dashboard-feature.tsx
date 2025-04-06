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
    "4pvrTEia43KPHHKWHF933RWWT5aVDtWRbVQt5hABJ1eAyC3kkXRnwjNnmuy3C69ziByaD8GqPFYmc7UNdTGHDdoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymrYzuSjRuabKAzPa1mmunYWbUBjkRGY7Rtdo9TPvk1Va9GKqQdsp18XzXKQy5iP2LbVrWmY5EkoTrmR16rwRq2",
  "key1": "64q91QEQcxUM9HvL3t3ReaVmNw3X6oiVqFvxJziBARPqMrvMa1debSxXravbEfQae9Dz7H2xtH849UwERM8wVHan",
  "key2": "482adjQtP2uGEM7AzKGTwQ3QAaY1Y8EL2KB7oBXLsZmZad8ecojsaYy4yCVwv4GZzLEKbpjozinkUvNobLum2MG6",
  "key3": "58W7achAii1ZcB95sbcGBe2oitPSMZuEwBeVGviAShsDcEqdeKhNfYE8K6Vivq5Mgd3kvR2j2kDqkMootuxQnWRY",
  "key4": "3Q3U79xxemoXUpmtw328T8hAoxmmU5hZ5yk8qNR2VaAfeKfAuj8mCEwPUnkWsq7ufTPMSCZdaLWNTiuEcDEF54YA",
  "key5": "4d3LpqfLJAksFjDdvV7kUvxC4AXTRdwm5BC9DAGjmKjDex4g5TZ2CQkCWL9ARmutXEqf814rrchMdP3Vqk2DGhB3",
  "key6": "omokBZB47Cx1D1HzgDK6DJ2m1uba5dzfAbAmaVms12eAeGpZyNfPQG2WVMKFxa7auYsywzgwVmKTaPFS5mftKtw",
  "key7": "4XXFDZyWo1ic4GjpMEFjnyMm5SBmq2QwXkGetQ8cxMhWyLSzgSu6BtvfWYudWg12APME64mrBUXPyP44Shh57JqW",
  "key8": "5ssLWSKjSbnK4Y6jLHjy8f5chpd6rnkJSfiA1q9Avw3f7DjSogkMBZKHBHZuge5MNDQ5kPA5T5WMDxnGwNzC8XmV",
  "key9": "4imDZGLjTRKaD19kWqCvM5NFiXXNaj2DVN8kD3eozVjYgcD9SVEMqip2PToPWzncQSCMsFXa74DkJY7LXydqNHBK",
  "key10": "3bDDMjpVXpxgqsw3XjvvGuNbz7nTimn1e92b1GPq8YpobzS6xF9VHEbFcztqHRPrKdvRVPhqCdUXvXq5sPpZmbYY",
  "key11": "3WagEpL9QFUC3MJUVt6REocbsj6UYNRWuJi2ywia8GWVZVRjHFLmXg1eUQ8k1YujdpehHagB56WsVDCB93NAUgPk",
  "key12": "p3QaUnYJh7HNvUwGVK8GXf41APrZdV3udSv2PSeB3EU8SDMaMdJ2rVwgsXgLKAgHJ7K5dv7KZ3igFqHn8UFMTF1",
  "key13": "5x3jfKrBb6VugprBb95QRrhcLwayEsniBKss3fkwXBs8rXZa4jLeKradDt7kU9VtC7YXZs5vbw3A4AsAta9adzyJ",
  "key14": "AJLRKE5XMKhNYZCWgiLLp57hCfv8jiXTbQwQ3VEafsWhwpXTveo7GeKaAQzogQKEXAbLmj3D8K3yQAhWyyDVBSN",
  "key15": "3fSekXP4QojWqqUAMf5vZEwGNMAeRqM2wwZ5YRk9411mGiAGHJVBuFv5v84ZWtFq4EffV1ftTWJRWeMurfLG8irT",
  "key16": "23pSreV634BebxynNFzdpmLQkwPstzN9XcHkd1BD3ZSoPzeTTngEKWBNaLe47KM7LG3ZBsRGWdg9C9sU9EG51K7H",
  "key17": "2sG92fStG4MgVJmZDj6APwxWBhod2DRqUdDQthsEfgCWMojGkSb6LJ3MLwNJn2srPnoxNH9WCH4XKrMJ8xv6mMPx",
  "key18": "2XSrK7oa2HD5noaCP82AFSpnGgeDw3NySNwzs9Zc14Zg2QqqqW7LuQNfmpU1ENEpc7DHMmcaQJ8vKxm38KEHYxXV",
  "key19": "3N7k7uXs6NCrTqRcvzU9MMM5ECMduMh4xV28MXwSatoVkZLHy8g5wAxgVoT8r8upMxZ2JmkGAgnZG28pG931Pfd3",
  "key20": "4tC2DRMnbA14vMQARuDu9Ny6cmXJ1vhj4Sd5EJ9FJXdaBvckSUyJmVYAcRDNaVMw19metqUKQhhBrbLJqZ17irf6",
  "key21": "31X5SXsKDRrGUSco97zsdqSrZiBXxhGAdZsBjDFSKzE2zcNyzvDRnj4x4X77mbd51AnhxjwyFWABmJrh9tWuixsV",
  "key22": "6igPrvFNSjoW9jtdF6Ck6nrE9TeTbKAgP8Zq6hVGHqUcucYfekfomNHm8fETsdfyVvSN63u5W1pC34ypYz6AGE5",
  "key23": "66V46kYqrkEn5KoLAng7nQCvFzPRz5YkmVoRFN3naUuVD3gStyPFEt8B9qrGFVwH68hayV6siW8yvqaxGK5ogtAU",
  "key24": "3kfyruuRzkfSPkNQks5ZwscDYgbda3h2ndge2ippo7LR8y9JsfiYmmujJkg2NibQZ8vN7KFrDMg32nBU2cjbxCau",
  "key25": "2NRQNenYpY2hVHADHkrM3UYsi5GqrdZK6sRD1KUFF8Wnk3E8Rs4Rz4G6ogsU2fq2BaRjYcNPrnt2Hw1WWDTq6AKk",
  "key26": "TYcZPtVNde7pZTRKHa3YPL7aW1fHssnjxu3bfqCMjp5fAdRJ4wWJXYosLQuKjJmMvWS7d5ChkQi7WAFpGwK4sfz",
  "key27": "22Ta2JyutmJuu1ZNNi3U77eWdgGZYV2hiDYcDLqUAM3TNcA5RTA47ieEYi7XPK943h5qaR5Y1pq8Y3immVoRn7vt",
  "key28": "4qHZB5gvbK61jdM58ZkYXuSvNN49WxiUcM6p1xskA8gkk842gUyzWt7fsgF1JpE2JsKrRoqJJmZqYQjxUp3EsJ2U",
  "key29": "371FrBNtPpLHzViyc6YsKAxtbGwPrGPBvatLPK2wcBtn2XuQqUcCt8AvEhzGLAhrPBSevjcVVRx3A8Qai9QVC8y3",
  "key30": "bHaEjAGNcf72UauV6AVw2YTqhG461ZCJBSMzzmRVedMx3ocBPSueiNYsZhtKajLyHDL9SDgSfi4KEKor4iPjXc1",
  "key31": "QhAeaCnZ6WUktuSHMpn8RaYV4rUqA2GsWneXSqaWsFe6cMhJVj8kbKiuGyUdSoD5dKzSE42vpqhWWt282iQrSaf",
  "key32": "2rJz4sUBVd5RBabJfWEhH1zyqsVwBuQSMqapFM7HCeXZt8LGc46dWNGm4KFEMexR3gc9aVKL8zL5G4tzXrZoSUjB",
  "key33": "26TiBFJ1pDZ44dwqMZ4Yf21A8VpHtPXAgnMmwaoXrutmGSF6LwZ8WPCeyYCUHK4xw6MpicviimgpxWvVbky2YBDq"
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
