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
    "5Xyx2PcPsLpkY5az5a7RH5BcThfVWG6s36uYzD9TKBPhgabtwT39L4pmc6LTEWYYnYrF5nv24qpWmyVSwzUboBGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dReoMM9o2x1jHSkBaUv3QTUSwkTmrQXwQzUEHw5JGbCkVUUVzfXkoNXok2e1n9uFutKyJ4PuHQY5QCX7BAERNaJ",
  "key1": "GgzTDrbCtx4aQwneSsqv8zf7YkfoE5adbdnahSmwcvXGgDQEL4ux3XVTZkox5LjfoDZsvRBoYVLJcsRyEa71psC",
  "key2": "36UxRshm73tvntyYm6zjDCR6zNyoGyqYefWnkofiDxRz9Db5ejDdHX3T1uBv8KTjGYkBp48uU6DS5e5xf1eEK2Tt",
  "key3": "woxKoF2XEVMJ5EqW6i2UGTypSQvxZGCZkrWgFaHYdMft3Z7Zns5B87TGGnNEQtDR6uRhbQ8GPuDcjevvdQGgJQK",
  "key4": "4nf8KZbNjxDCPpdH9wC8ZJnAMpe4MxHhrgTr4MuyTJdvre93tBMkBqBjvaMHW72oKTyebipDc4JGUwrrXECArAF4",
  "key5": "2ojvUrwS2ujVcEsrjbWVMLyFzCigpnQhAHzrwByiSiLjPffb72qstMuK5NwdY1dnSM44LRm52y8JvZFG6UN5QfXR",
  "key6": "66tWzXtW3nmEE1ZUSkPv37ygHM1J5fadARLivjkE3KW58yrKTRGCSNWcH4HFxVLJUjJkvWLKaJAGfhjXib3sMRBv",
  "key7": "sENkA2NNihfHsB9yJUwXdiVH1wPFeNrDVgXn2PxPuN2o4ZvjDysVM9nrokv2vjVfQ1MkwGLPGYjnrq3TMCsMURm",
  "key8": "4tARWjhCRQcQcQQ3wKVpMwymDFKBqdgq4SQtn5auThW2qy2woXktxT4MavYq1U46TQM64EUBgoySe4EfVsswAG7b",
  "key9": "53u3jLJAWFVB5KdipemMLsdCL9W8zcayYsHzddRGFkDB7cuudDi7iN8EKoFeQYCoTheDWKKHZ2Vb5eKoAXhGQhkA",
  "key10": "4QBfeokAJsKQD8bEYvd59uLGcYNP1bv4K1baLfK9F7vLsoDLUZa6wmZxdPRogz43PX4sbh7hLvmVNConzZZv9Vx8",
  "key11": "3ZGhJQanKpT3QeScnCb1jmajz8TRe6hbf4KkM68zTCtpcfYJqKvyu4RtqLWrHm7SPE5tnWQJf1rGu2kt7GXQXTbk",
  "key12": "2sVWEfzWAQyn3cUgHcDojG2ddWSfByvzwpnerKQ7oxMuTKX44QsbxZbKS4HcszKotwuafBqS6w2yhbH39hbx4LPi",
  "key13": "3J9yND77HBGXAu7owSYiLcdE2p98YWyibHEn8dseRxmuNpdMGRpCkJFcxFFQFpZEe2Hn4reKoLYFHTBPErGDHmTH",
  "key14": "LoYWKzecsehXGuguvhAeBS1ddAccjPSjVLnoQdTubAniSjySdZAmVnQVJDSpvtHNJQfLgiSM1gFEBgCJyApCnAB",
  "key15": "t39hJTHKE5JTAMR5UcTvQoxvzVDJ1YbCthbe6TkEAFSc8xNQkaV7bu5h3HAEsbj8EsAXBAuqK2BuDFL3jvB1LDN",
  "key16": "93XFHMH786izyRoRvtpffPMwKZ2HL5qwmggWqLFTifjzywD87czsTFhizyLgbE5Vao2Xn4R5EjtMHrbbhLqN4AB",
  "key17": "kTsZC749NW1PbFLzz8YEVcPaZjGXMzwxxUKiHwsTfeRA8xDZugxaAEdCoA7jfEUujd5bBzRSSVckb8r1UUNDuwS",
  "key18": "4ixaADPoBHitjbiyhZsMS666HiEUY6Lnu4zEmhFS4GJMFRgBeArc5hGwMwscm3b5rYex9EX19t34myUbjMUGvE83",
  "key19": "2zywgt7J5WwiuAwRZHjc8wqKUhvsDdop1FSPoXajHB8n2HhE1uMfBCwr6cqemeXhGUyz5swRZ5WtYyXuMXztHqnY",
  "key20": "4XGE3iUybnGuprfPoPsVoLhquJo7zuK5kQPbvXvE1vTVUbZNJiLSZUjvqEGhc4zqERZnqfoUuFJ9fxU4XvEDkWs8",
  "key21": "2AXziDqPZEoXxmfGNxYvt7bpvAp4Un4wRRPsLtktrH6Y7vW27NbpbM73q3B5H848LL4uW1rqeZv9r2Gyvt9VCnZG",
  "key22": "4n8ew6Kn2GsrUSag3d8bVSEzv6ibGgTewofhNNNsV2Scn6v54vjbngqw2GJfFhP9goa9nQzTnbu8xHfWrVAVfJQ1",
  "key23": "4KzB51TfL86oc4KJzD3Hov431bg3LGb5nbiXoEX3CBGZL1ycauR9J6chQVpzeny6WkkWPBWgWmM1aQDEsjF2QWU7",
  "key24": "35uy4qKq9teYMvpBDJxF9mdbze3yDbmCXqyFBoEUpPRtceE1JRBbzjLdEbHb3KLxEBgJhNurW4YysHUhHLhPGjx4",
  "key25": "ht5c3kTaeQXFvvUmDfJY69E2uxfqTLX6j4XwyiaEHfhcsUifcjcGMkaWscy1pySQ7ApyBxw5xxqgpjuiBqUpoDv",
  "key26": "5rBSyCpkhd55CT5f5tfrXMpi1t7Ua7uW5HrBMSm9MA6Tsi1hvpEnQDR5NnnQNiG6UyM4jqCtaQt1cjCMzKfGgYUg",
  "key27": "3oAC9DmzzK7WtE47fFwxZRYnpALrtTgTZ8oHTAgfzvchy3jmxnnAiX2kA1FLSUYnGHMYndhPYzV5cdtRz6RX2yqW",
  "key28": "jSMu3cWZ1ojVEGDQCVcSznCk9zkaXRWDEjfaM8Avv8nyFuMLMjAuwCAW2W5Yh8SzcMFe1LsCexemC4hFtV1i1no",
  "key29": "4584gb958g3uRzaUzcZ621LdgTtztEhr2mF8ZvSTcqJ2719NbDocLRdt1DidPiGxna19biBQroryjB7dxuGFhmjg",
  "key30": "55mTWFRD17UzaoTbsXTfiiYugf7uGGoSyy8uoaPx2GFHUr1FFxNWBJw48Cenp721z7emwPeb8gnik29nYy5AZc5Q",
  "key31": "4UQ4bJRC5E1whM6J7JYKELrkSFyj5F7eGNMn9RCKety2W1rVfeh2VGGfsvwYfccz6JLyMCksqFJvx5rC8eoQxy2j",
  "key32": "4SBKMj7Z641qdQo4GuuJDxjE2WZMeUNXPEm3TYsixMZHuFrk23vhuDsEoGcpP5P3sHV2MXRaA7skpfgyf264mHfa",
  "key33": "54RoULHs4GMyrm9xJJxZ51zDKqQYVvBVcGYUMP2Abc9cDQyAc5M6u3PA9ZQs6cNVo9i6b2zBcaXHBQUjCRs746VP",
  "key34": "4ej5ovgREhNRiTyYRJhLU9MBDnCP2T2aGZfYndArtqfn7ZqTNbTfGSKJ6za9z9ME3BiurBb61DzsCLZJYvY1NpSy",
  "key35": "5xo8VTLdrzMnZYTFg5rAAGE5ff5nNAMMJQNfw79baBedMCQ7Bw998KrorxKLY73n88mbnFK7CRuswCqnYsWdEc32",
  "key36": "4daGRQy2263855VFsQMqUcr5Xm1zj17u9NvsoA4dXwSk6ZYy6Sz6vphFJSZDSaVzG3Lq3LNWPXW7s3z6GdFGKs3T",
  "key37": "2c1JKX5PdjrGuBjxvi8qdrsx69zADJgf7PboJWBqkH6u99DSCU9CTYtVzeXTpDJ2fdEkmNXfkb7ySJcbuTLs3HQ4",
  "key38": "1RN4yqpmwUHvB2TeiKMvvtjeW2RsGQz3Ftzv2dxTb3wSoazc55pTBSqM4cs9NWx9GUchNL8wzuVqFrGkthkneAH",
  "key39": "gEabXcZow2finWdb4sNo4vU9HBC9DWmrHamGTtbS4fkTwVqgXYPG3Dm4oifGaNosNUBgovu3Du6KGFyp6tymvqc",
  "key40": "47XU7HoHZ1uPMHJsj3FKY1Pnh5pq1Z57TF8beNgUewoJUeizKAtzE2iKinkDH2jXJV2YWgXEufwbmxe99W5ZabcY",
  "key41": "5g6Nzk35QSQPoav2rneQHNvPyLAU7AV6HLk8qb3R3JszQtHBNobRbNv23rjgvxpE2fMx1sPvH82VpQaoQgBVgtbE",
  "key42": "NBbgFTHktTkV9Lhug2ixr6ztw5z6APvnHCZNWvN9cAJumToCXNTHXtRugKJVJPU6FrNwrKjWpajoGdf33NRGVNz",
  "key43": "3FhL2L8qtwSKHgJnU1QPY9jLLis2j8CeTyrZWTEfxxmJPaFi2YmAgvpdg8qVtkZQcXeLoa54F8LYjPQ2mVYqanxy"
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
