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
    "31W1J7gmW8VUAyBJ9WMDH2znnmp1B4MzvshMdvzMtRcY4JVXSGCAi9Yf71YVDLE1FoEoa7vbBcCeLKfuyzKcKVSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GWf2JttsC61rcwnp5AiCpBM3mWxMWjzwRx8TLNXFZrUMxcyQ6ozoF6TPKaEnFg12zg4SwvkBKMJKY4MMZ5Nin81",
  "key1": "2ow21a68nHEqgkuCDAy8FqPALNXpyr1BUbFF4Z51VPgFyeFM8smjVgUFiUcBoa5RAnRhGSiARXHvQRHAiAGybvw6",
  "key2": "2npVPukgu41byxtbZ31F2CcmQrwcY6kczQukHBCWdHGUp5qXPzdpbFxax3g9BMAb6pPJeFR5nUZ8oKb7oB8KzRHc",
  "key3": "3P87mJiiZXNM1csQ7FuFcnXW3XLYKjsLPTiJ3PoomA98EsKMBCnjTBBvh6F3LkcTjcVXujxU2og37v9kuj2gnmMw",
  "key4": "5fVxotp65ExKbGHZ8y8LtC48euzde2UvMVzjnfE5FHBqPf4M8io6LgsyT6phXJpsokMtLK7q73cXCePWhgRtVsoo",
  "key5": "yLvkD8d2y5cs4Y99F4WaBnVDBc33LMZ6zUpurcgn4y6D1r4BJNzhL5VQxzvmLZ89xDUR6MjoxhmxBjfLWsjgPF5",
  "key6": "2regbNcCP7TfvsNCU2f2CwWr2HSQaqadrVuVvvTVbRjoWSsVz8ht4kdWekGRv5mfsoPefhqV2BcMs8eB5vbzNArX",
  "key7": "YCmyvBKf4bza8ftYx4nDh931rLCmgcW6DgSDRiBfpzZLaXAwiaM82rrV1hBm9ujsU67MfZFTij5cMoNuautgUsH",
  "key8": "djvK7rbQMu56JJJ1hE7gUkNQQREGWqQ8THxZGCGbZAU9eeqk5UtvWej7uuu6bhH9DkS9q5wbmb5bisfAvE9xJgd",
  "key9": "3bq95mFBT3DD7FHfNc6DCYHUMeCeCy5LoM7qYD6ct9H6A1EANrfhzKbBbvotp992QdCR6oD5iQck4HCxVmFabodt",
  "key10": "4tXDZhvyWeWfyQqvgZerucQmw9UTUw8rgoygjFGQ1o73Y16uWjXsxQ44BUfy17w5u9wvYunVpUYBiMdUUfSWiiuj",
  "key11": "41Fkf1iNW1axeR46eVNK3VLXSpsyTfhFaGR38gEyNYBRLoqiBaFViWxh7e97UPhXBv6kF7VFhrdyCGnJ8mmmnooZ",
  "key12": "xSR3DR6pYoJeDDy73WfDEHftV1JdReyCGKmdxmz2WGpasgzCspZxPqn1DZGXxuexRAZbqacN8UVjNs8SKi7KdEf",
  "key13": "eHSrs1U2EMafq19BiawXGPVQxTe3GC6NXa3sCKyUGmfZrCfVbFuhjCMvCNWMMV6onJidryJf77NrW5jQeygBPBL",
  "key14": "2keERLWVXDzCT1hCSRFE8658jqY7LBc3kToN3qXxgkocF8nr6gea9BYiMYwrQc5sL54cbCZRCcQCB2ZZR1kpMHjV",
  "key15": "4pn4v34yK41gpHNjKtFK2yKuPX2xjuszUjtJw3nR5TwBgQxc39GHyRW74eHGJWH157pZQY2CfB85jESSmChmnia1",
  "key16": "2ib6eEbd26fAdbCgp6j64T8RrJy5eXznd7xLA4UrPbUxSmpcJn3F4h7uGLMyTd8Tstp3BherCuMAcremGgSvAeU2",
  "key17": "42k4ocgBfzqGd9xvU9j5MuoFoobuWWtdxt3Jmvs8HJLMK5cJJoguFt1q86otf7yBFHvo15T413KcyMhMQzZo6oyz",
  "key18": "4a9wXEya1um6hUqCXMXyuaBjg2iQ2Pz8Du6nv6N3tWmSS5AptLQasG2enbqSZeP1vtXjdCWKecYpYsdfpQ42JcqN",
  "key19": "2VJLimwMBb69ikSjWzMhH9C2tGSwukE35p9H7674CwHNHvXZNkT83G85WXP8qNFWWzcegYu1QKrMyfZfYPCYakSy",
  "key20": "2nfZhqRiZWA3VBFejkJ9vj6UURvd3PZAKge6iAXkQMywgNmTdgbR7gGXtrkMPjrAuacHrioV4fkvPuT9eTqrbu3N",
  "key21": "g2shNduqgnhmSPdkFwhPvBLG1fCzULkQ9AReQJD9xcRVTqhcV8L5BqCs4nVCZBtyX3NNpB7krktqNWCCHhbD6wG",
  "key22": "3xnTgeevvbtbisEtujywVWGjYQoUndty7MVi3B8ojTfazK7fdHgon4RMkPh3BT3i3Hem9tLaw2kYE7qpbsSTiQz7",
  "key23": "3GENUztL5PsuKNeaq6uuLy3nqnxkvQCm55LsaBRKj284JN1zfZjdF9LhwfrbhjFtJp5CQYXj7FKJdzzfyS28v9hg",
  "key24": "2ZonkEezs9CGMaVSGd42hF64PPGW2vqQa5frjHmP3dfXU6A78w48ikADLvA4pUa94qrfFXj1UNLor4RecGoSYv6Q",
  "key25": "4EeXxaRJm6pcxY94DosbyuNYcN8ZQHY5bt5hv1dPoufungktHUiS7GahqinLk7AJiFxjTT9v1HA1g7zUQrs2erHF",
  "key26": "2s3wzXiTU5gawKXfNf2VqqjMkL9LgCXtrs7DcmBvdLEqeMbYYrAM1VEWEeqYvjdrfwJZvYuaGMZEx9K4CNBx5je5"
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
