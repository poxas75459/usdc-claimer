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
    "35y2VYRDvbaU1hY2YhzDYgEPUxtRvznKshkNNQucPx9B8LoqYisu7iKEDyXtQG3KSXnd4jwNEQeFpYFQGkUV7Zf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnjJnhihyW5BKoZmTJ5kkpmSnDQkXwyeqqHnj5iDQs81YRVpVFsLyHNKVQJ1pLpExRRR5veR3Kox7kdbLSFkUqL",
  "key1": "4yktgsTA7z4Tc7cTyRE1PVbdMAdn87SToqJRgxmTaTZiV3foHnsvtnyYhgFVt4zFJdKZ4VGsDBif8z5Gh2o5BTUH",
  "key2": "2m7REq2J3wTHCmXgbz76bmy7LjFUvroM1URMib2nHWT67t7qm7Bs2HmThpowBhXLDn1dhUqaH1ok5Mxi8ZuuiKjx",
  "key3": "3i6J3C1QufNUQAeu5JmK7vT8AKyLKBQBTaEqpjGFeKYsscaVTWMv78UyKZZyY29Ts4t88XeKY5xM3yZvZrN2uD7i",
  "key4": "36VtJQRUSZHdoNwbLq1En9w1C8RUeemi4gfhC5g1iW1nmsjZJGGNLxUqvArhmiBYwiSiKuY9srwEeN9STLKRr8BG",
  "key5": "5P9TGyLpFoqkkhsHut3af4w1yyzhitVR1WTvpJNWM5b8bE6GXno6r76HFPMGAnwUKtrvx1iCvsmp3XiSoctM2Zx4",
  "key6": "456RMxfhoVhp89JF475kJ8XsiSen552XRG5cpiTVYespMJCvMX1ZSdpUd5aCYPFfnY2GYW5ZYXZ25soGq7jAkC4t",
  "key7": "4wZMhYiX1DqZX44byV8DGcNX7Mo3SP9orrwcgLcdRwh8n8UvDEge71Gjz7CW1RQa1yDgjbTKHkdGbrGJqexNsCZR",
  "key8": "7YTeB18D9B58sp5xT2JUPDZh8jsdUY8HLBWfge4VkEiJSL13JWb5VGHWFM7iwNa8uGPBMQ9KoMfyX8xkFqEGWHA",
  "key9": "3zu9YRe7yB92HUQS4FnwAQxp3gGcW4Hj4A8pch8KeaawrJTX9suyMeuPoPiNFzFxYU4yxr3tHgXemqrDShd6HPf8",
  "key10": "4MWA3fJrL9UCSR2sSg546VEoR23d8PHzRckXx63GAxyhX91dCXa7u54CLhrTrcLPraovZWq1L9UpgLXigQMJbAjR",
  "key11": "4839RrZwuwEuWd6VkLL9zz41fQzQhRFJaEcuQdfBjhivKyBuP7bwaVp4aUzJZCqYbS3S1QKJkUyN6NCixaGsHPZV",
  "key12": "LrsFq4Voxs63Hy9TNb6AAVYC1VSGqiL9uvZVYrRF7zcEhLamUUFGXeM9ero6EFRLW2ZbRANLyr9BhT863NBR9es",
  "key13": "5Vi85MEdjaQESnxuDs28JVEBuhrZmB1ZEp8jFgScVkpWwmf8oqWJCFrrrQU3wbM1jMm2azvUSoGQTPFP6aRWijC6",
  "key14": "5qSKa7WaYo59SRQBLN6xuVJzCKnw7H5Smwd3oH6NHMAPuPLVCVEeWN1AGx7NLY3x5XTmfxzdbbRYWApFSSo2H5Vz",
  "key15": "4yGrrrWRp6Cn6a1f5khbUozr78dWFqSoL3vV252QnZts6QFMfE7kw7eACauDVcr8qfsZkJbva1HoffDMs4A8LrX6",
  "key16": "5QWFyTjqZv8TeK8wQPKsKkhHVyGZjcT7srHAkcvYUpqDtwEQTX4LseruEQqausbcPoe7xDHHZ3YgeX7x9nz3XsaP",
  "key17": "3S12ZhWcr5BQv41oKpSggvQF88fRuSuPmjdTESX2rRaog7uBF243UdcYo4F6SVEYtGkCgDwN1qNfwPRuWroP3Knb",
  "key18": "hQ7dEg45dvQxFq6K7DzWQrzdZKnotdaGRgCHz6j7Fh93UERGYemM9CYcPD1Du8putfPpAoeHW3MqmSm6ubCePc4",
  "key19": "4W2rVeNoGcUmKLhcfcqYJXKqyHqYJAx53bFFJBxu7jGHQ6qhzs1xhdjQnRxyJPaPkxKreSW4sNBJVEfp387my3wQ",
  "key20": "5FycPZVZFJMJM29k25FBQ24HqHc8ho9TjRAD85eethFTiKkh6sij3mjrhBNC57NiQJ1Mw6spQrjhugu6HQC5XVt9",
  "key21": "HdSkYsjrfeEajhhMTM5Qa5c4Ve4EVqTKV4BxojhDxvCXTgZTyR2XSeASNYnwTeA3RZHN1e5Uf2TjcFvhxWbmERt",
  "key22": "5vV9nk8YwxJaXZ25jqyah88Vrsi1L65X3mJkhb5b9oVZMxRBb85fZ1WUFDsbECJBBb7uZCg6sFxJJMhUm9BzUKm2",
  "key23": "3KqVyBZw9QPDq8FbxftyAQnx8hEHxt3gdsQEwT5CVACaCVjgWpHKv8SZvrMe23w1ozFxE1ESdoqELXQVPwSMhM8F",
  "key24": "5MQrvnocdYrsTDuQ63cBJMVo8xCVSd5Lw5ebKqkK94hp45KjK7qsqHKZbgcyHMMiUyFq4QZSymsQUUV7DBPCFQm4",
  "key25": "2Rxte9fsAcq2PqFdJbX5EFEAVKS3R8QnLc7wg1tkxtCttqMAsmHpJccQ2sDNgiPgpQtzuPtkTimWgddCLcLT31sC",
  "key26": "3eVGKU8w8yPfGwMrdcPh2TEmkvYUgagJZg78mf7kE3gjHiPnptFyznPFV9H1XKNhj8PdYxtstwqHZZRtY4qmhKUs",
  "key27": "3TVLjFnbuvtmSZWE1JPRhriWsn3bSSreSYBs8qJmJnzfQi2G6vvCrYReMXh3Xg1MvWQQyFK3qG2ETQunWJJkMAKt",
  "key28": "vYJuJdWQ77qmHQCvyUbKhSJmmSk2WtuqtqSsnXqZ7bcc36o57RgwieUbiPtLXKYFqvmoxv4sDsjP6oCm7iVG6uK",
  "key29": "3xCVHo8b9Pbrx2Gtv7Rkm1QVvxPBk2zqN793dojqaiiwNS7F7zvzRaJBGCYYcbhMn1M1GYXRoWvH3BMRrWyMZweq",
  "key30": "GvtNpXa4b1kmz5zUV5TJuhPVh9W6Lstr8LJSpQYczGEZ87PYMGyRq7go89UmL2yPyDWhkmpRwzjoNj2bt5FQEes",
  "key31": "2cnbDM3utqg7QLGB2Ty1CkwqMTdypHjSysionUd6ZBs3qmsCsruGP6mHFWdRFmgBTYuceQb5eaZ2ThMtC1rNE5En",
  "key32": "2FUdp8u9oeRKRmNrHHWHLFdyAHs39R7ZosuB9zmL3DPdtHariWoC64ot6DBzvfwkAqVXPKs7nvusKBGJxSSoFfA9",
  "key33": "5TagZfDcdfvnCvthoSx4AsGkm1wKJksZw4s3Twb58S3oLdLedhqmCj9jnMTpCvbBRJn43aRsCEWJ7aXFr5cVEQ1v",
  "key34": "5yaXiT5KDxdf5kcsEiT7w2zCLPUoHrG9uYJ2hmZnGJsM5fRL6mtQB9zWqD9M8yFPAUdUTXtwQtcRVux1UQN66NRk",
  "key35": "oToMHBtLU3KVrpK1kDf9QbK5GMKJ1Hg6rtDCfTZpbkFRXyqk6joWbuvLZGGF49LWidWJsuskRW4v28UaL45tyGt",
  "key36": "QAoZjvEmWv6GqdTCh5mPNnzwT1b75p5o9wdjcAvPJRTaqgu9X8TP6yPjt6hu4hUGi1Ys2iFGzx4MAyrp1q6RDrE",
  "key37": "4zFfBW5kxNyygYJ5h49TKrDUma8UqrScAbeA7vTnxbcV1hLZM1Cd6BscKAATPGa57RqYktZAqA1kV69Swf6rjAPr",
  "key38": "i6EetBidC9BqHuwVQGiaHSMubRNbyNKsLabgavbShNMVbQgfYazsh1kKo27GGemLQ9s2hnoysx43mfScnWYJGEi",
  "key39": "3A2RgzmECUdgSxzPuyhwYBuaNNFBZXSeYmoMxHfDrzsUQiQsoV11DPBtsZ9xjkENNaLpw9QRmSva8ju4isHA2DXV",
  "key40": "4T3hqPgCkPbip1wU4UVK1GNjvNBRPjgqPzJGx1br5ezLvUVYqCuTTfL1EQtJbWpeEe3bjKBtza9wRjQVmDqqTaAw",
  "key41": "2aiHgkpcM1y9ybQMsbBJvcAxHZ4jSnJ6SJqm8rpVyDrYXQJTEKky5T9Fq9cZP9o7HtEHDDf8iQJdRWq19P3Bmjq9",
  "key42": "4M58q6CmrgqBg5HqyhcXFhE7hLyXJYxDPzD6o3mQyuqX6tMfwFFYGT4VMvFwb6kYJCFTsMQozNbgo374dzW2Tteg",
  "key43": "kyKKwx3u8X44du83AdQEDjWceRJD3vk6537krH9sngHpMp9xrpsbJoBKyX4nVQnbWQcKDKxW88UF4kx5Qso59js",
  "key44": "3S6QH3dJm26crAYWxeGiiLh1pU4MfgoLNy3mRKVxFcM8zFFJWJBJ7RyoMBf2hku2RDoqkijkRKRaoX7j9y3SVrJV",
  "key45": "4SELpBQyZAeY78nq2XBGheNQf3sXRgafE4i3nnDeaUjqDKafijAeEhAvJ7SPgAtvtA8QF2fV8bW8JdoAJj8HQ4pC",
  "key46": "3B36HoJgXpXsUAZZ39AjozMem379i7CDWRFKzpv2C52gcHarrgT74cHBYjr5vcnLWPCnoJ2msNumwHXCBizuFhhL",
  "key47": "4NKVathftjAqsqTv2VQcdCyzeeQVT9g2HFMi41XpqNL1ucsu9vq1gfFkeZoxvtADkpLYscUtXg8QXtGGGNuvn7J"
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
