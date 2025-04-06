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
    "2kPkQHrko3ez3t18kYDPnTeFQyt5tm2jVQSQ1Mu63AtGDBhdZQStHcJXibXx77j4f6msqcaqQLZqme7EVtgu44qN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHf3FL7NktENqBoWCxfrRz7zSp5CPqy5SFV1X39c4LZJ7tTwGQ4SrwTHKGjMAXvmBJVtrmeZWDHbEmb4TXKqChK",
  "key1": "4pVSQuheG5Y8t7UyLpAAae6C8srLkWC1xEdgFV8cVgXN4FQtSiyhS5viHbwqfVe3mbvgepFScGrgspyRxEyt9wKk",
  "key2": "4uAMJbFS25wrXFYLsgGUybF8qgmPD3CSGFBmgPvfTwfPHhphCKSDBhRJMaeEKuv4mNFKA4eXzayu8hxRxZAZhptW",
  "key3": "5cNBW15f4QjHQCX2JBQB8veqUdXsyMmKoAZj2zr19Rkr5qAj4TYGyXX2TY34bjdevaqnZhdKQjd6rgJuS7JozL9N",
  "key4": "5tvEsVC6eW6kt4PvySswqDZeAbMxmQjvBKy2ScJHHV1RcFLxT1hv58xfj1u87mv5x7kBgMUkgamXWY1MACpgP11a",
  "key5": "4FXFGY1Dca9oZTAoMQWxcQRWahE4VqrYaqiNnhHC7S55QffmSEmrTzvbbisSYnLEfBrdPeECscnAb4Lak25he22t",
  "key6": "5R8aoPDRhonnXYXBDjyKDApxBQtGGdH4CvMVai4H4o8Xo6VbSPJ3wQig93Mw6USXrWLxPDKUdLZi24fQLoMbHhQy",
  "key7": "5H2HkdPzDD44rZpFxfnyV5CeV1rhh4ZxVTW4Thp1SxMKGux86bUg8Zk49rLt2Gn3oai5Q6brbuhhiUkveXJLGym2",
  "key8": "4bXJ9LDk2ATYfre4tdyqQpVk4RgPbgJscQEbszRVGjDCPLQaAF635mvodFKJHXUcBrmrKMuW7jYFb1RmHgLfSVgP",
  "key9": "2FGKMvR4TZHNSm7RGJNhor2TsRJA6W9GTtDYjfTSWp6sp4fV5UAizNA3CZCCoaAsTgMKiGCA8Mmoz8jwZzTq4yyK",
  "key10": "2EvqHNS4LaQKkpQyBqPjk2ymghpvT2a2Y4TMTnCodKwrVqBDBZTe4XavPGJxGXLpF8thJRUN7MRuzaHmKLegTwBh",
  "key11": "2iFJqTGVXRyMZHazJsJ4MgpDPzVDQebXTX9qNEAKaQ9bknJiLLXZCVmvN92gnmdj2BtB619oLjgADSfA9zMHKAF5",
  "key12": "5XkBsnbUWy4UzQKUP3qfwwZ3dVLnnKtBxR7jGxuyDMNor5wU8UJkKtUdGnMSU86vicwtcAS4Wf6TGKvVw9C5bEgd",
  "key13": "5pWdJDhEGgbWqn31PToVoyZAnwMANGhwJdameZH4zX9bsJUuikUzkCjQboJne9uKSzkMb3sdidhyMLmbTquyJkAu",
  "key14": "2c1onGqoUC6tnLbQb5vkiNwnav7ESWgcVWRMMauvta1gj4LiStLQ5sLma7REFsZvc8GkcKi5pxA3vdro8WXaNcmx",
  "key15": "RomNjc1jEqgMBo3PgaCwBS9hC72e1e39ZERxXuMUEGLL6XvZSzkgwdMDFoC8auU4nfnv2vU8VEUfH1uzspuaocS",
  "key16": "3m25RTcWVjL5CgJGn4J551Yaq4ymFUsCdHZsAzn1StKdCBtHz7MQBuQhxgnD1b3RSXnvoUp3CNxyvNoXQkV4r1gx",
  "key17": "25KNCC5sujqB3nQi5GSPGhqggiwD8XfSihto1g6urm9tqwwmC8sLiMdmgLdH4PBfHNCBEL12kCaTrFjcbHviM9Nb",
  "key18": "3JDcmdK1BccRPjSkH424oV3rV6wRuVxEui4VH4zeFdEa5fE4NY8CJNVcuP9ADH2fr7N86Bz4nRZZfEe4i6NRiGes",
  "key19": "3aGAoFyZRYfKVZXhHHtJA6EjqyXEG7KhAURYEomUueU9VndZAzs4gKqESgGE8GiwWP2H4rNgkgsMjstk3MKh4vy7",
  "key20": "33c4hFAAFAUNbu2JQMA8JY7Wc8XaqoczMpxsTGDZyGjKEvx2gDVuEXuUT1vNrofBk9mCNAKiqFaTsRoHNVqU1DS9",
  "key21": "2MFsEC4MeTVc17VFcDDhsoEJEGRUrz6Hs1pVwueJByRsoM6CKUqjFK1CQpf6eDYpuTtJ4sGmSLGa4avKngLjUySa",
  "key22": "3dqx8NkzZXdTTujxy7cR3SV4vAPf6E2xq1Q8amNie5uJzSe7v2zD46eA1ZovzKX2RYP3DjBNZJYTZX9vAzSk5aMz",
  "key23": "84DQiMBqjLHhVDiXZx1XmG1jNPx1CjngGWz9TKJfyksFFABbmerm5XFNWW4sGAncLekBHqaxPqYdu5sPT2DduXP",
  "key24": "53vNdQ74WSWEPq3B2e5GXfFe9mxVkru7KuKFigx9uPstrdT33mVmBzK3b657iKtG6PY9ZMrxpogL1D3EmBMT9b3a",
  "key25": "4jhwC7Gvcwc3UHxr2aXaoUpACgCBShZjapaEZ6egDae3We16wAJ3nXG34tpdn8mqodzqBxotWWGURhWfkSXxfcZX",
  "key26": "2xei2MhzSA6Q5AKGb6a1KJV3M4JSAfXAAFtiCB234AA1NumTMxpTFgcQGz1WLLdXFwUU38EET39v4Urke14RrHJ2",
  "key27": "4gADdpwppMAwLpPFK2YWjpZDrNb5kpBdP4qAnwMKbdwdfeheZWtdSTKhksehXmSi2UuoGVYunq5R8V8R1ww7tLPU",
  "key28": "5eKFSDvh6k8SXbKDoEBEcxAMDvTAZpv3EMp12YiE8o1e1s7gXLRmDzz29CRRTbEHiaXMdtbybN4uzFHYhnz4xrEp",
  "key29": "5HAHKhpBHeqtCv2rFdLp74kAz96ZPNoxdwsCN7dNWhVXKaAWFPXT5w4g4KbWKM5ueirErpU9mkcHUrHDXTs9rT7J",
  "key30": "3f8jUngvyeLyo7eofmYgLNEdE5nwB41ZvYr3S4jXijvPHk8FHqVYupM1VEb3bYqzrAnYNGKb7isXjgDLfZUHxEev",
  "key31": "33GWqWyCGg8C5C2AfZbYZLQCdBBiGErRC4vLwGVhJUkbqh4swgQrucTd8Y6YzJUFx4HPGnfWHQHHq9k34YEkWmUU",
  "key32": "2eMLo7wbtfU1cT82meoGZ8wJGedSxDVixojkyUPXinmdwEtBKPucWSF97HAeeXNNTJy3Qd8hZnGXNH3QwN8XeZsW",
  "key33": "3tRuwzSXaiC1hNy42WQfxxwvwW8UTBoh3jQXQjTH4X2vo6py6KwhJxKkhLP9fn851yyFKNMgfELYLsxKczdJpRKo",
  "key34": "5Bb4BMP66hXq9p7sLNRjEe9L2uZXBrAC6gSjT3See9n4abcNPMPbjMo972JS5mLyAboPh1AMvaZSmwY8YQLL5Pkx",
  "key35": "4fqPb8YKwJimfEFr1oBNVoBw59Z3pvDGe6SwwdWXGLbD5GMxdFtzbtNXBE4GnhPMETZyEXcu5yPR57e1WzQumm4S",
  "key36": "66fjjckBvHmot7Gg93yPRj3SDMBpdhhEg27m2rNJ3eemZvYNca9vJxKptvPPETd2CE2Bb829nXZ8dQ3kXspk39Cr",
  "key37": "5ACtWHMHNfHAnQr1mBJQWiGXkuzosxASRXC2Lue2qvYZRrX8u7BRCV6zdEenD4pUrDK8kkM1gFqLqiWGgrPRVbgP",
  "key38": "B8g8kJpNVRhZvNhSTEfRiCcNzbe2B9QwXXJj4vUEsWAcytRTaXMvBwysgpTwzz48LpbArfp7b8GgAvwqwRYE16v",
  "key39": "ak56uyjqy2WbVL4TFG7VJVv9QQ86wJk8ZCDaRaPXHYDHu2DDXhoLqF17Sicog5CCn5whQkTwx3Xnvo3yqM2S2SS",
  "key40": "BMqixenSvEzVLsN6wtGYV2yZjeEsCvS1bxqdF9gnvnBAesArLH1EtuLkFwE4LFqZsPnkCqdoqmbg7yVNefECEFL",
  "key41": "5uEtFCNyScEyZwKbpmeUAetFpAgzciEc3ZuaAC67zm1MejrtrG8Ndb9AUW7KCfosAy36qwMEGkLyq6x4fWsBumdT",
  "key42": "2rBn1wngNQnL7Q3GAmj7aVBkX3hXBRjoJLbaMZTc1CUKQqzHsNydMDHz7Dtcoqrf9V515Rh2ZE64mbh43PiJajBq",
  "key43": "397vrViW9H9iEdhVTHdFCnhYh9G3VxbgpjYaLzT4rYxGg6YhLn3zCWJmTU28uT9trxjhE4FtHhBDt2PGnXQQJWnz"
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
