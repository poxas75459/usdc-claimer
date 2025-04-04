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
    "6xbqfvkafjNfufvYvxA5iBC3hhqNNrnwY6GVZXq7EjKrNRNkR1o8BtpbxVrdJPJe2wHoPcRG37ER3ZQJP52xu6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KY4mwZ7g5H86dLMYBaHgJfMNc8kjnKJWeKLL3X9nKR3PXjx7DGKYrZJrHwua2KUGVdbghbHU13bM4MtXovA6EPK",
  "key1": "5QFboHZ16z3aEjS9LMHSuG4RpyW8bpwp87sBkfRt5Km8brYHBr4qwBHHwSt34GKPjCQdje9CAaGEs8v6AbuuRxe9",
  "key2": "SWiDd5bzg43UWLxzoyNiY447PMNi2ysUFpnMrJiuqZkhAj9RF7z1LWkr71SiJ6adhE39yWoNQAR7s7n3vu9DU4X",
  "key3": "5eekZpjCaC8KqZxxRZC6k23fnX4qxhnnH6vigBhpBKgqYEosHgaWifEUN5ksoe28QeYAzzsKQT9mcoZyPitpnYZk",
  "key4": "2iUPjuDsq862h1FQHKoyr9UBeM612uiGr4brRfuc9MNByx7nrbAaCYJhjXoVmziFsKqUJ6ArBE7wDfiM3qYGHnUi",
  "key5": "4kTsdx3buzwbe1hox6FPsjVmqLgnFXpgTa65J27exvPaaJKov35APTq7nBpdZ9c7ueFBZDuD3wybZPeBU6toS7wa",
  "key6": "2Kp9kcWCKXx2AQKV3RrH8y9URreqtnGbXKB4w2Sma53PGEYUV4WMBgeMJ83wwv3f5UELhyzXY2DQg183tWbiRN1u",
  "key7": "5HB4du3q34NVzNBx1q7iJau46QcQyQy1Vr8yywyhGhoeRdaHHsiMs48S4m57kmy3tzvxgHUVwzcoWLUK7wdKVzJd",
  "key8": "StMRGWP5wQiguLgcaeCKpfxFRJS1jbSEeznyZgFvwLwsczmGEMfMFffAeB72GnhetF1k3nB1wX6tLEHoDke1JyV",
  "key9": "2oC7Jk31F758rFmiBadZvKD3jTyqVo4xsq2FuDXd62hMuxqeaypd5HqHroivMt4dJVj1qBPCrfFejvK4NNideRZD",
  "key10": "S3g3JYCYbycHqVuH5vsmvfyy2hQfsJJzqLD9FWf8hPySoSZzkLWgYM4q1Vm4LbtFyDSMKQbcYqKbUzpJkXdn8J8",
  "key11": "3oRs4VxHfg1ajJBNFcoJP7cqo3y2JjG987nCkEbtrRV7gMmaMqf69bT8gwzQMMzyL1YG2es78jfHbMwCxV73Xo2x",
  "key12": "4ppvY2KArC234HyHdk6eBXnPoHbXmcd1P9Zw1zTDRU3M9gHxPNcLz57Ycuh4BHVywRQQMjPLUkbrtbppNC8NoRC1",
  "key13": "4z4A6x9H8uwdaQZ6Wu5Bw8JhTDwiENakh9oBk8ACLaECrPrKrep14TT9EPJuYBm6YMu5FpM9rrcuhYGAVvtmBPFa",
  "key14": "xVnJFYuBtGfGqamtjad41Tn4idCJL3cB9w7ULipEa5MbZAwfVyiGFUqheHD9tyrkyZVfbK6LbwVzAeqMWTWTN3z",
  "key15": "4e9Cpi8fAM5ZXn9RjthD6WFJp3A9jwh4iBPakyuAwpmCBuJiT2wGK3J6zkBAmynrB9ryADzbuy5hZBFyvJpq6UAj",
  "key16": "4gzsJnWtreFbj4PmC1FgJuGsU19mN3XqdRqgzFUmHZWUjeG9RVcXGjCH4mbJHfSgev66r2KSLUgtx5eo83oiakff",
  "key17": "4kqXegn3yVqq4GRRxP6S6GpYLBNw1gUvggyC6ryAazo4Sgs7JCT4nuH1o5gACAeXPoHdcqiWgAtEkuYH3UB3HrC6",
  "key18": "4SA5azqLRLHBbwfeXLmgrVcpyMD6Msv1mEYJm3ZEwBv48dPeV9JQ4rDWm3te5cSnkrkAER3RB3wpzxiFzBCqZwAv",
  "key19": "2ph3j9XZfhyhuJRaQ7oQ5iUQY5Mji45A55qqPZ3C8w6JncHfnP3MnpPYf1MPH1ogM6NNnWzDqNNcrSy4whF9M6ja",
  "key20": "5gkAgVs1aXfekQWvLRaDbqY2t8L1cio216wmpMHZciWUGg1XAfNJ8aYLJszGoEkMoLtqxEKCyoJb7tY8NZeyy2aV",
  "key21": "2U7A7zpaLmaoxp97Siz2otAfFJcw745s8BECUfHbBTdk5sBfU197kKbGLpXXc8zzxqXBFEJSHBeJwDcX6wAvBGsz",
  "key22": "3qSkxf13Xe9JmVpGirvScYFmBVkD5mcSic5UkgLZ9MDiFfkebKxSYHv75jAD6GS8rerfRqT6y9MVVdaot1zmUhcH",
  "key23": "4WD8Z7D15Arog2kPoP32Lqkgn3y231WMnQYvF7QeV15vKSXaBnpWLEn5B4TX7PbqUXcceVtYGnRi25tyzXhNghVb",
  "key24": "5bKdgyo6DQSBifwAQNcz59p9uMJF9BD2VD3zfdNgWF1M6jAAMXq8QTcap3dhBJ5kys1JvUBcKG93govYA3vn2EF",
  "key25": "y3B9WBApkWekPCY1EGX3i933RjjuLmdW1WvHUv31T6wp3FjUxFVZpg4y5FCH17qEXxdw7jYg5m2Tu5Uq1SsPaYK"
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
