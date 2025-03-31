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
    "3KMTX4oTFBN9x96jpqZuPBQuFzwu2RtLbUvfjMiqcBdbDN1qc1zwR2adxfWHB45U8Q5mAhnWiJYFPnvDwFVshxas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rK2ztVsupwWax4KGk2PNxNRf1TcdZkuhrYusPn3YW3DJiztBeiahwkPazRTugF2cnAdDiqqXmtHTRkSGiXXGFA4",
  "key1": "2d5mjbquZFAjuPHtX6GjPJi5nrYjidej4rhM7uGCtTqZDgtpRW8UikAs3zcNbzSpuZqDAKpGHjDwWsEjv76T4ZBp",
  "key2": "5aKuAf1nSFY9UV6ko4Dv4JCjQYppZUg6wEdDutTcm5qQsPgazsEjiCrdqhthTmLNT4fNcyp49oq2nawvRJe5AgM5",
  "key3": "31hCS7a9LJZ8acSoQmzUUsr8ht6pFinRbVcRvCe9CC7sj5obbD5WVkRWhw9aGvFMD9Tg7BhhdRNzf9TNaeKdrRuz",
  "key4": "Pvvstubfz7qFafCekoDwyc6GrKXPPF6vWjrM4nHSSC1WoWEUnh9HXv9oTqxhKhSoo2Ab35kyBudff4fv2o8NG8G",
  "key5": "4qES1qZsQuZE52vsQ19QG3n84MK1VgEYyZSNyymM6o9ue3gFexEf643vLdjBjXJmdXJ64qKRHesbSRvNNpM7yJJz",
  "key6": "317V6VtBsLwsWcwNY2yVGshg5PmbAaaMK58ykkP6LEfwAzkUhJSxMqUeJBwX7chn1iPnVgTEV2YaBfsQ4iFn2MyD",
  "key7": "2A8kgzUcZK6rZPTKUz434XfMU5FyuM8RzUkUxAvbVoNWWgGSWGs3KpSNLHtKm7hXSZVgw52EW74HrZc9HWXSpUvr",
  "key8": "mQXtHMuHxE5q2BMzZ4PEoiKw13TF8q4hs2CnMpMBjvfet4wJg9DRUaiRe25E9rQPZsNzVy8WEUzG5EvCT1D5K4R",
  "key9": "35i2JhU8r4vmXNYSUmW5t4ywirFRh4gZScb5KJ7Q7f9SWeksBbvvH9XVRfzrrCNXEqNgHoYCqNKCFWKAB8PfL1yR",
  "key10": "3E6UxxPozZqrxmGEsYPAxkKAbhkyToxXLKfPbHXA5RLRL3L3mfkUhhqqfYTzTZDR4BAsTejLicAfP5794d657SR4",
  "key11": "592T3295Ezy6eEVxZ2EBqq8USfCptbKXp2iCHWmTKjp3uWH4kF1Yvzu5LMAdF9Dg4QFHAx6tSiv692zjRcRzzVSr",
  "key12": "3m9w94epJanNd6rb2wQXdCjHoYDjDgxCfLA2Xv2v6g49AQuKuxv9WTJWACoerpTesEgNpjtbpTur3SVicXR7foDn",
  "key13": "2Sf4zQ2giV4Dd3EnFx4uVaEJWq939HHGHhufFuNGNDZSdoZmgPAwXns13HKtcCNC7djwGY3kHBH7We2Mtvpw23g5",
  "key14": "5BuSXuCXS5fPJzNaZcUPSDJAsJry5cZCcGKuiiiS97zQU7mJ9UbA8A63udC9PcSS7tY2USDU8ZotJNtPeiJYXgEa",
  "key15": "5TGxSrzmmSsLXNdYbkxyQvFHsTMXfYRJP9JV8nHdD6nbNieVitK7bEBzEsMqNEU77pZF6DzK2LV8YrtTyaoq4bJo",
  "key16": "5XM8teQcj456sdBkLJBfkhucyE2sSwhAuq8iPmcpYNkwts67xbGxicwRx6yxNq3XU5pagGgeQtCsGFagpagCdN75",
  "key17": "33PhWTcGKsmgP9TMxVtbFnueKVgHSy5ywwEefzVbvrRg4EhLBn8TWXxGEVEAwGNybC5NcsnbT1BfrxeEYTwYcxeG",
  "key18": "66gmGL3U5zLUkDASp6tVBwFDj9B1kvSyQXYKwTeBs28UaxxndhJGP9MQr1NxCsPi5ue19pXyEtfUJvGsuZKCBGub",
  "key19": "2jUrwWQHpU4uHJyDFmFcxT28YEy3hRVADibXJtZGSdbeDWN3jojTFHsCaunaRBtEoN8mYVZhyzNgSVD3FTkJ5EST",
  "key20": "2TEqstka6rHXJ2yZjdwD2e121f6mz8eHaiLgH6Eii3g5NxABjJ3tRViNnm3SKD7XY9mTbTtXiNvw3VeZygkWBZHa",
  "key21": "55sH7PURNQXbFiP5SPxAXKCiWPp9tryMckTXSCj8pny9ZnnhubzXQXfPaL9yNYSAuwKnRgTnsLcKSNA6yLppNZjL",
  "key22": "UzkcfzA6KRFjoCL9bZjgqs4R3Mu81JL85sdL6QqmFSKdgXx7a8DkFskGjaKaSsKCMy5Kyy8dib4NvTXiERqgYPU",
  "key23": "48rapRBTAPoxh4zngj47k8KL6qbAhJGg5dS3EvkwSGtkZVNaJzrn8VKRrHMWkGWAJvA7pBk9uyKiaQVgn3MJoYw5",
  "key24": "2XPCLcVED6KUbH2NdwTwVVum9qbmfPWL7wQ3h5AU2rr9CEmQwSXzVDtw9LMcAJd3MjJ8yjN9YXjNVbnyAoveHfJi",
  "key25": "239c3x7S3wfFbhWRaUKNdbcHjahri1epBgXxiNJkN7PVTnMzbtXeGzYi37ULMMb9GEL8r1ssqLCgUJxTENu4fbfr",
  "key26": "3Qah21XrjFmexhUV2ngmWgpwrgSqkAcRtfKYaE7ivsxRMVE5e7sKEevLUu7EpFsEJcaHpB91ZAMuMEKrAz8vm7kA",
  "key27": "3df9zDv4yBLSg3Z1r87ZS6C54xVyrGUVhBaPiYgfoFxu6XUR3zR4u8gCksXVn9KVPmEDH6EsqarJk2ndJpTFKcJj",
  "key28": "5YjvpUnUY98DotdG11de4bk1yE4nZ2i2vt9YVkGL63B5CmsQdXajJJvwfdxWh97t7LnYGP1WCHsz1YgF3D5vhd8P",
  "key29": "2V5oByEA8nV2ZWZq2CH3mVsmhP2PA2tkXTCAR5vMuCXH1rv31s8Hu4uxr3sJHqiyM48tcdEJytEcbDYYQvgtqq1w"
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
