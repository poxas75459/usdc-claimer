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
    "ukhhssmj4HP5p69GRMwSRwy5CfVQHFekaK5RdEneVVUpBhibacr9BMZGDR9NF7muyo4suHcEcyFwkDSFj2ZsYJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C6ysrQitBxo6AucN5rZW1zvPwGTBGckhihsFzDcnd9xgNgzXNwp6bqU2Loi7PzPqRfPfxbQiwXUSqc8BcAcnWP",
  "key1": "5qxWgncadczvKhenX5JSgXVgF9Akjv8mPZK7NgmMAqU9VqRhvGpCoPxPk4AGf5N5iCHe3aZyyByN2KswLVzmmmLL",
  "key2": "5G2GBWBVQBS1jGXG2n26yipUREJdnRZPY32Vt4rHi7qEFY8QHqUryWFrZXvN81CzocDtEyQva98oE3rnPrQhXdAA",
  "key3": "461T7rT9ShrV2FxmTwTv3a6Kx23NGKgmQX2juHmJDhZGN6Yxx9dkJkcopEXACGsU5sYJm1M2TCZSYSY78gYuk94T",
  "key4": "4Bfzvmnw7S9TwxEizZY5H6y9Bsk7e8bcYhot87CzJ4ogG1PTxCnYoMmZEAdFcVzJ9p6NagkMcoj6sG4AMqT9shqN",
  "key5": "4r9hySP4qDK436ARPgApBxGsp7WC2yrEpx5KGeGyvHPMzkB9vMQfRjdQyD4LJHSPm6MRrfHMAAGgc7JU1kfcQFiA",
  "key6": "2ZC266Pg929HhxTipgntpxB9CGXeR2hDby7ZNipx8NNg47xLxVNpoiBB8MzqN16njtZAQQrmwGHv1NpwPKriZJte",
  "key7": "4mdPRskkVUtpv7VRQ2qp4DrSKjRXmJGjhzizfKb5CcLUUqsPSehAjuT1n7PbSVLnbDDzeAuzXcFgLDGcNzvAviKP",
  "key8": "2JM55kpZ9VxFXoUVY18Kerkc9Go7Nx46ToHw5RtDiACnRbA4mmmXANDNDravHBhBmVWFp51aTzd7bDvhLQ91Vve",
  "key9": "9cGMagX9Avi8Z4CNQf5ks4fLH5Zhjwr3nfH4XDzzXkJPVV96VQzZ9T7yokgtUHbLp6dbv1YUMnV7vmqHmkpdx4E",
  "key10": "3KVV9aB1yDViWfYNhWzeCzc6sKVX5X7EfaADKgrrmGoPi6RcH1mwj7u3M5XamUACcy2DeMWYMqXTtfcNsEtjPxJn",
  "key11": "35qFrKjiCUtZjxVTw1nH4W6iXH7rxo1Bv8akLa3xWzDLNXLURK57TtPyzNoa3zgXxaFZUB15yqhMUKoNh8Rdd8WA",
  "key12": "mf9fk9jceniHwVzYU8L6FWPSZWgvWW18kbLfmLXk5MGfpstcPrW5hM2eTkTk7s8ihSFnuSBTu2bEUJStTxzs76W",
  "key13": "5eyvpyT4NAAjjBs2a1azMonEpvpYq9tQqNwcz1r3vNFjN6eWVianR7W9CGuBXRUMKgpg57e33BcdYZtJYtsyRzot",
  "key14": "3k59L6itZdXLV9XzkcuFNMeBthswbzPmCDTE6RxKPw34cUz5oqkpTp772Spr3okJUXVM27zEcFgYtZezd95AGWAV",
  "key15": "RzR38hoKUX9LmaRDJonaxMz2tfgvHde1hcNAe5qdKT2WVnXpSa89zMHpVREQ6CJHRn7yqGrMJozUenyWvYDwqu6",
  "key16": "4XT6JXghQPhfFG3GRQudAt9zbCBafWgurdWxgG2QgAT3JseugN8e4K6DxsyerhZ839Dv1NdnNgWrcfJ2V9ksqbGW",
  "key17": "5h5yyApuPoWMbXQqL8vhYAwnv4pgQSvMFLC8nh3krkyYVMkx8tm3SyjFEtcB2XQCz6kHiBsQahZgHNukDpMGFeyy",
  "key18": "5ichq1t4xtKg3miH1nMGZABsrv4ELUEwAku1MHwQnCSLFtsA8uMWR2MKjnp42mmki3TKxgXTUMAvfMm5YNFm9E2Q",
  "key19": "31w6YrQZRayvA3LqXG9yCyCChFEJv11gUSPH1hrLD3Fa3QLHE4d2jdUYbJib2L7FKdDbS8RgtkYa857abSoqqjZh",
  "key20": "4SyahkXnJNECHLjAgwmCedavJ91E1CMepKcFAptk2ShThQQyyhyskquEW4TvKitPN6vP3hiyjmjzrs175SUzHnpF",
  "key21": "3kD666K4BdQGYgYZAYWmmx4NVsyYJz8txEf1GQm374V8d974rhWS285rFoTt3xBC1PcYyS4eNpD71PmAh6wPHQeB",
  "key22": "4SXhaqd3FjMTqCTjuoqEfbhYZxaTV8LpnSrgF2jMi23Nu5GycaEUqoCKzv9mfJdA9gL3UG7VFU5gSFpxbKopRYJz",
  "key23": "2paZS5K2J7AEDZGy2QBRTLhECBWQr1DYuAReMdxPmgTYv4st6foa3SpUtQataFqZcTXqDqpFZF5ywLQ7Q9Nd8TzA",
  "key24": "mgB15BpdoBhat86bFUMFtYSsadQNBkHuTtdDQibA45w74QqUhLHkZ5yyAsq9g3UCntSjfkshePQxrZY5nobFpTx",
  "key25": "3ceP2eky7Uknh2nNYED6PxSt2HuXfDekTi6wpudcLwBJvYzhQ79vrRedjkkFfht9H774w2vWFFL8PZKk9LMDzHSx",
  "key26": "4eSLnCY3J6iLY38LTK1jarCFyLarFgfTMQRsEWW2VVkCB7Kc7kRDdTcat5evv1HvEFjcAYn1J2U54gV2fcYpqWiE",
  "key27": "vzawdDbVbXhUywJoz1PoTZDd7eBwmtVqYH3aJA6CrBDKsxhST4Ru31YVJK2X1HBBFwX5WjQZUg2TJbJXfiAoNaK",
  "key28": "4yk4SQC819oTz8HxQwDMQafjnWsqXau7zfcBK4DpvSxeadJGtSBanrQZTp2upM7JCdEaDV1UXwJejMNxvd8wtHZw",
  "key29": "P4UFpx1N5YWDHyLKgQWJqfNptKvSNLjLgqY7M96WgVHb6nq7zaZ27PNR3PNvtYXCfiU7dvZUtpJKcjfdeA7Qn2h",
  "key30": "64i2JeZAR7T3fFdpa3EQqcTt3JFvmi5bGmfJP5ENybbDTgXy5BKsaep4rB49k5SvMDSNs51cHw1QX5sXhfqeftRY",
  "key31": "4oY7KLFUggSNGqWi1hCf7Fwsohsp1qxFxqEWERGLvemUADVgm2nJAxToaLW7imcRTrGfDnPJKNQzeSp7ZhbRNVQo",
  "key32": "25sLdLUaeD7McrYdS8CZVv6JxZVuofVfKnDr2h1t7AcAMy8AoBR7yxa38st5wCvP729ENwzMbBGzpi1GjF8YpqQf",
  "key33": "Hokj167B68smJX366hRmbMgBc73JeeN9sjbYT3JnPm2p5mQdHGQsfZo3exa4Q63tSqMbhmndrXDJ5PfidVozjtJ"
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
