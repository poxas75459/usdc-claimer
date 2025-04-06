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
    "4VYr4ZDjt1wM2bzVHxyPSZ9qRERWWDuCngnb9adSRERNKWomnyfFaT4i4CUrPGugKzzn6pKwT6ktNUy1iMCJFHZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZCvgcsruBDxqiA6sFp9j5fACZpwZcmGYXzehwrEUKmwaZqt7iWpgBQjcuj4iT9aWnWUESdDrFW6pPmnRxVqNjJ",
  "key1": "59G2ZNEyr3nahHtSkiGxFZDVJ563wcEnxDFgPVoxpiCeNYUFoUusEP7wmq1o2BeXQ2fjy18KobQh1qvFyKJF1K6V",
  "key2": "5pwz1Ghicb5qfEvGi4CVh21Fe2JdKsGQ7TxwUfNPBnxgUA9ou33LvciK57Jwcf5N55Qz2cSCiCbqkLdNjSbYZ8N1",
  "key3": "2FiSkNk4T124389mqt6sg1RArfEfJBg798MUD5WCWZgy8HPt9pfA3aVmdBu6RYUSeJpRMcLQyJPakP8C6S85QVA6",
  "key4": "3ybF8zV1y7cNswEgxpMFR9sG51r64AAqDnHgWQQzikkwoErTjwZ3DHcYmHgwNwzxbTFrrhfSGuhcsXMY1JsrzUn8",
  "key5": "54NckL2scwqBHRnxuiwEVPWjdz44poHiM2dcQ2bWg4tS3nNQzjcFgg8q2dRRHpYwadHNeD2nHwX3UAPWgbF8g5qF",
  "key6": "4bTE2F4rf5zyUGeT5tQrGDER51HnXc3oUFHCqRrkBXh3aTcmRkceXuegSz5wCPyigYjSgUy4TdDBsk7NkoEZ3kAh",
  "key7": "5eY55geWwp9Ek1Aajsz5qYLtSrgLvxZXnr2o5nxfTp4VT57TQn3c2nJGiQzk4r3yxwrfS4SGGgMRgt58fdboNcMz",
  "key8": "5z88ibmAuphHbum7KLXRYba2aM6p97ESS3LYPTquRzKWiTc1LBgw9wQWD4GYZqHPfZjwAGD1sUVodX3xRUVJ53hx",
  "key9": "4Nx3HdJCRn8nYBAcGGqYwi8z7rMx9gsUf5xgWgNg1cLNKz7Qw5AH6Ccuw9Wf4fCNBB2C4x5niTrFZbnobtRqpL2x",
  "key10": "5FsBGRm5ee86DxPpjEC5NhroWKU1XTTmF9Z1yjfY1qeUeoFqLsE5ve1BwGLrSJENUqi5iZ5mwTbysGyF1QFgJkwq",
  "key11": "jFRAYwMK5iVe3R3Tx1yeBkboSytyDCua68D66Zau4n1o5dsPk511BNscXNuwd1DDERbWpQSzQskrfhNv8Gn6est",
  "key12": "3eRdpGL3amkEZABLyH3TdefFvmNh1yKe9gRateZaQZRR2zBnfTunaeBFVsnTAP8aTELTHRP1EqyMTGrtfLGTotE6",
  "key13": "426jiEXHNXk1Hv4tnsvmxyZ5waF3rvUbRSN4SHmYmmuzkVYaz4UJ99DPdicm95V6t5D1iCQKzdhiDPhqoDizRX3w",
  "key14": "3yytZZvds3J3nWBVmoTScyi1cJxCkhY4d2T63ymUv6EqET5WGp4RE7YF1iPXfQuYwfPpnvM22Y85HDCK9Gh3wrd4",
  "key15": "5nvPxzpyge98jCQ79PdHNJ7s5GHhbAMeLeEwb9g9N7ZrKn3VQs3N6q9RE9fa28Zzc6v6H2XWY4UdxcQT5JareCpc",
  "key16": "5DtdPqW6tYb5nusxddMSGcdXRRwnWSdCmDrTENonvQH9t6sxVnTmN1R45YY2ZaXMg7yKqX7PvjpBeiQJtoFq87vu",
  "key17": "5dEPhmXsEm2KXBN6Rbcp5aDUjqduAdoa4BAo561ibDQRAv62KvmeZk8HjBQwYKrpddA9UKfbLYJHjTxMTsu1YHYo",
  "key18": "5nBgW9JxBaWMm7XXEoxXznvwmvuuRJ6ivC7xd2yCfC9bpGPKcN73vLkFnAoYHmyR5ZSSqfPL2Ef6Rn2a9hU1Ng6",
  "key19": "4bffNBQYK9as2XZ8JMVjHjka8fX9tPcw8MzPC14XY7cUdFEKvUuyryTT1rThfM52ku9B128nRN9KkPWwy72FLRLc",
  "key20": "3eYQQMyngToWQnJsXqfNFY4zt3ixq7BRPgEtWsKpHDnAW3hNwpYRicxHwX2D55cMo3m8MqUh4xAcGrtYMcqxWDpd",
  "key21": "4EQPwvMkrQZjfFcas4K34W1M2BGJBcDv5jf3ZziHFm2RccuzaBvZjPKYdggSKAfhTKMfV1HNF3akp6HW6DMSAz81",
  "key22": "2npg8EvyoWTvQJm7XLvVcJtwP5taQMaD1rA2WqESBovYcbpzsioBGm79ahtLXczRwJz8LYEkftcoFsHbTB3cpFU2",
  "key23": "43qAg1e4PaDamszxkkVz7zJb7KVLbTwnLcmhNUenJ9EjYsFV1HoprZLjrBL7NwBDUPnuRiuPqpoVQkQAqymxd3CY",
  "key24": "2LH8n6K1uw19B2QGwuH7ncGrUPs1XjNLi2cwdSaqwHE6gdiKH1cVj4j67se5v1CcvmCm5VuGSREAm2d7VvR4ZGxz",
  "key25": "559H1NSy3wMSfGLm6BxucvxVh6Dnzwtd16APb8yjMnWxMs6xe17JEtbJHCD8QZ5yTKtyJWNXGKs2VXnRJKUbsFsW",
  "key26": "55Mm3eoGCk1CZMFkHFiM4ctkcdYoNE4Uy1pxM8n26Eg43EdkQmGUJHX1Vg23Q4X8GhWUy5XLAUwTYu1fxvPJbCJZ",
  "key27": "3DzvG3Q246UGP7F5ErwRhQyZCn5yWqDJYmJe3KwY19LbfHfAXJmVZBSCqukz7V4AHh2e35iPXQVTryxxsGXr1UQM",
  "key28": "5VDVzcqhyuCm9v7EGEZomtM7QSoLRNVfSYtqwF6jV78D27bwZ3cjXkuU9THW7zN9a68EFDFf7dQMhMQmAnyoeJms",
  "key29": "3w3F5tuzE37ZeDwGjCvaxkrpPc4Y1JFXcpmtu3ccn7A6GNyqyozs5qkguqCXiXDd8wqugZQV98YKTSwBmyoZDKgd",
  "key30": "4cGa58rFjx4HEPBmEcM3uTaLaAChWqoxu5L94Tc88LrTBhhNieLLkRSLL4eMAiQoFhvEeUEx9KWH363Fko66vakG",
  "key31": "s86ufVTFHJavXcagVtaRUhvuZXEYfxgPohGcj3vjGPaRiDJY67ZMc7PwHxDekqFzvbH7tGEMQmaEvtHTBG79FLK",
  "key32": "3f8we2juGJvMV7jWkXqtD1qxmncHiL1YbwBjeUkiKQbztwToFBDjUmnuBASdhVr6dKpx9jgEKVEgkfniyxuftfL",
  "key33": "3tVWaR1kA9KN3mz2FXuPPqXuqBLDxBRcrGR4mDJETUzjd4onqDfjKpmuPuiFaL8Xvoh1j9MVPo2nGa8vLcWC7ear",
  "key34": "3sxCwEXmEPbkdGLho7KyC7vHSm3HNH5SprTdm59g924TM7gYRGFSyCsfZeKBYmaZPpnG8DrGzRqZujVAfYXcFasF",
  "key35": "P4CkdNKQXPkA8aoGhE8ju3GmfYwB7NLqAE4vssLKvZX6tLgoqihHSGA1ayBB5wUoLYZdA4nyZb3ioNr9PXEaPQ5",
  "key36": "3aUkiN11YyKTrNT5uerbUJBYQ4t6xBr76dECaTr6sWGGJxXbPdq4cjFYixLC4ujg9FpNGEXcXRJAXCpihSu9aaD9",
  "key37": "2KiGTmDn2naT1wpsdZ7MVvs1JQ7526WNauTcU8j3zm8LiK8ALXv3cGnGD1LKaDJqDb6xJkcQJnLxxM4e3KEUkf64",
  "key38": "3m55n7eqUhuAMbDQz7LsA5b6SLtLcQpabU919UEioozsaHc3mg826LoKfcWf49ku5SWergzXxHJgbf2K3jFY8kTZ",
  "key39": "sNtcAeZ7mBUo1JMyxdTqvPryTK8hAFcJaY7HqGDtqjZSbz5XonDJirvDACi2rVGX31LhJP9T2K4MDbK4N4V8XAp",
  "key40": "27e6oma4BAZDsL4dHqYba6doBCU5SXRupo97vrbTMSQK5FjTkacKh67XYNp8gLVxG7MwubyNoum7kQkL9pzHbYPR",
  "key41": "hbg12kAwm7jDvohoj2UQXkz7Hxhx9JEJ91o9x9AnhAvmhN2psFCtseGsgGxTkH49nxDYkgqYD4ccSpzQHEVQWt3",
  "key42": "4f66i1xM4qHY2W2ESuAq9G12cEVtrtDscFQdbTdemYpWTDqX9XnM7iaDK1FCwdiQMBUHzJC6SpaGmWTKP3mfnhpL",
  "key43": "2FsDG433M7dpNb66YD22N3LiG3pBdRHiR3m3XduWwxFWurk3Xoj8fgXDpvAoqSd5ih9jNy4tKAnB2dwKLphKGg1V",
  "key44": "66rCw7xvy5cNj7Q4Ai3SDe3L4unozEdYq7zx3nSeX9pDGfJFXsZfkynzmhYB8f3TUixCjfVvdpwUrACvRDeR9TNY"
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
