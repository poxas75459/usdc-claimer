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
    "2iWf8dw3vZ4SRrML2MuRdvRakYdTJfqXH8yFrZC1xFKfaAHxPpshtrPzEWnC7vGJPBN6rvDhv6w4CSzPscbBTEbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SDGtVzpDA44gnjQXmcz7jsKG4ZP9rVtcFM6aY2As815jrX9RSwmPVcU7odwMZNfYF5mmhnHoUosv8MFtdU6iw6",
  "key1": "4Yo5eUpztYwYt9Eziay1gVKAc2wpicigWTXLxR5NuQmFDXRY6DqvzTSjfRmfbPeKoSSEwjKX81eQwJovQ6sbKCPP",
  "key2": "39Ks3zjKbeoUWmStdigJSVceNb8f3zrm7Ww7y5owNaom9iXHm2Y2P8on3Cr1PmeruaAjoXy8sBorDx6SFx9eW2nE",
  "key3": "jZWNWmB9sLGcXmBxipZg7Up57ajTtq3cWpNddR6v9zQHtPF4XHMkvX2wDi6v1bGy2qYr9XfQLsnMXvVC9gLR1GE",
  "key4": "4xA4VDDWadXgVT3ELoTAdnHDYJ32E4Fgan5hdoXZwmLCwc72umTSQQ69xyPsYecCW1ay5W17HGnf9D1Fw6ThjEVP",
  "key5": "yL5mwcAFT7XPg7CtCLQhPabRyEfMRVWQSNCkmNNgaB5NBEgfZbAEQKZAjkzkanzvSFZZhv1XsgoWWLUnpZo4XMz",
  "key6": "3gQYzcPKLZ936Tfhs5EeqXz11PQi2yTK2AFZKpqJ8AciGidEi31ENRKuv9h84HeZAqV8DoiRoUPQ4vLyAeDWwBJV",
  "key7": "4TKMYNayqyd5tUjJnYGZK8v1RKDHHXwzzpcQAXcRpcWbPQXv1Y33qdVQ8m4G7NNkpfpP8oDRFwq4jLazQC7c4FoW",
  "key8": "2Ea76fazGAsc6U2btM6o9a8u56jLXTbF8XMSEZs1QPzLfHsbwjQVx4QeVDdH3EF6ESSVC6PdXMsqbE7XiWJrg2Cu",
  "key9": "5S3NT2EzLAND6z4Kaw84RGBEc6b3yFhEJS3ob2dt2REYaiRgFsVG3e32wSC2VjBnSvEe8j6ofAzZxuybHCL5GEGP",
  "key10": "5R1cvHLVmr4WMwvyjc4Sn9BXnYz5azfz8gW2NZ7WguhGgaWWshVwuakFyMTXMKDToajC6AkSWXKDDgiJtSdkvGfh",
  "key11": "2Twjh42uBEdxZ2BM1xqnsoTY4ZzqHPbwgHQ9xZtsNZ5nJhnTAJFzMX9edf1zApZXWeuJWKfP7DBBr7yVbkdkyeXs",
  "key12": "4XmYFCDF32zZynoRwFbSExWXVxfuV98b2fT2ukXKtiGm4p4L8xNaoUkYTECc5JhBUR13zzEeLfnfC4xBkcvRMTF4",
  "key13": "38uLhXiTsjuSzWHMS5WV1TUGbQwyJzsjtXEAoZPUu1haAt5Y4t3bLVkeRG4Jx7giTpVZ4Cchuq4A82otwi7ykan2",
  "key14": "4rMq5yojXZenQ8BCUmZX8BoZBiLSmtnyTzBd8kQDeSg5jwhKUA5cQasxsYnh8EsVyTFo1giWWZFYSxLB2k2PiQXA",
  "key15": "24wV7Gmp9h1AfhiB3zStF8smMsGHiv1aZMcapgwtukFw695VpceApeLRWM4J4fnHgrTPJktUboM1oHcCNVDNox3k",
  "key16": "2NUPUQSyv7pf6yTyNodndv6L1qkcddMqCHeeVjWwLAgekC5F8qpFNSzw6PxsV1BcwdawvM3ZhHy8QnXogQPSJpiH",
  "key17": "2RWK6sR6uvtjgNyBYdQcQGcUnRKKYjP19ScZc5fbGPfM8V4zpUMjD19V8hPM3sJ6wSfN6fPZaARfWcbphVAvQ9YP",
  "key18": "4Fs2tre9JcdxHVpGj88pcqBa3LG2VineiccEGBRWcfMQZQtz5CHgLHbxMTeYpwU615f8EWosKdjq7vc8vKaYNcd1",
  "key19": "65hTqRcYGhv1Kxu7bPN9E3KfM4aiMBD2tdUEpy9Lookp4QVNAhqn9jipgDsXwtNYyext9PQCoJpMVnivDq19K2b7",
  "key20": "57UFmgbuc8XEUUEmpcZvo7otwR5Xp4ZkUFXrMpHnhpEngot9ugRSX6WWrd1UPig2Xo6WXcYyeGpNChFX8VsdwgFH",
  "key21": "5zS6sddtx21VZKnXhP5XmSxnYV9cWWS4Rnx9KfFEJYXgh6GprycXn8N1g5K8WrSSEgg3Q4WWeGHfWiCpoW8YEyFR",
  "key22": "5Yax3QbfWJxkYvdr33QjXxq2rMVxemc3HSKXVxdpCxLZBjuzssXbSvmqN8JSnyBX3yzJtk834R6fxnRL6npTHsSB",
  "key23": "3gKpabxNAL52MQmsHXvWrKP1JYbHUzfjT4fgb7oeU5V6tnAVJCTBABmxHFfSieshUF1uYLcj3n2sbw4gMDFCAyqM",
  "key24": "2nkcPCGTCGn7GXgQx6Ky5eREsrms4QNEGYPgEbE5LwpWGnP2TLxJrq5MXsVtgy67jdyN8Ar4JnXSiF6FUuRcXNWr",
  "key25": "dCRV7oErkEcMEh1sewRz28kPEnQAjQgbX4wnhbAMtFyKzUEB6zz3Cm8avkYraqMkJobGMQbkx5p2HSgKpuzVffK",
  "key26": "g8qBfnCUEA1PXqNGyb17v1PqCVp3BWEbrRYoAdzPktNsy8cN9BQ1wFQXCiFZUf4W66r7gwgE7DmJHNuUuYgAhmJ",
  "key27": "5ztjb3DDENignLdp6F1YBeVArEXMcqFPQocy1q1dAZn6DKwCpmADpvzLq7V7vDDiys9rj9j1CgHYZV4CAnf1E8qU"
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
