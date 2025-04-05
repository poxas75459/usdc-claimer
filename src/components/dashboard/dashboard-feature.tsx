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
    "5Sf3RoFDJqPcNz5sXjn3k5czZBAn29mZmgJuLUhXFBz4QoSRcvgVRiWwc3Y1FMnj8E3tEHexq8wRhJo2ptJk5twL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ARYZG5BqRxZgi6h7fwyGHez3bgZCTE2GAhmTGHWzkTLUxLUDrpE6cjGQoqxKa92KdEhV6beLw9i6czKKt91oBPB",
  "key1": "4HHHmeZfqfGWZuAPJHw1tQUqtXNNcsPk1uPn4A48EPKodAMACVhU8NLLwYWWbdjfE2jf4mxeL3wxCXe394UvA4B8",
  "key2": "5iKvUTnce26nW1vLpnawhiwY4QPxdp2VvzZwmytCkB5EcR2ysF4WDHgUFTxEu4navWr2iHXnhfb3dW5ir5Xn6Urt",
  "key3": "4JyGNaLo3dPvoephTyxEc2s2UpuFHoKjWjJNUz9JKTp1n6ieSKnu9WjDBc9RAL3Hja8jDgbzGLvTzUazyQeYwRM5",
  "key4": "4BXmd5MSoJY7ogGKTyUTKGbD1S4igmpzNgqBzP1rsfkhFrGJjzZQmvKxuLFFRZg6SBGuzCiREz1KAPmGEzHMkGKA",
  "key5": "4B7AfmnTQbQ6fuKpt4EjqffFyxUi1DrCNLsWJ3b4wBsA9U7Ng7ncM1VRKE7UNkvcSEfQ8EggsxPRDKhqHJTYbpvm",
  "key6": "2qAuqqp1PQbrCWEx5jXqRQy6B8fNNyJz7wpBUqHi4BV2aTS57k3gUnGQhkNc4DSS2xvWwBubCFG7HaSwRr37ASX1",
  "key7": "23SBuP8nBbRGR145mxAw26qDLiNuayKdhe6bjVXnwakPwg94vuaj4WL5PSCvHh8nTw2yWLi4YXAFfAfJ7L9qJW9N",
  "key8": "3d9o7u4xyg6d9swVR7MWguY8CykxLgp5imCq4ZFRuPWfLPgHGRDtXKAvwtQ6otfdtU54thNCh9iQxvKqWCgfiDqD",
  "key9": "3vc8uBd17W2dfe37hrV2qmpLttjC7aHHhq7Uhgn5kYvP4PNjnHJjsapFGkUYoJ53sXiFVTtkn6oagds9oX5rSYU3",
  "key10": "48xHrtfzYc4p5ZJ1sUjwwAayguxPUY3HCqQAawap5hQTtGkhsV4aUsDjz1FemvDY1xu1vs7HdcnM9jgp1ooYUAwf",
  "key11": "brp1c3s8oEe777N6HRNavfTHpQNciRS2Ew46PCCmibt4Vmh4vrWuxG3B8d15gbPn9ToLDWuTiwxsDRKSG1Qvd4M",
  "key12": "5m6LuGfoXGHoxCwNY4C7HLGuVHyFhaqD1coB77MK18LRHZj5JBNENzVQejurukXRew9D28PSDSzchZs8KaXXanzY",
  "key13": "ArZ2jUp2V89wMDkqbxQ8QMfxaAA1htVD42yxFC9zGYGYLMB7GHkhRNvjCkaYegvoK474P2xXp933ysx1WQpUqJ6",
  "key14": "2tMjLMB8mPqSGWbhY8Wtycgx5PddBoboJCmgi8g8oybruYHi2gFj1NjhNiU75Z5VNUYaTisoPfbvqtUQcTFXXE6U",
  "key15": "4CBshg2Gnrc2Wr81KQxHyhrAd9KQr6ZRR1btfeLrTCfT3PrjUxjWLiVgHx9BSfavseCVN6yZobNUk1psVfRgmx9J",
  "key16": "2pPp2QSqvgMdmWLf1jGvZjEw39kn73oUGHWTC5gC5NuDFkJ4GdLWFchw52WizGPv1EWiZXZM28SHhXN2Kff55JKi",
  "key17": "3SY6rMnQrPkazZTkoXySMSNJRYrpLSN9XBQ1WYGeEz1kP1BDXkkaXBMaKQYjxuXdQp5dxe56GuyjBKEcT23e3bg5",
  "key18": "2dGnY8eUdKmGwzCtQaL3o9Pb4YHfEfLHMvzpTZ2TBHM4kjVuVZnQinEphRrLoWcPAuhjz2rgZVMqpWhx9hf4ZjNY",
  "key19": "WXV2jLtPop2HKhN8sPRR4BQGBwrRYXkyqjpHDLVMe9sp5VL6q6oVAS8RipgXpbPcAouNpqAZbSTUXaaaFhRoWeN",
  "key20": "4mLzqWxCSykW2gGLysGuzyCPVJWcJkVSgKQYXGfS5H19123uSWc1tRz1KyrJHo8HEdcZhfdJSaLVUED4n4B34DGr",
  "key21": "3XodZyMJ12vh8JrWRjtwDBHMqdYhq6r2FToks3saZo9j4P4vgKS7qTBy8gsRJUuuMvxaZyd2Rb5MHxtXw1mCWUmh",
  "key22": "46ARKrswyYzXLPaLUana87YTrrLbeQrDLGigp7i3YKgmGeem3fupML3BYwjnyBXhfwoerKH4pKLWitpRHRWxhqKE",
  "key23": "4iD7oqfVETEWV3qqiB1ignhxwFQbUDcin3bxFSwvSfbhgqXT3UAMxTsGEhDiCirJwiz9LvDbSEfAHVDsi3FzqkRG",
  "key24": "4eij2bSJ6nFnbUJ44AKLaF9eMPU2n9oJwKFeZNZdg9qzx7k6EqRChErLnr8ajZrSjVMP36D8SUtGNb3NdksUhcwn",
  "key25": "3L1Zd2t8GUjJLULC1kXxjRyuvBSwtjb2qMjnrEJg2pSUBuYxLCZSvB7pLjwHA6Vos2BQKrPEDtzadWvijz5mi5Gv",
  "key26": "2mGh4DL4i3TiN14ud5pssGoD3vQ8mg9qWPN2EUmSAcS1cU1pfrGhGCV1u6BB3EvUmJLgEyap4aiDLakj3ch19MGV",
  "key27": "2VM4FcTFyiZRmq6ch92rXFaAmhjoKqknRUDX9Rw9AnpqVEShz3Eb1Ngox9f2vAa5YGLMKpHa7HMfwac9F7e4vCof",
  "key28": "3TCafsv6tGSRB1szWifeDfsmigGkcgGswfSe5wSGMkFcXNgKCwoR7XWkwt9xrhm2A3Hxf9nYAm96BDgNZmxSTQMv",
  "key29": "2ZXUwEFp8znQkVSXMkot8bMCrGvBznK39S4dPkd9q5fMDZ7dPR23ZHxJ2yVXg5jt5YaWiNMgyPGjT21YXhyV5nDu",
  "key30": "8z5Gic9hjesdXxuhMfD2eUNLg9J4JCsnraNGQk9ppKBkbAN6hd669aZeuUrwQs8Ad61rzHU6QixdMSjHqrdoUEV",
  "key31": "4G2Wm7ZdG15iqCuKHHNzWAcASXhsgco7WWX4ezSBL6VQFbbeeZS12XwemFhnjVmhrT8dMWLX8VtPqHs9iBrqQ43e",
  "key32": "5JVC2CmSizFo9PqStHsHLSGPvt1pngGYf1es6yw4iNrFmQCmF73ksL3psLupu2pgVtBKXCpMcmapDzm9qYBE2U61",
  "key33": "3f5SRujBw7t7SisYZp8YU4Mddz8ed5tLHhNBizwk4LJfNWUm3VwDZmHR1eMDeEZGRc7mm6VoqPAyckMeooJbYLto",
  "key34": "42txM597S3sUvGqz6q13UrSQeX2dDwVK7hWmgbsvM2gaSgV6B3W68zr18pjsLCmMhFpVL1GrfXqhUvNNfkXFNgrQ",
  "key35": "DeUQBy4w2gbg8EG4eHrLFsDZHSoR7SvRkSFrhar46oawJMTwGLDBiMUbNpoKGsDCjMeXBR8aWtHCodc62KgbgXk",
  "key36": "49ptNPT1AchHnUqxtvVNQcANiqCFTZ6jGpD6BkvouzPwEwENThsfUKveMLYh5DA6ksZD4t9afwso989L6rrWnuYF",
  "key37": "3VP8PiaHwNTbKPFieM1AYNKUGpK9hCrHz7s4LvGvaZA3LBbyr2LatwiYb5oUrQr3YyyuNopG8YnTBwDvxX713LkV",
  "key38": "5KufjojCKpW8XvadXqVNnTVpqzRG3iCk2tgyZU4VoVNwavLiG1feaiCSRc5fWP99poZy7Pf7SkGbWUmWWE5EvVYS",
  "key39": "kfwUDcBdQCsGcmPT9a5ovpv8ke8Edpgk2g3bbxCxCL5KFgiSJrhhkDdb8eAESJcxFUx4QbywwJ48o2Q1EVPaQUW",
  "key40": "3bhdnmLYBHvzEP5M5tgJtzkw23tMZ6mPvtKPhzB5QHLpenHVswtLoMNZTTwS2GRrGbY8K9LUQTx94AnPtyearRvh",
  "key41": "pRtaDYAJrwhMqbMSsPJFD4sqB8jkvM3yAYsHeHNnVDgGDnNLHTDuYFxJXpEUaFSDCwacgQSjyehEmU51tfu7DLV"
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
