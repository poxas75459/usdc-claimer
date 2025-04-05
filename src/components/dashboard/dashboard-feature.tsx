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
    "5WNCG7c75WUtkS7p9F9XhyQDabnzhehjpoJNTVSK9SCYG1RGdqKog3nooDePUPBptQFVgNtE5NHe1Ed7xnvELbQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uYAKGqKhAgN7g1NQzmcDZTRqFhbYbz4FHytS1VzBzMEnbjHwpfVa1fcQg2tDgUUJWfSzaLqMocvzrzSWMRwWXvN",
  "key1": "5AexAf1bDWYurB87zqiiUEvTmf9uqYLsNSEkovdqoqZ5VPfxUED8PReUpMjEtCixs8ySnW6FMuu6VQuCLL5FSAsg",
  "key2": "5836j4BWovv94GsUJruk5LQsEwgXEGGZibV5jDGcHkUMLswLaV2Dgud4Ejon1nH3XKHL7jDad6kNufs26fXsmDhn",
  "key3": "4GQM5bcKP7ZHLR4z1Q9YsNa3GtBTtUi1zCWtpzddpnfMdPbdAGGu9UoJg1GTWnKVPsoPcMNgwy9WfuzeESWx8AcG",
  "key4": "3kX7cgWU97sQi17yaQVGDLQLaErPXhpGwwdLRryM28cwsMuUGzXGpquaDQc7mALAKwEAcvvTri79jn53XnL7M8YK",
  "key5": "2GzMriHLv7caaG2SYXHResybCryL6nQghqULfjmWDrSonQDneMWjem95yfh58vuMTKow5Eb4gR5YQSzBZWjyKPay",
  "key6": "cnCjsVbeXNz6bU77Bj4XN5tXxj8ZDwiCDD1GDr8cGZkCPTph6mqMmnpJfjqL3qF7QUBJqHnDSH76KUz6Zxu7mEe",
  "key7": "2oJy1BfntUzbbFE65bADKMH8yPwBQHfvs6jvBK2WX9d5L4gNee9wQf9RzygcZk1RVB2x4WJdT68aE4cPsM9TMKHq",
  "key8": "UWp1UjwzTvTea3JwjnvcYUovvAcdxV9pnUCM7Qn8cWJWVuJcZq8iwCUisyzCHcZ37Gd5jx4P6naFkDHEPEcLYF5",
  "key9": "52cnip2Vk9my7kFdwzLgUT4e57f76F1akBkAuZgGvACjjWURWWpnthibgG3KR5uS4zbkPwPczutW2kiD1GLrJY42",
  "key10": "3E4zP75KkP1fSKS2MPmJ5V2s7E3cAjFkM14xtMgzAU3s9bKfEQ5htXM7ktMj5BshxyffSLFi63DAktZA7z6kWQ2P",
  "key11": "3AdQdZ3KY5GFUY967bZdfJ7pWkogHHicQyxkkhew6g8hPDXQmH9Q58eo8waaCcSarfwaKby78imC5aGcmvqMYAgo",
  "key12": "2w3EX1nv4eBD8h5AYUAvqukH6FZuSX9NYRNiHR4hLboaTgP2ipNTu1Uai7EeXA87QXKR31Xyc4wnCAPwQFjWwMXF",
  "key13": "4zvWY8LZkWZKnTx5hDzt71wiwrjSLSWwxF6R932D5dQ4xfeGA5nFW3y9tWz6cUrLP7XGTrRpPgTvWFppcEDgAUFx",
  "key14": "28vCZ3XUn7Hb8FT64MYErkHXq83UQ8HYzXkkHcKsuhcHKSBKZZhJjhnrtuzWUV9THRMAcWszyuP72CetT8om23dT",
  "key15": "4MHnSegdecqK1yL8PLcE7ycTpR7mUaAyR3a6KRh1wxrqFpyjJpJrPXyFfiDxBCcBHAi8y3zaQ1vdiaZBZ7muVMX1",
  "key16": "4PF8kPoYvSWeaS4qNGHsMWRgoVNpFn1Bs8xnL3xFLS7Nw5fokNVwV3JZGNnUw7VhTPSUfnEbLbXQDrQ3F2F8JtLj",
  "key17": "46oo6UmRwduTrqXUJF729gCibNbv2TchKbvKV4ZkS2dPW667DozBsjNDbbX3d9pn64a62jY8mC827YxFtv9eeC7g",
  "key18": "3ZVBYysRahMTnFYRRNnUBTxD8r35Wgv6rz7ChAgEQQ4c1hyhNe4hZXSF1ZuNhyPMM9AHuK9qCV896jAvm91katrS",
  "key19": "26aAxznJfs9SvkgnuDpSe5iRmiBMdvGStEEiSoWSw6fJdMWtMCw2MASNsM1cqHtVTc5LusxKGzPztfmz8yqx1FUR",
  "key20": "3X6yNxoEpymoAGXdz49SGM1rnpWQTSDWy2qdLSqEfN9W3ZSqmg6qz29rzpfzb3p5Nqd9H9cFdAgeydDLWXzAPYQp",
  "key21": "4iBnmLSUxaC5jngnwdGerzceJPUTuBczGyRdgmpHQUFtrqjGTa4Jx3jAaTQ54W8Wter8iWS2HTHsrrKX3KTkmjGk",
  "key22": "2NpTtNoLdDPsUi7iN7hCWwzmiMtJ6LgwciCLGfvGh2M5H3SPumHxNqqVA1EKjgSyBZopZaAoJHbpoCXBrdEGnt5D",
  "key23": "3tYqFhTpx93GyKm3UBabF6YdGSTfcfHbaxYdFyn3CCmevkcie1QMqUhQpBQRvqzUy3GcoyJ6aRWEQh8B5oNW68HK",
  "key24": "2rCc95qUFuADuvhdWn8RtbX1rPCtvyMFKUKj2cZTHJCRFxLNYN6PHDgPoJGrPeRZpSanHSfGhEMVsK5QZVVbzDET",
  "key25": "mFc49PAz3fREjAL7PT4VewBAnir7sM6h1LH1dV8BGFPihuuxSiKyGy3PCXUykY4xJy3VCzpt26HS6rKjyFLau3C",
  "key26": "3k7YAUYoU9dw4izcxkZYrqiCbLFQWNRTTjoZUQVxVt66U64fdjggKbaGi3JiSE8dEUtUih2UDmnFVMzW7oYXpqE7",
  "key27": "5R4WApdx43xvxWPHEWaPoQD3DWMTgPBw3dnZopP9HbcmvHmQALQSiRv6NTRrjwyjwVq4qYDABxHN2aXCXz8ddYJS",
  "key28": "57oRhGdFMkvCemHzqe1Tf9PVqzK4W65WGZmXLT7XTHMPRdvsPbmENzLjwqUpaM3a7ta8zrgLNwUveGt4sLUkEEjz",
  "key29": "9xK8k3sc1MBdGd3fZDkN1xCn2nhhAo7UDF5aFEKFbYhouuQHrJKWB3E9tcmD1kw5cMHLNtjBWnBhxit2yUUgQo7",
  "key30": "56aAGDg4bCRWK4Ye2WtrJCMXKLRiFfXq9c7MTR1ZFbPhJ7KdM2rNN3kswHDBp7gz2NWiysZaD4467PKqM5rLbsxJ",
  "key31": "2nDHjwGSzZBYi2D8nrbbi6f4ZSmN1qCbWC2aooGmTTotPLyZouWtDuqmFU1yFMA8NMEQ3XnUqzXLyGhxADfUbqnx",
  "key32": "U4MWtJ3Mhk2seZDQSfwLFDZmsHHEqBBrip5NP5s3HnUvgt5GZYHQrRQa1StCLPg2Lshi5S7CbEX4mBVPPsim4wm",
  "key33": "49hNxphzvCon2fkGe1dLvfiQYjXUuSoHeW9rHJy3z3zTDq9R8Sxa8kxQ78hC4VansmQKBtUiDz63XQSJgTocddeB",
  "key34": "5JgSRaqYQhpa18UijVGXYV5UMvZA3dhpc114bxCjRNdLShQUJ85ZR18NKnHV5sinYp6nZLXTye6jLW1azoHW2Zmm",
  "key35": "S8FY6PgcPRkE7vSQxWXd77d1dH87nthCkBvPdpCdvE5jjfyyT1tcrsZGRLzRPmcdZFwcHF2tCQ8odSwQjqrjiFB",
  "key36": "3FBn4gYW8yZdAxMJQecCEQpJ3h13wni2YXb8EsmUo7dLtsB9KFeyfuun5526hyLRZ6utm6rNppBCtfGh3aVSxF3Y",
  "key37": "5DaiMGvjpSjH1fpjJkVadHdqhTy7iL3wA1Y6ZhGUUKfeTF7UDPUUou8Wz4axqAcAqjDQ6RRRcNuhxTM79Xfx23k",
  "key38": "2v69L9X98wdSXmyF47BusvWDZ6oV28JJLEZgsuA4PMdik94mw9Z7FbTwJVBBkoFRgKRUsE3r6UE9qTJX6K6jXZqa",
  "key39": "4eRZcEomBu7RW2qHwN5QbpYqnP57cpsCK6vMsi3j5kbPMLcLjMGp8E6xFXcYv49gxGdKsPNF4vrLgT5fLWRbm9A",
  "key40": "5Yk4RBF46wgWSTfPTL9mktHGpD6vv4HhZ3LjyNgtXtyAg4f7Dewvz9kg1WvCKY7xqL3aeSLQHnEeguNFzM7kgCDg",
  "key41": "4xbxgkMLuM8Yvq8hYZS34Jcn5jFzC86HzZfdieuA8emb14713q9tuH8m6iQEmg2KqxRc6rdYD64WbGXAQek2HZGk",
  "key42": "2FbaQratgzyDKnENNNBNWahcCST1r8gAaB4kSMsmfebpCMihku2dQso2GdNSn84k57t3Qq272gYkvfkENWX1GCmg",
  "key43": "4vyR3J7ujCjbcinQ51qCcB9rvqvxMeEZAPjnEyzfw2hWYcYaF9pvWBggiX1sz65aeYKMgnPaMyZHzEVup4DYyJ4g",
  "key44": "5L8LujaKJ5Avd7QqTMqTeJXiThQ1aW5LVia8ZsKC8sig9LuAiwfrUwdFr7NLrip61PRTE4YQj6ky85JRpqL47Lnc"
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
