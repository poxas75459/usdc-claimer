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
    "4hKitYUfnbDK4JNmySajqDXifBkUpWw9p1SUNBsWzisFQ5rCoWVQaA7pheCe5snkAMUL86CmevN8T6adavxEoGYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bUNpyssMbk5UyEuT6km6UiSz7QQWhZYPG9nK4wbr6QnTgXebwke4Y1f49YbwtgWKWXedEFGjHFMUASMvZBCYLxn",
  "key1": "5TiCqhqU7XovJSuM8niZUfg9nKfPPi91sMcxTPRM9NC1jaBDsvL5UdpMfLWMXJzL9PePueSTomZ4CsS7EemVPB9k",
  "key2": "2ZES29qNL8M2nHNg4HYfg6o3SXF2ovxTvWrvW36XfLVtmW1TgXVAJxnj65zrJhopGMmQbYi1Fj77G3z3pgS2JGuD",
  "key3": "5nm7a8veYpJAsXZW3CNLmJ6PPgEnseJrZE8SDaLW9nDCZ4vdi2ijCdXsWZvzwD5CnfQzVKZnXARffwmyaX3kThPz",
  "key4": "34kBNkZNB9TYgVq5QAAjQ6t89ZVz22yfvX9KaCKJfSdoMPJJpoVDhC8ewGcWoutdqCchz92hYwsirqkJsrVg6XVE",
  "key5": "3KznvsngBxiaE297LQ7hYR54SUsbWg4rJZQJAs5Zzg63HYfAuyQ7N79Fn68u2Rt4xdFgJoxGuPzoXhZDXnHjN9TF",
  "key6": "2XQKt8BH1p3CBgMMw7P2Zt5fyeGEYm8N2Gwx8GeBuCwgavH2xD11MfD16PCWM3H46NSw7ZMpzj4ijSETJN3ngeac",
  "key7": "66YQ3nofYpag6wqwbM9QoWXYQuTkmqxfzpELLpawpdsHAfFxRuhzkxdTpGY6wpWva1G3WfAdKFXVG3uJXGotkGK7",
  "key8": "5na2nC3k52MUcFb1HxwoFnjEKRYiedV2vyEJPdyqUMRiVvFE22Hq3tW5AGWMptMenfVCLBMdJYF1QvAbUPSFKAps",
  "key9": "5i7vv8oZcpgDcwogWxLsZ8s7MrPuMs4TDSzKi3zUVdkjCDZ5pLaj4evJTeQa5zZhxQSAzkoxE4TPh4Jfw3GP3ekg",
  "key10": "2xuiK8mfVFnNTvCJK7jJc8yZLWXdWMJhLsFm8JCEa6t6zGbTVjsBfjthcjrasikzdweMJQ6dKfQpZKMHaygRS9Dn",
  "key11": "45ewfjdS3oAJScaMcCyq1z5k1jfAxaFVhdczL4auvknqhAzKopbEpu3TVzNVmbqzRhFgydo63DXSRk7VoN668rck",
  "key12": "2YcewqbQiPVEzdyxuAodLbBqMv6ojQ6Mwyb9LQgXCj86TmZXxwqpFNYGA2pVJroBjEZh58mGjKTB2KtepYXNmGgu",
  "key13": "5G3bu3dtRumqrM5Ainq2nQeGyuU6PPUgv6aooYdA5suqixz84MCiU3o9j3V5YB9XHgceSKKcvC4ZNf1Qi9iCXSBZ",
  "key14": "4zMS2jBxAAEq7kErmJwAZYDxxWM86vAkcA4hewr5V74c4e7FhBCBQLcMzrnKeiVhXtNEBXcsqwiUbdrwTdSwDEnK",
  "key15": "5cUGFNwJbrZKMr957crewAEq8DDayAAHKv5YWSNU9fWbLFBqQL3QLCgohMq6aWWNPxAkVEykeeM3w828ECGy54uE",
  "key16": "tkoy64ZQseztsQYEPm452cdRSYkDgDixuxGfnEX2TRxa1NE8d5opusSAxTN3CocsAZfX3etfufxWnf4p7gBkiCA",
  "key17": "5Jn1KxeyYsvwhxGX1R2kHohUUtRbW1pMwft3hrVv75pMHCDfGM6YhMyrcDAmcix1bGJnxfgrJqca9RxYdTNeiPdT",
  "key18": "3NWwrUfWkjXLwdpDQMr4wNdn8J4WFN6MKSLX5J4AMLZYunsF21uP9AVgjR2Y6MDMQDqJfRv22S78YqmNdJ5v2DyF",
  "key19": "4XfaajviR9VkxrWfHkq2bfbCaVA992RnSxGXP2SYJ3ayhbpcqmSGiSYkeaCAf7M5EMuPSZfHzYA9RR1bAvfXxBKV",
  "key20": "5QxraN6sEkNxRT1jxhw2sfXd4oC5A9QFTZmiGvtZxbdn44esFtSmjy4RT8fMbwsp8YANKrGkonxHMYbcu6ZecnRe",
  "key21": "uUEfCC3bzLdkaQ3WjUxAAXGphYMU6gyzfCHYw7k8dfZzBFz4GN4Y6DdTeAEZR9heJGMAuAmt4TtJWXpv5UwUAK2",
  "key22": "5JqQiW3MLKdNnygXXrGURHVibEUDRZW2dr1dtoacDYmvEceJ6EoD1DjhAsQDdiUveFNVAgjn7MHdEJFAYwXkokf8",
  "key23": "5rcfKuLeb74cgPm8TH1eooa2gFKLhzuSDg4rSEhGz8LGEaZFx2SGSR8BCXSKcqKXFKktg6afC2ayaq4kiGxhkYr4",
  "key24": "2MEeu4bdTvVeSQadSV64mk1GbVv56kHvGC6vkoha2HT8rcwP4jj1HyAT3zMEvGdD5RFiX6frZfHPH8hp1BG5NKrc",
  "key25": "h2z6a5kRynj4YLtHoRaDzEm29AkRsrhNkJz9gMVcVp3Mp51RdQXGAQjqxS6LZG6c1nFUC6BXFdUPHiFnoU8dWMX",
  "key26": "5RzY9bs16g14EzCyQwvP1fuz9ipAzYZBizAbMuRegejmjsHYyuP7DJEKmy5w1VnWBBopbAa1WeG6FTPrTGD1hgSE",
  "key27": "2tGnyShDfqt41FA35zA3UD666dLeq7zvZLWZqBK51QCxhEyWjPGjBdfyMGX13ts1N95dS6LuXpA8gYyp2aFoi1Qf",
  "key28": "29xwcMMSg9H31SLTR6TxVf6PbxwqZf7T2fwH9J1Az3eCjAfsRFwapx9a6xC56Y4YWYxt9CEAdHsY899armSGZVLx",
  "key29": "4j91UyNXwYFMBvbFuC3jj9MPm9N5BFMVExtGLmbu9ReHvAnrG8CNS6gQEudFJE6iqicAAXGogBVVVGrTpMp85TgQ",
  "key30": "3Ut6qBSfoWJGuJ9eusgy59DZ121b1CpYLsD9VJ61ev9ztmtKpdm6K6X236wDEUyvRBxER3WFPUxDfd21RohvRntc",
  "key31": "z33Pgv4R2iwz1x3Qi4Adu31eTu5UeKkcsdBTdKvYV29MLSuTv1PMszxVzFhCCcepVZtNj4F8RjhJKVLzeFAtw2v",
  "key32": "45yPzuerWK1AoGdEDx15r17z6YwbggYgD9X2DiGYncv2cUX89TmfkYFhG7ZhcbZs9apawzG3o5iMsHH4qYV77gmv",
  "key33": "YYsBpY2dGYva9hnsGRYeiWMXvgmVRKWNDqKSjDvros5KFvxwkxEtgUsUNHwUNjDNzNRjx65TYC4hoBvt4EfJCxA",
  "key34": "y1GWpbgb7YJwG4wfACihFw2aKcUWzRQHwUNnpgmAB9cM5KGvBkKQ1kL9uXiDV53P1uM6CZy6VnVo3JikEMvWmv9",
  "key35": "5jvjKsxoMrhrydwcCJUZd5pi8B8Y3oXwHGes6r567rcEjQTttd6hydVw65yoei9mZh32FZEexXJtU1pwgGAreZ5E"
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
