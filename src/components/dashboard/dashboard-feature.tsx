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
    "QQ4ty6BuJqrDY68XQAbfYDKZeRUYshyTTqAkcHeFSetHSJEhVNYUkDLwsYMveqm48x96fB9see8f6fa2twGJ1Uy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LPrx4UQQ9ZyoMgCx7K29qwShJE8LxiVwQikefkzuQR2ivLsjKuEWFt8MWuXUhkDjCSDNdWe3tkNyyNZyno1p3d",
  "key1": "3a6hAwrEYwLnEpYTw9f3ZhDuWZEL75V8JvQPyKS4KoymhFJLx5kgycPnhpNjPZzo5tLiEFfcyFn1b3yu4QGAYEhQ",
  "key2": "ihahWUJ3YAB6C7FfJujGWaKoTF4kMj853JeqYBynDYLNc2ky7Hgmx4sUwrdqAqxYGvDC4j4oaqQhGFhnEWAFfT7",
  "key3": "bKgwS7rJ6TFo5yiQPCBEbq89WciiF6tJHr4z4YhineLK2R8da751juq5bX9sBxd2J4KYTTDLyxh9uVp7Kz2KZoc",
  "key4": "2cymnErGvJDsomnLoa9A4UcD4nzpPqE74UjkZru71tTjXHhj4csKP5dQwLLGafnEXqyEDetQadsamN2vPCb57CjZ",
  "key5": "zcbzuLE4tg3RqjExy3W4J4wk5GPeNPEV8RT72gb3oncE4GjTy4G7ZUqT9t9UDA4HX1e5goSFAFZ3qfcUNqtaCB4",
  "key6": "3WspoNhPHZbjmQEzWggTBppTCbaRMmAaSF6aeTTL3HjriTrisnPyoRNWpwYrEmgc53TVCYQxH4J7cN4FM7fWeFkY",
  "key7": "3sRZMzmTiDQowgxNUqmy9MApxm7GnMoJWChMg7JtdjSakoy2Nf2pUr4aU9BfbXHBbTmdsR2db7VTayPfWTPwnqF6",
  "key8": "2hBzkzF24rshcXcxDoVizkZbCYEqxQ8NiMN3BPoTCXFfNjxbpNL8yi5V4EXMkwBkKdHRjTSJpcr4GSxBUDSQxnon",
  "key9": "FGSv8vME5GGxKeDujZmRiKsFr8uSvHpYvvY5wXfxzUE3a5iLQLwd7TWZUUnqMpwHScgH9hT7SABstm57ny5GVKY",
  "key10": "wYgCjgeAvnSMXC4G9kSGHUfk5kr7wuTaTvQ4vyoqLM46QLT8EjKArdQGUEz7VAcqNePfGJ5urphdGyGdeJR5B7F",
  "key11": "27AjBrLV8V3hJAtvMYHd9t8mcgozkYeyc3AYWG91EkgkeWBLEoArbMuwS6iq23cRr8rNT8GrzxTBDyatx2CZGzSv",
  "key12": "4KNUxuEBHmtyk31E4riDvs3bWXChS4xkcXjNQCg7KnTdW4jfUJZXd1oGSFwkYYuYKRLYaepobErXZjUV4VHCkcHx",
  "key13": "4t8eBFe1P5DrWDhSLa2FGMxP4SnLQQhK9Bp7Dw3WcHq6jAK1GgcLcxCdgRcUfX37D1r3damsekgdxYWhfWFs2SNX",
  "key14": "jiyJFbUu62pCxSCa5KUpaLA5PYW5yKAndb2VFyn2XivCUzt5sLB6Ly1fpQdgBosU2bx2GY2sSDDfjWkLYiL51rf",
  "key15": "tHKq2v3G4D9WvUsUPs1Sn6AmxxEtUZHmkQKxEUcqZePwZF29T2TwJazU53Y1fuu25buKEL7qVJ9scZJmHdprYR4",
  "key16": "5eEs4Er5ssgoXcvKnuFFWDebs1Kcnid24Bzy3WSwYuL2ewHCdeSvyirLTQtxzJDJXDX9cUgPMUs3S32DNJPJNeQx",
  "key17": "4AbQWi3GnvGp6phimyDrS4McZjfDhxqWxNbpebRxQVJhRZceLDMeiHDrEbSeLM6TBy9SKJZEHLP3vLquGhc7p96B",
  "key18": "2sL6yDnqoDKhd9MYUK9JpUSNx3qTPi881byaWQPRHpsNzeJEnpJbvosyZHwj5NftTsYqfRGDDLhCeRhnhKcnB2KK",
  "key19": "42QZsuqjhhm5DtRJZgUoDj2fACun9LzhiEWoDafGJ4ptfxJstz3QQmH7xHfeF6rXSEkFp7q48bPBeu3BkX4vBKRG",
  "key20": "2UvHvisgMD1Ey2spEnFZq8eWraAfLrQtMs9EkaSVtQttamEFgP4LbV1q1n3MYgXWrqKqFjjx8Upijfeks45tzNby",
  "key21": "vz3zFnGPgymdyyzzaZa32dzrZVDMqAV8prmmjotKvhK9Urr9SDXaargLcT6enzdVZZHgXV8ogm7k48FbsPXadm2",
  "key22": "2rZ8oERhAhfu89vysxy7g5aWcVLXyA3atmr6aK1jfA8sPdrW4FXVZKABzYVGqX5vFRvAD52VdHeG4fHiAYb9Sse7",
  "key23": "b2ThWqZ5EzSHgDw3teETiphGQ4BZhXQ2X92zJm3fjAGahQi43P4Tqezbsdvtkfkz2yKm6cHgNF34cCNzZE4yfFc",
  "key24": "5Sr5KUKjR8rXfEMjvWXznJgX3nyxgGK89cpPjTCBjVQcp8TxRrefvGnXz6hSHYFZp7uzCMxQvXNU9yFdXPXgJM4p",
  "key25": "2j2mScvBjChdHmaU7VzSbZe9VBKybzVSGSQRZzXt8zVS26WgRZfw48ierXMapcXU5ZDJTMBKDFsSr6KPgw6N1FX1",
  "key26": "3ZyBccMLa1r1JwvsSMWLFbw2MdicTXgosR2ACwq1in3Gv1FpTRXjamJjLDQbvXCud4MkNfiJn81cmWeNU3cVwLkq",
  "key27": "22ZF3SRq43UzUMuaKN8mKyBgFQ8yyPmy5yy4kN2G6SvmetvLGyfeTPANca2xEGY5uMhneETDqwry49Kvpoiri6EM",
  "key28": "5hm8dmen7TL7pb31yEqMoDqf2r73r2ntB36Z9H4GyYxStp9j5h4BEfxNPkmsJ9Ak1ndSuTr2uno1kDTt8CffY7dX",
  "key29": "631vv6a3WS8YrxXvoPYoQbNkmcsnERDyrR1L6HL5EvhoVxfBu1S4LoqYQi3EmQjcJqwi4cvCs76w9AcydmUyuSj4",
  "key30": "3oX1FxMKcRRNo4XLMQ8yDgnTPgz2useMVr9dwW85CP1VKryGz5RvdKrKhkthsF1aXVLxx46TukBifmkXExzADLBT",
  "key31": "4zi3NtQotuydHVWYGNBKfDW55ZHGjzqSwDyeJypd8UsirdfahS3L3DnqLY8JAgqqwG6D3Qd5rViLAbxwpoJvXovF",
  "key32": "2mCZFS6Xe5VsqUsAAhi1JH3k15WjeFQrt95FogUd4efrGWqp2Je1jSZHUQR3xBdkcVmhDPGihrLp8a6y4HrgbSGu",
  "key33": "mssazNVVDz4U8LBjCuHCk5cVtTSAV2ZXVi56bKR6Xps9VV1VdkducGWybYnYuQHZwNNamwYbeo6Sq6UJAUhNszb",
  "key34": "5yKLx7yXeVK11s6i9RZXuEKUSzqGL6fbokHjV98Fn4BbiiH599qRM62sxX3QAb55DtkWA4guoMfYto6fvnFG4e4s",
  "key35": "b7GzqmHSCBb1rC8mnLand3NRRvTGJ3CL1mrPFrm4GpV4VaNP1DVE3PkJhZnuAtbUcBDqsLufsy9NGSCesU1TWDx",
  "key36": "3s7QNGgojoASybGxWsJWBtMnLjBKyg9WNxSS824gNTjJx1Z9G7Rij29RQSjnz37uMFYTJvfK8j7ec7fn2ZuYZvDq",
  "key37": "5BFbvC982YG82HG2Wk7osZfoiDG9dJhyRtvci3YymtAtnyVAsyGbhZtDvWkqpVE4RD2sVX1i3Pf4Dh5tpnG2LQvH"
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
